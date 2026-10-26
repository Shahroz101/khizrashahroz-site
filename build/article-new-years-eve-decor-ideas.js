// Body content for "30 New Year's Eve Decor Ideas for a Party That Feels Like Midnight". Converted from the Dwelling Dream source in the
// advice-led voice (see memory advice-led-article-voice): all text new, ideas
// regrouped by theme. Photos credited to their Pinterest pins. Ends on text.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "new-years-eve-decor-ideas";
const PRODUCT_DIR = "new-years-eve-decor-ideas-products";

const PHOTOS = {
 "nye-01": {
  "w": 736,
  "h": 1308,
  "pin": "https://www.pinterest.com/pin/1135259018627803427/",
  "label": "Build an Entrance With a Backdrop and Big Numbers",
  "alt": "A gold sequin backdrop with black and gold balloons and a lit 2027 marquee sign behind a velvet rope"
 },
 "nye-05": {
  "w": 735,
  "h": 919,
  "pin": "https://www.pinterest.com/pin/4607886235137899072/",
  "label": "Float Giant Foil Numbers Over a Balloon Base",
  "alt": "Large gold 2027 balloon numbers on a wood floor with a black and gold balloon cluster"
 },
 "nye-12": {
  "w": 1024,
  "h": 1536,
  "pin": "https://www.pinterest.com/pin/6051780744091262/",
  "label": "Hang a Fringe Curtain for an Instant Photo Wall",
  "alt": "A gold tinsel curtain backdrop with gold, black, and confetti balloon clusters on each side"
 },
 "nye-04": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/53339576833582774/",
  "label": "Set Up a Prop Table for the Photos",
  "alt": "A gold fringe photo booth backdrop with a top hat, feather boa, sunglasses, and pampas grass"
 },
 "nye-11": {
  "w": 570,
  "h": 855,
  "pin": "https://www.pinterest.com/pin/270638258846525330/",
  "label": "Arch Balloons Over a Doorway",
  "alt": "A black, gold, and marble balloon arch over a dark doorway with champagne and a cake nearby"
 },
 "nye-27": {
  "w": 1000,
  "h": 1500,
  "pin": "https://www.pinterest.com/pin/6051780746439043/",
  "label": "Cluster Confetti Balloons Beside a Banner",
  "alt": "A cluster of gold confetti balloons beside a Happy New Year balloon banner on a dining table"
 },
 "nye-06": {
  "w": 3024,
  "h": 4032,
  "pin": "https://www.pinterest.com/pin/392094711301935496/",
  "label": "Let Balloons Fill the Ceiling",
  "alt": "A bowl of silver disco ball ornaments and candles on a table with a Christmas tree in the background"
 },
 "nye-15": {
  "w": 737,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/918171442795630530/",
  "label": "String Lights Across the Ceiling",
  "alt": "String lights and hanging ornaments draped across the ceiling beams of a living room"
 },
 "nye-16": {
  "w": 1170,
  "h": 2234,
  "pin": "https://www.pinterest.com/pin/706291154096948103/",
  "label": "Hang Mirror Tinsel Streamers Over the Table",
  "alt": "Silver mirrored tinsel streamers and balloons hanging over a dinner table with place settings"
 },
 "nye-17": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/212513676164484375/",
  "label": "Float Gold and Silver Balloons Over a Candlelit Table",
  "alt": "A cluster of gold confetti balloons over a candlelit dinner table with apples as place accents"
 },
 "nye-24": {
  "w": 736,
  "h": 1312,
  "pin": "https://www.pinterest.com/pin/3588874698215651/",
  "label": "Put an Oversized Clock Where Everyone Can See It",
  "alt": "A large wall clock surrounded by star cutouts and string lights above a crowd at a party"
 },
 "nye-28": {
  "w": 736,
  "h": 1313,
  "pin": "https://www.pinterest.com/pin/195132596349895635/",
  "label": "Take the Lights Outside",
  "alt": "Lighted snowflake decorations and string lights hanging along a balcony railing at night"
 },
 "nye-02": {
  "w": 574,
  "h": 1024,
  "pin": "https://www.pinterest.com/pin/463026405462776609/",
  "label": "Set a Gold and Black Table",
  "alt": "A gold and black place setting with champagne flutes and warm fairy lights woven across the table"
 },
 "nye-09": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/1125899975626409493/",
  "label": "Set a Candlelit Table With White Roses",
  "alt": "A candlelit table with white roses, tealight candles, and gold flatware"
 },
 "nye-07": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/945404146817198578/",
  "label": "Fill a Bowl With Disco Balls",
  "alt": "Gold 2027 balloon numbers and a black and gold balloon cluster behind a velvet security rope"
 },
 "nye-08": {
  "w": 896,
  "h": 1280,
  "pin": "https://www.pinterest.com/pin/861243128790595819/",
  "label": "Make a Starry Night Centerpiece",
  "alt": "Mason jars filled with warm fairy lights surrounded by foil star cutouts on a dark table"
 },
 "nye-23": {
  "w": 1179,
  "h": 1763,
  "pin": "https://www.pinterest.com/pin/58476495159920905/",
  "label": "Group Ornaments and Candles on a Tray",
  "alt": "A tray of gold ornament balls, a glittered star, and candles on a coffee table"
 },
 "nye-29": {
  "w": 236,
  "h": 343,
  "pin": "https://www.pinterest.com/pin/16255248651801452/",
  "label": "Scatter Confetti Down the Table",
  "alt": "A white table runner scattered with colorful confetti between place settings"
 },
 "nye-30": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/157555686960440608/",
  "label": "Light a Sparkler Centerpiece",
  "alt": "A sparkler-shaped light centerpiece beside champagne bottles and candles on a table at dusk"
 },
 "nye-13": {
  "w": 992,
  "h": 1488,
  "pin": "https://www.pinterest.com/pin/287456388711754908/",
  "label": "Light the Living Room, Not Just the Table",
  "alt": "A silver fringe curtain backdrop with mini disco balls scattered across a set dinner table"
 },
 "nye-14": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/507288345548744176/",
  "label": "Build a Cozy Table by the Sofa",
  "alt": "A string-light New Year sign glowing above a cozy living room dinner table with champagne flutes"
 },
 "nye-25": {
  "w": 1365,
  "h": 1820,
  "pin": "https://www.pinterest.com/pin/1004724998133578178/",
  "label": "Set Up a Floor Picnic Under a Lace Teepee",
  "alt": "A lace teepee with a Happy New Year banner over a low dinner table set with disco ball accents"
 },
 "nye-10": {
  "w": 756,
  "h": 1008,
  "pin": "https://www.pinterest.com/pin/1337074888588572/",
  "label": "Put Together a Dessert and Candy Buffet",
  "alt": "A gold and black dessert table with cupcakes, cookies, pretzels, and Ferrero Rocher chocolates"
 },
 "nye-19": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/4596767931455985728/",
  "label": "Set Out a Snack Table With Warm Lights",
  "alt": "A snack table with popcorn, pretzels, and chocolate beside gold and silver balloons and string lights"
 },
 "nye-26": {
  "w": 768,
  "h": 1365,
  "pin": "https://www.pinterest.com/pin/184788390957877449/",
  "label": "Pour Champagne With a Gold Leaf Board",
  "alt": "A charcuterie board with grapes, figs, chocolate, and gold leaf garnish beside champagne"
 },
 "nye-18": {
  "w": 768,
  "h": 1241,
  "pin": "https://www.pinterest.com/pin/1113374339162992450/",
  "label": "Style a Bar Cart",
  "alt": "A bar cart strung with an NYE 2027 banner, champagne, and spirits in front of a lit Christmas tree"
 },
 "nye-03": {
  "w": 736,
  "h": 920,
  "pin": "https://www.pinterest.com/pin/611434086956972448/",
  "label": "Display the Countdown on the Wall",
  "alt": "A cardboard 2026 sign hanging above a wall clock with pocket watches, candles, and greenery"
 },
 "nye-20": {
  "w": 500,
  "h": 850,
  "pin": "https://www.pinterest.com/pin/1688918605711246/",
  "label": "Fill a Resolutions Jar",
  "alt": "A glass jar labeled resolutions filled with folded notes next to a pen and candles"
 },
 "nye-21": {
  "w": 848,
  "h": 1264,
  "pin": "https://www.pinterest.com/pin/1037657570417359390/",
  "label": "Make a Vision Board for the New Year",
  "alt": "A large 2027 vision board collage with travel photos and motivational words above a bed"
 },
 "nye-22": {
  "w": 736,
  "h": 981,
  "pin": "https://www.pinterest.com/pin/23714335537172753/",
  "label": "Cut Paper Stars From Old Book Pages",
  "alt": "Garlands of paper stars cut from old book pages hanging in front of a window"
 },
 "hero": {
  "w": 736,
  "h": 1308,
  "pin": "https://www.pinterest.com/pin/1135259018627803427/",
  "label": "Build an Entrance With a Backdrop and Big Numbers",
  "alt": "A gold sequin backdrop with black and gold balloons and a lit 2027 marquee sign behind a velvet rope"
 }
};

const PRODUCTS = {
 "nye-01": [
  {
   "asin": "B0D5XQ29LB",
   "title": "Gold Light-Up Marquee Number",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B09NY6KG12",
   "title": "Gold Shimmer Sequin Wall Backdrop, 12-Pack",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-05": [
  {
   "asin": "B0D5XQ29LB",
   "title": "Gold Light-Up Marquee Number",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0F9SCK9VR",
   "title": "Black and Gold Balloon Garland Arch Kit",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-12": [
  {
   "asin": "B07VTR9Z9C",
   "title": "Gold Metallic Tinsel Fringe Curtain, 4-Pack",
   "w": 1081,
   "h": 1211
  },
  {
   "asin": "B0F9SCK9VR",
   "title": "Black and Gold Balloon Garland Arch Kit",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-04": [
  {
   "asin": "B08FYMCLVY",
   "title": "Gold Fringe Curtain Backdrop",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B00QMV9Y4Y",
   "title": "New Year's Eve Photo Booth Props Kit",
   "w": 1497,
   "h": 1500
  }
 ],
 "nye-11": [
  {
   "asin": "B0F9SCK9VR",
   "title": "Black and Gold Balloon Garland Arch Kit",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0DZ6KLKRR",
   "title": "Champagne Ice Bucket Chiller",
   "w": 1034,
   "h": 1221
  }
 ],
 "nye-27": [
  {
   "asin": "B0DGFVC5KH",
   "title": "Happy New Year Gold Foil Balloon Banner",
   "w": 1500,
   "h": 1174
  },
  {
   "asin": "B0CHBKMGQD",
   "title": "Clear Balloons with Gold Confetti, 12-Inch",
   "w": 1500,
   "h": 1375
  }
 ],
 "nye-06": [
  {
   "asin": "B0CHBKMGQD",
   "title": "Clear Balloons with Gold Confetti, 12-Inch",
   "w": 1500,
   "h": 1375
  },
  {
   "asin": "B0F9SCK9VR",
   "title": "Black and Gold Balloon Garland Arch Kit",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-15": [
  {
   "asin": "B0FG7QPMVM",
   "title": "Warm White Fairy String Lights, 33 ft",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B092R6JG4C",
   "title": "Gold Ball Ornaments, 16-Piece Set",
   "w": 996,
   "h": 1000
  }
 ],
 "nye-16": [
  {
   "asin": "B0DG5PL2J7",
   "title": "Silver Foil Fringe Curtain Backdrop",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CHK64VZW",
   "title": "Mini Silver Disco Balls, 54-Piece Set",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-17": [
  {
   "asin": "B0CHBKMGQD",
   "title": "Clear Balloons with Gold Confetti, 12-Inch",
   "w": 1500,
   "h": 1375
  },
  {
   "asin": "B00J5E62HC",
   "title": "Unscented Tealight Candles, 200-Count",
   "w": 1500,
   "h": 857
  }
 ],
 "nye-24": [
  {
   "asin": "B0CQYLW3BG",
   "title": "36-Inch Oversized Wall Clock",
   "w": 1311,
   "h": 1500
  },
  {
   "asin": "B0FG7QPMVM",
   "title": "Warm White Fairy String Lights, 33 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-28": [
  {
   "asin": "B08CZ84FTZ",
   "title": "Solar Snowflake LED String Lights",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B07W7LVF15",
   "title": "Natural Pinecones, 2 lb Bag",
   "w": 1000,
   "h": 1000
  }
 ],
 "nye-02": [
  {
   "asin": "B09L88ZM1K",
   "title": "Gold Rim Champagne Flutes, Set of 6",
   "w": 1272,
   "h": 1451
  },
  {
   "asin": "B0FG7QPMVM",
   "title": "Warm White Fairy String Lights, 33 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-09": [
  {
   "asin": "B00J5E62HC",
   "title": "Unscented Tealight Candles, 200-Count",
   "w": 1500,
   "h": 857
  },
  {
   "asin": "B09L88ZM1K",
   "title": "Gold Rim Champagne Flutes, Set of 6",
   "w": 1272,
   "h": 1451
  }
 ],
 "nye-07": [
  {
   "asin": "B0CHK64VZW",
   "title": "Mini Silver Disco Balls, 54-Piece Set",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B00J5E62HC",
   "title": "Unscented Tealight Candles, 200-Count",
   "w": 1500,
   "h": 857
  }
 ],
 "nye-08": [
  {
   "asin": "B0FG7QPMVM",
   "title": "Warm White Fairy String Lights, 33 ft",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B09D8ZK4CQ",
   "title": "Metallic Gold Table Confetti Scatter",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-23": [
  {
   "asin": "B092R6JG4C",
   "title": "Gold Ball Ornaments, 16-Piece Set",
   "w": 996,
   "h": 1000
  },
  {
   "asin": "B00J5E62HC",
   "title": "Unscented Tealight Candles, 200-Count",
   "w": 1500,
   "h": 857
  }
 ],
 "nye-29": [
  {
   "asin": "B09D8ZK4CQ",
   "title": "Metallic Gold Table Confetti Scatter",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B00J5E62HC",
   "title": "Unscented Tealight Candles, 200-Count",
   "w": 1500,
   "h": 857
  }
 ],
 "nye-30": [
  {
   "asin": "B0H4179KJZ",
   "title": "LED Firework Sparkler Centerpiece Light",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B07W7LVF15",
   "title": "Natural Pinecones, 2 lb Bag",
   "w": 1000,
   "h": 1000
  }
 ],
 "nye-13": [
  {
   "asin": "B09L88ZM1K",
   "title": "Gold Rim Champagne Flutes, Set of 6",
   "w": 1272,
   "h": 1451
  },
  {
   "asin": "B092R6JG4C",
   "title": "Gold Ball Ornaments, 16-Piece Set",
   "w": 996,
   "h": 1000
  }
 ],
 "nye-14": [
  {
   "asin": "B0FG7QPMVM",
   "title": "Warm White Fairy String Lights, 33 ft",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B09L88ZM1K",
   "title": "Gold Rim Champagne Flutes, Set of 6",
   "w": 1272,
   "h": 1451
  }
 ],
 "nye-25": [
  {
   "asin": "B07FMTGW44",
   "title": "White Lace Teepee Tent",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0CHK64VZW",
   "title": "Mini Silver Disco Balls, 54-Piece Set",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-10": [
  {
   "asin": "B0CHBKMGQD",
   "title": "Clear Balloons with Gold Confetti, 12-Inch",
   "w": 1500,
   "h": 1375
  },
  {
   "asin": "B076CLSQ6X",
   "title": "Slate Serving Board and Tool Set",
   "w": 1500,
   "h": 1034
  }
 ],
 "nye-19": [
  {
   "asin": "B0F9SCK9VR",
   "title": "Black and Gold Balloon Garland Arch Kit",
   "w": 1500,
   "h": 1500
  },
  {
   "asin": "B0FG7QPMVM",
   "title": "Warm White Fairy String Lights, 33 ft",
   "w": 1500,
   "h": 1500
  }
 ],
 "nye-26": [
  {
   "asin": "B076CLSQ6X",
   "title": "Slate Serving Board and Tool Set",
   "w": 1500,
   "h": 1034
  },
  {
   "asin": "B0DZ6KLKRR",
   "title": "Champagne Ice Bucket Chiller",
   "w": 1034,
   "h": 1221
  }
 ],
 "nye-18": [
  {
   "asin": "B0DGFVC5KH",
   "title": "Happy New Year Gold Foil Balloon Banner",
   "w": 1500,
   "h": 1174
  },
  {
   "asin": "B0DZ6KLKRR",
   "title": "Champagne Ice Bucket Chiller",
   "w": 1034,
   "h": 1221
  }
 ],
 "nye-03": [
  {
   "asin": "B00J5E62HC",
   "title": "Unscented Tealight Candles, 200-Count",
   "w": 1500,
   "h": 857
  },
  {
   "asin": "B0CQYLW3BG",
   "title": "36-Inch Oversized Wall Clock",
   "w": 1311,
   "h": 1500
  }
 ],
 "nye-20": [
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
 "nye-21": [
  {
   "asin": "B0D21ZNLSL",
   "title": "Large Poster Picture Frame, 24x36",
   "w": 1395,
   "h": 1500
  },
  {
   "asin": "B0B9BHGJR5",
   "title": "Framed Cork Bulletin Board, 20x30",
   "w": 1500,
   "h": 1479
  }
 ],
 "nye-22": [
  {
   "asin": "B074W5CL35",
   "title": "Kraft Gift Tags with Twine, 100-Pack",
   "w": 1500,
   "h": 1257
  },
  {
   "asin": "B0FG7QPMVM",
   "title": "Warm White Fairy String Lights, 33 ft",
   "w": 1500,
   "h": 1500
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Build an Entrance With a Backdrop and Big Numbers",
  "paras": [
   "Guests should know the moment they walk in that this is not a regular Saturday.",
   "A wall of gold sequins, oversized lit numbers, black and gold balloons and a velvet rope set up an arrival moment you can't miss.",
   "Put your statement piece where people stop anyway: by the door or opposite it.",
   "Light-up marquee numbers are worth the money. They work as décor, a photo prop and a countdown sign at midnight."
  ],
  "key": "nye-01",
  "_orig": [
   "Guests should know the moment they walk in that this is not a regular Saturday.",
   "A wall of gold sequins, oversized lit numbers, black and gold balloons and a velvet rope set up an arrival moment you can't miss.",
   "Put your statement piece where people stop anyway: by the door or opposite it.",
   "Light-up marquee numbers are worth the money. They work as décor, a photo prop and a countdown sign at midnight."
  ]
 },
 {
  "n": 2,
  "title": "Float Giant Foil Numbers Over a Balloon Base",
  "paras": [
   "<p><strong>A foil number looks expensive and takes minutes to set up.</strong> Gold foil numerals stand on a low cluster of black and gold balloons here, with a bunch of balloons floating beside them against a plain white wall.</p>",
   "Foil holds helium for days, but latex doesn't. Inflate the latex on party day.",
   "Weigh the base down so a draft or a toddler can't send it across the room."
  ],
  "key": "nye-05",
  "_orig": [
   "A foil number looks expensive and takes minutes to set up.",
   "Gold foil numerals stand on a low cluster of black and gold balloons here, with a bunch of balloons floating beside them against a plain white wall.",
   "Foil holds helium for days, but latex doesn't. Inflate the latex on party day.",
   "Weigh the base down so a draft or a toddler can't send it across the room."
  ]
 },
 {
  "n": 3,
  "title": "Hang a Fringe Curtain for an Instant Photo Wall",
  "paras": [
   "A photo wall is the cheapest party upgrade I know.",
   "A silver and gold tinsel curtain hangs from a rod behind a stool and a plant here, with clusters of gold, black and clear balloons on either side.",
   "<ul><li>Hang it from a tension rod or adhesive hooks, and trim the length to just brush the floor.</li><li>Light faces from the front, not from behind, so guests don't turn into silhouettes in the pictures.</li></ul>"
  ],
  "key": "nye-12",
  "_orig": [
   "A photo wall is the cheapest party upgrade I know.",
   "A silver and gold tinsel curtain hangs from a rod behind a stool and a plant here, with clusters of gold, black and clear balloons on either side.",
   "Hang it from a tension rod or adhesive hooks, and trim the length to just brush the floor.",
   "Light faces from the front, not from behind, so guests don't turn into silhouettes in the pictures."
  ]
 },
 {
  "n": 4,
  "title": "Set Up a Prop Table for the Photos",
  "paras": [
   "Props turn a backdrop into a party game.",
   "Gold fringe falls behind a black-draped table here, with a top hat, glitter glasses, a red feather boa and gold bead necklaces ready to grab.",
   "Keep the props in one spot and tell people they're there. Most won't think to ask. A mix of hats and glasses works better than a pile of signs, which only a few people will hold."
  ],
  "key": "nye-04",
  "_orig": [
   "Props turn a backdrop into a party game.",
   "Gold fringe falls behind a black-draped table here, with a top hat, glitter glasses, a red feather boa and gold bead necklaces ready to grab.",
   "Keep the props in one spot and tell people they're there. Most won't think to ask.",
   "A mix of hats and glasses works better than a pile of signs, which only a few people will hold."
  ]
 },
 {
  "n": 5,
  "title": "Arch Balloons Over a Doorway",
  "paras": [
   "A doorway balloon arch frames the party before anyone walks in.",
   "Black, gold, white and marbled balloons curve over a dark door here, with champagne coupes and a small cake on a table below.",
   "<p><strong>Quick tip:</strong> Use a balloon strip or arch kit so the curve holds. Tying them by hand takes patience.</p>",
   "Mix at least three sizes of balloon, which makes it look organic and not like a rainbow."
  ],
  "key": "nye-11",
  "_orig": [
   "A doorway balloon arch frames the party before anyone walks in.",
   "Black, gold, white and marbled balloons curve over a dark door here, with champagne coupes and a small cake on a table below.",
   "Use a balloon strip or arch kit so the curve holds. Tying them by hand takes patience.",
   "Mix at least three sizes of balloon, which makes it look organic and not like a rainbow."
  ]
 },
 {
  "n": 6,
  "title": "Cluster Confetti Balloons Beside a Banner",
  "paras": [
   "Clear balloons with gold confetti feel more luxe than solid colors. A bunch of them floats above a candlelit table here, with a gold Happy New Year banner on the wall behind.",
   "Tie balloons to a weight at the table's end so they stay put.",
   "Put the bunch at one end, not the center, so guests can see each other."
  ],
  "key": "nye-27",
  "_orig": [
   "Clear balloons with gold confetti feel more luxe than solid colors.",
   "A bunch of them floats above a candlelit table here, with a gold Happy New Year banner on the wall behind.",
   "Tie balloons to a weight at the table's end so they stay put.",
   "Put the bunch at one end, not the center, so guests can see each other."
  ]
 },
 {
  "n": 7,
  "title": "Let Balloons Fill the Ceiling",
  "paras": [
   "Looking up should be as good as looking around.",
   "Black and gold balloons float up to the ceiling here, with long metallic ribbons hanging down over an open dance floor. Use helium for the high ones and leave the ribbons long, so they sway when people move.",
   "For a midnight drop, tuck a few balloons in a net above the dance floor and release it on the countdown."
  ],
  "key": "nye-06",
  "_orig": [
   "Looking up should be as good as looking around.",
   "Black and gold balloons float up to the ceiling here, with long metallic ribbons hanging down over an open dance floor.",
   "Use helium for the high ones and leave the ribbons long, so they sway when people move.",
   "For a midnight drop, tuck a few balloons in a net above the dance floor and release it on the countdown."
  ]
 },
 {
  "n": 8,
  "title": "String Lights Across the Ceiling",
  "paras": [
   "Overhead lights make any room feel like a party.",
   "Strings of warm white bulbs cross the ceiling beams here, with a few hanging ornaments in the windows.",
   "<ul><li>Run the strands in a zigzag, about eighteen inches apart, and fix with small clear hooks.</li><li>Put them on a dimmer or a timer so you can lower the glow as the night goes on.</li></ul>"
  ],
  "key": "nye-15",
  "_orig": [
   "Overhead lights make any room feel like a party.",
   "Strings of warm white bulbs cross the ceiling beams here, with a few hanging ornaments in the windows.",
   "Run the strands in a zigzag, about eighteen inches apart, and fix with small clear hooks.",
   "Put them on a dimmer or a timer so you can lower the glow as the night goes on."
  ]
 },
 {
  "n": 9,
  "title": "Hang Mirror Tinsel Streamers Over the Table",
  "paras": [
   "<p><strong>Movement is what makes a room feel alive.</strong> Long silver tinsel streamers and silver balloons hang over a dinner table, and tiny disco balls scatter among the glasses below.</p>",
   "<ul><li>Hang them from the ceiling or a rod at different lengths.</li><li>Make sure they clear the candle flames by a good margin.</li></ul>"
  ],
  "key": "nye-16",
  "_orig": [
   "Movement is what makes a room feel alive.",
   "Long silver tinsel streamers and silver balloons hang over a dinner table, and tiny disco balls scatter among the glasses below.",
   "Hang them from the ceiling or a rod at different lengths.",
   "Make sure they clear the candle flames by a good margin."
  ]
 },
 {
  "n": 10,
  "title": "Float Gold and Silver Balloons Over a Candlelit Table",
  "paras": [
   "Balloons don't have to stay at floor level. Gold and silver balloons hang from strands of fairy lights above this table, with tall tapers and apples at each place.",
   "Tie balloons to the lights or a ceiling hook, keeping them well above eye level. Use battery tapers, since open flame near balloons is a hazard."
  ],
  "key": "nye-17",
  "_orig": [
   "Balloons don't have to stay at floor level.",
   "Gold and silver balloons hang from strands of fairy lights above this table, with tall tapers and apples at each place.",
   "Tie balloons to the lights or a ceiling hook, keeping them well above eye level.",
   "Use battery tapers, since open flame near balloons is a hazard."
  ]
 },
 {
  "n": 11,
  "title": "Put an Oversized Clock Where Everyone Can See It",
  "paras": [
   "The countdown is the whole point of the night.",
   "A big round clock hangs in front of a curtain of fairy lights here, with star garlands above and silhouettes of guests below.",
   "Hang it opposite the main seating, so nobody has to look at a phone.",
   "Set it a few minutes fast if you want a head start on the countdown."
  ],
  "key": "nye-24",
  "_orig": [
   "The countdown is the whole point of the night.",
   "A big round clock hangs in front of a curtain of fairy lights here, with star garlands above and silhouettes of guests below.",
   "Hang it opposite the main seating, so nobody has to look at a phone.",
   "Set it a few minutes fast if you want a head start on the countdown."
  ]
 },
 {
  "n": 12,
  "title": "Take the Lights Outside",
  "paras": [
   "<p><strong>A balcony or porch counts as party space.</strong> Snowflake string lights and garland run along this balcony railing, with potted plants and a warm glow against the winter view.</p>",
   "Choose outdoor-rated lights, or solar ones that charge in the afternoon.",
   "Wire them with zip ties, not tape, since cold weather weakens adhesive."
  ],
  "key": "nye-28",
  "_orig": [
   "A balcony or porch counts as party space.",
   "Snowflake string lights and garland run along this balcony railing, with potted plants and a warm glow against the winter view.",
   "Choose outdoor-rated lights, or solar ones that charge in the afternoon.",
   "Wire them with zip ties, not tape, since cold weather weakens adhesive."
  ]
 },
 {
  "n": 13,
  "title": "Set a Gold and Black Table",
  "paras": [
   "Black and gold is classic for a reason.",
   "Gold cutlery, white plates and tall flutes sit on a dark runner here, with tiny confetti dots and fairy lights between the place settings.",
   "<ul><li>Start with a dark cloth and only add gold: flatware, chargers, rims on glasses.</li><li>Scatter the confetti sparingly, a pinch at each place, so it looks like glitter and not mess.</li></ul>"
  ],
  "key": "nye-02",
  "_orig": [
   "Black and gold is classic for a reason.",
   "Gold cutlery, white plates and tall flutes sit on a dark runner here, with tiny confetti dots and fairy lights between the place settings.",
   "Start with a dark cloth and only add gold: flatware, chargers, rims on glasses.",
   "Scatter the confetti sparingly, a pinch at each place, so it looks like glitter and not mess."
  ]
 },
 {
  "n": 14,
  "title": "Set a Candlelit Table With White Roses",
  "paras": [
   "Soft light is the most flattering thing you can give a guest.",
   "White roses, small votives and tealights crowd a table here, with gold-rimmed glasses and plates glowing in the candlelight.",
   "Use tealights in glass holders and group them in odd numbers. Keep flowers low so guests can see each other across the table."
  ],
  "key": "nye-09",
  "_orig": [
   "Soft light is the most flattering thing you can give a guest.",
   "White roses, small votives and tealights crowd a table here, with gold-rimmed glasses and plates glowing in the candlelight.",
   "Use tealights in glass holders and group them in odd numbers.",
   "Keep flowers low so guests can see each other across the table."
  ]
 },
 {
  "n": 15,
  "title": "Fill a Bowl With Disco Balls",
  "paras": [
   "Disco balls bounce the light around the room.",
   "Mini mirrored balls fill a long white dish down the center of this table, with eucalyptus leaves and two tall white candles.",
   "<p><strong>Quick tip:</strong> Cluster the balls in different sizes, and tuck a few on the table too.</p>",
   "Keep centerpieces under twelve inches tall so conversation flows."
  ],
  "key": "nye-07",
  "_orig": [
   "Disco balls bounce the light around the room.",
   "Mini mirrored balls fill a long white dish down the center of this table, with eucalyptus leaves and two tall white candles.",
   "Cluster the balls in different sizes, and tuck a few on the table too.",
   "Keep centerpieces under twelve inches tall so conversation flows."
  ]
 },
 {
  "n": 16,
  "title": "Make a Starry Night Centerpiece",
  "paras": [
   "A centerpiece can glow without a single flame. Clear mason jars filled with fairy lights stand on a navy cloth strewn with gold stars here.",
   "Use battery lights with a timer. Fill each jar with a loose coil.",
   "Cut the stars from gold card and scatter them on the table."
  ],
  "key": "nye-08",
  "_orig": [
   "A centerpiece can glow without a single flame.",
   "Clear mason jars filled with fairy lights stand on a navy cloth strewn with gold stars here.",
   "Use battery lights with a timer. Fill each jar with a loose coil.",
   "Cut the stars from gold card and scatter them on the table."
  ]
 },
 {
  "n": 17,
  "title": "Group Ornaments and Candles on a Tray",
  "paras": [
   "A tray makes a loose collection look deliberate.",
   "A gold tray here holds a big star, gold ornaments, a lantern and a candle in a glass. Leave Christmas ornaments out and swap for gold ones in January.",
   "Vary heights, with the tall piece to the back."
  ],
  "key": "nye-23",
  "_orig": [
   "A tray makes a loose collection look deliberate.",
   "A gold tray here holds a big star, gold ornaments, a lantern and a candle in a glass.",
   "Leave Christmas ornaments out and swap for gold ones in January.",
   "Vary heights, with the tall piece to the back."
  ]
 },
 {
  "n": 18,
  "title": "Scatter Confetti Down the Table",
  "paras": [
   "A confetti runner is the cheapest decoration there is.",
   "Colorful metallic dots run down the center of this white table, with tealights and wine glasses along it.",
   "<ul><li>Use paper confetti rather than plastic, which doesn't sweep up and damages the environment.</li><li>Keep the dots small and sparse. A little goes a long way.</li></ul>"
  ],
  "key": "nye-29",
  "_orig": [
   "A confetti runner is the cheapest decoration there is.",
   "Colorful metallic dots run down the center of this white table, with tealights and wine glasses along it.",
   "Use paper confetti rather than plastic, which doesn't sweep up and damages the environment.",
   "Keep the dots small and sparse. A little goes a long way."
  ]
 },
 {
  "n": 19,
  "title": "Light a Sparkler Centerpiece",
  "paras": [
   "<p><strong>A starburst light makes a dramatic centerpiece.</strong> A copper-wire starburst glows above a table of candles and bottles here.</p>",
   "<ul><li>Choose an LED version. Real sparklers don't belong on a dining table.</li><li>Dim the room and let it be the lamp.</li></ul>"
  ],
  "key": "nye-30",
  "_orig": [
   "A starburst light makes a dramatic centerpiece.",
   "A copper-wire starburst glows above a table of candles and bottles here.",
   "Choose an LED version. Real sparklers don't belong on a dining table.",
   "Dim the room and let it be the lamp."
  ]
 },
 {
  "n": 20,
  "title": "Light the Living Room, Not Just the Table",
  "paras": [
   "Not every party happens at a dining table. A glowing New Year sign, gold balloons, candles and a low table of flutes set a lounge mood here.",
   "Use a coffee table as a sit-down spot, with cushions around it. Layer your light sources so no one is lit from above."
  ],
  "key": "nye-13",
  "_orig": [
   "Not every party happens at a dining table.",
   "A glowing New Year sign, gold balloons, candles and a low table of flutes set a lounge mood here.",
   "Use a coffee table as a sit-down spot, with cushions around it.",
   "Layer your light sources so no one is lit from above."
  ]
 },
 {
  "n": 21,
  "title": "Build a Cozy Table by the Sofa",
  "paras": [
   "Cozy can be festive.",
   "A gold Happy New Year sign, balloons and candles sit above a table set for dinner by the fireplace.",
   "Choose placemats and napkins in a calm neutral so the gold stands out.",
   "Dim the overheads and let the fire and candles do the rest."
  ],
  "key": "nye-14",
  "_orig": [
   "Cozy can be festive.",
   "A gold Happy New Year sign, balloons and candles sit above a table set for dinner by the fireplace.",
   "Choose placemats and napkins in a calm neutral so the gold stands out.",
   "Dim the overheads and let the fire and candles do the rest."
  ]
 },
 {
  "n": 22,
  "title": "Set Up a Floor Picnic Under a Lace Teepee",
  "paras": [
   "<p><strong>Sit on the floor and the party goes casual.</strong> A lace teepee lettered with Happy New Year in gold script stands behind a low table with cushions, disco balls and candles.</p>",
   "Use a low table or a sheet on the floor, with lots of pillows.",
   "Give guests a few cushions each and a blanket, and nobody will ask for a chair."
  ],
  "key": "nye-25",
  "_orig": [
   "Sit on the floor and the party goes casual.",
   "A lace teepee lettered with Happy New Year in gold script stands behind a low table with cushions, disco balls and candles.",
   "Use a low table or a sheet on the floor, with lots of pillows.",
   "Give guests a few cushions each and a blanket, and nobody will ask for a chair."
  ]
 },
 {
  "n": 23,
  "title": "Put Together a Dessert and Candy Buffet",
  "paras": [
   "A buffet works as décor and food.",
   "Glass jars of white pretzels, gold chocolates and gum balls stand on a gold cloth here, with black plates and cupcakes.",
   "<ul><li>Stick to a palette: black, gold and white.</li><li>Label each item on a small chalkboard card, which helps with allergies.</li></ul>"
  ],
  "key": "nye-10",
  "_orig": [
   "A buffet works as décor and food.",
   "Glass jars of white pretzels, gold chocolates and gum balls stand on a gold cloth here, with black plates and cupcakes.",
   "Stick to a palette: black, gold and white.",
   "Label each item on a small chalkboard card, which helps with allergies."
  ]
 },
 {
  "n": 24,
  "title": "Set Out a Snack Table With Warm Lights",
  "paras": [
   "A snack table can be the party's gathering place.",
   "Bowls of popcorn and pretzels, a cheese board and chocolates sit on a dark counter here, with balloons and a chalkboard sign.",
   "Balance sweet and salty, and put a bowl at each end. String lights behind the table keep it glowing."
  ],
  "key": "nye-19",
  "_orig": [
   "A snack table can be the party's gathering place.",
   "Bowls of popcorn and pretzels, a cheese board and chocolates sit on a dark counter here, with balloons and a chalkboard sign.",
   "Balance sweet and salty, and put a bowl at each end.",
   "String lights behind the table keep it glowing."
  ]
 },
 {
  "n": 25,
  "title": "Pour Champagne With a Gold Leaf Board",
  "paras": [
   "A grazing board is elegant and easy.",
   "Figs, grapes, brie with honey, chocolates and gold leaf on slate sit beside a bucket of bubbly here.",
   "<p><strong>Quick tip:</strong> Pick one soft cheese, one hard, fruit and chocolate.</p>",
   "Keep the bottle on ice a few hours ahead. A bucket of half ice and half water chills it fastest."
  ],
  "key": "nye-26",
  "_orig": [
   "A grazing board is elegant and easy.",
   "Figs, grapes, brie with honey, chocolates and gold leaf on slate sit beside a bucket of bubbly here.",
   "Pick one soft cheese, one hard, fruit and chocolate.",
   "Keep the bottle on ice a few hours ahead. A bucket of half ice and half water chills it fastest."
  ]
 },
 {
  "n": 26,
  "title": "Style a Bar Cart",
  "paras": [
   "A bar cart is a party in one piece of furniture. Champagne flutes, decanters, bottles and a bunch of gold accents are arranged on a brass cart here, with a NYE banner across the front.",
   "Keep glasses and ice on the top shelf, and bottles below.",
   "Add a sign with the night's signature drink to keep people from queuing."
  ],
  "key": "nye-18",
  "_orig": [
   "A bar cart is a party in one piece of furniture.",
   "Champagne flutes, decanters, bottles and a bunch of gold accents are arranged on a brass cart here, with a NYE banner across the front.",
   "Keep glasses and ice on the top shelf, and bottles below.",
   "Add a sign with the night's signature drink to keep people from queuing."
  ]
 },
 {
  "n": 27,
  "title": "Display the Countdown on the Wall",
  "paras": [
   "A big sign sets the mood before the party begins.",
   "A cardboard year sign hangs above a Roman numeral clock here, with pocket watches and candles on a shelf below. Cut the numbers from cardboard, which is cheap and easy.",
   "Hang the clock's hands at five to twelve for the look."
  ],
  "key": "nye-03",
  "_orig": [
   "A big sign sets the mood before the party begins.",
   "A cardboard year sign hangs above a Roman numeral clock here, with pocket watches and candles on a shelf below.",
   "Cut the numbers from cardboard, which is cheap and easy.",
   "Hang the clock's hands at five to twelve for the look."
  ]
 },
 {
  "n": 28,
  "title": "Fill a Resolutions Jar",
  "paras": [
   "Give guests something to write.",
   "A glass jar here is half full of notes, with a pen and paper beside it.",
   "<ul><li>Provide slips and pens, and pop them in a jar for next year.</li><li>Open the jar at next year's party and read them aloud.</li></ul>"
  ],
  "key": "nye-20",
  "_orig": [
   "Give guests something to write.",
   "A glass jar here is half full of notes, with a pen and paper beside it.",
   "Provide slips and pens, and pop them in a jar for next year.",
   "Open the jar at next year's party and read them aloud."
  ]
 },
 {
  "n": 29,
  "title": "Make a Vision Board for the New Year",
  "paras": [
   "<p><strong>A vision board is a party and a plan.</strong> A big collage of goals and pictures hangs by a bed here.</p>",
   "<ul><li>Gather magazines and let guests cut and paste.</li><li>Pin it where you'll see it every day.</li></ul>"
  ],
  "key": "nye-21",
  "_orig": [
   "A vision board is a party and a plan.",
   "A big collage of goals and pictures hangs by a bed here.",
   "Gather magazines and let guests cut and paste.",
   "Pin it where you'll see it every day."
  ]
 },
 {
  "n": 30,
  "title": "Cut Paper Stars From Old Book Pages",
  "paras": [
   "Old books are the best free craft supply. A garland of paper stars cut from book pages hangs over a window here.",
   "Cut the stars with a punch and string them on twine. Hang it in the window where light shines through."
  ],
  "key": "nye-22",
  "_orig": [
   "Old books are the best free craft supply.",
   "A garland of paper stars cut from book pages hangs over a window here.",
   "Cut the stars with a punch and string them on twine.",
   "Hang it in the window where light shines through."
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
<p>New Year's Eve is the one party where the room has to look good in warm, low light at 11:59 p.m., not at noon.</p>
<p>That changes how you decorate. Shine, shimmer and candlelight do the work, and the big moments, like the countdown and the toast, need a spot to happen.</p>
<p>Here are 30 ideas, grouped from the entry to the table to the midnight toast, with the practical tips I use so the night runs smoothly.</p>
${photo("hero")}

<h2>Five Rules for a Midnight-Worthy Party</h2>
<p><strong>Decorate for low light.</strong> Metallics and mirrors only sparkle when there is a warm light source to catch.</p>
<p><strong>Pick two metals at most.</strong> Gold with black, or silver with white, looks planned. Three metals starts to look messy.</p>
<p><strong>Build one focal point.</strong> A backdrop, a balloon wall or a dessert table. Everything else supports it.</p>
<p><strong>Use battery light.</strong> LED candles and sparklers cost little and avoid flames beside paper and balloons.</p>
<p><strong>Plan the midnight moment.</strong> Have glasses filled, a clock visible and the champagne chilled before 11:30.</p>

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Common New Year's Eve Mistakes (and Fixes)</h2>
<p><strong>Inflating balloons too early.</strong> Latex goes soft within a day. Blow them up on the day of the party.</p>
<p><strong>Tall centerpieces.</strong> Anything over twelve inches blocks conversation. Keep tall pieces for the buffet.</p>
<p><strong>Open flame near decor.</strong> Tinsel, paper and balloons burn fast. Use LED sparklers and battery candles.</p>
<p><strong>Warming the champagne.</strong> Chill bottles in half ice and half water for 30 minutes, which is faster than a fridge.</p>
<p>You don't need all 30 ideas. Pick a backdrop, a table look and a toast station, and the rest follows. Happy New Year.</p>
`;

module.exports = { body };
