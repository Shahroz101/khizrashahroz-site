// Body content for "20 Dreamy Boho Bedroom Decor Ideas". Photos carried
// over from the source article (AI-generated style, no Pinterest links,
// no visible credits, consistent with how kitchen-window-treatment-
// ideas and black-gold-gallery-wall-ideas handled the same situation).
// All 20 ideas had a photo in the source; all 20 kept. Rewritten out of
// the source's very casual, meme/emoji-heavy Gen-Z voice into the
// site's calmer, neutral tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B09VH7WCVP", title: "Linentalks White Canopy Bed Scarf, Queen and Full", w: 1200, h: 1200 },
    { asin: "B0CQLWF5B6", title: "100% Cotton Boho Paisley Quilt Set, Queen", w: 1500, h: 1500 },
  ],
  earthTones: [
    { asin: "B0CSSQYH8D", title: "Hemway Deep Terracotta Red Interior Paint, 2.5 L", w: 1500, h: 1492 },
    { asin: "B07KQXDLZ8", title: "Mixhug Velvet Lumbar Throw Pillow Covers, Set of 2", w: 1500, h: 1073 },
  ],
  layeredTextiles: [
    { asin: "B098KGGLJS", title: "Royal Craft Handmade Indian Kantha Quilt Throw, Reversible Cotton", w: 794, h: 1192 },
    { asin: "B0D62XV3FJ", title: "Handmade Chunky Chenille Cable Knit Throw Blanket", w: 1080, h: 1080 },
  ],
  macrame: [
    { asin: "B0968MW2S8", title: "ELASAD 3-Tier Macrame Wall Hanging Shelf", w: 1500, h: 1500 },
    { asin: "B0FQTPVM37", title: "Tempospark Large Macrame Wall Hanging, 43\" x 32\"", w: 1500, h: 1500 },
  ],
  lowBeds: [
    { asin: "B0FHCY8Y5X", title: "GarveeHome Queen Wood Platform Bed Frame", w: 1500, h: 1500 },
    { asin: "B0H94S1LQ8", title: "IDEALHOUSE Queen Wood Platform Bed Frame with Low Profile Design", w: 1500, h: 1500 },
  ],
  plants: [
    { asin: "B0CGXW4XRR", title: "Live Snake Plant + Easy to Grow Houseplants, 6-Pack", w: 961, h: 955 },
    { asin: "B09984VYLR", title: "Dahey Macrame Plant Hangers, Set of 3", w: 1500, h: 1354 },
  ],
  mismatchFurniture: [
    { asin: "B0CDKDJ18C", title: "AODK Small Dresser for Bedroom with 4 Storage Drawers, Brown", w: 834, h: 1500 },
    { asin: "B0CDBPD4Q5", title: "Lerliuo Rattan Nightstand with Charging Station, Boho Night Stand", w: 1278, h: 1500 },
  ],
  globalDecor: [
    { asin: "B0DP7MYBRJ", title: "Handmade Moroccan Leather Pouf Ottoman Cover, Unstuffed", w: 1492, h: 1500 },
    { asin: "B0CL6HKLLJ", title: "cotiled Boho Moroccan Washable Area Rug, 5x7", w: 1500, h: 1500 },
  ],
  tapestries: [
    { asin: "B0F42PC8RP", title: "Fowocu Boho Floral Mandala Tapestry Wall Hanging", w: 1500, h: 1500 },
    { asin: "B0BKL2VGP2", title: "Pink Mandala Tapestry, Large Boho Wall Hanging", w: 1500, h: 1500 },
  ],
  stringLights: [
    { asin: "B0BGGYWNCW", title: "YOLIGHT Fairy Curtain Lights, 96 LED Globe Icicle, 13 ft", w: 1498, h: 1500 },
    { asin: "B01MA43D7R", title: "Lampat G40 Globe LED String Lights, 25 ft, 25 Bulbs", w: 1292, h: 1292 },
  ],
  canopy: [
    { asin: "B0D14XC25W", title: "White Canopy Bed Curtains, 8 Panels", w: 1500, h: 1500 },
    { asin: "B0BW44MQ5W", title: "South to East Canopy Bed Curtains for King/Queen Size Bed, White", w: 1500, h: 1500 },
  ],
  artisan: [
    { asin: "B0CPWBV1SF", title: "PEMAR Handwoven Jute Wall Hanging Baskets, Set of 3", w: 1500, h: 1318 },
    { asin: "B01LYC0Q8Q", title: "Aran Woollen Mills Patchwork Cable Knit Throw Blanket, Made in Ireland", w: 1380, h: 1256 },
  ],
  statementRug: [
    { asin: "B0CFY7VV1F", title: "TOPRUUG Washable Vintage Boho Area Rug, Beige, 5x8", w: 1500, h: 1500 },
    { asin: "B0DXDV6PHL", title: "Washable Vintage Boho Medallion Area Rug, 5x7", w: 1500, h: 1500 },
  ],
  galleryWall: [
    { asin: "B0B6VLJ2FP", title: "Rustic Wood Picture Frame Set, 10 Pack, Real Glass", w: 1500, h: 1255 },
    { asin: "B0CJ765D6S", title: "Matisse-Style Boho Neutral Wall Art Prints, Set of 6", w: 1500, h: 1500 },
  ],
  rattanWicker: [
    { asin: "B09WBHVZJN", title: "Bali &amp; pari Kaka Natural Rattan Armchair", w: 1500, h: 1500 },
    { asin: "B094YZ9SQ7", title: "Best Choice Products Oversized Wicker Egg Chair", w: 1187, h: 1500 },
  ],
  floorPillows: [
    { asin: "B0BMZGRX1F", title: "Codi Large Floor Pillows, 32 Inch, 2 Pack", w: 1439, h: 1439 },
    { asin: "B09S3X5P3G", title: "Marrakesh Gallery Genuine Leather Moroccan Pouf, Unstuffed", w: 1500, h: 1325 },
  ],
  dreamcatchers: [
    { asin: "B077CJTMH9", title: "Urdeoms Brown Dreamcatcher Wall Decor", w: 1191, h: 1191 },
    { asin: "B083KHM6LC", title: "AtPerry's Healing Crystals Set, 16 Real Crystals and Stones", w: 1500, h: 1060 },
  ],
  books: [
    { asin: "B0HF3H98N8", title: "House Of Greece: A Greek Coffee Table Book of Timeless Interiors", w: 1000, h: 1329 },
    { asin: "B0FGG5B2H1", title: "Italian Country Home Interior Design Book: Premium Hardcover Coffee Table Book", w: 1000, h: 1329 },
  ],
  naturalMaterials: [
    { asin: "B0FMRZR2N7", title: "Craft Trade Reversible Oval Braided Jute Area Rug, Natural Fiber, 5x7 ft", w: 1184, h: 864 },
    { asin: "B0GJ81N31Y", title: "Soft Pure Wool Throw Blanket, Lightweight Warmth, 55\"x83\"", w: 1500, h: 1500 },
  ],
  mirrors: [
    { asin: "B0C4P6L9J4", title: "SMIROR Retro Gold Arched Baroque Mirror, 36 x 36", w: 1500, h: 1500 },
    { asin: "B0FDYXKM6V", title: "Bali &amp; pari Burris Handwoven Rattan Round Wall Mirror", w: 1500, h: 1500 },
  ],
  wallpaper: [
    { asin: "B0CP7C1PF4", title: "Vintage Teal Boho Floral Peel and Stick Wallpaper", w: 1000, h: 1000 },
    { asin: "B0DQLBFSRY", title: "VEELIKE Boho Sketch Peony Peel and Stick Wallpaper", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "boho-bedroom-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "boho-bedroom-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Embrace Earth Tones",
    paras: [
      "When in doubt, nature's own palette is the safest starting point for a boho bedroom.",
      "Rust, tan, cream, sage and clay form the base, with a bit of brass, copper or gold worked in for warmth.",
      "These tones are what keep a boho room feeling grounded and inviting rather than chaotic, even once a lot of different textures and patterns start layering in.",
    ],
    photo: photo("earth-tones.png", "Boho bedroom styled in warm earth tones with brass accents", 574, 1024, "earthTones"),
  },
  {
    n: "02",
    title: "Layered Textiles",
    paras: [
      "Layering is really the whole foundation of the boho look. Blankets, quilts and pillows in a mix of textures &mdash; cotton, macrame, fringe, faux fur &mdash; build up a bed that feels collected rather than matched.",
      "Sticking to earthy tones like terracotta, olive or mustard keeps the mix cohesive, and combining a few different patterns &mdash; tribal, floral, geometric &mdash; tends to work better here than it would in almost any other style.",
      "A chunky knit throw casually tossed at the foot of the bed is the easiest finishing touch. If a layered bed starts to feel like it might be too much, that's usually a sign it's exactly right.",
    ],
    photo: photo("layered-textiles.png", "Layered textiles and mixed textures on a boho bedroom bed", 574, 1024, "layeredTextiles"),
  },
  {
    n: "03",
    title: "Macrame Everything",
    paras: [
      "Macrame is close to essential in a boho bedroom &mdash; a wall hanging, a plant holder, even a macrame headboard all bring instant texture and a handmade feel.",
      "Pre-made pieces work just as well as a DIY version for anyone comfortable with knotting their own.",
      "Even one piece goes a long way toward signaling the room's overall style without requiring a full redesign.",
    ],
    photo: photo("macrame.png", "Macrame wall hanging and decor in a boho bedroom", 574, 1024, "macrame"),
  },
  {
    n: "04",
    title: "Low Beds, High Vibes",
    paras: [
      "Ditching the bulky bed frame for something low-profile is one of the more recognizable boho moves.",
      "A simple platform bed, or even a mattress set directly on a frame close to the floor, creates a grounded, relaxed look that a tall frame simply can't replicate.",
      "It's a small structural change, but it shifts the whole feel of the room toward something calmer and more deliberate.",
    ],
    photo: photo("low-beds.png", "Low-profile platform bed styled in a boho bedroom", 574, 1024, "lowBeds"),
  },
  {
    n: "05",
    title: "Let Plants Take Over",
    paras: [
      "A boho bedroom without greenery rarely feels complete.",
      "Snake plants, pothos and monstera are all reliable, low-maintenance options that bring real life into the space.",
      "Hanging planters add instant style on top of the greenery itself, and even a faux version works fine for anyone who'd rather skip the watering schedule.",
    ],
    photo: photo("plants.png", "Houseplants styled throughout a boho bedroom", 574, 1024, "plants"),
  },
  {
    n: "06",
    title: "Mix and Mismatch Furniture",
    paras: [
      "Boho decor is the direct opposite of a matched showroom set.",
      "Pairing a vintage dresser with a modern rattan chair, or placing an antique side table next to a sleek, neutral bed, builds the kind of collected look the style depends on.",
      "Flea markets and thrift stores tend to be the best source for furniture with exactly this kind of mismatched character.",
    ],
    photo: photo("mismatch-furniture.png", "Mismatched vintage and modern furniture in a boho bedroom", 574, 1024, "mismatchFurniture"),
  },
  {
    n: "07",
    title: "Go Global With Decor",
    paras: [
      "Pieces that carry a sense of place add real soul to a boho bedroom.",
      "A Moroccan pouf, a Turkish rug, an Indian kantha quilt &mdash; each one brings a bit of history and craftsmanship that mass-produced decor can't match.",
      "The room ends up feeling well-traveled and considered, whether or not any of the pieces were actually picked up abroad.",
    ],
    photo: photo("global-decor.png", "Globally inspired decor pieces styled in a boho bedroom", 574, 1024, "globalDecor"),
  },
  {
    n: "08",
    title: "Tapestries as an Easy Accent Wall",
    paras: [
      "For anyone who'd rather skip painting or wallpapering, a large tapestry solves the same problem with zero commitment.",
      "A single tapestry covers a surprising amount of wall space while adding real visual interest on its own.",
      "A mandala, celestial or desert-inspired pattern leans into the boho aesthetic especially well, and the whole thing can come down in minutes if the room's direction changes later.",
    ],
    photo: photo("tapestries.png", "Large boho tapestry used as an accent wall in a bedroom", 574, 1024, "tapestries"),
  },
  {
    n: "09",
    title: "String Lights",
    paras: [
      "Harsh overhead lighting works against the relaxed mood a boho bedroom is going for.",
      "Fairy lights, globe bulbs or soft lanterns draped across a wall, mirror or bed frame add warm, low-key ambiance instead.",
      "Sticking to warm white tones rather than a cooler light keeps the effect feeling cozy rather than like a dorm room string-light setup.",
    ],
    photo: photo("string-lights.png", "String lights draped across a boho bedroom wall and bed frame", 574, 1024, "stringLights"),
  },
  {
    n: "10",
    title: "Canopy Beds",
    paras: [
      "There's something genuinely romantic about a bed draped in soft, gauzy fabric.",
      "Even a basic bed frame gets transformed with a canopy or a simple sheer curtain hung above it.",
      "Adding a string of fairy lights along the canopy frame pushes the effect even further without much extra work.",
    ],
    photo: photo("canopy-bed.png", "Canopy bed draped in sheer fabric in a boho bedroom", 574, 1024, "canopy"),
  },
  {
    n: "11",
    title: "Handmade and Artisan Pieces",
    paras: [
      "Choosing hand-carved, handwoven or hand-dyed pieces over mass-produced decor adds real depth to a boho room.",
      "There's an authenticity in slightly imperfect, human-made objects that factory-made pieces rarely capture.",
      "Even one or two artisan pieces mixed into an otherwise simple room can shift the whole feel toward something more considered.",
    ],
    photo: photo("artisan-pieces.png", "Handmade artisan decor pieces styled in a boho bedroom", 574, 1024, "artisan"),
  },
  {
    n: "12",
    title: "A Statement Rug",
    paras: [
      "A bold, patterned rug can rescue an otherwise plain floor, especially in a rental where replacing the actual flooring isn't an option.",
      "Layering two rugs together adds even more texture for anyone willing to commit a little further.",
      "A vintage, tribal or faded Persian-style rug all read as boho-appropriate, and the right one adds instant coziness underfoot.",
    ],
    photo: photo("statement-rug.png", "Bold patterned statement rug styled in a boho bedroom", 574, 1024, "statementRug"),
  },
  {
    n: "13",
    title: "An Eclectic Gallery Wall",
    paras: [
      "A boho gallery wall should never look too neat or too planned.",
      "Mixing art prints, vintage frames, pressed flowers, woven decor and even an odd feather or two keeps the wall feeling personal rather than like a copied template.",
      "The goal is a wall that genuinely reflects whoever lives in the room, not a polished recreation of something seen online.",
    ],
    photo: photo("gallery-wall.png", "Eclectic gallery wall with mixed frames and woven decor in a boho bedroom", 574, 1024, "galleryWall"),
  },
  {
    n: "14",
    title: "Rattan and Wicker Accents",
    paras: [
      "For texture without going fully maximalist, rattan, bamboo and wicker bring a natural, breezy feel to a room.",
      "A rattan mirror frame, a wicker chair, a bedside table or a set of hanging shelves all work well as smaller touches.",
      "They're light both visually and literally, which makes them easy to add without overwhelming the rest of the room.",
    ],
    photo: photo("rattan-wicker.png", "Rattan and wicker accents styled in a boho bedroom", 574, 1024, "rattanWicker"),
  },
  {
    n: "15",
    title: "Floor Pillows and Poufs",
    paras: [
      "Floor cushions, poufs and oversized pillows bring a casual, laid-back seating option that a boho room tends to call for.",
      "They work especially well in a reading corner or a small meditation nook, somewhere a full chair might feel too formal.",
      "It's an easy, low-cost way to add extra seating without introducing another large piece of furniture.",
    ],
    photo: photo("floor-pillows.png", "Floor pillows and poufs styled in a cozy boho bedroom corner", 574, 1024, "floorPillows"),
  },
  {
    n: "16",
    title: "Dreamcatchers and Crystals",
    paras: [
      "Even without any particular interest in their symbolism, dreamcatchers and crystals bring a distinct visual texture to a boho room.",
      "A dreamcatcher hung above the bed, a small display of amethyst, rose quartz or citrine on a shelf, all add a bit of personality.",
      "The goal is simply a space that feels calm and considered &mdash; whatever meaning gets attached to the objects is entirely optional.",
    ],
    photo: photo("dreamcatchers.png", "Dreamcatcher and crystal display styled in a boho bedroom", 574, 1024, "dreamcatchers"),
  },
  {
    n: "17",
    title: "Let Books Be Decor",
    paras: [
      "Books don't have to stay confined to a shelf to earn their place in the room.",
      "Stacking them sideways, grouping them by color, or mixing them in with candles and small vases turns them into a styling element on their own.",
      "Placing a few underneath a plant pot adds a bit of extra height and an easy, slightly artful touch.",
    ],
    photo: photo("books-as-decor.png", "Books styled as decor alongside candles in a boho bedroom", 574, 1024, "books"),
  },
  {
    n: "18",
    title: "Natural Materials Only",
    paras: [
      "Skipping plastic and synthetic materials where possible keeps a boho room feeling authentic rather than mass-produced.",
      "Wood, jute, cotton, wool and leather all age well over time, developing character rather than just wearing out.",
      "They also bring a cozy, earthy warmth that synthetic materials rarely manage to replicate.",
    ],
    photo: photo("natural-materials.png", "Natural materials like wood, jute and wool styled in a boho bedroom", 574, 1024, "naturalMaterials"),
  },
  {
    n: "19",
    title: "Mirrors With Personality",
    paras: [
      "A generic rectangular mirror doesn't do much for a boho room, but an interesting frame can become a genuine focal point.",
      "A sunburst mirror, an antique find, or an arched full-length style all bring far more character than a standard frame.",
      "Beyond the style itself, a well-placed mirror also bounces light around the room and makes the space feel larger.",
    ],
    photo: photo("mirrors.png", "Sunburst mirror with personality styled in a boho bedroom", 574, 1024, "mirrors"),
  },
  {
    n: "20",
    title: "Go Wild With Wallpaper",
    paras: [
      "For anyone ready to fully commit, a bold boho wallpaper can turn an entire bedroom into its own kind of retreat.",
      "A floral, jungle or desert-themed print leans hardest into the style, and a peel-and-stick version offers a lower-commitment way to try the same look.",
      "It's the most dramatic option on this list, but also one of the fastest ways to make a room feel completely transformed.",
    ],
    photo: photo("wallpaper.png", "Bold boho wallpaper transforming a bedroom wall", 574, 1024, "wallpaper"),
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
<p>Boho bedroom decor is built on layering rather than matching &mdash; textures, patterns, materials and a few well-chosen global pieces all stacked together until the room feels collected over time rather than bought in one trip.</p>
<p>None of it requires a strict formula. The style has room for mismatched furniture, an odd feather here, a thrifted mirror there, as long as the overall palette and materials stay loosely connected.</p>
${photo("hero.jpg", "Boho bedroom with draped curtains, layered textiles and a woven rug", 1280, 720, "hero")}

<h2>20 Dreamy Boho Bedroom Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these twenty ideas require redoing a bedroom from scratch to make a real impact. A layered bed, a macrame wall hanging, or one bold statement rug can shift the whole room toward boho on its own.</p>
<p>The style rewards a bit of imperfection and personal history over anything too polished &mdash; the goal is a room that feels like it was gathered over time, not styled in a single afternoon.</p>
`;

module.exports = { body };
