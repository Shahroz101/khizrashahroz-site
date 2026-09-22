// Body content for the "18 Small Dining Room Ideas That Make Every Inch
// Count" post. Images sourced from Pinterest pins the user selected and
// provided directly; each is credited back to its pin per their request.
// Note: two of the 23 links the user supplied (pin.it/2YyhAiSGx and
// pin.it/4FXnoiO0c) resolve to the same Pinterest pin, so that photo
// appears twice in the article (once for the mirror idea, once for the
// rug idea) — each instance keeps its own correct source link.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PIN = {
  hero: { src: "hero", w: 768, h: 1273, alt: "Small dining nook with a round wood table, woven chairs and open shelving styled with plants", url: "https://www.pinterest.com/pin/15692298699074897/", label: "Small Dining Room Styling" },
  banquette: { src: "built-in-banquette", w: 600, h: 600, alt: "Built-in banquette bench with black chairs and a chandelier in a small dining corner", url: "https://www.pinterest.com/pin/349169777367496354/", label: "Built-In Dining Banquette" },
  openBackChairs: { src: "open-back-chairs", w: 720, h: 1080, alt: "Small dining nook with a bench, open-back wood chairs and a round pendant light", url: "https://www.pinterest.com/pin/4596767978229688064/", label: "Open-Back Dining Chairs" },
  mirrorTable: { src: "round-mirror-table", w: 1023, h: 1537, alt: "Round black dining table with white chairs beneath a large round mirror and a potted olive tree", url: "https://www.pinterest.com/pin/281543727086931/", label: "Dining Room Mirror Styling" },
  benchSeating: { src: "bench-seating", w: 1024, h: 1536, alt: "Round dining table paired with a freestanding bench and two chairs against a wall", url: "https://www.pinterest.com/pin/68750184399/", label: "Dining Bench Seating" },
  cornerNook: { src: "corner-nook", w: 1000, h: 1000, alt: "Green built-in banquette tucked into a window corner with a round table and wishbone chair", url: "https://www.pinterest.com/pin/490048003228471133/", label: "Dining Corner Nook" },
  mirrorFeelBigger: { src: "mirror-feel-bigger", w: 474, h: 711, alt: "Small dining room with a round mirror reflecting light above a round table and chairs", url: "https://www.pinterest.com/pin/1548181186756836/", label: "Small Dining Room Mirror Trick" },
  darkGreenRoom: { src: "dark-green-dining-room", w: 769, h: 1266, alt: "Dark olive green dining room with a round table, wood chairs and layered candlelight", url: "https://www.pinterest.com/pin/1548181186956583/", label: "Dark Green Dining Room" },
  simplePalette: { src: "simple-palette", w: 1200, h: 2150, alt: "Small dining room with a warm white and natural oak color palette repeated throughout", url: "https://www.pinterest.com/pin/1040683426419397986/", label: "Simple Dining Room Palette" },
  pendantLighting: { src: "pendant-lighting", w: 768, h: 1376, alt: "Dining table lit by pendant lights above with a floor-to-ceiling window at dusk", url: "https://www.pinterest.com/pin/312578030417141873/", label: "Dining Room Pendant Lighting" },
  wallSconces: { src: "wall-sconces", w: 704, h: 1024, alt: "Wall sconces flanking a dining table set against a dark wall for layered lighting", url: "https://www.pinterest.com/pin/12103492743895051/", label: "Dining Room Wall Sconces" },
  shelvesAbove: { src: "shelves-above-banquette", w: 1086, h: 1448, alt: "Floating shelf styled with vases, plants and artwork above a dining banquette with wall sconces", url: "https://www.pinterest.com/pin/281543727028956/", label: "Shelves Above Dining Table" },
  furnitureRoundTable: { src: "furniture-round-table", w: 720, h: 1280, alt: "Small round dining table with white chairs beneath a gallery of round mirrors", url: "https://www.pinterest.com/pin/138345019798720565/", label: "Small Dining Room Furniture" },
  dropLeaf: { src: "drop-leaf-table", w: 1024, h: 1536, alt: "Compact wall-mounted drop-leaf style dining table styled beside a window", url: "https://www.pinterest.com/pin/4596627229137860224/", label: "Drop-Leaf Dining Table" },
  checklist: { src: "checklist-essentials", w: 1000, h: 1500, alt: "Small dining room with built-in shelving on both sides of a simply styled table", url: "https://www.pinterest.com/pin/2533343539328161/", label: "Small Dining Room Essentials" },
  verticalStorage: { src: "vertical-storage", w: 1024, h: 1024, alt: "Dining room with floor-to-ceiling built-in cabinetry used as vertical storage beside the table", url: "https://www.pinterest.com/pin/79094537203105563/", label: "Dining Room Vertical Storage" },
  slimConsole: { src: "slim-console", w: 941, h: 1672, alt: "Slim low console styled with candles and decor beneath floating shelves near the dining table", url: "https://www.pinterest.com/pin/422281213076895/", label: "Slim Dining Room Console" },
  focalPoint: { src: "focal-point", w: 896, h: 1200, alt: "Small dining room with a gallery wall and round mirror creating a focal point above the table", url: "https://www.pinterest.com/pin/74802043808489355/", label: "Dining Room Focal Point" },
  rugTable: { src: "round-mirror-table", w: 1023, h: 1537, alt: "Round area rug anchoring a round black dining table and white chairs beneath a mirror", url: "https://www.pinterest.com/pin/281543727086931/", label: "Dining Area Rug" },
  armlessChairs: { src: "armless-chairs", w: 1024, h: 1536, alt: "Round dining table with slim armless upholstered chairs and candlelight", url: "https://www.pinterest.com/pin/8585055536942794/", label: "Armless Dining Chairs" },
  roundTable: { src: "round-table-green-chairs", w: 736, h: 981, alt: "Round wood pedestal dining table with green upholstered chairs and a console table behind it", url: "https://www.pinterest.com/pin/1129629519095482158/", label: "Round Dining Table" },
  finalThoughts: { src: "final-thoughts", w: 736, h: 1104, alt: "Round dining table with a chandelier, abstract art and open shelving in a small dining space", url: "https://www.pinterest.com/pin/1099441327838881969/", label: "Small Dining Room Final Look" },
  uncluttered: { src: "uncluttered-corner", w: 1080, h: 1920, alt: "Small uncluttered dining corner with a round table, two chairs and a large round mirror above", url: "https://www.pinterest.com/pin/1026468940090547480/", label: "Uncluttered Small Dining Room" },
};

const PRODUCTS = {
  hero: [
    { asin: "B0FLXN992L", title: "23.4\" Round Tulip Dining Table for 2-4 People with Walnut Top and Black Metal Pedestal Base, Mid-Century Modern Small Space Table for Kitchen, Living Room, Cafe", w: 1207, h: 1311 },
    { asin: "B0G64JSMQL", title: "MECHYIN 31.5\" Round Dining Table for 2-4, Small Kitchen Table with Storage", w: 1313, h: 1500 },
  ],
  furnitureRoundTable: [
    { asin: "B0GS8GBX3V", title: "Round Dining Table 27.5\" Circle Tulip Table for 4 People,Oak", w: 1500, h: 1500 },
    { asin: "B0CP3FCV4M", title: "30 Inch Round Dining Table, Modern Tulip Bistro Table with White Faux Marble Top and Weighted Gold Pedestal Base, Small Kitchen Table for 2-4 People, Mid Century Style for Dining Room, Cafe, Office", w: 1500, h: 1500 },
  ],
  roundTable: [
    { asin: "B0DSV3V2F9", title: "23.62\" Small Round Dining Table for 2 – Durable & Well-Made Tulip Table with Sturdy Metal Frame, Compact 2-Seater Kitchen or Dining Room Table for Small Spaces, Apartments, Café, Restaurant, Office", w: 799, h: 949 },
    { asin: "B0C5QM9VW2", title: "Round Dining Table White with Pedestal Base,31.5\" Modern Tulip Dining Room Table for 1-4 People,Pedestal Dining Table with Round Top for Kitchen Living Room (Tulip Dining Table White)", w: 616, h: 750 },
  ],
  checklist: [
    { asin: "B0FLXPBPRX", title: "27.3\" Round Tulip Dining Table for 2-4 People with Walnut Top and Black Metal Pedestal Base, Mid-Century Modern Small Space Table for Kitchen, Living Room, Cafe", w: 1207, h: 1311 },
    { asin: "B0FVSL2VHZ", title: "Small Dining Table with MDF Top & Metal Pedestal Base", w: 1500, h: 1500 },
  ],
  banquette: [
    { asin: "B0D5H6GYTR", title: "SwallowLiving Handcrafted Solid Wood Bench, 30\" - Farmhouse-Style Entryway Seating for Living & Dining Room, Rustic Design, Natural Finish", w: 1500, h: 1500 },
    { asin: "B0FZSSG1QZ", title: "Wood Bench Indoor Farmhouse Skinny Entryway Bench Hallway Foyer with Sturdy", w: 1500, h: 1500 },
  ],
  cornerNook: [
    { asin: "B0DCFPQ6TW", title: "HOOBRO Dining Bench, Bamboo Farmhouse Entryway Bench with Back for Kitchen, Living Room, Bedroom, Easy to Assemble, Sturdy and Stable, Natural YL05CD01", w: 1500, h: 1343 },
    { asin: "B0GFYHGYBJ", title: "Solid Wood Farmhouse Bench 31.5\"/39.4\"/47.2\"/55.1\"/59\" Skinny Bench Rustic Long Entryway Bench, Heavy Duty, Durable ＆ Easy Assembly, For Hallway, Kitchen, Bedroom, Dining(Wood,31.5\"x11.8\"x17.7\")", w: 1000, h: 1000 },
  ],
  benchSeating: [
    { asin: "B0CD3P6LJK", title: "Bamboo Natural 36 inch Wooden Bench, Small Wood Benches for Entryway, Living & Dining Room, Kitchen, Bedroom, Bathroom, Hallway, Front Door, For Indoor & Outdoor Patio Use, Mid Century Modern Decor", w: 1500, h: 1500 },
    { asin: "B079VSYW8V", title: "WELLAND Live Edge Cedar Entryway Bench with Metal Legs, 28\"", w: 1500, h: 1500 },
  ],
  openBackChairs: [
    { asin: "B0FP2NKP7V", title: "Roundhill Furniture Lavin Wishbone Dining Chairs, Set of 2, Walnut", w: 1500, h: 1500 },
    { asin: "B0FP2P96QP", title: "Roundhill Furniture Lavin Wishbone Dining Chairs, Set of 2, Black", w: 1500, h: 1500 },
  ],
  armlessChairs: [
    { asin: "B08DKDFGYJ", title: "HAPPYGRILL 2 Pieces Wooden Dining Chairs Set, Vintage Armless Windsor Chairs, Kitchen Dining Chairs with Backrest, Natural", w: 1042, h: 882 },
    { asin: "B0GKDJF16Z", title: "Wooden Dining Chairs Set of 2, Mid Century Modern Side Chairs", w: 1500, h: 1500 },
  ],
  mirrorTable: [
    { asin: "B0GTNR7GHW", title: "FICTOR Round Wood Wall Mirror, 36\" Boho Wavy Circle Mirror", w: 1500, h: 1500 },
    { asin: "B0G488L12Q", title: "Rustic Round Wall Mirror 30 Inch, Natural Wood Frame with Black Metal Trim, Industrial Farmhouse Round Wood Mirror, Decorative Wall Mirror for Bathroom, Living Room, Entryway", w: 1500, h: 1500 },
  ],
  mirrorFeelBigger: [
    { asin: "B0C8S3MFDF", title: "Chende Gold Mirrors for Decor, 32'' Round Wall Mirror with Beveled Glass Frame, Modern Decorative Mirror with Wood Frame for Living Room, Entryway, Dining Room, Bathroom", w: 1500, h: 1500 },
    { asin: "B08NWZZNVX", title: "Chende Round Decorative Mirror for Wall Decor, 39\" x 39\" Large Living Room Mirror with Removable Metal Leaves for Entryway, Home Office, Bedroom,Farmhouse", w: 1000, h: 1000 },
  ],
  rugTable: [
    { asin: "B08R3SD218", title: "Hausattire Jute Braided Woven Area Rug 6 Feet Round - Natural", w: 1500, h: 1500 },
    { asin: "B09TNFLGS2", title: "HOMEMONDE Round Braided Jute Area Rug | 6' Round | Natural", w: 1500, h: 1500 },
  ],
  darkGreenRoom: [
    { asin: "B0CWLCW84D", title: "Denique Iron Taper Candle Holder Set of 3, Black Candlestick Holders Decorative Candle Stand, Tapered Candle Holders Tall Set for Wedding, Dining Table, Home Decoration (Black)", w: 1500, h: 1500 },
    { asin: "B0B2WJ51ZB", title: "NLBTW Black Candlestick Holders, Set of 3 Tall Metal Taper Candle Holder", w: 995, h: 1401 },
  ],
  simplePalette: [
    { asin: "B0CBQ1H1BW", title: "Vitalizart Beige Table Runner 14 x 72 Inches Long Slub Texture Cotton Linen Table Runner for Rustic Home Decorations Dining Room Wedding Decor Reception Bridal Shower Thanksgiving Christmas", w: 1293, h: 1500 },
    { asin: "B0H5TLZ87H", title: "100% Natural Cotton Linen Table Runner, 14x72in Natural Linen", w: 1500, h: 1500 },
  ],
  pendantLighting: [
    { asin: "B0D8QQ63JX", title: "18\" Modern Double Drum Fabric Pendant Light, Large Hanging Ceiling Chandelier Fixture with Dual Layer Fabric Shade, Ideal for Dining Room, Living Room, Bedroom, and Kitchen", w: 1443, h: 1500 },
    { asin: "B0CR9TBN44", title: "Licperron 3-Light Pendant Light Fixtures, Black Pendant Lights Kitchen Island, Adjustable Pendant Lighting with Clear Glass Shade, Modern Hanging Light Fixtures for Dining Room, Hallway, Living Room", w: 1431, h: 1500 },
  ],
  wallSconces: [
    { asin: "B0BP7Q68X3", title: "Tipace Black Hardwired Wall Sconces Set of 2,Modern Bathroom Vanity Sconces Wall Lighting with Clear Glass Shade,Farmhouse Wall Mount Lights for Mirror Bedroom Living Room Hallway Kitchen", w: 1500, h: 1500 },
    { asin: "B0CDGRX6QV", title: "Antique Brass Hardwired Wall Sconce Set of 2 - Gold Finish with White Fabric Shades，Bedroom Lighting, Living Room, Farmhouse, Fireplace, Hallway, Bedside Lamp,Bathroom Wall Lights", w: 1493, h: 1500 },
  ],
  shelvesAbove: [
    { asin: "B09T66W5D1", title: "QEEIG Floating Shelves for Wall Small Shelf (Brown, Set of 3, 15.7\" x 6.7\")", w: 1182, h: 1500 },
    { asin: "B0DZWXJ9VZ", title: "BAYKA Rustic Brown Floating Shelves 22.5in, Set of 2, Wall Mount Wood Shelf", w: 1500, h: 1495 },
  ],
  dropLeaf: [
    { asin: "B01F8MD2OK", title: "Signature Design by Ashley Small Round Drop Leaf Dining Table, Brown", w: 1242, h: 1344 },
    { asin: "B0GH2HZL1R", title: "36\" Folding Round Dining Table, Wooden Drop Leaf Table with for 2-4 People, Space Saving Design, Easy Assembly, Foldable Dining Table for Kitchen, Living Room, Small Spaces, Walnut", w: 1454, h: 1500 },
  ],
  verticalStorage: [
    { asin: "B0DK4K2TPW", title: "MyGift Wall Plate Display Rack, 3 Tier Farmhouse Whitewashed Wood Wall Mounted Plate Storage Rack, Holds 6-10inch Plates", w: 886, h: 1474 },
    { asin: "B0DVD6Y68S", title: "MyGift 3-Tier Wall Mounted Plate Display Rack – Industrial Matte Black Metal & Dark Burnt Wood Storage for 6-10 Inch Plates, Decorative Plate Holder for Kitchen or Dining Room", w: 853, h: 1500 },
  ],
  slimConsole: [
    { asin: "B09NL1RH4D", title: "HOOBRO Narrow Console Table, 29.5\" Small Entryway Table, Thin Sofa Side Display Table, for Hallway, Bedroom, Living Room, Foyer, Rustic Brown and Black BF75XG01", w: 1422, h: 1500 },
    { asin: "B0FG7JWXFV", title: "ELYKEN Bamboo 2-Tier Narrow Console Table, 36.2\" Long Slim Hallway Table", w: 1099, h: 1500 },
  ],
  focalPoint: [
    { asin: "B0DSZV5DG7", title: "Large Framed Modern Colorful Abstract Wall Art for Living Room, 24x36 In", w: 1500, h: 1500 },
    { asin: "B0G2C66YY4", title: "Large Framed Neutral Abstract Wall Art for Living Room, 3 Piece Set, 24x36", w: 1500, h: 1500 },
  ],
  finalThoughts: [
    { asin: "B0BXL7FM6X", title: "Black Chandelier, 6-Light Farmhouse Chandelier for Dining Room Lighting Fixtures Hanging, Industrial Modern Chandelier for Bedroom, Foyer, Hall, Kitchen, Living Room, Entryway (No Assembly Required)", w: 1500, h: 1500 },
    { asin: "B0FL7RLW9X", title: "KAISITE Modern Gold Chandelier 5-Light Farmhouse Chandelier for Dining Room Industrial Dining Kitchen Light Fixture Over Table Ceiling Chandelier for Bedroom Living Room Foyer Entryway", w: 1496, h: 1389 },
  ],
  uncluttered: [
    { asin: "B0F7KWKZ6S", title: "10\" Decorative Bowl,Ceramic Fruit Bowl for Kitchen Counter,Coffee Table, Dining Room,Table Centerpiece Bowel,Entryway Key Holder & Jewelry Organizer (Ocean Blue)", w: 1500, h: 1500 },
    { asin: "B0GQMFR6QL", title: "DOWAN 9.5\" Wabi-Sabi Decorative Bowl, Irregular Moss Green Glazed Ceramic Catchall Bowl for Keys and Wallet, Stone Texture Centerpiece Table Bowl for Entryway, Living Room & Coffee Table Decor", w: 1500, h: 647 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "small-dining-room-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

function photo(key) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "small-dining-room", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(key)}`;
}

const ideas = [
  {
    n: "01",
    title: "Choose a Round Table for Your Small Dining Room",
    photoKey: "roundTable",
    paras: [
      "A round table can transform a cramped dining area.",
      "Without sharp corners, you can move around the table more easily. A pedestal base also gives everyone more legroom because nobody has to fight with a table leg.",
      "I particularly like round tables in square dining rooms because the curves soften all those straight architectural lines.",
      "Try a 36 to 42 inch round table for a compact space, depending on your household and circulation needs.",
    ],
  },
  {
    n: "02",
    title: "Add a Built-In Banquette to Your Small Dining Room",
    photoKey: "banquette",
    paras: [
      "If your dining room has an awkward corner, stop fighting it.",
      "Turn that corner into a banquette.",
      "A built-in bench uses wall space instead of demanding a chair on every side of the table. You can also add drawers or lift-up storage underneath.",
      "Architectural Digest highlights banquettes as a practical way to maximize seating while using otherwise difficult corners.",
      "I especially love this approach for breakfast nooks because the bench creates a cozy little zone without making the room feel packed.",
    ],
  },
  {
    n: "03",
    title: "Use a Bench Instead of Two Dining Chairs",
    photoKey: "benchSeating",
    paras: [
      "You don't always need a built-in banquette.",
      "A freestanding bench can give you the same basic advantage while costing considerably less and allowing more flexibility.",
      "Push the bench completely against the wall when nobody uses it. Pull it out when guests arrive.",
      "This little trick can make a surprisingly big difference in a narrow dining room.",
    ],
  },
  {
    n: "04",
    title: "Hang a Mirror in Your Small Dining Room",
    photoKey: "mirrorTable",
    paras: [
      "Mirrors remain one of my favorite small-space decorating tricks.",
      "Place a large mirror opposite a window or another light source and let it reflect brightness throughout the room. You can also use an oversized mirror behind the dining table to create more visual depth.",
      "Architectural Digest specifically recommends mirrors for small spaces because they reflect available light and create the illusion of additional space.",
      "Want something more interesting than a basic rectangular mirror? Try an arched, antique, fluted, or organically shaped mirror.",
    ],
  },
  {
    n: "05",
    title: "Use One Strong Color Throughout the Small Dining Room",
    photoKey: "darkGreenRoom",
    paras: [
      "Here's where I disagree with the old “small rooms must stay white” rule.",
      "You can absolutely use darker colors in a small dining room.",
      "A deep olive green, warm taupe, charcoal, navy, or chocolate brown can create a cozy, enveloping atmosphere. House Beautiful recently highlighted how designers increasingly challenge the idea that small rooms need light colors to feel larger.",
      "The trick involves consistency.",
      "Paint the walls, trim, and perhaps even the ceiling in closely related tones. Instead of chopping the room into visual sections, you create one continuous envelope.",
    ],
  },
  {
    n: "06",
    title: "Keep the Small Dining Room Color Palette Simple",
    photoKey: "simplePalette",
    paras: [
      "If bold color feels intimidating, keep things simple.",
      "Choose two or three main colors and repeat them throughout the space. For example, you could pair warm white walls with natural oak and soft black accents.",
      "A restrained palette helps the eye move around the room instead of stopping at every different color.",
      "Designer Sara Hillery has recommended a monochromatic or simple palette when the goal involves making a small dining room appear larger.",
      "And honestly, fewer colors also make decorating much easier.",
    ],
  },
  {
    n: "07",
    title: "Install a Pendant Above the Dining Table",
    photoKey: "pendantLighting",
    paras: [
      "Your ceiling can do some serious work in a small dining room.",
      "Instead of adding a floor lamp that steals valuable floor space, hang a pendant or chandelier directly above the table.",
      "The light naturally establishes the dining zone and draws the eye upward.",
      "Architectural Digest recommends ceiling fixtures and wall lights as effective lighting solutions for small spaces because they provide illumination without consuming floor space.",
      "I'd choose something visually interesting but not excessively bulky. You want a statement, not a chandelier that looks like it needs its own zip code.",
    ],
  },
  {
    n: "08",
    title: "Add Wall Sconces to Your Small Dining Room",
    photoKey: "wallSconces",
    paras: [
      "Wall sconces can provide another layer of lighting without taking up table or floor space.",
      "Place them beside artwork, a mirror, or a built-in cabinet.",
      "You can also use them to create symmetry around the dining table.",
      "Homes & Gardens notes that layered lighting helps create a warmer and more inviting dining atmosphere, particularly in smaller rooms.",
      "Choose warm bulbs and install dimmers if your wiring allows it. Bright overhead lighting has its place, but dinner under interrogation-room lighting probably isn't it.",
    ],
  },
  {
    n: "09",
    title: "Choose Open-Back Dining Chairs",
    photoKey: "openBackChairs",
    paras: [
      "Bulky chairs can visually close in a small dining room.",
      "Open-back chairs allow more of the wall and room to remain visible, which creates a lighter appearance.",
      "I particularly like cane, spindle, wishbone, and slim metal-frame chairs for this reason.",
      "Architectural Digest designer Adnan Anwar recommends open-back chairs and chairs without arms when space feels tight.",
      "Just make sure you don't sacrifice comfort. A beautiful chair nobody wants to sit on doesn't win many points.",
    ],
  },
  {
    n: "10",
    title: "Try Armless Chairs in Your Small Dining Room",
    photoKey: "armlessChairs",
    paras: [
      "Armchairs look luxurious, but they can quickly consume precious space.",
      "Armless dining chairs slide closer to the table and allow you to squeeze in an extra seat when necessary.",
      "They also make the room feel less visually heavy.",
      "If you love upholstered chairs, choose a slim silhouette rather than a wide barrel chair. You can still get softness without turning every seat into an armchair throne.",
    ],
  },
  {
    n: "11",
    title: "Use a Drop-Leaf Table",
    photoKey: "dropLeaf",
    paras: [
      "A drop-leaf table gives you flexibility that a fixed table simply cannot match.",
      "Keep the leaves down during everyday meals and raise them when friends or family come over.",
      "This setup works especially well if your dining room doubles as a home office, homework area, or occasional workspace.",
      "Architectural Digest recommends folding furniture for small homes because residents can reclaim floor space when they don't need the furniture.",
      "For a genuinely tiny dining area, that flexibility can matter more than having a larger permanent table.",
    ],
  },
  {
    n: "12",
    title: "Turn an Awkward Corner Into a Dining Nook",
    photoKey: "cornerNook",
    paras: [
      "Don't automatically treat an awkward corner as wasted space.",
      "Measure it.",
      "You might discover that the corner can fit a small round table, a bench, and two chairs perfectly.",
      "Homes & Gardens highlights corner banquettes as an effective way to turn structural limitations into useful dining areas.",
      "I love this idea because the finished space often feels intentional rather than squeezed in.",
    ],
  },
  {
    n: "13",
    title: "Add Vertical Storage Instead of a Bulky Sideboard",
    photoKey: "verticalStorage",
    paras: [
      "Storage creates a common problem in small dining rooms.",
      "You need somewhere for serving dishes, napkins, glassware, and table linens, but a large sideboard can swallow half the room.",
      "Go upward instead.",
      "Install narrow shelves, a plate rack, or a slim wall cabinet. Keep frequently used items within easy reach and reserve lower cabinets for less attractive necessities.",
      "Vertical storage gives you storage capacity without demanding much floor space.",
    ],
  },
  {
    n: "14",
    title: "Put Shelves Above Your Dining Table",
    photoKey: "shelvesAbove",
    paras: [
      "A couple of carefully styled shelves can add personality without consuming valuable floor area.",
    ],
    paraBeforeList: "Use them for:",
    list: ["Ceramic bowls", "Small artwork", "Candlesticks", "Cookbooks", "Plants", "Decorative plates"],
    after: [
      "Just avoid filling every inch.",
      "A small dining room already has limited visual breathing room, so leave some empty space between objects.",
      "That negative space can make your styling look intentional rather than like you emptied the entire kitchen cabinet onto the wall.",
    ],
  },
  {
    n: "15",
    title: "Use a Slim Console in Your Small Dining Room",
    photoKey: "slimConsole",
    paras: [
      "If you need a surface for serving dishes, skip the oversized buffet.",
      "A slim console table can provide almost the same functionality with a much smaller footprint.",
      "Choose one with drawers if you need hidden storage. You can also style the top with a lamp, artwork, or a small arrangement of branches.",
      "Architectural Digest designers specifically recommend slim consoles as useful alternatives to bulky dining-room furniture in compact spaces.",
    ],
  },
  {
    n: "16",
    title: "Create a Dining Room Focal Point",
    photoKey: "focalPoint",
    paras: [
      "Small doesn't mean boring.",
      "In fact, one strong focal point can make a small dining room feel much more designed.",
      "Hang oversized artwork above the table, install a dramatic wallpaper, or use a sculptural pendant.",
      "Homes & Gardens recommends creating a focal point in smaller dining spaces, often by combining artwork with thoughtful table styling and lighting.",
      "I'd rather see one beautiful piece than ten tiny decorations competing for attention.",
    ],
  },
  {
    n: "17",
    title: "Use a Rug to Define the Small Dining Area",
    photoKey: "rugTable",
    paras: [
      "A rug can visually anchor the table and chairs, especially if your dining area shares space with the living room.",
      "Choose a rug large enough to accommodate the chairs even when you pull them away from the table.",
      "For an open-plan home, the rug also tells the eye where the dining area begins and ends.",
      "House Beautiful and other design sources increasingly discuss defining open-plan spaces through distinct zones rather than relying entirely on walls.",
      "Just choose a practical material. Dining rooms and delicate white rugs rarely make peaceful roommates.",
    ],
  },
  {
    n: "18",
    title: "Keep the Small Dining Room Visually Uncluttered",
    photoKey: "uncluttered",
    paras: [
      "This final idea sounds obvious, but it matters more than almost anything else.",
      "Don't fill every available surface simply because you have one.",
      "Keep your centerpiece low enough to maintain conversation. Choose a few decorative objects that actually contribute to the room.",
      "And give yourself permission to remove things.",
      "A small dining room doesn't need to display every beautiful object you own. Edit the room until the furniture, lighting, storage, and decoration all have a clear purpose.",
      "Recent design coverage also points toward more personalized, functional dining spaces rather than overly formal rooms that sit unused.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const paraBeforeList = idea.paraBeforeList ? `<p>${idea.paraBeforeList}</p>` : "";
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${paraBeforeList}
    ${list}
    ${after}
    ${photo(idea.photoKey)}`;
}

const body = `
<p>A small dining room can look cramped in about five minutes. Put in a table that feels too big, add bulky chairs, throw in a cabinet because you "need storage," and suddenly you can barely pull a chair out. The good news? These 18 small dining room ideas can help you create a space that feels comfortable, stylish, and genuinely useful without knocking down a wall.</p>
<p>I've always thought small dining spaces reward thoughtful decorating more than big ones. You have to make every piece earn its place, but that constraint can actually create a more intentional room. And honestly, who needs a dining room the size of a hotel ballroom just to eat pasta?</p>
<p>Architectural Digest makes a similar point when discussing compact dining areas, noting that small spaces can still accommodate gathering, working, and everyday activities when you choose furniture and layouts carefully.</p>
<p><em>This post also includes Amazon affiliate links. As an Amazon Associate, this site earns from qualifying purchases at no extra cost to you.</em></p>
${photo("hero")}

<h2>How Do You Make a Small Dining Room Feel Bigger?</h2>
<p>Start with the layout rather than the decorations. I know it feels more exciting to shop for pendant lights and pretty artwork, but the wrong table can ruin everything else you do.</p>
<p>Look at the shape of the room first. A narrow dining room often works better with a rectangular or oval table, while a square room can handle a round table beautifully.</p>
<p>You also need enough room to move around the table. Homes & Gardens recommends choosing a table shape that works with the room and leaves enough circulation space when you pull the chairs out.</p>
<p>I always recommend asking yourself one simple question before buying anything: Can I comfortably pull out every chair without bumping into a wall, cabinet, or another person?</p>
<p>If the answer is no, keep shopping.</p>
${photo("mirrorFeelBigger")}

<h2>What Furniture Works Best in a Small Dining Room?</h2>
<p>The best furniture for a small dining room usually has a compact footprint, clean lines, and more than one job.</p>
<p>A round pedestal table works particularly well because you can move around it without dealing with four table legs. A bench can tuck against a wall, while folding or extendable tables can give you extra seating when guests arrive.</p>
<p>Architectural Digest designers also highlight round tables, pedestal bases, benches, open-back chairs, and built-in seating as useful strategies for compact dining spaces.</p>
<p>For me, the biggest mistake involves buying miniature furniture simply because the room feels small. Tiny furniture can actually make the room feel awkward. Choose furniture that fits the room, not furniture that looks like dollhouse furniture.</p>
<p>Now let's get into the ideas.</p>
${photo("furnitureRoundTable")}

<h2>18 Small Dining Room Ideas That Make Every Inch Count</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Small Dining Room Ideas That Actually Make a Difference</h2>
<p>After looking at all 18 ideas, the biggest lesson comes down to scale and function.</p>
<p>You don't need to make everything tiny. You need to choose pieces that fit the room and support the way you actually live.</p>
<p>If I were decorating a small dining room from scratch, I'd start with these essentials:</p>
<ul>
  <li>Round or oval table for easier circulation</li>
  <li>Bench or banquette where a wall allows it</li>
  <li>Slim or open-back chairs to reduce visual weight</li>
  <li>Pendant or chandelier instead of a floor lamp</li>
  <li>Mirror to reflect light and add depth</li>
  <li>Simple color palette for visual continuity</li>
  <li>Vertical storage instead of bulky furniture</li>
  <li>One strong focal point instead of lots of small decorations</li>
</ul>
<p>The goal isn't to trick everyone into thinking your dining room measures 500 square feet. The goal is to make the space comfortable, functional, and visually calm.</p>
${photo("checklist")}

<h2>Final Thoughts on Small Dining Room Ideas</h2>
<p>The best small dining room ideas don't rely on expensive furniture or complicated renovations. They rely on understanding how people move through a room.</p>
<p>Choose the right table. Keep the circulation clear. Use the walls intelligently. Bring in layered lighting. Add a mirror when the room needs more visual depth, and don't be afraid of color just because the square footage looks intimidating.</p>
<p>Most importantly, design the dining room for the way you actually live.</p>
<p>Maybe you host Sunday dinners. Maybe you eat takeout at the table while watching television. Maybe the dining table doubles as your laptop desk six days a week.</p>
<p>Design for that reality.</p>
<p>Because a small dining room doesn't need to look bigger than it really is. It just needs to work beautifully for the people who use it.</p>
<p>And if you can accomplish that while still having enough room to pull your chair out without performing a complicated yoga pose, I'd call that a decorating win.</p>
${photo("finalThoughts")}
`;

module.exports = { body };
