// Body content for "16 Party Table Setup Ideas for Every Occasion".
// Source title said "17" but idea 12 was genuinely missing from the
// source's own numbering (jumps from 11 to 13) — 16 real ideas exist.
// Photos carried over from the source article. Ideas "Kid Friendly,"
// "Outdoor," "Budget Friendly" and "Last Minute" have no photo in the
// source; the other 12 do. Condensed a padded 4-part intro (FAQ-style)
// down to 1.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CGHCLTXZ", title: "GEHE 3 Tier Acacia Wood Serving Tray Stand, Foldable Dessert Table Display", w: 1438, h: 1077 },
    { asin: "B088QZ56RS", title: "DELLING Large Porcelain Serving Platter Set of 3, 16, 14 and 12 Inch", w: 988, h: 737 },
  ],
  intro: [
    { asin: "B0CBQ1H1BW", title: "Vitalizart Beige Slub Cotton Linen Table Runner, 14 x 72 Inch", w: 1293, h: 1500 },
    { asin: "B096WZS72K", title: "Cerpourt 2 Sets Acrylic Display Risers, 3, 4 and 5 Inch, Clear", w: 1464, h: 1439 },
  ],
  idea1: [
    { asin: "B0BJZP3FJW", title: "Fitable Nature Faux Linen Tablecloths, Rectangle, 60 x 84 Inch, 2 Pack", w: 1377, h: 1500 },
    { asin: "B01LZJNF5N", title: "COTTON CRAFT Jute Braided Table Runner, 13 x 36 Inch, Natural", w: 1416, h: 1500 },
  ],
  idea2: [
    { asin: "B0GYQKJZP7", title: "Kassel Ceramic Serving Platter Set, 16, 14 and 12 Inch, White Porcelain", w: 1500, h: 1400 },
    { asin: "B0F5HYMZMT", title: "Gibson Home Extra Large White Porcelain Serving Bowls, Set of 2, 100 oz", w: 1392, h: 1500 },
  ],
  idea3: [
    { asin: "B0DC1T1ZSB", title: "Alpha Living 6 Pack Disposable Chafing Dish Buffet Set with Half Size Pans", w: 1500, h: 1432 },
    { asin: "B0741XXT8W", title: "Mind Reader Multi-Purpose Storage Caddy with Handle, 4 Compartments", w: 1500, h: 1374 },
  ],
  idea4: [
    { asin: "B0CNSNWBCX", title: "NWK 11-Piece Dessert Table Set, Cupcake Stands, Trays and Table Cloth, White", w: 1500, h: 1453 },
    { asin: "B0CRHGBXP4", title: "Over The Table Rod Stand with Clamps, White Table Arch Banner Stand", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0B7HKMR3K", title: "Reusable Plastic Serving Trays, 16 x 11 Inch, 4 Pack, White", w: 1500, h: 1451 },
    { asin: "B081KR6M95", title: "Striped Cotton Linen Blend Dinner Cloth Napkins, Set of 12", w: 1500, h: 1207 },
  ],
  idea6: [
    { asin: "B07JKDZ2CB", title: "Obstal Rectangle Table Cloth, Navy Blue, 60 x 84 Inch", w: 1418, h: 1497 },
    { asin: "B0BX6T2GTD", title: "Macrame Boho Table Runner with Tassels, Cream Beige, 12 x 71 Inch", w: 1067, h: 1067 },
  ],
  idea7: [
    { asin: "B08X9Z4FPC", title: "Romanstile Jacquard Rectangle Tablecloth, 60 x 120 Inch, White", w: 1500, h: 1500 },
    { asin: "B09NTHDNVZ", title: "French Gold Taper Candle Holders, Set of 6, 3 Sizes", w: 1300, h: 1291 },
  ],
  idea8: [
    { asin: "B09C89L7JP", title: "Babebay Disposable Stick-On Placemats for Kids, 40 Pack, Animal Alphabet", w: 1500, h: 1500 },
    { asin: "B0DG53RZWY", title: "Reusable Kids Placemats, 6 Pack, Non-Slip and Washable, Educational Prints", w: 1500, h: 1500 },
  ],
  idea9: [
    { asin: "B09SLQWH3R", title: "Stainless Steel Tablecloth Clips, 12 Pack", w: 1500, h: 1465 },
    { asin: "B0BP27JWQ5", title: "Pop-Up Mesh Food Covers, 17 Inch, 4 Pack", w: 1500, h: 1488 },
  ],
  idea10: [
    { asin: "B0C2PSHMVR", title: "Fall Table Centerpiece, 27.5 Inch, Artificial Pumpkins, Berries and Maple Leaves", w: 1500, h: 878 },
    { asin: "B0H36WHWKT", title: "Artificial Eucalyptus Garland, 8 Pack, Silk Silver Dollar Leaf Vines", w: 1437, h: 1500 },
  ],
  idea11: [
    { asin: "B0FTGGJLZ6", title: "Glass Mason Jar Bud Vases for Centerpieces, 12 Pack", w: 1500, h: 1499 },
    { asin: "B08T5JCXYP", title: "Wood Serving Tray Set with Handles, 7 Piece Nesting Rectangular Trays", w: 1500, h: 1463 },
  ],
  idea12: [
    { asin: "B0H8S9NKHJ", title: "Porcelain Appetizer Platter, 4 Compartment, 3 Pack, White", w: 1500, h: 1499 },
    { asin: "B0GW9GVYPW", title: "Wooden 4 Tier Cupcake Tower Stand, Holds 50 Cupcakes", w: 1208, h: 1500 },
  ],
  idea13: [
    { asin: "B0DSL2C6BT", title: "HBlife 3 Tier Ceramic Fruit Bowl Stand for Kitchen Counter", w: 1022, h: 1500 },
    { asin: "B0DFVZQDPZ", title: "Glass Bud Vases for Centerpieces, Set of 36, Small Flower Vases", w: 1333, h: 1500 },
  ],
  idea14: [
    { asin: "B0FBW11DFK", title: "VINGLI 6 Ft Narrow Folding Table, Tabletop Folds in Half", w: 1500, h: 1398 },
    { asin: "B0CJ68XRFF", title: "Goaste 3 Tier Round Plastic Cupcake Stand Towers, 3 Pack", w: 1500, h: 1484 },
  ],
  idea15: [
    { asin: "B00MTF6ZVC", title: "EMART 10 x 7 Ft Adjustable Backdrop Stand for Party Photos", w: 1500, h: 1301 },
    { asin: "B0C7H6NP7S", title: "btfarm 30 Pack Battery Operated Fairy Lights, Twinkle Lights with 3 Modes", w: 1487, h: 1500 },
  ],
  idea16: [
    { asin: "B07HR2MKXN", title: "WEALUXE White Tablecloths for 6 Foot Rectangle Tables, 60 x 102 Inch, 2 Pack", w: 1438, h: 1500 },
    { asin: "B0C6FBWRQB", title: "Samhita Mango Wood Decorative Bowl for Table Centerpiece", w: 1116, h: 895 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "party-table-setup-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "party-table-setup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "party-table-setup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "The Classic Layered Setup",
    paras: [
      "This setup rarely fails, and it's the move for a polished look without overthinking the whole table.",
      "A neutral tablecloth, a runner layered on top for contrast, and trays or platters stacked over that build real depth with very little effort.",
      "It adjusts easily for formal or casual events just by shifting colors and textures, which makes it a strong default for a birthday, an engagement party, or a holiday dinner.",
    ],
    photo: pinPhoto("classic-layered.jpg", "Classic layered party table setup with a tablecloth, runner and stacked trays", 662, 1024, "https://www.pinterest.com/pin/685180530839791566/", "Classic Layered Party Table", "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Minimal Setup for Small Gatherings",
    paras: [
      "Not every party needs drama. For a smaller gathering, less genuinely does more.",
      "One tight color palette, clean serving dishes, and real negative space are the whole formula &mdash; avoiding the urge to fill every inch is what makes the food itself stand out.",
      "Guests tend to relax more around a minimal table, and cleanup stays noticeably easier afterward, which is its own kind of reward.",
    ],
    photo: pinPhoto("minimal-setup.jpg", "Minimal party table setup with a tight color palette and clean serving dishes", 736, 981, "https://www.pinterest.com/pin/862931978644412418/", "Minimal Party Table Setup", "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Buffet Style That Actually Flows",
    paras: [
      "A buffet table causes real chaos when guests have to guess where to start. Designing the flow on purpose solves that before it happens.",
      "Plates and napkins first, then main dishes, sides, sauces and toppings, with cutlery saved for the very end, keeps the line moving instead of creating awkward reaching.",
      "Leaving genuine space at the end of the table matters too &mdash; guests need somewhere to land before carrying a full plate away.",
    ],
    photo: pinPhoto("buffet-style.jpg", "Buffet style party table setup organized for smooth guest flow", 736, 920, "https://www.pinterest.com/pin/704743041728943410/", "Buffet Style Party Table", "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "A Dessert Table That Steals the Spotlight",
    paras: [
      "Dessert tables earn their own moment &mdash; they often get photographed more than the actual guest of honor.",
      "A statement backdrop, the cake as the visual anchor, and smaller desserts grouped in odd numbers &mdash; three or five per cluster &mdash; build real visual interest.",
      "Mixing materials like glass, wood and ceramic across the table makes the whole spread look genuinely styled instead of just stacked together.",
    ],
    photo: pinPhoto("dessert-table.jpg", "Dessert table setup with a statement backdrop and grouped desserts", 482, 640, "https://www.pinterest.com/pin/463026405412823716/", "Dessert Table Setup", "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Casual Setup for Laid-Back Events",
    paras: [
      "Not every gathering needs real structure. A casual table reads as warm and welcoming precisely because it isn't overly composed.",
      "Shared platters, paper or linen napkins, and low centerpieces that don't block reach keep everything genuinely accessible.",
      "Guests grab food without needing to ask first, which matters more for the overall mood than people tend to give it credit for &mdash; a strong fit for game nights and backyard parties.",
    ],
    photo: photo("casual-setup.jpg", "Casual party table setup with shared platters and low centerpieces", 576, 1024, "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Themed, Without Going Overboard",
    paras: [
      "Themes scare a lot of hosts, and for good reason &mdash; nobody wants a table that looks like a costume aisle exploded.",
      "One main theme color, one supporting texture, and a few subtle themed accents keep the concept readable without overwhelming the table.",
      "Letting the food's natural colors do some of the thematic work beats piling on plastic decor every time &mdash; balance is what keeps a themed table from feeling loud.",
    ],
    photo: photo("themed-setup.jpg", "Subtly themed party table setup with one main color and supporting texture", 736, 981, "idea6"),
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Elegant Setup for Formal Occasions",
    paras: [
      "A formal table needs real confidence &mdash; treated like an outfit, one genuine statement piece beats ten small accessories scattered around.",
      "Crisp linens, neutral serving ware, and a single bold centerpiece form the foundation, with candles doing a lot of the remaining mood-setting work.",
      "This setup is built for anniversaries, milestone birthdays and dinner parties &mdash; the kind of occasion where guests should feel noticeably special the moment they sit down.",
    ],
    photo: pinPhoto("elegant-formal.jpg", "Elegant formal party table setup with crisp linens and a bold centerpiece", 576, 1024, "https://www.pinterest.com/pin/1618549864235168/", "Elegant Formal Party Table", "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Kid-Friendly, Parent-Approved",
    paras: [
      "A kids' table needs to balance fun and function, designed around actual survival rather than just appearances.",
      "Cute disposable table covers, individually portioned snacks, and an activity placemat keep kids occupied while parents get a real break.",
      "One hard-earned lesson: never place drinks anywhere near the crafts. That mistake only needs to happen once.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Outdoor Setup That Survives Real Life",
    paras: [
      "Outdoor parties sound dreamy until wind, bugs and uneven ground show up uninvited. Designing with that reality in mind from the start avoids most of the stress.",
      "Weighted tablecloths or clips, low centerpieces that won't tip over, and covered food trays handle the practical side before it becomes a problem.",
      "Nature already provides plenty of ambiance on its own &mdash; the setup just needs to stay functional enough not to fight against it.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Seasonal, Without Tipping Into Tacky",
    paras: [
      "A seasonal table feels genuinely special when it stays subtle, rather than turning into a full holiday store display.",
      "Seasonal colors, natural textures, and one real seasonal focal point &mdash; pumpkins in fall, greenery in winter, florals in spring, citrus in summer &mdash; carry the theme quietly.",
      "A table that hints at the season instead of shouting it tends to earn more appreciation than one piled with every available decoration.",
    ],
    photo: pinPhoto("seasonal-setup.jpg", "Seasonal party table setup with natural textures and a subtle focal point", 736, 981, "https://www.pinterest.com/pin/148267012728537871/", "Seasonal Party Table Setup", "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Budget-Friendly, Looks Expensive",
    paras: [
      "Some of the most effective party table setups cost almost nothing to put together.",
      "Reusing serving trays, neutral linens already on hand, and glass jars as simple decor stretches a tight budget considerably further.",
      "Spending real money on one standout item, rather than spreading it across ten small purchases, is what actually reads as intentional &mdash; no guest ever asks what the table cost, they just notice the effort.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Sweet and Savory Combo",
    paras: [
      "Mixing sweet and savory on a single table works especially well when space is genuinely tight.",
      "Visually dividing the table &mdash; sweet on one side, savory on the other, neutral items bridging the middle &mdash; keeps the combination feeling intentional rather than chaotic.",
      "Guests appreciate having real options, and they tend to linger and snack longer as a result, which is really the whole point of a party table.",
    ],
    photo: pinPhoto("sweet-savory-combo.jpg", "Sweet and savory combo party table setup divided visually down the middle", 585, 1024, "https://www.pinterest.com/pin/1093178509565393956/", "Sweet and Savory Party Table", "idea12"),
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Brunch, Effortless by Design",
    paras: [
      "A brunch table should feel light and genuinely inviting &mdash; a heavy, overly structured setup works against the whole mood of the meal.",
      "Light linens, a fresh fruit display, and a few simple florals are enough to carry the table without competing with the actual food.",
      "Letting the food's own colors shine matters here too &mdash; pancakes and fresh fruit deserve just as much visual attention as any centerpiece.",
    ],
    photo: photo("brunch-setup.jpg", "Effortless brunch party table setup with light linens and fresh fruit", 360, 640, "idea13"),
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Small Space, Maximum Impact",
    paras: [
      "A small space genuinely challenges creativity, but it doesn't have to limit the final result.",
      "Vertical displays, a wall backdrop, and a narrower table all stretch a tight footprint considerably further than expected.",
      "Avoiding wide platters that eat up precious space matters more here than almost anywhere else &mdash; smart layout consistently beats square footage.",
    ],
    photo: photo("small-space-setup.jpg", "Small space party table setup using vertical displays and narrow tables", 576, 1024, "idea14"),
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Photo-Ready for Social Media Moments",
    paras: [
      "People photograph food before eating it now, whether a host plans for that or not &mdash; it's worth designing with that in mind.",
      "Natural lighting, a clean background, and real color contrast make the biggest difference in how a table actually photographs.",
      "Clearing clutter before guests arrive matters most here. If the table looks good from one clean angle, guests will reliably find it themselves.",
    ],
    photo: pinPhoto("photo-ready.jpg", "Photo-ready party table setup with natural lighting and a clean background", 736, 981, "https://www.pinterest.com/pin/757519599853830692/", "Photo-Ready Party Table", "idea15"),
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Last-Minute, Still Looks Planned",
    paras: [
      "Life happens, and sometimes a table gets decorated in genuine panic mode with very little lead time.",
      "One clean tablecloth, serving dishes grouped sensibly together, and a single centerpiece &mdash; that's the entire strategy, and it's meant to stop there.",
      "Overcorrecting is what actually ruins a last-minute table. Keeping it simple is what saves it every time.",
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
<p>A party table does more work than the decorations scattered around it. It sets the mood the second guests walk in, guides how people actually move through the food, and quietly signals how much thought went into the whole event.</p>
<p>Getting it right doesn't require a massive table or an unlimited budget. It requires the right setup for the actual occasion &mdash; a casual backyard hang doesn't need the same table as a milestone dinner party, and forcing one approach onto every event is usually where things go wrong.</p>
${photo("hero.jpg", "Beautifully styled party table setup with layered serving pieces and decor", 1600, 1068, "hero")}

<h2>What a Party Table Actually Needs to Get Right</h2>
<p>Size matters more than it seems &mdash; too small and the food feels cramped, too large and the table reads as empty no matter how much gets placed on it. Negative space deserves real respect too; a table filled to every edge reads as cluttered rather than abundant, while a little breathing room lets the actual food stand out.</p>
${pinPhoto("intro-eye-catching.jpg", "Eye-catching party table setup styled with intention", 683, 1024, "https://www.pinterest.com/pin/134896951334314414/", "Eye-Catching Party Table Setup", "intro")}

<h2>16 Party Table Setup Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A party table isn't just a surface to put food on &mdash; it's doing real work, setting the tone for the whole event before a single guest sits down to eat.</p>
<p>Pick the setup that actually matches the occasion, rather than reaching for whatever looks best online. The table that fits the moment will always read as more intentional than the one chasing a trend.</p>
`;

module.exports = { body };
