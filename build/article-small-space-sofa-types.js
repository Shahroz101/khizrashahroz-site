// Body content for "6 Sofa Types That Actually Fit a Small Space".
// Numbered idea-list format. Source was a heavily branded Amazon
// affiliate roundup (Novogratz, Rivet/Amazon Brand, Zinus, DHP, Best
// Choice Products, Christopher Knight Home/Jennifer Taylor Home,
// with spec-comparison tables and a "which Amazon sofa should you
// pick" framing) — rewritten around generic sofa category/types per
// established precedent, no brand names or prices. Distinct from the
// existing sofa-ideas-living-room (general buying-fit guide) and
// sofa-trends-worth-knowing (trend-evaluation framing) via a
// scale/footprint-constrained framing specific to small spaces —
// the deciding factor here is square footage, not style or trend
// longevity. Source had only 1 real photo (hero); the other 7
// "figures" were spec-comparison tables, not images. 0 Pinterest
// pins — uncredited photo() only.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CBTMPHJC", title: "Vongrasig 47 Inch Small Modern Corduroy Loveseat Sofa, Mid Century Style", w: 1500, h: 1500 },
    { asin: "B086RKPN2V", title: "Flamaker Black Faux Leather Convertible Futon Sofa Bed", w: 1500, h: 1499 },
  ],
  idea1: [
    { asin: "B0HDC5H49L", title: "GRUSIGN 78 Inch 5-in-1 Convertible Boneless Corduroy Futon Sofa Bed, Gray", w: 1500, h: 1500 },
    { asin: "B0HDB2SQM1", title: "COMAX 59 Inch Boneless Futon Sofa Bed, Low-Profile Floor Couch, Black", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0FKBCHTTY", title: "Garvee 65 Inch Mid Century Modern Loveseat Sofa for Small Spaces, Boucle", w: 1500, h: 1500 },
    { asin: "B0BPQQX3F2", title: "Vongrasig 48 Inch Small Modern Corduroy Loveseat, Mid Century Tufted Style", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0GTHS8MXF", title: "ZurNesfure Boneless Corduroy Loveseat Sofa with Pillow, Grey", w: 1479, h: 1479 },
    { asin: "B0GH7BMHPK", title: "Tufted Loveseat Sofa with Easy Tool-Free Assembly, Dark Grey", w: 855, h: 484 },
  ],
  idea4: [
    { asin: "B0CHHGYXLF", title: "Best Choice Products Mid-Century Modern Upholstered Convertible Futon Sofa Bed", w: 1500, h: 1499 },
    { asin: "B0DP2L18W3", title: "Homall Black Faux Leather Futon Sofa Bed with Adjustable Backrest", w: 1377, h: 1500 },
  ],
  idea5: [
    { asin: "B0H673CH1K", title: "Walsunny 77 Inch Sectional Sleeper Sofa with Pull-Out Bed, Corduroy", w: 1254, h: 1254 },
    { asin: "B08LJVMZD8", title: "Best Choice Products Compact Upholstered Reversible Sectional Sofa with Chaise", w: 1500, h: 928 },
  ],
  idea6: [
    { asin: "B073YNP4WX", title: "Christopher Knight Home Leona Modern Glam Tufted Velvet Wingback Loveseat", w: 1500, h: 1095 },
    { asin: "B0GQYRGNS5", title: "MAXYOYO Tufted Loveseat Accent Chair with Metal Frame", w: 1500, h: 1500 },
  ],
  measuring: [
    { asin: "B09K4G8NX6", title: "Mr. Pen Retractable Tape Measure, 25 Ft, Easy Read", w: 1250, h: 1500 },
    { asin: "B089NYWHJ5", title: "ScotchBlue Original Multi-Surface Painter's Tape, 1 Inch, 3 Rolls", w: 1500, h: 1500 },
  ],
  styling: [
    { asin: "B0FFN2D9MJ", title: "Soft Textured Throw Pillow Covers, 18 x 18 Inch, Set of 4, Neutral", w: 1500, h: 1500 },
    { asin: "B0C1YZJJ5L", title: "Bedsure Soft Beige Textured Throw Blanket for Couch, 50 x 60 Inch", w: 1500, h: 1296 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "small-space-sofa-types-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "small-space-sofa-types", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A small space changes the sofa decision more than style or budget ever could.</p>
<p>Depth, footprint and whether it needs to double as a bed end up mattering more than almost anything else on a normal shopping list.</p>
<p>These six types are built around that one constraint: fitting well, not just looking good.</p>
${photo("hero.png", "A small living room furnished with a sofa that actually fits", 1312, 736, "hero")}

<h2>1. Convertible Futon Sofas</h2>
<p>A futon-style sofa that folds flat into a bed solves two space problems with one piece of furniture, which matters most in a studio or a guest room doing double duty.</p>
<p>The tradeoff is usually comfort in the seated position, so it's worth testing before committing if daily seating comfort matters as much as the bed function.</p>
${productGrid("idea1")}

<h2>2. Compact Mid-Century Tufted Sofas</h2>
<p>A smaller-scale mid-century silhouette, with tapered legs and a lower profile, keeps the floor visible around it in a way a bulkier sofa can't.</p>
<p>That visible floor space is what actually makes a small room feel larger, more than the sofa's color or fabric ever will.</p>
${productGrid("idea2")}

<h2>3. Tool-Free, Easy-Assembly Loveseats</h2>
<p>A loveseat designed for simple, tool-free assembly solves a real logistics problem in a small apartment, where getting a full-size sofa up a narrow stairwell or through a tight doorway isn't always possible.</p>
<p>This type tends to prioritize practicality over design flourish, which is a fair tradeoff when the alternative is not fitting through the door at all.</p>
${productGrid("idea3")}

<h2>4. Budget Armless Futons</h2>
<p>An armless futon frame saves real width compared to anything with armrests, which adds up fast in a genuinely tiny room.</p>
<p>This is the most budget-friendly type on this list, trading some long-term durability for a lower upfront cost and a smaller footprint.</p>
${productGrid("idea4")}

<h2>5. Reversible Chaise Sectionals</h2>
<p>A small sectional with a reversible chaise adapts to either side of a room, which matters more in a small space where furniture often needs to be rearranged as needs change.</p>
<p>This type delivers more actual lounging space than a straight sofa of the same footprint, since the chaise extends usable seating without extending the piece's overall width.</p>
${productGrid("idea5")}

<h2>6. Compact Velvet or Tufted Loveseats</h2>
<p>A smaller loveseat in velvet or a tufted fabric brings real style presence without the footprint a full sofa demands.</p>
<p>This type works best as a single statement piece in a room too small to support more than one major furniture commitment.</p>
${productGrid("idea6")}

<h2>Measuring Before Anything Else</h2>
<p>The depth of the sofa, not just its width, is what most often gets overlooked and causes the most regret after delivery.</p>
<p>Walking off the actual floor space with tape before shopping, rather than estimating by eye, avoids the single most common small-space furniture mistake.</p>
${productGrid("measuring")}

<h2>Styling a Small-Space Sofa Well</h2>
<p>Keeping the sofa's color close to the walls or floor helps it visually recede, making the room read larger than a bold contrasting color would.</p>
<p>Floating it slightly away from the wall, rather than pushing it flush, often makes a small room feel more intentional rather than cramped.</p>
${productGrid("styling")}

<h2>Fit First, Then Style</h2>
<p>None of these six types is correct for every small space &mdash; the right one depends on whether the room needs a bed, a budget pick, or simply a smaller footprint.</p>
<p>Get the measurements right first, and the style decision becomes the easy part.</p>
`;

module.exports = { body };
