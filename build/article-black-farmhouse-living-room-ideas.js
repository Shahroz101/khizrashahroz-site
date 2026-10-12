// Body content for "Black Farmhouse Living Room Ideas for a Bold and
// Elegant Look". Photos carried over from the source article (AI-
// generated style, no Pinterest links, no visible credits). All 10
// ideas had a photo in the source; all 10 kept (one idea, "Black and
// White Walls", had 2 photos — both kept). Rewritten out of the
// source's very casual, joke-heavy voice ("the James Dean of farmhouse
// decor," "chef's kiss") into the site's calmer, neutral tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CYQDL12K", title: "Ekena Millwork 3-Sided Rough Cedar Faux Wood Ceiling Beam", w: 1200, h: 702 },
    { asin: "B087YR41VB", title: "Timberthane Knotty Pine 3-Sided Faux Wood U-Beam, 12\" x 6\"", w: 1200, h: 705 },
  ],
  leatherSofa: [
    { asin: "B0G2M4R2R6", title: "Signature Design by Ashley 3-Piece Sectional Sofa, Black Leather Couch", w: 1373, h: 392 },
    { asin: "B0FYC82113", title: "Signature Design by Ashley Glassmere 3-Seat Leather Reclining Sofa, Black", w: 1500, h: 848 },
  ],
  blackWhiteWalls: [
    { asin: "B0F1C6JCK5", title: "ALL-IN-ONE Paint, Gallon Bundle, Iron Gate", w: 720, h: 879 },
    { asin: "B07BK7T82K", title: "Glidden Interior Paint + Primer: White/Navajo White, One Coat, Eggshell, 1 Quart", w: 1500, h: 1471 },
  ],
  lanterns: [
    { asin: "B0CSP2QJ5F", title: "2 Pcs Black Decorative Metal Lanterns Farmhouse Lantern Decor with Candles", w: 1040, h: 1024 },
    { asin: "B0BX2YS7VQ", title: "Bdor 16 Inch Outdoor Indoor Lantern, Set of 2 Black Metal Candle Lanterns", w: 1229, h: 1500 },
  ],
  accentChairs: [
    { asin: "B0BQXTMTXM", title: "Zinus Aidan Black Sling Accent Chair, Metal Frame", w: 1500, h: 1500 },
    { asin: "B0DQ7Y78PW", title: "Lexicon Modern Leather Match Accent Chair, Tufted, Solid Wood Arms, Black", w: 1500, h: 1500 },
  ],
  brassLights: [
    { asin: "B085R89R4M", title: "JONATHAN Y Homer 10\" Industrial Dome Pendant Light", w: 1248, h: 1500 },
    { asin: "B0CGXGP842", title: "Black Dome Pendant Lights for Kitchen Island, 11.8\"", w: 1210, h: 1500 },
  ],
  plaidPillows: [
    { asin: "B07QRZQ837", title: "VAKADO Outdoor Plaid Throw Pillow Covers 18x18 Set of 2, Black &amp; White", w: 942, h: 807 },
    { asin: "B0H4KKJFNW", title: "Hexagram Throw Pillow Covers 18x18, Black and White Plaid Pillow Covers", w: 1500, h: 1500 },
  ],
  rug: [
    { asin: "B0D91GHZX2", title: "Black Boho Vintage Area Rug 5x7, Washable Low Pile", w: 1500, h: 1500 },
    { asin: "B0FKYM6H6R", title: "Dark Vintage 5x7 Area Rug, Washable Low Pile", w: 1500, h: 1500 },
  ],
  coffeeTable: [
    { asin: "B0989XTLX6", title: "COZAYH 2-Piece Round Nesting Coffee Table Set, Natural Wood Top with Black Metal Legs", w: 1500, h: 1041 },
    { asin: "B0CSFR72JQ", title: "FLYJOE Rustic Wood Round Coffee Table with Metal Legs", w: 1500, h: 1500 },
  ],
  openShelving: [
    { asin: "B0DHV89WTS", title: "Fun Memories 16 Inch Floating Shelves, Deep Rustic Black Wooden Wall Shelves", w: 1500, h: 1500 },
    { asin: "B0GFMX685D", title: "Black Rustic Wood Floating Shelves, 16\" x 12\"", w: 1499, h: 1500 },
  ],
  framedArt: [
    { asin: "B0FZ84FRCV", title: "Framed Dark Botanical Wall Art Set of 3, Black Moody Floral Wall Decor Paintings", w: 1500, h: 925 },
    { asin: "B0GYNN5SLT", title: "Framed Vintage Botanical Wall Art Set of 2, Black and White Striped", w: 1373, h: 1106 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "black-farmhouse-living-room-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "black-farmhouse-living-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Black Leather Sofa",
    paras: [
      "A black leather sofa is one of the bolder moves on this list, but it tends to pay off.",
      "It brings a cool, classic edge to a farmhouse living room, and topping it with rustic wood furniture, woven throws and textured pillows softens the look while adding real comfort.",
      "A secondhand piece, refreshed with a bit of care, can become the room's defining statement without the cost of buying new.",
    ],
    photo: photo("leather-sofa.jpg", "Black leather sofa in a cozy farmhouse living room", 683, 1024, "leatherSofa"),
  },
  {
    n: "02",
    title: "Black and White Walls",
    paras: [
      "Painting a wall black feels like a leap, but pairing black walls with white trim is a bold move that consistently pays off.",
      "Rustic wood beams or vintage light fixtures layered against that contrast push the room toward a moody farmhouse feel rather than anything stark.",
      "White trim framing each corner against black walls creates a crisp outline that reads as chic without losing the warmth of the rest of the room.",
    ],
    photo: photo("black-white-walls-a.jpg", "Black and white walls in a warm farmhouse living room", 683, 1024) + photo("black-white-walls-b.jpg", "Black and white walls paired with rustic wood beams in a farmhouse living room", 683, 1024, "blackWhiteWalls"),
  },
  {
    n: "03",
    title: "Black Farmhouse Lanterns",
    paras: [
      "Lighting genuinely makes or breaks a room, and black farmhouse lanterns do a lot of that work on their own.",
      "A matte black finish, glass panes and a bit of old-school detailing bring charm and coziness in equal measure, without reading as overly rustic or dated.",
      "The soft glow they throw, with shadows dancing against shiplap and beams, adds a warmth that overhead lighting alone rarely manages.",
    ],
    photo: photo("lanterns.jpg", "Black farmhouse lanterns providing mood lighting", 683, 1024, "lanterns"),
  },
  {
    n: "04",
    title: "Black Accent Chairs",
    paras: [
      "For a quick way to elevate a room without a full redo, a black accent chair does a surprising amount of work.",
      "Paired with a plaid pillow or a chunky knit blanket, it reads as a genuine statement piece rather than just another chair.",
      "Placed near a reading lamp, it instantly becomes a cozy corner worth actually using.",
    ],
    photo: photo("black-accent-chairs.jpg", "Black accent chair in a rustic black and white living room", 683, 1024, "accentChairs"),
  },
  {
    n: "05",
    title: "Black and Brass Light Fixtures",
    paras: [
      "Black and brass together is one of the more reliable farmhouse lighting pairings available.",
      "A pendant light, chandelier or wall sconce in this combination takes a room's lighting up a noticeable level, whether it's installed in the kitchen or the living room itself.",
      "A brass-accented pendant in particular tends to make a space feel considerably more polished than its actual cost would suggest.",
    ],
    photo: photo("brass-light-fixtures.jpg", "Black and brass light fixtures in a farmhouse living room", 683, 1024, "brassLights"),
  },
  {
    n: "06",
    title: "Black and White Plaid Throw Pillows",
    paras: [
      "Throw pillows genuinely matter, and black and white plaid ones are close to farmhouse shorthand at this point.",
      "They're bold, charming, and remarkably easy to mix and match with whatever else is already on the sofa.",
      "Layering in a few solid-colored pillows or textured throws alongside the plaid keeps the whole arrangement cozy rather than tipping into a full checkerboard look.",
    ],
    photo: photo("plaid-pillows.jpg", "Black and white plaid throw pillows on a farmhouse sofa", 683, 1024, "plaidPillows"),
  },
  {
    n: "07",
    title: "Black Farmhouse Rug",
    paras: [
      "Rugs are consistently underrated, and a black farmhouse rug does more for a room than its understated presence suggests.",
      "It anchors the whole space, adds real warmth underfoot, and happens to hide everyday dirt far better than a lighter rug ever could.",
      "It's one of those elements that quietly pulls a room together, making the rest of the styling look more intentional than it might actually be.",
    ],
    photo: photo("farmhouse-rug.jpg", "Black farmhouse rug anchoring a cozy living room", 683, 1024, "rug"),
  },
  {
    n: "08",
    title: "Black and Wood Coffee Table",
    paras: [
      "A coffee table should do more than hold drinks, and a black and wood combination strikes a genuine balance between modern and rustic.",
      "Black metal legs paired with a warm wood top, or the reverse, both read as understated elegance rather than a trend-driven choice.",
      "Surrounded by cozy textures and soft lighting, it gives the room a farmhouse-chic feel with just enough edge to keep it from feeling too soft.",
    ],
    photo: photo("coffee-table.jpg", "Black and wood coffee table in a modern farmhouse living room", 683, 1024, "coffeeTable"),
  },
  {
    n: "09",
    title: "Open Shelving With Black Accents",
    paras: [
      "Open shelves with black brackets or frames combine form and function in a way closed cabinetry simply can't.",
      "They give a collection of books, ceramics or small decor somewhere to actually be seen, rather than tucked away.",
      "The black hardware adds a bit of structure and contrast against whatever's displayed, keeping the shelving from reading as an afterthought.",
    ],
    photo: photo("open-shelving.jpg", "Open shelving with black accents displaying decor", 683, 1024, "openShelving"),
  },
  {
    n: "10",
    title: "Black Framed Artwork",
    paras: [
      "A blank wall rarely does a farmhouse living room any favors, and black-framed art is a low-commitment, high-impact fix.",
      "Bold black frames paired with softer, lighter artwork give the wall structure and contrast without overpowering the rest of the room's palette.",
      "The combination keeps the look feeling like effortless chic rather than anything too heavy or severe.",
    ],
    photo: photo("framed-artwork.jpg", "Black framed artwork displayed on a farmhouse living room wall", 683, 1024, "framedArt"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || ""}`;
}

const body = `
<p>Black isn't the first color most people reach for in a farmhouse living room, but it does genuine work when used with intention. Rather than canceling out the warmth farmhouse style depends on, black adds contrast and structure that makes the rest of the room's softer elements stand out even more.</p>
<p>None of the ideas below require committing to a full black room. Most work as individual additions &mdash; a chair, a rug, a set of light fixtures &mdash; layered into a space one piece at a time.</p>
${photo("hero.jpg", "Black farmhouse living room with a vaulted ceiling and fireplace", 1152, 768, "hero")}

<h2>10 Black Farmhouse Living Room Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Adding black to a farmhouse living room doesn't mean sacrificing warmth &mdash; it means turning up the style without losing the lived-in charm the style is built on.</p>
<p>Starting small, with a throw pillow or a framed print, then building up to a statement chair or a full lighting swap, makes it easy to find the right balance between bold and inviting.</p>
`;

module.exports = { body };
