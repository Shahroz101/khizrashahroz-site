// Body content for "How to Choose the Right Colors for a Home
// Office". Guide format, matching the source's 9 content sections.
// New color-specific angle — none of the site's existing four home
// office articles (setup tips, aesthetic ideas, productive workspace,
// desk budget tiers) focus on color choice. Source photos have no
// Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "home-office-color-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A home office's color gets chosen almost as an afterthought more often than any other room in the house.</p>
<p>That's a mistake &mdash; color affects focus and mood more in a workspace than almost anywhere else, since it's the backdrop for hours of concentrated time.</p>
<p>This covers how to actually choose it, not just a list of trending shades.</p>
${photo("hero.png", "Thoughtfully chosen home office colors creating a productive space", 1312, 736)}

<h2>Why Color Actually Matters Here</h2>
<p>A color that works beautifully in a living room can feel distracting or draining in a space meant for sustained focus.</p>
<p>The right color supports the kind of work actually happening in the room, which makes this a more functional decision than a purely aesthetic one.</p>
${photo("why-matters.png", "Home office color palette supporting focus and productivity", 574, 1024)}

<h2>Start With the Desired Feeling</h2>
<p>A calm, muted palette suits deep-focus work; a more energized color suits a role that leans creative or collaborative.</p>
<p>Deciding on the feeling first, before browsing paint swatches, narrows the color options considerably and keeps the choice purposeful rather than reactive.</p>
${photo("feel-1.png", "Calming color palette setting a focused home office mood", 574, 1024)}
${photo("feel-2.png", "Energizing color choices supporting creative work", 574, 1024)}
${photo("feel-3.png", "Home office colors tailored to the desired work atmosphere", 574, 1024)}

<h2>Match the Color to the Room's Natural Light</h2>
<p>A north-facing room with cooler, dimmer light handles warm colors better; a south-facing room with abundant warm light can carry cooler tones without feeling cold.</p>
<p>Testing a sample swatch at different times of day, not just once, catches how dramatically a color can shift between morning and evening light.</p>
${photo("natural-light.png", "Home office color matched thoughtfully to natural light conditions", 574, 1024)}

<h2>Pair Colors Without It Looking Off</h2>
<p>Two colors from the same family, varying mainly in saturation, pair more safely than two unrelated hues competing for attention.</p>
<p>A neutral base with a single accent color gives most of the visual interest of a bolder palette with much less risk of it feeling chaotic.</p>
${photo("pairing-colors.png", "Thoughtfully paired colors creating a cohesive home office look", 574, 1024)}

<h2>Are Accent Walls Still Worth It?</h2>
<p>A single accent wall, especially behind the desk in view during video calls, still delivers real visual impact without committing the whole room to a bold color.</p>
<p>This remains one of the lowest-risk ways to bring in a stronger color, since three walls stay neutral as a safety net.</p>
${photo("accent-walls.png", "Accent wall adding personality behind a home office desk", 574, 1024)}

<h2>Color Combos That Actually Work</h2>
<p>Sage green with warm wood tones, navy with brass accents, and soft terracotta with cream are all combinations that read as considered rather than trend-chasing.</p>
<p>These pairings tend to age better than more of-the-moment color choices, which matters in a room that's expensive and disruptive to repaint often.</p>
${photo("color-combos.png", "Popular home office color combinations that stand the test of time", 574, 1024)}

<h2>Texture and Finish Matter Too</h2>
<p>A matte finish reads as more sophisticated and hides wall imperfections better; a satin or eggshell finish is more washable and practical for a high-touch room.</p>
<p>The same color in different finishes can read as noticeably different, which is worth testing alongside the color itself.</p>
${photo("texture-finish.png", "Finish and texture choices affecting a home office's overall feel", 574, 1024)}

<h2>Don't Forget Furniture and Decor</h2>
<p>The wall color is only part of the palette &mdash; furniture, shelving and decor all need to work with it, not just the paint can.</p>
<p>Choosing furniture finishes before finalizing the wall color, or vice versa, avoids the common mistake of two decisions made in isolation that don't actually match.</p>
${photo("furniture-decor.png", "Furniture and decor completing a cohesive home office color scheme", 574, 1024)}

<h2>Trust Your Own Eye</h2>
<p>A color that photographs beautifully but feels wrong to sit with daily isn't the right choice, regardless of how popular it is.</p>
<p>Living with a sample for a few days, in the actual room, catches what a quick swatch comparison can't.</p>
${photo("trust-your-eyes.png", "Personal color choice reflecting genuine taste in a home office", 574, 1024)}

<h2>Go With the Vibe, Not Just the Trend</h2>
<p>None of these factors need to be weighed equally for every home office.</p>
<p>Start with the desired feeling and the room's natural light, since both shape every other choice, then layer in pairing, texture and furniture from there.</p>
<p>The right color is the one that actually supports how the room gets used every day, trend or not.</p>
`;

module.exports = { body };
