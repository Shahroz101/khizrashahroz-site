// Body content for "15 Farmhouse Decor Ideas for a Cozy Home". Photos
// carried over from the source article, Pinterest pin links preserved.
// Source had an extremely padded intro (6 sub-sections covering what
// farmhouse decor is, why it works, key elements, modern vs
// traditional, how to start, common mistakes — 8 photos before idea 01
// even started); condensed to 2 sections. 13 of 15 ideas had a photo
// in the source (idea 04, Vintage-Inspired Lighting, instead had
// embedded Amazon product links with no lifestyle photo; idea 15,
// Final Layering Tricks, had none) — both genuine gaps. Rewritten out
// of the source's casual, first-person "I" voice into the site's
// calmer, neutral tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B08XYVXHBY", title: "Modern Black Farmhouse Clear Glass Cylinder Mini Pendant Light", w: 485, h: 944 },
    { asin: "B0CCYXKTLN", title: "American Walnut End Grain Butcher Block Cutting Board", w: 1500, h: 1422 },
  ],
  whatMakes: [
    { asin: "B07ZVKBJJX", title: "RGB World Farmhouse Wood Bead Garland with Boho Tassel, Long", w: 1368, h: 1500 },
    { asin: "B0DQP9K8CD", title: "CubesLand Scalloped Woven Storage Basket with Handle", w: 1417, h: 1095 },
  ],
  starting: [
    { asin: "B09SHDW2KT", title: "JUMMICO TV Stand for 65 Inch TV, Sliding Barn Doors, White", w: 1500, h: 1323 },
    { asin: "B0CLXPDHHL", title: "Vintage Enamel Pitcher with Wide Handle, Farmhouse Metal Pitcher Vase", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B09514WX62", title: "inhand Off White Knitted Throw Blanket for Couch and Bed, 50 x 60 Inch", w: 1500, h: 1500 },
    { asin: "B0FX8DCMCQ", title: "Foindtower Striped Boucle Throw Pillow Covers, 20 x 20 Inch, Camel", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0DPWXFVV3", title: "Live Edge Natural Wood Coffee Table for Living Room", w: 1500, h: 1500 },
    { asin: "B0HF8J11L4", title: "Epecoya Extra Long Entryway Console Table, 78.7 Inch, Natural Oak Brown", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0CGQSY3W5", title: "NUMENN 5 Tier Freestanding Vintage Bookshelf, Shelving Unit", w: 571, h: 1356 },
    { asin: "B0CSNM3MSD", title: "Solid Elm Wood Floating Shelves for Wall, 24 Inch, Set of 2, Natural", w: 1493, h: 1500 },
  ],
  idea4: [
    { asin: "B0HL1ND4JN", title: "Berger 12 Inch Matte Black Hammered Glass Rustic Mini Pendant Light", w: 1500, h: 1500 },
    { asin: "B0DBZ8SJ8N", title: "SRJJA 24 Inch Farmhouse Table Lamps, Set of 2, with USB A and C Ports", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0GJD3Z14D", title: "Beige Cottagecore Ruffle Couch Cover, 118 x 71 Inch", w: 1500, h: 1500 },
    { asin: "B0DM23XSXV", title: "Karl Home Mid-Century Modern Accent Reading Chair, Green", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0DHW91KK4", title: "Tide and Tales 3D Framed Floral Boho Wall Art, Set of 4", w: 1500, h: 1500 },
    { asin: "B0FLK4XRFX", title: "Kathfly 15 Pack Vintage Picture Frames for Wall", w: 1482, h: 1500 },
  ],
  idea7: [
    { asin: "B0H8LXC2KL", title: "Bendable Faux Greenery Stems, 37.4 Inch, 3 Pcs, Artificial Fern Branches", w: 1500, h: 1380 },
    { asin: "B0FB36RXC8", title: "16 Inch Artificial Eucalyptus Potted Plant, Indoor Faux Plant", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0H1S6YSLX", title: "End Grain Teak Butcher Block Cutting Board, 16 x 11 Inch, 1.5 Inch Thick", w: 1451, h: 1500 },
    { asin: "B0B4RNYMWZ", title: "DOWAN 360 Degree Rotating Extra Large Cooking Utensil Holder", w: 1097, h: 1500 },
  ],
  idea9: [
    { asin: "B0DPLYNHK5", title: "Soft Fluffy Fleece Rust Throw Blanket for Sofa, Couch and Bed", w: 1411, h: 1103 },
    { asin: "B0FL2CC47H", title: "NSNLGSGC Tan Ruffled Gingham Queen Comforter Set", w: 1001, h: 1001 },
  ],
  idea10: [
    { asin: "B0CDKNBZJH", title: "Autumn Alley Matte Black Farmhouse Trash Can and Toilet Brush Set", w: 1014, h: 1075 },
    { asin: "B0G1CKC3WQ", title: "Best Choice Products 6-Piece Bathroom Accessories Set with Vanity Trays", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B07N4J4GB5", title: "Hajoyful Rustic Farmhouse Entryway Hooks, 12 Pack, with Screws", w: 1470, h: 1500 },
    { asin: "B0B4NHMJ7J", title: "Rustic Cast Iron Wall Mounted Farmhouse Coat Hooks, 5 Pack", w: 1500, h: 1497 },
  ],
  idea12: [
    { asin: "B09NL52QL9", title: "Miluolan Black 6-Light Farmhouse Chandelier for Dining Room", w: 1134, h: 1199 },
    { asin: "B0C1ZC3VK5", title: "Kichvoe 7 Inch Vintage Silver Iron Round Serving Tray", w: 1180, h: 1031 },
  ],
  idea13: [
    { asin: "B0GL7XS234", title: "IDEALHOUSE 71 Inch Farmhouse Wooden Dining Table for 6 to 8, Barn Style", w: 1500, h: 1500 },
    { asin: "B08WL4YNPT", title: "Furmax Metal Stackable Trattoria Dining Chairs, Indoor Outdoor", w: 1500, h: 1383 },
  ],
  idea14: [
    { asin: "B0GMW7ZTNX", title: "Lineshading Farmhouse Wooden Book Block Table Decor, Our Home Our Story, 4 Pcs", w: 1080, h: 1500 },
    { asin: "B00XWDMEGU", title: "Castle Arch Pottery Irish Hand-Glazed Heart Shaped Bowl, 6 Inch", w: 1497, h: 1197 },
  ],
  idea15: [
    { asin: "B0CXS5NSSR", title: "Homydecor Buffalo Plaid Outdoor Rug, 28 x 43 Inch, Coffee and White", w: 1500, h: 1500 },
    { asin: "B079ZQ2216", title: "DII Rustic Farmhouse Double Diamond Woven Throw, 50 x 60 Inch, Stone", w: 1314, h: 1095 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "farmhouse-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "farmhouse-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "farmhouse-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Layered Neutral Textiles That Feel Lived-In",
    paras: [
      "Farmhouse style genuinely thrives on layers &mdash; one throw blanket looks fine on its own, but two or three layered together reads as intentional rather than sparse.",
      "Sticking to neutral colors with real texture, rather than loud competing patterns, keeps a layered look calm instead of chaotic.",
      "Mixing textures rather than colors is the real trick here &mdash; it keeps the whole arrangement feeling interesting without tipping into visual noise.",
    ],
    photo: pinPhoto("layered-textiles.jpg", "Layered neutral textiles styled in a farmhouse living room", 683, 1024, "https://www.pinterest.com/pin/30047522507612567/", "Layered Neutral Textiles for Farmhouse Decor", "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Reclaimed Wood Furniture With Character",
    paras: [
      "Farmhouse decor genuinely doesn't want shiny, flawless furniture &mdash; it wants pieces that look like they've lived a little.",
      "Scratches and visible wear don't ruin a reclaimed wood piece; they're usually what makes it feel right in a farmhouse room in the first place.",
      "It doesn't need to be everywhere, either &mdash; one reclaimed wood coffee table or console can shift the warmth of an entire room on its own.",
    ],
    photo: pinPhoto("reclaimed-wood.jpg", "Reclaimed wood furniture with visible character in a farmhouse room", 683, 1024, "https://www.pinterest.com/pin/4591560661707049216/", "Reclaimed Wood Farmhouse Furniture", "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Open Shelving That Feels Practical, Not Cluttered",
    paras: [
      "Open shelving traces directly back to old farmhouse kitchens, where storage doubled as everyday decor &mdash; you used what you had, and you saw it daily.",
      "Done well, open shelves feel collected and intentional; done poorly, they read as pure chaos.",
      "A simple, repeatable pattern &mdash; a stack of items, one tall piece, one small object &mdash; across each shelf keeps the whole arrangement feeling considered rather than random.",
    ],
    photo: pinPhoto("open-shelving.jpg", "Open shelving styled practically in a modern farmhouse living room", 683, 1024, "https://www.pinterest.com/pin/2955556003296916/", "Open Shelving for Farmhouse Decor", "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Vintage-Inspired Lighting That Sets the Mood",
    paras: [
      "Lighting does more than illuminate a room &mdash; it sets the entire emotional tone, and farmhouse style leans specifically toward warm, soft and welcoming.",
      "Harsh lighting undercuts a cozy room instantly, in a way that's hard to fix with styling alone.",
      "Fixtures that feel slightly aged but still genuinely functional work best, and warm bulbs over cool ones matter more than almost any other lighting decision in a farmhouse space.",
    ],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Cozy Farmhouse Living Room Seating",
    paras: [
      "A farmhouse living room should invite people to actually sit down and stay a while &mdash; stiff seating misses the entire point of the style.",
      "A reliable gut check: would this chair be comfortable enough to nap in? If the answer is no, it's worth reconsidering.",
      "Mixing upholstered pieces with wood seating keeps the room visually balanced while still staying genuinely comfortable.",
    ],
    photo: pinPhoto("cozy-seating.jpg", "Cozy farmhouse living room seating with mixed materials", 683, 1024, "https://www.pinterest.com/pin/13229392651439883/", "Cozy Farmhouse Living Room Seating", "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Farmhouse Wall Decor That Feels Personal",
    paras: [
      "Farmhouse-style signs exist for a reason, but a wall covered in fifteen of them misses what actually makes the style work.",
      "Wall decor that feels collected over time, rather than purchased all at once, reads as considerably more genuine.",
      "Farmhouse wall decor shines brightest when it actually tells a specific story rather than copying a generic template.",
    ],
    photo: pinPhoto("wall-decor.jpg", "Vintage-inspired farmhouse wall decor collage", 683, 1024, "https://www.pinterest.com/pin/728035096091885916/", "Farmhouse Wall Decor Collage", "idea6"),
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Natural Greenery That Softens Everything",
    paras: [
      "Plants bring genuine life into a farmhouse space, softening wood tones and balancing out all the neutrals so the room doesn't feel flat.",
      "Whether the greenery is real or faux matters less than whether it looks believable from across the room.",
      "A few low-effort additions &mdash; a potted plant on a shelf, a vase of dried stems &mdash; add real warmth without introducing any actual clutter.",
    ],
    photo: pinPhoto("greenery.jpg", "Natural greenery softening a farmhouse living space", 696, 1024, "https://www.pinterest.com/pin/422281212000024/", "Natural Greenery for Farmhouse Decor", "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Farmhouse Kitchen Details That Feel Welcoming",
    paras: [
      "A farmhouse kitchen should feel warm and functional, not like a showroom someone's afraid to actually cook in.",
      "Small touches do a lot of the real work here &mdash; a wooden cutting board leaned against the backsplash, a crock of utensils, a bowl of fruit on the counter.",
      "These details are what make a kitchen feel genuinely lived-in rather than overly staged for a photo.",
    ],
    photo: pinPhoto("kitchen-details.jpg", "Welcoming farmhouse kitchen details and styling", 683, 1024, "https://www.pinterest.com/pin/3448137209762876/", "Farmhouse Kitchen Decor Details", "idea8"),
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Cozy Farmhouse Bedroom Styling",
    paras: [
      "A bedroom should feel like a genuine retreat, not another showroom to photograph.",
      "Farmhouse style suits bedrooms especially well, since it prioritizes softness and calm over anything too sharp or formal.",
      "A textured throw draped across the foot of the bed is often enough on its own to make the whole room feel instantly more relaxed.",
    ],
    photo: pinPhoto("bedroom-styling.jpg", "Cozy farmhouse bedroom styling with soft textures", 683, 1024, "https://www.pinterest.com/pin/52143308178953501/", "Cozy Farmhouse Bedroom Styling", "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Farmhouse Bathroom Decor That Feels Like a Mini Spa",
    paras: [
      "Bathrooms get overlooked more often than any other room, which is exactly the mistake farmhouse styling corrects.",
      "Even a small bathroom turns genuinely spa-like once a bit of farmhouse character gets layered in &mdash; function and charm balance each other rather than competing.",
      "Nothing about a farmhouse bathroom needs to feel overly precious, which keeps it functional for actual daily use.",
    ],
    photo: pinPhoto("bathroom-spa.jpg", "Farmhouse bathroom decor styled like a mini spa", 683, 1024, "https://www.pinterest.com/pin/5559199537530486/", "Farmhouse Bathroom Spa Decor", "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Entryway Farmhouse Decor That Welcomes Instantly",
    paras: [
      "An entryway sets the tone for an entire home, and farmhouse style handles that first impression especially well &mdash; welcoming rather than intimidating.",
      "A good entryway should feel like a friendly hello, not a design statement meant to impress.",
      "Practical pieces &mdash; a bench, a row of hooks, a small tray for keys &mdash; work especially well here, since they stay useful while still looking intentional.",
    ],
    photo: pinPhoto("entryway.jpg", "Welcoming farmhouse entryway decor", 683, 1024, "https://www.pinterest.com/pin/13510867626752590/", "Farmhouse Entryway Decor", "idea11"),
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Mixing Metal Accents for Balance",
    paras: [
      "Farmhouse spaces genuinely need some contrast &mdash; too much wood and fabric together can start to feel flat without something harder cutting through it.",
      "Metal with an aged, slightly worn finish fits the style far better than anything too shiny or polished.",
      "A black iron light fixture, aged brass hardware, or a vintage metal tray all ground the softness of the rest of the room and keep it from feeling overly sweet.",
    ],
    photo: pinPhoto("metal-accents.jpg", "Mixed metal accents balancing a farmhouse console styling", 683, 1024, "https://www.pinterest.com/pin/163607398959168540/", "Mixed Metal Accents for Farmhouse Decor", "idea12"),
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Farmhouse Dining Spaces That Invite Long Meals",
    paras: [
      "A farmhouse dining space should encourage lingering rather than rushing through a meal.",
      "Designing around comfort, rather than strict formal rules, is what gives these rooms their relaxed character.",
      "A mismatched set of chairs around one solid farmhouse table, rather than a perfectly matched dining set, is often exactly the charm the style is going for.",
    ],
    photo: pinPhoto("dining-spaces.jpg", "Farmhouse dining space styled for long, relaxed meals", 683, 1024, "https://www.pinterest.com/pin/25332816648670907/", "Farmhouse Dining Room Decor", "idea13"),
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Cozy Farmhouse Accessories That Add Personality",
    paras: [
      "Accessories are what actually bring soul into farmhouse decor, showing real personality without overwhelming the room.",
      "Choosing pieces that genuinely feel meaningful, rather than whatever's currently trending, tends to age far better over time.",
      "A few well-chosen objects &mdash; something inherited, something handmade, something collected on a trip &mdash; add warmth without cluttering the space.",
    ],
    photo: pinPhoto("accessories.jpg", "Cozy farmhouse accessories adding personality to a room", 683, 1024, "https://www.pinterest.com/pin/756323331217084273/", "Farmhouse Accessories for Personality", "idea14"),
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Final Layering Tricks That Make Everything Feel Finished",
    paras: [
      "Layering is really what ties an entire farmhouse space together, adding depth and comfort without requiring much actual effort.",
      "A useful final check before calling a room finished: does it have texture, a bit of warmth, and at least one personal touch? If all three are present, the room genuinely works.",
      "The goal was never perfection in the first place &mdash; farmhouse decor values comfort and authenticity over anything that looks too polished or staged.",
    ],
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
<p>Farmhouse decor has stuck around for as long as it has because it's built on comfort rather than trends. It doesn't chase perfection the way some design styles do &mdash; it values warmth, texture and a bit of lived-in imperfection over anything that looks too polished or staged for a photo.</p>
<p>None of the ideas below require redoing a home all at once. Most work as individual additions, layered in gradually room by room, which is really how farmhouse homes tend to come together in the first place.</p>
${photo("hero.jpg", "Farmhouse kitchen with exposed beams, a butcher block island and vintage pendant lights", 1600, 1067, "hero")}

<h2>What Makes Farmhouse Decor Work</h2>
<p>Farmhouse style blends old-house character with modern comfort &mdash; natural materials, neutral colors with real depth, and a mix of old and new pieces rather than anything perfectly matched. It adapts easily to almost any home size, from a full farmhouse down to a single styled corner of an apartment.</p>
${pinPhoto("intro-a.jpg", "Natural materials and neutral tones defining a farmhouse interior", 683, 1024, "https://www.pinterest.com/pin/4591560644527180032/", "Farmhouse Decor Natural Materials", "whatMakes")}

<h2>Starting Small and Building Slowly</h2>
<p>The best farmhouse spaces rarely come together all at once. Starting with one or two pieces, living with them, and adding more over time keeps a home feeling authentic rather than like it was assembled from a single shopping trip. Mixing old and new without hesitation is part of what makes the style feel genuinely personal rather than copied.</p>
${pinPhoto("intro-b.jpg", "Farmhouse interior built up gradually with a mix of old and new pieces", 683, 1024, "https://www.pinterest.com/pin/650981321172174814/", "Building Farmhouse Decor Gradually", "starting")}

<h2>15 Farmhouse Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these fifteen ideas need to happen at once to make a real difference. Farmhouse decor rewards patience far more than most other styles &mdash; adding one piece, living with it, and building outward from there.</p>
<p>The homes that pull this style off best are rarely the ones that followed a strict formula &mdash; they're the ones that let real life and a few imperfect, meaningful pieces shape the space over time.</p>
`;

module.exports = { body };
