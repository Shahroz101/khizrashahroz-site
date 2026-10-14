// Body content for "How to Design a Luxurious Bedroom: A
// Comprehensive Guide". Guide format, condensed from a 19-section
// source (closing sections — final tips, common mistakes, why luxury
// is about feel not price, conclusion — folded into a shorter close).
// Source had heavy Amazon product images embedded — per established
// precedent, only local lifestyle photos used, no branded products
// named. The hero photo was reused a second time later in the source
// for "The Bed" section at a different crop — since it's the same
// underlying photo, that section runs text-only rather than
// duplicating the image. Layout, personalization and several closing
// sections had no source photo either, also text-only. No Pinterest
// pins in source, so no photo credits.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D14RKT31", title: "RECYCO Channel Box Stitch Velvet Quilt Set, King Size, Beige", w: 1500, h: 1500 },
    { asin: "B0DWVCW439", title: "Hearth and Harbor Wall Mounted Queen Headboard, Bed Headboard Only", w: 1500, h: 1500 },
  ],
  palette: [
    { asin: "B07BDWC1TQ", title: "Glidden Interior Paint and Primer, Greige Oatmeal, One Coat, Eggshell, 1 Quart", w: 1500, h: 1471 },
    { asin: "B0CPYGNG9J", title: "EVOLVE Signature Collection Interior Paint and Primer, Slate Gray, Flat", w: 1470, h: 1500 },
  ],
  bed: [
    { asin: "B0GHP3GY35", title: "GRUSIGN Queen Platform Bed Frame with Velvet Headboard, Adjustable Height", w: 1500, h: 1500 },
    { asin: "B07RY59C3W", title: "LANE LINEN Queen Sheets, 100% Organic Cotton, 4 Pc Percale, Cooling, White", w: 1458, h: 1500 },
  ],
  lighting: [
    { asin: "B006UTQCA2", title: "Lutron Ariadni LED+ Toggle Dimmer Switch, Single Pole or 3-Way", w: 1500, h: 1500 },
    { asin: "B0H6V1KCP4", title: "Small Plug-In Touch Bedside Table Lamps, Set of 2, Natural Oak Finish", w: 1500, h: 1500 },
  ],
  furniture: [
    { asin: "B0FWC1FPGG", title: "Huuger Nightstands, Set of 2, with Charging Station and USB-C Port", w: 1500, h: 1500 },
    { asin: "B0GL82929Z", title: "Sweetcrispy 8-Drawer Fabric Dresser for Bedroom, White, Tall Double Dresser", w: 1054, h: 1500 },
  ],
  textiles: [
    { asin: "B0FJWDRHXN", title: "LBRO2M 100% French Linen Duvet Cover Set, 3 Pcs, King Size", w: 1500, h: 1500 },
    { asin: "B08FT63V5W", title: "LYHome Merino Wool Blanket, Warm and Soft Throw for Bed and Couch, 55 x 79 Inch", w: 1500, h: 1323 },
  ],
  decor: [
    { asin: "B0H65NZT9N", title: "Large 12 Inch Natural Yellow Marble Tray, Wabi-Sabi Decorative Stone Tray", w: 1455, h: 1500 },
    { asin: "B0HG9NHR7H", title: "White Unbreakable Flower Vase, Minimalist Ceramic Look Home Decor", w: 1198, h: 1500 },
  ],
  storage: [
    { asin: "B07JGWSB8T", title: "Amazon Basics Under Bed Storage Bags for Clothes and Blankets, Foldable with Zipper", w: 1493, h: 917 },
    { asin: "B0GWHLR4TN", title: "Sweetcrispy 8-Drawer Dresser for Bedroom, Large Storage Tower, Rustic Brown", w: 1339, h: 1500 },
  ],
  ambiance: [
    { asin: "B0CMT7743G", title: "TJOY 24 Pack A19 LED Light Bulbs, Soft Warm White 2700K, 60 Watt Equivalent", w: 1495, h: 1496 },
    { asin: "B0FH4T7HGP", title: "Scenekoy 23 Inch Alabaster Table Lamps, Set of 2, with Night Light", w: 1500, h: 1499 },
  ],
  scent: [
    { asin: "B07982DFFD", title: "Maison Louis Marie No.04 Bois de Balincourt Santal Soy Wax Candle, 8.5 Oz", w: 1348, h: 1248 },
    { asin: "B0F23L8X2H", title: "COCORRINA Wild Mint and Eucalyptus Reed Diffuser, 6.76 Oz", w: 1331, h: 1500 },
  ],
  tech: [
    { asin: "B0H2ZR6QBW", title: "PHILIPS Smart Color LED Light Bulbs, A19, 4 Pack, 800 Lumen", w: 1500, h: 957 },
    { asin: "B0DNYKLSMZ", title: "No-Drill Motorized Blinds, Cordless Automatic Roller Shades with Remote", w: 1500, h: 1500 },
  ],
  layout: [
    { asin: "B0DP9H9SWM", title: "Royal Windsor Tufted Storage Ottoman Bench for Bedroom", w: 1500, h: 1500 },
    { asin: "B0FS26QTCM", title: "5 x 7 Washable Vintage Area Rug for Bedroom, Beige", w: 1500, h: 1500 },
  ],
  personalization: [
    { asin: "B0HCN6T4CV", title: "Vintage Gold Framed Landscape Wall Art, Green Weeping Willow Tree Lake", w: 1500, h: 1155 },
    { asin: "B0H2HPNRBP", title: "12 x 18 Picture Frame, Solid Walnut Wood Frame with Tempered Glass", w: 1154, h: 1436 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "luxurious-bedroom-comprehensive-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "luxurious-bedroom-comprehensive-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A luxurious bedroom doesn't actually require a luxury budget.</p>
<p>It requires a specific set of decisions made well &mdash; color, lighting, textiles, scent &mdash; that together create a feeling no single expensive piece can fake on its own.</p>
<p>This goes through those decisions one at a time.</p>
${photo("hero.jpg", "Luxurious bedroom design with elegant, comprehensive styling", 1600, 1334, "hero")}

<h2>The Foundation: Picking the Right Palette</h2>
<p>Deep, rich neutrals &mdash; charcoal, warm taupe, soft cream &mdash; read as considered and expensive in a way bright or trend-driven colors rarely do.</p>
<p>This foundation shapes every other decision in the room, which is why it's worth settling before buying a single piece of furniture.</p>
${photo("intro.png", "Luxurious bedroom color palette setting a sophisticated tone", 574, 1024)}
${photo("color-palette.jpg", "Rich, deep colors creating a foundation for bedroom luxury", 1024, 1024, "palette")}

<h2>The Bed: The True Centerpiece</h2>
<p>A substantial headboard, quality linens and a properly sized bed frame for the room all signal luxury more directly than almost any other single piece.</p>
<p>This is worth the biggest share of the budget on this entire list &mdash; everything else in the room gets arranged in relation to it.</p>
${productGrid("bed")}

<h2>Lighting: The Actual Secret Weapon</h2>
<p>Layered lighting &mdash; overhead, bedside, and at least one accent source &mdash; does more for a room's luxury feel than any single piece of furniture.</p>
<p>A dimmer switch alone changes the room's entire mood range, from bright and functional to soft and restful, without touching anything else.</p>
${photo("lighting.png", "Layered lighting creating a luxurious bedroom atmosphere", 1024, 574, "lighting")}

<h2>Furniture: Quality Over Quantity</h2>
<p>A few well-made pieces outperform a fully furnished room of lower-quality furniture, both visually and in how long the room actually looks good.</p>
<p>Negative space itself reads as luxurious &mdash; a room that isn't trying to fill every available corner feels more intentional.</p>
${photo("furniture.jpg", "Quality furniture pieces chosen thoughtfully over quantity", 1024, 683, "furniture")}

<h2>Textiles: The Layers of Comfort</h2>
<p>A duvet, a throw, several pillow types in varying textures &mdash; genuine layering is what makes a bed look and feel luxurious, not just a single flat comforter.</p>
<p>Natural fibers &mdash; linen, cotton, wool &mdash; tend to read as higher quality than synthetic blends, even at a comparable price point.</p>
${photo("textiles.jpg", "Layered textiles adding comfort and texture to the bed", 819, 1024, "textiles")}

<h2>Decor Accessories: The Finishing Touches</h2>
<p>A few considered objects &mdash; a tray, a piece of art, a vase &mdash; finish the room without crowding it.</p>
<p>Fewer, more deliberate pieces consistently read as more luxurious than a room full of smaller decorative items.</p>
${photo("decor-accessories.jpg", "Finishing decor accessories elevating the bedroom's overall look", 1024, 683, "decor")}

<h2>Storage: Keeping Clutter Out of Sight</h2>
<p>Clutter undermines a luxurious feel faster than almost anything else in the room, regardless of how expensive the furniture is.</p>
<p>Closed storage &mdash; a dresser with real capacity, under-bed storage, a proper closet system &mdash; keeps daily life from visibly competing with the room's styling.</p>
${photo("storage.jpg", "Closed storage solutions keeping the bedroom free of visible clutter", 1024, 683, "storage")}

<h2>Ambiance: Creating the Mood</h2>
<p>Soft, warm lighting combined with quiet, uncluttered surfaces sets a mood that bright, busy spaces can't replicate.</p>
<p>This is less about any single addition and more about how all the other elements on this list come together in the room at once.</p>
${photo("ambiance.jpg", "Warm, inviting ambiance completing a luxurious bedroom mood", 1024, 683, "ambiance")}

<h2>Scent: The Invisible Luxury</h2>
<p>A quality candle or diffuser in a considered scent adds a sensory layer that's easy to forget when focused purely on what's visible.</p>
<p>This is one of the lowest-cost items on the entire list relative to the effect it has on how the room actually feels to be in.</p>
${photo("scents.jpg", "A thoughtfully chosen scent adding invisible luxury to the room", 749, 1024, "scent")}

<h2>Tech Integration: The Smart Luxury</h2>
<p>Smart lighting, blackout shades on a timer, or a simple sound system all add real function without visibly cluttering the room with cords or devices.</p>
<p>The goal is technology that works quietly in the background, not technology as a visible decor element.</p>
${photo("tech.jpg", "Smart technology integrated seamlessly into the bedroom", 1024, 1015, "tech")}

<h2>Layout: Designing for Flow</h2>
<p>Clear pathways and furniture placed with actual movement in mind matter more to a room's luxury feel than most people account for.</p>
<p>A beautifully furnished room that's awkward to move through undercuts the effect of every individual design choice made.</p>
${productGrid("layout")}

<h2>Personalization: Making It Yours</h2>
<p>A meaningful piece of art, a sentimental object, or a color tied to personal taste keeps the room from reading as a generic luxury showroom.</p>
<p>The most luxurious rooms still feel specific to the people living in them, not interchangeable with any other high-end bedroom.</p>
${productGrid("personalization")}

<h2>Mistakes Worth Avoiding</h2>
<p>Overcrowding the room with too many statement pieces competing for attention undercuts the effect each one is trying to create.</p>
<p>Skipping lighting layers in favor of a single overhead fixture is one of the most common reasons an otherwise well-furnished room doesn't feel luxurious.</p>

<h2>Why Luxury Is About Feel, Not Price</h2>
<p>A room can be expensively furnished and still feel cold, or modestly furnished and feel genuinely luxurious &mdash; the difference comes down to the decisions covered here, not the total spent.</p>
<p>Lighting, textiles and a clutter-free layout do more for the feeling than any single expensive piece ever will.</p>

<h2>Your Bedroom, Your Luxury</h2>
<p>None of these elements need to happen all at once or in this exact order.</p>
<p>Start with the palette and the bed, since both anchor everything else, then layer in lighting, textiles and the smaller finishing touches over time.</p>
<p>A luxurious bedroom is built from a series of considered decisions, not one big purchase.</p>
`;

module.exports = { body };
