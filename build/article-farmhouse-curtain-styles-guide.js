// Body content for "9 Curtain Styles Built for a Farmhouse Living
// Room". Numbered idea-list format, reordered from the source's 9
// curtain types plus a closing hardware/tiebacks section. Distinct
// from the existing choosing-living-room-curtains article, which
// covers the general decision process (fabric weight, color,
// measuring, hardware) for any living room — this is a style-
// specific material/pattern catalog for farmhouse rooms
// specifically, a genuinely different angle (style-bound catalog vs.
// generic decision framework). One heading in the source linked to
// a Pinterest board (not a pin), which doesn't carry photo credit
// under the established pin-credit pattern. 0 Pinterest pins tied to
// actual photos, so all uncredited photo(). "Tiebacks and
// Accessories" had no source photo, kept text-only.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D28TVRHH", title: "Lazzzy Taupe Vintage Floral Linen Farmhouse Curtains, 50 x 84 Inch, 2 Panels", w: 1485, h: 1365 },
    { asin: "B0F2YFCXH9", title: "QDWIS Boho Wood Curtain Rod for Windows, 48 to 84 Inch", w: 1431, h: 725 },
  ],
  idea1: [
    { asin: "B0C1S8332K", title: "MYSKY HOME Natural Linen Semi Sheer Curtains, 84 Inches, 2 Panels", w: 1500, h: 1500 },
    { asin: "B07HK76L1P", title: "jinchan Linen Back Tab Curtains, Light Filtering, 50 x 84 Inch, 2 Panels", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B07VLBQ1FC", title: "Grainger Buffalo Check Blackout Window Curtain, Linen, 52 x 84 Inch", w: 1500, h: 1500 },
    { asin: "B082B4WPNZ", title: "Creativesfun Farmhouse Faux Linen Buffalo Plaid Grommet Curtains, 2 Panels", w: 1254, h: 1254 },
  ],
  idea3: [
    { asin: "B0B3544GYM", title: "OWENIE White Sheer Curtains, 84 Inches Long, 2 Panels", w: 1500, h: 1500 },
    { asin: "B09Y2DFWD5", title: "SpaceDresser Rod Pocket Sheer Voile White Curtain Panels, 52 x 84 Inch, 1 Pair", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0C65NDZR4", title: "jinchan Burlap Linen Look Curtains, Tan, 84 Inches Long", w: 1500, h: 1500 },
    { asin: "B00T5S0IKU", title: "AK Trading Co. 100% Jute Burlap Window Curtain Panel, Made in USA", w: 1497, h: 1500 },
  ],
  idea5: [
    { asin: "B09Q8C127S", title: "KOUFALL Farmhouse Linen Tab Top Curtains, Cream Beige, Semi Sheer", w: 1391, h: 1500 },
    { asin: "B0GY8LSTN2", title: "Rustic-Chic Tie-Top Window Curtain Panel, 52 x 96 Inch", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0H4JKZVP9", title: "1 Inch Modern Antique Bronze Double Curtain Rods, 72 to 144 Inches", w: 1484, h: 1485 },
    { asin: "B0GY3W9213", title: "Layered Window Treatment Curtains Set, 4 Panels, Bedroom and Living Room", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B09X2WBBCX", title: "SimpleHome Cream 100% Blackout Curtains, 84 Inch, Room Darkening", w: 1500, h: 1500 },
    { asin: "B0CNLRSRNW", title: "Aersas Linen Pinch Pleated Curtains, 84 Inch, 2 Panels, Cream Semi Sheer", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B014MLDX10", title: "H.VERSAILTEX 100% Blackout Thermal Insulated Curtains, 96 Inch, Black", w: 1500, h: 1500 },
    { asin: "B0F6LM95F2", title: "YaFex Heavy Duty Adjustable Curtain Rod, 1 Inch, 32 to 144 Inch, Black", w: 1500, h: 1478 },
  ],
  idea9: [
    { asin: "B0H3CL27SD", title: "Farmhouse Ball Wrought Iron Curtain Rod, 32 to 142 Inch", w: 1500, h: 704 },
    { asin: "B0GKFP2HGB", title: "Boho Wood Curtain Rod, 1 Inch, 36 to 88 Inch, Adjustable, Heavy Duty", w: 1500, h: 1125 },
  ],
  tiebacks: [
    { asin: "B0CHRTZKB6", title: "KLOGTSIND Magnetic Wood Bead Curtain Tiebacks, 2 Pack", w: 1487, h: 1500 },
    { asin: "B0C4GHC9Z7", title: "Vintage Style Leather Curtain Rope Tiebacks, 4 Pcs", w: 1136, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "farmhouse-curtain-styles-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "farmhouse-curtain-styles-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A farmhouse living room has a specific textile language &mdash; natural fibers, a little imperfection, nothing too polished.</p>
<p>The curtains need to speak it too, or the whole room reads as slightly off no matter what else is right.</p>
<p>These nine styles cover what actually fits.</p>
${photo("hero.png", "A farmhouse living room with curtains that fit the style perfectly", 1312, 736, "hero")}

<h2>1. Classic Linen</h2>
<p>Linen remains the farmhouse curtain default for genuine reason &mdash; its natural texture and slightly relaxed drape fit the style better than almost any other fabric.</p>
<p>It also softens light beautifully without blocking it completely, which suits a farmhouse room's usual preference for a bright, airy feel.</p>
${photo("linen.png", "Classic linen curtains bringing natural texture to a farmhouse room", 574, 1024, "idea1")}

<h2>2. Buffalo Check</h2>
<p>A buffalo check pattern brings genuine country character and a touch of playfulness that a solid fabric can't offer.</p>
<p>This works best as a single accent window rather than throughout the whole room, keeping the pattern a highlight instead of overwhelming the space.</p>
${photo("buffalo-check.png", "Buffalo check curtains bringing playful country character", 574, 1024, "idea2")}

<h2>3. Sheer White Panels</h2>
<p>Sheer white curtains bring a dreamy, soft quality that lets maximum light through while still giving the window genuine definition.</p>
<p>This style pairs especially well layered under a heavier curtain, combining the softness of sheer with the structure of something more substantial.</p>
${photo("sheer-white.png", "Dreamy sheer white curtain panels letting in soft natural light", 574, 1024, "idea3")}

<h2>4. Burlap</h2>
<p>Burlap brings a genuinely raw, rustic texture that few other fabrics can replicate, leaning hard into the farmhouse aesthetic's rougher side.</p>
<p>This is a bolder, more textural choice best suited to a room already committed to a rustic rather than a refined farmhouse look.</p>
${photo("burlap.png", "Rustic burlap curtains bringing raw texture to a farmhouse room", 574, 1024, "idea4")}

<h2>5. Tab Top and Tie Top</h2>
<p>Tab top and tie top styles bring genuine handmade detail to the top of the curtain, a small touch that reinforces the farmhouse aesthetic's appreciation for visible craft.</p>
<p>This detail also tends to create fuller, more relaxed folds than a standard rod-pocket curtain does.</p>
${photo("tab-tie-top.png", "Tab top curtains adding handmade detail to a farmhouse window", 574, 1024, "idea5")}

<h2>6. Layered Curtains</h2>
<p>Layering a sheer panel under a heavier curtain doubles the coziness and gives the window more styling flexibility throughout the day.</p>
<p>This approach also solves a real practical need, letting light in during the day while still offering full privacy and warmth at night.</p>
${photo("layered.png", "Layered curtain panels doubling the coziness of a farmhouse window", 574, 1024, "idea6")}

<h2>7. Neutral Tones</h2>
<p>Sticking to neutral tones &mdash; cream, soft white, warm beige &mdash; keeps curtains working as a backdrop rather than competing with the room's other farmhouse details.</p>
<p>This is the safest, most versatile choice on this list, pairing easily with almost any other farmhouse element already in the room.</p>
${photo("neutral-tones.png", "Neutral-toned curtains working as a quiet farmhouse backdrop", 574, 1024, "idea7")}

<h2>8. Getting the Length Right</h2>
<p>Curtains that stop short of the floor read as a mistake rather than a style choice in almost every farmhouse living room.</p>
<p>Hanging them to just graze the floor, or with a slight break like a tailored pant hem, consistently reads as the most intentional length.</p>
${photo("length.png", "Properly floor-length curtains completing a farmhouse living room window", 574, 1024, "idea8")}

<h2>9. Rods and Hardware</h2>
<p>Wrought iron or aged wood curtain rods carry the farmhouse material story all the way to the top of the window, rather than stopping at the fabric.</p>
<p>This detail gets overlooked often, but a mismatched modern rod can undercut an otherwise perfect curtain choice.</p>
${photo("hardware.png", "Wrought iron curtain hardware completing a farmhouse window's look", 574, 1024, "idea9")}

<h2>The Final Touch: Tiebacks</h2>
<p>A simple rope, leather strap, or woven tieback finishes the look and keeps curtains functional during the day without looking like an afterthought.</p>
<p>This small detail is one of the easiest and cheapest ways to add a final layer of farmhouse character to an already-chosen curtain.</p>
${productGrid("tiebacks")}

<h2>Keep It Cozy, Keep It You</h2>
<p>None of these nine styles is universally correct for every farmhouse living room.</p>
<p>Fabric, length and hardware all work together, and getting those three details right matters more than chasing any single trendy pattern.</p>
`;

module.exports = { body };
