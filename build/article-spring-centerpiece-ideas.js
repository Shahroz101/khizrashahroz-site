// Body content for "18 Spring Centerpiece Ideas for a Fresh Home". Photos
// carried over from the source article, Pinterest pin links preserved.
// Source had 4 fabricated/misattributed quotes (attributed to Joanna
// Gaines, Bobby Berk, Nate Berkus and Emily Henderson) — cut entirely,
// not part of this site's voice. Rewritten out of the source's very
// casual, choppy, direct-address voice into the site's calmer tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0F6V5NHTK", title: "Real Touch Artificial Tulips, 20 Stems, Premium Silk Feel, UV-Resistant", w: 1500, h: 1500 },
    { asin: "B0BGS6SCT7", title: "Briful Pink Artificial Tulips in Clear Glass Vase, Real Touch Arrangement", w: 1042, h: 1500 },
  ],
  why: [
    { asin: "B0GX8DLG5X", title: "Pastel Artificial Flowers Combo Box, Pink and Blue, Fake Roses and Foliage", w: 1464, h: 1500 },
    { asin: "B0H5QC6Z4V", title: "Natural Rope Wicker Flower Baskets, 3 Pack, Small Wedding Baskets", w: 1468, h: 1500 },
  ],
  colors: [
    { asin: "B0GX11QXCY", title: "Remagr 12 Pack Pastel Cheesecloth Gauze Table Runners", w: 1500, h: 1493 },
    { asin: "B0FCDZLS8C", title: "Hug Donut Decorative Vase Set, Sage Green, Modern Nordic Boho Style", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0HD6Q5HJF", title: "Rustic Farmhouse Ceramic Vase, 9.1 Inch Wide, Decorative", w: 1254, h: 897 },
    { asin: "B0FQHS44R5", title: "White Ceramic Pitcher Vase with Handle, Honeycomb Texture, 7 x 8 Inch", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0CBB3D84J", title: "Hanobe 17.7 Inch Round Decorative Tray for Coffee Table and Ottoman, Vintage Brown", w: 1460, h: 1500 },
    { asin: "B0BYVSTNKT", title: "Sggvecsy 8 Pack Artificial Eucalyptus Garland, Faux Hanging Greenery", w: 1495, h: 1500 },
  ],
  idea3: [
    { asin: "B0CQYQGK5C", title: "Homjoy 4 Pack Glass Cylinder Vases, 4, 6, 8 and 10 Inch, Hurricane Candle Holders", w: 1220, h: 1500 },
    { asin: "B0FH6XLDGP", title: "Light Pink Real Touch Artificial Tulips, 20 Piece Set", w: 1014, h: 1500 },
  ],
  idea4: [
    { asin: "B097KDDQWH", title: "Solino Home 100% Linen Table Runner, Light Natural, 14 x 72 Inch", w: 1211, h: 1500 },
    { asin: "B0D6KDW17P", title: "Freyalife Fake Ivy Vines, 12 Pack, 84 Feet", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B08QRZ2L8J", title: "Chardin Home Jute Braided Oval Boho Table Runner", w: 1420, h: 1500 },
    { asin: "B0H7CB1MZ1", title: "Vintage Glass Bud Vase Set of 12, Purple and Pink", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0CNV4FJLN", title: "XUANGUO Rustic Cotton Rope Basket, 16 x 14 Inch", w: 1476, h: 1500 },
    { asin: "B0C3D4TC2T", title: "PERFNIQUE Indoor Herb Garden Planter, Farmhouse Pots with Tray and Markers", w: 1500, h: 1426 },
  ],
  idea7: [
    { asin: "B0GWLFXPPQ", title: "Pastel Unscented Taper Candles for Spring and Easter Table Decor", w: 1180, h: 1165 },
    { asin: "B0G4V29DXY", title: "Battery Operated Floral Flameless Candles with Remote", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0H8NZLXM9", title: "11.5 Inch Large Vintage Blue and White Ceramic Pedestal Fruit Bowl", w: 1500, h: 1395 },
    { asin: "B0FL21TZVK", title: "dallisten 12 Piece Lifelike Artificial Lemons for Bowls and Kitchen Decor", w: 1425, h: 1500 },
  ],
  idea9: [
    { asin: "B0F1CXWL9Z", title: "Decorative Moss Balls Set, 18 Piece, Bowl Fillers and Centerpiece Decor", w: 1500, h: 1153 },
    { asin: "B0HB4D32R6", title: "8 Piece Natural Handmade Decorative Balls, 2.36 Inch Bowl Filler Orbs", w: 1500, h: 1464 },
  ],
  idea10: [
    { asin: "B0CFVF4671", title: "Whaline 6 Piece Preppy Foldable Decorative Books Bundle", w: 1343, h: 1500 },
    { asin: "B0FT3MZ14H", title: "Sunddo Blue Ceramic Vase, 4 Inch Small Bud Vase", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B08L8S7BW8", title: "Briful 15 Inch White Phalaenopsis Artificial Orchid Arrangement", w: 1368, h: 1245 },
    { asin: "B0F6C1F2P2", title: "2 Piece Artificial Lemon Flower Garland Vine, 14 Ft", w: 1500, h: 1498 },
  ],
  idea12: [
    { asin: "B0D5V6P4ZP", title: "Krismax Rustic Two-Tiered Decorative Cupcake Stand Tray", w: 1319, h: 1500 },
    { asin: "B0FHGGNHJX", title: "Freyalife 6 Pack Mini Artificial Potted Plants for Home Decor", w: 1438, h: 1338 },
  ],
  idea13: [
    { asin: "B0DVLPR6CT", title: "Ball 32 oz Wide Mouth Glass Mason Jars with Lids and Bands, 12 Pack", w: 1108, h: 537 },
    { asin: "B0GS4L52BB", title: "FOIMAS 37 Piece Mini Faux Wildflowers for DIY Small Bouquets", w: 1500, h: 1498 },
  ],
  idea14: [
    { asin: "B0CQW9C67Y", title: "12 Pack Ivory Unscented Floating Candles, 3 Inch, Dripless Wax", w: 1500, h: 1500 },
    { asin: "B08KH1XNW9", title: "CYS EXCEL Wide Cylinder Clear Glass Bowl Vase, 4 x 12 Inch", w: 1500, h: 794 },
  ],
  idea15: [
    { asin: "B08MV6CL7C", title: "BULK PARADISE Assorted Clear Glass Bottles with Corks, 6 Pack", w: 1069, h: 1500 },
    { asin: "B0D25PF7JH", title: "Floroom 45 Piece Artificial Greenery and Flower Picks Box Set for DIY Arrangements", w: 1500, h: 1476 },
  ],
  idea16: [
    { asin: "B0FL2CZ1P1", title: "Tujoe 6 Piece 10 Inch LED Candle Lanterns, Indoor and Outdoor, Dark Bronze", w: 1500, h: 1435 },
    { asin: "B0DQCS67L7", title: "Waipfaru 4 Piece Fake Hanging Plants, 2.7 Ft, Greenery Vines", w: 1500, h: 1394 },
  ],
  idea17: [
    { asin: "B0D22K7TNT", title: "Sggvecsy 4 Piece Artificial Cherry Blossom Flower Stems", w: 1445, h: 1500 },
    { asin: "B0G4QWP1JZ", title: "Hanobe Tall Wood Floor Vase for Pampas Grass, 22 Inch, Boho Beige", w: 1140, h: 1500 },
  ],
  idea18: [
    { asin: "B0CPT46KTJ", title: "7.5 Inch Tall Handmade Glass Cloche, Thick and Sturdy, for Terrariums and Decor", w: 547, h: 878 },
    { asin: "B0GZ1TYYRJ", title: "Preserved Reindeer Moss Mix, Natural Green, 1.1 lb", w: 1500, h: 1452 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "spring-centerpiece-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "spring-centerpiece-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "spring-centerpiece-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
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
    photo: pinPhoto("farmhouse-pitcher.jpg", "Farmhouse pitcher filled with loose flowers as a table centerpiece", 683, 1024, "https://www.pinterest.com/pin/213006257371897843/", "Farmhouse Pitcher Flower Arrangement", "idea1"),
  },
  {
    n: "02",
    title: "Wooden Tray With Candles and Greenery",
    paras: [
      "Candles and greenery together are a reliably cozy combination that rarely misses.",
      "A long wooden tray down the center of the table, layered with eucalyptus, a few pillar candles and small buds, builds real texture without much effort.",
      "Mixing textures this way tends to look richer than a single large arrangement, and it stays relaxed rather than formal.",
    ],
    photo: pinPhoto("wooden-tray-candles.jpg", "Wooden tray centerpiece layered with candles and eucalyptus greenery", 683, 1024, "https://www.pinterest.com/pin/11751649023423301/", "Wooden Tray With Candles and Greenery", "idea2"),
  },
  {
    n: "03",
    title: "Classic Tulip Vase Centerpiece",
    paras: [
      "Tulips read as spring almost instantly, with very little styling required to make them work.",
      "One clear glass vase, stems trimmed unevenly, left to lean naturally rather than arranged too precisely, is really the whole idea.",
      "Keeping it simple matters here &mdash; tulips tend to look better a little undone than perfectly arranged.",
    ],
    photo: photo("tulip-vase.jpg", "Pink tulips in a clear glass vase styled as a spring centerpiece", 769, 1024, "idea3"),
  },
  {
    n: "04",
    title: "Neutral Linen and Greenery Runner",
    paras: [
      "Sometimes a centerpiece doesn't need an actual object at all &mdash; just texture.",
      "A neutral linen runner down the table with greenery draped casually across it, no vases and no height involved, creates a soft, organic look on its own.",
      "It reads as understated rather than themed, which suits a table that doesn't want to announce the season too loudly.",
    ],
    photo: pinPhoto("neutral-linen-runner.jpg", "Neutral linen table runner draped with greenery for a soft spring look", 683, 1024, "https://www.pinterest.com/pin/1075938167240186205/", "Neutral Linen and Greenery Runner", "idea4"),
  },
  {
    n: "05",
    title: "Woven Runner With Scattered Bud Vases",
    paras: [
      "Instead of one large arrangement, scattering several tiny ones across a runner creates a lighter, airier look.",
      "Five to seven small bud vases, each holding a single stem, lined up along a woven runner, feels far less bulky than a single centerpiece would.",
      "It's also easy to shift the vases around during a meal, which a larger arrangement rarely allows for.",
    ],
    photo: pinPhoto("woven-runner-bud-vases.jpg", "Woven table runner with several small bud vases each holding one flower stem", 683, 1024, "https://www.pinterest.com/pin/439171401184535170/", "Woven Runner With Scattered Bud Vases", "idea5"),
  },
  {
    n: "06",
    title: "Rustic Basket With Potted Herbs",
    paras: [
      "This one genuinely smells as good as it looks.",
      "Small pots of basil, mint and rosemary grouped inside a woven basket double as both centerpiece and something that can be snipped straight into dinner.",
      "Functional decor like this tends to get more actual use than a purely decorative arrangement ever does.",
    ],
    photo: pinPhoto("rustic-basket-herbs.jpg", "Rustic woven basket filled with small potted herbs as a kitchen centerpiece", 704, 1024, "https://www.pinterest.com/pin/388505905375943158/", "Rustic Basket With Potted Herbs", "idea6"),
  },
  {
    n: "07",
    title: "Candle Cluster With Spring Colors",
    paras: [
      "Flowers usually get all the credit, but a candle cluster can carry a table just as well on its own.",
      "Five to seven candles in different heights and soft spring colors &mdash; sage, blush, cream &mdash; built with no flowers or greenery involved, let the glow do the work instead.",
      "Fewer moving pieces also means less upkeep, which is a quiet bonus a floral centerpiece doesn't offer.",
    ],
    photo: pinPhoto("candle-cluster.jpg", "Cluster of candles in soft spring colors styled as a table centerpiece", 683, 1024, "https://www.pinterest.com/pin/949626271440235845/", "Candle Cluster With Spring Colors", "idea7"),
  },
  {
    n: "08",
    title: "Lemon Bowl Kitchen Island Centerpiece",
    paras: [
      "This one is about as low-effort as centerpieces get, yet it never goes unnoticed.",
      "A large bowl filled with nothing but lemons brings a bright pop of yellow that stands out against a neutral kitchen, and it adds a genuinely fresh scent to the room at the same time.",
      "It reads a little like a styled cooking-show set, minus any actual cooking required.",
    ],
    photo: pinPhoto("lemon-bowl.jpg", "Large bowl of lemons styled as a kitchen island centerpiece", 750, 1000, "https://www.pinterest.com/pin/5840674511141188/", "Lemon Bowl Kitchen Island Centerpiece", "idea8"),
  },
  {
    n: "09",
    title: "Mixed Textures Decorative Bowl Arrangement",
    paras: [
      "For something a little more earthy and grounded, a bowl filled with texture rather than flowers works surprisingly well.",
      "Moss balls, dried botanicals or wooden beads piled into a large bowl build a rich look without a single stem to water.",
      "There's no wilting and no maintenance involved, which makes it one of the lower-drama options on this whole list.",
    ],
    photo: pinPhoto("mixed-textures-bowl.jpg", "Decorative bowl filled with moss balls and dried botanicals for texture", 768, 1024, "https://www.pinterest.com/pin/50595195808762998/", "Mixed Textures Decorative Bowl Arrangement", "idea9"),
  },
  {
    n: "10",
    title: "Pastel Books Stack With Mini Vase",
    paras: [
      "For a slightly more modern, artsy centerpiece, a small stack of books does double duty as both styling and height.",
      "Two or three pastel or neutral books, topped with a tiny vase, keeps the whole arrangement simple and clean &mdash; especially well suited to a coffee table rather than a dining table.",
      "Keeping the book covers plain matters here, since a busy cover tends to undercut the calm look the rest of the arrangement is going for.",
    ],
    photo: pinPhoto("pastel-books-vase.jpg", "Stack of pastel books topped with a small vase as a centerpiece", 1000, 1500, "https://www.pinterest.com/pin/11962755257321048/", "Pastel Books Stack With Mini Vase", "idea10"),
  },
  {
    n: "11",
    title: "Fruit and Floral Combo Centerpiece",
    paras: [
      "Flowers look good, fruit looks fresh, and combining the two makes for a centerpiece that feels genuinely alive.",
      "Scattering a few lemons or oranges around a low floral arrangement adds a juicy pop of color and a subtle citrus scent at the same time.",
      "It reads as considerably more expensive than it actually costs, which is a trick plenty of restaurants rely on for exactly this reason.",
    ],
    photo: pinPhoto("fruit-floral-combo.jpg", "Fruit and floral combination centerpiece with lemons around a low flower arrangement", 735, 945, "https://www.pinterest.com/pin/16888567448423522/", "Fruit and Floral Combo Centerpiece", "idea11"),
  },
  {
    n: "12",
    title: "Tiered Tray Mini Garden Centerpiece",
    paras: [
      "A tiered tray isn't just for a dessert table &mdash; it works just as well as a miniature garden display.",
      "Small plants, moss balls and tiny decor pieces stacked across each level build height without taking up much actual table space.",
      "The result feels playful but still organized, and it suits a kitchen island or entry table especially well.",
    ],
    photo: pinPhoto("tiered-tray-garden.jpg", "Tiered tray styled as a mini garden centerpiece with small plants and moss", 768, 1024, "https://www.pinterest.com/pin/47498971060222979/", "Tiered Tray Mini Garden Centerpiece", "idea12"),
  },
  {
    n: "13",
    title: "Wildflower Mason Jar Trio",
    paras: [
      "For cozy farmhouse character without much effort, three small mason jars filled with different wildflowers is hard to beat.",
      "Varying the heights slightly keeps the trio looking casual and charming rather than stiff or overly arranged.",
      "It's an especially good fit for a breakfast table, and it scales down easily for a small apartment or compact dining space.",
    ],
    photo: pinPhoto("wildflower-mason-jars.jpg", "Trio of mason jars with wildflowers at varying heights on a breakfast table", 683, 1024, "https://www.pinterest.com/pin/219409813092419159/", "Wildflower Mason Jar Trio", "idea13"),
  },
  {
    n: "14",
    title: "Floating Flower Bowl",
    paras: [
      "This one looks considerably fancier than the five minutes it actually takes.",
      "A shallow glass bowl filled with water, topped with flower heads or petals and a few floating candles for extra drama, creates an instant spa-like centerpiece.",
      "Sturdier blooms hold up far better floating in water than delicate ones, which tend to sink before the table's even set.",
    ],
    photo: pinPhoto("floating-flower-bowl.jpg", "Shallow glass bowl with floating flowers and candles as a centerpiece", 1024, 1024, "https://www.pinterest.com/pin/132996995241461639/", "Floating Flower Bowl", "idea14"),
  },
  {
    n: "15",
    title: "Vintage Bottle Bud Vase Lineup",
    paras: [
      "This idea costs almost nothing if the bottles come from thrifting.",
      "A collection of old bottles, each holding a single stem and lined up together, creates a repetition that reads as intentional and a little artsy rather than random.",
      "Each bottle also catches light a little differently, which gives the whole lineup a subtle sparkle during the day.",
    ],
    photo: pinPhoto("vintage-bottle-vases.jpg", "Lineup of vintage glass bottles each holding a single flower stem", 1024, 1024, "https://www.pinterest.com/pin/72690981480338302/", "Vintage Bottle Bud Vase Lineup", "idea15"),
  },
  {
    n: "16",
    title: "Layered Lanterns With Greenery",
    paras: [
      "Lanterns alone make a table feel cozy, and adding greenery around them pushes that feeling straight into spring.",
      "Two or three lanterns at different heights, with eucalyptus or faux ivy tucked around their bases and candles placed inside, is the whole arrangement &mdash; no florals required.",
      "Warm candlelight does a lot of the emotional work on its own, which makes this one of the easier ideas to pull together with almost no fuss.",
    ],
    photo: pinPhoto("layered-lanterns.jpg", "Layered lanterns at different heights with greenery tucked around the base", 683, 1024, "https://www.pinterest.com/pin/774124930773189/", "Layered Lanterns With Greenery", "idea16"),
  },
  {
    n: "17",
    title: "Single Statement Branch Arrangement",
    paras: [
      "Sometimes less really does beat more.",
      "Instead of filling a vase with flowers, one or two flowering branches &mdash; cherry blossom, magnolia, or even simple leafy stems &mdash; left mostly on their own make a quietly dramatic statement.",
      "The negative space around a single branch gives the whole arrangement a calmer, more modern feel than a full bouquet usually allows for.",
    ],
    photo: pinPhoto("statement-branch.jpg", "Single flowering branch arrangement as a minimalist centerpiece", 683, 1024, "https://www.pinterest.com/pin/838514024413784764/", "Single Statement Branch Arrangement", "idea17"),
  },
  {
    n: "18",
    title: "Glass Cloche With Spring Decor",
    paras: [
      "A glass cloche dome turns almost anything underneath it into something that looks curated.",
      "Moss, tiny flowers or decorative eggs placed inside the dome instantly read as more intentional than the same items left loose on a table.",
      "It's a small detail, but the glass does a lot of visual work &mdash; it's a little like a miniature museum exhibit for the dining table.",
    ],
    photo: pinPhoto("glass-cloche.jpg", "Glass cloche dome styled with moss and small spring decor", 703, 1024, "https://www.pinterest.com/pin/14003448838022831/", "Glass Cloche With Spring Decor", "idea18"),
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
${pinPhoto("intro-fresh-faux.jpg", "Spring centerpiece comparing fresh and faux floral styling", 683, 1024, "https://www.pinterest.com/pin/908249449869873231/", "Fresh vs. Faux Spring Centerpieces", "hero")}

<h2>What Makes a Good Spring Centerpiece</h2>
<p>The best spring centerpieces lean into a handful of seasonal cues &mdash; soft pastels, fresh greenery, a bit of citrus, natural textures like wood and woven baskets &mdash; rather than trying to cram every spring element onto one table at once. Restraint usually reads better than abundance here.</p>
${pinPhoto("intro-why.jpg", "Spring centerpiece styled with pastel flowers and natural textures", 683, 1024, "https://www.pinterest.com/pin/422281212459901/", "Spring Centerpiece Styling", "why")}
<p>Color does a lot of the seasonal signaling on its own. Blush pink, soft yellow, sage green and cream all read as spring almost instantly, and they pair easily with the neutral wood and ceramic pieces most homes already have on hand.</p>
${pinPhoto("intro-colors.jpg", "Spring centerpiece in soft pastel colors on a dining table", 683, 1024, "https://www.pinterest.com/pin/311452130502739786/", "Best Colors for Spring Centerpieces", "colors")}

<h2>18 Spring Centerpiece Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these eighteen ideas require an elaborate setup or an expensive flower order. Most come together in under fifteen minutes, using items that are often already sitting around the house &mdash; a pitcher, a stack of books, a handful of jars.</p>
<p>When a room starts to feel a little stale, swapping out the centerpiece is usually a faster fix than redecorating the whole space &mdash; a small move that changes the feel of the whole table.</p>
`;

module.exports = { body };
