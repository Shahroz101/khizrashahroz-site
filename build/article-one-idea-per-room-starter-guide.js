// Body content for "One Decor Idea Per Room: A Starter Guide for a
// Whole-Home Refresh". Numbered idea-list format, 15 ideas across 8
// rooms, matching the source 1:1. Several individual ideas here
// overlap with the site's existing deep-dive room articles (open
// shelving, dining centerpieces, entryway tables, kids' room decor,
// etc.), so this rewrite leans into the cross-room "pick one thing
// per room" sampler framing — a quick starting point across the whole
// home — rather than repeating any single room's full idea list.
// Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B083WMS4P4", title: "YCOLL Throw Pillow Covers, 18 x 18 Inch, Set of 4, Modern Linen Fabric", w: 1500, h: 1472 },
    { asin: "B0HCB1BY54", title: "Matte Ceramic Vase Set of 3, Hand Textured, Cream White", w: 1500, h: 1500 },
  ],
  livingArt: [
    { asin: "B0GDZWTKX9", title: "Large Tree of Life Canvas Wall Art, 20 x 40 Inch", w: 1500, h: 1500 },
    { asin: "B0H33GDPR4", title: "Troartos Large Neutral Modern 3D Textured Wall Art, 3 Piece Set", w: 1500, h: 1500 },
  ],
  livingRug: [
    { asin: "B0FQ35CSFL", title: "Bedsure 8 x 10 Faux Wool Area Rug, Machine Washable, Beige", w: 1500, h: 1500 },
    { asin: "B0HCNHMKXX", title: "YIHOUSE 6 x 9 Boho Modern Washable Area Rug, Non-Slip", w: 1293, h: 1500 },
  ],
  kitchenShelves: [
    { asin: "B0GSPD4GP9", title: "upsimples 23.6 Inch Long Floating Shelves, Set of 2, Rustic Brown", w: 1012, h: 937 },
    { asin: "B08FXVTZGN", title: "LEOPO 12 Inch Floating Shelf Brackets, 6 Pack, Heavy Duty", w: 1473, h: 1500 },
  ],
  kitchenPendant: [
    { asin: "B0F1T6Z2R2", title: "Modern 3 Pack Black and Gold Pendant Lights for Kitchen Island", w: 1200, h: 1373 },
    { asin: "B09ZV21LXD", title: "CASAMOTION Kitchen Island Pendant Lights, Gold, Clear Art Glass, 2 Pack", w: 1319, h: 1500 },
  ],
  diningGallery: [
    { asin: "B0GD6BBWDP", title: "Fixwal Gallery Wall Picture Frames Set, 15 Pack, Soft Earth Tones", w: 1500, h: 1247 },
    { asin: "B0H6SHZJ3Y", title: "Heavy Duty Double Sided Mounting Tape, Nano Adhesive, 16.5 Ft", w: 1500, h: 1500 },
  ],
  diningCenterpiece: [
    { asin: "B0D3HH27MW", title: "YMXYJM Large Decorative Bowl, Modern Handcrafted Ribbed Centerpiece", w: 1500, h: 868 },
    { asin: "B0CLB6BWQQ", title: "PHOSPHOR Glass Hurricane Candle Holders for Pillar Candles, Clear Cylinder Centerpiece", w: 1500, h: 1500 },
  ],
  bedroomBedding: [
    { asin: "B01IMZLNBE", title: "Simple and Opulence 100% Linen Duvet Cover Set, 3 Piece, Natural Flax", w: 1500, h: 1500 },
    { asin: "B088WCYBL6", title: "Euro Sham Covers, 26 x 26 Inch, Set of 2, 600 Thread Count Egyptian Cotton, White", w: 1024, h: 1024 },
  ],
  bedroomNightstands: [
    { asin: "B0DFCLXCHM", title: "Reaketon 20 Inch Modern Ceramic Table Lamps, Set of 2, White", w: 1500, h: 1500 },
    { asin: "B0H41NK5RD", title: "Sweetcrispy Nightstands Set of 2 with Storage Drawers, Small Bedside Tables", w: 1500, h: 1179 },
  ],
  bathroomSpa: [
    { asin: "B0H8PFHNZH", title: "Teak Expandable Bathtub Tray Caddy, 28.5 to 40 Inch", w: 1500, h: 1319 },
    { asin: "B07G9LQFJ8", title: "White Classic Luxury Bath Towel Set of 8, 100% Turkish Cotton", w: 1500, h: 1386 },
  ],
  bathroomMirror: [
    { asin: "B0DQK935GM", title: "Large Round Bathroom Wall Mirror, Silver Frame, 30 Inch", w: 1500, h: 1500 },
    { asin: "B0H9RZ39YV", title: "WallBeyond Arched Vintage Vanity Mirror, 24 x 36 Inch, Ornate Antique Frame", w: 1500, h: 1500 },
  ],
  officeDesk: [
    { asin: "B0DRJJ1CSK", title: "13-in-1 Office Desk Organizer Set with Accessories", w: 1500, h: 1490 },
    { asin: "B0G2RTY746", title: "WALI Adjustable Monitor Stand Riser for Desk, Holds up to 44 lbs", w: 1500, h: 1336 },
  ],
  officeMotivation: [
    { asin: "B0BV6L58QW", title: "DOLLAR BOSS Double-Sided Linen and Cork Bulletin Board, 16 x 12 Inch", w: 997, h: 1500 },
    { asin: "B0GK26CG5J", title: "Framed Motivational Canvas Wall Art, Set of 3, Modern Office Decor", w: 1500, h: 1499 },
  ],
  entrywayTable: [
    { asin: "B0DRNZ5HG2", title: "ChooChoo 70.9 Inch Long Console Table for Entryway, 2-Tier", w: 1400, h: 1400 },
    { asin: "B0FD9D3PGY", title: "HOOBRO 29.5 Inch 5-Tier Narrow Console Table for Entryway", w: 1151, h: 1500 },
  ],
  entrywayWall: [
    { asin: "B0972VJW8H", title: "Frameless Oval Beveled Wall Mirror, 20 x 28 Inch", w: 1059, h: 1500 },
    { asin: "B0HF7YHSSZ", title: "Large Macrame Wall Hanging, 31.5 x 31.5 Inch, Boho Beige", w: 1254, h: 1254 },
  ],
  kidsDecals: [
    { asin: "B0H2YSLQSX", title: "Cloud Wall Decals, 8 Sheets, 32 Pieces, Vinyl Peel and Stick", w: 1500, h: 1500 },
    { asin: "B0FCDKGR74", title: "Jungle Animals Wall Decals for Kids Bedroom, Nursery and Playroom", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "one-idea-per-room-starter-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "one-idea-per-room-starter-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A whole-home refresh doesn't have to mean redesigning every room at once.</p>
<p>Picking just one meaningful change per room is enough to shift how the entire house feels, without the overwhelm of a full top-to-bottom project.</p>
<p>These 15 ideas cover one highest-impact starting point for eight different rooms &mdash; a sampler to pull from, not a checklist to finish in a weekend.</p>
${photo("hero.jpeg", "Harmonious home decor collage showcasing ideas for every room", 1152, 768, "hero")}

<h2>Living Room: Start With Wall Art</h2>
<p>A single bold piece of art does more to set a living room's tone than almost any other single change.</p>
<p>Scale matters more than subject matter here &mdash; one confident piece reads better than several small ones competing for attention.</p>
${photo("living-room-art.png", "Bold wall art making a statement in a modern living room", 576, 1024, "livingArt")}

<h2>Living Room: Or a Textured Rug</h2>
<p>If the walls are already settled, a textured rug is the next highest-impact change &mdash; it grounds the furniture and adds warmth underfoot.</p>
<p>Layering a smaller patterned rug over a larger neutral one adds depth without committing to a full room redo.</p>
${photo("living-room-rugs.png", "Textured rug adding cozy comfort to a living room", 576, 1024, "livingRug")}

<h2>Kitchen: Try Open Shelving</h2>
<p>Swapping even one upper cabinet for open shelving changes how the whole kitchen feels, giving it a lighter, more collected look.</p>
<p>This also doubles as a display opportunity for dishware that would otherwise stay hidden behind cabinet doors.</p>
${photo("kitchen-shelves.png", "Open shelving creating a stylish display in a kitchen", 576, 1024, "kitchenShelves")}

<h2>Kitchen: Or Upgrade the Island Lighting</h2>
<p>A set of statement pendants over the island does more for the kitchen's overall mood than almost any other single fixture change.</p>
<p>This is a relatively contained project &mdash; a few fixtures, not a full rewiring job &mdash; with an outsized visual payoff.</p>
${photo("kitchen-pendant.png", "Luxe pendant lighting glowing over a kitchen island", 576, 1024, "kitchenPendant")}

<h2>Dining Room: Build a Gallery Wall</h2>
<p>A gallery wall gives the dining room a story to tell, turning a functional space into one with real personality.</p>
<p>A consistent frame style across the collection keeps a mix of art and photos feeling curated rather than cluttered.</p>
${photo("dining-gallery-wall.png", "Gallery wall telling a personal story in a dining room", 576, 1024, "diningGallery")}

<h2>Dining Room: Or Just Fix the Centerpiece</h2>
<p>An empty or forgettable dining table centerpiece is an easy, low-cost fix with real visual payoff.</p>
<p>A seasonal arrangement, a simple bowl of fruit, or a cluster of candles all do more work than an empty table ever will.</p>
${photo("dining-centerpiece.png", "Seasonal centerpiece elevating a dining table's presentation", 576, 1024, "diningCenterpiece")}

<h2>Bedroom: Layer the Bedding</h2>
<p>Layered bedding &mdash; a duvet, a throw, a few well-chosen pillows &mdash; brings a hotel-like feel into the bedroom for a relatively small investment.</p>
<p>This is one of the easiest high-impact changes on this entire list, since it requires no furniture or structural change at all.</p>
${photo("bedroom-bedding.png", "Layered bedding creating a hotel-like feel in the bedroom", 576, 1024, "bedroomBedding")}

<h2>Bedroom: Or Upgrade the Nightstands</h2>
<p>A nightstand that's actually styled &mdash; a lamp, a small stack of books, one considered object &mdash; does more than a bare surface ever will.</p>
<p>This is a small, contained project that still changes the whole room's sense of being finished.</p>
${photo("bedroom-nightstands.png", "Styled nightstand bringing a finished look to the bedroom", 576, 1024, "bedroomNightstands")}

<h2>Bathroom: Make It Feel Like a Spa</h2>
<p>Fluffy towels, a simple tray of bath products, and a bit of greenery go a long way toward a spa-like feel, with zero remodeling required.</p>
<p>This works in any bathroom, regardless of size or existing fixtures &mdash; it's purely a styling change.</p>
${photo("bathroom-spa.png", "Spa-like bathroom styling achieved without a full remodel", 576, 1024, "bathroomSpa")}

<h2>Bathroom: Or Add a Statement Mirror</h2>
<p>Swapping a builder-grade mirror for a statement piece changes the whole room's character more than almost any other single bathroom update.</p>
<p>A round or arched shape softens a bathroom full of straight lines and hard surfaces.</p>
${photo("bathroom-mirror.png", "Statement mirror transforming a modern bathroom's character", 576, 1024, "bathroomMirror")}

<h2>Home Office: Build a Desk Setup That Fits</h2>
<p>A desk setup that actually reflects personal taste &mdash; not just whatever came with the furniture &mdash; makes the whole room feel more motivating to work in.</p>
<p>This is worth revisiting even in an already-furnished office, since the setup matters more than the furniture itself.</p>
${photo("office-desk.png", "Personalized desk setup fitting a home office's character", 576, 1024, "officeDesk")}

<h2>Home Office: Or Add Decor That Actually Motivates</h2>
<p>A vision board, a meaningful quote, or a piece of art tied to an actual goal does more for daily motivation than generic office decor.</p>
<p>This works best when it's specific to the person using the space, not a one-size-fits-all office poster.</p>
${photo("office-motivation.png", "Motivational decor supporting focus in a home office corner", 576, 1024, "officeMotivation")}

<h2>Entryway: Add a Wood Console Table</h2>
<p>A simple wood table at the entrance gives guests somewhere to land and gives the whole space a sense of welcome it might be missing.</p>
<p>This also solves a practical problem &mdash; somewhere for keys, mail and bags to go &mdash; alongside the style upgrade.</p>
${photo("entryway-table.png", "Welcoming wood console table anchoring a stylish entryway", 576, 1024, "entrywayTable")}

<h2>Entryway: Or Add Considered Wall Decor</h2>
<p>A single intentional piece &mdash; a mirror, a woven hanging, a piece of art &mdash; keeps the entryway from feeling random or unfinished.</p>
<p>This works well paired with the console table idea above, or completely on its own in a smaller entryway.</p>
${photo("entryway-wall-decor.png", "Thoughtful wall decor giving an entryway real character", 576, 1024, "entrywayWall")}

<h2>Kids' Room: Try Wall Decals</h2>
<p>Wall decals bring color and personality into a kids' room without the commitment of paint, and they're easy to swap out as taste changes over the years.</p>
<p>This is one of the most flexible ideas on the entire list &mdash; low-cost, low-commitment, and genuinely kid-approved.</p>
${photo("kids-room-decals.png", "Playful wall decals growing with a child's changing tastes", 576, 1024, "kidsDecals")}

<h2>Final Thoughts</h2>
<p>None of these 15 ideas require tackling the whole house at once.</p>
<p>Pick the room that bothers the most right now, choose one idea from this list, and let the rest follow over time.</p>
<p>A home refreshed one room at a time still adds up to a completely different-feeling house.</p>
`;

module.exports = { body };
