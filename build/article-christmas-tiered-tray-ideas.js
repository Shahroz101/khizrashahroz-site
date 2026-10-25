// Body content for "44 Christmas Tiered Tray Ideas for a Festive Kitchen
// Counter". Converted from the Dwelling Dream "44 Christmas Tiered Tray
// Ideas" source: all text rewritten from scratch and the ideas regrouped
// (cocoa bars, gingerbread, snowmen and winter, signs and gnomes, villages,
// buffalo plaid, ornaments and sweets). Photos are credited to their
// Pinterest pins; the supplied Amazon product pair stays under each photo.
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
  "title": "Start With a Simple Hot Cocoa Bar",
  "paras": [
   "A cocoa bar is the easiest tiered tray to get right.",
   "This white two-tier holds a Coffee sign, a snowman, a Christmas mug stuffed with candy canes, a chalkboard that says Hot Cocoa Bar, a Merry block, a gingerbread man and a jar of marshmallows.",
   "Everything on it can actually be used.",
   "Fill the jar with real marshmallows and let guests help themselves."
  ],
  "key": "tray-22"
 },
 {
  "n": 2,
  "title": "Keep the Cocoa Bar Mostly White",
  "paras": [
   "White on white feels calm in a busy kitchen.",
   "A white two-tier here carries a big jar of marshmallows, a Hot Cocoa Bar sign, a snowman jar, a small Coffee sign and a red-rimmed mug of candy canes, with a flocked tree beside it.",
   "The red candy stripes are the only strong color.",
   "Keep the tray near the kettle so it earns its place."
  ],
  "key": "tray-23"
 },
 {
  "n": 3,
  "title": "Add a Milk Jar and Cuddle in a Cup Sign",
  "paras": [
   "A few real supplies make the tray feel honest.",
   "On this weathered two-tier are a lettered Milk jar with wooden spoons, a Cuddle in a Cup sign, an Enjoy mug of candy canes, striped paper straws, a Merry Christmas mug and a red enamel mug.",
   "Coffee pods tucked in the back are ready to use.",
   "Red berries on top keep it festive."
  ],
  "key": "tray-18"
 },
 {
  "n": 4,
  "title": "Build a Santa Mug Cocoa Station",
  "paras": [
   "Santa mugs are instant cheer.",
   "A wooden pedestal tray holds a Santa cookie jar, two Santa mugs, a tall embossed canister, a little red dish labeled Coal and a bundle of candy canes, all tucked into fresh greenery.",
   "A red and white towel hangs behind.",
   "Use the canister for cocoa mix so the display doubles as storage."
  ],
  "key": "tray-02"
 },
 {
  "n": 5,
  "title": "Go Big With Peppermint and Marshmallows",
  "paras": [
   "This one is a full sweet shop.",
   "A galvanized three-tier is loaded with a Marshmallow canister, a Cocoa canister, a Peppermint Mocha mug, jars of sprinkles and candy, marshmallow-topped mugs and candy canes, with peppermint trees behind.",
   "Red and white carries the whole thing.",
   "A polka-dot pitcher on the side holds the milk."
  ],
  "key": "tray-31"
 },
 {
  "n": 6,
  "title": "Hang a Hot Cocoa Sign Above the Tray",
  "paras": [
   "Signs do not have to sit on the tray.",
   "A red enamel Hot Cocoa sign hangs from the rail above this wooden tiered tray, which holds Santa mugs, a white house, gingerbread cookies, cookie jars and a red mug.",
   "A gingerbread-print apron hangs beside it.",
   "Hanging the sign frees up room on the tiers."
  ],
  "key": "tray-43"
 },
 {
  "n": 7,
  "title": "Stack Lettered Mugs With Marshmallow Toppers",
  "paras": [
   "Mugs can be the decoration.",
   "A three-tier stand carries a Holly Jolly mug with a whipped-cream topper, a gnome, lollipops, a Cup of Cheer mug, a Cream mug, a Sugar jar and a Merry Christmas mug.",
   "The faux toppers make it look ready to drink.",
   "Keep all the mugs in the same red and white family."
  ],
  "key": "tray-41"
 },
 {
  "n": 8,
  "title": "Give It a Vintage Santa Twist",
  "paras": [
   "Teal mugs change the whole mood.",
   "A dark wood three-tier holds a vintage Santa Claus sign and candy canes on top, teal mugs in the middle, and cocoa packets, a Snow Ball tin and a bowl of popcorn below.",
   "The teal looks fresh against the reds.",
   "Pine sprigs soften the edges."
  ],
  "key": "tray-44"
 },
 {
  "n": 9,
  "title": "Show Off a Red and White Mug Collection",
  "paras": [
   "Pretty mugs deserve a stage.",
   "A black two-tier beside the coffee maker holds red and white patterned mugs, a cream pitcher, peppermints, candy canes and a little greenery.",
   "It is a coffee station first and decor second.",
   "Mix a few patterns as long as the colors match."
  ],
  "key": "tray-20"
 },
 {
  "n": 10,
  "title": "Bake Up a Gingerbread Tray",
  "paras": [
   "Gingerbread is the sweetest theme of all.",
   "On this wooden two-tier sit a lit gingerbread house, gingerbread cookies, a striped ribbon, a bowl of peppermint candy, a mug with a gingerbread man and a candy cane, with greenery and berries.",
   "A rolling pin on the counter finishes the baking story.",
   "Cookies with royal icing hold up well all season."
  ],
  "key": "tray-05"
 },
 {
  "n": 11,
  "title": "Put a Gingerbread Village on the Island",
  "paras": [
   "A kitchen island is the natural home for gingerbread.",
   "This dark wood three-tier holds a gingerbread house, a row of gingerbread cookies, mini rolling pins, bottle brush trees and peppermints.",
   "It sits right where everyone gathers.",
   "Keep the top tier light so it does not look top-heavy."
  ],
  "key": "tray-09"
 },
 {
  "n": 12,
  "title": "Add a Sweet Bakes Mug and Star Cookies",
  "paras": [
   "Green candy canes are a fun surprise.",
   "A white tray holds a Sweet Bakes mug, a gingerbread house with gumdrops, a gingerbread chef, star cookies, a red rolling pin and a bead garland.",
   "The colors read like a candy shop.",
   "Little gingerbread chefs are easy to find online."
  ],
  "key": "tray-10"
 },
 {
  "n": 13,
  "title": "Say Tis the Season in Gingerbread",
  "paras": [
   "Signs with a joke keep it light.",
   "A beaded cream tray holds gingerbread houses, a Tis the Season mug with a whipped-cream topper, a Christmas Calories Don't Count sign, a Merry Christmas sign and snowflake cookies.",
   "The gingerbread tones warm up a white kitchen.",
   "Prop the signs so they lean a little."
  ],
  "key": "tray-11"
 },
 {
  "n": 14,
  "title": "Open a North Pole Bakery",
  "paras": [
   "Pretend the elves run the kitchen.",
   "A whitewashed tiered tray carries an Official North Pole Bakery sign, a Bake sign, gingerbread figures, a red mug of cocoa with candy cane straws, a Gingerbread block and a tiny rolling pin.",
   "A white tree on top adds height.",
   "Striped straws tie the tiers together."
  ],
  "key": "tray-12"
 },
 {
  "n": 15,
  "title": "Mix Gingerbread Cookies With a Sugar and Spice Mug",
  "paras": [
   "Cookies can be ornaments too.",
   "A galvanized two-tier here holds a gingerbread tree and snowflake cookie, a Baking Christmas Memories sign and a Sugar & Spice mug, with greenery on the base.",
   "The brown and white palette is simple.",
   "Faux cookies last year after year."
  ],
  "key": "tray-13"
 },
 {
  "n": 16,
  "title": "Set a Galvanized Tray on a Wood Slice",
  "paras": [
   "Metal and wood make a rustic pair.",
   "A three-tier galvanized stand sits on a wood slice with a gingerbread house on top, cookies, peppermint candies, a second house and bottle brush trees below.",
   "The slice adds warmth under the metal.",
   "Tuck in a few red ornaments for color."
  ],
  "key": "tray-14"
 },
 {
  "n": 17,
  "title": "Gather a Gingerbread Family",
  "paras": [
   "A set of figures tells a story.",
   "A wooden tiered tray is filled with a gingerbread man in a red hat, gingerbread houses, more gingerbread figures, small trees and a plaid bow.",
   "Red and white berries fill the gaps.",
   "Put the tallest figure on top."
  ],
  "key": "tray-15"
 },
 {
  "n": 18,
  "title": "Spell Out Tidings of Comfort and Joy",
  "paras": [
   "Three tiers give you room for a theme.",
   "This wood tray holds a Tidings of Comfort and Joy sign, a gingerbread family sign, a gingerbread house, a red cocoa mug, a falala rolling pin, gingerbread figures and candy-striped trees.",
   "It reads like a little bakery window.",
   "Use one color of ribbon throughout."
  ],
  "key": "tray-16"
 },
 {
  "n": 19,
  "title": "Build a Snowman Family on a White Tray",
  "paras": [
   "Snowmen suit the whole winter, not just Christmas.",
   "A white beaded two-tier on a burlap mat holds a blue Snow mug, snowman salt and pepper shakers, a snowman mug, a Let It Snow mug and a bowl of snowflake candies.",
   "The blue is a nice break from red.",
   "A tiny tree on top adds green."
  ],
  "key": "tray-25"
 },
 {
  "n": 20,
  "title": "Stand Up Wooden Snowmen",
  "paras": [
   "Painted cutouts are cheap and charming.",
   "Two wood snowmen in plaid scarves and top hats stand on this pedestal tray, with white pitchers, a gingerbread cookie, pinecones and a dusting of snow.",
   "A plaid runner underneath picks up the scarves.",
   "Make your own from scrap wood if you are handy."
  ],
  "key": "tray-26"
 },
 {
  "n": 21,
  "title": "Add a Snowplace Like Home Sign",
  "paras": [
   "A pun always lands.",
   "A wood tray carries a snowman cup with a red lid, a Snow Day canister, small snowman figures and a There's Snowplace Like Home sign, with pine behind.",
   "White ceramics keep it crisp.",
   "Group the snowmen so they look like they are chatting."
  ],
  "key": "tray-27"
 },
 {
  "n": 22,
  "title": "Sell Snow Balls for 25 Cents",
  "paras": [
   "Handmade signs feel personal.",
   "A whitewashed tray holds a Snow Balls 25 cents sign, a Baby It's Cold Outside sign, a snowman block, a snowman figure, a bell and a bead garland with a tassel.",
   "The palette is white, black and natural wood.",
   "Write the sign on a scrap of plywood."
  ],
  "key": "tray-24"
 },
 {
  "n": 23,
  "title": "Go Black and White With Snow and Sweater Weather",
  "paras": [
   "Black and white can still feel cozy.",
   "A whitewashed two-tier shows a tall SNOW sign, a snowflake sign, a Sweater Weather sign, Yum mugs with marshmallows, a Let It Snow tag and tiny lights in the greenery.",
   "Letter tiles on the counter spell a word.",
   "Warm lights keep it from feeling cold."
  ],
  "key": "tray-19"
 },
 {
  "n": 24,
  "title": "Say Hello Winter With a Gnome",
  "paras": [
   "A tall gnome makes a great topper.",
   "On this wood-slice tiered tray stand a gnome, a Hello Winter sign, wooden snowflakes, pinecones, a tree and a stack of Warm Winter Wishes books on a little sled.",
   "The browns and whites feel like a cabin.",
   "Pinecones fill the corners for free."
  ],
  "key": "tray-28"
 },
 {
  "n": 25,
  "title": "Top It With a Snowy Dark Green House",
  "paras": [
   "A single house can anchor a tray.",
   "A whitewashed three-tier here has a dark green house with snow on top, a Snow sign, a Winter Vibes sign, a Farm Fresh Christmas Trees sign, wood beads, snowflakes and cotton snow.",
   "The dark green balances all the white.",
   "Use cotton batting for the snow."
  ],
  "key": "tray-08"
 },
 {
  "n": 26,
  "title": "Hang a Carol Tag With a Gnome",
  "paras": [
   "Carol lyrics make a sweet theme.",
   "This white two-tier holds a red tag reading Hark the Herald Angels Sing, a gnome in a knit hat, a Joy to the World sign, a Deck the Halls block and a red and cream bead garland.",
   "A tiny tree adds green.",
   "Drape the garland over the edge for movement."
  ],
  "key": "tray-01"
 },
 {
  "n": 27,
  "title": "Pair a Red Joy Mug With a Mini House",
  "paras": [
   "Keep the pieces few and the colors tight.",
   "A rustic two-tier holds a red JOY mug, a white house, a Merry and Bright sign, a flocked tree and sprigs of berries.",
   "The red and white against dark wood looks classic.",
   "Three or four pieces per tier is plenty."
  ],
  "key": "tray-03"
 },
 {
  "n": 28,
  "title": "Add a Red Truck Mug and a Gnome",
  "paras": [
   "A red truck is farmhouse Christmas in one object.",
   "A white tray by a snowy window carries a red truck mug, a Farm Fresh Christmas Trees sign, a gnome in a red hat, a Life Happens Coffee Helps sign, a Sugar jar and a tiny red truck.",
   "The view outside does half the work.",
   "Place the tray where it gets daylight."
  ],
  "key": "tray-21"
 },
 {
  "n": 29,
  "title": "Set a Believe Sign on Top",
  "paras": [
   "One word can lead the whole tray.",
   "A beaded tray holds a red Believe sign on top, with a Merry mug, a gnome, bottle brush trees, a Winter Wonderland sign, a Merry Christmas sign and a red mug on the tiers below.",
   "Pine sprigs soften the edges.",
   "Keep the lettering styles similar."
  ],
  "key": "tray-40"
 },
 {
  "n": 30,
  "title": "Spell Merry With Wooden Trees",
  "paras": [
   "Letters on tree shapes are a clever touch.",
   "A white two-tier holds wood tree letters that spell MERRY, a green Believe mug, Merry mugs, a snowman, small trees, jingle bells and greenery.",
   "Beaded tassels hang off the sides.",
   "Green and white looks fresh in a kitchen."
  ],
  "key": "tray-29"
 },
 {
  "n": 31,
  "title": "Mix Santa Mugs With a Fresh Cut Trees Sign",
  "paras": [
   "Felt trees add texture.",
   "A wood pedestal holds a Fresh Cut Trees sign, Santa mugs, a white deer, a candle, felt trees and a snowflake, with a bell at the base.",
   "A lace doily sits underneath.",
   "Candles make it glow in the evening."
  ],
  "key": "tray-30"
 },
 {
  "n": 32,
  "title": "Park a Red Truck With a Reindeer Mug",
  "paras": [
   "A toy truck says Christmas instantly.",
   "A two-tier wood tray on the island holds a red truck with a tree, a Ho Ho sign, a reindeer mug, a Hot Cocoa Served Here sign, a red mug and a bead garland.",
   "Pinecones and pine fill the spaces.",
   "Set a small tree behind for height."
  ],
  "key": "tray-06"
 },
 {
  "n": 33,
  "title": "Add Black Reindeer Silhouettes",
  "paras": [
   "Silhouettes read well from across the room.",
   "A wood three-tier holds white houses, a wooden star, a plaid mug, black reindeer cutouts, a monogram mug and a red ornament, with greenery between.",
   "The black and white feels modern.",
   "Pick a mug with your initial."
  ],
  "key": "tray-42"
 },
 {
  "n": 34,
  "title": "Go Dark With a Reindeer Crossing Sign",
  "paras": [
   "A black tray makes everything else pop.",
   "This one carries a Reindeer sign, a deer plaque, a Santa mug, cinnamon sticks in a jar, a Believe sign, a wooden tree, black and white snowflakes and bead garland.",
   "Pine and berries add life.",
   "Cinnamon sticks add scent too."
  ],
  "key": "tray-17"
 },
 {
  "n": 35,
  "title": "Light Up a Village of White Houses",
  "paras": [
   "Glowing houses are magic after dark.",
   "A dark wood three-tier holds lit white ceramic houses, bottle brush trees, pinecones and moss balls.",
   "No signs, no mugs, just a tiny town.",
   "Use battery tea lights inside the houses."
  ],
  "key": "tray-07"
 },
 {
  "n": 36,
  "title": "Try a Gold Mirrored Tray",
  "paras": [
   "Mirror and lights multiply the glow.",
   "A gold mirrored tiered tray carries lit white houses, bottle brush trees, a Santa figure, a Believe block and a Merry Christmas sign, wrapped in tiny lights.",
   "It looks like a snow globe without the glass.",
   "Turn down the room lights to enjoy it."
  ],
  "key": "tray-38"
 },
 {
  "n": 37,
  "title": "Mix Buffalo Plaid With Season's Greetings",
  "paras": [
   "Buffalo check is a farmhouse favorite.",
   "A white three-tier holds a Season's Greetings sign, a plaid house with a wreath, an All Is Calm All Is Bright chalkboard, a Be Bright block, a deer print and plaid bows, with berries throughout.",
   "Black and white keeps it crisp.",
   "Add one red accent and stop there."
  ],
  "key": "tray-32"
 },
 {
  "n": 38,
  "title": "Fill the Tiers With Plaid Ornaments",
  "paras": [
   "Ornaments can replace signs entirely.",
   "A wood three-tier is filled with buffalo plaid balls, pinecones and greenery, topped with a plaid bow and a small house.",
   "It looks full without a single word.",
   "Shatterproof balls are safest here."
  ],
  "key": "tray-33"
 },
 {
  "n": 39,
  "title": "Wrap a Plaid Gift Box for the Tray",
  "paras": [
   "A tiny wrapped present looks festive.",
   "A black tiered tray holds an Oh Holy Night sign, a buffalo plaid gift box, a Merry Christmas tag, a bead garland, a snowman figure and red ornaments, on a plaid table runner.",
   "Repeat the plaid on the runner.",
   "Wrap an empty box so it stays light."
  ],
  "key": "tray-34"
 },
 {
  "n": 40,
  "title": "Add Plaid Booties and a Snowplace Sign",
  "paras": [
   "Little fabric booties are an unexpected touch.",
   "A wood two-tier holds buffalo plaid booties, plaid ornaments, a There's Snowplace Like Home sign, a Merry and Bright mug and small trees, with a plaid bow on top.",
   "Black and white with a touch of green is cozy.",
   "Look for baby booties at a thrift store."
  ],
  "key": "tray-35"
 },
 {
  "n": 41,
  "title": "Pile On Red, White and Gold Ornaments",
  "paras": [
   "Sometimes ornaments say it all.",
   "A wood three-tier here is heaped with red, white and gold balls, pinecones and greenery, with a big plaid bow on top, set beside the tree.",
   "It is quick and very full.",
   "Use different sizes so it does not look flat."
  ],
  "key": "tray-37"
 },
 {
  "n": 42,
  "title": "Set a Knit Santa Among Candy Canes",
  "paras": [
   "Soft and sweet suits a living room.",
   "A white three-tier holds a knit Santa on top, red and white ornaments, star cookies, candy canes, a candle and a striped mug, with pillows behind.",
   "The reds pick up the throw on the sofa.",
   "A candle on the bottom tier warms it up."
  ],
  "key": "tray-04"
 },
 {
  "n": 43,
  "title": "Keep the Santa Tray Simple and Elegant",
  "paras": [
   "A near-twin with a lighter touch.",
   "This white three-tier again has a knit Santa, red and white ornaments, a star cookie and candy canes, with a candle and peppermint mugs at the base.",
   "Fewer pieces make it feel elegant.",
   "Stop before the tiers get crowded."
  ],
  "key": "tray-36"
 },
 {
  "n": 44,
  "title": "Fill It With Wrapped Chocolates",
  "paras": [
   "The best tray might be edible.",
   "A two-tier dark wood tray holds foil-wrapped truffles in red, green and gold with a few candy canes, in front of a garland-draped mantel.",
   "Guests can grab one as they pass.",
   "Refill it and the display stays fresh."
  ],
  "key": "tray-39"
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
<p>A tiered tray packs a lot of holiday cheer into a very small footprint.</p>
<p>It fits on a kitchen island, a counter corner or a console, and you can style it in an afternoon.</p>
<p>The best ones follow a single idea, such as a cocoa bar, a gingerbread bakery or a snowman family, instead of every Christmas item you own.</p>
<p>Height and texture do the rest: one tall piece like a mug or a mini tree, a few low fillers like garland and pinecones, and a sign or two to tie it together.</p>
<p>Here are 44 Christmas tiered tray ideas, grouped by theme, to copy or mix.</p>
${photo("hero")}

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>How to Style Your Own Christmas Tray</h2>
<p>Pick one theme and one color pair, and let everything else go.</p>
<p>Put the tallest piece on the top tier, mid-height mugs and signs in the middle, and low fillers like garland, beads and pinecones along the edges.</p>
<p>Leave a little breathing room on each tier. A tray that is slightly under-filled always looks more styled than one that is crammed.</p>
<p>Then set it where you will see it every day, because that is the whole point.</p>
`;

module.exports = { body };
