// Body content for "A Complete Guide to Fall Wreaths: Styles,
// Materials and Getting It Right". Comprehensive guide format,
// reordered from the source's buying-guide + 9-style structure
// (original style order: Rustic, Neutral, Pumpkin, Dried Flower,
// Wheat, Leaf, Berry, Minimalist, Cottage -> new order: Pumpkin,
// Wheat, Dried Flower, Rustic, Leaf, Berry, Neutral, Minimalist,
// Cottage). New topic for the site — existing easter-wreath-ideas is
// a different season. Source had 24 Pinterest pins across 12 of its
// 13 figures (only the hero lacked one) — all 12 credited via
// pinPhoto(); hero uncredited via photo(). Minimalist and
// cottage-style sections had no source photo, kept text-only.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-wreath-style-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-wreath-style-guide", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>`;
}

const body = `
<p>A fall wreath is the fastest single signal that the season has arrived, hanging on the one surface every visitor sees first.</p>
<p>Getting it right involves more than picking a pretty style &mdash; color, size, material and the door it's hanging on all matter too.</p>
${photo("hero.jpg", "A beautiful fall wreath instantly making a home feel cozy", 1400, 934)}

<h2>What Makes a Fall Wreath Actually Look Good</h2>
<p>Natural texture is what separates a wreath that reads as genuinely seasonal from one that looks like a flat craft-store prop.</p>
<p>Mixing a few different textures &mdash; something dried, something woven, something with real dimension &mdash; does more visual work than color alone.</p>

<h2>Choosing the Right Colors</h2>
<p>Traditional warm tones &mdash; burnt orange, deep red, golden yellow &mdash; are the most immediately recognizable fall palette, and the safest choice for anyone unsure where to start.</p>
<p>A neutral palette, leaning into cream, tan and soft brown, reads as more sophisticated and blends into more home styles than a bold traditional mix.</p>
<p>A moodier, deeper autumn palette &mdash; plum, rust, near-black greenery &mdash; brings real drama for anyone wanting something less conventional.</p>
${pinPhoto("colors.jpg", "A fall wreath color palette setting the tone for the whole look", 768, 1024, "https://www.pinterest.com/pin/1143773636598894648/", "fall wreath color palette")}

<h2>Buying vs. Making One</h2>
<p>A store-bought wreath makes sense for anyone short on time or without easy access to the raw materials a DIY version needs.</p>
<p>Making one from scratch makes more sense when a very specific color or material combination matters, since that level of customization is hard to find pre-made.</p>
${pinPhoto("buy-or-diy.jpg", "Deciding between a store-bought and a handmade fall wreath", 768, 1024, "https://www.pinterest.com/pin/1137581187141172967/", "buy or DIY fall wreath")}

<h2>Matching the Wreath to the Door</h2>
<p>A white door gives a wreath the most contrast room to work with, letting almost any color or material read clearly against it.</p>
${pinPhoto("door-match-1.jpg", "A fall wreath standing out clearly against a white door", 600, 750, "https://www.pinterest.com/pin/17662623534668209/", "wreath for a white door")}
<p>A black door calls for a wreath with enough lighter, warmer tones to avoid the whole look reading as too dark and heavy.</p>
<p>A wood door pairs naturally with neutral or traditional warm tones, since the door itself already carries a similar natural material story.</p>
<p>A colored door benefits from a simpler, more neutral wreath, letting the door's own color stay the star rather than competing with a bold wreath palette.</p>
${pinPhoto("door-match-2.jpg", "A fall wreath chosen to complement rather than compete with the door color", 577, 1024, "https://www.pinterest.com/pin/292171094602181433/", "wreath door color matching")}

<h2>Getting the Size Right</h2>
<p>A wreath that's too small reads as an afterthought on a full-size front door, while one too large can overwhelm a smaller entry.</p>
<p>As a general rule, a wreath spanning roughly a third to half the door's width looks proportional on most standard door sizes.</p>

<h2>The Best Materials to Work With</h2>
<p>Dried flowers bring real texture and a soft, romantic quality that fresh or faux flowers can't quite replicate.</p>
<p>Grapevine forms a sturdy, naturally textured base that works equally well bare or built up with other materials.</p>
<p>Wheat and dried grasses bring a warm, harvest-specific feel that few other materials capture as directly.</p>
<p>Pumpkins and gourds, whether real, faux or miniature, are the most immediately recognizable fall material on this entire list.</p>

<h2>When to Display It</h2>
<p>A wreath built around harvest elements rather than Halloween-specific ones stays appropriate from September all the way through Thanksgiving.</p>
<p>This single choice extends a wreath's display window by months, compared to one that reads as exclusively Halloween-themed.</p>

<h2>Fall Wreath Styles Worth Trying</h2>

<h3>1. Pumpkin and Eucalyptus</h3>
<p>Pairing small pumpkins with eucalyptus brings a fresh, slightly unexpected combination that still reads as clearly seasonal.</p>
${pinPhoto("pumpkin.jpg", "A pumpkin and eucalyptus fall wreath combination", 828, 1024, "https://www.pinterest.com/pin/137148751151537785/", "pumpkin wreath idea")}

<h3>2. Wheat and Dried Grass</h3>
<p>A wreath built primarily from wheat and dried grasses brings genuine harvest character without needing bright color to do the work.</p>
${pinPhoto("wheat.jpg", "A wheat and dried grass wreath bringing harvest character", 579, 1024, "https://www.pinterest.com/pin/49610033392078435/", "wheat wreath idea")}

<h3>3. Dried Hydrangea</h3>
<p>Dried hydrangea blooms bring a soft, romantic texture that pairs beautifully with almost any fall color palette.</p>
${pinPhoto("dried-flower.jpg", "A dried hydrangea wreath bringing soft, romantic texture", 802, 1024, "https://www.pinterest.com/pin/358388082863184339/", "dried flower wreath idea")}

<h3>4. Rustic With a Plaid Ribbon</h3>
<p>A plaid ribbon woven through a natural-material base brings classic, cozy character that feels distinctly autumnal.</p>
${pinPhoto("rustic.jpg", "A rustic wreath with a plaid ribbon bringing cozy character", 683, 1024, "https://www.pinterest.com/pin/242561129999936848/", "rustic fall wreath idea")}

<h3>5. Natural Fall Leaves</h3>
<p>Leaves arranged to look genuinely windswept, rather than perfectly symmetrical, read as far more natural and considered.</p>
${pinPhoto("leaf.jpg", "A fall leaf wreath arranged to look naturally windswept", 683, 1024, "https://www.pinterest.com/pin/514325219968281017/", "fall leaf wreath idea")}

<h3>6. Fall Berries</h3>
<p>Clusters of fall berries bring small pops of deep color that work beautifully layered into a more neutral or natural base.</p>
${pinPhoto("berry.jpg", "A fall berry wreath bringing deep color accents to a natural base", 474, 711, "https://www.pinterest.com/pin/13581236384849169/", "fall berry wreath idea")}

<h3>7. Simple Neutral Palette</h3>
<p>Keeping the palette simple &mdash; cream, tan, soft brown &mdash; lets texture and shape carry a wreath that skips bold color entirely.</p>
${pinPhoto("neutral.jpg", "A neutral-palette wreath letting texture carry the design", 768, 1024, "https://www.pinterest.com/pin/703756189566147/", "neutral fall wreath idea")}

<h3>8. Minimalist</h3>
<p>A few carefully chosen elements, with real negative space between them, bring a modern restraint that a fuller, denser wreath doesn't offer.</p>

<h3>9. Cottage-Style</h3>
<p>A fuller, slightly looser arrangement with a soft color mix brings a relaxed, lived-in charm suited to a more cottage-leaning home.</p>

<h2>Making It Last Longer</h2>
<p>Choosing genuinely durable materials from the start matters more than any care routine applied after the fact.</p>
<p>Keeping the wreath out of direct sun prevents the fading that ends a wreath's good looks well before the season actually ends.</p>
<p>Storing it properly between uses, rather than leaving it exposed to the elements, meaningfully extends how many seasons it can be reused.</p>

<h2>Hanging It Without Damaging the Door</h2>
<p>An over-the-door hook distributes the wreath's weight without requiring a single nail or screw, protecting the door's finish entirely.</p>
<p>For a heavier wreath, a suction hook rated for the actual weight avoids the sagging or slipping a lighter-duty hook can't handle.</p>

<h2>Making It Look More Expensive</h2>
<p>Layering at least three different textures, rather than relying on one dominant material, is the simplest formula for an elevated-looking wreath.</p>
<p>Adding one slightly oversized or unexpected element &mdash; a large bloom, an unusual ribbon &mdash; often does more than an even, symmetrical arrangement ever could.</p>
${pinPhoto("look-expensive.jpg", "A fall wreath layered with varied textures for an elevated look", 768, 1024, "https://www.pinterest.com/pin/4606478853903801216/", "elevated fall wreath styling")}

<h2>Final Thoughts</h2>
<p>None of these nine styles is the single correct fall wreath &mdash; the right one depends on the door, the home's existing style, and how long it needs to last through the season.</p>
<p>Get the color, size and material right, and the style choice becomes the easy, fun part.</p>
`;

module.exports = { body };
