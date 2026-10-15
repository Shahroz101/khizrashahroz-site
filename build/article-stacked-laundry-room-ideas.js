// Body content for "17 Stacked Laundry Room Ideas Worth Copying".
// Photos carried over from the source article. "Industrial-Style" and
// "Luxe Stacked Laundry Room With Wallpaper" have no photo in the
// source; the other 15 ideas do. Distinct sub-topic (vertical stacked
// configuration specifically) from the already-published laundry-room
// and laundry-room-ideas-effortless, which cover general laundry
// styling rather than the stacked-unit footprint specifically.
// Condensed a padded 3-part intro down to 1.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D2NKMMLG", title: "3-Tier Foldable Hanging Wire Laundry Basket Organizer with Rotating Hooks", w: 1500, h: 1500 },
    { asin: "B0HJGJTB6N", title: "Sterilite 4 Pack Slim Laundry Hamper with Lid, 1.75 Bushel, White", w: 1500, h: 1366 },
  ],
  intro: [
    { asin: "B0BVB5Z355", title: "Universal Washer and Dryer Stacking Kit", w: 1500, h: 1350 },
    { asin: "B0FFSBVFMP", title: "Homhedy Farmhouse Bathroom Storage Floor Cabinet with Doors, White", w: 1326, h: 1500 },
  ],
  idea1: [
    { asin: "B0C89GT7JJ", title: "6 Ft Bypass Sliding Barn Door Hardware Kit for Double Doors", w: 1500, h: 1500 },
    { asin: "B0FQBRVSGH", title: "Quiet Glide Top-Hung Sliding Door Roller and Track Kit, 5 Piece", w: 1495, h: 1500 },
  ],
  idea2: [
    { asin: "B0FFSMVZXL", title: "Homhedy Farmhouse Bathroom Storage Floor Cabinet with Doors, Black", w: 1325, h: 1500 },
    { asin: "B0FJ19Y62C", title: "Homde 5-Tier Heavy Duty Over-the-Washer and Dryer Storage Shelf", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0H3PG3ZWY", title: "2 Pack Wall-Mounted Laundry Room Shelves with Wire Mesh Baskets", w: 1500, h: 1374 },
    { asin: "B0CLY7L5ML", title: "Golpart Over-the-Washer and Dryer Laundry Organizer Shelves", w: 730, h: 1435 },
  ],
  idea4: [
    { asin: "B0H6HBPTZN", title: "PureBox 4-Tier Slim Rolling Storage Cart with High Side Rails and Wheels", w: 1500, h: 1500 },
    { asin: "B0CQNPZNG9", title: "Lifewit 65L Slim Laundry Hamper with Lid and Removable Bag, Beige", w: 1424, h: 1500 },
  ],
  idea5: [
    { asin: "B0BS3FT1BZ", title: "IEGrow 110L Laundry Hamper with Lid and Mesh Bags, Black", w: 1404, h: 1500 },
    { asin: "B0FDF77VFL", title: "HITNET Bamboo Tilt-Out Laundry Hamper Bathroom Storage Cabinet", w: 742, h: 1500 },
  ],
  idea6: [
    { asin: "B09M9XHWKY", title: "Blulu Lost Socks Basket Sign, Farmhouse Laundry Room Storage, White", w: 1500, h: 1144 },
    { asin: "B0BYZ3FKL7", title: "XUANGUO Large White Cotton Rope Laundry Basket Hamper", w: 919, h: 1500 },
  ],
  idea7: [
    { asin: "B0DDL3QBJZ", title: "JOY DECOR Black Cabinet Knobs, 2 Pack, 2 Inch Single Hole Handles", w: 1261, h: 1289 },
    { asin: "B0BFHRKL5K", title: "SOLEDI 100L Collapsible Laundry Hamper with Lid", w: 1470, h: 1498 },
  ],
  idea8: [
    { asin: "B0D8VTNVLV", title: "Wall-Mounted Laundry Folding Table, 32 x 16 Inch, White Wood", w: 1500, h: 1500 },
    { asin: "B0GQLD3WBR", title: "VEVOR Washer Dryer Countertop, 54 x 27 Inch, Wooden with Splicing Panels", w: 1500, h: 1178 },
  ],
  idea9: [
    { asin: "B087R1JMKX", title: "SONGMICS 100L Bamboo Laundry Hamper with Lid and Handles", w: 1096, h: 1500 },
    { asin: "B0DBKX7TGD", title: "Acacia Wood Laundry Hamper with Lid and Handles, 90L, Brown", w: 1063, h: 1500 },
  ],
  idea10: [
    { asin: "B00A2ZR5AQ", title: "Rev-A-Shelf 20 Inch Deep Large Pullout Wire Clothes Laundry Hamper", w: 1343, h: 1500 },
    { asin: "B08BQBNXSQ", title: "ClearSpace Clear Plastic Storage Bins for Pantry and Cabinet Organizing", w: 1478, h: 1500 },
  ],
  idea11: [
    { asin: "B0CGLWGBZF", title: "Merapi 3-Tier Rustic Industrial Pipe Floating Shelves", w: 1073, h: 1500 },
    { asin: "B0923LZ68B", title: "REGILLER 5-Wire Shelving Metal Storage Rack, Adjustable Shelves", w: 623, h: 1500 },
  ],
  idea12: [
    { asin: "B0FH9PN3Z2", title: "195L 3-Section Laundry Hamper with Lid and 3 Inner Bags", w: 1500, h: 1461 },
    { asin: "B0D4PKY8M3", title: "XUANGUO Rainbow Rope Laundry Basket Hamper", w: 916, h: 1500 },
  ],
  idea13: [
    { asin: "B0GL7ZKVDB", title: "27.6 Inch Shoe Rack Bench with Coat Rack, 2-Tier Entryway Storage Bench", w: 1500, h: 1500 },
    { asin: "B0D5R28N4Z", title: "15 Inch White Metal 6-Hook Wall Mount Coat Rack", w: 1500, h: 1500 },
  ],
  idea14: [
    { asin: "B0BFVSKX3M", title: "STICKGOO Peel and Stick Wall Tile Backsplash, Thick Self-Adhesive", w: 1442, h: 1447 },
    { asin: "B0FDFTHW3L", title: "hepside 13 Inch Dimmable Flush Mount Ceiling Light, 2 Pack, 5 Color Temperatures", w: 1500, h: 1490 },
  ],
  idea15: [
    { asin: "B0DP7NXM4V", title: "Dimoon Vintage Dark Green Floral Peel and Stick Wallpaper, Retro Moody Style", w: 1500, h: 1500 },
    { asin: "B0CT525XF2", title: "TOARTi Laundry Room Peel and Stick Wallpaper Contact Paper", w: 1500, h: 1500 },
  ],
  idea16: [
    { asin: "B0FDB6CXGX", title: "HITNET Tilt-Out Laundry Hamper Cabinet with 20 Gallon Clothes Basket", w: 1345, h: 1500 },
    { asin: "B0H2D97RN7", title: "Bamboo Tilt-Out Laundry Hamper Cabinet with 15.5 Gallon Removable Bag, Black", w: 1415, h: 1500 },
  ],
  idea17: [
    { asin: "B0FPC9CYVK", title: "Winado 15.6 lb Full Automatic Portable Washing Machine with Drain Pump", w: 1354, h: 1500 },
    { asin: "B0CCP5V8Q4", title: "Vikaqi 23.6 Inch Foldable Wall-Mounted Clothes Drying Rack", w: 1500, h: 1341 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "stacked-laundry-room-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "stacked-laundry-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "stacked-laundry-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Closet-Style With Sliding Doors",
    paras: [
      "This setup works wonders in an apartment or a bedroom closet, hiding the machines entirely when guests come over.",
      "Sliding doors save the swing space a hinged door would eat up, and they keep noise genuinely contained while a load runs.",
      "Wood or frosted glass doors look intentional rather than like a last-minute fix, and a motion-sensor light inside the closet is a small addition worth adding from the start.",
    ],
    photo: pinPhoto("closet-style.jpg", "Closet-style stacked washer and dryer with sliding doors", 683, 1024, "https://www.pinterest.com/pin/1829656094967498/", "Closet-Style Stacked Laundry Room", "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Built-In Cabinet Surround",
    paras: [
      "Custom cabinetry instantly elevates a stacked setup, framing the washer and dryer so they read as furniture instead of appliances.",
      "Upper cabinets hide detergent and supplies, while lower drawers hold laundry baskets within easy reach.",
      "The whole unit stops looking like equipment and starts looking like it was designed into the room from the beginning.",
    ],
    photo: pinPhoto("cabinet-surround.jpg", "Built-in cabinet surround framing a stacked washer and dryer", 736, 916, "https://www.pinterest.com/pin/70437490005603/", "Built-In Cabinet Surround", "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Open Shelving Above the Units",
    paras: [
      "For anyone who prefers things visible and easy to grab, open shelving above a stacked unit keeps detergent and supplies within arm's reach.",
      "It's affordable, flexible, and especially useful in a genuinely small space where cabinetry isn't an option.",
      "Wood shelves add warmth, while metal brackets lean more industrial &mdash; either way, keeping the load light avoids any unwanted gravity lessons.",
    ],
    photo: pinPhoto("open-shelving.jpg", "Open shelving mounted above a stacked washer and dryer", 736, 869, "https://www.pinterest.com/pin/4433299630183050/", "Open Shelving Above Stacked Laundry", "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Narrow Hallway Setup",
    paras: [
      "A hallway can genuinely work as a laundry spot, which opens up real options for a home without a dedicated room.",
      "Compact stacked machines, shallow shelves, and wall-mounted lighting all fit a narrow footprint without crowding the walkway.",
      "A hallway can transform into a fully functional laundry zone with the right planning, even in a surprisingly tight space.",
    ],
    photo: pinPhoto("narrow-hallway.jpg", "Stacked laundry machines fitted into a narrow hallway setup", 569, 1024, "https://www.pinterest.com/pin/1618549859649947/", "Narrow Hallway Stacked Laundry", "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Bathroom Combo",
    paras: [
      "This pairing sounds controversial at first, but it genuinely works well given the shared plumbing already in place.",
      "Easy water access and efficient use of square footage make the bathroom a surprisingly logical spot for a stacked unit.",
      "Keeping everything properly sealed and ventilated matters most here &mdash; nobody wants steamy towels and damp socks sharing the same air.",
    ],
    photo: pinPhoto("bathroom-combo.jpg", "Stacked washer and dryer combined into a bathroom layout", 736, 981, "https://www.pinterest.com/pin/1266706139030588/", "Bathroom Stacked Laundry Combo", "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Minimalist White",
    paras: [
      "Sometimes simple genuinely wins. White cabinets, white machines, and clean lines keep a stacked laundry spot feeling fresh and timeless.",
      "The look avoids ever feeling dated, which matters in a utility space that doesn't get redesigned often.",
      "It also makes a small room feel noticeably bigger, which is rarely a downside in a tight laundry footprint.",
    ],
    photo: pinPhoto("minimalist-white.jpg", "Minimalist white stacked laundry room with clean lines", 736, 1019, "https://www.pinterest.com/pin/77546424826407697/", "Minimalist White Stacked Laundry", "idea6"),
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Moody and Dark, for Drama",
    paras: [
      "Laundry doesn't have to feel boring or purely utilitarian. Dark cabinetry pushes the space in a completely different direction.",
      "Matte black hardware and warm lighting finish the look, turning a chore zone into something with genuine atmosphere.",
      "Folding clothes in a moody, well-lit space ends up feeling oddly luxurious &mdash; an unexpected upgrade for a room nobody usually designs around.",
    ],
    photo: pinPhoto("moody-dark.jpg", "Moody dark stacked laundry room with matte black hardware", 701, 1024, "https://www.pinterest.com/pin/4292562140956460/", "Moody Dark Stacked Laundry Room", "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "With a Folding Station",
    paras: [
      "This single addition changes the whole experience of doing laundry in a stacked setup.",
      "A countertop placed above front-loading machines reduces wrinkles, speeds up the whole process, and saves real strain on the back.",
      "Once a proper folding surface is in place, going back to folding on a bed or couch stops feeling like an option.",
    ],
    photo: photo("folding-station.jpg", "Stacked laundry room with a built-in folding station countertop", 736, 736, "idea8"),
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Scandinavian-Inspired",
    paras: [
      "Clean, calm and genuinely functional, a Scandinavian approach suits a stacked laundry spot especially well.",
      "Light wood tones, neutral colors, and minimal clutter keep the whole space feeling peaceful rather than purely utilitarian.",
      "It sounds almost absurd until it's actually experienced, but a calm laundry space genuinely changes how the chore feels day to day.",
    ],
    photo: pinPhoto("scandinavian.jpg", "Scandinavian-inspired stacked laundry room with light wood tones", 572, 1024, "https://www.pinterest.com/pin/25684660370975237/", "Scandinavian Stacked Laundry Room", "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "With Hidden Storage Nooks",
    paras: [
      "In a stacked setup, every single inch genuinely counts, and hidden storage nooks make the most of what's otherwise wasted space.",
      "Pull-out shelves, slim side cabinets, and a vertical storage tower all tuck into gaps that would otherwise sit empty.",
      "These small details turn an already tight footprint into a genuine storage powerhouse.",
    ],
    photo: photo("hidden-storage.jpg", "Stacked laundry room with hidden pull-out storage nooks", 736, 981, "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Industrial-Style",
    paras: [
      "This look leans fully into raw, unfinished materials rather than hiding them.",
      "Exposed pipes, metal shelving, and a concrete or tile floor all build that industrial character.",
      "It suits a basement or a loft-style home especially well, where the rest of the space already leans toward exposed, utilitarian materials.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Family-Friendly Setup",
    paras: [
      "For a household with kids, planning the laundry space around them specifically saves real daily friction.",
      "Labeled baskets, easy-access shelves at a reachable height, and genuinely durable finishes all hold up to real family use.",
      "A well-designed system here saves both time and arguments, which matters more in a busy household than almost anything else.",
    ],
    photo: pinPhoto("family-friendly.jpg", "Family-friendly stacked laundry room with labeled storage baskets", 683, 1024, "https://www.pinterest.com/pin/7740630605944099/", "Family-Friendly Stacked Laundry Room", "idea12"),
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Combined With a Mudroom",
    paras: [
      "Pairing a stacked unit with a mudroom is close to a genius move for handling daily mess.",
      "It catches dirty clothes immediately, keeps mess contained to one zone, and adds real efficiency to the daily routine coming in and out of the house.",
      "Hooks, a bench, and extra storage all add to the impact here &mdash; the mudroom-laundry combo earns its keep fast.",
    ],
    photo: pinPhoto("mudroom.jpg", "Stacked laundry room combined with a mudroom featuring hooks and benches", 683, 1024, "https://www.pinterest.com/pin/1618549864559508/", "Stacked Laundry Mudroom Combo", "idea13"),
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Budget-Friendly Makeover",
    paras: [
      "Custom cabinetry isn't actually required to pull off a genuinely good-looking stacked laundry spot.",
      "A peel-and-stick backsplash, some open shelving, and new lighting deliver real visual impact for very little cost.",
      "Small, well-planned changes add up to results that read as considerably more expensive than they actually were.",
    ],
    photo: pinPhoto("budget-makeover.jpg", "Budget-friendly stacked laundry room makeover with affordable upgrades", 736, 981, "https://www.pinterest.com/pin/68748734209/", "Budget-Friendly Stacked Laundry Makeover", "idea14"),
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Luxe, With Wallpaper",
    paras: [
      "Wallpaper genuinely belongs in a laundry room, despite how that might sound at first.",
      "It adds real personality, elevates a small space instantly, and creates visual interest that paint alone rarely manages.",
      "Choosing a washable wallpaper is worth the small extra cost &mdash; living dangerously isn't really the goal in a room that handles this much moisture.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "With Pull-Out Hampers",
    paras: [
      "This setup keeps clutter genuinely under control by giving dirty clothes a designated, hidden spot.",
      "It streamlines the whole workflow and keeps the space looking clean even mid-laundry-pile.",
      "Built-in hampers make the entire process feel organized before a single load even starts.",
    ],
    photo: pinPhoto("pull-out-hampers.jpg", "Stacked laundry room with built-in pull-out hampers", 500, 740, "https://www.pinterest.com/pin/18507048522161342/", "Stacked Laundry Pull-Out Hampers", "idea16"),
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Ultra-Compact for Tiny Homes",
    paras: [
      "Small doesn't have to mean useless, even in a genuinely tiny footprint.",
      "Slim machines, vertical storage, and wall-mounted accessories make the most of a space smaller than most closets.",
      "A setup smaller than a standard closet can genuinely outperform a full-size laundry room when the design is actually thought through.",
    ],
    photo: pinPhoto("ultra-compact.jpg", "Ultra-compact stacked laundry setup designed for a tiny home", 680, 1024, "https://www.pinterest.com/pin/633387443037772/", "Ultra-Compact Stacked Laundry Room", "idea17"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || (idea.productsKey ? productGrid(idea.productsKey) : "")}`;
}

const body = `
<p>Stacked washer and dryer setups keep showing up everywhere for a simple reason &mdash; they free up real floor space in a home that doesn't have a spare room to dedicate to laundry alone.</p>
<p>They work in real homes too, not just staged showrooms. A closet, a hallway, even a corner of a bathroom can become a fully functional laundry spot once the unit goes vertical instead of side by side.</p>
${photo("hero.jpg", "Stylish stacked washer and dryer laundry setup with smart storage", 1600, 1067, "hero")}

<h2>What to Think About First</h2>
<p>Ventilation and access matter more in a stacked setup than people expect &mdash; the dryer still needs proper airflow, and both machines need to stay genuinely reachable for loading and unloading. Noise control isn't optional either, especially when the unit sits inside a closet near a bedroom or living space.</p>
${pinPhoto("intro-space.jpg", "Stacked laundry setup designed to save real floor space", 720, 960, "https://www.pinterest.com/pin/68748386738/", "Space-Saving Stacked Laundry Setup", "intro")}

<h2>17 Stacked Laundry Room Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A stacked laundry setup doesn't have to feel like a compromise. With the right planning, it can genuinely outperform a full-size laundry room while using a fraction of the floor space.</p>
<p>Start with whatever configuration actually fits the space available, then layer in storage and style from there. Function first, always &mdash; the style follows naturally once the layout actually works.</p>
`;

module.exports = { body };
