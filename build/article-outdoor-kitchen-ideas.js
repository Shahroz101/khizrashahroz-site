// Body content for "20 Outdoor Kitchen Ideas to Transform Your
// Backyard". Source had only ONE real content image in the entire
// article (hero) — confirmed by checking every <img> tag, not just
// <figure>-wrapped ones; a genuine source-wide gap. Source also had 10
// fabricated/misattributed quotes — 3 in the intro (National
// Association of Realtors, Frank Lloyd Wright, Jamie Durie) and 7 more
// across the ideas (Francis Mallmann, Nate Berkus, Scott Cohen,
// American Society of Landscape Architects, Aaron Franklin, Thomas
// Church, Joanna Gaines, Bobby Berk) — all cut, the most in a single
// source this session. Condensed the source's 4-section intro (Why
// It's Worth It / Cost / Layouts / Planning) into 2 sections. Rewritten
// out of the source's very personal "I did X, I regretted Y" anecdotal
// voice into the site's neutral tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DR274LNX", title: "Feasto Outdoor Grill Cart with Storage Cabinet and Stainless Steel Top, Black", w: 1500, h: 1399 },
    { asin: "B0GDXLXFF2", title: "Comnova Built-In Grill Cover, 32 Inch, Heavy Duty Waterproof 600D", w: 1349, h: 1500 },
  ],
  layout: [
    { asin: "B0D24H5BQS", title: "Suncast Patio Storage and Prep Station with Decorative Wicker Pattern", w: 1107, h: 1497 },
    { asin: "B0D92SWH54", title: "Outdoor Grill Cart Table with Casters, Pizza Oven Stand, Black", w: 1428, h: 1376 },
  ],
  planning: [
    { asin: "B0DJ1BVZGX", title: "Skrizcable 25 Ft Waterproof Outdoor Extension Cord, 16/3, Black", w: 1500, h: 1269 },
    { asin: "B01M5KDC25", title: "GASPRO 12 Ft Natural Gas Hose, 3/8 Inch, Quick Connect, Low Pressure", w: 1500, h: 1325 },
  ],
  idea1: [
    { asin: "B0D3W66CXC", title: "Napoleon Built-In 700 Series 32 Inch Propane Grill with Infrared Rear Burner", w: 1500, h: 1104 },
    { asin: "B0CX3JGXF2", title: "Blaze 32 Inch Built-In Natural Gas Grill, 4 Burner", w: 1447, h: 954 },
  ],
  idea2: [
    { asin: "B0F9DWF4M7", title: "Vongrasig Outdoor Grill Cart and Patio Kitchen Island with Storage", w: 1500, h: 1243 },
    { asin: "B0GLW7FXXH", title: "Metal Bar Stools Set of 4, 24 Inch Counter Height, with Back, Black", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0BFVZCTRR", title: "Outdoor Wood-Fired Pizza Oven for Backyard and Patio", w: 1093, h: 1054 },
    { asin: "B0DPFMDLL3", title: "BIG HORN OUTDOORS 12 Inch Multi-Fuel Portable Pizza Oven", w: 1500, h: 1486 },
  ],
  idea4: [
    { asin: "B0FZ8G265Q", title: "Feelfunn 24 Inch Outdoor Beverage Refrigerator, 180 Cans", w: 1191, h: 1470 },
    { asin: "B0H8RW4RV7", title: "36 Inch Teak Floating Shelves, Set of 2", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0B96XQ796", title: "PURPLE LEAF Against-Wall Pergola, 9.5 x 13 Ft, Sliding Aluminum Canopy, Beige", w: 1500, h: 1500 },
    { asin: "B0CQR67BCR", title: "MCombo 10 x 8 Ft Manual Retractable Awning with Half-Cassette, Grey", w: 1500, h: 913 },
  ],
  idea6: [
    { asin: "B099BLD56V", title: "Tando Stacked Stone Siding Panels, Faux Stone Veneer Exterior Cladding", w: 830, h: 828 },
    { asin: "B0B4NT4J28", title: "Brightever 100 Ft Waterproof Outdoor String Lights, 52 Shatterproof Bulbs", w: 1500, h: 1480 },
  ],
  idea7: [
    { asin: "B0BYFBPPXN", title: "Outdoor Kitchen Drawer and Door Combo, Triple Drawers, Stainless Steel", w: 1411, h: 1186 },
    { asin: "B0FL6QXT3J", title: "JIE JIN Outdoor Kitchen Double Doors, 31 x 24 Inch, Stainless Steel BBQ Access Doors", w: 1410, h: 971 },
  ],
  idea8: [
    { asin: "B0CDGWJRSM", title: "Feasto 35 Inch Movable Outdoor Grill Cart with Stainless Steel Sink and Faucet", w: 1291, h: 1500 },
    { asin: "B0DYNHDNSK", title: "18 x 18 Inch Drop-In Bar Sink with Faucet, Stainless Steel", w: 1450, h: 1500 },
  ],
  idea9: [
    { asin: "B09TDMGVRW", title: "Mrosaa Waterproof Indoor and Outdoor Storage Cabinet with Shelf", w: 1427, h: 1500 },
    { asin: "B0FVRVS5NG", title: "VEVOR Outdoor Kitchen Drawers, 18.1 x 23.2 Inch, Stainless Steel", w: 1500, h: 1324 },
  ],
  idea10: [
    { asin: "B0F6C93LSW", title: "Sundale Outdoor 51 Inch Propane Fire Pit Table, 50,000 BTU Rectangle", w: 1499, h: 1500 },
    { asin: "B0D5QG87V2", title: "Ciays 19 Inch Propane Fire Pit with Grill Grate and Folding Legs", w: 1500, h: 1447 },
  ],
  idea11: [
    { asin: "B0D1K6TV7Q", title: "Feelfunn 15 Inch Outdoor Beverage Refrigerator, 126 Cans", w: 881, h: 1500 },
    { asin: "B09MY7N26P", title: "Blaze 20 Inch Outdoor Rated Compact Refrigerator, 4.4 Cu Ft, Stainless Steel", w: 801, h: 1307 },
  ],
  idea12: [
    { asin: "B0F58X9NZ7", title: "VEVOR Single Grilling Side Burner, 17,000 BTU, Liquid Propane, Outdoor Kitchen", w: 1146, h: 1346 },
    { asin: "B0FKGQ1R6V", title: "Built-In Side Burner for Outdoor Kitchen, Propane and Natural Gas, 304 Stainless Steel", w: 1269, h: 1500 },
  ],
  idea13: [
    { asin: "B09489PWR7", title: "London Sunshine 15 Inch Ceramic Kamado Charcoal Grill and Smoker, Green", w: 853, h: 1500 },
    { asin: "B0GJD7J6K3", title: "EAST OAK 30 Inch Electric Smoker with Built-In Meat Probe and Viewing Window", w: 1008, h: 1500 },
  ],
  idea14: [
    { asin: "B07P8CV2P6", title: "MYPLUS Under Cabinet LED Strip Lighting, 16.4 Ft, Dimmable, 3000K", w: 1144, h: 1160 },
    { asin: "B0F3CQJZRQ", title: "Govee Outdoor Up and Down Wall Lights, 2 Pack, 1200 Lumens, Smart RGBICWW", w: 1469, h: 1500 },
  ],
  idea15: [
    { asin: "B0FRNNWYF8", title: "VEVOR Outdoor Kitchen Drawers, 13.5 x 25.8 Inch, Stainless Steel", w: 1386, h: 1500 },
    { asin: "B0FCMPHT8H", title: "HDPE Polyethylene Plastic Sheet, White, 8 x 12 x 1/2 Inch", w: 1500, h: 1132 },
  ],
  idea16: [
    { asin: "B0DK1QQFXQ", title: "Acacia Wood Interlocking Deck Tiles for Patio and Backyard, 12 Inch, 9 Pack", w: 1476, h: 1500 },
    { asin: "B0GQVP61H5", title: "Tierra Verde Brick Rubber Paver Floor Tiles, Brown, 16 Inch, 4 Pack", w: 1500, h: 1095 },
  ],
  idea17: [
    { asin: "B0F33JMR4L", title: "Best Choice Products Outdoor Bar Stools, Set of 2, Bar Height, Swivel, Aluminum Frame", w: 1500, h: 1395 },
    { asin: "B09XTGJKVP", title: "idee-home Waterproof Outdoor Bench Cushion", w: 1500, h: 796 },
  ],
  idea18: [
    { asin: "B09SH2J93Q", title: "Outsunny 10 x 10 Ft Hardtop Gazebo with Curtains and Netting, Dark Brown", w: 1500, h: 1151 },
    { asin: "B0GSFYN28N", title: "Outsunny 10 x 10 Ft Louvered Pergola with Solar LED Lights, Natural Wood", w: 1500, h: 1500 },
  ],
  idea19: [
    { asin: "B0H5JLJV4Y", title: "HOPEPOP Wireless Bluetooth Meat Thermometer for Grill and Smoker", w: 1500, h: 1500 },
    { asin: "B0GD7FSW42", title: "TempPro TempGauge Bluetooth Grill Thermometer with LCD Display and App Alerts", w: 1500, h: 1500 },
  ],
  idea20: [
    { asin: "B0GGH5JPZ6", title: "COZEER Weatherproof Outdoor Grill Table Cart with Storage", w: 1500, h: 1500 },
    { asin: "B0C3LNWT62", title: "Royal Gourmet PC3404S Outdoor Grill Table, 3-Shelf Cart with Wheels", w: 1500, h: 1396 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "outdoor-kitchen-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "outdoor-kitchen-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Built-In Grill Station",
    paras: [
      "A built-in grill instantly elevates an outdoor kitchen setup compared to a freestanding model.",
      "It creates a permanent cooking zone, eliminates the wobble and awkward footprint of a rolling grill cart, and opens up countertop space on both sides for prep and serving.",
      "The upgrade from freestanding to built-in tends to make cooking and cleanup noticeably easier, since everything has a fixed, stable place to happen.",
    ],
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "An Outdoor Kitchen Island for Entertaining",
    paras: [
      "An island turns a simple grill area into an actual social hub rather than just a cooking station.",
      "It lets guests sit and talk while food is being prepared, which keeps conversation flowing instead of isolating whoever's cooking off to one side.",
      "People naturally gather around food, and an island designs the space to support that instead of working against it.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "A Pizza Oven",
    paras: [
      "A pizza oven adds genuine visual interest and expands what an outdoor kitchen can actually cook.",
      "Wood-fired ovens deliver a flavor that's hard to replicate any other way, though they take some practice to use well; gas models trade a bit of that flavor for convenience.",
      "Either option turns the outdoor kitchen into something guests specifically look forward to, well beyond the usual burgers and skewers.",
    ],
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "A Bar Area",
    paras: [
      "A bar area adds energy to an outdoor kitchen that a grill alone can't provide.",
      "A small beverage fridge, floating shelves for glasses, and a simple prep sink (where plumbing allows) cover the basics.",
      "Even just a compact fridge cuts down significantly on trips back inside for drinks, which keeps the whole gathering centered outdoors.",
    ],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "A Covered Setup for All-Weather Use",
    paras: [
      "An unprotected outdoor kitchen is at the mercy of the weather, which limits how often it actually gets used.",
      "A pergola or a retractable canopy extends usability well beyond the few perfect-weather days each month &mdash; cooking continues through light rain, and appliances stay protected from direct sun and moisture.",
      "Starting with a basic pergola and adding a retractable canopy later is a reasonable way to phase in full weather protection over time.",
    ],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Rustic Stone Design",
    paras: [
      "Natural stone brings a timeless quality to an outdoor kitchen that trend-driven materials rarely match.",
      "Stacked stone for the base, paired with granite or concrete countertops and warm lighting, builds a grounded, inviting look.",
      "Stone also tends to age well and hides everyday wear better than a glossier finish would, which matters for something that lives outside year-round.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Modern Minimalist Design",
    paras: [
      "For anyone who'd rather skip the rustic look, a modern minimalist outdoor kitchen leans into clean lines instead.",
      "Black stainless steel, concrete counters, and a generally sleek, uncluttered layout define the style.",
      "Simple designs like this often read as more expensive than they actually are, largely because there's less visual noise competing for attention.",
    ],
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "An Outdoor Sink",
    paras: [
      "An outdoor sink feels like an unnecessary luxury right up until there's one installed.",
      "Washing hands, rinsing produce, and cleaning utensils without a trip back inside saves real time during a cookout.",
      "It's a small addition that quietly boosts both convenience and hygiene throughout a cooking session.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Smart Storage Solutions",
    paras: [
      "Storage is one of the easiest things to underestimate when planning an outdoor kitchen, and one of the most regretted omissions afterward.",
      "Weatherproof cabinets and drawers keep tools organized and protected from moisture, instead of left scattered and exposed to rust.",
      "Skipping storage to save on a budget project tends to cost more in replaced tools and frustration than it saves upfront.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Fire Feature Integration",
    paras: [
      "A fire pit or fireplace pairs naturally with an outdoor kitchen, adding warmth well beyond the cooking itself.",
      "It extends usability into cooler evenings and builds genuine ambiance that a grill alone can't provide.",
      "Fire tends to keep people around longer &mdash; conversations deepen and evenings stretch out once there's a flame to sit near.",
    ],
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Built-In Refrigeration",
    paras: [
      "A built-in refrigerator is what makes an outdoor kitchen feel genuinely complete rather than just a grill with a counter attached.",
      "It keeps drinks and ingredients cold without constant trips inside, which matters more than it seems like it would during a long gathering.",
      "An outdoor-rated, stainless steel model is worth the extra cost over a standard indoor fridge, since regular units aren't built to handle outdoor temperature swings.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "A Side Burner",
    paras: [
      "Grilling covers a lot of ground, but it doesn't replace an actual burner for sauces, sides or anything that needs a pot rather than a grate.",
      "A side burner means not juggling indoor stovetop duty while trying to stay present at an outdoor gathering.",
      "It's a relatively small addition that tends to make an outdoor kitchen feel like a genuine cooking station rather than just a grill setup.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "A Smoker Station",
    paras: [
      "For anyone chasing deep, slow-cooked flavor, a smoker turns a backyard into a real flavor lab.",
      "It allows for genuine temperature control and experimentation with different wood chips, adding a dimension a standard grill can't replicate.",
      "A kamado-style grill is a particularly flexible option, since it handles both high-heat grilling and slow smoking in one unit.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Lighting That Actually Works",
    paras: [
      "One overhead bulb is rarely enough to light an outdoor kitchen properly for both cooking and entertaining.",
      "Breaking lighting into zones &mdash; LED strips under the counters, warm wall sconces, and string lights used carefully &mdash; covers both function and atmosphere.",
      "Overdoing string lights specifically can tip a space from romantic into looking like a festival booth, so balance matters more than quantity.",
    ],
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Weatherproof Cabinetry",
    paras: [
      "Outdoor cabinets need to survive rain, humidity and direct sun, which rules out most standard indoor materials.",
      "Stainless steel, marine-grade polymer, and treated teak all hold up well outdoors without demanding constant upkeep.",
      "Untreated wood looks beautiful initially but requires real seasonal maintenance, so it's worth deciding how much upkeep feels manageable before committing to a material.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Flooring That Lasts",
    paras: [
      "Flooring anchors the entire outdoor kitchen design, and it needs to handle both durability and safety.",
      "A slippery surface causes accidents fast, and cheap materials tend to crack under the weight of heavy appliances and regular foot traffic.",
      "Concrete pavers, natural stone, and textured tile all handle heavy use well while still looking clean and intentional.",
    ],
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Comfortable Seating",
    paras: [
      "Cooking draws people in, but comfortable seating is what actually keeps them around.",
      "Mixing seating types &mdash; a few bar stools for quick perching, a built-in bench for longer stretches &mdash; accommodates different kinds of guests at the same gathering.",
      "A built-in bench with weatherproof cushions tends to become the spot everyone naturally gravitates toward once it's there.",
    ],
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Pergolas and Shade Structures",
    paras: [
      "Shade matters more than most people initially plan for &mdash; without it, summer cooking turns into an endurance test.",
      "A pergola, climbing vines, or a retractable awning all protect both the cook and the appliances from direct peak-heat sun.",
      "Shade also simply extends how many hours a day the space stays usable, which makes it one of the higher-impact additions available.",
    ],
  },
  {
    n: "19",
    productsKey: "idea19",
    title: "Smart Technology",
    paras: [
      "A few smart additions can genuinely simplify outdoor cooking without taking over the space.",
      "A wireless meat thermometer connected to a phone removes the guesswork around doneness, letting the cook actually stay present at the gathering instead of hovering over the grill.",
      "Smart upgrades work best when they quietly support the cooking experience rather than becoming the main event themselves.",
    ],
  },
  {
    n: "20",
    productsKey: "idea20",
    title: "Budget-Friendly Options That Still Impress",
    paras: [
      "A full outdoor kitchen build doesn't have to mean a five-figure budget to feel complete.",
      "Starting with a grill and basic counter space, then adding a sink, lighting and storage over time, spreads the cost out while still building toward a genuinely functional setup.",
      "Intention matters more than a big first investment &mdash; a space built up in phases, with each addition chosen deliberately, tends to feel just as considered as one built all at once.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || (idea.productsKey ? productGrid(idea.productsKey) : "")}`;
}

const body = `
<p>An outdoor kitchen extends a home's living space more than almost any other backyard upgrade. It creates a natural gathering spot, keeps the heat of cooking outside during summer, and turns a plain patio into somewhere people actually want to spend an evening.</p>
<p>Costs vary widely depending on scope &mdash; a simple setup can run a few thousand dollars, while a fully built-out kitchen with a pizza oven, stone counters and built-in refrigeration can climb close to the price of a car. Starting small and adding features over time is a reasonable way to build toward a full setup without overcommitting on day one.</p>
${photo("hero.jpg", "Built-in outdoor kitchen with a pergola, grill and stone countertop in a desert backyard", 1400, 935, "hero")}

<h2>Choosing a Layout</h2>
<p>Layout shapes how usable an outdoor kitchen actually feels day to day. An L-shaped layout works well on a medium to large patio, separating the grilling zone from prep and serving space. A straight-line layout suits a smaller backyard, keeping everything in one efficient row while using fewer materials. A U-shaped layout surrounds the cook with counter space and gives guests room to sit at the outer edge, which suits anyone who entertains often.</p>
${productGrid("layout")}

<h2>Planning Before Building</h2>
<p>Before getting into the design details, it's worth handling the less exciting groundwork first &mdash; checking local codes, utility access, and plumbing requirements early avoids expensive surprises later. Positioning matters too: placing the grill where smoke won't blow into the seating area, and counters where harsh afternoon sun won't make prep work miserable, makes the space considerably more comfortable to actually use.</p>
${productGrid("planning")}

<h2>20 Outdoor Kitchen Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>An outdoor kitchen does more than add resale value &mdash; it changes how a home actually gets used, pulling gatherings, meals and quiet evenings outside rather than keeping everyone indoors.</p>
<p>None of these twenty ideas require building everything at once. Starting with the basics and adding features with intention, rather than chasing every trend at once, builds a space that actually fits how it'll be used.</p>
`;

module.exports = { body };
