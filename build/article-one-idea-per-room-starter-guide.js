// Body content for "One Decor Idea Per Room: A Starter Guide for a
// Whole-Home Refresh". Numbered idea-list format, 15 ideas across 8
// rooms, matching the source 1:1. Several individual ideas here
// overlap with the site's existing deep-dive room articles (open
// shelving, dining centerpieces, entryway tables, kids' room decor,
// etc.), so this rewrite leans into the cross-room "pick one thing
// per room" sampler framing — a quick starting point across the whole
// home — rather than repeating any single room's full idea list.
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
      ${picture({ dir: "one-idea-per-room-starter-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A whole-home refresh doesn't have to mean redesigning every room at once.</p>
<p>Picking just one meaningful change per room is enough to shift how the entire house feels, without the overwhelm of a full top-to-bottom project.</p>
<p>These 15 ideas cover one highest-impact starting point for eight different rooms &mdash; a sampler to pull from, not a checklist to finish in a weekend.</p>
${photo("hero.jpeg", "Harmonious home decor collage showcasing ideas for every room", 1152, 768)}

<h2>Living Room: Start With Wall Art</h2>
<p>A single bold piece of art does more to set a living room's tone than almost any other single change.</p>
<p>Scale matters more than subject matter here &mdash; one confident piece reads better than several small ones competing for attention.</p>
${photo("living-room-art.png", "Bold wall art making a statement in a modern living room", 576, 1024)}

<h2>Living Room: Or a Textured Rug</h2>
<p>If the walls are already settled, a textured rug is the next highest-impact change &mdash; it grounds the furniture and adds warmth underfoot.</p>
<p>Layering a smaller patterned rug over a larger neutral one adds depth without committing to a full room redo.</p>
${photo("living-room-rugs.png", "Textured rug adding cozy comfort to a living room", 576, 1024)}

<h2>Kitchen: Try Open Shelving</h2>
<p>Swapping even one upper cabinet for open shelving changes how the whole kitchen feels, giving it a lighter, more collected look.</p>
<p>This also doubles as a display opportunity for dishware that would otherwise stay hidden behind cabinet doors.</p>
${photo("kitchen-shelves.png", "Open shelving creating a stylish display in a kitchen", 576, 1024)}

<h2>Kitchen: Or Upgrade the Island Lighting</h2>
<p>A set of statement pendants over the island does more for the kitchen's overall mood than almost any other single fixture change.</p>
<p>This is a relatively contained project &mdash; a few fixtures, not a full rewiring job &mdash; with an outsized visual payoff.</p>
${photo("kitchen-pendant.png", "Luxe pendant lighting glowing over a kitchen island", 576, 1024)}

<h2>Dining Room: Build a Gallery Wall</h2>
<p>A gallery wall gives the dining room a story to tell, turning a functional space into one with real personality.</p>
<p>A consistent frame style across the collection keeps a mix of art and photos feeling curated rather than cluttered.</p>
${photo("dining-gallery-wall.png", "Gallery wall telling a personal story in a dining room", 576, 1024)}

<h2>Dining Room: Or Just Fix the Centerpiece</h2>
<p>An empty or forgettable dining table centerpiece is an easy, low-cost fix with real visual payoff.</p>
<p>A seasonal arrangement, a simple bowl of fruit, or a cluster of candles all do more work than an empty table ever will.</p>
${photo("dining-centerpiece.png", "Seasonal centerpiece elevating a dining table's presentation", 576, 1024)}

<h2>Bedroom: Layer the Bedding</h2>
<p>Layered bedding &mdash; a duvet, a throw, a few well-chosen pillows &mdash; brings a hotel-like feel into the bedroom for a relatively small investment.</p>
<p>This is one of the easiest high-impact changes on this entire list, since it requires no furniture or structural change at all.</p>
${photo("bedroom-bedding.png", "Layered bedding creating a hotel-like feel in the bedroom", 576, 1024)}

<h2>Bedroom: Or Upgrade the Nightstands</h2>
<p>A nightstand that's actually styled &mdash; a lamp, a small stack of books, one considered object &mdash; does more than a bare surface ever will.</p>
<p>This is a small, contained project that still changes the whole room's sense of being finished.</p>
${photo("bedroom-nightstands.png", "Styled nightstand bringing a finished look to the bedroom", 576, 1024)}

<h2>Bathroom: Make It Feel Like a Spa</h2>
<p>Fluffy towels, a simple tray of bath products, and a bit of greenery go a long way toward a spa-like feel, with zero remodeling required.</p>
<p>This works in any bathroom, regardless of size or existing fixtures &mdash; it's purely a styling change.</p>
${photo("bathroom-spa.png", "Spa-like bathroom styling achieved without a full remodel", 576, 1024)}

<h2>Bathroom: Or Add a Statement Mirror</h2>
<p>Swapping a builder-grade mirror for a statement piece changes the whole room's character more than almost any other single bathroom update.</p>
<p>A round or arched shape softens a bathroom full of straight lines and hard surfaces.</p>
${photo("bathroom-mirror.png", "Statement mirror transforming a modern bathroom's character", 576, 1024)}

<h2>Home Office: Build a Desk Setup That Fits</h2>
<p>A desk setup that actually reflects personal taste &mdash; not just whatever came with the furniture &mdash; makes the whole room feel more motivating to work in.</p>
<p>This is worth revisiting even in an already-furnished office, since the setup matters more than the furniture itself.</p>
${photo("office-desk.png", "Personalized desk setup fitting a home office's character", 576, 1024)}

<h2>Home Office: Or Add Decor That Actually Motivates</h2>
<p>A vision board, a meaningful quote, or a piece of art tied to an actual goal does more for daily motivation than generic office decor.</p>
<p>This works best when it's specific to the person using the space, not a one-size-fits-all office poster.</p>
${photo("office-motivation.png", "Motivational decor supporting focus in a home office corner", 576, 1024)}

<h2>Entryway: Add a Wood Console Table</h2>
<p>A simple wood table at the entrance gives guests somewhere to land and gives the whole space a sense of welcome it might be missing.</p>
<p>This also solves a practical problem &mdash; somewhere for keys, mail and bags to go &mdash; alongside the style upgrade.</p>
${photo("entryway-table.png", "Welcoming wood console table anchoring a stylish entryway", 576, 1024)}

<h2>Entryway: Or Add Considered Wall Decor</h2>
<p>A single intentional piece &mdash; a mirror, a woven hanging, a piece of art &mdash; keeps the entryway from feeling random or unfinished.</p>
<p>This works well paired with the console table idea above, or completely on its own in a smaller entryway.</p>
${photo("entryway-wall-decor.png", "Thoughtful wall decor giving an entryway real character", 576, 1024)}

<h2>Kids' Room: Try Wall Decals</h2>
<p>Wall decals bring color and personality into a kids' room without the commitment of paint, and they're easy to swap out as taste changes over the years.</p>
<p>This is one of the most flexible ideas on the entire list &mdash; low-cost, low-commitment, and genuinely kid-approved.</p>
${photo("kids-room-decals.png", "Playful wall decals growing with a child's changing tastes", 576, 1024)}

<h2>Final Thoughts</h2>
<p>None of these 15 ideas require tackling the whole house at once.</p>
<p>Pick the room that bothers the most right now, choose one idea from this list, and let the rest follow over time.</p>
<p>A home refreshed one room at a time still adds up to a completely different-feeling house.</p>
`;

module.exports = { body };
