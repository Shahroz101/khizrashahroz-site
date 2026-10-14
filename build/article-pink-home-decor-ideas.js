// Body content for "15 Pink Home Decor Ideas for a Genuinely Charming
// Home". Photos carried over from the source article. All 15 ideas
// have a photo; none dropped. Two ideas (Soft Pink Bedroom, Pink
// Headboard) touch bedroom territory already covered by the published
// pink-bedroom-ideas — written to focus on specifics that article
// doesn't cover (a dedicated soft palette, the headboard specifically)
// rather than repeating its general styling approach. Condensed 4
// padded intro/FAQ sections down to 2.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0BHBMS5Z9", title: "ZLINA Faux Fur Decorative Throw Pillow Covers, 18 x 18 Inch, Hot Pink", w: 1500, h: 1500 },
    { asin: "B08DC1BRQZ", title: "PAVILIA Pink Chenille Throw Blanket with Tassels, 50 x 60 Inch", w: 1500, h: 1500 },
  ],
  shade: [
    { asin: "B09H6JBHYD", title: "Dimoon Pink Peel and Stick Wallpaper Contact Paper, 110 x 17.7 Inch", w: 1496, h: 1500 },
    { asin: "B0FN6YZ612", title: "CRE8TIVE Matte Blush Pink Contact Paper for Cabinets and Countertops", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0B57R6J71", title: "Pink Blush Velvet Futon Couch Sofa Bed with 2 Pillows, Convertible Sleeper", w: 640, h: 637 },
    { asin: "B0CBTMPHJC", title: "Vongrasig 47 Inch Small Modern Loveseat Sofa, Soft Corduroy, Mid Century", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0FFMFH6PZ", title: "EVOLVE Interior Paint and Primer, Eggshell, Pale Pink, 1 Gallon", w: 1500, h: 1494 },
    { asin: "B00QCCPP2S", title: "PRESTIGE Interior Paint and Primer in One, Pink Sugar, Eggshell, 1 Gallon", w: 963, h: 955 },
  ],
  idea3: [
    { asin: "B0GS84PRF7", title: "Pink Floral Peel and Stick Wallpaper, Vintage French Style", w: 1500, h: 1500 },
    { asin: "B0CFHLFJ43", title: "Haimin Pink Textured Grasscloth Peel and Stick Wallpaper, 24 Inch Wide", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0D924YPHC", title: "INOVADAY Pink Blackout Curtains, 84 Inches Long", w: 1020, h: 1416 },
    { asin: "B0F1MZR1SF", title: "StangH Dusty Rose Pink Velvet Curtains, 84 Inches Long, 2 Panels", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0GYGSWWM1", title: "Washed Microfiber Dusty Rose Pink Duvet Cover Set, Queen, 3 Piece", w: 1500, h: 1500 },
    { asin: "B0CHYB21NT", title: "Simple and Opulence 100% Linen Duvet Cover Set, 3 Piece, Belgian Flax", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0GCHBFYFT", title: "Hearth and Harbor Wall Mounted Queen Headboard, Pink Velvet", w: 1500, h: 1500 },
    { asin: "B0GTB9LNWP", title: "Velvet Upholstered Platform Bed Frame with Adjustable Headboard, Pink, Full", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0742NT98Y", title: "Colorantic Vintage Furniture Chalk Based Paint, Dusty Rose, 16 oz", w: 974, h: 944 },
    { asin: "B0DHTN8BYM", title: "khtumeware Brushed Brass Cabinet Pulls, 5 Inch Hole Center, 10 Pack", w: 1500, h: 1492 },
  ],
  idea8: [
    { asin: "B0FT86VBYR", title: "Pink Velvet Dining Chairs, Set of 2, Black Metal Legs", w: 1500, h: 1500 },
    { asin: "B0F3DJKBCZ", title: "Light Pink Cheesecloth Table Runners, 17 x 108 Inch, Boho Gauze, 10 Pack", w: 1395, h: 1500 },
  ],
  idea9: [
    { asin: "B0FWBJ8ZWZ", title: "Pink Subway Tile Peel and Stick Backsplash, 10 Sheets, Thick Design", w: 1500, h: 1500 },
    { asin: "B0D5XZBWRY", title: "FORIOUS Matte Black Bathroom Sink Faucet, 4 Inch Centerset", w: 1461, h: 1500 },
  ],
  idea10: [
    { asin: "B0BJZFRYFZ", title: "Kevin Textile Soft Corduroy Pillow Covers, 18 x 18 Inch, Sage Green, 2 Pack", w: 1500, h: 1500 },
    { asin: "B0FQBD3D27", title: "Frimeeme Boho Pink and Green Wall Art, Large Canvas Print Set of 3", w: 1500, h: 1007 },
  ],
  idea11: [
    { asin: "B0F3H6NB81", title: "2-Tier Round Wood Coffee Table, Walnut, 28 x 28 x 18 Inch", w: 1500, h: 1500 },
    { asin: "B0BQ2VLJ1S", title: "Rustic Wood Framed Wall Mirror, 24 x 36 Inch, Rectangle", w: 928, h: 1500 },
  ],
  idea12: [
    { asin: "B0CYQDVZ7X", title: "Ultra Soft Fluffy Pink Shag Area Rug, 4 x 6 Ft", w: 1500, h: 1500 },
    { asin: "B0C6G4BJB8", title: "Pink Fluffy Plush Washable Area Rug, 4 x 6 Ft", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0FKGQG3DF", title: "Small Gradient Pink Ceramic Vase Set of 3, Boho Modern", w: 1229, h: 1500 },
    { asin: "B0GVYBRQ2Q", title: "Decorative Faux Books Set of 3 with Hidden Storage, Linen Cover", w: 1500, h: 1500 },
  ],
  idea14: [
    { asin: "B08DN6HXVP", title: "BELLEZE Modern High Back Wingback Accent Chair, Upholstered, Pink", w: 1500, h: 1500 },
    { asin: "B0D3V192HS", title: "Fultyle Round Side Table, Small Drink Table with Solid Wood Legs", w: 750, h: 1500 },
  ],
  idea15: [
    { asin: "B0CTFZS4TF", title: "GIGIZAZA Hot Pink Velvet Pillow Covers, 18 x 18 Inch, Pack of 2", w: 1500, h: 1500 },
    { asin: "B0BRX5P16S", title: "CHIHUT Matte Magenta Pink Peel and Stick Wallpaper, 17.7 x 236 Inch", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "pink-home-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "pink-home-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "pink-home-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "A Pink Sofa as the Living Room Anchor",
    paras: [
      "A pink sofa is one of the boldest ways to bring the color in, and it works because it anchors the whole room instead of just accenting it.",
      "A dusty rose or blush velvet reads as sophisticated rather than sweet, especially against a neutral wall and floor.",
      "Everything else in the room can stay quiet once the sofa does this much work &mdash; a few neutral accents are all it needs around it.",
    ],
    photo: pinPhoto("pink-sofa.jpg", "Pink velvet sofa anchoring a living room with neutral accents", 735, 1106, "https://www.pinterest.com/pin/207095282852494596/", "Pink Sofa Living Room", "idea1"),
  },
  {
    n: "02",
    title: "One Wall Painted Pink",
    paras: [
      "A single pink accent wall commits to the color without asking the whole room to go along with it.",
      "It works in almost any room &mdash; living room, bedroom, even a hallway &mdash; and gives a space a focal point that paint alone rarely manages.",
      "Keeping the remaining walls neutral lets the pink wall stay the statement instead of getting lost among competing colors.",
    ],
    photo: photo("pink-wall.jpg", "Single pink accent wall in an otherwise neutral living room", 735, 913, "idea2"),
  },
  {
    n: "03",
    title: "Pattern Through Pink Wallpaper",
    paras: [
      "Wallpaper brings in pink along with pattern at the same time, which is a different effect than flat paint entirely.",
      "A subtle floral or textured pink print adds depth and movement to a wall without needing any additional decor to carry the look.",
      "It's an easy way to commit to one wall's worth of personality while the rest of the room stays calm and neutral.",
    ],
    photo: pinPhoto("pink-wallpaper.jpg", "Pink patterned wallpaper adding texture and depth to a living room wall", 736, 1165, "https://www.pinterest.com/pin/207095282852494596/", "Pink Wallpaper Accent Wall", "idea3"),
  },
  {
    n: "04",
    title: "Pink Curtains for Softness",
    paras: [
      "Curtains are one of the lowest-commitment ways to bring pink into a room, since they're easy to swap out later if the mood changes.",
      "A soft blush or dusty rose panel filters light with a warm tint, which changes the whole feel of a room throughout the day.",
      "They pair naturally with neutral walls and furniture, letting the windows carry the color instead of the whole room.",
    ],
    photo: pinPhoto("pink-curtains.jpg", "Soft pink curtains filtering light in a living room", 736, 1308, "https://www.pinterest.com/pin/595038169547214772/", "Pink Curtains", "idea4"),
  },
  {
    n: "05",
    title: "A Softly Pink Bedroom Palette",
    paras: [
      "Beyond a single accent, a bedroom built around a genuinely soft pink palette reads as calm rather than themed.",
      "Dusty pink bedding, pale pink walls, and warm wood furniture keep the look grounded instead of overly sweet.",
      "The effect works especially well layered with white and cream, which keeps the pink from ever feeling like it's trying too hard.",
    ],
    photo: pinPhoto("soft-pink-bedroom.jpg", "Bedroom styled in a soft dusty pink palette with warm wood furniture", 736, 1472, "https://www.pinterest.com/pin/605945324892721410/", "Soft Pink Bedroom", "idea5"),
  },
  {
    n: "06",
    title: "A Pink Headboard as the Focal Point",
    paras: [
      "An upholstered pink headboard does a lot of work for a bedroom without needing the walls or bedding to match it.",
      "A channel-tufted or scalloped shape in a soft pink velvet reads as a genuine design choice rather than an afterthought.",
      "It gives the whole room a focal point immediately, which means everything else &mdash; nightstands, lighting, art &mdash; can stay simple around it.",
    ],
    photo: pinPhoto("pink-headboard.jpg", "Upholstered pink velvet headboard as the focal point of a bedroom", 736, 736, "https://www.pinterest.com/pin/492370171767340888/", "Pink Headboard", "idea6"),
  },
  {
    n: "07",
    title: "A Pink Kitchen Makeover",
    paras: [
      "Pink in the kitchen sounds unexpected until it's actually seen in person &mdash; cabinetry or an island in a muted pink reads as genuinely elevated, not twee.",
      "A dusty rose or terracotta-leaning pink paired with brass hardware and white countertops keeps the look sophisticated rather than themed.",
      "It works especially well as an island color specifically, letting the surrounding cabinetry stay neutral while the island carries the personality.",
    ],
    photo: pinPhoto("pink-kitchen.jpg", "Kitchen island painted in a muted dusty pink with brass hardware", 736, 1104, "https://www.pinterest.com/pin/5770305769178523/", "Pink Kitchen Island", "idea7"),
  },
  {
    n: "08",
    title: "A Fully Pink Dining Room",
    paras: [
      "The dining room is a lower-stakes place to commit to pink more fully, since it's a space people pass through rather than linger in all day.",
      "Pink walls paired with a wood table and neutral chairs keep the room from feeling like a single giant color block.",
      "It's a strong fit for anyone who wants to try a bolder pink moment without redoing an entire living room or bedroom.",
    ],
    photo: photo("pink-dining-room.jpg", "Dining room with pink walls paired with a wood table and neutral chairs", 448, 796, "idea8"),
  },
  {
    n: "09",
    title: "Pink Tile in the Bathroom",
    paras: [
      "Pink tile in a bathroom has genuine staying power, especially in a dusty or muted shade rather than anything bubblegum-bright.",
      "It pairs beautifully with brass or matte black fixtures, which keeps the overall look from reading as overly soft.",
      "A full pink tile wall or floor makes a strong, lasting statement in a room that's otherwise easy to leave entirely neutral.",
    ],
    photo: photo("pink-bathroom-tiles.jpg", "Pink tile in a bathroom paired with matte black fixtures", 640, 933, "idea9"),
  },
  {
    n: "10",
    title: "Pink Paired With Sage Green",
    paras: [
      "Pink and sage green is one of the most reliable color pairings in interior design &mdash; soft but never flat, and surprisingly versatile across styles.",
      "The green grounds the pink, keeping the combination from reading as too sweet or too feminine.",
      "It works in florals, textiles, or paint in equal measure, which makes it an easy pairing to bring in gradually rather than all at once.",
    ],
    photo: photo("pink-sage-green.jpg", "Pink and sage green paired together in a styled room", 736, 1104, "idea10"),
  },
  {
    n: "11",
    title: "Warm Up Pink With Natural Wood",
    paras: [
      "Pink on its own can occasionally read as cold or flat, and natural wood is the fastest fix for that.",
      "A wood coffee table, floating shelves, or a wood-framed mirror next to a pink sofa or wall adds warmth that pink alone doesn't provide.",
      "The combination of soft pink and warm wood tones is one of the easiest ways to keep a pink room from feeling like a single note.",
    ],
    photo: photo("pink-natural-wood.jpg", "Pink velvet furniture warmed up with natural wood accents", 736, 1318, "idea11"),
  },
  {
    n: "12",
    title: "A Pink Rug Underfoot",
    paras: [
      "A pink rug brings the color in at floor level, which is a much easier commitment to live with than pink walls or furniture.",
      "A plush, textured pink rug under a chair or coffee table softens the whole space and ties a room's other pink accents together.",
      "It's an easy starting point for anyone testing out whether they actually want more pink in a room before committing further.",
    ],
    photo: photo("pink-rug.jpg", "Plush pink rug underneath a pink scalloped accent chair", 736, 1104, "idea12"),
  },
  {
    n: "13",
    title: "Pink Through Small Accessories",
    paras: [
      "For the lowest-commitment option on this entire list, pink accessories do real work without touching a single wall or piece of furniture.",
      "A vase, a stack of books, a throw pillow or a small ceramic object all bring the color in without any risk of overcommitting.",
      "It's the easiest way to test whether pink actually belongs in a space before moving on to anything more permanent.",
    ],
    photo: pinPhoto("pink-accessories.jpg", "Small pink decorative accessories styled on a shelf", 736, 736, "https://www.pinterest.com/pin/12525705206722817/", "Pink Home Accessories", "idea13"),
  },
  {
    n: "14",
    title: "A Pink Reading Nook in an Awkward Corner",
    paras: [
      "An unused corner is the perfect spot to commit to pink fully, since it's contained and doesn't affect the rest of the room's palette.",
      "A pink accent chair, a small side table, and good reading light turn a dead corner into one of the most-used spots in the house.",
      "Because the space is small, even a bold, saturated pink feels manageable instead of overwhelming.",
    ],
    photo: pinPhoto("pink-reading-nook.jpg", "Pink accent chair and side table styled in a cozy reading nook corner", 563, 960, "https://www.pinterest.com/pin/334181234872007055/", "Pink Reading Nook", "idea14"),
  },
  {
    n: "15",
    title: "Go Bold With Deep, Saturated Pink",
    paras: [
      "Not every pink has to be soft. A deep, saturated pink &mdash; closer to raspberry or magenta &mdash; reads as confident and genuinely dramatic.",
      "It works especially well in a smaller room or as a single statement wall, where the intensity has room to make an impact without overwhelming the whole home.",
      "Paired with dark wood or black accents, deep pink reads as moody and sophisticated rather than anything close to childish.",
    ],
    photo: photo("deep-pink.jpg", "Deep saturated pink living room with dark wood accents", 683, 1024, "idea15"),
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
<p>Pink has a reputation problem in interior design that it doesn't really deserve. Done with the right shade and the right restraint, it reads as warm, sophisticated and genuinely charming &mdash; not childish, and not the color equivalent of a greeting card.</p>
<p>The trick is mostly in the shade and the balance. A dusty, muted pink paired with the right neutrals or a grounding color like sage green or deep wood tones can work in almost any room in the house, from a single accessory all the way up to a full accent wall.</p>
${photo("hero.jpg", "Charming pink bedroom styled with soft textiles and warm accents", 736, 1226, "hero")}

<h2>Choosing a Shade That Actually Works</h2>
<p>Dusty, muted pinks &mdash; think blush, dusty rose, or terracotta-leaning pink &mdash; tend to age far better than anything closer to bubblegum or neon. They read as a genuine color choice rather than a theme, and they pair easily with warm neutrals, sage green, brass and natural wood.</p>
<p>How much pink to use comes down to commitment level. A full wall or a sofa is a real commitment; a rug, curtains or a few accessories let the color in gradually, with room to add more once it's clear the shade actually works in the space.</p>
${productGrid("shade")}

<h2>15 Pink Home Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Pink doesn't have to mean girly, and it doesn't require painting an entire room to make a real impact. The right dusty shade, paired with the right neutral or grounding tone, reads as considered and genuinely charming rather than themed.</p>
<p>Starting small &mdash; a rug, a few accessories, one curtain panel &mdash; is the easiest way to find out whether pink actually belongs in a space before committing to anything bigger.</p>
`;

module.exports = { body };
