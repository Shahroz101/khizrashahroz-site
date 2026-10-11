// Body content for "A Practical Guide to Choosing Bathroom Light
// Fixtures". Guide format (fixture types + buying considerations),
// not a numbered idea list. New topic for the site — a technical
// buying guide distinct from style-focused lighting content. Source
// photos are all AI-generated style with no Pinterest links, 1:1 with
// the content sections, so none carry credit captions. "Key Features"
// section had no photo, kept text-only. Rewritten from scratch in the
// site's calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0G4LSLX9Y", title: "Modern LED Bathroom Light Fixtures, 24 Inch, 2300 Lumen Dimmable, Black Vanity Lights", w: 1500, h: 1500 },
    { asin: "B0GXLBGVT9", title: "LEDVANCE Sylvania 18.23\" Modern Bathroom Light Fixture, 3 Clear Glass Shades, Black", w: 1500, h: 1500 },
  ],
  why: [
    { asin: "B00EGPN7Y6", title: "Designers Fountain 3-Lights Melrose Vanity Light Fixture, 18 Inch, Brushed Nickel", w: 1500, h: 419 },
    { asin: "B08P5BR6ZC", title: "Black Bathroom Light Fixture, 2-Light Farmhouse Vanity Lights for Bathroom", w: 1500, h: 1500 },
  ],
  types: [
    { asin: "B08D9KDSQ9", title: "Ralbay 24in Modern LED Black Vanity Light, 5-Piece All-in-One Bathroom Set", w: 1356, h: 1500 },
    { asin: "B0G3PJN2Q7", title: "3-Light Farmhouse Bathroom Vanity Light Fixtures, Matte Black, Metal Cage Lampshade", w: 1500, h: 1500 },
  ],
  vanityLights: [
    { asin: "B0FQNR9LGP", title: "Modern Bathroom Light Fixtures, Black Vanity Lights, 360° Rotatable, 24 In", w: 1500, h: 1500 },
    { asin: "B0F8W7NF7B", title: "zouzai 16 Inch Black Modern LED Bathroom Vanity Light Bar, 12W, Dimmable", w: 1500, h: 1500 },
  ],
  ceilingLights: [
    { asin: "B0CP23CKK4", title: "SKEJAO Flush Mount Ceiling Light Fixture, 3-Light, Black", w: 1500, h: 810 },
    { asin: "B000OCNK1U", title: "Designers Fountain 9-Inch 2-Light Flush Mount Ceiling Light, White", w: 1500, h: 1260 },
  ],
  wallSconces: [
    { asin: "B0CL63Z9KK", title: "Kalium Wall Sconces, Set of Two, Modern Matte Black Vanity Wall Lights", w: 1500, h: 1498 },
    { asin: "B0D5GGV1NM", title: "Kalium Wall Sconces, Set of Two, Modern Brushed Nickel Vanity Wall Lights", w: 1438, h: 1500 },
  ],
  recessedLights: [
    { asin: "B0DNLP47RJ", title: "Feit Electric 5/6in LED Recessed Downlight Retrofit Kit, 75W Equivalent", w: 1500, h: 957 },
    { asin: "B0DY1NYM59", title: "HALO 6 Inch LED Recessed Light Slim Trim Retrofit, 5CCT, 6 Pack", w: 1475, h: 1500 },
  ],
  ledStripLights: [
    { asin: "B07R1XJNT9", title: "LED Vanity Mirror Lights, Hollywood Style, 10ft, Dimmable Touch Control Strip", w: 982, h: 1000 },
    { asin: "B07XHLGSXN", title: "Govee Cool White LED Strip Lights, 16.4ft with Control Box, 6500K, Dimmable", w: 1500, h: 1483 },
  ],
  sizeLayout: [
    { asin: "B0GYYSBGWR", title: "Modern Industrial 2-Light Vanity Light, Matte Black, Semi Flush Mount", w: 1500, h: 1500 },
    { asin: "B0DGXG6ZG8", title: "Brushed Nickel Vanity Lights for Bathroom, 3-Light LED, 20 Inch", w: 1500, h: 1500 },
  ],
  functionFirst: [
    { asin: "B0BJ1HZVQ2", title: "Modern Dimmable LED Vanity Light Bar Lighting, Bathroom Light Fixtures", w: 1500, h: 1500 },
    { asin: "B0CP3X8ZQX", title: "OOWOLF Bathroom Vanity Light, Adjustable Brightness, 12W, 17.3 Inch", w: 1500, h: 1500 },
  ],
  matchStyle: [
    { asin: "B0H4Y14YVT", title: "3-Light Black Bathroom Vanity Light, Milk White Tulip Glass Shades", w: 1500, h: 1500 },
    { asin: "B0H8N9B322", title: "3-Light Bathroom Light Fixture, Square Marble Glass, Matte Black", w: 1500, h: 1500 },
  ],
  commonMistakes: [
    { asin: "B0H446ZRYJ", title: "32 Inch Bathroom Vanity Light, Bathroom Light Fixtures Over Mirror", w: 1500, h: 1500 },
    { asin: "B0G29T5LLW", title: "Modern LED Bathroom Vanity Light, 16 Inch, 1800 Lumen Dimmable, Slim Rectangular Bar", w: 975, h: 329 },
  ],
  quickTips: [
    { asin: "B0GL2QVJJC", title: "Modern Bathroom Light Fixtures Over Mirror, 16 Inch, 2000 Lumen Dimmable", w: 1500, h: 1500 },
    { asin: "B08L36HXY3", title: "Linkind A19 LED Light Bulbs Dimmable, 60W Equivalent, 2700K Warm, 6 Pack", w: 1500, h: 1441 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bathroom-light-fixtures-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bathroom-light-fixtures-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Bathroom lighting does more work than almost any other fixture choice in the house.</p>
<p>It needs to handle makeup application, shaving, reading in the tub and the 2 a.m. bathroom trip, all from the same setup.</p>
<p>Getting it wrong means either a washed-out, flattering-nothing glare or a dim room that makes every task harder than it needs to be.</p>
<p>This covers the actual fixture types, how to choose between them, and the mistakes worth avoiding.</p>
${photo("hero.png", "Well-lit bathroom with a thoughtfully chosen light fixture", 574, 1024, "hero")}

<h2>Why the Fixture Choice Actually Matters</h2>
<p>Bathroom lighting affects function first and mood second &mdash; a mirror with bad lighting makes grooming genuinely harder, not just less pretty.</p>
<p>The right fixture also affects how colors read in the room, including skin tone at the mirror, which matters more here than in almost any other room.</p>
<p>A well-lit bathroom feels bigger and more finished even without touching anything else in the space.</p>
${photo("intro-why.png", "Bathroom lighting creating a functional and mood-appropriate space", 574, 1024, "why")}

<h2>The Fixture Types Worth Knowing</h2>
<p>Most bathrooms end up using a mix of these, not just one.</p>
${photo("intro-types.png", "Variety of bathroom light fixture types for different needs", 574, 1024, "types")}

<h3>Vanity Lights</h3>
<p>Mounted directly above or beside the mirror, vanity lights handle the detail work &mdash; makeup, shaving, skincare.</p>
<p>Side-mounted fixtures reduce the shadows a single overhead vanity light tends to cast across the face.</p>
<p>This is the fixture most worth getting right first, since it affects daily grooming tasks directly.</p>
${photo("vanity-lights.png", "Vanity lights properly illuminating a bathroom mirror", 574, 1024, "vanityLights")}

<h3>Ceiling Lights</h3>
<p>A central ceiling fixture provides the room's general ambient light, covering tasks that don't need the focused brightness of vanity lighting.</p>
<p>This is the baseline every bathroom needs, even when other fixture types handle the detail work.</p>
<p>A flush or semi-flush mount keeps the fixture out of the way in a room with limited ceiling height.</p>
${photo("ceiling-lights.png", "Central ceiling light providing ambient bathroom illumination", 574, 1024, "ceilingLights")}

<h3>Wall Sconces</h3>
<p>Sconces add both function and style, often flanking a mirror or marking a specific zone like a tub or shower entry.</p>
<p>They work well paired with vanity lighting, filling in shadows a single overhead source leaves behind.</p>
<p>This is also one of the more decorative fixture types on this list, doing real visual work beyond pure function.</p>
${photo("wall-sconces.png", "Wall sconces adding both function and style to a bathroom", 574, 1024, "wallSconces")}

<h3>Recessed Lights</h3>
<p>Set flush into the ceiling, recessed lights provide clean, unobtrusive general lighting without any visible fixture.</p>
<p>This suits a modern bathroom where visible light fixtures would compete with a minimal design.</p>
<p>Multiple recessed lights spread evenly across the ceiling avoid the harsh single-point shadow a lone fixture creates.</p>
${photo("recessed-lights.png", "Recessed lighting providing clean, unobtrusive bathroom illumination", 574, 1024, "recessedLights")}

<h3>LED Strip Lights</h3>
<p>Thin LED strips work well under cabinets, around a mirror frame, or along a tub edge for subtle accent lighting.</p>
<p>This fixture type is less about primary lighting and more about mood and detail &mdash; a soft glow for a nighttime bathroom trip without full brightness.</p>
<p>Dimmable, color-adjustable strips add flexibility that a fixed fixture can't match.</p>
${photo("led-strip-lights.png", "LED strip lighting adding subtle accent illumination to a bathroom", 574, 1024, "ledStripLights")}

<h2>How to Actually Choose</h2>
<p>Bathroom size and layout set real constraints &mdash; a small bathroom may only need one well-placed fixture, where a larger one needs a layered combination.</p>
${photo("size-layout.png", "Bathroom lighting chosen to fit the room's specific size and layout", 574, 1024, "sizeLayout")}
<p>Function comes before style in the decision order. A fixture that looks great but doesn't light the mirror properly isn't doing its real job.</p>
${photo("function-first.png", "Functional bathroom lighting prioritized for practical daily use", 574, 1024, "functionFirst")}
<p>Once function is settled, matching the fixture finish and shape to the room's existing style ties the whole space together.</p>
${photo("match-style.png", "Bathroom light fixtures matched to the room's overall design style", 574, 1024, "matchStyle")}

<h2>Features Worth Checking Before Buying</h2>
<p>A damp or wet-rated label matters for anything installed near a shower or tub &mdash; a standard fixture isn't built for that exposure.</p>
<p>Color temperature affects how the whole room reads &mdash; warm light (around 2700-3000K) flatters skin tone better than a cooler, clinical white.</p>
<p>Dimmability adds real flexibility between a bright task-lighting mode and a softer evening one.</p>
<p>Energy-efficient LED options now cost little more than standard bulbs while lasting considerably longer.</p>

<h2>Mistakes Worth Avoiding</h2>
<p>Relying on a single overhead fixture for the whole room almost always leaves the mirror under-lit for actual grooming tasks.</p>
<p>Choosing a fixture based purely on looks, without checking it's rated for a bathroom's humidity, risks a fixture that fails early.</p>
<p>Skipping dimmers removes flexibility the room will likely need at different times of day.</p>
<p>Placing vanity lighting too high above the mirror creates the same harsh shadow problem a single ceiling light does.</p>
${photo("common-mistakes.png", "Bathroom demonstrating lighting setup avoiding common mistakes", 574, 1024, "commonMistakes")}

<h2>Quick Guidelines to Keep in Mind</h2>
<p>Layer at least two fixture types &mdash; ambient and task lighting &mdash; rather than relying on just one.</p>
<p>Choose warm-toned bulbs for anywhere near the mirror.</p>
<p>Check the damp or wet rating before buying anything for a shower or tub area.</p>
<p>Add a dimmer wherever the budget allows for it.</p>
${photo("quick-tips.png", "Well-planned bathroom lighting following key practical guidelines", 574, 1024, "quickTips")}

<h2>Final Thoughts</h2>
<p>The right bathroom lighting setup is rarely one single fixture &mdash; it's a combination that covers both daily function and overall mood.</p>
<p>Start with the vanity lighting, since that's what affects daily grooming tasks the most directly.</p>
<p>Layer in ceiling or recessed lighting for general coverage, then add sconces or LED strips for the finishing touch.</p>
<p>Getting the function right first makes every style decision after that much easier.</p>
`;

module.exports = { body };
