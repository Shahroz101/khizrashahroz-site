// Body content for "Making a Pergola Feel Like a Real Outdoor Room,
// Not Just a Structure". Guide format, matching the source's 7
// content sections. This is the third pergola-related article —
// pergola-ideas is a 14-feature idea listicle (fire pit, swing bed,
// lighting, curtains), how-to-build-a-pergola is a literal
// construction how-to. This rewrite leans into the practical layer
// those two don't cover — picking the right pergola type, seating
// comfort, weatherproofing, the DIY-vs-pro decision and upkeep —
// condensing the "cozy up" ideas that overlap with pergola-ideas'
// lighting/curtain entries into brief mentions rather than repeating
// them. Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "cozy-pergola-outdoor-space", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A pergola on its own is just a structure &mdash; posts, beams, open air overhead.</p>
<p>What turns it into an actual outdoor room is a layer of decisions most people don't think about until after it's built: seating, weatherproofing, and whether to call a professional.</p>
<p>This covers that layer.</p>
${photo("hero.png", "Cozy pergola creating a beautiful outdoor living space", 1312, 736)}

<h2>Why a Pergola Changes a Backyard</h2>
<p>A pergola gives an otherwise open yard a defined destination &mdash; a specific spot that reads as a room, not just more lawn.</p>
<p>This structure alone does more to make a backyard feel like an extension of the house than almost any other single addition.</p>
${photo("why-pergola.png", "Pergola transforming a backyard into an inviting outdoor retreat", 574, 1024)}

<h2>Picking the Right Pergola for the Space</h2>
<p>An attached pergola, built off the house, suits a yard wanting a seamless indoor-outdoor flow; a freestanding one works better as its own destination further into the yard.</p>
<p>Material and style should match the home's existing architecture &mdash; a sleek metal frame reads very differently than a classic wood structure, even with identical dimensions.</p>
${photo("picking-vibe-1.png", "Pergola style chosen to match the home's architecture", 574, 1024)}
${photo("picking-vibe-2.png", "Pergola design reflecting the homeowner's personal style", 574, 1024)}

<h2>Layering in Coziness</h2>
<p>Warm lighting, outdoor curtains and a few textiles do most of the work turning a bare structure into an inviting space &mdash; the exact additions matter less than making sure all three layers are present.</p>
<p>A rug underfoot, even outdoors, adds a surprising amount of warmth and helps visually define the space as a room rather than open structure.</p>
${photo("cozy-ideas-1.png", "Warm lighting adding cozy ambiance to a pergola space", 574, 1024)}
${photo("cozy-ideas-2.png", "Outdoor curtains softening a pergola's structure", 574, 1024)}
${photo("cozy-ideas-3.png", "Textiles and rugs bringing warmth to an outdoor pergola", 574, 1024)}

<h2>Getting the Seating Right</h2>
<p>Deep, cushioned seating reads as genuinely lounge-worthy in a way a few hard chairs never will, regardless of how nice the structure overhead looks.</p>
<p>Arranging seating to face inward, toward a shared center rather than all facing the same direction, makes the space feel more like a room meant for conversation.</p>
${photo("seating-setup.png", "Comfortable seating setup creating an inviting pergola lounge area", 574, 1024)}

<h2>Weatherproofing It Properly</h2>
<p>A sealed or weather-rated finish on the wood, combined with weather-resistant cushions and textiles, keeps the space usable and good-looking well beyond the first season.</p>
<p>This is the detail most likely to get skipped in favor of styling, and the one that determines whether the space still looks good a year later.</p>
${photo("weatherproofing.png", "Weatherproofed pergola materials built to last through the seasons", 574, 1024)}

<h2>DIY or Hire a Pro?</h2>
<p>A simple kit-based pergola is a genuinely approachable DIY project for someone comfortable with basic carpentry and a weekend to spend.</p>
<p>A custom size, an attached structure tied into the house, or a larger span is where hiring a professional becomes worth the cost &mdash; the structural stakes are higher, and mistakes are expensive to fix after the fact.</p>
${photo("diy-vs-pro.png", "Pergola construction decision between DIY and professional installation", 574, 1024)}

<h2>Keeping It Looking Fresh</h2>
<p>A yearly check of the wood finish, hardware and any fabric elements catches small issues before they become expensive repairs.</p>
<p>Swapping cushions, textiles and small decor seasonally keeps the space feeling current without touching the structure itself.</p>
${photo("maintenance.png", "Pergola maintained and styled to stay looking fresh year-round", 574, 1024)}

<h2>Your Pergola, Your Vibe</h2>
<p>A pergola only becomes a real outdoor room once the practical layer &mdash; seating, weatherproofing, upkeep &mdash; gets the same attention as the styling.</p>
<p>Get those right, and the structure stops being a backyard feature and starts being a room people actually want to spend time in.</p>
`;

module.exports = { body };
