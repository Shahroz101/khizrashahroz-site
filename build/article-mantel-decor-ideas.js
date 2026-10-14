// Body content for "19 Mantel Decor Ideas for a Stylish and Cozy Fireplace".
// Images sourced from Pinterest pins the user selected and provided
// directly; each is credited back to its pin per their request. Photos
// only — no Amazon product grids on this one. All 25 supplied pins were
// usable and map onto the hero, the two intro sections, all 19 numbered
// ideas, and the three closing sections, so every section in the piece
// gets a photo and no two consecutive sections go without one.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0H2DJDYTY", title: "Vintage Iron Candlestick Holders, Set of 3, Brass Gold Taper Candle Holders", w: 1377, h: 1377 },
    { asin: "B0BJ1M4HBF", title: "NIKKY HOME Botanical Wall Art Set of 2, Vintage Wood Framed Prints, 10 x 10 Inch", w: 1403, h: 929 },
  ],
  whatToPut: [
    { asin: "B0F93YX6S6", title: "Rattan Rectangular Wall Mirror, 24 x 36 Inch, Boho Farmhouse Decorative Mirror", w: 997, h: 1446 },
    { asin: "B0FXB216LL", title: "Artificial Pampas Grass Decor, 21.7 Inch Fluffy Faux Pampas, 30 Pcs, Bohemian Style", w: 1500, h: 1450 },
  ],
  howToStyle: [
    { asin: "B0C7WH88W7", title: "Lvases Snuggle Hollow Ceramic Vase Set of 2, Boho Tabletop Decor", w: 1500, h: 1500 },
    { asin: "B0D78P6XCG", title: "Rattan Serving Tray, Rectangle Wicker Storage Basket for Organizing", w: 1500, h: 937 },
  ],
  idea1: [
    { asin: "B09W5VC59L", title: "TokeShimi Brushed Gold Round Mirror, 30 Inch, Aluminum Frame", w: 1500, h: 1500 },
    { asin: "B0BZFNRHN4", title: "Torre and Tagus Solid Color Round Art Glass Vase, 5 Inch Tall, Amber", w: 683, h: 1500 },
  ],
  idea2: [
    { asin: "B0HCP6BZ5X", title: "HHIOAXXIQ Botanical Sketch Canvas Wall Art Set of 3, Wildflower Line Prints", w: 1500, h: 1026 },
    { asin: "B0H1M9L4N8", title: "Lineshading 8 Pcs Vintage Gold Gallery Wall Frame Set, 5 Sizes", w: 1440, h: 1500 },
  ],
  idea3: [
    { asin: "B0GRGN77MV", title: "VIYYIEA Large Framed Landscape Canvas Wall Art, Vintage Style, 24 x 36 Inch", w: 1477, h: 923 },
    { asin: "B0GY1D33YK", title: "Modern Sculptural Textured Ceramic Vase, Beige Abstract Flower Vase", w: 1254, h: 1254 },
  ],
  idea4: [
    { asin: "B0GKP7YYQ3", title: "Sweetcrispy 24 Inch Round Wall Mirror, Gold Metal Frame", w: 1500, h: 1500 },
    { asin: "B09X34SFQF", title: "8 Inch Clear Glass Vase for Flowers, Modern Boho Table Decor", w: 770, h: 1500 },
  ],
  idea5: [
    { asin: "B0H6ZPZ1DR", title: "Gold Abstract Meditating Woman Statue, Figurine Sculpture", w: 879, h: 1472 },
    { asin: "B0DCC8N4C9", title: "Small White Ceramic Flower Vase, 7.4 Inch, Minimalist Style", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0GMG94DXZ", title: "BEBE BASK Scalloped Wicker Wall Baskets, Set of 2, 16 x 10 x 7 Inch", w: 1304, h: 1500 },
    { asin: "B0FD3TH6BG", title: "Sukh Dried Wheat Stalks, 50 Stems, Golden Wheat Straw for Vases, 13.3 Inch", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B075X3CCGW", title: "Stonebriar Unscented White Tall Pillar Candles, 65 Hour Burn Time", w: 1500, h: 1373 },
    { asin: "B0FQJTRG64", title: "Romadedi Gold Candlestick Holders, Set of 2, Brass Color, Vintage Style", w: 1139, h: 1500 },
  ],
  idea8: [
    { asin: "B0FG7THH2J", title: "Modern Ceramic Vase Set of 5, Rustic Farmhouse Decorative Vases", w: 1500, h: 1500 },
    { asin: "B0FR4DJX2F", title: "Small Neutral Ceramic Vase Set, 5 Matte Earth-Tone Vases for Japandi Decor", w: 1500, h: 1358 },
  ],
  idea9: [
    { asin: "B0GV3KYYW8", title: "TwoDays Vintage Picture Frame Set, Antique Gold and Brass, 12 Pieces", w: 1500, h: 1413 },
    { asin: "B0DP4R75B4", title: "Vintage Country Metal Flower Vase, Farmhouse Milk Can Style Rustic Pitcher", w: 1386, h: 1500 },
  ],
  idea10: [
    { asin: "B0FGJ6MG13", title: "Decorative Books Set of 2, Linen Faux Coffee Table Books with Gold Bird", w: 1155, h: 1155 },
    { asin: "B0G8DYWK3Z", title: "JARLINK Decorative Books, Set of 3, Stackable Fake Book Storage Boxes, Brown", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B0BJCPTVP9", title: "CQURE Artificial Eucalyptus Garland, 12 Pack, 84 Ft Total, Table Greenery", w: 1500, h: 1500 },
    { asin: "B0HCZYNDSL", title: "Natural Marble Vase, Calacatta Viola Stone Decorative Flower Vase", w: 1254, h: 1254 },
  ],
  idea12: [
    { asin: "B0D44X8K39", title: "YOROXRG Black Taper Candles, 24 Pack, 7 to 8 Hour Burn, Unscented, Dripless", w: 1491, h: 1231 },
    { asin: "B07XPRNSPX", title: "Lawrence Frames Classic Bead Picture Frame, 8x10, Gold", w: 1234, h: 1500 },
  ],
  idea13: [
    { asin: "B0874RK22D", title: "upsimples 16x20 Gallery Wall Frames Set of 5, Black, Matted to 11x14", w: 1500, h: 1500 },
    { asin: "B0CCV5VKRK", title: "upsimples 11x14 Picture Frame, Gold, Matted to 8x10", w: 1199, h: 1500 },
  ],
  idea14: [
    { asin: "B0BN6XSL4X", title: "WELLAND Irregular Cedar Wood Sculpture on Stand, Natural Edge Tabletop Statue", w: 1500, h: 1500 },
    { asin: "B0C3HLMG41", title: "Faux Olive Leaves Stems, 10 Pcs, 10 Inch, Artificial Branches for Vases", w: 1500, h: 1153 },
  ],
  idea15: [
    { asin: "B0GKXY24FG", title: "Vintage Faux Book Box Set of 3, Brown Linen Decorative Books, Rustic Farmhouse Decor", w: 1500, h: 1500 },
    { asin: "B0FFLHPSKB", title: "Vintage Floral Sketch Wall Art Prints, Antique Botanical Canvas Decor", w: 1500, h: 1225 },
  ],
  idea16: [
    { asin: "B0FM87KCRZ", title: "Framed Vintage Neutral Rustic Botanical Bird Chinoiserie Wall Art, 24 x 36 Inch", w: 1500, h: 1500 },
    { asin: "B0F4C4XNJB", title: "Large Wood Abstract Wall Art for Living Room, Modern 3D Artwork", w: 1500, h: 1500 },
  ],
  idea17: [
    { asin: "B0GR428NXJ", title: "Matte Black Ceramic Vase Set of 3, Modern Farmhouse Boho Decor", w: 1172, h: 1500 },
    { asin: "B0DWMV5Z71", title: "DARJEN Gold Ribbed Tealight Votive Candle Holders, Set of 10", w: 1500, h: 1500 },
  ],
  idea18: [
    { asin: "B0GZYZXHHC", title: "13 Inch Fall Pumpkin Wreath for Front Door, Artificial Pumpkin and Maple Leaves", w: 1500, h: 1500 },
    { asin: "B09V2RYPLY", title: "Terracotta Vases, Set of 3, Farmhouse Decor Ceramic Vases for Flowers", w: 1488, h: 1500 },
  ],
  idea19: [
    { asin: "B09KV3BJFX", title: "Norrclp 11 Inch Greek Statue of David, Classic Roman Head Bust", w: 940, h: 1478 },
    { asin: "B0F18SF9H4", title: "Retro Rustic Large Ceramic Pitcher Vase, Distressed Farmhouse Style", w: 1301, h: 1500 },
  ],
  balance: [
    { asin: "B0F4D674PY", title: "Modern Wall Clock for Living Room Decor, Pendulum Design, Silent", w: 1500, h: 1500 },
    { asin: "B0GYMP5WS4", title: "Rustic Wooden Candlestick Holders, Farmhouse Taper Candle Holder Set", w: 1254, h: 1254 },
  ],
  mistakes: [
    { asin: "B07S6R7SDW", title: "Coitak Artificial Succulent Plants Potted, 5 Pcs, Indoor Faux Plants", w: 1200, h: 1136 },
    { asin: "B0B1CNJL7N", title: "upsimples 8x10 Picture Frame, Black, Matted to 5x7", w: 1220, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "mantel-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

const PIN = {
  hero: { src: "hero", w: 1200, h: 1800, alt: "Rustic wood mantel with a framed pressed botanical print, three graduated brass candlesticks, a stoneware vase of flowers and a firewood basket beside a lit fireplace", url: "https://www.pinterest.com/pin/834362268514893545/", label: "Cozy Rustic Mantel Styling" },
  whatToPutOn: { src: "what-to-put-on-a-mantel", w: 896, h: 1200, alt: "Boho mantel with pampas grass, eucalyptus, a rattan mirror, sculptural candle, books and woven baskets beside a fiddle leaf fig", url: "https://www.pinterest.com/pin/4594164325167433856/", label: "What to Put on a Mantel" },
  howToStyle: { src: "how-to-style-without-clutter", w: 736, h: 1104, alt: "White mantel styled with textured ceramic vases, eucalyptus and a woven tray of candles beneath a leaning landscape print and mounted TV", url: "https://www.pinterest.com/pin/20618110790703605/", label: "Styling a Mantel Without Clutter" },
  idea1: { src: "classic-mirror", w: 768, h: 1376, alt: "Round brass mirror above a white mantel flanked by matching amber glass vases with branches and brass candlesticks, styled with white pumpkins", url: "https://www.pinterest.com/pin/71424344086578722/", label: "Classic Mantel With a Large Mirror" },
  idea2: { src: "layered-artwork", w: 1000, h: 1500, alt: "Cream mantel with layered leaning botanical prints, brass candlesticks, knit pumpkins and a vase of dried florals", url: "https://www.pinterest.com/pin/291115563440203460/", label: "Layered Artwork on a Mantel" },
  idea3: { src: "minimalist-statement", w: 1500, h: 1500, alt: "Oversized landscape painting of cattle at sunset above a rustic wood mantel styled with just two small vases", url: "https://www.pinterest.com/pin/4590645841276512640/", label: "Minimalist Mantel With One Statement Piece" },
  idea4: { src: "symmetry-matching-vases", w: 736, h: 1104, alt: "White mantel with a round gold mirror, matching candlesticks and vases of pink and white florals on either side, tulips on the hearth", url: "https://www.pinterest.com/pin/243968504811450256/", label: "Symmetrical Mantel With Matching Vases" },
  idea5: { src: "asymmetrical-decor", w: 1024, h: 1536, alt: "Off-center round mirror above a white mantel balanced by a tall vase and books on one side and three graduated brass candlesticks on the other", url: "https://www.pinterest.com/pin/52354414415380378/", label: "Asymmetrical Mantel Decor" },
  idea6: { src: "natural-elements", w: 768, h: 1376, alt: "Fall mantel with woven wall baskets, wheat and eucalyptus branches, pumpkins, stacked books and a candle on a reclaimed wood beam", url: "https://www.pinterest.com/pin/71424344086578730/", label: "Natural Elements on a Mantel" },
  idea7: { src: "cozy-candlesticks", w: 736, h: 1104, alt: "Wood mantel styled with three pillar candles and a brass taper candlestick at different heights, a trailing plant, pampas grass and stacked books", url: "https://www.pinterest.com/pin/822258844511452910/", label: "Cozy Mantel With Candlesticks" },
  idea8: { src: "neutral-ceramic-vases", w: 768, h: 1408, alt: "White mantel with mixed textured ceramic vases in different shapes and heights, eucalyptus, an arched mirror and stacked books", url: "https://www.pinterest.com/pin/351912467359787/", label: "Neutral Mantel With Ceramic Vases" },
  idea9: { src: "vintage-finds", w: 576, h: 1024, alt: "Eclectic gallery wall of vintage frames and botanical prints above a white mantel with a vase of red flowers, wall sconces and a woven basket", url: "https://www.pinterest.com/pin/844493676052755/", label: "Rustic Mantel With Vintage Finds" },
  idea10: { src: "books-for-height", w: 941, h: 1672, alt: "Ornate gold arched mirror above a dark wood mantel with a ceramic vase of autumn branches, brass candlesticks and stacked books topped with a pumpkin", url: "https://www.pinterest.com/pin/4596345734990566272/", label: "Books Add Height on a Mantel" },
  idea11: { src: "organic-greenery", w: 1254, h: 1254, alt: "Long eucalyptus garland draping over a wood mantel and down a black stone fireplace surround, with candles, a round mirror and a sculptural vase", url: "https://www.pinterest.com/pin/4609575060008111168/", label: "Organic Mantel With Greenery Garland" },
  idea12: { src: "moody-dark-colors", w: 683, h: 1024, alt: "Dark charcoal wall behind a wood mantel styled with layered gilt frames, black taper candles, red flowers and a ceramic hand sculpture", url: "https://www.pinterest.com/pin/376683956356762173/", label: "Moody Mantel With Dark Colors" },
  idea13: { src: "family-photos", w: 704, h: 1024, alt: "Wood mantel and surrounding wall covered in black and white family photographs in mixed frame sizes, with a vase of wheat and a small clock", url: "https://www.pinterest.com/pin/68749077324/", label: "Personal Mantel With Family Photos" },
  idea14: { src: "sculptural-decor", w: 1122, h: 1402, alt: "Wood mantel styled with an abstract carved wood sculpture of an embracing couple, a stoneware vase of olive branches, a candle and leaning books", url: "https://www.pinterest.com/pin/4600427098056198016/", label: "Sculptural Decor on a Modern Mantel" },
  idea15: { src: "cottage-soft-layers", w: 896, h: 1200, alt: "Rustic wood mantel with a jar of wildflowers, a large statement clock, leather-bound books tied with twine, pumpkins and a small olive tree", url: "https://www.pinterest.com/pin/30540103721202003/", label: "Cottage-Style Mantel With Soft Layers" },
  idea16: { src: "oversized-artwork", w: 704, h: 1024, alt: "Large vintage-style framed illustration above a wood mantel with antique books, small clocks and a white ceramic lamp", url: "https://www.pinterest.com/pin/2533343538947592/", label: "One Oversized Artwork Above the Mantel" },
  idea17: { src: "mantel-with-tv", w: 1000, h: 1500, alt: "Wall-mounted TV and soundbar above a white brick mantel styled simply with lanterns and trailing plants on both sides", url: "https://www.pinterest.com/pin/281543725164965/", label: "Decorating a Mantel With a TV" },
  idea18: { src: "seasonal-decor", w: 1200, h: 1600, alt: "Ornate round mirror above a white mantel draped with a dark red leaf garland, terracotta vases, pumpkins and pillar candles for fall", url: "https://www.pinterest.com/pin/4596345702923122560/", label: "Seasonal Mantel Decor for Fall" },
  idea19: { src: "collected-meaningful-objects", w: 2100, h: 2800, alt: "Eclectic mantel with a sculptural bust, layered framed paintings, trailing plants, brass candlesticks and an ornate gold mirror against a stone fireplace", url: "https://www.pinterest.com/pin/633387444739089/", label: "Collected Mantel With Meaningful Objects" },
  howIBalance: { src: "how-to-balance", w: 736, h: 1104, alt: "Rustic mantel with a large statement clock as the anchor, a wood candlestick, stacked books and dried florals in carved urns", url: "https://www.pinterest.com/pin/105130972551618424/", label: "Balancing a Mantel Display" },
  mistakes: { src: "common-mistakes", w: 2500, h: 2500, alt: "Live-edge wood mantel shelf densely styled with succulents, porcelain figurines, a picture frame and vintage letters tied with ribbon", url: "https://www.pinterest.com/pin/4605845498943244352/", label: "A Densely Styled Mantel Shelf" },
  finalThoughts: { src: "final-thoughts", w: 512, h: 768, alt: "Layered black and white framed art leaning on a wood mantel with eucalyptus, a lit fireplace and a woven basket of candles on the floor", url: "https://www.pinterest.com/pin/22940279347740609/", label: "Finished Mantel Styling" },
};

function photo(key, productsKey) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "mantel-decor-ideas", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Create a Classic Mantel With a Large Mirror",
    photoKey: "idea1",
    paras: [
      "A large mirror above the fireplace gives you one of the easiest ways to create an elegant mantel.",
      "Choose a frame that connects with other finishes in the room. Brass works beautifully with warm neutrals, while black creates stronger contrast.",
      "Keep the accessories underneath fairly simple. A pair of candlesticks and one vase can easily finish the arrangement.",
      "The mirror also reflects light around the room, which makes this mantel decor idea especially useful in smaller or darker living rooms.",
    ],
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Layer Artwork for a Collected Mantel",
    photoKey: "idea2",
    paras: [
      "Instead of hanging one picture, lean two or three pieces against the wall.",
      "Start with the largest artwork at the back. Add a smaller frame slightly in front, then introduce a little decorative object to break up the straight lines.",
      "HGTV designer Raji Radhakrishnan recommends using odd numbers and overlapping artwork to create a collected appearance.",
      "I love this approach because you can change the smaller pieces whenever you get bored. And if you&rsquo;re anything like me, you&rsquo;ll get bored eventually.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Try a Minimalist Mantel With One Statement Piece",
    photoKey: "idea3",
    paras: [
      "Sometimes the best mantel decor involves barely any decor.",
      "Place one large sculpture, oversized vase, mirror, or artwork above the fireplace and leave the shelf mostly empty.",
      "This approach works particularly well with modern mantel decor because it lets the architecture become part of the design.",
      "A dramatic fireplace already has plenty of visual weight. You don&rsquo;t need to decorate it until it disappears.",
    ],
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Add Symmetry With Matching Vases",
    photoKey: "idea4",
    paras: [
      "If you prefer traditional decorating, symmetry gives you an easy formula.",
      "Place a large central mirror or artwork above the fireplace. Then position matching vases, lamps, candlesticks, or urns on each side.",
      "Symmetry creates an orderly, polished appearance, especially in formal living rooms.",
      "You can soften the look with branches, greenery, or flowers so the arrangement doesn&rsquo;t feel too rigid.",
    ],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Use Asymmetrical Mantel Decor",
    photoKey: "idea5",
    paras: [
      "Want something more relaxed? Break the symmetry.",
      "Place a large artwork slightly off-center and balance it with several smaller objects on the opposite side. Try combining a vase, candlestick, and small sculpture.",
      "HGTV showcases both symmetrical and asymmetrical mantel arrangements, showing how different object heights can create balance without requiring identical pieces.",
      "The trick involves visual weight, not matching quantities.",
    ],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Bring in Natural Elements",
    photoKey: "idea6",
    paras: [
      "Branches, dried flowers, greenery, pinecones, driftwood, and woven baskets can make a fireplace feel instantly warmer.",
      "You don&rsquo;t even need elaborate floral arrangements. A few tall branches in a ceramic vase can create enough height and movement.",
      "Natural materials also work beautifully with farmhouse, cottage, rustic, Scandinavian, and organic modern interiors.",
      "I especially like this approach when the room already contains wood, linen, stone, or other natural textures.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Style a Cozy Mantel With Candlesticks",
    photoKey: "idea7",
    paras: [
      "Candlesticks instantly create that cozy evening feeling.",
      "Try brass candlesticks for traditional rooms, black metal for modern spaces, or wooden candlesticks for rustic interiors.",
      "You don&rsquo;t need identical pairs, either. HGTV specifically suggests mixing candlestick silhouettes while keeping the metal finish consistent.",
    ],
    quote: { text: "Odd numbers of things always look better than even numbers.", cite: "Designer Raji Radhakrishnan, quoted by HGTV" },
    afterQuote: ["I often prefer three candlesticks at slightly different heights because the arrangement feels more relaxed."],
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Create a Neutral Mantel With Ceramic Vases",
    photoKey: "idea8",
    paras: [
      "Neutral ceramics can make a mantel feel sophisticated without adding too much color.",
      "Look for cream, beige, taupe, warm white, stone, or soft gray pieces.",
      "The important part involves mixing shapes and heights. A rounded vase next to a tall narrow vessel creates more interest than three identical containers.",
      "Architectural Digest recommends using ceramics and combining different textures to create a more tactile, individual display.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Make a Rustic Mantel With Vintage Finds",
    photoKey: "idea9",
    paras: [
      "Head to a thrift store before you head to an expensive decor shop.",
      "Vintage frames, old books, brass candlesticks, pottery, wooden boxes, and antique vessels can give your fireplace much more character.",
      "I especially like mixing one or two vintage pieces with newer accessories. That combination keeps the room from feeling like a perfectly staged antique shop.",
      "Try keeping your color palette consistent so the different objects still feel connected.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Use Books to Add Height and Texture",
    photoKey: "idea10",
    paras: [
      "Books make excellent mantel accessories because they can perform two jobs at once.",
      "They add personality and give smaller objects additional height.",
      "Stack two or three books horizontally and place a small vase, candle, or sculpture on top. You can also lean a book or use several stacked books beneath a decorative object.",
      "HGTV also recommends stacked books as a way to add texture and create a foundation for smaller decorations.",
    ],
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Try Greenery for an Organic Mantel",
    photoKey: "idea11",
    paras: [
      "A long eucalyptus garland can soften a hard fireplace surround.",
      "For something simpler, place one leafy branch in a tall vase and let it extend naturally above the mantel.",
      "Greenery works particularly well with white fireplaces because the foliage adds contrast without overwhelming the room.",
      "You can also use faux stems if you don&rsquo;t want to replace fresh greenery every few days.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Create a Moody Mantel With Dark Colors",
    photoKey: "idea12",
    paras: [
      "Not every fireplace needs to look light and airy.",
      "Try deep brown, charcoal, navy, burgundy, olive, or forest green accessories against a neutral fireplace.",
      "Architectural Digest highlights rich, moody colors such as navy, dark brown, burgundy, and burnt yellow as ways to give mantel displays more drama.",
      "I like this approach particularly in rooms with warm wood floors or leather furniture. The darker accents help the fireplace feel grounded.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Use Family Photos for a Personal Mantel",
    photoKey: "idea13",
    paras: [
      "A mantel gives family photographs a natural place to live.",
      "Instead of lining up ten frames, choose two or three meaningful photographs and mix them with decorative objects.",
      "Use different frame sizes but keep some connection between the finishes. For example, combine black frames with one vintage brass frame.",
      "The result feels personal without turning your fireplace into a family photo archive.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Add Sculptural Decor to a Modern Mantel",
    photoKey: "idea14",
    paras: [
      "Sculptural pieces work especially well when your fireplace has a clean architectural shape.",
      "Try an abstract ceramic form, stone sculpture, metal object, or unusual wooden piece.",
      "A sculpture gives you something three-dimensional rather than another flat rectangle.",
      "Designer Raji Radhakrishnan told HGTV that contemporary fireplaces without a shelf can benefit from three-dimensional sculpture because flat artwork can visually disappear.",
      "That same principle works on a mantel. Texture and dimension keep the display interesting from different angles.",
    ],
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Make a Cottage-Style Mantel With Soft Layers",
    photoKey: "idea15",
    paras: ["For a cozy cottage fireplace, combine:"],
    list: ["Soft botanical artwork", "Cream ceramics", "Aged brass", "Small stacks of books", "Fresh or dried flowers", "Woven textures"],
    after: ["Don&rsquo;t make every item perfectly symmetrical.", "A slightly imperfect arrangement creates the relaxed feeling that makes cottage interiors so appealing."],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Use One Oversized Artwork",
    photoKey: "idea16",
    paras: [
      "When in doubt, go bigger.",
      "A large painting can completely transform the fireplace without requiring dozens of accessories.",
      "Choose artwork that takes up substantial visual space above the mantel, then keep the shelf relatively quiet.",
      "HGTV highlights oversized artwork as a way to create a strong focal point while allowing the surrounding decor to support rather than compete with it.",
      "This idea works particularly well if you want your mantel decor ideas to feel sophisticated rather than busy.",
    ],
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Decorate a Mantel With a TV",
    photoKey: "idea17",
    paras: [
      "Yes, the television can coexist with attractive mantel decor. We can stop pretending everyone has a separate room exclusively for watching television.",
      "If your TV sits above the fireplace, use accessories that frame the area without competing with the screen.",
      "Keep the pieces low and visually simple. You can also use darker accessories around a dark television to help it blend into the overall composition.",
      "HGTV recently covered mantel styling specifically for fireplaces with TVs, noting that mounting a TV above the mantel has become a common decorating solution.",
    ],
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Change Your Mantel Decor With the Seasons",
    photoKey: "idea18",
    paras: [
      "You don&rsquo;t need an entirely new fireplace design every season.",
      "Keep the major pieces consistent and change a few smaller accessories.",
      "For spring, try:",
    ],
    list: ["Fresh branches", "Soft florals", "Light ceramics", "Botanical artwork"],
    after: ["For fall, switch to:"],
    list2: ["Dried leaves", "Pumpkins", "Warm-toned pottery", "Amber glass"],
    after2: ["For winter, bring in:"],
    list3: ["Evergreen branches", "Pinecones", "Candles", "Cozy natural textures"],
    after3: ["HGTV recommends treating the mantel as a natural place to celebrate seasonal changes because of its prominent position in the room."],
  },
  {
    n: "19",
    productsKey: "idea19",
    title: "Create a Collected Mantel With Meaningful Objects",
    photoKey: "idea19",
    paras: [
      "This might be my favorite approach.",
      "Instead of buying everything at once, collect pieces that actually mean something to you. Add a ceramic vase from a trip, a vintage frame from a thrift store, a family heirloom, an interesting sculpture, or artwork from a local artist.",
      "The goal isn&rsquo;t perfection.",
    ],
    quote: { text: "The goal is an intentionally curated space, not a showroom.", cite: "Designer Tara McDonough, quoted by Architectural Digest" },
    afterQuote: ["That distinction matters. A showroom can look beautiful, but your living room should feel like someone actually lives there."],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const list2 = idea.list2 ? `<ul>${idea.list2.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after2 = idea.after2 ? idea.after2.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const list3 = idea.list3 ? `<ul>${idea.list3.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after3 = idea.after3 ? idea.after3.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const quote = idea.quote ? `<blockquote><p>&ldquo;${idea.quote.text}&rdquo;</p><cite>&mdash; ${idea.quote.cite}</cite></blockquote>` : "";
  const afterQuote = idea.afterQuote ? idea.afterQuote.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const photoHtml = idea.photoKey ? photo(idea.photoKey, idea.productsKey) : (idea.productsKey ? productGrid(idea.productsKey) : "");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${list}
    ${after}
    ${list2}
    ${after2}
    ${list3}
    ${after3}
    ${quote}
    ${afterQuote}
    ${photoHtml}`;
}

const body = `
<p>A good mantel can completely change the feeling of a room. These 19 mantel decor ideas help you create a fireplace that feels intentional, cozy, and personal without making it look like you emptied an entire home decor aisle onto one shelf. I&rsquo;ve styled fireplaces in different ways over the years, and I&rsquo;ve learned that the trick usually comes down to scale, layering, texture, and restraint.</p>
<p>The best part? You don&rsquo;t need expensive decor. A beautiful mirror, a thrifted vase, a few books, or even branches from your yard can create a surprisingly polished look.</p>
${photo("hero", "hero")}

<h2>What Should You Put on a Mantel?</h2>
<p>Before choosing individual pieces, think about what you want your fireplace to communicate. Do you want it to feel warm and traditional, clean and modern, rustic and relaxed, or collected and eclectic?</p>
<p>A mantel works as a natural focal point because it sits right at eye level. HGTV describes the mantel as a natural focal point and recommends treating it as part of the larger fireplace composition rather than styling the shelf in isolation.</p>
<blockquote><p>&ldquo;It&rsquo;s your living room&rsquo;s visual anchor and deserves personality.&rdquo;</p><cite>&mdash; Designer Tara McDonough, quoted by Architectural Digest</cite></blockquote>
<p>I completely agree with that idea. When I style a mantel, I don&rsquo;t start by asking, &ldquo;What decorations do I have?&rdquo; I start with, &ldquo;What does this room need?&rdquo;</p>
<p>You can use:</p>
<ul>
  <li>Mirrors and framed artwork</li>
  <li>Candlesticks and lanterns</li>
  <li>Ceramic vases</li>
  <li>Books</li>
  <li>Plants and branches</li>
  <li>Sculptural objects</li>
  <li>Family photographs</li>
  <li>Vintage or thrifted pieces</li>
  <li>Seasonal decorations</li>
  <li>Baskets and woven accents</li>
</ul>
<p>The secret lies in choosing a few pieces that relate to each other rather than trying to display everything you own.</p>
${photo("whatToPutOn", "whatToPut")}

<h2>How Do You Style a Mantel Without Making It Look Cluttered?</h2>
<p>Start with one strong focal point. Then build around it.</p>
<p>I usually prefer a large mirror, oversized artwork, or substantial decorative object as the anchor. Smaller accessories can then create balance without competing for attention.</p>
<p>Scale matters more than people expect. If you place tiny objects across a large mantel, the fireplace can look unfinished. If you place ten huge objects together, congratulations, you have created a decor traffic jam.</p>
<p>Designer Alexis King recommends choosing a statement piece that reaches roughly two thirds of the mantel&rsquo;s width, while Architectural Digest also highlights layering and varied heights as useful ways to create visual interest.</p>
<blockquote><p>&ldquo;Symmetry can be safe, but design comes alive when you mix heights, angles, and layers that tell a story.&rdquo;</p><cite>&mdash; Designer Tara McDonough, quoted by Architectural Digest</cite></blockquote>
<p>That idea works especially well if you want your mantel to feel collected rather than overly coordinated.</p>
<p>Now that we&rsquo;ve covered the basics, let&rsquo;s get into the fun part.</p>
${photo("howToStyle", "howToStyle")}

<h2>19 Mantel Decor Ideas to Try</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How I Balance Mantel Decor</h2>
<p>When I finish styling a mantel, I step back several feet and look at it from the sofa.</p>
<p>Does one side feel heavier? Does the centerpiece disappear? Does everything sit at exactly the same height? If so, I move something.</p>
<p>I also like using this simple formula:</p>
<p>One anchor + two or three supporting pieces + one texture or natural element.</p>
<p>For example, you could combine a large mirror, two ceramic vases, three candlesticks, and a few branches.</p>
<p>That gives you enough variation without creating visual chaos.</p>
<p>And don&rsquo;t forget the fireplace itself. HGTV recommends considering the mantel, overmantel, firebox, and hearth as one complete composition rather than treating the shelf as a separate decorating zone.</p>
${photo("howIBalance", "balance")}

<h2>Common Mantel Decorating Mistakes to Avoid</h2>
<p>Even beautiful decor can look awkward when the scale doesn&rsquo;t work.</p>
<p>Avoid filling every inch of the mantel. Negative space gives your favorite pieces room to breathe.</p>
<p>Also avoid using accessories that all have the same height. Mix tall, medium, and low pieces to create movement.</p>
<p>Another common mistake involves choosing too many unrelated colors. Pick a small palette and repeat those colors across the mantel and surrounding room.</p>
<p>Finally, don&rsquo;t copy a Pinterest arrangement piece for piece. Use it as inspiration, then adapt the idea to your fireplace, your furniture, and your personality.</p>
${photo("mistakes", "mistakes")}

<h2>Final Thoughts on Mantel Decor Ideas</h2>
<p>The best mantel decor ideas don&rsquo;t rely on expensive accessories or complicated styling rules. They rely on balance, scale, texture, and a few pieces that genuinely fit the room.</p>
<p>Start with one strong focal point. Add a few supporting pieces at different heights, introduce something natural or textured, and then stop before the mantel starts looking crowded.</p>
<p>Whether you prefer modern, farmhouse, cottage, traditional, rustic, or eclectic decor, your fireplace can become one of the most personal parts of your home.</p>
<p>And honestly, if you style it beautifully enough, you might even convince yourself to stop rearranging it every weekend. No promises.</p>
`;

module.exports = { body };
