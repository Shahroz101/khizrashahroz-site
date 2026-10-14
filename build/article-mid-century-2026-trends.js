// Body content for "What's Actually New in Mid-Century for 2026, Not
// Just Timeless". Guide format, heavily condensed from a 21-section,
// 31-subsection source (the longest and most repetitive of five
// mid-century living room sources processed this session). This is
// the first of five — the differentiation plan across all five:
// decor-trends (this one) = critical "what's new vs. timeless" lens;
// design-ideas = property-value/resale framing; makeover-guide =
// step-by-step renovation process; the budget source = thrift/DIY
// execution; the "ultimate style guide" = authenticity/identifying
// genuine mid-century pieces. This rewrite deliberately skips
// re-explaining mid-century fundamentals (those belong to the other
// four) and keeps only what's specifically framed as new for 2026 —
// jewel-tone accents, curved sofa silhouettes, sculptural lighting,
// the "lived-in imperfection" philosophy. The source reused several
// photos 2-3 times across different sections; each repeated image is
// kept on its first appearance only, with later repeats running
// text-only. Source photos have no Pinterest links, so none carry
// credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0G8JG6TVY", title: "Solid Wood 3-Tier Small End Table, Mid-Century Brown Accent Table", w: 1500, h: 1500 },
    { asin: "B0GVJKNPSG", title: "IDEALHOUSE 65 Inch Mid Century Modern Loveseat Sofa, Green", w: 1500, h: 1500 },
  ],
  why: [
    { asin: "B0GPWT17V3", title: "Lexicon Mid Century Modern Accent Chair with Solid Wood Armrests and Legs", w: 1500, h: 1500 },
    { asin: "B0GKF6BHLX", title: "AWASEN Small Round Accent Side Table for Small Spaces", w: 703, h: 1500 },
  ],
  color: [
    { asin: "B0BWW26RRC", title: "WACOMECO Velvet Throw Pillow Covers, Pack of 2, Emerald with Gold Stripe", w: 1500, h: 1500 },
    { asin: "B0CNRKFF99", title: "Bnuitland Burnt Orange Fleece Throw Blanket for Couch and Bed", w: 1500, h: 1340 },
  ],
  curved: [
    { asin: "B0F96ZMVK5", title: "Modern Curved Sectional Sofa, 125 Inch, Minimalist Curve Loveseat Couch", w: 1500, h: 1500 },
    { asin: "B0CKX5ZNG7", title: "BELLEZE Swivel Barrel Accent Chair, Modern Upholstered Curved Back", w: 1500, h: 1500 },
  ],
  minimalism: [
    { asin: "B0FMJBNGMY", title: "Small Oval Coffee Table, Low Table with Solid Wood Legs, 23.6 Inch", w: 1500, h: 1500 },
    { asin: "B0GJYW2LC1", title: "MOFFE Mid Century Modern Real Wood Floor Lamp with 2 Shade Looks", w: 1500, h: 1500 },
  ],
  conversation: [
    { asin: "B0BLN33BCJ", title: "Yaheetech Mid-Century Accent Chairs, Set of 2, Light Brown", w: 1500, h: 973 },
    { asin: "B0H9Z2CD62", title: "Rattan Coffee Table with Drawer and Open Shelf, Mid-Century Style", w: 1500, h: 1500 },
  ],
  lighting: [
    { asin: "B0G1MKWJJS", title: "ZenGlimmer Artistic Vintage Floor Lamp, 3-Light Sculptural Curved Iron Base", w: 1500, h: 1500 },
    { asin: "B0H69WYRY1", title: "24 Inch Black Pendant Light, Sculptural LED Fixture for Large Dining Tables", w: 1500, h: 1500 },
  ],
  art: [
    { asin: "B0FQ5QCQGP", title: "Large Oversize Abstract Neutral Framed Wall Art for Living Room and Bedroom", w: 1000, h: 1000 },
    { asin: "B0DDC6QSNV", title: "3D Large Framed Brown Abstract Wall Art for Living Room, 3 Piece, 24 x 36 Inch", w: 1500, h: 1500 },
  ],
  blend: [
    { asin: "B0FHK37ZYY", title: "Cute Small Table Lamp, Vintage Mid Century Modern Bedside Lamp with Fabric Shade", w: 1500, h: 1500 },
    { asin: "B0H9XC2M97", title: "COVLON Solid Wood Round Side Table, U-Shaped Base, Space-Saving", w: 899, h: 1500 },
  ],
  imperfection: [
    { asin: "B0HCBW34GX", title: "Small Vintage Butterfly Picture Frame, Oval Gold Wall Decor", w: 1257, h: 1500 },
    { asin: "B0BXP7YWHJ", title: "CEMABT White Ceramic Vase Set of 2, Modern Minimalist Donut Vases", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "mid-century-2026-trends-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "mid-century-2026-trends", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Mid-century modern never really left, which makes "trends" an odd word to apply to it.</p>
<p>But the way it's being done in 2026 is genuinely different from how it was done five years ago &mdash; bolder color, curvier furniture, a looser attitude toward perfection.</p>
<p>This covers what's actually new, not the timeless basics covered elsewhere.</p>
${photo("hero.jpg", "Stylish mid-century living room reflecting the latest 2026 trends", 1600, 900, "hero")}

<h2>Why It Keeps Resurfacing</h2>
<p>Mid-century's clean lines and warm materials photograph well and age well, which is a rare combination most trends don't manage simultaneously.</p>
<p>What's changed for 2026 isn't the foundation &mdash; it's the confidence with which people are now willing to push past the safe, neutral version of the style.</p>
${photo("intro.jpg", "Classic mid-century elements inspiring 2026's living room revival", 1024, 683)}
${photo("mid-century-magic.jpg", "The enduring appeal of mid-century design in modern homes", 1024, 683)}
${photo("make-it-2026.jpg", "Mid-century style reimagined for a 2026 sensibility", 1024, 683, "why")}

<h2>The Color Shift: Bolder Than Before</h2>
<p>The 2026 version pushes past safe earthy neutrals into deeper jewel accents &mdash; a moody emerald or burnt amber used deliberately, not just as a tiny accessory.</p>
<p>Warm woods are also winning out decisively over the cooler metal finishes that dominated a few years ago.</p>
${photo("color-palette.jpg", "Bold 2026 color palette blending earthy calm with jewel tones", 1024, 945)}
${photo("earthy-neutrals.jpg", "Earthy neutral tones adding depth to a mid-century palette", 1024, 750, "color")}

<h2>Curved Furniture Over Straight Lines</h2>
<p>A curved sofa or an organically shaped chair is the single most visible 2026 shift away from mid-century's traditionally straight, angular silhouettes.</p>
<p>This softer furniture language pairs the style with a more current, slightly maximalist sensibility rather than the stricter mid-century of past decades.</p>
${photo("curved-sofas.jpg", "Curved sofa bringing a fresh, organic shape to mid-century style", 1024, 683, "curved")}

<h2>Mid-Century Meets Minimalism</h2>
<p>A more editited, negative-space-forward version of the style is showing up alongside the bolder color shift &mdash; fewer pieces, each one more deliberately chosen.</p>
<p>This pairing might seem contradictory to the bolder palette trend, but the two actually work together: bold color, restrained quantity.</p>
${photo("meets-minimalism.jpg", "Mid-century style blending with modern minimalist restraint", 1024, 819, "minimalism")}

<h2>The Conversation Circle Layout</h2>
<p>Furniture arranged to genuinely face each other, rather than all pointed at a screen, is having a real resurgence as homes prioritize in-person connection again.</p>
<p>This layout choice is as much a 2026 statement as any specific piece of furniture.</p>
${photo("conversation-circle.jpg", "Furniture arranged in a conversation-friendly mid-century layout", 1024, 576, "conversation")}

<h2>Sculptural Lighting as the New Statement Piece</h2>
<p>A sculptural floor or pendant lamp is increasingly doing the job a piece of art used to do &mdash; the room's main visual anchor.</p>
<p>This reflects lighting's broader shift from purely functional to genuinely decorative across the whole style.</p>
${productGrid("lighting")}

<h2>Oversized Art, Not Small Collections</h2>
<p>One large, confident piece of art is edging out the smaller curated collections that defined mid-century styling a few years back.</p>
<p>This mirrors the furniture shift toward fewer, bolder choices over many smaller ones.</p>
${photo("oversized-wall-art.jpg", "Oversized art piece serving as a bold mid-century statement", 1024, 683, "art")}

<h2>Vintage and Modern, Deliberately Blended</h2>
<p>The 2026 signature look leans into an obvious mix of genuinely old pieces alongside new ones, rather than an all-vintage or all-reproduction room.</p>
<p>This visible blend is treated as the point, not something to disguise.</p>
${photo("blending-vintage-modern.jpg", "Vintage and modern pieces deliberately blended for a 2026 look", 683, 1024, "blend")}

<h2>Imperfection as a Feature</h2>
<p>A slightly worn vintage find or an intentionally asymmetrical arrangement is now treated as more desirable than a flawlessly matched room.</p>
<p>This "lived-in" philosophy is arguably the biggest mindset shift behind all of 2026's more specific trends.</p>
${productGrid("imperfection")}

<h2>Your 2026 Moodboard</h2>
<p>None of this requires abandoning mid-century's actual fundamentals &mdash; clean lines, warm materials, function-first design.</p>
<p>What's different in 2026 is the confidence to push color further, curve the furniture, and let the room look genuinely lived in rather than showroom-perfect.</p>
`;

module.exports = { body };
