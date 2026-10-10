// Body content for "How to Design a Cozy French Farmhouse Living
// Room". Guide format, matching the source's 11 content sections.
// Overlaps on neutral base, texture layering and baskets with the
// existing farmhouse-living-room-ideas article (American
// farmhouse — barn doors, shiplap, reclaimed wood). This rewrite
// leans hard into what specifically distinguishes French farmhouse
// from American farmhouse — elegance, antique accessories, subtle
// pattern, airy curtains — condensing the three directly-overlapping
// items into brief mentions rather than repeating their treatment.
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
      ${picture({ dir: "french-farmhouse-living-room", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>French farmhouse gets lumped in with American farmhouse more often than it should.</p>
<p>Barn doors and shiplap belong to one tradition. Antique accessories, subtle pattern and a touch of real elegance belong to another &mdash; French countryside, not rustic American barn.</p>
<p>This covers what actually makes the French version distinct.</p>
${photo("hero.png", "Cozy French farmhouse living room with elegant, rustic charm", 1312, 736)}

<h2>What Makes French Farmhouse Different</h2>
<p>Where American farmhouse leans rustic and utilitarian, French farmhouse leans toward understated elegance &mdash; worn, but refined rather than purely rugged.</p>
<p>The French version borrows more from countryside estates than working barns, which shows up in the details more than the broad strokes.</p>

<h2>The Shared Foundation: Neutral Base</h2>
<p>A soft white or warm greige base works the same way it would in any farmhouse style &mdash; the canvas everything else gets layered onto.</p>
<p>Where French farmhouse diverges is in what gets layered on top, which the rest of this guide covers.</p>
${photo("neutral-base.png", "Soft neutral color palette forming the base of a French farmhouse room", 574, 1024)}

<h2>Furniture With Real Age</h2>
<p>Genuinely distressed or antique furniture, rather than new pieces styled to look worn, is central to the French farmhouse look specifically.</p>
<p>A single statement antique piece &mdash; an armoire, a worn wood table &mdash; does more for authenticity than several newer distressed pieces combined.</p>
${photo("distressed-furniture.png", "Distressed vintage furniture bringing authentic character to the room", 574, 1024)}

<h2>Antique Accessories Over Rustic Decor</h2>
<p>This is where French farmhouse most clearly splits from its American counterpart &mdash; genuine antique accessories, ironware, aged mirrors and porcelain, instead of rustic signs and barn-inspired decor.</p>
<p>Sourced pieces, collected over time from estate sales or antique shops, carry more of the look's intended character than anything bought new.</p>
${photo("antique-accessories.png", "Antique and vintage accessories defining French farmhouse character", 574, 1024)}

<h2>A Touch of Real Elegance</h2>
<p>A chandelier, a gilded mirror frame, or an upholstered chair in a refined fabric brings in the elegance that keeps the room from reading as purely rustic.</p>
<p>This single element, more than any other, is what separates French farmhouse from a simpler American rustic look.</p>
${photo("touch-elegance.png", "Elegant lighting and decor adding refinement to the living room", 574, 1024)}

<h2>Subtle Pattern, Not Bold Pattern</h2>
<p>A soft stripe, a faded toile, or a muted floral &mdash; patterns here stay understated, never the bold graphic prints associated with more modern farmhouse looks.</p>
<p>This restraint is deliberate, keeping the room feeling aged and quiet rather than trend-driven.</p>
${photo("subtle-patterns.png", "Subtle, muted patterns adding texture without overwhelming the space", 574, 1024)}

<h2>Wood Throughout, Softened by Texture</h2>
<p>Warm wood tones &mdash; beams, flooring, furniture &mdash; ground the room, while linen, wool and other natural textiles keep the wood from feeling heavy or cold.</p>
<p>This pairing of wood and soft natural textile is consistent across nearly every French farmhouse space, regardless of the specific pieces chosen.</p>
${photo("wood-everywhere.png", "Warm wood tones grounding a French farmhouse living room", 574, 1024)}
${photo("cozy-textures.png", "Layered cozy textures softening the room's wood elements", 574, 1024)}

<h2>Baskets and Light, Airy Curtains</h2>
<p>Woven baskets add practical storage the same way they would in any farmhouse style, while sheer or linen curtains let in soft, filtered light rather than blocking it heavily.</p>
<p>The airy curtain choice specifically reinforces the room's lighter, more relaxed-elegant feel versus a heavier rustic drape.</p>
${photo("baskets.png", "Woven baskets providing both storage and texture", 574, 1024)}
${photo("airy-curtains.png", "Light, airy curtains letting soft natural light fill the room", 574, 1024)}

<h2>Casual Over Curated</h2>
<p>A room that looks slightly imperfect &mdash; a throw not perfectly folded, a book left open &mdash; fits the French farmhouse feel better than one styled to showroom precision.</p>
<p>This casual, lived-in quality is what keeps the elegance from tipping into something that feels untouchable.</p>
${photo("casual-lived-in.png", "Casual, lived-in styling keeping the room feeling warm and relaxed", 574, 1024)}

<h2>Greenery, Kept Simple</h2>
<p>A few low-maintenance plants &mdash; olive branches, eucalyptus, a simple potted fern &mdash; bring the room's connection to the French countryside full circle.</p>
<p>Nothing fussy or high-maintenance fits here; the greenery should feel as effortless as everything else in the room.</p>
${photo("greenery.png", "Simple, low-maintenance greenery completing the French farmhouse look", 574, 1024)}

<h2>Your Cozy French Farmhouse Living Room Awaits</h2>
<p>The neutral base and wood foundation are shared ground with any farmhouse style.</p>
<p>What makes it distinctly French is the layer on top &mdash; antique accessories, real elegance, subtle pattern, airy curtains &mdash; chosen with restraint rather than rustic abundance.</p>
<p>Get that layer right, and the room reads as countryside French, not barn-inspired American.</p>
`;

module.exports = { body };
