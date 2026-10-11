// Body content for "15 Above-Fireplace Ideas Built Around Scale and
// Proportion". Numbered idea-list format with a condensed intro
// covering the source's "why it matters" and "common mistakes"
// sections, since both had their own photo. Topic heavily overlaps
// with the existing mantel-decor-ideas article (mirror, layered
// artwork, symmetry, sculptural decor, TV above the mantel all appear
// there too), so this one leans into the scale/proportion decision
// framework the other doesn't cover, rather than re-listing the same
// object vocabulary. Ideas 4, 11 and 13 had no source photo, kept
// text-only to match. Two idea photos (oversized artwork, slimline
// mirror) had no Pinterest pin in the source, left uncredited to
// match. The source had two misattributed/fabricated designer quotes
// (Emily Henderson, Studio McGee) — cut entirely per standing policy,
// not reproduced in any form. Rewritten from scratch in the site's
// calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0H6XB11Y8", title: "WallBeyond 24 Inch Gold Round Wall Mirror, Circle Mirror with Bamboo Texture", w: 1350, h: 1500 },
    { asin: "B0G488L12Q", title: "Rustic Round Wall Mirror 30 Inch, Natural Wood Frame with Black Metal Trim", w: 1392, h: 1384 },
  ],
  mistakes: [
    { asin: "B0F1FP71M1", title: "InSimSea Framed Canvas Wall Art, Fall Trees Forest Wall Decor, 12x16 Inch", w: 1487, h: 1073 },
    { asin: "B086HK2Z27", title: "Renditions Gallery Canvas Nature Wall Art, Secretive Forest Path, 24\"x36\"", w: 1500, h: 1500 },
  ],
  artwork: [
    { asin: "B0DHNZ6FWZ", title: "Large Framed Boho Black White Abstract Wall Art for Living Room, 24x36 In", w: 1500, h: 1500 },
    { asin: "B0G3879W1B", title: "Blue White and Gray Abstract Canvas Wall Art, Framed Large Print, 20x40", w: 1500, h: 1115 },
  ],
  shelf: [
    { asin: "B0CNYCKWBD", title: "PHPH Wood Floating Shelves for Wall, Set of 6, Light Brown, 17 Inch", w: 1124, h: 1500 },
    { asin: "B0H8SV3MDL", title: "Cedar Root Wood Floating Shelves, Live Edge Wall Shelves, Set of 2", w: 1500, h: 1500 },
  ],
  mirror: [
    { asin: "B0BQGC76VX", title: "Delma Irregular Wall Mirror, 32\"x14\" Slim Vertical Wavy Design", w: 1500, h: 1500 },
    { asin: "B0H6MCD5V6", title: "Round Wood Mirror, 22\" Circle Mirror with Wooden Frame, Walnut Brown", w: 1500, h: 1500 },
  ],
  builtin: [
    { asin: "B0H2B1FN5T", title: "3 Tier Wall Shelf, Decorative Floating Shelves for Wall Decor, Modern, Black", w: 1500, h: 1500 },
    { asin: "B0C2P8R6Z8", title: "Bestier 3 Tier Industrial Pipe Shelving, Floating Book Shelves for Wall", w: 1500, h: 1500 },
  ],
  tv: [
    { asin: "B0CLYTQ5YT", title: "Gatsby Gold 3\" Deco TV Frame for Samsung The Frame/Pro TVs", w: 1448, h: 1500 },
    { asin: "B0H1Q8QTHC", title: "Vintage Mountain Oil Painting Art Indoor TV Cover, Elastic TV Screen Protector", w: 1500, h: 896 },
  ],
  panels: [
    { asin: "B0GY8BHBNK", title: "Geelin Peel and Stick PVC Wood Slat Wall Panel Decor 118\" x 15.75\", Oak", w: 1500, h: 1500 },
    { asin: "B0CP4FQV8M", title: "ZETY HOME Acoustic Wood Wall Panels, Slat 4-Pack, 94.5 in, Oak", w: 1500, h: 1483 },
  ],
  sculptural: [
    { asin: "B0F4QH3518", title: "10\" Modern Abstract Ribbon Decorative Sculpture, Knot Sculpture, Home Decor", w: 750, h: 1500 },
    { asin: "B0F7FVYSS4", title: "Gold Leaf Home Decor Set, Metal Leaves Statues, Modern Artistic Sculptures", w: 1131, h: 985 },
  ],
  stone: [
    { asin: "B08ZVN5GYW", title: "3D Faux Stone Wall Panels, Wild Boulder, Pack of 10, Covers 28.86 Sq Ft", w: 1500, h: 1323 },
    { asin: "B0B35ZN7VS", title: "20PCS 3D Wall Panels Peel and Stick Foam Brick Wallpaper, Faux Stone", w: 1477, h: 1426 },
  ],
  layered: [
    { asin: "B0H2M495LY", title: "Pillar Candle Holder Set of 2, Vintage Hurricane Candle Holders", w: 1500, h: 1500 },
    { asin: "B0H2HGL819", title: "Glasseam Hurricane Glass Candle Holders, 6 Pcs Amber Ribbed Flower Vase Set", w: 1354, h: 1500 },
  ],
  gallery: [
    { asin: "B08NWSRHFC", title: "ArtbyHannah Gallery Wall Frame Set, 8 Pack Beige Picture Frames, Large", w: 1500, h: 960 },
    { asin: "B0779MJ893", title: "Kate and Laurel Bordeaux Gallery Wall Kit, Set of 10 Assorted Size Frames", w: 1500, h: 748 },
  ],
  vertical: [
    { asin: "B096LSF5LK", title: "HOMCOM Full Length Glass Mirror, Freestanding or Wall Mounted, White", w: 507, h: 1500 },
    { asin: "B0D2DJ9KDJ", title: "Rustic Arched Long Mirror for Wall, 35 x 12 Inch, Distressed White", w: 1500, h: 1500 },
  ],
  bookshelves: [
    { asin: "B0FQ5BCZQ1", title: "Ladder Shelf, 5-Tier Wooden Wall-Mounted Bookshelf with Metal Frame", w: 1500, h: 1500 },
    { asin: "B0D9WR9MHD", title: "Nathan James Beacon 5 Tier Bookshelf, Wall Mounted Bookcase, Solid Wood", w: 1500, h: 1500 },
  ],
  sconce: [
    { asin: "B07JFLGX9B", title: "BRIGHTESS Retro Black Wall Sconce Lamp, Industrial Vintage Farmhouse", w: 614, h: 1500 },
    { asin: "B0GGBC7G8W", title: "White Plaster Wall Sconce Light, Paintable DIY Wall Decor, Up Down Light", w: 1500, h: 1500 },
  ],
  mixed: [
    { asin: "B0GTG1ZK7Y", title: "Minimalist Aztec Wood Wall Decor Set of 3, Geometric Scandinavian Boho Panels", w: 1500, h: 1500 },
    { asin: "B0D9CQNDPK", title: "OYEFLY 2 Pcs Metal Abstract Wall Art, Modern Geometric Decor, Black", w: 1364, h: 1067 },
  ],
  personalart: [
    { asin: "B0DBZPPJ9S", title: "Heimlove 16x20 Picture Frame, Natural Walnut, Hand Crafted Poster Frame", w: 1500, h: 1500 },
    { asin: "B0BRKYX9YR", title: "VCK 16x20 Frames Black, 4 Pack, Wide Thick Wood Border, for Poster/Prints", w: 1318, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "above-fireplace-scale-proportion-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "above-fireplace-scale-proportion", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "above-fireplace-scale-proportion", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>The wall above a fireplace carries more visual weight than almost any other spot in a living room.</p>
<p>Get it right, and the whole room feels pulled together.</p>
<p>Get it wrong, and not much else in the room can fully make up for it.</p>
<p>The good news: the fix usually comes down to scale, not a full redesign.</p>
${pinPhoto("hero.jpg", "Fireplace mantel styled with a round mirror, dried branches and ceramic vases", 726, 1024, "https://www.pinterest.com/pin/9007268002680784/", "layered mantel styling", "hero")}

<h2>The Mistakes That Undo It Fastest</h2>
<p>A tiny frame above a large fireplace looks lost rather than intentional.</p>
<p>A TV mounted too high for comfortable viewing solves a design problem by creating a daily one.</p>
<p>An overcrowded mantel &mdash; plants, frames, vases, candles, books all competing &mdash; stops reading as styled and starts reading as cluttered.</p>
<p>Each of these comes back to the same root cause: not accounting for scale before decorating.</p>
${pinPhoto("intro-mistakes.jpg", "Fireplace with an awkwardly small piece of art that doesn't fill the wall", 736, 923, "https://www.pinterest.com/pin/1688918605317024/", "common above-fireplace mistake", "mistakes")}

<h2>Scale and Proportion Come First</h2>
<p>Before picking a style, the fireplace itself sets the rules.</p>
<p>A piece hung above it should generally span at least two-thirds of the mantel's width &mdash; narrower, and it reads as undersized no matter how nice it is on its own.</p>
<p>A tall fireplace with a high ceiling can handle a vertical, dramatic piece. A low, wide fireplace usually wants something horizontal instead.</p>
<p>Measuring the actual wall before shopping for anything saves a return trip later.</p>

<h2>1. Oversized Statement Artwork</h2>
<p>One large piece, properly scaled to the wall, does more than a cluster of smaller ones ever could.</p>
<p>It gives the eye one clear place to land instead of several competing ones.</p>
<p>Abstract, landscape or a bold graphic print all work, as long as the size is right.</p>
<p>This is often the simplest fix for a fireplace wall that's felt unfinished for a while.</p>
${photo("oversized-artwork.jpg", "Large-scale abstract artwork hung above a fireplace mantel", 736, 981, "artwork")}

<h2>2. A Minimal Floating Shelf</h2>
<p>A single floating shelf above the fireplace keeps the styling flexible without permanent built-ins.</p>
<p>A few curated objects &mdash; not a crowd of them &mdash; let the shelf read as intentional.</p>
<p>It's easy to update seasonally without redoing the whole wall.</p>
<p>This suits a smaller fireplace that can't support a heavier, more built-in treatment.</p>
${pinPhoto("floating-shelf.jpg", "Minimal floating shelf above a fireplace styled with curated decor", 736, 920, "https://www.pinterest.com/pin/703756188357948/", "floating shelf styling", "shelf")}

<h2>3. A Slimline Mirror</h2>
<p>A mirror above the fireplace bounces light back into the room, which matters most in a space with limited natural light.</p>
<p>A slim frame keeps it from feeling heavy, even at a larger scale.</p>
<p>Round, arched or rectangular all work, as long as the proportions match the fireplace below.</p>
<p>This is one of the few above-fireplace choices that's genuinely functional, not just decorative.</p>
${photo("slimline-mirror.jpg", "Slimline mirror hung above a fireplace to reflect light into the room", 735, 849, "mirror")}

<h2>4. Built-In Shelving That Frames the Fireplace</h2>
<p>Flanking the fireplace with built-in shelving turns the whole wall into a single cohesive feature.</p>
<p>It adds real storage and display space without needing a floating shelf directly above the mantel.</p>
<p>This works best as a planned renovation rather than an add-on, since it changes the wall's structure.</p>
<p>Once it's in place, it tends to become the most-used storage in the room.</p>
${productGrid("builtin")}

<h2>5. A Low-Profile TV</h2>
<p>A TV above the fireplace is common for a reason &mdash; it's often the only practical spot in the room.</p>
<p>Keeping it low-profile and properly scaled to the mantel keeps it from dominating the wall.</p>
<p>A frame-style TV or a sliding art cover both soften its presence when it's off.</p>
<p>Mounting height matters more than most people expect &mdash; too high, and it's uncomfortable to actually watch.</p>
${pinPhoto("low-profile-tv.jpg", "Low-profile TV mounted above a fireplace with balanced proportions", 736, 552, "https://www.pinterest.com/pin/281543719643252/", "low-profile TV mount", "tv")}

<h2>6. Textured Wall Panels or Slatted Wood</h2>
<p>A textured treatment behind the mantel adds depth without relying on a single large object.</p>
<p>Slatted wood, fluted panels or a subtle 3D texture all catch light differently throughout the day.</p>
<p>This pairs especially well with a TV mounted above the fireplace, since the texture adds interest even when the screen is off.</p>
<p>It's a bigger project than hanging art, but it changes the whole wall rather than just one section of it.</p>
${pinPhoto("textured-panels.jpg", "Textured wood wall panels installed behind a fireplace feature", 736, 981, "https://www.pinterest.com/pin/7529524373199506/", "textured wood paneling", "panels")}

<h2>7. Sculptural Objects That Read as Art</h2>
<p>A sculptural piece doesn't need a frame to hold a wall's attention.</p>
<p>Ceramic, wood or metal forms all work, especially mounted on a simple bracket or small shelf.</p>
<p>This suits a fireplace wall that already has strong architectural detail and doesn't need more visual noise.</p>
<p>One well-chosen piece tends to outperform several smaller decorative objects combined.</p>
${pinPhoto("sculptural-objects.jpg", "Sculptural decorative object displayed above a fireplace mantel", 736, 981, "https://www.pinterest.com/pin/2392606045581579/", "sculptural object styling", "sculptural")}

<h2>8. A Floor-to-Ceiling Stone or Plaster Feature</h2>
<p>Extending stone or plaster the full height of the wall turns the fireplace into the room's clear architectural anchor.</p>
<p>This is a bigger commitment than any of the decorative options, but it rarely needs updating once it's done.</p>
<p>It suits a room built around the fireplace as the primary focal point.</p>
<p>Once this is in place, very little additional decor is needed above it at all.</p>
${pinPhoto("stone-plaster-feature.jpg", "Floor-to-ceiling stone feature wall surrounding a fireplace", 736, 981, "https://www.pinterest.com/pin/2040762328589549/", "floor-to-ceiling stone feature", "stone")}

<h2>9. Layered Mantel Styling With Depth</h2>
<p>Layering objects at different depths and heights on the mantel itself adds dimension without needing anything mounted on the wall above.</p>
<p>A taller piece in back, a medium object to the side, and one low accent in front keeps the eye moving.</p>
<p>This works well alongside a mirror or art, rather than instead of it.</p>
<p>It's one of the easiest styling choices to adjust seasonally too.</p>
${pinPhoto("layered-mantel.jpg", "Layered mantel decor with varied heights and depths for visual interest", 683, 1024, "https://www.pinterest.com/pin/211174979051856/", "layered mantel styling", "layered")}

<h2>10. A Gallery Wall That Stays Organized</h2>
<p>A gallery wall above the fireplace works, but only when it's planned rather than assembled piece by piece.</p>
<p>A consistent frame color or a shared mat width keeps a mix of art sizes from feeling random.</p>
<p>Laying the arrangement out on the floor first avoids a wall full of extra nail holes.</p>
<p>This suits a collector or anyone with a growing art collection that doesn't fit one single piece.</p>
${pinPhoto("gallery-wall.jpg", "Organized gallery wall of framed art displayed above a fireplace", 667, 1000, "https://www.pinterest.com/pin/20758848276132586/", "organized gallery wall", "gallery")}

<h2>11. A Single Vertical Piece</h2>
<p>For a narrower or taller fireplace, one vertical piece often reads better than a wide horizontal one.</p>
<p>A tall mirror, a narrow art print, or a vertical sculptural element all fit this shape well.</p>
<p>This suits a more modern or minimal fireplace surround, where a single clean line feels more intentional than a cluster of items.</p>
<p>Less competes for attention, which keeps the whole wall feeling calm.</p>
${productGrid("vertical")}

<h2>12. Bookshelves Integrated Above the Fireplace</h2>
<p>Built-in shelving that continues above the fireplace itself, not just beside it, turns the wall into real storage.</p>
<p>Books add color and texture while also being genuinely useful.</p>
<p>This requires more planning than most options on this list, since weight and mounting become real considerations that high.</p>
<p>Done well, it reads as custom millwork rather than an afterthought.</p>
${pinPhoto("bookshelves.jpg", "Built-in bookshelves integrated into the wall above a fireplace", 600, 800, "https://www.pinterest.com/pin/280700989270440181/", "integrated bookshelf styling", "bookshelves")}

<h2>13. No Decor at All</h2>
<p>Leaving the space above the fireplace empty is a real option, not a placeholder until something better comes along.</p>
<p>A fireplace with strong material or architectural detail of its own often doesn't need anything added above it.</p>
<p>This suits a room that already has visual interest elsewhere and doesn't need another focal point competing for attention.</p>
<p>Restraint here can read as more confident than filling the space just because it's there.</p>
${productGrid("sconce")}

<h2>14. Mixed Materials for Quiet Contrast</h2>
<p>Combining two or three materials &mdash; wood, metal, stone, glass &mdash; above the fireplace adds interest without relying on one statement piece.</p>
<p>The key is restraint: two or three materials read as intentional, five starts to feel chaotic.</p>
<p>This works especially well paired with a simpler, more minimal mantel below.</p>
<p>It's a subtler approach than a single bold piece, but it rewards a closer look.</p>
${pinPhoto("mixed-materials.jpg", "Mixed material styling combining wood, metal and stone above a fireplace", 736, 981, "https://www.pinterest.com/pin/32228953575607615/", "mixed material styling", "mixed")}

<h2>15. Personalized Art That Tells a Story</h2>
<p>Not every above-fireplace choice needs to come from a store.</p>
<p>A family photo enlarged and properly framed, a piece from a meaningful trip, or art made by someone in the house all carry weight a generic print can't match.</p>
<p>The same scale rules still apply &mdash; personal doesn't mean undersized.</p>
<p>This option tends to make the whole room feel more like an actual home than a showroom.</p>
${pinPhoto("personalized-art.jpg", "Personalized family artwork displayed prominently above a fireplace", 616, 925, "https://www.pinterest.com/pin/116812184079638942/", "personalized art display", "personalart")}

<h2>Final Thoughts</h2>
<p>Trust the actual wall, not whatever's trending this year.</p>
<p>Measure first, then choose a direction that matches the fireplace's real scale and the room's existing style.</p>
<p>A piece sized correctly for the space will always outperform a trendy one that's the wrong fit.</p>
<p>Start with proportion, and the rest of the decision gets a lot easier.</p>
`;

module.exports = { body };
