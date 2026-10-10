// Body content for "The Finishing Touches That Make a Foyer Actually
// Shine". Guide format, matching the source's 11 content sections.
// Heavy overlap with the existing modern-entryway-ideas article
// (lighting, storage, rugs, seating, accent walls all already
// covered there), so this rewrite assumes those furniture basics are
// already handled and focuses on the finishing/sensory layer instead
// — scent, texture mixing, decluttering habits, a personal welcome
// moment — the detail work that separates a furnished entryway from
// one that actually feels finished. Source had zero content photos
// for any section, only a hero stock image, so the body runs
// text-only after the hero.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "foyer-finishing-touches", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A foyer can have the right console table, the right lighting, the right rug, and still feel unfinished.</p>
<p>The furniture gets a space most of the way there. What actually makes it shine is a layer most guides skip entirely.</p>
<p>This covers that layer specifically — the finishing details that turn a decorated entryway into one that feels genuinely considered.</p>
${photo("hero.jpg", "Beautifully styled foyer with elegant finishing touches", 1400, 963)}

<h2>Why the Finishing Layer Matters</h2>
<p>The furniture pieces get noticed first, but it's the smaller details that get noticed longest — the ones a guest can't quite name but still feels.</p>
<p>A foyer with great furniture and no finishing layer reads as staged. One with both reads as lived-in and considered.</p>

<h2>Start With a Statement Piece, Then Build Around It</h2>
<p>Whatever the foyer's anchor piece is &mdash; a console table, a bold mirror, a striking light fixture &mdash; everything else in the space should support it rather than compete with it.</p>
<p>This is worth confirming before layering in any of the finishing details below, since they all get chosen in relation to this one piece.</p>

<h2>Let Storage Disappear Into the Design</h2>
<p>A closed cabinet, a lidded basket, or a bench with hidden storage keeps function present without it looking purely functional.</p>
<p>The goal is storage that reads as a design choice first and a practical solution second.</p>

<h2>Treat Wall Details as Part of the Finishing Work</h2>
<p>Paint, wallpaper or wood paneling on just the foyer walls gives the space a defined identity separate from whatever room it opens into.</p>
<p>This is one of the bigger commitments on this list, but also one of the longest-lasting finishing choices.</p>

<h2>Keep It Genuinely Clutter-Free</h2>
<p>Shoes by the door, mail on the console, bags dropped on the bench &mdash; this is the fastest way to undo every other styling decision in the room.</p>
<p>A simple daily reset, or a dedicated spot for each category of clutter, protects the rest of the finishing work from being undone within a day.</p>

<h2>Don't Skip the Scent</h2>
<p>A candle, a diffuser, or fresh flowers give the foyer a sensory layer that's easy to forget when focused purely on what's visible.</p>
<p>This is one of the most overlooked finishing details in any entryway, and one of the fastest to add.</p>
<p>A scent that's distinct from the rest of the house gives the foyer its own small identity the moment someone walks in.</p>

<h2>Mix Textures for a Considered Feel</h2>
<p>A smooth console, a woven basket, a nubby rug, a glossy mirror frame &mdash; combining several different textures in one small space does more for a designer feel than color or furniture choice alone.</p>
<p>This is a genuinely low-cost way to elevate the space, since it's about combination rather than new purchases.</p>

<h2>Add Personality Through Art, Plants or Quirky Objects</h2>
<p>A piece of art, a well-placed plant, or one slightly unexpected object gives the foyer a point of view rather than a generic, catalog-styled look.</p>
<p>This is where the space stops looking like anyone's entryway and starts looking like this specific home's entryway.</p>

<h2>Give the Space a Personal Welcome Moment</h2>
<p>A family photo, a meaningful small object, or a handwritten note on a tray all turn a functional entry point into something that feels specific to the people who live there.</p>
<p>This single detail does more for warmth than any amount of furniture or lighting on its own.</p>

<h2>Layer the Lighting</h2>
<p>A mix of overhead, a lamp, and maybe a sconce near the statement piece keeps the foyer from relying on one flat light source.</p>
<p>This also lets the space shift mood between a bright morning entry and a warmer evening welcome.</p>

<h2>Let the Rug Tie It Together</h2>
<p>The rug underfoot pulls the whole finishing layer together, grounding the furniture, the wall color and the smaller objects into one cohesive scene.</p>
<p>A rug chosen last, after the rest of the space is settled, tends to work better than one chosen first.</p>

<h2>Give Seating a Reason to Be There</h2>
<p>A single bench or chair should be genuinely useful &mdash; for putting on shoes, setting down a bag &mdash; not just decorative filler.</p>
<p>Function and style aren't competing goals here; the best entryway seating does both.</p>

<h2>Your Foyer, Your Story</h2>
<p>None of these finishing details need to happen all at once.</p>
<p>Start with scent and decluttering, since both cost almost nothing and have an immediate effect, then layer in texture and a personal touch over time.</p>
<p>The furniture gets a foyer decorated. The finishing layer is what makes it shine.</p>
`;

module.exports = { body };
