// Body content for "17 Desk Setup Configurations for How You Actually
// Work". Numbered idea-list format. Source photos are all AI-generated
// style with no Pinterest links, 1:1 with the 17 ideas, so none carry
// credit captions. Heavy topical overlap with the existing
// home-office-aesthetic-ideas (styles/moods) and home-office-setup-tips
// (ergonomic basics) articles, so this one is framed around workflow
// and use-case instead — which setup fits dual monitors, a hobby
// corner, frequent movement, a tight footprint — rather than aesthetic
// style. Rewritten from scratch in the site's calmer tone, short-line
// prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CQD3K8PJ", title: "TRALT Ergonomic Office Chair with Adjustable Lumbar Support, Mesh", w: 1500, h: 1500 },
    { asin: "B0F9X3FDYY", title: "HUANUO 32 x 19 Inch Small Electric Standing Desk, Light Walnut", w: 1258, h: 1500 },
  ],
  idea1: [
    { asin: "B07T5SY43L", title: "HUANUO FlowLift Dual Monitor Stand, Fully Adjustable Desk Mount", w: 1500, h: 1438 },
    { asin: "B0DSZVMRP7", title: "Huuger 63 x 24 Inch Desk with Power Outlets, Thick Desktop", w: 1500, h: 1065 },
  ],
  idea2: [
    { asin: "B0CP22DQQS", title: "Marsail Ergonomic Office Chair, High Back Mesh, Adjustable Lumbar", w: 1500, h: 1500 },
    { asin: "B0GZY5X7RS", title: "Everlasting Comfort Memory Foam Foot Rest for Under Desk", w: 1500, h: 1466 },
  ],
  idea3: [
    { asin: "B0F8JS4L73", title: "Height Adjustable Standing Desk Converter Keyboard Riser, 23.6 Inch, Black", w: 1500, h: 1365 },
    { asin: "B07XH8P34G", title: "Amazon Basics Anti-Fatigue Standing Mat, 3/4 Inch Thick, 32 x 20 Inch, Black", w: 1500, h: 933 },
  ],
  idea4: [
    { asin: "B09GTM8ZLW", title: "Armocity Industrial Corner Small Desk with Outlets for Small Spaces", w: 1493, h: 1500 },
    { asin: "B08PDSH538", title: "HOMCOM Foldable Wall Mounted Convertible Desk for Small Spaces, White", w: 1129, h: 1500 },
  ],
  idea5: [
    { asin: "B0B45ZH9M2", title: "Citylife 17 QT Craft Organizer Storage Bin with Lid, Marker Organizer", w: 1500, h: 1429 },
    { asin: "B0H22H8M97", title: "Armocity Small Folding Desk with Outlets, Fold-Out Murphy Craft Table", w: 1137, h: 1500 },
  ],
  idea6: [
    { asin: "B0CMSYL7Q1", title: "TEAMIX Wall Mounted Folding Table, Black Floating Desk for Small Spaces", w: 1500, h: 974 },
    { asin: "B0GVFPC7D9", title: "Vivelove Walnut Floating Shelves, 8 Inch Deep, 16 x 8 Inch, Set of 2", w: 1500, h: 1493 },
  ],
  idea7: [
    { asin: "B0FPC7X2ZF", title: "AUUGUU Artificial Potted Plants in Cement Pots for Shelf and Desk", w: 1254, h: 1016 },
    { asin: "B0C7C34T4W", title: "DINGTAI Rattan Desk Organizer, Tabletop Mail Holder", w: 1500, h: 1467 },
  ],
  idea8: [
    { asin: "B0BZ3GHM8N", title: "No-Drill Under Desk Cable Management Tray, Metal Mesh with Clamp Mount", w: 1500, h: 1447 },
    { asin: "B08LVSFN4X", title: "INIU 15W Fast Wireless Charger, Phone Charging Station with LED", w: 1001, h: 1246 },
  ],
  idea9: [
    { asin: "B08SK4DMHR", title: "BOHON LED Desk Lamp with USB Charging Port, 3 Color Modes, Dimmable, Black", w: 1500, h: 1500 },
    { asin: "B0BNBGZQ6B", title: "EXQ Home Turtle Shell Fleece Throw Blanket, Beige", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0C5QBH8NZ", title: "HCHQHS Adjustable 6 Tier Open Bookcase, Rustic Farmhouse Shelves", w: 671, h: 1500 },
    { asin: "B0GV76C59J", title: "Heavy Duty Oak Wood Sliding Library Ladder with 4 ft Rail, 108 Inch", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B0C33F1NLG", title: "Black Farmhouse Pendant Light, 12.5 Inch, 3 Pack", w: 1485, h: 1500 },
    { asin: "B0CC5G4M8F", title: "VEVOR 5-Tier Adjustable Storage Shelving Unit, 36 x 18 x 72 Inch, 2000 lbs", w: 1074, h: 1500 },
  ],
  idea12: [
    { asin: "B0B687J37D", title: "NOROCME 192 PCS Cable Management Kit, Wire Organizer Sleeves", w: 1500, h: 1486 },
    { asin: "B0DB217D82", title: "AFIING Large Desk Mat, 55 x 24 Inch, PU Leather Desk Pad", w: 1500, h: 1256 },
  ],
  idea13: [
    { asin: "B0CQ4Q4S3B", title: "Lufeiya White Desk with File Drawers, 47 Inch Reversible Computer Desk", w: 1426, h: 1124 },
    { asin: "B0CQLJ32TC", title: "MUXX.STIL Ergonomic Office Chair with Adjustable Lumbar Support and Flip-Up Armrest", w: 1500, h: 1500 },
  ],
  idea14: [
    { asin: "B0FNK42C4D", title: "Purple Desk Accessories Set with Organizer and Rotating Pen Holder", w: 1200, h: 1500 },
    { asin: "B0D7NYF22F", title: "YENHOME Emerald Green Peel and Stick Wallpaper, 17.7 x 118 Inch", w: 1500, h: 1500 },
  ],
  idea15: [
    { asin: "B08P5478JH", title: "Modern Designs Parma Small Writing Desk with Drawer, Black, 42 Inch", w: 1500, h: 1500 },
    { asin: "B0GY2V3QFK", title: "KBKBART 17 PCS Claude Monet Eclectic Wall Art Collage, Vintage Prints", w: 1500, h: 1215 },
  ],
  idea16: [
    { asin: "B0GCZWX3P6", title: "2 x 3 Mini Picture Frame, 3 Grid Clear Table Photo Frame", w: 1500, h: 1391 },
    { asin: "B0CNGCFFJM", title: "SUPEASY 3 Tier Desk Organizer with Handle and 3 Pen Holders", w: 1500, h: 1205 },
  ],
  idea17: [
    { asin: "B0F4R6XPCL", title: "Acacia Wood Desk Organizer Set with Sticky Note Holder", w: 1241, h: 1500 },
    { asin: "B0DJKSMV2T", title: "gianotter Dual Monitor Stand Riser with Drawer and 2 Pen Holders", w: 1500, h: 1129 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "desk-setup-configurations-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "desk-setup-configurations", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>The right desk setup isn't about picking a style first.</p>
<p>It's about matching the configuration to the actual work.</p>
<p>Someone running two monitors needs a different footprint than someone who stands half the day.</p>
<p>These 17 setups are organized around that idea &mdash; function first, look second.</p>
${photo("ergonomic.png", "Ergonomic home office chair paired with an adjustable standing desk", 576, 1024, "hero")}

<h2>1. Built for Dual Monitors</h2>
<p>Two screens change everything about how a desk needs to be laid out.</p>
<p>Width matters more than depth here &mdash; a wide, shallow desk keeps both monitors in easy reach.</p>
<p>Monitor arms free up the actual desk surface for everything else.</p>
<p>Centering the keyboard between the two screens, not under either one, keeps posture neutral through long sessions.</p>
${photo("dual-monitor.png", "Sleek modern home office setup with a dual-monitor desk configuration", 576, 1024, "idea1")}

<h2>2. Built Around Ergonomics First</h2>
<p>Comfort isn't a finishing touch here &mdash; it's the starting point.</p>
<p>An adjustable chair with real lumbar support changes how the whole day feels.</p>
<p>Monitor height at eye level, keyboard and mouse at elbow height, feet flat on the floor or a footrest.</p>
<p>Every other choice in the room gets built around getting those basics right.</p>
${photo("minimalist.png", "Modern minimalist home office with clean, uncluttered desk space", 576, 1024, "idea2")}

<h2>3. Built to Move</h2>
<p>Sitting all day isn't a requirement anymore.</p>
<p>A standing desk converter or a full sit-stand desk lets the body switch positions through the day.</p>
<p>An anti-fatigue mat makes standing sessions last longer without the discomfort.</p>
<p>Switching postures every hour or so does more for energy than caffeine does.</p>
${photo("standing-desk.png", "Contemporary home office with a height-adjustable standing desk", 576, 1024, "idea3")}

<h2>4. Built for a Tight Footprint</h2>
<p>Not every home has a spare room for a desk.</p>
<p>A compact corner desk or a wall-mounted fold-down version works in a space that can't spare much square footage.</p>
<p>Vertical storage picks up the slack that floor space can't provide.</p>
<p>A small footprint doesn't have to mean a cramped or unpleasant one.</p>
${photo("compact.png", "Well-organized compact home office setup in a small space", 576, 1024, "idea4")}

<h2>5. Built for a Side Hobby</h2>
<p>A desk doesn't always need to be about work emails and spreadsheets.</p>
<p>A corner set up for painting, sewing, journaling or another hobby deserves its own dedicated surface.</p>
<p>Bins and trays keep supplies contained without turning the space into visual clutter.</p>
<p>Having a spot that's purely for a hobby, separate from work, makes it easier to actually use it.</p>
${photo("creative-corner.png", "Organized crafting corner set up as a creative home office space", 576, 1024, "idea5")}

<h2>6. Built to Disappear Into the Wall</h2>
<p>A floating desk mounted directly to the wall skips the bulk of a traditional desk entirely.</p>
<p>No legs underneath means the floor stays open and the room feels less crowded.</p>
<p>This works especially well in a small bedroom or a shared living space.</p>
<p>Floating shelves above the desk pick up the storage a drawer unit would normally handle.</p>
${photo("floating-desk.png", "Minimalist floating desk setup mounted directly to the wall", 576, 1024, "idea6")}

<h2>7. Built With Nature Close By</h2>
<p>A desk near a window, with a few real or faux plants nearby, changes the whole feel of a workday.</p>
<p>Natural light reduces eye strain in a way no desk lamp fully replicates.</p>
<p>Wood tones and woven textures round out the feel without turning the space precious.</p>
<p>A view of something green, even a small one, makes long stretches at a desk easier to sit through.</p>
${photo("nature-inspired.png", "Serene nature-inspired home office with plants and natural light", 576, 1024, "idea7")}

<h2>8. Built to Keep the Tech Out of Sight</h2>
<p>A desk doesn't have to look like a server room to be fully wired.</p>
<p>Cable trays, wireless chargers and a dock for one-cable laptop hookup keep the tech functional without it taking over visually.</p>
<p>Smart lighting and a voice-controlled speaker add convenience without adding clutter.</p>
<p>The goal is a setup that works hard without looking like it's trying to.</p>
${photo("tech-savvy.png", "Futuristic tech-forward workspace with integrated smart devices", 576, 1024, "idea8")}

<h2>9. Built for Long, Comfortable Sessions</h2>
<p>Some work calls for a setup that feels more like a reading nook than an office.</p>
<p>A soft throw, a warm lamp, and a chair with real cushioning all make a multi-hour session easier to sit through.</p>
<p>This suits anyone doing deep, focused work that doesn't move fast.</p>
<p>Comfort here isn't a luxury add-on &mdash; it's what keeps the setup usable for the long stretch.</p>
${photo("cozy-inviting.png", "Serene and inviting home office space with warm, cozy styling", 576, 1024, "idea9")}

<h2>10. Built Around a Library Wall</h2>
<p>Floor-to-ceiling shelving behind the desk turns a workspace into something closer to a study.</p>
<p>Books double as both reference material and visual texture.</p>
<p>A rolling ladder is a nice touch for taller shelving, though not a requirement.</p>
<p>This setup rewards anyone who does a lot of reading or research as part of the job.</p>
${photo("library-combo.png", "Home office combined with a floor-to-ceiling library bookshelf wall", 576, 1024, "idea10")}

<h2>11. Built on Raw, Honest Materials</h2>
<p>Exposed brick, black metal and reclaimed wood all bring real texture to a desk setup.</p>
<p>This suits anyone who wants the room to feel a little more rugged than polished.</p>
<p>Industrial pendant lighting and metal shelving round out the look without much extra effort.</p>
<p>It photographs well, but it also just holds up to daily use.</p>
${photo("industrial.png", "Striking industrial-themed workspace with exposed materials", 576, 1024, "idea11")}

<h2>12. Built in One Consistent Tone</h2>
<p>A monochrome desk setup &mdash; one color family across the desk, chair and accessories &mdash; reads as deliberate rather than accidental.</p>
<p>Varying textures within that single tone keeps it from feeling flat.</p>
<p>This works especially well in a small space, where fewer competing colors make the room feel calmer.</p>
<p>It's a low-maintenance look that doesn't date quickly either.</p>
${photo("monochrome.png", "Stylish monochrome home office setup in a single tonal palette", 576, 1024, "idea12")}

<h2>13. Built to Stay Timeless</h2>
<p>A neutral desk setup skips trend-chasing almost entirely.</p>
<p>Soft whites, warm beiges and light woods make up most of the palette.</p>
<p>This kind of setup won't need a redo in a year or two the way a trend-driven one might.</p>
<p>It's a safe, steady choice for anyone who'd rather not think about redecorating often.</p>
${photo("neutral-timeless.png", "Tastefully curated neutral home office setup with a timeless feel", 576, 1024, "idea13")}

<h2>14. Built With Energy in Mind</h2>
<p>Not every desk setup needs to be calm and muted.</p>
<p>A bold accent wall or a few vibrant accessories can genuinely lift mood through a long workday.</p>
<p>This suits anyone whose best work comes from energy rather than quiet focus.</p>
<p>One or two strong color choices go further than filling the whole room with pattern.</p>
${photo("bold-vibrant.png", "Vibrant and energetic workspace with bold color accents", 576, 1024, "idea14")}

<h2>15. Built With a Creative Edge</h2>
<p>A desk doesn't have to look buttoned-up to be functional.</p>
<p>Mismatched art, an unconventional desk shape, or an unexpected color combination all bring personality to the space.</p>
<p>This suits anyone in a creative field who wants the workspace to reflect that.</p>
<p>A setup that looks a little unconventional often makes the work feel less routine too.</p>
${photo("artistic.png", "Captivating artistic home office setup with creative personal flair", 576, 1024, "idea15")}

<h2>16. Built With a Few Personal Touches</h2>
<p>A photo, a favorite mug, a small memento &mdash; these make a desk feel like it belongs to someone specific.</p>
<p>A sterile desk rarely inspires anyone to sit down at it.</p>
<p>Keeping the personal items to a handful avoids tipping into clutter.</p>
<p>These small additions do a lot for motivation on an ordinary Tuesday.</p>
${photo("personal-touches.png", "Cozy and personalized home office setup with meaningful decor", 576, 1024, "idea16")}

<h2>17. Built From What's Already Working</h2>
<p>The best configuration isn't always the newest one on this list.</p>
<p>Sometimes it's whatever setup is already in place, with one or two small adjustments.</p>
<p>A desk that gets used every day beats a perfectly styled one that doesn't.</p>
<p>Start with what's already working, then build from there.</p>
${productGrid("idea17")}

<h2>Final Thoughts</h2>
<p>None of these 17 configurations require starting from a blank room.</p>
<p>Most of them are a handful of changes away from whatever setup already exists.</p>
<p>Pick the one that matches how the work actually gets done, not just how the photos look.</p>
<p>The right desk setup is the one that gets used every single day.</p>
`;

module.exports = { body };
