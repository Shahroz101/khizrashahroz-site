// Body content for "13 Weekend DIY Projects That Change How a Room
// Feels". Numbered idea-list format, 13 ideas matching the source
// 1:1, reordered (grouped into wall/surface projects, storage/function
// projects, and textile/accent projects). Two ideas here — macramé
// wall hangings and framed fabric art — overlap with the existing
// handcrafted-wall-decor-ideas article's deep-dive treatment of the
// same techniques, so both get brief, functional mentions here as
// part of a broader whole-space project list rather than repeating
// that article's styling depth. Source photos have no Pinterest
// links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "diy-home-aesthetics-projects", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Not every home upgrade needs a contractor, a big budget, or even a full weekend.</p>
<p>These 13 projects cover walls, storage and the smaller textile details that quietly change how a room feels, all doable with basic tools and a free afternoon.</p>
<p>Most of them scale up or down depending on how much time and effort gets put in.</p>
${photo("hero.png", "Sunlit bedroom showcasing DIY home aesthetic projects", 1248, 832)}

<h2>1. A Painted Accent Wall</h2>
<p>A single bold wall resets a whole room's mood without the commitment of painting every surface.</p>
<p>This is one of the most forgiving projects on this list &mdash; a mistake is just a second coat away from being fixed.</p>
<p>No art degree required, despite how intimidating a paint roller can feel at first.</p>
${photo("accent-wall.png", "Painted accent wall transforming a room's overall mood", 683, 1024)}

<h2>2. A Peel-and-Stick Tile Backsplash</h2>
<p>A peel-and-stick tile backsplash gives a kitchen or bathroom a real design upgrade without any grout, cutting, or professional installation.</p>
<p>This is one of the most dramatic transformations on the whole list relative to the actual effort involved.</p>
<p>Worth measuring the space carefully before buying, since running short mid-project is a common first-timer mistake.</p>
${photo("tile-backsplash.png", "Peel-and-stick tile backsplash upgrading a kitchen space", 683, 1024)}

<h2>3. A Gallery Wall That Actually Reflects You</h2>
<p>A collection of personal photos, art and small objects arranged together turns a blank wall into the most personal spot in the room.</p>
<p>Laying the arrangement out on the floor first, before any nails go in the wall, saves a lot of patching later.</p>
<p>A loose, varied layout tends to feel more authentic than a perfectly symmetrical grid.</p>
${photo("gallery-wall.png", "Gallery wall reflecting personal style and memories", 683, 1024)}

<h2>4. Floating Shelves for Real Storage</h2>
<p>A simple floating shelf adds genuine storage and display space to a wall that was otherwise doing nothing.</p>
<p>This works especially well over a desk, above a bed, or in a kitchen that's short on cabinet space.</p>
<p>A basic bracket-and-board version is a genuinely approachable first carpentry project for anyone new to DIY.</p>
${photo("floating-shelves.png", "Floating shelves adding function and clutter control", 683, 1024)}

<h2>5. Upcycled Furniture With Real Character</h2>
<p>An old dresser, side table or chair, repainted or reupholstered, brings more personality than most new furniture at a fraction of the cost.</p>
<p>This is a genuinely flexible project &mdash; a simple coat of paint takes an afternoon, while reupholstering takes more planning and skill.</p>
<p>Secondhand pieces with good bones are usually a better starting point than anything already in rough structural shape.</p>
${photo("upcycled-furniture.png", "Upcycled furniture piece full of character and personality", 683, 1024)}

<h2>6. Rope-Wrapped Storage Baskets</h2>
<p>Wrapping plain storage bins or baskets in natural rope or jute instantly upgrades their look without replacing them entirely.</p>
<p>This is one of the cheapest projects on this list, since it works with baskets already on hand.</p>
<p>A hot glue gun and an afternoon are genuinely all this one requires.</p>
${photo("rope-baskets.png", "Rope-wrapped storage baskets adding texture and style", 683, 1024)}

<h2>7. Mason Jar Organizers</h2>
<p>A row of mason jars, mounted or simply grouped on a shelf, organizes small items &mdash; craft supplies, bathroom essentials, kitchen staples &mdash; while looking intentional rather than cluttered.</p>
<p>This is a flexible project that adapts to almost any room needing small-item storage.</p>
<p>A label on each jar turns function into a small styling detail too.</p>
${photo("mason-jars.png", "Mason jar organizers bringing order and charm to a space", 683, 1024)}

<h2>8. A Terracotta Pot Makeover</h2>
<p>Plain terracotta pots take paint, stain or a simple pattern well, turning a basic planter into a genuinely styled object.</p>
<p>This is a low-cost, low-risk project &mdash; terracotta is forgiving to work with and cheap to replace if a first attempt doesn't land.</p>
<p>A cohesive set of painted pots does more for a windowsill or shelf than mismatched plain ones ever will.</p>
${photo("terracotta-pots.png", "Terracotta pot makeover adding a personalized touch to plants", 683, 1024)}

<h2>9. A Vintage Rug Hack</h2>
<p>Fabric paint applied directly to a plain or worn rug can recreate a vintage pattern look for a fraction of what an actual vintage rug would cost.</p>
<p>This works especially well on a rug that's structurally fine but visually boring or dated.</p>
<p>Testing the pattern on a small hidden corner first avoids any irreversible surprises.</p>
${photo("rug-hack.png", "Vintage-inspired rug hack using fabric paint techniques", 683, 1024)}

<h2>10. A Curtain Tie-Dye Refresh</h2>
<p>Plain curtains take a tie-dye or ombré dye treatment surprisingly well, turning a basic window treatment into a genuine style statement.</p>
<p>This is one of the more forgiving textile projects on this list, since imperfect dye patterns tend to look intentional rather than botched.</p>
<p>A cheap pair of plain curtains is a better starting point than risking an expensive existing set.</p>
${photo("curtain-tie-dye.png", "Tie-dye curtain refresh adding color and personality to a room", 683, 1024)}

<h2>11. String Light Ambiance</h2>
<p>A string of warm-toned lights along a shelf, headboard or window frame adds ambient glow that overhead lighting alone can't provide.</p>
<p>This is one of the lowest-effort projects on the entire list &mdash; no tools, no skill required, just placement.</p>
<p>Battery-powered or plug-in versions both work, depending on how close the nearest outlet actually is.</p>
${photo("string-lights.png", "String lights creating warm ambiance in a cozy room", 683, 1024)}

<h2>12. A Macramé Wall Hanging</h2>
<p>A simple macramé piece adds texture to a bare wall and works as a lower-commitment alternative to framed art.</p>
<p>Basic knot patterns are genuinely beginner-friendly, even for someone who's never tried fiber art before.</p>
<p>This pairs naturally with several of the other textile projects on this list for a cohesive, layered look.</p>
${photo("macrame.png", "Macramé wall hanging adding texture to a bare wall", 683, 1024)}

<h2>13. Framed Fabric Art</h2>
<p>A striking piece of fabric, stretched and framed like a canvas, creates custom wall art without any painting skill at all.</p>
<p>This is a fast way to add a large-scale piece to a wall for far less than a comparably sized framed print would cost.</p>
<p>A bold, patterned fabric makes the biggest visual impact relative to the minimal effort involved.</p>
${photo("framed-fabric-art.png", "Framed fabric art serving as a custom, budget-friendly piece", 683, 1024)}

<h2>Wrapping It Up</h2>
<p>None of these 13 projects need to happen in the same weekend.</p>
<p>Pick whichever one solves the most obvious gap in a room right now &mdash; storage, a bare wall, outdated textiles &mdash; and build from there.</p>
<p>Small, deliberate DIY projects add up to a space that feels considered, without ever needing a full renovation.</p>
`;

module.exports = { body };
