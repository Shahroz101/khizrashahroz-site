// Body content for "12 Dorm Kitchen Ideas That Make a Tiny Kitchenette
// Actually Work". Photos carried over from the source article. The source
// reused its hero photo (4.jpg) a second time for the Coffee Station idea
// — kept, downloaded separately as coffee-station.jpg. The "and the large
// console!" baked-in-text photo and the wall pot-rack product photo were
// originally dropped for being imperfect; both restored (Compact,
// Multi-Function Appliances / Removable Hooks) with captions that
// honestly describe what's shown. One intro-section photo (a cluttered,
// genuinely unrelated kitchen with no tie to a specific idea) stays
// excluded. Four ideas (Stackable Dishes, Collapsible Drying Racks,
// Clip-On Counter Extensions, Wall-Mounted Spice Racks) have no photo in
// the source at all. Condensed 3 padded intro H2 sections down to 1.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0FTGGXMMB", title: "Frigidaire EFMIS171 Retro Mini Portable Personal Fridge", w: 1040, h: 1479 },
    { asin: "B0C6D6SH16", title: "JASIWAY In-Sink Dish Drying Rack with Cup and Utensil Holder", w: 1500, h: 1500 },
  ],
  chaos: [
    { asin: "B09XHWKXP4", title: "RAXCO 18-Piece Kitchen Utensils and Knife Set, Black", w: 1488, h: 1500 },
    { asin: "B0F1TQSTVR", title: "Stackable Wire Baskets for Pantry Organization, 4 Pcs, Black", w: 1349, h: 1500 },
  ],
  idea1: [
    { asin: "B0F373KBDG", title: "YASONIC 3 Tier Metal Rolling Cart with Wheels, Black Utility Storage Cart", w: 879, h: 1457 },
    { asin: "B0DNF65DK1", title: "Goovilla 3 Tier Rolling Utility Cart with Removable Drawer, Black", w: 1489, h: 1500 },
  ],
  idea2: [
    { asin: "B0F2GW62RY", title: "Airtight Food Storage Containers with Lids, 56 Pcs, 28 Boxes", w: 1466, h: 1500 },
    { asin: "B0GWJJGC5B", title: "Stainless Steel Mixing Bowls with Lids, 5 Nesting Bowls, 3 Grater Attachments", w: 1492, h: 1500 },
  ],
  idea3: [
    { asin: "B09715G57M", title: "Keurig K-Express Single Serve K-Cup Pod Coffee Maker, Black", w: 936, h: 1500 },
    { asin: "B0G4LZGHD1", title: "Wooden Coffee Bar Organizer for Countertop with Adjustable Dividers", w: 1500, h: 1414 },
  ],
  idea4: [
    { asin: "B08PF21KKL", title: "THANSTAR Collapsible Dish Drying Rack, Portable Dinnerware Drainer", w: 1164, h: 763 },
    { asin: "B07F85GVWS", title: "Tomorotec Roll Up Dish Drying Rack Over Sink, 304 Steel, Grey", w: 1500, h: 1485 },
  ],
  idea5: [
    { asin: "B0D69KNVJN", title: "ADBIU Over The Sink Dish Drying Rack, Expandable Height and Length", w: 1500, h: 1500 },
    { asin: "B0HBBVWHDG", title: "Rotatable Over Faucet Sink Shelf Organizer with Towel Bar", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0BM798RYV", title: "NiHome Over Sink Cutting Board with Collapsible Colander, Non-Slip", w: 1500, h: 1500 },
    { asin: "B0FZKFY1LT", title: "Collapsible Silicone Colander for Over The Sink, Kitchen Strainer Basket", w: 1500, h: 1493 },
  ],
  idea7: [
    { asin: "B0921NX1WJ", title: "HOSHANHO Magnetic Knife Strip for Wall, 16 Inch", w: 1500, h: 1361 },
    { asin: "B0C3H9MJQV", title: "HuggieGems Magnetic Spice Rack for Refrigerator, Black, 4 Pack", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0836TG3WH", title: "X-cosrack Wall Mount Spice Rack Organizer, 5 Tier, Height Adjustable", w: 1160, h: 1394 },
    { asin: "B0CGCVKFJQ", title: "SAVVY and SORTED Glass Spice Jars with Labels, 24 Pack, Bamboo Lids, 4 oz", w: 1499, h: 1500 },
  ],
  idea9: [
    { asin: "B09WKN7477", title: "FOTOSOK 6-Tier Bamboo Shelf with Adjustable Shelves for Kitchen", w: 619, h: 1500 },
    { asin: "B0FB8DHN89", title: "Mini Fridge Stand with Storage, Rolling Small Refrigerator Cart", w: 758, h: 1500 },
  ],
  idea10: [
    { asin: "B0C2FF74J6", title: "Ninja BC151NV Blast Portable Blender, Cordless, 18 oz", w: 850, h: 1500 },
    { asin: "B00GGFHH4U", title: "BLACK+DECKER TO1313SBD Toaster Oven, Silver", w: 1500, h: 897 },
  ],
  idea11: [
    { asin: "B0H2VCXPZB", title: "Cotton Rope Storage Baskets for Shelves, Small Bins, 4 Pack", w: 1408, h: 1408 },
    { asin: "B0BXKSCRC2", title: "TRINITY EcoStorage 15 Inch Metal Hanging Basket, Chrome, 2 Pack", w: 1500, h: 950 },
  ],
  idea12: [
    { asin: "B0753NHZVQ", title: "Command Large Utility Hooks, 7 Hooks, 12 Strips, Damage-Free", w: 1383, h: 1500 },
    { asin: "B09TZTHHJ3", title: "Under Cabinet Rotating Kitchen Utensil Hooks, 2 Pcs, Adhesive No Drilling", w: 1000, h: 1004 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "dorm-kitchen-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "dorm-kitchen-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "dorm-kitchen-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Get a Rolling Cart",
    paras: [
      "A rolling cart might be the single most useful thing you can bring into a dorm kitchenette. It gives you extra counter space and storage without installing anything permanent.",
      "Use it for snacks, utensils, even a small coffee station &mdash; the point is flexibility. Push it out of the way when you need floor space, roll it over when you're actually prepping food.",
      "A three-tier version like the one shown here, with a towel, dry goods, and even a small blender tucked onto its shelves, basically works as a second kitchen that happens to have wheels.",
    ],
    photo: pinPhoto("rolling-cart.jpg", "Black three-tier rolling cart in a kitchen holding utensils, a folded towel, dry goods jars and a small blender", 1024, 1024, "https://www.pinterest.com/pin/977773769110183439/", "Rolling Cart for a Dorm Kitchen", "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Keep Dishes and Containers Stackable",
    paras: [
      "Stackable dishes and storage containers are quietly one of the biggest space-savers available to you. They cut down on cabinet clutter and make meal prep noticeably simpler.",
      "Look for containers that nest inside each other and bowls that stack cleanly rather than at odd angles. Mismatched or bulky pieces are what make a tiny kitchen feel chaotic fast.",
      "It pays off at move-out time too &mdash; a cabinet of stackables packs into a box in minutes, while mismatched dishware turns packing into its own project.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Build a Mini Coffee Station",
    paras: [
      "A dedicated coffee or tea corner makes mornings run smoother, and it's one of the easiest ways to make a dorm kitchenette feel like it actually belongs to you.",
      "Keep mugs, pods, sugar, and cream together in one spot so the mess stays contained instead of spreading across every surface.",
      "Even a small setup, like the labeled Keurig station shown here complete with its own little \"Coffee\" sign, reads as intentional rather than thrown together &mdash; it's a small detail that adds real personality.",
    ],
    photo: pinPhoto("coffee-station.jpg", "Compact coffee station on a dorm countertop with a Keurig machine, mugs, coffee and tea canisters and a wooden tray", 735, 1021, "https://www.pinterest.com/pin/985231165065391/", "Dorm Coffee Station Setup", "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Switch to a Collapsible Drying Rack",
    paras: [
      "A traditional dish rack permanently eats up counter space you don't have to spare. A collapsible one solves that instantly &mdash; set it up when you need it, fold it flat when you don't.",
      "It sounds like a minor swap, but the difference in how much usable counter you get back is significant in a space this size.",
      "Dishwashing already feels like a chore in a cramped kitchenette. Removing the rack that's permanently in your way makes the whole routine noticeably less stressful.",
    ],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Add an Over-the-Sink Shelf",
    paras: [
      "The space directly over your sink is almost always wasted, and an over-the-sink shelf or rack puts it to work instead. It gives you a dedicated spot for drying dishes or holding soap and sponges.",
      "The real benefit is zoning &mdash; your sink area stays dedicated to washing and prep, and the rest of your counter stays genuinely clear for everything else.",
      "A two-tier version like the one shown here handles glasses, bowls, plates, and utensils all at once, which is a lot of dish capacity for a footprint that otherwise sits empty.",
    ],
    photo: pinPhoto("sink-shelf.jpg", "Two-tier black metal dish rack mounted over a double kitchen sink, holding glasses, bowls, plates and hanging utensils", 1250, 1226, "https://www.pinterest.com/pin/4604367795817739008/", "Over-the-Sink Dish Rack", "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Use Clip-On Counter Extensions",
    paras: [
      "Clip-on cutting boards and colanders extend your prep space without any permanent installation at all &mdash; they just clamp onto the edge of your sink or counter when you need them.",
      "It's a small add-on, but it solves a real problem: tiny kitchens rarely give you enough flat surface to actually chop, mix, and plate without things colliding.",
      "Keep one or two on hand and bring them out only during active meal prep. The rest of the time, your counter stays exactly as small and clear as it was before.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Mount a Magnetic Strip",
    paras: [
      "Magnetic strips are one of those ideas that sound minor until you actually use one &mdash; then they become essential. Mounting knives and metal utensils on the wall frees up real drawer and counter space.",
      "It also keeps everything visible, which matters more than it sounds like it should. You grab exactly what you need mid-cook instead of digging through a drawer one-handed.",
      "A simple wall-mounted setup, like the knife strip visible here next to a compact microwave-and-toaster-oven shelf, makes a tiny kitchen feel noticeably more organized for almost no cost.",
    ],
    photo: pinPhoto("magnetic-strips.jpg", "Dorm kitchen shelving unit with a microwave and toaster oven, a magnetic knife strip mounted on the wall and a rolling cart with a hot plate", 735, 1021, "https://www.pinterest.com/pin/211174972769820/", "Magnetic Strip Dorm Kitchen Storage", "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Install Wall-Mounted Spice Racks",
    paras: [
      "Spice racks mounted on the wall clear real estate off your counter and keep every seasoning visible at a glance, which genuinely changes how often you actually cook with them.",
      "There's a practical psychology to it &mdash; when spices are tucked in a drawer, they get forgotten. When they're right there on the wall, you reach for them without thinking twice.",
      "It adds a bit of personality too. A wall of neatly labeled jars does more visual work in a small kitchen than most decor items twice the size.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Go Vertical With a Tall Shelf Unit",
    paras: [
      "Floor space in a dorm kitchenette is basically nonexistent, which makes vertical storage the single highest-leverage move you can make. A tall shelf unit turns unused air into real storage.",
      "Stack a mini-fridge, microwave, and coffee maker into one column and you've consolidated three separate appliances into a single footprint instead of spreading them across the room.",
      "A setup like the one shown here &mdash; mini-fridge on the bottom, microwave and coffee station stacked above, open shelving for mugs and snacks on top &mdash; can genuinely double your usable storage without claiming any more floor.",
    ],
    photo: pinPhoto("vertical-shelf.jpg", "Tall wood shelving unit in a dorm room stacking a coffee maker, mugs and dishes above a black mini-fridge with a microwave on top", 736, 1021, "https://www.pinterest.com/pin/1407443628465375/", "Vertical Shelving for a Dorm Kitchenette", "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Choose Compact, Multi-Function Appliances",
    paras: [
      "Full-sized appliances overwhelm a tiny kitchen fast. Mini blenders, small toasters, and single-serve coffee makers give you the same function in a fraction of the footprint.",
      "Prioritize anything that does double duty &mdash; a blender that also chops, a toaster oven that replaces both a toaster and a mini oven. Fewer single-purpose gadgets means more usable counter.",
      "A console like the one shown here, with a coffee maker and lamps on top and a mini-fridge and microwave tucked behind closed doors below, proves a few compact appliances can disappear into furniture instead of cluttering the room.",
    ],
    photo: photo("multi-function-appliances.jpg", "White dorm room console with doors open revealing a mini-fridge and microwave, a coffee maker and two lamps on top between two beds", 588, 1024, "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Group Items in Small Baskets",
    paras: [
      "Small baskets are an underrated organizing tool &mdash; they group snacks, utensils, or cleaning supplies into visual units instead of letting everything spread loose across a shelf.",
      "The effect is less about storage capacity and more about how the whole kitchen reads. Grouped items look intentional; loose items look like clutter, even when it's the same amount of stuff.",
      "A wire shelving unit lined with a few matching baskets, the way it's set up here alongside the microwave and mini-fridge, turns an ordinary dorm shelf into something that actually looks organized at a glance.",
    ],
    photo: pinPhoto("baskets.jpg", "White wire shelving unit in a dorm room holding woven baskets, a microwave and a mini-fridge, next to a desk with photos and decor", 735, 1021, "https://www.pinterest.com/pin/193654852721150506/", "Dorm Kitchen Basket Storage", "idea11"),
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Hang Removable Hooks Wherever You Can",
    paras: [
      "Removable adhesive hooks solve the problem every dorm kitchen has: you need more hanging storage, but you can't drill into the wall to get it.",
      "Use them for utensils, towels, oven mitts, or small tools &mdash; anywhere a shelf won't fit but a single hook will. Corners and the wall above a sink are usually the best unclaimed real estate.",
      "A row of hooks does more work than people expect &mdash; the wall-mounted rack shown here holds an entire set of pots, pans and even cutting boards off the counter, all hanging in a strip that would otherwise sit flat against the wall doing nothing.",
    ],
    photo: pinPhoto("removable-hooks.jpg", "Wall-mounted metal rack with a row of hooks holding hanging pots, pans and utensils above a kitchen counter with cutting boards", 400, 400, "https://www.pinterest.com/pin/4604719614041044480/", "Wall-Mounted Hook Storage", "idea12"),
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
<p>Walking into a first dorm kitchen is usually a mix of awe and panic. The counters are microscopic, the appliances all seem to conspire against you, and somehow you're expected to cook, store food, stay clean, and still make it look halfway decent &mdash; all in the footprint of a shoebox.</p>
<p>The good news: small doesn't mean useless. With the right setup, even a genuinely tiny dorm kitchen can feel surprisingly functional, and it comes down to one thing more than anything else &mdash; giving every item an actual home instead of letting things pile up wherever they land.</p>
${pinPhoto("hero.jpg", "Small shared dorm kitchenette with a mini-fridge, microwave, over-the-sink dish rack and towels hanging from the cabinet", 736, 981, "https://www.pinterest.com/pin/106819822408428181/", "Small Shared Dorm Kitchenette", "hero")}

<h2>Why Dorm Kitchens Feel Chaotic Fast</h2>
<p>Most dorm kitchens feel overwhelming within a week, and it's rarely about the size itself &mdash; it's the lack of structure. Set one bowl down and the whole counter suddenly looks crowded, because there was never a designated place for it in the first place. Once you create actual zones for food, utensils, and appliances, even a genuinely tiny kitchen starts to feel manageable.</p>
<p>Every item counts more here than it would in a full-sized kitchen, too. There's no room for a stray bag of chips or a coffee maker camped out in the middle of your one workspace. Before buying anything, figure out what you'll actually use &mdash; a blender that also chops is worth it, a ten-piece waffle iron set almost never is. And don't skip vertical space: shelves, hooks, and wall-mounted racks can double your real storage without taking up a single inch of floor.</p>
${pinPhoto("intro-chaos.jpg", "Small dorm room corner with pink curtains and string lights, a black mini-fridge, microwave and a small wood shelving unit", 735, 1021, "https://www.pinterest.com/pin/11329436558985555/", "Organized Dorm Kitchen Corner", "chaos")}

<h2>12 Dorm Kitchen Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A dorm kitchen is small, but it doesn't have to feel limiting. With a little intentional organization, a handful of clever tools, and some genuinely smart storage choices, even the tightest kitchenette can be functional, tidy, and honestly kind of enjoyable to use.</p>
<p>Start with two or three ideas from this list that actually fit how you cook, not all twelve at once. A dorm kitchen you've slowly made your own beats a perfectly organized one you never got around to finishing.</p>
`;

module.exports = { body };
