// Body content for "33 Vintage Christmas Decor Ideas With Nostalgic Charm".
// Converted from the Dwelling Dream "33 Festive Vintage Christmas Decor
// Ideas" source: all text rewritten from scratch and the ideas regrouped
// (trees, mantels, villages, entry and outdoors, mirrors and stairs,
// retro kitchen, tables and gifts). Photos credited to their Pinterest pins;
// the supplied Amazon product pair stays under each photo. Ends on text.
// Rewritten 2026-10-25 in an advice-led voice (styling rules, the why behind
// each look, practical tips) after the first draft read like photo captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "festive-vintage-christmas-decor-ideas";
const PRODUCT_DIR = "festive-vintage-christmas-decor-ideas-products";

const PHOTOS = {
 "vintage-01": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/4599301195540289600/",
  "label": "Retro Glass Ornaments on a Christmas Tree",
  "alt": "Close-up of a Christmas tree covered in colorful glass ball ornaments and warm string lights"
 },
 "vintage-02": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/4601834481245553920/",
  "label": "Mercury Glass Ornaments on a Tree",
  "alt": "Christmas tree trimmed with vintage mercury glass ornaments in silver and cream"
 },
 "vintage-24": {
  "w": 687,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/339318153205308935/",
  "label": "Wooden Bowl of Vintage Ornaments",
  "alt": "Wooden bowl filled with vintage mercury glass ornaments and small figurines"
 },
 "vintage-03": {
  "w": 2000,
  "h": 2800,
  "pin": "https://www.pinterest.com/pin/4605493644193052736/",
  "label": "Brass Candlesticks and Garland Mantel",
  "alt": "Fireplace mantel with antique brass candlesticks, candles, and fresh greenery garland"
 },
 "vintage-04": {
  "w": 923,
  "h": 1450,
  "pin": "https://www.pinterest.com/pin/7177680651768632/",
  "label": "Red and Green Mantel With a Christmas Sign",
  "alt": "Red and green Christmas mantel with a wooden Christmas sign, stockings, and bottle brush trees"
 },
 "vintage-05": {
  "w": 737,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/72550243992493976/",
  "label": "Nutcrackers and Candles on a Mantel",
  "alt": "Mantel display with wooden nutcracker figurines, candles, and pine greenery"
 },
 "vintage-33": {
  "w": 3584,
  "h": 4800,
  "pin": "https://www.pinterest.com/pin/326581410507012242/",
  "label": "Vintage Bookshelf Christmas Display",
  "alt": "Vintage bookshelf decorated with a small lit ceramic tree, candy tins, and holiday cards"
 },
 "vintage-27": {
  "w": 896,
  "h": 1280,
  "pin": "https://www.pinterest.com/pin/957296464559191315/",
  "label": "Vintage Santa Figurines on Crates",
  "alt": "Collection of vintage Santa Claus figurines displayed on wooden crates with candlelight"
 },
 "vintage-06": {
  "w": 768,
  "h": 1229,
  "pin": "https://www.pinterest.com/pin/1113374339162061074/",
  "label": "Lit Christmas Village on a Console",
  "alt": "Tabletop Christmas village display with lit houses and a lit tree surrounded by snow"
 },
 "vintage-07": {
  "w": 800,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/870039221757881811/",
  "label": "Snowy Village on a Sideboard",
  "alt": "Christmas village display of snowy wooden houses on a windowsill"
 },
 "vintage-23": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/210684088813367864/",
  "label": "Wooden Village Houses on a Window Ledge",
  "alt": "Small wooden village houses with candles on a windowsill framed by lace curtains"
 },
 "vintage-30": {
  "w": 448,
  "h": 799,
  "pin": "https://www.pinterest.com/pin/460563499414983966/",
  "label": "Mini Village on a Bedroom Dresser",
  "alt": "Cottage bedroom with a lit mini Christmas village on the dresser and plaid pillow"
 },
 "vintage-20": {
  "w": 667,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/3096293491540868/",
  "label": "Bottle Brush Trees on a Cake Stand",
  "alt": "Bottle brush Christmas trees and vintage ornaments displayed on a green cake stand"
 },
 "vintage-21": {
  "w": 570,
  "h": 763,
  "pin": "https://www.pinterest.com/pin/44965696269930602/",
  "label": "Bottle Brush Trees in Vintage Crocks",
  "alt": "Bottle brush Christmas trees in vintage ceramic crocks on a wooden table"
 },
 "vintage-09": {
  "w": 1170,
  "h": 1378,
  "pin": "https://www.pinterest.com/pin/1102959765024968147/",
  "label": "Vintage Sled With a Velvet Bow",
  "alt": "Vintage wooden sled decorated with a red velvet bow and pine greenery by a front door"
 },
 "vintage-10": {
  "w": 736,
  "h": 1307,
  "pin": "https://www.pinterest.com/pin/302374562506219795/",
  "label": "Entryway Sled With Bells and Gifts",
  "alt": "Entryway wooden sled decorated with brass bells, greenery, and gift boxes"
 },
 "vintage-31": {
  "w": 574,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/960040845587697101/",
  "label": "Ornament-Filled Porch Lantern",
  "alt": "Lantern filled with red, green, and gold ornaments and string lights on a porch"
 },
 "vintage-16": {
  "w": 853,
  "h": 1280,
  "pin": "https://www.pinterest.com/pin/66287425762764306/",
  "label": "Jingle Bells on Jute Rope",
  "alt": "Close-up of rustic jingle bells tied with jute rope hanging from pine garland"
 },
 "vintage-15": {
  "w": 683,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/517491813451067544/",
  "label": "Bell Wreath and Cone Trees",
  "alt": "Gold jingle bell wreath hanging above bottle brush trees and pinecones"
 },
 "vintage-14": {
  "w": 832,
  "h": 1248,
  "pin": "https://www.pinterest.com/pin/643662971789127538/",
  "label": "Mirror Wrapped in Greenery",
  "alt": "Mirror wrapped in greenery garland with gold ribbon and berries"
 },
 "vintage-17": {
  "w": 564,
  "h": 846,
  "pin": "https://www.pinterest.com/pin/1196337403592403/",
  "label": "Arched Mirror With Greenery Swag",
  "alt": "Arched mirror decorated with greenery garland and a burgundy ribbon bow"
 },
 "vintage-25": {
  "w": 508,
  "h": 903,
  "pin": "https://www.pinterest.com/pin/141863457008781195/",
  "label": "Garland With Oranges on the Staircase",
  "alt": "Staircase railing garland decorated with dried orange slices and a burgundy ribbon"
 },
 "vintage-26": {
  "w": 1696,
  "h": 2528,
  "pin": "https://www.pinterest.com/pin/14847873768363622/",
  "label": "Garland and Lanterns on a Staircase",
  "alt": "Grand staircase decorated with garland and lit lanterns on every step"
 },
 "vintage-12": {
  "w": 576,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/991284567979103736/",
  "label": "Mint and Red Christmas Kitchen",
  "alt": "Red and green Christmas kitchen shelf decor with canisters, dishes, and garland"
 },
 "vintage-13": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/1091630397206655646/",
  "label": "Santa and Snowman Magnets on a Retro Fridge",
  "alt": "Vintage Santa and snowman magnets covering a mint green refrigerator"
 },
 "vintage-29": {
  "w": 500,
  "h": 750,
  "pin": "https://www.pinterest.com/pin/4593390213861907968/",
  "label": "Retro Christmas Tins and Mugs",
  "alt": "Retro Christmas mugs and tins filled with ornaments on a coffee table"
 },
 "vintage-11": {
  "w": 675,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/994240055232024266/",
  "label": "Velvet Monogrammed Stockings",
  "alt": "Three velvet monogrammed Christmas stockings in burgundy, green, and navy hanging on a mantel"
 },
 "vintage-08": {
  "w": 819,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/196258496258399126/",
  "label": "Vintage Postcard Garland",
  "alt": "Vintage Christmas postcards clipped to a twine garland with wooden clothespins"
 },
 "vintage-18": {
  "w": 576,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/1136384918508622854/",
  "label": "Vintage Floral Table Setting",
  "alt": "Vintage floral table setting with dried orange slices, candles, and greenery"
 },
 "vintage-19": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/323485185748364446/",
  "label": "Tartan Plaid Christmas Table",
  "alt": "Tartan plaid Christmas table setting with gold flatware and candlesticks"
 },
 "vintage-28": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/495677502754513328/",
  "label": "Navy Tartan Table With Crystal",
  "alt": "Tartan plaid table setting with gold-rimmed crystal wine glasses and candles"
 },
 "vintage-22": {
  "w": 736,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/492649953919398/",
  "label": "Crates Filled With Ornaments",
  "alt": "Stacked wooden crates filled with red and gold Christmas ornaments and pine branches"
 },
 "vintage-32": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/83035186878967595/",
  "label": "Kraft Wrapped Gifts With Velvet Ribbon",
  "alt": "Gifts wrapped in kraft paper with burgundy velvet ribbon bows and greenery"
 },
 "hero": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/4599301195540289600/",
  "label": "Retro Glass Ornaments on a Christmas Tree",
  "alt": "Close-up of a Christmas tree covered in colorful glass ball ornaments and warm string lights"
 }
};

const PRODUCTS = {
 "vintage-01": [
  {
   "asin": "B01N02LR3W",
   "title": "Kurt S. Adler 0.78-Inch Glitter Glass Ball Ornaments, 25 Piece Set",
   "w": 950,
   "h": 854
  },
  {
   "asin": "B018RUJXHU",
   "title": "echosari 33Ft 100 LED Battery Powered String Lights with Remote, Warm White",
   "w": 1500,
   "h": 1500
  }
 ],
 "vintage-02": [
  {
   "asin": "B0H4YKHMLL",
   "title": "Vintage Silver Mercury Glass Christmas Ornaments, Assorted Shapes, 9 Pcs",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B005MM7U0E",
   "title": "Wired Traditional Red with Gold Edges Velvet Christmas Ribbon, 2.5 in, 50 Yards",
   "w": 276,
   "h": 355
  }
 ],
 "vintage-24": [
  {
   "asin": "B0B9CLPCFN",
   "title": "FANDOS Wooden Dough Bowl for Decor, 17.75 Inch Hand Carved",
   "w": 1500,
   "h": 1112
  },
  {
   "asin": "B0H4YKHMLL",
   "title": "Vintage Silver Mercury Glass Christmas Ornaments, Assorted Shapes, 9 Pcs",
   "w": 1500,
   "h": 1500
  }
 ],
 "vintage-03": [
  {
   "asin": "B0D6XT8YF3",
   "title": "Antique Brass Iron Taper Candle Holders, Set of 3",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B08HS8QPC1",
   "title": "DearHouse 6FT Berry Pine Christmas Garland with Pinecones",
   "w": 1500,
   "h": 1280
  }
 ],
 "vintage-04": [
  {
   "asin": "B0HFCDQ6GL",
   "title": "Wooden Christmas Tree Sign for Mantel, Shelf and Tabletop",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0GVN22LPV",
   "title": "PineSpark 9ft Flocked Pre-Lit Christmas Garland with Lights",
   "w": 1360,
   "h": 1312
  }
 ],
 "vintage-05": [
  {
   "asin": "B09N77FNPY",
   "title": "SurpriseSeptember 4 Pcs Traditional Wooden Nutcracker Soldiers, 12 Inch",
   "w": 1500,
   "h": 1220
  },
  {
   "asin": "B0CSXW2H13",
   "title": "Unscented White Pillar Candles, 6 Pack, Dripless and Smokeless",
   "w": 1500,
   "h": 1500
  }
 ],
 "vintage-33": [
  {
   "asin": "B0BG99MLNR",
   "title": "Small Vintage Ceramic Christmas Tree with Multi-Color Lights, 6.75 Inch",
   "w": 803,
   "h": 1500
  },
  {
   "asin": "B0H8YFFQ7T",
   "title": "Ysqool 2 Pcs Vintage Resin Santa Claus Figurines",
   "w": 1500,
   "h": 1430
  }
 ],
 "vintage-27": [
  {
   "asin": "B0H8YFFQ7T",
   "title": "Ysqool 2 Pcs Vintage Resin Santa Claus Figurines",
   "w": 1500,
   "h": 1430
  },
  {
   "asin": "B0CSXW2H13",
   "title": "Unscented White Pillar Candles, 6 Pack, Dripless and Smokeless",
   "w": 1500,
   "h": 1500
  }
 ],
 "vintage-06": [
  {
   "asin": "B0CWBT5HYS",
   "title": "Department 56 Christmas in the City 87 West 56th Street Town House, Lit",
   "w": 934,
   "h": 1500
  },
  {
   "asin": "B07WVNX8GX",
   "title": "LOVEINUSA 40 Pack Mini Bottle Brush Christmas Trees, 5 Sizes",
   "w": 1500,
   "h": 1174
  }
 ],
 "vintage-07": [
  {
   "asin": "B0CWBPX8R9",
   "title": "Department 56 Original Snow Village 1056 Christmas Lane House, Lit",
   "w": 1500,
   "h": 1072
  },
  {
   "asin": "B0DJKW9MDL",
   "title": "30 Pcs Mini Bottle Brush Christmas Trees with Wood Base",
   "w": 1500,
   "h": 1290
  }
 ],
 "vintage-23": [
  {
   "asin": "B0FGXQNWJ7",
   "title": "Hiboom 24 Pcs DIY Christmas Village Wood Houses and Church",
   "w": 1500,
   "h": 1485
  },
  {
   "asin": "B018RUJXHU",
   "title": "echosari 33Ft 100 LED Battery Powered String Lights with Remote, Warm White",
   "w": 1500,
   "h": 1500
  }
 ],
 "vintage-30": [
  {
   "asin": "B0BB1JM547",
   "title": "CARRIE HOME Red Christmas Tartan Plaid Pillow Covers, Set of 2, 18x18",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CWBT5HYS",
   "title": "Department 56 Christmas in the City 87 West 56th Street Town House, Lit",
   "w": 934,
   "h": 1500
  }
 ],
 "vintage-20": [
  {
   "asin": "B0CB1CJ271",
   "title": "2 Pcs 8 Inch Round Gold Mirror Top Cake Display Stand",
   "w": 1500,
   "h": 830
  },
  {
   "asin": "B0DJKW9MDL",
   "title": "30 Pcs Mini Bottle Brush Christmas Trees with Wood Base",
   "w": 1500,
   "h": 1290
  }
 ],
 "vintage-21": [
  {
   "asin": "B07D9N9K21",
   "title": "Farmhouse Sweet Brown on Cream Ceramic Stoneware Crock, 9 x 6",
   "w": 494,
   "h": 1231
  },
  {
   "asin": "B07WVNX8GX",
   "title": "LOVEINUSA 40 Pack Mini Bottle Brush Christmas Trees, 5 Sizes",
   "w": 1500,
   "h": 1174
  }
 ],
 "vintage-09": [
  {
   "asin": "B08LLF68WD",
   "title": "Grace Home Rustic Wooden Sled with Hope Lettering, 16.5 Inch",
   "w": 474,
   "h": 1155
  },
  {
   "asin": "B002Y1S7JO",
   "title": "Set of 3 Wired Red Velvet Christmas Bows",
   "w": 1447,
   "h": 1500
  }
 ],
 "vintage-10": [
  {
   "asin": "B076TCM1FJ",
   "title": "YK Decor Wood Sleigh Hanging Christmas Decoration, 10x19 Inch",
   "w": 566,
   "h": 1489
  },
  {
   "asin": "B0CJ6KYJBT",
   "title": "Rustic Metal Cow Bells Set, 4 Hanging Bells with Jute Rope",
   "w": 1350,
   "h": 1500
  }
 ],
 "vintage-31": [
  {
   "asin": "B0CGLQZCHC",
   "title": "N&T NIETING 14 Inch Metal Vintage Lantern with LED Light, Battery Powered",
   "w": 1099,
   "h": 1500
  },
  {
   "asin": "B0FRSGW4FD",
   "title": "100 Pack Red and Gold Christmas Ball Ornaments, Hand-Painted Shatterproof",
   "w": 1446,
   "h": 1434
  }
 ],
 "vintage-16": [
  {
   "asin": "B0D9JZLWMK",
   "title": "Mie Creations Set of 20 Rustic Vintage Tin Bells on Jute Rope",
   "w": 1080,
   "h": 1080
  },
  {
   "asin": "B08JH17X9J",
   "title": "Artiflr 6 Feet Christmas Pine Garland with Berries and Frosted Pinecones",
   "w": 1496,
   "h": 1413
  }
 ],
 "vintage-15": [
  {
   "asin": "B0HH8ZDRLQ",
   "title": "Vintage Gold Christmas Bells on Jute Rope, Wreath Door Decor",
   "w": 1326,
   "h": 1500
  },
  {
   "asin": "B0B5Y2PTG7",
   "title": "Bottle Brush Christmas Trees, 5 Sizes, with Snow and Wooden Base",
   "w": 1375,
   "h": 1277
  }
 ],
 "vintage-14": [
  {
   "asin": "B0GWD6R2QG",
   "title": "9FT Pre-Lit Cedar Christmas Garland with Lights and Ornaments",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0DG2QSX14",
   "title": "Aridantrp Gold Glitter Ribbon for Christmas Tree, 1.5 Inch, 10 Yards",
   "w": 1500,
   "h": 1423
  }
 ],
 "vintage-17": [
  {
   "asin": "B0C9Y3QSTV",
   "title": "DINDOSAL Burgundy Velvet Wired Ribbon, 2.5 in, 10 Yards",
   "w": 1500,
   "h": 919
  },
  {
   "asin": "B0HDYHSZ32",
   "title": "2 Pack 6FT Artificial Pine Christmas Garland with Red Berries and Pine Cones",
   "w": 1500,
   "h": 1444
  }
 ],
 "vintage-25": [
  {
   "asin": "B0H41H6KNB",
   "title": "Norfolk Pine Christmas Garland for Mantle, 6 Ft, with Pinecones and Berries",
   "w": 1500,
   "h": 1322
  },
  {
   "asin": "B0CD5Z4S38",
   "title": "Liliful 60 Pcs Dried Orange Slices, Pine Cones and Cinnamon Sticks",
   "w": 1500,
   "h": 1500
  }
 ],
 "vintage-26": [
  {
   "asin": "B0CGLQZCHC",
   "title": "N&T NIETING 14 Inch Metal Vintage Lantern with LED Light, Battery Powered",
   "w": 1099,
   "h": 1500
  },
  {
   "asin": "B0DJX18NZ3",
   "title": "AOLHXY 9FT Snow Flocked Christmas Garland, Mountain Pine",
   "w": 1476,
   "h": 1418
  }
 ],
 "vintage-12": [
  {
   "asin": "B0DCBSVS37",
   "title": "JarThenaAMCS 3 Pcs Christmas Glass Storage Jars, Red White Candy Cane",
   "w": 1500,
   "h": 1338
  },
  {
   "asin": "B0DJC1F3T8",
   "title": "Native Fab Gingham Check Kitchen Towels, 4 Pack, Red Green White",
   "w": 1500,
   "h": 1238
  }
 ],
 "vintage-13": [
  {
   "asin": "B09JC226NV",
   "title": "Classic 16 Pcs Christmas Fridge Magnets, Santa Snowman Vintage",
   "w": 1500,
   "h": 1454
  },
  {
   "asin": "B0BFV5QY3M",
   "title": "Flutesan 16 Pcs Retro Christmas Fridge Magnets, Santa Snowman Bells",
   "w": 1492,
   "h": 1500
  }
 ],
 "vintage-29": [
  {
   "asin": "B0CKVBPKG4",
   "title": "Whaline 4 Pcs Vintage Christmas Mug Set, Santa Snowman, 12 oz",
   "w": 1498,
   "h": 1500
  },
  {
   "asin": "B0CFPRB32J",
   "title": "Luwint Tin Metal Storage Box, Vintage Decorative Case with Lid",
   "w": 1500,
   "h": 1043
  }
 ],
 "vintage-11": [
  {
   "asin": "B0DCSJFW7R",
   "title": "Cettkowns 21-Inch Monogrammed Christmas Stocking, Red Velvet, Letter M",
   "w": 977,
   "h": 1500
  },
  {
   "asin": "B0DK39D8P8",
   "title": "Prettybuy 19 Inch Personalized Monogram Christmas Stocking, Green Velvet",
   "w": 764,
   "h": 1344
  }
 ],
 "vintage-08": [
  {
   "asin": "B0C81FXJP6",
   "title": "80 Pcs Vintage Christmas Postcards, 4 x 6 in, 20 Designs",
   "w": 1500,
   "h": 1498
  },
  {
   "asin": "B07HWQBCQ6",
   "title": "Mini Wooden Clothespins with Jute Twine, 100 Pcs, 1.4 Inch",
   "w": 1384,
   "h": 1500
  }
 ],
 "vintage-18": [
  {
   "asin": "B0BV281X7N",
   "title": "Bicuzat Vintage Floral Ceramic Plates, Set of 4, 8 Inch",
   "w": 1444,
   "h": 1479
  },
  {
   "asin": "B0CD5Z4S38",
   "title": "Liliful 60 Pcs Dried Orange Slices, Pine Cones and Cinnamon Sticks",
   "w": 1500,
   "h": 1500
  }
 ],
 "vintage-19": [
  {
   "asin": "B0H99G6ZGB",
   "title": "Christmas Cotton Tablecloth, Red Tartan Plaid, 60 x 120 Inch",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CB1T4MSH",
   "title": "Jaye's Studio Royal Tartan Enameled Metal Napkin Rings, Set of 4",
   "w": 502,
   "h": 603
  }
 ],
 "vintage-28": [
  {
   "asin": "B09XZZVXQL",
   "title": "Gold Rim Stemless Crystal Wine Glasses, Set of 6, 18 oz",
   "w": 1035,
   "h": 1332
  },
  {
   "asin": "B0H99G6ZGB",
   "title": "Christmas Cotton Tablecloth, Red Tartan Plaid, 60 x 120 Inch",
   "w": 1500,
   "h": 1500
  }
 ],
 "vintage-22": [
  {
   "asin": "B0HF7X18V7",
   "title": "Extra Large Christmas Wooden Crate Set of 2, Holly Jolly Farmhouse",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0FRSGW4FD",
   "title": "100 Pack Red and Gold Christmas Ball Ornaments, Hand-Painted Shatterproof",
   "w": 1446,
   "h": 1434
  }
 ],
 "vintage-32": [
  {
   "asin": "B0C9Y1KDDM",
   "title": "MAYREEL 4 Inch Burgundy Crushed Velvet Ribbon Wired, 10 Yards",
   "w": 1500,
   "h": 1049
  },
  {
   "asin": "B07V7FR1RW",
   "title": "American Greetings Vintage Kraft Christmas Wrapping Paper, 4 Rolls",
   "w": 1500,
   "h": 1201
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Trim the Tree With Bulbs Your Grandmother Would Recognize",
  "paras": [
   "What makes a tree look vintage? Mostly the glass.",
   "Saturated reds, teals, greens and golds, with warm multicolor lights threaded through, take you straight to a 1960s living room. Modern trees tend to be coordinated. Old ones were gloriously mixed.",
   "So mix your finishes, shiny with matte and glitter, and your sizes, and hang the biggest balls low and near the trunk. One safety note: check any old light strings for frayed cords before plugging them in, or switch to LED."
  ],
  "key": "vintage-01",
  "_orig": [
   "What makes a tree look vintage? Mostly the glass.",
   "Saturated reds, teals, greens and golds, with warm multicolor lights threaded through, take you straight to a 1960s living room. Modern trees tend to be coordinated. Old ones were gloriously mixed.",
   "So mix your finishes, shiny with matte and glitter, and your sizes, and hang the biggest balls low and near the trunk.",
   "One safety note: check any old light strings for frayed cords before plugging them in, or switch to LED."
  ]
 },
 {
  "n": 2,
  "title": "Choose Mercury Glass for a Softer Shine",
  "paras": [
   "Real mercury glass was silvered on the inside, which is where that soft, aged shine comes from. Newer pieces copy the look at a fraction of the price.",
   "This tree wears silver and cream teardrops with a few deep red balls, and strands of tinsel tucked into the boughs.",
   "<p><strong>Quick tip:</strong> Hang the larger pieces nearer the trunk, where they catch the light and give the tree depth.</p>",
   "And tinsel goes on one strand at a time. Clumps look like a mistake."
  ],
  "key": "vintage-02",
  "_orig": [
   "Real mercury glass was silvered on the inside, which is where that soft, aged shine comes from. Newer pieces copy the look at a fraction of the price.",
   "This tree wears silver and cream teardrops with a few deep red balls, and strands of tinsel tucked into the boughs.",
   "Hang the larger pieces nearer the trunk, where they catch the light and give the tree depth.",
   "And tinsel goes on one strand at a time. Clumps look like a mistake."
  ]
 },
 {
  "n": 3,
  "title": "Fill a Dough Bowl With Old Ornaments",
  "paras": [
   "Not everything belongs on the tree. A well-worn wooden bowl holds silver, gold, green and red ornaments here, with a few tiny figurines, pine around the rim and a lit candle at the side. It sits on a farmhouse table where everyone will see it.",
   "Dough bowls are my favorite container for this because the shape does half the styling.",
   "Mix old ornaments with new ones so it doesn't look like a museum."
  ],
  "key": "vintage-24",
  "_orig": [
   "Not everything belongs on the tree.",
   "A well-worn wooden bowl holds silver, gold, green and red ornaments here, with a few tiny figurines, pine around the rim and a lit candle at the side. It sits on a farmhouse table where everyone will see it.",
   "Dough bowls are my favorite container for this because the shape does half the styling.",
   "Mix old ornaments with new ones so it doesn't look like a museum."
  ]
 },
 {
  "n": 4,
  "title": "Light Brass Candlesticks Under a Garland",
  "paras": [
   "Brass candlesticks are the cheapest way to make a mantel look inherited.",
   "Tall brass sticks with dark candles stand beneath a gilt mirror here, and a thick garland with red berries drapes across the mantel. Thrift shops sell them for a few dollars. A little polish does the rest. Use tapers in odd numbers, and choose dark red or forest green for an old-fashioned look.",
   "Never leave real flames near dry garland. LED tapers are a safe stand-in if the mantel is crowded."
  ],
  "key": "vintage-03",
  "_orig": [
   "Brass candlesticks are the cheapest way to make a mantel look inherited.",
   "Tall brass sticks with dark candles stand beneath a gilt mirror here, and a thick garland with red berries drapes across the mantel.",
   "Thrift shops sell them for a few dollars. A little polish does the rest. Use tapers in odd numbers, and choose dark red or forest green for an old-fashioned look.",
   "Never leave real flames near dry garland. LED tapers are a safe stand-in if the mantel is crowded."
  ]
 },
 {
  "n": 5,
  "title": "Hang the Sign Higher Than You Think",
  "paras": [
   "On a wide mantel, divide the wall into thirds.",
   "A script Christmas sign takes the center of this white paneled wall, with a small wreath on each side and a long garland beneath. Vintage-style stockings and a red throw on a nearby chair repeat the color.",
   "<ul><li>Hanging the sign a few inches higher than feels natural gives the whole display height.</li><li>Stockings need proper metal hooks. Adhesive ones always fall.</li></ul>"
  ],
  "key": "vintage-04",
  "_orig": [
   "On a wide mantel, divide the wall into thirds.",
   "A script Christmas sign takes the center of this white paneled wall, with a small wreath on each side and a long garland beneath. Vintage-style stockings and a red throw on a nearby chair repeat the color.",
   "Hanging the sign a few inches higher than feels natural gives the whole display height.",
   "Stockings need proper metal hooks. Adhesive ones always fall."
  ]
 },
 {
  "n": 6,
  "title": "Stagger Nutcrackers Like a Parade",
  "paras": [
   "<p><strong>Nutcrackers like company, but not a straight line.</strong> Two red-coated soldiers stand on this mantel among white candles, red berries and pine, with plaid ribbon trailing down the front.</p>",
   "<ul><li>Place them off-center and slightly staggered, so they look like they're marching, not guarding.</li><li>Let the ribbon tails fall at different lengths, and keep your candles shorter than the soldiers so no one is hidden.</li></ul>"
  ],
  "key": "vintage-05",
  "_orig": [
   "Nutcrackers like company, but not a straight line.",
   "Two red-coated soldiers stand on this mantel among white candles, red berries and pine, with plaid ribbon trailing down the front.",
   "Place them off-center and slightly staggered, so they look like they're marching, not guarding.",
   "Let the ribbon tails fall at different lengths, and keep your candles shorter than the soldiers so no one is hidden."
  ]
 },
 {
  "n": 7,
  "title": "Style an Old Cabinet Like a Holiday Shelf",
  "paras": [
   "Any shelf can become a display, and warm light is the trick. A small lit ceramic tree glows in the middle of this cream cabinet, surrounded by snow globes, peppermint tins, a snowman, a Santa and old holiday books.",
   "Group small things in threes and leave breathing room between groups. Stack the books spine-out in color order so the shelf looks edited."
  ],
  "key": "vintage-33",
  "_orig": [
   "Any shelf can become a display, and warm light is the trick.",
   "A small lit ceramic tree glows in the middle of this cream cabinet, surrounded by snow globes, peppermint tins, a snowman, a Santa and old holiday books.",
   "Group small things in threes and leave breathing room between groups.",
   "Stack the books spine-out in color order so the shelf looks edited."
  ]
 },
 {
  "n": 8,
  "title": "Display Your Collection Together",
  "paras": [
   "If you own a few vintage Santas, let them show off.",
   "Glossy Santas and snowmen crowd wooden crates here, set on lace doilies with tinsel, candy canes and bright baubles.",
   "The doilies are the secret. They make anything look inherited.",
   "Three figures are enough to count as a collection, and crates stack like steps, giving you heights for free."
  ],
  "key": "vintage-27",
  "_orig": [
   "If you own a few vintage Santas, let them show off.",
   "Glossy Santas and snowmen crowd wooden crates here, set on lace doilies with tinsel, candy canes and bright baubles.",
   "The doilies are the secret. They make anything look inherited.",
   "Three figures are enough to count as a collection, and crates stack like steps, giving you heights for free."
  ]
 },
 {
  "n": 9,
  "title": "Build a Village Like a Map",
  "paras": [
   "<p><strong>A village is the ultimate nostalgia project, and it's easier than it looks.</strong> Lit houses, a church, little skaters and a sparkling tree sit on snow along this rustic console.</p>",
   "Plan it like a map: a main street, a church, a pond, a hill. Place the tallest buildings at the back and the smallest in front.",
   "Hide cords under the batting, and plug it into a timer so the village lights up every evening on its own."
  ],
  "key": "vintage-06",
  "_orig": [
   "A village is the ultimate nostalgia project, and it's easier than it looks.",
   "Lit houses, a church, little skaters and a sparkling tree sit on snow along this rustic console.",
   "Plan it like a map: a main street, a church, a pond, a hill. Place the tallest buildings at the back and the smallest in front.",
   "Hide cords under the batting, and plug it into a timer so the village lights up every evening on its own."
  ]
 },
 {
  "n": 10,
  "title": "Build Hills Under the Snow",
  "paras": [
   "Dark wood makes white snow glow.",
   "Snow-roofed cottages with lit windows and frosted pines cover this polished sideboard, with winter light behind them.",
   "<ul><li>Slide books or boxes under the batting to make hills. Even a flat scene looks like a landscape once it has slopes.</li><li>Dim the room lights and let the village be the lamp.</li></ul>"
  ],
  "key": "vintage-07",
  "_orig": [
   "Dark wood makes white snow glow.",
   "Snow-roofed cottages with lit windows and frosted pines cover this polished sideboard, with winter light behind them.",
   "Slide books or boxes under the batting to make hills. Even a flat scene looks like a landscape once it has slopes.",
   "Dim the room lights and let the village be the lamp."
  ]
 },
 {
  "n": 11,
  "title": "Use the Windowsill",
  "paras": [
   "Windowsills are the most underused spot in the house.",
   "Small wooden houses with tea lights stand in a row under lace curtains and strings of tiny lights here, and the glow shines out to the street as well as inside.",
   "Use battery tea lights, which won't heat the glass or the curtains. On a narrow ledge, pick small houses. Big ones tip."
  ],
  "key": "vintage-23",
  "_orig": [
   "Windowsills are the most underused spot in the house.",
   "Small wooden houses with tea lights stand in a row under lace curtains and strings of tiny lights here, and the glow shines out to the street as well as inside.",
   "Use battery tea lights, which won't heat the glass or the curtains.",
   "On a narrow ledge, pick small houses. Big ones tip."
  ]
 },
 {
  "n": 12,
  "title": "Tuck a Mini Village in the Bedroom",
  "paras": [
   "The last thing you see before sleep should be soft.",
   "A little lit cottage and frosted trees sit on this dresser beside a bed with gingham and toile pillows and a red knit throw.",
   "<p><strong>Quick tip:</strong> Use a warm bulb and a timer so it turns off by itself.</p>",
   "Keep it to one dresser corner. A bedroom wants calm, not a crowd."
  ],
  "key": "vintage-30",
  "_orig": [
   "The last thing you see before sleep should be soft.",
   "A little lit cottage and frosted trees sit on this dresser beside a bed with gingham and toile pillows and a red knit throw.",
   "Use a warm bulb and a timer so it turns off by itself.",
   "Keep it to one dresser corner. A bedroom wants calm, not a crowd."
  ]
 },
 {
  "n": 13,
  "title": "Pile Trees on a Cake Stand",
  "paras": [
   "A cake stand is a tiny stage. Bottle brush trees in tan, green and red crowd on this green pedestal, with tiny ornaments around the base and a plaid ribbon tied around the stem.",
   "Cluster them tight and let a few lean. It looks like a forest, not a showroom.",
   "Check that the stand's top is glazed so the trees don't scratch it."
  ],
  "key": "vintage-20",
  "_orig": [
   "A cake stand is a tiny stage.",
   "Bottle brush trees in tan, green and red crowd on this green pedestal, with tiny ornaments around the base and a plaid ribbon tied around the stem.",
   "Cluster them tight and let a few lean. It looks like a forest, not a showroom.",
   "Check that the stand's top is glazed so the trees don't scratch it."
  ]
 },
 {
  "n": 14,
  "title": "Plant Trees in Old Crocks",
  "paras": [
   "Old crocks make little trees look planted.",
   "Frosted bottle brush trees in teal, white and pink stand in cream crocks with worn labels on a wood shelf. Vary the heights and keep the colors in one soft family.",
   "Flea markets are where to find crocks. A faded marmalade label like these is a bonus."
  ],
  "key": "vintage-21",
  "_orig": [
   "Old crocks make little trees look planted.",
   "Frosted bottle brush trees in teal, white and pink stand in cream crocks with worn labels on a wood shelf.",
   "Vary the heights and keep the colors in one soft family.",
   "Flea markets are where to find crocks. A faded marmalade label like these is a bonus."
  ]
 },
 {
  "n": 15,
  "title": "Lean a Sled Against the Door",
  "paras": [
   "A sled says winter before anyone steps inside.",
   "A weathered wooden one leans beside this black door, dressed with pine, red berries, frosted pinecones and a big velvet bow.",
   "<ul><li>Hold it with a discreet hook or a sandbag behind it so wind and toddlers can't topple it.</li><li>Use outdoor-rated or wired ribbon. Plain velvet goes limp in damp weather.</li></ul>"
  ],
  "key": "vintage-09",
  "_orig": [
   "A sled says winter before anyone steps inside.",
   "A weathered wooden one leans beside this black door, dressed with pine, red berries, frosted pinecones and a big velvet bow.",
   "Hold it with a discreet hook or a sandbag behind it so wind and toddlers can't topple it.",
   "Use outdoor-rated or wired ribbon. Plain velvet goes limp in damp weather."
  ]
 },
 {
  "n": 16,
  "title": "Bring the Sled Inside",
  "paras": [
   "<p><strong>Sleds work in the entryway, too.</strong> An old runner sled holds greenery, brass bells and a burgundy bow, with a basket of birch logs and kraft-wrapped gifts beside it.</p>",
   "<ul><li>Keep the walkway clear. A sled that sticks out is a tripping hazard.</li><li>Wrap the gifts plainly so the sled stays the star.</li></ul>"
  ],
  "key": "vintage-10",
  "_orig": [
   "Sleds work in the entryway, too.",
   "An old runner sled holds greenery, brass bells and a burgundy bow, with a basket of birch logs and kraft-wrapped gifts beside it.",
   "Keep the walkway clear. A sled that sticks out is a tripping hazard.",
   "Wrap the gifts plainly so the sled stays the star."
  ]
 },
 {
  "n": 17,
  "title": "Fill a Lantern With Ornaments",
  "paras": [
   "A lantern can hold more than a candle. This large metal lantern on a frosty step is packed with red, green and gold baubles and warm lights.",
   "Use a battery string with a timer, and fill it loosely so the light still shows. Choose a lantern with a door that opens, so you can refill it easily."
  ],
  "key": "vintage-31",
  "_orig": [
   "A lantern can hold more than a candle.",
   "This large metal lantern on a frosty step is packed with red, green and gold baubles and warm lights.",
   "Use a battery string with a timer, and fill it loosely so the light still shows.",
   "Choose a lantern with a door that opens, so you can refill it easily."
  ]
 },
 {
  "n": 18,
  "title": "Hang Jingle Bells on Jute",
  "paras": [
   "Bells give you sound and charm in one.",
   "Three brass bells hang from thick jute rope against soft green cedar garland here.",
   "The rough rope and polished metal are the contrast that makes it work.",
   "Tie them to a door handle, a mantel hook or the back of a chair, and hang them at different lengths."
  ],
  "key": "vintage-16",
  "_orig": [
   "Bells give you sound and charm in one.",
   "Three brass bells hang from thick jute rope against soft green cedar garland here.",
   "The rough rope and polished metal are the contrast that makes it work.",
   "Tie them to a door handle, a mantel hook or the back of a chair, and hang them at different lengths."
  ]
 },
 {
  "n": 19,
  "title": "Hang a Ring of Bells on a Mirror",
  "paras": [
   "<p><strong>Metals and browns feel antique.</strong> A ring of tiny bells hangs in the center of this arched mirror, with a garland curving over the top and brown cone trees and pinecones on the table below.</p>",
   "Hang the ring from a ribbon so nothing scratches the glass.",
   "Group the cone trees in three different heights."
  ],
  "key": "vintage-15",
  "_orig": [
   "Metals and browns feel antique.",
   "A ring of tiny bells hangs in the center of this arched mirror, with a garland curving over the top and brown cone trees and pinecones on the table below.",
   "Hang the ring from a ribbon so nothing scratches the glass.",
   "Group the cone trees in three different heights."
  ]
 },
 {
  "n": 20,
  "title": "Wrap a Large Mirror in Garland",
  "paras": [
   "A mirror frame is a ready-made canvas.",
   "This tall gilt mirror is draped with evergreen, berries and soft ribbon on both sides, with candles and ornaments on the console in front.",
   "<ul><li>The glass doubles the garland, so you need only half as much.</li><li>Use removable hooks, and put a bit of felt behind them to protect the frame.</li></ul>"
  ],
  "key": "vintage-14",
  "_orig": [
   "A mirror frame is a ready-made canvas.",
   "This tall gilt mirror is draped with evergreen, berries and soft ribbon on both sides, with candles and ornaments on the console in front.",
   "The glass doubles the garland, so you need only half as much.",
   "Use removable hooks, and put a bit of felt behind them to protect the frame."
  ]
 },
 {
  "n": 21,
  "title": "Try a Single Swag",
  "paras": [
   "Sometimes one swag is enough.",
   "A cluster of cedar curves over the top of this tall gold arched mirror, tied with a burgundy velvet bow and long tails.",
   "One hook. One swag. Done. Match the ribbon to a color already in the room."
  ],
  "key": "vintage-17",
  "_orig": [
   "Sometimes one swag is enough.",
   "A cluster of cedar curves over the top of this tall gold arched mirror, tied with a burgundy velvet bow and long tails.",
   "One hook. One swag. Done.",
   "Match the ribbon to a color already in the room."
  ]
 },
 {
  "n": 22,
  "title": "Drape the Stairs With Orange Slices and Velvet",
  "paras": [
   "Staircases are the prettiest place for garland.",
   "Full greenery winds down this banister with burgundy ribbon, dried orange slices, pinecones and tiny lights, while small sleds and deer sit on the steps.",
   "<p><strong>Quick tip:</strong> Attach it with wire, never tape, and cover the wire with ribbon.</p>",
   "Dry your own oranges. Slice them thin and bake at 200°F for two to three hours."
  ],
  "key": "vintage-25",
  "_orig": [
   "Staircases are the prettiest place for garland.",
   "Full greenery winds down this banister with burgundy ribbon, dried orange slices, pinecones and tiny lights, while small sleds and deer sit on the steps.",
   "Attach it with wire, never tape, and cover the wire with ribbon.",
   "Dry your own oranges. Slice them thin and bake at 200°F for two to three hours."
  ]
 },
 {
  "n": 23,
  "title": "Light Lanterns Along the Steps",
  "paras": [
   "Lanterns turn stairs into a scene. A curved wooden staircase here has garland with bells and bows along the rail, with lit lanterns on the treads and a small tree at the bottom.",
   "Use battery lanterns only, and keep them to the sides of the treads. Stairs are for walking.",
   "Build the garland thicker at the bottom of the railing for drama."
  ],
  "key": "vintage-26",
  "_orig": [
   "Lanterns turn stairs into a scene.",
   "A curved wooden staircase here has garland with bells and bows along the rail, with lit lanterns on the treads and a small tree at the bottom.",
   "Use battery lanterns only, and keep them to the sides of the treads. Stairs are for walking.",
   "Build the garland thicker at the bottom of the railing for drama."
  ]
 },
 {
  "n": 24,
  "title": "Give a Mint Kitchen Red Accents",
  "paras": [
   "Mint and red is peak mid-century.",
   "Mint green cabinets are filled with red cookware, a mixer and candy canes here, with an ornament garland along the shelf edge. If your kitchen already has a color, choose its opposite: red for green, blue for orange.",
   "Use real cookware as decor. Things you use look best."
  ],
  "key": "vintage-12",
  "_orig": [
   "Mint and red is peak mid-century.",
   "Mint green cabinets are filled with red cookware, a mixer and candy canes here, with an ornament garland along the shelf edge.",
   "If your kitchen already has a color, choose its opposite: red for green, blue for orange.",
   "Use real cookware as decor. Things you use look best."
  ]
 },
 {
  "n": 25,
  "title": "Cover the Fridge With Santa Magnets",
  "paras": [
   "Magnets are tiny collectibles.",
   "A mint green fridge is covered in snowmen, Santas and sleighs here, under a gingham valance with colorful bottle brush trees on the counter.",
   "<ul><li>Group them by size, with the biggest ones lower.</li><li>Even a plain fridge works, and magnets cost almost nothing.</li></ul>"
  ],
  "key": "vintage-13",
  "_orig": [
   "Magnets are tiny collectibles.",
   "A mint green fridge is covered in snowmen, Santas and sleighs here, under a gingham valance with colorful bottle brush trees on the counter.",
   "Group them by size, with the biggest ones lower.",
   "Even a plain fridge works, and magnets cost almost nothing."
  ]
 },
 {
  "n": 26,
  "title": "Set Out Retro Tins and Mugs",
  "paras": [
   "<p><strong>Everyday things can be Christmas decor.</strong> On this wood coffee table are Merry Christmas mugs, tins filled with ornaments, a ceramic tree and a few old figures.</p>",
   "<ul><li>Tins full of ornaments are one of the easiest displays, and the lid keeps dust out.</li><li>Faded graphics look more authentic than shiny new ones.</li></ul>"
  ],
  "key": "vintage-29",
  "_orig": [
   "Everyday things can be Christmas decor.",
   "On this wood coffee table are Merry Christmas mugs, tins filled with ornaments, a ceramic tree and a few old figures.",
   "Tins full of ornaments are one of the easiest displays, and the lid keeps dust out.",
   "Faded graphics look more authentic than shiny new ones."
  ]
 },
 {
  "n": 27,
  "title": "Hang Velvet Stockings in Mixed Colors",
  "paras": [
   "Different colors feel collected, a matching set feels bought. Three velvet stockings in burgundy, deep green and navy hang here with embroidered names and cream cuffs.",
   "Add a small bauble to each cuff. Weigh down your hooks. A stocking full of treats is heavier than it looks."
  ],
  "key": "vintage-11",
  "_orig": [
   "Different colors feel collected, a matching set feels bought.",
   "Three velvet stockings in burgundy, deep green and navy hang here with embroidered names and cream cuffs.",
   "Add a small bauble to each cuff.",
   "Weigh down your hooks. A stocking full of treats is heavier than it looks."
  ]
 },
 {
  "n": 28,
  "title": "String Postcards on a Garland",
  "paras": [
   "Old postcards are free art.",
   "Winter scene cards hang from twine with wooden clothespins along this mantel.",
   "Use color copies of originals, because sunlight fades antique cards.",
   "Change them through the season."
  ],
  "key": "vintage-08",
  "_orig": [
   "Old postcards are free art.",
   "Winter scene cards hang from twine with wooden clothespins along this mantel.",
   "Use color copies of originals, because sunlight fades antique cards.",
   "Change them through the season."
  ]
 },
 {
  "n": 29,
  "title": "Mismatch Your China on Purpose",
  "paras": [
   "<p><strong>Mismatched china is charming.</strong> A long table is set with floral plates, burgundy napkins, brass candlesticks, dried orange slices and a lace runner.</p>",
   "Collect a plate at a time at thrift shops and use a common thread, like pink and green.",
   "Keep the runner narrow so you can still see the table."
  ],
  "key": "vintage-18",
  "_orig": [
   "Mismatched china is charming.",
   "A long table is set with floral plates, burgundy napkins, brass candlesticks, dried orange slices and a lace runner.",
   "Collect a plate at a time at thrift shops and use a common thread, like pink and green.",
   "Keep the runner narrow so you can still see the table."
  ]
 },
 {
  "n": 30,
  "title": "Spread a Tartan Cloth",
  "paras": [
   "Tartan on the table is instantly cozy.",
   "A green plaid cloth carries gold flatware, red napkins tied with twine and candlesticks.",
   "<ul><li>Let the cloth carry the pattern and keep plates plain.</li><li>Tying napkins with twine takes seconds.</li></ul>"
  ],
  "key": "vintage-19",
  "_orig": [
   "Tartan on the table is instantly cozy.",
   "A green plaid cloth carries gold flatware, red napkins tied with twine and candlesticks.",
   "Let the cloth carry the pattern and keep plates plain.",
   "Tying napkins with twine takes seconds."
  ]
 },
 {
  "n": 31,
  "title": "Pair Navy Plaid With Crystal",
  "paras": [
   "Plaid doesn't have to be red.",
   "A blue and green plaid cloth carries navy napkins, crystal glasses with gold rims and candles here, with a tree beyond.",
   "Layer glassware for sparkle: water, wine and champagne. Set candles at different heights."
  ],
  "key": "vintage-28",
  "_orig": [
   "Plaid doesn't have to be red.",
   "A blue and green plaid cloth carries navy napkins, crystal glasses with gold rims and candles here, with a tree beyond.",
   "Layer glassware for sparkle: water, wine and champagne.",
   "Set candles at different heights."
  ]
 },
 {
  "n": 32,
  "title": "Stack Crates of Ornaments",
  "paras": [
   "Crates make a quick display.",
   "Weathered wooden boxes are stacked and filled with red and gold ornaments, pinecones and pine.",
   "<p><strong>Quick tip:</strong> Stack them at different angles for a natural look.</p>",
   "Line the crates with burlap so ornaments don't roll."
  ],
  "key": "vintage-22",
  "_orig": [
   "Crates make a quick display.",
   "Weathered wooden boxes are stacked and filled with red and gold ornaments, pinecones and pine.",
   "Stack them at different angles for a natural look.",
   "Line the crates with burlap so ornaments don't roll."
  ]
 },
 {
  "n": 33,
  "title": "Wrap Gifts in Kraft Paper and Velvet",
  "paras": [
   "Simple wrapping looks more expensive. Gifts in kraft paper are tied with wide burgundy velvet ribbon and topped with greenery, cinnamon sticks, star anise and a gingerbread tag.",
   "Buy wired velvet ribbon at a craft store, and reuse it each year.",
   "Choose one paper and one ribbon family, then stop."
  ],
  "key": "vintage-32",
  "_orig": [
   "Simple wrapping looks more expensive.",
   "Gifts in kraft paper are tied with wide burgundy velvet ribbon and topped with greenery, cinnamon sticks, star anise and a gingerbread tag.",
   "Buy wired velvet ribbon at a craft store, and reuse it each year.",
   "Choose one paper and one ribbon family, then stop."
  ]
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
${idea.paras.map((t) => (t.startsWith("<") ? t : `<p>${t}</p>`)).join("\n")}
${photo(idea.key)}`;
}

const body = `
<p>Vintage Christmas decor feels warmer than almost anything new off the shelf.</p>
<p>Mercury glass, bottle brush trees, retro Santas and scraps of velvet and plaid all have a glow that fresh-from-the-box sets rarely match.</p>
<p>The good news is that you don't need real antiques to get there. A few well-chosen pieces, styled with restraint, can read as nostalgic as something handed down. Here is how I approach it, followed by 33 ideas for every room.</p>
${photo("hero")}

<h2>Five Ways to Get the Vintage Look Without Buying Antiques</h2>
<p><strong>Mix old and new.</strong> A few thrifted pieces among new ones look collected. A room full of reproductions looks like a catalog.</p>
<p><strong>Limit your materials.</strong> Choose two or three, such as mercury glass, plaid and brass, and repeat them everywhere.</p>
<p><strong>Light it warmly.</strong> Soft bulbs and candles (or battery ones) do half the work.</p>
<p><strong>Choose patina over perfection.</strong> A chipped ornament or a worn sled has more character than a flawless one.</p>
<p><strong>Shop where the old things are.</strong> Thrift shops, estate sales and flea markets are the best places for glass ornaments, brass candlesticks, crocks and tins.</p>

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Common Mistakes (and Fixes)</h2>
<p><strong>Buying everything new in one color.</strong> It will look flat. Add at least one old, mismatched piece.</p>
<p><strong>Using cool white lights.</strong> They make everything look modern. Switch to warm.</p>
<p><strong>Leaving fragile glass at toddler height.</strong> Hang old ornaments up high and put sturdy shatterproof ones low.</p>
<p><strong>Forgetting cord safety.</strong> Check old light strings for frayed wires and never run cords under rugs.</p>
<p>Use what you love, in small doses. A chipped ornament with a story always beats a perfect new one.</p>
`;

module.exports = { body };
