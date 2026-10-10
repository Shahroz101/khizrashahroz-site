// Body content for "The Finishing Layer for a Modern Spanish
// Bathroom (After the Tile and Arches)". Numbered idea-list format,
// matching the source's 11 ideas. Heavy overlap with the existing
// modern-spanish-bathroom-elements article, which already covers
// terracotta tile, textured walls, arched details, handcrafted
// accents and mixed metals as the style's 5 core elements. This
// rewrite assumes those core elements are already in place and
// focuses on the finishing layer on top of them — lighting, black
// accents, Mediterranean accessories, restraint, old-and-new mixing,
// plants — condensing the directly-overlapping ideas (earthy tones,
// texture, statement tiles, arches, wood accents) into brief
// pointers rather than repeating that article's depth. Source photos
// have no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "spanish-bathroom-finishing-layer", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Terracotta tile and an arched niche get a Spanish-style bathroom most of the way there.</p>
<p>What finishes the room is a second layer of smaller decisions &mdash; lighting, accessories, restraint &mdash; that most guides mention briefly and move past too quickly.</p>
<p>This is that layer, assuming the core tile-and-arch work is already settled.</p>
${photo("hero.png", "Beautiful modern Spanish bathroom with warm, inviting design", 1312, 736)}

<h2>The Foundation, Briefly</h2>
<p>Warm earthy tones, real texture, a statement tile moment and an arched detail somewhere in the room are the core elements worth getting right first &mdash; worth a deeper look on their own if they're not already settled.</p>
${photo("earthy-tones.png", "Warm earthy tones forming the base of a Spanish-style bathroom", 574, 1024)}
${photo("textures.png", "Rich texture adding depth to the bathroom's foundation", 574, 1024)}
${photo("statement-tiles.png", "A statement tile moment anchoring the room's design", 574, 1024)}
${photo("arches.png", "An arched detail bringing authentic Spanish character", 574, 1024)}
${photo("wood-accents.png", "Natural wood accents warming up the tile and stone", 574, 1024)}

<h2>Light It Like the Mediterranean</h2>
<p>Warm, slightly dim ambient lighting, with one more dramatic fixture as a focal point, does more for the room's mood than the tile work alone ever could.</p>
<p>This is the detail most likely to get rushed after the bigger structural choices are made, even though it affects how the whole room reads every single day.</p>
${photo("lighting.png", "Warm Mediterranean-inspired lighting setting the room's mood", 574, 1024)}

<h2>Add Black for Contrast</h2>
<p>Black fixtures, hardware or a framed mirror cut through an otherwise warm, earthy palette, giving the eye somewhere crisp to land.</p>
<p>This single contrast point keeps the room from reading as uniformly beige, which is one of the more common ways this style goes slightly flat.</p>
${photo("black-accents.png", "Black accents providing crisp contrast against warm tones", 574, 1024)}

<h2>Bring In Genuine Mediterranean Accessories</h2>
<p>A hand-thrown ceramic dish, woven baskets, or a simple glazed vase all extend the room's material story into the smallest details.</p>
<p>These finishing pieces matter more here than in most bathroom styles, since the whole aesthetic depends on material authenticity coming through at every scale.</p>
${photo("mediterranean-accessories.png", "Genuine Mediterranean accessories completing the room's material story", 574, 1024)}

<h2>Practice Real Restraint</h2>
<p>Simple doesn't mean boring here &mdash; a few well-chosen pieces, with real negative space between them, reads as more considered than a fully decorated room.</p>
<p>This restraint is what keeps the earthy palette and texture work from tipping into visual clutter.</p>
${photo("keep-simple.png", "Restrained styling keeping the room simple without feeling boring", 574, 1024)}

<h2>Mix Old and New Deliberately</h2>
<p>A genuinely aged or vintage piece next to a clean modern fixture creates the layered, collected feeling central to this style.</p>
<p>An all-new room, however well-executed, tends to miss this specific quality that makes the style feel authentic rather than showroom-staged.</p>
${photo("mix-old-new.png", "A deliberate mix of old and new pieces creating a layered feel", 574, 1024)}

<h2>Finish With Plants</h2>
<p>A simple plant, especially one suited to a humid bathroom environment, brings the Mediterranean's outdoor connection into the room.</p>
<p>This is one of the lowest-cost, highest-impact finishing touches on this entire list.</p>
${photo("plants.png", "A simple plant bringing Mediterranean warmth to the bathroom", 574, 1024)}

<h2>Ready to Bring the Mediterranean In</h2>
<p>None of this finishing layer works without the foundation already in place &mdash; tile, texture, an arch, warm tones.</p>
<p>Once that's settled, lighting, a bit of black contrast, genuine accessories and real restraint are what actually finish the room.</p>
`;

module.exports = { body };
