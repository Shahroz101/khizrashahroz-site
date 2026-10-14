// Body content for "Which Luxury Living Room Upgrades Actually Pay
// Back at Resale". Guide format, condensed from a 17-section source
// (flooring and color each got a second, redundant section in the
// source — folded into their first mention; closing "maximizing
// value" and "bringing together" sections folded into final
// thoughts). This source heavily overlaps with the just-published
// living-room-decor-trends (same categories: color, furniture,
// lighting, wall treatments, tech, accessories) and the existing
// expensive-living-room-decor-ideas (look-expensive-on-a-budget
// framing). This rewrite uses the source's own property-value angle
// as the entire organizing principle — which investments actually
// pay back at resale/appraisal versus which are purely for personal
// enjoyment — a genuinely distinct, practical framing neither other
// article uses. Source photos have no Pinterest links, so none carry
// credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D1XJTV1N", title: "COOVA Soft Bubble Faux Fur Throw Blanket, 50 x 60 Inch, Tie-Dye Brown", w: 1500, h: 1500 },
    { asin: "B0HD6PBZR4", title: "18 Inch Coastal Chandelier, 6-Light Gold Tree Branch Crystal Pendant Light", w: 1500, h: 1500 },
  ],
  why: [
    { asin: "B0FSR92NW1", title: "a moment 4 Pack Throw Pillow Covers, Chenille and Velvet Set with Piping, Khaki", w: 1500, h: 1500 },
    { asin: "B0HBQH4JTM", title: "Warmstar 8 x 10 Washable Abstract Area Rug for Living Room, Non-Slip", w: 1500, h: 1500 },
  ],
  colors: [
    { asin: "B07BDWC1TQ", title: "Glidden Interior Paint and Primer, Greige Oatmeal, One Coat, Eggshell, 1 Quart", w: 1500, h: 1471 },
    { asin: "B0D3C8SVYC", title: "Mighty Board Minis Paint Color Test Panels, 12 x 9 Inch, Set of 5, White", w: 1000, h: 1000 },
  ],
  furniture: [
    { asin: "B0GX69DPNG", title: "GRUSIGN 108 Inch Modular Boneless Sofa, Sectional Couch for Living Room", w: 1500, h: 1500 },
    { asin: "B0DQ1JZ87Y", title: "MAXYOYO Modern Accent Chair with Metal Frame, Comfy Living Room Chair", w: 1500, h: 1500 },
  ],
  lighting: [
    { asin: "B08KG5T8XC", title: "Ensenior 12 Pack 6 Inch LED Recessed Ceiling Lights, 5 CCT, 1200 Lumen", w: 1401, h: 1500 },
    { asin: "B0CQT8HSVW", title: "NIORSUN Battery Operated Wall Sconces, Set of 2, Gold, Rechargeable and Dimmable", w: 1480, h: 1500 },
  ],
  flooring: [
    { asin: "B0D14WPWJF", title: "INMOZATA 36 Pack Peel and Stick Waterproof Vinyl Plank Floor Tiles", w: 1500, h: 1500 },
    { asin: "B0FBG7VZBW", title: "Machine Washable 8 x 10 Area Rug for Living Room and Bedroom", w: 1500, h: 1500 },
  ],
  walls: [
    { asin: "B0F1CB1RBG", title: "Peel and Stick Wall Molding Kit, 3 Set, Pre-Cut Wainscoting Panels, 24 x 60 Inch", w: 1500, h: 1500 },
    { asin: "B0H4QB54PC", title: "Striped Peel and Stick Wallpaper, Neutral, Removable and Waterproof", w: 1500, h: 1500 },
  ],
  tech: [
    { asin: "B08TWDNQ5Q", title: "Aeotec Smart Home Hub, Z-Wave, Zigbee and Matter Gateway, SmartThings Compatible", w: 1340, h: 866 },
    { asin: "B01EZV35QU", title: "Kasa Smart Wi-Fi Light Switch, Single Pole, HS200", w: 1500, h: 1500 },
  ],
  accessories: [
    { asin: "B0HFHB1Q2H", title: "Bronze-Tone Resin Knot Sculpture Decor for Coffee Table and Bookshelf", w: 1489, h: 1500 },
    { asin: "B0HC3ZC6K9", title: "6.5 Inch Rustic Ceramic Round Vase, Textured Off-White Speckled Pottery", w: 1367, h: 1500 },
  ],
  placement: [
    { asin: "B0CCP4G4C9", title: "X-Protector Felt Furniture Sliders for Hardwood Floors, 4 Pcs, 6 x 3.5 Inch", w: 1479, h: 1500 },
    { asin: "B0FRMPT7M3", title: "Simple Trending 32 Inch Console Table with Storage Shelf, Narrow Sofa Table", w: 1500, h: 1500 },
  ],
  builtins: [
    { asin: "B0FJ8NJVJ7", title: "71 Inch Farmhouse Bookcase, 5-Tier Tall Bookshelf with Adjustable Shelves", w: 1500, h: 1500 },
    { asin: "B0H9QRZVZM", title: "Vintage Solid Wood Wall Shelves, 4-Tier, Adjustable Scalloped Design", w: 1500, h: 1500 },
  ],
  finishing: [
    { asin: "B0CSFJR66V", title: "BEDELITE Ribbed Fleece Throw Blanket for Couch, Cream, 50 x 60 Inch", w: 1500, h: 1500 },
    { asin: "B0CCV5VKRK", title: "upsimples 11x14 Picture Frame, Gold, Matted to 8x10", w: 1199, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "luxury-living-room-property-value-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "luxury-living-room-property-value", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Not every luxury upgrade pays itself back when it's time to sell.</p>
<p>Some genuinely move the needle on appraisal and buyer interest. Others are purely for the current owner's enjoyment, with little resale impact either way.</p>
<p>This sorts the living room upgrades that actually affect property value from the ones that don't.</p>
${photo("hero.jpg", "Luxury living room renovation boosting overall property value", 1600, 1068, "hero")}

<h2>Why a Luxury Living Room Is More Than Just Looks</h2>
<p>A living room is the room most buyers form their first real impression in, which gives it outsized influence on a home's perceived value relative to its actual square footage.</p>
<p>This makes it one of the higher-leverage rooms to invest in carefully, rather than purely for personal taste.</p>
${photo("intro.jpg", "Living room renovation combining style with real estate value", 768, 1024, "why")}

<h2>Colors and Finishes: Genuinely Value-Adding</h2>
<p>A neutral, broadly appealing palette with high-quality paint and finishes consistently shows up in appraisal and buyer-interest research as a real value driver.</p>
<p>This is one of the safest investments on this entire list &mdash; relatively low cost, broad appeal, and a direct effect on how move-in-ready the room feels.</p>
${photo("colors-finishes.jpg", "Quality color palette and finishes adding genuine resale value", 1024, 1024, "colors")}

<h2>Furniture: Personal Enjoyment, Not Resale Value</h2>
<p>Furniture typically leaves with the seller, which means spending on comfort and elegance here is worth doing for daily life, not as a property-value strategy.</p>
<p>Staged furniture during a sale matters more for a quick sale than owned furniture ever will for appraised value.</p>
${photo("furniture.jpg", "Comfortable, elegant furniture chosen for daily enjoyment", 1024, 768, "furniture")}

<h2>Lighting: Genuinely Value-Adding</h2>
<p>Layered, well-planned lighting is one of the few upgrades that shows up consistently in both buyer walkthroughs and professional appraisals as a meaningful value factor.</p>
<p>Built-in fixtures and proper electrical work, specifically, add more lasting value than portable lamps ever will.</p>
${photo("lighting.jpg", "Well-planned lighting adding real value to the living room", 1024, 705, "lighting")}

<h2>Flooring: Genuinely Value-Adding</h2>
<p>Quality flooring is one of the most consistently cited value factors in real estate appraisals, more so than almost any other single living room element.</p>
<p>A rug, by contrast, is furniture &mdash; nice for daily comfort, but not something an appraiser factors into the home's value.</p>
${photo("flooring-rugs.jpg", "Quality flooring adding lasting, appraisal-recognized value", 1024, 768, "flooring")}

<h2>Wall Treatments: A Mixed Bag</h2>
<p>A tasteful, broadly appealing wall treatment can add value; a highly personal or bold choice can actually work against resale by narrowing the pool of buyers who like it as-is.</p>
<p>This is worth choosing conservatively if resale value is genuinely a priority, saving the boldest choices for a home not currently for sale.</p>
${photo("wall-treatments.jpg", "Wall treatment balancing personal style with broad buyer appeal", 817, 1024, "walls")}

<h2>Technology: Minimal Resale Impact</h2>
<p>Smart home integration is appreciated by current owners daily, but it rarely moves an appraisal or a buyer's offer significantly, since tech preferences vary so much person to person.</p>
<p>Worth installing for personal use, not as a property-value strategy.</p>
${photo("tech.jpg", "Smart technology integration enhancing daily living room use", 1024, 576, "tech")}

<h2>Statement Accessories: Personal Enjoyment, Not Resale Value</h2>
<p>Like furniture, accessories typically leave with the seller and have essentially no bearing on appraised value.</p>
<p>Worth investing in freely for personal enjoyment, with no expectation of resale return.</p>
${photo("accessories.jpg", "Statement accessories chosen purely for personal enjoyment", 768, 1024, "accessories")}

<h2>Furniture Placement and Flow: Genuinely Value-Adding</h2>
<p>A layout that demonstrates the room's full potential and natural traffic flow genuinely affects how buyers perceive the space's size and usability.</p>
<p>This costs nothing beyond planning, which makes it one of the best effort-to-value ratios on this entire list.</p>
${photo("furniture-placement.jpg", "Thoughtful furniture placement showing the room's full potential", 1024, 683, "placement")}

<h2>Built-In Storage and Shelving: Genuinely Value-Adding</h2>
<p>Built-ins are permanent, structural additions that stay with the home, which makes them one of the more reliably value-adding upgrades on this list.</p>
<p>This is a bigger investment than most other items here, but one of the few guaranteed to factor into an appraisal.</p>
${photo("built-in-storage.jpg", "Built-in storage adding permanent, appraisal-recognized value", 1024, 683, "builtins")}

<h2>Finishing Touches: Minimal Resale Impact, High Personal Value</h2>
<p>The smallest final details matter enormously for how a current owner experiences the room daily, but they rarely register in a formal appraisal.</p>
<p>Worth doing for quality of life, not as part of a resale calculation.</p>
${photo("finishing-touches.jpg", "Finishing touches enhancing daily enjoyment of the living room", 731, 1024, "finishing")}

<h2>Bringing It All Together</h2>
<p>Lighting, flooring, built-ins and a broadly appealing palette are the real property-value investments on this list &mdash; worth prioritizing if resale is genuinely a consideration.</p>
<p>Furniture, accessories, tech and the smallest finishing touches are worth every dollar for daily enjoyment, just without the expectation of a direct payback at sale.</p>
<p>Knowing which category a given upgrade falls into makes the whole remodel budget a lot easier to plan around.</p>
`;

module.exports = { body };
