// Body content for "10 Kitchen Layouts That Actually Stand the Test of
// Time". Photos carried over from the source article. The source reused
// the exact same photo for two separate pairs of sections (its "Kitchen
// Layout Foundation" intro photo duplicated its "Island" idea photo, and
// its "L-Shaped" idea photo duplicated its "Open-Plan" idea photo) — each
// duplicate is used once here for its better-matching slot, so Open-Plan
// runs without a dedicated photo rather than repeat an image. Condensed
// four padded intro H2 sections down to two.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "timeless-kitchen-layouts", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "The Galley Kitchen",
    paras: [
      "The galley layout is the unsung hero of small kitchens. It sounds a little old-school, but runs along two parallel walls to create a tight, corridor-style setup where everything stays within arm's reach.",
      "That proximity is exactly what makes it so efficient to cook in &mdash; there's no wasted distance between the stove, the sink, and the counter. It fits perfectly into apartments and smaller homes where every inch counts.",
      "You won't be hosting a crowd in a galley kitchen, but if you want function over flash, this layout quietly delivers more than it gets credit for.",
    ],
    photo: photo("galley.jpg", "Narrow galley kitchen with wood cabinets running along two parallel walls leading to an open door with a view outside", 683, 1024),
  },
  {
    n: "02",
    title: "The L-Shaped Kitchen",
    paras: [
      "For a little more breathing room, the L-shape is the classic go-to. It hugs two walls at a right angle and leaves the rest of the room open, which makes it a natural fit for families who want space without feeling boxed in.",
      "That open corner creates a smooth flow between the fridge, sink, and stove, and it leaves enough room for a dining nook or even an island if the square footage allows.",
      "It adapts to nearly any style, too &mdash; farmhouse, modern, whatever direction you're leaning, the L-shape works with it.",
    ],
    photo: photo("l-shaped.jpg", "Blue L-shaped kitchen cabinets wrapping around two walls with a wood butcher block corner counter and patterned tile backsplash", 1024, 683),
  },
  {
    n: "03",
    title: "The U-Shaped Kitchen",
    paras: [
      "If the L-shape feels good, the U-shape takes it further. Picture three connected walls of cabinets and counter forming a U that essentially surrounds you while you cook &mdash; everything within easy reach, no wasted steps.",
      "It's especially good for bigger families or serious home cooks, since you can chop, cook, and plate without moving far from any one spot.",
      "It can feel like overkill in a small kitchen, but if you spend real hours in there experimenting with recipes, the U-shape feels close to ideal.",
    ],
    photo: photo("u-shaped.jpg", "Dark green U-shaped kitchen cabinets wrapping three walls with open wood shelving, subway tile backsplash and a pendant light", 768, 1024),
  },
  {
    n: "04",
    title: "The Island Kitchen",
    paras: [
      "The island layout earns its popularity honestly. Beyond the obvious extra counter and storage, it becomes a natural gathering spot &mdash; the place where kids do homework, guests linger with a drink, and dinner prep somehow happens all at once.",
      "It works especially well in open-plan homes, where the island doubles as the visual anchor of the whole space.",
      "One tip worth remembering: don't oversize it. An island that's too large starts to feel like a landing strip rather than a kitchen feature. Keep it proportional to the room.",
    ],
    photo: photo("intro-foundation.jpg", "Large modern kitchen with a gray waterfall-edge island, three black pendant lights and glossy gray upper and lower cabinets", 1024, 683),
  },
  {
    n: "05",
    title: "The Open-Plan Kitchen",
    paras: [
      "If one layout says \"modern living\" more than any other, it's open-plan. Walls come down and the kitchen merges directly into the dining or living space.",
      "It might sound like a passing trend, but it isn't &mdash; people consistently want connection, and cooking while actually talking to the people around you beats being tucked behind a wall.",
      "It's not for everyone. If dirty dishes tend to linger until \"later,\" an open kitchen won't hide that the way a closed-off one would. But for anyone who likes blending cooking with entertaining, this layout holds up.",
    ],
  },
  {
    n: "06",
    title: "The Peninsula Kitchen",
    paras: [
      "Think of the peninsula as the island's more practical cousin. Instead of standing free, it extends out from a wall or counter &mdash; like an island that stopped just short of full independence.",
      "It's the move for homes that want the perks of an island (extra counter, storage, casual seating) without the floor space to support one. A peninsula works beautifully as a breakfast bar, a prep zone, or a soft divider between kitchen and living area.",
      "The one thing to watch: keep it from becoming a clutter magnet. A peninsula works best as a bridge between spaces, not a wall that happens to be shorter.",
    ],
    photo: photo("peninsula.png", "Pale yellow kitchen with a peninsula counter extending toward a wood dining table, styled with bread, a salad bowl and bar stools", 1024, 574),
  },
  {
    n: "07",
    title: "The Single-Wall Kitchen",
    paras: [
      "For minimalists or anyone working with a genuinely compact footprint, the single-wall layout lines cabinets, counters, and appliances up neatly along one wall.",
      "It can sound sparse on paper, but done well it reads sleek and surprisingly efficient &mdash; especially with tall cabinets and smart vertical storage doing the heavy lifting.",
      "You won't get a sprawling prep zone out of it, but if your cooking style leans toward quick and simple rather than five-course production, this layout makes complete sense.",
    ],
    photo: photo("single-wall.jpg", "Sleek dark single-wall kitchen with a black marble countertop, built-in cooktop, under-cabinet lighting and a tile backsplash", 819, 1024),
  },
  {
    n: "08",
    title: "The G-Shaped Kitchen",
    paras: [
      "The G-shape is the lesser-known sibling of the U-shape &mdash; essentially a U-shaped kitchen with an added peninsula, forming something closer to a G.",
      "It maximizes nearly every inch of available space and works especially well when you want distinct zones for cooking, prepping, and socializing without constantly bumping into other people in the room.",
      "The tradeoff is that it can feel enclosed if you're not careful. Balance it with good lighting and lighter cabinetry so it doesn't start to feel like a box.",
    ],
    photo: photo("g-shaped.jpg", "Glossy navy G-shaped kitchen with a marble waterfall peninsula, stainless steel appliances and track lighting", 1024, 683),
  },
  {
    n: "09",
    title: "The Modular Kitchen",
    paras: [
      "Modular kitchens trade fixed layouts for pre-designed units &mdash; cabinets, shelving, appliances &mdash; that can be arranged and rearranged however suits the space.",
      "That adaptability is exactly what makes this one timeless. You can adjust as your needs change without a full remodel, which matters more than it sounds like it should. A young couple can start simple and expand the setup as life gets busier.",
      "It's essentially building blocks for grown-ups who happen to cook.",
    ],
    photo: photo("modular.png", "Wall-mounted modular kitchen cabinets and open cube shelving with books, plants and ceramics above a gray countertop", 1024, 574),
  },
  {
    n: "10",
    title: "The Zone-Style Kitchen",
    paras: [
      "Instead of relying on the classic kitchen triangle, a zone-style layout splits the space into distinct activity areas &mdash; cooking, prepping, cleaning, storage, socializing.",
      "It shines in larger kitchens where more than one person is using the space at once. One person can bake while another handles dinner, and neither one is constantly stepping around the other.",
      "It needs real square footage to work, but if you have it, this layout feels genuinely forward-thinking without ever reading as trendy.",
    ],
    photo: photo("zone-style.png", "Large open kitchen divided into a prep island zone with laptop and cutting board, a cooking zone with range and sink, and a separate dining table zone", 1024, 574),
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
<p>Walk into a kitchen and what do you actually notice first? The cabinets, maybe the backsplash, possibly just the smell of last night's dinner still lingering. None of that matters much if the layout underneath it all doesn't work. Gorgeous countertops get wasted in cramped, awkward floor plans constantly, while plain finishes in a smart layout can feel like an absolute gem.</p>
<p>A good layout changes how you actually live and cook in a space &mdash; and it almost always starts with the floor plan, not the fixtures. The good news is you don't need to reinvent anything. Certain layouts have held up for decades because they simply work, no matter what's trending in cabinet colors that year.</p>
<p>Here are ten of them, each with its own strengths and a few quirks worth knowing before you commit.</p>
${photo("hero.jpg", "Large modern kitchen with a gray waterfall-edge island, three black pendant lights, glossy gray cabinets and a dining area beyond", 2560, 1707)}

<h2>What Actually Makes a Layout Timeless</h2>
<p>A timeless layout isn't about looking good in photos &mdash; it's about holding up to real functionality over years of actual use. The classic kitchen work triangle (fridge, sink, stove in reasonable proximity) still rules for a reason, and a good layout stays flexible enough to evolve, whether that means hosting dinner parties later or watching your kids claim the island as a homework desk.</p>
<p>Balance matters too. A kitchen can feel like an empty ballroom or a cluttered shoebox, and neither one lasts in anyone's favor. The layouts that stick around hit a genuine sweet spot between open and functional &mdash; because flow matters more than finishes. Countertop trends come and go, but the ability to move smoothly through your own kitchen never stops mattering.</p>
${photo("intro-why.jpg", "Gray island kitchen with two glass globe pendant lights, dark wood bar stools and a marble tile backsplash with a black hood", 1024, 683)}

<h2>Style Is Not the Same Thing as Layout</h2>
<p>People confuse these two constantly. You can build a farmhouse kitchen, a sleek modern one, or a cozy cottage version &mdash; but underneath all of it, the layout is the skeleton holding the whole design together.</p>
<p>Changing cabinet colors or swapping hardware is like getting a new haircut: fun, refreshing, easy to undo. Changing your layout is closer to surgery &mdash; something you want to get right the first time, because you're not doing it again anytime soon. That's exactly why the layout conversation should come before the styling one. Once the floor plan is settled, everything else becomes the easy part.</p>

<h2>10 Kitchen Layouts Worth Considering</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>There's no single "best" kitchen layout. The timelessness comes down to how well a given design matches your lifestyle, your actual square footage, and honestly your patience for cleanup after cooking.</p>
<p>From the tight efficiency of a galley kitchen to the flexibility of a zone-style design, each layout on this list earned its spot because it simply works. Styles shift constantly &mdash; remember when orange countertops were a thing? &mdash; but a layout that genuinely makes your life easier never really goes out of style.</p>
<p>Ask yourself how you actually use your kitchen: hosting often, cooking solo, managing a homework station for kids. Once that's clear, the right layout tends to become obvious on its own.</p>
`;

module.exports = { body };
