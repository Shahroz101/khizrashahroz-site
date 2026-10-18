// Body content for "30 Cottagecore Bedroom Ideas With Lace, Florals and
// Vintage Charm". Converted from the Dwelling Dream "30 Cottagecore Bedroom
// Decor Ideas" source: all text rewritten from scratch, ideas reordered and
// retitled (walls and color, then beds, textiles, furniture, finishing
// touches), photos and affiliate product pairs kept with the idea they
// illustrate. Every photo is credited to its Pinterest pin. Ends on text.
// Photos live in images/cottagecore-bedroom-decor-ideas/, product shots in
// images/cottagecore-bedroom-decor-ideas-products/.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "cottagecore-bedroom-decor-ideas";
const PRODUCT_DIR = "cottagecore-bedroom-decor-ideas-products";

const PHOTOS = {
 "bedroom-30": {
  "w": 768,
  "h": 960,
  "pin": "https://www.pinterest.com/pin/563018699911020/",
  "label": "Arched Window Seat With Floral Cushion",
  "alt": "Arched window seat with a sage green cushion in a cozy cottage bedroom"
 },
 "bedroom-03": {
  "w": 735,
  "h": 1105,
  "pin": "https://www.pinterest.com/pin/1133218325021958705/",
  "label": "Lace Curtain and Hydrangeas at the Window",
  "alt": "Ivory lace curtains filtering soft light into a cottagecore bedroom"
 },
 "bedroom-29": {
  "w": 840,
  "h": 1264,
  "pin": "https://www.pinterest.com/pin/868491109387965981/",
  "label": "Matching Floral Curtains and Canopy",
  "alt": "Matching floral curtains and bed canopy in an English cottage-inspired bedroom"
 },
 "bedroom-16": {
  "w": 656,
  "h": 902,
  "pin": "https://www.pinterest.com/pin/1829656094370380/",
  "label": "Red Gingham Curtain and Wildflower Wallpaper",
  "alt": "Red gingham curtains in a cozy cottagecore bedroom window"
 },
 "bedroom-09": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/2040762329577565/",
  "label": "Sage Wall With Botanical Prints",
  "alt": "Sage green bedroom wall hung with a grid of pressed botanical prints"
 },
 "bedroom-20": {
  "w": 1000,
  "h": 1499,
  "pin": "https://www.pinterest.com/pin/336573772174356743/",
  "label": "Forest Green Paneled Wall",
  "alt": "Dark green accent wall in a cozy cottagecore bedroom"
 },
 "bedroom-02": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/667517976056001120/",
  "label": "Dark Floral Wallpaper Behind an Iron Bed",
  "alt": "Cottagecore bedroom with dark moody floral wallpaper behind a black iron bed frame"
 },
 "bedroom-13": {
  "w": 564,
  "h": 987,
  "pin": "https://www.pinterest.com/pin/362610207500535997/",
  "label": "Vintage Floral Mural Behind the Bed",
  "alt": "Dark vintage floral mural on a statement wall in a cottagecore bedroom"
 },
 "bedroom-11": {
  "w": 345,
  "h": 517,
  "pin": "https://www.pinterest.com/pin/1196337403288232/",
  "label": "Shiplap Walls and Ceiling Beams",
  "alt": "Cottagecore bedroom with white shiplap walls and an exposed dark wood ceiling beam"
 },
 "bedroom-04": {
  "w": 683,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/5559199535793298/",
  "label": "Metal Bed With Rumpled White Bedding",
  "alt": "Metal bed frame with rumpled white bedding, a floral pillow and a wooden nightstand beside a bright window"
 },
 "bedroom-26": {
  "w": 720,
  "h": 1280,
  "pin": "https://www.pinterest.com/pin/640637115789141721/",
  "label": "Brass Bed in a Floral Bay Room",
  "alt": "Ornate brass bed frame in a Victorian-style cottagecore bedroom with a garden view"
 },
 "bedroom-07": {
  "w": 1284,
  "h": 1593,
  "pin": "https://www.pinterest.com/pin/62065301110603036/",
  "label": "Four-Poster Bed Draped in Floral Fabric",
  "alt": "Four-poster bed draped in floral fabric with striped curtains in a cottagecore bedroom"
 },
 "bedroom-08": {
  "w": 640,
  "h": 640,
  "pin": "https://www.pinterest.com/pin/89086898874572388/",
  "label": "Sheer Canopy With Fairy Lights and Ivy",
  "alt": "Cottagecore canopy bed draped with sheer fabric and warm fairy lights"
 },
 "bedroom-28": {
  "w": 1168,
  "h": 1752,
  "pin": "https://www.pinterest.com/pin/674132638011273363/",
  "label": "Lace Canopy in an Attic Bedroom",
  "alt": "Sheer lace canopy draped over a bed in an attic cottagecore bedroom"
 },
 "bedroom-12": {
  "w": 425,
  "h": 600,
  "pin": "https://www.pinterest.com/pin/2040762327908004/",
  "label": "Pink Striped Bedding and Stacked Books",
  "alt": "Pink striped bedding with a stack of books in a pastel cottagecore bedroom"
 },
 "bedroom-17": {
  "w": 768,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/761389880756318411/",
  "label": "Crochet Bedspread Under a Garland Canopy",
  "alt": "Crocheted bedspread on a daybed under a white canopy wrapped in an ivy garland with a tea tray on the bed"
 },
 "bedroom-22": {
  "w": 574,
  "h": 960,
  "pin": "https://www.pinterest.com/pin/553309504199153391/",
  "label": "Folded Patchwork Quilts Beside a Fireplace",
  "alt": "Stack of folded vintage patchwork quilts in a cottage-style interior"
 },
 "bedroom-23": {
  "w": 311,
  "h": 415,
  "pin": "https://www.pinterest.com/pin/11822017748907460/",
  "label": "Slipcovered Daybed With Ruffled Ottoman",
  "alt": "Slipcovered daybed with a ruffled ottoman tucked into a cozy cottagecore corner"
 },
 "bedroom-10": {
  "w": 450,
  "h": 450,
  "pin": "https://www.pinterest.com/pin/1055599906237703/",
  "label": "Jute Rug and Reading Corner",
  "alt": "Cozy cottagecore reading nook with a boucle chair and a natural jute rug"
 },
 "bedroom-25": {
  "w": 1345,
  "h": 2174,
  "pin": "https://www.pinterest.com/pin/43980533857489872/",
  "label": "Striped Armchair Beside a Window",
  "alt": "Striped armchair with a block-print pillow and a vase of blossoming branches beside a window"
 },
 "bedroom-14": {
  "w": 1242,
  "h": 1295,
  "pin": "https://www.pinterest.com/pin/481744491393441337/",
  "label": "Steamer Trunk Used as a Nightstand",
  "alt": "Vintage trunk used as a nightstand beside a lamp in a cottagecore bedroom"
 },
 "bedroom-15": {
  "w": 736,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/250794272994670112/",
  "label": "Distressed Chest With a White Pitcher",
  "alt": "Distressed white wood nightstand with a ceramic pitcher in a cottagecore bedroom"
 },
 "bedroom-27": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/774124930380599/",
  "label": "Wicker Nightstand and Gingham Bedding",
  "alt": "Wicker nightstand with a pitcher of yellow flowers beside a bed with blue gingham pillows and a check throw"
 },
 "bedroom-05": {
  "w": 974,
  "h": 1921,
  "pin": "https://www.pinterest.com/pin/844493674430614/",
  "label": "Dark Wood Dresser With a Swing Mirror",
  "alt": "Antique wood dresser with an oval mirror in a cottagecore bedroom"
 },
 "bedroom-21": {
  "w": 1200,
  "h": 2133,
  "pin": "https://www.pinterest.com/pin/247486942016095902/",
  "label": "Wood Vanity With an Arched Gilded Mirror",
  "alt": "Vintage vanity desk with a gilded arched mirror in a cottagecore bedroom"
 },
 "bedroom-24": {
  "w": 2448,
  "h": 3264,
  "pin": "https://www.pinterest.com/pin/296463587943669484/",
  "label": "Antique Washstand With Pitcher and Bowl",
  "alt": "Antique washstand with a ceramic pitcher and bowl styled as cottagecore bedroom decor"
 },
 "bedroom-06": {
  "w": 1600,
  "h": 2400,
  "pin": "https://www.pinterest.com/pin/529595237450332602/",
  "label": "Gallery Wall of Sketches and Landscapes",
  "alt": "Gallery wall of mismatched frames with sketches and landscapes above a small desk with a vase of daisies"
 },
 "bedroom-19": {
  "w": 895,
  "h": 1409,
  "pin": "https://www.pinterest.com/pin/281543723236251/",
  "label": "Frames Filled With Fresh Flowers",
  "alt": "Wall of wooden frames holding small glass bottles filled with fresh daisies, sunflowers and herbs"
 },
 "bedroom-18": {
  "w": 720,
  "h": 1280,
  "pin": "https://www.pinterest.com/pin/836965912046690249/",
  "label": "Dried Flower Arrangement on a Wood Console",
  "alt": "Dried flower bouquet in a white vase on a cottagecore bedroom dresser"
 },
 "bedroom-01": {
  "w": 940,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/130815564171476389/",
  "label": "Straw Hat, Tote and Pressed Botanicals",
  "alt": "Straw hat and woven tote hung beside pressed botanicals in an old window frame, with gingham dresses and a lace-covered table"
 },
 "exterior-a": {
  "w": 561,
  "h": 852,
  "pin": "https://www.pinterest.com/pin/844493673982417/",
  "label": "White Cottage and Flower Garden",
  "alt": "White cottage house with a path winding through an overflowing flower garden"
 },
 "exterior-b": {
  "w": 1200,
  "h": 675,
  "pin": "https://www.pinterest.com/pin/241153755041924260/",
  "label": "Thatched English Cottage",
  "alt": "Thatched-roof English cottage covered in climbing ivy"
 }
};

const PRODUCTS = {
 "bedroom-30": [
  {
   "asin": "B0FTDXBSXD",
   "title": "Custom Window Seat Cushion, Vintage Chinoiserie Floral Chenille",
   "w": 1440,
   "h": 1440
  },
  {
   "asin": "B0H6JGYYM1",
   "title": "FomCuso Custom Window Seat Cushion, Vintage Striped Floral Chenille",
   "w": 1440,
   "h": 1440
  }
 ],
 "bedroom-03": [
  {
   "asin": "B09N41Y9XW",
   "title": "ALIGOGO White Lace Curtains, Vintage Floral Sheer, Scalloped Edges",
   "w": 1001,
   "h": 1001
  },
  {
   "asin": "B0DLFKSKLT",
   "title": "Anmao Vintage Lace Curtains, Semi Sheer Floral Lacy Drapes, Cream Yellow",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-29": [
  {
   "asin": "B0GZKC3JQD",
   "title": "MYUSRE Yellow Floral Curtains, Cottagecore Blackout, 2 Panels",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0DS5S2LQM",
   "title": "Sage Green Vintage Floral Curtains, Cottagecore Farmhouse, 2 Panel Set",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-16": [
  {
   "asin": "B0FQK8HX6B",
   "title": "Softopia Cotton Red Gingham Check 3-Piece Window Curtain Set",
   "w": 1024,
   "h": 1303
  },
  {
   "asin": "B07RGKWLWR",
   "title": "COTTON CRAFT Cafe Kitchen Window Curtain, Tier Curtains with Valance",
   "w": 1500,
   "h": 1374
  }
 ],
 "bedroom-09": [
  {
   "asin": "B0DFW4XNT7",
   "title": "WRFON Framed Sage Green Botanical Wall Art Set of 3, Watercolor Eucalyptus",
   "w": 1477,
   "h": 894
  },
  {
   "asin": "B0F2F17QP4",
   "title": "Wood Framed Sage Green Botanical Wall Art Set of 3, Boho Floral Canvas",
   "w": 1500,
   "h": 1049
  }
 ],
 "bedroom-20": [
  {
   "asin": "B0FW51T5WP",
   "title": "HelloWall Dark Green Forest Wallpaper, Peel and Stick, Moody Botanical",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B075X15KSX",
   "title": "Dixie Belle Chalk Finish Furniture Paint, Evergreen",
   "w": 1094,
   "h": 1500
  }
 ],
 "bedroom-02": [
  {
   "asin": "B0H834VP52",
   "title": "Ismoon Vintage Floral Peel and Stick Wallpaper, Dark Black",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0C6KC3CRQ",
   "title": "Idomural Dark Floral Peel and Stick Wallpaper, Moody Brown Vintage Botanical",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-13": [
  {
   "asin": "B0DJMNTG3Q",
   "title": "Floral Wall Mural, Large Peony Tulip, Antique Grey, Peel and Stick",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0GXHNPDY1",
   "title": "Floral Mural Wallpaper, Peel and Stick, Large Peony Flower",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-11": [
  {
   "asin": "B0CXVYMW13",
   "title": "Indoor/Outdoor Wood Shiplap Paneling, Decorative Wall Panels, Bright White",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B08GGCH24G",
   "title": "Faux Wood Beams, Pack of 2, Light Oak, Polyurethane",
   "w": 990,
   "h": 1500
  }
 ],
 "bedroom-04": [
  {
   "asin": "B0BJBFKMSY",
   "title": "TUSEER Metal Bed Frame Queen with Vintage Headboard, Wrought Iron, White",
   "w": 1500,
   "h": 1440
  },
  {
   "asin": "B0CM3DSBLS",
   "title": "WEEWAY Queen Metal Bed Frame with Wrought Iron-Art Curved Headboard, White",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-26": [
  {
   "asin": "B01IO4C28Q",
   "title": "Safavieh Home Morris Moroccan Antique Gold Bed, Queen",
   "w": 1500,
   "h": 1401
  },
  {
   "asin": "B0CMGVN86D",
   "title": "Yaheetech Queen Metal Bed Frame, Victorian Vintage Headboard, Antique Gold",
   "w": 1000,
   "h": 1000
  }
 ],
 "bedroom-07": [
  {
   "asin": "B09MK682WY",
   "title": "Vintage Floral Curtains, Rustic Cottage Drapes, Country Farmhouse Decor",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0GXVW48CK",
   "title": "Queen Size Wood Canopy Bed Frame, Walnut Vintage Four-Poster",
   "w": 1254,
   "h": 1254
  }
 ],
 "bedroom-08": [
  {
   "asin": "B08C468Q8Y",
   "title": "OctoRose Metal Wall Teester Bed Crown Canopy, Antique Copper",
   "w": 1179,
   "h": 797
  },
  {
   "asin": "B07DW3HZJ7",
   "title": "MZD8391 Curtain String Lights, Warm White Fairy Lights for Bed Canopy",
   "w": 1455,
   "h": 1442
  }
 ],
 "bedroom-28": [
  {
   "asin": "B09VB4J5MM",
   "title": "SFYZ HOME Princess Lace Bed Canopy with Metal Gold Crown",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CLSWWNPT",
   "title": "Warm Home Designs White Lace Canopy Bed Curtains with Tie-Backs",
   "w": 1500,
   "h": 1087
  }
 ],
 "bedroom-12": [
  {
   "asin": "B0DC3PN9V6",
   "title": "VM VOUGEMARKET Pink Flower Stripes Duvet Cover Set, Cottagecore, 100% Cotton",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CC4SY6XR",
   "title": "Floral Print Duvet Cover Queen, Cottage Pink Striped Bedding Set",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-17": [
  {
   "asin": "B07TRL7373",
   "title": "ABREEZE Vintage Cotton Hand Crochet Bedspread, Floral Lace, Queen",
   "w": 1500,
   "h": 1073
  },
  {
   "asin": "B019BL4504",
   "title": "OctoRose 100% Cotton Crochet Pattern Lace Bedspread, Queen, Beige",
   "w": 1009,
   "h": 753
  }
 ],
 "bedroom-22": [
  {
   "asin": "B07QXSNZTY",
   "title": "DECMAY Queen Size Quilt Set, 100% Cotton, Handmade Patchwork",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B07J1F4RDZ",
   "title": "Patchwork Kantha Quilt, Handmade Cotton Bedspread, Reversible Throw",
   "w": 1500,
   "h": 1125
  }
 ],
 "bedroom-23": [
  {
   "asin": "B0CQ2DK1Q1",
   "title": "Nia Twin Size Off White Linen Upholstered Daybed, Tufted Backrest",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0F9FBKB4R",
   "title": "Custom Window Bench Seat Cushion with White Ruffled Skirt",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-10": [
  {
   "asin": "B07FYWNZYY",
   "title": "Superior Hand Woven Natural Fiber Braided Jute Area Rug, 3' x 5'",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B002XWFR4M",
   "title": "SAFAVIEH Natural Fiber Area Rug 8x10, Jute Knotted",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-25": [
  {
   "asin": "B0HJ83KBFZ",
   "title": "Vintage Floral Accent Chair, Upholstered High Back Lounge Armchair",
   "w": 1254,
   "h": 1254
  },
  {
   "asin": "B01MYZD43B",
   "title": "Battilo Cream Ivory Cable Knit Throw Blanket",
   "w": 1500,
   "h": 1071
  }
 ],
 "bedroom-14": [
  {
   "asin": "B0G8JSVFNZ",
   "title": "Vintage Trunk Nightstand with Drawers, Retro Suitcase Bedside Table",
   "w": 1000,
   "h": 1000
  },
  {
   "asin": "B07CJQ4GDD",
   "title": "NauticalMart Leather Wood Trunk, Vintage Style Storage Trunk",
   "w": 1239,
   "h": 593
  }
 ],
 "bedroom-15": [
  {
   "asin": "B0DPFCZRCQ",
   "title": "COZAYH Farmhouse Nightstand with 2 Drawers, Distressed Wood, Burl Finish",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B071GCWXKK",
   "title": "Sullivans Modern Farmhouse Decorative Ceramic Pitcher, Distressed Off-White",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-27": [
  {
   "asin": "B0BR6GJHV8",
   "title": "Modern Wicker Rattan Nightstand with Drawer and Charging Station",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CRKVC9HW",
   "title": "Callales Rattan Nightstand Set of 2, Boho Bedside Table",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-05": [
  {
   "asin": "B0CWLFMVSW",
   "title": "Furniture of America Arabella Traditional Wooden 6-Drawer Dresser with Mirror",
   "w": 1040,
   "h": 1500
  },
  {
   "asin": "B0CGXKWM6K",
   "title": "VanAcc 6-Drawer Farmhouse Dresser with Vintage Grain Texture",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-21": [
  {
   "asin": "B0H45ZKTZK",
   "title": "KT Rolster Vintage Makeup Vanity Desk Set with Mirror and Stool, Walnut",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0BMFCVHYT",
   "title": "AIXI HOME Vintage Gold Vanity Arched Mirror, Ornate Metal Frame",
   "w": 981,
   "h": 1410
  }
 ],
 "bedroom-24": [
  {
   "asin": "B08QXFJCPP",
   "title": "Barnyard Designs 1.5 Quart White Ceramic Pitcher, Vintage Rustic Farmhouse",
   "w": 1476,
   "h": 1500
  },
  {
   "asin": "B0DQ5L44XM",
   "title": "Vintage Enamel Mixing Bowl, Large White Enamel Wash Basin, Farmhouse Retro",
   "w": 1500,
   "h": 1396
  }
 ],
 "bedroom-06": [
  {
   "asin": "B0B6PQDB3Y",
   "title": "ArtbyHannah 9-Piece Botanical Gallery Wall Frame Set, Beige Wood Frames",
   "w": 1500,
   "h": 780
  },
  {
   "asin": "B08LGQZX7W",
   "title": "ArtbyHannah 7-Pack Gold Gallery Wall Picture Frames with Botanical Art Prints",
   "w": 1477,
   "h": 486
  }
 ],
 "bedroom-19": [
  {
   "asin": "B0G62R5DRN",
   "title": "Framed Pressed Flower Art, Large Black Wood Frame, Farmhouse Dried Herbs",
   "w": 1500,
   "h": 1124
  },
  {
   "asin": "B0GZK7Z14L",
   "title": "Glass Pressed Flower Frame, Set of 2, Vintage Distressed Green Wood",
   "w": 1500,
   "h": 1500
  }
 ],
 "bedroom-18": [
  {
   "asin": "B0B9SGT4T1",
   "title": "Natural Dried Flower Bouquet, Boho Pampas Grass and Eucalyptus",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0GZJJ5VLP",
   "title": "Natural Dried Flower Bouquet, 13 Kinds, Rustic Boho Arrangement",
   "w": 1500,
   "h": 1452
  }
 ],
 "bedroom-01": [
  {
   "asin": "B0F5HXMYQP",
   "title": "Women's Straw Sun Hat with Matching Woven Tote Bag",
   "w": 1035,
   "h": 843
  },
  {
   "asin": "B082TPH1CC",
   "title": "Y&ME Rustic Wood Entryway Shelf with 5 Vintage Metal Hooks",
   "w": 1500,
   "h": 1455
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Start With a Window Seat",
  "paras": [
   "A window seat is the quiet, bookish heart of a cottage bedroom.",
   "This one curves into an arched window, with a floral cushion and a few pillows set against a soft sage wall.",
   "Wicker trunks at the foot of the bed hold spare blankets and add another layer of texture.",
   "No built-in alcove? A slim bench under the window with a well-fitted cushion gets you most of the way there."
  ],
  "key": "bedroom-30"
 },
 {
  "n": 2,
  "title": "Let Lace Curtains Soften the Light",
  "paras": [
   "Lace is the easiest way to make a bedroom feel gentler.",
   "The curtain in this room is stirred by the breeze and throws a pattern of light across the floor, while a scrap of lace is draped over a small wooden side table.",
   "A single vase of hydrangeas on the sill finishes the picture.",
   "Choose cream or ivory instead of stark white and the room will read warm, not fussy."
  ],
  "key": "bedroom-03"
 },
 {
  "n": 3,
  "title": "Carry One Floral Print From Window to Bed",
  "paras": [
   "If you love pattern but fear a patchwork mess, repeat a single floral.",
   "Here the same small botanical print covers the curtains, the ruffled canopy and the bedspread, so the room feels designed rather than collected.",
   "A white side table with a pitcher of fresh flowers gives the eye somewhere calm to rest.",
   "Look for a print with some scale to it, because tiny ditsy flowers vanish when they are spread over big pieces."
  ],
  "key": "bedroom-29"
 },
 {
  "n": 4,
  "title": "Hang Red Gingham at the Window",
  "paras": [
   "Gingham is the friendliest pattern in the cottage playbook.",
   "A red check curtain with a gathered, ruffled top looks cheerful against pale wallpaper dotted with tiny wildflowers and ferns.",
   "The small pine dresser and gilded painting nearby keep the whole corner feeling like a farmhouse kitchen moved upstairs.",
   "Cafe-length or full-length, it works either way."
  ],
  "key": "bedroom-16"
 },
 {
  "n": 5,
  "title": "Paint the Walls Sage and Hang Botanical Prints",
  "paras": [
   "Sage green does a lot of work without shouting.",
   "In this bedroom it backs a light wood bed dressed in white linen and terracotta pillows, with three framed botanical prints hung above it.",
   "The window keeps the room bright, so the green feels fresh rather than heavy.",
   "Pick prints with a little warm color in them, like rust leaves, to echo the pillows."
  ],
  "key": "bedroom-09"
 },
 {
  "n": 6,
  "title": "Go Deep Forest Green",
  "paras": [
   "For a more nocturnal take, paint the wall behind the bed a dark, mossy green.",
   "Vertical board paneling adds shadow and detail here, and a wooden headboard, matching nightstand and a small brass-based lamp keep the mood warm.",
   "Bedding in the same family as the wall makes the whole corner feel tucked in.",
   "Add a woven basket and a stem of dried grass and it looks like a forest cabin."
  ],
  "key": "bedroom-20"
 },
 {
  "n": 7,
  "title": "Try Moody Florals on One Wall",
  "paras": [
   "Dark florals turn a bedroom into an old English hideaway.",
   "Rose-covered wallpaper on a deep green ground rises behind a black iron bed, with emerald velvet bedding, a salmon-pink pillow and a chunky crochet throw layered on top.",
   "A lantern and a wall light give off candle-style glow.",
   "Keep the print to one wall or an alcove so the drama stays contained, and peel-and-stick makes it easy for renters."
  ],
  "key": "bedroom-02"
 },
 {
  "n": 8,
  "title": "Make a Wall-Sized Floral Mural",
  "paras": [
   "A mural is wallpaper with a flair for the dramatic.",
   "This one spreads an old-master style bouquet of dahlias, tulips and hydrangeas across a black ground, right above a simple wooden bed with white linen and a knit blanket.",
   "Because the artwork does all the talking, the rest of the room can stay plain, with a couple of potted ferns at the foot of the bed.",
   "Choose the scale carefully: big blooms feel painterly, small ones just feel busy."
  ],
  "key": "bedroom-13"
 },
 {
  "n": 9,
  "title": "Add Shiplap and a Wood Beam",
  "paras": [
   "Architecture can do the cottage work before a single pillow arrives.",
   "White shiplap walls and rustic ceiling beams frame a black metal bed, plaid cushions and a cream throw in this room.",
   "A framed winter landscape and a sconce-style reading light keep it from feeling stark.",
   "If you cannot build in beams, lightweight faux ones and peel-and-stick planks create the same effect without touching the structure."
  ],
  "key": "bedroom-11"
 },
 {
  "n": 10,
  "title": "Choose an Iron Bed Frame",
  "paras": [
   "A curved metal bed frame is classic cottage furniture.",
   "Here it is dressed in rumpled white bedding with one floral pillow, a wooden nightstand with little drawers, and an apricot-and-cream bouquet by the window.",
   "The slim frame keeps the room airy, which matters in a small space.",
   "Leave the bedding a bit wrinkled on purpose. It looks more welcoming that way."
  ],
  "key": "bedroom-04"
 },
 {
  "n": 11,
  "title": "Go Brass and Victorian",
  "paras": [
   "If iron feels too plain, a brass bed frame brings a little old-house romance.",
   "This one sits in a bay of tall windows, surrounded by rose wallpaper, a floral quilt and a worn rug in rich reds.",
   "Fresh red flowers on the sill pick up the pattern around them.",
   "It is a bold, layered look, so give yourself permission to mix prints and let a few of them clash."
  ],
  "key": "bedroom-26"
 },
 {
  "n": 12,
  "title": "Build a Four-Poster With Fabric",
  "paras": [
   "You do not need a carved bed to get the canopy look.",
   "A fabric ceiling and floral side drapes turn this bed into a little room within the room, with striped curtains and a matching striped bed skirt below.",
   "An open book on the duvet suggests nobody is in a hurry.",
   "Rod-mounted curtains on a simple frame give you the same enclosed feeling at a much lower price."
  ],
  "key": "bedroom-07"
 },
 {
  "n": 13,
  "title": "Wrap the Bed in Sheer Fabric and Fairy Lights",
  "paras": [
   "Sheer drapes and tiny lights are pure bedtime magic.",
   "Gauzy fabric gathers over this bed in soft swags, with ivy trailing through the folds and a string of warm lights glowing along the edge.",
   "Add a crown or a ceiling hook, hang the fabric, then wind the lights loosely so they look gathered by hand.",
   "Warm white bulbs only. Cool white would spoil the mood."
  ],
  "key": "bedroom-08"
 },
 {
  "n": 14,
  "title": "Hang Crochet Lace Overhead in an Attic Room",
  "paras": [
   "Sloped attic ceilings are made for cottagecore.",
   "In this tiny room, whitewashed rafters, a doily-style lace canopy and frilly window curtains surround a bed piled with mismatched, faded patterned linens.",
   "A wooden chair with an embroidered cushion and a patterned rug add to the thrifted feel.",
   "Do not worry about matching. The charm here comes from everything being slightly worn."
  ],
  "key": "bedroom-28"
 },
 {
  "n": 15,
  "title": "Mix Pink Stripes With a Stack of Books",
  "paras": [
   "Soft pink stripes feel like a summer afternoon.",
   "This bed pairs a rose-and-cream striped duvet with a wooden frame, a plant in a pot and a tall stack of well-read books on the end.",
   "A cube bookshelf by the pillows, a pinned-up picture and a trailing vine complete the student-garret feeling.",
   "Cotton bedding with a washed texture keeps it casual."
  ],
  "key": "bedroom-12"
 },
 {
  "n": 16,
  "title": "Spread a Crocheted Bedspread Over It All",
  "paras": [
   "A crocheted coverlet is heirloom decor you can actually use.",
   "The one in this corner has a diamond lattice with amber lines and sits under a mix of sage, mustard and blush cushions, with a tea tray resting right on the bed.",
   "A white mosquito-net canopy wrapped in a leafy, light-strung garland and a gallery of small frames above complete the nook.",
   "Vintage shops and online sellers both carry them, usually for less than you would expect."
  ],
  "key": "bedroom-17"
 },
 {
  "n": 17,
  "title": "Pile Up Patchwork Quilts",
  "paras": [
   "Folded quilts are decor that keeps you warm.",
   "In this crowded, colorful room they stack up in a woven basket next to a fireplace, a fringed ottoman and a table set with a mismatched tea service.",
   "Pastel squares, floral prints and faded stripes sit comfortably together.",
   "Stack them with the prettiest edges showing, and swap them with the seasons."
  ],
  "key": "bedroom-22"
 },
 {
  "n": 18,
  "title": "Tuck in a Slipcovered Daybed",
  "paras": [
   "A slipcovered daybed gives a bedroom a spare sofa.",
   "This one has a relaxed, wrinkled cover and a skirted ottoman in front, set under a leaded window with two glowing wall lights.",
   "Frames and little pictures climb the wall above, and the whole nook looks made for afternoon naps.",
   "A ruffle at the bottom is all it takes to soften a plain bench or ottoman."
  ],
  "key": "bedroom-23"
 },
 {
  "n": 19,
  "title": "Ground the Room With a Jute Rug and Reading Nook",
  "paras": [
   "A big natural-fiber rug is the foundation of a cozy room.",
   "Here a chunky jute rug stretches under a white bed, with a woven leather bench at the foot and a round bouclé chair in the corner by a side table and lamp.",
   "The textures are all natural, so nothing fights for attention.",
   "Pick a rug large enough that at least the front legs of the bed and chair sit on it."
  ],
  "key": "bedroom-10"
 },
 {
  "n": 20,
  "title": "Give the Corner an Armchair",
  "paras": [
   "Every bedroom has a corner that needs a reason to exist.",
   "A striped armchair with a block-print pillow and a knit throw sits by the window here, with a vase of blossoming branches on a slim brass side table.",
   "A pale rug underfoot keeps the whole corner light.",
   "Choose a quiet stripe if the room already has plenty of pattern."
  ],
  "key": "bedroom-25"
 },
 {
  "n": 21,
  "title": "Use a Vintage Trunk as a Bedside Table",
  "paras": [
   "A trunk is storage and a nightstand in one.",
   "This leather-strapped steamer trunk sits beside the bed holding a lamp, a few books and a reed diffuser, with a large framed print leaning behind.",
   "A cowhide rug on the floor adds a rustic touch.",
   "Open it up and you have a place to hide spare linens."
  ],
  "key": "bedroom-14"
 },
 {
  "n": 22,
  "title": "Pair a Weathered Nightstand With a Ceramic Pitcher",
  "paras": [
   "Worn paint tells a story that new furniture cannot.",
   "The chest of drawers beside this bed has a soft, distressed finish, and it holds a cream pitcher full of white blossoms, a mug and a small plant.",
   "More leafy plants and a basket sit around it, as if the garden has come inside.",
   "If your furniture is too shiny, light sanding and a wax finish can age it quickly."
  ],
  "key": "bedroom-15"
 },
 {
  "n": 23,
  "title": "Choose a Wicker Nightstand",
  "paras": [
   "Wicker brings a breezy, seaside-cottage feel.",
   "This small bedside table has a woven shelf and a drawer, topped with a white pitcher of golden wildflowers and a mug.",
   "The bed beside it is layered in white linen with blue gingham cushions and a check throw.",
   "Natural fibers like rattan pair well with blue and white."
  ],
  "key": "bedroom-27"
 },
 {
  "n": 24,
  "title": "Find an Antique Dresser With an Oval Mirror",
  "paras": [
   "A dresser with a tilting oval mirror is a classic for a reason.",
   "This dark-wood chest has rows of brass-handled drawers, with a small swing mirror, a candlestick and a cluster of old photographs on top.",
   "Against a dusky gray wall and heavy curtains, it feels like a family heirloom.",
   "Antique shops, estate sales and online marketplaces are where to hunt."
  ],
  "key": "bedroom-05"
 },
 {
  "n": 25,
  "title": "Set Up a Vanity With a Gilded Mirror",
  "paras": [
   "Give yourself a little corner for getting ready.",
   "A wooden writing-style desk with carved legs and a bentwood chair sits under a tall arched mirror edged in gold, with a vase of white lilies in front.",
   "The pale blue wall lets the warm wood glow.",
   "Keep the surface clear except for a few pretty glass jars."
  ],
  "key": "bedroom-21"
 },
 {
  "n": 26,
  "title": "Style a Washstand With a Pitcher and Bowl",
  "paras": [
   "Before bathrooms were attached, a washstand sat in the bedroom.",
   "This oak one has a towel bar, brass pulls, a white ceramic pitcher and a wide bowl, with a vintage portrait hanging above.",
   "It feels like a museum corner, but it is easy to recreate with a thrifted cabinet.",
   "Use the bowl to hold soap, hair clips or pretty stones."
  ],
  "key": "bedroom-24"
 },
 {
  "n": 27,
  "title": "Gather a Mismatched Gallery Wall",
  "paras": [
   "Hang pictures like they were collected, not matched.",
   "This wall mixes pencil sketches, a botanical leaf study, a countryside landscape and a seaside scene in wood and dark frames, above a small desk with a vase of daisies.",
   "Frames in different sizes feel casual, while a shared soft color palette keeps it cohesive.",
   "Lay them on the floor first and rearrange until it looks right."
  ],
  "key": "bedroom-06"
 },
 {
  "n": 28,
  "title": "Turn Empty Frames Into Flower Holders",
  "paras": [
   "Here is a playful way to hang flowers on the wall.",
   "Old wooden frames hold little glass bottles and vials, each one filled with fresh daisies, sunflowers or herbs, so the wall looks like a living still life.",
   "Swap the stems with the season.",
   "If you want something that lasts longer, framed pressed flowers give you the same botanical feeling without the watering."
  ],
  "key": "bedroom-19"
 },
 {
  "n": 29,
  "title": "Keep Dried Flowers in a Big Vase",
  "paras": [
   "Dried flowers never need watering, which makes them the lazy gardener's best friend.",
   "A big, chalky white vase holds an armful of rust-colored blooms and twiggy stems on a fluted wooden console.",
   "The arrangement stays interesting all year, from autumn to deep winter.",
   "Group stems by height and let a few branches stick out for a natural shape."
  ],
  "key": "bedroom-18"
 },
 {
  "n": 30,
  "title": "Hang a Straw Hat and Woven Tote by the Door",
  "paras": [
   "The easiest idea on the list is also one of the most charming.",
   "Here a straw hat and a market tote hang from hooks beside a framed set of pressed botanicals in an old window frame, with gingham dresses on a rail and a lace-covered table and lamp nearby.",
   "It makes everyday belongings part of the decor.",
   "Mount hooks at different heights so things overlap a little instead of lining up in a row."
  ],
  "key": "bedroom-01"
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
<p>Some bedrooms make you exhale the moment you walk in.</p>
<p>Think lace stirring at an open window, a quilt that has clearly been loved, and a jar of garden flowers on the nightstand.</p>
<p>That is cottagecore: soft, a little worn, and happily unbothered by anything sleek.</p>
<p>The secret is that it should look gathered over time, not bought in one weekend. Florals can sit next to gingham, a flea-market dresser can share a room with new bedding, and nothing needs to match perfectly.</p>
<p>These 30 ideas run from big moves, like an iron bed or a window seat, down to small touches, like a hat on a hook. Borrow a few and leave the rest.</p>
${photo("exterior-a")}

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>How to Keep It Lived-In, Not Costumey</h2>
<p>Thirty ideas is plenty, and no room needs all of them.</p>
<p>The bedrooms that feel truly cottagecore usually lean on five or six, added slowly.</p>
<p>Pick one anchor first &mdash; a bed frame, a wallpaper or a big quilt &mdash; then build around it with texture: a rug, something crocheted, a few framed flowers, and real blooms whenever you can.</p>
${photo("exterior-b")}
<p>Let the room look a little undone. Stacked books, a throw tossed over a chair and flowers that are not perfectly arranged are what separate a home from a showroom.</p>
<p>Start small, add pieces as you find them, and let the room grow into itself.</p>
`;

module.exports = { body };
