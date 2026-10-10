// Body content for "12 Landscaping Design Ideas for a Front Yard
// That Actually Works". Numbered idea-list format, matching the
// source's 12 ideas, reordered (structure/hardscaping first, then
// planting, then finishing details). Distinct from
// small-backyard-landscaping-ideas (backyard) and
// corner-landscaping-ideas (one specific corner) — this is whole
// front-yard design. Idea 10 (seating area) overlaps directly with
// the existing front-yard-sitting-area-ideas article, so it's
// condensed to a brief mention with a pointer rather than repeated.
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
      ${picture({ dir: "front-yard-landscaping-design", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A front yard's landscaping does more for a home's first impression than almost any single interior choice.</p>
<p>These 12 ideas cover the structure, planting and finishing details that turn a plain front yard into one that actually works as a design, not just a collection of plants.</p>
${photo("hero.png", "Beautiful front yard landscaping design with a quaint entrance", 1248, 832)}

<h2>1. Create a Welcoming Pathway</h2>
<p>A defined path from the sidewalk to the front door gives the whole yard structure and guides visitors naturally toward the entrance.</p>
<p>Material choice here should echo the home's architecture &mdash; a formal brick path suits a different house than a casual stepping-stone one.</p>
${photo("pathway.png", "Welcoming pathway guiding visitors to the front entrance", 683, 1024)}

<h2>2. Add a Focal Point With a Tree</h2>
<p>A single well-placed tree anchors the whole landscape design, giving the eye somewhere to land before taking in the smaller details.</p>
<p>Considering the tree's mature size before planting prevents a lovely sapling from becoming a problem against the house or power lines years later.</p>
${photo("tree-focal.png", "A tree serving as the landscape's natural focal point", 683, 1024)}

<h2>3. Layer Plant Beds by Height</h2>
<p>Taller plants in back, medium plants in the middle, and low groundcover in front creates the depth that a single-height planting never achieves.</p>
<p>This layering principle does more for a professional-looking landscape than any individual plant choice.</p>
${photo("plant-beds.png", "Layered plant beds creating depth and visual interest", 683, 1024)}

<h2>4. Embrace Native Plants</h2>
<p>Plants suited to the local climate require less water, less maintenance and generally thrive with less intervention than imported varieties.</p>
<p>This is both a practical and an increasingly popular choice, supporting local pollinators in a way non-native plantings don't.</p>
${photo("native-plants.png", "Native plants thriving with minimal maintenance required", 683, 1024)}

<h2>5. Install a Water Feature</h2>
<p>A small fountain or simple water feature adds movement and sound that static plantings alone can't provide.</p>
<p>This works as a genuine focal point on its own, or as a smaller accent tucked into an existing planting bed.</p>
${photo("water-feature.png", "Water feature adding movement and sound to the landscape", 683, 1024)}

<h2>6. Frame the Entrance With Containers</h2>
<p>A pair of matching planters flanking the front door is one of the simplest, most immediately impactful landscaping additions on this entire list.</p>
<p>Seasonal swaps keep this detail feeling current without touching the rest of the permanent landscaping.</p>
${photo("containers.png", "Container plants framing and welcoming guests at the entrance", 683, 1024)}

<h2>7. Light the Landscape Properly</h2>
<p>Path lights, uplighting on a tree, or accent lighting on architectural features all extend the yard's visual appeal well past sunset.</p>
<p>This also adds genuine safety and function, not just styling, for anyone approaching the house after dark.</p>
${photo("lighting.png", "Landscape lighting extending the yard's appeal into the evening", 683, 1024)}

<h2>8. Mix Hardscaping and Softscaping</h2>
<p>Stone, pavers or a retaining wall balanced against plantings creates a more dynamic, considered landscape than an all-plant or all-hardscape approach.</p>
<p>This mix also tends to require less ongoing maintenance than a yard relying entirely on softscaping.</p>
${photo("hardscaping.png", "Hardscaping balanced with softscaping for a dynamic landscape", 683, 1024)}

<h2>9. Add Color With Annuals</h2>
<p>Seasonal annuals bring bursts of color that perennials alone can't maintain year-round, refreshed easily each season.</p>
<p>This is one of the lowest-commitment ways to keep the landscape feeling current without touching any permanent plantings.</p>
${photo("annuals.png", "Colorful annuals adding seasonal bursts of color", 683, 1024)}

<h2>10. Consider a Seating Spot</h2>
<p>A small bench or seating area gives the front yard a genuine destination beyond just the path to the door &mdash; worth exploring in more depth as its own project if it appeals.</p>
${photo("seating.png", "A seating spot adding a welcoming destination to the front yard", 683, 1024)}

<h2>11. Go Vertical With Trellises</h2>
<p>A trellis with climbing plants adds height and visual interest without requiring any additional ground space.</p>
<p>This works especially well against a bare wall or fence that would otherwise go completely unstyled.</p>
${photo("trellises.png", "Trellis with climbing plants adding vertical interest", 683, 1024)}

<h2>12. Keep It Genuinely Low-Maintenance</h2>
<p>A landscape designed around realistic upkeep &mdash; drought-tolerant plants, mulched beds, minimal lawn &mdash; stays looking good far longer than one that depends on constant attention.</p>
<p>This is worth planning from the start, since retrofitting a high-maintenance landscape into a low-maintenance one later is a much bigger project.</p>
${photo("low-maintenance.png", "Low-maintenance landscaping staying beautiful with minimal upkeep", 683, 1024)}

<h2>Wrapping It Up</h2>
<p>None of these 12 ideas require tackling the whole front yard in one project.</p>
<p>Start with the pathway and a focal point, since both give the yard its basic structure, then layer in planting and finishing details over time.</p>
<p>A well-designed front yard does as much for a home's presence as anything happening inside it.</p>
`;

module.exports = { body };
