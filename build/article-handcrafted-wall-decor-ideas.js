// Body content for "17 Handcrafted Wall Decor Ideas Worth Making
// Yourself". The source hosted all 16 idea photos externally on
// ideogram.ai rather than its own uploads directory, and every one of
// those links has since expired (confirmed 404 on each). Only the hero
// photo, hosted on dwellingdream.com's own uploads, still works — a
// genuine source limitation, not a curation choice, so the article runs
// text-only beyond the hero.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "handcrafted-wall-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Macramé Wall Hangings",
    paras: [
      "Macramé brings genuine texture and a relaxed, boho quality to a wall in a way few other crafts manage.",
      "Basic knots, repeated and layered, build intricate patterns on their own, and a neutral tone like beige or gray keeps the finished piece versatile.",
      "Hung above a bed or a sofa, a macramé piece sets a laid-back, artistic tone for the whole room without demanding much else around it.",
    ],
  },
  {
    n: "02",
    title: "Hand-Painted Canvas Art",
    paras: [
      "A hand-painted canvas is the most direct route to a wall piece that's genuinely one of a kind.",
      "Abstract splashes, a peaceful scene, or bold geometric shapes all work &mdash; whatever direction fits the room becomes the obvious focal point once it's hung.",
      "There's no need for formal training here. The appeal of a handmade piece comes from its specificity, not its polish.",
    ],
  },
  {
    n: "03",
    title: "Wood Slice Wall Art",
    paras: [
      "Wood slice art brings the outdoors directly onto a wall, using the material's own natural grain as the main visual interest.",
      "Arranging slices into a mandala or sunburst pattern highlights the organic texture already present in the wood itself.",
      "The earthy tones and natural imperfections add real warmth and a rustic quality that manufactured decor rarely replicates.",
    ],
  },
  {
    n: "04",
    title: "Woven Tapestries",
    paras: [
      "A woven tapestry adds color and real adaptability to a wall, whether it's a classic pattern or something made entirely from scratch on a loom.",
      "The fabric itself brings richness and a sense of coziness that flatter, more rigid wall art doesn't quite achieve.",
      "A tapestry also softens a room acoustically in a small way, which is a quiet bonus beyond the visual impact.",
    ],
  },
  {
    n: "05",
    title: "Pressed Flower Frames",
    paras: [
      "Pressed flower art captures something genuinely delicate and turns it into a lasting piece of decor.",
      "Arranging pressed blossoms and leaves inside a glass frame gives the finished piece a refined, almost scientific-journal quality.",
      "It's an especially strong fit for anyone who genuinely loves the outdoors and wants that appreciation reflected somewhere in the home.",
    ],
  },
  {
    n: "06",
    title: "Hand-Embroidered Hoops",
    paras: [
      "Embroidery hoops display beautifully on a wall, whether the design inside is a detailed floral pattern or a short, meaningful phrase.",
      "The handmade quality comes through immediately, adding a classic, slightly nostalgic touch to the room around it.",
      "Their round frames work equally well in a newer home or an older one, which makes them one of the more flexible crafts on this list.",
    ],
  },
  {
    n: "07",
    title: "Clay Wall Sculptures",
    paras: [
      "Air-dry clay, shaped by hand or with simple molds, builds genuine three-dimensional pieces that dry naturally without needing a kiln.",
      "Geometric forms, leaf shapes, or fully abstract silhouettes all work well as a starting point.",
      "Painted once dry, the finished sculpture adds a distinctly modern, artistic edge that flat wall art can't quite replicate.",
    ],
  },
  {
    n: "08",
    title: "DIY String Art",
    paras: [
      "String art is approachable and still manages to look genuinely striking once it's finished.",
      "A simple pattern of nails, wrapped with bright string, can form a mountain range, an animal silhouette, or anything else that fits the room's style.",
      "It's easy to update later, too &mdash; restringing a finished piece in a new color refreshes it without starting completely over.",
    ],
  },
  {
    n: "09",
    title: "Beaded Wall Hangings",
    paras: [
      "Beads, sorted into either an intricate pattern or a loose fringe design, bring real shimmer and color onto a wall.",
      "The way beads catch and scatter light gives a room a subtle sense of brilliance that flat decor doesn't manage.",
      "Bold color combinations here read as genuinely vibrant rather than overwhelming, especially in a room that otherwise stays fairly neutral.",
    ],
  },
  {
    n: "10",
    title: "Handmade Paper Quilling Art",
    paras: [
      "Paper quilling turns small rolled and cut strips of paper into surprisingly intricate designs.",
      "Framed once finished, a quilled piece reads as genuinely artistic and considerably more impressive than the simple materials would suggest.",
      "It's a strong option for anyone drawn to fine detail work and a result that consistently draws a second look.",
    ],
  },
  {
    n: "11",
    title: "Fabric Wall Art",
    paras: [
      "Stretching a bold or patterned fabric over a simple wooden frame creates an instant, striking focal point for very little cost.",
      "A vintage linen or a bold modern print both work well, depending on the direction the rest of the room is already leaning.",
      "It's one of the fastest handmade wall art projects to finish, with most of the visual impact coming from the fabric choice itself.",
    ],
  },
  {
    n: "12",
    title: "Driftwood Wall Sculptures",
    paras: [
      "Driftwood, arranged into an abstract shape, a heart, or a star, brings a naturally beachy quality to a wall without any extra styling needed.",
      "It suits a seaside or rustic-leaning room especially well, where the material itself already matches the broader aesthetic.",
      "The irregular, weathered texture of real driftwood is what makes each finished piece feel genuinely one of a kind.",
    ],
  },
  {
    n: "13",
    title: "Hand-Stenciled Wall Panels",
    paras: [
      "Stencils and paint make it simple to build a repeating pattern directly onto a canvas or wooden panel.",
      "It's one of the more approachable ways to add real artistic detail to a wall without needing freehand painting skill.",
      "A single stenciled panel can anchor a whole gallery wall, or work well entirely on its own as a standalone piece.",
    ],
  },
  {
    n: "14",
    title: "Ceramic Wall Plates",
    paras: [
      "Hand-painted or textured ceramic plates double easily as wall art, repurposing something functional into something decorative.",
      "Grouped together on a gallery wall, a set of plates creates an arrangement that feels collected and intentional rather than matched from a single set.",
      "It's an especially good option for anyone who already has a few mismatched ceramic pieces sitting unused in a cabinet.",
    ],
  },
  {
    n: "15",
    title: "DIY Leather Wall Art",
    paras: [
      "Leather, cut and shaped into leaves, feathers, or clean geometric forms, brings a modern, tactile quality to a wall that paper and fabric can't quite match.",
      "The material itself photographs beautifully, with light catching its texture differently depending on the angle.",
      "It adds a note of real refinement to a room, especially paired with simpler, more neutral decor around it.",
    ],
  },
  {
    n: "16",
    title: "Handmade Mirror Mosaics",
    paras: [
      "Broken tiles, seashells, or small pieces of glass, arranged around a simple mirror, build a mosaic frame that's genuinely one of a kind.",
      "The mosaic pattern adds a playful, whimsical quality, while the mirror itself still does the practical work of reflecting light around the room.",
      "It's a strong weekend project for anyone who already has a stash of broken tile or beach-collected shells looking for a use.",
    ],
  },
  {
    n: "17",
    title: "Painted Rock Art",
    paras: [
      "Smooth stones, hand-painted with detailed patterns, turn into a genuinely original piece once arranged together.",
      "Mounted or simply grouped on a wooden board, the collection reads as intentional rather than like scattered craft supplies.",
      "It's one of the most low-cost projects on this entire list, using materials that are often already sitting in a backyard or at a nearby trail.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}`;
}

const body = `
<p>Store-bought wall art has its place, but a handmade piece brings something that mass production never quite replicates &mdash; genuine texture, an unrepeatable pattern, and a story behind how it actually got made.</p>
<p>None of these require formal art training. What they require is a willingness to try, and a wall that's currently a little too empty for its own good.</p>
${photo("hero.jpg", "Dramatic handcrafted sculptural wall art installation behind a desk", 1152, 768)}

<h2>17 Handcrafted Wall Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Handcrafted wall decor adds something no catalog purchase ever quite manages &mdash; genuine personality, visible effort, and a piece that couldn't be bought the same way twice.</p>
<p>Pick whichever craft actually fits the materials already on hand, or the free afternoon available to start one. A wall that's been waiting for the right piece is usually worth the wait for something made rather than simply bought.</p>
`;

module.exports = { body };
