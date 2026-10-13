// Body content for "15 Farmhouse Kitchen Table Styles to Shop
// Around". Numbered idea-list format, matching the source's 15
// entries. Source named specific branded retailer products (Gloucester,
// Belvedere, Coleridge, Chester, Orchid, etc.) — the same structural
// issue as the other shopping-roundup sources handled earlier this
// session. Per the established precedent, rewritten around generic
// style/material categories instead of specific named products, since
// availability and current naming can't be verified. Source photos
// have no Pinterest links, so none carry credit captions. New table-
// specific topic — distinct from the existing farmhouse-kitchen-ideas
// article, which covers the room broadly and doesn't focus on table
// styles.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0GL7XS234", title: "IDEALHOUSE 71 Inch Farmhouse Wooden Barn Dining Table for 6 to 8", w: 1500, h: 1500 },
    { asin: "B0H2VFHCTF", title: "MECHYIN Nut-Brown Farmhouse Kitchen Dining Chairs, Set of 4", w: 1500, h: 1500 },
  ],
  why: [
    { asin: "B09P7F4XXR", title: "ZeeMart Burlap Style Farmhouse Table Runner, 14 x 72 Inch, Warm Beige Brown", w: 1500, h: 1500 },
    { asin: "B0CS6JGXBS", title: "RELEANY Washable Area Rug, 8 x 10 Ft, Brick Brown Green", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0H4G3N17T", title: "Extendable Oval Dining Table with Built-in Flip Leaf, 55 to 70.8 Inch, for 4 to 8", w: 1500, h: 1500 },
    { asin: "B0HDNPD175", title: "Garvee Extendable Round Dining Table, 47 to 63 Inch, Gray, Table Only", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0HDPMJ9GC", title: "Garvee 62 Inch Long Kitchen Dining Table for 6 to 8, Light Oak", w: 1500, h: 1500 },
    { asin: "B003QCJHEO", title: "Winsome Groveland Wooden Square Dining Table, Light Oak, 29 Inch", w: 1500, h: 1388 },
  ],
  idea3: [
    { asin: "B0DH21GJ15", title: "Besiost Small Farmhouse Wood Narrow Console Table with Storage", w: 1224, h: 1500 },
    { asin: "B0HL7XQRTB", title: "63 Inch Farmhouse Natural Wood Console Entryway Sofa Table", w: 946, h: 953 },
  ],
  idea4: [
    { asin: "B0GCYR5S4H", title: "GarveeHome 63 Inch Modern Long Dining Table for 6 to 8, Grey and Black", w: 1500, h: 1500 },
    { asin: "B0H4Y5X3LP", title: "32 Inch Modern Round Farmhouse Dining Table for 2 to 4, Small Space", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0HCKSRNRM", title: "IDEALHOUSE Wooden Dining Table for 6 to 8 with 2 Large Drawers, 71 Inch", w: 1500, h: 1500 },
    { asin: "B0H998FVL5", title: "Garvee 63 Inch Modern Kitchen Dining Table for 4 to 6, Walnut Brown", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0H99HD5CN", title: "Garvee 63 Inch Modern Kitchen Dining Table for 4 to 6, Light Brown", w: 1500, h: 1500 },
    { asin: "B0HJZ49NTT", title: "IDEALHOUSE 62 Inch Wooden Kitchen Dinner Table for 6 to 8", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0HBBL8TBT", title: "knoworld Extendable Rectangular Dining Table, 47 to 63 Inch, for 4 to 6, Walnut", w: 1500, h: 1500 },
    { asin: "B0GMRD4CT5", title: "Garvee Extendable Round Dining Table, 47 to 63 Inch, Farmhouse Wood", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0F2YBGV4J", title: "GarveeHome Industrial Dining Table for 6 to 8, 70.87 Inch, Heavy Duty", w: 1500, h: 1302 },
    { asin: "B01GTQFBKW", title: "East West Furniture Dublin Drop Leaf Modern Kitchen Table", w: 1500, h: 1263 },
  ],
  idea9: [
    { asin: "B0G5R797PN", title: "ROME + OAK Worton 45 Inch Round Dining Table for 4, Weathered Oak", w: 1500, h: 1228 },
    { asin: "B0GNYZNBHY", title: "Stakmore Classic Straight Edge Square Wood Folding Table, 32 Inch, Driftwood", w: 1500, h: 1303 },
  ],
  idea10: [
    { asin: "B0D965RZFK", title: "Furniture of America Atola Rustic Trestle Expandable Dining Table, Gray", w: 1500, h: 1072 },
    { asin: "B07WMZK55K", title: "DESIGN 59 Single Hardwood Pedestal Trestle Table Base", w: 1111, h: 1500 },
  ],
  idea11: [
    { asin: "B09R97JN7S", title: "Reclaimed Wood Round Table Top, Rustic Recycled Wooden Piece", w: 674, h: 788 },
    { asin: "B01M671NRV", title: "WELLAND Live Edge Cedar End Table with Hairpin Legs, 20.5 Inch", w: 1500, h: 1500 },
  ],
  idea12: [
    { asin: "B0G39V1SQ2", title: "IDEALHOUSE 47 Inch Farmhouse Wood Round Dining Table for 4 to 6", w: 1500, h: 1500 },
    { asin: "B0DM75QZ95", title: "Best Choice Products 35.5 Inch Mid-Century Modern Round Dining Table", w: 1500, h: 1476 },
  ],
  idea13: [
    { asin: "B0H79BYM28", title: "Garvee 71 Inch Large Rectangular Wood Dining Table for 2 to 8", w: 1500, h: 1500 },
    { asin: "B0FRR4LRFQ", title: "79 Inch Industrial Rectangular Dining Table with Metal Legs for 4 to 6", w: 1500, h: 1500 },
  ],
  idea14: [
    { asin: "B0GTKCTJ88", title: "IDEALHOUSE 47 Inch Round Dining Table for 4, Natural Oak", w: 1500, h: 1500 },
    { asin: "B0GQ3TG2P7", title: "GarveeHome Farmhouse Dining Table for 4 to 6, 63 Inch Long", w: 1500, h: 1500 },
  ],
  idea15: [
    { asin: "B0FCS4MMJ6", title: "Btowin 29 Inch Unfinished Solid Wood Tapered Dining Table Legs, 4 Pcs", w: 1452, h: 1500 },
    { asin: "B0FSJQPJW6", title: "Small Farmhouse Glass Coffee Table, Mid-Century Modern Wood Center Table", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "farmhouse-kitchen-table-styles-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "farmhouse-kitchen-table-styles", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A farmhouse kitchen table is the one piece of furniture the whole room gets arranged around.</p>
<p>The style, wood tone and base shape all change how the table reads, even within the broad "farmhouse" category.</p>
<p>These 15 styles cover the range worth considering before settling on one.</p>
${photo("hero.png", "Cozy rustic farmhouse kitchen featuring a wooden dining table", 1248, 832, "hero")}

<h2>Why the Table Sets the Tone</h2>
<p>Everything else in a farmhouse kitchen &mdash; the chairs, the lighting above, even the rug underneath &mdash; gets chosen in response to the table, not the other way around.</p>
<p>Getting this one piece right makes every other decision in the room easier.</p>
${photo("intro.png", "Farmhouse dining table anchoring a warm kitchen space", 683, 1024, "why")}

<h2>1. Spindle-Leg Extendable</h2>
<p>A light wood table with a turned spindle-leg base brings a traditional farmhouse silhouette that still reads as functional for everyday use.</p>
<p>An extendable top adds real flexibility for a table that needs to handle both daily meals and larger gatherings.</p>
${photo("spindle-leg.png", "Extendable farmhouse table with a classic spindle-leg base", 683, 1024, "idea1")}

<h2>2. Rustic Oak</h2>
<p>Solid oak with visible grain and a slightly distressed finish brings real warmth and texture to the table's surface.</p>
<p>This style tends to age well, picking up character over years of actual use rather than looking worn out.</p>
${photo("rustic-oak.png", "Rustic oak farmhouse dining table with natural wood grain", 683, 1024, "idea2")}

<h2>3. Classic Farmhouse Silhouette</h2>
<p>A thick tabletop, simple straight legs, and a slightly chunky overall proportion define the most traditional version of this style.</p>
<p>This is the safest, most versatile choice for anyone wanting an unmistakably farmhouse table without a more specific stylistic lean.</p>
${photo("classic-farmhouse.png", "Classic farmhouse dining table with a simple, sturdy silhouette", 683, 1024, "idea3")}

<h2>4. Painted Two-Tone</h2>
<p>A painted base &mdash; often white, cream or sage &mdash; paired with a natural wood top creates visual contrast within one piece.</p>
<p>This works especially well in a kitchen that's otherwise fairly neutral, giving the table a bit more presence.</p>
${photo("painted-two-tone.png", "Two-tone farmhouse table with a painted base and wood top", 683, 1024, "idea4")}

<h2>5. Modern Farmhouse</h2>
<p>Cleaner lines, a flatter tabletop edge, and a less ornate base bring this style closer to contemporary furniture while keeping farmhouse's warmth.</p>
<p>This suits a kitchen that's blending farmhouse with a more modern overall design.</p>
${photo("modern-farmhouse.png", "Modern farmhouse dining table with clean, contemporary lines", 683, 1024, "idea5")}

<h2>6. Scandinavian-Inspired</h2>
<p>A lighter wood tone, slimmer legs and a more minimal overall shape bring a Scandinavian sensibility into the farmhouse category.</p>
<p>This works well for a smaller kitchen, where a heavier, chunkier table might feel like too much.</p>
${photo("scandinavian.png", "Scandinavian-inspired farmhouse table with slim, minimal lines", 683, 1024, "idea6")}

<h2>7. Handmade Extending</h2>
<p>A table built with a visible handmade quality &mdash; slightly uneven edges, obvious joinery &mdash; brings real character that a mass-produced piece can't replicate.</p>
<p>An extending mechanism built into a handmade piece adds function without losing that artisanal feel.</p>
${photo("handmade-extending.png", "Handmade extending farmhouse table with artisanal character", 683, 1024, "idea7")}

<h2>8. Dark, Moody Finish</h2>
<p>A deep espresso or near-black stain brings real drama to a farmhouse table, working especially well in a kitchen that's leaning into a moodier overall palette.</p>
<p>This finish also tends to hide daily wear better than a lighter one.</p>
${photo("dark-moody.png", "Farmhouse dining table with a dark, moody wood finish", 683, 1024, "idea8")}

<h2>9. Weathered Oak</h2>
<p>A deliberately weathered, almost driftwood-like finish brings a coastal-farmhouse crossover feel that pure traditional farmhouse doesn't have.</p>
<p>This works well paired with lighter, airier kitchen decor overall.</p>
${photo("weathered-oak.png", "Weathered oak farmhouse table with a driftwood-like finish", 683, 1024, "idea9")}

<h2>10. Trestle Base</h2>
<p>A trestle-style base &mdash; two solid end supports connected by a stretcher &mdash; brings real structural presence and a slightly more architectural look.</p>
<p>This base style also tends to leave more legroom than a four-leg design, which matters for a table that seats a crowd.</p>
${photo("trestle-base.png", "Farmhouse table with a sturdy trestle base design", 683, 1024, "idea10")}

<h2>11. Reclaimed Wood</h2>
<p>A tabletop built from genuinely reclaimed lumber carries real history and visible variation that new wood, however well-finished, can't match.</p>
<p>This is one of the more sustainable choices in the category, since it repurposes existing material rather than new lumber.</p>
${photo("reclaimed-wood.png", "Reclaimed wood farmhouse dining table with natural character", 683, 1024, "idea11")}

<h2>12. Compact Round</h2>
<p>A round farmhouse table in a smaller diameter suits a tighter kitchen or breakfast nook better than a long rectangular version.</p>
<p>This shape also naturally encourages conversation, since everyone seated faces more toward the center.</p>
${photo("compact-round.png", "Compact round farmhouse table suited for smaller kitchens", 683, 1024, "idea12")}

<h2>13. Soft Curved-Edge</h2>
<p>A tabletop with gently rounded or curved corners softens the otherwise boxy farmhouse silhouette.</p>
<p>This detail matters more in a smaller kitchen, where sharp corners on a large piece of furniture are a real practical concern.</p>
${photo("curved-edge.png", "Farmhouse table with soft, curved edge detailing", 683, 1024, "idea13")}

<h2>14. Light Scandinavian</h2>
<p>A pale, almost bleached wood finish brings the lightest possible version of the Scandinavian-farmhouse crossover.</p>
<p>This works especially well in a bright, airy kitchen that wants to stay light throughout.</p>
${photo("light-scandinavian.png", "Light Scandinavian-style farmhouse table in a bright kitchen", 683, 1024, "idea14")}

<h2>15. Tapered Leg</h2>
<p>Simple tapered legs bring a slightly more refined, less rustic edge to an otherwise classic farmhouse tabletop.</p>
<p>This base style tends to read as more versatile, pairing well with both traditional and more modern dining chairs.</p>
${photo("tapered-leg.png", "Farmhouse dining table with elegant tapered legs", 683, 1024, "idea15")}

<h2>Picking the Right One</h2>
<p>Room size and seating needs should drive the decision more than style preference alone &mdash; a stunning table that's too big for the space creates a daily problem.</p>
<p>Wood tone matters for matching the rest of the kitchen's existing cabinetry and flooring, more than most people account for upfront.</p>
<p>An extendable top is worth prioritizing for anyone who regularly hosts beyond their everyday household size.</p>

<h2>Wrapping It Up</h2>
<p>None of these 15 styles is objectively the "correct" farmhouse table.</p>
<p>The right one depends on the room's size, the existing wood tones already in the kitchen, and how often the table needs to flex for guests.</p>
<p>Whichever style gets chosen, it becomes the anchor the rest of the kitchen gets arranged around.</p>
`;

module.exports = { body };
