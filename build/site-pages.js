// Every non-article page (plus the article wrapper) is generated here from
// the normalized post list, so the homepage, category pages, search index
// and sitemap stay in sync automatically as articles are added.
const fs = require("fs");
const path = require("path");
const {
  SITE,
  CATEGORIES,
  COLOR_IDEAS_SLUGS,
  EDITOR_PICKS,
  CATEGORY_COVERS,
  escapeAttr,
  sortNewest,
  bgImageSet,
  pictureFromPath,
  pinterestLink,
  header,
  footer,
  page,
} = require("./site-shell.js");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writePage(DIST, slug, html) {
  const dir = slug ? path.join(DIST, slug) : DIST;
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

// "September 27, 2026" -> "2026-09-27" for sitemap <lastmod>.
function toIsoDate(dateStr) {
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

function plural(n, word) {
  return `${n} ${word}${n === 1 ? "" : "s"}`;
}

/* ---------------- Shared fragments ---------------- */

function metaRow(p) {
  return `<div class="post-meta-row"><a class="cat-link" href="/${p.categorySlug}/">${p.category}</a><span class="divider" aria-hidden="true">/</span><span class="time">${p.readingTime}</span></div>`;
}

function compactCard(p) {
  return `<article class="compact-card">
        <a href="/${p.slug}/" class="photo-link" tabindex="-1" aria-hidden="true">
          <div class="photo-slot photo-slot--img">${pictureFromPath(p.image, p.alt)}</div>
        </a>
        <div>
          ${metaRow(p)}
          <h3><a href="/${p.slug}/">${p.title}</a></h3>
          <p class="excerpt">${p.excerpt}</p>
        </div>
      </article>`;
}

function cardGrid(posts, className = "blog-grid") {
  return `<div class="${className}">
      ${posts.map(compactCard).join("\n      ")}
    </div>`;
}

function chipBar(activeSlug) {
  const chips = [{ name: "All ideas", slug: "blog" }]
    .concat(CATEGORIES)
    .concat([{ name: "Color Ideas", slug: "color-ideas" }]);
  return `<nav class="chip-bar" aria-label="Browse by room or topic">
      <ul>
        ${chips
          .map(
            (c) =>
              `<li><a href="/${c.slug}/"${c.slug === activeSlug ? ' class="is-active" aria-current="page"' : ""}>${c.name}</a></li>`
          )
          .join("\n        ")}
      </ul>
    </nav>`;
}

function pageHero({ eyebrow, heading, lede, extra = "" }) {
  return `<section class="page-hero">
  <div class="wrap-1240">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
    <h1>${heading}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ""}
    ${extra}
  </div>
</section>`;
}

function roomTiles(posts) {
  return `<div class="room-grid">
      ${CATEGORIES.map((c) => {
        const inCat = sortNewest(posts.filter((p) => p.categorySlug === c.slug));
        const cover = (CATEGORY_COVERS[c.slug] && posts.find((p) => p.slug === CATEGORY_COVERS[c.slug])) || inCat[0];
        return `<a href="/${c.slug}/" class="room-tile">
        ${pictureFromPath(cover.image, "")}
        <span class="label"><strong>${c.name}</strong><span>${plural(inCat.length, "idea")}</span></span>
      </a>`;
      }).join("\n      ")}
      <a href="/blog/" class="room-tile room-tile--all">
        <span class="label"><strong>Every idea, newest first</strong><span>Browse everything <span aria-hidden="true">→</span></span></span>
      </a>
    </div>`;
}

function searchForm(id = "q", { autofocus = false } = {}) {
  return `<form class="search-form" action="/search/" method="get" role="search">
      <label for="${id}" class="visually-hidden">Search the site</label>
      <input id="${id}" type="search" name="q" placeholder="Try “small bathroom”, “sage green”, “fall porch”…" autocomplete="off"${autofocus ? " autofocus" : ""}>
      <button type="submit" class="btn-primary">Search</button>
    </form>`;
}

function ctaBand(posts) {
  return `<section class="cta-band" aria-labelledby="cta-title">
  <div class="wrap-1100">
    <h2 id="cta-title">Not sure where to begin?</h2>
    <p>Start with a room, pick one idea, and give it a weekend. Every guide here is written to be done, not just admired.</p>
    <div class="actions">
      <a href="/start-here/" class="btn-primary">Start here <span class="arrow" aria-hidden="true">→</span></a>
      <a href="/blog/" class="btn-secondary">Browse all ideas</a>
      ${SITE.pinterest ? `<a href="${SITE.pinterest}" class="btn-secondary" rel="me noopener" target="_blank">Follow on Pinterest</a>` : ""}
    </div>
  </div>
</section>`;
}

function aboutBand({ heading = "Decorating should feel exciting—not overwhelming.", asH1 = false } = {}) {
  const H = asH1 ? "h1" : "h2";
  return `<section id="about" class="section about" aria-labelledby="about-title">
  <div class="wrap-1240 about-grid">
    <div class="about-portrait reveal">
      <div class="photo-slot" role="img" aria-label="Khizra Shahroz outdoors, smiling" style="background-image:${bgImageSet("/images/hero/author-khizra.jpg")};background-size:cover;background-position:center top;"></div>
      <span class="handwritten-accent" aria-hidden="true">make it yours ♡</span>
    </div>
    <div class="reveal">
      <p class="eyebrow">Meet Khizra</p>
      <${H} id="about-title" class="about-heading">${heading}</${H}>
      <div class="about-copy">
        <p>Hi, I'm Khizra. I believe a beautiful home doesn't have to be complicated, expensive, or perfectly styled all the time.</p>
        <p>I'm here to share the decorating ideas, color combinations, cozy corners, and little details that can make your space feel more like you.</p>
        <p>Whether you're refreshing one room or dreaming up an entirely new home: pretty rooms, practical ideas, and plenty of reasons to redecorate.</p>
      </div>
      ${asH1 ? "" : `<a href="/about/" class="btn-underline">More about Khizra <span aria-hidden="true">→</span></a>`}
    </div>
  </div>
</section>`;
}

/* ---------------- Home ---------------- */

function writeHome(DIST, posts) {
  const newest = sortNewest(posts);
  const featured = newest[0];
  const latest = newest.slice(1, 7);
  const picks = EDITOR_PICKS.map((s) => posts.find((p) => p.slug === s)).filter(Boolean).slice(0, 5);
  const [lead, ...gridPicks] = picks;
  const seasonal = sortNewest(posts.filter((p) => p.categorySlug === "seasonal-holidays")).slice(0, 4);

  const body = `
  <section class="hero" aria-labelledby="hero-title">
    <div class="wrap-1360 hero-grid">
      <div class="reveal">
        <p class="eyebrow">Home Decor <span class="dot">•</span> Color <span class="dot">•</span> Seasonal Ideas</p>
        <h1 id="hero-title">A prettier home starts with a <em>little inspiration.</em></h1>
        <p class="hero-lede">I'm Khizra. I write room-by-room decorating guides, color ideas, and seasonal inspiration — all meant to be genuinely doable, whatever your budget.</p>
        <div class="hero-ctas">
          <a href="/blog/" class="btn-primary">Explore all ideas <span class="arrow" aria-hidden="true">→</span></a>
          <a href="/start-here/" class="btn-text">Start here</a>
        </div>
        <p class="hero-stats"><span><strong>${CATEGORIES.length}</strong> rooms &amp; topics</span><span><strong>Room-by-room</strong> guides</span><span><strong>Free</strong> to read, always</span></p>
      </div>
      <div class="hero-image reveal">
        <div class="deco-circle" aria-hidden="true"></div>
        <div class="deco-rect" aria-hidden="true"></div>
        <div class="photo-slot" role="img" aria-label="Blush pink velvet armchair with a soft cushion beside a round side table and floral curtains" style="background-image:${bgImageSet("/images/hero/hero-blush-1200.jpg")};background-size:cover;background-position:center;"></div>
      </div>
    </div>
    <div class="scroll-indicator">
      <span>Scroll to explore</span>
      <span class="arrow" aria-hidden="true">↓</span>
    </div>
  </section>

  <section id="rooms" class="section rooms" aria-labelledby="rooms-title">
    <div class="wrap-1360">
      <div class="section-head">
        <div>
          <p class="eyebrow">Browse by room</p>
          <h2 id="rooms-title">Which room are we doing?</h2>
          <p class="subhead">Every guide, sorted by the space it belongs to — pick a room and go.</p>
        </div>
        <a href="/blog/" class="btn-underline">See everything <span aria-hidden="true">→</span></a>
      </div>
      ${roomTiles(posts)}
    </div>
  </section>

  <section id="latest" class="section latest" aria-labelledby="latest-title">
    <div class="wrap-1360">
      <div class="section-head">
        <div>
          <p class="eyebrow">Fresh from the blog</p>
          <h2 id="latest-title">Latest decorating ideas</h2>
          <p class="subhead">The newest guides, hot off the keyboard.</p>
        </div>
        <a href="/blog/" class="btn-underline">View all posts <span aria-hidden="true">→</span></a>
      </div>

      <div class="latest-body">
        <article class="featured-card reveal">
          <a href="/${featured.slug}/" class="photo-link" tabindex="-1" aria-hidden="true">
            <div class="photo-slot photo-slot--img">${pictureFromPath(featured.image, featured.alt)}</div>
          </a>
          <div>
            ${metaRow(featured)}
            <h3><a href="/${featured.slug}/">${featured.title}</a></h3>
            <p class="excerpt">${featured.excerpt}</p>
          </div>
        </article>

        <div class="compact-list reveal">
          ${latest.map(compactCard).join("\n          ")}
        </div>
      </div>
    </div>
  </section>

  <section id="favorites" class="section favorites" aria-labelledby="top-title">
    <div class="wrap-1240">
      <div class="favorites-head reveal">
        <p class="eyebrow">Start with these</p>
        <h2 id="top-title">Five guides that set the tone for everything here</h2>
        <p class="subhead">If you only read a handful of posts, make it these — the ideas the rest of the site keeps building on.</p>
      </div>

      <article class="top-featured reveal">
        <a href="/${lead.slug}/" class="photo-link" tabindex="-1" aria-hidden="true">
          <div class="photo-slot photo-slot--img">${pictureFromPath(lead.image, lead.alt)}</div>
        </a>
        <div>
          <span class="numeral" aria-hidden="true">01</span>
          <div class="category"><a class="cat-link" href="/${lead.categorySlug}/">${lead.category}</a></div>
          <h3><a href="/${lead.slug}/">${lead.title}</a></h3>
          <p class="excerpt">${lead.excerpt}</p>
          <a href="/${lead.slug}/" class="btn-underline">Read the post <span aria-hidden="true">→</span></a>
        </div>
      </article>

      <div class="top-grid reveal">
        ${gridPicks
          .map(
            (p, i) => `<article class="top-grid-card">
          <a href="/${p.slug}/" class="photo-link" tabindex="-1" aria-hidden="true">
            <div class="photo-slot photo-slot--img">${pictureFromPath(p.image, p.alt)}</div>
          </a>
          <div class="row">
            <span class="numeral" aria-hidden="true">0${i + 2}</span>
            <div>
              <div class="category"><a class="cat-link" href="/${p.categorySlug}/">${p.category}</a></div>
              <h3><a href="/${p.slug}/">${p.title}</a></h3>
              <p class="time">${p.readingTime}</p>
            </div>
          </div>
        </article>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section id="seasonal" class="section seasonal" aria-labelledby="seasonal-title">
    <div class="wrap-1360">
      <div class="section-head">
        <div>
          <p class="eyebrow">In season</p>
          <h2 id="seasonal-title">Decorating for right now</h2>
          <p class="subhead">Seasonal and holiday ideas that mark the moment without taking over the house.</p>
        </div>
        <a href="/seasonal-holidays/" class="btn-underline">All seasonal ideas <span aria-hidden="true">→</span></a>
      </div>
      ${cardGrid(seasonal, "season-grid reveal")}
    </div>
  </section>

  ${aboutBand()}

  ${ctaBand(posts)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: SITE.name,
        description: SITE.tagline,
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/search/?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#khizra`,
        name: SITE.name,
        jobTitle: "Home Decor Writer & Interior Stylist",
        url: `${SITE.url}/about/`,
        image: `${SITE.url}/images/hero/author-khizra.jpg`,
        ...(SITE.pinterest ? { sameAs: [SITE.pinterest] } : {}),
      },
      {
        "@type": "Blog",
        "@id": `${SITE.url}/#blog`,
        name: "Khizra Shahroz Home Decor Journal",
        url: `${SITE.url}/blog/`,
        publisher: { "@id": `${SITE.url}/#khizra` },
      },
    ],
  };

  writePage(
    DIST,
    "",
    page({
      title: "Khizra Shahroz — Pretty homes, practical ideas, and a strong point of view",
      description: SITE.description,
      canonical: `${SITE.url}/`,
      current: "/",
      body,
      jsonLd,
      extraHead: `<link rel="preload" as="image" type="image/avif" href="/images/hero/hero-blush-1200.avif" fetchpriority="high">\n`,
    })
  );
}

/* ---------------- Blog hub, categories, collections ---------------- */

function writeBlog(DIST, posts) {
  const all = sortNewest(posts);
  const body = `
${pageHero({
  eyebrow: "From the blog",
  heading: "All decorating ideas",
  lede: "Every guide, newest first — decor, color, and seasonal inspiration for making your home feel like you.",
  extra: chipBar("blog"),
})}
<section class="section latest">
  <div class="wrap-1360">
    ${cardGrid(all)}
  </div>
</section>`;
  writePage(
    DIST,
    "blog",
    page({
      title: "All Decorating Ideas — Khizra Shahroz",
      description: "Every home decor article from Khizra Shahroz — decorating guides, color palettes, and seasonal ideas, sorted newest first.",
      canonical: `${SITE.url}/blog/`,
      current: "/blog/",
      body,
    })
  );
}

function writeCategoryPages(DIST, posts) {
  CATEGORIES.forEach((c) => {
    const inCat = sortNewest(posts.filter((p) => p.categorySlug === c.slug));
    const body = `
${pageHero({
  eyebrow: `${plural(inCat.length, "guide")}`,
  heading: `${c.name} ideas`,
  lede: c.blurb,
  extra: chipBar(c.slug),
})}
<section class="section latest">
  <div class="wrap-1360">
    ${cardGrid(inCat)}
  </div>
</section>`;
    writePage(
      DIST,
      c.slug,
      page({
        title: `${c.name} Ideas — Khizra Shahroz`,
        description: `${c.blurb} ${plural(inCat.length, "decorating guide")} from Khizra Shahroz.`,
        canonical: `${SITE.url}/${c.slug}/`,
        current: `/${c.slug}/`,
        body,
        image: inCat[0] ? inCat[0].image : undefined,
      })
    );
  });
}

function writeColorIdeas(DIST, posts) {
  const picked = COLOR_IDEAS_SLUGS.map((s) => posts.find((p) => p.slug === s)).filter(Boolean);
  const body = `
${pageHero({
  eyebrow: `${plural(picked.length, "guide")}`,
  heading: "Color ideas",
  lede: "Paint colors, palettes, and the rooms that prove them — from calm neutrals and sage greens to moody blacks and blush pinks.",
  extra: chipBar("color-ideas"),
})}
<section class="section latest">
  <div class="wrap-1360">
    ${cardGrid(picked)}
  </div>
</section>`;
  writePage(
    DIST,
    "color-ideas",
    page({
      title: "Color Ideas — Khizra Shahroz",
      description: "Paint colors, palettes, and color-led room ideas from Khizra Shahroz — neutrals, greens, pinks, blues, blacks, and the rooms that make them work.",
      canonical: `${SITE.url}/color-ideas/`,
      current: "/color-ideas/",
      body,
      image: picked[0] ? picked[0].image : undefined,
    })
  );
}

/* ---------------- Search ---------------- */

function writeSearch(DIST, posts) {
  const index = sortNewest(posts).map((p) => ({
    s: p.slug,
    t: p.title,
    e: p.excerpt,
    c: p.category,
    cs: p.categorySlug,
    r: p.readingTime,
    i: p.image,
  }));
  fs.writeFileSync(path.join(DIST, "search-index.json"), JSON.stringify(index));

  const body = `
${pageHero({
  eyebrow: "Search",
  heading: "Find an idea",
  lede: "Search every decorating guide by room, color, style, or season.",
  extra: searchForm("q", { autofocus: true }),
})}
<section class="section latest" data-search-page data-index="/search-index.json">
  <div class="wrap-1360">
    <p class="search-status" data-search-status aria-live="polite">Start typing, or try one of the rooms below.</p>
    <div class="blog-grid" data-search-results></div>
    <noscript><p class="search-status">Search needs JavaScript turned on — browse by room instead:</p></noscript>
    ${chipBar("")}
  </div>
</section>`;
  writePage(
    DIST,
    "search",
    page({
      title: "Search — Khizra Shahroz",
      description: `Search every decorating guide on Khizra Shahroz by room, color, style, or season.`,
      canonical: `${SITE.url}/search/`,
      current: "/search/",
      body,
      extraHead: `<meta name="robots" content="noindex, follow">\n`,
    })
  );
}

function writeNotFound(DIST, posts) {
  const body = `
${pageHero({
  eyebrow: "404",
  heading: "That page isn't here.",
  lede: "It may have moved, or the link had a typo. Search for what you were after, or pick a room below.",
  extra: searchForm("q404"),
})}
<section class="section latest">
  <div class="wrap-1360">
    ${chipBar("")}
    <div class="section-head" style="margin-top:clamp(40px,5vw,64px)">
      <div>
        <p class="eyebrow">Or start with these</p>
        <h2>Reader favorites</h2>
      </div>
    </div>
    ${cardGrid(EDITOR_PICKS.map((s) => posts.find((p) => p.slug === s)).filter(Boolean).slice(0, 3))}
  </div>
</section>`;
  fs.writeFileSync(
    path.join(DIST, "404.html"),
    page({
      title: "Page not found — Khizra Shahroz",
      description: "That page isn't here — search the site or browse by room.",
      canonical: `${SITE.url}/404.html`,
      body,
      extraHead: `<meta name="robots" content="noindex">\n`,
    })
  );
}

/* ---------------- About, Start here, Contact ---------------- */

function writeAbout(DIST, posts) {
  const rooms = CATEGORIES.map((c) => `<li><a href="/${c.slug}/">${c.name}</a></li>`).join("\n        ");
  const body = `
${aboutBand({ asH1: true })}
<section class="section prose">
  <div class="wrap-1240">
    <h2>What you'll find here</h2>
    <p>Decorating guides organized room by room and idea by idea. Most posts are numbered lists you can skim in a few minutes and act on over a weekend; the rest are longer how-tos for the projects that need a plan.</p>
    <ul class="link-columns">
        ${rooms}
    </ul>
    <h2>How these guides are written</h2>
    <p>Every idea is illustrated, and photos are credited to their sources. I lean toward what's actually doable — one change at a time, in a real home, on a real budget — rather than rooms that only exist in showrooms.</p>
    <p>New here? The <a href="/start-here/">start here</a> page walks you through the best first reads.</p>
    <h2>Work with me</h2>
    <p>I'm open to collaborating with home and decor brands whose products I'd genuinely use. If that sounds like a fit, <a href="/contact/">get in touch</a> with the details.</p>
  </div>
</section>`;
  writePage(
    DIST,
    "about",
    page({
      title: "About Khizra — Khizra Shahroz",
      description: "Meet Khizra Shahroz, the home decor writer behind pretty rooms, practical ideas, and a strong point of view.",
      canonical: `${SITE.url}/about/`,
      current: "/about/",
      body,
      image: "/images/hero/author-khizra.jpg",
    })
  );
}

function writeStartHere(DIST, posts) {
  const picks = EDITOR_PICKS.map((s) => posts.find((p) => p.slug === s)).filter(Boolean).slice(0, 5);
  const body = `
${pageHero({
  eyebrow: "New here?",
  heading: "Start here.",
  lede: "A short path through the site if you've just arrived: pick your room, read a handful of guides, and leave with one thing to actually do this weekend.",
})}
<section class="section rooms">
  <div class="wrap-1360">
    <div class="section-head">
      <div>
        <p class="eyebrow">Step one</p>
        <h2>Pick the room you're thinking about</h2>
        <p class="subhead">Each room has its own collection of guides, newest first.</p>
      </div>
    </div>
    ${roomTiles(posts)}
  </div>
</section>
<section class="section latest">
  <div class="wrap-1360">
    <div class="section-head">
      <div>
        <p class="eyebrow">Step two</p>
        <h2>Read these five first</h2>
        <p class="subhead">They cover the thinking — color, proportion, restraint — that the rest of the site builds on.</p>
      </div>
    </div>
    ${cardGrid(picks, "blog-grid blog-grid--five")}
  </div>
</section>
<section class="section prose">
  <div class="wrap-1240">
    <h2>Step three: do one thing</h2>
    <p>Don't try to redo a whole room from one article. Pick a single idea — a new lamp, a rearranged shelf, a different paint color — and finish that. Small, finished changes add up faster than big, half-started ones.</p>
    <h2>Looking for something specific?</h2>
    <p>Use the <a href="/search/">search page</a> for a room, color, style, or season, or browse <a href="/color-ideas/">color ideas</a> and <a href="/seasonal-holidays/">seasonal decorating</a> directly.</p>
  </div>
</section>`;
  writePage(
    DIST,
    "start-here",
    page({
      title: "Start Here — Khizra Shahroz",
      description: "New to Khizra Shahroz? Pick your room, read five foundational guides, and leave with one thing to do this weekend.",
      canonical: `${SITE.url}/start-here/`,
      current: "/start-here/",
      body,
    })
  );
}

function writeContact(DIST) {
  const body = `
${pageHero({
  eyebrow: "Contact",
  heading: "Get in touch",
  lede: "Questions about a post, collaboration ideas, or just want to say hi? Email is the best way to reach me.",
})}
<section class="section prose">
  <div class="wrap-1240">
    <div class="contact-card">
      <p class="contact-label">Email</p>
      <a class="contact-email" href="mailto:${SITE.email}">${SITE.email}</a>
      <a href="mailto:${SITE.email}?subject=Hello%20from%20khizrashahroz.com" class="btn-primary">Write to me <span class="arrow" aria-hidden="true">→</span></a>
      ${SITE.pinterest ? `<p class="contact-alt">You can also find me on <a href="${SITE.pinterest}" rel="me noopener" target="_blank">Pinterest</a>.</p>` : ""}
    </div>
    <h2>Brands and collaborations</h2>
    <p>I'm open to working with home and decor brands whose products I'd genuinely use in my own space. Email me with what you have in mind and I'll get back to you if it's a fit.</p>
    <h2>Found a mistake?</h2>
    <p>If a photo credit is wrong, a link is broken, or something in a guide doesn't add up, let me know — I'd rather fix it than leave it.</p>
  </div>
</section>`;
  writePage(
    DIST,
    "contact",
    page({
      title: "Contact — Khizra Shahroz",
      description: "Get in touch with Khizra Shahroz — questions, collaboration ideas, corrections, or just to say hi.",
      canonical: `${SITE.url}/contact/`,
      current: "/contact/",
      body,
    })
  );
}

/* ---------------- Legal ---------------- */

const LEGAL_UPDATED = "October 2026";

function writePrivacy(DIST) {
  const body = `
${pageHero({ heading: "Privacy Policy", lede: `Last updated ${LEGAL_UPDATED}.` })}
<section class="section prose">
  <div class="wrap-1240">
    <p>This site is a personal home decor blog. It collects as little information as it can while still working properly. This page explains what is collected, why, and the choices you have.</p>

    <h2>What this site collects</h2>
    <h3>Analytics</h3>
    <p>khizrashahroz.com uses Google Analytics to understand which pages are read and how visitors find the site. Google Analytics sets cookies and collects standard, non-identifying information such as the pages you visit, how long you stay, the type of device and browser you use, and your approximate (city-level) location. This data is aggregated and is not used to identify you personally.</p>
    <h3>Email</h3>
    <p>If you email me through the <a href="/contact/">contact page</a>, I'll have your email address and whatever you choose to write. It's used only to reply to you and is never added to a mailing list or shared.</p>
    <h3>Nothing else</h3>
    <p>There are no accounts, no newsletter, no comments, and no forms that store information on this site.</p>

    <h2>Cookies</h2>
    <p>Cookies on this site come from two places:</p>
    <ul>
      <li><strong>Google Analytics</strong> cookies, used for the anonymous usage statistics described above.</li>
      <li><strong>Amazon</strong> cookies, which Amazon may set in your browser when you click an Amazon affiliate link on this site so that qualifying purchases can be credited. Those cookies are controlled by Amazon, not by this site. See the <a href="/disclosure/">disclosure page</a> for how affiliate links work here.</li>
    </ul>
    <p>You can block or delete cookies in your browser settings. Doing so won't stop the site from working.</p>

    <h2>Third parties</h2>
    <p>The services that handle data on this site's behalf are Google (analytics), Amazon (affiliate links you choose to click), and the web host that serves the site, which keeps standard server logs for security and reliability. Each operates under its own privacy policy.</p>

    <h2>Your choices</h2>
    <ul>
      <li>Install Google's <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">Analytics opt-out browser add-on</a> or block analytics cookies in your browser.</li>
      <li>Avoid clicking affiliate links if you'd rather Amazon didn't set a cookie — every product is also easy to find directly.</li>
      <li>Email me to ask what, if anything, I hold about you, or to have it deleted.</li>
    </ul>

    <h2>Children</h2>
    <p>This site is written for a general audience and doesn't knowingly collect information from children under 13.</p>

    <h2>Changes</h2>
    <p>If this policy changes, the date at the top of this page will be updated. Continued use of the site after a change means you accept the updated policy.</p>

    <h2>Contact</h2>
    <p>Questions about privacy on this site: <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
  </div>
</section>`;
  writePage(
    DIST,
    "privacy",
    page({
      title: "Privacy Policy — Khizra Shahroz",
      description: "What khizrashahroz.com collects, how it's used, and the choices you have.",
      canonical: `${SITE.url}/privacy/`,
      current: "/privacy/",
      body,
    })
  );
}

function writeTerms(DIST) {
  const body = `
${pageHero({ heading: "Terms of Use", lede: `Last updated ${LEGAL_UPDATED}.` })}
<section class="section prose">
  <div class="wrap-1240">
    <p>By using khizrashahroz.com you agree to these terms. They're short and in plain English on purpose.</p>

    <h2>Using the content</h2>
    <p>You're welcome to read, link to, and share the articles here for personal, non-commercial use. Please don't republish full articles, or reproduce the text or original images, without permission. Short quotes with a link back are always fine.</p>

    <h2>Photos and credits</h2>
    <p>Photos credited to Pinterest or another source remain the property of their original owners and are shown here with a visible credit and link. If you own a photo on this site and would like it credited differently or removed, <a href="/contact/">contact me</a> and I'll sort it out quickly.</p>

    <h2>Decorating advice</h2>
    <p>Everything here is offered as inspiration and general guidance, not professional design, construction, or safety advice. Results depend on your space, materials, and budget. For anything structural, electrical, or load-bearing, hire a qualified professional.</p>

    <h2>Affiliate links</h2>
    <p>Some links are affiliate links, which may earn this site a small commission at no extra cost to you. How that works is explained on the <a href="/disclosure/">disclosure page</a>.</p>

    <h2>Links to other sites</h2>
    <p>This site links to other websites. I'm not responsible for their content, availability, or privacy practices.</p>

    <h2>No guarantees</h2>
    <p>The site is provided as-is. I do my best to keep everything accurate and working, but can't promise it will always be available or error-free, and I'm not liable for any loss arising from its use.</p>

    <h2>Changes</h2>
    <p>These terms may be updated from time to time; the date at the top will change when they are.</p>

    <h2>Contact</h2>
    <p>Questions about these terms: <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
  </div>
</section>`;
  writePage(
    DIST,
    "terms",
    page({
      title: "Terms of Use — Khizra Shahroz",
      description: "The plain-English terms for using khizrashahroz.com.",
      canonical: `${SITE.url}/terms/`,
      current: "/terms/",
      body,
    })
  );
}

function writeDisclosure(DIST) {
  const body = `
${pageHero({ heading: "Affiliate Disclosure", lede: `Last updated ${LEGAL_UPDATED}.` })}
<section class="section prose">
  <div class="wrap-1240">
    <p><strong>As an Amazon Associate, I earn from qualifying purchases.</strong></p>
    <p>Some articles on khizrashahroz.com include links to products on Amazon. If you click one of those links and buy something, Amazon may pay this site a small commission. The price you pay is exactly the same whether you use the link or not.</p>

    <h2>How to spot them</h2>
    <p>Affiliate links appear as product links or "shop" buttons inside articles. They always lead to a retailer's site. Plain links to other articles, Pinterest sources, or other websites are not affiliate links.</p>

    <h2>What it doesn't change</h2>
    <p>Commissions don't influence which ideas are included or how they're described. Products are mentioned because they fit the idea being discussed, and you can always find the same or similar items elsewhere.</p>

    <h2>Why it's here</h2>
    <p>This site is free to read. Affiliate commissions help cover the cost of running it. Thank you for supporting it when you choose to use a link.</p>

    <h2>Questions</h2>
    <p>If anything about this is unclear, email <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
  </div>
</section>`;
  writePage(
    DIST,
    "disclosure",
    page({
      title: "Affiliate Disclosure — Khizra Shahroz",
      description: "How affiliate links work on khizrashahroz.com, and what they do and don't change.",
      canonical: `${SITE.url}/disclosure/`,
      current: "/disclosure/",
      body,
    })
  );
}

/* ---------------- Articles ---------------- */

function writeLongPost(DIST, post) {
  const body = `
<section class="page-hero">
  <div class="wrap-1240">
    <p class="breadcrumb"><a href="/blog/">Blog</a> / <a href="/${post.categorySlug}/">${post.category}</a></p>
    <h1>${post.title}</h1>
    <p class="lede">${post.excerpt}</p>
  </div>
</section>
<article class="section prose">
  <div class="wrap-1240">
    ${post.bodyHtml}
    <p class="post-footer-links"><a href="/${post.categorySlug}/" class="btn-underline">More ${post.category.toLowerCase()} ideas <span aria-hidden="true">→</span></a> <a href="/blog/" class="btn-underline">All posts <span aria-hidden="true">→</span></a></p>
  </div>
</article>`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}${post.image}`,
    url: `${SITE.url}/${post.slug}/`,
    mainEntityOfPage: `${SITE.url}/${post.slug}/`,
    author: { "@type": "Person", name: SITE.name, url: `${SITE.url}/about/` },
    publisher: { "@type": "Person", name: SITE.name, url: `${SITE.url}/` },
  };
  writePage(
    DIST,
    post.slug,
    page({
      title: `${post.title} — Khizra Shahroz`,
      description: post.excerpt,
      canonical: `${SITE.url}/${post.slug}/`,
      body,
      image: post.image,
      jsonLd,
    })
  );
}

/* ---------------- Sitemap / robots ---------------- */

const STATIC_PAGE_SLUGS = ["", "blog", "about", "start-here", "contact", "color-ideas", "search", "privacy", "terms", "disclosure"];

function writeSitemap(DIST, posts) {
  const today = new Date().toISOString().slice(0, 10);
  const staticUrls = STATIC_PAGE_SLUGS.concat(CATEGORIES.map((c) => c.slug)).map((slug) => ({
    loc: `${SITE.url}/${slug ? slug + "/" : ""}`,
    lastmod: today,
  }));
  const postUrls = posts.map((p) => ({ loc: `${SITE.url}/${p.slug}/`, lastmod: p.date ? toIsoDate(p.date) : null }));
  const urls = staticUrls.concat(postUrls);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>
`;
  fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml);
}

function writeRobots(DIST) {
  fs.writeFileSync(
    path.join(DIST, "robots.txt"),
    `User-agent: *
Allow: /
Disallow: /search/

Sitemap: ${SITE.url}/sitemap.xml
`
  );
}

// Pages whose article body isn't in this build (created directly on the
// server) still need the current header, drawer and footer. Swap only the
// shared chrome and asset versions; the <main> content is left untouched.
function refreshExternalChrome(DIST, slug) {
  const file = path.join(DIST, slug, "index.html");
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, "utf8");
  html = html
    .replace(/<header class="site-header">[\s\S]*?(?=<main id="main">)/, header("") + "\n")
    .replace(/<footer class="site-footer">[\s\S]*?<\/footer>/, footer())
    .replace(/\/css\/styles\.css\?v=\d+/, "/css/styles.css?v=12")
    .replace(/\/js\/main\.js\?v=\d+/, "/js/main.js?v=3");
  fs.writeFileSync(file, html);
}

/* ---------------- Orchestration ---------------- */

// externalSlugs: posts whose pages live on the server already and must not
// be regenerated (their metadata is still used for listings).
function build({ DIST, allPosts, externalSlugs }) {
  ensureDir(DIST);
  allPosts.filter((p) => !externalSlugs.has(p.slug)).forEach((p) => writeLongPost(DIST, p));
  externalSlugs.forEach((slug) => refreshExternalChrome(DIST, slug));
  writeHome(DIST, allPosts);
  writeBlog(DIST, allPosts);
  writeCategoryPages(DIST, allPosts);
  writeColorIdeas(DIST, allPosts);
  writeSearch(DIST, allPosts);
  writeNotFound(DIST, allPosts);
  writeAbout(DIST, allPosts);
  writeStartHere(DIST, allPosts);
  writeContact(DIST);
  writePrivacy(DIST);
  writeTerms(DIST);
  writeDisclosure(DIST);
  writeSitemap(DIST, allPosts);
  writeRobots(DIST);
}

module.exports = { build };
