// Body content for "10 Ways to Turn a Spare Corner Into a Home Office
// You Actually Want to Work In". Source was a topical guide, not a
// numbered idea list, so this follows the site's existing guide-format
// precedent. Photos are AI-generated style with no Pinterest links, so
// none carry credit captions. Rewritten out of the source's casual,
// listicle-y voice and reordered to group the physical setup first
// (desk, chair, light) before the softer layers (color, scent, zones).

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0HFMX2JH4", title: "Arix Ergonomic Office Chair with 4D Armrests and Adjustable Lumbar Support", w: 1500, h: 1476 },
    { asin: "B09W2HKC37", title: "Furmax 55 Inch Electric Height Adjustable Standing Desk, Black", w: 1500, h: 1458 },
  ],
  spot: [
    { asin: "B0D1TZ2LW2", title: "HOMCOM 8 Panel Folding Room Divider and Privacy Screen, 5.6 Ft Tall, Natural Wood", w: 1500, h: 1036 },
    { asin: "B0BQMR29TC", title: "4 Panel Folding Room Divider and Privacy Screen, 88 Inch Wide, 6 Ft Tall", w: 1361, h: 1215 },
  ],
  chair: [
    { asin: "B0D9VPSQM7", title: "CAPOT Ergonomic Mesh Office Chair, High Back, Adjustable Lumbar, 400 lb", w: 1129, h: 1500 },
    { asin: "B0F4Z22LK9", title: "Martha Stewart Sora Upholstered Stationary Office Chair, Off-White", w: 1403, h: 1500 },
  ],
  light: [
    { asin: "B08HV89TVQ", title: "UV-Free 10000 Lux Daylight Lamp, Touch Control, 3 Brightness Levels, Timer", w: 1062, h: 1500 },
    { asin: "B0BRCJL4MM", title: "Pzloz LED Desk Lamp for Office, Eye-Caring Architect Lamp with Clamp", w: 1080, h: 1080 },
  ],
  colors: [
    { asin: "B0B5LZXLWM", title: "Glidden Total Interior Wall Paint and Primer, Light Sage Green, Semi-Gloss", w: 1500, h: 1473 },
    { asin: "B0FF9PK6KG", title: "Modern Ceramic Vase Set, Yellow Ribbed Matte Design, 3 Piece", w: 1499, h: 1500 },
  ],
  storage: [
    { asin: "B0BCM9YXZS", title: "DECOMOMO Fabric Cube Storage Bins with Labels", w: 1500, h: 1021 },
    { asin: "B0GR4GNR5F", title: "Fabric Storage Cubes, 8 Pack, 11 Inch, Organizer Bins with Labels", w: 1500, h: 1491 },
  ],
  personal: [
    { asin: "B0FX4PRBZL", title: "11 x 14 Picture Frame, Natural Solid Walnut Wood, USA-Sourced, with HD Glass", w: 1239, h: 1500 },
    { asin: "B0H3RS4RD4", title: "Small Artificial Tulip Potted Plants, 2 Pack, Mini Faux Flowers", w: 1500, h: 1500 },
  ],
  zone: [
    { asin: "B0F5X83KSM", title: "5 x 7 Modern Washable Area Rug, Black Abstract Indoor Carpet", w: 1500, h: 1500 },
    { asin: "B0GCHZ6Q5T", title: "Wood Desktop Bookshelf, Upright Tabletop Book Shelf with Adjustable Divider", w: 1500, h: 1330 },
  ],
  tech: [
    { asin: "B0GGPBR4YP", title: "MagSafe 25W Wireless Charger for Apple, Magnetic Fast Charging Pad", w: 1090, h: 1193 },
    { asin: "B0DK13ZHNJ", title: "Univivi No-Drill Under Desk Cable Management Tray, 36 Inch", w: 1500, h: 1447 },
  ],
  scent: [
    { asin: "B0F3DQPLSP", title: "Yankee Candle Sage and Citrus Scented Candle, 22 Oz Large Jar", w: 809, h: 1500 },
    { asin: "B0DXHGTMQL", title: "The AirScent Waterless Cold Air Scent Diffuser, Oil Machine", w: 516, h: 1500 },
  ],
  flexible: [
    { asin: "B0G2XS79J7", title: "Heavy Duty Self-Adhesive Furniture Casters, 4 Pack, Stick-On Swivel Wheels", w: 1500, h: 1500 },
    { asin: "B08B2L36HF", title: "VIVO 32 Inch Standing Desk Riser, Height Adjustable Workstation", w: 1500, h: 1288 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "home-office-productive-workspace-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "home-office-productive-workspace", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A home office doesn't need a spare room to work.</p>
<p>A corner, a closet, a sliver of a landing &mdash; any of it can become a space that actually gets used, instead of a spot where a laptop sits unopened.</p>
<p>What makes the difference isn't square footage. It's a handful of deliberate choices.</p>
${photo("hero.png", "Modern, sleek home office setup with an ergonomic chair and adjustable desk", 1280, 720, "hero")}

<h2>Pick One Spot and Commit to It</h2>
<p>A kitchen counter isn't an office. Neither is a couch cushion.</p>
<p>Both work in a pinch. Neither trains the brain to focus.</p>
<p>A dedicated spot &mdash; even a small one &mdash; sends a signal. Sitting there means it's time to work.</p>
<p>Leaving it means the day is done.</p>
<p>That mental switch is the whole point. A closet with the doors removed, a nook under the stairs, a corner of the bedroom with a folding screen behind it &mdash; any of these qualify, as long as the spot stays consistent.</p>
${photo("dedicated-workspace.png", "Dedicated home workspace corner with a clean desk setup", 574, 1024, "spot")}

<h2>Get a Chair Worth Sitting In</h2>
<p>Comfort isn't optional here. It's the difference between a productive afternoon and a sore back by 2 p.m.</p>
<p>An ergonomic chair supports the lower back properly. Adjustable height and armrests matter more than looks.</p>
<p>A cheap desk chair might save money upfront. It costs more in posture problems later.</p>
<p>This is one category where it's worth spending a little more.</p>
${photo("comfy-chair.png", "Ergonomic office chair paired with a standing desk", 574, 1024, "chair")}

<h2>Let Real Light In</h2>
<p>Natural light does more than look nice. It keeps energy up and eyes less strained.</p>
<p>A desk facing a window is the easiest fix, when a window is available.</p>
<p>No window nearby? A daylight-mimicking lamp gets close. Warm, dim overhead lighting works against focus, not for it.</p>
<p>Light this one detail right and the whole space feels more alive.</p>
${photo("natural-light.png", "Home office bathed in natural light from a large window", 574, 1024, "light")}

<h2>Choose Colors That Actually Help</h2>
<p>Wall color isn't just decoration. It shapes mood.</p>
<p>Soft blues and greens tend to calm a space down. Good for long focus sessions.</p>
<p>A warm yellow or coral accent can lift energy instead, for anyone who needs a spark rather than calm.</p>
<p>Neutral tones with one accent color split the difference &mdash; grounded, but not flat.</p>
<p>There's no single right palette. The right one matches how the space needs to feel, not how a showroom looks.</p>
${photo("color-palette.png", "Home office styled with a calming color palette", 574, 1024, "colors")}

<h2>Build In Real Storage</h2>
<p>Clutter creeps in fast. A desk piled with papers and cables doesn't inspire focus.</p>
<p>Floating shelves keep frequently used items close without eating floor space.</p>
<p>A few labeled bins corral the smaller stuff &mdash; cables, chargers, odds and ends.</p>
<p>A rolling cart adds storage that can tuck away when it's not needed.</p>
<p>None of this has to be expensive. It just has to have a home for everything.</p>
${photo("organization.png", "Organized home office with labeled storage bins and shelving", 574, 1024, "storage")}

<h2>Add a Few Personal Touches</h2>
<p>A sterile desk doesn't make anyone want to sit at it.</p>
<p>A framed photo, a favorite mug, a small plant &mdash; these aren't distractions. They're what makes a space feel like it belongs to someone.</p>
<p>The key word is a few. Enough to feel personal, not so much it competes with the work itself.</p>
<p>A single piece of art on the wall often does more than a cluttered gallery wall ever could.</p>
${photo("personal-touches.png", "Home office desk styled with personal decor touches", 574, 1024, "personal")}

<h2>Zone It When One Space Does Double Duty</h2>
<p>A lot of home offices aren't dedicated rooms. They share space with a guest bed, a craft table, a reading chair.</p>
<p>A rug under the desk area marks the boundary without needing a wall.</p>
<p>A bookshelf or folding screen does the same job, and adds privacy when a call comes up.</p>
<p>Even a change in lighting &mdash; a desk lamp versus the room's main light &mdash; signals where "work" starts and "everything else" ends.</p>
${photo("zones.png", "Home office zoned within a multi-use room using a room divider", 574, 1024, "zone")}

<h2>Let Tech Work for the Space, Not Against It</h2>
<p>A tangle of cords undercuts even the best-looking desk.</p>
<p>Wireless chargers, a cable tray under the desk, a docking station for one-cable laptop hookup &mdash; small upgrades, but they add up.</p>
<p>A second monitor earns its keep fast for anyone doing real work at this desk daily.</p>
<p>None of it needs to look like a showroom. It just needs to stay out of the way.</p>
${photo("tech.png", "Home office with sleek tech setup including wireless charging and cable management", 574, 1024, "tech")}

<h2>Bring In a Scent</h2>
<p>Smell is an underused tool in a home office.</p>
<p>A candle or diffuser with citrus or peppermint tends to sharpen focus.</p>
<p>Lavender works better at the end of the day, when the goal shifts from focus to winding down.</p>
<p>It's a small addition. It's also one of the easiest to change on a whim, depending on the day.</p>
${photo("scent.png", "Home office with a scented candle on the desk for ambiance", 574, 1024, "scent")}

<h2>Keep the Whole Setup Flexible</h2>
<p>Needs change. A desk that can't adapt becomes a problem eventually.</p>
<p>Furniture on casters moves easily when the layout needs to shift.</p>
<p>A standing desk converter adds movement option without a full desk swap.</p>
<p>Modular shelving expands or shrinks as storage needs change.</p>
<p>Building in that flexibility now saves a full redo later.</p>
${photo("flexible.png", "Flexible home office setup with modular furniture on casters", 574, 1024, "flexible")}

<h2>Final Thoughts</h2>
<p>None of these ten changes require a full room or a big budget.</p>
<p>A comfortable chair, real light, a dedicated spot &mdash; even just those three go a long way on their own.</p>
<p>Add the rest in gradually. A home office built up over a few weekends tends to fit better than one assembled in a single rushed trip to a furniture store.</p>
`;

module.exports = { body };
