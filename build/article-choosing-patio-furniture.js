// Body content for "How to Choose the Right Patio Furniture for Your
// Outdoor Space". Guide format, matching the source's 8 content
// sections. A buying-decision guide (space, lifestyle, materials,
// comfort, storage, maintenance, style, budget) — distinct content
// type from the existing patio-transformation-ideas article, which is
// a styling/idea listicle rather than a furniture-selection framework.
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
      ${picture({ dir: "choosing-patio-furniture", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Patio furniture gets picked the same way indoor furniture does more often than it should &mdash; by looks alone, with weather and actual use as an afterthought.</p>
<p>That approach is how a beautiful set ends up faded, rusted or simply uncomfortable within a season.</p>
<p>This covers the actual decision process, not just a list of styles.</p>
${photo("hero.png", "Stylish patio furniture perfectly suited for an outdoor space", 1312, 736)}

<h2>Know the Space First</h2>
<p>The patio's actual dimensions, sun exposure and typical wind conditions should shape the furniture decision before a single style preference enters the picture.</p>
<p>Measuring the space and mapping out traffic flow before shopping prevents the common mistake of furniture that's technically pretty but practically too large.</p>
${photo("know-space.png", "Carefully measured outdoor space ready for the right furniture", 574, 1024)}

<h2>Match Furniture to Actual Lifestyle</h2>
<p>A household that hosts often needs different furniture than one that mostly uses the patio for quiet morning coffee.</p>
<p>Being honest about how the space actually gets used, rather than how it might get used, leads to furniture that gets real daily value.</p>
${photo("lifestyle.png", "Patio furniture matched to the homeowner's actual lifestyle needs", 574, 1024)}

<h2>Choose Materials for the Actual Weather</h2>
<p>Teak and aluminum both handle moisture and sun well; wicker and certain fabrics need more protection or seasonal storage to last.</p>
<p>The local climate matters more here than personal material preference &mdash; a material that thrives in a dry climate may not survive a humid one.</p>
${photo("materials.png", "Weather-resistant materials chosen for long-lasting patio furniture", 574, 1024)}

<h2>Prioritize Comfort, Not Just Looks</h2>
<p>Furniture that looks stunning in photos but is genuinely uncomfortable to sit in for more than a few minutes defeats the whole purpose of an outdoor living space.</p>
<p>Testing seating in person, when possible, catches comfort problems that photos and descriptions can't.</p>
${photo("comfort.png", "Comfortable patio seating inviting relaxed outdoor living", 574, 1024)}

<h2>Think About Storage</h2>
<p>Furniture that can fold, stack, or otherwise be stored compactly during harsh weather or the off-season lasts considerably longer than furniture left exposed year-round.</p>
<p>This is worth factoring in before purchase, not realized only after the first furniture cover fails.</p>
${photo("storage.png", "Patio furniture designed with convenient storage options", 574, 1024)}

<h2>Factor In Maintenance</h2>
<p>Some materials need regular sealing, cleaning or covering; others can be hosed off and left alone.</p>
<p>Being realistic about how much upkeep will actually happen, rather than how much ideally should happen, leads to furniture that stays looking good.</p>
${photo("maintenance.png", "Low-maintenance patio furniture requiring minimal upkeep", 574, 1024)}

<h2>Pick a Style That Feels Right</h2>
<p>Outdoor furniture deserves the same style consideration as indoor furniture &mdash; it's an extension of the home, not a separate, lower-priority category.</p>
<p>A style that complements the home's existing architecture and interior tends to feel more cohesive than one chosen in isolation.</p>
${photo("style.png", "Patio furniture styled to complement the home's overall aesthetic", 574, 1024)}

<h2>Set a Real Budget</h2>
<p>Spending more on frame durability and weather resistance pays off longer than spending more on trend-driven style details.</p>
<p>A smaller, higher-quality furniture set generally outperforms a larger, cheaper one that needs replacing within a couple of seasons.</p>
${photo("budget.png", "Quality patio furniture offering lasting value within a set budget", 574, 1024)}

<h2>You've Got This</h2>
<p>None of these 8 factors need to be weighed with equal priority for every household.</p>
<p>Start with the space and actual lifestyle, since both shape every other decision, then work through materials, comfort and budget from there.</p>
<p>The right patio furniture earns its keep for years, not just one good-looking season.</p>
`;

module.exports = { body };
