// Body content for "12 Landscaping Ideas for a Small Backyard".
// Numbered idea-list format. New topic for the site, no existing
// overlap (only pool-specific backyard content exists already).
// Source photos are all AI-generated style with no Pinterest links,
// 1:1 with the 12 ideas, so none carry credit captions. Rewritten out
// of the source's casual voice into the site's calmer tone, short-line
// prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D3SGM5D1", title: "Best Choice Products 3-Piece Stackable Steel Outdoor Bistro Set", w: 1500, h: 1500 },
    { asin: "B0FWBKSQST", title: "JEAREY Stackable Patio Dining Chairs, Set of 4, Deep Gray", w: 1427, h: 1165 },
  ],
  idea1: [
    { asin: "B0CFV3FZNC", title: "RUBFAC 7.8 Ft Metal Garden Arch Trellis for Climbing Plants", w: 1500, h: 1490 },
    { asin: "B0G439WNQQ", title: "LaLaGreen Rectangular Black Carbon Steel Wall Planters, 3 Pack", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0FBMKL9XP", title: "Plastic Plant Pots with Drainage Holes and Trays, 7 Pack, 4 to 7 Inch Sizes", w: 1500, h: 1500 },
    { asin: "B0GJDS38LX", title: "Deep Dream 10 Inch Ceramic Plant Pot with Drainage Hole and Saucer", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0DVC7X65D", title: "Flamaker 80 Gallon Waterproof Storage Bench Deck Box with Seat", w: 1500, h: 973 },
    { asin: "B0D8K66FZJ", title: "6 Ft Heavy Duty Folding Table with Carry Handle and Steel Legs", w: 1500, h: 1468 },
  ],
  idea4: [
    { asin: "B0DJL3XGL6", title: "SunCatcher Two Little Birds Round Garden Mirror, Rust Resistant", w: 1254, h: 1254 },
    { asin: "B09V2X12TX", title: "Acrylic Mirror Sheet, 16 x 12 Inch, Decorative Wall Mirror", w: 970, h: 1365 },
  ],
  idea5: [
    { asin: "B0D2654T6L", title: "Svater 200 Ft Waterproof Outdoor String Lights for Patio", w: 1500, h: 1490 },
    { asin: "B0HFP175P5", title: "Swaying Solar Firefly Garden Lights, 4 Pack, Multicolor", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0FGXKCHB1", title: "Resin Stone Bowl Outdoor Water Fountain with LED Lights, 15.7 Inch", w: 1500, h: 1500 },
    { asin: "B002NTNC9M", title: "San Pablo Grey Ornate 33 Inch Large Outdoor Wall Fountain by John Timberland", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0HF86KJXT", title: "Hummingbird Garden Stepping Stone, 9 Inch", w: 1500, h: 1500 },
    { asin: "B0D1K6L274", title: "Quibbay 45 lb Natural River Rocks, Mexican Beach Pebbles", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0DTTQCMJK", title: "Yaheetech 34 Inch Wooden Raised Garden Bed with Legs", w: 1290, h: 1500 },
    { asin: "B0FT2K89VK", title: "Elevate 32 Inch Tall Raised Garden Beds with Wheels, 2 Pack", w: 1500, h: 1406 },
  ],
  idea9: [
    { asin: "B0G81RL7MM", title: "L-Shaped Galvanized Raised Garden Bed, 6.2 x 6.2 x 1.5 Ft", w: 1500, h: 1364 },
    { asin: "B0GK1GSHG8", title: "39.7 Inch Arched Back Metal Garden Bench with Butterfly Pattern", w: 1500, h: 1444 },
  ],
  idea10: [
    { asin: "B0H82K59P5", title: "72 Inch Decorative Laser-Cut Steel Metal Privacy Screen for Outdoors", w: 1024, h: 1500 },
    { asin: "B0DM18628K", title: "Artificial Ivy Privacy Fence Screen Roll, 60 x 128 Inch", w: 1500, h: 1449 },
  ],
  idea11: [
    { asin: "B0C2HL9CC3", title: "Artificial Grass Turf Mat, 3 x 10 Ft, 0.4 Inch Pile, Indoor and Outdoor", w: 1500, h: 1500 },
    { asin: "B0BZYYZXM6", title: "LOOBANI Realistic Artificial Grass with Drainage Holes, 3 x 5 Ft", w: 1300, h: 1299 },
  ],
  idea12: [
    { asin: "B0GPW6SHZR", title: "MontVoo Polypropylene Indoor Outdoor Patio Rug, 5 x 7 Ft", w: 1500, h: 1500 },
    { asin: "B0CRZ2PQ1H", title: "GENIMO Waterproof Plastic Outdoor Patio Rug, 5 x 8 Ft, Coffee Beige", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "small-backyard-landscaping-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "small-backyard-landscaping-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A small backyard doesn't need to feel small.</p>
<p>Most of the tricks that make a tiny yard feel bigger have nothing to do with square footage &mdash; they're about how the existing space gets used.</p>
<p>These 12 ideas each solve a different piece of that puzzle, from planting strategy to simple visual tricks.</p>
<p>Most work in combination, not as a single fix.</p>
${photo("hero.png", "Small backyard patio styled with colorful outdoor furniture", 736, 1024, "hero")}

<h2>1. Vertical Gardening</h2>
<p>When floor space runs out, the only direction left is up.</p>
<p>A trellis, a wall-mounted planter system, or simply training climbing plants up a fence all make use of vertical space a small yard usually wastes.</p>
<p>This also adds privacy and greenery without eating into any actual walking or seating area.</p>
<p>Often the single highest-impact change for a genuinely tight space.</p>
${photo("vertical-gardening.png", "Vertical garden maximizing growing space in a small yard", 683, 1024, "idea1")}

<h2>2. Container Gardening</h2>
<p>Pots and planters offer flexibility a permanent garden bed can't &mdash; rearrange, replace or move plants as the season or mood changes.</p>
<p>This also solves the problem of poor native soil, since each container controls its own growing conditions.</p>
<p>Grouping pots of varying heights adds visual interest the way a planted bed would, without the commitment.</p>
<p>A practical, low-risk way to experiment with a small yard's layout before committing to anything permanent.</p>
${photo("container-gardening.png", "Container garden offering flexible planting options", 683, 1024, "idea2")}

<h2>3. Multi-Functional Furniture</h2>
<p>A storage bench, a table that folds away, or seating that doubles as a planter all do more than one job in the same footprint.</p>
<p>This matters more in a small yard than almost anywhere else, where every piece of furniture competes for limited space.</p>
<p>Fewer, smarter pieces consistently work better than more single-purpose ones.</p>
<p>Worth prioritizing before buying any furniture that only does one thing.</p>
${photo("multifunctional-furniture.png", "Multi-functional outdoor furniture maximizing small space utility", 683, 1024, "idea3")}

<h2>4. Mirrors</h2>
<p>An outdoor-rated mirror reflects greenery and light, creating the illusion of a yard that extends further than it actually does.</p>
<p>Positioning it to reflect a planted area, rather than a wall or fence, maximizes the trick.</p>
<p>This works especially well on a fence or wall that would otherwise be a blank, unused surface.</p>
<p>A relatively inexpensive addition with a surprisingly large visual payoff.</p>
${photo("mirrors.png", "Outdoor mirror creating the illusion of expanded garden space", 683, 1024, "idea4")}

<h2>5. Layered Lighting</h2>
<p>String lights, lanterns and low path lighting each extend how long a small yard actually gets used into the evening.</p>
<p>Warm-toned bulbs matter here as much as anywhere indoors &mdash; they set a relaxed mood a harsh white light can't match.</p>
<p>This is one of the fastest, cheapest ways to transform how a space feels without touching the layout at all.</p>
<p>Worth adding even before any bigger landscaping changes happen.</p>
${photo("lighting.png", "Layered outdoor lighting creating ambiance in a small backyard", 683, 1024, "idea5")}

<h2>6. A Small Water Feature</h2>
<p>A compact fountain or a small recirculating water feature adds a sense of calm out of proportion to its actual size.</p>
<p>The sound alone does real work, masking street noise and adding a layer of tranquility a purely visual feature can't provide.</p>
<p>This doesn't require a full pond &mdash; a tabletop or wall-mounted version works in even the tightest yard.</p>
<p>A small investment with an outsized effect on how the space feels to sit in.</p>
${photo("water-features.png", "Compact water feature adding tranquility to a small backyard", 683, 1024, "idea6")}

<h2>7. A Defined Pathway</h2>
<p>A simple path &mdash; stepping stones, gravel, or pavers &mdash; gives a small yard a sense of intentional structure.</p>
<p>It also guides movement through the space, which makes even a tiny yard feel like it has more to explore than it actually does.</p>
<p>A curved path reads as more interesting than a straight one, even over a short distance.</p>
<p>One of the more affordable structural changes on this entire list.</p>
${photo("pathways.png", "Garden pathway adding structure and visual interest to a small yard", 683, 1024, "idea7")}

<h2>8. Raised Garden Beds</h2>
<p>A raised bed solves the poor-soil problem many small, older yards have, while also adding a clear visual structure to the space.</p>
<p>This works on a patio or hardscaped area where an in-ground bed wouldn't even be possible.</p>
<p>Varying bed heights adds the same visual interest a layered planting scheme would in a larger yard.</p>
<p>A practical choice for anyone who actually wants to grow food, not just ornamental plants.</p>
${photo("raised-beds.png", "Raised garden beds providing structured growing space", 683, 1024, "idea8")}

<h2>9. Smart Corner Landscaping</h2>
<p>Corners are consistently the most overlooked part of a small yard.</p>
<p>A dedicated planting, a small seating nook, or a vertical feature tucked into an unused corner puts dead space to work.</p>
<p>This requires looking at the yard's actual shape rather than just its total square footage.</p>
<p>Often the easiest source of "extra" usable space in a yard that otherwise feels maxed out.</p>
${photo("corner-landscaping.png", "Thoughtfully landscaped corner maximizing every inch of yard space", 683, 1024, "idea9")}

<h2>10. Privacy Screening</h2>
<p>A trellis with climbing plants, a slatted wood screen, or tall planted grasses all create a sense of enclosure without a full fence.</p>
<p>This matters more in a small yard, where close neighbors can make an already tight space feel even more exposed.</p>
<p>A well-placed screen also doubles as a backdrop, giving the eye somewhere calm to land.</p>
<p>Worth prioritizing for anyone who wants the yard to feel like a genuine retreat, not just a visible extension of the house.</p>
${photo("privacy-screens.png", "Privacy screen creating an intimate backyard retreat", 683, 1024, "idea10")}

<h2>11. Artificial Turf</h2>
<p>A small patch of real grass in a tiny yard often struggles with heavy foot traffic and limited sunlight.</p>
<p>Quality artificial turf solves both problems at once, staying green and usable year-round without maintenance.</p>
<p>This works especially well in a yard that gets used daily, where real grass would need constant repair.</p>
<p>Not the right fit for every yard, but a genuine practical solution for a demanding small space.</p>
${photo("artificial-turf.png", "Low-maintenance artificial turf keeping a small yard green year-round", 683, 1024, "idea11")}

<h2>12. Outdoor Rugs</h2>
<p>A rug on a patio or deck defines a seating area the same way it would indoors, without adding any permanent structure.</p>
<p>This is one of the cheapest, fastest ways to make a small outdoor space feel like an intentional room rather than just a slab of concrete.</p>
<p>Outdoor-rated materials matter here, since a standard indoor rug won't hold up to weather exposure.</p>
<p>A small, low-cost addition that finishes off a space more than almost anything else on this list.</p>
${photo("outdoor-rugs.png", "Outdoor rug defining a cozy seating area in a small backyard", 683, 1024, "idea12")}

<h2>Final Thoughts</h2>
<p>None of these 12 ideas require a complete backyard overhaul.</p>
<p>A few, layered together &mdash; lighting, a rug, some vertical greenery &mdash; often do more than any single big renovation would.</p>
<p>Start with whichever idea solves the most obvious problem in the yard right now, and build from there.</p>
<p>A small backyard, used well, consistently outperforms a larger one left unstyled.</p>
`;

module.exports = { body };
