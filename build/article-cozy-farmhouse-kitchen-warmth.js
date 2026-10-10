// Body content for "What Actually Makes a Farmhouse Kitchen Feel
// Cozy (Not Just Farmhouse)". Guide format, matching the source's 9
// content sections plus intro/wrap-up. Heavy overlap with the
// existing farmhouse-kitchen-ideas article, which already covers open
// shelving, an apron sink, reclaimed wood, a statement fixture and an
// island as structural features. This rewrite instead leans into
// coziness specifically — the warmth, texture and lived-in layer that
// separates a farmhouse kitchen that merely has the right features
// from one that actually feels warm to be in — condensing the
// structurally-overlapping items into brief mentions and expanding
// the genuinely different warmth-focused content (palette undertone,
// vintage patina, metal mixing, textiles, lived-in final touches).
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
      ${picture({ dir: "cozy-farmhouse-kitchen-warmth", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Plenty of kitchens have every farmhouse feature &mdash; shiplap, an apron sink, open shelving &mdash; and still feel a little cold.</p>
<p>The features get the style right. What's missing is warmth, and warmth comes from a different set of decisions entirely.</p>
<p>This covers what actually makes a farmhouse kitchen feel cozy, not just correctly styled.</p>
${photo("hero.png", "Cozy farmhouse kitchen with rustic charm and warm details", 1248, 832)}

<h2>Start With a Warm Undertone, Not Just a Color</h2>
<p>A white or cream base with a warm undertone reads completely differently than the same color with a cool undertone, even though both are technically "farmhouse white."</p>
<p>This single decision affects how every other color and material in the kitchen reads, which makes it worth testing carefully before committing.</p>
<p>A cool-toned base is the single most common reason a farmhouse kitchen ends up feeling sterile instead of warm.</p>
${photo("palette-1.png", "Warm, inviting color palette anchoring a cozy farmhouse kitchen", 683, 1024)}
${photo("palette-2.png", "Soft farmhouse tones creating a welcoming kitchen atmosphere", 683, 1024)}

<h2>Let Vintage Pieces Carry Real Patina</h2>
<p>A genuinely old cutting board, a worn enamel pitcher, or a flea-market find with actual wear does more for warmth than a new piece styled to look vintage.</p>
<p>Real age and imperfection are what separate a kitchen that feels collected over time from one that feels purchased in a single trip.</p>
<p>A few true vintage pieces, chosen deliberately, outperform a kitchen full of faux-aged decor.</p>
${photo("vintage.png", "Genuine vintage touches adding warmth to a farmhouse kitchen", 683, 1024)}

<h2>Balance Metals Instead of Matching Them</h2>
<p>Warm brass or copper alongside black iron hardware brings more depth than an entirely matched metal finish would.</p>
<p>The goal is balance, not a free-for-all &mdash; one or two metal tones, used consistently throughout, read as intentional rather than scattered.</p>
<p>This detail matters more for warmth than most people expect, since cold chrome or stainless alone can undercut an otherwise warm room.</p>
${photo("mixed-metals.png", "Balanced mix of warm metal tones in a cozy farmhouse kitchen", 683, 1024)}

<h2>Soften Hard Surfaces With Textiles</h2>
<p>A woven runner, linen curtains, and a stack of textured towels soften a kitchen's hard surfaces &mdash; counters, tile, cabinetry &mdash; more than any single decor object could.</p>
<p>This is one of the fastest, cheapest ways to add warmth, and one of the easiest to update seasonally.</p>
<p>A kitchen with zero soft textiles almost always reads as cooler than one with even a small amount.</p>
${photo("textiles.png", "Soft textiles bringing warmth and texture to a farmhouse kitchen", 683, 1024)}

<h2>Finish With Decor That Looks Actually Used</h2>
<p>A crock of wooden spoons by the stove, a bowl of fruit on the counter, herbs on the windowsill &mdash; decor that looks like it gets touched daily reads as warmer than anything purely decorative.</p>
<p>This is the detail that makes a kitchen feel lived in rather than staged for a photo.</p>
<p>A slightly imperfect, in-use kitchen beats a flawless, untouched one for genuine coziness every time.</p>
${photo("final-touches.png", "Lived-in decor details making a farmhouse kitchen feel warm and used", 683, 1024)}

<h2>Where Natural Wood Fits In</h2>
<p>Open shelving in a warm wood tone, or a reclaimed wood accent somewhere in the room, adds real material warmth that painted surfaces alone can't.</p>
<p>This pairs directly with the undertone decision above &mdash; a warm wood against a warm-toned base reinforces the same feeling rather than competing with it.</p>
${photo("wood-1.png", "Natural wood elements adding warmth to a farmhouse kitchen", 683, 1024)}
${photo("wood-2.png", "Reclaimed wood accents bringing rustic character to the space", 683, 1024)}

<h2>Where the Sink and Island Fit In</h2>
<p>An apron-front sink and a kitchen island are both already well covered as standalone farmhouse features elsewhere &mdash; for coziness specifically, what matters is finishing them with the same warm materials and lighting as the rest of the room, rather than letting them read as a separate, colder design choice.</p>
${photo("sink-1.png", "Farmhouse sink finished with warm, cohesive kitchen materials", 683, 1024)}
${photo("sink-2.png", "Apron-front sink integrated into a cozy kitchen design", 683, 1024)}
${photo("island.png", "Kitchen island styled to match the room's overall warmth", 683, 1024)}

<h2>Where Shelving and Lighting Fit In</h2>
<p>Open shelving and a statement light fixture both do more for warmth when styled with the same patina, texture and undertone principles covered above, rather than treated as separate structural upgrades.</p>
<p>A warm-toned bulb in an otherwise striking fixture matters more for coziness than the fixture's design alone.</p>
${photo("shelving-1.png", "Open shelving styled warmly to match a cozy farmhouse kitchen", 683, 1024)}
${photo("shelving-2.png", "Shelving displaying warm, lived-in kitchen essentials", 683, 1024)}
${photo("lighting-1.png", "Statement lighting adding warmth to a farmhouse kitchen", 683, 1024)}
${photo("lighting-2.png", "Warm-toned lighting completing a cozy kitchen atmosphere", 683, 1024)}

<h2>Bring on the Rustic Charm</h2>
<p>None of these warmth principles require replacing a single farmhouse feature already in the kitchen.</p>
<p>Start with the undertone and the textiles, since both are the fastest to adjust, then layer in genuine vintage pieces and lived-in decor over time.</p>
<p>The features make a kitchen farmhouse. Warmth is what makes it cozy.</p>
`;

module.exports = { body };
