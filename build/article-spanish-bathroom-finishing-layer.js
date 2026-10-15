// Body content for "The Finishing Layer for a Modern Spanish
// Bathroom (After the Tile and Arches)". Numbered idea-list format,
// matching the source's 11 ideas. Heavy overlap with the existing
// modern-spanish-bathroom-elements article, which already covers
// terracotta tile, textured walls, arched details, handcrafted
// accents and mixed metals as the style's 5 core elements. This
// rewrite assumes those core elements are already in place and
// focuses on the finishing layer on top of them — lighting, black
// accents, Mediterranean accessories, restraint, old-and-new mixing,
// plants — condensing the directly-overlapping ideas (earthy tones,
// texture, statement tiles, arches, wood accents) into brief
// pointers rather than repeating that article's depth. Source photos
// have no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CH5X4YTS", title: "BIEN BEAU Boho Half Moon Cotton Bath Rug, Non-Slip, Rust", w: 1500, h: 1500 },
    { asin: "B0DC6FSS9J", title: "Water Hyacinth Bathroom Vanity Tray, 10 Inch", w: 1500, h: 1436 },
  ],
  foundation: [
    { asin: "B0DZ1N887S", title: "Thick Peel and Stick Terracotta Square Mosaic Backsplash Tile, 10 Sheets, 12 x 12 Inch", w: 1439, h: 1441 },
    { asin: "B0DTTR15D2", title: "20 x 30 Inch Arch Bathroom Wall Mirror with Wood Grain Frame, Tempered Glass", w: 1006, h: 1500 },
  ],
  lighting: [
    { asin: "B0GJ5K6TDS", title: "Shenmoyl Battery Operated Gold Wall Sconces, Set of 2, with Remote Control", w: 1471, h: 1500 },
    { asin: "B0CG34JK7Z", title: "Handmade Woven Bamboo Basket Pendant Light, Adjustable Boho Mini Fixture", w: 359, h: 1386 },
  ],
  black: [
    { asin: "B0CD3TFQWH", title: "Matte Black 10 Piece Bathroom Hardware Accessories Set with 23.6 Inch Towel Bars", w: 1500, h: 1491 },
    { asin: "B0B9H92YBW", title: "SetSail Matte Black Wall-Mounted Towel Ring Holder", w: 1325, h: 1500 },
  ],
  accessories: [
    { asin: "B0H6G1HP8K", title: "Ceramic Draining Bar Soap Dish Holder for Shower and Bathroom", w: 1500, h: 1500 },
    { asin: "B0F9NZRR3P", title: "Acacia Wood Riser Tray for Bathroom Counter Decor and Soap Dish", w: 1375, h: 1420 },
  ],
  simple: [
    { asin: "B0FY2RHXH4", title: "Modern 5 Piece Bathroom Accessories Set, Beige", w: 1500, h: 1134 },
    { asin: "B09NBGZXCK", title: "Mini Ceramic Toothbrush Holders for Bathroom Vanity Countertops, Space Saver", w: 1348, h: 1500 },
  ],
  mix: [
    { asin: "B0DR82B12Z", title: "Dewfig Vintage Arched Wall Mirror, 30 x 22 Inch, Bronze Antique Finish", w: 1500, h: 1500 },
    { asin: "B07K3KPZ39", title: "8 Inch Widespread 2-Handle 3-Hole Bathroom Sink Faucet, Antique Brass", w: 1345, h: 1190 },
  ],
  plants: [
    { asin: "B0GSZ3JMGV", title: "Maxdot 4 Pack Aged Terracotta Pots, Small Rustic Clay Planters, 4.3 Inch", w: 1500, h: 1313 },
    { asin: "B0D6QZCJW8", title: "6 Piece 18 Inch Faux Olive Branches for Vases, Realistic Artificial Greenery", w: 1500, h: 1449 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "spanish-bathroom-finishing-layer-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "spanish-bathroom-finishing-layer", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Terracotta tile and an arched niche get a Spanish-style bathroom most of the way there.</p>
<p>What finishes the room is a second layer of smaller decisions &mdash; lighting, accessories, restraint &mdash; that most guides mention briefly and move past too quickly.</p>
<p>This is that layer, assuming the core tile-and-arch work is already settled.</p>
${photo("hero.png", "Beautiful modern Spanish bathroom with warm, inviting design", 1312, 736, "hero")}

<h2>The Foundation, Briefly</h2>
<p>Warm earthy tones, real texture, a statement tile moment and an arched detail somewhere in the room are the core elements worth getting right first &mdash; worth a deeper look on their own if they're not already settled.</p>
${photo("earthy-tones.png", "Warm earthy tones forming the base of a Spanish-style bathroom", 574, 1024)}
${photo("textures.png", "Rich texture adding depth to the bathroom's foundation", 574, 1024)}
${photo("statement-tiles.png", "A statement tile moment anchoring the room's design", 574, 1024)}
${photo("arches.png", "An arched detail bringing authentic Spanish character", 574, 1024)}
${photo("wood-accents.png", "Natural wood accents warming up the tile and stone", 574, 1024, "foundation")}

<h2>Light It Like the Mediterranean</h2>
<p>Warm, slightly dim ambient lighting, with one more dramatic fixture as a focal point, does more for the room's mood than the tile work alone ever could.</p>
<p>This is the detail most likely to get rushed after the bigger structural choices are made, even though it affects how the whole room reads every single day.</p>
${photo("lighting.png", "Warm Mediterranean-inspired lighting setting the room's mood", 574, 1024, "lighting")}

<h2>Add Black for Contrast</h2>
<p>Black fixtures, hardware or a framed mirror cut through an otherwise warm, earthy palette, giving the eye somewhere crisp to land.</p>
<p>This single contrast point keeps the room from reading as uniformly beige, which is one of the more common ways this style goes slightly flat.</p>
${photo("black-accents.png", "Black accents providing crisp contrast against warm tones", 574, 1024, "black")}

<h2>Bring In Genuine Mediterranean Accessories</h2>
<p>A hand-thrown ceramic dish, woven baskets, or a simple glazed vase all extend the room's material story into the smallest details.</p>
<p>These finishing pieces matter more here than in most bathroom styles, since the whole aesthetic depends on material authenticity coming through at every scale.</p>
${photo("mediterranean-accessories.png", "Genuine Mediterranean accessories completing the room's material story", 574, 1024, "accessories")}

<h2>Practice Real Restraint</h2>
<p>Simple doesn't mean boring here &mdash; a few well-chosen pieces, with real negative space between them, reads as more considered than a fully decorated room.</p>
<p>This restraint is what keeps the earthy palette and texture work from tipping into visual clutter.</p>
${photo("keep-simple.png", "Restrained styling keeping the room simple without feeling boring", 574, 1024, "simple")}

<h2>Mix Old and New Deliberately</h2>
<p>A genuinely aged or vintage piece next to a clean modern fixture creates the layered, collected feeling central to this style.</p>
<p>An all-new room, however well-executed, tends to miss this specific quality that makes the style feel authentic rather than showroom-staged.</p>
${photo("mix-old-new.png", "A deliberate mix of old and new pieces creating a layered feel", 574, 1024, "mix")}

<h2>Finish With Plants</h2>
<p>A simple plant, especially one suited to a humid bathroom environment, brings the Mediterranean's outdoor connection into the room.</p>
<p>This is one of the lowest-cost, highest-impact finishing touches on this entire list.</p>
${photo("plants.png", "A simple plant bringing Mediterranean warmth to the bathroom", 574, 1024, "plants")}

<h2>Ready to Bring the Mediterranean In</h2>
<p>None of this finishing layer works without the foundation already in place &mdash; tile, texture, an arch, warm tones.</p>
<p>Once that's settled, lighting, a bit of black contrast, genuine accessories and real restraint are what actually finish the room.</p>
`;

module.exports = { body };
