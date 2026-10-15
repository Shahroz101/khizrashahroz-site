// Body content for "18 Cute Pumpkin Carving Ideas Worth Trying". Photos
// carried over from the source article. The source included a
// fabricated quote attributed to "pumpkin expert Thomas Andres via
// Smithsonian Magazine" — cut entirely, not part of this site's voice.
// 11 of 18 ideas have a photo; the other 7 have none in the source.
// Condensed a padded 3-part intro down to 1.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0983N11N6", title: "CHRYZTAL 10 Piece Professional Pumpkin Carving Kit, Heavy Duty Stainless Steel", w: 1500, h: 1443 },
    { asin: "B088FTCQJG", title: "Luditek 2 Pack Orange LED Pumpkin Lights with Remote and Timer", w: 1500, h: 1500 },
  ],
  intro: [
    { asin: "B0CBQ29ZKZ", title: "Artgar Orange Artificial Foam Pumpkins, Harvest Decor, 8 Piece Set", w: 1500, h: 1241 },
    { asin: "B08L6PZR51", title: "Pumpkin Carving Stencils, 50 Halloween Templates for Carving and Painting", w: 1000, h: 1294 },
  ],
  idea1: [
    { asin: "B08CV8XYTH", title: "Pumpkin Carving Kit with Stencils, 31 Piece Professional Tools", w: 1500, h: 1473 },
    { asin: "B0FHL21JG9", title: "Foam Pumpkin Decorating Kit, 16 Pack with Foam Stickers, 4 Styles", w: 1500, h: 1449 },
  ],
  idea2: [
    { asin: "B08HCXTB1Q", title: "vensovo 6 Inch White Artificial Pumpkins, 4 Pack", w: 1028, h: 1273 },
    { asin: "B07K7RF81J", title: "Nancia 100 Pack Flameless LED Tea Light Candles, Battery Powered", w: 1408, h: 1409 },
  ],
  idea3: [
    { asin: "B0FJS13YCK", title: "pson Plunger Cookie Cutter Set of 3, Mini Shapes for Baking and Decorating", w: 1500, h: 870 },
    { asin: "B0H2HPVPXG", title: "Pumpkin Carving Kit, 13 Piece Professional Heavy Duty Stainless Steel Tools", w: 1200, h: 1272 },
  ],
  idea4: [
    { asin: "B0CJHY7Z3P", title: "Large White Foam Pumpkin for Decorating, Artificial Fall Decor", w: 929, h: 1441 },
    { asin: "B0D1XWJTC8", title: "WORKPRO 6 Inch Pumpkin Carving Saw, Keyhole Jab Saw Knife", w: 1482, h: 1500 },
  ],
  idea5: [
    { asin: "B0D6QTYQFS", title: "Seasons Party Pumpkin Carving Kit with 12 Stencils", w: 1080, h: 1080 },
    { asin: "B075D21BC2", title: "SKINOSM Pumpkin Carving Kit for Kids, 6 Easy Stainless Steel Tools", w: 1500, h: 1470 },
  ],
  idea6: [
    { asin: "B07Q8WN9NQ", title: "Pumpkin Masters Power Saw, Easy-Grip Design with Interchangeable Blades", w: 628, h: 1500 },
    { asin: "B08B12CMFZ", title: "CHRYZTAL 13 Piece Professional Pumpkin Carving Kit, Heavy Duty Stainless Steel", w: 1500, h: 1420 },
  ],
  idea7: [
    { asin: "B0H6JQHLNB", title: "Lothee 76 Piece Pumpkin Carving Kit, 4 Set Bulk Pack with Stencils and Tools", w: 1500, h: 1499 },
    { asin: "B08CZNMM96", title: "Mini Pumpkin Decorating Stickers for Kids, Party Favors", w: 1094, h: 1091 },
  ],
  idea8: [
    { asin: "B01MQHTAH8", title: "Pumpkin Masters Pumpkin Carving Kit", w: 1052, h: 1500 },
    { asin: "B07VPBMN5H", title: "Elmchee 13 Piece Professional Pumpkin Carving Tools for Jack-O-Lanterns", w: 1454, h: 1263 },
  ],
  idea9: [
    { asin: "B0G58CYWFS", title: "Stainless Steel Mini Star Cookie and Cracker Cutters", w: 1500, h: 1500 },
    { asin: "B0FJSLH2SH", title: "LED Pumpkin Lights with Remote and Timer, Jack-O-Lantern Light Set", w: 1500, h: 1491 },
  ],
  idea10: [
    { asin: "B0D4VFKWNL", title: "JUNEBRUSHS 50 Piece Mini Artificial Pumpkins for Vase Filler and Decor", w: 1500, h: 1489 },
    { asin: "B0D9KBMMFV", title: "Jiesky 360 Piece Artificial Maple Leaves, 3.1 Inch, 6 Fall Colors", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B0DGFR9F1R", title: "Stainless Steel Star and Moon Cookie Cutter Set", w: 1500, h: 929 },
    { asin: "B0BW33BV1T", title: "Nimiko Flameless Flickering Candles with Remote, Battery Operated, Timer", w: 1500, h: 1268 },
  ],
  idea12: [
    { asin: "B0FZM62MTZ", title: "Artificial Moss Mat Roll, 12 x 71 Inch, Soft Faux Moss Table Runner", w: 1500, h: 1244 },
    { asin: "B0HHRJL5MB", title: "120 Piece Natural Pine Cones and Acorns Craft Set", w: 1500, h: 1458 },
  ],
  idea13: [
    { asin: "B09MSK4WW8", title: "Ann Clark Bat Cookie Cutter, Made in USA", w: 1500, h: 1499 },
    { asin: "B0C9D28PPL", title: "JUSTOTRY Pumpkin Carving Kit with Face Shape Cutters and Tools", w: 1210, h: 1500 },
  ],
  idea14: [
    { asin: "B0H4KSDJQZ", title: "RAINFLOW 20 Piece Witch Hats for Pumpkins, Crafts and Table Decor", w: 1500, h: 1500 },
    { asin: "B08FWWLRW5", title: "12 Piece Black Witch Hats for Pumpkins and Party Decoration", w: 1500, h: 1390 },
  ],
  idea15: [
    { asin: "B0BZCF4Q33", title: "Scalloped Flower Cookie Cutter Set, 6 Petal, 2 to 5 Inch", w: 1464, h: 1465 },
    { asin: "B0H3FT9FB9", title: "lovemoon Artificial Fall Chrysanthemum Flowers for Outdoor Planters", w: 1500, h: 1500 },
  ],
  idea16: [
    { asin: "B0948Y7JTC", title: "Mini Pumpkin Decorating Stickers for Kids, Party Favors", w: 1467, h: 1500 },
    { asin: "B074W47G4V", title: "ShellKingdom Artificial Mini Pumpkins for Fall and Halloween Decor", w: 1500, h: 1307 },
  ],
  idea17: [
    { asin: "B0817PLQ6R", title: "Honbay 3 Piece Clay Sculpture Loop Tools with Sawtooth Scraper", w: 1339, h: 1148 },
    { asin: "B088FTG9ZH", title: "Luditek 4 Pack Orange LED Pumpkin Lights with Remote and Timer", w: 1500, h: 1500 },
  ],
  idea18: [
    { asin: "B09VCYS41G", title: "Betem 24 Color Dual Tip Acrylic Paint Markers for Decorating", w: 1482, h: 1500 },
    { asin: "B0C7TBHGP3", title: "Klever Kits Craft Pumpkin Decorating Kit for Kids, 12 Pack", w: 1500, h: 1499 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "pumpkin-carving-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "pumpkin-carving-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "pumpkin-carving-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Cute Cat Pumpkin",
    paras: [
      "A simple cat face is endlessly adaptable, as easy to simplify or dress up as the carver wants it to be.",
      "Two pointed ears near the top, large rounded eyes beneath them, a tiny triangular nose, and a few whisker lines cover the whole design.",
      "Oversized eyes are the trick that makes the expression feel genuinely sweeter and more playful than a standard carved face.",
    ],
    photo: pinPhoto("cute-cat.jpg", "Cute cat face carved into a pumpkin with large rounded eyes", 720, 720, "https://www.pinterest.com/pin/498984833732240992/", "Cute Cat Pumpkin", "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Smiling Ghost Pumpkin",
    paras: [
      "Ghosts don't have to look terrifying. Two large oval eyes and a small rounded mouth, kept simple and evenly spaced, carry this design on their own.",
      "The expression matters more than the detail here &mdash; a slightly curved mouth shifts the whole pumpkin from spooky to genuinely cheerful.",
      "A white or pale pumpkin pushes the ghost theme even further, and the soft color paired with glowing eyes looks surprisingly charming after dark.",
    ],
    photo: pinPhoto("smiling-ghost.jpg", "Smiling ghost face carved into a pale pumpkin", 681, 1024, "https://www.pinterest.com/pin/1127729562971824730/", "Smiling Ghost Pumpkin", "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Heart-Shaped Eyes",
    paras: [
      "For something cute without an hour of carving involved, heart-shaped eyes deliver fast.",
      "Two small hearts on the front of the pumpkin, with a tiny smiling mouth underneath, is the entire design &mdash; symmetrical or deliberately uneven for a handmade look.",
      "It's an especially strong fit for couples, families, or anyone chasing something softer than a traditional Halloween face. It also happens to make a ridiculously cute porch photo.",
    ],
    photo: pinPhoto("heart-eyes.jpg", "Pumpkin carved with heart-shaped eyes and a smiling mouth", 683, 1024, "https://www.pinterest.com/pin/51861833204045959/", "Heart-Shaped Eyes Pumpkin", "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Adorable Pumpkin Bunny",
    paras: [
      "A bunny design plays with the actual shape of the pumpkin rather than just the face carved into it.",
      "A taller pumpkin, two long ears carved near the top, large rounded eyes, a small nose and a tiny mouth build the look.",
      "The ears can stay attached to the pumpkin itself or be carved fully around their outline so they stand out once the pumpkin is lit from inside &mdash; rounded rather than sharp features keep the whole thing feeling soft.",
    ],
    photo: pinPhoto("pumpkin-bunny.jpg", "Bunny face carved into a pumpkin with tall ears", 768, 1024, "https://www.pinterest.com/pin/22306960645420999/", "Adorable Pumpkin Bunny", "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Sweet Little Bear Pumpkin",
    paras: [
      "A bear face is another strong option for anyone chasing cozy over Halloween-scary.",
      "Two rounded ears, large circular eyes, and a small muzzle carry the design, with a tiny heart-shaped nose adding extra personality.",
      "A wide pumpkin works especially well here, giving enough surface to space the features naturally &mdash; a small scarf wrapped around the pumpkin adds a cozy fall touch without any extra carving.",
    ],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Cute Owl Pumpkin",
    paras: [
      "An owl design looks genuinely impressive once the light goes on inside.",
      "Two large circular eyes surrounded by simple feather-inspired cuts, with a small triangular beak between them, form the whole face.",
      "Every single feather doesn't need carving &mdash; simple shapes actually create a stronger look at night, since the light makes the main features pop more clearly.",
    ],
    photo: pinPhoto("owl-pumpkin.jpg", "Owl face carved into a pumpkin with large circular eyes", 609, 1024, "https://www.pinterest.com/pin/53902526786698200/", "Cute Owl Pumpkin", "idea6"),
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Happy Pumpkin Face",
    paras: [
      "Sometimes the classic approach still wins. Instead of a traditional scary jack-o'-lantern, an exaggerated happy face with oversized eyes and a wide smile reads as cartoon character rather than haunted house.",
      "This design works especially well when carving with kids, since the shapes can stay large and forgiving.",
      "No stencil is strictly required either, as long as sketching a few basic shapes feels manageable beforehand.",
    ],
    photo: pinPhoto("happy-face.jpg", "Happy exaggerated face carved into a pumpkin with oversized eyes and a wide smile", 736, 981, "https://www.pinterest.com/pin/418060777927031614/", "Happy Pumpkin Face", "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Little Puppy Pumpkin",
    paras: [
      "For anyone who's a dog person first, skip the scary face entirely and turn the pumpkin into a puppy instead.",
      "Floppy ears on either side, large round eyes, a little nose, and a happy mouth form the base &mdash; the ear shape can shift depending on which breed feels right to suggest.",
      "A tiny tongue sticking out adds extra playfulness, and the design works especially well for a family with an actual dog to loosely match the carving to.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Starry Night Pumpkin",
    paras: [
      "Not every cute pumpkin needs a face at all. For something more elegant, small stars carved across the surface build a miniature night sky.",
      "A few moons, dots and tiny shooting stars round out the pattern, and a deep orange pumpkin paired with a warm LED light makes the small cutouts glow like actual stars.",
      "The pattern can stay random or lean into a deliberate constellation arrangement &mdash; and since it skips a face entirely, it doesn't require the same symmetry a character design would.",
    ],
    photo: pinPhoto("starry-night.jpg", "Starry night pattern carved into a pumpkin, glowing from within", 683, 1024, "https://www.pinterest.com/pin/1101763496387341267/", "Starry Night Pumpkin", "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Cute Fox Pumpkin",
    paras: [
      "For something a little more autumnal, a fox design leans directly into the pumpkin's existing warm orange color, which already does half the work.",
      "Two pointed ears, large almond-shaped eyes, a small triangular nose, and a gentle smile make up the face, with a few curved lines around the cheeks suggesting fluffy fur.",
      "It looks adorable in daylight and almost magical once a warm LED light goes inside &mdash; paired with dried leaves and a few mini pumpkins, it builds a full fall display without tipping into generic Halloween-aisle territory.",
    ],
    photo: pinPhoto("fox-pumpkin.jpg", "Cute fox face carved into an orange pumpkin", 768, 1024, "https://www.pinterest.com/pin/16255248650965549/", "Cute Fox Pumpkin", "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Sleepy Moon Pumpkin",
    paras: [
      "A sleepy expression turns an otherwise ordinary pumpkin into one of the cuter options on this whole list.",
      "Two closed eyes with small curved lashes, paired with a tiny smiling mouth, form the base &mdash; a few stars carved around the face build a dreamy nighttime theme.",
      "A small crescent moon beside the face pushes the sweetness further, and the whole design feels playful rather than spooky, without announcing Halloween from three houses down.",
    ],
    photo: pinPhoto("sleepy-moon.jpg", "Sleepy face with closed eyes carved into a pumpkin with stars", 736, 981, "https://www.pinterest.com/pin/691443349080490560/", "Sleepy Moon Pumpkin", "idea11"),
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Cute Mushroom Pumpkin",
    paras: [
      "A mushroom design brings a genuinely charming woodland feel, and a pumpkin's rounded surface gives plenty of room to play with the shape.",
      "A few rounded mushroom caps carved across the front, simple stems underneath, and tiny dots across the caps build the look.",
      "The design can stay fully abstract or get a tiny smiling face added to one mushroom &mdash; it also pairs beautifully with natural fall decor like acorns, pinecones, moss and dried leaves.",
    ],
    photo: pinPhoto("mushroom-pumpkin.jpg", "Mushroom shapes carved into a pumpkin surrounded by fall decor", 768, 1024, "https://www.pinterest.com/pin/7881368094930915/", "Cute Mushroom Pumpkin", "idea12"),
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Smiling Bat Pumpkin",
    paras: [
      "Bats usually get a spooky reputation, but they turn adorable fast with the right approach.",
      "Two pointed ears and large circular eyes form the base, with tiny fangs and a small smile replacing the usual intimidating expression.",
      "The oversized eyes make the biggest difference here &mdash; they instantly give the whole pumpkin a cartoon-like personality that suits a cute Halloween display perfectly.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Cute Witch Pumpkin",
    paras: [
      "A witch design gives plenty of room for creativity without actually making the carving complicated.",
      "A simple face with large eyes, a small nose and a smiling mouth forms the base, with a few lines suggesting a witch hat carved around the top.",
      "Skipping the carved hat entirely and placing a miniature witch hat over the pumpkin instead is often the easier choice &mdash; it's also swappable later, which a fully carved hat never is.",
    ],
    photo: pinPhoto("witch-pumpkin.jpg", "Cute witch face carved into a pumpkin with a miniature hat on top", 717, 1024, "https://www.pinterest.com/pin/758715868523421533/", "Cute Witch Pumpkin", "idea14"),
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Pumpkin With Flower Carving",
    paras: [
      "Halloween pumpkins don't actually need faces. For something softer, flowers carved across the surface deliver a genuinely different look.",
      "Simple petals and circular centers, rather than highly detailed floral patterns, keep the carving approachable.",
      "One large flower in the center, or several smaller blooms scattered around, both work &mdash; paired with mums, dried flowers and warm-toned foliage, the whole arrangement feels intentional rather than purely seasonal.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Adorable Strawberry Pumpkin",
    paras: [
      "This one feels genuinely unexpected, which is exactly what makes it fun.",
      "A smaller pumpkin works best, carved with a strawberry-inspired pattern of simple seeds and leaf shapes near the stem, with a tiny smiling face optional in the center.",
      "Grouped with a plain pumpkin and a tiny flower-carved one, it builds a genuinely playful little arrangement &mdash; not the move for a traditional spooky porch, but a strong one for something more whimsical.",
    ],
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Cute Ghost Cat Pumpkin",
    paras: [
      "Why choose between a cat and a ghost when both can combine into one design?",
      "A cat face with pointed ears forms the base, with a few flowing lines carved around the lower part of the pumpkin to suggest the cat floating like a ghost.",
      "Keeping the eyes large and expressive, with a tiny triangular nose and small mouth, finishes the look &mdash; a Halloween theme without relying on anything scary, and a strong fit for a family-friendly display.",
    ],
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Tiny Smile Pumpkin Family",
    paras: [
      "For a final idea, a whole family of mini pumpkins beats putting all the effort into one large one.",
      "Several small pumpkins, each given a different expression &mdash; one smiling, one winking, one with heart-shaped eyes &mdash; create far more variety than a single oversized design.",
      "Tiny hats, bows, scarves or glasses added to each pumpkin build out individual personalities, and a row of mini pumpkins staring at the front door with completely different expressions might be the most wholesome version of this whole list.",
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
<p>Pumpkin carving doesn't have to mean scary jack-o'-lanterns and dramatic grins. A cute design &mdash; a sleepy face, a tiny fox, a whole family of mini pumpkins &mdash; brings just as much charm to a front porch without leaning into anything genuinely spooky.</p>
<p>None of these require advanced carving skill. Most come down to a handful of simple shapes, spaced thoughtfully, with oversized eyes doing most of the emotional heavy lifting.</p>
${photo("hero.jpg", "Collection of cute carved pumpkins styled for a charming fall display", 1400, 934, "hero")}

<h2>Choosing the Right Pumpkin</h2>
<p>A pumpkin with a flat, stable base and a surface free of major soft spots carves far more easily than one that's already starting to bruise or wrinkle. Size matters for the design, too &mdash; a wider pumpkin gives more room to space out detailed features, while a smaller one suits a simpler face just fine.</p>
${pinPhoto("intro-choose.jpg", "Choosing the right pumpkin for a cute carving design", 683, 1024, "https://www.pinterest.com/pin/977140450428632723/", "Choosing a Pumpkin for Carving", "intro")}

<h2>18 Cute Pumpkin Carving Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these eighteen ideas require a scary expression or advanced carving skill to actually look good. Simple shapes, spaced with intention, carry most of the charm on their own.</p>
<p>Pick whichever face or pattern genuinely matches the vibe wanted on the porch this year &mdash; cozy, playful, or a little whimsical all work, as long as the result actually makes whoever carved it smile too.</p>
`;

module.exports = { body };
