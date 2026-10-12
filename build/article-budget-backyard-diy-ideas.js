// Body content for "15 Budget Backyard Ideas That Actually Look
// Finished". Numbered idea-list format, matching the source's 15
// ideas but reordered (grouped into seating/ambiance, planting, and
// structure/surface categories instead of the source's original
// sequence). New topic for the site — distinct from
// small-backyard-landscaping-ideas (planting/layout focus) and
// patio-transformation-ideas (broader makeover, not DIY/budget
// specific). Ideas 3 (upcycled furniture) and 13 (solar fountain) had
// no source photo, kept text-only. Source photos have no Pinterest
// links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B07R5JH5L1", title: "Homall 4-Piece Wicker Patio Conversation Set", w: 1500, h: 1500 },
    { asin: "B0GGNS411Z", title: "200 ft Outdoor String Lights with Remote, Waterproof, Shatterproof Bulbs", w: 1500, h: 1500 },
  ],
  whySmall: [
    { asin: "B0787D8PYT", title: "Rust-Oleum Painter's Touch 2X Ultra Cover Spray Paint, Ultra Matte White", w: 491, h: 1500 },
    { asin: "B0D3LS62S1", title: "Joomer Solar Fairy Lights, 2 Pack, 80 ft, Warm White", w: 1459, h: 1500 },
  ],
  firePit: [
    { asin: "B0FLXYTG4B", title: "KOL 27.5 Inch Wood-Burning Round Fire Pit Bowl", w: 1500, h: 1412 },
    { asin: "B0H44FC4P9", title: "23.6 Inch Round Wood-Burning Steel Fire Bowl", w: 1500, h: 1229 },
  ],
  stringLights: [
    { asin: "B0GGH3WYDN", title: "btfarm Solar Crystal Globe String Lights, 2 Pack, 98 ft", w: 1500, h: 1500 },
    { asin: "B0CSP38ZKJ", title: "SyouHome Solar String Lights, 6 Pack, 600 LED", w: 1500, h: 1486 },
  ],
  outdoorRug: [
    { asin: "B091YMYV7Q", title: "SAND MINE Waterproof Reversible Outdoor Rug, 5x8 ft", w: 1500, h: 1500 },
    { asin: "B0CPLVVC17", title: "Pauwer Waterproof Straw Outdoor Rug, 5x8, Leaf Brown", w: 1500, h: 1500 },
  ],
  hammock: [
    { asin: "B07CYNQXYB", title: "Lazy Daze Portable Hammock with Stand", w: 1500, h: 983 },
    { asin: "B076PV7L3D", title: "Vivere Double Cotton Hammock with Space Saving Steel Stand", w: 1500, h: 944 },
  ],
  upcycled: [
    { asin: "B0CDP42MGH", title: "Rust-Oleum Stops Rust Multi-Color Textured Spray Paint, 12 oz, 2 Pack", w: 673, h: 987 },
    { asin: "B0CGLXVBQ1", title: "Krylon COLORmaxx Spray Paint and Primer, Indoor/Outdoor", w: 686, h: 1500 },
  ],
  mulch: [
    { asin: "B0BSG3LTZS", title: "Oldcastle Cedar Mulch, 2 cu ft", w: 734, h: 1000 },
    { asin: "B0F6DC8SBN", title: "Gardenwise Premium Red Wood Mulch", w: 1335, h: 1335 },
  ],
  fence: [
    { asin: "B09YTJ4JJB", title: "DEFY Solid Color Wood Stain for Decks and Fences, Barn Red, 1 Gallon", w: 1003, h: 1500 },
    { asin: "B076BX1N2X", title: "Montage Signature Interior/Exterior Paint, Terracotta, 1 Gallon", w: 1500, h: 1206 },
  ],
  gravelPath: [
    { asin: "B0G39W4GWL", title: "No Dig Landscape Edging Border Kit, 3\" x 100 ft", w: 1500, h: 1424 },
    { asin: "B0FD6L6C92", title: "50 ft Black Corrugated Metal Landscape Edging", w: 1500, h: 1464 },
  ],
  palletDeck: [
    { asin: "B09F8HT75Q", title: "Thompson's WaterSeal Clear Wood Sealer, 1 Gallon", w: 959, h: 1500 },
    { asin: "B0FRGCB99Y", title: "All-in-One Wood Stain, Sealer and Preservative for Decks and Fences, 1 Gallon", w: 1500, h: 1500 },
  ],
  verticalGarden: [
    { asin: "B08BCNF7R7", title: "ZOENHOU Vertical Garden Planter, 2 Pack, 36 Pockets", w: 1438, h: 1370 },
    { asin: "B0BHR29S94", title: "SOUJAP Vertical Wall Garden Planter Grow Bags, 2 Pack, 18 Pockets", w: 1354, h: 1500 },
  ],
  diyPlanters: [
    { asin: "B0B5XSBRQD", title: "Hosley Galvanized Metal Bucket with Wooden Handle, 7 Inch", w: 1500, h: 1359 },
    { asin: "B0BMX3W84W", title: "9 Inch Galvanized Planters, 4 Pack Metal Plant Pots with Drainage Hole", w: 1161, h: 1033 },
  ],
  trellis: [
    { asin: "B08QHGTVKZ", title: "Heavy Duty Metal Garden Obelisk Trellis, 6.3 ft", w: 267, h: 1000 },
    { asin: "B0BBRDY27W", title: "2 Pack 70.8\" H x 19.7\" W Metal Garden Trellis with Black Coating", w: 1303, h: 1500 },
  ],
  fountain: [
    { asin: "B09PZWWRHJ", title: "AISITIN 3.5W Solar Fountain Pump for Bird Bath, 8 Nozzles", w: 1500, h: 1494 },
    { asin: "B0GL8BCFPP", title: "Solar Fountain, Floating Solar Water Pump for Bird Bath", w: 1500, h: 1465 },
  ],
  kidsCorner: [
    { asin: "B0DGZLZHFS", title: "Best Choice Products Wooden Octagon Sandbox with Lid", w: 1500, h: 1500 },
    { asin: "B0CCRJY4S9", title: "Little Tikes Turtle Sandbox", w: 1500, h: 760 },
  ],
  herbGarden: [
    { asin: "B0GVZ9BZHK", title: "Best Choice Products Raised Herb Garden Bed Planter Box", w: 1500, h: 1171 },
    { asin: "B0DDX8HGF8", title: "Small HDPE Raised Garden Bed, Elevated Planter Box with Legs", w: 1493, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "budget-backyard-diy-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "budget-backyard-diy-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A backyard makeover doesn't need a contractor or a big budget to actually look finished.</p>
<p>Most of what makes a backyard feel styled comes down to a handful of small, mostly DIY projects — not one expensive renovation.</p>
<p>These 15 ideas are grouped by what they actually do for the space: set the mood, add greenery, or fix up the surfaces underfoot.</p>
${photo("hero.png", "Stylish budget backyard makeover with cozy seating and ambiance", 1248, 832, "hero")}

<h2>Why Small Projects Beat One Big Renovation</h2>
<p>A full backyard renovation is expensive and takes real time to plan and execute.</p>
<p>A handful of smaller projects, tackled one weekend at a time, add up to most of the same visual transformation for a fraction of the cost.</p>
<p>This list is organized so each idea can be done on its own, in any order, without needing the others finished first.</p>
${productGrid("whySmall")}

<h2>1. A DIY Fire Pit for Evening Ambiance</h2>
<p>A simple ring of pavers or a metal fire bowl turns a backyard into a genuine evening hangout spot, not just a daytime space.</p>
<p>This is one of the highest-impact projects on the whole list relative to its cost.</p>
<p>Keeping it a safe distance from fences, trees and furniture matters more than the exact style chosen.</p>
${photo("fire-pit.png", "DIY fire pit creating a cozy backyard gathering spot", 683, 1024, "firePit")}

<h2>2. String Lights for Instant Mood</h2>
<p>A strand of warm-toned string lights across a patio or between two trees does more for a backyard's evening feel than almost any other single change.</p>
<p>This is genuinely one of the cheapest items on this entire list, and one of the fastest to put up.</p>
<p>Solar-powered strands skip the need for an outdoor outlet entirely.</p>
${photo("string-lights.png", "String lights adding instant ambiance to a backyard space", 683, 1024, "stringLights")}

<h2>3. An Outdoor Rug for a Finished Patio</h2>
<p>A weather-resistant outdoor rug instantly makes a bare concrete patio feel like an actual furnished room.</p>
<p>This is one of the simplest ways to add color and texture without touching a single plant or structure.</p>
<p>Choosing a rug rated for outdoor use matters more than the pattern, since sun and moisture will test it quickly.</p>
${photo("outdoor-rug.png", "Outdoor rug transforming a patio into a cozy finished space", 683, 1024, "outdoorRug")}

<h2>4. A Hammock for a Dedicated Relaxing Spot</h2>
<p>A hammock strung between two sturdy points carves out a clear relaxing spot in a backyard that might otherwise feel purely functional.</p>
<p>This works in a surprisingly small space, as long as there are two solid anchor points to work with.</p>
<p>One of the lowest-effort additions on this list, and one of the most used once it's up.</p>
${photo("hammock.png", "Hammock creating a relaxing retreat in a budget-friendly backyard", 683, 1024, "hammock")}

<h2>5. Upcycled Furniture for Character</h2>
<p>An old dresser, a stack of crates, or a thrifted chair, repainted or reupholstered, brings real character that new furniture often lacks.</p>
<p>This is one of the cheapest ways to add seating, since the materials are usually already on hand or found secondhand.</p>
<p>A quick coat of outdoor-rated paint or sealant extends the life of almost anything repurposed this way.</p>
${productGrid("upcycled")}

<h2>6. Mulch for Instantly Tidier Garden Beds</h2>
<p>A fresh layer of mulch across garden beds makes the whole yard look more maintained in an afternoon, with almost no skill required.</p>
<p>This also genuinely helps the plants underneath by retaining moisture and suppressing weeds.</p>
<p>One of the best returns on effort of any project on this entire list.</p>
${photo("mulch-beds.png", "Fresh mulch creating polished, tidy garden beds", 683, 1024, "mulch")}

<h2>7. A Painted Fence for a Color Reset</h2>
<p>A fresh coat of paint on an old fence changes the backyard's entire color story for the cost of a few cans of paint.</p>
<p>A bold color makes a bigger statement; a simple whitewash or neutral tone feels more timeless.</p>
<p>This is one of the more physically demanding projects on this list, but also one of the longest-lasting.</p>
${photo("painted-fence.png", "Freshly painted fence adding a pop of color to the backyard", 683, 1024, "fence")}

<h2>8. A Gravel Path for Instant Structure</h2>
<p>A simple gravel path connecting two points in the yard adds structure and a sense of intention to the space.</p>
<p>This is a genuinely doable weekend project, requiring edging material and gravel rather than any real construction skill.</p>
<p>It also solves a practical problem — a defined walkway instead of a worn dirt track across the lawn.</p>
${photo("gravel-path.png", "Gravel path adding charming structure to a backyard layout", 683, 1024, "gravelPath")}

<h2>9. A Repurposed Pallet Deck</h2>
<p>Wooden pallets, sanded and sealed, can be arranged into a simple raised deck surface for a fraction of the cost of composite decking.</p>
<p>This suits a smaller seating area rather than a full-sized deck, given the size constraints of standard pallets.</p>
<p>A rustic look that pairs naturally with the fire pit and hammock ideas above.</p>
${photo("pallet-deck.png", "Repurposed pallet deck adding a rustic touch to the backyard", 683, 1024, "palletDeck")}

<h2>10. A Vertical Garden for Small Spaces</h2>
<p>A wall-mounted or stacked planter system adds real greenery without taking up any ground space at all.</p>
<p>This works especially well on a narrow fence line or a small patio where a traditional garden bed isn't practical.</p>
<p>A genuinely practical solution for anyone working with a small backyard rather than a limitation to work around.</p>
${photo("vertical-garden.png", "Vertical garden maximizing greenery in a small backyard space", 683, 1024, "verticalGarden")}

<h2>11. DIY Planters From Everyday Items</h2>
<p>An old crate, a bucket, or a repurposed container all work as planters with just a few drainage holes drilled in.</p>
<p>This is one of the cheapest ways to add plants to a backyard, since it skips buying dedicated planters entirely.</p>
<p>Grouping a few mismatched planters together often reads as more intentional than it sounds.</p>
${photo("diy-planters.png", "DIY planters made from everyday household items", 683, 1024, "diyPlanters")}

<h2>12. A DIY Trellis for Climbing Plants</h2>
<p>A simple wood or wire trellis gives climbing plants — vines, beans, flowering plants — somewhere to grow up instead of out.</p>
<p>This adds vertical greenery and visual height to a yard that might otherwise feel flat.</p>
<p>A basic version takes just a few pieces of wood or wire and an afternoon to build.</p>
${photo("diy-trellis.png", "DIY trellis supporting climbing plants in the backyard", 683, 1024, "trellis")}

<h2>13. A Solar-Powered Fountain for Ambient Sound</h2>
<p>A small solar-powered fountain adds the sound of moving water without any wiring or ongoing electricity cost.</p>
<p>This is a genuinely calming addition to a backyard seating area, more than most visual-only decor can provide.</p>
<p>Placement in a sunny spot matters more here than almost anything else, since the solar panel needs real light to run the pump.</p>
${productGrid("fountain")}

<h2>14. A Kids' Corner With DIY Toys</h2>
<p>A small dedicated play area — a sandbox, a simple DIY obstacle course, a chalkboard fence panel — keeps kids' outdoor items contained to one spot.</p>
<p>This also keeps the rest of the yard feeling styled rather than cluttered with toys.</p>
<p>Many of the elements here can be built from the same reclaimed materials as the other projects on this list.</p>
${photo("kids-corner.png", "DIY kids corner with fun, budget-friendly outdoor toys", 683, 1024, "kidsCorner")}

<h2>15. A Small Herb Garden for Function and Scent</h2>
<p>A few pots or a small raised bed of herbs adds genuine daily usefulness that purely decorative plants don't.</p>
<p>This also adds a pleasant scent to the backyard that's easy to overlook when planning for looks alone.</p>
<p>One of the most functional additions on this entire list, alongside being one of the easiest to start small and expand later.</p>
${photo("herb-garden.png", "Herb garden adding fresh flavors and scent to the backyard", 683, 1024, "herbGarden")}

<h2>Wrapping It Up</h2>
<p>None of these 15 ideas require touching all of them at once.</p>
<p>Pick two or three that solve the most obvious gap in the current yard — lighting, seating, or greenery — and build from there.</p>
<p>A styled backyard comes down to a handful of small, deliberate projects, not one expensive overhaul.</p>
`;

module.exports = { body };
