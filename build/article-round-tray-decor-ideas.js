// Body content for "18 Round Tray Decor Ideas for Every Room". Photos
// carried over from the source article, Pinterest pin links preserved.
// Source had an unusually padded intro (5 sub-sections, 11 photos before
// the numbered ideas even start) — condensed to 2 short sections per the
// established practice of trimming padded intros; all 15 of the source's
// idea-level photos are kept (3 ideas — Bar Cart, Shelf Styling, Home
// Office Desk — had no photo in the source, a genuine gap).

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "round-tray-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "round-tray-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Entryway Round Tray That Actually Helps",
    paras: [
      "Entryways get messy fast, and a round tray placed near the door is one of the simplest fixes for the daily scramble to find keys.",
      "Mixing style with function matters most here &mdash; a small dish for keys, a stack of mail, maybe a candle, all fitting comfortably within the tray's edge.",
      "It keeps the small essentials contained instead of scattered across a console, and it sets a welcoming tone the moment someone walks in the door.",
    ],
    photo: pinPhoto("entryway.jpg", "Round tray styled on an entryway table with keys, mail and a small dish", 720, 874, "https://www.pinterest.com/pin/1115415032711247264/", "Entryway Round Tray Decor"),
  },
  {
    n: "02",
    title: "Bathroom Vanity Round Tray",
    paras: [
      "A bathroom feels instantly more elevated with the right tray on the vanity, even in a small powder room or guest bath.",
      "Everyday items &mdash; hand soap, a small candle, lotion, a tray of folded hand towels &mdash; still look intentional once they're grouped inside a round tray rather than scattered across the counter.",
      "It keeps the vanity organized without feeling precious, and it's the easiest way to make a bathroom feel like it belongs in a boutique hotel rather than a rushed morning routine.",
    ],
    photo: pinPhoto("bathroom-vanity.jpg", "Round tray on a bathroom vanity with soap, lotion and a small candle", 474, 1024, "https://www.pinterest.com/pin/4714774603291008/", "Bathroom Vanity Round Tray Decor"),
  },
  {
    n: "03",
    title: "Coffee Table Centerpiece",
    paras: [
      "The coffee table is the classic home for a round tray, and it earns that reputation honestly &mdash; it organizes what would otherwise be clutter without killing the room's vibe.",
      "A candle, a stack of books, something with a bit of texture like a sculptural object or small vase of greenery, grouped together rather than spread loose across the table, is the whole idea.",
      "The tray pulls everything into one visual moment and keeps the rest of the table surface usable for an actual drink or a plate, which loose decor rarely allows for.",
    ],
    photo: pinPhoto("coffee-table.jpg", "Round tray styled as a coffee table centerpiece with a vase, candle and books", 736, 842, "https://www.pinterest.com/pin/102034747804385361/", "Coffee Table Round Tray Decor"),
  },
  {
    n: "04",
    title: "Seasonal Round Tray Decor",
    paras: [
      "This is arguably where a round tray earns its keep the most &mdash; swapping what's on it is a fast, affordable way to refresh a room for a new season.",
      "Keeping the tray itself neutral and rotating only the decor on top of it &mdash; pumpkins and foliage in fall, greenery and candles in winter, fresh blooms in spring &mdash; means one tray can carry a room through the whole year.",
      "It's one of the lowest-effort ways to make a space feel seasonally updated without redoing the room's actual styling each time.",
    ],
    photo: pinPhoto("seasonal.jpg", "Round tray styled with seasonal holiday decor on a kitchen counter", 683, 1024, "https://www.pinterest.com/pin/1084030572871971073/", "Seasonal Round Tray Decor"),
  },
  {
    n: "05",
    title: "Minimal Round Tray for Small Spaces",
    paras: [
      "Round trays genuinely shine in tight spaces, since the circular shape takes up far less visual room than a rectangular one, even at the same footprint.",
      "Keeping it to two or three items at most, and letting the tray itself do most of the visual work, is what keeps a small apartment or compact room from feeling overdecorated.",
      "A single candle, a small plant, and one object with a bit of shape is usually plenty &mdash; proof that a small space can still look genuinely styled without being crowded.",
    ],
    photo: pinPhoto("minimal-small-space.jpg", "Minimalist round tray styled with a candle and small greenery for a compact space", 683, 1024, "https://www.pinterest.com/pin/126663808268643832/", "Minimal Round Tray for Small Spaces"),
  },
  {
    n: "06",
    title: "Console Table Round Tray",
    paras: [
      "A console table needs some kind of structure or it starts to look forgotten, and a round tray anchors that styling especially well in a long hallway or behind a sofa.",
      "Placing the tray slightly off-center, then layering the rest of the console's decor around it, keeps the whole arrangement from feeling too rigid or symmetrical.",
      "The round shape also breaks up all the straight lines a console table usually has, which adds a bit of visual flow a tray-free console tends to be missing.",
    ],
    photo: pinPhoto("console-table.jpg", "Round tray anchoring decor on a console table in a hallway", 735, 802, "https://www.pinterest.com/pin/4591138425351337216/", "Console Table Round Tray Decor"),
  },
  {
    n: "07",
    title: "Outdoor Table Round Tray",
    paras: [
      "Round trays work outside just as well as they do indoors, and they turn a patio or balcony table from forgotten into genuinely styled.",
      "Sticking to weather-resistant items &mdash; a lantern, a faux succulent, a stone or ceramic object that won't warp in the rain &mdash; keeps the display from needing constant upkeep.",
      "The tray also keeps everything contained even on a breezy day, which loose tabletop decor outdoors almost never manages on its own.",
    ],
    photo: pinPhoto("outdoor-table.jpg", "Round tray styled with weather-resistant decor on an outdoor patio table", 736, 981, "https://www.pinterest.com/pin/70437490628805/", "Outdoor Table Round Tray Decor"),
  },
  {
    n: "08",
    title: "Ottoman Round Tray That Feels Intentional",
    paras: [
      "An ottoman sits right at the edge between decor and function, and a sturdy round tray is what makes it work as both at once.",
      "A stack of books, a candle and something textured &mdash; dried flowers, a small sculptural object &mdash; fills the tray without making the ottoman feel overloaded.",
      "The ottoman still functions as a footrest or extra seat when needed, but the tray keeps it from looking bare the rest of the time &mdash; a genuinely practical compromise.",
    ],
    photo: pinPhoto("ottoman.jpg", "Round woven tray with books, a candle and dried flowers styled on an ottoman", 735, 900, "https://www.pinterest.com/pin/466615211413233343/", "Ottoman Round Tray Decor"),
  },
  {
    n: "09",
    title: "Kitchen Counter Round Tray",
    paras: [
      "Kitchen counters deserve better than random clutter, and a round tray creates a clear visual zone &mdash; especially useful in an open layout where everything tends to blend together.",
      "A small vase, a candle, maybe a stack of cookbooks or a cutting board leaned upright, grouped onto one tray, keeps the counter from feeling like a catch-all.",
      "It stays neat without feeling sterile, and a kitchen styled this way reads warmer than one with everything just set directly on the counter.",
    ],
    photo: pinPhoto("kitchen-counter.jpg", "Round tray styled with a vase and candle on a kitchen counter", 736, 920, "https://www.pinterest.com/pin/791437334500626006/", "Kitchen Counter Round Tray Decor"),
  },
  {
    n: "10",
    title: "Bathroom Counter Corner Round Tray",
    paras: [
      "Corners get ignored constantly, especially in a bathroom, and a round tray is a simple trick for turning a dead corner into a styled moment.",
      "Keeping the tray fairly light &mdash; a small soap dispenser, a rolled hand towel, one plant &mdash; avoids overloading what's usually a tight amount of counter space.",
      "The tray adds a bit of polish without actually taking up much room, which keeps the whole space feeling clean, calm and considered rather than cluttered.",
    ],
    photo: pinPhoto("bathroom-corner.jpg", "Round tray styling a corner of a bathroom counter with soap and a small plant", 736, 916, "https://www.pinterest.com/pin/36380709480727430/", "Bathroom Counter Corner Round Tray Decor"),
  },
  {
    n: "11",
    title: "Bedroom Nightstand Round Tray",
    paras: [
      "Nightstands clutter up fast, and a round tray helps control that mess without making the space feel sterile or overly staged.",
      "Keeping it soft and minimal &mdash; a small lamp, a candle, a book, maybe a tiny dish for rings &mdash; is really all a nightstand tray needs.",
      "The round shape softens the edges of what's usually a boxy nightstand, and it keeps the surface from feeling crowded during a half-asleep morning routine.",
    ],
    photo: pinPhoto("bedroom-nightstand.jpg", "Round tray styled on a bedroom nightstand with a candle and small accessories", 736, 981, "https://www.pinterest.com/pin/10062799161730089/", "Bedroom Nightstand Round Tray Decor"),
  },
  {
    n: "12",
    title: "Dining Table Round Tray for Everyday Style",
    paras: [
      "A dining table doesn't need a full formal tablescape to look pulled together on a random weeknight.",
      "A round tray with a low-profile arrangement &mdash; a short vase, a candle, a small plant &mdash; works well for everyday use, since anything too tall gets in the way when plates start getting passed around.",
      "The tray anchors the table without demanding attention, and it keeps the table looking styled even on nights when it isn't formally set.",
    ],
    photo: pinPhoto("dining-table.jpg", "Low-profile round tray centerpiece styled on an everyday dining table", 736, 981, "https://www.pinterest.com/pin/2744449769182459/", "Dining Table Round Tray Decor"),
  },
  {
    n: "13",
    title: "Vanity Table Round Tray",
    paras: [
      "A vanity table clutters up quickly once skincare, makeup and jewelry all start competing for the same surface.",
      "Grouping daily essentials onto one round tray keeps the chaos contained while still looking pretty &mdash; a perfume bottle, a small dish for rings, a brush or two is usually enough.",
      "Everything feels more intentional once it's gathered rather than scattered, and getting ready tends to feel more enjoyable in a space that actually looks put together.",
    ],
    photo: pinPhoto("vanity-table.jpg", "Round marble tray organizing perfume and jewelry on a vanity table", 736, 981, "https://www.pinterest.com/pin/193091902770020810/", "Vanity Table Round Tray Decor"),
  },
  {
    n: "14",
    title: "Layered Round Tray for Statement Style",
    paras: [
      "For anyone drawn to bolder decor, a round tray can go genuinely dramatic once it's layered with intention.",
      "Combining a taller sculptural piece, a stack of oversized books, and something with real texture &mdash; a dried arrangement, a patterned object &mdash; builds real visual weight.",
      "Balance still matters even in a bold layout, so the tray holds the drama together instead of letting it feel random or overdone.",
    ],
    photo: pinPhoto("layered-statement.jpg", "Dramatically layered round tray decor with sculptural objects and books", 736, 736, "https://www.pinterest.com/pin/2814818511813744/", "Layered Round Tray Decor"),
  },
  {
    n: "15",
    title: "Neutral Round Tray That Never Gets Old",
    paras: [
      "When in doubt, a soft neutral palette on a round tray is close to a guaranteed win.",
      "Cream, beige, warm wood and a touch of brass work in almost any room and almost any season, which makes a neutral tray one of the easiest styling decisions to make and forget about.",
      "It adapts to nearly anything placed nearby, and it rarely feels dated the way a more trend-driven color palette eventually does.",
    ],
    photo: pinPhoto("neutral.jpg", "Soft neutral round tray decor with cream and warm wood tones", 683, 1024, "https://www.pinterest.com/pin/175358979221488396/", "Neutral Round Tray Decor"),
  },
  {
    n: "16",
    title: "Bar Cart Round Tray",
    paras: [
      "Bar carts turn chaotic fast once bottles, glasses and tools start competing for space, and a round tray creates order without draining the fun out of it.",
      "Treating the tray as its own small moment within the cart &mdash; grouping a decanter, a few glasses and a small garnish dish together &mdash; keeps everything from looking scattered.",
      "It makes the whole cart read as curated rather than cluttered, which is the difference between a bar cart that looks intentional and one that just looks messy.",
    ],
  },
  {
    n: "17",
    title: "Shelf Styling With a Round Tray",
    paras: [
      "Open shelving needs some kind of grounding element or it starts to feel floaty, and a round tray gives a shelf real structure and depth.",
      "Placing the tray toward the back of the shelf, then layering smaller items forward in front of it, lets the tray act as a visual anchor for everything else nearby.",
      "The round shape also breaks up the straight lines a shelf usually has, pulling the whole arrangement together in a way flat, ungrounded shelf styling rarely manages.",
    ],
  },
  {
    n: "18",
    title: "Home Office Desk Round Tray",
    paras: [
      "A desk needs clear boundaries, and a round tray is a simple way to separate actual work tools from the small personal items that tend to pile up nearby.",
      "Keeping the desk tray minimal &mdash; a small plant, a pen holder, maybe a candle for after-hours &mdash; adds a bit of warmth without becoming its own distraction.",
      "It's a small addition, but it makes a noticeable difference in how calm (or cluttered) a desk feels during an actual workday.",
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
<p>A round tray does more for a room than its size suggests. It gathers loose objects &mdash; a candle, a stack of books, a small vase &mdash; into one deliberate moment, and the circular shape softens whatever hard edges sit nearby, whether that's a square coffee table or a boxy console.</p>
<p>It also travels well. The same tray that organizes a coffee table can just as easily anchor a bathroom vanity, a nightstand, or an outdoor side table, which makes it one of the more flexible styling tools in a home.</p>
${photo("hero.jpg", "Round wood tray styled with a vase, candlesticks and a candle on a coffee table", 1312, 736)}

<h2>Choosing and Styling a Round Tray</h2>
<p>Material matters more than most people expect. A woven or natural-fiber tray leans relaxed and textural, while a lacquered wood or marble tray reads more polished and formal &mdash; picking one that matches the room's existing materials keeps it from looking like an afterthought.</p>
${pinPhoto("intro-choose.jpg", "Braided round tray with natural texture styled with a vase and greenery", 600, 800, "https://www.pinterest.com/pin/63050463531446284/", "Choosing a Round Tray")}
<p>Once the tray itself is chosen, the styling part is simple: pick a focal point first &mdash; usually something with height, like a candlestick or a small vase &mdash; then fill in around it with two or three supporting pieces instead of a tray's worth of knickknacks. If a setup still feels off once it's styled, that instinct is usually right, and it's worth pulling one piece back out.</p>
${pinPhoto("intro-style.jpg", "Farmhouse-style round tray with a gold mirror styled on a coffee table", 474, 1024, "https://www.pinterest.com/pin/140806228723732/", "Styling a Round Tray")}

<h2>18 Round Tray Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A round tray is one of the lowest-effort, highest-impact styling tools a home can have &mdash; it works on nearly every surface, in nearly every room, and it adapts the moment the decor on top of it changes.</p>
<p>Starting with one strong focal point, keeping the rest of the items to a small, intentional group, and resisting the urge to overfill it is really the entire formula, no matter which room the tray ends up in.</p>
`;

module.exports = { body };
