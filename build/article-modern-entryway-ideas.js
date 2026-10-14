// Body content for "10 Entryway Upgrades That Actually Make a First
// Impression". Photos carried over from the source article, with two
// swapped: its "Console Table" photo was dominated by a fiddle-leaf fig
// with the table barely visible, and its "Greenery" photo showed a console
// table styled with baskets, a tray and keys — so the two now illustrate
// the idea each one actually matches. The source also reused the exact
// same photo for both "Gallery Walls" and "Seating," so Seating runs
// without a dedicated photo here rather than repeat an image.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0HBW6ZXK8", title: "6-Light Crystal Chandelier Pendant Light, Gold with Crystal Beads", w: 817, h: 1276 },
    { asin: "B0HBTV38TY", title: "4-Light Black Glass Chandelier, Modern Farmhouse Dining Room Light Fixture", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0CKH68D3G", title: "Industrial 4-Light Gold Lantern Chandelier with Rustic Metal Cage, Adjustable", w: 1333, h: 1500 },
    { asin: "B0DRCVXK8J", title: "Depuley Battery Operated Wall Sconces, Set of 2, Wireless, 10000mAh, Dimmable", w: 1487, h: 1500 },
  ],
  idea2: [
    { asin: "B0GTNL9BQB", title: "FICTOR Vintage Antique Gold Baroque Wall Mirror, 24 x 36 Inch", w: 1500, h: 1500 },
    { asin: "B0D7CXDJWR", title: "VooBang Arched Wall Mirror, 30 x 38 Inch, Black", w: 1200, h: 1200 },
  ],
  idea3: [
    { asin: "B0H9YBZ3BN", title: "63 Inch Farmhouse Console Table with Outlet, Entryway Table", w: 1500, h: 1500 },
    { asin: "B0CG3Q4H5Q", title: "CCINPPY Ceramic Cloud Jewelry Tray, Trinket Dish and Key Bowl", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B09TN86HHB", title: "HOMEMONDE Braided Jute Runner Rug, 2 x 8 Ft, Natural", w: 1500, h: 1500 },
    { asin: "B0B3D42VT3", title: "Hallway Washable Runner Rug, 2 x 10 Ft, Vintage Soft Non-Slip Entryway Runner", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0FNCPWZ7B", title: "5 Ft Artificial Fiddle Leaf Fig Tree with White Planter and Moss", w: 717, h: 1500 },
    { asin: "B00FUNM8MU", title: "Nearly Natural 35 Inch Artificial Snake Plant with Black Planter", w: 652, h: 1500 },
  ],
  idea6: [
    { asin: "B0GV3KYYW8", title: "TwoDays Vintage Picture Frame Set, Antique Gold and Brass, 12 Pieces", w: 1500, h: 1413 },
    { asin: "B0GCNCGVQ5", title: "Venusmiles 15 Pack Picture Frames Collage Wall Decor, Gallery Frame Set", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B08P6ZZJT2", title: "HOOBRO Shoe Storage Bench with Cushion, 32.3 Inch Entryway Bench", w: 1474, h: 1500 },
    { asin: "B08BYT42P4", title: "Pipishell Solid Wooden Freestanding Coat Rack with 8 Hooks, Brown", w: 448, h: 1500 },
  ],
  idea8: [
    { asin: "B0CN23QR9Z", title: "Glidden Total Interior Paint and Primer, Cavalry Navy Blue, Flat, 1 Gallon", w: 1500, h: 1473 },
    { asin: "B0G2754YQN", title: "Faux Wood 3D Wall Panels, Wood Grain, Rigid PVC, Natural Oak", w: 1495, h: 1500 },
  ],
  idea9: [
    { asin: "B0D66MSN7C", title: "AmasSmile Folding Storage Ottoman Bench, 34 Inch, Black Leather Footrest Chest", w: 1500, h: 1360 },
    { asin: "B0FY5LMDT7", title: "SONGMICS Padded Vanity Stool and Foot Rest, Solid Wood X Legs", w: 1335, h: 1500 },
  ],
  idea10: [
    { asin: "B0HCTWVWCL", title: "16 Inch Artificial Pine Needle Greenery Wreath for Front Door, Red Berries", w: 1500, h: 1496 },
    { asin: "B0GZYZXHHC", title: "13 Inch Fall Pumpkin Wreath for Front Door, Artificial Pumpkin and Maple Leaves", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "modern-entryway-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "modern-entryway-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Statement Lighting",
    paras: [
      "A fixture that actually says something changes an entryway faster than almost anything else on this list. A chandelier, a sculptural pendant, or even a well-chosen pair of sconces takes the space from forgettable to memorable.",
      "Match the fixture to the rest of your home's style &mdash; clean geometric shapes for something modern, a crystal piece if you're leaning classic. Scale matters too: a fixture that's too small reads as an afterthought, and one that's too large becomes a hazard.",
      "Swapping a dated builder-grade fixture for something with real presence is one of the highest-impact, lowest-effort upgrades an entryway can get.",
    ],
    photo: photo("lighting.png", "Dramatic tiered crystal chandelier hanging above a bright entryway with glass front doors and two cream armchairs", 576, 1024, "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "A Decorative Mirror",
    paras: [
      "Mirrors do real work in an entryway &mdash; they bounce light around, make a tight space feel larger, and double as a last-glance check on your way out the door.",
      "Go oversized for a genuine statement, or cluster a few smaller, uniquely framed mirrors for something more eclectic. Position one across from a window and you'll effectively double the natural light in the space.",
      "An ornate vintage frame adds character fast; a clean modern frame keeps things simple. Either way, this is one of the easiest upgrades to make a real visual difference.",
    ],
    photo: photo("mirrors.png", "Ornate gold vintage mirror hanging above a console table with a large floral arrangement in a stone urn", 576, 1024, "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "A Console Table That Earns Its Keep",
    paras: [
      "A console table is where function meets styling. It's a surface for a lamp, a vase, a tray &mdash; but it's also the spot where keys, mail, and sunglasses actually land instead of scattering through the house.",
      "Baskets or drawers underneath hide the practical stuff out of sight, while the top stays free for whatever you want to look at. A tray specifically for keys and everyday essentials solves the \"where did I put that\" problem almost instantly.",
      "Once you have a dedicated landing spot like this, the daily chaos of walking in the door gets noticeably calmer.",
    ],
    photo: photo("greenery.png", "Wood console table with woven storage baskets underneath, a black tray holding keys, a stack of books, a lamp and a vase of flowers", 576, 1024, "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Layered Rugs",
    paras: [
      "Layering rugs in an entryway adds texture and warmth in a way a single flat rug never quite manages.",
      "Start with a large, neutral base &mdash; jute or sisal both hold up well to foot traffic. Layer something smaller and more patterned on top for a collected, intentional look.",
      "A vintage-style runner over a woven base is a combination that photographs beautifully and still holds up to daily shoes and weather.",
    ],
    photo: photo("layered-rugs.png", "Vintage patterned runner rug layered over a woven jute mat in a hallway with wood doors and framed art", 576, 1024, "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Greenery",
    paras: [
      "Plants make nearly every entryway feel more alive, full stop. Even a single well-placed one changes how the whole space reads.",
      "A tall fiddle-leaf fig or a low-maintenance snake plant both deliver a big visual impact without much upkeep. If you don't have the time or light for a real plant, a good faux version genuinely works just as well here &mdash; nobody's touching it to check.",
      "Fresh flowers on a console table are a smaller, more frequent way to bring in color and life without committing to a permanent plant.",
    ],
    photo: photo("console-table.png", "Tall fiddle-leaf fig plant in a textured ceramic pot beside a glass console table with a lamp and a vase of fresh flowers", 576, 1024, "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "A Gallery Wall",
    paras: [
      "Gallery walls don't need to stay confined to the living room. An entryway is genuinely prime real estate for showing a little personality before guests even get further inside.",
      "Mix family photos, art prints, and the odd quirky piece for something personal, or keep frames uniform in black and gold for something more polished. Either direction works.",
      "You don't need to finish it in one weekend, either. Starting with a handful of pieces and building over time usually looks more considered than rushing to fill every inch at once.",
    ],
    photo: photo("gallery-wall.png", "Dense gallery wall of family photos and colorful art prints in mixed gold and black frames above an upholstered bench", 576, 1024, "idea6"),
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Built-In Storage",
    paras: [
      "Entryways are magnets for shoes, bags, and jackets in various states of abandonment. Built-in storage is the single most effective fix for that chaos.",
      "Cubbies, hooks, and shelving keep everything assigned to a spot. Baskets handle the smaller items you want out of sight but still easy to grab on the way out.",
      "No built-ins in the budget or the walls? A slim storage bench or a simple standing coat rack handles a surprising amount of the same job.",
    ],
    photo: photo("storage.png", "Built-in entryway storage bench with tufted upholstered back, hooks, a hanging towel and storage drawers with baskets underneath", 576, 1024, "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "A Bold Accent Wall",
    paras: [
      "If you want real drama, this is where to spend it. Paint, wallpaper, or architectural paneling on one entryway wall turns a pass-through space into a genuine moment.",
      "Deep navy, emerald, or charcoal all bring sophistication fast. Bold wallpaper adds a designer-level finish, and wood paneling or slats bring texture and warmth without relying on color at all.",
      "Geometric paneling with metallic trim, like the look here, is a more involved project but the payoff reads as genuinely custom.",
    ],
    photo: photo("accent-wall.png", "Entryway with a dramatic navy accent wall featuring gold geometric paneling, a gold-framed mirror and a two-drawer console table", 576, 1024, "idea8"),
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Seating That Actually Gets Used",
    paras: [
      "A bench or a pair of stools isn't just decorative in an entryway &mdash; it's genuinely practical the moment you're wrestling with a pair of boots.",
      "A bench with storage underneath pulls double duty, giving you a place to sit and somewhere for shoes to disappear to at the same time. A soft cushion or a folded throw keeps it from feeling purely utilitarian.",
      "Once it's there, it tends to become the default spot for bags, guests, and anyone pausing on their way in or out &mdash; more useful than most people expect going in.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Seasonal Touches",
    paras: [
      "An entryway doesn't need to look identical year-round. Swapping in a few seasonal details keeps the space feeling current without any real commitment.",
      "A wreath, a garland, or a simple seasonal sign marks the time of year without much effort. Mini pumpkins and warm lanterns for fall, then greenery and twinkle lights for winter, cover most of the calendar on their own.",
      "It's a small, inexpensive habit that keeps the entrance feeling intentional instead of static.",
    ],
    photo: photo("seasonal.png", "Front door decorated with an autumn leaf wreath, string lights, pumpkins and lit lanterns on a wood bench", 576, 1024, "idea10"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || (idea.productsKey ? productGrid(idea.productsKey) : "")}`;
}

const body = `
<p>Your entryway is the handshake of your home &mdash; it's the very first thing anyone sees, and it quietly sets the tone for everything beyond it. Whether you're working with a grand foyer or a narrow little hallway, the right details make the space feel instantly welcoming.</p>
<p>Here are ten ways to get there, from the five-minute swaps to the ones worth a weekend of effort.</p>
${photo("hero.jpg", "Opulent entryway with a large tiered crystal chandelier, two curved sofas, a round coffee table and a mirrored front door", 1280, 720, "hero")}

<h2>10 Entryway Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Your entryway is more than a pass-through space &mdash; it's the first chapter of your home's whole story. Whether you lean into bold statement lighting, cozy layered rugs, or a gallery wall full of personality, each of these ideas pushes the space a little closer to feeling genuinely like you.</p>
<p>Pick whichever one you keep circling back to, and start there. The rest of the entryway tends to follow once the first piece is in place.</p>
`;

module.exports = { body };
