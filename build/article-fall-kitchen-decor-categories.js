// Body content for "15 Fall Kitchen Decor Categories Worth Adding
// This Season". Source was an Amazon shopping roundup naming specific
// branded products (DII towels, UPware/Gibson Elite dishware, Mrs.
// Meyer's/Village Candle, Staub baking dish, etc.) — the same
// structural issue as the home-office-desk-budget-tiers and
// affordable-fall-decor sources handled earlier this session. Per the
// established precedent, rewritten around generic categories instead
// of specific named products, since availability and pricing can't be
// verified. Only the local lifestyle photos (hosted on the source
// site) were used; the embedded Amazon product images were skipped
// entirely, both because they're not something to rehost and because
// this rewrite doesn't name the specific products they depicted.
// Categories 5, 8, 9, 12 and 13 had no local lifestyle photo in the
// source (only an Amazon product image), kept text-only to match.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0H41SRGMH", title: "Fall Kitchen Decor Set, 10 Pcs, Hello Pumpkin Mats, Towels, Oven Mitts and Pot Holders", w: 1500, h: 1481 },
    { asin: "B0D9YMMQGG", title: "Fall Pumpkin Kitchen Towels and Dishcloths, Set of 2", w: 1500, h: 1212 },
  ],
  idea1: [
    { asin: "B0C1YQZHBP", title: "Artoid Mode Orange Hello Pumpkin Fall Kitchen Towels, Set of 4, 18 x 26 Inch", w: 739, h: 1121 },
    { asin: "B0BV9G1DQR", title: "Homaxy 100% Cotton Waffle Weave Kitchen Dish Towels, 4 Pack, Rust", w: 1500, h: 1383 },
  ],
  idea2: [
    { asin: "B0C1K36J47", title: "LEHAHA Rustic Farmhouse Melamine Dinner Plates, Set of 6, 11 Inch", w: 1500, h: 1422 },
    { asin: "B0H2NL3B6L", title: "Gibson Elite Maple Grove 4-Piece Stoneware Nesting Bowl Set", w: 1500, h: 785 },
  ],
  idea3: [
    { asin: "B0F3DRTCB2", title: "Yankee Candle Spiced Pumpkin Scented Candle, 22 oz Large Jar", w: 809, h: 1500 },
    { asin: "B0FQHC32J2", title: "GIVAMEIHF 8 oz Amber Glass Jars with Lids, 3 Pack", w: 1500, h: 666 },
  ],
  idea4: [
    { asin: "B0CQKZ4CCB", title: "Realistic Mini Pumpkin Decor with Maple Leaves, 16 Pcs", w: 1500, h: 1255 },
    { asin: "B0H9QPZVBD", title: "Velvet Pumpkin Fall Decor Set, 36 Pcs, 3.9 Inch", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0F8HYS7F8", title: "AQOTHES Plaid Fall Table Runners, Rust Orange, 72 Inches Long", w: 1500, h: 1500 },
    { asin: "B0C7KSGVRM", title: "Terracotta Cheesecloth Table Runner for Fall, 120 Inch", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0FT8FWYTJ", title: "2-in-1 Wall Mounted Coffee Cup Holder with 16 Adjustable Hooks", w: 744, h: 1461 },
    { asin: "B0CTHH2Q13", title: "Mkono Wall Mounted Mug Holder, Coffee Cup Rack with 5 Hooks", w: 1500, h: 621 },
  ],
  idea7: [
    { asin: "B0C369SVQH", title: "Artoid Mode Orange Hello Pumpkin Fall Kitchen Mats, Set of 2", w: 1144, h: 886 },
    { asin: "B0FBRG2B5B", title: "SHACOS Fall Anti Fatigue Kitchen Mats, Orange Maple and Acorn, Set of 2", w: 1500, h: 1211 },
  ],
  idea8: [
    { asin: "B0H8DKL5FD", title: "Orange Pumpkin Ceramic Casserole Dish with Lid and Dual Handles", w: 1500, h: 1277 },
    { asin: "B0BM4C8P6Z", title: "MALACASA Ceramic Baking Dishes for Oven, Set of 4, Orange", w: 1500, h: 1241 },
  ],
  idea9: [
    { asin: "B0FH62T3DW", title: "Ceramic Pumpkin Spoon Rest for Stove Top and Kitchen Counter", w: 1477, h: 1500 },
    { asin: "B0GZ32G3N8", title: "Honeydak Ceramic Pumpkin Spoon Rest for Kitchen Counter", w: 1467, h: 1500 },
  ],
  idea10: [
    { asin: "B0FMRSN9Y9", title: "Vintage Fall Leaves Tabletop Sign Decoration for Mantel and Shelf", w: 1500, h: 1175 },
    { asin: "B0F9KVZM1M", title: "IARTTOP Fall Harvest Blessings Maple Leaf Pie Wooden Hanging Sign", w: 1117, h: 1500 },
  ],
  idea11: [
    { asin: "B0H4Z916CP", title: "Vintage Autumn Gallery Wall Art Prints, 12 Pcs, Unframed", w: 1500, h: 1427 },
    { asin: "B0HGS3R3XL", title: "SQGGZH Vintage Fall Gallery Wall Art Set of 9, Autumn Landscapes, Unframed", w: 1500, h: 1474 },
  ],
  idea12: [
    { asin: "B0BBGQ2GLZ", title: "Teak Wooden Spoons for Cooking, 10 Pcs, Non-Toxic Kitchen Utensils Set", w: 1500, h: 1500 },
    { asin: "B0F87M2WNR", title: "Acacia Wood Cooking Utensil Set, 10 Pieces, Wooden Spoons", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0H4ZQCG6P", title: "Suclain Vintage Glass Canisters with Lids, 5 Pcs, Brown", w: 1330, h: 1500 },
    { asin: "B093D15VXL", title: "eleganttime Amber Glass Mason Jars, 32 oz, Wide Mouth, 6 Pack", w: 1500, h: 1417 },
  ],
  idea14: [
    { asin: "B0H2VLCWVW", title: "Small Mini Fall Eucalyptus Wreaths for Kitchen Cabinet, 2 Pcs", w: 1500, h: 1500 },
    { asin: "B0F371DR5R", title: "Small Mini Fall Candle Ring Wreaths for Kitchen Cabinet, 2 Pack", w: 1500, h: 1500 },
  ],
  idea15: [
    { asin: "B0D3PP8F9C", title: "CQURE Fall Leaf Garland, 9 Pack, 53.1 ft Total, Artificial Autumn Vines", w: 1500, h: 1500 },
    { asin: "B0H28L8TN6", title: "Fall Leaves Garland for Mantle, Thanksgiving Autumn Decoration", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "fall-kitchen-decor-categories-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "fall-kitchen-decor-categories", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A kitchen doesn't need a full redecorate to feel like fall.</p>
<p>A handful of small category swaps &mdash; textiles, color, scent &mdash; cover most of the seasonal transformation.</p>
<p>These 15 categories are organized by what they actually change in the room, not by a specific product to hunt down.</p>
${photo("hero.png", "Cozy softly lit kitchen with warm fall-inspired decor", 1024, 1024, "hero")}

<h2>1. Seasonal Kitchen Towels</h2>
<p>A set of towels in a warm fall print or rust-toned solid is one of the cheapest, fastest swaps on this entire list.</p>
<p>This works as both decor and daily function, since the towels get used regardless.</p>
<p>Rotating in a new set takes seconds and instantly shifts the kitchen's color story.</p>
${photo("towels.png", "Fall-themed kitchen towels adding seasonal warmth", 574, 1024, "idea1")}

<h2>2. Rust and Amber-Toned Dishware</h2>
<p>A few pieces of dishware in warm, earthy tones &mdash; displayed on open shelving or used for everyday meals &mdash; bring fall color into the kitchen without a full set replacement.</p>
<p>This doesn't require buying a whole new dinnerware set; a handful of accent pieces mixed with existing neutral dishware works just as well.</p>
<p>A durable, versatile addition that extends well beyond a single season.</p>
${photo("dishware.png", "Rust-colored dishware bringing autumn warmth to the kitchen", 574, 1024, "idea2")}

<h2>3. Fall-Scented Candles</h2>
<p>Scent does as much for a seasonal mood as any visible decor change.</p>
<p>Warm notes &mdash; spice, amber, baked goods &mdash; read as fall without needing to look seasonal at all.</p>
<p>This is one of the cheapest items on the whole list, and one of the easiest to rotate out once the season changes.</p>
${photo("candles.png", "Fall-scented candles creating warm autumn ambiance", 574, 1024, "idea3")}

<h2>4. Mini Faux Pumpkins</h2>
<p>A small cluster of faux pumpkins on a counter, windowsill or dining table adds an instant, recognizable seasonal touch.</p>
<p>Being faux means they last well beyond a single season and can be reused every year without any waste.</p>
<p>A low-cost, high-recognition category that works in nearly any kitchen style.</p>
${photo("mini-pumpkins.png", "Mini faux pumpkins styled as charming fall accents", 574, 1024, "idea4")}

<h2>5. A Seasonal Table Runner</h2>
<p>A plaid or warm-toned table runner resets the whole dining area for very little cost.</p>
<p>This is one of the simplest swaps on this list &mdash; no installation, no commitment beyond laying it down.</p>
<p>Pairing it with the mini pumpkins above rounds out a simple table centerpiece.</p>
${productGrid("idea5")}

<h2>6. A Seasonal Mug Rack</h2>
<p>A wall-mounted mug rack adds both storage and display, doubling as function and decor.</p>
<p>Filled with mugs in warm, seasonal colors, it becomes a small styled moment on an otherwise plain wall.</p>
<p>A practical addition that doesn't need to be swapped out once the season ends.</p>
${photo("mug-rack.png", "Seasonal mug rack serving as functional kitchen decor", 574, 1024, "idea6")}

<h2>7. An Autumn-Themed Kitchen Mat</h2>
<p>A standing mat in a fall print or warm tone adds comfort underfoot while also contributing to the room's seasonal color story.</p>
<p>This is a genuinely functional upgrade, not just a decorative one, for anyone who spends real time standing at the counter or sink.</p>
<p>Worth choosing a pattern subtle enough to work past the season if a full swap-out isn't practical.</p>
${photo("kitchen-mats.png", "Autumn-themed kitchen mat adding comfort and seasonal style", 574, 1024, "idea7")}

<h2>8. Seasonal Baking Dishes</h2>
<p>A pumpkin-shaped or warm-toned baking dish does double duty as both a functional piece and a styled object when not in use.</p>
<p>This suits anyone who actually bakes regularly during the season, getting real use out of what would otherwise be a purely decorative purchase.</p>
<p>Worth choosing a piece versatile enough to use well past the fall months too.</p>
${productGrid("idea8")}

<h2>9. Seasonal Spoon Rests</h2>
<p>A small spoon rest in a fall motif is a tiny, low-cost detail that still gets noticed on a counter.</p>
<p>This solves a genuine daily function &mdash; somewhere for a used spoon or spatula to go &mdash; while adding a seasonal touch.</p>
<p>One of the smallest, cheapest categories on this entire list.</p>
${productGrid("idea9")}

<h2>10. A Rustic Wall Sign</h2>
<p>A simple wood or metal sign with a seasonal phrase adds personality to an empty kitchen wall.</p>
<p>This works well leaned on a shelf or counter too, not just mounted.</p>
<p>A low-commitment way to add character without a permanent installation.</p>
${photo("wall-signs.png", "Rustic wall sign adding charm to fall kitchen decor", 574, 1024, "idea10")}

<h2>11. Framed Fall Prints</h2>
<p>A simply framed seasonal print or illustration adds color and warmth to a kitchen wall without looking overly literal or themed.</p>
<p>Choosing something subtle &mdash; a botanical print, an abstract piece in warm tones &mdash; keeps it from reading as a one-season-only decoration.</p>
<p>Worth prioritizing over a more obviously seasonal piece for something with longer visual staying power.</p>
${photo("framed-prints.png", "Framed fall-inspired art print adding warmth to the kitchen", 574, 1024, "idea11")}

<h2>12. Seasonal Kitchen Utensils</h2>
<p>A set of utensils in a warm wood tone or seasonal color adds a small, functional detail that still gets noticed daily.</p>
<p>This works especially well displayed in a crock or holder on the counter, where it's visible rather than tucked in a drawer.</p>
<p>A practical, everyday category rather than a purely decorative one.</p>
${productGrid("idea12")}

<h2>13. Harvest-Toned Storage Jars</h2>
<p>A set of amber or warm-toned glass storage jars brings color to open shelving or a pantry while staying genuinely functional.</p>
<p>This works well for flour, sugar, pasta or any dry good already needing a container.</p>
<p>A category that earns its keep well beyond a single season.</p>
${productGrid("idea13")}

<h2>14. A Mini Fall Wreath</h2>
<p>A small wreath on a pantry door or cabinet front adds a seasonal touch to a spot that usually goes unstyled.</p>
<p>This works in a much smaller space than a front-door wreath, which makes it a good fit for a kitchen specifically.</p>
<p>A quick, low-cost way to extend seasonal styling past just the counters and table.</p>
${photo("mini-wreath.png", "Mini fall wreath decorating a pantry door", 574, 1024, "idea14")}

<h2>15. Seasonal Garland</h2>
<p>A length of garland drapes easily along a shelf edge, a window, or above a doorway.</p>
<p>This is one of the more flexible categories on this list &mdash; it adapts to wherever the kitchen actually needs a bit more seasonal presence.</p>
<p>Easy to store and reuse year after year once the season wraps up.</p>
${photo("garland.png", "Seasonal garland draped elegantly in the kitchen", 574, 1024, "idea15")}

<h2>Final Thoughts</h2>
<p>None of these 15 categories require a full kitchen overhaul.</p>
<p>A few towels, some candles and a bit of seasonal color on open shelving cover most of the transformation most people are after.</p>
<p>Pick two or three categories that fit the kitchen's actual layout, and build from there.</p>
<p>A cozy fall kitchen comes down to small, layered details, not one big purchase.</p>
`;

module.exports = { body };
