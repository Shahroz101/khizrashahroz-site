// Body content for "15 Above-the-Cabinet Decor Ideas That Don't Look
// Dated". Photos carried over from the source article. Several
// photo/idea pairings were mismatched or duplicated in the source itself:
// the "Statement Art" idea's photo was the exact same file used as the
// hero (text rewritten to match what it actually shows — framed signs
// displayed upright, not leaned art), the "Minimal Greenery" idea's
// photo was actually a sign-heavy collected display with just a small
// potted sprig tucked in (text rewritten to match), and the "Sculptural
// Objects" idea's source photo was actually a Christmas-decorated shelf
// (reassigned to a different source photo that genuinely shows a
// sculptural object — a ceramic rooster). The "Wooden Crates and Bowls"
// idea was renamed slightly since its photo shows stacked crates, not
// the shallow dough bowls the text originally described, and the
// "Architectural" idea was softened from corbels/columns to match what
// its photo actually shows (tall dried stems, a round clock,
// candlesticks). Three ideas (Glass Vessels, Cookbooks, Statement
// Lighting) genuinely have no photo in the source article — confirmed by
// walking the source HTML in document order. Condensed 4 intro H2/H3
// sections down to 2, dropped the post-list "long-term" styling section.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  tallVases: [
    { asin: "B0FKPWXHGM", title: "Tall Off-White Ceramic Vase Set of 3 - Modern Farmhouse Decor Vases for Living Room, Coffee Table & Shelf Styling", w: 1500, h: 1500 },
    { asin: "B0G6D9PGWW", title: "Ceramic Vase Set of 6, Flower Vases, Small Vases for Pampas Grass", w: 1500, h: 1500 },
  ],
  minimalGreenery: [
    { asin: "B09P8CNBJ3", title: "SHACOS 3 PCS 39\" Fake Olive Tree Branches, Large Tall Artificial Greenery Stems for Vase", w: 988, h: 1500 },
    { asin: "B0CM8R33YN", title: "Faux Eucalyptus Stems, Willow Eucalyptus Leaves 34\" Long, 3 Pcs Artificial Greenery Stems", w: 1500, h: 1424 },
  ],
  wovenBaskets: [
    { asin: "B00YGFQJG4", title: "Deco 79 Seagrass Handmade Decorative Storage Basket, Large Woven Basket Organizer with Metal Handles, 21\" x 17\" x 19\"", w: 1500, h: 1405 },
    { asin: "B0081STHQQ", title: "Vintiquewise Natural Wicker Picnic Basket with Handle, Handcrafted Decorative Wicker Storage Basket", w: 1500, h: 1186 },
  ],
  vintageFinds: [
    { asin: "B00JZMUI9W", title: "Creative Co-Op 87-Ounce Embossed Stripe Ceramic Pitcher, Distressed White", w: 1186, h: 1500 },
    { asin: "B0DP4R75B4", title: "Vintage Country Metal Flower Vase, Farmhouse Decorative Milk Can Pot, Rustic Pitcher Jug", w: 1386, h: 1500 },
  ],
  sculpturalObjects: [
    { asin: "B0CZPLQ4LF", title: "Fitz and Floyd Ceramic Rooster and Hen Figurine, Sicily Blue, Rooster 12.75-Inch and Hen 10.5-Inch", w: 1500, h: 1271 },
    { asin: "B00C9IMZ2M", title: "StealStreet 15.75\" Porcelain Painted Colorful Rooster Bird Figurine Statue", w: 1213, h: 1500 },
  ],
  framedSigns: [
    { asin: "B0CMZ5LPCD", title: "Heiple Set of 3 Framed Farmhouse Signs, Kitchen Wall Decor for Dining Room, Wood Signs 11\"x14\"", w: 1500, h: 1500 },
    { asin: "B0CP1N5KKX", title: "Houmury Set of 3 Framed Wall Art, Farmhouse Wall Decor 11\"x14\", Kitchen Wall Decor Wood Signs", w: 1500, h: 1133 },
  ],
  woodenCrates: [
    { asin: "B0B9CLPCFN", title: "FANDOS Wooden Dough Bowl for Decor, 17¾ in Long Hand Carved Paulownia, Large Rustic Decorative Bowl", w: 1500, h: 1112 },
    { asin: "B0HCVN1FKF", title: "16 Inch Wavy-Edge Wooden Dough Bowl, Large Decorative Bowl for Home Decor", w: 1500, h: 1253 },
  ],
  seasonalTouches: [
    { asin: "B0BWTD2RR4", title: "Sggvecsy 6 Pcs Fall Artificial Eucalyptus Stems, Long Silver Dollar Leaves, Dark Brown", w: 1500, h: 1427 },
    { asin: "B0CFXQTLK3", title: "Briful 5 PCS Fall Leaves Artificial Magnolia Leaf Branches, 26\" Autumn Fake Plant Stems for Vase", w: 1500, h: 1467 },
  ],
  tallStems: [
    { asin: "B0C6X2C3Y2", title: "10 Stems 30\" Dried Pampas Grass Decor, Tall Boho Neutral Home Decor Bouquet for Floor Vase", w: 1500, h: 1424 },
    { asin: "B09KV1VX3P", title: "Smtyle Black Candlestick Holders for Taper Candles, Set of 5", w: 1500, h: 1071 },
  ],
  neutralPitchers: [
    { asin: "B0773J45VD", title: "D'vine Dev 10 Inch White Ceramic Pitcher Vase for Home Decor", w: 1181, h: 1500 },
    { asin: "B0CRHM62GP", title: "Domensi 2 Pcs 34oz White Ceramic Pitcher Vase, Farmhouse Jug Vase, Rustic Ceramic Pitchers with Handle", w: 1500, h: 1445 },
  ],
  monochrome: [
    { asin: "B0GL15LP75", title: "2 Pcs Black and White Ceramic Vase, Mid Century Modern Striped & Checkered Vases", w: 1500, h: 1466 },
    { asin: "B0GR428NXJ", title: "Matte Black Ceramic Vase Set of 3, Modern Farmhouse Boho Home Decor", w: 1172, h: 1500 },
  ],
  statementLighting: [
    { asin: "B0F9KYJP4D", title: "20 Inch Large Black Chandelier Dome, Bold Matte Black and Gold Pendant Light, Hanging Fixture", w: 1500, h: 1500 },
    { asin: "B09ZP4RT5H", title: "Black Pendant Light for Kitchen Island, Farmhouse Metal Cage Hanging Light", w: 1468, h: 1500 },
  ],
  emptySpace: [
    { asin: "B0GY1D33YK", title: "Ceramic Vase, Modern Sculptural Textured Vase, Beige Abstract Flower Vase for Home Decor", w: 1254, h: 1254 },
    { asin: "B0GYLZVB5D", title: "DOWAN 5.7\" Rustic Vintage Ceramic Vase, Distressed Textured Minimalist Farmhouse Pottery, Gray", w: 1500, h: 1500 },
  ],
  heroLanterns: [
    { asin: "B09NC1VGTW", title: "Rustic Farmhouse Lantern Decor, Set of 2 Stylish Decorative Lanterns", w: 1451, h: 1500 },
    { asin: "B0FDW6BBRL", title: "12.5\" & 16.5\" Timeless Cozy Decorative Lanterns Set of 2, Handcrafted Metal Iron Candle Holders", w: 1500, h: 1500 },
  ],
  introLanterns: [
    { asin: "B0DYN2DXRR", title: "Rustic Farmhouse Lantern Decor, Set of 3 Lanterns, Indoor and Outdoor", w: 1254, h: 1254 },
    { asin: "B0BNKF1L2K", title: "Romadedi Lantern Rustic Farmhouse Decor, Set of 2", w: 1250, h: 1500 },
  ],
  glassVessels: [
    { asin: "B0H4VVFQ23", title: "Clear Glass Vase Wide, Premium Decor Flower Vase, Cylinder Vases for Centerpieces", w: 1326, h: 1500 },
    { asin: "B009ANZ2YC", title: "WGVI Quality Thick Weighted Tall Clear Cylinder Glass Vase, 4\" W x 14\" H", w: 392, h: 1500 },
  ],
  cookbooks: [
    { asin: "B0H5886B7D", title: "Beautiful Decorative Books for Modern Home Decor, Set of 2 Stack Fake Books for Shelf & Mantel Decoration", w: 1254, h: 1254 },
    { asin: "B0FG1YS2P2", title: "9 Faux Books Neutral, Decorative Box with Hidden Storage, Bookshelf Accent, Home Staging Accessory", w: 1488, h: 1500 },
  ],
  statementLightingAlt: [
    { asin: "B0D8J2W66Z", title: "Farmhouse Chandelier, 3-Light Rattan Boho Hand Woven Wicker Pendant Light, 24\"", w: 1500, h: 1500 },
    { asin: "B0H2D2HHXB", title: "Large Black Dome Pendant Light, 23.6 Inch, Gold Leaf Interior", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "above-cabinet-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "above-cabinet-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "above-cabinet-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
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
    photo: pinPhoto("tall-vases.jpg", "Row of tall matte white ceramic vases and pitchers lined up above white kitchen cabinets", 683, 1024, "https://www.pinterest.com/pin/281543726327128/", "Tall Ceramic Vases Above Cabinets", "tallVases"),
  },
  {
    n: "02",
    title: "Minimal Greenery, Used Sparingly",
    paras: [
      "Greenery works well above kitchen cabinets, but only with real restraint. Less greenery almost always reads as more expensive than a lot of it.",
      "Skip trailing vines entirely. Faux olive branches, eucalyptus stems, or a single sculptural plant do far more with far less.",
      "It doesn't need to stand alone, either. A single potted sprig can hold its own inside a fuller, more collected display &mdash; like the mix of signage, a monogram letter and mugs shown here &mdash; as long as it isn't competing for attention with everything else up there.",
    ],
    photo: pinPhoto("minimal-greenery.jpg", "Collected above-cabinet display with a wood-framed home sign, a monogram letter, mugs, an arched mirror and a small potted plant above white kitchen cabinets", 736, 552, "https://www.pinterest.com/pin/211174976960626/", "Collected Above-Cabinet Display", "minimalGreenery"),
  },
  {
    n: "03",
    title: "Oversized Woven Baskets That Feel Intentional",
    paras: [
      "Baskets can absolutely look dated, but they don't have to. The difference comes down entirely to scale.",
      "Large-scale woven baskets with clean, simple shapes read as architectural and calm, while small baskets scream clutter immediately.",
      "These work especially well in farmhouse kitchens, transitional spaces, and warm neutral color schemes, like the basket paired with ceramic vases shown here. As a bonus, they hide dust far better than shiny decor ever does.",
    ],
    photo: pinPhoto("woven-baskets.jpg", "Large woven basket and neutral ceramic vases arranged above white kitchen cabinets with a trailing plant", 683, 1024, "https://www.pinterest.com/pin/526287906469115616/", "Oversized Woven Basket Above Cabinets", "wovenBaskets"),
  },
  {
    n: "04",
    title: "Glass Vessels for Light Reflection",
    paras: [
      "Glass decor works beautifully above kitchen cabinets as long as it stays simple. Clear or lightly tinted glass in rounded shapes reflects light and keeps the whole space feeling genuinely open.",
      "Go bigger than feels natural &mdash; a few larger glass vessels read as considered, while a cluster of small ones starts to look like clutter fast.",
      "It's also one of the lowest-risk choices on this entire list. Glass never really goes out of style the way more decorative materials can.",
    ],
    productsKey: "glassVessels",
  },
  {
    n: "05",
    title: "Antique and Vintage Finds for Character",
    paras: [
      "Nothing warms up a kitchen faster than something genuinely old. Vintage pitchers, old bread boards, and antique jars all do real work here.",
      "Restraint is the key. One or two pieces per section read as collected; a full shelf of antique finds starts to feel like a flea market display instead.",
      "A pair of vintage lanterns flanking glass vessels and trailing greenery, like the arrangement shown here, proves how much warmth a few well-chosen old pieces can add.",
    ],
    photo: pinPhoto("vintage-finds.jpg", "Vintage lanterns, clear glass vases and trailing greenery arranged above dark wood kitchen cabinets", 683, 1024, "https://www.pinterest.com/pin/19844054604962826/", "Vintage Finds Above Kitchen Cabinets", "vintageFinds"),
  },
  {
    n: "06",
    title: "Cookbooks Styled Like Decor",
    paras: [
      "Cookbooks work above cabinets, but only when they look intentional rather than like an overflow shelf.",
      "Stack them horizontally, limit the color palette to neutrals, and add one single object on top to finish the look.",
      "If the cookbook collection currently looks like a rainbow exploded, it belongs on a regular shelf instead &mdash; this spot only works with real color discipline.",
    ],
    productsKey: "cookbooks",
  },
  {
    n: "07",
    title: "Sculptural Objects That Feel Like Art",
    paras: [
      "This is one of the better moves when the goal is something genuinely modern. Sculptural objects with organic shapes &mdash; curves, texture, neutral tones &mdash; add interest without shouting for attention.",
      "Stone-inspired decor, abstract ceramic forms, and matte resin objects all work well here, but so does something with a little more personality.",
      "A single sculptural figure, like the ceramic rooster anchoring the pitcher and greenery shown here, can carry an entire section on its own.",
    ],
    photo: pinPhoto("sculptural-objects-2.jpg", "White ceramic rooster figure, a pitcher and greenery with string lights arranged above white kitchen cabinets", 736, 490, "https://www.pinterest.com/pin/27936460194077298/", "Sculptural Decor Above Cabinets", "sculpturalObjects"),
  },
  {
    n: "08",
    title: "Framed Signs Grouped Like Art",
    paras: [
      "This one surprises people every time, but yes, framed signs genuinely work above kitchen cabinets when the scale and grouping are right.",
      "Sit them upright along the shelf instead of hanging a single centered piece. Letting a run of frames overlap slightly with the decor around them reads as collected and current in a way one perfectly hung frame doesn't.",
      "A run of framed signs mixed with a woven wreath, a lantern and a small windmill accent, like the grouping shown here, instantly removes any lingering showroom-kitchen feeling.",
    ],
    photo: pinPhoto("statement-art.jpg", "Framed signs, a woven wreath, a lantern and a windmill accent displayed above white kitchen cabinets near a window", 736, 552, "https://www.pinterest.com/pin/2111131072146904/", "Framed Signs Above Kitchen Cabinets", "framedSigns"),
  },
  {
    n: "09",
    title: "Wooden Crates and Bowls for Warmth",
    paras: [
      "Wood brings a warmth up there that almost nothing else matches. Long, shallow dough bowls work especially well, creating a clean horizontal line that balances taller cabinets.",
      "Stacked wooden crates do similar work while adding genuine storage &mdash; tucking jars, tins, and smaller vessels inside keeps the look rustic without looking cluttered.",
      "Style either option with almost nothing, a few neutral spheres, or one sculptural object. Sometimes, like the crate stack shown here, the wood texture alone is enough to carry the whole section.",
    ],
    photo: pinPhoto("dough-bowls.jpg", "Stacked wooden crates filled with jars and tins arranged above cream kitchen cabinets with a trailing plant nearby", 640, 1024, "https://www.pinterest.com/pin/138626494776107280/", "Wooden Crates Above Kitchen Cabinets", "woodenCrates"),
  },
  {
    n: "10",
    title: "Statement Lighting That Reaches Upward",
    paras: [
      "Sometimes the best decor above a cabinet run isn't decor at all. A statement pendant light or a tall fixture visually fills the vertical space on its own.",
      "The effect pulls the eye upward and makes standard-height cabinets read as considerably taller than they actually are.",
      "It solves more problems than people expect from a single fixture &mdash; filling dead space, adding style, and improving the actual lighting all at once.",
    ],
    productsKey: "statementLightingAlt",
  },
  {
    n: "11",
    title: "Subtle Seasonal Touches, Not a Holiday Explosion",
    paras: [
      "Seasonal decor dates a kitchen fast once it goes overboard. The fix is leaning into texture and tone instead of themed signs and full displays.",
      "Dried branches in fall, light greenery in spring, and neutral stems in winter all keep the seasonal nod subtle rather than overwhelming.",
      "A tasteful holiday arrangement like the one shown here &mdash; garland, warm lights, a single festive sign &mdash; proves seasonal styling can still look put-together rather than like a decoration explosion. If a piece says something as specific as \"Pumpkin Spice,\" it doesn't belong up there.",
    ],
    photo: pinPhoto("seasonal-decor.jpg", "Christmas garland, pinecones, candles and a sign reading Today Is a Good Day arranged above white kitchen cabinets", 736, 552, "https://www.pinterest.com/pin/33495590973507454/", "Seasonal Decor Above Cabinets", "seasonalTouches"),
  },
  {
    n: "12",
    title: "Tall Stems and Structural Details",
    paras: [
      "Architectural touches feel genuinely timeless in a way trendier decor never quite manages. Tall dried stems, candlesticks, and a single statement piece like a round clock all add real structure to the space.",
      "These work especially well in classic or traditional kitchens, where a little formality above the cabinets matches the rest of the room.",
      "The height does real work here &mdash; tall stems in matching vases, like the ones shown here, draw the eye upward the same way a taller piece of furniture would.",
    ],
    photo: pinPhoto("architectural.jpg", "Tall dried pampas grass stems in vases, a round wall clock and black candlesticks arranged above white kitchen cabinets", 736, 982, "https://www.pinterest.com/pin/4785143351413207/", "Architectural Details Above Cabinets", "tallStems"),
  },
  {
    n: "13",
    title: "Neutral Pitchers and Jugs for Soft Curves",
    paras: [
      "Pitchers bring genuine soft curves into a kitchen that's otherwise full of hard lines and straight edges.",
      "Stoneware pitchers in neutral glazes, with a little visible imperfection in the finish, work best &mdash; they feel collected rather than purchased as a matching set.",
      "Paired with a trailing plant, like the setup shown here, pitchers and bowls read as effortless and considerably more expensive than they actually were.",
    ],
    photo: pinPhoto("pitchers.jpg", "Trailing green plant and neutral ceramic pitchers and bowls arranged above cream kitchen cabinets", 683, 1024, "https://www.pinterest.com/pin/70650287900983592/", "Neutral Pitchers Above Cabinets", "neutralPitchers"),
  },
  {
    n: "14",
    title: "Monochrome Groupings for a Designer Look",
    paras: [
      "Going monochrome is one of the most reliable ways to make above-cabinet decor read as genuinely high-end. Grouping similar tones together creates an immediate sense of calm.",
      "All-white ceramics, all-wood tones, or all-black accents each work on their own &mdash; the trick is picking one lane and staying in it rather than mixing several.",
      "A black-and-white palette like the one shown here, carried through pitchers, greenery, and even the window treatment below, shows exactly how far one consistent color story can stretch.",
    ],
    photo: pinPhoto("monochrome.jpg", "Black and white buffalo check styling above kitchen cabinets with white pitchers, greenery and a Joy sign", 683, 1024, "https://www.pinterest.com/pin/5840674511726860/", "Monochrome Above-Cabinet Styling", "monochrome"),
  },
  {
    n: "15",
    title: "Leaving the Space Empty, On Purpose",
    paras: [
      "Empty space counts as decor too, and it's genuinely one of the most underused options on this entire list.",
      "Not every cabinet run needs styling. Strategic emptiness actually makes the sections that are styled stand out more by comparison.",
      "A clean, open kitchen like the one shown here, with nothing at all above the cabinets, proves that restraint can look just as finished as a fully styled shelf. If the kitchen already feels busy, stepping back is often the right move.",
    ],
    photo: pinPhoto("empty-space.jpg", "Open white kitchen with bare cabinets and no decor above them, with woven pendant lights and a dining area nearby", 736, 882, "https://www.pinterest.com/pin/351912464203596/", "Empty Space Above Kitchen Cabinets", "emptySpace"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const media = idea.photo || (idea.productsKey ? productGrid(idea.productsKey) : "");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${media}`;
}

const body = `
<p>Standing in a kitchen staring at that awkward empty space above the cabinets, wondering why it always looks either boring or painfully outdated, is a genuinely common moment. That space confuses more homeowners than almost any other kitchen styling detail, and it's rarely for lack of ideas &mdash; it's choosing ideas that don't age the kitchen overnight.</p>
<p>That space is not a dumping ground for whatever baskets happen to be around. Styled with intention, it makes a kitchen look taller, warmer, and genuinely more custom. Ignored or decorated wrong, it reads as builder-grade louder than almost anything else in the room.</p>
${photo("hero.jpg", "Above-cabinet decor styling with a woven basket, lantern and framed signs above white kitchen cabinets near a window", 736, 552, "heroLanterns")}

<h2>Why This Space Actually Matters</h2>
<p>Does anyone consciously notice the space above kitchen cabinets? Yes &mdash; everyone does, they just don't register it as a deliberate decision. The eye naturally travels upward in a kitchen, especially when upper cabinets stop short of the ceiling. Left empty, the kitchen looks unfinished. Left cluttered, it looks chaotic. Styled well, it quietly elevates the entire room the same way throw pillows finish off a living room.</p>
<p>The decor that dates this space fastest: tiny knickknacks that disappear from view, fake grapes and trailing ivy vines, matching word signs scattered everywhere, and dust-catching clutter with no real visual rhythm. Dated decor almost always comes from filling space instead of actually styling it &mdash; and those are two very different things.</p>
${pinPhoto("intro-matters-1.jpg", "Above-cabinet decor with a woven basket, greenery, framed signs and a lantern above cream kitchen cabinets", 736, 552, "https://www.pinterest.com/pin/68744802382/", "Above-Cabinet Decor Styling", "introLanterns")}

<h2>Choosing the Right Approach for Your Kitchen</h2>
<p>Three questions settle most of the decisions here. What's the kitchen's actual style &mdash; a modern kitchen calls for different above-cabinet decor than a farmhouse or transitional one, and staying consistent is what makes the space feel intentional. How high are the cabinets &mdash; short cabinets need taller decor, tall cabinets need more breathing room, and scale matters more here than almost anywhere else in the kitchen. And finally, contrast or continuity &mdash; contrast tends to work better in neutral kitchens, continuity in already-colorful ones, and mixing the two without a plan is what creates visual chaos.</p>
${pinPhoto("intro-choose.jpg", "Above-cabinet styling with mirrors, candlesticks and trailing plants above white kitchen cabinets around a kitchen island with a chandelier", 720, 960, "https://www.pinterest.com/pin/844493674948355/", "Choosing Above-Cabinet Decor", "statementLighting")}

<h2>15 Above-the-Cabinet Decor Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Above-the-cabinet decor doesn't have to feel awkward, outdated, or overwhelming. It should quietly support the kitchen, not steal the spotlight or collect dust like a forgotten attic shelf. Fewer, larger pieces and timeless materials beat a crowded shelf of small items every time.</p>
<p>If there's ever doubt about whether something belongs up there, ask one question: will this still look good in five years? Hesitate, and it's probably worth skipping. A well-styled kitchen always feels intentional, never overdecorated.</p>
`;

module.exports = { body };
