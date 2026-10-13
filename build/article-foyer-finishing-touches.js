// Body content for "The Finishing Touches That Make a Foyer Actually
// Shine". Guide format, matching the source's 11 content sections.
// Heavy overlap with the existing modern-entryway-ideas article
// (lighting, storage, rugs, seating, accent walls all already
// covered there), so this rewrite assumes those furniture basics are
// already handled and focuses on the finishing/sensory layer instead
// — scent, texture mixing, decluttering habits, a personal welcome
// moment — the detail work that separates a furnished entryway from
// one that actually feels finished. Source had zero content photos
// for any section, only a hero stock image, so the body runs
// text-only after the hero.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0FD32X7JR", title: "Round Black Wall Mirror, 30 Inch, Matte Black Metal Frame", w: 1024, h: 1024 },
    { asin: "B0F3XBTGNN", title: "Gold Arched Wall Mirror with Vintage Carving, 24 x 32 Inch", w: 1500, h: 1500 },
  ],
  statement: [
    { asin: "B0DXQ4R52P", title: "SUPERJARE 78.8 Inch Narrow Console Table Behind Couch with Charging Stations", w: 1500, h: 1288 },
    { asin: "B0F3X8M93G", title: "Bronze Wide Arched Wall Mirror with Vintage Carving, 27 x 36 Inch", w: 1500, h: 1500 },
  ],
  storage: [
    { asin: "B0C9TQV5RQ", title: "Hipiwe Wicker Shelf Basket with Lid, Woven Storage Box, X-Large, Coffee", w: 1362, h: 1500 },
    { asin: "B08GKMFWM7", title: "Hipiwe Flat Wicker Storage Baskets with Lids, Set of 2, Woven Seagrass", w: 997, h: 758 },
  ],
  walls: [
    { asin: "B0GTV6PCSX", title: "Grey Wood Peel and Stick Contact Paper Wallpaper", w: 1500, h: 1500 },
    { asin: "B0FCS75SJ9", title: "3D Brown Wood Acoustic Slat Wall Paneling", w: 1484, h: 1500 },
  ],
  clutter: [
    { asin: "B0F6Y7TQ4H", title: "Fibogollo Acacia Wood Serving Tray with Metal Handles, 15 x 10 Inch", w: 1500, h: 1136 },
    { asin: "B0H3F7WRVZ", title: "Modern Concrete Key Bowl for Entryway Table, 7 Inch", w: 1500, h: 1166 },
  ],
  scent: [
    { asin: "B0GWQP8ZKC", title: "Auelife Teakwood and Mahogany Reed Diffuser Set, 2 Pack, 8 fl oz", w: 1391, h: 1500 },
    { asin: "B0DLGF6117", title: "M&amp;SENSE Teakwood Soy Wax Jar Candle with Wooden Wick, 9.9 oz", w: 943, h: 1336 },
  ],
  textures: [
    { asin: "B0GKBDGQ3N", title: "Best Choice Products 2-Piece Round Nesting Baskets with Handles, Water Hyacinth", w: 1500, h: 1364 },
    { asin: "B0DDT4R291", title: "Washable 2 x 3 Entryway Area Rug, Neutral Vintage Soft Non-Slip Floor Mat", w: 1500, h: 1500 },
  ],
  personality: [
    { asin: "B0DHW91KK4", title: "Tide and Tales 3D Framed Floral Boho Wall Art, Set of 4", w: 1500, h: 1500 },
    { asin: "B0DQ41XSNL", title: "Self Watering Planters for Indoor and Outdoor Plants, 8, 10 and 12 Inch", w: 1428, h: 1500 },
  ],
  welcome: [
    { asin: "B0BQR2BQYZ", title: "upsimples 11 x 14 Black Picture Frame, 1 Pack", w: 1199, h: 1500 },
    { asin: "B0F7448BMG", title: "OAKOA Round Decorative Resin Tray for Coffee Table", w: 1206, h: 1147 },
  ],
  lighting: [
    { asin: "B0BZTT3MKR", title: "EDISHINE Small Tripod Table Lamp, 14.2 Inch, E26 Base", w: 1200, h: 1500 },
    { asin: "B0H9L9TRGP", title: "CHYING Vintage Plug-In Wall Sconces, Set of 2, with Amber Glass", w: 1500, h: 1500 },
  ],
  rug: [
    { asin: "B0CSDF3YFB", title: "BEQHAUSE Non-Slip Washable Dirt Trapper Door Mat, 20 x 32 Inch, Beige", w: 1500, h: 1500 },
    { asin: "B0D89V1RX1", title: "2 x 6 Washable Hallway Runner Rug, Vintage Soft, Non-Slip Backing", w: 1500, h: 1500 },
  ],
  seating: [
    { asin: "B083LTS16N", title: "XKZG Wooden Shoe Rack Bench for Entryway, Brown, 23.6 Inch", w: 1500, h: 1500 },
    { asin: "B0GWHVP9MM", title: "VASAGLE Button Tufted Accent Chair, PU Leather Armchair, Thick Cushion", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "foyer-finishing-touches-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "foyer-finishing-touches", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A foyer can have the right console table, the right lighting, the right rug, and still feel unfinished.</p>
<p>The furniture gets a space most of the way there. What actually makes it shine is a layer most guides skip entirely.</p>
<p>This covers that layer specifically — the finishing details that turn a decorated entryway into one that feels genuinely considered.</p>
${photo("hero.jpg", "Beautifully styled foyer with elegant finishing touches", 1400, 963, "hero")}

<h2>Why the Finishing Layer Matters</h2>
<p>The furniture pieces get noticed first, but it's the smaller details that get noticed longest — the ones a guest can't quite name but still feels.</p>
<p>A foyer with great furniture and no finishing layer reads as staged. One with both reads as lived-in and considered.</p>

<h2>Start With a Statement Piece, Then Build Around It</h2>
<p>Whatever the foyer's anchor piece is &mdash; a console table, a bold mirror, a striking light fixture &mdash; everything else in the space should support it rather than compete with it.</p>
<p>This is worth confirming before layering in any of the finishing details below, since they all get chosen in relation to this one piece.</p>
${productGrid("statement")}

<h2>Let Storage Disappear Into the Design</h2>
<p>A closed cabinet, a lidded basket, or a bench with hidden storage keeps function present without it looking purely functional.</p>
<p>The goal is storage that reads as a design choice first and a practical solution second.</p>
${productGrid("storage")}

<h2>Treat Wall Details as Part of the Finishing Work</h2>
<p>Paint, wallpaper or wood paneling on just the foyer walls gives the space a defined identity separate from whatever room it opens into.</p>
<p>This is one of the bigger commitments on this list, but also one of the longest-lasting finishing choices.</p>
${productGrid("walls")}

<h2>Keep It Genuinely Clutter-Free</h2>
<p>Shoes by the door, mail on the console, bags dropped on the bench &mdash; this is the fastest way to undo every other styling decision in the room.</p>
<p>A simple daily reset, or a dedicated spot for each category of clutter, protects the rest of the finishing work from being undone within a day.</p>
${productGrid("clutter")}

<h2>Don't Skip the Scent</h2>
<p>A candle, a diffuser, or fresh flowers give the foyer a sensory layer that's easy to forget when focused purely on what's visible.</p>
<p>This is one of the most overlooked finishing details in any entryway, and one of the fastest to add.</p>
<p>A scent that's distinct from the rest of the house gives the foyer its own small identity the moment someone walks in.</p>
${productGrid("scent")}

<h2>Mix Textures for a Considered Feel</h2>
<p>A smooth console, a woven basket, a nubby rug, a glossy mirror frame &mdash; combining several different textures in one small space does more for a designer feel than color or furniture choice alone.</p>
<p>This is a genuinely low-cost way to elevate the space, since it's about combination rather than new purchases.</p>
${productGrid("textures")}

<h2>Add Personality Through Art, Plants or Quirky Objects</h2>
<p>A piece of art, a well-placed plant, or one slightly unexpected object gives the foyer a point of view rather than a generic, catalog-styled look.</p>
<p>This is where the space stops looking like anyone's entryway and starts looking like this specific home's entryway.</p>
${productGrid("personality")}

<h2>Give the Space a Personal Welcome Moment</h2>
<p>A family photo, a meaningful small object, or a handwritten note on a tray all turn a functional entry point into something that feels specific to the people who live there.</p>
<p>This single detail does more for warmth than any amount of furniture or lighting on its own.</p>
${productGrid("welcome")}

<h2>Layer the Lighting</h2>
<p>A mix of overhead, a lamp, and maybe a sconce near the statement piece keeps the foyer from relying on one flat light source.</p>
<p>This also lets the space shift mood between a bright morning entry and a warmer evening welcome.</p>
${productGrid("lighting")}

<h2>Let the Rug Tie It Together</h2>
<p>The rug underfoot pulls the whole finishing layer together, grounding the furniture, the wall color and the smaller objects into one cohesive scene.</p>
<p>A rug chosen last, after the rest of the space is settled, tends to work better than one chosen first.</p>
${productGrid("rug")}

<h2>Give Seating a Reason to Be There</h2>
<p>A single bench or chair should be genuinely useful &mdash; for putting on shoes, setting down a bag &mdash; not just decorative filler.</p>
<p>Function and style aren't competing goals here; the best entryway seating does both.</p>
${productGrid("seating")}

<h2>Your Foyer, Your Story</h2>
<p>None of these finishing details need to happen all at once.</p>
<p>Start with scent and decluttering, since both cost almost nothing and have an immediate effect, then layer in texture and a personal touch over time.</p>
<p>The furniture gets a foyer decorated. The finishing layer is what makes it shine.</p>
`;

module.exports = { body };
