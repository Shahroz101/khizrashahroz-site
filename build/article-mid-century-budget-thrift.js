// Body content for "Mid-Century Style on a Real Budget: Thrift, DIY
// and Where to Actually Spend". Guide format, condensed from a
// 17-section, 30-subsection source. Fourth of five mid-century
// sources — distinct from the trends, value and makeover-process
// articles already published. This one stays strictly in budget/
// thrift/DIY territory: where to splurge versus save, specific DIY
// projects, and sourcing strategy, rather than general style
// principles those other articles already cover. Source reused one
// photo twice; kept on first appearance only. No Pinterest pins in
// source, so no photo credits.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0G8JG6TVY", title: "Solid Wood 3-Tier Small End Table, Mid-Century Brown Accent Table", w: 1500, h: 1500 },
    { asin: "B0BM5VFJ32", title: "Merrycolor Boho Lumbar Throw Pillow Cover, 12 x 20 Inch, Tufted Abstract Mid-Century Style", w: 1500, h: 1500 },
  ],
  whySuits: [
    { asin: "B0FHK37ZYY", title: "Cute Small Table Lamp, Vintage Mid Century Modern Bedside Lamp with Fabric Shade", w: 1500, h: 1500 },
    { asin: "B0GKF6BHLX", title: "AWASEN Small Round Accent Side Table for Small Spaces", w: 703, h: 1500 },
  ],
  knowSpace: [
    { asin: "B08KTVGGR6", title: "Amazon Basics Retractable Tape Measure, 16 Ft, Metric and SAE", w: 1500, h: 1500 },
    { asin: "B089NYWHJ5", title: "ScotchBlue Original Multi-Surface Painters Tape, 0.94 Inch x 60 Yds, 3 Rolls", w: 1500, h: 1500 },
  ],
  lessIsMore: [
    { asin: "B0GL7331X2", title: "Nesting Coffee Table Set of 2, Mid Century Modern", w: 1500, h: 1500 },
    { asin: "B0GPWT17V3", title: "Lexicon Mid Century Modern Accent Chair with Solid Wood Armrests and Legs", w: 1500, h: 1500 },
  ],
  mix: [
    { asin: "B0GVJKNPSG", title: "IDEALHOUSE 65 Inch Mid Century Modern Loveseat Sofa, Green", w: 1500, h: 1500 },
    { asin: "B097BQZFCW", title: "LEYAOYAO Cube Bookshelf, Mid-Century Modern Bookcase with Legs, Brown", w: 1500, h: 1500 },
  ],
  spendSave: [
    { asin: "B097R1264R", title: "KITEVICH Solid Wood Furniture Legs, 6 Inch Angled Sofa Legs, 4 Pack", w: 995, h: 979 },
    { asin: "B0GCXPL4MW", title: "2-Tier Round Bamboo Side Table, Mid Century Modern End Table", w: 1500, h: 1500 },
  ],
  palette: [
    { asin: "B0FF8RF29G", title: "HIG Yellow Velvet Round Pleated Throw Pillows, Set of 2", w: 1500, h: 1500 },
    { asin: "B0HDCKX1S8", title: "Herringbone Chenille Couch Cover for Sofa, Olive Green, 71 x 118 Inch", w: 1500, h: 1500 },
  ],
  lighting: [
    { asin: "B07CVBBB5M", title: "GE Relax LED Light Bulbs, 60 Watt, Soft White, A19, 4 Pack", w: 1500, h: 1399 },
    { asin: "B0CLV5M9TF", title: "Orange Mushroom Lamp, Mid Century Modern Table Lamp for Bedroom", w: 1300, h: 1500 },
  ],
  layout: [
    { asin: "B0HJWC9WPV", title: "8 x 10 Washable Area Rug for Living Room and Bedroom, Blue", w: 1500, h: 1500 },
    { asin: "B0BYFBS2SF", title: "X-Protector Felt Furniture Sliders for Hardwood Floors, 16 Pcs, 3.5 Inch", w: 1499, h: 1500 },
  ],
  diy: [
    { asin: "B0D2HD1RW7", title: "ACADOIT Moss Art Frame Craft Kit for Adults, 11 Inch, DIY Living Wall Hanging", w: 949, h: 982 },
    { asin: "B0GV3KYYW8", title: "TwoDays Vintage Picture Frame Set, Antique Gold and Brass, 12 Pieces", w: 1500, h: 1413 },
  ],
  accessorize: [
    { asin: "B0HFGPLSRX", title: "Minimalist Ceramic Vase Set, 3 Pcs, Beige Matte Textured Flower Vases", w: 1254, h: 1254 },
    { asin: "B0H8BPGX6B", title: "Decorative Faux Books for Coffee Table, 3 Pcs, Sage Green", w: 1500, h: 1437 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "mid-century-budget-thrift-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "mid-century-budget-thrift", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Mid-century is one of the more forgiving styles to pull off on a real budget, mostly because thrifted and secondhand pieces are so central to the look in the first place.</p>
<p>This covers specifically where to spend, where to save, and the DIY projects that close the gap between the two.</p>
${photo("hero.jpg", "Stylish mid-century living room achieved on a real budget", 1600, 1066, "hero")}

<h2>Why This Style Suits a Budget Approach</h2>
<p>Mid-century's emphasis on genuine, found pieces over a fully matched furniture set means a thrifted, gradually assembled room actually looks more authentic than one bought all at once.</p>
<p>This is one of the few styles where budget constraints push toward the more correct version of the look, not a compromised one.</p>
${photo("what-makes-timeless.jpg", "Timeless mid-century elements that work well on any budget", 1024, 600, "whySuits")}

<h2>Know Your Space Before Spending</h2>
<p>Measuring the room and identifying its actual constraints before any shopping happens prevents the single most expensive budget mistake &mdash; buying something that doesn't fit.</p>
<p>This step costs nothing and saves real money later.</p>
${productGrid("knowSpace")}

<h2>Less Is More, Especially Here</h2>
<p>A sparser room with a few genuinely good pieces beats a fully furnished one stretched thin across cheaper items, both visually and financially.</p>
<p>This restraint also happens to be authentically mid-century, which makes the budget constraint and the style's own philosophy point the same direction.</p>
${photo("less-is-more.jpg", "A sparse, considered room proving that less is genuinely more", 1024, 683, "lessIsMore")}

<h2>Mix Vintage With Affordable Modern</h2>
<p>One or two genuine vintage finds, paired with budget-friendly modern pieces that echo the same lines, capture most of the look's credibility for a fraction of an all-vintage room's cost.</p>
<p>This mixing strategy is the single most important budget principle on this entire list.</p>
${photo("vintage-modern-mix.jpg", "Vintage finds mixed with affordable modern pieces for a budget-friendly look", 1024, 576, "mix")}

<h2>Where to Spend and Where to Save</h2>
<p>Tapered legs and clean lines matter more than material cost, which means a budget piece with the right silhouette often reads better than an expensive one with the wrong shape.</p>
<p>Versatile core pieces &mdash; a sofa, a coffee table &mdash; are worth spending more on, since they anchor the whole room and get used daily, while smaller accent pieces are the safest place to save.</p>
${photo("furniture-tapered-legs.jpg", "Budget furniture with the right tapered-leg silhouette", 683, 1024, "spendSave")}

<h2>Pick a Palette That Doesn't Need a Repaint</h2>
<p>Starting with neutrals, then adding earthy and retro accent tones through cheaper textiles and accessories, achieves the full palette without a single wall needing to be repainted.</p>
<p>Keeping the balance between neutral and accent colors in check avoids an overwhelming room that would need correcting (and spending) later.</p>
${photo("color-palette.jpg", "A balanced mid-century palette achieved without expensive repainting", 683, 1024, "palette")}

<h2>Lighting: The Budget Secret Weapon</h2>
<p>Layered lighting and warm bulbs cost very little but do more for the room's overall feel than almost any furniture purchase.</p>
<p>Shopping smart for fixtures specifically &mdash; secondhand, off-season sales, simple DIY updates &mdash; keeps this high-impact category genuinely affordable.</p>
${photo("lighting.jpg", "Budget-friendly layered lighting transforming the room's feel", 683, 1024, "lighting")}

<h2>Get the Layout Right for Free</h2>
<p>Starting with a clear focal point, keeping traffic flow open, and pulling furniture away from the walls are all genuinely free changes that significantly affect how the room feels.</p>
<p>This is one of the highest-value, zero-cost steps on this entire list.</p>
${photo("layout-focal-point.jpg", "A clear focal point organizing the room's layout at no cost", 1024, 819, "layout")}

<h2>DIY Projects Worth the Effort</h2>
<p>DIY wall art, refinishing old furniture, and building a gallery wall from existing or thrifted frames all add real designer-level flair without a significant budget line.</p>
<p>Updating light fixtures and adding a single statement wall round out the highest-payoff DIY projects for this specific style.</p>
${photo("diy-wall-art.jpg", "DIY wall art adding designer flair without a big budget", 1024, 683)}
${photo("gallery-wall.jpg", "A thrifted gallery wall bringing real character to the space", 1024, 683, "diy")}

<h2>Accessorize Without Overspending</h2>
<p>Pattern used sparingly, organic elements, a few metallic touches, and books styled as decor round out the room's final layer at minimal cost.</p>
<p>These small additions matter more for the finished feel than their low price tags would suggest.</p>
${productGrid("accessorize")}

<h2>Avoiding Trendy Burnout</h2>
<p>Sticking to the style's genuine fundamentals, rather than chasing every passing micro-trend within mid-century, keeps the room from needing a refresh every year.</p>
<p>This is ultimately the best budget strategy of all &mdash; a room that doesn't need redoing saves more than any individual discount ever could.</p>

<h2>Final Thoughts</h2>
<p>None of this requires a big budget to actually work.</p>
<p>Start with layout and lighting, since both are free or nearly free, then build toward the anchor furniture pieces as budget allows.</p>
<p>Mid-century rewards patience and genuine sourcing over a single big spend &mdash; which happens to be exactly what a real budget requires anyway.</p>
`;

module.exports = { body };
