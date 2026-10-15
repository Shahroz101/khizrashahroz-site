// Body content for "28 Christmas Porch Decor Ideas That Make Your Home
// Feel Instantly Festive". Images sourced from Pinterest pins the user
// selected and provided directly; each is credited back to its pin per
// their request. All 31 supplied pins were usable — no exclusions needed.
// One additional licensed photo (Wikimedia Commons) fills the "What
// Makes a Christmas Porch Look Good?" section since every supplied pin
// was needed for the 28 numbered ideas plus the safety-tips and closing
// sections, keeping every section's photo spacing consistent with the
// rest of this series (no two consecutive sections without a photo).

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0FR23BMP8", title: "Buffalo Plaid Christmas Pillow Covers, 18 x 18 Inch, Set of 4, Red and Black", w: 1500, h: 1466 },
    { asin: "B0F4JLCS1V", title: "Small 2 Ft Pre-Lit Tabletop Christmas Tree with Ornaments and Lights", w: 763, h: 1500 },
  ],
  whatMakesGood: [
    { asin: "B0F7X5QXSN", title: "24 Inch Boxwood Wreath for Front Door with Sash, Large Artificial Greenery", w: 1387, h: 1500 },
    { asin: "B08G8CQYXJ", title: "MEEDEE White and Gold Wired Ribbon, 2.5 Inch, 6 Rolls, 36 Yards", w: 1482, h: 1412 },
  ],
  idea1: [
    { asin: "B0FDPB67N8", title: "24 Inch Christmas Wreath with Red Berries, Eucalyptus and Pinecones for Front Door", w: 1280, h: 1280 },
    { asin: "B0CFLBPBGR", title: "RABUSOFA Merry Christmas Lumbar Pillow Cover, 12 x 20 Inch, Red", w: 933, h: 624 },
  ],
  idea2: [
    { asin: "B0H6J8V99C", title: "36 Inch Large Pre-Lit Christmas Wreath with Lights for Outdoor", w: 1500, h: 1500 },
    { asin: "B0H8PW9KY4", title: "Large Red Velvet Christmas Bows for Garland, Wreaths and Tree Decor", w: 1431, h: 1500 },
  ],
  idea3: [
    { asin: "B00LKRMWEY", title: "National Tree Company 9 Ft Pre-Lit Crestwood Spruce Christmas Garland", w: 1500, h: 853 },
    { asin: "B0FP4NBGK1", title: "24 Pieces Natural Pine Cones with Wired Stems, Various Sizes, Christmas Decor", w: 1500, h: 1496 },
  ],
  idea4: [
    { asin: "B00MVAC6FY", title: "National Tree Company 3 Ft Pre-Lit Nordic Spruce Mini Christmas Tree", w: 945, h: 1498 },
    { asin: "B0C7GRGWQT", title: "Rocinha Rattan Christmas Tree Collar Basket, Rustic Handcrafted Tree Ring", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0H8CRVTLK", title: "GSK 20 Inch Black Tall Taper Garden Planters, Set of 2, All Season", w: 1500, h: 1500 },
    { asin: "B0FLDP7B25", title: "Artificial Christmas Pine Branches with Red Berry Picks, 45 Greenery Stems and 15 Berries", w: 1500, h: 1478 },
  ],
  idea6: [
    { asin: "B0BM39QXGS", title: "Set of 4 Large Torched Wood Nesting Decorative Crates, Rustic Farmhouse", w: 1500, h: 984 },
    { asin: "B0D72HXH99", title: "EverGrace Chenille Christmas Throw Blanket, 50 x 60 Inch, Red Stewart Plaid", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0D46TTYXK", title: "24 and 17 Inch Large Black Outdoor Floor Lanterns, Set of 2, Porch Decor", w: 1500, h: 1500 },
    { asin: "B09J1FK7RK", title: "Tyawon Glass Battery Operated LED Flameless Candles with Remote and Timer", w: 1496, h: 1500 },
  ],
  idea8: [
    { asin: "B07LFDSJYS", title: "Idyllic 22 Inch Greenery Winter Wreath with Snowy Pine Cones and Succulents", w: 1300, h: 1300 },
    { asin: "B0DFBVR4H1", title: "Faux Rabbit Fur Throw Blanket for Couch, Cream White, 50 x 60 Inch", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B0H2VSCGH4", title: "NEEDOMO Set of 2 Red Outdoor Lanterns for Porch, Large Candle Lanterns", w: 1500, h: 1500 },
    { asin: "B0FLJJDTJR", title: "TRIROCKS Set of 2 Decorative Candle Lanterns, 14 and 10 Inch, Antique Red", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B073YCBNDW", title: "DII Buffalo Check Rustic Farmhouse Throw Blanket with Tassels, 50 x 60, Black and White", w: 1498, h: 1095 },
    { asin: "B07XFN8LR3", title: "Boao 3 Roll Christmas Buffalo Plaid Wired Ribbon, 2.4 Inch x 26 Yard", w: 1494, h: 1478 },
  ],
  idea11: [
    { asin: "B0CTGFX6FC", title: "30 Pcs Real Dried White Birch Twigs, 17 Inch, Decorative Branches for Vases", w: 1500, h: 1500 },
    { asin: "B0BCK98LLG", title: "PerkHomy Natural Jute Twine, 600 Feet, for Crafts and Gift Wrapping", w: 643, h: 1090 },
  ],
  idea12: [
    { asin: "B0FSYC2XZ4", title: "Urn Planters, 22 Inch, Set of 2, Tall Stone-Resin Pedestal Planters for Outdoor Plants", w: 1500, h: 1406 },
    { asin: "B0037XKRRS", title: "American Metalcraft Galvanized Steel Pail with Handle, 1.16 Gallon, 8 Inch", w: 1242, h: 1500 },
  ],
  idea13: [
    { asin: "B0H6BCVVF7", title: "Zeyune Giant Velvet Christmas Bow, 39 x 59 Inch, Burgundy", w: 1500, h: 1500 },
    { asin: "B0G5QJR39W", title: "White Tulle Fabric Roll, 6 Inch by 100 Yards (300 Feet)", w: 1500, h: 1500 },
  ],
  idea14: [
    { asin: "B01INBBP3I", title: "National Tree Company Pre-Lit Decorative Sisal Gift Boxes, 3-Piece Set", w: 1409, h: 1500 },
    { asin: "B0D6MXXGS2", title: "2 Ft Snow Flocked Artificial Tabletop Christmas Tree with Plastic Stand", w: 912, h: 1500 },
  ],
  idea15: [
    { asin: "B0FLJJHDVH", title: "Glitzhome Vintage Wooden Hanging Sled Wall Sign, 34 Inch, Rustic Red", w: 1500, h: 1500 },
    { asin: "B0F4ZDNV58", title: "Aurora Festive Palm Pals Freeze Snowman Stuffed Animal", w: 1092, h: 1500 },
  ],
  idea16: [
    { asin: "B0HHMGSMCW", title: "Set of 3 Pre-Lit Mini Christmas Trees, 22 Inch, Tabletop Artificial Trees", w: 1500, h: 1500 },
    { asin: "B088LSF8BD", title: "Rectangular Small Seagrass Baskets, Set of 3", w: 1414, h: 1047 },
  ],
  idea17: [
    { asin: "B092JP5KFX", title: "Warm White Icicle Lights for Outside, 66 Ft, 640 LEDs, Outdoor Christmas Lights", w: 1500, h: 1500 },
    { asin: "B09Z5YT94K", title: "TW SHINE Warm White Outdoor Christmas Lights, 20 Ft, 100 Count", w: 1445, h: 1500 },
  ],
  idea18: [
    { asin: "B0H9L2GP5B", title: "Merry Christmas Doormat, 30 x 17 Inch, Coir Welcome Mat with Non-Slip Backing", w: 1500, h: 927 },
    { asin: "B0BFDH7835", title: "Christmas Red and White Plaid Door Mat, 28 x 43 Inch, Hand-Woven Cotton", w: 1500, h: 1500 },
  ],
  idea19: [
    { asin: "B0H6LBZCC8", title: "Large Handwoven Wicker Basket with Handle, Scalloped Edge", w: 1103, h: 1347 },
    { asin: "B0G4M7NLL1", title: "VIVATREES 3 Ft Artificial Topiary Cedar Trees, UV-Resistant Outdoor Evergreens", w: 1500, h: 1493 },
  ],
  idea20: [
    { asin: "B0F9KWGG6K", title: "4 Pcs Mini Christmas Cedar Wreaths with Red Bows and Bells, 12 Inch", w: 1434, h: 1500 },
    { asin: "B09PV1F8PR", title: "VIS'V Heavy Duty Clear Suction Wreath Hanger, 22 LB, Large, 2 Pcs", w: 1500, h: 1402 },
  ],
  idea21: [
    { asin: "B07WPS4PTV", title: "Sattiyrch 76 Piece Gold Shatterproof Christmas Ball Ornaments Set", w: 853, h: 675 },
    { asin: "B0HC6YKLS4", title: "Set of 3 Giant Metal Christmas Bells, 7.1, 9.84 and 12.2 Inch", w: 1500, h: 1500 },
  ],
  idea22: [
    { asin: "B0FDBGVLL7", title: "50 Pack Artificial Red Berry Picks and Stems for Christmas Decor", w: 1390, h: 1362 },
    { asin: "B09GY7WWRB", title: "24 Pieces Frosted Artificial Holly Berry Stems, 9 Inch, Snowy Red Berry Picks", w: 1477, h: 1469 },
  ],
  idea23: [
    { asin: "B0GVNF7RV4", title: "Outdoor Deep-Seat Cushion Set, 24 x 24 Inch, Beige, Set of 4", w: 1500, h: 1451 },
    { asin: "B08CV97DSX", title: "BEAUTEX Red Sherpa Fleece Throw Blanket, Soft, Fluffy and Cozy", w: 1500, h: 1199 },
  ],
  idea24: [
    { asin: "B0DKNN9WCX", title: "YITAHOME 6 Ft Pre-Lit Snow Flocked Artificial Christmas Tree with Remote", w: 1500, h: 1500 },
    { asin: "B07ZNJSMCD", title: "kockuu White Snowflake Christmas Ornaments for Tree and Crafts", w: 1500, h: 1500 },
  ],
  idea25: [
    { asin: "B0D17QBQBH", title: "DoubleFill 2 Pcs 32 Inch Wooden Nutcracker Yard Decor, Soldier and Knight", w: 1500, h: 1500 },
    { asin: "B0CDL7T8L8", title: "Suzile 4 Pcs 12 Inch Christmas Nutcracker Figures, Wooden Soldiers", w: 1500, h: 1218 },
  ],
  idea26: [
    { asin: "B0HCJ7GYR3", title: "Hot Cocoa Bar Supplies Kit, Clear Acrylic 4-Cell Topping Organizer with Lids and Spoons", w: 1500, h: 1481 },
    { asin: "B0CC2LTM9Q", title: "Maxdot 8 Pcs Christmas Ceramic Coffee Mugs, 12 oz", w: 1500, h: 1484 },
  ],
  idea27: [
    { asin: "B0G8LXN89J", title: "2 Pcs Silver Christmas Reindeer Figurines, Resin Standing and Sitting Statues", w: 1361, h: 1500 },
    { asin: "B0BHH88STK", title: "COTTON CRAFT Braided Handwoven 100% Jute Door Mat, 22 x 34 Inch", w: 978, h: 1500 },
  ],
  idea28: [
    { asin: "B0CC91TXDV", title: "22 Inch Pre-Lit Be Merry Christmas Wreath with Red Black Buffalo Plaid Bow", w: 1500, h: 1500 },
    { asin: "B0GVYHM9SX", title: "Hourleey Set of 4 Pre-Lit Christmas Gift Boxes, Warm White, 70 LED", w: 1500, h: 1500 },
  ],
  safety: [
    { asin: "B079N9FW5B", title: "BN-LINK Outdoor 24-Hour Mechanical Timer Outlet, 2 Grounded Outlets", w: 1500, h: 1500 },
    { asin: "B0G69DJ82M", title: "TiFFCOFiO Waterproof Indoor Outdoor Extension Cord, 25 Feet", w: 1500, h: 1096 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "christmas-porch-decor-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
  hero: { src: "hero", w: 736, h: 1104, alt: "Cozy porch bench with red and green plaid pillows and throw, a wreath on the window, string lights and mini lit trees", url: "https://www.pinterest.com/pin/4600778950712984640/", label: "Cozy Christmas Porch Bench" },
  idea1: { src: "classic-red-and-green", w: 736, h: 1312, alt: "Front porch with red and white striped curtains, multiple evergreen wreaths with red bows, a rocking chair with a Merry Christmas pillow and a poinsettia", url: "https://www.pinterest.com/pin/74168725107945773/", label: "Classic Red and Green Christmas Porch" },
  idea2: { src: "oversized-wreath", w: 736, h: 1308, alt: "Oversized evergreen wreath with velvet red bows, pinecones and berries covering a black front door", url: "https://www.pinterest.com/pin/14003448837942383/", label: "Oversized Christmas Wreath" },
  idea3: { src: "garland-around-door", w: 736, h: 1312, alt: "Lit evergreen garland with red bows wrapped around a porch doorway and railing beside a wreath and black lantern", url: "https://www.pinterest.com/pin/21673641952778626/", label: "Garland Framing a Front Door" },
  idea4: { src: "mini-tree", w: 736, h: 1302, alt: "Small lit Christmas tree planted in a woven basket beside a lantern on a rustic porch step", url: "https://www.pinterest.com/pin/122371314870009686/", label: "Cozy Mini Tree in a Basket" },
  idea5: { src: "matching-planters", w: 737, h: 1313, alt: "Matching planters filled with evergreen, berries and birch branches on either side of a front door with garland and a wreath", url: "https://www.pinterest.com/pin/1007680485388758049/", label: "Matching Christmas Planters" },
  idea6: { src: "rustic-with-lanterns", w: 736, h: 1104, alt: "Rustic porch with a berry wreath on a wood door, hanging lanterns, mini trees in wood crates and a plaid blanket", url: "https://www.pinterest.com/pin/32721534793327416/", label: "Rustic Christmas Porch With Lanterns" },
  idea7: { src: "with-lanterns", w: 736, h: 1104, alt: "A row of black lanterns with candles, red bows and greenery lined up along a porch railing", url: "https://www.pinterest.com/pin/10555380372134462/", label: "Christmas Porch Lantern Row" },
  idea8: { src: "scandinavian", w: 896, h: 1344, alt: "White and natural toned porch with a wood bench, cream pillows, a white fur throw, a pinecone wreath and mini trees in the snow", url: "https://www.pinterest.com/pin/140806234631338/", label: "Scandinavian Christmas Porch" },
  idea9: { src: "red-lanterns", w: 1080, h: 1920, alt: "Glossy red lanterns and red berry branches lined along snowy porch steps beside a lit Christmas tree", url: "https://www.pinterest.com/pin/66287425761745206/", label: "Red Lanterns on a Christmas Porch" },
  idea10: { src: "plaid-accents", w: 736, h: 1312, alt: "Porch with tartan plaid pillows, a plaid throw blanket, plaid bows on garland and plaid wall discs beside lanterns and a wreath", url: "https://www.pinterest.com/pin/68748200738/", label: "Plaid Accents on a Christmas Porch" },
  idea11: { src: "birch-branches", w: 1200, h: 2133, alt: "Bundles of birch branches tied with twine flanking a front door with garland, a wreath, lanterns and poinsettias", url: "https://www.pinterest.com/pin/1117103882569999577/", label: "Birch Branches on a Christmas Porch" },
  idea12: { src: "elegant-neutral", w: 768, h: 1152, alt: "Three Christmas trees of varying heights in aged stone urns and a galvanized bucket beside black lanterns on a gravel path", url: "https://www.pinterest.com/pin/3518505939353760/", label: "Elegant Neutral Christmas Trees" },
  idea13: { src: "oversized-bow", w: 1086, h: 1448, alt: "A giant burgundy velvet bow with flowing sheer tulle hanging from an evergreen wreath on a lit porch", url: "https://www.pinterest.com/pin/4609504664991112256/", label: "Oversized Bow on a Christmas Porch" },
  idea14: { src: "wrapped-presents", w: 896, h: 1344, alt: "Oversized wrapped gift boxes in red and gold stacked along a porch beside snow flocked mini trees and a red door", url: "https://www.pinterest.com/pin/15551561210026361/", label: "Wrapped Presents on a Christmas Porch" },
  idea15: { src: "vintage-sled", w: 1024, h: 1535, alt: "A vintage wooden sled styled with a plaid pillow, lantern, greenery and a small stuffed snowman leaning against a front door", url: "https://www.pinterest.com/pin/159877855518328028/", label: "Vintage Sled Porch Decor" },
  idea16: { src: "tree-trio", w: 736, h: 1104, alt: "Three small Christmas trees of different heights in woven baskets beside a bench with pillows and string lights", url: "https://www.pinterest.com/pin/45950858694805694/", label: "Christmas Tree Trio on a Porch" },
  idea17: { src: "warm-white-lights", w: 736, h: 1104, alt: "Porch steps and railings wrapped in icicle lights and garland with a snowy wreath and a small lit tree", url: "https://www.pinterest.com/pin/4605423268978756480/", label: "Warm White Lights on a Christmas Porch" },
  idea18: { src: "festive-doormat", w: 512, h: 640, alt: "A Merry Christmas doormat layered over a red plaid rug between two lit Christmas trees with a wreath and lanterns", url: "https://www.pinterest.com/pin/524317581641094594/", label: "Festive Christmas Doormat" },
  idea19: { src: "evergreen-baskets", w: 736, h: 1104, alt: "Woven baskets holding small lit Christmas trees beside a bench with plaid pillows, lanterns and a wreath on the window", url: "https://www.pinterest.com/pin/286400857549158007/", label: "Evergreen Baskets on a Christmas Porch" },
  idea20: { src: "hanging-wreaths", w: 600, h: 900, alt: "Matching wreaths hung on dark shutters along a row of windows above an outdoor dining table", url: "https://www.pinterest.com/pin/8022105567115279/", label: "Hanging Wreaths on Porch Windows" },
  idea21: { src: "gold-accents", w: 800, h: 1200, alt: "Evergreen garland and wreath decorated with gold and bronze ornaments framing a dark wood front door", url: "https://www.pinterest.com/pin/105482816269948587/", label: "Gold Accents on a Christmas Porch" },
  idea22: { src: "red-berries", w: 1000, h: 1500, alt: "Galvanized buckets filled with evergreen branches, red berries and red plaid bows on a porch step", url: "https://www.pinterest.com/pin/8373949304498501/", label: "Red Berries on a Christmas Porch" },
  idea23: { src: "cozy-seating", w: 576, h: 1024, alt: "Cream outdoor sofa with red plaid pillows and a throw blanket under a garland with red and gold ornaments and lanterns", url: "https://www.pinterest.com/pin/4607182503991285824/", label: "Cozy Christmas Porch Seating Area" },
  idea24: { src: "snowy-white-decor", w: 736, h: 1288, alt: "All white and silver porch with hanging paper snowflakes, a flocked tree, a white wreath and silver pillows on a bench", url: "https://www.pinterest.com/pin/609534130864588255/", label: "Snowy White Christmas Porch" },
  idea25: { src: "nutcrackers", w: 896, h: 1344, alt: "Large nutcracker statues flanking a dark front door with a classic evergreen wreath and small lit trees", url: "https://www.pinterest.com/pin/18436679720056204/", label: "Nutcrackers on a Christmas Porch" },
  idea26: { src: "hot-cocoa-station", w: 736, h: 920, alt: "A bar cart styled as a hot cocoa station with mugs, marshmallows, candy canes and a kettle beside a wicker chair with a plaid throw", url: "https://www.pinterest.com/pin/625226360817798399/", label: "Hot Cocoa Station on a Porch" },
  idea27: { src: "minimalist", w: 736, h: 1104, alt: "Minimalist white porch with small lit trees, white wrapped gifts, candles and a silver reindeer figurine on a woven mat", url: "https://www.pinterest.com/pin/9570217953951097/", label: "Minimalist Christmas Porch" },
  idea28: { src: "layered-everything", w: 736, h: 1104, alt: "Layered porch with a Be Merry wreath, garland, lit gift boxes, nutcracker statues, snowy mini trees and lanterns on the steps", url: "https://www.pinterest.com/pin/36662184463053601/", label: "Layered Christmas Porch Display" },
  safety: { src: "designer-planters", w: 683, h: 1024, alt: "Tall black urn planters filled with evergreen, silver and red ornaments and berries on either side of a dark front door with a wreath", url: "https://www.pinterest.com/pin/341288478031917733/", label: "Designer Christmas Planters" },
  finalThoughts: { src: "cozy-evening", w: 768, h: 1368, alt: "A red front door with an evergreen wreath, red lanterns glowing on the steps and mini trees in wood crates at dusk", url: "https://www.pinterest.com/pin/222787512812381679/", label: "Cozy Christmas Porch at Dusk" },
};

const STOCK = {
  whatMakesGood: { src: "what-makes-it-good", w: 3024, h: 4032, alt: "A navy front door on a historic yellow house decorated with a boxwood wreath tied with plaid and gold ribbon", url: "https://commons.wikimedia.org/w/index.php?curid=98332252", label: "M2545", site: "Wikimedia Commons" },
};

function photo(key, productsKey) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "christmas-porch-decor", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

function stockPhoto(key) {
  const p = STOCK[key];
  return `<figure>
      ${picture({ dir: "christmas-porch-decor", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo by ${p.label} via <a href="${p.url}" target="_blank" rel="nofollow noopener">${p.site}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Classic Red and Green Christmas Porch",
    photoKey: "idea1",
    paras: [
      "You can never really go wrong with classic red and green. Use an evergreen wreath with red berries, then repeat the red through ribbons, pillows, ornaments, or planters.",
      "I especially like this combination on white, cream, gray, or natural wood homes because the colors immediately stand out.",
      "Keep the greenery slightly loose instead of arranging every branch perfectly. A little imperfection makes the display feel more natural.",
    ],
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Christmas Porch With an Oversized Wreath",
    photoKey: "idea2",
    paras: [
      "Go big with your wreath.",
      "An oversized wreath can create a dramatic focal point without requiring much additional decoration. Choose one with pine, eucalyptus, cedar, berries, pinecones, or ribbon.",
      "If your door looks visually empty, check the wreath size before adding more decorations. You might simply need a larger wreath.",
      "Better Homes &amp; Gardens also recommends an oversized wreath as part of a quick holiday porch formula.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Christmas Porch With Garland Around the Door",
    photoKey: "idea3",
    paras: [
      "Frame your entire doorway with evergreen garland for that classic Christmas-card feeling.",
      "Use faux garland if you want something reusable, or choose fresh greenery if you love the scent and natural texture.",
      "I like adding a few pinecones and small ornaments rather than covering every inch with decorations. Let the greenery remain the star.",
    ],
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Cozy Christmas Porch With a Mini Tree",
    photoKey: "idea4",
    paras: [
      "A small Christmas tree can make your porch feel incredibly cozy.",
      "Place one beside the front door and decorate it with warm white lights, simple ornaments, or ribbon. You can even use a basket or galvanized container as the tree base.",
      "This works especially well when you have a little extra floor space.",
    ],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Christmas Porch With Matching Planters",
    photoKey: "idea5",
    paras: [
      "Take two large planters and place one on each side of the doorway.",
      "Fill them with evergreen branches, pinecones, berries, birch branches, or faux Christmas stems. Matching planters create symmetry, which instantly makes an entrance feel more polished.",
      "You don&rsquo;t need expensive planters either. Existing pots can become Christmas planters with a few branches and decorations.",
    ],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Rustic Christmas Porch With Pinecones",
    photoKey: "idea6",
    paras: [
      "For a relaxed farmhouse look, let a berry-covered wreath and glowing lanterns do most of the decorating.",
      "Mix red berries with pine branches, mini trees tucked into wood crates, and a plaid blanket for texture. Add a wooden sign or vintage lantern to complete the rustic look.",
      "Better Homes &amp; Gardens features pinecones, fresh greenery, lanterns, plaid, and natural materials throughout its farmhouse Christmas porch ideas.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Christmas Porch With Lanterns",
    photoKey: "idea7",
    paras: [
      "Lanterns instantly add warmth to an outdoor Christmas display.",
      "Place two large lanterns beside the door, along the stairs, or near a seating area. Add flameless candles for a soft glow.",
      "I prefer warm white lights or candles here because they make the greenery look richer at night.",
    ],
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Scandinavian Christmas Porch",
    photoKey: "idea8",
    paras: [
      "Keep things simple with white, green, wood, and natural textures.",
      "Use a minimalist wreath, simple evergreen branches, wooden ornaments, neutral planters, and warm white lights.",
      "This style works beautifully when you want Christmas decorations without making your porch look overly colorful.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Christmas Porch With Red Lanterns",
    photoKey: "idea9",
    paras: [
      "Red lanterns provide an easy way to introduce traditional Christmas color.",
      "Place them in groups of two or three at different heights. Add flameless candles inside and surround the bases with greenery.",
      "The result feels festive without requiring dozens of ornaments.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Christmas Porch With Plaid Accents",
    photoKey: "idea10",
    paras: [
      "Bring plaid into your porch through ribbons, cushions, blankets, or a doormat.",
      "Red-and-black buffalo check creates a farmhouse feel, while red-and-green tartan gives you a more traditional Christmas look.",
      "The key involves repetition. Use one plaid pattern in several small places rather than mixing five different patterns.",
    ],
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Christmas Porch With Birch Branches",
    photoKey: "idea11",
    paras: [
      "Birch branches bring height and winter texture to your porch.",
      "Place them inside tall planters and combine them with evergreen stems and warm lights. The white bark looks especially beautiful against darker doors.",
      "You can also add a few red berries for contrast.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Elegant Neutral Christmas Porch",
    photoKey: "idea12",
    paras: [
      "Not every Christmas porch needs red.",
      "Try cream, beige, taupe, white, soft green, and natural wood. Group a few small trees of different heights in aged stone urns or a galvanized bucket, then add warm white lights and a simple black lantern.",
      "This approach works particularly well if your interior already follows a neutral decorating style.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Christmas Porch With Oversized Bows",
    photoKey: "idea13",
    paras: [
      "A giant bow can completely change a plain doorway.",
      "Attach one to a wreath, garland, railing, planter, or even the front door itself. Choose velvet, linen, plaid, or traditional ribbon depending on your style.",
      "I love oversized bows because they create impact without adding visual clutter.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Christmas Porch With Wrapped Presents",
    photoKey: "idea14",
    paras: [
      "Create a little Christmas vignette using decorative wrapped boxes.",
      "Stack several boxes beside the tree or under a porch bench. Use weather-resistant materials or empty faux packages if your porch gets rain or snow.",
      "Stick to your existing color palette so the packages look intentional rather than like actual last-minute shopping leftovers.",
    ],
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Christmas Porch With a Vintage Sled",
    photoKey: "idea15",
    paras: [
      "Have an old sled sitting around?",
      "Lean it against the wall and decorate it with evergreen branches, ribbon, pinecones, or a wreath.",
      "This works especially well for rustic, farmhouse, and traditional Christmas porches.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Christmas Porch With a Christmas Tree Trio",
    photoKey: "idea16",
    paras: [
      "Try three small trees instead of one large tree.",
      "Use different heights and place them together in baskets or planters. Keep the decorations simple so the arrangement doesn&rsquo;t become visually chaotic.",
      "Odd-numbered groupings often create a more natural decorative arrangement, so three trees can work particularly well.",
    ],
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Christmas Porch With Warm White Lights",
    photoKey: "idea17",
    paras: [
      "Sometimes you genuinely don&rsquo;t need more stuff.",
      "Wrap warm white lights around garland, railings, trees, and planters. Let the lighting create the atmosphere.",
      "HGTV recommends combining mini lights with greenery and lanterns to create ambient outdoor lighting.",
    ],
    quote: { text: "The goal here is to turn off your porch lights and still have an ambient glow all around.", cite: "HGTV, 5 Ideas for Cozying Up Your Front Porch for Winter" },
    afterQuote: ["That&rsquo;s exactly the mood I&rsquo;d aim for."],
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Christmas Porch With a Festive Doormat",
    photoKey: "idea18",
    paras: [
      "Don&rsquo;t forget the floor.",
      "A Christmas doormat can add personality without taking up space. Look for simple phrases, traditional patterns, snowflakes, plaid, or evergreen designs.",
      "Layer it over a larger outdoor rug if you have enough room.",
    ],
  },
  {
    n: "19",
    productsKey: "idea19",
    title: "Christmas Porch With Evergreen Baskets",
    photoKey: "idea19",
    paras: [
      "Fill large woven baskets with small potted evergreen trees instead of a planter.",
      "Wrap the trees in warm white lights and let the baskets themselves add texture. They soften the harder architectural lines around your front door.",
      "This idea also works beautifully after Christmas because you can remove the obvious holiday details and keep the greenery.",
    ],
  },
  {
    n: "20",
    productsKey: "idea20",
    title: "Christmas Porch With Hanging Wreaths",
    photoKey: "idea20",
    paras: [
      "Why stop at one wreath?",
      "Hang smaller wreaths on windows, porch columns, or even the backs of outdoor chairs. Repeating the same wreath style creates a cohesive look.",
      "You can use faux wreaths for consistency or mix natural greenery for a more relaxed display.",
    ],
  },
  {
    n: "21",
    productsKey: "idea21",
    title: "Christmas Porch With Gold Accents",
    photoKey: "idea21",
    paras: [
      "Add gold through ornaments, ribbon, lanterns, bells, or small decorative objects.",
      "Pair gold with evergreen and cream for an elegant look. You don&rsquo;t need much. A few metallic accents can make natural greenery feel instantly more polished.",
    ],
  },
  {
    n: "22",
    productsKey: "idea22",
    title: "Christmas Porch With Red Berries",
    photoKey: "idea22",
    paras: [
      "Red berries provide a simple burst of Christmas color.",
      "Tuck berry stems into wreaths, planters, garlands, and trees. They work particularly well when you want a classic look without relying heavily on ornaments.",
    ],
  },
  {
    n: "23",
    productsKey: "idea23",
    title: "Christmas Porch With a Cozy Seating Area",
    photoKey: "idea23",
    paras: [
      "If your porch has enough space, make it feel like somewhere you actually want to sit.",
      "Add a chair or bench, a festive cushion, and a warm throw blanket. A small side table can hold a lantern or seasonal arrangement.",
      "HGTV also highlights festive throws and cozy seating as ways to make a front porch feel more inviting during the holidays.",
    ],
  },
  {
    n: "24",
    productsKey: "idea24",
    title: "Christmas Porch With Snowy White Decor",
    photoKey: "idea24",
    paras: [
      "Create a winter wonderland using white, silver, frosted greenery, and soft blue.",
      "Use flocked trees, white ornaments, snowy wreaths, and cool-toned lights.",
      "This look feels especially beautiful against darker exterior colors.",
    ],
  },
  {
    n: "25",
    productsKey: "idea25",
    title: "Christmas Porch With Nutcrackers",
    photoKey: "idea25",
    paras: [
      "Large nutcrackers can create a playful Christmas entrance.",
      "Place one or two beside the front door or next to your Christmas trees. Choose oversized versions if your porch has plenty of space.",
      "HGTV features oversized nutcrackers as a bold option for Christmas porch decorating.",
    ],
  },
  {
    n: "26",
    productsKey: "idea26",
    title: "Christmas Porch With a Hot Cocoa Station",
    photoKey: "idea26",
    paras: [
      "If you entertain outdoors during winter, turn a small console or table into a hot cocoa station.",
      "Add mugs, cocoa jars, candy canes, marshmallows, and a festive sign. Keep anything edible protected from weather and insects.",
      "This idea combines decor and function, which I always prefer.",
    ],
  },
  {
    n: "27",
    productsKey: "idea27",
    title: "Minimalist Christmas Porch",
    photoKey: "idea27",
    paras: [
      "Sometimes less really does look better.",
      "Use one beautiful wreath, simple garland, two planters, and warm white lights. Skip the giant signs and dozens of decorations.",
      "A minimalist porch can still feel incredibly festive because you give every piece room to breathe.",
    ],
  },
  {
    n: "28",
    productsKey: "idea28",
    title: "Layered Christmas Porch With Everything Working Together",
    photoKey: "idea28",
    paras: [
      "For the grand finale, combine your favorite elements.",
      "Start with the door wreath. Add garland around the doorway, matching planters, two lanterns, a small tree, a seasonal doormat, and warm white lights.",
      "Keep the color palette tight and repeat the same greenery throughout the porch. The goal isn&rsquo;t to use everything you own. The goal is to make every piece look like it belongs.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const quote = idea.quote ? `<blockquote><p>&ldquo;${idea.quote.text}&rdquo;</p><cite>&mdash; ${idea.quote.cite}</cite></blockquote>` : "";
  const afterQuote = idea.afterQuote ? idea.afterQuote.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const photoHtml = idea.photoKey ? photo(idea.photoKey, idea.productsKey) : (idea.productsKey ? productGrid(idea.productsKey) : "");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${quote}
    ${afterQuote}
    ${photoHtml}`;
}

const body = `
<p>Your front porch deserves more than one lonely wreath and a string of lights tangled beyond recognition. These 28 Christmas porch decor ideas can help you create an entrance that feels warm, festive, and actually connected to the rest of your home.</p>
<p>I&rsquo;ve always thought the porch should set the mood before anyone even opens the front door. You don&rsquo;t need a huge porch, an enormous budget, or enough Christmas decorations to fill a storage unit. A few well-chosen layers can do the job beautifully.</p>
<p>The trick comes down to greenery, lighting, texture, color, and scale. Once you get those five elements working together, decorating becomes much easier.</p>
${photo("hero", "hero")}

<h2>What Makes a Christmas Porch Look Good?</h2>
<p>A beautiful Christmas porch usually has one clear focal point rather than twenty decorations fighting for attention. Your front door often provides the perfect anchor, so start there with a wreath, garland, or another strong seasonal detail.</p>
<p>HGTV recommends repeating elements across the porch so the whole display feels connected. For example, you might repeat evergreen greenery in your wreath, planters, and railing garland.</p>
<blockquote><p>&ldquo;For maximum visual impact, choose two main colors to work with and one accent.&rdquo;</p><cite>&mdash; HGTV, Festive Front Porch</cite></blockquote>
<p>That simple rule makes a surprisingly big difference. I often prefer two dominant colors with natural greenery rather than throwing red, gold, silver, blue, plaid, candy stripes, and every ornament from the attic into one tiny space.</p>
<p>Ask yourself: What should people notice first?</p>
<p>If you can answer that question, your decorating decisions become much easier.</p>
${stockPhoto("whatMakesGood")}
${productGrid("whatMakesGood")}

<h2>How Do You Decorate a Front Porch for Christmas?</h2>
<p>Start with the biggest pieces first. Add a wreath or door decoration, then bring in garland, planters, lanterns, trees, rugs, and smaller accessories.</p>
<p>For a small porch, you might only need a wreath, a pair of lanterns, and one planter. For a larger porch, you can create separate zones around the door, stairs, seating area, and railings.</p>
<p>I also recommend decorating vertically. Hang wreaths, wrap railings, frame the door with garland, and place tall trees beside the entrance. Vertical decoration makes a small porch feel fuller without taking up precious floor space.</p>
<p>HGTV also highlights the impact of combining greenery with lanterns and ambient lighting around a porch.</p>
<p>And honestly, lighting changes everything. A porch can look perfectly ordinary at 3 p.m. and completely magical at 7 p.m. That&rsquo;s the Christmas decorating equivalent of changing into your good outfit.</p>

<h2>28 Christmas Porch Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Make Christmas Porch Decor Look Expensive</h2>
<p>You don&rsquo;t need an enormous decorating budget to create a polished porch.</p>
<p>Focus on scale and repetition rather than quantity. One large wreath often creates more impact than three tiny decorations scattered across the door.</p>
<p>Try this simple formula:</p>
<p>One strong focal point</p>
<p>Two matching or coordinated planters</p>
<p>One type of greenery</p>
<p>One accent color</p>
<p>Warm lighting</p>
<p>One or two textural accessories</p>
<p>Better Homes &amp; Gardens recently highlighted a similar quick styling formula involving an oversized wreath, matching planters, and lanterns.</p>
<p>I also recommend reusing things you already own. Lanterns, baskets, blankets, planters, outdoor rugs, and even old branches can become part of your Christmas porch.</p>
<p>HGTV has also showcased budget-friendly porch makeovers that reused lanterns and greenery rather than starting from scratch.</p>

<h2>Christmas Porch Lighting Safety Matters</h2>
<p>Pretty lights mean nothing if you use them carelessly.</p>
<p>Before hanging anything, inspect your light strings for cracked sockets, exposed wires, damaged insulation, or loose connections. The U.S. Consumer Product Safety Commission recommends using outdoor-rated lights outside and plugging outdoor decorations into GFCI-protected outlets.</p>
<p>The CPSC also recommends turning holiday lights off before going to bed or leaving home.</p>
<p>Keep these basics in mind:</p>
<ul>
  <li>Use lights specifically rated for outdoor use.</li>
  <li>Check cords and sockets before installation.</li>
  <li>Keep electrical connections away from water.</li>
  <li>Use outdoor-rated extension cords when necessary.</li>
  <li>Secure lights with appropriate hooks or insulated fasteners.</li>
  <li>Turn lights off when you leave or go to bed.</li>
  <li>Choose flameless candles around greenery and other combustible decorations.</li>
</ul>
<p>A little caution takes almost no time, so there&rsquo;s really no reason to skip it.</p>
${photo("safety", "safety")}

<h2>How to Choose the Right Christmas Porch Decor</h2>
<p>Before you buy anything, stand outside and look at your porch from the street.</p>
<p>What looks empty? What already has enough visual weight? Where does your eye naturally land?</p>
<p>Then consider your home&rsquo;s architecture. A traditional house can handle classic red and green, while a modern exterior might look better with neutral greenery, black accents, and warm lighting.</p>
<p>Also think about weather. Outdoor Christmas decor needs to handle wind, rain, snow, sunlight, or whatever else your winter decides to throw at it.</p>
<p>For a small porch, prioritize vertical elements and keep the floor clear. For a wide porch, create multiple decorative zones instead of spreading tiny decorations everywhere.</p>

<h2>Final Thoughts on Christmas Porch Decor</h2>
<p>The best Christmas porch decor ideas don&rsquo;t necessarily involve the biggest budget or the most decorations. They create a clear visual story from the sidewalk to the front door.</p>
<p>Start with greenery. Add a strong wreath or focal point. Bring in warm lighting, then layer planters, lanterns, trees, bows, textiles, or seasonal accessories.</p>
<p>Most importantly, choose a style that feels like you.</p>
<p>Maybe that means classic red and green. Maybe you prefer Scandinavian neutrals. Maybe you want the whole porch to look like Santa accidentally parked his sleigh there.</p>
<p>Either way, have fun with it.</p>
<p>Your front porch doesn&rsquo;t need to look perfect. It just needs to make you smile when you come home.</p>
<p>And honestly, isn&rsquo;t that what Christmas decorating should do?</p>
`;

module.exports = { body };
