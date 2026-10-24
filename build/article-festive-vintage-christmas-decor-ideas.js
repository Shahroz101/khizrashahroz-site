// Body content for "33 Vintage Christmas Decor Ideas With Nostalgic Charm".
// Converted from the Dwelling Dream "33 Festive Vintage Christmas Decor
// Ideas" source: all text rewritten from scratch and the ideas regrouped
// (trees, mantels, villages, entry and outdoors, mirrors and stairs,
// retro kitchen, tables and gifts). Photos credited to their Pinterest pins;
// the supplied Amazon product pair stays under each photo. Ends on text.

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
  "title": "Trim the Tree With Colorful Retro Baubles",
  "paras": [
   "Nothing says vintage like a tree full of bright glass.",
   "This one wears shiny balls in red, green, teal and gold, with warm multicolor lights threaded through the branches.",
   "The colors feel like a childhood tree.",
   "Mix the finishes and sizes so nothing looks too matched."
  ],
  "key": "vintage-01"
 },
 {
  "n": 2,
  "title": "Switch to Mercury Glass in Silver and Cream",
  "paras": [
   "For a calmer, antique feel, choose mercury glass.",
   "Silvery teardrops, ivory finials and a few deep red baubles hang on a natural-looking tree, with strands of tinsel tucked into the boughs.",
   "The soft, aged shine looks like it came out of an attic trunk.",
   "Hang the larger pieces near the center, where they catch the light."
  ],
  "key": "vintage-02"
 },
 {
  "n": 3,
  "title": "Fill a Dough Bowl With Old Ornaments",
  "paras": [
   "Vintage baubles deserve to be seen up close.",
   "A well-worn wooden bowl on a farmhouse table here holds silver, gold, green and red ornaments with a few small figurines, edged with pine and a lit candle.",
   "It is a centerpiece that costs almost nothing.",
   "Dig out the boxes from last year and see what you have."
  ],
  "key": "vintage-24"
 },
 {
  "n": 4,
  "title": "Light Brass Candlesticks Above a Garland",
  "paras": [
   "Brass has a warm, old-house glow.",
   "Tall brass candlesticks with dark candles stand under a gilt mirror, while a thick garland of greens and red berries drapes across the mantel.",
   "The lit candles reflect in the glass for double the glow.",
   "Use flameless candles if the mantel is crowded."
  ],
  "key": "vintage-03"
 },
 {
  "n": 5,
  "title": "Hang a Christmas Sign Above the Fireplace",
  "paras": [
   "A big script sign says it all.",
   "On this white paneled wall, a wooden Christmas sign is flanked by small wreaths and a long garland, with vintage-style stockings and a red throw nearby.",
   "The red and green stay soft against the white.",
   "Hang the sign slightly above the mantel to give the display height."
  ],
  "key": "vintage-04"
 },
 {
  "n": 6,
  "title": "Line Up Nutcrackers and Candles",
  "paras": [
   "Nutcrackers are classic mantel guards.",
   "Two red-coated soldiers stand among white candles, red baubles, berries and pine on a carved mantel, with plaid ribbons trailing down the front.",
   "The tartan ribbon adds a bit of movement.",
   "Odd numbers of candles look more natural than pairs."
  ],
  "key": "vintage-05"
 },
 {
  "n": 7,
  "title": "Style an Old Cabinet Like a Holiday Shelf",
  "paras": [
   "Even a plain bookcase can turn nostalgic.",
   "A cream cabinet here holds a small lit ceramic tree, snow globes, peppermint tins, a snowman, a Santa and a stack of old holiday books.",
   "Warm light inside makes the shelves glow.",
   "Group small things in threes and leave room between them."
  ],
  "key": "vintage-33"
 },
 {
  "n": 8,
  "title": "Collect Retro Santas on Crates",
  "paras": [
   "A collection becomes decor when you display it together.",
   "Glossy Santas and snowmen are crowded onto wooden crates here, with lace doilies, tinsel, candy canes, bright baubles and a tall candle.",
   "The doilies add to the grandmother's-house feel.",
   "If you only own a few, group them and the effect is the same."
  ],
  "key": "vintage-27"
 },
 {
  "n": 9,
  "title": "Build a Glowing Village Along a Console",
  "paras": [
   "A village is the ultimate nostalgia project.",
   "Lit houses, a church, little skaters and a sparkling tree sit on a bed of snow along a rustic console.",
   "Layer figures at different distances for depth.",
   "Hide the cord under the snow so only the light shows."
  ],
  "key": "vintage-06"
 },
 {
  "n": 10,
  "title": "Set a Snowy Village on a Dark Sideboard",
  "paras": [
   "Dark wood makes the snow stand out.",
   "Snow-roofed cottages with lit windows and frosted pines cover a polished sideboard in this display, next to a window with winter light.",
   "It looks like a miniature mountain town.",
   "Use batting for the snow and shape it into little hills."
  ],
  "key": "vintage-07"
 },
 {
  "n": 11,
  "title": "Line Wooden Houses Along the Windowsill",
  "paras": [
   "Windowsills are underused real estate.",
   "Small wooden houses with candles stand in a row under lace curtains and strings of tiny lights, with ornaments dangling beside them.",
   "The light shines out through the glass to the street.",
   "Use battery candles to keep it safe."
  ],
  "key": "vintage-23"
 },
 {
  "n": 12,
  "title": "Tuck a Mini Village on the Bedroom Dresser",
  "paras": [
   "The bedroom deserves a little magic too.",
   "A lit cottage and frosted trees sit on a wood dresser here, next to a bed with gingham and toile pillows and a red knit throw.",
   "It is small enough not to crowd the room.",
   "Use warm bulbs so it feels like a nightlight."
  ],
  "key": "vintage-30"
 },
 {
  "n": 13,
  "title": "Pile Bottle Brush Trees on a Cake Stand",
  "paras": [
   "A cake stand is a tiny stage.",
   "This green stand carries a crowd of bottle brush trees in tan, green and red, with little ornaments around the base and a plaid ribbon tied at the stem.",
   "It makes a good centerpiece for the table.",
   "Cluster them tight and let a few lean."
  ],
  "key": "vintage-20"
 },
 {
  "n": 14,
  "title": "Plant Bottle Brush Trees in Old Crocks",
  "paras": [
   "Vintage crocks give trees a rustic home.",
   "Frosted bottle brush trees in teal, white and pink stand in cream crocks with worn labels on a wood shelf.",
   "The faded pastels feel like flea-market finds.",
   "Vary the heights for a forest effect."
  ],
  "key": "vintage-21"
 },
 {
  "n": 15,
  "title": "Lean a Sled by the Front Door",
  "paras": [
   "A sled says winter before anyone steps inside.",
   "This weathered wooden one leans beside a black door, dressed with pine, red berries, frosted pinecones and a big red velvet bow.",
   "Add a planter with a tiny tree for balance.",
   "Keep it away from the doormat so the entry stays clear."
  ],
  "key": "vintage-09"
 },
 {
  "n": 16,
  "title": "Decorate an Indoor Sled With Bells",
  "paras": [
   "Sleds work in the entryway too.",
   "An old wooden runner sled holds greenery, brass bells and a burgundy bow, with a basket of birch logs and kraft-wrapped gifts around it.",
   "A patterned runner underneath adds color.",
   "Wrap gifts in plain paper so the sled stays the star."
  ],
  "key": "vintage-10"
 },
 {
  "n": 17,
  "title": "Fill a Porch Lantern With Ornaments",
  "paras": [
   "A lantern can hold more than a candle.",
   "This large metal lantern on a frosty step is packed with red, green and gold baubles and warm lights.",
   "It glows on the porch at dusk.",
   "Use a plug-in or battery light so there is no flame."
  ],
  "key": "vintage-31"
 },
 {
  "n": 18,
  "title": "Hang Rustic Jingle Bells on Jute",
  "paras": [
   "Bells are a sound and a decoration.",
   "Three large brass bells hang from thick jute rope against soft green cedar garland.",
   "The rough rope looks good with the polished metal.",
   "Tie them to a door handle or a mantel hook."
  ],
  "key": "vintage-16"
 },
 {
  "n": 19,
  "title": "Combine a Bell Wreath With Cone Trees",
  "paras": [
   "Gold bells make a striking wreath.",
   "A ring of tiny bells hangs in the center of an arched mirror, with a garland curving over the top and brown cone trees and pinecones on the table below.",
   "The metals and browns feel antique.",
   "Check the mirror frame so nothing scratches it."
  ],
  "key": "vintage-15"
 },
 {
  "n": 20,
  "title": "Wrap a Large Mirror in Garland",
  "paras": [
   "A mirror frame is a ready-made canvas.",
   "This tall gilt mirror is draped with evergreen, red berries and soft ribbon on both sides, with candles and ornaments sitting on the console in front.",
   "The garland doubles in the glass.",
   "Use removable hooks so the wall stays safe."
  ],
  "key": "vintage-14"
 },
 {
  "n": 21,
  "title": "Add a Burgundy Bow to an Arched Mirror",
  "paras": [
   "Sometimes a swag is enough.",
   "A cluster of cedar curves over the top of this tall gold arched mirror, tied with a burgundy velvet bow and long ribbon tails.",
   "It frames the living room reflected inside.",
   "Hang it from one hook and you are done."
  ],
  "key": "vintage-17"
 },
 {
  "n": 22,
  "title": "Drape a Staircase With Orange Slices and Velvet",
  "paras": [
   "Staircases are the prettiest place for garland.",
   "Full greenery winds down this banister with burgundy ribbon, dried orange slices, pinecones and tiny lights, while little sleds and deer sit on the steps.",
   "The oranges add scent and warmth.",
   "Tie it with wire and use ribbon to cover the joins."
  ],
  "key": "vintage-25"
 },
 {
  "n": 23,
  "title": "Light Lanterns Along the Steps",
  "paras": [
   "Lanterns turn stairs into a scene.",
   "A curved wooden staircase here has garland with bells and bows along the rail, and lit lanterns on the treads that glow against white risers.",
   "A small tree at the bottom completes it.",
   "Use battery lanterns for safety on stairs."
  ],
  "key": "vintage-26"
 },
 {
  "n": 24,
  "title": "Give a Mint Kitchen Red Accents",
  "paras": [
   "Mint and red is peak mid-century.",
   "This kitchen has green cabinets and shelves filled with red cookware, jars, mixer and candy canes, plus ornament garlands along the shelf edge.",
   "The red looks bright against the soft green.",
   "Swap in a few red tea towels for the same effect."
  ],
  "key": "vintage-12"
 },
 {
  "n": 25,
  "title": "Cover a Retro Fridge With Santa Magnets",
  "paras": [
   "Magnets are tiny collectibles.",
   "A mint green fridge here is covered in snowmen, Santas and sleighs, under a gingham valance with colorful bottle brush trees on the counter.",
   "It is playful and very 1950s.",
   "Even a regular fridge works with a bunch of magnets."
  ],
  "key": "vintage-13"
 },
 {
  "n": 26,
  "title": "Set Out Retro Tins and Mugs",
  "paras": [
   "Everyday things can be Christmas decor.",
   "On this wood coffee table are Merry Christmas mugs, tins full of ornaments, a ceramic tree and a few old figures.",
   "It is a casual, collected look.",
   "Pick pieces with faded graphics for authenticity."
  ],
  "key": "vintage-29"
 },
 {
  "n": 27,
  "title": "Hang Velvet Monogram Stockings",
  "paras": [
   "Velvet stockings feel traditional and rich.",
   "Three stockings in burgundy, deep green and navy hang with embroidered names and cream cuffs in front of gold lights.",
   "Different colors feel more collected than a matching set.",
   "Add a small bauble to each cuff."
  ],
  "key": "vintage-11"
 },
 {
  "n": 28,
  "title": "String Vintage Postcards on a Garland",
  "paras": [
   "Old postcards are free art.",
   "Winter scene cards hang from twine with wooden clothespins along the mantel, with greenery and lights behind.",
   "Change the cards as the season goes.",
   "Copies or reprints work as well as originals."
  ],
  "key": "vintage-08"
 },
 {
  "n": 29,
  "title": "Set a Table With Floral China and Orange Slices",
  "paras": [
   "Mismatched china is charming.",
   "A long table is set with floral plates, burgundy napkins, brass candlesticks, dried orange slices and a lace runner.",
   "The pattern gives it a lived-in look.",
   "Collect a plate here and there rather than one set."
  ],
  "key": "vintage-18"
 },
 {
  "n": 30,
  "title": "Use a Tartan Tablecloth",
  "paras": [
   "Tartan on the table is instantly cozy.",
   "A green plaid cloth is set with gold flatware, red napkins tied with twine and candlesticks.",
   "The plaid does all the pattern work.",
   "Keep plates plain and let the cloth stand out."
  ],
  "key": "vintage-19"
 },
 {
  "n": 31,
  "title": "Pair Navy Plaid With Crystal",
  "paras": [
   "Plaid does not always have to be red.",
   "A blue and green plaid cloth carries navy napkins, crystal glasses with gold rims, candles and a tree beyond.",
   "It feels formal yet relaxed.",
   "Layer glassware for sparkle."
  ],
  "key": "vintage-28"
 },
 {
  "n": 32,
  "title": "Stack Wooden Crates of Ornaments",
  "paras": [
   "Crates make a quick display.",
   "Weathered wooden boxes are stacked and filled with red and gold ornaments, pinecones and pine branches.",
   "The warm wood shows off the colors.",
   "Stack them at different angles for a natural look."
  ],
  "key": "vintage-22"
 },
 {
  "n": 33,
  "title": "Wrap Gifts in Kraft Paper With Velvet Ribbon",
  "paras": [
   "Simple wrapping looks more expensive.",
   "Gifts in kraft paper are tied with wide burgundy velvet ribbon and topped with greenery, cinnamon sticks, star anise and a gingerbread tag.",
   "The wrapping becomes decor under the tree.",
   "Save and reuse the ribbon each year."
  ],
  "key": "vintage-32"
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
<p>Vintage Christmas decor feels warmer than almost anything new off the shelf.</p>
<p>Mercury glass, bottle brush trees, retro Santas and scraps of velvet and plaid all have a glow that fresh-from-the-box sets rarely match.</p>
<p>You do not need real antiques to get the look. A few well-chosen new pieces, styled with restraint, can read as nostalgic as anything handed down.</p>
<p>These 33 ideas go beyond the tree, with mantels, villages, staircases, tables, a retro kitchen and even gift wrap, because a vintage Christmas lives in the small details.</p>
${photo("hero")}

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Keeping the Look Nostalgic, Not Cluttered</h2>
<p>Thirty-three ideas is plenty. Pick a few and let them breathe.</p>
<p>Choose two or three materials and repeat them, such as mercury glass, plaid and brass, so the house feels collected instead of crowded.</p>
<p>Warm lighting does half the work, so use soft bulbs and candles wherever it is safe.</p>
<p>Above all, use what you love. A chipped ornament with a story beats a perfect new one every time.</p>
`;

module.exports = { body };
