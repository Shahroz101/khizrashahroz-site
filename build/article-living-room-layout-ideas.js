// Body content for "15 Living Room Layouts for Every Kind of Space".
// Photos carried over from the source article (AI-generated style, no
// Pinterest links). The source reused the exact same photo for both
// "Corner Hugger" and "Conversation Circle" — downloaded twice under
// separate filenames; the Conversation Circle text was softened to
// match what the shared photo actually shows (a corner sectional and
// round table, not four chairs arranged in a literal circle). All 15
// layouts have a photo; none dropped. Distinct from the site's existing
// living room articles (cozy-living-room-ideas, green-living-room-ideas,
// coastal-living-room-ideas), which cover decor/styling rather than
// furniture arrangement.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D12R1V39", title: "Furmax U-Shaped Sectional Couch for Living Room, Chenille, Grey", w: 1500, h: 1197 },
    { asin: "B0FGPQXWV2", title: "ZttRiee Round Coffee Table with Sliding Doors, Mid-Century, Walnut", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0BLN33BCJ", title: "Yaheetech Mid-Century Accent Chairs, Set of 2, Light Brown", w: 1500, h: 973 },
    { asin: "B0BG2JC4GC", title: "FEED GARDEN 3-Panel Fireplace Screen, 48 x 29 Inch, Foldable, Wrought Metal", w: 1152, h: 896 },
  ],
  idea2: [
    { asin: "B0HCZKHFN4", title: "ROWHY 112 Inch Modular Sectional Cloud Couch with Movable Ottoman, Black Chenille", w: 1500, h: 1500 },
    { asin: "B0888JVZH4", title: "NSdirect 36 Inch Round Coffee Table, 2-Tier Rustic Wood with Storage", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0FFMBSVJJ", title: "Touch Table Lamps, Set of 2, 21 Inch, with USB C and A Ports, Black", w: 1500, h: 1500 },
    { asin: "B0B76M4C8N", title: "TUTOTAK End Tables, Set of 2, 2-Tier Storage Shelf Side Tables", w: 1476, h: 1119 },
  ],
  idea4: [
    { asin: "B0GCJCBVHC", title: "Kitstorack 76.9 Inch Narrow Console Table with Power Outlet", w: 1500, h: 1014 },
    { asin: "B0FC279283", title: "VASAGLE 31.5 Inch Narrow Console Table, 2-Tier Sofa Table with Shelves", w: 1253, h: 1500 },
  ],
  idea5: [
    { asin: "B0HGB5BM6M", title: "70 Inch Mid-Century Fluted TV Stand for TVs up to 75 Inch, with 2 Storage Cabinets", w: 1500, h: 1500 },
    { asin: "B0H75G198J", title: "FAMIDGE Low Oval Japanese Floor Coffee Table with Solid Wood Legs, 23.6 Inch", w: 1500, h: 1169 },
  ],
  idea6: [
    { asin: "B0GHNPP2CM", title: "MAXYOYO Loveseat Sofa Couch, Upholstered Cloud Seat", w: 1500, h: 1500 },
    { asin: "B0D9BBX6FV", title: "FAMIDGE 23.6 Inch Round Coffee Table, Black", w: 1500, h: 1361 },
  ],
  idea7: [
    { asin: "B0GTLNFX8Q", title: "Novilla No-Assembly Modular Sectional Cloud Couch with Smarts Coil Support", w: 1500, h: 1500 },
    { asin: "B0DD4G9Q12", title: "5.5 x 5.5 Ft Round Jute Area Rug, Natural Hand Woven Circle Rug", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0FGD5615L", title: "Mid-Century Modern Coffee Table with Glass Top and Wood, 32 Inch", w: 1500, h: 1500 },
    { asin: "B0FW4QX1QD", title: "Battery Operated Wall Sconces, Set of 2, Rechargeable Wireless Wall Lights", w: 1434, h: 1500 },
  ],
  idea9: [
    { asin: "B0GL357H51", title: "8 x 10 Neutral Washable Area Rug for Living Room and Bedroom, Beige", w: 1500, h: 1500 },
    { asin: "B0D5HCB175", title: "Homeiju 31.5 Inch Console Table with Storage, 3-Tier Industrial Style", w: 1500, h: 1385 },
  ],
  idea10: [
    { asin: "B0GT4XBFC7", title: "Armocity 35.4 Inch Round Wood Coffee Table with 2-Tier Storage", w: 1500, h: 1500 },
    { asin: "B0GX69DPNG", title: "GRUSIGN 108 Inch Modular Boneless Sofa, Sectional Couch for Living Room", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B0H4Q6B27W", title: "XBurmo Folding Desk, 35.8 Inch, No Assembly, Space-Saving Workstation", w: 1398, h: 1461 },
    { asin: "B0BG8B89BP", title: "Tiita Lazy Chair with Ottoman, Comfy Reading Accent Chair, Dark Grey", w: 1500, h: 1439 },
  ],
  idea12: [
    { asin: "B0HK78CFR2", title: "78 Inch 5-in-1 Convertible Futon Sofa Bed, Boneless Couch for Living Room", w: 1500, h: 1500 },
    { asin: "B0G4RVF3W5", title: "Floor Corner TV Stand with Mount, 23 to 60 Inch, for Bedroom and Living Room", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0D1464NHJ", title: "Woven Cotton Rope Toy Storage Basket for Kids, Blanket Basket", w: 1500, h: 1500 },
    { asin: "B0FHHD6HXH", title: "Non-Slip Kids Car Rug, Road Playmat for Toy Cars, Educational Town City Map", w: 1500, h: 1500 },
  ],
  idea14: [
    { asin: "B0F13T2633", title: "OWENIE Cream Sheer Curtains, 84 Inches Long, 2 Panels, Soft Solid", w: 1500, h: 1500 },
    { asin: "B0BY8X5GFY", title: "BLEUM CADE Artificial Hanging Plants, 2 Pcs, Faux Pothos Vines Greenery", w: 1487, h: 1454 },
  ],
  idea15: [
    { asin: "B0DDHSNX1L", title: "HOOOWOOO L-Shaped Sectional Couch, 106 Inch, Assembly Free, Extra Deep Corduroy", w: 1290, h: 1290 },
    { asin: "B0GVWG9V16", title: "Low Coffee Table with Solid Wood Legs, 31.5 x 19.7 Inch, Large Oval", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "living-room-layout-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "living-room-layout-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Face the Fireplace",
    paras: [
      "A fireplace is already begging to be the room's focal point, so the layout might as well commit to it fully.",
      "Floating the sofa two to three feet off the wall gives the arrangement real breathing room, and two accent chairs angled inward turn it into a genuinely conversation-ready setup.",
      "It works especially well for cozy conversation or a quiet evening of background noise from the fire &mdash; the layout does most of the mood-setting on its own.",
    ],
    photo: photo("face-fireplace.png", "Living room arranged with a sofa and two accent chairs facing a fireplace", 574, 1024, "idea1"),
  },
  {
    n: "02",
    title: "The L-Shaped Sectional",
    paras: [
      "An open floor plan or an awkwardly wide room is exactly where an L-shaped sectional earns its keep.",
      "It defines the living room zone inside an open layout, gives everyone an actual seat, and works almost like a soft room divider without ever reading as a wall.",
      "A round coffee table in the middle softens all those right angles and keeps the whole arrangement from feeling too boxy.",
    ],
    photo: photo("l-shaped-sectional.png", "L-shaped sectional sofa defining a living room zone with a round coffee table", 574, 1024, "idea2"),
  },
  {
    n: "03",
    title: "The Symmetrical Setup",
    paras: [
      "For anyone who gets genuinely bothered by things not lining up, a symmetrical layout delivers real visual calm.",
      "A sofa placed directly across from two matching chairs, paired with identical lamps or side tables on each side, creates instant balance.",
      "The result reads as considered and intentional the moment anyone walks in &mdash; nothing about it feels accidental.",
    ],
    photo: photo("symmetrical.png", "Symmetrical living room layout with a sofa facing two matching chairs and identical side tables", 574, 1024, "idea3"),
  },
  {
    n: "04",
    title: "Floating Furniture, Away From the Walls",
    paras: [
      "The sofa doesn't actually need to sit against a wall, and pulling it inward changes the whole feel of a large or open room.",
      "Floating the furniture toward the center, with a slim console table behind the sofa for extra style and storage, makes the space feel custom rather than just filled.",
      "It's one of the easiest ways to make a layout read as intentional instead of like furniture that landed wherever it fit.",
    ],
    photo: photo("floating-furniture.png", "Sofa floated away from the wall in the center of a living room with a console table behind it", 574, 1024, "idea4"),
  },
  {
    n: "05",
    title: "Built Around the TV",
    paras: [
      "For a household that genuinely organizes the whole room around screen time, this layout just leans into it honestly.",
      "The sofa sits directly across from the television, with chairs or poufs added to the side rather than in the sightline, and the coffee table stays low so nothing blocks the view.",
      "A media console with hidden storage handles the remotes, cables, and general tech clutter that tends to pile up around a TV setup.",
    ],
    photo: photo("tv-focused.png", "Living room arranged with a sofa facing a TV and a low coffee table with hidden media storage", 574, 1024, "idea5"),
  },
  {
    n: "06",
    title: "Two Loveseats Instead of One Sofa",
    paras: [
      "A room too small for a full sofa doesn't have to settle for less seating &mdash; two loveseats offer nearly the same capacity in a more flexible footprint.",
      "They can sit parallel to each other or be angled inward depending on how social the room needs to feel.",
      "Paired with a square or round coffee table, the whole arrangement keeps a natural flow even in a genuinely tight space.",
    ],
    photo: photo("two-loveseats.png", "Two loveseats arranged in a small living room with a round coffee table between them", 574, 1024, "idea6"),
  },
  {
    n: "07",
    title: "The Corner Hugger",
    paras: [
      "An awkward unused corner stops being a problem once a sectional or small couch gets nestled directly into it.",
      "A cozy corner sectional with soft pillows and a knit throw, paired with a round coffee table and a jute rug, opens the rest of the room up naturally.",
      "This layout delivers a genuine cozy nook without adding any real clutter to the floor plan.",
    ],
    photo: photo("corner-hugger.png", "Gray corner sectional with pillows and a knit throw nestled into a room corner, next to a round coffee table and jute rug", 574, 1024, "idea7"),
  },
  {
    n: "08",
    title: "Double Sofa Energy",
    paras: [
      "For a room with the square footage to spare, two full sofas facing each other brings a genuinely elevated feel.",
      "A statement coffee table anchoring the center, with lamps or sconces behind each sofa for ambient light, completes the look.",
      "It's fancy without trying too hard, and it's an especially strong setup for entertaining a group rather than just one or two people.",
    ],
    photo: photo("double-sofa.png", "Two sofas facing each other with a statement coffee table in between", 574, 1024, "idea8"),
  },
  {
    n: "09",
    title: "Zoned Out for Open Floor Plans",
    paras: [
      "When the living room blends straight into the kitchen, dining area, or home office, zoning becomes essential rather than optional.",
      "A rug visually separates the seating area, the sofa faces away from the dining space, and a console or shelf acts as a subtle divider between zones.",
      "The open space ends up feeling purposeful instead of like one long stretch of furniture with no clear boundaries.",
    ],
    photo: photo("zoned-open-plan.png", "Open floor plan living room visually zoned off from the dining area using a rug and console table", 574, 1024, "idea9"),
  },
  {
    n: "10",
    title: "Built for Conversation",
    paras: [
      "This layout skips the television as the focal point entirely and prioritizes face-to-face conversation instead.",
      "A cozy sectional angled toward a round table, rather than toward a screen, keeps the whole room oriented around talking rather than watching.",
      "It's the right call for a household that leans more toward game nights and long conversations than toward background TV.",
    ],
    photo: photo("conversation-circle.png", "Gray sectional and round coffee table arranged to encourage conversation rather than facing a TV", 574, 1024, "idea10"),
  },
  {
    n: "11",
    title: "The Multi-Tasking Layout",
    paras: [
      "A living room that has to pull double duty needs a layout that acknowledges that directly rather than fighting it.",
      "Splitting the space &mdash; sofa and chairs for lounging on one side, a small desk or reading corner on the other &mdash; lets both functions coexist.",
      "A rug or a lighting shift between the two zones is usually enough to visually separate them without adding a wall.",
    ],
    photo: photo("multi-tasker.png", "Living room split into a lounging zone and a small reading or work corner", 574, 1024, "idea11"),
  },
  {
    n: "12",
    title: "Diagonal Drama",
    paras: [
      "Angling furniture on the diagonal sounds unconventional, but it genuinely works in the right room.",
      "It breaks up a boxy floor plan, adds visual interest that a straight arrangement never creates, and makes a long, narrow room feel noticeably wider.",
      "Angling the sofa toward a corner, especially one with a TV or fireplace, gives the whole layout a surprisingly designer-level feel.",
    ],
    photo: photo("diagonal-drama.png", "Sofa angled diagonally in a living room to break up a boxy floor plan", 574, 1024, "idea12"),
  },
  {
    n: "13",
    title: "Kids and Adults, Clearly Split",
    paras: [
      "A household with young kids doesn't need to pretend the living room stays photo-ready at all times &mdash; splitting the space smartly solves more than it hides.",
      "An adult zone with the couch, chairs and a coffee table that's off-limits to little hands sits apart from a kid zone with a soft rug and a toy basket.",
      "A shelf or bench between the two keeps the space open while still giving each zone its own clear boundary.",
    ],
    photo: photo("kids-adults.png", "Living room split into a defined adult seating zone and a kid-friendly play area", 574, 1024, "idea13"),
  },
  {
    n: "14",
    title: "Window-Facing Zen",
    paras: [
      "A room with genuinely good windows should be arranged to actually use them, not ignore them in favor of facing a blank wall.",
      "Turning the sofa toward the view instead of away from it makes the space feel calmer and considerably more connected to the outdoors.",
      "Sheer curtains soften the light coming in, and a leafy plant or two rounds out the quiet, window-facing mood.",
    ],
    photo: photo("window-facing-zen.png", "Sofa facing a large window with sheer curtains and a leafy plant nearby", 574, 1024, "idea14"),
  },
  {
    n: "15",
    title: "The Minimalist Dream",
    paras: [
      "For anyone who genuinely doesn't want clutter, the minimalist layout is really about editing down to the essentials.",
      "One streamlined sofa, one coffee table, and an optional single chair or pouf is the entire formula &mdash; nothing more gets added.",
      "Neutral tones and low-profile furniture make the whole room feel instantly larger and calmer than a more furnished layout ever could.",
    ],
    photo: photo("minimalist-dream.png", "Minimalist living room with a single sofa, one coffee table and neutral low-profile furniture", 574, 1024, "idea15"),
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
<p>Walking into a living room that still feels "off" despite a great couch, a trendy rug, and a genuinely good color palette almost always comes down to one thing: the layout. Furniture arrangement is sneaky that way &mdash; get it wrong and nothing else in the room quite lands the way it should.</p>
<p>Whether the space is a cramped apartment, an awkward floor plan, or a wide-open blank canvas, there's a setup built for it. None of these require buying anything new, just a willingness to push furniture around a few times until it clicks.</p>
${photo("hero.jpg", "Sleek modern living room with furniture arranged to anchor the space", 1152, 768, "hero")}

<h2>15 Living Room Layouts for Every Space</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A fortune spent on decor can't fix a layout that doesn't work. It's the furniture equivalent of a beautifully tailored outfit that doesn't actually fit &mdash; uncomfortable no matter how good it looks from across the room.</p>
<p>Moving things around five times before it finally clicks is normal, not a failure. Look at the space, picture the setup that actually fits how it gets used, and start shuffling &mdash; the right layout is usually just a few furniture moves away.</p>
`;

module.exports = { body };
