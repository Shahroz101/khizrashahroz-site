// Body content for "10 Paver Patio Materials, and What Each One
// Actually Gets You". Numbered idea-list format, 10 ideas matching
// the source 1:1, reordered (material options grouped first, then
// layout/design variations). Distinct from patio-transformation-ideas
// (furniture and styling focus) — this is specifically about paver
// material choice. Source photos have no Pinterest links, so none
// carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "paver-patio-material-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A paver patio's material choice does more to set its character than any furniture or decor placed on top of it.</p>
<p>Brick, concrete, natural stone and flagstone all read completely differently, even in the exact same backyard layout.</p>
<p>These 10 ideas cover both the material options and a few layout variations worth considering once a material is chosen.</p>
${photo("hero.jpg", "Creative paver patio design transforming a backyard space", 1600, 1200)}

<h2>1. Brick for Classic Charm</h2>
<p>Brick pavers bring a warm, traditional look that pairs naturally with almost any home style, from colonial to modern farmhouse.</p>
<p>This material tends to age well, developing a slightly weathered character over time rather than looking dated.</p>
<p>A herringbone or basket-weave pattern adds visual interest without needing a different material at all.</p>
${photo("brick.jpg", "Brick paver patio offering timeless, classic charm", 1024, 676)}

<h2>2. Concrete Pavers for a Modern Look</h2>
<p>Clean-edged concrete pavers in a consistent gray or neutral tone give a patio a distinctly modern, minimal feel.</p>
<p>This is also one of the more budget-friendly paver materials, which makes it a practical choice for a larger patio area.</p>
<p>A simple grid layout reinforces the modern look better than an elaborate pattern would here.</p>
${photo("concrete.jpg", "Concrete paver patio creating a sleek, modern backyard look", 768, 1024)}

<h2>3. Cobblestone for a Storybook Feel</h2>
<p>Cobblestone's rounded, irregular shape brings an old-world, storybook character that flat pavers simply can't replicate.</p>
<p>This works especially well in a cottage, European-inspired, or garden-forward backyard style.</p>
<p>The uneven surface is part of the charm, though it's worth considering for anyone who needs a perfectly flat walking surface.</p>
${photo("cobblestone.jpg", "Cobblestone patio bringing storybook charm to the backyard", 577, 1024)}

<h2>4. Natural Stone for an Elegant Finish</h2>
<p>Natural stone &mdash; bluestone, travertine, slate &mdash; brings a genuinely elevated, high-end look that manufactured pavers can't fully match.</p>
<p>Each piece has natural color and texture variation, which gives the finished patio a one-of-a-kind quality.</p>
<p>This is typically a higher-cost material, but one that tends to increase a home's overall outdoor value.</p>
${photo("natural-stone.jpg", "Natural stone paver patio adding an elegant, upscale finish", 683, 1024)}

<h2>5. Flagstone for Organic, Irregular Shapes</h2>
<p>Flagstone's irregular, puzzle-piece shapes create a more organic, less rigid look than uniform rectangular pavers.</p>
<p>This pairs especially well with a garden-adjacent patio, where the irregular edges can blend naturally into surrounding plantings.</p>
<p>Fitting the pieces together takes more planning during installation, but the payoff is a genuinely unique surface.</p>
${photo("flagstone.jpg", "Flagstone patio with organic, irregular paver shapes", 765, 1024)}

<h2>6. Mixed Materials for a Custom Look</h2>
<p>Combining two materials &mdash; brick borders with a concrete field, or stone accents within a paver grid &mdash; creates a genuinely custom look no single material can achieve alone.</p>
<p>This works well for defining different zones within one larger patio, like a dining area versus a lounge area.</p>
<p>Worth planning carefully before installation, since mixing materials after the fact is a much bigger project.</p>
${photo("mixed-material.jpg", "Mixed material paver patio creating a custom, personalized design", 683, 1024)}

<h2>7. Patterns and Designs Within One Material</h2>
<p>Even a single paver material can look completely different depending on the laying pattern &mdash; herringbone, basket-weave, running bond, or a circular medallion design.</p>
<p>This is one of the lowest-cost ways to add visual interest, since it changes the layout rather than the material itself.</p>
<p>A bolder pattern works well as a focal point; a simple grid tends to recede and let furniture and plants take center stage.</p>
${photo("patterns.jpg", "Patterned paver design adding visual interest to a patio", 1024, 684)}

<h2>8. A Fire Pit Area for Year-Round Use</h2>
<p>A dedicated paver section around a fire pit extends the patio's usefulness well into cooler months, not just peak summer.</p>
<p>Heat-resistant pavers matter more here than anywhere else on this list, given the direct exposure to a fire source.</p>
<p>This also naturally creates a defined gathering zone within a larger patio layout.</p>
${photo("fire-pit.jpg", "Fire pit paver patio area designed for year-round coziness", 1024, 712)}

<h2>9. A Raised Section for Levels and Drama</h2>
<p>A raised paver platform, even just a step or two up from the main patio, adds visual drama and a sense of architecture to an otherwise flat yard.</p>
<p>This works well for separating a dining area from a lounge area without needing a wall or fence to do it.</p>
<p>A more involved project than a flat patio, since it requires proper structural support underneath.</p>
${photo("raised.jpg", "Raised paver patio adding dramatic levels to the backyard", 768, 1024)}

<h2>10. A Small Patio for a Cozy Corner</h2>
<p>A paver patio doesn't need to cover the whole backyard to be worth doing &mdash; a small, defined corner patio works just as well for a smaller space or budget.</p>
<p>This is a genuinely doable weekend-to-weeklong project, depending on the material chosen.</p>
<p>A smaller footprint also makes it easier to justify a higher-end material, since less of it is needed overall.</p>
${photo("small-corner.jpg", "Small paver patio creating a cozy backyard corner", 1024, 768)}

<h2>Conclusion: Your Backyard, Your Style</h2>
<p>None of these 10 material or layout choices is objectively correct.</p>
<p>The right one depends on the home's style, the budget, and how the space will actually get used &mdash; dining, lounging, or just passing through.</p>
<p>Whichever material gets chosen, the patio becomes the backyard's foundation for everything else that gets added later.</p>
`;

module.exports = { body };
