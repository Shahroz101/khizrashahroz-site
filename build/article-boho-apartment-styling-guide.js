// Body content for "The Principles Behind Styling a Whole Boho
// Apartment". Guide format, matching the source's 9 content sections
// plus intro. The existing boho-bedroom-decor-ideas article already
// covers 20 discrete bedroom-specific decor items (earth tones,
// macrame, string lights, plants, global decor) in itemized-list
// format. This rewrite leans into what that article doesn't cover —
// whole-apartment cohesion across multiple rooms, rental-friendly
// application, and the underlying principles (texture layering as a
// system, imperfection as philosophy) rather than itemized pieces to
// add to one room. Source photos have no Pinterest links, so none
// carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "boho-apartment-styling-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Boho styling a single room is one thing. Carrying it convincingly across a whole apartment is another.</p>
<p>Without a consistent set of underlying principles, a boho apartment can end up feeling like a different style in every room instead of one cohesive home.</p>
<p>This covers those principles, not a room-by-room shopping list.</p>
${photo("hero.png", "Stylish boho apartment with warm, eclectic charm", 1312, 736)}

<h2>What Boho Actually Means</h2>
<p>Boho isn't a fixed look so much as a set of values &mdash; collected over curated, global over generic, imperfect over flawless.</p>
<p>Understanding it as a philosophy rather than a checklist makes it much easier to apply consistently across different rooms with different functions.</p>
${photo("what-is-boho.png", "Boho style apartment reflecting a relaxed, collected philosophy", 574, 1024)}

<h2>Start Every Room From the Same Neutral Base</h2>
<p>A consistent neutral wall and larger-furniture palette across the whole apartment is what lets each room feel part of the same home, even with very different accent choices.</p>
<p>This is especially useful in a rental, where wall color often can't change room to room &mdash; the neutral base becomes the unifying thread instead.</p>
${photo("neutral-base.png", "Consistent neutral base unifying rooms throughout the apartment", 574, 1024)}

<h2>Layer Texture as a System, Not a One-Off</h2>
<p>Texture shouldn't just show up in one statement room &mdash; a consistent logic of woven, soft, and natural materials carried through every space is what makes the whole apartment read as boho, not just one accent wall.</p>
<p>This is more achievable in a rental than structural changes, since texture comes from rugs, textiles and furniture rather than anything permanent.</p>
${photo("texture.png", "Layered texture creating a cohesive boho feel throughout the home", 574, 1024)}

<h2>Let Patterns Repeat With Variation</h2>
<p>A recurring color or motif, varied slightly from room to room, ties the apartment together the way an identical pattern everywhere wouldn't.</p>
<p>This is a more sophisticated approach than matching every room exactly, and it still reads as clearly intentional.</p>
${photo("patterns.png", "Patterns repeated with variation tying rooms together cohesively", 574, 1024)}

<h2>Plants Throughout, Not Just One Room</h2>
<p>Greenery carried through the kitchen, living room and bedroom alike does more for whole-apartment cohesion than a single impressive plant collection in just one spot.</p>
<p>This also solves a genuine apartment-living problem &mdash; most rental spaces benefit from the life plants add to otherwise sparse corners.</p>
${photo("plants.png", "Greenery spread throughout the apartment for a lived-in feel", 574, 1024)}

<h2>Collect Global and Vintage Pieces Over Time</h2>
<p>An apartment furnished all at once from a single source rarely achieves the collected feeling boho depends on &mdash; pieces gathered gradually, from different places and times, read as more genuine.</p>
<p>This is less about speed and more about resisting the urge to furnish every room in one trip.</p>
${photo("global-vintage.png", "Global and vintage finds adding authentic character to the space", 574, 1024)}

<h2>Light Every Room Warmly</h2>
<p>Warm-toned lighting, layered rather than relying on a single overhead fixture, matters in every room of a boho apartment, not just the one with the most styling attention.</p>
<p>This is one of the easiest things to carry consistently through a rental, since it requires only bulbs and fixtures, not structural changes.</p>
${photo("lighting.png", "Warm layered lighting enhancing every room of the apartment", 574, 1024)}

<h2>Let Imperfection Be Consistent, Not Selective</h2>
<p>A single perfectly curated room next to several untouched ones breaks the whole-apartment feeling faster than imperfection itself ever would.</p>
<p>Applying the same tolerance for worn, mismatched or slightly imperfect pieces throughout, rather than concentrating polish in one showcase room, is what makes the whole apartment feel intentional.</p>
${photo("imperfections.png", "Embraced imperfections creating an authentic, lived-in boho feel", 574, 1024)}

<h2>Use Wall Decor With a Through-Line</h2>
<p>Art and wall decor chosen with some connecting thread &mdash; a recurring material, a consistent frame approach &mdash; reads as curated across multiple rooms rather than randomly assembled room by room.</p>
<p>This doesn't mean identical choices everywhere, just a loose consistency that a visitor would notice without being able to immediately name.</p>
${photo("art-wall-decor.png", "Wall decor connected by a consistent thread throughout the home", 574, 1024)}

<h2>Cozy Is the Goal in Every Room</h2>
<p>Whatever the specific styling choices in each room, the end feeling should be the same throughout &mdash; warm, relaxed, inviting.</p>
<p>This final check is a useful filter for any individual decision: does this choice make the room feel more like the rest of the apartment, or does it stand apart from it?</p>
${photo("cozy-goal.png", "Cozy, inviting feeling achieved consistently across the apartment", 574, 1024)}

<h2>Your Boho Apartment, Your Rules</h2>
<p>None of these principles require finishing every room before the apartment feels cohesive.</p>
<p>Start with the neutral base and lighting, since both carry through every room most easily, then build texture, pattern and collected pieces over time.</p>
<p>A boho apartment works when the principles stay consistent, even as the specific pieces in each room differ.</p>
`;

module.exports = { body };
