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

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "dorm-kitchen-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "dorm-kitchen-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Get a Rolling Cart",
    paras: [
      "A rolling cart might be the single most useful thing you can bring into a dorm kitchenette. It gives you extra counter space and storage without installing anything permanent.",
      "Use it for snacks, utensils, even a small coffee station &mdash; the point is flexibility. Push it out of the way when you need floor space, roll it over when you're actually prepping food.",
      "A three-tier version like the one shown here, with a towel, dry goods, and even a small blender tucked onto its shelves, basically works as a second kitchen that happens to have wheels.",
    ],
    photo: pinPhoto("rolling-cart.jpg", "Black three-tier rolling cart in a kitchen holding utensils, a folded towel, dry goods jars and a small blender", 1024, 1024, "https://www.pinterest.com/pin/977773769110183439/", "Rolling Cart for a Dorm Kitchen"),
  },
  {
    n: "02",
    title: "Keep Dishes and Containers Stackable",
    paras: [
      "Stackable dishes and storage containers are quietly one of the biggest space-savers available to you. They cut down on cabinet clutter and make meal prep noticeably simpler.",
      "Look for containers that nest inside each other and bowls that stack cleanly rather than at odd angles. Mismatched or bulky pieces are what make a tiny kitchen feel chaotic fast.",
      "It pays off at move-out time too &mdash; a cabinet of stackables packs into a box in minutes, while mismatched dishware turns packing into its own project.",
    ],
  },
  {
    n: "03",
    title: "Build a Mini Coffee Station",
    paras: [
      "A dedicated coffee or tea corner makes mornings run smoother, and it's one of the easiest ways to make a dorm kitchenette feel like it actually belongs to you.",
      "Keep mugs, pods, sugar, and cream together in one spot so the mess stays contained instead of spreading across every surface.",
      "Even a small setup, like the labeled Keurig station shown here complete with its own little \"Coffee\" sign, reads as intentional rather than thrown together &mdash; it's a small detail that adds real personality.",
    ],
    photo: pinPhoto("coffee-station.jpg", "Compact coffee station on a dorm countertop with a Keurig machine, mugs, coffee and tea canisters and a wooden tray", 735, 1021, "https://www.pinterest.com/pin/985231165065391/", "Dorm Coffee Station Setup"),
  },
  {
    n: "04",
    title: "Switch to a Collapsible Drying Rack",
    paras: [
      "A traditional dish rack permanently eats up counter space you don't have to spare. A collapsible one solves that instantly &mdash; set it up when you need it, fold it flat when you don't.",
      "It sounds like a minor swap, but the difference in how much usable counter you get back is significant in a space this size.",
      "Dishwashing already feels like a chore in a cramped kitchenette. Removing the rack that's permanently in your way makes the whole routine noticeably less stressful.",
    ],
  },
  {
    n: "05",
    title: "Add an Over-the-Sink Shelf",
    paras: [
      "The space directly over your sink is almost always wasted, and an over-the-sink shelf or rack puts it to work instead. It gives you a dedicated spot for drying dishes or holding soap and sponges.",
      "The real benefit is zoning &mdash; your sink area stays dedicated to washing and prep, and the rest of your counter stays genuinely clear for everything else.",
      "A two-tier version like the one shown here handles glasses, bowls, plates, and utensils all at once, which is a lot of dish capacity for a footprint that otherwise sits empty.",
    ],
    photo: pinPhoto("sink-shelf.jpg", "Two-tier black metal dish rack mounted over a double kitchen sink, holding glasses, bowls, plates and hanging utensils", 1250, 1226, "https://www.pinterest.com/pin/4604367795817739008/", "Over-the-Sink Dish Rack"),
  },
  {
    n: "06",
    title: "Use Clip-On Counter Extensions",
    paras: [
      "Clip-on cutting boards and colanders extend your prep space without any permanent installation at all &mdash; they just clamp onto the edge of your sink or counter when you need them.",
      "It's a small add-on, but it solves a real problem: tiny kitchens rarely give you enough flat surface to actually chop, mix, and plate without things colliding.",
      "Keep one or two on hand and bring them out only during active meal prep. The rest of the time, your counter stays exactly as small and clear as it was before.",
    ],
  },
  {
    n: "07",
    title: "Mount a Magnetic Strip",
    paras: [
      "Magnetic strips are one of those ideas that sound minor until you actually use one &mdash; then they become essential. Mounting knives and metal utensils on the wall frees up real drawer and counter space.",
      "It also keeps everything visible, which matters more than it sounds like it should. You grab exactly what you need mid-cook instead of digging through a drawer one-handed.",
      "A simple wall-mounted setup, like the knife strip visible here next to a compact microwave-and-toaster-oven shelf, makes a tiny kitchen feel noticeably more organized for almost no cost.",
    ],
    photo: pinPhoto("magnetic-strips.jpg", "Dorm kitchen shelving unit with a microwave and toaster oven, a magnetic knife strip mounted on the wall and a rolling cart with a hot plate", 735, 1021, "https://www.pinterest.com/pin/211174972769820/", "Magnetic Strip Dorm Kitchen Storage"),
  },
  {
    n: "08",
    title: "Install Wall-Mounted Spice Racks",
    paras: [
      "Spice racks mounted on the wall clear real estate off your counter and keep every seasoning visible at a glance, which genuinely changes how often you actually cook with them.",
      "There's a practical psychology to it &mdash; when spices are tucked in a drawer, they get forgotten. When they're right there on the wall, you reach for them without thinking twice.",
      "It adds a bit of personality too. A wall of neatly labeled jars does more visual work in a small kitchen than most decor items twice the size.",
    ],
  },
  {
    n: "09",
    title: "Go Vertical With a Tall Shelf Unit",
    paras: [
      "Floor space in a dorm kitchenette is basically nonexistent, which makes vertical storage the single highest-leverage move you can make. A tall shelf unit turns unused air into real storage.",
      "Stack a mini-fridge, microwave, and coffee maker into one column and you've consolidated three separate appliances into a single footprint instead of spreading them across the room.",
      "A setup like the one shown here &mdash; mini-fridge on the bottom, microwave and coffee station stacked above, open shelving for mugs and snacks on top &mdash; can genuinely double your usable storage without claiming any more floor.",
    ],
    photo: pinPhoto("vertical-shelf.jpg", "Tall wood shelving unit in a dorm room stacking a coffee maker, mugs and dishes above a black mini-fridge with a microwave on top", 736, 1021, "https://www.pinterest.com/pin/1407443628465375/", "Vertical Shelving for a Dorm Kitchenette"),
  },
  {
    n: "10",
    title: "Choose Compact, Multi-Function Appliances",
    paras: [
      "Full-sized appliances overwhelm a tiny kitchen fast. Mini blenders, small toasters, and single-serve coffee makers give you the same function in a fraction of the footprint.",
      "Prioritize anything that does double duty &mdash; a blender that also chops, a toaster oven that replaces both a toaster and a mini oven. Fewer single-purpose gadgets means more usable counter.",
      "A console like the one shown here, with a coffee maker and lamps on top and a mini-fridge and microwave tucked behind closed doors below, proves a few compact appliances can disappear into furniture instead of cluttering the room.",
    ],
    photo: photo("multi-function-appliances.jpg", "White dorm room console with doors open revealing a mini-fridge and microwave, a coffee maker and two lamps on top between two beds", 588, 1024),
  },
  {
    n: "11",
    title: "Group Items in Small Baskets",
    paras: [
      "Small baskets are an underrated organizing tool &mdash; they group snacks, utensils, or cleaning supplies into visual units instead of letting everything spread loose across a shelf.",
      "The effect is less about storage capacity and more about how the whole kitchen reads. Grouped items look intentional; loose items look like clutter, even when it's the same amount of stuff.",
      "A wire shelving unit lined with a few matching baskets, the way it's set up here alongside the microwave and mini-fridge, turns an ordinary dorm shelf into something that actually looks organized at a glance.",
    ],
    photo: pinPhoto("baskets.jpg", "White wire shelving unit in a dorm room holding woven baskets, a microwave and a mini-fridge, next to a desk with photos and decor", 735, 1021, "https://www.pinterest.com/pin/193654852721150506/", "Dorm Kitchen Basket Storage"),
  },
  {
    n: "12",
    title: "Hang Removable Hooks Wherever You Can",
    paras: [
      "Removable adhesive hooks solve the problem every dorm kitchen has: you need more hanging storage, but you can't drill into the wall to get it.",
      "Use them for utensils, towels, oven mitts, or small tools &mdash; anywhere a shelf won't fit but a single hook will. Corners and the wall above a sink are usually the best unclaimed real estate.",
      "A row of hooks does more work than people expect &mdash; the wall-mounted rack shown here holds an entire set of pots, pans and even cutting boards off the counter, all hanging in a strip that would otherwise sit flat against the wall doing nothing.",
    ],
    photo: pinPhoto("removable-hooks.jpg", "Wall-mounted metal rack with a row of hooks holding hanging pots, pans and utensils above a kitchen counter with cutting boards", 400, 400, "https://www.pinterest.com/pin/4604719614041044480/", "Wall-Mounted Hook Storage"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || ""}`;
}

const body = `
<p>Walking into a first dorm kitchen is usually a mix of awe and panic. The counters are microscopic, the appliances all seem to conspire against you, and somehow you're expected to cook, store food, stay clean, and still make it look halfway decent &mdash; all in the footprint of a shoebox.</p>
<p>The good news: small doesn't mean useless. With the right setup, even a genuinely tiny dorm kitchen can feel surprisingly functional, and it comes down to one thing more than anything else &mdash; giving every item an actual home instead of letting things pile up wherever they land.</p>
${pinPhoto("hero.jpg", "Small shared dorm kitchenette with a mini-fridge, microwave, over-the-sink dish rack and towels hanging from the cabinet", 736, 981, "https://www.pinterest.com/pin/106819822408428181/", "Small Shared Dorm Kitchenette")}

<h2>Why Dorm Kitchens Feel Chaotic Fast</h2>
<p>Most dorm kitchens feel overwhelming within a week, and it's rarely about the size itself &mdash; it's the lack of structure. Set one bowl down and the whole counter suddenly looks crowded, because there was never a designated place for it in the first place. Once you create actual zones for food, utensils, and appliances, even a genuinely tiny kitchen starts to feel manageable.</p>
<p>Every item counts more here than it would in a full-sized kitchen, too. There's no room for a stray bag of chips or a coffee maker camped out in the middle of your one workspace. Before buying anything, figure out what you'll actually use &mdash; a blender that also chops is worth it, a ten-piece waffle iron set almost never is. And don't skip vertical space: shelves, hooks, and wall-mounted racks can double your real storage without taking up a single inch of floor.</p>
${pinPhoto("intro-chaos.jpg", "Small dorm room corner with pink curtains and string lights, a black mini-fridge, microwave and a small wood shelving unit", 735, 1021, "https://www.pinterest.com/pin/11329436558985555/", "Organized Dorm Kitchen Corner")}

<h2>12 Dorm Kitchen Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A dorm kitchen is small, but it doesn't have to feel limiting. With a little intentional organization, a handful of clever tools, and some genuinely smart storage choices, even the tightest kitchenette can be functional, tidy, and honestly kind of enjoyable to use.</p>
<p>Start with two or three ideas from this list that actually fit how you cook, not all twelve at once. A dorm kitchen you've slowly made your own beats a perfectly organized one you never got around to finishing.</p>
`;

module.exports = { body };
