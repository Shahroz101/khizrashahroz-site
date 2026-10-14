// Body content for "How to Build (and Actually Keep) a Minimalist
// Bathroom". Guide format, not a numbered idea list. This source
// expands "minimalist" past the single brief mention it gets as one
// of 17 styles in the existing bathroom-design-styles article, so
// this rewrite leans into the long-term maintenance angle the source
// itself raises in its closing section — how a minimalist look
// actually gets sustained day to day, not just how it's initially set
// up. Source photos are all AI-generated style with no Pinterest
// links, so none carry credit captions. "Why Minimalism Works"
// section had no photo, kept text-only. Rewritten from scratch in the
// site's calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B09KLPLCRF", title: "Qtip Holder Dispenser Set, 4 Pack, Clear Apothecary Jars with Bamboo Lids, 10 Oz", w: 1346, h: 1500 },
    { asin: "B0FCR3TKNT", title: "Matte Black Bathroom Faucet with Waterfall Spout and Pop-Up Drain", w: 1500, h: 1305 },
  ],
  palette: [
    { asin: "B07BDTVN4W", title: "Glidden Interior Paint and Primer, White Off White, One Coat, Eggshell, 1 Quart", w: 1500, h: 1470 },
    { asin: "B07CTWFNNB", title: "White Bath Towels, 24 x 50 Inch, 6 Pack, Extra Absorbent Cotton", w: 1257, h: 1500 },
  ],
  materials: [
    { asin: "B01MQIURAC", title: "Creative Home Natural Charcoal Marble Soap Dish", w: 1500, h: 523 },
    { asin: "B095BVCWFF", title: "VaeFae Teak Shower Mat, Non-Slip Wooden Spa Bath Mat for Bathtub", w: 1500, h: 947 },
  ],
  storage: [
    { asin: "B0DWSX7JH3", title: "Wall Mounted Bathroom Medicine Cabinet with Mirror and 6 Open Side Shelves, White", w: 1496, h: 1500 },
    { asin: "B0BZRMYZV1", title: "Vtopmart 44 Pcs Clear Plastic Drawer Organizers Set, Vanity Organizer Trays", w: 1500, h: 1406 },
  ],
  fixtures: [
    { asin: "B0H8SNG1NH", title: "Widespread Bathroom Faucet, 3 Hole, Matte Black", w: 1500, h: 1201 },
    { asin: "B0C7W2NPZX", title: "USHOWER Matte Black Towel Bar, 24 Inch, Bathroom Towel Rack", w: 1500, h: 1345 },
  ],
  lighting: [
    { asin: "B0CYGWH7Q6", title: "FonmYim 3-Light Brushed Nickel Bathroom Vanity Light Fixture Over Mirror", w: 1500, h: 1500 },
    { asin: "B0DBKW686H", title: "Hardwired Matte Black Bathroom Wall Sconces, Set of 2, Modern Lighting", w: 1500, h: 1500 },
  ],
  accessories: [
    { asin: "B0HFNMHPGD", title: "Morandi Blue Soap Dispenser for Bathroom and Kitchen, Lotion Bottle", w: 659, h: 1194 },
    { asin: "B0DWZBQBD4", title: "D'vine Dev 3.5 Inch Ceramic Planter Pot, Oatmeal", w: 1500, h: 1500 },
  ],
  greenery: [
    { asin: "B0H9YFKHJ7", title: "Faux Snake Plant, 19 Inch Tall, Artificial Indoor Plant for Home Decor", w: 1300, h: 1500 },
    { asin: "B08ZHLBLR3", title: "Ceramic Modern Glaze Planter Pot with Drainage Hole and Saucer, 6 Inch Round", w: 1204, h: 1500 },
  ],
  texture: [
    { asin: "B0H28FWH8G", title: "DWCN Waffle Bathroom Rugs, Set of 2, Non-Slip, Brown", w: 1500, h: 1500 },
    { asin: "B0BL6NFD1T", title: "POLYTE 430 GSM Quick Dry Waffle Bath Towel, 30 x 60 Inch, Poly Blend Microfiber", w: 1500, h: 1496 },
  ],
  personal: [
    { asin: "B0GSBG67HB", title: "Vintage Moody Butterfly Art, 3 Pcs, Oval Framed Small Wall Decor", w: 1133, h: 1091 },
    { asin: "B0DCC8N4C9", title: "Small White Ceramic Flower Vase, 7.4 Inch, Minimalist Style", w: 1500, h: 1500 },
  ],
  longTerm: [
    { asin: "B0CYGHDDK4", title: "ALELION 11.7 Inch Acacia Wood Bathroom Vanity Tray for Counter and Toilet Tank", w: 1500, h: 1269 },
    { asin: "B0CFQFMC4F", title: "REALINN L-Shaped 2-Tier Pull-Out Under Sink Organizer", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "minimalist-bathroom-sustained-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "minimalist-bathroom-sustained", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Setting up a minimalist bathroom is the easy part.</p>
<p>Keeping it that way, through daily use and accumulating bottles and products, is where most minimalist bathrooms quietly fail.</p>
<p>This covers both &mdash; the actual design choices, and what keeps the look intact once real life moves in.</p>
${photo("hero.png", "Modern minimalist bathroom with a clean, uncluttered design", 1312, 736, "hero")}

<h2>Why Minimalism Suits a Bathroom Specifically</h2>
<p>A bathroom is a small, frequently used space where clutter accumulates fast &mdash; which makes restraint more valuable here than in almost any other room.</p>
<p>Fewer visible objects also means less to clean around, a genuinely practical benefit beyond the visual one.</p>
<p>A minimalist bathroom tends to feel calmer to use daily, not just better to look at in photos.</p>

<h2>Choosing the Right Color Palette</h2>
<p>Soft whites, warm grays and muted neutrals form the backbone of most minimalist bathrooms.</p>
<p>A single accent color or material, used sparingly, keeps the palette from feeling flat without undoing the overall restraint.</p>
<p>Consistency matters more than any specific shade &mdash; one cohesive palette reads as intentional in a way a scattered one never does.</p>
${photo("color-palette.png", "Minimalist bathroom with a cohesive neutral color palette", 683, 1024, "palette")}

<h2>Picking Materials That Feel Natural and Luxe</h2>
<p>Stone, matte tile and natural wood all read as higher-end than their actual cost, especially in a pared-back room with nothing else competing for attention.</p>
<p>A single standout material &mdash; a stone countertop, a wood vanity &mdash; does more work in a minimalist room than it would in a busier one.</p>
<p>This is where most of a minimalist bathroom's actual budget should go, since the material choices carry the whole look.</p>
${photo("materials.png", "Natural materials bringing warmth to a minimalist bathroom", 683, 1024, "materials")}

<h2>Smart Storage Is Non-Negotiable</h2>
<p>A minimalist look falls apart fast without real storage behind it &mdash; clutter has to go somewhere.</p>
<p>Closed cabinetry, a hidden medicine cabinet, and drawer organizers all keep daily items out of sight without losing them.</p>
<p>This is the single most important practical decision in the entire room, more than any single visible choice.</p>
<p>Skipping adequate storage is the most common reason a minimalist bathroom doesn't stay that way.</p>
${photo("smart-storage.png", "Smart concealed storage maintaining a clutter-free minimalist bathroom", 683, 1024, "storage")}

<h2>Choosing Sleek, Functional Fixtures</h2>
<p>Clean-lined faucets, a simple showerhead, and hardware in one consistent finish keep the fixtures from becoming visual noise.</p>
<p>Function still matters more than pure style &mdash; a beautiful fixture that's awkward to use daily undercuts the whole point of a calm, functional room.</p>
<p>Matching finishes throughout &mdash; faucet, towel bar, cabinet pulls &mdash; reinforces the sense of restraint everywhere else in the room.</p>
${photo("sleek-fixtures.png", "Sleek functional fixtures in a minimalist bathroom design", 683, 1024, "fixtures")}

<h2>Lighting That Elevates Everything Else</h2>
<p>Warm, well-placed lighting makes every other choice in the room look more intentional.</p>
<p>A combination of ambient and task lighting covers both daily function and overall mood, the same balance that matters in any bathroom.</p>
<p>In a minimalist room specifically, good lighting also does some of the visual work that decor would handle in a busier space.</p>
${photo("lighting.png", "Thoughtful lighting enhancing a minimalist bathroom's calm atmosphere", 683, 1024, "lighting")}

<h2>Accessories: Genuinely Less Is More</h2>
<p>A soap dispenser, one small plant, a neatly folded towel &mdash; that's close to the ceiling for visible accessories in a minimalist bathroom.</p>
<p>Every object left out needs to earn its place, both functionally and visually.</p>
<p>This is the rule most people struggle to maintain over time, as small items quietly accumulate on the counter.</p>
${photo("accessories.png", "Minimal, carefully chosen accessories in a clean bathroom", 683, 1024, "accessories")}

<h2>Incorporating Greenery Without Overdoing It</h2>
<p>One well-placed plant adds life to an otherwise neutral room without disrupting the restraint.</p>
<p>A low-maintenance, humidity-tolerant variety survives a bathroom's conditions without constant attention.</p>
<p>More than one or two plants starts to compete with the room's deliberate simplicity rather than complementing it.</p>
${photo("greenery.png", "A single plant adding life to a minimalist bathroom", 683, 1024, "greenery")}

<h2>Texture Keeps It From Feeling Flat</h2>
<p>A neutral palette with no texture variation can read as sterile rather than calm.</p>
<p>A woven bath mat, a textured towel, or a tactile tile all add depth without adding color or clutter.</p>
<p>This is what separates a genuinely well-executed minimalist bathroom from one that just looks empty.</p>
${photo("textures.png", "Textured elements adding depth to a minimalist bathroom", 683, 1024, "texture")}

<h2>Making It Personal Without Losing the Restraint</h2>
<p>One meaningful object &mdash; a small piece of art, a specific vase &mdash; keeps a minimalist bathroom from feeling like a hotel rather than a home.</p>
<p>The same "earn its place" rule from the accessories section applies here too.</p>
<p>A single personal touch, chosen carefully, does more than several generic ones ever could.</p>
${photo("personal-touch.png", "A single meaningful object adding personality to a minimalist bathroom", 683, 1024, "personal")}

<h2>Keeping the Look Alive Long-Term</h2>
<p>This is where most minimalist bathrooms actually fail &mdash; not in the initial design, but in the months after.</p>
<p>A regular habit of clearing the counter, even just before bed each night, keeps small clutter from becoming permanent.</p>
<p>A one-in-one-out rule for new products and accessories prevents the slow creep that undoes a carefully edited room.</p>
<p>The storage decisions made at the start matter more here than any single design choice &mdash; good storage makes staying minimal effortless, not a constant battle.</p>
${photo("long-term.png", "Maintaining a minimalist bathroom's clean look over time", 683, 1024, "longTerm")}

<h2>Final Thoughts</h2>
<p>A minimalist bathroom isn't really about owning fewer things &mdash; it's about being deliberate with what stays visible.</p>
<p>Get the storage and material choices right at the start, and the day-to-day maintenance becomes far easier than it sounds.</p>
<p>The goal isn't a sterile, hotel-like room. It's a calm one that still feels genuinely lived-in.</p>
<p>Start with storage, since that single decision determines whether the rest of this actually holds up.</p>
`;

module.exports = { body };
