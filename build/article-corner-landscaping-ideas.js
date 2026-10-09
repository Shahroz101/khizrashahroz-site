// Body content for "What to Actually Do With an Awkward Garden
// Corner". Guide format, matching the source's 8 content sections.
// Distinct from must-have-garden-plants, cottage-garden-ideas and
// small-backyard-landscaping-ideas — this is specifically about the
// one unused corner most yards have, not whole-yard layout or
// planting choices. Source photos have no Pinterest links, so none
// carry credit captions. Rewritten out of the source's slang-heavy,
// casual voice into the site's calmer tone.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "corner-landscaping-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Almost every yard has one — a corner that never quite got a purpose.</p>
<p>It's not big enough for a real garden bed, not central enough for furniture, so it sits there empty or collects whatever doesn't fit anywhere else.</p>
<p>That corner is actually one of the easiest spots in the whole yard to transform, precisely because expectations for it are so low.</p>
${photo("hero.png", "Charming garden corner transformed with thoughtful landscaping", 1248, 832)}

<h2>Start Small and Let It Grow</h2>
<p>A corner doesn't need a full landscaping plan to go from empty to intentional.</p>
<p>A few potted plants, a small defined bed, or even just a change in ground cover can turn dead space into a deliberate feature almost immediately.</p>
<p>This also means a corner project can expand gradually — there's no need to finish it all in one weekend.</p>
${photo("intro.png", "Small garden corner showing the start of a thoughtful landscaping project", 683, 1024)}
${photo("start-small-1.png", "Cozy corner garden idea that works in a compact space", 683, 1024)}
${photo("start-small-2.png", "Simple corner garden transformation with minimal effort", 683, 1024)}

<h2>Turn It Into a Place to Sit</h2>
<p>A single chair, a small bistro set, or a built-in bench instantly gives a corner a reason to exist.</p>
<p>This works especially well in a corner that gets decent shade or a bit of privacy from a fence or hedge, since it already half-feels like a retreat.</p>
<p>Adding a small side table or a few cushions turns "a chair in the corner" into an actual spot someone wants to sit in.</p>
${photo("chill-zone-1.png", "Relaxing seating area tucked into a garden corner", 683, 1024)}
${photo("chill-zone-2.png", "Cozy corner seating nook surrounded by greenery", 683, 1024)}
${photo("chill-zone-3.png", "Fire pit nestled into a garden corner for evening gatherings", 683, 1024)}

<h2>Use Flowers to Fix a Boring Corner</h2>
<p>A corner with nothing going on visually is often just missing color, not structure.</p>
<p>A cluster of flowering plants in varying heights — tall in the back, shorter toward the front — fills the space without needing any hardscaping at all.</p>
<p>This is one of the lowest-cost, lowest-effort ways to transform a corner, and one of the most forgiving if the first plant choice doesn't work out.</p>
${photo("flower-power-1.png", "Vibrant corner garden bursting with colorful flowers", 683, 1024)}
${photo("flower-power-2.png", "Meticulously designed flower corner adding brightness to the yard", 683, 1024)}

<h2>Give the Corner an Actual Job</h2>
<p>A corner with a defined purpose — a small herb garden, a compost spot, a tool storage nook — reads as intentional even without much decor.</p>
<p>This works well for the corner that's awkward specifically because nothing else in the yard fits there; giving it a job solves two problems at once.</p>
<p>A bit of edging or a low border helps visually separate the purposeful corner from the rest of the lawn.</p>
${photo("add-structure-1.png", "Serene garden corner given a clear sense of purpose", 683, 1024)}
${photo("add-structure-2.png", "Defined garden corner with clear structural boundaries", 683, 1024)}

<h2>Combine Function and Style</h2>
<p>The best corner transformations usually do more than one job at once — a seating spot that's also shaded by a trellis, or a planting bed that also screens a view.</p>
<p>Thinking about what the corner could solve, not just how it could look, tends to produce a more satisfying result than styling alone.</p>
<p>This is where a corner stops feeling like leftover space and starts feeling like a planned part of the yard.</p>
${photo("functional-pretty.png", "Garden corner combining function and beauty seamlessly", 683, 1024)}

<h2>Don't Forget Lighting</h2>
<p>A corner that disappears after dark loses half its value, no matter how well it's planted or furnished during the day.</p>
<p>A few solar stake lights, a string of warm bulbs, or a single lantern extend the corner's use well past sunset.</p>
<p>This is one of the cheapest additions on this whole list and one of the easiest to skip — worth doing last, after the planting and seating are settled.</p>

<h2>Let Personal Style Lead</h2>
<p>A corner done according to someone else's exact plan rarely feels as good as one shaped around what the homeowner actually likes.</p>
<p>A favorite color, a specific plant, a found object with sentimental value — personal touches are what separate a generic corner fix from one that feels like it belongs to the rest of the home.</p>
<p>There's no single correct way to do this; the goal is a corner that gets used, not one that matches a template exactly.</p>

<h2>Final Thoughts</h2>
<p>An awkward corner isn't a problem to hide — it's one of the easiest wins in the whole yard.</p>
<p>Start with one small change, give the space a reason to exist, and let the rest build from there.</p>
<p>Corners deserve better than being the spot nothing else fit.</p>
`;

module.exports = { body };
