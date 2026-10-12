// Body content for "19 Coffee Bar Decor Ideas That Make Your Coffee Corner
// Feel Like a Café". Images are the Pinterest pins the user supplied (28
// links, two of which resolve to the same pin, so 27 unique photos); every
// photo is credited back to its pin. Idea text was adjusted from the
// original draft so each paragraph matches what its photo actually shows
// (e.g. a tiered stand and chalkboard for the tray idea, a hutch for the
// vintage-furniture idea, brass sconces and a patterned tile for the modern
// and backsplash ideas) while keeping the original tone. Ideas 7 and 19
// carry two photos each so every supplied pin is used.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DJSL5GPT", title: "Sage Green Botanical Peel and Stick Wallpaper", w: 1500, h: 1498 },
    { asin: "B0DQWC47JN", title: "De'Longhi Classic Signature Espresso Machine with Milk Frother", w: 1500, h: 1373 },
  ],
  goodBar: [
    { asin: "B08L4TBSST", title: "36-Capacity Coffee Pod Carousel Holder for K-Cup Pods", w: 781, h: 1447 },
    { asin: "B0916RQVTX", title: "KIMIUP Coffee Pod Holder for K-Cups, 36 Pods", w: 780, h: 1447 },
  ],
  decorate: [
    { asin: "B0B23WC3LB", title: "Manspdier 3-Tier Wood Serving Tray and Cupcake Stand", w: 1174, h: 994 },
    { asin: "B0G2W5ZNFQ", title: "Manspdier Extra Large Wood 3-Tier Serving Tray", w: 1171, h: 1369 },
  ],
  idea1: [
    { asin: "B0GXSNC9LR", title: "White Porcelain Coffee Mugs, Set of 6, 13 oz", w: 1500, h: 1125 },
    { asin: "B0F8MPHXPX", title: "vancasso Porcelain Coffee Mugs Set, 16 oz", w: 1500, h: 1402 },
  ],
  idea2: [
    { asin: "B0FMRXNMNS", title: "HLXRAE Sage Green Botanical Wall Art, Wood Framed, 12 x 16", w: 1482, h: 954 },
    { asin: "B0FH29G793", title: "LLEEMPI Sage Green Botanical Wall Art, Set of 3, Wood Framed, 12 x 16", w: 1482, h: 953 },
  ],
  idea3: [
    { asin: "B0DQKDJVBK", title: "Smuxee Walnut Sideboard Cabinet with Line Groove Design", w: 1500, h: 1500 },
    { asin: "B07T1CH2HH", title: "Cosori Gooseneck Electric Kettle with Temperature Control, 0.8L, Black", w: 1327, h: 1222 },
  ],
  idea4: [
    { asin: "B0DYRZXWHR", title: "Amazon Basics Acacia Wood Serving Tray, 17 x 12 Inch", w: 1500, h: 554 },
    { asin: "B0H4G4N3LV", title: "Solidith Acacia Wooden Serving Tray with Handles", w: 1332, h: 1331 },
  ],
  idea5: [
    { asin: "B0GJ4DP4R6", title: "Bamboo Mug Holder Tree with 8 Hooks", w: 1224, h: 1422 },
    { asin: "B0F4R6LRFK", title: "MyLifeUNIT Mug Holder Tree with 6 Hooks, Reddish Brown", w: 752, h: 1500 },
  ],
  idea6: [
    { asin: "B01MRN3VLG", title: "DOKOT Seagrass Basket with Handles, Woven Storage Basket", w: 1162, h: 1397 },
    { asin: "B0FX1WZ83N", title: "Small Seagrass Storage Baskets, Natural Woven, Set of 3", w: 1500, h: 1437 },
  ],
  idea7: [
    { asin: "B0B1J1GN7Q", title: "NIKKY HOME Farmhouse Coffee Bar Sign", w: 1411, h: 716 },
    { asin: "B09V4R3XHJ", title: "Rustic Wood Grain Coffee Bar Sign, 6 x 17", w: 1071, h: 502 },
  ],
  idea8: [
    { asin: "B09NVN4R6F", title: "Dimmable Plug-in Wall Sconces, Set of Two, White Fabric Shade", w: 1405, h: 1500 },
    { asin: "B0B214J361", title: "LASENCHOO Plug-in Gold Wall Sconces, Set of Two", w: 1229, h: 1500 },
  ],
  idea9: [
    { asin: "B0FWBMDDWD", title: "Peel and Stick Subway Tile Backsplash, 10 Sheets", w: 1500, h: 1500 },
    { asin: "B0DPKPSWNQ", title: "STICKGOO Peel and Stick Subway Tile Backsplash, 12 x 12", w: 1500, h: 1497 },
  ],
  idea10: [
    { asin: "B09WCTL9WN", title: "Goo-Ki 5 Inch Antique Brass Cabinet Pulls", w: 1500, h: 1375 },
    { asin: "B0BWN6VGY9", title: "Plustool Brushed Brass Gold Cabinet Pulls, 3 Inch Hole Centers, 30 Pack", w: 1500, h: 1482 },
  ],
  idea11: [
    { asin: "B0G395TVML", title: "Joaxswe 2-Tier Gold Bar Cart with Lockable Wheels", w: 1500, h: 1500 },
    { asin: "B0D6G55VCK", title: "Joaxswe Gold Bar Cart with Wheels and Storage Shelves", w: 1303, h: 1447 },
  ],
  idea12: [
    { asin: "B087BTG177", title: "HOMCOM 72 Inch Kitchen Pantry Cabinet with Hutch, Off White", w: 700, h: 1500 },
    { asin: "B087BTHTJ3", title: "HOMCOM 72 Inch Kitchen Pantry Cabinet with Hutch, Black", w: 700, h: 1500 },
  ],
  idea13: [
    { asin: "B0D17DLRBD", title: "Glass Canisters with Airtight Bamboo Lids and Pantry Labels, 3 Pack", w: 1194, h: 1101 },
    { asin: "B08YQYX6HB", title: "Aoeoe Glass Storage Jars with Airtight Bamboo Lids, 27 oz, 4 Pack", w: 1500, h: 1463 },
  ],
  idea14: [
    { asin: "B0CZKQQLBD", title: "Live Pothos Plants, 4 Pack", w: 998, h: 902 },
    { asin: "B0GGYYTNBP", title: "Artificial Pothos Plant with Pulp Pot", w: 1434, h: 1067 },
  ],
  idea15: [
    { asin: "B09WVCVXX6", title: "JUMMICO 3-Piece Wooden Round Bistro Table and Chair Set, Walnut/Black", w: 1500, h: 1194 },
    { asin: "B0C76CF42W", title: "Best Choice Products 3-Piece Modern Dining Set, Space Saving Dinette", w: 1500, h: 1500 },
  ],
  idea16: [
    { asin: "B0H8SF1ZBN", title: "Livelynine Vintage Floral Peel and Stick Wallpaper, Sage Green", w: 1500, h: 1500 },
    { asin: "B0DXDX3F7P", title: "Livelynine Sage Green and Gold Botanical Peel and Stick Wallpaper", w: 1500, h: 1500 },
  ],
  idea17: [
    { asin: "B0CCXSX412", title: "Vervida Black Rustic Floating Wall Shelves, 15 Inch, Set of 3", w: 1125, h: 1500 },
    { asin: "B0DRVYTF55", title: "Homeforia 12 Inch Solid Pine Floating Shelves, Set of 2", w: 1500, h: 1500 },
  ],
  idea18: [
    { asin: "B08R66Z71S", title: "ASOKO Dimmable LED Under Cabinet Lights, 2700K, 3 Piece", w: 1154, h: 1500 },
    { asin: "B0CSJQMVYZ", title: "MCGOR Rechargeable Motion Sensor Under Cabinet Lights, 14.7 Inch, 2 Pack", w: 1134, h: 1500 },
  ],
  idea19: [
    { asin: "B0B5X1JTJP", title: "DOWAN Boho Mosaic Coffee Mugs, 16 oz, Set of 6", w: 1500, h: 1080 },
    { asin: "B0F7X26WFF", title: "vancasso SIMI Large Coffee Mugs, 16 oz, Set of 6", w: 1500, h: 1394 },
  ],
  clutter: [
    { asin: "B0CFLP9T77", title: "Cordless Touch Table Lamp, Rechargeable, Classic Edition", w: 1500, h: 1500 },
    { asin: "B07TBBWNPN", title: "10 Strawberry Street Embossed Ceramic Canister Set of 3, Hampton White", w: 1500, h: 1074 },
  ],
  whatToPut: [
    { asin: "B0CKQNP26P", title: "LE TAUCI Ceramic Kitchen Utensil Holder for Counter, White", w: 1281, h: 1500 },
    { asin: "B0BW5NJYBS", title: "Large Ceramic Spoon Rest for Stove Top", w: 1500, h: 1342 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "coffee-bar-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

const PIN = {
  hero: { src: "hero", w: 1080, h: 1350, alt: "Arched alcove coffee bar with floral wallpaper, sage green cabinets, an espresso machine and light wood shelving", id: "657877458109314712", label: "Arched Coffee Bar Alcove" },
  goodBar: { src: "pod-station-subway-tile", w: 1200, h: 1799, alt: "Countertop coffee station with a pod carousel, pod drawer, black coffee machine and a coffee station sign in front of white subway tile", id: "245727723416367698", label: "Organized Coffee Pod Station" },
  decorate: { src: "tiered-wood-tray-corner", w: 1000, h: 1504, alt: "Three-tier wooden tray in a counter corner holding mugs, plates and syrup bottles beside a coffee maker and a vase of sunflowers", id: "60376451250159421", label: "Tiered Wood Tray Coffee Corner" },
  idea1: { src: "white-cabinets-wood-shelves", w: 718, h: 932, alt: "White kitchen cabinets with a wood countertop and two wood floating shelves holding white mugs, jars and small plants", id: "367465650873865330", label: "White and Wood Coffee Station" },
  idea2: { src: "open-shelves-stone-backsplash", w: 736, h: 1288, alt: "Coffee bar with two oak shelves against a gray stone backsplash, mugs on the lower shelf and a framed leaf print above", id: "263531015693929382", label: "Open Shelf Coffee Bar" },
  idea3: { src: "corner-cane-cabinet", w: 1000, h: 1500, alt: "Small cane-front cabinet in a kitchen corner topped with coffee makers and a kettle, with two floating shelves above", id: "1116470563912894873", label: "Small Space Coffee Bar Setup" },
  idea4: { src: "tray-chalkboard-coffee-bar", w: 675, h: 1200, alt: "Coffee maker and mugs on wooden trays on a white counter with a tiered mug stand and a small chalkboard sign", id: "1103593083701172889", label: "Chic Coffee Bar Ideas for Your Countertop" },
  idea5: { src: "white-shelves-hanging-mugs", w: 736, h: 1308, alt: "White shelves with white mugs hanging from hooks underneath and a wooden mug tree beside an espresso machine", id: "4011087181517454", label: "White Coffee Bar With Hanging Mugs" },
  idea6: { src: "rustic-wood-cabinet-basket", w: 800, h: 1200, alt: "Espresso machine on a light wood cabinet beside a woven basket of coffee beans and dried flowers, with cream mugs on a shelf above", id: "281543724468069", label: "Neutral Coffee Bar With Woven Basket" },
  idea7a: { src: "white-cabinets-black-hardware", w: 1179, h: 1739, alt: "White cabinets with black hardware, a black metal wine glass rack and a coffee maker on a dark counter, with a monogram letter above", id: "1093530353311905625", label: "Coffee and Wine Bar Ideas" },
  idea7b: { src: "farmhouse-coffee-bar-sign", w: 1000, h: 1500, alt: "White shelves on wood brackets with a coffee bar sign, woven baskets and canisters above a white coffee machine", id: "84301824269540367", label: "Trendy Countertop Coffee Station" },
  idea8: { src: "patterned-tile-brass-sconces", w: 1200, h: 1600, alt: "Coffee bar with dark cabinets, a white counter, patterned tile, brass sconces and two wood shelves above a single espresso machine", id: "178244097748754440", label: "Coffee Bar Tile Idea" },
  idea9: { src: "beige-tile-backsplash-brass-shelves", w: 1000, h: 1500, alt: "Beige tile backsplash behind brass-railed shelves, a picture light and coffee machines above a wine fridge and cream cabinet", id: "528610075035201378", label: "Countertop Coffee Station Ideas" },
  idea10: { src: "built-in-cabinet-nook", w: 1067, h: 1600, alt: "Built-in cabinet nook with an espresso machine, small sink, black counter, brass pulls and a brass picture light", id: "19281104648184710", label: "Cozy Country Cottage Kitchen" },
  idea11: { src: "pink-espresso-rolling-cart", w: 1200, h: 1790, alt: "Two-tier wood and brass rolling cart with a pink coffee machine and glass jars on top and pink glasses and bottles on the lower shelf", id: "5629568280540861", label: "Coffee Bar Cart" },
  idea12: { src: "gray-hutch-coffee-bar", w: 1000, h: 1500, alt: "Gray kitchen hutch with glass-front cabinets, a wood top, a kettle, espresso machine and dried flowers, beside a fiddle-leaf fig", id: "1112811389209808955", label: "Kitchen Hutch Coffee Bar" },
  idea13: { src: "glass-canisters-bamboo-lids", w: 1200, h: 1200, alt: "Square glass jars with bamboo lids filled with coffee, snacks and grains on wood shelves above an espresso machine, with ferns on top", id: "4600145669802523520", label: "Glass Storage Jars With Bamboo Lids" },
  idea14: { src: "pothos-floating-shelves", w: 768, h: 1376, alt: "Trailing pothos plant draping down floating wood shelves beside a window, with a coffee maker and mugs on the counter below", id: "4608449190528003136", label: "Coffee Bar With Trailing Plants" },
  idea15: { src: "walnut-cabinet-cafe-corner", w: 1024, h: 1536, alt: "Walnut fluted cabinet with a marble top and espresso machine beside a bistro table and burgundy chair, with a framed café painting above", id: "65654107065018318", label: "Cozy Luxury Coffee Station" },
  idea16: { src: "green-floral-wallpaper", w: 1200, h: 1600, alt: "Kitchen counter with a coffee maker and toaster in front of green botanical wallpaper and a framed painting of a copper kettle", id: "37084396931198841", label: "Kitchen With Wallpaper Accent Wall" },
  idea17: { src: "narrow-wall-shelves", w: 832, h: 1248, alt: "Narrow wall shelves on black brackets holding jars, mugs and a kettle, with a towel bar and utensil crock above a small wood counter", id: "1017250634622245162", label: "Small Space Coffee Bar Ideas" },
  idea18: { src: "wood-cabinet-mug-rail", w: 736, h: 1104, alt: "Warm under-shelf lighting over a mug rail, coffee maker and cream tile backsplash above wood cabinets and a beverage fridge", id: "308285537017572239", label: "Cozy Wood Cabinet Coffee Station" },
  idea19a: { src: "pink-cabinet-mug-rail", w: 832, h: 1248, alt: "Pink cabinets with a brass rail of colorful mugs above terracotta tile, a cream espresso machine and a pink tray", id: "1017250634622368035", label: "Unique Home Coffee Bar Ideas" },
  idea19b: { src: "pink-arched-shelving", w: 768, h: 1376, alt: "Soft pink arched shelving with white mugs, glasses and canisters above a wood counter and a small drip coffee maker", id: "1548181186817987", label: "Mini Coffee Bar for Small Spaces" },
  clutter: { src: "minimal-counter-floating-shelf", w: 1200, h: 1600, alt: "Speckled counter with two coffee makers, two mugs and a small lamp beneath a single floating shelf with framed art and canisters", id: "553590979219171844", label: "Cozy Home Coffee Bar Ideas" },
  whatToPut: { src: "under-stairs-marble-counter", w: 941, h: 1672, alt: "Marble-look counter with a coffee maker, glass jars, mugs, a small plant and a candle beneath brass-railed floating shelves", id: "1127518456809709446", label: "Peel and Stick Marble Coffee Bar Upgrade" },
  finalThoughts: { src: "fall-mug-rail-copper-mugs", w: 600, h: 750, alt: "Two brass mug rails with copper and white mugs, a basket and an orange gingham towel above an espresso machine on a small wood stool", id: "14496030044904439", label: "Cozy Coffee Station" },
};

function photo(key, productsKey) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "coffee-bar-decor-ideas", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="https://www.pinterest.com/pin/${p.id}/" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

function quote(text, cite) {
  return `<blockquote><p>&ldquo;${text}&rdquo;</p><cite>&mdash; ${cite}</cite></blockquote>`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Create a Warm Wood Coffee Bar",
    photoKeys: ["idea1"],
    paras: [
      "Wood instantly makes a coffee station feel warmer.",
      "Try a wooden countertop, a pair of floating shelves, or a wooden tray under your coffee machine. Pair the wood with white or cream mugs, glass jars and a couple of small plants.",
      "I especially like light oak or walnut against white cabinetry because the combination feels relaxed and timeless.",
      "You can also lean a wooden cutting board against the wall behind the machine for another layer of texture.",
    ],
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Style a Coffee Bar With Open Shelves",
    photoKeys: ["idea2"],
    paras: [
      "Open shelves give you storage while turning your coffee supplies into part of the decor.",
      "Place your everyday mugs on the lower shelf, then use the upper shelf for a framed print, a couple of canisters or a basket.",
      "The trick involves editing your display. Don&rsquo;t fill every inch.",
      "A few attractive pieces will look much more intentional than twenty mugs competing for attention.",
    ],
    quote: { text: "Coffee bars aren&rsquo;t just for the kitchen.", cite: "Designer Marnie Oursler, quoted by Good Housekeeping" },
    afterQuote: ["That idea opens up plenty of possibilities."],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Turn a Small Corner Into a Coffee Bar",
    photoKeys: ["idea3"],
    paras: [
      "Have an awkward kitchen corner that currently does absolutely nothing?",
      "Perfect.",
      "Add a compact cabinet with a pair of floating shelves above it, and that forgotten space becomes a coffee station. A cabinet with closed doors gives you a place to hide the extras, while the top holds the machine, the kettle and the grinder.",
      "This approach works particularly well in apartments because you can create a dedicated zone without needing a major renovation.",
      "Keep the footprint small and the storage vertical.",
    ],
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Add a Coffee Bar Tray",
    photoKeys: ["idea4"],
    paras: [
      "Sometimes you don&rsquo;t need furniture at all.",
      "A wooden tray can instantly organize a countertop coffee station. Place your coffee maker, canisters and favorite mugs on one or two trays, and the whole setup feels intentional.",
      "If you have a few extra mugs, a tiered stand lets you stack them upward instead of across the counter, and a small chalkboard sign adds a bit of personality.",
      "I love this option for renters because you can completely change the look without drilling holes or modifying cabinets.",
    ],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Display Your Favorite Mugs",
    photoKeys: ["idea5"],
    paras: [
      "Why hide beautiful mugs inside a cabinet?",
      "Use them as decoration.",
      "Install hooks beneath a shelf, or add a wooden mug tree beside the coffee machine. You can mix shapes and textures while keeping the colors within the same palette.",
      "For example, try:",
    ],
    list: ["Cream ceramic mugs", "Speckled stoneware", "Natural wood accents", "Small glass jars", "One or two darker mugs for contrast"],
    afterList: ["You don&rsquo;t need matching mugs. A consistent color palette creates the cohesion."],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Make a Neutral Coffee Bar",
    photoKeys: ["idea6"],
    paras: [
      "If you love calm interiors, try a neutral coffee station.",
      "Use shades of cream, beige, taupe, warm white and soft brown. Add natural wood, dried flowers and a woven basket to prevent the space from looking flat.",
      "This style works beautifully with farmhouse, Scandinavian, modern organic and transitional interiors.",
      "I would avoid using too many shades of white, though. Without texture, a completely white coffee station can start looking more like an appliance showroom than a cozy corner.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Create a Farmhouse Coffee Bar",
    photoKeys: ["idea7a", "idea7b"],
    paras: [
      "Farmhouse coffee bars still work beautifully because the style naturally suits coffee accessories.",
      "Try combining:",
    ],
    list: ["White cabinetry", "Black metal hardware and shelving", "Wood brackets and warm wood accents", "Ceramic mugs", "Woven baskets", "One or two simple signs"],
    afterList: [
      "A small framed &ldquo;coffee bar&rdquo; sign or a painted monogram letter adds personality without taking over.",
      "Just keep the farmhouse signs under control. You probably don&rsquo;t need twelve signs telling everyone that coffee happens here.",
    ],
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Try a Modern Coffee Bar",
    photoKeys: ["idea8"],
    paras: [
      "For a modern coffee station, simplify everything.",
      "Use clean cabinetry, minimal accessories, streamlined storage and a restrained color palette.",
      "Dark cabinetry, a white counter, light wood shelves and a touch of brass work particularly well together.",
      "Hide unnecessary appliances and keep only one beautiful machine on the counter.",
      "The result should feel clean rather than sterile.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Add a Coffee Bar Backsplash",
    photoKeys: ["idea9"],
    paras: [
      "Want to make your coffee station feel more permanent?",
      "Add a backsplash.",
      "You could use subway tile, zellige tile, soft beige tile, marble, stone, beadboard, wallpaper or even a painted accent wall.",
      "A backsplash also gives you a great opportunity to introduce color or texture. A warm neutral tile with brass-railed shelves in front of it feels polished without overwhelming the kitchen, and a soft sage green can transform a neutral coffee bar just as easily.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Build a Coffee Bar Inside a Cabinet",
    photoKeys: ["idea10"],
    paras: [
      "This idea works brilliantly if you dislike countertop clutter.",
      "Create a dedicated coffee nook with cabinetry around it, where you can store the machine, mugs, coffee, filters and accessories. Add a small sink or a water source nearby if your layout allows, and your morning routine stays in one spot.",
      "When you finish making coffee, close the doors.",
      "Magic.",
      "HGTV highlights pull-out cabinet solutions that allow homeowners to use the coffee maker comfortably and hide it when they finish.",
      "Just make sure the cabinet provides enough ventilation and clearance for your specific appliance.",
    ],
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Use a Rolling Coffee Bar Cart",
    photoKeys: ["idea11"],
    paras: [
      "A coffee cart gives you flexibility.",
      "You can move it around the kitchen, dining room or entertaining area whenever you need it.",
      "Choose a cart with at least two levels. Put the coffee machine, a tray and your daily supplies on top, then use the lower shelf for glasses, syrups and extras.",
      "A wood and brass cart like this one adds a little warmth, too.",
      "This option also works beautifully for people who rent or frequently rearrange their interiors.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Create a Coffee Bar With Vintage Furniture",
    photoKeys: ["idea12"],
    paras: [
      "Here&rsquo;s one of my favorite ideas.",
      "Take an old console table, sideboard, buffet or hutch and turn it into a coffee station.",
      "The furniture gives you much more personality than a standard kitchen cabinet. A hutch with glass-front cabinets also lets you show off jars and dishes up top while the cabinets below hide everything else.",
      "Add a modern coffee machine or kettle on the counter, then balance it with dried flowers, framed artwork and a leafy plant nearby.",
      "The contrast between old and new makes the space feel collected rather than purchased all at once.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Add Glass Canisters to Your Coffee Bar",
    photoKeys: ["idea13"],
    paras: [
      "Glass canisters offer one of the easiest ways to make a coffee station look organized.",
      "Use them for:",
    ],
    list: ["Coffee beans", "Ground coffee", "Sugar", "Tea bags", "Marshmallows", "Chocolate", "Biscotti"],
    afterList: [
      "Clear containers also make it easier to see when you need to restock.",
      "For a warmer look, choose glass jars with wooden or bamboo lids.",
      "Recent coffee-corner styling advice also highlights glass storage containers as a simple way to combine organization with visual appeal.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Create a Cozy Coffee Bar With Greenery",
    photoKeys: ["idea14"],
    paras: [
      "Coffee and plants make a surprisingly good combination.",
      "Add a small pothos, a trailing plant or a herb pot beside the coffee maker. A long vine draped down your floating shelves does a lot of work for very little effort.",
      "The greenery breaks up all the hard surfaces created by appliances, cabinets, mugs and containers.",
      "If your coffee station gets little natural light, choose a low-light plant or use a realistic faux plant. There&rsquo;s no shame in that.",
    ],
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Make Your Coffee Bar Feel Like a Café",
    photoKeys: ["idea15"],
    paras: [
      "Want your home coffee bar to feel a little more special?",
      "Think like a café.",
      "Pair a rich wood cabinet with a marble top, a framed café-style painting, warm wall sconces and a tiny bistro table with a chair. Display your favorite cups, keep coffee beans in attractive containers and add a small pastry jar.",
      "You can even create a tiny drink menu for guests.",
      "I especially like this approach when the coffee station sits near a dining area because it turns an ordinary morning routine into a small ritual.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Use Wallpaper Behind Your Coffee Bar",
    photoKeys: ["idea16"],
    paras: [
      "Wallpaper can completely change a basic coffee corner.",
      "A deep green botanical print like this one makes a plain white counter feel layered and traditional. A lighter floral creates a cottage feel, and geometric patterns suit modern spaces.",
      "You don&rsquo;t need to wallpaper an entire room.",
      "A small coffee nook gives you permission to experiment.",
      "HGTV also showcases wallpaper as a way to give a home coffee station more visual personality.",
    ],
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Create a Small Apartment Coffee Bar",
    photoKeys: ["idea17"],
    paras: [
      "Small kitchens require smarter planning, not less style.",
      "Use a narrow shelf, compact cabinet, floating shelves or rolling cart.",
      "Keep only your everyday supplies in the coffee zone. A couple of wall shelves for jars, mugs and a kettle plus a towel bar for hand towels is often all you need. Store bulk coffee, extra mugs and rarely used equipment somewhere else.",
      "Vertical storage can make a huge difference because you gain organization without consuming additional countertop space.",
      "As one recent small-kitchen guide puts it, the goal involves creating a useful coffee zone rather than simply adding more things to the counter.",
    ],
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Add Under-Cabinet Lighting to Your Coffee Bar",
    photoKeys: ["idea18"],
    paras: [
      "Lighting can make a surprisingly big difference.",
      "Install warm under-cabinet or under-shelf lighting above your coffee station if your layout allows it.",
      "The light will highlight the backsplash, coffee machine, mugs and accessories while creating a cozy atmosphere in the morning.",
      "I prefer warm lighting here rather than harsh cool-white bulbs. Coffee deserves ambiance, not the interrogation-room treatment.",
    ],
  },
  {
    n: "19",
    productsKey: "idea19",
    title: "Create a Beautiful Coffee Bar With Your Favorite Colors",
    photoKeys: ["idea19a", "idea19b"],
    paras: [
      "Finally, make the coffee bar yours.",
      "Maybe you love soft pink. Maybe you prefer sage green, navy, warm beige, terracotta, or classic black and white.",
      "Use your favorite shade through the mugs, artwork, backsplash, storage containers or small accessories. A pink cabinet with colorful mugs on a brass rail and terracotta tile behind the machine feels playful, while a blush arched shelf with white mugs keeps things soft and calm.",
      "You don&rsquo;t need to repaint the entire kitchen.",
      "Sometimes one strong color repeated across three or four small details creates enough visual connection to make the whole coffee bar feel designed.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const list = idea.list ? `<ul>\n      ${idea.list.map((l) => `<li>${l}</li>`).join("\n      ")}\n    </ul>` : "";
  const afterList = idea.afterList ? idea.afterList.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const q = idea.quote ? quote(idea.quote.text, idea.quote.cite) : "";
  const afterQuote = idea.afterQuote ? idea.afterQuote.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const photos = idea.photoKeys.map((k, i) => photo(k, i === idea.photoKeys.length - 1 ? idea.productsKey : undefined)).join("\n    ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${list}
    ${afterList}
    ${q}
    ${afterQuote}
    ${photos}`;
}

const body = `
<p>A good cup of coffee deserves better than a lonely machine shoved against the toaster. These 19 coffee bar decor ideas can turn even a small, forgotten corner into a stylish spot that feels intentional, cozy and completely yours.</p>
<p>I&rsquo;ve always thought a coffee station should do two jobs. It should look good enough to make you happy when you walk past it, but it should also make your morning routine easier. After all, what good does a gorgeous coffee corner do if you have to hunt through three cabinets for the coffee filters?</p>
<p>A well-planned coffee bar brings the machine, mugs, coffee and everyday accessories together in one convenient zone. Designers also recommend choosing the location around your actual coffee routine, particularly access to an outlet, water and storage.</p>
<p>So let&rsquo;s talk about how to make yours look beautiful without turning your countertop into a coffee equipment showroom.</p>
${quote("A home coffee station makes the morning routine much easier.", "HGTV, Home Coffee Bar Ideas")}
${photo("hero", "hero")}

<h2>What Makes a Good Coffee Bar?</h2>
<p>Before we get to the pretty stuff, let&rsquo;s talk about what actually makes a coffee bar work.</p>
<p>A beautiful coffee station needs function, storage and personality. You want enough room to operate your coffee maker comfortably, but you don&rsquo;t want every coffee-related object you own sitting on display.</p>
<p>Think about your routine. Do you use an espresso machine, drip coffee maker, French press or pod machine? Do you keep syrups and creamers nearby? Where do you grab your mugs?</p>
<p>Answer those questions before you start decorating. If you use pods, for example, a carousel or a small drawer keeps them tidy and right where you need them.</p>
<p>I also recommend keeping the things you use every morning within easy reach and storing backups elsewhere. That simple change can make a coffee station look dramatically cleaner.</p>
${quote("The best setup is not the biggest or most expensive one.", "Absolute Home Design, Home Coffee Bar Ideas")}
<p>And honestly, I agree. You don&rsquo;t need a marble counter, commercial espresso machine and enough syrups to open a Starbucks franchise.</p>
${photo("goodBar", "goodBar")}

<h2>How Do You Decorate a Coffee Bar?</h2>
<p>Start with one visual anchor.</p>
<p>That could mean a beautiful coffee machine, a wooden tray, an artwork, a statement backsplash, open shelving or even a collection of favorite mugs.</p>
<p>Then build around it.</p>
<p>I like using a simple combination of wood, ceramic, glass and greenery because those materials instantly create warmth without making the area feel overly decorated.</p>
<p>A tray also helps tremendously. It gives your coffee essentials a defined boundary, which prevents mugs, sugar jars, spoons and coffee containers from slowly conquering the entire countertop. A tiered wooden tray can be even better in a corner because it stacks mugs, plates and syrups upward instead of outward.</p>
<p>For smaller kitchens, designers increasingly recommend using vertical space, floating shelves, carts, cabinets and other compact solutions instead of sacrificing valuable preparation space.</p>
<p>Now let&rsquo;s get into the fun part.</p>
${photo("decorate", "decorate")}

<h2>19 Coffee Bar Decor Ideas to Try at Home</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Keep Your Coffee Bar From Looking Cluttered</h2>
<p>Here&rsquo;s the part people often overlook.</p>
<p>Decorating a coffee bar doesn&rsquo;t mean displaying every coffee-related item you own.</p>
<p>I recommend using a simple rule: keep your daily essentials visible and hide everything else.</p>
<p>Your countertop might only need:</p>
<ul>
  <li>Coffee maker</li>
  <li>One tray</li>
  <li>Two or three mugs</li>
  <li>Coffee container</li>
  <li>Spoon holder</li>
  <li>One decorative item</li>
</ul>
<p>Everything else can go inside a drawer or cabinet.</p>
<p>Southern Living similarly recommends keeping frequently used kitchen items accessible while moving unnecessary countertop clutter into storage.</p>
<p>And if your kitchen feels crowded, don&rsquo;t force a huge coffee station into it. Even a small 18 to 24 inch section can work when you organize it properly.</p>
${photo("clutter", "clutter")}

<h2>What Should You Put on a Coffee Bar?</h2>
<p>Think about your actual morning routine rather than copying someone else&rsquo;s setup.</p>
<p>A practical coffee bar might include:</p>
<p><strong>Coffee machine:</strong> Your main appliance should have enough space around it for filling, brewing and cleaning.</p>
<p><strong>Mugs:</strong> Keep your everyday favorites within reach.</p>
<p><strong>Coffee storage:</strong> Use an airtight container for beans or grounds.</p>
<p><strong>Spoons:</strong> A small ceramic or metal holder keeps them organized.</p>
<p><strong>Sweeteners:</strong> Store sugar, honey or syrups in attractive containers.</p>
<p><strong>Napkins:</strong> Keep a small stack nearby for spills.</p>
<p><strong>Decor:</strong> Add one plant, artwork, candle or decorative object.</p>
<p>The goal involves creating a coffee station that looks beautiful while supporting your routine.</p>
${photo("whatToPut", "whatToPut")}

<h2>Final Thoughts on These Coffee Bar Decor Ideas</h2>
<p>The best coffee bar decor ideas don&rsquo;t necessarily require a large kitchen, expensive furniture or a renovation.</p>
<p>A small tray can work. A floating shelf can work. A vintage hutch can work. Even an unused corner can become your favorite little spot in the house.</p>
<p>Start with function, then add personality.</p>
<p>Choose a color palette you genuinely love, keep your daily essentials close, use vertical storage when space feels tight and resist the temptation to decorate every square inch.</p>
<p>Because ultimately, your coffee bar should make you want to stop for a minute.</p>
<p>And honestly, if a cute little coffee corner gives you one peaceful moment before the day gets chaotic, I&rsquo;d call that pretty successful decorating.</p>
`;

module.exports = { body };
