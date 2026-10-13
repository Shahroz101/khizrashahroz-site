// Body content for "11 Front Yard Sitting Area Ideas for a Beautiful
// Home". Guide format, matching the source's 11 content sections plus
// intro/conclusion. New topic for the site — distinct from
// front-porch-ideas (the porch structure itself, attached to the
// house) since this covers a standalone seating spot elsewhere in the
// front yard. Source photos have no Pinterest links, so none carry
// credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0FW46PGZP", title: "Outdoor Garden Bench, 35.5 Inch, Weatherproof 2-Person Backless Wooden Bench", w: 1500, h: 1500 },
    { asin: "B01HMWRNUS", title: "Flash Furniture Lila Modern Rattan Indoor/Outdoor Stackable Dining Chairs", w: 1500, h: 1228 },
  ],
  idea1: [
    { asin: "B0DTHQJJ5Y", title: "Plastic Folding Bench, 2.75 Ft, Lightweight and Portable White Resin", w: 1146, h: 890 },
    { asin: "B06XKSGR2L", title: "FDW Metal Dining Chairs, Set of 4, Black, 330 lb Load", w: 1271, h: 1488 },
  ],
  idea2: [
    { asin: "B0DQP37YND", title: "Summsun Outdoor Bench Cushion Pad, 48 x 18 x 3 Inch, Black", w: 1500, h: 1060 },
    { asin: "B0C28WMCWX", title: "EMSCO Group Garden Bench Statue, Natural Granite Look, Lightweight Resin", w: 1110, h: 686 },
  ],
  idea3: [
    { asin: "B0BJTFRD6B", title: "VINGLI Rustic Wooden Wagon Wheel Garden Bench, Slatted Seat", w: 1311, h: 1074 },
    { asin: "B084ZQNM22", title: "Kante Large 18 Inch Round Concrete Planter, Modern Bowl Plant Pot", w: 1131, h: 1126 },
  ],
  idea4: [
    { asin: "B0DXKB152K", title: "Outsunny 11 x 12.5 Ft Outdoor Wood Pergola Grape Trellis, Brown", w: 1500, h: 1500 },
    { asin: "B0FJS4QDC5", title: "Galvanized Metal Garden Arch, Rust-Proof, Heavy Duty, for Climbing Vines and Roses", w: 872, h: 1200 },
  ],
  idea5: [
    { asin: "B0D3LS62S1", title: "Joomer Solar Fairy Lights, 2-Pack, 80 FT Total, 240 LED, Warm White", w: 1459, h: 1500 },
    { asin: "B0BTY14F3P", title: "KOOPER 4 Pack Solar Lanterns Outdoor, Flickering Flame Hanging Lights", w: 1500, h: 1428 },
  ],
  idea6: [
    { asin: "B09SKS152S", title: "Melino Wooden Folding Tamarack Chair, Acacia Wood, Low-Profile Adirondack Style", w: 1290, h: 1500 },
    { asin: "B0CZP5JLDH", title: "Devoko 3-Piece Outdoor Wicker Patio Set, Chairs and Table, Beige", w: 1500, h: 623 },
  ],
  idea7: [
    { asin: "B0GJD71NG2", title: "Kendane 32 Inch Elevated Raised Garden Bed, Outdoor", w: 1452, h: 1494 },
    { asin: "B0F37G1LHG", title: "Large Plastic Stepping Stones for Garden Walkway and Patio, 4 Pcs", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0FQRB7LGM", title: "Tall Outdoor Planter, 30 Inch, 2-Pack, Tapered Design with Drainage Holes", w: 1500, h: 1282 },
    { asin: "B0HGHFYDQ2", title: "Weeping Lovegrass Live Plant, Eragrostis curvula, 1 Gallon Container Grown", w: 832, h: 1152 },
  ],
  idea9: [
    { asin: "B0H886L86C", title: "Metal Privacy Screen Fence Outdoor, 60 x 36 Inch Decorative Privacy Panel", w: 1143, h: 1500 },
    { asin: "B0GDDTS9D3", title: "VEVOR 12-Piece Artificial Boxwood Panels, 20 x 20 Inch, Hedge Wall", w: 1500, h: 1494 },
  ],
  idea10: [
    { asin: "B0BRYJ6CBB", title: "Garden Elements Glazed Brushed Happy Plastic Planter, Large, Indoor and Outdoor", w: 1500, h: 1207 },
    { asin: "B0FNQQBSFR", title: "Solar Garden Snail Statue, Lawn Decor for Patio, Balcony and Yard", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B0G91MF8HY", title: "7-Piece Replacement Outdoor Cushions Set for 4-Seat Patio Furniture", w: 1500, h: 1224 },
    { asin: "B0BHSX8PYZ", title: "Quarut 3 Pack 10 Inch Plant Pots with Drainage Holes and Saucer", w: 1500, h: 1068 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "front-yard-sitting-area-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "front-yard-sitting-area-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>The front porch isn't the only spot in the front yard worth sitting in.</p>
<p>A separate seating area, tucked under a tree or framed by plants, adds a second destination that a porch alone can't provide.</p>
<p>These 11 ideas cover how to make that spot actually worth using, not just another patch of unused lawn furniture.</p>
${photo("hero.png", "Charming front yard sitting area with wooden bench and greenery", 1248, 832, "hero")}

<h2>Why Bother With a Front Yard Sitting Area</h2>
<p>A dedicated spot to sit in the front yard changes how a home gets used &mdash; it invites actually being outside, not just passing through on the way to the car.</p>
<p>It also adds genuine curb appeal, giving the front of the house a sense of life beyond the entrance itself.</p>

<h2>1. Think Small and Cozy</h2>
<p>A sitting area doesn't need to be large to work &mdash; a single bench or two chairs in a defined nook often feels more inviting than a sprawling setup.</p>
<p>This also makes the project far more approachable for a smaller front yard or a tighter budget.</p>
${photo("small-cozy.png", "Small, cozy front yard sitting nook with simple seating", 574, 1024, "idea1")}

<h2>2. Go Bold With a Built-In Bench</h2>
<p>A built-in bench, framed by landscaping or attached to a low wall, gives the space real permanence that freestanding furniture doesn't.</p>
<p>This is a bigger commitment than movable furniture, but it also becomes a defining architectural feature of the yard rather than just an object placed in it.</p>
${photo("built-in-bench.png", "Bold built-in bench anchoring a front yard sitting area", 574, 1024, "idea2")}

<h2>3. Lean Into Natural Elements</h2>
<p>Wood, stone and greenery all bring a relaxed, grounded feel that manufactured materials alone can't match.</p>
<p>This works especially well tucked near existing landscaping, where the sitting area feels like it grew out of the yard rather than being added on top of it.</p>
${photo("natural-elements.png", "Natural materials creating a relaxed front yard sitting vibe", 574, 1024, "idea3")}

<h2>4. Add a Pergola</h2>
<p>A pergola in the front yard brings the same shaded, defined-space benefit it would in a backyard, just facing the street instead.</p>
<p>Climbing plants trained up the structure soften it over time and tie it further into the landscaping.</p>
${photo("pergola.png", "Pergola adding shade and structure to a front yard seating spot", 574, 1024, "idea4")}

<h2>5. Light It for Evening Use</h2>
<p>String lights, a lantern, or a low path light extend the sitting area's use well past daylight hours.</p>
<p>This is one of the lower-cost additions on this list, and one that makes the biggest difference in how often the space actually gets used.</p>
${photo("lighting.png", "Warm lighting extending the use of a front yard sitting area", 574, 1024, "idea5")}

<h2>6. Go Modern With Minimalist Furniture</h2>
<p>Clean-lined furniture in a neutral palette suits a more contemporary home's front yard better than a rustic or ornate setup would.</p>
<p>Fewer, more considered pieces read as more intentional than a fully furnished seating arrangement in this context.</p>
${photo("minimalist-furniture.png", "Minimalist modern furniture styling a front yard sitting area", 574, 1024, "idea6")}

<h2>7. Get Creative With Levels and Layers</h2>
<p>A slightly raised platform, a step down, or layered planting beds around the seating add visual interest that a single flat surface doesn't.</p>
<p>This also helps define the sitting area as its own distinct space within the broader front yard.</p>
${photo("levels-layers.png", "Layered levels adding dimension to a front yard sitting area", 574, 1024, "idea7")}

<h2>8. Frame It With Plants</h2>
<p>Shrubs, tall grasses or a few well-placed planters frame the seating area the way walls would indoors, giving it a sense of enclosure.</p>
<p>This also softens the transition between the sitting area and the rest of the lawn or walkway.</p>
${photo("framed-plants.png", "Plants framing and softening a front yard sitting area", 574, 1024, "idea8")}

<h2>9. Make It Private, Not Fortress-Like</h2>
<p>A low hedge, a slatted screen, or an angled layout can create a sense of privacy from the street without fully walling the space off.</p>
<p>The goal is a spot that feels a little tucked away, not one that reads as closed off from the neighborhood entirely.</p>
${photo("privacy.png", "Front yard sitting area with gentle, welcoming privacy", 574, 1024, "idea9")}

<h2>10. Incorporate Personal Touches</h2>
<p>A favorite planter, a piece of outdoor art, or a specific color choice makes the space feel like it belongs to the people who actually use it.</p>
<p>This is what separates a generic front yard seating setup from one that reflects the home's actual character.</p>
${photo("personal-touches.png", "Personal touches adding character to a front yard sitting area", 574, 1024, "idea10")}

<h2>11. Keep It Seasonal</h2>
<p>Swapping cushions, planters and small decor with the seasons keeps the space feeling fresh and tended rather than static year-round.</p>
<p>This also signals to the whole street that the space is actively cared for, which matters more for a front-facing area than a backyard one.</p>
${photo("seasonal.png", "Seasonal styling keeping a front yard sitting area feeling fresh", 574, 1024, "idea11")}

<h2>A Little Effort, A Lot of Charm</h2>
<p>None of these 11 ideas require redoing the whole front yard.</p>
<p>Start small &mdash; a bench, some lighting, a bit of framing greenery &mdash; and build from there as the space earns more attention.</p>
<p>A front yard sitting area is one of the highest-charm, lowest-effort additions a home can make.</p>
`;

module.exports = { body };
