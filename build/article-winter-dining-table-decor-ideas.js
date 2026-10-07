// Body content for "16 Winter Dining Table Decor Ideas Worth Setting
// Out". Photos carried over from the source article. The hero photo
// (8-6.jpg) is the exact same file the source also used for the
// "Neutral Tablecloth" idea — downloaded twice and credited separately.
// "Natural Stone and Marble Accents" and "Subtle Winter Scent Elements"
// have no photo in the source; all other 14 ideas do. Condensed 3
// padded intro sections down to 1.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "winter-dining-table-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "winter-dining-table-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Classic Winter Greenery",
    paras: [
      "Greenery feels timeless in a way few other centerpiece choices manage. Evergreen branches say winter instantly without ever tipping into full holiday decor.",
      "Laying pine, cedar or eucalyptus down the center of the table, with candles tucked in among the branches, keeps the look natural and unfussy.",
      "Greenery has a way of softening everything around it &mdash; it's rarely the wrong call for a winter table.",
    ],
    photo: photo("greenery-centerpiece.jpg", "Winter greenery centerpiece with evergreen branches and tucked-in candles", 736, 981),
  },
  {
    n: "02",
    title: "Layered Table Runners",
    paras: [
      "Layering two runners instead of relying on one heavy piece adds real depth without overwhelming the table.",
      "A neutral base runner topped with something textured or darker builds that layered effect naturally.",
      "This works especially well on a long dining table, where it guides the eye down the length of the table without stealing space from the place settings themselves.",
    ],
    photo: pinPhoto("layered-runners.jpg", "Layered neutral and textured table runners on a winter dining table", 736, 920, "https://www.pinterest.com/pin/1900024837340253/", "Layered Winter Table Runners"),
  },
  {
    n: "03",
    title: "Candles at Different Heights",
    paras: [
      "If there's one winter table trick worth committing to, it's layering candle heights &mdash; tall tapers, short pillars, and small votives mixed together.",
      "The varied heights create real visual rhythm, and the glow bounces beautifully off glassware and silverware nearby.",
      "A candlelit table has a way of making everyone at it feel instantly calmer, which is most of the point of styling it this carefully in the first place.",
    ],
    photo: photo("candle-heights.jpg", "Candles at varying heights creating visual rhythm on a winter dining table", 683, 1024),
  },
  {
    n: "04",
    title: "Wooden Elements for Rustic Warmth",
    paras: [
      "Wood genuinely grounds a winter table. Wooden chargers, bowls or a center tray add instant warmth against everything else on the table.",
      "It balances out softer textiles especially well, which is part of why wood feels so right for the season specifically.",
      "This choice works particularly well in a modern home that leans a little too sleek on its own &mdash; wood pulls it back toward cozy.",
    ],
    photo: pinPhoto("wooden-elements.jpg", "Wooden chargers and bowls adding rustic warmth to a dining table", 574, 1024, "https://www.pinterest.com/pin/211174978893676/", "Wooden Winter Table Elements"),
  },
  {
    n: "05",
    title: "Winter Whites",
    paras: [
      "White doesn't have to feel cold on a winter table. Layered with real texture &mdash; linen napkins, ceramic plates, a soft runner &mdash; it reads as genuinely inviting.",
      "The trick is varying the finishes. Glossy, matte and textured whites together keep the table from looking flat or one-note.",
      "Done right, an all-white winter table feels crisp and considered rather than sparse.",
    ],
    photo: pinPhoto("winter-whites.jpg", "Winter white tablescape layered with linen and ceramic textures", 736, 981, "https://www.pinterest.com/pin/866731890797419795/", "Winter White Table Setting"),
  },
  {
    n: "06",
    title: "Natural Stone and Marble Accents",
    paras: [
      "Stone feels solid and genuinely winter-appropriate. A marble board used as a centerpiece or serving piece adds a quiet sense of luxury without being flashy.",
      "This works especially well alongside an already-neutral palette &mdash; stone adds real interest without adding clutter to the table.",
      "It's a strong option for anyone who wants their winter table to feel elevated without reaching for anything overtly seasonal.",
    ],
  },
  {
    n: "07",
    title: "Cozy Fabric Napkins",
    paras: [
      "Fabric napkins beat paper year-round, but especially in winter, where linen or cotton genuinely adds softness and intention to the table.",
      "Folded loosely or tied simply with twine, they read as considered rather than fussy.",
      "Fabric napkins have a way of slowing people down at the table &mdash; a small signal that the meal actually matters.",
    ],
    photo: pinPhoto("fabric-napkins.jpg", "Cozy linen napkins tied with twine on a winter table setting", 736, 981, "https://www.pinterest.com/pin/1688918605588639/", "Cozy Winter Fabric Napkins"),
  },
  {
    n: "08",
    title: "Minimal Place Settings With One Warm Detail",
    paras: [
      "Keeping place settings simple works especially well in winter &mdash; clean plates, minimal cutlery, and just one warm detail per setting.",
      "A sprig of greenery, a loosely folded napkin, or a simple handwritten name card all do the job well.",
      "Winter table decor tends to shine most when it feels thoughtful rather than crowded &mdash; restraint reads as more intentional than abundance here.",
    ],
    photo: pinPhoto("minimal-place-settings.jpg", "Minimal winter place setting with a single warm greenery detail", 736, 981, "https://www.pinterest.com/pin/11118330333707996/", "Minimal Winter Place Setting"),
  },
  {
    n: "09",
    title: "Seasonal Fruit as Decor",
    paras: [
      "Fruit genuinely belongs on a winter table. Pears, pomegranates and oranges add real color and texture without any extra effort.",
      "It's decor that doubles as something edible, which is hard to argue with from any angle.",
      "A bowl of seasonal fruit also fills a centerpiece role without the commitment of fresh flowers that won't last the season.",
    ],
    photo: pinPhoto("seasonal-fruit.jpg", "Seasonal fruit like pomegranates and oranges used as winter table decor", 338, 492, "https://www.pinterest.com/pin/1900024839556581/", "Seasonal Fruit Table Decor"),
  },
  {
    n: "10",
    title: "A Neutral Tablecloth With Textured Layers",
    paras: [
      "A neutral tablecloth softens a hard table surface, and building texture on top of it through a runner, placemats or napkins adds real depth gradually.",
      "The layering approach works the same way dressing for cold weather does &mdash; one piece at a time, building toward something complete.",
      "It's a reliable foundation that almost any other idea on this list can be layered over.",
    ],
    photo: pinPhoto("neutral-tablecloth.jpg", "Neutral tablecloth layered with textured runners and napkins", 736, 981, "https://www.pinterest.com/pin/1477812372285799/", "Neutral Winter Tablecloth"),
  },
  {
    n: "11",
    title: "Vintage or Handmade Pieces",
    paras: [
      "Mixing in old pieces gives a winter table real soul. A vintage bowl, a handmade ceramic piece, or an inherited serving dish all add genuine character.",
      "These pieces tend to spark conversation at the table almost every time they're used.",
      "There's something satisfying about being asked about a piece's story and actually having one to tell.",
    ],
    photo: photo("vintage-pieces.jpg", "Vintage and handmade serving pieces styled on a winter dining table", 736, 920),
  },
  {
    n: "12",
    title: "A Simple Winter-Themed Center Bowl",
    paras: [
      "Instead of a long centerpiece running the length of the table, a single large bowl can carry the whole look on its own.",
      "Filled with pinecones, a few ornaments, or tucked greenery, it reads as intentional without taking up much space.",
      "It's also genuinely practical &mdash; easy to lift and move out of the way the moment food actually arrives at the table.",
    ],
    photo: photo("center-bowls.jpg", "Simple winter-themed center bowl filled with pinecones and greenery", 683, 1024),
  },
  {
    n: "13",
    title: "Soft Neutral Placemats",
    paras: [
      "Placemats add real structure to a table without adding any bulk. A woven or fabric placemat in a neutral tone frames each setting while keeping things cozy.",
      "They work especially well as a lighter alternative to a full tablecloth.",
      "Skipping the tablecloth entirely and relying on placemats alone keeps a winter table feeling a little less formal, which isn't always a bad thing.",
    ],
    photo: photo("neutral-placemats.jpg", "Soft neutral woven placemats framing a winter table setting", 703, 1021),
  },
  {
    n: "14",
    title: "Subtle Winter Scent",
    paras: [
      "Decor isn't only visual &mdash; scent matters just as much to how a winter table actually feels to sit at.",
      "A subtle winter scent, through a candle or a natural element like citrus or pine, adds another sensory layer without overwhelming the room.",
      "The key word is subtle. An overpowering fragrance competing with the actual meal is never the goal.",
    ],
  },
  {
    n: "15",
    title: "Dark Accents for Contrast",
    paras: [
      "A few dark accents anchor an otherwise light winter table in a way that reads as intentional rather than accidental.",
      "Black or charcoal candlesticks, napkin rings, or chargers ground the lighter elements around them beautifully.",
      "Light and dark together consistently feel more considered than an all-light or all-dark table on its own.",
    ],
    photo: photo("dark-accents.jpg", "Dark charcoal candlesticks and chargers contrasting a light winter table", 736, 736),
  },
  {
    n: "16",
    title: "Everyday Tableware, Styled for Winter",
    paras: [
      "Special dishes aren't actually required. Styling everyday plates differently for the season gets most of the same effect.",
      "Stacking plates, adding a charger underneath, and pairing them with darker linens shifts the whole feel without a single new purchase.",
      "Styling what's already owned tends to feel more authentic than buying something new just for one season anyway.",
    ],
    photo: photo("everyday-tableware.jpg", "Everyday tableware styled with chargers and dark linens for winter", 683, 1024),
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
<p>Winter changes how people gather around a table &mdash; longer meals, more candlelight, a meal that feels like more of an occasion than a Tuesday dinner usually is. The table decor sets that mood before the first plate ever arrives.</p>
<p>What keeps a winter table from tipping into cluttered comes down to balance over quantity, with real texture doing most of the heavy lifting and lighting pulling the whole thing together. A tight, warm color palette &mdash; think warm neutrals, moody winter tones, or metallics used sparingly &mdash; almost never fails for the season.</p>
${photo("hero.jpg", "Elegant winter dining table decor with layered textures and candlelight", 736, 981)}

<h2>What Keeps a Winter Table Cozy Instead of Cluttered</h2>
<p>Balance matters more than quantity &mdash; a table loaded with every winter element at once reads as busy rather than festive. Texture does most of the real work here, and lighting changes the entire mood of a meal before anyone's even sat down.</p>
${pinPhoto("intro-mood.jpg", "Winter dining table set with warm mood lighting and layered decor", 683, 1024, "https://www.pinterest.com/pin/2040762329029871/", "Winter Dining Table Mood")}

<h2>16 Winter Dining Table Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Keeping It Practical</h2>
<p>Leaving genuine space for food matters more than it sounds like it should &mdash; a gorgeous centerpiece that blocks half the table isn't actually doing its job. Easy cleanup deserves consideration too; anything that needs to be fully disassembled before dessert gets served isn't worth the trouble twice a week through the season.</p>

<h2>Final Thoughts</h2>
<p>None of these sixteen ideas require buying an entirely new set of dishes or decor. Styling what's already on hand, layered thoughtfully, gets most winter tables exactly where they need to be.</p>
<p>Pick two or three that genuinely fit how the table actually gets used, and build outward from there. A considered table, even a simple one, reads as more intentional than one trying to do everything at once.</p>
`;

module.exports = { body };
