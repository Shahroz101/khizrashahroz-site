// Body content for "How to Choose a Farmhouse Kitchen Sink". Guide
// format, matching the source's h2/h3 structure (material, size,
// apron-front vs. flush mount, single vs. double bowl, drain
// placement, accessories, installation, styling). New topic for the
// site — no existing sink-selection or farmhouse-sink article.
// Source had zero content photos, only a hero image, and zero
// Pinterest pins, so the body runs text-only after the hero.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B09NBDW7QQ", title: "TUKTUK 33 Inch White Fireclay Farmhouse Kitchen Sink, Apron Front, Single Bowl", w: 1500, h: 1500 },
    { asin: "B07Y4Y88Y6", title: "FORIOUS Pull Down Kitchen Faucet with Sprayer, Brushed Nickel", w: 1067, h: 1500 },
  ],
  whatIs: [
    { asin: "B0G5P7WF8G", title: "Miuara 27 x 18 Inch White Fireclay Apron Front Farmhouse Kitchen Sink", w: 1500, h: 1500 },
    { asin: "B0BV3F68XR", title: "Miuara 30 x 18 Inch White Fireclay Apron Front Farmhouse Kitchen Sink", w: 1500, h: 1500 },
  ],
  material: [
    { asin: "B0CF4WLG5Y", title: "Miuara 24 x 19 Inch White Fireclay Kitchen Sink, Undermount or Drop In", w: 1500, h: 1500 },
    { asin: "B0GGHK594Q", title: "Lordear 33 Inch Stainless Steel Apron Front Farmhouse Sink, Copper Tone", w: 1500, h: 1500 },
  ],
  size: [
    { asin: "B0CJ9CGP5Z", title: "VEVOR Farmhouse Kitchen Sink, 304 Stainless Steel, Drop-In, Single Bowl", w: 1500, h: 1325 },
    { asin: "B0D3336C9D", title: "TUKTUK 36 Inch White Fireclay Farmhouse Sink, Apron Front, Single Bowl", w: 1500, h: 1500 },
  ],
  mount: [
    { asin: "B0CJ9D1XFC", title: "VEVOR 33 Inch Stainless Steel Farmhouse Kitchen Sink, Top Mount, Single Bowl", w: 1500, h: 1428 },
    { asin: "B0CRQY3H7W", title: "GETPRO 30 Inch White Fireclay Apron Front Farmhouse Kitchen Sink", w: 1500, h: 1500 },
  ],
  bowls: [
    { asin: "B0C7H1PGD6", title: "33 x 18 Inch White Fireclay Apron Front Farmhouse Kitchen Sink", w: 1500, h: 1500 },
    { asin: "B0CQK8YRJN", title: "33 x 18 Inch Double Bowl White Fireclay Farmhouse Kitchen Sink", w: 1500, h: 1500 },
  ],
  drain: [
    { asin: "B0FFT6PKG8", title: "32 Inch White Fireclay Undermount Kitchen Sink with Offset Drain", w: 1500, h: 1500 },
    { asin: "B0B4QZD77M", title: "Stainless Steel Kitchen Sink Strainer Drain Basket, 2 Pcs, Double Layer", w: 1500, h: 1342 },
  ],
  accessories: [
    { asin: "B08FHVNPVW", title: "Stainless Steel Sink Bottom Grid and Protectors, 26 Inch", w: 1405, h: 1468 },
    { asin: "B0D6RMYX4N", title: "Classic Cuisine 2-in-1 Cutting Board with Strainer, Natural, 13.2 x 11.5 Inch", w: 1500, h: 573 },
  ],
  installation: [
    { asin: "B0CTBTSXXV", title: "CPT-4 Adjustable Stainless Steel Undermount Sink Support Brackets Installation Kit", w: 1500, h: 1500 },
    { asin: "B0DNPS3BJB", title: "Undermount Sink Clips, 10 Pack, Sink Bracket Mounting Kit", w: 1355, h: 1500 },
  ],
  styling: [
    { asin: "B089SQQMFF", title: "FORIOUS Black Pull Down Kitchen Sink Faucet, Classic High Arc", w: 952, h: 1500 },
    { asin: "B0D12DLW9K", title: "Lava Odoro Brushed Bronze Bridge Kitchen Faucet with Pull Down Sprayer", w: 1259, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "farmhouse-kitchen-sink-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "farmhouse-kitchen-sink-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A farmhouse sink is one of the most expensive single decisions in a kitchen renovation, and one of the hardest to undo once it's installed.</p>
<p>Material, size, mount style and bowl configuration all matter more here than they do for a standard drop-in sink.</p>
<p>This covers what actually goes into getting that choice right.</p>
${photo("hero.jpg", "A beautiful farmhouse kitchen sink anchoring the whole space", 1400, 934, "hero")}

<h2>What a Farmhouse Sink Actually Is</h2>
<p>Defined by its exposed front panel, which sits forward of the cabinetry instead of hiding behind a countertop lip, a farmhouse sink reads as a visual anchor more than any other kitchen fixture.</p>
<p>That exposed front is also exactly why the material choice matters more here than for a sink nobody ever really sees.</p>
${productGrid("whatIs")}

<h2>Material Matters More Than It Seems</h2>
<p>Fireclay brings a classic, glossy look and genuine durability, though it comes with real weight and a higher price point.</p>
<p>Enamel-coated cast iron offers a similar classic look at a somewhat gentler cost, with a coating that can chip if it's treated carelessly over time.</p>
<p>Stainless steel is the most budget-friendly and low-maintenance option, trading some of that classic farmhouse warmth for practicality.</p>
<p>Copper brings real character and a living, evolving patina, appealing to anyone who wants the sink to visibly age rather than stay static.</p>
${productGrid("material")}

<h2>Size Deserves Real Thought</h2>
<p>A too-large sink can overwhelm a small kitchen's counter space, while a too-small one defeats the deep-basin purpose a farmhouse sink is chosen for in the first place.</p>
<p>Measuring the actual cabinet opening, not just eyeballing it, avoids the single most common and most expensive mistake in this entire decision.</p>
${productGrid("size")}

<h2>Apron-Front vs. Flush Mount</h2>
<p>A traditional apron-front install extends the sink's front panel slightly forward of the cabinetry, which is the classic farmhouse look most people picture.</p>
<p>An undermount or flush install sits the sink closer to the counter's edge, for a cleaner, more streamlined transition between counter and basin.</p>
${productGrid("mount")}

<h2>Single Bowl or Double Bowl</h2>
<p>A single bowl offers maximum space for large pots and baking sheets, which matters more for anyone who cooks often and at scale.</p>
<p>A double bowl allows one side for washing and one for rinsing or drying, better suited to a household without a dishwasher doing most of that work.</p>
${productGrid("bowls")}

<h2>Drain Placement Is Easy to Overlook</h2>
<p>A center drain keeps plumbing simple and symmetrical, which is the more common and generally easier choice.</p>
<p>An offset or rear drain frees up more usable basin space, at the cost of slightly more complex plumbing underneath.</p>
${productGrid("drain")}

<h2>Don't Skip the Accessories</h2>
<p>A fitted cutting board, a bottom grid, or a built-in colander all extend a farmhouse sink's usefulness well past basic washing.</p>
<p>These are worth planning for before installation, since retrofitting accessories around an already-set basin is far more limited.</p>
${productGrid("accessories")}

<h2>What Installation Actually Involves</h2>
<p>A farmhouse sink's weight and exposed front usually require cabinet modifications that a standard drop-in sink never needs, which is worth factoring into both budget and timeline.</p>
<p>This is one project where hiring a professional, rather than attempting a full DIY install, tends to be the safer call given the structural stakes.</p>
${productGrid("installation")}

<h2>Styling a Farmhouse Sink in a Modern Kitchen</h2>
<p>Pairing it with sleeker, more contemporary hardware and fixtures lets the sink anchor the space without making the whole kitchen feel dated.</p>
<p>This mix-and-match approach is exactly why farmhouse sinks have stayed relevant well outside strictly farmhouse-styled kitchens.</p>
${productGrid("styling")}

<h2>Is a Farmhouse Sink Worth It?</h2>
<p>For anyone who cooks often and wants a genuine visual anchor in the kitchen, the investment tends to pay off well beyond the sink itself.</p>
<p>Material, size and mount style deserve real research before committing, given how disruptive it is to change course after installation.</p>
<p>Get those three decisions right, and the sink becomes the detail the whole kitchen gets built around.</p>
`;

module.exports = { body };
