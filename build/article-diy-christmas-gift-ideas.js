// Body content for "25 DIY Christmas Gift Ideas That Feel Personal and
// Actually Useful". Photos carried over from the source article,
// Pinterest pin links preserved. Idea 24 ("DIY Christmas Gift Basket")
// could overlap the already-published christmas-gift-basket-ideas
// article, but the source text frames it as one brief, generic
// how-to-theme-a-basket paragraph rather than the detailed individual
// basket concepts covered there, so it was kept but written generically
// to avoid repeating specific combinations. All 25 ideas had a photo
// in the source and all 25 kept.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DF724HVZ", title: "80 Pcs Unfinished Wooden Christmas Ornaments to Paint, 8 Styles", w: 1500, h: 1482 },
    { asin: "B08BNNV3JY", title: "Caliart Acrylic Paint Set, 24 Colors with 12 Brushes", w: 1500, h: 1468 },
  ],
  whyDiy: [
    { asin: "B0F5W3Y8YM", title: "AWHETIE Christmas Beaded Ornament Craft Kit for Adults, 6 Sets", w: 1500, h: 1495 },
    { asin: "B01LZBECKU", title: "300 Feet Natural Jute Twine with 100 Kraft Paper Gift Tags", w: 956, h: 1057 },
  ],
  choosing: [
    { asin: "B07KKP6D3Z", title: "Large Brown Kraft Paper Roll, 36 Inch x 100 ft, Made in USA", w: 1109, h: 1480 },
    { asin: "B0F13926HD", title: "Tyzarglef Wildflower Kraft Wrapping Paper Roll, 17 Inch x 32.8 ft", w: 1391, h: 1500 },
  ],
  idea1: [
    { asin: "B0CKXCX1HC", title: "Soy Wax Candle Making Kit with Wax Melter, Natural Candle Wax", w: 1500, h: 1409 },
    { asin: "B0B5GKG5YX", title: "Candle Jars for Making Candles, 16 Pcs, 7 oz, with Wood Lids", w: 1427, h: 1191 },
  ],
  idea2: [
    { asin: "B0GQCSM6HQ", title: "Ball Regular Mouth Pint Glass Mason Jars, 16 oz, 8 Count", w: 1282, h: 778 },
    { asin: "B0D14XQHQ7", title: "Jet-Puffed Mini Marshmallows, 10 oz Bag, Pack of 3", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0CDQ29K5Z", title: "Wide Mouth Quart Mason Jars, 32 oz, 12 Pack, with Airtight Lids", w: 1452, h: 1469 },
    { asin: "B09Y8F9R7Y", title: "Double Sided Recipe Cards, 4 x 6 Inch, White, 70 Count", w: 1455, h: 1500 },
  ],
  idea4: [
    { asin: "B09ZNPN1KN", title: "Clear Plastic Fillable Ornaments, 50 Pcs, DIY Craft Balls", w: 1500, h: 1494 },
    { asin: "B0HDY4KDXP", title: "Unfinished Wooden Photo Frame Ornaments for Christmas Tree, 12 Pcs", w: 1500, h: 1479 },
  ],
  idea5: [
    { asin: "B07957SF2V", title: "Earthborn Elements Epsom Salt, 8 lb", w: 1500, h: 1406 },
    { asin: "B07MLYVMFC", title: "MaxMau Mini Glass Bottles with Cork Stoppers, 10 ml, 24 Pcs", w: 1500, h: 1489 },
  ],
  idea6: [
    { asin: "B0F676NKT3", title: "Brooklyn Botany Sweet Almond Oil, 16 fl oz", w: 1140, h: 1500 },
    { asin: "B07QD3J2NG", title: "Accguan Small Glass Jars with Lids, 4 oz, Silver, Set of 40", w: 1498, h: 1500 },
  ],
  idea7: [
    { asin: "B0FBKYWMHV", title: "Permanent Ceramic Paint Pens, 24 Colors, Porcelain Brush Pens", w: 1368, h: 1500 },
    { asin: "B073WTW5FM", title: "Sweese Porcelain Coffee Mugs, 16 oz, Set of 6, White", w: 1500, h: 1107 },
  ],
  idea8: [
    { asin: "B0CXSNNBBN", title: "Blank Recipe Book Journal to Write in Your Own Recipes, 140 Recipes", w: 1189, h: 1491 },
    { asin: "B0CX8B2ZGS", title: "Recipe Binder with Plastic Sleeves, 8.5 x 11 Inch, 3 Ring", w: 1225, h: 1500 },
  ],
  idea9: [
    { asin: "B00PMUNF5A", title: "Organic Madagascar Vanilla Beans, Grade A, 50 Whole Pods", w: 1500, h: 1500 },
    { asin: "B0CGCVKFJQ", title: "SAVVY and SORTED Glass Spice Jars with Labels, 24 Pack, Bamboo Lids, 4 oz", w: 1499, h: 1500 },
  ],
  idea10: [
    { asin: "B0CZHKSSL4", title: "CYANFOUR Embroidery Kit for Beginners with Step-by-Step Videos", w: 1500, h: 1467 },
    { asin: "B0CHB11F32", title: "Caydo 6 Piece Embroidery Hoops Set with 16 Needles, 3 to 10 Inch", w: 1451, h: 1500 },
  ],
  idea11: [
    { asin: "B07LGH2FTB", title: "Le Parfait Super Jar, 1 L, Glass Canning Jar with Wire Bail Lid", w: 763, h: 1099 },
    { asin: "B07NSRHMPR", title: "365 by Whole Foods Market Organic Rolled Quick Oats, 18 oz", w: 1000, h: 1000 },
  ],
  idea12: [
    { asin: "B0GZ4HD3D1", title: "Decorative Memory Jar with 60 Blank Note Cards", w: 1171, h: 1027 },
    { asin: "B07Z3S4D58", title: "ONUPGO Waterproof Reusable Chalkboard Labels, 180 Pcs, with Liquid Chalk Marker", w: 1482, h: 1467 },
  ],
  idea13: [
    { asin: "B0B5T1DJGK", title: "Worown Natural Grapevine Wreaths, 12 Inch, 4 Pack, for DIY Crafts", w: 1167, h: 1149 },
    { asin: "B0D9K8XTW2", title: "Dried Orange Slices, 50 Pcs, with Hemp Rope, for Wreath Making", w: 1499, h: 1500 },
  ],
  idea14: [
    { asin: "B0CRKH5W5T", title: "Carbrea Thin Canvas Tote Bags, 12 Pack, Beige", w: 1500, h: 1296 },
    { asin: "B0DN1GM4H2", title: "Permanent Fabric Paint for Clothes, 24 Colors, with Brushes and Stencils", w: 1500, h: 1482 },
  ],
  idea15: [
    { asin: "B0DYDD1Y12", title: "ComSaf Glass Spice Jars with Labels and Bamboo Lids, 4 oz, 6 Pack", w: 1116, h: 1491 },
    { asin: "B0CB8JVZ6X", title: "Preprinted Spice Labels Stickers, 432 Pcs, Waterproof, 1.4 Inch Round", w: 1192, h: 1166 },
  ],
  idea16: [
    { asin: "B00I2WRMUE", title: "Creative Hobbies Unfinished Solid Pine Wood Picture Frames, Pack of 6", w: 1500, h: 1062 },
    { asin: "B0829R16YG", title: "Apple Barrel Essentials Acrylic Craft Paint Set, 12 Colors, 24 fl oz", w: 1500, h: 769 },
  ],
  idea17: [
    { asin: "B0FZY6SPL2", title: "Milk Chocolate Melting Wafers, 5 lb, for Baking and Dipping", w: 1024, h: 1024 },
    { asin: "B00X7SC5T6", title: "Brach's Peppermint Crushed Candy Cane Pieces, 10 oz", w: 1500, h: 1500 },
  ],
  idea18: [
    { asin: "B0FFMTV7FZ", title: "50-Set Bookmark Making Kit with Blank Bookmarks, Sleeves and Tassels", w: 1485, h: 1500 },
    { asin: "B005D7BBWQ", title: "Realeather Natural Leather Bookmark Blanks, 7 x 1.25 Inch, 8 Pack", w: 1500, h: 916 },
  ],
  idea19: [
    { asin: "B082HR4RV3", title: "Natural Wood Slices, 30 Pcs, 3.5 to 4 Inch, Predrilled, Unfinished", w: 1461, h: 1500 },
    { asin: "B0H5YJQYM1", title: "Bucilla Felt Applique Ornament Making Kit, Set of 24", w: 1500, h: 1464 },
  ],
  idea20: [
    { asin: "B0D5MFLFM2", title: "Pukka Herbal Tea Gift Set, 45 Organic Tea Bags, 9 Flavors", w: 1441, h: 1500 },
    { asin: "B08XW6FHSR", title: "Rsgift Foldable Gift Box with Magnetic Closure, 11 x 7.8 x 3.5 Inch", w: 1492, h: 1495 },
  ],
  idea21: [
    { asin: "B07KPKYVVV", title: "Raw African Shea Butter, 32 oz, 100% Pure Unrefined, Ivory", w: 1500, h: 1500 },
    { asin: "B09VT38RSQ", title: "Clear Plastic Jars with Black Lids, 4 oz, 50 Pack", w: 1500, h: 1500 },
  ],
  idea22: [
    { asin: "B0D4956TX6", title: "Personalized Burlap Christmas Stockings, 19.5 Inch, 6 Pcs with Blank Wooden Tags", w: 1500, h: 1075 },
    { asin: "B0CKX9G6FJ", title: "Iron-On Letters for Clothing, 2 Inch, 440 Pieces, White Heat Transfer Vinyl", w: 1500, h: 1422 },
  ],
  idea23: [
    { asin: "B0B64J29F5", title: "Le Parfait Jam Jars, 324 ml, French Glass Jelly Jars with Twist Lids, 6 Pack", w: 1069, h: 1056 },
    { asin: "B00O9F18X0", title: "Ball RealFruit Low or No-Sugar Needed Pectin, 3 Pack", w: 1500, h: 1500 },
  ],
  idea24: [
    { asin: "B0H1BXKQJT", title: "Optish White Woven Rope Gift Basket with Cellophane Bag and Ribbon", w: 1500, h: 1500 },
    { asin: "B07F6D6DKV", title: "MagicWater Crinkle Cut Paper Gift Basket Filler, 2 lb, Kraft", w: 1500, h: 1500 },
  ],
  idea25: [
    { asin: "B0DSH5V1TT", title: "Amazon Basics White Cardstock Paper, 8.5 x 11 Inch, 250 Sheets", w: 1234, h: 1500 },
    { asin: "B0G394ZKNX", title: "Pressed Flowers for Resin Molds, 110 Pcs, Colorful", w: 1500, h: 1412 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "diy-christmas-gift-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "diy-christmas-gift-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "diy-christmas-gift-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    title: "Personalized Candles",
    paras: [
      "Homemade candles make genuinely good Christmas gifts, since nearly every element can be customized.",
      "A simple glass jar, soy wax, a suitable wick, and a Christmas-inspired fragrance like vanilla, cinnamon, pine, orange or peppermint cover the basics. A handwritten label with the recipient's name adds a personal touch.",
      "Neutral jars with simple cream or kraft-paper labels tend to look considerably more expensive than they are, without requiring any complicated decoration.",
    ],
    photo: pinPhoto("candles.jpg", "DIY personalized candle as a Christmas gift", 576, 1024, "https://www.pinterest.com/pin/882142646139307876/", "DIY Personalized Candle Gift", "idea1"),
  },
  {
    n: "02",
    title: "Hot Chocolate Jars",
    paras: [
      "A jar filled with everything needed for a cozy cup of hot chocolate is hard to turn down.",
      "Layering cocoa powder, sugar, mini marshmallows, chocolate chips and crushed peppermint inside a clear jar, then finishing with ribbon and a small instruction card, builds the whole gift.",
      "Different versions can be made for different people &mdash; peppermint chocolate for one, salted caramel for another.",
    ],
    photo: pinPhoto("hot-chocolate-jars.jpg", "DIY hot chocolate gift jar layered with cocoa and marshmallows", 683, 1024, "https://www.pinterest.com/pin/2181499817768819/", "DIY Hot Chocolate Gift Jar", "idea2"),
  },
  {
    n: "03",
    title: "Homemade Cookie Mix",
    paras: [
      "This idea works especially well when several affordable gifts are needed at once.",
      "Layering dry cookie ingredients inside a glass jar, then attaching a recipe card explaining which wet ingredients to add, builds a gift that's as fun to look at as it is to bake.",
      "Chocolate chips, oats, brown sugar and colorful Christmas candies all layer well, and homemade food gifts remain popular precisely because both the recipe and presentation can be personalized.",
    ],
    photo: pinPhoto("cookie-mix.jpg", "DIY Christmas cookie mix layered in a jar", 683, 1024, "https://www.pinterest.com/pin/730709108335959729/", "DIY Christmas Cookie Mix Jar", "idea3"),
  },
  {
    n: "04",
    title: "Personalized Photo Ornaments",
    paras: [
      "Clear ornaments turn into tiny memory capsules with very little effort.",
      "A favorite photograph, family picture, handwritten message or small decorative element placed inside, with the person's name and the year added to the outside, builds a genuinely sentimental gift.",
      "This idea works especially well for grandparents, since the ornament becomes part of their Christmas decorations rather than another item needing a place to be stored.",
    ],
    photo: pinPhoto("photo-ornaments.jpg", "DIY personalized Christmas photo ornament", 683, 1024, "https://www.pinterest.com/pin/1097682109224950516/", "DIY Christmas Photo Ornament", "idea4"),
  },
  {
    n: "05",
    title: "Scented Bath Salts",
    paras: [
      "Bath salts look surprisingly luxurious once packaged well.",
      "Mixing bath salt ingredients with a pleasant fragrance, then placing everything inside a small glass jar, builds the base gift; dried flowers or botanicals add visual interest where appropriate.",
      "A simple label &mdash; something like \"Christmas Relaxation Soak\" &mdash; finishes the gift without needing anything elaborate.",
    ],
    photo: pinPhoto("bath-salts.jpg", "DIY Christmas scented bath salts in a glass jar", 683, 1024, "https://www.pinterest.com/pin/810929476713511821/", "DIY Christmas Bath Salts Gift", "idea5"),
  },
  {
    n: "06",
    title: "Homemade Sugar Scrub",
    paras: [
      "A sugar scrub takes very little effort to make but reads as considerably more polished than that effort suggests.",
      "Combining sugar with a skin-safe oil and fragrance, then packaging the mixture in a small jar with a wooden spoon or tiny scoop, covers the whole gift.",
      "A peppermint, vanilla or orange-inspired version suits the season well &mdash; just using ingredients appropriate for skin and clearly labeling anything that could trigger allergies matters here.",
    ],
    photo: pinPhoto("sugar-scrub.jpg", "DIY homemade Christmas sugar scrub in a jar", 683, 1024, "https://www.pinterest.com/pin/131378514128461458/", "DIY Christmas Sugar Scrub Gift", "idea6"),
  },
  {
    n: "07",
    title: "Painted Mugs",
    paras: [
      "Plain ceramic mugs, personalized with simple designs, turn into a gift with real staying power.",
      "A name, a tiny tree, stars, initials or minimalist snowflakes tend to look more stylish than an elaborate painted Christmas scene.",
      "Pairing the mug with tea bags, coffee, hot chocolate or homemade cookies rounds out the gift.",
    ],
    photo: pinPhoto("painted-mugs.jpg", "DIY hand-painted holiday mug", 683, 1024, "https://www.pinterest.com/pin/300122762691680494/", "DIY Hand-Painted Holiday Mug", "idea7"),
  },
  {
    n: "08",
    title: "Handmade Recipe Book",
    paras: [
      "This idea feels especially meaningful for parents and grandparents.",
      "Collecting favorite family recipes, then writing or printing them into a small notebook with photographs, memories, cooking tips and handwritten notes throughout, builds a genuinely personal keepsake.",
      "Including recipes tied to specific Christmases or family gatherings pushes the sentimentality even further.",
    ],
    photo: pinPhoto("recipe-book.jpg", "Handmade Christmas recipe book with family recipes", 683, 1024, "https://www.pinterest.com/pin/588916088817269266/", "Handmade Christmas Recipe Book", "idea8"),
  },
  {
    n: "09",
    title: "Homemade Vanilla Sugar",
    paras: [
      "Vanilla sugar makes a lovely small gift for anyone who enjoys baking.",
      "Sugar and suitable vanilla ingredients placed into a decorative jar, with a label explaining how to use it in cookies, cakes or coffee, is the entire gift.",
      "Packaging it with a wooden spoon and a handwritten recipe adds an easy, thoughtful Christmas touch.",
    ],
    photo: pinPhoto("vanilla-sugar.jpg", "DIY homemade vanilla sugar in a decorative jar", 683, 1024, "https://www.pinterest.com/pin/344806915241974274/", "DIY Homemade Vanilla Sugar Gift", "idea9"),
  },
  {
    n: "10",
    title: "Personalized Embroidery Hoop Art",
    paras: [
      "A simple embroidery hoop turns into personalized wall art with just a bit of stitching.",
      "Initials, a short phrase, a Christmas tree, a house, or a simple botanical design all work well within the hoop's small frame.",
      "Even basic embroidery skills are enough to create something genuinely personal without spending much money.",
    ],
    photo: pinPhoto("embroidery-hoop.jpg", "DIY personalized Christmas embroidery hoop art", 683, 1024, "https://www.pinterest.com/pin/616782111501286369/", "DIY Christmas Embroidery Hoop Art", "idea10"),
  },
  {
    n: "11",
    title: "Homemade Granola",
    paras: [
      "Granola makes a genuinely practical homemade gift, since it actually gets eaten rather than displayed.",
      "Oats combined with nuts, dried fruit and spices, baked according to a reliable recipe and cooled into an airtight jar, builds the whole gift.",
      "A pretty label and ribbon make homemade granola look like something from a boutique food shop rather than a home kitchen.",
    ],
    photo: pinPhoto("granola.jpg", "DIY homemade Christmas granola in a jar", 683, 1024, "https://www.pinterest.com/pin/369365606971002631/", "DIY Christmas Granola Jar Gift", "idea11"),
  },
  {
    n: "12",
    title: "DIY Christmas Memory Jar",
    paras: [
      "This might be one of the more sentimental ideas on the whole list.",
      "Filling a jar with small handwritten notes describing favorite memories, funny moments, reasons to appreciate the person, or things hoped for next year builds a genuinely personal gift.",
      "Twelve notes for the upcoming year, or twenty-five for Christmas itself, both work &mdash; it costs very little, but the emotional value tends to feel enormous.",
    ],
    photo: pinPhoto("memory-jar.jpg", "DIY Christmas memory jar filled with handwritten notes", 683, 1024, "https://www.pinterest.com/pin/477522366761682101/", "DIY Christmas Memory Jar", "idea12"),
  },
  {
    n: "13",
    title: "Handmade Christmas Wreath",
    paras: [
      "A small wreath makes a beautiful gift for anyone who loves decorating.",
      "A simple wreath base decorated with ribbon, greenery, dried oranges, pinecones, berries or wooden ornaments builds the whole piece.",
      "A smaller tabletop or bedroom version, rather than a full front-door wreath, often feels more personal and is easier for the recipient to actually display.",
    ],
    photo: pinPhoto("wreath.jpg", "Handmade Christmas wreath gift with dried oranges and greenery", 683, 1024, "https://www.pinterest.com/pin/4599934548389386752/", "Handmade Christmas Wreath Gift", "idea13"),
  },
  {
    n: "14",
    title: "Personalized Tote Bags",
    paras: [
      "Plain canvas tote bags give an easy blank canvas for a personal gift.",
      "Initials, a favorite phrase, a simple illustration or a small Christmas design, added with fabric paint or another suitable method, transforms a plain bag into something personal.",
      "Filling the finished tote with a few small gifts turns it into a complete Christmas bundle rather than just a bag.",
    ],
    photo: pinPhoto("tote-bags.jpg", "DIY personalized Christmas tote bag", 683, 1024, "https://www.pinterest.com/pin/10625749119782628/", "DIY Personalized Christmas Tote Bag", "idea14"),
  },
  {
    n: "15",
    title: "Homemade Christmas Spice Mix",
    paras: [
      "A festive spice blend suits anyone who loves cooking.",
      "Combining spices suited for roasted vegetables, cookies, hot drinks or holiday baking, then packaging each blend in a small jar with suggested uses, builds a genuinely useful gift.",
      "Separate versions can be made for bakers, coffee lovers or people who lean toward savory cooking.",
    ],
    photo: pinPhoto("spice-mix.jpg", "Homemade Christmas spice mix in small jars", 683, 1024, "https://www.pinterest.com/pin/170503535888757498/", "Homemade Christmas Spice Mix Gift", "idea15"),
  },
  {
    n: "16",
    title: "Painted Picture Frames",
    paras: [
      "A basic wooden frame gets a genuine personal makeover with just a bit of paint.",
      "Painting it in the recipient's favorite color, adding subtle Christmas details, or keeping the design minimalist all work well, with a meaningful photograph inserted before wrapping.",
      "This gift suits siblings, parents, grandparents and close friends particularly well.",
    ],
    photo: pinPhoto("picture-frames.jpg", "DIY painted Christmas picture frame", 683, 1024, "https://www.pinterest.com/pin/9007268003202356/", "DIY Painted Christmas Picture Frame", "idea16"),
  },
  {
    n: "17",
    title: "Homemade Chocolate Bark",
    paras: [
      "Chocolate bark delivers maximum presentation for surprisingly little actual effort.",
      "Melted chocolate spread onto a lined tray, topped with peppermint pieces, dried cranberries, nuts, coconut or other festive ingredients, builds the whole gift.",
      "Once set, breaking it into pieces and packaging it in a clear bag or decorative box finishes the presentation.",
    ],
    photo: pinPhoto("chocolate-bark.jpg", "Homemade Christmas chocolate bark with festive toppings", 683, 1024, "https://www.pinterest.com/pin/140806234765654/", "Homemade Christmas Chocolate Bark", "idea17"),
  },
  {
    n: "18",
    title: "Personalized Bookmarks",
    paras: [
      "Book lovers don't need another complicated gadget &mdash; sometimes a beautiful bookmark is exactly right.",
      "Cardstock, leather, fabric or pressed flowers, with initials, a quote, a tiny illustration or the recipient's name added, all work well as a base material.",
      "Pairing the bookmark with a favorite book turns a small gift into an especially thoughtful one.",
    ],
    photo: pinPhoto("bookmarks.jpg", "DIY personalized Christmas bookmarks", 683, 1024, "https://www.pinterest.com/pin/8936899258717871/", "DIY Personalized Christmas Bookmark", "idea18"),
  },
  {
    n: "19",
    title: "DIY Christmas Ornament Set",
    paras: [
      "Instead of making a single ornament, a small matching collection builds a more complete gift.",
      "Wooden shapes, felt ornaments, clay ornaments, paper ornaments or decorated clear baubles all work well as a cohesive set.",
      "Handmade ornaments can help a family start a new holiday tradition, which makes this idea especially meaningful for parents or a newly married couple.",
    ],
    photo: pinPhoto("ornament-set.jpg", "DIY Christmas ornament set with matching handmade pieces", 683, 1024, "https://www.pinterest.com/pin/524036106666208397/", "DIY Christmas Ornament Set Gift", "idea19"),
  },
  {
    n: "20",
    title: "Homemade Christmas Tea Box",
    paras: [
      "A personalized tea collection, built from several favorite varieties, makes a thoughtful and genuinely useful gift.",
      "Tea bags placed inside a decorated box, with honey sticks, homemade cookies, cinnamon sticks or chocolate added alongside, rounds out the gift.",
      "Keeping the packaging simple &mdash; a kraft box, cream ribbon, handwritten label &mdash; tends to look more elegant than anything covered in glitter.",
    ],
    photo: pinPhoto("tea-box.jpg", "Homemade Christmas tea box with assorted tea varieties", 683, 1024, "https://www.pinterest.com/pin/1062779212065898874/", "Homemade Christmas Tea Box Gift", "idea20"),
  },
  {
    n: "21",
    title: "Homemade Body Butter",
    paras: [
      "Body butter makes a genuinely beautiful self-care gift.",
      "Using a reliable recipe with ingredients appropriate for cosmetic use, then packaging the finished product in a clean cosmetic jar with a simple label, builds the whole gift.",
      "A subtle scent is the safer choice for anyone whose fragrance preferences aren't well known &mdash; a strong scent can easily turn a thoughtful gift into an unwelcome surprise.",
    ],
    photo: pinPhoto("body-butter.jpg", "DIY homemade Christmas body butter in a cosmetic jar", 683, 1024, "https://www.pinterest.com/pin/620089442420295512/", "DIY Homemade Body Butter Gift", "idea21"),
  },
  {
    n: "22",
    title: "Personalized Christmas Stocking",
    paras: [
      "A simple fabric stocking, personalized with the recipient's name, makes a gift that gets reused every single year.",
      "A traditional red and green palette works well, or a more modern direction &mdash; cream, burgundy, forest green, dusty pink &mdash; suits a different style of home.",
      "Filling the stocking with a few small gifts turns the stocking itself into part of the present.",
    ],
    photo: pinPhoto("stocking.jpg", "Personalized handmade Christmas stocking", 683, 1024, "https://www.pinterest.com/pin/140806234237748/", "Personalized Christmas Stocking", "idea22"),
  },
  {
    n: "23",
    title: "Homemade Jam",
    paras: [
      "Homemade jam makes an excellent food gift when packaged with a bit of care.",
      "Strawberry, raspberry, cranberry, orange or another seasonal flavor, finished with a handwritten label noting the flavor and date, builds a thoughtful, practical gift.",
      "Pairing the jar with crackers, biscuits or a small loaf of homemade bread rounds it out &mdash; following a tested preservation recipe and proper food-safety practices matters more here than with most other gifts on this list.",
    ],
    photo: pinPhoto("jam.jpg", "DIY homemade Christmas jam in labeled jars", 683, 1024, "https://www.pinterest.com/pin/974747913096172463/", "DIY Homemade Christmas Jam Gift", "idea23"),
  },
  {
    n: "24",
    title: "DIY Christmas Gift Basket",
    paras: [
      "Sometimes one handmade gift on its own isn't quite enough.",
      "Building a themed basket around something the recipient already loves &mdash; a cozy night in, a love of baking, a favorite hobby &mdash; ties several smaller gifts into one cohesive present.",
      "Choosing one clear theme and sticking to it is the real trick here; without it, the basket starts looking more like a clearance aisle with a ribbon tied around it.",
    ],
    photo: pinPhoto("gift-basket.jpg", "DIY Christmas gift basket built around a cohesive theme", 683, 1024, "https://www.pinterest.com/pin/5066618331002364/", "DIY Christmas Gift Basket", "idea24"),
  },
  {
    n: "25",
    title: "A Personalized Christmas Card",
    paras: [
      "Never underestimate what a handmade card can do.",
      "Textured paper, a family photograph, ribbon, pressed greenery or a handwritten message all go into a simple card that feels genuinely considered.",
      "Elaborate decoration isn't necessary to make a handmade card meaningful &mdash; the handwriting and the sentiment behind it carry most of the weight.",
    ],
    photo: pinPhoto("christmas-card.jpg", "DIY personalized Christmas card with pressed greenery", 683, 1024, "https://www.pinterest.com/pin/4602186321157230848/", "DIY Personalized Christmas Card", "idea25"),
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
<p>A handmade gift carries a kind of weight a store-bought one rarely manages, no matter how carefully chosen. The time spent making it tends to matter more to the recipient than the actual cost of the materials ever does.</p>
<p>None of the ideas below require advanced craft skills to pull off well. Most come down to a handful of accessible materials, a bit of patience, and a little personal detail that makes the final gift feel like it was made with one specific person in mind.</p>
${photo("hero.jpg", "Hand-painted wooden Christmas ornaments being crafted on a table", 576, 1024, "hero")}

<h2>Why DIY Gifts Feel More Personal</h2>
<p>A handmade gift signals real time spent, which is harder to fake than money spent. Even a simple project &mdash; a jar of granola, a hand-lettered card &mdash; carries an implicit message that the giver thought specifically about the person receiving it, rather than picking something generic off a shelf.</p>
${pinPhoto("intro-why.jpg", "Handmade Christmas ornaments showing the personal touch of DIY gifts", 683, 1024, "https://www.pinterest.com/pin/744782857177324082/", "DIY Christmas Ornament Ideas", "whyDiy")}

<h2>Choosing the Right DIY Gift</h2>
<p>The best DIY gift matches both the maker's actual skill level and the recipient's genuine interests &mdash; a beautifully hand-lettered card beats a clumsily knitted scarf for someone who doesn't knit well yet. Simple packaging, done consistently, usually elevates a homemade gift more than any single fancy material could.</p>
${pinPhoto("intro-choose.jpg", "Handmade wrapping paper used for a personalized Christmas gift", 683, 1024, "https://www.pinterest.com/pin/506795764341655526/", "Handmade Christmas Gift Wrapping", "choosing")}

<h2>25 DIY Christmas Gift Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these twenty-five ideas require a studio's worth of supplies or years of craft experience. A jar, a label, and a bit of intention behind the choice of recipient usually matters more than technical polish.</p>
<p>The gifts people keep longest are rarely the most expensive ones &mdash; they're the ones that clearly took a little time, made with someone specific in mind.</p>
`;

module.exports = { body };
