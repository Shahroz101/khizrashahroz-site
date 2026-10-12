// Body content for "How to Style a Home Office Around a Black Desk".
// Guide format, matching the source's 9 content sections. Distinct
// from the site's 5 existing home office articles (general setup
// tips, aesthetic ideas, productive workspace, desk budget tiers,
// wall color guide) — this is anchor-piece-driven styling
// specifically, building the whole room around one statement furniture
// choice rather than general principles or color alone. Source photos
// have no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0F7LDVTQB", title: "IBF Black Office Desk, Modern Wooden Metal Computer Desk in Office 47 Inch", w: 1500, h: 1500 },
    { asin: "B0BPD91SCL", title: "47 Inch Computer Desk, Modern Simple Style for Home Office", w: 1500, h: 1325 },
  ],
  deskPersonality: [
    { asin: "B07R22BG63", title: "Need Small Computer Desk, 31.5 Inch Sturdy Writing Table, Narrow, Black", w: 1500, h: 1481 },
    { asin: "B0D2KBKX11", title: "IBF Black Computer Desk, 47\" Simple Work Desk for Home Office, Black Oak", w: 1500, h: 1500 },
  ],
  palette: [
    { asin: "B01DB5BWOI", title: "Need 47 inch Computer Desk, Teak Tabletop, Black Metal Frame, Modern Simple", w: 1500, h: 1348 },
    { asin: "B08ZSXD1BR", title: "Coferset 2 Pack Small Faux Eucalyptus Potted Plants, Sage Green", w: 1500, h: 1396 },
  ],
  lighting: [
    { asin: "B083Z31X6N", title: "LED Architect Desk Lamp, Metal Swing Arm Dimmable Task Lamp", w: 1472, h: 1484 },
    { asin: "B08JLG1DDK", title: "LED Desk Lamp, Metal Swing Arm Desk Lamp with Clamp, Eye-Caring Architect Desk Light", w: 1500, h: 1399 },
  ],
  storage: [
    { asin: "B088SMV8JS", title: "Basicwise Large Wall Mounted Computer Cabinet Floating Hutch, White", w: 1500, h: 710 },
    { asin: "B08XXJVH28", title: "Vintage 5-Drawer Wooden Desk Organizer, Craft Storage, Rustic Shelf Drawer", w: 1494, h: 1500 },
  ],
  chair: [
    { asin: "B0CQD3K8PJ", title: "TRALT Office Chair, Ergonomic Desk Chair with Adjustable Lumbar Support", w: 1500, h: 1500 },
    { asin: "B008OTQ864", title: "Flash Furniture Mid-Back Black Mesh Multifunction Executive Swivel Ergonomic Office Chair", w: 912, h: 1500 },
  ],
  personality: [
    { asin: "B0BQ3VLLWY", title: "Natural Wood Knot and Black Wood Knot Decor for Coffee Table", w: 1500, h: 976 },
    { asin: "B0DG5L3WQ5", title: "Dahey Faux Eucalyptus Plants in Small White Vase", w: 1387, h: 1500 },
  ],
  rug: [
    { asin: "B0FMS3M8C4", title: "Craft Trade Rectangle Braided Jute Area Rug, Natural Fiber, 5x7 ft", w: 1024, h: 1024 },
    { asin: "B0H44L61XR", title: "Washable Jute Area Rug 5x7, Non Slip, Natural Fiber", w: 1500, h: 1500 },
  ],
  wallDecor: [
    { asin: "B0FR949HK9", title: "Large Framed Neutral Abstract Wall Art Set of 2 for Living Room, 24x36 In", w: 1500, h: 1500 },
    { asin: "B0FR8MCS47", title: "Blue Abstract Textured Canvas Wall Art, Large", w: 1500, h: 1500 },
  ],
  accessories: [
    { asin: "B0GSS8WSS1", title: "Wood Desk Organizer with Drawer Three Stackable Storage Drawers", w: 1098, h: 1432 },
    { asin: "B0GSVQJN27", title: "JIARI Glass Pen Holder Cup for Desk, Pencil Cup Holder", w: 1145, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "black-desk-home-office-styling-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "black-desk-home-office-styling", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A black desk is a decision, not just a furniture purchase.</p>
<p>Once it's in the room, everything else gets styled in relation to it &mdash; which makes it worth treating as the anchor it actually is, rather than styling around it as an afterthought.</p>
<p>This covers how to actually build the room from that anchor.</p>
${photo("hero.png", "Modern home office centered around a sleek black desk", 1248, 832, "hero")}

<h2>Start With the Desk's Personality</h2>
<p>A sleek, minimal black desk reads differently than a heavier, more industrial one, and the rest of the room should take its cues from which version is actually in the space.</p>
<p>This is worth identifying clearly before any other styling decision, since it determines whether the room leans modern, industrial, or something else entirely.</p>
${photo("desk-personality-1.png", "Sleek black desk setting the tone for the whole room", 574, 1024)}
${photo("desk-personality-2.png", "Black desk style defining the home office's overall direction", 574, 1024, "deskPersonality")}

<h2>Choose a Palette That Actually Works With Black</h2>
<p>Warm neutrals, soft whites and natural wood tones all keep a black desk from feeling cold or overly stark.</p>
<p>A black desk pairs especially well with one or two accent colors, rather than an open-ended palette competing with its already-strong presence.</p>
${photo("color-palette.png", "Thoughtful color palette complementing a black desk's bold presence", 574, 1024, "palette")}

<h2>Light It Well</h2>
<p>A black desk absorbs light rather than reflecting it, which makes good task lighting more important here than with a lighter desk finish.</p>
<p>A statement desk lamp also does double duty, adding both function and a design moment that works with the desk's already strong presence.</p>
${photo("lighting.png", "Statement lighting illuminating a black desk workspace effectively", 574, 1024, "lighting")}

<h2>Add Storage That Still Looks Good</h2>
<p>Storage in a complementary dark tone or a contrasting warm wood both work, as long as the choice is deliberate rather than mismatched.</p>
<p>Closed storage keeps the desk itself as the visual focus, rather than competing with open shelving nearby.</p>
${photo("storage.png", "Stylish storage solutions keeping the black desk as the focal point", 574, 1024, "storage")}

<h2>Pick a Chair That Doesn't Undercut the Look</h2>
<p>A chair that matches the desk's general style &mdash; sleek with sleek, industrial with industrial &mdash; keeps the whole setup feeling intentional rather than mismatched.</p>
<p>This is worth prioritizing alongside comfort, since an ill-fitting chair style can undo much of the desk's visual impact.</p>
${photo("chair.png", "Well-matched chair style complementing the black desk's aesthetic", 574, 1024, "chair")}

<h2>Add Personality Without Clutter</h2>
<p>A few considered objects &mdash; a plant, a small sculpture, a meaningful item &mdash; add warmth without competing with the desk's strong presence.</p>
<p>Restraint matters more here than in a lighter, more neutral office, since a black desk already carries significant visual weight on its own.</p>
${photo("personality.png", "Personal touches adding warmth without overwhelming the space", 574, 1024, "personality")}

<h2>Let the Rug Tie It Together</h2>
<p>A rug in a complementary tone grounds the black desk and the rest of the furniture into one cohesive scene, rather than leaving pieces feeling separately placed.</p>
<p>A textured, natural-fiber rug in particular softens the room's overall hard edges.</p>
${photo("rug.png", "A grounding rug tying the black desk setup together cohesively", 574, 1024, "rug")}

<h2>Choose Wall Decor Thoughtfully</h2>
<p>Art or decor that complements the desk's tone and style &mdash; rather than fighting it with clashing colors or an unrelated aesthetic &mdash; keeps the whole wall working with the room instead of against it.</p>
<p>One or two considered pieces generally outperform a busier wall arrangement in a room already anchored by a strong piece of furniture.</p>
${photo("wall-decor.png", "Thoughtful wall decor complementing the black desk's established style", 574, 1024, "wallDecor")}

<h2>Accessorize With Intention</h2>
<p>Desk accessories in materials that echo the room's broader palette &mdash; brass, warm wood, matte ceramic &mdash; tie the smallest details back into the overall look.</p>
<p>This final layer is what makes the whole setup read as considered down to the last object, not just the big furniture pieces.</p>
${photo("accessories.png", "Intentional desk accessories completing the styled black desk setup", 574, 1024, "accessories")}

<h2>The Black Desk as the Hero</h2>
<p>None of these choices need to compete with the desk for attention.</p>
<p>Start with the palette and lighting, since both directly respond to the desk's dark tone, then layer in storage, chair and the smaller details from there.</p>
<p>A black desk works best as the room's hero, with everything else deliberately supporting it.</p>
`;

module.exports = { body };
