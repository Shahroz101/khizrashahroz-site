// Body content for "15 Above-the-Cabinet Decor Ideas That Don't Look
// Dated". Photos carried over from the source article. Several
// photo/idea pairings were mismatched or duplicated: the idea 04
// "Statement Art" photo was the exact same file used as the hero, the
// idea 03 "Minimal Greenery" photo was actually a sign-heavy cluttered
// display with barely any greenery, and the idea 06 "Sculptural Objects"
// photo was actually a Christmas-decorated shelf (reassigned to a
// different photo that genuinely shows a sculptural object — a ceramic
// rooster). Idea 07 was renamed slightly to "Wooden Crates and Bowls"
// since its photo shows stacked crates, not the shallow dough bowls the
// text originally described, and idea 11 was softened from
// "architectural pieces" (corbels, columns) to match what its photo
// actually shows (tall dried stems, a round clock, candlesticks). Five
// ideas ended up with no photo at all (03, 04, 08, 09, 14) — reordered so
// no two gaps run back to back. Condensed 4 intro H2/H3 sections down to
// 2, dropped the post-list "long-term" styling section.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "above-cabinet-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Tall Ceramic Vases for Clean Vertical Interest",
    paras: [
      "Tall ceramic vases add real height without adding clutter, and they work especially well when cabinets stop well short of the ceiling.",
      "Matte finishes genuinely age better than glossy ones &mdash; soft whites, warm taupes, and muted charcoal tend to hold up the longest without feeling trendy.",
      "For it to read as intentional rather than random: stick to odd numbers like three or five, vary the heights slightly, and keep the color palette tight, the way the grouped pitchers shown here do.",
    ],
    photo: photo("tall-vases.jpg", "Row of tall matte white ceramic vases and pitchers lined up above white kitchen cabinets", 683, 1024),
  },
  {
    n: "02",
    title: "Minimal Greenery, Used Sparingly",
    paras: [
      "Greenery works well above kitchen cabinets, but only with real restraint. Less greenery almost always reads as more expensive than a lot of it.",
      "Skip trailing vines entirely. Faux olive branches, eucalyptus stems, or a single sculptural plant do far more with far less.",
      "Keep it genuinely sparse, and ask one honest question before adding anything: would this actually grow like this in nature? If the answer is no, it's a pass.",
    ],
  },
  {
    n: "03",
    title: "Oversized Woven Baskets That Feel Intentional",
    paras: [
      "Baskets can absolutely look dated, but they don't have to. The difference comes down entirely to scale.",
      "Large-scale woven baskets with clean, simple shapes read as architectural and calm, while small baskets scream clutter immediately.",
      "These work especially well in farmhouse kitchens, transitional spaces, and warm neutral color schemes, like the basket paired with ceramic vases shown here. As a bonus, they hide dust far better than shiny decor ever does.",
    ],
    photo: photo("woven-baskets.jpg", "Large woven basket and neutral ceramic vases arranged above white kitchen cabinets with a trailing plant", 683, 1024),
  },
  {
    n: "04",
    title: "Glass Vessels for Light Reflection",
    paras: [
      "Glass decor works beautifully above kitchen cabinets as long as it stays simple. Clear or lightly tinted glass in rounded shapes reflects light and keeps the whole space feeling genuinely open.",
      "Go bigger than feels natural &mdash; a few larger glass vessels read as considered, while a cluster of small ones starts to look like clutter fast.",
      "It's also one of the lowest-risk choices on this entire list. Glass never really goes out of style the way more decorative materials can.",
    ],
  },
  {
    n: "05",
    title: "Antique and Vintage Finds for Character",
    paras: [
      "Nothing warms up a kitchen faster than something genuinely old. Vintage pitchers, old bread boards, and antique jars all do real work here.",
      "Restraint is the key. One or two pieces per section read as collected; a full shelf of antique finds starts to feel like a flea market display instead.",
      "A pair of vintage lanterns flanking glass vessels and trailing greenery, like the arrangement shown here, proves how much warmth a few well-chosen old pieces can add.",
    ],
    photo: photo("vintage-finds.jpg", "Vintage lanterns, clear glass vases and trailing greenery arranged above dark wood kitchen cabinets", 683, 1024),
  },
  {
    n: "06",
    title: "Cookbooks Styled Like Decor",
    paras: [
      "Cookbooks work above cabinets, but only when they look intentional rather than like an overflow shelf.",
      "Stack them horizontally, limit the color palette to neutrals, and add one single object on top to finish the look.",
      "If the cookbook collection currently looks like a rainbow exploded, it belongs on a regular shelf instead &mdash; this spot only works with real color discipline.",
    ],
  },
  {
    n: "07",
    title: "Sculptural Objects That Feel Like Art",
    paras: [
      "This is one of the better moves when the goal is something genuinely modern. Sculptural objects with organic shapes &mdash; curves, texture, neutral tones &mdash; add interest without shouting for attention.",
      "Stone-inspired decor, abstract ceramic forms, and matte resin objects all work well here, but so does something with a little more personality.",
      "A single sculptural figure, like the ceramic rooster anchoring the pitcher and greenery shown here, can carry an entire section on its own.",
    ],
    photo: photo("sculptural-objects-2.jpg", "White ceramic rooster figure, a pitcher and greenery with string lights arranged above white kitchen cabinets", 736, 490),
  },
  {
    n: "08",
    title: "Statement Art Leaned Against the Wall",
    paras: [
      "This one surprises people every time, but yes, art genuinely works above kitchen cabinets when the scale is right.",
      "Lean framed pieces against the wall rather than hanging them. It reads as relaxed and current in a way a perfectly hung frame doesn't.",
      "Neutral abstracts, vintage-style sketches, and soft landscapes all work well here, and a piece of real art instantly removes any lingering showroom-kitchen feeling.",
    ],
  },
  {
    n: "09",
    title: "Wooden Crates and Bowls for Warmth",
    paras: [
      "Wood brings a warmth up there that almost nothing else matches. Long, shallow dough bowls work especially well, creating a clean horizontal line that balances taller cabinets.",
      "Stacked wooden crates do similar work while adding genuine storage &mdash; tucking jars, tins, and smaller vessels inside keeps the look rustic without looking cluttered.",
      "Style either option with almost nothing, a few neutral spheres, or one sculptural object. Sometimes, like the crate stack shown here, the wood texture alone is enough to carry the whole section.",
    ],
    photo: photo("dough-bowls.jpg", "Stacked wooden crates filled with jars and tins arranged above cream kitchen cabinets with a trailing plant nearby", 640, 1024),
  },
  {
    n: "10",
    title: "Statement Lighting That Reaches Upward",
    paras: [
      "Sometimes the best decor above a cabinet run isn't decor at all. A statement pendant light or a tall fixture visually fills the vertical space on its own.",
      "The effect pulls the eye upward and makes standard-height cabinets read as considerably taller than they actually are.",
      "It solves more problems than people expect from a single fixture &mdash; filling dead space, adding style, and improving the actual lighting all at once.",
    ],
  },
  {
    n: "11",
    title: "Subtle Seasonal Touches, Not a Holiday Explosion",
    paras: [
      "Seasonal decor dates a kitchen fast once it goes overboard. The fix is leaning into texture and tone instead of themed signs and full displays.",
      "Dried branches in fall, light greenery in spring, and neutral stems in winter all keep the seasonal nod subtle rather than overwhelming.",
      "A tasteful holiday arrangement like the one shown here &mdash; garland, warm lights, a single festive sign &mdash; proves seasonal styling can still look put-together rather than like a decoration explosion. If a piece says something as specific as \"Pumpkin Spice,\" it doesn't belong up there.",
    ],
    photo: photo("seasonal-decor.jpg", "Christmas garland, pinecones, candles and a sign reading Today Is a Good Day arranged above white kitchen cabinets", 736, 552),
  },
  {
    n: "12",
    title: "Tall Stems and Structural Details",
    paras: [
      "Architectural touches feel genuinely timeless in a way trendier decor never quite manages. Tall dried stems, candlesticks, and a single statement piece like a round clock all add real structure to the space.",
      "These work especially well in classic or traditional kitchens, where a little formality above the cabinets matches the rest of the room.",
      "The height does real work here &mdash; tall stems in matching vases, like the ones shown here, draw the eye upward the same way a taller piece of furniture would.",
    ],
    photo: photo("architectural.jpg", "Tall dried pampas grass stems in vases, a round wall clock and black candlesticks arranged above white kitchen cabinets", 736, 982),
  },
  {
    n: "13",
    title: "Neutral Pitchers and Jugs for Soft Curves",
    paras: [
      "Pitchers bring genuine soft curves into a kitchen that's otherwise full of hard lines and straight edges.",
      "Stoneware pitchers in neutral glazes, with a little visible imperfection in the finish, work best &mdash; they feel collected rather than purchased as a matching set.",
      "Paired with a trailing plant, like the setup shown here, pitchers and bowls read as effortless and considerably more expensive than they actually were.",
    ],
    photo: photo("pitchers.jpg", "Trailing green plant and neutral ceramic pitchers and bowls arranged above cream kitchen cabinets", 683, 1024),
  },
  {
    n: "14",
    title: "Monochrome Groupings for a Designer Look",
    paras: [
      "Going monochrome is one of the most reliable ways to make above-cabinet decor read as genuinely high-end. Grouping similar tones together creates an immediate sense of calm.",
      "All-white ceramics, all-wood tones, or all-black accents each work on their own &mdash; the trick is picking one lane and staying in it rather than mixing several.",
      "A black-and-white palette like the one shown here, carried through pitchers, greenery, and even the window treatment below, shows exactly how far one consistent color story can stretch.",
    ],
    photo: photo("monochrome.jpg", "Black and white buffalo check styling above kitchen cabinets with white pitchers, greenery and a Joy sign", 683, 1024),
  },
  {
    n: "15",
    title: "Leaving the Space Empty, On Purpose",
    paras: [
      "Empty space counts as decor too, and it's genuinely one of the most underused options on this entire list.",
      "Not every cabinet run needs styling. Strategic emptiness actually makes the sections that are styled stand out more by comparison.",
      "A clean, open kitchen like the one shown here, with nothing at all above the cabinets, proves that restraint can look just as finished as a fully styled shelf. If the kitchen already feels busy, stepping back is often the right move.",
    ],
    photo: photo("empty-space.jpg", "Open white kitchen with bare cabinets and no decor above them, with woven pendant lights and a dining area nearby", 736, 882),
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
<p>Standing in a kitchen staring at that awkward empty space above the cabinets, wondering why it always looks either boring or painfully outdated, is a genuinely common moment. That space confuses more homeowners than almost any other kitchen styling detail, and it's rarely for lack of ideas &mdash; it's choosing ideas that don't age the kitchen overnight.</p>
<p>That space is not a dumping ground for whatever baskets happen to be around. Styled with intention, it makes a kitchen look taller, warmer, and genuinely more custom. Ignored or decorated wrong, it reads as builder-grade louder than almost anything else in the room.</p>
${photo("hero.jpg", "Above-cabinet decor styling with a woven basket, lantern and framed signs above white kitchen cabinets near a window", 736, 552)}

<h2>Why This Space Actually Matters</h2>
<p>Does anyone consciously notice the space above kitchen cabinets? Yes &mdash; everyone does, they just don't register it as a deliberate decision. The eye naturally travels upward in a kitchen, especially when upper cabinets stop short of the ceiling. Left empty, the kitchen looks unfinished. Left cluttered, it looks chaotic. Styled well, it quietly elevates the entire room the same way throw pillows finish off a living room.</p>
<p>The decor that dates this space fastest: tiny knickknacks that disappear from view, fake grapes and trailing ivy vines, matching word signs scattered everywhere, and dust-catching clutter with no real visual rhythm. Dated decor almost always comes from filling space instead of actually styling it &mdash; and those are two very different things.</p>
${photo("intro-matters-1.jpg", "Above-cabinet decor with a woven basket, greenery, framed signs and a lantern above cream kitchen cabinets", 736, 552)}

<h2>Choosing the Right Approach for Your Kitchen</h2>
<p>Three questions settle most of the decisions here. What's the kitchen's actual style &mdash; a modern kitchen calls for different above-cabinet decor than a farmhouse or transitional one, and staying consistent is what makes the space feel intentional. How high are the cabinets &mdash; short cabinets need taller decor, tall cabinets need more breathing room, and scale matters more here than almost anywhere else in the kitchen. And finally, contrast or continuity &mdash; contrast tends to work better in neutral kitchens, continuity in already-colorful ones, and mixing the two without a plan is what creates visual chaos.</p>
${photo("intro-choose.jpg", "Above-cabinet styling with mirrors, candlesticks and trailing plants above white kitchen cabinets around a kitchen island with a chandelier", 720, 960)}

<h2>15 Above-the-Cabinet Decor Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Above-the-cabinet decor doesn't have to feel awkward, outdated, or overwhelming. It should quietly support the kitchen, not steal the spotlight or collect dust like a forgotten attic shelf. Fewer, larger pieces and timeless materials beat a crowded shelf of small items every time.</p>
<p>If there's ever doubt about whether something belongs up there, ask one question: will this still look good in five years? Hesitate, and it's probably worth skipping. A well-styled kitchen always feels intentional, never overdecorated.</p>
`;

module.exports = { body };
