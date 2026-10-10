// Body content for "How to Create Garden Art That Actually Looks
// Intentional". Guide format, condensed from a 14-section source
// (closing "quick tips" folded into final thoughts). New topic for
// the site, no existing garden-art article. Steps 1, 3, 5, 7 and 8
// (style, materials, vertical art, mixing with nature, personalizing)
// had no source photo, kept text-only. Source photos have no
// Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "garden-art-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Garden art can transform an outdoor space or just look like clutter that happened to end up outside.</p>
<p>The difference comes down to a handful of decisions made before a single piece gets placed &mdash; style, placement, and how it relates to the plants around it.</p>
<p>This walks through that process.</p>
${photo("hero.png", "Stunning garden art adding charm to an outdoor space", 1312, 736)}

<h2>Why Garden Art Actually Transforms a Space</h2>
<p>Plants alone give a garden life, but art gives it a point of view &mdash; something that couldn't exist in anyone else's yard in quite the same way.</p>
<p>It also draws the eye to specific spots, which helps a garden read as designed rather than just planted.</p>
${photo("why-transforms.png", "Garden art transforming an outdoor space with unique charm", 574, 1024)}

<h2>Step 1: Choose a Style First</h2>
<p>Whimsical, modern, rustic or classical &mdash; picking a general style before buying or making anything keeps the eventual collection from reading as mismatched.</p>
<p>This decision should take cues from the home's own architecture and the garden's existing planting style, not just personal taste in isolation.</p>

<h2>Step 2: Plan the Placement</h2>
<p>A piece placed where it naturally draws the eye &mdash; at a path's end, in a gap between plantings &mdash; does more work than the same piece placed randomly.</p>
<p>Walking the garden and noting where the eye naturally lands is a more reliable method than guessing from a single vantage point.</p>
${photo("plan-spots.png", "Thoughtfully planned garden art placement drawing the eye naturally", 574, 1024)}

<h2>Step 3: Pick Materials That Last</h2>
<p>Metal, ceramic and treated wood all hold up to real outdoor exposure better than materials meant for indoor use.</p>
<p>Matching the material to the local climate &mdash; humidity, freeze-thaw cycles, direct sun &mdash; matters more here than for almost any indoor decor decision.</p>

<h2>Step 4: Start Simple With a DIY Piece</h2>
<p>A simple first project &mdash; painted stones, a repurposed object, a basic mosaic &mdash; builds confidence before attempting anything more ambitious.</p>
<p>This is also the lowest-cost way to test whether a particular style actually works in the space before investing in something bigger.</p>
${photo("diy-simple.png", "Simple DIY garden art project adding personal charm to the yard", 574, 1024)}

<h2>Step 5: Add Vertical Art for Impact</h2>
<p>A tall sculptural piece, a trellis with art built in, or a wall-mounted piece on a fence all use vertical space a garden often leaves completely empty.</p>
<p>This adds visual drama that ground-level pieces alone can't provide, especially in a smaller garden with limited floor space.</p>

<h2>Step 6: Light It for the Evening</h2>
<p>A solar spotlight or a simple strand of string lights lets a piece remain visible and striking well after the sun goes down.</p>
<p>This is one of the lowest-effort additions on this entire list, and one that significantly extends how much the piece actually gets seen and enjoyed.</p>
${photo("light-it-up.png", "Garden art beautifully illuminated for nighttime viewing", 574, 1024)}

<h2>Step 7: Let Art and Plants Work Together</h2>
<p>A piece surrounded by complementary plantings reads as integrated into the garden rather than placed on top of it.</p>
<p>Climbing plants trained around a sculptural piece, or foliage chosen to echo the art's color, both reinforce this connection.</p>

<h2>Step 8: Make It Personal</h2>
<p>A piece with real meaning &mdash; handmade, inherited, or tied to a specific memory &mdash; carries more weight than anything chosen purely for how it looks.</p>
<p>This is what makes a garden's art collection feel like it belongs to someone specific, not like it came from a generic catalog.</p>

<h2>Keeping It Looking Fresh</h2>
<p>Regular cleaning and the occasional reseal or repaint keeps outdoor art from looking neglected faster than the plants around it.</p>
<p>Rearranging pieces occasionally, rather than leaving every piece permanently fixed, keeps the garden feeling considered rather than static.</p>

<h2>You're Ready to Rock Your Garden Art</h2>
<p>None of these 8 steps need to happen all in one season.</p>
<p>Start with style and placement, since both shape everything that follows, then build the collection piece by piece from there.</p>
<p>Done thoughtfully, garden art turns a planted space into one with a genuine point of view.</p>
`;

module.exports = { body };
