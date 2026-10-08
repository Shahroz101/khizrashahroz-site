// Body content for "20 Winter Craft Ideas That Actually Feel Worth
// Making". Photos carried over from the source article, Pinterest pin
// links preserved. One source photo (9-5.jpg) was genuinely reused by
// the source itself across two spots — as the article's hero/thumbnail
// and again as idea 18's shadow-box photo (it accurately depicts a
// winter shadow box in both places) — kept both occurrences per the
// standing rule to reuse every source photo exactly as the source did.
// Source had a padded 4-section intro; condensed to 2 sections. Source
// paragraphs were unusually short (first-person, "According to my
// experience" style); rewrote into fuller paragraphs matching the
// site's typical idea depth.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "winter-craft-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "winter-craft-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Chunky Yarn Winter Wreath",
    paras: [
      "A chunky yarn wreath reads as considerably more expensive than it actually costs to put together.",
      "Wrapping thick, textured yarn around a simple wire or foam base builds real volume fast, and it instantly warms up an entryway the moment it goes up.",
      "Adding a few pinecones or dried orange slices tucked into the yarn gives it an extra touch of winter flair without much additional effort.",
    ],
    photo: pinPhoto("yarn-wreath.jpg", "Chunky yarn winter wreath styled with a winter theme", 736, 981, "https://www.pinterest.com/pin/33073378510634966/", "Chunky Yarn Winter Wreath"),
  },
  {
    n: "02",
    title: "Mason Jar Winter Lanterns",
    paras: [
      "Mason jars show up constantly in winter crafting for good reason &mdash; they're cheap, versatile, and genuinely useful once converted into a lantern.",
      "A lantern-style jar filled with a flameless candle adds soft, ambient lighting without overpowering the rest of a room's lighting.",
      "Wrapping the jar with twine, a bit of greenery or a strip of birch bark finishes the look and ties it into a broader winter palette.",
    ],
    photo: pinPhoto("mason-jar-lanterns.jpg", "Mason jar winter lanterns with soft ambient lighting", 683, 1024, "https://www.pinterest.com/pin/13440498884081849/", "Mason Jar Winter Lanterns"),
  },
  {
    n: "03",
    title: "Wooden Snowflake Wall Art",
    paras: [
      "Wood crafts tend to feel timeless in a way plastic decor rarely manages, and wooden snowflakes are no exception.",
      "Simple cut shapes, left unpainted or finished in a neutral stain, read as considerably more sophisticated than a typical craft-store ornament.",
      "Keeping the finish neutral also means they can stay up through the entire winter season rather than coming down the moment the holidays end.",
    ],
    photo: pinPhoto("wooden-snowflake.jpg", "Wooden snowflake wall art in a neutral winter finish", 640, 1024, "https://www.pinterest.com/pin/563018699198572/", "Wooden Snowflake Wall Art"),
  },
  {
    n: "04",
    title: "Felt Garland for Mantels",
    paras: [
      "Felt is one of the more forgiving craft materials to work with, since it stays soft and doesn't fray at the edges the way fabric often does.",
      "A garland strung from felt shapes &mdash; circles, trees, simple geometric forms &mdash; feels playful without tipping into anything too juvenile.",
      "Sticking to muted winter colors rather than bright primary tones keeps the finished garland looking stylish enough to leave up on a mantel for the whole season.",
    ],
    photo: pinPhoto("felt-garland.jpg", "Felt garland draped across a mantel for winter decor", 717, 1024, "https://www.pinterest.com/pin/519673244531656972/", "Felt Garland for Mantels"),
  },
  {
    n: "05",
    title: "Cozy Fabric Wall Hangings",
    paras: [
      "A fabric wall hanging fills empty wall space with warmth rather than the visual weight a framed piece sometimes carries.",
      "Wool, muslin or a loosely woven textile on a simple wooden dowel comes together quickly and reads as intentional rather than improvised.",
      "A bare wall in winter can make a whole room feel colder than it actually is, and a soft textile hanging is an easy fix for that.",
    ],
    photo: photo("fabric-wall-hangings.jpg", "Cozy fabric wall hanging adding warmth to a winter room", 420, 588),
  },
  {
    n: "06",
    title: "Winter Scented Candles",
    paras: [
      "Scent does as much for a winter atmosphere as any visual decor, which makes a hand-poured candle a genuinely worthwhile craft.",
      "Winter scents like cedar, pine, clove or vanilla capture the season without leaning into anything overly sweet.",
      "Pouring the wax into a neutral jar keeps the finished candle flexible enough to match any room it ends up in.",
    ],
    photo: pinPhoto("scented-candles.jpg", "Homemade winter scented candles poured into neutral jars", 683, 1024, "https://www.pinterest.com/pin/5207355815347646/", "Winter Scented Candles"),
  },
  {
    n: "07",
    title: "Painted Pinecone Decor",
    paras: [
      "Pinecones are an easy, often free material that tends to get overlooked as a serious decor option.",
      "A light dusting of white or gold paint on the tips, rather than a full saturated coat, keeps the natural shape visible while adding a bit of shimmer.",
      "Scattered in a bowl or across a tray, painted pinecones make for quick, low-effort winter styling almost anywhere in the house.",
    ],
    photo: pinPhoto("painted-pinecones.jpg", "White and gold painted pinecones styled as winter decor", 736, 981, "https://www.pinterest.com/pin/68539225574294011/", "Painted Pinecone Decor"),
  },
  {
    n: "08",
    title: "Handmade Knit Pillow Covers",
    paras: [
      "Advanced knitting skills aren't required for this one &mdash; a simple, chunky stitch pattern produces a genuinely soft, substantial pillow cover.",
      "Swapping out a few thin pillow covers for knit ones can transform how an entire sofa feels, even without changing anything else in the room.",
      "The texture alone adds a cozy quality that a smoother, flatter pillow cover just can't replicate.",
    ],
    photo: pinPhoto("knit-pillow-covers.jpg", "Handmade chunky knit pillow covers on a winter sofa", 564, 705, "https://www.pinterest.com/pin/244461086017837575/", "Handmade Knit Pillow Covers"),
  },
  {
    n: "09",
    title: "Winter Quote Wall Prints",
    paras: [
      "Combining words with design gives a craft a more personal, thoughtful feel than purely decorative pieces often have.",
      "A short winter phrase, printed or hand-lettered and framed, adds a bit of warmth to a wall without requiring any painting or sculpting skill.",
      "Printing on textured paper rather than plain cardstock adds a subtle depth that makes the finished print look more considered.",
    ],
    photo: pinPhoto("quote-wall-prints.jpg", "Framed winter quote wall print with a seasonal illustration", 736, 736, "https://www.pinterest.com/pin/4598104937635138816/", "Winter Quote Wall Prints"),
  },
  {
    n: "10",
    title: "Wooden Tray Winter Centerpieces",
    paras: [
      "A tray does real work anchoring a winter centerpiece, keeping a collection of small objects from looking scattered across a table.",
      "Grouping candles, greenery, pinecones and a few ceramic pieces onto one wooden tray turns loose items into a single, cohesive display.",
      "Varying the height of the pieces within the tray adds visual interest that a flat, uniform arrangement doesn't achieve on its own.",
    ],
    photo: pinPhoto("tray-centerpieces.jpg", "Wooden tray styled as a winter centerpiece with candles and greenery", 735, 882, "https://www.pinterest.com/pin/9781324186051281/", "Wooden Tray Winter Centerpieces"),
  },
  {
    n: "11",
    title: "DIY Snowy Bottle Decor",
    paras: [
      "Glass bottles are an underrated base for a winter craft, especially once given a frosted finish that mimics fresh snow.",
      "A simple frosting spray or Epsom salt coating transforms an ordinary bottle into something that reads as genuinely seasonal.",
      "Lined up on a windowsill or shelf, a small collection of snowy bottles makes for an easy, low-cost display.",
    ],
    photo: pinPhoto("snowy-bottles.jpg", "DIY snowy frosted glass bottles styled as winter decor", 577, 1024, "https://www.pinterest.com/pin/1196337404920473/", "DIY Snowy Bottle Decor"),
  },
  {
    n: "12",
    title: "Handmade Fabric Table Runners",
    paras: [
      "A winter table deserves the same styling attention as the rest of the home, and a fabric runner is one of the simplest ways to give it that.",
      "A runner softens the hard edges of a table and immediately makes a bare surface look considered rather than unfinished.",
      "Choosing a textured fabric &mdash; a woven stripe, a subtle fringe &mdash; adds interest without requiring a bold pattern or color.",
    ],
    photo: photo("table-runners.jpg", "Handmade fabric table runner styled for winter dining", 736, 736),
  },
  {
    n: "13",
    title: "Wood Slice Ornaments",
    paras: [
      "Wood slice crafts carry a rustic, timeless quality that flashier ornaments rarely achieve.",
      "A simple painted design, a wood-burned pattern, or just the natural grain left as-is all work well on a basic wood slice base.",
      "Sealing the finished ornaments protects them for reuse year after year, which makes this one of the more durable crafts on the list.",
    ],
    photo: pinPhoto("wood-slice-ornaments.jpg", "Wood slice ornaments styled for winter decor", 729, 1024, "https://www.pinterest.com/pin/392798398772475069/", "Wood Slice Ornaments"),
  },
  {
    n: "14",
    title: "Winter Terrariums",
    paras: [
      "Terrariums aren't just a summer project &mdash; a winter version, built with pale moss, small pinecones and a touch of faux snow, feels calm and genuinely decorative.",
      "A simple glass container is all that's needed as a base, which makes this an easy craft to scale up or down depending on the space available.",
      "They work especially well on a desk or side table, where a larger centerpiece might feel out of place.",
    ],
    photo: pinPhoto("winter-terrariums.jpg", "Winter terrarium with moss and faux snow in a glass container", 736, 981, "https://www.pinterest.com/pin/2181499815579899/", "Winter Terrariums"),
  },
  {
    n: "15",
    title: "Handmade Mug Cozies",
    paras: [
      "Functional crafts tend to get more actual use than purely decorative ones, and a mug cozy is about as functional as winter crafting gets.",
      "A simple knit or felt sleeve wrapped around a mug protects hands from the heat while adding a cozy, handmade touch to an everyday object.",
      "They also make for an easy, low-cost gift for anyone who'd rather receive something practical than purely decorative.",
    ],
    photo: pinPhoto("mug-cozies.jpg", "Handmade knit mug cozies for winter coffee mugs", 736, 977, "https://www.pinterest.com/pin/37014028182615223/", "Handmade Mug Cozies"),
  },
  {
    n: "16",
    title: "Paper Snowflake Window Decor",
    paras: [
      "This classic craft never really goes out of style, and a modern version with clean, simple lines keeps it from feeling dated.",
      "Folded and cut from plain paper, snowflakes cost almost nothing and come together in a few minutes each.",
      "Clustering different sizes together on a window creates far more visual interest than a single snowflake taped up alone.",
    ],
    photo: pinPhoto("paper-snowflakes.jpg", "Paper snowflakes clustered on a window for winter decor", 559, 1024, "https://www.pinterest.com/pin/26036504092771722/", "Paper Snowflake Window Decor"),
  },
  {
    n: "17",
    title: "Winter Entryway Hooks Decor",
    paras: [
      "A crafted set of hooks adds both style and real function to an entryway that often needs a little more organization in winter.",
      "Wrapping plain hooks in twine, adding a small painted detail, or mounting them on a reclaimed wood board all elevate them past purely utilitarian hardware.",
      "Sticking to neutral colors keeps the hooks from adding visual clutter to a space that's already handling coats, scarves and bags.",
    ],
    photo: pinPhoto("entryway-hooks.jpg", "Decorated winter entryway hooks holding coats and scarves", 736, 916, "https://www.pinterest.com/pin/1970393583945454/", "Winter Entryway Hooks Decor"),
  },
  {
    n: "18",
    title: "DIY Winter Shadow Boxes",
    paras: [
      "A shadow box lets a small winter scene tell its own quiet story, rather than just stacking decorative objects on a shelf.",
      "Filling the box with miniature trees, a felted figure, birch branches and a bit of faux snow builds a scene that feels subtle rather than cartoonish.",
      "The enclosed format also protects the small details inside, which makes it a durable option for display year after year.",
    ],
    photo: photo("shadow-boxes.jpg", "DIY winter shadow box with a miniature snowman scene", 720, 719),
  },
  {
    n: "19",
    title: "Hand-Painted Ceramic Bowls",
    paras: [
      "Painted ceramics carry a personal touch that mass-produced decor can't replicate.",
      "A simple winter motif &mdash; a few snowflakes, a muted stripe, a dusted frost effect &mdash; tends to look more refined than an overly detailed design.",
      "Beyond display, a finished bowl works well for holding keys, candles or small trinkets, giving the craft a practical second life.",
    ],
    photo: pinPhoto("ceramic-bowls.jpg", "Hand-painted ceramic bowl with a simple winter design", 736, 981, "https://www.pinterest.com/pin/10907224093361720/", "Hand-Painted Ceramic Bowls"),
  },
  {
    n: "20",
    title: "Cozy Blanket Ladder Decor",
    paras: [
      "A blanket ladder blends decor and storage in a way few other winter crafts manage, giving throws somewhere stylish to live instead of being folded away.",
      "A simple wood ladder, built or repurposed, holds several layered blankets at once, which doubles as an easy styling trick on its own.",
      "A natural wood finish tends to add more warmth than a painted one, keeping the whole piece feeling cozy rather than crafted.",
    ],
    photo: photo("blanket-ladder.jpg", "Cozy wooden blanket ladder styled with layered throws", 736, 981),
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
<p>Winter crafting carries a different energy than any other season's. With more time spent indoors and less daylight to fill, a hands-on project feels less like a chore and more like an actual way to pass a quiet evening &mdash; and most winter crafts double as genuinely useful home decor once finished.</p>
<p>None of the ideas below require advanced skills or expensive materials. Most use things already sitting in a craft drawer, a recycling bin, or a nearby hardware store.</p>
${photo("hero.jpg", "Winter shadow box craft with a felted snowman and birch branches", 720, 719)}

<h2>Why Winter Crafting Feels Different</h2>
<p>Winter crafts tend to create an instant sense of coziness that's hard to replicate with store-bought decor alone. Indoor time stretches out during the colder months, which makes crafting feel like a genuinely good use of an evening rather than a weekend obligation. Many of these projects also double as budget-friendly decor, filling a mantel or entryway for a fraction of what a store-bought equivalent would cost.</p>
${pinPhoto("intro-why.jpg", "Winter fireplace mantel decor styled for the whole season", 683, 1024, "https://www.pinterest.com/pin/70650287900998601/", "Winter Mantel Decor Inspiration")}

<h2>Choosing the Right Winter Craft</h2>
<p>The best winter craft is one that actually matches the rest of a home's existing style, rather than introducing something that'll need to be put away the moment the season changes. Leaning into texture over color tends to work especially well for winter &mdash; knits, felt, raw wood and frosted glass all read as seasonal without needing a single ounce of red or green anywhere in the mix.</p>
${pinPhoto("intro-choose.jpg", "Christmas and winter decor styled with neutral textures", 564, 752, "https://www.pinterest.com/pin/10907224093302483/", "Choosing Winter Decor")}

<h2>20 Winter Craft Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these twenty crafts require a big budget or advanced skill to pull off. A ball of chunky yarn, a handful of pinecones, or a few mason jars can turn into something that genuinely elevates a room for the whole season.</p>
<p>The best winter crafts tend to be the ones that stay up well past the holidays themselves &mdash; texture and neutral tones over anything too literally festive, built to last through the entire cold season rather than just a few weeks in December.</p>
`;

module.exports = { body };
