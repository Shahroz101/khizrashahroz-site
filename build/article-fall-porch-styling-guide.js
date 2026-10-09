// Body content for "Creating a Fall Porch That Actually Holds Up All
// Season". Guide format, condensed from an 18-section source — many
// sections were "shop this look" Amazon product roundups embedded
// within an otherwise genuine styling guide, so per the established
// precedent (same as fall-kitchen-decor-categories and the other
// Amazon-roundup sources), only the local lifestyle photos were used;
// the embedded Amazon product images were skipped and no specific
// branded products are named. Several closing sections (seasonal
// scents, maintenance, budget hacks, Halloween transition,
// weatherproofing, fall-to-winter transition) had no local photo and
// were condensed into a shorter wrap-up. New seasonal topic — distinct
// from the existing front-porch-ideas article, which is a general
// small-porch layout guide, not fall-specific. One text-only
// Pinterest link (DIY corn stalks tip) in the source had no
// accompanying image, so it carries no photo credit.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-porch-styling-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A fall porch that looks great on day one and falls apart by week three isn't actually styled — it's just decorated.</p>
<p>The difference comes down to a handful of choices made upfront: palette, layering, and what the weather is actually going to do to everything sitting outside.</p>
<p>This covers both the styling and the practical side that keeps it looking good through the whole season.</p>
${photo("hero.jpg", "Beautifully styled fall porch with warm seasonal decor", 1400, 932)}

<h2>Pick a Palette That's Actually Yours</h2>
<p>Classic orange and rust work, but they're not mandatory — a muted sage-and-cream fall palette or a deep burgundy-and-brass one both read as seasonal without looking like every other porch on the block.</p>
<p>Picking two or three colors and sticking to them across every element keeps the whole porch cohesive instead of scattered.</p>
<p>This decision shapes every other choice on this list, so it's worth making first.</p>
${photo("intro.png", "Fall porch decor featuring a cohesive seasonal color palette", 574, 1024)}
${photo("color-palette.png", "Warm fall color palette styled across porch decor", 574, 1024)}

<h2>Choose Seating That Can Actually Take the Weather</h2>
<p>A porch swing, a couple of weather-rated chairs, or a simple bench all work, as long as the materials are actually rated for outdoor use.</p>
<p>A few weatherproof cushions in the season's palette turn basic seating into something that looks intentional rather than functional-only.</p>
<p>This is worth getting right before any decor goes up — the seating is what makes the porch usable, not just photogenic.</p>
${photo("seating.png", "Weather-ready seating styled for a cozy fall porch", 574, 1024)}

<h2>Layer Decor for Real Depth</h2>
<p>A porch with everything at one height reads as flat, no matter how good the individual pieces are.</p>
<p>Varying heights — a tall planter, a mid-height pumpkin stack, a low lantern — gives the eye somewhere to travel instead of landing on one flat plane.</p>
<p>The goal is for the eye to move from the ground up to the door without hitting any obviously empty gaps.</p>
${photo("layering.png", "Layered fall porch decor creating visual depth and interest", 574, 1024)}

<h2>Bring in Real Natural Texture</h2>
<p>Corn stalks, potted mums, a few gourds, a scattering of real or high-quality faux leaves &mdash; natural texture does more for a fall porch than anything plastic-looking from a big-box clearance aisle.</p>
<p>A mix of heights and textures here mirrors the layering principle above, just with organic materials specifically.</p>
<p>This is one of the most recognizable fall signals, and one of the easiest to overdo if every single element is competing for attention.</p>
${photo("natural-elements.png", "Natural fall elements like gourds and mums decorating a porch", 574, 1024)}

<h2>Light It for Evenings, Not Just Daylight Photos</h2>
<p>Warm string lights, a lantern or two, and a well-lit front door all extend the porch's good looks well past sunset.</p>
<p>Fall evenings get dark early, which makes this more important here than for a spring or summer porch refresh.</p>
<p>A porch that only looks good in daylight photos isn't actually finished.</p>
${photo("lighting.png", "Warm evening lighting enhancing a fall porch's cozy atmosphere", 574, 1024)}

<h2>Make the Front Door the Star</h2>
<p>A seasonal wreath, a pair of flanking planters, and maybe a doormat that actually matches the palette turn the door into the porch's natural focal point.</p>
<p>Everything else on the porch should support the door, not compete with it for attention.</p>
<p>This is often the highest-impact single area to style carefully, since it's also what guests see first.</p>
${photo("front-door.png", "Front door styled as the focal point of a fall porch", 574, 1024)}

<h2>Add Textures You'll Actually Use</h2>
<p>A chunky throw blanket, a textured outdoor rug, a few weatherproof pillows &mdash; cozy textures should be genuinely usable, not just styled for a photo.</p>
<p>This is what turns a decorated porch into a porch people actually want to sit on.</p>
<p>Washable or weather-resistant fabric matters more here than the exact pattern or color.</p>
${photo("textures.png", "Cozy textures like throws and pillows adding comfort to a fall porch", 574, 1024)}

<h2>Keep the Walkway Clear</h2>
<p>A gorgeous porch that's also a tripping hazard isn't actually finished, especially once evenings get darker earlier in the season.</p>
<p>Leaving a clear, direct path to the door &mdash; keeping pumpkins, planters and decor along the edges rather than in the walking line &mdash; matters more than it sounds like it should.</p>
<p>This is the easiest thing to overlook while focused on how everything looks instead of how it functions.</p>
${photo("functional.png", "Fall porch decor styled while keeping the walkway clear and functional", 574, 1024)}

<h2>Keeping It Looking Good All Season</h2>
<p>Real pumpkins and gourds eventually soften and need swapping out; faux versions last the whole season without any maintenance at all.</p>
<p>A quick reset every couple of weeks &mdash; fluffing cushions, replacing a wilted stem, wiping down furniture &mdash; keeps the porch from visibly aging before the season does.</p>
<p>Budget-friendly swaps, like repainting an old planter or repurposing last year's decor in a new arrangement, stretch a smaller budget across the whole season.</p>

<h2>Carrying It Through Halloween and Into Winter</h2>
<p>A few spooky accents layered onto the existing fall base cover Halloween without needing an entirely separate decor set.</p>
<p>Keeping the base layer &mdash; palette, lighting, seating &mdash; consistent and swapping only the smaller seasonal accents makes the transition into winter decor far less work later.</p>
<p>Choosing weatherproof materials from the start pays off here too, since the same durable pieces carry through multiple seasonal refreshes.</p>

<h2>Your Fall Porch, Your Rules</h2>
<p>None of these choices need to happen all at once or exactly in this order.</p>
<p>Start with the palette and the seating, then layer in natural texture, lighting and the smaller details as time and budget allow.</p>
<p>A fall porch that actually holds up all season comes down to a few deliberate choices upfront, not a single big decorating day.</p>
`;

module.exports = { body };
