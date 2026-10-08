// Body content for "5 Elements That Define a Modern Spanish
// Bathroom". Numbered idea-list format. New topic for the site, no
// existing overlap. Source photos are real photography (not
// AI-generated like many recent sources), no Pinterest links, 1:1
// with the 5 ideas, so none carry credit captions. Rewritten out of
// the source's heavily casual, emoji-laden, first-person voice into
// the site's calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "modern-spanish-bathroom-elements", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A modern Spanish bathroom isn't the same thing as a generic spa-inspired bathroom.</p>
<p>The difference comes down to a handful of specific materials and details, not a vague mood.</p>
<p>Warm, earthy and a little rustic, but with clean, contemporary lines holding it together.</p>
<p>These five elements are what actually separate the look from a Pinterest-board approximation of it.</p>
${photo("hero.png", "Freestanding tub in front of French doors opening to a Spanish-style courtyard", 1312, 736)}

<h2>1. Terracotta Tiles, Done With Restraint</h2>
<p>Terracotta is the foundation of Spanish design, full stop.</p>
<p>The clay tone brings instant warmth, and the texture gives a room a lived-in feel without looking worn down.</p>
<p>Classic square tiles work, but herringbone or hexagonal layouts give the same material a more current edge.</p>
<p>Pairing terracotta floors with matte black fixtures creates a strong, modern contrast worth trying.</p>
<p>Sealing the tile properly matters here &mdash; terracotta is porous and needs protection from water damage.</p>
${photo("terracotta-tiles.png", "Terracotta tile flooring paired with modern black fixtures", 574, 1024)}

<h2>2. Textured White Walls</h2>
<p>A fully smooth white wall can read as sterile, almost clinical.</p>
<p>Plaster, limewash or tadelakt finishes avoid that by adding visible texture and depth.</p>
<p>These finishes bounce natural light around a room in a way flat paint can't.</p>
<p>They also create a quiet backdrop that lets tile, fixtures and hardware stand out without competing.</p>
<p>A limewashed wall tends to hide small marks and fingerprints better than a flat finish, which matters in daily use.</p>
${photo("textured-white-walls.png", "Textured limewash white walls in a modern Spanish bathroom", 574, 1024)}

<h2>3. Arched Details</h2>
<p>A curve softens a bathroom's typically hard, rectangular lines more than almost any other single detail.</p>
<p>An arched mirror, an arched shower niche, or an arched doorway all work.</p>
<p>Arches echo traditional Spanish architecture &mdash; courtyards, doorways, covered walkways &mdash; which is part of why they read as authentic rather than decorative.</p>
<p>A painted arch behind a mirror even approximates the look without any construction involved.</p>
<p>Of the five elements on this list, this is the one with the most outsized visual payoff for the effort involved.</p>
${photo("arched-details.png", "Arched mirror and architectural details in a Spanish-style bathroom", 574, 1024)}

<h2>4. Handcrafted, Not Mass-Produced Accents</h2>
<p>Generic, store-bought accessories work against the whole feel of this style.</p>
<p>Hand-painted Talavera tile, a woven storage basket, or a rustic wood stool all carry a sense of craft that a factory-made equivalent can't replicate.</p>
<p>A single handblown glass sconce swapped in for a standard fixture can change the character of an entire room.</p>
<p>Secondhand shops, artisan markets and small online sellers are consistently the best source for pieces like these.</p>
<p>These details are what keep the room from reading as a themed set rather than a genuine style.</p>
${photo("handcrafted-accents.png", "Handcrafted artisanal accents including woven baskets and ceramic tile", 574, 1024)}

<h2>5. Mixed Metal Finishes</h2>
<p>Matching every metal finish in a bathroom is the safe choice, not the Spanish one.</p>
<p>Brushed gold faucets with matte black towel bars, aged bronze with chrome, or copper with nickel all work well together.</p>
<p>The key is balance &mdash; two finishes, spread evenly through the room, rather than scattered unevenly or piled into one corner.</p>
<p>Done with restraint, mixed metals read as layered and considered rather than mismatched.</p>
<p>This is one of the simplest ways to add a contemporary edge to an otherwise traditional material palette.</p>
${photo("mixed-metals.png", "Mixed metal fixtures combining gold and black finishes in a bathroom", 574, 1024)}

<h2>Pulling It All Together</h2>
<p>Five strong elements can still feel disjointed without a plan to unify them.</p>
<p>Stick to a warm, earthy palette throughout &mdash; terracotta, sand, ivory, olive and burnt sienna all work together naturally.</p>
<p>A humidity-loving plant, like a fern or eucalyptus stem, adds a fresh, living note to the warm tones.</p>
<p>Soft textiles &mdash; a Turkish cotton towel, a linen curtain &mdash; keep the room feeling relaxed rather than staged.</p>
<p>Dimmable, warm-toned lighting finishes the look, since harsh overhead light undercuts everything else on this list.</p>

<h2>Final Thoughts</h2>
<p>None of these five elements require a full renovation to try.</p>
<p>Terracotta brings warmth. Textured walls keep things from feeling sterile. Arches add softness. Handcrafted pieces bring soul. Mixed metals add confidence.</p>
<p>Together, they land somewhere between rustic and contemporary &mdash; which is the entire point of the style.</p>
<p>If only one change happens from this list, the arches are worth prioritizing first.</p>
`;

module.exports = { body };
