// Body content for "How to Actually Dig and Edge a Flower Bed".
// Guide format, matching the source's 8 content sections. Distinct
// from the existing flower-bed-edging-materials article, which covers
// material choice (stone, metal, brick, wood, concrete, living,
// mixed) — this is the physical installation technique: planning,
// digging, shaping and maintaining the edge itself, independent of
// which material eventually gets used. Several sections (planning,
// digging, shaping, maintenance) had no source photo, kept text-only.
// Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "flower-bed-edging-technique", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Choosing an edging material is one decision. Actually digging and shaping the edge is a separate skill entirely.</p>
<p>This covers the physical technique &mdash; the part that determines whether the edge looks crisp and intentional, or vaguely dug and uneven, regardless of which material eventually goes in it.</p>
${photo("hero.png", "Essential garden tools for creating a flower bed edge", 1248, 832)}

<h2>Why Bother With an Edge at All</h2>
<p>A defined edge is what actually stops grass from creeping into a bed and mulch from drifting onto the lawn &mdash; it's function first, aesthetics second.</p>
<p>It's also one of the fastest ways to make an entire garden look more maintained, even before anything else in the bed gets touched.</p>
${photo("why-bother.png", "Well-defined flower bed edge improving the garden's overall look", 683, 1024)}

<h2>Planning Before Digging</h2>
<p>Marking the intended line with a hose or rope before cutting anything lets the shape get adjusted freely, with zero commitment, before a single shovel touches the ground.</p>
<p>Standing back and viewing the marked line from a distance, not just up close, catches awkward curves that are hard to see while standing right next to them.</p>

<h2>The Tools That Actually Matter</h2>
<p>A half-moon edger or a flat spade, a garden hose for marking curves, and a basic pair of gloves cover genuinely everything required &mdash; no specialized equipment needed.</p>
<p>A string line and stakes help keep straight sections honest, where a hose is more useful for anything curved.</p>
${photo("tools.png", "Basic garden tools needed for edging a flower bed", 683, 1024)}

<h2>Digging the Edge</h2>
<p>A clean, angled cut &mdash; roughly 45 degrees, several inches deep &mdash; creates a defined trench that physically separates the bed from the lawn, not just a visual line.</p>
<p>Working in small sections, rather than trying to dig the entire perimeter in one pass, keeps the cut consistent throughout.</p>

<h2>Smoothing and Shaping</h2>
<p>Cleaning up the cut edge after the initial dig &mdash; removing loose soil, straightening any wobble in the line &mdash; is what separates a rough first pass from a genuinely finished edge.</p>
<p>This step is easy to rush, but it's the difference between an edge that reads as deliberate and one that reads as merely attempted.</p>

<h2>Mulching the Edge</h2>
<p>A layer of mulch along the freshly cut edge finishes the look and helps the line hold its shape longer before the next maintenance pass.</p>
<p>Bare dirt along a fresh edge looks unfinished even when the cut itself is clean &mdash; mulch is what makes the whole thing read as complete.</p>

<h2>Keeping the Edge Maintained</h2>
<p>A quick re-cut every few weeks during the growing season keeps grass from creeping back across the line, which happens faster than most people expect.</p>
<p>This maintenance habit matters more for a soil-cut edge than for a hard material edge, since there's nothing physically blocking regrowth beyond the clean line itself.</p>

<h2>Choosing a Style for the Garden</h2>
<p>A soft, curved edge suits a cottage or informal garden; a crisp, straight edge suits a more modern or formal layout.</p>
<p>This decision should echo the rest of the garden's existing lines &mdash; an edge style that fights the garden's overall shape reads as an afterthought rather than a considered choice.</p>
${photo("choosing-style.png", "Choosing the right edging style to match the garden's character", 683, 1024)}

<h2>Go Forth and Edge With Confidence</h2>
<p>None of this requires special skill, just patience through the planning and digging stages.</p>
<p>Mark the line, dig it cleanly, and maintain it regularly &mdash; the technique matters more than any tool or material choice that comes after it.</p>
`;

module.exports = { body };
