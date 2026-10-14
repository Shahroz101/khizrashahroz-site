// Body content for "14 Mother's Day Grazing Board Ideas Worth the
// Effort". Photos carried over from the source article; all 14 ideas
// have a photo in the source, so none were dropped. The source's
// fabricated celebrity-chef "quotes" scattered through the text were
// cut entirely — not part of this site's voice. Condensed 3 padded
// intro sections and a 4-step styling walkthrough down to one short
// styling section with no photo, since the source's remaining photos
// weren't tied to a specific idea.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B07S4D3LGF", title: "SMIRLY Charcuterie Boards Set, Large Bamboo Cheese Board with Accessories", w: 1500, h: 1344 },
    { asin: "B0D53YPCWC", title: "LE TAUCI Sauce Cups, 2 Oz, Set of 6, White Ramekins", w: 1500, h: 1052 },
  ],
  intro: [
    { asin: "B0F5B3LPSZ", title: "Wooden Tiered Risers Display Stands, 2 Set, Stackable for Serving and Events", w: 1500, h: 1400 },
    { asin: "B09YV7XRT3", title: "11 Inch Round Marble Cheese Cutting Board, White", w: 1472, h: 674 },
  ],
  idea1: [
    { asin: "B09TJZH7KY", title: "MALACASA Mini Ceramic Ramekins, 2 Oz, Set of 24, White Custard Cups", w: 1500, h: 1480 },
    { asin: "B0CZRNKWZ8", title: "TIDITA 30 Inch Large Acacia Charcuterie Board with Metal Handles", w: 1500, h: 1288 },
  ],
  idea2: [
    { asin: "B0CC7Z6YX7", title: "Rose Wine Glasses, Set of 2, Creative Rose-Shaped Wine and Champagne Goblets", w: 1500, h: 1411 },
    { asin: "B0FD1QHC9H", title: "Paris Hilton Ceramic Serving Bowl, Stoneware with Heart Detailing, Pink", w: 1500, h: 1035 },
  ],
  idea3: [
    { asin: "B0BGLGL2X5", title: "Selamica Ceramic Dipping Bowls, 2.7 Oz, Set of 6, Gradient Blue", w: 1343, h: 1375 },
    { asin: "B001GI7QZC", title: "Naturally Med Olive Wood Cheese Board, 14 Inch", w: 1407, h: 771 },
  ],
  idea4: [
    { asin: "B0GX1S5RM5", title: "Dried Edible Flowers for Cocktails and Cake Decoration, 110 Pcs, Colorful", w: 1500, h: 1500 },
    { asin: "B0GD6LM4CZ", title: "Melamine Serving Trays, 4 Pack, Rectangle, White", w: 1424, h: 1106 },
  ],
  idea5: [
    { asin: "B0893C6RCK", title: "Cheese Knives Set, 6 Piece, Stainless Steel with Acacia Wood Handles", w: 1424, h: 1210 },
    { asin: "B0D1495RTJ", title: "WLWNWFT 16 x 12 Inch Large Slate Cheese Board with Chalk Markers", w: 977, h: 621 },
  ],
  idea6: [
    { asin: "B0DX1JHW9J", title: "Scalloped Edge Rectangular Wicker Serving Tray with Handles", w: 1500, h: 962 },
    { asin: "B0CPF64M2W", title: "Solid Acacia Wood Serving Trays, 2 Pcs, 16 x 12 Inch, Rectangular Platters", w: 1196, h: 1500 },
  ],
  idea7: [
    { asin: "B088K4X3YJ", title: "Bamboo Bed Tray Table with Foldable Legs, Breakfast Tray for Sofa and Bed", w: 1500, h: 1414 },
    { asin: "B0DQ16M5H3", title: "White Porcelain Teapot, 400ml, 14 Oz, Small Ceramic Tea Pot", w: 1427, h: 1133 },
  ],
  idea8: [
    { asin: "B0HCNCKFPB", title: "3-Tier Pizza Stand with Ceramic Plates and Spatulas", w: 1500, h: 1432 },
    { asin: "B01FSID5C8", title: "Libbey Selene Glass Cake Stand with Dome Lid, Footed Dessert Dish", w: 1381, h: 1500 },
  ],
  idea9: [
    { asin: "B08SBZW6HX", title: "PLOYMONO Beige Cloth Napkins, 8 Pack, 17 x 17 Inch, Washable", w: 1500, h: 1439 },
    { asin: "B0F243TW67", title: "getstar Nesting Ceramic Stoneware Serving Bowls, Set of 4, 12 to 64 Oz", w: 1438, h: 1500 },
  ],
  idea10: [
    { asin: "B0B785V2NF", title: "Kusini Electric Chocolate Fondue Pot Set with Temperature Control", w: 1500, h: 1494 },
    { asin: "B0D1867W43", title: "Lindt Gourmet Assorted Chocolate Truffles Gift Box, 2.8 Oz", w: 1486, h: 1500 },
  ],
  idea11: [
    { asin: "B0BGPHJJXJ", title: "Bamboo Charcuterie Board and Knife Set, Wine, Meat and Cheese Platter", w: 1500, h: 1100 },
    { asin: "B0DYJH7JWC", title: "Small Glass Bowls, 3.5 Inch, 4 Oz, Stackable Mini Prep and Condiment Bowls", w: 1367, h: 1472 },
  ],
  idea12: [
    { asin: "B0FPWF2YFY", title: "Floral Porcelain Tea Cup and Saucer Set of 6, 6 Oz, Pink Rose", w: 1500, h: 1292 },
    { asin: "B0HDN3932H", title: "Vintage Floral Silver Serving Tray Set, 10 Pcs, with 3-Tier Tray, Rectangle", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B081D83F2Y", title: "Plasticpro 6-Section Round Plastic Serving Platters, Clear, Pack of 2", w: 1500, h: 1437 },
    { asin: "B0GV2WD4MM", title: "Divided Serving Tray with Airtight Lid, 6 Compartments, White", w: 1500, h: 934 },
  ],
  idea14: [
    { asin: "B0DXDKHQF4", title: "Personalized Charcuterie Board Set, Custom Engraved Marble and Wood with Knife Set", w: 1200, h: 1200 },
    { asin: "B07HRD8LRM", title: "Slate Cheese Markers Set, 6 Labels, 2 Chalk Markers and Storage Box", w: 1500, h: 1068 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "mothers-day-grazing-board-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "mothers-day-grazing-board-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "mothers-day-grazing-board-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "The Brunch-Inspired Board",
    paras: [
      "If Mom loves brunch, give her the whole spread in grazing form instead of a single plate. Mini pastries, fruit, soft cheese and a few savory bites cover every craving at once without anyone having to choose.",
      "The trick to keeping it from feeling heavy is abundance without density &mdash; lots of small things spread out, rather than a few large dishes crowding the board.",
      "Small ramekins do more for the presentation than people expect. A little jam, honey or whipped butter in its own tiny bowl instantly reads as more put-together than the same thing squeezed onto the board directly.",
    ],
    photo: pinPhoto("brunch-inspired.jpg", "Brunch-inspired grazing board with mini pastries, fruit, soft cheese and small ramekins of jam and honey", 574, 1024, "https://www.pinterest.com/pin/71705819062127114/", "Brunch-Inspired Mother's Day Grazing Board", "idea1"),
  },
  {
    n: "02",
    title: "The Rosé-Inspired Board",
    paras: [
      "This one leans effortlessly chic &mdash; soft blush tones, light and feminine flavors, built around the same color story a glass of rosé already lives in.",
      "Keeping the palette tight to soft pinks, ivory and light reds is what makes it feel curated instead of just pink for the sake of pink. Strawberries, pink-tinged cheeses and pale crackers all fit naturally.",
      "Pour a chilled glass alongside it and the whole spread does double duty as both food and centerpiece, especially for an afternoon gathering with nowhere to rush off to.",
    ],
    photo: pinPhoto("rose-inspired.jpg", "Rosé-inspired grazing board in soft blush, pink and ivory tones with strawberries and pale crackers", 574, 1024, "https://www.pinterest.com/pin/3870349675507592/", "Rosé-Inspired Mother's Day Grazing Board", "idea2"),
  },
  {
    n: "03",
    title: "The Mediterranean Board",
    paras: [
      "This is the board that reliably impresses without much extra effort &mdash; hummus, olives, feta, roasted vegetables and warm pita cover a lot of ground in one spread.",
      "Layering the dips into small bowls scattered across the board gives it real structure, rather than letting everything blur together in one flat layer.",
      "The flavors land as vibrant and healthy but still genuinely indulgent, which is a balance that works especially well for a Mother's Day table.",
    ],
    photo: pinPhoto("mediterranean.jpg", "Mediterranean grazing board with hummus, olives, feta, roasted vegetables and warm pita bread", 736, 736, "https://www.pinterest.com/pin/26036504092471726/", "Mediterranean Mother's Day Grazing Board", "idea3"),
  },
  {
    n: "04",
    title: "The Classic Floral Board",
    paras: [
      "This is the board that screams spring the second it hits the table &mdash; soft pinks and whites, delicate cheeses, berries, and edible flowers tucked in throughout.",
      "Arranging a few real or edible flowers around the edges frames the whole board and does more to elevate it than almost anything placed in the center.",
      "The soft, romantic palette pairs naturally with sweet and creamy flavors, which makes this one equally at home at a brunch table or an afternoon tea setup.",
    ],
    photo: pinPhoto("classic-floral.jpg", "Floral-themed grazing board with soft pink and white cheeses, berries and edible flowers arranged around the edges", 683, 1024, "https://www.pinterest.com/pin/8373949303008556/", "Classic Floral Mother's Day Grazing Board", "idea4"),
  },
  {
    n: "05",
    title: "The Luxe Cheese Lover's Board",
    paras: [
      "For a mom who genuinely loves cheese, this one skips the extras and goes deep instead &mdash; four or five well-chosen cheeses, balanced out with honey, nuts and a few dried fruits.",
      "Pre-slicing at least one wheel removes the hesitation that stops people from being the first to cut into an untouched cheese &mdash; once one is already open, the whole board gets used.",
      "This board is built around depth of flavor rather than sheer volume, which makes it feel considered instead of just generously stocked.",
    ],
    photo: pinPhoto("cheese-lovers.jpg", "Luxe cheese board with four or five cheese varieties, honey, nuts and dried fruit", 683, 1024, "https://www.pinterest.com/pin/8514686791782145/", "Luxe Cheese Lover's Mother's Day Grazing Board", "idea5"),
  },
  {
    n: "06",
    title: "The Garden Party Board",
    paras: [
      "Picture hosting outside with soft music playing in the background &mdash; that's the exact feeling this board is built around.",
      "Fresh herbs, bright produce, light cheeses and edible flowers keep everything feeling crisp and seasonal rather than heavy.",
      "It's an especially strong fit for an outdoor Mother's Day celebration, where the food should feel as relaxed and unhurried as the setting itself.",
    ],
    photo: pinPhoto("garden-party.jpg", "Garden party grazing board with fresh herbs, bright produce, light cheeses and edible flowers", 819, 1024, "https://www.pinterest.com/pin/10273905395508175/", "Garden Party Mother's Day Grazing Board", "idea6"),
  },
  {
    n: "07",
    title: "The Breakfast-in-Bed Board",
    paras: [
      "For maximum emotional impact, this one gets served on a tray, straight to bed, scaled down to fit without losing any of its abundance.",
      "Mini pastries, fruit, a small pot of coffee or tea, and a couple of soft cheeses keep it compact but still generous enough to feel like an occasion.",
      "The surprise of it arriving unannounced is most of the appeal &mdash; the tray itself is almost as meaningful as what's actually on it.",
    ],
    photo: pinPhoto("breakfast-in-bed.jpg", "Breakfast-in-bed grazing board on a tray with mini pastries, fruit, cheese and a small pot of tea", 404, 539, "https://www.pinterest.com/pin/196962183695026623/", "Breakfast-in-Bed Mother's Day Grazing Board", "idea7"),
  },
  {
    n: "08",
    title: "The High Tea Dessert Board",
    paras: [
      "For a mom who loves refined sweets over anything savory, this board wins every time &mdash; mini tarts, macarons, scones and delicate cookies arranged with real intention.",
      "Layering the desserts at varying heights, using a cake stand if one's available, adds a sense of drama that a flat spread can't match.",
      "It fits a mid-afternoon celebration especially well, paired with tea or a light sparkling drink instead of a full meal.",
    ],
    photo: pinPhoto("high-tea-dessert.jpg", "High tea dessert grazing board with mini tarts, macarons and scones layered at varying heights on a cake stand", 574, 1024, "https://www.pinterest.com/pin/1829656095361978/", "High Tea Dessert Mother's Day Grazing Board", "idea8"),
  },
  {
    n: "09",
    title: "The Soft Neutrals Board",
    paras: [
      "For a mom who gravitates toward neutral decor, matching the food palette to that same aesthetic makes the whole board feel like an extension of her taste.",
      "Sticking to creams, tans and soft greens &mdash; pale cheeses, almonds, light crackers, a few sprigs of herb &mdash; keeps the result calm and genuinely curated.",
      "Simplicity ends up reading as more expensive than abundance here, which is a quieter effect than most of the other boards on this list but no less intentional.",
    ],
    photo: pinPhoto("soft-neutrals.jpg", "Grazing board styled in soft neutral tones of cream, tan and sage with pale cheeses and almonds", 1024, 999, "https://www.pinterest.com/pin/1970393582773990/", "Soft Neutrals Mother's Day Grazing Board", "idea9"),
  },
  {
    n: "10",
    title: "The Chocolate and Fruit Dessert Board",
    paras: [
      "Not every Mother's Day board needs meat and cheese on it at all &mdash; sometimes dessert is exactly the point.",
      "Rich chocolate pieces, truffles and a drizzle sit alongside fresh berries and sliced fruit, which keeps the whole thing from tipping into overly indulgent territory.",
      "The fruit does more work than it gets credit for &mdash; it lightens the richness of the chocolate just enough to keep every bite interesting instead of heavy.",
    ],
    photo: pinPhoto("chocolate-fruit.jpg", "Chocolate and fruit dessert grazing board with truffles, chocolate pieces, berries and sliced fruit", 1024, 1024, "https://www.pinterest.com/pin/168814686030223717/", "Chocolate and Fruit Dessert Grazing Board", "idea10"),
  },
  {
    n: "11",
    title: "The Elegant Savory Board",
    paras: [
      "For a mom who'd rather skip sweets entirely, this board leans fully into savory richness &mdash; cured meats, bold cheeses, olives and pickled vegetables.",
      "The result feels bold and confident rather than delicate, and it pairs especially well with a sparkling drink instead of anything sweet.",
      "Savory spreads tend to slow a gathering down in a good way &mdash; people nibble more deliberately, which naturally stretches out the conversation around the table.",
    ],
    photo: pinPhoto("savory-board.jpg", "Elegant savory grazing board with cured meats, bold cheeses, olives and pickled vegetables", 575, 1024, "https://www.pinterest.com/pin/848224911110402270/", "Elegant Savory Mother's Day Grazing Board", "idea11"),
  },
  {
    n: "12",
    title: "The Tea Time Board",
    paras: [
      "This one leans soft and a little vintage &mdash; delicate cookies, finger sandwiches, fresh berries and a few light pastries arranged without crowding.",
      "Pulling out delicate serving dishes, even mismatched china, adds to the feeling instead of taking away from it. The imperfection reads as collected, not sloppy.",
      "It pairs naturally with tea or a light sparkling drink, and works especially well for a smaller, quieter celebration rather than a big crowd.",
    ],
    photo: pinPhoto("tea-time.jpg", "Tea time grazing board with delicate cookies, finger sandwiches and fresh berries on mismatched china", 683, 1024, "https://www.pinterest.com/pin/33847434696121784/", "Tea Time Mother's Day Grazing Board", "idea12"),
  },
  {
    n: "13",
    title: "The Healthy and Fresh Board",
    paras: [
      "Some moms genuinely prefer lighter options, and this board delivers that without sacrificing any of the visual appeal the rest of the list has.",
      "Fresh fruit, raw vegetables, nuts and lighter cheeses, grouped by color rather than scattered randomly, keep the whole thing looking as vibrant as it tastes.",
      "Healthy doesn't have to mean boring here &mdash; it just means a little more intentional about what goes on the board in the first place.",
    ],
    photo: pinPhoto("healthy-fresh.jpg", "Healthy and fresh grazing board with raw vegetables, fruit and nuts grouped by color", 572, 1024, "https://www.pinterest.com/pin/348747564918528900/", "Healthy and Fresh Mother's Day Grazing Board", "idea13"),
  },
  {
    n: "14",
    title: "The Personalized Board",
    paras: [
      "This is the one worth building last, and arguably the one that matters most &mdash; instead of following any trend, build the board entirely around what Mom actually likes.",
      "Loves dark chocolate? Add more of it. Avoids dairy? Lean into fruit and nuts instead. Has a nostalgic childhood favorite? That earns a spot on the board too, trends aside.",
      "Personalization is what turns a pretty board into a meaningful one &mdash; the ingredients matter less than the fact that someone paid attention to what she'd actually want.",
    ],
    photo: pinPhoto("personalized.jpg", "Personalized grazing board built around a mom's specific favorite foods and nostalgic treats", 683, 1024, "https://www.pinterest.com/pin/1052012794318577253/", "Personalized Mother's Day Grazing Board", "idea14"),
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
<p>A good grazing board feels different from a regular meal. Instead of individual plates, everyone gathers around one spread, which slows people down and turns the meal into something closer to a conversation than a routine.</p>
<p>That's exactly the effect worth chasing for Mother's Day &mdash; something that looks thoughtful and feels intentional, built from ingredients that don't need to be fancy to come together beautifully.</p>
${photo("hero.jpg", "Elegant Mother's Day grazing board with cheese, fruit, flowers and small bowls arranged with intention", 1312, 736, "hero")}

<h2>What Actually Makes a Board Feel Elegant</h2>
<p>Scattering cheese and fruit across a board doesn't automatically make it elegant &mdash; it needs real structure. A tight color story keeps the whole thing looking styled instead of thrown together: soft pinks and whites read romantic, neutrals with greenery read classic, pastels read spring-ready.</p>
<p>Height matters just as much. A flat board reads as boring no matter how good the ingredients are, while stacked crackers, small risers, or a cake stand add the dimension that makes a spread look considered. And every elegant board needs balance &mdash; something creamy, something crunchy, something sweet, something savory. Skip one of those and the board starts to feel incomplete, no matter how much food is actually on it.</p>
${pinPhoto("intro-special.jpg", "Mother's Day grazing board styled with a tight color story, varied heights and balanced sweet and savory elements", 683, 1024, "https://www.pinterest.com/pin/1052012794318582702/", "Elegant Mother's Day Grazing Board Styling", "intro")}

<h2>14 Mother's Day Grazing Board Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>A Few Styling Basics That Make Any Board Look Better</h2>
<p>Whichever board gets built, the assembly order matters more than people expect. Small bowls go down first &mdash; for dips, olives, nuts &mdash; since they create structure everything else gets built around. Larger cheese wedges go in next, spread into different corners rather than crowded into the center.</p>
<p>Meat should never lie flat. Folding, rolling, or arranging it into small rosettes adds texture that a flat slice just can't. From there, small fillers like berries, nuts or crackers go into every visible gap, since empty space is what makes a board read as unfinished. None of it requires imported ingredients, either &mdash; presentation does far more work than price ever does.</p>

<h2>Final Thoughts</h2>
<p>An elegant Mother's Day board doesn't require perfection, just intention &mdash; a tight color story, a little height, balanced flavors, and ingredients that actually suit the person it's for.</p>
<p>Mom won't remember whether the brie was triple cream or the regular kind. She'll remember that someone put thought into making something beautiful just for her, and that's really the whole point.</p>
`;

module.exports = { body };
