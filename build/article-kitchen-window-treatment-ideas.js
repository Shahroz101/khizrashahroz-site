// Body content for "18 Kitchen Window Treatments Worth Trying". Photos
// carried over from the source article (AI-generated style, no
// Pinterest links, no visible credits). All 18 ideas have a photo;
// none dropped.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0FKMZBVLV", title: "jinchan Striped Linen Kitchen Tier Curtains, 20 Inch, Tan, 2 Panels", w: 1500, h: 1500 },
    { asin: "B0GY42MX24", title: "StangH Tan Linen Blend Stripe Roman Shade, 36 x 64 Inch, 1 Panel", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0GVMX5BDW", title: "HESTIA No-Drill Roman Shades for Indoor Windows, Beige, 35.5 x 64 Inch", w: 1500, h: 1500 },
    { asin: "B0DQ7HVY5S", title: "UNISHADES Cordless Fabric Roman Shades, 36.75 x 60 Inch, Natural", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0G43SW3PF", title: "LIVEKID White Sheer Kitchen Curtains, 36 Inch Length, 2 Panels", w: 1024, h: 1024 },
    { asin: "B0BLHYSTQQ", title: "Lecloud White Sheer Curtains, 84 Inches Long, 2 Panels", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0FV7TCJGK", title: "FRAMICS Farmhouse Valance Curtain, Boho Cotton Linen, Olive Green, Rustic Button", w: 1500, h: 1500 },
    { asin: "B09SP476PH", title: "Lush Decor Dolores Light Filtering Valance Curtain, Navy and Multi", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0H8X8XWMX", title: "HOME BASICS Classic Solid Faux Wood Interior Shutters, White, 4 Panels", w: 1500, h: 1500 },
    { asin: "B0H992DN1Z", title: "HOME BASICS Premium Solid Faux Wood Interior Shutters, White, 2 Panels, 27 x 24 Inch", w: 937, h: 1463 },
  ],
  idea5: [
    { asin: "B0D3D54T1C", title: "UNISHADES Bamboo Roman Shades with Valance, 22.5 x 48 Inch, Highfield Teak", w: 1200, h: 1500 },
    { asin: "B0CTSXFJW5", title: "BAYUE Bamboo Roll-Up Window Blinds, Light Filtering", w: 1500, h: 1472 },
  ],
  idea6: [
    { asin: "B0F4RTZ3KZ", title: "ASPMIZ Double Layered Boho Linen Curtains with Lace, Farmhouse Style", w: 1500, h: 1500 },
    { asin: "B0CR6MFNYB", title: "TONIAL 1 Inch Double Curtain Rods, 66 to 120 Inch, Black", w: 1445, h: 1317 },
  ],
  idea7: [
    { asin: "B0D25FVWM1", title: "AOSKY Cordless Blackout Roller Shades, 34 x 72 Inch, Black", w: 1500, h: 1282 },
    { asin: "B0BWJSVH41", title: "SUNOFF Blackout Cordless Roller Shades, 23 x 72 Inch, White", w: 1500, h: 1412 },
  ],
  idea8: [
    { asin: "B0GQ1K2VTZ", title: "VEVOR Tiffany Style Stained Glass Window Panel, 32 x 10 Inch, Hanging Transom", w: 1500, h: 1124 },
    { asin: "B0DPM6T8BQ", title: "Haton Stained Glass Window Film, Rainbow Lattice, 17.5 x 78.7 Inch", w: 1499, h: 1500 },
  ],
  idea9: [
    { asin: "B0H1KNNRQZ", title: "jinchan Linen Striped Tier Curtains for Kitchen Windows, Green, 26 x 24 Inch", w: 1500, h: 1500 },
    { asin: "B0CXJ7MT3L", title: "jinchan Pinch Pleated Tier Curtains, 26 x 36 Inch, 2 Panels, Crude Linen", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0D8KXZ9XW", title: "Pinch Pleated Linen Curtains, 96 Inches Long, Light Filtering Boho Window Drapes", w: 1500, h: 1500 },
    { asin: "B0HC74MYLN", title: "Blackout Triple Pinch Pleat Curtains, Natural Cream, 86 Inches Long, 2 Panels", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B07GL27PH6", title: "3-Style Scalloped, Arched and Straight Cornice Kit", w: 1466, h: 1500 },
    { asin: "B00PXDEN1Q", title: "Endurathane Traditional Crosshead Window Pediment, 33 Inch Bottom Width", w: 1200, h: 230 },
  ],
  idea12: [
    { asin: "B00YXGG3AI", title: "Cordless Light Filtering Mini Blind, 27 x 64 Inch, Pearl White", w: 1500, h: 1500 },
    { asin: "B0FWR6ZL7L", title: "Cordless Wood Blinds for Indoor Windows, 2 Inch Slats, Solid Wood", w: 1482, h: 1500 },
  ],
  idea13: [
    { asin: "B0CCD2S7ZQ", title: "LazBlinds 100% Blackout Roller Shades, 35 x 72 Inch, Stars", w: 1399, h: 1500 },
    { asin: "B089F5YJWS", title: "LETAU Printed Blackout Roller Window Shades, UV Protection, Monet Water Lilies", w: 1000, h: 1000 },
  ],
  idea14: [
    { asin: "B0CKSVD6Z8", title: "Lazzzy Velvet Curtains, Beige, 108 Inch Extra Long, Thermal Insulated", w: 1500, h: 1500 },
    { asin: "B0FD767VCB", title: "DONREN Neutral Gray Pinch Pleated Blackout Curtains with Hooks, 120 Inch", w: 1500, h: 1500 },
  ],
  idea15: [
    { asin: "B0CRF818J9", title: "Dwersty Frosted Glass Window Privacy Film, 29.5 x 78.74 Inch, Decorative", w: 1500, h: 1500 },
    { asin: "B01N20YR6B", title: "rabbitgoo Rainbow Window Privacy Film, Stained Glass Cling, 17.5 x 78.7 Inch", w: 1496, h: 1500 },
  ],
  idea16: [
    { asin: "B0GX5H8N4P", title: "No-Drill Cordless Bamboo Roman Shades, Natural, 21 x 48 Inch", w: 1500, h: 1500 },
    { asin: "B0FVWL7LFB", title: "LazBlinds No-Drill Bamboo Roman Shades, 22 x 48 Inch, Star Brown", w: 1200, h: 1500 },
  ],
  idea17: [
    { asin: "B0GHY5VYL1", title: "Scalloped Valance for Windows, Faux Linen, Short Kitchen Valance with Tassels", w: 1487, h: 1481 },
    { asin: "B0H293QTMG", title: "Cottage Core Cream Scalloped Linen Curtains, French Country Ruffle Farmhouse", w: 1500, h: 1500 },
  ],
  idea18: [
    { asin: "B09P1CV1DD", title: "Beige and Silvery 100% Blackout Geometric Pattern Curtains, 2 Panels, 96 Inches Long", w: 1500, h: 1500 },
    { asin: "B0FQV72C8Y", title: "Green and Beige Mid Century Geometric Blackout Curtains", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "kitchen-window-treatment-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "kitchen-window-treatment-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Roman Shades",
    paras: [
      "Roman shades carry a reliable, effortlessly chic quality without ever looking like they're trying too hard.",
      "They fold neatly when raised and lie flat when down, which keeps the whole window looking tidy either way.",
      "Neutral tones like white or beige keep the look clean and versatile, while a bold pattern turns the same shade into a genuine statement piece.",
    ],
    photo: photo("roman-shades.png", "Roman shades in a beautifully lit kitchen window", 683, 1024, "idea1"),
  },
  {
    n: "02",
    title: "Sheer Curtains",
    paras: [
      "For a kitchen that should feel open, breezy and full of light, sheer curtains do more of that work than almost any other option.",
      "They soften a window without actually blocking the light coming through it, keeping the whole room feeling airy.",
      "Paired with natural wood or white cabinetry, sheers add a genuinely light, charming quality to the space.",
    ],
    photo: photo("sheer-curtains.png", "Sheer curtains in a serene minimalist kitchen", 683, 1024, "idea2"),
  },
  {
    n: "03",
    title: "Bold Valances",
    paras: [
      "Valances are genuinely underrated &mdash; small, stylish, and still noticeable even though they only cover the top portion of a window.",
      "They add a finished look to a window without the commitment of a full curtain or drape setup.",
      "Matching a valance to the backsplash or countertop accents ties the whole kitchen together in a way that's easy to overlook until it's actually done.",
    ],
    photo: photo("bold-valances.png", "Bold valance styled in a charming farmhouse kitchen", 683, 1024, "idea3"),
  },
  {
    n: "04",
    title: "Plantation Shutters",
    paras: [
      "Plantation shutters bring a genuinely put-together, timeless energy to a kitchen window.",
      "They're neat, satisfying to adjust, and manage to look intentional in almost any style of home.",
      "Paired with natural textures like a jute rug or wooden stools nearby, they lean into a relaxed, almost coastal feeling.",
    ],
    photo: photo("plantation-shutters.png", "Plantation shutters in a warm, traditional kitchen", 683, 1024, "idea4"),
  },
  {
    n: "05",
    title: "Bamboo Shades",
    paras: [
      "For organic texture without going fully tropical, bamboo shades hit a genuinely good middle ground.",
      "They filter light softly while adding a natural, earthy material that most kitchens are otherwise missing.",
      "They suit a rustic or farmhouse kitchen especially well, particularly alongside a wooden dining table and a bit of greenery.",
    ],
    photo: photo("bamboo-shades.png", "Bamboo shades in a cozy rustic kitchen", 683, 1024, "idea5"),
  },
  {
    n: "06",
    title: "Layered Drapes",
    paras: [
      "Layering window treatments is one of the more underrated ways to add real coziness to a kitchen.",
      "Combining a sheer base layer with a heavier drape on top gives the window both softness and real structure.",
      "Keeping the palette cohesive &mdash; soft grays, warm taupes, or earthy greens &mdash; avoids visual chaos while still adding genuine depth.",
    ],
    photo: photo("layered-drapes.png", "Layered drapes in a stunning luxurious kitchen", 683, 1024, "idea6"),
  },
  {
    n: "07",
    title: "Minimalist Roller Shades",
    paras: [
      "Roller shades are clean, minimal, and quietly do the job without ever demanding attention.",
      "They raise and lower easily, which makes them genuinely practical for a kitchen window that gets used daily.",
      "A soft, neutral greige keeps the look modern while still reading as warm rather than sterile.",
    ],
    photo: photo("roller-shades.png", "Minimalist roller shades in a sleek, simple kitchen", 683, 1024, "idea7"),
  },
  {
    n: "08",
    title: "Stained Glass Panels",
    paras: [
      "For a window that functions as genuine art, stained glass is hard to beat.",
      "It transforms ordinary daylight into something colorful and considerably more interesting the moment it hits the glass.",
      "Paired with warm wood tones and a classic tile backsplash, it strikes an old-meets-new balance that reads as intentional rather than dated.",
    ],
    photo: photo("stained-glass.png", "Stained glass window panel in a charming vintage-inspired kitchen", 683, 1024, "idea8"),
  },
  {
    n: "09",
    title: "Cafe Curtains",
    paras: [
      "Cafe curtains remain a classic for good reason &mdash; covering just the bottom half of a window keeps privacy intact while still letting light pour in up top.",
      "They work especially well over a sink or a prep area where full privacy isn't actually needed.",
      "Paired with a small breakfast nook, they bring a genuinely charming, cafe-like feeling to an everyday morning routine.",
    ],
    photo: photo("cafe-curtains.png", "Cafe curtains in a delightful vintage-inspired kitchen", 683, 1024, "idea9"),
  },
  {
    n: "10",
    title: "Linen Drapes",
    paras: [
      "Soft linen drapes create that light, floaty, relaxed feeling that heavier fabrics simply can't replicate.",
      "They move gently with any passing breeze, which adds a subtle sense of life to the whole kitchen.",
      "Sticking to earthy tones like sand, sage, or cream keeps the look feeling genuinely elegant rather than casual.",
    ],
    photo: photo("linen-drapes.png", "Soft linen drapes in a serene Scandinavian-inspired kitchen", 683, 1024, "idea10"),
  },
  {
    n: "11",
    title: "Custom Cornices",
    paras: [
      "Cornices are an underrated finishing touch, adding real structure and style to a window in one single move.",
      "They sit at the top of the window frame, giving the whole treatment a tailored, considered look.",
      "A bold print makes a genuine statement, while a solid, matching color keeps the whole thing subtle and cohesive.",
    ],
    photo: photo("custom-cornices.png", "Custom cornice adding structure to a modern, sophisticated kitchen window", 683, 1024, "idea11"),
  },
  {
    n: "12",
    title: "Venetian Blinds",
    paras: [
      "Venetian blinds remain a practical standby &mdash; easy to adjust, genuinely versatile, and still stylish after decades of use.",
      "They control light with real precision, tilting to let in exactly as much as needed at any time of day.",
      "Wood blinds lean cozy, while aluminum ones suit a modern, industrial kitchen especially well.",
    ],
    photo: photo("venetian-blinds.png", "Venetian blinds in a modern, sleek kitchen", 683, 1024, "idea12"),
  },
  {
    n: "13",
    title: "Patterned Roller Blinds",
    paras: [
      "For anyone bored of plain neutrals, a patterned roller blind delivers genuine personality without much extra effort.",
      "The pattern becomes the window's whole focal point, which simplifies the rest of the room's styling decisions.",
      "Coordinating the pattern with the backsplash or countertop accents pulls the whole kitchen together.",
    ],
    photo: photo("patterned-roller.png", "Patterned roller blinds in a vibrant kitchen", 683, 1024, "idea13"),
  },
  {
    n: "14",
    title: "Floor-to-Ceiling Drapes",
    paras: [
      "For a kitchen with genuinely large windows or sliding doors, floor-to-ceiling drapes elevate the whole space considerably.",
      "The sheer scale of them adds real drama and makes the ceiling feel taller than it actually is.",
      "Jewel tones like emerald or sapphire read as rich and luxe, while a neutral keeps the same scale feeling timeless instead.",
    ],
    photo: photo("floor-ceiling-drapes.png", "Floor-to-ceiling drapes in an exquisite, luxurious kitchen", 683, 1024, "idea14"),
  },
  {
    n: "15",
    title: "Frosted Glass Film",
    paras: [
      "For anyone who'd rather skip curtains and blinds entirely, frosted glass film solves privacy with zero daily maintenance.",
      "It diffuses light beautifully while blocking a direct view in or out, all without adding any visible hardware.",
      "It works especially well on an awkward or high-use window where a curtain would just get in the way.",
    ],
    photo: photo("frosted-glass.png", "Frosted glass film on a window in a contemporary minimalist kitchen", 683, 1024, "idea15"),
  },
  {
    n: "16",
    title: "Woven Wood Shades",
    paras: [
      "Woven wood shades bring the same natural texture as bamboo, just with a bit more visual variety in the weave.",
      "The material adds real warmth to a kitchen window without feeling heavy or overly rustic.",
      "Paired with a light, airy curtain layered behind them, they create that dreamy, textured look a lot of kitchens are missing.",
    ],
    photo: photo("woven-wood.png", "Woven wood shades in a cozy bohemian-styled kitchen", 683, 1024, "idea16"),
  },
  {
    n: "17",
    title: "Scalloped Valances",
    paras: [
      "For a little playful charm, scalloped valances bring genuine personality to an otherwise plain window.",
      "The curved edge reads as quirky and sweet without feeling overly fussy or dated.",
      "Paired with cafe curtains underneath, they build toward maximum quaintness for a kitchen that leans cozy and vintage.",
    ],
    photo: photo("scalloped-valances.png", "Scalloped valance in a charming, nostalgic kitchen", 683, 1024, "idea17"),
  },
  {
    n: "18",
    title: "Geometric Curtain Panels",
    paras: [
      "For anyone ready to go a little bolder and more modern, geometric curtain panels bring real energy to a kitchen window.",
      "The pattern itself becomes the room's main visual interest, which means everything else can stay simple around it.",
      "Balancing the bold print with solid, neutral walls and simple accessories keeps the whole room feeling fresh rather than overwhelming.",
    ],
    photo: photo("geometric-panels.png", "Geometric curtain panels in a striking modern kitchen", 683, 1024, "idea18"),
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
<p>A kitchen deserves more design attention than just a great backsplash and shiny appliances. The right window treatment pulls the whole room together, adds genuine comfort, and can shift the entire mood of the space.</p>
<p>Whether the goal is layered texture, a pop of color, or something sleek and simple, there's a treatment here built for almost any kitchen window.</p>
${photo("hero.jpg", "Stunning Scandinavian-inspired kitchen with a beautifully styled window treatment", 1152, 768, "hero")}

<h2>18 Kitchen Window Treatment Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these treatments require replacing cabinets or counters to make a real difference. A single well-chosen window treatment can shift the whole feel of a kitchen on its own.</p>
<p>Roman shades, bamboo texture, or a flirty scalloped valance &mdash; there's no reason to settle for just one direction if more than one genuinely fits the space.</p>
`;

module.exports = { body };
