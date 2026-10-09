// Body content for "12 Landscaping Ideas for a Small Backyard".
// Numbered idea-list format. New topic for the site, no existing
// overlap (only pool-specific backyard content exists already).
// Source photos are all AI-generated style with no Pinterest links,
// 1:1 with the 12 ideas, so none carry credit captions. Rewritten out
// of the source's casual voice into the site's calmer tone, short-line
// prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-backyard-landscaping-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A small backyard doesn't need to feel small.</p>
<p>Most of the tricks that make a tiny yard feel bigger have nothing to do with square footage &mdash; they're about how the existing space gets used.</p>
<p>These 12 ideas each solve a different piece of that puzzle, from planting strategy to simple visual tricks.</p>
<p>Most work in combination, not as a single fix.</p>
${photo("hero.png", "Small backyard patio styled with colorful outdoor furniture", 736, 1024)}

<h2>1. Vertical Gardening</h2>
<p>When floor space runs out, the only direction left is up.</p>
<p>A trellis, a wall-mounted planter system, or simply training climbing plants up a fence all make use of vertical space a small yard usually wastes.</p>
<p>This also adds privacy and greenery without eating into any actual walking or seating area.</p>
<p>Often the single highest-impact change for a genuinely tight space.</p>
${photo("vertical-gardening.png", "Vertical garden maximizing growing space in a small yard", 683, 1024)}

<h2>2. Container Gardening</h2>
<p>Pots and planters offer flexibility a permanent garden bed can't &mdash; rearrange, replace or move plants as the season or mood changes.</p>
<p>This also solves the problem of poor native soil, since each container controls its own growing conditions.</p>
<p>Grouping pots of varying heights adds visual interest the way a planted bed would, without the commitment.</p>
<p>A practical, low-risk way to experiment with a small yard's layout before committing to anything permanent.</p>
${photo("container-gardening.png", "Container garden offering flexible planting options", 683, 1024)}

<h2>3. Multi-Functional Furniture</h2>
<p>A storage bench, a table that folds away, or seating that doubles as a planter all do more than one job in the same footprint.</p>
<p>This matters more in a small yard than almost anywhere else, where every piece of furniture competes for limited space.</p>
<p>Fewer, smarter pieces consistently work better than more single-purpose ones.</p>
<p>Worth prioritizing before buying any furniture that only does one thing.</p>
${photo("multifunctional-furniture.png", "Multi-functional outdoor furniture maximizing small space utility", 683, 1024)}

<h2>4. Mirrors</h2>
<p>An outdoor-rated mirror reflects greenery and light, creating the illusion of a yard that extends further than it actually does.</p>
<p>Positioning it to reflect a planted area, rather than a wall or fence, maximizes the trick.</p>
<p>This works especially well on a fence or wall that would otherwise be a blank, unused surface.</p>
<p>A relatively inexpensive addition with a surprisingly large visual payoff.</p>
${photo("mirrors.png", "Outdoor mirror creating the illusion of expanded garden space", 683, 1024)}

<h2>5. Layered Lighting</h2>
<p>String lights, lanterns and low path lighting each extend how long a small yard actually gets used into the evening.</p>
<p>Warm-toned bulbs matter here as much as anywhere indoors &mdash; they set a relaxed mood a harsh white light can't match.</p>
<p>This is one of the fastest, cheapest ways to transform how a space feels without touching the layout at all.</p>
<p>Worth adding even before any bigger landscaping changes happen.</p>
${photo("lighting.png", "Layered outdoor lighting creating ambiance in a small backyard", 683, 1024)}

<h2>6. A Small Water Feature</h2>
<p>A compact fountain or a small recirculating water feature adds a sense of calm out of proportion to its actual size.</p>
<p>The sound alone does real work, masking street noise and adding a layer of tranquility a purely visual feature can't provide.</p>
<p>This doesn't require a full pond &mdash; a tabletop or wall-mounted version works in even the tightest yard.</p>
<p>A small investment with an outsized effect on how the space feels to sit in.</p>
${photo("water-features.png", "Compact water feature adding tranquility to a small backyard", 683, 1024)}

<h2>7. A Defined Pathway</h2>
<p>A simple path &mdash; stepping stones, gravel, or pavers &mdash; gives a small yard a sense of intentional structure.</p>
<p>It also guides movement through the space, which makes even a tiny yard feel like it has more to explore than it actually does.</p>
<p>A curved path reads as more interesting than a straight one, even over a short distance.</p>
<p>One of the more affordable structural changes on this entire list.</p>
${photo("pathways.png", "Garden pathway adding structure and visual interest to a small yard", 683, 1024)}

<h2>8. Raised Garden Beds</h2>
<p>A raised bed solves the poor-soil problem many small, older yards have, while also adding a clear visual structure to the space.</p>
<p>This works on a patio or hardscaped area where an in-ground bed wouldn't even be possible.</p>
<p>Varying bed heights adds the same visual interest a layered planting scheme would in a larger yard.</p>
<p>A practical choice for anyone who actually wants to grow food, not just ornamental plants.</p>
${photo("raised-beds.png", "Raised garden beds providing structured growing space", 683, 1024)}

<h2>9. Smart Corner Landscaping</h2>
<p>Corners are consistently the most overlooked part of a small yard.</p>
<p>A dedicated planting, a small seating nook, or a vertical feature tucked into an unused corner puts dead space to work.</p>
<p>This requires looking at the yard's actual shape rather than just its total square footage.</p>
<p>Often the easiest source of "extra" usable space in a yard that otherwise feels maxed out.</p>
${photo("corner-landscaping.png", "Thoughtfully landscaped corner maximizing every inch of yard space", 683, 1024)}

<h2>10. Privacy Screening</h2>
<p>A trellis with climbing plants, a slatted wood screen, or tall planted grasses all create a sense of enclosure without a full fence.</p>
<p>This matters more in a small yard, where close neighbors can make an already tight space feel even more exposed.</p>
<p>A well-placed screen also doubles as a backdrop, giving the eye somewhere calm to land.</p>
<p>Worth prioritizing for anyone who wants the yard to feel like a genuine retreat, not just a visible extension of the house.</p>
${photo("privacy-screens.png", "Privacy screen creating an intimate backyard retreat", 683, 1024)}

<h2>11. Artificial Turf</h2>
<p>A small patch of real grass in a tiny yard often struggles with heavy foot traffic and limited sunlight.</p>
<p>Quality artificial turf solves both problems at once, staying green and usable year-round without maintenance.</p>
<p>This works especially well in a yard that gets used daily, where real grass would need constant repair.</p>
<p>Not the right fit for every yard, but a genuine practical solution for a demanding small space.</p>
${photo("artificial-turf.png", "Low-maintenance artificial turf keeping a small yard green year-round", 683, 1024)}

<h2>12. Outdoor Rugs</h2>
<p>A rug on a patio or deck defines a seating area the same way it would indoors, without adding any permanent structure.</p>
<p>This is one of the cheapest, fastest ways to make a small outdoor space feel like an intentional room rather than just a slab of concrete.</p>
<p>Outdoor-rated materials matter here, since a standard indoor rug won't hold up to weather exposure.</p>
<p>A small, low-cost addition that finishes off a space more than almost anything else on this list.</p>
${photo("outdoor-rugs.png", "Outdoor rug defining a cozy seating area in a small backyard", 683, 1024)}

<h2>Final Thoughts</h2>
<p>None of these 12 ideas require a complete backyard overhaul.</p>
<p>A few, layered together &mdash; lighting, a rug, some vertical greenery &mdash; often do more than any single big renovation would.</p>
<p>Start with whichever idea solves the most obvious problem in the yard right now, and build from there.</p>
<p>A small backyard, used well, consistently outperforms a larger one left unstyled.</p>
`;

module.exports = { body };
