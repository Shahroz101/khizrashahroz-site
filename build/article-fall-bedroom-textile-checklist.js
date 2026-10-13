// Body content for "The Fall Bedroom Textile Checklist: Throws,
// Pillows, Sleepwear and More". Numbered idea-list format, 10 ideas +
// intro + personal-setup section, condensed slightly (the closing
// "my setup" section folded into final thoughts). Source was heavy
// with embedded Amazon product images — per established precedent,
// only local lifestyle photos were used, no branded products named.
// This overlaps substantially with the existing fall-bedroom-ideas
// article (both cover lighting, bedding, rugs, scent, wall art), so
// this rewrite leans into the physical textile/item checklist angle
// — what to actually own and layer — rather than repeating that
// article's room-design-move framing (wall color, fixing lighting,
// nightstand styling). Source photos have no Pinterest links, so none
// carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CBPRTYPC", title: "Soft Chunky Knit Throw Blanket for Couch, Cozy Warm Knitted Blanket", w: 1500, h: 1500 },
    { asin: "B09MV19TJK", title: "Flannel Sheet Set, Deep Pocket, Breathable All Season Bedding", w: 1500, h: 1500 },
  ],
  intro: [
    { asin: "B0158EQE2K", title: "Bedsure GentleSoft Sherpa Fleece Throw Blanket for Couch", w: 1500, h: 1121 },
    { asin: "B0GXJ1H2NJ", title: "Fall Plaid Pillow Covers, 18 x 18 Inch, 2 Pcs, Rust Beige Farmhouse", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0B38YC8CK", title: "Longhui Chunky Cable Knit Throw Blanket, Beige, 100% Organic Cotton", w: 1500, h: 1500 },
    { asin: "B08P8GXHLF", title: "PU MEI Reversible Sherpa Fleece Throw Blanket, 60 x 80 Inch, Plush", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0D3HRSVVJ", title: "Aegero Corduroy Decorative Throw Pillow Covers, 18 x 18 Inch, Rust, 2 Pack", w: 1500, h: 1500 },
    { asin: "B0D9QL5P5L", title: "AQOTHES Plaid Fall Throw Pillow Covers, Orange, 18 x 18 Inch, Set of 2", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B09SDDB9DC", title: "winsaLED Dimmable Vintage Edison LED Bulbs, 2700K, 12 Pack", w: 1474, h: 1430 },
    { asin: "B08QRT86S6", title: "NOXARTE Rustic Lantern Table Lamp, Plug-in, Old Fashioned Night Light", w: 1166, h: 1249 },
  ],
  idea4: [
    { asin: "B00LZKCDHW", title: "Eddie Bauer Queen Sheet Set with Fitted Sheet and Pillowcases", w: 1500, h: 1500 },
    { asin: "B07YKLSMFM", title: "Bedsure Down Alternative Comforter Duvet Insert, Quilted, Oeko-TEX", w: 1500, h: 1428 },
  ],
  idea5: [
    { asin: "B0FQ35863X", title: "Bedsure 5 x 7 Faux Wool Area Rug, Machine Washable, Beige", w: 1500, h: 1500 },
    { asin: "B0DGTQ5WK5", title: "Beige 2 x 4 Fluffy Shag Bedside Area Rug", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0F3DRTCB2", title: "Yankee Candle Spiced Pumpkin Scented Candle, 22 oz Large Jar", w: 809, h: 1500 },
    { asin: "B074T9GRVL", title: "Aromatique Pumpkin Spice Reed Diffuser Set, Maple, Cinnamon and Clove", w: 1189, h: 1309 },
  ],
  idea7: [
    { asin: "B0H4Z916CP", title: "Vintage Autumn Gallery Wall Art Prints, 12 Pcs, Unframed", w: 1500, h: 1427 },
    { asin: "B0DP56NQR9", title: "Achart Large Macrame Wall Hanging, Boho Wall Decor", w: 1473, h: 1500 },
  ],
  idea8: [
    { asin: "B08X8NHFC5", title: "Amazon Essentials Women's Flannel Button Front Long-Sleeve Pajama Set", w: 512, h: 1500 },
    { asin: "B0H82596DJ", title: "SWOMOG 100% Cotton Women's Button Down Pajama Set, Long Sleeve", w: 535, h: 1500 },
  ],
  idea9: [
    { asin: "B07TZZ9KQN", title: "RainRoad Dark Green Velvet Decorative Throw Pillow Covers, 18 x 18 Inch, Set of 2", w: 1197, h: 1131 },
    { asin: "B09514WX62", title: "inhand Off White Knitted Throw Blanket for Couch and Bed, 50 x 60 Inch", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0D93S5SZC", title: "Artfeel Woven Blanket Basket, Rectangle Storage Basket, 65L", w: 1500, h: 1500 },
    { asin: "B0CC8Z27D1", title: "Yoken 20% Shea Butter Hand Cream Gift Set, 6 x 1 oz Travel Size", w: 1500, h: 1500 },
  ],
  final: [
    { asin: "B0BJ71QRFY", title: "RECYCO Channel Box Stitch Velvet Quilt Set, King, Olive Green", w: 1500, h: 1500 },
    { asin: "B0GHQWY4DZ", title: "BDEUS 7 Piece Gingham Ruffle Comforter Set, Queen, Brown Tartan", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "fall-bedroom-textile-checklist-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "fall-bedroom-textile-checklist", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A fall bedroom refresh doesn't have to start with paint or a lighting overhaul.</p>
<p>Most of the seasonal feeling actually comes from a handful of physical items &mdash; the things you touch, wrap up in, and smell before falling asleep.</p>
<p>This is a checklist of what to actually own for the season, not a list of design moves to make.</p>
${photo("hero.png", "Cozy autumn bedroom styled for the fall season", 1248, 832, "hero")}

<h2>Cozy Season Starts With What You Touch</h2>
<p>A room can look like fall and still not feel like it if the actual textiles &mdash; the blanket, the sheets, the rug underfoot &mdash; stay the same as every other season.</p>
<p>These items do more for the day-to-day feeling of the room than anything purely visual.</p>
${photo("intro.png", "Warm autumn bedroom with layered textiles and soft lighting", 683, 1024, "intro")}

<h2>1. A Throw That Actually Gets Used</h2>
<p>A chunky knit or sherpa throw at the foot of the bed should be functional, not just decorative &mdash; the best ones get pulled onto the couch and back nightly.</p>
<p>Two different weights, a lighter one for early fall and a heavier one for the colder stretch, cover the whole season without buying twice.</p>
<p>This is one of the highest-use items on this entire checklist relative to its cost.</p>
${photo("throws-1.png", "Chunky knit throw adding cozy texture to a fall bedroom", 683, 1024)}
${photo("throws-2.png", "Soft sherpa throw draped at the foot of the bed", 683, 1024, "idea1")}

<h2>2. Pillows That Pull Double Duty</h2>
<p>A couple of seasonal pillow covers &mdash; rust, deep green, warm plaid &mdash; swap in and out without needing new pillow inserts each time.</p>
<p>This is one of the cheapest, lowest-commitment items on this list, since covers alone handle most of the seasonal color shift.</p>
<p>Mixing textures &mdash; a velvet cover next to a knit one &mdash; adds more visual interest than color alone.</p>
${photo("pillows-1.png", "Seasonal pillow covers styled on a fall bedroom bed", 683, 1024)}
${photo("pillows-2.png", "Textured pillows doubling as both comfort and decor", 683, 1024, "idea2")}

<h2>3. Warm-Toned Lighting</h2>
<p>A warm bulb swap in the existing bedside lamp changes the whole room's evening mood for the cost of a single lightbulb.</p>
<p>A string of warm fairy lights or a small plug-in lantern adds a second, softer light source for evenings that call for less than the main overhead light.</p>
<p>This matters more as days shorten heading into fall, when evening lighting gets used far more than it did in summer.</p>
${photo("lighting-1.png", "Warm bedside lighting creating a cozy fall evening mood", 683, 1024)}
${photo("lighting-2.png", "Soft ambient lighting enhancing a fall bedroom at night", 683, 1024, "idea3")}

<h2>4. A Properly Layered Bed</h2>
<p>A flat sheet, a warmer duvet, and a throw on top &mdash; real layering, not just a single heavier comforter &mdash; lets the bed adjust to temperature swings through the night.</p>
<p>This is worth doing properly rather than just swapping in one heavier blanket, since fall nights vary more in temperature than deep winter ones do.</p>
<p>A flannel or brushed-cotton sheet set underneath makes a bigger difference here than most people expect.</p>
${photo("layered-bedding.png", "Properly layered fall bedding with sheets, duvet and throw", 683, 1024, "idea4")}

<h2>5. A Rug That Keeps Feet Warm</h2>
<p>Cold floors are one of the most-overlooked parts of a fall bedroom &mdash; a soft rug by the bed solves it directly, every single morning.</p>
<p>A natural wool or shag rug holds warmth better underfoot than a thin or synthetic one.</p>
<p>This is a genuinely functional addition, not just a styling one.</p>
${photo("rugs.png", "Soft area rug keeping feet warm in a fall bedroom", 683, 1024, "idea5")}

<h2>6. A Seasonal Scent</h2>
<p>A candle or diffuser in a warm, spiced scent does as much for the room's fall feeling as any visible decor change.</p>
<p>This is one of the fastest, cheapest items to swap seasonally, and one of the easiest to change back when the season ends.</p>
<p>A scent kept consistent through the season tends to become genuinely associated with the feeling of fall over time.</p>
${photo("scent.png", "Fall-scented candle adding warmth to a cozy bedroom", 683, 1024, "idea6")}

<h2>7. One Piece of Seasonal Wall Accent</h2>
<p>A single warm-toned print or a small textured hanging adds a seasonal note to the wall without a full redecorate.</p>
<p>This works best as one considered piece rather than several competing accents, especially in a room already carrying color through its textiles.</p>
${photo("wall-art.png", "Seasonal wall accent bringing warmth to a fall bedroom", 683, 1024, "idea7")}

<h2>8. Sleepwear That Actually Matches the Temperature</h2>
<p>A flannel or brushed-cotton pajama set matters more for fall comfort than most people account for when planning a seasonal refresh.</p>
<p>This is easy to overlook since it's not visible decor, but it directly affects how comfortable the room feels to actually sleep in.</p>
<p>Worth having on hand before the first genuinely cold night, not after.</p>
${photo("sleepwear.png", "Cozy flannel sleepwear suited for fall bedroom comfort", 683, 1024, "idea8")}

<h2>9. A Textile Color Palette, Not a Wall Color</h2>
<p>Rust, deep green, warm plaid and cream don't need to go on the walls at all &mdash; applied through throws, pillows and the rug, they carry the seasonal palette just as effectively.</p>
<p>This is a lower-commitment way to shift the room's color story than repainting, and it reverses just as easily once the season changes.</p>
<p>Keeping two or three colors consistent across all the textiles ties everything together.</p>
${photo("color-palette.png", "Warm fall color palette expressed through bedroom textiles", 683, 1024, "idea9")}

<h2>10. The Small Extras That Add Up</h2>
<p>A warm throw blanket draped over a reading chair, a small basket for extra pillows, a seasonal hand cream on the nightstand &mdash; the smaller details round out the checklist without needing much additional effort.</p>
<p>None of these are essential on their own, but together they're what makes a room feel fully considered rather than half-finished.</p>
${photo("little-extras.png", "Small seasonal extras completing a cozy fall bedroom", 683, 1024, "idea10")}

<h2>Final Thoughts</h2>
<p>None of these 10 items need to be bought all at once.</p>
<p>Start with the throw and the pillow covers, since they're the cheapest and most immediately noticeable, then build out the rest of the checklist over time.</p>
${photo("my-setup.png", "Finished fall bedroom setup combining cozy textiles and warmth", 683, 1024, "final")}
<p>A fall bedroom comes down to what's actually touched and used every day &mdash; get those few things right, and the rest follows.</p>
`;

module.exports = { body };
