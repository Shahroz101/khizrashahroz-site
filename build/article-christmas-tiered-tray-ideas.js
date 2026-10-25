// Body content for "44 Christmas Tiered Tray Ideas for a Festive Kitchen
// Counter". Converted from the Dwelling Dream "44 Christmas Tiered Tray
// Ideas" source: all text rewritten from scratch and the ideas regrouped
// (cocoa bars, gingerbread, snowmen and winter, signs and gnomes, villages,
// buffalo plaid, ornaments and sweets). Photos are credited to their
// Pinterest pins; the supplied Amazon product pair stays under each photo.
// Rewritten 2026-10-25 in an advice-led voice (styling rules, the why behind
// each look, practical tips) after the first draft read like photo captions.
// Ends on text. Companion to how-to-style-a-tiered-tray (general styling).

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "christmas-tiered-tray-ideas";
const PRODUCT_DIR = "christmas-tiered-tray-ideas-products";

const PHOTOS = {
 "tray-22": {
  "w": 736,
  "h": 1177,
  "pin": "https://www.pinterest.com/pin/1123014857108707945/",
  "label": "Hot Cocoa Bar Tiered Tray",
  "alt": "Tiered tray with a Life Happens Coffee Helps sign and a snowman mug"
 },
 "tray-23": {
  "w": 737,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/1041598220079467196/",
  "label": "White Hot Cocoa Bar Tray",
  "alt": "Tiered tray with a Hot Cocoa Bar sign, snowman mug, and marshmallow jar"
 },
 "tray-18": {
  "w": 900,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/14355292556863470/",
  "label": "Cuddle in a Cup Cocoa Tray",
  "alt": "Tiered coffee station tray with a Cuddle in a Cup sign, milk jar, and candy canes"
 },
 "tray-02": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/150941025005349485/",
  "label": "Santa Mug Cocoa Station",
  "alt": "Wooden tray styled as a hot cocoa bar with Santa mugs, candy canes, and a Coal dish"
 },
 "tray-31": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/304696731046598228/",
  "label": "Peppermint Cocoa Bar Tray",
  "alt": "Galvanized metal tiered tray styled as a red and white hot cocoa bar"
 },
 "tray-43": {
  "w": 900,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/654921970829700948/",
  "label": "Hot Cocoa Sign and Gingerbread House Tray",
  "alt": "Tiered tray with a Hot Cocoa sign, Santa mugs, and a gingerbread house utensil holder"
 },
 "tray-41": {
  "w": 900,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/474426142006068803/",
  "label": "Holly Jolly Marshmallow Mug Tray",
  "alt": "Three-tier tray with marshmallow topped mugs and a Holly Jolly sign"
 },
 "tray-44": {
  "w": 674,
  "h": 1000,
  "pin": "https://www.pinterest.com/pin/7036943161013405/",
  "label": "Vintage Santa and Hot Cocoa Tray",
  "alt": "Vintage-style tiered tray with Santa Claus sign, teal mugs, and hot cocoa packets"
 },
 "tray-20": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/522980575501487391/",
  "label": "Red and White Mug Collection Tray",
  "alt": "Black tiered tray with a red and white floral mug collection and cream pitcher"
 },
 "tray-05": {
  "w": 1080,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/57209857761422551/",
  "label": "Gingerbread House and Cookie Tray",
  "alt": "Two-tier wooden tray with a lit gingerbread house and gingerbread cookie ornaments"
 },
 "tray-09": {
  "w": 736,
  "h": 920,
  "pin": "https://www.pinterest.com/pin/199425089746881468/",
  "label": "Gingerbread Village Tray on the Island",
  "alt": "Three-tier tray on a kitchen island with a gingerbread house, cookies, and mini trees"
 },
 "tray-10": {
  "w": 832,
  "h": 1248,
  "pin": "https://www.pinterest.com/pin/4598245665979914304/",
  "label": "Gingerbread Baker Tray With Star Cookies",
  "alt": "Tiered tray with a Sweet Bakes mug, gingerbread house, star cookies, and a mini rolling pin"
 },
 "tray-11": {
  "w": 1536,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/756182593716717833/",
  "label": "Tis the Season Gingerbread Tray",
  "alt": "Tiered tray with a Tis the Season mug, gingerbread house, and Christmas Calories Dont Count sign"
 },
 "tray-12": {
  "w": 636,
  "h": 821,
  "pin": "https://www.pinterest.com/pin/548102217168537689/",
  "label": "North Pole Bakery Gingerbread Tray",
  "alt": "Tiered tray with an Official North Pole Bakery sign and gingerbread figures"
 },
 "tray-13": {
  "w": 1492,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/1477812374817369/",
  "label": "Baking Christmas Memories Tray",
  "alt": "Three-tier galvanized metal tray with a gingerbread house and cookies"
 },
 "tray-14": {
  "w": 736,
  "h": 920,
  "pin": "https://www.pinterest.com/pin/805299977164718092/",
  "label": "Galvanized Tray With a Gingerbread House",
  "alt": "Tiered tray filled with gingerbread man figures, a gingerbread house, and a cookie tree"
 },
 "tray-15": {
  "w": 1179,
  "h": 2058,
  "pin": "https://www.pinterest.com/pin/4605564046144948288/",
  "label": "Gingerbread Family Tiered Tray",
  "alt": "Three-tier wood tray with a Tidings of Comfort and Joy sign and gingerbread figures"
 },
 "tray-16": {
  "w": 2238,
  "h": 3501,
  "pin": "https://www.pinterest.com/pin/507077239308811470/",
  "label": "Tidings of Comfort and Joy Gingerbread Tray",
  "alt": "Tiered tray with a gingerbread family sign, falala rolling pin, and cocoa mug"
 },
 "tray-25": {
  "w": 1080,
  "h": 1398,
  "pin": "https://www.pinterest.com/pin/193303009000466367/",
  "label": "Blue Snow Mug Snowman Tray",
  "alt": "Tiered tray with a blue Snow mug and ceramic snowman salt and pepper shakers"
 },
 "tray-26": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/1119426051161124246/",
  "label": "Wooden Snowman Pair Tray",
  "alt": "Tiered tray with two painted wood snowman cutouts wearing plaid scarves"
 },
 "tray-27": {
  "w": 900,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/251286854198524258/",
  "label": "Snowplace Like Home Tray",
  "alt": "Tiered tray with a Theres Snowplace Like Home sign and Rae Dunn snowman canisters"
 },
 "tray-24": {
  "w": 800,
  "h": 1080,
  "pin": "https://www.pinterest.com/pin/211669251232987659/",
  "label": "Snow Balls Sign Tray",
  "alt": "Tiered tray with a handmade Snow Balls 25 cents sign and wood bead garland"
 },
 "tray-19": {
  "w": 1024,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/4590927327218840832/",
  "label": "Snow and Sweater Weather Sign Tray",
  "alt": "Tiered tray with black and white Snow and Sweater Weather wood signs and string lights"
 },
 "tray-28": {
  "w": 768,
  "h": 960,
  "pin": "https://www.pinterest.com/pin/4603312266880720640/",
  "label": "Hello Winter Gnome Tray",
  "alt": "Tiered tray with a tall gnome figurine and a Hello Winter wood sign"
 },
 "tray-08": {
  "w": 600,
  "h": 940,
  "pin": "https://www.pinterest.com/pin/944981934312007689/",
  "label": "Winter Vibes Snowy House Tray",
  "alt": "Three-tier whitewashed tray with a snowy house topper and a Winter Vibes sign"
 },
 "tray-01": {
  "w": 810,
  "h": 1080,
  "pin": "https://www.pinterest.com/pin/99923685477829396/",
  "label": "Carol Sign and Gnome Tray",
  "alt": "Two-tier Christmas tray with carol-themed signs, a gnome, and a wood bead garland"
 },
 "tray-03": {
  "w": 720,
  "h": 1012,
  "pin": "https://www.pinterest.com/pin/314618723979345542/",
  "label": "Red Joy Mug and Mini House Tray",
  "alt": "Two-tier tray with a red Joy mug, a small lit house, and fresh greenery"
 },
 "tray-21": {
  "w": 900,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/724375921312615760/",
  "label": "Red Truck Mug and Gnome Tray",
  "alt": "Tiered tray with a red truck mug, Farm Fresh Christmas Trees sign, and gnome hat"
 },
 "tray-40": {
  "w": 360,
  "h": 480,
  "pin": "https://www.pinterest.com/pin/573153490086822823/",
  "label": "Believe Sign Winter Wonderland Tray",
  "alt": "Tiered tray with a red Better sign, mugs, and a Winter Wonderland sign"
 },
 "tray-29": {
  "w": 1536,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/278519558200762822/",
  "label": "Merry Tree Letters Tray",
  "alt": "Tiered tray with wood tree letters spelling Merry and a green Believe mug"
 },
 "tray-30": {
  "w": 720,
  "h": 960,
  "pin": "https://www.pinterest.com/pin/2322237301645806/",
  "label": "Fresh Cut Trees Santa Mug Tray",
  "alt": "Tiered tray with a Fresh Cut Trees sign and Santa face mugs"
 },
 "tray-06": {
  "w": 1080,
  "h": 1440,
  "pin": "https://www.pinterest.com/pin/22236591905452074/",
  "label": "Red Truck and Reindeer Mug Tray",
  "alt": "Two-tier wood tray with a red toy truck, a reindeer mug, and wood bead garland"
 },
 "tray-42": {
  "w": 699,
  "h": 1049,
  "pin": "https://www.pinterest.com/pin/498632989999191195/",
  "label": "Monogram Mug and Reindeer Tray",
  "alt": "Wood tiered tray with a monogrammed mug and black wood reindeer silhouettes"
 },
 "tray-17": {
  "w": 736,
  "h": 981,
  "pin": "https://www.pinterest.com/pin/677932550208834382/",
  "label": "Black Reindeer Crossing Tray",
  "alt": "Black tiered tray with a Reindeer Crossing wood sign and cinnamon sticks"
 },
 "tray-07": {
  "w": 900,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/27373510231191182/",
  "label": "Lit Village House Tray",
  "alt": "Three-tier tray with lit white Christmas village houses and pinecones"
 },
 "tray-38": {
  "w": 736,
  "h": 1071,
  "pin": "https://www.pinterest.com/pin/275845545922030656/",
  "label": "Gold Mirrored Lit Village Tray",
  "alt": "Gold mirrored tiered tray with lit white Christmas village houses"
 },
 "tray-32": {
  "w": 625,
  "h": 760,
  "pin": "https://www.pinterest.com/pin/66076319524240705/",
  "label": "Season's Greetings Buffalo Plaid Tray",
  "alt": "Tiered tray with a Seasons Greetings sign and black and white buffalo plaid decor"
 },
 "tray-33": {
  "w": 736,
  "h": 1308,
  "pin": "https://www.pinterest.com/pin/806707352047697137/",
  "label": "Buffalo Plaid Ornament Tray",
  "alt": "Tiered tray with buffalo plaid fuzzy booties and a Snowplace Like Home sign"
 },
 "tray-34": {
  "w": 720,
  "h": 960,
  "pin": "https://www.pinterest.com/pin/352617845840064509/",
  "label": "Oh Holy Night Buffalo Plaid Tray",
  "alt": "Tiered tray filled with buffalo plaid ball ornaments and pinecones"
 },
 "tray-35": {
  "w": 419,
  "h": 640,
  "pin": "https://www.pinterest.com/pin/329396160251453046/",
  "label": "Buffalo Plaid Snowplace Tray",
  "alt": "Tiered tray with an Oh Holy Night sign and a buffalo plaid gift box"
 },
 "tray-37": {
  "w": 504,
  "h": 900,
  "pin": "https://www.pinterest.com/pin/144255994311215128/",
  "label": "Ornament-Filled Plaid Bow Tray",
  "alt": "Three-tier tray filled with red white and gold ball ornaments and a plaid bow"
 },
 "tray-04": {
  "w": 736,
  "h": 1227,
  "pin": "https://www.pinterest.com/pin/17592254793270570/",
  "label": "Knit Santa Candy Cane Tray",
  "alt": "Three-tier white Christmas tray with a Santa figurine, ornaments, and star cookies"
 },
 "tray-36": {
  "w": 736,
  "h": 1227,
  "pin": "https://www.pinterest.com/pin/245164773461741276/",
  "label": "Elegant White and Red Santa Tray",
  "alt": "Three-tier white tray with a knit Santa figurine, star cookie, and candy canes"
 },
 "tray-39": {
  "w": 672,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/4602045617810661952/",
  "label": "Wrapped Chocolate Truffle Tray",
  "alt": "Two-tier tray filled with foil-wrapped Christmas chocolate truffles"
 },
 "hero": {
  "w": 720,
  "h": 1012,
  "pin": "https://www.pinterest.com/pin/314618723979345542/",
  "label": "Red Joy Mug and Mini House Tray",
  "alt": "Two-tier tray with a red Joy mug, a small lit house, and fresh greenery"
 }
};

const PRODUCTS = {
 "tray-22": [
  {
   "asin": "B0B2YC8V6L",
   "title": "Life Happens Coffee Helps Rustic Wooden Tabletop Sign, 5x8 Inch",
   "w": 913,
   "h": 1500
  },
  {
   "asin": "B0G4LMFVSD",
   "title": "The Home Champs Cute Snowman Christmas Mug, Blue Hat and Scarf, 11 oz",
   "w": 1500,
   "h": 1382
  }
 ],
 "tray-23": [
  {
   "asin": "B0DCYYY6TL",
   "title": "Warm Up at the Hot Cocoa Bar Wooden Hanging Plaque, 10x5 Inch",
   "w": 1500,
   "h": 1356
  },
  {
   "asin": "B0B6HTLBHS",
   "title": "BBTO 36 Pcs Coffee Cup Christmas Ornaments, Wooden Hot Cocoa Mug Ornaments",
   "w": 1498,
   "h": 1500
  }
 ],
 "tray-18": [
  {
   "asin": "B0BMF5V545",
   "title": "Christmas Wooden Sign, Hot Chocolate Quote, Rustic, 16x16 Inch",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0B6HTLBHS",
   "title": "BBTO 36 Pcs Coffee Cup Christmas Ornaments, Wooden Hot Cocoa Mug Ornaments",
   "w": 1498,
   "h": 1500
  }
 ],
 "tray-02": [
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
 "tray-31": [
  {
   "asin": "B0BC3XK6XZ",
   "title": "QIKSION Christmas Coffee Mugs, Set of 6, 14 oz Hot Chocolate Mugs",
   "w": 1500,
   "h": 1144
  },
  {
   "asin": "B0CM8DCL2D",
   "title": "50 Pcs Peppermint Christmas Ornaments, Fake Peppermint Candy for Crafts and Decor",
   "w": 1434,
   "h": 1294
  }
 ],
 "tray-43": [
  {
   "asin": "B0CG9BC8LM",
   "title": "Hot Cocoa Christmas Wood Sign, Rustic Hanging Plaque, 8x10 Inch",
   "w": 926,
   "h": 1200
  },
  {
   "asin": "B0D8V5XLPF",
   "title": "BWFY Set of 2 Gingerbread Man Christmas Decorations with Chef Hat",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-41": [
  {
   "asin": "B08L5JQ44Q",
   "title": "Holly Jolly Christmas Wooden Sign, 12.75x11.75 Inch",
   "w": 969,
   "h": 762
  },
  {
   "asin": "B09SDZK98J",
   "title": "Mycts Marshmallow Mugs, Set of 4, Hot Chocolate Cocoa Mugs",
   "w": 1459,
   "h": 1240
  }
 ],
 "tray-44": [
  {
   "asin": "B0FWXC7CHX",
   "title": "Santa Claus Pattern Candy Snack Jar, Christmas Tinplate Organizer",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CM8DCL2D",
   "title": "50 Pcs Peppermint Christmas Ornaments, Fake Peppermint Candy for Crafts and Decor",
   "w": 1434,
   "h": 1294
  }
 ],
 "tray-20": [
  {
   "asin": "B0BC3XK6XZ",
   "title": "QIKSION Christmas Coffee Mugs, Set of 6, 14 oz Hot Chocolate Mugs",
   "w": 1500,
   "h": 1144
  },
  {
   "asin": "B0CM8DCL2D",
   "title": "50 Pcs Peppermint Christmas Ornaments, Fake Peppermint Candy for Crafts and Decor",
   "w": 1434,
   "h": 1294
  }
 ],
 "tray-05": [
  {
   "asin": "B0DBFJD973",
   "title": "One Holiday Way 12 Inch Lighted Brown and White Gingerbread House",
   "w": 1310,
   "h": 1500
  },
  {
   "asin": "B08MVTH53Z",
   "title": "Christmas Wood Bead Garland with Tassels, Red Green White, Rustic Farmhouse",
   "w": 698,
   "h": 1431
  }
 ],
 "tray-09": [
  {
   "asin": "B0DBFJD973",
   "title": "One Holiday Way 12 Inch Lighted Brown and White Gingerbread House",
   "w": 1310,
   "h": 1500
  },
  {
   "asin": "B0062JD424",
   "title": "Walker's Mini Festive Shortbread Cookies, Star-Shaped Christmas Cookies, Pack of 6",
   "w": 1500,
   "h": 1001
  }
 ],
 "tray-10": [
  {
   "asin": "B0H9CJWHCX",
   "title": "Dear Santa Holiday Baking Christmas Cookies Ceramic Mug",
   "w": 1407,
   "h": 1500
  },
  {
   "asin": "B0CF8YSZF8",
   "title": "Glitzhome Christmas Wooden Table Signs, Set of 3, Gingerbread Man Mug Decor",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-11": [
  {
   "asin": "B08KYGX2VG",
   "title": "Rae Dunn TIS THE SEASON Coffee Mug, Allside Red, 16 oz",
   "w": 1011,
   "h": 1006
  },
  {
   "asin": "B0CMZH3H6Q",
   "title": "North Pole Trading Co Bakery Tin Sign, Hot Cocoa Reindeer Feed Cookies",
   "w": 1176,
   "h": 942
  }
 ],
 "tray-12": [
  {
   "asin": "B0CDQB8GFN",
   "title": "North Pole Bakery Hanging Sign, Festive Small Wooden Frame",
   "w": 1500,
   "h": 1438
  },
  {
   "asin": "B0HGLJCW5M",
   "title": "GHOSTMAGIC Gingerbread Man Christmas Wooden Table Decor, Set of 3",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-13": [
  {
   "asin": "B08TRMF386",
   "title": "WallCharmers 3 Tier Galvanized Round Metal Tray, 18 Inch",
   "w": 993,
   "h": 1488
  },
  {
   "asin": "B0HGLJCW5M",
   "title": "GHOSTMAGIC Gingerbread Man Christmas Wooden Table Decor, Set of 3",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-14": [
  {
   "asin": "B0CMD1VS3D",
   "title": "Gingerbread Man Merry Christmas Wooden Sign Centerpiece",
   "w": 1301,
   "h": 1301
  },
  {
   "asin": "B0D8V5XLPF",
   "title": "BWFY Set of 2 Gingerbread Man Christmas Decorations with Chef Hat",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-15": [
  {
   "asin": "B0FX3YLQ1W",
   "title": "Rustic Good Tidings of Comfort and Joy Farmhouse Wood Sign, 9.5x3.1 Inch",
   "w": 1170,
   "h": 600
  },
  {
   "asin": "B0G2PZD9JW",
   "title": "Tis the Season Santa Mug, Festive Ceramic Christmas Cup, 11 oz",
   "w": 1500,
   "h": 1381
  }
 ],
 "tray-16": [
  {
   "asin": "B0DBQGF926",
   "title": "Cookies Make Everything Better Wooden Box Sign, Christmas Baking Decor",
   "w": 1097,
   "h": 1086
  },
  {
   "asin": "B0FVGCKF4Y",
   "title": "Rae Dunn Christmas Mug, Sugar and Spice, Light Pink Iridescent, 14 oz",
   "w": 1482,
   "h": 1500
  }
 ],
 "tray-25": [
  {
   "asin": "B0G452N44Y",
   "title": "Rae Dunn Let It Snow Ceramic Mug, Blue Iridescent, 16 oz",
   "w": 1055,
   "h": 1013
  },
  {
   "asin": "B0G1LX3BQY",
   "title": "Snowman and Reindeer Christmas Mug, Red and Green Plaid Patchwork, 11 oz",
   "w": 1500,
   "h": 1379
  }
 ],
 "tray-26": [
  {
   "asin": "B09NPB7XWZ",
   "title": "Large Wooden Snowman Cutout, 12 Inch, Unfinished Winter Decor",
   "w": 777,
   "h": 963
  },
  {
   "asin": "B0CN9S3MDS",
   "title": "Wooden Snowman Cutout, 16 Inch, Pack of 2, Christmas Decor",
   "w": 478,
   "h": 959
  }
 ],
 "tray-27": [
  {
   "asin": "B08L5P7RTP",
   "title": "Renditions Gallery Snowplace Like Home Canvas Wall Art, 12x18 Inch",
   "w": 960,
   "h": 701
  },
  {
   "asin": "B09MZXTPBT",
   "title": "Rae Dunn LET IT SNOW Ceramic Christmas Canister",
   "w": 355,
   "h": 355
  }
 ],
 "tray-24": [
  {
   "asin": "B09NPB7XWZ",
   "title": "Large Wooden Snowman Cutout, 12 Inch, Unfinished Winter Decor",
   "w": 777,
   "h": 963
  },
  {
   "asin": "B0CJLJYLQD",
   "title": "There's Snow Place Like Home Hanging Door Sign, Wooden Wall Art",
   "w": 1352,
   "h": 1500
  }
 ],
 "tray-19": [
  {
   "asin": "B092Z7YSBD",
   "title": "Primitives by Kathy Block Sign, Sweater Weather",
   "w": 1000,
   "h": 636
  },
  {
   "asin": "B0DJ2M3DVC",
   "title": "Sweater Weather Wooden Sign, Farmhouse Rustic, 4x16 Inch",
   "w": 1125,
   "h": 1500
  }
 ],
 "tray-28": [
  {
   "asin": "B0D8TM4YF3",
   "title": "BWFY 2 Pack Christmas Gnomes Decorations with Wooden Signs",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0FVCWDXK3",
   "title": "Christmas Decor Wooden Sign, Season's Greetings Plaque, 9.5x3.1 Inch",
   "w": 415,
   "h": 1115
  }
 ],
 "tray-08": [
  {
   "asin": "B0FX51YX9B",
   "title": "4 Pcs Christmas Wooden Tiered Tray Decor, Snowflake Signs, Winter Table Centerpiece",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0B71W4CFY",
   "title": "Light & Pro Farmhouse Rustic Wooden Bead Garland with Jute Tassels, 58 Inch",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-01": [
  {
   "asin": "B0BFJ6C3D9",
   "title": "Christmas Tiered Tray Decorations Set, 13 Pcs Farmhouse Decor with Gnome and Wooden Signs",
   "w": 1089,
   "h": 1500
  },
  {
   "asin": "B08MVTH53Z",
   "title": "Christmas Wood Bead Garland with Tassels, Red Green White, Rustic Farmhouse",
   "w": 698,
   "h": 1431
  }
 ],
 "tray-03": [
  {
   "asin": "B0FGQ1BFR8",
   "title": "Christmas Village House Lighted Indoor Decoration, White Ceramic House with LED Light",
   "w": 1500,
   "h": 1031
  },
  {
   "asin": "B08T9SPWJ7",
   "title": "SensaCasa Farmhouse Three Tiered Wood Tray Stand, Round",
   "w": 838,
   "h": 1500
  }
 ],
 "tray-21": [
  {
   "asin": "B09Z68CPJ2",
   "title": "Farm Fresh Christmas Trees Wall Decor Sign, Wood Framed, 12x12 Inch",
   "w": 1063,
   "h": 1500
  },
  {
   "asin": "B0CLKWP18S",
   "title": "Mini Christmas Tree Ornaments, Metallic Red Truck with Tree, Set of 4",
   "w": 1498,
   "h": 1122
  }
 ],
 "tray-40": [
  {
   "asin": "B0FNMDVXHN",
   "title": "Artsemi Winter Wonderland Wooden Tiered Tray Decor Set, Blue and White",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0HBCX3YZQ",
   "title": "Santa Delight 3-D Mugs, Set of 4, 18 oz Sculptural Santa Face Ceramic Mugs",
   "w": 1208,
   "h": 1500
  }
 ],
 "tray-29": [
  {
   "asin": "B0DHPZ98P6",
   "title": "Rae Dunn BELIEVE Coffee Mug, Allside Green, 16 oz",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0HH8ZDRLQ",
   "title": "Vintage Gold Christmas Bells on Jute Rope, Wreath Door Decor",
   "w": 1326,
   "h": 1500
  }
 ],
 "tray-30": [
  {
   "asin": "B0H1192DDZ",
   "title": "Farm Fresh Christmas Tree Door Sign, 12 Inch Round Rustic Farmhouse",
   "w": 1284,
   "h": 1500
  },
  {
   "asin": "B0HBCX3YZQ",
   "title": "Santa Delight 3-D Mugs, Set of 4, 18 oz Sculptural Santa Face Ceramic Mugs",
   "w": 1208,
   "h": 1500
  }
 ],
 "tray-06": [
  {
   "asin": "B0CLKWP18S",
   "title": "Mini Christmas Tree Ornaments, Metallic Red Truck with Tree, Set of 4",
   "w": 1498,
   "h": 1122
  },
  {
   "asin": "B0B71W4CFY",
   "title": "Light & Pro Farmhouse Rustic Wooden Bead Garland with Jute Tassels, 58 Inch",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-42": [
  {
   "asin": "B0CM3R2537",
   "title": "Personalized Initial Christmas Ceramic Mug, Custom Letter Monogram",
   "w": 1493,
   "h": 1361
  },
  {
   "asin": "B0FX51YX9B",
   "title": "4 Pcs Christmas Wooden Tiered Tray Decor, Snowflake Signs, Winter Table Centerpiece",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-17": [
  {
   "asin": "B0DJ123XKR",
   "title": "Rustic Wooden Reindeer Sign, Farmhouse Christmas Decor",
   "w": 988,
   "h": 1500
  },
  {
   "asin": "B09856T1S1",
   "title": "Decorative Wooden Tiered Tray Stand Display Risers, Set of 3, Black",
   "w": 1500,
   "h": 1407
  }
 ],
 "tray-07": [
  {
   "asin": "B0FGQ1BFR8",
   "title": "Christmas Village House Lighted Indoor Decoration, White Ceramic House with LED Light",
   "w": 1500,
   "h": 1031
  },
  {
   "asin": "B098WP97VY",
   "title": "Vipush Farmhouse Metal Tiered Tray, Rustic Galvanized 3 Tier Serving Stand",
   "w": 768,
   "h": 1448
  }
 ],
 "tray-38": [
  {
   "asin": "B0GZZY2DVP",
   "title": "Gold Mirrored Round Decorative Vanity Tray, 12.6 Inch",
   "w": 1360,
   "h": 1005
  },
  {
   "asin": "B0FGQ1BFR8",
   "title": "Christmas Village House Lighted Indoor Decoration, White Ceramic House with LED Light",
   "w": 1500,
   "h": 1031
  }
 ],
 "tray-32": [
  {
   "asin": "B0FVCWDXK3",
   "title": "Christmas Decor Wooden Sign, Season's Greetings Plaque, 9.5x3.1 Inch",
   "w": 415,
   "h": 1115
  },
  {
   "asin": "B0DJJF56BK",
   "title": "16 Pcs Christmas Buffalo Plaid Fabric Ball Ornaments",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-33": [
  {
   "asin": "B0CJLJYLQD",
   "title": "There's Snow Place Like Home Hanging Door Sign, Wooden Wall Art",
   "w": 1352,
   "h": 1500
  },
  {
   "asin": "B0BMGZHTHJ",
   "title": "Buffalo Plaid Christmas Bow, Red and Black Check Decorative Fluffy Bow",
   "w": 844,
   "h": 1258
  }
 ],
 "tray-34": [
  {
   "asin": "B0DJJF56BK",
   "title": "16 Pcs Christmas Buffalo Plaid Fabric Ball Ornaments",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CKVQJG18",
   "title": "Buffalo Plaid Christmas Tree Truck Snow House Porcelain Ornament",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-35": [
  {
   "asin": "B0DNM3NTY6",
   "title": "Rustic Wooden Oh Holy Night Christmas Sign, 8x12 Inch",
   "w": 1116,
   "h": 1204
  },
  {
   "asin": "B0B9XLRLCG",
   "title": "Gerrii 24 Pcs Christmas Red Truck Ornaments, Buffalo Plaid Wooden Tags",
   "w": 1500,
   "h": 1500
  }
 ],
 "tray-37": [
  {
   "asin": "B0FRSGW4FD",
   "title": "100 Pack Red and Gold Christmas Ball Ornaments, Hand-Painted Shatterproof",
   "w": 1446,
   "h": 1434
  },
  {
   "asin": "B0HCHMNBLS",
   "title": "Christmas Plaid Wreath Bow, Red and Grey Tartan Farmhouse Ribbon",
   "w": 1029,
   "h": 1500
  }
 ],
 "tray-04": [
  {
   "asin": "B0062JD424",
   "title": "Walker's Mini Festive Shortbread Cookies, Star-Shaped Christmas Cookies, Pack of 6",
   "w": 1500,
   "h": 1001
  },
  {
   "asin": "B0DGQ1LYH7",
   "title": "Acrylic Candy Cane and Peppermint Gems, 91 Pcs, Christmas Vase and Tray Filler",
   "w": 1000,
   "h": 1000
  }
 ],
 "tray-36": [
  {
   "asin": "B001F0RJDA",
   "title": "Lindt LINDOR Milk Chocolate Candy Truffles, 60 Count Box",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CM8DCL2D",
   "title": "50 Pcs Peppermint Christmas Ornaments, Fake Peppermint Candy for Crafts and Decor",
   "w": 1434,
   "h": 1294
  }
 ],
 "tray-39": [
  {
   "asin": "B001F0RJDA",
   "title": "Lindt LINDOR Milk Chocolate Candy Truffles, 60 Count Box",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B002RBRY0Y",
   "title": "Lindt LINDOR Dark Chocolate Candy Truffles, 60 Count Box",
   "w": 1500,
   "h": 1500
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Start With a Cocoa Bar People Will Actually Use",
  "paras": [
   "If you only style one tray this season, make it this one. A cocoa bar earns its counter space because guests use it, and that changes how you build it. Anything that gets touched needs to sit low and in front. Anything decorative can go tall and at the back.",
   "That is exactly how this one is arranged: a chalkboard sign leaning forward, a jar of marshmallows within easy reach, and the Coffee sign and the snowman standing behind.",
   "Buy the jar first. Everything else can come out of your cupboards."
  ],
  "key": "tray-22",
  "_orig": [
   "If you only style one tray this season, make it this one.",
   "A cocoa bar earns its counter space because guests use it, and that changes how you build it. Anything that gets touched needs to sit low and in front. Anything decorative can go tall and at the back.",
   "That is exactly how this one is arranged: a chalkboard sign leaning forward, a jar of marshmallows within easy reach, and the Coffee sign and the snowman standing behind.",
   "Buy the jar first. Everything else can come out of your cupboards."
  ]
 },
 {
  "n": 2,
  "title": "Keep the Cocoa Bar Mostly White",
  "paras": [
   "Color is the first thing to get away from you on a busy counter.",
   "A mostly white tray stays calm next to a coffee maker, a fruit bowl and whatever else lives there. The red in this one is limited to a mug band and a handful of candy canes, so it reads as a choice and not a mess.",
   "I use an 80/20 rule: 80 percent of the tray in one quiet color, 20 percent in the accent. Move the accent around until it feels balanced, then stop adding."
  ],
  "key": "tray-23",
  "_orig": [
   "Color is the first thing to get away from you on a busy counter.",
   "A mostly white tray stays calm next to a coffee maker, a fruit bowl and whatever else lives there. The red in this one is limited to a mug band and a handful of candy canes, so it reads as a choice and not a mess.",
   "I use an 80/20 rule: 80 percent of the tray in one quiet color, 20 percent in the accent. Move the accent around until it feels balanced, then stop adding."
  ]
 },
 {
  "n": 3,
  "title": "Stock It With Things You Really Need",
  "paras": [
   "The best trays are half decoration, half storage.",
   "This coffee corner holds spoons, striped straws, candy canes and individual pods, so there is a reason to reach for it every morning. A Milk jar and a Cuddle in a Cup sign tell guests what is on offer without a word of explanation.",
   "<ul><li>Hide the practical items in pretty containers. Pods go in a mug, straws in a cup, spoons in a jar.</li><li>One caution: keep chocolate and candy away from a sunny window, or you will be cleaning the tray instead of enjoying it.</li></ul>"
  ],
  "key": "tray-18",
  "_orig": [
   "The best trays are half decoration, half storage.",
   "This coffee corner holds spoons, striped straws, candy canes and individual pods, so there is a reason to reach for it every morning. A Milk jar and a Cuddle in a Cup sign tell guests what is on offer without a word of explanation.",
   "Hide the practical items in pretty containers. Pods go in a mug, straws in a cup, spoons in a jar.",
   "One caution: keep chocolate and candy away from a sunny window, or you will be cleaning the tray instead of enjoying it."
  ]
 },
 {
  "n": 4,
  "title": "Build Around One Collectible",
  "paras": [
   "<p><strong>A matching pair of mugs can do the work of a dozen small decorations.</strong> The Santa mugs are the stars here, and everything else stays out of their way. A tall canister gives the back some height, a little red dish keeps the joke going, and pine around the base ties it to the wood.</p>",
   "<ul><li>When you own something with real personality, don't compete with it. Pull two colors from the piece, use those for the rest, and keep everything else quiet.</li><li>Greenery under and around the base hides gaps and makes the tray look rooted.</li></ul>"
  ],
  "key": "tray-02",
  "_orig": [
   "A matching pair of mugs can do the work of a dozen small decorations.",
   "The Santa mugs are the stars here, and everything else stays out of their way. A tall canister gives the back some height, a little red dish keeps the joke going, and pine around the base ties it to the wood.",
   "When you own something with real personality, don't compete with it. Pull two colors from the piece, use those for the rest, and keep everything else quiet.",
   "Greenery under and around the base hides gaps and makes the tray look rooted."
  ]
 },
 {
  "n": 5,
  "title": "Go All In on One Candy Color",
  "paras": [
   "Sometimes the answer to a big tray is a bigger commitment. Peppermint red and white runs through every tier of this galvanized stand, from the canisters to the swirl-candy trees behind it. Because the palette never changes, the sheer amount of stuff reads as abundance, not clutter.",
   "A rule of thumb I rely on: the more items you have, the fewer colors you should use. Put the heaviest pieces on the bottom tier for stability, and the lightest on top."
  ],
  "key": "tray-31",
  "_orig": [
   "Sometimes the answer to a big tray is a bigger commitment.",
   "Peppermint red and white runs through every tier of this galvanized stand, from the canisters to the swirl-candy trees behind it. Because the palette never changes, the sheer amount of stuff reads as abundance, not clutter.",
   "A rule of thumb I rely on: the more items you have, the fewer colors you should use.",
   "Put the heaviest pieces on the bottom tier for stability, and the lightest on top."
  ]
 },
 {
  "n": 6,
  "title": "Hang the Sign Instead of Standing It",
  "paras": [
   "Signs eat tray space. Hang them and you win it back.",
   "A red Hot Cocoa sign on the rail above this tray sets the scene, which leaves the tiers free for mugs, a cookie jar and a little house.",
   "An S-hook on a rail, a removable hook or even a loop of twine over a cabinet handle will do. You can raise or lower the sign to suit your counter height.",
   "Wood trays like this forgive scratches, and they look better as they age."
  ],
  "key": "tray-43",
  "_orig": [
   "Signs eat tray space. Hang them and you win it back.",
   "A red Hot Cocoa sign on the rail above this tray sets the scene, which leaves the tiers free for mugs, a cookie jar and a little house.",
   "An S-hook on a rail, a removable hook or even a loop of twine over a cabinet handle will do. You can raise or lower the sign to suit your counter height.",
   "Wood trays like this forgive scratches, and they look better as they age."
  ]
 },
 {
  "n": 7,
  "title": "Fake the Whipped Cream",
  "paras": [
   "<p><strong>Here is a stylist's cheat: nobody wants real whipped cream sitting out for a week.</strong> Faux whipped cream and marshmallow toppers, like the ones on these red mugs, keep the cups looking full all season and never spoil.</p>",
   "Pair every topped mug with a plain one so the eye gets a place to rest. A tray with nothing but details starts to feel noisy.",
   "A gnome and a couple of lollipops on top make it playful without adding bulk."
  ],
  "key": "tray-41",
  "_orig": [
   "Here is a stylist's cheat: nobody wants real whipped cream sitting out for a week.",
   "Faux whipped cream and marshmallow toppers, like the ones on these red mugs, keep the cups looking full all season and never spoil.",
   "Pair every topped mug with a plain one so the eye gets a place to rest. A tray with nothing but details starts to feel noisy.",
   "A gnome and a couple of lollipops on top make it playful without adding bulk."
  ]
 },
 {
  "n": 8,
  "title": "Break the Red and Green Habit",
  "paras": [
   "If every Christmas display in your house is red and green, try a different second color.",
   "Teal mugs against warm wood give this tray a vintage diner feel. The red appears only in the cocoa packets and the candy canes, which is just enough to keep it unmistakably Christmas.",
   "<ul><li>Choose a color your kitchen already has. A teal bowl, a blue enamel mug or a sage dish towel works the same way.</li><li>Then add one small red thing so the season still shows up.</li></ul>"
  ],
  "key": "tray-44",
  "_orig": [
   "If every Christmas display in your house is red and green, try a different second color.",
   "Teal mugs against warm wood give this tray a vintage diner feel. The red appears only in the cocoa packets and the candy canes, which is just enough to keep it unmistakably Christmas.",
   "Choose a color your kitchen already has. A teal bowl, a blue enamel mug or a sage dish towel works the same way.",
   "Then add one small red thing so the season still shows up."
  ]
 },
 {
  "n": 9,
  "title": "Show Off Your Mug Collection",
  "paras": [
   "Your everyday mugs are decor. They just need a stage.",
   "Two black tiers beside the coffee maker turn this collection of red and white mugs into the display. The black base makes the pale china pop, and a creamer and a few small plates fill the gaps.",
   "Mix the patterns, but keep one thing consistent. Here it is the color story. Different shapes and prints are fine as long as the palette holds. Turn the handles outward so people can grab a cup without rearranging anything."
  ],
  "key": "tray-20",
  "_orig": [
   "Your everyday mugs are decor. They just need a stage.",
   "Two black tiers beside the coffee maker turn this collection of red and white mugs into the display. The black base makes the pale china pop, and a creamer and a few small plates fill the gaps.",
   "Mix the patterns, but keep one thing consistent. Here it is the color story. Different shapes and prints are fine as long as the palette holds.",
   "Turn the handles outward so people can grab a cup without rearranging anything."
  ]
 },
 {
  "n": 10,
  "title": "Make Gingerbread Look Collected, Not Crowded",
  "paras": [
   "Gingerbread is the easiest theme to overdo.",
   "Think of the house as the star and everything else as supporting cast. This tray has a gingerbread house on top, two gingerbread men guarding it and a single striped ribbon wrapped around the lower tier.",
   "<p><strong>Quick tip:</strong> That ribbon is worth copying. One stripe repeated in two places ties the tiers together for the price of a spool.</p>",
   "Faux cookies are a safer bet than real ones, which go stale in a week and attract the family dog."
  ],
  "key": "tray-05",
  "_orig": [
   "Gingerbread is the easiest theme to overdo.",
   "Think of the house as the star and everything else as supporting cast. This tray has a gingerbread house on top, two gingerbread men guarding it and a single striped ribbon wrapped around the lower tier.",
   "That ribbon is worth copying. One stripe repeated in two places ties the tiers together for the price of a spool.",
   "Faux cookies are a safer bet than real ones, which go stale in a week and attract the family dog."
  ]
 },
 {
  "n": 11,
  "title": "Put It Where People Gather",
  "paras": [
   "Where you place the tray matters as much as how you style it. This gingerbread tray sits on the corner of a granite island, right where everyone ends up with a coffee. The same tray in a quiet corner would never get the same audience.",
   "Stack it so the top tier is the lightest. Here the top holds peppermints and bottle brush trees, the middle has cookies and rolling pins, and the house sits low where it is steadiest.",
   "Before you commit, check that you can still reach the sink and stove without moving it."
  ],
  "key": "tray-09",
  "_orig": [
   "Where you place the tray matters as much as how you style it.",
   "This gingerbread tray sits on the corner of a granite island, right where everyone ends up with a coffee. The same tray in a quiet corner would never get the same audience.",
   "Stack it so the top tier is the lightest. Here the top holds peppermints and bottle brush trees, the middle has cookies and rolling pins, and the house sits low where it is steadiest.",
   "Before you commit, check that you can still reach the sink and stove without moving it."
  ]
 },
 {
  "n": 12,
  "title": "Let Bright Color Do the Talking",
  "paras": [
   "A white tray is a blank page for saturated color.",
   "Red and green candy canes in a Sweet Bakes mug, a gingerbread house and golden star cookies all stand out against this chalky white stand. Nothing else is competing. That is the advantage of whitewashed wood: it hides nothing and flatters everything, so only bring in colors you love.",
   "A bead garland around the base adds a soft, round texture to balance all those angles."
  ],
  "key": "tray-10",
  "_orig": [
   "A white tray is a blank page for saturated color.",
   "Red and green candy canes in a Sweet Bakes mug, a gingerbread house and golden star cookies all stand out against this chalky white stand. Nothing else is competing.",
   "That is the advantage of whitewashed wood: it hides nothing and flatters everything, so only bring in colors you love.",
   "A bead garland around the base adds a soft, round texture to balance all those angles."
  ]
 },
 {
  "n": 13,
  "title": "Add a Joke to Lighten the Look",
  "paras": [
   "A little humor keeps a tray from feeling precious.",
   "The Christmas Calories Don't Count sign is the line guests will repeat. It works because the rest of the tray is genuinely pretty: a beaded wood stand, gingerbread houses and a mug with a whipped-cream topper.",
   "<ul><li>Limit yourself to one joke per tray. After that it becomes a gift shop.</li><li>Lean the sign at a slight tilt rather than setting it square, which looks more relaxed.</li></ul>"
  ],
  "key": "tray-11",
  "_orig": [
   "A little humor keeps a tray from feeling precious.",
   "The Christmas Calories Don't Count sign is the line guests will repeat. It works because the rest of the tray is genuinely pretty: a beaded wood stand, gingerbread houses and a mug with a whipped-cream topper.",
   "Limit yourself to one joke per tray. After that it becomes a gift shop.",
   "Lean the sign at a slight tilt rather than setting it square, which looks more relaxed."
  ]
 },
 {
  "n": 14,
  "title": "Tell a Little Story",
  "paras": [
   "<p><strong>The best themes have a story you can say out loud.</strong> This one is a bakery at the North Pole. There is a sign saying so, gingerbread figures, cupcakes with striped straws and a tiny rolling pin, and every piece belongs in a baker's world.</p>",
   "<ul><li>Ask yourself whether the objects would really share a room. If they would, you have a story. If not, cut what doesn't fit.</li><li>And stay with odd numbers. Three gingerbread figures look right. Two or four look arranged.</li></ul>"
  ],
  "key": "tray-12",
  "_orig": [
   "The best themes have a story you can say out loud.",
   "This one is a bakery at the North Pole. There is a sign saying so, gingerbread figures, cupcakes with striped straws and a tiny rolling pin, and every piece belongs in a baker's world.",
   "Ask yourself whether the objects would really share a room. If they would, you have a story. If not, cut what doesn't fit.",
   "And stay with odd numbers. Three gingerbread figures look right. Two or four look arranged."
  ]
 },
 {
  "n": 15,
  "title": "Anchor the Bottom With Something Heavy",
  "paras": [
   "Every tray needs one visual weight. On this dark wood stand it is the big Sugar and Spice mug and a snowflake cookie. Lighter, patterned pieces, like the tree cookie and a Baking Christmas Memories board, can float above them.",
   "Put your largest and darkest pieces low, and let the airy things rise. A sprig of fresh cedar tucked at the front adds scent and free green. Swap it every week or so before it dries out."
  ],
  "key": "tray-13",
  "_orig": [
   "Every tray needs one visual weight.",
   "On this dark wood stand it is the big Sugar and Spice mug and a snowflake cookie. Lighter, patterned pieces, like the tree cookie and a Baking Christmas Memories board, can float above them.",
   "Put your largest and darkest pieces low, and let the airy things rise.",
   "A sprig of fresh cedar tucked at the front adds scent and free green. Swap it every week or so before it dries out."
  ]
 },
 {
  "n": 16,
  "title": "Pair Cool Metal With Warm Wood",
  "paras": [
   "Contrast in material is the quickest upgrade for any tray.",
   "A galvanized three-tier sitting on a thick slice of wood gets two textures before a single decoration goes on. A gingerbread house tops the stack, cookies fill the middle and peppermints and bottle brush trees tuck around a second house below.",
   "If you don't own a wood slice, a cutting board or a woven mat under the tray does the same job.",
   "Raising the whole stand off the counter makes it read as a centerpiece."
  ],
  "key": "tray-14",
  "_orig": [
   "Contrast in material is the quickest upgrade for any tray.",
   "A galvanized three-tier sitting on a thick slice of wood gets two textures before a single decoration goes on. A gingerbread house tops the stack, cookies fill the middle and peppermints and bottle brush trees tuck around a second house below.",
   "If you don't own a wood slice, a cutting board or a woven mat under the tray does the same job.",
   "Raising the whole stand off the counter makes it read as a centerpiece."
  ]
 },
 {
  "n": 17,
  "title": "Group Figures in Threes",
  "paras": [
   "<p><strong>Designers return to the number three for a reason.</strong> Count the gingerbread figures on this tray. A chef in a red hat leads on top, two more guard the houses on the bottom, and everything repeats in small groups. The eye moves naturally from one cluster to the next.</p>",
   "Place your biggest figure off-center. Dead center looks stiff.",
   "A red check cloth under the base ties the whole thing back to the kitchen."
  ],
  "key": "tray-15",
  "_orig": [
   "Designers return to the number three for a reason.",
   "Count the gingerbread figures on this tray. A chef in a red hat leads on top, two more guard the houses on the bottom, and everything repeats in small groups. The eye moves naturally from one cluster to the next.",
   "Place your biggest figure off-center. Dead center looks stiff.",
   "A red check cloth under the base ties the whole thing back to the kitchen."
  ]
 },
 {
  "n": 18,
  "title": "Choose Words You Actually Mean",
  "paras": [
   "Pick signs that say something true for your home.",
   "Tidings of Comfort and Joy sits at the top of this three-tier, and We Go Together Like Cookies and Christmas stands on a little wooden house in the middle. Both are short, warm and easy to read from across the room.",
   "<ul><li>Two signs per tray is the sweet spot. Three starts to look like a shop display.</li><li>A rolling pin stamped with falala adds a bit of lettering without feeling wordy, because it is a prop first and a sign second.</li></ul>"
  ],
  "key": "tray-16",
  "_orig": [
   "Pick signs that say something true for your home.",
   "Tidings of Comfort and Joy sits at the top of this three-tier, and We Go Together Like Cookies and Christmas stands on a little wooden house in the middle. Both are short, warm and easy to read from across the room.",
   "Two signs per tray is the sweet spot. Three starts to look like a shop display.",
   "A rolling pin stamped with falala adds a bit of lettering without feeling wordy, because it is a prop first and a sign second."
  ]
 },
 {
  "n": 19,
  "title": "Try Blue for a Fresh Take on Snowmen",
  "paras": [
   "Blue is a calm break from the usual red.",
   "A navy snowflake mug anchors this white beaded tray, and snowman salt and pepper shakers keep the mood light. A bowl of icy blue candies picks up the color again.",
   "Snowmen can stay out until the end of February, since they celebrate winter and not just Christmas. That's a good reason to spend on pieces you will use for months. Put a burlap mat under the stand to protect the counter and warm up all that white."
  ],
  "key": "tray-25",
  "_orig": [
   "Blue is a calm break from the usual red.",
   "A navy snowflake mug anchors this white beaded tray, and snowman salt and pepper shakers keep the mood light. A bowl of icy blue candies picks up the color again.",
   "Snowmen can stay out until the end of February, since they celebrate winter and not just Christmas. That's a good reason to spend on pieces you will use for months.",
   "Put a burlap mat under the stand to protect the counter and warm up all that white."
  ]
 },
 {
  "n": 20,
  "title": "Let Painted Wood Do the Heavy Lifting",
  "paras": [
   "Wood cutouts are inexpensive, light and nearly unbreakable, which makes them ideal in a house with kids or pets.",
   "Two snowmen in plaid scarves stand upright on this pedestal tray. Because they are flat, they take almost no space, and there is room left for white pitchers and a gingerbread cookie.",
   "<p><strong>Quick tip:</strong> Prop cutouts against the center post so they don't topple.</p>",
   "A plaid runner under the tray repeats the scarves. That small echo is what makes it look styled."
  ],
  "key": "tray-26",
  "_orig": [
   "Wood cutouts are inexpensive, light and nearly unbreakable, which makes them ideal in a house with kids or pets.",
   "Two snowmen in plaid scarves stand upright on this pedestal tray. Because they are flat, they take almost no space, and there is room left for white pitchers and a gingerbread cookie.",
   "Prop cutouts against the center post so they don't topple.",
   "A plaid runner under the tray repeats the scarves. That small echo is what makes it look styled."
  ]
 },
 {
  "n": 21,
  "title": "Treat Your White Dishes Like a Collection",
  "paras": [
   "White ceramics are the secret weapon of winter decor. A snowman cookie jar, a Snow Day canister and a few little figures read as one family here because they share a color, even though the shapes are all different.",
   "Keep the sign small and let the ceramics lead. A There's Snowplace Like Home block does the job.",
   "A mini tree adds a pop of green so the whole thing doesn't wash out."
  ],
  "key": "tray-27",
  "_orig": [
   "White ceramics are the secret weapon of winter decor.",
   "A snowman cookie jar, a Snow Day canister and a few little figures read as one family here because they share a color, even though the shapes are all different.",
   "Keep the sign small and let the ceramics lead. A There's Snowplace Like Home block does the job.",
   "A mini tree adds a pop of green so the whole thing doesn't wash out."
  ]
 },
 {
  "n": 22,
  "title": "Make Your Own Sign",
  "paras": [
   "A handmade sign is worth more than anything off a shelf.",
   "The Snow Balls 25 cents tag here is the star, and it is the easiest piece in the whole tray to copy. A scrap of wood, a marker and a loop of twine will take you ten minutes. Bead garlands are the cheapest way to soften a tray. Wrap one loosely around the base and let the tassel hang.",
   "Keep the palette to white, natural wood and a little black, and nearly any sign will fit."
  ],
  "key": "tray-24",
  "_orig": [
   "A handmade sign is worth more than anything off a shelf.",
   "The Snow Balls 25 cents tag here is the star, and it is the easiest piece in the whole tray to copy. A scrap of wood, a marker and a loop of twine will take you ten minutes.",
   "Bead garlands are the cheapest way to soften a tray. Wrap one loosely around the base and let the tassel hang.",
   "Keep the palette to white, natural wood and a little black, and nearly any sign will fit."
  ]
 },
 {
  "n": 23,
  "title": "Light It From Within",
  "paras": [
   "Tiny lights turn a nice tray into a memorable one.",
   "A string of warm lights hides in the greenery of this whitewashed stand, so the SNOW letters and the Sweater Weather sign glow against the brick wall.",
   "<ul><li>Choose copper-wire lights with a built-in timer, so they come on at dusk without you remembering. Warm white only. Cool white looks like an office.</li><li>The tall letters give you height. The lights give you mood.</li></ul>"
  ],
  "key": "tray-19",
  "_orig": [
   "Tiny lights turn a nice tray into a memorable one.",
   "A string of warm lights hides in the greenery of this whitewashed stand, so the SNOW letters and the Sweater Weather sign glow against the brick wall.",
   "Choose copper-wire lights with a built-in timer, so they come on at dusk without you remembering. Warm white only. Cool white looks like an office.",
   "The tall letters give you height. The lights give you mood."
  ]
 },
 {
  "n": 24,
  "title": "Add a Gnome for Height",
  "paras": [
   "<p><strong>The easiest way to add height is a tall, soft shape.</strong> The long felt gnome on this wood-slice tray stretches the design upward, while pinecones keep the base heavy.</p>",
   "<ul><li>Soft textures like felt and faux fur make a good counterpoint to wood and plastic. Choose a gnome with a hidden face if you can, which looks calmer than a smiling one.</li><li>Stack a few small books at the front and the tray gets a layer for free.</li></ul>"
  ],
  "key": "tray-28",
  "_orig": [
   "The easiest way to add height is a tall, soft shape.",
   "The long felt gnome on this wood-slice tray stretches the design upward, while pinecones keep the base heavy.",
   "Soft textures like felt and faux fur make a good counterpoint to wood and plastic. Choose a gnome with a hidden face if you can, which looks calmer than a smiling one.",
   "Stack a few small books at the front and the tray gets a layer for free."
  ]
 },
 {
  "n": 25,
  "title": "Crown It With a Statement Piece",
  "paras": [
   "Every tiered tray needs a finial. A dark green house dusted with snow sits on top of this whitewashed stand like the cherry on a sundae. Signs, wooden beads and cotton snow below support it without competing.",
   "A dark piece on top draws the eye first, so use your best item there. Fluff cotton batting around the base for snow, but keep it well away from any candle."
  ],
  "key": "tray-08",
  "_orig": [
   "Every tiered tray needs a finial.",
   "A dark green house dusted with snow sits on top of this whitewashed stand like the cherry on a sundae. Signs, wooden beads and cotton snow below support it without competing.",
   "A dark piece on top draws the eye first, so use your best item there.",
   "Fluff cotton batting around the base for snow, but keep it well away from any candle."
  ]
 },
 {
  "n": 26,
  "title": "Say What Your Palette Is in Three Words",
  "paras": [
   "Count the colors on this tray: red, white and a touch of green. That is it.",
   "A Hark the Herald tag, a Joy to the World sign and a red and cream bead garland all share the same two colors, so the carol theme feels like one idea and not several.",
   "Beads are an easy way to repeat your palette. Wind them around the stand and let the tassel fall over the edge.",
   "If you can't name your palette in three words, there are probably too many colors."
  ],
  "key": "tray-01",
  "_orig": [
   "Count the colors on this tray: red, white and a touch of green. That is it.",
   "A Hark the Herald tag, a Joy to the World sign and a red and cream bead garland all share the same two colors, so the carol theme feels like one idea and not several.",
   "Beads are an easy way to repeat your palette. Wind them around the stand and let the tassel fall over the edge.",
   "If you can't name your palette in three words, there are probably too many colors."
  ]
 },
 {
  "n": 27,
  "title": "Keep Your Piece Count Low",
  "paras": [
   "<p><strong>You can count every object on this tray with your hands, and that is the secret.</strong> A red mug, a white house, a framed sign, a bottle brush tree and a few berry sprigs each have room to breathe, and the dark wood frames them.</p>",
   "Aim for four to six items per tier. If you can't see the tray between objects, take one out.",
   "Greenery counts as an object, so don't let it bury the sign."
  ],
  "key": "tray-03",
  "_orig": [
   "You can count every object on this tray with your hands, and that is the secret.",
   "A red mug, a white house, a framed sign, a bottle brush tree and a few berry sprigs each have room to breathe, and the dark wood frames them.",
   "Aim for four to six items per tier. If you can't see the tray between objects, take one out.",
   "Greenery counts as an object, so don't let it bury the sign."
  ]
 },
 {
  "n": 28,
  "title": "Put It by a Window",
  "paras": [
   "Natural light is a tray's best friend.",
   "This one sits at a snowy window, so the red truck mug, the framed Farm Fresh sign and the tall red gnome hat look vivid against the soft white outside.",
   "<ul><li>Avoid strong afternoon sun on painted or glued pieces. It fades them over a season.</li><li>A leaning frame behind the tray adds depth without taking tier space.</li></ul>"
  ],
  "key": "tray-21",
  "_orig": [
   "Natural light is a tray's best friend.",
   "This one sits at a snowy window, so the red truck mug, the framed Farm Fresh sign and the tall red gnome hat look vivid against the soft white outside.",
   "Avoid strong afternoon sun on painted or glued pieces. It fades them over a season.",
   "A leaning frame behind the tray adds depth without taking tier space."
  ]
 },
 {
  "n": 29,
  "title": "Lead With One Word",
  "paras": [
   "A single word on top can anchor a whole tray.",
   "A red Believe sits at the top of this beaded stand, a Merry mug and a gnome in the middle, and a Merry Christmas sign at the base. Every tier has one piece of text, so nothing fights for attention.",
   "Mix lettering styles. Block, script and handwriting look better together than three of the same. Pine sprigs at the edges soften all that print."
  ],
  "key": "tray-40",
  "_orig": [
   "A single word on top can anchor a whole tray.",
   "A red Believe sits at the top of this beaded stand, a Merry mug and a gnome in the middle, and a Merry Christmas sign at the base. Every tier has one piece of text, so nothing fights for attention.",
   "Mix lettering styles. Block, script and handwriting look better together than three of the same.",
   "Pine sprigs at the edges soften all that print."
  ]
 },
 {
  "n": 30,
  "title": "Let Green Carry the Season",
  "paras": [
   "Not every Christmas tray needs red.",
   "Green mugs, green wooden trees and green felt do the work here, with white trees and jingle bells adding some sparkle. The Believe mug looks right at home against the brick backsplash.",
   "<p><strong>Quick tip:</strong> Cool greens like sage and pine are easy to live with all winter long.</p>",
   "Pick wood letters over plastic. Wood ages gracefully, and plastic only looks cheaper over time."
  ],
  "key": "tray-29",
  "_orig": [
   "Not every Christmas tray needs red.",
   "Green mugs, green wooden trees and green felt do the work here, with white trees and jingle bells adding some sparkle. The Believe mug looks right at home against the brick backsplash.",
   "Cool greens like sage and pine are easy to live with all winter long.",
   "Pick wood letters over plastic. Wood ages gracefully, and plastic only looks cheaper over time."
  ]
 },
 {
  "n": 31,
  "title": "Mix Handmade, Vintage and New",
  "paras": [
   "A tray looks collected when its pieces come from different places. Felt trees, a jar candle, ceramic deer, Santa mugs, a little lantern and a lace doily sit together here and still agree, because the colors are limited to white, green and warm wood.",
   "The doily is the unsung hero. Lace under a tray makes everything look inherited.",
   "A cloth napkin works just as well if you don't own one."
  ],
  "key": "tray-30",
  "_orig": [
   "A tray looks collected when its pieces come from different places.",
   "Felt trees, a jar candle, ceramic deer, Santa mugs, a little lantern and a lace doily sit together here and still agree, because the colors are limited to white, green and warm wood.",
   "The doily is the unsung hero. Lace under a tray makes everything look inherited.",
   "A cloth napkin works just as well if you don't own one."
  ]
 },
 {
  "n": 32,
  "title": "Let a Toy Be the Star",
  "paras": [
   "A little red truck is the shortcut to farmhouse Christmas.",
   "This one carries a mini pine on its bed, which adds a small story and keeps the eye moving up the stand. Mind the scale when you use toys. A truck that is too big dwarfs the mugs, and one that is too small disappears.",
   "Lay everything on the counter first, stand back, and edit before it goes on the tray."
  ],
  "key": "tray-06",
  "_orig": [
   "A little red truck is the shortcut to farmhouse Christmas.",
   "This one carries a mini pine on its bed, which adds a small story and keeps the eye moving up the stand.",
   "Mind the scale when you use toys. A truck that is too big dwarfs the mugs, and one that is too small disappears.",
   "Lay everything on the counter first, stand back, and edit before it goes on the tray."
  ]
 },
 {
  "n": 33,
  "title": "Use Silhouettes for Clean Lines",
  "paras": [
   "Silhouettes survive a busy room.",
   "Black reindeer cutouts and white houses give this wood tray a crisp, graphic look. A plaid mug and a red ornament add just enough warmth.",
   "<ul><li>Flat shapes read from across an open-plan space, which is where a tray like this tends to live.</li><li>Stand the cutouts slightly apart, so each outline stays clear.</li></ul>"
  ],
  "key": "tray-42",
  "_orig": [
   "Silhouettes survive a busy room.",
   "Black reindeer cutouts and white houses give this wood tray a crisp, graphic look. A plaid mug and a red ornament add just enough warmth.",
   "Flat shapes read from across an open-plan space, which is where a tray like this tends to live.",
   "Stand the cutouts slightly apart, so each outline stays clear."
  ]
 },
 {
  "n": 34,
  "title": "Pick a Dark Tray for Drama",
  "paras": [
   "<p><strong>A black tray turns everything up a notch.</strong> Pale pieces glow against it. Look at how the cinnamon sticks, white wooden trees and snowflake cookies stand out on this one.</p>",
   "<ul><li>Match the tray to your counter: a dark one adds weight to a pale surface, while a light one lifts a dark counter.</li><li>Cinnamon sticks tied in a jar scent the kitchen and cost almost nothing.</li></ul>"
  ],
  "key": "tray-17",
  "_orig": [
   "A black tray turns everything up a notch.",
   "Pale pieces glow against it. Look at how the cinnamon sticks, white wooden trees and snowflake cookies stand out on this one.",
   "Match the tray to your counter: a dark one adds weight to a pale surface, while a light one lifts a dark counter.",
   "Cinnamon sticks tied in a jar scent the kitchen and cost almost nothing."
  ]
 },
 {
  "n": 35,
  "title": "Build a Village in Layers",
  "paras": [
   "Depth is what separates a village from a row of houses. Houses sit on all three levels here, with bottle brush trees in front and behind them. Because everything overlaps, your eye reads it as a town on a hillside.",
   "Use at least three sizes of house, and keep the smallest at the back. Battery tea lights are safer than flames, and you can hide the switch behind a tree."
  ],
  "key": "tray-07",
  "_orig": [
   "Depth is what separates a village from a row of houses.",
   "Houses sit on all three levels here, with bottle brush trees in front and behind them. Because everything overlaps, your eye reads it as a town on a hillside.",
   "Use at least three sizes of house, and keep the smallest at the back.",
   "Battery tea lights are safer than flames, and you can hide the switch behind a tree."
  ]
 },
 {
  "n": 36,
  "title": "Let a Mirror Double the Glow",
  "paras": [
   "A mirrored tray doubles every light that touches it.",
   "Lit houses, bottle brush trees and a tiny Santa sit on this reflective stand, wrapped in fairy lights, and the whole thing looks like a snow globe at night.",
   "Mirrors show fingerprints, so wipe it with a microfiber cloth before guests arrive.",
   "Dim the room lights and let the tray be the lamp."
  ],
  "key": "tray-38",
  "_orig": [
   "A mirrored tray doubles every light that touches it.",
   "Lit houses, bottle brush trees and a tiny Santa sit on this reflective stand, wrapped in fairy lights, and the whole thing looks like a snow globe at night.",
   "Mirrors show fingerprints, so wipe it with a microfiber cloth before guests arrive.",
   "Dim the room lights and let the tray be the lamp."
  ]
 },
 {
  "n": 37,
  "title": "Repeat One Pattern, Not Three",
  "paras": [
   "<p><strong>Buffalo plaid is bold, so use it with discipline.</strong> On this white three-tier the check appears on a house, a bow, a tag and a block, but always in black and white, and everything else is solid.</p>",
   "If you do mix plaids, change the scale: one large check, one small.",
   "A few red berries keep the black and white from feeling stark."
  ],
  "key": "tray-32",
  "_orig": [
   "Buffalo plaid is bold, so use it with discipline.",
   "On this white three-tier the check appears on a house, a bow, a tag and a block, but always in black and white, and everything else is solid.",
   "If you do mix plaids, change the scale: one large check, one small.",
   "A few red berries keep the black and white from feeling stark."
  ]
 },
 {
  "n": 38,
  "title": "Use Ornaments as Your Filler",
  "paras": [
   "Ornaments are decor you already own.",
   "Red and black buffalo check balls fill the tiers of this wood stand with pinecones and greenery, topped with a plaid bow. There isn't a sign anywhere, and it still says Christmas.",
   "<ul><li>Shatterproof balls are the right choice for kitchens.</li><li>Cluster by size: largest at the bottom, smallest on top.</li></ul>"
  ],
  "key": "tray-33",
  "_orig": [
   "Ornaments are decor you already own.",
   "Red and black buffalo check balls fill the tiers of this wood stand with pinecones and greenery, topped with a plaid bow. There isn't a sign anywhere, and it still says Christmas.",
   "Shatterproof balls are the right choice for kitchens.",
   "Cluster by size: largest at the bottom, smallest on top."
  ]
 },
 {
  "n": 39,
  "title": "Add Height With a Gift Box",
  "paras": [
   "A wrapped box is the simplest height cheat there is.",
   "A buffalo check gift sits on a plaid runner just beside this black tray, adding a block of pattern at a different level than the sign and the snowman.",
   "Wrap an empty box so it stays light, and tie it with thick ribbon. Two or three boxes stacked beside a tray look like a pile of presents."
  ],
  "key": "tray-34",
  "_orig": [
   "A wrapped box is the simplest height cheat there is.",
   "A buffalo check gift sits on a plaid runner just beside this black tray, adding a block of pattern at a different level than the sign and the snowman.",
   "Wrap an empty box so it stays light, and tie it with thick ribbon.",
   "Two or three boxes stacked beside a tray look like a pile of presents."
  ]
 },
 {
  "n": 40,
  "title": "Add One Surprising Object",
  "paras": [
   "Every great tray has one thing guests ask about.",
   "Here it is the fuzzy plaid booties at the base. Nobody expects them, and they make the whole tray feel cozy.",
   "<p><strong>Quick tip:</strong> Use something soft, like slippers, mittens or a knit ornament, to balance all the hard surfaces.</p>",
   "Stop at one surprise. A second one starts to look random."
  ],
  "key": "tray-35",
  "_orig": [
   "Every great tray has one thing guests ask about.",
   "Here it is the fuzzy plaid booties at the base. Nobody expects them, and they make the whole tray feel cozy.",
   "Use something soft, like slippers, mittens or a knit ornament, to balance all the hard surfaces.",
   "Stop at one surprise. A second one starts to look random."
  ]
 },
 {
  "n": 41,
  "title": "Make the Bow Big",
  "paras": [
   "A big bow can pull an overloaded tray together. A wide plaid bow crowns this ornament-heavy stand and wraps the whole thing up like a gift.",
   "Buy wired ribbon at least two and a half inches wide. It holds its shape and looks fuller.",
   "Make the loops large and even, then fluff them with your fingers."
  ],
  "key": "tray-37",
  "_orig": [
   "A big bow can pull an overloaded tray together.",
   "A wide plaid bow crowns this ornament-heavy stand and wraps the whole thing up like a gift.",
   "Buy wired ribbon at least two and a half inches wide. It holds its shape and looks fuller.",
   "Make the loops large and even, then fluff them with your fingers."
  ]
 },
 {
  "n": 42,
  "title": "Soften It With Knit Texture",
  "paras": [
   "Texture matters more than people think.",
   "A knit Santa on top makes this white tray feel softer, and it echoes the knit pillows on the sofa behind it. Choose items that share a material with your room: a knit throw nearby, a knit figure on the tray.",
   "A candle on the bottom tier is the finishing touch."
  ],
  "key": "tray-04",
  "_orig": [
   "Texture matters more than people think.",
   "A knit Santa on top makes this white tray feel softer, and it echoes the knit pillows on the sofa behind it.",
   "Choose items that share a material with your room: a knit throw nearby, a knit figure on the tray.",
   "A candle on the bottom tier is the finishing touch."
  ]
 },
 {
  "n": 43,
  "title": "Edit Until It Feels Elegant",
  "paras": [
   "Elegance usually means taking something away.",
   "This tray is nearly the same as the one before it, with a knit Santa, ornaments, a star cookie and candy canes, but it has fewer pieces and feels calmer for it.",
   "<ul><li>When you think you are done, remove one item. That is a stylist's last step, and it improves almost every tray.</li><li>Then step back and look again before you add anything back.</li></ul>"
  ],
  "key": "tray-36",
  "_orig": [
   "Elegance usually means taking something away.",
   "This tray is nearly the same as the one before it, with a knit Santa, ornaments, a star cookie and candy canes, but it has fewer pieces and feels calmer for it.",
   "When you think you are done, remove one item. That is a stylist's last step, and it improves almost every tray.",
   "Then step back and look again before you add anything back."
  ]
 },
 {
  "n": 44,
  "title": "Make It Edible",
  "paras": [
   "<p><strong>Candy is decor with a built-in refill.</strong> Foil-wrapped truffles in red, green and gold fill both tiers of this simple dark tray, with a few candy canes poking out. The metallic wrappers sparkle when the light hits them.</p>",
   "<ul><li>Choose individually wrapped candy for hygiene, and top up as it disappears.</li><li>Set it by the front door and it becomes a small welcome for anyone who walks in.</li></ul>"
  ],
  "key": "tray-39",
  "_orig": [
   "Candy is decor with a built-in refill.",
   "Foil-wrapped truffles in red, green and gold fill both tiers of this simple dark tray, with a few candy canes poking out. The metallic wrappers sparkle when the light hits them.",
   "Choose individually wrapped candy for hygiene, and top up as it disappears.",
   "Set it by the front door and it becomes a small welcome for anyone who walks in."
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
<p>Every December I run into the same problem: a kitchen counter that has to look festive and still work for making breakfast.</p>
<p>A tiered tray is the fix. It decorates upward instead of outward, so you get height, color and a bit of drama in roughly the footprint of a cutting board.</p>
<p>Most trays go wrong for one reason, which is too many unrelated things. So before the ideas, here are the rules I lean on, followed by 44 trays to borrow from.</p>
${photo("hero")}

<h2>Four Rules That Make Any Tray Work</h2>
<p><strong>Choose one theme.</strong> A cocoa bar, a gingerbread bakery, a snowman family. If you can't describe the tray in four words, it doesn't have a theme yet.</p>
<p><strong>Think in a loose triangle.</strong> Put the tallest piece at the back or on the top tier, a medium piece on the opposite side and low pieces in front. Your eye should zigzag, not stall.</p>
<p><strong>Limit the palette.</strong> Two colors plus a neutral is plenty. Repeat each color at least twice so it looks chosen.</p>
<p><strong>Use odd numbers and leave gaps.</strong> Three mugs, five pinecones. And you should still see some bare tray between objects. That empty space is what makes the rest look styled.</p>

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Common Mistakes (and Quick Fixes)</h2>
<p><strong>Crowding every tier.</strong> It's the most common one. Remove a single item from each tier and the tray immediately looks more expensive.</p>
<p><strong>Everything at the same height.</strong> A tray of equal-height pieces looks flat. Add a tall candle, a tree or a stack of books to break it up.</p>
<p><strong>Ignoring the kitchen.</strong> Keep trays away from the stove, where heat and grease will ruin them. Use battery candles near greenery and cotton snow.</p>
<p><strong>Forgetting to look from the side.</strong> Most of us see the tray from across the room or from the doorway. Stand where you usually stand before you call it finished.</p>
<p><strong>Packing it away too early.</strong> Swap the red and gold for winter pieces, like snowflakes, pinecones and white ceramics, and the same tray can stay out through February.</p>
<p>Start with one tray, one theme and one corner of your kitchen. You can always add more next year.</p>
`;

module.exports = { body };
