// Body content for "45 Christmas Bathroom Decor Ideas for a Festive Holiday".
// Converted from the Dwelling Dream "45 Christmas Bathroom Decor Ideas"
// source: all text rewritten from scratch and the ideas regrouped (mirrors,
// vanity counters, shelves, the toilet area, shower and tub). Photos are
// credited to their Pinterest pins; the supplied Amazon product pair stays
// under each photo. Ends on text.
// Rewritten 2026-10-25 in an advice-led voice (styling rules, the why behind
// each look, practical tips) after the first draft read like photo captions.

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
  "title": "Start With the Mirror",
  "paras": [
   "The mirror is the biggest vertical surface in a bathroom, so it's where I always begin.",
   "A frosted wreath with a red plaid bow hangs here, centered over the sink, while the little house and trees on the vanity sit off to one side. Symmetry up high, a looser arrangement below. That mix keeps a small room from feeling stiff.",
   "Hang the wreath on a ribbon looped over the top edge of the mirror. No holes, no hooks, and it takes thirty seconds.",
   "Keep it light. A heavy wreath will pull on the ribbon and tilt."
  ],
  "key": "bath-04",
  "_orig": [
   "The mirror is the biggest vertical surface in a bathroom, so it's where I always begin.",
   "A frosted wreath with a red plaid bow hangs here, centered over the sink, while the little house and trees on the vanity sit off to one side. Symmetry up high, a looser arrangement below. That mix keeps a small room from feeling stiff.",
   "Hang the wreath on a ribbon looped over the top edge of the mirror. No holes, no hooks, and it takes thirty seconds.",
   "Keep it light. A heavy wreath will pull on the ribbon and tilt."
  ]
 },
 {
  "n": 2,
  "title": "Repeat One Wreath in Two Places",
  "paras": [
   "<p><strong>Repetition is the cheapest way to make a room look planned.</strong> Two small berry wreaths, one on the mirror and one on the window, turn two separate surfaces into a pair. A lit garland along the back of the toilet adds a third layer of green without touching the counter.</p>",
   "Use removable hooks on glass and check the weight limit on the packet.",
   "Two wreaths is plenty. A third and the room starts to feel like a shop."
  ],
  "key": "bath-02",
  "_orig": [
   "Repetition is the cheapest way to make a room look planned.",
   "Two small berry wreaths, one on the mirror and one on the window, turn two separate surfaces into a pair. A lit garland along the back of the toilet adds a third layer of green without touching the counter.",
   "Use removable hooks on glass and check the weight limit on the packet.",
   "Two wreaths is plenty. A third and the room starts to feel like a shop."
  ]
 },
 {
  "n": 3,
  "title": "Let the Mirror Become the Wreath",
  "paras": [
   "Why hang something on a mirror when the mirror can be the centerpiece?",
   "A ring of cedar, pinecones and red berries surrounds this round mirror, so wreath and glass read as one shape. A single berry stem on the counter echoes it.",
   "<ul><li>Wire the greenery to the mirror's own hanging hook and tie it at three points so it holds its circle.</li><li>Choose faux greens for a steamy room. Real ones brown after a week of hot showers.</li></ul>"
  ],
  "key": "bath-17",
  "_orig": [
   "Why hang something on a mirror when the mirror can be the centerpiece?",
   "A ring of cedar, pinecones and red berries surrounds this round mirror, so wreath and glass read as one shape. A single berry stem on the counter echoes it.",
   "Wire the greenery to the mirror's own hanging hook and tie it at three points so it holds its circle.",
   "Choose faux greens for a steamy room. Real ones brown after a week of hot showers."
  ]
 },
 {
  "n": 4,
  "title": "Light It Low and Warm",
  "paras": [
   "Small bathrooms look best in soft, low light.",
   "Fairy lights circle this oval mirror, candles glow on the cabinet and dark shelves of greenery sit above the toilet. The whole room feels like a cabin after dark.",
   "A good rule: three light sources at different heights, one at the floor, one at the counter, one on the wall. That is what makes a room feel layered. Use battery lights and keep them out of the sink's splash zone. Warm white only, because cool white makes a bathroom look clinical."
  ],
  "key": "bath-31",
  "_orig": [
   "Small bathrooms look best in soft, low light.",
   "Fairy lights circle this oval mirror, candles glow on the cabinet and dark shelves of greenery sit above the toilet. The whole room feels like a cabin after dark.",
   "A good rule: three light sources at different heights, one at the floor, one at the counter, one on the wall. That is what makes a room feel layered.",
   "Use battery lights and keep them out of the sink's splash zone. Warm white only, because cool white makes a bathroom look clinical."
  ]
 },
 {
  "n": 5,
  "title": "Let a Dark Frame Show Off Bright Greens",
  "paras": [
   "A dark wood mirror and a bright garland make an easy pair.",
   "Pine boughs with red berries and silver ornaments arch across the top here, while a poinsettia and a jar of red balls sit low on the marble. The red repeats high and low, and your eye travels between them.",
   "<p><strong>Quick tip:</strong> Keep the garland along the top edge only, so you can still see your face while brushing your teeth.</p>",
   "A jar of ornaments is also the best use I know for the chipped or mismatched ones."
  ],
  "key": "bath-07",
  "_orig": [
   "A dark wood mirror and a bright garland make an easy pair.",
   "Pine boughs with red berries and silver ornaments arch across the top here, while a poinsettia and a jar of red balls sit low on the marble. The red repeats high and low, and your eye travels between them.",
   "Keep the garland along the top edge only, so you can still see your face while brushing your teeth.",
   "A jar of ornaments is also the best use I know for the chipped or mismatched ones."
  ]
 },
 {
  "n": 6,
  "title": "Wrap All Four Sides of the Frame",
  "paras": [
   "Draping every side of a mirror makes it look like a framed picture. In this shiplap bathroom, garland with red ornaments and bows wraps the wood frame, and small frosted trees and snowman figures wait on the vanity below.",
   "Space the bows about a hand apart and fix the garland with floral wire, since tape won't hold in steam.",
   "Keep greenery away from hot bulbs, which dry it out. LED bulbs are cooler and kinder."
  ],
  "key": "bath-09",
  "_orig": [
   "Draping every side of a mirror makes it look like a framed picture.",
   "In this shiplap bathroom, garland with red ornaments and bows wraps the wood frame, and small frosted trees and snowman figures wait on the vanity below.",
   "Space the bows about a hand apart and fix the garland with floral wire, since tape won't hold in steam.",
   "Keep greenery away from hot bulbs, which dry it out. LED bulbs are cooler and kinder."
  ]
 },
 {
  "n": 7,
  "title": "Warm Up a Dark Vanity",
  "paras": [
   "Black fixtures need warmth, and wreaths supply it.",
   "A round black mirror with a red bow and a pair of small wreaths hang on shiplap above this dark vanity. Black wall shelves hold mini trees and a funny sign. Group your wreaths on one wall and let the other side stay calm.",
   "Black and red look sharp together. White towels keep it from feeling heavy."
  ],
  "key": "bath-08",
  "_orig": [
   "Black fixtures need warmth, and wreaths supply it.",
   "A round black mirror with a red bow and a pair of small wreaths hang on shiplap above this dark vanity. Black wall shelves hold mini trees and a funny sign.",
   "Group your wreaths on one wall and let the other side stay calm.",
   "Black and red look sharp together. White towels keep it from feeling heavy."
  ]
 },
 {
  "n": 8,
  "title": "Soften a Modern Mirror With Burlap",
  "paras": [
   "Burlap is the fastest way to make something modern feel cozy.",
   "A wide burlap bow and berry garland cross this thin round mirror, above a white vessel sink on a dark wood vanity.",
   "<ul><li>Pair rough with shiny. The gold trees nearby stop the burlap from tipping into pure rustic.</li><li>A framed winter scene beside the mirror finishes it.</li></ul>"
  ],
  "key": "bath-15",
  "_orig": [
   "Burlap is the fastest way to make something modern feel cozy.",
   "A wide burlap bow and berry garland cross this thin round mirror, above a white vessel sink on a dark wood vanity.",
   "Pair rough with shiny. The gold trees nearby stop the burlap from tipping into pure rustic.",
   "A framed winter scene beside the mirror finishes it."
  ]
 },
 {
  "n": 9,
  "title": "Match Your Ribbon to Your Metal",
  "paras": [
   "<p><strong>Brass fixtures call for gold ribbon. Chrome calls for silver. It sounds obvious, but it is the detail most people miss.</strong> Here a spray of greens tied with gold sits above a black-framed mirror, with brass sconces on either side, so the decoration looks like it came with the room.</p>",
   "<ul><li>A potted tree in the corner adds height without using any counter.</li><li>Pick a tree small enough that a guest can still reach the tub.</li></ul>"
  ],
  "key": "bath-22",
  "_orig": [
   "Brass fixtures call for gold ribbon. Chrome calls for silver. It sounds obvious, but it is the detail most people miss.",
   "Here a spray of greens tied with gold sits above a black-framed mirror, with brass sconces on either side, so the decoration looks like it came with the room.",
   "A potted tree in the corner adds height without using any counter.",
   "Pick a tree small enough that a guest can still reach the tub."
  ]
 },
 {
  "n": 10,
  "title": "Choose a Quiet Palette",
  "paras": [
   "If you want calm, go quiet on color. A flocked garland falls down one side of this mirror, and two candles sit on a wooden tray below, with cream towels on the ring. The only color in the room is green.",
   "Buy towels in oatmeal or cream so the greenery does the talking. Keep candles on a tray. It protects the counter and looks tidier. Battery ones are safest near water."
  ],
  "key": "bath-33",
  "_orig": [
   "If you want calm, go quiet on color.",
   "A flocked garland falls down one side of this mirror, and two candles sit on a wooden tray below, with cream towels on the ring. The only color in the room is green.",
   "Buy towels in oatmeal or cream so the greenery does the talking.",
   "Keep candles on a tray. It protects the counter and looks tidier. Battery ones are safest near water."
  ]
 },
 {
  "n": 11,
  "title": "Treat the Mirror and Counter as One Picture",
  "paras": [
   "I always style the mirror and counter together, never separately.",
   "Garland swoops across the top of this double vanity mirror, and white poinsettias and brass candlesticks stand underneath, with gold-embroidered towels tying it together.",
   "White flowers feel elegant, and faux ones are easier because real poinsettias sulk in cold drafts.",
   "Place candlesticks well away from the sink."
  ],
  "key": "bath-34",
  "_orig": [
   "I always style the mirror and counter together, never separately.",
   "Garland swoops across the top of this double vanity mirror, and white poinsettias and brass candlesticks stand underneath, with gold-embroidered towels tying it together.",
   "White flowers feel elegant, and faux ones are easier because real poinsettias sulk in cold drafts.",
   "Place candlesticks well away from the sink."
  ]
 },
 {
  "n": 12,
  "title": "Mix Metals the Smart Way",
  "paras": [
   "<p><strong>Mixing metals is fine, as long as one of them leads.</strong> Gold bells and lights run along the garland around this round mirror, rose gold baubles sit in a footed dish and a brass tray holds a candle and a perfume bottle.</p>",
   "Aim for roughly 70 percent gold and 30 percent rose gold.",
   "Gold faucets make the whole thing feel consistent."
  ],
  "key": "bath-28",
  "_orig": [
   "Mixing metals is fine, as long as one of them leads.",
   "Gold bells and lights run along the garland around this round mirror, rose gold baubles sit in a footed dish and a brass tray holds a candle and a perfume bottle.",
   "Aim for roughly 70 percent gold and 30 percent rose gold.",
   "Gold faucets make the whole thing feel consistent."
  ]
 },
 {
  "n": 13,
  "title": "Start With a Soap Dispenser",
  "paras": [
   "A soap dispenser is the one decoration every guest actually touches.",
   "A snowman pump stands on marble next to a pair of rolled red-orange towels, a bowl of pinecones and a small potted pine.",
   "<ul><li>Pick pieces that are easy to swap out in January, like pumps and towels.</li><li>Rolled towels look tidier than folded ones and take less counter.</li></ul>"
  ],
  "key": "bath-01",
  "_orig": [
   "A soap dispenser is the one decoration every guest actually touches.",
   "A snowman pump stands on marble next to a pair of rolled red-orange towels, a bowl of pinecones and a small potted pine.",
   "Pick pieces that are easy to swap out in January, like pumps and towels.",
   "Rolled towels look tidier than folded ones and take less counter."
  ]
 },
 {
  "n": 14,
  "title": "Wrap a Towel Stack Like a Present",
  "paras": [
   "The quickest bathroom upgrade I know takes two minutes.",
   "Tie a stack of white hand towels with ribbon and set it next to a mini tree, as shown here with a frosted tree and a gold-topped soap bottle.",
   "Use wired ribbon. It holds a bow shape even on a soft stack. Shatterproof ornaments on a small tree are safer around tile."
  ],
  "key": "bath-05",
  "_orig": [
   "The quickest bathroom upgrade I know takes two minutes.",
   "Tie a stack of white hand towels with ribbon and set it next to a mini tree, as shown here with a frosted tree and a gold-topped soap bottle.",
   "Use wired ribbon. It holds a bow shape even on a soft stack.",
   "Shatterproof ornaments on a small tree are safer around tile."
  ]
 },
 {
  "n": 15,
  "title": "Make a Shelf Smell Like Christmas",
  "paras": [
   "Pinecones are free decor with free fragrance.",
   "A rustic shelf holds a small pine, red-ribboned towels and a jar of pinecones and cinnamon sticks, lit by warm fairy lights.",
   "<p><strong>Quick tip:</strong> Bake foraged pinecones at 200°F for about 45 minutes before bringing them in, to drive out insects.</p>",
   "Cinnamon sticks scent a small room better than most candles."
  ],
  "key": "bath-20",
  "_orig": [
   "Pinecones are free decor with free fragrance.",
   "A rustic shelf holds a small pine, red-ribboned towels and a jar of pinecones and cinnamon sticks, lit by warm fairy lights.",
   "Bake foraged pinecones at 200°F for about 45 minutes before bringing them in, to drive out insects.",
   "Cinnamon sticks scent a small room better than most candles."
  ]
 },
 {
  "n": 16,
  "title": "Corral Everything on a Tray",
  "paras": [
   "A tray is the best organizing trick in a small bathroom. A woven tray keeps two small pines, a glass candle and a white house together on this counter, so cleaning is a single lift.",
   "Choose a tray that matches your faucet finish.",
   "Everything on it should come off in one move."
  ],
  "key": "bath-38",
  "_orig": [
   "A tray is the best organizing trick in a small bathroom.",
   "A woven tray keeps two small pines, a glass candle and a white house together on this counter, so cleaning is a single lift.",
   "Choose a tray that matches your faucet finish.",
   "Everything on it should come off in one move."
  ]
 },
 {
  "n": 17,
  "title": "Keep a Tiny Counter Simple",
  "paras": [
   "On a small counter, one tree is plenty.",
   "An oval wooden tray holds a frosted mini tree, a candle on a wood slice and rolled white towels. Set candles on a slice or a dish, so wax can't mark the surface.",
   "Rolled towels keep the display useful too."
  ],
  "key": "bath-39",
  "_orig": [
   "On a small counter, one tree is plenty.",
   "An oval wooden tray holds a frosted mini tree, a candle on a wood slice and rolled white towels.",
   "Set candles on a slice or a dish, so wax can't mark the surface.",
   "Rolled towels keep the display useful too."
  ]
 },
 {
  "n": 18,
  "title": "Build a Candlelit Corner",
  "paras": [
   "A candle, a bit of greenery and a berry sprig is a formula that never fails.",
   "A round tray here holds a pot of pine with berries and a pinecone, a glass candle, a gold tree and an amber soap bottle, with red-striped towels beside it.",
   "<ul><li>Amber glass is a clever winter color for soap bottles.</li><li>Use a flameless candle if you won't be around.</li></ul>"
  ],
  "key": "bath-14",
  "_orig": [
   "A candle, a bit of greenery and a berry sprig is a formula that never fails.",
   "A round tray here holds a pot of pine with berries and a pinecone, a glass candle, a gold tree and an amber soap bottle, with red-striped towels beside it.",
   "Amber glass is a clever winter color for soap bottles.",
   "Use a flameless candle if you won't be around."
  ]
 },
 {
  "n": 19,
  "title": "Pair White Marble With Gold",
  "paras": [
   "<p><strong>Marble and gold flatter each other.</strong> A gold mirrored tray carries marble-look soap pieces here, with a small lit tree and gold baubles nearby.</p>",
   "<ul><li>Decant soap into matching bottles. It makes any counter look styled.</li><li>Keep the quantity down so the marble stays visible.</li></ul>"
  ],
  "key": "bath-27",
  "_orig": [
   "Marble and gold flatter each other.",
   "A gold mirrored tray carries marble-look soap pieces here, with a small lit tree and gold baubles nearby.",
   "Decant soap into matching bottles. It makes any counter look styled.",
   "Keep the quantity down so the marble stays visible."
  ]
 },
 {
  "n": 20,
  "title": "Let Seasonal Towels Do the Decorating",
  "paras": [
   "Seasonal towels are the lowest-effort decor there is. On this white double vanity, gold ornament towels hang near white poinsettias and candlesticks, in front of a garland mirror.",
   "Hang them where guests dry their hands, so they earn their place. Wash embroidered towels before using them. They shed lint at first."
  ],
  "key": "bath-19",
  "_orig": [
   "Seasonal towels are the lowest-effort decor there is.",
   "On this white double vanity, gold ornament towels hang near white poinsettias and candlesticks, in front of a garland mirror.",
   "Hang them where guests dry their hands, so they earn their place.",
   "Wash embroidered towels before using them. They shed lint at first."
  ]
 },
 {
  "n": 21,
  "title": "Add Deer for a Modern Edge",
  "paras": [
   "Black accents make Christmas look modern.",
   "Two flocked trees in burlap pots stand beside slim black reindeer on this white counter, with a candle on a small tray.",
   "Angle the figures a little differently so they look like they are moving.",
   "Burlap pots are a handy cover for plain plastic ones."
  ],
  "key": "bath-21",
  "_orig": [
   "Black accents make Christmas look modern.",
   "Two flocked trees in burlap pots stand beside slim black reindeer on this white counter, with a candle on a small tray.",
   "Angle the figures a little differently so they look like they are moving.",
   "Burlap pots are a handy cover for plain plastic ones."
  ]
 },
 {
  "n": 22,
  "title": "Let a Rug Do the Heavy Lifting",
  "paras": [
   "<p><strong>If you only change one thing in a bathroom, change the rug.</strong> This weathered vanity has plaid towels, a small snowman and a red bowl, but the Christmas rug on the floor sets the mood.</p>",
   "Pick one with a non-slip backing.",
   "If the rug is patterned, keep the towels solid."
  ],
  "key": "bath-13",
  "_orig": [
   "If you only change one thing in a bathroom, change the rug.",
   "This weathered vanity has plaid towels, a small snowman and a red bowl, but the Christmas rug on the floor sets the mood.",
   "Pick one with a non-slip backing.",
   "If the rug is patterned, keep the towels solid."
  ]
 },
 {
  "n": 23,
  "title": "Use a Pitcher as a Vase",
  "paras": [
   "A pitcher is a vase with a story.",
   "A white enamel pitcher tied with a red ribbon holds fresh evergreen branches on a wooden stool beside a farmhouse sink.",
   "<ul><li>Cut the branches in the morning, strip the lower needles and stand them in water. Evergreens last for weeks in a cool bathroom.</li><li>A striped towel on the sink adds a bit of color.</li></ul>"
  ],
  "key": "bath-35",
  "_orig": [
   "A pitcher is a vase with a story.",
   "A white enamel pitcher tied with a red ribbon holds fresh evergreen branches on a wooden stool beside a farmhouse sink.",
   "Cut the branches in the morning, strip the lower needles and stand them in water. Evergreens last for weeks in a cool bathroom.",
   "A striped towel on the sink adds a bit of color."
  ]
 },
 {
  "n": 24,
  "title": "Add One Piece That Makes Guests Smile",
  "paras": [
   "Humor goes a long way in a bathroom.",
   "A playful ceramic dog in a red coat doubles as a soap pump here, among berry greenery, a candle and a tiny gold tree.",
   "Choose one funny piece and keep everything else classic. Check that the pump works with your soap, because thick soap can clog it."
  ],
  "key": "bath-40",
  "_orig": [
   "Humor goes a long way in a bathroom.",
   "A playful ceramic dog in a red coat doubles as a soap pump here, among berry greenery, a candle and a tiny gold tree.",
   "Choose one funny piece and keep everything else classic.",
   "Check that the pump works with your soap, because thick soap can clog it."
  ]
 },
 {
  "n": 25,
  "title": "Pair Dispensers Like Bookends",
  "paras": [
   "Dispensers work like bookends.",
   "A nutcracker pump stands next to a cream dispenser printed with a tree and the word Merry.",
   "<p><strong>Quick tip:</strong> Two pieces of different heights look better than two identical ones.</p>",
   "Swap back to plain bottles in January."
  ],
  "key": "bath-41",
  "_orig": [
   "Dispensers work like bookends.",
   "A nutcracker pump stands next to a cream dispenser printed with a tree and the word Merry.",
   "Two pieces of different heights look better than two identical ones.",
   "Swap back to plain bottles in January."
  ]
 },
 {
  "n": 26,
  "title": "Keep Red and Green, but Edit",
  "paras": [
   "Red and green are classic, but quantity matters. Red and green snowflake soap dispensers stand beside a poinsettia and a jar of candy canes on a white counter.",
   "On white, one strong color is enough. Let the green stay small.",
   "Candy canes in a clear jar are the cheapest accent you can buy."
  ],
  "key": "bath-44",
  "_orig": [
   "Red and green are classic, but quantity matters.",
   "Red and green snowflake soap dispensers stand beside a poinsettia and a jar of candy canes on a white counter.",
   "On white, one strong color is enough. Let the green stay small.",
   "Candy canes in a clear jar are the cheapest accent you can buy."
  ]
 },
 {
  "n": 27,
  "title": "Add Storage That Looks Like Decor",
  "paras": [
   "A wall shelf is decoration with a job.",
   "A black wire rack holds a little Santa, a flocked tree and a striped box above red towels, next to a big black mirror. Mount it at towel height so the towels are the first thing you reach.",
   "Red towels on white walls are bold. Stay with one color so it doesn't get busy."
  ],
  "key": "bath-45",
  "_orig": [
   "A wall shelf is decoration with a job.",
   "A black wire rack holds a little Santa, a flocked tree and a striped box above red towels, next to a big black mirror.",
   "Mount it at towel height so the towels are the first thing you reach.",
   "Red towels on white walls are bold. Stay with one color so it doesn't get busy."
  ]
 },
 {
  "n": 28,
  "title": "Say It With a Word",
  "paras": [
   "A word sign gives a shelf a focal point.",
   "Two wood shelves hold a JOYFUL sign, evergreens in an amber vase, white houses and tiny trees above a POWDER ROOM sign.",
   "<ul><li>Hang the lower shelf about twelve inches under the first.</li><li>Amber glass adds warmth to green and white.</li></ul>"
  ],
  "key": "bath-23",
  "_orig": [
   "A word sign gives a shelf a focal point.",
   "Two wood shelves hold a JOYFUL sign, evergreens in an amber vase, white houses and tiny trees above a POWDER ROOM sign.",
   "Hang the lower shelf about twelve inches under the first.",
   "Amber glass adds warmth to green and white."
  ]
 },
 {
  "n": 29,
  "title": "Use White Shelves to Spotlight Small Things",
  "paras": [
   "<p><strong>White shelves are a good stage for little pieces.</strong> A Merry and Bright sign, bottle brush trees, white houses and a small wreath are spread over three narrow shelves in this powder room.</p>",
   "<ul><li>Vary the heights. Put taller trees at the ends and small houses in the middle.</li><li>Leave a little shelf empty for balance.</li></ul>"
  ],
  "key": "bath-24",
  "_orig": [
   "White shelves are a good stage for little pieces.",
   "A Merry and Bright sign, bottle brush trees, white houses and a small wreath are spread over three narrow shelves in this powder room.",
   "Vary the heights. Put taller trees at the ends and small houses in the middle.",
   "Leave a little shelf empty for balance."
  ]
 },
 {
  "n": 30,
  "title": "Layer a Shelf Like a Stylist",
  "paras": [
   "Layers make a shelf feel full. Two wooden shelves hold bottle brush trees in green, pink and glitter, a gold nutcracker and an Oh Holy Night print.",
   "Put the tallest items at the back and the small ones in front. Three pieces per foot of shelf is a good guide."
  ],
  "key": "bath-25",
  "_orig": [
   "Layers make a shelf feel full.",
   "Two wooden shelves hold bottle brush trees in green, pink and glitter, a gold nutcracker and an Oh Holy Night print.",
   "Put the tallest items at the back and the small ones in front.",
   "Three pieces per foot of shelf is a good guide."
  ]
 },
 {
  "n": 31,
  "title": "Use Black for Contrast",
  "paras": [
   "Black shelves look sharp against pale walls.",
   "A framed Christmas trees sign, a white deer and flocked trees sit on two shelves here, with a red Merry Christmas sign at the bottom.",
   "Use the same color on both shelves so the display feels like one idea.",
   "A basket of toilet paper below keeps practical items tidy."
  ],
  "key": "bath-26",
  "_orig": [
   "Black shelves look sharp against pale walls.",
   "A framed Christmas trees sign, a white deer and flocked trees sit on two shelves here, with a red Merry Christmas sign at the bottom.",
   "Use the same color on both shelves so the display feels like one idea.",
   "A basket of toilet paper below keeps practical items tidy."
  ]
 },
 {
  "n": 32,
  "title": "Lean Art Against the Wall",
  "paras": [
   "<p><strong>Art makes a shelf feel designed.</strong> Two wood shelves carry a watercolor winter print, green trees, a frosted tree, a small house and a round sign.</p>",
   "Choose a print with a few warm accents to balance cool trees.",
   "Keep frames lightweight when hanging above a toilet."
  ],
  "key": "bath-36",
  "_orig": [
   "Art makes a shelf feel designed.",
   "Two wood shelves carry a watercolor winter print, green trees, a frosted tree, a small house and a round sign.",
   "Choose a print with a few warm accents to balance cool trees.",
   "Keep frames lightweight when hanging above a toilet."
  ]
 },
 {
  "n": 33,
  "title": "Use Every Nook",
  "paras": [
   "A tight nook can still sparkle.",
   "A small nutcracker, white towels in a basket and potted greens sit on wood shelves here, with a light garland across the bottom.",
   "<ul><li>Roll towels, which take less space.</li><li>Narrow spaces suit tall, slim decor.</li></ul>"
  ],
  "key": "bath-37",
  "_orig": [
   "A tight nook can still sparkle.",
   "A small nutcracker, white towels in a basket and potted greens sit on wood shelves here, with a light garland across the bottom.",
   "Roll towels, which take less space.",
   "Narrow spaces suit tall, slim decor."
  ]
 },
 {
  "n": 34,
  "title": "Hang Art on Floating Shelves",
  "paras": [
   "Floating shelves are ideal for tiny rooms.",
   "Two rough wooden shelves hold a framed reindeer, small white houses and tiny trees beside a plaid curtain.",
   "Drill into studs or use anchors rated for the weight. A woven lid on the tank adds a natural touch."
  ],
  "key": "bath-16",
  "_orig": [
   "Floating shelves are ideal for tiny rooms.",
   "Two rough wooden shelves hold a framed reindeer, small white houses and tiny trees beside a plaid curtain.",
   "Drill into studs or use anchors rated for the weight.",
   "A woven lid on the tank adds a natural touch."
  ]
 },
 {
  "n": 35,
  "title": "Use the Wall Above the Toilet",
  "paras": [
   "The space above the toilet is the best real estate in the room.",
   "A white corner shelf holds red and white trees and houses, while a white branch tree hung with red baubles stands below.",
   "<p><strong>Quick tip:</strong> Hang ornaments on a bare branch for a no-fuss tree.</p>",
   "Use only lightweight pieces. Anything that falls will land on the toilet."
  ],
  "key": "bath-03",
  "_orig": [
   "The space above the toilet is the best real estate in the room.",
   "A white corner shelf holds red and white trees and houses, while a white branch tree hung with red baubles stands below.",
   "Hang ornaments on a bare branch for a no-fuss tree.",
   "Use only lightweight pieces. Anything that falls will land on the toilet."
  ]
 },
 {
  "n": 36,
  "title": "Treat the Tank as a Shelf",
  "paras": [
   "The toilet tank is a surprise shelf. A wooden tray holds a tiny frosted tree, a candle and a small house, with a framed pine print on the wall above.",
   "Choose a tray with a lip so nothing slides off.",
   "Keep it light. The lid still needs to lift."
  ],
  "key": "bath-06",
  "_orig": [
   "The toilet tank is a surprise shelf.",
   "A wooden tray holds a tiny frosted tree, a candle and a small house, with a framed pine print on the wall above.",
   "Choose a tray with a lip so nothing slides off.",
   "Keep it light. The lid still needs to lift."
  ]
 },
 {
  "n": 37,
  "title": "Put a Branch in a Jar",
  "paras": [
   "A single vase can lift a corner.",
   "A jar of berry branches tied with burlap sits on a tray beside the sink, with greenery on top of the cabinet over the toilet. An old pasta sauce jar works. Wrap it in twine.",
   "Cut branches at an angle for longer life."
  ],
  "key": "bath-32",
  "_orig": [
   "A single vase can lift a corner.",
   "A jar of berry branches tied with burlap sits on a tray beside the sink, with greenery on top of the cabinet over the toilet.",
   "An old pasta sauce jar works. Wrap it in twine.",
   "Cut branches at an angle for longer life."
  ]
 },
 {
  "n": 38,
  "title": "Vary the Position",
  "paras": [
   "Variety often comes from moving things around.",
   "A mason jar of pale berries tied with burlap sits on a tray on the counter, below a white cabinet topped with greenery.",
   "<ul><li>Soft pink berries look gentler than red.</li><li>Don't block the cabinet doors.</li></ul>"
  ],
  "key": "bath-43",
  "_orig": [
   "Variety often comes from moving things around.",
   "A mason jar of pale berries tied with burlap sits on a tray on the counter, below a white cabinet topped with greenery.",
   "Soft pink berries look gentler than red.",
   "Don't block the cabinet doors."
  ]
 },
 {
  "n": 39,
  "title": "Use Coat Hooks as a Display",
  "paras": [
   "<p><strong>Hooks are underused decor.</strong> A swag with pinecones and snowflakes hangs from a row of black hooks above a gray towel and a Merry Christmas sign.</p>",
   "<ul><li>Hang it at eye level for the most impact.</li><li>Use screwed-in hooks, not adhesive ones, for anything heavy.</li></ul>"
  ],
  "key": "bath-12",
  "_orig": [
   "Hooks are underused decor.",
   "A swag with pinecones and snowflakes hangs from a row of black hooks above a gray towel and a Merry Christmas sign.",
   "Hang it at eye level for the most impact.",
   "Use screwed-in hooks, not adhesive ones, for anything heavy."
  ]
 },
 {
  "n": 40,
  "title": "Wrap Toilet Paper Like Presents",
  "paras": [
   "The smallest idea might be the best. Three rolls tied with plaid ribbon sit by the mirror and a tree.",
   "Use thin ribbon so the rolls still unspool. Keep spares in a basket."
  ],
  "key": "bath-42",
  "_orig": [
   "The smallest idea might be the best.",
   "Three rolls tied with plaid ribbon sit by the mirror and a tree.",
   "Use thin ribbon so the rolls still unspool.",
   "Keep spares in a basket."
  ]
 },
 {
  "n": 41,
  "title": "Hang a Plaid Curtain",
  "paras": [
   "A shower curtain is a big canvas.",
   "A red plaid curtain hangs from a rod draped with a berry garland, in a white tiled shower beside a striped jute rug.",
   "Clip the garland on, don't thread it, so the rod can still slide.",
   "Choose a liner that matches."
  ],
  "key": "bath-10",
  "_orig": [
   "A shower curtain is a big canvas.",
   "A red plaid curtain hangs from a rod draped with a berry garland, in a white tiled shower beside a striped jute rug.",
   "Clip the garland on, don't thread it, so the rod can still slide.",
   "Choose a liner that matches."
  ]
 },
 {
  "n": 42,
  "title": "Pick a Woodland Print",
  "paras": [
   "<p><strong>Animals and snowflakes feel cozy.</strong> A cream curtain printed with deer, bears and red snowflakes hangs over a tub, with red and green towels, plaid mats and a small wreath on the door.</p>",
   "Match the bath mat to the curtain, not the towels.",
   "Hang the wreath on the dry side of the door, away from steam."
  ],
  "key": "bath-11",
  "_orig": [
   "Animals and snowflakes feel cozy.",
   "A cream curtain printed with deer, bears and red snowflakes hangs over a tub, with red and green towels, plaid mats and a small wreath on the door.",
   "Match the bath mat to the curtain, not the towels.",
   "Hang the wreath on the dry side of the door, away from steam."
  ]
 },
 {
  "n": 43,
  "title": "Hang Pines on the Curtain",
  "paras": [
   "Pines on the curtain bring the forest in.",
   "A white curtain printed with green pines hangs by a vanity with a red sled tray holding candles, trees and a snowman.",
   "<ul><li>A sled makes a fun tray for corralling small items.</li><li>Keep the rest minimal.</li></ul>"
  ],
  "key": "bath-29",
  "_orig": [
   "Pines on the curtain bring the forest in.",
   "A white curtain printed with green pines hangs by a vanity with a red sled tray holding candles, trees and a snowman.",
   "A sled makes a fun tray for corralling small items.",
   "Keep the rest minimal."
  ]
 },
 {
  "n": 44,
  "title": "Turn the Tub Into a Spa",
  "paras": [
   "The tub deserves attention too.",
   "Garland and berries on the wall, candles along the tub edge, a wood caddy and rolled towels tied with red ribbon make this tub look like a retreat.",
   "Use flameless candles. Real flame near a bath is a risk. Add a bath tray to hold a book."
  ],
  "key": "bath-18",
  "_orig": [
   "The tub deserves attention too.",
   "Garland and berries on the wall, candles along the tub edge, a wood caddy and rolled towels tied with red ribbon make this tub look like a retreat.",
   "Use flameless candles. Real flame near a bath is a risk.",
   "Add a bath tray to hold a book."
  ]
 },
 {
  "n": 45,
  "title": "Hang a Tree on the Wall",
  "paras": [
   "A wall tree keeps the floor clear.",
   "A tall carved white tree with red and green baubles hangs above this tub, with a fur rug, embroidered tree towels and a garland.",
   "<p><strong>Quick tip:</strong> Wall decor is the best choice when floor space is tight.</p>",
   "Check the wall material before hanging."
  ],
  "key": "bath-30",
  "_orig": [
   "A wall tree keeps the floor clear.",
   "A tall carved white tree with red and green baubles hangs above this tub, with a fur rug, embroidered tree towels and a garland.",
   "Wall decor is the best choice when floor space is tight.",
   "Check the wall material before hanging."
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
<p>The bathroom is the last room most people decorate for Christmas, which is exactly why it makes such an impression when you do.</p>
<p>A guest washing their hands notices a few festive touches immediately, and a bathroom is small enough that you can finish the whole job in an evening.</p>
<p>It is also the room where decorating goes wrong most often, because of steam, splashes and a counter that has to keep working. So before the 45 ideas, here is how I approach it.</p>
${photo("hero")}

<h2>Five Rules for Decorating a Bathroom</h2>
<p><strong>Choose pieces you can swap out.</strong> Towels, soap dispensers, a wreath on the mirror. Nothing should be permanent, and nothing should fight your fixtures.</p>
<p><strong>Keep the counter usable.</strong> If you can't set down a toothbrush, you have decorated too much.</p>
<p><strong>Respect water and steam.</strong> Faux greenery lasts longer than real, and battery candles beat flames next to a sink or tub.</p>
<p><strong>Repeat one color.</strong> Red, gold or soft white. If the same color shows up three times, the room looks planned.</p>
<p><strong>Work in layers.</strong> Mirror, counter, shelf, floor. One touch at each level looks better than ten on the counter.</p>

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Common Bathroom Mistakes (and Fixes)</h2>
<p><strong>Crowding the counter.</strong> Move half of it to a shelf or the window sill.</p>
<p><strong>Using adhesive hooks for heavy wreaths.</strong> Steam softens the glue. Choose a ribbon loop or a screw-in hook.</p>
<p><strong>Forgetting the floor.</strong> A non-slip Christmas rug does more for the mood than another figurine, and it's safer.</p>
<p><strong>Putting real candles near towels and garland.</strong> Use battery ones and nobody has to worry.</p>
<p>Pick two or three ideas, repeat one color, and save the rest for next year. A small, tidy bathroom always beats a crowded one.</p>
`;

module.exports = { body };
