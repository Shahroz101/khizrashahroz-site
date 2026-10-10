// Body content for "5 DIY Bathroom Shelving Projects Worth Building".
// Guide format, matching the source's content sections. Distinct from
// the existing bathroom-shelf-decor-ideas article, which covers
// styling shelves that already exist — this is about building the
// shelves themselves. Source had zero content photos, only a hero
// image, so the body runs text-only after the hero.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "diy-bathroom-shelving-projects", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Bathroom storage gets solved with a cabinet purchase more often than it needs to.</p>
<p>A DIY shelf, built specifically for the space available, usually costs less and fits better than anything bought off the shelf.</p>
<p>This covers five actual builds, plus what matters before drilling into a bathroom wall specifically.</p>
${photo("hero.png", "Minimalist bathroom shelving adding both style and function", 1312, 736)}

<h2>Why Bathroom Shelving Matters</h2>
<p>A bathroom accumulates more small items &mdash; toiletries, towels, decor &mdash; than almost any other room its size, which makes real storage less optional than it is elsewhere.</p>
<p>Open shelving specifically also adds a styling opportunity that a closed cabinet doesn't.</p>

<h2>Why DIY Is Worth It Here</h2>
<p>A DIY shelf costs a fraction of a comparable store-bought unit, since the main expense is materials rather than labor or brand markup.</p>
<p>It also solves the small-bathroom problem directly &mdash; a custom-built shelf fits an odd nook or narrow wall in a way pre-made furniture often can't.</p>

<h2>1. Floating Wood Shelves</h2>
<p>A simple wood plank mounted on hidden brackets creates a clean, minimal look that suits almost any bathroom style.</p>
<p>This is one of the most approachable builds on this list, requiring basic tools and a single afternoon.</p>

<h2>2. Industrial Pipe Shelving</h2>
<p>Metal pipe fittings paired with wood shelving bring a sturdy, industrial-chic look that also happens to be genuinely durable in a humid room.</p>
<p>This project takes a bit more planning than a simple floating shelf, but the hardware itself requires no special skill to assemble.</p>

<h2>3. An Over-the-Toilet Ladder Shelf</h2>
<p>A ladder-style shelf claims the awkward, usually wasted space directly above the toilet, which is often the single biggest unused storage opportunity in a small bathroom.</p>
<p>This design also doesn't require drilling into the wall at all in most cases, making it one of the more rental-friendly projects on this list.</p>

<h2>4. Crate Shelves</h2>
<p>Wooden crates mounted directly to the wall create instant cubby storage with real visual character, especially using reclaimed or vintage crates.</p>
<p>This is one of the more budget-friendly projects here, especially if the crates themselves are sourced secondhand.</p>

<h2>5. Rope Hanging Shelves</h2>
<p>Shelves suspended by thick rope bring a relaxed, slightly bohemian look that a rigid bracket-mounted shelf can't replicate.</p>
<p>This project also tends to be one of the easier ones to adjust after installation, since the rope length can be modified without starting over.</p>

<h2>What to Know Before Drilling</h2>
<p>Finding the actual wall studs, rather than relying on drywall anchors alone, matters more for a shelf that will hold any real weight, including everyday bathroom items.</p>
<p>Bathroom humidity affects material choice more than in any other room &mdash; untreated wood and certain metals need a protective finish to avoid warping or rust over time.</p>
<p>Balancing genuine function with the look matters too; a beautiful shelf that can't hold what it needs to isn't actually solving the storage problem.</p>

<h2>Common Mistakes to Avoid</h2>
<p>Skipping the stud-finding step is the most common and most consequential mistake, risking a shelf that pulls away from the wall under real weight.</p>
<p>Choosing a material without considering the room's humidity is the second most common misstep, leading to warping or rust well before the shelf should need replacing.</p>

<h2>Time to Grab That Drill</h2>
<p>None of these five projects require advanced carpentry experience.</p>
<p>Start with whichever design fits the available wall space and the room's actual storage needs, and keep the stud-finding and humidity considerations in mind from the start.</p>
<p>A well-built DIY shelf solves real storage problems for less than most store-bought alternatives.</p>
`;

module.exports = { body };
