// Body content for "10 Coastal Bedroom Ideas for a Breezy, Beachy
// Retreat". Numbered idea-list format, 10 ideas matching the source
// 1:1, reordered from the source sequence (grouped into
// foundation/palette, materials/texture, and finishing-touch
// categories). New room topic for the site — coastal-living-room-ideas
// covers a different room entirely, so no differentiation angle
// needed. Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B076CLJV6C", title: "MooMee Washed Cotton Linen-Look Duvet Cover Set, Queen", w: 1500, h: 1500 },
    { asin: "B0BP6DZ862", title: "Bedsure PureWoven 100% Washed Cotton Duvet Cover Set, Queen, 3 Piece", w: 1144, h: 1500 },
  ],
  idea1: [
    { asin: "B0FBX98KRH", title: "i100 White Base Eggshell Interior Paint, 1 Gallon", w: 1254, h: 1254 },
    { asin: "B07BZY3D4G", title: "Rust-Oleum Simply Home Interior Wall Paint, Eggshell Pure White, 1 Gallon", w: 1371, h: 1500 },
  ],
  idea2: [
    { asin: "B0G5QNFHC8", title: "Seafoam Green Chenille Decorative Throw Pillow Covers", w: 1314, h: 1321 },
    { asin: "B08ZKWV3NC", title: "Jeneoo Seafoam Green Soft Square Throw Pillow Covers", w: 1235, h: 1238 },
  ],
  idea3: [
    { asin: "B0GBVYB1KL", title: "GarveeHome 5x7 Washable Non-Slip Jute-Look Area Rug", w: 1500, h: 1500 },
    { asin: "B0FQ353BZZ", title: "Bedsure 5x7 Printed Jute-Look Washable Area Rug", w: 1500, h: 1186 },
  ],
  idea4: [
    { asin: "B0FHH1SRCL", title: "Acovy Solid Reclaimed Wood Floating Shelves, Rustic", w: 1500, h: 1500 },
    { asin: "B07NC7YXTX", title: "Bloomingville Hand-Carved Paulownia Wood Bowl, Whitewashed, 10.5 Inch", w: 1500, h: 1015 },
  ],
  idea5: [
    { asin: "B078VKPCQF", title: "RYB HOME White Semi Sheer Curtains, 84 Inches Long", w: 1500, h: 1500 },
    { asin: "B01N3SNX27", title: "H.VERSAILTEX White Linen Sheer Curtains, 84 Inch, 2 Panels, Grommet", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0FR4XQ2GJ", title: "Vercraft Nautical Rope Mirror, 24 Inch", w: 1500, h: 1500 },
    { asin: "B0D9TPDZCQ", title: "Nautical Round Rope Wall Mirror, White Twisted Rope", w: 1169, h: 1200 },
  ],
  idea7: [
    { asin: "B0DFM5JMK8", title: "EJIAXIN Mini Rattan Table Lamps, Set of 2, 13.75 Inch", w: 1500, h: 1500 },
    { asin: "B0D4DXQ3SV", title: "Vintage Rattan Wicker Table Lamps, Set of 2", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0H1R2SNCG", title: "Abstract Blue Seascape Ocean Canvas Wall Art, 20 x 40 Inch", w: 1500, h: 1500 },
    { asin: "B0F2FK9RJN", title: "Large Framed Blue Abstract Coastal Ocean Wall Art, 24 x 36 Inch", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B0HFN1CHNM", title: "Modern Minimalist Solid Wood Floor Platform Bed Frame", w: 1500, h: 1500 },
    { asin: "B0GZS9CRXG", title: "GarveeHome Low Wood Queen Platform Bed Frame", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0H95FYGL8", title: "Large Seagrass Planter Baskets with Plastic Lining, Set of 4", w: 1416, h: 1500 },
    { asin: "B08F9XX13L", title: "Seagrass Planter Baskets, Set of 4", w: 1427, h: 1318 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "coastal-bedroom-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "coastal-bedroom-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A coastal bedroom isn't about literal seashells and anchor prints.</p>
<p>It's a feeling &mdash; breezy, sun-bleached, uncluttered &mdash; that comes from a handful of specific choices in color, material and light.</p>
<p>These 10 ideas cover what actually creates that feeling, not the obvious beach-house clichés.</p>
${photo("hero.png", "Calming coastal bedroom with fresh greenery and breezy design", 1312, 736, "hero")}

<h2>1. Start With Breezy White Walls</h2>
<p>A soft, warm white on the walls is the foundation almost every coastal bedroom builds on.</p>
<p>This isn't a stark, clinical white &mdash; a slightly warmer or off-white tone reads as sun-washed rather than sterile.</p>
<p>Everything else on this list layers on top of this base, so it's worth getting right first.</p>
${photo("white-walls.png", "Coastal bedroom with breezy white walls as a calming foundation", 574, 1024, "idea1")}

<h2>2. Lean Into Ocean-Inspired Color</h2>
<p>Soft blues, sandy beiges and seafoam greens bring the palette the rest of the way toward coastal without needing a single literal beach motif.</p>
<p>These colors work best in small doses &mdash; a throw pillow, a piece of art, an accent wall &mdash; layered onto the white base rather than replacing it.</p>
<p>This is where the room's personality actually comes through.</p>
${photo("ocean-colors.png", "Ocean-inspired colors bringing a coastal palette to the bedroom", 574, 1024, "idea2")}

<h2>3. Bring in Natural Textures</h2>
<p>Linen bedding, a jute rug, a rattan headboard &mdash; texture does as much work in a coastal bedroom as color does.</p>
<p>These materials have an inherently relaxed, slightly imperfect quality that fits the whole look better than anything too polished or synthetic.</p>
<p>Layering two or three of these textures together reads as considered rather than matched.</p>
${photo("natural-textures.png", "Natural textures like linen and rattan in a coastal bedroom", 574, 1024, "idea3")}

<h2>4. Add Driftwood or Weathered Wood Accents</h2>
<p>A driftwood mirror frame, a weathered wood side table, or a reclaimed headboard brings genuine coastal character into the room.</p>
<p>The slightly rough, sun-bleached quality of this material is hard to fake with anything new, which is part of why it reads as authentic.</p>
<p>One or two pieces are usually enough &mdash; this works better as an accent than as every piece of furniture in the room.</p>
${photo("driftwood.jpg", "Driftwood accents bringing coastal character to a bedroom", 1024, 768, "idea4")}

<h2>5. Choose Light, Breezy Fabrics</h2>
<p>Sheer curtains, a lightweight linen duvet, and loosely woven throws all reinforce the airy feeling the whole style is built around.</p>
<p>Heavy, dense fabrics work against this look even in colors that otherwise fit the palette.</p>
<p>This is one of the easiest and cheapest swaps on this entire list, since it's mostly about fabric choice, not furniture.</p>
${photo("breezy-fabrics.png", "Light, breezy fabrics enhancing the airy feel of a coastal bedroom", 574, 1024, "idea5")}

<h2>6. Keep Nautical Details Subtle</h2>
<p>A single rope-wrapped mirror or a woven rattan pendant light brings in the nautical reference without tipping into theme-park territory.</p>
<p>One understated nautical detail reads as sophisticated; several literal ones &mdash; anchors, ship wheels, stripes everywhere &mdash; read as costume-like.</p>
<p>Restraint matters more here than almost anywhere else on this list.</p>
${photo("nautical-decor.jpg", "Subtle nautical decor details in a coastal-inspired bedroom", 1024, 900, "idea6")}

<h2>7. Layer the Lighting</h2>
<p>A mix of natural light, a warm bedside lamp, and maybe a woven pendant fixture keeps the room feeling sunlit even after dark.</p>
<p>Sheer window treatments that let real daylight filter through do more for this look than almost any artificial lighting choice.</p>
<p>Warm-toned bulbs throughout keep the evening version of the room feeling as relaxed as the daytime one.</p>
${photo("layered-lighting.png", "Layered lighting creating a sunlit feel in a coastal bedroom", 574, 1024, "idea7")}

<h2>8. Add One Statement Art Piece</h2>
<p>A single large piece &mdash; an abstract ocean-toned painting, a black-and-white beach photograph, a woven wall hanging &mdash; does more than a gallery wall of smaller coastal-themed prints.</p>
<p>This keeps the room feeling curated rather than overly literal about the theme.</p>
<p>Scale matters here more than subject matter &mdash; one confident piece reads better than several small matching ones.</p>
${photo("statement-art.jpg", "Statement art piece adding character to a coastal bedroom", 683, 1024, "idea8")}

<h2>9. Furnish With Restraint</h2>
<p>Coastal bedrooms work best with fewer, simpler furniture pieces rather than a fully furnished, busy room.</p>
<p>Clean-lined furniture in light wood or white finishes keeps the room feeling open and uncluttered, which is central to the whole look.</p>
<p>Negative space does real work here &mdash; a sparser room reads as more intentional, not unfinished.</p>
${photo("minimalist-furniture.jpg", "Minimalist furniture keeping a coastal bedroom feeling open", 1024, 683, "idea9")}

<h2>10. Finish With Greenery</h2>
<p>A few simple plants &mdash; a palm, a fern, something with loose, relaxed foliage &mdash; brings a last layer of life into the room.</p>
<p>This is one of the easiest finishing touches on this list and one of the most effective at making the room feel fresh rather than staged.</p>
<p>A natural-fiber planter keeps the material story consistent with everything else in the room.</p>
${photo("greenery.png", "Greenery adding fresh, natural touches to a coastal bedroom", 574, 1024, "idea10")}

<h2>Conclusion</h2>
<p>None of these 10 ideas require a full bedroom renovation to try.</p>
<p>Start with the wall color and fabric choices, then layer in texture, a driftwood accent and one statement piece as budget allows.</p>
<p>A coastal bedroom comes down to restraint and the right materials, not literal beach decor.</p>
`;

module.exports = { body };
