// Body content for "19 Side Table Decor Ideas for a Charming Look".
// Photos carried over from the source article, Pinterest pin links
// preserved. Source had 8 fabricated/misattributed quotes (attributed
// to Deborah Needleman, Piet Oudolf, Kelly Wearstler, Shea McGee, Darla
// DeMorrow, Athena Calderone, Abigail Ahern and John Pawson) — all cut,
// not part of this site's voice. Source also had a padded 4-section
// intro (Why / Mistakes / Choosing a Base / Styling Rule); condensed to
// 2 sections per established practice. 2 source images were each reused
// across two different ideas in the source (one with a pin link on one
// occurrence only) — both occurrences kept, per the standing rule to
// reuse every source photo exactly as the source used it.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0GT94L9WP", title: "PoKat Small Black Stone-Look Table Lamp, 21 Inch", w: 1500, h: 1500 },
    { asin: "B0GHYKDV88", title: "Faux Orchid Plant in Pot, 23 Inch, Realistic Touch Leaves, Phalaenopsis", w: 1188, h: 1500 },
  ],
  base: [
    { asin: "B0DHRGBX5M", title: "XBurmo Small Round 3-Tier Accent Side Table, Industrial Style", w: 1500, h: 1500 },
    { asin: "B07QW7XQJN", title: "VASAGLE Round Glass End Table with Gold Metal Frame", w: 1034, h: 1500 },
  ],
  rule: [
    { asin: "B0FN7S6MW3", title: "Large Tall Ceramic Flower Vase, Rustic Farmhouse Style", w: 1500, h: 1500 },
    { asin: "B0GS59RKYC", title: "Mid-Century Modern Resin Jacks Decor Set, 2 Piece", w: 1500, h: 866 },
  ],
  idea1: [
    { asin: "B0HL1PSGKP", title: "Possini Euro Hemings Blue Floral Battery Powered Accent Lamp Set, 12 Inch", w: 1500, h: 1500 },
    { asin: "B0D9Y5F8T2", title: "EOEYYOYB Pleated Table Lamp with Linen Shade for Bedroom", w: 999, h: 1500 },
  ],
  idea2: [
    { asin: "B0DC5FHJVG", title: "White Artificial Tulips, 20 Pack, 13 Inch Faux Flowers", w: 1368, h: 1269 },
    { asin: "B0HCMZLXV6", title: "CGBE Glass Bud Vase Set of 8, 3.9, 5.9 and 7.9 Inch", w: 1450, h: 1297 },
  ],
  idea3: [
    { asin: "B0D9Y3VMY8", title: "Decorative Coffee Table Books Set of 3, Mid Century Modern", w: 1500, h: 1497 },
    { asin: "B0DZ2CGDKP", title: "TwoDays Neutral Decorative Faux Books for Coffee Table and Shelves", w: 1277, h: 673 },
  ],
  idea4: [
    { asin: "B0GCFGS5QJ", title: "Lamisola 3.5 Inch Small Battery Desk Clock, Black", w: 1374, h: 1430 },
    { asin: "B0CL977PGG", title: "AYRELY 4.5 Inch Analog Retro Desk Alarm Clock", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0GNSH6LBJ", title: "Decorative Scalloped Tray, Travertine Stone Inspired Jewelry Tray", w: 1500, h: 1500 },
    { asin: "B0FL7GZ835", title: "YMXYJM Modern Decorative Tray for Coffee Table, 14 Inch, Beige Resin", w: 1500, h: 1128 },
  ],
  idea6: [
    { asin: "B07NPQTFDJ", title: "Radicaln Round White Marble Coasters, Set of 6 with Holder", w: 1500, h: 1084 },
    { asin: "B0C2DF42VV", title: "Leather Drink Coasters, Set of 6 with Holder", w: 1178, h: 1500 },
  ],
  idea7: [
    { asin: "B08Z2XRXH8", title: "Hopewood Small Faux Plant in Pot for Bathroom, Desk and Shelves", w: 1500, h: 1422 },
    { asin: "B0FXWC7V9Z", title: "Mkono Faux Hanging Plant with Ceramic Pot, 25 Inch", w: 888, h: 1500 },
  ],
  idea8: [
    { asin: "B0H49SKN59", title: "Decorative Storage Boxes with Lids, 2 Pack, Striped Organizer Bins", w: 1500, h: 1500 },
    { asin: "B0H6Q2KJ3V", title: "Decorative Storage Boxes with Lids, 2 Pack, Leather-Look Organizer Bins", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B0DZT736Q7", title: "Handmade Sandstone Geometric Knot Sculpture Decor", w: 1200, h: 1200 },
    { asin: "B0B6C1QS4Q", title: "prosfalt Thinker Statue Set of 3, Abstract Art Figurines, Black", w: 1500, h: 1097 },
  ],
  idea10: [
    { asin: "B0C84YJRCD", title: "SIKOO Vintage Wallet Size Picture Frames, 2.5 x 3.5 Inch, Tabletop", w: 1003, h: 1275 },
    { asin: "B06Y5VPSM6", title: "Artliving 4 Inch Black Iron Display Easels, Plate and Photo Stands", w: 1412, h: 1500 },
  ],
  idea11: [
    { asin: "B0843H1WDQ", title: "Stonebriar Unscented White Pillar Candles, 35 Hour Burn Time", w: 1455, h: 1500 },
    { asin: "B0FCXKSJQ3", title: "flamecan Ivory Taper Candles, Set of 40, 10 Inch, Unscented and Smokeless", w: 1457, h: 1432 },
  ],
  idea12: [
    { asin: "B0DCP5PF76", title: "Modern Geometric Round Gold Knot Sculpture for Tabletop Decor", w: 1500, h: 1298 },
    { asin: "B0GCBF37SM", title: "OAKOA Large Decorative Stone Fruit Bowl", w: 1500, h: 745 },
  ],
  idea13: [
    { asin: "B07ZVKBJJX", title: "RGB World Farmhouse Solid Wood Bead Garland with Tassels", w: 1368, h: 1500 },
    { asin: "B0798Q95QF", title: "Radicaln Marble Apple Paperweight Decoration Piece, 3 Inch", w: 1336, h: 1500 },
  ],
  idea14: [
    { asin: "B0F7HJ2Q9L", title: "DCMVJHZV Framed Black and White Zen Stones Wall Art", w: 1040, h: 1500 },
    { asin: "B0F53BP3R7", title: "Framed Coastal Beach Black and White Wall Art Set, 11 x 14 Inch", w: 1123, h: 1339 },
  ],
  idea15: [
    { asin: "B0BSXJQS9H", title: "EDHAS Hand Carved Mango Wood Decorative Pedestal Bowl", w: 1500, h: 745 },
    { asin: "B0GKYX5RGS", title: "10 Inch Speckled Ceramic Pedestal Bowl, Matte White", w: 1500, h: 809 },
  ],
  idea16: [
    { asin: "B0DYMXQ8S9", title: "Vanselia Large Textured Ceramic Flower Vase, Farmhouse Style", w: 1500, h: 1500 },
    { asin: "B0GVJHF55Y", title: "Boho Woven Cotton Coasters Set of 8 with Holder", w: 1500, h: 1368 },
  ],
  idea17: [
    { asin: "B0B76M4C8N", title: "TUTOTAK Set of 2 End Tables, 2-Tier Storage Shelf Side Tables", w: 1476, h: 1119 },
    { asin: "B0C4SZBN64", title: "PoKat 23 Inch Modern Ceramic Table Lamps, Set of 2, White", w: 1500, h: 1500 },
  ],
  idea18: [
    { asin: "B0BBMM4BGB", title: "Wooden Fall Block Sign Set, Vintage Farmhouse Harvest Table Decor", w: 1500, h: 738 },
    { asin: "B0D97ZQB83", title: "20 Bundles Realistic UV Resistant Artificial Flowers", w: 1500, h: 1500 },
  ],
  idea19: [
    { asin: "B0CF9K1NJM", title: "White Ceramic Heart Shaped Flower Vase, Set of 2", w: 1200, h: 1500 },
    { asin: "B0FB8TXDDH", title: "Clear Glass Bud Vase, 9.8 Inch Tall, Round Bottom", w: 259, h: 826 },
  ],
  mixedB: [
    { asin: "B0FNRCMQNJ", title: "Black 2-Tier Glass Side Table, Small End Table", w: 988, h: 1500 },
    { asin: "B0CMD3G76D", title: "White Ceramic Bird Figurines, Modern Small Animal Statues", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "side-table-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "side-table-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "side-table-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "A Statement Table Lamp That Anchors the Space",
    paras: [
      "Lighting changes the whole feel of a side table, and a table lamp makes the space feel intentional rather than bare.",
      "Choosing a lamp that contrasts the table's own material tends to look more considered than matching everything &mdash; a ceramic or metal lamp on a wood table, or a fabric or glass one on a metal table.",
      "A shade that fully hides the bulb, kept roughly proportional to the nearby seating, lets the lamp read as the tallest element on the table without overwhelming it.",
    ],
    photo: pinPhoto("statement-lamp.jpg", "Statement table lamp styled on a side table with layered decor", 577, 1024, "https://www.pinterest.com/pin/1337074890095567/", "Statement Table Lamp Styling", "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Florals That Feel Natural, Not Forced",
    paras: [
      "Fresh flowers almost always elevate a side table, but only when they feel effortless rather than arranged.",
      "A single stem or a loose, slightly undone arrangement tends to work better than a large bouquet, which can block sightlines and feel overly formal for a side table's scale.",
      "Faux florals hold up just as well, as long as they look realistic rather than shiny or stiff &mdash; one type of flower in a simple vase, with the stems given room to breathe, is usually enough.",
    ],
    photo: pinPhoto("florals.jpg", "White tulips in a vase styled on a glass side table with a framed photo", 735, 926, "https://www.pinterest.com/pin/20195898322913268/", "Florals on a Side Table", "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Layered Books With Personality",
    paras: [
      "Books are one of the most reliable side table additions there is &mdash; they add height, texture and personality almost instantly.",
      "Hardcovers with neutral spines or muted colors tend to layer best. Stacking two or three, then topping them with a small object &mdash; a candle, a sculptural piece, even a small bowl &mdash; finishes the look.",
      "The stack doesn't need to be perfectly even, either; a slightly uneven lean usually reads as more natural than a perfectly squared pile.",
    ],
    photo: pinPhoto("layered-books.jpg", "Stack of hardcover books topped with a small object on a side table", 683, 1024, "https://www.pinterest.com/pin/1337074890095567/", "Layered Books on a Side Table", "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "A Small Clock That Feels Decorative",
    paras: [
      "A clock doesn't have to feel old-fashioned to belong on a side table.",
      "A small, modern clock adds a bit of charm while still being genuinely useful &mdash; especially on a bedside or reading-area side table where checking the time matters.",
      "Placed among a few framed photos or a small lamp, it blends into the rest of the styling rather than standing out as purely functional.",
    ],
    photo: pinPhoto("small-clock.jpg", "Small decorative clock styled among framed photos on a side table", 564, 751, "https://www.pinterest.com/pin/1266706140911845/", "Small Decorative Clock on a Side Table", "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Decorative Trays That Create Order",
    paras: [
      "A tray acts like a visual container, grouping smaller items together and keeping a busy side table from looking cluttered.",
      "It's especially useful when several small objects need to share the same table &mdash; the tray signals to the eye that the grouping is intentional rather than accidental.",
      "Sticking to one tray per table, with the contents kept fairly minimal, keeps the whole arrangement feeling organized instead of crowded.",
    ],
    photo: pinPhoto("decorative-trays.jpg", "Decorative tray organizing small objects on a side table", 576, 1024, "https://www.pinterest.com/pin/10977592837194542/", "Decorative Tray on a Side Table", "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Accent Coasters That Feel Intentional",
    paras: [
      "Coasters matter more than most people give them credit for &mdash; nothing undercuts a styled table faster than a mismatched set tossed on top.",
      "Choosing coasters that fit the table's existing palette &mdash; stone, marble, leather or a woven material &mdash; keeps them looking elevated rather than like an afterthought.",
      "It's a small detail, but it's often exactly the kind of detail that separates a table that was actually styled from one that just happened.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Small Plants for a Fresh, Lived-In Look",
    paras: [
      "Plants bring real life into a space, and even a realistic faux version does the job just as well as a live one.",
      "A small potted plant or a bit of trailing greenery softens the hard edges of a side table and adds a sense of movement that purely decorative objects can't.",
      "It's an easy way to keep a table from feeling static, especially in a room that otherwise leans heavily on hard surfaces and straight lines.",
    ],
    photo: pinPhoto("small-plants.jpg", "Small potted plant styled on a side table for a fresh look", 450, 674, "https://www.pinterest.com/pin/10977592836856278/", "Small Plant on a Side Table", "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Stacked Boxes for Hidden Storage and Style",
    paras: [
      "Decorative boxes keep a side table from turning into a catch-all for remotes, chargers and the other small clutter of daily life.",
      "They give those items somewhere to live within arm's reach, without leaving them visible on top of the table.",
      "A box in leather, fabric or wood tends to look more polished than one that's purely plastic or purely functional in appearance.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Sculptural Objects That Add Interest",
    paras: [
      "A sculptural piece functions like miniature art, adding personality to a table without needing any explanation.",
      "Objects with real texture, curves or an unusual shape &mdash; a ceramic knot, a stone loop, an abstract figure &mdash; tend to hold interest better than something flat or purely decorative.",
      "One well-chosen sculptural object often does more for a table's personality than several smaller, less distinctive pieces combined.",
    ],
    photo: pinPhoto("sculptural-objects.jpg", "Sculptural decorative object styled on a side table", 736, 919, "https://www.pinterest.com/pin/7107311905724544/", "Sculptural Object on a Side Table", "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Personal Objects That Tell a Story",
    paras: [
      "This is where a side table starts to feel like it actually belongs to someone.",
      "A small framed photo, a travel souvenir or a handmade piece adds real personality, as long as it stays fairly subtle &mdash; one personal item per table reads as intentional, where ten starts to feel cluttered.",
      "Keeping it to a single meaningful piece lets that object actually stand out instead of getting lost among everything else.",
    ],
    photo: pinPhoto("personal-objects.jpg", "Personal framed photo and keepsakes styled on a side table", 683, 1024, "https://www.pinterest.com/pin/7810999347074500/", "Personal Objects on a Side Table", "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Candles for Warmth and Atmosphere",
    paras: [
      "Candles add instant warmth to a side table, and they work equally well lit or simply sitting there unlit during the day.",
      "Unscented candles tend to suit a shared living space better than a strongly scented one, since a bold fragrance can divide opinions fast in a room everyone uses.",
      "Varying the heights if using more than one, and sticking to a neutral color, keeps the grouping looking polished rather than random.",
    ],
    photo: pinPhoto("candles.jpg", "Candles styled on a side table for warm ambient lighting", 736, 921, "https://www.pinterest.com/pin/2955556000435737/", "Candles on a Side Table", "idea11"),
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Mixed Materials for Visual Depth",
    paras: [
      "Mixing materials keeps a side table visually interesting in a way that matching everything rarely achieves &mdash; wood with metal, glass with stone, ceramic with fabric.",
      "A wood table paired with metal decor, a glass table with ceramic pieces, or a stone table with soft textiles are all easy starting pairings.",
      "Avoiding a perfectly matched set is the real trick here &mdash; too much uniformity can feel stiff, while a little contrast gives the table real charm.",
    ],
    photo: pinPhoto("mixed-materials-a.jpg", "Mixed materials styled together on a side table for visual depth", 683, 1024, "https://www.pinterest.com/pin/68117013109254624/", "Mixed Materials on a Side Table", "idea12"),
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Natural Elements Like Stone or Wood",
    paras: [
      "Natural elements ground a space in a way that purely manufactured objects can't quite replicate.",
      "A small stone object or a wooden accent &mdash; a stone paperweight, a strand of wooden beads, a small piece of driftwood &mdash; adds texture almost instantly.",
      "Leaning toward slightly imperfect, organic pieces tends to feel warmer than something too smooth or too polished.",
    ],
    photo: photo("natural-elements.jpg", "Natural wood and stone decorative accents styled on a side table", 577, 1024, "idea13"),
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Framed Art Leaned Casually",
    paras: [
      "Not every piece of art needs to go on the wall. Leaning a framed piece on a side table adds personality without any real commitment.",
      "It's a particularly good approach for a rental, or for anyone who likes the flexibility of being able to rearrange things without patching a single nail hole.",
      "A black-and-white print tends to work especially well leaned this way, since it reads as intentional rather than like art that simply hasn't been hung yet.",
    ],
    photo: pinPhoto("framed-art.jpg", "Framed black and white art leaned casually on a side table", 736, 736, "https://www.pinterest.com/pin/350014202309287565/", "Framed Art Leaned on a Side Table", "idea14"),
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Decorative Bowls That Balance Style and Function",
    paras: [
      "A bowl does double duty on a side table &mdash; it looks good sitting there, and it quietly holds small items like keys, rings or a remote.",
      "A bowl with some texture &mdash; wood, ceramic, or stone &mdash; tends to add more visual depth than a plain glass or metal one.",
      "It's a small, practical addition that rarely draws attention to itself, which is exactly what makes it work so well alongside everything else on the table.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Layered Textures for Depth",
    paras: [
      "Texture does more visual work on a side table than color usually gets credit for.",
      "Mixing smooth with rough, matte with glossy, and soft with solid keeps the eye moving across the table rather than settling on one flat surface.",
      "A ceramic vase set next to a woven coaster is a simple example of how much contrast alone can add, without needing to change the color palette at all.",
    ],
    photo: pinPhoto("layered-textures.jpg", "Layered textures styled across a tiered side table with books and candles", 681, 1024, "https://www.pinterest.com/pin/87257311515018472/", "Layered Textures on a Side Table", "idea16"),
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Symmetry When You Want Calm",
    paras: [
      "Symmetry creates a genuine sense of balance, which makes it especially effective for a more formal space.",
      "Matching side tables, each styled with the same or a very similar arrangement, works particularly well flanking a sofa or a bed.",
      "Used thoughtfully, symmetry reads as calm and grounded rather than stiff &mdash; a good fit for a bedroom or living room that's meant to feel settled rather than eclectic.",
    ],
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Seasonal Swaps for Easy Refreshes",
    paras: [
      "Side table decor doesn't need a full overhaul every few months to feel current &mdash; swapping just one or two pieces is usually enough.",
      "Warmer tones in the fall, lighter materials in the spring, a different candle color or a seasonal bloom are all easy, low-effort updates.",
      "This keeps the table feeling fresh throughout the year without redecorating the whole room every time the season changes.",
    ],
    photo: pinPhoto("seasonal-swaps.jpg", "Side table styled with seasonal decor accents for an easy refresh", 683, 1024, "https://www.pinterest.com/pin/446067538116354438/", "Seasonal Swaps on a Side Table", "idea18"),
  },
  {
    n: "19",
    productsKey: "idea19",
    title: "Negative Space as a Design Choice",
    paras: [
      "Sometimes the best decor decision is simply less decor.",
      "Intentionally leaving part of a side table empty gives whatever is on it room to actually stand out, rather than competing with everything else nearby.",
      "A table that isn't trying to fill every available inch often reads as more confident and more considered than one that is.",
    ],
    photo: photo("negative-space.jpg", "Side table styled with intentional negative space around a few objects", 683, 1024, "idea19"),
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
<p>A side table rarely gets the same design attention as a coffee table or a dining table, but it does just as much to finish a room. It's small enough that even a modest styling effort shows, and flexible enough to carry books, a lamp, a plant, or a single meaningful object without looking overdone.</p>
<p>Most of the ideas here come down to a handful of repeatable habits: pick one focal point, layer in a bit of texture, and leave some space for the eye to rest. Done well, it looks effortless &mdash; even when it isn't.</p>
${photo("hero.jpg", "Round side table styled with books, an orchid and a black table lamp", 683, 1024, "hero")}

<h2>Choosing the Right Base</h2>
<p>The table itself sets the tone for everything placed on top of it. A glass or metal table leans modern and benefits from a bit of softening &mdash; fabric, greenery, something organic. A wood or vintage table already carries warmth, which leaves more room to play with contrast through sculptural or metallic pieces.</p>
${pinPhoto("intro-base.jpg", "Choosing the right side table base for a room's existing style", 683, 1024, "https://www.pinterest.com/pin/6825836929681992/", "Choosing a Side Table Base", "base")}

<h2>The One Styling Rule Worth Remembering</h2>
<p>Most well-styled side tables follow a loose version of the same formula: one tall element, one object with texture, and one small personal or sculptural piece. Height, texture and personality, each represented once, is usually enough &mdash; adding a fourth or fifth category is where a table starts tipping into clutter.</p>
${pinPhoto("intro-rule.jpg", "Side table styled following a simple height, texture and personality formula", 680, 1024, "https://www.pinterest.com/pin/56506170343746221/", "The Side Table Styling Rule", "rule")}

<h2>19 Side Table Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}
${pinPhoto("mixed-materials-b.jpg", "Second example of mixed materials styled on a side table", 735, 915, "https://www.pinterest.com/pin/551057704428859080/", "Mixed Materials on a Side Table", "mixedB")}

<h2>Final Thoughts</h2>
<p>None of these nineteen ideas require buying an entirely new side table to make a real difference. A stack of books, one good lamp, and a little restraint around how much actually makes it onto the surface will carry most of the look.</p>
<p>The tables that end up looking the most "designed" are usually the ones with the least on them &mdash; a reminder that a side table rewards editing just as much as it rewards decorating.</p>
`;

module.exports = { body };
