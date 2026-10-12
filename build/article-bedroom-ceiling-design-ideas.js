// Body content for "12 Bedroom Ceiling Ideas That Make Your Room Feel
// Finished". Photos carried over from the source article. The source's
// "Skylight" and "Geometric" photos were swapped relative to their
// headings — the file captioned for Skylight actually showed a hexagonal
// paneled ceiling, and the file captioned for Geometric actually showed a
// slanted skylight window with a starry sky view — corrected here to match
// what each photo actually depicts.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0BXR3QH8V", title: "Dundee Deco Black Gold Faux Hexagon Mosaic PVC 3D Wall Panel, 3.2 ft X 1.6 ft", w: 1488, h: 1467 },
    { asin: "B0BJ7MMHPK", title: "Walnut Hexagons, 3D Hexagon Wall Panels, Wooden Hexagon, Honeycomb Wall cover", w: 1125, h: 1500 },
  ],
  coffered: [
    { asin: "B00Z8DBOTA", title: "uDecor CM-1001 Crown Molding, 5-1/2\" Durable Polyurethane, Easy Installation", w: 964, h: 543 },
    { asin: "B06ZY8G35J", title: "Orac Decor C307, Purotouch High Density Polyurethane Foam Crown Moulding, Primed White", w: 1500, h: 1096 },
  ],
  tray: [
    { asin: "B07RSPG86B", title: "LED Strip Lights 12V 50ft 3000K Dimmable Warm White Strip Lights", w: 1457, h: 1480 },
    { asin: "B081ZGM3RW", title: "LED Flat Strip Lights, 50 ft 2-in-1 Warm White &amp; Cool White Flexible Dimmable Lighting", w: 1500, h: 1468 },
  ],
  beam: [
    { asin: "B09ZJX4NKZ", title: "Faux Wood Beam, 48\" Long, Wood Look, XPS Foam Material, Easy Installation, 4\"x6\", Walnut", w: 1321, h: 1500 },
    { asin: "B087YG4PWJ", title: "Timberthane Hand Hewn Faux Wood Beam, 3-Sided, U-Beam, 4\"W x 4\"H x 96\"L, Aged Finish", w: 1200, h: 703 },
  ],
  starry: [
    { asin: "B09P1J1XCB", title: "Galaxy Projector for Bedroom, Star Projector Galaxy Light, Northern Lights Projector", w: 1500, h: 1500 },
    { asin: "B097SWV5DC", title: "Smart Galaxy Star Projector, LED Nebula Ceiling Night Light with App &amp; Voice Control", w: 1500, h: 1197 },
  ],
  vaulted: [
    { asin: "B0B12KMF5B", title: "Real Wood Wall Planks, 5\" White Shiplap Panel, Peel and Stick, 10 Pack", w: 1500, h: 1405 },
    { asin: "B075G1KZ82", title: "WoodyWalls Peel and Stick Wood Planks, Whitewash Shiplap Wall Panels", w: 1500, h: 1005 },
  ],
  mirrored: [
    { asin: "B0D91SZDFG", title: "8 Pack Acrylic Mirror Tiles, 12 x 12 Inch Self-Adhesive Flexible Mirror Sheets", w: 1500, h: 1467 },
    { asin: "B07FCMGHMY", title: "Bestier Chrome Modern Crystal Square Raindrop Chandelier Lighting Flush Mount LED Ceiling", w: 1500, h: 1500 },
  ],
  wallpapered: [
    { asin: "B0D1R1NXYL", title: "VEELIKE Pink Floral Peel and Stick Wallpaper Vintage Victorian Floral Wallpaper for Bedroom", w: 1500, h: 1500 },
    { asin: "B0BM7KJ56G", title: "Linentalks Sheer Canopy Bed Curtains for King, Queen, Full and Twin Bed", w: 1200, h: 1200 },
  ],
  painted: [
    { asin: "B07C31JVS2", title: "Rust-Oleum Simply Home Interior Wall Paint 332145, Eggshell Smoked Navy, 1 Gallon", w: 1147, h: 1200 },
    { asin: "B0BPYBCSJL", title: "Paint Roller Kit with 6FT Extension Pole, 3 Roller Covers, for Ceiling Painting", w: 876, h: 994 },
  ],
  tin: [
    { asin: "B08SJF68MT", title: "TD04 Antique Copper Faux Tin Glue-Up Ceiling Tiles, Pack of 10, 2'x2'", w: 1436, h: 1437 },
    { asin: "B07C8G7D89", title: "#109 Decorative Faux Tin PVC Ceiling Tiles Panels, 2' x 2' Glue Up, Pack of 12", w: 1200, h: 1200 },
  ],
  fabric: [
    { asin: "B0HC9MT6SM", title: "Canopy Bed Curtains, Sheer Canopy Scarf &amp; Four Poster Bed Drapes", w: 1254, h: 1254 },
    { asin: "B0D8VM7YWT", title: "Fairy Curtain Lights for Bedroom, 9.8x9.8 Ft Fairy Lights Curtain with Remote", w: 1500, h: 1500 },
  ],
  geometric: [
    { asin: "B0CQL2HYJW", title: "STICKGOO Hexagon 3D Wall Panels for Interior Wall Decor", w: 1500, h: 1481 },
    { asin: "B0CPS3KY85", title: "Commomy 10 Pcs Hexagon Peel and Stick Tiles 11.8\"X11.8\" Matte Ultra-Light &amp; Thin PVC 3D", w: 1456, h: 1443 },
  ],
  skylight: [
    { asin: "B0BZZ5CWJG", title: "Blackout Skylight Window Blinds, Skylight Shades Cordless Cellular Shades Room", w: 1500, h: 1500 },
    { asin: "B0CG1D4GLW", title: "Skylight Shades Cordless Cellular Blinds 100% Blackout Honeycomb Shade for Ceiling Roof", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bedroom-ceiling-design-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bedroom-ceiling-design-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Coffered Ceiling",
    paras: [
      "If you want a genuine touch of class, a coffered ceiling delivers it reliably. The recessed, grid-like panels bring a classic, orderly structure that reads as elegant without trying too hard.",
      "It's a traditional choice, but it works in more settings than you'd expect &mdash; paint the panels a neutral tone for something subtle, or go bold with contrasting color for a real statement.",
      "Add warm lighting along the panel edges, like the gold trim shown here, and the whole ceiling becomes a quiet source of ambiance rather than just architecture.",
    ],
    photo: photo("coffered.png", "Gold-trimmed coffered ceiling with recessed square panels and warm under-panel lighting above a bed with layered neutral pillows", 683, 1024, "coffered"),
  },
  {
    n: "02",
    title: "Tray Ceiling",
    paras: [
      "A tray ceiling adds real depth and dimension through its recessed center, drawing the eye upward and making the whole room feel more spacious than it actually is.",
      "It's a timeless choice with genuine architectural charm, and it photographs just as well in a minimalist space as a traditional one.",
      "Keep it neutral for something soft and airy, or lean into dramatic contrast with dark tones and hidden LED strip lighting for something closer to a modern showpiece.",
    ],
    photo: photo("tray.png", "Dramatic angular dark tray ceiling with white LED edge lighting above a sunken platform bed in a minimalist bedroom", 683, 1024, "tray"),
  },
  {
    n: "03",
    title: "Wooden Beam Ceiling",
    paras: [
      "Exposed wooden beams bring warmth and character in a way few other ceiling choices can match. The rustic charm and natural texture create a genuinely cozy, lived-in feeling overhead.",
      "The depth comes from the structure itself &mdash; beams crossing at different heights and angles create visual interest without any extra decoration needed.",
      "Stain the wood in a rich natural tone for a classic rustic look, or paint it in a contrasting color if you want the same architectural interest with a more modern finish.",
    ],
    photo: photo("wooden-beam.png", "Rustic attic bedroom with exposed crossing wood ceiling beams, a stone fireplace and a bed layered with knit throws", 683, 1024, "beam"),
  },
  {
    n: "04",
    title: "Starry Night Ceiling",
    paras: [
      "For something genuinely dreamy, a starry night ceiling turns an ordinary bedroom into a quiet celestial escape. Twinkling LED lights or glow-in-the-dark paint mimic a night sky directly overhead.",
      "It's less about decoration and more about atmosphere &mdash; the effect makes a room feel peaceful and a little otherworldly the moment the lights come on.",
      "Keep it soft and subtle for a calming glow, or go further with vibrant constellation patterns and galaxy-inspired color for something more dramatic.",
    ],
    photo: photo("starry-night.png", "Cozy bed nook with a twinkling star-light ceiling installation glowing purple light across pillows and a draped throw", 683, 1024, "starry"),
  },
  {
    n: "05",
    title: "Vaulted Ceiling",
    paras: [
      "A vaulted ceiling brings genuine grandeur and openness through its high, angled structure. The shape alone draws the eye upward and makes a room feel noticeably more spacious.",
      "It's an architectural feature that works across styles &mdash; exposed beams and natural wood lean rustic, while clean white paneling pushes it toward something brighter and more coastal.",
      "Keep it light and neutral for an airy feel, like the all-white version here with built-in shelving tucked beneath the slope, or darken the tones for more drama and depth.",
    ],
    photo: photo("vaulted.png", "Tall white vaulted bedroom ceiling with exposed beams and a peaked skylight window above built-in bookshelves and a large window", 683, 1024, "vaulted"),
  },
  {
    n: "06",
    title: "Mirrored Ceiling",
    paras: [
      "A mirrored ceiling is an unapologetic move toward luxury. The reflective surface bounces natural light around the room and creates the illusion of far more space than you actually have.",
      "It brings a modern, glamorous edge, whether you go with a full mirror finish or just a few mirrored panels set into a more traditional ceiling design.",
      "Keep it minimal for something soft and upscale, or go bold with tinted or patterned mirror panels, like the gold-framed version shown here under a crystal chandelier, for a genuinely dramatic statement.",
    ],
    photo: photo("mirrored.png", "Ornate gold-framed mirrored ceiling panel reflecting a crystal chandelier above a luxurious green velvet tufted bed", 683, 1024, "mirrored"),
  },
  {
    n: "07",
    title: "Wallpapered Ceiling",
    paras: [
      "A wallpapered ceiling adds personality fast, with essentially endless options for pattern, texture, and color to choose from.",
      "It brings genuine depth and charm overhead, turning the ceiling into an actual focal point rather than an afterthought above the room.",
      "A soft floral print, like the one shown here draped with sheer canopy curtains, leans romantic and refined. A bold geometric pattern pushes the same idea in a more graphic direction.",
    ],
    photo: photo("wallpapered.png", "Pink floral wallpapered alcove ceiling above a canopy bed with sheer white curtains draped from a frame", 683, 1024, "wallpapered"),
  },
  {
    n: "08",
    title: "Painted Ceiling",
    paras: [
      "Sometimes the simplest move makes the biggest impact. A painted ceiling highlights color and character with almost no structural effort at all.",
      "The right shade shifts the entire mood of the room &mdash; dramatic, soothing, or warm, depending entirely on what you choose. It's a surprisingly powerful lever for how a bedroom actually feels.",
      "Go deep and saturated for drama and refinement, like the navy angular ceiling shown here, or keep it light for something airier and more relaxed.",
    ],
    photo: photo("painted.png", "Dramatic navy blue painted angular ceiling meeting a matching navy accent wall above a teal velvet tufted headboard", 683, 1024, "painted"),
  },
  {
    n: "09",
    title: "Tin Tile Ceiling",
    paras: [
      "A tin tile ceiling brings genuine historical character and intricate detail that's hard to replicate with anything modern. The embossed pattern and metallic finish catch light in a way flat ceilings simply can't.",
      "It's a timeless choice that adds texture and a sense of craftsmanship, giving the whole room a smarter, more considered feel.",
      "Choose a warm copper or traditional silver finish for something classic, or go with a bold patina for a more dramatic, aged-metal statement overhead.",
    ],
    photo: photo("tin-tile.png", "Vintage embossed copper tin tile ceiling above a cottage-style bedroom with a white antique bed and floral tapestry", 683, 1024, "tin"),
  },
  {
    n: "10",
    title: "Fabric-Draped Ceiling",
    paras: [
      "For a romantic, softened feel, a fabric-draped ceiling is hard to beat. Flowing fabric cascading down from a central point brings texture, warmth, and a genuine sense of elegance.",
      "It creates a cozy, almost cocooned atmosphere &mdash; the kind of detail that makes a bedroom feel private and a little indulgent.",
      "Pure white or cream fabric leans airy and celestial, like the canopy version shown here woven through with fairy lights. Richer, more saturated textiles push the same idea toward something more dramatic.",
    ],
    photo: photo("fabric-draped.png", "Four-poster canopy bed with flowing sheer fabric draped from a central point and woven with warm fairy lights", 683, 1024, "fabric"),
  },
  {
    n: "11",
    title: "Geometric Ceiling",
    paras: [
      "A geometric ceiling gives a bedroom a strong, contemporary edge. Striking patterns and disciplined lines create real depth and turn the ceiling into an actual architectural statement.",
      "Angular panels, stacked forms, or complex molding all push the same idea &mdash; dimension and artistic structure where a flat ceiling would otherwise do nothing.",
      "A monochromatic palette, like the black-and-white hexagonal panels shown here, keeps it classy. Contrasting colors instead draw more direct attention to the pattern itself.",
    ],
    photo: photo("skylight.png", "Black and white hexagonal three-dimensional paneled geometric ceiling above a modern platform bed on a raised step", 683, 1024, "geometric"),
  },
  {
    n: "12",
    title: "Skylight Ceiling",
    paras: [
      "If you're fortunate enough to have one, a skylight does more for a top-floor bedroom than almost any other ceiling choice. It floods the room with natural light during the day and opens up genuine views of the stars at night.",
      "It blends the comfort of an indoor space with the beauty of what's actually outside, turning the bedroom into a quieter, more connected kind of retreat.",
      "Install blackout shades if you want control over the light, so a clear night view doesn't come at the cost of actually sleeping through it.",
    ],
    photo: photo("geometric.png", "Slanted skylight window showing a starry night sky and colorful sunset above a low bed surrounded by potted plants", 683, 1024, "skylight"),
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
<p>In a bedroom, the ceiling is the one surface almost everyone forgets to think about. It's easy to overlook in the bigger architectural picture, but a well-designed ceiling genuinely adds depth, character, and flair to a space that would otherwise just be four walls and a lid.</p>
<p>Whether your taste runs simple or elaborate, these twelve ceiling ideas are worth considering for your next bedroom refresh.</p>
${photo("hero.jpg", "Modern honeycomb-patterned ceiling installation reflected in a mirrored wardrobe above a white platform bed with framed art", 1152, 768, "hero")}

<h2>12 Bedroom Ceiling Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Your bedroom ceiling is a blank canvas, ready and waiting. Whether your taste leans traditional, rustic, or modern, these twelve ideas can help you build a room that feels both elegant and genuinely inviting.</p>
<p>Don't hesitate to think a little creatively here. Your perfect bedroom might just be one ceiling away from feeling completely finished.</p>
`;

module.exports = { body };
