// Body content for "15 Staircase Wall Decor Ideas You'll Actually
// Love". Numbered idea-list format, matching the source's 15 ideas,
// reordered (wall-surface treatments first, then art/display options,
// then functional additions). New topic for the site, no existing
// staircase-specific article. Ideas 4, 6, 12, 14 and 15 (floating
// shelves, lighting, quotes, color blocking, book nook) had no source
// photo, kept text-only. Idea 8 (wall mural) reused the hero photo in
// the source, so it also runs text-only to avoid duplicating the
// image. Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DK6W9MHM", title: "Cuspin Abstract Black Metal Geometric Wall Art, Large Modern Set of 4", w: 1500, h: 1500 },
    { asin: "B0FPVKV3N7", title: "Lineshading 8 Piece Vintage Antique Gold Picture Frames Set for Gallery Wall", w: 1500, h: 1471 },
  ],
  idea1: [
    { asin: "B0G4M8YX1V", title: "Peel and Stick Farmhouse Wood Grain Shiplap Wall Panels, Self-Adhesive Vinyl Planks", w: 1500, h: 1500 },
    { asin: "B0DLKKS5TK", title: "Peel and Stick Wall Molding Kit, Pre-Cut Wainscoting Panels, 24 x 54 Inch", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B07JQHC5W3", title: "Wallpaper Smoothing Tool Kit for Peel and Stick Wallpaper and Contact Paper", w: 1494, h: 1500 },
    { asin: "B0FHK4F3WZ", title: "Colorful Boho Floral Peel and Stick Wallpaper, Flower and Leaf Contact Paper", w: 1194, h: 1279 },
  ],
  idea3: [
    { asin: "B0CJSZSGLX", title: "Samplize Benjamin Moore Balboa Mist OC-27 Peel and Stick Color Sample", w: 800, h: 800 },
    { asin: "B089NYWHJ5", title: "ScotchBlue Original Multi-Surface Painter's Tape, 1 Inch, 3 Rolls", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B07VQZSLDW", title: "upsimples 11 x 14 Inch Gallery Wall Picture Frames, Black, Set of 5", w: 1500, h: 1500 },
    { asin: "B0CYM62YNZ", title: "KURUI 385 Piece Picture Hanging Kit with Heavy Duty Hooks and Hardware", w: 1500, h: 1491 },
  ],
  idea5: [
    { asin: "B0DDBTVWFS", title: "Large Framed Abstract Matisse Canvas Wall Art, 3 Piece Set", w: 1500, h: 1500 },
    { asin: "B0FCSGXXSN", title: "Framed Vertical Vintage Tree Sketch Wall Art, 20 x 40 Inch", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0GX9ZMQNF", title: "Bormia Misty Forest Peel and Stick Landscape Wallpaper Mural", w: 1500, h: 1500 },
    { asin: "B0CP79825D", title: "Zeeko Vintage Blue Floral Peel and Stick Wallpaper Mural, 148 x 98 Inch", w: 1500, h: 1125 },
  ],
  idea7: [
    { asin: "B0FSD3HPV5", title: "GUSFREUD 3D Resin Butterfly Wall Decor Set, Gold", w: 1385, h: 1500 },
    { asin: "B0FQ3M1P61", title: "JFUJFU Large Black and Gold 3D Metal Wall Art with Geometric Round Design", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0HBR1KC5B", title: "Black Metal Framed Rectangular Wall Mirror Set of 3", w: 1024, h: 1024 },
    { asin: "B0D56QDRCM", title: "3 Piece Sunburst Round Wall Mirror Set for Bedroom and Bathroom", w: 1500, h: 1375 },
  ],
  idea9: [
    { asin: "B07MR6294N", title: "Make Good PlantPod Luxe Self-Watering Wall Planters, Set of 6", w: 1499, h: 1500 },
    { asin: "B0BFDKFC47", title: "Bouqlife 3 Set Self-Watering Hanging Planters for Indoor Plants", w: 1478, h: 1500 },
  ],
  idea10: [
    { asin: "B0DZWXJ9VZ", title: "BAYKA Rustic Brown Floating Shelves, 22.5 Inch, Set of 2", w: 1500, h: 1495 },
    { asin: "B0D7ZTZ978", title: "PopiShelves Small Black Square Floating Shelves, 6 Inch Mini Set", w: 1240, h: 1388 },
  ],
  idea11: [
    { asin: "B0HFXCLFCY", title: "Black Wall Sconces Set of 2 with Frosted Milk Glass, Dimmable", w: 1500, h: 1500 },
    { asin: "B0GLN7FS9V", title: "5-Light Black Glass Cluster Chandelier for Staircase and Foyer", w: 1500, h: 1500 },
  ],
  idea12: [
    { asin: "B0GD6BBWDP", title: "Fixwal 15 Pack Picture Frames Set in Soft Earth Tones, 8 x 10, 5 x 7 and 4 x 6", w: 1500, h: 1247 },
    { asin: "B0CCJ6XSHX", title: "Family Tree Picture Frame Collage Wall Decor, Multiple Sizes", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0DNZC5YBQ", title: "6 Piece Boho Inspirational Positive Canvas Wall Art, 8 x 10 Inch, Unframed", w: 1472, h: 1275 },
    { asin: "B0D1N2X42J", title: "Supwhd Positive Affirmations Wall Decor, Add Up to Big Results", w: 872, h: 1457 },
  ],
  idea14: [
    { asin: "B09QCPK24M", title: "Junkin Large Frameless 3D DIY Wall Clock, Modern Gold", w: 1500, h: 1490 },
    { asin: "B0D9QDPLLJ", title: "Abdurey Small French Retro Wall Clock, Antique Gold Oval Style", w: 816, h: 1268 },
  ],
  idea15: [
    { asin: "B096CRZ2C7", title: "Recessed Medicine Cabinet Insert Without Mirror, 14 x 24 Inch Wall Niche", w: 1024, h: 1024 },
    { asin: "B0F4XP1HFN", title: "Furinno Simple 3-Tier Bookshelf with Storage Baskets, White", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "staircase-wall-decor-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "staircase-wall-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A staircase wall is one of the largest uninterrupted surfaces in most homes, and also one of the most commonly left bare.</p>
<p>It gets passed dozens of times a day, which makes it genuinely worth styling rather than leaving as an afterthought.</p>
${photo("hero.png", "Beautifully decorated staircase wall adding character to the home", 1312, 736, "hero")}

<h2>1. A Textured Accent Wall</h2>
<p>Shiplap, paneling or a textured plaster finish on just the staircase wall gives it a distinct identity from the surrounding hallway.</p>
<p>This is a bigger commitment than most ideas on this list, but one that doesn't compete with anything else on the wall.</p>
${photo("textured-accent-wall.png", "Textured accent wall giving the staircase a distinct identity", 1024, 574, "idea1")}

<h2>2. Wallpaper for Instant Drama</h2>
<p>A bold wallpaper pattern transforms the staircase into a genuine design moment, especially effective given how much of the wall is typically visible at once along a stairway.</p>
<p>This works particularly well in a stairwell specifically because the scale of the space can handle a bolder pattern than a smaller room could.</p>
${photo("wallpaper.png", "Bold wallpaper adding instant drama to the staircase wall", 1024, 574, "idea2")}

<h2>3. Accent Paint or Color Blocking</h2>
<p>A bold color, or a deliberate color-blocked section, adds drama for a fraction of the cost and effort of wallpaper or paneling.</p>
<p>This is one of the lowest-commitment ways to test a bolder look before committing to something more permanent.</p>
${productGrid("idea3")}

<h2>4. A Gallery Wall</h2>
<p>A staircase's sloped wall is one of the most natural spots in the home for a gallery wall, since the ascending line naturally guides how pieces get arranged.</p>
<p>Planning the layout on the floor first, before any nails go in, matters even more here given the wall's awkward angle.</p>
${photo("gallery-wall.png", "Gallery wall arranged to follow the staircase's natural ascending line", 1024, 574, "idea4")}

<h2>5. Oversized Statement Art</h2>
<p>A single large piece, scaled to the wall's genuine size, makes more impact here than it would almost anywhere else in the home, simply because staircase walls tend to be unusually tall.</p>
<p>This works especially well for anyone who'd rather commit to one striking piece than curate a full gallery arrangement.</p>
${photo("statement-art.png", "Oversized statement art making full use of the staircase wall's height", 1024, 574, "idea5")}

<h2>6. A Wall Mural or Custom Art</h2>
<p>A mural, hand-painted or applied as a large-format print, turns the staircase into a genuinely unique feature that can't be replicated by hanging decor alone.</p>
<p>This is one of the more involved and expensive ideas on this list, best suited to someone fully committed to the specific design.</p>
${productGrid("idea6")}

<h2>7. Sculptural Wall Art</h2>
<p>A dimensional, textured piece adds depth that flat art can't, catching light differently depending on the time of day and angle it's viewed from while walking the stairs.</p>
<p>This works well as a single statement piece rather than needing to be paired with anything else.</p>
${photo("sculptural-art.png", "Sculptural wall art adding dimension to the staircase", 1024, 574, "idea7")}

<h2>8. Mirrors</h2>
<p>A mirror, or a cluster of smaller ones, bounces light up and down the stairwell, which is especially useful in a stairway that often gets less natural light than other rooms.</p>
<p>This also makes the stairwell feel less narrow, a genuine benefit in a space that's rarely generously sized.</p>
${photo("mirrors.png", "Mirrors bouncing light throughout the stairwell", 1024, 574, "idea8")}

<h2>9. A Vertical Garden Wall</h2>
<p>A wall-mounted planting system or a cluster of hanging plants brings real greenery into a space that often has nowhere else for plants to go.</p>
<p>This is one of the more unexpected ideas on this list, and one of the most memorable for anyone visiting the home.</p>
${photo("vertical-garden.png", "A vertical garden wall bringing greenery into the stairwell", 1024, 574, "idea9")}

<h2>10. Floating Shelves</h2>
<p>Shelves installed at an angle to match the stair's slope add display space in a spot that usually has none.</p>
<p>This works especially well for smaller framed photos, books or collected objects that would get lost in a larger gallery arrangement.</p>
${productGrid("idea10")}

<h2>11. Statement Lighting</h2>
<p>A dramatic pendant or a run of wall sconces along the staircase does double duty as both genuine function and a real design feature.</p>
<p>Stairwells often rely on a single distant overhead fixture, which makes this an upgrade most staircases genuinely need.</p>
${productGrid("idea11")}

<h2>12. A Family Photo Timeline</h2>
<p>Photos arranged chronologically up the stairs turn the daily walk up and down into something genuinely personal.</p>
<p>This works especially well in a home with kids, where the timeline naturally grows and updates over the years.</p>
${photo("photo-timeline.png", "A family photo timeline running chronologically up the staircase", 1024, 574, "idea12")}

<h2>13. Inspirational Quotes or Typography</h2>
<p>A single well-chosen phrase, in a considered font and placement, adds personality without requiring any art-curating skill.</p>
<p>This works best as one deliberate statement rather than several competing phrases on the same wall.</p>
${productGrid("idea13")}

<h2>14. A Mix of Clocks and Timepieces</h2>
<p>A cluster of clocks in varying sizes and styles creates an eclectic, collected look that's genuinely distinctive.</p>
<p>This idea works best when the clocks actually function, adding genuine utility to what's otherwise purely decorative.</p>
${photo("clocks.png", "A collected mix of clocks adding eclectic character to the wall", 1024, 574, "idea14")}

<h2>15. A Built-In Book Nook</h2>
<p>If the staircase has any depth to spare, a small built-in shelf or nook turns unused space into genuine storage and display.</p>
<p>This is the most structurally involved idea on this list, best planned alongside any broader staircase renovation.</p>
${productGrid("idea15")}

<h2>Your Staircase Wall Deserves Some Love</h2>
<p>None of these 15 ideas need to happen at once.</p>
<p>Start with lighting or a gallery wall, since both deliver real impact without major structural work, then build from there as budget and ambition allow.</p>
<p>A styled staircase wall changes how the whole home feels to move through, not just how that one wall looks.</p>
`;

module.exports = { body };
