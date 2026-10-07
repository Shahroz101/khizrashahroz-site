// Body content for "18 Spring Centerpiece Ideas for a Fresh Home". Photos
// carried over from the source article, Pinterest pin links preserved.
// Source had 4 fabricated/misattributed quotes (attributed to Joanna
// Gaines, Bobby Berk, Nate Berkus and Emily Henderson) — cut entirely,
// not part of this site's voice. Rewritten out of the source's very
// casual, choppy, direct-address voice into the site's calmer tone.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "spring-centerpiece-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "spring-centerpiece-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Farmhouse Pitcher Flower Arrangement",
    paras: [
      "An actual kitchen pitcher makes a surprisingly good vase, and it skips the need for anything fancier.",
      "An old ceramic or enamel pitcher filled with loose blooms reads as charming and relaxed, like the flowers were just gathered from the garden a few minutes earlier.",
      "A little imperfection actually helps here &mdash; something too polished starts to feel more like a hotel lobby than a breakfast table.",
    ],
    photo: pinPhoto("farmhouse-pitcher.jpg", "Farmhouse pitcher filled with loose flowers as a table centerpiece", 683, 1024, "https://www.pinterest.com/pin/213006257371897843/", "Farmhouse Pitcher Flower Arrangement"),
  },
  {
    n: "02",
    title: "Wooden Tray With Candles and Greenery",
    paras: [
      "Candles and greenery together are a reliably cozy combination that rarely misses.",
      "A long wooden tray down the center of the table, layered with eucalyptus, a few pillar candles and small buds, builds real texture without much effort.",
      "Mixing textures this way tends to look richer than a single large arrangement, and it stays relaxed rather than formal.",
    ],
    photo: pinPhoto("wooden-tray-candles.jpg", "Wooden tray centerpiece layered with candles and eucalyptus greenery", 683, 1024, "https://www.pinterest.com/pin/11751649023423301/", "Wooden Tray With Candles and Greenery"),
  },
  {
    n: "03",
    title: "Classic Tulip Vase Centerpiece",
    paras: [
      "Tulips read as spring almost instantly, with very little styling required to make them work.",
      "One clear glass vase, stems trimmed unevenly, left to lean naturally rather than arranged too precisely, is really the whole idea.",
      "Keeping it simple matters here &mdash; tulips tend to look better a little undone than perfectly arranged.",
    ],
    photo: photo("tulip-vase.jpg", "Pink tulips in a clear glass vase styled as a spring centerpiece", 769, 1024),
  },
  {
    n: "04",
    title: "Neutral Linen and Greenery Runner",
    paras: [
      "Sometimes a centerpiece doesn't need an actual object at all &mdash; just texture.",
      "A neutral linen runner down the table with greenery draped casually across it, no vases and no height involved, creates a soft, organic look on its own.",
      "It reads as understated rather than themed, which suits a table that doesn't want to announce the season too loudly.",
    ],
    photo: pinPhoto("neutral-linen-runner.jpg", "Neutral linen table runner draped with greenery for a soft spring look", 683, 1024, "https://www.pinterest.com/pin/1075938167240186205/", "Neutral Linen and Greenery Runner"),
  },
  {
    n: "05",
    title: "Woven Runner With Scattered Bud Vases",
    paras: [
      "Instead of one large arrangement, scattering several tiny ones across a runner creates a lighter, airier look.",
      "Five to seven small bud vases, each holding a single stem, lined up along a woven runner, feels far less bulky than a single centerpiece would.",
      "It's also easy to shift the vases around during a meal, which a larger arrangement rarely allows for.",
    ],
    photo: pinPhoto("woven-runner-bud-vases.jpg", "Woven table runner with several small bud vases each holding one flower stem", 683, 1024, "https://www.pinterest.com/pin/439171401184535170/", "Woven Runner With Scattered Bud Vases"),
  },
  {
    n: "06",
    title: "Rustic Basket With Potted Herbs",
    paras: [
      "This one genuinely smells as good as it looks.",
      "Small pots of basil, mint and rosemary grouped inside a woven basket double as both centerpiece and something that can be snipped straight into dinner.",
      "Functional decor like this tends to get more actual use than a purely decorative arrangement ever does.",
    ],
    photo: pinPhoto("rustic-basket-herbs.jpg", "Rustic woven basket filled with small potted herbs as a kitchen centerpiece", 704, 1024, "https://www.pinterest.com/pin/388505905375943158/", "Rustic Basket With Potted Herbs"),
  },
  {
    n: "07",
    title: "Candle Cluster With Spring Colors",
    paras: [
      "Flowers usually get all the credit, but a candle cluster can carry a table just as well on its own.",
      "Five to seven candles in different heights and soft spring colors &mdash; sage, blush, cream &mdash; built with no flowers or greenery involved, let the glow do the work instead.",
      "Fewer moving pieces also means less upkeep, which is a quiet bonus a floral centerpiece doesn't offer.",
    ],
    photo: pinPhoto("candle-cluster.jpg", "Cluster of candles in soft spring colors styled as a table centerpiece", 683, 1024, "https://www.pinterest.com/pin/949626271440235845/", "Candle Cluster With Spring Colors"),
  },
  {
    n: "08",
    title: "Lemon Bowl Kitchen Island Centerpiece",
    paras: [
      "This one is about as low-effort as centerpieces get, yet it never goes unnoticed.",
      "A large bowl filled with nothing but lemons brings a bright pop of yellow that stands out against a neutral kitchen, and it adds a genuinely fresh scent to the room at the same time.",
      "It reads a little like a styled cooking-show set, minus any actual cooking required.",
    ],
    photo: pinPhoto("lemon-bowl.jpg", "Large bowl of lemons styled as a kitchen island centerpiece", 750, 1000, "https://www.pinterest.com/pin/5840674511141188/", "Lemon Bowl Kitchen Island Centerpiece"),
  },
  {
    n: "09",
    title: "Mixed Textures Decorative Bowl Arrangement",
    paras: [
      "For something a little more earthy and grounded, a bowl filled with texture rather than flowers works surprisingly well.",
      "Moss balls, dried botanicals or wooden beads piled into a large bowl build a rich look without a single stem to water.",
      "There's no wilting and no maintenance involved, which makes it one of the lower-drama options on this whole list.",
    ],
    photo: pinPhoto("mixed-textures-bowl.jpg", "Decorative bowl filled with moss balls and dried botanicals for texture", 768, 1024, "https://www.pinterest.com/pin/50595195808762998/", "Mixed Textures Decorative Bowl Arrangement"),
  },
  {
    n: "10",
    title: "Pastel Books Stack With Mini Vase",
    paras: [
      "For a slightly more modern, artsy centerpiece, a small stack of books does double duty as both styling and height.",
      "Two or three pastel or neutral books, topped with a tiny vase, keeps the whole arrangement simple and clean &mdash; especially well suited to a coffee table rather than a dining table.",
      "Keeping the book covers plain matters here, since a busy cover tends to undercut the calm look the rest of the arrangement is going for.",
    ],
    photo: pinPhoto("pastel-books-vase.jpg", "Stack of pastel books topped with a small vase as a centerpiece", 1000, 1500, "https://www.pinterest.com/pin/11962755257321048/", "Pastel Books Stack With Mini Vase"),
  },
  {
    n: "11",
    title: "Fruit and Floral Combo Centerpiece",
    paras: [
      "Flowers look good, fruit looks fresh, and combining the two makes for a centerpiece that feels genuinely alive.",
      "Scattering a few lemons or oranges around a low floral arrangement adds a juicy pop of color and a subtle citrus scent at the same time.",
      "It reads as considerably more expensive than it actually costs, which is a trick plenty of restaurants rely on for exactly this reason.",
    ],
    photo: pinPhoto("fruit-floral-combo.jpg", "Fruit and floral combination centerpiece with lemons around a low flower arrangement", 735, 945, "https://www.pinterest.com/pin/16888567448423522/", "Fruit and Floral Combo Centerpiece"),
  },
  {
    n: "12",
    title: "Tiered Tray Mini Garden Centerpiece",
    paras: [
      "A tiered tray isn't just for a dessert table &mdash; it works just as well as a miniature garden display.",
      "Small plants, moss balls and tiny decor pieces stacked across each level build height without taking up much actual table space.",
      "The result feels playful but still organized, and it suits a kitchen island or entry table especially well.",
    ],
    photo: pinPhoto("tiered-tray-garden.jpg", "Tiered tray styled as a mini garden centerpiece with small plants and moss", 768, 1024, "https://www.pinterest.com/pin/47498971060222979/", "Tiered Tray Mini Garden Centerpiece"),
  },
  {
    n: "13",
    title: "Wildflower Mason Jar Trio",
    paras: [
      "For cozy farmhouse character without much effort, three small mason jars filled with different wildflowers is hard to beat.",
      "Varying the heights slightly keeps the trio looking casual and charming rather than stiff or overly arranged.",
      "It's an especially good fit for a breakfast table, and it scales down easily for a small apartment or compact dining space.",
    ],
    photo: pinPhoto("wildflower-mason-jars.jpg", "Trio of mason jars with wildflowers at varying heights on a breakfast table", 683, 1024, "https://www.pinterest.com/pin/219409813092419159/", "Wildflower Mason Jar Trio"),
  },
  {
    n: "14",
    title: "Floating Flower Bowl",
    paras: [
      "This one looks considerably fancier than the five minutes it actually takes.",
      "A shallow glass bowl filled with water, topped with flower heads or petals and a few floating candles for extra drama, creates an instant spa-like centerpiece.",
      "Sturdier blooms hold up far better floating in water than delicate ones, which tend to sink before the table's even set.",
    ],
    photo: pinPhoto("floating-flower-bowl.jpg", "Shallow glass bowl with floating flowers and candles as a centerpiece", 1024, 1024, "https://www.pinterest.com/pin/132996995241461639/", "Floating Flower Bowl"),
  },
  {
    n: "15",
    title: "Vintage Bottle Bud Vase Lineup",
    paras: [
      "This idea costs almost nothing if the bottles come from thrifting.",
      "A collection of old bottles, each holding a single stem and lined up together, creates a repetition that reads as intentional and a little artsy rather than random.",
      "Each bottle also catches light a little differently, which gives the whole lineup a subtle sparkle during the day.",
    ],
    photo: pinPhoto("vintage-bottle-vases.jpg", "Lineup of vintage glass bottles each holding a single flower stem", 1024, 1024, "https://www.pinterest.com/pin/72690981480338302/", "Vintage Bottle Bud Vase Lineup"),
  },
  {
    n: "16",
    title: "Layered Lanterns With Greenery",
    paras: [
      "Lanterns alone make a table feel cozy, and adding greenery around them pushes that feeling straight into spring.",
      "Two or three lanterns at different heights, with eucalyptus or faux ivy tucked around their bases and candles placed inside, is the whole arrangement &mdash; no florals required.",
      "Warm candlelight does a lot of the emotional work on its own, which makes this one of the easier ideas to pull together with almost no fuss.",
    ],
    photo: pinPhoto("layered-lanterns.jpg", "Layered lanterns at different heights with greenery tucked around the base", 683, 1024, "https://www.pinterest.com/pin/774124930773189/", "Layered Lanterns With Greenery"),
  },
  {
    n: "17",
    title: "Single Statement Branch Arrangement",
    paras: [
      "Sometimes less really does beat more.",
      "Instead of filling a vase with flowers, one or two flowering branches &mdash; cherry blossom, magnolia, or even simple leafy stems &mdash; left mostly on their own make a quietly dramatic statement.",
      "The negative space around a single branch gives the whole arrangement a calmer, more modern feel than a full bouquet usually allows for.",
    ],
    photo: pinPhoto("statement-branch.jpg", "Single flowering branch arrangement as a minimalist centerpiece", 683, 1024, "https://www.pinterest.com/pin/838514024413784764/", "Single Statement Branch Arrangement"),
  },
  {
    n: "18",
    title: "Glass Cloche With Spring Decor",
    paras: [
      "A glass cloche dome turns almost anything underneath it into something that looks curated.",
      "Moss, tiny flowers or decorative eggs placed inside the dome instantly read as more intentional than the same items left loose on a table.",
      "It's a small detail, but the glass does a lot of visual work &mdash; it's a little like a miniature museum exhibit for the dining table.",
    ],
    photo: pinPhoto("glass-cloche.jpg", "Glass cloche dome styled with moss and small spring decor", 703, 1024, "https://www.pinterest.com/pin/14003448838022831/", "Glass Cloche With Spring Decor"),
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
<p>A spring centerpiece doesn't need to be complicated to make a table feel refreshed. Most of the ideas below come down to one strong focal point &mdash; a bowl of lemons, a trio of mason jars, a single flowering branch &mdash; rather than an elaborate arrangement that takes an afternoon to put together.</p>
<p>Fresh flowers bring real fragrance and texture, but they come with upkeep and a shorter shelf life; faux versions last indefinitely and travel well between seasons. Neither is the "right" choice &mdash; it comes down to how much maintenance feels worth it for the look.</p>
${photo("hero.jpg", "Pink tulip arrangement with a striped bow styled on a wood console table", 1200, 900)}
${pinPhoto("intro-fresh-faux.jpg", "Spring centerpiece comparing fresh and faux floral styling", 683, 1024, "https://www.pinterest.com/pin/908249449869873231/", "Fresh vs. Faux Spring Centerpieces")}

<h2>What Makes a Good Spring Centerpiece</h2>
<p>The best spring centerpieces lean into a handful of seasonal cues &mdash; soft pastels, fresh greenery, a bit of citrus, natural textures like wood and woven baskets &mdash; rather than trying to cram every spring element onto one table at once. Restraint usually reads better than abundance here.</p>
${pinPhoto("intro-why.jpg", "Spring centerpiece styled with pastel flowers and natural textures", 683, 1024, "https://www.pinterest.com/pin/422281212459901/", "Spring Centerpiece Styling")}
<p>Color does a lot of the seasonal signaling on its own. Blush pink, soft yellow, sage green and cream all read as spring almost instantly, and they pair easily with the neutral wood and ceramic pieces most homes already have on hand.</p>
${pinPhoto("intro-colors.jpg", "Spring centerpiece in soft pastel colors on a dining table", 683, 1024, "https://www.pinterest.com/pin/311452130502739786/", "Best Colors for Spring Centerpieces")}

<h2>18 Spring Centerpiece Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these eighteen ideas require an elaborate setup or an expensive flower order. Most come together in under fifteen minutes, using items that are often already sitting around the house &mdash; a pitcher, a stack of books, a handful of jars.</p>
<p>When a room starts to feel a little stale, swapping out the centerpiece is usually a faster fix than redecorating the whole space &mdash; a small move that changes the feel of the whole table.</p>
`;

module.exports = { body };
