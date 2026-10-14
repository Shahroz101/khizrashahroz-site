// Body content for "15 Patio Ideas That Make You Want to Live Outside".
// Photos carried over from the source article (AI-generated style, no
// Pinterest links, all uncredited to match). All 15 ideas have a photo;
// none dropped. 3 ideas (Fire Pit, Pergola, Water Feature) also appear
// in the already-published pergola-ideas article — kept per the source
// list but written as general patio accessories rather than
// pergola-specific features, to stay distinct from that article's
// pergola-centric angle.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B07412ZHMQ", title: "Homall 4 Piece Outdoor Patio Furniture Set, Rattan Chairs, Brown and Beige", w: 978, h: 450 },
    { asin: "B0H4GMZ6SX", title: "Dazzle Bright Solar String Lights, 66 Ft, Waterproof ST38 Patio Bulbs", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0H6SP9LGL", title: "JEAREY Stackable Patio Dining Chairs, Set of 4, Black", w: 1427, h: 1165 },
    { asin: "B0D7HHV53F", title: "Outdoor Wicker Patio Dining Chairs with Padded Cushions, Set of 2, Rattan", w: 1432, h: 1109 },
  ],
  idea2: [
    { asin: "B0H6PV33VW", title: "PADOOR Floral Washable Indoor Outdoor Area Rug, 8 x 10 Ft", w: 1500, h: 1500 },
    { asin: "B0BX3WQ35P", title: "SAND MINE Reversible Plastic Straw Outdoor Rug, Modern Geometric Pattern", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0D7HD976Z", title: "Flamaker 5 Piece Acacia Wood Outdoor Dining Set, Table and Chairs", w: 1500, h: 1500 },
    { asin: "B0FMRMQWJZ", title: "Wrought Iron Plant Stand, 41 Inch Tall, Heavy Duty, Indoor and Outdoor", w: 801, h: 1500 },
  ],
  idea4: [
    { asin: "B0GGQDKXSC", title: "43 Inch Rectangular Propane Fire Pit Table, 50,000 BTU", w: 1500, h: 1159 },
    { asin: "B0F8Q363R5", title: "32 Inch Square Fire Pit Table with Fire Poker and Spark Screen", w: 1500, h: 1479 },
  ],
  idea5: [
    { asin: "B087TGRT85", title: "Svater 105 Ft Commercial Grade Waterproof Outdoor String Lights", w: 1500, h: 1467 },
    { asin: "B0GGBGTSTX", title: "Amzarp 8 Pack Bright LED Solar Pathway Lights for Garden", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0G4QQLFRT", title: "Briwooody 30 Set 60 Pocket Vertical Wall Planters, Military Green", w: 1500, h: 1408 },
    { asin: "B0DS2F37C1", title: "16 Inch Wall Hanging Planters for Outdoor Plants, 3 Pack", w: 1482, h: 1500 },
  ],
  idea7: [
    { asin: "B01G2W7IT0", title: "Shade and Beyond 16 Ft Triangle Sun Shade Sail, Sand", w: 1500, h: 1500 },
    { asin: "B0G51WLRRD", title: "Mrsenloi 10 x 10 Pergola Shade Cover Replacement, Top Only, Beige", w: 1500, h: 1125 },
  ],
  idea8: [
    { asin: "B0F24FPVSN", title: "EVOLVE Porch and Floor Paint, Light Gray, 1 Gallon, Scratch-Resistant", w: 1498, h: 1500 },
    { asin: "B089YV57G9", title: "STENCILIT Scandinavian Floor Stencil for 18 x 18 Inch Tile and Concrete Patio", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B0DSPHFLD1", title: "IPYNBAP Waterproof Outdoor Bench Cushion, 48 x 18 x 3 Inch, Navy Blue", w: 1500, h: 854 },
    { asin: "B0DQNZHP72", title: "Summsun Water Resistant Outdoor Chair Cushions, Set of 4", w: 1500, h: 880 },
  ],
  idea10: [
    { asin: "B07L6PQQYP", title: "Phantoscope Waterproof Outdoor Pillow Inserts, 18 x 18 Inch, 2 Pack", w: 1500, h: 1440 },
    { asin: "B073YBNCFX", title: "DII 100% Cotton Basket Weave Throw Blanket, 50 x 60 Inch, Indoor and Outdoor", w: 1500, h: 1086 },
  ],
  idea11: [
    { asin: "B00FR6SV62", title: "Alpine Corporation WCT726 16 Inch Indoor and Outdoor Tiered Pouring Pots Waterfall Fountain", w: 799, h: 1500 },
    { asin: "B0HCGM1HRB", title: "Metal Bird Bath with Solar Fountain, 1.4 Gallon Bowl, 5-Prong Stake", w: 1199, h: 1486 },
  ],
  idea12: [
    { asin: "B0GFVLM3FF", title: "ZMTECH 4 Pack Plastic Planters, 21, 18, 12 and 10 Inch, Beige Faux Stone Finish", w: 1395, h: 1500 },
    { asin: "B0FSDPF388", title: "23.6 Inch Tall Tapered Planters, Set of 2, Modern Black Outdoor", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0DH9FSFRX", title: "Econohome Hanging Egg Chair with Stand, Indoor and Outdoor Swing Chair with Plush Cushions", w: 911, h: 1500 },
    { asin: "B08XBGL8GM", title: "VINGLI 5 Ft Wooden Porch Swing, 880 lbs Capacity, Heavy Duty, Brown", w: 1500, h: 1385 },
  ],
  idea14: [
    { asin: "B0DYJDG9K5", title: "Outsunny Outdoor Bar Cart with Storage Cabinet, Brown", w: 1500, h: 1473 },
    { asin: "B0F2Z7QKXL", title: "Clear Acrylic Pitcher with Lid, 72 oz, Unbreakable BPA-Free", w: 1483, h: 1500 },
  ],
  idea15: [
    { asin: "B0H21ZJ2BK", title: "Bouqlife 6 Pack Macrame Plant Hangers with Hooks, Handmade Cotton", w: 1491, h: 1445 },
    { asin: "B0FN41GYS8", title: "Natural Jute Boho Lanterns, Handcrafted Farmhouse Decor", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "patio-transformation-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "patio-transformation-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Mix and Match Furniture Instead of Buying a Set",
    paras: [
      "Matchy-matchy patio sets are on their way out. A space that feels curated rather than showroom-ordered comes from mixing materials and styles on purpose.",
      "A wooden table paired with black metal chairs, wicker seating with bold cushions, or concrete stools next to a boho pouf all read as considered rather than random.",
      "A mismatched look tends to feel more intentional than a matched one &mdash; like each piece has its own story instead of all arriving in the same box.",
    ],
    photo: photo("mixed-furniture.png", "Patio furniture mixing wood, metal and wicker materials for a curated look", 574, 1024, "idea1"),
  },
  {
    n: "02",
    title: "Layer in an Outdoor Rug",
    paras: [
      "An outdoor rug is one of the easiest ways to define a patio and make it feel like an actual room instead of a slab with furniture on it.",
      "It adds color and texture, softens hard flooring underfoot, and ties scattered furniture pieces together into one cohesive layout.",
      "A bold pattern does double duty here &mdash; it hides dirt and the occasional muddy paw print far better than a plain, light-colored weave ever could.",
    ],
    photo: photo("outdoor-rugs.png", "Outdoor rug with a bold pattern layered under patio furniture", 574, 1024, "idea2"),
  },
  {
    n: "03",
    title: "Zone the Space for Lounging and Dining",
    paras: [
      "A patio that feels like a random pile of furniture dumped in one corner usually just needs to be split into clear zones.",
      "An outdoor rug to define each area, a separate lounge setup and dining table, and a bar cart or plant stand marking the boundary between them all help.",
      "It gives the whole space actual purpose &mdash; nobody stands around wondering where to sit once the zones are obvious.",
    ],
    photo: photo("zoned-areas.png", "Patio divided into a lounging zone and a separate dining zone", 574, 1024, "idea3"),
  },
  {
    n: "04",
    title: "Add a Fire Feature for Evening Ambiance",
    paras: [
      "A fire pit or similar fire feature is one of the most reliable ways to extend how late a patio actually gets used.",
      "It adds literal and figurative warmth, turning a chilly evening into a reason to stay outside rather than head back in.",
      "It becomes the natural centerpiece for late-night conversation almost by default &mdash; something simple to gather around works better than something elaborate.",
    ],
    photo: photo("fire-pit.png", "Fire pit glowing on a patio in the evening as a gathering spot", 574, 1024, "idea4"),
  },
  {
    n: "05",
    title: "Install Mood Lighting Beyond the Porch Bulb",
    paras: [
      "A single bulb dangling overhead rarely does a patio any favors after dark. Real outdoor lighting changes the whole feel of the space.",
      "String lights draped overhead, lanterns with flameless candles, or solar stake lights lining a path all add warmth without any real installation effort.",
      "Overhead string lighting in particular gives a patio that soft, celebratory glow usually reserved for an outdoor event.",
    ],
    photo: photo("mood-lighting.png", "Patio strung with overhead string lights creating a warm evening glow", 574, 1024, "idea5"),
  },
  {
    n: "06",
    title: "Go Vertical With a Garden Wall",
    paras: [
      "Limited floor space doesn't rule out greenery. A vertical garden solves the problem by moving the plants onto the wall instead.",
      "Wall-mounted planters or a simple built frame filled with herbs, succulents or trailing vines turn a blank wall into a genuine feature.",
      "It adds real texture and life to the space without taking up a single inch of usable patio floor.",
    ],
    photo: photo("vertical-garden.png", "Vertical garden wall with mounted planters filled with herbs and succulents", 574, 1024, "idea6"),
  },
  {
    n: "07",
    title: "Add Overhead Shade and Structure",
    paras: [
      "A shaded structure over part of the patio does more for the space than almost any other single addition &mdash; it adds real definition and makes the space usable even in direct sun.",
      "It also gives string lights or hanging plants somewhere to attach, and creates genuine relief from a blazing afternoon.",
      "A simple fabric canopy works just as well as a full structure for anyone not ready to build something permanent.",
    ],
    photo: photo("pergola.png", "Shaded overhead structure on a patio providing relief from direct sun", 574, 1024, "idea7"),
  },
  {
    n: "08",
    title: "Paint the Patio Floor",
    paras: [
      "A tired, plain concrete slab gets a surprisingly dramatic upgrade from a coat of paint.",
      "Geometric stencils, faux tile patterns, or a solid bold color all work, depending on how much pattern the space can handle.",
      "Exterior-grade paint is non-negotiable here &mdash; anything else tends to start peeling within a week of actual foot traffic and weather.",
    ],
    photo: photo("painted-floor.png", "Patio floor painted with a geometric stencil pattern using exterior-grade paint", 574, 1024, "idea8"),
  },
  {
    n: "09",
    title: "Build in Seating Where Possible",
    paras: [
      "Built-in benches or concrete seating solve more problems than they look like they would at first glance.",
      "They read as custom and polished, they mean never running short on seating for a crowd, and a few cushions make them just as comfortable as any standalone chair.",
      "They're an especially strong fit for a smaller patio, since built-ins free up floor space that standalone furniture would otherwise eat into.",
    ],
    photo: photo("built-in-seating.png", "Built-in concrete patio seating with cushions along the edge of the space", 574, 1024, "idea9"),
  },
  {
    n: "10",
    title: "Bring Indoor Textiles Outside",
    paras: [
      "Blankets, cushions and throws do as much for a patio's comfort level as they do for a living room, just with weather-resistant fabric instead.",
      "Weather-resistant materials, cushions with removable covers for easy washing, and a few bold patterns keep the look from feeling sterile.",
      "Even a basic folding chair reads as genuinely comfortable once the right throw pillow lands on it.",
    ],
    photo: photo("cozy-textiles.png", "Patio seating layered with weather-resistant cushions and throw blankets", 574, 1024, "idea10"),
  },
  {
    n: "11",
    title: "Add a Small Water Feature",
    paras: [
      "A small fountain or bubbler turns a patio into something closer to a spa retreat than an ordinary backyard.",
      "The sound masks street noise, sets an instantly calmer tone, and tends to be the detail that actually gets a patio used for unwinding rather than just passing through.",
      "It doesn't require a major budget, either &mdash; plenty of tabletop versions plug in directly and work just as well as something built-in.",
    ],
    photo: photo("water-feature.png", "Small water feature on a patio creating a calming ambient sound", 574, 1024, "idea11"),
  },
  {
    n: "12",
    title: "Go Big With Potted Plants",
    paras: [
      "A full garden isn't required to bring real greenery into a patio. A few large, dramatic pots do most of the work on their own.",
      "Tropical palms lean vacation, lavender or rosemary add scent, and a snake plant covers anyone who tends to forget watering duty.",
      "Grouping the pots in odd numbers and varying their heights gives the whole arrangement a considered, designer-level look.",
    ],
    photo: photo("potted-plants.png", "Large potted plants grouped at varying heights on a patio", 574, 1024, "idea12"),
  },
  {
    n: "13",
    title: "Hang a Chair or Swing",
    paras: [
      "A hanging egg chair or porch swing adds a permanent staycation feeling to a patio almost on its own.",
      "It brings a little movement into an otherwise static space, and it's consistently the piece guests comment on first.",
      "Checking the weight capacity before anyone decides to treat it like a jungle gym is worth doing in advance.",
    ],
    photo: photo("hanging-chair.png", "Hanging egg chair suspended on a patio adding movement to the space", 574, 1024, "idea13"),
  },
  {
    n: "14",
    title: "Set Up a Rolling Bar Cart",
    paras: [
      "A rolling bar cart doesn't need to be fancy to set the mood &mdash; glassware, a pitcher of something cold, and a few napkins is the whole formula.",
      "It keeps drinks and supplies within reach without anyone making repeated trips back inside for a refill.",
      "Being able to wheel it wherever the gathering actually ends up happening is most of the appeal.",
    ],
    photo: photo("bar-cart.png", "Rolling outdoor bar cart stocked with glassware and a pitcher", 574, 1024, "idea14"),
  },
  {
    n: "15",
    title: "Add Personality With DIY Decor",
    paras: [
      "This is where a patio actually starts to feel like it belongs to someone specific rather than a catalog page.",
      "Boho lanterns, painted pots, macrame hangers, or a hand-made welcome sign all bring in personality for very little cost.",
      "A little handmade detail goes a long way &mdash; the goal is a patio that feels like an actual reflection of taste, not a showroom display.",
    ],
    photo: photo("diy-decor.png", "DIY decor including painted pots and macrame hangers adding personality to a patio", 574, 1024, "idea15"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || ""}`;
}

const body = `
<p>A plain concrete slab with mismatched plastic chairs doesn't have to stay that way, and getting it there doesn't require a massive budget or a full renovation crew. Whether the space in question is a tiny balcony or a sprawling backyard, a handful of the right moves genuinely transform how it feels to spend time out there.</p>
<p>None of these require starting from scratch. A single rug, a string of lights, or one well-placed plant can shift a patio from forgettable to the spot everyone wants to hang out in all summer.</p>
${photo("hero.jpg", "Well-maintained outdoor patio styled with furniture, greenery and ambient lighting", 1152, 768, "hero")}

<h2>15 Patio Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Going all out with a shaded structure and a fire feature works, but so does simply tossing down a rug and stringing up some lights &mdash; the actual goal is just making the space feel like it belongs to whoever uses it.</p>
<p>Start with whatever feels most obviously missing, then add the next thing. One idea tends to lead naturally into the next, and before long the patio turns into the spot people actually want to be.</p>
`;

module.exports = { body };
