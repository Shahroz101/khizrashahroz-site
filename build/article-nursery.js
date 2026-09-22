// Body content for the "23 Nursery Decor Ideas That Feel Cozy, Practical,
// and Beautiful" post. Images sourced from Pinterest pins the user
// selected and provided directly; each is credited back to its pin per
// their request. Note: the user's list of 29 links included one exact
// duplicate (pin.it/7nFow6xYL was supplied twice) — only the 28 unique
// links were fetched, and each is used exactly once below.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PIN = {
  hero: { src: "hero", w: 450, h: 563, alt: "Cozy sage green nursery with a white crib, woven baskets and a soft rug", url: "https://www.pinterest.com/pin/12807180183426583/", label: "Nursery Decor Styling" },
  whatMakesGood: { src: "what-makes-good-nursery", w: 1199, h: 1788, alt: "Nursery reading nook layering a book display, floor cushion, poufs and warm lighting", url: "https://www.pinterest.com/pin/422281213070986/", label: "Layered Nursery Design" },
  colorScheme: { src: "color-scheme", w: 906, h: 1609, alt: "Sage green nursery wall paired with a boucle chair and a natural jute rug", url: "https://www.pinterest.com/pin/324259241947193148/", label: "Nursery Color Scheme" },
  warmNeutral: { src: "warm-neutral-nursery", w: 1024, h: 1536, alt: "Warm beige nursery with a wood crib, moon wall decal and a boho pom pom rug", url: "https://www.pinterest.com/pin/1096978421766060662/", label: "Warm Neutral Nursery" },
  statementWall: { src: "statement-wall", w: 1024, h: 1536, alt: "Nursery with gray striped statement wallpaper behind a wood crib and a name wall decal", url: "https://www.pinterest.com/pin/4595853169258544768/", label: "Nursery Statement Wall" },
  accentWall: { src: "soft-accent-wall", w: 906, h: 1609, alt: "Nursery with a soft yellow accent wall, matching curtains and a sun wall decoration", url: "https://www.pinterest.com/pin/71213237853778530/", label: "Soft Nursery Accent Wall" },
  wallArt: { src: "nursery-wall-art", w: 1000, h: 1500, alt: "Three framed animal illustrations of a tiger, lion and zebra above a nursery crib", url: "https://www.pinterest.com/pin/173459023143153638/", label: "Nursery Wall Art" },
  readingCorner: { src: "cozy-reading-corner", w: 896, h: 1200, alt: "Dark wood rocking chair with a side table and lamp in a sage green nursery reading corner", url: "https://www.pinterest.com/pin/171277592074403555/", label: "Cozy Nursery Reading Corner" },
  bookshelf: { src: "nursery-bookshelf", w: 1024, h: 1536, alt: "Wall-mounted wood ledge shelves displaying children's books above a nursery window", url: "https://www.pinterest.com/pin/574068283780701230/", label: "Nursery Bookshelf" },
  naturalWood: { src: "natural-wood-furniture", w: 736, h: 1104, alt: "Nursery changing area with natural wood dresser, shelves, woven baskets and a gallery wall", url: "https://www.pinterest.com/pin/1145321749019229520/", label: "Natural Wood Nursery Furniture" },
  vintageDresser: { src: "vintage-dresser", w: 1000, h: 1500, alt: "Vintage-style dark wood dresser topped with a woven basket in a sage green nursery", url: "https://www.pinterest.com/pin/420805158957918163/", label: "Vintage Nursery Dresser" },
  changingStation: { src: "changing-station", w: 768, h: 1376, alt: "Compact nursery changing station with a rolling cart, wipes, folded clothing and hanging outfits", url: "https://www.pinterest.com/pin/422281212980424/", label: "Nursery Changing Station" },
  rug: { src: "soft-nursery-rug", w: 896, h: 1200, alt: "Wood crib on a scalloped sage green nursery rug beneath a hanging moon and stars mobile", url: "https://www.pinterest.com/pin/1008032329119419418/", label: "Soft Nursery Rug" },
  lighting: { src: "soft-nursery-lighting", w: 1145, h: 1374, alt: "Soft glowing cloud-shaped nursery wall lights above a bed", url: "https://www.pinterest.com/pin/4593179141450414976/", label: "Soft Nursery Lighting" },
  nightLight: { src: "nursery-night-light", w: 1024, h: 1536, alt: "Warm glowing teddy bear-shaped night light beside a nursery crib", url: "https://www.pinterest.com/pin/17451517303761561/", label: "Nursery Night Light" },
  sageGreen: { src: "sage-green-nursery", w: 896, h: 1344, alt: "Sage green nursery wall with cloud decals, a pendant light and a patterned rug", url: "https://www.pinterest.com/pin/2462974793367326/", label: "Soft Sage Green Nursery" },
  beigeCream: { src: "beige-cream-nursery", w: 864, h: 1536, alt: "All white and cream nursery with a wood crib and simple animal line art", url: "https://www.pinterest.com/pin/434667801561860719/", label: "Beige and Cream Nursery" },
  canopy: { src: "nursery-canopy", w: 1023, h: 1537, alt: "Sheer fabric canopy draped above a wood crib in a soft blush nursery", url: "https://www.pinterest.com/pin/1093248878326667075/", label: "Nursery Canopy" },
  baskets: { src: "decorate-with-baskets", w: 1024, h: 1536, alt: "Floating shelves with woven baskets used for storage above a nursery changing table", url: "https://www.pinterest.com/pin/4925880839756055/", label: "Nursery Storage Baskets" },
  personalized: { src: "personalized-detail", w: 1200, h: 1200, alt: "Wood name sign with animal cutouts spelling a baby's name above a nursery crib", url: "https://www.pinterest.com/pin/4603452994408119680/", label: "Personalized Nursery Detail" },
  galleryWall: { src: "gallery-wall", w: 564, h: 846, alt: "Simple nursery gallery wall of framed prints above open storage cubbies with baskets", url: "https://www.pinterest.com/pin/184295809751384085/", label: "Nursery Gallery Wall" },
  curtains: { src: "curtains", w: 1000, h: 1500, alt: "Blush pink curtains framing a nursery window beside a wood crib and gold pendant light", url: "https://www.pinterest.com/pin/9710955444177679/", label: "Nursery Curtains" },
  ottoman: { src: "nursery-ottoman", w: 1000, h: 1500, alt: "White boucle nursery reading chair with a matching round ottoman and small side table", url: "https://www.pinterest.com/pin/242209286206071149/", label: "Comfortable Nursery Ottoman" },
  natureIn: { src: "bring-nature-in", w: 737, h: 1313, alt: "Nursery corner with real trailing houseplants on a shelf and a hanging planter beside a rocking chair", url: "https://www.pinterest.com/pin/16888567448679958/", label: "Bringing Nature Into the Nursery" },
  roomToGrow: { src: "room-to-grow", w: 1024, h: 1024, alt: "Simple white dresser and oval crib in a timeless neutral nursery designed to grow with a child", url: "https://www.pinterest.com/pin/68750177495/", label: "Nursery With Room to Grow" },
  clutterFree: { src: "clutter-free", w: 1024, h: 1536, alt: "Organized nursery wall shelving with labeled baskets and bins keeping toys and clothes tidy", url: "https://www.pinterest.com/pin/1900024839965161/", label: "Clutter-Free Nursery Storage" },
  feelExpensive: { src: "feel-expensive", w: 1024, h: 1820, alt: "Coordinated botanical print gallery wall in green and tan tones above a nursery crib", url: "https://www.pinterest.com/pin/267049452943130647/", label: "Nursery Decor That Feels Expensive" },
  finalThoughts: { src: "final-thoughts", w: 800, h: 1200, alt: "Elegant blush pink nursery with a tufted ottoman, crystal pendant and floral artwork", url: "https://www.pinterest.com/pin/8233211829670181/", label: "Nursery Decor Final Look" },
};

const PRODUCTS = {
  readingCorner: [
    { asin: "B0H3982PPV", title: "Rocking Chair Nursery, Upholstered Glider Rocker Cushions Indoor, Comfy Rocking Accent Chair with Armrests, Cozy White Boucle Rocking Armchair for Living Room Bedroom Reading Nook, Adults", w: 1500, h: 1500 },
    { asin: "B072VH7Q29", title: "Delta Children Blair Slim Nursery Glider Swivel Rocker Chair, Cream", w: 1197, h: 1500 },
  ],
  ottoman: [
    { asin: "B0B1TCSXVM", title: "Storkcraft Premium Hoop Glider & Ottoman, Natural/Beige", w: 1445, h: 1500 },
    { asin: "B0DQQ3RR14", title: "GIANTEX Rocking Chair Nursery, Teddy Upholstered Glider Rocker Chair w/High Backrest, Armrests & Rubber Wood Feet, Modern Sherpa Rocking Accent Chair for Living Room, Bedroom & Office, Beige", w: 1353, h: 1500 },
  ],
  statementWall: [
    { asin: "B0H4QMX17X", title: "Pink and White Cream Striped Wallpaper Peel and Stick Girls Nursery Self-Adhesive Removable Waterproof Wallpaper for Bedroom Kitchen Bathroom (Blush, 17.32\"x 118.11\")", w: 1500, h: 1500 },
    { asin: "B0GGZ1VFMS", title: "Peel and Stick Wallpaper for Nursery Pink Cherry Blossom Waterproof", w: 1500, h: 1500 },
  ],
  accentWall: [
    { asin: "B0GQB6BGQ5", title: "Peel and Stick Wallpaper for Nursery Pink Cute Bow Leaf Waterproof", w: 1500, h: 1500 },
    { asin: "B0GTKHLQT2", title: "Beige Plaid Peel and Stick Wallpaper Removable Checkered Contact Paper, Gingham Self-Adhesive Waterproof Vinyl Roll for Shelf Drawer Liner Bedroom Nursery 17.3\"x80\"", w: 1500, h: 1500 },
  ],
  wallArt: [
    { asin: "B0FX9R88KY", title: "Framed Cute Animal Wall Art Nursery Decor Set of 3, Watercolor Elephant Giraffe Lion Canvas, Whimsical Wildlife Pictures Print, Nursery Wall Decor for Kids’ Bedroom Daycare – 16x12 inch", w: 1500, h: 980 },
    { asin: "B0CLW97SF5", title: "Baby Safari Nursery Wall Decor - Set of 3 Pictures Cute Animal Wall Prints on Canvas Jungle Nursery Safari Decor Gifts for Baby Boys and Girls Room, Framed Wall Art 12 x 16 Inch", w: 1489, h: 1295 },
  ],
  galleryWall: [
    { asin: "B0D5D96TQN", title: "Baby Safari Nursery Wall Art Decor 11x16 Inch Set of 3 Wood Framed", w: 1500, h: 1500 },
    { asin: "B0FSS6MHNC", title: "Woodland Animal Nursery Wall Art Decor Set of 3 Wood Framed Wall Prints", w: 1500, h: 1500 },
  ],
  bookshelf: [
    { asin: "B0C6T7192K", title: "Fixwal Floating Nursery Book Shelves for Wall, 16.5 Inches, Set of 3, White", w: 1215, h: 1500 },
    { asin: "B0DSZWWZKB", title: "birola Nursery Shelves with Beads Design - 32 Inches Wall Book Shelves Set of 3, Space-Saving Nursery Book Shelves for Kids Room, Bedroom and Study Room(Natural)", w: 1444, h: 1500 },
  ],
  naturalWood: [
    { asin: "B0DK13QLX9", title: "3Pack Nursery Book Shelves, Solid Wood Floatingshelf for Wall, Walnut Brown", w: 1500, h: 1500 },
    { asin: "B0D953XVJ4", title: "VIVIKA Nursery Book Shelves, Natural Rattan Scalloped, 15.8\" W, Set of 2", w: 1449, h: 1500 },
  ],
  vintageDresser: [
    { asin: "B0CZKLBJ4M", title: "Walnut Fluted 4 Drawers Dresser for Bedroom, Chest of Drawers with Metal Wide Handle, Wooden Dresser for Closet, Bedroom, Living Room, 23.6\" x 14.9\"D x 30.7\" H", w: 1500, h: 1500 },
    { asin: "B0CFLF4DF6", title: "Furnulem Rustic Brown Dressers for Bedroom, 5 Drawer Dresser for Closet", w: 1334, h: 1500 },
  ],
  roomToGrow: [
    { asin: "B0DMM1P14R", title: "woodtalks 3 Drawer Dresser, Wood Chest Drawers with Storage for Closet, Bedroom, Living Room and Hallway, Drawers Dresser Bedside Nightstand, Walnut, Brown", w: 1500, h: 1500 },
    { asin: "B0BWY7NK35", title: "Furnulem White Tall Dresser for Bedroom, 5 Fabric Bins Tall Nightstand", w: 743, h: 1500 },
  ],
  changingStation: [
    { asin: "B0FH1M6ZMD", title: "Fortella Baby Diaper Caddy, 3 Tier Rolling Cart for Baby Essentials, Taupe", w: 1500, h: 1469 },
    { asin: "B0F1CCB62Y", title: "Modanais Baby Diaper Caddy Organizer Cart - 3 Tier Rolling Cart, Off White", w: 1500, h: 1465 },
  ],
  rug: [
    { asin: "B0FHGNFZNW", title: "Area Rugs 5x7 Living Room Washable Modern Rug, Neutral Beige Soft Non Slip Rugs Ultra-Thin Indoor Carpet for Bedroom Dining Room Nursery Home Office", w: 1500, h: 1500 },
    { asin: "B0C2Z1T5GV", title: "Nakagishi Boho 5x7 Area Rug Living Room Rugs Machine Washable Beige/Brown", w: 1500, h: 1500 },
  ],
  hero: [
    { asin: "B0FRN4QRM4", title: "5x7 Solid Beige Area Rugs for Living Room, Geometric Washable Rug", w: 1500, h: 1500 },
    { asin: "B0G4FZBRCK", title: "GarveeHome Scalloped Washable 5x7 Area Rugs for Living Room Non Slip, Beige", w: 1500, h: 1500 },
  ],
  lighting: [
    { asin: "B0G23HXF8S", title: "Tip perk Cloud & Moon Lights - Floating Cloud & Moon Wall Lamps", w: 1500, h: 1500 },
    { asin: "B0FRR35T3D", title: "Cloud Light Battery-Operated Wall Lamp for Nursery Kids Bedroom & Baby Room with Pull-String Switch 3V 3000K Warm Night Light Hanging Night Lights (No Charging Needed)", w: 1500, h: 1500 },
  ],
  nightLight: [
    { asin: "B0FWXJS95L", title: "KALEOLI Cloud Night Light 2 Pack for Nursery Decor - Toddler Night Light", w: 1500, h: 1500 },
    { asin: "B0BMJSM74K", title: "Cloud Light - Floating Cloud Wall Lamp | Baby Nursery Cloud Night Light", w: 1500, h: 1500 },
  ],
  warmNeutral: [
    { asin: "B0DL529V5W", title: "Boho Cloud Moon Crib Mobile Boho Baby Mobile for Crib Neutral Clouds, Moon & Stars Design Nursery Mobile for Boys & Girls", w: 1500, h: 1500 },
    { asin: "B0BBZZ1SXT", title: "let's make Boho Baby Crib Mobile for Boys and Girls, Stars, Clouds, Moon", w: 1500, h: 1500 },
  ],
  whatMakesGood: [
    { asin: "B0D259MJZL", title: "Cloud Crib Mobile for Girls & Boys, Boucle Cloud Baby Mobile for Crib Neutral Boho Nursery Mobile, Stars and Moon", w: 1500, h: 1500 },
    { asin: "B0D543WKJJ", title: "EERKEOD Baby Crib Mobile Bear Nursery Mobile for Boys Girls Teddy Velvet Mobile Nursery Decor for Infant Bedroom Hanging Baby Mobile for Bassinet Newborn Baby Gift（Brown Bear）", w: 1500, h: 1500 },
  ],
  sageGreen: [
    { asin: "B0F8C7S2V8", title: "Sage Green Inspirational Floral Pillow Covers 18x18, Wildflower Nursery Decor, How Wonderful Life Is Now You're in the World Decorative Throw Pillow Covers for Kids Room Playroom, Double-Sided", w: 1500, h: 1372 },
    { asin: "B0GVYM9P3C", title: "Sage Green Girl Nursery Pillow Covers 18x18 inches, Vintage Nursery Decor Throw Pillow Covers, You'll Never Know Dear How Much I Love You Decorative Pillowcases for Girls Room Bedroom Playroom", w: 1500, h: 1367 },
  ],
  colorScheme: [
    { asin: "B0F7X9VSH8", title: "PANDICORN Stay Cozy Sage Green Pillow Cover 12x20 Inch, Lumbar Pillow Case", w: 1006, h: 606 },
    { asin: "B0CYX465YH", title: "2 Pack Sage Green Gingham Ruffle Throw Pillow Covers 18''x18''", w: 1500, h: 1500 },
  ],
  beigeCream: [
    { asin: "B0H4LLHJJB", title: "Vintage Baby Lion Wall Art, Safari Nursery Animal Print, Beige And Brown Lion Poster for Room Decor", w: 878, h: 1298 },
    { asin: "B0H4LD6TW7", title: "Vintage Baby Giraffe Wall Art, Neutral Safari Animal Print, Cream And Tan Giraffe Poster for Room Decor", w: 878, h: 1298 },
  ],
  canopy: [
    { asin: "B08PRWFCTZ", title: "Wonder Space Elegant Kids Bed Canopy - Lace Chiffon Netting with Pom Pom, Princess Girls Fairy Dream Tent, Nursery Room Baby Crib Hanging Curtain Mosquito Net Children Reading Nook Decoration (Beige)", w: 655, h: 1443 },
    { asin: "B0CGJ23WHY", title: "Wonder Space Kids Bed Canopy with Ruffles, Pastel Neutral Color for Boys & Girls, Frilled Cotton Tent Nursery Room Baby Crib Hanging Curtain Mosquito Netting Children Reading Nook Decoration (Ivory)", w: 710, h: 1448 },
  ],
  baskets: [
    { asin: "B0GJDW2CDL", title: "5 Pack Small Woven Storage Baskets for Shelves, Gift Baskets Empty", w: 1389, h: 1286 },
    { asin: "B0D31SM7FS", title: "Beautiful Storage Basket Set of 4 - Natural Jute Rope Bins for Shelves", w: 1500, h: 1500 },
  ],
  clutterFree: [
    { asin: "B0DKHZ1JLG", title: "NaturalCozy 11.8\"x8\"x4.5” Storage Baskets for Shelves 3 Pack | Cotton Rope Woven Small Baskets for Organizing | Small Storage Bins for Nursery, Bathroom, Closet, Cube Shelf, Decorative, Gift Basket", w: 1500, h: 1154 },
    { asin: "B0C77KDKZ5", title: "4 Pack Storage Baskets for Organizing, Woven Baskets for Shelves - Perfect for Toys, Books, Towels, and Clothes, Durable Gift Basket Bins Toy Storage, 12.7''Lx9''Wx7.8''H, Brown & White", w: 1500, h: 1352 },
  ],
  personalized: [
    { asin: "B0GVPDJ3S5", title: "Personalized Wooden Name Signs 10 INCH Small Nursery Wall Decor Custom Kids Room Door Tags Baby Shower Gift Birthday Party Decor Wooden Name Wall Art Custom Baby Name Sign", w: 1500, h: 1438 },
    { asin: "B09NMGR365", title: "Wooden Name Sign 8-35\" Wide Personalized Letters for Nursery Art Wall Room Decor Baby Shower Occasion Family Name Sign Nameplate Wood Plaque", w: 973, h: 789 },
  ],
  curtains: [
    { asin: "B0CQXLHQL1", title: "Aiyufeng Blush Pink Sheer Curtains 84 Inches Long 2 Panels Set, Light Filtering Soft Airy Voile Rod Pocket Baby Pink Sheer Window Drapes for Bedroom Living Room, Each 40Wx84L Inches", w: 1500, h: 1500 },
    { asin: "B0F26NXD3L", title: "Dusty Pink Ruffle Curtains 84 Inches Long for Bedroom Living Room Rod Pocket Light Filtering Soft Victorian Romantic Ruffle Pleated Curtains for Girls Nursery Room Window Privacy Decor 52x84, Blush", w: 1500, h: 1500 },
  ],
  natureIn: [
    { asin: "B0GXF493H1", title: "Faux Ivy Eucalyptus Vine Fake Hanging Plants in White Pot, Medium", w: 516, h: 1458 },
    { asin: "B0H4T6W1KX", title: "Trailing Artificial Pothos Plant with Ceramic Pot, Potted Faux Greenery with Adjustable Drooping Vines,Fake Houseplant for Home Office High Shelf, Cabinet Top & Vertical Indoor Decor (White Pot)", w: 1500, h: 1500 },
  ],
  feelExpensive: [
    { asin: "B0DZ283Z7D", title: "Wood Framed Wildflower Nursery Wall Art Set of 2, Boho Flower Botanical Wall Decor Paintings, Baby Girl Nurseries Pictures Posters Prints for Nursery Baby Room Bedroom Home Decoration 12x16 Inch", w: 1500, h: 1131 },
    { asin: "B0G3NCB4TW", title: "Framed Wildflower Wall Art Set of 3, Pink Floral Canvas Wall Decor Pictures, Vintage Flower Botanical Paintings, Nursery Flowers Butterfly Posters Prints for Bedroom Living Room 12x16 Inch", w: 1500, h: 921 },
  ],
  finalThoughts: [
    { asin: "B0H3FDBX27", title: "OPFDE Wood Framed Botanical Wall Art Set of 3, Neutral Wildflower Wall Decor, Minimalist Beige Stripe Poster Print, Vintage Cottagecore Farmhouse Floral Artwork for Living Room Bathroom 12x16 Inch", w: 1482, h: 953 },
    { asin: "B0H6WR6PXR", title: "Tinonedraw Dusty Pastel Floral Framed Canvas Wall Art Set, Boho Neutral Flower Wall Decor, Shabby Chic Wildflower Artwork, French Cottage Botanical Art Prints for Bedroom Living Room Nursery 16\"x24\"x3", w: 1500, h: 1055 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "nursery-decor-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "nursery-decor", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(key)}`;
}

const ideas = [
  {
    n: "01",
    title: "Create a Warm Neutral Nursery",
    photoKey: "warmNeutral",
    paras: [
      "Warm beige, ivory, cream, taupe, and soft greige can create a beautiful neutral nursery without making the room feel bland.",
      "Try combining different textures instead of introducing lots of colors. A linen curtain, woven basket, boucle chair, wooden furniture, and textured rug can give a neutral room plenty of depth.",
      "My favorite trick: keep the walls simple and let texture do the decorating.",
    ],
  },
  {
    n: "02",
    title: "Add a Statement Nursery Wall",
    photoKey: "statementWall",
    paras: [
      "A statement wall can give the room a focal point without forcing you to decorate every square inch.",
    ],
    paraBeforeList: "You could use:",
    list: ["Removable wallpaper", "Painted arches", "Simple geometric shapes", "Vertical paneling", "Floral wallpaper", "A soft mural"],
    after: [
      "I especially like removable wallpaper for nurseries because it lets you experiment without committing to a permanent design.",
    ],
  },
  {
    n: "03",
    title: "Use a Soft Nursery Accent Wall",
    photoKey: "accentWall",
    paras: [
      "An accent wall works particularly well behind the crib or changing table.",
      "Choose a muted shade rather than an extremely saturated color. Sage green, dusty blue, warm beige, clay, and muted terracotta can all create visual interest without overpowering the room.",
      "Ever notice how some colorful nurseries still feel incredibly calm? Designers often balance stronger colors with plenty of white, cream, natural wood, or neutral textiles.",
    ],
  },
  {
    n: "04",
    title: "Add Nursery Wall Art",
    photoKey: "wallArt",
    paras: [
      "Wall art gives you an easy way to add personality.",
      "Instead of filling every wall, choose a small collection of prints that share a similar color palette. Animal illustrations, botanical prints, abstract shapes, stars, clouds, and simple typography can all work beautifully.",
      "Keep artwork securely mounted and away from areas where your baby can reach it.",
    ],
  },
  {
    n: "05",
    title: "Create a Cozy Reading Corner",
    photoKey: "readingCorner",
    paras: [
      "A comfortable reading chair can become one of the hardest-working pieces in the nursery.",
      "Look for a chair with good back support and enough room to hold your baby comfortably. Add a small side table for books, a water bottle, or nighttime essentials.",
      "I'd prioritize comfort over appearance here. A beautiful chair that makes your back miserable at 2 a.m. suddenly looks a lot less impressive.",
    ],
  },
  {
    n: "06",
    title: "Add a Nursery Bookshelf",
    photoKey: "bookshelf",
    paras: [
      "A small bookshelf can make the room feel finished while encouraging a love of books.",
      "Try a low bookshelf for accessible storage later, or use higher wall-mounted shelves for decorative displays when your baby is young.",
    ],
    paraBeforeList: "Display a mixture of:",
    list: ["Board books", "Storybooks", "Framed artwork", "Small decorative objects", "Personalized pieces"],
    after: [
      "Keep heavier objects securely mounted and avoid placing anything hazardous within your child's reach.",
    ],
  },
  {
    n: "07",
    title: "Choose Natural Wood Nursery Furniture",
    photoKey: "naturalWood",
    paras: [
      "Natural wood introduces warmth and works with almost every nursery color scheme.",
      "Oak, ash, maple, and light walnut can pair beautifully with cream, beige, sage, blue, or dusty pink.",
      "I especially like natural wood because it doesn't scream “baby furniture.” That means you can keep many pieces in the room for years.",
    ],
  },
  {
    n: "08",
    title: "Use a Vintage Nursery Dresser",
    photoKey: "vintageDresser",
    paras: [
      "A vintage-inspired dresser can give a nursery much more character than a matching furniture set.",
      "Look for simple silhouettes, rounded edges, and warm wood tones. If you buy an older piece, inspect it carefully and make sure it meets current safety expectations before using it.",
      "You can also use a new dresser with vintage-inspired hardware if you want the look without the uncertainty of an older piece.",
    ],
  },
  {
    n: "09",
    title: "Add a Changing Station That Actually Works",
    photoKey: "changingStation",
    paras: [
      "A changing station needs to prioritize convenience.",
      "Keep frequently used items close enough to reach without leaving your baby unattended. Organize diapers, wipes, creams, clothing, and burp cloths into separate containers.",
    ],
    paraBeforeList: "A practical setup might include:",
    list: ["Changing pad", "Diaper storage", "Wipe container", "Clothing drawer", "Small laundry basket", "Easily accessible cleaning supplies"],
    after: [
      "Function should win here. Cute baskets mean very little if you can never find anything when you need it.",
    ],
  },
  {
    n: "10",
    title: "Layer a Soft Nursery Rug",
    photoKey: "rug",
    paras: [
      "A rug can instantly make a nursery feel warmer.",
      "Choose a washable or easy-care option if possible. Babies eventually crawl, spill, crawl again, and somehow find the one crumb you thought disappeared three days ago.",
      "A large rug can also visually connect the crib, chair, dresser, and other furniture.",
    ],
  },
  {
    n: "11",
    title: "Use Soft Nursery Lighting",
    photoKey: "lighting",
    paras: [
      "Lighting makes a bigger difference than many people expect.",
    ],
    paraBeforeList: "Instead of relying on one bright ceiling light, create layers with:",
    list: ["Ceiling lighting", "Floor lamps", "Table lamps", "Wall sconces", "Small night lights"],
    after: [
      "A dimmable light works particularly well for nighttime routines because you can keep the room softly illuminated without turning on a harsh overhead light.",
    ],
  },
  {
    n: "12",
    title: "Add a Nursery Night Light",
    photoKey: "nightLight",
    paras: [
      "A small night light can make nighttime changes and feeding sessions easier.",
      "Choose warm, gentle lighting rather than an extremely bright blue-white light.",
      "You don't need anything complicated. A simple lamp with adjustable brightness can work beautifully.",
    ],
  },
  {
    n: "13",
    title: "Create a Soft Sage Green Nursery",
    photoKey: "sageGreen",
    paras: [
      "Sage green has become one of my favorite nursery colors because it feels natural without looking overly traditional.",
    ],
    paraBeforeList: "Pair sage walls with:",
    list: ["Cream furniture", "Natural wood", "Beige textiles", "White curtains", "Botanical artwork"],
    after: [
      "The result feels fresh but still cozy.",
    ],
  },
  {
    n: "14",
    title: "Try a Beige and Cream Nursery",
    photoKey: "beigeCream",
    paras: [
      "A beige and cream nursery creates a soft, timeless foundation.",
      "Use several shades rather than relying on one beige. Combine warm ivory walls with taupe furniture, cream textiles, and slightly darker baskets.",
      "The secret lies in contrast. Without enough variation, a neutral nursery can look flat rather than sophisticated.",
    ],
  },
  {
    n: "15",
    title: "Add a Nursery Canopy",
    photoKey: "canopy",
    paras: [
      "A canopy can create a magical focal point around a reading chair or play area.",
      "Use it as a decorative feature outside the crib rather than treating it as part of the baby's sleep environment.",
      "Choose lightweight fabric and secure the installation properly. The goal involves creating atmosphere, not adding unnecessary hazards.",
    ],
  },
  {
    n: "16",
    title: "Decorate With Baskets",
    photoKey: "baskets",
    paras: [
      "Baskets provide one of the easiest ways to combine storage and style.",
    ],
    paraBeforeList: "Use them for:",
    list: ["Extra blankets", "Toys", "Books", "Burp cloths", "Stuffed animals", "Laundry"],
    after: [
      "Woven baskets work particularly well with neutral nursery designs because they introduce natural texture.",
    ],
  },
  {
    n: "17",
    title: "Add a Personalized Nursery Detail",
    photoKey: "personalized",
    paras: [
      "A personalized piece can make the room feel genuinely yours.",
      "Consider a framed name print, family photograph, custom artwork, or handmade decoration.",
      "I prefer using one or two meaningful pieces instead of covering the room with personalized products. Your nursery should feel like a home, not a personalized gift shop.",
    ],
  },
  {
    n: "18",
    title: "Create a Simple Nursery Gallery Wall",
    photoKey: "galleryWall",
    paras: [
      "A gallery wall can add personality without requiring expensive decor.",
      "Choose several pieces that share one visual connection. You might use similar frames, matching colors, or a common theme such as animals or nature.",
      "Keep the arrangement simple and secure every piece properly.",
    ],
  },
  {
    n: "19",
    title: "Add Curtains That Soften the Room",
    photoKey: "curtains",
    paras: [
      "Curtains can make a nursery feel much more finished.",
      "Light-filtering curtains can help create a softer atmosphere during daytime naps, while blackout curtains can help control incoming light.",
      "Choose fabrics that complement your main color palette rather than competing with it.",
    ],
  },
  {
    n: "20",
    title: "Add a Comfortable Nursery Ottoman",
    photoKey: "ottoman",
    paras: [
      "An ottoman can make a reading or feeding chair considerably more comfortable.",
      "It can also provide extra seating or, depending on the design, hidden storage.",
      "If space feels tight, choose a compact ottoman instead of a large chair-and-footstool combination.",
    ],
  },
  {
    n: "21",
    title: "Bring Nature Into the Nursery",
    photoKey: "natureIn",
    paras: [
      "Nature-inspired decor works beautifully in baby rooms.",
      "Think botanical prints, wooden furniture, animal illustrations, woven textures, and earthy colors.",
      "If you use real plants, choose safe options and keep them completely out of your baby's reach.",
    ],
    quote: { text: "Keep potentially toxic plants out of reach of children.", cite: "American Association of Poison Control Centers" },
    after: [
      "You can also skip real plants altogether. Botanical artwork gives you the same visual effect without adding another thing to worry about.",
    ],
  },
  {
    n: "22",
    title: "Design a Nursery With Room to Grow",
    photoKey: "roomToGrow",
    paras: [
      "One of the smartest nursery decor ideas involves thinking beyond the newborn stage.",
      "Choose furniture and colors that can transition as your child grows.",
      "For example, a simple wooden dresser can work during the baby years and later become regular bedroom storage. A neutral wall color can also accommodate different artwork as your child's interests change.",
      "Buy fewer pieces that work harder.",
    ],
  },
  {
    n: "23",
    title: "Keep the Nursery Clutter-Free",
    photoKey: "clutterFree",
    paras: [
      "This might sound obvious, but it makes a huge difference.",
      "Nurseries accumulate stuff incredibly quickly. Clothes, toys, blankets, books, diapers, gifts, and mysterious little objects somehow multiply overnight.",
      "Create dedicated storage from the beginning. Use drawers, baskets, bins, shelves, and closet organizers to keep everyday items easy to find.",
      "A calm-looking nursery doesn't necessarily contain fewer things. It simply gives everything a place.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const paraBeforeList = idea.paraBeforeList ? `<p>${idea.paraBeforeList}</p>` : "";
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const quote = idea.quote
    ? `<blockquote><p>&ldquo;${idea.quote.text}&rdquo;</p><cite>&mdash; ${idea.quote.cite}</cite></blockquote>`
    : "";
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${paraBeforeList}
    ${list}
    ${quote}
    ${after}
    ${photo(idea.photoKey)}`;
}

const body = `
<p>A nursery should feel calm, cozy, and easy to live with, and these 23 nursery decor ideas can help you create exactly that without turning the room into a showroom. I've always liked nurseries that mix pretty details with practical choices because babies have a funny way of making your carefully styled room look very lived-in within about five minutes.</p>
<p>The good news? You don't need expensive furniture or a perfectly themed room. A thoughtful color palette, comfortable lighting, smart storage, and a few personal touches can completely change the space.</p>
<p>So, what actually makes a nursery work? Let's start there before we get into the decorating ideas.</p>
<p><em>This post also includes Amazon affiliate links. As an Amazon Associate, this site earns from qualifying purchases at no extra cost to you.</em></p>
${photo("hero")}

<h2>What Makes a Good Nursery?</h2>
<p>A good nursery needs more than cute furniture. You want a room that supports sleep, feeding, changing, storage, and everyday routines while still feeling warm and personal.</p>
<p>I usually think about nursery design in layers. Start with the essentials, add comfort, then bring in personality through artwork, textiles, lighting, and accessories.</p>
<p>Safety should also influence your decorating decisions. The American Academy of Pediatrics recommends keeping loose bedding, pillows, blankets, and soft objects out of an infant's sleep space.</p>
<blockquote><p>&ldquo;Keep soft objects, loose bedding, or any objects that could increase the risk of entrapment, strangulation, or suffocation out of the infant's sleep space.&rdquo;</p><cite>&mdash; American Academy of Pediatrics, Safe Sleep Recommendations</cite></blockquote>
<p>That advice matters because nursery decor should never compete with safe sleep practices. Keep decorative elements around the room rather than inside the crib.</p>
${photo("whatMakesGood")}

<h2>How Do You Choose a Nursery Color Scheme?</h2>
<p>Color can completely change how a nursery feels. Soft neutrals, warm whites, muted greens, dusty blues, gentle pinks, and earthy beige tones can create a relaxed atmosphere without making the room look overly themed.</p>
<p>I personally prefer warm neutral nursery colors because they give you more flexibility as your child grows. You can change artwork, bedding, or accessories later without repainting the entire room.</p>
<p>Before choosing paint, look at the room's natural light. A warm beige can look creamy in one nursery and noticeably darker in another.</p>
<p>You should also test paint samples at different times of the day. Why? Because your nursery might look completely different at 8 a.m. compared with 7 p.m.</p>
<p>Now let's get into the fun part.</p>
${photo("colorScheme")}

<h2>23 Nursery Decor Ideas for a Cozy Baby Room</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Make Nursery Decor Feel Expensive</h2>
<p>You don't need a huge decorating budget to create a polished nursery.</p>
<p>I've found that consistency makes a room look more expensive than individual expensive pieces.</p>
<p>Choose three or four main colors and repeat them throughout the room. Then mix materials such as wood, cotton, linen, woven fibers, and ceramic accents.</p>
<p>For example, you could build the room around:</p>
<ul>
  <li>Warm white</li>
  <li>Natural oak</li>
  <li>Soft beige</li>
  <li>Sage green</li>
</ul>
<p>That small palette gives you plenty of freedom while keeping the room visually connected.</p>
<p>Another trick involves choosing one focal feature. Maybe you love the wallpaper. Great. Let it shine. You don't need five other statement pieces fighting for attention.</p>
${photo("feelExpensive")}

<h2>How to Arrange Nursery Furniture</h2>
<p>Start with the essential furniture rather than decorating first.</p>
<p>Think about the path you'll take when you enter the room at night. Where will you pick up the baby? Where will you change them? Where will you sit?</p>
<p>Keep frequently used items close to the areas where you need them.</p>
<p>The crib should sit in a safe location away from windows, cords, and other hazards. Keep the changing area organized so you can access essentials without stepping away from your baby.</p>
<p>The safest nursery layout will always depend on the specific room, furniture, and local safety guidance.</p>

<h2>Nursery Decor Mistakes I Would Avoid</h2>
<p>A beautiful nursery can still become frustrating if the design ignores everyday life.</p>
<p>Here are the mistakes I'd watch for:</p>
<ul>
  <li>Buying furniture before measuring the room</li>
  <li>Choosing style over comfort</li>
  <li>Adding too many decorative objects</li>
  <li>Ignoring storage</li>
  <li>Using overly bright lighting</li>
  <li>Choosing difficult-to-clean textiles</li>
  <li>Putting decorative objects inside the crib</li>
  <li>Installing furniture without securing it properly</li>
  <li>Creating a theme that feels impossible to update</li>
</ul>
<p>You don't need to avoid personality. You just need to give practicality a seat at the decorating table.</p>

<h2>Final Thoughts on Nursery Decor Ideas</h2>
<p>The best nursery decor ideas balance beauty, comfort, safety, and practicality. You can create a gorgeous room with warm neutrals, natural wood, soft lighting, thoughtful storage, cozy textiles, and a few personal details.</p>
<p>You also don't need to finish everything at once. Start with the furniture you actually need, establish your color palette, and add decorative pieces gradually.</p>
<p>After all, the nursery doesn't need to look perfect every minute. Real life will quickly add laundry, toys, books, and approximately 47 tiny socks to the room.</p>
<p>And honestly? That's part of the charm.</p>
<p>Choose pieces you love, make the room practical for your daily routine, and leave enough flexibility for your child to grow into the space. A beautiful nursery should feel like a cozy part of your home, not a museum exhibit.</p>
${photo("finalThoughts")}
`;

module.exports = { body };
