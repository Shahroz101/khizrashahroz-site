// Body content for "5 Table Lamp Types Worth Adding to Any Room".
// Numbered idea-list format. Source was a branded Amazon product
// roundup (Fenmzee, Aooshine, Dicoool, KDG table lamps, with pricing
// and "real-life thoughts" reviews) — rewritten around generic lamp
// category/types per established precedent, since current
// availability and pricing can't be verified and brand names aren't
// reproduced. New topic for the site (existing lighting articles are
// mood/styling-focused, not lamp-type selection). Source had only 1
// figure (hero, a generic lifestyle photo, not a product shot), no
// Pinterest pins — uncredited photo() only.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D41XL87F", title: "Govee RGBIC Smart Table Lamp 2, Touch Bedside Lamp with App Control", w: 1186, h: 1494 },
    { asin: "B0H4ZWQWMZ", title: "Tiffany-Style Stained Glass Table Lamp, Rose Pattern, Vintage Art Lamp", w: 942, h: 1500 },
  ],
  idea1: [
    { asin: "B0C2YR8LJ1", title: "Touch Table Lamps for Nightstand, 19.6 Inch, 3-Way Dimmable, USB C and A Ports", w: 1500, h: 1500 },
    { asin: "B0GGZ62GZG", title: "MOICO Touch Nightstand Table Lamp for Bedroom, with 10W USB Charging", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0FGHZJ777", title: "Glass Mushroom Table Lamp for Bedroom, Orange Retro Style", w: 1500, h: 1500 },
    { asin: "B0FGCHDZJZ", title: "UMEXUS Vintage Rechargeable Cordless Table Lamp, Small, Battery Powered", w: 471, h: 1500 },
  ],
  idea3: [
    { asin: "B0BV5JVNLX", title: "Neatfi LED Desk Lamp, 2200 Lumens, Adjustable Color Temperature, 20W, Clamp Base", w: 1500, h: 1181 },
    { asin: "B0FCS5W2WL", title: "15W LED Desk Lamp with USB Charging Ports, Dimmable, 3 Color Temperatures", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0FH2B2Y4S", title: "Small Bedside Table Lamp, Wood Base with Linen Shade, LED Bulb Included, Plug-In", w: 1500, h: 1500 },
    { asin: "B0G1Z8TJLR", title: "Drum Lamp Shades, Set of 2, for Table Lamps, 11.6 Inch Top, Linen", w: 1500, h: 1373 },
  ],
  idea5: [
    { asin: "B0H49N43C6", title: "Small Cordless Table Lamp, Rechargeable, Gold", w: 1500, h: 1500 },
    { asin: "B096RRW4GC", title: "One Fire Rechargeable Table Lamp, 3600mAh Battery Operated, Foldable Desk Lamp", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "lamp-types-to-brighten-your-home-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "lamp-types-to-brighten-your-home", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A good table lamp does more for a room's mood than almost any other single object in it.</p>
<p>The right type depends entirely on what the space actually needs &mdash; function, softness, portability, or just a bit of style.</p>
${photo("hero.png", "A warmly lit living room brightened by the right table lamp", 1312, 736, "hero")}

<h2>1. Touch-Control Dimmable Lamps</h2>
<p>A touch-control lamp with multiple brightness levels solves the most common lamp complaint &mdash; needing different light for different moments &mdash; without a single physical switch to fumble for in the dark.</p>
<p>This type works especially well on a nightstand, where a simple tap beats reaching for a small knob or pull-chain.</p>
${productGrid("idea1")}

<h2>2. Retro-Inspired Accent Lamps</h2>
<p>A lamp with a vintage-inspired silhouette brings genuine character to a room in a way a purely functional design never quite manages.</p>
<p>This type works best as a quiet style statement, chosen as much for how it looks switched off as for the light it gives when it's on.</p>
${productGrid("idea2")}

<h2>3. Adjustable Color-Temperature Lamps</h2>
<p>A lamp that shifts between warmer and cooler light tones adapts to different times of day and different tasks far better than a single fixed color temperature can.</p>
<p>This is one of the more genuinely useful upgrades on this list, especially for anyone using the same lamp for both relaxing and reading.</p>
${productGrid("idea3")}

<h2>4. Soft Fabric-Shade Lamps</h2>
<p>A linen or fabric shade diffuses light into something considerably softer and more ambient than an exposed or glass shade ever produces.</p>
<p>This type suits a space meant for winding down, where a harsher, more direct light would work against the mood rather than for it.</p>
${productGrid("idea4")}

<h2>5. Cordless and Rechargeable Lamps</h2>
<p>A battery-powered, rechargeable lamp goes anywhere a cord can't &mdash; a dinner table, a reading chair without a nearby outlet, even outdoors.</p>
<p>This flexibility makes it one of the most genuinely versatile types here, even if it means remembering to recharge it occasionally.</p>
${productGrid("idea5")}

<h2>Which Lamp Type Actually Fits</h2>
<p>A bedside table calls for dimmable touch control above almost anything else, while a living room accent table has more room for a bolder, retro-inspired choice.</p>
<p>A space without a nearby outlet is the one clear case where cordless wins outright, regardless of which other features might otherwise be preferred.</p>
<p>None of these five types is the universally correct choice &mdash; matching the type to the room's actual function matters more than any single feature on its own.</p>
`;

module.exports = { body };
