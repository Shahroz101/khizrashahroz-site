// Body content for "15 Beautiful Dining Table Centerpiece Ideas You Can
// Copy". Photos carried over from the source article, Pinterest pin
// links preserved. One source photo (Fall-table-centerpiece.jpg) was
// genuinely reused by the source itself — as the article's hero and
// again as idea 04's candle-cluster photo (accurately depicting a
// candle cluster centerpiece in both spots) — kept both occurrences.
// All 15 ideas had a photo in the source; all 15 kept. Condensed the
// source's 4-section intro into 2. Rewritten out of the source's
// casual, first-person "according to my experience" voice into the
// site's calmer, neutral tone.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "dining-table-centerpiece-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "dining-table-centerpiece-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Low Floral Arrangement in a Neutral Vase",
    paras: [
      "This idea never really goes out of style. A low floral arrangement adds softness to a table without blocking sightlines across it.",
      "A neutral vase lets the flowers themselves do the visual work, rather than competing with a patterned or brightly colored container.",
      "It suits both everyday meals and formal dinners equally well &mdash; no real drama involved, just consistent beauty.",
    ],
    photo: pinPhoto("low-floral.jpg", "Low floral arrangement in a neutral vase as a dining table centerpiece", 683, 1024, "https://www.pinterest.com/pin/2251868558672155/", "Low Floral Dining Table Centerpiece"),
  },
  {
    n: "02",
    title: "A Long Wooden Tray With Layered Decor",
    paras: [
      "A long tray offers real flexibility for anyone who likes to restyle their table often.",
      "Styled once with candles, small vases and a bit of greenery, the whole arrangement can be tweaked in minutes rather than rebuilt from scratch.",
      "The tray also keeps everything visually contained, which solves the common problem of centerpiece items looking scattered across the table.",
    ],
    photo: pinPhoto("wooden-tray.jpg", "Long wooden tray with layered decor as a dining table centerpiece", 683, 1024, "https://www.pinterest.com/pin/243264817368509282/", "Wooden Tray Dining Table Centerpiece"),
  },
  {
    n: "03",
    title: "Single Statement Vase With Branches",
    paras: [
      "This works especially well in a modern or minimalist dining room, where tall branches create real drama without introducing any clutter.",
      "One confident, striking piece consistently outperforms five smaller, less memorable ones.",
      "It's one of the lowest-effort ideas on this list in terms of actual assembly, while still making a genuine visual statement.",
    ],
    photo: photo("statement-vase.jpg", "Single statement vase with branches as a minimal dining table centerpiece", 683, 1024),
  },
  {
    n: "04",
    title: "Candle Cluster for Cozy Dining Vibes",
    paras: [
      "Candle centerpieces change the mood of a dining table almost instantly.",
      "Even an ordinary weeknight meal starts to feel a little more intentional once a cluster of lit candles is on the table.",
      "It's worth noticing how reliably restaurants lean on candlelight &mdash; there's a reason it shows up on nearly every table.",
    ],
    photo: pinPhoto("candle-cluster.jpg", "Candle cluster centerpiece with greenery for cozy dining", 736, 552, "https://www.pinterest.com/pin/418834834110299301/", "Candle Cluster Dining Table Centerpiece"),
  },
  {
    n: "05",
    title: "Bowl of Seasonal Fruit",
    paras: [
      "For something that feels genuinely lived-in rather than purely decorative, a bowl of seasonal fruit adds both color and function.",
      "It works year-round, simply by swapping whatever fruit is in season into the same bowl.",
      "It also happens to encourage healthier snacking, which is a small but genuine bonus beyond the visual appeal.",
    ],
    photo: pinPhoto("fruit-bowl.jpg", "Bowl of seasonal fruit as a practical dining table centerpiece", 683, 1024, "https://www.pinterest.com/pin/51158145761395154/", "Seasonal Fruit Bowl Centerpiece"),
  },
  {
    n: "06",
    title: "Greenery Runner Down the Center",
    paras: [
      "A runner of greenery down the center of the table brings freshness without tipping into anything too formal.",
      "Faux greenery works just as well as real, especially for anyone who'd rather skip the maintenance &mdash; from across the table, the difference is rarely noticeable.",
      "Keeping the runner low and loose, rather than tightly arranged, reads as more natural and less staged.",
    ],
    photo: pinPhoto("greenery-runner.jpg", "Greenery runner centerpiece down a dining table", 683, 1024, "https://www.pinterest.com/pin/5277724559211088/", "Greenery Runner Dining Table Centerpiece"),
  },
  {
    n: "07",
    title: "Sculptural Object as a Centerpiece",
    paras: [
      "Flowers aren't required for every table &mdash; sometimes a sculptural piece brings more edge and personality.",
      "A ceramic form, an abstract wood carving, or a metal sculpture all work well for anyone who wants the centerpiece to feel a little more unexpected.",
      "This option reads as confident the moment someone walks into the room, in a way a floral arrangement rarely manages on its own.",
    ],
    photo: pinPhoto("sculptural-object.jpg", "Sculptural object used as a modern dining table centerpiece", 683, 1024, "https://www.pinterest.com/pin/193654852720568678/", "Sculptural Dining Table Centerpiece"),
  },
  {
    n: "08",
    title: "Stacked Coffee Table Books With Decor",
    paras: [
      "Breaking the usual rules occasionally pays off &mdash; books on a dining table feel genuinely fresh when styled with intention.",
      "A small stack, topped with a candle or a small object, builds height and interest without requiring any floral arrangement at all.",
      "Keeping the stack minimal matters here; overdoing it undercuts the charm that makes this idea work in the first place.",
    ],
    photo: photo("stacked-books.jpg", "Stacked coffee table books with decor as a dining table centerpiece", 683, 1024),
  },
  {
    n: "09",
    title: "Rustic Dough Bowl With Fillers",
    paras: [
      "A dough bowl works well in almost any dining room, regardless of overall style.",
      "Filled with pinecones, dried florals, faux fruit or seasonal greenery, it builds a warm, layered look with very little actual effort.",
      "It's a strong choice for anyone drawn to cozy, textured decor over anything too sleek or minimal.",
    ],
    photo: photo("dough-bowl.jpg", "Rustic dough bowl filled with seasonal decor as a centerpiece", 683, 1024),
  },
  {
    n: "10",
    title: "Glass Cloche With Decorative Accent",
    paras: [
      "A cloche frames a single item beautifully, turning something small into a genuine focal point.",
      "Moss, a small floral arrangement, or a decorative object placed underneath the glass reads as considered and a little precious, in the best sense.",
      "It's a centerpiece that feels thoughtful without ever becoming loud or overdone.",
    ],
    photo: photo("glass-cloche.jpg", "Glass cloche with a decorative accent as a subtle dining table centerpiece", 683, 1024),
  },
  {
    n: "11",
    title: "Neutral Table Runner With Minimal Decor",
    paras: [
      "Sometimes the runner itself becomes the centerpiece, with very little else needed on top of it.",
      "A neutral linen or cotton runner laid down the center of the table does most of the visual work on its own.",
      "Adding just one small object in the middle, then stopping, is the real trick here &mdash; restraint matters more than it might seem.",
    ],
    photo: photo("minimal-runner.jpg", "Neutral table runner with minimal decor as a dining table centerpiece", 683, 1024),
  },
  {
    n: "12",
    title: "A Seasonal Centerpiece You Can Swap Easily",
    paras: [
      "Seasonal decor keeps a dining space feeling genuinely current throughout the year, rather than static.",
      "Pumpkins and foliage in fall, fresh blooms in spring, pinecones and candles in winter &mdash; the base styling stays largely the same, with just the seasonal elements rotating in and out.",
      "Using a tray as the base makes these seasonal swaps considerably easier, since the whole arrangement can be lifted and replaced at once.",
    ],
    photo: pinPhoto("seasonal-swap.jpg", "Seasonal centerpiece styled on a tray for easy swapping", 683, 1024, "https://www.pinterest.com/pin/40321359162301662/", "Seasonal Dining Table Centerpiece"),
  },
  {
    n: "13",
    title: "Mixed Metals for a Modern Look",
    paras: [
      "Mixing gold and black accents brings a genuinely modern feel to a centerpiece without losing any warmth.",
      "Candlesticks, small trays or vases in contrasting metal finishes build visual interest through material alone, without needing much else.",
      "This combination suits a contemporary dining room particularly well, where a sleeker overall aesthetic is already in play.",
    ],
    photo: photo("mixed-metals.jpg", "Mixed metal accents in a modern dining table centerpiece", 683, 1024),
  },
  {
    n: "14",
    title: "Vintage or Antique Centerpiece Piece",
    paras: [
      "A vintage bowl or container adds real soul to a dining table in a way new pieces rarely manage.",
      "Thrifted or inherited pieces, with a bit of visible age or patina, bring genuine character and a sense of history to the table.",
      "A single old piece tends to make an entire room feel more layered and collected, rather than freshly furnished.",
    ],
    photo: photo("vintage-piece.jpg", "Vintage or antique piece used as a dining table centerpiece", 683, 1024),
  },
  {
    n: "15",
    title: "Everyday Dining Table Centerpiece With Function",
    paras: [
      "The centerpieces that last the longest tend to be the ones that actually do something beyond looking nice.",
      "A salt and pepper set paired with a small vase, or a condiment tray that doubles as decor, keeps the table styled even during an ordinary weeknight dinner.",
      "Functional centerpieces hold up to daily use in a way purely decorative ones often don't, which makes them worth prioritizing for a table that gets used every day.",
    ],
    photo: photo("everyday-function.jpg", "Everyday functional dining table centerpiece combining style and use", 683, 1024),
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
<p>A dining table centerpiece does more than fill empty space in the middle of the table &mdash; it anchors the whole room and sets the tone before anyone even sits down. The right one works for both an everyday dinner and a more formal occasion, without needing to be swapped out every time.</p>
<p>None of the ideas below require a florist or a big budget. Most come down to one strong focal point, kept simple enough to stay out of the way of actual conversation across the table.</p>
${photo("hero.jpg", "Candle cluster centerpiece with greenery and mini pumpkins on a dining table", 736, 552)}

<h2>Why Centerpieces Matter More Than You'd Think</h2>
<p>A centerpiece does real work anchoring the whole dining space, pulling the table together the way a rug pulls together a living room. Function still matters here too &mdash; a centerpiece that's too tall or too wide gets in the way of actually passing dishes and seeing across the table.</p>

<h2>Choosing the Right Centerpiece</h2>
<p>Matching the shape of the centerpiece to the shape of the table makes a bigger difference than most people expect &mdash; a long, low arrangement suits a rectangular table, while a single rounder piece tends to work better on a square or round one. Scale matters just as much: a centerpiece that's too small gets lost, while one that's too large overwhelms the table entirely.</p>

<h2>15 Dining Table Centerpiece Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these fifteen ideas require a big investment to pull off. A low vase, a wooden tray, or even a simple bowl of fruit can anchor a dining table just as effectively as something elaborate.</p>
<p>The centerpieces that work best tend to be the ones that still leave room for actual dinner &mdash; style and function rarely have to compete for the same space on the table.</p>
`;

module.exports = { body };
