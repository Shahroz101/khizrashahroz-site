// Body content for "17 Desk Setup Configurations for How You Actually
// Work". Numbered idea-list format. Source photos are all AI-generated
// style with no Pinterest links, 1:1 with the 17 ideas, so none carry
// credit captions. Heavy topical overlap with the existing
// home-office-aesthetic-ideas (styles/moods) and home-office-setup-tips
// (ergonomic basics) articles, so this one is framed around workflow
// and use-case instead — which setup fits dual monitors, a hobby
// corner, frequent movement, a tight footprint — rather than aesthetic
// style. Rewritten from scratch in the site's calmer tone, short-line
// prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "desk-setup-configurations", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>The right desk setup isn't about picking a style first.</p>
<p>It's about matching the configuration to the actual work.</p>
<p>Someone running two monitors needs a different footprint than someone who stands half the day.</p>
<p>These 17 setups are organized around that idea &mdash; function first, look second.</p>
${photo("ergonomic.png", "Ergonomic home office chair paired with an adjustable standing desk", 576, 1024)}

<h2>1. Built for Dual Monitors</h2>
<p>Two screens change everything about how a desk needs to be laid out.</p>
<p>Width matters more than depth here &mdash; a wide, shallow desk keeps both monitors in easy reach.</p>
<p>Monitor arms free up the actual desk surface for everything else.</p>
<p>Centering the keyboard between the two screens, not under either one, keeps posture neutral through long sessions.</p>
${photo("dual-monitor.png", "Sleek modern home office setup with a dual-monitor desk configuration", 576, 1024)}

<h2>2. Built Around Ergonomics First</h2>
<p>Comfort isn't a finishing touch here &mdash; it's the starting point.</p>
<p>An adjustable chair with real lumbar support changes how the whole day feels.</p>
<p>Monitor height at eye level, keyboard and mouse at elbow height, feet flat on the floor or a footrest.</p>
<p>Every other choice in the room gets built around getting those basics right.</p>
${photo("minimalist.png", "Modern minimalist home office with clean, uncluttered desk space", 576, 1024)}

<h2>3. Built to Move</h2>
<p>Sitting all day isn't a requirement anymore.</p>
<p>A standing desk converter or a full sit-stand desk lets the body switch positions through the day.</p>
<p>An anti-fatigue mat makes standing sessions last longer without the discomfort.</p>
<p>Switching postures every hour or so does more for energy than caffeine does.</p>
${photo("standing-desk.png", "Contemporary home office with a height-adjustable standing desk", 576, 1024)}

<h2>4. Built for a Tight Footprint</h2>
<p>Not every home has a spare room for a desk.</p>
<p>A compact corner desk or a wall-mounted fold-down version works in a space that can't spare much square footage.</p>
<p>Vertical storage picks up the slack that floor space can't provide.</p>
<p>A small footprint doesn't have to mean a cramped or unpleasant one.</p>
${photo("compact.png", "Well-organized compact home office setup in a small space", 576, 1024)}

<h2>5. Built for a Side Hobby</h2>
<p>A desk doesn't always need to be about work emails and spreadsheets.</p>
<p>A corner set up for painting, sewing, journaling or another hobby deserves its own dedicated surface.</p>
<p>Bins and trays keep supplies contained without turning the space into visual clutter.</p>
<p>Having a spot that's purely for a hobby, separate from work, makes it easier to actually use it.</p>
${photo("creative-corner.png", "Organized crafting corner set up as a creative home office space", 576, 1024)}

<h2>6. Built to Disappear Into the Wall</h2>
<p>A floating desk mounted directly to the wall skips the bulk of a traditional desk entirely.</p>
<p>No legs underneath means the floor stays open and the room feels less crowded.</p>
<p>This works especially well in a small bedroom or a shared living space.</p>
<p>Floating shelves above the desk pick up the storage a drawer unit would normally handle.</p>
${photo("floating-desk.png", "Minimalist floating desk setup mounted directly to the wall", 576, 1024)}

<h2>7. Built With Nature Close By</h2>
<p>A desk near a window, with a few real or faux plants nearby, changes the whole feel of a workday.</p>
<p>Natural light reduces eye strain in a way no desk lamp fully replicates.</p>
<p>Wood tones and woven textures round out the feel without turning the space precious.</p>
<p>A view of something green, even a small one, makes long stretches at a desk easier to sit through.</p>
${photo("nature-inspired.png", "Serene nature-inspired home office with plants and natural light", 576, 1024)}

<h2>8. Built to Keep the Tech Out of Sight</h2>
<p>A desk doesn't have to look like a server room to be fully wired.</p>
<p>Cable trays, wireless chargers and a dock for one-cable laptop hookup keep the tech functional without it taking over visually.</p>
<p>Smart lighting and a voice-controlled speaker add convenience without adding clutter.</p>
<p>The goal is a setup that works hard without looking like it's trying to.</p>
${photo("tech-savvy.png", "Futuristic tech-forward workspace with integrated smart devices", 576, 1024)}

<h2>9. Built for Long, Comfortable Sessions</h2>
<p>Some work calls for a setup that feels more like a reading nook than an office.</p>
<p>A soft throw, a warm lamp, and a chair with real cushioning all make a multi-hour session easier to sit through.</p>
<p>This suits anyone doing deep, focused work that doesn't move fast.</p>
<p>Comfort here isn't a luxury add-on &mdash; it's what keeps the setup usable for the long stretch.</p>
${photo("cozy-inviting.png", "Serene and inviting home office space with warm, cozy styling", 576, 1024)}

<h2>10. Built Around a Library Wall</h2>
<p>Floor-to-ceiling shelving behind the desk turns a workspace into something closer to a study.</p>
<p>Books double as both reference material and visual texture.</p>
<p>A rolling ladder is a nice touch for taller shelving, though not a requirement.</p>
<p>This setup rewards anyone who does a lot of reading or research as part of the job.</p>
${photo("library-combo.png", "Home office combined with a floor-to-ceiling library bookshelf wall", 576, 1024)}

<h2>11. Built on Raw, Honest Materials</h2>
<p>Exposed brick, black metal and reclaimed wood all bring real texture to a desk setup.</p>
<p>This suits anyone who wants the room to feel a little more rugged than polished.</p>
<p>Industrial pendant lighting and metal shelving round out the look without much extra effort.</p>
<p>It photographs well, but it also just holds up to daily use.</p>
${photo("industrial.png", "Striking industrial-themed workspace with exposed materials", 576, 1024)}

<h2>12. Built in One Consistent Tone</h2>
<p>A monochrome desk setup &mdash; one color family across the desk, chair and accessories &mdash; reads as deliberate rather than accidental.</p>
<p>Varying textures within that single tone keeps it from feeling flat.</p>
<p>This works especially well in a small space, where fewer competing colors make the room feel calmer.</p>
<p>It's a low-maintenance look that doesn't date quickly either.</p>
${photo("monochrome.png", "Stylish monochrome home office setup in a single tonal palette", 576, 1024)}

<h2>13. Built to Stay Timeless</h2>
<p>A neutral desk setup skips trend-chasing almost entirely.</p>
<p>Soft whites, warm beiges and light woods make up most of the palette.</p>
<p>This kind of setup won't need a redo in a year or two the way a trend-driven one might.</p>
<p>It's a safe, steady choice for anyone who'd rather not think about redecorating often.</p>
${photo("neutral-timeless.png", "Tastefully curated neutral home office setup with a timeless feel", 576, 1024)}

<h2>14. Built With Energy in Mind</h2>
<p>Not every desk setup needs to be calm and muted.</p>
<p>A bold accent wall or a few vibrant accessories can genuinely lift mood through a long workday.</p>
<p>This suits anyone whose best work comes from energy rather than quiet focus.</p>
<p>One or two strong color choices go further than filling the whole room with pattern.</p>
${photo("bold-vibrant.png", "Vibrant and energetic workspace with bold color accents", 576, 1024)}

<h2>15. Built With a Creative Edge</h2>
<p>A desk doesn't have to look buttoned-up to be functional.</p>
<p>Mismatched art, an unconventional desk shape, or an unexpected color combination all bring personality to the space.</p>
<p>This suits anyone in a creative field who wants the workspace to reflect that.</p>
<p>A setup that looks a little unconventional often makes the work feel less routine too.</p>
${photo("artistic.png", "Captivating artistic home office setup with creative personal flair", 576, 1024)}

<h2>16. Built With a Few Personal Touches</h2>
<p>A photo, a favorite mug, a small memento &mdash; these make a desk feel like it belongs to someone specific.</p>
<p>A sterile desk rarely inspires anyone to sit down at it.</p>
<p>Keeping the personal items to a handful avoids tipping into clutter.</p>
<p>These small additions do a lot for motivation on an ordinary Tuesday.</p>
${photo("personal-touches.png", "Cozy and personalized home office setup with meaningful decor", 576, 1024)}

<h2>17. Built From What's Already Working</h2>
<p>The best configuration isn't always the newest one on this list.</p>
<p>Sometimes it's whatever setup is already in place, with one or two small adjustments.</p>
<p>A desk that gets used every day beats a perfectly styled one that doesn't.</p>
<p>Start with what's already working, then build from there.</p>

<h2>Final Thoughts</h2>
<p>None of these 17 configurations require starting from a blank room.</p>
<p>Most of them are a handful of changes away from whatever setup already exists.</p>
<p>Pick the one that matches how the work actually gets done, not just how the photos look.</p>
<p>The right desk setup is the one that gets used every single day.</p>
`;

module.exports = { body };
