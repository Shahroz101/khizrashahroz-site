// Body content for "6 Flower Bed Edging Materials, and What Each One
// Actually Does". Guide format, matching the source's 6 material
// sections plus intro. New topic for the site — no existing garden
// article covers edging material choice. Source photos have no
// Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0HB4MVX4J", title: "Metal Garden Edging, 20 ft, 40 Inch Sections, 6 Pack, Black Landscape Border", w: 1500, h: 1288 },
    { asin: "B0F26LGY2Z", title: "MIXC Plastic Landscape Garden Edging Border, 100 ft, 2 Inch Tall, with 150 Stakes", w: 1500, h: 1489 },
  ],
  stone: [
    { asin: "B0BSB7RK38", title: "Beuta Polyrock Stone-Look Landscape Edging Bricks for Lawn and Garden Borders", w: 1486, h: 1500 },
    { asin: "B0GSDW99BM", title: "Landscape Edging Stone Kit for Lawn Edging, 12 Pack, 24 Bricks, 15.5 ft", w: 1500, h: 1500 },
  ],
  metal: [
    { asin: "B0C5X22J3Y", title: "WORTH Garden 33 ft Metal Landscape Edging for Lawns", w: 1500, h: 1458 },
    { asin: "B0D7M5BFMH", title: "Galvanized Steel Landscape Edging, 20 ft, 6 Pack, 40 x 6 Inch, with Stakes", w: 1500, h: 1427 },
  ],
  brick: [
    { asin: "B0BSB6MHN9", title: "Beuta Polyrock Brick-Look Landscape Edging for Flower Beds and Pathways", w: 1485, h: 1500 },
    { asin: "B0FV9QW5TK", title: "PebbleLock Interlocking Permeable Paver Grid, Heavy Duty, 64 sq ft, 12 Pack", w: 1500, h: 1500 },
  ],
  wood: [
    { asin: "B01HTYWRM8", title: "Flexible Brown Natural Lawn and Landscape Border Edging, 8 Pack", w: 1500, h: 360 },
    { asin: "B000F5MUS0", title: "Deflecto RC41 Cedar Lawn Edging, 6 x 10 Inch", w: 1000, h: 838 },
  ],
  concrete: [
    { asin: "B0B94X6HBV", title: "Beuta Polyrock Concrete-Look Landscape Edging Blocks for Flower Beds", w: 1482, h: 1500 },
    { asin: "B0FCMG1M1S", title: "Curb Trowel Edger for Concrete Landscape Edging, 4 x 6 x 4 Inch", w: 1116, h: 1070 },
  ],
  living: [
    { asin: "B07RZYB2JM", title: "Real Preserved Boxwood Evergreen Globe Topiary in Terracotta Planter", w: 377, h: 893 },
    { asin: "B0H8QNFKS9", title: "Magic Purple Creeping Thyme Seeds, 21,000+, Perennial Ground Cover", w: 1500, h: 1500 },
  ],
  mixed: [
    { asin: "B0DCLBNP6D", title: "Beuta Polyrock Stone-Look Landscape Edging for Lawns and Pathways", w: 1500, h: 1420 },
    { asin: "B0DK39V91K", title: "Land Guard Corrugated Garden Edging Border, 6 Inch x 50 ft, Heavy Duty", w: 1211, h: 1424 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "flower-bed-edging-materials-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "flower-bed-edging-materials", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Edging is the line that tells a yard where the garden ends and the lawn begins.</p>
<p>Without it, grass creeps into beds and mulch drifts onto the lawn, no matter how carefully the plants themselves are arranged.</p>
<p>The material chosen for that line changes the whole garden's character, not just its tidiness.</p>
${photo("hero.png", "Beautifully edged flower bed enhancing garden design", 1248, 832, "hero")}

<h2>What Edging Actually Does</h2>
<p>Beyond the visual line, edging physically stops grass roots and mulch from migrating between the bed and the surrounding lawn.</p>
<p>This single detail is often what separates a garden that looks genuinely designed from one that just has plants in it.</p>

<h2>Natural Stone</h2>
<p>Irregular stones laid along a bed's border bring a rugged, timeless look that works in almost any garden style.</p>
<p>This material holds up for decades with essentially no maintenance, since it doesn't rot, rust or need repainting.</p>
<p>Installation takes more physical effort than other materials on this list, given the weight involved, but the payoff is edging that never needs replacing.</p>
${photo("natural-stone.png", "Natural stone edging bringing rustic charm to a flower bed", 683, 1024, "stone")}

<h2>Metal</h2>
<p>A thin metal strip creates a clean, minimal line that disappears into the landscape rather than competing with the plants for attention.</p>
<p>This is a surprisingly easy material to install, since it's flexible enough to curve around organic bed shapes without any cutting.</p>
<p>A modern or minimalist garden benefits from this material more than a traditional cottage-style one would.</p>
${photo("metal.png", "Sleek metal edging creating a modern garden border", 683, 1024, "metal")}

<h2>Brick</h2>
<p>Brick laid flat or on edge brings a classic, cottage-garden charm that pairs naturally with an older home or a more traditional planting style.</p>
<p>This material also handles curves reasonably well when laid as individual units rather than a single rigid strip.</p>
<p>A material that only improves with a bit of age and weathering, unlike most other edging options.</p>
${photo("brick.png", "Brick edging adding classic cottage charm to a garden bed", 683, 1024, "brick")}

<h2>Wood</h2>
<p>Timber edging brings genuine warmth and a natural material story that stone and metal can't replicate.</p>
<p>This is also one of the most customizable options, since it can be cut, stained or shaped to fit almost any bed layout.</p>
<p>Untreated wood eventually breaks down, so a rot-resistant species or a sealant matters for anyone wanting this edging to last.</p>
${photo("wood.png", "Wood edging bringing natural warmth to a flower bed border", 683, 1024, "wood")}

<h2>Concrete</h2>
<p>Poured or pre-cast concrete edging creates a clean, durable line that holds its shape better than almost any other material over time.</p>
<p>This works especially well for a bed with a defined geometric shape, where a crisp, consistent edge matters more than an organic feel.</p>
<p>More stylish than its reputation suggests, especially in a smooth, pale finish against darker mulch or soil.</p>
${photo("concrete.png", "Concrete edging providing a clean, durable garden border", 683, 1024, "concrete")}

<h2>Living Edging</h2>
<p>A dense, low-growing plant &mdash; boxwood, lavender, creeping thyme &mdash; can define a bed's border without any hard material at all.</p>
<p>This option requires ongoing maintenance that a hard material doesn't, but it adds genuine texture, color and even fragrance that no hardscape material can match.</p>
<p>A good fit for a garden-forward yard where the border itself is meant to be part of the planting, not separate from it.</p>
${photo("living.png", "Living edging using low-growing plants to define a garden bed", 683, 1024, "living")}

<h2>Mixed Material</h2>
<p>Combining two edging materials &mdash; stone with a living border, or brick transitioning into metal &mdash; breaks the usual rules in a way that can look genuinely intentional when done with restraint.</p>
<p>This works best when one material clearly leads and the second plays a supporting role, rather than competing for equal attention.</p>
<p>Worth planning carefully, since an uncoordinated mix reads as accidental rather than designed.</p>
${photo("mixed-material.png", "Mixed material edging combining different textures in a garden", 683, 1024, "mixed")}

<h2>Choosing the Right One</h2>
<p>Budget, maintenance tolerance and the garden's overall style should drive the decision more than which material simply looks best in a photo.</p>
<p>A material that matches the home's existing hardscaping &mdash; a brick path, a stone patio &mdash; tends to tie the whole yard together more convincingly than one chosen in isolation.</p>
<p>Whichever material gets chosen, a clean, consistent edge does more for a garden's finished look than almost any other single landscaping detail.</p>
`;

module.exports = { body };
