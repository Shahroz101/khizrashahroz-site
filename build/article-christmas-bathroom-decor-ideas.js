// Body content for "45 Christmas Bathroom Decor Ideas for a Festive Holiday".
// Converted from the Dwelling Dream "45 Christmas Bathroom Decor Ideas"
// source: all text rewritten from scratch and the ideas regrouped (mirrors,
// vanity counters, shelves, the toilet area, shower and tub). Photos are
// credited to their Pinterest pins; the supplied Amazon product pair stays
// under each photo. Ends on text.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "christmas-bathroom-decor-ideas";
const PRODUCT_DIR = "christmas-bathroom-decor-ideas-products";

const PHOTOS = {
 "bath-04": {
  "w": 736,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/343962490312713914/",
  "label": "Flocked Wreath Over the Vanity Mirror",
  "alt": "Flocked Christmas wreath with a red plaid bow over a gray bathroom vanity mirror"
 },
 "bath-02": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/332562753758346765/",
  "label": "Berry Wreaths on Mirror and Window",
  "alt": "Christmas bathroom with red berry wreaths hanging from the mirror and window"
 },
 "bath-17": {
  "w": 840,
  "h": 1120,
  "pin": "https://www.pinterest.com/pin/660410732892592492/",
  "label": "Mirror Framed by a Greenery Wreath",
  "alt": "Pinecone and red berry Christmas wreath hanging on a bathroom mirror"
 },
 "bath-31": {
  "w": 700,
  "h": 900,
  "pin": "https://www.pinterest.com/pin/6192518233538230/",
  "label": "Lit Mirror in a Cozy Powder Room",
  "alt": "Red Christmas wreath on a softly lit mirror in a cozy powder room"
 },
 "bath-07": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/13651605114640187/",
  "label": "Garland and Ornament Swag Over a Dark Mirror",
  "alt": "Garland and ornament swag draped over a dark framed bathroom mirror with a poinsettia"
 },
 "bath-09": {
  "w": 736,
  "h": 1312,
  "pin": "https://www.pinterest.com/pin/313000242876912428/",
  "label": "Garland-Topped Mirror With Tiered Trees",
  "alt": "Garland and ornament-topped bathroom mirror with tiered bottle brush trees nearby"
 },
 "bath-08": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/949555902684200436/",
  "label": "Shiplap Vanity With a Round Black Mirror",
  "alt": "Shiplap bathroom vanity with a round black mirror and mini Christmas trees"
 },
 "bath-15": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/4603241876422746688/",
  "label": "Burlap Bow Garland Over a Round Mirror",
  "alt": "Burlap bow Christmas garland draped over a round bathroom mirror"
 },
 "bath-22": {
  "w": 801,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/1147362442613771204/",
  "label": "Garland Mirror With Brass Sconces",
  "alt": "Garland-draped bathroom mirror flanked by brass sconces and a mini tree"
 },
 "bath-33": {
  "w": 720,
  "h": 1361,
  "pin": "https://www.pinterest.com/pin/340092209384378129/",
  "label": "Snow-Flocked Garland and Candles",
  "alt": "Snow-flocked Christmas garland draped over a bathroom mirror with lit candles"
 },
 "bath-34": {
  "w": 683,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/34340015904961128/",
  "label": "Garland Mirror With Poinsettias and Candlesticks",
  "alt": "Garland-topped bathroom mirror with poinsettias and brass candlesticks"
 },
 "bath-28": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/664140276346219435/",
  "label": "Garland Mirror With Gold Bells and Rose Gold",
  "alt": "Garland-draped mirror with gold bells and rose gold Christmas ornaments"
 },
 "bath-01": {
  "w": 816,
  "h": 1456,
  "pin": "https://www.pinterest.com/pin/910641987206195181/",
  "label": "Snowman Soap Dispenser and Towels",
  "alt": "Snowman soap dispenser and embroidered snowman towels on a white marble bathroom counter"
 },
 "bath-05": {
  "w": 768,
  "h": 1376,
  "pin": "https://www.pinterest.com/pin/4596697565112414272/",
  "label": "Flocked Tree and Gift-Wrapped Towels",
  "alt": "Flocked tabletop Christmas tree next to gift-wrapped white towels on a marble counter"
 },
 "bath-20": {
  "w": 768,
  "h": 1376,
  "pin": "https://www.pinterest.com/pin/1090856341026620885/",
  "label": "Wrapped Towels and Pinecone Jar",
  "alt": "Gift-wrapped white towel stack next to a pinecone-filled glass jar"
 },
 "bath-38": {
  "w": 1206,
  "h": 1596,
  "pin": "https://www.pinterest.com/pin/475200198203629755/",
  "label": "Candlelit Tray With Mini Trees and a House",
  "alt": "Candlelit wooden tray with mini Christmas trees and a small lit house"
 },
 "bath-39": {
  "w": 736,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/5277724559091306/",
  "label": "Flocked Tree and Candle on a Wooden Tray",
  "alt": "Flocked Christmas tree with a lit candle on a wooden bathroom tray"
 },
 "bath-14": {
  "w": 1575,
  "h": 1924,
  "pin": "https://www.pinterest.com/pin/790170697170723542/",
  "label": "Candlelit Greenery and Berries on a Tray",
  "alt": "Gold tray with candlelit greenery and red berries on a bathroom counter"
 },
 "bath-27": {
  "w": 1024,
  "h": 1820,
  "pin": "https://www.pinterest.com/pin/323977766967862107/",
  "label": "Gold and White Glam Vanity",
  "alt": "Gold and white glam bathroom vanity with a small lit Christmas tree"
 },
 "bath-19": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/34340015904961128/",
  "label": "Double Vanity With Gold Ornament Towels",
  "alt": "Double bathroom vanity with gold ornament embroidered towels and poinsettias"
 },
 "bath-21": {
  "w": 960,
  "h": 1346,
  "pin": "https://www.pinterest.com/pin/36451078230447480/",
  "label": "Flocked Trees With Black Deer",
  "alt": "Flocked Christmas tree with small black deer figurines on a bathroom counter"
 },
 "bath-13": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/897271925779508709/",
  "label": "Rustic Vanity With Plaid Towels",
  "alt": "Rustic wood bathroom vanity with plaid towels and a small snowman figurine"
 },
 "bath-35": {
  "w": 1005,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/4602678906752959552/",
  "label": "Pitcher of Greenery on a Stool",
  "alt": "Vintage white pitcher filled with greenery on a wooden stool by the sink"
 },
 "bath-40": {
  "w": 1024,
  "h": 1361,
  "pin": "https://www.pinterest.com/pin/4597964210092421184/",
  "label": "Character Soap Dispenser With Berry Greenery",
  "alt": "Character soap dispenser with red berry greenery on a bathroom counter"
 },
 "bath-41": {
  "w": 1080,
  "h": 1350,
  "pin": "https://www.pinterest.com/pin/822610688232455266/",
  "label": "Nutcracker and Merry Soap Dispensers",
  "alt": "Nutcracker figurine next to a Merry soap dispenser on a bathroom counter"
 },
 "bath-44": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/23362491812484121/",
  "label": "Poinsettias and Snowflake Soap Dispensers",
  "alt": "Red poinsettia next to red and green snowflake glass soap dispensers"
 },
 "bath-45": {
  "w": 1080,
  "h": 1350,
  "pin": "https://www.pinterest.com/pin/9710955442348019/",
  "label": "Shelf With a Santa and Red Towels",
  "alt": "Floating bathroom shelf with a vintage Santa figurine and folded red towels"
 },
 "bath-23": {
  "w": 900,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/410038741087799130/",
  "label": "Floating Shelves With a JOYFUL Sign",
  "alt": "Bathroom shelf with greenery and a Joyful sign"
 },
 "bath-24": {
  "w": 1125,
  "h": 1402,
  "pin": "https://www.pinterest.com/pin/12384967715342359/",
  "label": "Powder Room Shelf With a Merry and Bright Sign",
  "alt": "Powder room shelf with a Merry and Bright Christmas sign"
 },
 "bath-25": {
  "w": 450,
  "h": 576,
  "pin": "https://www.pinterest.com/pin/1055599907526550/",
  "label": "Layered Shelves With a Gold Nutcracker",
  "alt": "Layered bathroom shelves with a gold nutcracker and bottle brush Christmas trees"
 },
 "bath-26": {
  "w": 736,
  "h": 981,
  "pin": "https://www.pinterest.com/pin/159526011796878028/",
  "label": "Black Floating Shelves With Christmas Signs",
  "alt": "Black floating shelves with a bold Merry Christmas sign"
 },
 "bath-36": {
  "w": 1080,
  "h": 1350,
  "pin": "https://www.pinterest.com/pin/525724956522768026/",
  "label": "Two-Shelf Display With Watercolor Art",
  "alt": "Two-shelf bathroom display with framed watercolor art and bottle brush Christmas trees"
 },
 "bath-37": {
  "w": 683,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/1114500239071255222/",
  "label": "Shelf Nook With a Nutcracker and Garland",
  "alt": "Nook of bathroom shelves styled with a nutcracker figurine and light garland"
 },
 "bath-16": {
  "w": 1536,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/175640454213895469/",
  "label": "Floating Shelves With Reindeer Art",
  "alt": "Floating shelves with a reindeer art print and small white Christmas houses"
 },
 "bath-03": {
  "w": 574,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/4598879019242912128/",
  "label": "Red and White Shelf Above the Toilet",
  "alt": "Red and white Christmas shelf decor above a toilet with cone trees and houses"
 },
 "bath-06": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/17592254793984961/",
  "label": "Toilet Tank Tray With Mini Tree",
  "alt": "Styled wooden toilet tank tray with a small Christmas tree and candle"
 },
 "bath-32": {
  "w": 574,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/4598879006894881152/",
  "label": "Berry Branch Vase Above the Toilet",
  "alt": "Berry branch vase on a cabinet mounted above a bathroom toilet"
 },
 "bath-43": {
  "w": 736,
  "h": 1312,
  "pin": "https://www.pinterest.com/pin/9077636743714755/",
  "label": "Berry Branch Vase Below the Cabinet",
  "alt": "Berry branch vase tucked below a bathroom cabinet"
 },
 "bath-12": {
  "w": 736,
  "h": 1051,
  "pin": "https://www.pinterest.com/pin/401453754307721673/",
  "label": "Hook Wall With a Greenery Swag",
  "alt": "Wall mounted coat hooks with a hanging Christmas greenery swag"
 },
 "bath-42": {
  "w": 683,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/288371182414128003/",
  "label": "Plaid Bow Toilet Paper Rolls",
  "alt": "Toilet paper rolls wrapped with red and green plaid bows"
 },
 "bath-10": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/4603241902192550464/",
  "label": "Plaid Shower Curtain With a Berry Garland",
  "alt": "Red plaid Christmas shower curtain with a berry garland draped on the rod"
 },
 "bath-11": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/825495806734418631/",
  "label": "Woodland Shower Curtain With Red and Green Towels",
  "alt": "Woodland print shower curtain with red and green embroidered towels"
 },
 "bath-29": {
  "w": 659,
  "h": 922,
  "pin": "https://www.pinterest.com/pin/248401735694684896/",
  "label": "Pine Print Shower Curtain",
  "alt": "Pine tree print shower curtain with a styled sled tray on the vanity"
 },
 "bath-18": {
  "w": 737,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/340092209384378117/",
  "label": "Candlelit Tub With Garland and Towels",
  "alt": "Candlelit garden bathtub decorated with Christmas garland and rolled towels"
 },
 "bath-30": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/844493674765134/",
  "label": "Wall-Mounted White Mercury Style Tree",
  "alt": "Carved white mercury glass style Christmas tree mounted on a bathroom wall"
 },
 "hero": {
  "w": 736,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/343962490312713914/",
  "label": "Flocked Wreath Over the Vanity Mirror",
  "alt": "Flocked Christmas wreath with a red plaid bow over a gray bathroom vanity mirror"
 }
};

const PRODUCTS = {
 "bath-04": [
  {
   "asin": "B098DYLS8C",
   "title": "Briful 24 Inch White Snow Flocked Christmas Wreath with Ornaments",
   "w": 1500,
   "h": 1492
  },
  {
   "asin": "B0HCHMNBLS",
   "title": "Christmas Plaid Wreath Bow, Red and Grey Tartan Farmhouse Ribbon",
   "w": 1029,
   "h": 1500
  }
 ],
 "bath-02": [
  {
   "asin": "B0FX9YGNNR",
   "title": "12 Inch Snowy Flocked Christmas Wreath with Bow, Red Berries and Pinecones",
   "w": 1500,
   "h": 1406
  },
  {
   "asin": "B0FL74ZF34",
   "title": "Glitzhome 2 Pcs 14 Inch Artificial Red Berry Christmas Wreaths",
   "w": 1500,
   "h": 745
  }
 ],
 "bath-17": [
  {
   "asin": "B0FL74ZF34",
   "title": "Glitzhome 2 Pcs 14 Inch Artificial Red Berry Christmas Wreaths",
   "w": 1500,
   "h": 745
  },
  {
   "asin": "B0B4SJFZ9X",
   "title": "Inweder Wooden Pillar Candle Holders, Rustic White, Set of 3",
   "w": 1205,
   "h": 1500
  }
 ],
 "bath-31": [
  {
   "asin": "B0FL74ZF34",
   "title": "Glitzhome 2 Pcs 14 Inch Artificial Red Berry Christmas Wreaths",
   "w": 1500,
   "h": 745
  },
  {
   "asin": "B018RUJXHU",
   "title": "echosari 33Ft 100 LED Battery Powered String Lights with Remote, Warm White",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-07": [
  {
   "asin": "B0HBWMHK5Y",
   "title": "4.2 Ft Christmas Mirror Garland with Lights and Pinecones",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0D9R4TF5R",
   "title": "Nearly Natural 19 Inch Red Artificial Christmas Poinsettia in Wrapped Planter",
   "w": 1430,
   "h": 1500
  }
 ],
 "bath-09": [
  {
   "asin": "B0HBWMHK5Y",
   "title": "4.2 Ft Christmas Mirror Garland with Lights and Pinecones",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CCV7JZ15",
   "title": "Mini Christmas Tree with Lights, 24 Inch Snow Flocked Pre-Lit Tabletop Tree",
   "w": 1025,
   "h": 1500
  }
 ],
 "bath-08": [
  {
   "asin": "B00NVMTAY6",
   "title": "2 Inch Miniature Green Bottle Brush Christmas Trees on Wood Bases, 6 Trees",
   "w": 1500,
   "h": 963
  },
  {
   "asin": "B0CH9XZ9W4",
   "title": "MTLEE 15 Sets Christmas Fillable Glass Jar Ornaments",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-15": [
  {
   "asin": "B09NMB4NDF",
   "title": "Vickerman Burlap Pinecone, Glitter, and Red Berry Ribbon, 2.5 Inch x 10 Yards",
   "w": 1500,
   "h": 791
  },
  {
   "asin": "B0HBWMHK5Y",
   "title": "4.2 Ft Christmas Mirror Garland with Lights and Pinecones",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-22": [
  {
   "asin": "B0HBWMHK5Y",
   "title": "4.2 Ft Christmas Mirror Garland with Lights and Pinecones",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CCV7JZ15",
   "title": "Mini Christmas Tree with Lights, 24 Inch Snow Flocked Pre-Lit Tabletop Tree",
   "w": 1025,
   "h": 1500
  }
 ],
 "bath-33": [
  {
   "asin": "B0045VHXGY",
   "title": "National Tree Company 9ft Pre-Lit Frosted Berry Christmas Garland",
   "w": 1500,
   "h": 731
  },
  {
   "asin": "B0B4SJFZ9X",
   "title": "Inweder Wooden Pillar Candle Holders, Rustic White, Set of 3",
   "w": 1205,
   "h": 1500
  }
 ],
 "bath-34": [
  {
   "asin": "B0HBWMHK5Y",
   "title": "4.2 Ft Christmas Mirror Garland with Lights and Pinecones",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0D9R4TF5R",
   "title": "Nearly Natural 19 Inch Red Artificial Christmas Poinsettia in Wrapped Planter",
   "w": 1430,
   "h": 1500
  }
 ],
 "bath-28": [
  {
   "asin": "B0HBWMHK5Y",
   "title": "4.2 Ft Christmas Mirror Garland with Lights and Pinecones",
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
 "bath-01": [
  {
   "asin": "B0DCH7Q6XM",
   "title": "Christmas Snowman Ceramic Soap Dispenser, 10 oz",
   "w": 687,
   "h": 1500
  },
  {
   "asin": "B0DK27HVBD",
   "title": "Serafina Home Embroidered Snowman Hand Towels, Set of 2",
   "w": 1254,
   "h": 1059
  }
 ],
 "bath-05": [
  {
   "asin": "B0CCV7JZ15",
   "title": "Mini Christmas Tree with Lights, 24 Inch Snow Flocked Pre-Lit Tabletop Tree",
   "w": 1025,
   "h": 1500
  },
  {
   "asin": "B0D9GQXKDF",
   "title": "Red Velvet Ribbon for Gift Wrapping, 4 Rolls x 10 Yards",
   "w": 1486,
   "h": 1500
  }
 ],
 "bath-20": [
  {
   "asin": "B0D9GQXKDF",
   "title": "Red Velvet Ribbon for Gift Wrapping, 4 Rolls x 10 Yards",
   "w": 1486,
   "h": 1500
  },
  {
   "asin": "B0CH9XZ9W4",
   "title": "MTLEE 15 Sets Christmas Fillable Glass Jar Ornaments",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-38": [
  {
   "asin": "B0CCV7JZ15",
   "title": "Mini Christmas Tree with Lights, 24 Inch Snow Flocked Pre-Lit Tabletop Tree",
   "w": 1025,
   "h": 1500
  },
  {
   "asin": "B0H2L2MK3G",
   "title": "AELS Christmas Village Tea Light Candle Holder Houses, Set of 6",
   "w": 1347,
   "h": 1350
  }
 ],
 "bath-39": [
  {
   "asin": "B0CCV7JZ15",
   "title": "Mini Christmas Tree with Lights, 24 Inch Snow Flocked Pre-Lit Tabletop Tree",
   "w": 1025,
   "h": 1500
  },
  {
   "asin": "B0B4SJFZ9X",
   "title": "Inweder Wooden Pillar Candle Holders, Rustic White, Set of 3",
   "w": 1205,
   "h": 1500
  }
 ],
 "bath-14": [
  {
   "asin": "B0GZZY2DVP",
   "title": "Gold Mirrored Round Decorative Vanity Tray, 12.6 Inch",
   "w": 1360,
   "h": 1005
  },
  {
   "asin": "B0B4SJFZ9X",
   "title": "Inweder Wooden Pillar Candle Holders, Rustic White, Set of 3",
   "w": 1205,
   "h": 1500
  }
 ],
 "bath-27": [
  {
   "asin": "B0CCV7JZ15",
   "title": "Mini Christmas Tree with Lights, 24 Inch Snow Flocked Pre-Lit Tabletop Tree",
   "w": 1025,
   "h": 1500
  },
  {
   "asin": "B0DG2QSX14",
   "title": "Aridantrp Gold Glitter Ribbon for Christmas Tree, 1.5 Inch, 10 Yards",
   "w": 1500,
   "h": 1423
  }
 ],
 "bath-19": [
  {
   "asin": "B0D9R4TF5R",
   "title": "Nearly Natural 19 Inch Red Artificial Christmas Poinsettia in Wrapped Planter",
   "w": 1430,
   "h": 1500
  },
  {
   "asin": "B0DK27HVBD",
   "title": "Serafina Home Embroidered Snowman Hand Towels, Set of 2",
   "w": 1254,
   "h": 1059
  }
 ],
 "bath-21": [
  {
   "asin": "B0CCV7JZ15",
   "title": "Mini Christmas Tree with Lights, 24 Inch Snow Flocked Pre-Lit Tabletop Tree",
   "w": 1025,
   "h": 1500
  },
  {
   "asin": "B0B4SJFZ9X",
   "title": "Inweder Wooden Pillar Candle Holders, Rustic White, Set of 3",
   "w": 1205,
   "h": 1500
  }
 ],
 "bath-13": [
  {
   "asin": "B0D97VQ3FY",
   "title": "Plaid Christmas Bath Towels for Bathroom, Watercolor Xmas Tree Set",
   "w": 1211,
   "h": 1425
  },
  {
   "asin": "B0GX22K3D1",
   "title": "FUOYLOO Ceramic Snowman Tumbler Figurine Set, 2 Pcs",
   "w": 1159,
   "h": 1082
  }
 ],
 "bath-35": [
  {
   "asin": "B079NN941P",
   "title": "10 Inch Vintage Inspired White Metal Enamel Pitcher Vase",
   "w": 746,
   "h": 971
  },
  {
   "asin": "B0HBQ3VS5J",
   "title": "Topotdor Artificial Christmas Swag with Frosted Pine Branches, 23.6 Inch",
   "w": 1500,
   "h": 687
  }
 ],
 "bath-40": [
  {
   "asin": "B07GQFX3QM",
   "title": "CafePress Peanuts Snoopy Decorative Fabric Shower Curtain",
   "w": 1500,
   "h": 1406
  },
  {
   "asin": "B0FL74ZF34",
   "title": "Glitzhome 2 Pcs 14 Inch Artificial Red Berry Christmas Wreaths",
   "w": 1500,
   "h": 745
  }
 ],
 "bath-41": [
  {
   "asin": "B0GYRV8HYG",
   "title": "2 Pcs Gold Christmas Nutcracker, 15 Inch Wooden Figure",
   "w": 1198,
   "h": 1500
  },
  {
   "asin": "B0H4FLB6WQ",
   "title": "Christmas Snowman Ceramic Soap Dispenser with Metal Pump",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-44": [
  {
   "asin": "B0D9R4TF5R",
   "title": "Nearly Natural 19 Inch Red Artificial Christmas Poinsettia in Wrapped Planter",
   "w": 1430,
   "h": 1500
  },
  {
   "asin": "B0FDWFHLXH",
   "title": "Hexagram Christmas Soap Dispenser, Red and White Snowflake Glass",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-45": [
  {
   "asin": "B0H8YFFQ7T",
   "title": "Ysqool 2 Pcs Vintage Resin Santa Claus Figurines",
   "w": 1500,
   "h": 1430
  },
  {
   "asin": "B0DK27HVBD",
   "title": "Serafina Home Embroidered Snowman Hand Towels, Set of 2",
   "w": 1254,
   "h": 1059
  }
 ],
 "bath-23": [
  {
   "asin": "B0HCBXG9MK",
   "title": "Merry Christmas Hanging Wooden Sign, Farmhouse Holiday Wall Decor",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B00NVMTAY6",
   "title": "2 Inch Miniature Green Bottle Brush Christmas Trees on Wood Bases, 6 Trees",
   "w": 1500,
   "h": 963
  }
 ],
 "bath-24": [
  {
   "asin": "B0HCBXG9MK",
   "title": "Merry Christmas Hanging Wooden Sign, Farmhouse Holiday Wall Decor",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0D77T1VMT",
   "title": "JETEHO Ceramic Christmas Village, 5 White Houses and 9 Trees",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-25": [
  {
   "asin": "B0GYRV8HYG",
   "title": "2 Pcs Gold Christmas Nutcracker, 15 Inch Wooden Figure",
   "w": 1198,
   "h": 1500
  },
  {
   "asin": "B07RS7XD6D",
   "title": "Set of 3 Red and White Stripe Bottle Brush Christmas Trees, 10 Inch",
   "w": 355,
   "h": 355
  }
 ],
 "bath-26": [
  {
   "asin": "B0HCBXG9MK",
   "title": "Merry Christmas Hanging Wooden Sign, Farmhouse Holiday Wall Decor",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B00NVMTAY6",
   "title": "2 Inch Miniature Green Bottle Brush Christmas Trees on Wood Bases, 6 Trees",
   "w": 1500,
   "h": 963
  }
 ],
 "bath-36": [
  {
   "asin": "B00NVMTAY6",
   "title": "2 Inch Miniature Green Bottle Brush Christmas Trees on Wood Bases, 6 Trees",
   "w": 1500,
   "h": 963
  },
  {
   "asin": "B0HCBXG9MK",
   "title": "Merry Christmas Hanging Wooden Sign, Farmhouse Holiday Wall Decor",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-37": [
  {
   "asin": "B0GYRV8HYG",
   "title": "2 Pcs Gold Christmas Nutcracker, 15 Inch Wooden Figure",
   "w": 1198,
   "h": 1500
  },
  {
   "asin": "B0HBWMHK5Y",
   "title": "4.2 Ft Christmas Mirror Garland with Lights and Pinecones",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-16": [
  {
   "asin": "B0D77T1VMT",
   "title": "JETEHO Ceramic Christmas Village, 5 White Houses and 9 Trees",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B00NVMTAY6",
   "title": "2 Inch Miniature Green Bottle Brush Christmas Trees on Wood Bases, 6 Trees",
   "w": 1500,
   "h": 963
  }
 ],
 "bath-03": [
  {
   "asin": "B07RS7XD6D",
   "title": "Set of 3 Red and White Stripe Bottle Brush Christmas Trees, 10 Inch",
   "w": 355,
   "h": 355
  },
  {
   "asin": "B0D77T1VMT",
   "title": "JETEHO Ceramic Christmas Village, 5 White Houses and 9 Trees",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-06": [
  {
   "asin": "B08L5838DW",
   "title": "Rae Dunn Toilet Tank Tray, Decorative Wooden Over-Toilet Organizer",
   "w": 1500,
   "h": 528
  },
  {
   "asin": "B0B4SJFZ9X",
   "title": "Inweder Wooden Pillar Candle Holders, Rustic White, Set of 3",
   "w": 1205,
   "h": 1500
  }
 ],
 "bath-32": [
  {
   "asin": "B079NN941P",
   "title": "10 Inch Vintage Inspired White Metal Enamel Pitcher Vase",
   "w": 746,
   "h": 971
  },
  {
   "asin": "B0FL74ZF34",
   "title": "Glitzhome 2 Pcs 14 Inch Artificial Red Berry Christmas Wreaths",
   "w": 1500,
   "h": 745
  }
 ],
 "bath-43": [
  {
   "asin": "B079NN941P",
   "title": "10 Inch Vintage Inspired White Metal Enamel Pitcher Vase",
   "w": 746,
   "h": 971
  },
  {
   "asin": "B0FL74ZF34",
   "title": "Glitzhome 2 Pcs 14 Inch Artificial Red Berry Christmas Wreaths",
   "w": 1500,
   "h": 745
  }
 ],
 "bath-12": [
  {
   "asin": "B07K71JDZ3",
   "title": "Dseap Wall Mounted Coat Rack, 5 Tri Hooks, Black",
   "w": 1465,
   "h": 1500
  },
  {
   "asin": "B0HBQ3VS5J",
   "title": "Topotdor Artificial Christmas Swag with Frosted Pine Branches, 23.6 Inch",
   "w": 1500,
   "h": 687
  }
 ],
 "bath-42": [
  {
   "asin": "B0HCHMNBLS",
   "title": "Christmas Plaid Wreath Bow, Red and Grey Tartan Farmhouse Ribbon",
   "w": 1029,
   "h": 1500
  },
  {
   "asin": "B0CB1T4MSH",
   "title": "Jaye's Studio Royal Tartan Enameled Metal Napkin Rings, Set of 4",
   "w": 502,
   "h": 603
  }
 ],
 "bath-10": [
  {
   "asin": "B0CKZ62R1B",
   "title": "GOOESING Christmas Plaid Shower Curtain, Scottish Tartan, 60x72 Inch",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0HBWMHK5Y",
   "title": "4.2 Ft Christmas Mirror Garland with Lights and Pinecones",
   "w": 1500,
   "h": 1500
  }
 ],
 "bath-11": [
  {
   "asin": "B0H6PSKQB6",
   "title": "Forest Animal Silhouette Shower Curtain with Snap-In Liner, 60x72 Inch",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0DK27HVBD",
   "title": "Serafina Home Embroidered Snowman Hand Towels, Set of 2",
   "w": 1254,
   "h": 1059
  }
 ],
 "bath-29": [
  {
   "asin": "B0H6PSKQB6",
   "title": "Forest Animal Silhouette Shower Curtain with Snap-In Liner, 60x72 Inch",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B08LLF68WD",
   "title": "Grace Home Rustic Wooden Sled with Hope Lettering, 16.5 Inch",
   "w": 474,
   "h": 1155
  }
 ],
 "bath-18": [
  {
   "asin": "B0B4SJFZ9X",
   "title": "Inweder Wooden Pillar Candle Holders, Rustic White, Set of 3",
   "w": 1205,
   "h": 1500
  },
  {
   "asin": "B0DK27HVBD",
   "title": "Serafina Home Embroidered Snowman Hand Towels, Set of 2",
   "w": 1254,
   "h": 1059
  }
 ],
 "bath-30": [
  {
   "asin": "B0BG99MLNR",
   "title": "Small Vintage Ceramic Christmas Tree with Multi-Color Lights, 6.75 Inch",
   "w": 803,
   "h": 1500
  },
  {
   "asin": "B0B4SJFZ9X",
   "title": "Inweder Wooden Pillar Candle Holders, Rustic White, Set of 3",
   "w": 1205,
   "h": 1500
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Hang a Flocked Wreath Over the Vanity Mirror",
  "paras": [
   "The mirror is the easiest place to start.",
   "A frosted wreath with a big red plaid bow and silver baubles sits on this one, above a gray vanity with a tiny white house and little frosted trees.",
   "The damask wallpaper keeps it from feeling too basic.",
   "Hang it with a ribbon loop over the top of the frame."
  ],
  "key": "bath-04"
 },
 {
  "n": 2,
  "title": "Add Berry Wreaths to Mirror and Window",
  "paras": [
   "Repeat one wreath in two places and the room looks planned.",
   "Small berry wreaths with red bows hang on both the mirror and the window here, with a lit garland along the back of the toilet and a few tiny trees on the sill.",
   "The checkered floor keeps it fresh and bright.",
   "Use removable hooks so the glass stays clean."
  ],
  "key": "bath-02"
 },
 {
  "n": 3,
  "title": "Make the Mirror Itself a Wreath",
  "paras": [
   "Skip the frame and let greenery become one.",
   "A round mirror is ringed with cedar, pinecones and clusters of red berries, over a wood vanity with a white vessel sink and a small potted pine.",
   "Black fixtures and a red berry stem on the counter echo the color.",
   "Wire the greenery to the mirror's hanging hook so it stays in place."
  ],
  "key": "bath-17"
 },
 {
  "n": 4,
  "title": "Wrap a Mirror in Lights and Greenery",
  "paras": [
   "Soft light turns a small bathroom into a hideaway.",
   "An oval mirror here carries a little wreath and a string of tiny lights, with candles on the cabinet, a mini tree by the sink and dark shelves with greenery above the toilet.",
   "The warmth makes it glow like a nook in a cabin.",
   "Plug-in or battery lights both work."
  ],
  "key": "bath-31"
 },
 {
  "n": 5,
  "title": "Swag Garland Over a Dark Wood Mirror",
  "paras": [
   "A dark frame makes bright greens pop.",
   "Pine boughs with red berries and silver ornaments drape across the top of this mirror, with a poinsettia and a jar of red balls on the marble counter.",
   "Sconces on each side keep the light soft.",
   "Keep the garland to the top edge and let the mirror stay clear."
  ],
  "key": "bath-07"
 },
 {
  "n": 6,
  "title": "Tie Garland and Ornaments Around the Mirror",
  "paras": [
   "Take garland all the way around the glass.",
   "Greenery with red ornaments and bows frames a wood mirror in a shiplap bathroom, while small frosted trees and snowman figurines stand on the vanity.",
   "The shiplap makes a clean white backdrop.",
   "Tuck the berries in groups of three for rhythm."
  ],
  "key": "bath-09"
 },
 {
  "n": 7,
  "title": "Dress Up a Shiplap Vanity With a Round Black Mirror",
  "paras": [
   "Black accents can look festive too.",
   "A round black mirror with a red bow and small wreaths hangs over this dark vanity, with mini trees, pine sprigs and funny signs on black wall shelves.",
   "The shiplap and black metal keep it modern.",
   "Keep wreaths on one wall so it does not feel heavy."
  ],
  "key": "bath-08"
 },
 {
  "n": 8,
  "title": "Drape a Burlap Bow Garland Over a Round Mirror",
  "paras": [
   "Rustic touches bring warmth.",
   "A wide burlap bow and berry garland hang over a thin round mirror, above a white vessel sink on a dark vanity with gold trees and a vintage print.",
   "The natural fabric adds texture.",
   "A framed winter scene beside the mirror finishes the look."
  ],
  "key": "bath-15"
 },
 {
  "n": 9,
  "title": "Add Brass Sconces and a Garland Over the Glass",
  "paras": [
   "Brass and greenery are a classic pair.",
   "A spray of greens tied with a gold ribbon sits above this black-framed mirror, flanked by brass sconces, with a mini tree beside the tub and a striped towel on the vanity.",
   "The fixtures already look festive.",
   "A single potted tree in the corner adds height."
  ],
  "key": "bath-22"
 },
 {
  "n": 10,
  "title": "Frost the Mirror With Snowy Garland",
  "paras": [
   "Frosted needles give a snow-dusted look.",
   "A thick flocked garland falls along the side of this mirror, with two candles on a wooden tray below and neutral towels on the ring.",
   "The soft white keeps it calm.",
   "Choose cream towels for the quietest look."
  ],
  "key": "bath-33"
 },
 {
  "n": 11,
  "title": "Place Poinsettias and Brass Candlesticks Below",
  "paras": [
   "A mirror and a counter can work as one display.",
   "Garland swoops across the glass in this double vanity, with white poinsettias and brass candlesticks beneath it.",
   "Embroidered towels pick up the gold tone.",
   "Use white flowers for a clean palette."
  ],
  "key": "bath-34"
 },
 {
  "n": 12,
  "title": "Mix Gold Bells and Rose Gold Baubles",
  "paras": [
   "Warm metallics feel luxurious.",
   "A garland with lights and tiny gold bells circles this round mirror, with rose gold ornaments in a footed glass dish and a brass tray holding a candle and a perfume bottle.",
   "The pink tones soften the shine.",
   "Gold faucets make it all match."
  ],
  "key": "bath-28"
 },
 {
  "n": 13,
  "title": "Start With a Snowman and Soft Towels",
  "paras": [
   "A soap dispenser can set the whole mood.",
   "A smiling snowman dispenser stands on marble next to rolled orange-red towels, a bowl of pinecones and a small potted pine, with snowman-embroidered hand towels behind.",
   "Everything is easy to put away in January.",
   "Choose towels in a color you already own."
  ],
  "key": "bath-01"
 },
 {
  "n": 14,
  "title": "Gift-Wrap a Stack of Towels",
  "paras": [
   "Towels can be the present.",
   "On this marble counter, white towels are tied with a red ribbon beside a flocked mini tree with gold ornaments and a gold-topped bottle of soap.",
   "It looks styled in two minutes.",
   "Use shatterproof ornaments on small trees."
  ],
  "key": "bath-05"
 },
 {
  "n": 15,
  "title": "Pair Wrapped Towels With a Pinecone Jar",
  "paras": [
   "Rustic and cozy in one corner.",
   "On a wood shelf with fairy lights are a little pine, red-ribboned towels and a jar of pinecones and cinnamon sticks.",
   "The lights give the shelf a glow.",
   "Fill the jar with whatever you already have."
  ],
  "key": "bath-20"
 },
 {
  "n": 16,
  "title": "Style a Woven Tray With Trees and a House",
  "paras": [
   "A tray gathers everything neatly.",
   "A round rattan tray carries two small potted pines, a glass candle and a little white house, with greenery tucked underneath.",
   "It sits on the counter beside the sink.",
   "Pick a tray that matches your faucet finish."
  ],
  "key": "bath-38"
 },
 {
  "n": 17,
  "title": "Set a Frosted Tree on a Wooden Tray",
  "paras": [
   "Less is more on a small counter.",
   "An oval wooden tray holds a frosted mini tree, a lit candle on a wood slice, white towels and a woven bottle, in a pale bathroom.",
   "The palette is soft white and natural.",
   "Rolled towels keep it practical."
  ],
  "key": "bath-39"
 },
 {
  "n": 18,
  "title": "Light a Candle in a Gold-Trimmed Tray",
  "paras": [
   "Candlelight makes a counter feel special.",
   "A round tray here holds a pot of pine, red berries and a pinecone, a glass candle, a gold tree and an amber soap bottle, with red-striped towels folded beside it.",
   "The berry colors tie everything together.",
   "Use a flameless candle if you will not be there."
  ],
  "key": "bath-14"
 },
 {
  "n": 19,
  "title": "Go Glam in Gold and White",
  "paras": [
   "Marble and gold feel instantly festive.",
   "A gold mirrored tray carries marble-look soap dispensers, with a small lit tree and gold ornaments nearby, in front of a gilded mirror.",
   "The greenery adds fresh color.",
   "Swap the bottles for plain white if you want it quieter."
  ],
  "key": "bath-27"
 },
 {
  "n": 20,
  "title": "Add Gold Ornament Towels and Poinsettias",
  "paras": [
   "Embroidered towels do the decorating.",
   "On this white double vanity, gold ornament towels hang beside white poinsettias and candlesticks in front of a garland mirror.",
   "It all stays soft and neutral.",
   "Replace the flowers with your favorite stems."
  ],
  "key": "bath-19"
 },
 {
  "n": 21,
  "title": "Place Flocked Trees and Black Deer on the Counter",
  "paras": [
   "A pair of reindeer adds a modern edge.",
   "Two frosted trees in burlap pots stand beside slim black deer figurines on a white counter, with a small tray holding a candle.",
   "Black metal against the white is crisp.",
   "Use odd numbers of figures."
  ],
  "key": "bath-21"
 },
 {
  "n": 22,
  "title": "Mix Plaid Towels With a Snowman on a Rustic Vanity",
  "paras": [
   "Rustic wood loves plaid.",
   "A distressed vanity here has plaid hand towels, a small snowman, a red bowl and a few trees, with a shelf of mini trees beside it and a Christmas rug on the floor.",
   "The warm tones feel like a cabin.",
   "A rug is the quickest change."
  ],
  "key": "bath-13"
 },
 {
  "n": 23,
  "title": "Fill a Vintage Pitcher With Greenery",
  "paras": [
   "A pitcher is a vase with a story.",
   "A white enamel pitcher tied with a red ribbon holds fresh evergreen branches, sitting on a wooden stool by a farmhouse sink with a red-striped towel.",
   "Pinecones sit around the faucet.",
   "Cut your own branches for free."
  ],
  "key": "bath-35"
 },
 {
  "n": 24,
  "title": "Add a Cartoon Dog Soap Dispenser",
  "paras": [
   "Add a little whimsy.",
   "A playful ceramic dog in a red coat stands as a soap dispenser among red berry greenery, a lit candle and a gold tree on a marble counter, with a plaid ribbon nearby.",
   "It makes guests smile.",
   "Keep the rest of the counter simple."
  ],
  "key": "bath-40"
 },
 {
  "n": 25,
  "title": "Set a Nutcracker Next to a Merry Dispenser",
  "paras": [
   "Nutcrackers do not need a mantel.",
   "A red-coated nutcracker dispenser stands beside a cream dispenser printed with a small tree and the word Merry, against a gray wall and a snowflake curtain.",
   "They form a cute pair.",
   "Switch the dispensers back after the holidays."
  ],
  "key": "bath-41"
 },
 {
  "n": 26,
  "title": "Pair Poinsettias With Snowflake Soap Bottles",
  "paras": [
   "Red and green are classic for a reason.",
   "Red and green snowflake-patterned soap dispensers stand beside a red poinsettia and a glass jar of candy canes on a white counter.",
   "The hand towel and mirror behind keep it light.",
   "Use real poinsettias for a fresh look."
  ],
  "key": "bath-44"
 },
 {
  "n": 27,
  "title": "Add a Wire Shelf With a Santa and Red Towels",
  "paras": [
   "A wall shelf adds storage and style.",
   "A black wire rack on the wall holds a little Santa, a flocked tree and a striped box, with red towels below, next to a big black mirror.",
   "The red pops on white walls.",
   "Keep towels in a color you will use again."
  ],
  "key": "bath-45"
 },
 {
  "n": 28,
  "title": "Hang a JOYFUL Sign on a Floating Shelf",
  "paras": [
   "A word sign says it all.",
   "Two wood shelves hold a JOYFUL sign, evergreens in an amber vase, white houses and tiny trees, with a basket of towels and a candle, above a POWDER ROOM sign.",
   "Amber glass adds warmth.",
   "Pick words that suit your family."
  ],
  "key": "bath-23"
 },
 {
  "n": 29,
  "title": "Style a Powder Room Shelf With Merry and Bright",
  "paras": [
   "White on white shows off small pieces.",
   "A Merry and Bright sign, bottle brush trees, white houses and a little wreath sit on narrow white shelves in this powder room.",
   "The sign gives you a focal point.",
   "Vary the height of the trees."
  ],
  "key": "bath-24"
 },
 {
  "n": 30,
  "title": "Layer Shelves With a Gold Nutcracker and Trees",
  "paras": [
   "Layers make a shelf feel full.",
   "Two wooden shelves hold bottle brush trees in green, pink and glitter, a gold nutcracker, little houses and an Oh Holy Night print.",
   "The mix of colors is playful.",
   "Space everything out so each piece shows."
  ],
  "key": "bath-25"
 },
 {
  "n": 31,
  "title": "Use Black Floating Shelves for Contrast",
  "paras": [
   "Black shelves look sharp.",
   "On two shelves are a framed Christmas trees sign, a white deer and flocked trees, plus a red Merry Christmas sign, with a basket of toilet paper below.",
   "The red sign pops.",
   "Keep the same color on both shelves."
  ],
  "key": "bath-26"
 },
 {
  "n": 32,
  "title": "Mix Watercolor Art With Bottle Brush Trees",
  "paras": [
   "A framed print makes it feel designed.",
   "Two wood shelves carry a watercolor winter scene, green trees, a frosted tree, a small house and a round sign.",
   "Everything stays in cool greens and whites.",
   "Choose a print with a few warm accents."
  ],
  "key": "bath-36"
 },
 {
  "n": 33,
  "title": "Fill a Shelf Nook With a Nutcracker and Garland",
  "paras": [
   "Even a narrow nook can sparkle.",
   "A small nutcracker, white towels in a basket and potted greens sit on wood shelves, with a light garland across the bottom shelf.",
   "The red towel on the door adds a pop.",
   "Roll towels for a tidy look."
  ],
  "key": "bath-37"
 },
 {
  "n": 34,
  "title": "Mount Reindeer Art on Floating Shelves",
  "paras": [
   "A reindeer print brings personality.",
   "Two rough wooden shelves hold a framed deer on a dark background, small white houses and tiny trees, beside a plaid shower curtain.",
   "A woven lid on the toilet tank completes it.",
   "Keep objects small so the shelves do not look crowded."
  ],
  "key": "bath-16"
 },
 {
  "n": 35,
  "title": "Fill a Shelf Above the Toilet in Red and White",
  "paras": [
   "The space above the toilet is prime real estate.",
   "A white corner shelf holds red and white cone trees and little houses, with a white branch tree hung with red baubles beneath and a festive hand towel nearby.",
   "The palette is simple and cheerful.",
   "Hang ornaments on a branch for a no-fuss tree."
  ],
  "key": "bath-03"
 },
 {
  "n": 36,
  "title": "Style the Toilet Tank With a Tray",
  "paras": [
   "The tank is a surprise shelf.",
   "A wooden tray holds a tiny frosted tree, a candle and a small house, with a framed pine print on the wall above.",
   "A woven basket on the floor holds extra paper.",
   "Keep it light so it is easy to lift."
  ],
  "key": "bath-06"
 },
 {
  "n": 37,
  "title": "Place a Berry Vase on a Cabinet",
  "paras": [
   "A single vase can lift a corner.",
   "A glass jar of berry branches tied with a burlap bow sits on a wooden tray by the sink, with a small cabinet above the toilet topped with greenery.",
   "The red berries are the only color.",
   "Reuse a pasta sauce jar."
  ],
  "key": "bath-32"
 },
 {
  "n": 38,
  "title": "Tuck a Berry Vase Below the Cabinet",
  "paras": [
   "Variety comes from shifting position.",
   "A mason jar of pale berry branches with a burlap bow stands on a small tray on the counter, below a white cabinet with a bit of greenery on top.",
   "The soft color feels fresh.",
   "Leave the cabinet doors easy to open."
  ],
  "key": "bath-43"
 },
 {
  "n": 39,
  "title": "Hang a Greenery Swag on Coat Hooks",
  "paras": [
   "Hooks are underused decor.",
   "A swag with pinecones and snowflakes hangs from a row of black hooks, with a gray towel, a Merry Christmas sign and a candle on the counter.",
   "The board-and-batten wall adds charm.",
   "Hang it at eye level."
  ],
  "key": "bath-12"
 },
 {
  "n": 40,
  "title": "Wrap Toilet Paper in Plaid Ribbon",
  "paras": [
   "The smallest idea may be the most fun.",
   "Three rolls of toilet paper are tied with red and green plaid ribbon, set by a mirror and a tree.",
   "Guests notice it right away.",
   "Keep spare rolls in a basket nearby."
  ],
  "key": "bath-42"
 },
 {
  "n": 41,
  "title": "Hang a Plaid Shower Curtain With a Berry Rod",
  "paras": [
   "A shower curtain is a big canvas.",
   "A red plaid curtain hangs from a rod draped with a berry garland, in a white tiled shower beside a striped jute rug.",
   "The garland makes it festive.",
   "Hang the garland with clips so the rod stays free."
  ],
  "key": "bath-10"
 },
 {
  "n": 42,
  "title": "Pick a Woodland Shower Curtain",
  "paras": [
   "Animals and snowflakes feel cozy.",
   "A cream curtain printed with deer, bears and red snowflakes hangs over a tub, with red and green striped towels, plaid mats and a small wreath on the door.",
   "The colors look rustic.",
   "Match the mats to the curtain."
  ],
  "key": "bath-11"
 },
 {
  "n": 43,
  "title": "Hang a Pine Print Curtain",
  "paras": [
   "Trees on the curtain bring the forest in.",
   "A white curtain printed with green pines hangs by a vanity with a little red sled tray holding candles, trees and a snowman.",
   "A hanging shelf holds more greenery.",
   "Keep the rest minimal."
  ],
  "key": "bath-29"
 },
 {
  "n": 44,
  "title": "Light the Tub With Candles",
  "paras": [
   "Turn the tub into a spa.",
   "Garland and berries on the wall, candles along the tub edge, a wood caddy and rolled towels tied with red ribbon make this look like a retreat.",
   "Warm light is the key.",
   "Use flameless candles for safety."
  ],
  "key": "bath-18"
 },
 {
  "n": 45,
  "title": "Mount a White Tree on the Wall",
  "paras": [
   "Make a tree that does not use floor space.",
   "A tall, carved white tree with red and green baubles hangs on the wall above a tub, with a fur rug, embroidered tree towels and a garland.",
   "It keeps the floor clear.",
   "It looks great in a gray room."
  ],
  "key": "bath-30"
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
<p>The bathroom is the last room most people decorate for Christmas, which is why it makes such a big impression when you do.</p>
<p>A guest washing their hands notices a few festive touches right away.</p>
<p>The trick is to keep it small and easy to swap: a towel set, a wreath on the mirror, a tray on the counter. Nothing has to be permanent, and nothing has to compete with your fixtures.</p>
<p>These 45 ideas cover the whole room, from mirrors and vanities to shelves, the toilet area, shower curtains and the tub.</p>
${photo("hero")}

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>How to Decorate a Bathroom Without Crowding It</h2>
<p>Forty-five ideas is a lot, and no bathroom needs all of them.</p>
<p>Pick two or three and repeat a color, like red, gold or soft white, so the room feels like one picture.</p>
<p>Keep the counter clear enough to use, since this is still a working room.</p>
<p>Use battery candles and lights wherever water is near, and take everything down easily when the season ends.</p>
`;

module.exports = { body };
