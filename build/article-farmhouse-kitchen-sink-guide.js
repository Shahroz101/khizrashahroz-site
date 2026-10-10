// Body content for "How to Choose a Farmhouse Kitchen Sink". Guide
// format, matching the source's h2/h3 structure (material, size,
// apron-front vs. flush mount, single vs. double bowl, drain
// placement, accessories, installation, styling). New topic for the
// site — no existing sink-selection or farmhouse-sink article.
// Source had zero content photos, only a hero image, and zero
// Pinterest pins, so the body runs text-only after the hero.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "farmhouse-kitchen-sink-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A farmhouse sink is one of the most expensive single decisions in a kitchen renovation, and one of the hardest to undo once it's installed.</p>
<p>Material, size, mount style and bowl configuration all matter more here than they do for a standard drop-in sink.</p>
<p>This covers what actually goes into getting that choice right.</p>
${photo("hero.jpg", "A beautiful farmhouse kitchen sink anchoring the whole space", 1400, 934)}

<h2>What a Farmhouse Sink Actually Is</h2>
<p>Defined by its exposed front panel, which sits forward of the cabinetry instead of hiding behind a countertop lip, a farmhouse sink reads as a visual anchor more than any other kitchen fixture.</p>
<p>That exposed front is also exactly why the material choice matters more here than for a sink nobody ever really sees.</p>

<h2>Material Matters More Than It Seems</h2>
<p>Fireclay brings a classic, glossy look and genuine durability, though it comes with real weight and a higher price point.</p>
<p>Enamel-coated cast iron offers a similar classic look at a somewhat gentler cost, with a coating that can chip if it's treated carelessly over time.</p>
<p>Stainless steel is the most budget-friendly and low-maintenance option, trading some of that classic farmhouse warmth for practicality.</p>
<p>Copper brings real character and a living, evolving patina, appealing to anyone who wants the sink to visibly age rather than stay static.</p>

<h2>Size Deserves Real Thought</h2>
<p>A too-large sink can overwhelm a small kitchen's counter space, while a too-small one defeats the deep-basin purpose a farmhouse sink is chosen for in the first place.</p>
<p>Measuring the actual cabinet opening, not just eyeballing it, avoids the single most common and most expensive mistake in this entire decision.</p>

<h2>Apron-Front vs. Flush Mount</h2>
<p>A traditional apron-front install extends the sink's front panel slightly forward of the cabinetry, which is the classic farmhouse look most people picture.</p>
<p>An undermount or flush install sits the sink closer to the counter's edge, for a cleaner, more streamlined transition between counter and basin.</p>

<h2>Single Bowl or Double Bowl</h2>
<p>A single bowl offers maximum space for large pots and baking sheets, which matters more for anyone who cooks often and at scale.</p>
<p>A double bowl allows one side for washing and one for rinsing or drying, better suited to a household without a dishwasher doing most of that work.</p>

<h2>Drain Placement Is Easy to Overlook</h2>
<p>A center drain keeps plumbing simple and symmetrical, which is the more common and generally easier choice.</p>
<p>An offset or rear drain frees up more usable basin space, at the cost of slightly more complex plumbing underneath.</p>

<h2>Don't Skip the Accessories</h2>
<p>A fitted cutting board, a bottom grid, or a built-in colander all extend a farmhouse sink's usefulness well past basic washing.</p>
<p>These are worth planning for before installation, since retrofitting accessories around an already-set basin is far more limited.</p>

<h2>What Installation Actually Involves</h2>
<p>A farmhouse sink's weight and exposed front usually require cabinet modifications that a standard drop-in sink never needs, which is worth factoring into both budget and timeline.</p>
<p>This is one project where hiring a professional, rather than attempting a full DIY install, tends to be the safer call given the structural stakes.</p>

<h2>Styling a Farmhouse Sink in a Modern Kitchen</h2>
<p>Pairing it with sleeker, more contemporary hardware and fixtures lets the sink anchor the space without making the whole kitchen feel dated.</p>
<p>This mix-and-match approach is exactly why farmhouse sinks have stayed relevant well outside strictly farmhouse-styled kitchens.</p>

<h2>Is a Farmhouse Sink Worth It?</h2>
<p>For anyone who cooks often and wants a genuine visual anchor in the kitchen, the investment tends to pay off well beyond the sink itself.</p>
<p>Material, size and mount style deserve real research before committing, given how disruptive it is to change course after installation.</p>
<p>Get those three decisions right, and the sink becomes the detail the whole kitchen gets built around.</p>
`;

module.exports = { body };
