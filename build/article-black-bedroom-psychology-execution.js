// Body content for "Why Black Bedrooms Work (and How to Actually
// Execute One)". Guide format, condensed from a long source (21
// content sections, many redundant toward the end — styling tips,
// styles to try, budget tips, maintenance, final touch, conclusion —
// collapsed into a shorter wrap-up). This source expands "Black
// Walls" and "Black Trim" past their brief mentions as 2 of 20 ideas
// in the existing moody-dark-bedroom article, so this rewrite leans
// into the psychology and execution principles behind committing to
// black specifically, which the broader moody-dark article doesn't
// cover. Several closing sections had no source photo, kept
// text-only. Source photos have no Pinterest links, so none carry
// credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0GSDZGHWB", title: "Black Velvet Throw Pillow Covers Decorative Pillow Cases 18x18 Set of 2", w: 1500, h: 742 },
    { asin: "B0CCGTPKPF", title: "Chunky Knit Chenille Throw Blanket, Cream", w: 1500, h: 1500 },
  ],
  intro: [
    { asin: "B075XLQQ1S", title: "MIULEE Velvet Throw Pillow Covers 18x18 Inch Pack of 2 Black", w: 1500, h: 1500 },
    { asin: "B07D54CM8F", title: "Donna Sharp Chunky Knit Cream Throw Blanket, 50\" x 40\"", w: 1500, h: 1148 },
  ],
  psychology: [
    { asin: "B0D2T1H56T", title: "CUCRAF Black Blackout Curtains 84 inch Length 2 Panels Set", w: 1500, h: 1500 },
    { asin: "B0DZH7TSLY", title: "Black Blackout Curtains 84 Inch Length 2 Panels Set", w: 1500, h: 1500 },
  ],
  myths: [
    { asin: "B0H5QDD8XT", title: "5 Pcs Paint Sample Boards 12\" x 9\" Paint Color Test Panels", w: 1500, h: 1476 },
    { asin: "B001GUA846", title: "Rustins Quick Dry Matt Black Paint 250ml, 8.5 Fl. Oz", w: 1300, h: 1462 },
  ],
  rightShade: [
    { asin: "B079535PND", title: "THE ONE All-In-One Paint &amp; Primer, Black Matte, 33.8 Fl Oz/1 Liter, 1 Coat Formula", w: 1290, h: 1236 },
    { asin: "B0F1C6JCK5", title: "ALL-IN-ONE Paint, Gallon Bundle, Iron Gate", w: 720, h: 879 },
  ],
  lighting: [
    { asin: "B085L2JJXQ", title: "Bedside Table Lamps Set of 2 with Black Base and Fabric Shades", w: 1000, h: 1000 },
    { asin: "B0CKQKBJ9V", title: "25\" Modern Industrial Table Lamps Set of 2 with USB Charging Ports", w: 1500, h: 1500 },
  ],
  textures: [
    { asin: "B076LWHV2Z", title: "MIULEE Velvet Throw Pillow Covers 18x18 Inch Pack of 2 Dark Blue", w: 1184, h: 1162 },
    { asin: "B0BQ6DVZCB", title: "WESHIONGOO Chunky Knit Blanket Throw 40\"×40\" Cream White", w: 1500, h: 1500 },
  ],
  contrast: [
    { asin: "B0FDGMP4TH", title: "Bedsure PureWoven 100% Organic Cotton Queen Duvet Cover Set, Linen", w: 1500, h: 1500 },
    { asin: "B07BDTVN4W", title: "Glidden Interior Paint + Primer: White/Off White, One Coat, Eggshell, 1 Quart", w: 1500, h: 1470 },
  ],
  furniture: [
    { asin: "B0GQ9N4PT1", title: "Fultyle Walnut Nightstand, Fluted Bedside Table with Drawer and Open Shelf", w: 930, h: 1500 },
    { asin: "B0FWJ8NKF1", title: "Solid Wood Nightstand with 2 Drawers, Walnut Mid Century Modern Nightstand", w: 1500, h: 1500 },
  ],
  bedding: [
    { asin: "B0F1Y1KXWL", title: "EMME Muslin Cotton Duvet Cover Set Linen Like Cream White Queen", w: 1500, h: 1500 },
    { asin: "B0DPHG863M", title: "Cream Duvet Cover Queen Size 100% Sandwashed Cotton", w: 1500, h: 1500 },
  ],
  accents: [
    { asin: "B0G2LYY4TB", title: "Large Framed Neutral Black and Beige Abstract Wall Art Set of 2, 24x36 In", w: 1500, h: 1500 },
    { asin: "B07CVGRQ8D", title: "GIGIZAZA Gold Velvet Pillow Covers 18x18 Decorative Pillows Pack of 2", w: 1500, h: 1500 },
  ],
  warmth: [
    { asin: "B017DC33AQ", title: "Becky 24 3/4\" High Table Lamp Set of 2 Gold Antique Brass Metal Traditional", w: 1221, h: 1500 },
    { asin: "B07RLM2N2W", title: "JONATHAN Y Duncan Table Lamp 19.5\" Glass and Metal, Brass Gold and Clear", w: 688, h: 1500 },
  ],
  mirrors: [
    { asin: "B0CTQ366F2", title: "Besdomus Vintage Arched Gold Mirror, 40\"x29\" Antique Brass Finish", w: 1500, h: 1500 },
    { asin: "B0DJQXPH3X", title: "BEAUTYPEAK 20x30 Arched Gold Baroque Wall Mirror", w: 1254, h: 1254 },
  ],
  pairing: [
    { asin: "B07KQXDLZ8", title: "Mixhug Set of 2 Burnt Orange Velvet Lumbar Pillow Covers", w: 1500, h: 1073 },
    { asin: "B08BCFJ2N4", title: "DEZENE Pink and Gold Velvet Throw Pillow Covers, 2 Pack 18x18", w: 968, h: 956 },
  ],
  sizeBudget: [
    { asin: "B0829X4Z94", title: "Linkind A19 LED Light Bulbs Dimmable, 40 Watt Equivalent, E26 Base, 2700K Soft White", w: 1324, h: 1390 },
    { asin: "B073CKJ5PR", title: "EcoSmart 100W Soft White 2700K A19 Dimmable LED Light Bulbs 1600 Lumens each, 2-Pack", w: 736, h: 673 },
  ],
  maintenance: [
    { asin: "B09YNDDNVK", title: "12-Piece Microfiber Duster Set with 30 to 100\" Extension Pole", w: 1485, h: 1500 },
    { asin: "B07XGJQPLJ", title: "DELUX Microfiber Feather Duster Extendable Duster with 100 inches Extra Long Pole", w: 1040, h: 1054 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "black-bedroom-psychology-execution-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "black-bedroom-psychology-execution", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Black on a bedroom wall sounds like a bigger risk than it actually is.</p>
<p>The color itself isn't the hard part &mdash; execution is. The same shade reads as either cave-like or genuinely luxurious depending entirely on lighting, texture and what gets paired with it.</p>
<p>This covers both: why black actually works in a bedroom, and the specific choices that determine whether it lands.</p>
${photo("hero.png", "Bold black bedroom with layered textures and warm accents", 1024, 574, "hero")}

<h2>Why Black Bedrooms Have Real Staying Power</h2>
<p>A black bedroom reads as confident rather than trendy once it's executed well, which is part of why the look keeps resurfacing rather than disappearing.</p>
<p>It's also one of the few color choices that genuinely changes how a room feels to be in, not just how it looks in a photo.</p>
${photo("intro-star.png", "Black bedroom serving as a striking design focal point", 1024, 574)}
<p>Black has moved from a niche, design-forward choice into something far more mainstream, as more people realize it doesn't require a huge room or a big budget to pull off.</p>
${photo("intro-moment.png", "Modern black bedroom reflecting a current design trend", 1024, 574, "intro")}

<h2>The Psychology Behind the Color</h2>
<p>Black absorbs light rather than reflecting it, which removes the visual edges of a room instead of highlighting them.</p>
<p>Without clear boundaries to measure against, a bedroom often feels more enveloping and calm at night, which is the opposite of what people assume before trying it.</p>
<p>This is part of why a black bedroom can feel more restful for sleep specifically, not just more dramatic for show.</p>
${photo("psychology.png", "Black bedroom creating a calm, enveloping atmosphere for rest", 1024, 574, "psychology")}

<h2>Myths Worth Clearing Up First</h2>
<p>The biggest misconception is that black automatically makes a room feel smaller. In practice, it often does the opposite &mdash; without visible corners to register, the brain stops measuring the room's actual size.</p>
<p>Another common myth is that black only works in large bedrooms. A small room, properly lit, handles it just as well, sometimes better.</p>
<p>The idea that black feels cold or uninviting also doesn't hold up once warmth is layered in through texture and lighting, both covered below.</p>
${photo("myths.png", "Black bedroom demonstrating that dark walls can work in any size space", 1024, 574, "myths")}

<h2>Choosing the Right Shade</h2>
<p>Not every black reads the same &mdash; a true, flat black feels different from a soft charcoal-black or a black with warm undertones.</p>
<p>A slightly warmer black tends to feel more inviting for a bedroom specifically, where the goal is restful, not stark.</p>
<p>Testing a sample on the actual wall, under the room's real lighting, matters more here than with almost any other paint color choice.</p>
${photo("right-shade.png", "Testing different shades of black paint for a bedroom wall", 1024, 574, "rightShade")}

<h2>Lighting Is the Real Deciding Factor</h2>
<p>Lighting does more to determine whether a black bedroom feels luxurious or oppressive than the paint color itself.</p>
<p>Layered, warm-toned lighting &mdash; a mix of overhead, lamp and accent sources &mdash; keeps the room from feeling like one flat dark block.</p>
<p>A black room with only a single harsh overhead light will feel exactly as heavy as people fear. The same room with three warm light sources reads completely differently.</p>
${photo("lighting.jpg", "Warm layered lighting transforming the mood of a black bedroom", 819, 1024, "lighting")}

<h2>Texture Does the Heavy Lifting</h2>
<p>A flat black surface with nothing else going on can feel one-dimensional.</p>
<p>Velvet, bouclé, a woven rug, a textured headboard &mdash; these keep the eye engaged in a way color alone can't.</p>
<p>This matters more in an all-black room than almost anywhere else, since there's no color variation doing that work instead.</p>
${photo("textures.jpg", "Rich textures adding depth and interest to a black bedroom", 819, 1024, "textures")}

<h2>Balancing Darkness With Real Contrast</h2>
<p>A fully black room with zero contrast risks feeling flat regardless of how good the lighting and texture are.</p>
<p>White or cream bedding, a light rug, or a single pale accent wall all give the eye somewhere to land.</p>
<p>This contrast is what keeps the room reading as dramatic rather than simply dark.</p>
${photo("contrast.png", "Black bedroom balanced with light contrasting elements", 1024, 574, "contrast")}

<h2>Furniture That Actually Works With Black Walls</h2>
<p>Warm wood tones stand out more against black than they would against a lighter wall, which makes furniture choice matter more here.</p>
<p>Lighter-finished furniture creates a cleaner, more graphic contrast; darker wood leans the room moodier and more cohesive.</p>
<p>Either direction works, as long as the choice is deliberate rather than accidental.</p>
${photo("furniture.png", "Warm wood furniture complementing black bedroom walls", 1024, 574, "furniture")}

<h2>Bedding That Softens the Mood</h2>
<p>Bedding is one of the easiest ways to keep a black room from feeling severe.</p>
<p>Soft, layered textures in white, cream or a muted tone immediately warm up the space without touching the walls at all.</p>
<p>This is also the easiest element to change later if the room ever needs a quick refresh.</p>
${photo("bedding.png", "Soft layered bedding softening a bold black bedroom", 1024, 574, "bedding")}

<h2>Small Accents That Bring the Room to Life</h2>
<p>A scattering of brass or gold hardware, a single piece of art, or one statement object all read more vividly against black than they would against any lighter wall.</p>
<p>Fewer, more considered accents work better here than many small ones competing for attention.</p>
<p>This is where the room's personality actually shows up.</p>
${photo("accents.png", "Carefully chosen accents adding personality to a black bedroom", 1024, 574, "accents")}

<h2>Adding Warmth Without Losing the Drama</h2>
<p>Warm metals, natural wood, and soft warm-toned lighting together do most of the work of keeping a black room from feeling cold.</p>
<p>This isn't about compromising the look &mdash; it's about executing it properly, since the "cold black room" problem almost always traces back to missing one of these elements.</p>
${photo("warmth.png", "Warm elements balancing the drama of a black bedroom", 1024, 574, "warmth")}

<h2>Mirrors Are an Underused Tool Here</h2>
<p>A mirror bounces whatever light exists back into the room, which matters more in a black bedroom than almost anywhere else.</p>
<p>An interesting frame also adds another texture and material to the room without competing with the wall color.</p>
<p>One of the simplest, most overlooked tools for making a dark room feel brighter without changing the paint at all.</p>
${photo("mirrors.png", "Mirror reflecting light to brighten a black bedroom", 1024, 574, "mirrors")}

<h2>Pairing Other Colors With Black</h2>
<p>Black pairs well with almost anything, but a tight, deliberate palette works better than an open-ended one.</p>
<p>Warm neutrals, deep jewel tones, or a single accent color each create a different mood while keeping black as the foundation.</p>
<p>The fewer additional colors in the mix, the more cohesive the final room reads.</p>
${productGrid("pairing")}

<h2>Making It Work Regardless of Size or Budget</h2>
<p>A small black bedroom isn't a limitation &mdash; it's often the easiest room to execute this look in, since fewer walls need the same careful planning.</p>
<p>A single accent wall in black delivers much of the same effect as a fully black room, for a fraction of the paint and commitment.</p>
<p>Budget-friendly swaps &mdash; a few textured pillows, a secondhand mirror, warmer bulbs &mdash; add up to most of the visual impact without a full renovation.</p>
${productGrid("sizeBudget")}

<h2>Keeping It Looking Good Long-Term</h2>
<p>Matte and flat black finishes show dust and marks more visibly than a satin or eggshell finish would.</p>
<p>A washable or slightly higher-sheen paint in high-touch areas makes the room easier to maintain day to day.</p>
<p>Regular dusting on textured surfaces matters more here too, since texture is doing so much of the room's visual work.</p>
${productGrid("maintenance")}

<h2>Final Thoughts</h2>
<p>A black bedroom isn't about being bold for its own sake.</p>
<p>Done with the right lighting, texture and contrast, it reads as considered and genuinely restful, not just dramatic.</p>
<p>Start with lighting and texture before committing to the paint itself &mdash; those two choices matter more than the shade of black ever will.</p>
<p>The room rewards planning more than almost any other color choice in the house.</p>
`;

module.exports = { body };
