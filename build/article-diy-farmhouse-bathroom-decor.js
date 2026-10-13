// Body content for "18 Easy DIY Farmhouse-Style Bathroom Decor
// Projects". Photos carried over from the source article (AI-generated
// style, no Pinterest links, no visible credits). 17 of 18 ideas had a
// photo in the source; idea 12 (Chalkboard Labels) had none — a
// genuine gap. Rewritten out of the source's very casual, meme-heavy
// voice ("cheap AF," "chef's kiss effect") into the site's calmer,
// neutral tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0C38TT7ZS", title: "DeerValley Rectangle Vessel Sink, White, 16 x 12 Inch", w: 1500, h: 1500 },
    { asin: "B0FBLZ49G8", title: "Brushed Gold 3 Hole Widespread Bathroom Faucet, 2-Handle", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B086TZN6W6", title: "VOTON Tall Vessel Sink Faucet, Chrome, Single Handle One Hole", w: 663, h: 1500 },
    { asin: "B0GDWJW3BZ", title: "Hevea Unfinished Butcher Block Countertop, 25 x 24 x 1.5 Inch", w: 1500, h: 667 },
  ],
  idea2: [
    { asin: "B0F7L1PXDN", title: "Farmhouse Wooden Blanket Ladder with Removable Hooks, 6-Tier, Brown", w: 830, h: 1500 },
    { asin: "B0C2KFYGWB", title: "GRANOTONE Matte Water-Based Chalk Paint for Furniture", w: 1497, h: 1221 },
  ],
  idea3: [
    { asin: "B07MVZHFDR", title: "ZEKOO 6 FT Mini Barn Door Hardware Kit for 2 Cabinet Doors", w: 1500, h: 1500 },
    { asin: "B0FDB4QW8H", title: "Rustic Brown Wood Framed Vanity Mirror with Rivets, 24 x 36 Inch", w: 891, h: 1500 },
  ],
  idea4: [
    { asin: "B0BVPRC647", title: "Real Wood Peel and Stick White Shiplap Wall Planks, 5 Inch, 10 Pack", w: 1152, h: 1152 },
    { asin: "B07C6TBHD7", title: "Rockin' Wood Reclaimed Barn Wood Accent Paneling, Nail Up", w: 923, h: 1500 },
  ],
  idea5: [
    { asin: "B08CT8H4KR", title: "Rustic Farmhouse Mason Jar Wall Shelf, Wall-Mounted Organizer", w: 1500, h: 831 },
    { asin: "B076Q7ZK19", title: "LOKMAN Stainless Steel Hose Clamp Assortment Kit, 60 Pieces", w: 1000, h: 1000 },
  ],
  idea6: [
    { asin: "B0BWMLC9BJ", title: "QEEIG Over the Toilet Wall Mounted Shelves, Brown, Set of 3", w: 960, h: 1500 },
    { asin: "B099F3HL39", title: "WEKIS 12 Inch Heavy Duty Industrial Black Floating Shelf Brackets", w: 1283, h: 1453 },
  ],
  idea7: [
    { asin: "B0G4BVR6P4", title: "Galvanized Tub Ice Buckets, 3 Gallon, 4 Pack", w: 1500, h: 1481 },
    { asin: "B0FFHHMB8F", title: "OBTANIM Galvanized Metal Buckets, 8 Quart, 4 Pack", w: 1480, h: 1492 },
  ],
  idea8: [
    { asin: "B0F9T221Q7", title: "Rustic Wood Plaque Sign, Farmhouse Black and White Bath", w: 1500, h: 1191 },
    { asin: "B00TFT53WM", title: "Primitives by Kathy Wooden Box Sign, Funny Bathroom Sayings", w: 1226, h: 1500 },
  ],
  idea9: [
    { asin: "B0F3J5FP71", title: "Sintosin Farmhouse Window Frame Wall Decor, Set of 2", w: 1245, h: 1500 },
    { asin: "B0DWDQB45L", title: "Farmhouse Window Pane Mirror, Washed White, 18 x 23 Inch", w: 1074, h: 1500 },
  ],
  idea10: [
    { asin: "B07MFTTPFG", title: "StorageWorks Wicker Storage Baskets for Shelves, 2-Pack", w: 1500, h: 966 },
    { asin: "B0DJLHFR7H", title: "Small Woven Baskets with Gift Bags and Ribbons, 8 Pack", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B0925T7DCJ", title: "Nautical Rope Towel and Toilet Paper Holder, 20 Inch, Wall Mount", w: 1500, h: 1042 },
    { asin: "B0BCK98LLG", title: "PerkHomy Natural Jute Twine, 600 Feet, for Crafts and Gift Wrapping", w: 643, h: 1090 },
  ],
  idea12: [
    { asin: "B08FHKBPSM", title: "Mr. Pen Chalkboard Labels, 100 Pcs, Assorted Shapes", w: 1449, h: 1435 },
    { asin: "B0DMSJL653", title: "Stella Baic Clear Glass Footed Apothecary Jar with Lid, 88 oz", w: 576, h: 1500 },
  ],
  idea13: [
    { asin: "B0FDFBXKX2", title: "IZORRO Farmhouse 3-Light Wood Vanity Light Fixture, Black Industrial", w: 1500, h: 1500 },
    { asin: "B0B5KXBSLP", title: "TJOY Edison LED Light Bulbs, 12 Pack, E26, 8W, 2700K, Dimmable", w: 1500, h: 1497 },
  ],
  idea14: [
    { asin: "B09B3BRJWM", title: "Joben Oligey Extra Large Hanging Wall Wire Baskets, 3 Set", w: 1461, h: 1500 },
    { asin: "B0BZCR3HJM", title: "Black Wire Storage Baskets with Wooden Handles, 2 Pcs", w: 1168, h: 1500 },
  ],
  idea15: [
    { asin: "B0BXP653TJ", title: "Rustic Vintage Wood Framed Rectangular Mirror, Farmhouse Decor", w: 1450, h: 1500 },
    { asin: "B0BHL7LNJM", title: "Hongkee 8 x 10 Wood Picture Frame Set of 4, Real Glass, 5 x 7 Mat", w: 1488, h: 1500 },
  ],
  idea16: [
    { asin: "B08FXLXWG1", title: "Amazon Basics Banded Cotton Bath Rug Mat, 31 x 20 Inch, Soft Silver", w: 1500, h: 1500 },
    { asin: "B0DN1GM4H2", title: "Permanent Fabric Paint for Clothes, 24 Colors, with Brushes and Stencils", w: 1500, h: 1482 },
  ],
  idea17: [
    { asin: "B0CPSYHP5K", title: "HITNET 4-Tier Bamboo Ladder Shelf, Freestanding Open Display Rack", w: 684, h: 1500 },
    { asin: "B08P2QPP2F", title: "6-Tier Black Blanket Ladder Quilt Rack for Living Room and Bedroom", w: 1024, h: 1024 },
  ],
  idea18: [
    { asin: "B0GVN7S8H3", title: "DriftAway Blackout Linen Ticking Striped Curtains, 84 Inches, Double Layer", w: 1500, h: 1500 },
    { asin: "B0FQ5FXGKD", title: "ZJDECOR Brown and White Buffalo Plaid Curtains, 84 Inches", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "diy-farmhouse-bathroom-decor-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "diy-farmhouse-bathroom-decor", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Build Your Own Wooden Vanity",
    paras: [
      "This one takes more effort than most on this list, but an old desk or dresser is a genuine head start.",
      "Cutting a hole for the sink, sealing the wood well, and finishing the surface turns a secondhand piece of furniture into a custom farmhouse vanity.",
      "A bowl-style vessel sink set into the reclaimed wood top pushes the whole look further, turning a functional fixture into the bathroom's actual centerpiece.",
    ],
    photo: photo("wooden-vanity.png", "Rustic reclaimed wood vanity built as a DIY farmhouse bathroom project", 683, 1024, "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Repurpose an Old Ladder Into a Towel Rack",
    paras: [
      "An old wooden ladder, the kind that's been sitting in a garage for years, makes a genuinely good rustic towel rack.",
      "Leaned against the wall, it creates instant vertical storage without any real building required.",
      "A coat of chalk paint, lightly distressed, pushes the look fully into farmhouse territory.",
    ],
    photo: photo("ladder-towel-rack.png", "Old wooden ladder repurposed as a rustic bathroom towel rack", 683, 1024, "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Add a Mirror Framed With Barn Door Hardware",
    paras: [
      "This idea announces \"farmhouse\" louder than almost anything else on this list.",
      "Mounting a basic mirror with sliding barn door hardware, or framing it in reclaimed wood, turns a plain mirror into something closer to a design feature.",
      "It's an easy way to make a mirror read as intentional wall art rather than just a functional fixture.",
    ],
    photo: photo("barn-door-mirror.png", "Mirror framed with barn door hardware in a farmhouse-inspired bathroom", 683, 1024, "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "DIY Shiplap Walls",
    paras: [
      "For a genuine transformation without knocking down an actual wall, shiplap paneling on just one wall does a lot of visual work.",
      "Installed behind the sink or tub, it reads especially well, and painting it white or light gray keeps the whole bathroom feeling bright and airy.",
      "A single accent wall is plenty &mdash; committing to shiplap throughout the entire room risks tipping the look into something overdone.",
    ],
    photo: photo("shiplap-walls.png", "Shiplap accent wall in a serene farmhouse bathroom", 683, 1024, "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Mason Jar Wall Organizers",
    paras: [
      "Mason jars have more uses than jam and tablescapes.",
      "A few hose clamps screwed onto a wooden board, with mason jars attached and the whole thing mounted to the wall, builds an easy organizer for cotton balls, Q-tips or makeup brushes.",
      "Staining the board a rich walnut and using slightly vintage-looking jars pushes the rustic feel even further.",
    ],
    photo: photo("mason-jar-organizers.png", "Mason jar wall organizer for a farmhouse bathroom", 683, 1024, "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Reclaimed Wood Shelves",
    paras: [
      "A bathroom can rarely have too many shelves, especially rustic ones.",
      "Old wood planks, stained a warm brown and mounted with black metal brackets, create simple open shelving for rolled towels, candles or small plants.",
      "It's an easy way to fill otherwise empty wall space while adding real storage at the same time.",
    ],
    photo: photo("reclaimed-shelves.png", "Reclaimed wood shelves mounted with black metal brackets in a bathroom", 683, 1024, "idea6"),
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Galvanized Metal Storage Bins",
    paras: [
      "Galvanized buckets, bins or trays bring genuine country character to a bathroom.",
      "Used under the sink, on open shelves, or beside the toilet for extra rolls, they do real storage work while staying visually on-theme.",
      "A slightly dulled, worn finish reads as more authentically rustic than anything too polished or shiny.",
    ],
    photo: photo("galvanized-bins.png", "Galvanized metal storage bins in a rustic farmhouse bathroom", 683, 1024, "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Farmhouse-Style Wall Signs",
    paras: [
      "A small wooden sign with a cheeky, hand-lettered phrase remains a reliable farmhouse bathroom staple.",
      "Salvaged wood and stencils, or a pre-made wooden sign, both deliver the same cozy, barn-inspired look.",
      "Hung above the toilet or towel rack, a well-chosen sign tends to get a genuine smile out of guests.",
    ],
    photo: photo("wall-signs.png", "Farmhouse-style wooden wall sign in a cozy bathroom", 683, 1024, "idea8"),
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Repurposed Window Frame Wall Decor",
    paras: [
      "An old window frame, with the panes intact but the glass removed, makes a genuinely striking rustic decor piece.",
      "A mirror, dried flowers, or photos placed behind the panes turns a salvaged window into real wall art.",
      "A bit of chipped, worn paint actually helps here &mdash; the imperfections read as character rather than wear.",
    ],
    photo: photo("window-frame-decor.png", "Repurposed window frame used as rustic wall decor in a bathroom", 683, 1024, "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Woven Baskets for Storage",
    paras: [
      "Swapping plastic bins for wicker or woven baskets changes a bathroom's whole feel.",
      "Toilet paper, extra soaps or hand towels all store well inside a basket tucked under the vanity or slid onto a shelf.",
      "The natural texture adds a soft, farmhouse quality that plastic storage simply can't replicate, while still staying genuinely practical.",
    ],
    photo: photo("woven-baskets.png", "Woven storage baskets in a cozy farmhouse bathroom", 683, 1024, "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Rope-Wrapped Towel Hooks",
    paras: [
      "Basic wall hooks, wrapped in jute or thick twine, turn into something considerably more interesting than hardware-store standard.",
      "Mounted in a row, they bring a coastal-farmhouse feel to a bathroom without much actual effort or cost.",
      "It's one of the more budget-friendly projects on this entire list, which makes it an easy one to try first.",
    ],
    photo: photo("rope-towel-hooks.png", "Rope-wrapped towel hooks in a farmhouse-style bathroom", 683, 1024, "idea11"),
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Chalkboard Labels on Everything",
    paras: [
      "Cotton balls, bath salts and Q-tips all look more intentional once they're transferred into clear jars and labeled.",
      "Chalkboard paint or chalkboard-style stickers applied to each jar keeps the labeling consistent and genuinely farmhouse in feel.",
      "It's a small project, but it turns a cluttered counter into something that reads as organized rather than accidental.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Swap Lighting for Farmhouse Fixtures",
    paras: [
      "Standard builder-grade light fixtures rarely do a farmhouse bathroom any favors.",
      "Black matte metal, wood accents, or cage-style pendants all bring a cozier glow than a plain flush-mount fixture.",
      "Vintage-style Edison bulbs push the look even further &mdash; lighting genuinely changes how a whole room feels, more than most people expect.",
    ],
    photo: photo("farmhouse-fixtures.png", "Farmhouse-style light fixtures in a vintage-inspired bathroom", 683, 1024, "idea13"),
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "DIY Wire Basket Towel Holders",
    paras: [
      "A couple of wire baskets, lined with burlap or linen and attached to the wall, build an instant towel storage solution that looks genuinely intentional.",
      "It's a simple project that transforms a pile of towels from looking tossed aside into something that reads as deliberately styled.",
      "Rustic, tidy, and easy to put together in an afternoon.",
    ],
    photo: photo("wire-basket-holders.png", "DIY wire basket towel holders mounted on a bathroom wall", 683, 1024, "idea14"),
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Rustic Wooden Frames",
    paras: [
      "Plain photo frames rarely do much for a bathroom's overall look.",
      "Framing a mirror or a piece of art in distressed wood instead brings genuine warmth &mdash; a whitewashed finish, rough edges, or muted gray tones all work well.",
      "It's a subtle upgrade, but one that gives the whole room a cozier, more considered feel.",
    ],
    photo: photo("rustic-frames.png", "Rustic distressed wood frame around a bathroom mirror", 683, 1024, "idea15"),
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Hand-Painted Bath Mat",
    paras: [
      "A plain cotton bath mat becomes a genuinely custom piece with a hand-painted pattern.",
      "Gingham, florals, or a buffalo check design, applied with fabric-safe paint and properly sealed for durability, turns an ordinary mat into something distinctive.",
      "It's an easy, low-cost way to add a bit of personality to a surface that usually goes unnoticed.",
    ],
    photo: photo("painted-bath-mat.png", "Hand-painted bath mat with a buffalo check pattern", 683, 1024, "idea16"),
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Ladder Shelf for Decor",
    paras: [
      "A short, squat ladder makes a genuinely useful standing shelf once propped beside a tub or sink.",
      "Towels, plants, or a few vintage finds all display well across its rungs, filling an otherwise unused corner.",
      "It brings a shabby-chic feel while still doing real functional work, which is more than most purely decorative pieces manage.",
    ],
    photo: photo("ladder-shelf.png", "Ladder shelf styled with towels and decor in a farmhouse bathroom", 683, 1024, "idea17"),
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Country-Style Curtains",
    paras: [
      "Florals, checks, or simple ticking stripes in a light cotton or linen fabric bring an easy farmhouse touch to a bathroom window.",
      "The same fabric works just as well hung to hide storage under the sink, giving the room a cohesive look in two different spots.",
      "It's a simple sewing project, or no sewing at all with the right pre-made curtain, that still makes a noticeable difference.",
    ],
    photo: photo("country-curtains.png", "Country-style curtains in a cozy rustic bathroom", 683, 1024, "idea18"),
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
<p>A farmhouse bathroom doesn't require a full renovation to pull off &mdash; most of the character comes from small, genuinely doable projects rather than anything structural. A reclaimed shelf, a repurposed ladder, a coat of chalk paint, and the room starts to feel considerably more collected.</p>
<p>None of the ideas below demand advanced woodworking skills. Most use materials that are either already sitting around the house or cheap enough to pick up for a single weekend project.</p>
${photo("hero.jpg", "Rustic reclaimed wood bathroom vanity with a vessel sink and brass fixtures", 1152, 768, "hero")}

<h2>18 DIY Farmhouse Bathroom Decor Projects</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these eighteen projects require a contractor or a big budget to pull off. A repurposed ladder, a few mason jars, or a simple coat of chalk paint can shift a plain bathroom toward genuine farmhouse character in an afternoon.</p>
<p>Starting with one or two small projects, rather than attempting the whole list at once, tends to produce a bathroom that feels collected over time rather than assembled all in a single weekend.</p>
`;

module.exports = { body };
