// Body content for "17 Bathroom Lighting Ideas for Setting the Mood".
// Numbered idea-list format (source used plain h2 titles, not
// numbers). Distinct from the existing bathroom-light-fixtures-guide
// article, which covers 5 fixture TYPES as a practical buying guide —
// this one covers STYLE and mood-driven lighting choices instead
// (statement chandelier, candlelight, colored LEDs), which the
// buying guide doesn't touch. Idea 2 (vanity lights) had no source
// photo, kept text-only. Source photos are all AI-generated style
// with no Pinterest links, so none carry credit captions. Rewritten
// out of the source's heavily slang-driven voice into the site's
// calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-lighting-mood-styles", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Bathroom lighting isn't just about seeing clearly &mdash; it sets the entire mood of the room.</p>
<p>The same bathroom can feel clinical under one light source and genuinely luxurious under another.</p>
<p>These 17 ideas lean into style and atmosphere, not just the practical fixture types a bathroom technically needs.</p>
<p>Most work well layered together rather than picked one at a time.</p>
${photo("hero.png", "Stylish modern bathroom with a mix of layered lighting", 1312, 736)}

<h2>1. A Statement Chandelier</h2>
<p>A chandelier in a bathroom reads as unexpected in the best way, turning a purely functional room into something genuinely dramatic.</p>
<p>This works especially well over a freestanding tub, where it becomes the room's clear focal point.</p>
<p>Scale it to the room &mdash; a smaller chandelier for a powder room, something bolder for a larger primary bath.</p>
<p>One of the highest-drama choices on this entire list.</p>
${photo("chandelier.png", "Luxurious bathroom featuring a statement chandelier fixture", 683, 1024)}

<h2>2. Vanity Lights That Actually Flatter</h2>
<p>Side-mounted vanity lights, rather than a single light directly overhead, eliminate the harsh shadows that make grooming tasks harder.</p>
<p>Warm-toned bulbs matter more here than anywhere else in the house, since this is where lighting directly affects how a face looks in the mirror.</p>
<p>This isn't just practical &mdash; good vanity lighting is also one of the most noticeable style upgrades a bathroom can get.</p>

<h2>3. Recessed Lighting for a Clean Look</h2>
<p>Flush, unobtrusive recessed fixtures disappear into the ceiling, keeping the room's visual focus on everything else.</p>
<p>This suits a minimalist or modern bathroom where a visible fixture would compete with the room's clean lines.</p>
<p>Spreading several recessed lights evenly avoids the single harsh shadow one fixture alone would create.</p>
${photo("recessed.png", "Sleek minimalist bathroom with clean recessed lighting", 683, 1024)}

<h2>4. Under-Cabinet Lighting for Late-Night Trips</h2>
<p>A soft strip of light under the vanity cabinet provides just enough visibility for a nighttime bathroom trip without the jolt of full overhead light.</p>
<p>This is a small, practical addition that also adds a subtle glow effect worth the install on its own.</p>
<p>Dimmable or motion-activated versions add even more convenience for middle-of-the-night use.</p>
${photo("under-cabinet.png", "Modern bathroom featuring soft under-cabinet lighting", 683, 1024)}

<h2>5. Pendant Lights as a Design Statement</h2>
<p>A pair of pendants flanking the mirror does the job of vanity lighting while adding real visual interest.</p>
<p>This suits a bathroom that wants a more curated, designed feel than a standard built-in fixture provides.</p>
<p>Pendant height matters here &mdash; too low interferes with the mirror, too high loses the lighting benefit.</p>
${photo("pendant.png", "Contemporary bathroom design with stylish pendant lighting", 683, 1024)}

<h2>6. Wall Sconces With Real Presence</h2>
<p>A bold sconce design adds drama in a way a flush, built-in fixture never could.</p>
<p>This works well paired with a statement mirror, where the two elements play off each other.</p>
<p>Sconces also double as general ambient lighting when placed away from the vanity, not just task lighting at the mirror.</p>
${photo("sconces.png", "Modern bathroom beautifully designed with dramatic wall sconces", 683, 1024)}

<h2>7. An LED Mirror</h2>
<p>A mirror with integrated LED lighting around its edge solves the shadow problem directly at the source.</p>
<p>Many versions include adjustable brightness and color temperature, adding flexibility a fixed fixture can't match.</p>
<p>This is one of the more modern, tech-forward choices on this list, and increasingly a popular default in new builds.</p>
${photo("led-mirrors.png", "Sleek modern bathroom featuring an illuminated LED mirror", 683, 1024)}

<h2>8. A Skylight</h2>
<p>Natural light does more for a bathroom's mood than any artificial fixture, when the layout allows for it.</p>
<p>A skylight brings daylight into a room that often has limited window space due to privacy concerns.</p>
<p>This is a bigger structural investment than anything else on this list, but it delivers a genuinely different quality of light.</p>
${photo("skylights.png", "Serene spacious bathroom illuminated by a beautiful skylight", 683, 1024)}

<h2>9. Dimmer Switches</h2>
<p>A dimmer turns one fixture into several different moods &mdash; bright for grooming, soft for an evening soak.</p>
<p>This is one of the cheapest upgrades on this entire list relative to the flexibility it adds.</p>
<p>Worth adding to nearly any fixture in the room, not just one specific type.</p>
${photo("dimmers.png", "Luxurious bathroom design with mood-setting dimmer switches", 683, 1024)}

<h2>10. Accent Lighting on Favorite Features</h2>
<p>A small directional light trained on an interesting tile pattern, a piece of art, or an architectural detail gives that feature real presence after dark.</p>
<p>This works best as a layer on top of general lighting, not as the room's only light source.</p>
<p>A subtle way to highlight whatever detail in the room deserves the most attention.</p>
${photo("accent-lighting.png", "Modern bathroom design featuring accent lighting on key features", 683, 1024)}

<h2>11. Flush Mounts for Low Ceilings</h2>
<p>A flush-mounted fixture provides real light without hanging down into a room with limited ceiling height.</p>
<p>This suits an older home or a smaller bathroom where a pendant or chandelier simply wouldn't fit.</p>
<p>Modern flush mount designs have moved well past the plain, dated versions this category used to mean.</p>
${photo("flush-mounts.png", "Chic bathroom design with a stylish flush mount light fixture", 683, 1024)}

<h2>12. Vintage Exposed Bulbs</h2>
<p>A fixture with visible Edison-style bulbs brings warmth and a bit of retro character to the room.</p>
<p>This suits a farmhouse, industrial or vintage-leaning bathroom more than a sleek modern one.</p>
<p>The warm, slightly amber light these bulbs cast adds to the cozy effect on its own.</p>
${photo("vintage-bulbs.png", "Cozy inviting bathroom with vintage exposed bulb lighting", 683, 1024)}

<h2>13. Motion Sensor Lights</h2>
<p>A light that turns on automatically solves the groggy-morning, fumbling-for-a-switch problem directly.</p>
<p>This works especially well paired with the under-cabinet lighting idea above, for a soft nighttime glow that needs no switch at all.</p>
<p>A practical convenience upgrade that doesn't require sacrificing any style.</p>
${photo("motion-sensor.png", "Sleek contemporary bathroom with convenient motion sensor lighting", 683, 1024)}

<h2>14. Colored LEDs</h2>
<p>Adjustable color LEDs let the room shift mood entirely &mdash; a cool blue for an energizing morning, a warm amber for an evening wind-down.</p>
<p>This suits anyone who wants real flexibility rather than committing to one fixed light temperature.</p>
<p>A playful option that works especially well combined with a smart home lighting system.</p>
${photo("colored-leds.png", "Futuristic bathroom design with customizable colored LED lighting", 683, 1024)}

<h2>15. Over-Mirror Light Bars</h2>
<p>A horizontal light bar mounted above the mirror delivers even, shadow-free illumination across the whole reflection.</p>
<p>This is a more modern take on the classic vanity light strip, with a cleaner, more minimal look.</p>
<p>Particularly useful for anyone who applies makeup or shaves daily and needs reliably even light.</p>
${photo("over-mirror-bars.png", "Modern stylish bathroom with an over-mirror light bar", 683, 1024)}

<h2>16. Candlelight for Real Ambiance</h2>
<p>Nothing replicates the specific warmth of real candlelight, even with the best LED dimmer available.</p>
<p>A cluster of candles near the tub turns an ordinary bath into something closer to a spa experience.</p>
<p>This works as a layer on top of practical lighting, not a replacement for it &mdash; candles alone won't handle daily grooming tasks.</p>
${photo("candlelight.png", "Serene spa-style bathroom with warm candlelight ambiance", 683, 1024)}

<h2>17. Mixing Fixture Types With Intention</h2>
<p>The most well-lit bathrooms rarely rely on just one fixture type &mdash; they layer two or three from this list together.</p>
<p>A combination of ambient, task and accent lighting covers every actual need the room has, from grooming to relaxing.</p>
<p>This is less a single idea and more the organizing principle behind everything else on this list.</p>
${photo("mix-and-match.png", "Stunning bathroom design showcasing multiple lighting types mixed together", 683, 1024)}

<h2>Final Thoughts</h2>
<p>Bathroom lighting deserves more attention than it usually gets.</p>
<p>A single overhead fixture handles the bare minimum, but it leaves most of the room's potential mood untouched.</p>
<p>Start with whichever idea solves an actual daily problem &mdash; bad vanity shadows, a groggy 2 a.m. trip &mdash; then layer in the more atmospheric choices after.</p>
<p>The right combination turns a purely functional room into one that's genuinely worth spending time in.</p>
`;

module.exports = { body };
