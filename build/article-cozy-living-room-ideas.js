// Body content for "12 Ways to Make Your Living Room Feel Genuinely Cozy".
// Photos carried over from the source article (AI-generated stock images,
// uncredited in the source, so plain photo() is used throughout — no
// Unsplash/Pinterest attribution to carry over). Note: the source's
// "soft curtains" photo actually shows dramatic, formal swagged drapery
// rather than light breezy linen — the paragraph was written to describe
// what the photo actually shows instead of claiming a breezy look that
// isn't there.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "cozy-living-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Roll Out a Thick, Soft Rug",
    paras: [
      "If you only do one thing on this list, make it this one. A thick area rug is the fastest, most reliable way to cozy up a living room, full stop.",
      "Beyond the obvious comfort factor, a rug does real work &mdash; it defines the seating area, softens footsteps and echo, and makes the whole room feel more pulled-together instantly.",
      "Go bigger than feels natural. A rug that's too small makes a room look choppy and unfinished, while a properly oversized one, like the plush shag shown here, instantly reads as intentional.",
    ],
    photo: photo("rugs.png", "Thick plush cream shag area rug under a sofa draped with soft fuzzy blankets and pillows, next to a low wood coffee table", 683, 1024),
  },
  {
    n: "02",
    title: "Go Bigger on the Sofa",
    paras: [
      "A stiff, undersized sofa might look fine in photos, but it does nothing for actual comfort. Deep-seated sofas and oversized sectionals are what genuinely cozy living rooms are built around.",
      "The appeal isn't complicated &mdash; you can actually sink into them, sprawl out for a movie marathon, and pile on more throw pillows than you'd ever fit on a smaller piece.",
      "A wraparound sectional like the one shown here, built right into the room around the fireplace, turns the whole space into one big landing spot rather than a collection of separate seats.",
    ],
    photo: photo("oversized-sofa.png", "Large wraparound gray sectional sofa filled with pillows surrounding a square ottoman coffee table facing a lit fireplace", 683, 1024),
  },
  {
    n: "03",
    title: "Layer Your Textures",
    paras: [
      "Ever walked into a room that felt comfortable before you even sat down? That's almost always texture doing the work, not color or layout.",
      "Mixing materials is the trick &mdash; chunky knit pillows, a soft wool rug, a fluffy throw draped just so, linen curtains, a velvet sofa against a rougher wood coffee table. The contrast is what reads as cozy.",
      "Aim for variety over matching. Smooth against rough, shiny against matte, soft against firm &mdash; the more textures in play, the deeper and warmer the room feels.",
    ],
    photo: photo("textures.png", "Beige velvet sectional sofa layered with a chunky knit throw blanket, mixed textured pillows and a woven pouf beside a rustic wood coffee table", 683, 1024),
  },
  {
    n: "04",
    title: "Bring in Plants",
    paras: [
      "Plants might be the cheapest, easiest cozy upgrade on this entire list, and they do something no other item here can &mdash; they genuinely bring the room to life.",
      "You don't need a single statement plant. Mixing a tall floor plant, a hanging trailing vine, and a few smaller shelf plants builds the same layered effect that works for textiles.",
      "A room as filled-in as the one shown here might be more jungle than most people want, but even a scaled-down version of this &mdash; one big leafy plant plus a couple of smaller pots &mdash; changes how a room feels immediately.",
    ],
    photo: photo("plants.png", "Living room filled with large leafy plants including a fiddle leaf fig and hanging pothos, with orange throw pillows on tan armchairs", 683, 1024),
  },
  {
    n: "05",
    title: "Let the Fireplace Lead",
    paras: [
      "If you have a fireplace, you're already most of the way to a cozy living room without trying. Wood-burning, gas, or electric &mdash; it doesn't matter. Fire reads as comfort instantly.",
      "A fireplace does something furniture alone can't: it gives the room a genuine gathering point, the kind of focal point that makes cold nights feel like an occasion instead of something to get through.",
      "Arrange seating to actually face it, like the ring of armchairs shown here, rather than treating it as background. No fireplace? A cluster of pillar candles on a mantel gets you a surprising amount of the same glow.",
    ],
    photo: photo("fireplace.png", "Cozy armchairs arranged around a stone fireplace with a roaring fire, rustic wood mantel decorated with candles and framed photos", 683, 1024),
  },
  {
    n: "06",
    title: "Add Wooden Touches",
    paras: [
      "Nothing warms up a room quite like natural wood, and you don't need to go full log cabin to get the effect. A few thoughtful pieces do the job.",
      "Floating shelves, a reclaimed wood coffee table, exposed beams if your space has them, or simple wood-framed accents all add the same grounded warmth.",
      "Wood and greenery are natural partners, too &mdash; the chunky reclaimed coffee table and open wood shelving shown here feel considerably warmer next to a simple vase of branches than they would against an all-metal setup.",
    ],
    photo: photo("wooden-touches.png", "Chunky reclaimed wood coffee table in a living room with wood beam ceiling, open wood shelving and cream slipcovered chairs", 1024, 683),
  },
  {
    n: "07",
    title: "Keep Lighting Soft and Layered",
    paras: [
      "Lighting can make or break the whole cozy effort. There's no point layering in soft textures and warm colors if you're going to wash it all out under one harsh overhead light.",
      "Floor lamps with fabric shades, table lamps with warm bulbs, string lights, and real or flameless candles all work toward the same soft, ambient glow.",
      "Layer your light sources the same way you'd layer textures &mdash; multiple smaller, warmer sources, like the lamps and string lights shown here, beat a single bright fixture every time.",
    ],
    photo: photo("lighting.png", "Dimly lit living room with warm string lights strung along the ceiling, multiple table lamps glowing and armchairs draped in soft throws", 683, 1024),
  },
  {
    n: "08",
    title: "Pile On Blankets and Throws",
    paras: [
      "You genuinely cannot have just one throw blanket in a living room &mdash; they're the easiest, lowest-commitment way to add texture and warmth without touching anything else in the room.",
      "Beyond making a sofa instantly more inviting, they're practically functional &mdash; perfect for spontaneous naps, and an easy way to shift a room's color palette without buying new furniture.",
      "Drape one over the arm of the sofa, like the striped throw shown here against a well-loved reading corner, and keep a couple more in a basket nearby so there's always one within reach.",
    ],
    photo: photo("blankets-throws.png", "Soft striped throw blanket draped over a brown sofa in front of built-in bookshelves filled with books", 683, 1024),
  },
  {
    n: "09",
    title: "Lean Into Warm, Earthy Colors",
    paras: [
      "Spa-like, calming spaces never lean on neon brights, and that's not an accident. Warm, earthy tones are doing quiet work in almost every genuinely cozy room you've ever liked.",
      "Soft beige, warm taupe, creamy white, deep rust, olive green, terracotta &mdash; any of these grounds a room immediately in a way cooler, brighter colors just don't.",
      "Stick to muted, grounded shades throughout, the way the sun-washed neutral room shown here does with its olive accents and terracotta pots. Bonus: these tones are also forgiving if you've got pets, kids, or a few questionable snack habits.",
    ],
    photo: photo("warm-colors.png", "Sun-washed living room with warm neutral plaster walls, olive green accents, terracotta planters and arched doorways", 683, 1024),
  },
  {
    n: "10",
    title: "Build a Small Reading Nook",
    paras: [
      "Whether you actually finish books in it or mostly just scroll your phone there, a dedicated cozy corner is one of the most satisfying wins in a living room.",
      "The formula is simple: a cushy armchair, a soft floor lamp for warm directional light, a side table for books or tea, and a throw blanket for curling up.",
      "Tuck it near a bookshelf if you have one, the way the lamp-lit armchair and ottoman are arranged here &mdash; the visual of books nearby does half the cozy work even on days you don't open one.",
    ],
    photo: photo("reading-nook.png", "Cozy armchair with a chunky knit throw next to a floor lamp and bookshelf, with a round ottoman and floor cushion nearby", 683, 1024),
  },
  {
    n: "11",
    title: "Make It Personal",
    paras: [
      "The coziest living rooms are never the ones that look like they were copied straight from a catalog &mdash; they're the ones that actually tell you something about who lives there.",
      "Framed family photos, travel souvenirs, handmade pieces, vintage finds, anything sentimental you genuinely love belongs here, catalog-perfect or not.",
      "A dense gallery wall of vintage-framed photos, like the one shown here above a simple gray sofa, is proof that a room doesn't need matching anything to feel warm &mdash; it just needs to feel like yours.",
    ],
    photo: photo("sentimental-decor.png", "Gallery wall of vintage gold and black framed family photographs above a gray tufted sofa and rustic wood coffee table", 683, 1024),
  },
  {
    n: "12",
    title: "Frame the Room With Statement Curtains",
    paras: [
      "Curtains do more for a room's mood than most people give them credit for, and they don't have to be the soft, breezy linen kind to make an impact.",
      "Sweeping, floor-length drapery with real volume, like the dramatic swagged curtains shown here framing a fireplace sitting area, adds a theatrical, enveloping quality that feels genuinely romantic rather than stiff.",
      "Whatever style you choose, length matters more than almost anything else &mdash; curtains that actually reach the floor instantly make a room feel finished and considerably more elegant than ones that stop short.",
    ],
    photo: photo("soft-curtains.png", "Dramatic swagged curtains with tasseled tiebacks framing a cozy sitting room with a lit fireplace and pink armchair", 683, 1024),
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
<p>A good living room isn't a place so much as an experience &mdash; it's where you collapse after a long day, where guests get handed the slightly wobbly chair, and where you tell yourself you're going to read before three episodes happen instead.</p>
<p>The best ones were never built around matching cushions or flawless styling. They're built around comfort and personality &mdash; a space that genuinely feels like a hug the moment you walk in, whatever your style actually is.</p>
${photo("hero.jpg", "Warm neutral living room with a beige sectional sofa, layered textured pillows, a chunky knit throw and wood coffee table lit by soft window light", 1152, 768)}

<h2>12 Ways to Make a Living Room Feel Genuinely Cozy</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A comfortable living room was never about looking expensive &mdash; it just needs to feel like you. Whether that means layering in soft rugs, finally buying the oversized sofa you've been eyeing, or building a tiny reading corner you'll actually use, the goal is the same: a room you want to be in.</p>
<p>Let it be the place where you flop, chill, laugh, and occasionally finish that book. Pick one idea from this list and start there &mdash; cozy builds up a layer at a time, not all at once.</p>
`;

module.exports = { body };
