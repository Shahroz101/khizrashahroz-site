// Body content for "20 Sofa Trends" (served at /sofa-trends-worth-knowing/).
// It replaces the earlier "10 Sofa Trends: Which Ones Are Worth Buying
// Into" article at this URL (the old text is in git history, commit
// 7fda57c9 and earlier). Numbered idea-list format, short lines, one photo
// per idea, two Amazon products under every photo.
//
// Sources: the user's "Top 20 Sofa Trends - Sources and Affiliate Links"
// folder (25 Pinterest photos + links.csv). Every photo is credited to its
// pin; every product pair is the one links.csv lists under that photo
// (the opening hero pin has no products in the folder, so it has no
// grid). Three product links in the folder were dead Amazon listings
// (404: B0HJYS5MWP, B0HJZ8Q77C, B0HJZG265X) and were replaced with live,
// verified ones. 20 numbered trends use 20 photos; the other four photos
// sit in the practical sections that follow the list (measuring, hidden
// features, accent chairs, styling). The article ends on text, not a photo.
// Photos live in images/sofa-trends-worth-knowing/, product shots in
// images/sofa-trends-worth-knowing-products/ (shared with the library).

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PHOTO_DIR = "sofa-trends-worth-knowing";
const PRODUCT_DIR = "sofa-trends-worth-knowing-products";

// key -> photo file (images/sofa-trends-worth-knowing/<key>.jpg), real pixel size,
// source pin and a short caption label.
const PHOTOS = {
  hero: {
    w: 704, h: 1252,
    pin: "https://www.pinterest.com/pin/645211084161234582/",
    label: "Sage Sofa With Sculpted Wood Base",
    alt: "Sage green sofa with sculpted arms and a wood-trimmed base, peach pillows and a round coffee table in a bright modern living room",
  },
  modular: {
    w: 736, h: 981,
    pin: "https://www.pinterest.com/pin/9429480467975712/",
    label: "Chunky Cream Sofa in a Warm Retro Room",
    alt: "Chunky cream bouclé sofa in a warm retro living room with wood shelving, an olive armchair and a glass coffee table",
  },
  curved: {
    w: 2000, h: 2000,
    pin: "https://www.pinterest.com/pin/48061921672505270/",
    label: "Half-Circle Cream Sofa",
    alt: "Half-circle cream bouclé sofa wrapped around a round fluted wood coffee table with pampas grass",
  },
  ottoman: {
    w: 400, h: 400,
    pin: "https://www.pinterest.com/pin/304485624834510764/",
    label: "Gray Sectional With Rounded Ottoman End",
    alt: "Gray textured sectional ending in a rounded ottoman beside a cream chair and an organic stone coffee table",
  },
  camel: {
    w: 736, h: 1324,
    pin: "https://www.pinterest.com/pin/384002305750324639/",
    label: "Camel Sectional With a Phone Charging",
    alt: "Deep camel sectional with matching pillows, a knit throw and a phone charging on the seat",
  },
  olive: {
    w: 474, h: 554,
    pin: "https://www.pinterest.com/pin/7177680653073368/",
    label: "Olive Green Velvet Sofa",
    alt: "Olive green velvet sofa with an arched floor lamp, a wood coffee table and a tufted ottoman",
  },
  midcentury: {
    w: 720, h: 1280,
    pin: "https://www.pinterest.com/pin/4714774604587707/",
    label: "Blue-Gray Mid-Century Sofa",
    alt: "Blue-gray button-tufted mid-century sofa with tapered wood legs, a wood coffee table, a woven rug and rust pillows",
  },
  channel: {
    w: 900, h: 1200,
    pin: "https://www.pinterest.com/pin/967148088724212183/",
    label: "Channel-Tufted Bouclé Sofa",
    alt: "Cream bouclé sofa with vertical channel tufting on a curved arm in a paneled room with an arched mirror",
  },
  cloud: {
    w: 1152, h: 1728,
    pin: "https://www.pinterest.com/pin/1055599909751863/",
    label: "Cream Cloud Sectional",
    alt: "Deep cream sectional with a long chaise, layered pillows and a shaggy rug in front of tall windows",
  },
  chaise: {
    w: 736, h: 1104,
    pin: "https://www.pinterest.com/pin/613193305561896548/",
    label: "Deep Chaise With a Chunky Knit Throw",
    alt: "Cream sectional with a wide chaise, a chunky knit throw and textured pillows in an open-plan living room",
  },
  sculptural: {
    w: 1065, h: 1241,
    pin: "https://www.pinterest.com/pin/6685099440044901/",
    label: "Sculptural Bouclé Sofa With Side Tray",
    alt: "Sculptural cream bouclé sofa with a low curved back and a small metal tray on one arm, beside a tall plant",
  },
  terracotta: {
    w: 1086, h: 1448,
    pin: "https://www.pinterest.com/pin/17099673583210604/",
    label: "Rust Sectional Against Sage Walls",
    alt: "Rust sectional with a matching chaise against sage green walls, with large framed art and a round wood coffee table",
  },
  velvet: {
    w: 735, h: 1105,
    pin: "https://www.pinterest.com/pin/307511480832184403/",
    label: "Navy Velvet Sofa and Gallery Wall",
    alt: "Navy tufted velvet sofa in a room with a colorful poster gallery wall, cream chairs and a navy striped rug",
  },
  tufted: {
    w: 400, h: 400,
    pin: "https://www.pinterest.com/pin/4592545794160772096/",
    label: "Tufted Cream Sofa With a Rust Base",
    alt: "Cream button-tufted sofa with a rust-colored base and an orange throw in a room with a small art gallery",
  },
  leather: {
    w: 1024, h: 1536,
    pin: "https://www.pinterest.com/pin/376543218872944608/",
    label: "Cognac Leather Sectional",
    alt: "Cognac leather sectional with striped pillows and a knit throw beside black-framed windows and a black metal coffee table",
  },
  compact: {
    w: 512, h: 768,
    pin: "https://www.pinterest.com/pin/68747967089/",
    label: "Compact Navy Sectional",
    alt: "Compact dark blue L-shaped sectional with cream pillows and a knit throw in a small bright living room",
  },
  convertible: {
    w: 736, h: 736,
    pin: "https://www.pinterest.com/pin/4600919670708716416/",
    label: "Cream Sofa With an Extending Seat",
    alt: "Cream sofa with its seat extended forward for lounging, a brown fringed throw and a round stone coffee table",
  },
  wood: {
    w: 1000, h: 1000,
    pin: "https://www.pinterest.com/pin/847802698650714558/",
    label: "Gray Sofa With a Walnut Frame",
    alt: "Light gray sofa with a walnut wood frame and orange pillows beside a wood coffee table and a pleated floor lamp",
  },
  nubby: {
    w: 1995, h: 2991,
    pin: "https://www.pinterest.com/pin/600808406585989861/",
    label: "Taupe Textured Sectional",
    alt: "Large taupe textured sectional in front of a wood-slat wall with a rust patterned rug and a black round coffee table",
  },
  pattern: {
    w: 1000, h: 1496,
    pin: "https://www.pinterest.com/pin/806918458274300917/",
    label: "Floral Sofa With a Gilded Mirror",
    alt: "Teal and cream floral sofa with patterned pillows beside a gilded oval mirror, an antique sideboard and a sage green wall",
  },
  blue: {
    w: 736, h: 981,
    pin: "https://www.pinterest.com/pin/20899585767637797/",
    label: "Dusty Blue Curved Sofa",
    alt: "Dusty blue curved velvet sofa ending in a rounded chaise, with a black coffee table and a woven leather chair in a sunlit room",
  },
  measure: {
    w: 640, h: 800,
    pin: "https://www.pinterest.com/pin/199495458484470835/",
    label: "Low Bouclé Sofa With Space Around It",
    alt: "Low cream bouclé sofa with plenty of open floor around it, a stone and glass coffee table, a jute rug and a cat",
  },
  features: {
    w: 896, h: 1344,
    pin: "https://www.pinterest.com/pin/711779916154896217/",
    label: "Cream Sofa With Layered Pillows",
    alt: "Cream sofa with navy and blue patterned pillows, a chunky knit throw and hydrangeas in front of a blue abstract painting",
  },
  chairs: {
    w: 1400, h: 1400,
    pin: "https://www.pinterest.com/pin/2322237301996117/",
    label: "White Slipcovered Sofa and Armchair",
    alt: "White slipcovered sofa with a floral pillow, a white armchair and two small white stools on a jute rug in a bright room",
  },
  style: {
    w: 720, h: 1280,
    pin: "https://www.pinterest.com/pin/8233211829807967/",
    label: "Brown Velvet Sectional, Simply Styled",
    alt: "Chocolate brown velvet sectional with a few pillows, a smoked glass coffee table and a chrome arc floor lamp",
  },
};

// photo key -> the two products links.csv lists under that photo.
// Titles are the Amazon listing titles, shortened and cleaned.
const PRODUCTS = {
  modular: [
    { asin: "B0GXVMS72J", title: "Novilla 108 Inch Modular Sectional Sofa, Chenille Cloud Couch, L-Shaped, Beige Armless Seat", w: 1500, h: 1500 },
    { asin: "B0GZ213CJD", title: "79 Inch Modular Sectional Sofa, Boneless Convertible Sleeper Sofa Bed, Tri-Folding Cloud Couch with L-Shape Chaise", w: 1500, h: 1500 },
  ],
  curved: [
    { asin: "B0F96ZMVK5", title: "Modern Curved Sectional Sofa, 125 Inch Minimalist Curve Loveseat Couch", w: 1500, h: 1500 },
    { asin: "B0HMRP4ZM7", title: "114 Inch Modern Curved Boneless Cloud Sofa, Oversized Bouclé Couch, White", w: 1440, h: 1440 },
  ],
  ottoman: [
    { asin: "B0GZ2RH1VR", title: "79 Inch Modular Sectional Sofa, Boneless Convertible Sleeper Sofa Bed", w: 1254, h: 1254 },
    { asin: "B0HHRNPFCS", title: "GRUSIGN 78 Inch 5-in-1 Convertible Futon Sofa Bed, Boneless Corduroy, Beige", w: 1500, h: 1500 },
  ],
  camel: [
    { asin: "B0GZGP3BG3", title: "3 Seater Sofa in Brown with PU Upholstery and Chesterfield Style Features", w: 1500, h: 1500 },
    { asin: "B0D2LK32DP", title: "N&amp;V Fireside Loveseat, Corduroy Armless Floor Sofa, 2-Seater, Brown Sugar", w: 1254, h: 1254 },
  ],
  olive: [
    { asin: "B0H45LZ3XR", title: "Convertible Sofa Bed Queen, 5-in-1 Boneless Couch with Removable Armrests, Corduroy Futon Sleeper, Green", w: 1500, h: 1500 },
    { asin: "B0GVJKNPSG", title: "IDEALHOUSE 65 Inch Mid Century Modern Couch Sofa Loveseat, Green", w: 1500, h: 1500 },
  ],
  midcentury: [
    { asin: "B0HDB2SQM1", title: "COMAX Boneless Futon Sofa Bed, 59 Inch Small Low-Profile Floor Couch, Black", w: 1500, h: 1500 },
    { asin: "B0HBBZZP8B", title: "COMAX Boneless Futon Sofa Bed, 59 Inch Small Low-Profile Floor Couch, Green", w: 1500, h: 1500 },
  ],
  channel: [
    { asin: "B0DY78548L", title: "Modern Curved Sectional Sofa, U-Shaped 3-Piece Modular Couch with Round Coffee Table, White Bouclé Fabric", w: 1500, h: 1500 },
    { asin: "B0FKBCHTTY", title: "Garvee 65 Inch Mid Century Modern Loveseat Sofa for Small Spaces", w: 1500, h: 1500 },
  ],
  cloud: [
    { asin: "B0BNLPXXJJ", title: "Corner Sectional Sofa, 7 Seater, Cream Linen", w: 1500, h: 385 },
    { asin: "B0GX5WYQWF", title: "Korser 110 Inch Cloud Sectional Couch with Ottoman, Modular Sofa with Deep Seat, Beige", w: 1500, h: 1500 },
  ],
  chaise: [
    { asin: "B0GX1DPN65", title: "108 Inch Modular Sectional Sofa, Boneless Cloud Couch with L-Shape Chaise", w: 1500, h: 1495 },
    { asin: "B0GWTXPR4D", title: "Vongrasig 105 Inch Boneless Modular Sectional Couch for Living Room", w: 1500, h: 1126 },
  ],
  sculptural: [
    { asin: "B0HB3BQJFZ", title: "Green Curved Sectional Sofa with Chenille Upholstery, V-Shaped Curve Corner Couch", w: 1499, h: 1500 },
    { asin: "B0G4KPJ27Y", title: "Contemporary Upholstered Sofa, Sculptural Modular Sofa with Adjustable Cushion Comfort", w: 931, h: 317 },
  ],
  terracotta: [
    { asin: "B0HD5YNBB4", title: "Curved Sectional Sofa, Velvet Upholstered, Burnt Orange", w: 1500, h: 1500 },
    { asin: "B0GLPM4SFF", title: "Comeon Lazy Floor Sofa Boneless Accent Chair with Ottoman, Mustard Yellow", w: 1500, h: 1500 },
  ],
  velvet: [
    { asin: "B073YNP4WX", title: "Christopher Knight Home GDFStudio Leona Modern Glam Tufted Velvet Wingback Loveseat", w: 1500, h: 1095 },
    { asin: "B0DSXC1MZK", title: "Best Choice Products 77 Inch Mid Century Modern Velvet Loveseat Sofa", w: 1500, h: 635 },
  ],
  tufted: [
    { asin: "B0CT2TKZTF", title: "Yaheetech 56.5 Inch Small Sofa 2 Seater Couch with Gold-Tone Legs, Green", w: 1500, h: 802 },
    { asin: "B0GH6FNPWX", title: "80 Inch Deep Button Tufted Roll Arm L-Shaped Sofa, Solid Wood Gourd Legs", w: 1008, h: 331 },
  ],
  leather: [
    { asin: "B0H8RN97LG", title: "MCombo 85.4 Inch Zero Wall Hugger Power Recliner Sofa, Toast", w: 1500, h: 748 },
    { asin: "B0GN8C5SCX", title: "Yolsali Manual Reclining Sectional Sofa Set, 6 Seats Soft Leather Recliner Corner", w: 1500, h: 1064 },
  ],
  compact: [
    { asin: "B0GTHS8MXF", title: "ZurNesfure Sofa Couch Loveseat Boneless Sofa with Pillow Line, Grey", w: 1479, h: 1479 },
    { asin: "B0GH7BMHPK", title: "Loveseat Sofa with Tufted Cushions, Easy Tool-Free Assembly, Dark Grey", w: 855, h: 484 },
  ],
  convertible: [
    { asin: "B0HDC5H49L", title: "GRUSIGN 78 Inch 5-in-1 Convertible Futon Sofa Bed, Boneless Corduroy, Gray", w: 1500, h: 1500 },
    { asin: "B0HDB2SQM1", title: "COMAX Boneless Futon Sofa Bed, 59 Inch Small Low-Profile Floor Couch, Black", w: 1500, h: 1500 },
  ],
  wood: [
    { asin: "B015T2VYKS", title: "Studio Living Harrington 80.3 Inch Sofa, Transitional Modern, Pocket Coil Comfort, Black Microfiber", w: 1500, h: 727 },
    { asin: "B0BPQQX3F2", title: "Vongrasig 48 Inch Small Modern Loveseat Sofa, Mid Century Soft Corduroy Fabric 2-Seat Sofa", w: 1500, h: 1500 },
  ],
  nubby: [
    { asin: "B0HFWD424X", title: "JUMMICO 72 Inch L-Shaped Couch for Apartment Living Room", w: 1500, h: 1500 },
    { asin: "B0HK6ZL8FD", title: "78 Inch 5-in-1 Convertible Futon Sofa Bed, Boneless Couch for Living Room", w: 1500, h: 1500 },
  ],
  pattern: [
    { asin: "B0GW8G9WXQ", title: "Convertible Sofa Bed Queen, 5-in-1 Boneless Couch with Removable Armrests and Handle", w: 1500, h: 1500 },
    { asin: "B0CBTMPHJC", title: "Vongrasig 47 Inch Small Modern Loveseat Sofa, Mid Century Soft Corduroy Fabric 2-Seat Sofa", w: 1500, h: 1500 },
  ],
  blue: [
    { asin: "B0D9BG81G9", title: "N&amp;V Fireside 3-Seater Sofa, Armless Corduroy Floor Couch, Prussia Blue", w: 1254, h: 1254 },
    { asin: "B0CT2TKZTF", title: "Yaheetech 56.5 Inch Small Sofa 2 Seater Couch with Gold-Tone Legs, Green", w: 1500, h: 802 },
  ],
  measure: [
    { asin: "B09K4G8NX6", title: "Mr. Pen Retractable Tape Measure, 25 ft, Yellow, Easy Read", w: 1250, h: 1500 },
    { asin: "B089NYWHJ5", title: "ScotchBlue Original Multi-Surface Painters Tape, 1 Inch Wide, 60 Yards, 3 Rolls", w: 1500, h: 1500 },
  ],
  features: [
    { asin: "B0H673CH1K", title: "Walsunny 77 Inch Sectional Sleeper Sofa with Pull Out Bed", w: 1254, h: 1254 },
    { asin: "B0HCZV7Q6N", title: "4-in-1 Boneless Sofa Bed, 70 Inch Boneless Couch with Storage Pocket and 5 Pillows", w: 1500, h: 1500 },
  ],
  chairs: [
    { asin: "B09J4Q34QH", title: "Yaheetech Compact Sherpa Accent Chairs Set of 2 for Small Spaces, Ivory", w: 1500, h: 911 },
    { asin: "B0D7PGTDBT", title: "VINGLI Accent Chairs Set of 2, Chenille Upholstered Armchair for Living Room", w: 1500, h: 1500 },
  ],
  style: [
    { asin: "B0FFN2D9MJ", title: "Set of 4 Soft Textured Throw Pillow Covers, 18 x 18 Inch, Cozy Decorative Farmhouse Cushion", w: 1500, h: 1500 },
    { asin: "B0C1YZJJ5L", title: "Bedsure Soft Beige Throw Blanket for Couch, 50 x 60 Inches", w: 1500, h: 1296 },
  ],
};

function productGrid(key) {
  const products = PRODUCTS[key] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: PRODUCT_DIR, src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

// Credited Pinterest photo, followed by its product grid (if it has one).
function photo(key) {
  const p = PHOTOS[key];
  return `<figure>
      ${picture({ dir: PHOTO_DIR, src: key, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.pin}" target="_blank" rel="nofollow noopener">Pinterest &mdash; ${p.label}</a></figcaption>
    </figure>
    ${productGrid(key)}`;
}

const body = `
<p>A sofa is usually the biggest piece in a living room, and it tends to stay put for years.</p>
<p>That makes it worth knowing which styles are shaping how sofas look and feel right now.</p>
<p>These 20 sofa trends cover the shapes, fabrics and colors showing up most &mdash; from curved bouclé to deep modular sectionals.</p>
${photo("hero")}

<h2>1. Modular Sectionals</h2>
<p>Modular sectionals are built from separate sections that can be moved, added or rearranged as a room changes.</p>
<p>The chunky cream sofa here uses big, rounded sections and soft bouclé, which suits a room already full of shelves, plants and pattern.</p>
<p>It's an easy fit for anyone likely to move, or to rearrange the room often.</p>
${photo("modular")}

<h2>2. Curved Sofas</h2>
<p>A curved sofa softens a room full of straight lines and turns the seating area into a natural conversation circle.</p>
<p>This half-circle cream sofa wraps around a round fluted coffee table, so the whole arrangement flows instead of feeling boxed in.</p>
<p>It works best where there's enough floor space for the curve to breathe.</p>
${photo("curved")}

<h2>3. Sectionals With a Rounded Ottoman End</h2>
<p>Many sectionals now finish in a rounded chaise or ottoman, adding extra seating and a place to stretch out without crowding the room.</p>
<p>The gray textured sectional here ends in a soft round ottoman, while a cream chair and a stone-look coffee table keep the neutral room from feeling heavy.</p>
<p>This suits an open living room that needs one anchor piece.</p>
${photo("ottoman")}

<h2>4. Camel and Caramel Tones</h2>
<p>Camel and caramel sofas bring warmth without the commitment of a bold color, and they pair easily with almost any palette.</p>
<p>The deep camel sectional here is piled with matching pillows and a soft knit throw, with a phone charging right on the seat.</p>
<p>That mix of comfort and everyday practicality is exactly why warm neutrals feel so livable.</p>
${photo("camel")}

<h2>5. Olive and Forest Green</h2>
<p>Deep olive and forest greens are a popular alternative to gray and beige.</p>
<p>The olive velvet sofa here sits beside a vintage wood coffee table and an arched floor lamp, which gives the corner a warm, collected look.</p>
<p>Green also pairs naturally with plants, wood and brass, so it rarely clashes with what's already in the room.</p>
${photo("olive")}

<h2>6. Mid-Century Shapes</h2>
<p>Mid-century lines are back: button-tufted backs, slim arms and tapered wood legs that lift the sofa off the floor.</p>
<p>This blue-gray sofa shows the look, with a low wood coffee table, a woven rug and rust and tan pillows adding warmth.</p>
<p>Raised legs also make a room feel more open, which helps in smaller living rooms.</p>
${photo("midcentury")}

<h2>7. Channel Tufting and Ribbed Details</h2>
<p>Vertical channels, ribs and flutes add shadow and detail to an otherwise simple sofa shape.</p>
<p>This cream bouclé sofa carries the ribbing along its curved arm, set against paneled walls, an arched mirror and dark wood floors.</p>
<p>The pale fabric reads soft and a little dramatic in a traditional room.</p>
${photo("channel")}

<h2>8. Cloud Sofas</h2>
<p>Cloud sofas are all about depth: oversized seats, plump cushions and a low, relaxed profile.</p>
<p>This cream sectional stretches out with a long chaise, layered pillows and a shaggy rug, so it looks made for lounging.</p>
<p>It suits a family room where the sofa doubles as the movie-night spot.</p>
${photo("cloud")}

<h2>9. Deep Chaise Sectionals</h2>
<p>A wide chaise turns a sectional into a place to lie down, not just sit.</p>
<p>The cream chaise here is draped with a chunky knit throw and surrounded by textured pillows, which keeps an all-neutral setup from feeling flat.</p>
<p>It works especially well in open-plan spaces, where the sectional helps mark off the living area.</p>
${photo("chaise")}

<h2>10. Sculptural, Organic Shapes</h2>
<p>Sculptural sofas treat seating like furniture design, with soft, pebble-like forms instead of straight lines.</p>
<p>This bouclé piece curves like a pebble, with a rounded back that dips in the middle and a small metal tray attached to one arm for a drink or a book.</p>
<p>It makes a strong statement in a minimalist room that needs one memorable piece.</p>
${photo("sculptural")}

<h2>11. Burnt Orange and Terracotta</h2>
<p>Burnt orange and terracotta sofas bring earthy warmth, and they look especially rich in leather or velvet.</p>
<p>This rust sectional sits against sage green walls, with navy and cream pillows breaking up the color.</p>
<p>The pairing shows why earth tones feel grounded rather than loud.</p>
${photo("terracotta")}

<h2>12. Velvet</h2>
<p>Velvet adds depth and a soft sheen, and it makes even a simple sofa shape look richer.</p>
<p>The navy velvet sofa here anchors a lively room with a poster gallery wall, a striped navy rug and a pair of cream chairs with chrome frames.</p>
<p>Jewel tones like navy work best when the rest of the room stays a little lighter.</p>
${photo("velvet")}

<h2>13. Tufted, Two-Tone Sofas</h2>
<p>Button tufting is back, adding texture and a vintage touch to modern sofa shapes.</p>
<p>This sofa pairs plump, tufted cream cushions with a rust-colored base, which creates a two-tone look.</p>
<p>The bold base keeps the soft cream top from blending into the room.</p>
${photo("tufted")}

<h2>14. Leather Is Back</h2>
<p>Leather sofas are making a comeback, mostly in warm cognac and caramel shades that look better with age.</p>
<p>This cognac sectional sits on a patterned rug beside black-framed windows, which gives the room a relaxed, lived-in feel.</p>
<p>It's a durable choice for a busy family room.</p>
${photo("leather")}

<h2>15. Compact Sectionals for Small Rooms</h2>
<p>Compact L-shaped sofas give small living rooms the comfort of a sectional without the bulk.</p>
<p>This dark blue sofa tucks a chaise into one corner, leaving room for a fluffy rug and a sunny window with plants.</p>
<p>A dark color can also ground a small room when the walls stay light.</p>
${photo("compact")}

<h2>16. Sofa Beds and Convertibles</h2>
<p>Sofas that convert into beds are no longer reserved for guest rooms.</p>
<p>This cream sofa has a seat section that extends forward into a deeper lounging surface, yet its clean lines still read as regular living room furniture.</p>
<p>Convertibles suit apartments, home offices and any room that has to do two jobs.</p>
${photo("convertible")}

<h2>17. Wood-Framed Sofas</h2>
<p>Exposed wood gives a soft sofa a sturdier, more furniture-like look.</p>
<p>The light gray sofa here is framed in walnut along the base and one arm, with orange pillows picking up the warmth of the wood.</p>
<p>It pairs naturally with wood coffee tables and warm, neutral rugs.</p>
${photo("wood")}

<h2>18. Nubby, Earthy Textures</h2>
<p>Chunky, nubby fabrics in taupe and mushroom shades add depth to a neutral room.</p>
<p>This large taupe sectional sits in front of a wood-slat wall, with a rust rug and a black coffee table adding contrast.</p>
<p>The mix of wood, texture and earth tones feels warm without being busy.</p>
${photo("nubby")}

<h2>19. Patterned and Floral Sofas</h2>
<p>Patterned sofas are returning, especially florals and botanical prints in soft, vintage-inspired colors.</p>
<p>This curved-back sofa in a teal and cream print sits beside a gilded mirror and an antique sideboard, with coordinating pillows pulling the look together.</p>
<p>Let the sofa carry the pattern and keep everything around it calmer.</p>
${photo("pattern")}

<h2>20. Dusty Blue and Curved Velvet</h2>
<p>Dusty blue is a softer alternative to gray that still feels calm.</p>
<p>This curved velvet sofa ends in a rounded chaise and sits in a sunlit room, with a woven leather chair and a plaid throw adding texture.</p>
<p>Soft blue works with warm woods, creams and browns, so it's easy to build around.</p>
${photo("blue")}

<h2>Measure Before You Buy</h2>
<p>Even the best trend only works if the sofa fits the room.</p>
<p>Measure the wall, the doorways and the path into the room, then mark the sofa's footprint on the floor with painter's tape.</p>
<p>The low cream sofa here has generous space all around it, which is the breathing room a good layout needs.</p>
${photo("measure")}

<h2>Check for Hidden Storage and Sleeper Features</h2>
<p>Many sofas now hide extra function under clean lines.</p>
<p>A simple cream sofa like this one, dressed with layered pillows and a chunky knit throw, shows how plain a sofa can look from the outside.</p>
<p>Plenty of modern sectionals hide a pull-out bed or a storage chaise under the same clean lines.</p>
<p>Check the details before buying, so the style comes with the function the room needs.</p>
${photo("features")}

<h2>Add Accent Chairs to Finish the Seating</h2>
<p>A sofa rarely works alone, and a chair or two turns it into a complete seating area.</p>
<p>Here a white slipcovered sofa is matched with a white armchair and a pair of small stools, which keeps the room relaxed and easy to rearrange.</p>
<p>Chairs also add flexibility, since they can be pulled closer whenever guests arrive.</p>
${photo("chairs")}

<h2>Style the Sofa With Pillows and Throws</h2>
<p>Pillows and throws can update a sofa faster than replacing it.</p>
<p>The chocolate-brown velvet sectional here keeps the styling simple, with a few pillows and a cream rug underneath.</p>
<p>Stick to two or three textures and repeat one color, so the sofa stays the focus.</p>
${photo("style")}

<h2>Choosing the Trend That Fits</h2>
<p>None of these 20 trends is universally right &mdash; the best one depends on the room's size, light and how the sofa will actually be used.</p>
<p>Whichever style wins, a well-chosen sofa remains one of the fastest ways to make a living room feel comfortable and finished.</p>
`;

module.exports = { body };
