// Body content for "14 Nursery Design Directions to Pick Before You
// Buy Anything". Numbered idea-list format with a condensed intro
// covering the source's "what works" and "safety first" sections,
// since both had photos. Topic heavily overlaps with the existing
// nursery-decor-ideas article (23 individual element ideas: rug,
// lighting, bookshelf, canopy, etc.), so this one is organized around
// picking a complete design direction/style first — neutral, boho,
// modern minimalist, woodland, and so on — rather than a flat list of
// individual decor elements. Idea 13 ("Personalized") had a photo but
// no heading in the source (an apparent editing gap between idea 12
// and the "14" labeled idea) — kept as its own idea here, titled from
// context. The source had 11 attributed quotes (Steve Jobs, American
// Academy of Pediatrics, Leonardo da Vinci, Hans Hofmann, Pablo
// Picasso, Charles Eames, Christina Scalise, Emilie Buchwald,
// "Unknown", Vivienne Westwood, John Muir) — all cut entirely per
// standing no-fabricated-quotes policy, not reproduced in any form.
// Rewritten from scratch in the site's calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0B1TCSXVM", title: "Storkcraft Premium Hoop Glider and Ottoman, Natural and Beige", w: 1445, h: 1500 },
    { asin: "B0FLLDWL99", title: "Ophanie Fluffy Soft Shag Area Rug for Bedroom, Ivory, Non-Slip", w: 1500, h: 1500 },
  ],
  works: [
    { asin: "B08KHD615K", title: "Jool Baby Soft Changing Pad with Washable Cover, Cloud Pattern, Gray", w: 1200, h: 1200 },
    { asin: "B0711RQMNF", title: "Amazon Basics Collapsible Fabric Storage Cubes with Handles", w: 1500, h: 895 },
  ],
  safety: [
    { asin: "B0C1V7SKMS", title: "Ougourim Furniture Anchors, 10 Pack, Anti-Tip Baby Proofing Kit", w: 1500, h: 1500 },
    { asin: "B00T9QLAYG", title: "Dreambaby Blind Cord Wind Ups, Window Cord Safety Wraps, 8 Count", w: 1500, h: 1500 },
  ],
  idea1: [
    { asin: "B0CP169Z94", title: "GUNTAIL Fitted Crib Sheets, 2 Pack, for Standard Crib and Toddler Mattress", w: 1500, h: 1498 },
    { asin: "B0F23NY7XY", title: "HOMEIDEAS 100% Blackout Beige Faux Linen Curtains, 52 x 84 Inch, 2 Panels", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B098N9RB15", title: "Mkono Large Macrame Wall Hanging, Boho Woven Tapestry with Tassels", w: 1303, h: 1500 },
    { asin: "B0DPFTTXTH", title: "Ziqqeelam Small Rattan Bedside Table Lamp for Bedroom", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B084DW1JQX", title: "Dream On Me Synergy 4-in-1 Convertible Mini Crib, White", w: 1500, h: 1500 },
    { asin: "B0FNWM9XCP", title: "Flamaker 7 Drawer Dresser for Bedroom, White", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0FH2BC17K", title: "LLEEMPI Woodland Animal Nursery Wall Art Set of 3, 12 x 16 Inch Wood Framed Prints", w: 1482, h: 954 },
    { asin: "B0F82VT9H7", title: "Hahafelt 3-Piece Woodland Forest Animal Crib Bedding Set", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B01BQLOSV8", title: "Dream On Me Aden 4-in-1 Mini Convertible Baby Crib, Grey", w: 1500, h: 1500 },
    { asin: "B0C1RXZPQK", title: "Maxpeuvon Natural Wood Nursery Floating Shelves, Set of 3", w: 1250, h: 1500 },
  ],
  idea6: [
    { asin: "B0GZP35GPW", title: "Peryiter Gingham Fitted Crib Sheets, 2 Pack, Green, Standard Crib", w: 1500, h: 1472 },
    { asin: "B0D5XL5K1R", title: "Sage Green Boho Floral Nursery Rug, 5 x 7 Ft, Washable and Soft", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0F4Q8V7C4", title: "Soon Global Acoustic Wood Wall Panels, Arcadian Vortex Pattern", w: 1500, h: 1449 },
    { asin: "B0DMFDDV8D", title: "Modern Gold Crystal Fandelier Ceiling Fan with Lights and Remote", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0DB8D4DHG", title: "wondever Jungle Animals Train Wall Decals with Hot Air Balloons", w: 1500, h: 1500 },
    { asin: "B0FSPN1G4W", title: "SAMHOU Funny Cartoon Animal Canvas Prints for Kids Room, Set of 9", w: 1307, h: 1334 },
  ],
  idea9: [
    { asin: "B0FLDL496M", title: "Criusia Over the Door Organizer, 6 Shelf Hanging Closet Storage with 13 Mesh Pockets", w: 1129, h: 1500 },
    { asin: "B0BC966PMQ", title: "DIMJ Fabric Drawer Organizers for Baby Clothes and Nursery, 12 Pack", w: 1079, h: 1151 },
  ],
  idea10: [
    { asin: "B0HCBGZGD2", title: "Garvee Nursery Rocking Chair with Ottoman, High Backrest and Lumbar Pillow", w: 1500, h: 1500 },
    { asin: "B07Q55HRS1", title: "Humble Crew Montessori Kids Bookshelf, 4 Tier Front-Facing Toddler Bookcase", w: 1436, h: 1500 },
  ],
  idea11: [
    { asin: "B0CZ3H41CC", title: "12.5 Inch Boho Rattan Pendant Light, Woven Flush Mount Mini Chandelier", w: 1500, h: 1500 },
    { asin: "B0DBZ8F9KF", title: "YISUN Cloud Night Light, Rechargeable Silicone Nursery Lamp for Baby and Toddler", w: 1500, h: 1500 },
  ],
  idea12: [
    { asin: "B092BCSBTS", title: "Suite Bebe Barnside 4-in-1 Convertible Baby Crib, Vintage Chestnut", w: 1500, h: 1500 },
    { asin: "B0F542DJ61", title: "BOLUO Baby Dresser with Changing Table Top and 6 Fabric Drawers", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0GQSHTJ4Q", title: "Personalized Wooden Name Sign for Nursery, Custom Baby Name Door and Wall Decor", w: 1421, h: 401 },
    { asin: "B0FW3G57GM", title: "Personalized Hand-Embroidered Chunky Knit Newborn Blanket, 40 x 30 Inch", w: 1500, h: 1303 },
  ],
  idea14: [
    { asin: "B0GKVWTJVK", title: "17 Inch Artificial Olive Plant in White Ceramic Planter", w: 1162, h: 1500 },
    { asin: "B0FLCYQCR9", title: "Wildflower Nursery Wall Art, Pink Watercolor Floral Canvas Set", w: 1500, h: 1076 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "nursery-design-direction-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "nursery-design-direction-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "nursery-design-direction-guide", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Most nursery planning starts with individual items &mdash; a crib, a rug, a mobile.</p>
<p>It usually works better the other way around: pick a complete design direction first, then shop for pieces that fit it.</p>
<p>A clear direction keeps a nursery from turning into a pile of cute, unrelated purchases.</p>
<p>These 14 directions each have their own logic, and most of them work on any budget.</p>
${photo("hero.jpg", "Soft, calming baby nursery room with warm natural light", 1097, 870, "hero")}

<h2>What Actually Makes a Nursery Work</h2>
<p>A nursery that functions well almost always has three things in common: a clear layout, a calming color story, and room to actually move around the crib and changing area.</p>
<p>Style matters, but it comes second to whether the room is genuinely usable at 3 a.m.</p>
<p>Starting with function, then layering style on top, tends to produce a room that holds up better over the first year.</p>
${pinPhoto("intro-what-works.jpg", "Well-organized functional baby nursery room layout", 683, 1024, "https://www.pinterest.com/pin/87749892737099998/", "functional nursery layout", "works")}

<h2>Safety Comes Before Any Style Choice</h2>
<p>Every direction on this list still needs to follow the same baseline safety rules.</p>
<p>A firm crib mattress, no loose bedding or pillows in the crib, and furniture anchored to the wall all apply regardless of aesthetic.</p>
<p>Cords from blinds or lamps need to stay well out of reach of the crib.</p>
<p>None of the styling choices below should ever come before these basics.</p>
${pinPhoto("intro-safety-style.jpg", "Nursery room designed with safety-first furniture placement", 450, 563, "https://www.pinterest.com/pin/12807180183426583/", "safety-first nursery layout", "safety")}

<h2>1. Neutral and Timeless</h2>
<p>Soft whites, warm beiges and muted taupes make up most of this direction.</p>
<p>It ages well past infancy, since nothing about it reads as babyish once the room needs to grow up a little.</p>
<p>This is the lowest-risk direction for anyone who doesn't want to repaint in two years.</p>
<p>Texture does most of the visual work here, since color variation stays minimal on purpose.</p>
${pinPhoto("neutral.jpg", "Calm neutral-toned baby nursery room with timeless styling", 683, 1024, "https://www.pinterest.com/pin/68749742799/", "neutral nursery styling", "idea1")}

<h2>2. Boho</h2>
<p>Woven textures, macrame, rattan furniture and a slightly imperfect, collected feel define this direction.</p>
<p>Layering is the main technique &mdash; a textured rug, a woven wall hanging, a mix of natural materials all stacked together.</p>
<p>This suits anyone whose existing home already leans toward warm, textural spaces.</p>
<p>It tends to feel less precious than other directions, which can be a practical advantage with a newborn around.</p>
${pinPhoto("boho.jpg", "Boho-styled baby nursery room with woven textures and warm tones", 683, 1024, "https://www.pinterest.com/pin/10977592836182296/", "boho nursery styling", "idea2")}

<h2>3. Modern Minimalist</h2>
<p>Clean lines, a restrained color palette and very little on display define this one.</p>
<p>Furniture does the visual work instead of decor &mdash; a well-designed crib or dresser doesn't need much around it.</p>
<p>This direction photographs well, but it also genuinely reduces visual clutter in a room that fills up fast regardless.</p>
<p>It suits a parent who wants a calm space more than a themed one.</p>
${pinPhoto("modern-minimalist.jpg", "Modern minimalist baby nursery room with clean lines", 576, 1024, "https://www.pinterest.com/pin/8655424282201486/", "modern minimalist nursery", "idea3")}

<h2>4. Woodland</h2>
<p>Forest animals, muted greens and browns, and natural wood furniture build this direction without leaning into anything cartoonish.</p>
<p>A few well-chosen illustrated prints go further than wall-to-wall themed wallpaper.</p>
<p>This suits parents who want a theme but not one that feels overly literal or juvenile.</p>
<p>It also pairs naturally with real plants, which do double duty as both decor and the nature-inspired idea below.</p>
${pinPhoto("woodland.jpg", "Woodland-themed baby nursery room with nature-inspired decor", 683, 1024, "https://www.pinterest.com/pin/707417054011442517/", "woodland nursery theme", "idea4")}

<h2>5. Built for a Small Space</h2>
<p>This isn't a style so much as a set of constraints &mdash; and it changes every other choice that follows.</p>
<p>Vertical storage, a compact glider, and furniture that serves double duty all matter more here than in a larger room.</p>
<p>A mini crib or a crib that converts early saves real floor space in the first year.</p>
<p>Every other direction on this list can still apply, just scaled down and edited more tightly.</p>
${pinPhoto("small-space.jpg", "Compact baby nursery room designed for a small space", 684, 1024, "https://www.pinterest.com/pin/10203536650791382/", "small space nursery", "idea5")}

<h2>6. Gender-Neutral</h2>
<p>Sage green, warm yellow, terracotta and soft gray all work well here, avoiding the classic pink-or-blue default entirely.</p>
<p>This direction tends to stay relevant for a second child too, regardless of gender.</p>
<p>Pattern and texture carry more of the visual interest when color is kept this restrained.</p>
<p>It's also one of the more popular directions for parents who find out the gender late or not at all.</p>
${pinPhoto("gender-neutral.jpg", "Gender-neutral baby nursery room with sage green and warm tones", 533, 800, "https://www.pinterest.com/pin/510173464061294293/", "gender-neutral nursery", "idea6")}

<h2>7. Luxury-Inspired, Not Luxury-Priced</h2>
<p>A few higher-end-looking touches &mdash; a statement light fixture, a quality rug, a well-made glider &mdash; can carry an entire room's perceived value.</p>
<p>The trick is spending on the two or three pieces that get noticed first and keeping everything else simple.</p>
<p>A fluted or paneled accent wall adds a custom, built-in look for relatively little cost.</p>
<p>This direction is really about where the budget goes, more than the total amount spent.</p>
${pinPhoto("luxury-inspired.jpg", "Luxury-inspired baby nursery room with elegant, elevated details", 575, 1024, "https://www.pinterest.com/pin/404761085283013422/", "luxury-inspired nursery", "idea7")}

<h2>8. Built Around Creative Wall Decor</h2>
<p>A gallery of mismatched prints, a mural, or a single oversized piece of art can carry an entire room's personality.</p>
<p>This is a good direction for parents who want something custom without touching furniture or paint.</p>
<p>It's also one of the easiest directions to update later as a child's taste develops.</p>
<p>Keeping the wall art below a safe height and securely mounted matters here more than in any other room.</p>
${pinPhoto("creative-wall-decor.jpg", "Baby nursery room with creative, personalized wall decor", 683, 1024, "https://www.pinterest.com/pin/1034702083153258465/", "creative wall decor nursery", "idea8")}

<h2>9. Built Around Smart Storage</h2>
<p>A nursery accumulates more small items than almost any other room in the house.</p>
<p>Baskets, labeled bins, and furniture with built-in storage keep that accumulation from spilling onto every surface.</p>
<p>This direction prioritizes function first and lets the aesthetic follow from whatever storage system actually gets used.</p>
<p>A room that's easy to keep tidy stays easier to enjoy, especially in the sleep-deprived early months.</p>
${pinPhoto("smart-storage.jpg", "Baby nursery room with smart, functional storage solutions", 683, 1024, "https://www.pinterest.com/pin/73746512643933555/", "smart storage nursery", "idea9")}

<h2>10. Built Around a Reading Corner</h2>
<p>A comfortable glider, a small side table and a soft reading light turn one corner into a dedicated spot for feeding and bedtime stories.</p>
<p>This is less about the room's overall look and more about carving out one functional zone.</p>
<p>Keeping that corner separate from the crib and changing area helps the room feel organized by activity.</p>
<p>It's one of the few spots in the nursery a parent will use as much as the baby does.</p>
${pinPhoto("reading-corner.jpg", "Cozy reading corner in a baby nursery room with a comfortable chair", 594, 1024, "https://www.pinterest.com/pin/45669383718129310/", "cozy nursery reading corner", "idea10")}

<h2>11. Built Around Statement Lighting</h2>
<p>A single standout fixture &mdash; a woven pendant, a sculptural lamp, a soft cloud-style light &mdash; can anchor the whole room's mood.</p>
<p>Layering in a dimmable lamp alongside it keeps late-night feedings from needing a full bright light.</p>
<p>This direction suits a smaller nursery especially well, since one statement piece does more with less.</p>
<p>Warm-toned bulbs matter here as much as the fixture itself.</p>
${pinPhoto("statement-lighting.jpg", "Baby nursery room featuring a statement light fixture", 683, 1024, "https://www.pinterest.com/pin/AUQSi6aSnqrpcHY_tFFTTGdYWd0Ifw9WPaQmxZmIuuGjPBUk5jdaob_aS4CoGB9C32_aEFDTkAtSpvtPPdVM624/", "statement lighting nursery", "idea11")}

<h2>12. Built Around Convertible Furniture</h2>
<p>A crib that converts to a toddler bed, or a dresser that doubles as a changing table, stretches the room's usefulness well past infancy.</p>
<p>This direction is as much a budget decision as a style one &mdash; fewer furniture purchases over the next several years.</p>
<p>It suits parents who'd rather invest in fewer, higher-quality pieces upfront.</p>
<p>The room's look stays secondary to how long each piece will actually stay useful.</p>
${pinPhoto("convertible-furniture.jpg", "Convertible crib and furniture in a baby nursery room", 507, 890, "https://www.pinterest.com/pin/49821139623773638/", "convertible nursery furniture", "idea12")}

<h2>13. Built Around Personal Touches</h2>
<p>A name spelled out above the crib, a family heirloom repurposed as decor, or a handmade quilt all make a nursery feel specific rather than generic.</p>
<p>This direction layers on top of almost any other style on this list rather than replacing it.</p>
<p>A few meaningful objects do more than a room full of matching store-bought pieces.</p>
<p>It's often what parents remember most fondly once the room gets repurposed later.</p>
${pinPhoto("personalized.jpg", "Personalized baby nursery room with meaningful family touches", 683, 1024, "https://www.pinterest.com/pin/22869910604382793/", "personalized nursery touches", "idea13")}

<h2>14. Nature-Inspired</h2>
<p>Real or faux plants, natural wood tones, and soft greens and browns bring an outdoor calm indoors.</p>
<p>This direction suits parents who want a theme that feels organic rather than overtly decorated.</p>
<p>It pairs especially well with the woodland direction above, and can borrow freely from it.</p>
<p>A nature-inspired room tends to feel peaceful without needing much else added.</p>
${pinPhoto("nature-inspired.jpg", "Nature-inspired baby nursery room with plants and natural tones", 576, 1024, "https://www.pinterest.com/pin/1900024839098648/", "nature-inspired nursery", "idea14")}

<h2>Final Thoughts</h2>
<p>Picking one of these 14 directions before shopping saves real money and real second-guessing later.</p>
<p>A nursery built around a clear direction holds together visually, even as individual pieces get added over time.</p>
<p>Safety always comes first, no matter which direction gets chosen.</p>
<p>After that, the best direction is simply the one that matches how the room will actually be used.</p>
`;

module.exports = { body };
