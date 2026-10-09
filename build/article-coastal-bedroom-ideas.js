// Body content for "10 Coastal Bedroom Ideas for a Breezy, Beachy
// Retreat". Numbered idea-list format, 10 ideas matching the source
// 1:1, reordered from the source sequence (grouped into
// foundation/palette, materials/texture, and finishing-touch
// categories). New room topic for the site — coastal-living-room-ideas
// covers a different room entirely, so no differentiation angle
// needed. Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "coastal-bedroom-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A coastal bedroom isn't about literal seashells and anchor prints.</p>
<p>It's a feeling &mdash; breezy, sun-bleached, uncluttered &mdash; that comes from a handful of specific choices in color, material and light.</p>
<p>These 10 ideas cover what actually creates that feeling, not the obvious beach-house clichés.</p>
${photo("hero.png", "Calming coastal bedroom with fresh greenery and breezy design", 1312, 736)}

<h2>1. Start With Breezy White Walls</h2>
<p>A soft, warm white on the walls is the foundation almost every coastal bedroom builds on.</p>
<p>This isn't a stark, clinical white &mdash; a slightly warmer or off-white tone reads as sun-washed rather than sterile.</p>
<p>Everything else on this list layers on top of this base, so it's worth getting right first.</p>
${photo("white-walls.png", "Coastal bedroom with breezy white walls as a calming foundation", 574, 1024)}

<h2>2. Lean Into Ocean-Inspired Color</h2>
<p>Soft blues, sandy beiges and seafoam greens bring the palette the rest of the way toward coastal without needing a single literal beach motif.</p>
<p>These colors work best in small doses &mdash; a throw pillow, a piece of art, an accent wall &mdash; layered onto the white base rather than replacing it.</p>
<p>This is where the room's personality actually comes through.</p>
${photo("ocean-colors.png", "Ocean-inspired colors bringing a coastal palette to the bedroom", 574, 1024)}

<h2>3. Bring in Natural Textures</h2>
<p>Linen bedding, a jute rug, a rattan headboard &mdash; texture does as much work in a coastal bedroom as color does.</p>
<p>These materials have an inherently relaxed, slightly imperfect quality that fits the whole look better than anything too polished or synthetic.</p>
<p>Layering two or three of these textures together reads as considered rather than matched.</p>
${photo("natural-textures.png", "Natural textures like linen and rattan in a coastal bedroom", 574, 1024)}

<h2>4. Add Driftwood or Weathered Wood Accents</h2>
<p>A driftwood mirror frame, a weathered wood side table, or a reclaimed headboard brings genuine coastal character into the room.</p>
<p>The slightly rough, sun-bleached quality of this material is hard to fake with anything new, which is part of why it reads as authentic.</p>
<p>One or two pieces are usually enough &mdash; this works better as an accent than as every piece of furniture in the room.</p>
${photo("driftwood.jpg", "Driftwood accents bringing coastal character to a bedroom", 1024, 768)}

<h2>5. Choose Light, Breezy Fabrics</h2>
<p>Sheer curtains, a lightweight linen duvet, and loosely woven throws all reinforce the airy feeling the whole style is built around.</p>
<p>Heavy, dense fabrics work against this look even in colors that otherwise fit the palette.</p>
<p>This is one of the easiest and cheapest swaps on this entire list, since it's mostly about fabric choice, not furniture.</p>
${photo("breezy-fabrics.png", "Light, breezy fabrics enhancing the airy feel of a coastal bedroom", 574, 1024)}

<h2>6. Keep Nautical Details Subtle</h2>
<p>A single rope-wrapped mirror or a woven rattan pendant light brings in the nautical reference without tipping into theme-park territory.</p>
<p>One understated nautical detail reads as sophisticated; several literal ones &mdash; anchors, ship wheels, stripes everywhere &mdash; read as costume-like.</p>
<p>Restraint matters more here than almost anywhere else on this list.</p>
${photo("nautical-decor.jpg", "Subtle nautical decor details in a coastal-inspired bedroom", 1024, 900)}

<h2>7. Layer the Lighting</h2>
<p>A mix of natural light, a warm bedside lamp, and maybe a woven pendant fixture keeps the room feeling sunlit even after dark.</p>
<p>Sheer window treatments that let real daylight filter through do more for this look than almost any artificial lighting choice.</p>
<p>Warm-toned bulbs throughout keep the evening version of the room feeling as relaxed as the daytime one.</p>
${photo("layered-lighting.png", "Layered lighting creating a sunlit feel in a coastal bedroom", 574, 1024)}

<h2>8. Add One Statement Art Piece</h2>
<p>A single large piece &mdash; an abstract ocean-toned painting, a black-and-white beach photograph, a woven wall hanging &mdash; does more than a gallery wall of smaller coastal-themed prints.</p>
<p>This keeps the room feeling curated rather than overly literal about the theme.</p>
<p>Scale matters here more than subject matter &mdash; one confident piece reads better than several small matching ones.</p>
${photo("statement-art.jpg", "Statement art piece adding character to a coastal bedroom", 683, 1024)}

<h2>9. Furnish With Restraint</h2>
<p>Coastal bedrooms work best with fewer, simpler furniture pieces rather than a fully furnished, busy room.</p>
<p>Clean-lined furniture in light wood or white finishes keeps the room feeling open and uncluttered, which is central to the whole look.</p>
<p>Negative space does real work here &mdash; a sparser room reads as more intentional, not unfinished.</p>
${photo("minimalist-furniture.jpg", "Minimalist furniture keeping a coastal bedroom feeling open", 1024, 683)}

<h2>10. Finish With Greenery</h2>
<p>A few simple plants &mdash; a palm, a fern, something with loose, relaxed foliage &mdash; brings a last layer of life into the room.</p>
<p>This is one of the easiest finishing touches on this list and one of the most effective at making the room feel fresh rather than staged.</p>
<p>A natural-fiber planter keeps the material story consistent with everything else in the room.</p>
${photo("greenery.png", "Greenery adding fresh, natural touches to a coastal bedroom", 574, 1024)}

<h2>Conclusion</h2>
<p>None of these 10 ideas require a full bedroom renovation to try.</p>
<p>Start with the wall color and fabric choices, then layer in texture, a driftwood accent and one statement piece as budget allows.</p>
<p>A coastal bedroom comes down to restraint and the right materials, not literal beach decor.</p>
`;

module.exports = { body };
