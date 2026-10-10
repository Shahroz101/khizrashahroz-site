// Body content for "13 Moody Living Room Ideas That Instantly
// Transform Your Space". Numbered idea-list format, condensed from a
// 22-section source (why-choose/myths/psychology/key-elements intro
// sections folded into a shorter intro). New topic for the site — no
// existing moody living room article (moody-dark-bedroom-ideas
// covers a different room). Ideas 4, 7 and 9 (metallic accents, dark
// wood tones, patterns) had no source photo, kept text-only. Idea 5
// (dramatic artwork) reused the "why choose" section's photo in the
// source, so it also runs text-only to avoid duplicating the image.
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
      ${picture({ dir: "moody-living-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A moody living room gets mistaken for a dark, closed-in one more often than it should.</p>
<p>Done well, it reads as enveloping and genuinely restful, not cave-like. The difference comes down to a specific set of choices, not just a dark paint color.</p>
${photo("hero.jpg", "Stunning moody living room with rich, dramatic styling", 1600, 987)}

<h2>Why Choose a Moody Living Room</h2>
<p>A darker palette makes a room feel more intimate and enveloping, especially in the evening, when most living rooms actually get used.</p>
<p>It also photographs with genuine depth that a brighter, flatter room often lacks.</p>
${photo("why-choose.jpg", "The enveloping, intimate appeal of a moody living room", 1024, 647)}

<h2>Busting the Myths</h2>
<p>The biggest misconception is that dark automatically means small-feeling &mdash; in practice, a well-lit moody room often feels just as spacious as a lighter one, since the eye stops measuring hard corners.</p>
<p>The idea that moody rooms only work in large spaces also doesn't hold up; a smaller room handles the look just as well with the right lighting.</p>
${photo("busting-myths.jpg", "Dispelling common myths about moody living room design", 684, 1024)}

<h2>The Psychology Behind It</h2>
<p>Darker, warmer spaces genuinely read as calmer to the nervous system than bright, high-contrast ones, which is part of why the look has real staying power beyond trend cycles.</p>
<p>This isn't purely aesthetic preference &mdash; there's a real psychological reason the look feels restful rather than oppressive when done correctly.</p>
${photo("psychology.jpg", "The psychological calm created by a well-designed moody space", 1024, 702)}

<h2>1. Go Bold With Deep Wall Color</h2>
<p>A genuinely deep color &mdash; charcoal, forest green, deep navy &mdash; on the walls sets the foundation the rest of the room builds on.</p>
<p>Testing the color under the room's actual lighting matters more here than with almost any lighter paint choice.</p>
${photo("bold-wall-colors.jpg", "Deep, bold wall color setting the foundation for a moody room", 1024, 768)}

<h2>2. Layer In Cozy Lighting</h2>
<p>Warm, layered lighting is what keeps a dark room from feeling flat or heavy &mdash; a single overhead fixture in a moody room reads as genuinely gloomy.</p>
<p>This is the single most important detail for making the look actually work, more than the wall color itself.</p>
${photo("cozy-lighting.png", "Layered, warm lighting keeping the room feeling cozy, not gloomy", 1024, 683)}

<h2>3. Mix Rich Textures</h2>
<p>Velvet, bouclé, leather and other tactile materials add visual depth that a dark flat surface alone can't provide.</p>
<p>This matters more here than in a lighter room, since there's no color variation doing that work instead.</p>
${photo("rich-textures.png", "Rich, tactile textures adding depth to a moody color palette", 1024, 768)}

<h2>4. Use Metallic Accents for Contrast</h2>
<p>Brass, gold or warm bronze details catch available light in a way that keeps a dark room from reading as uniformly flat.</p>
<p>A little goes a long way &mdash; a few well-placed accents outperform metallic surfaces scattered everywhere.</p>

<h2>5. Play With Dramatic Artwork</h2>
<p>One large, confident piece of art works especially well against a dark wall, where it gets to stand out rather than compete with a busy, lighter background.</p>
<p>This is one of the easiest ways to add a genuine focal point to an otherwise monochromatic room.</p>

<h2>6. Add Layers With Rugs and Curtains</h2>
<p>A textured rug and floor-length curtains in complementary dark tones round out the room's enveloping feel from floor to ceiling.</p>
<p>This layering is what keeps the walls from feeling like the only dark element in an otherwise ordinary room.</p>
${photo("rugs-curtains.png", "Layered rugs and curtains extending the moody palette floor to ceiling", 1024, 768)}

<h2>7. Create Depth With Dark Wood Tones</h2>
<p>Dark wood furniture against dark walls sounds risky but actually creates a cohesive, layered depth rather than a flat block of one color.</p>
<p>Varying the exact wood tone slightly piece to piece keeps this pairing from feeling monotonous.</p>

<h2>8. Bring In Statement Furniture</h2>
<p>One bold, well-chosen furniture piece reads as more intentional in a moody room than it would in a lighter, busier one.</p>
<p>The dark backdrop actually does some of the styling work, letting a single piece genuinely stand out.</p>
${photo("statement-furniture.png", "A statement furniture piece standing out against the dark backdrop", 1024, 768)}

<h2>9. Experiment With Pattern</h2>
<p>A patterned pillow, rug or wallpaper moment adds visual interest without requiring a full color change.</p>
<p>Darker-toned patterns specifically tend to blend more naturally into a moody room than bright, high-contrast ones.</p>

<h2>10. Use Mirrors to Reflect Light</h2>
<p>A well-placed mirror bounces whatever light exists back into the room, directly countering the one real risk of a dark palette &mdash; a room that reads as too dim.</p>
<p>This is one of the simplest, most overlooked tools for keeping a moody room from tipping into actually dark.</p>
${photo("mirrors.png", "A mirror reflecting light to keep the moody room from feeling too dim", 1024, 768)}

<h2>11. Add Moody Greenery</h2>
<p>Deep green plants with substantial leaves fit a moody palette far better than delicate, pale varieties.</p>
<p>This also brings a bit of life and movement into a room that could otherwise feel static.</p>
${photo("greenery.jpg", "Deep green plants fitting naturally into a moody color palette", 679, 1024)}

<h2>12. Play With Layered Accessories</h2>
<p>A few considered objects, in varying textures and slightly varying dark tones, finish the room without requiring any additional color.</p>
<p>Restraint matters here &mdash; a handful of deliberate pieces reads better than a room full of smaller decorative items.</p>
${photo("layered-accessories.png", "Layered accessories finishing the room without adding new color", 1024, 768)}

<h2>13. Balance With Pops of Light Neutrals</h2>
<p>A cream throw, a pale rug, or white bedding-style textiles give the eye somewhere to land in an otherwise dark room.</p>
<p>This contrast is what keeps the room reading as dramatic and intentional rather than simply dark.</p>
${photo("light-neutrals.jpg", "Light neutral accents providing balance within a dark, moody room", 768, 1024)}

<h2>Final Thoughts</h2>
<p>None of these 13 ideas require redoing the whole room at once.</p>
<p>Start with lighting and the wall color, since both have the biggest effect on whether the room reads as cozy or oppressive, then layer in texture and the finishing details.</p>
<p>A moody living room done right feels like the most restful room in the house, not the darkest one.</p>
`;

module.exports = { body };
