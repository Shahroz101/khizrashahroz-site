// Body content for "Winter Wonderland Home Decor Ideas for a Cozy
// Space". Source was a topical guide, not a numbered idea list, so this
// follows the site's existing guide-format precedent (see
// article-tiered-tray-styling.js and article-black-gold-gallery-wall-
// ideas.js). Source had only ONE real content image in the entire
// article (confirmed by checking every <img> tag, not just
// <figure>-wrapped ones — the rest were logo, ad and unrelated sidebar
// thumbnails) — a genuine source-wide gap. Source was also extremely
// repetitive (three separate closing sections — Practical Tips,
// Budget-Friendly, Final Styling Tricks — covering largely the same
// ground: layered lighting, mirrors, rugs, minimal clutter); condensed
// into one non-redundant closing section. Rewritten out of the source's
// very personal, first-person "I" voice into the site's neutral tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B089T7BV1Y", title: "Puleo International 24 Inch Flocked Spruce Artificial Wreath", w: 1500, h: 1475 },
    { asin: "B0H5KRHRPN", title: "Vintage Framed Winter Landscape Wall Art, Snowy Mountain and Forest Canvas", w: 1500, h: 1188 },
  ],
  textiles: [
    { asin: "B09BH3WBS9", title: "Arcturus Military Wool Blanket, Warm, Thick and Washable, Charcoal", w: 1500, h: 1482 },
    { asin: "B0911V7KS5", title: "GLORY SEASON Velvet Throw Pillow Cover, Soft Decorative Square Cushion Case, Burgundy", w: 1500, h: 1500 },
  ],
  lighting: [
    { asin: "B0GY46GW9V", title: "6 Pack A19 LED Light Bulbs, Soft White 2700K, 60 Watt Equivalent", w: 1494, h: 1500 },
    { asin: "B0BVFJ2GMB", title: "4 Pack Warm White Battery Operated Fairy Lights, 16 Ft, 50 LED", w: 1491, h: 1500 },
  ],
  colors: [
    { asin: "B0DFPNQYHL", title: "Boho Living Jada Woven Decorative Lumbar Throw Pillow Cover, 12 x 20 Inch, Mustard", w: 1500, h: 1500 },
    { asin: "B0CNRMY4PB", title: "Bnuitland Burnt Orange Flannel Fleece Throw Blanket, 50 x 40 Inch", w: 1000, h: 1014 },
  ],
  furniture: [
    { asin: "B0D7P8N785", title: "VINGLI Chenille Upholstered Accent Chairs, Set of 2, Green", w: 1500, h: 1500 },
    { asin: "B0CSFR72JQ", title: "FLYJOE Rustic Wood Round Coffee Table with Metal Legs", w: 1500, h: 1500 },
  ],
  windows: [
    { asin: "B0FH9N6MV5", title: "H.VERSAILTEX Velvet Color Block Thermal Insulated Curtains for Living Room", w: 1500, h: 1500 },
    { asin: "B0F1MHJQ91", title: "ANRODUO Beige Velvet Curtains, 96 Inches Long, 2 Panels", w: 1500, h: 1500 },
  ],
  accents: [
    { asin: "B0B1ZYTH85", title: "Vintage Lantern Decorative LED Flickering Flameless Candle Lanterns with Timer", w: 1495, h: 1500 },
    { asin: "B0DC6RT6C2", title: "24 Pcs Natural Pine Cones, 1.96 Inch, Rustic Pinecones for Crafts and Decor", w: 1500, h: 1492 },
  ],
  nature: [
    { asin: "B01MRHKZRX", title: "Kurt Adler 12 Inch Miniature Pine Tree", w: 1172, h: 1500 },
    { asin: "B0HHRMBGZV", title: "16 Pcs Faux Eucalyptus and Olive Branch Stems, 11 and 15 Inch, with Vases", w: 1436, h: 1498 },
  ],
  scents: [
    { asin: "B0F3DRYY1N", title: "Yankee Candle Sparkling Cinnamon Scented Candle, 22 oz Large Jar", w: 809, h: 1500 },
    { asin: "B0DK74ZJJY", title: "WEALD TRIBE Balsam Fir Reed Diffuser Set, Winter Scent", w: 1349, h: 1500 },
  ],
  budget: [
    { asin: "B0C6FCKQML", title: "DREO Portable Electric Space Heater with Thermostat and Remote, for Indoor Use", w: 1190, h: 1500 },
    { asin: "B0BP1R9S8H", title: "Gray Self-Adhesive Weather Stripping for Doors and Windows, 33 Ft, Foam Seal", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "winter-wonderland-home-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "winter-wonderland-home-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A winter-ready home comes down to a handful of layered decisions rather than one big seasonal overhaul &mdash; textiles, lighting, color and a bit of natural texture, each doing their own small part to make a space feel warmer than the thermostat alone ever could.</p>
<p>None of it requires a full redecorate. Most of what makes a room feel like a winter retreat is already sitting in a closet somewhere, just waiting to be layered back in.</p>
${photo("hero.jpg", "Cozy winter living room with string lights, a flocked wreath and a candlelit coffee table", 1152, 768, "hero")}

<h2>Layering With Warm Textiles</h2>
<p>Textiles do more for a winter room than almost anything else, both functionally and visually. A few oversized throw blankets piled on the sofa &mdash; wool, cashmere blends or thick cotton hold heat best &mdash; instantly invite someone to curl up, especially when one is left casually draped rather than perfectly folded.</p>
<p>Cushions pull their weight too. Stacking three to five in varying sizes and textures, mixing a velvet piece with a patterned fabric, adds real comfort without much cost. Underfoot, a plush wool or shag rug makes the biggest difference of all &mdash; layering a smaller patterned rug on top of a neutral one adds texture while still keeping the floor warm.</p>
${productGrid("textiles")}

<h2>Ambient Lighting for a Cozy Glow</h2>
<p>Harsh overhead lighting works against a cozy room no matter how good the rest of the styling is. Swapping standard bulbs for warm LEDs, somewhere in the 2700K to 3000K range, shifts a space from clinical to genuinely inviting almost instantly.</p>
<p>String lights draped around a window or mirror add a soft glow without competing with anything else in the room, and candles do similar work &mdash; unscented in shared spaces, a seasonal scent like cinnamon or pine where that feels right. A floor lamp in a reading corner or a table lamp with a fabric shade finishes the layering, since lighting from a few different sources always feels warmer than one bright overhead source alone.</p>
${productGrid("lighting")}

<h2>Embracing Warm Colors</h2>
<p>A thoughtful color palette lifts a room's mood more than almost any single decor piece. Deep mustard, burnt orange, rich browns, taupe, soft sage and muted red all read as warm without tipping into anything overly literal or seasonal-looking.</p>
<p>One accent wall in a warm shade can shift an entire room's feel on its own. Balancing those warmer tones against neutral backgrounds &mdash; beige, cream, soft gray &mdash; keeps the palette from feeling overwhelming, letting the warmer accents stand out instead of competing with each other.</p>
${productGrid("colors")}

<h2>Furniture Arrangements That Invite Togetherness</h2>
<p>Winter is naturally a more indoor, more social season, and furniture layout can either support that or work against it. A sofa facing two armchairs around a low coffee table, grounded with a rug underneath, creates an intimate seating area that works well whether it's friends over for hot chocolate or just a quiet evening alone.</p>
<p>A fireplace or a stylish space heater deserves to be the room's actual focal point if one is available &mdash; pulling a chair or two closer, adding a blanket, and letting the heat circulate without heavy furniture blocking it in front. Even a small adjustment, like moving a side table and lamp closer to a window, can turn an overlooked corner into a proper reading nook.</p>
${productGrid("furniture")}

<h2>Window Treatments That Trap Heat</h2>
<p>Windows let in welcome daylight, but they're also where a surprising amount of warmth quietly escapes. Thermal or insulated curtains in velvet or a thick cotton block drafts while still looking considered &mdash; floor-to-ceiling ones in a color that complements the room's palette do double duty as both function and style.</p>
<p>Layering a sheer curtain underneath a heavier drape adds visual depth while keeping daylight and privacy intact during the day, with the heavier layer closing in the warmth come evening. A window nook with a cushioned seat, piled with blankets and pillows, makes a strong case for itself as the home's best reading spot through the colder months.</p>
${productGrid("windows")}

<h2>Adding Seasonal Decor Accents</h2>
<p>Once the larger pieces are settled &mdash; textiles, lighting, furniture, color &mdash; a few smaller seasonal touches finish the room. Plaid or knitted throws, a decorative lantern in a corner, and a mini evergreen or a bowl of pinecones as a tabletop centerpiece all read as intentional rather than themed, as long as they stay restrained rather than filling every surface.</p>
<p>Mirrors do quiet work here too, bouncing both light and warmth around a room when placed opposite a window or near a light source &mdash; a metallic or gold-accented frame adds a bit of luxe without feeling flashy. On the coffee table itself, layering a stack of books, a candle and a small seasonal centerpiece builds the same cozy effect, as long as there's still room left to set down an actual mug.</p>
${productGrid("accents")}

<h2>Bringing Nature Indoors</h2>
<p>Natural elements add warmth and texture that manufactured decor can't quite replicate, even in the middle of winter. Pine branches, a mini fir, a potted evergreen or a few sprigs of eucalyptus or holly, arranged in a ceramic or wooden pot, bring in both color and an genuinely good seasonal scent.</p>
<p>Wood adds its own kind of warmth &mdash; a wooden bowl, a carved frame, a small tray scattered through the space grounds a room in a way that's easy to underestimate. Stone, pebbles and textured ceramics push the same idea further, leaning the space toward something a little more rustic and tactile without requiring a full style overhaul.</p>
${productGrid("nature")}

<h2>The Magic of Scents and Textures</h2>
<p>Scent and touch function almost like invisible decor &mdash; easy to overlook, but they shape how a room actually feels more than most visible choices do. Seasonal scents like cinnamon, pine, clove or vanilla, whether from a candle or a diffuser, do a lot of that work on their own; a diffuser is the safer option for anyone prone to forgetting a lit candle.</p>
<p>Soft textures carry the rest &mdash; layered blankets, faux fur pillows, velvet cushions, all contributing to a room that feels as good to touch as it looks. Mixing a neutral shag rug with a smaller patterned one on top adds that same sense of richness underfoot.</p>
${productGrid("scents")}

<h2>Practical, Budget-Friendly Ways to Get There</h2>
<p>None of this requires a renovation or a large budget to pull off. A portable heater in the most-used room, throws and rugs layered around the main seating area, and weatherstripping on drafty windows go a long way toward actually keeping a space warm, not just looking like it is.</p>
<p>Swapping thin summer throws for chunky knit blankets, layering an inexpensive rug over existing flooring, and a few simple DIY touches &mdash; a pinecone centerpiece, a cluster of jar candles, a vase of collected branches &mdash; add real coziness without much cost. A thrifted lamp or a reupholstered chair often brings more warmth to a room than anything bought new. Keeping the final look restrained matters as much as any single addition: layered lighting, a little seasonal color, and minimal clutter is what separates a space that feels like a warm hug from one that just feels crowded.</p>
${productGrid("budget")}

<h2>Final Thoughts</h2>
<p>A cozy winter home comes down to layering, not overhauling &mdash; textiles stacked on top of each other, light coming from a few different sources instead of one, and a handful of natural, textural touches scattered through the space rather than piled into one corner.</p>
<p>The goal isn't to fill every surface with seasonal decor, but to make the room feel like somewhere worth staying in once it gets cold outside.</p>
`;

module.exports = { body };
