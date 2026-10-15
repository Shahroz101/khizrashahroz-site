// Body content for "12 Desk and Storage Solutions for a Genuinely
// Small Home Office". Numbered idea-list format, matching the
// source's 12 ideas. Distinct from the existing
// home-office-productive-workspace article (general workflow factors
// — chair, light, color, storage habits) and home-office-desk-budget-tiers
// (price-tier framing) — this source is organized entirely around
// space-saving furniture mechanisms (wall-mounted, foldable, cloffice,
// ladder, vertical, rolling, corner, murphy, console, multi-functional,
// pegboard, transparent), a genuinely different organizing principle.
// One photo (transparent desk) had a real Pinterest pin, credited via
// pinPhoto(); the rest have no pin, uncredited.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0H86X72NC", title: "MUTUN 31 Inch Small Computer Desk with 2 Drawers, Space Saving", w: 1421, h: 1500 },
    { asin: "B0H5PR7TKW", title: "Under Desk Laptop Mount Kit, Metal Shelf with Detachable Storage Caddy", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B07CKZXDY4", title: "MM MELISEN Solid Wood Wall-Mounted Folding Table, Natural", w: 1001, h: 1001 },
    { asin: "B0DYSKN5DV", title: "IAE Pine Wood Wall-Mounted Folding Desk, 36 x 14 Inch, Floating", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0H4Q6B27W", title: "XBurmo Folding Desk, No Assembly, 35.8 Inch, Space-Saving Workstation", w: 1398, h: 1461 },
    { asin: "B0H83FG84C", title: "JSB 33.2 Inch Folding Adjustable Rolling Desk for Small Spaces", w: 1285, h: 1500 },
  ],
  idea3: [
    { asin: "B0CM5J8ZFB", title: "GreenForest Folding Desk with Wheels, 24.8 Inch Rolling Table", w: 1286, h: 1500 },
    { asin: "B0HLG4L7ZS", title: "5 Pack Stackable Closet Organizers and Storage Bins", w: 1254, h: 1254 },
  ],
  idea4: [
    { asin: "B0CJLW5G85", title: "COTUBLR 27.5 Inch Small Computer Desk with Adjustable Monitor Shelf", w: 1228, h: 1500 },
    { asin: "B0FCFNW8P2", title: "Aquzee 31 Inch Small Desk with Shelves and Hutch", w: 823, h: 1500 },
  ],
  idea5: [
    { asin: "B0DMD7CPNR", title: "Harwaya 36 Inch Floating Shelves for Wall, 8 Inch Deep, Rustic", w: 1500, h: 1500 },
    { asin: "B0GSPD4GP9", title: "upsimples 23.6 Inch Long Floating Shelves, Set of 2, Brown", w: 1012, h: 937 },
  ],
  idea6: [
    { asin: "B0FDB1RTVS", title: "4-Drawer Rolling Storage Cart with Wooden Top and Metal Frame", w: 938, h: 1500 },
    { asin: "B0FR2V7TB1", title: "3-Tier Metal Rolling Utility Cart with Wheels, White", w: 1107, h: 1500 },
  ],
  idea7: [
    { asin: "B0D1QDPH81", title: "VENNQD Corner Desk with Drawers, Shelves and Power Outlet, Triangle Design", w: 1500, h: 1383 },
    { asin: "B0D44YZ5GY", title: "Korfile 59 Inch L-Shaped Computer Desk with Power Outlets, Black", w: 1500, h: 997 },
  ],
  idea8: [
    { asin: "B0FRN6HX5J", title: "Armocity Small Folding Fold-Out Murphy Desk with Outlets, Craft Table", w: 1138, h: 1500 },
    { asin: "B0CFT6CFDQ", title: "Wall-Mounted Folding Floating Desk for Small Spaces, Fold-Down", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B0FNR2FD8Y", title: "47.2 Inch Narrow Console Table, Skinny Sofa Table for Behind Couch", w: 1500, h: 1463 },
    { asin: "B0C4F9YMDP", title: "MAHANCRIS 43.7 Inch Narrow Console Table with Outlets, Rustic Brown", w: 1477, h: 1500 },
  ],
  idea10: [
    { asin: "B0GR9L7F37", title: "Bamboo Folding Desk with Bookshelf for Small Spaces, Brown", w: 1200, h: 1500 },
    { asin: "B0GTNZ8LK2", title: "MUTUN 47 Inch Computer Desk with Hutch, Power Outlet and LED Strip", w: 1456, h: 1454 },
  ],
  idea11: [
    { asin: "B0FHTKV33D", title: "Pegboard Kit with Hooks, Bins and Accessories for Office Wall Organizing", w: 1500, h: 1395 },
    { asin: "B0HBP916B7", title: "Black Pegboard Wall Organizer with Scale Holder", w: 1086, h: 1448 },
  ],
  idea12: [
    { asin: "B0H33MYWHL", title: "Clear Acrylic Mobile Computer Desk, Rolling Laptop Table with Wheels", w: 1500, h: 1500 },
    { asin: "B0GV4BWN6T", title: "Marsail 37 x 22 Inch Glass Standing Desk with Drawer Storage, White", w: 1379, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "small-home-office-space-solutions-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "small-home-office-space-solutions", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-home-office-space-solutions", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A genuinely small space rules out most standard home office advice.</p>
<p>There's no room for a full desk, a separate storage cabinet and a reading chair. What actually works is furniture built around the space-saving mechanism itself, not just a smaller version of standard furniture.</p>
<p>These 12 solutions cover the real options.</p>
${photo("hero.png", "Small home office featuring creative space-saving solutions", 1152, 768, "hero")}

<h2>1. A Wall-Mounted Desk</h2>
<p>A desk fixed directly to the wall, with no legs touching the floor, frees up visual and physical space that a traditional desk can't.</p>
<p>This works especially well in a narrow hallway or an awkward nook that couldn't fit a freestanding desk at all.</p>
${photo("wall-mounted-1.png", "Wall-mounted desk maximizing space in a small home office", 683, 1024)}
${photo("wall-mounted-2.png", "Sleek wall-mounted desk design for compact workspaces", 683, 1024, "idea1")}

<h2>2. A Foldable Desk</h2>
<p>A desk that folds flat against the wall when not in use reclaims the room entirely outside of working hours.</p>
<p>This suits a genuinely multi-purpose room, where the office function needs to disappear completely when it's not needed.</p>
${photo("foldable.png", "Foldable desk offering flexibility in a small workspace", 683, 1024, "idea2")}

<h2>3. A Closet Office (Cloffice)</h2>
<p>Converting an underused closet into a compact office keeps the workspace fully contained and out of sight when the doors close.</p>
<p>This is one of the most complete space solutions on this list, since it borrows space that usually isn't doing much else.</p>
${photo("cloffice-1.png", "Closet transformed into a functional home office space", 683, 1024)}
${photo("cloffice-2.png", "Compact cloffice setup making use of unused closet space", 683, 1024, "idea3")}

<h2>4. A Ladder Desk</h2>
<p>A ladder-style desk, with shelves built into a slim vertical frame, combines a work surface and storage in one narrow footprint.</p>
<p>This works well against a wall with almost no depth to spare, where a standard desk-and-shelf combination wouldn't fit.</p>
${photo("ladder-desk-1.png", "Ladder desk combining work surface and vertical storage", 683, 1024)}
${photo("ladder-desk-2.png", "Space-saving ladder desk design for a small office", 683, 1024, "idea4")}

<h2>5. Vertical Wall Shelves</h2>
<p>Going up instead of out solves a huge amount of small-office storage without ever touching the floor space around the desk.</p>
<p>This is one of the cheapest, most flexible additions on this list, since shelving can be added incrementally as storage needs grow.</p>
${photo("vertical-shelves-1.png", "Vertical wall shelves adding storage without using floor space", 683, 1024)}
${photo("vertical-shelves-2.png", "Wall-mounted shelving maximizing a small office's vertical space", 683, 1024, "idea5")}

<h2>6. A Rolling Storage Cart</h2>
<p>A cart on wheels keeps supplies organized while staying fully mobile, tucking away under a desk or into a closet when not actively in use.</p>
<p>This suits anyone who needs supplies on hand during work hours but not visible the rest of the time.</p>
${photo("rolling-cart-1.png", "Rolling storage cart offering flexible organization options", 683, 1024)}
${photo("rolling-cart-2.png", "Mobile cart providing convenient small office storage", 683, 1024, "idea6")}

<h2>7. A Corner Desk</h2>
<p>Using the corner of a room, rather than a flat wall, claims space that would otherwise go completely unused.</p>
<p>This is one of the most space-efficient desk placements available, especially in a room with limited straight wall space.</p>
${photo("corner-desk.png", "Corner desk making efficient use of an often-overlooked space", 683, 1024, "idea7")}

<h2>8. A Murphy Desk</h2>
<p>A fold-down desk built into a wall unit, similar in spirit to a Murphy bed, disappears entirely when work is done for the day.</p>
<p>This is a bigger installation commitment than a simple foldable desk, but it integrates more seamlessly into the room's permanent design.</p>
${photo("murphy-desk.png", "Murphy desk folding seamlessly into the wall when not in use", 683, 1024, "idea8")}

<h2>9. A Slim Console Table as a Desk</h2>
<p>A narrow console table, originally meant for an entryway or hallway, works surprisingly well as a desk in a space too tight for standard desk depth.</p>
<p>This also tends to look more like furniture than office equipment, which helps it blend into a shared living space.</p>
${photo("console-table.png", "Slim console table doubling as a functional desk", 683, 1024, "idea9")}

<h2>10. A Multi-Functional Desk</h2>
<p>A desk that converts into a dining surface, or includes built-in storage for non-office items, earns its space by serving more than one role.</p>
<p>This matters most in a studio or combined-use room, where no single piece of furniture gets the luxury of a single purpose.</p>
${photo("multifunctional-desk.png", "Multi-functional desk serving multiple roles in a small space", 683, 1024, "idea10")}

<h2>11. A Pegboard for Organization</h2>
<p>A pegboard mounted above or beside the desk keeps tools, cords and supplies visible and accessible without taking up any desk or shelf space.</p>
<p>This is one of the most customizable storage solutions on this list, since the layout can change as needs shift.</p>
${photo("pegboard-1.png", "Pegboard organization system for a tidy small office", 683, 1024)}
${photo("pegboard-2.png", "Customizable pegboard storage keeping supplies within reach", 683, 1024, "idea11")}

<h2>12. A Transparent Desk</h2>
<p>An acrylic or glass desk visually takes up less space than a solid one, even at the exact same physical footprint.</p>
<p>This works best in a smaller, lighter room, where the desk's near-invisibility helps the whole space feel less crowded.</p>
${pinPhoto("transparent-desk.jpg", "Transparent acrylic desk creating an open, airy feel", 735, 920, "https://www.pinterest.com/pin/18788523442240091/", "transparent desk for small office", "idea12")}

<h2>Conclusion</h2>
<p>None of these 12 solutions require a dedicated room to work.</p>
<p>Pick the mechanism that matches the actual space available &mdash; wall-mounted, foldable, vertical, mobile &mdash; rather than trying to shrink standard office furniture to fit.</p>
<p>A small home office works when the furniture is built for the constraint, not just scaled down from something bigger.</p>
`;

module.exports = { body };
