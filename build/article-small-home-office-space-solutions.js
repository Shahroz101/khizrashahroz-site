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

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-home-office-space-solutions", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-home-office-space-solutions", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>`;
}

const body = `
<p>A genuinely small space rules out most standard home office advice.</p>
<p>There's no room for a full desk, a separate storage cabinet and a reading chair. What actually works is furniture built around the space-saving mechanism itself, not just a smaller version of standard furniture.</p>
<p>These 12 solutions cover the real options.</p>
${photo("hero.png", "Small home office featuring creative space-saving solutions", 1152, 768)}

<h2>1. A Wall-Mounted Desk</h2>
<p>A desk fixed directly to the wall, with no legs touching the floor, frees up visual and physical space that a traditional desk can't.</p>
<p>This works especially well in a narrow hallway or an awkward nook that couldn't fit a freestanding desk at all.</p>
${photo("wall-mounted-1.png", "Wall-mounted desk maximizing space in a small home office", 683, 1024)}
${photo("wall-mounted-2.png", "Sleek wall-mounted desk design for compact workspaces", 683, 1024)}

<h2>2. A Foldable Desk</h2>
<p>A desk that folds flat against the wall when not in use reclaims the room entirely outside of working hours.</p>
<p>This suits a genuinely multi-purpose room, where the office function needs to disappear completely when it's not needed.</p>
${photo("foldable.png", "Foldable desk offering flexibility in a small workspace", 683, 1024)}

<h2>3. A Closet Office (Cloffice)</h2>
<p>Converting an underused closet into a compact office keeps the workspace fully contained and out of sight when the doors close.</p>
<p>This is one of the most complete space solutions on this list, since it borrows space that usually isn't doing much else.</p>
${photo("cloffice-1.png", "Closet transformed into a functional home office space", 683, 1024)}
${photo("cloffice-2.png", "Compact cloffice setup making use of unused closet space", 683, 1024)}

<h2>4. A Ladder Desk</h2>
<p>A ladder-style desk, with shelves built into a slim vertical frame, combines a work surface and storage in one narrow footprint.</p>
<p>This works well against a wall with almost no depth to spare, where a standard desk-and-shelf combination wouldn't fit.</p>
${photo("ladder-desk-1.png", "Ladder desk combining work surface and vertical storage", 683, 1024)}
${photo("ladder-desk-2.png", "Space-saving ladder desk design for a small office", 683, 1024)}

<h2>5. Vertical Wall Shelves</h2>
<p>Going up instead of out solves a huge amount of small-office storage without ever touching the floor space around the desk.</p>
<p>This is one of the cheapest, most flexible additions on this list, since shelving can be added incrementally as storage needs grow.</p>
${photo("vertical-shelves-1.png", "Vertical wall shelves adding storage without using floor space", 683, 1024)}
${photo("vertical-shelves-2.png", "Wall-mounted shelving maximizing a small office's vertical space", 683, 1024)}

<h2>6. A Rolling Storage Cart</h2>
<p>A cart on wheels keeps supplies organized while staying fully mobile, tucking away under a desk or into a closet when not actively in use.</p>
<p>This suits anyone who needs supplies on hand during work hours but not visible the rest of the time.</p>
${photo("rolling-cart-1.png", "Rolling storage cart offering flexible organization options", 683, 1024)}
${photo("rolling-cart-2.png", "Mobile cart providing convenient small office storage", 683, 1024)}

<h2>7. A Corner Desk</h2>
<p>Using the corner of a room, rather than a flat wall, claims space that would otherwise go completely unused.</p>
<p>This is one of the most space-efficient desk placements available, especially in a room with limited straight wall space.</p>
${photo("corner-desk.png", "Corner desk making efficient use of an often-overlooked space", 683, 1024)}

<h2>8. A Murphy Desk</h2>
<p>A fold-down desk built into a wall unit, similar in spirit to a Murphy bed, disappears entirely when work is done for the day.</p>
<p>This is a bigger installation commitment than a simple foldable desk, but it integrates more seamlessly into the room's permanent design.</p>
${photo("murphy-desk.png", "Murphy desk folding seamlessly into the wall when not in use", 683, 1024)}

<h2>9. A Slim Console Table as a Desk</h2>
<p>A narrow console table, originally meant for an entryway or hallway, works surprisingly well as a desk in a space too tight for standard desk depth.</p>
<p>This also tends to look more like furniture than office equipment, which helps it blend into a shared living space.</p>
${photo("console-table.png", "Slim console table doubling as a functional desk", 683, 1024)}

<h2>10. A Multi-Functional Desk</h2>
<p>A desk that converts into a dining surface, or includes built-in storage for non-office items, earns its space by serving more than one role.</p>
<p>This matters most in a studio or combined-use room, where no single piece of furniture gets the luxury of a single purpose.</p>
${photo("multifunctional-desk.png", "Multi-functional desk serving multiple roles in a small space", 683, 1024)}

<h2>11. A Pegboard for Organization</h2>
<p>A pegboard mounted above or beside the desk keeps tools, cords and supplies visible and accessible without taking up any desk or shelf space.</p>
<p>This is one of the most customizable storage solutions on this list, since the layout can change as needs shift.</p>
${photo("pegboard-1.png", "Pegboard organization system for a tidy small office", 683, 1024)}
${photo("pegboard-2.png", "Customizable pegboard storage keeping supplies within reach", 683, 1024)}

<h2>12. A Transparent Desk</h2>
<p>An acrylic or glass desk visually takes up less space than a solid one, even at the exact same physical footprint.</p>
<p>This works best in a smaller, lighter room, where the desk's near-invisibility helps the whole space feel less crowded.</p>
${pinPhoto("transparent-desk.jpg", "Transparent acrylic desk creating an open, airy feel", 735, 920, "https://www.pinterest.com/pin/18788523442240091/", "transparent desk for small office")}

<h2>Conclusion</h2>
<p>None of these 12 solutions require a dedicated room to work.</p>
<p>Pick the mechanism that matches the actual space available &mdash; wall-mounted, foldable, vertical, mobile &mdash; rather than trying to shrink standard office furniture to fit.</p>
<p>A small home office works when the furniture is built for the constraint, not just scaled down from something bigger.</p>
`;

module.exports = { body };
