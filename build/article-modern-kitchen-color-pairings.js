// Body content for "7 Kitchen Color Pairings That Actually Work
// Together". Numbered idea-list format, reordered from the source's
// 7 combos (white & wood, charcoal & gold, sage & cream, navy &
// brass, pale blue & white, greige & black, black/white + accent).
// Distinct from the existing timeless-kitchen-paint-colors article,
// which covers single-color selection — this is about pairing two
// colors together, a genuinely different decision. Source was
// heavily interspersed with Amazon product placements (utensil
// holders, pendant lights, bar stools, fruit bowls) between the
// combo sections — skipped entirely per established precedent, not
// genuine content ideas. One genuine editorial photo per combo kept;
// 0 Pinterest pins, so all uncredited photo().

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "modern-kitchen-color-pairings", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>One good color matters less in a kitchen than how two colors work together.</p>
<p>Cabinets, walls, an island and hardware all have to agree with each other, which makes pairing harder than picking a single shade ever is.</p>
<p>These seven combinations cover the range, from safe to genuinely bold.</p>
${photo("hero.jpg", "A modern kitchen built around a considered color pairing", 1600, 959)}

<h2>1. White and Wood</h2>
<p>White cabinetry against natural wood tones &mdash; open shelving, a butcher block island, wood flooring &mdash; brings warmth to a palette that could otherwise feel sterile.</p>
<p>This pairing works in almost any kitchen size or layout, which is exactly why it's stayed a safe, reliable choice for so long.</p>
${photo("white-wood.png", "A classic white and wood kitchen color pairing with natural warmth", 574, 1024)}

<h2>2. Charcoal and Gold</h2>
<p>Dark charcoal cabinetry paired with gold or brass hardware brings genuine drama and a modern, upscale edge.</p>
<p>This combination works best with enough natural light or layered lighting to keep the dark tone from reading as heavy or closed-in.</p>
${photo("charcoal-gold.png", "A dramatic charcoal and gold kitchen color pairing", 574, 1024)}

<h2>3. Sage Green and Cream</h2>
<p>A soft sage paired with a warm cream brings genuine calm without tipping into anything cold or clinical.</p>
<p>This pairing suits a kitchen aiming for a softer, more relaxed feel rather than a sharp, high-contrast look.</p>
${photo("sage-cream.png", "A soft, sophisticated sage green and cream kitchen pairing", 574, 1024)}

<h2>4. Navy and Brass</h2>
<p>Deep navy cabinetry against warm brass hardware brings real richness and a bold, moody sophistication.</p>
<p>This combination tends to work best on a single wall or island rather than every surface, letting the navy stay a statement instead of overwhelming the room.</p>
${photo("navy-brass.png", "A bold, moody navy and brass kitchen color pairing", 574, 1024)}

<h2>5. Pale Blue and White</h2>
<p>A pale, almost washed-out blue against crisp white brings a light, airy coastal quality that reads as effortless rather than themed.</p>
<p>This pairing works especially well in a kitchen with good natural light, which amplifies the combination's inherent brightness.</p>
${photo("paleblue-white.png", "A light, airy pale blue and white kitchen color pairing", 574, 1024)}

<h2>6. Greige and Black</h2>
<p>A warm greige base paired with black accents brings understated sophistication without the starkness of pure gray and black together.</p>
<p>This combination tends to age well, since greige sits in a genuinely neutral middle ground that rarely feels dated.</p>
${photo("greige-black.png", "An understated, cool greige and black kitchen color pairing", 574, 1024)}

<h2>7. Black, White, and a Splash of Color</h2>
<p>A black-and-white base with one additional bold accent color brings personality without committing to a full bold palette everywhere.</p>
<p>This approach also makes updating the accent color later far easier than repainting an entire two-tone scheme.</p>
${photo("colorpop.png", "A black and white kitchen with a bold splash of accent color", 574, 1024)}

<h2>Do's and Don'ts of Mixing Kitchen Colors</h2>
<p>Keeping one color dominant and the second as an accent, rather than splitting the room 50/50, generally reads as more intentional.</p>
<p>Testing both colors together under the kitchen's actual lighting matters more here than for a single color, since how two tones interact can shift considerably under warm versus cool light.</p>
${photo("dos-donts.png", "Testing a kitchen color pairing under real lighting before committing", 574, 1024)}

<h2>Pick What Feels Right</h2>
<p>None of these seven pairings is universally correct &mdash; the best one depends on the kitchen's light, size and the mood that's actually wanted.</p>
<p>Whichever combination gets chosen, the two colors working together end up mattering more than either one on its own.</p>
`;

module.exports = { body };
