// Body content for "14 Pergola Ideas to Build a Genuine Outdoor Retreat".
// Photos carried over from the source article. Several ideas had 2-3
// near-identical photos in the source; one representative photo per idea
// was kept here. No padded intro sections — just a short 3-paragraph lead
// before the numbered list.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DXKB152K", title: "Outsunny 11 x 12.5 Ft Outdoor Wood Pergola Grape Trellis, Brown", w: 1500, h: 1500 },
    { asin: "B0BFDZXKXD", title: "Outvita 7 Ft Dark Brown Wooden Garden Arbor Arch Trellis", w: 613, h: 922 },
  ],
  idea1: [
    { asin: "B0H396TYS2", title: "Lume Vale 42 Inch Rectangular Propane Fire Pit Table, 50,000 BTU", w: 1327, h: 885 },
    { asin: "B019IH29O0", title: "Keter Urban Knit Pouf Ottoman Set of 2 with Storage Table", w: 1360, h: 1144 },
  ],
  idea2: [
    { asin: "B07HHFLMWY", title: "Best Choice Products 6-Person Acacia Wood Dining Table, Indoor and Outdoor", w: 1500, h: 1302 },
    { asin: "B0DZ2TRMS6", title: "Outdoor Solar Chandelier, 4-Light 19 Inch Rattan Pendant, Waterproof", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0F7QT1B3V", title: "Cedar Wood Gazebo, 10 x 12 Ft, Hardtop Galvanized Steel Double Roof", w: 1500, h: 1500 },
    { asin: "B0CWGLLB1F", title: "Waipfaru 12 Pack Hanging Artificial Wisteria Flowers, 3.6 Ft, Purple", w: 1200, h: 1500 },
  ],
  idea4: [
    { asin: "B0D8B2TLJR", title: "VINGLI 6 Ft Wooden Porch Swing Bed, 880 lb Capacity, Pine, Brown", w: 1418, h: 1254 },
    { asin: "B0FLPMVHYH", title: "Outdoor Twin Size Patio Swing Bed Mattress and Pillow Covers with Zipper", w: 1500, h: 1049 },
  ],
  idea5: [
    { asin: "B0H995YP7C", title: "VINGLI 9 x 12 Ft Retractable Pergola Canopy with Adjustable Sun Shade", w: 1500, h: 1500 },
    { asin: "B0CR45SVK2", title: "Kante 9.8 Inch Tall Cylinder Concrete Planter, Weathered Finish", w: 1500, h: 1426 },
  ],
  idea6: [
    { asin: "B0H25SGZQC", title: "COZEER Weatherproof Outdoor Grill Table Cart with Storage", w: 1500, h: 1500 },
    { asin: "B0DDS6WHFW", title: "BesLowe 2 Pack Modern Outdoor Wall Sconces, Black Porch Lights", w: 1500, h: 1499 },
  ],
  idea7: [
    { asin: "B087TGRT85", title: "Svater 105 Ft Commercial Grade Waterproof Outdoor String Lights", w: 1500, h: 1467 },
    { asin: "B0GCZP3MFB", title: "Perfnique Black Metal Decorative Lanterns, Set of 3, Indoor and Outdoor", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B07BM9PC7S", title: "Kenroy Home San Pablo Indoor and Outdoor Wall Fountain, Bronze Finish", w: 847, h: 1500 },
    { asin: "B08KHSPHR8", title: "Alpine Corporation 32 Inch Cascading Stone Wall Fountain with LED Lights", w: 798, h: 1500 },
  ],
  idea9: [
    { asin: "B0DJS9RYRC", title: "INGOFIN 12 Inch Terracotta Pot with Saucer and Drainage Hole", w: 1125, h: 1500 },
    { asin: "B004FNX20I", title: "BGI Fertilizers BOUGAIN Bougainvillea Plant Food, 10 lb Bag", w: 1000, h: 1000 },
  ],
  idea10: [
    { asin: "B0DBHGBWFT", title: "Goutime Double Macrame Boho Hammock, Portable Tree Hammock, Beige", w: 1500, h: 1462 },
    { asin: "B0C98MMZXS", title: "SZHLUX Double Hammock with Stand for Outside", w: 1500, h: 1339 },
  ],
  idea11: [
    { asin: "B0G51WLRRD", title: "Mrsenloi 10 x 10 Pergola Shade Cover Replacement, Top Only, Beige", w: 1500, h: 1125 },
    { asin: "B08SLS3QBX", title: "Outsunny 12 x 10 Ft Retractable Pergola Canopy with Sun Shade, Beige", w: 1500, h: 803 },
  ],
  idea12: [
    { asin: "B0DS49VC81", title: "IPYNBAP Outdoor Bench Cushion, 48 x 18 x 5 Inch, Navy Blue", w: 1500, h: 820 },
    { asin: "B0DQ8P5CD9", title: "Waterproof Outdoor Pillow Covers, 18 x 18 Inch, Black and Beige, Set of 4", w: 931, h: 937 },
  ],
  idea13: [
    { asin: "B0CR12GK4X", title: "HolidayIdeas Waterproof Outdoor Curtains for Patio, 54 x 84 Inch, Cream, 6 Pack", w: 1200, h: 1500 },
    { asin: "B0DMT21HPW", title: "No-Drill Outdoor Tension Curtain Rod, 30 to 132 Inch", w: 1500, h: 1500 },
  ],
  idea14: [
    { asin: "B07DGZ2D4G", title: "Perennial Farm Marketplace October Plant Stonecrop Sedum Groundcover", w: 1000, h: 1333 },
    { asin: "B0FH5W3DB6", title: "Mountain Crest Gardens Live Succulent Plant Assortment, 25 Mini Potted Succulents", w: 1484, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "pergola-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "pergola-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Build a Fire Pit Pergola",
    paras: [
      "Want your backyard to become the default hangout spot? Put a fire pit under a pergola and watch people show up who usually never do.",
      "Pick your fire style &mdash; a gas-powered bowl, a built-in brick pit, or a classic wood-burning setup &mdash; then ring it with cushioned seating or floor poufs so people can actually gather around it.",
      "A curved built-in bench wrapping a stone fire pit, like the one shown here strung with string lights, turns a simple backyard feature into the kind of spot nobody wants to leave once the sun goes down.",
    ],
    photo: photo("fire-pit.jpg", "White pergola with string lights draped overhead, curved built-in bench seating and a stone fire pit glowing at dusk", 683, 1024, "idea1"),
  },
  {
    n: "02",
    title: "Set Up a Dining Pergola",
    paras: [
      "Eating outside just hits differently, and nothing makes it feel more intentional than placing the dining table directly under a pergola.",
      "A wooden table, comfortable chairs, and an overhead pendant light do most of the work. Potted herbs around the perimeter double as a built-in spice rack, and a rug underneath helps define and cozy up the space.",
      "A full table setting under a vine-covered pergola with a glowing chandelier overhead, like the one shown here, makes the case for al fresco dinners better than any amount of description could.",
    ],
    photo: photo("dining-area.jpg", "Outdoor dining table set with white linens under a vine-covered wood pergola, lit by a hanging crystal chandelier", 683, 1024, "idea2"),
  },
  {
    n: "03",
    title: "Go With a Classic Wooden Pergola",
    paras: [
      "There's a reason wooden pergolas never actually go out of style &mdash; they just work. Cedar and redwood are the top picks since both resist weather naturally, meaning less chance of the whole structure turning into a termite buffet.",
      "Let climbing plants like wisteria or ivy take over the frame for a genuinely fairytale effect. It takes a season or two to fill in, but the payoff is worth the wait.",
      "A wood structure nearly swallowed by draping wisteria and climbing roses, like the one shown here, is exactly the kind of result that gets neighbors seriously jealous.",
    ],
    photo: photo("wooden-pergola.jpg", "Small wooden pergola structure with lattice sides nearly covered by draping wisteria blooms and white climbing roses", 683, 1024, "idea3"),
  },
  {
    n: "04",
    title: "Hang a Swing Bed",
    paras: [
      "This is the ultimate version of pergola luxury: not a bench, not a hammock, a whole bed that swings. Once you've tried it, everything else feels like a downgrade.",
      "Hang a mattress-sized platform from the pergola frame using sturdy ropes or chains, then layer it with outdoor cushions and throws &mdash; whatever makes it genuinely nap-worthy.",
      "A plush hanging daybed suspended beneath ornate columns and trailing vines, like the one shown here glowing under lantern light, is proof that a pergola can feel like a resort if you commit to it.",
    ],
    photo: photo("swing-bed.jpg", "Plush white hanging daybed swing suspended by chains beneath an ornate columned pergola draped in flowering vines and lit by lanterns", 683, 1024, "idea4"),
  },
  {
    n: "05",
    title: "Try a Sleek Minimalist Pergola",
    paras: [
      "If your taste leans toward less-is-more, a minimalist pergola with clean lines and a neutral palette is the move. Powder-coated aluminum or steel keeps it looking sharp without any maintenance drama.",
      "The appeal is straightforward: no clutter, a natural fit for modern homes, and a frame that won't rot, warp, or attract bugs the way wood eventually can.",
      "A simple gray aluminum structure over a stone patio with a few sculptural succulents, like the one shown here, shows how much restraint can still read as genuinely considered design.",
    ],
    photo: photo("minimalist-pergola.jpg", "Sleek gray minimalist aluminum pergola over a concrete patio with built-in bench seating and potted succulents", 683, 1024, "idea5"),
  },
  {
    n: "06",
    title: "Install an Outdoor Kitchen Pergola",
    paras: [
      "For anyone who genuinely loves hosting cookouts, or just likes the idea of hosting cookouts, an outdoor kitchen under a pergola is close to a no-brainer.",
      "Cover the grill, prep station, and a mini bar with a solid pergola frame. Tile or brick protects the surfaces and adds style at the same time, and string lights or sconces mean you can still flip burgers after dark.",
      "A full stone outdoor kitchen with a built-in grill hood and bar seating, like the setup shown here, turns weekend cooking into an actual event rather than a chore done at an awkward angle from the kitchen window.",
    ],
    photo: photo("outdoor-kitchen.jpg", "Stone outdoor kitchen with a built-in grill and hood under a pergola, with bar stool seating and a separate dining table nearby", 683, 1024, "idea6"),
  },
  {
    n: "07",
    title: "String Up Lights for a Backyard Glow-Up",
    paras: [
      "Want to make your space feel like a movie set? Add string lights. It's the single cheapest, fastest transformation on this entire list.",
      "A rustic pergola with reclaimed wood and soft, twinkling bulbs draped across the beams turns a backyard into something that feels like an enchanted little getaway after dark.",
      "Add a wooden bench or a vintage porch swing underneath, like the lantern-lit benches shown here, and the setup is basically begging for a quiet night in with wine and good company.",
    ],
    photo: photo("string-lights.jpg", "Rustic wooden pergola strung with warm string lights at dusk, with wood benches and lit lanterns along a gravel path underneath", 683, 1024, "idea7"),
  },
  {
    n: "08",
    title: "Pair It With a Water Feature",
    paras: [
      "Ever wanted to feel like you're at a luxury spa without actually leaving home? Combine a pergola with a peaceful water feature and get most of the way there.",
      "A tabletop fountain, a trickling wall-mounted stream, or even a small koi pond all work &mdash; the sound genuinely helps mask traffic, chatty neighbors, or a dog that won't stop barking two yards over.",
      "A dark wood pergola positioned beside a sheet of falling water, like the one shown here lit in golden evening light, creates the kind of calm that makes you forget you're technically still in your own backyard.",
    ],
    photo: photo("water-feature.jpg", "Wood pergola beside a wall-mounted water feature with cascading water into a reflecting pool, with lounge seating nearby at golden hour", 683, 1024, "idea8"),
  },
  {
    n: "09",
    title: "Go Mediterranean",
    paras: [
      "Can't make it to Santorini this summer? Bring the Mediterranean to the backyard instead with whitewashed wood or textured stucco finishes.",
      "Add bougainvillea, terracotta pots, and breezy linen drapes, then sprinkle in a few colorful tiles for genuine island flair. The effect is surprisingly convincing.",
      "Columns wrapped in cascading magenta bougainvillea against white stucco, like the pergola shown here, makes a solid case for pretending you're somewhere on the Amalfi Coast &mdash; works every time.",
    ],
    photo: photo("mediterranean.jpg", "Whitewashed stucco pergola columns wrapped in cascading magenta bougainvillea above a terracotta tile patio with colorful cushioned seating", 683, 1024, "idea9"),
  },
  {
    n: "10",
    title: "Hang a Hammock",
    paras: [
      "Sometimes the simplest move is the right one: a hammock under a pergola might be the coziest backyard addition on this entire list.",
      "A macrame or woven canvas hammock earns extra boho points. Add a side table for a drink or a book, and if full-cocoon napping is the goal, shade curtains seal the deal completely.",
      "A colorful woven hammock strung between wood posts, like the one shown here with mountain views in the background, makes a strong case for never going back inside.",
    ],
    photo: photo("hammock.jpg", "Colorful striped woven hammock with macrame fringe hung beneath a wood pergola on a deck, surrounded by trees and potted plants", 683, 1024, "idea10"),
  },
  {
    n: "11",
    title: "Add a Retractable Canopy",
    paras: [
      "Some days call for full sun, other days don't. A pergola with a retractable canopy gives genuine weather control &mdash; pull it open for sunlight, close it the second a surprise summer drizzle hits.",
      "Water-resistant canvas or UV-blocking fabric are the materials to look for. The whole setup functions like outdoor air conditioning, minus the actual AC unit.",
      "A sand-toned retractable awning shading a full lounge seating area, like the one shown here, proves how much comfort a little mechanical flexibility can add to an otherwise simple structure.",
    ],
    photo: photo("retractable-canopy.jpg", "Modern pergola with a retractable sand-colored fabric canopy shading wicker lounge seating on a stone patio with potted flowers", 683, 1024, "idea11"),
  },
  {
    n: "12",
    title: "Build In a Bench",
    paras: [
      "This one's a lifesaver for smaller yards. A pergola with a built-in bench gives both seating and structure without wasting a single extra foot of space.",
      "Customize the shape freely &mdash; a wraparound corner bench works beautifully &mdash; and add weatherproof cushions and throw pillows. The bench base can double as bonus storage, because there's always a need for more of that.",
      "A rose-covered wood structure wrapping a cushioned corner bench, like the one shown here strung with fairy lights, delivers genuine seating and genuine charm from a fairly compact footprint.",
    ],
    photo: photo("built-in-bench.jpg", "Wood pergola with a built-in cushioned corner bench covered in pillows, framed by climbing pink roses and string lights", 683, 1024, "idea12"),
  },
  {
    n: "13",
    title: "Drape It in Outdoor Curtains",
    paras: [
      "Want instant drama, the good kind? Flowing outdoor curtains on a pergola completely transform the whole vibe of the space.",
      "Sheer white panels billowing in the breeze lean romantic. Heavier linen or outdoor blackout curtains add real privacy. Either way, curtains also block wind and nosy neighbors, which are equally annoying.",
      "A pergola wrapped in soft ivory drapes around a rattan seating area, like the one shown here, reads as spa retreat meets open-air cabana &mdash; genuinely hard to argue with.",
    ],
    photo: photo("outdoor-curtains.jpg", "Sheer ivory outdoor curtains draped around a pergola framing a rattan sofa, coffee table and lanterns on a wood deck", 683, 1024, "idea13"),
  },
  {
    n: "14",
    title: "Add a Living Green Roof",
    paras: [
      "This one's for the plant lovers. A green roof is basically nature's crown for a pergola, and it does more than just look good.",
      "Use lightweight succulents, moss, or drought-tolerant grasses, and keep the top flat or gently sloped so soil and drainage actually hold. Beyond the visual payoff, a green roof genuinely helps insulate and reduce heat underneath.",
      "A white pergola topped with a full planted roof beside a small pond, like the one shown here, is environmentally conscious and striking enough to stop anyone walking by.",
    ],
    photo: photo("green-roof.jpg", "White pergola with a fully planted living green roof of succulents and grasses, positioned beside a small garden pond with seating underneath", 683, 1024, "idea14"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || ""}`;
}

const body = `
<p>A backyard staring back with blank potential doesn't need a landscape architect or a shipment of imported Italian pavers to become something real. Most of the time, the right pergola and a little creativity gets you most of the way there.</p>
<p>Pergolas aren't just fancy wood frames sitting in someone else's garden. Done right, they give a backyard actual structure, add shade exactly where it's needed, and turn a vague "we should use the backyard more" into somewhere people genuinely want to be.</p>
${photo("hero.jpg", "Wood pergola walkway covered in climbing vines leading to a stone fountain surrounded by greenery", 1152, 768, "hero")}

<h2>14 Pergola Ideas Worth Building</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Fourteen pergola ideas, all genuinely stylish, functional, and doable without a full design team. Whether the goal is a peaceful hideaway, a dinner-party setup, or a full backyard flex that makes the neighbors a little jealous, there's a version here worth building.</p>
<p>Match the materials to the climate, layer in real lighting, add plants, and let the small personal touches do the rest. Whatever the vibe &mdash; a hammock nap, a wine night, a proper garden party &mdash; the right pergola makes the backyard the place to actually be.</p>
`;

module.exports = { body };
