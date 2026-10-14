// Body content for "20 Adorable Mother's Day Crafts for Kids of Every
// Age". Photos carried over from the source article, Pinterest pin
// links preserved. Source had 6 fabricated/misattributed quotes (4
// attributed to named public figures — Elder M. Russell Ballard, James
// E. Faust, Jodi Picoult, John F. Kennedy — plus a generic "Jewish
// Proverb" and "Unknown" filler quote) — all cut, not part of this
// site's voice. Rewritten out of the source's very casual,
// aside-heavy voice into the site's calmer tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B081J66MVD", title: "Greentime 1500 Pcs Round Resin Buttons for Crafts, Sewing and DIY Ornaments", w: 1500, h: 1372 },
    { asin: "B0FT78XTW1", title: "Ninsula 8 x 8 Shadow Box Frame with Soft Linen Back, 12 Pins Included", w: 1500, h: 1453 },
  ],
  intro: [
    { asin: "B0FB15FCJ9", title: "Blue Squid Deluxe Arts and Crafts Supplies Box, 2800+ Pcs, 2 Drawers", w: 1500, h: 1392 },
    { asin: "B07BYWS5XW", title: "Crayola Washable Kids Paint Set, 12 Count, Classic and Glitter Colors", w: 1011, h: 1047 },
  ],
  idea1: [
    { asin: "B0CSD8CNDV", title: "ESRICH 4 x 4 Inch Small Canvases for Painting, 24 Pack, Mini Canvas Boards", w: 1500, h: 1500 },
    { asin: "B0C1YTH9WK", title: "ABEIER Washable Finger Paint for Toddlers, 12 Non-Toxic Colors", w: 1500, h: 1412 },
  ],
  idea2: [
    { asin: "B0CRD3XTHP", title: "Miuyhji 16 Oz Wide Mouth Glass Mason Jars with Lids, 6 Pack", w: 1500, h: 1423 },
    { asin: "B0848DLJW9", title: "Pastel Craft Ribbons, 30 Yard Pack, for Hair Bows and Spring Crafts", w: 705, h: 1188 },
  ],
  idea3: [
    { asin: "B0D7L11NYP", title: "VOKOY Wooden Picture Frames for Crafts, 4 Pack, 4 x 6 Inch, Unfinished DIY", w: 1500, h: 1481 },
    { asin: "B07YQW3VC6", title: "Craft Material Kit, 300 Pcs Flatback Rhinestones, Pearls and Resin Gems, 4 to 20mm", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0DRFWWVBT", title: "TMOL Washable Tempera Paint for Kids, 42 Colors, Non-Toxic, with Brushes", w: 1500, h: 1388 },
    { asin: "B007OCF0C0", title: "Tru-Ray Construction Paper, 10 Vibrant Colors, 9 x 12 Inch, 50 Sheets", w: 1232, h: 1500 },
  ],
  idea5: [
    { asin: "B0DY7J8KD5", title: "Kids Blank Coupon Book, Fun Reward Vouchers for Positive Behavior", w: 1500, h: 1007 },
    { asin: "B0FMJC32WM", title: "TUXIYA Colored Cardstock, 50 Sheets, 8.5 x 11 Inch, 50 Colors", w: 1500, h: 1493 },
  ],
  idea6: [
    { asin: "B07PW8YSTJ", title: "Xornis 100% Cotton Bib Aprons with 2 Pockets, 2 Pack, White", w: 1146, h: 1435 },
    { asin: "B075XQZQ62", title: "U.S. Art Supply Super Markers, 20 Vibrant Dual Tip Fabric Markers", w: 1500, h: 1436 },
  ],
  idea7: [
    { asin: "B0H69T758R", title: "Multi-Colored Tissue Paper, 200 Sheets, 14 x 20 Inch, 25 Colors", w: 1500, h: 1331 },
    { asin: "B0H2XLVRJ2", title: "Italian Crepe Paper for Flower Making Kit, 24 Rolls, with Wire and Tape", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0BRNY9HZB", title: "Dan and Darci Kids Rock Painting Kit, Glow in the Dark", w: 1500, h: 1500 },
    { asin: "B09YT1N8Y4", title: "National Geographic River Rock Painting Craft Kit for Kids", w: 1499, h: 1500 },
  ],
  idea9: [
    { asin: "B0BD8PGNC2", title: "ARTDOT Letter Beads for Jewelry Making Kit, 1400 Pcs, 28 Styles", w: 1500, h: 1416 },
    { asin: "B07D4J1MQ4", title: "Paxcoo Elastic Bracelet String Cord, Stretch Bead Cord for Jewelry Making", w: 1387, h: 1261 },
  ],
  idea10: [
    { asin: "B0B5RBFL7S", title: "Blank Cards and Envelopes, 4 x 6 Inch, 30 Pack, White Cardstock", w: 1434, h: 1456 },
    { asin: "B0FCRDVJT6", title: "Cute Stickers for Kids, 48 Sheets, Variety Pack for Scrapbooking", w: 1000, h: 1000 },
  ],
  idea11: [
    { asin: "B07T4TF63M", title: "vensovo 4 Inch Terracotta Plant Pots with Saucers, 6 Pack, Drainage Holes", w: 1000, h: 826 },
    { asin: "B0CPT14KVX", title: "Tekoly Paint and Plant Kids Gardening Set, 4 Sets, Plant Growing Kit", w: 1500, h: 1409 },
  ],
  idea12: [
    { asin: "B00D8MX6NA", title: "Just My Style Ultimate Scrapbook, 40-Page DIY Scrapbook to Personalize and Decorate", w: 1469, h: 1500 },
    { asin: "B07B8Q8TX7", title: "Self-Adhesive Acid Free Photo Corners for Scrapbooks, 360 Count, Gold", w: 696, h: 1011 },
  ],
  idea13: [
    { asin: "B07D4YF3K4", title: "Neenah Index Cardstock, 8.5 x 11 Inch, 90 lb, White, 300 Sheets", w: 1488, h: 1500 },
    { asin: "B0096XWNNY", title: "Crayola Crayons, 24 Count, Pack of 2", w: 1500, h: 1148 },
  ],
  idea14: [
    { asin: "B0BXTS6L35", title: "Amazon Essentials Epsom Salt Soak, Magnesium Sulfate USP, 3 Pound", w: 800, h: 1500 },
    { asin: "B0B7X8N5CX", title: "Ahhute Sugar Scrub Containers, Glass Bath Salt Jars with Bamboo Spoons", w: 1479, h: 1500 },
  ],
  idea15: [
    { asin: "B0F1YKP76Q", title: "Lzerking Canvas Tote Bags for DIY Projects, 50 Pack, 13 x 15 Inch", w: 1468, h: 1455 },
    { asin: "B0H9RJ37Q4", title: "Roizefar Fabric Paint Set, 48 Colors with Brushes and Palette", w: 1500, h: 1500 },
  ],
  idea16: [
    { asin: "B0BX2NXZCN", title: "Complete Candle Making Kit for Adults and Beginners, with Soy Wax and Supplies", w: 1500, h: 1500 },
    { asin: "B09ZG8P7ZB", title: "Hearth and Harbor Organic Pure Soy Wax for Candle Making, 10 Lbs", w: 1498, h: 1500 },
  ],
  idea17: [
    { asin: "B0F6BZPCY3", title: "Unfinished Wooden Serving Trays with Handles, 2 Pieces, Nested Breakfast Trays", w: 1393, h: 1395 },
    { asin: "B0BTRW29LM", title: "Artmeer 100% Bamboo Bed Tray with Folding Legs, Medium, Natural", w: 1500, h: 1214 },
  ],
  idea18: [
    { asin: "B0DMSBXDNT", title: "Large Glass Apothecary Jars with Lids, Clear Candy Jar for Buffet and Decor", w: 600, h: 1398 },
    { asin: "B0GWCQB2XR", title: "Colored Mini Notepads, 12 Pack, 3 x 5 Inch, Pocket Notepad", w: 1500, h: 1499 },
  ],
  idea19: [
    { asin: "B0FRKXRX8Q", title: "Anthony's Organic Granulated Cane Sugar, 3 Lb, Pack of 2", w: 1500, h: 832 },
    { asin: "B07346X1R5", title: "Handcraft Blends Fractionated Coconut Oil, 16 Fl Oz", w: 1138, h: 1500 },
  ],
  idea20: [
    { asin: "B0FB349R8G", title: "VIMOSE 66 Inch Phone Tripod with Remote and Phone Stand", w: 996, h: 1481 },
    { asin: "B08L5VKNWR", title: "UBeesize 12 Inch LED Ring Light with 62 Inch Tripod Stand, Phone Holder and Remote", w: 1289, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "mothers-day-crafts-for-kids-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "mothers-day-crafts-for-kids", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "mothers-day-crafts-for-kids", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Thumbprint Heart Canvas",
    paras: [
      "A small canvas and a bit of red or pink paint go a long way for this one &mdash; pressing thumbs onto the canvas in a cluster builds a simple heart shape with almost no setup required.",
      "Adding a short phrase underneath finishes the piece, and it suits toddlers and preschoolers especially well, since the whole craft comes down to one repeated motion rather than any fine detail.",
      "Framed or simply hung as-is, it holds up as a genuine keepsake well past the day itself.",
    ],
    photo: photo("thumbprint-heart.jpg", "Thumbprint heart canvas craft for Mother's Day made by a child", 374, 664, "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Mason Jar Love Notes",
    paras: [
      "A plain mason jar turns into a lasting gift once it's filled with small folded notes, each one explaining a different reason a child loves their mom.",
      "Tying a ribbon around the lid and labeling it something like \"52 Reasons I Love You\" turns the jar into something that can be opened one note at a time, long after the day itself has passed.",
      "It's a craft that keeps giving well beyond Mother's Day, since there's no reason the notes all have to be read at once.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "DIY Photo Frame Craft",
    paras: [
      "A plain wooden frame, or one built from cardboard, becomes a genuinely personal gift once it's decorated and filled with a favorite photo.",
      "Buttons, paint, stickers or pressed flowers all work well as embellishments, depending on what's already on hand.",
      "What makes this one stand out is how often it actually gets seen afterward &mdash; a framed photo on a dresser or shelf becomes part of the everyday view rather than something tucked away.",
    ],
    photo: pinPhoto("photo-frame.jpg", "DIY decorated photo frame craft for Mother's Day", 575, 1022, "https://www.pinterest.com/pin/400538960632083229/", "DIY Photo Frame Craft for Mother's Day", "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Handprint Flower Bouquet",
    paras: [
      "Handprints rarely go out of style as a kids' craft, and this version turns them into a lasting bouquet rather than a one-off page.",
      "Dipping a hand in washable paint, stamping it onto paper in a bright color, then cutting out the print and gluing it to a green paper stem builds one flower at a time.",
      "A short message written alongside the bouquet finishes it off, and the whole craft suits toddlers and preschoolers especially well &mdash; it also frames beautifully as an instant keepsake.",
    ],
    photo: pinPhoto("handprint-flower.jpg", "Handprint flower bouquet craft made by kids for Mother's Day", 640, 896, "https://www.pinterest.com/pin/182677328632524216/", "Handprint Flower Bouquet Craft", "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "DIY Coupon Book for Mom",
    paras: [
      "Kids tend to love the idea of coupons, and moms tend to love the idea of actual help, which makes this one a reliable favorite.",
      "Small redeemable coupons &mdash; for a chore done without being asked, a quiet morning, a hug on demand &mdash; stapled together into a little booklet works especially well for elementary-age kids and teens who can design and write them out themselves.",
      "The coupons don't need to be elaborate to land well; the honesty of what a kid chooses to offer is usually the charming part.",
    ],
    photo: pinPhoto("coupon-book.jpg", "DIY coupon book craft made by kids as a Mother's Day gift", 768, 1024, "https://www.pinterest.com/pin/901071837959477423/", "DIY Coupon Book for Mom", "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Decorated Apron for Mom",
    paras: [
      "This one works whether or not Mom actually cooks often &mdash; a plain apron and a set of fabric markers are really all that's needed.",
      "Kids can decorate with drawings, handprints or a short message written near the hem, and older kids can take it a step further with their own design.",
      "What makes it stick is how it turns something purely practical into something personal &mdash; every time it gets worn, the moment behind it comes back with it.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "DIY Paper Flower Bouquet",
    paras: [
      "For a bouquet that never wilts, paper flowers solve the problem of real ones being expensive or triggering allergies.",
      "Cutting colorful paper petals and gluing them around a circle center, then adding a green paper stem, builds one flower at a time; bundling several together completes the bouquet.",
      "It works beautifully for preschoolers through elementary-age kids, and the fact that the flowers never actually die is a genuine bonus over the real thing.",
    ],
    photo: pinPhoto("paper-flower.jpg", "DIY paper flower bouquet craft made by kids for Mother's Day", 426, 640, "https://www.pinterest.com/pin/11047961582589817/", "DIY Paper Flower Bouquet Craft", "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Painted Rock Keepsakes",
    paras: [
      "A handful of smooth rocks, collected outside and given a quick wash, become a nearly free craft with real staying power.",
      "Painting flowers, hearts or a short phrase like \"Best Mom Ever\" on top, then sealing with a clear varnish, keeps the paint from chipping or fading too quickly.",
      "They look genuinely charming scattered in a garden or sitting on a desk, and the entire craft costs close to nothing to put together.",
    ],
    photo: pinPhoto("painted-rocks.jpg", "Painted rock keepsakes craft made by kids for Mother's Day", 997, 836, "https://www.pinterest.com/pin/1196337399482897/", "Painted Rock Keepsakes", "idea8"),
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Mother's Day Bracelet Craft",
    paras: [
      "Jewelry tends to feel special no matter how simple it is, and a bracelet made from beads and elastic string is an easy entry point.",
      "Letter beads, a favorite color, or a small charm all work well for personalizing it, and younger kids who need help stringing the beads make the process even more of a shared activity.",
      "A slightly uneven bracelet is part of the charm here &mdash; it reads as handmade, not as an attempt at something store-bought.",
    ],
    photo: pinPhoto("bracelet.jpg", "Mother's Day bracelet craft made with beads by kids", 685, 1024, "https://www.pinterest.com/pin/84583299249010926/", "Mother's Day Bracelet Craft", "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "DIY Mother's Day Card",
    paras: [
      "A simple card becomes something genuinely meaningful once a kid writes their own words inside it instead of a generic store-bought message.",
      "A few open-ended prompts &mdash; what makes Mom special, a favorite memory together, something she always says &mdash; give even a younger child enough structure to write something sincere.",
      "Letting kids decorate the outside with stickers, drawings or a bit of glitter finishes the card off, glitter cleanup notwithstanding.",
    ],
    photo: pinPhoto("diy-card.jpg", "DIY Mother's Day card with a personal handwritten message from a child", 683, 1024, "https://www.pinterest.com/pin/24980972929095762/", "DIY Mother's Day Card", "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Mother's Day Flower Pot Craft",
    paras: [
      "A small terracotta pot, decorated with paint and markers, turns into a meaningful planter once a message is added to the outside.",
      "Planting a flower or a small herb inside gives the gift an ongoing purpose rather than a one-day lifespan.",
      "The growth itself carries a bit of symbolism that suits the occasion particularly well &mdash; a gift that keeps developing well past the day it was given.",
    ],
    photo: pinPhoto("flower-pot.jpg", "Decorated terracotta flower pot craft for Mother's Day made by kids", 768, 960, "https://www.pinterest.com/pin/525654587782818487/", "Mother's Day Flower Pot Craft", "idea11"),
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "DIY Memory Scrapbook",
    paras: [
      "Older kids can put together a mini scrapbook filled with photos, short written memories, and a few small mementos from time spent together.",
      "Encouraging honesty over polish tends to produce the most meaningful pages &mdash; what a kid actually remembers and feels matters more than how neatly it's laid out.",
      "Years later, a scrapbook like this tends to mean even more than it did on the day it was given.",
    ],
    photo: pinPhoto("memory-scrapbook.jpg", "DIY memory scrapbook craft made by a child for Mother's Day", 800, 800, "https://www.pinterest.com/pin/392446555040376608/", "DIY Memory Scrapbook", "idea12"),
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "DIY \"All About My Mom\" Printable Sheet",
    paras: [
      "This one reliably produces the funniest results of the whole list.",
      "A printable sheet with simple prompts &mdash; Mom's favorite food, how old she is, what she's good at &mdash; lets a child answer in their own completely unfiltered words.",
      "The answers are rarely accurate, which is exactly the point; these sheets tend to become the kind of keepsake that gets pulled out and laughed over for years afterward.",
    ],
    photo: pinPhoto("printable-sheet.jpg", "DIY all about my mom printable sheet craft filled out by a child", 600, 776, "https://www.pinterest.com/pin/51439620740133009/", "DIY All About My Mom Printable Sheet", "idea13"),
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Homemade Bath Salt Gift",
    paras: [
      "Older kids and teens can mix a simple bath salt blend &mdash; Epsom salt, a few drops of essential oil, maybe some dried flower petals &mdash; and pour it into a labeled jar.",
      "Calling it something like \"Relax Mom\" gives the gift a clear purpose the moment it's opened.",
      "It reads as a more grown-up, considered gift than most of the other crafts here, and it comes with the added bonus of actually encouraging Mom to take a break.",
    ],
    photo: pinPhoto("bath-salt.jpg", "Homemade bath salt gift in a labeled jar made for Mother's Day", 736, 736, "https://www.pinterest.com/pin/4597049397785899776/", "Homemade Bath Salt Gift", "idea14"),
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Painted Tote Bag Craft",
    paras: [
      "A reusable tote bag makes a surprisingly good canvas, and fabric paint turns it into something genuinely wearable afterward.",
      "Kids can paint a pattern, a message, or a simple design directly onto the fabric, and the craft suits elementary-age kids and teens especially well since it reads as modern rather than babyish.",
      "It's also one of the few crafts on this list that gets practical daily use afterward &mdash; for groceries, books, or everyday errands, with an easy story behind it every time someone asks.",
    ],
    photo: pinPhoto("painted-tote.jpg", "Painted tote bag craft made by kids for Mother's Day", 768, 1024, "https://www.pinterest.com/pin/303430093663316599/", "Painted Tote Bag Craft for Mother's Day", "idea15"),
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "DIY Scented Candle Gift",
    paras: [
      "Older kids can help make a simple candle using melted wax, a wick, and a small jar &mdash; pouring the wax, carefully placing the wick, then letting it cool is the whole process.",
      "A straightforward scent like lavender works well without requiring anything complicated, and labeling it something like \"Mom's Calm Time\" ties the whole gift together.",
      "It feels like a higher-effort gift than it actually is to make, which is exactly the kind of trade-off that works well for this occasion.",
    ],
    photo: pinPhoto("scented-candle.jpg", "DIY scented candle gift made by kids for Mother's Day", 700, 820, "https://www.pinterest.com/pin/323907398219133193/", "DIY Scented Candle Gift", "idea16"),
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Mother's Day Breakfast Tray Craft",
    paras: [
      "Decorating a simple tray or placemat with drawings and a short message turns an ordinary breakfast into something a bit more memorable.",
      "Pairing it with breakfast in bed makes even a simple plate of toast and eggs feel like a genuine occasion.",
      "What actually makes this one land isn't the food itself &mdash; it's the visible effort behind getting it there in the first place.",
    ],
    photo: pinPhoto("breakfast-tray.jpg", "Decorated breakfast tray craft for Mother's Day made by kids", 309, 350, "https://www.pinterest.com/pin/18999629672897997/", "Mother's Day Breakfast Tray Craft", "idea17"),
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "DIY Memory Jar With Shared Moments",
    paras: [
      "This takes a different angle than a love-notes jar &mdash; instead of compliments, it's filled with specific shared memories between a child and their mom.",
      "Older kids can write out longer reflections, while younger kids can simply draw a picture of a memory instead.",
      "The focus on shared experience rather than general praise tends to make this version feel a little more personal and specific.",
    ],
    photo: pinPhoto("memory-jar.jpg", "DIY memory jar filled with shared moments craft for Mother's Day", 576, 1024, "https://www.pinterest.com/pin/46584177392729247/", "DIY Memory Jar With Shared Moments", "idea18"),
  },
  {
    n: "19",
    productsKey: "idea19",
    title: "Homemade Sugar Scrub Gift",
    paras: [
      "Teens can put together a simple sugar scrub using sugar, a carrier oil like coconut or olive oil, and a few drops of essential oil for scent.",
      "Mixing everything together and spooning it into a jar with a handwritten label, something like \"Mom's Spa Day,\" finishes the gift.",
      "It reads as a genuinely luxurious gift without costing much at all to actually put together.",
    ],
  },
  {
    n: "20",
    productsKey: "idea20",
    title: "Handmade Mother's Day Video Message",
    paras: [
      "Not every Mother's Day gift needs glue, paint or paper.",
      "Recording a short video of kids sharing a favorite memory, something they appreciate about their mom, or simply saying thank you, then editing the clips together into one short message, makes for a genuinely moving gift.",
      "It's one of the simplest ideas on this list in terms of supplies, and often one of the most emotional once it's actually watched.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || (idea.productsKey ? productGrid(idea.productsKey) : "")}`;
}

const body = `
<p>Mother's Day crafts made by kids carry a weight that a store-bought gift rarely matches, no matter how imperfect the glue job or how chaotic the glitter situation gets along the way. The effort itself is the gift, and a mom tends to remember that far longer than whatever actually gets unwrapped.</p>
<p>Most of these ideas use supplies that are probably already sitting around the house &mdash; paint, paper, a mason jar, a few beads &mdash; and scale easily across ages, from a toddler's handprint to a teenager's handwritten memory jar.</p>
${photo("hero.jpg", "Framed Mother's Day craft with buttons spelling MUMS and a handwritten message", 640, 640, "hero")}

<h2>Choosing an Age-Appropriate Craft</h2>
<p>A toddler or preschooler does best with crafts built around one simple, repeatable motion &mdash; a handprint, a thumbprint, a few stickers. Elementary-age kids can handle more steps and a bit of writing, while teens can take on something that actually requires planning, like a mixed scrub or a short edited video.</p>
${pinPhoto("intro.jpg", "Mother's Day crafts for kids of different ages laid out together", 683, 1024, "https://www.pinterest.com/pin/885098133035762109/", "Mother's Day Crafts for Kids of Every Age", "intro")}

<h2>20 Adorable Mother's Day Crafts for Kids</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these twenty crafts require a trip to a specialty store or a big budget to feel meaningful. Most come together with supplies already on hand, and the time spent making them tends to matter just as much as the finished piece itself.</p>
<p>Whatever ends up chosen, the common thread running through all of them is the same: a little effort, made visible, is usually the whole gift.</p>
`;

module.exports = { body };
