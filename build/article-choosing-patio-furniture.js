// Body content for "How to Choose the Right Patio Furniture for Your
// Outdoor Space". Guide format, matching the source's 8 content
// sections. A buying-decision guide (space, lifestyle, materials,
// comfort, storage, maintenance, style, budget) — distinct content
// type from the existing patio-transformation-ideas article, which is
// a styling/idea listicle rather than a furniture-selection framework.
// Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B09YMK6PVM", title: "Devoko 7-Piece Acacia Wood Patio Dining Set, Black Rattan", w: 1500, h: 1500 },
    { asin: "B07M6VPZ19", title: "Devoko 5-Piece Outdoor Sectional Patio Sofa Set", w: 1500, h: 1000 },
  ],
  knowSpace: [
    { asin: "B07DJ6J6GD", title: "Flamaker 3-Piece Wicker Bistro Patio Set, Black", w: 1500, h: 730 },
    { asin: "B0FNQGKH7Z", title: "Vongrasig 6-Piece Folding Patio Dining Set, All Weather Metal", w: 1500, h: 1500 },
  ],
  lifestyle: [
    { asin: "B07T4788LG", title: "Homall 7-Piece Metal Patio Dining Set for 6, Light Grey", w: 1495, h: 1119 },
    { asin: "B0FQ2VFSRR", title: "Tangkula Folding Teak Wood Lounge Chair with Slatted Seat", w: 1500, h: 1410 },
  ],
  materials: [
    { asin: "B0CVQWPKZC", title: "JONATHAN Y Leo Armless Teak Lounge Chair, Natural", w: 1500, h: 1332 },
    { asin: "B0HM7KPLLD", title: "Garvee Aluminum Patio Furniture Set, 7 Seats, with Coffee Table", w: 1500, h: 1500 },
  ],
  comfort: [
    { asin: "B0GVNF7RV4", title: "Outdoor Deep-Seat Cushion Set, 24 x 24 Inch, Beige, Set of 4", w: 1500, h: 1451 },
    { asin: "B0G91GVPXF", title: "Outdoor Deep Seat Cushion Set, 24 x 24 Inch, Navy Blue, Set of 2", w: 1500, h: 1377 },
  ],
  storage: [
    { asin: "B0DDBBMD2C", title: "Devoko 120 Gallon Resin Outdoor Deck Box, Waterproof", w: 1500, h: 868 },
    { asin: "B09TS823DB", title: "Flamaker 120 Gallon Waterproof Outdoor Deck Box", w: 1500, h: 794 },
  ],
  maintenance: [
    { asin: "B0F4RQRSDT", title: "Loriano Waterproof Patio Furniture Cover Set, 4 Piece, Beige", w: 1226, h: 398 },
    { asin: "B001IXNKV4", title: "Star Brite Premium Golden Teak Oil, Sealer and Preserver", w: 1026, h: 1500 },
  ],
  style: [
    { asin: "B0H73XR9VY", title: "Vongrasig 7-Piece Outdoor Sectional Patio Furniture Set", w: 1500, h: 1500 },
    { asin: "B0BZD3QXZ6", title: "Flamaker 4-Piece Acacia Wood Patio Set, Natural", w: 1500, h: 678 },
  ],
  budget: [
    { asin: "B08VRCXYSS", title: "Vongrasig 4-Piece Patio Conversation Set with Glass Coffee Table", w: 1500, h: 697 },
    { asin: "B0CR69DT79", title: "JAMFLY 4-Piece Wicker Rattan Patio Conversation Set", w: 1500, h: 639 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "choosing-patio-furniture-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "choosing-patio-furniture", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Patio furniture gets picked the same way indoor furniture does more often than it should &mdash; by looks alone, with weather and actual use as an afterthought.</p>
<p>That approach is how a beautiful set ends up faded, rusted or simply uncomfortable within a season.</p>
<p>This covers the actual decision process, not just a list of styles.</p>
${photo("hero.png", "Stylish patio furniture perfectly suited for an outdoor space", 1312, 736, "hero")}

<h2>Know the Space First</h2>
<p>The patio's actual dimensions, sun exposure and typical wind conditions should shape the furniture decision before a single style preference enters the picture.</p>
<p>Measuring the space and mapping out traffic flow before shopping prevents the common mistake of furniture that's technically pretty but practically too large.</p>
${photo("know-space.png", "Carefully measured outdoor space ready for the right furniture", 574, 1024, "knowSpace")}

<h2>Match Furniture to Actual Lifestyle</h2>
<p>A household that hosts often needs different furniture than one that mostly uses the patio for quiet morning coffee.</p>
<p>Being honest about how the space actually gets used, rather than how it might get used, leads to furniture that gets real daily value.</p>
${photo("lifestyle.png", "Patio furniture matched to the homeowner's actual lifestyle needs", 574, 1024, "lifestyle")}

<h2>Choose Materials for the Actual Weather</h2>
<p>Teak and aluminum both handle moisture and sun well; wicker and certain fabrics need more protection or seasonal storage to last.</p>
<p>The local climate matters more here than personal material preference &mdash; a material that thrives in a dry climate may not survive a humid one.</p>
${photo("materials.png", "Weather-resistant materials chosen for long-lasting patio furniture", 574, 1024, "materials")}

<h2>Prioritize Comfort, Not Just Looks</h2>
<p>Furniture that looks stunning in photos but is genuinely uncomfortable to sit in for more than a few minutes defeats the whole purpose of an outdoor living space.</p>
<p>Testing seating in person, when possible, catches comfort problems that photos and descriptions can't.</p>
${photo("comfort.png", "Comfortable patio seating inviting relaxed outdoor living", 574, 1024, "comfort")}

<h2>Think About Storage</h2>
<p>Furniture that can fold, stack, or otherwise be stored compactly during harsh weather or the off-season lasts considerably longer than furniture left exposed year-round.</p>
<p>This is worth factoring in before purchase, not realized only after the first furniture cover fails.</p>
${photo("storage.png", "Patio furniture designed with convenient storage options", 574, 1024, "storage")}

<h2>Factor In Maintenance</h2>
<p>Some materials need regular sealing, cleaning or covering; others can be hosed off and left alone.</p>
<p>Being realistic about how much upkeep will actually happen, rather than how much ideally should happen, leads to furniture that stays looking good.</p>
${photo("maintenance.png", "Low-maintenance patio furniture requiring minimal upkeep", 574, 1024, "maintenance")}

<h2>Pick a Style That Feels Right</h2>
<p>Outdoor furniture deserves the same style consideration as indoor furniture &mdash; it's an extension of the home, not a separate, lower-priority category.</p>
<p>A style that complements the home's existing architecture and interior tends to feel more cohesive than one chosen in isolation.</p>
${photo("style.png", "Patio furniture styled to complement the home's overall aesthetic", 574, 1024, "style")}

<h2>Set a Real Budget</h2>
<p>Spending more on frame durability and weather resistance pays off longer than spending more on trend-driven style details.</p>
<p>A smaller, higher-quality furniture set generally outperforms a larger, cheaper one that needs replacing within a couple of seasons.</p>
${photo("budget.png", "Quality patio furniture offering lasting value within a set budget", 574, 1024, "budget")}

<h2>You've Got This</h2>
<p>None of these 8 factors need to be weighed with equal priority for every household.</p>
<p>Start with the space and actual lifestyle, since both shape every other decision, then work through materials, comfort and budget from there.</p>
<p>The right patio furniture earns its keep for years, not just one good-looking season.</p>
`;

module.exports = { body };
