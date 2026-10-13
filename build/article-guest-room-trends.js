// Body content for "10 Guest Room Trends That Create the Ultimate
// Retreat". Numbered idea-list format, condensed from an 18-section
// source (intro sections — what makes trends special, why guest rooms
// get more attention, how they've evolved, personal client insights —
// folded into a shorter intro). New topic for the site, no existing
// guest-room article. Idea 9 (smart storage) had no source photo,
// kept text-only. One photo (minimal clutter) had a real Pinterest
// pin, credited via pinPhoto(); the rest have no pin, uncredited.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0C5DJTKRW", title: "Queen Comforter Set, 7 Piece Bed in a Bag, Seersucker Bedding Set, Beige", w: 1500, h: 1500 },
    { asin: "B0BV2RGCKH", title: "AMHANCIBLE Luggage Racks, Set of 2, Foldable Suitcase Stands for Guest Room", w: 1500, h: 1430 },
  ],
  why: [
    { asin: "B0BMF7PJ4X", title: "Flat Plug Power Strip, 22.5W, 6 Ft Extension Cord with USB Ports", w: 1171, h: 1474 },
    { asin: "B0DXTXV7HZ", title: "Coeusy Scalloped Wicker Baskets, 2 Pack, Natural Water Hyacinth", w: 1500, h: 1033 },
  ],
  idea1: [
    { asin: "B0CVVJP4S2", title: "OAITE Queen Duvet Cover Set, 3 Pcs, 100% Cotton, Blue Leaf Print", w: 1500, h: 1500 },
    { asin: "B086YM5LZV", title: "NTBAY Euro Egyptian Cotton Sateen Pillow Shams, Set of 2, White", w: 1500, h: 1273 },
  ],
  idea2: [
    { asin: "B0GT771P3W", title: "IDEALHOUSE Twin Daybed with Trundle, Metal Bed Frame", w: 1500, h: 1500 },
    { asin: "B0DP9Z7R1M", title: "Royal Windsor Round Storage Ottoman, Set of 2, Vanity Stool", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B07BDWC1TQ", title: "Glidden Interior Paint and Primer, Greige Oatmeal, One Coat, Eggshell, 1 Quart", w: 1500, h: 1471 },
    { asin: "B07NPYWCX5", title: "Levtex Home Cross Stitch Quilt Set, 100% Cotton, King, with 2 Shams", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0G4V9L4Z7", title: "Boho Floral Peel and Stick Wallpaper for Bedroom and Cabinets, Gray, 17.3 x 118 Inch", w: 1125, h: 1500 },
    { asin: "B0CN23QR9Z", title: "Glidden Total Interior Paint and Primer, Cavalry Navy Blue, Flat, 1 Gallon", w: 1500, h: 1473 },
  ],
  idea5: [
    { asin: "B09B7QNYHR", title: "Govee Smart Light Bulbs, 2 Pack, A19 LED, 800 Lumen, E26 Base", w: 1034, h: 1324 },
    { asin: "B0BR5JHB3Z", title: "Touch Bedside Table LED Lamp, Sleek Design, RGB Mode, Dimmable Warm White", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0B2RC15TS", title: "Mckanti Absorbent Drink Coasters, Set of 8, Woven Cotton, 4 Colors", w: 1500, h: 1494 },
    { asin: "B0BRQBVKBB", title: "Lerliuo Rattan Nightstand, Boho Side Table with Drawer and Open Shelf", w: 1013, h: 1500 },
  ],
  idea7: [
    { asin: "B0CJC85HL6", title: "SONORO KATE 100% French Linen Sheet Set, King, Natural Flax Bedding", w: 1500, h: 1500 },
    { asin: "B0GY3RCMWT", title: "Easy Jute Washable Rug, 6 x 9 Ft, Low Pile, Farmhouse Neutral, Non Slip", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B09SYWWPSV", title: "Welnow Lazy Chair with Ottoman, Reading Chair with Footrest, Dark Grey", w: 1500, h: 1327 },
    { asin: "B0FPWK9BPK", title: "EDISHINE LED Reading Floor Lamp, 1300 Lumen, Super Bright, Black", w: 1200, h: 1500 },
  ],
  idea9: [
    { asin: "B09QKMKVNL", title: "Smart FENDEE Fully Assembled Black Luggage Rack with Shoe Shelf", w: 1500, h: 1500 },
    { asin: "B0G6FKH8Z6", title: "Budding Joy Adjustable Under Bed Storage with Wheels, 80L, 2 Pack", w: 1468, h: 1500 },
  ],
  idea10: [
    { asin: "B0GGBBLHRT", title: "PLHXFR Fluffy Shag Area Rug, 8 x 10 Ft, Soft Bedroom Rug, Black Grey", w: 1500, h: 1500 },
    { asin: "B0CLV5ZV4R", title: "100% Wool Hand Woven Knit Popcorn Rug, 8 x 10 Ft, Ivory", w: 1254, h: 1254 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "guest-room-trends-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "guest-room-trends", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "guest-room-trends", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Guest rooms used to be an afterthought &mdash; a leftover bed in a room that doubled as storage.</p>
<p>That's shifted. More homes are treating the guest room as a genuine small retreat, worth the same consideration as any other room.</p>
<p>These 10 trends cover what's actually driving that shift and how to apply it.</p>
${photo("hero.jpg", "Beautifully designed guest room reflecting 2026 trends", 1600, 900, "hero")}

<h2>Why Guest Rooms Are Finally Getting Attention</h2>
<p>More people are hosting overnight guests regularly &mdash; family, remote-working friends, extended stays &mdash; which makes a genuinely comfortable guest room a bigger priority than it used to be.</p>
<p>A guest room has also become one of the few rooms in the house that can be styled purely for someone else's comfort, without the daily-use compromises every other room requires.</p>
${photo("intro.jpg", "Inviting guest room designed for comfort and style", 683, 1024)}
${photo("what-makes-special.jpg", "Guest room featuring thoughtful 2026 design trends", 683, 1024)}
${photo("why-attention.jpg", "Guest room receiving more design attention than ever", 1024, 683)}
${photo("how-evolved.jpg", "Evolution of guest room design over recent years", 1024, 576, "why")}

<h2>1. Layered Bedding for Maximum Comfort</h2>
<p>A guest room bed with real layering &mdash; a duvet, a throw, several pillow types &mdash; signals genuine hospitality in a way a single flat comforter doesn't.</p>
<p>This is worth prioritizing over almost any other guest room upgrade, since it's the one thing every guest directly experiences.</p>
${photo("layered-bedding.jpg", "Layered bedding creating maximum comfort in a guest room", 683, 1024, "idea1")}

<h2>2. Multipurpose Furniture</h2>
<p>A daybed that works as a sofa, a desk that doubles as a vanity, or a storage ottoman that also seats someone all let the guest room earn its keep the rest of the year too.</p>
<p>This matters more now than it used to, since fewer homes can dedicate a room purely to occasional guests without it serving another function.</p>
${photo("multipurpose-furniture.jpg", "Multipurpose furniture maximizing a guest room's everyday use", 600, 900, "idea2")}

<h2>3. Warm, Neutral Color Palettes</h2>
<p>A soft, warm neutral base reads as calming and universally comfortable &mdash; a safer, more restful choice than a bold color in a room meant for someone unfamiliar with the home.</p>
<p>This also makes the room easier to accessorize seasonally without ever needing to repaint.</p>
${photo("neutral-palette.jpg", "Warm neutral palette creating a calming guest room atmosphere", 683, 1024, "idea3")}

<h2>4. Personalized Accent Walls</h2>
<p>A single wall in a considered color, texture or wallpaper gives the guest room real character without overwhelming a space meant to feel calm.</p>
<p>This is one of the more popular ways guest rooms are getting individual personality instead of reading as a generic spare room.</p>
${photo("accent-walls.jpg", "Personalized accent wall adding character to a guest room", 710, 1024, "idea4")}

<h2>5. Smart Lighting for Mood and Function</h2>
<p>A dimmer, a smart bulb, or a simple bedside lamp with adjustable brightness lets a guest control their own lighting without having to ask.</p>
<p>This small independence matters more for guest comfort than most people account for when planning the room.</p>
${photo("smart-lighting.jpg", "Smart lighting offering guests mood and function control", 683, 1024, "idea5")}

<h2>6. Minimal Clutter With Thoughtful Decor</h2>
<p>A guest room with a few deliberate pieces, rather than every spare decor item in the house, reads as genuinely curated rather than like a storage overflow room.</p>
<p>This also makes the space feel more like an intentional retreat than a leftover corner of the home.</p>
${pinPhoto("minimal-clutter.jpg", "Scandinavian-inspired guest room with minimal, curated decor", 574, 1024, "https://www.pinterest.com/pin/19492210989423221/", "minimal clutter guest room", "idea6")}

<h2>7. Natural Materials and Textures</h2>
<p>Linen bedding, a jute rug, and wood furniture bring a grounded, organic feel that suits a restful guest room better than synthetic materials do.</p>
<p>This also tends to age well, avoiding the dated look that more trend-driven materials can fall into.</p>
${photo("natural-materials.jpg", "Natural materials and textures bringing warmth to a guest room", 1024, 576, "idea7")}

<h2>8. Cozy Seating Nooks</h2>
<p>A small chair by the window, with a reading lamp nearby, gives a guest somewhere to sit besides the bed &mdash; a small detail with an outsized effect on how welcome the room feels.</p>
<p>This works even in a smaller guest room, as long as there's room for a single chair and a surface for a drink or book.</p>
${photo("seating-nooks.jpg", "Cozy seating nook adding a welcoming touch to a guest room", 768, 1024, "idea8")}

<h2>9. Smart Storage Solutions</h2>
<p>Under-bed storage, a slim wardrobe, or a luggage rack all give a guest somewhere to actually unpack, rather than living out of a suitcase on the floor.</p>
<p>This is one of the most appreciated, least glamorous upgrades a guest room can get.</p>
${productGrid("idea9")}

<h2>10. Soft, Ambient Flooring</h2>
<p>A plush rug or warm-toned flooring underfoot adds comfort that's easy to overlook until a guest is walking across a cold floor barefoot.</p>
<p>This detail does a lot for the room's overall coziness relative to how little it costs to add.</p>
${photo("ambient-flooring.jpg", "Soft ambient flooring enhancing a cozy guest room retreat", 1024, 768, "idea10")}

<h2>Final Thoughts</h2>
<p>None of these 10 trends require redoing the guest room all at once.</p>
<p>Start with layered bedding and lighting, since both have the most direct effect on how a guest actually experiences the room.</p>
<p>A guest room that genuinely feels considered is one of the most generous small upgrades a home can make.</p>
`;

module.exports = { body };
