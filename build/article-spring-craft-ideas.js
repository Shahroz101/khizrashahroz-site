// Body content for "15 Spring Craft Ideas Worth an Afternoon". Photos
// carried over from the source article. The source scattered fabricated
// quotes throughout (attributed to Brené Brown, Martha Stewart, Emily
// Henderson, Joanna Gaines, Nate Berkus, Justina Blakeney) — cut
// entirely, not part of this site's voice. All 15 ideas have a photo in
// the source; none dropped. Condensed 2 padded intro sections down to 1.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0BC878ZRG", title: "Krightlink Mini Hot Glue Gun Kit with 30 Glue Sticks, 20W Fast Preheating", w: 1500, h: 1440 },
    { asin: "B0DDZPZC5K", title: "Apple Barrel 16 Piece Pastel Perfection Acrylic Paint Set, 2 oz Bottles", w: 1500, h: 1072 },
  ],
  intro: [
    { asin: "B0BPM2KBGP", title: "BTSKY 3-Layer Plastic Craft Organizer Box with Dividers", w: 1500, h: 1410 },
    { asin: "B0F1N8JZM5", title: "2 Pack 2mm Natural Jute Twine, 1600 Feet, for Crafting and Gift Wrapping", w: 1082, h: 916 },
  ],
  idea1: [
    { asin: "B09K7J6R2R", title: "14 Inch Round Metal Wire Wreath Frames, 2 Pack", w: 1484, h: 1500 },
    { asin: "B0HF4PPQ5G", title: "2 Pack Artificial Hanging Eucalyptus Garland Vines, Faux Greenery", w: 1376, h: 1500 },
  ],
  idea2: [
    { asin: "B0H8DCZV24", title: "Sweejar 10 Piece Glass Storage Jar Set with Acacia Wood Lids", w: 1419, h: 1139 },
    { asin: "B09CKPKSTK", title: "Caliart Pastel Acrylic Paint Set, 24 Colors, with 12 Brushes", w: 1500, h: 1498 },
  ],
  idea3: [
    { asin: "B0D4NLHK54", title: "North Mountain Supply 750 ml Glass Bordeaux Wine Bottles, Case of 6", w: 920, h: 1500 },
    { asin: "B0GV3WWC8R", title: "3mm Natural Jute Twine and Rope, 328 Ft, for Crafts and Gift Wrapping", w: 1351, h: 1500 },
  ],
  idea4: [
    { asin: "B00178QQJ8", title: "Mod Podge Gloss Sealer, Glue and Finish, 16 oz", w: 701, h: 1500 },
    { asin: "B083JRHRW1", title: "vensovo 6 Inch Terracotta Clay Pots with Saucers, 4 Pack", w: 1000, h: 954 },
  ],
  idea5: [
    { asin: "B08BNMYY53", title: "JANOU 3 Piece Unfinished Wood Hanging Sign Blanks, Rectangle", w: 1500, h: 1269 },
    { asin: "B07Z86PHP8", title: "POSCA PC-5M Water-Based Acrylic Paint Markers, Medium Tip, 8 Count", w: 1500, h: 1489 },
  ],
  idea6: [
    { asin: "B0F2T679FP", title: "TUXIYA 100 Sheets Colored Cardstock, 8.5 x 11 Inch, 50 Colors", w: 1391, h: 1360 },
    { asin: "B084ZQSPTX", title: "Crayola Paper Flower Science Kit, Color Changing Flowers", w: 1028, h: 1081 },
  ],
  idea7: [
    { asin: "B0C7T7JWWM", title: "Aboofx Wooden Flower Pressing Kit, 11 x 11 Inch, 10 Layers", w: 1500, h: 1476 },
    { asin: "B079KL4C91", title: "Amazon Basics Clear Thermal Laminating Sheets, 9 x 11.5 Inch, 200 Pack", w: 1500, h: 1352 },
  ],
  idea8: [
    { asin: "B0BL3GTGHK", title: "GOmaize Front Loading Black Picture Frames, 8 x 10 Inch, Set of 5", w: 1141, h: 1152 },
    { asin: "B0FJYRL31K", title: "Black Cardstock, 8.5 x 11 Inch, 40 Sheets, 75 lb", w: 1207, h: 1500 },
  ],
  idea9: [
    { asin: "B07VHMT14L", title: "150 Piece 4 x 4 Inch Cotton Craft Fabric Bundle Squares", w: 976, h: 902 },
    { asin: "B0CMD7TNS8", title: "FITTDYHE Permanent Washable Clear Fabric Glue, 60 ml", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0CP82JRKW", title: "Brass Metal Candle Holder with Handmade Glass Dome for Pillar Candles", w: 1268, h: 1328 },
    { asin: "B0G397KD7H", title: "132 Piece Colorful Pressed Flowers for Crafts and Resin", w: 1500, h: 1439 },
  ],
  idea11: [
    { asin: "B06Y42W7Y7", title: "Glitzhome Hanging Wooden Bird House, 9.7 Inch, Decorative Garden", w: 400, h: 699 },
    { asin: "B0F28P22XB", title: "DecoArt Americana Essential Pastel Acrylic Paint Set, 9 Bottles, 2 fl oz", w: 1440, h: 1500 },
  ],
  idea12: [
    { asin: "B07K9HHRW9", title: "Caydo 12 Piece 6 Inch Embroidery Hoops Set", w: 966, h: 870 },
    { asin: "B0CYLKH5MQ", title: "70 Piece Artificial Greenery Stem Box Set, Sage Green and White, 8 Kinds", w: 1495, h: 1500 },
  ],
  idea13: [
    { asin: "B0CL6C7DF2", title: "YunKo 6 Piece Unfinished Wooden Eggs for Painting and Crafts", w: 1500, h: 1222 },
    { asin: "B0DX3CMCBZ", title: "Apple Barrel 36 Piece Matte Acrylic Craft Paint Kit, 2 fl oz Each", w: 1438, h: 1500 },
  ],
  idea14: [
    { asin: "B0753JTSPQ", title: "Americanflat 11 x 14 Inch Shadow Box Frame, Black Engineered Wood", w: 1151, h: 1500 },
    { asin: "B0GXV8YHZK", title: "110 Piece Pressed Dried Flowers and Leaves for Crafts and Resin", w: 1500, h: 1500 },
  ],
  idea15: [
    { asin: "B0DQP3C7SG", title: "Natural Marble Vanity Tray for Bathroom and Tabletop Styling", w: 1500, h: 1374 },
    { asin: "B0HC17T1RM", title: "Hand Blown Amber Glass Vase for Flowers, 12.4 Inch, Modern", w: 738, h: 1500 },
  ],
  remembering: [
    { asin: "B0BK8ZKBNW", title: "Sukh 5 Piece Natural Raffia Ribbon for Gift Wrapping and Crafts", w: 1307, h: 1500 },
    { asin: "B0FJ2RCX3Q", title: "DecoArt Americana Boho Colors Acrylic Paint Set, 9 Bottles, 2 fl oz", w: 1331, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "spring-craft-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "spring-craft-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "spring-craft-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Spring Wreath With Faux Greenery",
    paras: [
      "If only one thing gets made this season, make it a wreath. Nothing announces spring from the front door quite as loudly.",
      "A basic hoop, hot-glued faux eucalyptus, a handful of small flowers and a soft bow is genuinely all it takes.",
      "Less reads as modern here; more starts to look like a craft store exploded. Three to five accent flowers is usually the ceiling, not the starting point.",
    ],
    photo: pinPhoto("spring-wreath.jpg", "Spring wreath made with faux eucalyptus greenery, small flowers and a soft bow", 761, 761, "https://www.pinterest.com/pin/4598879036159294208/", "Spring Wreath With Faux Greenery", "idea1"),
  },
  {
    n: "02",
    title: "Painted Mason Jar Flower Vases",
    paras: [
      "This is the easiest possible entry point into spring crafting, and it never stops being satisfying.",
      "Old mason jars, a coat of pastel chalk or acrylic paint, and a light sanding on the edges for a rustic finish is the whole process.",
      "A little imperfection in the paint actually helps here &mdash; a slightly messy finish reads as more intentional than a flawless one.",
    ],
    photo: pinPhoto("mason-jar-vases.jpg", "Pastel painted mason jar flower vases with tulips and faux stems", 683, 1024, "https://www.pinterest.com/pin/4292562140980166/", "Painted Mason Jar Flower Vases", "idea2"),
  },
  {
    n: "03",
    title: "Twine-Wrapped Glass Bottles",
    paras: [
      "This one leans rustic and cozy, and it costs almost nothing to put together.",
      "Wrapping old bottles or jars in twine from the base upward, then adding a few small stems at the top, is the entire technique.",
      "The texture reads beautifully against a wood table, and it's convincing enough that people tend to ask where it was bought rather than assume it was made.",
    ],
    photo: pinPhoto("twine-bottles.jpg", "Twine-wrapped glass bottles with small flower stems styled on a wood table", 736, 981, "https://www.pinterest.com/pin/14566398793603524/", "Twine-Wrapped Glass Bottles", "idea3"),
  },
  {
    n: "04",
    title: "Decoupage Flower Pots",
    paras: [
      "This one looks artsy but stays genuinely simple &mdash; patterned napkins or scrapbook paper glued onto a plain terracotta pot, then sealed.",
      "Cut the paper to fit, brush on a decoupage medium, smooth it down, and seal with a second coat once it's dry.",
      "It instantly hides a boring orange clay pot and makes a basic planter look custom, which makes it a strong fit for herbs or small succulents.",
    ],
    photo: photo("decoupage-pots.jpg", "Decoupage terracotta flower pots covered in patterned paper", 768, 1024, "idea4"),
  },
  {
    n: "05",
    title: "Hand-Painted Wooden Signs With Spring Quotes",
    paras: [
      "A quote sign only works when the font stays simple and the message stays short &mdash; \"Hello Spring\" does more than a full paragraph ever could.",
      "A neutral paint color, one consistent font style, and real restraint on the amount of text are what keep it from looking cheap.",
      "Overcrowded text tips the whole thing into looking like a dated motivational poster instead of considered decor.",
    ],
    photo: pinPhoto("wooden-signs.jpg", "Hand-painted wooden sign with a short spring quote in a clean font", 999, 1024, "https://www.pinterest.com/pin/4598738284324608768/", "Hand-Painted Wooden Spring Sign", "idea5"),
  },
  {
    n: "06",
    title: "DIY Paper Flower Garland",
    paras: [
      "This one is cheerful without much effort &mdash; simple flower shapes cut from colored cardstock and strung together along a length of twine.",
      "Hung across a window or along a shelf, it adds color without adding any real weight or clutter to the room.",
      "It's genuinely lightweight, budget-friendly, and renter-safe, which makes it an easy call for anyone who can't commit to anything permanent.",
    ],
    photo: pinPhoto("paper-flower-garland.jpg", "DIY paper flower garland made from colored cardstock hung across a window", 683, 1024, "https://www.pinterest.com/pin/341921796714769572/", "DIY Paper Flower Garland", "idea6"),
  },
  {
    n: "07",
    title: "Pressed Flower Bookmarks",
    paras: [
      "This craft feels soft and a little nostalgic &mdash; small flowers pressed inside a book for a few days, then laminated onto a strip of cardstock.",
      "The result makes a genuinely thoughtful handmade gift, and it finally puts to use all those flowers picked up on a whim and never used for anything.",
      "They're lightweight, personal, and noticeably more memorable than anything bought off a shelf.",
    ],
    photo: pinPhoto("pressed-flower-bookmark.jpg", "Pressed flower bookmarks made from cardstock and laminated flowers", 683, 1024, "https://www.pinterest.com/pin/24066179253123825/", "Pressed Flower Bookmark Craft", "idea7"),
  },
  {
    n: "08",
    title: "Bunny or Bird Silhouette Wall Art",
    paras: [
      "This one sounds like it risks feeling kiddish, but kept minimal it reads as genuinely modern instead.",
      "Simple silhouettes cut from black or white cardstock, framed in a thin neutral frame, keep the shapes looking intentional rather than cartoonish.",
      "Neutral colors and clean outlines are what separate this from a kindergarten craft project &mdash; the simpler the shape, the more sophisticated the result.",
    ],
    photo: pinPhoto("silhouette-wall-art.jpg", "Minimal bunny and bird silhouette wall art in thin neutral frames", 736, 736, "https://www.pinterest.com/pin/105834659989527390/", "Bunny or Bird Silhouette Wall Art", "idea8"),
  },
  {
    n: "09",
    title: "Fabric Scrap Spring Table Runner",
    paras: [
      "Leftover fabric scraps or an old cotton shirt, stitched together into a simple patchwork strip, makes a table runner with real character.",
      "Soft spring colors &mdash; sage, blush, cream &mdash; stitched or glued together and pressed flat give it texture a store-bought runner never quite has.",
      "A slightly imperfect seam actually works in its favor here. It reads as handmade rather than mass-produced, which is exactly the point.",
    ],
    photo: pinPhoto("table-runner.jpg", "Patchwork fabric scrap table runner in soft sage, blush and cream tones", 683, 1024, "https://www.pinterest.com/pin/775674735861485709/", "Fabric Scrap Spring Table Runner", "idea9"),
  },
  {
    n: "10",
    title: "DIY Spring Candle Holders With Dried Flowers",
    paras: [
      "A plain glass votive turns into something considerably more special once tiny dried flowers or pressed leaves are sealed onto the outside.",
      "The candlelight shines through the dried petals and casts a soft glow that a plain glass holder never manages on its own.",
      "It costs almost nothing to make, yet consistently gets mistaken for something bought from a boutique.",
    ],
    photo: pinPhoto("candle-holders.jpg", "Glass candle holders decorated with sealed dried flowers and leaves, glowing from within", 735, 875, "https://www.pinterest.com/pin/28288303906736472/", "DIY Spring Candle Holders With Dried Flowers", "idea10"),
  },
  {
    n: "11",
    title: "Painted Terracotta Birdhouses",
    paras: [
      "Small wooden or terracotta birdhouses, painted in a soft pastel palette and set on a shelf or windowsill, bring a bit of backyard charm indoors.",
      "Soft blue, sage green, cream and blush all work well together &mdash; the goal is cottagecore, not a kindergarten art table.",
      "Keeping the palette to two or three colors is what keeps a set of these looking styled instead of like a toy display.",
    ],
    photo: pinPhoto("birdhouses.jpg", "Painted terracotta birdhouses in soft pastel colors styled on a shelf", 1024, 1024, "https://www.pinterest.com/pin/555913147773374563/", "Painted Terracotta Birdhouses", "idea11"),
  },
  {
    n: "12",
    title: "DIY Floral Hoop Wall Decor",
    paras: [
      "An embroidery hoop wrapped in greenery with a small floral cluster attached off to one side reads as modern and intentionally asymmetrical.",
      "Hanging two or three of these at slightly different heights fills empty wall space fast, without the visual weight of a traditional frame.",
      "It looks almost too simple while it's being made, and then reliably earns more compliments than something far more complicated would.",
    ],
    photo: pinPhoto("floral-hoop.jpg", "DIY floral embroidery hoops wrapped in greenery hung at different heights on a wall", 576, 1024, "https://www.pinterest.com/pin/123849058497679464/", "DIY Floral Hoop Wall Decor", "idea12"),
  },
  {
    n: "13",
    title: "Spring Painted Eggs, Beyond the Holiday Aisle",
    paras: [
      "Painted eggs don't have to look like they came straight from the holiday aisle. In neutral tones, they read as genuinely sculptural.",
      "Wooden or ceramic eggs in matte paint, soft earthy colors, and simple solid tones or patterns keep the whole thing feeling like real decor.",
      "Displayed in a wooden bowl with a little moss, they're consistently mistaken for an actual art piece rather than ten minutes of craft paint.",
    ],
    photo: pinPhoto("painted-eggs.jpg", "Matte painted eggs in neutral earthy tones displayed in a wooden bowl with moss", 736, 981, "https://www.pinterest.com/pin/662662532714148297/", "Spring Painted Egg Decor", "idea13"),
  },
  {
    n: "14",
    title: "DIY Nature Shadow Box Art",
    paras: [
      "Leaves, small flowers or thin branches collected on a walk turn into real art once they're arranged inside a shadow box frame.",
      "A neutral background, a loose arrangement, and a gentle hand with the glue are all it takes to bring the outdoors inside.",
      "It costs essentially nothing and finally gives a reason for every stray leaf or flower picked up and pocketed along the way.",
    ],
    photo: pinPhoto("shadow-box.jpg", "Nature shadow box art with pressed leaves, flowers and small branches", 576, 1024, "https://www.pinterest.com/pin/281543726295561/", "DIY Nature Shadow Box Art", "idea14"),
  },
  {
    n: "15",
    title: "Simple Spring Centerpiece Tray",
    paras: [
      "This one ties the whole list together &mdash; a tray holding a small vase, a candle or two, a mini jar, and one natural element like moss or stones.",
      "It looks fully styled and intentional without ever feeling like a permanent commitment to a single look.",
      "Grouping the pieces in odd numbers keeps the balance right, and the whole thing can be swapped out in minutes whenever the table starts to feel stale.",
    ],
    photo: pinPhoto("centerpiece-tray.jpg", "Simple spring centerpiece tray with a small vase, candles and natural elements", 683, 1024, "https://www.pinterest.com/pin/1049479519437994850/", "Simple Spring Centerpiece Tray", "idea15"),
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
<p>There's a specific restlessness that shows up once the sunlight starts hitting a little warmer and the windows stay open longer &mdash; a sudden urge to clean, rearrange, and make something with actual hands instead of a screen. That's spring energy, and it's a genuinely good excuse to pull out the glue gun.</p>
<p>None of these need an art degree or a few hundred dollars in supplies. A small bin of basics covers almost everything: a hot glue gun, craft scissors, acrylic paint, twine or ribbon, faux greenery, a few mason jars, and some cardstock. Simple supplies plus a decent idea consistently beats an expensive haul of specialty tools.</p>
${photo("hero.jpg", "Collection of handmade spring crafts styled together, including painted jars and floral decor", 1179, 936, "hero")}

<h2>Matching the Craft to the Time Available</h2>
<p>Picking a project based on mood and time available is what actually gets it finished. Ten minutes covers small jars or simple decor. Thirty minutes is enough for a wreath or a paper craft. A full hour opens up painting projects or anything bigger. Matching the craft to the energy on hand beats saving forty ideas and finishing none of them.</p>
${pinPhoto("intro-reset.jpg", "Spring crafting supplies and materials laid out, ready for a seasonal DIY project", 585, 1024, "https://www.pinterest.com/pin/39547302973477700/", "Spring Crafting Supplies", "intro")}

<h2>15 Spring Craft Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>A Few Things Worth Remembering</h2>
<p>Sticking to two or three colors, leaning on natural textures, and leaving a little breathing room between elements keeps every one of these from tipping into clutter. Neon colors, too many competing patterns, and overcrowding are the three things that reliably ruin an otherwise good craft. When something looks slightly off, removing one item almost always fixes it faster than adding another.</p>
${productGrid("remembering")}

<h2>Final Thoughts</h2>
<p>Fifteen craft ideas, no complicated tools, and a full afternoon of easy wins waiting to happen. None of it requires perfection or a fully stocked craft room &mdash; just a little time and a small spark of motivation.</p>
<p>Start with one jar, one wreath, one bottle. The mood shift that follows tends to be bigger than the project itself.</p>
`;

module.exports = { body };
