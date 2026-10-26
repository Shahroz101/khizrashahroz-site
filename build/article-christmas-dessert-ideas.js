// Body content for "22 Christmas Dessert Ideas for a Holiday Table People
// Remember". Converted from the Dwelling Dream "22 Christmas Dessert Ideas"
// source in the advice-led voice (see memory advice-led-article-voice): all
// text new, with baking technique and food-safety tips, ideas regrouped
// (showstoppers, make-ahead cheesecakes and cups, cookies and bite-sized
// treats). Photos credited to their Pinterest pins. Ends on text.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PHOTO_DIR = "christmas-dessert-ideas";
const PRODUCT_DIR = "christmas-dessert-ideas-products";

const PHOTOS = {
 "dessert-01": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/411235009739841034/",
  "label": "Make the Yule Log Your Showstopper",
  "alt": "A chocolate yule log cake with chocolate bark shavings, holly, and red berries on top"
 },
 "dessert-02": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/652951646008599981/",
  "label": "Layer Red Velvet and Cream Cheese",
  "alt": "A red velvet layer cake with cream cheese frosting, piped rosettes, and mini Christmas trees"
 },
 "dessert-12": {
  "w": 960,
  "h": 1200,
  "pin": "https://www.pinterest.com/pin/481111172715755581/",
  "label": "Pipe a Pavlova Wreath",
  "alt": "A pavlova wreath topped with whipped cream, sugared cranberries, and rosemary sprigs"
 },
 "dessert-04": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/932104454142373011/",
  "label": "Build a Gingerbread House the Smart Way",
  "alt": "A full gingerbread house with candy cane trim displayed in front of a lit Christmas tree"
 },
 "dessert-03": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/4604789960632746560/",
  "label": "Fake a Fancy Dessert With Puff Pastry",
  "alt": "Puff pastry shaped into a Christmas tree with Nutella swirls and star cutouts"
 },
 "dessert-05": {
  "w": 750,
  "h": 1173,
  "pin": "https://www.pinterest.com/pin/632474341468373883/",
  "label": "Sugar Cranberries for Instant Sparkle",
  "alt": "A slice of cranberry cheesecake topped with sugared cranberries on a graham crust"
 },
 "dessert-13": {
  "w": 736,
  "h": 1318,
  "pin": "https://www.pinterest.com/pin/1122240800933083898/",
  "label": "Layer a Trifle in a Glass Bowl",
  "alt": "A layered berry cheesecake trifle with whipped cream and graham cracker crumbs in a glass bowl"
 },
 "dessert-16": {
  "w": 768,
  "h": 1152,
  "pin": "https://www.pinterest.com/pin/518688082095794564/",
  "label": "Turn Tiramisu Into a Christmas Tree",
  "alt": "A chocolate tiramisu dusted with cocoa and decorated with a chocolate shaving Christmas tree"
 },
 "dessert-15": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/326581410487179818/",
  "label": "Serve Sticky Toffee Pudding Warm",
  "alt": "A bowl of sticky toffee pudding drizzled with caramel sauce and whipped cream"
 },
 "dessert-14": {
  "w": 896,
  "h": 1280,
  "pin": "https://www.pinterest.com/pin/401172279334927683/",
  "label": "Make Mini Mousse Cakes Look Expensive",
  "alt": "Individual chocolate mousse cakes topped with a white chocolate snowflake and red currants"
 },
 "dessert-17": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/384494886959078178/",
  "label": "Save Your Oven With No-Bake Cups",
  "alt": "No-bake gingerbread cheesecake cups topped with a mini gingerbread man cookie"
 },
 "dessert-18": {
  "w": 736,
  "h": 981,
  "pin": "https://www.pinterest.com/pin/573786808798999575/",
  "label": "Show Off the Layers in Clear Glass",
  "alt": "A layered strawberry cheesecake cup topped with whipped cream shaped like a Santa hat"
 },
 "dessert-07": {
  "w": 1280,
  "h": 1600,
  "pin": "https://www.pinterest.com/pin/943644928196437948/",
  "label": "Pack a Box of Iced Cookies as a Gift",
  "alt": "A gift box filled with iced Christmas sugar cookies shaped like trees, Santa, and snowflakes"
 },
 "dessert-08": {
  "w": 1200,
  "h": 1600,
  "pin": "https://www.pinterest.com/pin/4601412292626203200/",
  "label": "Roll Red Velvet Crinkles Twice",
  "alt": "Red velvet crinkle cookies dusted with powdered sugar stacked on a plate"
 },
 "dessert-09": {
  "w": 680,
  "h": 1020,
  "pin": "https://www.pinterest.com/pin/260997740896956551/",
  "label": "Dip Pretzels for a No-Bake Treat",
  "alt": "A bowl of chocolate covered pretzels topped with red, green, and white sprinkles"
 },
 "dessert-10": {
  "w": 768,
  "h": 1365,
  "pin": "https://www.pinterest.com/pin/1097682109226322786/",
  "label": "Stack Truffles Into a Tower",
  "alt": "A tower of chocolate truffles rolled in sprinkles and cocoa with fresh cranberries"
 },
 "dessert-11": {
  "w": 736,
  "h": 977,
  "pin": "https://www.pinterest.com/pin/672232681921971762/",
  "label": "Don't Overheat the Chocolate",
  "alt": "Stacked squares of white and dark chocolate peppermint bark topped with crushed candy canes"
 },
 "dessert-06": {
  "w": 600,
  "h": 900,
  "pin": "https://www.pinterest.com/pin/472174342180089713/",
  "label": "Top Brownies With Santa Hats",
  "alt": "Chocolate brownies topped with whipped cream and a strawberry shaped like a Santa hat"
 },
 "dessert-22": {
  "w": 1200,
  "h": 1800,
  "pin": "https://www.pinterest.com/pin/505669864413269890/",
  "label": "Bake Brownies in a Muffin Tin",
  "alt": "A hot chocolate brownie cup topped with chocolate drizzle and holiday sprinkles"
 },
 "dessert-19": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/37365871882324796/",
  "label": "Make Reindeer Cupcakes With the Kids",
  "alt": "Chocolate cupcakes decorated as reindeer faces with candy noses and chocolate antlers"
 },
 "dessert-20": {
  "w": 1024,
  "h": 1536,
  "pin": "https://www.pinterest.com/pin/225461525091086845/",
  "label": "Dip Snowman Cake Pops",
  "alt": "Snowman cake pops displayed on a gold tiered stand with pinecones and greenery"
 },
 "dessert-21": {
  "w": 736,
  "h": 1104,
  "pin": "https://www.pinterest.com/pin/4592897692312381504/",
  "label": "Stack Cinnamon Rolls Into a Tree",
  "alt": "A stack of frosted cinnamon rolls arranged into a Christmas tree shape with sprinkles"
 },
 "hero": {
  "w": 896,
  "h": 1344,
  "pin": "https://www.pinterest.com/pin/652951646008599981/",
  "label": "Layer Red Velvet and Cream Cheese",
  "alt": "A red velvet layer cake with cream cheese frosting, piped rosettes, and mini Christmas trees"
 }
};

const PRODUCTS = {
 "dessert-01": [
  {
   "asin": "B0CCY9PTPH",
   "title": "Silicone Yule Log Cake Mold",
   "w": 1254,
   "h": 1254
  },
  {
   "asin": "B07NSPZCHM",
   "title": "Stainless Steel Sugar Shaker Duster, 2-Pack",
   "w": 940,
   "h": 869
  }
 ],
 "dessert-02": [
  {
   "asin": "B0BKFYYMVC",
   "title": "9-Inch Leakproof Springform Pan",
   "w": 1500,
   "h": 1454
  },
  {
   "asin": "B0CGNZ7BGR",
   "title": "124-Piece Piping Bags and Tips Set",
   "w": 1474,
   "h": 1500
  }
 ],
 "dessert-12": [
  {
   "asin": "B0CYQDPP4R",
   "title": "6-Speed Electric Hand Mixer",
   "w": 1500,
   "h": 1428
  },
  {
   "asin": "B07H79KX8W",
   "title": "Non-Stick Parchment Paper Sheets, 200-Pack",
   "w": 1463,
   "h": 1500
  }
 ],
 "dessert-04": [
  {
   "asin": "B08NZ7QNPB",
   "title": "Gingerbread House Kit, 2-Pack Value Set",
   "w": 1500,
   "h": 1338
  },
  {
   "asin": "B0CYZCVWM4",
   "title": "Icing Squeeze Writing Bottles, Set of 7",
   "w": 1182,
   "h": 799
  }
 ],
 "dessert-03": [
  {
   "asin": "B0FFCD54DF",
   "title": "18-Piece Christmas Cookie Cutter Set",
   "w": 1482,
   "h": 1500
  },
  {
   "asin": "B07NSPZCHM",
   "title": "Stainless Steel Sugar Shaker Duster, 2-Pack",
   "w": 940,
   "h": 869
  }
 ],
 "dessert-05": [
  {
   "asin": "B0BKFYYMVC",
   "title": "9-Inch Leakproof Springform Pan",
   "w": 1500,
   "h": 1454
  },
  {
   "asin": "B0CGNZ7BGR",
   "title": "124-Piece Piping Bags and Tips Set",
   "w": 1474,
   "h": 1500
  }
 ],
 "dessert-13": [
  {
   "asin": "B0D1R8B7RY",
   "title": "Glass Trifle Bowl with Lid",
   "w": 1500,
   "h": 912
  },
  {
   "asin": "B0CGNZ7BGR",
   "title": "124-Piece Piping Bags and Tips Set",
   "w": 1474,
   "h": 1500
  }
 ],
 "dessert-16": [
  {
   "asin": "B09ZLT4FZJ",
   "title": "Deep 9x13 Glass Baking Dish with Lid",
   "w": 981,
   "h": 354
  },
  {
   "asin": "B095KM67XF",
   "title": "Stainless Steel Cocoa Powder Shaker",
   "w": 1378,
   "h": 1341
  }
 ],
 "dessert-15": [
  {
   "asin": "B09F8SNX4S",
   "title": "6-Ounce Ceramic Ramekins, Set of 6",
   "w": 1377,
   "h": 1500
  },
  {
   "asin": "B0CYZCVWM4",
   "title": "Icing Squeeze Writing Bottles, Set of 7",
   "w": 1182,
   "h": 799
  }
 ],
 "dessert-14": [
  {
   "asin": "B0C4TB4RFJ",
   "title": "4-Inch Round Silicone Mini Cake Pans, Set of 6",
   "w": 1500,
   "h": 859
  },
  {
   "asin": "B00IE6YROW",
   "title": "49-Piece Candy Melting and Dipping Kit",
   "w": 1500,
   "h": 655
  }
 ],
 "dessert-17": [
  {
   "asin": "B07TDRJ7T2",
   "title": "5 oz Mini Dessert Cups with Lids, Set of 50",
   "w": 1500,
   "h": 1236
  },
  {
   "asin": "B0CGNZ7BGR",
   "title": "124-Piece Piping Bags and Tips Set",
   "w": 1474,
   "h": 1500
  }
 ],
 "dessert-18": [
  {
   "asin": "B07TDRJ7T2",
   "title": "5 oz Mini Dessert Cups with Lids, Set of 50",
   "w": 1500,
   "h": 1236
  },
  {
   "asin": "B0CGNZ7BGR",
   "title": "124-Piece Piping Bags and Tips Set",
   "w": 1474,
   "h": 1500
  }
 ],
 "dessert-07": [
  {
   "asin": "B0FFCD54DF",
   "title": "18-Piece Christmas Cookie Cutter Set",
   "w": 1482,
   "h": 1500
  },
  {
   "asin": "B08TTMKYCP",
   "title": "24-Pack Christmas Cookie Gift Boxes with Window",
   "w": 1500,
   "h": 1387
  }
 ],
 "dessert-08": [
  {
   "asin": "B0002MPTUM",
   "title": "Stainless Steel Cookie Scoop Set of 3",
   "w": 1432,
   "h": 1500
  },
  {
   "asin": "B07NSPZCHM",
   "title": "Stainless Steel Sugar Shaker Duster, 2-Pack",
   "w": 940,
   "h": 869
  }
 ],
 "dessert-09": [
  {
   "asin": "B00IE6YROW",
   "title": "49-Piece Candy Melting and Dipping Kit",
   "w": 1500,
   "h": 655
  },
  {
   "asin": "B08HJ2ZBW7",
   "title": "Red, Green & White Holiday Sprinkles Mix, 1 lb",
   "w": 960,
   "h": 1279
  }
 ],
 "dessert-10": [
  {
   "asin": "B0BJ1JG2BZ",
   "title": "3-Tier Cupcake and Dessert Stand",
   "w": 1414,
   "h": 1500
  },
  {
   "asin": "B08HJ2ZBW7",
   "title": "Red, Green & White Holiday Sprinkles Mix, 1 lb",
   "w": 960,
   "h": 1279
  }
 ],
 "dessert-11": [
  {
   "asin": "B07BC6G3KQ",
   "title": "Candy Melting Pot and Dipping Tools Set",
   "w": 1500,
   "h": 1466
  },
  {
   "asin": "B00X7SC5T6",
   "title": "Crushed Peppermint Candy Cane Pieces, 10 oz",
   "w": 1500,
   "h": 1500
  }
 ],
 "dessert-06": [
  {
   "asin": "B0GWKVQXHN",
   "title": "12-Cavity Brownie Pan with Dividers",
   "w": 1463,
   "h": 1304
  },
  {
   "asin": "B0CGNZ7BGR",
   "title": "124-Piece Piping Bags and Tips Set",
   "w": 1474,
   "h": 1500
  }
 ],
 "dessert-22": [
  {
   "asin": "B00008W70J",
   "title": "12-Cup Nonstick Muffin and Cupcake Pan",
   "w": 1500,
   "h": 780
  },
  {
   "asin": "B08HJ2ZBW7",
   "title": "Red, Green & White Holiday Sprinkles Mix, 1 lb",
   "w": 960,
   "h": 1279
  }
 ],
 "dessert-19": [
  {
   "asin": "B00008W70J",
   "title": "12-Cup Nonstick Muffin and Cupcake Pan",
   "w": 1500,
   "h": 780
  },
  {
   "asin": "B0CTMD1D28",
   "title": "Edible Candy Eyes, Mixed Sizes",
   "w": 1500,
   "h": 1500
  }
 ],
 "dessert-20": [
  {
   "asin": "B0894MH9P8",
   "title": "404-Piece Cake Pop Making Kit with Stand",
   "w": 1499,
   "h": 1500
  },
  {
   "asin": "B0BJ1JG2BZ",
   "title": "3-Tier Cupcake and Dessert Stand",
   "w": 1414,
   "h": 1500
  }
 ],
 "dessert-21": [
  {
   "asin": "B0GMJB7M8V",
   "title": "6-Cup Muffin Top and Cinnamon Roll Pan",
   "w": 1348,
   "h": 1500
  },
  {
   "asin": "B0CYZCVWM4",
   "title": "Icing Squeeze Writing Bottles, Set of 7",
   "w": 1182,
   "h": 799
  }
 ]
};

const IDEAS = [
 {
  "n": 1,
  "title": "Make the Yule Log Your Showstopper",
  "paras": [
   "If you only bake one ambitious thing this year, make it a bûche de Noël.",
   "A chocolate log with ridged, bark-like frosting, holly leaves and red berries on top is the shape that says Christmas dessert.",
   "<p><strong>Quick tip:</strong> Roll the sponge while it's still warm, inside a clean towel dusted with cocoa. A cooled sponge cracks.</p>",
   "Drag a fork down the frosting for the bark. The texture hides every flaw. Holly berries are toxic, so use faux ones or lift them off before serving."
  ],
  "key": "dessert-01",
  "_orig": [
   "If you only bake one ambitious thing this year, make it a bûche de Noël.",
   "A chocolate log with ridged, bark-like frosting, holly leaves and red berries on top is the shape that says Christmas dessert.",
   "Roll the sponge while it's still warm, inside a clean towel dusted with cocoa. A cooled sponge cracks.",
   "Drag a fork down the frosting for the bark. The texture hides every flaw.",
   "Holly berries are toxic, so use faux ones or lift them off before serving."
  ]
 },
 {
  "n": 2,
  "title": "Layer Red Velvet and Cream Cheese",
  "paras": [
   "Red velvet suits Christmas because the colors do the decorating. Two red layers with cream cheese filling, a ring of piped rosettes and a few sugar trees and red pearls on top make this cake look finished without much effort.",
   "Use gel food coloring, not liquid, which waters down the batter.",
   "Bring the cream cheese to room temperature for a smooth frosting, and chill the cake for thirty minutes before slicing so the layers cut clean."
  ],
  "key": "dessert-02",
  "_orig": [
   "Red velvet suits Christmas because the colors do the decorating.",
   "Two red layers with cream cheese filling, a ring of piped rosettes and a few sugar trees and red pearls on top make this cake look finished without much effort.",
   "Use gel food coloring, not liquid, which waters down the batter.",
   "Bring the cream cheese to room temperature for a smooth frosting, and chill the cake for thirty minutes before slicing so the layers cut clean."
  ]
 },
 {
  "n": 3,
  "title": "Pipe a Pavlova Wreath",
  "paras": [
   "Pavlova looks fancy and is mostly egg whites and sugar.",
   "Pipe a ring of meringue, then top it with whipped cream, sugared cranberries and sprigs of rosemary, as this one is. Egg whites whip best at room temperature with no trace of yolk.",
   "Bake low and slow, then let it cool in the oven with the door shut. Sudden cooling cracks it. Add the cream and fruit just before serving, or the meringue goes soggy."
  ],
  "key": "dessert-12",
  "_orig": [
   "Pavlova looks fancy and is mostly egg whites and sugar.",
   "Pipe a ring of meringue, then top it with whipped cream, sugared cranberries and sprigs of rosemary, as this one is.",
   "Egg whites whip best at room temperature with no trace of yolk.",
   "Bake low and slow, then let it cool in the oven with the door shut. Sudden cooling cracks it.",
   "Add the cream and fruit just before serving, or the meringue goes soggy."
  ]
 },
 {
  "n": 4,
  "title": "Build a Gingerbread House the Smart Way",
  "paras": [
   "A gingerbread house is a decoration first and a dessert second.",
   "This one has a scalloped icing roof and candy cane trim and stands in front of the tree.",
   "<ul><li>Royal icing is your glue, and it sets hard in about an hour. Let the walls dry flat before you stand them up.</li><li>Assemble the base the day before and decorate on the day. A kit is perfectly fine, and it's a fun way to get the kids involved.</li></ul>"
  ],
  "key": "dessert-04",
  "_orig": [
   "A gingerbread house is a decoration first and a dessert second.",
   "This one has a scalloped icing roof and candy cane trim and stands in front of the tree.",
   "Royal icing is your glue, and it sets hard in about an hour. Let the walls dry flat before you stand them up.",
   "Assemble the base the day before and decorate on the day.",
   "A kit is perfectly fine, and it's a fun way to get the kids involved."
  ]
 },
 {
  "n": 5,
  "title": "Fake a Fancy Dessert With Puff Pastry",
  "paras": [
   "<p><strong>Two sheets of puff pastry and a jar of chocolate-hazelnut spread will fool anyone.</strong> Cut the pastry into a tree, spread, then cut side strips and twist them, as with this golden, star-topped tree.</p>",
   "<ul><li>Keep the pastry cold. If it warms and gets sticky, chill it for ten minutes.</li><li>Brush with egg wash for gloss, and dust with powdered sugar after baking, not before.</li></ul>"
  ],
  "key": "dessert-03",
  "_orig": [
   "Two sheets of puff pastry and a jar of chocolate-hazelnut spread will fool anyone.",
   "Cut the pastry into a tree, spread, then cut side strips and twist them, as with this golden, star-topped tree.",
   "Keep the pastry cold. If it warms and gets sticky, chill it for ten minutes.",
   "Brush with egg wash for gloss, and dust with powdered sugar after baking, not before."
  ]
 },
 {
  "n": 6,
  "title": "Sugar Cranberries for Instant Sparkle",
  "paras": [
   "Sugared cranberries are the cheapest garnish you can make. A slice of cranberry cheesecake wears a cluster of them here, and the ruby swirl inside echoes the topping.",
   "Simmer cranberries briefly in simple syrup, drain, roll in sugar and dry on a rack for an hour. Wrap the springform pan in foil and bake in a water bath so the cheesecake doesn't crack. Cool it slowly, with the oven off and the door ajar for an hour."
  ],
  "key": "dessert-05",
  "_orig": [
   "Sugared cranberries are the cheapest garnish you can make.",
   "A slice of cranberry cheesecake wears a cluster of them here, and the ruby swirl inside echoes the topping.",
   "Simmer cranberries briefly in simple syrup, drain, roll in sugar and dry on a rack for an hour.",
   "Wrap the springform pan in foil and bake in a water bath so the cheesecake doesn't crack.",
   "Cool it slowly, with the oven off and the door ajar for an hour."
  ]
 },
 {
  "n": 7,
  "title": "Layer a Trifle in a Glass Bowl",
  "paras": [
   "A trifle is the easiest dessert to make for a crowd.",
   "Berries, cheesecake cream and graham crumbs layer through a footed glass bowl here, so every scoop looks good.",
   "Make the cream the day before and assemble about four hours ahead.",
   "Alternate wet and crunchy layers and finish with crumbs on top so they stay crisp. Add the whipped cream last, at the table if you can."
  ],
  "key": "dessert-13",
  "_orig": [
   "A trifle is the easiest dessert to make for a crowd.",
   "Berries, cheesecake cream and graham crumbs layer through a footed glass bowl here, so every scoop looks good.",
   "Make the cream the day before and assemble about four hours ahead.",
   "Alternate wet and crunchy layers and finish with crumbs on top so they stay crisp.",
   "Add the whipped cream last, at the table if you can."
  ]
 },
 {
  "n": 8,
  "title": "Turn Tiramisu Into a Christmas Tree",
  "paras": [
   "<p><strong>Chocolate shavings can be sculpted into a tree.</strong> This tiramisu is dusted with cocoa and decorated with a tree of chocolate curls and a few sprinkles.</p>",
   "Dip ladyfingers in coffee for a second or two. Any longer and they fall apart.",
   "Make it the day before, since tiramisu needs at least six hours to set. Use a vegetable peeler on a chocolate bar for fine curls."
  ],
  "key": "dessert-16",
  "_orig": [
   "Chocolate shavings can be sculpted into a tree.",
   "This tiramisu is dusted with cocoa and decorated with a tree of chocolate curls and a few sprinkles.",
   "Dip ladyfingers in coffee for a second or two. Any longer and they fall apart.",
   "Make it the day before, since tiramisu needs at least six hours to set.",
   "Use a vegetable peeler on a chocolate bar for fine curls."
  ]
 },
 {
  "n": 9,
  "title": "Serve Sticky Toffee Pudding Warm",
  "paras": [
   "Sticky toffee pudding is the dessert people ask for twice.",
   "A moist date cake sits in a bowl with caramel sauce and whipped cream here.",
   "<ul><li>Soak the dates in hot water with a pinch of baking soda to soften them.</li><li>Bake it in individual ramekins and it reheats in minutes. Make the sauce ahead and warm it gently.</li></ul>"
  ],
  "key": "dessert-15",
  "_orig": [
   "Sticky toffee pudding is the dessert people ask for twice.",
   "A moist date cake sits in a bowl with caramel sauce and whipped cream here.",
   "Soak the dates in hot water with a pinch of baking soda to soften them.",
   "Bake it in individual ramekins and it reheats in minutes. Make the sauce ahead and warm it gently."
  ]
 },
 {
  "n": 10,
  "title": "Make Mini Mousse Cakes Look Expensive",
  "paras": [
   "Individual desserts feel like a restaurant.",
   "These little chocolate mousse cakes have glossy tops, white chocolate snowflakes and red currants.",
   "Freeze them in silicone molds and unmold while frozen for clean sides. Glaze them while frozen, because it sets instantly. Pipe melted white chocolate onto parchment and let it set for snowflakes."
  ],
  "key": "dessert-14",
  "_orig": [
   "Individual desserts feel like a restaurant.",
   "These little chocolate mousse cakes have glossy tops, white chocolate snowflakes and red currants.",
   "Freeze them in silicone molds and unmold while frozen for clean sides.",
   "Glaze them while frozen, because it sets instantly.",
   "Pipe melted white chocolate onto parchment and let it set for snowflakes."
  ]
 },
 {
  "n": 11,
  "title": "Save Your Oven With No-Bake Cups",
  "paras": [
   "On a holiday, oven space is precious.",
   "Gingerbread cheesecake cups here are topped with a swirl of cream and a tiny gingerbread man.",
   "<p><strong>Quick tip:</strong> Press the crumb crust down with the bottom of a glass.</p>",
   "Make them two days ahead, because they only improve. Use a star tip to pipe the swirl."
  ],
  "key": "dessert-17",
  "_orig": [
   "On a holiday, oven space is precious.",
   "Gingerbread cheesecake cups here are topped with a swirl of cream and a tiny gingerbread man.",
   "Press the crumb crust down with the bottom of a glass.",
   "Make them two days ahead, because they only improve.",
   "Use a star tip to pipe the swirl."
  ]
 },
 {
  "n": 12,
  "title": "Show Off the Layers in Clear Glass",
  "paras": [
   "Layers are the best decoration a dessert has. A strawberry cheesecake cup here is topped with whipped cream and a strawberry Santa hat.",
   "Dry the strawberries before assembling, because wet berries weep.",
   "Chill for up to a day, and add the hat right before serving."
  ],
  "key": "dessert-18",
  "_orig": [
   "Layers are the best decoration a dessert has.",
   "A strawberry cheesecake cup here is topped with whipped cream and a strawberry Santa hat.",
   "Dry the strawberries before assembling, because wet berries weep.",
   "Chill for up to a day, and add the hat right before serving."
  ]
 },
 {
  "n": 13,
  "title": "Pack a Box of Iced Cookies as a Gift",
  "paras": [
   "Iced cookies make the best gifts.",
   "A box holds trees, snowflakes, a Santa, a gingerbread man, a candy cane and an ornament, all in matching colors. Thin the icing until a ribbon disappears in about fifteen seconds for a smooth flood.",
   "Let the cookies dry for eight hours before stacking, with parchment between layers. Line the box with parchment so grease doesn't show."
  ],
  "key": "dessert-07",
  "_orig": [
   "Iced cookies make the best gifts.",
   "A box holds trees, snowflakes, a Santa, a gingerbread man, a candy cane and an ornament, all in matching colors.",
   "Thin the icing until a ribbon disappears in about fifteen seconds for a smooth flood.",
   "Let the cookies dry for eight hours before stacking, with parchment between layers.",
   "Line the box with parchment so grease doesn't show."
  ]
 },
 {
  "n": 14,
  "title": "Roll Red Velvet Crinkles Twice",
  "paras": [
   "Crinkles are the easiest cookie to make look impressive.",
   "The red cracks show through the powdered sugar on these.",
   "<ul><li>Chill the dough for at least an hour, then roll it in granulated sugar first and powdered sugar second.</li><li>The double roll gives the crackle. Pull them when the edges set, since overbaking dries them out.</li></ul>"
  ],
  "key": "dessert-08",
  "_orig": [
   "Crinkles are the easiest cookie to make look impressive.",
   "The red cracks show through the powdered sugar on these.",
   "Chill the dough for at least an hour, then roll it in granulated sugar first and powdered sugar second.",
   "The double roll gives the crackle. Pull them when the edges set, since overbaking dries them out."
  ]
 },
 {
  "n": 15,
  "title": "Dip Pretzels for a No-Bake Treat",
  "paras": [
   "<p><strong>Dipped pretzels are the dessert kids can make.</strong> Chocolate-coated pretzels topped with red, green and white sprinkles fill this bowl.</p>",
   "<ul><li>Use candy melts, because real chocolate needs tempering to set shiny.</li><li>Dip, tap off the extra, set on parchment and sprinkle while the coating is wet. Store them airtight. Humidity softens pretzels.</li></ul>"
  ],
  "key": "dessert-09",
  "_orig": [
   "Dipped pretzels are the dessert kids can make.",
   "Chocolate-coated pretzels topped with red, green and white sprinkles fill this bowl.",
   "Use candy melts, because real chocolate needs tempering to set shiny.",
   "Dip, tap off the extra, set on parchment and sprinkle while the coating is wet.",
   "Store them airtight. Humidity softens pretzels."
  ]
 },
 {
  "n": 16,
  "title": "Stack Truffles Into a Tower",
  "paras": [
   "A pile of truffles looks far bigger than it is. Truffles rolled in sprinkles, cocoa and red and green sugar are stacked in a mound here, among holly leaves and berries.",
   "Chill the ganache for two hours until scoopable, then use a small cookie scoop. Cool your hands under cold water before rolling. Build the tower on a cake stand from the base up."
  ],
  "key": "dessert-10",
  "_orig": [
   "A pile of truffles looks far bigger than it is.",
   "Truffles rolled in sprinkles, cocoa and red and green sugar are stacked in a mound here, among holly leaves and berries.",
   "Chill the ganache for two hours until scoopable, then use a small cookie scoop.",
   "Cool your hands under cold water before rolling.",
   "Build the tower on a cake stand from the base up."
  ]
 },
 {
  "n": 17,
  "title": "Don't Overheat the Chocolate",
  "paras": [
   "Scorched chocolate seizes, and there's no going back.",
   "These layers of dark and white chocolate are topped with crushed candy cane and a mint leaf.",
   "Melt in twenty-second bursts, stirring in between.",
   "Crush the candy canes in a sealed bag with a rolling pin, and sprinkle them before the top layer sets. Break it into pieces when hard and gift it in a tin."
  ],
  "key": "dessert-11",
  "_orig": [
   "Scorched chocolate seizes, and there's no going back.",
   "These layers of dark and white chocolate are topped with crushed candy cane and a mint leaf.",
   "Melt in twenty-second bursts, stirring in between.",
   "Crush the candy canes in a sealed bag with a rolling pin, and sprinkle them before the top layer sets.",
   "Break it into pieces when hard and gift it in a tin."
  ]
 },
 {
  "n": 18,
  "title": "Top Brownies With Santa Hats",
  "paras": [
   "<p><strong>Brownies are forgiving, and the topping makes them seasonal.</strong> Each brownie here is topped with a swirl of whipped cream and a strawberry, like a Santa hat.</p>",
   "Line the pan with a foil sling so you can lift the slab out and cut cleanly.",
   "Chill before slicing, because warm brownies crumble. Add the hats right before serving, since strawberries leak."
  ],
  "key": "dessert-06",
  "_orig": [
   "Brownies are forgiving, and the topping makes them seasonal.",
   "Each brownie here is topped with a swirl of whipped cream and a strawberry, like a Santa hat.",
   "Line the pan with a foil sling so you can lift the slab out and cut cleanly.",
   "Chill before slicing, because warm brownies crumble.",
   "Add the hats right before serving, since strawberries leak."
  ]
 },
 {
  "n": 19,
  "title": "Bake Brownies in a Muffin Tin",
  "paras": [
   "A muffin tin portions brownies for you.",
   "These cups have a chocolate drizzle and red, green and white sprinkles.",
   "<ul><li>Press the centers gently as they come out of the oven, which makes a well for toppings.</li><li>Bake them for less time than a pan brownie, since they cook fast, and leave them in the tin until cool.</li></ul>"
  ],
  "key": "dessert-22",
  "_orig": [
   "A muffin tin portions brownies for you.",
   "These cups have a chocolate drizzle and red, green and white sprinkles.",
   "Press the centers gently as they come out of the oven, which makes a well for toppings.",
   "Bake them for less time than a pan brownie, since they cook fast, and leave them in the tin until cool."
  ]
 },
 {
  "n": 20,
  "title": "Make Reindeer Cupcakes With the Kids",
  "paras": [
   "Reindeer cupcakes are a gift to anyone with children.",
   "Chocolate cupcakes with pink frosting get candy eyes, a red nose and pretzel antlers here.",
   "Let the frosting crust for fifteen minutes before adding decorations so they stay put. Decorate only on cooled cupcakes."
  ],
  "key": "dessert-19",
  "_orig": [
   "Reindeer cupcakes are a gift to anyone with children.",
   "Chocolate cupcakes with pink frosting get candy eyes, a red nose and pretzel antlers here.",
   "Let the frosting crust for fifteen minutes before adding decorations so they stay put.",
   "Decorate only on cooled cupcakes."
  ]
 },
 {
  "n": 21,
  "title": "Dip Snowman Cake Pops",
  "paras": [
   "Cake pops reward patience.",
   "White-coated snowmen on sticks stand on a gold tiered stand here with pinecones and greenery.",
   "<p><strong>Quick tip:</strong> Chill the balls firm before dipping. Dip the stick tip in melted coating first so the ball stays on.</p>",
   "Thin the coating with a little coconut oil, tap off the drips and dry them upright in a block of foam."
  ],
  "key": "dessert-20",
  "_orig": [
   "Cake pops reward patience.",
   "White-coated snowmen on sticks stand on a gold tiered stand here with pinecones and greenery.",
   "Chill the balls firm before dipping. Dip the stick tip in melted coating first so the ball stays on.",
   "Thin the coating with a little coconut oil, tap off the drips and dry them upright in a block of foam."
  ]
 },
 {
  "n": 22,
  "title": "Stack Cinnamon Rolls Into a Tree",
  "paras": [
   "Canned dough, a little frosting and ten minutes of building. Frosted cinnamon rolls are stacked from large to small into a tree on this plate, with sprinkles for ornaments.",
   "Bake as usual, cool slightly, then glue the stack with frosting.",
   "It works on Christmas morning, too."
  ],
  "key": "dessert-21",
  "_orig": [
   "Canned dough, a little frosting and ten minutes of building.",
   "Frosted cinnamon rolls are stacked from large to small into a tree on this plate, with sprinkles for ornaments.",
   "Bake as usual, cool slightly, then glue the stack with frosting.",
   "It works on Christmas morning, too."
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
<p>Christmas dinner gets all the planning, but it's the dessert table people remember the next day.</p>
<p>A good spread doesn't have to be complicated. It needs something chocolatey, something fruity and a few bite-sized treats that are easy to grab between conversations.</p>
<p>The trick is to choose one or two showstoppers and fill in with simple things you can make ahead, so you're not stuck in the kitchen while everyone else is in the living room. Here is how I plan it, then 22 desserts to choose from.</p>
${photo("hero")}

<h2>Five Rules for a Dessert Table That Doesn't Stress You Out</h2>
<p><strong>Pick one or two showstoppers.</strong> A yule log, a layer cake, a pavlova. Everything else should be easy.</p>
<p><strong>Make ahead.</strong> Cheesecakes, tiramisu and cups improve overnight. Save only the finishing touches for the day.</p>
<p><strong>Mix colors and textures.</strong> Something creamy, something crunchy, something chocolate, something fruity.</p>
<p><strong>Build height.</strong> Cake stands and tiered trays make a table look generous even with fewer desserts.</p>
<p><strong>Mind food safety.</strong> Anything with cream, cheese or eggs should go back in the fridge within two hours, and a small card listing nuts and dairy saves awkward questions.</p>

${IDEAS.map(ideaBlock).join("\n\n")}

<h2>Common Dessert Mistakes (and Fixes)</h2>
<p><strong>Choosing too many fussy recipes.</strong> Two showstoppers is plenty. Fill the rest with bakes you can do in your sleep.</p>
<p><strong>Leaving everything to the last minute.</strong> Chill, set and decorate in stages.</p>
<p><strong>Ignoring dietary needs.</strong> One nut-free and one dairy-free option makes the whole table welcoming.</p>
<p><strong>Overbaking.</strong> Most holiday bakes look done before they are. Pull them when the edges set, and let carryover heat finish the job.</p>
<p>Choose a couple of bigger bakes for the main table and fill in with small treats. Everyone gets something, and you get to enjoy the party.</p>
`;

module.exports = { body };
