// Body content for "25 Elf on the Shelf Ideas That Are Actually Fun and
// Easy". Images sourced from Pinterest pins the user selected and
// provided directly; each is credited back to its pin per their request.
// Of the 30 supplied pins, 4 were excluded: pin15 and pin28 showed
// telltale AI-generation artifacts (overly smooth rendering, suspiciously
// perfect symmetric bokeh, slightly-off prop proportions), and pin23 (Lego
// throne) had the same issue, leaving idea 20 without a supplied Lego
// photo — pin29 (an elf painting at an easel) fills that slot instead,
// with the idea text adjusted to match. pin02 was dropped as a
// near-duplicate of pin22 (both show the elf fishing in a bowl). Several
// idea paragraphs were rewritten from the original draft to match what
// each matched photo actually shows (marshmallows not cotton balls,
// labeling gift tags not being wrapped itself, a powdered-sugar snowman
// not a snow angel, etc.) per the standing instruction to keep text and
// photos aligned while preserving the original tone. Ideas 9 and 17 have
// no photo since no supplied pin matched them — both sit between
// photographed ideas, so no two consecutive sections are left bare.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D2DV2GJ1", title: "The Elf on the Shelf 24-Day Ultimate Daily Scene Kit", w: 1500, h: 1464 },
    { asin: "B0HD6QL33X", title: "Silipull 50 Pcs Mini Christmas Gingerbread Figurines, Miniature Decor", w: 1493, h: 1500 },
  ],
  tradition: [
    { asin: "B07TJJTBW8", title: "The Elf on the Shelf Box Set, Boy Scout Elf with Blue Eyes", w: 1110, h: 1434 },
    { asin: "B0H7QZWLFH", title: "Chunful 25 Pcs Mini Reindeer Figurines, Rubber Christmas Deer", w: 1500, h: 1500 },
  ],
  howItWorks: [
    { asin: "B09NGK8CGH", title: "Mini Dry Erase Whiteboard Food Signs, Set of 15, 3 x 4 Inch", w: 1457, h: 569 },
    { asin: "B0FKNL1V3Y", title: "Campfire Mini Marshmallows, Vanilla Flavored, Gluten Free, 1 lb Bag", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0D182VR8N", title: "Amazon Fresh Mini Marshmallows, 10 oz, Pack of 3", w: 1500, h: 801 },
    { asin: "B0H2V1R81S", title: "White Polka Dot Black Cocktail Napkins, 2-Ply Disposable, 50 Pcs", w: 1500, h: 1215 },
  ],
  idea2: [
    { asin: "B07P8W2ZXX", title: "The Elf on the Shelf Plushee Pals Boy Scout Elf Plush, 27 Inch, Blue Eyes", w: 361, h: 1500 },
    { asin: "B0F1FT7BMN", title: "JORNOY 106 Pcs Shatterproof Christmas Ornaments Set, Assorted Baubles", w: 1201, h: 1500 },
  ],
  idea3: [
    { asin: "B0F3VSLJRT", title: "XIEHE Striped Popcorn Boxes, 24 Pack, Mini Paper Candy Containers", w: 1500, h: 1500 },
    { asin: "B09NY37SWL", title: "BadenBach Mini Kraft Boxes with Clear Window, 50 Pack, White", w: 1457, h: 1500 },
  ],
  idea4: [
    { asin: "B07K9MM4D2", title: "Colovis 16 Pcs Snowman Decorating Kit, Snowman Making Kit", w: 1500, h: 1495 },
    { asin: "B08P6VL25N", title: "Giant Self-Adhesive Wiggle Googly Eyes, 8 Pcs, for DIY", w: 996, h: 997 },
  ],
  idea5: [
    { asin: "B0BLNWQMXS", title: "Eaasty 52 Pcs Elf Notes and Naughty or Nice Behavior Checklist Paper", w: 1474, h: 1500 },
    { asin: "B0FKKKQQX7", title: "The Elf on the Shelf Polar Props Official Elf Ideas Fun and Games Kit", w: 1500, h: 1436 },
  ],
  idea6: [
    { asin: "B0D66TNDMZ", title: "520 Pcs Self-Adhesive Wiggle Googly Eyes", w: 930, h: 1120 },
    { asin: "B0CSHNRB37", title: "The Elf on the Shelf Polar Props Super Daily Scene Kit", w: 1500, h: 1175 },
  ],
  idea7: [
    { asin: "B07BJM7VKW", title: "Let It Snow Instant Fake Snow Powder, Made in USA", w: 1431, h: 1500 },
    { asin: "B09CKCQNNS", title: "JOYIN 12 oz Fake Snow Decoration, Artificial Snow Flakes", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B08XDFK39N", title: "Ziyad Giant Marshmallows, 25 oz, Pack of 4", w: 1080, h: 945 },
    { asin: "B0GDSVHSJW", title: "Amazon Grocery Powdered Sugar, 2 lb, Pack of 4", w: 1500, h: 957 },
  ],
  idea9: [
    { asin: "B07XMD739H", title: "Wooden Framed Christmas Chalkboard, 13 x 17 Inch, with White Chalk", w: 1500, h: 1274 },
    { asin: "B07DYG1JDG", title: "Trade Quest Small Low Profile Clipboard, 6 x 9 Inch", w: 985, h: 1500 },
  ],
  idea10: [
    { asin: "B0H292GMKP", title: "Miniature Clawfoot Bathtub, 2 Pack, Vintage Scale Model", w: 1384, h: 1362 },
    { asin: "B0BKTS5R34", title: "JOYIN 30 Pcs Mini Rubber Ducks with Mesh Carry Bag", w: 1500, h: 1447 },
  ],
  idea11: [
    { asin: "B00QGVET18", title: "Karlling Battery Operated Christmas Lights, 13 ft, Multicolor Fairy Lights", w: 1500, h: 996 },
    { asin: "B0HCZJBSL9", title: "Christmas Elf Doll Sweater Clothes, Elf Doll Accessories", w: 1500, h: 1167 },
  ],
  idea12: [
    { asin: "B0FP5L4GDG", title: "Christmas Elf Notes Cards, 4 x 6 Inch, Holiday Cards for Kids", w: 1276, h: 1360 },
    { asin: "B0F8H6HH2L", title: "Christmas Stickers for Kids, 40 Sheets, 400 Stickers", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0007OVY3Q", title: "King Leo Soft Peppermint Candy, 5 lb Bulk", w: 1188, h: 1500 },
    { asin: "B0FDW5RQTD", title: "Curling Ribbon for Gift Wrapping, 12 Rolls, Assorted Colors", w: 1500, h: 1466 },
  ],
  idea14: [
    { asin: "B0DRWDXYRK", title: "ULTICOR Mini Pancake Maker, 14-Hole Electric Poffertjes Pan", w: 1444, h: 989 },
    { asin: "B0BVQJDYLC", title: "Veskaoty Felt Letter Board with 294 Letters, 10 x 10 Inch, Black and Wood", w: 1500, h: 1500 },
  ],
  idea15: [
    { asin: "B0FD6W7V3R", title: "SUNCOLOR Christmas Gift Tags, Self-Adhesive Labels, 3 x 2 Inch, 500 Pack", w: 1432, h: 1500 },
    { asin: "B09Y1QT2JT", title: "WRAPAHOLIC Christmas Wrapping Paper Roll, 30 Inch Jumbo, Red Green Gold Silver", w: 1219, h: 1500 },
  ],
  idea16: [
    { asin: "B0FN8BTKDV", title: "American Greetings 12 Days of Christmas Countdown Mini Note Cards for Kids, 12 ct", w: 1500, h: 1303 },
    { asin: "B0FHB1HSMG", title: "DIY Craft Wooden Empty Advent Calendar with Drawers to Fill", w: 1421, h: 1500 },
  ],
  idea17: [
    { asin: "B0FRFSKR19", title: "TNDOOR Snowman Fake Snowball Fight Set, 28 Pcs, with Metal Buckets", w: 1500, h: 1449 },
    { asin: "B09497R2CN", title: "Amazon Essentials Cotton Balls, 200 Count", w: 1038, h: 1500 },
  ],
  idea18: [
    { asin: "B013RQPB5C", title: "Crayola Ultra Clean Washable Markers, 40 Count, Broad Line", w: 1500, h: 1362 },
    { asin: "B0D7Q45XTP", title: "Washable Window Chalk Markers, 10 Colors, Jumbo Liquid Chalk, 10 mm Nib", w: 1500, h: 1498 },
  ],
  idea19: [
    { asin: "B0D2R4B4JG", title: "Goldfish Cheddar Cheese Crackers, 27.3 oz, Pack of 2", w: 1500, h: 1500 },
    { asin: "B0DJG3SQ1G", title: "Miniature Fishing Pole with Fish for Dolls and Dioramas, 6.75 Inch", w: 755, h: 1500 },
  ],
  idea20: [
    { asin: "B0G69DDM15", title: "Mini Wooden Tabletop Display Easels, 2 Pcs, for Canvas and Photos", w: 1216, h: 1323 },
    { asin: "B0FG2R9T1H", title: "Mini Acrylic Paint Set, 20 Pack, 12 Colors, Washable, with 40 Brushes", w: 1492, h: 1500 },
  ],
  idea21: [
    { asin: "B0B7WY7TBD", title: "Meanplan 100 Pcs Candy Cane Ballpoint Pens, Christmas Umbrella Cane", w: 1433, h: 1500 },
    { asin: "B0DBDR96BS", title: "Santa Letter Kit, Official Christmas Letters to Santa and Wish List", w: 1500, h: 1489 },
  ],
  idea22: [
    { asin: "B07GZ76ZZ6", title: "Folinstall Wide Mouth Glass Cookie Jar with Airtight Lid, 1/2 Gallon", w: 676, h: 987 },
    { asin: "B0D63GZMM4", title: "NABISCO CHIPS AHOY! Original Chocolate Chip Cookies, Party Size, 25.3 oz, Pack of 3", w: 1500, h: 1500 },
  ],
  idea23: [
    { asin: "B0FG865RW8", title: "Youdepot Silver Mirror Disco Balls, 4 Inch, 2 Pack, with Hanging Strings", w: 1482, h: 1500 },
    { asin: "B06WVB8P3B", title: "Luditek Sound Activated Party Lights with Remote, DJ Disco Ball Strobe", w: 1500, h: 1328 },
  ],
  idea24: [
    { asin: "B0DQTWR342", title: "Mini Vintage Suitcase Party Favor Boxes, 24 Pieces", w: 1500, h: 1460 },
    { asin: "B0CBLZVYV5", title: "VIHOSE 20 LED Multicolor Hot Air Balloon String Lights, 10 ft, Battery Operated", w: 1500, h: 1500 },
  ],
  idea25: [
    { asin: "B0FR93FZMQ", title: "MOVINPE Elf Activities Kit, 24 Days Christmas Elf Accessories and Props", w: 1500, h: 1496 },
    { asin: "B0D9RZ1YKN", title: "Vintage Christmas Stationery Paper and Envelopes Set, 5.5 x 8.25 Inch", w: 1500, h: 1473 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "elf-on-the-shelf-ideas-fun-and-easy-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
  hero: { src: "hero", w: 675, h: 1200, alt: "Two Elf on the Shelf dolls sitting in powdered snow next to a powdered-sugar snowman, sharing a mug of hot cocoa", url: "https://www.pinterest.com/pin/291537775903360116/", label: "Two Elves With Hot Cocoa" },
  tradition: { src: "cereal-angel", w: 640, h: 640, alt: "Elf on the Shelf lying in a pile of cereal shaped like a snow angel, next to a jar with a mini reindeer figurine", url: "https://www.pinterest.com/pin/422281212278516/", label: "Elf on the Shelf Cereal Angel" },
  howItWorks: { src: "marshmallow-bubble-bath-tub", w: 1200, h: 1600, alt: "Elf on the Shelf sitting in a toy bathtub filled with marshmallows next to a whiteboard sign reading I'm having a bubble bath", url: "https://www.pinterest.com/pin/315744623897558766/", label: "Elf on the Shelf Bubble Bath" },
  idea1: { src: "cereal-and-marshmallow-mess", w: 870, h: 1087, alt: "Elf on the Shelf sitting on a desk next to a pile of scattered cereal and mini marshmallows, with a cup of milk and a polka dot napkin", url: "https://www.pinterest.com/pin/4606267701482440768/", label: "Elf on the Shelf Cereal Mess" },
  idea2: { src: "giant-elf-christmas-tree", w: 736, h: 981, alt: "Large Elf on the Shelf figure standing beside a decorated Christmas tree, reaching into the branches as if hanging an ornament", url: "https://www.pinterest.com/pin/283586107781293992/", label: "Giant Elf on the Shelf Christmas Tree Idea" },
  idea3: { src: "popcorn-movie-night", w: 900, h: 1200, alt: "Elf on the Shelf sitting inside a popcorn box holding a TV remote, surrounded by candy boxes and a note that says let's have a family movie night", url: "https://www.pinterest.com/pin/844493676205801/", label: "Elf on the Shelf Movie Night" },
  idea4: { src: "toilet-paper-snowman", w: 736, h: 981, alt: "Elf on the Shelf standing beside a snowman built out of stacked toilet paper rolls with button eyes and a carrot nose", url: "https://www.pinterest.com/pin/1059401512357258432/", label: "Elf on the Shelf Toilet Paper Snowman" },
  idea5: { src: "bedtime-story-books", w: 870, h: 1087, alt: "Elf on the Shelf sitting on a stack of children's books holding a handwritten note recommending a book to read", url: "https://www.pinterest.com/pin/4606267757317015616/", label: "Elf on the Shelf Book Ideas" },
  idea6: { src: "fridge-googly-eyes", w: 736, h: 1104, alt: "Refrigerator shelves full of food items with googly eyes stuck on them and a sign reading We've got our eyes on you, with the elf peeking out", url: "https://www.pinterest.com/pin/132926626509851309/", label: "Funny Elf on the Shelf Refrigerator Idea" },
  idea7: { src: "flour-snow-angel", w: 427, h: 640, alt: "Elf on the Shelf lying on a dark wood floor dusted with flour, arms and legs spread to form a snow angel shape", url: "https://www.pinterest.com/pin/140806232214187/", label: "Elf on the Shelf Snow Angel" },
  idea8: { src: "marshmallow-igloo", w: 736, h: 1288, alt: "Elf on the Shelf building a small igloo out of marshmallows dusted with powdered sugar snow and tiny footprints", url: "https://www.pinterest.com/pin/368380444545575954/", label: "Elf Building a Marshmallow Igloo" },
  idea10: { src: "marshmallow-bathtub-duck", w: 736, h: 1312, alt: "Elf on the Shelf sitting in a clawfoot toy bathtub filled with mini marshmallows beside a rubber duck and a folded blue towel", url: "https://www.pinterest.com/pin/33425222231662760/", label: "Easy Elf on the Shelf Bathtub Idea" },
  idea11: { src: "tangled-christmas-lights", w: 736, h: 1288, alt: "Elf on the Shelf tangled up in a string of colorful Christmas lights with a surprised expression in front of a lit tree", url: "https://www.pinterest.com/pin/118782508917848377/", label: "Elf Wrapped in Christmas Lights" },
  idea12: { src: "hide-and-seek-checklist", w: 1080, h: 1920, alt: "Elf on the Shelf sitting on the floor next to a handwritten checklist of toy characters to find, signed from the elf", url: "https://www.pinterest.com/pin/9781324185809053/", label: "Christmas Elf Sitting Next to a Note" },
  idea13: { src: "candy-cane-cage", w: 896, h: 1280, alt: "Elf on the Shelf sitting inside a small cage built from candy canes tied together with ribbon", url: "https://www.pinterest.com/pin/414823815698393001/", label: "Elf on the Shelf Candy Cane Cage" },
  idea14: { src: "pancake-breakfast", w: 900, h: 1200, alt: "Elf on the Shelf wearing a chef hat beside a stack of pancakes topped with sprinkles and syrup, next to a letterboard sign", url: "https://www.pinterest.com/pin/152278031140838955/", label: "Elf on the Shelf Pancake Breakfast" },
  idea15: { src: "labeling-wrapped-gifts", w: 340, h: 510, alt: "Elf on the Shelf holding a marker and writing gift tags on wrapped Christmas presents under the tree", url: "https://www.pinterest.com/pin/330381322674688299/", label: "Elf on the Shelf Gift Wrapping Ideas" },
  idea16: { src: "christmas-countdown-envelopes", w: 2544, h: 3792, alt: "Elf on the Shelf sitting beside a Christmas countdown made of 24 numbered paper envelopes tucked into a plaid blanket by the fireplace", url: "https://www.pinterest.com/pin/971581319634631227/", label: "Easy Elf on the Shelf Christmas Countdown" },
  idea18: { src: "bathroom-mirror-message", w: 736, h: 1288, alt: "Elf on the Shelf standing on a bathroom counter in front of a mirror covered in messages written in washable marker, including Be Good and Santa's Watching", url: "https://www.pinterest.com/pin/767160117816875303/", label: "Elf Writing on Bathroom Mirror" },
  idea19: { src: "goes-fishing", w: 1224, h: 1632, alt: "Elf on the Shelf sitting in a chair holding a tiny fishing pole beside a sign that says Just doin' some fishin', with goldfish crackers scattered around on fake snow", url: "https://www.pinterest.com/pin/71494712831068621/", label: "Elf on the Shelf Fishing Idea" },
  idea20: { src: "paints-a-masterpiece", w: 576, h: 1024, alt: "Elf on the Shelf sitting at a small easel painting a colorful picture, surrounded by paintbrushes and scattered paint", url: "https://www.pinterest.com/pin/1090645234832236524/", label: "Elf on the Shelf Painting Idea" },
  idea21: { src: "dear-santa-letter", w: 900, h: 1200, alt: "Elf on the Shelf sitting on a small table holding a candy cane pen beside a letter addressed Dear Santa", url: "https://www.pinterest.com/pin/633387444824007/", label: "Elf on the Shelf Letter to Santa" },
  idea22: { src: "cookie-jar", w: 768, h: 1365, alt: "Elf on the Shelf upside down inside a glass cookie jar, legs sticking out the top, holding a chocolate chip cookie", url: "https://www.pinterest.com/pin/214554369744001250/", label: "Elf Ideas in a Jar With Cookies" },
  idea23: { src: "dance-party", w: 1200, h: 1800, alt: "Two Elf on the Shelf dolls posed mid-dance move in front of a Christmas tree with a disco ball ornament hanging above them", url: "https://www.pinterest.com/pin/12666442678096224/", label: "Elf on the Shelf Dance Party" },
  idea24: { src: "packs-a-suitcase", w: 870, h: 1113, alt: "Elf on the Shelf sitting beside a small vintage suitcase and a mini hot air balloon with a note that says see you next year", url: "https://www.pinterest.com/pin/4608941725305057024/", label: "Elf on the Shelf Goodbye Suitcase Idea" },
  finalThoughts: { src: "toilet-paper-balance", w: 600, h: 923, alt: "Elf on the Shelf balancing on top of three stacked rolls of toilet paper with its arms raised", url: "https://www.pinterest.com/pin/10344274145086622/", label: "Elf on the Shelf Hide and Seek" },
};

function photo(key, productsKey) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "elf-on-the-shelf-ideas-fun-and-easy", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Elf Makes a Cereal Mess",
    photoKey: "idea1",
    paras: [
      "Scatter a little cereal and a handful of mini marshmallows around your elf on a counter or table.",
      "Add a small cup of milk and a napkin beside them, as though your elf helped themselves to a very messy midnight snack.",
      "Kids usually don&rsquo;t need a complicated story when the visual already tells one. Keep the mess small, though. You want Christmas magic, not a breakfast cleanup operation.",
    ],
    list: ["Cereal", "Mini marshmallows", "Small cup", "Napkin"],
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Elf Gets Stuck in a Christmas Tree",
    photoKey: "idea2",
    paras: [
      "Stand your elf beside your Christmas tree, reaching into the branches as though they got a little too curious about an ornament.",
      "Add a tiny sign saying, &ldquo;I was looking for the perfect spot!&rdquo;",
      "This idea works especially well when your tree already has plenty of decorations because the elf naturally blends into the scene.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Elf Has a Movie Night",
    photoKey: "idea3",
    paras: [
      "Tuck your elf into a popcorn box with a tiny remote control in hand.",
      "Surround them with a few mini candy boxes and leave a note that says, &ldquo;Let&rsquo;s have a family movie night! Pick out a Christmas movie to watch together!&rdquo;",
      "Why not turn the elf&rsquo;s prank into an actual family activity? The official Elf on the Shelf materials also encourage families to enjoy activities such as Christmas movies, baking cookies, decorating the tree and looking at Christmas lights.",
    ],
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Elf Creates a Toilet Paper Snowman",
    photoKey: "idea4",
    paras: [
      "Wrap a small amount of toilet paper around a couple of household objects to create a tiny snowman scene.",
      "Give the snowman paper eyes, a carrot-shaped nose and a little scarf.",
      "Position your elf beside it as though they spent the entire night building their masterpiece.",
      "Just keep the toilet paper intact enough that you don&rsquo;t create a morning disaster.",
    ],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Elf Reads a Bedtime Story",
    photoKey: "idea5",
    paras: [
      "Sit your elf on top of a small stack of children&rsquo;s books.",
      "Tuck a tiny handwritten note into the elf&rsquo;s hands recommending one of the titles for tonight&rsquo;s bedtime story.",
      "This setup feels sweet rather than mischievous, which makes it perfect for quieter nights.",
    ],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Elf Hides in the Fridge",
    photoKey: "idea6",
    paras: [
      "Stick googly eyes on anything in the fridge that will hold one &mdash; fruit, yogurt cups, juice bottles, even the egg carton.",
      "Tuck your elf in among them with a sign that says, &ldquo;We&rsquo;ve got our eyes on you!&rdquo;",
      "This idea takes less than a minute but creates a fun surprise every time the fridge opens.",
      "I would skip this setup if your refrigerator has food or shelves that could create a hygiene problem. Keep the elf near a clean, dry area.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Elf Makes a Snow Angel",
    photoKey: "idea7",
    paras: [
      "Sprinkle a small amount of flour or powdered sugar onto a clean, dark surface so the shape shows up clearly.",
      "Lay the elf down and gently sweep their arms and legs through it to form a snow angel.",
      "The result looks surprisingly convincing without requiring much work.",
    ],
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Elf Builds a Marshmallow Igloo",
    photoKey: "idea8",
    paras: [
      "Stack mini marshmallows into a small igloo shape and dust the whole scene with powdered sugar snow.",
      "Add a few tiny footprints leading up to the entrance, as though your elf has been working on their igloo all night.",
      "I like this type of setup because the elf becomes part of a little story rather than simply sitting somewhere random.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Elf Writes a Christmas Bucket List",
    paras: [
      "Give your elf a small piece of paper with a handwritten Christmas bucket list.",
      "Write simple activities such as:",
      "You can then complete one activity each day. The official Elf on the Shelf resources also encourage families to create Christmas activity checklists and enjoy these kinds of shared experiences.",
    ],
    list: ["Bake cookies", "Watch a Christmas movie", "Decorate the tree", "Drink hot chocolate", "See Christmas lights", "Build a gingerbread house"],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Elf Takes a Bubble Bath",
    photoKey: "idea10",
    paras: [
      "Fill a small toy bathtub or clawfoot dish with mini marshmallows instead of bubbles.",
      "Sit the elf inside as though they&rsquo;re taking a luxurious bubble bath, then add a rubber duck and a tiny folded towel beside the tub.",
      "Honestly, this might be one of my favorite funny Elf on the Shelf ideas because the scene takes almost no effort but looks hilarious.",
    ],
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Elf Gets Tangled in Christmas Lights",
    photoKey: "idea11",
    paras: [
      "Wrap a short strand of unplugged Christmas lights loosely around your elf.",
      "Place them near the Christmas tree with a confused expression.",
      "Please keep the lights unplugged for this setup. The elf can handle the comedy; you don&rsquo;t need an electrical problem joining the storyline.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Elf Plays Hide and Seek",
    photoKey: "idea12",
    paras: [
      "Hide your elf somewhere unexpected but safe.",
      "Leave a handwritten checklist of a few toys for your child to track down, signed from the elf.",
      "This idea works particularly well for younger children because the search becomes part of the tradition.",
      "The official Elf on the Shelf explains that Scout Elves return from their nightly North Pole trips and hide in different places for families to find.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Elf Builds a Candy Cane Fence",
    photoKey: "idea13",
    paras: [
      "Tie candy canes together with ribbon to build a miniature cage or fence around your elf.",
      "Place small toys inside the enclosed area and pretend the elf created a tiny Christmas garden or playground.",
      "You can also use pretzel sticks for a similar miniature fence. The official Elf on the Shelf site features a Scout Elf reindeer corral using pretzel sticks.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Elf Has a Pancake Breakfast",
    photoKey: "idea14",
    paras: [
      "Sit your elf beside a plate of pancakes topped with syrup and sprinkles, wearing a tiny chef&rsquo;s hat.",
      "Prop up a sign nearby that reads something like, &ldquo;How do Santa&rsquo;s elves eat pancakes&hellip;&rdquo;",
      "You could even leave a note asking the family to make pancakes together.",
    ],
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Elf Gets Wrapped Like a Present",
    photoKey: "idea15",
    paras: [
      "Give your elf a marker and let them &ldquo;help&rdquo; wrap presents by labeling the gift tags under the tree.",
      "Write something like &ldquo;To: The Family, From: The North Pole&rdquo; on one of the tags.",
      "This idea works especially well during the final week before Christmas, when the pile of presents really starts to grow.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Elf Creates a Christmas Countdown",
    photoKey: "idea16",
    paras: [
      "Give your elf a paper countdown made of small numbered envelopes, tucked into a cozy blanket by the fireplace.",
      "Place the elf beside the number that matches the current date.",
      "You can make the countdown interactive by letting your child cross off each day. The official Elf on the Shelf website recommends Christmas countdown displays and even suggests using paper, string and decorating supplies to create one.",
    ],
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Elf Has a Snowball Fight",
    paras: [
      "Use cotton balls as fake snowballs.",
      "Put your elf on one side of the room and several stuffed animals on the other.",
      "Scatter cotton balls between them.",
      "Now you have a miniature Christmas battle without covering the entire house in actual snow. Unless you enjoy cleaning snow off the carpet, in which case, please carry on.",
    ],
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Elf Makes a Bathroom Mirror Message",
    photoKey: "idea18",
    paras: [
      "Write a few short messages on the bathroom mirror using a washable marker.",
      "Try something like, &ldquo;Be Good! Santa&rsquo;s Watching. Elfie Was Here.&rdquo;",
      "Place your elf near the sink with the marker beside them.",
      "Keep the messages short and use a marker that cleans off easily. Nobody wants a permanent Christmas greeting.",
    ],
  },
  {
    n: "19",
    productsKey: "idea19",
    title: "Elf Goes Fishing",
    photoKey: "idea19",
    paras: [
      "Scatter a handful of goldfish crackers over a bit of fake snow on a plate or tray.",
      "Give your elf a tiny fishing pole and prop up a sign that says, &ldquo;Just doin&rsquo; some fishin&rsquo;, hope I catch a big one!&rdquo;",
      "You can even make tiny paper fish and attach them to the string with tape.",
    ],
  },
  {
    n: "20",
    productsKey: "idea20",
    title: "Elf Paints a Mini Masterpiece",
    photoKey: "idea20",
    paras: [
      "Set up a tiny easel with a small canvas and a few dabs of paint.",
      "Sit your elf in front of it holding a paintbrush, surrounded by scattered paint splotches, as though they spent the night working on their masterpiece.",
      "You can make this more interactive by letting your child add the finishing touches to the painting the next morning.",
      "This setup works brilliantly because you turn an elf scene into playtime.",
    ],
  },
  {
    n: "21",
    productsKey: "idea21",
    title: "Elf Writes a Nice List",
    photoKey: "idea21",
    paras: [
      "Give your elf a candy cane pen and a letter addressed &ldquo;Dear Santa.&rdquo;",
      "Have the elf mention a few kind things your child did recently, right alongside the usual Christmas wish list.",
      "For example:",
      "I prefer this idea over using the elf purely as a behavior monitor. The official tradition connects Scout Elves with Santa&rsquo;s Nice List, but you can use the concept to celebrate kindness rather than create pressure.",
    ],
    list: ["Helped clean up", "Shared a toy", "Helped someone", "Used kind words"],
  },
  {
    n: "22",
    productsKey: "idea22",
    title: "Elf Gets Into the Cookie Jar",
    photoKey: "idea22",
    paras: [
      "Tip your elf upside down into a glass cookie jar, legs sticking straight up, with a cookie in hand and crumbs scattered around the base.",
      "Add a note:",
      "That one line does most of the work.",
    ],
    list: ["&ldquo;I regret nothing.&rdquo;"],
  },
  {
    n: "23",
    productsKey: "idea23",
    title: "Elf Has a Dance Party",
    photoKey: "idea23",
    paras: [
      "Pose your elf mid-dance move beside a friend in front of the Christmas tree, under a hanging disco ball ornament.",
      "Turn on Christmas music when your child wakes up.",
      "The official Elf on the Shelf preparation guide also suggests using holiday music for karaoke, car rides and family Christmas activities.",
    ],
  },
  {
    n: "24",
    productsKey: "idea24",
    title: "Elf Packs a Suitcase",
    photoKey: "idea24",
    paras: [
      "Place your elf beside a tiny vintage suitcase and a mini hot air balloon.",
      "Write a note that says, &ldquo;See you next year! Love, your elf.&rdquo;",
      "This idea works especially well as Christmas Eve approaches.",
      "The official Elf on the Shelf tradition says Scout Elves return to the North Pole on Christmas Eve, and the brand even provides a &ldquo;Packed and Ready to Go&rdquo; setup with a miniature roller bag.",
    ],
  },
  {
    n: "25",
    productsKey: "idea25",
    title: "Elf Leaves a Goodbye Letter",
    paras: [
      "For the final night, place your elf beside a handwritten goodbye letter.",
      "Thank your child for the fun, mention a few favorite moments from the month, and remind them that Christmas magic doesn&rsquo;t need to disappear after the elf leaves.",
      "You can place the elf near the Christmas tree with a tiny suitcase to complete the scene.",
    ],
    quote: { text: "The day has come. Tonight is Christmas Eve!", cite: "The Elf on the Shelf, Christmas Eve farewell material" },
    afterQuote: ["This ending feels much more meaningful than simply moving the elf away and hoping nobody notices."],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const list = idea.list ? `<ul>\n      ${idea.list.map((l) => `<li>${l}</li>`).join("\n      ")}\n    </ul>` : "";
  const quote = idea.quote ? `<blockquote><p>&ldquo;${idea.quote.text}&rdquo;</p><cite>&mdash; ${idea.quote.cite}</cite></blockquote>` : "";
  const afterQuote = idea.afterQuote ? idea.afterQuote.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const photoHtml = idea.photoKey ? photo(idea.photoKey, idea.productsKey) : (idea.productsKey ? productGrid(idea.productsKey) : "");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${list}
    ${quote}
    ${afterQuote}
    ${photoHtml}`;
}

const body = `
<p>Need 25 elf on the shelf ideas that look magical without turning your kitchen into a Christmas crime scene? Same. I love the tradition, but I also know that nobody wants to spend two hours at midnight building an elaborate elf zipline when tomorrow starts at 6:30 a.m.</p>
<p>The best Elf on the Shelf setups create a little surprise without requiring a craft degree. I&rsquo;ve found that simple scenes often get the biggest reactions because kids care more about discovering what their elf did than the amount of work you put into it.</p>
<p>So, grab your elf, raid the junk drawer, and let&rsquo;s make this Christmas tradition fun instead of another nightly chore.</p>
${photo("hero", "hero")}

<h2>What Is the Elf on the Shelf Tradition?</h2>
<p>The Elf on the Shelf tradition centers around a Scout Elf who joins a family during the Christmas season. According to the official Elf on the Shelf FAQ, Scout Elves fly back to the North Pole each night and return to a new hiding place before the family wakes up.</p>
<p>That simple idea creates the whole game. Kids wake up, search around the house, and try to figure out where their elf landed.</p>
<p>The official tradition also includes a few rules. The Elf on the Shelf guide explains that families should read the story together, name their elf, avoid touching the elf, and expect the elf to return to the North Pole on Christmas Eve.</p>
<blockquote><p>&ldquo;Scout Elves can&rsquo;t talk, but they are great listeners.&rdquo;</p><cite>&mdash; The Elf on the Shelf, &ldquo;Easy Guide to The Elf on the Shelf Tradition&rdquo;</cite></blockquote>
<p>I actually like that part of the tradition. The elf doesn&rsquo;t need to talk or perform some ridiculous stunt every night. The child&rsquo;s imagination does most of the work.</p>
${photo("tradition", "tradition")}

<h2>How Do Elf on the Shelf Ideas Work?</h2>
<p>Every night, you move the elf to a new location or create a small scene around it. Your child then discovers the scene in the morning.</p>
<p>That sounds simple, right? It can become surprisingly complicated when you reach December 17 and realize you have absolutely no idea what the elf should do next.</p>
<p>That&rsquo;s why I prefer easy Elf on the Shelf ideas that use things you already have at home. Paper, cereal, toilet paper, toys, books, marshmallows and Christmas decorations can create dozens of scenes.</p>
<p>The official Elf on the Shelf website also separates its inspiration into quick ideas, crafts, recipes, classroom activities and more.</p>
<p>You don&rsquo;t need to recreate Pinterest-worthy scenes every night. In fact, I think the occasional five-minute setup makes the tradition much easier to enjoy.</p>
<p>Now let&rsquo;s get to the fun part.</p>
${photo("howItWorks", "howItWorks")}

<h2>25 Elf on the Shelf Ideas for a Magical Christmas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Make Elf on the Shelf Ideas Easier</h2>
<p>The biggest mistake I see with this tradition involves trying to make every night spectacular.</p>
<p>You don&rsquo;t need that pressure.</p>
<p>Some nights can feature a hilarious scene with toys everywhere. Other nights can feature your elf sitting beside a Christmas book.</p>
<p>I would keep a small Elf emergency box somewhere in a closet. Stock it with:</p>
<ul>
  <li>Mini notes</li>
  <li>Washable markers</li>
  <li>Ribbon</li>
  <li>Cotton balls</li>
  <li>Candy canes</li>
  <li>Small toys</li>
  <li>Paper</li>
  <li>Tape</li>
  <li>Marshmallows</li>
  <li>Christmas stickers</li>
</ul>
<p>That little box can save you when you remember at 11:47 p.m. that the elf needs to move.</p>
<p>And yes, that happens.</p>

<h2>Should Your Elf Move Every Night?</h2>
<p>The traditional version expects the Scout Elf to move to a new spot each night because the elf supposedly travels to the North Pole and returns before morning.</p>
<p>But you don&rsquo;t need to create an elaborate scene every single night.</p>
<p>Sometimes simply moving the elf from a bookshelf to the kitchen works perfectly.</p>
<p>Other times, you can create a bigger scene when you actually have the energy.</p>
<p>Consistency matters more than complexity.</p>
<p>If your family enjoys elaborate setups, go for it. If you prefer simple ideas, keep them simple.</p>
<p>The official Scout Elf Ideas app follows the same general principle by offering both quick ideas and more creative setups.</p>

<h2>My Favorite Approach to Elf on the Shelf Ideas</h2>
<p>If I had to create an entire month of setups, I wouldn&rsquo;t make 25 complicated scenes.</p>
<p>I would rotate between three types:</p>
<p>Funny scenes: cereal disasters, cookie stealing and toilet paper snowmen.</p>
<p>Sweet scenes: reading books, writing kind notes and preparing Christmas activities.</p>
<p>Interactive scenes: scavenger hunts, countdowns, games and family challenges.</p>
<p>That rotation keeps the tradition interesting without making you feel like you need to become a full-time Christmas production manager.</p>
<p>And honestly, who has time for that?</p>

<h2>Final Thoughts on These 25 Elf on the Shelf Ideas</h2>
<p>The best Elf on the Shelf ideas don&rsquo;t necessarily involve the most decorations, the biggest mess or the most elaborate setup.</p>
<p>They create a tiny moment of surprise.</p>
<p>Your elf can get tangled in Christmas lights one night, read a book to stuffed animals the next, and sit quietly beside a Christmas tree after that.</p>
<p>That&rsquo;s enough.</p>
<p>Use these 25 elf on the shelf ideas as a starting point, then change them around based on your family&rsquo;s personality. Make the elf silly if your kids love jokes. Make the elf sweet if they enjoy little notes. Turn the elf into an excuse for family activities when you want more time together.</p>
<p>And when you completely forget to move the elf one night?</p>
<p>Just blame Santa&rsquo;s GPS.</p>
<p>It happens to the best of us.</p>
`;

module.exports = { body };
