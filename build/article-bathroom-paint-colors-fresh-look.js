// Body content for "12 Bathroom Paint Colors to Give the Space a
// Fresh Look". Numbered idea-list format, reordered from the
// source's 12 colors. New topic for the site — no existing
// bathroom-specific paint color article (small-bedroom-paint-colors
// and timeless-kitchen-paint-colors are different rooms). Source had
// 2 distinct AI-generated photos per color (24 total) plus a hero;
// both kept per color since they're genuinely distinct files, not
// literal duplicates. Source photos have no Pinterest links, so
// none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D1Y355JN", title: "Hemway, Peel &amp; Stick Sample for Our Interior Paint, Magnolia, A5 Damage-Free", w: 1500, h: 1500 },
    { asin: "B0D1Y7S5PS", title: "Hemway, Peel &amp; Stick Sample for Our Interior Paint, Aquamarine Blue, A5 Damage-Free", w: 1500, h: 1500 },
  ],
  white: [
    { asin: "B07BZY3D4G", title: "Rust-Oleum Simply Home Interior Wall Paint 332141, Eggshell Pure White, 1 Gallon", w: 1371, h: 1500 },
    { asin: "B07BDTVN4W", title: "Glidden Interior Paint + Primer: White/Off White, One Coat, Eggshell, 1 Quart", w: 1500, h: 1470 },
  ],
  gray: [
    { asin: "B07BDTT3FB", title: "Glidden Interior Paint + Primer: Gray/Thin Ice, One Coat, Eggshell, 1-Quart", w: 1500, h: 1472 },
    { asin: "B07BK778KZ", title: "Glidden Interior Paint + Primer: Gray/Elephant Gray, One Coat, Eggshell, 1-Gallon", w: 1500, h: 1473 },
  ],
  paleBlue: [
    { asin: "B07BDSG3QR", title: "Glidden Interior Paint + Primer: Blue/Blue Fjord, One Coat, Eggshell, 1-Gallon", w: 1500, h: 1473 },
    { asin: "B0CSSZYS75", title: "Hemway Interior Wall Paint 2.5L / 2.6 quart Pacific Blue Paint", w: 1500, h: 1492 },
  ],
  sage: [
    { asin: "B0B5LZXLWM", title: "Glidden Total Interior Wall Paint &amp; Primer All-in-One, Light Sage/Green, Semi-Gloss", w: 1500, h: 1473 },
    { asin: "B0CSSN7J4C", title: "Hemway Sage Green Interior Paint, 2.5 Liter, 84.5 Fl Oz, - Acrylic Emulsion", w: 1500, h: 1492 },
  ],
  navy: [
    { asin: "B0CSSS6FHF", title: "Hemway Soft Navy Blue Interior Paint, 2.5 Liter, 84.5 Fl Oz, - Acrylic Emulsion", w: 1500, h: 1492 },
    { asin: "B0CN23QR9Z", title: "Glidden Total 1 gal. Cavalry/Navy Blue Flat Interior Paint with Primer", w: 1500, h: 1473 },
  ],
  blush: [
    { asin: "B00QCCPP2S", title: "PRESTIGE Interior Paint and Primer in One, Pink Sugar, Eggshell, 1 Gallon", w: 963, h: 955 },
    { asin: "B0FFMFH6PZ", title: "EVOLVE Interior Paint &amp; Primer, Eggshell, Pale Pink, 1 Gallon, One-Coat Coverage", w: 1500, h: 1494 },
  ],
  charcoal: [
    { asin: "B0CPYGNG9J", title: "EVOLVE Signature Collection Luxury Interior Paint &amp; Primer, Flat Sheen, Slate Gray", w: 1470, h: 1500 },
    { asin: "B07BK7WLXD", title: "Glidden Interior Paint + Primer: Gray/Stone's Throw, One Coat, Eggshell, 1 Gallon", w: 1500, h: 1473 },
  ],
  mint: [
    { asin: "B0B5LZ69VG", title: "Glidden Total Interior Wall Paint &amp; Primer All-in-One, Mint Wafer/Green, Eggshell", w: 1500, h: 1471 },
    { asin: "B07BDSCWJS", title: "Glidden Interior Paint + Primer: Green/Mint Wafer, One Coat, Eggshell, 1 Quart", w: 1500, h: 1471 },
  ],
  beige: [
    { asin: "B07BK7VBGZ", title: "Glidden Interior Paint + Primer: Beige/Almond Cream, One Coat, Eggshell, 1-Quart", w: 1500, h: 1472 },
    { asin: "B07BZKM696", title: "Rust-Oleum Simply Home Interior Wall Paint 332118, Eggshell Soft Beige, 1 Gallon", w: 726, h: 774 },
  ],
  terracotta: [
    { asin: "B0CSSQYH8D", title: "Hemway Deep Terracotta Red Interior Paint, 2.5 Liter, 84.5 Fl Oz, - Acrylic Emulsion", w: 1500, h: 1492 },
    { asin: "B076BX1N2X", title: "Montage Signature Interior/Exterior Eco-Friendly Paint, Terracotta, Low Sheen, 1 Gallon", w: 1500, h: 1206 },
  ],
  skyBlue: [
    { asin: "B0CSSNXR31", title: "Hemway Sky Blue Interior Paint, 2.5 Liter, 84.5 Fl Oz, - Acrylic Emulsion", w: 1500, h: 1492 },
    { asin: "B00QF5KZCW", title: "PRESTIGE Interior Paint and Primer in One, Blue Sky, Satin, 1 Gallon", w: 965, h: 955 },
  ],
  black: [
    { asin: "B079535PND", title: "THE ONE All-In-One Paint &amp; Primer, Black Matte, 33.8 Fl Oz/1 Liter, 1 Coat Formula", w: 1290, h: 1236 },
    { asin: "B001GUA846", title: "Rustins Quick Dry Matt Black Paint 250ml, 8.5 Fl. Oz", w: 1300, h: 1462 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bathroom-paint-colors-fresh-look-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bathroom-paint-colors-fresh-look", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Bathroom paint is one of the cheapest, fastest ways to completely change how the room feels.</p>
<p>It's also one of the easiest to get wrong, since a small, enclosed space reads color more intensely than almost any other room.</p>
<p>These 12 colors cover the range, from safe to genuinely bold.</p>
${photo("hero.png", "A beautifully painted bathroom with a fresh, inviting color", 1280, 720, "hero")}

<h2>1. Crisp White</h2>
<p>White remains the safest, most universally flattering choice, making a small bathroom feel larger and brighter than almost any other color can.</p>
<p>It also pairs with literally any fixture or accent color, which matters most for anyone who expects to redecorate around it later.</p>
${photo("white-1.png", "A bright, airy bathroom with crisp white walls", 576, 1024)}
${photo("white-2.png", "Crisp white bathroom walls creating an open, spacious feel", 576, 1024, "white")}

<h2>2. Soft Gray</h2>
<p>Gray brings a modern, sophisticated calm without the starkness of pure white, and it reads as more intentional than a plain neutral.</p>
<p>It also hides water spots and small marks better than white does, which is a genuine practical bonus in a room that deals with constant moisture.</p>
${photo("gray-1.png", "A modern bathroom with soft gray walls and sophisticated calm", 576, 1024)}
${photo("gray-2.png", "Stunning modern bathroom design featuring soft gray tones", 576, 1024, "gray")}

<h2>3. Pale Blue</h2>
<p>A pale, almost washed-out blue brings a genuine spa-like serenity that few other colors manage this effortlessly.</p>
<p>It also tends to read as more timeless than trend-driven, aging well over the years that follow a paint job.</p>
${photo("blue-1.png", "A serene bathroom with pale blue walls and spa-like calm", 576, 1024)}
${photo("blue-2.png", "Tranquil modern bathroom design with pale blue walls", 576, 1024, "paleBlue")}

<h2>4. Sage Green</h2>
<p>Sage brings an earthy, calming quality that pairs beautifully with natural materials like wood and stone.</p>
<p>This color has real staying power right now, striking a balance between genuinely current and unlikely to feel dated anytime soon.</p>
${photo("sage-1.png", "A serene, inviting bathroom space featuring sage green walls", 576, 1024)}
${photo("sage-2.png", "A calming bathroom with sage green walls and natural warmth", 576, 1024, "sage")}

<h2>5. Navy Blue</h2>
<p>Navy brings genuine drama and a rich, luxurious depth that few lighter colors can match.</p>
<p>Pairing it with brass or gold fixtures amplifies that luxurious feel considerably more than pairing it with chrome ever could.</p>
${photo("navy-1.png", "A luxurious bathroom with navy blue walls and rich depth", 576, 1024)}
${photo("navy-2.png", "Navy blue bathroom walls paired with warm, elegant fixtures", 576, 1024, "navy")}

<h2>6. Blush Pink</h2>
<p>A soft blush brings genuine warmth and a touch of romance without tipping into anything overly sweet or juvenile.</p>
<p>It pairs especially well with brass fixtures and warm wood tones, reinforcing rather than fighting the color's natural softness.</p>
${photo("blush-1.png", "A chic bathroom with blush pink walls and brass fixtures", 576, 1024)}
${photo("blush-2.png", "A stunningly chic bathroom design featuring blush pink tones", 576, 1024, "blush")}

<h2>7. Charcoal Gray</h2>
<p>Charcoal brings a bolder, more dramatic edge than soft gray, suited to a more modern, minimalist bathroom specifically.</p>
<p>It also makes white fixtures and trim pop with far more contrast than a lighter wall color ever could.</p>
${photo("charcoal-1.png", "A stunning minimalist bathroom design featuring charcoal gray walls", 576, 1024)}
${photo("charcoal-2.png", "A sleek, modern bathroom with charcoal gray walls and bold contrast", 576, 1024, "charcoal")}

<h2>8. Mint Green</h2>
<p>Mint brings a genuinely fresh, slightly playful quality that reads as cheerful without feeling overdone.</p>
<p>This color works especially well in a bathroom that gets good natural light, since it can read a little flat in a dim space.</p>
${photo("mint-1.png", "A delightful, refreshing bathroom design with mint green walls", 576, 1024)}
${photo("mint-2.png", "A fresh and playful bathroom with mint green walls", 576, 1024, "mint")}

<h2>9. Beige</h2>
<p>Beige brings warmth and genuine versatility, pairing easily with almost any fixture finish or accent color choice.</p>
<p>It's a safer, more conservative choice than most others on this list, best suited to anyone prioritizing resale appeal over personal drama.</p>
${photo("beige-1.png", "A warm, inviting bathroom with beige walls and versatile styling", 576, 1024)}
${photo("beige-2.png", "A warm and inviting bathroom featuring beige tones throughout", 576, 1024, "beige")}

<h2>10. Terracotta</h2>
<p>Terracotta brings genuine Mediterranean warmth and an earthy, sun-washed quality that few other colors replicate.</p>
<p>It pairs beautifully with natural stone and wood, reinforcing an earthy, grounded bathroom aesthetic.</p>
${photo("terracotta-1.png", "A cozy, earthy Mediterranean-style bathroom with terracotta walls", 576, 1024)}
${photo("terracotta-2.png", "An earthy bathroom with terracotta-colored walls and natural materials", 576, 1024, "terracotta")}

<h2>11. Sky Blue</h2>
<p>A brighter sky blue brings a cheerful, energetic quality that pale blue's quieter serenity doesn't quite capture.</p>
<p>This color works especially well in a bathroom meant to feel playful and bright rather than purely calming.</p>
${photo("skyblue-1.png", "A serene, inviting bathroom featuring bright sky blue walls", 576, 1024)}
${photo("skyblue-2.png", "A light, uplifting bathroom with sky blue walls", 576, 1024, "skyBlue")}

<h2>12. Black</h2>
<p>Black is the boldest option on this entire list, bringing genuine drama and a striking, contemporary edge.</p>
<p>This works best with strong lighting and some lighter contrast elsewhere in the room, since black absorbs far more light than any other color here.</p>
${photo("black-1.png", "A bold, contemporary bathroom with black walls and striking drama", 576, 1024)}
${photo("black-2.png", "A striking modern bathroom design with black walls", 576, 1024, "black")}

<h2>Pro Tips for Picking the Right Color</h2>
<p>Testing a sample patch under the bathroom's actual lighting matters more here than in almost any other room, since bathroom lighting varies so widely from fixture to fixture.</p>
<p>A smaller, darker bathroom generally does better with a lighter color, while a larger one with good natural light can handle something bolder without feeling closed-in.</p>

<h2>Go Paint That Bathroom</h2>
<p>None of these 12 colors is universally correct &mdash; the right one depends on the room's size, light and the mood that's actually wanted.</p>
<p>Whichever gets chosen, a fresh coat of paint remains one of the fastest, most affordable ways to transform the whole room.</p>
`;

module.exports = { body };
