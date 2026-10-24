// Body content for "25 Christmas Wreath Ideas for Every Front Door".
// Converted from the Dwelling Dream "25 Christmas Wreath Ideas" source: all
// text rewritten from scratch and the wreaths regrouped (classic greens and
// plaid, natural and rustic, snowy white, gold glam, playful). Photos are
// credited to their Pinterest pins; the supplied Amazon product pair stays
// under each photo. Ends on text.
// Photos: images/christmas-wreath-ideas/, products: ...-products/.

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
  "title": "Start With a Full, Classic Holly Wreath",
  "paras": [
   "If you want a wreath nobody will ever call out of style, begin here.",
   "This one is packed with dark evergreen, clusters of bright red berries, silver-tipped pinecones and glossy holly leaves, with one long red velvet ribbon trailing down a white door.",
   "The ribbon is the only extra, and that is why it works.",
   "Keep it dense: a thin wreath on a big door looks lost."
  ],
  "key": "wreath-02"
 },
 {
  "n": 2,
  "title": "Hang a Pine and Berry Wreath With a Door Sign",
  "paras": [
   "A dark door makes the greens look richer.",
   "Long pine needles, red berry sprays and a few pinecones fan out here, finished with a bow in red, green and cream plaid and a small gold JOY hanger above.",
   "The sign adds a message without adding weight to the wreath.",
   "Choose a hanger that matches your hardware so it looks planned."
  ],
  "key": "wreath-03"
 },
 {
  "n": 3,
  "title": "Go Natural With Pinecones and Pine",
  "paras": [
   "Not every wreath needs a ribbon.",
   "This round wreath is simply layers of pine, fern-like sprigs and big brown pinecones against a black door.",
   "The shapes and textures are interesting enough on their own.",
   "It is also the easiest to leave up through January, since nothing on it says Christmas out loud."
  ],
  "key": "wreath-04"
 },
 {
  "n": 4,
  "title": "Tie a Red Plaid Bow on a Grapevine Wreath",
  "paras": [
   "A grapevine ring leaves lots of room for a bold bow.",
   "This one is weighted toward one side, with pine, pinecones, red berries and a big red-and-green tartan bow, so the bare vine shows on the other.",
   "The uneven design feels hand-made, in a good way.",
   "Hang it slightly off-center on a black door and the red really stands out."
  ],
  "key": "wreath-12"
 },
 {
  "n": 5,
  "title": "Mix Eucalyptus and Berries With a Tartan Bow",
  "paras": [
   "Eucalyptus brings a cool, silvery note to Christmas greens.",
   "Soft round leaves, red berry sprays and pine are gathered at one side of this wreath, with a tartan bow in red and navy and long tails that nearly sweep the door.",
   "The mix feels fresh next to a traditional red-and-green scheme.",
   "Let the ribbon tails run long for more drama."
  ],
  "key": "wreath-01"
 },
 {
  "n": 6,
  "title": "Add Buffalo Check and Jingle Bells",
  "paras": [
   "This is the rustic cabin version of a wreath.",
   "Frosted pine, red-and-black checked berries, pinecones and silver jingle bells are wound with rough twine on a plank wooden door.",
   "The bells give it a little sound and a lot of charm.",
   "Keep everything in the same checked and natural palette so it feels cozy, not busy."
  ],
  "key": "wreath-17"
 },
 {
  "n": 7,
  "title": "Hang Gold Bells From a Plaid Bow",
  "paras": [
   "Let a few oversized bells do the talking.",
   "Three brass bells swing from twine below a large bow in red, green and cream plaid, set against cedar, eucalyptus, pinecones and red berries.",
   "The bells make a great focal point.",
   "They look especially good on a pale siding wall or a white door."
  ],
  "key": "wreath-19"
 },
 {
  "n": 8,
  "title": "Tuck in Dried Oranges and Cinnamon",
  "paras": [
   "The simplest wreaths often look the best.",
   "A full, soft green wreath here holds just a few touches: dried orange slices, a cinnamon stick, a pinecone and a loose velvet ribbon in tan.",
   "Everything adds a little scent and warmth.",
   "Dry your own orange slices in the oven and wire them in."
  ],
  "key": "wreath-14"
 },
 {
  "n": 9,
  "title": "Pair Cotton Bolls With Red Berries",
  "paras": [
   "Cotton has a soft, farmhouse feel that suits Christmas.",
   "A loose, twiggy ring is dotted with white cotton bolls, rust-colored leaves and bright red berry sprays on a whitewashed plank wall.",
   "It is airy, lightweight and unusual.",
   "This one suits a country or modern farmhouse entry."
  ],
  "key": "wreath-15"
 },
 {
  "n": 10,
  "title": "Craft a Wood Slice Wreath",
  "paras": [
   "For a handmade look, build a ring from wood slices.",
   "Round birch slices form this open wreath, with a deep red hydrangea, burlap ribbon and trailing greenery in the lower corner.",
   "A twine loop at the top keeps it hanging straight.",
   "It works well indoors on a wall or on a covered porch."
  ],
  "key": "wreath-16"
 },
 {
  "n": 11,
  "title": "Hang an Eucalyptus Wreath With Pinecones",
  "paras": [
   "Eucalyptus on its own is calm and elegant.",
   "Round gray-green leaves, a scattering of white berries and a few big pinecones circle a white door in this simple design.",
   "There is no ribbon at all.",
   "It looks as good in January as it does in December."
  ],
  "key": "wreath-07"
 },
 {
  "n": 12,
  "title": "Choose a Flocked Wreath With a Cream Bow",
  "paras": [
   "Snow without the cold.",
   "Thick, frosted branches and white berries wrap around a wreath dotted with pinecones, tied with one wide cream satin bow.",
   "Cream looks softer than pure white against the frost.",
   "It is a lovely match for a pale blue or white door."
  ],
  "key": "wreath-11"
 },
 {
  "n": 13,
  "title": "Add White Poinsettias and Silver Ornaments",
  "paras": [
   "A white palette feels crisp and clean.",
   "Pine and frosted leaves in this design are mixed with white poinsettias, snowy berries, pinecones and silver baubles.",
   "The silver adds a little shimmer without going full glam.",
   "Hang it where daylight can catch the metallic pieces."
  ],
  "key": "wreath-05"
 },
 {
  "n": 14,
  "title": "Wrap a White and Silver Wreath in Burlap Mesh",
  "paras": [
   "Rustic burlap softens all that sparkle.",
   "Silver ornaments, white berries and frosted pinecones sit among evergreen on a gray door, with a loose gold-flecked mesh bow in tan.",
   "The mix of rough and shiny is the charm.",
   "It is an easy way to dress up a natural wreath."
  ],
  "key": "wreath-10"
 },
 {
  "n": 15,
  "title": "Put a Let It Snow Sign in the Center",
  "paras": [
   "A round sign can fill the empty middle of a wreath.",
   "Here a white 'let it snow' plaque sits inside a ring of eucalyptus, white poinsettias, pinecones and snowy berries on a dark door.",
   "The sign gives it a playful message.",
   "Pick wording that suits you and the wreath will feel personal."
  ],
  "key": "wreath-20"
 },
 {
  "n": 16,
  "title": "Go Coastal With Starfish",
  "paras": [
   "Christmas by the sea does not have to be red and green.",
   "A snow-flocked wreath is dotted with white starfish and tied with a soft white satin bow on a white door.",
   "The neutral palette keeps it calm.",
   "It is perfect for a beach house, or anyone who loves a pale, airy look."
  ],
  "key": "wreath-22"
 },
 {
  "n": 17,
  "title": "Go Gilded With Champagne Ornaments",
  "paras": [
   "Gold is the shortcut to a glowing door.",
   "This wreath mixes metallic leaves, gold and ivory baubles, frosted branches and tiny lights on a base of pine.",
   "The leaves and ornaments catch the light from every angle.",
   "A gray or white door shows them off best."
  ],
  "key": "wreath-08"
 },
 {
  "n": 18,
  "title": "Pair Gold Poinsettias With a Cream Bow",
  "paras": [
   "Poinsettias do not have to be red.",
   "Champagne-gold flowers and glittered ornaments gather at the bottom of this wreath, with a large cream ribbon bow at the top.",
   "The soft glow looks rich but not loud.",
   "It suits a white door where nothing competes."
  ],
  "key": "wreath-09"
 },
 {
  "n": 19,
  "title": "Choose Brown Velvet Magnolias",
  "paras": [
   "Warm browns feel like a fresh change.",
   "Rust-brown magnolia blossoms, ivory and gold leaves, amber berry sprays and a wide cream velvet bow sit in front of a black door.",
   "The earthy palette feels winter-appropriate without leaning on red.",
   "Cream and brown together look soft and expensive."
  ],
  "key": "wreath-13"
 },
 {
  "n": 20,
  "title": "Layer Copper and Gold Metallics",
  "paras": [
   "This is a sibling to the brown magnolia wreath, with a bit more shine.",
   "Copper blossoms, gold eucalyptus leaves and speckled berry sprays wrap a dark green base, finished with a cream velvet bow.",
   "The metallics glow on a dark door.",
   "Stand back and check the shape: a few stems should reach out for movement."
  ],
  "key": "wreath-25"
 },
 {
  "n": 21,
  "title": "Go Black and Gold With Mixed Ribbons",
  "paras": [
   "For maximum glam, go dark.",
   "Gold magnolia leaves frame bunches of black and gold ribbon, some printed with snowflakes, with black and gold baubles tucked in on a teal door.",
   "The textures give it depth.",
   "It is bold, so keep the rest of your porch simple."
  ],
  "key": "wreath-23"
 },
 {
  "n": 22,
  "title": "Cluster Red and Gold Ornaments",
  "paras": [
   "Baubles can be the wreath.",
   "Big red and gold ornaments sit among red berries, gold glitter sprigs and cedar and eucalyptus on a warm wooden door.",
   "The colors are classic Christmas, but the gold keeps it from feeling plain.",
   "Use shatterproof ornaments so the wind cannot do any damage."
  ],
  "key": "wreath-18"
 },
 {
  "n": 23,
  "title": "Make It Sweet With Candy Canes",
  "paras": [
   "Candy cane stripes are pure fun.",
   "A frosted wreath here holds mini candy canes, red berries and pinecones, with a big red-and-white striped bow and a round Merry Christmas sign on a slate-blue door.",
   "The blue door makes the red pop.",
   "Add a curl of ribbon for movement."
  ],
  "key": "wreath-06"
 },
 {
  "n": 24,
  "title": "Hang Gingerbread Cookies and Striped Ribbon",
  "paras": [
   "Gingerbread says home for the holidays.",
   "Flocked pine in this wreath is topped with gingerbread cutouts and a red-and-cream striped bow with gingerbread-print ribbon, on a sage green door.",
   "The sweet details are all in the ribbon.",
   "String lights around the door make the whole scene glow."
  ],
  "key": "wreath-21"
 },
 {
  "n": 25,
  "title": "Soften the Look With Blush Pink",
  "paras": [
   "Pink and Christmas pair surprisingly well.",
   "Dark pine is brightened with blush poinsettias, pink and silver baubles, white berries, frosted stars and tiny crystals on a white door.",
   "It feels playful, modern and a little dreamy.",
   "Silver keeps the pink from looking too sweet."
  ],
  "key": "wreath-24"
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
<p>The wreath is the first thing anyone sees when they walk up to your door.</p>
<p>It takes a few minutes to hang, yet it changes how the whole entrance feels.</p>
<p>The best ones are built around a single strong idea, like a bold plaid bow, a cluster of pinecones or an all-white palette, instead of every holiday element at once.</p>
<p>These 25 Christmas wreath ideas run from classic pine and berries to glam black and gold, so there is a style for every kind of door.</p>
${photo("hero")}

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>How to Choose the One for Your Door</h2>
<p>You do not need to love all 25. You only need the one that fits your door color, your porch and how bold you want to go this year.</p>
<p>Start with the base material. Pine, eucalyptus and flocked greenery all read very differently, and the base sets the tone for every ribbon and accent you add after.</p>
<p>A wreath with one standout detail, like an oversized bow or a cluster of bells, almost always looks better than one balancing five accents at once.</p>
<p>Whatever you pick, choose the one that makes you smile on the way to your own front door. That is the whole point.</p>
`;

module.exports = { body };
