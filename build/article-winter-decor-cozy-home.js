// Body content for "14 Winter Decor Ideas for a Cozy Home". Photos
// carried over from the source article, Pinterest pin links preserved.
// Source cited real publications/people for specific claims (a direct
// quote attributed to stylist Colin King, plus citations to Better
// Homes & Gardens and Architectural Digest twice) — none independently
// verifiable, so all were dropped and the underlying advice rewritten
// in the site's own voice. 13 of 14 ideas had a photo in the source
// (idea 01, Layer Chunky Throws, had none — a genuine gap, though the
// hero happens to depict that exact look). Condensed the source's
// 4-section intro into 2 sections.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "winter-decor-cozy-home", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "winter-decor-cozy-home", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Use Warm Lamps Instead of Ceiling Lights",
    paras: [
      "This idea deserves its own spot because it genuinely changes how a room feels.",
      "Replacing harsh overhead lighting with warm table lamps, floor lamps, sconces or portable lights shifts a room's whole mood, especially once the sun goes down.",
      "A single lamp placed beside the sofa tends to create more real warmth than one large ceiling fixture ever could &mdash; switching off the overhead light in the evening and relying on lamps instead makes a room feel noticeably more atmospheric.",
    ],
    photo: pinPhoto("warm-lamps.jpg", "Warm table lamp lighting a cozy winter living room", 683, 1024, "https://www.pinterest.com/pin/1119003838698929956/", "Warm Lamp Lighting for Winter"),
  },
  {
    n: "02",
    title: "Add Winter Warmth With Layered Pillows",
    paras: [
      "Pillows can completely shift the personality of a sofa.",
      "Combining different shapes and textures &mdash; velvet, wool, boucle, corduroy, linen, knitted fabric &mdash; tends to work better for winter than simply swapping in matching seasonal covers.",
      "Keeping the color palette connected to the rest of the room, with just one or two cushions introducing a deeper shade like chocolate brown or taupe, is often enough to make a whole room feel warmer.",
    ],
    photo: pinPhoto("layered-pillows.jpg", "Layered textured pillows in warm winter tones on a sofa", 683, 1024, "https://www.pinterest.com/pin/29343835069219227/", "Layered Winter Pillows"),
  },
  {
    n: "03",
    title: "Bring In a Soft Area Rug",
    paras: [
      "Cold floors kill a cozy mood almost instantly.",
      "A rug visually anchors furniture while adding real softness underfoot, and it's worth considering for a living room, bedroom, reading nook or entryway alike.",
      "Layering a smaller textured rug over a larger neutral one, where the room allows for it, adds even more warmth without overwhelming the space with pattern.",
    ],
    photo: pinPhoto("area-rug.jpg", "Soft textured area rug layered in a cozy winter living room", 683, 1024, "https://www.pinterest.com/pin/67765169389574742/", "Soft Winter Area Rug"),
  },
  {
    n: "04",
    title: "Create a Warm Winter Reading Corner",
    paras: [
      "Every home benefits from one small corner built specifically for disappearing into for an hour.",
      "A comfortable chair near a floor lamp or window, with a throw, a small side table and a basket for books nearby, is really the whole setup.",
      "It gives an otherwise empty corner an actual purpose, turning unused space into somewhere genuinely worth sitting.",
    ],
    photo: pinPhoto("reading-corner.jpg", "Cozy winter reading corner with a throw and floor lamp", 683, 1024, "https://www.pinterest.com/pin/360428776447847950/", "Cozy Winter Reading Corner"),
  },
  {
    n: "05",
    title: "Decorate With Natural Winter Elements",
    paras: [
      "Winter decorating doesn't require anything manufactured to feel seasonal.",
      "Branches, dried flowers, pinecones, eucalyptus, evergreen stems, firewood, stone or unfinished wood all bring real texture into a room with very little effort.",
      "A few branches in a large vase, a bowl of pinecones, or a bit of greenery along a mantel keeps the arrangement simple while still balancing a room that leans heavily on glass, metal or smooth furniture.",
    ],
    photo: pinPhoto("natural-elements.jpg", "Natural winter elements like branches and pinecones styled indoors", 683, 1024, "https://www.pinterest.com/pin/988680924531765709/", "Natural Winter Decor Elements"),
  },
  {
    n: "06",
    title: "Add Candles for Glow and Atmosphere",
    paras: [
      "Candles can genuinely change the feel of an entire evening.",
      "Placed on a coffee table, dining table, mantel or bedside table, and grouped at a few different heights, they create a noticeably stronger visual effect than a single candle on its own.",
      "Warm, subtle scents &mdash; cedar, vanilla, amber, sandalwood, cinnamon &mdash; suit winter particularly well, as long as the candles stay a layer of atmosphere rather than the room's only light source.",
    ],
    photo: pinPhoto("candles.jpg", "Grouped candles creating warm atmosphere in a winter home", 683, 1024, "https://www.pinterest.com/pin/719801952987585311/", "Candles for Winter Atmosphere"),
  },
  {
    n: "07",
    title: "Add Warm Wood Wherever a Room Feels Cold",
    paras: [
      "When a room leans heavily on white, gray, glass or metal, adding wood softens the whole space.",
      "A wooden stool, side table, cutting board, picture frame, tray or decorative bowl all do this job without needing a full furniture swap.",
      "Mixing slightly different wood tones, rather than matching everything exactly, often reads as more natural &mdash; adding wood in two or three spots is usually enough to make it feel intentional.",
    ],
    photo: photo("warm-wood.jpg", "Warm wood accents added to soften a winter room", 683, 1024),
  },
  {
    n: "08",
    title: "Make the Bedroom Feel Like a Winter Retreat",
    paras: [
      "A bedroom deserves extra attention during winter, starting with the bed itself since it takes up so much visual space.",
      "A heavier comforter, a textured duvet, soft pillows and a throw at the foot of the bed build real warmth without requiring a repaint.",
      "Soft taupes, creams, muted browns, dusty greens and deep charcoal all suit a winter bedroom well &mdash; the goal isn't to make the room darker, just softer.",
    ],
    photo: pinPhoto("bedroom-retreat.jpg", "Winter bedroom retreat with a heavy comforter and soft textures", 683, 1024, "https://www.pinterest.com/pin/1141592205578595492/", "Winter Bedroom Retreat"),
  },
  {
    n: "09",
    title: "Use Heavier Curtains for Winter Warmth",
    paras: [
      "Curtains often get overlooked when thinking about winter decor, despite how much they actually contribute to a room's feel.",
      "Replacing thin summer curtains with heavier linen, velvet, cotton or thermal panels gives a window more visual weight, making the whole room feel more enclosed and comfortable.",
      "Layering sheer curtains underneath a heavier outer panel keeps the room bright during the day while still allowing a more cocoon-like feeling at night.",
    ],
    photo: pinPhoto("heavy-curtains.jpg", "Heavy winter curtains layered over sheer panels", 683, 1024, "https://www.pinterest.com/pin/301530137574754354/", "Heavier Curtains for Winter"),
  },
  {
    n: "10",
    title: "Create a Cozy Winter Mantel",
    paras: [
      "A mantel can become the clear visual anchor of a winter living room.",
      "Starting with one larger focal point &mdash; a mirror, a piece of artwork, a wreath &mdash; then layering smaller elements around it, builds the display in a logical order.",
      "Keeping some empty space between objects matters just as much as what gets placed there; a mantel reads better when the eye has room to rest than when every inch is filled.",
    ],
    photo: pinPhoto("winter-mantel.jpg", "Cozy winter mantel styled with a focal piece and layered decor", 683, 1024, "https://www.pinterest.com/pin/689261918014163844/", "Cozy Winter Mantel"),
  },
  {
    n: "11",
    title: "Give the Dining Table a Softer Winter Look",
    paras: [
      "An elaborate holiday tablescape isn't necessary to make a dining table feel seasonal.",
      "A simple winter centerpiece built from a linen runner, ceramic plates, wooden serving pieces, candles and a bit of greenery reads as approachable rather than overly formal.",
      "A bowl of seasonal fruit &mdash; apples, pears, pomegranates, citrus &mdash; works just as well as an easy centerpiece, adding color without the table feeling over-decorated or crowded.",
    ],
    photo: pinPhoto("dining-table.jpg", "Dining table styled with a soft winter centerpiece", 683, 1024, "https://www.pinterest.com/pin/10766486607626886/", "Winter Dining Table Styling"),
  },
  {
    n: "12",
    title: "Style Shelves With Books and Meaningful Objects",
    paras: [
      "Shelves turn into clutter magnets fast if they're not approached with some intention.",
      "Books, ceramics, framed artwork, baskets, wood and a few seasonal pieces, stacked horizontally with a small object on top and breathing room left around larger pieces, build genuine rhythm.",
      "Using objects that actually hold meaning, rather than items bought purely because they matched, makes the whole shelf feel more personal and considered.",
    ],
    photo: pinPhoto("styled-shelves.jpg", "Styled shelves with books and meaningful winter decor objects", 683, 1024, "https://www.pinterest.com/pin/561401909823169370/", "Styled Shelves for Winter"),
  },
  {
    n: "13",
    title: "Build a Cozy Winter Color Palette",
    paras: [
      "The final idea ties everything else together.",
      "Rather than decorating each room separately, carrying one consistent winter palette throughout the home &mdash; cream, warm beige, brown and charcoal, or soft white, taupe, muted olive and natural wood &mdash; keeps the whole house feeling connected.",
      "A consistent palette also prevents a home from feeling like several unrelated decorating projects competing for attention room to room.",
    ],
    photo: pinPhoto("color-palette.jpg", "Cohesive cozy winter color palette carried through a home", 683, 1024, "https://www.pinterest.com/pin/422281212996359/", "Cozy Winter Color Palette"),
  },
  {
    n: "14",
    title: "Layer Chunky Throws Across Seating",
    paras: [
      "Start with the simplest change on this entire list.",
      "A chunky knit, wool, boucle, fleece or soft cotton throw draped over a sofa or accent chair, left slightly imperfect rather than folded too precisely, makes a room feel more relaxed almost instantly.",
      "Mixing one chunky throw with a smoother pillow or linen cushion adds real visual depth through contrast &mdash; just avoid piling on five different blanket colors at once, since the goal is a decorated home, not a textile display.",
    ],
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
<p>A cozy winter home doesn't require redecorating every room from scratch. Most of what makes a space feel warmer during the colder months comes down to texture, lighting and a handful of consistent colors layered in gradually, rather than a single dramatic overhaul.</p>
<p>None of the ideas below demand a big budget or a lot of time. Most work as small, individual additions that can be layered in over a weekend or two.</p>
${photo("hero.jpg", "Cozy living room with chunky knit throws and faux fur pillows styled for winter", 508, 903)}

<h2>What Makes a Home Feel Cozy in Winter</h2>
<p>Texture does most of the heavy lifting in a winter-ready home &mdash; chunky knits, soft rugs, warm wood and layered lighting all contribute more to the feeling of coziness than any single big purchase could. A consistent, warm color palette carried through the house also helps, without requiring every room to be decorated identically.</p>
${photo("intro-warm-living.jpg", "Warm, layered winter living room with soft lighting and natural textures", 683, 1024)}

<h2>14 Winter Decor Ideas for a Cozy Home</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these fourteen ideas require a full seasonal overhaul to make a real difference. A chunky throw, a few warm lamps, and a consistent color palette carried through the home do most of the actual work.</p>
<p>The coziest homes tend to be the ones built on restraint rather than excess &mdash; a few well-chosen, well-placed pieces will always outperform a room crowded with every winter item available.</p>
`;

module.exports = { body };
