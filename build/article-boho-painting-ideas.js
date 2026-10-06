// Body content for "10 Easy Boho Painting Ideas Anyone Can Try at Home".
// Photos carried over from the source article — each one already matched
// its idea cleanly, so no reassignment was needed here, just fresh captions
// and reordering.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "boho-painting-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Earthy Abstract Arches",
    paras: [
      "This is the fastest route to something that looks like it came from a gallery instead of your living room floor.",
      "Pick three or four earthy tones &mdash; terracotta, olive, mustard, a dusty pink if you're feeling it &mdash; and paint loose arches, blobs, and curved shapes freehand. The less you plan it, the better it tends to look.",
      "Hang it above a sofa or lean it against the wall on a shelf. Either way, it reads like something you'd find in a much more expensive catalog than you'd expect.",
    ],
    photo: photo("abstract-shapes.png", "Textured plaster wall mural of layered terracotta, olive and mustard arch shapes with a macrame hanging in front", 576, 1024),
  },
  {
    n: "02",
    title: "A Single-Line Portrait",
    paras: [
      "Minimalist line art has a way of looking intentional even when you genuinely have no idea what you're drawing until it's done.",
      "One continuous line, a face, maybe a botanical sprig tangled into the hair &mdash; all you really need is a neutral wall or canvas and a steady-ish hand with a paint pen.",
      "It's an especially good fit for a Scandinavian-leaning or minimalist bedroom, where you want personality without adding visual noise.",
    ],
    photo: photo("minimalist-line-art.png", "Large single-line mural of overlapping faces and botanical leaves in black ink on a warm beige bedroom wall", 576, 1024),
  },
  {
    n: "03",
    title: "Sun, Moon and a Little Cosmic Drama",
    paras: [
      "Celestial motifs are a boho staple for a reason &mdash; a gold sun and a soft crescent moon on a canvas instantly reads as dreamy without trying very hard.",
      "Lean into navy, gold, dusty lilac, or a soft marbled background like the one shown here. It works especially well in a bedroom, where the whole point is winding down.",
      "Add a string of fairy lights nearby and the effect practically does itself.",
    ],
    photo: photo("celestial.png", "Framed canvas painting of a gold sun and lavender crescent moon on a marbled orange and gray background above a dresser with crystal clusters", 576, 1024),
  },
  {
    n: "04",
    title: "A Mandala, If You Have the Patience",
    paras: [
      "This one takes longer than the rest, but it's worth the extra sitting. Mandalas are symmetrical, meditative to paint, and genuinely mesmerizing once they're finished.",
      "Keep it small and contained on a canvas, or go big and treat an entire wall or alcove as your canvas the way this one does.",
      "Don't aim for perfect symmetry on your first attempt. Boho was never about precision &mdash; the slightly imperfect version usually looks more alive than the flawless one would have.",
    ],
    photo: photo("mandala.png", "Large vibrant teal, coral and gold mandala mural painted in an arched alcove above rattan furniture and a round patterned rug", 576, 1024),
  },
  {
    n: "05",
    title: "Oversized Botanical Watercolors",
    paras: [
      "If florals are more your speed, go big rather than delicate. Think exaggerated leaves and abstract blooms rather than tight, precise botanical illustration.",
      "Muted sage and soft coral keep it calm; deeper jungle greens push it more dramatic. Both directions work.",
      "A floor-to-ceiling version like this one turns an entire wall into the room's focal point, but the same idea scales down nicely as a few smaller framed pieces over a reading nook too.",
    ],
    photo: photo("botanical.png", "Oversized watercolor-style mural of layered green tropical leaves and pale botanical blooms covering a living room wall behind a rattan bench", 576, 1024),
  },
  {
    n: "06",
    title: "Bold Geometric Pattern",
    paras: [
      "For something with more visual punch, geometric tribal-inspired patterns deliver instantly. Think sharp zigzags and diamonds in black, rust, and cream layered on a dark base.",
      "This works especially well in a hallway or entryway &mdash; the kind of transitional space that benefits from one bold, grounding moment rather than a dozen small decisions.",
      "These patterns usually draw on real cultural traditions, so it's worth spending a little time learning where the motifs come from before you paint them. Understanding the symbolism makes the finished piece feel more considered, not just decorative.",
    ],
    photo: photo("tribal-patterns.png", "Bold black, white and rust geometric zigzag and diamond pattern painted across a large hallway wall", 576, 1024),
  },
  {
    n: "07",
    title: "Soft Arches in a Row",
    paras: [
      "Forget the primary-color rainbow from grade school. The boho version is muted arches in clay, blush, and sand, layered together in a simple repeating composition.",
      "Painter's tape makes this one surprisingly approachable &mdash; mask off your arch shapes, fill with two or three colors, and you've got a piece that looks far more complicated than it was to make.",
      "It reads as cheerful without being childish, which makes it a genuinely good fit for a nursery, playroom, or guest room that needs a little lift.",
    ],
    photo: photo("arches.png", "Soft terracotta, rose and sage arch shapes painted across a playroom wall behind a canvas teepee and floor cushions", 576, 1024),
  },
  {
    n: "08",
    title: "A Painted Dreamcatcher",
    paras: [
      "Dreamcatchers are about as iconic as boho motifs get, and painting your own version is more approachable than it looks &mdash; it's really just circles, flowing feathers, and a scattering of beads.",
      "Keep the palette soft: taupe, ivory, dusty blue, a little gold. The muted tones are what make it feel calming instead of costume-y.",
      "This one belongs over a bed or in a reading corner. Add a few fairy lights woven through it, and it becomes the kind of piece that makes a whole room feel a little more peaceful.",
    ],
    photo: photo("dreamcatcher.png", "Large painted dreamcatcher artwork with teal geometric webbing and layered feathers framed by string lights above a bed with patterned pillows", 576, 1024),
  },
  {
    n: "09",
    title: "A Desert Scene for Instant Warmth",
    paras: [
      "Boho and desert landscapes were made for each other. A few cacti, rolling dunes, and a glowing sunset in sandy tones and burnt orange go a long way.",
      "You don't need to render it with total precision &mdash; a handful of confident strokes reads as a desert scene far more easily than you'd expect.",
      "It's a great fit for a hallway, reading nook, or any spot that could use a little warmth without committing to a loud color on the walls themselves.",
    ],
    photo: photo("desert-landscape.png", "Large canvas painting of a desert sunset with layered sand dunes and tall cacti in warm orange and pink tones above a cream sofa", 576, 1024),
  },
  {
    n: "10",
    title: "A Quote Worth Looking at Daily",
    paras: [
      "Sometimes what a wall needs isn't a scene, it's a sentence. Pick a quote, mantra, or lyric that actually means something to you and build the art around it.",
      "Pair the lettering with soft florals, feathers, or a loose geometric frame, and keep the palette calm so the words stay the focus rather than competing with the illustration around them.",
      "Hang it near an entryway or workspace, somewhere you'll actually glance at it on your way past &mdash; that's the whole point of a quote piece, after all.",
    ],
    photo: photo("quote-art.png", "Large hand-lettered canvas reading Embrace the journey for it is adventure that defines us surrounded by painted feathers and florals, flanked by hanging plants", 576, 1024),
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
<p>Blank walls have a way of just sitting there, waiting. If you've got even a little bit of an itch to pick up a paintbrush, boho painting is the most forgiving place to start &mdash; it's built around expression over precision, which means there's genuinely no wrong way to do most of these.</p>
<p>Earthy tones, dreamy motifs, a bit of tribal influence, a lot of imperfect freehand energy &mdash; that's the whole aesthetic in a sentence. You don't need an art degree or even particularly steady hands.</p>
<p>Here are ten approachable ways to bring that energy onto your own walls, whether you're starting completely from scratch or just looking for the next weekend project.</p>
${photo("hero.jpg", "Black line-art mural of faces and botanical leaves painted across a bedroom wall behind a neatly made bed", 1280, 720)}

<h2>10 Boho Painting Ideas to Try</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>If your walls have been feeling a little flat and you're craving something that actually looks like you, boho painting is about as accessible as a creative project gets &mdash; cheap, forgiving, and genuinely fun even if the last time you picked up a paintbrush was a school art class.</p>
<p>Grab a canvas, or an old board, or honestly just a section of wall you don't mind committing to. Pick whichever palette feels right and start. Abstract, botanical, celestial &mdash; it really doesn't matter which direction you go.</p>
<p>And if it doesn't turn out how you pictured it? Paint over it and try again. That's basically the entire spirit of boho art.</p>
`;

module.exports = { body };
