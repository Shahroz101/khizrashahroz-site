// Body content for "18 Round Tray Decor Ideas for Every Room". Photos
// carried over from the source article, Pinterest pin links preserved.
// Source had an unusually padded intro (5 sub-sections, 11 photos before
// the numbered ideas even start) — condensed to 2 short sections per the
// established practice of trimming padded intros; all 15 of the source's
// idea-level photos are kept (3 ideas — Bar Cart, Shelf Styling, Home
// Office Desk — had no photo in the source, a genuine gap).

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0H947HJWM", title: "EupHHonycs Scalloped Round Wooden Serving Tray for Decor, 12.6 Inch", w: 1500, h: 1156 },
    { asin: "B0GX81YZ9F", title: "Gold Taper Candlestick Holders, 12 Piece Vintage Metal Set", w: 1500, h: 1500 },
  ],
  choose: [
    { asin: "B0FKB7XC96", title: "Round Water Hyacinth Ottoman Serving Trays with Handles, Set of 2, 11.8 Inch", w: 1500, h: 1306 },
    { asin: "B0G6VGH7R2", title: "Calacatta Viola Marble Round Tray, Large, 11.5 Inch", w: 1500, h: 1059 },
  ],
  style: [
    { asin: "B0GD5RLM9W", title: "Round Wood Tray for Ottoman and Coffee Table, 11.8 Inch, Large", w: 1500, h: 592 },
    { asin: "B0DHQLT7QB", title: "Ceramic Taper Candle Holder with Tray Base", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0GWHBC7HL", title: "Decorative Round Pedestal Tray, 7.9 Inch, for Entryway Table Keys", w: 1443, h: 757 },
    { asin: "B0CQ8WT4LT", title: "Mecaikru Ceramic Trinket Dish, 4 Inch Ring Tray, Kiln Glaze", w: 1104, h: 1104 },
  ],
  idea2: [
    { asin: "B0GX851CYD", title: "Round Silicone Bathroom Vanity Tray, 9.1 Inch, Scalloped Edge", w: 1386, h: 1500 },
    { asin: "B0B5TYRW23", title: "JASAI 2 Pack 18 oz Glass Soap Dispensers with Stainless Steel Pump", w: 1164, h: 1200 },
  ],
  idea3: [
    { asin: "B0HF7K8M73", title: "20 Inch Round Faux Leather Ottoman Serving Tray", w: 1500, h: 1097 },
    { asin: "B0D9Y3VMY8", title: "Decorative Coffee Table Books, Set of 3, Mid Century Modern", w: 1500, h: 1497 },
  ],
  idea4: [
    { asin: "B0D9H89RJT", title: "Travertine Round Serving Tray, 11.8 Inch, Marble Finish", w: 1500, h: 1500 },
    { asin: "B0H1HKH4XD", title: "Fall Pumpkin and Foliage Decor Set, 32 Piece, Autumn Harvest", w: 1500, h: 1361 },
  ],
  idea5: [
    { asin: "B0D62BS9Q6", title: "Round Decorative Farmhouse Wood Tray, 8 Inch, Brown", w: 1332, h: 1355 },
    { asin: "B0DQTV9PVG", title: "Mini Artificial Greenery Potted Plants, 4 Pack, for Bathroom and Shelves", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0DNDTS6N6", title: "Round Rattan Ottoman Coffee Table Tray with Handles, Woven", w: 1395, h: 1500 },
    { asin: "B0H6JGJKGW", title: "Modern Ceramic Flower Vase Set of 3 for Table Decor", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0DSM6PWT1", title: "OAKOA Black Round Decorative Tray, Centerpiece", w: 1500, h: 1329 },
    { asin: "B0H8LC81LF", title: "Waterproof LED Lantern with Flame Effect, 8.3 Inch, Vintage Black", w: 823, h: 1500 },
  ],
  idea8: [
    { asin: "B0FRFSYQTN", title: "Hanobe Wood Decorative Ottoman Tray with Handles, 22 Inch", w: 1447, h: 1500 },
    { asin: "B0F6TZHQZ7", title: "Dried Pampas Grass and Boho Dried Flower Bouquet Set, White and Brown", w: 1500, h: 1496 },
  ],
  idea9: [
    { asin: "B0CFV12DDZ", title: "Hrastany Round Wood Decorative Serving Tray for Coffee Table, Brown", w: 1500, h: 1497 },
    { asin: "B0HDJR3TLR", title: "Small White Fluted Ceramic Flower Vase, 7.7 Inch", w: 1254, h: 1254 },
  ],
  idea10: [
    { asin: "B0D1G1ZZBD", title: "Round Black Silicone Vanity Tray for Perfume and Decor, 9 Inch", w: 1398, h: 1500 },
    { asin: "B07Y8543WQ", title: "UUJOLY Refillable Foaming Soap Dispenser, 15 oz", w: 833, h: 857 },
  ],
  idea11: [
    { asin: "B0GJZ1JPYS", title: "Round Beige Silicone Decorative Vanity Tray, 9 Inch", w: 1389, h: 1500 },
    { asin: "B09RPKGVDW", title: "COLLECTIVE HOME Ceramic Jewelry Tray and Trinket Dish, Medium", w: 1500, h: 1500 },
  ],
  idea12: [
    { asin: "B0HBWLV2HN", title: "Round Scalloped Wood Decorative Tray Set, 2 Piece", w: 1500, h: 1274 },
    { asin: "B0D1BRNHM8", title: "WENSHUO Small Ceramic Pedestal Bowl, 5.5 Inch, Creme", w: 1000, h: 1000 },
  ],
  idea13: [
    { asin: "B0F29GBCF8", title: "Italian Natural Marble Round Vanity Tray", w: 1500, h: 1469 },
    { asin: "B07D73PZS8", title: "Feyarl Crystal Mirrored Perfume and Makeup Vanity Tray", w: 1347, h: 1078 },
  ],
  idea14: [
    { asin: "B0DB8G5DSG", title: "Extra Large Round Ottoman Coffee Table Tray, 22 Inch, Wood", w: 1446, h: 1500 },
    { asin: "B08Q3P48ZS", title: "aboxoo Thinker Statue Abstract Art Figurine, Gold", w: 661, h: 1500 },
  ],
  idea15: [
    { asin: "B0H4KDG8GX", title: "Cream Round Resin Coffee Table Tray, 11 Inch, Decorative", w: 1452, h: 1500 },
    { asin: "B0CVRV7NGY", title: "Hapton House Solid Brass Clawfoot Pedestal Dish, 4.6 Inch", w: 1018, h: 733 },
  ],
  idea16: [
    { asin: "B0B2QPFQF3", title: "HofferRuffer Faux Leather Round Serving Tray, Croco Texture", w: 1494, h: 1398 },
    { asin: "B0FKM5GXZV", title: "Whiskey Decanter Set with 4 Crystal Glasses and Silicone Ice Molds", w: 1500, h: 1499 },
  ],
  idea17: [
    { asin: "B0DGX3VZCT", title: "Round Acacia Wood Decorative Tray, 7.9 Inch", w: 1463, h: 1443 },
    { asin: "B0F25XX6HJ", title: "Sparkling Gold Reading Thinker Sculpture, Abstract Art Figurine", w: 940, h: 1455 },
  ],
  idea18: [
    { asin: "B0FX3Q3SNZ", title: "Round Decorative Tray for Coffee Table, Nightstand and Desk Organizing", w: 1232, h: 1442 },
    { asin: "B0CQP9LYXC", title: "M and G Mesh Pen Holder Desk Organizer, 3 Compartments, Black", w: 1436, h: 1195 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "round-tray-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "round-tray-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "round-tray-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Entryway Round Tray That Actually Helps",
    paras: [
      "Entryways get messy fast, and a round tray placed near the door is one of the simplest fixes for the daily scramble to find keys.",
      "Mixing style with function matters most here &mdash; a small dish for keys, a stack of mail, maybe a candle, all fitting comfortably within the tray's edge.",
      "It keeps the small essentials contained instead of scattered across a console, and it sets a welcoming tone the moment someone walks in the door.",
    ],
    photo: pinPhoto("entryway.jpg", "Round tray styled on an entryway table with keys, mail and a small dish", 720, 874, "https://www.pinterest.com/pin/1115415032711247264/", "Entryway Round Tray Decor", "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Bathroom Vanity Round Tray",
    paras: [
      "A bathroom feels instantly more elevated with the right tray on the vanity, even in a small powder room or guest bath.",
      "Everyday items &mdash; hand soap, a small candle, lotion, a tray of folded hand towels &mdash; still look intentional once they're grouped inside a round tray rather than scattered across the counter.",
      "It keeps the vanity organized without feeling precious, and it's the easiest way to make a bathroom feel like it belongs in a boutique hotel rather than a rushed morning routine.",
    ],
    photo: pinPhoto("bathroom-vanity.jpg", "Round tray on a bathroom vanity with soap, lotion and a small candle", 474, 1024, "https://www.pinterest.com/pin/4714774603291008/", "Bathroom Vanity Round Tray Decor", "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Coffee Table Centerpiece",
    paras: [
      "The coffee table is the classic home for a round tray, and it earns that reputation honestly &mdash; it organizes what would otherwise be clutter without killing the room's vibe.",
      "A candle, a stack of books, something with a bit of texture like a sculptural object or small vase of greenery, grouped together rather than spread loose across the table, is the whole idea.",
      "The tray pulls everything into one visual moment and keeps the rest of the table surface usable for an actual drink or a plate, which loose decor rarely allows for.",
    ],
    photo: pinPhoto("coffee-table.jpg", "Round tray styled as a coffee table centerpiece with a vase, candle and books", 736, 842, "https://www.pinterest.com/pin/102034747804385361/", "Coffee Table Round Tray Decor", "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Seasonal Round Tray Decor",
    paras: [
      "This is arguably where a round tray earns its keep the most &mdash; swapping what's on it is a fast, affordable way to refresh a room for a new season.",
      "Keeping the tray itself neutral and rotating only the decor on top of it &mdash; pumpkins and foliage in fall, greenery and candles in winter, fresh blooms in spring &mdash; means one tray can carry a room through the whole year.",
      "It's one of the lowest-effort ways to make a space feel seasonally updated without redoing the room's actual styling each time.",
    ],
    photo: pinPhoto("seasonal.jpg", "Round tray styled with seasonal holiday decor on a kitchen counter", 683, 1024, "https://www.pinterest.com/pin/1084030572871971073/", "Seasonal Round Tray Decor", "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Minimal Round Tray for Small Spaces",
    paras: [
      "Round trays genuinely shine in tight spaces, since the circular shape takes up far less visual room than a rectangular one, even at the same footprint.",
      "Keeping it to two or three items at most, and letting the tray itself do most of the visual work, is what keeps a small apartment or compact room from feeling overdecorated.",
      "A single candle, a small plant, and one object with a bit of shape is usually plenty &mdash; proof that a small space can still look genuinely styled without being crowded.",
    ],
    photo: pinPhoto("minimal-small-space.jpg", "Minimalist round tray styled with a candle and small greenery for a compact space", 683, 1024, "https://www.pinterest.com/pin/126663808268643832/", "Minimal Round Tray for Small Spaces", "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Console Table Round Tray",
    paras: [
      "A console table needs some kind of structure or it starts to look forgotten, and a round tray anchors that styling especially well in a long hallway or behind a sofa.",
      "Placing the tray slightly off-center, then layering the rest of the console's decor around it, keeps the whole arrangement from feeling too rigid or symmetrical.",
      "The round shape also breaks up all the straight lines a console table usually has, which adds a bit of visual flow a tray-free console tends to be missing.",
    ],
    photo: pinPhoto("console-table.jpg", "Round tray anchoring decor on a console table in a hallway", 735, 802, "https://www.pinterest.com/pin/4591138425351337216/", "Console Table Round Tray Decor", "idea6"),
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Outdoor Table Round Tray",
    paras: [
      "Round trays work outside just as well as they do indoors, and they turn a patio or balcony table from forgotten into genuinely styled.",
      "Sticking to weather-resistant items &mdash; a lantern, a faux succulent, a stone or ceramic object that won't warp in the rain &mdash; keeps the display from needing constant upkeep.",
      "The tray also keeps everything contained even on a breezy day, which loose tabletop decor outdoors almost never manages on its own.",
    ],
    photo: pinPhoto("outdoor-table.jpg", "Round tray styled with weather-resistant decor on an outdoor patio table", 736, 981, "https://www.pinterest.com/pin/70437490628805/", "Outdoor Table Round Tray Decor", "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Ottoman Round Tray That Feels Intentional",
    paras: [
      "An ottoman sits right at the edge between decor and function, and a sturdy round tray is what makes it work as both at once.",
      "A stack of books, a candle and something textured &mdash; dried flowers, a small sculptural object &mdash; fills the tray without making the ottoman feel overloaded.",
      "The ottoman still functions as a footrest or extra seat when needed, but the tray keeps it from looking bare the rest of the time &mdash; a genuinely practical compromise.",
    ],
    photo: pinPhoto("ottoman.jpg", "Round woven tray with books, a candle and dried flowers styled on an ottoman", 735, 900, "https://www.pinterest.com/pin/466615211413233343/", "Ottoman Round Tray Decor", "idea8"),
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Kitchen Counter Round Tray",
    paras: [
      "Kitchen counters deserve better than random clutter, and a round tray creates a clear visual zone &mdash; especially useful in an open layout where everything tends to blend together.",
      "A small vase, a candle, maybe a stack of cookbooks or a cutting board leaned upright, grouped onto one tray, keeps the counter from feeling like a catch-all.",
      "It stays neat without feeling sterile, and a kitchen styled this way reads warmer than one with everything just set directly on the counter.",
    ],
    photo: pinPhoto("kitchen-counter.jpg", "Round tray styled with a vase and candle on a kitchen counter", 736, 920, "https://www.pinterest.com/pin/791437334500626006/", "Kitchen Counter Round Tray Decor", "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Bathroom Counter Corner Round Tray",
    paras: [
      "Corners get ignored constantly, especially in a bathroom, and a round tray is a simple trick for turning a dead corner into a styled moment.",
      "Keeping the tray fairly light &mdash; a small soap dispenser, a rolled hand towel, one plant &mdash; avoids overloading what's usually a tight amount of counter space.",
      "The tray adds a bit of polish without actually taking up much room, which keeps the whole space feeling clean, calm and considered rather than cluttered.",
    ],
    photo: pinPhoto("bathroom-corner.jpg", "Round tray styling a corner of a bathroom counter with soap and a small plant", 736, 916, "https://www.pinterest.com/pin/36380709480727430/", "Bathroom Counter Corner Round Tray Decor", "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Bedroom Nightstand Round Tray",
    paras: [
      "Nightstands clutter up fast, and a round tray helps control that mess without making the space feel sterile or overly staged.",
      "Keeping it soft and minimal &mdash; a small lamp, a candle, a book, maybe a tiny dish for rings &mdash; is really all a nightstand tray needs.",
      "The round shape softens the edges of what's usually a boxy nightstand, and it keeps the surface from feeling crowded during a half-asleep morning routine.",
    ],
    photo: pinPhoto("bedroom-nightstand.jpg", "Round tray styled on a bedroom nightstand with a candle and small accessories", 736, 981, "https://www.pinterest.com/pin/10062799161730089/", "Bedroom Nightstand Round Tray Decor", "idea11"),
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Dining Table Round Tray for Everyday Style",
    paras: [
      "A dining table doesn't need a full formal tablescape to look pulled together on a random weeknight.",
      "A round tray with a low-profile arrangement &mdash; a short vase, a candle, a small plant &mdash; works well for everyday use, since anything too tall gets in the way when plates start getting passed around.",
      "The tray anchors the table without demanding attention, and it keeps the table looking styled even on nights when it isn't formally set.",
    ],
    photo: pinPhoto("dining-table.jpg", "Low-profile round tray centerpiece styled on an everyday dining table", 736, 981, "https://www.pinterest.com/pin/2744449769182459/", "Dining Table Round Tray Decor", "idea12"),
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Vanity Table Round Tray",
    paras: [
      "A vanity table clutters up quickly once skincare, makeup and jewelry all start competing for the same surface.",
      "Grouping daily essentials onto one round tray keeps the chaos contained while still looking pretty &mdash; a perfume bottle, a small dish for rings, a brush or two is usually enough.",
      "Everything feels more intentional once it's gathered rather than scattered, and getting ready tends to feel more enjoyable in a space that actually looks put together.",
    ],
    photo: pinPhoto("vanity-table.jpg", "Round marble tray organizing perfume and jewelry on a vanity table", 736, 981, "https://www.pinterest.com/pin/193091902770020810/", "Vanity Table Round Tray Decor", "idea13"),
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Layered Round Tray for Statement Style",
    paras: [
      "For anyone drawn to bolder decor, a round tray can go genuinely dramatic once it's layered with intention.",
      "Combining a taller sculptural piece, a stack of oversized books, and something with real texture &mdash; a dried arrangement, a patterned object &mdash; builds real visual weight.",
      "Balance still matters even in a bold layout, so the tray holds the drama together instead of letting it feel random or overdone.",
    ],
    photo: pinPhoto("layered-statement.jpg", "Dramatically layered round tray decor with sculptural objects and books", 736, 736, "https://www.pinterest.com/pin/2814818511813744/", "Layered Round Tray Decor", "idea14"),
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Neutral Round Tray That Never Gets Old",
    paras: [
      "When in doubt, a soft neutral palette on a round tray is close to a guaranteed win.",
      "Cream, beige, warm wood and a touch of brass work in almost any room and almost any season, which makes a neutral tray one of the easiest styling decisions to make and forget about.",
      "It adapts to nearly anything placed nearby, and it rarely feels dated the way a more trend-driven color palette eventually does.",
    ],
    photo: pinPhoto("neutral.jpg", "Soft neutral round tray decor with cream and warm wood tones", 683, 1024, "https://www.pinterest.com/pin/175358979221488396/", "Neutral Round Tray Decor", "idea15"),
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Bar Cart Round Tray",
    paras: [
      "Bar carts turn chaotic fast once bottles, glasses and tools start competing for space, and a round tray creates order without draining the fun out of it.",
      "Treating the tray as its own small moment within the cart &mdash; grouping a decanter, a few glasses and a small garnish dish together &mdash; keeps everything from looking scattered.",
      "It makes the whole cart read as curated rather than cluttered, which is the difference between a bar cart that looks intentional and one that just looks messy.",
    ],
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Shelf Styling With a Round Tray",
    paras: [
      "Open shelving needs some kind of grounding element or it starts to feel floaty, and a round tray gives a shelf real structure and depth.",
      "Placing the tray toward the back of the shelf, then layering smaller items forward in front of it, lets the tray act as a visual anchor for everything else nearby.",
      "The round shape also breaks up the straight lines a shelf usually has, pulling the whole arrangement together in a way flat, ungrounded shelf styling rarely manages.",
    ],
  },
  {
    n: "18",
    productsKey: "idea18",
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
    ${idea.photo || (idea.productsKey ? productGrid(idea.productsKey) : "")}`;
}

const body = `
<p>A round tray does more for a room than its size suggests. It gathers loose objects &mdash; a candle, a stack of books, a small vase &mdash; into one deliberate moment, and the circular shape softens whatever hard edges sit nearby, whether that's a square coffee table or a boxy console.</p>
<p>It also travels well. The same tray that organizes a coffee table can just as easily anchor a bathroom vanity, a nightstand, or an outdoor side table, which makes it one of the more flexible styling tools in a home.</p>
${photo("hero.jpg", "Round wood tray styled with a vase, candlesticks and a candle on a coffee table", 1312, 736, "hero")}

<h2>Choosing and Styling a Round Tray</h2>
<p>Material matters more than most people expect. A woven or natural-fiber tray leans relaxed and textural, while a lacquered wood or marble tray reads more polished and formal &mdash; picking one that matches the room's existing materials keeps it from looking like an afterthought.</p>
${pinPhoto("intro-choose.jpg", "Braided round tray with natural texture styled with a vase and greenery", 600, 800, "https://www.pinterest.com/pin/63050463531446284/", "Choosing a Round Tray", "choose")}
<p>Once the tray itself is chosen, the styling part is simple: pick a focal point first &mdash; usually something with height, like a candlestick or a small vase &mdash; then fill in around it with two or three supporting pieces instead of a tray's worth of knickknacks. If a setup still feels off once it's styled, that instinct is usually right, and it's worth pulling one piece back out.</p>
${pinPhoto("intro-style.jpg", "Farmhouse-style round tray with a gold mirror styled on a coffee table", 474, 1024, "https://www.pinterest.com/pin/140806228723732/", "Styling a Round Tray", "style")}

<h2>18 Round Tray Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A round tray is one of the lowest-effort, highest-impact styling tools a home can have &mdash; it works on nearly every surface, in nearly every room, and it adapts the moment the decor on top of it changes.</p>
<p>Starting with one strong focal point, keeping the rest of the items to a small, intentional group, and resisting the urge to overfill it is really the entire formula, no matter which room the tray ends up in.</p>
`;

module.exports = { body };
