// Shared site chrome: site config, the category model, header/footer/page
// template, and image helpers. Used by build.js and site-pages.js.
const path = require("path");

const SITE = {
  name: "Khizra Shahroz",
  url: "https://khizrashahroz.com",
  tagline: "Pretty homes, practical ideas, and a strong point of view.",
  description:
    "Home decor inspiration, cozy room ideas, and color palettes from Khizra Shahroz — for making your home feel beautiful and completely yours.",
  // Contact email shown on the Contact page and in the legal pages.
  email: "khizra.sarwar@gmail.com",
  // Full Pinterest profile URL. Leave empty to hide every Pinterest link/icon site-wide.
  pinterest: "https://www.pinterest.com/KhizraShahroz/",
  // GA4 measurement ID, e.g. "G-XXXXXXXXXX". Leave empty to omit the tag.
  gaId: "",
  ogImage: "/images/hero/hero-blush-1200.jpg",
};

// One canonical set of categories. Articles declare a raw category label;
// CATEGORY_ALIASES folds the stray/tiny labels into these 13 so every post
// lands on a category page with enough company to be worth browsing.
const CATEGORIES = [
  { name: "Living Room", slug: "living-room", blurb: "Layouts, sofas, color, and the finishing touches that make the most-used room in the house feel pulled together." },
  { name: "Bedroom", slug: "bedroom", blurb: "Cozy, calm, and personal — bedding, lighting, color, and small changes that make a bedroom somewhere you want to be." },
  { name: "Kitchen", slug: "kitchen", blurb: "Counters, cabinets, islands, and color — practical kitchen ideas that look good and still let you cook." },
  { name: "Bathroom", slug: "bathroom", blurb: "From powder rooms to full baths: storage, mirrors, lighting, tile, and paint that make a small space feel considered." },
  { name: "Dining Room", slug: "dining-room", blurb: "Tables, centerpieces, mirrors, and trends for a dining space that gets used, not just photographed." },
  { name: "Entryway", slug: "entryway", blurb: "Consoles, benches, mudrooms, and drop zones — the first few feet of your home, done well." },
  { name: "Home Office", slug: "home-office", blurb: "Desk setups, color, lighting, and small-space solutions for a workspace you actually want to sit down in." },
  { name: "Kids & Dorm Rooms", slug: "kids-dorm-rooms", blurb: "Nurseries, kids' rooms, teen spaces, and dorms — playful ideas that survive real life." },
  { name: "Outdoor & Garden", slug: "outdoor-garden", blurb: "Patios, pergolas, porches, flower beds, and backyard projects for the rooms outside your walls." },
  { name: "Wall Decor", slug: "wall-decor", blurb: "Gallery walls, mirrors, texture, and art — how to fill a blank wall without cluttering it." },
  { name: "Seasonal & Holidays", slug: "seasonal-holidays", blurb: "Fall, winter, spring, and the holidays in between — decor that marks the season without taking over the house." },
  { name: "Entertaining", slug: "entertaining", blurb: "Grazing boards, table settings, party setups, and gift ideas for hosting without the stress." },
  { name: "Decorating", slug: "decorating", blurb: "Whole-home ideas, styles, trends, and the decorating principles that work in any room." },
];

const CATEGORY_ALIASES = {
  Decor: "Decorating",
  "Color Ideas": "Decorating",
  "Laundry Room": "Decorating",
  DIY: "Decorating",
  Seasonal: "Seasonal & Holidays",
  Holidays: "Seasonal & Holidays",
  Garden: "Outdoor & Garden",
  Outdoor: "Outdoor & Garden",
  Nursery: "Kids & Dorm Rooms",
  "Kids Room": "Kids & Dorm Rooms",
  "Dorm Decor": "Kids & Dorm Rooms",
};

// Per-post category corrections (applied before aliasing).
const CATEGORY_OVERRIDES = {
  "diy-bathroom-shelving-projects": "Bathroom",
};

// Curated "Color Ideas" collection — color is a pillar of the brand but the
// posts live in their room categories, so this is a hand-picked cross-cut.
const COLOR_IDEAS_SLUGS = [
  "living-room-color-ideas",
  "timeless-kitchen-paint-colors",
  "small-bedroom-paint-colors",
  "bathroom-paint-colors-fresh-look",
  "modern-kitchen-color-pairings",
  "home-office-color-guide",
  "kids-bedroom-color-combinations",
  "neutral-bedroom-ideas",
  "white-farmhouse-decor-ideas",
  "sage-green-bedroom-ideas",
  "green-living-room-ideas",
  "green-bathroom-decor-ideas",
  "pink-home-decor-ideas",
  "pink-bedroom-ideas",
  "blue-farmhouse-bedroom-decor",
  "blue-farmhouse-living-room-ideas",
  "moody-dark-bedroom-ideas",
  "moody-living-room-ideas",
  "black-bedroom-psychology-execution",
  "black-kitchen-interior-ideas",
  "black-bathroom-decor-ideas",
  "black-farmhouse-living-room-ideas",
  "black-powder-room-material-choices",
  "gold-bathroom-decor-ideas",
  "black-gold-gallery-wall-ideas",
];

// Homepage "start with these" picks: first entry is the large feature.
const EDITOR_PICKS = [
  "cozy-bedroom-ideas",
  "expensive-living-room-decor-ideas",
  "small-bathroom-ideas",
  "kitchen-counter-decor",
  "living-room-color-ideas",
  "entryway-table-decor-ideas",
  "home-office-setup-tips",
];

// Which post's hero represents each category tile. Unlisted categories use
// their newest post. The first four are real photography rather than
// generated images, so they read better at tile size.
const CATEGORY_COVERS = {
  "living-room": "expensive-living-room-decor-ideas",
  bedroom: "cozy-bedroom-ideas",
  kitchen: "kitchen-counter-decor",
  bathroom: "small-bathroom-ideas",
};

function escapeAttr(s) {
  return String(s)
    .replace(/&(?!#?\w+;)/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normalizePosts(posts) {
  return posts.map((p, i) => {
    const raw = CATEGORY_OVERRIDES[p.slug] || p.category;
    const name = CATEGORY_ALIASES[raw] || raw;
    const cat = CATEGORIES.find((c) => c.name === name);
    if (!cat) throw new Error(`Unknown category "${raw}" on post "${p.slug}"`);
    const t = p.date ? Date.parse(p.date) : NaN;
    return {
      ...p,
      category: cat.name,
      categorySlug: cat.slug,
      alt: p.alt || p.title,
      order: i,
      time: Number.isNaN(t) ? -1 : t,
    };
  });
}

function sortNewest(posts) {
  return posts.slice().sort((a, b) => b.time - a.time || b.order - a.order);
}

function splitImagePath(p) {
  const ext = path.extname(p);
  return { base: p.slice(0, -ext.length), ext: ext.slice(1).toLowerCase() };
}

// CSS background-image can't use <picture>'s format negotiation, so use
// image-set() and let the browser pick the first supported format. Every
// path passed in must have .avif/.webp siblings (generate-image-formats.js
// makes them for any .jpg/.jpeg/.png under /images).
function bgImageSet(imagePath) {
  const { base, ext } = splitImagePath(imagePath);
  const mime = ext === "png" ? "image/png" : "image/jpeg";
  return `image-set(url('${base}.avif') type('image/avif'), url('${base}.webp') type('image/webp'), url('${base}.${ext}') type('${mime}'))`;
}

function pictureFromPath(imagePath, alt, { className = "", loading = "lazy", width, height } = {}) {
  const { base, ext } = splitImagePath(imagePath);
  const dims = (width ? ` width="${width}"` : "") + (height ? ` height="${height}"` : "");
  return `<picture>
      <source srcset="${base}.avif" type="image/avif">
      <source srcset="${base}.webp" type="image/webp">
      <img${className ? ` class="${className}"` : ""} src="${base}.${ext}" alt="${escapeAttr(alt)}" loading="${loading}" decoding="async"${dims}>
    </picture>`;
}

const icons = {
  pinterest: `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.6 2 1.7 2 2 0 3.5-2.6 3.5-5 0-2.2-1.6-3.8-4-3.8-2.7 0-4.4 2-4.4 4.2 0 .8.3 1.7.7 2.2.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.2 2.4-6.2 6.8-6.2 3.6 0 6.3 2.6 6.3 6 0 3.6-2.2 6.4-5.4 6.4-1.1 0-2.1-.6-2.4-1.3l-.7 2.5c-.2.9-.9 2.1-1.4 2.8A10 10 0 1 0 12 2z"></path></svg>`,
  search: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="16.2" y1="16.2" x2="21" y2="21"></line></svg>`,
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><line x1="5" y1="5" x2="19" y2="19"></line><line x1="19" y1="5" x2="5" y2="19"></line></svg>`,
  mail: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>`,
};

const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "Living Room", href: "/living-room/" },
  { label: "Bedroom", href: "/bedroom/" },
  { label: "Kitchen", href: "/kitchen/" },
  { label: "Bathroom", href: "/bathroom/" },
  { label: "All Ideas", href: "/blog/" },
  { label: "About", href: "/about/" },
];

function navLinks(items, current) {
  return items
    .map((i) => `<li><a href="${i.href}"${i.href === current ? ' class="is-active" aria-current="page"' : ""}>${i.label}</a></li>`)
    .join("\n      ");
}

const wordmark = `<picture><source srcset="/images/brand/logo.avif?v=4" type="image/avif"><source srcset="/images/brand/logo.webp?v=4" type="image/webp"><img src="/images/brand/logo.png?v=4" alt="Khizra Shahroz" width="699" height="100"></picture>`;

function pinterestLink(className, label = "Khizra Shahroz on Pinterest") {
  if (!SITE.pinterest) return "";
  return `<a href="${SITE.pinterest}" class="${className}" aria-label="${label}" rel="me noopener" target="_blank">${icons.pinterest}</a>`;
}

function header(current) {
  const rooms = CATEGORIES.slice(0, 8);
  const topics = CATEGORIES.slice(8).concat([{ name: "Color Ideas", slug: "color-ideas" }]);
  const drawerGroup = (title, items) => `<p class="mobile-drawer-group">${title}</p>
    <ul class="mobile-drawer-links">
      ${navLinks(items, current)}
    </ul>`;
  return `<header class="site-header">
  <nav class="nav-row" aria-label="Primary">
    <a href="/" class="wordmark">${wordmark}</a>
    <ul class="nav-links">
      ${navLinks(PRIMARY_NAV, current)}
    </ul>
    <div class="nav-actions">
      <a href="/search/" class="icon-btn" aria-label="Search the site">${icons.search}</a>
      ${pinterestLink("icon-btn")}
      <button type="button" class="icon-btn hamburger" data-hamburger aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer">${icons.menu}</button>
    </div>
  </nav>
</header>

<div class="mobile-drawer" id="mobile-drawer" data-drawer data-open="false">
  <div class="mobile-drawer-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
    <div class="mobile-drawer-top">
      <span class="wordmark">${wordmark}</span>
      <button type="button" class="icon-btn" data-drawer-close aria-label="Close menu">${icons.close}</button>
    </div>
    <div class="mobile-drawer-body">
      ${drawerGroup("Rooms", rooms.map((c) => ({ label: c.name, href: `/${c.slug}/` })))}
      ${drawerGroup("Topics", topics.map((c) => ({ label: c.name, href: `/${c.slug}/` })))}
      ${drawerGroup("Site", [
        { label: "Home", href: "/" },
        { label: "All Ideas", href: "/blog/" },
        { label: "Start Here", href: "/start-here/" },
        { label: "About", href: "/about/" },
        { label: "Contact", href: "/contact/" },
        { label: "Search", href: "/search/" },
      ])}
    </div>
    <div class="mobile-drawer-social">
      <a href="/search/" class="icon-btn" aria-label="Search the site">${icons.search}</a>
      ${pinterestLink("icon-btn")}
    </div>
  </div>
</div>`;
}

function footer() {
  const year = new Date().getFullYear();
  const rooms = CATEGORIES.slice(0, 8);
  const topics = CATEGORIES.slice(8).concat([{ name: "Color Ideas", slug: "color-ideas" }]);
  const list = (items) => items.map((c) => `<li><a href="/${c.slug}/">${c.name}</a></li>`).join("\n            ");
  const follow = SITE.pinterest
    ? `<div>
          <p class="footer-col-head">Follow along</p>
          <p class="footer-desc">Every article is pinned, so you can save ideas for later.</p>
          <div class="footer-social">
            ${pinterestLink("", "Pinterest")}
          </div>
        </div>`
    : "";
  return `<footer class="site-footer">
  <div class="footer-inner">
    <div class="wrap-1240">
      <p class="footer-statement">Make your home feel like <em>you.</em></p>
      <p class="footer-support">Beautiful spaces, thoughtful decorating ideas, and a little inspiration for your next home project.</p>

      <div class="footer-columns">
        <nav aria-label="Rooms">
          <p class="footer-col-head">Rooms</p>
          <ul>
            ${list(rooms)}
          </ul>
        </nav>
        <nav aria-label="Topics">
          <p class="footer-col-head">Topics</p>
          <ul>
            ${list(topics)}
            <li><a href="/blog/">All ideas</a></li>
          </ul>
        </nav>
        <nav aria-label="Site">
          <p class="footer-col-head">Khizra Shahroz</p>
          <ul>
            <li><a href="/about/">About Khizra</a></li>
            <li><a href="/start-here/">Start here</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="/search/">Search</a></li>
          </ul>
        </nav>
        ${follow}
      </div>

      <div class="footer-bottom">
        <p>© ${year} Khizra Shahroz</p>
        <div class="legal-links">
          <a href="/privacy/">Privacy Policy</a>
          <a href="/terms/">Terms</a>
          <a href="/disclosure/">Disclosure</a>
          <a href="/contact/">Contact</a>
        </div>
      </div>
    </div>
  </div>
</footer>`;
}

function analyticsTag() {
  if (!SITE.gaId) return "";
  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${SITE.gaId}');</script>
`;
}

function page({ title, description, canonical, current = "", body, image = SITE.ogImage, jsonLd = null, extraHead = "" }) {
  const ogImage = image.startsWith("http") ? image : `${SITE.url}${image}`;
  const ld = jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n` : "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.classList.add('js')</script>
<title>${title}</title>
<meta name="description" content="${escapeAttr(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${escapeAttr(title)}">
<meta property="og:description" content="${escapeAttr(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="/images/brand/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/images/brand/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/brand/favicon-180.png">
<link rel="preload" as="font" type="font/woff2" href="/fonts/playfair-normal-variable.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/dmsans-normal-variable.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/playfair-italic-400.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/dmsans-italic-400.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/caveat-500.woff2" crossorigin>
<link rel="stylesheet" href="/css/styles.css?v=12">
<script defer src="/js/main.js?v=3"></script>
${analyticsTag()}${ld}${extraHead}</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(current)}
<main id="main">
${body}
</main>
${footer()}
</body>
</html>
`;
}

module.exports = {
  SITE,
  CATEGORIES,
  COLOR_IDEAS_SLUGS,
  EDITOR_PICKS,
  CATEGORY_COVERS,
  icons,
  escapeAttr,
  normalizePosts,
  sortNewest,
  splitImagePath,
  bgImageSet,
  pictureFromPath,
  pinterestLink,
  header,
  footer,
  page,
};
