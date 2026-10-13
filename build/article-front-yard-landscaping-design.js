// Body content for "12 Landscaping Design Ideas for a Front Yard
// That Actually Works". Numbered idea-list format, matching the
// source's 12 ideas, reordered (structure/hardscaping first, then
// planting, then finishing details). Distinct from
// small-backyard-landscaping-ideas (backyard) and
// corner-landscaping-ideas (one specific corner) — this is whole
// front-yard design. Idea 10 (seating area) overlaps directly with
// the existing front-yard-sitting-area-ideas article, so it's
// condensed to a brief mention with a pointer rather than repeated.
// Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0FGF8H5RK", title: "TierraVerde Rubber Stepping Stones, Natural Rock Look, 18 x 22 Inch, 4 Pack", w: 1500, h: 1500 },
    { asin: "B0H7MG9D5V", title: "Solar Driveway Lights with Remote, 12 Pack, 12 Modes, 9 Colors", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0F37G1LHG", title: "Large Plastic Stepping Stones for Garden Walkway and Patio, 4 Pcs", w: 1500, h: 1500 },
    { asin: "B0BSB6MHN9", title: "Beuta Polyrock Brick-Look Landscape Edging for Flower Beds and Pathways", w: 1485, h: 1500 },
  ],
  idea2: [
    { asin: "B0HLVJVT2P", title: "Japanese Maple Live Tree, 3 to 4 ft", w: 320, h: 320 },
    { asin: "B01EKRCX5S", title: "Red Flowering Crape Myrtle Trees, Lagerstroemia, Quart Container, 6 Pack", w: 1125, h: 1500 },
  ],
  idea3: [
    { asin: "B07LBC85SQ", title: "Perennial Farm Marketplace Hosta Blue Angel, Plantain Lily, Live Perennial", w: 1000, h: 1333 },
    { asin: "B07L91M733", title: "Perennial Farm Marketplace Carex Ice Dance, Silver Variegated Sedge Grass", w: 1000, h: 1333 },
  ],
  idea4: [
    { asin: "B0H925V5Y5", title: "Texas Bluebonnet Wildflower Seeds, 1/2 Ounce, Over 500 Native Seeds", w: 1500, h: 1437 },
    { asin: "B0H928GSC1", title: "Drought Tolerant Wildflowers Mix, Extra Large Packet, 7,500+ Seeds", w: 1500, h: 1364 },
  ],
  idea5: [
    { asin: "B00FR6SMG6", title: "Alpine Corporation 27 Inch Rustic 2-Tier Barrel Pump Water Fountain", w: 904, h: 1500 },
    { asin: "B0HKM6TYR2", title: "WANGIRO Solar Powered Bird Bath Fountain, 7.8 Inch, Light Grey", w: 1391, h: 1489 },
  ],
  idea6: [
    { asin: "B0H9LSPHRZ", title: "NicBex 24 Inch Tall Square Fluted Outdoor Planters, Black, Set of 2", w: 1500, h: 1500 },
    { asin: "B08TPGXW5B", title: "Nearly Natural 36 Inch Artificial Triple Ball Boxwood Topiary Tree with Pot", w: 440, h: 1500 },
  ],
  idea7: [
    { asin: "B0GKLT78DX", title: "Gardencoin Low Voltage Landscape Lighting Kit, 12 Pack Spotlights", w: 1499, h: 1500 },
    { asin: "B0CMZ9RDSH", title: "AUDERWIN Waterproof Solar Spot Lights Outdoor, 4 Pack, Cool White", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0H4QMVD7B", title: "Universal Retaining Wall Blocks with French Drain Pipe, 2 Pack", w: 1460, h: 1500 },
    { asin: "B0BSB7RK38", title: "Beuta Polyrock Stone-Look Landscape Edging for Lawns and Pathways", w: 1486, h: 1500 },
  ],
  idea9: [
    { asin: "B003TY9LJ0", title: "Seed Needs Love in a Mist Mixed Annual Flower Seeds", w: 1198, h: 1198 },
    { asin: "B0H931YMH1", title: "Zinnia Seeds, California Giants Mix, 1 Ounce Packet, 3,000 Seeds", w: 1500, h: 1496 },
  ],
  idea10: [
    { asin: "B0FW46PGZP", title: "35.5 Inch Weatherproof 2-Person Backless Wooden Outdoor Garden Bench", w: 1500, h: 1500 },
    { asin: "B0BTJZM3MP", title: "Best Choice Products 2-Person Metal Steel Outdoor Garden Bench", w: 1500, h: 1181 },
  ],
  idea11: [
    { asin: "B0CFV3MC4V", title: "RUBFAC 7.8 ft Metal Garden Arch Trellis for Climbing Plants", w: 1069, h: 1500 },
    { asin: "B001RJDWZS", title: "The President Clematis Vine, Deep Purple, 2.5 Inch Pot", w: 800, h: 1107 },
  ],
  idea12: [
    { asin: "B0DXM6BCRY", title: "DURASACK Heavy Duty Contractor Bags, 40 Gallon, Pack of 16", w: 1500, h: 1124 },
    { asin: "B0D5QFR6LZ", title: "Peach Drift Rose and Lemon Drift Rose Bush, 1 Gallon, Live Outdoor Rose Bushes", w: 938, h: 452 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "front-yard-landscaping-design-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "front-yard-landscaping-design", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A front yard's landscaping does more for a home's first impression than almost any single interior choice.</p>
<p>These 12 ideas cover the structure, planting and finishing details that turn a plain front yard into one that actually works as a design, not just a collection of plants.</p>
${photo("hero.png", "Beautiful front yard landscaping design with a quaint entrance", 1248, 832, "hero")}

<h2>1. Create a Welcoming Pathway</h2>
<p>A defined path from the sidewalk to the front door gives the whole yard structure and guides visitors naturally toward the entrance.</p>
<p>Material choice here should echo the home's architecture &mdash; a formal brick path suits a different house than a casual stepping-stone one.</p>
${photo("pathway.png", "Welcoming pathway guiding visitors to the front entrance", 683, 1024, "idea1")}

<h2>2. Add a Focal Point With a Tree</h2>
<p>A single well-placed tree anchors the whole landscape design, giving the eye somewhere to land before taking in the smaller details.</p>
<p>Considering the tree's mature size before planting prevents a lovely sapling from becoming a problem against the house or power lines years later.</p>
${photo("tree-focal.png", "A tree serving as the landscape's natural focal point", 683, 1024, "idea2")}

<h2>3. Layer Plant Beds by Height</h2>
<p>Taller plants in back, medium plants in the middle, and low groundcover in front creates the depth that a single-height planting never achieves.</p>
<p>This layering principle does more for a professional-looking landscape than any individual plant choice.</p>
${photo("plant-beds.png", "Layered plant beds creating depth and visual interest", 683, 1024, "idea3")}

<h2>4. Embrace Native Plants</h2>
<p>Plants suited to the local climate require less water, less maintenance and generally thrive with less intervention than imported varieties.</p>
<p>This is both a practical and an increasingly popular choice, supporting local pollinators in a way non-native plantings don't.</p>
${photo("native-plants.png", "Native plants thriving with minimal maintenance required", 683, 1024, "idea4")}

<h2>5. Install a Water Feature</h2>
<p>A small fountain or simple water feature adds movement and sound that static plantings alone can't provide.</p>
<p>This works as a genuine focal point on its own, or as a smaller accent tucked into an existing planting bed.</p>
${photo("water-feature.png", "Water feature adding movement and sound to the landscape", 683, 1024, "idea5")}

<h2>6. Frame the Entrance With Containers</h2>
<p>A pair of matching planters flanking the front door is one of the simplest, most immediately impactful landscaping additions on this entire list.</p>
<p>Seasonal swaps keep this detail feeling current without touching the rest of the permanent landscaping.</p>
${photo("containers.png", "Container plants framing and welcoming guests at the entrance", 683, 1024, "idea6")}

<h2>7. Light the Landscape Properly</h2>
<p>Path lights, uplighting on a tree, or accent lighting on architectural features all extend the yard's visual appeal well past sunset.</p>
<p>This also adds genuine safety and function, not just styling, for anyone approaching the house after dark.</p>
${photo("lighting.png", "Landscape lighting extending the yard's appeal into the evening", 683, 1024, "idea7")}

<h2>8. Mix Hardscaping and Softscaping</h2>
<p>Stone, pavers or a retaining wall balanced against plantings creates a more dynamic, considered landscape than an all-plant or all-hardscape approach.</p>
<p>This mix also tends to require less ongoing maintenance than a yard relying entirely on softscaping.</p>
${photo("hardscaping.png", "Hardscaping balanced with softscaping for a dynamic landscape", 683, 1024, "idea8")}

<h2>9. Add Color With Annuals</h2>
<p>Seasonal annuals bring bursts of color that perennials alone can't maintain year-round, refreshed easily each season.</p>
<p>This is one of the lowest-commitment ways to keep the landscape feeling current without touching any permanent plantings.</p>
${photo("annuals.png", "Colorful annuals adding seasonal bursts of color", 683, 1024, "idea9")}

<h2>10. Consider a Seating Spot</h2>
<p>A small bench or seating area gives the front yard a genuine destination beyond just the path to the door &mdash; worth exploring in more depth as its own project if it appeals.</p>
${photo("seating.png", "A seating spot adding a welcoming destination to the front yard", 683, 1024, "idea10")}

<h2>11. Go Vertical With Trellises</h2>
<p>A trellis with climbing plants adds height and visual interest without requiring any additional ground space.</p>
<p>This works especially well against a bare wall or fence that would otherwise go completely unstyled.</p>
${photo("trellises.png", "Trellis with climbing plants adding vertical interest", 683, 1024, "idea11")}

<h2>12. Keep It Genuinely Low-Maintenance</h2>
<p>A landscape designed around realistic upkeep &mdash; drought-tolerant plants, mulched beds, minimal lawn &mdash; stays looking good far longer than one that depends on constant attention.</p>
<p>This is worth planning from the start, since retrofitting a high-maintenance landscape into a low-maintenance one later is a much bigger project.</p>
${photo("low-maintenance.png", "Low-maintenance landscaping staying beautiful with minimal upkeep", 683, 1024, "idea12")}

<h2>Wrapping It Up</h2>
<p>None of these 12 ideas require tackling the whole front yard in one project.</p>
<p>Start with the pathway and a focal point, since both give the yard its basic structure, then layer in planting and finishing details over time.</p>
<p>A well-designed front yard does as much for a home's presence as anything happening inside it.</p>
`;

module.exports = { body };
