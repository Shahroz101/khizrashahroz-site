// Body content for "23 Boho Bedroom Pieces: What to Thrift, What to
// DIY, What to Buy New". Numbered idea-list format. This source is a
// near-total duplicate of the already-published boho-bedroom-decor-
// ideas article (20 ideas covering essentially the same object
// vocabulary: earth tones, layered textiles, macrame, canopy beds,
// plants, dreamcatchers, statement rugs, etc.) — the most extreme
// overlap found in the backlog. Rather than re-listing the same style
// objects, this rewrite organizes every idea around how it actually
// gets acquired — thrifted/secondhand, DIY/made, or worth buying new —
// which is a genuinely different lens than a pure style guide. Idea 1
// (boho colors) had no source photo, kept text-only. Source photos are
// all AI-generated style with no Pinterest links, so none carry credit
// captions. Rewritten from scratch in the site's calmer tone,
// short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0G2LDDBF7", title: "Dinjoy Boho Paisley Floral Comforter Set, Queen, 7 Piece", w: 1500, h: 1500 },
    { asin: "B0C9ZGCLMY", title: "YAUKOMEL Natural Rattan Nightstand", w: 1500, h: 1500 },
  ],
  colorStory: [
    { asin: "B0CSSQYH8D", title: "Hemway Deep Terracotta Red Interior Paint, 2.5 L", w: 1500, h: 1492 },
    { asin: "B0B5LZXLWM", title: "Glidden Total Interior Paint &amp; Primer, Light Sage, Semi-Gloss", w: 1500, h: 1473 },
  ],
  idea1: [
    { asin: "B0D8NSR43B", title: "AODK Small 4-Drawer Dresser, Vintage Brown", w: 833, h: 1500 },
    { asin: "B09SH38JRR", title: "WLIVE Small 4-Drawer Dresser Nightstand, Rustic Brown", w: 686, h: 1500 },
  ],
  idea2: [
    { asin: "B0GR94S2V4", title: "Rustic Carved Wood Wall Mirror, 22 x 30", w: 1048, h: 1395 },
    { asin: "B0GK879RHN", title: "Carved Floral Wood Frame Wall Mirrors, 13 x 30, Set of 2", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0FH9Y3P23", title: "GarveeHome Queen Wood Platform Bed Frame", w: 1500, h: 1500 },
    { asin: "B0H94RF8TK", title: "IDEALHOUSE Full Low-Profile Wood Platform Bed Frame", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B00H34G24E", title: "Honey-Can-Do Woven Water Hyacinth Storage Baskets, Set of 3", w: 1500, h: 995 },
    { asin: "B094QZWL92", title: "Large Willow Wicker Basket with Handle, 16 Inch", w: 1500, h: 1366 },
  ],
  idea5: [
    { asin: "B0FBMHMYPD", title: "Ash &amp; Smoke: Interior Design &amp; Home Decor Coffee Table Book", w: 1000, h: 1329 },
    { asin: "B0HF3H98N8", title: "House Of Greece: A Greek Coffee Table Book of Timeless Interiors", w: 1000, h: 1329 },
  ],
  idea6: [
    { asin: "B0DPQ65GQ8", title: "Achart Large Macrame Wall Hanging", w: 1500, h: 1495 },
    { asin: "B0FQTPK2PT", title: "Tempospark Large Macrame Wall Hanging, 43\" x 32\"", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0DWSJHC1C", title: "Venusmiles Gallery Wall Picture Frame Set, Oak, 15 Pack", w: 1500, h: 1500 },
    { asin: "B0BWYB4CG8", title: "MTL HOE Gold and Black Boho Wall Art Prints, 8x10, Set of 6", w: 1479, h: 1223 },
  ],
  idea8: [
    { asin: "B0CPPXTHHZ", title: "Boho Cotton Tassel Fringe Trim, 2.3\" Wide, 10 Yards", w: 1500, h: 1500 },
    { asin: "B0GWM8LP4V", title: "Vintage Boho Tassel Fringe Trim, 5 Yards", w: 1500, h: 1496 },
  ],
  idea9: [
    { asin: "B0H4L9NXVY", title: "Boho Dried Flower Bouquet with Pampas and Bunny Tail Grass", w: 1500, h: 1197 },
    { asin: "B0BC9KZ5WT", title: "Natural Dried Pampas Grass Bouquet", w: 1000, h: 1000 },
  ],
  idea10: [
    { asin: "B0DLWFQVG9", title: "cotiled Boho Moroccan Washable Area Rug, 5x7", w: 1500, h: 1500 },
    { asin: "B0GVXC2C8N", title: "Hanples Washable Vintage Floral Area Rug, Beige, 5x7", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B0GYN5YN3Y", title: "BEDELITE Boho Comforter Set, Queen, 7 Pieces, Cream White", w: 1500, h: 1500 },
    { asin: "B0C4NB22QP", title: "100% Cotton Quilted Bedspread Set, Queen", w: 1500, h: 1500 },
  ],
  idea12: [
    { asin: "B0GJZGYDY1", title: "Queen Upholstered Canopy Platform Bed Frame with Headboard", w: 1500, h: 1500 },
    { asin: "B0BQ33TDY7", title: "AIKASY Queen Canopy Bed Frame", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0C5YQ16FN", title: "Codi Large Floor Pillows, 32 Inch, 2 Pack", w: 1500, h: 1499 },
    { asin: "B07DPV7Z3H", title: "Marrakesh Gallery Genuine Leather Moroccan Pouf, Unstuffed", w: 1500, h: 1257 },
  ],
  idea14: [
    { asin: "B0FMYTNC67", title: "Boho Bedroom Dream Catchers, Set of 5", w: 1500, h: 1500 },
    { asin: "B0H3B213XV", title: "Tree of Life Macrame Dream Catcher Wall Hanging", w: 829, h: 1500 },
  ],
  idea15: [
    { asin: "B0GVJ3P6MQ", title: "Sheer Boho Lace Curtains, 84 Inch, Natural White, Set of 2", w: 1500, h: 1500 },
    { asin: "B09JVSGHBN", title: "Guken Pom Pom Sheer Curtains, 84 Inch, White", w: 1500, h: 1500 },
  ],
  idea16: [
    { asin: "B07ZKQ29WL", title: "G40 LED Globe String Lights, 25 ft, 27 Shatterproof Bulbs", w: 1500, h: 1500 },
    { asin: "B0DWFXYN73", title: "Small Rattan Table Lamp for Bedroom, Boho Bedside Lamp with Warm LED Bulb", w: 1500, h: 1500 },
  ],
  idea17: [
    { asin: "B0CX57XC83", title: "Costa Farms Live ZZ Plant and Snake Plant, Potted", w: 843, h: 493 },
    { asin: "B07HKX149W", title: "Costa Farms Boston Fern, Live Indoor Plant, Easy Care, Home Decor", w: 1301, h: 1500 },
  ],
  idea18: [
    { asin: "B0DP5BQVDX", title: "OGMILL Solid Oak Hand-Woven Bench, 33.5\"", w: 1500, h: 1088 },
    { asin: "B0H6LF5V7Q", title: "Natural Oak Small Nightstand with Drawer and Woven Shelf, 15\" Wide", w: 1500, h: 1500 },
  ],
  idea19: [
    { asin: "B0GY4JBSWS", title: "Boho Terracotta Throw Pillow Covers, 18x18, Set of 4", w: 1500, h: 1451 },
    { asin: "B0FD3J5XCC", title: "Boho Mid Century Modern Throw Pillow Covers Set of 6", w: 1500, h: 1500 },
  ],
  idea20: [
    { asin: "B0G6K9HBRK", title: "Rattan Boho Floating Wall Shelf, 16 Inch", w: 1250, h: 1500 },
    { asin: "B0FKSJD7DF", title: "Rattan Boho Floating Plant Shelves, Set of 2", w: 1500, h: 1323 },
  ],
  idea21: [
    { asin: "B0DK54XH72", title: "Framed Boho Black, White and Brown Abstract Wall Art", w: 1500, h: 1500 },
    { asin: "B0CJ765D6S", title: "Matisse-Style Boho Neutral Wall Art Prints, Set of 6", w: 1500, h: 1500 },
  ],
  idea22: [
    { asin: "B0H7B1THVY", title: "Garvee Slim Rattan 6-Drawer Dresser", w: 1152, h: 921 },
    { asin: "B0FC6G1XG9", title: "Furlide Mid-Century Rattan Cane Armchairs, Set of 2", w: 1427, h: 907 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "boho-bedroom-diy-vs-buy-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "boho-bedroom-diy-vs-buy", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A boho bedroom runs on collected pieces more than matching sets.</p>
<p>Some of that collection should come from a thrift store. Some is worth making. And a few pieces are genuinely worth buying new.</p>
<p>Knowing which is which keeps the whole room from feeling like one big online order.</p>
<p>Here are 23 boho bedroom elements, sorted by how they actually get acquired.</p>
${photo("hero.png", "Serene bohemian bedroom exuding comfort and warmth", 1152, 768, "hero")}

<h2>Start With the Color Story</h2>
<p>Before sourcing a single object, the color direction needs to be settled.</p>
<p>Earth tones, warm rust, deep terracotta and muted sage all read as boho without needing a single purchase to start.</p>
<p>This costs nothing to decide and shapes every acquisition decision that follows.</p>
<p>Trust whatever combination feels right over any strict formula &mdash; boho rewards instinct more than rules.</p>
${productGrid("colorStory")}

<h2>Thrift These First</h2>
<p>Secondhand shops, estate sales and online marketplaces are consistently the best source for these pieces.</p>

<h2>1. Vintage Furniture Finds</h2>
<p>A rattan chair, a carved wooden trunk, or a mismatched side table all carry more character secondhand than new.</p>
<p>Boho specifically rewards pieces that look collected over time, which a brand-new purchase can't fake.</p>
<p>Thrift stores and estate sales consistently beat retail on both price and uniqueness here.</p>
<p>Patience matters more than a big budget for this category.</p>
${photo("vintage-finds.png", "Charming bohemian bedroom with vintage thrifted furniture", 576, 1024, "idea1")}

<h2>2. A Carved or Sunburst Mirror</h2>
<p>An interesting mirror frame is one of the easiest vintage finds to spot in a secondhand shop.</p>
<p>Carved wood or a sunburst shape both read as boho instantly.</p>
<p>New versions exist but tend to cost significantly more for a similar look.</p>
<p>Worth checking a few thrift stops before paying retail for this one.</p>
${photo("carved-mirror.png", "Elegant boho bedroom featuring a sunburst carved mirror", 576, 1024, "idea2")}

<h2>3. Low-Profile Furniture</h2>
<p>A low platform bed or a short dresser suits the relaxed, grounded feel boho goes for.</p>
<p>These show up secondhand regularly, since low-profile styles have been popular for decades in different eras.</p>
<p>This is a bigger furniture purchase, so secondhand saves real money here.</p>
<p>Worth measuring carefully before committing to a secondhand piece, since returns aren't usually an option.</p>
${photo("low-profile-furniture.png", "Serene minimalist boho bedroom with low-profile furniture", 576, 1024, "idea3")}

<h2>4. Handwoven Baskets</h2>
<p>Baskets for storage or display show up constantly at thrift stores and flea markets.</p>
<p>They work for blankets, plants, or general catch-all storage.</p>
<p>Secondhand versions often have more character than new ones from a big-box store.</p>
<p>An easy, low-cost category to build up gradually over time.</p>
${photo("handwoven-baskets.png", "Bohemian bedroom with handwoven storage baskets", 576, 1024, "idea4")}

<h2>5. Books as Decor</h2>
<p>A small stack of well-worn books adds texture and a lived-in feel that new decor can't replicate.</p>
<p>Used bookstores and thrift shops are the obvious source here.</p>
<p>This doubles as actual reading material, not just a prop.</p>
<p>One of the cheapest categories on this entire list.</p>
${productGrid("idea5")}

<h2>Worth Making Yourself</h2>
<p>These reward a bit of time and effort over a straight purchase.</p>

<h2>6. Macrame and Woven Wall Hangings</h2>
<p>A macrame piece is one of the more approachable DIY projects in this whole style, with plenty of beginner tutorials available.</p>
<p>Materials cost relatively little compared to a finished piece bought retail.</p>
<p>This is a genuine time investment, not a weekend project for most skill levels.</p>
<p>A handmade piece also carries a personal story a purchased one can't match.</p>
${photo("wall-hangings.png", "Cozy boho bedroom with handmade macrame wall hanging", 576, 1024, "idea6")}

<h2>7. A Personal Gallery Wall</h2>
<p>Framed photos, travel mementos and small art pieces assembled over time cost very little beyond frames.</p>
<p>This grows naturally rather than needing to be purchased all at once.</p>
<p>It's one of the few decor elements that genuinely can't be bought as a finished product &mdash; it has to be assembled personally.</p>
<p>Worth starting early and adding to gradually.</p>
${photo("personal-touches.png", "Personalized boho bedroom with framed photos and mementos", 576, 1024, "idea7")}

<h2>8. Fringe and Tassel Details</h2>
<p>Adding fringe trim to an existing plain pillow or blanket is a simple sewing project, even for a beginner.</p>
<p>This turns a basic, inexpensive item into something that reads as more intentionally boho.</p>
<p>Fringe trim itself is cheap and widely available at any fabric store.</p>
<p>A low-effort way to upgrade something already owned rather than replacing it.</p>
${photo("fringe-details.png", "Bohemian bedroom with handmade fringe details on textiles", 576, 1024, "idea8")}

<h2>9. A Simple Dried Floral or Plant Display</h2>
<p>Drying flowers or arranging cuttings costs almost nothing beyond the initial plant.</p>
<p>This works well in a vase, hung from the ceiling, or tucked into a shelf display.</p>
<p>A lower-maintenance option than live plants, without losing the organic feel.</p>
<p>Worth trying before committing to a larger live plant collection.</p>
${productGrid("idea9")}

<h2>Worth Buying New</h2>
<p>These either need consistent quality, specific sizing, or just aren't realistic to thrift or DIY.</p>

<h2>10. A Statement Rug</h2>
<p>A large Moroccan-style or patterned rug anchors the whole room, and finding the right size secondhand is genuinely difficult.</p>
<p>This is worth the investment new, since it gets daily wear and needs to last.</p>
<p>A quality rug also holds its look better over years than a cheaper option.</p>
<p>One of the few splurges on this list worth prioritizing.</p>
${photo("statement-rug.png", "Bohemian bedroom with a large Moroccan statement rug", 576, 1024, "idea10")}

<h2>11. New Bedding</h2>
<p>Bedding is one category where buying new makes practical sense &mdash; hygiene and comfort matter more here than character.</p>
<p>Layered textures and patterns in warm, earthy tones carry the boho look even on new sheets and a new duvet.</p>
<p>This is the single piece of furniture-adjacent decor that gets the most daily contact.</p>
<p>Worth spending a bit more here than on purely decorative items.</p>
${photo("boho-bedding.png", "Cozy eclectic bedroom with layered bohemian bedding", 576, 1024, "idea11")}

<h2>12. A Canopy Bed Frame</h2>
<p>A wood canopy frame is a significant furniture purchase that's hard to find secondhand in good condition.</p>
<p>This is a genuine investment piece, but it changes the entire room's feel more than almost anything else on this list.</p>
<p>Worth it for anyone fully committing to the boho direction rather than layering it in gradually.</p>
<p>New ensures the structural integrity matters for something holding up drapery and lighting.</p>
${photo("canopy-bed.png", "Romantic boho bedroom with a wood canopy bed", 576, 1024, "idea12")}

<h2>13. Floor Cushions</h2>
<p>Floor cushions need to hold up to regular use, which favors buying new over secondhand.</p>
<p>They add a casual, low seating option that suits the relaxed boho mood.</p>
<p>This works well in a corner reading nook or alongside a low coffee table.</p>
<p>A relatively affordable new purchase compared to actual seating furniture.</p>
${photo("floor-cushions.png", "Cozy eclectic bohemian bedroom with floor cushions", 576, 1024, "idea13")}

<h2>14. Dreamcatchers</h2>
<p>A quality dreamcatcher is inexpensive enough new that thrifting one rarely saves meaningful money.</p>
<p>This adds a spiritual, personal touch above a bed or in a window.</p>
<p>Worth choosing one with genuine craftsmanship rather than a mass-produced version.</p>
<p>A small, low-cost addition either way.</p>
${photo("dreamcatchers.png", "Cozy boho bedroom with dreamcatchers hung above the bed", 576, 1024, "idea14")}

<h2>15. Layered Curtains</h2>
<p>Curtain length and fit matter enough that buying new, measured for the actual window, makes more sense than hunting secondhand.</p>
<p>Layering a sheer panel with a heavier drape adds the dreamy, textured look boho goes for.</p>
<p>This is a moderate investment that affects how light moves through the whole room.</p>
<p>Worth prioritizing once the furniture and rug are settled.</p>
${photo("layered-curtains.png", "Bohemian bedroom with layered sheer and heavy curtains", 576, 1024, "idea15")}

<h2>16. Soft Ambient Lighting</h2>
<p>String lights and new lamp fixtures are cheap enough new that secondhand rarely makes sense, and electrical safety matters here.</p>
<p>Warm, soft lighting does as much for the boho mood as any single decor object.</p>
<p>A string of warm-toned lights above the bed is a classic, low-cost addition.</p>
<p>Worth buying new for the safety and reliability alone.</p>
${photo("soft-lighting.png", "Dreamy boho bedroom with soft ambient string lighting", 576, 1024, "idea16")}

<h2>17. Live Plants</h2>
<p>Plants need to be purchased fresh, by definition, though pots can absolutely be thrifted.</p>
<p>A mix of trailing and upright varieties fills corners and shelves with the organic texture boho relies on.</p>
<p>This is an ongoing, low-cost investment rather than a one-time purchase.</p>
<p>Worth starting with a couple of low-maintenance varieties before expanding the collection.</p>
${photo("plants.png", "Serene bohemian bedroom filled with various plants", 576, 1024, "idea17")}

<h2>18. Wooden Furniture Elements</h2>
<p>A reclaimed wood accent piece can be thrifted, but a specific new piece &mdash; a headboard, a shelf unit &mdash; is sometimes worth buying for the exact fit.</p>
<p>Wood grounds the more eclectic textile and pattern choices elsewhere in the room.</p>
<p>This category sits between thrift and new depending on exactly what's needed.</p>
<p>Worth checking both routes before deciding.</p>
${photo("wooden-elements.png", "Rustic boho bedroom with reclaimed wood furniture elements", 576, 1024, "idea18")}

<h2>19. A Mix of Accent Pillows</h2>
<p>New pillow covers are inexpensive enough that buying a mixed set makes more sense than hunting secondhand for each one individually.</p>
<p>Mixing pattern, texture and size is the whole point &mdash; uniformity works against the boho look here.</p>
<p>This is one of the easiest, lowest-cost ways to add personality to a bed or reading nook.</p>
<p>Worth rotating a few new covers in seasonally to keep the room feeling current.</p>
${photo("accent-pillows.png", "Boho bedroom with a mix of patterned accent pillows", 576, 1024, "idea19")}

<h2>20. Open Shelving</h2>
<p>A specific shelf unit, sized to fit a particular wall, is often easier to buy new than to find secondhand in the right dimensions.</p>
<p>This gives the room a spot to display the thrifted and DIY pieces collected elsewhere on this list.</p>
<p>Open shelving works better than closed storage for a style built around visible, personal collections.</p>
<p>What goes on it matters more than the shelf itself.</p>
${photo("open-shelving.png", "Boho bedroom with open shelving displaying personal items", 576, 1024, "idea20")}

<h2>21. Boho Wall Art</h2>
<p>A few new prints fill out a gallery wall faster than waiting to find the right vintage pieces.</p>
<p>Mixing a couple of new prints with thrifted frames and personal photos balances cost and character.</p>
<p>This category works well as a hybrid between buying and collecting over time.</p>
<p>Not every piece needs the same origin story to work together.</p>
${photo("boho-wall-art.png", "Boho bedroom with a vibrant gallery wall of art", 576, 1024, "idea21")}

<h2>22. Furniture Chosen for the Overall Look</h2>
<p>Beyond individual thrifted pieces, some furniture needs to be bought new simply to round out what secondhand hunting hasn't turned up yet.</p>
<p>This is the practical reality of building a collected-looking room &mdash; not every piece comes from a lucky find.</p>
<p>Mixing new furniture with the thrifted and DIY pieces from earlier in this list still reads as boho, as long as the color story stays consistent.</p>
<p>The goal is a cohesive room, not a strict sourcing purity test.</p>
${photo("boho-furniture.png", "Stylish bohemian bedroom showcasing rattan and wood furniture", 576, 1024, "idea22")}

<h2>Final Thoughts</h2>
<p>A boho bedroom built entirely from new purchases rarely achieves the collected feel the style is known for.</p>
<p>One built entirely from secondhand finds takes years and a lot of patience to pull together.</p>
<p>Most real boho bedrooms land somewhere in between &mdash; thrifted pieces with character, a few handmade touches, and new purchases where quality and fit actually matter.</p>
<p>Start with the color story, then build out from whichever category is easiest to tackle first.</p>
`;

module.exports = { body };
