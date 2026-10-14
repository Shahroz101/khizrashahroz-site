// Body content for "20 Japandi Kitchen Decor Ideas for a Calm, Warm, and
// Timeless Space". Images sourced from Pinterest pins the user selected
// and provided directly; each is credited back to its pin per their
// request. Photos only — no Amazon product grids on this one. Two of the
// 28 supplied pins were dropped (one exact duplicate image, one photo of
// the same kitchen as the hero shot from another angle); the remaining
// 26 map onto the hero, both intro sections, all 20 numbered ideas, and
// the three closing sections, so every section gets a photo and no two
// consecutive sections go without one.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0GJSJ2JPJ", title: "Sintuff Half Round Flexible Wood Slat 3D Wall Panels, MDF, 6 Pcs", w: 1500, h: 1500 },
    { asin: "B0H8SK1GKX", title: "Modern Beige Pleated Fabric Pendant Light, 19.7 Inch Scalloped Shape", w: 1500, h: 1500 },
  ],
  whatIs: [
    { asin: "B0GHXYK8X8", title: "DICOFUN Sandstone Peel and Stick Backsplash Wall Tiles, 10 Sheets, 12 x 12 Inch", w: 1500, h: 1500 },
    { asin: "B01CEBRM1W", title: "DOWAN White Ceramic Bowls, Set of 4, 22 Oz, for Soup and Cereal", w: 1093, h: 1339 },
  ],
  howTo: [
    { asin: "B0D3KWLPKX", title: "Lingkai 23.6 Inch Woven Rattan Dome Chandelier, Hand Woven Pendant", w: 1500, h: 1500 },
    { asin: "B0CK8MFX9D", title: "Modway Saoirse Woven Rope Wood Counter Stool, Set of 2, Walnut Natural", w: 921, h: 600 },
  ],
  idea1: [
    { asin: "B0DSBKRQQ1", title: "GarveeHome Modern 35.4 Inch Sideboard Buffet Cabinet with Glass Doors, Oak", w: 1500, h: 1500 },
    { asin: "B001PD2HHA", title: "SamaN Interior Water-Based Wood Stain, Natural, for Furniture and Paneling", w: 1131, h: 1500 },
  ],
  idea2: [
    { asin: "B07BK7T82K", title: "Glidden Interior Paint and Primer, White Navajo White, One Coat, Eggshell, 1 Quart", w: 1500, h: 1471 },
    { asin: "B07PW3D8Y4", title: "Rust-Oleum Simply Home Interior Wall Paint, Linen White, Eggshell, 1 Gallon", w: 1294, h: 1404 },
  ],
  idea3: [
    { asin: "B0G6X4WDBC", title: "Italian Calacatta Viola Marble Cutting Board, Natural Stone, 15 x 12 Inch", w: 1484, h: 1500 },
    { asin: "B0F939L96K", title: "Marble Cutting Board for Kitchen, 16 x 12 Inch, Italian Carrara White", w: 1500, h: 1206 },
  ],
  idea4: [
    { asin: "B07BDWC1TQ", title: "Glidden Interior Paint and Primer, Greige Oatmeal, One Coat, Eggshell, 1 Quart", w: 1500, h: 1471 },
    { asin: "B07BZKM696", title: "Rust-Oleum Simply Home Interior Wall Paint, Soft Beige, Eggshell, 1 Gallon", w: 726, h: 774 },
  ],
  idea5: [
    { asin: "B0GSXWK81D", title: "Cinnvoice Unfinished Pine Kitchen Cabinet Doors, 2 Pcs, 12 x 18 Inch", w: 1500, h: 1419 },
    { asin: "B0CB61LRLJ", title: "Black Square Recessed Flush Door Pulls, 2 Pcs, 4.53 x 1.77 Inch", w: 1500, h: 1260 },
  ],
  idea6: [
    { asin: "B0HFZ8322L", title: "Marsui Large Solid Walnut Floating Shelves, Set of 2, 21.65 and 14.97 Inch", w: 1500, h: 1500 },
    { asin: "B0GVS2WVMH", title: "Quatish Ceramic Cereal Bowls, Set of 6, 24 Oz Soup Bowls", w: 1500, h: 1242 },
  ],
  idea7: [
    { asin: "B0H72GF57P", title: "Besmeety Stoneware Cereal Bowls, Set of 4, 18 Oz, Handmade Style", w: 1493, h: 1378 },
    { asin: "B01N5JTAAD", title: "suyika Japanese Tetsubin Cast Iron Teapot with Stainless Steel Infuser", w: 1492, h: 1500 },
  ],
  idea8: [
    { asin: "B0CJNXJ7K1", title: "JOY DECOR Matte Black Cabinet Pulls, 3 Inch Hole Center, 30 Pack", w: 1297, h: 1344 },
    { asin: "B0G8SXXZ43", title: "Ceramic Flower Vase, 7.4 Inch, Farmhouse Table Vase, Retro Black", w: 1320, h: 1500 },
  ],
  idea9: [
    { asin: "B0C5WSDCY2", title: "Large White Oblate Paper Lantern Pendant Lamp Shade, 21.85 Inch", w: 1125, h: 1500 },
    { asin: "B09NLXFWCG", title: "DiCUNO Pendant Light Cord for Paper Lanterns, 20 Ft, White", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0GYNHRZGY", title: "Rolling Kitchen Island Cart with Storage, 35.4 Inch, 2 Drawers and Doors", w: 1500, h: 1500 },
    { asin: "B0H2VG1HD4", title: "Modern White Ceramic Pendant Light, 14 Inch, Minimalist Round", w: 1500, h: 1500 },
  ],
  idea11: [
    { asin: "B08VDVW3LB", title: "Dujust Japanese Style White Porcelain Tea Set with Tray", w: 1084, h: 776 },
    { asin: "B0HCN9QG9F", title: "Small Wooden Cutting Board, Mini Walnut, for Kitchen Counter", w: 1500, h: 1192 },
  ],
  idea12: [
    { asin: "B091647KGL", title: "Whonline Artificial Hanging Plants, Faux Small Potted Greenery", w: 595, h: 1500 },
    { asin: "B0D6KL94Z9", title: "Coferset 2 Pack Small Fake Herb Plants in Pots, Gray Green", w: 1500, h: 1407 },
  ],
  idea13: [
    { asin: "B0GWZFSKD7", title: "Commomy Matte 3D Peel and Stick Backsplash, Sage Green, 10 Pcs, 11.8 Inch", w: 1368, h: 1368 },
    { asin: "B0GQMF7FH3", title: "Peel and Stick 3D Wall Panels, 21 Pcs, Fluted Wood Slat, Walnut", w: 1500, h: 1484 },
  ],
  idea14: [
    { asin: "B07KLB8WZD", title: "Giani Brick Transformations Whitewash Paint for Brick Walls and Fireplaces", w: 628, h: 819 },
    { asin: "B0GGHP52X6", title: "Meoded Limewash Brush, Professional Crosshatch Brush for Mineral Paints", w: 666, h: 974 },
  ],
  idea15: [
    { asin: "B0048VGMEU", title: "Linon Natural Wood Barstool with Round Seat, 24 Inch", w: 900, h: 1500 },
    { asin: "B0H11Y1K4Q", title: "XUDREZ Rattan Counter Height Bar Stools, Set of 2, Farmhouse Wood with Cane Back", w: 1500, h: 1500 },
  ],
  idea16: [
    { asin: "B0DT6MBP23", title: "Smart FENDEE Sideboard Cabinet, 31.5 Inch, Farmhouse Buffet with Slatted Doors", w: 1500, h: 1500 },
    { asin: "B0CSNM3MSD", title: "Solid Elm Wood Floating Shelves for Wall, 24 Inch, Set of 2, Natural", w: 1493, h: 1500 },
  ],
  idea17: [
    { asin: "B001QFYDSI", title: "Sharp KB6524PSY 24 Inch Built-In Microwave Drawer Oven, 1.2 Cu Ft", w: 1198, h: 762 },
    { asin: "B0H3Z316YV", title: "Garvee 24 Inch Built-In Single Wall Oven, 2.5 Cu Ft, Electric, 5 Cooking Functions", w: 1500, h: 1441 },
  ],
  idea18: [
    { asin: "B0DXF2JGRS", title: "baibu Non-Slip Indoor Bench Cushion with Ties, 59 x 16 x 1.5 Inch, Beige", w: 1500, h: 721 },
    { asin: "B0DT26T1G7", title: "Modway Amish Wood Rope Dining Chair, Natural, Solid Elm", w: 672, h: 921 },
  ],
  idea19: [
    { asin: "B0F9SVL9X4", title: "Dobbyby Ceramic Flower Vase, 7.6 Inch, Rustic Terracotta Pottery", w: 1500, h: 1500 },
    { asin: "B001GS8NPO", title: "Lipper International Acacia Round Flair Bowl", w: 1500, h: 1209 },
  ],
  idea20: [
    { asin: "B0FDG5MXPM", title: "Abalter Expandable Pull-Out Cabinet Organizer, 2-Tier Slide-Out Drawer", w: 1500, h: 1500 },
    { asin: "B0C3QZ7SNF", title: "Cisily Sponge Holder for Kitchen Sink, Organizer with Brush Holder", w: 1500, h: 1500 },
  ],
  warm: [
    { asin: "B075YRG42X", title: "Solino Home 100% Pure Linen Table Runner, Natural, 14 x 90 Inch", w: 1243, h: 1500 },
    { asin: "B0H15PVHXN", title: "Natural Travertine Stone Pendant Light with Wood Accent, Farmhouse Rustic", w: 1009, h: 1500 },
  ],
  mistakes: [
    { asin: "B0CZCVPX41", title: "TJOY 6 Pack A19 LED Light Bulbs, Soft Warm White 2700K, 60 Watt Equivalent", w: 1500, h: 1500 },
    { asin: "B08R66Z71S", title: "ASOKO Dimmable LED Under Cabinet Lights, 2700K, 3 Pcs, 12 Inch, Linkable", w: 1154, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "japandi-kitchen-decor-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
  hero: { src: "hero", w: 1024, h: 1536, alt: "Japandi kitchen island with fluted wood panels, wood bar stools, pleated linen pendant lights and a ceramic vase of dried branches", url: "https://www.pinterest.com/pin/13862711351190873/", label: "Warm Wood Japandi Kitchen" },
  whatIsJapandi: { src: "what-is-japandi", w: 683, h: 1024, alt: "Dramatic natural stone slab backsplash and hood beside open wood shelving styled with white ceramics", url: "https://www.pinterest.com/pin/646548090302295818/", label: "Natural Stone and Craftsmanship in a Japandi Kitchen" },
  howToMake: { src: "how-to-make-it-japandi", w: 736, h: 1104, alt: "Kitchen corner with a rattan dome pendant, fluted cream tile, open wood shelving and a woven counter stool", url: "https://www.pinterest.com/pin/60306082507544686/", label: "Layers of a Japandi Kitchen" },
  idea1: { src: "warm-wood-cabinets", w: 736, h: 1104, alt: "Cozy kitchen with warm wood cabinetry, pendant lights, open shelving and a small wood dining table surrounded by plants", url: "https://www.pinterest.com/pin/1151091986056265419/", label: "Warm Wood Cabinets in a Japandi Kitchen" },
  idea2: { src: "warm-white-walls", w: 1200, h: 960, alt: "Kitchen with warm greige walls and light wood cabinets, black dome pendants and a waterfall stone island with wood stools", url: "https://www.pinterest.com/pin/859976491388785427/", label: "Warm White Walls in a Japandi Kitchen" },
  idea3: { src: "natural-stone-countertop", w: 1000, h: 1500, alt: "Handleless light oak cabinets with a softly veined gray stone countertop and a small potted plant", url: "https://www.pinterest.com/pin/6333255725365308/", label: "Natural Stone Countertop in a Japandi Kitchen" },
  idea4: { src: "soft-greige-palette", w: 1290, h: 1922, alt: "Greige kitchen wall with three stone and wood pendant lights over a wood island with upholstered wood stools", url: "https://www.pinterest.com/pin/1477812375659209/", label: "Soft Greige Color Palette in a Japandi Kitchen" },
  idea5: { src: "flat-panel-cabinets", w: 736, h: 1104, alt: "Flat-panel light oak cabinets with a concrete-look waterfall island countertop and integrated recessed pulls", url: "https://www.pinterest.com/pin/1152428992181468493/", label: "Flat-Panel Japandi Kitchen Cabinets" },
  idea6: { src: "open-wood-shelving", w: 768, h: 1365, alt: "Multiple floating wood shelves styled with handmade ceramic bowls, plates, books and a small plant above a tiled backsplash", url: "https://www.pinterest.com/pin/14918242512547831/", label: "Open Wood Shelving in a Japandi Kitchen" },
  idea7: { src: "handmade-ceramics", w: 2013, h: 3000, alt: "Open wood shelves displaying handmade charcoal ceramic bowls and plates beside a cast iron teapot and tea cups", url: "https://www.pinterest.com/pin/4610419502728696704/", label: "Handmade Ceramics in a Japandi Kitchen" },
  idea8: { src: "black-accents", w: 928, h: 1232, alt: "Wood kitchen island with a black countertop and black hardware beside open shelving styled with black ceramic vessels", url: "https://www.pinterest.com/pin/7107311909035433/", label: "Black Accents in a Japandi Kitchen" },
  idea9: { src: "organic-pendant-lights", w: 816, h: 1456, alt: "Two white pleated paper lantern pendant lights over a white marble island with a large ceramic vase of dried baby's breath", url: "https://www.pinterest.com/pin/914862422047651/", label: "Organic Pendant Lights in a Japandi Kitchen" },
  idea10: { src: "rounded-island", w: 768, h: 1376, alt: "Kitchen island with a rounded stone corner, ceramic pendant lights, a dark vase of branches and woven counter stools", url: "https://www.pinterest.com/pin/352054895896675047/", label: "Rounded Island Details in a Japandi Kitchen" },
  idea11: { src: "styled-countertops", w: 736, h: 1104, alt: "Kitchen countertop styled with a ceramic teapot set, cutting board and fruit bowl beneath warm under-cabinet lighting", url: "https://www.pinterest.com/pin/685954587043094452/", label: "Intentionally Styled Countertops in a Japandi Kitchen" },
  idea12: { src: "greenery", w: 576, h: 1024, alt: "Kitchen filled with potted plants on the counter, shelves and a side table beside open corner shelving with ceramics", url: "https://www.pinterest.com/pin/1145462486494894020/", label: "Greenery in a Japandi Kitchen" },
  idea13: { src: "textured-backsplash", w: 736, h: 1104, alt: "Sage green fluted zellige-style backsplash tile behind a floating wood shelf and a waterfall stone island with woven stools", url: "https://www.pinterest.com/pin/4592123580931790720/", label: "Textured Backsplash Tiles in a Japandi Kitchen" },
  idea14: { src: "limewash-plaster-walls", w: 572, h: 1024, alt: "Plaster-textured kitchen walls with a large linen dome pendant light, rounded island and woven counter stools", url: "https://www.pinterest.com/pin/1107041152201637917/", label: "Limewash Plaster Walls in a Japandi Kitchen" },
  idea15: { src: "wood-bar-stools", w: 736, h: 1104, alt: "Fluted wood island with woven rope-seat wood bar stools and brass pendant lights over a dark stone floor", url: "https://www.pinterest.com/pin/1146377280178532569/", label: "Natural Wood Bar Stools in a Japandi Kitchen" },
  idea16: { src: "mix-light-dark-wood", w: 736, h: 982, alt: "Kitchen with dark walnut lower cabinets and warm white upper cabinets beside a fluted tile backsplash and terrazzo floor", url: "https://www.pinterest.com/pin/1125968743667286/", label: "Mixing Light and Dark Wood in a Japandi Kitchen" },
  idea17: { src: "hidden-appliances", w: 736, h: 1089, alt: "Light wood cabinetry with a built-in oven flush with the surrounding panels and a small open niche shelf", url: "https://www.pinterest.com/pin/2251868559403952/", label: "Hidden Appliances in a Japandi Kitchen" },
  idea18: { src: "breakfast-nook", w: 1023, h: 1537, alt: "Built-in dining bench with linen cushions and pillows beside a wood table, a wishbone chair and a window full of greenery", url: "https://www.pinterest.com/pin/32651166045012889/", label: "Cozy Japandi Kitchen Breakfast Nook" },
  idea19: { src: "statement-handmade-piece", w: 736, h: 1104, alt: "Open wood shelving styled with a large handmade ceramic vase, wood bowls, a woven basket and cutting boards", url: "https://www.pinterest.com/pin/20055160840954822/", label: "Statement Handmade Piece in a Japandi Kitchen" },
  idea20: { src: "clutter-free", w: 1080, h: 1388, alt: "Airy kitchen island with wood stools open to a garden through glass doors, styled with just one vase of white flowers", url: "https://www.pinterest.com/pin/1093319247083062978/", label: "Clutter-Free Japandi Kitchen Counters" },
  howToWarm: { src: "how-to-feel-warm", w: 736, h: 1104, alt: "Olive green plaster kitchen wall with black dome pendant lights, a black faucet and warm wood cabinetry", url: "https://www.pinterest.com/pin/3025924747215148/", label: "Warming Up a Japandi Kitchen With Earthy Color" },
  mistakes: { src: "common-mistakes", w: 400, h: 400, alt: "Kitchen island with four black-upholstered wood counter stools in front of open shelving styled with ceramics", url: "https://www.pinterest.com/pin/4598386439527657344/", label: "A Well-Proportioned Japandi Kitchen Island" },
  finalThoughts: { src: "final-thoughts", w: 1200, h: 1800, alt: "Sculptural wood slatted pendant lights over an open wood shelf styled with ceramics and trailing plants", url: "https://www.pinterest.com/pin/221661612905490424/", label: "Finished Japandi Kitchen Styling" },
};

function photo(key, productsKey) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "japandi-kitchen-decor", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Choose Warm Wood Cabinets for a Japandi Kitchen",
    photoKey: "idea1",
    paras: [
      "Wood cabinetry immediately gives a Japandi kitchen warmth and character. White oak works particularly well because its natural grain adds visual interest without overwhelming the room.",
      "I prefer a medium or light wood finish over anything extremely orange or glossy. A matte finish usually looks more natural and works beautifully with stone countertops.",
      "You can also mix wood cabinetry with warm white upper cabinets if you want the room to feel lighter.",
      "The goal is simple: let the wood look like wood. Avoid finishes that make it look overly polished or artificial.",
    ],
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Pair Japandi Kitchen Cabinets With Warm White Walls",
    photoKey: "idea2",
    paras: [
      "A warm white wall creates the perfect backdrop for wood cabinetry and natural materials.",
      "Instead of choosing a stark, blue-toned white, look for creamy whites, soft ivory, or very light beige. These shades soften the strong lines that often appear in minimalist kitchens.",
      "Ever notice how some white kitchens look almost clinical? Warm undertones prevent that problem.",
      "I particularly like this combination with oak cabinets, limestone-inspired countertops, and black or bronze hardware.",
    ],
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Add a Natural Stone Countertop",
    photoKey: "idea3",
    paras: [
      "Natural stone brings the earthy quality that makes Japandi kitchen decor feel authentic.",
      "Look for materials with subtle movement rather than dramatic veining. Limestone, travertine, soapstone, and softly veined marble can all work beautifully.",
      "You can also consider quartz with a natural stone appearance if you want easier maintenance.",
      "The key involves keeping the visual movement controlled. One dramatic countertop can easily become the star of the kitchen, while Japandi works better when the entire room shares attention.",
    ],
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Use a Soft Greige Color Palette",
    photoKey: "idea4",
    paras: ["Not ready to commit to an entirely wood kitchen? Try greige.", "A combination of beige and gray creates a soft neutral backdrop that works particularly well with natural wood.", "For a Japandi kitchen, I would build the palette around three or four related shades rather than throwing ten neutrals into the mix.", "Try:"],
    list: ["Warm white", "Soft greige", "Natural oak", "Deep brown", "Muted black accents"],
    after: ["This palette feels sophisticated without looking overly styled."],
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Install Flat-Panel Japandi Kitchen Cabinets",
    photoKey: "idea5",
    paras: [
      "Flat-panel cabinets make an excellent foundation for Japandi design because they keep the visual lines clean.",
      "You do not need elaborate cabinet profiles or decorative trim. Instead, let the material and proportions create the interest.",
      "For an especially calm look, use integrated pulls or simple recessed handles.",
      "Architectural Digest recently highlighted a Japandi-influenced kitchen with white oak cabinetry and paneled appliances, showing how cabinetry can create a streamlined appearance while natural materials keep the room warm.",
      "The trick involves making simple cabinetry feel intentional rather than cheap or boring. Good proportions make a huge difference.",
    ],
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Add Open Wood Shelving to Your Japandi Kitchen",
    photoKey: "idea6",
    paras: [
      "One or two floating wood shelves can break up a wall of cabinetry beautifully.",
      "Use them to display only the things you genuinely enjoy looking at. A few handmade bowls, ceramic mugs, a small plant, or a wooden cutting board can create enough personality.",
      "I would avoid filling every inch of the shelf. Negative space gives each object room to breathe.",
      "Japandi shelving should look curated, not like your kitchen cabinets ran out of storage.",
    ],
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Bring in Handmade Ceramics",
    photoKey: "idea7",
    paras: [
      "This might be one of my favorite Japandi kitchen decor ideas because handmade ceramics instantly add character.",
      "Choose mugs, bowls, vases, and serving dishes with subtle irregularities. Cream, sand, charcoal, taupe, and muted brown work particularly well.",
      "The tiny imperfections actually help the kitchen feel more personal.",
    ],
    quote: { text: "Opt for vintage or reclaimed pieces or something original or handmade rather than mass produced.", cite: "Shanty Wijaya, quoted by Architectural Digest" },
    afterQuote: ["You do not need a huge collection. Three or four beautiful pieces can accomplish more than twenty random accessories."],
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Use Black Accents Sparingly",
    photoKey: "idea8",
    paras: [
      "Japandi kitchens often benefit from a little contrast.",
      "Black hardware, a black faucet, dark stools, or a black pendant light can ground an otherwise soft palette.",
      "But keep the amount controlled. Too much black can shift the room toward industrial or contemporary design.",
      "I like using black as punctuation rather than the entire sentence.",
      "A black faucet against warm oak cabinetry, for example, creates just enough contrast without overpowering the room.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Choose Organic Pendant Lights",
    photoKey: "idea9",
    paras: [
      "Lighting can completely change the feeling of a Japandi kitchen.",
      "Look for pendants made from paper, linen, rattan, wood, or other natural-looking materials. Rounded silhouettes work particularly well because they soften the straight lines of cabinetry.",
      "Paper lantern-style lighting also connects beautifully with Japanese-inspired interiors.",
      "Keep the lighting warm rather than extremely cool. You want the kitchen to feel inviting once the sun goes down.",
    ],
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Add a Japandi Kitchen Island With Rounded Details",
    photoKey: "idea10",
    paras: [
      "If you have enough space, consider softening a rectangular island with rounded stools, curved pendant lights, or subtly rounded corners.",
      "The island should still feel functional. Give yourself enough room for food preparation, seating, and movement around the space.",
      "In one Bengaluru home, designer Aishwarya Govind combined Japandi influences with an island that doubled as a breakfast bar because the homeowners enjoyed cooking and entertaining.",
      "That example highlights something I always keep in mind: good kitchen design should support the way you actually live.",
      "Pretty does not count for much if nobody can comfortably move around the island.",
    ],
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Style the Countertops With Intention",
    photoKey: "idea11",
    paras: [
      "Japandi kitchens do not require completely empty countertops.",
      "Instead, choose a few functional objects that also look beautiful.",
      "Try a wooden cutting board, ceramic utensil holder, stone bowl, small vase, or simple coffee setup.",
      "The easiest rule involves asking yourself whether each item serves a purpose or genuinely adds beauty.",
      "If the answer is no, put it away.",
    ],
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Bring Greenery Into Your Japandi Kitchen",
    photoKey: "idea12",
    paras: [
      "Plants bring life into an otherwise neutral kitchen.",
      "Choose greenery with simple shapes rather than plants that create visual chaos. Olive branches, eucalyptus, herbs, small trees, and understated potted plants can work well.",
      "A small herb garden also makes sense because it combines decoration with function.",
      "Architectural Digest notes that Japandi interiors often emphasize connections with nature through greenery, natural materials, and indoor-outdoor relationships.",
      "You do not need to turn your kitchen into a jungle. One beautiful plant can create enough contrast.",
    ],
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "Use Textured Japandi Kitchen Backsplash Tiles",
    photoKey: "idea13",
    paras: [
      "A completely plain backsplash can sometimes make a minimalist kitchen feel flat.",
      "Instead, introduce subtle texture with handmade-look ceramic tiles, zellige-inspired tiles, plaster, or softly textured stone.",
      "Stick with quiet colors such as cream, warm white, taupe, or soft gray.",
      "I especially like slightly irregular tiles because they add the handcrafted quality that works so well with Japandi interiors.",
      "The backsplash should support the cabinetry, not compete with it.",
    ],
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Try a Limewash or Plaster-Inspired Wall Finish",
    photoKey: "idea14",
    paras: [
      "Want your Japandi kitchen to feel a little more architectural?",
      "A limewash or plaster-inspired finish can add depth without introducing a busy pattern.",
      "Soft variations in the wall surface create exactly the kind of subtle imperfection that works with the wabi-sabi side of Japandi design.",
      "Designer Shanty Wijaya used plaster, concrete, limestone, and reclaimed wood in a Japandi-style home, showing how different natural textures can create complexity even when the palette remains muted.",
      "This approach works especially well in open-plan kitchens because the wall finish can visually connect the kitchen with nearby living areas.",
    ],
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Add Natural Wood Bar Stools",
    photoKey: "idea15",
    paras: [
      "Bar stools can make or break a kitchen island.",
      "For Japandi style, choose stools with simple silhouettes and natural materials. Oak, ash, walnut, woven seats, paper cord, and rattan can all work.",
      "Avoid anything overly ornate.",
      "A simple wooden stool with a curved seat often looks more sophisticated than an expensive stool covered in unnecessary details.",
      "And yes, your back will probably appreciate a comfortable shape too.",
    ],
  },
  {
    n: "16",
    productsKey: "idea16",
    title: "Mix Light and Dark Wood in Your Japandi Kitchen",
    photoKey: "idea16",
    paras: [
      "You do not have to use one wood tone throughout the kitchen.",
      "In fact, subtle variation can make the space feel much more collected.",
      "Try light oak cabinets with a darker walnut stool or medium wood cabinetry with a deeper-toned dining table.",
      "Just keep the undertones compatible. Mixing warm woods usually works more naturally than combining a very orange wood with a cool gray wood.",
      "Think variation, not wood chaos.",
    ],
  },
  {
    n: "17",
    productsKey: "idea17",
    title: "Hide Appliances Behind Japandi Kitchen Cabinetry",
    photoKey: "idea17",
    paras: [
      "Minimalism becomes much easier when appliances stop dominating the room.",
      "Panel-ready refrigerators and dishwashers can disappear into the cabinetry, creating a cleaner visual line.",
      "You can also keep smaller appliances inside an appliance garage or dedicated cabinet.",
      "This does not mean you need to hide every coffee maker you own. A beautiful coffee station can actually become part of the design.",
      "The goal involves controlling visual clutter rather than pretending kitchens do not contain appliances.",
    ],
  },
  {
    n: "18",
    productsKey: "idea18",
    title: "Create a Cozy Japandi Kitchen Breakfast Nook",
    photoKey: "idea18",
    paras: [
      "If your kitchen has an unused corner, turn it into a simple breakfast nook.",
      "Use a compact wood table, a bench with natural upholstery, and a small pendant light.",
      "This adds the Scandinavian comfort side of Japandi without requiring lots of decorative accessories.",
      "It also makes the kitchen feel more social. After all, kitchens often become the place where everyone gathers anyway.",
      "Why not design for that reality?",
    ],
  },
  {
    n: "19",
    productsKey: "idea19",
    title: "Add One Statement Handmade Piece",
    photoKey: "idea19",
    paras: [
      "Japandi does not mean every object needs to disappear into the background.",
      "One handmade statement piece can actually make the room feel more personal.",
      "Try an oversized ceramic vase, sculptural bowl, handcrafted pendant, vintage wooden stool, or unique piece of artwork.",
      "House Beautiful notes that designers associate Japandi with craftsmanship and handmade imperfections, which can add visual interest and character.",
      "I would rather see one unusual piece that tells a story than ten decorative objects purchased simply to fill empty space.",
    ],
  },
  {
    n: "20",
    productsKey: "idea20",
    title: "Keep Your Japandi Kitchen Decor Clutter-Free",
    photoKey: "idea20",
    paras: [
      "This final idea sounds obvious, but it might matter more than everything else.",
      "Japandi depends on visual calm. If every countertop contains appliances, jars, decorative signs, cookbooks, plants, trays, and approximately seventeen things you forgot to put away, the aesthetic disappears quickly.",
      "Start by removing anything you rarely use.",
      "Then group the objects you actually need.",
      "Finally, give your favorite pieces enough space around them.",
      "Architectural Digest recommends starting with decluttering when bringing Japandi style into a home because the aesthetic emphasizes minimalism and a less-is-more approach.",
    ],
    quote: { text: "Personally I think a space, especially your own home, should feel good for you.", cite: "Laila Rietbergen, quoted by Architectural Digest" },
    afterQuote: ["That advice might actually capture Japandi better than any decorating rule."],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const quote = idea.quote ? `<blockquote><p>&ldquo;${idea.quote.text}&rdquo;</p><cite>&mdash; ${idea.quote.cite}</cite></blockquote>` : "";
  const afterQuote = idea.afterQuote ? idea.afterQuote.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const photoHtml = idea.photoKey ? photo(idea.photoKey, idea.productsKey) : (idea.productsKey ? productGrid(idea.productsKey) : "");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${list}
    ${after}
    ${quote}
    ${afterQuote}
    ${photoHtml}`;
}

const body = `
<p>A beautiful kitchen does not need to shout for attention. Japandi kitchen decor ideas work because they create a space that feels calm, warm, practical, and quietly beautiful. Think natural wood, soft neutrals, simple cabinetry, handmade ceramics, and just enough texture to keep everything from looking flat.</p>
<p>I&rsquo;ve always liked kitchens that look collected rather than decorated within an inch of their lives. Japandi gets that balance right. You can keep the counters fairly clear without ending up with a kitchen that feels cold or completely personality-free.</p>
<p>And honestly, who wants a kitchen that looks like nobody actually cooks in it?</p>
${photo("hero", "hero")}

<h2>What Is Japandi Kitchen Design?</h2>
<p>Japandi combines Japanese design principles with Scandinavian design. Japanese interiors bring simplicity, natural materials, craftsmanship, and an appreciation for imperfection, while Scandinavian design contributes warmth, comfort, functionality, and approachable minimalism.</p>
<p>Architectural Digest describes Japandi as an &ldquo;East-meets-West design movement&rdquo; that blends Japanese wabi-sabi with Scandinavian hygge. Both traditions also emphasize simplicity, natural elements, comfort, and sustainability.</p>
<blockquote><p>&ldquo;It blends Japanese artistic elements and wabi-sabi philosophy with Scandinavian comfort and warmth or hygge.&rdquo;</p><cite>&mdash; Shanty Wijaya, interior designer, quoted by Architectural Digest</cite></blockquote>
<p>For a kitchen, that combination makes a lot of sense. Kitchens already need to work hard, so the Japandi approach keeps the design functional while making the room feel peaceful.</p>
<p>You will usually see warm wood, earthy neutrals, clean lines, natural stone, simple lighting, organic shapes, and limited decoration.</p>
<p>The important part involves balance. You do not need to make every surface beige and remove every decorative object from the room. Japandi should feel intentional, not empty.</p>
${photo("whatIsJapandi", "whatIs")}

<h2>How Do You Make a Kitchen Look Japandi?</h2>
<p>Start with the big visual elements before you worry about accessories. Your cabinetry, flooring, countertops, walls, and lighting will create most of the atmosphere.</p>
<p>I usually think about a Japandi kitchen through five simple layers:</p>
<ul>
  <li>Natural materials: wood, stone, ceramic, linen, rattan, and plaster</li>
  <li>Warm neutrals: cream, beige, taupe, greige, warm white, and earthy brown</li>
  <li>Simple shapes: clean cabinetry and uncomplicated furniture</li>
  <li>Texture: grain, woven materials, handmade ceramics, and stone</li>
  <li>Intentional styling: fewer objects, but better-selected objects</li>
</ul>
<p>Architectural Digest notes that Japandi interiors commonly use neutral tones, natural materials, greenery, organic shapes, and an appreciation for craftsmanship.</p>
<blockquote><p>&ldquo;The common love for craftsmanship is also found in Japandi style interiors.&rdquo;</p><cite>&mdash; Laila Rietbergen, author of Japandi Living, quoted by Architectural Digest</cite></blockquote>
<p>That last point matters more than people realize. If you simply install flat beige cabinets and call the kitchen Japandi, you will probably end up with a room that looks unfinished.</p>
<p>The magic comes from contrast, texture, craftsmanship, and restraint.</p>
${photo("howToMake", "howTo")}

<h2>20 Japandi Kitchen Decor Ideas</h2>
<p>Now for the fun part. These Japandi kitchen decor ideas range from larger design choices to small styling details, so you can use them whether you are planning a full renovation or simply refreshing your existing kitchen.</p>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Make Japandi Kitchen Decor Feel Warm Instead of Cold</h2>
<p>This question comes up a lot because minimalism can easily become sterile.</p>
<p>The solution involves layering texture instead of adding clutter.</p>
<p>Use wood against stone. Pair smooth cabinetry with handmade ceramics. Add woven stools beside a clean-lined island. Introduce warm lighting against pale walls.</p>
<p>You can also use earthy colors to soften the space.</p>
<p>Try:</p>
<ul>
  <li>Warm beige</li>
  <li>Mushroom</li>
  <li>Taupe</li>
  <li>Soft brown</li>
  <li>Muted olive</li>
  <li>Charcoal</li>
  <li>Cream</li>
  <li>Warm white</li>
</ul>
<p>The combination creates visual warmth without requiring bright colors.</p>
<p>And remember, Japandi does not mean boring. It means intentional.</p>
${photo("howToWarm", "warm")}

<h2>Common Mistakes to Avoid With Japandi Kitchen Design</h2>
<p>You can get the overall concept right and still miss the feeling.</p>
<p>One common mistake involves using too much white. A completely white kitchen with a few wooden accessories can look Scandinavian, but it may not capture the earthy depth that Japandi often brings.</p>
<p>Another mistake involves buying too many matching accessories. Perfect coordination can actually remove the character that handmade and natural pieces provide.</p>
<p>I would also avoid:</p>
<ul>
  <li>Overdecorating open shelves</li>
  <li>Using too many different wood tones</li>
  <li>Choosing extremely cool white lighting</li>
  <li>Adding excessive black accents</li>
  <li>Using glossy finishes everywhere</li>
  <li>Filling every empty countertop space</li>
  <li>Mixing too many competing patterns</li>
</ul>
<p>The best Japandi kitchen decor usually feels quiet, tactile, functional, and personal.</p>
${photo("mistakes", "mistakes")}

<h2>Final Thoughts on Japandi Kitchen Decor Ideas</h2>
<p>The beauty of these Japandi kitchen decor ideas comes from how naturally they combine practicality with warmth. You do not need to completely remodel your kitchen to get the feeling.</p>
<p>Start with the biggest visual element you can change. Maybe that means warm wood cabinetry, a softer wall color, natural stone, or better lighting. Then slowly introduce handmade ceramics, greenery, woven textures, and a few meaningful pieces.</p>
<p>Most importantly, resist the urge to decorate every empty corner.</p>
<p>A good Japandi kitchen should give your eyes somewhere to rest.</p>
<p>For me, that is the real appeal. The kitchen still feels like a place where people cook, eat, talk, make coffee, leave a cutting board on the counter, and occasionally forget to unload the dishwasher. It simply does all of that with a little more calm.</p>
<p>And honestly, if your kitchen can make Monday morning coffee feel slightly more peaceful, I&rsquo;d call that a pretty successful design choice.</p>
`;

module.exports = { body };
