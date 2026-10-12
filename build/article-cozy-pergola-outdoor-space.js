// Body content for "Making a Pergola Feel Like a Real Outdoor Room,
// Not Just a Structure". Guide format, matching the source's 7
// content sections. This is the third pergola-related article —
// pergola-ideas is a 14-feature idea listicle (fire pit, swing bed,
// lighting, curtains), how-to-build-a-pergola is a literal
// construction how-to. This rewrite leans into the practical layer
// those two don't cover — picking the right pergola type, seating
// comfort, weatherproofing, the DIY-vs-pro decision and upkeep —
// condensing the "cozy up" ideas that overlap with pergola-ideas'
// lighting/curtain entries into brief mentions rather than repeating
// them. Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CQXP923Q", title: "Tenmiro 200FT Outdoor String Lights, Ultra Long LED Patio Lights, Shatterproof", w: 1500, h: 1500 },
    { asin: "B0G1HZLKBP", title: "Waterproof Outdoor Curtains for Patio, 6 Drape Panels, Sun Shade", w: 1500, h: 1500 },
  ],
  why: [
    { asin: "B0GDDZSXNT", title: "Outsunny 10 x 20 Ft Wooden Gazebo Hardtop Lean-to for Patio, Light Walnut", w: 1500, h: 1500 },
    { asin: "B0836RT3YB", title: "Retractable Pergola Shade Cover Canopy, Waterproof, 3 x 16 Ft", w: 1500, h: 1500 },
  ],
  picking: [
    { asin: "B0GJZJ8LHM", title: "10 x 19 Ft Louvered Pergola, Aluminum Frame and Steel Louvers", w: 500, h: 500 },
    { asin: "B0DXKB152K", title: "Outsunny 11 x 12.5 Ft Outdoor Wood Pergola Grape Trellis, Brown", w: 1500, h: 1500 },
  ],
  cozy: [
    { asin: "B0D3LS62S1", title: "Joomer Solar Fairy Lights, 2-Pack, 80 FT Total, 240 LED, Warm White", w: 1459, h: 1500 },
    { asin: "B0BB66JX9Q", title: "RURALITY Waterproof Outdoor Rug, 8 x 10 Ft, Plastic Straw Patio Mat", w: 1500, h: 1500 },
  ],
  seating: [
    { asin: "B0H5C9BXR5", title: "JAMFLY 5-Piece Wicker Patio Sectional Sofa Set with Thick Cushions and Coffee Table", w: 1254, h: 1254 },
    { asin: "B0FMXZHS2J", title: "Vongrasig Swivel Wicker Rattan Lounge Chair with Cushion", w: 1500, h: 1500 },
  ],
  weather: [
    { asin: "B0FS19VCZ9", title: "Advanced Wood Stain and Sealer, Redwood, 1 Gallon, Waterproof", w: 1500, h: 1269 },
    { asin: "B0DT6FM9CR", title: "Outdoor Cushion Covers, 8 Pcs, Stretch Patio Furniture Slipcovers", w: 1500, h: 1414 },
  ],
  diy: [
    { asin: "B0GX9MY8KR", title: "JEXALINE Heavy Duty Pergola Kit with Slanted Roof Brackets, for 4 x 4 Lumber", w: 1500, h: 1500 },
    { asin: "B0079IRIG0", title: "BLACK+DECKER 20V MAX Cordless Drill Driver Kit with Bit Set and Sockets", w: 1500, h: 1165 },
  ],
  maintenance: [
    { asin: "B0GVD45478", title: "Teak Cleaner and Brightener for Outdoor Furniture and Boat Decks, 2 Pack", w: 1177, h: 1173 },
    { asin: "B09W9G4HW5", title: "Kipiea Heavy-Duty Waterproof Patio Furniture Set Cover", w: 1453, h: 1271 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "cozy-pergola-outdoor-space-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "cozy-pergola-outdoor-space", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A pergola on its own is just a structure &mdash; posts, beams, open air overhead.</p>
<p>What turns it into an actual outdoor room is a layer of decisions most people don't think about until after it's built: seating, weatherproofing, and whether to call a professional.</p>
<p>This covers that layer.</p>
${photo("hero.png", "Cozy pergola creating a beautiful outdoor living space", 1312, 736, "hero")}

<h2>Why a Pergola Changes a Backyard</h2>
<p>A pergola gives an otherwise open yard a defined destination &mdash; a specific spot that reads as a room, not just more lawn.</p>
<p>This structure alone does more to make a backyard feel like an extension of the house than almost any other single addition.</p>
${photo("why-pergola.png", "Pergola transforming a backyard into an inviting outdoor retreat", 574, 1024, "why")}

<h2>Picking the Right Pergola for the Space</h2>
<p>An attached pergola, built off the house, suits a yard wanting a seamless indoor-outdoor flow; a freestanding one works better as its own destination further into the yard.</p>
<p>Material and style should match the home's existing architecture &mdash; a sleek metal frame reads very differently than a classic wood structure, even with identical dimensions.</p>
${photo("picking-vibe-1.png", "Pergola style chosen to match the home's architecture", 574, 1024)}
${photo("picking-vibe-2.png", "Pergola design reflecting the homeowner's personal style", 574, 1024, "picking")}

<h2>Layering in Coziness</h2>
<p>Warm lighting, outdoor curtains and a few textiles do most of the work turning a bare structure into an inviting space &mdash; the exact additions matter less than making sure all three layers are present.</p>
<p>A rug underfoot, even outdoors, adds a surprising amount of warmth and helps visually define the space as a room rather than open structure.</p>
${photo("cozy-ideas-1.png", "Warm lighting adding cozy ambiance to a pergola space", 574, 1024)}
${photo("cozy-ideas-2.png", "Outdoor curtains softening a pergola's structure", 574, 1024)}
${photo("cozy-ideas-3.png", "Textiles and rugs bringing warmth to an outdoor pergola", 574, 1024, "cozy")}

<h2>Getting the Seating Right</h2>
<p>Deep, cushioned seating reads as genuinely lounge-worthy in a way a few hard chairs never will, regardless of how nice the structure overhead looks.</p>
<p>Arranging seating to face inward, toward a shared center rather than all facing the same direction, makes the space feel more like a room meant for conversation.</p>
${photo("seating-setup.png", "Comfortable seating setup creating an inviting pergola lounge area", 574, 1024, "seating")}

<h2>Weatherproofing It Properly</h2>
<p>A sealed or weather-rated finish on the wood, combined with weather-resistant cushions and textiles, keeps the space usable and good-looking well beyond the first season.</p>
<p>This is the detail most likely to get skipped in favor of styling, and the one that determines whether the space still looks good a year later.</p>
${photo("weatherproofing.png", "Weatherproofed pergola materials built to last through the seasons", 574, 1024, "weather")}

<h2>DIY or Hire a Pro?</h2>
<p>A simple kit-based pergola is a genuinely approachable DIY project for someone comfortable with basic carpentry and a weekend to spend.</p>
<p>A custom size, an attached structure tied into the house, or a larger span is where hiring a professional becomes worth the cost &mdash; the structural stakes are higher, and mistakes are expensive to fix after the fact.</p>
${photo("diy-vs-pro.png", "Pergola construction decision between DIY and professional installation", 574, 1024, "diy")}

<h2>Keeping It Looking Fresh</h2>
<p>A yearly check of the wood finish, hardware and any fabric elements catches small issues before they become expensive repairs.</p>
<p>Swapping cushions, textiles and small decor seasonally keeps the space feeling current without touching the structure itself.</p>
${photo("maintenance.png", "Pergola maintained and styled to stay looking fresh year-round", 574, 1024, "maintenance")}

<h2>Your Pergola, Your Vibe</h2>
<p>A pergola only becomes a real outdoor room once the practical layer &mdash; seating, weatherproofing, upkeep &mdash; gets the same attention as the styling.</p>
<p>Get those right, and the structure stops being a backyard feature and starts being a room people actually want to spend time in.</p>
`;

module.exports = { body };
