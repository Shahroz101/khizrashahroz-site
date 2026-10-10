// Body content for "Raised Garden Bed Materials, and How to Choose
// Between Them". Guide format, matching the source's 9 content
// sections. Distinct from flower-bed-edging-materials and
// flower-bed-edging-technique, both about ground-level bed borders —
// a raised bed's edging is a structural container wall, not a
// border line, a genuinely different construction context. Source
// photos have no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "raised-bed-edging-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A raised bed's edging isn't a border line &mdash; it's a structural wall holding soil in place, which makes the material choice a genuinely different decision than edging a ground-level flower bed.</p>
<p>This covers the materials actually suited to that job, and how to pick between them.</p>
${photo("hero.png", "Charming raised garden bed with stylish edging upgrading the space", 1248, 832)}

<h2>Why Raised Bed Edging Actually Matters</h2>
<p>Beyond containing soil, the right edging material protects the structure from rot, pests and weather, which directly affects how many years the bed actually lasts.</p>
<p>This is a functional decision first and a styling one second, unlike edging for a ground-level bed where the stakes are lower.</p>

<h2>Classic Wood</h2>
<p>Wood remains the most popular choice for genuine reason &mdash; it's affordable, easy to work with, and brings real warmth to the garden.</p>
<p>Rot-resistant species like cedar last considerably longer than standard lumber, which matters more here than it would for a purely decorative edge.</p>
${photo("wood.png", "Classic wood edging bringing natural warmth to a raised garden bed", 683, 1024)}

<h2>Metal</h2>
<p>Metal edging brings a sleek, modern look along with genuine durability that outlasts most wood options.</p>
<p>A rust-resistant coating or an inherently corrosion-resistant metal matters more for a raised bed than it would for ground-level edging, given the sustained contact with damp soil.</p>
${photo("metal.png", "Sleek metal edging offering durability for a raised garden bed", 683, 1024)}

<h2>Stone and Brick</h2>
<p>Stone or brick brings genuine permanence and a built-to-last quality that few other materials can match for a raised structure.</p>
<p>This is a bigger upfront investment, both in cost and labor, but one that essentially never needs replacing once properly installed.</p>
${photo("stone-brick.png", "Stone and brick creating a permanent, built-to-last raised bed", 683, 1024)}

<h2>Concrete</h2>
<p>Concrete blocks or poured concrete create an extremely durable, low-maintenance raised bed wall that handles weather and soil pressure better than almost any other material.</p>
<p>This works especially well for a larger raised bed, where the structural demands on the edging material are greater.</p>
${photo("concrete.png", "Durable concrete edging providing strong structural support", 683, 1024)}

<h2>Reclaimed and Upcycled Materials</h2>
<p>Old bricks, reclaimed wood, or repurposed metal all bring genuine character while keeping the project both budget-friendly and more sustainable.</p>
<p>This option requires more hunting and planning than buying new material, but it often produces the most visually interesting result on this entire list.</p>
${photo("reclaimed.png", "Reclaimed materials bringing budget-friendly character to the bed", 683, 1024)}

<h2>Living Edging With Plants</h2>
<p>A border of low-growing plants around the raised bed's base softens its structural lines and adds a layer of greenery hard materials can't provide.</p>
<p>This works best as a complement to a hard-material wall, rather than as the bed's actual structural edge.</p>

<h2>What Works Best for a Vegetable Garden</h2>
<p>Untreated, food-safe wood or a non-reactive material like stone matters more for a vegetable bed specifically, since edible plants are growing in direct contact with the material.</p>
<p>This is worth checking carefully before choosing a material for any bed that will actually grow food.</p>
${photo("veggie-garden.png", "Food-safe edging materials suited to a vegetable garden bed", 683, 1024)}

<h2>Making the Edging Last Longer</h2>
<p>A protective sealant on wood, regular rust checks on metal, and proper drainage behind stone or concrete all extend whichever material gets chosen well past its default lifespan.</p>
<p>This maintenance matters more for a raised bed than ground-level edging, given the material's constant exposure to damp soil on one side.</p>

<h2>Choosing What's Right for the Garden</h2>
<p>Budget, how long the bed needs to last, and whether it's growing food all weigh into the decision more heavily here than for a simple border edge.</p>
<p>Matching the material to the home's existing hardscaping also helps the raised bed feel like part of the yard's design, not a separate add-on.</p>
${photo("choosing-right.png", "Choosing the right raised bed material for the garden's needs", 683, 1024)}

<h2>Make Your Garden Beds Pop</h2>
<p>None of these materials is universally correct for every raised bed.</p>
<p>Weigh durability, budget and whether the bed is growing food, then choose accordingly &mdash; the right material turns a simple soil container into a genuine garden feature.</p>
`;

module.exports = { body };
