// Body content for the "24 Moody and Dark Bedroom Ideas That Feel Cozy,
// Not Gloomy" post. Images sourced from Pinterest pins the user selected
// and provided directly; each is credited back to its pin per their
// request.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PIN = {
  hero: { src: "hero", w: 736, h: 1104, alt: "Dark bedroom with black paneled walls and ceiling, a gold sputnik chandelier, cognac leather tufted headboard and rust linen bedding", url: "https://www.pinterest.com/pin/492649955300620/", label: "Moody Black Bedroom With Leather and Brass" },
  areDarkCozy: { src: "are-dark-cozy", w: 736, h: 1104, alt: "Cozy charcoal bedroom with rust linen curtains, a woven pendant light, a sheepskin throw and a hanging fern", url: "https://www.pinterest.com/pin/1127729562973529753/", label: "Cozy Dark Bedroom With Warm Layers" },
  whatColors: { src: "what-colors", w: 941, h: 1672, alt: "Richly layered dark bedroom with cove lighting, wood paneling, velvet pillows and a large moody abstract painting", url: "https://www.pinterest.com/pin/4604578850481388416/", label: "Dark Bedroom Color Palette" },
  navyWalls: { src: "navy-walls", w: 736, h: 1103, alt: "Deep navy bedroom walls with matching navy textured bedding, framed prints, a black task lamp and a jute rug", url: "https://www.pinterest.com/pin/4605071476993023872/", label: "Deep Navy Bedroom Walls" },
  forestGreen: { src: "forest-green", w: 810, h: 1440, alt: "Deep forest green bedroom wall filled with a gallery of gold-framed vintage art above green velvet bedding and candles", url: "https://www.pinterest.com/pin/124482377197164809/", label: "Forest Green Bedroom Walls" },
  charcoalGray: { src: "charcoal-gray", w: 736, h: 1104, alt: "Charcoal gray bedroom walls with a walnut bed frame, gray knit duvet, cream and rust pillows and a chunky throw", url: "https://www.pinterest.com/pin/821625525807820737/", label: "Charcoal Gray Bedroom" },
  chocolateBrown: { src: "chocolate-brown", w: 1000, h: 1500, alt: "Chocolate brown limewash bedroom wall with a black fluted headboard, rust linen bedding and a black dresser", url: "https://www.pinterest.com/pin/70437491609039/", label: "Chocolate Brown Bedroom Wall" },
  blackWalls: { src: "black-walls", w: 683, h: 1024, alt: "Black paneled bedroom wall beneath white ornate ceiling molding, with a vintage chandelier, tree prints and gray bedding", url: "https://www.pinterest.com/pin/1337074889682772/", label: "Black Bedroom Walls" },
  drenchedCeiling: { src: "drenched-ceiling", w: 768, h: 1376, alt: "Bedroom with a navy color-drenched ceiling and trim, a brass sputnik chandelier, navy curtains and cream linen bedding", url: "https://www.pinterest.com/pin/1759287349425061/", label: "Color-Drenched Navy Ceiling" },
  darkPaneling: { src: "dark-paneling", w: 736, h: 1097, alt: "Bedroom wrapped in dark wood paneling and a coffered ceiling with a crystal chandelier and brown tufted leather headboard", url: "https://www.pinterest.com/pin/38773246790218819/", label: "Dark Wood Bedroom Paneling" },
  moodyWallpaper: { src: "moody-wallpaper", w: 1999, h: 3000, alt: "Dark vintage botanical wallpaper behind an antique brass bed with velvet pillows and framed botanical prints", url: "https://www.pinterest.com/pin/4605423305721027968/", label: "Dark Botanical Bedroom Wallpaper" },
  blackTrim: { src: "black-trim", w: 736, h: 1104, alt: "Warm neutral bedroom walls framed with black trim and molding, a black bed frame and crisp cream bedding", url: "https://www.pinterest.com/pin/11329436558852937/", label: "Black Trim and Molding" },
  creamBedding: { src: "cream-bedding", w: 736, h: 1104, alt: "Cream and soft gray linen pillows glowing against a near-black wall with a dark velvet headboard and brass sconce", url: "https://www.pinterest.com/pin/173810866864813561/", label: "Cream Bedding Against Dark Walls" },
  warmWood: { src: "warm-wood", w: 897, h: 1601, alt: "Warm brown bedroom with a dark wood slat accent wall, walnut bed frame, caramel bedding and a vintage floral rug", url: "https://www.pinterest.com/pin/10555380372577216/", label: "Warm Wood Bedroom Furniture" },
  brassLighting: { src: "brass-lighting", w: 737, h: 1313, alt: "Charcoal paneled bedroom with brass wall sconces, a gold-framed mirror and a gray velvet channel headboard", url: "https://www.pinterest.com/pin/30821578696701078/", label: "Brass Bedroom Lighting" },
  layeredLighting: { src: "layered-lighting", w: 1080, h: 1920, alt: "Navy bedroom layered with a copper pendant bulb, a warm task lamp and soft light pooling over burgundy bedding", url: "https://www.pinterest.com/pin/75787206223778754/", label: "Layered Bedroom Lighting" },
  curtains: { src: "curtains", w: 736, h: 1104, alt: "Black bedroom with floor-to-ceiling blush curtains on brass rods, a brass chandelier and a cognac leather bench", url: "https://www.pinterest.com/pin/2744449770383559/", label: "Floor-to-Ceiling Bedroom Curtains" },
  vintageRug: { src: "vintage-rug", w: 816, h: 1456, alt: "Black bedroom with a faded rust vintage rug, a walnut mid-century bed, charcoal linen bedding and woven wall baskets", url: "https://www.pinterest.com/pin/577727458489305194/", label: "Vintage Rug in a Dark Bedroom" },
  velvet: { src: "velvet", w: 1074, h: 1556, alt: "Charcoal paneled bedroom with a brown velvet tufted headboard, velvet and faux fur pillows and layered gray bedding", url: "https://www.pinterest.com/pin/443252788349101717/", label: "Velvet in a Moody Bedroom" },
  greenBrown: { src: "green-brown", w: 1206, h: 1616, alt: "Deep green paneled bedroom with an olive velvet headboard, walnut nightstands, brass sconces and a cognac leather bench", url: "https://www.pinterest.com/pin/433260426679413309/", label: "Deep Green and Brown Bedroom Palette" },
  burgundy: { src: "burgundy", w: 1000, h: 1500, alt: "Deep red Victorian-style bedroom with burgundy velvet bedding, a crystal chandelier and ornate gold-framed artwork", url: "https://www.pinterest.com/pin/633387443897882/", label: "Burgundy Bedroom" },
  darkTeal: { src: "dark-teal", w: 1536, h: 2752, alt: "Dark teal bedroom wall behind a gray upholstered bed with layered gray bedding and a brass swing-arm lamp", url: "https://www.pinterest.com/pin/2533343539066148/", label: "Dark Teal Bedroom Walls" },
  moodyArtwork: { src: "moody-artwork", w: 736, h: 1104, alt: "Maroon paneled bedroom wall with a large gold-framed portrait above a black velvet headboard and dusty pink bedding", url: "https://www.pinterest.com/pin/1067493917933828152/", label: "Moody Bedroom Artwork" },
  mirrors: { src: "mirrors", w: 572, h: 1024, alt: "Large dark wood floor mirror leaning against a gray limewash bedroom wall, reflecting the bed and window light", url: "https://www.pinterest.com/pin/344877283990079941/", label: "Mirror in a Dark Bedroom" },
  texturedWalls: { src: "textured-walls", w: 683, h: 1024, alt: "Charcoal grasscloth textured wallpaper behind a bed, with framed landscape photography, a rust chair and a brass lamp", url: "https://www.pinterest.com/pin/914862421944249/", label: "Grasscloth Textured Bedroom Wall" },
  texturedWalls2: { src: "textured-walls-2", w: 896, h: 1344, alt: "Uplit black stacked stone accent wall behind a bed layered with charcoal bedding and faux fur pillows", url: "https://www.pinterest.com/pin/1120340844821801529/", label: "Stone Textured Accent Wall" },
  smallBedrooms: { src: "small-bedrooms", w: 1080, h: 1920, alt: "Compact black bedroom with a dark upholstered headboard, charcoal bedding, a single warm pendant bulb and a fur rug", url: "https://www.pinterest.com/pin/866309678481957349/", label: "Moody Small Bedroom" },
  minimalDecor: { src: "minimal-decor", w: 736, h: 1319, alt: "Sparely styled black bedroom with olive green bedding, a pair of dark forest prints and a green rug", url: "https://www.pinterest.com/pin/4081455907644558/", label: "Minimal Decor in a Dark Bedroom" },
  howToKeepFromTooDark: { src: "how-to-keep-from-too-dark", w: 576, h: 1024, alt: "Navy bedroom warmed up with wood furniture, leather accents, chunky knit blankets, woven baskets and two glowing lamps", url: "https://www.pinterest.com/pin/281543727220793/", label: "Warming Up a Dark Bedroom" },
  whatIWouldChoose: { src: "what-i-would-choose", w: 736, h: 1104, alt: "Black paneled bedroom with cream linen bedding, an olive knit throw, brass lamps, a woven bench and a jute rug", url: "https://www.pinterest.com/pin/1149473504925419597/", label: "A Balanced Moody Bedroom Scheme" },
  finalThoughts: { src: "final-thoughts", w: 736, h: 1104, alt: "Dark bedroom with an uplit exposed brick accent wall, a black ceiling, chocolate bedding and a jute rug", url: "https://www.pinterest.com/pin/422281211719344/", label: "Dark Bedroom With Brick Accent Wall" },
};

const PRODUCTS = {
  navyWalls: [
    { asin: "B0CV4HZTL3", title: "Duvet Cover Queen Size - Soft 3 Piece with Zipper Closure - Navy Blue", w: 1200, h: 1500 },
    { asin: "B0BZ74R763", title: "HYMOKEGE Navy Blue Duvet Cover Queen Size, Ultra Soft 3-Piece Seersucker Duvet Cover Set with Zipper Closure, Soft Brushed Microfiber Bedding Set with 8 Corner Ties (90'x90', 2 Pillowshams)", w: 1500, h: 1500 },
  ],
  howToKeepFromTooDark: [
    { asin: "B08TRN94YM", title: "ECOCOTT Cotton 3 Pcs Duvet Cover Set Linen Feel Navy Blue Queen Size", w: 1500, h: 1500 },
    { asin: "B0DSGGWSCW", title: "Hearth & Harbor Prewashed Queen Duvet Cover Set, Navy Blue", w: 1500, h: 1500 },
  ],
  forestGreen: [
    { asin: "B0BP5XZY1V", title: "Bedsure Forest Green Boho Duvet Cover Queen, Soft Vintage Embroidery", w: 1500, h: 1500 },
    { asin: "B0DHRP4BHS", title: "FOSSA Duvet Cover Set 100% Washed Cotton Linen Feel Full", w: 1500, h: 1500 },
  ],
  greenBrown: [
    { asin: "B0F2SF3KNV", title: "Bedsure Textured Duvet Cover Queen Size, Soft & Breathable Comforter Cover for All Season, 3 Pieces Wrinkle-Resistant Zipper Bedding with 8 Corner Ties, Forest Green", w: 1500, h: 1500 },
    { asin: "B0CG5YCPLM", title: "Bedsure PureWoven 100% Washed Cotton Duvet Cover Set, Queen Size, 3-PC", w: 1144, h: 1500 },
  ],
  minimalDecor: [
    { asin: "B09JNMY6BM", title: "MooMee Duvet Cover Set 100% Washed Cotton Linen Like Queen", w: 1500, h: 1500 },
    { asin: "B0D1K29WB3", title: "NEXHOME PRO Organic Cotton Duvet Cover Oversized Queen,Forest Green", w: 1500, h: 1500 },
  ],
  charcoalGray: [
    { asin: "B08CRJYM55", title: "CozyLux Queen Comforter Set 88'x88' Dark Grey - 7 Piece Bed in a Bag", w: 1500, h: 1500 },
    { asin: "B0CCKVPLRM", title: "MaiRêve Queen Comforter Set Crinkle Textured Charcoal Grey Bedding 7 Pieces", w: 1500, h: 1500 },
  ],
  whatColors: [
    { asin: "B0BHJ8PWCB", title: "ROSGONIA Queen Comforter Set Charcoal Grey, 3pcs (1 Dark Gray Comforter & 2 Pillowcases) All Season Soft Bedding Lightweight Bedspread Blanket Quilt", w: 1500, h: 1500 },
    { asin: "B0GY3JQDR5", title: "Bedsure PureWoven Cotton Comforter Set Prewashed, Queen, Charcoal Grey", w: 1500, h: 1500 },
  ],
  smallBedrooms: [
    { asin: "B0DZCSDQGF", title: "CozyLux Queen Comforter Set Dark Grey, 7 Pieces Bed in a Bag", w: 1500, h: 1500 },
    { asin: "B0FCS1FQBQ", title: "CozyLux Queen Comforter Set, 3 Pieces Down Alternative Bedding, Dark Grey", w: 1500, h: 1500 },
  ],
  chocolateBrown: [
    { asin: "B0DSGFR7J1", title: "Hearth & Harbor Prewashed Queen Duvet Cover Set, Chocolate Brown", w: 1500, h: 1500 },
    { asin: "B01BCP73L0", title: "Nestl Chocolate Brown Duvet Cover Queen Size - Soft Double Brushed Queen Duvet Cover Set, 3 Piece, with Button Closure, 1 Duvet Cover 90x90 inches and 2 Pillow Shams", w: 1500, h: 1500 },
  ],
  finalThoughts: [
    { asin: "B0DNFZLYNF", title: "Cocoa Brown Duvet Cover Queen Size, Pre-Washed Bedding Set", w: 1500, h: 1500 },
    { asin: "B0CPDMH1C7", title: "Paxrac Earthy Brown Comforter Queen Size, Neutral 3 Pieces Comforter Set, Lightweight Solid Bedding Set, All Seasons Soft Fluffy Queen Comforter Set (90x90In Comforter & 2 Pillowcases)", w: 1500, h: 1500 },
  ],
  darkPaneling: [
    { asin: "B0BQJ571GJ", title: "Duvet Cover Set Queen Brown Duvet Cover Mocha Coffee Bedding", w: 1500, h: 1500 },
    { asin: "B0CV4HYMQY", title: "Duvet Cover Queen Size - Extra Soft 3 Piece with Zipper Closure - Brown", w: 1200, h: 1500 },
  ],
  creamBedding: [
    { asin: "B0F1Y1KXWL", title: "EMME Muslin Cotton Duvet Cover Set Linen Like Cream White Queen", w: 1500, h: 1500 },
    { asin: "B0DPHG863M", title: "Cream Duvet Cover Queen Size 100% Sandwashed Cotton", w: 1500, h: 1500 },
  ],
  blackTrim: [
    { asin: "B07QK9CTXR", title: "MooMee Duvet Cover Set 100% Washed Cotton Linen Like Queen", w: 1500, h: 1500 },
    { asin: "B0C1CQ52K5", title: "Bedsure PureWoven 100% Washed Cotton Duvet Cover Set Queen Size, Oatmeal", w: 1144, h: 1500 },
  ],
  whatIWouldChoose: [
    { asin: "B0GXV85SJL", title: "EverGrace 100% European Flax Linen Duvet Cover Set, Queen, Natural Gingham", w: 1500, h: 1500 },
    { asin: "B0FJVXSN32", title: "LBRO2M 100% French Linen Duvet Cover Set 3Pcs, Comforter Cover Queen Size", w: 1500, h: 1500 },
  ],
  blackWalls: [
    { asin: "B0FF4L4ZTY", title: "VINGLI 14 Inch Queen Bed Frame, Heavy Duty Metal Platform,No Box Spring Needed, Sturdy Steel Slat Support, Easy Assembly, Noise-Free, 12 inch Underbed Storage,Black", w: 1254, h: 1254 },
    { asin: "B0F9FDQNY3", title: "NKZ Queen Size Metal Platform Bed Frame, 24 Inch Dual-Layer Heavy Duty Base", w: 1500, h: 1056 },
  ],
  warmWood: [
    { asin: "B0GDX1BV8S", title: "Walnut Fluted Nightstand Set of 2, Modern Night Stands with 2 Drawers", w: 1500, h: 1500 },
    { asin: "B0GJ58JYKB", title: "Fluted Nightstands Set of 2, Modern Bedside Table with Storage Drawer and Open Wood Shelf, Wood End Table Mid Century Night Stands for Bedroom Living Room Sofa Couch Office Walnut Brown", w: 1500, h: 1500 },
  ],
  areDarkCozy: [
    { asin: "B0H452K25H", title: "Fluted Nightstands Set of 2, Mid Century Bedside End Side Table", w: 1500, h: 1500 },
    { asin: "B0GFNKH4HJ", title: "Fluted Nightstands Set of 2, Night Stand with Charging Station, Modern Bed Side Table with Drawer and Storage Shelf, Wood Mid Century End Table for Bedroom Living Room (Walnut)", w: 1500, h: 1500 },
  ],
  brassLighting: [
    { asin: "B0B9Y7TB59", title: "Nathan James Tamlin Vintage Brass Wall Light Fixture, Wall Mounted 1-Light Lamp, Plugin Sconce with On/Off Switch for Living Room, Reading Nook or Bedroom, Brass", w: 1500, h: 1500 },
    { asin: "B07YTP9XLN", title: "Modern Brass Set of 2 Plug-in Wall Sconces, Linen Fabric Shade", w: 1204, h: 1500 },
  ],
  drenchedCeiling: [
    { asin: "B0D84CXL33", title: "Dimmable Plug in Wall Sconces Set of 2, Gold Bedside Wall Lamp with Knob Dimmer Switch and 6.5FT Electric Cord, Mid Century Modern Bathroom Wall Light Fixture for Bedroom Living Room", w: 1466, h: 1500 },
    { asin: "B09WXLTH1N", title: "Plug-in Wall Sconces Set of Two Swing Arm with Gold Fabric Shade", w: 1295, h: 1500 },
  ],
  layeredLighting: [
    { asin: "B0G4PGCSNT", title: "Table Lamp for Bedroom, High-Sensitivity Touch, AC Outlet, USB A+C", w: 1500, h: 1500 },
    { asin: "B0CBN6PL3Z", title: "ONEWISH Industrial Table Lamp for Bedroom, Fully Dimmable Modern Bedside Lamps with 2700K Warm Light Bulb for Kids Reading, Minimalist Nightstand Lamps for Living Room, Office (Bulb Included)", w: 1200, h: 1500 },
  ],
  curtains: [
    { asin: "B0F1MHJQ91", title: "ANRODUO Beige Velvet Curtains 96 Inches Long 2 Panels for Bedroom", w: 1500, h: 1500 },
    { asin: "B0CDPPDCZK", title: "Joydeco Velvet Blackout Curtains 96 Inch Length 2 Panels, Black Out Curtains for Bedroom Living Room, Thermal Insulated Luxury Heavy Duty Drapes, Heat & Light Blocking, Back Tab&Rod Pocket,52'W x 96'L", w: 1500, h: 1500 },
  ],
  texturedWalls2: [
    { asin: "B0FPLY99LH", title: "ANRODUO Black Velvet Curtains 96 Inches Long for Bedroom 2 Panels", w: 1500, h: 1500 },
    { asin: "B0FZ8N7SWL", title: "Black Blackout Curtains 96 Inch Long Room Darkening Curtain for Bedroom", w: 1500, h: 1500 },
  ],
  vintageRug: [
    { asin: "B0D14W8TSR", title: "Area Rug 8x10 Vintage Rug: Large Washable Indoor Medallion Rugs Low Pile Distressed Floor Carpet Retro Accent Rug for Living Room Bedroom Kitchen Dining Table Home Office(Beige, 8'x10')", w: 1500, h: 1500 },
    { asin: "B0D9TJH9JN", title: "XLUEZ Area Rug 8x10 Living Room Rug, Machine Washable Vintage Distressed Medallion Rug Non-Slip Soft Low Pile Large Indoor Rugs for Bedroom Dining Room Office Children's Room (Beige,8'x10')", w: 1500, h: 1500 },
  ],
  hero: [
    { asin: "B0G19M4ZC5", title: "8x10 Area Rugs for Living Room - Washable Vintage Retro Large Rug, Soft Ultra Thin Non Slip Low Pile Traditional Distressed Boho Carpet for Bedroom Dining Room Home Office, Rust Clay", w: 1500, h: 1500 },
    { asin: "B0D4TRKWSF", title: "DTICON Vintage Washable 8x10 Area Rug Living Room Rugs, Beige", w: 1500, h: 1500 },
  ],
  velvet: [
    { asin: "B07T3QRDVY", title: "Modway Annabel Diamond Tufted Performance Velvet Queen Headboard in White", w: 1500, h: 1500 },
    { asin: "B0GRWCJP5J", title: "Modway Emily Queen Size Performance Velvet Headboard in Mulberry - Stain-Resistant Velvet Upholstery with Button Tufting and 7 Adjustable Height Positions", w: 1500, h: 1500 },
  ],
  texturedWalls: [
    { asin: "B0GQGYCPYZ", title: "ReWallpaper Grasscloth Peel and Stick Wallpaper Linen Texture Gray Green", w: 1500, h: 1500 },
    { asin: "B0BVZR8QKX", title: "Haimin Grasscloth Textured Wallpaper 24in X 393in Fabric Contact Paper White Wall Paper Linen Peel and Stick Self-Adhesive Thick Vinyl Embossed Film Wallpaper (White)", w: 1500, h: 1500 },
  ],
  moodyWallpaper: [
    { asin: "B0DTHLPGFS", title: "Erfoni Vintage Floral Peel and Stick Wallpaper Dark Floral and Birds", w: 1148, h: 1312 },
    { asin: "B0CX1DCVPN", title: "Laatse Vintage Floral Peel and Stick Wallpaper 17.5'x 393', Gold Black", w: 1500, h: 1500 },
  ],
  moodyArtwork: [
    { asin: "B0GVSFHRKF", title: "Dark Moody Landscape Framed Wall Art, Vintage Gothic Wildflower Meadow Canvas Print with Ornate Black Carved Frame, Dark Academia Aesthetic Wall Decor for Bedroom Living Room Halloween", w: 1196, h: 1500 },
    { asin: "B0FX41PSQX", title: "LHHJDIO Vintage Gold Framed Wall Art Moody Landscape Canvas Wall Art Farmhouse Fall Picture Wall Decor Rustic Landscape Art Prints for Living Room Bedroom Office 8'x10'", w: 1469, h: 1151 },
  ],
  mirrors: [
    { asin: "B0F3XBTGNN", title: "24'×32' Gold Arched Wall Mirror with Vintage Carving", w: 1500, h: 1500 },
    { asin: "B09GJL3ZF9", title: "HARRITPURE Arched Wall Mirror 24'x36' Gold Metal Frame Vanity Mirrors", w: 1500, h: 1500 },
  ],
  burgundy: [
    { asin: "B07JCX2G4N", title: "HWY 50 Burgundy Red Throw Pillow Covers Velvet 18x18 Inch Pack of 2", w: 1500, h: 1500 },
    { asin: "B07ZV6PDZ1", title: "GIGIZAZA Burgundy Velvet Pillow Covers 18x18 Decorative Pillows Pack of 2", w: 1500, h: 1500 },
  ],
  darkTeal: [
    { asin: "B0CM2GLG45", title: "NiNi ALL Teal Velvet Throw Pillow Covers 16x16 Pack of 2 Decorative Couch", w: 1500, h: 1500 },
    { asin: "B0D41SMSQ5", title: "Velvet Decorative Throw Pillow Covers, Soft Square Cushion Case Home Decor for Living Room Couch Bed Sofa, Set of 2 Pack, Teal, 18x18 Inch", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "moody-dark-bedroom-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "moody-dark-bedroom", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(key)}`;
}

const ideas = [
  {
    n: "01",
    title: "Deep Navy Walls",
    photoKey: "navyWalls",
    paras: [
      "Deep navy creates one of my favorite dark bedroom looks because it feels dramatic without feeling harsh.",
      "Try a rich navy on the walls with warm white bedding, medium-tone wood furniture, and aged brass lighting. The warm materials stop the blue from feeling cold.",
      "You can also carry navy onto the trim for a more sophisticated color-drenched effect. Keep the ceiling slightly lighter if you want more visual height.",
    ],
    quote: { text: "The color should be enveloping.", cite: "Melanie Thomas, Architectural Digest" },
    after: ["Designer Melanie Thomas shared this advice when discussing dark bedroom palettes and color-drenched ceilings."],
  },
  {
    n: "02",
    title: "Forest Green Walls",
    photoKey: "forestGreen",
    paras: [
      "Forest green works beautifully when you want your bedroom to feel connected to nature.",
      "Pair deep green walls with warm oak, linen bedding, woven baskets, and antique-inspired furniture. I especially like this combination in bedrooms with wooden floors because the natural materials soften the intensity of the green.",
      "Keep your accent colors restrained. Cream, tan, muted brass, and warm brown can do plenty of work without competing with the walls.",
    ],
  },
  {
    n: "03",
    title: "Charcoal Gray",
    photoKey: "charcoalGray",
    paras: [
      "Charcoal gives you the drama of black without quite as much intensity.",
      "Paint the walls charcoal and introduce lighter gray bedding, black furniture, and soft cream accessories. The result feels sophisticated without looking overly decorated.",
      "You can also create a monochromatic bedroom by using several shades of gray. Vary the textures rather than constantly introducing new colors.",
      "Architectural Digest notes that consistent saturation levels can help dark bedrooms feel cohesive, which makes monochromatic decorating particularly effective.",
    ],
  },
  {
    n: "04",
    title: "Chocolate Brown",
    photoKey: "chocolateBrown",
    paras: [
      "Brown has made a serious comeback in interiors, and bedrooms give it an especially good stage.",
      "Try a deep chocolate brown wall behind a cream upholstered bed. Add walnut nightstands, ivory bedding, and warm lamps.",
      "The combination feels rich without looking flashy. If you want a bedroom that feels like a cozy old hotel rather than a trendy showroom, brown deserves your attention.",
    ],
  },
  {
    n: "05",
    title: "Black Walls",
    photoKey: "blackWalls",
    paras: [
      "Black walls can look incredible when you give them enough texture and contrast.",
      "Instead of decorating a black bedroom with only black furniture, bring in natural wood, cream textiles, antique brass, or warm leather. Those materials give the eye somewhere else to go.",
      "You can also paint only the wall behind the bed if you want to test the look first.",
      "Architectural Digest recently featured a bedroom painted in Sherwin-Williams Caviar that used an emerald bed frame and mirror to create contrast.",
    ],
  },
  {
    n: "06",
    title: "A Color-Drenched Ceiling",
    photoKey: "drenchedCeiling",
    paras: [
      "Here's where things get interesting.",
      "Instead of painting only the walls, carry the same dark color onto the ceiling, trim, and doors. This creates a cocoon-like effect that can make the room feel intentional and architectural.",
      "I especially like this approach in smaller bedrooms. Rather than trying desperately to make every surface look brighter, embrace the coziness.",
      "If a completely dark ceiling feels too intense, choose a slightly lighter version of the wall color.",
    ],
  },
  {
    n: "07",
    title: "Dark Paneling",
    photoKey: "darkPaneling",
    paras: [
      "Paint isn't your only option.",
      "Wood paneling adds architectural interest while giving you another way to introduce a dark palette. Try walnut, espresso-stained oak, or dark-stained pine.",
      "Keep the bedding simple so the wall remains the star.",
      "Architectural Digest has highlighted dark wood paneling as a way to create a &ldquo;true quiet sanctuary&rdquo; in a bedroom.",
    ],
  },
  {
    n: "08",
    title: "Moody Wallpaper",
    photoKey: "moodyWallpaper",
    paras: [
      "Wallpaper can give you depth that flat paint simply cannot.",
      "Try a dark botanical print, vintage floral, subtle geometric design, or textured grasscloth. Choose a pattern with several related colors so you can pull those shades into the bedding and accessories.",
      "If you worry about overwhelming the room, install wallpaper behind the bed and keep the remaining walls simple.",
    ],
  },
  {
    n: "09",
    title: "Black Trim",
    photoKey: "blackTrim",
    paras: [
      "You don't have to paint every wall dark.",
      "A soft taupe, warm gray, or muted green can become much more dramatic when you add black doors, window trim, baseboards, or picture molding.",
      "This works particularly well in older homes because architectural details naturally give the dark accents somewhere to belong.",
      "House Beautiful recently featured a bedroom where black wainscoting, trim, furniture, and lighting created drama while a white ceiling kept the space from feeling too heavy.",
    ],
  },
  {
    n: "10",
    title: "Cream Bedding",
    photoKey: "creamBedding",
    paras: [
      "Cream bedding might sound too simple, but that's exactly why it works.",
      "Against a dark wall, creamy linen or cotton creates immediate contrast. The bed becomes a soft focal point instead of disappearing into the room.",
      "Add a chunky throw, textured pillows, and a woven rug to keep the contrast from feeling too stark.",
      "I prefer warm cream over bright white here. Pure white can sometimes look a little too sharp against deep colors.",
    ],
  },
  {
    n: "11",
    title: "Warm Wood Furniture",
    photoKey: "warmWood",
    paras: [
      "Dark walls and dark furniture can work together, but you need tonal variation.",
      "Try walnut, oak, teak, or another natural wood finish. The grain introduces movement and warmth without disrupting the moody palette.",
      "If your walls already have strong color, avoid filling every surface with glossy black furniture. That approach can flatten the room visually.",
    ],
  },
  {
    n: "12",
    title: "Brass Lighting",
    photoKey: "brassLighting",
    paras: [
      "Brass adds warmth and a little bit of glamour to dark bedrooms.",
      "Try aged brass sconces beside the bed or a brass pendant above the nightstands. You don't need to cover the room in gold hardware. A few repeated touches create enough connection.",
      "Warm metal also works particularly well with navy, green, brown, charcoal, and burgundy.",
    ],
  },
  {
    n: "13",
    title: "Layered Lighting",
    photoKey: "layeredLighting",
    paras: [
      "Lighting can make or break a dark bedroom.",
      "You want several light sources rather than one bright ceiling fixture. Think bedside sconces, table lamps, a pendant, and subtle accent lighting.",
      "Architectural Digest recommends &ldquo;low lighting in the bedroom&rdquo; along with uplighting and bedside sconces with dimmers to help create a relaxing atmosphere.",
      "I would absolutely add dimmers wherever possible. Nothing ruins a carefully designed moody bedroom faster than switching on one aggressively bright overhead light.",
    ],
  },
  {
    n: "14",
    title: "Floor-to-Ceiling Curtains",
    photoKey: "curtains",
    paras: [
      "Heavy curtains can make a dark bedroom feel dramatically more luxurious.",
      "Choose velvet, linen, cotton, or another substantial fabric in a shade that sits close to your wall color. Hang the curtain rod close to the ceiling and let the fabric reach the floor.",
      "For a softer appearance, choose curtains slightly lighter than the walls.",
    ],
  },
  {
    n: "15",
    title: "A Vintage Rug",
    photoKey: "vintageRug",
    paras: [
      "A vintage-style rug can stop a dark bedroom from feeling too polished.",
      "Look for muted rust, faded blue, cream, olive, brown, or burgundy. These colors naturally complement moody palettes.",
      "Make sure the rug has enough size to anchor the bed and surrounding furniture. Architectural Digest recommends using a bedroom rug large enough to anchor the furniture rather than treating it like a tiny decorative island.",
    ],
  },
  {
    n: "16",
    title: "Velvet",
    photoKey: "velvet",
    paras: [
      "Velvet brings instant depth.",
      "A velvet headboard, accent chair, bench, or throw can make a dark bedroom feel luxurious without requiring lots of decoration.",
      "Deep emerald, navy, burgundy, chocolate, and charcoal velvet all work beautifully.",
      "Just avoid putting velvet on absolutely everything. Unless you want your bedroom to audition for a Victorian theater, one or two velvet elements usually provide enough drama.",
    ],
  },
  {
    n: "17",
    title: "A Deep Green and Brown Palette",
    photoKey: "greenBrown",
    paras: [
      "This combination feels earthy, warm, and timeless.",
      "Use deep green on the walls, walnut furniture, cream bedding, and brown leather or woven accents. Add a small amount of aged brass to bring warmth into the darker palette.",
      "This look works especially well when you want your bedroom to feel connected to the outdoors without turning it into a literal forest-themed room.",
    ],
  },
  {
    n: "18",
    title: "Burgundy",
    photoKey: "burgundy",
    paras: [
      "Burgundy creates a rich, romantic atmosphere.",
      "You can use it on the walls, but I often prefer using it through the headboard, curtains, bedding, or artwork.",
      "Pair burgundy with chocolate brown, muted cream, aged brass, and dark wood. The result feels warm rather than overly dramatic.",
    ],
  },
  {
    n: "19",
    title: "Dark Teal",
    photoKey: "darkTeal",
    paras: [
      "Dark teal gives you the depth of navy with a subtle green undertone.",
      "Paint the walls teal and introduce warm beige bedding, walnut furniture, and brass lighting. You can also add small amounts of rust or terracotta for contrast.",
      "The key lies in keeping the supporting colors muted. Let teal carry most of the visual weight.",
    ],
  },
  {
    n: "20",
    title: "Moody Artwork",
    photoKey: "moodyArtwork",
    paras: [
      "Artwork gives you an easy way to reinforce the palette without repainting anything.",
      "Look for landscapes, abstract paintings, vintage portraits, botanical prints, or photography with darker backgrounds.",
      "Hang larger pieces above the bed or create a small gallery wall using related tones.",
      "The artwork should connect with your room rather than introduce five completely unrelated colors.",
    ],
  },
  {
    n: "21",
    title: "Mirrors",
    photoKey: "mirrors",
    paras: [
      "A mirror can help reflect light around a darker bedroom.",
      "Place one opposite a window if the layout allows it. You can also use a decorative mirror above a dresser or beside the bed.",
      "Choose an aged brass, dark wood, or antique frame to keep the mirror connected to the overall mood.",
      "You don't need a giant mirror covering half the wall. One thoughtfully placed piece can do the job.",
    ],
  },
  {
    n: "22",
    title: "Textured Walls",
    photoKey: "texturedWalls",
    extraPhotoKey: "texturedWalls2",
    paras: [
      "Texture becomes especially important when you use a dark color.",
      "Consider grasscloth, limewash, plaster-inspired finishes, beadboard, panel molding, or textured wallpaper.",
      "Architect Benjamin Johnston told Architectural Digest, &ldquo;I love grasscloth wall coverings or textured wallpaper&rdquo; when creating cozy dark spaces.",
      "Texture catches light differently across the wall, which gives deep colors more dimension.",
    ],
  },
  {
    n: "23",
    title: "Moody Ideas for Small Bedrooms",
    photoKey: "smallBedrooms",
    paras: [
      "Small bedrooms don't automatically need pale walls.",
      "A deep color can actually make a small room feel intentional and intimate. The key involves reducing visual clutter and keeping the palette controlled.",
      "Choose one dominant dark color, then introduce lighter bedding, warm lighting, and a few reflective surfaces.",
      "If your room has limited natural light, sample the paint carefully before committing. A dark color should create atmosphere, not make you reach for a flashlight.",
    ],
  },
  {
    n: "24",
    title: "Minimal Decor",
    photoKey: "minimalDecor",
    paras: [
      "You don't need dozens of accessories to create a moody bedroom.",
      "In fact, fewer pieces often make dark rooms look more sophisticated.",
      "Choose a strong bed, two useful nightstands, good lighting, a substantial rug, curtains, and a few personal objects. Let the architecture and color palette carry some of the design work.",
      "Architectural Digest notes that layered texture can create depth without overwhelming a bedroom, which makes restraint particularly useful in dark spaces.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const paraBeforeList = idea.paraBeforeList ? `<p>${idea.paraBeforeList}</p>` : "";
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const quote = idea.quote ? `<blockquote><p>&ldquo;${idea.quote.text}&rdquo;</p><cite>&mdash; ${idea.quote.cite}</cite></blockquote>` : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const extraPhoto = idea.extraPhotoKey ? photo(idea.extraPhotoKey) : "";
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${paraBeforeList}
    ${list}
    ${quote}
    ${after}
    ${photo(idea.photoKey)}
    ${extraPhoto}`;
}

const body = `
<p>A dark bedroom can completely change the feeling of your home. If you love deep colors, warm lighting, rich textures, and that slightly dramatic boutique-hotel feeling, these 24 moody and dark bedroom ideas can help you create the look without making the room feel like a cave.</p>
<p>I've always thought bedrooms work especially well with deeper colors because you don't need the space to feel bright and energetic at bedtime. You want it to feel comfortable, private, and a little removed from the rest of the house. And honestly, not every bedroom needs another white wall and beige duvet. We have enough of those.</p>
<p>The trick comes down to balance. Dark walls can look incredibly sophisticated, but the furniture, bedding, lighting, flooring, and textures need to work with them rather than fight them.</p>
<p><em>This post also includes Amazon affiliate links. As an Amazon Associate, this site earns from qualifying purchases at no extra cost to you.</em></p>
${photo("hero")}

<h2>Are Dark Bedrooms Actually Cozy?</h2>
<p>Yes, and that's one of the biggest reasons I love them.</p>
<p>Deep navy, charcoal, forest green, chocolate brown, aubergine, and black can create an enveloping feeling that lighter colors often struggle to achieve. Benjamin Moore describes dark paint colors as creating an atmosphere of &ldquo;drama and elegance&rdquo; while also making rooms feel more intimate and inviting.</p>
<p>A dark bedroom also gives you an opportunity to create contrast. Think creamy bedding against charcoal walls, brass lamps against navy paint, or warm oak furniture against deep green.</p>
<p>Architectural Digest recently quoted designer Lindsie Davis describing dark and dramatic bedrooms as &ldquo;just as calming&rdquo; as the classic light bedroom.</p>
<p>That distinction matters. A moody bedroom doesn't automatically mean a gloomy bedroom.</p>
<p>You can make a dark room feel warm through layered lighting, soft textiles, natural wood, rugs, curtains, and carefully chosen accent colors. That combination creates the cozy atmosphere most people actually want.</p>
${photo("areDarkCozy")}

<h2>What Colors Work Best for a Moody and Dark Bedroom?</h2>
<p>You have far more choices than black.</p>
<p>Deep navy works beautifully if you want a classic, sophisticated bedroom. Forest and olive greens create a more natural feeling, while chocolate brown and deep taupe bring warmth.</p>
<p>Charcoal gives you a modern neutral option, especially if you want something dramatic without committing to a strong hue.</p>
<p>For something more unusual, try aubergine, oxblood, deep teal, smoky plum, or muted terracotta.</p>
<p>Benjamin Moore currently highlights moody colors such as Vintage Vogue, Shadow, Van Deusen Blue, and Weimaraner among its popular moody paint choices.</p>
<p>Before choosing a color, look at the natural light in your bedroom. A shade that looks soft and sophisticated in a sunny room can look much heavier in a north-facing room.</p>
<p>I always recommend testing a large sample on several walls before committing. Watch it during the morning, afternoon, and evening. Paint has a funny habit of changing personality when the sun disappears.</p>
${photo("whatColors")}

<h2>24 Moody and Dark Bedroom Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Keep a Dark Bedroom From Feeling Too Dark</h2>
<p>This part matters.</p>
<p>If your bedroom feels flat or gloomy after you paint it, don't immediately blame the color. Look at the balance between dark and light elements.</p>
<p>Try adding:</p>
<ul>
  <li>Warm bedside lighting</li>
  <li>Cream or ivory bedding</li>
  <li>Natural wood furniture</li>
  <li>A lighter area rug</li>
  <li>Metallic accents</li>
  <li>Reflective mirrors</li>
  <li>Textured curtains</li>
  <li>A few lighter decorative pieces</li>
</ul>
<p>You can also introduce contrast through materials instead of adding more colors. Linen, velvet, wood, metal, wool, and woven materials all reflect light differently.</p>
<p>That variation keeps a dark room visually interesting.</p>
${photo("howToKeepFromTooDark")}

<h2>What I Would Choose for a Moody Bedroom</h2>
<p>If I were designing one from scratch, I would probably choose a deep olive or charcoal wall color, warm white linen bedding, medium walnut furniture, aged brass sconces, a vintage-style rug, and full-length curtains.</p>
<p>Why?</p>
<p>Because the palette feels dramatic without becoming theatrical. It also gives you plenty of flexibility if you want to change the bedding or accessories later.</p>
<p>For a more classic look, I would switch the olive for deep navy.</p>
<p>For something warmer, I would choose chocolate brown.</p>
<p>And for the boldest version, I would go with charcoal or black and rely heavily on texture.</p>
${photo("whatIWouldChoose")}

<h2>Final Thoughts on Moody and Dark Bedroom Ideas</h2>
<p>The best moody and dark bedroom ideas don't simply make everything darker. They create contrast, depth, warmth, and atmosphere.</p>
<p>Start with the feeling you want. Then choose your dominant color, build in texture, add warm lighting, and give the room a few lighter elements to keep everything balanced.</p>
<p>Remember, you don't need to follow the classic bright bedroom formula just because everyone else does. If deep green walls, walnut furniture, velvet bedding, and dim brass sconces make you want to cancel your plans and stay in bed, you might have found your style.</p>
<p>And honestly, that sounds like a pretty successful bedroom to me.</p>
${photo("finalThoughts")}
`;

module.exports = { body };
