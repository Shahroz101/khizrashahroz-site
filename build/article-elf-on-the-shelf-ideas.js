// Body content for "24 Elf on the Shelf Ideas That Kids Will Actually Love".
// Images were sourced by searching Pinterest for the keyword phrases the
// user supplied per section (not from direct pin.it links), screened to
// exclude text-overlay graphics, printable templates, and AI-looking
// images, then credited back to their pin per the user's request.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  intro: [
    { asin: "B0D2DV2GJ1", title: "The Elf on the Shelf 24-Day Ultimate Daily Scene Kit", w: 1500, h: 1464 },
    { asin: "B0BWRQBGW9", title: "Cute Elephant Toothbrush Holder for Kids and Toddlers", w: 1295, h: 1500 },
  ],
  whatIs: [
    { asin: "B07TQV2NH6", title: "The Elf on the Shelf Box Set, Girl Scout Elf with Blue Eyes", w: 1150, h: 1445 },
    { asin: "B07BJM7VKW", title: "Let It Snow Instant Fake Snow Powder, Made in USA", w: 1431, h: 1500 },
  ],
  howEasy: [
    { asin: "B01D8F5FKS", title: "Post-it Super Sticky Notes, 3 x 3 Inch, Supernova Neons, 24 Pads", w: 1500, h: 1353 },
    { asin: "B0FKKKQQX7", title: "The Elf on the Shelf Polar Props Official Elf Ideas Fun and Games Kit", w: 1500, h: 1436 },
  ],
  idea1: [
    { asin: "B0D14X5485", title: "Cheerios Heart Healthy Breakfast Cereal, Giant Size, 20 oz, Pack of 4", w: 1500, h: 1500 },
    { asin: "B07DPGGKFY", title: "Demitasse Espresso Spoons, 4.7 Inch Stainless Steel Coffee Spoons", w: 1191, h: 1037 },
  ],
  idea2: [
    { asin: "B0DCNWXM2F", title: "Battery Operated Fairy Lights, 6 Pack, 7 ft 20 LED Twinkle Lights, 3 Modes", w: 1402, h: 1500 },
    { asin: "B0FLJMMYWB", title: "Whaline 50 Pcs Christmas Elf Note Cards, 4 x 6 Inch, Blank Stationery", w: 1392, h: 1500 },
  ],
  idea3: [
    { asin: "B0FKNL1V3Y", title: "Campfire Mini Marshmallows, Vanilla Flavored, Gluten Free, 1 lb Bag", w: 1500, h: 1500 },
    { asin: "B0F4ZDNV58", title: "Aurora Festive Palm Pals Freeze Snowman Stuffed Animal", w: 1092, h: 1500 },
  ],
  idea4: [
    { asin: "B00LGLHUA0", title: "Pyrex Essentials 3-Piece Glass Mixing Bowls Set", w: 1420, h: 954 },
    { asin: "B0BKTS5R34", title: "JOYIN 30 Pcs Mini Rubber Ducks with Mesh Carry Bag", w: 1500, h: 1447 },
  ],
  idea5: [
    { asin: "B0CML8Z7DG", title: "Starburst Candy Canes, Green Apple, Lemon and Strawberry, 5.3 oz Box", w: 960, h: 1018 },
    { asin: "B0BVW43CNF", title: "RAZ Imports Vintage Traditional Glass Christmas Ornaments, 2 Inch, Set of 12", w: 1358, h: 1316 },
  ],
  idea6: [
    { asin: "B0H6JPWQMF", title: "Snowman Face Stickers, 72 Pcs, 2 Sizes, for Crafts", w: 1500, h: 1022 },
    { asin: "B09NW7ZP8H", title: "Angel Soft Toilet Paper, 4 Mega Rolls, 2-Ply", w: 1500, h: 1199 },
  ],
  idea7: [
    { asin: "B08H593JZG", title: "Eastern Wolf Sticky Notes, 3 x 3 Inch, 8 Bright Colors, 85 Sheets per Pad", w: 1071, h: 1426 },
    { asin: "B0FK293FG9", title: "Sticky Notes, 3 x 3 Inch, 24 Pads, 12 Bright Colors, Self-Stick", w: 1500, h: 1472 },
  ],
  idea8: [
    { asin: "B0DGRDSXKC", title: "The Elf on the Shelf Bundle: Official Elf Ideas Super Set and Santa's Activity Book", w: 1413, h: 1404 },
    { asin: "B0F2GKTVK9", title: "Mini Stuffed Animals Bulk, 12 Pack, 5 Inch Plush Keychain Toys", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B0BWL2K157", title: "Mega Pop Popcorn Portion Packs, 10.6 oz, 6 Count", w: 1500, h: 1500 },
    { asin: "B0BCGVTH4Q", title: "The Complete Rankin/Bass Christmas Collection, DVD", w: 1074, h: 1500 },
  ],
  idea10: [
    { asin: "B0B9Y2XHMZ", title: "Karenhi Large Christmas Candy Canes Tree Ornaments, 15.7 Inch, 4 Pcs", w: 1500, h: 1465 },
    { asin: "B0BCK98LLG", title: "PerkHomy Natural Jute Twine, 600 Feet, for Crafts and Gift Wrapping", w: 643, h: 1090 },
  ],
  idea11: [
    { asin: "B07GZ76ZZ6", title: "Folinstall Wide Mouth Glass Cookie Jar with Airtight Lid, 1/2 Gallon", w: 676, h: 987 },
    { asin: "B0BQB4G693", title: "LUSHYUM Cookie Decorating Kit, 118 Pcs, with Storage Case", w: 1494, h: 1500 },
  ],
  idea12: [
    { asin: "B09497R2CN", title: "Amazon Essentials Cotton Balls, 200 Count", w: 1038, h: 1500 },
    { asin: "B0B7JBPG6K", title: "Toddmomy Mini Red Plastic Shopping Baskets, 10 Pcs, Dollhouse Accessories", w: 1276, h: 1266 },
  ],
  idea13: [
    { asin: "B0CW73KY5Z", title: "Dr. Oetker Whipped Cream Stabilizer, 0.35 oz, Pack of 6", w: 1500, h: 1500 },
    { asin: "B0CBTZWYV5", title: "Skylety Christmas Elf Tiny Elves Miniature Toys, 6 Pcs, Classic Style", w: 1497, h: 1500 },
  ],
  idea14: [
    { asin: "B0FG865RW8", title: "Youdepot Silver Mirror Disco Balls, 4 Inch, 2 Pack, with Hanging Strings", w: 1482, h: 1500 },
    { asin: "B0FJTL63J6", title: "Barbie Rainbow Sparkle Hair Doll and Accessories", w: 1500, h: 1497 },
  ],
  idea15: [
    { asin: "B00000DMF5", title: "Hasbro Gaming Candy Land Kingdom of Sweet Adventures Board Game", w: 1500, h: 945 },
    { asin: "B0084DS9EE", title: "Bedtime Originals Plush Monkey Ollie, Brown, 8 Inch", w: 381, h: 500 },
  ],
  idea16: [
    { asin: "B09SX7V2YD", title: "SweetGourmet Toasted Coconut Marshmallow Cubes, Vanilla, 1 lb Bag", w: 1000, h: 920 },
    { asin: "B0D182VR8N", title: "Amazon Fresh Mini Marshmallows, 10 oz, Pack of 3", w: 1500, h: 801 },
  ],
  idea17: [
    { asin: "B0H5C2QJQ7", title: "woric Gingham Ribbon Set, 5 Rolls, 3/8 Inch, 50 Yards Total", w: 1429, h: 1500 },
    { asin: "B0F8VD6BSR", title: "LaRibbons Christmas Ribbon for Crafts, 10 Rolls, 47 Yards Total", w: 1492, h: 1500 },
  ],
  idea18: [
    { asin: "B07PBXRJ7G", title: "Melissa and Doug Dust Sweep Mop 6-Piece Wooden Cleaning Toy Set", w: 1495, h: 1500 },
    { asin: "B08GWWWSWG", title: "Youngever 300 Pack Motivational Quote Cards, 100 Unique Designs", w: 1457, h: 1500 },
  ],
  idea19: [
    { asin: "B07FSZ7NS5", title: "Mini Chalkboard Signs with Easel Stands, 20 Pack, Small Food Labels", w: 1435, h: 1500 },
    { asin: "B0FRFSKR19", title: "TNDOOR Snowman Fake Snowball Fight Set, 28 Pcs, with Metal Buckets", w: 1500, h: 1449 },
  ],
  idea20: [
    { asin: "B013RQPB5C", title: "Crayola Ultra Clean Washable Markers, 40 Count", w: 1500, h: 1362 },
    { asin: "B01AW5V7PE", title: "Melissa and Doug 9 x 12 Inch Drawing Paper Pad, 3 Pack", w: 1500, h: 1053 },
  ],
  idea21: [
    { asin: "B0FM3C288W", title: "Christmas Elf Doll Costume Set, 4 Pcs, with Hat, Collar, Gloves and Ears", w: 1500, h: 1478 },
    { asin: "B0CN2V1S6Q", title: "Thin Felt Fabric Sheets, Assorted Colors, for Crafts and DIY", w: 1499, h: 1500 },
  ],
  idea22: [
    { asin: "B0B49BS7GH", title: "Robo Alive Robo Fish Robotic Swimming Fish by ZURU, Teal and Orange", w: 1500, h: 1286 },
    { asin: "B09YTXVY9S", title: "Cotton Twine String, 500 Feet, for Crafts and Gift Wrapping", w: 680, h: 1200 },
  ],
  idea23: [
    { asin: "B0H7GM1ZK8", title: "Crtiin 1000 Sheet Christmas Paper Chain Garland Strips, 1.77 x 8.27 Inch", w: 1500, h: 1500 },
    { asin: "B00MJ8JSFE", title: "Crayola Construction Paper Bulk Pack, 480 Sheets, 10 Assorted Colors", w: 1103, h: 788 },
  ],
  idea24: [
    { asin: "B0H2HK4T6G", title: "TwoDays Santa and Mrs. Claus Resin Figurines, 5.9 Inch", w: 1036, h: 1500 },
    { asin: "B0F27G2496", title: "Lovelfstory Santa's Letter Elf Doll Accessories Clothes", w: 894, h: 1302 },
  ],
  keep: [
    { asin: "B0CSHNRB37", title: "The Elf on the Shelf Polar Props Super Daily Scene Kit", w: 1500, h: 1175 },
    { asin: "B0DGN9C8QF", title: "Ziploc Gallon Freezer Bags, Stand-Up Bottom, 66 Count", w: 1397, h: 1500 },
  ],
  busy: [
    { asin: "B0043P0IAK", title: "Scotch-Brite Zero Scratch Scrub Sponge, 6 Pack", w: 1256, h: 1000 },
    { asin: "B000B6MKMO", title: "Hot Wheels 10-Pack Toy Cars, Styles May Vary", w: 1500, h: 977 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "elf-on-the-shelf-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

const PIN = {
  intro: { src: "hero", w: 612, h: 816, alt: "Elf on the Shelf sitting on a bathroom sink beside a toothpaste smiley face doodle", url: "https://www.pinterest.com/pin/good-morning-message-from-our-elf--5770305746404560/", label: "Good Morning Elf Surprise" },
  whatIsTradition: { src: "what-is-the-tradition", w: 852, h: 1136, alt: "Elf on the Shelf sitting on a kitchen counter beside a pile of flour and mini marshmallows made to look like snow", url: "https://www.pinterest.com/pin/elf-on-the-shelf-north-pole-breakfast--45669383712459656/", label: "Elf Brings Snow From the North Pole" },
  howToMakeEasy: { src: "how-to-make-it-easy", w: 1080, h: 1920, alt: "Elf on the Shelf hanging spread-eagle on a wall clock beside a handwritten note", url: "https://www.pinterest.com/pin/10-super-easy-low-effort-elf-on-the-shelf-ideas-for-us-lazy-moms-christmas-is-coming--774124929251629/", label: "Low-Effort Elf on the Shelf Idea" },
  idea1: { src: "cereal-breakfast", w: 1280, h: 1334, alt: "Elf on the Shelf sitting in a bowl of cereal with a spoon beside the words BE GOOD spelled out in Cheerios", url: "https://www.pinterest.com/pin/elf-on-the-shelf-ideas-breakfast-cereal-message-out-of-cheerios--37576978132982542/", label: "Elf Cereal Breakfast Message" },
  idea2: { src: "christmas-lights", w: 1536, h: 2048, alt: "Elf on the Shelf completely tangled in a string of Christmas lights beside a box of mini string lights and a handwritten note", url: "https://www.pinterest.com/pin/all-tangled-up--99853316732161434/", label: "Elf Tangled in Christmas Lights" },
  idea3: { src: "marshmallow-snowball-fight", w: 1200, h: 861, alt: "Elf on the Shelf hiding behind a marshmallow fort across from a knocked-over toy snowman beside a Caution Snowball Fight sign", url: "https://www.pinterest.com/pin/elf-on-the-shelf-ideas-with-marshmallows--2603712281167040/", label: "Elf Marshmallow Snowball Fight" },
  idea4: { src: "bubble-bath", w: 3024, h: 4032, alt: "Elf on the Shelf sitting in a glass bowl filled with mini marshmallows and a rubber duck to look like a bubble bath", url: "https://www.pinterest.com/pin/elf-on-the-shelf-ideas-bubble-bath--51509989481257228/", label: "Elf Marshmallow Bubble Bath" },
  idea5: { src: "hiding-in-tree", w: 2340, h: 4160, alt: "Elf on the Shelf hanging as an ornament inside a decorated Christmas tree next to candy canes and glass baubles", url: "https://www.pinterest.com/pin/elf-on-the-shelf-christmas-tree-ornament--240027855114461957/", label: "Elf Hiding in the Christmas Tree" },
  idea6: { src: "toilet-paper-snowman", w: 900, h: 1200, alt: "Elf on the Shelf peeking out of a snowman built from three stacked rolls of toilet paper with a drawn face", url: "https://www.pinterest.com/pin/elf-on-the-shelf-toilet-paper-snowman--177962622764984302/", label: "Elf Toilet Paper Snowman" },
  idea7: { src: "christmas-note", w: 390, h: 520, alt: "Elf on the Shelf beside a Christmas tree and snowflake made of colorful sticky notes on a wall spelling the word Sticky", url: "https://www.pinterest.com/pin/elf-on-the-shelf-sticky-post-it-notes--7951736828683081/", label: "Elf Sticky Note Message" },
  idea8: { src: "reading-book", w: 1200, h: 901, alt: "Elf on the Shelf sitting atop the Elf on the Shelf book surrounded by a circle of action figures and stuffed toys as if reading to them", url: "https://www.pinterest.com/pin/elf-on-the-shelf-reading-a-book-to-toys--41306521573423159/", label: "Elf Reading a Book to Toys" },
  idea9: { src: "movie-night", w: 3264, h: 2448, alt: "Elf on the Shelf sitting in a bowl of popcorn with a TV remote surrounded by Christmas movie DVDs", url: "https://www.pinterest.com/pin/elf-on-the-shelf-christmas-movie-night-with-popcorn-and-candy-i-left-a-trail-of-popcorn-on-the--284008320225218597/", label: "Elf Christmas Movie Night" },
  idea10: { src: "candy-cane-swing", w: 1161, h: 2064, alt: "Two Elf on the Shelf dolls swinging from candy canes tied with string to a chandelier above a mini Christmas tree", url: "https://www.pinterest.com/pin/elf-on-the-shelf-hang-out-on-candy-cane-swings--165859198757212456/", label: "Elf Candy Cane Swing" },
  idea11: { src: "cookie-jar", w: 1001, h: 563, alt: "Elf on the Shelf sitting on the edge of a glass jar filled with decorated Christmas cookies beside kitchen utensils", url: "https://www.pinterest.com/pin/elf-on-the-shelf-in-the-cookie-jar--225883737536317122/", label: "Elf in the Cookie Jar" },
  idea12: { src: "snow-angel", w: 1536, h: 2048, alt: "Elf on the Shelf riding a toy laundry basket snow machine with cotton balls scattered across the floor like snow near a Christmas tree", url: "https://www.pinterest.com/pin/nisseljer-elf-on-a-shelf--32299322301013945/", label: "Elf Cotton Ball Snow Scene" },
  idea13: { src: "in-the-fridge", w: 1066, h: 1600, alt: "Elf on the Shelf wrapped in a green towel tucked into the door shelf of an open refrigerator beside whipped cream and condiments", url: "https://www.pinterest.com/pin/elf-on-the-shelf-in-the-fridge--430727151836353560/", label: "Elf Hiding in the Fridge" },
  idea14: { src: "dance-party", w: 852, h: 1136, alt: "Elf on the Shelf dancing with a Barbie doll on a hand-drawn dance floor beneath a hanging disco ball", url: "https://www.pinterest.com/pin/73324300158900155/", label: "Elf Dance Party With Barbie" },
  idea15: { src: "board-game", w: 1722, h: 1722, alt: "Elf on the Shelf playing a childrens board game on the floor with a stuffed monkey, tiger and toy robot as friends", url: "https://www.pinterest.com/pin/elf-on-the-shelf-plays-a-board-game-with-his-buddies--284993482641304763/", label: "Elf Plays a Board Game" },
  idea16: { src: "marshmallow-tower", w: 399, h: 600, alt: "Elf on the Shelf sitting beside a small snowman built from stacked marshmallows with mini marshmallows scattered around", url: "https://www.pinterest.com/pin/elf-on-the-shelf-ideas-using-marshmallows--23855073002420023/", label: "Elf Marshmallow Snowman Tower" },
  idea17: { src: "wrapped-gift", w: 700, h: 933, alt: "Two Elf on the Shelf dolls tangled together in orange gingham ribbon on a wood floor", url: "https://www.pinterest.com/pin/elf-on-the-shelf-ideas-for-multiple-elves-elf-rolled-up-in-ribbon--89579480078929639/", label: "Elf Wrapped in Ribbon" },
  idea18: { src: "kindness-challenge", w: 750, h: 1000, alt: "Elf on the Shelf sitting in a bathroom sink holding a scrub brush as if helping to clean", url: "https://www.pinterest.com/pin/elf-on-the-shelf-cleaning-up--279012139388027357/", label: "Elf Helping to Clean Up" },
  idea19: { src: "snowball-fight-stuffed-animals", w: 1200, h: 1200, alt: "Two Elf on the Shelf dolls sitting on either side of a chalkboard sign reading Snowball Fight Anyone surrounded by balled-up paper snowballs", url: "https://www.pinterest.com/pin/elf-on-the-shelf-ideas--104075441377468723/", label: "Elf Paper Snowball Fight" },
  idea20: { src: "art-studio", w: 1440, h: 1440, alt: "Elf on the Shelf standing on a child's Christmas tree drawing holding a marker beside a box of Crayola markers and crayons", url: "https://www.pinterest.com/pin/elf-on-the-shelf--3799980907261610/", label: "Elf Drawing Pictures" },
  idea21: { src: "pizza-party", w: 900, h: 1200, alt: "Elf on the Shelf wearing a felt pizza slice costume with pepperoni dots, tucked on a shelf beside holiday decor", url: "https://www.pinterest.com/pin/elf-on-a-shelf-idea--380132024811325297/", label: "Elf Pizza Costume" },
  idea22: { src: "fishing", w: 2448, h: 3264, alt: "Elf on the Shelf sitting on a bathroom faucet fishing with a red string for toy fish floating in the sink", url: "https://www.pinterest.com/pin/elf-on-the-shelf-fishing-pole-water-fish-idea--527836018799207956/", label: "Elf Goes Fishing in the Sink" },
  idea23: { src: "christmas-countdown", w: 700, h: 933, alt: "Elf on the Shelf hanging from a red and green paper chain countdown looped around a ceiling fan", url: "https://www.pinterest.com/pin/elf-on-the-shelf-countdown-to-christmas-ideas-paper-chain-craft--89579480080475399/", label: "Elf Paper Chain Countdown" },
  idea24: { src: "christmas-eve-goodbye", w: 1200, h: 1600, alt: "Santa Claus holding an Elf on the Shelf doll and looking down at it while sitting in a chair", url: "https://www.pinterest.com/pin/cute-picture-to-leave-under-the-tree-when-elf-goes-back-to-the-north-pole-on-christmas-eve--1970393567164281/", label: "Elf Returning to Santa on Christmas Eve" },
  keepFromExhausting: { src: "keep-it-simple", w: 1024, h: 1024, alt: "Three side by side Elf on the Shelf scenes showing an elf taped to a wall surrounded by toy soldiers, an elf sharing a drink with a Barbie doll, and an elf leading a line of shoes like a train", url: "https://www.pinterest.com/pin/478859372870402281/", label: "Quick and Easy Elf Scenes" },
  busyParents5min: { src: "busy-parents", w: 600, h: 600, alt: "Elf on the Shelf sitting on a sponge beside a handwritten Elf Car Wash sign surrounded by toy cars", url: "https://www.pinterest.com/pin/fun-and-easy-elf-on-the-shelf-ideas-for-families-with-small-children--75153887511841404/", label: "Elf Car Wash Idea" },
  conclusion: { src: "final-thoughts", w: 1108, h: 736, alt: "A TV screen showing a cracked glass effect around a tiny animated elf beside a lit Christmas tree in a cozy living room", url: "https://www.pinterest.com/pin/funny-elf-on-the-shelf-prank--914862419309553/", label: "Elf on the Shelf Prank Scene" },
};

function photo(key, productsKey) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "elf-on-the-shelf-ideas", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Elf Makes a Cereal Breakfast",
    photoKey: "idea1",
    paras: [
      "Put your elf beside a bowl of cereal with a tiny spoon and a few cereal pieces scattered around.",
      "For an extra laugh, place the elf inside the cereal box with only its head sticking out.",
      "You can leave a little note saying, &ldquo;Breakfast was delicious!&rdquo;",
      "This setup takes almost no time, which makes it perfect for those nights when you completely forget about the elf until you&rsquo;re already in bed.",
    ],
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Elf Gets Tangled in Christmas Lights",
    photoKey: "idea2",
    paras: [
      "Wrap a short strand of unplugged Christmas lights loosely around your elf and place the elf near the Christmas tree.",
      "Make the scene look like the elf tried to decorate the tree and got completely tangled.",
      "Ever tried decorating a tree without getting tangled in lights yourself? Exactly. The elf understands.",
      "Keep the lights unplugged and away from heat sources. The official Elf on the Shelf safety guidance specifically warns against placing the elf or flammable materials near flames, electrical sources, or other fire hazards.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Elf Has a Marshmallow Snowball Fight",
    photoKey: "idea3",
    paras: [
      "Grab some mini marshmallows and place them around the room.",
      "Stack a few marshmallows into a small fort as your elf&rsquo;s pretend hiding spot, then knock over a stuffed snowman on the opposite side like it just lost the battle.",
      "A tiny handmade sign that says &ldquo;Caution: Snowball Fight!!!&rdquo; adds a nice finishing touch.",
      "This idea works especially well when you have several toys that can join the scene.",
    ],
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Elf Takes a Bubble Bath",
    photoKey: "idea4",
    paras: [
      "Give your elf a tiny &ldquo;bath&rdquo; using a bowl, mug, or small container filled with mini marshmallows to look like bubbles.",
      "Place the elf inside and add a towel nearby.",
      "You can also put a few small bath toys around the scene.",
      "The official Elf on the Shelf site even features a Scout Elf spa setup using a washcloth, bowl, marshmallows, and paper decorations.",
    ],
    quote: { text: "Even Scout Elves need to kick back and relax!", cite: "Elf on the Shelf US" },
    afterQuote: ["I completely agree. After all that nightly flying, the elf deserves a spa day."],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Elf Hides in the Christmas Tree",
    photoKey: "idea5",
    paras: [
      "Sometimes the simplest idea wins.",
      "Place your elf somewhere inside the Christmas tree and let your kids search for it in the morning.",
      "Move the elf to a different branch each night so the game feels slightly different.",
      "This idea requires zero extra supplies, which makes it one of my favorite backup setups.",
    ],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Elf Creates a Toilet Paper Snowman",
    photoKey: "idea6",
    paras: [
      "Wrap a small amount of toilet paper around a toy or stack toilet paper rolls to create a tiny snowman scene.",
      "Add two black dots for eyes and a little paper carrot nose.",
      "Put your elf beside the creation with a marker nearby.",
      "The mess stays relatively small, but your kids get the impression that the elf spent the night getting creative.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Elf Writes a Christmas Note",
    photoKey: "idea7",
    paras: [
      "Sit your elf beside a message built entirely out of colorful sticky notes on the wall or fridge.",
      "Shape the notes into a little Christmas tree and a snowflake, then spell out something simple underneath, like a name or a short word.",
      "You can also stick a real note nearby that says something like, &ldquo;Good morning! I noticed how kind you were yesterday. Keep spreading Christmas cheer!&rdquo;",
      "This idea adds something different because it turns the elf into more than a hiding game.",
      "A tiny personal message can feel much more special than an elaborate setup.",
    ],
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Elf Reads a Book",
    photoKey: "idea8",
    paras: [
      "Place your elf in front of a favorite children&rsquo;s book with stuffed animals sitting around it.",
      "Open the book to a colorful page.",
      "For an even sweeter scene, place a small blanket underneath everyone.",
      "This setup works particularly well near bedtime because you can use the scene as a reminder to read together.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Elf Has a Movie Night",
    photoKey: "idea9",
    paras: [
      "Create a miniature movie theater using a tablet or TV in the background, a few stuffed animals, and popcorn.",
      "Give your elf a tiny bowl of popcorn.",
      "You can even make a little sign that says &ldquo;Elf Movie Night.&rdquo;",
      "The official Elf on the Shelf store currently features movie night among its suggested Scout Elf surprise setups.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Elf Makes a Candy Cane Swing",
    photoKey: "idea10",
    paras: [
      "Tie a ribbon or string between two sturdy points, like a light fixture, and attach a candy cane to create a tiny swing.",
      "Place your elf on the swing. If you have more than one elf, hang a second swing right beside it for a matching pair.",
      "This scene looks adorable in photographs, but make sure you secure everything properly and keep small materials away from young children who might grab them.",
    ],
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Elf Gets Into the Cookie Jar",
    photoKey: "idea11",
    paras: [
      "Put your elf beside the cookie jar with a few crumbs around its feet.",
      "If you want to make the scene funnier, put one cookie in the elf&rsquo;s hands.",
      "Leave a note saying, &ldquo;I couldn&rsquo;t resist.&rdquo;",
      "Honestly, I wouldn&rsquo;t blame the elf either.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Elf Makes a Paper Snow Angel",
    photoKey: "idea12",
    paras: [
      "Turn a small toy laundry basket into a pretend snow machine and sit your elf right on top of it.",
      "Scatter cotton balls or pieces of white paper across the floor around the basket, as if your elf just sprayed snow everywhere.",
      "Add a tiny scarf or hat if you have one.",
      "This setup gives you the winter feeling without bringing actual snow into your living room.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Elf Hides in the Fridge",
    photoKey: "idea13",
    paras: [
      "Wrap your elf in a small towel or scarf and place it somewhere safe inside the refrigerator.",
      "Add a note saying:",
      "&ldquo;It&rsquo;s freezing up here!&rdquo;",
      "Don&rsquo;t leave the elf anywhere near food that could create a hygiene issue, and make sure the placement won&rsquo;t interfere with your refrigerator door.",
      "This one works particularly well when your kids expect the elf to appear somewhere warm.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Elf Has a Dance Party",
    photoKey: "idea14",
    paras: [
      "Pair your elf up with a Barbie or another doll and turn the scene into a tiny Christmas dance party.",
      "Hang a small disco ball overhead if you have one, or draw a quick dance floor on paper underneath them.",
      "You can place the pair near a speaker without turning the setup into an electrical experiment.",
      "The official Elf on the Shelf store also lists dance parties among its Scout Elf scene ideas.",
    ],
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Elf Plays a Board Game",
    photoKey: "idea15",
    paras: [
      "Set up a small board game and position the elf among a few stuffed animal friends like it&rsquo;s in the middle of a real game night.",
      "Place a few game pieces around them.",
      "You could even leave the dice showing an obviously dramatic number.",
      "Kids love scenes that make the elf look like it actually has a personality.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Elf Builds a Marshmallow Tower",
    photoKey: "idea16",
    paras: [
      "Give your elf a pile of mini marshmallows and let it stack a few into a tiny marshmallow snowman right beside itself.",
      "Draw a simple face on the top marshmallow and scatter a few extra ones around the &ldquo;construction site.&rdquo;",
      "For younger children, skip any small pieces that could create a choking hazard. The official safety guidance warns parents about small objects and recommends adult supervision for Scout Elf activities.",
    ],
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Elf Gets Wrapped Like a Present",
    photoKey: "idea17",
    paras: [
      "Grab a spool of ribbon and let your elf get completely wrapped up in it, as if it tried to wrap itself like a present and got a little too enthusiastic.",
      "If you have a second elf, tangle them up together for double the trouble.",
      "Add a tag nearby that says:",
      "&ldquo;To: The Best Kid Ever.&rdquo;",
      "This idea feels especially magical during the final week before Christmas.",
    ],
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Elf Makes a Kindness Challenge",
    photoKey: "idea18",
    paras: ["Have your elf model the challenge instead of just announcing it. Sit it in the sink with a tiny scrub brush, as if it already got started on today&rsquo;s kind deed.", "Prop a small card nearby with a simple challenge, like:", "&ldquo;Do one kind thing today.&rdquo;", "You can make the challenge age appropriate:"],
    list: ["Help clean up", "Share a toy", "Compliment someone", "Help with breakfast", "Write a thank-you note"],
    after: ["The tradition can become much more meaningful when you use the elf to encourage kindness rather than only creating silly messes."],
  },
  {
    n: "19",
    productsKey: "idea19",
    title: "Elf Has a Snowball Fight With Stuffed Animals",
    photoKey: "idea19",
    paras: [
      "Ball up little scraps of paper into tiny snowballs and scatter them between your elf and a second elf or stuffed animal sitting across the room.",
      "Position everyone as if they just finished an intense snowball battle.",
      "A small chalkboard sign propped up between them that says &ldquo;Snowball Fight Anyone?&rdquo; sets the scene perfectly.",
      "Why does the elf always seem to start trouble and somehow look innocent afterward?",
    ],
  },
  {
    n: "20",
    productsKey: "idea20",
    title: "Elf Makes a Tiny Art Studio",
    photoKey: "idea20",
    paras: [
      "Give your elf a piece of paper and some crayons.",
      "Place a few drawings around the elf.",
      "You can even ask your child to create something for the elf later that day.",
      "The official Elf on the Shelf website also offers drawing activities and printable templates for children.",
      "This idea turns a morning surprise into an activity your child can continue after breakfast.",
    ],
  },
  {
    n: "21",
    productsKey: "idea21",
    title: "Elf Has a Pizza Party",
    photoKey: "idea21",
    paras: [
      "Dress your elf up in a tiny felt pizza slice costume, complete with pepperoni dots, and tuck it in among your holiday decor for your kids to discover.",
      "If you don&rsquo;t have a costume, a paper pizza slice cut to fit around the elf works just as well.",
      "The official Scout Elf product ideas include pizza-themed scenes, so this setup fits naturally into the playful food theme.",
    ],
  },
  {
    n: "22",
    productsKey: "idea22",
    title: "Elf Goes Fishing",
    photoKey: "idea22",
    paras: [
      "Create a tiny fishing scene using a cup, blue paper, and a piece of string.",
      "Sit your elf beside the &ldquo;pond.&rdquo;",
      "Use paper fish instead of anything sharp or complicated.",
      "If you have a toy fishing set, even better.",
      "You can make this scene in about five minutes, but it looks like you planned it days in advance.",
    ],
  },
  {
    n: "23",
    productsKey: "idea23",
    title: "Elf Creates a Christmas Countdown",
    photoKey: "idea23",
    paras: [
      "Make a homemade paper chain countdown and loop it around a light fixture or ceiling fan, then have your elf hang from it like it&rsquo;s swinging on the countdown itself.",
      "Number each link so your child can tear one off each morning to see how many days remain until Christmas.",
      "This idea gives your elf a purpose beyond hiding and creates a daily ritual that builds anticipation.",
    ],
  },
  {
    n: "24",
    productsKey: "idea24",
    title: "Elf Leaves a Christmas Eve Goodbye",
    photoKey: "idea24",
    paras: [
      "Save this one for Christmas Eve.",
      "If you have a Santa photo, figurine, or costume around, pose your elf sitting with Santa for one last picture, as if he&rsquo;s personally walking the elf home.",
      "Otherwise, place your elf beside a small handwritten goodbye note and perhaps a tiny Christmas treat.",
      "You can explain that the elf needs to return to the North Pole to help Santa.",
      "The official tradition says Scout Elves return to the North Pole on Christmas Eve.",
      "Keep the final scene simple. After weeks of elaborate hiding spots, a quiet goodbye can actually feel more meaningful.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const quote = idea.quote ? `<blockquote><p>&ldquo;${idea.quote.text}&rdquo;</p><cite>&mdash; ${idea.quote.cite}</cite></blockquote>` : "";
  const afterQuote = idea.afterQuote ? idea.afterQuote.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const photoHtml = idea.photoKey ? photo(idea.photoKey, idea.productsKey) : (idea.productsKey ? productGrid(idea.productsKey) : "");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${list}
    ${after}
    ${quote}
    ${afterQuote}
    ${photoHtml}`;
}

const body = `
<p>Some mornings call for coffee. December mornings call for finding the elf before your kids beat you to it. These 24 Elf on the Shelf ideas can help you create fun Christmas moments without turning your kitchen into a North Pole production set every night.</p>
<p>I love Elf on the Shelf because the best setups rarely need much. A few cereal pieces, some toilet paper, a favorite toy, or a handwritten note can turn an ordinary morning into something your kids talk about all day.</p>
<p>And honestly, that matters. You do not need to spend an hour creating an elaborate elf scene at 11:47 p.m. when you already have tomorrow&rsquo;s lunch boxes waiting for you.</p>
<p>The trick? Choose ideas that look magical but take very little effort.</p>
${photo("intro", "intro")}

<h2>What Is the Elf on the Shelf Tradition?</h2>
<p>The Elf on the Shelf tradition centers around a Scout Elf who visits a family during the Christmas season. According to the official story, the elf watches what happens during the day, returns to the North Pole at night, and comes back to a different hiding spot the next morning.</p>
<p>The official Elf on the Shelf guide explains:</p>
<blockquote><p>&ldquo;Scout Elves can&rsquo;t talk, but they are great listeners.&rdquo;</p><cite>&mdash; Elf on the Shelf US</cite></blockquote>
<p>That little detail makes the tradition surprisingly fun. Kids can tell the elf secrets, share Christmas wishes, or explain what happened at school while the elf silently sits there looking suspiciously judgmental.</p>
<p>The basic tradition also gives parents plenty of flexibility. You can create simple hiding spots, funny scenes, little surprises, or activities depending on your family&rsquo;s personality.</p>
<p>The official site describes elf ideas as photos or instructions that inspire new landing spots and playful setups.</p>
<p>So don&rsquo;t feel like you need to recreate an elaborate Pinterest scene every single night. The elf works best when you make the tradition fit your family.</p>
${photo("whatIsTradition", "whatIs")}

<h2>How Do You Make Elf on the Shelf Easy?</h2>
<p>The biggest mistake parents make with Elf on the Shelf involves making every setup too complicated.</p>
<p>I learned quickly that the easiest scenes often create the biggest reaction. Kids don&rsquo;t necessarily care whether you spent 45 minutes constructing a tiny ski resort. They care that their elf is sitting inside their cereal box wearing a sock as a hat.</p>
<p>Before you start, keep a small box nearby with things you can reuse:</p>
<ul>
  <li>Mini marshmallows</li>
  <li>String</li>
  <li>Sticky notes</li>
  <li>Cotton balls</li>
  <li>Toilet paper</li>
  <li>Candy canes</li>
  <li>Small toys</li>
  <li>Paper and markers</li>
  <li>Ribbon</li>
  <li>Plastic cups</li>
  <li>Your child&rsquo;s favorite snacks</li>
</ul>
<p>Five minutes of preparation can save you from late-night panic.</p>
<p>The official Elf on the Shelf site also groups ideas into quick five-minute ideas, crafts, printables, recipes, classroom activities, and other categories.</p>
<p>That tells you something important: you don&rsquo;t need complicated props to keep the tradition interesting.</p>
<p>Now let&rsquo;s get to the fun part.</p>
${photo("howToMakeEasy", "howEasy")}

<h2>24 Elf on the Shelf Ideas for Christmas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Keep Elf on the Shelf Ideas From Becoming Exhausting</h2>
<p>Let&rsquo;s talk about the part nobody puts on the cute Pinterest graphic.</p>
<p>You do not need a brand-new masterpiece every night.</p>
<p>Seriously.</p>
<p>If you create elaborate scenes every day, you&rsquo;ll eventually find yourself standing in the kitchen at midnight wondering why you ever introduced this tradition in the first place.</p>
<p>I prefer a simple rotation:</p>
<ul>
  <li>Funny setup</li>
  <li>Hiding spot</li>
  <li>Activity</li>
  <li>Kindness message</li>
  <li>Snack surprise</li>
  <li>Simple note</li>
  <li>Bigger weekend scene</li>
</ul>
<p>Then repeat the pattern.</p>
<p>You can also prepare several scenes in advance. Put the materials into separate bags and label each bag with a date.</p>
<p>That tiny bit of preparation can save your sanity later.</p>
<p>The official Elf on the Shelf site encourages families to choose ideas that match their own family and offers categories ranging from quick setups to crafts and recipes.</p>
${photo("keepFromExhausting", "keep")}

<h2>Easy Elf on the Shelf Ideas for Busy Parents</h2>
<p>If you only have five minutes, don&rsquo;t panic.</p>
<p>Try these:</p>
<p>Hide the elf in a stocking.</p>
<p>Put the elf inside the cereal box.</p>
<p>Place the elf beside the toothbrushes.</p>
<p>Sit the elf on the Christmas tree.</p>
<p>Give the elf a candy cane.</p>
<p>Put the elf inside a gift bag.</p>
<p>Place the elf beside a handwritten note.</p>
<p>Hide the elf underneath the Christmas tree.</p>
<p>Give the elf a &ldquo;car wash&rdquo; using a sponge and a pile of your child&rsquo;s toy cars.</p>
<p>These setups prove something I wish more parents remembered: the magic comes from the surprise, not the production value.</p>
<p>Your child doesn&rsquo;t know how long you spent arranging the scene.</p>
<p>They just know the elf moved.</p>
<p>And that alone can create a pretty exciting morning.</p>
${photo("busyParents5min", "busy")}

<h2>A Few Elf on the Shelf Safety Tips</h2>
<p>Fun comes first, but safety matters too.</p>
<p>The official Elf on the Shelf safety guidance recommends adult supervision for activities and warns about choking hazards, sharp objects, and electrical or fire hazards.</p>
<p>Keep these basics in mind:</p>
<ul>
  <li>Keep small objects away from toddlers.</li>
  <li>Avoid sharp craft materials around children.</li>
  <li>Keep the elf away from candles and open flames.</li>
  <li>Don&rsquo;t place the elf near hot appliances.</li>
  <li>Keep food allergies in mind when using snacks.</li>
  <li>Use stable surfaces for climbing or hanging scenes.</li>
  <li>Avoid electrical setups that could create a hazard.</li>
</ul>
<p>The goal involves creating a fun morning surprise, not recreating an elf version of an action movie.</p>

<h2>Do Kids Have to Follow the Elf on the Shelf Rules?</h2>
<p>The traditional story gives families a few basic rules.</p>
<p>The official guide explains that children shouldn&rsquo;t touch the Scout Elf because the tradition says the elf can lose its magic. It also says Scout Elves don&rsquo;t talk, although children can talk to them.</p>
<p>But every family can decide how they want to handle the tradition.</p>
<p>Some parents follow the rules exactly. Others create their own version.</p>
<p>What matters most involves consistency. If your family treats the elf as a magical visitor, keep the story simple and fun.</p>
<p>And if someone accidentally touches the elf?</p>
<p>Don&rsquo;t panic.</p>
<p>You can simply create a little story around it and keep the Christmas morning magic moving.</p>

<h2>Why Simple Elf on the Shelf Ideas Often Work Better</h2>
<p>I think the best Elf on the Shelf ideas share one quality: they create interaction.</p>
<p>A complicated scene looks impressive for five minutes.</p>
<p>An elf leaving a note that says, &ldquo;Can you help me make Christmas cookies today?&rdquo; gives your child something to do.</p>
<p>That&rsquo;s a much bigger win.</p>
<p>The official Elf on the Shelf website describes the tradition as something that can create family bonds through reading, finding the elf, laughing together, and talking about the experience.</p>
<blockquote><p>&ldquo;The tradition sparks endless laughs and conversation.&rdquo;</p><cite>&mdash; Elf on the Shelf US</cite></blockquote>
<p>That&rsquo;s really the heart of it.</p>
<p>The elf doesn&rsquo;t need to become another chore on your December checklist. Use it as a little excuse to laugh together.</p>

<h2>Final Thoughts on These Elf on the Shelf Ideas</h2>
<p>You don&rsquo;t need expensive props, complicated crafts, or a perfectly staged Christmas morning to make Elf on the Shelf ideas memorable.</p>
<p>Start with simple hiding spots. Add funny scenes when you have more time. Use notes and kindness challenges when you want to make the tradition more meaningful.</p>
<p>Most importantly, don&rsquo;t compare your setup with someone else&rsquo;s.</p>
<p>Your elf can sit inside a cereal box one morning and build an elaborate marshmallow tower the next. Nobody needs perfection.</p>
<p>After all, your kids probably won&rsquo;t remember whether you created the most impressive elf setup on the internet.</p>
<p>They&rsquo;ll remember waking up, running downstairs, searching the room, and shouting, &ldquo;I FOUND HIM!&rdquo;</p>
<p>And honestly, isn&rsquo;t that the whole point?</p>
`;

module.exports = { body };
