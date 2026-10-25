// Body content for "36 Christmas Kitchen Decor Ideas for the Heart of the
// Home". Converted from the Dwelling Dream "36 Christmas Kitchen Decor
// Ideas" source in the advice-led voice (see memory advice-led-article-voice):
// all text new, ideas regrouped (above the cabinets, islands, stove and
// counters, coffee and cocoa, gingerbread). NOTE: in the source, the photos
// for ideas 18-21 were shifted against their products, so each of those
// photos is paired with the products that fit it. Photos credited to their
// Pinterest pins. Ends on text.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "christmas-kitchen-decor-ideas";
const PRODUCT_DIR = "christmas-kitchen-decor-ideas-products";

const PHOTOS = {
 "kitchen-01": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/86201780363887958/",
  "label": "Light Up the Space Above the Cabinets",
  "alt": "Garland with lights, candles, and gold ornaments draped above kitchen cabinets"
 },
 "kitchen-12": {
  "w": 800,
  "h": 1143,
  "pin": "https://www.pinterest.com/pin/295689531806452960/",
  "label": "Wrap the Corner and Let the Garland Drop",
  "alt": "Beaded garland strung over white kitchen cabinets with ornaments and plants"
 },
 "kitchen-11": {
  "w": 736,
  "h": 1307,
  "pin": "https://www.pinterest.com/pin/732397958199316134/",
  "label": "Pick a Corner and Start There",
  "alt": "A corner garland decorated with gift tags, pinecones, and wrapped boxes"
 },
 "kitchen-10": {
  "w": 737,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/941252390883883712/",
  "label": "Frame the Window",
  "alt": "Garland framing a kitchen window with brass candlesticks on the counter below"
 },
 "kitchen-02": {
  "w": 736,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/194077065188657188/",
  "label": "Line Up Little Trees at the Sink Window",
  "alt": "Flocked mini Christmas trees lined up along a farmhouse kitchen sink window"
 },
 "kitchen-09": {
  "w": 896,
  "h": 1120,
  "pin": "https://www.pinterest.com/pin/1062990318323023658/",
  "label": "Hang a Banner, but Mind the Heat",
  "alt": "A Merry Christmas banner strung along a kitchen backsplash above the stove"
 },
 "kitchen-17": {
  "w": 1283,
  "h": 1901,
  "pin": "https://www.pinterest.com/pin/42573158973570908/",
  "label": "Hang One Big Sign Above the Cabinets",
  "alt": "A Santas Workshop sign mounted above white kitchen cabinets with flocked trees"
 },
 "kitchen-18": {
  "w": 816,
  "h": 1226,
  "pin": "https://www.pinterest.com/pin/258957047319347164/",
  "label": "Hang Baby's Breath Wreaths on the Cabinet Doors",
  "alt": "Baby's breath wreaths tied with plaid bows hanging on white upper kitchen cabinets above a butcher-block counter with cocoa mugs"
 },
 "kitchen-20": {
  "w": 564,
  "h": 846,
  "pin": "https://www.pinterest.com/pin/676947387784177818/",
  "label": "Swag the Island Edge With Big Bows",
  "alt": "Long white kitchen island with a thick garland and large red plaid bows along its edge"
 },
 "kitchen-07": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/308778118222218634/",
  "label": "Dress the Pendant Lights",
  "alt": "Snowflake and ornament pendant lights hanging over a white kitchen island"
 },
 "kitchen-05": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/356558495522281715/",
  "label": "Warm Up Marble With Gold",
  "alt": "A gold and champagne Christmas tree near a white kitchen island"
 },
 "kitchen-08": {
  "w": 1024,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/1040120476470743147/",
  "label": "Fill Apothecary Jars With Peppermints",
  "alt": "Glass apothecary jars filled with peppermint candy on a marble kitchen island"
 },
 "kitchen-31": {
  "w": 800,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/411938697189299637/",
  "label": "Run Berries Down the Island",
  "alt": "A red berry and brass candlestick runner down a white kitchen island"
 },
 "kitchen-29": {
  "w": 735,
  "h": 913,
  "pin": "https://www.pinterest.com/pin/1019361696932474820/",
  "label": "Make a Small Centerpiece With One Vase",
  "alt": "A white vase with red berries and a lit candle on a kitchen island"
 },
 "kitchen-30": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/1101904233841355964/",
  "label": "Stagger a Nutcracker Trio",
  "alt": "Three wooden nutcrackers lined up on a kitchen island with gold ornaments"
 },
 "kitchen-32": {
  "w": 1290,
  "h": 1703,
  "pin": "https://www.pinterest.com/pin/4591419906447929408/",
  "label": "Use a Santa Mug as a Vase",
  "alt": "A Santa mug used as a vase with brass bells on a kitchen counter"
 },
 "kitchen-33": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/330803535153570540/",
  "label": "Nestle Gingerbread Houses in a Basket",
  "alt": "A gingerbread house nestled in a woven basket with mini Christmas trees"
 },
 "kitchen-34": {
  "w": 500,
  "h": 750,
  "pin": "https://www.pinterest.com/pin/4604649213056482368/",
  "label": "Build a Tiny Scene on a Round Tray",
  "alt": "A wooden nutcracker and flocked mini tree on a round tray"
 },
 "kitchen-36": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/4591138479411587136/",
  "label": "Set a Little Tree on the Island",
  "alt": "A small lit Christmas tree with wrapped gifts on a kitchen island"
 },
 "kitchen-06": {
  "w": 736,
  "h": 981,
  "pin": "https://www.pinterest.com/pin/198791771043542051/",
  "label": "Hang a Wreath Where You Cook",
  "alt": "A greenery wreath hanging from a wood tree cutting board on a stove backsplash"
 },
 "kitchen-22": {
  "w": 1536,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/205687907973929600/",
  "label": "Spell Out Merry on the Backsplash",
  "alt": "A greenery wreath over a stove with a bold Merry sign on the backsplash"
 },
 "kitchen-03": {
  "w": 574,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/348606827424683291/",
  "label": "Style One Shelf Like a Pro",
  "alt": "Kitchen shelf with a carved wood tree, vintage clock, and garland"
 },
 "kitchen-04": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/30117891254004784/",
  "label": "Dress Up Your Mixer",
  "alt": "A green KitchenAid mixer styled with a plaid towel, greenery, and a baking utensil jar"
 },
 "kitchen-25": {
  "w": 1179,
  "h": 1801,
  "pin": "https://www.pinterest.com/pin/4603804804968360000/",
  "label": "Prop a Cookie Jar on a Cutting Board",
  "alt": "A gingerbread house cookie jar styled on a wood cutting board with candles"
 },
 "kitchen-16": {
  "w": 3024,
  "h": 3655,
  "pin": "https://www.pinterest.com/pin/4592405118074758400/",
  "label": "Corral the Counter in a Long Tray",
  "alt": "A wooden tray with gnomes, a snowman jar, and a vertical Merry Christmas sign"
 },
 "kitchen-35": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/28358672648186043/",
  "label": "Use a Tree-Shaped Cookie Jar as Decor",
  "alt": "A green ceramic Christmas tree canister with mugs on a kitchen counter"
 },
 "kitchen-19": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/31103053669481673/",
  "label": "Corral Santa Mugs on a Tiered Rack",
  "alt": "Tiered rack of Santa face mugs, candy canes and a coal dish on a gray counter beside a wood cutting board with a Santa planter"
 },
 "kitchen-21": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/1085860160153151587/",
  "label": "Choose One Red Accent and Repeat It",
  "alt": "Red and white farmhouse kitchen with red pendant lights, a poinsettia on the island and a gingham towel on the rail"
 },
 "kitchen-13": {
  "w": 736,
  "h": 1312,
  "pin": "https://www.pinterest.com/pin/28077197672081511/",
  "label": "Keep a Cocoa Bar Small",
  "alt": "A small tiered tray styled as a hot cocoa bar with a mug and coffee sign"
 },
 "kitchen-14": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/4594586548571326528/",
  "label": "Turn a Shelf Into a Cocoa Corner",
  "alt": "A coffee and cocoa corner shelf with labeled jars and a wood sign"
 },
 "kitchen-15": {
  "w": 899,
  "h": 1600,
  "pin": "https://www.pinterest.com/pin/1131810950137153422/",
  "label": "Show Off a Wall of Mugs",
  "alt": "Floating shelves filled with a wall of mismatched Christmas mugs"
 },
 "kitchen-23": {
  "w": 1170,
  "h": 1188,
  "pin": "https://www.pinterest.com/pin/28921622601750837/",
  "label": "Wrap the Range Hood in Gingerbread",
  "alt": "A full gingerbread house display built around a kitchen range hood"
 },
 "kitchen-24": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/551268810657479218/",
  "label": "Trim the Island With Gingerbread",
  "alt": "A kitchen island trimmed with gingerbread cookie cutout shapes and lights"
 },
 "kitchen-26": {
  "w": 600,
  "h": 749,
  "pin": "https://www.pinterest.com/pin/464785624062775624/",
  "label": "Treat a Hutch Like a Bakery Window",
  "alt": "A white hutch styled as a gingerbread bakery with cookie jars and signs"
 },
 "kitchen-27": {
  "w": 1240,
  "h": 2261,
  "pin": "https://www.pinterest.com/pin/70931762874568135/",
  "label": "Line Up a Gingerbread Family",
  "alt": "A tiered tray with plush gingerbread family figures and a Gingerbread St sign"
 },
 "kitchen-28": {
  "w": 1080,
  "h": 1976,
  "pin": "https://www.pinterest.com/pin/169518373468989917/",
  "label": "Line the Cabinet Tops With a Village",
  "alt": "A gingerbread house village lining the top of white kitchen cabinets"
 },
 "hero": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/86201780363887958/",
  "label": "Light Up the Space Above the Cabinets",
  "alt": "Garland with lights, candles, and gold ornaments draped above kitchen cabinets"
 }
};

const PRODUCTS = {
 "kitchen-01": [
  {
   "asin": "B0HC64P527",
   "title": "Cindeer Lighted Christmas Garland for Above Kitchen Cabinets, 6 ft",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B09Q386NLC",
   "title": "Amagic Gray Glass Flameless LED Candles, Battery Operated, Set of 3",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-12": [
  {
   "asin": "B0HC64P527",
   "title": "Cindeer Lighted Christmas Garland for Above Kitchen Cabinets, 6 ft",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B08MVTH53Z",
   "title": "Christmas Wood Bead Garland with Tassels, Red Green White, Rustic Farmhouse",
   "w": 698,
   "h": 1431
  }
 ],
 "kitchen-11": [
  {
   "asin": "B0758436XW",
   "title": "K-Kraft Christmas Gift Tags, 25-Pack, with Red and White Baker's Twine",
   "w": 1500,
   "h": 1495
  },
  {
   "asin": "B0HC64P527",
   "title": "Cindeer Lighted Christmas Garland for Above Kitchen Cabinets, 6 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-10": [
  {
   "asin": "B0H9MF8D3X",
   "title": "Gold Taper Candle Holders Set of 6, Brass Metal Candlesticks",
   "w": 1414,
   "h": 984
  },
  {
   "asin": "B0HC64P527",
   "title": "Cindeer Lighted Christmas Garland for Above Kitchen Cabinets, 6 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-02": [
  {
   "asin": "B0GQCWJ5YM",
   "title": "Flocked Pine Mini Artificial Christmas Trees with Pinecones, 12 Inch, Set of 3",
   "w": 1500,
   "h": 644
  },
  {
   "asin": "B0H3Z5CW1S",
   "title": "Yorhifa Merry Christmas Red Striped Kitchen Dish Towels",
   "w": 894,
   "h": 1500
  }
 ],
 "kitchen-09": [
  {
   "asin": "B0H93PKJKW",
   "title": "Lumina Garden Bright Red Merry Christmas Banner, 6ft Velvet Letter Garland",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0HC64P527",
   "title": "Cindeer Lighted Christmas Garland for Above Kitchen Cabinets, 6 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-17": [
  {
   "asin": "B0DFQJ924Z",
   "title": "Santa's Workshop Retro Christmas Metal Tin Sign, 8x12 Inch",
   "w": 1500,
   "h": 1092
  },
  {
   "asin": "B0HC64P527",
   "title": "Cindeer Lighted Christmas Garland for Above Kitchen Cabinets, 6 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-18": [
  {
   "asin": "B0H7SV7BCH",
   "title": "Mini Christmas Taper Candle Ring Wreaths with Baby's Breath, Set of 6",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0HC64P527",
   "title": "Cindeer Lighted Christmas Garland for Above Kitchen Cabinets, 6 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-20": [
  {
   "asin": "B0HC64P527",
   "title": "Cindeer Lighted Christmas Garland for Above Kitchen Cabinets, 6 ft",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0DGQ1LYH7",
   "title": "Acrylic Candy Cane and Peppermint Gems, 91 Pcs, Christmas Vase and Tray Filler",
   "w": 1000,
   "h": 1000
  }
 ],
 "kitchen-07": [
  {
   "asin": "B0HKMKY9DC",
   "title": "LED Snowflake Crystal Hanging Christmas Ornament",
   "w": 1496,
   "h": 1500
  },
  {
   "asin": "B0B4RLL37W",
   "title": "Crystal Snowflake Ornaments for Christmas Tree, Winter Wonderland Decorations, 18 Pcs",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-05": [
  {
   "asin": "B0DGTBS44S",
   "title": "Champagne Gold Christmas Ball Ornaments Set with Artificial Flowers",
   "w": 1000,
   "h": 1000
  },
  {
   "asin": "B0DG2QSX14",
   "title": "Aridantrp Gold Glitter Ribbon for Christmas Tree, 1.5 Inch, 10 Yards",
   "w": 1500,
   "h": 1423
  }
 ],
 "kitchen-08": [
  {
   "asin": "B0DMSLMKDL",
   "title": "Stella Baico 3-Pack Glass Apothecary Jars with Lids",
   "w": 1373,
   "h": 1273
  },
  {
   "asin": "B0CM8DCL2D",
   "title": "50 Pcs Peppermint Christmas Ornaments, Fake Peppermint Candy for Crafts and Decor",
   "w": 1434,
   "h": 1294
  }
 ],
 "kitchen-31": [
  {
   "asin": "B0H9MF8D3X",
   "title": "Gold Taper Candle Holders Set of 6, Brass Metal Candlesticks",
   "w": 1414,
   "h": 984
  },
  {
   "asin": "B0FL74ZF34",
   "title": "Glitzhome 2 Pcs 14 Inch Artificial Red Berry Christmas Wreaths",
   "w": 1500,
   "h": 745
  }
 ],
 "kitchen-29": [
  {
   "asin": "B079NN941P",
   "title": "10 Inch Vintage Inspired White Metal Enamel Pitcher Vase",
   "w": 746,
   "h": 971
  },
  {
   "asin": "B09Q386NLC",
   "title": "Amagic Gray Glass Flameless LED Candles, Battery Operated, Set of 3",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-30": [
  {
   "asin": "B0GYRV8HYG",
   "title": "2 Pcs Gold Christmas Nutcracker, 15 Inch Wooden Figure",
   "w": 1198,
   "h": 1500
  },
  {
   "asin": "B0FRSGW4FD",
   "title": "100 Pack Red and Gold Christmas Ball Ornaments, Hand-Painted Shatterproof",
   "w": 1446,
   "h": 1434
  }
 ],
 "kitchen-32": [
  {
   "asin": "B0HBCX3YZQ",
   "title": "Santa Delight 3-D Mugs, Set of 4, 18 oz Sculptural Santa Face Ceramic Mugs",
   "w": 1208,
   "h": 1500
  },
  {
   "asin": "B0HH8ZDRLQ",
   "title": "Vintage Gold Christmas Bells on Jute Rope, Wreath Door Decor",
   "w": 1326,
   "h": 1500
  }
 ],
 "kitchen-33": [
  {
   "asin": "B0H6CJ6D9W",
   "title": "Ceramic Gingerbread House Cookie Jar, 9.5 Inch Tall with Lid",
   "w": 1383,
   "h": 1500
  },
  {
   "asin": "B0FL74ZF34",
   "title": "Glitzhome 2 Pcs 14 Inch Artificial Red Berry Christmas Wreaths",
   "w": 1500,
   "h": 745
  }
 ],
 "kitchen-34": [
  {
   "asin": "B0GYRV8HYG",
   "title": "2 Pcs Gold Christmas Nutcracker, 15 Inch Wooden Figure",
   "w": 1198,
   "h": 1500
  },
  {
   "asin": "B0GQCWJ5YM",
   "title": "Flocked Pine Mini Artificial Christmas Trees with Pinecones, 12 Inch, Set of 3",
   "w": 1500,
   "h": 644
  }
 ],
 "kitchen-36": [
  {
   "asin": "B0DGTBS44S",
   "title": "Champagne Gold Christmas Ball Ornaments Set with Artificial Flowers",
   "w": 1000,
   "h": 1000
  },
  {
   "asin": "B0D9GQXKDF",
   "title": "Red Velvet Ribbon for Gift Wrapping, 4 Rolls x 10 Yards",
   "w": 1486,
   "h": 1500
  }
 ],
 "kitchen-06": [
  {
   "asin": "B0C4KL3PLK",
   "title": "COLORSPEC 24 Inch Eucalyptus Wreath with Olive Leaves and Berries",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0C6DHSL1V",
   "title": "Treen Art Star Tree Shaped Acacia Wood Cutting Board",
   "w": 618,
   "h": 973
  }
 ],
 "kitchen-22": [
  {
   "asin": "B0C4KL3PLK",
   "title": "COLORSPEC 24 Inch Eucalyptus Wreath with Olive Leaves and Berries",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CBMTZY38",
   "title": "FESTWIND Christmas Tiered Tray Decor, Merry Christmas Block Sign",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-03": [
  {
   "asin": "B092JPTLCS",
   "title": "Mud Pie Christmas Wooden Carved Tree Sitter, Large",
   "w": 314,
   "h": 1500
  },
  {
   "asin": "B0HC64P527",
   "title": "Cindeer Lighted Christmas Garland for Above Kitchen Cabinets, 6 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-04": [
  {
   "asin": "B0DJDHKHL9",
   "title": "Christmas Plaid Kitchen Hand Dish Towel, Red Green White Tartan, Set of 4",
   "w": 1500,
   "h": 984
  },
  {
   "asin": "B07192NDY6",
   "title": "Comfify White Ceramic Mason Jar Utensil Holder",
   "w": 1017,
   "h": 1500
  }
 ],
 "kitchen-25": [
  {
   "asin": "B0H6CJ6D9W",
   "title": "Ceramic Gingerbread House Cookie Jar, 9.5 Inch Tall with Lid",
   "w": 1383,
   "h": 1500
  },
  {
   "asin": "B0C6DHSL1V",
   "title": "Treen Art Star Tree Shaped Acacia Wood Cutting Board",
   "w": 618,
   "h": 973
  }
 ],
 "kitchen-16": [
  {
   "asin": "B0H8NNFYNY",
   "title": "12 Pcs Christmas Gingerbread House Decor, Vintage Xmas Table Centerpiece",
   "w": 1343,
   "h": 1500
  },
  {
   "asin": "B0CM8DCL2D",
   "title": "50 Pcs Peppermint Christmas Ornaments, Fake Peppermint Candy for Crafts and Decor",
   "w": 1434,
   "h": 1294
  }
 ],
 "kitchen-35": [
  {
   "asin": "B0DJDHKHL9",
   "title": "Christmas Plaid Kitchen Hand Dish Towel, Red Green White Tartan, Set of 4",
   "w": 1500,
   "h": 984
  },
  {
   "asin": "B0DGTBS44S",
   "title": "Champagne Gold Christmas Ball Ornaments Set with Artificial Flowers",
   "w": 1000,
   "h": 1000
  }
 ],
 "kitchen-19": [
  {
   "asin": "B0HBCX3YZQ",
   "title": "Santa Delight 3-D Mugs, Set of 4, 18 oz Sculptural Santa Face Ceramic Mugs",
   "w": 1208,
   "h": 1500
  },
  {
   "asin": "B0BCQRGPV3",
   "title": "Christmas Tree Shaped Wood Cutting Board with Handle, 14x11 Inch",
   "w": 1181,
   "h": 1500
  }
 ],
 "kitchen-21": [
  {
   "asin": "B0HBCX3YZQ",
   "title": "Santa Delight 3-D Mugs, Set of 4, 18 oz Sculptural Santa Face Ceramic Mugs",
   "w": 1208,
   "h": 1500
  },
  {
   "asin": "B0CM8DCL2D",
   "title": "50 Pcs Peppermint Christmas Ornaments, Fake Peppermint Candy for Crafts and Decor",
   "w": 1434,
   "h": 1294
  }
 ],
 "kitchen-13": [
  {
   "asin": "B08T9SPWJ7",
   "title": "SensaCasa Farmhouse Three Tiered Wood Tray Stand, Round",
   "w": 838,
   "h": 1500
  },
  {
   "asin": "B0CM8DCL2D",
   "title": "50 Pcs Peppermint Christmas Ornaments, Fake Peppermint Candy for Crafts and Decor",
   "w": 1434,
   "h": 1294
  }
 ],
 "kitchen-14": [
  {
   "asin": "B0DMSLMKDL",
   "title": "Stella Baico 3-Pack Glass Apothecary Jars with Lids",
   "w": 1373,
   "h": 1273
  },
  {
   "asin": "B0CM8DCL2D",
   "title": "50 Pcs Peppermint Christmas Ornaments, Fake Peppermint Candy for Crafts and Decor",
   "w": 1434,
   "h": 1294
  }
 ],
 "kitchen-15": [
  {
   "asin": "B0GTNDSR1M",
   "title": "CREATCABIN But First Coffee Wood Sign, 12 x 6 Inch",
   "w": 1500,
   "h": 1295
  },
  {
   "asin": "B0BC3XK6XZ",
   "title": "QIKSION Christmas Coffee Mugs, Set of 6, 14 oz Hot Chocolate Mugs",
   "w": 1500,
   "h": 1144
  }
 ],
 "kitchen-23": [
  {
   "asin": "B0CM4WQJKS",
   "title": "Mr. Christmas 9.5 Inch Ceramic Lit Gingerbread House Cookie Jar",
   "w": 1224,
   "h": 1500
  },
  {
   "asin": "B0HC3TCVFZ",
   "title": "6 ft Gingerbread Man Christmas Garland with 30 Lights",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-24": [
  {
   "asin": "B0HC3TCVFZ",
   "title": "6 ft Gingerbread Man Christmas Garland with 30 Lights",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0H6CJ6D9W",
   "title": "Ceramic Gingerbread House Cookie Jar, 9.5 Inch Tall with Lid",
   "w": 1383,
   "h": 1500
  }
 ],
 "kitchen-26": [
  {
   "asin": "B0D6MB8T9X",
   "title": "MacKenzie-Childs Bake Shop Gingerbread House Cookie Jar",
   "w": 1143,
   "h": 1500
  },
  {
   "asin": "B0H3KR7VFR",
   "title": "Yungyan Christmas Gingerbread Tree Cookie Jar with Lid, 8.7 Inch",
   "w": 1500,
   "h": 1500
  }
 ],
 "kitchen-27": [
  {
   "asin": "B0H5K7MTBD",
   "title": "12 Pcs Christmas Gingerbread House Decor, Pink Pastel Table Centerpiece",
   "w": 1500,
   "h": 1432
  },
  {
   "asin": "B08T9SPWJ7",
   "title": "SensaCasa Farmhouse Three Tiered Wood Tray Stand, Round",
   "w": 838,
   "h": 1500
  }
 ],
 "kitchen-28": [
  {
   "asin": "B0HC3TCVFZ",
   "title": "6 ft Gingerbread Man Christmas Garland with 30 Lights",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CM4WQJKS",
   "title": "Mr. Christmas 9.5 Inch Ceramic Lit Gingerbread House Cookie Jar",
   "w": 1224,
   "h": 1500
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Light Up the Space Above the Cabinets",
  "paras": [
   "The dead space above kitchen cabinets is the easiest place to add Christmas.",
   "Garland with tiny lights, candles and gold ornaments runs along the top here, so a warm glow spills down the wall after dark.",
   "<ul><li>Clip it to the cabinet top with removable hooks, and skip the nails.</li><li>Use battery candles, since real flames beside dry garland are a fire risk.</li></ul>"
  ],
  "key": "kitchen-01",
  "_orig": [
   "The dead space above kitchen cabinets is the easiest place to add Christmas.",
   "Garland with tiny lights, candles and gold ornaments runs along the top here, so a warm glow spills down the wall after dark.",
   "Clip it to the cabinet top with removable hooks, and skip the nails.",
   "Use battery candles, since real flames beside dry garland are a fire risk."
  ]
 },
 {
  "n": 2,
  "title": "Wrap the Corner and Let the Garland Drop",
  "paras": [
   "<p><strong>Garland looks best when it has somewhere to go.</strong> This one wraps the corner and drops down the side of the cabinet run, studded with ornaments, pinecones and little gift tags.</p>",
   "<ul><li>The drop is what makes it look designed. A straight line across looks like an afterthought.</li><li>Buy garland about a foot longer than the cabinet run.</li></ul>"
  ],
  "key": "kitchen-12",
  "_orig": [
   "Garland looks best when it has somewhere to go.",
   "This one wraps the corner and drops down the side of the cabinet run, studded with ornaments, pinecones and little gift tags.",
   "The drop is what makes it look designed. A straight line across looks like an afterthought.",
   "Buy garland about a foot longer than the cabinet run."
  ]
 },
 {
  "n": 3,
  "title": "Pick a Corner and Start There",
  "paras": [
   "Corners are where garland looks most generous. A lit garland follows the cabinet corner here, with a small tree and a basket of greenery on the island below.",
   "Place a pendant light or lamp nearby so the garland glows at night. Make sure you can still open the cabinet doors."
  ],
  "key": "kitchen-11",
  "_orig": [
   "Corners are where garland looks most generous.",
   "A lit garland follows the cabinet corner here, with a small tree and a basket of greenery on the island below.",
   "Place a pendant light or lamp nearby so the garland glows at night.",
   "Make sure you can still open the cabinet doors."
  ]
 },
 {
  "n": 4,
  "title": "Frame the Window",
  "paras": [
   "A window is a ready-made picture frame.",
   "Garland with lights outlines this kitchen window, and brass candlesticks and little trees stand on the counter below.",
   "Fix it with small clear hooks, and keep the latch and the blinds clear.",
   "Use warm white lights, which feel like candlelight and flatter the garland."
  ],
  "key": "kitchen-10",
  "_orig": [
   "A window is a ready-made picture frame.",
   "Garland with lights outlines this kitchen window, and brass candlesticks and little trees stand on the counter below.",
   "Fix it with small clear hooks, and keep the latch and the blinds clear.",
   "Use warm white lights, which feel like candlelight and flatter the garland."
  ]
 },
 {
  "n": 5,
  "title": "Line Up Little Trees at the Sink Window",
  "paras": [
   "<p><strong>The sill above the sink is prime Christmas real estate.</strong> Flocked mini trees in white pots, each tied with a red bow, stand shoulder to shoulder here, with garland and red ribbons above.</p>",
   "Odd numbers and mixed heights look natural. Rows of identical trees look like soldiers.",
   "Choose faux, because sink windows get splashed."
  ],
  "key": "kitchen-02",
  "_orig": [
   "The sill above the sink is prime Christmas real estate.",
   "Flocked mini trees in white pots, each tied with a red bow, stand shoulder to shoulder here, with garland and red ribbons above.",
   "Odd numbers and mixed heights look natural. Rows of identical trees look like soldiers.",
   "Choose faux, because sink windows get splashed."
  ]
 },
 {
  "n": 6,
  "title": "Hang a Banner, but Mind the Heat",
  "paras": [
   "Paper and fabric belong far from a burner.",
   "A red Merry Christmas banner is strung along this backsplash, with garland tied with red ribbons along the cabinet tops.",
   "<ul><li>Hang it at the far end of the run, as far from the cooktop as you can.</li><li>If you don't have space, spell it out on the wall with removable letters instead.</li></ul>"
  ],
  "key": "kitchen-09",
  "_orig": [
   "Paper and fabric belong far from a burner.",
   "A red Merry Christmas banner is strung along this backsplash, with garland tied with red ribbons along the cabinet tops.",
   "Hang it at the far end of the run, as far from the cooktop as you can.",
   "If you don't have space, spell it out on the wall with removable letters instead."
  ]
 },
 {
  "n": 7,
  "title": "Hang One Big Sign Above the Cabinets",
  "paras": [
   "One large statement beats ten small ones.",
   "A Santa's Workshop sign fills the wall above these white cabinets, with flocked trees and candy-striped cones along the top, and a hot cocoa sign on the counter below.",
   "Use a lightweight tin or wooden sign, and screw it into the wall or a stud. Pick a sign that matches your kitchen's color so the rest of the decor can stay simple."
  ],
  "key": "kitchen-17",
  "_orig": [
   "One large statement beats ten small ones.",
   "A Santa's Workshop sign fills the wall above these white cabinets, with flocked trees and candy-striped cones along the top, and a hot cocoa sign on the counter below.",
   "Use a lightweight tin or wooden sign, and screw it into the wall or a stud.",
   "Pick a sign that matches your kitchen's color so the rest of the decor can stay simple."
  ]
 },
 {
  "n": 8,
  "title": "Hang Baby's Breath Wreaths on the Cabinet Doors",
  "paras": [
   "Small wreaths on cabinet doors are one of my favorite low-effort ideas.",
   "Baby's breath wreaths with plaid bows hang on these upper cabinets, while a butcher-block counter holds mugs of cocoa on a wood board with cinnamon sticks.",
   "<p><strong>Quick tip:</strong> Use a ribbon loop over the top of the door, so nothing marks the finish.</p>",
   "Dried baby's breath is delicate, so make sure the door doesn't slam it."
  ],
  "key": "kitchen-18",
  "_orig": [
   "Small wreaths on cabinet doors are one of my favorite low-effort ideas.",
   "Baby's breath wreaths with plaid bows hang on these upper cabinets, while a butcher-block counter holds mugs of cocoa on a wood board with cinnamon sticks.",
   "Use a ribbon loop over the top of the door, so nothing marks the finish.",
   "Dried baby's breath is delicate, so make sure the door doesn't slam it."
  ]
 },
 {
  "n": 9,
  "title": "Swag the Island Edge With Big Bows",
  "paras": [
   "Dress the island and the whole kitchen looks finished. A thick garland with oversized red and plaid bows hangs from the edge of this long island, and wreaths in the windows echo it.",
   "Attach the garland with removable clips under the lip of the countertop.",
   "Keep the bows at the corners and the end so stools still tuck in."
  ],
  "key": "kitchen-20",
  "_orig": [
   "Dress the island and the whole kitchen looks finished.",
   "A thick garland with oversized red and plaid bows hangs from the edge of this long island, and wreaths in the windows echo it.",
   "Attach the garland with removable clips under the lip of the countertop.",
   "Keep the bows at the corners and the end so stools still tuck in."
  ]
 },
 {
  "n": 10,
  "title": "Dress the Pendant Lights",
  "paras": [
   "Pendants over an island are the perfect hanging spot.",
   "Snowflake and ornament decorations drift among the pendant lights here, with a lit tree glowing in the window beyond. Never hang flammable pieces on hot bulbs. LED or lightweight ornaments hung from the cord are safer.",
   "Use clear fishing line, and vary the lengths so they don't look in a row."
  ],
  "key": "kitchen-07",
  "_orig": [
   "Pendants over an island are the perfect hanging spot.",
   "Snowflake and ornament decorations drift among the pendant lights here, with a lit tree glowing in the window beyond.",
   "Never hang flammable pieces on hot bulbs. LED or lightweight ornaments hung from the cord are safer.",
   "Use clear fishing line, and vary the lengths so they don't look in a row."
  ]
 },
 {
  "n": 11,
  "title": "Warm Up Marble With Gold",
  "paras": [
   "Marble can look cold in winter. Gold fixes that.",
   "A gold and champagne tree stands beside a white island here, with gold plates and glasses on a mirrored tray in front.",
   "<ul><li>Put your gold things on a tray. It groups them and protects the stone.</li><li>Match the tray's metal to your faucet so it looks like it belongs.</li></ul>"
  ],
  "key": "kitchen-05",
  "_orig": [
   "Marble can look cold in winter. Gold fixes that.",
   "A gold and champagne tree stands beside a white island here, with gold plates and glasses on a mirrored tray in front.",
   "Put your gold things on a tray. It groups them and protects the stone.",
   "Match the tray's metal to your faucet so it looks like it belongs."
  ]
 },
 {
  "n": 12,
  "title": "Fill Apothecary Jars With Peppermints",
  "paras": [
   "<p><strong>Candy is decor with a built-in color palette.</strong> Glass apothecary jars hold peppermint candy on this marble island, with red-striped plates and towels and a long garland beside them.</p>",
   "<ul><li>If the jars will sit for weeks, choose faux peppermints. Real ones get sticky.</li><li>Use three jars in different heights, and tuck garland around the base.</li></ul>"
  ],
  "key": "kitchen-08",
  "_orig": [
   "Candy is decor with a built-in color palette.",
   "Glass apothecary jars hold peppermint candy on this marble island, with red-striped plates and towels and a long garland beside them.",
   "If the jars will sit for weeks, choose faux peppermints. Real ones get sticky.",
   "Use three jars in different heights, and tuck garland around the base."
  ]
 },
 {
  "n": 13,
  "title": "Run Berries Down the Island",
  "paras": [
   "A runner is the fastest way to dress an island. Red berries and brass candlesticks with white tapers run along this island, with a bowl of apples at one end.",
   "Keep the runner narrower than the island so you still have working space. Vary candlestick heights, and use battery tapers if the kids are around."
  ],
  "key": "kitchen-31",
  "_orig": [
   "A runner is the fastest way to dress an island.",
   "Red berries and brass candlesticks with white tapers run along this island, with a bowl of apples at one end.",
   "Keep the runner narrower than the island so you still have working space.",
   "Vary candlestick heights, and use battery tapers if the kids are around."
  ]
 },
 {
  "n": 14,
  "title": "Make a Small Centerpiece With One Vase",
  "paras": [
   "A small centerpiece leaves your counter usable.",
   "A white ring-shaped vase holds pine and red berries on a round wooden tray here, with an amber candle, a small tree and a gold deer.",
   "Keep it under twelve inches tall, so people can see each other across the island.",
   "A tray protects granite from candle rings."
  ],
  "key": "kitchen-29",
  "_orig": [
   "A small centerpiece leaves your counter usable.",
   "A white ring-shaped vase holds pine and red berries on a round wooden tray here, with an amber candle, a small tree and a gold deer.",
   "Keep it under twelve inches tall, so people can see each other across the island.",
   "A tray protects granite from candle rings."
  ]
 },
 {
  "n": 15,
  "title": "Stagger a Nutcracker Trio",
  "paras": [
   "<p><strong>Odd numbers always look better.</strong> Three wooden nutcrackers stand along the middle of this island among greenery and gold ornaments, with wreaths in the windows behind.</p>",
   "Stagger them slightly instead of in a perfect line.",
   "Leave the island edges clear for homework and snacks."
  ],
  "key": "kitchen-30",
  "_orig": [
   "Odd numbers always look better.",
   "Three wooden nutcrackers stand along the middle of this island among greenery and gold ornaments, with wreaths in the windows behind.",
   "Stagger them slightly instead of in a perfect line.",
   "Leave the island edges clear for homework and snacks."
  ]
 },
 {
  "n": 16,
  "title": "Use a Santa Mug as a Vase",
  "paras": [
   "Mugs make charming vases.",
   "A Santa mug holds red berries and pine on this round tray, with red berry cone trees, brass bells and candlesticks, set in a ring of garland.",
   "<ul><li>Line the mug with a small jar for fresh stems, or use faux ones.</li><li>Group the bells in odd numbers and let one lie on its side.</li></ul>"
  ],
  "key": "kitchen-32",
  "_orig": [
   "Mugs make charming vases.",
   "A Santa mug holds red berries and pine on this round tray, with red berry cone trees, brass bells and candlesticks, set in a ring of garland.",
   "Line the mug with a small jar for fresh stems, or use faux ones.",
   "Group the bells in odd numbers and let one lie on its side."
  ]
 },
 {
  "n": 17,
  "title": "Nestle Gingerbread Houses in a Basket",
  "paras": [
   "A basket gathers a scene and moves in one lift.",
   "Two gingerbread houses with red bows sit with a red mug and mini trees in a woven tray here, with candy canes and a check cloth.",
   "Use a washable cloth, since things will get splashed. Hide the cords for battery lights under the greenery."
  ],
  "key": "kitchen-33",
  "_orig": [
   "A basket gathers a scene and moves in one lift.",
   "Two gingerbread houses with red bows sit with a red mug and mini trees in a woven tray here, with candy canes and a check cloth.",
   "Use a washable cloth, since things will get splashed.",
   "Hide the cords for battery lights under the greenery."
  ]
 },
 {
  "n": 18,
  "title": "Build a Tiny Scene on a Round Tray",
  "paras": [
   "One small tray can say Christmas.",
   "A rattan tray holds a white nutcracker, a flocked tree and a few dried orange slices on this stone counter.",
   "<p><strong>Quick tip:</strong> Three pieces are plenty. Add a fourth and you start losing the scene.</p>",
   "Keep the scale right. A big tray with a tiny scene looks lost."
  ],
  "key": "kitchen-34",
  "_orig": [
   "One small tray can say Christmas.",
   "A rattan tray holds a white nutcracker, a flocked tree and a few dried orange slices on this stone counter.",
   "Three pieces are plenty. Add a fourth and you start losing the scene.",
   "Keep the scale right. A big tray with a tiny scene looks lost."
  ]
 },
 {
  "n": 19,
  "title": "Set a Little Tree on the Island",
  "paras": [
   "You don't need a big tree to feel Christmas. A small potted tree with lights and red ornaments stands next to wrapped gifts and a basket here, with tiny lights behind on the backsplash.",
   "Choose a battery-lit one so you don't need an outlet.",
   "Wrap empty boxes, which look the part and weigh nothing."
  ],
  "key": "kitchen-36",
  "_orig": [
   "You don't need a big tree to feel Christmas.",
   "A small potted tree with lights and red ornaments stands next to wrapped gifts and a basket here, with tiny lights behind on the backsplash.",
   "Choose a battery-lit one so you don't need an outlet.",
   "Wrap empty boxes, which look the part and weigh nothing."
  ]
 },
 {
  "n": 20,
  "title": "Hang a Wreath Where You Cook",
  "paras": [
   "A wreath is a gift for a plain wall.",
   "A greenery wreath with a red bow hangs above this range hood, with tree-shaped cutting boards leaning on the backsplash below. Keep it well above the burners. Heat and grease dull real greens, so choose faux.",
   "Cutting boards are decor that you can still use."
  ],
  "key": "kitchen-06",
  "_orig": [
   "A wreath is a gift for a plain wall.",
   "A greenery wreath with a red bow hangs above this range hood, with tree-shaped cutting boards leaning on the backsplash below.",
   "Keep it well above the burners. Heat and grease dull real greens, so choose faux.",
   "Cutting boards are decor that you can still use."
  ]
 },
 {
  "n": 21,
  "title": "Spell Out Merry on the Backsplash",
  "paras": [
   "Letters are the easiest big-impact piece for a stove wall.",
   "Red MERRY letters stand above this stove, with a wreath on the microwave and a red towel tied to the oven door.",
   "<ul><li>Keep paper and fabric away from the burners.</li><li>A red towel on the oven handle is a classic.</li></ul>"
  ],
  "key": "kitchen-22",
  "_orig": [
   "Letters are the easiest big-impact piece for a stove wall.",
   "Red MERRY letters stand above this stove, with a wreath on the microwave and a red towel tied to the oven door.",
   "Keep paper and fabric away from the burners.",
   "A red towel on the oven handle is a classic."
  ]
 },
 {
  "n": 22,
  "title": "Style One Shelf Like a Pro",
  "paras": [
   "<p><strong>One styled shelf beats five half-done ones.</strong> A carved wooden tree, a vintage clock and white pitchers sit on this shelf, with garland along the edge and utensils hanging below.</p>",
   "<ul><li>Think in a triangle: tall on one side, medium on the other and low in the middle.</li><li>Keep your useful rail of tools. The kitchen needs to work.</li></ul>"
  ],
  "key": "kitchen-03",
  "_orig": [
   "One styled shelf beats five half-done ones.",
   "A carved wooden tree, a vintage clock and white pitchers sit on this shelf, with garland along the edge and utensils hanging below.",
   "Think in a triangle: tall on one side, medium on the other and low in the middle.",
   "Keep your useful rail of tools. The kitchen needs to work."
  ]
 },
 {
  "n": 23,
  "title": "Dress Up Your Mixer",
  "paras": [
   "The best decor is something you use every day. A green stand mixer sits on a wooden tray with a plaid towel, greenery, a jar labeled Christmas Baking and a candle in amber glass.",
   "Put it all on a tray so you can slide it aside when you need to bake. Keep greenery away from the bowl area and wipe the tray after use."
  ],
  "key": "kitchen-04",
  "_orig": [
   "The best decor is something you use every day.",
   "A green stand mixer sits on a wooden tray with a plaid towel, greenery, a jar labeled Christmas Baking and a candle in amber glass.",
   "Put it all on a tray so you can slide it aside when you need to bake.",
   "Keep greenery away from the bowl area and wipe the tray after use."
  ]
 },
 {
  "n": 24,
  "title": "Prop a Cookie Jar on a Cutting Board",
  "paras": [
   "A cutting board makes a good riser.",
   "A gingerbread house cookie jar sits on a wood board here, next to a red ribbon and a candle, with a few tiny houses beside it.",
   "Use the jar for real cookies and the display pays you back.",
   "Pick a board with a handle so you can pull it off the counter quickly."
  ],
  "key": "kitchen-25",
  "_orig": [
   "A cutting board makes a good riser.",
   "A gingerbread house cookie jar sits on a wood board here, next to a red ribbon and a candle, with a few tiny houses beside it.",
   "Use the jar for real cookies and the display pays you back.",
   "Pick a board with a handle so you can pull it off the counter quickly."
  ]
 },
 {
  "n": 25,
  "title": "Corral the Counter in a Long Tray",
  "paras": [
   "<p><strong>A long tray keeps small things together.</strong> A wooden tray holds a tall Merry Christmas sign, a snowman jar, a cookie canister, a red mug with a rolling pin and small trees on this counter.</p>",
   "You can lift it, wipe under it and put it back.",
   "Group small things in a tray and they look like one big idea."
  ],
  "key": "kitchen-16",
  "_orig": [
   "A long tray keeps small things together.",
   "A wooden tray holds a tall Merry Christmas sign, a snowman jar, a cookie canister, a red mug with a rolling pin and small trees on this counter.",
   "You can lift it, wipe under it and put it back.",
   "Group small things in a tray and they look like one big idea."
  ]
 },
 {
  "n": 26,
  "title": "Use a Tree-Shaped Cookie Jar as Decor",
  "paras": [
   "A good jar does decoration and storage.",
   "A green ceramic tree canister sits with tree-print mugs, a white house and dried orange slices on a wood tray here, with a tree-print towel behind.",
   "<ul><li>Fill the jar with real cookies.</li><li>Hang the towel so the print matches the mugs.</li></ul>"
  ],
  "key": "kitchen-35",
  "_orig": [
   "A good jar does decoration and storage.",
   "A green ceramic tree canister sits with tree-print mugs, a white house and dried orange slices on a wood tray here, with a tree-print towel behind.",
   "Fill the jar with real cookies.",
   "Hang the towel so the print matches the mugs."
  ]
 },
 {
  "n": 27,
  "title": "Corral Santa Mugs on a Tiered Rack",
  "paras": [
   "Mugs are the star of a cocoa corner.",
   "A tiered rack here holds Santa face mugs, candy canes and a dish of coal, with a Santa planter and a Rudolph milk and cookie sign on a wood board nearby.",
   "Hang or stack mugs by their handles so guests can grab one. Put the board under the display to protect the counter."
  ],
  "key": "kitchen-19",
  "_orig": [
   "Mugs are the star of a cocoa corner.",
   "A tiered rack here holds Santa face mugs, candy canes and a dish of coal, with a Santa planter and a Rudolph milk and cookie sign on a wood board nearby.",
   "Hang or stack mugs by their handles so guests can grab one.",
   "Put the board under the display to protect the counter."
  ]
 },
 {
  "n": 28,
  "title": "Choose One Red Accent and Repeat It",
  "paras": [
   "A single accent color makes a kitchen look planned.",
   "This farmhouse kitchen repeats red in the pendant lights, a poinsettia on the island, a gingham towel on the rail and a striped runner on the floor.",
   "<p><strong>Quick tip:</strong> Choose one color and repeat it three or more times at different heights.</p>",
   "Small touches like a towel are the cheapest way to do it."
  ],
  "key": "kitchen-21",
  "_orig": [
   "A single accent color makes a kitchen look planned.",
   "This farmhouse kitchen repeats red in the pendant lights, a poinsettia on the island, a gingham towel on the rail and a striped runner on the floor.",
   "Choose one color and repeat it three or more times at different heights.",
   "Small touches like a towel are the cheapest way to do it."
  ]
 },
 {
  "n": 29,
  "title": "Keep a Cocoa Bar Small",
  "paras": [
   "A two-tier stand is plenty for a small counter. A Christmas mug of candy canes, a Coffee sign, a Hot Cocoa Bar chalkboard, a jar of marshmallows, a snowman and a gingerbread cookie all sit on this white tray.",
   "Stack upward when you don't have much counter.",
   "Fill the jar with real marshmallows and refill it as it empties."
  ],
  "key": "kitchen-13",
  "_orig": [
   "A two-tier stand is plenty for a small counter.",
   "A Christmas mug of candy canes, a Coffee sign, a Hot Cocoa Bar chalkboard, a jar of marshmallows, a snowman and a gingerbread cookie all sit on this white tray.",
   "Stack upward when you don't have much counter.",
   "Fill the jar with real marshmallows and refill it as it empties."
  ]
 },
 {
  "n": 30,
  "title": "Turn a Shelf Into a Cocoa Corner",
  "paras": [
   "A shelf can be your coffee bar.",
   "Two rustic shelves hold spices, cinnamon sticks and canisters above a Coffee and Cocoa Corner sign, with an espresso machine, mugs and candy canes below and greenery with lights on top. Decant everything into labeled jars so it looks tidy.",
   "Install shelves where you can reach the jars without a stool."
  ],
  "key": "kitchen-14",
  "_orig": [
   "A shelf can be your coffee bar.",
   "Two rustic shelves hold spices, cinnamon sticks and canisters above a Coffee and Cocoa Corner sign, with an espresso machine, mugs and candy canes below and greenery with lights on top.",
   "Decant everything into labeled jars so it looks tidy.",
   "Install shelves where you can reach the jars without a stool."
  ]
 },
 {
  "n": 31,
  "title": "Show Off a Wall of Mugs",
  "paras": [
   "Mugs deserve to be on display.",
   "A corner of dark shelves holds Christmas mugs in red, green and white, lit softly, with a But First Coffee sign and a coffee maker below.",
   "<ul><li>Space shelves twelve to fourteen inches apart so mugs fit.</li><li>Add warm LED strip lights under the shelf for a glow.</li></ul>"
  ],
  "key": "kitchen-15",
  "_orig": [
   "Mugs deserve to be on display.",
   "A corner of dark shelves holds Christmas mugs in red, green and white, lit softly, with a But First Coffee sign and a coffee maker below.",
   "Space shelves twelve to fourteen inches apart so mugs fit.",
   "Add warm LED strip lights under the shelf for a glow."
  ]
 },
 {
  "n": 32,
  "title": "Wrap the Range Hood in Gingerbread",
  "paras": [
   "<p><strong>Some kitchens go all out, and this is one.</strong> A giant gingerbread house frames the range hood, with candy-striped stools and a village of gingerbread houses on the island.</p>",
   "<ul><li>You don't need to build it. A wreath and garland trim around the hood give you the idea.</li><li>Never cover the hood vent, and keep decor clear of the opening.</li></ul>"
  ],
  "key": "kitchen-23",
  "_orig": [
   "Some kitchens go all out, and this is one.",
   "A giant gingerbread house frames the range hood, with candy-striped stools and a village of gingerbread houses on the island.",
   "You don't need to build it. A wreath and garland trim around the hood give you the idea.",
   "Never cover the hood vent, and keep decor clear of the opening."
  ]
 },
 {
  "n": 33,
  "title": "Trim the Island With Gingerbread",
  "paras": [
   "Start small if you want this look. A gingerbread-style roof and cutouts are strung with lights over this island, with garland on top and candy-striped stool covers.",
   "You can cut shapes from foam board and paint them with acrylic. Use removable tape and check that it doesn't peel paint."
  ],
  "key": "kitchen-24",
  "_orig": [
   "Start small if you want this look.",
   "A gingerbread-style roof and cutouts are strung with lights over this island, with garland on top and candy-striped stool covers.",
   "You can cut shapes from foam board and paint them with acrylic.",
   "Use removable tape and check that it doesn't peel paint."
  ]
 },
 {
  "n": 34,
  "title": "Treat a Hutch Like a Bakery Window",
  "paras": [
   "A hutch is the perfect place for a collection.",
   "A white hutch is filled with gingerbread cookie jars, houses, deer, signs and snowflakes here, like a bakery window.",
   "Group by height and put the big pieces at the bottom.",
   "Edit. If every shelf is full, remove a third."
  ],
  "key": "kitchen-26",
  "_orig": [
   "A hutch is the perfect place for a collection.",
   "A white hutch is filled with gingerbread cookie jars, houses, deer, signs and snowflakes here, like a bakery window.",
   "Group by height and put the big pieces at the bottom.",
   "Edit. If every shelf is full, remove a third."
  ]
 },
 {
  "n": 35,
  "title": "Line Up a Gingerbread Family",
  "paras": [
   "<p><strong>Plush figures are friendly to kids.</strong> A tiered tray holds plush gingerbread figures in red bows around a gingerbread house, with a Yum sign and candy canes.</p>",
   "Tie a big bow on top to finish.",
   "Soft figures are safe for little hands."
  ],
  "key": "kitchen-27",
  "_orig": [
   "Plush figures are friendly to kids.",
   "A tiered tray holds plush gingerbread figures in red bows around a gingerbread house, with a Yum sign and candy canes.",
   "Tie a big bow on top to finish.",
   "Soft figures are safe for little hands."
  ]
 },
 {
  "n": 36,
  "title": "Line the Cabinet Tops With a Village",
  "paras": [
   "A village looks great at ceiling height.",
   "A row of gingerbread houses marches along the top of these cabinets on cotton snow, with fairy lights above.",
   "<ul><li>Use paper, foam or lightweight houses, and cover the cabinet tops with batting.</li><li>Check your ceiling clearance first.</li></ul>"
  ],
  "key": "kitchen-28",
  "_orig": [
   "A village looks great at ceiling height.",
   "A row of gingerbread houses marches along the top of these cabinets on cotton snow, with fairy lights above.",
   "Use paper, foam or lightweight houses, and cover the cabinet tops with batting.",
   "Check your ceiling clearance first."
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
<p>The kitchen is where everyone ends up during the holidays, so it deserves more than a single wreath on the fridge.</p>
<p>A few well-placed touches, like garland over the cabinets, a styled mug shelf or a gingerbread house on the counter, can change the whole room.</p>
<p>The catch is that a kitchen has to keep working: there is heat, grease, splashes and food. So before the 36 ideas, here is how I decorate one without getting in the way of cooking.</p>
${photo("hero")}

<h2>Five Rules for a Kitchen That Still Works</h2>
<p><strong>Go vertical first.</strong> The tops of cabinets, the windows and the walls are free. Counters aren't, so decorate those last.</p>
<p><strong>Respect the heat.</strong> Keep paper, fabric and dry garland well away from burners and the range hood. Wreaths belong above the hood, not over the flame.</p>
<p><strong>Use trays.</strong> A tray turns scattered decor into one object you can lift and wipe under in a second.</p>
<p><strong>Light it with batteries.</strong> Battery candles and fairy lights mean no outlet hunting and no open flame.</p>
<p><strong>Repeat one color.</strong> Red, gold or green. Three repeats at different heights is enough to look planned.</p>

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Common Kitchen Mistakes (and Fixes)</h2>
<p><strong>Crowding the counters.</strong> If you can't chop an onion, remove something.</p>
<p><strong>Hanging things near the stove.</strong> Heat and grease ruin decor, and paper can catch fire.</p>
<p><strong>Using food that spoils.</strong> Faux peppermints and cookies last all season. Real ones are for the day of the party.</p>
<p><strong>Forgetting to look up.</strong> The most dramatic spot in most kitchens is the space above the cabinets.</p>
<p>Start with one idea, one color and the top of the cabinets. You can always add the rest next year.</p>
`;

module.exports = { body };
