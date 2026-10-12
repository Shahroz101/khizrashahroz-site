// Body content for "15 Bathroom Sink Decor Ideas That Actually Make a
// Bathroom Look Great". Photos carried over from the source article,
// Pinterest pin links preserved. Source had an extraordinary number of
// fabricated/unverifiable quotes and citations — 12 across 15 ideas —
// attributed to Studio McGee (twice), Nate Berkus, Better Homes &
// Gardens, Forbes Home, Houzz, Sarah Sherman Samuel (twice),
// Architectural Digest, the American Psychological Association,
// Psychology Today, and Kelly Wearstler. All dropped; the underlying
// advice rewritten in the site's own voice. 14 of 15 ideas had a photo
// in the source (idea 15, Edit Ruthlessly, had none — a fitting gap
// for an idea about removing things) and all 14 kept.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0199HHBT2", title: "MyGift 4 Piece Ceramic White Bathroom Accessory Set with Soap Dispenser Pump", w: 1415, h: 1391 },
    { asin: "B0H23XZ9S2", title: "Artificial Eucalyptus Plant, 11\" Faux Greenery in Ceramic Pot", w: 1069, h: 1091 },
  ],
  introWhy: [
    { asin: "B0BSTWK9XY", title: "Bathroom Accessories Set, 4-Piece Ceramic Bath Accessory Complete Set with Lotion", w: 1490, h: 1500 },
    { asin: "B09TB21Q6W", title: "12Oz White Soap Dispenser, Modern Ceramic Lotion Hand Soap Dispenser with Easy-to-Press", w: 1081, h: 1500 },
  ],
  tray: [
    { asin: "B0G6Y9JT9C", title: "Kmeino Matte Black Resin Bathroom Vanity Tray, Rectangular Countertop Organizer", w: 1500, h: 853 },
    { asin: "B08X1DMYJZ", title: "Luxspire Resin Bathroom Vanity Tray for Countertop Organizer, M, Ink Black", w: 1500, h: 728 },
  ],
  dispenser: [
    { asin: "B0GD6RTXDD", title: "Matte Ceramic Soap Dispenser with Gold Pump, 300ml Embossed Design for Bathroom/Kitchen", w: 679, h: 1483 },
    { asin: "B0F2GY7RGL", title: "Matte Ceramic Soap Dispenser White with Easy Press Pump", w: 751, h: 1056 },
  ],
  greenery: [
    { asin: "B09V4V6P17", title: "ENOVA FLORAL Fake Potted Plant, Artificial Eucalyptus Plants in Ceramic Pots", w: 1219, h: 1204 },
    { asin: "B0H6RW6VPZ", title: "13\" Artificial Eucalyptus Plant White Ceramic Pot Indoor Decor", w: 1500, h: 1323 },
  ],
  towels: [
    { asin: "B0CNKHNJMR", title: "Pidada Hand Towels Set of 2 Embroidered Floral Pattern 100% Cotton Absorbent Soft", w: 998, h: 1084 },
    { asin: "B0964WT79S", title: "4 Pack 100% Cotton Towels 13x29in Luxury Assorted Solid Color Quick Dry Hand Towel for", w: 1262, h: 879 },
  ],
  matching: [
    { asin: "B019EF4H50", title: "MyGift 4 Pcs Soap Dispenser and Toothbrush Holder Set, Ceramic Bathroom Accessories Set", w: 1281, h: 1344 },
    { asin: "B07NQ2V5XJ", title: "MyGift 4 Pcs Gold Bathroom Accessories Set with Toothbrush Holder, Soap Dispenser", w: 1500, h: 1183 },
  ],
  scent: [
    { asin: "B0G7ZM3GG6", title: "M&amp;SENSE Eucalyptus Soy Candle, 8.1oz Gilded Glass, Spa Calming Aromatherapy", w: 1154, h: 1500 },
    { asin: "B08TMD4XYN", title: "Sweet Water Decor Self Care Soy Candle, Patchouli Eucalyptus &amp; Lavender, 9oz", w: 1389, h: 1500 },
  ],
  art: [
    { asin: "B081X5568B", title: "Tabletop Mirror Antique Brass 8\"x10\"", w: 1065, h: 1500 },
    { asin: "B09HL14C1J", title: "HAUS AND HUES Funny Bathroom Wall Art, Set of 3 Frameable Humorous Pictures", w: 1500, h: 569 },
  ],
  soapDish: [
    { asin: "B0FX5262ND", title: "Soft White Marble Soap Dish, Rectangular 4.7\"x3.5\" White Stone Bar Soap Holder for", w: 1487, h: 993 },
    { asin: "B0H4YD4TH8", title: "2 Pcs Natural Marble Soap Dish for Shower, Stone Soap Tray for Bathroom", w: 1500, h: 1213 },
  ],
  natural: [
    { asin: "B0D9T8CW17", title: "ALELION 8\" Acacia Wood Bathroom Vanity Tray for Counter", w: 1500, h: 1086 },
    { asin: "B0HFRQ17YF", title: "Acacia Wood Bathroom Tray, Small Wooden Vanity Tray for Counter Decor", w: 1500, h: 1015 },
  ],
  storage: [
    { asin: "B09ZKYQMVD", title: "Vtopmart 4 Pack Small Clear Stackable Storage Drawers, Fits Narrow Spaces", w: 1083, h: 809 },
    { asin: "B0D2CYMY9Z", title: "Acrylic Small Makeup Organizer with Drawers, Clear Skincare Organizer for Vanity", w: 1349, h: 1048 },
  ],
  vertical: [
    { asin: "B0G9TYBBCJ", title: "hjn 12 Inch White Ceramic Vase for Flowers, Matte Tall Modern Vase for Decor Minimalist", w: 1254, h: 1254 },
    { asin: "B0G5K91VXB", title: "12.6 inch Tall Handmade Large White Ceramic Vase for Flowers, Home Decor", w: 1492, h: 1500 },
  ],
  palette: [
    { asin: "B0CCJS363D", title: "ZCCZ Matte Black Bathroom Accessories Set, 4-Piece with Soap Dispenser and Vanity Tray", w: 1500, h: 1100 },
    { asin: "B0CGX7WHFM", title: "KASUNTING Matte Black Bathroom Accessories Set, 4 Pcs Glass Bathroom Accessory Set", w: 1500, h: 1114 },
  ],
  glass: [
    { asin: "B09GNNZYLY", title: "INIUNIK Glass Qtip Holder Dispenser with Bamboo Lid, 2 Pack", w: 1328, h: 1019 },
    { asin: "B0H2LD96F2", title: "SheeChung 2 Pack Glass Apothecary Jar with Black Bamboo Lid", w: 1500, h: 1209 },
  ],
  metallic: [
    { asin: "B0C9ZCH3KL", title: "3D Textured Brushed Gold Ceramic Soap Dispenser, Shiny Finish", w: 1376, h: 1500 },
    { asin: "B0CKQST45X", title: "Gold Glass Bathroom Soap Dispenser, 16 Oz Clear Glass Lotion Bottle with Rustproof", w: 600, h: 1409 },
  ],
  edit: [
    { asin: "B0B3JJYJSS", title: "DEKAVA Under Sink Organizer 2 Pack, Bathroom Cabinet Organizer", w: 1500, h: 1500 },
    { asin: "B09NQV4V27", title: "Simple Houseware 2 Tier Pull-Out Sliding Drawer Under Sink Storage, White", w: 1475, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bathroom-sink-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bathroom-sink-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-sink-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Anchor Everything With a Decorative Tray",
    paras: [
      "If only one idea from this entire list gets tried, this is the one worth picking.",
      "A tray instantly changes how a sink reads, since it creates a visual boundary that the eye interprets as organized, even when the actual items on it haven't changed.",
      "Stone, wood or matte black trays tend to look intentional without pulling focus &mdash; keeping it to three items or fewer on the tray usually looks best.",
    ],
    photo: pinPhoto("decorative-tray.jpg", "Decorative tray anchoring bathroom sink decor", 683, 1024, "https://www.pinterest.com/pin/26177241580452779/", "Decorative Tray for Bathroom Sink Decor", "tray"),
  },
  {
    n: "02",
    title: "Upgrade the Soap Dispenser",
    paras: [
      "The plastic soap bottle straight from the store undoes a lot of otherwise good styling.",
      "A quality soap dispenser functions almost like jewelry for the sink area &mdash; same soap inside, considerably better presentation.",
      "It's a small, one-time swap, but it's the kind of detail that tends to get noticed daily rather than just on first impression.",
    ],
    photo: pinPhoto("soap-dispenser.jpg", "Upgraded ceramic soap dispenser styled on a bathroom sink", 683, 1024, "https://www.pinterest.com/pin/13299761395430065/", "Bathroom Soap Dispenser Styling", "dispenser"),
  },
  {
    n: "03",
    title: "Add a Touch of Greenery Near the Sink",
    paras: [
      "Plants soften a bathroom almost instantly &mdash; even a single small one changes the whole feel of the counter.",
      "Greenery balances out the hard, cold surfaces a bathroom tends to be built from &mdash; porcelain, tile, glass &mdash; with something organic and alive.",
      "In a bathroom with limited natural light, a realistic faux plant works just as well, since the visual effect comes from color and shape rather than whether the leaves are real.",
    ],
    photo: pinPhoto("greenery.jpg", "Small plant styled near a bathroom sink for greenery", 701, 1024, "https://www.pinterest.com/pin/223139356535354537/", "Greenery Near a Bathroom Sink", "greenery"),
  },
  {
    n: "04",
    title: "Style Hand Towels Instead of Tossing Them",
    paras: [
      "Messy towels undo good sink styling faster than almost anything else.",
      "Folded or rolled towels add real softness and order to the counter &mdash; it's a trick hotels rely on consistently for good reason.",
      "A neatly styled stack of towels reads as considerably cleaner than the same towels left in a loose pile, even when nothing else about them has actually changed.",
    ],
    photo: pinPhoto("hand-towels.jpg", "Neatly styled rolled hand towels on a bathroom sink", 683, 1024, "https://www.pinterest.com/pin/1759287348618890/", "Styled Hand Towels for a Bathroom Sink", "towels"),
  },
  {
    n: "05",
    title: "Stick to Matching Sink Accessories",
    paras: [
      "A matching accessory set can feel boring in theory, but it genuinely works in practice.",
      "Matching soap dispensers, trays and holders calm down visual noise, especially in a small bathroom where every item on the counter competes for attention.",
      "Cohesive accessories tend to read as more intentional than a mismatched collection, even when each individual piece is perfectly nice on its own.",
    ],
    photo: photo("matching-accessories.jpg", "Matching sink accessories styled together on a bathroom counter", 683, 1024, "matching"),
  },
  {
    n: "06",
    title: "Introduce a Subtle Scent Element",
    paras: [
      "A bathroom should smell as considered as it looks.",
      "A candle or a diffuser adds warmth to the sensory experience of the room without cluttering the actual sink surface.",
      "Subtle fragrances work best here &mdash; this isn't the spot for an overpowering floral scent competing with everything else going on in the room.",
    ],
    photo: pinPhoto("scent-element.jpg", "Subtle candle or diffuser styled as a scent element near a sink", 683, 1024, "https://www.pinterest.com/pin/914862418060579/", "Scent Element for Bathroom Sink Decor", "scent"),
  },
  {
    n: "07",
    title: "Lean Art or a Small Mirror Near the Sink",
    paras: [
      "Leaning a piece of art against the wall adds real personality without requiring any commitment.",
      "It reads as collected rather than staged, since nothing is permanently mounted.",
      "This trick works especially well in a rental, where it delivers genuine personality with zero wall damage.",
    ],
    photo: pinPhoto("art-or-mirror.jpg", "Small art or mirror leaned near a bathroom sink", 683, 1024, "https://www.pinterest.com/pin/9077636741481866/", "Leaning Art Near a Bathroom Sink", "art"),
  },
  {
    n: "08",
    title: "Swap Liquid Soap for a Decorative Soap Dish",
    paras: [
      "Bar soap reads as genuinely intentional once it's styled correctly.",
      "A stone, marble or ceramic soap dish adds real texture to the counter while still keeping everything tidy.",
      "It's a small swap, but one that shifts the whole sink area from purely functional to actually styled.",
    ],
    photo: pinPhoto("soap-dish.jpg", "Decorative soap dish styled on a bathroom counter", 683, 1024, "https://www.pinterest.com/pin/201887995792196200/", "Decorative Soap Dish for a Bathroom Sink", "soapDish"),
  },
  {
    n: "09",
    title: "Add Natural Materials for Warmth",
    paras: [
      "A bathroom feels cold fast without some kind of texture to balance it out.",
      "Wood, stone and ceramic soften the space and offset the glossy, hard surfaces that dominate most bathroom counters.",
      "Even one wooden tray is often enough to shift the whole mood of the sink area toward something warmer.",
    ],
    photo: pinPhoto("natural-materials.jpg", "Natural wood and stone materials styled near a bathroom sink", 683, 1024, "https://www.pinterest.com/pin/492649953012554/", "Natural Materials for Bathroom Sink Decor", "natural"),
  },
  {
    n: "10",
    title: "Keep Countertop Storage Minimal",
    paras: [
      "Storage should stay out of sight unless it's genuinely attractive enough to be seen.",
      "Clear jars, slim containers, or hidden drawers all work well for keeping sink-area items tucked away without looking cluttered.",
      "A visually calmer counter tends to make mornings feel calmer too &mdash; less to look at means less for the eye to process first thing.",
    ],
    photo: pinPhoto("minimal-storage.jpg", "Minimal countertop storage styled near a bathroom sink", 576, 1024, "https://www.pinterest.com/pin/68748830786/", "Minimal Bathroom Countertop Storage", "storage"),
  },
  {
    n: "11",
    title: "Create Height With One Vertical Element",
    paras: [
      "Flat decor tends to look unfinished, no matter how nice the individual pieces are.",
      "A tall soap dispenser, a slim vase, or a standing brush holder adds genuine visual balance to an otherwise flat countertop.",
      "One vertical piece is usually enough &mdash; it gives the eye somewhere to travel upward rather than staying locked on one flat plane.",
    ],
    photo: photo("vertical-element.jpg", "Tall vertical decor element styled on a bathroom sink", 618, 1024, "vertical"),
  },
  {
    n: "12",
    title: "Use a Tight Color Palette",
    paras: [
      "Too many colors on a small countertop create visual chaos fast.",
      "Sticking to two or three colors across all the sink-area items keeps the whole arrangement feeling considered rather than accidental.",
      "A tight palette also removes a lot of the guesswork when adding new pieces later, since anything outside that range simply doesn't make the cut.",
    ],
    photo: photo("tight-palette.jpg", "Tight color palette used in bathroom sink styling", 618, 1024, "palette"),
  },
  {
    n: "13",
    title: "Display Everyday Items in Glass Containers",
    paras: [
      "Glass makes purely functional items look genuinely intentional.",
      "Cotton pads and swabs read as lighter and cleaner once they're transferred into a glass jar rather than left in their original packaging.",
      "The trick only works if the containers aren't overfilled &mdash; a jar crammed to the top undoes the clean look almost entirely.",
    ],
    photo: pinPhoto("glass-containers.jpg", "Everyday bathroom items displayed in glass containers", 683, 1024, "https://www.pinterest.com/pin/2674081025861152/", "Glass Containers for Bathroom Sink Storage", "glass"),
  },
  {
    n: "14",
    title: "Add a Subtle Metallic Accent",
    paras: [
      "Metal adds polish to a sink area quickly.",
      "Brass, matte black or chrome, used in small doses, bring a bit of shine without turning the whole counter into a showroom display.",
      "One metallic accent is genuinely enough &mdash; a little goes a long way here, and more than one tends to compete rather than complement.",
    ],
    photo: pinPhoto("metallic-accent.jpg", "Subtle metallic accent styled on a bathroom sink", 683, 1024, "https://www.pinterest.com/pin/12244230231485035/", "Metallic Accent for Bathroom Sink Decor", "metallic"),
  },
  {
    n: "15",
    title: "Edit Ruthlessly and Embrace Empty Space",
    paras: [
      "This matters more than any single decor item on this list.",
      "Negative space gives a sink area genuine room to breathe, which is easy to forget once a counter starts filling up with individually nice pieces.",
      "A reliable rule of thumb: once the styling feels finished, remove one more item. It works more often than not.",
    ],
    productsKey: "edit",
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
<p>A bathroom sink gets used more than almost any other surface in the house, and yet it's one of the last places people think to actually style. A few small, deliberate choices here &mdash; a tray, a matching accessory set, a bit of restraint &mdash; make a disproportionate difference given how little space is actually involved.</p>
<p>None of the ideas below require replacing the vanity or the fixtures. Most work as small swaps layered on top of what's already there.</p>
${photo("hero.jpg", "Styled bathroom sink with a soap dispenser, greenery and rolled towels", 1600, 1067, "hero")}

<h2>Why Sink Decor Deserves More Attention</h2>
<p>A sink area gets looked at and touched daily, which makes it one of the highest-impact spots in a bathroom to style well. A tray, a coordinated soap dispenser and a neatly folded towel can shift the whole counter from purely functional to genuinely considered, without touching anything structural.</p>
${pinPhoto("intro-why.jpg", "Chic modern bathroom sink decor styled for a cohesive aesthetic", 683, 1024, "https://www.pinterest.com/pin/354940014403363896/", "Chic Bathroom Sink Decor", "introWhy")}

<h2>15 Bathroom Sink Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these fifteen ideas require a renovation to make a real difference. A tray, a matching set of accessories, and a bit of restraint tend to go further than any single expensive item ever could.</p>
<p>The best-styled sinks are usually the most edited ones &mdash; a few genuinely good pieces, with room left to breathe, will always read as more intentional than a counter filled to the edges.</p>
`;

module.exports = { body };
