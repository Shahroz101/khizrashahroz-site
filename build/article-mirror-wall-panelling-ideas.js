// Body content for "15 Mirror Wall Panelling Ideas to Instantly
// Elevate Any Room". Photos are real Unsplash photography carried over
// from the source article; the source itself never rendered a visible
// photo credit for any of them (just the raw Unsplash filenames), so
// they stay uncredited here too, matching the source's own treatment.
// Only 9 of 15 ideas had a photo in the source to begin with, and two
// of those nine were genuinely mismatched: the "Chevron-Pattern" photo
// actually showed an oval bathroom mirror (reassigned to "Mirrored
// Bathroom Panelling," which had no photo of its own), and the
// "Classic Floor-to-Ceiling" photo shows a single leaning floor mirror
// against a textured stone wall rather than a mirrored wall — the text
// was rewritten to describe that honestly instead of claiming a literal
// floor-to-ceiling mirror wall. The remaining 6 ideas (Grid-Style,
// Chevron-Pattern, Closet Wall, Etched Designs, Fireplace Surround,
// Wall Niche) have no photo.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "mirror-wall-panelling-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "A Statement Mirror Against a Textured Wall",
    paras: [
      "Pairing one large mirror with a dramatic textured wall behind it does a lot of what a full mirrored wall would, without covering every inch in glass.",
      "A tall leaning mirror set against a chunky stone or tile accent wall reflects the texture back into the room, doubling the visual impact of the wall itself.",
      "It works especially well in a bedroom or narrow hallway where natural light is limited &mdash; the single mirror bounces what light there is without overwhelming the space.",
    ],
    photo: photo("floor-to-ceiling.jpg", "Large leaning floor mirror set against a dramatic textured white stone accent wall in a bedroom", 1024, 768),
  },
  {
    n: "02",
    title: "Grid-Style Mirror Panelling",
    paras: [
      "Instead of one large reflective surface, grid-style panelling breaks the mirror into sections with clean, windowpane-style lines running across the wall.",
      "The structure works especially well in a dining room or home office, where the segmented look reads as considered rather than like mirrors were added just to make the room feel bigger.",
      "It keeps reflections controlled instead of turning into one continuous sheet of glass, which suits modern, industrial or even farmhouse interiors equally well.",
    ],
  },
  {
    n: "03",
    title: "Antique Mirror With a Smoky Finish",
    paras: [
      "An antique mirror trades a perfectly clean reflection for a mottled, smoky finish that adds real character instead.",
      "It suits a bedroom or a cozy reading corner especially well, feeling softer and less clinical than a flawless modern mirror ever could.",
      "The texture also hides fingerprints and smudges better than glossy glass, which is a quiet practical bonus on top of the vintage charm.",
    ],
    photo: photo("antique-mirror.jpg", "Ornate carved wood-framed antique mirror with a softly mottled finish on a vintage gallery wall", 1024, 1009),
  },
  {
    n: "04",
    title: "Mirror Framed in Warm Wood",
    paras: [
      "Breaking up an all-mirror look with a warm wood frame balances the shine with something grounded and tactile.",
      "It suits a living room or bedroom in earthy tones especially well, softening a material that can otherwise read as cold.",
      "Anyone who finds mirrors feel a little clinical on their own tends to respond best to this pairing &mdash; cozy without losing any of the elegance.",
    ],
    photo: photo("wood-frames.jpg", "Tall arched mirror with a warm wood-toned frame leaning in a room with wooden furniture", 768, 1024),
  },
  {
    n: "05",
    title: "Bevelled Edges for Quiet Glamour",
    paras: [
      "A bevelled mirror catches and scatters light differently than a flat-edged one, adding a subtle sparkle without demanding attention.",
      "It works like jewelry for a room &mdash; understated most of the time, until the light hits it just right and it suddenly stands out.",
      "An ornate scalloped or carved frame paired with a bevelled edge suits an entryway or a spot near a window where natural light moves throughout the day.",
    ],
    photo: photo("bevelled-edges.jpg", "Ornate scalloped-frame mirror with bevelled glass edges catching light near a window", 685, 1024),
  },
  {
    n: "06",
    title: "Chevron-Pattern Mirror Panelling",
    paras: [
      "For anyone who finds plain mirror panels too predictable, a chevron layout shakes things up with mirrored strips cut at an angle and arranged in a zig-zag.",
      "It suits a living room or entryway where the goal is for guests to actually notice the wall, rather than blending quietly into the background.",
      "Used as a single feature wall rather than covering an entire room, it adds movement and depth without becoming distracting.",
    ],
  },
  {
    n: "07",
    title: "Gold-Trimmed Mirror Panelling",
    paras: [
      "Thin strips of gold running between mirrored sections give a wall an Art Deco quality without going fully gold.",
      "An ornate gold-carved frame around a single statement mirror delivers the same effect on a smaller scale &mdash; glamorous without tipping into excessive.",
      "It pairs especially well with warm lighting and jewel tones, and works beautifully in a dining room, primary bedroom, or dressing area.",
    ],
    photo: photo("gold-trims.jpg", "Ornate gold-carved arched mirror reflecting a bedroom with a navy upholstered headboard", 742, 1024),
  },
  {
    n: "08",
    title: "Mirrored Closet Wall Panelling",
    paras: [
      "Covering closet doors with mirrored panels solves two problems at once &mdash; no separate full-length mirror needed, and the bedroom instantly reads as bigger and brighter.",
      "It's a strong fix for a bedroom that feels a little tight, since the mirrored surface reflects whatever light is already in the room.",
      "It also makes getting dressed considerably easier, with no more walking back and forth to a mirror in another room for a final check.",
    ],
  },
  {
    n: "09",
    title: "Backlit Mirror for a Soft Glow",
    paras: [
      "Light built directly around or behind a mirror creates a soft glow that reads as considerably more luxurious than a plain mirror lit from elsewhere in the room.",
      "A mirror ringed with warm bulbs, like a classic vanity setup, delivers that same glow in a more approachable, ready-made form.",
      "It works especially well in a bedroom or bathroom, adding ambient light even when the room's main fixtures are switched off.",
    ],
    photo: photo("backlighting.jpg", "Full-length mirror ringed with warm vanity bulbs leaning in the corner of a paneled room", 1024, 1024),
  },
  {
    n: "10",
    title: "Etched Mirror Panels",
    paras: [
      "An etched mirror carries a decorative pattern cut directly into the glass &mdash; florals, geometrics, or something fully custom.",
      "It works as art and function at once, which makes it a strong choice for a statement wall in a living room or bedroom.",
      "A monogram or personal detail etched into the design turns it from simply decorative into something that feels genuinely specific to the home.",
    ],
  },
  {
    n: "11",
    title: "Diamond and Geometric Mirror Panelling",
    paras: [
      "Arranging mirror segments diagonally instead of in a standard grid gives a wall a faceted, almost jewel-like quality.",
      "A geometric mirror with gold lines radiating across the glass in angular segments captures the same effect in a single piece.",
      "It pairs beautifully with a chandelier or pendant light nearby, since the facets catch and scatter that light in a way a flat mirror never could.",
    ],
    photo: photo("diamond-pattern.jpg", "Geometric faceted mirror with gold line details reflecting a styled display shelf", 683, 1024),
  },
  {
    n: "12",
    title: "Mirrored Fireplace Surround",
    paras: [
      "Framing a fireplace in mirror panelling turns the whole area into even more of a focal point than the fire alone already is.",
      "The firelight reflects across the room, doubling the cozy effect without adding any extra light fixtures.",
      "Keeping the framing sleek is what keeps this from looking tacky &mdash; done with restraint, it reads as a genuine designer feature.",
    ],
  },
  {
    n: "13",
    title: "Mirrored Wall Niche Panelling",
    paras: [
      "A wall niche that usually collects dust or random clutter becomes a mini display gallery once it's backed with mirror panels.",
      "The mirrored backing gives depth and extra presence to whatever gets displayed inside &mdash; plants, vases, or a small piece of art.",
      "It also reflects light into what's typically a dim corner, making the whole nook feel considerably more finished and intentional.",
    ],
  },
  {
    n: "14",
    title: "Mirrored Bathroom Panelling",
    paras: [
      "Bathrooms and mirrors already go hand in hand, and taking that further than a single mirror over the sink elevates the whole room.",
      "An ornate scalloped-frame mirror paired with brass fixtures shows how far a single well-chosen statement mirror can carry a small bathroom on its own.",
      "In a compact bathroom especially, the added reflection opens up the space and gives it a noticeably more boutique, hotel-like feel.",
    ],
    photo: photo("bathroom-mirror.jpg", "Oval scalloped-frame mirror above a bathroom vanity with brass sconces on either side", 683, 1024),
  },
  {
    n: "15",
    title: "Mixed-Material Mirror Panelling",
    paras: [
      "Combining mirror with other materials &mdash; carved wood, aged metal, marble &mdash; gives a wall the reflective benefits of mirror without committing to an all-glass look.",
      "An ornately carved frame mixing gold and dark tones, like the kind found in antique mirror designs, shows how texture and reflection can share one piece.",
      "It's often the option people end up loving most, since it feels less intimidating than a full mirrored wall while still delivering real visual interest.",
    ],
    photo: photo("mixed-material.jpg", "Ornate antique mirror frame mixing gold and dark carved details with a softly aged mirror finish", 683, 1024),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || ""}`;
}

const body = `
<p>Mirrors do more than reflect a face on the way out the door. Used well, they transform a space &mdash; adding depth, bouncing light around, and making a room look considerably more expensive than it actually was to put together.</p>
<p>Mirror wall panelling in particular does two jobs at once: it's decorative, but it's also genuinely functional, tricking the eye into reading a room as bigger and brighter than its actual square footage. The shift from a plain wall to a mirrored one can be dramatic enough that a room goes from merely cozy to something that reads as a different space entirely.</p>
${photo("hero.jpg", "Elegant mirror styled as a dramatic wall feature in a well-lit interior", 1600, 1067)}

<h2>15 Mirror Wall Panelling Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>A Few Things Worth Knowing First</h2>
<p>Balance matters more than anything else on this list. Too many mirrored surfaces can tip a room from elegant into something closer to a funhouse, so picking one or two walls rather than every surface keeps it feeling intentional. Placement matters just as much &mdash; a mirror angled to catch natural light or highlight a nice feature does more work than one that just reflects clutter back into the room.</p>
<p>If a full mirrored wall feels like too much commitment, mixing mirror with wood, marble or metal trim gets most of the same effect with a softer landing. And it's worth remembering that mirrors show fingerprints and dust quickly &mdash; an antique or bevelled finish tends to hide that better than a flawless, glossy one.</p>

<h2>Final Thoughts</h2>
<p>Mirror wall panelling is about more than reflection. It's a genuine transformation tool &mdash; whether the goal is drama, elegance, or just a little extra light in a room that's never quite had enough.</p>
<p>None of it requires a full-scale renovation or an unlimited budget. Even a single well-placed mirror, chosen with the right frame and finish, can shift how an entire room feels.</p>
`;

module.exports = { body };
