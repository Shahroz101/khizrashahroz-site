// Body content for "58 DIY Mudroom Ideas for Wet Boots, Backpacks and Real Life". Converted from the Dwelling Dream source in the
// advice-led voice (see memory advice-led-article-voice): all text new, ideas
// regrouped by theme. Photos credited to their Pinterest pins. Ends on text.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "diy-mudroom-ideas";
const PRODUCT_DIR = "diy-mudroom-ideas-products";

const PHOTOS = {
 "mr-01": {
  "w": 1707,
  "h": 2560,
  "pin": "https://www.pinterest.com/pin/706502260341730529/",
  "label": "Skip the Bench and Hang a Peg Rail",
  "alt": "A beadboard hallway wall with a white peg rail, a camel coat and an evergreen wreath"
 },
 "mr-03": {
  "w": 493,
  "h": 740,
  "pin": "https://www.pinterest.com/pin/217439488255504449/",
  "label": "Let Pegs Carry More Than You Expect",
  "alt": "Blue beadboard wainscot with black pegs, framed botanical prints and an antique spindle bench"
 },
 "mr-02": {
  "w": 687,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/1122522275921787306/",
  "label": "Space Your Hooks Six to Eight Inches Apart",
  "alt": "Five black hooks under a white bracket shelf holding a parka, scarf and two backpacks"
 },
 "mr-04": {
  "w": 768,
  "h": 1408,
  "pin": "https://www.pinterest.com/pin/328551735339294605/",
  "label": "Choose One Metal for Every Hook",
  "alt": "Cream beadboard with brass hooks, a striped cushion bench, boots and a wire basket"
 },
 "mr-05": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/273453008620239994/",
  "label": "Run One Long Rail Across the Whole Wall",
  "alt": "A cream beadboard wall with a long hook rail and a bench holding five woven baskets"
 },
 "mr-12": {
  "w": 687,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/1122522275921762578/",
  "label": "Fit a Mudroom Into a Four-Foot Corner",
  "alt": "A small corner mudroom nook with a hook rail, jackets and an open wood bench"
 },
 "mr-50": {
  "w": 575,
  "h": 862,
  "pin": "https://www.pinterest.com/pin/4591419904694548544/",
  "label": "Hang Kids' Hooks at Kid Height",
  "alt": "A white board and batten mudroom with a kid backpack and jackets, a dark bench and boots"
 },
 "mr-47": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/17521886048302970/",
  "label": "Frame the Kids' Art Above the Hooks",
  "alt": "A hook rail under framed kids artwork with coats, a cushioned bench and rubber boots below"
 },
 "mr-14": {
  "w": 736,
  "h": 1311,
  "pin": "https://www.pinterest.com/pin/765612005445795344/",
  "label": "Put a Shelf Over the Hooks",
  "alt": "A corner mudroom with a bracket shelf of baskets, hooks, a round straw bag and a wood bench"
 },
 "mr-15": {
  "w": 600,
  "h": 750,
  "pin": "https://www.pinterest.com/pin/576320083591493600/",
  "label": "Build a Thick Shelf for a Custom Look",
  "alt": "A blue vertical board wall with a thick wood shelf over eight hooks and a basket bench"
 },
 "mr-16": {
  "w": 736,
  "h": 1101,
  "pin": "https://www.pinterest.com/pin/4605212214348075584/",
  "label": "Put Heavy Baskets Low and Light Ones High",
  "alt": "A white vertical plank wall with a wood shelf of baskets over hooks and a wood bench with baskets"
 },
 "mr-07": {
  "w": 720,
  "h": 900,
  "pin": "https://www.pinterest.com/pin/306948530876378639/",
  "label": "Save Floor Space With a Short Wall Bench",
  "alt": "A white wainscot mudroom with a short wall bench, hooks and rain boots on the floor"
 },
 "mr-08": {
  "w": 735,
  "h": 946,
  "pin": "https://www.pinterest.com/pin/140806233900193/",
  "label": "Hang a Mirror by the Door",
  "alt": "A wood-framed mirror above a hook rail with a cushioned bench and shoe cubbies below"
 },
 "mr-09": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/1141099625191386028/",
  "label": "Give Every Pair of Shoes a Cubby",
  "alt": "A shoe cubby bench with eight open slots, black hooks, a tan leather tote and baskets on a shelf above"
 },
 "mr-10": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/3377768467757558/",
  "label": "Warm a Cold Entry With Stained Wood",
  "alt": "A rustic stained wood bench with four woven baskets, plaid pillows and two felt hats on hooks"
 },
 "mr-11": {
  "w": 936,
  "h": 1165,
  "pin": "https://www.pinterest.com/pin/712202128601382343/",
  "label": "Run Boards Vertically to Lift the Ceiling",
  "alt": "A vertical plank wall with black hooks, a straw tote and a long bench with four baskets"
 },
 "mr-13": {
  "w": 736,
  "h": 981,
  "pin": "https://www.pinterest.com/pin/2955555998454815/",
  "label": "Float the Bench to Keep the Floor Clear",
  "alt": "A floating walnut bench under a white board and batten wall"
 },
 "mr-17": {
  "w": 1080,
  "h": 1388,
  "pin": "https://www.pinterest.com/pin/1093319247082965895/",
  "label": "Put Storage on One Side of a Narrow Hall",
  "alt": "A narrow hallway mudroom with a long hook rail and a cushioned bench with open cubbies"
 },
 "mr-26": {
  "w": 896,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/4292562141520784/",
  "label": "Pair a Cushioned Bench With a Welcome Mat",
  "alt": "A white built-in with a cubby shelf, hooks, a striped cushion bench and a WELCOME mat"
 },
 "mr-27": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/1083326885367725651/",
  "label": "Pair a Dark Bench With a Light Wall",
  "alt": "A white beadboard nook with three baskets on a cubby shelf, hooks and a dark wood bench"
 },
 "mr-21": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/1016617315912210417/",
  "label": "Tuck Open Cubbies Over the Hooks",
  "alt": "A navy cushioned bench with five baskets under open wood cubbies and hooks"
 },
 "mr-20": {
  "w": 720,
  "h": 900,
  "pin": "https://www.pinterest.com/pin/581034789471077562/",
  "label": "Hide the Overflow in a Tall Cabinet",
  "alt": "A cube storage bench with a gray cushion, baskets and a tall white cabinet beside a hook wall"
 },
 "mr-18": {
  "w": 736,
  "h": 1311,
  "pin": "https://www.pinterest.com/pin/451274825186656455/",
  "label": "Anchor a Light Room With Dark Wood Up High",
  "alt": "A dark wood shelf with baskets over hooks and a white bench with plaid and leather pillows"
 },
 "mr-19": {
  "w": 1122,
  "h": 1402,
  "pin": "https://www.pinterest.com/pin/468233692533390673/",
  "label": "Design the Cubby Around the Shoes You Own",
  "alt": "A white coastal mudroom locker with basket cubbies, hooks and sandal storage beside a beach door"
 },
 "mr-22": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/326018460549576315/",
  "label": "Put Decor on Top and Gear on Hooks",
  "alt": "A white mudroom locker with HOME letters on top, six hooks and a butcher block bench with four baskets"
 },
 "mr-23": {
  "w": 778,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/913878949400505786/",
  "label": "Choose Drawers Over Open Cubbies to Hide Mess",
  "alt": "A sage green mudroom built-in with a wood bench seat, two drawers and tall cabinet doors"
 },
 "mr-24": {
  "w": 564,
  "h": 1005,
  "pin": "https://www.pinterest.com/pin/375698793937821942/",
  "label": "Label Every Hook",
  "alt": "A gray built-in mudroom with labeled hooks, a basket shelf, a tall cabinet and patterned tile"
 },
 "mr-25": {
  "w": 704,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/797348309071714812/",
  "label": "Put Shoe Shelves at Shoe Height",
  "alt": "A gray built-in mudroom with shoe shelves, hooks, a teal backpack and bench drawers"
 },
 "mr-28": {
  "w": 832,
  "h": 1248,
  "pin": "https://www.pinterest.com/pin/858850591505936601/",
  "label": "Plan a Place for the Umbrella",
  "alt": "A greige mudroom built-in with a cushioned bench, shoe cubbies, drawers and a tall umbrella pot"
 },
 "mr-29": {
  "w": 736,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/4608238052857128512/",
  "label": "Use Tall Cabinets for Off-Season Gear",
  "alt": "A cream mudroom built-in with tall cabinets, a cushioned bench with drawers and rubber boots"
 },
 "mr-30": {
  "w": 1792,
  "h": 2400,
  "pin": "https://www.pinterest.com/pin/1126885138055973749/",
  "label": "Match the Baskets and the Room Looks Calm",
  "alt": "A cream and sage green mudroom built-in with matching baskets, hooks, bench drawers and tall cabinets"
 },
 "mr-45": {
  "w": 1366,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/4606971444459820096/",
  "label": "Add Warmth With Herringbone Wood",
  "alt": "A herringbone wood paneled mudroom niche with white upper cabinets, a bench and four baskets"
 },
 "mr-46": {
  "w": 768,
  "h": 1408,
  "pin": "https://www.pinterest.com/pin/4925880839745996/",
  "label": "Choose Taupe to Hide Daily Marks",
  "alt": "A taupe mudroom built-in with a shelf, hook rail, cushioned bench with four baskets and a lantern pendant"
 },
 "mr-44": {
  "w": 896,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/1008032329114368385/",
  "label": "Use Navy Shiplap to Make White Cabinets Pop",
  "alt": "Navy shiplap with brass hooks, white cabinets, leather pillows and labeled baskets under a white bench"
 },
 "mr-42": {
  "w": 1080,
  "h": 1920,
  "pin": "https://www.pinterest.com/pin/1144336586609650197/",
  "label": "Choose Olive Green Over White",
  "alt": "Olive green beadboard with hooks, jackets, a walnut bench and upper cabinets with brass knobs"
 },
 "mr-31": {
  "w": 768,
  "h": 1408,
  "pin": "https://www.pinterest.com/pin/156077943333476332/",
  "label": "Number Your Lockers to Settle Who Owns What",
  "alt": "Blue-gray metal lockers with brass numbers one through four, shiplap walls and a wood bench"
 },
 "mr-32": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/380835712260295707/",
  "label": "Choose Vented Doors for Wet Gear",
  "alt": "Pale green vintage metal lockers beside a straw hat on a hook and rubber boots on a bench"
 },
 "mr-33": {
  "w": 1365,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/211174977719644/",
  "label": "Seal the Concrete in a Garage Mudroom",
  "alt": "Blue-gray built-in lockers in a garage with baskets on top and a striped rug"
 },
 "mr-34": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/451274825186218164/",
  "label": "Use a Light Backing Behind Dark Lockers",
  "alt": "Rustic wood lockers under a WELCOME HOME sign with a lantern pendant and slate floor"
 },
 "mr-36": {
  "w": 736,
  "h": 1312,
  "pin": "https://www.pinterest.com/pin/1115696507718840274/",
  "label": "Add Brass Knobs to Metal Lockers",
  "alt": "Sage green louvered lockers with brass knobs, trailing vines and a brick floor"
 },
 "mr-38": {
  "w": 768,
  "h": 1408,
  "pin": "https://www.pinterest.com/pin/328551735339294605/",
  "label": "Label the Room as Well as the Baskets",
  "alt": "Vintage green and gray metal lockers under a MUDROOM sign with stacked cushions and market totes"
 },
 "mr-37": {
  "w": 1070,
  "h": 1600,
  "pin": "https://www.pinterest.com/pin/136304326216900892/",
  "label": "Use Butcher Block for a Bench That Takes Boots",
  "alt": "White lockers with a butcher block bench, a net bag of oranges and a brick floor"
 },
 "mr-35": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/30540103720874843/",
  "label": "Hide the Mess Behind a Barn Door",
  "alt": "White sliding barn doors with X braces open to a mudroom bench with wire baskets"
 },
 "mr-57": {
  "w": 832,
  "h": 1248,
  "pin": "https://www.pinterest.com/pin/281615782944562338/",
  "label": "Turn a Closet Into a Mudroom With a Door",
  "alt": "A blue sliding barn door open on a shiplap closet bench with hooks and two baskets"
 },
 "mr-43": {
  "w": 959,
  "h": 1471,
  "pin": "https://www.pinterest.com/pin/191825265375355492/",
  "label": "Turn a Closet Into a Moody Niche",
  "alt": "A navy closet-style mudroom niche with two shelves, a lamp, brass hooks and a wood bench"
 },
 "mr-06": {
  "w": 564,
  "h": 753,
  "pin": "https://www.pinterest.com/pin/249598004342248098/",
  "label": "Match the Door to the Wall",
  "alt": "A teal green wainscot mudroom with a matching dutch door and a bench with two baskets"
 },
 "mr-39": {
  "w": 736,
  "h": 1312,
  "pin": "https://www.pinterest.com/pin/429671620721243435/",
  "label": "Warm a White Wall With Butcher Block",
  "alt": "A mudroom with a thick butcher block bench, vertical board wall, bracket shelf with hooks and a houndstooth jacket"
 },
 "mr-40": {
  "w": 1536,
  "h": 2304,
  "pin": "https://www.pinterest.com/pin/334673816076422259/",
  "label": "Paint the Ceiling, Too",
  "alt": "A blue beadboard mudroom with a four-drawer bench and a whitewashed plank ceiling"
 },
 "mr-41": {
  "w": 1024,
  "h": 1536,
  "pin": "https://www.pinterest.com/pin/4606338089229201984/",
  "label": "Use Patterned Tile to Plan a Small Entry",
  "alt": "Light blue beadboard wainscot with five black hooks, a wood bench and patterned blue tile"
 },
 "mr-58": {
  "w": 1024,
  "h": 1536,
  "pin": "https://www.pinterest.com/pin/36310340745373275/",
  "label": "End the Room With a Window or a Door",
  "alt": "A sage green mudroom built-in with a wood bench, baskets, herringbone tile and a glass door"
 },
 "mr-48": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/775885842083764630/",
  "label": "Give the Dog a Spot, Too",
  "alt": "A white board and batten mudroom with a dog lying on the bench and baskets underneath"
 },
 "mr-52": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/4610700948677682752/",
  "label": "Hang the Leash by the Door",
  "alt": "A white mudroom built-in with a leash on a hook, a basket bench and a dog resting nearby"
 },
 "mr-51": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/4595642046557927488/",
  "label": "Use Pegboard for a Custom Wall on a Budget",
  "alt": "A gray pegboard wall with wire baskets holding shoes, hooks, a shelf and a three-basket bench"
 },
 "mr-49": {
  "w": 1600,
  "h": 1600,
  "pin": "https://www.pinterest.com/pin/4591912482261770304/",
  "label": "Choose a Freestanding Unit for a DIY Mudroom",
  "alt": "A freestanding white locker with a walnut top and drawers in a garage beside a brick step"
 },
 "mr-53": {
  "w": 1024,
  "h": 1536,
  "pin": "https://www.pinterest.com/pin/4598456805114697792/",
  "label": "Turn Hooks Into a Command Center",
  "alt": "A framed cork board labeled Center above a hook rail, a basket shelf and a shoe bench"
 },
 "mr-54": {
  "w": 832,
  "h": 1248,
  "pin": "https://www.pinterest.com/pin/9851692935243208/",
  "label": "Go Vertical When the Floor Is Small",
  "alt": "A tall narrow white shoe rack standing between a bench and a glass door"
 },
 "mr-55": {
  "w": 736,
  "h": 1312,
  "pin": "https://www.pinterest.com/pin/396316835982961760/",
  "label": "Choose Shoe Cubbies Under the Bench Over a Rack",
  "alt": "A wood paneled built-in with open shelving, hooks, a bench with shoe cubbies and a snake plant"
 },
 "mr-56": {
  "w": 832,
  "h": 1248,
  "pin": "https://www.pinterest.com/pin/216876538303204865/",
  "label": "Slide a Metal Rack Into the Bench",
  "alt": "A white bench with three levels of black metal shoe racks under a hook rail and shelf"
 },
 "hero": {
  "w": 1122,
  "h": 1402,
  "pin": "https://www.pinterest.com/pin/468233692533390673/",
  "label": "Design the Cubby Around the Shoes You Own",
  "alt": "A white coastal mudroom locker with basket cubbies, hooks and sandal storage beside a beach door"
 }
};

const PRODUCTS = {
 "mr-01": [
  {
   "asin": "B00F2W13HA",
   "title": "White Maple Shaker Peg Rack",
   "w": 1313,
   "h": 172
  },
  {
   "asin": "B0FJ2C5W19",
   "title": "Washable Runner Rug, 2x8",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-03": [
  {
   "asin": "B01J0EVU5K",
   "title": "36-Inch Shaker Peg Rack",
   "w": 1500,
   "h": 246
  },
  {
   "asin": "B08B1J3LS4",
   "title": "Distressed 8x10 Picture Frames, 6-Pack",
   "w": 1491,
   "h": 1500
  }
 ],
 "mr-02": [
  {
   "asin": "B0CY3M5Q2K",
   "title": "Black Double Coat Hooks, 6-Pack",
   "w": 1449,
   "h": 1500
  },
  {
   "asin": "B0CPCKC71D",
   "title": "Jute and Cotton Runner Rug, 2x6",
   "w": 1165,
   "h": 1500
  }
 ],
 "mr-04": [
  {
   "asin": "B08VHWRJ4J",
   "title": "Vintage Double Prong Coat Hooks, 6-Pack",
   "w": 1462,
   "h": 1432
  },
  {
   "asin": "B0HFMMYQ7P",
   "title": "Non-Slip Bench Cushion, 48 x 20 Inch",
   "w": 1500,
   "h": 1336
  }
 ],
 "mr-05": [
  {
   "asin": "B07QLN33SR",
   "title": "Wall Hook Rail with 6 Double Hooks",
   "w": 1500,
   "h": 914
  },
  {
   "asin": "B07JMLJ7GM",
   "title": "Nesting Water Hyacinth Baskets, Set of 3",
   "w": 1456,
   "h": 673
  }
 ],
 "mr-12": [
  {
   "asin": "B07QLN33SR",
   "title": "Wall Hook Rail with 6 Double Hooks",
   "w": 1500,
   "h": 914
  },
  {
   "asin": "B0FG27ZJ9T",
   "title": "Water Hyacinth Cube Baskets, Set of 3",
   "w": 1500,
   "h": 1485
  }
 ],
 "mr-50": [
  {
   "asin": "B0CY3M5Q2K",
   "title": "Black Double Coat Hooks, 6-Pack",
   "w": 1449,
   "h": 1500
  },
  {
   "asin": "B0CF5M6F1H",
   "title": "Wicker Storage Baskets with Liners, 3-Pack",
   "w": 1500,
   "h": 1457
  }
 ],
 "mr-47": [
  {
   "asin": "B09PTTWJ7Z",
   "title": "Black 8x10 Wood Picture Frames, 6-Pack",
   "w": 1482,
   "h": 1500
  },
  {
   "asin": "B07QLN33SR",
   "title": "Wall Hook Rail with 6 Double Hooks",
   "w": 1500,
   "h": 914
  }
 ],
 "mr-14": [
  {
   "asin": "B0CDP68NTS",
   "title": "36-Inch Oak Floating Shelves, Set of 2",
   "w": 1254,
   "h": 1252
  },
  {
   "asin": "B08VHWRJ4J",
   "title": "Vintage Double Prong Coat Hooks, 6-Pack",
   "w": 1462,
   "h": 1432
  }
 ],
 "mr-15": [
  {
   "asin": "B0C77X8B4T",
   "title": "36-Inch Walnut Floating Shelves, Set of 2",
   "w": 1500,
   "h": 1206
  },
  {
   "asin": "B0B3M1LJW9",
   "title": "Large Handmade Straw Tote Bag",
   "w": 965,
   "h": 1500
  }
 ],
 "mr-16": [
  {
   "asin": "B0H36NPXC8",
   "title": "Solid Wood Floating Shelves, 36 Inch",
   "w": 1500,
   "h": 1344
  },
  {
   "asin": "B07JMLJ7GM",
   "title": "Nesting Water Hyacinth Baskets, Set of 3",
   "w": 1456,
   "h": 673
  }
 ],
 "mr-07": [
  {
   "asin": "B0CY3M5Q2K",
   "title": "Black Double Coat Hooks, 6-Pack",
   "w": 1449,
   "h": 1500
  },
  {
   "asin": "B0D83MMJTJ",
   "title": "Heavy-Duty Rubber Boot Tray",
   "w": 1414,
   "h": 1075
  }
 ],
 "mr-08": [
  {
   "asin": "B07GRDKL3S",
   "title": "30 x 40 Rustic Wood Framed Mirror",
   "w": 856,
   "h": 1500
  },
  {
   "asin": "B0CY3M5Q2K",
   "title": "Black Double Coat Hooks, 6-Pack",
   "w": 1449,
   "h": 1500
  }
 ],
 "mr-09": [
  {
   "asin": "B0FG27ZJ9T",
   "title": "Water Hyacinth Cube Baskets, Set of 3",
   "w": 1500,
   "h": 1485
  },
  {
   "asin": "B08KXV2FDX",
   "title": "Braided Jute Runner Rug, 2x6",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-10": [
  {
   "asin": "B0CF5M6F1H",
   "title": "Wicker Storage Baskets with Liners, 3-Pack",
   "w": 1500,
   "h": 1457
  },
  {
   "asin": "B0BGY2NJV3",
   "title": "Farmhouse Linen Pillow Covers, 4-Pack",
   "w": 1500,
   "h": 1492
  }
 ],
 "mr-11": [
  {
   "asin": "B0D5MMV3WQ",
   "title": "Woven Straw Tote with Leather Handles",
   "w": 1182,
   "h": 1500
  },
  {
   "asin": "B0GDXCMH8P",
   "title": "Vintage Pattern Washable Runner, 2x8",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-13": [
  {
   "asin": "B0H28DR9WM",
   "title": "6 ft Birch Butcher Block Countertop",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0GCHWJBML",
   "title": "Board and Batten Wall Panel Kit",
   "w": 1500,
   "h": 1468
  }
 ],
 "mr-17": [
  {
   "asin": "B0H8P8KGKV",
   "title": "Indoor Bench Seat Cushion, 48 x 15 Inch",
   "w": 997,
   "h": 826
  },
  {
   "asin": "B0GYWWNB9D",
   "title": "Beige Washable Runner Rug, 2x8",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-26": [
  {
   "asin": "B0DPNF4XBG",
   "title": "Non-Slip Coir Doormat, 17x30",
   "w": 1495,
   "h": 1335
  },
  {
   "asin": "B09MFMRZJH",
   "title": "Metal Umbrella Stand",
   "w": 557,
   "h": 1500
  }
 ],
 "mr-27": [
  {
   "asin": "B07JMLJ7GM",
   "title": "Nesting Water Hyacinth Baskets, Set of 3",
   "w": 1456,
   "h": 673
  },
  {
   "asin": "B08VHWRJ4J",
   "title": "Vintage Double Prong Coat Hooks, 6-Pack",
   "w": 1462,
   "h": 1432
  }
 ],
 "mr-21": [
  {
   "asin": "B0GJS2TBTQ",
   "title": "Seagrass Storage Baskets with Handles, Set of 3",
   "w": 1500,
   "h": 1021
  },
  {
   "asin": "B0H8P8KGKV",
   "title": "Indoor Bench Seat Cushion, 48 x 15 Inch",
   "w": 997,
   "h": 826
  }
 ],
 "mr-20": [
  {
   "asin": "B07M684ZJD",
   "title": "4-Cube Storage Organizer",
   "w": 1357,
   "h": 1500
  },
  {
   "asin": "B0FG27ZJ9T",
   "title": "Water Hyacinth Cube Baskets, Set of 3",
   "w": 1500,
   "h": 1485
  }
 ],
 "mr-18": [
  {
   "asin": "B0DBPFH621",
   "title": "Neutral Linen Pillow Covers, 18x18, 4-Pack",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0D5MMV3WQ",
   "title": "Woven Straw Tote with Leather Handles",
   "w": 1182,
   "h": 1500
  }
 ],
 "mr-19": [
  {
   "asin": "B01JIHYN6C",
   "title": "Woven Storage Baskets with Handles, Set of 3",
   "w": 783,
   "h": 838
  },
  {
   "asin": "B00BLIQ2VQ",
   "title": "Natural Jute Runner Rug, 2x6",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-22": [
  {
   "asin": "B0BZVT9JPX",
   "title": "Hanging Wood Welcome Sign",
   "w": 1244,
   "h": 1167
  },
  {
   "asin": "B0FG27ZJ9T",
   "title": "Water Hyacinth Cube Baskets, Set of 3",
   "w": 1500,
   "h": 1485
  }
 ],
 "mr-23": [
  {
   "asin": "B09BL12QNF",
   "title": "Black T-Bar Cabinet Pulls, 10-Pack",
   "w": 1493,
   "h": 1367
  },
  {
   "asin": "B0BY8X5GFY",
   "title": "Faux Pothos Hanging Vines, 2-Pack",
   "w": 1487,
   "h": 1454
  }
 ],
 "mr-24": [
  {
   "asin": "B08CDTWLVQ",
   "title": "Hanging Chalkboard Basket Tags, 15-Pack",
   "w": 341,
   "h": 355
  },
  {
   "asin": "B0CF5M6F1H",
   "title": "Wicker Storage Baskets with Liners, 3-Pack",
   "w": 1500,
   "h": 1457
  }
 ],
 "mr-25": [
  {
   "asin": "B0C3R76MWB",
   "title": "3-Tier Bamboo Shoe Rack",
   "w": 1416,
   "h": 1500
  },
  {
   "asin": "B01JIHYN6C",
   "title": "Woven Storage Baskets with Handles, Set of 3",
   "w": 783,
   "h": 838
  }
 ],
 "mr-28": [
  {
   "asin": "B07SHHS7Y4",
   "title": "Umbrella Stand with Drip Tray",
   "w": 1237,
   "h": 1500
  },
  {
   "asin": "B0HFMMYQ7P",
   "title": "Non-Slip Bench Cushion, 48 x 20 Inch",
   "w": 1500,
   "h": 1336
  }
 ],
 "mr-29": [
  {
   "asin": "B09BL12QNF",
   "title": "Black T-Bar Cabinet Pulls, 10-Pack",
   "w": 1493,
   "h": 1367
  },
  {
   "asin": "B0D83MMJTJ",
   "title": "Heavy-Duty Rubber Boot Tray",
   "w": 1414,
   "h": 1075
  }
 ],
 "mr-30": [
  {
   "asin": "B0FG27ZJ9T",
   "title": "Water Hyacinth Cube Baskets, Set of 3",
   "w": 1500,
   "h": 1485
  },
  {
   "asin": "B0CY3M5Q2K",
   "title": "Black Double Coat Hooks, 6-Pack",
   "w": 1449,
   "h": 1500
  }
 ],
 "mr-45": [
  {
   "asin": "B0CY3M5Q2K",
   "title": "Black Double Coat Hooks, 6-Pack",
   "w": 1449,
   "h": 1500
  },
  {
   "asin": "B09BL12QNF",
   "title": "Black T-Bar Cabinet Pulls, 10-Pack",
   "w": 1493,
   "h": 1367
  }
 ],
 "mr-46": [
  {
   "asin": "B0863HSDN3",
   "title": "Industrial Semi-Flush Mount Light",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0DBPFH621",
   "title": "Neutral Linen Pillow Covers, 18x18, 4-Pack",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-44": [
  {
   "asin": "B08CDTWLVQ",
   "title": "Hanging Chalkboard Basket Tags, 15-Pack",
   "w": 341,
   "h": 355
  },
  {
   "asin": "B0829R4J3J",
   "title": "Natural Coir Welcome Doormat",
   "w": 1500,
   "h": 1111
  }
 ],
 "mr-42": [
  {
   "asin": "B08VHWRJ4J",
   "title": "Vintage Double Prong Coat Hooks, 6-Pack",
   "w": 1462,
   "h": 1432
  },
  {
   "asin": "B0H28DR9WM",
   "title": "6 ft Birch Butcher Block Countertop",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-31": [
  {
   "asin": "B09MFMRZJH",
   "title": "Metal Umbrella Stand",
   "w": 557,
   "h": 1500
  },
  {
   "asin": "B00BLIQ2VQ",
   "title": "Natural Jute Runner Rug, 2x6",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-32": [
  {
   "asin": "B07QLN33SR",
   "title": "Wall Hook Rail with 6 Double Hooks",
   "w": 1500,
   "h": 914
  },
  {
   "asin": "B0D1V5W37M",
   "title": "Extra-Large Rubber Boot Tray, 48 Inch",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-33": [
  {
   "asin": "B0D83MMJTJ",
   "title": "Heavy-Duty Rubber Boot Tray",
   "w": 1414,
   "h": 1075
  },
  {
   "asin": "B0FJ2C5W19",
   "title": "Washable Runner Rug, 2x8",
   "w": 1500,
   "h": 1500
  }
 ],
 "mr-34": [
  {
   "asin": "B0BZVT9JPX",
   "title": "Hanging Wood Welcome Sign",
   "w": 1244,
   "h": 1167
  },
  {
   "asin": "B07GRDKL3S",
   "title": "30 x 40 Rustic Wood Framed Mirror",
   "w": 856,
   "h": 1500
  }
 ],
 "mr-36": [
  {
   "asin": "B0BN83QPPM",
   "title": "Brushed Brass Cabinet Knobs, 10-Pack",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0BY8X5GFY",
   "title": "Faux Pothos Hanging Vines, 2-Pack",
   "w": 1487,
   "h": 1454
  }
 ],
 "mr-38": [
  {
   "asin": "B08JLH6KKQ",
   "title": "Rustic Wooden Welcome Sign",
   "w": 1431,
   "h": 1116
  },
  {
   "asin": "B01JIHYN6C",
   "title": "Woven Storage Baskets with Handles, Set of 3",
   "w": 783,
   "h": 838
  }
 ],
 "mr-37": [
  {
   "asin": "B0H28DR9WM",
   "title": "6 ft Birch Butcher Block Countertop",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0B3M1LJW9",
   "title": "Large Handmade Straw Tote Bag",
   "w": 965,
   "h": 1500
  }
 ],
 "mr-35": [
  {
   "asin": "B07KBHM7HK",
   "title": "6 ft Sliding Barn Door Hardware Kit",
   "w": 1143,
   "h": 1173
  },
  {
   "asin": "B01KC98EQ0",
   "title": "6 ft Black Barn Door Track Kit",
   "w": 1000,
   "h": 1000
  }
 ],
 "mr-57": [
  {
   "asin": "B0CYSFCM38",
   "title": "Low-Clearance Barn Door Track Kit with Handles",
   "w": 1500,
   "h": 1336
  },
  {
   "asin": "B0HFMMYQ7P",
   "title": "Non-Slip Bench Cushion, 48 x 20 Inch",
   "w": 1500,
   "h": 1336
  }
 ],
 "mr-43": [
  {
   "asin": "B0C77X8B4T",
   "title": "36-Inch Walnut Floating Shelves, Set of 2",
   "w": 1500,
   "h": 1206
  },
  {
   "asin": "B0BWMWH9CQ",
   "title": "Black Semi-Flush Mount Ceiling Light",
   "w": 481,
   "h": 768
  }
 ],
 "mr-06": [
  {
   "asin": "B087PLMTKP",
   "title": "Seagrass Belly Basket",
   "w": 897,
   "h": 1500
  },
  {
   "asin": "B01J0EVU5K",
   "title": "36-Inch Shaker Peg Rack",
   "w": 1500,
   "h": 246
  }
 ],
 "mr-39": [
  {
   "asin": "B0GH7MV47B",
   "title": "Paintable Board and Batten Panels",
   "w": 1125,
   "h": 1500
  },
  {
   "asin": "B0HFMMYQ7P",
   "title": "Non-Slip Bench Cushion, 48 x 20 Inch",
   "w": 1500,
   "h": 1336
  }
 ],
 "mr-40": [
  {
   "asin": "B0BY8GXLY9",
   "title": "Brass Semi-Flush Mount Ceiling Light",
   "w": 1131,
   "h": 1500
  },
  {
   "asin": "B09BL12QNF",
   "title": "Black T-Bar Cabinet Pulls, 10-Pack",
   "w": 1493,
   "h": 1367
  }
 ],
 "mr-41": [
  {
   "asin": "B0GH7MV47B",
   "title": "Paintable Board and Batten Panels",
   "w": 1125,
   "h": 1500
  },
  {
   "asin": "B07JMLJ7GM",
   "title": "Nesting Water Hyacinth Baskets, Set of 3",
   "w": 1456,
   "h": 673
  }
 ],
 "mr-58": [
  {
   "asin": "B0CPCKC71D",
   "title": "Jute and Cotton Runner Rug, 2x6",
   "w": 1165,
   "h": 1500
  },
  {
   "asin": "B0CWLHKK2Y",
   "title": "Artificial Ivy Garland, 3-Pack",
   "w": 1302,
   "h": 1407
  }
 ],
 "mr-48": [
  {
   "asin": "B07JMLJ7GM",
   "title": "Nesting Water Hyacinth Baskets, Set of 3",
   "w": 1456,
   "h": 673
  },
  {
   "asin": "B0D83MMJTJ",
   "title": "Heavy-Duty Rubber Boot Tray",
   "w": 1414,
   "h": 1075
  }
 ],
 "mr-52": [
  {
   "asin": "B0DKXSGVCZ",
   "title": "Wall-Mount Dog Leash Holder with Shelf",
   "w": 1500,
   "h": 1415
  },
  {
   "asin": "B0FG27ZJ9T",
   "title": "Water Hyacinth Cube Baskets, Set of 3",
   "w": 1500,
   "h": 1485
  }
 ],
 "mr-51": [
  {
   "asin": "B071W3RP78",
   "title": "Metal Pegboard Wall Organizer, 48 x 36 Inch",
   "w": 1500,
   "h": 1375
  },
  {
   "asin": "B01J7ZAHL0",
   "title": "Pegboard Wire Basket, Small",
   "w": 1500,
   "h": 1001
  }
 ],
 "mr-49": [
  {
   "asin": "B09BL12QNF",
   "title": "Black T-Bar Cabinet Pulls, 10-Pack",
   "w": 1493,
   "h": 1367
  },
  {
   "asin": "B0H46Z1L45",
   "title": "Black Metal Umbrella Stand",
   "w": 831,
   "h": 1458
  }
 ],
 "mr-53": [
  {
   "asin": "B0CTZHHWBJ",
   "title": "Wood Framed Cork Board, 24 x 36 Inch",
   "w": 1500,
   "h": 1234
  },
  {
   "asin": "B0CMHTX3G7",
   "title": "Wall Key and Mail Organizer with Chalkboard",
   "w": 1483,
   "h": 1500
  }
 ],
 "mr-54": [
  {
   "asin": "B0GZHS5C98",
   "title": "Tall Narrow 10-Tier Shoe Rack",
   "w": 431,
   "h": 1500
  },
  {
   "asin": "B0D12JMDLM",
   "title": "10-Tier Skinny Shoe Rack",
   "w": 439,
   "h": 1458
  }
 ],
 "mr-55": [
  {
   "asin": "B0C3R76MWB",
   "title": "3-Tier Bamboo Shoe Rack",
   "w": 1416,
   "h": 1500
  },
  {
   "asin": "B01JIHYN6C",
   "title": "Woven Storage Baskets with Handles, Set of 3",
   "w": 783,
   "h": 838
  }
 ],
 "mr-56": [
  {
   "asin": "B0C3R76MWB",
   "title": "3-Tier Bamboo Shoe Rack",
   "w": 1416,
   "h": 1500
  },
  {
   "asin": "B0H8P8KGKV",
   "title": "Indoor Bench Seat Cushion, 48 x 15 Inch",
   "w": 997,
   "h": 826
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Skip the Bench and Hang a Peg Rail",
  "paras": [
   "No room for a bench? A rail of pegs still turns a hallway into a drop zone.",
   "White pegs run along the top of this beadboard, with a camel coat and an evergreen wreath hanging side by side, and a plaid runner below to catch drips.",
   "Mount the rail around 60 inches from the floor for adults, and screw it into studs. A rail held by drywall anchors alone will pull away the first time someone yanks a heavy coat.",
   "A washable runner is the cheapest floor protection you can buy. Toss it in the machine when the winter mud arrives."
  ],
  "key": "mr-01"
 },
 {
  "n": 2,
  "title": "Let Pegs Carry More Than You Expect",
  "paras": [
   "<p><strong>Pegs look delicate, but a good Shaker rail holds a surprising amount.</strong> Black pegs sit on blue beadboard wainscot here, under a row of framed botanical prints, with an antique bench and baskets beside it.</p>",
   "Hang one item per peg and the wall stays tidy. Two coats on one peg is how a neat rail turns into a pile.",
   "Pair the pegs with frames above them and the entry feels like part of the house, not a dumping ground."
  ],
  "key": "mr-03"
 },
 {
  "n": 3,
  "title": "Space Your Hooks Six to Eight Inches Apart",
  "paras": [
   "Hooks placed too close together are the quiet reason coats end up on the floor.",
   "Five black hooks sit under a white bracket shelf here, each carrying one thing: a green parka, a cream scarf, a rust backpack and a gray one.",
   "<ul><li>Six inches is the minimum for jackets. Go eight if your family wears puffy coats.</li><li>Put the shelf about a foot above the hooks, so there is room to reach a hat or bag without knocking the shelf.</li></ul>"
  ],
  "key": "mr-02"
 },
 {
  "n": 4,
  "title": "Choose One Metal for Every Hook",
  "paras": [
   "Mixed metals in a small space look like an accident. One finish looks planned.",
   "Brass hooks run across cream beadboard here, with a striped cushion on the bench and boots below, and sunlight warming the metal.",
   "Check the finish of your door hardware and light fixtures first, then match the hooks to whichever is most visible. A wire basket under the bench catches boots and lets water drip through, so the floor stays drier."
  ],
  "key": "mr-04"
 },
 {
  "n": 5,
  "title": "Run One Long Rail Across the Whole Wall",
  "paras": [
   "One long rail looks calmer than a handful of short ones.",
   "A single dark hook rail stretches the full width of this cream beadboard wall, with coats, a navy tote and a cap hanging evenly and a bench with five baskets below.",
   "<p><strong>Quick tip:</strong> A single long board is easier to mount level, and the line of hooks makes the wall read as one piece.</p>",
   "Match the rail's length to the bench below it, and the whole wall looks built-in."
  ],
  "key": "mr-05"
 },
 {
  "n": 6,
  "title": "Fit a Mudroom Into a Four-Foot Corner",
  "paras": [
   "A mudroom can be as small as a coat rack and a place to sit. A corner by the door holds a short hook rail with a blue jacket, a green backpack and a coat, with an open wood bench and a bin of shoes underneath.",
   "Four feet is enough for three or four hooks and a bench seat around 15 inches deep.",
   "Use the space under the bench for a bin per person. It keeps shoes from spilling out into the room."
  ],
  "key": "mr-12"
 },
 {
  "n": 7,
  "title": "Hang Kids' Hooks at Kid Height",
  "paras": [
   "If a child can reach the hook, the backpack gets hung. If not, it lands on the floor.",
   "A red backpack and bright jackets hang from low hooks on a board-and-batten wall here, with a dark bench and a row of boots below. Mount kid hooks around 42 to 48 inches for younger children, and raise them as they grow.",
   "Give each child their own hook and their own color, so nobody has to ask whose coat is whose."
  ],
  "key": "mr-50"
 },
 {
  "n": 8,
  "title": "Frame the Kids' Art Above the Hooks",
  "paras": [
   "The wall above the hooks is wasted space until you give it a job.",
   "A long hook rail sits under a gallery of framed children's art in bright colors here, with coats below, a cushioned bench and rubber boots underneath.",
   "<ul><li>Use matching frames, so the art feels like a collection and the colors do the talking.</li><li>Swap the art every month. It gives kids something to be proud of on the way out the door.</li></ul>"
  ],
  "key": "mr-47"
 },
 {
  "n": 9,
  "title": "Put a Shelf Over the Hooks",
  "paras": [
   "<p><strong>A shelf above the hooks doubles your storage without using any floor.</strong> A bracket shelf here holds baskets for hats and gloves, above a row of hooks with a round straw bag, with a wood bench under a bright window.</p>",
   "<ul><li>Mount it high enough to clear a hung coat, usually 14 to 18 inches above the hooks.</li><li>Use baskets with lids or liners to keep the shelf from looking busy.</li></ul>"
  ],
  "key": "mr-14"
 },
 {
  "n": 10,
  "title": "Build a Thick Shelf for a Custom Look",
  "paras": [
   "A chunky shelf is what separates built-ins from a store-bought look. A thick wood shelf sits over eight hooks on a wall of blue vertical boards here, with a basket bench and cushions below and a plant on the shelf.",
   "Cut a 2x10 or 2x12 to the width you need, sand it and stain it. It's an afternoon project. Make sure the brackets are rated for the load, and screw into studs, not drywall."
  ],
  "key": "mr-15"
 },
 {
  "n": 11,
  "title": "Put Heavy Baskets Low and Light Ones High",
  "paras": [
   "What goes in a basket decides where it should sit.",
   "A wood shelf of baskets sits over hooks here on white plank walls, with a wood bench with baskets below.",
   "Keep boots, sports gear and anything heavy on the bottom. Hats, mittens and scarves go up top.",
   "Pick baskets of the same family so the shelf looks tidy even when it is full."
  ],
  "key": "mr-16"
 },
 {
  "n": 12,
  "title": "Save Floor Space With a Short Wall Bench",
  "paras": [
   "<p><strong>A bench doesn't have to run the length of the room.</strong> A short bench is tucked against the wall under a window here, with hooks above it and a pair of boots on the floor.</p>",
   "Choose a bench about 15 inches deep. That's enough to sit on without eating into the walkway.",
   "Keep one boot tray by the door so wet shoes have an obvious home."
  ],
  "key": "mr-07"
 },
 {
  "n": 13,
  "title": "Hang a Mirror by the Door",
  "paras": [
   "A mirror makes the room look bigger and saves you a trip back upstairs.",
   "A wood-framed mirror hangs above a hook rail here, with navy jackets, a cushioned bench with cubbies and a leather bag.",
   "<ul><li>Hang it so the middle sits around 60 inches from the floor, which suits most heights.</li><li>A mirror also bounces light around, which helps a small mudroom with one window.</li></ul>"
  ],
  "key": "mr-08"
 },
 {
  "n": 14,
  "title": "Give Every Pair of Shoes a Cubby",
  "paras": [
   "One cubby per pair is the easiest rule for a clean entry.",
   "Eight open slots under a wood bench seat hold boots and shoes here, with black hooks above, a tan leather tote and baskets up high.",
   "Make cubbies about 12 inches wide and 12 inches high for most adult shoes. Taller ones fit boots. Pick one slot per family member and leave extras for guests."
  ],
  "key": "mr-09"
 },
 {
  "n": 15,
  "title": "Warm a Cold Entry With Stained Wood",
  "paras": [
   "A stained wood bench makes a cold room feel lived in.",
   "A rustic stained bench sits against a pale wall here, with four woven baskets under it, plaid and linen pillows on top and two felt hats on hooks above.",
   "<p><strong>Quick tip:</strong> Use pillows in a few patterns that share a color, so the bench looks collected.</p>",
   "Seal the wood with a clear coat, so wet boots won't mark it."
  ],
  "key": "mr-10"
 },
 {
  "n": 16,
  "title": "Run Boards Vertically to Lift the Ceiling",
  "paras": [
   "Vertical lines draw the eye up, which makes a low ceiling feel higher. Vertical planks cover this wall, with black hooks, a woven straw tote and a long bench with four baskets underneath.",
   "Paint the boards a light color, and carry it up to the ceiling.",
   "Choose a plank width of around 6 inches. Narrow boards look busy, and wide ones look heavy."
  ],
  "key": "mr-11"
 },
 {
  "n": 17,
  "title": "Float the Bench to Keep the Floor Clear",
  "paras": [
   "A floating bench lets you sweep and mop under it.",
   "A walnut bench floats under a white board and batten wall here, with a patterned cushion at one end. Screw the bench into studs with heavy-duty brackets, and test it with your full weight.",
   "Leave a gap of at least 12 inches below, so you can park wet boots out of the way."
  ],
  "key": "mr-13"
 },
 {
  "n": 18,
  "title": "Put Storage on One Side of a Narrow Hall",
  "paras": [
   "In a tight hallway, put everything on one wall and leave the other clear.",
   "A long hook rail sits above a cushioned bench with open cubbies here, and a blue patterned runner leads to the door.",
   "<ul><li>Keep the bench depth to 14 or 15 inches, so there is still room to walk by.</li><li>Add a runner to guide the eye and protect the floor.</li></ul>"
  ],
  "key": "mr-17"
 },
 {
  "n": 19,
  "title": "Pair a Cushioned Bench With a Welcome Mat",
  "paras": [
   "<p><strong>Comfort at the door is a small thing that people notice right away.</strong> A striped cushion tops a bench with baskets here, with a cubby shelf and hooks above and a WELCOME mat on tile floor.</p>",
   "<ul><li>Pick a cushion with a non-slip backing, so it stays put.</li><li>Choose a coir mat. It scrapes mud off the soles before it reaches the floor.</li></ul>"
  ],
  "key": "mr-26"
 },
 {
  "n": 20,
  "title": "Pair a Dark Bench With a Light Wall",
  "paras": [
   "Contrast is a good way to ground a pale room. A dark wood bench sits in front of white beadboard here, with three baskets on the shelf above and a felt hat and a plaid jacket on the hooks.",
   "Dark wood hides scuffs, and the white wall keeps the small space bright. Repeat the dark tone in a hook or a frame, so it doesn't sit alone."
  ],
  "key": "mr-27"
 },
 {
  "n": 21,
  "title": "Tuck Open Cubbies Over the Hooks",
  "paras": [
   "Open cubbies keep the things you need within reach and out of sight.",
   "Open wood cubbies hold baskets and boxes above a row of hooks on a gray-blue wall here, with a navy cushioned bench and five baskets below.",
   "Label or color-code baskets so each person finds theirs.",
   "Keep the top cubbies for things you use rarely, and the lower ones for daily items."
  ],
  "key": "mr-21"
 },
 {
  "n": 22,
  "title": "Hide the Overflow in a Tall Cabinet",
  "paras": [
   "<p><strong>A closed cabinet gives you somewhere to put what you don't want to see.</strong> A tall white cabinet stands next to a hook wall here, with a cube storage bench, a gray cushion and baskets, and a shelf with seasonal decor.</p>",
   "Use the cabinet for umbrellas, sports gear and bags, and keep daily items on hooks.",
   "A cube organizer under a cushion makes a quick bench for a few dollars."
  ],
  "key": "mr-20"
 },
 {
  "n": 23,
  "title": "Anchor a Light Room With Dark Wood Up High",
  "paras": [
   "A dark shelf overhead gives a white room some weight.",
   "A dark wood shelf holds baskets above hooks here, with a white bench below, plaid and leather pillows and a bag on the floor.",
   "<ul><li>Match the shelf's tone to the pillows below it, so the color travels.</li><li>Keep the shelf stocked with real baskets and not just decor. Otherwise it's just another surface to dust.</li></ul>"
  ],
  "key": "mr-18"
 },
 {
  "n": 24,
  "title": "Design the Cubby Around the Shoes You Own",
  "paras": [
   "A good cubby fits what you actually wear, not what a catalog suggests.",
   "A white locker unit here has basket cubbies on top, hooks in the middle and open slots at the bottom for sandals, beside a beach door.",
   "Line up your shoes on the floor and measure the tallest pair before you build. Add a bench seat in between, so you can sit to put your shoes on."
  ],
  "key": "mr-19"
 },
 {
  "n": 25,
  "title": "Put Decor on Top and Gear on Hooks",
  "paras": [
   "Treat the top of a locker as a display and the hooks as the workhorse.",
   "HOME letters and a plant sit on top of a white locker here, with six hooks below, a denim jacket and a pink bag, and a butcher block bench over baskets.",
   "<p><strong>Quick tip:</strong> Keep decor to two or three items. More than that and the unit looks cluttered.</p>",
   "Choose baskets that fit snugly under the bench, so they slide in and out easily."
  ],
  "key": "mr-22"
 },
 {
  "n": 26,
  "title": "Choose Drawers Over Open Cubbies to Hide Mess",
  "paras": [
   "A drawer closes on mess in a second. A cubby can't. A sage green built-in has a wood bench seat over two drawers and tall cabinet doors here, with a leafy plant beside it.",
   "Use drawers for gloves, hats and small bags, and cabinets for bulkier gear.",
   "Add T-bar pulls so little hands can open them."
  ],
  "key": "mr-23"
 },
 {
  "n": 27,
  "title": "Label Every Hook",
  "paras": [
   "A label turns a hook into a home.",
   "A gray built-in has labeled hooks, a basket shelf, a tall cabinet and blue patterned tile here. Use chalkboard tags so you can change them when the family changes.",
   "Start with names and move to categories, such as sports, work or dog, once you know how you use it."
  ],
  "key": "mr-24"
 },
 {
  "n": 28,
  "title": "Put Shoe Shelves at Shoe Height",
  "paras": [
   "Shoes belong at floor height, where you can see them.",
   "A gray built-in here has open shoe shelves at the bottom, a teal backpack on a hook and baskets on top.",
   "<ul><li>Slope the shelves slightly, so muddy shoes can drip.</li><li>Keep at least one shelf for each family member, and add a basket for extras.</li></ul>"
  ],
  "key": "mr-25"
 },
 {
  "n": 29,
  "title": "Plan a Place for the Umbrella",
  "paras": [
   "<p><strong>Wet umbrellas need a home with a tray, or they leave puddles.</strong> A greige built-in has a cushioned bench, shoe cubbies and drawers here, with an umbrella standing in the corner.</p>",
   "<ul><li>Choose a stand with a drip tray. It protects the floor and is easy to empty.</li><li>Place it near the door so you reach it before you step outside.</li></ul>"
  ],
  "key": "mr-28"
 },
 {
  "n": 30,
  "title": "Use Tall Cabinets for Off-Season Gear",
  "paras": [
   "Don't leave winter boots out in July. A cream built-in has tall cabinets, a cushioned bench with drawers and rubber boots on a tray here.",
   "Put current-season items at eye level and rotate the rest into the upper cabinets. Choose a boot tray with a raised edge to hold melting snow."
  ],
  "key": "mr-29"
 },
 {
  "n": 31,
  "title": "Match the Baskets and the Room Looks Calm",
  "paras": [
   "Matching baskets are the quickest way to quiet a busy shelf.",
   "A cream and sage green built-in has matching baskets, hooks, drawers and tall cabinets here.",
   "Buy a set of the same size and weave, so the shelf reads as a single piece.",
   "Add liners so small items don't poke through the weave."
  ],
  "key": "mr-30"
 },
 {
  "n": 32,
  "title": "Add Warmth With Herringbone Wood",
  "paras": [
   "<p><strong>Wood paneling adds warmth without a drop of paint.</strong> A herringbone wood panel sits behind the hooks in this niche here, with white upper cabinets, a bench and four baskets, on patterned tile.</p>",
   "Cut the panels at a 45-degree angle, and use a nail gun and construction adhesive.",
   "Seal the wood, since hooks and wet coats will mark an unfinished surface."
  ],
  "key": "mr-45"
 },
 {
  "n": 33,
  "title": "Choose Taupe to Hide Daily Marks",
  "paras": [
   "A mid-tone wall forgives scuffs that white never would.",
   "A taupe built-in has a shelf, a hook rail, a bench with a dark cushion and four baskets here, with a lantern light and a patterned rug.",
   "<ul><li>Use a satin or semi-gloss finish so you can wipe it clean.</li><li>Pick a rug with a pattern, since it hides dirt in the weave.</li></ul>"
  ],
  "key": "mr-46"
 },
 {
  "n": 34,
  "title": "Use Navy Shiplap to Make White Cabinets Pop",
  "paras": [
   "A deep wall color makes white trim look crisp.",
   "Navy shiplap sits behind brass hooks here, with white cabinets above, leather pillows and labeled baskets under the bench.",
   "Use a washable paint. A satin finish is easy to clean. Brass hooks add warmth against the navy."
  ],
  "key": "mr-44"
 },
 {
  "n": 35,
  "title": "Choose Olive Green Over White",
  "paras": [
   "A deep green hides dirt that white shows right away.",
   "An olive green beadboard wall holds hooks and jackets here, above a walnut bench, with upper cabinets and brass knobs.",
   "<p><strong>Quick tip:</strong> Wainscoting that is painted a mid-to-dark color needs less touch-up.</p>",
   "Add a woven mat to catch mud at the door."
  ],
  "key": "mr-42"
 },
 {
  "n": 36,
  "title": "Number Your Lockers to Settle Who Owns What",
  "paras": [
   "Assigned lockers save arguments. Blue-gray metal lockers with brass numbers one through four stand against a shiplap wall here, with a wood bench and umbrellas.",
   "Give each person a number and a hook. Number stickers or brass numbers both work.",
   "Leave one locker for guests."
  ],
  "key": "mr-31"
 },
 {
  "n": 37,
  "title": "Choose Vented Doors for Wet Gear",
  "paras": [
   "Vents let damp gear dry instead of getting musty.",
   "Pale green vintage metal lockers stand here beside a straw hat on a hook, with rubber boots on a bench. Keep wet coats on hooks inside, not stuffed in a corner.",
   "Wipe the inside of the lockers when they get wet, to avoid rust."
  ],
  "key": "mr-32"
 },
 {
  "n": 38,
  "title": "Seal the Concrete in a Garage Mudroom",
  "paras": [
   "Bare concrete stains and sheds dust. A sealer fixes both.",
   "Blue-gray built-in lockers stand in a garage here, with baskets on top and a striped rug.",
   "<ul><li>Use a concrete sealer or epoxy and let it cure fully before you load the lockers.</li><li>Add a boot tray under the bench, so melting snow has somewhere to go.</li></ul>"
  ],
  "key": "mr-33"
 },
 {
  "n": 39,
  "title": "Use a Light Backing Behind Dark Lockers",
  "paras": [
   "<p><strong>Dark lockers disappear against a dark wall. A light back brings out the shape.</strong> Rustic wood lockers stand under a WELCOME HOME sign here, with a lantern pendant and a slate floor.</p>",
   "<ul><li>Paint the back panel a pale tone, so you can see the hooks and bags.</li><li>Choose a pendant that hangs at least 7 feet above the floor.</li></ul>"
  ],
  "key": "mr-34"
 },
 {
  "n": 40,
  "title": "Add Brass Knobs to Metal Lockers",
  "paras": [
   "Hardware makes cold metal feel like furniture. Sage green louvered lockers have brass knobs here, with trailing vines and a brick floor.",
   "Swap the original handles with knobs. You'll need to drill, so measure first. Faux pothos trails soften the hard edges."
  ],
  "key": "mr-36"
 },
 {
  "n": 41,
  "title": "Label the Room as Well as the Baskets",
  "paras": [
   "A sign tells people where they are and what to do.",
   "A MUDROOM sign hangs over vintage green and gray metal lockers here, with stacked cushions and market totes.",
   "Pick a sign in a tone that matches the lockers.",
   "Keep a stack of cushions for a seat or a picnic."
  ],
  "key": "mr-38"
 },
 {
  "n": 42,
  "title": "Use Butcher Block for a Bench That Takes Boots",
  "paras": [
   "<p><strong>Butcher block is tough enough to take wet boots if you seal it.</strong> White lockers sit beside a butcher block bench here, with a bag of oranges and a brick floor.</p>",
   "Seal it with a food-safe oil or a polyurethane for a harder finish.",
   "Sand it once a year and reseal."
  ],
  "key": "mr-37"
 },
 {
  "n": 43,
  "title": "Hide the Mess Behind a Barn Door",
  "paras": [
   "A sliding door closes on clutter in two seconds.",
   "White sliding barn doors with X braces open to a mudroom bench with wire baskets here.",
   "<ul><li>Check the track is long enough to clear the opening, usually twice the door width.</li><li>Mount the track into a header or a solid board, not just drywall.</li></ul>"
  ],
  "key": "mr-35"
 },
 {
  "n": 44,
  "title": "Turn a Closet Into a Mudroom With a Door",
  "paras": [
   "A reach-in closet is a mudroom waiting to happen.",
   "A blue sliding barn door opens on a shiplap closet with a bench, hooks and two baskets here.",
   "Take out the rod and shelf, add a bench and hooks, and you're done. A low-clearance track kit works when ceilings are short."
  ],
  "key": "mr-57"
 },
 {
  "n": 45,
  "title": "Turn a Closet Into a Moody Niche",
  "paras": [
   "A dark color makes a niche feel cozy, not small.",
   "A navy niche has two shelves, a lamp, brass hooks and a wood bench here.",
   "<p><strong>Quick tip:</strong> Add a small lamp for light, since niches get little natural light.</p>",
   "Use a semi-flush ceiling light if there's no lamp outlet."
  ],
  "key": "mr-43"
 },
 {
  "n": 46,
  "title": "Match the Door to the Wall",
  "paras": [
   "Painting the wall and door the same color makes the room look bigger. A teal green wainscot wraps this mudroom here, with a matching dutch door and a bench with two baskets.",
   "Use a semi-gloss on the door so it wipes clean.",
   "Add a patterned rug for contrast."
  ],
  "key": "mr-06"
 },
 {
  "n": 47,
  "title": "Warm a White Wall With Butcher Block",
  "paras": [
   "Wood is the quickest way to warm a white room.",
   "A thick butcher block bench sits against vertical board walls here, with a bracket shelf with hooks above and a cushion on top. Install it with heavy-duty brackets into studs.",
   "Board and batten panels are a quick DIY wall treatment."
  ],
  "key": "mr-39"
 },
 {
  "n": 48,
  "title": "Paint the Ceiling, Too",
  "paras": [
   "The ceiling is the fifth wall, and it's usually ignored.",
   "A blue beadboard mudroom has a four-drawer bench here, and a whitewashed plank ceiling.",
   "<ul><li>Choose a lighter shade than the walls, to keep it airy.</li><li>A brass flush mount finishes the look.</li></ul>"
  ],
  "key": "mr-40"
 },
 {
  "n": 49,
  "title": "Use Patterned Tile to Plan a Small Entry",
  "paras": [
   "<p><strong>A patterned floor makes a small entry look designed.</strong> Light blue beadboard wainscot has five black hooks and a wood bench over patterned blue tile here.</p>",
   "<ul><li>Choose a tile with a matte finish for traction.</li><li>Keep the walls simple, so the floor stands out.</li></ul>"
  ],
  "key": "mr-41"
 },
 {
  "n": 50,
  "title": "End the Room With a Window or a Door",
  "paras": [
   "Give the eye somewhere to go at the end of the room. A sage green built-in has a wood bench, baskets and herringbone tile here, with a glass door at the end.",
   "Add a runner to lead the eye to the door. Use ivy or faux greenery to soften the top of the cabinets."
  ],
  "key": "mr-58"
 },
 {
  "n": 51,
  "title": "Give the Dog a Spot, Too",
  "paras": [
   "Pets are part of the family, and they need a place near the door.",
   "A white board and batten mudroom here has a dog on the bench, with baskets underneath.",
   "Put a washable cushion on the bench.",
   "Keep a towel for muddy paws in a basket nearby."
  ],
  "key": "mr-48"
 },
 {
  "n": 52,
  "title": "Hang the Leash by the Door",
  "paras": [
   "<p><strong>Where you hang the leash decides if you remember it.</strong> A white built-in has a leash on a hook, a basket bench and a dog resting nearby here.</p>",
   "Mount the leash holder at the door, at your eye level.",
   "Add a small shelf for treats and bags."
  ],
  "key": "mr-52"
 },
 {
  "n": 53,
  "title": "Use Pegboard for a Custom Wall on a Budget",
  "paras": [
   "Pegboard lets you rearrange as the family changes.",
   "A gray pegboard wall here has wire baskets holding shoes, hooks, a shelf and a bench with three baskets.",
   "<ul><li>Use hooks and baskets that you can move around.</li><li>Paint the pegboard to match the room.</li></ul>"
  ],
  "key": "mr-51"
 },
 {
  "n": 54,
  "title": "Choose a Freestanding Unit for a DIY Mudroom",
  "paras": [
   "You don't need to build into the wall to make a mudroom.",
   "A white freestanding locker has a walnut top and drawers in a garage beside a brick step here.",
   "Anchor it to the wall for safety. T-bar pulls give it a custom look."
  ],
  "key": "mr-49"
 },
 {
  "n": 55,
  "title": "Turn Hooks Into a Command Center",
  "paras": [
   "A message board by the door stops the paper pile.",
   "A cork board labeled Center hangs above a hook rail here, with a basket shelf and a shoe bench.",
   "<p><strong>Quick tip:</strong> Add a mail sorter and a key hook beside it.</p>",
   "Pin the week's schedule on it every Sunday."
  ],
  "key": "mr-53"
 },
 {
  "n": 56,
  "title": "Go Vertical When the Floor Is Small",
  "paras": [
   "A tall shoe rack uses height instead of floor. A narrow white shoe rack stands between a bench and a glass door here.",
   "Choose a rack that is less than 10 inches deep.",
   "Anchor it to the wall so it can't tip."
  ],
  "key": "mr-54"
 },
 {
  "n": 57,
  "title": "Choose Shoe Cubbies Under the Bench Over a Rack",
  "paras": [
   "Cubbies under a bench keep shoes in order.",
   "A wood-paneled built-in has open shelving, hooks and a bench with shoe cubbies here. Measure the height of your tallest shoe before you build.",
   "Add a basket for socks and extras."
  ],
  "key": "mr-55"
 },
 {
  "n": 58,
  "title": "Slide a Metal Rack Into the Bench",
  "paras": [
   "A rack under the bench holds more than a flat shelf.",
   "A white bench has three levels of black metal shoe racks under a hook rail and shelf here.",
   "<ul><li>Choose a rack that matches the bench's width.</li><li>Leave room to slide it out easily.</li></ul>"
  ],
  "key": "mr-56"
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
<p>A mudroom has one job: catch everything the family drags through the door before it reaches the rest of the house.</p>
<p>Wet boots, backpacks, dog leashes and half a dozen coats all need a home, and the home needs to survive daily use.</p>
<p>These 58 ideas run from a single peg rail to full built-ins, with the measurements and materials I would use to make each one work. First, the rules.</p>
${photo("hero")}

<h2>Five Rules for a Mudroom That Survives Real Life</h2>
<p><strong>Give every person a hook.</strong> One hook per person, spaced six to eight inches apart. Shared hooks turn into piles.</p>
<p><strong>Put a bench by the door.</strong> A seat around 15 to 18 inches high makes boots easy to take off, and storage underneath keeps them off the floor.</p>
<p><strong>Choose surfaces that wipe clean.</strong> Semi-gloss or satin paint, sealed wood and tile or a washable rug will all forgive mud.</p>
<p><strong>Count your shoes first.</strong> Measure the pairs you own before you plan cubbies, then add a slot or two for guests.</p>
<p><strong>Mount into studs.</strong> A loaded hook rail carries a lot of weight. Screws in drywall alone won't hold it.</p>

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Common Mudroom Mistakes (and Fixes)</h2>
<p><strong>Too many hooks in too little space.</strong> Space them six to eight inches apart, or use fewer.</p>
<p><strong>Open storage with no discipline.</strong> Open cubbies show everything. Use baskets, doors or drawers where you want it hidden.</p>
<p><strong>Forgetting the floor.</strong> A mudroom floor takes the worst of the weather. Choose tile, sealed concrete or a washable runner.</p>
<p><strong>Skipping a drip zone.</strong> A boot tray by the door catches melting snow before it reaches the wood.</p>
<p><strong>Buying before measuring.</strong> Measure your tallest boots and your widest coat before you buy baskets or cabinets.</p>
<p>You don't need all 58 ideas. Start with hooks you can reach, a bench that holds shoes and a floor that can take a beating, and add the rest as the family's habits show you what's missing.</p>
`;

module.exports = { body };
