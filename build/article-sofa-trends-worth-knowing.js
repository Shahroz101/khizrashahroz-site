// Body content for "10 Sofa Trends: Which Ones Are Worth Buying
// Into". Numbered idea-list format, reordered from the source's 10
// trends. Heavy topical overlap with the existing 19-idea
// sofa-ideas-living-room article (which already covers curved,
// sectional, modular, low-profile, loveseat, bold color, textured/
// bouclé and statement/sculptural sofas as buying-fit options) — per
// the critical-trend-evaluation framing used elsewhere this session
// (kitchen-trends-worth-adopting), this piece doesn't repeat buying
// advice. It sorts each trend into lasting-investment vs
// passing-fad, and points to the deeper existing guide for anyone
// who wants the full buying breakdown. Recliners and sustainable/
// eco-friendly materials are genuinely new angles not covered
// elsewhere. Source photos have no Pinterest links, so none carry
// credit captions. Four sections (low-slung, textured, loveseats,
// sustainable) had no source photo and stay text-only.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0HCZKHFN4", title: "ROWHY 112 Inch Modular Sectional Cloud Couch with Movable Ottoman, Black", w: 1500, h: 1500 },
    { asin: "B0GVJKNPSG", title: "IDEALHOUSE 65 Inch Mid Century Modern Loveseat Sofa, Green", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0F96ZMVK5", title: "Modern Curved Sectional Sofa, 125 Inch, Minimalist Curve Couch", w: 1500, h: 1500 },
    { asin: "B0HMRP4ZM7", title: "114 Inch Modern Curved Boneless Cloud Sofa, Oversized Boucle, White", w: 1440, h: 1440 },
  ],
  idea2: [
    { asin: "B0CT2TKZTF", title: "Yaheetech 56.5 Inch Small 2-Seater Sofa with Gold-Tone Legs, Green", w: 1500, h: 802 },
    { asin: "B0GLPM4SFF", title: "Comeon Lazy Floor Sofa Boneless Accent Chair with Ottoman, Mustard Yellow", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0D2LK32DP", title: "N and V Fireside Corduroy Armless Floor Loveseat, 2-Seater, Brown Sugar", w: 1254, h: 1254 },
    { asin: "B0HBBZZP8B", title: "COMAX 59 Inch Boneless Futon Sofa Bed, Low-Profile Floor Couch, Green", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0GZ2RH1VR", title: "79 Inch Modular Sectional Sofa, Boneless Convertible Sleeper, Tri-Folding Cloud Couch", w: 1254, h: 1254 },
    { asin: "B0HHRNPFCS", title: "GRUSIGN 78 Inch 5-in-1 Convertible Boneless Corduroy Futon Sofa Bed, Beige", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0DVKMSQLC", title: "Best Choice Products 77 Inch Mid Century Modern Boucle Loveseat Sofa Bed", w: 1500, h: 623 },
    { asin: "B0GWF8929T", title: "Premium Chenille Upholstery Fabric by the Yard, Thick and Soft Textured", w: 1500, h: 1383 },
  ],
  idea6: [
    { asin: "B0GWTXPR4D", title: "Vongrasig 105 Inch Boneless Modular Sectional with L-Shaped Chaise", w: 1500, h: 1126 },
    { asin: "B0FVSF29GS", title: "ROWHY 150 Inch Modular Sectional Cloud Couch, 7 Seater, Corduroy", w: 1500, h: 1050 },
  ],
  idea7: [
    { asin: "B0CBTMPHJC", title: "Vongrasig 47 Inch Small Modern Corduroy Loveseat Sofa, Mid Century Style", w: 1500, h: 1500 },
    { asin: "B0DSXC1MZK", title: "Best Choice Products 77 Inch Mid Century Modern Velvet Loveseat Sofa", w: 1500, h: 635 },
  ],
  idea8: [
    { asin: "B0H8RN97LG", title: "MCombo 85.4 Inch Zero Wall Hugger Power Recliner Sofa, Toast", w: 1500, h: 748 },
    { asin: "B0GN8C5SCX", title: "Yolsali Manual Reclining Sectional Sofa Set, 6 Seats, Soft Leather Corner", w: 1500, h: 1064 },
  ],
  idea9: [
    { asin: "B0HFWD424X", title: "JUMMICO 72 Inch L-Shaped Couch for Apartment Living Rooms", w: 1500, h: 1500 },
    { asin: "B0HK6ZL8FD", title: "78 Inch 5-in-1 Convertible Boneless Futon Sofa Bed for Living Room", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0G4KPJ27Y", title: "Contemporary Sculptural Modular Sofa with Adjustable Cushion Comfort", w: 931, h: 317 },
    { asin: "B0GW8G9WXQ", title: "Convertible Queen Sofa Bed, 5-in-1 Boneless Corduroy Couch with Removable Armrests", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "sofa-trends-worth-knowing-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "sofa-trends-worth-knowing", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Sofa trends move slower than most other home categories, mostly because nobody wants to replace a sofa every year.</p>
<p>That makes the "is this worth it" question more important here than almost anywhere else in the house.</p>
<p>This sorts 10 current sofa trends into what's a real long-term shift and what's likely to feel dated sooner than expected. For help actually choosing a sofa shape and color for a specific room, the fuller buying guide covers that ground in more depth.</p>
${photo("hero.png", "Current sofa trends shaping living room design", 1312, 736, "hero")}

<h2>1. Curved Sofas: A Lasting Shift</h2>
<p>The curved silhouette has held on long enough now to read as a genuine category, not a passing moment, and it solves a real layout problem by softening a room full of hard angles.</p>
<p>This is a safe long-term investment rather than a trend likely to feel dated in a year or two.</p>
${photo("curved.png", "Curved sofa silhouette establishing itself as a lasting design shift", 574, 1024, "idea1")}

<h2>2. Bold Colors: Worth It If It's a Real Color, Not a Trend Color</h2>
<p>A genuinely well-chosen bold color &mdash; one picked because it suits the room, not because it's having a moment &mdash; tends to age fine.</p>
<p>A color picked purely because it's trending right now carries more real risk of feeling dated once the trend cycle moves on.</p>
${photo("bold-colors-1.png", "A bold-colored sofa making a confident living room statement", 574, 1024)}
${photo("bold-colors-2.png", "Vibrant sofa color bringing new energy to a neutral living room", 574, 1024, "idea2")}

<h2>3. Low-Slung Loungers: A Style Commitment, Not Just a Trend</h2>
<p>A low-profile sofa changes the room's whole proportions, not just the furniture itself, which makes it more of a genuine style decision than a simple trend to try out.</p>
<p>Worth it for someone already leaning toward a relaxed, modern aesthetic; a bigger gamble for anyone still deciding on the room's overall direction.</p>
${productGrid("idea3")}

<h2>4. Modular Sofas: A Genuinely Practical Long-Term Bet</h2>
<p>Modular configurations solve a real, ongoing problem &mdash; a layout that can actually change as a space or a life stage changes &mdash; which gives this trend practical staying power well beyond aesthetics alone.</p>
<p>This is one of the safer trend bets on this list, precisely because its value isn't tied to looking current.</p>
${photo("modular-1.png", "Modular sofa configuration adapting to a changing living space", 574, 1024)}
${photo("modular-2.png", "Flexible modular seating rearranged for a different room layout", 574, 1024, "idea4")}

<h2>5. Textured Fabrics: Likely to Stick Around</h2>
<p>Bouclé and other heavily textured fabrics have moved from trend piece to genuine category over the past few years, suggesting real staying power rather than a passing fad.</p>
<p>The main risk isn't the texture itself, but choosing a fabric that's harder to clean without realizing it going in.</p>
${productGrid("idea5")}

<h2>6. Sectionals: Timeless, Not Trending</h2>
<p>Sectionals solve genuine family-room seating math that no trend cycle changes, which puts this firmly in timeless-choice territory rather than trend territory at all.</p>
<p>The real decision here is configuration and size, not whether sectionals themselves are still "in."</p>
${photo("sectionals-1.png", "A sectional sofa shaping a family room's seating layout", 574, 1024)}
${photo("sectionals-2.png", "Spacious sectional sofa providing flexible family room seating", 574, 1024, "idea6")}

<h2>7. Loveseats: A Practical Constant, Not a Trend</h2>
<p>A loveseat's appeal is almost entirely about fitting a smaller space well, which makes it more of a permanent practical option than something that rises or falls with trend cycles.</p>
${productGrid("idea7")}

<h2>8. Recliner Sofas: A Genuine Comeback</h2>
<p>Recliner sofas have shed a lot of their dated reputation thanks to sleeker, more modern silhouettes that no longer scream "man cave" the way older designs did.</p>
<p>This is a real, newer shift worth paying attention to, not just a rebrand of something that was already common.</p>
${photo("recliner-1.png", "A modern recliner sofa shedding its dated reputation", 574, 1024)}
${photo("recliner-2.png", "Sleek recliner sofa silhouette fitting a contemporary living room", 574, 1024, "idea8")}

<h2>9. Sustainable and Eco-Friendly Sofas: A Real, Growing Shift</h2>
<p>Responsibly sourced materials and more sustainable manufacturing are becoming a genuine purchasing factor rather than a niche concern, which marks this as one of the newest and most substantive shifts on this list.</p>
<p>This is worth real attention for anyone currently shopping, since it's likely to keep growing rather than fade.</p>
${productGrid("idea9")}

<h2>10. Statement Sofas: Depends Entirely on the Piece</h2>
<p>A sculptural or deliberately bold sofa works as a long-term centerpiece when the shape itself is genuinely well-designed, not just unusual for its own sake.</p>
<p>This is the trend most worth scrutinizing piece by piece, since "statement" covers both genuinely great design and short-lived novelty in roughly equal measure.</p>
${photo("statement.png", "A sculptural statement sofa serving as a living room's centerpiece", 574, 1024, "idea10")}

<h2>Which Trends Are Actually Worth Following</h2>
<p>Curved shapes, modular configurations, sectionals and loveseats are the safest bets here, since their appeal rests on genuine function rather than a passing aesthetic moment.</p>
<p>Bold colors and statement pieces deserve more scrutiny, since their long-term success depends heavily on the specific piece, not the trend category itself.</p>
<p>For the deeper work of matching a shape, size and color to an actual room, that's exactly what the fuller sofa buying guide is built to help with.</p>
`;

module.exports = { body };
