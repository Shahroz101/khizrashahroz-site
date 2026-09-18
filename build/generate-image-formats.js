// Generates AVIF and WebP siblings for every original image under
// dist/images/. Run automatically by build.js before the HTML is written.
//
// For any image "name.jpg" this produces "name.avif" and "name.webp" next
// to it. The original file is left untouched and always stays as the final
// fallback. Re-run any time new images are added — files are skipped when
// an up-to-date AVIF/WebP sibling already exists, so it's safe/fast to run
// on every build.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGES_DIR = path.join(__dirname, "..", "images");
const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

async function generateFormats() {
  if (!fs.existsSync(IMAGES_DIR)) return;
  const files = walk(IMAGES_DIR).filter((f) => SOURCE_EXTENSIONS.has(path.extname(f).toLowerCase()));

  let made = 0;
  for (const file of files) {
    const ext = path.extname(file);
    const base = file.slice(0, -ext.length);
    const avifPath = base + ".avif";
    const webpPath = base + ".webp";
    const srcStat = fs.statSync(file);

    const needsAvif = !fs.existsSync(avifPath) || fs.statSync(avifPath).mtimeMs < srcStat.mtimeMs;
    const needsWebp = !fs.existsSync(webpPath) || fs.statSync(webpPath).mtimeMs < srcStat.mtimeMs;
    if (!needsAvif && !needsWebp) continue;

    const image = sharp(file);
    if (needsAvif) {
      await image.clone().avif({ quality: 55 }).toFile(avifPath);
      made++;
    }
    if (needsWebp) {
      await image.clone().webp({ quality: 78 }).toFile(webpPath);
      made++;
    }
  }
  if (made) console.log(`Generated ${made} AVIF/WebP file(s) for ${files.length} source image(s).`);
}

module.exports = { generateFormats };

if (require.main === module) {
  generateFormats().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
