// Body content for "Boho Living Room Decor, Built From the Ground Up".
// Guide format, matching the source's h2/h3 structure (foundation,
// textiles, plants, furniture, wall art, lighting, personal touches,
// balance). Distinct from the existing boho-apartment-styling-guide,
// which covers cross-room principles for a whole apartment — this is
// scoped to a single room's build order, the whole-home/whole-
// apartment vs. single-room pattern used elsewhere this session.
// Source had zero content photos, only a hero image, and zero
// Pinterest pins, so the body runs text-only after the hero.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DMN82J81", title: "Boho Floral Washable Area Rug, Neutral, 8x10", w: 1500, h: 1500 },
    { asin: "B0FHJ476C3", title: "Gold Boho Rattan Floor Lamp, Dimmable, with Remote", w: 1454, h: 1464 },
  ],
  whatIs: [
    { asin: "B0B254F4MM", title: "Hanobe Round Boho Mandala Decorative Tray", w: 1500, h: 1139 },
    { asin: "B0CTJQHQCV", title: "Nuogo Large Boho Floor Pillows, 22 Inch, 4 Pack", w: 1500, h: 1466 },
  ],
  foundation: [
    { asin: "B07BK7T82K", title: "Glidden One Coat Interior Paint + Primer, Navajo White, Eggshell, 1 Quart", w: 1500, h: 1471 },
    { asin: "B07BDWC1TQ", title: "Glidden One Coat Interior Paint + Primer, Greige Oatmeal, Eggshell, 1 Quart", w: 1500, h: 1471 },
  ],
  textiles: [
    { asin: "B0GY4JBSWS", title: "Boho Terracotta Throw Pillow Covers, 18x18, Set of 4", w: 1500, h: 1451 },
    { asin: "B08RP7PP6Z", title: "Boho Chenille Jacquard Throw Blanket with Tassels", w: 1500, h: 1500 },
  ],
  plants: [
    { asin: "B09984VYLR", title: "Dahey Macrame Plant Hangers, Set of 3", w: 1500, h: 1354 },
    { asin: "B09LH421H1", title: "Golden Pothos Live Plant in 4 Inch Pot", w: 725, h: 836 },
  ],
  furniture: [
    { asin: "B07J1RJYVS", title: "Vintiquewise Large Natural Wood Storage Trunk Coffee Table", w: 1500, h: 1147 },
    { asin: "B09WBHVZJN", title: "Bali &amp; pari Kaka Natural Rattan Armchair", w: 1500, h: 1500 },
  ],
  wallArt: [
    { asin: "B0DHNZ6FWZ", title: "Large Framed Boho Abstract Wall Art, 24x36", w: 1500, h: 1500 },
    { asin: "B0DMWDQJ1L", title: "Apdidl Boho Mandala Wall Tapestry", w: 1500, h: 1500 },
  ],
  lighting: [
    { asin: "B0DJV9TGRS", title: "Warm White Fairy Curtain Lights, USB, 2 Pack", w: 1500, h: 1500 },
    { asin: "B0FX57LCXN", title: "Hotsonic 72\" Boho Rattan Tree Floor Lamp, Dimmable", w: 1468, h: 1500 },
  ],
  soul: [
    { asin: "B0CYXCC25J", title: "Moroccan Antique-Style Serving Tray with Handles", w: 997, h: 991 },
    { asin: "B01LYC0Q8Q", title: "Aran Woollen Mills Patchwork Cable Knit Throw Blanket, Made in Ireland", w: 1380, h: 1256 },
  ],
  balance: [
    { asin: "B0H6ZQH9F8", title: "Washable Neutral Boho Moroccan Area Rug, 8x10", w: 1500, h: 1500 },
    { asin: "B0FJ24J8WJ", title: "Tarfupth Boho Flower Canvas Wall Art, White and Brown", w: 1500, h: 1036 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "boho-living-room-decor-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "boho-living-room-decor-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Boho living room decor looks effortless when it's done well, which is exactly what makes it hard to get right.</p>
<p>The looseness is real, but it sits on top of a build order &mdash; foundation, then texture, then the louder stuff.</p>
<p>Skip the order and the room reads as cluttered instead of collected.</p>
${photo("hero.png", "Cozy boho living room with warm, eclectic charm", 1312, 736, "hero")}

<h2>What Boho Living Room Decor Actually Means</h2>
<p>At its core, it's a relaxed mix of global influence, natural materials and collected-over-time pieces, rather than any single defined style.</p>
<p>The common thread across every version of it is warmth and imperfection, not a strict color palette or furniture list.</p>
${productGrid("whatIs")}

<h2>Start With the Right Foundation</h2>
<p>Neutral walls, flooring and larger furniture pieces give the louder elements &mdash; pattern, color, texture &mdash; somewhere to actually stand out.</p>
<p>Earthy tones work better as that foundation than anything too crisp or cool, since boho leans warm by nature.</p>
${productGrid("foundation")}

<h2>Textiles Do Most of the Work</h2>
<p>Mixing patterns with real intention &mdash; not randomly, but with a shared color thread running through them &mdash; is what separates considered boho from visual noise.</p>
<p>Texture matters just as much as pattern here; a flat, single-material room never reads as boho no matter how many patterns get layered onto it.</p>
${productGrid("textiles")}

<h2>Plants Are the Living Soul of the Room</h2>
<p>A few easy, forgiving plants do more for the room's actual feel than almost any other single addition on this list.</p>
<p>Hanging plants specifically add a dimension floor and shelf plants can't, filling vertical space that often goes completely unused.</p>
${productGrid("plants")}

<h2>Furniture That Isn't Matchy-Matchy</h2>
<p>Mixing furniture eras, materials and finishes with confidence is a defining boho trait, not an accident or a budget compromise.</p>
<p>Function still matters underneath the mixing, though &mdash; every piece should still genuinely work for how the room actually gets used.</p>
${productGrid("furniture")}

<h2>Wall Art and Decor: Go Big or Go Home</h2>
<p>Large, global-inspired or deeply personal pieces read as intentional in a way several small, generic ones never quite do.</p>
<p>A gallery wall works well too, as long as the pieces in it feel curated rather than simply filled in to cover empty space.</p>
${productGrid("wallArt")}

<h2>Lighting Sets the Whole Mood</h2>
<p>Warm, layered lighting &mdash; string lights, a textured lamp, candles &mdash; does more for a boho room's atmosphere than almost any single piece of furniture.</p>
<p>Harsh overhead lighting alone undercuts the relaxed feel faster than almost any other single mistake on this list.</p>
${productGrid("lighting")}

<h2>Don't Forget the Room's Soul</h2>
<p>Personal touches &mdash; travel finds, handmade pieces, things with a real story &mdash; are what keep a boho room from reading as a showroom display.</p>
<p>This is the detail that's easiest to skip and most responsible for whether the room actually feels lived-in.</p>
${productGrid("soul")}

<h2>Keep It Balanced</h2>
<p>Boho tolerates more visual chaos than most styles, but it still has real limits &mdash; a shared color thread and some negative space keep the mix readable instead of overwhelming.</p>
<p>A few quiet, empty spots between the busier ones give the eye somewhere to rest.</p>
${productGrid("balance")}

<h2>Your Vibe, Your Rules</h2>
<p>None of this needs to happen in a single weekend or a single shopping trip.</p>
<p>Start with the foundation and textiles, then layer in plants, art and personal pieces as they come along.</p>
<p>The room comes together over time, and that's exactly how a genuinely good boho space is supposed to look.</p>
`;

module.exports = { body };
