// Body content for "What Actually Makes a Powder Room Feel
// Luxurious". Guide format, matching the source's section structure.
// Distinct from the existing elegant-powder-room-design-direction
// (17 ideas built around a visual decision framework: hero element,
// finish repetition) via a sensory/experiential framing — scent,
// sound, personalization and common mistakes, rather than visual
// design decisions, which the existing piece already covers in
// depth. One source image (SHER-ALAB-3270-00.jpg) was hosted on a
// Supabase "product-images" bucket, a product-placement image, not
// editorial — skipped per established precedent. 0 Pinterest pins,
// so all uncredited photo().

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "powder-room-luxury-elements", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A powder room's luxury rarely comes down to square footage or a big budget.</p>
<p>It comes down to a handful of sensory and personal details that most design lists skip entirely &mdash; scent, sound, and whether the room feels like someone's, not a showroom.</p>
${photo("hero.png", "A close-up of a luxurious powder room vanity with elegant details", 1312, 736)}

<h2>What Actually Makes It Feel Luxurious</h2>
<p>It's rarely one single expensive feature &mdash; it's several smaller, considered details working together that most people never consciously notice.</p>
${photo("intro.png", "A powder room with several considered luxury details working together", 574, 1024)}

<h2>Bold, Show-Off-Worthy Design</h2>
<p>A powder room is one of the few rooms where a genuinely bold choice &mdash; a dramatic wallpaper, a statement light &mdash; rarely overstays its welcome, since guests only spend a few minutes in it at a time.</p>
<p>This makes it the lowest-risk room in the house for a design choice too bold for anywhere else.</p>
${photo("bold-design-1.png", "Bold, dramatic design choices in a small luxurious powder room", 574, 1024)}
${photo("bold-design-2.png", "A statement design element making a powder room feel show-off-worthy", 574, 1024)}

<h2>Materials That Feel Fancy, Even When They Aren't</h2>
<p>A material that reads as expensive &mdash; polished stone, a rich-looking tile &mdash; does most of the perceived-luxury work, regardless of what it actually cost.</p>
<p>This matters more here than in any other room, since a powder room's small scale means even a mid-range material can be used generously without a huge budget.</p>
${photo("materials-1.png", "Rich, expensive-looking materials elevating a small powder room", 574, 1024)}
${photo("materials-2.png", "Fancy-feeling finishes creating luxury on a modest budget", 574, 1024)}

<h2>A Small Vanity With Real Personality</h2>
<p>A vanity with genuine character &mdash; an unusual material, a distinctive shape &mdash; carries a disproportionate amount of the room's overall impression, given how little else usually competes for attention in the space.</p>
${photo("vanity.png", "A small powder room vanity with real personality and character", 574, 1024)}

<h2>The Mirror Is Where the Details Live</h2>
<p>An interesting mirror frame, or one with built-in lighting, elevates the room in a way that's easy to underestimate until it's actually in place.</p>
${photo("mirror.png", "A distinctive mirror adding luxurious detail to a powder room", 574, 1024)}

<h2>Scent, Sound, and Mood</h2>
<p>A genuinely good-smelling candle or diffuser does more for how luxurious a powder room feels than almost any visual choice, since scent is the detail guests remember without consciously registering why.</p>
<p>Sound matters too &mdash; a quiet, well-insulated room reads as more considered than one where every noise carries straight through the door.</p>
${photo("scent-sound-mood.png", "A powder room with considered scent and mood, not just visual styling", 574, 1024)}

<h2>Functional Extras That Whisper High-End</h2>
<p>A small detail like a soft-close toilet lid, a quality hand towel, or a well-placed hook does real work signaling care without announcing itself the way a bold design choice does.</p>
${photo("functional-extras.png", "Small functional extras signaling genuine high-end care in a powder room", 574, 1024)}

<h2>Luxury Is Personalization, Not Perfection</h2>
<p>A room that reflects actual personal taste, even with small imperfections, reads as more luxurious than a flawless but generic showroom copy.</p>
<p>This is the detail most design lists skip, in favor of recommending specific finishes and features instead.</p>
${photo("personalization.png", "A personalized powder room feeling luxurious through genuine character", 574, 1024)}

<h2>Mistakes That Kill the Luxe Vibe</h2>
<p>Overcrowding a small room with too many competing bold choices undercuts the exact effect those choices were meant to create.</p>
<p>Skipping lighting quality in favor of visual style is the other common miss &mdash; harsh or poorly placed lighting undoes an otherwise well-chosen room in seconds.</p>
${photo("common-mistakes.png", "Avoiding common design mistakes that undercut a powder room's luxury", 574, 1024)}

<h2>Tiny Room, Big Impact</h2>
<p>None of these details require a large budget or a full renovation.</p>
<p>Scent, sound, personalization and a few well-chosen materials matter more here than almost anywhere else in the house, precisely because the room is small enough for every detail to actually register.</p>
`;

module.exports = { body };
