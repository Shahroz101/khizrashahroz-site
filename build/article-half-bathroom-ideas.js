// Body content for "14 Half Bathroom Ideas for an Inviting Space".
// Source had only ONE real content image in the entire article (hero)
// — confirmed by checking every <img> tag, not just <figure>-wrapped
// ones; a genuine source-wide gap, consistent with mudroom-ideas and
// outdoor-kitchen-ideas earlier this session. Source paragraphs were
// short, first-person anecdotal; rewrote into fuller paragraphs
// matching the site's typical idea depth.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  idea1: [
    { asin: "B0FP5GDBTW", title: "Matte Black Waterfall Bathroom Faucet, 3 Hole, 8 Inch Widespread", w: 1500, h: 1021 },
    { asin: "B0BGKCZBN9", title: "Estmoon Matte Black Cabinet Handles, 30 Pack, 3 Inch Pulls", w: 1315, h: 1500 },
  ],
  idea2: [
    { asin: "B07BDTVN4W", title: "Glidden Interior Paint and Primer, White Off White, One Coat, Eggshell, 1 Quart", w: 1500, h: 1470 },
    { asin: "B07BDTT3FB", title: "Glidden Interior Paint and Primer, Gray Thin Ice, One Coat, Eggshell, 1 Quart", w: 1500, h: 1472 },
  ],
  idea3: [
    { asin: "B0FN3Z911R", title: "Sweetcrispy Arched Black Bathroom Mirror, 24 x 36 Inch, Wall Vanity Mirror", w: 1500, h: 1500 },
    { asin: "B0HBVQTJXW", title: "HOMECOOKIN 28 Inch Round Gold Mirror, Linen Texture Boho Circle Wall Mirror", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0F6V3PF2Y", title: "Peel and Stick Floor Tiles, 30 Pack, 30 Sq Ft, Vinyl, Matte Pattern", w: 1500, h: 1497 },
    { asin: "B0CMB7XG4R", title: "FloorPops x Chris Loves Julia Bonneville Beige Peel and Stick Floor Tiles, 12 x 12 Inch", w: 1500, h: 1000 },
  ],
  idea5: [
    { asin: "B0GWD3K34L", title: "IDEALHOUSE Floating Bathroom Vanity with Sink, 24 Inch, Grey", w: 1500, h: 1500 },
    { asin: "B0HC2T7SNJ", title: "SUNTAGE Modern MDF Floating Bathroom Vanity with Sink, 24 Inch", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0F4W9W8J5", title: "VEELIKE Beige and Black Geometric Fan Pattern Peel and Stick Wallpaper", w: 1500, h: 1500 },
    { asin: "B094TB94MD", title: "Roman's E-Z Hang Peel and Stick Wallpaper Helper, 32 Oz, Non-Staining", w: 588, h: 1500 },
  ],
  idea7: [
    { asin: "B0F9L5WR24", title: "Champagne Brass Bathroom Wall Sconces, Set of 2, Modern Gold Lighting", w: 1500, h: 1500 },
    { asin: "B0DBKW686H", title: "Hardwired Matte Black Bathroom Wall Sconces, Set of 2, Clear Glass", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0CBLCN4FY", title: "Over the Toilet Storage Cabinet, Metal Bathroom Shelf Organizer with Paper Holder", w: 1500, h: 1500 },
    { asin: "B0HHW5MD7B", title: "Solid Wood Corner Floating Shelves, Set of 2, Wall Mount", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B0965HZCW1", title: "Hausattire Jute Braided Woven Rug, 2 x 3 Ft, Natural", w: 1500, h: 1500 },
    { asin: "B0FKB17N1T", title: "Ceramic Hand Soap Dispenser for Bathroom, 15 Oz, Refillable", w: 1152, h: 1500 },
  ],
  idea10: [
    { asin: "B0DF9C2BFT", title: "36 Inch Navy Blue Shaker Single-Sink Bathroom Vanity Base Cabinet", w: 1500, h: 1442 },
    { asin: "B08KY5ZZSG", title: "Tempered Glass Vessel Sink, 16.5 Inch, Green Art Basin with Faucet Combo", w: 1500, h: 1173 },
  ],
  idea11: [
    { asin: "B07D2J3Q16", title: "Johnson Hardware 1500 Series Soft Close Pocket Door Frame, Commercial Grade", w: 1408, h: 1350 },
    { asin: "B0GD78Q5MP", title: "Sliding Barn Door Hardware Kit, 6 Ft, with Adjustable Floor Guide", w: 1500, h: 1415 },
  ],
  idea12: [
    { asin: "B0H9YFKHJ7", title: "Faux Snake Plant, 19 Inch Tall, Artificial Potted Plant for Home Decor", w: 1300, h: 1500 },
    { asin: "B0CKYS2YK8", title: "Matte Black Oval Ceramic Vanity Tray, 8 Inch, for Soap Dispenser and Decor", w: 1500, h: 774 },
  ],
  idea13: [
    { asin: "B0GX5K37ML", title: "Gold Framed Funny Bathroom Canvas Wall Art Print", w: 1450, h: 1162 },
    { asin: "B0D1TFJX65", title: "HUARCEY Vintage Framed Canvas Wall Art, Plain Tree Drawing, Boho Botanical", w: 1280, h: 1216 },
  ],
  idea14: [
    { asin: "B0F1MY38VR", title: "Bathroom Counter Organizer, 7 Slots, Detachable Toothbrush Holder", w: 1500, h: 1190 },
    { asin: "B07FKD2LT9", title: "Yaheetech Small Bathroom Storage Cabinet with 4 Drawers and Door, White", w: 1135, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "half-bathroom-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "half-bathroom-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Upgrade the Hardware",
    paras: [
      "Small details tend to carry a disproportionate amount of weight in a half bathroom, simply because there's less room competing for attention.",
      "Swapping out an old faucet, cabinet handles or a towel ring is one of the cheapest, fastest upgrades available &mdash; a sleek matte black faucet in place of a decade-old chrome one can shift the whole room toward something that reads as designer-level.",
      "None of these swaps require a plumber or an electrician in most cases, which makes hardware one of the lowest-effort, highest-impact places to start.",
    ],
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Pick a Light, Airy Color Palette",
    paras: [
      "Color does a lot of work in a small space, more than it would in a larger room.",
      "Dark walls can feel genuinely dramatic in the right context, but in a half bathroom they often tip into feeling cramped rather than cozy.",
      "A bright, soft palette keeps the room feeling cheerful and open, which matters more in a half bath than almost anywhere else in the house, since there's no second chance to make the space feel bigger than it is.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Invest in a Statement Mirror",
    paras: [
      "A mirror isn't just for checking an outfit before heading out &mdash; it's one of the most effective tools for making a small space feel considerably larger.",
      "Swapping a small, plain mirror for a larger round or arched one bounces more light around the room and visually doubles the sense of space.",
      "It's a simple, single-item change, but it tends to have an outsized effect on how the whole bathroom feels to stand in.",
    ],
    photo: photo("hero.jpg", "Modern half bathroom with a floating vanity and statement lighting", 1400, 935, "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Choose Smart Flooring",
    paras: [
      "Flooring in a half bath does more than set the visual tone &mdash; the right pattern can make the space feel both bigger and cleaner.",
      "A herringbone layout in particular adds genuine visual interest, giving a tiny room a more considered, designer feel without changing its actual footprint.",
      "Since a half bath covers so little square footage, it's also one of the more affordable rooms in the house to upgrade the flooring in.",
    ],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Floating Vanities for Extra Space",
    paras: [
      "A traditional vanity eats up floor space that a half bathroom genuinely can't spare.",
      "A floating vanity creates the illusion of more room simply by leaving the floor beneath it visible, which reads as more open even when the actual square footage hasn't changed.",
      "It also makes cleaning considerably easier, since there's no awkward gap underneath to navigate around.",
    ],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Incorporate a Bold Wallpaper or Accent Wall",
    paras: [
      "For anyone not afraid of making a statement, wallpaper can turn a half bath into a genuine showstopper.",
      "A bold geometric or patterned paper behind the sink or on a single wall packs real visual punch, especially in a room small enough that the pattern doesn't overwhelm.",
      "Because the space is so compact, a dramatic wallpaper choice here carries far less risk than it would in a larger, more frequently used room.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Layer in Stylish Lighting",
    paras: [
      "Lighting can genuinely make or break a bathroom's whole mood &mdash; harsh overhead light rarely does any room favors, and dim, inadequate bulbs are just as much of a problem.",
      "A pair of brass or matte black sconces flanking the mirror adds warmth and a bit of visual interest beyond pure function.",
      "Good lighting in a half bath often ends up being the detail that gets the most comments, since it's the one thing guests actually interact with every time they use the room.",
    ],
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Use Vertical Space Wisely",
    paras: [
      "In a tiny bathroom, the walls matter more than the floor.",
      "A couple of shelves installed above the toilet create a genuine spot for candles, a small plant, or extra hand towels, all without eating into the room's limited floor space.",
      "Thinking vertically rather than horizontally is usually the difference between a half bath that feels cramped and one that feels intentionally styled.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Add Texture and Layers",
    paras: [
      "Texture is what keeps a half bathroom from feeling sterile or cold.",
      "A fully smooth, flat surface palette tends to read as unfinished, while a mix of materials &mdash; a woven bath mat, a textured towel, a ribbed soap dispenser &mdash; adds real warmth.",
      "Layering texture is one of the simplest ways to make a small room feel genuinely inviting rather than purely functional.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Play With Color in Fixtures",
    paras: [
      "White doesn't have to be the default for every fixture in the room.",
      "A deep navy or forest green sink against neutral walls reads as modern and a little unexpected, giving the room real personality without requiring a full color overhaul.",
      "Mixing in one colored fixture is often enough to make the whole bathroom feel considered rather than default.",
    ],
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Consider a Pocket or Sliding Door",
    paras: [
      "A standard swinging door takes up precious floor space in a room already working with very little of it.",
      "Swapping it for a sliding barn door or a pocket door frees up that space entirely, and a well-chosen sliding door can become a genuine design feature on its own.",
      "It's a bigger project than most ideas on this list, but one that solves a real spatial problem rather than just adding decoration.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Don't Forget Functional Accessories",
    paras: [
      "Even the prettiest half bath still needs a few genuinely practical touches to feel finished.",
      "A small, low-maintenance plant like a snake plant adds life to the room without requiring much care, and a well-chosen soap dispenser or tray keeps everyday items from looking scattered.",
      "The goal is a room that still functions well day to day, not just one that photographs nicely.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Add a Personal Touch With Art",
    paras: [
      "Small bathrooms often get skipped entirely when it comes to decorating, which is exactly what makes a bit of art stand out here.",
      "A single framed piece hung above the toilet or beside the mirror can turn a purely functional room into one that actually feels considered.",
      "It doesn't take much &mdash; even one small frame tends to be enough to make the space feel genuinely finished.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Keep It Clutter-Free",
    paras: [
      "This might sound obvious, but it's worth saying directly: clutter undoes style fast.",
      "A genuinely beautiful bathroom can still feel messy if every surface is crowded with bottles, products and loose items.",
      "Clean lines and a bit of organized storage make even a very small half bath feel considerably more luxurious than its square footage would suggest.",
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
<p>A half bathroom gets overlooked more often than any other room in the house, mostly because it's small and purely functional by design. That's exactly what makes it such a rewarding room to actually style &mdash; a handful of small, deliberate choices go a long way in a space this compact.</p>
<p>None of the ideas below require a full renovation. Most work as individual upgrades, layered in one at a time as time and budget allow.</p>

<h2>14 Half Bathroom Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these fourteen ideas require gutting the room to make a real difference. A hardware swap, a statement mirror, or a bolder wallpaper choice can transform a half bath considerably faster than almost any other room in the house.</p>
<p>Because the space is so small, it's also one of the lowest-risk rooms to experiment in &mdash; a bold color or pattern that might feel like too much in a larger bathroom often works perfectly here.</p>
`;

module.exports = { body };
