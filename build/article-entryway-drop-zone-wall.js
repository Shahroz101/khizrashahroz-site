// Body content for "Turning One Entryway Wall Into an Actual Drop
// Zone". Numbered guide format, matching the source's 8 build steps
// plus checklist and mistakes sections. A narrow, concrete single-wall
// project — distinct from modern-entryway-ideas (general upgrades
// across the whole entryway), foyer-finishing-touches (sensory/
// finishing layer) and small-flat-entrance-system (whole small-space
// system covering lighting, palette and flooring too). This is just
// the one wall, built step by step. Source photos have no Pinterest
// links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "entryway-drop-zone-wall", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Most homes have one wall near the door doing absolutely nothing.</p>
<p>A drop zone turns that wall into the spot where keys, bags, mail and shoes actually land &mdash; instead of landing on the kitchen counter, the stairs, or the floor.</p>
<p>This is the build, one wall, step by step.</p>
${photo("hero.png", "Meticulously organized entryway drop zone wall", 1248, 832)}

<h2>Why a Drop Zone Actually Matters</h2>
<p>Without one, the daily clutter of coming and going has to land somewhere &mdash; and it usually lands in whatever spot is most inconvenient for everyone else in the house.</p>
<p>A dedicated wall solves this permanently, giving every category of daily clutter its own designated spot.</p>
${photo("why-need.png", "Functional entryway wall solving daily clutter problems", 574, 1024)}

<h2>Step 1: Evaluate the Wall First</h2>
<p>Measuring the actual available space, and noting where the door swings and where foot traffic naturally flows, prevents a drop zone that looks great but gets in the way.</p>
<p>This step is easy to skip in the excitement of planning, but it's what keeps the finished wall genuinely usable.</p>
${photo("evaluate-wall.png", "Carefully evaluated wall space ready for a drop zone project", 574, 1024)}

<h2>Step 2: Start With Hooks</h2>
<p>Hooks are the single highest-value addition on this entire list &mdash; cheap, easy to install, and immediately useful for bags, coats and keys.</p>
<p>A mix of heights works well for a household with kids, giving everyone their own reachable spot.</p>
${photo("hooks.png", "Wall-mounted hooks providing simple, effective storage", 574, 1024)}

<h2>Step 3: Add a Floating Shelf</h2>
<p>A shelf above or beside the hooks adds a flat surface for mail, keys or anything that doesn't hang well.</p>
<p>This also gives the wall some visual structure beyond a row of hooks alone.</p>
${photo("floating-shelf.png", "Floating shelf adding function above the entryway hooks", 574, 1024)}

<h2>Step 4: Bring in Baskets</h2>
<p>A basket or two catches the smaller, harder-to-hang items &mdash; gloves, sunglasses, loose mail &mdash; that would otherwise pile up on the shelf itself.</p>
<p>This keeps the wall from sliding into visual clutter even as it gets used daily.</p>
${photo("baskets.png", "Baskets catching small daily items in the drop zone wall", 574, 1024)}

<h2>Step 5: Consider Seating</h2>
<p>A small bench nearby, if space allows, upgrades the whole drop zone from a standing-only setup to one that handles shoe changes comfortably.</p>
<p>This is the one step on this list that depends most on available floor space, so it's worth confirming fit before committing.</p>
${photo("seating.png", "Seating adding next-level functionality to the entryway wall", 574, 1024)}

<h2>Step 6: Don't Skip the Mirror</h2>
<p>A mirror near the drop zone adds genuine daily function &mdash; a last check before heading out &mdash; while also reflecting light back into what's often a dim part of the home.</p>
<p>This earns its spot on the wall through pure usefulness, not just styling.</p>
${photo("mirror.png", "Mirror adding function and light to the entryway drop zone", 574, 1024)}

<h2>Step 7: Label What Needs Labeling</h2>
<p>A simple label on baskets or hooks, especially in a household with multiple people sharing the space, keeps the system from breaking down within the first month.</p>
<p>This isn't about being precious &mdash; it's what keeps everyone actually using the system as designed instead of defaulting back to old habits.</p>
${photo("labels.png", "Clear labels keeping the drop zone system genuinely functional", 574, 1024)}

<h2>Step 8: Make It Personal</h2>
<p>A piece of art, a favorite color, or a small meaningful object keeps the wall from feeling purely utilitarian.</p>
<p>This final layer is what makes the drop zone feel like part of the home's design, not just a chore solved.</p>
${photo("personal-touches.png", "Personal touches making the functional wall feel like home", 574, 1024)}

<h2>The Must-Haves Checklist</h2>
<p>Hooks, a flat surface, and at least one container for loose items are the true non-negotiables &mdash; everything else on this list is enhancement.</p>
<p>Confirming these three exist before adding anything decorative keeps the wall functional first, styled second.</p>
${photo("checklist.png", "Essential drop zone checklist ensuring the wall stays functional", 574, 1024)}

<h2>Mistakes Worth Avoiding</h2>
<p>Hanging hooks too high for the shortest regular user is a common and easily avoided mistake &mdash; the system should work for everyone in the household, not just the tallest person.</p>
<p>Adding too much decor before the functional pieces are in place is the other common trap, resulting in a wall that looks finished but doesn't actually solve the clutter problem.</p>
${photo("mistakes.png", "Common drop zone mistakes avoided through careful planning", 574, 1024)}

<h2>You've Got This</h2>
<p>None of these 8 steps require a weekend of work individually.</p>
<p>Start with hooks, since they deliver the most function for the least effort, then build out the rest of the wall as time and space allow.</p>
<p>A genuine drop zone solves a daily problem that decor alone never could.</p>
`;

module.exports = { body };
