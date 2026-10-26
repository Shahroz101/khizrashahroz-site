// Body content for "25 Friendsgiving Decor Ideas for a Cozy Fall Gathering". Converted from the Dwelling Dream source in the
// advice-led voice (see memory advice-led-article-voice): all text new, ideas
// regrouped by theme. Photos credited to their Pinterest pins. Ends on text.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "festive-friendsgiving-decor-ideas";
const PRODUCT_DIR = "festive-friendsgiving-decor-ideas-products";

const PHOTOS = {
 "fg-01": {
  "w": 1152,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/4855512096043833/",
  "label": "Use Amber Glass for Instant Warmth",
  "alt": "A fall dining table with amber glassware, white pumpkins, and taper candles by a stone fireplace"
 },
 "fg-03": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/106679084920369226/",
  "label": "Go Moody With Pampas and Candlelight",
  "alt": "A moody fall tablescape with amber glassware, pampas grass, and pink taper candles"
 },
 "fg-04": {
  "w": 1696,
  "h": 2528,
  "pin": "https://www.pinterest.com/pin/966162926354303863/",
  "label": "Pair Burgundy With Gold",
  "alt": "A formal table with gold chargers, black plates, burgundy florals, and a maroon candle"
 },
 "fg-25": {
  "w": 1024,
  "h": 1536,
  "pin": "https://www.pinterest.com/pin/966162926354794001/",
  "label": "Set a Table With Gold Chargers and Pears",
  "alt": "A formal table with gold chargers, patterned china, and golden pears"
 },
 "fg-18": {
  "w": 736,
  "h": 1312,
  "pin": "https://www.pinterest.com/pin/341569953010668885/",
  "label": "Choose a Dark Plate and a Dark Napkin",
  "alt": "A formal table with gold chargers, patterned plates, pears, and magnolia leaves"
 },
 "fg-24": {
  "w": 736,
  "h": 1318,
  "pin": "https://www.pinterest.com/pin/68750435358/",
  "label": "Run a Garland Down an Outdoor Table",
  "alt": "An outdoor table with eucalyptus garland, white pumpkins, and taper candles"
 },
 "fg-19": {
  "w": 683,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/14425661317140080/",
  "label": "Keep It Neutral With White Pumpkins",
  "alt": "A neutral white and cream tablescape with white pumpkins, candles, and pampas grass"
 },
 "fg-02": {
  "w": 720,
  "h": 1280,
  "pin": "https://www.pinterest.com/pin/4925880839863557/",
  "label": "Take the Table Outside",
  "alt": "A backyard fall table with amber bottle vases, marigolds, and a plaid blanket on a chair"
 },
 "fg-06": {
  "w": 736,
  "h": 1097,
  "pin": "https://www.pinterest.com/pin/758575131034932283/",
  "label": "Make a Balloon Arch for a Big Party",
  "alt": "A terracotta and cream balloon arch over an outdoor dinner table in a vineyard"
 },
 "fg-21": {
  "w": 800,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/89157267630228239/",
  "label": "Hang Lanterns Over a Backyard Party",
  "alt": "Paper lanterns and string lights over outdoor tables with hay bale seating"
 },
 "fg-22": {
  "w": 736,
  "h": 1051,
  "pin": "https://www.pinterest.com/pin/972285007077953260/",
  "label": "Dress a Picnic Table With Macramé",
  "alt": "A macrame table runner on an outdoor picnic table set with a roast turkey"
 },
 "fg-20": {
  "w": 736,
  "h": 979,
  "pin": "https://www.pinterest.com/pin/433964114118419593/",
  "label": "Go Colorful With Painted Candles",
  "alt": "A colorful boho table with painted taper candles, sunflowers, and mini pumpkins"
 },
 "fg-05": {
  "w": 1284,
  "h": 2295,
  "pin": "https://www.pinterest.com/pin/19632948383776240/",
  "label": "Write on a Paper Runner",
  "alt": "A kraft paper table runner with hand-lettered funny Thanksgiving sayings at each place setting"
 },
 "fg-07": {
  "w": 736,
  "h": 736,
  "pin": "https://www.pinterest.com/pin/4608238032652630592/",
  "label": "Add an Arched Sign",
  "alt": "An arched sign reading Eat Drink and Give Thanks with a watercolor leaf design"
 },
 "fg-10": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/182958803607313602/",
  "label": "Hang Gratitude Tags on Branches",
  "alt": "A gratitude tree made of branches with tags for guests to write what they're thankful for"
 },
 "fg-11": {
  "w": 1024,
  "h": 1820,
  "pin": "https://www.pinterest.com/pin/587297607710500922/",
  "label": "Make a Gratitude Tree With Paper Leaves",
  "alt": "A gratitude tree centerpiece with paper leaf notes and a small pumpkin display"
 },
 "fg-15": {
  "w": 736,
  "h": 952,
  "pin": "https://www.pinterest.com/pin/426153183524161674/",
  "label": "Print a Menu Card",
  "alt": "A French Fall Menu card listing a four-course autumn dinner"
 },
 "fg-17": {
  "w": 572,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/415808978120074561/",
  "label": "Give Apple Butter Favors",
  "alt": "Small jars of homemade apple butter wrapped in plaid fabric as party favors"
 },
 "fg-12": {
  "w": 1024,
  "h": 1536,
  "pin": "https://www.pinterest.com/pin/285837907600585013/",
  "label": "Set Up a Cider Station",
  "alt": "A drink station with a glass dispenser labeled apple cider cocktails and cinnamon sticks"
 },
 "fg-13": {
  "w": 1080,
  "h": 1920,
  "pin": "https://www.pinterest.com/pin/920986192572885762/",
  "label": "Display Pies on Cake Stands",
  "alt": "A dessert table with pumpkin pie, pecan pie, cookies, caramel apples, and white pumpkins"
 },
 "fg-23": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/33565959718943707/",
  "label": "Spread a Buffet on the Sideboard",
  "alt": "A sideboard buffet spread with Thanksgiving side dishes, pumpkins, and candlelight"
 },
 "fg-16": {
  "w": 704,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/35747390788753683/",
  "label": "Pile Fruit on a Wood Board",
  "alt": "Apples and pears arranged with wildflowers and candles on a wood board centerpiece"
 },
 "fg-09": {
  "w": 1023,
  "h": 1537,
  "pin": "https://www.pinterest.com/pin/4595993884925185408/",
  "label": "Welcome Guests on the Porch",
  "alt": "A front porch with a Welcome pumpkin sign, lanterns, pumpkins, and a fall wreath"
 },
 "fg-08": {
  "w": 1080,
  "h": 1920,
  "pin": "https://www.pinterest.com/pin/1067986499163860838/",
  "label": "Set Up a Cozy Living Room",
  "alt": "A cozy living room with a rust throw blanket, fall florals, and a lit fireplace"
 },
 "fg-14": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/13370130140079002/",
  "label": "Hang a Leaf Garland on the Mantel",
  "alt": "A fireplace mantel decorated with a fall leaf garland and string lights"
 },
 "hero": {
  "w": 1152,
  "h": 2048,
  "pin": "https://www.pinterest.com/pin/4855512096043833/",
  "label": "Use Amber Glass for Instant Warmth",
  "alt": "A fall dining table with amber glassware, white pumpkins, and taper candles by a stone fireplace"
 }
};

const PRODUCTS = {
 "fg-01": [
  {
   "asin": "B0CL4JMWL3",
   "title": "Amber Glass Goblets, Set of 4",
   "w": 1500,
   "h": 1397
  },
  {
   "asin": "B09D6T8WX6",
   "title": "Cream Beeswax Taper Candles, 6-Pack",
   "w": 1369,
   "h": 1422
  }
 ],
 "fg-03": [
  {
   "asin": "B09124CTBD",
   "title": "Natural Pampas Grass Stems, 30-Pack",
   "w": 917,
   "h": 1442
  },
  {
   "asin": "B0CL4JMWL3",
   "title": "Amber Glass Goblets, Set of 4",
   "w": 1500,
   "h": 1397
  }
 ],
 "fg-04": [
  {
   "asin": "B09LRXP8VG",
   "title": "Gold Charger Plates, Set of 12",
   "w": 1118,
   "h": 1500
  },
  {
   "asin": "B0CG5RLBV4",
   "title": "Burgundy Linen Dinner Napkins, Set of 4",
   "w": 1355,
   "h": 1500
  }
 ],
 "fg-25": [
  {
   "asin": "B09LRXP8VG",
   "title": "Gold Charger Plates, Set of 12",
   "w": 1118,
   "h": 1500
  },
  {
   "asin": "B0HF4K1VHP",
   "title": "Faux Brown Pears, 12-Piece Set",
   "w": 1478,
   "h": 1500
  }
 ],
 "fg-18": [
  {
   "asin": "B09LRXP8VG",
   "title": "Gold Charger Plates, Set of 12",
   "w": 1118,
   "h": 1500
  },
  {
   "asin": "B08KFJLY2C",
   "title": "Artificial Magnolia Leaf Garland, 50 in",
   "w": 653,
   "h": 1146
  }
 ],
 "fg-24": [
  {
   "asin": "B07PHFVRM2",
   "title": "Artificial Eucalyptus Garland, 2-Pack",
   "w": 927,
   "h": 1500
  },
  {
   "asin": "B08HCXTB1Q",
   "title": "White Artificial Pumpkins, 4-Pack",
   "w": 1028,
   "h": 1273
  }
 ],
 "fg-19": [
  {
   "asin": "B08HCXTB1Q",
   "title": "White Artificial Pumpkins, 4-Pack",
   "w": 1028,
   "h": 1273
  },
  {
   "asin": "B09124CTBD",
   "title": "Natural Pampas Grass Stems, 30-Pack",
   "w": 917,
   "h": 1442
  }
 ],
 "fg-02": [
  {
   "asin": "B0CL4JMWL3",
   "title": "Amber Glass Goblets, Set of 4",
   "w": 1500,
   "h": 1397
  },
  {
   "asin": "B09DG45M91",
   "title": "Artificial Fall Floral Stems, 2 Bundles",
   "w": 992,
   "h": 903
  }
 ],
 "fg-06": [
  {
   "asin": "B0DBQXSSR1",
   "title": "Terracotta Fall Balloon Arch Kit",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B08GFCDC2S",
   "title": "Dried Palm Fronds, 12-Piece Set",
   "w": 1200,
   "h": 1334
  }
 ],
 "fg-21": [
  {
   "asin": "B08DFFDXPC",
   "title": "Paper Lantern String Lights",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0B41S8BSV",
   "title": "Fall Leaf Garland with LED Lights, 20 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "fg-22": [
  {
   "asin": "B07XXVLNK7",
   "title": "Macrame Table Runner, 100 in",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B09D6T8WX6",
   "title": "Cream Beeswax Taper Candles, 6-Pack",
   "w": 1369,
   "h": 1422
  }
 ],
 "fg-20": [
  {
   "asin": "B0BGC245KC",
   "title": "Ombre Taper Candles, Pink Orange Yellow",
   "w": 995,
   "h": 1106
  },
  {
   "asin": "B0BZ461FZZ",
   "title": "Artificial Sunflower Stems, 9-Pack",
   "w": 1313,
   "h": 1500
  }
 ],
 "fg-05": [
  {
   "asin": "B08B574BF8",
   "title": "Kraft Paper Table Runner Roll, 50 ft",
   "w": 202,
   "h": 1430
  },
  {
   "asin": "B09124CTBD",
   "title": "Natural Pampas Grass Stems, 30-Pack",
   "w": 917,
   "h": 1442
  }
 ],
 "fg-07": [
  {
   "asin": "B09NHSMBDD",
   "title": "Farmhouse Wood Thankful Sign",
   "w": 805,
   "h": 806
  },
  {
   "asin": "B09124CTBD",
   "title": "Natural Pampas Grass Stems, 30-Pack",
   "w": 917,
   "h": 1442
  }
 ],
 "fg-10": [
  {
   "asin": "B0G2LDWTKF",
   "title": "24-Inch Thanksgiving Gratitude Tree Kit",
   "w": 1500,
   "h": 1493
  },
  {
   "asin": "B07VVHTQWF",
   "title": "Artificial White Pumpkins, 12-Piece Bulk Set",
   "w": 1497,
   "h": 1500
  }
 ],
 "fg-11": [
  {
   "asin": "B0G2LDWTKF",
   "title": "24-Inch Thanksgiving Gratitude Tree Kit",
   "w": 1500,
   "h": 1493
  },
  {
   "asin": "B07VVHTQWF",
   "title": "Artificial White Pumpkins, 12-Piece Bulk Set",
   "w": 1497,
   "h": 1500
  }
 ],
 "fg-15": [
  {
   "asin": "B08B574BF8",
   "title": "Kraft Paper Table Runner Roll, 50 ft",
   "w": 202,
   "h": 1430
  },
  {
   "asin": "B0CG5RLBV4",
   "title": "Burgundy Linen Dinner Napkins, Set of 4",
   "w": 1355,
   "h": 1500
  }
 ],
 "fg-17": [
  {
   "asin": "B09YRBG5LB",
   "title": "Mini Mason Jars, 4 oz, 16-Pack",
   "w": 1470,
   "h": 1431
  },
  {
   "asin": "B074W5CL35",
   "title": "Kraft Gift Tags with Twine, 100-Pack",
   "w": 1500,
   "h": 1257
  }
 ],
 "fg-12": [
  {
   "asin": "B0DM85LGNQ",
   "title": "Glass Beverage Dispenser with Spigot",
   "w": 1500,
   "h": 1497
  },
  {
   "asin": "B0G6FX2TKB",
   "title": "Mulling Spices Bundle",
   "w": 834,
   "h": 1500
  }
 ],
 "fg-13": [
  {
   "asin": "B09JT3W4QK",
   "title": "3-Tier Glass Cake Stand Set",
   "w": 1460,
   "h": 1367
  },
  {
   "asin": "B08HCXTB1Q",
   "title": "White Artificial Pumpkins, 4-Pack",
   "w": 1028,
   "h": 1273
  }
 ],
 "fg-23": [
  {
   "asin": "B08HCXTB1Q",
   "title": "White Artificial Pumpkins, 4-Pack",
   "w": 1028,
   "h": 1273
  },
  {
   "asin": "B0B41S8BSV",
   "title": "Fall Leaf Garland with LED Lights, 20 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "fg-16": [
  {
   "asin": "B0CML6HQ37",
   "title": "Live Edge Acacia Wood Serving Board",
   "w": 1280,
   "h": 1280
  },
  {
   "asin": "B089QLM7S7",
   "title": "Glass Votive Candle Holders, Set of 12",
   "w": 1485,
   "h": 1500
  }
 ],
 "fg-09": [
  {
   "asin": "B0C7V9W7WF",
   "title": "Fall Buffalo Check Welcome Doormat",
   "w": 1136,
   "h": 682
  },
  {
   "asin": "B08HCXTB1Q",
   "title": "White Artificial Pumpkins, 4-Pack",
   "w": 1028,
   "h": 1273
  }
 ],
 "fg-08": [
  {
   "asin": "B09DG45M91",
   "title": "Artificial Fall Floral Stems, 2 Bundles",
   "w": 992,
   "h": 903
  },
  {
   "asin": "B09D6T8WX6",
   "title": "Cream Beeswax Taper Candles, 6-Pack",
   "w": 1369,
   "h": 1422
  }
 ],
 "fg-14": [
  {
   "asin": "B0B41S8BSV",
   "title": "Fall Leaf Garland with LED Lights, 20 ft",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B09D6T8WX6",
   "title": "Cream Beeswax Taper Candles, 6-Pack",
   "w": 1369,
   "h": 1422
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Use Amber Glass for Instant Warmth",
  "paras": [
   "Amber glass is the cheapest way to make a fall table glow.",
   "Amber goblets and bottle vases sit among eucalyptus, small pumpkins and rust napkins on this table beside a fireplace, with tall candles catching the glass.",
   "Mix a few shades, from honey to dark brown, so it looks collected.",
   "Put candles near the amber pieces, which light them from within."
  ],
  "key": "fg-01",
  "_orig": [
   "Amber glass is the cheapest way to make a fall table glow.",
   "Amber goblets and bottle vases sit among eucalyptus, small pumpkins and rust napkins on this table beside a fireplace, with tall candles catching the glass.",
   "Mix a few shades, from honey to dark brown, so it looks collected.",
   "Put candles near the amber pieces, which light them from within."
  ]
 },
 {
  "n": 2,
  "title": "Go Moody With Pampas and Candlelight",
  "paras": [
   "<p><strong>Dark and warm is a great fall mood.</strong> Pampas grass and dried stems stand in tall vases here with rust napkins, amber glasses and pumpkins, all lit by tapers.</p>",
   "Keep the tallest arrangement to one side so it doesn't block faces.",
   "Dim the lights and let the candles do the job."
  ],
  "key": "fg-03",
  "_orig": [
   "Dark and warm is a great fall mood.",
   "Pampas grass and dried stems stand in tall vases here with rust napkins, amber glasses and pumpkins, all lit by tapers.",
   "Keep the tallest arrangement to one side so it doesn't block faces.",
   "Dim the lights and let the candles do the job."
  ]
 },
 {
  "n": 3,
  "title": "Pair Burgundy With Gold",
  "paras": [
   "Burgundy and gold feel rich without being formal.",
   "Deep red napkins on dark plates and gold chargers sit under a vase of burgundy blooms and dried leaves here, on a striped runner.",
   "<ul><li>Choose one deep color and one metal, and repeat them.</li><li>Chargers protect the table and raise the whole place setting.</li></ul>"
  ],
  "key": "fg-04",
  "_orig": [
   "Burgundy and gold feel rich without being formal.",
   "Deep red napkins on dark plates and gold chargers sit under a vase of burgundy blooms and dried leaves here, on a striped runner.",
   "Choose one deep color and one metal, and repeat them.",
   "Chargers protect the table and raise the whole place setting."
  ]
 },
 {
  "n": 4,
  "title": "Set a Table With Gold Chargers and Pears",
  "paras": [
   "Fruit is a free centerpiece.",
   "Golden pears and white pumpkins sit among magnolia leaves here, with gold chargers, patterned plates and candlesticks.",
   "Use real pears and they'll last the dinner. Replace them afterward. Magnolia leaves are sturdy, so they hold up on the table all evening."
  ],
  "key": "fg-25",
  "_orig": [
   "Fruit is a free centerpiece.",
   "Golden pears and white pumpkins sit among magnolia leaves here, with gold chargers, patterned plates and candlesticks.",
   "Use real pears and they'll last the dinner. Replace them afterward.",
   "Magnolia leaves are sturdy, so they hold up on the table all evening."
  ]
 },
 {
  "n": 5,
  "title": "Choose a Dark Plate and a Dark Napkin",
  "paras": [
   "Dark tones feel intentional at a fall table.",
   "A burgundy napkin tied with twine sits on a bronze plate here, among leaves and pumpkins.",
   "<p><strong>Quick tip:</strong> Tie napkins with twine, then add a sprig or a leaf.</p>",
   "Dark plates make food look more colorful."
  ],
  "key": "fg-18",
  "_orig": [
   "Dark tones feel intentional at a fall table.",
   "A burgundy napkin tied with twine sits on a bronze plate here, among leaves and pumpkins.",
   "Tie napkins with twine, then add a sprig or a leaf.",
   "Dark plates make food look more colorful."
  ]
 },
 {
  "n": 6,
  "title": "Run a Garland Down an Outdoor Table",
  "paras": [
   "Greenery is the easiest runner. A long garland of eucalyptus and berries runs down a table here, with white pumpkins, tapers and rattan chargers.",
   "Lay the garland first, then tuck in the pumpkins and candles.",
   "Use wind-safe candles outdoors, or LED ones."
  ],
  "key": "fg-24",
  "_orig": [
   "Greenery is the easiest runner.",
   "A long garland of eucalyptus and berries runs down a table here, with white pumpkins, tapers and rattan chargers.",
   "Lay the garland first, then tuck in the pumpkins and candles.",
   "Use wind-safe candles outdoors, or LED ones."
  ]
 },
 {
  "n": 7,
  "title": "Keep It Neutral With White Pumpkins",
  "paras": [
   "White pumpkins are the best neutral in fall.",
   "Cream and white pumpkins, pillar candles in glass cylinders and dried grasses fill this table, with linen napkins. Group pumpkins in odd numbers at different heights.",
   "Real pumpkins last for weeks, but wipe them off before they sit near food."
  ],
  "key": "fg-19",
  "_orig": [
   "White pumpkins are the best neutral in fall.",
   "Cream and white pumpkins, pillar candles in glass cylinders and dried grasses fill this table, with linen napkins.",
   "Group pumpkins in odd numbers at different heights.",
   "Real pumpkins last for weeks, but wipe them off before they sit near food."
  ]
 },
 {
  "n": 8,
  "title": "Take the Table Outside",
  "paras": [
   "A backyard Friendsgiving feels like a picnic with candles.",
   "A farm table in the yard has jars with eucalyptus, mini pumpkins and woven mats, with the sun going down behind.",
   "<ul><li>Set up in the late afternoon, when the light is soft.</li><li>Weigh down napkins and runners in case the wind picks up.</li></ul>"
  ],
  "key": "fg-02",
  "_orig": [
   "A backyard Friendsgiving feels like a picnic with candles.",
   "A farm table in the yard has jars with eucalyptus, mini pumpkins and woven mats, with the sun going down behind.",
   "Set up in the late afternoon, when the light is soft.",
   "Weigh down napkins and runners in case the wind picks up."
  ]
 },
 {
  "n": 9,
  "title": "Make a Balloon Arch for a Big Party",
  "paras": [
   "<p><strong>A balloon arch is the quickest way to make a space feel special.</strong> Terracotta, cream and gold balloons curve beside a long table in a vineyard here, with dried palm fronds and pampas in the arch.</p>",
   "<ul><li>Choose fall tones, and add dried plants for texture.</li><li>Use an arch kit and weigh the base so it can't tip.</li></ul>"
  ],
  "key": "fg-06",
  "_orig": [
   "A balloon arch is the quickest way to make a space feel special.",
   "Terracotta, cream and gold balloons curve beside a long table in a vineyard here, with dried palm fronds and pampas in the arch.",
   "Choose fall tones, and add dried plants for texture.",
   "Use an arch kit and weigh the base so it can't tip."
  ]
 },
 {
  "n": 10,
  "title": "Hang Lanterns Over a Backyard Party",
  "paras": [
   "Light is what turns a yard into a venue. Strings of warm bulbs and paper lanterns hang over picnic tables with hay bales and plaid blankets here.",
   "Hang lights in swags across the yard between trees or poles. Provide blankets for guests as the evening cools."
  ],
  "key": "fg-21",
  "_orig": [
   "Light is what turns a yard into a venue.",
   "Strings of warm bulbs and paper lanterns hang over picnic tables with hay bales and plaid blankets here.",
   "Hang lights in swags across the yard between trees or poles.",
   "Provide blankets for guests as the evening cools."
  ]
 },
 {
  "n": 11,
  "title": "Dress a Picnic Table With Macramé",
  "paras": [
   "A picnic table can look elegant with a good runner.",
   "A macramé runner on a weathered table holds a turkey, candles and pumpkins here, with pillows on the bench.",
   "Add cushions for comfort.",
   "Bring things inside if it rains, because macramé soaks up water."
  ],
  "key": "fg-22",
  "_orig": [
   "A picnic table can look elegant with a good runner.",
   "A macramé runner on a weathered table holds a turkey, candles and pumpkins here, with pillows on the bench.",
   "Add cushions for comfort.",
   "Bring things inside if it rains, because macramé soaks up water."
  ]
 },
 {
  "n": 12,
  "title": "Go Colorful With Painted Candles",
  "paras": [
   "<p><strong>Fall doesn't have to be brown.</strong> Candles in yellow, pink, orange and red stand in brass holders over a patterned runner here, with sunflowers and roses in a jar.</p>",
   "Mix colors from the same warm family.",
   "Dripless candles keep the cloth clean."
  ],
  "key": "fg-20",
  "_orig": [
   "Fall doesn't have to be brown.",
   "Candles in yellow, pink, orange and red stand in brass holders over a patterned runner here, with sunflowers and roses in a jar.",
   "Mix colors from the same warm family.",
   "Dripless candles keep the cloth clean."
  ]
 },
 {
  "n": 13,
  "title": "Write on a Paper Runner",
  "paras": [
   "Paper is the cheapest tablecloth.",
   "A kraft runner scrawled with Give Thanks and guests' notes runs down this table, with small pumpkins and berry garland.",
   "<ul><li>Give guests markers and let them doodle.</li><li>Keep the paper in place with tape underneath.</li></ul>"
  ],
  "key": "fg-05",
  "_orig": [
   "Paper is the cheapest tablecloth.",
   "A kraft runner scrawled with Give Thanks and guests' notes runs down this table, with small pumpkins and berry garland.",
   "Give guests markers and let them doodle.",
   "Keep the paper in place with tape underneath."
  ]
 },
 {
  "n": 14,
  "title": "Add an Arched Sign",
  "paras": [
   "Signs give a gathering a focal point.",
   "An arched sign here says Eat, Drink and Give Thanks in warm tones and leaves.",
   "Stand it on the buffet or entry table. Choose colors that match your palette."
  ],
  "key": "fg-07",
  "_orig": [
   "Signs give a gathering a focal point.",
   "An arched sign here says Eat, Drink and Give Thanks in warm tones and leaves.",
   "Stand it on the buffet or entry table.",
   "Choose colors that match your palette."
  ]
 },
 {
  "n": 15,
  "title": "Hang Gratitude Tags on Branches",
  "paras": [
   "Write what you're thankful for.",
   "Kraft tags hang from bare branches in a white vase here, among place settings.",
   "<p><strong>Quick tip:</strong> Pre-write a few tags and leave blanks.</p>",
   "Use real branches from the yard."
  ],
  "key": "fg-10",
  "_orig": [
   "Write what you're thankful for.",
   "Kraft tags hang from bare branches in a white vase here, among place settings.",
   "Pre-write a few tags and leave blanks.",
   "Use real branches from the yard."
  ]
 },
 {
  "n": 16,
  "title": "Make a Gratitude Tree With Paper Leaves",
  "paras": [
   "Let guests add their own. Paper leaves in red, orange and yellow hang from branches in a pot on a plaid cloth here, with a Gratitude Tree tag and pumpkins.",
   "Put a pen and leaves beside it so people can add.",
   "Read them aloud over dessert."
  ],
  "key": "fg-11",
  "_orig": [
   "Let guests add their own.",
   "Paper leaves in red, orange and yellow hang from branches in a pot on a plaid cloth here, with a Gratitude Tree tag and pumpkins.",
   "Put a pen and leaves beside it so people can add.",
   "Read them aloud over dessert."
  ]
 },
 {
  "n": 17,
  "title": "Print a Menu Card",
  "paras": [
   "A menu is a small touch with big impact.",
   "A French Fall Menu card lists the appetizer, entrée, main and dessert here, with autumn leaves around its border. Print on cream cardstock and frame or stand on the table.",
   "Write allergens at the bottom."
  ],
  "key": "fg-15",
  "_orig": [
   "A menu is a small touch with big impact.",
   "A French Fall Menu card lists the appetizer, entrée, main and dessert here, with autumn leaves around its border.",
   "Print on cream cardstock and frame or stand on the table.",
   "Write allergens at the bottom."
  ]
 },
 {
  "n": 18,
  "title": "Give Apple Butter Favors",
  "paras": [
   "A favor is a thank-you.",
   "Small jars of apple butter with plaid fabric lids and tags are stacked on burlap here, with a candle and pumpkins behind.",
   "<ul><li>Use mini jars and tags and tie with twine.</li><li>Sterilize jars and label the date.</li></ul>"
  ],
  "key": "fg-17",
  "_orig": [
   "A favor is a thank-you.",
   "Small jars of apple butter with plaid fabric lids and tags are stacked on burlap here, with a candle and pumpkins behind.",
   "Use mini jars and tags and tie with twine.",
   "Sterilize jars and label the date."
  ]
 },
 {
  "n": 19,
  "title": "Set Up a Cider Station",
  "paras": [
   "<p><strong>Drinks should be self-serve.</strong> A jar with a spigot of apple cider sits among maple syrup, cinnamon sticks and ginger beer on a cutting board.</p>",
   "<ul><li>Add a chalkboard tag.</li><li>Offer spirits on the side, so guests can choose.</li></ul>"
  ],
  "key": "fg-12",
  "_orig": [
   "Drinks should be self-serve.",
   "A jar with a spigot of apple cider sits among maple syrup, cinnamon sticks and ginger beer on a cutting board.",
   "Add a chalkboard tag.",
   "Offer spirits on the side, so guests can choose."
  ]
 },
 {
  "n": 20,
  "title": "Display Pies on Cake Stands",
  "paras": [
   "Dessert makes a table look generous. Pies, cookies and cinnamon rolls sit on cake stands of different heights beside white pumpkins and leaves.",
   "Use risers to make height. Cut one pie first so guests aren't shy."
  ],
  "key": "fg-13",
  "_orig": [
   "Dessert makes a table look generous.",
   "Pies, cookies and cinnamon rolls sit on cake stands of different heights beside white pumpkins and leaves.",
   "Use risers to make height.",
   "Cut one pie first so guests aren't shy."
  ]
 },
 {
  "n": 21,
  "title": "Spread a Buffet on the Sideboard",
  "paras": [
   "A buffet saves table space.",
   "Pumpkins, casseroles and bowls sit on a wooden sideboard with leaves.",
   "Put plates at one end and cutlery last.",
   "Label dishes with small cards."
  ],
  "key": "fg-23",
  "_orig": [
   "A buffet saves table space.",
   "Pumpkins, casseroles and bowls sit on a wooden sideboard with leaves.",
   "Put plates at one end and cutlery last.",
   "Label dishes with small cards."
  ]
 },
 {
  "n": 22,
  "title": "Pile Fruit on a Wood Board",
  "paras": [
   "<p><strong>Fruit can be décor and dessert.</strong> Apples and pears sit on a live-edge board with wildflowers and candles.</p>",
   "Use a board with a bit of height.",
   "Wash the fruit and leave it out."
  ],
  "key": "fg-16",
  "_orig": [
   "Fruit can be décor and dessert.",
   "Apples and pears sit on a live-edge board with wildflowers and candles.",
   "Use a board with a bit of height.",
   "Wash the fruit and leave it out."
  ]
 },
 {
  "n": 23,
  "title": "Welcome Guests on the Porch",
  "paras": [
   "Decorate where the party starts.",
   "A tall WELCOME sign, pumpkins, mums and lanterns greet guests at a door with a wreath.",
   "<ul><li>Place lanterns on the steps.</li><li>Use a doormat that says hello.</li></ul>"
  ],
  "key": "fg-09",
  "_orig": [
   "Decorate where the party starts.",
   "A tall WELCOME sign, pumpkins, mums and lanterns greet guests at a door with a wreath.",
   "Place lanterns on the steps.",
   "Use a doormat that says hello."
  ]
 },
 {
  "n": 24,
  "title": "Set Up a Cozy Living Room",
  "paras": [
   "Before dinner, guests need somewhere to sit.",
   "A living room here has cozy pillows, throws, candles and fall stems on the coffee table.",
   "Add blankets and candles. Set drinks on the coffee table."
  ],
  "key": "fg-08",
  "_orig": [
   "Before dinner, guests need somewhere to sit.",
   "A living room here has cozy pillows, throws, candles and fall stems on the coffee table.",
   "Add blankets and candles.",
   "Set drinks on the coffee table."
  ]
 },
 {
  "n": 25,
  "title": "Hang a Leaf Garland on the Mantel",
  "paras": [
   "A garland is the quickest mantel update.",
   "Paper maple leaves and tiny lights run along the mantel.",
   "<p><strong>Quick tip:</strong> Add candles and framed art.</p>",
   "Use removable hooks."
  ],
  "key": "fg-14",
  "_orig": [
   "A garland is the quickest mantel update.",
   "Paper maple leaves and tiny lights run along the mantel.",
   "Add candles and framed art.",
   "Use removable hooks."
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
<p>Friendsgiving is Thanksgiving without the rules: a mismatched table, a potluck and a lot of laughing.</p>
<p>That freedom is the point, so the decor should feel collected and warm, not formal.</p>
<p>These 25 ideas cover the table, the yard, the paper touches, the food and the welcome, with tips to make it all easier to host.</p>
${photo("hero")}

<h2>Five Rules for a Friendsgiving Table</h2>
<p><strong>Keep the centerpiece low.</strong> Under twelve inches, so friends can talk across the table.</p>
<p><strong>Choose one palette.</strong> Rust, amber and cream, or burgundy and gold. Repeat it three times.</p>
<p><strong>Use real fall pieces.</strong> Pumpkins, pears and branches are cheap and last through dinner.</p>
<p><strong>Light with candles.</strong> Use LED candles outdoors and near paper or garland.</p>
<p><strong>Leave room for the food.</strong> A potluck needs space. Decorate the edges and keep the middle workable.</p>

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Common Friendsgiving Mistakes (and Fixes)</h2>
<p><strong>Over-decorating the table.</strong> If dishes don't fit, take a piece away.</p>
<p><strong>Forgetting the welcome.</strong> A wreath or a few pumpkins at the door sets the mood before anyone sits.</p>
<p><strong>Leaving food out too long.</strong> Refrigerate dairy and cooked dishes within two hours.</p>
<p><strong>Skipping labels.</strong> With a potluck, small cards for dishes and allergens save questions.</p>
<p>Friendsgiving works best when it feels easy. Pick a palette, set a low centerpiece and let the friends bring the rest.</p>
`;

module.exports = { body };
