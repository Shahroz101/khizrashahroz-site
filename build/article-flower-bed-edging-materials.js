// Body content for "6 Flower Bed Edging Materials, and What Each One
// Actually Does". Guide format, matching the source's 6 material
// sections plus intro. New topic for the site — no existing garden
// article covers edging material choice. Source photos have no
// Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "flower-bed-edging-materials", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Edging is the line that tells a yard where the garden ends and the lawn begins.</p>
<p>Without it, grass creeps into beds and mulch drifts onto the lawn, no matter how carefully the plants themselves are arranged.</p>
<p>The material chosen for that line changes the whole garden's character, not just its tidiness.</p>
${photo("hero.png", "Beautifully edged flower bed enhancing garden design", 1248, 832)}

<h2>What Edging Actually Does</h2>
<p>Beyond the visual line, edging physically stops grass roots and mulch from migrating between the bed and the surrounding lawn.</p>
<p>This single detail is often what separates a garden that looks genuinely designed from one that just has plants in it.</p>

<h2>Natural Stone</h2>
<p>Irregular stones laid along a bed's border bring a rugged, timeless look that works in almost any garden style.</p>
<p>This material holds up for decades with essentially no maintenance, since it doesn't rot, rust or need repainting.</p>
<p>Installation takes more physical effort than other materials on this list, given the weight involved, but the payoff is edging that never needs replacing.</p>
${photo("natural-stone.png", "Natural stone edging bringing rustic charm to a flower bed", 683, 1024)}

<h2>Metal</h2>
<p>A thin metal strip creates a clean, minimal line that disappears into the landscape rather than competing with the plants for attention.</p>
<p>This is a surprisingly easy material to install, since it's flexible enough to curve around organic bed shapes without any cutting.</p>
<p>A modern or minimalist garden benefits from this material more than a traditional cottage-style one would.</p>
${photo("metal.png", "Sleek metal edging creating a modern garden border", 683, 1024)}

<h2>Brick</h2>
<p>Brick laid flat or on edge brings a classic, cottage-garden charm that pairs naturally with an older home or a more traditional planting style.</p>
<p>This material also handles curves reasonably well when laid as individual units rather than a single rigid strip.</p>
<p>A material that only improves with a bit of age and weathering, unlike most other edging options.</p>
${photo("brick.png", "Brick edging adding classic cottage charm to a garden bed", 683, 1024)}

<h2>Wood</h2>
<p>Timber edging brings genuine warmth and a natural material story that stone and metal can't replicate.</p>
<p>This is also one of the most customizable options, since it can be cut, stained or shaped to fit almost any bed layout.</p>
<p>Untreated wood eventually breaks down, so a rot-resistant species or a sealant matters for anyone wanting this edging to last.</p>
${photo("wood.png", "Wood edging bringing natural warmth to a flower bed border", 683, 1024)}

<h2>Concrete</h2>
<p>Poured or pre-cast concrete edging creates a clean, durable line that holds its shape better than almost any other material over time.</p>
<p>This works especially well for a bed with a defined geometric shape, where a crisp, consistent edge matters more than an organic feel.</p>
<p>More stylish than its reputation suggests, especially in a smooth, pale finish against darker mulch or soil.</p>
${photo("concrete.png", "Concrete edging providing a clean, durable garden border", 683, 1024)}

<h2>Living Edging</h2>
<p>A dense, low-growing plant &mdash; boxwood, lavender, creeping thyme &mdash; can define a bed's border without any hard material at all.</p>
<p>This option requires ongoing maintenance that a hard material doesn't, but it adds genuine texture, color and even fragrance that no hardscape material can match.</p>
<p>A good fit for a garden-forward yard where the border itself is meant to be part of the planting, not separate from it.</p>
${photo("living.png", "Living edging using low-growing plants to define a garden bed", 683, 1024)}

<h2>Mixed Material</h2>
<p>Combining two edging materials &mdash; stone with a living border, or brick transitioning into metal &mdash; breaks the usual rules in a way that can look genuinely intentional when done with restraint.</p>
<p>This works best when one material clearly leads and the second plays a supporting role, rather than competing for equal attention.</p>
<p>Worth planning carefully, since an uncoordinated mix reads as accidental rather than designed.</p>
${photo("mixed-material.png", "Mixed material edging combining different textures in a garden", 683, 1024)}

<h2>Choosing the Right One</h2>
<p>Budget, maintenance tolerance and the garden's overall style should drive the decision more than which material simply looks best in a photo.</p>
<p>A material that matches the home's existing hardscaping &mdash; a brick path, a stone patio &mdash; tends to tie the whole yard together more convincingly than one chosen in isolation.</p>
<p>Whichever material gets chosen, a clean, consistent edge does more for a garden's finished look than almost any other single landscaping detail.</p>
`;

module.exports = { body };
