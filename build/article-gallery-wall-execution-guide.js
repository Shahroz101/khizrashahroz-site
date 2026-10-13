// Body content for "How to Actually Execute a Gallery Wall (Without
// Losing Your Mind)". Guide format, matching the source's 9 content
// sections. Distinct from the existing black-gold-gallery-wall-ideas
// article, which covers one specific color variation — this is a
// general execution/how-to guide (layout, spacing, frame matching,
// updating over time, mistakes), a different content type entirely.
// Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0C72HXG8D", title: "KURUI 303 Pcs Picture Hanging Kit, Assorted Hangers, Heavy Duty", w: 1500, h: 1462 },
    { asin: "B0B5G72HM2", title: "Amazon Basics Picture Hanging Hardware Assortment Kit, 220 Piece Set, Brass", w: 1500, h: 1195 },
  ],
  why: [
    { asin: "B0D7HQVMDC", title: "ArtbyHannah Gallery Wall Frame Set, 8 Pack, Neutral Beige, Small", w: 1500, h: 1018 },
    { asin: "B0G4DK5951", title: "Venusmiles 12 Pack Picture Frames Collage, Black, White and Gold", w: 1500, h: 1500 },
  ],
  wall: [
    { asin: "B0HCBTB32C", title: "Clear Wire Toggle Utility Hooks with Adhesive Strips, 15 Pcs", w: 1499, h: 1500 },
    { asin: "B081DDHP3Z", title: "Amazon Basics 9 Inch Magnetic Torpedo Level and Ruler", w: 1345, h: 428 },
  ],
  theme: [
    { asin: "B0CQ51K48Z", title: "Eclectic Wall Art Prints, Unframed, Mid Century Retro Decor", w: 1476, h: 1500 },
    { asin: "B0C1RB6353", title: "97 Decor Colorful Eclectic Wall Art Posters", w: 1500, h: 1453 },
  ],
  layout: [
    { asin: "B077PBFKBW", title: "Bryco Goods Jumbo Kraft Paper Roll, Brown, 18 Inch x 175 Ft, USA Made", w: 1392, h: 1500 },
    { asin: "B089NYWHJ5", title: "ScotchBlue Original Multi-Surface Painters Tape, 0.94 Inch x 60 Yds, 3 Rolls", w: 1500, h: 1500 },
  ],
  frames: [
    { asin: "B0CY2GPMTY", title: "HAUS AND HUES White Oak Gallery Wall Frames, 10 Pack", w: 1500, h: 1265 },
    { asin: "B0H997LHZ6", title: "Namalu 10 Pcs Vintage Baroque Picture Frames, Mixed Size, Wooden Ornate", w: 1500, h: 1495 },
  ],
  belongs: [
    { asin: "B0GQ3K1NJT", title: "Small Floating Wall Shelves, 4 Inch, 4 Pack, Display Ledges for Figures and Plants", w: 1500, h: 1425 },
    { asin: "B0H6XB11Y8", title: "WallBeyond 24 Inch Gold Round Wall Mirror, Circle Mirror with Bamboo Texture", w: 1350, h: 1500 },
  ],
  spacing: [
    { asin: "B0CQXN743J", title: "Picture Hanging Tool with Level and Marker, Quick Precise Hanging Kit", w: 1123, h: 1366 },
    { asin: "B0DX1T6D1M", title: "Motovera Self Leveling Laser Level, 100 Ft, Green Cross Line with Tripod", w: 1455, h: 1500 },
  ],
  cohesive: [
    { asin: "B089KGB3RH", title: "upsimples 11x14 Picture Frames, Gallery Wall Set of 5, Gold", w: 1500, h: 1500 },
    { asin: "B0FJFHSKHS", title: "8x10 Black Picture Frames, Set of 12, for Wall or Tabletop", w: 1500, h: 1493 },
  ],
  updating: [
    { asin: "B08242YP7N", title: "AZSKY Floating Picture Ledge Shelves, Set of 2, Natural Wood", w: 1239, h: 406 },
    { asin: "B08TWL32JZ", title: "SESEAT 8x10 Picture Frames, Brown, Set of 6, Matted to 5x7", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "gallery-wall-execution-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "gallery-wall-execution-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A gallery wall sounds simple until the hammer's in hand and twelve frames are spread across the floor.</p>
<p>The idea is easy. The execution is where most attempts either come together beautifully or end up lopsided and abandoned halfway through.</p>
<p>This covers the actual process, not just the concept.</p>
${photo("hero.jpg", "Stunning gallery wall showcasing a timeless home decor trend", 1600, 1067, "hero")}

<h2>Why the Trend Never Actually Fades</h2>
<p>A gallery wall solves a real problem &mdash; a blank wall with nothing else planned for it &mdash; which is part of why it keeps coming back regardless of broader style trends.</p>
<p>It's also one of the few decor choices that gets more personal and more interesting over time, rather than needing to be replaced as trends shift.</p>
${photo("why-popular.jpg", "Gallery wall trend that continues to stay stylish year after year", 1024, 683, "why")}

<h2>Choosing the Right Wall</h2>
<p>A wall with enough uninterrupted space, decent natural or ambient lighting, and a clear sightline from the room's main vantage points works best.</p>
<p>A stairwell, a hallway, or the wall behind a sofa are all classic choices for a reason &mdash; they get seen regularly without competing with a window or doorway.</p>
${photo("choosing-wall.jpg", "Blank wall ready to be transformed into a gallery wall", 1024, 768, "wall")}

<h2>Theme or Deliberate Chaos</h2>
<p>A tightly themed wall &mdash; one color palette, one subject, matching frames &mdash; reads as more polished and controlled.</p>
<p>A looser, more eclectic mix reads as more collected and personal, as long as there's at least one unifying thread tying it together.</p>
<p>Both approaches work. The mistake is landing in between without committing to either.</p>
${photo("theme-or-chaos.jpg", "Eclectic gallery wall mixing various art styles and themes", 765, 1024, "theme")}

<h2>Planning the Layout First</h2>
<p>Laying every piece out on the floor in the intended arrangement, before a single nail goes in the wall, saves far more patching and re-hanging than it costs in time upfront.</p>
<p>Tracing each frame onto paper and taping the outlines to the wall is a slower but nearly foolproof version of the same idea.</p>
<p>This step is the single biggest predictor of whether the finished wall actually looks intentional.</p>
${photo("layout.jpg", "Carefully planned gallery wall layout before hanging", 1024, 1024, "layout")}

<h2>Do the Frames Need to Match?</h2>
<p>A matched frame set reads as clean and coordinated; a deliberate mix of frame styles reads as collected over time.</p>
<p>A mixed approach works best with some kind of consistency &mdash; the same metal tone, or a shared color family &mdash; so it reads as curated rather than random.</p>
${photo("frame-game.png", "Mixed frame styles creating visual interest in a gallery wall", 574, 1024, "frames")}

<h2>What Actually Belongs on the Wall</h2>
<p>Art is only one option &mdash; photos, mirrors, small shelves, textiles and found objects all work alongside or instead of traditional framed pieces.</p>
<p>A wall that mixes a few of these categories tends to feel more dimensional than one filled entirely with flat framed prints.</p>
${photo("what-to-include.png", "Gallery wall featuring a mix of art, photos and decor objects", 574, 1024, "belongs")}

<h2>Getting the Spacing Right</h2>
<p>A consistent gap &mdash; roughly 2 to 3 inches between pieces &mdash; reads as intentional, while wildly inconsistent spacing reads as unplanned.</p>
<p>This is one detail worth measuring rather than eyeballing, since small spacing inconsistencies become much more obvious once the wall is finished.</p>
${photo("spacing.png", "Properly spaced gallery wall pieces for a polished look", 574, 1024, "spacing")}

<h2>Making a Mixed Wall Feel Cohesive</h2>
<p>Even a deliberately eclectic gallery wall needs one consistent thread &mdash; a recurring color, a shared frame tone, or consistent spacing &mdash; to avoid reading as cluttered.</p>
<p>Stepping back regularly during the process, rather than hanging everything in one go, makes it easier to catch when the mix has tipped from "curated" into "chaotic."</p>
${photo("cohesive.png", "Gallery wall combining various styles into a cohesive display", 574, 1024, "cohesive")}

<h2>Updating It Without Starting Over</h2>
<p>A gallery wall built with a bit of extra spacing from the start makes it much easier to add or swap a piece later without redoing the whole layout.</p>
<p>Keeping a couple of frames empty or easily swappable gives the wall room to evolve as new art or photos come along.</p>
${photo("updating.png", "Gallery wall designed for easy future updates and additions", 574, 1024, "updating")}

<h2>Common Mistakes Worth Avoiding</h2>
<p>Hanging everything too high is the most frequent mistake &mdash; the center of the arrangement should sit roughly at eye level, not the top piece.</p>
<p>Skipping the floor layout step and hanging directly on the wall is the second most common, and the hardest to fix after the fact.</p>
<p>Too many different frame colors with no unifying thread at all is the third &mdash; a mix needs at least one consistent element to read as intentional.</p>

<h2>Should You Make One?</h2>
<p>A gallery wall is worth the effort for almost any blank wall that gets regular foot traffic and visibility.</p>
<p>Plan the layout on the floor first, commit to either a clear theme or a genuinely cohesive mix, and leave room to update it later.</p>
<p>Done with a bit of planning, it's one of the longest-lasting decor choices a wall can get.</p>
`;

module.exports = { body };
