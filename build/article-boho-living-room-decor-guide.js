// Body content for "Boho Living Room Decor, Built From the Ground Up".
// Guide format, matching the source's h2/h3 structure (foundation,
// textiles, plants, furniture, wall art, lighting, personal touches,
// balance). Distinct from the existing boho-apartment-styling-guide,
// which covers cross-room principles for a whole apartment — this is
// scoped to a single room's build order, the whole-home/whole-
// apartment vs. single-room pattern used elsewhere this session.
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
      ${picture({ dir: "boho-living-room-decor-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Boho living room decor looks effortless when it's done well, which is exactly what makes it hard to get right.</p>
<p>The looseness is real, but it sits on top of a build order &mdash; foundation, then texture, then the louder stuff.</p>
<p>Skip the order and the room reads as cluttered instead of collected.</p>
${photo("hero.png", "Cozy boho living room with warm, eclectic charm", 1312, 736)}

<h2>What Boho Living Room Decor Actually Means</h2>
<p>At its core, it's a relaxed mix of global influence, natural materials and collected-over-time pieces, rather than any single defined style.</p>
<p>The common thread across every version of it is warmth and imperfection, not a strict color palette or furniture list.</p>

<h2>Start With the Right Foundation</h2>
<p>Neutral walls, flooring and larger furniture pieces give the louder elements &mdash; pattern, color, texture &mdash; somewhere to actually stand out.</p>
<p>Earthy tones work better as that foundation than anything too crisp or cool, since boho leans warm by nature.</p>

<h2>Textiles Do Most of the Work</h2>
<p>Mixing patterns with real intention &mdash; not randomly, but with a shared color thread running through them &mdash; is what separates considered boho from visual noise.</p>
<p>Texture matters just as much as pattern here; a flat, single-material room never reads as boho no matter how many patterns get layered onto it.</p>

<h2>Plants Are the Living Soul of the Room</h2>
<p>A few easy, forgiving plants do more for the room's actual feel than almost any other single addition on this list.</p>
<p>Hanging plants specifically add a dimension floor and shelf plants can't, filling vertical space that often goes completely unused.</p>

<h2>Furniture That Isn't Matchy-Matchy</h2>
<p>Mixing furniture eras, materials and finishes with confidence is a defining boho trait, not an accident or a budget compromise.</p>
<p>Function still matters underneath the mixing, though &mdash; every piece should still genuinely work for how the room actually gets used.</p>

<h2>Wall Art and Decor: Go Big or Go Home</h2>
<p>Large, global-inspired or deeply personal pieces read as intentional in a way several small, generic ones never quite do.</p>
<p>A gallery wall works well too, as long as the pieces in it feel curated rather than simply filled in to cover empty space.</p>

<h2>Lighting Sets the Whole Mood</h2>
<p>Warm, layered lighting &mdash; string lights, a textured lamp, candles &mdash; does more for a boho room's atmosphere than almost any single piece of furniture.</p>
<p>Harsh overhead lighting alone undercuts the relaxed feel faster than almost any other single mistake on this list.</p>

<h2>Don't Forget the Room's Soul</h2>
<p>Personal touches &mdash; travel finds, handmade pieces, things with a real story &mdash; are what keep a boho room from reading as a showroom display.</p>
<p>This is the detail that's easiest to skip and most responsible for whether the room actually feels lived-in.</p>

<h2>Keep It Balanced</h2>
<p>Boho tolerates more visual chaos than most styles, but it still has real limits &mdash; a shared color thread and some negative space keep the mix readable instead of overwhelming.</p>
<p>A few quiet, empty spots between the busier ones give the eye somewhere to rest.</p>

<h2>Your Vibe, Your Rules</h2>
<p>None of this needs to happen in a single weekend or a single shopping trip.</p>
<p>Start with the foundation and textiles, then layer in plants, art and personal pieces as they come along.</p>
<p>The room comes together over time, and that's exactly how a genuinely good boho space is supposed to look.</p>
`;

module.exports = { body };
