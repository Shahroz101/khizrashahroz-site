// Body content for "How to Create Garden Art That Actually Looks
// Intentional". Guide format, condensed from a 14-section source
// (closing "quick tips" folded into final thoughts). New topic for
// the site, no existing garden-art article. Steps 1, 3, 5, 7 and 8
// (style, materials, vertical art, mixing with nature, personalizing)
// had no source photo, kept text-only. Source photos have no
// Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0FNQQBSFR", title: "Solar Garden Snail Statue, Lawn Decor for Patio, Balcony and Yard", w: 1500, h: 1500 },
    { asin: "B0GY4LZJXL", title: "Rustic Metal Coneflower Garden Stakes, Set of 3, Rusted Iron Yard Art", w: 1015, h: 1500 },
  ],
  why: [
    { asin: "B0DDTHQJV5", title: "Goodeco Dog Statue with Solar Butterfly Garden Decor", w: 1185, h: 1500 },
    { asin: "B0B3QD3PW9", title: "Metal Butterfly Wall Decor, 9.6 Inch, Outdoor Fence Wall Art", w: 1200, h: 1200 },
  ],
  step1: [
    { asin: "B0H5JHWRY2", title: "Duraaamo 40 Inch Modern Metal Garden Sculpture, Steel", w: 1500, h: 1500 },
    { asin: "B0B79KF6XP", title: "LimeHill Large Metal Wind Spinner for Garden and Yard, Kinetic Sculpture", w: 1500, h: 1500 },
  ],
  step2: [
    { asin: "B0BKJYNL29", title: "YEAHOME Sunflower Garden Stakes, 2 Pack, 22.4 Inch, Metal Garden Decor", w: 1460, h: 1500 },
    { asin: "B06XNWV7VM", title: "Alpine Corporation 10 Inch Glass Gazing Globe, Indoor and Outdoor, Blue", w: 1298, h: 1500 },
  ],
  step3: [
    { asin: "B0H4M92QG1", title: "Whimsical Metal Venus Flytrap Garden Stake, 25 Inch Yard Art Sculpture", w: 1500, h: 1483 },
    { asin: "B0GHNLSSBM", title: "Ceramic Mushroom Garden Decor, 10 Pack, Outdoor Fairy Garden Ornaments", w: 1489, h: 1500 },
  ],
  step4: [
    { asin: "B0CQ88G8WW", title: "Pagather Acrylic Paint Markers, 48 Colors, Dual Tip Fine and Brush Pens", w: 1492, h: 1500 },
    { asin: "B0FDKRPH12", title: "FIVEIZERO Glass Mosaic Tiles Kit, 280 Pcs, 420g, for Crafts", w: 1201, h: 1500 },
  ],
  step5: [
    { asin: "B0BP72MMJ1", title: "SUNNYPARK Butterfly Metal Garden Trellis for Climbing Plants, Set of 2", w: 877, h: 1500 },
    { asin: "B0GRGX5FNV", title: "HOBYLUBY Metal Sun Outdoor Wall Decor, 25.98 Inch Wall Art", w: 905, h: 881 },
  ],
  step6: [
    { asin: "B0CMZ9RDSH", title: "AUDERWIN Solar Spot Lights Outdoor, Waterproof, 4 Pack, Cool White", w: 1500, h: 1500 },
    { asin: "B0C2VGNTW1", title: "ASMAD Solar Garden Lights Outdoor, 4 Pack, 32 LEDs, Fairy Lights", w: 1500, h: 1500 },
  ],
  step7: [
    { asin: "B0FGXHKHB3", title: "Plant Trellis for Potted Climbing Plants, 30 Inch, 2 Pack", w: 1439, h: 1500 },
    { asin: "B0FJRQXD17", title: "Metal Garden Obelisk Trellis, 5.5 Ft, Heavy Duty, for Climbing Vines", w: 331, h: 1090 },
  ],
  step8: [
    { asin: "B0GH6MQ56S", title: "Round Stepping Stone Kit, 10 Inch, DIY Garden Craft Kit for Kids and Family", w: 1500, h: 1500 },
    { asin: "B075MJQNXS", title: "Spoontiques Bronze Angel Stepping Stone, Decorative Garden Stone", w: 1140, h: 1181 },
  ],
  fresh: [
    { asin: "B001681ZA4", title: "Mod Podge Outdoor Waterbase Sealer, Glue and Finish, 8 Oz, Clear", w: 855, h: 1500 },
    { asin: "B07RLXT9GZ", title: "Magicfly Outdoor Acrylic Paint Set, 30 Colors, 60ml, with 3 Brushes", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "garden-art-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "garden-art-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Garden art can transform an outdoor space or just look like clutter that happened to end up outside.</p>
<p>The difference comes down to a handful of decisions made before a single piece gets placed &mdash; style, placement, and how it relates to the plants around it.</p>
<p>This walks through that process.</p>
${photo("hero.png", "Stunning garden art adding charm to an outdoor space", 1312, 736, "hero")}

<h2>Why Garden Art Actually Transforms a Space</h2>
<p>Plants alone give a garden life, but art gives it a point of view &mdash; something that couldn't exist in anyone else's yard in quite the same way.</p>
<p>It also draws the eye to specific spots, which helps a garden read as designed rather than just planted.</p>
${photo("why-transforms.png", "Garden art transforming an outdoor space with unique charm", 574, 1024, "why")}

<h2>Step 1: Choose a Style First</h2>
<p>Whimsical, modern, rustic or classical &mdash; picking a general style before buying or making anything keeps the eventual collection from reading as mismatched.</p>
<p>This decision should take cues from the home's own architecture and the garden's existing planting style, not just personal taste in isolation.</p>
${productGrid("step1")}

<h2>Step 2: Plan the Placement</h2>
<p>A piece placed where it naturally draws the eye &mdash; at a path's end, in a gap between plantings &mdash; does more work than the same piece placed randomly.</p>
<p>Walking the garden and noting where the eye naturally lands is a more reliable method than guessing from a single vantage point.</p>
${photo("plan-spots.png", "Thoughtfully planned garden art placement drawing the eye naturally", 574, 1024, "step2")}

<h2>Step 3: Pick Materials That Last</h2>
<p>Metal, ceramic and treated wood all hold up to real outdoor exposure better than materials meant for indoor use.</p>
<p>Matching the material to the local climate &mdash; humidity, freeze-thaw cycles, direct sun &mdash; matters more here than for almost any indoor decor decision.</p>
${productGrid("step3")}

<h2>Step 4: Start Simple With a DIY Piece</h2>
<p>A simple first project &mdash; painted stones, a repurposed object, a basic mosaic &mdash; builds confidence before attempting anything more ambitious.</p>
<p>This is also the lowest-cost way to test whether a particular style actually works in the space before investing in something bigger.</p>
${photo("diy-simple.png", "Simple DIY garden art project adding personal charm to the yard", 574, 1024, "step4")}

<h2>Step 5: Add Vertical Art for Impact</h2>
<p>A tall sculptural piece, a trellis with art built in, or a wall-mounted piece on a fence all use vertical space a garden often leaves completely empty.</p>
<p>This adds visual drama that ground-level pieces alone can't provide, especially in a smaller garden with limited floor space.</p>
${productGrid("step5")}

<h2>Step 6: Light It for the Evening</h2>
<p>A solar spotlight or a simple strand of string lights lets a piece remain visible and striking well after the sun goes down.</p>
<p>This is one of the lowest-effort additions on this entire list, and one that significantly extends how much the piece actually gets seen and enjoyed.</p>
${photo("light-it-up.png", "Garden art beautifully illuminated for nighttime viewing", 574, 1024, "step6")}

<h2>Step 7: Let Art and Plants Work Together</h2>
<p>A piece surrounded by complementary plantings reads as integrated into the garden rather than placed on top of it.</p>
<p>Climbing plants trained around a sculptural piece, or foliage chosen to echo the art's color, both reinforce this connection.</p>
${productGrid("step7")}

<h2>Step 8: Make It Personal</h2>
<p>A piece with real meaning &mdash; handmade, inherited, or tied to a specific memory &mdash; carries more weight than anything chosen purely for how it looks.</p>
<p>This is what makes a garden's art collection feel like it belongs to someone specific, not like it came from a generic catalog.</p>
${productGrid("step8")}

<h2>Keeping It Looking Fresh</h2>
<p>Regular cleaning and the occasional reseal or repaint keeps outdoor art from looking neglected faster than the plants around it.</p>
<p>Rearranging pieces occasionally, rather than leaving every piece permanently fixed, keeps the garden feeling considered rather than static.</p>
${productGrid("fresh")}

<h2>You're Ready to Rock Your Garden Art</h2>
<p>None of these 8 steps need to happen all in one season.</p>
<p>Start with style and placement, since both shape everything that follows, then build the collection piece by piece from there.</p>
<p>Done thoughtfully, garden art turns a planted space into one with a genuine point of view.</p>
`;

module.exports = { body };
