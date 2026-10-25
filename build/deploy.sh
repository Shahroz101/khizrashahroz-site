#!/bin/bash
# Deploy the built site straight to Hostinger over SSH (rsync).
#
# Why: the repo is ~10 GB (git history + images), so Hostinger's GitHub
# auto-deploy re-clones everything and takes hours, stalls, or serves a stale
# snapshot. rsync sends only the files that changed and finishes in seconds.
#
# Usage (from anywhere):
#   build/deploy.sh --check       test the SSH connection only
#   build/deploy.sh --dry-run     show what would change, send nothing
#   build/deploy.sh --bootstrap   first run after switching from Git deploy:
#                                 pass 1 compares file contents (checksums) and
#                                 uploads only real differences; pass 2 aligns
#                                 timestamps so later runs are fast
#   build/deploy.sh               normal incremental deploy: uploads new and
#                                 changed files, never deletes anything
#   build/deploy.sh --prune       also delete server files that no longer exist
#                                 locally (prints the list first, asks to confirm)
#
# Settings live in deploy.env next to this script (host, user, port, key, path).
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
SITE="$(cd "$HERE/.." && pwd)"
# shellcheck disable=SC1091
source "$HERE/deploy.env"

SSH=(ssh -p "$DEPLOY_PORT" -i "$DEPLOY_KEY" -o IdentitiesOnly=yes -o BatchMode=yes -o ConnectTimeout=20 -o StrictHostKeyChecking=accept-new)
DEST="$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH"
EXCLUDES=(--exclude=.git --exclude=.gitignore --exclude=build/ --exclude=node_modules/ --exclude=.DS_Store --exclude='/*.zip')
RSYNC_BASE=(rsync -rlz --human-readable --stats "${EXCLUDES[@]}" -e "${SSH[*]}")

mode="${1:-}"
case "$mode" in
  --check)
    "${SSH[@]}" "$DEPLOY_USER@$DEPLOY_HOST" "echo CONNECTED; ls -d $DEPLOY_PATH && ls $DEPLOY_PATH | wc -l"
    ;;
  --dry-run)
    "${RSYNC_BASE[@]}" -t --delete --dry-run --itemize-changes "$SITE/" "$DEST" | grep -v '^\.d' | head -80
    ;;
  --bootstrap)
    echo "== pass 1: content comparison (uploads only files whose content differs)"
    "${RSYNC_BASE[@]}" --checksum "$SITE/" "$DEST"
    echo "== pass 2: align timestamps so future runs are quick"
    rsync -rlt --size-only "${EXCLUDES[@]}" -e "${SSH[*]}" "$SITE/" "$DEST" >/dev/null
    echo "bootstrap done"
    ;;
  --prune)
    echo "== files on the server that no longer exist locally:"
    "${RSYNC_BASE[@]}" -t --delete --dry-run --itemize-changes "$SITE/" "$DEST" | grep '^\*deleting' || echo "(none)"
    read -r -p "Delete these from the server? [y/N] " ok
    [[ "$ok" == "y" ]] && "${RSYNC_BASE[@]}" -t --delete "$SITE/" "$DEST"
    ;;
  "")
    "${RSYNC_BASE[@]}" -t "$SITE/" "$DEST"
    ;;
  *)
    echo "unknown option: $mode"; exit 2 ;;
esac
