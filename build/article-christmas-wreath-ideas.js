// Body content for "25 Christmas Wreath Ideas for Every Front Door".
// Converted from the Dwelling Dream "25 Christmas Wreath Ideas" source: all
// text rewritten from scratch and the wreaths regrouped (classic greens and
// plaid, natural and rustic, snowy white, gold glam, playful). Photos are
// credited to their Pinterest pins; the supplied Amazon product pair stays
// under each photo. Ends on text.
// Photos: images/christmas-wreath-ideas/, products: ...-products/.
// Rewritten 2026-10-25 in an advice-led voice (styling rules, the why behind
// each look, practical tips) after the first draft read like photo captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "christmas-wreath-ideas";
const PRODUCT_DIR = "christmas-wreath-ideas-products";

const PHOTOS = {
 "wreath-02": {
  "w": 1856,
  "h": 2475,
  "pin": "https://www.pinterest.com/pin/1063905111998859847/",
  "label": "Full Holly and Berry Wreath With Velvet Ribbon",
  "alt": "Full holly and berry Christmas wreath with a red velvet bow"
 },
 "wreath-03": {
  "w": 2250,
  "h": 3000,
  "pin": "https://www.pinterest.com/pin/4594305068337274944/",
  "label": "Pine and Berry Wreath With a JOY Hanger",
  "alt": "Pine and berry wreath on a dark door with a small Joy sign above"
 },
 "wreath-04": {
  "w": 1800,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/581527370668176880/",
  "label": "Pinecone and Pine Wreath on a Black Door",
  "alt": "Natural pinecone and pine wreath with no ribbon on a black door"
 },
 "wreath-12": {
  "w": 1200,
  "h": 1600,
  "pin": "https://www.pinterest.com/pin/1075515954791446140/",
  "label": "Grapevine Wreath With Red Plaid Bow",
  "alt": "Pine wreath with pinecones and a red and green plaid bow"
 },
 "wreath-01": {
  "w": 1025,
  "h": 1366,
  "pin": "https://www.pinterest.com/pin/4596838289520697408/",
  "label": "Eucalyptus and Berry Wreath With Plaid Bow",
  "alt": "Eucalyptus and berry wreath with a red and navy tartan bow on a white door"
 },
 "wreath-17": {
  "w": 500,
  "h": 500,
  "pin": "https://www.pinterest.com/pin/156007574583796635/",
  "label": "Buffalo Check and Jingle Bell Wreath",
  "alt": "Pine wreath with buffalo plaid ribbon and gold jingle bells"
 },
 "wreath-19": {
  "w": 2250,
  "h": 3000,
  "pin": "https://www.pinterest.com/pin/4597893845873727552/",
  "label": "Pine Wreath With Gold Bells and Plaid Bow",
  "alt": "Pine wreath with gold bells and a red plaid ribbon bow"
 },
 "wreath-14": {
  "w": 1080,
  "h": 1441,
  "pin": "https://www.pinterest.com/pin/4607323275988062784/",
  "label": "Pine Wreath With Dried Oranges and Cinnamon",
  "alt": "Pine wreath with dried orange slices and a cinnamon stick"
 },
 "wreath-15": {
  "w": 800,
  "h": 800,
  "pin": "https://www.pinterest.com/pin/844493672166907/",
  "label": "Cotton Boll and Berry Wreath",
  "alt": "Cotton boll and red berry wreath on a grapevine base"
 },
 "wreath-16": {
  "w": 635,
  "h": 800,
  "pin": "https://www.pinterest.com/pin/4592686561828581440/",
  "label": "Wood Slice Wreath With Red Hydrangea",
  "alt": "Wood slice wreath with a red hydrangea and burlap bow"
 },
 "wreath-07": {
  "w": 3000,
  "h": 3000,
  "pin": "https://www.pinterest.com/pin/4597049405729083456/",
  "label": "Eucalyptus Wreath With Pinecones and White Berries",
  "alt": "Eucalyptus and pinecone wreath with white berries on a white door"
 },
 "wreath-11": {
  "w": 771,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/140806233616746/",
  "label": "Flocked Wreath With Cream Bow",
  "alt": "Flocked white Christmas wreath with pinecones and a cream velvet bow"
 },
 "wreath-05": {
  "w": 400,
  "h": 400,
  "pin": "https://www.pinterest.com/pin/315603886413573008/",
  "label": "White and Silver Poinsettia Wreath",
  "alt": "White and silver Christmas wreath with poinsettias and ornaments"
 },
 "wreath-10": {
  "w": 564,
  "h": 752,
  "pin": "https://www.pinterest.com/pin/14988611253196923/",
  "label": "White and Silver Wreath With Burlap Bow",
  "alt": "White and silver Christmas wreath with a burlap mesh bow"
 },
 "wreath-20": {
  "w": 400,
  "h": 400,
  "pin": "https://www.pinterest.com/pin/4608026967756042816/",
  "label": "Snowflake Wreath With a Let It Snow Sign",
  "alt": "White wreath with poinsettias and a Let It Snow sign"
 },
 "wreath-22": {
  "w": 1024,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/4595501302693048384/",
  "label": "Coastal Wreath With Starfish",
  "alt": "Coastal Christmas wreath with starfish and a white bow"
 },
 "wreath-08": {
  "w": 2000,
  "h": 2000,
  "pin": "https://www.pinterest.com/pin/231935449556164406/",
  "label": "Gilded Champagne Ornament Wreath",
  "alt": "Gilded champagne ornament wreath with gold leaves and string lights"
 },
 "wreath-09": {
  "w": 720,
  "h": 960,
  "pin": "https://www.pinterest.com/pin/3377768467427141/",
  "label": "Gold Poinsettia Wreath With Cream Bow",
  "alt": "Gold poinsettia wreath with a large cream velvet bow"
 },
 "wreath-13": {
  "w": 1080,
  "h": 1080,
  "pin": "https://www.pinterest.com/pin/105412447524085178/",
  "label": "Brown Velvet Magnolia Wreath",
  "alt": "Brown velvet magnolia wreath with gold leaves and a cream bow on a black door"
 },
 "wreath-25": {
  "w": 1800,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/105412447524085178/",
  "label": "Copper and Gold Magnolia Wreath",
  "alt": "Copper and gold magnolia wreath with metallic berry sprays"
 },
 "wreath-23": {
  "w": 1026,
  "h": 1368,
  "pin": "https://www.pinterest.com/pin/4609786188477777472/",
  "label": "Black and Gold Glam Wreath",
  "alt": "Black and gold glam Christmas wreath with mixed ribbon textures"
 },
 "wreath-18": {
  "w": 2260,
  "h": 2500,
  "pin": "https://www.pinterest.com/pin/4609012118435564608/",
  "label": "Red and Gold Ornament Wreath",
  "alt": "Red and gold ornament wreath with eucalyptus and cedar greenery"
 },
 "wreath-06": {
  "w": 1122,
  "h": 1402,
  "pin": "https://www.pinterest.com/pin/4604578899653157440/",
  "label": "Candy Cane Wreath With Merry Christmas Sign",
  "alt": "Candy cane striped wreath with a round Merry Christmas sign"
 },
 "wreath-21": {
  "w": 1080,
  "h": 1440,
  "pin": "https://www.pinterest.com/pin/253046072809963899/",
  "label": "Gingerbread Cookie Wreath",
  "alt": "Christmas wreath with gingerbread man cutouts and striped ribbon"
 },
 "wreath-24": {
  "w": 1163,
  "h": 1353,
  "pin": "https://www.pinterest.com/pin/4595008744689059904/",
  "label": "Blush Pink Wreath With Poinsettias",
  "alt": "Blush pink Christmas wreath with poinsettias and silver ornaments"
 },
 "hero": {
  "w": 1856,
  "h": 2475,
  "pin": "https://www.pinterest.com/pin/1063905111998859847/",
  "label": "Full Holly and Berry Wreath With Velvet Ribbon",
  "alt": "Full holly and berry Christmas wreath with a red velvet bow"
 }
};

const PRODUCTS = {
 "wreath-02": [
  {
   "asin": "B0891WP6K3",
   "title": "Farmlyn Creek Artificial Christmas Wreath with Holly Berries, 15.7 in",
   "w": 1473,
   "h": 1500
  },
  {
   "asin": "B07VX4TNBY",
   "title": "Large 10\" Wired Brick Red Velvet Outdoor Wreath Bow",
   "w": 652,
   "h": 911
  }
 ],
 "wreath-03": [
  {
   "asin": "B0FN3Y83LV",
   "title": "Pre-Lit Norfolk Pine Christmas Wreath with Bells and Velvet Ribbon, 24\"",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0DZHTN633",
   "title": "Gold Wreath Hanger, Stainless Steel Suction-Cup Wreath Hooks, 2 Pack",
   "w": 1500,
   "h": 1500
  }
 ],
 "wreath-04": [
  {
   "asin": "B0DFFRZ26Q",
   "title": "Pudate Christmas Wreath, 22 in, Artificial Pine with Red Berries and Pinecones",
   "w": 1440,
   "h": 1500
  },
  {
   "asin": "B07F897P1G",
   "title": "HEYHOUSE Adjustable Wreath Hanger for Front Door, 14.9-25 in",
   "w": 1248,
   "h": 1300
  }
 ],
 "wreath-12": [
  {
   "asin": "B0DBZFG5VX",
   "title": "22'' Artificial Pine Christmas Wreath with Pine Cones, Cedar",
   "w": 1500,
   "h": 1405
  },
  {
   "asin": "B097RG6HT6",
   "title": "Ribbli Christmas Plaid Wired Ribbon, Red/Green/Ivory, 10 Yard",
   "w": 1500,
   "h": 1180
  }
 ],
 "wreath-01": [
  {
   "asin": "B0FL775NJK",
   "title": "Glitzhome 28 Inch Eucalyptus Wreath with Red Berries for Front Door",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B09ZCG4SGW",
   "title": "Ribbli Christmas Plaid Wired Ribbon, Red and Green, 10 Yards",
   "w": 1500,
   "h": 1174
  }
 ],
 "wreath-17": [
  {
   "asin": "B0HFXLBZTV",
   "title": "Vintage Red Truck Christmas Wreath, Buffalo Plaid Bow, Pinecones and Jingle Bells",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0H992WYD5",
   "title": "6 Inch Large Red Jingle Bell Decoration, Buffalo Plaid Bow with Pine Cone",
   "w": 1500,
   "h": 1500
  }
 ],
 "wreath-19": [
  {
   "asin": "B0CHP7B7Y1",
   "title": "Vivanta 10 Pcs Rustic Gold Metal Bells for Crafts",
   "w": 1084,
   "h": 1500
  },
  {
   "asin": "B0CQJWBTZF",
   "title": "Winlyn Rustic Sleigh Bell Garland, Burlap with Buffalo Plaid Ribbon",
   "w": 1500,
   "h": 1492
  }
 ],
 "wreath-14": [
  {
   "asin": "B0HBPXH429",
   "title": "Naucoos 13\" Christmas Dried Orange Wreath with Cinnamon and Burlap Bow",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0D9T6G31N",
   "title": "27 Pcs Christmas Ornament Kit with Pinecones, Dried Orange Slices, Cinnamon Sticks",
   "w": 1500,
   "h": 1500
  }
 ],
 "wreath-15": [
  {
   "asin": "B07RPRY11R",
   "title": "The Wreath King 18-23\" Cotton Ball Wreath, Adjustable Stems",
   "w": 761,
   "h": 805
  },
  {
   "asin": "B0BBHDXM49",
   "title": "Sggvecsy 6 Pack Artificial Red Berry Stems, Holly Berry Branches",
   "w": 1327,
   "h": 1500
  }
 ],
 "wreath-16": [
  {
   "asin": "B0FJXYLFLC",
   "title": "TEMPUS 22 Inch Rustic Winter Wreath with Red Berries, Pine Cones and Wood Slices",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0GLJ2QM28",
   "title": "Artificial Hydrangea Flower Stem, Red",
   "w": 1353,
   "h": 1500
  }
 ],
 "wreath-07": [
  {
   "asin": "B08DP6CFC5",
   "title": "Nearly Natural 24in. Eucalyptus and Pine Artificial Wreath with Berries and Pine Cones",
   "w": 1500,
   "h": 1468
  },
  {
   "asin": "B07XC31BG3",
   "title": "SARO LIFESTYLE Pinecone Eucalyptus Wreath, 26\"",
   "w": 1336,
   "h": 1500
  }
 ],
 "wreath-11": [
  {
   "asin": "B0D9YB6NJB",
   "title": "Flocked Christmas Wreath with Pinecones and Warm LED Lights, 24 in",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B07P9MD44Q",
   "title": "Large 10\" Wired White Velvet Outdoor Wreath Bow",
   "w": 809,
   "h": 1500
  }
 ],
 "wreath-05": [
  {
   "asin": "B07WW1YQ2T",
   "title": "Northlight Iced White Poinsettia Artificial Christmas Wreath, 22 in",
   "w": 1420,
   "h": 1500
  },
  {
   "asin": "B07Y8H5TK7",
   "title": "Winlyn 24 Set Silver Glitter Poinsettia Flower Picks",
   "w": 1391,
   "h": 1500
  }
 ],
 "wreath-10": [
  {
   "asin": "B017GEI1JY",
   "title": "White Silver Christmas Wreath, Silver Poinsettia Victorian Style",
   "w": 1473,
   "h": 1500
  },
  {
   "asin": "B08R6SRQD4",
   "title": "Ribbli Burlap Wired Ribbon, Natural, 2.5 Inch x 10 Yard",
   "w": 1096,
   "h": 1500
  }
 ],
 "wreath-20": [
  {
   "asin": "B0CGHY874X",
   "title": "Deroro Welcome Winter White Poinsettia Snowflake Front Door Sign",
   "w": 1275,
   "h": 1500
  },
  {
   "asin": "B0DVQNF4PM",
   "title": "Ashland Premium Poinsettia Christmas Wreath",
   "w": 1324,
   "h": 1233
  }
 ],
 "wreath-22": [
  {
   "asin": "B09LRHMJ7W",
   "title": "Artisan Coastal Nautical Christmas Wreath with Starfish and Sand Dollar",
   "w": 1500,
   "h": 1484
  },
  {
   "asin": "B0CNJ85C3P",
   "title": "Natural Seashell Wreath with Starfish and Pearls, 18 in",
   "w": 1500,
   "h": 1500
  }
 ],
 "wreath-08": [
  {
   "asin": "B093GQPH7H",
   "title": "Valery Madelyn 24'' Pre-Lit Christmas Wreath, Champagne Gold Balls and Magnolia",
   "w": 1500,
   "h": 1498
  },
  {
   "asin": "B016VQ9W28",
   "title": "Northlight Pre-Lit Champagne Gold Glittered Twig Christmas Wreath, 42\"",
   "w": 1500,
   "h": 1499
  }
 ],
 "wreath-09": [
  {
   "asin": "B0F3CW89MJ",
   "title": "Hollyone Gold Poinsettia Christmas Wreath, 24 in, with Berries and Magnolia Leaves",
   "w": 1500,
   "h": 1456
  },
  {
   "asin": "B0D1Q8YNCP",
   "title": "Ribbli Ivory Crinkled Velvet Wired Ribbon, 2.5 Inch",
   "w": 1490,
   "h": 1361
  }
 ],
 "wreath-13": [
  {
   "asin": "B0FQ9WLQB3",
   "title": "Suncalla 24 Pcs Christmas Velvet Magnolia Flower Picks, Brown Green Cream",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B07SPHRM82",
   "title": "KI Store Velvet Magnolia Flower Picks, White and Gold, Pack of 6",
   "w": 1500,
   "h": 1416
  }
 ],
 "wreath-25": [
  {
   "asin": "B0CTZZKH5Y",
   "title": "Briful 20 Inch Gold Eucalyptus Christmas Wreath, Grapevine Base",
   "w": 1500,
   "h": 1492
  },
  {
   "asin": "B0F99HR2HC",
   "title": "Golden Christmas Tree Picks and Sprays, Champagne Glitter Leaves, 6 Pcs",
   "w": 1500,
   "h": 1438
  }
 ],
 "wreath-23": [
  {
   "asin": "B079LNLZCQ",
   "title": "Black Gold Christmas Wreath, Bold Trendy Holiday Mesh Decor",
   "w": 1461,
   "h": 1500
  },
  {
   "asin": "B0D924C65W",
   "title": "HUIHUANG Black Velvet Wired Ribbon, Black and Gold Glitter, 2.5 Inch",
   "w": 1406,
   "h": 1500
  }
 ],
 "wreath-18": [
  {
   "asin": "B0H9L3228Y",
   "title": "IVKHE 24 Inch Red and Gold Christmas Wreath with Velvet Ribbon and Magnolia",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0HFJJHZM9",
   "title": "Christmas Teardrop Swag Wreath with Red Velvet Ball and Gold Berry",
   "w": 215,
   "h": 355
  }
 ],
 "wreath-06": [
  {
   "asin": "B0D83D4QZQ",
   "title": "Paper Fair 4 Inch Candy Cane Christmas Wired Ribbon, Red Glitter Stripe",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0DFHL3S35",
   "title": "Merry Christmas Wooden Welcome Wreath Sign with Bow",
   "w": 1395,
   "h": 1500
  }
 ],
 "wreath-21": [
  {
   "asin": "B09L595B9B",
   "title": "Gingerbread Men Cookies Christmas Wreath, Handmade Deco Mesh",
   "w": 1489,
   "h": 1500
  },
  {
   "asin": "B09JY127D9",
   "title": "Gingerbread Cookies Wired Christmas Ribbon, 2.5\" x 10 Yards",
   "w": 677,
   "h": 593
  }
 ],
 "wreath-24": [
  {
   "asin": "B08P98WHR5",
   "title": "Blush Pink Christmas Wreath with Poinsettia, Frosted Grapevine Base",
   "w": 1500,
   "h": 1000
  },
  {
   "asin": "B0DGXBQLPF",
   "title": "Thiccywoov 6 Pcs Large Pink Christmas Poinsettia Flowers",
   "w": 1500,
   "h": 1500
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Put Fullness First",
  "paras": [
   "Size and fullness matter more than any single ornament.",
   "A good wreath is about two-thirds the width of your door. This one fills its space with dense evergreen, bright red berries, silver-tipped pinecones and glossy holly leaves, with one long velvet ribbon trailing down a white door.",
   "If yours looks thin, tuck in extra berry picks. It takes two minutes and makes a bigger difference than a new bow."
  ],
  "key": "wreath-02",
  "_orig": [
   "Size and fullness matter more than any single ornament.",
   "A good wreath is about two-thirds the width of your door. This one fills its space with dense evergreen, bright red berries, silver-tipped pinecones and glossy holly leaves, with one long velvet ribbon trailing down a white door.",
   "If yours looks thin, tuck in extra berry picks. It takes two minutes and makes a bigger difference than a new bow."
  ]
 },
 {
  "n": 2,
  "title": "Match the Wreath to the Door",
  "paras": [
   "Dark doors make greens look richer.",
   "Long pine needles, red berry sprays and a few pinecones fan out here, with a bow in red, green and cream plaid and a small gold JOY hanger above.",
   "<ul><li>As a rule, put a rich, dark wreath on a pale door and a pale one on a dark door.</li><li>Choose a hanger in the same finish as your door hardware so it looks planned.</li></ul>"
  ],
  "key": "wreath-03",
  "_orig": [
   "Dark doors make greens look richer.",
   "Long pine needles, red berry sprays and a few pinecones fan out here, with a bow in red, green and cream plaid and a small gold JOY hanger above.",
   "As a rule, put a rich, dark wreath on a pale door and a pale one on a dark door.",
   "Choose a hanger in the same finish as your door hardware so it looks planned."
  ]
 },
 {
  "n": 3,
  "title": "Skip the Ribbon",
  "paras": [
   "<p><strong>Not every wreath needs a bow.</strong> This one is just layers of pine, fern-like sprigs and big brown pinecones against a black door. The shapes and textures are interesting enough without help.</p>",
   "<ul><li>It's also the easiest to leave up until February, since nothing on it says Christmas out loud.</li><li>If a cone comes loose, a dab of hot glue fixes it.</li></ul>"
  ],
  "key": "wreath-04",
  "_orig": [
   "Not every wreath needs a bow.",
   "This one is just layers of pine, fern-like sprigs and big brown pinecones against a black door. The shapes and textures are interesting enough without help.",
   "It's also the easiest to leave up until February, since nothing on it says Christmas out loud.",
   "If a cone comes loose, a dab of hot glue fixes it."
  ]
 },
 {
  "n": 4,
  "title": "Leave Part of the Ring Bare",
  "paras": [
   "Designers rarely cover a whole wreath. A grapevine ring here carries its pine, pinecones, berries and red-green tartan bow on one side only, and the bare vine shows on the other.",
   "Place the cluster at about seven o'clock and the eye follows the diagonal. On a black door the red really stands out."
  ],
  "key": "wreath-12",
  "_orig": [
   "Designers rarely cover a whole wreath.",
   "A grapevine ring here carries its pine, pinecones, berries and red-green tartan bow on one side only, and the bare vine shows on the other.",
   "Place the cluster at about seven o'clock and the eye follows the diagonal.",
   "On a black door the red really stands out."
  ]
 },
 {
  "n": 5,
  "title": "Pair Cool Eucalyptus With a Warm Ribbon",
  "paras": [
   "Eucalyptus adds a silvery, cool note to Christmas greens.",
   "Soft round leaves, red berry sprays and pine gather on one side of this wreath, with a tartan bow in red and navy and tails that nearly sweep the door.",
   "The mix feels fresher than the usual red and green.",
   "Let the ribbon tails run long for more drama. Eucalyptus keeps its shape as it dries, so it still looks good in week four."
  ],
  "key": "wreath-01",
  "_orig": [
   "Eucalyptus adds a silvery, cool note to Christmas greens.",
   "Soft round leaves, red berry sprays and pine gather on one side of this wreath, with a tartan bow in red and navy and tails that nearly sweep the door.",
   "The mix feels fresher than the usual red and green.",
   "Let the ribbon tails run long for more drama.",
   "Eucalyptus keeps its shape as it dries, so it still looks good in week four."
  ]
 },
 {
  "n": 6,
  "title": "Add a Little Sound",
  "paras": [
   "<p><strong>A wreath with bells greets you every time the door opens.</strong> Frosted pine, buffalo check berries, pinecones and silver jingle bells are wound with rough twine on this plank door.</p>",
   "Keep everything in the same palette (checks and naturals here) so it feels cozy and not busy.",
   "Wire bells on with floral wire and double-knot them. A loose bell is easy to lose."
  ],
  "key": "wreath-17",
  "_orig": [
   "A wreath with bells greets you every time the door opens.",
   "Frosted pine, buffalo check berries, pinecones and silver jingle bells are wound with rough twine on this plank door.",
   "Keep everything in the same palette (checks and naturals here) so it feels cozy and not busy.",
   "Wire bells on with floral wire and double-knot them. A loose bell is easy to lose."
  ]
 },
 {
  "n": 7,
  "title": "Hang the Bells From the Bow",
  "paras": [
   "Let a few oversized bells do the talking.",
   "Three brass bells swing from twine below a large bow in red, green and cream plaid, set against cedar, eucalyptus, pinecones and red berries.",
   "<ul><li>Bells add weight, so use a strong hook and test the wreath before you leave it.</li><li>They look best on pale siding or a white door.</li></ul>"
  ],
  "key": "wreath-19",
  "_orig": [
   "Let a few oversized bells do the talking.",
   "Three brass bells swing from twine below a large bow in red, green and cream plaid, set against cedar, eucalyptus, pinecones and red berries.",
   "Bells add weight, so use a strong hook and test the wreath before you leave it.",
   "They look best on pale siding or a white door."
  ]
 },
 {
  "n": 8,
  "title": "Keep It Simple With Oranges and Cinnamon",
  "paras": [
   "The simplest wreaths often look the best.",
   "A full, soft green wreath here carries just a few touches: dried orange slices, a cinnamon stick, a pinecone and a loose tan velvet ribbon.",
   "Dry your own oranges by slicing them thin and baking at 200°F for two to three hours. Mist them with clear sealer if the wreath will hang outside."
  ],
  "key": "wreath-14",
  "_orig": [
   "The simplest wreaths often look the best.",
   "A full, soft green wreath here carries just a few touches: dried orange slices, a cinnamon stick, a pinecone and a loose tan velvet ribbon.",
   "Dry your own oranges by slicing them thin and baking at 200°F for two to three hours.",
   "Mist them with clear sealer if the wreath will hang outside."
  ]
 },
 {
  "n": 9,
  "title": "Pair Cotton Bolls With Red Berries",
  "paras": [
   "Cotton gives a wreath a soft farmhouse feel.",
   "A loose, twiggy ring is dotted with cotton bolls, rust-colored leaves and red berry sprays on a whitewashed wall.",
   "<p><strong>Quick tip:</strong> Because it's so airy, it needs a pale background. On a dark door the shape would disappear.</p>",
   "Faux cotton survives rain. Real cotton doesn't."
  ],
  "key": "wreath-15",
  "_orig": [
   "Cotton gives a wreath a soft farmhouse feel.",
   "A loose, twiggy ring is dotted with cotton bolls, rust-colored leaves and red berry sprays on a whitewashed wall.",
   "Because it's so airy, it needs a pale background. On a dark door the shape would disappear.",
   "Faux cotton survives rain. Real cotton doesn't."
  ]
 },
 {
  "n": 10,
  "title": "Make a Wreath Yourself",
  "paras": [
   "A handmade wreath is the most personal one on the door. Round slices of birch form this open ring, with a deep red hydrangea, burlap ribbon and trailing greenery in the lower corner.",
   "Glue the slices to a cardboard ring with hot glue and drill a small hole at the top for twine.",
   "It's light enough for any hook. Keep it indoors or on a covered porch."
  ],
  "key": "wreath-16",
  "_orig": [
   "A handmade wreath is the most personal one on the door.",
   "Round slices of birch form this open ring, with a deep red hydrangea, burlap ribbon and trailing greenery in the lower corner.",
   "Glue the slices to a cardboard ring with hot glue and drill a small hole at the top for twine.",
   "It's light enough for any hook. Keep it indoors or on a covered porch."
  ]
 },
 {
  "n": 11,
  "title": "Let Eucalyptus Be the Only Star",
  "paras": [
   "Eucalyptus on its own is calm and elegant.",
   "Round gray-green leaves, a scattering of white berries and a few big pinecones circle a white door in this simple wreath. There is no ribbon. It looks as good in January as in December.",
   "Faux holds its color better in sun than real."
  ],
  "key": "wreath-07",
  "_orig": [
   "Eucalyptus on its own is calm and elegant.",
   "Round gray-green leaves, a scattering of white berries and a few big pinecones circle a white door in this simple wreath. There is no ribbon.",
   "It looks as good in January as in December.",
   "Faux holds its color better in sun than real."
  ]
 },
 {
  "n": 12,
  "title": "Choose a Flocked Wreath and a Soft Bow",
  "paras": [
   "Snow without the cold.",
   "Thick frosted branches and white berries wrap around cones here, tied with one wide cream satin bow.",
   "<ul><li>Cream looks softer than pure white against frost.</li><li>Flocking sheds, so shake the wreath outside before you hang it and keep it off a dark doormat.</li></ul>"
  ],
  "key": "wreath-11",
  "_orig": [
   "Snow without the cold.",
   "Thick frosted branches and white berries wrap around cones here, tied with one wide cream satin bow.",
   "Cream looks softer than pure white against frost.",
   "Flocking sheds, so shake the wreath outside before you hang it and keep it off a dark doormat."
  ]
 },
 {
  "n": 13,
  "title": "Add Shimmer, Not Glitter",
  "paras": [
   "<p><strong>A white palette feels crisp.</strong> Pine and frosted leaves are mixed here with white poinsettias, snowy berries, pinecones and silver baubles.</p>",
   "<ul><li>Hang it where daylight can catch the metallic pieces.</li><li>Use shatterproof baubles outside. Wind will test everything.</li></ul>"
  ],
  "key": "wreath-05",
  "_orig": [
   "A white palette feels crisp.",
   "Pine and frosted leaves are mixed here with white poinsettias, snowy berries, pinecones and silver baubles.",
   "Hang it where daylight can catch the metallic pieces.",
   "Use shatterproof baubles outside. Wind will test everything."
  ]
 },
 {
  "n": 14,
  "title": "Soften Sparkle With Burlap",
  "paras": [
   "Rustic burlap tames sparkle. Silver ornaments, white berries and frosted pinecones sit among evergreen here, with a loose gold-flecked mesh bow in tan.",
   "The mix of rough and shiny is what makes it work. Wired mesh holds its shape in wind."
  ],
  "key": "wreath-10",
  "_orig": [
   "Rustic burlap tames sparkle.",
   "Silver ornaments, white berries and frosted pinecones sit among evergreen here, with a loose gold-flecked mesh bow in tan.",
   "The mix of rough and shiny is what makes it work.",
   "Wired mesh holds its shape in wind."
  ]
 },
 {
  "n": 15,
  "title": "Fill the Middle With a Sign",
  "paras": [
   "A round sign fills an empty center.",
   "A white let it snow plaque sits inside a ring of eucalyptus, white poinsettias, pinecones and snowy berries on this dark door.",
   "Pick wording that suits you and the wreath will feel personal.",
   "Attach the sign with wire from behind so it hangs straight."
  ],
  "key": "wreath-20",
  "_orig": [
   "A round sign fills an empty center.",
   "A white let it snow plaque sits inside a ring of eucalyptus, white poinsettias, pinecones and snowy berries on this dark door.",
   "Pick wording that suits you and the wreath will feel personal.",
   "Attach the sign with wire from behind so it hangs straight."
  ]
 },
 {
  "n": 16,
  "title": "Go Coastal",
  "paras": [
   "<p><strong>Christmas by the sea doesn't need red and green.</strong> A snow-flocked wreath is dotted with white starfish and tied with a soft white satin bow on a white door.</p>",
   "The neutral palette keeps it calm and airy.",
   "Use resin starfish outdoors. Real ones go brittle in the cold."
  ],
  "key": "wreath-22",
  "_orig": [
   "Christmas by the sea doesn't need red and green.",
   "A snow-flocked wreath is dotted with white starfish and tied with a soft white satin bow on a white door.",
   "The neutral palette keeps it calm and airy.",
   "Use resin starfish outdoors. Real ones go brittle in the cold."
  ]
 },
 {
  "n": 17,
  "title": "Go Gilded",
  "paras": [
   "Gold is the shortcut to a glowing door.",
   "Metallic leaves, gold and ivory baubles, frosted branches and tiny lights fill a pine base here.",
   "<ul><li>A gray or white door shows them off best.</li><li>Put the lights on a timer so you don't have to remember.</li></ul>"
  ],
  "key": "wreath-08",
  "_orig": [
   "Gold is the shortcut to a glowing door.",
   "Metallic leaves, gold and ivory baubles, frosted branches and tiny lights fill a pine base here.",
   "A gray or white door shows them off best.",
   "Put the lights on a timer so you don't have to remember."
  ]
 },
 {
  "n": 18,
  "title": "Choose Poinsettias in a Soft Metallic",
  "paras": [
   "Poinsettias don't have to be red.",
   "Champagne-gold flowers and glittered ornaments gather at the bottom of this wreath, with a large cream ribbon bow at the top.",
   "The soft glow looks rich, not loud. It suits a white door where nothing competes."
  ],
  "key": "wreath-09",
  "_orig": [
   "Poinsettias don't have to be red.",
   "Champagne-gold flowers and glittered ornaments gather at the bottom of this wreath, with a large cream ribbon bow at the top.",
   "The soft glow looks rich, not loud.",
   "It suits a white door where nothing competes."
  ]
 },
 {
  "n": 19,
  "title": "Try Earthy Browns",
  "paras": [
   "Warm browns feel like a fresh change.",
   "Rust-brown magnolias, ivory and gold leaves, amber berry sprays and a wide cream velvet bow sit in front of a black door here.",
   "<p><strong>Quick tip:</strong> The earthy palette feels like winter without leaning on red.</p>",
   "Cream and brown together look soft and expensive."
  ],
  "key": "wreath-13",
  "_orig": [
   "Warm browns feel like a fresh change.",
   "Rust-brown magnolias, ivory and gold leaves, amber berry sprays and a wide cream velvet bow sit in front of a black door here.",
   "The earthy palette feels like winter without leaning on red.",
   "Cream and brown together look soft and expensive."
  ]
 },
 {
  "n": 20,
  "title": "Layer Metallics",
  "paras": [
   "This is a sibling to the brown magnolia wreath, with a bit more shine. Copper blossoms, gold eucalyptus leaves and speckled berry sprays wrap a dark green base, finished with a cream velvet bow.",
   "Metallics glow on a dark door.",
   "Step back and check the shape. A few stems should reach out for movement."
  ],
  "key": "wreath-25",
  "_orig": [
   "This is a sibling to the brown magnolia wreath, with a bit more shine.",
   "Copper blossoms, gold eucalyptus leaves and speckled berry sprays wrap a dark green base, finished with a cream velvet bow.",
   "Metallics glow on a dark door.",
   "Step back and check the shape. A few stems should reach out for movement."
  ]
 },
 {
  "n": 21,
  "title": "Go Black and Gold",
  "paras": [
   "For maximum glam, go dark.",
   "Gold magnolia leaves frame bunches of black and gold ribbon here, some printed with snowflakes, with black and gold baubles on a teal door. Mixing textures gives it depth.",
   "It's bold, so keep the rest of the porch simple."
  ],
  "key": "wreath-23",
  "_orig": [
   "For maximum glam, go dark.",
   "Gold magnolia leaves frame bunches of black and gold ribbon here, some printed with snowflakes, with black and gold baubles on a teal door.",
   "Mixing textures gives it depth.",
   "It's bold, so keep the rest of the porch simple."
  ]
 },
 {
  "n": 22,
  "title": "Use Baubles as the Wreath",
  "paras": [
   "Baubles can be the wreath.",
   "Big red and gold ornaments sit among red berries, gold glitter sprigs, cedar and eucalyptus on a warm wooden door.",
   "<ul><li>The colors are classic Christmas, and the gold keeps it from feeling plain.</li><li>Use shatterproof ornaments and wire each one on twice.</li></ul>"
  ],
  "key": "wreath-18",
  "_orig": [
   "Baubles can be the wreath.",
   "Big red and gold ornaments sit among red berries, gold glitter sprigs, cedar and eucalyptus on a warm wooden door.",
   "The colors are classic Christmas, and the gold keeps it from feeling plain.",
   "Use shatterproof ornaments and wire each one on twice."
  ]
 },
 {
  "n": 23,
  "title": "Make It Sweet",
  "paras": [
   "<p><strong>Candy canes are pure fun.</strong> A frosted wreath here holds mini candy canes, red berries and pinecones, with a big red and white striped bow and a round Merry Christmas sign on a slate-blue door.</p>",
   "<ul><li>The blue door makes the red pop.</li><li>Use plastic candy canes outside, because real ones melt.</li></ul>"
  ],
  "key": "wreath-06",
  "_orig": [
   "Candy canes are pure fun.",
   "A frosted wreath here holds mini candy canes, red berries and pinecones, with a big red and white striped bow and a round Merry Christmas sign on a slate-blue door.",
   "The blue door makes the red pop.",
   "Use plastic candy canes outside, because real ones melt."
  ]
 },
 {
  "n": 24,
  "title": "Hang Gingerbread",
  "paras": [
   "Gingerbread says home for the holidays. Flocked pine is topped here with gingerbread cutouts and a red and cream striped bow printed with gingerbread men, on a sage green door.",
   "String lights around the door make the whole scene glow. Seal paper or wood cookies with clear spray before hanging outside."
  ],
  "key": "wreath-21",
  "_orig": [
   "Gingerbread says home for the holidays.",
   "Flocked pine is topped here with gingerbread cutouts and a red and cream striped bow printed with gingerbread men, on a sage green door.",
   "String lights around the door make the whole scene glow.",
   "Seal paper or wood cookies with clear spray before hanging outside."
  ]
 },
 {
  "n": 25,
  "title": "Soften the Look With Blush",
  "paras": [
   "Pink and Christmas pair surprisingly well.",
   "Dark pine is brightened here with blush poinsettias, pink and silver baubles, white berries, frosted stars and tiny crystals.",
   "It feels playful, modern and a little dreamy.",
   "Silver keeps the pink from looking too sweet."
  ],
  "key": "wreath-24",
  "_orig": [
   "Pink and Christmas pair surprisingly well.",
   "Dark pine is brightened here with blush poinsettias, pink and silver baubles, white berries, frosted stars and tiny crystals.",
   "It feels playful, modern and a little dreamy.",
   "Silver keeps the pink from looking too sweet."
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
<p>The wreath is the first thing anyone sees when they walk up to your door.</p>
<p>It takes a few minutes to hang, yet it changes how the whole entrance feels, which makes it the highest-impact piece of holiday decor you can buy.</p>
<p>The best wreaths are built around one strong idea, like a bold plaid bow, a cluster of pinecones or an all-white palette. Here are the basics I check first, then 25 wreaths to borrow from.</p>
${photo("hero")}

<h2>Five Things to Check Before You Hang a Wreath</h2>
<p><strong>Size.</strong> Aim for about two-thirds the width of the door. A small wreath on a big door looks lost.</p>
<p><strong>Height.</strong> Hang it at eye level, or a little above. Look at your door from the walkway, not from inside.</p>
<p><strong>Hanger.</strong> An over-the-door hanger is easiest. Put a bit of felt on the door side so the paint doesn't scuff.</p>
<p><strong>Weather.</strong> Outside, choose outdoor-rated ribbon, shatterproof baubles and a covered porch if you can.</p>
<p><strong>Color.</strong> Think about your door. A rich wreath looks best on a pale door, and a pale wreath on a dark one.</p>

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Common Wreath Mistakes (and Fixes)</h2>
<p><strong>Choosing one that is too small.</strong> If in doubt, go bigger.</p>
<p><strong>A flat, floppy bow.</strong> Use wired ribbon, make large loops and fluff them.</p>
<p><strong>Too many accents.</strong> A single standout detail beats five competing ones.</p>
<p><strong>Forgetting the back of the wreath.</strong> Wind can spin it. Wire it to the hanger at two points.</p>
<p>Pick the one that makes you smile on the way to your own front door. That's really the whole point.</p>
`;

module.exports = { body };
