// Body content for "16 Easter Wreaths Worth Hanging on the Door". Photos
// carried over from the source article. The source scattered
// fabricated/misattributed quotes throughout (Leonardo da Vinci,
// Wassily Kandinsky, Coco Chanel, Maya Angelou, etc.) — cut entirely,
// not part of this site's voice. All 16 wreaths have a photo; none
// dropped. Condensed 3 padded intro/FAQ sections down to 1.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CSFK93VW", title: "Sggvecsy 20 Inch Easter Wreath with Colorful Eggs and Spring Flowers", w: 1492, h: 1500 },
    { asin: "B09CK5C6RH", title: "GP Life Adjustable Wreath Hanger for Front Door, 15 to 25 Inch", w: 1465, h: 1500 },
  ],
  intro: [
    { asin: "B0CGS17RNG", title: "14 Inch Grapevine Wreath Form, 2 Pack", w: 1035, h: 1048 },
    { asin: "B09WVCQN4R", title: "Green Floral Wire, 22 Gauge, for Wreaths and Crafts", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0G58QCBDH", title: "TEMPUS 20 Inch Easter Flocked Egg Wreath with Pastel Eggs, Handmade", w: 1456, h: 1500 },
    { asin: "B0GY877F6P", title: "Artificial Peony Flowers for Vase, 6 Pcs", w: 1489, h: 1500 },
  ],
  idea2: [
    { asin: "B0CSFLPJTV", title: "Sggvecsy 25 Inch Easter Bunny Shaped Flower Wreath with Berries and Daisies", w: 944, h: 1500 },
    { asin: "B09LQ8R5QJ", title: "Large Unfinished Wooden Easter Bunny Cutouts, 10 x 6 Inch, 8 Pieces", w: 1403, h: 1500 },
  ],
  idea3: [
    { asin: "B0G6FBRFH7", title: "24 Inch Eucalyptus Wreath for Front Door, Artificial Greenery with Olive Leaves", w: 1500, h: 1500 },
    { asin: "B0GF1V7ZSK", title: "Sfoni Speckled Easter Eggs, 24 Pcs, Pastel Vase and Bowl Fillers", w: 1497, h: 1500 },
  ],
  idea4: [
    { asin: "B0DKWS6RMT", title: "WreathDream Easter Egg Wreath with Colorful Eggs for Front Door", w: 1500, h: 1500 },
    { asin: "B0GHDTQ7HF", title: "Speckled Pastel Easter Eggs, 36 Pcs, Assorted 3 Sizes, Bowl and Vase Filler", w: 1334, h: 1227 },
  ],
  idea5: [
    { asin: "B0CVMBBJNH", title: "Primitives by Kathy Moss Wreath", w: 1431, h: 1500 },
    { asin: "B0DPSVB334", title: "Sukh Handmade Rattan Bird Nests, 2 Pcs, Artificial", w: 1500, h: 1398 },
  ],
  idea6: [
    { asin: "B0BJPGGHJT", title: "Cursive Wooden Monogram Letter S, 14 Inch, for Wall Decor and Wreaths", w: 777, h: 1296 },
    { asin: "B0FGJ2W5TD", title: "Cursive Wooden Monogram Letter H, 12 Inch, for Wall Decor and Wreaths", w: 604, h: 1468 },
  ],
  idea7: [
    { asin: "B0GK1YKQNS", title: "22 Inch Easter Eucalyptus Wreath with Carrot Decor, Spring Front Door", w: 965, h: 871 },
    { asin: "B0DXTVMHZ9", title: "Mini Easter Carrot Decorations, 5 Pcs, Natural Woven Carrots", w: 1500, h: 1048 },
  ],
  idea8: [
    { asin: "B0H66TND7V", title: "24 Inch Pampas Grass Wreath for Front Door, Cream Taupe with Brown Berries", w: 1500, h: 1500 },
    { asin: "B07GWJVD1F", title: "LWINGFLYER Speckled Mini Foam Eggs, 30 Pcs, Artificial Bird Eggs for Easter Crafts", w: 1038, h: 1036 },
  ],
  idea9: [
    { asin: "B0BHZ4Y96K", title: "U'Artlines 20 Inch Tulip Wreath for Front Door, Spring Summer Silk", w: 1500, h: 1466 },
    { asin: "B0DTH871JR", title: "Bailikang Artificial Tulips, 20 Pcs, Silk PU Flower Bouquet", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0FMSCJJZ3", title: "White Lace Trim Ribbon, 5 Yards, 2.36 Inch Wide, Floral Pattern", w: 1500, h: 1500 },
    { asin: "B0CC5PC2P8", title: "DuHouse Artificial Vintage Mini Roses, 24 Pcs, Dusty Rose", w: 1500, h: 1121 },
  ],
  idea11: [
    { asin: "B08VHXBQCT", title: "Large Metal Floral Hoop Wreath Rings, 14 Inch, 3 Pack, Gold Macrame Hoops", w: 1500, h: 1500 },
    { asin: "B07NLXNW5N", title: "Gold Metal Geometric Wreath Frame, 19 Inch", w: 1105, h: 1099 },
  ],
  idea12: [
    { asin: "B0GCFPZ2B3", title: "26 Inch Purple Lavender and Eucalyptus Wreath, Farmhouse Front Door Decor", w: 1424, h: 1500 },
    { asin: "B07RNHY6LX", title: "Artificial Lavender Stems with Silk Flocked Flowers, Home and Wedding Decor", w: 1499, h: 1311 },
  ],
  idea13: [
    { asin: "B0G6TJG14J", title: "21 Inch Artificial White Hydrangea Wreath for Front Door", w: 1500, h: 1500 },
    { asin: "B07QPKVC1J", title: "Kimura's Cabin Artificial White Hydrangea Flowers, 6 Pcs, Silk", w: 1387, h: 1500 },
  ],
  idea14: [
    { asin: "B0FDKN3J9V", title: "LaRibbons Red Gingham Wired Ribbon, 1.5 Inch x 10 Yards, Red and White Plaid", w: 1500, h: 1491 },
    { asin: "B0DWWKVZ39", title: "20 Inch Artificial Boxwood Wreath for Front Door, UV Resistant Outdoor", w: 1481, h: 1500 },
  ],
  idea15: [
    { asin: "B0DYV2SHLT", title: "Easter Bunny Wire Wreath Forms, 16 Inch, 6 Pcs, for DIY Crafts", w: 1487, h: 1492 },
    { asin: "B0G8KSXL66", title: "FAVOMOTO Blank Easter Wooden Bunny Cutouts, 20 Inch", w: 470, h: 954 },
  ],
  idea16: [
    { asin: "B0GL7NR1DY", title: "Betylifoy 22 Inch White Dahlia and Rose Floral Wreath for Front Door", w: 1500, h: 1478 },
    { asin: "B0DT9H5C9Y", title: "Large Gold Easter Eggs with Tray, Vintage Resin Table Decor", w: 1343, h: 1251 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "easter-wreath-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "easter-wreath-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "easter-wreath-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Classic Pastel Floral",
    paras: [
      "If Easter had one signature wreath, this would be it &mdash; a grapevine base layered with soft pink peonies, white hydrangeas, and a hint of lavender.",
      "A little greenery tucked in and a small bow in blush or cream round it out without ever feeling overdone.",
      "It works because it's genuinely timeless, and it suits a traditional home especially well &mdash; welcoming without trying too hard to get there.",
    ],
    photo: pinPhoto("classic-pastel.jpg", "Classic pastel floral Easter wreath with pink peonies and white hydrangeas", 683, 1024, "https://www.pinterest.com/pin/1196337405220194/", "Classic Pastel Easter Wreath", "idea1"),
  },
  {
    n: "02",
    title: "Farmhouse Bunny",
    paras: [
      "This one leans fully into cozy charm. A grapevine or faux moss base, a wooden bunny silhouette in the center, and burlap ribbon wrapped loosely around one side deliver instant rustic warmth.",
      "It's a strong fit for anyone whose home already leans toward shiplap and neutral throw pillows &mdash; the aesthetic carries straight through to the front door.",
      "Nothing about it tries too hard. The charm comes from how unfussy the whole thing is.",
    ],
    photo: pinPhoto("farmhouse-bunny.jpg", "Farmhouse-style Easter wreath with a wooden bunny silhouette and burlap ribbon", 574, 1024, "https://www.pinterest.com/pin/6614730699249032/", "Farmhouse Bunny Easter Wreath", "idea2"),
  },
  {
    n: "03",
    title: "Minimalist Greenery",
    paras: [
      "Not everyone wants a bunny explosion on their front door. This wreath keeps it deliberately simple &mdash; eucalyptus, olive branches, or boxwood, with a tiny cluster of white eggs for a subtle Easter nod.",
      "That's genuinely the whole formula. No extra embellishment required.",
      "It suits a black front door especially well &mdash; the contrast between the dark background and the muted greenery looks stunning without any color at all.",
    ],
    photo: pinPhoto("minimalist-greenery.jpg", "Minimalist greenery Easter wreath with eucalyptus and white eggs", 582, 873, "https://www.pinterest.com/pin/192458584071546987/", "Minimalist Greenery Easter Wreath", "idea3"),
  },
  {
    n: "04",
    title: "Whimsical Egg Explosion",
    paras: [
      "For anyone ready to go fully bold, this wreath covers the entire base in colorful speckled eggs &mdash; pink, blue, yellow, mint &mdash; with florals peeking through for depth.",
      "The effect reads as playful and genuinely joyful, the kind of wreath that makes people smile walking up to the door.",
      "The one rule worth keeping in mind: controlled chaos looks fun, but overcrowding the base tips it into looking messy instead of festive.",
    ],
    photo: pinPhoto("egg-explosion.jpg", "Whimsical Easter wreath covered in colorful speckled eggs", 576, 1024, "https://www.pinterest.com/pin/552887291772082425/", "Whimsical Egg Explosion Wreath", "idea4"),
  },
  {
    n: "05",
    title: "Rustic Moss and Twig",
    paras: [
      "This one feels like it was found in a countryside cottage rather than built from a craft store run &mdash; natural twigs, faux moss, a few tiny white flowers, maybe a small bird's nest tucked in.",
      "The overall effect reads as genuinely organic and earthy, nothing about it feels manufactured.",
      "It blends especially well against a stone exterior, where the natural textures echo the materials already on the house.",
    ],
    photo: pinPhoto("rustic-moss-twig.jpg", "Rustic Easter wreath made from natural twigs, moss and a small bird's nest", 768, 1024, "https://www.pinterest.com/pin/152066924914238006/", "Rustic Moss and Twig Wreath", "idea5"),
  },
  {
    n: "06",
    title: "Monogram",
    paras: [
      "For something more personal, a monogram wreath adds an initial right at the center of the design.",
      "Florals wrap the outer edge, and a wooden or metal monogram letter anchors the middle &mdash; simple, custom, and immediately eye-catching.",
      "This style consistently earns compliments. People respond to the personal touch, and it reads as genuinely intentional rather than generic.",
    ],
    photo: pinPhoto("monogram.jpg", "Monogram Easter wreath with a wooden initial surrounded by florals", 736, 736, "https://www.pinterest.com/pin/523895369173852247/", "Monogram Easter Wreath", "idea6"),
  },
  {
    n: "07",
    title: "Carrot Patch",
    paras: [
      "Yes, carrots &mdash; and somehow it works. Faux greenery layered with small decorative carrots tucked throughout, finished with a gingham bow for charm.",
      "It sounds a little silly on paper. In practice, it reads as genuinely adorable.",
      "This one's a strong pick for a household with kids &mdash; it tends to get noticed and smiled at more than almost any other style on this list.",
    ],
    photo: pinPhoto("carrot-patch.jpg", "Carrot patch Easter wreath with decorative carrots and a gingham bow", 931, 1024, "https://www.pinterest.com/pin/250442429274888830/", "Carrot Patch Easter Wreath", "idea7"),
  },
  {
    n: "08",
    title: "Elegant Neutral",
    paras: [
      "For anyone who prefers understated decor, this wreath wins without much competition. Ivory florals, soft beige ribbon, muted greenery, and tiny speckled eggs in cream tones.",
      "The whole effect reads as refined rather than seasonal-specific, which means it can stay up a little longer without feeling out of place.",
      "It pairs especially well with gold door hardware, where the warm metal tones tie the whole look together.",
    ],
    photo: pinPhoto("elegant-neutral.jpg", "Elegant neutral Easter wreath with ivory florals and cream speckled eggs", 450, 450, "https://www.pinterest.com/pin/616008055318843449/", "Elegant Neutral Easter Wreath", "idea8"),
  },
  {
    n: "09",
    title: "Tulip-Filled Spring Garden",
    paras: [
      "Nothing announces spring quite as loudly as tulips. Vibrant faux tulips in soft pink, coral, yellow and white, layered thickly around a grapevine base, let the florals take over entirely.",
      "Everything else around them stays minimal on purpose &mdash; the tulips are the whole point.",
      "Investing in genuinely good faux tulips pays off here. Cheap versions tend to droop and look sad within a season, while quality ones reuse for years.",
    ],
    photo: pinPhoto("tulip-garden.jpg", "Tulip-filled spring Easter wreath with vibrant pink, coral and yellow tulips", 575, 1024, "https://www.pinterest.com/pin/1074741898592903779/", "Tulip-Filled Spring Easter Wreath", "idea9"),
  },
  {
    n: "10",
    title: "Vintage Lace and Floral",
    paras: [
      "For anyone drawn to soft, romantic decor, this wreath feels pulled straight out of a cottage novel &mdash; delicate lace ribbon wrapped around the base, tucked with muted roses and baby's breath.",
      "A tiny fabric bow finishes the softness without adding any extra weight to the design.",
      "It suits a white or light gray door especially well, reading as dreamy without ever looking fragile.",
    ],
    photo: pinPhoto("vintage-lace.jpg", "Vintage lace and floral Easter wreath with muted roses and baby's breath", 574, 1024, "https://www.pinterest.com/pin/309059593199554929/", "Vintage Lace Easter Wreath", "idea10"),
  },
  {
    n: "11",
    title: "Bold Modern Geometric",
    paras: [
      "Not everyone wants rustic twigs and bunny silhouettes. For clean lines instead, a thin metal geometric frame makes for a genuinely modern base.",
      "Decorating only one side with florals and a few minimalist eggs keeps the geometry itself as the real focal point.",
      "It suits a matte black door especially well, reading as intentional and designer-level rather than seasonal clutter.",
    ],
    photo: pinPhoto("bold-modern-geometric.jpg", "Bold modern Easter wreath with a geometric metal frame and minimal florals", 574, 1024, "https://www.pinterest.com/pin/318348267431333401/", "Bold Modern Geometric Wreath", "idea11"),
  },
  {
    n: "12",
    title: "Lavender Field",
    paras: [
      "Lavender brings a calm elegance that almost nothing else on this list matches. Faux lavender stems layered with soft greenery and tiny white blossoms, kept mostly to purple and green.",
      "The overall feeling is genuinely serene &mdash; a strong fit for an entryway console just as much as a front door.",
      "Purple tones have a way of elevating decor almost instantly, even in small doses like this.",
    ],
    photo: pinPhoto("lavender-field.jpg", "Lavender field Easter wreath with faux lavender stems and white blossoms", 768, 1024, "https://www.pinterest.com/pin/164311086401741962/", "Lavender Field Easter Wreath", "idea12"),
  },
  {
    n: "13",
    title: "Speckled Egg and Hydrangea",
    paras: [
      "Hydrangeas always read as a little luxurious on their own. Paired with speckled eggs, the combination becomes pure spring.",
      "Large hydrangea blooms in white or pale blue, with speckled eggs scattered evenly around the base, add real texture.",
      "The hydrangeas fill space beautifully on their own, which means the wreath makes a real impact without ever feeling overcrowded.",
    ],
    photo: pinPhoto("speckled-egg-hydrangea.jpg", "Speckled egg and hydrangea Easter wreath with large white blooms", 683, 1024, "https://www.pinterest.com/pin/39265828000973348/", "Speckled Egg and Hydrangea Wreath", "idea13"),
  },
  {
    n: "14",
    title: "Gingham Ribbon",
    paras: [
      "Sometimes the ribbon really does make the whole wreath. A simple greenery base, topped with an oversized gingham bow in pastel pink, blue or yellow, left to cascade slightly down one side.",
      "The greenery base can stay the same year to year while the ribbon changes &mdash; a small, smart way to refresh the look without starting over.",
      "It's an easy way to save money on future seasonal swaps while still getting a genuinely new look each time.",
    ],
    photo: pinPhoto("gingham-ribbon.jpg", "Gingham ribbon Easter wreath with an oversized pastel bow", 683, 1024, "https://www.pinterest.com/pin/795518721724003188/", "Gingham Ribbon Easter Wreath", "idea14"),
  },
  {
    n: "15",
    title: "Bunny Silhouette Statement",
    paras: [
      "This one makes its statement through restraint rather than volume. A large wooden bunny cutout anchors the center, surrounded lightly with florals and greenery instead of filling the whole base.",
      "The bunny becomes the art itself, rather than one decoration lost among many others.",
      "It's a strong pick for anyone who wants something clearly Easter-themed without any risk of visual clutter.",
    ],
    photo: pinPhoto("bunny-silhouette.jpg", "Bunny silhouette statement Easter wreath with a large wooden cutout", 768, 1024, "https://www.pinterest.com/pin/14918242506165748/", "Bunny Silhouette Statement Wreath", "idea15"),
  },
  {
    n: "16",
    title: "Luxe Gold and White",
    paras: [
      "For something more elevated to close the list, this wreath combines white florals and soft greenery with subtle gold accents &mdash; a metallic egg detail here, a thin gold frame base there.",
      "Gold catches light beautifully, elevating the entire design without ever screaming for attention.",
      "Keeping the gold refined rather than flashy is what separates this from looking overdone &mdash; restraint is what makes it read as genuinely expensive.",
    ],
    photo: pinPhoto("luxe-gold-white.jpg", "Luxe gold and white Easter wreath with metallic accents", 482, 589, "https://www.pinterest.com/pin/7881368095484743/", "Luxe Gold and White Easter Wreath", "idea16"),
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
<p>The front door sets the mood before anyone even rings the bell, and an Easter wreath does more of that work than most people give it credit for. It shows attention to detail, adds real warmth, and makes a home feel noticeably more welcomed into the season.</p>
<p>What separates a genuinely polished wreath from a cluttered one comes down to a few things: real color harmony instead of just grabbing every pastel in sight, some actual texture to add depth, and a clear focal point that keeps the whole design from feeling scattered.</p>
${photo("hero.jpg", "Pinterest-worthy Easter wreath hanging on a front door", 575, 422, "hero")}

<h2>What Makes a Wreath Actually Pinterest-Worthy</h2>
<p>Color harmony, real texture, and one clear focal point are the three things that separate a styled wreath from a cluttered one. Skip any of those and the design starts to feel unfinished no matter how much is actually on it.</p>
${pinPhoto("intro-matters.jpg", "Beautifully styled Easter wreath hanging on a front door", 786, 900, "https://www.pinterest.com/pin/28710516370888555/", "Pinterest-Worthy Easter Wreath", "intro")}

<h2>16 Easter Wreaths Worth Hanging</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>A Couple of Styling Basics</h2>
<p>Hanging height matters more than people expect &mdash; centering the wreath slightly above the door's midpoint, roughly at eye level, reads as intentional. Too low looks awkward; too high looks disconnected from the rest of the door. Layering in a few other seasonal touches nearby, rather than letting the wreath float completely alone, helps it anchor the whole entryway instead of just sitting there as a single accent.</p>
<p>Protecting it from direct sunlight keeps the colors from fading fast, especially on a porch that gets real afternoon sun &mdash; UV-protected florals are worth the extra cost if that's the case. And storing it properly after the season, labeled clearly, saves real frustration the next time it comes back out of a box.</p>

<h2>Final Thoughts</h2>
<p>Sixteen wreaths, every style from rustic twigs to gold-accented luxe, and all of them capable of turning a forgettable front door into something people actually notice walking up.</p>
<p>Whatever direction feels right &mdash; bold with tulips and eggs, or elegant with gold and ivory &mdash; choosing it with intention is what makes the difference. A door that looks this considered tends to make the whole house feel a little more welcoming.</p>
`;

module.exports = { body };
