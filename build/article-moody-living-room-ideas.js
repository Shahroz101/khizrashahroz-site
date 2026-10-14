// Body content for "13 Moody Living Room Ideas That Instantly
// Transform Your Space". Numbered idea-list format, condensed from a
// 22-section source (why-choose/myths/psychology/key-elements intro
// sections folded into a shorter intro). New topic for the site — no
// existing moody living room article (moody-dark-bedroom-ideas
// covers a different room). Ideas 4, 7 and 9 (metallic accents, dark
// wood tones, patterns) had no source photo, kept text-only. Idea 5
// (dramatic artwork) reused the "why choose" section's photo in the
// source, so it also runs text-only to avoid duplicating the image.
// Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0HCZV7Q6N", title: "4-in-1 Boneless Sofa Bed, 70 Inch, with Storage Pocket and 5 Pillows, Plush Velvet", w: 1500, h: 1500 },
    { asin: "B0D86JWHLC", title: "CO-Z 69 Inch Modern Arc Floor Lamp, Gold, Adjustable Metal Shade, Marble Base", w: 1500, h: 1500 },
  ],
  why: [
    { asin: "B07SRCXSRY", title: "Nestl Cozy Velvet Throw Pillow Covers, 22 x 22 Inch, Soft Solid Charcoal", w: 1500, h: 1500 },
    { asin: "B08LD18J57", title: "RECYCO Chenille Throw Blanket for Couch, 50 x 60 Inch, Dark Gray", w: 1489, h: 1037 },
  ],
  myths: [
    { asin: "B09TR1PMJX", title: "HARRITPURE 30 Inch Round Wall Mirror, Black Metal Frame Circle Mirror", w: 1500, h: 1500 },
    { asin: "B0FC2CVTV7", title: "JOOFO LED Torchiere Floor Lamp for Living Room, with Remote", w: 1181, h: 1500 },
  ],
  psychology: [
    { asin: "B0H79K8FRC", title: "YEPDIN Ceramic Pot Table Lamp, 18.5 Inch, Frosted Black Nightstand Lamp with Tapered Shade", w: 1500, h: 1500 },
    { asin: "B0H95467GK", title: "Glasseam Hurricane Glass Pillar Candle Holders, Amber, Set of 3", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0CJT7VCFN", title: "Samplize Benjamin Moore Cushing Green Peel and Stick Color Sample, HC-125", w: 800, h: 800 },
    { asin: "B0CN23QR9Z", title: "Glidden Total Interior Paint and Primer, Cavalry Navy Blue, Flat, 1 Gallon", w: 1500, h: 1473 },
  ],
  idea2: [
    { asin: "B0BKFR995X", title: "TRLIFE Plug-In Dimmable Wall Sconce, Brushed Brass Swing Arm Wall Light", w: 1224, h: 1427 },
    { asin: "B0CTJGJL2T", title: "GODONLIF Candle Warmer Lamp with Timer, Dimmable, Home Decor", w: 1154, h: 1500 },
  ],
  idea3: [
    { asin: "B08H4KJPV7", title: "MONDAY MOOSE Decorative Velvet Throw Pillow Covers, Set of 4, Double-Sided Modern Colors", w: 1215, h: 1188 },
    { asin: "B0H2LMMFPK", title: "Brooklyn Loom Chunky Boucle Textured Microfiber Throw Blanket, 50 x 70 Inch, Greige", w: 1488, h: 1500 },
  ],
  idea4: [
    { asin: "B0G3TS1YFT", title: "Vintage Brass Decorative Tray, 11.8 Inch, Round with Claw Feet", w: 1379, h: 1500 },
    { asin: "B0FGBTH39X", title: "Gold Metal Geometric Sphere Sculpture Decor, Modern Abstract Figurine", w: 1500, h: 970 },
  ],
  idea5: [
    { asin: "B0H4QG4WJT", title: "Large Framed Gold Abstract Wall Art for Living Room, 3 Piece Canvas Prints", w: 1500, h: 1500 },
    { asin: "B0FX454Z3R", title: "LHHJDIO Vintage Gold Framed Moody Landscape Canvas Wall Art, Farmhouse Style", w: 1500, h: 1094 },
  ],
  idea6: [
    { asin: "B0FPC9XPN3", title: "8 x 10 Ft Dark Grey Memory Foam Area Rug, Solid Indoor Rug for Living Room", w: 1500, h: 1500 },
    { asin: "B095C2QMRF", title: "RYB HOME Green Velvet Blackout Curtains, 84 Inches Long, for Bedroom and Living Room", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0H6PP8LSG", title: "AWASEN Walnut Nightstand, Small End Table with Storage and Spindle Legs", w: 874, h: 1500 },
    { asin: "B0GQZ85WJR", title: "FATORRI Round Fluted Wood Coffee Table, Mid-Century Modern Center Table", w: 1092, h: 1033 },
  ],
  idea8: [
    { asin: "B0DWM7RXPF", title: "Lexicon Swivel Accent Chair, Modern Velvet Round Barrel Chair, Green", w: 1500, h: 1500 },
    { asin: "B0C3W4XCPT", title: "Yaheetech Mid-Century Faux Leather Accent Chairs, Black", w: 1423, h: 1500 },
  ],
  idea9: [
    { asin: "B0F7LFLHVV", title: "Farmhouse Leaves Throw Pillow Covers, Set of 2, 18 x 18 Inch, Mixed Beige", w: 1500, h: 1500 },
    { asin: "B0DTHKN1XL", title: "Erfoni Bird Floral Peel and Stick Wallpaper, Vintage Contact Paper for Walls", w: 1148, h: 1312 },
  ],
  idea10: [
    { asin: "B0HL1X1HMS", title: "Arched Full Length Mirror with Stand, 76 x 34 Inch, Black Aluminum Frame", w: 1127, h: 1122 },
    { asin: "B0CNSK3V5F", title: "XRAMFY 30 Inch Round Gold Circle Wall Mirror, for Bathroom and Entryway", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B0FKNK6YTF", title: "4 Ft Artificial Fiddle Leaf Fig Tree with 48 Leaves, Realistic Faux Ficus Lyrata", w: 1500, h: 1500 },
    { asin: "B0CF9ZZZQY", title: "ASTIDY 5 Ft Artificial Monstera Deliciosa Plant, Faux Tropical Palm Tree with White Planter", w: 854, h: 1500 },
  ],
  idea12: [
    { asin: "B0DXQG78V8", title: "Small Black Ceramic Vase Set of 3, Modern Boho Farmhouse Flower Vases", w: 1500, h: 1500 },
    { asin: "B0FJ5L861K", title: "Decorative Books Set of 3, Faux Coffee Table Books for Home Decor", w: 754, h: 754 },
  ],
  idea13: [
    { asin: "B0B932H337", title: "Amelie Home Chenille Knit Throw Blanket for Couch, Cream, 50 x 60 Inch", w: 1500, h: 1500 },
    { asin: "B0GHK5R4YX", title: "8 x 10 Fluffy Plush Shag Area Rug for Living Room and Bedroom, Ivory", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "moody-living-room-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "moody-living-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A moody living room gets mistaken for a dark, closed-in one more often than it should.</p>
<p>Done well, it reads as enveloping and genuinely restful, not cave-like. The difference comes down to a specific set of choices, not just a dark paint color.</p>
${photo("hero.jpg", "Stunning moody living room with rich, dramatic styling", 1600, 987, "hero")}

<h2>Why Choose a Moody Living Room</h2>
<p>A darker palette makes a room feel more intimate and enveloping, especially in the evening, when most living rooms actually get used.</p>
<p>It also photographs with genuine depth that a brighter, flatter room often lacks.</p>
${photo("why-choose.jpg", "The enveloping, intimate appeal of a moody living room", 1024, 647, "why")}

<h2>Busting the Myths</h2>
<p>The biggest misconception is that dark automatically means small-feeling &mdash; in practice, a well-lit moody room often feels just as spacious as a lighter one, since the eye stops measuring hard corners.</p>
<p>The idea that moody rooms only work in large spaces also doesn't hold up; a smaller room handles the look just as well with the right lighting.</p>
${photo("busting-myths.jpg", "Dispelling common myths about moody living room design", 684, 1024, "myths")}

<h2>The Psychology Behind It</h2>
<p>Darker, warmer spaces genuinely read as calmer to the nervous system than bright, high-contrast ones, which is part of why the look has real staying power beyond trend cycles.</p>
<p>This isn't purely aesthetic preference &mdash; there's a real psychological reason the look feels restful rather than oppressive when done correctly.</p>
${photo("psychology.jpg", "The psychological calm created by a well-designed moody space", 1024, 702, "psychology")}

<h2>1. Go Bold With Deep Wall Color</h2>
<p>A genuinely deep color &mdash; charcoal, forest green, deep navy &mdash; on the walls sets the foundation the rest of the room builds on.</p>
<p>Testing the color under the room's actual lighting matters more here than with almost any lighter paint choice.</p>
${photo("bold-wall-colors.jpg", "Deep, bold wall color setting the foundation for a moody room", 1024, 768, "idea1")}

<h2>2. Layer In Cozy Lighting</h2>
<p>Warm, layered lighting is what keeps a dark room from feeling flat or heavy &mdash; a single overhead fixture in a moody room reads as genuinely gloomy.</p>
<p>This is the single most important detail for making the look actually work, more than the wall color itself.</p>
${photo("cozy-lighting.png", "Layered, warm lighting keeping the room feeling cozy, not gloomy", 1024, 683, "idea2")}

<h2>3. Mix Rich Textures</h2>
<p>Velvet, bouclé, leather and other tactile materials add visual depth that a dark flat surface alone can't provide.</p>
<p>This matters more here than in a lighter room, since there's no color variation doing that work instead.</p>
${photo("rich-textures.png", "Rich, tactile textures adding depth to a moody color palette", 1024, 768, "idea3")}

<h2>4. Use Metallic Accents for Contrast</h2>
<p>Brass, gold or warm bronze details catch available light in a way that keeps a dark room from reading as uniformly flat.</p>
<p>A little goes a long way &mdash; a few well-placed accents outperform metallic surfaces scattered everywhere.</p>
${productGrid("idea4")}

<h2>5. Play With Dramatic Artwork</h2>
<p>One large, confident piece of art works especially well against a dark wall, where it gets to stand out rather than compete with a busy, lighter background.</p>
<p>This is one of the easiest ways to add a genuine focal point to an otherwise monochromatic room.</p>
${productGrid("idea5")}

<h2>6. Add Layers With Rugs and Curtains</h2>
<p>A textured rug and floor-length curtains in complementary dark tones round out the room's enveloping feel from floor to ceiling.</p>
<p>This layering is what keeps the walls from feeling like the only dark element in an otherwise ordinary room.</p>
${photo("rugs-curtains.png", "Layered rugs and curtains extending the moody palette floor to ceiling", 1024, 768, "idea6")}

<h2>7. Create Depth With Dark Wood Tones</h2>
<p>Dark wood furniture against dark walls sounds risky but actually creates a cohesive, layered depth rather than a flat block of one color.</p>
<p>Varying the exact wood tone slightly piece to piece keeps this pairing from feeling monotonous.</p>
${productGrid("idea7")}

<h2>8. Bring In Statement Furniture</h2>
<p>One bold, well-chosen furniture piece reads as more intentional in a moody room than it would in a lighter, busier one.</p>
<p>The dark backdrop actually does some of the styling work, letting a single piece genuinely stand out.</p>
${photo("statement-furniture.png", "A statement furniture piece standing out against the dark backdrop", 1024, 768, "idea8")}

<h2>9. Experiment With Pattern</h2>
<p>A patterned pillow, rug or wallpaper moment adds visual interest without requiring a full color change.</p>
<p>Darker-toned patterns specifically tend to blend more naturally into a moody room than bright, high-contrast ones.</p>
${productGrid("idea9")}

<h2>10. Use Mirrors to Reflect Light</h2>
<p>A well-placed mirror bounces whatever light exists back into the room, directly countering the one real risk of a dark palette &mdash; a room that reads as too dim.</p>
<p>This is one of the simplest, most overlooked tools for keeping a moody room from tipping into actually dark.</p>
${photo("mirrors.png", "A mirror reflecting light to keep the moody room from feeling too dim", 1024, 768, "idea10")}

<h2>11. Add Moody Greenery</h2>
<p>Deep green plants with substantial leaves fit a moody palette far better than delicate, pale varieties.</p>
<p>This also brings a bit of life and movement into a room that could otherwise feel static.</p>
${photo("greenery.jpg", "Deep green plants fitting naturally into a moody color palette", 679, 1024, "idea11")}

<h2>12. Play With Layered Accessories</h2>
<p>A few considered objects, in varying textures and slightly varying dark tones, finish the room without requiring any additional color.</p>
<p>Restraint matters here &mdash; a handful of deliberate pieces reads better than a room full of smaller decorative items.</p>
${photo("layered-accessories.png", "Layered accessories finishing the room without adding new color", 1024, 768, "idea12")}

<h2>13. Balance With Pops of Light Neutrals</h2>
<p>A cream throw, a pale rug, or white bedding-style textiles give the eye somewhere to land in an otherwise dark room.</p>
<p>This contrast is what keeps the room reading as dramatic and intentional rather than simply dark.</p>
${photo("light-neutrals.jpg", "Light neutral accents providing balance within a dark, moody room", 768, 1024, "idea13")}

<h2>Final Thoughts</h2>
<p>None of these 13 ideas require redoing the whole room at once.</p>
<p>Start with lighting and the wall color, since both have the biggest effect on whether the room reads as cozy or oppressive, then layer in texture and the finishing details.</p>
<p>A moody living room done right feels like the most restful room in the house, not the darkest one.</p>
`;

module.exports = { body };
