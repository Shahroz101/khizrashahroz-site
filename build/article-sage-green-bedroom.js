// Body content for the "25 Sage Green Bedroom Ideas That Feel Calm, Cozy,
// and Beautiful" post. Images sourced from Pinterest pins the user
// selected and provided directly; each is credited back to its pin per
// their request.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PIN = {
  hero: { src: "hero", w: 905, h: 1623, alt: "Sage green bedroom with a wood bed frame, rattan pendant light, layered botanical art and a jute rug", url: "https://www.pinterest.com/pin/372180356726454739/", label: "Earthy Sage Green Bedroom Palette" },
  isGoodColor: { src: "is-good-color", w: 736, h: 1104, alt: "Bright, airy bedroom with soft sage green and neutral decor, a gallery of botanical photography and a fiddle leaf fig", url: "https://www.pinterest.com/pin/68749946094/", label: "Soft Sage Green and Neutral Bedroom" },
  colorsGoWith1: { src: "colors-go-with-1", w: 1168, h: 1752, alt: "Sage green bedroom styled with warm neutral tones and natural materials", url: "https://www.pinterest.com/pin/919860292664457032/", label: "Sage Green Bedroom Color Palette" },
  colorsGoWith2: { src: "colors-go-with-2", w: 736, h: 1104, alt: "Sage green bedroom with organized styling and warm accent tones", url: "https://www.pinterest.com/pin/999799186048303984/", label: "Sage Green Bedroom Styling" },
  paintEntireRoom: { src: "paint-entire-room", w: 667, h: 1000, alt: "Bedroom with sage green paint on every wall, natural wood furniture and warm neutral bedding", url: "https://www.pinterest.com/pin/6051780745556862/", label: "Sage Green Painted Bedroom Walls" },
  accentWall: { src: "accent-wall", w: 1440, h: 2560, alt: "Sage green accent wall behind a bed with a floating shelf, framed prints and a beige upholstered headboard", url: "https://www.pinterest.com/pin/211174977378047/", label: "Sage Green Bedroom Accent Wall" },
  softSageCream: { src: "soft-sage-cream", w: 736, h: 1104, alt: "Sage green accent wall with a beige headboard, cream and sage pillows and a chunky knit throw", url: "https://www.pinterest.com/pin/281543726823171/", label: "Soft Sage Green and Cream Bedroom" },
  naturalWood: { src: "natural-wood", w: 735, h: 1105, alt: "Sage green textured bedroom wall paired with warm wood furniture and a low platform bed", url: "https://www.pinterest.com/pin/214132157278035807/", label: "Sage Green Paired With Natural Wood" },
  sageWhiteBedding: { src: "sage-white-bedding", w: 736, h: 1312, alt: "White bedroom with sage green and white bedding, quilted pillows and a eucalyptus arrangement on the nightstand", url: "https://www.pinterest.com/pin/774124931907864/", label: "Sage Green and White Bedding" },
  boardBatten: { src: "board-and-batten", w: 736, h: 1104, alt: "Sage green board and batten accent wall with a built-in shelf styled with decor above the headboard", url: "https://www.pinterest.com/pin/68749989176/", label: "Sage Green Board and Batten Wall" },
  sageBeige: { src: "sage-and-beige", w: 1000, h: 1500, alt: "Warm beige bedroom wall with a copper pendant light and sage green and cream bedding", url: "https://www.pinterest.com/pin/6614730698850109/", label: "Sage Green and Beige Bedroom" },
  sageTerracotta: { src: "sage-and-terracotta", w: 736, h: 1104, alt: "Sage green paneled bedroom wall with a rustic wood bench and terracotta accent pillows on the bed", url: "https://www.pinterest.com/pin/1688918607579136/", label: "Sage Green Paired With Terracotta" },
  floralWallpaper: { src: "floral-wallpaper", w: 1024, h: 1536, alt: "Sage green botanical floral wallpaper behind a bed with a brass sphere chandelier and green accent pillows", url: "https://www.pinterest.com/pin/4602327100245557376/", label: "Sage Green Floral Wallpaper" },
  canopyBed: { src: "canopy-bed", w: 736, h: 1260, alt: "Sage green fabric canopy draped above a wood bed frame with macrame wall hangings and potted plants", url: "https://www.pinterest.com/pin/51087777021005835/", label: "Sage Green Canopy Bed" },
  blackAccents: { src: "black-accents", w: 736, h: 1097, alt: "Sage green paneled wall with a black upholstered headboard, black nightstands and hanging plants", url: "https://www.pinterest.com/pin/1618549865426085/", label: "Sage Green Paired With Black Accents" },
  cottageBedroom: { src: "cottage-bedroom", w: 736, h: 1318, alt: "Cottage-style bedroom with floral bedding, string lights, a vintage wood door and a gallery of botanical prints", url: "https://www.pinterest.com/pin/2392606049427440/", label: "Sage Green Cottage Bedroom" },
  dustyBlue: { src: "dusty-blue", w: 1080, h: 1920, alt: "Sage green arched wall niche with a dusty blue upholstered headboard and matching blue bedding", url: "https://www.pinterest.com/pin/104075441386588403/", label: "Sage Green and Dusty Blue Palette" },
  upholsteredHeadboard: { src: "upholstered-headboard", w: 1024, h: 1536, alt: "Close-up of a sage green channel-tufted upholstered headboard with white and cream pillows", url: "https://www.pinterest.com/pin/1090152653582587901/", label: "Sage Green Upholstered Headboard" },
  sageCurtains: { src: "sage-curtains", w: 736, h: 1308, alt: "Floor-to-ceiling sage green curtains framing a bedroom window beside white bedding and a wood dresser", url: "https://www.pinterest.com/pin/6192518233116001/", label: "Sage Green Bedroom Curtains" },
  moodyBedroom: { src: "moody-bedroom", w: 736, h: 1097, alt: "Deep sage and olive green bedroom with warm brass lighting and layered neutral bedding for a moody feel", url: "https://www.pinterest.com/pin/1128081406693823786/", label: "Moody Sage Green Bedroom" },
  ceilingSage: { src: "ceiling-sage", w: 768, h: 960, alt: "Bedroom with a sage green tray ceiling and matching walls, plus a ceiling fan and warm accent furniture", url: "https://www.pinterest.com/pin/225602262580738382/", label: "Sage Green Painted Ceiling" },
  sageBrass: { src: "sage-and-brass", w: 736, h: 1312, alt: "Sage green channel-tufted headboard with a brass sunburst mirror, arched floor mirror and gold velvet pillows", url: "https://www.pinterest.com/pin/2955556003684328/", label: "Sage Green Paired With Brass" },
  rattanTextures: { src: "rattan-textures", w: 1696, h: 2528, alt: "Minimalist sage green bedroom with a woven rattan headboard and warm wood nightstand", url: "https://www.pinterest.com/pin/333266441199608061/", label: "Sage Green With Rattan and Woven Textures" },
  darkWood: { src: "dark-wood", w: 736, h: 1104, alt: "Sage green accent wall behind a dark wood four-poster bed with a botanical gallery wall", url: "https://www.pinterest.com/pin/4714774605889645/", label: "Sage Green Paired With Dark Wood" },
  smallBedroom: { src: "small-bedroom", w: 480, h: 854, alt: "Small bedroom with sage green walls, a cane headboard and white bedding with sage green pillows", url: "https://www.pinterest.com/pin/39265828001614455/", label: "Sage Green in a Small Bedroom" },
  japandi: { src: "japandi-bedroom", w: 640, h: 1141, alt: "Minimalist bedroom with muted sage green tones, low-profile wood furniture and simple black-framed art", url: "https://www.pinterest.com/pin/70437491433469/", label: "Sage Green Japandi Bedroom" },
  throughArtwork: { src: "through-artwork", w: 1024, h: 1024, alt: "Neutral bedroom with a large botanical artwork above the bed and sage green accent bedding", url: "https://www.pinterest.com/pin/13862711350454770/", label: "Sage Green Introduced Through Artwork" },
  softPink1: { src: "soft-pink-1", w: 736, h: 1308, alt: "Bedroom with a crystal chandelier and sage green walls paired with soft pink and blush bedding", url: "https://www.pinterest.com/pin/1829656095805754/", label: "Sage Green and Soft Pink Bedroom" },
  softPink2: { src: "soft-pink-2", w: 864, h: 1152, alt: "Boho bedroom with a round rattan mirror, macrame wall hanging and sage green and blush pink bedding", url: "https://www.pinterest.com/pin/2040762327973412/", label: "Sage Green and Blush Boho Bedroom" },
  layerShades: { src: "layer-shades", w: 1200, h: 1800, alt: "Elegant bedroom layering several shades of green with crisp white bedding and framed art", url: "https://www.pinterest.com/pin/2111131073881345/", label: "Layered Shades of Sage Green" },
  howToChoose: { src: "how-to-choose", w: 897, h: 1601, alt: "Light sage green bedroom walls creating a fresh, calming backdrop for the bed", url: "https://www.pinterest.com/pin/703756188947568/", label: "Light Sage Green Bedroom Walls" },
  paintColors: { src: "paint-colors-worth-considering", w: 720, h: 1280, alt: "Light sage green bedroom walls paired with simple furniture and soft textiles", url: "https://www.pinterest.com/pin/1759287349157225/", label: "Sage Green Bedroom Paint Color Inspiration" },
  feelExpensive: { src: "feel-expensive", w: 800, h: 1200, alt: "Modern earthy bedroom with sage green bedding, minimalist wall art and warm neutral textures", url: "https://www.pinterest.com/pin/1407443629707658/", label: "Elevated Sage Green Bedroom Styling" },
  finalThoughts1: { src: "final-thoughts-1", w: 768, h: 1536, alt: "Sage green shiplap accent wall with a brass sconce and warm wood bed frame", url: "https://www.pinterest.com/pin/211174978969278/", label: "Sage Green Shiplap Accent Wall" },
  finalThoughts2: { src: "final-thoughts-2", w: 816, h: 1456, alt: "Sage green boho bedroom with a tufted headboard and layered natural textures", url: "https://www.pinterest.com/pin/304485624831376206/", label: "Sage Green Boho Bedroom" },
};

const PRODUCTS = {
  hero: [
    { asin: "B0DSVGZLGL", title: "20”Hand Woven Rattan Chandelier Boho Pendant Light Adjustable Coastal Pendant Light for Kitchen Island Dining Living Room, White, UL Listed", w: 1500, h: 1500 },
    { asin: "B0D8QQGFVN", title: "Rattan Pendant Light, 15.7\" Rattan Chandelier Hand-Woven Boho Pendant Light Fixtures with Solid Wood, Basket Wicker Chandelier for Dining Room Kitchen Island Living Room", w: 1500, h: 1500 },
  ],
  isGoodColor: [
    { asin: "B0FRF5XCFD", title: "5Ft Artificial Fiddle Leaf Fig Tree Indoor for Home Decor", w: 1500, h: 1500 },
    { asin: "B0D25BQ9PP", title: "Artificial Fiddle Leaf Fig Tree with White Planter, 5ft Tall Fake Tree with Natural Wood Trunk for Home Decor, Faux Ficus Tree Fake Moss for Indoor Office Living Room", w: 563, h: 1500 },
  ],
  colorsGoWith1: [
    { asin: "B0FFMB6P87", title: "Touch Table Lamps Set of 2, 21\" Bedside Lamps with USB C+A, Gold", w: 1500, h: 1500 },
    { asin: "B0CHVHQ83Y", title: "Gold Table Lamps Set of 2, 16.4\" Bedside Lamps for Nightstand with USB C+A", w: 1500, h: 1500 },
  ],
  colorsGoWith2: [
    { asin: "B0BR728TB6", title: "L'AGRATY Chunky Knit Throw Blanket for Couch, 50'' x 60'' Knit Throw, Ivory", w: 1500, h: 1500 },
    { asin: "B0BXPF5D4T", title: "Bigacogo Chunky Knit Throw Blanket for Couch, 40x60 inches, Beige", w: 1500, h: 1500 },
  ],
  paintEntireRoom: [
    { asin: "B0H114QBS7", title: "Calma Solid Wood Nightstand 1-Drawer, Mid Century Modern Side Table, Walnut", w: 1500, h: 1500 },
    { asin: "B0895B1M7V", title: "Nathan James 32704 Harper Mid-Century Oak Wood Nightstand with 2-Drawers, Small Side End Table with Storage, Brown", w: 1500, h: 1500 },
  ],
  accentWall: [
    { asin: "B0GSPD4GP9", title: "upsimples 23.6\" Long Floating Shelves for Wall, Room Decor Set of 2, Brown", w: 1012, h: 937 },
    { asin: "B0DZWXJ9VZ", title: "BAYKA Rustic Brown Floating Shelves 22.5in, Set of 2, Wall Mount Wood Shelf", w: 1500, h: 1495 },
  ],
  softSageCream: [
    { asin: "B07ZRPL48D", title: "HAOBO Home Upholstered Queen Headboard Only, Modern Linen Panel Oatmeal", w: 1500, h: 1500 },
    { asin: "B00MULZU2A", title: "Modway Emily Tufted Button Linen Fabric Upholstered Queen Headboard in Ivory", w: 1500, h: 1500 },
  ],
  naturalWood: [
    { asin: "B0GY3G8YHW", title: "8×10 Easy Jute Rug Washable Rugs Low Pile Outdoor Indoor Farmhouse Neutral Non Slip Rug Modern Carpet Door Mat for Backyard Bedroom Kitchen Porch Patio Nature", w: 1500, h: 1500 },
    { asin: "B0B74SR4VQ", title: "Jute Cotton Hand Woven Area Rug (8' x 10' Natural)", w: 1254, h: 1254 },
  ],
  sageWhiteBedding: [
    { asin: "B0BBW1YWBX", title: "MILDLY Duvet Cover Queen Ultra Soft Comforter Cover Set 3pcs, Mist Sage", w: 1500, h: 1500 },
    { asin: "B0D9XZPV69", title: "JSD Sage Green Duvet Cover Set Queen Size", w: 1500, h: 1500 },
  ],
  boardBatten: [
    { asin: "B094FPRBQ6", title: "QEEIG Bathroom Floating Shelves for Wall (Brown, Set of 2, 15.7\")", w: 1500, h: 1414 },
    { asin: "B0FXR4CSC9", title: "Fixwal Floating Shelves for Wall Decor (Rustic Brown, Set of 2, 15.7 Inch)", w: 1497, h: 1500 },
  ],
  sageBeige: [
    { asin: "B0DHHDRML3", title: "Ziqqeelam 2 Pack 11.8\" Copper Pendant Light Kitchen Island Farmhouse Hanging Pendant Light Fixtures, Vintage Dome Pendant Lights Kitchen Island, Dome Chandelier for Kitchen Island Dining Room", w: 1500, h: 1500 },
    { asin: "B077Y835BN", title: "Westinghouse Lighting 6105400 One-Light Indoor Mini Pendant, Hammered Copper Finish", w: 356, h: 1500 },
  ],
  sageTerracotta: [
    { asin: "B0C7192LBD", title: "Jeneoo Terracotta Decorative Throw Pillow Covers Soft Chenille Comfy Solid Rust Couch Cushion Case Decor (Set of 2, 18 x 18 Inches)", w: 1315, h: 1325 },
    { asin: "B0C783V5NX", title: "ZWJD Rust Throw Pillow Covers 18x18 Set of 2 Chenille Fall Pillow Covers with Elegant Design Soft and Luxurious Decorative Throw Pillows for Couch, Bed, and Home Decor", w: 1500, h: 1119 },
  ],
  floralWallpaper: [
    { asin: "B0FXXM1YD2", title: "Sage Green Floral Peel and Stick Wallpaper 17.7\" x 118\"", w: 1500, h: 1500 },
    { asin: "B0FY1DP5DL", title: "Sage Green Floral Peel and Stick Wallpaper 17.7\" x 393.7\"", w: 1500, h: 1500 },
  ],
  canopyBed: [
    { asin: "B0CBLT4PPM", title: "Achart Macrame Wall Hanging Large - Boho Wall Decor, Large Wall Art, Macrame Tapestry Boho Decor for Bedroom (Wooden Bead)", w: 1001, h: 1019 },
    { asin: "B0C4XX8NKQ", title: "Large Macrame Wall Hanging Boho Woven Tapestry Chic Home Decor Wall Art", w: 1500, h: 1500 },
  ],
  blackAccents: [
    { asin: "B0DPWV3DK9", title: "Kujielan 12 inches Queen Size Bed Frame with Minimalist Headboard, Black", w: 1500, h: 1500 },
    { asin: "B0D4YD4BH6", title: "Superay 18 Inch Queen Size Metal Platform Bed Frame with Round Corners Leg", w: 1500, h: 999 },
  ],
  cottageBedroom: [
    { asin: "B0F7LL28HS", title: "Large Framed 3 Piece Vintage Botanical Wall Art for Living Room, 20x30 In", w: 1500, h: 1500 },
    { asin: "B0FG7ZQ8GN", title: "WRFON Framed Botanical Canvas Wall Art Set of 3, Watercolor Floral Prints, Framed Flower Wall Decor for Bedroom Bathroom Living Room, 12x16 Inch Each", w: 1477, h: 894 },
  ],
  dustyBlue: [
    { asin: "B09B5VKLKP", title: "Jepeak Decorative Chenille Throw Pillow Covers 18x18 Pack of 2 Dusty Blue", w: 1500, h: 1500 },
    { asin: "B0C782HT4C", title: "ZWJD Dusty Blue Pillow Covers 18x18 Set of 2 Chenille Throw Pillow Covers with Elegant Design Soft and Luxurious Decorative Throw Pillows for Couch, Bed, and Home Decor", w: 1500, h: 1047 },
  ],
  upholsteredHeadboard: [
    { asin: "B0H3N2R88Q", title: "King Size Headboard Only - No Assembly Required, Sage Green", w: 1500, h: 1500 },
    { asin: "B0FY4SD899", title: "9-Piece Green Linen Upholstered Headboard Queen Size, Wall Mounted Tufted Headboard, Serene Fabric for Relaxing Bedroom", w: 1500, h: 1500 },
  ],
  sageCurtains: [
    { asin: "B0DZBQGQKK", title: "Jowels Sage Green Linen Curtains 84 Inch Long 2 Panels for Living Room", w: 1500, h: 1500 },
    { asin: "B0CZZYTDY3", title: "Jowels Sage Green Linen Grommet Curtains 84 Inch Length for Living Room", w: 1500, h: 1477 },
  ],
  moodyBedroom: [
    { asin: "B0D84CXL33", title: "Dimmable Plug in Wall Sconces Set of 2, Gold Bedside Wall Lamp with Knob Dimmer Switch and 6.5FT Electric Cord, Mid Century Modern Wall Light Fixture for Bedroom Living Room", w: 1466, h: 1500 },
    { asin: "B07YTP9XLN", title: "Modern Brass Set of 2 Plug-in Wall Sconces, Linen Fabric Shade", w: 1204, h: 1500 },
  ],
  ceilingSage: [
    { asin: "B0DPHBLS5W", title: "ZMISHIBO 52 Inch Ceiling Fans with Lights, Remote & App Control, Flush Mount", w: 1500, h: 1371 },
    { asin: "B0FGTYC786", title: "DLLT Modern Ceiling Fans with Lights: 20\" Full Package Low Profile Ceiling Fan with App Remote Control, White Flush Mount LED Bladeless Fandelier, Dimmable Quiet DC Motor for Bedroom Living Room", w: 1500, h: 1500 },
  ],
  sageBrass: [
    { asin: "B09H6WPCZS", title: "24'' Gold Sunburst Wall Mirror Boho Home Decor Modern Round Hanging Wall Art for Living Room/Bedroom/Bathroom/Entryway", w: 1000, h: 1000 },
    { asin: "B0DHXVRS6P", title: "24'' Large Gold Sunburst Mirror, Metal Starburst Mirrors, Mid-Century Modern Sun Mirror Wall Decor for Living Room, Bedroom, Bathroom, Hallway, and Entryway", w: 1500, h: 1500 },
  ],
  rattanTextures: [
    { asin: "B0GRW8V1FX", title: "Modway Sandy Queen Size Wood and Rattan Wall Mounted Headboard in Natural Rattan – Floating Wood Headboard with Woven Rattan for Queen Beds", w: 1500, h: 1500 },
    { asin: "B0723C8DZK", title: "Kouboo Rattan Loop Headboard Queen Size, Natural Wicker Bedroom Bed Decor", w: 888, h: 699 },
  ],
  darkWood: [
    { asin: "B0FS157JBD", title: "Framed 3 Piece Neutral Vintage Botanical Wall Art for Dining Room, 16x24 In", w: 1500, h: 1500 },
    { asin: "B0G1JTSSVM", title: "Botanical Wall Art Set of 3 Framed, Minimalist Neutral Plant Canvas Print", w: 1500, h: 1136 },
  ],
  smallBedroom: [
    { asin: "B0FVF4L44G", title: "Queen Size Headboard Only - No Assembly Required, Beige", w: 1500, h: 1500 },
    { asin: "B0GGBSLKRJ", title: "HIGOGOGO Wall Mounted Headboards for Queen Size Bed, Hanging Head Board Wall with Button Tufting, Adjustable Height Headboard for Bedroom, Beige", w: 1500, h: 1500 },
  ],
  japandi: [
    { asin: "B0DCFL4CM7", title: "JOONEE Nightstand, Modern Bedside Table with Storage Drawer and Open Wood Shelf, for Living Room, Bedroom and Small Spaces, Accent Night Stand with Solid Wood Legs, Walnut Brown", w: 1200, h: 1500 },
    { asin: "B0GRZT6VNR", title: "AWASEN Walnut Night Stand, Mid Century Modern Nightstand with Drawer", w: 1500, h: 1500 },
  ],
  throughArtwork: [
    { asin: "B0FHQ3N3YH", title: "Large Living Eucalyptus Leaf Canvas Wall Art, Teal White Botanical Abstract Decor Painting, Modern Nordic Plant Flowers Posters Prints for Bathroom Bedroom Office Hallway Home Decoration", w: 1500, h: 921 },
    { asin: "B0FS12YNWN", title: "Large Framed 3 Piece Vintage Botanical Wall Art for Living Room, 24x36 In", w: 1500, h: 1500 },
  ],
  softPink1: [
    { asin: "B0BLL7LVKQ", title: "ANJIADENGSHI Mini Crystal Chandelier K9 Crystal Gold Chandelier for Living Room Bedroom Dining Room Kitchen Island Entryway, 5 E12 Bulbs, Golden", w: 890, h: 1500 },
    { asin: "B00YSMM5PO", title: "Saint Mossi Modern Contemporary Elegant K9 Crystal Glass Chandelier Pendant Ceiling Lighting Fixture - 5 Lights", w: 1500, h: 1500 },
  ],
  softPink2: [
    { asin: "B0DY7LWMD6", title: "2Pcs Macrame Wall Hanging Boho Decor Yarn Handmade Round Tassel 13.7\" W x 51\" L", w: 1500, h: 1500 },
    { asin: "B09PNSV8CS", title: "kiido Large Macrame Wall Hanging Boho Tapestry Curtain Fringe Woven Bohemian Wall Decor Home Decoration for Apartment Bedroom Living Room, Blossom 35.4\" W x 26\" H", w: 1500, h: 1500 },
  ],
  layerShades: [
    { asin: "B0CJV25VWT", title: "Chunky Knit Blanket Throw for Couch, 51\" x 63\" Chunky Yarn Knitted Blankets", w: 1500, h: 1500 },
    { asin: "B08RRPQHLC", title: "SAMIAH LUXE Chunky Knit Throw Blanket 50x70 in, 8 lb Buttercream Cream", w: 1500, h: 1500 },
  ],
  howToChoose: [
    { asin: "B0FZVHV98N", title: "3 Piece Framed Neutral Botanical Floral Wall Art for Living Room, 16x24 In", w: 1500, h: 1500 },
    { asin: "B0GSGFJBRC", title: "Unittype 3 Pcs Sage Green Plant Canvas Painting Framed Botanical Wall Art", w: 1500, h: 1500 },
  ],
  paintColors: [
    { asin: "B0GCJ4M7GW", title: "Large Framed Vintage Moon Botanical Wall Art for Living Room, 24x36 In", w: 1500, h: 1500 },
    { asin: "B0D1KBDNP6", title: "tigeridge Tropical Plants Wall Art - Green Leaf Canvas Art Wall Pictures Living Room Decor, Banana Leaves Line Art, Taupe Green Wall Decor Nature Botanical Painting Prints Artwork, 20\" x 40\"", w: 1500, h: 1313 },
  ],
  feelExpensive: [
    { asin: "B096VKB1V9", title: "BESTOUCH Cotton Solid Duvet Cover Set Linen Feel Sage Green Queen", w: 1500, h: 1500 },
    { asin: "B0CV4HMWQF", title: "Duvet Cover Queen Size - Soft 3 Piece with Zipper Closure - Sage Green", w: 1200, h: 1500 },
  ],
  finalThoughts1: [
    { asin: "B0FNQCTVM9", title: "ADISUN Wall Sconces Set of 2, Golden Plug in Wall Sconces with Switch for Dresser, Classic Cord Wall Lamp for Bedroom Living Room Bathroom Dining Room Corridor Staircase", w: 1472, h: 1500 },
    { asin: "B08NTVTKWN", title: "Globe Electric 1-Light Matte Brass Plug-in or Hardwire Wall Sconce with Smoked Amber Glass Shade and In-Line On/Off Switch", w: 954, h: 1500 },
  ],
  finalThoughts2: [
    { asin: "B0G6DJXTYW", title: "Upholstered Tufting Headboard for Queen Size Bed with Lights, Green", w: 1500, h: 1500 },
    { asin: "B0GTPGJX5J", title: "Upholstered Queen Headboard Only, Wall Mounted Headboards, Green", w: 1254, h: 1254 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "sage-green-bedroom-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "sage-green-bedroom", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>
    ${productGrid(key)}`;
}

const ideas = [
  {
    n: "01",
    title: "Paint the Entire Bedroom Sage Green",
    photoKey: "paintEntireRoom",
    paras: [
      "If you really love sage, why stop at one wall?",
      "Painting all four walls creates a soft, enveloping sage green bedroom that feels intentional rather than accidental. I particularly like this approach with muted, gray-based sage because the color creates atmosphere without overwhelming the furniture.",
      "Pair the walls with warm white bedding and natural wood furniture. Add a woven rug underneath the bed to introduce another layer of texture.",
    ],
  },
  {
    n: "02",
    title: "Create a Sage Green Accent Wall",
    photoKey: "accentWall",
    paras: [
      "Not ready to commit to an entire room? Start with the wall behind your bed.",
      "A sage green accent wall naturally creates a backdrop for the headboard, artwork, and bedding. You can keep the remaining walls warm white or light beige for contrast.",
      "I'd choose this approach if your bedroom receives limited natural light. You get the personality of green without making the entire room visually heavy.",
    ],
  },
  {
    n: "03",
    title: "Try a Soft Sage Green Bedroom With Cream",
    photoKey: "softSageCream",
    paras: [
      "This combination rarely misses.",
      "Soft sage walls with cream bedding create a warm, relaxed bedroom palette that feels much softer than pure white. Cream also helps bring out the warmer side of sage.",
      "Add light oak nightstands, linen curtains, and a textured throw. You'll get that comfortable boutique-hotel feeling without needing to redecorate your entire life.",
    ],
  },
  {
    n: "04",
    title: "Pair Sage Green Walls With Natural Wood",
    photoKey: "naturalWood",
    paras: [
      "Sage and wood make an easy partnership because both colors connect naturally with the outdoors.",
      "Try pale oak for a Scandinavian-inspired room or walnut for something richer and more traditional. The contrast between the muted green and warm wood gives the room depth.",
      "Sherwin-Williams describes green bedroom colors such as Sea Salt as “fresh and grounding,” particularly for creating a restful retreat.",
      "That grounding quality works especially well alongside organic materials.",
    ],
  },
  {
    n: "05",
    title: "Use Sage Green and White Bedding",
    photoKey: "sageWhiteBedding",
    paras: [
      "You don't necessarily need sage walls to create a sage bedroom.",
      "Keep the walls neutral and introduce sage through:",
    ],
    list: ["Duvet covers", "Quilts", "Pillowcases", "Throw blankets", "Accent pillows"],
    after: [
      "This approach works beautifully for renters or anyone who changes their decor frequently.",
      "I especially like white linen bedding with one or two sage pillows. It keeps the room from looking overly coordinated.",
    ],
  },
  {
    n: "06",
    title: "Add Sage Green Board and Batten",
    photoKey: "boardBatten",
    paras: [
      "Want a little architectural drama?",
      "Paint board and batten molding in sage green and keep the upper wall a warm white. This technique gives you color while preserving plenty of visual breathing room.",
      "It works particularly well in cottage, farmhouse, transitional, and English-inspired bedrooms.",
      "You can also reverse the treatment by using sage on the upper wall and a slightly darker green on the molding.",
    ],
  },
  {
    n: "07",
    title: "Create a Sage Green and Beige Bedroom",
    photoKey: "sageBeige",
    paras: [
      "Sage green and beige create one of my favorite combinations for a cozy bedroom.",
      "Beige warms the cooler qualities of green, while sage gives beige more personality. Add natural linen, rattan, woven baskets, and light wood for an earthy look.",
      "If your room currently feels too gray, this combination can also help introduce warmth without forcing you into yellow or orange tones.",
    ],
  },
  {
    n: "08",
    title: "Mix Sage Green With Terracotta",
    photoKey: "sageTerracotta",
    paras: [
      "This pairing gives sage a completely different personality.",
      "Terracotta introduces a warm, earthy contrast that prevents sage from feeling too cool. You don't need much, either.",
      "Try terracotta through:",
    ],
    list: ["A ceramic lamp", "Accent pillow", "Small artwork", "Bed throw", "Decorative vase"],
    after: ["Keep the larger elements neutral and let terracotta act as the warm punctuation mark."],
  },
  {
    n: "09",
    title: "Add Sage Green Floral Wallpaper",
    photoKey: "floralWallpaper",
    paras: [
      "Sage green floral wallpaper can create a romantic bedroom without making the space feel overly traditional.",
      "Look for designs with muted cream, beige, dusty pink, or brown details. Small-scale botanical patterns work well in compact bedrooms, while larger patterns can create a dramatic focal point.",
      "I'd keep the furniture simple if you choose a busy wallpaper. Otherwise, the room can start competing with itself.",
    ],
  },
  {
    n: "10",
    title: "Use Sage Green Behind a Canopy Bed",
    photoKey: "canopyBed",
    paras: [
      "A canopy bed already creates a strong focal point, so sage green makes an excellent backdrop.",
      "Paint the wall behind the bed a medium sage and choose a natural wood or black canopy frame. Add white or cream bedding to soften the contrast.",
      "Want the room to feel more romantic? Add sheer curtains around the canopy.",
    ],
  },
  {
    n: "11",
    title: "Combine Sage Green With Black Accents",
    photoKey: "blackAccents",
    paras: [
      "Black can make sage green look surprisingly sophisticated.",
      "Try black through:",
    ],
    list: ["Bed frames", "Pendant lights", "Curtain rods", "Picture frames", "Small furniture pieces"],
    after: [
      "The key involves restraint. You want black to define the room rather than dominate it.",
      "A sage wall with a black metal bed and cream bedding creates a clean modern sage green bedroom without feeling cold.",
    ],
  },
  {
    n: "12",
    title: "Create a Sage Green Cottage Bedroom",
    photoKey: "cottageBedroom",
    paras: [
      "Sage green practically begs for cottage styling.",
      "Combine it with painted wood furniture, vintage artwork, floral fabrics, woven baskets, and soft white bedding.",
      "I'd also add one imperfect-looking antique piece. Perfectly matched furniture can make a cottage bedroom feel like a showroom, and nobody wants their bedroom to look like it has never experienced real life.",
    ],
  },
  {
    n: "13",
    title: "Try a Sage Green and Dusty Blue Palette",
    photoKey: "dustyBlue",
    paras: [
      "If you prefer cooler bedrooms, pair sage with dusty blue.",
      "Both colors have a soft, muted quality, so they can create a calm palette without looking flat. Use sage on the walls and dusty blue through pillows, artwork, or a throw.",
      "Keep your larger furniture pieces neutral to prevent the palette from becoming too colorful.",
    ],
  },
  {
    n: "14",
    title: "Add a Sage Green Upholstered Headboard",
    photoKey: "upholsteredHeadboard",
    paras: [
      "You can introduce a substantial amount of green without painting anything.",
      "A sage upholstered headboard gives the bed a strong visual anchor. Linen, boucle, cotton, and velvet can all work depending on your decorating style.",
      "For a relaxed bedroom, I'd choose linen or textured cotton. Velvet gives the same color a much more dramatic personality.",
    ],
  },
  {
    n: "15",
    title: "Use Sage Green Curtains",
    photoKey: "sageCurtains",
    paras: [
      "Sage curtains can soften a bedroom while introducing color at eye level.",
      "Choose a fabric that complements the wall color rather than matching it perfectly. Slight variations in tone create a more layered look.",
      "If your walls already feature sage, try a lighter sage curtain. If your walls remain neutral, you can go slightly deeper.",
    ],
  },
  {
    n: "16",
    title: "Create a Moody Sage Green Bedroom",
    photoKey: "moodyBedroom",
    paras: [
      "Sage doesn't always have to look light and airy.",
      "Choose a deeper, gray-green shade and pair it with walnut furniture, cream bedding, and warm lighting. The result feels moody, intimate, and sophisticated.",
      "Benjamin Moore also highlights deeper greens as options for adding richness and depth to bedrooms.",
      "This idea works especially well in bedrooms with limited natural light because you can lean into the cozy feeling rather than fighting it.",
    ],
  },
  {
    n: "17",
    title: "Paint the Ceiling Sage Green",
    photoKey: "ceilingSage",
    paras: [
      "Ready to do something a little unexpected?",
      "Paint the ceiling the same sage green as the walls.",
      "This technique creates a cocoon-like effect and makes the room feel more immersive. I'd pair it with simple trim and plenty of warm lighting.",
      "For an easier version, paint only the ceiling sage while keeping the walls warm white.",
    ],
  },
  {
    n: "18",
    title: "Pair Sage Green With Brass",
    photoKey: "sageBrass",
    paras: [
      "Sage green and brass create an elegant combination without feeling too formal.",
      "Use brass through:",
    ],
    list: ["Bedside lamps", "Drawer hardware", "Mirrors", "Light fixtures", "Picture frames"],
    after: ["Choose aged or brushed brass if you want a softer appearance. Polished brass creates more contrast and feels a little more glamorous."],
  },
  {
    n: "19",
    title: "Add Rattan and Woven Textures",
    photoKey: "rattanTextures",
    paras: [
      "Sage green can sometimes look too smooth if you surround it with only painted furniture.",
      "Bring in rattan, cane, jute, seagrass, and woven textiles. These materials add tactile contrast and reinforce the natural character of the color.",
      "A sage wall, cane headboard, jute rug, and linen bedding create a relaxed bedroom almost effortlessly.",
    ],
  },
  {
    n: "20",
    title: "Try Sage Green With Dark Wood",
    photoKey: "darkWood",
    paras: [
      "For a richer bedroom, combine sage with walnut or espresso-toned wood.",
      "The dark wood gives the green more depth while the muted wall color prevents the furniture from feeling too heavy.",
      "Add cream or oatmeal textiles to keep everything balanced.",
      "This combination also works beautifully in traditional and transitional bedrooms.",
    ],
  },
  {
    n: "21",
    title: "Use Sage Green in a Small Bedroom",
    photoKey: "smallBedroom",
    paras: [
      "Small bedrooms don't automatically require white walls.",
      "A light sage green bedroom can add personality while keeping the space visually soft. Choose a muted shade with a lighter value and pair it with light bedding and minimal furniture.",
      "Sherwin-Williams specifically notes that soft greens can add personality to small bedrooms without overwhelming the space.",
      "I'd also avoid filling every available surface with decor. Small room plus excessive accessories equals visual traffic jam.",
    ],
  },
  {
    n: "22",
    title: "Create a Sage Green Japandi Bedroom",
    photoKey: "japandi",
    paras: [
      "Sage works beautifully with Japandi-inspired interiors because both styles favor simplicity and natural materials.",
      "Use:",
    ],
    list: ["Muted sage walls", "Low-profile furniture", "Light oak", "Cream textiles", "Simple ceramics", "Minimal artwork"],
    after: ["Keep the color palette restrained. The beauty comes from texture and proportion rather than decoration."],
  },
  {
    n: "23",
    title: "Add Sage Green Through Artwork",
    photoKey: "throughArtwork",
    paras: [
      "Maybe you like sage but don't want it on your walls.",
      "Use artwork with sage, olive, cream, beige, and muted blue tones instead. Hang one large piece above the bed or create a small gallery wall.",
      "This method lets you experiment with the color without committing to paint.",
    ],
  },
  {
    n: "24",
    title: "Combine Sage Green With Soft Pink",
    photoKey: "softPink1",
    extraPhotoKey: "softPink2",
    paras: [
      "Sage and dusty pink create a surprisingly sophisticated pairing.",
      "Avoid bright bubblegum pink and choose muted blush, dusty rose, or clay pink instead. These warmer tones soften sage without turning the bedroom sugary.",
      "I particularly like this combination with cream bedding and natural wood.",
    ],
  },
  {
    n: "25",
    title: "Layer Several Shades of Sage Green",
    photoKey: "layerShades",
    paras: [
      "This might be my favorite approach.",
      "Instead of choosing one sage shade and repeating it everywhere, use several variations throughout the bedroom.",
      "For example:",
    ],
    list: ["Pale sage walls", "Medium sage bedding", "Deeper green pillows", "Olive artwork", "Natural wood furniture"],
    after: [
      "Layering similar greens creates depth without forcing you to introduce lots of unrelated colors.",
      "Benjamin Moore offers a wide range of sage shades, from pale options such as October Mist to deeper choices such as Gloucester Sage, showing just how much range exists within the sage family.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const paraBeforeList = idea.paraBeforeList ? `<p>${idea.paraBeforeList}</p>` : "";
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const extraPhoto = idea.extraPhotoKey ? photo(idea.extraPhotoKey) : "";
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${paraBeforeList}
    ${list}
    ${after}
    ${photo(idea.photoKey)}
    ${extraPhoto}`;
}

const body = `
<p>Sage green bedrooms have a way of making a room feel instantly calmer without turning it into a botanical garden. I've used sage green in bedroom palettes many times, and I especially like it when someone wants color without the intensity of navy, emerald, or deep charcoal. The trick comes down to choosing the right undertone and pairing it with materials that keep the room warm.</p>
<p>If you're wondering whether sage green actually works in a bedroom, what colors pair with it, or how to use it without making the room feel too green, you're in the right place. These 25 sage green bedroom ideas cover everything from full wall color to small accents, bedding, furniture, and those little details that make a room feel finished.</p>
<p><em>This post also includes Amazon affiliate links. As an Amazon Associate, this site earns from qualifying purchases at no extra cost to you.</em></p>
${photo("hero")}

<h2>Is Sage Green a Good Color for a Bedroom?</h2>
<p>Absolutely, and the reason goes beyond the fact that sage green happens to look gorgeous on Pinterest.</p>
<p>Sage sits between green, gray, and sometimes a little blue or yellow depending on the shade. That muted quality makes it easier to live with than brighter greens. It adds personality while still behaving like a neutral.</p>
<p>Benjamin Moore describes sage as a color that brings “nature-infused tranquility and sophisticated charm” to a space. The brand also recommends sage for bedrooms and other spaces where you want a peaceful atmosphere.</p>
<blockquote><p>&ldquo;Soothing and tranquil, sage paint colors have a timeless appeal and create a peaceful retreat in any home.&rdquo;</p><cite>&mdash; Benjamin Moore</cite></blockquote>
<p>I agree with the general idea, especially when you choose a muted sage rather than a saturated green. I've found that gray-green shades tend to look particularly sophisticated with cream bedding, natural wood, linen, and aged brass.</p>
<p>And honestly, bedrooms don't need another color that screams for attention. Your alarm clock already handles that job.</p>
${photo("isGoodColor")}

<h2>What Colors Go With Sage Green in a Bedroom?</h2>
<p>Sage green gives you plenty of flexibility because you can push it warm, cool, earthy, traditional, or modern depending on what you put around it.</p>
<p>For a warm sage green bedroom, I'd reach for:</p>
<ul>
  <li>Creamy white</li>
  <li>Warm beige</li>
  <li>Natural linen</li>
  <li>Taupe</li>
  <li>Light oak</li>
  <li>Walnut</li>
  <li>Terracotta</li>
  <li>Muted brass</li>
</ul>
${photo("colorsGoWith1")}
<p>For a cooler sage green bedroom, try:</p>
<ul>
  <li>Soft white</li>
  <li>Pale gray</li>
  <li>Dusty blue</li>
  <li>Charcoal</li>
  <li>Matte black</li>
  <li>Soft blue-green</li>
</ul>
<p>Sherwin-Williams also recommends considering your bedroom's lighting and size before choosing a color because light can dramatically change how paint appears. The company notes that lighter colors can make small rooms feel more open, while darker colors can create a cozy and intimate atmosphere.</p>
<blockquote><p>&ldquo;The size of your bedroom and the amount of natural light it receives can affect how colors look on the walls.&rdquo;</p><cite>&mdash; Sherwin-Williams</cite></blockquote>
<p>That advice matters with sage more than people realize. A green that looks soft and creamy in a sunny bedroom can look considerably grayer in a north-facing room.</p>
<p>So before committing to five gallons of paint, sample the color. Future-you will appreciate it.</p>
${photo("colorsGoWith2")}

<h2>25 Sage Green Bedroom Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Choose the Right Sage Green for Your Bedroom</h2>
<p>The biggest mistake I see involves choosing a sage color from a tiny digital swatch and assuming it will look identical on the wall.</p>
<p>Paint reacts strongly to lighting, surrounding colors, flooring, and furniture.</p>
<p>Before committing, check:</p>
<ul>
  <li><strong>Natural light:</strong> Morning and afternoon light can change the appearance dramatically.</li>
  <li><strong>Undertones:</strong> Some sages lean gray, blue, yellow, or olive.</li>
  <li><strong>Furniture:</strong> Warm wood can make a cool sage appear warmer.</li>
  <li><strong>Artificial lighting:</strong> Warm bulbs can shift green toward yellow.</li>
  <li><strong>Room size:</strong> Deeper greens can make a bedroom feel more intimate.</li>
</ul>
<p>Benjamin Moore recommends sampling green directly on your walls and observing it at different times of day because lighting can change how the color appears.</p>
<p>I always recommend doing this before buying the full amount of paint. A sample costs a little money. Repainting an entire bedroom costs considerably more, both financially and emotionally.</p>
${photo("howToChoose")}

<h2>Sage Green Bedroom Paint Colors Worth Considering</h2>
<p>If you want to start with actual paint colors, several established brands offer sage and green options designed for bedrooms.</p>
<p>Benjamin Moore currently highlights October Mist 1495, Saybrook Sage HC-114, Gloucester Sage HC-100, and Sage Wisdom CSP-775 among its sage and green selections.</p>
<p>Sherwin-Williams also features green bedroom options such as Sea Salt SW 6204, Acacia Haze SW 9132, and Willowleaf, depending on the mood and palette you want.</p>
<p>Sherwin-Williams describes its current Halcyon Green as a misty green with a subtle blue-gray undertone and calls it a color for restorative retreats.</p>
<blockquote><p>&ldquo;Halcyon Green leans into the calm, cool, and collected elements of everyday living.&rdquo;</p><cite>&mdash; Emily Kantz, Color Marketing Manager, Sherwin-Williams</cite></blockquote>
<p>That quote captures something important about choosing bedroom green. You don't need the brightest or most dramatic shade to make an impression.</p>
<p>Sometimes the quiet colors do more work.</p>
${photo("paintColors")}

<h2>How to Make a Sage Green Bedroom Feel Expensive</h2>
<p>You don't need expensive furniture to make sage green look sophisticated.</p>
<p>Focus on texture, contrast, and consistency instead.</p>
<p>Layer linen bedding with a chunky throw. Add a substantial rug under the bed. Use warm wood or aged brass instead of introducing ten different finishes.</p>
<p>Then repeat your main colors around the room.</p>
<p>For example, if you choose sage walls, cream bedding, and walnut furniture, echo those colors through artwork, curtains, pillows, and accessories. The repetition creates cohesion without making everything match perfectly.</p>
<p>And please don't forget lighting.</p>
<p>Warm bedside lamps can completely change the atmosphere of a sage bedroom after sunset. I prefer multiple smaller light sources over one brutally bright ceiling fixture. Your bedroom should help you wind down, not interrogate you.</p>
${photo("feelExpensive")}

<h2>Final Thoughts on Sage Green Bedroom Ideas</h2>
<p>The best sage green bedroom ideas don't rely on paint alone. The color works because it gives you a flexible foundation for layering warm neutrals, natural wood, soft textiles, earthy accents, and darker contrast.</p>
<p>You can go light and airy with sage and cream. You can create a cozy cottage bedroom with sage and floral patterns. You can make it dramatic with dark wood and black accents. Or you can keep things incredibly simple with pale sage walls, linen bedding, and a few beautiful pieces.</p>
<p>The most important thing? Choose your sage based on your actual room, not just a pretty picture online.</p>
<p>Look at your natural light. Check the undertones. Sample the paint. Then build the rest of the room around the version of sage that actually works in your space.</p>
<p>And if you're still staring at five nearly identical green paint chips wondering why they all suddenly look different, welcome to decorating. We've all been there.</p>
${photo("finalThoughts1")}
${photo("finalThoughts2")}
`;

module.exports = { body };
