// Body content for "Blue Farmhouse Living Room Ideas for a Relaxing
// Space". Guide format, matching the source's 8 content sections.
// Distinct from black-farmhouse-living-room-ideas (same room,
// different color), farmhouse-living-room-ideas (general, no color
// focus) and blue-farmhouse-bedroom-decor (same color, different
// room) — the blue+farmhouse+living-room intersection is genuinely
// new. Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0GZN6K27P", title: "Blue Stripe Coastal Ruffle Sofa Cover, 3 Seat", w: 1500, h: 1500 },
    { asin: "B0H82WH6K5", title: "Rattan Farmhouse Accent Chairs, Beige Linen, 2 Pack", w: 1500, h: 900 },
  ],
  palette: [
    { asin: "B07BDSG3QR", title: "Glidden One Coat Interior Paint + Primer, Blue Fjord, Eggshell, 1 Gallon", w: 1500, h: 1473 },
    { asin: "B0CSSZYS75", title: "Hemway Pacific Blue Interior Wall Paint, 2.5 L", w: 1500, h: 1492 },
  ],
  furniture: [
    { asin: "B0F9WRV5F4", title: "Welnow Mid Century Rattan Accent Chair with Woven Cane Backrest, Natural", w: 1500, h: 1216 },
    { asin: "B0CGRXV791", title: "Smuxee Round Nesting Coffee Table Set of 2, Wood Grain Top", w: 1500, h: 1500 },
  ],
  wallTreatments: [
    { asin: "B075G1KZ82", title: "WoodyWalls Peel and Stick Wood Planks, Whitewash Shiplap Wall Panels", w: 1500, h: 1005 },
    { asin: "B0CSSNXR31", title: "Hemway Sky Blue Interior Paint, 2.5 L", w: 1500, h: 1492 },
  ],
  decor: [
    { asin: "B0FCFLN356", title: "ooit Blue and White Chinoiserie Ceramic Vases, Set of 3", w: 1500, h: 1500 },
    { asin: "B0881LL44Y", title: "StorageWorks Handwoven Water Hyacinth Storage Baskets, 2 Pack", w: 1500, h: 897 },
  ],
  lighting: [
    { asin: "B07J148MF2", title: "JONATHAN Y Gretchen 25\" Ginger Jar Ceramic LED Table Lamp, Blue/White", w: 868, h: 1500 },
    { asin: "B018BC9L62", title: "Dimmable Soft White 2700K LED A19 Bulbs, 60 Watt Equivalent, 12 Pack", w: 1500, h: 1500 },
  ],
  storage: [
    { asin: "B0DSKBKHSZ", title: "RoyalCraft 60\" Buffet Sideboard Cabinet, Blue", w: 1500, h: 1500 },
    { asin: "B0F9WBHXCL", title: "FOTOSOK 6-Tier Tall Bookcase, Blue", w: 604, h: 1500 },
  ],
  seasonal: [
    { asin: "B0D7LH52QP", title: "Willa and Belle Cream Chunky Knit Throw Blanket", w: 1500, h: 1419 },
    { asin: "B0D62XV3FJ", title: "Handmade Chunky Chenille Cable Knit Throw Blanket", w: 1080, h: 1080 },
  ],
  mistakes: [
    { asin: "B0FMS3M8C4", title: "Craft Trade Rectangle Braided Jute Area Rug, Natural Fiber, 5x7 ft", w: 1024, h: 1024 },
    { asin: "B07CG7VD7W", title: "Decor Therapy Round Woven Jute Pouf Ottoman", w: 1500, h: 984 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "blue-farmhouse-living-room-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "blue-farmhouse-living-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Blue and farmhouse sound like an unlikely pairing on paper.</p>
<p>Farmhouse leans warm and neutral; blue leans cool and calm. Together, done right, they produce one of the more genuinely relaxing living room palettes available.</p>
<p>This covers how to actually get there, from the color itself to the details that keep the room feeling warm instead of cold.</p>
${photo("hero.png", "Relaxing blue farmhouse living room with cozy, coastal touches", 1248, 832, "hero")}

<h2>Finding the Right Blue</h2>
<p>Not every blue works the same way in a farmhouse room &mdash; a soft, slightly muted blue reads as calm, while a bright or saturated blue can tip the whole room toward coastal instead of farmhouse.</p>
<p>A blue with a gray or green undertone tends to sit more naturally alongside farmhouse's warm wood tones than a pure, clean blue does.</p>
<p>Testing a sample in the room's actual light matters more here than with almost any other color choice, since blue shifts dramatically between morning and evening light.</p>
${photo("palette-1.png", "Soft blue color palette setting the tone for a farmhouse living room", 683, 1024)}
${photo("palette-2.png", "Muted blue tones creating a relaxing farmhouse atmosphere", 683, 1024, "palette")}

<h2>Furniture With a Coastal Twist</h2>
<p>A slipcovered sofa, a weathered wood coffee table, or a rattan accent chair bring in just enough coastal influence to complement the blue without losing the farmhouse foundation.</p>
<p>This works best as an accent rather than a full room overhaul &mdash; one or two coastal-leaning pieces alongside otherwise classic farmhouse furniture.</p>
<p>Natural materials throughout keep the room feeling grounded even as the palette shifts cooler than typical farmhouse.</p>
${photo("furniture-1.png", "Farmhouse furniture with a subtle coastal-inspired twist", 683, 1024)}
${photo("furniture-2.png", "Weathered wood furniture complementing a blue farmhouse palette", 683, 1024, "furniture")}

<h2>Wall Treatments Worth Considering</h2>
<p>Shiplap painted in a soft blue, or a single blue accent wall against otherwise white walls, both bring the color in at a larger scale without overwhelming the room.</p>
<p>This is one of the higher-commitment choices on this list, but also one of the most transformative for setting the room's overall mood.</p>
${photo("wall-treatments.png", "Blue-painted shiplap wall adding farmhouse charm to the room", 683, 1024, "wallTreatments")}

<h2>Decor That Feels Like Home</h2>
<p>Ceramic vases, woven baskets, and a few blue-and-white textiles bring the palette into the smaller details without requiring any furniture changes.</p>
<p>Mixing in warm neutrals alongside the blue accents keeps the room from feeling one-note or overly cool.</p>
<p>This is the easiest, lowest-cost layer to adjust seasonally as the palette gets dialed warmer or cooler.</p>
${photo("decor-1.png", "Blue and white decor accents bringing warmth to the living room", 683, 1024)}
${photo("decor-2.png", "Cozy farmhouse decor styled with a calming blue palette", 683, 1024, "decor")}

<h2>Lighting That Sets the Mood</h2>
<p>Warm-toned bulbs matter more in a blue room than almost any other color, since cool lighting on top of a cool palette can tip the whole space toward feeling cold rather than calm.</p>
<p>A mix of overhead, lamp and accent lighting keeps the blue from reading as flat under a single light source.</p>
<p>This is worth getting right before committing further to the palette, since lighting changes how every other blue element in the room actually reads.</p>
${photo("lighting-1.png", "Warm lighting balancing a cool blue farmhouse color scheme", 683, 1024)}
${photo("lighting-2.png", "Layered lighting enhancing the mood of a blue farmhouse living room", 683, 1024, "lighting")}

<h2>Built-Ins and Storage That Work Hard</h2>
<p>Built-in shelving or a painted cabinet in the same blue family as the walls creates a cohesive, considered look rather than a patchwork of separate color choices.</p>
<p>This also solves real storage needs in a living room, which matters more than purely decorative choices in a space that gets used daily.</p>
${photo("storage-1.png", "Built-in storage painted in a cohesive farmhouse blue", 683, 1024)}
${photo("storage-2.png", "Functional storage solutions matching a blue farmhouse aesthetic", 683, 1024, "storage")}

<h2>Keeping It Fresh Through the Seasons</h2>
<p>Swapping in warmer textiles and accents for fall and winter, then lighter ones for spring and summer, keeps a blue farmhouse room from feeling static year-round.</p>
<p>This is a low-cost way to keep the space feeling intentional rather than locked into one seasonal mood permanently.</p>
${photo("seasonal-1.png", "Seasonal textiles refreshing a blue farmhouse living room", 683, 1024)}
${photo("seasonal-2.png", "Warm seasonal accents balancing a cool blue color palette", 683, 1024, "seasonal")}

<h2>Mistakes Worth Avoiding</h2>
<p>Going too saturated with the blue is the most common misstep &mdash; a bold, bright blue across every surface tips the room cold rather than calm.</p>
<p>Skipping warm textures and wood tones entirely is the other common mistake, since blue alone, without farmhouse's usual warmth, loses the balance that makes this combination work.</p>
${photo("mistakes.png", "Balanced blue farmhouse living room avoiding common styling mistakes", 683, 1024, "mistakes")}

<h2>Your Serene Space Awaits</h2>
<p>Blue and farmhouse work together when the blue stays muted, the materials stay warm, and the lighting stays soft.</p>
<p>Start with the palette and lighting, then layer in furniture, decor and seasonal touches as the room comes together.</p>
<p>Done well, this combination produces one of the most genuinely restful living rooms in the farmhouse category.</p>
`;

module.exports = { body };
