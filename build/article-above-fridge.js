// Body content for the "12 Ways to Style Above Fridge" post.
// Images sourced from Pinterest pins the user selected and provided
// directly; each is credited back to its pin per their request.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PIN = {
  hero: { src: "hero", w: 1024, h: 1536, alt: "Stainless steel refrigerator styled with a ceramic vase, framed art and a woven basket on top", url: "https://www.pinterest.com/pin/633387444744405/", label: "Above Fridge Basket and Art Display" },
  basket: { src: "basket", w: 1122, h: 1402, alt: "Woven baskets and a pitcher of eucalyptus styled above a stainless steel refrigerator", url: "https://www.pinterest.com/pin/410601691050796552/", label: "Above Fridge Basket Styling" },
  tray: { src: "tray", w: 517, h: 960, alt: "Wire tray filled with small potted greenery and pitchers on top of a refrigerator", url: "https://www.pinterest.com/pin/351912461611829/", label: "Above Fridge Tray Display" },
  coffeeStation: { src: "coffee-station", w: 812, h: 961, alt: "Woven tray styled with an EAT sign, a decorative finial and pussy willow branches above a refrigerator", url: "https://www.pinterest.com/pin/70437491027391/", label: "Above Fridge Tray Vignette" },
  cookbooks: { src: "cookbooks", w: 704, h: 1024, alt: "Open wooden shelving above a refrigerator lined with cookbooks, potted plants and ceramic pitchers", url: "https://www.pinterest.com/pin/346073552639462256/", label: "Above Fridge Cookbook Shelf" },
  bowl: { src: "bowl", w: 1200, h: 1200, alt: "Large white ceramic bowl, woven basket and stacked cookbooks styled on top of a refrigerator", url: "https://www.pinterest.com/pin/563018699319439/", label: "Above Fridge Bowl and Basket Styling" },
  plant: { src: "plant", w: 810, h: 1080, alt: "Wooden crate holding small bud vases of greenery and a decorative sign above a refrigerator", url: "https://www.pinterest.com/pin/162411130308998553/", label: "Above Fridge Greenery Display" },
  cuttingBoard: { src: "cutting-board", w: 1080, h: 1920, alt: "Wooden cutting boards leaned beside woven baskets and greenery on top of a refrigerator", url: "https://www.pinterest.com/pin/422281212678741/", label: "Above Fridge Cutting Board Styling" },
  vintage: { src: "vintage-decor", w: 640, h: 1316, alt: "White rooster figurine and a decorative plate styled above a stainless steel refrigerator", url: "https://www.pinterest.com/pin/281543727199522/", label: "Above Fridge Vintage Farmhouse Decor" },
  vase: { src: "vase", w: 900, h: 1200, alt: "Pink floral arrangement in a vintage milk can styled above a stainless steel refrigerator", url: "https://www.pinterest.com/pin/2392606049081698/", label: "Above Fridge Floral Vase Display" },
  neutral: { src: "neutral-display", w: 736, h: 981, alt: "Built-in cabinet niche above a refrigerator styled with tulips, a wood tray and a ceramic bird in neutral tones", url: "https://www.pinterest.com/pin/109986415894938390/", label: "Neutral Above Fridge Display" },
  hiddenStorage: { src: "hidden-storage", w: 1000, h: 1500, alt: "Stacked wooden crates used as storage above a refrigerator, holding cookbooks, jars and potted plants", url: "https://www.pinterest.com/pin/1099652434085001748/", label: "Above Fridge Crate Storage" },
  layered: { src: "layered-display", w: 768, h: 1152, alt: "Layered above-fridge shelf styled with framed art, trailing plants and wire baskets", url: "https://www.pinterest.com/pin/1477812374535027/", label: "Layered Above Fridge Display" },
  canYouDecorate: { src: "can-you-decorate", w: 1000, h: 1500, alt: "Kitchen refrigerator with an open shelf above it styled with plants, framed prints and wire baskets", url: "https://www.pinterest.com/pin/703756189622238/", label: "Above Fridge Shelf Styling" },
  lookExpensive: { src: "look-expensive", w: 1200, h: 1799, alt: "Vintage gold picture frames and a trailing plant styled above and beside a refrigerator", url: "https://www.pinterest.com/pin/362047257570505305/", label: "Curated Above Fridge Vignette" },
  whatNotToPut: { src: "what-not-to-put", w: 1200, h: 900, alt: "Refrigerator top crowded with farmhouse figurines, signs and a dried floral arrangement", url: "https://www.pinterest.com/pin/6192518232798996/", label: "Above Fridge Farmhouse Decor" },
  smallSpace: { src: "small-space", w: 500, h: 713, alt: "Small woven tray styled with an EAT sign and a decorative finial in a tight above-fridge space", url: "https://www.pinterest.com/pin/529665606193634874/", label: "Compact Above Fridge Styling" },
  stainlessSteel: { src: "stainless-steel", w: 683, h: 1024, alt: "Stainless steel refrigerator styled simply with a wooden heart and two small potted plants", url: "https://www.pinterest.com/pin/222154194114731662/", label: "Stainless Steel Fridge Top Styling" },
};

const PRODUCTS = {
  hero: [
    { asin: "B0881LL44Y", title: "StorageWorks Pantry Baskets for Organizing, Wicker Basket with Built-in Handles, Handwoven Wicker Storage Baskets, Water Hyacinth for Shelves, 2 Pack", w: 1500, h: 897 },
    { asin: "B00H34G24E", title: "Honey-Can-Do Woven Water Hyacinth Wicker Storage Baskets, Nesting Set of 3", w: 1500, h: 995 },
  ],
  basket: [
    { asin: "B094QZWL92", title: "Large Wicker Basket with Handle, Empty Willow Basket,16 Inch,Grey", w: 1500, h: 1366 },
    { asin: "B0F5WB8PZ4", title: "MEGASKET Jute Wicker Storage Basket with Handles, 17\"x12\"x8\" Decorative Woven Baskets for Organizing Dog Toy, Gifts, Book, Towel, Cloth, Boho Storage Bin for Shelves, Entryway, Closet, Home Decor", w: 1500, h: 925 },
  ],
  tray: [
    { asin: "B08J7ZZZSJ", title: "Galvanized Metal Serving Trays with Copper Strip and Iron Black Handles, Farmhouse Tray, Decorative Centerpiece for Coffee Table or Dining Table", w: 1500, h: 820 },
    { asin: "B0BN9YG8WZ", title: "Relaxing Garden 13\" Round Decorative Wood Tray with Handles", w: 1500, h: 991 },
  ],
  coffeeStation: [
    { asin: "B0D6G4B1QL", title: "Coffee Bar Sign for Wall, Vintage Cafe Station Signs for Coffee Bar Decor", w: 1500, h: 760 },
    { asin: "B088W9DMSW", title: "Mkono Coffee Bar Sign, 2 Sides Farmhouse Wood Sign with Funny Sayings Decor", w: 857, h: 1226 },
  ],
  cookbooks: [
    { asin: "B0G6D9WR2J", title: "Beautiful Wooden Cookbook Stand for Your Kitchen Counter – Solid Wood Scalloped Book Holder (Acacia)", w: 1500, h: 1500 },
    { asin: "B0CQBXD41Q", title: "DEBETOOL 8.8\" Wooden Cookbook Stand for Kitchen Counter, Rustic Brown", w: 1496, h: 1457 },
  ],
  bowl: [
    { asin: "B0GLGM997X", title: "Ceramic Fruit Bowl,10.2\" Decorative Bowl, Large Fruit Bowl for Kitchen Counter, Pedestal Bowl, Kitchen Counter Décor, Bread Candy Snacks Organizer(Magic Eye Blue)", w: 1487, h: 851 },
    { asin: "B07NC7YXTX", title: "Bloomingville Decorative Hand-Carved Paulownia Wood Bowl, Whitewashed, 10.5 in Diameter, 4.25 in Tall", w: 1500, h: 1015 },
  ],
  plant: [
    { asin: "B0CXLZ6MS7", title: "Decorative Hanging Plants for Shelf, Faux Ivy Eucalyptus Vine, Fake Greenery in White Bigger Pot (Light Green, 1PCS)", w: 561, h: 1491 },
    { asin: "B0DSW5S47D", title: "Fake Pothos Hanging Plants - 33\" Set of 2 Artificial Silk Ivy Vines with Pots, Realistic Faux Greenery for Indoor Home Office Bathroom Decor, Low Maintenance Hanging Plant Decoration - Golden Green", w: 1500, h: 1500 },
  ],
  cuttingBoard: [
    { asin: "B0CQ2CVXT7", title: "21\" XL Extra Large Wooden Cutting Board Big Round Charcuterie Boards", w: 1403, h: 1487 },
    { asin: "B0GFDYW42S", title: "Riveira Extra Large Bamboo Cutting Board for Kitchen, 36\" x 24\", 0.8 Inch Thick – Large Wood Cutting Board with Juice Groove, Reversible Butcher Block Cutting Board for Meat, Bread & Charcuterie", w: 1483, h: 1500 },
  ],
  vintage: [
    { asin: "B0D41FL76W", title: "White Ceramic Pitcher Vase, Flower Pitcher,Farmhouse vase for Home Décor, 8.5inch Jug Vase.", w: 914, h: 1243 },
    { asin: "B08V1YV3BP", title: "Creative Co-Op 28 oz. Stoneware Pitcher, Reactive Glaze, White (Each One Will Vary)", w: 1449, h: 1500 },
  ],
  vase: [
    { asin: "B0FDKFPHXB", title: "Modern Ceramic Vase Set, Neutral Colors, Decorative Vases for Home Decor, 4 Piece Collection (Beige)", w: 1500, h: 1500 },
    { asin: "B0DYNB5K2V", title: "Vanselia Ceramic Flower Vase Home Decor - Small Farmhouse Table Vases Rustic Vintage Living Room Kitchen Bedroom Decorations for House Book Shelf Office Coffee Desk Dining Fireplace (6.3\" Rustic)", w: 1500, h: 1500 },
  ],
  neutral: [
    { asin: "B071W969KY", title: "Distressed Finish Ceramic Bird Figurine Home Decor - Assorted Set of 3", w: 1284, h: 1481 },
    { asin: "B0G4BNDPH2", title: "Bird Decor. Ceramic Animal Statues Bird Figurines Home Decor", w: 1500, h: 866 },
  ],
  hiddenStorage: [
    { asin: "B0DD7KVD8X", title: "SETVSON Storage Basket with Lid Rattan Woven Storage Baskets with 2 Separate Lids, 17.2 Gallon (65 L), 22 x 13 x 13.8 Inches,Foldable, 2 Removable Liner Bags Handles for Bedroom, Laundry Room Natural", w: 1500, h: 1423 },
    { asin: "B0H115ZP76", title: "Wicker Storage Baskets with Lids, Set of 3 Nesting Natural Rattan Organizer Bins with Removable Liner, Decorative Woven Storage Boxes for Home Organization Bedroom Closet Shelves (Natural)", w: 1500, h: 1227 },
  ],
  layered: [
    { asin: "B0H7C64R9F", title: "11-Piece Rustic Farmhouse Decor Set with Wood Tray and Ceramic Vase", w: 1500, h: 1500 },
    { asin: "B09LQB2PR2", title: "Hanobe Wooden Tray for Coffee Table, Decorative Round Candle Holder Plate", w: 1474, h: 1500 },
  ],
  canYouDecorate: [
    { asin: "B01J7ZAHM4", title: "Spectrum Extra Large Wire Wall Mount Storage Basket Industrial Gray, Vintage Wire Basket Wall Mount Organizer Modern for Pantry Kitchen and Bath, Versatile Wall Mount Storage Basket Wire Caddy", w: 1500, h: 1045 },
    { asin: "B07L4CG2Q3", title: "X-cosrack Metal Wire Basket Wall Mount, 3 Tier Wall Storage Basket Organizer with Hanging Hooks Chalkboards, Rustic Kitchen Fruit Produce Bin Rack Bathroom Tower Baskets (Black)", w: 1487, h: 1465 },
  ],
  lookExpensive: [
    { asin: "B0GV3KYYW8", title: "TwoDays Vintage Picture Frame Set, Antique Gold and Brass, 12-Piece", w: 1500, h: 1413 },
    { asin: "B0FPQB7GD5", title: "Novabright 8 Pcs Gold Vintage Picture Frames (8x10, 5x7, 4x6)", w: 1500, h: 1495 },
  ],
  whatNotToPut: [
    { asin: "B0H3JD88J9", title: "Wood Serving Tray with Handles, Premium Decorative Wooden Tray", w: 1500, h: 891 },
    { asin: "B0D6YXMN3Q", title: "XZHXFX Bamboo Serving Tray with Gold Handles,Small", w: 1500, h: 1500 },
  ],
  smallSpace: [
    { asin: "B0BVBG3L78", title: "Round Rattan Serving Tray with Handles, Hand Woven Basket, Home Decor Organizer Tray for Breakfast, Tea, Snack, Fruit, Coffee,Storage (Medium)(11.9inchX1.7inch)", w: 1309, h: 1280 },
    { asin: "B08DQTVS46", title: "HITOMEN 11.8\" Hand-Woven Round Rattan Serving Tray Decorative Wicker Trays with Handles for Coffee Table (Natural-M)", w: 1428, h: 1500 },
  ],
  stainlessSteel: [
    { asin: "B0GS2747YM", title: "2 Pack Small Fake Plants, Mini Artificial Greenery Potted Faux Plants for Indoor Home Room Office Kitchen Farmhouse Bathroom Desk Shelf and Table Decor", w: 1491, h: 1500 },
    { asin: "B08ZSXD1BR", title: "Coferset 2 Pack Small Fake Plants Eucalyptus Potted,Sage Green", w: 1500, h: 1396 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "above-fridge-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

// No cropping: every image renders at its real, original pixel ratio.
// Served as AVIF first, WebP second, original JPEG as the final fallback —
// see picture() in build.js for the shared <picture> markup.
function photo(key) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "above-fridge", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(key)}`;
}

const ideas = [
  {
    n: "01",
    title: "Style Above the Fridge With a Woven Basket",
    photoKey: "basket",
    paras: [
      "A woven basket above the fridge gives you one of the easiest combinations of style and storage.",
      "I particularly like this idea for farmhouse, coastal, cottage, rustic, and warm minimalist kitchens. Choose one basket that fits the width of the space rather than filling the entire area with several tiny baskets.",
      "Use it for things you don't need every day, such as extra kitchen towels, seasonal napkins, reusable shopping bags, or lightweight serving pieces.",
    ],
    h3: "Choose the Right Basket",
    paraBeforeList: "Look for:",
    list: ["Natural rattan or seagrass", "A simple rectangular shape", "Neutral colors", "A fitted or subtle lid", "Enough depth to hide clutter"],
    after: [
      "HGTV also recommends woven baskets as a way to introduce texture while creating hidden storage in kitchen spaces.",
      "The trick involves hiding the practical stuff while keeping the texture visible. That's a win-win.",
    ],
  },
  {
    n: "02",
    title: "Add a Decorative Tray Above the Fridge",
    photoKey: "tray",
    paras: [
      "If you want your kitchen to feel more polished, try a decorative tray above the refrigerator.",
      "A large wooden, marble-look, metal, or woven tray can create a visual boundary for smaller objects. Instead of having three unrelated pieces floating around, the tray gives them a home.",
      "Try placing a small vase, candle, cookbook, or decorative bowl inside it.",
    ],
    h3: "Keep the Arrangement Simple",
    paraBeforeList: "I would use the rule of three here:",
    list: ["One taller item", "One medium item", "One smaller item"],
    after: [
      "For example, pair a ceramic vase with a small bowl and a folded kitchen towel.",
      "Why does this work? The tray creates one visual composition instead of making your eye jump between several unrelated objects.",
    ],
  },
  {
    n: "03",
    title: "Create a Mini Coffee Station Above the Fridge",
    photoKey: "coffeeStation",
    paras: [
      "Have you ever noticed how coffee accessories somehow multiply overnight?",
      "If you have a larger space above the fridge, turn it into a small coffee-themed display.",
      "You could use a decorative coffee sign, a small basket, a couple of attractive mugs, or a vintage coffee tin. Keep the arrangement decorative rather than trying to create a fully functional coffee station unless you can safely access everything.",
      "A stack of attractive coffee-table-style kitchen books can also add height.",
      "For a cozy kitchen, combine warm wood, cream ceramics, and woven textures. The result feels much more intentional than simply storing your coffee maker up there.",
    ],
  },
  {
    n: "04",
    title: "Use Cookbooks to Style Above the Fridge",
    photoKey: "cookbooks",
    paras: [
      "Cookbooks make excellent decor above the fridge because they combine color, texture, and personality.",
      "Choose two or three attractive books and stack them horizontally. Then place a small ceramic bowl or vase on top.",
      "I wouldn't use your entire cookbook collection here. Nobody needs a leaning tower of cookbooks threatening to slide onto their head every time they open the refrigerator.",
      "Instead, choose books that complement your kitchen's color palette.",
    ],
    h3: "Try a Color-Coordinated Stack",
    paraBeforeList: "For a neutral kitchen, look for:",
    list: ["Cream covers", "Beige and tan tones", "Soft green", "Muted blue", "Natural brown"],
    after: [
      "For a colorful kitchen, let the books introduce one accent shade that already appears somewhere else in the room.",
    ],
  },
  {
    n: "05",
    title: "Display a Large Decorative Bowl",
    photoKey: "bowl",
    paras: [
      "A large decorative bowl above the fridge creates a simple focal point without requiring much styling.",
      "Choose something with character. Handmade ceramics, wood, stoneware, or textured finishes can work beautifully.",
      "This approach works especially well when you have a relatively low ceiling or limited vertical space. A single oversized piece can look much more sophisticated than several small accessories.",
      "Ask yourself: what would look better here, five tiny objects or one beautiful object?",
      "Usually, the answer involves the latter.",
    ],
  },
  {
    n: "06",
    title: "Add a Small Plant Above the Fridge",
    photoKey: "plant",
    paras: [
      "Bring some greenery into the kitchen with a plant above the refrigerator.",
      "If your space gets enough suitable light, you can use a real plant. Otherwise, choose a convincing faux plant and save yourself the drama of trying to keep something alive in an awkward location.",
      "Trailing plants can look especially nice because their leaves soften the hard lines of the refrigerator.",
    ],
    h3: "Pick a Kitchen-Friendly Plant Style",
    paraBeforeList: "Consider:",
    list: ["Trailing greenery", "Small olive-style trees", "Faux eucalyptus", "Compact herbs where conditions allow", "Small leafy plants"],
    after: [
      "Keep the plant contained in a beautiful ceramic or woven planter.",
      "You want the greenery to soften the appliance, not turn the top of your refrigerator into a jungle expedition.",
    ],
  },
  {
    n: "07",
    title: "Use a Large Cutting Board for Warmth",
    photoKey: "cuttingBoard",
    paras: [
      "This is one of my favorite above fridge styling ideas for farmhouse and modern kitchens.",
      "Lean one or two oversized wooden cutting boards against the wall or backsplash, provided your setup allows you to position them securely without blocking required ventilation.",
      "The natural wood adds warmth to stainless steel, white cabinetry, gray kitchens, and neutral color schemes.",
    ],
    h3: "Mix Wood With Ceramics",
    paraBeforeList: "Try pairing a wooden board with:",
    list: ["A cream ceramic vase", "A small bowl", "A woven basket", "A neutral cookbook"],
    after: [
      "The combination creates that relaxed kitchen look without trying too hard.",
      "HGTV frequently recommends wood, baskets, serveware, and decorative objects as ways to introduce warmth and personality into kitchen spaces.",
    ],
  },
  {
    n: "08",
    title: "Style Above the Fridge With Vintage Kitchen Decor",
    photoKey: "vintage",
    paras: [
      "If you love character, use the space above your fridge to display vintage kitchen decor.",
      "Think old-looking tins, ceramic pitchers, antique-style scales, vintage bread boxes, or small decorative signs.",
      "The key involves choosing pieces that share a visual connection.",
    ],
    paraBeforeList: "For example, you could combine:",
    list: ["A vintage ceramic pitcher", "An old-style wooden board", "A small brass container"],
    after: [
      "Don't randomly throw every thrift-store treasure up there. Trust me, there's a fine line between collected and cluttered.",
    ],
  },
  {
    n: "09",
    title: "Add a Decorative Vase",
    photoKey: "vase",
    paras: [
      "A vase above the refrigerator can instantly give the area a more finished appearance.",
      "Choose a tall vase if you have vertical clearance. Select a shorter, wider vase when the space feels compressed.",
      "You don't even need fresh flowers. Dried branches, faux stems, eucalyptus, or simple greenery can provide enough visual interest.",
      "For a neutral kitchen, I love the combination of an off-white vase with warm wood and soft greenery. It creates contrast without introducing another competing color.",
    ],
  },
  {
    n: "10",
    title: "Create a Neutral Kitchen Display",
    photoKey: "neutral",
    paras: [
      "If you prefer a calm, sophisticated kitchen, create a neutral display above the fridge.",
      "Stick with three or four related tones rather than introducing lots of colors. Cream, beige, taupe, warm gray, and natural wood work beautifully together.",
      "This approach works particularly well when your refrigerator sits between white or neutral cabinets.",
    ],
    h3: "Build Your Neutral Palette",
    paraBeforeList: "Try combining:",
    list: ["Cream ceramic", "Natural wood", "Woven beige", "Warm white", "Soft greenery"],
    after: [
      "The goal isn't to make everything identical. Instead, let the materials create the variation.",
      "Texture becomes especially important when you use a limited color palette.",
    ],
  },
  {
    n: "11",
    title: "Turn the Space Into Hidden Storage",
    photoKey: "hiddenStorage",
    paras: [
      "Not every above fridge decorating idea needs to focus entirely on decoration.",
      "If your kitchen lacks storage, use the area for lightweight items you don't need constantly.",
    ],
    paraBeforeList: "A matching basket or attractive storage box can hide:",
    list: ["Seasonal kitchen linens", "Extra napkins", "Baking accessories", "Party supplies", "Reusable bags", "Lightweight serving pieces"],
    after: [
      "HGTV recommends using vertical and overlooked areas to improve kitchen organization, including baskets and other storage solutions.",
    ],
    h3after: "Make Storage Look Decorative",
    afterList: [
      "Here's the important part: choose storage containers that you actually like looking at.",
      "A matching pair of woven baskets can make storage look intentional. Random plastic containers can make the kitchen feel like you're running a small warehouse.",
    ],
  },
  {
    n: "12",
    title: "Create a Layered Farmhouse Display Above the Fridge",
    photoKey: "layered",
    paras: [
      "For a cozy farmhouse kitchen, combine several of the ideas above into one carefully edited arrangement.",
      "Start with a large wooden cutting board at the back. Add a woven basket or ceramic pitcher beside it. Finish with a small plant or neutral bowl.",
      "The important word here is layered.",
      "You want different heights, textures, and shapes, but you don't want chaos.",
    ],
    quote: { text: "The key is to find storage baskets with a similar color and texture to your cabinet and wall color.", cite: "HGTV, on basket storage in kitchen spaces" },
    after: [
      "That principle works beautifully above the refrigerator too. When the materials relate to the surrounding kitchen, the display feels connected instead of randomly placed.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const h3 = idea.h3 ? `<h3>${idea.h3}</h3>` : "";
  const paraBeforeList = idea.paraBeforeList ? `<p>${idea.paraBeforeList}</p>` : "";
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const h3after = idea.h3after ? `<h3>${idea.h3after}</h3>` : "";
  const afterList = idea.afterList ? idea.afterList.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const quote = idea.quote
    ? `<blockquote><p>&ldquo;${idea.quote.text}&rdquo;</p><cite>&mdash; ${idea.quote.cite}</cite></blockquote>`
    : "";
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${h3}
    ${paraBeforeList}
    ${list}
    ${after}
    ${h3after}
    ${afterList}
    ${quote}
    ${photo(idea.photoKey)}`;
}

const body = `
<p>That awkward little space above the fridge can make an otherwise beautiful kitchen look unfinished. The good news? You don't need a major renovation to fix it. With the right basket, tray, artwork, or a few carefully chosen kitchen pieces, you can turn that forgotten spot into a useful part of the room.</p>
<p>I've always found that the area above the refrigerator works best when you treat it like a small styling zone rather than a random storage shelf. And honestly, that mindset changes everything. Instead of tossing cereal boxes and appliances up there and hoping nobody notices, you can create a spot that actually looks intentional.</p>
<p>If you're wondering how to style above the fridge, start with one question: do you want the space to look decorative, functional, or a little of both?</p>
<p><em>This post also includes Amazon affiliate links. As an Amazon Associate, this site earns from qualifying purchases at no extra cost to you.</em></p>
${photo("hero")}

<h2>What Should You Put Above the Fridge?</h2>
<p>The best decor above the fridge depends on the size of the gap, the height of your refrigerator, and the overall style of your kitchen. A narrow space usually needs one or two simple pieces, while a larger area can handle baskets, artwork, cookbooks, or a decorative tray.</p>
<p>I like to keep the visual weight fairly light. The refrigerator already creates a large vertical block in the kitchen, so adding a mountain of stuff on top can make the entire area feel crowded.</p>
<p>Interior design also gives us plenty of reasons to use vertical space creatively. HGTV, for example, recommends baskets, mirrors, artwork, serveware, and other decorative elements for overlooked kitchen areas.</p>
<blockquote><p>&ldquo;Maximize the minimal counter space in your small kitchen.&rdquo;</p><cite>&mdash; HGTV, on using overlooked kitchen areas strategically rather than allowing them to become clutter zones</cite></blockquote>
<p>That idea applies perfectly here. You don't need to fill every inch. You simply need to make the space feel intentional.</p>

<h2>Can You Decorate Above a Refrigerator?</h2>
<p>Absolutely, but check your refrigerator's installation requirements before you start decorating.</p>
<p>Your refrigerator needs enough clearance for proper ventilation, and different models require different amounts of space. LG, for example, recommends maintaining clearance between the refrigerator and surrounding cabinetry and specifically lists a minimum top gap for one installation configuration. Whirlpool also notes that refrigerators need adequate ventilation and advises owners to follow their specific installation instructions.</p>
<p>So before placing a huge wooden box directly against the top of your appliance, grab the refrigerator manual. Glamorous? Not particularly. Necessary? Very.</p>
<blockquote><p>&ldquo;For best performance, do not install the refrigerator near an oven, radiator, or other heat source.&rdquo;</p><cite>&mdash; Whirlpool, on ventilation and placement as important factors for refrigerator performance</cite></blockquote>
<p>Once you've confirmed your clearance, you can start styling.</p>
${photo("canYouDecorate")}

<h2>12 Ways to Style Above the Fridge</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Make Above Fridge Decor Look Expensive</h2>
<p>You don't need expensive accessories to make this space look polished.</p>
<p>The biggest difference usually comes from editing. Pick fewer pieces, repeat materials from elsewhere in the kitchen, and give each object enough breathing room.</p>
<p>For example, if your kitchen already has brass hardware, introduce a small brass detail above the refrigerator. If you have oak floors, bring in a wooden board. If you have woven bar stools, repeat that texture with a basket.</p>
<p>Designers often use repetition to make different elements feel connected. You can do the same thing without hiring someone to charge you for explaining where to put a basket.</p>
<h3>Keep These Rules in Mind</h3>
<ul>
  <li>Repeat existing colors</li>
  <li>Mix two or three textures</li>
  <li>Vary object heights</li>
  <li>Avoid filling every inch</li>
  <li>Keep heavy objects away from areas that require ventilation</li>
  <li>Choose pieces that complement your kitchen style</li>
</ul>
<p>HGTV also recommends using decorative objects, serving pieces, baskets, and artwork to give overlooked kitchen areas more personality.</p>
${photo("lookExpensive")}

<h2>What Not to Put Above the Fridge</h2>
<p>Styling the space doesn't mean you should put absolutely anything there.</p>
<p>Avoid heavy objects that could fall when you open or close the refrigerator doors. Also avoid blocking ventilation areas or ignoring the clearance requirements for your specific appliance.</p>
<p>Don't use the top of the refrigerator as a dumping ground for things you don't know where to store.</p>
<p>If you haven't touched something in two years, placing it above the fridge won't magically turn it into useful decor.</p>
<h3>Avoid These Common Mistakes</h3>
<p><strong>Too many small objects:</strong> They create visual clutter.</p>
<p><strong>Random colors:</strong> They can make the kitchen feel disconnected.</p>
<p><strong>Oversized pieces:</strong> They can make the refrigerator look even more imposing.</p>
<p><strong>Dust collectors:</strong> Open decorative objects require regular cleaning.</p>
<p><strong>Blocked ventilation:</strong> Always follow your refrigerator manufacturer's installation requirements.</p>
${photo("whatNotToPut")}

<h2>How Do You Style a Small Space Above the Fridge?</h2>
<p>If you only have a few inches of usable space, don't force a complicated arrangement.</p>
<p>Use one shallow tray, a small decorative bowl, or a low-profile basket. You can also leave the area empty if the refrigerator already sits neatly within surrounding cabinetry.</p>
<p>Sometimes negative space creates better design than another accessory.</p>
<p>If your refrigerator has a cabinet directly above it, you can also focus on the cabinet itself. Choose a beautiful finish, hardware, or decorative treatment rather than trying to squeeze objects into a tiny gap.</p>
${photo("smallSpace")}

<h2>How Do You Style Above a Stainless Steel Refrigerator?</h2>
<p>Stainless steel refrigerators pair especially well with warm materials.</p>
<p>I would reach for wood, woven baskets, cream ceramics, or muted greenery before adding more shiny metal. The softer textures balance the cooler surface of stainless steel.</p>
<p>For a modern kitchen, try a simple wooden tray with one ceramic vase.</p>
<p>For a farmhouse kitchen, add a woven basket and oversized cutting board.</p>
<p>For a minimalist kitchen, skip the collection altogether and use one sculptural object.</p>
<p>The refrigerator already has plenty of visual presence. Your decor should support it, not compete with it.</p>
${photo("stainlessSteel")}

<h2>Final Thoughts on Styling Above the Fridge</h2>
<p>The space above your refrigerator doesn't need to become another clutter zone. With the right approach, you can turn it into useful storage, a decorative focal point, or a small extension of your kitchen's personality.</p>
<p>Try a woven basket if you want texture. Use cookbooks for color and personality. Add a wooden cutting board for warmth, a ceramic vase for softness, or a decorative tray to organize smaller pieces.</p>
<p>Most importantly, check your refrigerator's clearance requirements before decorating. Manufacturers such as LG and Whirlpool provide specific installation guidance, and your appliance's manual should always take priority.</p>
<p>So, if you've been staring at that awkward space above the fridge wondering what on earth you're supposed to do with it, start small. Pick one beautiful piece, step back, and see how the kitchen feels.</p>
<p>You might discover that the solution wasn't another cabinet after all. It was just one well-chosen basket and a little restraint.</p>
`;

module.exports = { body };
