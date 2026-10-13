// Body content for "The Technique Behind a Fall Mantel That Actually
// Looks Styled". Guide format, matching the source's 10-step
// technique list. Distinct from the existing fall-mantel-decor-ideas
// article (18 discrete decor items — garland with pumpkins, a moody
// palette) since this covers the styling approach itself — focal
// point, layering order, balance principles — not a list of what to
// place. Source had Amazon "shop this" product images embedded
// throughout — per established precedent, only local lifestyle
// photos used, no branded products named. Step 9 (symmetry/asymmetry
// balance) had no source photo, kept text-only.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0H39KNYWG", title: "Fall Garland with Lights, 6 ft, Thanksgiving Decorations for Home", w: 907, h: 1500 },
    { asin: "B0C2PJF8VF", title: "Artgar Mini White Pumpkins Harvest Set, 10 Pcs", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0F3XBTGNN", title: "Gold Arched Wall Mirror with Vintage Carving, 24 x 32 Inch", w: 1500, h: 1500 },
    { asin: "B0H7WLT8QZ", title: "MXUNYZ Red Black Abstract Canvas Print, Bold Wall Art for Living Room", w: 1500, h: 971 },
  ],
  idea2: [
    { asin: "B0FG2J52PP", title: "Tiny Scalloped Wood Risers for Display, 3 Pack, Removable Feet", w: 1500, h: 1098 },
    { asin: "B0GX81YZ9F", title: "Gold Taper Candlestick Holders, 12 Pcs, Vintage Metal", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0H1W512VB", title: "Wironlst Fall Garland with Lights, 6 ft, Pumpkins and Pinecones", w: 1500, h: 1125 },
    { asin: "B0GS5YF9RZ", title: "Artificial Silver Dollar Eucalyptus Garland, 12 ft, 2 Pack", w: 1427, h: 1500 },
  ],
  idea4: [
    { asin: "B0DZ6JLVVN", title: "Reallnaive Fall Tiered Tray Decor Set, 18 Pcs, Neutral Wood Signs", w: 1250, h: 1500 },
    { asin: "B0F2YXM1S5", title: "Vanselia Small Ceramic Vases, Set of 3, Living Room Centerpiece Decor", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0GGB6FWR2", title: "Set of 2 Hurricane Candle Holders with Glass Dome and Iron Base", w: 1500, h: 1500 },
    { asin: "B0HDBNJF5S", title: "Brass Metal Taper Candlestick Holders, Set of 6", w: 1500, h: 1415 },
  ],
  idea6: [
    { asin: "B07ZVKBJJX", title: "RGB World Farmhouse Wood Bead Garland with Boho Tassel, Long", w: 1368, h: 1500 },
    { asin: "B0DYNDCDFT", title: "Vanselia Ceramic Flower Vase, Farmhouse Rustic Vintage", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0B5LD1773", title: "Natural Pine Cones for Crafts and Decorating, 24 Pack, 1.5 to 2 Inch", w: 1500, h: 1448 },
    { asin: "B0GVDZVBJ9", title: "Sukh Dried Botanicals Kit, 9 Bags, Natural Dry Flowers and Herbs", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0B1CNJL7N", title: "upsimples 8 x 10 Black Picture Frame, 1 Pack", w: 1220, h: 1500 },
    { asin: "B0972PZBX6", title: "Samhita Handmade Mango Wood Tree of Life Keepsake Box", w: 1146, h: 915 },
  ],
  idea9: [
    { asin: "B0BQQZD7M4", title: "Romadedi Gold Taper Candle Holders, Set of 2", w: 1418, h: 780 },
    { asin: "B0BBH5ZDP4", title: "Yalikop 3 Link Wood Knot Decor, White, Rustic Table Shelf Accent", w: 1500, h: 1475 },
  ],
  idea10: [
    { asin: "B0F8HYS7F8", title: "AQOTHES Plaid Fall Table Runners, Rust Orange, 72 Inches Long", w: 1500, h: 1500 },
    { asin: "B07VJDV971", title: "winemana Mini Pumpkins, Gourds and Leaves Fall Decor Set", w: 995, h: 795 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "fall-mantel-styling-technique-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "fall-mantel-styling-technique", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A fall mantel with all the right individual pieces can still look thrown together.</p>
<p>The difference between that and a genuinely styled one usually isn't the items themselves &mdash; it's the technique behind how they're arranged.</p>
<p>This covers the actual approach, not a shopping list.</p>
${photo("hero.png", "Chic neutral-toned fall mantel decor styled beautifully", 1312, 736, "hero")}

<h2>1. Start With a Focal Point</h2>
<p>A mirror, a piece of art, or one standout object gives the whole arrangement a clear starting point to build around.</p>
<p>Choosing this first, before adding any smaller pieces, keeps the mantel from becoming a collection of equally-weighted objects competing for attention.</p>
${photo("focal-point.png", "Striking focal point anchoring a fall mantel display", 574, 1024, "idea1")}

<h2>2. Layer From Back to Front</h2>
<p>Taller pieces go in the back, medium pieces in the middle, and small accents in front &mdash; the same depth principle that makes any styled vignette read as full rather than flat.</p>
<p>Skipping a layer is one of the most common reasons a mantel feels thin even when it technically has enough objects on it.</p>
${photo("layering.png", "Layered mantel styling creating depth and visual interest", 574, 1024, "idea2")}

<h2>3. Commit to a Garland or Skip It</h2>
<p>A garland draped along the mantel's edge adds a base layer of texture and movement that individual objects alone can't provide.</p>
<p>A half-hearted, too-short garland looks worse than no garland at all &mdash; it's worth using enough length to drape properly or leaving it out entirely.</p>
${photo("garland.png", "Flowing garland adding texture to a fall mantel arrangement", 574, 1024, "idea3")}

<h2>4. Choose a Palette Like a Designer Would</h2>
<p>Two or three colors, repeated across different objects, read as considered in a way that a wider, unrelated color mix never does.</p>
<p>A single varied material &mdash; different wood tones, for instance &mdash; can stand in for a traditional color palette just as effectively.</p>
${photo("color-palette.png", "Thoughtful color palette unifying a fall mantel's design", 574, 1024, "idea4")}

<h2>5. Add Candlelight</h2>
<p>A cluster of candles at varying heights adds warmth and a soft glow that no other single element replicates.</p>
<p>This also naturally reinforces the layering principle, since different candle heights do double duty as part of the depth arrangement.</p>
${photo("candles.png", "Candlelight adding warmth and ambiance to the fall mantel", 574, 1024, "idea5")}

<h2>6. Mix Textures Deliberately</h2>
<p>Smooth ceramic, rough wood, soft greenery and a bit of metal together create the layered, tactile feel that makes a mantel read as professionally styled.</p>
<p>Too many of the same texture or material, even in different colors, flattens the arrangement visually.</p>
${photo("texture.png", "Mixed textures giving a fall mantel a professionally styled feel", 574, 1024, "idea6")}

<h2>7. Bring in Real Natural Elements</h2>
<p>Real or high-quality faux branches, pinecones or dried botanicals add texture and seasonal signaling that manufactured decor alone can't match.</p>
<p>This also tends to soften an otherwise very styled, curated arrangement with something that reads as organic.</p>
${photo("nature.png", "Natural elements bringing organic texture to fall mantel decor", 574, 1024, "idea7")}

<h2>8. Make It Personal</h2>
<p>A family photo, a meaningful object, or a piece collected over time gives the mantel a specific identity rather than a generic seasonal display.</p>
<p>This is what separates a mantel that looks like a catalog photo from one that looks like it belongs to the people living in the house.</p>
${photo("personalize.png", "Personal touches making a fall mantel feel uniquely styled", 574, 1024, "idea8")}

<h2>9. Balance Symmetry and Asymmetry</h2>
<p>A fully symmetrical arrangement reads as formal and classic; an asymmetrical one reads as more relaxed and collected.</p>
<p>A blend &mdash; symmetrical candlesticks flanking an asymmetrical cluster of smaller objects, for instance &mdash; often reads as the most sophisticated option of all.</p>
${productGrid("idea9")}

<h2>10. Swap Small Details as the Season Moves</h2>
<p>A few easily changed pieces &mdash; a runner, a small cluster of accents &mdash; let the mantel shift from early to late fall without a full redo.</p>
<p>This keeps the display feeling current through a season that spans noticeably different weather and light.</p>
${photo("seasonal-swap.png", "Small styling swaps keeping a fall mantel fresh through the season", 574, 1024, "idea10")}

<h2>Final Thoughts</h2>
<p>None of these 10 techniques require starting over if a mantel already has decor on it.</p>
<p>Check the layering and the palette first, since both have the biggest effect on whether the arrangement reads as styled or scattered.</p>
<p>The technique matters more than any individual piece on the mantel.</p>
`;

module.exports = { body };
