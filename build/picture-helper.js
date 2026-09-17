// Shared <picture> markup: AVIF first, WebP second, the original format
// (JPEG/PNG) last as the universal fallback. Use this for every real
// photo added to the site — the original file just needs an .avif and
// .webp sibling, which generate-image-formats.js creates automatically.
function picture({ dir, src, alt, w, h, className = "", ext = "jpg" }) {
  const base = `/images/${dir}/${src}`;
  return `<picture>
      <source srcset="${base}.avif" type="image/avif">
      <source srcset="${base}.webp" type="image/webp">
      <img${className ? ` class="${className}"` : ""} src="${base}.${ext}" alt="${alt}" loading="lazy" decoding="async" width="${w}" height="${h}">
    </picture>`;
}

module.exports = { picture };
