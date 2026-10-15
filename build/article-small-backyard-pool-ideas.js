// Body content for "20 Genius Small Backyard Swimming Pool Ideas".
// Photos carried over from the source article, Pinterest pin links
// preserved. Source had a heavily padded 6-section intro (Why It Makes
// Sense / Myths / Key Considerations / Permits & Budget / Why Smart
// Design Beats Square Footage, 8 photos before idea 01 even started);
// condensed to 2 sections per established practice. All 20 ideas had a
// photo in the source and all 20 kept. Rewritten out of the source's
// very personal, anecdotal "I've seen..." voice into the site's
// neutral tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0GS286RFD", title: "Devoko Waterproof Outdoor Chaise Lounge Chairs, Set of 2", w: 1500, h: 1250 },
    { asin: "B09W8LCG2Y", title: "NewTechWood UltraShield Naturale Composite Deck Tiles, 1 x 1 Ft", w: 1500, h: 1500 },
  ],
  why: [
    { asin: "B0G28DN87S", title: "VEVOR Solar Pool Cover, 32 x 16 Ft, 16 Mil Bubble Cover, Blue and Black", w: 1500, h: 1471 },
    { asin: "B08NPRYKH4", title: "POOLWHALE Pool Skimmer Leaf Rake Net with Fine Mesh Deep Bag", w: 1388, h: 1213 },
  ],
  planning: [
    { asin: "B099ZTBR4Y", title: "VINGLI Pool Safety Fence, 4 Ft x 108 Ft, for Inground Pools", w: 1000, h: 1000 },
    { asin: "B0GHQQBXTJ", title: "Floating Pool Safety Alarm for Inground and Above Ground Pools", w: 1200, h: 1302 },
  ],
  idea1: [
    { asin: "B0CB4V34Y8", title: "ODTORY Artificial Grass Wall Greenery Backdrop, 12 Panels, 10 x 10 Inch", w: 1500, h: 1500 },
    { asin: "B0GCZ9HMM2", title: "Suncalla 20 Piece Faux Tropical Outdoor Plants with Ferns, Mixed Greenery", w: 1500, h: 1494 },
  ],
  idea2: [
    { asin: "B0GHRHXB8H", title: "VEVOR 8 Ft Round Stock Tank Pool Liner for Above Ground Pools", w: 1500, h: 1493 },
    { asin: "B0F74Q25ZR", title: "The Pod Company Ice Pod Pro Cold Plunge Tub, 110 Gallon", w: 1500, h: 792 },
  ],
  idea3: [
    { asin: "B09TKKRQYK", title: "Hikeen 4M Swim Training Belt Tether for Swimming in Place", w: 1429, h: 1500 },
    { asin: "B001IWNDDA", title: "INTEX Metal Frame Above Ground Swimming Pool, 9 Ft 10 In x 6 Ft 6.75 In", w: 1500, h: 569 },
  ],
  idea4: [
    { asin: "B0GTQ798NM", title: "No-Dig Wood Privacy Screen Fence Panel, 61 x 38 Inch, Freestanding", w: 1500, h: 1500 },
    { asin: "B0H2M5WV2B", title: "Sun-E 21 Inch Tall Planters with Removable Insert Shelf, Glazed Ceramic Look", w: 1488, h: 1500 },
  ],
  idea5: [
    { asin: "B0FWGTWC8T", title: "Coleman SaluSpa Miami AirJet 2 to 4 Person Inflatable Hot Tub", w: 1500, h: 1271 },
    { asin: "B0FS2VYHPZ", title: "INTEX PureSpa 6 Person Inflatable Hot Tub with Energy-Efficient Spa Cover", w: 1500, h: 1301 },
  ],
  idea6: [
    { asin: "B00HPYAFKY", title: "Bestway Steel Pro MAX 15 Ft x 48 In Above Ground Swimming Pool, Blue", w: 1500, h: 802 },
    { asin: "B0BX965YWC", title: "SUMMERBUDDY Dual Spray Pool Fountain for Above and In-Ground Pools", w: 1194, h: 1500 },
  ],
  idea7: [
    { asin: "B0H8GJYHNK", title: "In-Pool Lounge Chair for Pools Up to 9 Inches Deep or Patio Use", w: 1500, h: 1056 },
    { asin: "B0CX26QY33", title: "Step2 Vero Adirondack Poolside Lounger, Fade-Resistant, Waterproof", w: 1320, h: 1500 },
  ],
  idea8: [
    { asin: "B0F4DFDFF8", title: "Worth Garden 20 Inch White Tall Planters, Set of 2", w: 1500, h: 1500 },
    { asin: "B0GWW49PT3", title: "FUNBOY Cabana Striped Mesh Pool Lounger Float, 70 Inch", w: 709, h: 1364 },
  ],
  idea9: [
    { asin: "B0B2R727KS", title: "Heyroll Custom Size Waterproof Non-Slip Hallway Runner Rug", w: 1500, h: 1500 },
    { asin: "B0GQ9CT8DR", title: "MontVoo Polypropylene Indoor Outdoor Patio Rug, 8 x 10 Ft", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0DWXJHR3Q", title: "Hanaoyo LED Pool Waterfall Fountain, 7 Lighting Colors, for Above Ground Pools", w: 1500, h: 1448 },
    { asin: "B0GV4FDM4P", title: "POOLHOUR Height-Adjustable Pool Fountain for Above Ground and Inground Pools", w: 1140, h: 1500 },
  ],
  idea11: [
    { asin: "B09V4LR4JQ", title: "LukLoy 10 Pack Heavy-Duty Black Stainless Steel Glass Railing Spigots", w: 1200, h: 1200 },
    { asin: "B0DSZVG5CM", title: "LukLoy 10 Pack Glass to Glass Frameless Clamps, 180 Degree", w: 1500, h: 1500 },
  ],
  idea12: [
    { asin: "B0GQSR2SKC", title: "Skybright HDPE In-Pool Chaise Lounge with Wheels, Sun Shelf Lounger", w: 1074, h: 1074 },
    { asin: "B093LTTK9X", title: "Ledge Lounger In-Pool Side Table with 2 Inch Umbrella Hole, White", w: 1238, h: 1366 },
  ],
  idea13: [
    { asin: "B0BXXL4NT3", title: "COSTWAY 5-Tier Vertical Raised Garden Bed Planter Box with Drainage Holes", w: 952, h: 1500 },
    { asin: "B0CKHNSTG3", title: "Grooy Artificial Greenery Grass Wall Panels, 12 Pack, 20 x 20 Inch", w: 1469, h: 1500 },
  ],
  idea14: [
    { asin: "B0CLLG6VT4", title: "LEWIS and WAYNE Tall Wicker Rectangular Planter Box for Outdoors", w: 1143, h: 1402 },
    { asin: "B0DS8GR72R", title: "Kante Modern Rectangular Pale Gray Concrete Planter, 23 x 12 x 12 Inch", w: 1500, h: 1500 },
  ],
  idea15: [
    { asin: "B0CT85JBHF", title: "QOLNBY Floating Pool Lights, 4 Pack, 6 Dynamic Lighting Effects", w: 1492, h: 1481 },
    { asin: "B0GHQWR7BD", title: "Solar Pool Lights, 10 Color 4 Mode LED, for Inground and Above Ground Pools", w: 1193, h: 1500 },
  ],
  idea16: [
    { asin: "B09WYG5X17", title: "Blue Wave Evening Bay 15 Ft Round Overlap Pool Liner for Above Ground Pools", w: 1470, h: 1500 },
    { asin: "B0CL246M4V", title: "Black Glass Mosaic Tile for Swimming Pools and Backsplashes, 11.5 sq ft", w: 1300, h: 1300 },
  ],
  idea17: [
    { asin: "B0GWTCN3P5", title: "Interlocking Polymer Composite Deck Tiles, 10 Pack, Black", w: 1500, h: 1500 },
    { asin: "B0G2J82H5F", title: "Acacia Wood Interlocking Deck Tiles, 12 Inch, 9 Pack", w: 1488, h: 1500 },
  ],
  idea18: [
    { asin: "B002AQUFG6", title: "Confer Plastics Step-1X Above Ground Pool Entry System with Dual Handrails", w: 714, h: 1380 },
    { asin: "B09VXXPT62", title: "Waterproof LED Solar Step Lights for Outdoor Stairs and Decks", w: 1500, h: 1377 },
  ],
  idea19: [
    { asin: "B0DN8DT4TQ", title: "Rainsworth Outdoor Shower Kit, Single Handle Brass Valve, 8 Inch, Black", w: 1255, h: 1500 },
    { asin: "B08FDKQDKH", title: "Artiwell Outdoor Shower Fixture System with Double Handle Utility Faucet", w: 997, h: 1473 },
  ],
  idea20: [
    { asin: "B0GSVJSL89", title: "Heavy Duty Round Steel Wood Burning Fire Pit Bowl for Backyard and Patio", w: 1478, h: 1369 },
    { asin: "B0CGV9Y58W", title: "Grand Lake 38 Inch Round Concrete Natural Gas Fire Bowl, White", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "small-backyard-pool-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "small-backyard-pool-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-backyard-pool-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Courtyard Pools That Turn Privacy Into a Feature",
    paras: [
      "A courtyard-style pool feels intimate and cozy almost by design, especially when the yard is already boxed in by walls or fences on more than one side.",
      "Rather than fighting that enclosed feeling, leaning into it turns a limitation into the whole appeal &mdash; these pools feel like a secret retreat, particularly when paired with greenery and soft evening lighting.",
      "The setup ends up reading less like a backyard and more like a private resort, which is a strong outcome for a space that might otherwise feel cramped.",
    ],
    photo: pinPhoto("courtyard-pool.jpg", "Private courtyard pool surrounded by lush tropical greenery", 736, 981, "https://www.pinterest.com/pin/2955556003216607/", "Courtyard Pool Ideas", "idea1"),
  },
  {
    n: "02",
    title: "Plunge Pools That Feel Luxurious, Not Limiting",
    paras: [
      "Plunge pools focus on cooling off and relaxing rather than swimming laps, which happens to match what most homeowners actually want out of a backyard pool anyway.",
      "They fit into awkward side yards and narrow lots that a traditional pool never could, turning overlooked space into a genuine retreat.",
      "Adding built-in seating around the edge lets the plunge pool double as an outdoor living space, not just a place to cool off.",
    ],
    photo: pinPhoto("plunge-pool.jpg", "Sleek small plunge pool built for a compact backyard", 683, 1024, "https://www.pinterest.com/pin/3025924746479000/", "Plunge Pool Ideas for Small Yards", "idea2"),
  },
  {
    n: "03",
    title: "Narrow Lap Pools That Stretch the Space Visually",
    paras: [
      "A lap pool doesn't need to be wide to earn its keep &mdash; a narrow version works especially well in a long, tight backyard that already feels a little boxed in.",
      "The length draws the eye forward, which makes the whole yard read as larger than its actual footprint.",
      "This layout suits a modern home particularly well, feeling intentional and sleek without demanding any extra square footage to pull off.",
    ],
    photo: pinPhoto("lap-pool.jpg", "Narrow lap pool stretching the length of a small backyard", 736, 960, "https://www.pinterest.com/pin/1548181186044196/", "Narrow Lap Pool Ideas", "idea3"),
  },
  {
    n: "04",
    title: "Corner Pools That Use Dead Space Brilliantly",
    paras: [
      "Corners tend to sit unused and a little awkward in most backyards, which is exactly what makes them such a strong fit for a pool.",
      "Placing the pool in a corner frees up the center of the yard for seating, dining or landscaping, while still creating a natural focal point that doesn't overwhelm the space.",
      "A bit of greenery or a privacy wall alongside the pool makes the whole corner feel intentional rather than like leftover space.",
    ],
    photo: pinPhoto("corner-pool.jpg", "Corner pool making smart use of an awkward backyard space", 683, 1024, "https://www.pinterest.com/pin/427490189650080788/", "Corner Pool Ideas for Small Yards", "idea4"),
  },
  {
    n: "05",
    title: "Spool Pools That Combine Spa and Pool Functions",
    paras: [
      "For anyone torn between wanting a spa and wanting a pool, a spool solves the dilemma by combining both into one compact footprint.",
      "It delivers the comfort of a spa alongside the fun of a pool &mdash; soaking, cooling off, and entertaining, all without needing a large yard.",
      "Spools also work well year-round, since they can be heated in winter and cooled in summer, making them one of the more efficient small-pool options available.",
    ],
    photo: pinPhoto("spool-pool.jpg", "Compact spool pool combining spa and pool functions", 361, 640, "https://www.pinterest.com/pin/140806232984405/", "Spool Pool Ideas", "idea5"),
  },
  {
    n: "06",
    title: "Raised Pools That Add Depth Without Taking Space",
    paras: [
      "Raising a pool off the ground instantly adds a sense of dimension, which helps a small yard feel layered instead of flat.",
      "A raised edge creates a visual break between the lounging area and the swimming zone, without needing walls or fencing to do it.",
      "It's an approach that can make even a modest yard feel architectural and considered, especially when paired with a water feature along the raised edge.",
    ],
    photo: pinPhoto("raised-pool.jpg", "Raised semi-inground pool adding dimension to a small backyard", 683, 1024, "https://www.pinterest.com/pin/84583299249039055/", "Raised Pool Ideas for Small Backyards", "idea6"),
  },
  {
    n: "07",
    title: "Small Backyard Pools With Built-In Seating",
    paras: [
      "Built-in seating changes a pool from a purely swimming feature into a genuine hangout spot.",
      "Benches, ledges and submerged seats cut down on the need for extra poolside furniture, which saves real space in a smaller yard.",
      "People also tend to stay around a pool longer when there's somewhere comfortable to sit directly in the water, which makes the whole space feel more versatile.",
    ],
    photo: pinPhoto("built-in-seating.jpg", "Small pool with built-in seating ledges for a social backyard", 674, 1024, "https://www.pinterest.com/pin/422281211970592/", "Pools With Built-In Seating", "idea7"),
  },
  {
    n: "08",
    title: "Minimalist Pools That Keep Everything Clean and Open",
    paras: [
      "Minimalism tends to work especially well in a tight space, and a pool is no exception.",
      "Clean lines, a neutral color palette, and an uncluttered surround all make a small pool feel calmer and more open than a heavily decorated one.",
      "This kind of restrained design also tends to age better than a heavily trend-driven look, staying just as appealing years down the line.",
    ],
    photo: photo("minimalist-pool.jpg", "Minimalist pool design with clean lines and neutral surroundings", 574, 1024, "idea8"),
  },
  {
    n: "09",
    title: "Indoor-Outdoor Pools That Blur Boundaries",
    paras: [
      "For a home that already opens directly onto the backyard, blurring the line between indoors and outdoors makes a real difference.",
      "Sliding doors, folding walls, and flush flooring create a seamless transition, turning the pool into part of the home itself rather than a separate feature tacked on outside.",
      "The effect can genuinely change how large a space feels, simply by removing the visual break between the two areas.",
    ],
    photo: photo("indoor-outdoor-pool.jpg", "Indoor-outdoor pool with a seamless transition through sliding doors", 683, 1024, "idea9"),
  },
  {
    n: "10",
    title: "Small Backyard Pools With Water Features",
    paras: [
      "When space feels tight, letting sound do some of the work helps distract from the limited square footage.",
      "A waterfall, spillway, or small fountain adds both movement and sound, making the pool area feel more dynamic without taking up any extra room.",
      "A subtle water feature tends to feel calming rather than overwhelming, which keeps the small-space illusion intact rather than fighting it.",
    ],
    photo: pinPhoto("water-features.jpg", "Small pool with a water feature adding drama and sound", 683, 1024, "https://www.pinterest.com/pin/39969515437985405/", "Pools With Water Features", "idea10"),
  },
  {
    n: "11",
    title: "Glass-Edged Pools That Visually Disappear",
    paras: [
      "Glass panels do real work in a tight backyard by removing the usual visual barrier a solid fence or wall creates.",
      "With nothing blocking the sightline, the eye travels further, which tricks the brain into reading the space as larger than it actually is.",
      "It's a particularly strong choice for a pool edge that faces a view worth keeping visible, rather than boxing it in.",
    ],
    photo: pinPhoto("glass-edged-pool.jpg", "Glass fence installation around a small pool for an open sightline", 563, 352, "https://www.pinterest.com/pin/922112092438517579/", "Glass-Edged Pool Ideas", "idea11"),
  },
  {
    n: "12",
    title: "Sun Shelf Pools That Replace Extra Furniture",
    paras: [
      "A sun shelf tends to get overlooked, but it quietly solves a real space problem.",
      "It lets people lounge directly in shallow water without needing separate pool chairs or daybeds nearby, which frees up deck space that would otherwise go to furniture.",
      "For a small backyard, that trade-off is usually worth it &mdash; less furniture, more usable room.",
    ],
    photo: pinPhoto("sun-shelf-pool.jpg", "Pool with a built-in sun shelf replacing poolside furniture", 736, 899, "https://www.pinterest.com/pin/10062799163786575/", "Sun Shelf Pool Ideas", "idea12"),
  },
  {
    n: "13",
    title: "Vertical Garden Pools That Add Green Without Crowding",
    paras: [
      "When the ground itself is already at capacity, going vertical is the natural next move.",
      "A vertical garden softens the hard surfaces around a pool without stealing any floor space, and it also boosts privacy considerably faster than a tall fence would.",
      "Using greenery to frame a pool rather than fencing it in tends to read as softer and more intentional overall.",
    ],
    photo: photo("vertical-garden-pool.jpg", "Vertical garden framing a small backyard pool", 669, 499, "idea13"),
  },
  {
    n: "14",
    title: "Pools With Built-In Planters",
    paras: [
      "Rather than scattering potted plants around the deck, integrating planters directly into the pool structure looks considerably more intentional.",
      "It keeps the whole layout feeling clean and planned rather than assembled after the fact.",
      "A few well-placed built-in planters can turn an otherwise basic pool into a genuine design feature on their own.",
    ],
    photo: pinPhoto("built-in-planters.jpg", "Pool with built-in planters integrated into the structure", 683, 1024, "https://www.pinterest.com/pin/282952789083067234/", "Pools With Built-In Planters", "idea14"),
  },
  {
    n: "15",
    title: "Lighting That Transforms Small Pools at Night",
    paras: [
      "Lighting does more than help with visibility after dark &mdash; it genuinely sets the mood for the whole space.",
      "Soft lighting extends how the pool reads visually after sunset, adding depth and a bit of drama without introducing any new physical elements.",
      "Layering a few different light sources, rather than relying on one, tends to produce a softer glow instead of a single harsh glare.",
    ],
    photo: pinPhoto("pool-lighting.jpg", "Small pool transformed by layered lighting at night", 640, 477, "https://www.pinterest.com/pin/14707136281913679/", "Pool Lighting Ideas", "idea15"),
  },
  {
    n: "16",
    title: "Dark-Finish Pools That Add Depth",
    paras: [
      "A light-colored pool reads as clean, but a dark-finished one reads as deep &mdash; a useful illusion in a compact space.",
      "Darker finishes reflect less light, which creates the impression of greater depth and makes a smaller pool feel more substantial than it actually is.",
      "The look reads as bold rather than heavy, and it's become a far more common choice than it once was for exactly this reason.",
    ],
    photo: photo("dark-finish-pool.jpg", "Dark-finish pool creating an illusion of depth in a small space", 735, 735, "idea16"),
  },
  {
    n: "17",
    title: "Narrow Decking That Frames the Pool Perfectly",
    paras: [
      "Decking eats up space fast when it's sized too generously for a small pool.",
      "A wide deck tends to overwhelm a compact pool, while a narrow one frames it instead, leaving more of the actual yard usable for other things.",
      "Trimming deck width down to what's actually needed is one of the simpler ways to reclaim usable space in a small backyard.",
    ],
    photo: pinPhoto("narrow-decking.jpg", "Narrow decking framing a small pool without overwhelming it", 512, 512, "https://www.pinterest.com/pin/132996995241864290/", "Narrow Pool Decking Ideas", "idea17"),
  },
  {
    n: "18",
    title: "Multi-Level Pool Zones That Add Interest",
    paras: [
      "Levels create visual separation between areas without needing an actual wall to do it.",
      "Steps, platforms and raised sections naturally define different zones &mdash; a swimming area, a lounging spot, an entry point &mdash; adding structure without clutter.",
      "This approach suits a social backyard particularly well, since it quietly organizes the space without making it feel busy.",
    ],
    photo: pinPhoto("multi-level-pool.jpg", "Multi-level pool zones adding structure to a small backyard", 683, 1024, "https://www.pinterest.com/pin/281543719639407/", "Multi-Level Pool Design Ideas", "idea18"),
  },
  {
    n: "19",
    title: "Pools Paired With Outdoor Showers",
    paras: [
      "An outdoor shower adds genuine function without actually stealing much space from the yard.",
      "A slim shower setup keeps indoor mess to a minimum after a swim, and it doubles as a visual anchor near the pool.",
      "It's a small addition that pushes the whole space a little closer to resort territory, even in a genuinely tight footprint.",
    ],
    photo: pinPhoto("outdoor-shower.jpg", "Pool paired with a slim outdoor shower for a resort feel", 619, 1024, "https://www.pinterest.com/pin/5418462045963188/", "Pools With Outdoor Showers", "idea19"),
  },
  {
    n: "20",
    title: "Small Backyard Swimming Pools With Fire Features",
    paras: [
      "Fire and water together are a dependable combination that rarely falls flat.",
      "A fire bowl or a linear flame feature adds real drama without taking up much physical space, and it draws the eye upward, which helps the whole area feel taller than it is.",
      "Positioned well, a fire feature can become the pool area's natural evening focal point, especially once the sun goes down.",
    ],
    photo: pinPhoto("fire-feature-pool.jpg", "Small pool with a fire feature adding drama at night", 735, 727, "https://www.pinterest.com/pin/5277724559668252/", "Pools With Fire Features", "idea20"),
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
<p>A small backyard doesn't rule out a genuinely great pool &mdash; it just changes which decisions matter most. Shape, placement and a few smart design tricks tend to do far more for how a pool feels than overall square footage ever will.</p>
<p>None of the ideas below require a sprawling lot to pull off. Most work specifically because the yard is small, turning limited space into a design advantage rather than a compromise.</p>
${photo("hero.jpg", "Small narrow backyard pool with a stone wall and wood deck", 564, 564, "hero")}

<h2>Why Small Backyard Pools Make So Much Sense</h2>
<p>A smaller pool tends to feel more livable day to day &mdash; easier to maintain, cheaper to heat, and often more social, since everyone ends up closer together rather than spread across a sprawling deck. It also rarely means settling for something that looks cheap; smart design consistently beats raw size.</p>
${pinPhoto("intro-why.jpg", "Small backyard pool with a terrace showing how compact pools can still feel luxurious", 736, 981, "https://www.pinterest.com/pin/281543726308696/", "Small Backyard Pool Inspiration", "why")}

<h2>Planning Before Choosing a Shape</h2>
<p>Before settling on a pool style, it's worth being honest about how the pool will actually get used &mdash; lounging, swimming laps, entertaining &mdash; since that answer shapes everything else. Shape tends to matter more than raw size, and it's worth checking local regulations and budgeting beyond just the pool shell itself before committing to a direction.</p>
${pinPhoto("intro-planning.jpg", "Planning considerations for a small backyard pool layout", 564, 752, "https://www.pinterest.com/pin/1125968725229094/", "Planning a Small Backyard Pool", "planning")}

<h2>20 Genius Small Backyard Swimming Pool Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these twenty ideas require a large yard to actually work &mdash; most of them work specifically because the yard is small, turning the limitation into the whole design approach.</p>
<p>A clear focal point, a few intentional layout choices, and a willingness to let shape do more work than size will consistently outperform a bigger pool squeezed into a space that was never built for it.</p>
`;

module.exports = { body };
