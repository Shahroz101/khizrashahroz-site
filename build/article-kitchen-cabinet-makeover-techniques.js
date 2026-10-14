// Body content for "8 Kitchen Cabinet Makeover Techniques Worth
// Trying". Numbered idea-list format, reordered from the source's 8
// techniques. New topic for the site — no existing cabinet-makeover
// or cabinet-renovation-technique article (above-cabinet-decor-ideas
// is a styling piece about the space above cabinets, not a makeover
// technique guide). Source photos have no Pinterest links, so none
// carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0749QJV15", title: "Nuvo Cabinet Makeover Kit, Earl Grey, Easy DIY 7-Piece Set, Charcoal", w: 1111, h: 1085 },
    { asin: "B073VKXQFM", title: "homdiy 15 Pack Brushed Nickel Cabinet Pulls, 3 Inch, Stainless Steel", w: 1220, h: 1500 },
  ],
  idea1: [
    { asin: "B0BCX3ZTCY", title: "Heirloom Traditions All-in-One Paint, Almond, Quart", w: 1000, h: 947 },
    { asin: "B0047E6UH2", title: "Insl-X Stix Waterborne Bonding Primer, White, 1 Quart", w: 985, h: 1168 },
  ],
  idea2: [
    { asin: "B0FVY56P31", title: "Cinnvoice Unfinished Pine Kitchen Cabinet Doors, 2 Pcs, 14.75 x 23 Inch", w: 1500, h: 1442 },
    { asin: "B0DJ56899P", title: "Maple Wood Veneer Sheet, 9 Ft x 9 Inch, Flexible Natural Wood Skin", w: 1200, h: 1200 },
  ],
  idea3: [
    { asin: "B0CSNM3MSD", title: "Solid Elm Wood Floating Shelves for Wall, 24 Inch, Set of 2, Natural", w: 1493, h: 1500 },
    { asin: "B0CB34NW5Z", title: "Goovilla Floating Shelf Brackets, 6 Inch, 6 Pack, Black", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0HDPGRHFY", title: "Black Finger Pulls for Cabinets, 5-7/8 Inch, 10 Pack, Edge Pulls", w: 1500, h: 901 },
    { asin: "B07SC74G57", title: "homdiy Brushed Nickel Round Cabinet Knobs, 1-1/8 Inch, 30 Pack", w: 1351, h: 1500 },
  ],
  idea5: [
    { asin: "B0FXWDMYHL", title: "Peel and Stick Quarter Round Molding, White, 1/4 Inch x 10 Ft", w: 1500, h: 1500 },
    { asin: "B0F7HSSF4K", title: "Champagne Gold Crown Molding Trim, Peel and Stick, 3D Floral, 16.4 Ft", w: 1500, h: 1234 },
  ],
  idea6: [
    { asin: "B0FFMS3S22", title: "Pull Out Cabinet Organizer, Stainless Steel, 2 Pack, Silent Slide Drawers", w: 1500, h: 1292 },
    { asin: "B07HQMZ7HH", title: "Utoplike Bamboo Kitchen Drawer Dividers, 4 Pcs, Large Drawers", w: 1216, h: 1199 },
  ],
  idea7: [
    { asin: "B0BDF8CVBN", title: "MCGOR 10 Inch Under Cabinet Lighting, 2 Pack, Rechargeable Motion Sensor", w: 1132, h: 1500 },
    { asin: "B08R66Z71S", title: "ASOKO Dimmable LED Under Cabinet Lights, 2700K, 3 Pcs, 12 Inch, Linkable", w: 1154, h: 1500 },
  ],
  idea8: [
    { asin: "B0B6XYMV9S", title: "Rust-Oleum Cabinet Transformations and Trim Paint, Espresso, Quart", w: 1158, h: 1500 },
    { asin: "B087K1TTFQ", title: "Rethunk Junk Resin Paint, Farmhouse Navy, 32 Oz", w: 979, h: 1467 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "kitchen-cabinet-makeover-techniques-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "kitchen-cabinet-makeover-techniques", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Full cabinet replacement is the most expensive kitchen renovation line item there is, and most of the time, it isn't actually necessary.</p>
<p>These eight techniques cover what genuinely transforms tired cabinets without tearing them out.</p>
${photo("hero.png", "A newly transformed kitchen after a cabinet makeover", 1248, 832, "hero")}

<h2>1. Paint: The Reliable First Move</h2>
<p>A fresh coat of paint remains the single highest-impact, lowest-cost way to transform cabinets, and it works on nearly any existing cabinet material.</p>
<p>Proper sanding and a quality primer matter more here than the paint color itself &mdash; skipping either step is the most common reason a cabinet paint job fails early.</p>
${photo("paint.png", "Freshly painted kitchen cabinets transforming the whole room", 574, 1024, "idea1")}

<h2>2. Refacing: A Convincing Shortcut</h2>
<p>Refacing replaces just the doors and drawer fronts while keeping the existing cabinet boxes, delivering most of a full replacement's visual impact at a fraction of the cost.</p>
<p>This makes the most sense when the cabinet boxes themselves are still structurally sound, with only the faces looking dated.</p>
${photo("refacing.png", "Refaced cabinet doors delivering a full-replacement look for less", 574, 1024, "idea2")}

<h2>3. Open Shelving: The Bolder Move</h2>
<p>Removing a few upper cabinet doors entirely creates open shelving, which can make a kitchen feel more spacious and airy than closed cabinetry ever does.</p>
<p>The tradeoff is real, though &mdash; everything on an open shelf stays visible, which demands more consistent organization than a closed cabinet ever required.</p>
${photo("open-shelving.png", "Open shelving replacing closed cabinet doors for an airier look", 574, 1024, "idea3")}

<h2>4. Hardware Swap: Small Change, Big Impact</h2>
<p>New knobs and pulls change a cabinet's entire character in an afternoon, for less money and effort than almost anything else on this list.</p>
<p>Checking the existing screw hole spacing before buying new hardware avoids an unnecessary extra drilling step during installation.</p>
${photo("hardware-swap.png", "New cabinet hardware changing the kitchen's character in an afternoon", 574, 1024, "idea4")}

<h2>5. Add Trim or Molding</h2>
<p>Trim and molding added to plain cabinet fronts bring a custom, built-in look that flat doors alone can't replicate.</p>
<p>This technique works especially well on simpler, shaker-style doors, giving them a more elevated profile without replacing them.</p>
${photo("trim-molding.png", "Trim and molding adding a custom, built-in look to plain cabinets", 574, 1024, "idea5")}

<h2>6. Organize What's Inside</h2>
<p>Pull-out drawers, dividers and other internal organizers improve a kitchen's actual daily function in a way the exterior makeover alone doesn't touch.</p>
<p>This is worth doing alongside any of the other techniques here, since it solves a different problem than how the cabinets look from the outside.</p>
${photo("organize-inside.png", "Organized interior cabinet storage improving daily kitchen function", 574, 1024, "idea6")}

<h2>7. Add Cabinet Lighting</h2>
<p>Under-cabinet or interior cabinet lighting adds both genuine function and a noticeably more finished, higher-end look.</p>
<p>This is one of the more involved techniques here, but it transforms both how the kitchen looks and how usable the counter space actually is after dark.</p>
${photo("cabinet-lighting.png", "Under-cabinet lighting adding function and a finished look", 574, 1024, "idea7")}

<h2>8. Go Two-Tone for Instant Style</h2>
<p>Painting the upper and lower cabinets two different colors, or making the island a standout contrast, brings real visual interest without an entirely bold scheme.</p>
<p>This technique works especially well paired with the paint method above, since it's really just a more deliberate way of applying the same basic update.</p>
${photo("two-tone.png", "Two-tone cabinet painting bringing instant style to the kitchen", 574, 1024, "idea8")}

<h2>Keep It You</h2>
<p>None of these eight techniques needs to happen alone &mdash; paint plus a hardware swap, or refacing plus new lighting, often does more together than any single technique on its own.</p>
<p>Whichever combination gets chosen, cabinets rarely need full replacement to feel genuinely new again.</p>
`;

module.exports = { body };
