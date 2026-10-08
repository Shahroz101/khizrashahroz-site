// Body content for "10 Japandi Bathroom Ideas, Grounded in the
// Principles Behind Them". Numbered idea-list format with a condensed
// intro on the philosophy, plus a bonus small-space tip. This source
// expands a single existing bullet point ("Japandi Fusion") from the
// already-published bathroom-design-styles article into a full
// 10-idea piece — the same single-bullet-expansion pattern as
// dream-bathrooms-luxury-spa, handled earlier this session with a
// cost-reality framing. To avoid repeating that exact approach, this
// rewrite instead grounds each idea in the actual design principle
// behind it (wabi-sabi, functional minimalism, natural materials)
// rather than treating Japandi as a pure object checklist. Source
// photos have no Pinterest links, so none carry credit captions.
// Rewritten from scratch in the site's calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "japandi-bathroom-principles", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Japandi isn't really a color palette or a shopping list.</p>
<p>It's two design philosophies layered together &mdash; Japanese wabi-sabi, which finds beauty in imperfection and simplicity, and Scandinavian hygge, which prioritizes warmth and comfort.</p>
<p>A bathroom built on those principles looks calm almost by accident, because the principles themselves are calm.</p>
<p>These 10 ideas each trace back to one of those two roots.</p>
${photo("hero.png", "Serene Japandi bathroom combining minimalism and warmth", 1024, 574)}

<h2>1. Minimal, But Warm</h2>
<p>Pure minimalism can feel cold. Japandi avoids that by pairing a restrained object count with warm materials.</p>
<p>A single wood stool, one ceramic dish, nothing else on the counter &mdash; the warmth comes from what's there, not how much is there.</p>
<p>This is the hygge half of the equation balancing the wabi-sabi instinct to strip things down.</p>
<p>Fewer objects, chosen carefully, beats a room with nothing in it at all.</p>
${photo("minimal-but-warm.png", "Minimal yet warm Japandi bathroom with thoughtful simplicity", 1024, 574)}

<h2>2. Let Real Light Lead</h2>
<p>Natural light is central to both source philosophies &mdash; it reveals texture honestly, without needing artificial enhancement.</p>
<p>An unobstructed window, sheer rather than heavy curtains, or a skylight all serve this principle directly.</p>
<p>Where natural light isn't available, warm-toned artificial light does the closest approximation.</p>
<p>Harsh, cool lighting works against the whole philosophy, regardless of what else is in the room.</p>
${photo("natural-light.png", "Japandi bathroom prioritizing abundant natural light", 1024, 574)}

<h2>3. Commit to Natural Materials</h2>
<p>Wood, stone, linen and clay all carry the imperfection wabi-sabi actually celebrates &mdash; grain variation, subtle color shifts, a texture that ages visibly over time.</p>
<p>A synthetic material that mimics stone misses the point entirely, even if it looks similar in a photo.</p>
<p>This is the single most defining material choice in the whole style.</p>
<p>Worth prioritizing over any other single decision on this list.</p>
${photo("natural-materials.png", "Japandi bathroom featuring authentic natural materials throughout", 1024, 574)}

<h2>4. Keep Storage Calm and Out of Sight</h2>
<p>Visual calm requires clutter to actually disappear, not just get tidied into a corner.</p>
<p>Closed cabinetry, a hidden hamper, drawers instead of open shelves all serve the same underlying goal.</p>
<p>This is the functional minimalism half of the philosophy &mdash; not fewer possessions necessarily, just fewer visible ones.</p>
<p>A room can hold plenty of stuff and still read as serene, as long as none of it is on display.</p>
${photo("hidden-storage.png", "Japandi bathroom with calm, concealed storage solutions", 1024, 574)}

<h2>5. Choose a Soft, Neutral Palette</h2>
<p>Muted whites, warm beiges and soft grays let the materials and light do the visual work instead of color.</p>
<p>This isn't about avoiding color entirely &mdash; it's about letting texture carry more weight than hue.</p>
<p>A loud palette actively works against the calm both source philosophies are built around.</p>
<p>Restraint here is a deliberate choice, not a lack of personality.</p>
${photo("neutral-palette.png", "Soft neutral color palette defining a Japandi bathroom design", 1024, 574)}

<h2>6. Add Organic, Imperfect Shapes</h2>
<p>A rounded mirror, a hand-thrown ceramic sink, an asymmetrical vessel &mdash; these directly embody wabi-sabi's appreciation for the imperfect and the handmade.</p>
<p>Sharp, machine-precise edges read as the opposite of this philosophy, even in a neutral palette.</p>
<p>One organic shape, well-placed, does more for the room's character than several matching rectangular pieces.</p>
<p>This is where the style's personality actually shows up.</p>
${photo("organic-shapes.png", "Organic and imperfect shapes bringing balance to a Japandi bathroom", 1024, 574)}

<h2>7. Bring In Plants</h2>
<p>A single plant connects the room to something alive and imperfect by nature &mdash; no two leaves grow identically.</p>
<p>This ties directly back to wabi-sabi's root in natural, unforced beauty.</p>
<p>Humidity-tolerant varieties handle a bathroom's conditions without much extra care.</p>
<p>One plant, well-placed, says more than a cluttered collection of several.</p>
${photo("plants.png", "Japandi bathroom enhanced with a single thoughtfully placed plant", 1024, 574)}

<h2>8. Layer the Lighting</h2>
<p>A single overhead fixture can't capture the mood both philosophies are going for.</p>
<p>Task lighting at the mirror, ambient lighting overall, and perhaps a small accent light each serve a different moment in the room's daily use.</p>
<p>This reflects the hygge instinct toward comfort tailored to the actual activity happening.</p>
<p>Worth the extra planning, since lighting affects mood more than almost any single object choice.</p>
${photo("layered-lighting.png", "Layered lighting design creating mood in a Japandi bathroom", 1024, 574)}

<h2>9. Add Texture, Subtly</h2>
<p>A woven mat, a linen towel, a textured tile &mdash; these add tactile interest without adding visual noise.</p>
<p>This is a quieter expression of wabi-sabi's appreciation for natural variation and handmade quality.</p>
<p>Subtlety is the operative word here &mdash; one or two textured elements, not an overwhelming mix.</p>
<p>Texture does the job color usually does in a less restrained style.</p>
${photo("subtle-texture.png", "Subtle texture adding depth to a serene Japandi bathroom", 1024, 574)}

<h2>10. Choose Fewer, Better Accessories</h2>
<p>Every object visible in the room should earn its place &mdash; a soap dish, a single vase, one piece of functional art.</p>
<p>This closes the loop back to the first idea on this list: minimal doesn't mean empty, it means deliberate.</p>
<p>Quality over quantity isn't just a saying here &mdash; it's the actual design rule.</p>
<p>The last, smallest decisions are often what separates a genuinely Japandi room from one that just looks neutral.</p>
${photo("thoughtful-accessories.png", "Thoughtfully chosen accessories completing a Japandi bathroom design", 1024, 574)}

<h2>Making It Work in a Small Bathroom</h2>
<p>Every principle here scales down without losing its meaning.</p>
<p>A small bathroom actually suits Japandi well, since the restraint the style calls for is already somewhat forced by the space.</p>
<p>Prioritize natural light and one or two natural-material pieces over trying to fit in everything from this list.</p>
<p>A tight space executed with real restraint reads as more Japandi than a large room trying to do too much.</p>

<h2>Final Thoughts</h2>
<p>Japandi works because the two philosophies behind it reinforce each other &mdash; imperfection and warmth, restraint and comfort.</p>
<p>Chasing the aesthetic without understanding the principles usually produces a merely neutral bathroom, not a genuinely calm one.</p>
<p>Start with material choices and light, since those matter more than any single decorative object.</p>
<p>The rest follows naturally once the foundation is right.</p>
`;

module.exports = { body };
