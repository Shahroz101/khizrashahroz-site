// Body content for "15 Above-Fireplace Ideas Built Around Scale and
// Proportion". Numbered idea-list format with a condensed intro
// covering the source's "why it matters" and "common mistakes"
// sections, since both had their own photo. Topic heavily overlaps
// with the existing mantel-decor-ideas article (mirror, layered
// artwork, symmetry, sculptural decor, TV above the mantel all appear
// there too), so this one leans into the scale/proportion decision
// framework the other doesn't cover, rather than re-listing the same
// object vocabulary. Ideas 4, 11 and 13 had no source photo, kept
// text-only to match. Two idea photos (oversized artwork, slimline
// mirror) had no Pinterest pin in the source, left uncredited to
// match. The source had two misattributed/fabricated designer quotes
// (Emily Henderson, Studio McGee) — cut entirely per standing policy,
// not reproduced in any form. Rewritten from scratch in the site's
// calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "above-fireplace-scale-proportion", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "above-fireplace-scale-proportion", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>`;
}

const body = `
<p>The wall above a fireplace carries more visual weight than almost any other spot in a living room.</p>
<p>Get it right, and the whole room feels pulled together.</p>
<p>Get it wrong, and not much else in the room can fully make up for it.</p>
<p>The good news: the fix usually comes down to scale, not a full redesign.</p>
${pinPhoto("hero.jpg", "Fireplace mantel styled with a round mirror, dried branches and ceramic vases", 726, 1024, "https://www.pinterest.com/pin/9007268002680784/", "layered mantel styling")}

<h2>The Mistakes That Undo It Fastest</h2>
<p>A tiny frame above a large fireplace looks lost rather than intentional.</p>
<p>A TV mounted too high for comfortable viewing solves a design problem by creating a daily one.</p>
<p>An overcrowded mantel &mdash; plants, frames, vases, candles, books all competing &mdash; stops reading as styled and starts reading as cluttered.</p>
<p>Each of these comes back to the same root cause: not accounting for scale before decorating.</p>
${pinPhoto("intro-mistakes.jpg", "Fireplace with an awkwardly small piece of art that doesn't fill the wall", 736, 923, "https://www.pinterest.com/pin/1688918605317024/", "common above-fireplace mistake")}

<h2>Scale and Proportion Come First</h2>
<p>Before picking a style, the fireplace itself sets the rules.</p>
<p>A piece hung above it should generally span at least two-thirds of the mantel's width &mdash; narrower, and it reads as undersized no matter how nice it is on its own.</p>
<p>A tall fireplace with a high ceiling can handle a vertical, dramatic piece. A low, wide fireplace usually wants something horizontal instead.</p>
<p>Measuring the actual wall before shopping for anything saves a return trip later.</p>

<h2>1. Oversized Statement Artwork</h2>
<p>One large piece, properly scaled to the wall, does more than a cluster of smaller ones ever could.</p>
<p>It gives the eye one clear place to land instead of several competing ones.</p>
<p>Abstract, landscape or a bold graphic print all work, as long as the size is right.</p>
<p>This is often the simplest fix for a fireplace wall that's felt unfinished for a while.</p>
${photo("oversized-artwork.jpg", "Large-scale abstract artwork hung above a fireplace mantel", 736, 981)}

<h2>2. A Minimal Floating Shelf</h2>
<p>A single floating shelf above the fireplace keeps the styling flexible without permanent built-ins.</p>
<p>A few curated objects &mdash; not a crowd of them &mdash; let the shelf read as intentional.</p>
<p>It's easy to update seasonally without redoing the whole wall.</p>
<p>This suits a smaller fireplace that can't support a heavier, more built-in treatment.</p>
${pinPhoto("floating-shelf.jpg", "Minimal floating shelf above a fireplace styled with curated decor", 736, 920, "https://www.pinterest.com/pin/703756188357948/", "floating shelf styling")}

<h2>3. A Slimline Mirror</h2>
<p>A mirror above the fireplace bounces light back into the room, which matters most in a space with limited natural light.</p>
<p>A slim frame keeps it from feeling heavy, even at a larger scale.</p>
<p>Round, arched or rectangular all work, as long as the proportions match the fireplace below.</p>
<p>This is one of the few above-fireplace choices that's genuinely functional, not just decorative.</p>
${photo("slimline-mirror.jpg", "Slimline mirror hung above a fireplace to reflect light into the room", 735, 849)}

<h2>4. Built-In Shelving That Frames the Fireplace</h2>
<p>Flanking the fireplace with built-in shelving turns the whole wall into a single cohesive feature.</p>
<p>It adds real storage and display space without needing a floating shelf directly above the mantel.</p>
<p>This works best as a planned renovation rather than an add-on, since it changes the wall's structure.</p>
<p>Once it's in place, it tends to become the most-used storage in the room.</p>

<h2>5. A Low-Profile TV</h2>
<p>A TV above the fireplace is common for a reason &mdash; it's often the only practical spot in the room.</p>
<p>Keeping it low-profile and properly scaled to the mantel keeps it from dominating the wall.</p>
<p>A frame-style TV or a sliding art cover both soften its presence when it's off.</p>
<p>Mounting height matters more than most people expect &mdash; too high, and it's uncomfortable to actually watch.</p>
${pinPhoto("low-profile-tv.jpg", "Low-profile TV mounted above a fireplace with balanced proportions", 736, 552, "https://www.pinterest.com/pin/281543719643252/", "low-profile TV mount")}

<h2>6. Textured Wall Panels or Slatted Wood</h2>
<p>A textured treatment behind the mantel adds depth without relying on a single large object.</p>
<p>Slatted wood, fluted panels or a subtle 3D texture all catch light differently throughout the day.</p>
<p>This pairs especially well with a TV mounted above the fireplace, since the texture adds interest even when the screen is off.</p>
<p>It's a bigger project than hanging art, but it changes the whole wall rather than just one section of it.</p>
${pinPhoto("textured-panels.jpg", "Textured wood wall panels installed behind a fireplace feature", 736, 981, "https://www.pinterest.com/pin/7529524373199506/", "textured wood paneling")}

<h2>7. Sculptural Objects That Read as Art</h2>
<p>A sculptural piece doesn't need a frame to hold a wall's attention.</p>
<p>Ceramic, wood or metal forms all work, especially mounted on a simple bracket or small shelf.</p>
<p>This suits a fireplace wall that already has strong architectural detail and doesn't need more visual noise.</p>
<p>One well-chosen piece tends to outperform several smaller decorative objects combined.</p>
${pinPhoto("sculptural-objects.jpg", "Sculptural decorative object displayed above a fireplace mantel", 736, 981, "https://www.pinterest.com/pin/2392606045581579/", "sculptural object styling")}

<h2>8. A Floor-to-Ceiling Stone or Plaster Feature</h2>
<p>Extending stone or plaster the full height of the wall turns the fireplace into the room's clear architectural anchor.</p>
<p>This is a bigger commitment than any of the decorative options, but it rarely needs updating once it's done.</p>
<p>It suits a room built around the fireplace as the primary focal point.</p>
<p>Once this is in place, very little additional decor is needed above it at all.</p>
${pinPhoto("stone-plaster-feature.jpg", "Floor-to-ceiling stone feature wall surrounding a fireplace", 736, 981, "https://www.pinterest.com/pin/2040762328589549/", "floor-to-ceiling stone feature")}

<h2>9. Layered Mantel Styling With Depth</h2>
<p>Layering objects at different depths and heights on the mantel itself adds dimension without needing anything mounted on the wall above.</p>
<p>A taller piece in back, a medium object to the side, and one low accent in front keeps the eye moving.</p>
<p>This works well alongside a mirror or art, rather than instead of it.</p>
<p>It's one of the easiest styling choices to adjust seasonally too.</p>
${pinPhoto("layered-mantel.jpg", "Layered mantel decor with varied heights and depths for visual interest", 683, 1024, "https://www.pinterest.com/pin/211174979051856/", "layered mantel styling")}

<h2>10. A Gallery Wall That Stays Organized</h2>
<p>A gallery wall above the fireplace works, but only when it's planned rather than assembled piece by piece.</p>
<p>A consistent frame color or a shared mat width keeps a mix of art sizes from feeling random.</p>
<p>Laying the arrangement out on the floor first avoids a wall full of extra nail holes.</p>
<p>This suits a collector or anyone with a growing art collection that doesn't fit one single piece.</p>
${pinPhoto("gallery-wall.jpg", "Organized gallery wall of framed art displayed above a fireplace", 667, 1000, "https://www.pinterest.com/pin/20758848276132586/", "organized gallery wall")}

<h2>11. A Single Vertical Piece</h2>
<p>For a narrower or taller fireplace, one vertical piece often reads better than a wide horizontal one.</p>
<p>A tall mirror, a narrow art print, or a vertical sculptural element all fit this shape well.</p>
<p>This suits a more modern or minimal fireplace surround, where a single clean line feels more intentional than a cluster of items.</p>
<p>Less competes for attention, which keeps the whole wall feeling calm.</p>

<h2>12. Bookshelves Integrated Above the Fireplace</h2>
<p>Built-in shelving that continues above the fireplace itself, not just beside it, turns the wall into real storage.</p>
<p>Books add color and texture while also being genuinely useful.</p>
<p>This requires more planning than most options on this list, since weight and mounting become real considerations that high.</p>
<p>Done well, it reads as custom millwork rather than an afterthought.</p>
${pinPhoto("bookshelves.jpg", "Built-in bookshelves integrated into the wall above a fireplace", 600, 800, "https://www.pinterest.com/pin/280700989270440181/", "integrated bookshelf styling")}

<h2>13. No Decor at All</h2>
<p>Leaving the space above the fireplace empty is a real option, not a placeholder until something better comes along.</p>
<p>A fireplace with strong material or architectural detail of its own often doesn't need anything added above it.</p>
<p>This suits a room that already has visual interest elsewhere and doesn't need another focal point competing for attention.</p>
<p>Restraint here can read as more confident than filling the space just because it's there.</p>

<h2>14. Mixed Materials for Quiet Contrast</h2>
<p>Combining two or three materials &mdash; wood, metal, stone, glass &mdash; above the fireplace adds interest without relying on one statement piece.</p>
<p>The key is restraint: two or three materials read as intentional, five starts to feel chaotic.</p>
<p>This works especially well paired with a simpler, more minimal mantel below.</p>
<p>It's a subtler approach than a single bold piece, but it rewards a closer look.</p>
${pinPhoto("mixed-materials.jpg", "Mixed material styling combining wood, metal and stone above a fireplace", 736, 981, "https://www.pinterest.com/pin/32228953575607615/", "mixed material styling")}

<h2>15. Personalized Art That Tells a Story</h2>
<p>Not every above-fireplace choice needs to come from a store.</p>
<p>A family photo enlarged and properly framed, a piece from a meaningful trip, or art made by someone in the house all carry weight a generic print can't match.</p>
<p>The same scale rules still apply &mdash; personal doesn't mean undersized.</p>
<p>This option tends to make the whole room feel more like an actual home than a showroom.</p>
${pinPhoto("personalized-art.jpg", "Personalized family artwork displayed prominently above a fireplace", 616, 925, "https://www.pinterest.com/pin/116812184079638942/", "personalized art display")}

<h2>Final Thoughts</h2>
<p>Trust the actual wall, not whatever's trending this year.</p>
<p>Measure first, then choose a direction that matches the fireplace's real scale and the room's existing style.</p>
<p>A piece sized correctly for the space will always outperform a trendy one that's the wrong fit.</p>
<p>Start with proportion, and the rest of the decision gets a lot easier.</p>
`;

module.exports = { body };
