// Body content for "Creating a Fall Porch That Actually Holds Up All
// Season". Guide format, condensed from an 18-section source — many
// sections were "shop this look" Amazon product roundups embedded
// within an otherwise genuine styling guide, so per the established
// precedent (same as fall-kitchen-decor-categories and the other
// Amazon-roundup sources), only the local lifestyle photos were used;
// the embedded Amazon product images were skipped and no specific
// branded products are named. Several closing sections (seasonal
// scents, maintenance, budget hacks, Halloween transition,
// weatherproofing, fall-to-winter transition) had no local photo and
// were condensed into a shorter wrap-up. New seasonal topic — distinct
// from the existing front-porch-ideas article, which is a general
// small-porch layout guide, not fall-specific. One text-only
// Pinterest link (DIY corn stalks tip) in the source had no
// accompanying image, so it carries no photo credit.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0C7G1B7L7", title: "Fall Door Mat Combo Set, Coco Coir Welcome Mat with 28 x 43 Inch Plaid Rug", w: 1500, h: 1500 },
    { asin: "B0D4Q71SDC", title: "Fall Welcome Sign for Front Porch, Maple Leaf Pumpkin Sunflower Thanksgiving Decor", w: 1500, h: 1500 },
  ],
  palette: [
    { asin: "B0GTVTQPWX", title: "DoubleFill Fall Artificial Velvet Pumpkins, Sage Green, 4 Pack", w: 1500, h: 1500 },
    { asin: "B0GYRLHYLV", title: "Artificial Fall Mums Chrysanthemum Bouquets, Faux Silk, 6 Bundles", w: 1500, h: 1500 },
  ],
  seating: [
    { asin: "B0F79CHGT9", title: "Best Choice Products 2-Person Wicker Outdoor Patio Bench with Cushion", w: 1500, h: 1375 },
    { asin: "B0H7FZZK6C", title: "Geetery Plaid Chair Cushions with Ties, 4 Pack, Orange and Black, 16 x 15 Inch", w: 1500, h: 1500 },
  ],
  layer: [
    { asin: "B0GXKVPX8S", title: "Devoko Tall Resin Outdoor Planters, 24 Inch, Large Taper", w: 1500, h: 1440 },
    { asin: "B0B63GVLSW", title: "Hodao Stacked Pumpkins Figurine, 9.5 Inch, Fall Porch Decor", w: 1233, h: 1500 },
  ],
  natural: [
    { asin: "B0DF7P9SXT", title: "Fanfanwin Corn Stalks Decorations, 2 Pcs, Thanksgiving Fall Party Decor", w: 1500, h: 1152 },
    { asin: "B075JC6T1Z", title: "Lifelike Artificial Pumpkins and Gourds Mixture, 12 Pcs", w: 1499, h: 1056 },
  ],
  lighting: [
    { asin: "B0H8Z3MV76", title: "Smart Outdoor String Lights, 100 ft, for Garden and Patio", w: 1125, h: 1500 },
    { asin: "B0F9NHZPR1", title: "Decorative Floor Lanterns, Set of 3, 22, 19 and 17 Inch, Indoor Outdoor", w: 1500, h: 1500 },
  ],
  door: [
    { asin: "B0C4MXX22B", title: "20 Inch Harvest Fall Wreath for Front Door, Pumpkins and Berries", w: 1500, h: 1500 },
    { asin: "B0FCFLRCQT", title: "Fall Welcome Door Mat for Front Door, Pumpkin and Maple Leaves Design", w: 1500, h: 1500 },
  ],
  textures: [
    { asin: "B0GPWH3JJB", title: "MontVoo Outdoor Rug, 4 x 6 Ft, Polypropylene Patio Rug", w: 1500, h: 1500 },
    { asin: "B07H7GBNC1", title: "Ashler Waterproof Outdoor Pillow Inserts, 18 x 18 Inch, Set of 4", w: 1500, h: 1427 },
  ],
  walkway: [
    { asin: "B0F31Y8BLM", title: "DERAYSION Stainless Steel Glass Solar Pathway Lights, 8 Pack", w: 1500, h: 1500 },
    { asin: "B0GHWYTSMX", title: "KOL 15 Inch Tall Beige Plastic Urn Planters, 2 Pack", w: 1500, h: 1500 },
  ],
  maintain: [
    { asin: "B09XB773VB", title: "Ywlake Outdoor Foam Fall Pumpkin Decorations, 16 Pcs, Large and Small, Orange", w: 1500, h: 1500 },
    { asin: "B0HGF4V26G", title: "Multi-Surface Outdoor Cleaner Spray with Cloth, Heavy Dirt and Grime Wash", w: 1500, h: 1377 },
  ],
  halloween: [
    { asin: "B0GY7M4KBW", title: "Light Up Ghost Halloween Decorations, 2 Pack, with Lights", w: 1500, h: 1500 },
    { asin: "B0FMF766L9", title: "Tioncy Black Terracotta Jack O Lantern Pumpkin Halloween Decor", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "fall-porch-styling-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "fall-porch-styling-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A fall porch that looks great on day one and falls apart by week three isn't actually styled — it's just decorated.</p>
<p>The difference comes down to a handful of choices made upfront: palette, layering, and what the weather is actually going to do to everything sitting outside.</p>
<p>This covers both the styling and the practical side that keeps it looking good through the whole season.</p>
${photo("hero.jpg", "Beautifully styled fall porch with warm seasonal decor", 1400, 932, "hero")}

<h2>Pick a Palette That's Actually Yours</h2>
<p>Classic orange and rust work, but they're not mandatory — a muted sage-and-cream fall palette or a deep burgundy-and-brass one both read as seasonal without looking like every other porch on the block.</p>
<p>Picking two or three colors and sticking to them across every element keeps the whole porch cohesive instead of scattered.</p>
<p>This decision shapes every other choice on this list, so it's worth making first.</p>
${photo("intro.png", "Fall porch decor featuring a cohesive seasonal color palette", 574, 1024)}
${photo("color-palette.png", "Warm fall color palette styled across porch decor", 574, 1024, "palette")}

<h2>Choose Seating That Can Actually Take the Weather</h2>
<p>A porch swing, a couple of weather-rated chairs, or a simple bench all work, as long as the materials are actually rated for outdoor use.</p>
<p>A few weatherproof cushions in the season's palette turn basic seating into something that looks intentional rather than functional-only.</p>
<p>This is worth getting right before any decor goes up — the seating is what makes the porch usable, not just photogenic.</p>
${photo("seating.png", "Weather-ready seating styled for a cozy fall porch", 574, 1024, "seating")}

<h2>Layer Decor for Real Depth</h2>
<p>A porch with everything at one height reads as flat, no matter how good the individual pieces are.</p>
<p>Varying heights — a tall planter, a mid-height pumpkin stack, a low lantern — gives the eye somewhere to travel instead of landing on one flat plane.</p>
<p>The goal is for the eye to move from the ground up to the door without hitting any obviously empty gaps.</p>
${photo("layering.png", "Layered fall porch decor creating visual depth and interest", 574, 1024, "layer")}

<h2>Bring in Real Natural Texture</h2>
<p>Corn stalks, potted mums, a few gourds, a scattering of real or high-quality faux leaves &mdash; natural texture does more for a fall porch than anything plastic-looking from a big-box clearance aisle.</p>
<p>A mix of heights and textures here mirrors the layering principle above, just with organic materials specifically.</p>
<p>This is one of the most recognizable fall signals, and one of the easiest to overdo if every single element is competing for attention.</p>
${photo("natural-elements.png", "Natural fall elements like gourds and mums decorating a porch", 574, 1024, "natural")}

<h2>Light It for Evenings, Not Just Daylight Photos</h2>
<p>Warm string lights, a lantern or two, and a well-lit front door all extend the porch's good looks well past sunset.</p>
<p>Fall evenings get dark early, which makes this more important here than for a spring or summer porch refresh.</p>
<p>A porch that only looks good in daylight photos isn't actually finished.</p>
${photo("lighting.png", "Warm evening lighting enhancing a fall porch's cozy atmosphere", 574, 1024, "lighting")}

<h2>Make the Front Door the Star</h2>
<p>A seasonal wreath, a pair of flanking planters, and maybe a doormat that actually matches the palette turn the door into the porch's natural focal point.</p>
<p>Everything else on the porch should support the door, not compete with it for attention.</p>
<p>This is often the highest-impact single area to style carefully, since it's also what guests see first.</p>
${photo("front-door.png", "Front door styled as the focal point of a fall porch", 574, 1024, "door")}

<h2>Add Textures You'll Actually Use</h2>
<p>A chunky throw blanket, a textured outdoor rug, a few weatherproof pillows &mdash; cozy textures should be genuinely usable, not just styled for a photo.</p>
<p>This is what turns a decorated porch into a porch people actually want to sit on.</p>
<p>Washable or weather-resistant fabric matters more here than the exact pattern or color.</p>
${photo("textures.png", "Cozy textures like throws and pillows adding comfort to a fall porch", 574, 1024, "textures")}

<h2>Keep the Walkway Clear</h2>
<p>A gorgeous porch that's also a tripping hazard isn't actually finished, especially once evenings get darker earlier in the season.</p>
<p>Leaving a clear, direct path to the door &mdash; keeping pumpkins, planters and decor along the edges rather than in the walking line &mdash; matters more than it sounds like it should.</p>
<p>This is the easiest thing to overlook while focused on how everything looks instead of how it functions.</p>
${photo("functional.png", "Fall porch decor styled while keeping the walkway clear and functional", 574, 1024, "walkway")}

<h2>Keeping It Looking Good All Season</h2>
<p>Real pumpkins and gourds eventually soften and need swapping out; faux versions last the whole season without any maintenance at all.</p>
<p>A quick reset every couple of weeks &mdash; fluffing cushions, replacing a wilted stem, wiping down furniture &mdash; keeps the porch from visibly aging before the season does.</p>
<p>Budget-friendly swaps, like repainting an old planter or repurposing last year's decor in a new arrangement, stretch a smaller budget across the whole season.</p>
${productGrid("maintain")}

<h2>Carrying It Through Halloween and Into Winter</h2>
<p>A few spooky accents layered onto the existing fall base cover Halloween without needing an entirely separate decor set.</p>
<p>Keeping the base layer &mdash; palette, lighting, seating &mdash; consistent and swapping only the smaller seasonal accents makes the transition into winter decor far less work later.</p>
<p>Choosing weatherproof materials from the start pays off here too, since the same durable pieces carry through multiple seasonal refreshes.</p>
${productGrid("halloween")}

<h2>Your Fall Porch, Your Rules</h2>
<p>None of these choices need to happen all at once or exactly in this order.</p>
<p>Start with the palette and the seating, then layer in natural texture, lighting and the smaller details as time and budget allow.</p>
<p>A fall porch that actually holds up all season comes down to a few deliberate choices upfront, not a single big decorating day.</p>
`;

module.exports = { body };
