// Body content for "A Mid-Century Living Room Makeover, Step by
// Step". Numbered guide format, heavily condensed and restructured
// from an 18-section, 34-subsection source into a clear project
// sequence. Third of five mid-century sources — distinct from
// mid-century-2026-trends (new-vs-timeless) and
// mid-century-living-room-value (buyer psychology/furniture
// investment). This one is framed entirely as a renovation project
// workflow (plan, then execute in order), similar in spirit to
// bathroom-remodel-planning-steps, rather than a topic-by-topic style
// guide. Source reused two photos twice each across sections; each
// kept only on first appearance. No Pinterest pins in source, so no
// photo credits.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DDWYW9N5", title: "VASAGLE Round Side Table with Lower Shelf, End Table for Small Spaces", w: 1500, h: 1358 },
    { asin: "B0GPWT17V3", title: "Lexicon Mid Century Modern Accent Chair with Solid Wood Armrests and Legs", w: 1500, h: 1500 },
  ],
  step1: [
    { asin: "B0G1GZT5XM", title: "Hexagon Cork Bulletin Board Tiles, 10 Pack, Felt Board with 25 Push Pins", w: 1447, h: 1500 },
    { asin: "B0C33RXLR6", title: "Taja Budget Planner, Undated Monthly Budget Book with Expense Tracker", w: 1500, h: 1475 },
  ],
  step2: [
    { asin: "B08RDHXWSW", title: "SHANJUE 5 Inch Wood Square Sofa Legs, 4 Pcs, Replacement Legs for Chairs and Sofas", w: 1073, h: 1068 },
    { asin: "B0BRKNQ9WY", title: "Zesthouse Natural Rattan Dining Chairs, Set of 2, Modern Cesca Style Kitchen Chair", w: 1500, h: 1291 },
  ],
  step3: [
    { asin: "B07BDWC1TQ", title: "Glidden Interior Paint and Primer, Greige Oatmeal, One Coat, Eggshell, 1 Quart", w: 1500, h: 1471 },
    { asin: "B0D3XD84GW", title: "Aegero Corduroy Decorative Throw Pillow Covers, Pack of 2, 18 x 18 Inch, Yellow", w: 1500, h: 1500 },
  ],
  step4: [
    { asin: "B0GVJKNPSG", title: "IDEALHOUSE 65 Inch Mid Century Modern Loveseat Sofa, Green", w: 1500, h: 1500 },
    { asin: "B0D69D4JMY", title: "Small Round Nesting Coffee Table Set, 2 Pcs, Walnut Mid Century Modern", w: 1500, h: 1500 },
  ],
  step5: [
    { asin: "B0C693K8QL", title: "Yaheetech Mid Century Accent Chair, Retro Brown, for Living Room", w: 1500, h: 1482 },
    { asin: "B0HJGNP248", title: "BELLEZE Simms 35 Inch Sideboard Buffet Cabinet, Brown Walnut", w: 1500, h: 1500 },
  ],
  step6: [
    { asin: "B0DDGY2RHY", title: "8 x 10 Modern Abstract Washable Area Rug, Beige, for Living Room", w: 1500, h: 1500 },
    { asin: "B0D7PGTDBT", title: "VINGLI Chenille Upholstered Accent Chairs, Set of 2", w: 1500, h: 1500 },
  ],
  step7: [
    { asin: "B0GGBNFTFB", title: "Modern Gold Single Pendant Light with Bubble Glass, Small Globe", w: 1500, h: 1498 },
    { asin: "B0BWJ2FMSZ", title: "Orange Arc Floor Lamp for Living Room, Mid Century Modern, Marble Base", w: 1254, h: 1254 },
  ],
  step8: [
    { asin: "B08FT63V5W", title: "LYHome Merino Wool Blanket, Warm and Soft Throw for Bed and Couch, 55 x 79 Inch", w: 1500, h: 1323 },
    { asin: "B084ZN3WT6", title: "BRAWARM Faux Leather Lumbar Throw Pillow Cover, 12 x 20 Inch, Brown", w: 1271, h: 734 },
  ],
  step9: [
    { asin: "B0DR5FNR6D", title: "Large Framed Neutral Abstract Wall Art Set of 2, 24 x 36 Inch, for Living Room", w: 1500, h: 1500 },
    { asin: "B0FCLXXNZ9", title: "CEMABT Modern Nordic Boho Ceramic Vase Set, Beige Matte, for Living Room and Bookshelf", w: 1500, h: 1371 },
  ],
  mistakes: [
    { asin: "B08T12BCMW", title: "REALINN Wood Furniture Repair Kit, 28 Piece Set with Touch-Up Markers", w: 1500, h: 1414 },
    { asin: "B07R9FZHLQ", title: "Globe Electric 72 Inch Floor Lamp with Adjustable Reading Light", w: 288, h: 1406 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "mid-century-makeover-process-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "mid-century-makeover-process", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A mid-century makeover goes smoothly when it follows an actual sequence, not when every decision gets made at once.</p>
<p>This walks through that sequence &mdash; plan first, then furniture, layout, lighting and the finishing layer, roughly in the order that avoids the most rework.</p>
${photo("hero.jpg", "Beautifully transformed mid-century living room makeover", 1600, 1067, "hero")}

<h2>Step 1: Plan Before Buying Anything</h2>
<p>A simple vision board, a real budget number, and one chosen "hero piece" to build the whole room around give the project a clear direction before any money gets spent.</p>
<p>Resisting the urge to rush this stage saves far more time than it costs &mdash; most makeover regrets trace back to skipping real planning.</p>
${photo("ready-magic.jpg", "Planning stage setting the vision for a mid-century makeover", 683, 1024)}
${photo("planning.jpg", "Thoughtful planning with mood boards and budget guiding the project", 1024, 600, "step1")}

<h2>Step 2: Understand What the Style Actually Requires</h2>
<p>Clean lines, tapered legs, and function-first design are the non-negotiables worth keeping in mind through every later decision in the project.</p>
<p>Knowing this upfront prevents later purchases that technically look "retro" but don't actually fit the style's real logic.</p>
${photo("what-makes-iconic.jpg", "The iconic elements that define authentic mid-century style", 1024, 683)}
${photo("why-obsessed.jpg", "The lasting appeal behind mid-century design's resurgence", 683, 1024, "step2")}

<h2>Step 3: Settle the Color Palette</h2>
<p>A warm neutral base with a considered accent color or two should get locked in before furniture shopping starts, since furniture choices will need to work with it, not the other way around.</p>
<p>This sequencing matters &mdash; choosing furniture first and the palette second usually means compromising on one or the other.</p>
${photo("color-palettes.jpg", "Mid-century color palette established before furniture choices", 768, 1024, "step3")}

<h2>Step 4: Choose the Anchor Furniture</h2>
<p>The sofa is the room's real anchor and deserves the most careful selection &mdash; sleek, structured, and sized properly for the space.</p>
<p>The coffee table comes next, treated as a genuine centerpiece rather than an afterthought once the sofa's in place.</p>
${photo("sofa.jpg", "A sleek, structured sofa anchoring the mid-century living room", 1024, 683)}
${photo("coffee-table.jpg", "A coffee table serving as the room's mid-century centerpiece", 1024, 576, "step4")}

<h2>Step 5: Add the Supporting Furniture</h2>
<p>Armchairs, a credenza or sideboard, and any additional storage get chosen once the two anchor pieces are settled, so everything scales correctly around them.</p>
<p>Deliberately balancing vintage finds with newer pieces at this stage avoids the all-or-nothing trap of trying to furnish the whole room from one source.</p>
${productGrid("step5")}

<h2>Step 6: Plan the Layout and Flow</h2>
<p>Keeping the room open and airy, with furniture arranged to create genuine conversation zones, should get mapped out before pieces go into their final spots.</p>
<p>A rug added at this stage helps visually define the layout, grounding the furniture arrangement rather than floating independently of it.</p>
${photo("layout-open.jpg", "Open, airy layout designed with purposeful furniture arrangement", 1024, 683)}
${photo("layer-rugs.jpg", "A rug grounding and defining the room's furniture layout", 1024, 723, "step6")}

<h2>Step 7: Layer the Lighting</h2>
<p>A bold statement fixture, layered with secondary light sources, should go in once the furniture layout is settled, so placement actually serves the final arrangement.</p>
<p>Warm-toned bulbs throughout and a thoughtful, cohesive metal mix finish this step without needing to revisit it later.</p>
${productGrid("step7")}

<h2>Step 8: Bring In Texture and Materials</h2>
<p>Textiles, rugs and material variety get layered in once the bigger furniture and lighting decisions are locked, adding depth without competing with earlier choices.</p>
${productGrid("step8")}

<h2>Step 9: Add Art and the Finishing Layer</h2>
<p>Art, decor and the smallest finishing touches come last, once every structural and furniture decision is already in place.</p>
<p>This sequencing keeps finishing touches from needing to be redone when an earlier, bigger decision shifts.</p>
${productGrid("step9")}

<h2>Keeping Costs Down Along the Way</h2>
<p>Mixing high and low pieces, thrifting and vintage hunting, doing select DIY projects, and using paint strategically all stretch the project budget without needing to compromise on the final look.</p>
<p>These budget tactics work at any step of the process, not just at the end.</p>

<h2>Mistakes Worth Avoiding at Each Step</h2>
<p>Overdoing the "retro" theme, ignoring comfort for the sake of silhouette, cluttering the space, mixing too many different wood tones, and skipping lighting layers are the five most common missteps across this whole project.</p>
<p>Checking against this list at each step, rather than only at the end, catches problems while they're still easy to fix.</p>
${photo("common-mistakes.jpg", "Avoiding common mid-century makeover mistakes throughout the project", 1024, 729, "mistakes")}

<h2>Modernizing Without Losing the Soul</h2>
<p>Contemporary art, varied textures, and discreetly integrated smart tech can all update the finished room without undermining the mid-century foundation underneath.</p>
<p>Keeping the overall room feeling light, rather than overly staged, is what lets these modern touches coexist with the style's original spirit.</p>

<h2>Your Makeover Awaits</h2>
<p>None of these nine steps needs to happen in a single weekend.</p>
<p>Following them roughly in order &mdash; plan, palette, anchor furniture, layout, lighting, then finishing touches &mdash; avoids the rework that comes from skipping ahead.</p>
<p>A mid-century makeover done in sequence gets to the finished room with far less backtracking than one improvised room by room.</p>
`;

module.exports = { body };
