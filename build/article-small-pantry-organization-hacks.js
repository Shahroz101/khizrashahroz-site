// Body content for "15 Small Pantry Organization Hacks for a
// Clutter-Free Kitchen". Numbered idea-list format. Source only had
// photos for ideas 2, 3, 4 and 7 (vertical storage, door racks, lazy
// susans, zone baskets) plus the hero — every other idea was text-only
// in the source, so those stay photo-less here too, per the rule to
// never drop a source photo but also never invent ones that weren't
// there. No Pinterest pin links in the source, so no credit captions.
// Reordered from the source sequence and rewritten out of its very
// casual, first-person, emoji-heavy voice into the site's calmer tone,
// with short, punchy lines instead of dense paragraphs.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DL3R3MK1", title: "Fokyfok Expandable Pull-Out Cabinet Organizer, 14 to 21 Inch Wide, Adhesive Mount", w: 1500, h: 1500 },
    { asin: "B0B1L79X41", title: "Rubbermaid Brilliance 10 Piece Airtight Pantry Food Storage Container Set, Clear", w: 1500, h: 1036 },
  ],
  idea1: [
    { asin: "B01MQGTPC2", title: "Hefty Clear Large Trash Bags, 30 Gallon, 36 Count, Scent Free", w: 647, h: 1500 },
    { asin: "B0BMFKGVXD", title: "Tiawudi 12 Pack Clear Plastic Storage Bins for Pantry Organizing", w: 1500, h: 1337 },
  ],
  idea2: [
    { asin: "B0CVVJ7BJ4", title: "Expandable Adjustable Kitchen Cabinet Shelf Organizer for Countertop Storage", w: 1500, h: 1419 },
    { asin: "B08J7DMFLK", title: "iPEGTOP Set of 6 Wire Cabinet Organizer Shelves, 15.7 x 9.4 Inch", w: 1500, h: 1489 },
  ],
  idea3: [
    { asin: "B0BX7PKKKQ", title: "Moforoco White 9-Tier Over-the-Door Pantry Organizer, Metal Hanging Rack", w: 1200, h: 1500 },
    { asin: "B0C4LPSQP3", title: "Delamu 6-Tier Metal Over-the-Door Pantry Organizer", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0036OQU2E", title: "Copco 18 Inch Non-Slip Lazy Susan Turntable Organizer, White and Gray", w: 918, h: 419 },
    { asin: "B0CNCWY7N6", title: "LAMU 3 Pack Clear Lazy Susan Turntable Organizers for Cabinets", w: 1500, h: 1477 },
  ],
  idea5: [
    { asin: "B0CHJR142G", title: "Nelko P21 Bluetooth Label Maker Machine with Tape, Black", w: 1500, h: 1442 },
    { asin: "B098NCZNLG", title: "SAVVY and SORTED Minimalist Pantry Labels, 180 Waterproof Vinyl Stickers", w: 1500, h: 1476 },
  ],
  idea6: [
    { asin: "B0H158KXXZ", title: "PurKeep 24 Pack Airtight Food Storage Containers with Lids", w: 1181, h: 1500 },
    { asin: "B0G9N4GSL8", title: "7 Piece Clear Airtight Food Storage Containers with Lids", w: 1254, h: 1254 },
  ],
  idea7: [
    { asin: "B09LCQYQG4", title: "6 Pack Wire Baskets for Pantry Organization, Mixed Sizes", w: 1500, h: 1477 },
    { asin: "B09W42RNYG", title: "Best Choice Products 4 Pack Large Water Hyacinth Pantry Baskets, 16 x 12 Inch", w: 1500, h: 1489 },
  ],
  idea8: [
    { asin: "B09W2X5Y8F", title: "Amazon Basics 5-Shelf Adjustable Steel Shelving Unit, 200 lb Per Shelf", w: 634, h: 1500 },
    { asin: "B094NPL7TW", title: "104 Piece Nickel Plated Shelf Pins Kit, 4 Styles of Shelf Support Pegs", w: 1500, h: 1494 },
  ],
  idea9: [
    { asin: "B0D7CBKV8N", title: "AUXPhome 4 Pack Self-Adhesive Under-Cabinet Mug Hooks", w: 1452, h: 1500 },
    { asin: "B0DS88PY24", title: "6 Pack Under-Shelf Mug Hooks, Cabinet Mug Holder with 6 Hooks Each", w: 1500, h: 1474 },
  ],
  idea10: [
    { asin: "B0F7PYC8NB", title: "Vivihomety 4-Tier Slim Metal Rolling Utility Cart with Wheels", w: 1500, h: 1500 },
    { asin: "B0GQ43DT9V", title: "SUNALLY Slim Rolling Storage Cart, Narrow Kitchen Cart, White", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B07RWK43QL", title: "Amazon Basics White Plastic Magazine File Holder Organizer, 2 Pack", w: 1318, h: 1500 },
    { asin: "B06ZZ3QTST", title: "Simple Houseware 6 Pack Foldable Magazine File Holder Boxes, White", w: 1492, h: 1500 },
  ],
  idea12: [
    { asin: "B0F1FPC1T6", title: "BSTKEY Black Seasoning Packet Organizer Caddy for Pantry", w: 1132, h: 1479 },
    { asin: "B0C79G7XBY", title: "YouCopia ShelfBin 4-Tier Stairstep Packet Organizer, White", w: 1387, h: 1500 },
  ],
  idea13: [
    { asin: "B09P53L5LF", title: "AIZESI 2 Pack Adjustable Spring Tension Rods, 26 to 39 Inch, White", w: 1483, h: 1453 },
    { asin: "B0C1GNRZ6T", title: "Fikoksol Cutting Board and Baking Sheet Rack Organizer for Cabinets", w: 1500, h: 1500 },
  ],
  idea14: [
    { asin: "B0GGTV8NF4", title: "Small Magnetic Dry Erase Boards for Fridge, 5 x 7 Inch, 2 Pack with Markers", w: 1317, h: 1500 },
    { asin: "B0CM38XGFW", title: "Magnetic Fridge Notepads, 8 Pack, Fruit Design Grocery List Pads", w: 1322, h: 1500 },
  ],
  idea15: [
    { asin: "B0DRP8Q62F", title: "Nxconsu Under-Shelf Storage Baskets, 2 Pack, 13.4 Inch", w: 1500, h: 1357 },
    { asin: "B01IIXR2II", title: "Simple Houseware 3-Tier Stackable Can Organizer Rack, Holds 36 Cans, Chrome", w: 1500, h: 1273 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "small-pantry-organization-hacks-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "small-pantry-organization-hacks", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function ideaBlock(idea) {
  const photoHtml = idea.photo ? idea.photo : (idea.productsKey ? productGrid(idea.productsKey) : "");
  return `<h2>${idea.n}. ${idea.title}</h2>
${idea.paras.map((p) => `<p>${p}</p>`).join("\n")}
${photoHtml}`;
}

const ideas = [
  {
    n: 1,
    productsKey: "idea1",
    title: "Ditch What You Don't Use First",
    paras: [
      "Decluttering isn't glamorous. It's still the single most effective pantry fix there is.",
      "Six types of vinegar? Probably not all needed.",
      "That jar of fig jam from who knows when? Be honest.",
      "Toss the expired stuff. Donate what's untouched but still good.",
      "Clear the space before adding a single new system to it.",
    ],
    photo: null,
  },
  {
    n: 2,
    productsKey: "idea2",
    title: "Go Vertical",
    paras: [
      "Floor space runs out fast in a small pantry. Height usually doesn't.",
      "Stackable shelves or tiered organizers make use of every inch up top.",
      "Wire risers keep canned goods visible instead of hidden in the back row.",
      "A tension rod or two works for hanging lighter items, like chip bags or cleaning cloths.",
      "Less-used items go on the highest shelf. A step stool handles the rest.",
    ],
    photo: photo("vertical-storage.png", "Tiered pantry shelving maximizing vertical storage space", 1024, 574, "idea2"),
  },
  {
    n: 3,
    productsKey: "idea3",
    title: "Put the Door to Work",
    paras: [
      "A pantry door is wasted space more often than not.",
      "An over-the-door rack turns it into real storage.",
      "Spices, small jars and sauces all fit well there.",
      "Snack bars and baking odds and ends too &mdash; food coloring, cupcake liners, that kind of thing.",
      "An adjustable rack fits taller bottles without any shelf-Jenga required.",
    ],
    photo: photo("door-racks.png", "Over-the-door pantry rack organizing spices and small jars", 1024, 574, "idea3"),
  },
  {
    n: 4,
    productsKey: "idea4",
    title: "Bring In a Lazy Susan",
    paras: [
      "A Lazy Susan isn't just for the dinner table.",
      "Corners are where pantry items tend to disappear. A turntable fixes that.",
      "Oils, vinegars and other bottles work well on one.",
      "Same for nut butters, spreads, and small snack containers.",
      "A full spin means nothing gets knocked over just to reach the back.",
    ],
    photo: photo("lazy-susans.png", "Lazy Susan turntable organizing bottles in a pantry corner", 1024, 574, "idea4"),
  },
  {
    n: 5,
    productsKey: "idea5",
    title: "Label Everything",
    paras: [
      "Labeling every shelf and bin sounds excessive, until it's tried.",
      "People actually put things back where they belong once a label tells them where that is.",
      "It also makes it obvious when something's running low.",
      "A label maker is the easiest way to do it. Masking tape and a marker work just as well.",
    ],
    photo: null,
  },
  {
    n: 6,
    productsKey: "idea6",
    title: "Switch to Uniform Containers",
    paras: [
      "Mismatched pasta bags, cereal boxes and flour sacks pile up into visual chaos fast.",
      "Uniform, clear airtight containers fix that instantly.",
      "They stack, which frees up real space.",
      "They keep dry goods fresher than their original bags ever did.",
      "Flour, sugar, rice, pasta, cereal and snacks all work well in them.",
    ],
    photo: null,
  },
  {
    n: 7,
    productsKey: "idea7",
    title: "Zone It With Baskets",
    paras: [
      "Grouping items into zones changes how a pantry functions.",
      "Think \"breakfast,\" \"baking,\" and \"snacks\" as separate areas.",
      "Baskets keep each zone contained and easy to scan.",
      "They also hide less attractive packaging &mdash; ramen included.",
      "Woven, wire or plastic all work. The zoning matters more than the material.",
    ],
    photo: photo("zone-baskets.png", "Woven baskets zoning a pantry into breakfast, baking and snack sections", 1024, 574, "idea7"),
  },
  {
    n: 8,
    productsKey: "idea8",
    title: "Adjust the Shelves",
    paras: [
      "Factory shelf spacing rarely matches what actually needs to fit.",
      "Twenty minutes of adjusting pays off fast.",
      "Taller items stop needing to lie sideways.",
      "Clear zones open up for big items versus small ones.",
      "It's the easiest way to add real space without any construction.",
    ],
    photo: null,
  },
  {
    n: 9,
    productsKey: "idea9",
    title: "Add Hooks Under the Shelves",
    paras: [
      "Shelf space is precious. The space underneath it usually isn't being used at all.",
      "Adhesive or mounted cup hooks fill that gap.",
      "Measuring cups and oven mitts hang well there.",
      "Reusable grocery bags too, along with small produce baskets.",
      "It's a small change that frees up real shelf room.",
    ],
    photo: null,
  },
  {
    n: 10,
    productsKey: "idea10",
    title: "Get a Slim Rolling Cart",
    paras: [
      "A tiny or nonexistent pantry doesn't rule out real storage.",
      "A slim rolling cart slides next to a fridge or into a narrow gap between cabinets.",
      "Spices, oils, coffee supplies and baking tools all fit well on one.",
      "It rolls out of sight easily too, for anyone who wants the option.",
    ],
    photo: null,
  },
  {
    n: 11,
    productsKey: "idea11",
    title: "Repurpose Magazine Holders",
    paras: [
      "Magazine file holders aren't just for magazines.",
      "Standing them upright on a shelf keeps foil, parchment and zip bags from sliding into a mess.",
      "Food wrap boxes fit the same way.",
      "No more half-squashed rolls disappearing into the back of a shelf.",
    ],
    photo: null,
  },
  {
    n: 12,
    productsKey: "idea12",
    title: "Corral the Loose Packets",
    paras: [
      "Gravy mixes, taco seasoning, oatmeal packets &mdash; they scatter like confetti.",
      "A small bin or drawer insert groups them in one spot.",
      "A repurposed pouch works just as well.",
      "A clear hanging file folder is another easy option.",
      "Keeping them together means that one chili seasoning packet actually gets found again.",
    ],
    photo: null,
  },
  {
    n: 13,
    productsKey: "idea13",
    title: "Use Tension Rods as Dividers",
    paras: [
      "Baking sheets and cutting boards tend to slide flat and stack messily.",
      "A few tension rods placed vertically create instant upright dividers.",
      "Muffin pans and cookie sheets both stay put this way.",
      "Trays and cutting boards too &mdash; standing upright instead of stacked.",
    ],
    photo: null,
  },
  {
    n: 14,
    productsKey: "idea14",
    title: "Keep a Running Inventory",
    paras: [
      "A simple pantry checklist saves real time at grocery-planning moments.",
      "A mini whiteboard inside the door works well.",
      "A notepad and magnet does the same job with less setup.",
      "A shared digital list works too, for households splitting the shopping.",
      "Fewer duplicate bottles of soy sauce end up buried in the back.",
    ],
    photo: null,
  },
  {
    n: 15,
    productsKey: "idea15",
    title: "Build in Breathing Room",
    paras: [
      "A pantry packed edge to edge looks organized for about a week.",
      "Leaving a little open space on each shelf makes it realistic to maintain.",
      "New groceries have somewhere to land without a full reshuffle.",
      "A system that bends a little lasts longer than one that demands perfection.",
    ],
    photo: null,
  },
];

const body = `
<p>A small pantry has a way of turning into chaos fast.</p>
<p>Things vanish behind the spice jars. Random items pile up. There's always one expired can lurking in the back.</p>
<p>None of that takes a full renovation to fix.</p>
<p>A single cabinet or a narrow closet can still work hard with the right systems in place.</p>
${photo("hero.jpeg", "Modern pantry with pull-out shelving neatly organized with canned goods and jars", 1152, 768, "hero")}

${ideas.map(ideaBlock).join("\n\n")}

<h2>Final Thoughts</h2>
<p>A small pantry doesn't need a walk-in footprint to function well.</p>
<p>It just needs a few systems that actually match how the space gets used.</p>
<p>Start with decluttering, add one or two storage upgrades, and build from there.</p>
<p>The goal isn't a Pinterest-perfect shelf. It's a pantry that makes sense on a random Tuesday night.</p>
`;

module.exports = { body };
