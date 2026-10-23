// Body content for "37 Winter Tray Ideas to Style a Cozy, Candlelit Home".
// Converted from the Dwelling Dream "37 Winter Tray Decor Ideas" source: all
// text rewritten from scratch and the ideas regrouped (small setups, nature,
// villages, cocoa and treats, playful tiered trays, glam metallics, neutrals,
// other rooms). Photos credited to their Pinterest pins; the supplied
// Amazon product pair stays under each photo. Ends on text.
// Photos: images/winter-tray-decor-ideas/, products: ...-products/.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "winter-tray-decor-ideas";
const PRODUCT_DIR = "winter-tray-decor-ideas-products";

const PHOTOS = {
 "tray-01": {
  "w": 750,
  "h": 1125,
  "pin": "https://www.pinterest.com/pin/196680708721940410/",
  "label": "Woven Tray With Mini Tree and Candle",
  "alt": "Woven tray with a mini potted Christmas tree and a lit candle"
 },
 "tray-22": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/1759287349516039/",
  "label": "Pinecone and Candle Tray on the Sofa",
  "alt": "Sofa-side tray with pinecones, a candle, and a plaid pillow nearby"
 },
 "tray-25": {
  "w": 832,
  "h": 1248,
  "pin": "https://www.pinterest.com/pin/751960469079851550/",
  "label": "Pinecones and Clementines in a Bowl",
  "alt": "Gold bowl filled with pinecones and fresh mandarin oranges"
 },
 "tray-17": {
  "w": 2268,
  "h": 4032,
  "pin": "https://www.pinterest.com/pin/768426755218922643/",
  "label": "Dried Oranges and Cinnamon on a Dark Tray",
  "alt": "Wood slice tray with dried orange slices and a cinnamon bundle"
 },
 "tray-18": {
  "w": 675,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/340162578130288160/",
  "label": "Log Slice Centerpiece With Candle",
  "alt": "Log slice centerpiece with a ribbed white candle ringed by dried orange slices, cinnamon sticks, walnuts, star anise and a burgundy velvet bow"
 },
 "tray-10": {
  "w": 1080,
  "h": 1565,
  "pin": "https://www.pinterest.com/pin/144115256825052578/",
  "label": "Woodland Animals on Moss",
  "alt": "Wood slice tray with woodland deer and rabbit figurines on moss"
 },
 "tray-04": {
  "w": 736,
  "h": 1288,
  "pin": "https://www.pinterest.com/pin/417286721746158895/",
  "label": "Frosted Branches in a Rustic Crate",
  "alt": "Rustic wood crate tray with tall glass hurricane candles, pale willow branches and frosted trees"
 },
 "tray-05": {
  "w": 800,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/237635317833894644/",
  "label": "Tiny Lit Village in a Wood Tray",
  "alt": "Pale wood tray with faux snow, glowing ceramic houses, frosted trees, pinecones and red berries"
 },
 "tray-06": {
  "w": 832,
  "h": 1248,
  "pin": "https://www.pinterest.com/pin/14496030046781929/",
  "label": "Village Tray on a Marble Island",
  "alt": "Lit ceramic Christmas village tray on a marble kitchen island"
 },
 "tray-09": {
  "w": 504,
  "h": 858,
  "pin": "https://www.pinterest.com/pin/223561568998933349/",
  "label": "Gingerbread House on a Light Tray",
  "alt": "Wood tray with a ceramic gingerbread house and bottle brush trees"
 },
 "tray-11": {
  "w": 736,
  "h": 1098,
  "pin": "https://www.pinterest.com/pin/914862422552804/",
  "label": "Candlesticks, Trees and Village on a Wood Tray",
  "alt": "Round wooden tray with candles in turned holders, a small village house, bottle brush trees, ornaments and eucalyptus"
 },
 "tray-23": {
  "w": 1283,
  "h": 1298,
  "pin": "https://www.pinterest.com/pin/58969076367902412/",
  "label": "Red Ornaments in a Glass Jar",
  "alt": "Round wood tray with a jar of red ornaments topped with berry stems, white ceramic houses and soft trees on a kitchen island"
 },
 "tray-24": {
  "w": 1320,
  "h": 2432,
  "pin": "https://www.pinterest.com/pin/25192079163926842/",
  "label": "Wicker Trees and Red Berries",
  "alt": "Round wood tray with two wicker trees, a cream vase of red berry branches and a candle in a red glass holder"
 },
 "tray-02": {
  "w": 1024,
  "h": 1536,
  "pin": "https://www.pinterest.com/pin/165929567517101321/",
  "label": "Cocoa Mug and Glowing House",
  "alt": "Round wood tray with hot cocoa mug, pinecones, and a lit mini house"
 },
 "tray-32": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/426434658488909138/",
  "label": "Cocoa and Cookies on a Long Tray",
  "alt": "Tray with snowflake mugs of hot cocoa and a cinnamon stick bundle"
 },
 "tray-33": {
  "w": 768,
  "h": 1152,
  "pin": "https://www.pinterest.com/pin/206884176627428669/",
  "label": "Round Board of Winter Treats",
  "alt": "Round wood board of cookies, snowflake pretzels, marshmallows, nuts and candy with a candy cane"
 },
 "tray-07": {
  "w": 736,
  "h": 1312,
  "pin": "https://www.pinterest.com/pin/143481938126940362/",
  "label": "Tiered Cocoa Bar Display",
  "alt": "Two-tier white tray styled as a hot cocoa bar with a red mug, signs, candy canes and a snowman"
 },
 "tray-08": {
  "w": 683,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/1152217885972813911/",
  "label": "Cocoa Jars on a Tiered Stand",
  "alt": "Tiered tray with hot cocoa jars tied with ribbon and gift tags"
 },
 "tray-26": {
  "w": 1036,
  "h": 1382,
  "pin": "https://www.pinterest.com/pin/128563764353864628/",
  "label": "Black and White Gnome Tray",
  "alt": "Black and white tiered tray with a plush gnome and snowflake sign"
 },
 "tray-27": {
  "w": 1280,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/994943742674160357/",
  "label": "Snowman Tiered Tray",
  "alt": "Black and white tiered tray with snowman decor and a bead garland"
 },
 "tray-28": {
  "w": 736,
  "h": 1148,
  "pin": "https://www.pinterest.com/pin/573646071296145863/",
  "label": "Cotton Stems and Beads on a Tiered Tray",
  "alt": "Tiered tray with cotton stems and a wooden snowflake sign"
 },
 "tray-29": {
  "w": 1080,
  "h": 1350,
  "pin": "https://www.pinterest.com/pin/506162445643129502/",
  "label": "Lantern, Birdhouse and Gnome Mug",
  "alt": "White beaded tray with a lattice lantern, a HOME birdhouse with wood beads, a knit gnome mug, a small tree and a candle"
 },
 "tray-14": {
  "w": 735,
  "h": 904,
  "pin": "https://www.pinterest.com/pin/674062269275068105/",
  "label": "Glass Cloches and Velvet Cone Trees",
  "alt": "Gold tray with glass cloche candles and velvet cone trees"
 },
 "tray-31": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/915215955538181003/",
  "label": "Brass Candlesticks on a Marble Tray",
  "alt": "Gold tray with brass candlesticks and mercury glass votives"
 },
 "tray-13": {
  "w": 1086,
  "h": 1448,
  "pin": "https://www.pinterest.com/pin/834010424793516796/",
  "label": "Brass Tray With Amber and Rust Tones",
  "alt": "Tray with amber glass candles and a copper vase of orange flowers"
 },
 "tray-16": {
  "w": 442,
  "h": 677,
  "pin": "https://www.pinterest.com/pin/3307399716034818/",
  "label": "Paper Stars and Tin House on Silver",
  "alt": "Silver tray with a candle, tin house lantern, and paper stars"
 },
 "tray-12": {
  "w": 960,
  "h": 955,
  "pin": "https://www.pinterest.com/pin/7599893117553746/",
  "label": "Gold Deer and Framed Winter Print",
  "alt": "Round tray with a gold deer figurine and a small framed winter print"
 },
 "tray-35": {
  "w": 1170,
  "h": 1885,
  "pin": "https://www.pinterest.com/pin/180003317661646015/",
  "label": "Black Deer and Gold Vase",
  "alt": "Black rectangular tray with a black deer figurine and a gold glitter vase of pine"
 },
 "tray-37": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/774830310921300545/",
  "label": "White Deer and Ceramic Tree",
  "alt": "Wood tray with a white ceramic deer and a small tiered tree"
 },
 "tray-15": {
  "w": 1080,
  "h": 1920,
  "pin": "https://www.pinterest.com/pin/1097752477959762461/",
  "label": "All-White Winter Tray",
  "alt": "White octagonal tray with birch logs and flocked pinecones"
 },
 "tray-03": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/122582421097704155/",
  "label": "Candlesticks and Pine on a Dark Tray",
  "alt": "Black tray with turned wood candlesticks and pine greenery"
 },
 "tray-36": {
  "w": 1080,
  "h": 1440,
  "pin": "https://www.pinterest.com/pin/22236591906848485/",
  "label": "Woven Tray With Pitcher and Beads",
  "alt": "Woven tray with a wood bead garland and a white ceramic pitcher"
 },
 "tray-19": {
  "w": 736,
  "h": 1098,
  "pin": "https://www.pinterest.com/pin/30962316182262223/",
  "label": "Books, Candles and Stems on a Round Tray",
  "alt": "Coffee table tray with a stack of books and a wood dough bowl"
 },
 "tray-20": {
  "w": 1000,
  "h": 1579,
  "pin": "https://www.pinterest.com/pin/388998486591166221/",
  "label": "Coffee Table With Books and Dough Bowl",
  "alt": "Round tray with stacked books and a large wood dough bowl"
 },
 "tray-21": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/22799541858982854/",
  "label": "Bedroom Tray With Tulips and Candles",
  "alt": "Bedroom tray with white tulips and rolled candles in newspaper wraps"
 },
 "tray-34": {
  "w": 1252,
  "h": 1917,
  "pin": "https://www.pinterest.com/pin/299278337762895042/",
  "label": "Roses, Diffuser and Candle on Rattan",
  "alt": "Tray with dusty pink roses and a reed diffuser bottle"
 },
 "tray-30": {
  "w": 1600,
  "h": 1600,
  "pin": "https://www.pinterest.com/pin/4609504702954333248/",
  "label": "Vanity Tray With Eucalyptus",
  "alt": "Vanity tray with eucalyptus stems and a lidded ceramic jar"
 },
 "hero": {
  "w": 736,
  "h": 1098,
  "pin": "https://www.pinterest.com/pin/914862422552804/",
  "label": "Candlesticks, Trees and Village on a Wood Tray",
  "alt": "Round wooden tray with candles in turned holders, a small village house, bottle brush trees, ornaments and eucalyptus"
 }
};

const PRODUCTS = {
 "tray-01": [
  {
   "asin": "B0D2NSRFVQ",
   "title": "14\" Tabletop Christmas Tree in Ceramic Boot Pot, Gold",
   "w": 993,
   "h": 1500
  },
  {
   "asin": "B00O3MCXCE",
   "title": "Swan Creek Honey Soaked Apples Pantry Jar Soy Candle",
   "w": 1280,
   "h": 1253
  }
 ],
 "tray-22": [
  {
   "asin": "B08WJLGZXZ",
   "title": "Pine Cones Uniquely Shaped Real Natural Pinecones in Bulk",
   "w": 1339,
   "h": 1473
  },
  {
   "asin": "B0D99V68G3",
   "title": "JOJOGOGO Christmas Red Tartan Plaid Pillow Covers, 20x20 Set of 2",
   "w": 1001,
   "h": 1001
  }
 ],
 "tray-25": [
  {
   "asin": "B01EK974VE",
   "title": "Red Co. 8.75\" Gold Moon Decorative Hammered Metal Centerpiece Bowl",
   "w": 1254,
   "h": 796
  },
  {
   "asin": "B09BKY1NBD",
   "title": "TITA-DONG 3Pcs Artificial Tangerine Orange Branches",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-17": [
  {
   "asin": "B0H4T9JPTT",
   "title": "10 FT Dried Orange Garland, 30 Pcs Natural Orange Slice",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B08WHLMT63",
   "title": "Fruidles Cinnamon Sticks, Star Anise and Whole Cloves, 3 Pack Bundle",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-18": [
  {
   "asin": "B0C29K4JJW",
   "title": "WILDMOS Decorative Round Wood Riser for Display, 12-inch",
   "w": 1440,
   "h": 597
  },
  {
   "asin": "B0773WW2ZV",
   "title": "Royal Imports Wired Red Velvet Christmas Ribbon with Gold Edge",
   "w": 1500,
   "h": 1183
  }
 ],
 "tray-10": [
  {
   "asin": "B0HCZ9YWCJ",
   "title": "7 Pcs Woodland Animal Figurines Set with Deer Family, Fox, Squirrel & Rabbit",
   "w": 1327,
   "h": 1500
  },
  {
   "asin": "B0FZSSH1YH",
   "title": "Fake Moss Table Runner for Crafts, Light Green",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-04": [
  {
   "asin": "B0CGXJ1B82",
   "title": "12Pcs Artificial Snow Frosted White Berry Stems",
   "w": 1275,
   "h": 1500
  },
  {
   "asin": "B09Q2M3BGH",
   "title": "Glass Hurricane Candle Holder, 3pcs Clear Cylinder Set",
   "w": 1351,
   "h": 1134
  }
 ],
 "tray-05": [
  {
   "asin": "B07WVNX8GX",
   "title": "LOVEINUSA 40 Pack Mini Christmas Bottle Brush Trees",
   "w": 1500,
   "h": 1174
  },
  {
   "asin": "B0C76YCWLQ",
   "title": "DN DECONATION Light Up Ceramic Village Houses, 3Pcs White",
   "w": 1200,
   "h": 1500
  }
 ],
 "tray-06": [
  {
   "asin": "B0DDSSN4PC",
   "title": "Arakulago Large Bottle Brush Christmas Trees, 3Pcs Snow Flocked",
   "w": 1346,
   "h": 1473
  },
  {
   "asin": "B0FG7DV6JT",
   "title": "CHUANGLI 9 Pcs Light Up Christmas Village Set, Lighted Ceramic Houses & Trees",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-09": [
  {
   "asin": "B0H6B44GDQ",
   "title": "LED Ceramic Gingerbread Houses for Christmas Village, 2Pcs with Timer",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CGNL96FQ",
   "title": "Bottle Brush Trees, 8 Pcs Mini Christmas Tree with Wooden Base, 4 Sizes",
   "w": 883,
   "h": 793
  }
 ],
 "tray-11": [
  {
   "asin": "B07SJSVTXN",
   "title": "Sea Team 86-Pack Shatterproof Gold Christmas Ball Ornaments",
   "w": 1498,
   "h": 1076
  },
  {
   "asin": "B09NKCH5P3",
   "title": "20 Pcs Artificial Eucalyptus Stems, Silver Dollar Leaves",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-23": [
  {
   "asin": "B0C7TJGDDQ",
   "title": "Red Christmas Ball Ornaments, 36pcs Shatterproof Set",
   "w": 1500,
   "h": 1349
  },
  {
   "asin": "B0C9GM64BZ",
   "title": "Fixwal Set of 2 Clear Tall Glass Cylinder Vases",
   "w": 1090,
   "h": 1298
  }
 ],
 "tray-24": [
  {
   "asin": "B0H8B81GX5",
   "title": "Sieral 5 Pcs Wicker Rattan Christmas Tree Table Decor",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0BBHDXM49",
   "title": "Sggvecsy 6 Pack Artificial Red Berry Stems, Holly Berry Branches",
   "w": 1327,
   "h": 1500
  }
 ],
 "tray-02": [
  {
   "asin": "B0CH7X5TR8",
   "title": "Whaline 2Pcs Snowflake Mug Set, 12oz Christmas Winter Coffee Mugs",
   "w": 1500,
   "h": 875
  },
  {
   "asin": "B07FRQQTL8",
   "title": "BESTTOYHOME 20-Piece Snow Tipped Natural Dried Pine Cones",
   "w": 961,
   "h": 909
  }
 ],
 "tray-32": [
  {
   "asin": "B0D95JD24V",
   "title": "Baderke 12 Pcs Ceramic Christmas Snowflake Mug with Ribbon",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B082BGJKT2",
   "title": "Yamees Cinnamon Sticks, Whole Cloves, and Star Anise, Bulk 18 Oz",
   "w": 1489,
   "h": 1500
  }
 ],
 "tray-33": [
  {
   "asin": "B076BWB6MY",
   "title": "Creative Co-Op Decorative Rectangle Distressed Metal Tray",
   "w": 1500,
   "h": 426
  },
  {
   "asin": "B08C8YNVZB",
   "title": "ZHANYIGY 4.25\" Christmas Ball Ornaments, 4pc Set Gold",
   "w": 1492,
   "h": 1500
  }
 ],
 "tray-07": [
  {
   "asin": "B0H6FMLYQ8",
   "title": "4 Pcs Cocoa Bar Christmas Tiered Tray Decor, Wood Block Signs",
   "w": 1051,
   "h": 1500
  },
  {
   "asin": "B01MFDSPCG",
   "title": "Mini Glass Mason Jar Favors, 12 Pieces",
   "w": 680,
   "h": 1266
  }
 ],
 "tray-08": [
  {
   "asin": "B0FPDG57Q4",
   "title": "Hot Chocolate Mix Gift Set, 16-Pack Gourmet Hot Cocoa Sampler",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CNRSKQDB",
   "title": "Hot Chocolate Station Gift Set with Glass Jars",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-26": [
  {
   "asin": "B0CGCRP457",
   "title": "UXORSN 3Pcs Lighted Christmas Gnome Decorations, 14 Inch",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CFTL2DRW",
   "title": "KORMMCO Christmas Snowflake Decor, 4 Piece Wood Signs",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-27": [
  {
   "asin": "B0D6Y9VRBP",
   "title": "Funnymoom 22 Pcs Winter Tiered Tray Decor, Snowflake & Snowman",
   "w": 991,
   "h": 1500
  },
  {
   "asin": "B0B11Y5L1W",
   "title": "OMISHE Wood Bead Garland with Tassels, 61 Inches",
   "w": 916,
   "h": 1186
  }
 ],
 "tray-28": [
  {
   "asin": "B0CG5WSTMC",
   "title": "5 Bunches Cotton Stems, Natural Cotton Flowers with Birch Branch",
   "w": 1152,
   "h": 1151
  },
  {
   "asin": "B0CKPJSQJW",
   "title": "Wenqik 16 Pcs Winter Wooden Snowflake Tabletop Decor",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-29": [
  {
   "asin": "B08QW8GWVR",
   "title": "Deco 79 Ceramic Circles Decorative Candle Lantern, White",
   "w": 880,
   "h": 1500
  },
  {
   "asin": "B0FP17R6N4",
   "title": "BEHIFL Christmas Gnome Ceramic Mug, 11oz",
   "w": 1248,
   "h": 1195
  }
 ],
 "tray-14": [
  {
   "asin": "B0F49D8ZCG",
   "title": "Holibanna Decorative Glass Cloche Candle Holder, Glass and Wood",
   "w": 744,
   "h": 1500
  },
  {
   "asin": "B0H6PNVLQW",
   "title": "6 Pcs Velvet Christmas Cone Trees, Red Green White Flocked",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-31": [
  {
   "asin": "B0DP29SH6F",
   "title": "AUMAYCO Brass Gold Candlestick Holders, Set of 3",
   "w": 1500,
   "h": 1125
  },
  {
   "asin": "B07F58TVHZ",
   "title": "Volens Round Gold Votive Candle Holders, Mercury Glass, Set of 12",
   "w": 1500,
   "h": 1336
  }
 ],
 "tray-13": [
  {
   "asin": "B0BVYLWMXD",
   "title": "VOHO Amber Glass Votive Candle Holders, Set of 12",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0BRVB45DL",
   "title": "Brass Taper Candle Holders, Set of 3 Antique Brass Finish",
   "w": 1464,
   "h": 1436
  }
 ],
 "tray-16": [
  {
   "asin": "B0HF8361MP",
   "title": "10 Strands Pre-Strung Christmas Paper Star Garland",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CNRX8PKT",
   "title": "Rustic Galvanized Metal Tin House Tea Light Votive Candle Holder",
   "w": 938,
   "h": 1276
  }
 ],
 "tray-12": [
  {
   "asin": "B0F748YF7H",
   "title": "Gold Christmas Reindeer Decor, Set of 3 Resin Standing Deer Figurines",
   "w": 1500,
   "h": 928
  },
  {
   "asin": "B0FYNSKQV1",
   "title": "Vintage Winter Pictures Snowy Forest, Small Framed Art 8\"x10\"",
   "w": 1080,
   "h": 1500
  }
 ],
 "tray-35": [
  {
   "asin": "B0CC5T95SQ",
   "title": "DN DECONATION 2Pcs Black Reindeer Figurine Decoration, Resin Deer Statues",
   "w": 1442,
   "h": 1432
  },
  {
   "asin": "B0CLG6G492",
   "title": "Glasseam Gold Cylinder Vases for Centerpieces, 6 Mercury Glass Vase Set",
   "w": 1500,
   "h": 1488
  }
 ],
 "tray-37": [
  {
   "asin": "B0CRDJ1ZGC",
   "title": "DECRZPB Ceramic Ornament White Deer, Porcelain Figurine",
   "w": 355,
   "h": 355
  },
  {
   "asin": "B0D6RM3MSB",
   "title": "JETEHO Set of 3 White Ceramic Christmas Trees that Light Up",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-15": [
  {
   "asin": "B0C9892H1X",
   "title": "Mini White Christmas Tree, Small Flocked Pre-Lit Tabletop Tree",
   "w": 1001,
   "h": 1001
  },
  {
   "asin": "B0H7B68RDK",
   "title": "Birch Logs, 40pcs Decorative Dried Wood Vase Filler",
   "w": 1074,
   "h": 1187
  }
 ],
 "tray-03": [
  {
   "asin": "B00UKYW0E0",
   "title": "Deco 79 Mango Wood Turned Pillar Candle Stand, Set of 3",
   "w": 1489,
   "h": 1500
  },
  {
   "asin": "B0BFWRNRYN",
   "title": "Alipis 12Pcs White Glitter Poinsettia Picks for Christmas Tree",
   "w": 1267,
   "h": 1276
  }
 ],
 "tray-36": [
  {
   "asin": "B08QCTJTCG",
   "title": "CVHOMEDECO Wood Grain Beads Garland with Tassels, Light Tan",
   "w": 1392,
   "h": 1500
  },
  {
   "asin": "B0GGYV9636",
   "title": "GarDream White Ceramic Vase with Handle, 8.5 Inch Farmhouse Pitcher",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-19": [
  {
   "asin": "B0D9Y3VMY8",
   "title": "Decorative Coffee Table Books, Set of 3, Real Pages",
   "w": 1500,
   "h": 1497
  },
  {
   "asin": "B0B9CLPCFN",
   "title": "FANDOS Wooden Dough Bowl for Decor, 17¾ in Hand Carved",
   "w": 1500,
   "h": 1112
  }
 ],
 "tray-20": [
  {
   "asin": "B0BCXH5MD4",
   "title": "Set of 3 Decorative Books for Home, XL Coffee Table Books",
   "w": 1500,
   "h": 1263
  },
  {
   "asin": "B0B8NZB5S3",
   "title": "Mie Creations 16'' Large Wooden Dough Bowl for Decor",
   "w": 1500,
   "h": 684
  }
 ],
 "tray-21": [
  {
   "asin": "B0BNKTVBRQ",
   "title": "VaryFloral 10Pcs White Fake Tulips with Stems",
   "w": 1371,
   "h": 1500
  },
  {
   "asin": "B0B2W61Z9B",
   "title": "Kedtui Taper Candles, 10 inch Dripless, Set of 24 White",
   "w": 1492,
   "h": 1432
  }
 ],
 "tray-34": [
  {
   "asin": "B0CJ4RPVXB",
   "title": "FACINOC Dusty Pink Rose Artificial Flowers with Stems, Bulk",
   "w": 1500,
   "h": 1490
  },
  {
   "asin": "B09R1PNTTR",
   "title": "INFTYLE Glass Diffuser Bottles Set of 5, Clear Empty with Reeds",
   "w": 1492,
   "h": 1500
  }
 ],
 "tray-30": [
  {
   "asin": "B0D1V8XC8W",
   "title": "120 Pcs Mixed Artificial Eucalyptus Leaves Stems Bulk",
   "w": 1500,
   "h": 1489
  },
  {
   "asin": "B0CVZ9FJV5",
   "title": "Decorative Ceramic Jar with Lid, Apothecary Canister",
   "w": 1500,
   "h": 1500
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Start Small With a Mini Tree and a Candle",
  "paras": [
   "If you have never styled a tray, begin here.",
   "A round woven tray holds a little potted fir, a big jar candle, and two white ceramic pieces, a tree and a house, all set against a cream sofa.",
   "Everything sits close together, so the group reads as a single idea instead of scattered objects.",
   "Keep the tree shorter than the candle jar and the flame stays the star."
  ],
  "key": "tray-01"
 },
 {
  "n": 2,
  "title": "Tuck a Pinecone Tray Beside the Sofa",
  "paras": [
   "The best tray is the one within arm's reach.",
   "A small wooden tray on the sofa cushions holds a cluster of pinecones and a single pillar candle, next to knit and plaid pillows.",
   "It takes two minutes and uses things most of us already have.",
   "Lay the pinecones around the candle at different angles so they look gathered, not lined up."
  ],
  "key": "tray-22"
 },
 {
  "n": 3,
  "title": "Heap Pinecones and Clementines in a Bowl",
  "paras": [
   "Sometimes a bowl does the work of a whole tray.",
   "This one is filled with large pinecones and bright clementines resting on a bed of cedar sprigs.",
   "The orange pops against all that brown, and the scent is a bonus.",
   "It slips onto a console, a kitchen counter or a dining table without needing anything else."
  ],
  "key": "tray-25"
 },
 {
  "n": 4,
  "title": "Dry Orange Slices on a Dark Wood Tray",
  "paras": [
   "Dried citrus looks like winter and smells like it too.",
   "Here a curved dark tray holds a ring of orange slices, a jar stuffed with cinnamon sticks tied in twine, a small bell and a white candle.",
   "The warm tones glow against the deep wood.",
   "Bake your own slices low and slow, or buy a bag and save the afternoon."
  ],
  "key": "tray-17"
 },
 {
  "n": 5,
  "title": "Build on a Log Slice With Oranges and Spice",
  "paras": [
   "A thick slice of log makes a base with built-in character.",
   "This one carries a ribbed white candle ringed with orange slices, cinnamon sticks, walnuts, star anise and sprigs of greenery, finished with a burgundy velvet bow.",
   "Every piece is natural, so the look feels foraged rather than bought.",
   "Tuck in a few berries for a little extra color."
  ],
  "key": "tray-18"
 },
 {
  "n": 6,
  "title": "Create a Mossy Woodland Scene",
  "paras": [
   "Not every winter tray has to say Christmas.",
   "A rough-edged wood slice here is covered in moss, with a stag, two rabbits and a small bunny in front of a bottle brush tree, plus pinecones and pine sprigs.",
   "The result looks like a forest floor in miniature.",
   "Add figures in odd numbers, and let a couple peek out from behind the greenery."
  ],
  "key": "tray-10"
 },
 {
  "n": 7,
  "title": "Fill a Rustic Crate With Frosted Branches",
  "paras": [
   "A weathered crate is a tray with a story.",
   "Inside this one, tall glass hurricanes hold white candles, pale willow branches reach upward, and frosted trees and little moss balls fill the corners.",
   "The palette stays soft gray and white, which suits a quiet living room.",
   "Lift the candles with glass so the branches have room to breathe."
  ],
  "key": "tray-04"
 },
 {
  "n": 8,
  "title": "Plant a Tiny Village in a Pale Wood Tray",
  "paras": [
   "A tray can become a snowy landscape.",
   "Pale wood frames a bed of faux snow here, with glowing ceramic houses, frosted trees, pinecones and a few red berries scattered between.",
   "The tiny windows lit from inside do most of the magic.",
   "Vary the sizes of the houses and trees so the scene has real depth."
  ],
  "key": "tray-05"
 },
 {
  "n": 9,
  "title": "Set a Glowing Village on the Kitchen Island",
  "paras": [
   "Put the village where you will see it all day.",
   "On this marble island, two white houses glow beside flocked trees, pinecones and red berries inside a washed-gray tray, with winter light coming in behind.",
   "Stone makes a cool backdrop that lets the warm windows stand out.",
   "A strip of faux snow under the houses ties it together."
  ],
  "key": "tray-06"
 },
 {
  "n": 10,
  "title": "Bring In a Gingerbread House",
  "paras": [
   "A gingerbread-style house is a sweet focal point that never gets stale.",
   "This one is a ceramic cottage with frosted rooflines and a pretty round window, set on a light tray next to a candle in a jar, a tiny white tree and a vase of greenery and blossoms.",
   "Keep the colors pale and let the house carry the detail.",
   "It works just as well on a coffee table as a counter."
  ],
  "key": "tray-09"
 },
 {
  "n": 11,
  "title": "Light Candles in Turned Holders and Trees",
  "paras": [
   "This tray mixes warm light with a little sparkle.",
   "A round wooden tray holds candles in turned candlesticks, a small village house, flocked and green bottle brush trees, gold and bronze ornaments and sprigs of eucalyptus.",
   "The candlesticks add height, while the trees keep the eye moving.",
   "Tuck in a string of tiny lights for a soft glow after dark."
  ],
  "key": "tray-11"
 },
 {
  "n": 12,
  "title": "Pile Red Ornaments Into a Jar",
  "paras": [
   "Bulk ornaments look better when they have a home.",
   "A tall clear jar is packed with red balls and topped with berry stems, while white ceramic houses and soft trees surround it on a round wooden tray.",
   "The glass lets color show from every side.",
   "It is an easy fix for a bag of ornaments that never made it onto the tree."
  ],
  "key": "tray-23"
 },
 {
  "n": 13,
  "title": "Swap in Wicker Trees and Red Berries",
  "paras": [
   "Woven trees feel warmer than flocked ones.",
   "Two wicker cones stand on this round tray beside a cream vase of red berry branches and a candle in a red glass holder, with holly leaves around the base.",
   "The red keeps the palette festive without heavy ornaments.",
   "It fits a kitchen with wood cabinets and neutral counters."
  ],
  "key": "tray-24"
 },
 {
  "n": 14,
  "title": "Make a Cocoa Tray With a Glowing House",
  "paras": [
   "Cocoa deserves a setup.",
   "A round wooden tray with handles holds a mug of cocoa topped with marshmallows, a lit white house, a candle, pinecones, star anise and a small glass vase of frosted greenery.",
   "The mug turns the whole arrangement into an invitation to sit.",
   "Set it on a woven mat to protect the table."
  ],
  "key": "tray-02"
 },
 {
  "n": 15,
  "title": "Serve Cocoa and Cookies on a Long Wood Tray",
  "paras": [
   "Some trays should be used.",
   "This long dark tray with iron handles carries two mugs of cocoa, bowls of whipped cream and marshmallows, candy canes, chocolate chip cookies and cinnamon sticks.",
   "Everything is within reach, so guests can help themselves.",
   "Replace the cookies whenever they run low and the display refreshes itself."
  ],
  "key": "tray-32"
 },
 {
  "n": 16,
  "title": "Arrange a Round Board of Cookies and Treats",
  "paras": [
   "Treats can be part of the decor.",
   "A round wooden board is dotted with cookies, snowflake pretzels, marshmallows, nuts, chocolate candies and a candy cane, with greenery and ornaments creeping in at the edges.",
   "Keep like with like, so the colors form little groups.",
   "Make it just before guests arrive and it doubles as a centerpiece."
  ],
  "key": "tray-33"
 },
 {
  "n": 17,
  "title": "Turn a Tiered Tray Into a Cocoa Bar",
  "paras": [
   "A tiered stand gives cocoa fixings a proper address.",
   "Two white tiers hold a red Christmas mug, a coffee sign, a hot cocoa bar chalkboard, a jar of marshmallows, candy canes, a snowman and a gingerbread cookie.",
   "Subway tile behind it makes the reds stand out.",
   "Fill the jars with real supplies and it works as well as it looks."
  ],
  "key": "tray-07"
 },
 {
  "n": 18,
  "title": "Stack Cocoa Jars on a Tiered Stand",
  "paras": [
   "Gift tags make a tray feel personal.",
   "Three tiers hold jars of cocoa mix and marshmallows with plaid ribbons, striped straws, mugs and handwritten tags, with fresh greens and pinecones tucked between.",
   "It looks ready for a party on a kitchen island.",
   "Guests can take a jar home when they leave."
  ],
  "key": "tray-08"
 },
 {
  "n": 19,
  "title": "Go Black and White With a Gnome",
  "paras": [
   "Graphic black and white is a fun break from red and green.",
   "A tiered tray carries a plush gnome in a plaid hat, wood blocks lettered with winter phrases, a snowflake or two, a cocoa canister and a jar candle, with a beaded garland and a checkered cloth below.",
   "The gnome gives it personality.",
   "Repeat the checks and snowflakes so it feels planned."
  ],
  "key": "tray-26"
 },
 {
  "n": 20,
  "title": "Layer a Snowman Tray",
  "paras": [
   "More is more on a playful tier.",
   "This stand is packed with wooden snowmen, trees and snowflakes, black and white beads, plaid ribbons and little signs with winter phrases.",
   "The strict palette stops it from looking messy.",
   "It reads as winter rather than Christmas, so it can stay up into January."
  ],
  "key": "tray-27"
 },
 {
  "n": 21,
  "title": "Add Cotton Stems to a Tiered Tray",
  "paras": [
   "Cotton stems bring a soft, field-grown feel.",
   "Two white tiers here hold greenery with cotton bolls, black and white wood beads, a snowflake block, a warm winter sign, a glass candle and pinecones in a bowl.",
   "The palette stays cream, black and natural.",
   "It suits a minimalist kitchen better than bright reds."
  ],
  "key": "tray-28"
 },
 {
  "n": 22,
  "title": "Mix a Lantern, Birdhouse and Gnome Mug",
  "paras": [
   "Mismatched pieces can still feel cohesive.",
   "On a white beaded tray sit a lattice lantern, a HOME birdhouse with wood beads, a knit gnome mug, a small tree and a candle on an old book.",
   "They share creamy tones, so nothing fights.",
   "Use pieces you already own and fill the gaps with a striped towel."
  ],
  "key": "tray-29"
 },
 {
  "n": 23,
  "title": "Style Glass Cloches With Velvet Trees",
  "paras": [
   "Cloches make candles feel like keepsakes.",
   "Two glass domes cover pillar candles on a round gold tray, surrounded by velvet cone trees in green, burgundy and gold, plus ornaments and tiny lights.",
   "The paneled room behind it adds to the rich look.",
   "It suits a formal living room or a library."
  ],
  "key": "tray-14"
 },
 {
  "n": 24,
  "title": "Pair Brass Tapers With a Marble Tray",
  "paras": [
   "Brass and marble are a quietly grand pairing.",
   "Tall gold tapers rise from a marble-inset tray edged in gold, with a pillar candle, a gold-trimmed votive and a long swag of eucalyptus.",
   "The greens soften all that polish.",
   "Set it on a dining table and it needs nothing else."
  ],
  "key": "tray-31"
 },
 {
  "n": 25,
  "title": "Warm It Up With Amber, Copper and Brass",
  "paras": [
   "Winter colors do not have to be cold.",
   "A brass tray carries a terracotta vase of rust-orange blooms, tall cream candles in brass holders, amber glass pieces and a folded linen towel.",
   "The tones sit comfortably between autumn and winter.",
   "Mix metals in one family and it feels intentional."
  ],
  "key": "tray-13"
 },
 {
  "n": 26,
  "title": "Scatter Paper Stars on Silver",
  "paras": [
   "Paper stars add sparkle with no glitter.",
   "On this silver tray, a gray tin house lantern, a white pillar candle, a mercury glass votive and a tall candlestick are surrounded by pinecones, pine and folded white stars.",
   "The stars look best dropped casually.",
   "Use warm bulbs or real flames for the best glow."
  ],
  "key": "tray-16"
 },
 {
  "n": 27,
  "title": "Give a Gold Deer Some Framed Art",
  "paras": [
   "Add a little gallery energy to a tray.",
   "A reclining gold deer, a vase of pine and berries, an antique-style frame with a snowy landscape, and a brass candelabra sit on a round wooden tray.",
   "The art gives the arrangement height.",
   "Lean the frame instead of hanging it so it can move around."
  ],
  "key": "tray-12"
 },
 {
  "n": 28,
  "title": "Pair a Black Deer With Gold Glitter",
  "paras": [
   "Black and gold feels modern and festive.",
   "A matte black deer stands in front of a glittered gold vase of pine on a slim black tray, next to a lit candle in glass.",
   "The contrast makes each piece look sharper.",
   "It is ideal for a kitchen counter or console."
  ],
  "key": "tray-35"
 },
 {
  "n": 29,
  "title": "Gather a White Deer and a Ceramic Tree",
  "paras": [
   "White pieces look soft on warm wood.",
   "A resting deer with gold antlers and a carved ceramic tree sit on a round wooden tray, with a potted pine in a basket and a ring of garland.",
   "The finishes mix without clashing.",
   "Move the tray after the holidays and it still looks fresh."
  ],
  "key": "tray-37"
 },
 {
  "n": 30,
  "title": "Go Frosty and All White",
  "paras": [
   "White on white can be the loveliest winter palette.",
   "An octagonal whitewashed tray holds birch logs, flocked pinecones, glass votives, a scale-shaped white tree, pale pampas and branches, and a dusting of snow.",
   "The textures do the talking, not color.",
   "Because it feels like winter and not just Christmas, it can stay out all season."
  ],
  "key": "tray-15"
 },
 {
  "n": 31,
  "title": "Raise Pillar Candles on Wooden Candlesticks",
  "paras": [
   "Height changes everything.",
   "Two white pillar candles stand on turned wood candlesticks in a dark round tray, over a bed of pine boughs, pinecones and a frosty blue succulent.",
   "Botanical prints and a chunky white blanket sit behind.",
   "It works especially well in front of a bookshelf or gallery wall."
  ],
  "key": "tray-03"
 },
 {
  "n": 32,
  "title": "Weave in a Bead Garland and White Pitcher",
  "paras": [
   "Natural textures pair well.",
   "A dark woven tray holds a white pitcher with a frosted tree stem and wood beads with tassels, plus two small white houses.",
   "Let the tassels hang over the edge for movement.",
   "One tall stem is enough."
  ],
  "key": "tray-36"
 },
 {
  "n": 33,
  "title": "Stack Books and Candles on a Handled Tray",
  "paras": [
   "Books are a stylist's best friend.",
   "A round tray with rope handles holds a stack of books, two textured candles and a glass vase of leafy stems in front of a cream sofa.",
   "It looks calm and not at all seasonal, which means it lasts.",
   "Swap the stems for pine when you want it to feel more wintry."
  ],
  "key": "tray-19"
 },
 {
  "n": 34,
  "title": "Anchor a Coffee Table With Books and a Dough Bowl",
  "paras": [
   "A coffee table likes a few strong pieces.",
   "A pair of books, a carved wooden bowl, a speckled vase of greenery, a rattan tray and a stack of stone coasters share a round pale table here.",
   "Different heights keep it lively.",
   "Put in pinecones or ornaments whenever you want to change the season."
  ],
  "key": "tray-20"
 },
 {
  "n": 35,
  "title": "Bring a Tray to the Bedroom",
  "paras": [
   "Winter styling does not have to stay downstairs.",
   "A weathered wooden tray at the end of a bed holds a vase of white tulips, two candles and a folded knit blanket.",
   "Fresh flowers feel unexpected in winter.",
   "Add a cozy throw and the corner begs for a book."
  ],
  "key": "tray-21"
 },
 {
  "n": 36,
  "title": "Soften It With Roses and a Diffuser",
  "paras": [
   "Not everything needs to be Christmas.",
   "A woven rattan tray carries blush roses in a textured vase, a reed diffuser, a candle, a trinket dish and a stack of books.",
   "The soft pink and cream palette reads romantic and calm.",
   "It works well past the holidays."
  ],
  "key": "tray-34"
 },
 {
  "n": 37,
  "title": "Try a Vanity Tray With Eucalyptus",
  "paras": [
   "Bathrooms and vanities deserve a tray too.",
   "A white beaded tray holds a vase of eucalyptus stems and a ceramic jar with makeup brushes, set on marble.",
   "The greens feel fresh against all that white.",
   "It keeps small things corralled and still looks decorative."
  ],
  "key": "tray-30"
 }
];

function productGrid(key) {
  const products = PRODUCTS[key] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: PRODUCT_DIR, src: item.asin, alt: esc(item.title), w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${esc(item.title)}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

function photo(key) {
  const p = PHOTOS[key];
  return `<figure>
      ${picture({ dir: PHOTO_DIR, src: key, alt: esc(p.alt), w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.pin}" target="_blank" rel="nofollow noopener">Pinterest &mdash; ${esc(p.label)}</a></figcaption>
    </figure>
    ${productGrid(key)}`;
}

function ideaBlock(idea) {
  return `<h2>${idea.n}. ${idea.title}</h2>
${idea.paras.map((t) => `<p>${t}</p>`).join("\n")}
${photo(idea.key)}`;
}

const body = `
<p>A styled tray is the quickest way to make a coffee table, kitchen island or console feel ready for winter.</p>
<p>It is a small, contained project, so there is no need to redecorate a whole room.</p>
<p>The trays that work best are built around one focal piece, such as a candle, a little village or a vase of greenery, with smaller details layered around it.</p>
<p>These 37 ideas cover rustic wood, soft white, glowing gold and a bit of whimsy, so there is a look here for nearly any home.</p>
${photo("hero")}

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>How to Build Your Own Winter Tray</h2>
<p>You do not need to copy any of these exactly.</p>
<p>Borrow a color palette from one, a focal point from another, and make it yours.</p>
<p>Start with the tray itself. Wood, metal and woven trays all set a different tone, so choose the base before anything else.</p>
<p>Then mix heights and textures: something tall like a candle or branch, something low like pinecones or ornaments, and one soft element like greenery or ribbon.</p>
<p>Keep it simple enough that you will actually enjoy looking at it all season. A tray you love beats one that is merely perfect.</p>
`;

module.exports = { body };
