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

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-kitchen-decor-categories", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A kitchen doesn't need a full redecorate to feel like fall.</p>
<p>A handful of small category swaps &mdash; textiles, color, scent &mdash; cover most of the seasonal transformation.</p>
<p>These 15 categories are organized by what they actually change in the room, not by a specific product to hunt down.</p>
${photo("hero.png", "Cozy softly lit kitchen with warm fall-inspired decor", 1024, 1024)}

<h2>1. Seasonal Kitchen Towels</h2>
<p>A set of towels in a warm fall print or rust-toned solid is one of the cheapest, fastest swaps on this entire list.</p>
<p>This works as both decor and daily function, since the towels get used regardless.</p>
<p>Rotating in a new set takes seconds and instantly shifts the kitchen's color story.</p>
${photo("towels.png", "Fall-themed kitchen towels adding seasonal warmth", 574, 1024)}

<h2>2. Rust and Amber-Toned Dishware</h2>
<p>A few pieces of dishware in warm, earthy tones &mdash; displayed on open shelving or used for everyday meals &mdash; bring fall color into the kitchen without a full set replacement.</p>
<p>This doesn't require buying a whole new dinnerware set; a handful of accent pieces mixed with existing neutral dishware works just as well.</p>
<p>A durable, versatile addition that extends well beyond a single season.</p>
${photo("dishware.png", "Rust-colored dishware bringing autumn warmth to the kitchen", 574, 1024)}

<h2>3. Fall-Scented Candles</h2>
<p>Scent does as much for a seasonal mood as any visible decor change.</p>
<p>Warm notes &mdash; spice, amber, baked goods &mdash; read as fall without needing to look seasonal at all.</p>
<p>This is one of the cheapest items on the whole list, and one of the easiest to rotate out once the season changes.</p>
${photo("candles.png", "Fall-scented candles creating warm autumn ambiance", 574, 1024)}

<h2>4. Mini Faux Pumpkins</h2>
<p>A small cluster of faux pumpkins on a counter, windowsill or dining table adds an instant, recognizable seasonal touch.</p>
<p>Being faux means they last well beyond a single season and can be reused every year without any waste.</p>
<p>A low-cost, high-recognition category that works in nearly any kitchen style.</p>
${photo("mini-pumpkins.png", "Mini faux pumpkins styled as charming fall accents", 574, 1024)}

<h2>5. A Seasonal Table Runner</h2>
<p>A plaid or warm-toned table runner resets the whole dining area for very little cost.</p>
<p>This is one of the simplest swaps on this list &mdash; no installation, no commitment beyond laying it down.</p>
<p>Pairing it with the mini pumpkins above rounds out a simple table centerpiece.</p>

<h2>6. A Seasonal Mug Rack</h2>
<p>A wall-mounted mug rack adds both storage and display, doubling as function and decor.</p>
<p>Filled with mugs in warm, seasonal colors, it becomes a small styled moment on an otherwise plain wall.</p>
<p>A practical addition that doesn't need to be swapped out once the season ends.</p>
${photo("mug-rack.png", "Seasonal mug rack serving as functional kitchen decor", 574, 1024)}

<h2>7. An Autumn-Themed Kitchen Mat</h2>
<p>A standing mat in a fall print or warm tone adds comfort underfoot while also contributing to the room's seasonal color story.</p>
<p>This is a genuinely functional upgrade, not just a decorative one, for anyone who spends real time standing at the counter or sink.</p>
<p>Worth choosing a pattern subtle enough to work past the season if a full swap-out isn't practical.</p>
${photo("kitchen-mats.png", "Autumn-themed kitchen mat adding comfort and seasonal style", 574, 1024)}

<h2>8. Seasonal Baking Dishes</h2>
<p>A pumpkin-shaped or warm-toned baking dish does double duty as both a functional piece and a styled object when not in use.</p>
<p>This suits anyone who actually bakes regularly during the season, getting real use out of what would otherwise be a purely decorative purchase.</p>
<p>Worth choosing a piece versatile enough to use well past the fall months too.</p>

<h2>9. Seasonal Spoon Rests</h2>
<p>A small spoon rest in a fall motif is a tiny, low-cost detail that still gets noticed on a counter.</p>
<p>This solves a genuine daily function &mdash; somewhere for a used spoon or spatula to go &mdash; while adding a seasonal touch.</p>
<p>One of the smallest, cheapest categories on this entire list.</p>

<h2>10. A Rustic Wall Sign</h2>
<p>A simple wood or metal sign with a seasonal phrase adds personality to an empty kitchen wall.</p>
<p>This works well leaned on a shelf or counter too, not just mounted.</p>
<p>A low-commitment way to add character without a permanent installation.</p>
${photo("wall-signs.png", "Rustic wall sign adding charm to fall kitchen decor", 574, 1024)}

<h2>11. Framed Fall Prints</h2>
<p>A simply framed seasonal print or illustration adds color and warmth to a kitchen wall without looking overly literal or themed.</p>
<p>Choosing something subtle &mdash; a botanical print, an abstract piece in warm tones &mdash; keeps it from reading as a one-season-only decoration.</p>
<p>Worth prioritizing over a more obviously seasonal piece for something with longer visual staying power.</p>
${photo("framed-prints.png", "Framed fall-inspired art print adding warmth to the kitchen", 574, 1024)}

<h2>12. Seasonal Kitchen Utensils</h2>
<p>A set of utensils in a warm wood tone or seasonal color adds a small, functional detail that still gets noticed daily.</p>
<p>This works especially well displayed in a crock or holder on the counter, where it's visible rather than tucked in a drawer.</p>
<p>A practical, everyday category rather than a purely decorative one.</p>

<h2>13. Harvest-Toned Storage Jars</h2>
<p>A set of amber or warm-toned glass storage jars brings color to open shelving or a pantry while staying genuinely functional.</p>
<p>This works well for flour, sugar, pasta or any dry good already needing a container.</p>
<p>A category that earns its keep well beyond a single season.</p>

<h2>14. A Mini Fall Wreath</h2>
<p>A small wreath on a pantry door or cabinet front adds a seasonal touch to a spot that usually goes unstyled.</p>
<p>This works in a much smaller space than a front-door wreath, which makes it a good fit for a kitchen specifically.</p>
<p>A quick, low-cost way to extend seasonal styling past just the counters and table.</p>
${photo("mini-wreath.png", "Mini fall wreath decorating a pantry door", 574, 1024)}

<h2>15. Seasonal Garland</h2>
<p>A length of garland drapes easily along a shelf edge, a window, or above a doorway.</p>
<p>This is one of the more flexible categories on this list &mdash; it adapts to wherever the kitchen actually needs a bit more seasonal presence.</p>
<p>Easy to store and reuse year after year once the season wraps up.</p>
${photo("garland.png", "Seasonal garland draped elegantly in the kitchen", 574, 1024)}

<h2>Final Thoughts</h2>
<p>None of these 15 categories require a full kitchen overhaul.</p>
<p>A few towels, some candles and a bit of seasonal color on open shelving cover most of the transformation most people are after.</p>
<p>Pick two or three categories that fit the kitchen's actual layout, and build from there.</p>
<p>A cozy fall kitchen comes down to small, layered details, not one big purchase.</p>
`;

module.exports = { body };
