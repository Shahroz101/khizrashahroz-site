// Body content for "A Practical Guide to Choosing Bathroom Light
// Fixtures". Guide format (fixture types + buying considerations),
// not a numbered idea list. New topic for the site — a technical
// buying guide distinct from style-focused lighting content. Source
// photos are all AI-generated style with no Pinterest links, 1:1 with
// the content sections, so none carry credit captions. "Key Features"
// section had no photo, kept text-only. Rewritten from scratch in the
// site's calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-light-fixtures-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Bathroom lighting does more work than almost any other fixture choice in the house.</p>
<p>It needs to handle makeup application, shaving, reading in the tub and the 2 a.m. bathroom trip, all from the same setup.</p>
<p>Getting it wrong means either a washed-out, flattering-nothing glare or a dim room that makes every task harder than it needs to be.</p>
<p>This covers the actual fixture types, how to choose between them, and the mistakes worth avoiding.</p>
${photo("hero.png", "Well-lit bathroom with a thoughtfully chosen light fixture", 574, 1024)}

<h2>Why the Fixture Choice Actually Matters</h2>
<p>Bathroom lighting affects function first and mood second &mdash; a mirror with bad lighting makes grooming genuinely harder, not just less pretty.</p>
<p>The right fixture also affects how colors read in the room, including skin tone at the mirror, which matters more here than in almost any other room.</p>
<p>A well-lit bathroom feels bigger and more finished even without touching anything else in the space.</p>
${photo("intro-why.png", "Bathroom lighting creating a functional and mood-appropriate space", 574, 1024)}

<h2>The Fixture Types Worth Knowing</h2>
<p>Most bathrooms end up using a mix of these, not just one.</p>
${photo("intro-types.png", "Variety of bathroom light fixture types for different needs", 574, 1024)}

<h3>Vanity Lights</h3>
<p>Mounted directly above or beside the mirror, vanity lights handle the detail work &mdash; makeup, shaving, skincare.</p>
<p>Side-mounted fixtures reduce the shadows a single overhead vanity light tends to cast across the face.</p>
<p>This is the fixture most worth getting right first, since it affects daily grooming tasks directly.</p>
${photo("vanity-lights.png", "Vanity lights properly illuminating a bathroom mirror", 574, 1024)}

<h3>Ceiling Lights</h3>
<p>A central ceiling fixture provides the room's general ambient light, covering tasks that don't need the focused brightness of vanity lighting.</p>
<p>This is the baseline every bathroom needs, even when other fixture types handle the detail work.</p>
<p>A flush or semi-flush mount keeps the fixture out of the way in a room with limited ceiling height.</p>
${photo("ceiling-lights.png", "Central ceiling light providing ambient bathroom illumination", 574, 1024)}

<h3>Wall Sconces</h3>
<p>Sconces add both function and style, often flanking a mirror or marking a specific zone like a tub or shower entry.</p>
<p>They work well paired with vanity lighting, filling in shadows a single overhead source leaves behind.</p>
<p>This is also one of the more decorative fixture types on this list, doing real visual work beyond pure function.</p>
${photo("wall-sconces.png", "Wall sconces adding both function and style to a bathroom", 574, 1024)}

<h3>Recessed Lights</h3>
<p>Set flush into the ceiling, recessed lights provide clean, unobtrusive general lighting without any visible fixture.</p>
<p>This suits a modern bathroom where visible light fixtures would compete with a minimal design.</p>
<p>Multiple recessed lights spread evenly across the ceiling avoid the harsh single-point shadow a lone fixture creates.</p>
${photo("recessed-lights.png", "Recessed lighting providing clean, unobtrusive bathroom illumination", 574, 1024)}

<h3>LED Strip Lights</h3>
<p>Thin LED strips work well under cabinets, around a mirror frame, or along a tub edge for subtle accent lighting.</p>
<p>This fixture type is less about primary lighting and more about mood and detail &mdash; a soft glow for a nighttime bathroom trip without full brightness.</p>
<p>Dimmable, color-adjustable strips add flexibility that a fixed fixture can't match.</p>
${photo("led-strip-lights.png", "LED strip lighting adding subtle accent illumination to a bathroom", 574, 1024)}

<h2>How to Actually Choose</h2>
<p>Bathroom size and layout set real constraints &mdash; a small bathroom may only need one well-placed fixture, where a larger one needs a layered combination.</p>
${photo("size-layout.png", "Bathroom lighting chosen to fit the room's specific size and layout", 574, 1024)}
<p>Function comes before style in the decision order. A fixture that looks great but doesn't light the mirror properly isn't doing its real job.</p>
${photo("function-first.png", "Functional bathroom lighting prioritized for practical daily use", 574, 1024)}
<p>Once function is settled, matching the fixture finish and shape to the room's existing style ties the whole space together.</p>
${photo("match-style.png", "Bathroom light fixtures matched to the room's overall design style", 574, 1024)}

<h2>Features Worth Checking Before Buying</h2>
<p>A damp or wet-rated label matters for anything installed near a shower or tub &mdash; a standard fixture isn't built for that exposure.</p>
<p>Color temperature affects how the whole room reads &mdash; warm light (around 2700-3000K) flatters skin tone better than a cooler, clinical white.</p>
<p>Dimmability adds real flexibility between a bright task-lighting mode and a softer evening one.</p>
<p>Energy-efficient LED options now cost little more than standard bulbs while lasting considerably longer.</p>

<h2>Mistakes Worth Avoiding</h2>
<p>Relying on a single overhead fixture for the whole room almost always leaves the mirror under-lit for actual grooming tasks.</p>
<p>Choosing a fixture based purely on looks, without checking it's rated for a bathroom's humidity, risks a fixture that fails early.</p>
<p>Skipping dimmers removes flexibility the room will likely need at different times of day.</p>
<p>Placing vanity lighting too high above the mirror creates the same harsh shadow problem a single ceiling light does.</p>
${photo("common-mistakes.png", "Bathroom demonstrating lighting setup avoiding common mistakes", 574, 1024)}

<h2>Quick Guidelines to Keep in Mind</h2>
<p>Layer at least two fixture types &mdash; ambient and task lighting &mdash; rather than relying on just one.</p>
<p>Choose warm-toned bulbs for anywhere near the mirror.</p>
<p>Check the damp or wet rating before buying anything for a shower or tub area.</p>
<p>Add a dimmer wherever the budget allows for it.</p>
${photo("quick-tips.png", "Well-planned bathroom lighting following key practical guidelines", 574, 1024)}

<h2>Final Thoughts</h2>
<p>The right bathroom lighting setup is rarely one single fixture &mdash; it's a combination that covers both daily function and overall mood.</p>
<p>Start with the vanity lighting, since that's what affects daily grooming tasks the most directly.</p>
<p>Layer in ceiling or recessed lighting for general coverage, then add sconces or LED strips for the finishing touch.</p>
<p>Getting the function right first makes every style decision after that much easier.</p>
`;

module.exports = { body };
