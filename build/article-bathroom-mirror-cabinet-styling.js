// Body content for "How to Style Bathroom Mirror Cabinets, Not Just
// Hang One". Guide format, condensed from a 20-section source (several
// short closing sections — seasonal styling, do's/don'ts, why worth
// the investment, conclusion — folded into a final thoughts section).
// Distinct from the existing bathroom-mirror-ideas article, which
// covers mirror shapes and types broadly (round, lighted, vintage,
// statement) without a storage-cabinet focus — this is specifically
// about mirror cabinets and styling them by design direction. The
// "Modern Luxe" style section reused the hero photo a second time in
// the source at a different crop, so it runs text-only here rather
// than duplicating the image. Source photos have no Pinterest links,
// so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CQR347YV", title: "Quavikey 16\"x26\" Medicine Cabinet with Mirror, Recessed or Surface, Silver", w: 497, h: 953 },
    { asin: "B07WR11CRF", title: "Tangkula Bathroom Medicine Cabinet with Mirror", w: 1393, h: 1500 },
  ],
  whyAttention: [
    { asin: "B07GPWPMT2", title: "16” x 22” White Recessed Medicine Cabinet with Non-Adjustable Shelves", w: 1264, h: 843 },
    { asin: "B0B14KGLM4", title: "14 x 24 Black Aluminum Medicine Cabinet with Mirror, Recessed/Surface Mount", w: 1083, h: 1425 },
  ],
  designStylesRole: [
    { asin: "B0C36BR8TS", title: "MeowWoof Medicine Cabinet Mirror for Bathroom", w: 983, h: 1488 },
    { asin: "B0DDPTVN8F", title: "H &amp; A Farmhouse Wood Frame Bathroom Medicine Cabinet, 24''x16'' with Mirror", w: 985, h: 1487 },
  ],
  commonMistakes: [
    { asin: "B0D1K6YMLS", title: "6 Pcs Medicine Cabinet Tray Organizer", w: 1500, h: 1500 },
    { asin: "B0CYQG3W8D", title: "Bathroom Medicine Cabinet Organizer Set", w: 1072, h: 1142 },
  ],
  choosingRight: [
    { asin: "B01HO6ACP0", title: "Tangkula Mirrored Medicine Cabinet", w: 1500, h: 1197 },
    { asin: "B0D5GVZVTP", title: "ALIMORDEN Medicine Cabinet with LED Lighted, Bathroom Wall Cabinet with Glass Door", w: 1500, h: 1500 },
  ],
  modernLuxe: [
    { asin: "B0CPJ1GCDT", title: "Gold Bathroom Medicine Cabinet with Mirror 16 x 30 Inch", w: 1500, h: 1500 },
    { asin: "B0D9VCSHQN", title: "TokeShimi 16 x 20 Surface Mount Medicine Cabinet Aluminum", w: 1500, h: 1500 },
  ],
  farmhouse: [
    { asin: "B0CTJLH12M", title: "Farmhouse Medicine Cabinet Mirror with Wood Frame", w: 985, h: 1487 },
    { asin: "B0CWP2BGRT", title: "FLYJOE 20x26 Medicine Cabinet with Mirror", w: 1500, h: 1500 },
  ],
  minimalist: [
    { asin: "B0DSKBB3GM", title: "16 x 26 inch Bathroom Medicine Cabinet", w: 1500, h: 1500 },
    { asin: "B00GYYC784", title: "Head West Recessed Frameless Medicine Cabinet Mirror with Beveled Edge", w: 732, h: 1500 },
  ],
  eclecticBold: [
    { asin: "B0CKPC9LXS", title: "Arched Medicine Cabinet with Mirror, Arched Mirror Cabinet for Bathroom", w: 1500, h: 1500 },
    { asin: "B0CWQK7553", title: "sogesfurniture Recessed Bathroom Medicine Cabinet, 36\"x24\", Arched", w: 1500, h: 1500 },
  ],
  lighting: [
    { asin: "B0CGD3HCLJ", title: "20 * 28 Left Hinge LED Bathroom Mirror Cabinet, Aluminum Medicine Cabinet", w: 1001, h: 1001 },
    { asin: "B0C9WTJ1D7", title: "ROOMTEC Lighted Medicine Cabinet with Mirror", w: 1500, h: 1500 },
  ],
  pairingVanity: [
    { asin: "B0D6YX64Y5", title: "Marzzi 36\" Bathroom Vanity Set with Matching Mirror Medicine Cabinet", w: 1500, h: 1500 },
    { asin: "B0CS5H8C32", title: "Merax 36\" Bathroom Vanity with Ceramic Sink and Mirror Medicine Cabinet", w: 1500, h: 1500 },
  ],
  organization: [
    { asin: "B0CP6RHYFZ", title: "Medicine Cabinet Organizer Shelf, Vanity Trays for Bathroom Counter", w: 1500, h: 1500 },
    { asin: "B0D1JT7DV8", title: "3 Pcs Medicine Cabinet Tray Organizer", w: 1500, h: 1500 },
  ],
  accessorizing: [
    { asin: "B08523F1VL", title: "HOMWOO Floating Shelves, Walnut Natural Wood, Small Picture Ledge, 12 Inches", w: 1478, h: 1228 },
    { asin: "B08RSCRPVV", title: "4 Pack Small Fake Plants in White Pulp Pots for Home, Shelf &amp; Desk Decor", w: 1500, h: 864 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bathroom-mirror-cabinet-styling-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bathroom-mirror-cabinet-styling", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A mirror cabinet does double duty &mdash; storage and reflection &mdash; which is exactly why it gets styled less carefully than either job deserves.</p>
<p>Most bathrooms treat it as purely functional, hung and forgotten. It's worth more consideration than that.</p>
<p>This covers how to actually style one, by design direction and by the details that get overlooked.</p>
${photo("hero.png", "Elegant bathroom mirror cabinet styled thoughtfully", 1312, 736, "hero")}

<h2>Why It Deserves More Attention</h2>
<p>A mirror cabinet sits at eye level and gets used daily, which makes it one of the most-seen fixtures in the entire bathroom, styled or not.</p>
<p>Treating it as a genuine design element, not just a medicine cabinet with a mirror on front, changes how the whole room reads.</p>
${photo("intro.png", "Thoughtfully styled mirror cabinet elevating the bathroom's design", 1024, 574)}
${photo("why-attention.jpg", "Bathroom mirror cabinet deserving more design consideration", 683, 1024, "whyAttention")}

<h2>Its Role Across Different Design Styles</h2>
<p>A mirror cabinet's frame, hardware and proportions should echo the bathroom's broader style rather than being chosen in isolation.</p>
<p>This single piece of furniture-adjacent hardware carries more stylistic weight than its size would suggest, given how central it is to the room.</p>
${photo("design-styles-role.png", "Mirror cabinet style reflecting the bathroom's broader design direction", 1024, 574, "designStylesRole")}

<h2>Common Mistakes Worth Avoiding</h2>
<p>Choosing a cabinet based purely on storage capacity, without considering how the frame and mirror proportions work in the room, is the most frequent misstep.</p>
<p>Overfilling the interior shelves until the door won't close properly is the second &mdash; a cabinet that's hard to use stops getting used properly at all.</p>
${productGrid("commonMistakes")}

<h2>Choosing the Right One for the Space</h2>
<p>A larger mirror cabinet can make a small bathroom feel more spacious by reflecting more light, while an oversized one in an already tight room risks feeling heavy.</p>
<p>Matching the cabinet's width roughly to the vanity below it creates a more intentional, built-in feeling than a mismatched size ever will.</p>
${photo("choosing-right.png", "Properly sized mirror cabinet suited to the bathroom's scale", 1024, 574, "choosingRight")}

<h2>Styling for Modern Luxe</h2>
<p>A sleek, minimal frame in brushed brass or matte black, paired with clean-lined hardware, fits a modern luxe bathroom without competing with the room's other finishes.</p>
<p>Keeping the interior shelves sparse and organized matters more in this style than almost any other, since the whole look depends on restraint.</p>
${productGrid("modernLuxe")}

<h2>Styling for Farmhouse Chic</h2>
<p>A wood-framed cabinet, or one with slightly distressed hardware, brings warmth that fits a farmhouse bathroom's broader material story.</p>
<p>A few considered objects visible through an open door &mdash; folded towels, a simple glass jar &mdash; extend the farmhouse feel even into the cabinet's interior.</p>
${photo("farmhouse-1.png", "Farmhouse-style mirror cabinet with warm wood framing", 1024, 574)}
${photo("farmhouse-2.jpg", "Farmhouse chic bathroom featuring a charming mirror cabinet", 683, 1024, "farmhouse")}

<h2>Styling for Minimalist</h2>
<p>A frameless or barely-there frame keeps the cabinet from adding visual weight to an intentionally pared-back room.</p>
<p>Interior organization matters most in this style, since a minimalist room offers nowhere for clutter to hide once that door opens.</p>
${photo("minimalist.jpg", "Minimalist mirror cabinet with a clean, frameless design", 683, 1024, "minimalist")}

<h2>Styling for Eclectic and Bold</h2>
<p>An unusually shaped cabinet, a bold frame color, or an unexpected hardware finish all work in a room already embracing a more maximalist approach.</p>
<p>This is the one style direction where the cabinet itself can be the room's statement piece rather than a supporting element.</p>
${photo("eclectic-bold.jpg", "Bold eclectic mirror cabinet serving as a bathroom statement piece", 683, 1024, "eclecticBold")}

<h2>Lighting Is the Secret Weapon</h2>
<p>A cabinet with integrated lighting, or one paired with sconces on either side, does more for daily function than the cabinet itself.</p>
<p>Warm-toned lighting specifically flatters skin tone far better than the cool, clinical light many bathroom fixtures default to.</p>
${productGrid("lighting")}

<h2>Pairing With the Vanity</h2>
<p>A cabinet that shares a material or finish with the vanity below creates a cohesive, intentional look rather than two separate fixtures that happen to share a wall.</p>
<p>This pairing matters more to the room's overall polish than either piece chosen independently.</p>
${productGrid("pairingVanity")}

<h2>Organization Worth Doing Right</h2>
<p>Grouping items by category &mdash; skincare, daily medications, grooming tools &mdash; on dedicated shelves keeps the cabinet functional even when it's opened quickly every morning.</p>
<p>A small bin or tray for loose items prevents the bottom shelf from becoming an unsorted catch-all.</p>
${productGrid("organization")}

<h2>Accessorizing Around It</h2>
<p>A small shelf, a plant, or a piece of art placed near the cabinet extends its presence into the rest of the wall rather than leaving it visually isolated.</p>
<p>This is a simple way to make a purely functional fixture feel like part of the room's intentional design.</p>
${photo("accessorizing.jpg", "Thoughtful accessories extending the mirror cabinet's visual presence", 727, 1024, "accessorizing")}

<h2>Final Thoughts</h2>
<p>A mirror cabinet earns real design attention beyond its storage function &mdash; the frame, the lighting, and what's visible inside all matter.</p>
<p>Match it to the room's broader style, keep the interior genuinely organized, and it becomes a considered fixture rather than an overlooked necessity.</p>
<p>Worth the investment, both in function and in how it shapes the whole room's first impression.</p>
`;

module.exports = { body };
