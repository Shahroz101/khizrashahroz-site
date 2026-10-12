// Body content for "13 Black Bathroom Decor Ideas for a Full Bathroom".
// Numbered idea-list format, reordered from the source's 12 sections
// (walls, finish, contrast, fixtures, tiles, lighting, vanities,
// accessories, metallics, texture, shower frames, plants). Distinct
// from the existing black-powder-room-material-choices article, which
// is scoped to a powder room (no shower/tub, half-bath) and framed
// through material execution. This source explicitly covers shower
// frames and wet-area tile, so it's scoped to a full bathroom with
// wet zones — a genuinely different context, not just a reframing of
// the same room type. Source had 0 Pinterest pins across all 14
// images, so all photos are uncredited via photo().

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DNQ9T22W", title: "Koonmi 30x30 Inch Black Bathroom Mirror for Over Sink", w: 1500, h: 1500 },
    { asin: "B08R5BY8B8", title: "LYYYXGYP Black Round Wall Mirror for Bathroom 30x30 Inches Stainless Steel Metal Frame", w: 1500, h: 1500 },
  ],
  intro: [
    { asin: "B0GCMRSYZX", title: "CASA COPENHAGEN Solitaire 6 Pieces Towel Set- Bright Black", w: 865, h: 960 },
    { asin: "B0CGX7WHFM", title: "KASUNTING Matte Black Bathroom Accessories Set, 4 Pcs Glass Bathroom Accessory Set", w: 1500, h: 1114 },
  ],
  walls: [
    { asin: "B079535PND", title: "THE ONE All-In-One Paint &amp; Primer, Black Matte, 33.8 Fl Oz/1 Liter, 1 Coat Formula", w: 1290, h: 1236 },
    { asin: "B0F1C6JCK5", title: "ALL-IN-ONE Paint, Gallon Bundle, Iron Gate", w: 720, h: 879 },
  ],
  finish: [
    { asin: "B001GUA846", title: "Rustins Quick Dry Matt Black Paint 250ml, 8.5 Fl. Oz", w: 1300, h: 1462 },
    { asin: "B00QGLPIP4", title: "PRESTIGE Interior Paint and Primer in One, Penguin Black, Satin, 1 Gallon", w: 965, h: 955 },
  ],
  contrast: [
    { asin: "B08FXXWFTG", title: "6 Piece 100% Cotton Bath Towel Set, 2 Bath, 2 Hand, 2 Face, White", w: 1392, h: 1500 },
    { asin: "B07VBCC3W5", title: "Utoplike, 24\"x18\", Teak Wood Bath Mat, Shower Mats for Bathroom Large", w: 1500, h: 1028 },
  ],
  fixtures: [
    { asin: "B0BWSPMP8Z", title: "Pfister Vaneri Single Handle Bathroom Sink Faucet 1-Hole Matte Black Finish NSF Certified", w: 1114, h: 1500 },
    { asin: "B07Y2X89QB", title: "SR SUN RISE Shower Faucet Set 10-Inch Rainfall Shower Head Matte Black", w: 1464, h: 1500 },
  ],
  tiles: [
    { asin: "B0F1T99TRY", title: "Art3d 20 Pack Decorative 3D Wall Panels, 19 Sq.Feet PVC Interior Wall Décor, 11.8\"x11.8\"", w: 1480, h: 1500 },
    { asin: "B0CKYM58ZY", title: "AULIGET 100 Piece Black Slate Peel and Stick Backsplash Wall Tiles", w: 1193, h: 906 },
  ],
  lighting: [
    { asin: "B0FQNR9LGP", title: "Modern Bathroom Light Fixtures, Black Vanity Lights, 360° Rotatable, 24 In", w: 1500, h: 1500 },
    { asin: "B0F8W7NF7B", title: "zouzai 16 Inch Black Modern LED Bathroom Vanity Light Bar, 12W, Dimmable", w: 1500, h: 1500 },
  ],
  vanity: [
    { asin: "B0G54FSXZY", title: "Black Shaker Bathroom Vanity Base 30\", Solid Wood &amp; Plywood Construction", w: 1500, h: 1500 },
    { asin: "B081QDGVSM", title: "Elegant Decor Raya 30\" Single Resin Top Metal Bathroom Vanity in Black", w: 763, h: 993 },
  ],
  accessories: [
    { asin: "B0CRYYWT7J", title: "7 Pcs Matte Black Bathroom Accessory Set with Trash Can, Soap Dispenser and Tray", w: 1500, h: 1061 },
    { asin: "B0B2VHDRBV", title: "Black Bathroom Accessories Set 4 Pcs, Toothbrush Holder, Lotion Soap Dispenser", w: 1500, h: 1442 },
  ],
  metallics: [
    { asin: "B0GCFKH84F", title: "5 Pieces Bathroom Hardware Accessories Set, Brushed Gold, 24 Inch Towel Rack", w: 1500, h: 1491 },
    { asin: "B07WFRSFVV", title: "AOTAKE Brushed Gold Stainless Steel Soap Dispenser, Refillable", w: 368, h: 897 },
  ],
  texture: [
    { asin: "B0CCW8W2TJ", title: "NY Loft 100% Cotton 6 Piece Textured Towel Set, Black, Super Soft Quick-Dry", w: 1411, h: 1500 },
    { asin: "B0H6ZY3HR1", title: "Memory Foam Bath Mat Set 2 Piece, Super Soft &amp; Absorbent Bathroom Rugs", w: 1234, h: 1382 },
  ],
  showerFrame: [
    { asin: "B0DZXJ4WKF", title: "Framed Shower Door, 60\" W x 74\" H with 5/16\" Glass, Matte Black", w: 1500, h: 1500 },
    { asin: "B0HJZKJZRR", title: "60\" x 76\" Sliding Shower Door, 1/4\" Tempered Glass, Matte Black", w: 1500, h: 1500 },
  ],
  plants: [
    { asin: "B0C54M56M5", title: "Pothos Live Indoor Plant, 4 inch Pot, Variegated White and Green Leaves", w: 1474, h: 1425 },
    { asin: "B09LH421H1", title: "Golden Pothos Live Plant in 4 in. Pot", w: 725, h: 836 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "black-bathroom-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "black-bathroom-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A powder room can go full black wall-to-wall without much consequence.</p>
<p>A full bathroom, with a shower, tile and real humidity, is a different challenge entirely &mdash; the color choice has to survive wet zones and still feel considered rather than cave-like.</p>
<p>These 13 ideas are built for that version of the room.</p>
${photo("hero.jpg", "Striking black bathroom decor transforming a full bathroom", 1400, 1111, "hero")}

<h2>Why Black Is Having a Real Moment Here</h2>
<p>Black reads as dramatic and sophisticated in a way few other bathroom colors manage, and it photographs exceptionally well against white fixtures and natural light.</p>
<p>It also hides water spots and small imperfections better than most pale finishes, which matters more in a room that deals with constant moisture.</p>
${photo("intro.png", "Dramatic black bathroom styling that photographs beautifully", 574, 1024, "intro")}

<h2>1. Decide How Much Wall, Not Just Whether</h2>
<p>Full black walls look striking in photos but can feel genuinely heavy in a smaller or darker bathroom without enough natural light.</p>
<p>One accent wall, or black only below a chair rail, delivers most of the drama with less risk of the room feeling closed-in.</p>
${photo("walls.png", "Black accent wall bringing drama without overwhelming the bathroom", 574, 1024, "walls")}

<h2>2. Pick Matte or Glossy With the Room's Light in Mind</h2>
<p>Matte black absorbs light and leans moodier and more velvety, while glossy black bounces light around and reads sleeker, more modern.</p>
<p>A bathroom with limited natural light generally does better with some glossy surfaces in the mix, purely for how much more light they reflect.</p>
${photo("finish.png", "Matte and glossy black finishes creating different bathroom moods", 574, 1024, "finish")}

<h2>3. Break Up the Black With Real Contrast</h2>
<p>White tile, light wood, or a pale stone counter keeps an all-black scheme from tipping into something closer to a cave than a bathroom.</p>
<p>Even a single white towel or light-colored rug does real work here, giving the eye somewhere to land.</p>
${photo("contrast.png", "White and black contrast balancing a bold bathroom color scheme", 574, 1024, "contrast")}

<h2>4. Choose Fixtures That Commit to the Look</h2>
<p>A black faucet, black shower fixtures, or a black-framed mirror extend the theme into the room's actual hardware, not just its surfaces.</p>
<p>This is one of the easier ways to commit to the look without touching a single wall or tile.</p>
${photo("fixtures.png", "Black bathroom fixtures extending the theme into hardware details", 574, 1024, "fixtures")}

<h2>5. Use Tile to Add Texture, Not Just Color</h2>
<p>Textured, patterned or matte black tile brings visual depth that a flat painted wall can't, which matters more here than in a powder room with no wet-area tile at all.</p>
<p>This is where a full bathroom's black scheme genuinely diverges from a powder room's &mdash; tile has to perform in the shower, not just look good on a dry wall.</p>
${photo("tiles.png", "Textured black tile adding depth to a full bathroom's wet areas", 574, 1024, "tiles")}

<h2>6. Layer In More Light Than Usual</h2>
<p>A black bathroom absorbs more ambient light than a pale one, which makes layered lighting &mdash; overhead, vanity, maybe even a small accent fixture &mdash; more necessary than optional.</p>
<p>Skipping this step is one of the most common reasons an otherwise well-designed black bathroom ends up feeling dim rather than dramatic.</p>
${photo("lighting.png", "Layered lighting keeping a black bathroom bright rather than dim", 574, 1024, "lighting")}

<h2>7. Let the Vanity Be the Showstopper</h2>
<p>A black vanity, especially paired with a contrasting countertop, tends to become the room's natural focal point without any extra styling effort.</p>
<p>This is worth prioritizing over smaller details if only one black element is going into the room's budget.</p>
${photo("vanities.png", "A black vanity serving as a full bathroom's natural focal point", 574, 1024, "vanity")}

<h2>8. Add Black Through Accessories First</h2>
<p>Black towels, a soap dispenser, or a small tray are the lowest-commitment way to test the look before painting a single wall.</p>
<p>This is also the easiest option to reverse later if the look doesn't end up working the way it did in planning.</p>
${photo("accessories.png", "Black bathroom accessories offering a low-commitment way to test the look", 574, 1024, "accessories")}

<h2>9. Mix In Warm Metal</h2>
<p>Brass or gold hardware against black surfaces creates genuine warmth that pure black-and-white can feel like it's missing.</p>
<p>Chrome works too, for a cooler, more modern pairing instead of a warmer one.</p>
${photo("metallics.png", "Warm brass and gold metal accents pairing with black bathroom surfaces", 574, 1024, "metallics")}

<h2>10. Add Texture Beyond the Tile</h2>
<p>A woven rug, a textured towel, or a nubby bath mat keeps an all-black room from reading as flat or one-dimensional.</p>
<p>This matters more here than in most other rooms, since black has a tendency to flatten visual depth more than lighter colors do.</p>
${photo("texture.png", "Woven texture adding dimension to an all-black bathroom scheme", 574, 1024, "texture")}

<h2>11. Frame the Shower in Black</h2>
<p>A black-framed shower door or black shower surround brings a sleek, modern edge that a powder room never gets the chance to use, since it has no shower at all.</p>
<p>This single element often does more to define the room's whole look than any wall color choice.</p>
${photo("shower-frames.png", "A sleek black shower frame defining a full bathroom's modern look", 574, 1024, "showerFrame")}

<h2>12. Bring In a Plant to Soften It All</h2>
<p>A single plant against black surfaces creates a contrast that makes both the green and the black read as more vivid than either would alone.</p>
<p>Anything genuinely low-light-tolerant works well here, since most bathrooms don't offer ideal plant conditions to begin with.</p>
${photo("plants.png", "A plant softening and brightening an all-black bathroom scheme", 574, 1024, "plants")}

<h2>Ready to Commit to Black?</h2>
<p>None of these 13 ideas require redoing the entire bathroom at once.</p>
<p>Start with accessories or a vanity swap to test the look, then move toward tile, fixtures or a shower frame once the direction feels right.</p>
<p>A full bathroom gives black more room to perform than a powder room ever could &mdash; wet-area tile, a shower frame, layered lighting &mdash; and that's exactly where this look does its best work.</p>
`;

module.exports = { body };
