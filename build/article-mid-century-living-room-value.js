// Body content for "Why Mid-Century Living Rooms Appeal to Buyers (and
// What Actually Earns That Appeal)". Guide format, heavily condensed
// from a 23-section source. Second of five mid-century sources —
// distinct from mid-century-2026-trends (new-vs-timeless lens) and
// from the general luxury-living-room-property-value article (which
// already covers generic living room value factors like lighting and
// flooring). This one stays specific to what's unique about
// mid-century's buyer psychology and the genuine investment quality
// of real vintage furniture, rather than repeating generic
// value-adding advice. Source reused several photos across multiple
// sections; each is kept on its first appearance only. No Pinterest
// pins in source, so no photo credits.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0GVJKNPSG", title: "IDEALHOUSE 65 Inch Mid Century Modern Loveseat Sofa, Green", w: 1500, h: 1500 },
    { asin: "B0FMJBNGMY", title: "Small Oval Coffee Table, Low Table with Solid Wood Legs, 23.6 Inch", w: 1500, h: 1500 },
  ],
  defines: [
    { asin: "B07K1SLZ6V", title: "Solid Wood Replacement Furniture Sofa Legs, 6 Inch, Set of 4, Heavy Duty", w: 1429, h: 1112 },
    { asin: "B0FY2Y6YCK", title: "White Ceramic Vase, Organic Sculpted Shape, Rustic Decorative Centerpiece", w: 1113, h: 1500 },
  ],
  buyers: [
    { asin: "B0FPQNBYG4", title: "Smuxee Oak Sideboard Cabinet, Freestanding Buffet with Line Groove Design", w: 1500, h: 1500 },
    { asin: "B0BLN33BCJ", title: "Yaheetech Mid-Century Accent Chairs, Set of 2, Light Brown", w: 1500, h: 973 },
  ],
  core: [
    { asin: "B0D2DFVQ6Q", title: "Hardwood Furniture Legs with Gold Caps, 6 Inch, Mid-Century Modern Replacement Legs", w: 1492, h: 1500 },
    { asin: "B0F3CH5DR2", title: "JOJUSIS Throw Pillow Covers, Pack of 4, Cream and Chocolate, 18 x 18 Inch", w: 1500, h: 1500 },
  ],
  mistakes: [
    { asin: "B07P6NJVYJ", title: "Lexicon Mid Century Modern Accent Chair with Walnut Wood Frame, Orange", w: 1485, h: 1500 },
    { asin: "B08LQXMNRL", title: "Amazon Basics Small Ottoman Foot Rest, Mid-Century Modern X-Frame, Linen", w: 1500, h: 1278 },
  ],
  furniture: [
    { asin: "B01MQE0UFF", title: "Armen Living Jaguar Mid-Century Dining Chair, Walnut Wood and Green Fabric", w: 1027, h: 1500 },
    { asin: "B0H36JK9YJ", title: "Jocoevol Fluted 5-Drawer Dresser, 43 Inch Tall, Curved Profile Design, Wood", w: 1500, h: 1500 },
  ],
  styling: [
    { asin: "B0CJ2NGZL4", title: "Boucle Ball Pillow, Round Sphere Decorative Throw Pillow, 11.8 Inch, White", w: 1500, h: 1500 },
    { asin: "B0B34PTY3X", title: "Uvvyui Knot Pillow Ball, Soft Handmade Round Decorative Throw Pillow", w: 1500, h: 1500 },
  ],
  palette: [
    { asin: "B0D3XD84GW", title: "Aegero Corduroy Decorative Throw Pillow Covers, Pack of 2, 18 x 18 Inch, Yellow", w: 1500, h: 1500 },
    { asin: "B0F89R6V6Y", title: "Lexicon Mid-Century Modern Velvet Accent Chair with Open Back, Dark Teal", w: 1500, h: 1500 },
  ],
  budget: [
    { asin: "B075DCHX5G", title: "Furmax Mid Century Modern DSW Shell Dining Chair, Plastic, White", w: 950, h: 930 },
    { asin: "B0CLV5M9TF", title: "Orange Mushroom Lamp, Mid Century Modern Table Lamp for Bedroom", w: 1300, h: 1500 },
  ],
  blend: [
    { asin: "B0DG5S3NFT", title: "Furlide Rattan Accent Chair, Compact Low-Profile Bamboo Chair, Walnut", w: 1315, h: 1189 },
    { asin: "B08F52QFB2", title: "BoostArea Industrial Floor Lamp, 63 Inch Standing Lamp with Footswitch", w: 1338, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "mid-century-living-room-value-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "mid-century-living-room-value", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Mid-century design has a specific kind of buyer appeal that most styles don't &mdash; it reads as both nostalgic and current at the same time.</p>
<p>That appeal is real, but it only holds up when the room gets the fundamentals right. This covers both halves.</p>
${photo("hero.jpg", "Charming mid-century living room with genuine buyer appeal", 1600, 1101, "hero")}

<h2>What Actually Defines the Style</h2>
<p>Clean lines, organic curves, tapered legs and a clear function-first philosophy are the non-negotiables &mdash; without these, a room reading as "retro" isn't actually mid-century.</p>
<p>This distinction matters more for buyer appeal than it might seem, since a room that misses these fundamentals reads as a costume rather than a genuine style commitment.</p>
${photo("intro.jpg", "The timeless charm behind a well-executed mid-century living room", 1024, 600)}
${photo("what-defines.jpg", "Clean lines and organic curves defining true mid-century style", 1024, 750, "defines")}

<h2>Why This Specific Style Appeals to Buyers</h2>
<p>Mid-century reads as both nostalgic and genuinely current at once, which gives it broader cross-generational appeal than more niche or purely trend-driven styles.</p>
<p>It also photographs exceptionally well for listings, since its clean lines and warm tones translate clearly even in small, low-quality photos.</p>
${photo("why-buyers-love.jpg", "Mid-century living room's broad, cross-generational buyer appeal", 1024, 576, "buyers")}

<h2>The Core Elements Worth Getting Right</h2>
<p>A genuinely well-proportioned sofa, real wood tones, and a considered color palette do more for the room's credibility than any single statement piece.</p>
<p>These fundamentals matter more than trend-chasing accents, since they're what a buyer (or anyone walking into the room) registers first, even subconsciously.</p>
${photo("core-elements.jpg", "Core mid-century elements creating a credible, well-proportioned room", 1024, 683, "core")}

<h2>Mistakes That Undercut the Appeal</h2>
<p>Mixing in pieces that are only loosely mid-century-adjacent, without any of the style's actual design logic, is the most common way a room fails to read as genuinely the style.</p>
<p>Overcrowding the room with too many statement pieces at once is the second most common mistake, undermining the restraint the style depends on.</p>
${photo("common-mistakes.jpg", "Common mid-century styling mistakes that undercut buyer appeal", 1024, 729, "mistakes")}

<h2>Furniture as a Genuine Investment</h2>
<p>Real vintage mid-century furniture, unlike most furniture categories, can actually hold or increase in value over time &mdash; a genuinely unusual quality for home decor.</p>
<p>A well-chosen vintage piece functions as both a styling decision and a reasonable financial one, which isn't true of most "value-adding" decor advice.</p>
${photo("furniture.jpg", "Genuine vintage mid-century furniture holding real investment value", 1024, 768, "furniture")}

<h2>Styling That Reinforces the Investment</h2>
<p>Layering texture around a genuine piece &mdash; rather than clutter competing with it &mdash; keeps the room's actual investment pieces visually prioritized.</p>
<p>This is where styling choices either support or undercut the furniture's inherent value &mdash; a cluttered room buries a good piece; a considered one showcases it.</p>
${photo("texture-layering.jpg", "Layered texture styling that showcases genuine mid-century pieces", 683, 1024, "styling")}

<h2>The Palette That Signals Authenticity</h2>
<p>Warm neutrals, deep wood tones and the occasional considered pop color read as more credibly mid-century than a palette borrowed from a different, more contemporary style.</p>
<p>This consistency between color and furniture choice is part of what separates a room that genuinely reads as mid-century from one that's just using the label loosely.</p>
${photo("color-palette.jpg", "Authentic mid-century color palette signaling genuine design credibility", 1024, 683, "palette")}

<h2>Building the Look Without Overspending</h2>
<p>A single genuine vintage piece, paired with well-chosen reproductions for the rest of the room, captures most of the style's credibility without requiring an entirely vintage-furnished room.</p>
<p>This balanced approach is more financially realistic than treating every piece as a required investment purchase.</p>
${photo("budget-tips.jpg", "Budget-conscious approach combining vintage and reproduction pieces", 683, 1024, "budget")}

<h2>Blending Without Losing the Core Appeal</h2>
<p>Mid-century pairs well with Scandinavian simplicity, a touch of boho warmth, subtle modern glam, or industrial edge &mdash; as long as the mid-century furniture fundamentals stay the visual anchor.</p>
<p>The appeal erodes quickly once the blend tips so far toward another style that the mid-century foundation stops being recognizable.</p>
${photo("blend-scandinavian.jpg", "Mid-century blended with Scandinavian simplicity while staying recognizable", 1024, 819)}
${photo("blend-glam.jpg", "Subtle modern glam touches layered onto a mid-century foundation", 1024, 683)}
${photo("blend-industrial.jpg", "Industrial edge blended thoughtfully with mid-century fundamentals", 684, 1024, "blend")}

<h2>Why the Appeal Holds Up</h2>
<p>Mid-century's broad cross-generational pull, combined with real vintage furniture's genuine investment quality, gives it a kind of staying power most decor trends don't have.</p>
<p>Getting the core fundamentals right matters more to that appeal than any single statement piece or accent choice.</p>
<p>Design with those fundamentals in mind, not just whatever's currently trending, and the appeal takes care of itself.</p>
`;

module.exports = { body };
