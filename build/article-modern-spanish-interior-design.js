// Body content for "Modern Spanish Interior Design for a Whole
// Stylish Home". Guide format, matching the source's 9 content
// sections. Distinct room scope from the two existing Spanish
// bathroom articles (modern-spanish-bathroom-elements,
// spanish-bathroom-finishing-layer) — this covers the whole home's
// living spaces and furniture, not one room. Source photos have no
// Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "modern-spanish-interior-design", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Modern Spanish interior design carries a whole-home logic, not just a bathroom or kitchen treatment.</p>
<p>The same warm materials and restrained styling that work in one room should carry through the rest of the house for the look to actually read as a coherent style, not a single styled corner.</p>
${photo("hero.png", "Elegant modern Spanish interior with warm, natural styling", 1248, 832)}

<h2>Start With an Earthy Palette</h2>
<p>Warm terracottas, sandy neutrals and deep olive or rust accents form the base the rest of the home gets built on.</p>
<p>Carrying this palette consistently from room to room, rather than confined to just one space, is what makes the whole home read as intentionally styled.</p>
${photo("earthy-palette.png", "Warm earthy color palette forming the home's design foundation", 683, 1024)}

<h2>Use Natural Materials Everywhere</h2>
<p>Stone, wood, rattan and other genuine materials should show up throughout the home, not concentrated in just one statement room.</p>
<p>This consistency across spaces is more important to the style's success than any single material choice in isolation.</p>
${photo("natural-materials.png", "Natural materials like stone and wood used consistently throughout", 683, 1024)}

<h2>Use Statement Tile With Restraint</h2>
<p>One bold tile moment &mdash; a kitchen backsplash, an entryway floor &mdash; makes a real statement; several competing tile moments throughout the home dilute each other.</p>
<p>Choosing just one or two rooms for a genuine tile statement keeps the whole home feeling considered rather than overdone.</p>
${photo("statement-tiles.png", "A bold statement tile moment chosen with deliberate restraint", 683, 1024)}

<h2>Bring In Wrought Iron and Curves</h2>
<p>Wrought iron fixtures and furniture with genuine curves bring an authentically Spanish architectural detail into the home that straight-lined modern furniture can't replicate.</p>
<p>This works especially well in railings, light fixtures and a few key furniture pieces rather than attempting it everywhere at once.</p>
${photo("wrought-iron.png", "Wrought iron details bringing authentic Spanish architectural character", 683, 1024)}

<h2>Choose Furniture That's Low-Key but Luxe</h2>
<p>Simple silhouettes in genuinely good materials read as more sophisticated than ornate furniture in lesser materials.</p>
<p>This furniture philosophy carries the restraint-over-ornamentation principle central to the whole style into the biggest pieces in any room.</p>
${photo("furniture.png", "Simple, luxe furniture silhouettes in genuinely quality materials", 683, 1024)}

<h2>Light It Moodier Than Usual</h2>
<p>Warm, slightly dim ambient lighting throughout the home, rather than bright and even, supports the style's relaxed Mediterranean feel.</p>
<p>This is a whole-home lighting philosophy, not just a single-room choice &mdash; consistency here matters as much as the palette does.</p>
${photo("moody-light.png", "Moody, warm lighting supporting a relaxed Mediterranean atmosphere", 683, 1024)}

<h2>Add Vintage Touches Without the Dust</h2>
<p>A genuinely aged piece &mdash; a vintage rug, an antique mirror, a weathered side table &mdash; brings real character that new furniture alone can't provide.</p>
<p>This doesn't require an entirely vintage-furnished home; one or two considered pieces per room do the job.</p>
${photo("vintage-touches.png", "Vintage pieces adding authentic character throughout the home", 683, 1024)}

<h2>Let Plants Carry the Mediterranean Mood</h2>
<p>Indoor plants throughout the home extend the style's outdoor connection into every room, not just one.</p>
<p>This is one of the lowest-cost, highest-consistency ways to carry the look from room to room.</p>
${photo("plants.png", "Indoor plants carrying the Mediterranean mood throughout the home", 683, 1024)}

<h2>Keep It Simple and Intentional</h2>
<p>Fewer, better-chosen pieces throughout the home outperform a fully decorated house trying to include every element of the style at once.</p>
<p>This restraint is the thread that ties every other choice on this list together into one coherent whole-home style.</p>
${photo("keep-simple.png", "Simple, intentional styling tying the whole home together", 683, 1024)}

<h2>Final Thoughts</h2>
<p>None of these 9 elements need to be applied to every room immediately.</p>
<p>Start with the palette and materials, since both carry most easily across the whole home, then layer in furniture, lighting and vintage touches room by room.</p>
<p>A modern Spanish home reads as coherent when the same restraint and warmth show up consistently, not when any single room gets all the attention.</p>
`;

module.exports = { body };
