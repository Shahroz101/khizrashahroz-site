// Body content for "Raised Garden Bed Materials, and How to Choose
// Between Them". Guide format, matching the source's 9 content
// sections. Distinct from flower-bed-edging-materials and
// flower-bed-edging-technique, both about ground-level bed borders —
// a raised bed's edging is a structural container wall, not a
// border line, a genuinely different construction context. Source
// photos have no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0GJCRJGSF", title: "Anleolife 12 Bed Raised Garden Set, Rectangle, L-Shaped and Square, Quartz Grey", w: 1500, h: 1039 },
    { asin: "B0FZ8VPGMF", title: "Land Guard Galvanized Metal Raised Garden Beds, 6 x 3 x 2 Ft, 2 Pack", w: 1500, h: 1453 },
  ],
  why: [
    { asin: "B0FFMPTNRQ", title: "Non-Woven Fabric Raised Garden Bed Liner, 63 x 114 Inch", w: 1500, h: 1424 },
    { asin: "B0DZ2X5D3G", title: "Raised Garden Bed Corner Brackets, 12 Piece Black Metal Set with Screws", w: 1500, h: 1426 },
  ],
  wood: [
    { asin: "B0C62D5QPX", title: "Cedar Raised Garden Bed with Legs, 48 x 24 x 30 Inch, 200 lb Capacity", w: 1483, h: 1500 },
    { asin: "B01CTKJUNG", title: "Best Choice Products 8 x 2 Ft Outdoor Wooden Raised Garden Bed Planter", w: 1500, h: 1429 },
  ],
  metal: [
    { asin: "B0957YLJZW", title: "Land Guard Galvanized Oval Raised Garden Bed Kit, 6 x 3 x 1 Ft", w: 1452, h: 668 },
    { asin: "B0D4M5WLW8", title: "Corten Steel Landscape Edging, 6 Inch, Pre-Rusted, 6 Pack", w: 1500, h: 1483 },
  ],
  stone: [
    { asin: "B0H1V87CHF", title: "Faux Stone Garden Edging Border, 20 Pack, Plastic Lawn Edge", w: 1254, h: 1220 },
    { asin: "B0G6T48T4W", title: "Faux Stone Landscape Edging Border, 17 Ft x 2.75 Inch Tall", w: 1500, h: 1364 },
  ],
  concrete: [
    { asin: "B00F2NWOWC", title: "Greek Roman Floral Border Edging Mold for Concrete or Cement", w: 1500, h: 1384 },
    { asin: "B0FRS6PGB1", title: "Worth Garden White Large Round Planter, 12.5 x 18.5 Inch, Lightweight Cement Finish", w: 1500, h: 1500 },
  ],
  reclaimed: [
    { asin: "B07D7HPG1B", title: "Reclaimed Wood Planter Box with Metal Brackets, Small, 14.5 Inch", w: 1498, h: 1267 },
    { asin: "B0GT6P2DTX", title: "Best Choice Products 48 x 24 x 30 Inch Elevated Wood Raised Garden Bed, 16 Inch Deep", w: 1500, h: 1491 },
  ],
  living: [
    { asin: "B0FS7YQ93V", title: "Magic Blue Creeping Thyme Seeds for Ground Cover, 20,000+ Seeds", w: 1500, h: 745 },
    { asin: "B0FMGKGYJN", title: "Huntington Carpet Rosemary Plants, 6 Pack, 3.5 Inch Nursery Cubes", w: 1500, h: 1118 },
  ],
  veggie: [
    { asin: "B071FRVWQ4", title: "All Things Cedar 4 x 2 Ft Raised Garden Planter Bed, Western Red Cedar", w: 1500, h: 555 },
    { asin: "B000I1QA6E", title: "Hope's 100% Pure Tung Oil, Food Safe Wood Finish, 32 fl oz", w: 1500, h: 1301 },
  ],
  lastLonger: [
    { asin: "B0BTTR7P9D", title: "Seal It Green Cedar Garden Box Sealer, Plant Based, Non-Toxic", w: 1080, h: 1080 },
    { asin: "B0G3YHJTZ3", title: "Plant-Based Rust Converter for Metal, Rust Reformer and Neutralizer", w: 457, h: 1288 },
  ],
  choosing: [
    { asin: "B0GT6VKVT6", title: "Best Choice Products 72 x 24 x 30 Inch Non-Toxic Galvanized Raised Garden Bed", w: 1500, h: 1440 },
    { asin: "B0CKN427F7", title: "Vego Garden 17 Inch Tall Jumbo Modular Metal Raised Garden Bed Kit", w: 1500, h: 916 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "raised-bed-edging-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "raised-bed-edging-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A raised bed's edging isn't a border line &mdash; it's a structural wall holding soil in place, which makes the material choice a genuinely different decision than edging a ground-level flower bed.</p>
<p>This covers the materials actually suited to that job, and how to pick between them.</p>
${photo("hero.png", "Charming raised garden bed with stylish edging upgrading the space", 1248, 832, "hero")}

<h2>Why Raised Bed Edging Actually Matters</h2>
<p>Beyond containing soil, the right edging material protects the structure from rot, pests and weather, which directly affects how many years the bed actually lasts.</p>
<p>This is a functional decision first and a styling one second, unlike edging for a ground-level bed where the stakes are lower.</p>
${productGrid("why")}

<h2>Classic Wood</h2>
<p>Wood remains the most popular choice for genuine reason &mdash; it's affordable, easy to work with, and brings real warmth to the garden.</p>
<p>Rot-resistant species like cedar last considerably longer than standard lumber, which matters more here than it would for a purely decorative edge.</p>
${photo("wood.png", "Classic wood edging bringing natural warmth to a raised garden bed", 683, 1024, "wood")}

<h2>Metal</h2>
<p>Metal edging brings a sleek, modern look along with genuine durability that outlasts most wood options.</p>
<p>A rust-resistant coating or an inherently corrosion-resistant metal matters more for a raised bed than it would for ground-level edging, given the sustained contact with damp soil.</p>
${photo("metal.png", "Sleek metal edging offering durability for a raised garden bed", 683, 1024, "metal")}

<h2>Stone and Brick</h2>
<p>Stone or brick brings genuine permanence and a built-to-last quality that few other materials can match for a raised structure.</p>
<p>This is a bigger upfront investment, both in cost and labor, but one that essentially never needs replacing once properly installed.</p>
${photo("stone-brick.png", "Stone and brick creating a permanent, built-to-last raised bed", 683, 1024, "stone")}

<h2>Concrete</h2>
<p>Concrete blocks or poured concrete create an extremely durable, low-maintenance raised bed wall that handles weather and soil pressure better than almost any other material.</p>
<p>This works especially well for a larger raised bed, where the structural demands on the edging material are greater.</p>
${photo("concrete.png", "Durable concrete edging providing strong structural support", 683, 1024, "concrete")}

<h2>Reclaimed and Upcycled Materials</h2>
<p>Old bricks, reclaimed wood, or repurposed metal all bring genuine character while keeping the project both budget-friendly and more sustainable.</p>
<p>This option requires more hunting and planning than buying new material, but it often produces the most visually interesting result on this entire list.</p>
${photo("reclaimed.png", "Reclaimed materials bringing budget-friendly character to the bed", 683, 1024, "reclaimed")}

<h2>Living Edging With Plants</h2>
<p>A border of low-growing plants around the raised bed's base softens its structural lines and adds a layer of greenery hard materials can't provide.</p>
<p>This works best as a complement to a hard-material wall, rather than as the bed's actual structural edge.</p>
${productGrid("living")}

<h2>What Works Best for a Vegetable Garden</h2>
<p>Untreated, food-safe wood or a non-reactive material like stone matters more for a vegetable bed specifically, since edible plants are growing in direct contact with the material.</p>
<p>This is worth checking carefully before choosing a material for any bed that will actually grow food.</p>
${photo("veggie-garden.png", "Food-safe edging materials suited to a vegetable garden bed", 683, 1024, "veggie")}

<h2>Making the Edging Last Longer</h2>
<p>A protective sealant on wood, regular rust checks on metal, and proper drainage behind stone or concrete all extend whichever material gets chosen well past its default lifespan.</p>
<p>This maintenance matters more for a raised bed than ground-level edging, given the material's constant exposure to damp soil on one side.</p>
${productGrid("lastLonger")}

<h2>Choosing What's Right for the Garden</h2>
<p>Budget, how long the bed needs to last, and whether it's growing food all weigh into the decision more heavily here than for a simple border edge.</p>
<p>Matching the material to the home's existing hardscaping also helps the raised bed feel like part of the yard's design, not a separate add-on.</p>
${photo("choosing-right.png", "Choosing the right raised bed material for the garden's needs", 683, 1024, "choosing")}

<h2>Make Your Garden Beds Pop</h2>
<p>None of these materials is universally correct for every raised bed.</p>
<p>Weigh durability, budget and whether the bed is growing food, then choose accordingly &mdash; the right material turns a simple soil container into a genuine garden feature.</p>
`;

module.exports = { body };
