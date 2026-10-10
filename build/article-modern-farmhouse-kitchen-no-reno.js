// Body content for "Modern Farmhouse Kitchen Look: What You Can Do
// Without a Renovation". Guide format, matching the source's 11
// content sections. Heavy overlap with the existing
// farmhouse-kitchen-ideas (general features) and
// cozy-farmhouse-kitchen-warmth (warmth/texture layer) articles, which
// already cover most of the same structural elements — sink, open
// shelving, lighting, hardware. This rewrite leans into the source's
// own closing "DIY without a full renovation" angle as the entire
// article's organizing principle: for each element, what's achievable
// with a swap or paint versus what genuinely requires construction,
// rather than repeating either existing article's framing. Source
// photos have no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "modern-farmhouse-kitchen-no-reno", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A modern farmhouse kitchen doesn't require a renovation to get most of the way there.</p>
<p>Some elements genuinely need construction. Most don't &mdash; they need paint, hardware, and a few deliberate swaps.</p>
<p>This goes through the look element by element, flagging which is which.</p>
${photo("hero.png", "Bright modern farmhouse kitchen with timeless charm", 1248, 832)}

<h2>Color: No Construction Required</h2>
<p>A warm white or soft greige base, applied to cabinets or walls, is purely a paint job &mdash; no contractor needed.</p>
<p>This is the single highest-impact, lowest-cost place to start, and it's worth doing before any other change on this list.</p>
${photo("color.png", "Warm, soft color palette forming the foundation of farmhouse style", 574, 1024)}

<h2>Cabinets and Hardware: Mostly a Swap</h2>
<p>Existing cabinet boxes, repainted and fitted with new black or brass hardware, deliver most of the farmhouse cabinet look without replacing a single cabinet.</p>
<p>Full cabinet replacement is the one genuinely renovation-level move here &mdash; worth it eventually, but not required to get the look now.</p>
${photo("cabinets-hardware.png", "Updated cabinet hardware bringing farmhouse character to the kitchen", 574, 1024)}

<h2>Going Rustic Without Overdoing It</h2>
<p>A few reclaimed wood accents &mdash; open shelving, a cutting board display, a wood tray &mdash; bring in rustic texture without a full material overhaul.</p>
<p>Balance matters here: enough rustic texture to feel farmhouse, not so much it tips into log cabin.</p>
${photo("rustic-balance.png", "Rustic wood accents balanced with modern farmhouse elements", 574, 1024)}

<h2>The Sink: A Renovation Item</h2>
<p>An apron-front farmhouse sink is one of the few items on this list that genuinely requires plumbing work and a cabinet modification.</p>
<p>Worth planning for eventually, but not a quick-swap item &mdash; everything else on this list works around the existing sink in the meantime.</p>
${photo("sink.png", "Farmhouse sink serving as a statement centerpiece in the kitchen", 574, 1024)}

<h2>Countertops: Depends on the Budget</h2>
<p>A butcher block or soapstone countertop is a bigger investment than paint or hardware, but it's still a surface swap rather than a structural renovation.</p>
<p>This is a reasonable mid-tier project &mdash; more involved than a quick weekend fix, less disruptive than a full gut renovation.</p>
${photo("countertops.png", "Farmhouse-style countertops completing the kitchen's cohesive look", 574, 1024)}

<h2>Backsplash: A Weekend Project</h2>
<p>Peel-and-stick subway tile or a simple tile backsplash installed over an existing wall is a genuinely approachable weekend project, not a full renovation.</p>
<p>This delivers a surprising amount of visual impact for the relatively low effort involved.</p>
${photo("backsplash.png", "Clean backsplash design blending charm with a polished finish", 574, 1024)}

<h2>Lighting: An Easy Fixture Swap</h2>
<p>A pendant or lantern-style fixture over the island or sink is one of the easiest high-impact swaps on this entire list &mdash; no construction, just a fixture change.</p>
<p>This also does double duty for mood, since warm-toned farmhouse lighting changes how the whole room feels at night.</p>
${photo("lighting.png", "Statement lighting adding mood and farmhouse style to the kitchen", 574, 1024)}

<h2>Flooring: The Biggest Commitment</h2>
<p>Wide-plank wood or wood-look tile flooring is the most renovation-heavy item on this entire list, requiring real installation work.</p>
<p>A large area rug in the right tone can approximate the grounding effect in the meantime, without touching the actual floor.</p>
${photo("flooring.png", "Wide-plank flooring grounding the farmhouse kitchen aesthetic", 574, 1024)}

<h2>The Small Details That Pull It Together</h2>
<p>Open shelving styled with simple dishware, a woven basket, or a vintage-style sign all add farmhouse character without touching a single structural element.</p>
<p>These details are what make the bigger swaps read as a cohesive look rather than a few disconnected changes.</p>
${photo("little-details.png", "Small styling details pulling the farmhouse kitchen look together", 574, 1024)}

<h2>Appliances: Panels Over Replacement</h2>
<p>A cabinet-panel-ready appliance front, or simply choosing matte black or stainless over anything too high-tech looking, keeps appliances from fighting the farmhouse look.</p>
<p>Full appliance replacement isn't necessary &mdash; the goal is appliances that don't visually compete with everything else already in place.</p>
${photo("appliances.png", "Sleek appliances complementing a modern farmhouse kitchen design", 574, 1024)}

<h2>Can This Work Without a Full Renovation?</h2>
<p>Paint, hardware, lighting, a backsplash and styling details cover most of what makes this look recognizable &mdash; all achievable without touching plumbing or structural walls.</p>
<p>The sink and flooring are the two items worth saving for an actual renovation; everything else can happen this weekend or over a few weekends.</p>
${photo("no-renovation.png", "Modern farmhouse kitchen achieved through simple DIY updates", 574, 1024)}

<h2>You Don't Need a Farm, Just a Vision</h2>
<p>Most of this look comes down to paint, hardware and lighting &mdash; the cheapest, fastest items on the whole list.</p>
<p>Save the sink and flooring for when a real renovation budget exists, and build everything else around them in the meantime.</p>
<p>The full look is achievable in stages, not all at once.</p>
`;

module.exports = { body };
