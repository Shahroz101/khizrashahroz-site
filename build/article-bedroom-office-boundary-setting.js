// Body content for "20 Bedroom Office Setups That Actually Separate
// Work From Sleep". Numbered idea-list format. This source overlaps
// with the existing home-office-aesthetic-ideas (16 style categories)
// and home-office-setup-tips articles on at least 8 ideas directly
// (Scandinavian, industrial, monochrome, boho, floating desk, rustic,
// layered lighting, zoning). Rather than re-listing the same style
// vocabulary, this rewrite leans into the genuinely distinct angle the
// source's own title implies but never follows through on — drawing a
// real boundary between work and sleep within one shared room — since
// neither existing article addresses a desk sharing physical space
// with a bed specifically. Idea 18 (rustic desk) had no source photo,
// kept text-only. Source photos have no Pinterest links, so none
// carry credit captions. Rewritten from scratch in the site's calmer
// tone, short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B092VHNCLY", title: "IOTXY Simple Wooden Writing Desk, 47\" W PC Laptop Computer Table, Walnut", w: 1001, h: 1001 },
    { asin: "B0B96M9G6B", title: "Modern Home Office Chair Comfortable Upholstered Armless Desk Chair", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0C6J871JH", title: "rgcgeem White Wooden Desk Organizer Set, Minimalist Home Office Organization", w: 1357, h: 1500 },
    { asin: "B09YN7VSPS", title: "DDYURI Wooden Desk Organizer with 2 Drawers, Desktop Storage Drawers for Office", w: 802, h: 592 },
  ],
  idea2: [
    { asin: "B0DLBCSQF3", title: "36 Inch Solid Oak Floating Shelves, Natural 12 Inch Deep Wall Shelf Set of 2", w: 1500, h: 1500 },
    { asin: "B09TK7J2T7", title: "12x4-Inch Natural Oak Wood Floating Shelf for Wall Decor", w: 1436, h: 1366 },
  ],
  idea3: [
    { asin: "B009U9RLOA", title: "Prepac Floating Desk, Versatile Wall Mounted Desk for Small Spaces", w: 922, h: 899 },
    { asin: "B07VRZHG9H", title: "GIANTEX Wall Mounted Desk Floating Computer Desk, Writing Study Table W/3 Storage", w: 1074, h: 730 },
  ],
  idea4: [
    { asin: "B08QDGZJDH", title: "Folding Desk, Fold Down Wall Mounted Desk for Small Space, Black, Medium", w: 1389, h: 340 },
    { asin: "B0CRHM9MYY", title: "Fold Down Wall Mount Desk, Wall Mounted Drop Leaf Table", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B06VYHY9Q9", title: "Room/Dividers/Now Aluminum Ceiling Curtain Track Set, Curtain Rails Ceiling Mount", w: 1500, h: 1500 },
    { asin: "B07VMCGVDK", title: "TWOPAGES Room Divider Curtain Ceiling Track Kit with Blackout Curtain, xx-Large B", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0CM11PGSR", title: "Altsuceser Vanity Desk with Sliding Mirror and Lights, Doubles as a Writing Desk", w: 999, h: 999 },
    { asin: "B0D6YKVZ9N", title: "Furmax Vanity Desk with LED Mirror, Power Outlet, 7 Drawers Makeup Table", w: 1442, h: 1500 },
  ],
  idea7: [
    { asin: "B01GWF7194", title: "FrogTape 1358464 Multi-Surface Painting Tape, Green", w: 500, h: 500 },
    { asin: "B07BK7H2GS", title: "Glidden Interior Paint + Primer: Gray/Antique Silver, One Coat, Eggshell, 1-Gallon", w: 1500, h: 1473 },
  ],
  idea8: [
    { asin: "B0DG398QJV", title: "FUNKOCO White Small Writing Desk with Drawers, 40 Inch Writing Desk for Home Office", w: 1444, h: 1444 },
    { asin: "B0DRNBXLRL", title: "IZAARMX Computer Desk with 2 Drawers, Solid Wood Legs, 39 Inch, Walnut", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B07R22BG63", title: "Need Small Computer Desk, 31.5 Inch Sturdy Writing Table, Narrow, Black", w: 1500, h: 1481 },
    { asin: "B08CB1QK3W", title: "GIANTEX Wall Mounted Storage Cabinet, 2 Cube Floating Desk with Doors, White", w: 1500, h: 780 },
  ],
  idea10: [
    { asin: "B0C8NWQJP3", title: "Baxton Studio Bella Modern Bohemian Natural Brown Rattan Dining Chair", w: 875, h: 1344 },
    { asin: "B0CXSRT211", title: "Macrame Wall Hanging, Boho Tassel Knotting Decor, 47\"W x 25\"L", w: 1458, h: 1413 },
  ],
  idea11: [
    { asin: "B09Q8PLCLC", title: "Ytaoka Solid Wood Writing Desk, 47\" Mid-Century Modern Walnut Desk", w: 1321, h: 1214 },
    { asin: "B0CRNS9JXJ", title: "ALEEIK Mid-Century Modern Walnut Writing Desk with 2 Storage Drawers, 39 Inch", w: 1500, h: 1500 },
  ],
  idea12: [
    { asin: "B07L8HJZVK", title: "FOLUBAN Modern Home Office Desk, Rustic Wood and Metal Computer Desk", w: 1200, h: 1200 },
    { asin: "B0D2KMF3ST", title: "IBF 47\" Computer Desk, Home Office Work Writing Study Desk, Rustic Brown", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0BVM6SLY9", title: "vidaXL Desk, Solid Pinewood White Desk with Drawers, Compact Size Office Furniture", w: 993, h: 837 },
    { asin: "B0056ILD20", title: "IKEA MICKE Desk, White", w: 999, h: 652 },
  ],
  idea14: [
    { asin: "B074V35DGN", title: "Utopia Alley Collapsible Fold Down Desk Table with Storage Cabinet &amp; Shelves", w: 1184, h: 1388 },
    { asin: "B0GNZ6P2QT", title: "Fold Out Desk with Storage Hidden Desk Craft Storage Cabinet", w: 1024, h: 1024 },
  ],
  idea15: [
    { asin: "B0D1TNWPY8", title: "Tinamo Wood Monitor Stand with Drawer &amp; Storage, Walnut Color, Patented", w: 1461, h: 1500 },
    { asin: "B09FZ8MQB4", title: "Wood Monitor Stand Riser with Drawer, 15.7x9.4 Inch Computer Monitor Stand for Desk", w: 1500, h: 1283 },
  ],
  idea16: [
    { asin: "B08JPGWCC9", title: "SUPER DEAL 47 Inch Modern Computer Desk, Black", w: 1500, h: 1412 },
    { asin: "B00EF4G6FK", title: "BestOffice, Armless Office Chair, Black, with Lumbar Support", w: 574, h: 982 },
  ],
  idea17: [
    { asin: "B01N07P618", title: "PHIVE CL-1 Architect Desk Lamp, LED Clamp on Desk Light with Metal Swing Arm", w: 1445, h: 1395 },
    { asin: "B0G4WVNVF3", title: "Modern 25-Inch Ceramic Table Lamp with Linen Shade", w: 1082, h: 1061 },
  ],
  idea18: [
    { asin: "B0CNJM4TXD", title: "47\" Real Wood Computer Desk, Natural Solid Wood Home Office Desk", w: 1500, h: 1200 },
    { asin: "B0D6RH8Z93", title: "IBF Solid Wood Computer Desk, Rustic 55” Real Wood Home Office Work Desk", w: 1500, h: 1500 },
  ],
  idea19: [
    { asin: "B0CZHZ4QBD", title: "Fixwal Gallery Picture Frames Set, 15 Pack, MDF, Brown, 8x10, 5x7, 4x6", w: 1500, h: 1226 },
    { asin: "B0CY2GPMTY", title: "HAUS AND HUES White Oak Gallery Wall Frames 10 Pack", w: 1500, h: 1265 },
  ],
  idea20: [
    { asin: "B0D6VNQB4V", title: "SILKYDRY Wall Mounted Fold Out Convertible Desk with Storage Shelves, Black", w: 985, h: 1500 },
    { asin: "B08PDTSY7D", title: "HOMCOM Foldable Desk Wall Mounted Convertible Table for Small Spaces, Gray", w: 1064, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bedroom-office-boundary-setting-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bedroom-office-boundary-setting", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A desk sharing a room with a bed creates a problem no other home office setup has to deal with.</p>
<p>Without some kind of boundary, work bleeds into sleep and sleep bleeds into work.</p>
<p>The fix isn't picking a style &mdash; it's picking a way to separate the two functions, visually or physically.</p>
<p>These 20 setups each solve that boundary problem a different way.</p>
${photo("hero.png", "Warm and inviting bedroom workspace balancing comfort and function", 1024, 1024, "hero")}

<h2>1. A Truly Clutter-Free Desk</h2>
<p>A desk with nothing left on it at the end of the workday sends a clear signal that work has stopped.</p>
<p>This requires closed storage nearby, since the goal is an empty surface, not just a tidy one.</p>
<p>The visual cue matters as much as the actual tidiness &mdash; an empty desk reads as "off."</p>
<p>One of the simplest boundary-setting tricks on this entire list.</p>
${photo("minimalist-desk.png", "Serene and modern home office desk kept completely clutter-free", 576, 1024, "idea1")}

<h2>2. A Corner Defined by Floating Shelves</h2>
<p>Shelves above a desk create a visual frame that separates the work corner from the rest of the room without a wall.</p>
<p>This works especially well in a room too small for a full partition.</p>
<p>The shelving itself signals "this zone is different" the moment it's glanced at.</p>
<p>A low-cost way to create boundary without construction.</p>
${photo("cozy-corner-shelves.png", "Cozy and efficient home office nook with floating shelves", 576, 1024, "idea2")}

<h2>3. A Built-In Desk Along One Wall</h2>
<p>A desk built into a wall, rather than placed as standalone furniture, reads as part of the room's architecture rather than an intrusion into the bedroom.</p>
<p>This is a bigger project than most ideas here, but it creates the clearest physical boundary available short of a wall.</p>
<p>It also keeps the desk from visually competing with the bed for attention.</p>
<p>Worth it for anyone using the space as an office daily, not occasionally.</p>
${photo("built-in-desk.png", "Stylish modern bedroom featuring a sleek built-in desk along the wall", 576, 1024, "idea3")}

<h2>4. A Wall-Mounted Desk</h2>
<p>A fold-down or wall-mounted desk disappears when work is done, which is the most literal boundary-setting trick on this list.</p>
<p>This suits the smallest bedrooms, where any standalone desk eats into usable floor space permanently.</p>
<p>Closing it up at the end of the day is a genuine ritual, not just a styling choice.</p>
<p>A practical solution for a studio or very small bedroom.</p>
${photo("wall-mounted-desk.png", "Chic and minimalist bedroom setup with a wall-mounted desk", 576, 1024, "idea4")}

<h2>5. A Curtain-Covered Hideaway</h2>
<p>A curtain pulled across a desk nook hides the whole workspace from view the moment the day ends.</p>
<p>This is one of the cheapest, most dramatic boundary tricks available &mdash; a rod and a curtain panel, nothing more.</p>
<p>Out of sight genuinely helps with out of mind here.</p>
<p>Works in nearly any room, regardless of layout constraints.</p>
${photo("curtain-hideaway.png", "Cozy bedroom workspace cleverly concealed behind curtains", 576, 1024, "idea5")}

<h2>6. A Desk That Doubles as a Vanity</h2>
<p>A single surface that serves two different functions blurs the boundary in one sense, but it also means the desk never feels purely work-coded.</p>
<p>This suits a smaller room that genuinely can't spare two separate surfaces.</p>
<p>The trick is keeping work supplies in a drawer so the vanity function can take over visually at the end of the day.</p>
<p>A practical compromise rather than a clean separation.</p>
${photo("desk-vanity-combo.png", "Harmonious blend of functional desk and vanity space", 576, 1024, "idea6")}

<h2>7. Color Blocking to Mark the Zone</h2>
<p>Painting just the work corner a different color than the rest of the bedroom creates an instant visual boundary.</p>
<p>This costs very little beyond paint and doesn't require any furniture changes.</p>
<p>The color shift alone is often enough to signal "different mode" when stepping into that corner.</p>
<p>One of the more creative low-cost solutions on this list.</p>
${photo("color-blocking-zone.png", "Stylish contemporary bedroom office using color blocking to zone the space", 576, 1024, "idea7")}

<h2>8. Positioned for Natural Light</h2>
<p>Placing the desk near a window, while keeping the bed on the opposite or adjacent wall, naturally separates the two zones by orientation.</p>
<p>This isn't primarily about boundary-setting, but it has the side effect of creating one anyway.</p>
<p>Facing a window also makes the work corner feel less like it's intruding on the sleeping area.</p>
<p>A practical choice that happens to support the bigger goal.</p>
${photo("natural-light.png", "Serene and aesthetically pleasing workspace positioned near natural light", 576, 1024, "idea8")}

<h2>9. A Slim Desk With Overhead Storage</h2>
<p>A narrow desk profile takes up minimal floor space, keeping the work zone compact and contained rather than sprawling into the room.</p>
<p>Overhead storage keeps supplies up and out of the way rather than spreading across other surfaces.</p>
<p>This suits a room where the desk needs to stay visually small relative to the bed.</p>
<p>A footprint-conscious approach to the boundary problem.</p>
${photo("slim-desk-storage.png", "Beautifully designed home office setup with a slim desk and overhead storage", 576, 1024, "idea9")}

<h2>10. A Boho Corner With Its Own Mood</h2>
<p>Giving the work corner a distinctly different style &mdash; layered textures, warm lighting, plants &mdash; from the rest of the bedroom creates separation through mood rather than physical barriers.</p>
<p>This suits anyone who wants the work zone to feel inspiring rather than purely functional.</p>
<p>The contrast in feel does some of the same job a curtain or wall would.</p>
<p>A softer, more atmospheric approach to the same boundary problem.</p>
${photo("boho-corner.png", "Cozy and stylish bedroom corner transformed with boho creative energy", 576, 1024, "idea10")}

<h2>11. A Retro Mid-Century Workspace</h2>
<p>A distinct furniture style for the desk area, different from the bedroom's main aesthetic, reinforces that it's a separate zone.</p>
<p>Mid-century pieces in particular read as "office furniture" even in a bedroom setting.</p>
<p>This works well when the desk and chair are visually distinct from the bed and nightstands nearby.</p>
<p>Style contrast doing double duty as boundary-setting.</p>
${photo("midcentury-workspace.png", "Stunning mid-century modern bedroom workspace setup", 576, 1024, "idea11")}

<h2>12. Industrial Materials for Contrast</h2>
<p>Metal, raw wood and exposed hardware in the desk area contrast sharply with softer bedroom textiles elsewhere.</p>
<p>This creates an immediate material boundary the eye registers without needing a physical wall.</p>
<p>Suits anyone who wants the work zone to feel deliberately different, even a little utilitarian.</p>
<p>A strong style choice that also solves the separation problem.</p>
${photo("industrial-edge.png", "Stylish industrial-inspired desk setup with urban flair", 576, 1024, "idea12")}

<h2>13. Scandinavian Simplicity as a Reset</h2>
<p>A clean, pared-back desk area gives the eye a visual break from a busier bedroom.</p>
<p>Simplicity here functions as its own kind of boundary &mdash; the calm of the desk zone contrasts with whatever's happening in the rest of the room.</p>
<p>This suits a bedroom that already leans toward more texture or color elsewhere.</p>
<p>A quiet corner by design, not just by accident.</p>
${photo("scandinavian.png", "Serene and inviting Scandinavian-inspired workspace in a bedroom", 576, 1024, "idea13")}

<h2>14. A Secret Office Behind Cabinet Doors</h2>
<p>A desk that folds into a cabinet and disappears behind closed doors is the most complete boundary solution on this list short of a separate room.</p>
<p>This requires real furniture investment or custom carpentry.</p>
<p>Closing the cabinet doors is as close to leaving the office as a shared bedroom allows.</p>
<p>Worth it for anyone who struggles most with mentally switching off from work.</p>
${photo("secret-cabinet-office.png", "Chic and functional fold-out desk cleverly hidden in cabinet", 576, 1024, "idea14")}

<h2>15. A Desk Positioned for a View</h2>
<p>Facing the desk toward a window or a specific focal point, rather than toward the bed, keeps the two zones from visually overlapping.</p>
<p>Looking at a wall or a window while working, instead of at the bed, helps mentally separate the two functions.</p>
<p>This is a simple furniture arrangement choice rather than a purchase.</p>
<p>Often overlooked, but one of the easiest boundary tricks to apply immediately.</p>
${photo("desk-with-view.png", "Serene and inspiring home office positioned with a view", 576, 1024, "idea15")}

<h2>16. A Monochrome Workspace</h2>
<p>A single-tone desk area set against a different-toned bedroom creates a clear visual division between the two zones.</p>
<p>This works especially well in a smaller room where a hard physical boundary isn't practical.</p>
<p>The color discipline itself acts as the wall that doesn't exist.</p>
<p>A subtle but effective version of the color-blocking idea above.</p>
${photo("monochrome-setup.png", "Minimalist bedroom workspace featuring a monochrome color scheme", 576, 1024, "idea16")}

<h2>17. Layered Lighting for Mode-Switching</h2>
<p>Bright task lighting during work hours, swapped for a warm lamp in the evening, signals the shift from work mode to rest mode without moving a single piece of furniture.</p>
<p>This is one of the most practical boundary tools available, since it changes daily rather than staying fixed.</p>
<p>A dimmer or a second lamp makes the switch effortless.</p>
<p>Worth prioritizing even if nothing else on this list gets implemented.</p>
${photo("layered-lighting.png", "Warm and inviting bedroom workspace with layered lighting design", 576, 1024, "idea17")}

<h2>18. A Rustic Desk With Warm Textures</h2>
<p>Natural wood and warm textiles at the desk soften the line between "office furniture" and "bedroom furniture."</p>
<p>This suits a room that wants the work zone to feel integrated rather than separate.</p>
<p>It's the opposite approach to the industrial or monochrome ideas above &mdash; blending in instead of standing apart.</p>
<p>Works best when the rest of the bedroom shares a similar rustic warmth.</p>
${productGrid("idea18")}

<h2>19. A Gallery Wall That Belongs to the Work Zone</h2>
<p>Art or photos arranged specifically around the desk area, distinct from art elsewhere in the bedroom, marks that wall segment as its own territory.</p>
<p>This is a low-cost way to claim a boundary using something already likely on hand.</p>
<p>The content of the gallery can lean more "inspiration" than "personal," reinforcing the work association.</p>
<p>A decorative solution to a functional problem.</p>
${photo("gallery-wall.png", "Cozy and inspiring bedroom workspace with a dedicated gallery wall", 576, 1024, "idea19")}

<h2>20. A Foldaway Desk for the Tightest Rooms</h2>
<p>When there's genuinely no room to spare, a desk that folds completely flat against the wall removes the boundary problem by removing the desk itself when not in use.</p>
<p>This suits the smallest bedrooms, including dorm-style or studio setups.</p>
<p>The ritual of folding it away at day's end does real psychological work, not just physical.</p>
<p>The most literal "out of sight" solution on this entire list.</p>
${photo("foldaway-desk.png", "Cozy and stylish small bedroom featuring a smart foldaway desk", 576, 1024, "idea20")}

<h2>Final Thoughts</h2>
<p>A bedroom office doesn't need a separate room to actually separate work from rest.</p>
<p>Physical boundaries (a cabinet, a curtain, a fold-away desk), visual ones (color, style contrast, lighting) and ritual ones (closing a cabinet, dimming a lamp) all work toward the same goal.</p>
<p>Pick whichever fits the room's actual size and budget, not just the one that photographs best.</p>
<p>The real measure of success isn't how the setup looks &mdash; it's whether work actually stops feeling like it when the day ends.</p>
`;

module.exports = { body };
