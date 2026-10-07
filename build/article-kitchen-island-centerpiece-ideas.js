// Body content for "14 Kitchen Island Centerpiece Ideas That Actually
// Get Used". Photos carried over from the source article. The hero
// photo (a wooden dough bowl centerpiece) is the exact same file the
// source also used for the Dough Bowl idea — downloaded a second time
// and credited there. All 14 ideas have a photo in the source; none
// dropped. Condensed the source's padded "why it matters / how to
// choose / FAQ" intro section (4 sub-photos, none tied to a specific
// idea) down to one short intro paragraph with a single photo.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "kitchen-island-centerpiece-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "kitchen-island-centerpiece-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "A Wooden Dough Bowl for Cozy Texture",
    paras: [
      "Dough bowls still work, whatever anyone says otherwise, and they earn their keep constantly in warm, lived-in kitchens.",
      "The shape does most of the work &mdash; long, shallow, and naturally textured in a way that softens an otherwise hard-surfaced island.",
      "Fill it with beads, greenery, or leave it completely empty. An empty dough bowl reads as just as intentional as a styled one, which is part of why it's such a reliable choice.",
    ],
    photo: pinPhoto("dough-bowl.jpg", "Wooden dough bowl centerpiece styled on a kitchen island", 736, 552, "https://www.pinterest.com/pin/5559199537684358/", "Wooden Dough Bowl Centerpiece"),
  },
  {
    n: "02",
    title: "An Oversized Ceramic Bowl With Seasonal Flair",
    paras: [
      "A large ceramic bowl is one of the most reliable centerpieces out there &mdash; classic, grounded, and genuinely versatile across styles.",
      "Fill it with seasonal fruit, ornaments, pinecones, or whatever fits the time of year. The bowl itself stays constant while the contents do all the seasonal work.",
      "It anchors the island without overpowering it, and swapping what's inside takes minutes whenever the mood changes. Low effort, consistently good payoff.",
    ],
    photo: pinPhoto("ceramic-bowl.jpg", "Oversized ceramic bowl centerpiece filled with seasonal decor on a kitchen island", 360, 640, "https://www.pinterest.com/pin/231091024625147339/", "Oversized Ceramic Bowl Centerpiece"),
  },
  {
    n: "03",
    title: "A Statement Tray With Layered Decor",
    paras: [
      "A tray gives loose decor the structure it's otherwise missing. Objects placed directly on an island can look random; the same objects on a tray read as intentional.",
      "Stick to odd numbers when grouping items on it &mdash; three or five pieces consistently look more balanced than an even number does.",
      "The tray also makes the whole arrangement easier to move out of the way during actual prep work, which matters more than it sounds like it should.",
    ],
    photo: pinPhoto("statement-tray.jpg", "Statement tray styled with layered decor objects on a kitchen island", 683, 1024, "https://www.pinterest.com/pin/3025924746479517/", "Statement Tray Island Centerpiece"),
  },
  {
    n: "04",
    title: "Fresh Greenery to Bring the Island to Life",
    paras: [
      "Few things do as much for a kitchen island as greenery. It's the fastest way to make a hard, flat surface feel alive instead of static.",
      "A trailing pothos, a small potted herb, or a single stem in a narrow vase all work, and none of them require much upkeep to look good.",
      "Greenery softens every hard surface around it instantly, which is reason enough for it to belong on almost any version of this list.",
    ],
    photo: pinPhoto("fresh-greenery.jpg", "Fresh greenery styled as a kitchen island centerpiece", 683, 1024, "https://www.pinterest.com/pin/34199278420000081/", "Fresh Greenery Kitchen Island Centerpiece"),
  },
  {
    n: "05",
    title: "A Sculptural Vase That Acts Like Art",
    paras: [
      "A sculptural vase doesn't need flowers in it to earn its spot &mdash; the shape alone can carry the whole centerpiece.",
      "Look for organic curves, an unusual silhouette, or a matte finish that reads as more object than vessel.",
      "One bold vase beats a cluttered arrangement every time. Let it sit on its own and give it room to actually breathe.",
    ],
    photo: pinPhoto("sculptural-vase.jpg", "Sculptural vase styled alone as a kitchen island centerpiece", 576, 1024, "https://www.pinterest.com/pin/844493675071211/", "Sculptural Vase Island Centerpiece"),
  },
  {
    n: "06",
    title: "A Tall Floral Arrangement for Dramatic Impact",
    paras: [
      "For an island in a large, open kitchen, going tall makes real sense &mdash; especially in a home with high ceilings that can otherwise swallow smaller decor.",
      "Dried pampas grass, tall branches, or a single dramatic stem all read as intentional rather than overdone, as long as the arrangement stays narrow.",
      "Keep the width tight so it doesn't block sightlines across the island. Nobody wants to carry on a conversation around a wall of flowers.",
    ],
    photo: pinPhoto("tall-floral.jpg", "Tall dramatic floral arrangement styled on a kitchen island", 736, 981, "https://www.pinterest.com/pin/34199278419976035/", "Tall Floral Island Centerpiece"),
  },
  {
    n: "07",
    title: "A Minimalist Candle Trio for Subtle Elegance",
    paras: [
      "Candles bring mood to an island without trying too hard, which is exactly why a trio of them in varying heights works so well.",
      "Keep the finishes consistent &mdash; all matte white, all black, all a single neutral tone &mdash; so the trio reads as one considered choice rather than three random candles.",
      "It fits modern kitchens especially well, adding warmth and intention without ever competing for attention.",
    ],
    photo: pinPhoto("candle-trio.jpg", "Minimalist trio of candles in varying heights styled as a kitchen island centerpiece", 736, 1104, "https://www.pinterest.com/pin/487655465919910488/", "Minimalist Candle Trio Centerpiece"),
  },
  {
    n: "08",
    title: "A Functional Fruit Display That Looks Styled",
    paras: [
      "Decor that pulls double duty is always worth prioritizing, and a well-arranged fruit display does exactly that.",
      "Group by color and type rather than mixing everything together &mdash; bananas next to apples next to oranges reads as messy no matter how fresh the fruit is.",
      "Keeping it curated rather than piled high is what separates a styled fruit bowl from a kitchen catch-all.",
    ],
    photo: pinPhoto("fruit-display.jpg", "Functional fruit display styled and grouped by color on a kitchen island", 720, 960, "https://www.pinterest.com/pin/2744449769431261/", "Styled Fruit Display Centerpiece"),
  },
  {
    n: "09",
    title: "Vintage Cutting Boards With Character",
    paras: [
      "Leaning a few cutting boards against the backsplash or propping them upright adds height and real character without cluttering the usable island surface.",
      "Mix sizes and finishes &mdash; a worn wooden board next to a smoother one adds visual interest that a matching set never quite manages.",
      "They whisper style rather than shout it, which is exactly the kind of quiet detail that tends to age well.",
    ],
    photo: pinPhoto("cutting-boards.jpg", "Vintage wooden cutting boards leaned upright as kitchen island decor", 736, 923, "https://www.pinterest.com/pin/776026579554987587/", "Vintage Cutting Boards Centerpiece"),
  },
  {
    n: "10",
    title: "A Sculptural Object for Modern Kitchens",
    paras: [
      "Modern kitchens thrive on bold simplicity, and a single sculptural object fits that approach better than almost anything else on this list.",
      "Look for abstract shapes, matte finishes, and neutral tones that complement a sleek, polished kitchen rather than fighting against it.",
      "It adds genuine interest without softening the space too much, which is exactly the balance a modern kitchen usually needs.",
    ],
    photo: pinPhoto("sculptural-object.jpg", "Sculptural decorative object styled on a kitchen island in a modern kitchen", 360, 640, "https://www.pinterest.com/pin/1112248439231614474/", "Sculptural Object Island Centerpiece"),
  },
  {
    n: "11",
    title: "Clustered Canisters That Look Intentional",
    paras: [
      "Canisters don't have to live inside a cabinet. Grouped together on the island, they double as decor while staying completely practical.",
      "A matching set in varying sizes, labeled simply, reads as styled rather than just stored. Add a small plant or sprig of greenery alongside them for contrast.",
      "The result feels practical and polished at the same time, which is a combination that's harder to pull off than it looks.",
    ],
    photo: pinPhoto("canisters.jpg", "Clustered white ceramic canisters labeled Coffee and Sugar on a kitchen island tray with greenery", 570, 391, "https://www.pinterest.com/pin/619174648785926105/", "Clustered Canisters Island Centerpiece"),
  },
  {
    n: "12",
    title: "Seasonal Decor That Rotates Effortlessly",
    paras: [
      "A centerpiece that evolves with the seasons keeps an island feeling fresh without requiring a full redesign every few months.",
      "Dried wheat and pumpkins in fall, greenery and candles in winter, fresh blooms in spring &mdash; the base styling stays the same while the details rotate.",
      "Rotating decor is also what keeps a kitchen from ever starting to feel stale, even when the underlying layout never changes.",
    ],
    photo: pinPhoto("seasonal-decor.jpg", "Seasonal fall decor styled as a rotating kitchen island centerpiece", 683, 1024, "https://www.pinterest.com/pin/313281717851004454/", "Seasonal Island Centerpiece"),
  },
  {
    n: "13",
    title: "A Statement Bowl With Decorative Objects",
    paras: [
      "For a larger island, filling a bowl with curated objects instead of food shifts it from functional to genuinely decorative.",
      "Ornaments, small sculptural pieces, or a cluster of neutral spheres all work, as long as the color palette stays tight.",
      "Mixing too many colors or textures into one bowl kills the elegance fast &mdash; keep it restrained and it reads as considered instead of cluttered.",
    ],
    photo: pinPhoto("statement-bowl.jpg", "Statement bowl filled with curated decorative objects on a kitchen island", 576, 1024, "https://www.pinterest.com/pin/548031848427124658/", "Statement Bowl Island Centerpiece"),
  },
  {
    n: "14",
    title: "Mixed Materials for a Designer Look",
    paras: [
      "This is the approach that reads as the most high-end, and it's simpler to pull off than it looks &mdash; just mix materials with intention instead of sticking to one.",
      "Pair a wood dough bowl with a glass vase, or a ceramic bowl with a metal tray and a stone object. The contrast between textures is what adds the depth.",
      "Done right, it instantly elevates a builder-grade kitchen into something that reads as considerably more designed.",
    ],
    photo: pinPhoto("mixed-materials.jpg", "Kitchen island centerpiece mixing wood, ceramic and metal materials for a designer look", 736, 879, "https://www.pinterest.com/pin/8866530511806464/", "Mixed Materials Island Centerpiece"),
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
<p>A kitchen island that's clean and functional but still feels like something's missing usually just needs one thing: a centerpiece that earns its spot instead of getting shoved aside every time someone starts cooking.</p>
<p>The island already anchors the room on its own. A thoughtful centerpiece on top of that sets the mood, adds real personality, and keeps the space from ever feeling unfinished &mdash; without eating into the prep space that makes the island useful in the first place.</p>
${photo("hero.jpg", "Wooden dough bowl centerpiece styled on a kitchen island", 736, 552)}

<h2>What Actually Makes a Centerpiece Work</h2>
<p>Size and scale matter more than style preference here &mdash; a large island can handle something bold, while a smaller one needs real restraint. Beyond that, daily use settles most of the rest: anything that blocks sightlines or eats into prep space gets abandoned within a week, no matter how good it looks in a photo. One strong, considered piece will always beat five small random objects scattered across the surface.</p>
${pinPhoto("intro-moment.jpg", "Styled kitchen island centerpiece that balances beauty with everyday function", 564, 1001, "https://www.pinterest.com/pin/492649953423854/", "Styled Kitchen Island Moment")}

<h2>14 Kitchen Island Centerpiece Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A kitchen island deserves better than being ignored, and the right centerpiece turns it into a genuine design moment instead of a missed opportunity.</p>
<p>The best ones balance beauty, function and a little personality &mdash; nothing forced, nothing that has to move every time someone starts cooking. Choose something worth looking at, keep it simple, and swap it out whenever the mood actually calls for it.</p>
`;

module.exports = { body };
