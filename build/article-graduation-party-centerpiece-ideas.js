// Body content for "16 Graduation Party Centerpieces Worth Copying".
// The source had only a single stock hero photo and no per-idea photos
// at all — a genuine source limitation, not a curation choice, so all
// 16 ideas run text-only. Condensed 3 padded intro sections down to 1.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0HBPX8C9P", title: "Graduation Party Table Centerpiece Star Sprays, 6 Pack, Black and Gold", w: 1500, h: 1361 },
    { asin: "B0GGLPZRFQ", title: "Black Gold Wooden 2026 Graduation Centerpieces, 5 Pcs, Class Party Decorations", w: 1454, h: 1500 },
  ],
  idea1: [
    { asin: "B0DTQ6GKBK", title: "Breling Graduation Centerpiece Felt Cap Sticks, 12 Pcs, Black and Gold", w: 1500, h: 1454 },
    { asin: "B0GMHFR17B", title: "SVKN Mini Graduation Caps with Tassel, 9 Pcs, for Mason Jars and Small Plush", w: 1493, h: 1500 },
  ],
  idea2: [
    { asin: "B000YQJQKU", title: "Jolee's Boutique Large Grad Cap and Scroll Sticker Embellishment", w: 997, h: 549 },
    { asin: "B0DM2BSPFQ", title: "Blank Scroll Paper with Wood Rods, 3 Pcs, 7 x 15.75 Inch, Vintage Style", w: 1500, h: 1494 },
  ],
  idea3: [
    { asin: "B0FH6NGVVF", title: "Picture Centerpieces for Table, 12 Pcs, Photo Display Boxes, Black", w: 1500, h: 1486 },
    { asin: "B01FSBDZW0", title: "MCS Clear Plastic 6-Sided Photo Cube, 3.25 x 3.25 Inch, 4 Pack", w: 1309, h: 1500 },
  ],
  idea4: [
    { asin: "B0GWCRN8RX", title: "Graduation Bouquet Accessory Set, 4 Pcs Grad Cap and Diploma Centerpiece Toppers", w: 1500, h: 1490 },
    { asin: "B0G24BYJQ9", title: "Artificial Silk Flowers Bouquet, Realistic Faux Centerpiece", w: 1316, h: 1500 },
  ],
  idea5: [
    { asin: "B0H5W3VYLF", title: "Decorative Faux Book Boxes, Set of 3, Linen, Sage", w: 1500, h: 1500 },
    { asin: "B08DL2R1W7", title: "Burlap Lace Ribbons, 8 Rolls, Natural Jute Wedding Ribbon and Twine", w: 915, h: 995 },
  ],
  idea6: [
    { asin: "B0DKC1XPQ3", title: "AWIZOM Wooden Charcuterie Board Numbers 2027, Pine Serving Trays", w: 1500, h: 1499 },
    { asin: "B077W1B73L", title: "Pooqla Decorative LED Light Up Number Letters, White Marquee Sign", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B07SJSSSMN", title: "Mason Jar Solar Lights for Outside, 12 Pack, 30 LED Fairy Lights, Jars Not Included", w: 1500, h: 1378 },
    { asin: "B0H6B8RK4F", title: "White Mason Jar Vases, 12 Pack, 16 Oz Glass Jars for Flowers", w: 1500, h: 1458 },
  ],
  idea8: [
    { asin: "B0H1SGT7LS", title: "Memory Jar Sign for Graduation Party, Class of 2026, Wooden Table Decor", w: 1093, h: 1168 },
    { asin: "B07P9QVT9K", title: "Graduation Wish Cards, 50 Pcs, Advice Cards for High School or College Grads", w: 1274, h: 992 },
  ],
  idea9: [
    { asin: "B08X8JF6CB", title: "Crown Awards Gold Starburst Recognition Trophy, 5.25 Inch, Custom Engraving", w: 694, h: 1066 },
    { asin: "B0BYND5X9G", title: "Mini Gold Trophies, 24 Pack, Plastic Award Cups for Kids", w: 1449, h: 1500 },
  ],
  idea10: [
    { asin: "B0FSR2PV6M", title: "Decorative Ivory Pillar Candles Set, Rustic Unscented, Bulk", w: 1500, h: 1500 },
    { asin: "B0CMM4T6XV", title: "YOROXRG Waterproof Outdoor Flameless Candles, Set of 24, with Remote and Timer", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B0CHNHJHY3", title: "Red Pennant Flags on Sticks, 12 Pack, Small Mini Hand Held", w: 1500, h: 1245 },
    { asin: "B0BGNY4TKB", title: "Black Pennant Flags on Sticks, 25 Pack, Small Mini Hand Held", w: 1500, h: 924 },
  ],
  idea12: [
    { asin: "B08R91D777", title: "Annova Mini Antique Globe, 4 Inch, Swivels in All Directions", w: 1137, h: 1289 },
    { asin: "B078YR3ZZK", title: "SLPR Small Vintage Suitcase Boxes, Set of 3, Travel Themed Party Decor", w: 1291, h: 1500 },
  ],
  idea13: [
    { asin: "B07YNN93X7", title: "newnewshow Acrylic Sign Holder, 8.5 x 11 Inch, 3 Pack, Vertical Double-Sided", w: 1269, h: 1407 },
    { asin: "B0BDQ4MF6G", title: "Bercoor Blank Clear Arch Acrylic Signs with Wooden Stands, 5 x 7 Inch, 10 Pack", w: 1389, h: 1500 },
  ],
  idea14: [
    { asin: "B0F83VXCW1", title: "Woozettn Plastic Candy Jars, 4 Pcs, 71 Oz Clear Hexagonal Containers with Lids", w: 1500, h: 1497 },
    { asin: "B0DY7L39W9", title: "Graduation Candy Buffet Labels and Signs for Grad Party Decorations", w: 1500, h: 1455 },
  ],
  idea15: [
    { asin: "B0BVLZ337J", title: "4x6 Picture Frames, Set of 6, with Real Glass", w: 1361, h: 1500 },
    { asin: "B0DHKRQCM7", title: "SHECIPIN White Ceramic Succulent Pots, 2.5 Inch, with Bamboo Trays", w: 1500, h: 1273 },
  ],
  idea16: [
    { asin: "B0FQJ66QSZ", title: "Black Balloon Weights, 12 Pieces, 0.36 Lb Each", w: 1467, h: 1500 },
    { asin: "B01M4N8D0H", title: "Creative Balloons Cube Weight, 65 g, White, for Helium Balloon Bouquets", w: 1025, h: 1155 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "graduation-party-centerpiece-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "graduation-party-centerpiece-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Graduation Cap Centerpieces",
    paras: [
      "If graduation centerpieces had a hall of fame, this one would headline it. It works for every age, every theme, and every budget.",
      "Mini caps on sticks, caps paired with flowers or balloons, or caps featuring the graduation year or school colors all read as instantly celebratory with zero explanation needed.",
      "These shine on a dessert table, gift table, or any round guest table, and a tassel matching the school color is the small detail that makes it look genuinely intentional.",
    ],
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Diploma Scroll Centerpieces",
    paras: [
      "For a centerpiece that actually means something rather than just looking good, a rolled diploma scroll delivers an emotional note most other options miss.",
      "Parchment-style paper rolled and tied with ribbon, a small tag with the graduate's name and year, standing upright in a jar or vase, keeps it simple but symbolic.",
      "These work beautifully on a memory table or food table, and pair naturally with photos or candles nearby.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Photo Cube Centerpieces",
    paras: [
      "Photo cubes earn real engagement at a party &mdash; guests end up walking table to table just to look at the pictures displayed on each one.",
      "Mixing childhood photos with recent ones, using high-quality prints, and adding the graduation year on one side keeps each cube genuinely interesting to browse.",
      "These shine at sit-down parties where guests actually linger at their tables, creating a quiet emotional moment without ever feeling forced.",
    ],
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Floral Centerpieces With a Graduation Twist",
    paras: [
      "Flowers almost always work, but a graduation centerpiece needs more than just a vase on its own to feel occasion-specific.",
      "A bouquet in school colors, a small graduation cap pick tucked in, or a vase wrapped in graduation ribbon turns an ordinary arrangement into something clearly tied to the event.",
      "Faux flowers work just as well if budget is a concern &mdash; nobody notices the difference from across the table, and they can be reused afterward.",
    ],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Book Stack Centerpieces",
    paras: [
      "This one leans academic, and it's a strong fit for a graduate heading into law, medicine, teaching, or any other books-heavy field.",
      "Three to five hardcover books stacked, topped with a graduation cap or candle, tied together with twine or ribbon in school colors, makes for a genuinely smart-looking display.",
      "It celebrates the journey rather than just the finish line, which tends to be the detail guests actually comment on.",
    ],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Graduation Year Number Centerpieces",
    paras: [
      "For something bold, a large graduation year number anchors a table visually in a way nothing subtle can match.",
      "Glittered wooden numbers, clear numbers filled with confetti or string lights, or numbers paired with florals or balloons all make the year the obvious focal point.",
      "These work well on a main table, dessert station, or welcome table, and they photograph beautifully from almost any angle.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Mason Jar Centerpieces",
    paras: [
      "Mason jars keep showing up for a reason &mdash; they're versatile, affordable, and genuinely charming once styled with intention.",
      "Filling jars with fairy lights, tucking in a rolled diploma, or painting them in school colors all give a familiar object a graduation-specific twist.",
      "They suit a backyard party, an evening celebration, or anything leaning rustic, and create a warm, less formal feel than most other options on this list.",
    ],
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Memory Jar Centerpieces",
    paras: [
      "Some centerpieces just sit there looking nice. A memory jar actually invites guests to participate, which makes it stand out immediately.",
      "Clear jars with decorative labels, a small stack of pens and cards nearby, and a simple instruction sign turn the table into a quick, easy activity.",
      "Guests write advice or well-wishes, and the jar becomes a genuine keepsake the graduate can look back on long after the party's over.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Trophy-Inspired Centerpieces",
    paras: [
      "Graduation deserves a little applause, and a trophy-style centerpiece leans into celebrating the achievement without tipping into cheesy.",
      "Plastic or metallic trophies, customized with funny or meaningful titles, paired with florals or confetti around the base, add real personality to the table.",
      "These work especially well at a laid-back or high-energy party, particularly when the humor on the trophy matches the graduate's actual personality.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Candle Centerpieces With Graduation Details",
    paras: [
      "Candles create instant atmosphere on their own, and a few graduation-specific details turn them into something clearly purposeful rather than generic decor.",
      "Pillar candles in school colors, small graduation cap charms, and a bit of greenery or beads surrounding the base soften the whole table.",
      "LED candles are worth using around a crowded table for safety &mdash; the ambiance still comes through without the open flame risk.",
    ],
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "School Pride Centerpieces",
    paras: [
      "School pride never really goes out of style, and a centerpiece built around school colors and logos feels relevant no matter the overall party theme.",
      "Mini pennants or flags, a logo displayed on a small stand, or colors paired against a neutral base all showcase that loyalty clearly.",
      "These work well spread across multiple guest tables, especially at a larger party, and quietly celebrate where the graduate came from as much as where they're headed.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Travel-Themed Centerpieces",
    paras: [
      "For a graduate heading off to college or a new city, a travel-themed centerpiece captures that forward-looking excitement well.",
      "A small globe or map, a mini suitcase, or a few postcards highlighting future destinations all point toward what's coming next rather than just what's finished.",
      "This theme suits an adventurous personality especially well, or any graduate moving somewhere far from home.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Minimal Acrylic Sign Centerpieces",
    paras: [
      "When louder decor risks overwhelming the space, a minimal acrylic sign keeps things clean, modern and genuinely stylish.",
      "The graduate's name, the graduation year, or a short inspirational quote displayed simply lets the rest of the table's elements actually shine.",
      "This option suits a modern, neutral or more upscale party especially well &mdash; decor that whispers instead of shouting.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Candy-Filled Centerpieces",
    paras: [
      "Decor that doubles as a snack earns automatic bonus points, and a candy-filled centerpiece solves two problems at once.",
      "Clear containers filled with candy that matches the party's color palette, finished with graduation-themed labels, look intentional rather than like a leftover bowl.",
      "These fit casual parties, open-house-style events, and kid-friendly celebrations especially well &mdash; guests grab a handful while chatting instead of hovering awkwardly at a snack table.",
    ],
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Personalized Keepsake Centerpieces",
    paras: [
      "For a centerpiece that genuinely lives on past the party, a keepsake design is worth the extra planning it takes.",
      "Mini frames with a meaningful quote, a customized ornament, or a small plant with a tag all give guests something to take home instead of leaving on the table.",
      "It takes more effort upfront, but it leaves a lasting impression &mdash; guests feel appreciated, and nothing ends up in a trash bag after the party winds down.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Balloon Weight Centerpieces",
    paras: [
      "For something with real energy, a balloon weight centerpiece brings instant height, color and movement to a table.",
      "Graduation-themed foil balloons, kept to two or three colors max, anchored by a stylish weight or box, keep a table feeling full without tipping into cluttered.",
      "These suit a casual party, an outdoor event, or a larger guest list where visual impact matters fast &mdash; just stopping short of so many balloons that festive turns chaotic.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.productsKey ? productGrid(idea.productsKey) : ""}`;
}

const body = `
<p>A graduation party can look thoughtfully styled or thrown together in the last five minutes, and the centerpieces are usually what decide which one it reads as. They anchor the tables, guide the color scheme, and quietly signal that the whole event was actually planned.</p>
<p>A party with simple food and minimal decor can still feel polished if the centerpieces look intentional. An expensive party can fall flat if the tables look empty and awkward. The centerpiece is doing more work than it gets credit for.</p>
${photo("hero.jpg", "Graduation party table styled with centerpieces celebrating the occasion", 1400, 930, "hero")}

<h2>Choosing Without Overthinking It</h2>
<p>Starting with the graduate settles most of the decision &mdash; bold colors or neutral tones, something fun or more sentimental, proud of their school or their next chapter. A centerpiece that reflects the actual person feels more meaningful than a generic pick. Size matters too: oversized pieces block conversation, while tiny ones disappear entirely, so eye-catching without being in-your-face is the right target. And it's worth keeping cleanup in mind from the start &mdash; anything that becomes a chore the next morning isn't worth the trouble it saves on party day.</p>

<h2>16 Graduation Party Centerpiece Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Pulling It All Together</h2>
<p>Sticking to two or three colors repeated across every table keeps the whole setup visually calm instead of scattered. Varying height while keeping the style consistent adds interest without creating chaos, and repeating a key element &mdash; graduation caps on one table, echoed somewhere else &mdash; builds a sense of flow across the whole party.</p>

<h2>Final Thoughts</h2>
<p>A graduation centerpiece does more than decorate a table. Done well, it tells a real story about effort, pride and celebration, and it doesn't require perfection to land &mdash; just intention.</p>
<p>Pick whichever idea actually fits the graduate and the vibe of the day. If guests compliment the decor before they even ask about the food, the table's already done its job.</p>
`;

module.exports = { body };
