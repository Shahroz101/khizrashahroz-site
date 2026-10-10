// Body content for "5 Table Lamp Types Worth Adding to Any Room".
// Numbered idea-list format. Source was a branded Amazon product
// roundup (Fenmzee, Aooshine, Dicoool, KDG table lamps, with pricing
// and "real-life thoughts" reviews) — rewritten around generic lamp
// category/types per established precedent, since current
// availability and pricing can't be verified and brand names aren't
// reproduced. New topic for the site (existing lighting articles are
// mood/styling-focused, not lamp-type selection). Source had only 1
// figure (hero, a generic lifestyle photo, not a product shot), no
// Pinterest pins — uncredited photo() only.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "lamp-types-to-brighten-your-home", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A good table lamp does more for a room's mood than almost any other single object in it.</p>
<p>The right type depends entirely on what the space actually needs &mdash; function, softness, portability, or just a bit of style.</p>
${photo("hero.png", "A warmly lit living room brightened by the right table lamp", 1312, 736)}

<h2>1. Touch-Control Dimmable Lamps</h2>
<p>A touch-control lamp with multiple brightness levels solves the most common lamp complaint &mdash; needing different light for different moments &mdash; without a single physical switch to fumble for in the dark.</p>
<p>This type works especially well on a nightstand, where a simple tap beats reaching for a small knob or pull-chain.</p>

<h2>2. Retro-Inspired Accent Lamps</h2>
<p>A lamp with a vintage-inspired silhouette brings genuine character to a room in a way a purely functional design never quite manages.</p>
<p>This type works best as a quiet style statement, chosen as much for how it looks switched off as for the light it gives when it's on.</p>

<h2>3. Adjustable Color-Temperature Lamps</h2>
<p>A lamp that shifts between warmer and cooler light tones adapts to different times of day and different tasks far better than a single fixed color temperature can.</p>
<p>This is one of the more genuinely useful upgrades on this list, especially for anyone using the same lamp for both relaxing and reading.</p>

<h2>4. Soft Fabric-Shade Lamps</h2>
<p>A linen or fabric shade diffuses light into something considerably softer and more ambient than an exposed or glass shade ever produces.</p>
<p>This type suits a space meant for winding down, where a harsher, more direct light would work against the mood rather than for it.</p>

<h2>5. Cordless and Rechargeable Lamps</h2>
<p>A battery-powered, rechargeable lamp goes anywhere a cord can't &mdash; a dinner table, a reading chair without a nearby outlet, even outdoors.</p>
<p>This flexibility makes it one of the most genuinely versatile types here, even if it means remembering to recharge it occasionally.</p>

<h2>Which Lamp Type Actually Fits</h2>
<p>A bedside table calls for dimmable touch control above almost anything else, while a living room accent table has more room for a bolder, retro-inspired choice.</p>
<p>A space without a nearby outlet is the one clear case where cordless wins outright, regardless of which other features might otherwise be preferred.</p>
<p>None of these five types is the universally correct choice &mdash; matching the type to the room's actual function matters more than any single feature on its own.</p>
`;

module.exports = { body };
