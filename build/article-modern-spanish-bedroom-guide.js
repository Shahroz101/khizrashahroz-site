// Body content for "A Step-by-Step Guide to a Modern Spanish
// Bedroom". Numbered guide format, matching the source's 10 steps.
// Genuinely distinct room scope from the site's other Spanish-style
// articles (two bathroom-focused, one whole-home). Source photos have
// no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0FKPQC59P", title: "Bare Home Ultra-Soft Duvet Cover Set, Queen, Terracotta", w: 1200, h: 1200 },
    { asin: "B0FYDMY4G8", title: "Boho Rattan Small Table Lamp with Double Layer Bamboo Woven Shade", w: 1500, h: 1500 },
  ],
  step1: [
    { asin: "B0GXB1CG4B", title: "Terracotta Corduroy Decorative Throw Pillow Covers, 18 x 18 Inch", w: 1500, h: 1090 },
    { asin: "B0BG8DFH1D", title: "CozeCube Burnt Orange Seed Stitch Throw Blanket, 50 x 60 Inch", w: 1304, h: 886 },
  ],
  step2: [
    { asin: "B0DHSXSL1J", title: "Annie Sloan Wall Paint, Canvas, 4 Fl Oz Tester", w: 628, h: 963 },
    { asin: "B0BN15P5B1", title: "A LA MAISON CEILINGS Faux Wood Ceiling Planks, Rustic Beige, 39 x 6 Inch", w: 1500, h: 1461 },
  ],
  step3: [
    { asin: "B0DHLVN6S5", title: "Beverly Rug Easy Jute Natural Area Rug, 8 x 10 Ft, Solid, Washable", w: 1500, h: 1500 },
    { asin: "B0FG7CZKM2", title: "W and S Hexagon Peel and Stick Floor Tile, 24 Sheets, Red Brown Terracotta Look", w: 1500, h: 1500 },
  ],
  step4: [
    { asin: "B0CL9KR9J7", title: "Manusa Antic Custom Engraved Wood Headboard Panel, Hand Carved Mandala Style", w: 1500, h: 1351 },
    { asin: "B0H4LLCGGK", title: "Metal Platform Queen Bed Frame, Victorian Classic Iron with Headboard and Footboard", w: 1500, h: 1500 },
  ],
  step5: [
    { asin: "B08DG6FPLX", title: "Authentic Handmade Mexican Blanket, 70 x 50 Inch, Cherry", w: 1489, h: 1500 },
    { asin: "B0FG81YPZ8", title: "Embroidered Flower Cluster Throw Pillow Cover, 18 x 18 Inch", w: 1260, h: 1500 },
  ],
  step6: [
    { asin: "B0H2LSP7NM", title: "Touch Bedside Table Lamp with USB C and A Charging Ports, Nightstand Lamp", w: 1500, h: 1500 },
    { asin: "B08TBJ9K4F", title: "CADUKE Plug-In Wall Sconces, Set of 2, Swing Arm Wall Lamps", w: 1500, h: 1500 },
  ],
  step7: [
    { asin: "B0H1FGVWQF", title: "Arched Full Length Floor Mirror, Black Aluminum Frame, 71 x 26 Inch", w: 1170, h: 1155 },
    { asin: "B0D469Z441", title: "Sintosin Farmhouse Arch Window Frame Wall Decor, 12 x 36 Inch", w: 471, h: 1500 },
  ],
  step8: [
    { asin: "B0BYVGCYNL", title: "LUKA Ceramic Rustic Farmhouse Vase Set of 3, Terracotta", w: 1500, h: 1500 },
    { asin: "B0H8DKNPG6", title: "Ceramic Decorative Table Bowl Tray, 11 Inch, Rustic Farmhouse", w: 1500, h: 1500 },
  ],
  step9: [
    { asin: "B0F3CQCVW3", title: "Realead 6 Ft Artificial Olive Tree with Tall Planter", w: 741, h: 1500 },
    { asin: "B0H39993RD", title: "Fake Potted Snake Plants, 2 Pack, 9.45 Inch", w: 1374, h: 1500 },
  ],
  step10: [
    { asin: "B0HCTJXM6B", title: "Retro Spanish Courtyard Architecture Framed Canvas Wall Art, 24 x 36 Inch", w: 861, h: 1500 },
    { asin: "B0C9SXCLRH", title: "upsimples Picture Frames Set of 10, Natural, 8x10, 5x7 and 4x6", w: 1500, h: 1286 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "modern-spanish-bedroom-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "modern-spanish-bedroom-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A modern Spanish bedroom comes together in a specific order &mdash; palette and surfaces first, then furniture and textiles, then the smaller personal layer.</p>
<p>This walks through that sequence for a bedroom specifically, where the goal is genuine rest, not just a styled photo.</p>
${photo("hero.png", "Beautiful modern Spanish bedroom with warm, inviting design", 1312, 736, "hero")}

<h2>Step 1: Start With the Color Palette</h2>
<p>Warm terracottas, sandy neutrals and deep earthy accents set the room's entire mood before anything else gets chosen.</p>
<p>This decision should get locked in first, since every later choice &mdash; furniture, textiles, decor &mdash; gets selected in relation to it.</p>
${photo("color-palette.png", "Warm, earthy color palette setting the bedroom's foundation", 574, 1024, "step1")}

<h2>Step 2: Get the Walls, Ceiling and Texture Right</h2>
<p>A textured plaster finish, exposed beams, or simply a warm, slightly imperfect wall treatment does more for authenticity than flat, perfectly smooth walls ever will.</p>
<p>This step matters more than most people expect, since texture is doing a lot of the room's visual work in a palette this restrained.</p>
${photo("walls-textures.png", "Textured walls and ceiling bringing authentic character to the room", 574, 1024, "step2")}

<h2>Step 3: Choose the Right Flooring</h2>
<p>Terracotta tile, natural stone, or warm wood all suit this style far better than carpet, which works against the grounded, earthy feel the rest of the room is building toward.</p>
<p>A natural-fiber rug can add softness underfoot without needing to compromise on the flooring material itself.</p>
${photo("floors.png", "Terracotta tile or natural stone flooring grounding the bedroom", 574, 1024, "step3")}

<h2>Step 4: Choose Furniture That Blends Old and New</h2>
<p>Clean modern silhouettes in genuinely old-world materials &mdash; solid wood, wrought iron details, leather &mdash; capture the style's real balance between contemporary comfort and traditional craftsmanship.</p>
<p>A single statement piece, like a hand-carved headboard, does more for the room's character than a fully matched furniture set.</p>
${photo("furniture.png", "Furniture blending modern comfort with old-world craftsmanship", 574, 1024, "step4")}

<h2>Step 5: Add Textiles That Tell a Story</h2>
<p>Handwoven blankets, embroidered pillows and natural-fiber bedding bring genuine texture and a sense of history into the room.</p>
<p>This layer is where a lot of the room's warmth actually comes from, more so than the wall color or furniture alone.</p>
${photo("textiles.png", "Handwoven textiles adding genuine warmth and history to the bedroom", 574, 1024, "step5")}

<h2>Step 6: Light It Warm</h2>
<p>Warm-toned bulbs and layered sources &mdash; a bedside lamp, a wall sconce, soft ambient light &mdash; keep the room feeling restful rather than clinical.</p>
<p>A cool-toned bulb undoes much of the warmth built up through the palette and materials, making this one detail worth getting right.</p>
${photo("lighting.png", "Warm layered lighting keeping the bedroom feeling restful", 574, 1024, "step6")}

<h2>Step 7: Embrace the Architecture</h2>
<p>An arched doorway, a niche, or exposed beams bring genuine Spanish architectural character into the room &mdash; and where the real architecture doesn't exist, a faux arch or similar detail can approximate it.</p>
<p>This detail does more for authenticity than any amount of decor layered on top of a plain rectangular room.</p>
${photo("architecture.png", "Architectural details like an arch bringing authentic Spanish character", 574, 1024, "step7")}

<h2>Step 8: Keep Decor Minimal but Meaningful</h2>
<p>A few considered objects &mdash; real texture, genuine material, a specific personal meaning &mdash; outperform a fully decorated room trying to include every element of the style at once.</p>
<p>This restraint is central to the style succeeding as a restful bedroom, not just a styled room.</p>
${photo("decor.png", "Minimal but meaningful decor finishing the room without clutter", 574, 1024, "step8")}

<h2>Step 9: Add Calming Greenery</h2>
<p>A simple, low-maintenance plant brings the Mediterranean's outdoor connection into the bedroom without adding any maintenance stress to a room meant for rest.</p>
<p>One well-placed plant works better here than several scattered around the room.</p>
${photo("greenery.png", "Calming greenery bringing the Mediterranean outdoors into the bedroom", 574, 1024, "step9")}

<h2>Step 10: Personalize It</h2>
<p>A meaningful object, a piece of art tied to a real memory, or a color choice that's genuinely personal makes the room feel like an actual sanctuary, not a styled rental.</p>
<p>This final layer is what separates a technically correct Spanish-style bedroom from one that feels like it belongs to someone specific.</p>
${photo("personalize.png", "Personal touches making the bedroom feel like a genuine sanctuary", 574, 1024, "step10")}

<h2>Make It a Vibe</h2>
<p>None of these 10 steps need to happen in a single weekend.</p>
<p>Start with the palette and the flooring, since both anchor everything else, then build toward furniture, textiles and the personal layer over time.</p>
<p>A modern Spanish bedroom done well feels like a genuine retreat, not just a photo-ready room.</p>
`;

module.exports = { body };
