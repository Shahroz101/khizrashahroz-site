// Body content for "12 Console Table Styling Rules That Actually Work".
// Numbered idea-list format with a condensed intro covering the
// source's "golden rule" and "avoid clutter" sections, since both had
// photos. Topic heavily overlaps with the existing
// entryway-table-decor-ideas article (mirror, lighting, books,
// greenery, artwork, tray, personal pieces, height variation, symmetry/
// asymmetry, layering, seasonal updates all appear there too), so this
// one leans into the styling-process angle (the golden rule, how to
// avoid clutter, how to make it look expensive) rather than
// re-listing the same object vocabulary. Two images reused across two
// intro sections each, since the source itself reused the same photo
// file under two different captions/pins — downloaded once per
// section and credited each time, matching the site's existing
// reused-photo precedent. The source had six attributed quotes (Nate
// Berkus, Coco Chanel, Kelly Wearstler, Cicero, Steve Jobs, Jean-Louis
// Deniot) — all cut entirely per standing no-fabricated-quotes policy,
// not reproduced in any form. Rewritten from scratch in the site's
// calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DH29NGRG", title: "Besiost Small Farmhouse Wood Entryway Console Table with Storage", w: 1223, h: 1500 },
    { asin: "B0FZRBPQ82", title: "8 Inch Ceramic Decorative Bowl, Irregular Rim, Reactive Glaze", w: 1500, h: 1464 },
  ],
  oneRule: [
    { asin: "B0GM7B932J", title: "Farmhouse White Decorative Faux Books in Wooden Box", w: 1500, h: 1154 },
    { asin: "B0GCYHPZNK", title: "Large Neutral Ceramic Vase Set of 3", w: 1500, h: 1500 },
  ],
  clutterTrap: [
    { asin: "B0D83RKMPZ", title: "Modern Abstract Knot Sculpture, Resin Decor", w: 725, h: 1500 },
    { asin: "B09TRWSNHF", title: "Decorative Storage Box Set with Lids, 3 Piece", w: 881, h: 1131 },
  ],
  idea1: [
    { asin: "B0FD33NF9G", title: "30 Inch Round Gold Mirror, Brushed Gold Metal Frame", w: 1500, h: 1500 },
    { asin: "B0C52VNTJQ", title: "Micasso Vintage Gold Arched Mirror, 36 x 29, Baroque Antique Wall Mirror", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0GT8Z7Q2R", title: "PoKat 21 Inch Modern Ceramic Table Lamp, White", w: 1500, h: 1500 },
    { asin: "B0F8BB3KV2", title: "PoKat 20.75 Inch Small Modern Ceramic Table Lamps, Set of 2, White", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0HCCBJQYB", title: "Decorative Books, Set of 3, Fake Coffee Table Books", w: 1500, h: 1500 },
    { asin: "B0H3HTM1VS", title: "Oversized Decorative Coffee Table Books, Set of 3, Earth Tones", w: 1362, h: 1500 },
  ],
  idea4: [
    { asin: "B07R21HCMT", title: "SHACOS Artificial Olive Branches, 28 Inch, 4 Piece", w: 1500, h: 1412 },
    { asin: "B0DYJK61ZZ", title: "Mini Artificial Potted Plants, 2 Pack", w: 1500, h: 1491 },
  ],
  idea5: [
    { asin: "B0GRGPV3Q2", title: "Framed Sage Green Botanical Leaf Canvas Wall Art", w: 1146, h: 1500 },
    { asin: "B0H8DPM6VQ", title: "MueyHel Neutral Botanical Flower Wall Art, Set of 3, Wood Framed, 12 x 16", w: 1482, h: 953 },
  ],
  idea6: [
    { asin: "B0DMVQW65C", title: "Oval Concrete Coffee Table Tray, 13 Inch, Cream Gray", w: 1500, h: 1500 },
    { asin: "B0BVBBQFF7", title: "Round Rattan Serving Trays with Handles, Hand Woven, 2 Pack", w: 1371, h: 1335 },
  ],
  idea7: [
    { asin: "B0C6JTS174", title: "upsimples 5x7 Picture Frame Set of 10", w: 1500, h: 1437 },
    { asin: "B0DFWKK5S5", title: "DRASTAR Large Acacia Wooden Keepsake Box with Hinged Lid", w: 1438, h: 1500 },
  ],
  idea8: [
    { asin: "B0GYR7J5Z1", title: "23.6 Inch White and Gold Resin Floor Vase for Dried Pampas Grass", w: 1500, h: 1500 },
    { asin: "B0H7C1WQ4H", title: "Mid-Century Modern Wood Pillar Candle Holder, Brown", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B0FV4B9KMZ", title: "Reaketon 20.5 Inch Modern Ceramic Table Lamps, Set of 2, Dark Blue", w: 1500, h: 1500 },
    { asin: "B0GKZT991X", title: "Vintage Brass Cast Iron Taper Candlestick Holders", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0HD8GJZM1", title: "Modern Organic Ceramic Vase, Wide Opening, Sculptural", w: 1500, h: 1500 },
    { asin: "B0BSXJQS9H", title: "EDHAS Hand-Carved Mango Wood Decorative Bowl", w: 1500, h: 745 },
  ],
  idea11: [
    { asin: "B0BRNPGSRG", title: "Decorative Wood Pedestal Riser for Display, 12 x 9 x 5.5 Inch", w: 1394, h: 1500 },
    { asin: "B0CJDX7SYT", title: "Vintage Eclectic Wall Art Prints, Set of 9, Matisse and William Morris", w: 1082, h: 706 },
  ],
  idea12: [
    { asin: "B0GDTFFKYC", title: "lovemoon Mixed Eucalyptus Stems, 130 Piece", w: 1500, h: 1500 },
    { asin: "B08GKBFV2Q", title: "DearHouse Fall Maple Leaf Garland, 5.9 ft, 2 Pack", w: 1085, h: 1467 },
  ],
  expensive: [
    { asin: "B0DXM5MKD5", title: "Cork and Mill Marble and Wood Decorative Knot", w: 1500, h: 1249 },
    { asin: "B0GS4W63HS", title: "GUSFREUD 3D Brass Resin Hummingbird Wall Decor Set", w: 1130, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "console-table-styling-rules-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "console-table-styling-rules", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "console-table-styling-rules", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A console table is one of the easiest surfaces in a home to get wrong.</p>
<p>Too empty, and it looks unfinished. Too full, and it looks like a catch-all.</p>
<p>The twelve ideas below work, but only when they're applied through a couple of simple rules first.</p>
<p>Those rules matter more than any single object on the list.</p>
${photo("hero.jpg", "Vintage-style console table styled with a mirror, lamp and small bowl", 1400, 935, "hero")}

<h2>The One Rule Behind Every Good Console Table</h2>
<p>Scale and restraint beat quantity, every time.</p>
<p>A console table isn't a shelf for overflow &mdash; it's a curated surface, closer to a gallery pedestal than a junk drawer.</p>
<p>Three to five objects, each with its own reason for being there, consistently outperforms a table covered edge to edge.</p>
<p>Everything placed on it should earn its spot.</p>
${pinPhoto("intro-why-matters.jpg", "Console table styled thoughtfully with a few curated objects", 683, 1024, "https://www.pinterest.com/pin/223350462765020262/", "thoughtfully styled console table", "oneRule")}

<h2>Avoiding the Clutter Trap</h2>
<p>Clutter on a console table rarely happens all at once &mdash; it builds up one small addition at a time.</p>
<p>A useful check: if an object doesn't add height, texture or a focal point, it's probably filler.</p>
<p>Grouping in odd numbers (threes work especially well) tends to look more natural than pairs or even rows.</p>
<p>Leaving visible empty space on the table is a deliberate choice, not a sign something's missing.</p>
${pinPhoto("intro-golden-rule.jpg", "Console table kept simple and uncluttered with intentional negative space", 559, 1024, "https://www.pinterest.com/pin/153685406030264752/", "uncluttered console styling", "clutterTrap")}

<h2>1. A Statement Mirror</h2>
<p>A mirror above a console table does double duty &mdash; it anchors the wall and bounces light back into the room.</p>
<p>An oversized or uniquely shaped mirror reads as the clear focal point, which frees up the table below to stay simpler.</p>
<p>This works especially well in a hallway or entry with limited natural light.</p>
<p>Once the mirror is in place, everything else on the table becomes supporting detail.</p>
${pinPhoto("statement-mirror.jpg", "Large statement mirror hung above a styled console table", 683, 1024, "https://www.pinterest.com/pin/951033646328971162/", "statement mirror above console", "idea1")}

<h2>2. A Lamp for Warmth</h2>
<p>Overhead lighting alone tends to leave a console table looking flat.</p>
<p>A table lamp adds warmth at a human height, especially in the evening when overhead lights feel harsh.</p>
<p>It also adds genuine height variation without needing another tall decorative object.</p>
<p>A lamp earns its spot on nearly every console table, functional or purely decorative.</p>
${pinPhoto("lighting.jpg", "Console table styled with a warm table lamp for ambient lighting", 576, 1024, "https://www.pinterest.com/pin/633387444386469/", "console table lamp styling", "idea2")}

<h2>3. A Small, Curated Book Stack</h2>
<p>Books add color, texture and a bit of personality that most other objects can't match.</p>
<p>A stack of two or three, chosen for their spines rather than grabbed at random, reads as intentional.</p>
<p>Topping the stack with a small object adds a natural finishing touch.</p>
<p>This works whether the books actually get read or simply looked at.</p>
${pinPhoto("styled-books.jpg", "Stack of curated books styled on a console table surface", 687, 1024, "https://www.pinterest.com/pin/295900638041994664/", "curated book stack styling", "idea3")}

<h2>4. A Touch of Greenery</h2>
<p>A console table without a single plant or stem tends to feel sterile.</p>
<p>Real or faux both work &mdash; what matters is scale and placement, not which one it is.</p>
<p>A tall stem adds height on one side; a low, compact plant softens a corner.</p>
<p>Greenery is one of the easiest additions to swap out without disturbing anything else on the table.</p>
${photo("greenery.jpg", "Console table decorated with a small potted plant for natural texture", 607, 1024, "idea4")}

<h2>5. One Piece of Artwork</h2>
<p>A single framed piece leaned against the wall behind the console adds personality without needing to be mounted.</p>
<p>It also gives the eye somewhere to land that isn't the mirror or the tabletop itself.</p>
<p>Leaning, rather than hanging, keeps the look casual and easy to change later.</p>
<p>This works especially well paired with a smaller or lower mirror.</p>
${pinPhoto("artwork.jpg", "Framed artwork leaning against the wall behind a styled console table", 687, 1024, "https://www.pinterest.com/pin/1097963584190120131/", "leaning artwork console styling", "idea5")}

<h2>6. A Decorative Tray for Structure</h2>
<p>A tray groups smaller items into one visual unit instead of letting them scatter across the surface.</p>
<p>It also protects the table finish from keys, mail or anything else that lands there daily.</p>
<p>Wood, metal or woven materials all work, depending on the table's overall style.</p>
<p>This is one of the simplest ways to make a functional catch-all spot still look styled.</p>
${pinPhoto("decorative-tray.jpg", "Decorative tray organizing small objects on a console table", 736, 981, "https://www.pinterest.com/pin/273101164901750673/", "decorative tray styling", "idea6")}

<h2>7. A Few Personal Pieces</h2>
<p>A photo, a travel memento, or a meaningful small object keeps a console table from feeling like a showroom display.</p>
<p>The key word is a few &mdash; one or two personal pieces add warmth, five or six start to look cluttered.</p>
<p>Editing down to the most meaningful items is harder than adding more, but it pays off visually.</p>
<p>This is what makes a styled table feel like it actually belongs to someone.</p>
${pinPhoto("personal-pieces.jpg", "Personal decorative objects and mementos styled on a console table", 1024, 1024, "https://www.pinterest.com/pin/4592123627179234432/", "personal object styling", "idea7")}

<h2>8. Deliberate Height Variation</h2>
<p>A row of same-height objects reads as flat, no matter how nice each piece is individually.</p>
<p>One tall item, one medium, one low accent creates a visual rhythm the eye naturally follows.</p>
<p>This principle applies whether the table is styled with three objects or eight.</p>
<p>It's one of the fastest ways to make an existing arrangement look more intentional without buying anything new.</p>
${pinPhoto("height-variation.jpg", "Console table styled with varied heights for visual interest", 576, 1024, "https://www.pinterest.com/pin/1097822846695109981/", "height variation styling", "idea8")}

<h2>9. Symmetry for a Clean Look</h2>
<p>Matching lamps, vases or candlesticks placed in mirrored pairs reads as calm and formal.</p>
<p>This suits a more traditional or classic home, where balance matters more than spontaneity.</p>
<p>Symmetry is also one of the easiest styling approaches to execute without much trial and error.</p>
<p>It's a dependable default when nothing else on this list feels like the right fit.</p>
${pinPhoto("symmetry.jpg", "Symmetrically styled console table with matching decorative objects", 768, 1024, "https://www.pinterest.com/pin/12314598977192123/", "symmetrical console styling", "idea9")}

<h2>10. Asymmetry for a Relaxed Feel</h2>
<p>An off-center arrangement feels more collected and less staged than a perfectly mirrored one.</p>
<p>This suits a more eclectic or lived-in home, where the goal isn't formal balance.</p>
<p>Asymmetry still needs visual weight distributed across the table &mdash; one side can't be completely empty.</p>
<p>It takes a bit more trial and error to get right than symmetry does, but it tends to feel more personal once it lands.</p>
${pinPhoto("asymmetry.jpg", "Asymmetrically styled console table with relaxed, collected decor", 683, 1024, "https://www.pinterest.com/pin/37928821858795927/", "asymmetrical console styling", "idea10")}

<h2>11. Layering for Depth</h2>
<p>Placing objects at different depths &mdash; not just different heights &mdash; adds dimension a flat row can't achieve.</p>
<p>A taller piece in back, something mid-sized slightly forward, and a small accent in front of that.</p>
<p>This technique works well combined with either the symmetrical or asymmetrical approach above.</p>
<p>It's a small adjustment that makes an already-decent arrangement look noticeably more considered.</p>
${pinPhoto("layered-depth.jpg", "Console table styled with layered objects at varying depths", 683, 1024, "https://www.pinterest.com/pin/1067423549198505024/", "layered depth styling", "idea11")}

<h2>12. Updating It Seasonally</h2>
<p>A console table doesn't need to stay static year-round.</p>
<p>Swapping a few key pieces &mdash; a seasonal stem, a different-colored object, a holiday accent &mdash; keeps the space feeling current without a full restyle.</p>
<p>Keeping the base layer (tray, lamp, mirror) constant and rotating just the smaller accents makes seasonal updates quick.</p>
<p>This is the easiest way to get more visual mileage out of a table that's already working.</p>
${pinPhoto("seasonal-update-1.jpg", "Console table styled for a seasonal refresh with new accent pieces", 575, 1024, "https://www.pinterest.com/pin/844493675995992/", "seasonal console refresh")}
${pinPhoto("seasonal-update-2.jpg", "Seasonal accents added to an existing console table arrangement", 885, 1327, "https://www.pinterest.com/pin/844493675995992/", "seasonal accent styling", "idea12")}

<h2>Making It Look More Expensive</h2>
<p>A higher-end look usually comes down to fewer, better-chosen pieces rather than a bigger budget.</p>
<p>Repeating one or two materials &mdash; the same metal finish, the same wood tone &mdash; across several objects reads as cohesive and considered.</p>
<p>Negative space is doing more work than most people give it credit for; a table that isn't crammed automatically looks more expensive.</p>
<p>The cheapest upgrade on this entire list is simply taking something off the table, not adding something new to it.</p>
${pinPhoto("expensive-look.jpg", "Console table styled with a cohesive, elevated look using fewer pieces", 683, 1024, "https://www.pinterest.com/pin/575968239864549539/", "elevated console styling", "expensive")}

<h2>Final Thoughts</h2>
<p>None of these twelve ideas work in isolation from the two rules at the top.</p>
<p>Scale, restraint and intentional negative space matter more than which specific objects end up on the table.</p>
<p>Start with the rule, then pick two or three ideas from the list that actually fit the space.</p>
<p>A console table that looks put-together usually has less on it, not more.</p>
`;

module.exports = { body };
