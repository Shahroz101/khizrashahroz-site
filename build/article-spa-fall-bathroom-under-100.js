// Body content for "A Cozy, Spa-Like Fall Bathroom for Under $100".
// Numbered idea-list format, matching the source's 8 ideas plus budget
// breakdown. Distinct from the existing spa-bathroom-reality-check
// article (a realism-ranking listicle across 20 varied features, not
// fall-specific or a hard $100 budget) — this is a concrete seasonal
// project with an explicit price ceiling. Source had Amazon "shop
// this" images embedded throughout — per established precedent, only
// local lifestyle photos used, no branded products named.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "spa-fall-bathroom-under-100", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A spa-like fall bathroom sounds like a project with a real budget attached.</p>
<p>It doesn't have to be &mdash; eight targeted changes, kept under a genuine $100 total, cover most of what actually creates that feeling.</p>
<p>This is the specific plan, not a vague inspiration list.</p>
${photo("hero.jpg", "Cozy spa-like fall bathroom styled on a budget", 1400, 935)}
${photo("intro.png", "Warm, inviting fall bathroom achieved without a big budget", 574, 1024)}

<h2>1. Swap in Warm, Earthy Textiles</h2>
<p>A new bath mat and a couple of towels in a warm, fall-appropriate tone do more for the room's feel than almost anything else on this list.</p>
<p>This is also one of the genuinely necessary purchases &mdash; towels wear out regardless, so this spend does double duty.</p>
${photo("textiles.png", "Warm, earthy textiles bringing cozy fall tones to the bathroom", 574, 1024)}

<h2>2. Add Warm, Ambient Lighting</h2>
<p>A warm-toned bulb swap, or a small plug-in lamp if the room allows one, shifts the whole mood for the cost of a single bulb.</p>
<p>This is one of the cheapest items on the entire list relative to the difference it makes.</p>
${photo("lighting.png", "Warm ambient lighting transforming the bathroom's mood", 574, 1024)}

<h2>3. Bring in Fall Scents Properly</h2>
<p>A single good candle in a warm, spiced scent does more for the spa feeling than several cheaper, less considered ones.</p>
<p>This is worth spending a bit more on relative to its small share of the total budget, since scent does a disproportionate amount of the atmospheric work.</p>
${photo("scents.png", "Fall-scented candle adding a cozy spa atmosphere", 574, 1024)}

<h2>4. Use Natural Decor to Soften the Room</h2>
<p>A small plant, a simple wood tray, or a few natural elements soften a bathroom's typically hard, cool surfaces.</p>
<p>This is a low-cost category, since many of these items can come from what's already around the house rather than a fresh purchase.</p>
${photo("natural-decor.png", "Natural decor elements softening the bathroom's hard surfaces", 574, 1024)}

<h2>5. Style the Counter Like a Mini Spa</h2>
<p>A simple tray holding a few bath products, arranged intentionally rather than left as clutter, turns the counter into a small styled moment.</p>
<p>This costs nothing beyond the tray itself, since it's mostly a matter of arranging what's already there.</p>
${photo("counter-styling.png", "Styled bathroom counter arranged like a mini spa", 574, 1024)}

<h2>6. Upgrade One Real Element</h2>
<p>Picking a single higher-impact upgrade &mdash; a new shower curtain, a nicer soap dispenser &mdash; and keeping everything else budget-friendly stretches the total further than spreading the budget evenly.</p>
<p>One genuinely nice item surrounded by budget pieces reads better than several mediocre items at the same total cost.</p>
${photo("upgrade-one.png", "One standout upgrade elevating the whole bathroom's look", 574, 1024)}

<h2>7. Add Cozy Details That Feel Intentional</h2>
<p>A small basket, a seasonal touch on the counter, or a simple piece of art all add personality without much additional cost.</p>
<p>These final details are what separate a room that looks thrown together from one that reads as genuinely finished.</p>
${photo("cozy-details.png", "Cozy intentional details completing the bathroom's fall transformation", 574, 1024)}

<h2>8. Clean It Like It Matters</h2>
<p>A genuinely deep clean &mdash; grout, fixtures, mirrors &mdash; makes every other change on this list look better than it would in a merely tidy room.</p>
<p>This is the one item on the list that costs nothing but time, and it's arguably the highest-leverage step of all.</p>
${photo("clean.png", "Spotless, deep-cleaned bathroom enhancing every other styling choice", 574, 1024)}

<h2>Breaking Down the Budget</h2>
<p>Towels and a bath mat, a candle, a tray and a few small decor pieces realistically land in the $60 to $90 range depending on what's already on hand.</p>
<p>Reusing existing items wherever possible, and saving the bulk of the budget for the one real upgrade in step 6, keeps the total comfortably under $100.</p>

<h2>Keeping the Cozy Going All Fall</h2>
<p>Swapping the candle scent partway through the season, and keeping the counter styling tidy, extends the look well past the initial setup.</p>
<p>None of this requires repeating the full project &mdash; small maintenance keeps the initial investment looking fresh.</p>

<h2>Final Thoughts</h2>
<p>None of these 8 changes require a renovation-level budget or effort.</p>
<p>Start with lighting and scent, since both cost the least and change the most, then build out from there as the budget allows.</p>
<p>A genuinely spa-like fall bathroom is well within reach of a $100 weekend project.</p>
`;

module.exports = { body };
