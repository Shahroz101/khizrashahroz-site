// Body content for "27 Wabi-Sabi Bathroom Ideas for Embracing
// Imperfection". Numbered idea-list format, reordered from the
// source's 9 section groups (original order: Rustic, Palette,
// Textured, Minimalist, Bathing, Accessories, Lighting, Storage,
// Flourishes -> new order: Palette, Textured, Rustic, Bathing,
// Minimalist, Lighting, Accessories, Storage, Flourishes), items
// renumbered 1-27 throughout. New topic for the site, no existing
// wabi-sabi article. Slug intentionally differs from the source's
// own filename ("wabi-sabi-bathroom-ideas"). Source photos have no
// Pinterest links, so none carry credit captions. Idea 19 (Candle
// Corner) had no source photo, kept text-only.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0BPMB1Y13", title: "NiuYichee 2 Pcs Water Absorbent Diatomite Stone Coasters and Sink Tray", w: 1500, h: 999 },
    { asin: "B08JTZVNXK", title: "100% Linen Waffle Weave Bath Towel, 30 x 60 Inch, Black and Natural, Quick Dry", w: 1500, h: 1267 },
  ],
  intro: [
    { asin: "B0F5R8SBF3", title: "5 Pack Bamboo Bathroom Accessories Set with Tray, Soap Dispenser, Toothbrush Holder, Jars", w: 1213, h: 1500 },
    { asin: "B07H2ZQV3Z", title: "Bamboo Bath Mat for Shower, Non-Slip Waterproof Wood Slat Bathroom Mat", w: 1500, h: 1259 },
  ],
  palette: [
    { asin: "B0BDQQ5F23", title: "COZYART Luxury Bath Towel Set, 6 Pcs, Sage Green, 100% Turkish Cotton", w: 1371, h: 1472 },
    { asin: "B0BTKCXJ8M", title: "White Classic Luxury Taupe Cotton Bath Mats, 22 x 34 Inch, 2 Pack", w: 1500, h: 1388 },
  ],
  texture: [
    { asin: "B0FSLJBRF8", title: "Hand-Carved Natural Stone Bathroom Vessel Sink, Modern Rustic Canoe Shape", w: 1500, h: 947 },
    { asin: "B0FY7JLV2T", title: "Rivian Zellige 2.5 x 8 Inch Ceramic Wall Tile, Blanc, 5.38 Sq Ft per Case", w: 1147, h: 756 },
  ],
  rustic: [
    { asin: "B09VP7WC82", title: "Bamboo Bathroom Shelf, 3-Tier Multifunctional Storage Shelf", w: 942, h: 1193 },
    { asin: "B0FZB17Q98", title: "Brown Stone Pebble Mosaic Tile for Shower Floor, 5 Pcs", w: 1500, h: 1408 },
  ],
  bathing: [
    { asin: "B09ZPLFZFC", title: "Clawfoot Tub Shower Caddy, Clawfoot Tub Accessories", w: 1377, h: 1500 },
    { asin: "B0FC19N1P5", title: "Bamboo Shower Stool Bench with Storage Shelf for Inside Shower", w: 1500, h: 1407 },
  ],
  minimal: [
    { asin: "B09BCMTKSD", title: "Main and Mesa Stoneware Bud Vases in Crackle Glaze, Grey and Mustard Tones, Set of 4", w: 1500, h: 625 },
    { asin: "B0GDT42P9B", title: "Large Paper Lantern Pendant Light with Cord and Canopy, 20 Inch, Off-White", w: 803, h: 1437 },
  ],
  lighting: [
    { asin: "B0D3C81GMS", title: "YLONG-ZS Black Farmhouse Wall Sconce, Rustic Lantern Wall Light", w: 533, h: 970 },
    { asin: "B07ZKNNFJQ", title: "BRIGHTTIA Plug-In Wall Sconce with Exposed Globe Bulb, Brushed Gold", w: 1422, h: 1500 },
  ],
  accessories: [
    { asin: "B0F8VN8616", title: "Zoeeker Handmade-Style Green Ceramic Soap Dish with Drainage", w: 1500, h: 1500 },
    { asin: "B0013OUAKM", title: "Uttermost Amiel Arched Window-Pane Wall Mirror, Aged Frame", w: 341, h: 955 },
  ],
  storage: [
    { asin: "B0H11W33LY", title: "Set of 3 Rustic Wooden Crates with Handles, Dark Brown Wood Storage Crates", w: 1011, h: 1460 },
    { asin: "B0GT4W263B", title: "3-Piece Rustic Terracotta Jars with Wooden Lids, Spoons and Tray", w: 1500, h: 1071 },
  ],
  details: [
    { asin: "B088FTRJC6", title: "2-Handle Widespread Bathroom Faucet, Antique Brass", w: 1377, h: 1433 },
    { asin: "B0GCKPXXLZ", title: "Sukh 40 Pcs Natural Dried Birch Twigs, 12.8 Inch, for Vase Decor", w: 1267, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "wabi-sabi-bathroom-style-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "wabi-sabi-bathroom-style", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Wabi-sabi is the opposite of a showroom bathroom.</p>
<p>It finds real beauty in weathered wood, cracked glaze and a surface that shows its own history, rather than hiding it.</p>
<p>These 27 ideas cover how that philosophy actually translates into a working bathroom.</p>
${photo("hero.png", "A serene, stylish bathroom embracing wabi-sabi imperfection", 1248, 832, "hero")}

<h2>Why Wabi-Sabi Works So Well in a Bathroom</h2>
<p>A bathroom is one of the few rooms built almost entirely from hard, often flawless-looking materials, which makes the contrast of something imperfect and natural feel especially intentional.</p>
<p>At its core, wabi-sabi values the honest, the asymmetrical and the aged over anything polished or mass-produced.</p>
${photo("intro-1.png", "A cozy, rustic bathroom embodying wabi-sabi warmth", 683, 1024)}
${photo("intro-2.png", "Natural materials laid out, embodying the core of wabi-sabi", 683, 1024, "intro")}

<h2>Start With an Earthy Palette</h2>
<p>A muted green, drawn from moss or sage, grounds the whole room in something that reads as calm rather than decorative.</p>
${photo("muted-greens.png", "Muted green tones grounding a calm wabi-sabi bathroom", 683, 1024)}
<p>A warm brown, especially in a natural clay or wood tone, brings genuine depth without ever feeling heavy.</p>
${photo("warm-browns.png", "Warm brown tones bringing natural depth to the bathroom", 683, 1024)}
<p>A faded gray, closer to stone than to a cool modern gray, keeps the palette from reading as sterile.</p>
${photo("faded-grays.png", "Faded gray tones keeping the bathroom palette soft and natural", 683, 1024, "palette")}

<h2>Bring In Real Texture</h2>
<p>A rough-hewn stone sink keeps its natural, unpolished surface visible, turning a purely functional fixture into the room's quiet centerpiece.</p>
${photo("stone-sink.png", "A rough stone sink serving as a wabi-sabi bathroom's centerpiece", 683, 1024)}
<p>Woven baskets bring genuine tactile warmth and solve real storage needs at the same time.</p>
${photo("woven-baskets.png", "Woven baskets adding tactile warmth and practical storage", 683, 1024)}
<p>Deliberately cracked or crackle-glazed ceramic tile embraces imperfection directly, rather than hiding it the way a flawless tile would.</p>
${photo("cracked-tiles.png", "Crackle-glazed ceramic tile embracing imperfection directly", 683, 1024, "texture")}

<h2>Lean Into Rustic Materials</h2>
<p>Exposed wooden beams overhead bring genuine architectural warmth that a flat, finished ceiling never quite matches.</p>
${photo("exposed-beams.png", "Exposed wooden beams bringing rustic warmth to the ceiling", 683, 1024)}
<p>A weathered wood vanity, with real visible grain and imperfection, anchors the room in a way a flawless laminate finish can't.</p>
${photo("weathered-vanity.png", "A weathered wood vanity anchoring the room with natural character", 683, 1024)}
<p>Bamboo shelving brings a light, natural texture that pairs easily with almost every other material on this list.</p>
${photo("bamboo-shelving.png", "Bamboo shelving adding light, natural texture to the bathroom", 683, 1024)}
<p>Pebble floor tiles bring genuine organic texture underfoot, a small but constant physical reminder of the room's natural-material story.</p>
${photo("pebble-floor.png", "Pebble floor tiles bringing organic texture underfoot", 683, 1024, "rustic")}

<h2>Upgrade the Bathing Area</h2>
<p>A clawfoot tub that's allowed to show its age and patina reads as considered rather than simply old.</p>
${photo("clawfoot-tub.png", "A clawfoot tub showing genuine age and patina", 683, 1024)}
<p>A stone shower floor continues the room's natural-material story into the one area most often finished in plain tile.</p>
${photo("stone-shower-floor.png", "A stone shower floor extending the bathroom's natural material story", 683, 1024)}
<p>A wooden shower bench brings warmth and genuine function into a space that's usually all hard, cold surfaces.</p>
${photo("wooden-shower-bench.png", "A wooden shower bench bringing warmth into the bathing area", 683, 1024, "bathing")}

<h2>Keep the Decor Minimal</h2>
<p>A single plant does more for a wabi-sabi bathroom than a cluster of several ever could, since restraint is part of the philosophy itself.</p>
${photo("single-plant.png", "A single plant embodying wabi-sabi restraint in the bathroom", 683, 1024)}
<p>Bare walls, left intentionally empty, give the room's natural materials room to be the actual focal point.</p>
${photo("bare-walls.png", "Bare walls letting natural materials take center stage", 683, 1024)}
<p>One statement light fixture, rather than several smaller ones, keeps the lighting as deliberate as everything else in the room.</p>
${photo("statement-light.png", "One statement light fixture anchoring a minimalist wabi-sabi bathroom", 683, 1024, "minimal")}

<h2>Set the Mood With Lighting</h2>
<p>A lantern-style fixture brings a soft, warm glow that feels more like candlelight than a typical overhead bathroom light.</p>
${photo("lantern-vibes.png", "A lantern-style fixture bringing warm, soft light to the bathroom", 683, 1024)}
<p>Exposed bulbs, left visible rather than hidden behind a shade, fit the room's broader honesty-over-polish philosophy.</p>
${photo("exposed-bulbs.png", "Exposed bulbs embracing an unpolished, honest lighting style", 683, 1024, "lighting")}
<p>A small candle corner adds flickering, natural light that no electric fixture quite replicates.</p>

<h2>Choose Imperfect Accessories</h2>
<p>A handmade soap dish, with its slightly uneven shape, is exactly the kind of small imperfect detail wabi-sabi is built around.</p>
${photo("soap-dish.png", "A handmade soap dish bringing small, imperfect charm", 683, 1024)}
<p>Slightly frayed, well-worn towels read as lived-in rather than neglected, once the rest of the room supports that same story.</p>
${photo("frayed-towels.png", "Slightly frayed towels adding a lived-in quality to the bathroom", 683, 1024)}
<p>A mirror with a rusted or aged frame continues the patina theme into one of the room's most noticeable fixtures.</p>
${photo("rusty-mirror.png", "A mirror with an aged, rusted frame continuing the patina theme", 683, 1024, "accessories")}

<h2>Solve Storage the Wabi-Sabi Way</h2>
<p>Open wooden crates bring visible, honest storage instead of hiding everything behind a closed cabinet door.</p>
${photo("wooden-crates.png", "Open wooden crates providing honest, visible bathroom storage", 683, 1024)}
<p>Clay jars, left unglazed or minimally finished, store small items while reinforcing the room's earthy material palette.</p>
${photo("clay-jars.png", "Unglazed clay jars storing items while reinforcing the earthy palette", 683, 1024)}
<p>Hanging rope shelves bring a relaxed, handmade quality that a built-in shelf unit doesn't offer.</p>
${photo("rope-shelves.png", "Hanging rope shelves bringing a relaxed, handmade storage solution", 683, 1024, "storage")}

<h2>Finish With the Smaller Details</h2>
<p>Aged brass fixtures, left to develop their own natural patina rather than staying polished, tie the room's hardware into its broader philosophy.</p>
${photo("brass-fixtures.png", "Aged brass fixtures developing natural patina over time", 683, 1024)}
<p>A small touch of real nature &mdash; a dried branch, a stone, a piece of driftwood &mdash; closes the room's story in the simplest way possible.</p>
${photo("natures-touch.png", "A natural touch like dried branches completing the wabi-sabi look", 683, 1024, "details")}

<h2>Embracing the Imperfect</h2>
<p>None of these 27 ideas need to happen at once, and that's genuinely part of the point.</p>
<p>Start with the palette and one or two textural pieces, then let the room's natural materials age and develop their own character over time.</p>
<p>A wabi-sabi bathroom isn't finished so much as it keeps becoming more itself.</p>
`;

module.exports = { body };
