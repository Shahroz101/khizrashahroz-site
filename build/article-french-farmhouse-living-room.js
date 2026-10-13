// Body content for "How to Design a Cozy French Farmhouse Living
// Room". Guide format, matching the source's 11 content sections.
// Overlaps on neutral base, texture layering and baskets with the
// existing farmhouse-living-room-ideas article (American
// farmhouse — barn doors, shiplap, reclaimed wood). This rewrite
// leans hard into what specifically distinguishes French farmhouse
// from American farmhouse — elegance, antique accessories, subtle
// pattern, airy curtains — condensing the three directly-overlapping
// items into brief mentions rather than repeating their treatment.
// Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DSVTM18Y", title: "Abdurey Vintage Table Clock, Antique White French Rustic Mantel Clock", w: 1150, h: 1228 },
    { asin: "B0GJD3Z14D", title: "Beige Cottagecore Ruffle Couch Cover, 118 x 71 Inch", w: 1500, h: 1500 },
  ],
  neutralBase: [
    { asin: "B0HKXH38BD", title: "spot. Touch-Up Paint Bundle, Matte Gray and Beige, 6 Brush-Tip Bottles", w: 860, h: 1500 },
    { asin: "B00114Q6GQ", title: "DecoArt Americana Acrylic Paint, Warm White, 2 oz", w: 408, h: 1200 },
  ],
  furniture: [
    { asin: "B0DNSMRXZP", title: "Metal Armoire Wardrobe Closet Storage Cabinet with Hanging Rod", w: 1500, h: 1500 },
    { asin: "B0HC5XDKTR", title: "Takywep 51 Inch Farmhouse Entryway Console Table with Drawer, Rustic Narrow", w: 1500, h: 1290 },
  ],
  antique: [
    { asin: "B0DSFHQJ5J", title: "Antique Brass Cast Iron Candle Holders, Set of 2", w: 1500, h: 1500 },
    { asin: "B0CPJDDR1W", title: "Vintage Gold Arched Antique Wall Mirror, 36 x 30 Inch", w: 1500, h: 1497 },
  ],
  elegance: [
    { asin: "B08JV3STL7", title: "French Country 4-Light Distressed White Chandelier with Adjustable Chain", w: 1200, h: 1200 },
    { asin: "B0DRK5LHJ1", title: "Vintage Arched Full Length Floor Mirror, 81 x 41 Inch, Carved Metal Frame", w: 1500, h: 1500 },
  ],
  pattern: [
    { asin: "B0G3PV3VM4", title: "Red Toile Pillow Covers, 18 x 18 Inch, Set of 2, French Country Cotton Linen", w: 1500, h: 1402 },
    { asin: "B0D9SDQ8R8", title: "IKATYARN Farmhouse Linen Striped Throw Pillow Cover, Retro Style", w: 1106, h: 1106 },
  ],
  wood: [
    { asin: "B09BJ8F4TY", title: "Moon Wool Plaid Throw Blanket, Merino Lambswool, Beige Grey, Made in UK", w: 1500, h: 1150 },
    { asin: "B0CFTYV9YP", title: "Bedsure 100% Cotton Muslin Throw Blanket for Adults, Large, Linen Beige", w: 1500, h: 1500 },
  ],
  baskets: [
    { asin: "B0GKBDGQ3N", title: "Best Choice Products 2-Piece Round Nesting Baskets with Handles, Water Hyacinth", w: 1500, h: 1364 },
    { asin: "B01N3SH1YF", title: "H.VERSAILTEX Natural Linen Sheer Curtains, 84 Inch, 2 Panels, Grommet", w: 1500, h: 1500 },
  ],
  casual: [
    { asin: "B095WHFT8S", title: "lifein Chenille Throw Blanket, 50 x 60 Inch, Soft Boho Knit Farmhouse", w: 1500, h: 1383 },
    { asin: "B0HD5MLG1C", title: "Vintage Decorative Books Set of 2 for Living Room Decor", w: 1435, h: 1500 },
  ],
  greenery: [
    { asin: "B0BX351Z36", title: "Waipfaru Faux Olive Branches for Vases, Lifelike Olive Tree Stems", w: 1500, h: 1448 },
    { asin: "B0D44TMQ11", title: "Hollyone Artificial Large Boston Fern Potted Plant, 25.5 Inch, Indoor Outdoor", w: 1500, h: 1267 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "french-farmhouse-living-room-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "french-farmhouse-living-room", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>French farmhouse gets lumped in with American farmhouse more often than it should.</p>
<p>Barn doors and shiplap belong to one tradition. Antique accessories, subtle pattern and a touch of real elegance belong to another &mdash; French countryside, not rustic American barn.</p>
<p>This covers what actually makes the French version distinct.</p>
${photo("hero.png", "Cozy French farmhouse living room with elegant, rustic charm", 1312, 736, "hero")}

<h2>What Makes French Farmhouse Different</h2>
<p>Where American farmhouse leans rustic and utilitarian, French farmhouse leans toward understated elegance &mdash; worn, but refined rather than purely rugged.</p>
<p>The French version borrows more from countryside estates than working barns, which shows up in the details more than the broad strokes.</p>

<h2>The Shared Foundation: Neutral Base</h2>
<p>A soft white or warm greige base works the same way it would in any farmhouse style &mdash; the canvas everything else gets layered onto.</p>
<p>Where French farmhouse diverges is in what gets layered on top, which the rest of this guide covers.</p>
${photo("neutral-base.png", "Soft neutral color palette forming the base of a French farmhouse room", 574, 1024, "neutralBase")}

<h2>Furniture With Real Age</h2>
<p>Genuinely distressed or antique furniture, rather than new pieces styled to look worn, is central to the French farmhouse look specifically.</p>
<p>A single statement antique piece &mdash; an armoire, a worn wood table &mdash; does more for authenticity than several newer distressed pieces combined.</p>
${photo("distressed-furniture.png", "Distressed vintage furniture bringing authentic character to the room", 574, 1024, "furniture")}

<h2>Antique Accessories Over Rustic Decor</h2>
<p>This is where French farmhouse most clearly splits from its American counterpart &mdash; genuine antique accessories, ironware, aged mirrors and porcelain, instead of rustic signs and barn-inspired decor.</p>
<p>Sourced pieces, collected over time from estate sales or antique shops, carry more of the look's intended character than anything bought new.</p>
${photo("antique-accessories.png", "Antique and vintage accessories defining French farmhouse character", 574, 1024, "antique")}

<h2>A Touch of Real Elegance</h2>
<p>A chandelier, a gilded mirror frame, or an upholstered chair in a refined fabric brings in the elegance that keeps the room from reading as purely rustic.</p>
<p>This single element, more than any other, is what separates French farmhouse from a simpler American rustic look.</p>
${photo("touch-elegance.png", "Elegant lighting and decor adding refinement to the living room", 574, 1024, "elegance")}

<h2>Subtle Pattern, Not Bold Pattern</h2>
<p>A soft stripe, a faded toile, or a muted floral &mdash; patterns here stay understated, never the bold graphic prints associated with more modern farmhouse looks.</p>
<p>This restraint is deliberate, keeping the room feeling aged and quiet rather than trend-driven.</p>
${photo("subtle-patterns.png", "Subtle, muted patterns adding texture without overwhelming the space", 574, 1024, "pattern")}

<h2>Wood Throughout, Softened by Texture</h2>
<p>Warm wood tones &mdash; beams, flooring, furniture &mdash; ground the room, while linen, wool and other natural textiles keep the wood from feeling heavy or cold.</p>
<p>This pairing of wood and soft natural textile is consistent across nearly every French farmhouse space, regardless of the specific pieces chosen.</p>
${photo("wood-everywhere.png", "Warm wood tones grounding a French farmhouse living room", 574, 1024)}
${photo("cozy-textures.png", "Layered cozy textures softening the room's wood elements", 574, 1024, "wood")}

<h2>Baskets and Light, Airy Curtains</h2>
<p>Woven baskets add practical storage the same way they would in any farmhouse style, while sheer or linen curtains let in soft, filtered light rather than blocking it heavily.</p>
<p>The airy curtain choice specifically reinforces the room's lighter, more relaxed-elegant feel versus a heavier rustic drape.</p>
${photo("baskets.png", "Woven baskets providing both storage and texture", 574, 1024)}
${photo("airy-curtains.png", "Light, airy curtains letting soft natural light fill the room", 574, 1024, "baskets")}

<h2>Casual Over Curated</h2>
<p>A room that looks slightly imperfect &mdash; a throw not perfectly folded, a book left open &mdash; fits the French farmhouse feel better than one styled to showroom precision.</p>
<p>This casual, lived-in quality is what keeps the elegance from tipping into something that feels untouchable.</p>
${photo("casual-lived-in.png", "Casual, lived-in styling keeping the room feeling warm and relaxed", 574, 1024, "casual")}

<h2>Greenery, Kept Simple</h2>
<p>A few low-maintenance plants &mdash; olive branches, eucalyptus, a simple potted fern &mdash; bring the room's connection to the French countryside full circle.</p>
<p>Nothing fussy or high-maintenance fits here; the greenery should feel as effortless as everything else in the room.</p>
${photo("greenery.png", "Simple, low-maintenance greenery completing the French farmhouse look", 574, 1024, "greenery")}

<h2>Your Cozy French Farmhouse Living Room Awaits</h2>
<p>The neutral base and wood foundation are shared ground with any farmhouse style.</p>
<p>What makes it distinctly French is the layer on top &mdash; antique accessories, real elegance, subtle pattern, airy curtains &mdash; chosen with restraint rather than rustic abundance.</p>
<p>Get that layer right, and the room reads as countryside French, not barn-inspired American.</p>
`;

module.exports = { body };
