// Body content for "18 Cute Pumpkin Carving Ideas Worth Trying". Photos
// carried over from the source article. The source included a
// fabricated quote attributed to "pumpkin expert Thomas Andres via
// Smithsonian Magazine" — cut entirely, not part of this site's voice.
// 11 of 18 ideas have a photo; the other 7 have none in the source.
// Condensed a padded 3-part intro down to 1.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "pumpkin-carving-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "pumpkin-carving-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Cute Cat Pumpkin",
    paras: [
      "A simple cat face is endlessly adaptable, as easy to simplify or dress up as the carver wants it to be.",
      "Two pointed ears near the top, large rounded eyes beneath them, a tiny triangular nose, and a few whisker lines cover the whole design.",
      "Oversized eyes are the trick that makes the expression feel genuinely sweeter and more playful than a standard carved face.",
    ],
    photo: pinPhoto("cute-cat.jpg", "Cute cat face carved into a pumpkin with large rounded eyes", 720, 720, "https://www.pinterest.com/pin/498984833732240992/", "Cute Cat Pumpkin"),
  },
  {
    n: "02",
    title: "Smiling Ghost Pumpkin",
    paras: [
      "Ghosts don't have to look terrifying. Two large oval eyes and a small rounded mouth, kept simple and evenly spaced, carry this design on their own.",
      "The expression matters more than the detail here &mdash; a slightly curved mouth shifts the whole pumpkin from spooky to genuinely cheerful.",
      "A white or pale pumpkin pushes the ghost theme even further, and the soft color paired with glowing eyes looks surprisingly charming after dark.",
    ],
    photo: pinPhoto("smiling-ghost.jpg", "Smiling ghost face carved into a pale pumpkin", 681, 1024, "https://www.pinterest.com/pin/1127729562971824730/", "Smiling Ghost Pumpkin"),
  },
  {
    n: "03",
    title: "Heart-Shaped Eyes",
    paras: [
      "For something cute without an hour of carving involved, heart-shaped eyes deliver fast.",
      "Two small hearts on the front of the pumpkin, with a tiny smiling mouth underneath, is the entire design &mdash; symmetrical or deliberately uneven for a handmade look.",
      "It's an especially strong fit for couples, families, or anyone chasing something softer than a traditional Halloween face. It also happens to make a ridiculously cute porch photo.",
    ],
    photo: pinPhoto("heart-eyes.jpg", "Pumpkin carved with heart-shaped eyes and a smiling mouth", 683, 1024, "https://www.pinterest.com/pin/51861833204045959/", "Heart-Shaped Eyes Pumpkin"),
  },
  {
    n: "04",
    title: "Adorable Pumpkin Bunny",
    paras: [
      "A bunny design plays with the actual shape of the pumpkin rather than just the face carved into it.",
      "A taller pumpkin, two long ears carved near the top, large rounded eyes, a small nose and a tiny mouth build the look.",
      "The ears can stay attached to the pumpkin itself or be carved fully around their outline so they stand out once the pumpkin is lit from inside &mdash; rounded rather than sharp features keep the whole thing feeling soft.",
    ],
    photo: pinPhoto("pumpkin-bunny.jpg", "Bunny face carved into a pumpkin with tall ears", 768, 1024, "https://www.pinterest.com/pin/22306960645420999/", "Adorable Pumpkin Bunny"),
  },
  {
    n: "05",
    title: "Sweet Little Bear Pumpkin",
    paras: [
      "A bear face is another strong option for anyone chasing cozy over Halloween-scary.",
      "Two rounded ears, large circular eyes, and a small muzzle carry the design, with a tiny heart-shaped nose adding extra personality.",
      "A wide pumpkin works especially well here, giving enough surface to space the features naturally &mdash; a small scarf wrapped around the pumpkin adds a cozy fall touch without any extra carving.",
    ],
  },
  {
    n: "06",
    title: "Cute Owl Pumpkin",
    paras: [
      "An owl design looks genuinely impressive once the light goes on inside.",
      "Two large circular eyes surrounded by simple feather-inspired cuts, with a small triangular beak between them, form the whole face.",
      "Every single feather doesn't need carving &mdash; simple shapes actually create a stronger look at night, since the light makes the main features pop more clearly.",
    ],
    photo: pinPhoto("owl-pumpkin.jpg", "Owl face carved into a pumpkin with large circular eyes", 609, 1024, "https://www.pinterest.com/pin/53902526786698200/", "Cute Owl Pumpkin"),
  },
  {
    n: "07",
    title: "Happy Pumpkin Face",
    paras: [
      "Sometimes the classic approach still wins. Instead of a traditional scary jack-o'-lantern, an exaggerated happy face with oversized eyes and a wide smile reads as cartoon character rather than haunted house.",
      "This design works especially well when carving with kids, since the shapes can stay large and forgiving.",
      "No stencil is strictly required either, as long as sketching a few basic shapes feels manageable beforehand.",
    ],
    photo: pinPhoto("happy-face.jpg", "Happy exaggerated face carved into a pumpkin with oversized eyes and a wide smile", 736, 981, "https://www.pinterest.com/pin/418060777927031614/", "Happy Pumpkin Face"),
  },
  {
    n: "08",
    title: "Little Puppy Pumpkin",
    paras: [
      "For anyone who's a dog person first, skip the scary face entirely and turn the pumpkin into a puppy instead.",
      "Floppy ears on either side, large round eyes, a little nose, and a happy mouth form the base &mdash; the ear shape can shift depending on which breed feels right to suggest.",
      "A tiny tongue sticking out adds extra playfulness, and the design works especially well for a family with an actual dog to loosely match the carving to.",
    ],
  },
  {
    n: "09",
    title: "Starry Night Pumpkin",
    paras: [
      "Not every cute pumpkin needs a face at all. For something more elegant, small stars carved across the surface build a miniature night sky.",
      "A few moons, dots and tiny shooting stars round out the pattern, and a deep orange pumpkin paired with a warm LED light makes the small cutouts glow like actual stars.",
      "The pattern can stay random or lean into a deliberate constellation arrangement &mdash; and since it skips a face entirely, it doesn't require the same symmetry a character design would.",
    ],
    photo: pinPhoto("starry-night.jpg", "Starry night pattern carved into a pumpkin, glowing from within", 683, 1024, "https://www.pinterest.com/pin/1101763496387341267/", "Starry Night Pumpkin"),
  },
  {
    n: "10",
    title: "Cute Fox Pumpkin",
    paras: [
      "For something a little more autumnal, a fox design leans directly into the pumpkin's existing warm orange color, which already does half the work.",
      "Two pointed ears, large almond-shaped eyes, a small triangular nose, and a gentle smile make up the face, with a few curved lines around the cheeks suggesting fluffy fur.",
      "It looks adorable in daylight and almost magical once a warm LED light goes inside &mdash; paired with dried leaves and a few mini pumpkins, it builds a full fall display without tipping into generic Halloween-aisle territory.",
    ],
    photo: pinPhoto("fox-pumpkin.jpg", "Cute fox face carved into an orange pumpkin", 768, 1024, "https://www.pinterest.com/pin/16255248650965549/", "Cute Fox Pumpkin"),
  },
  {
    n: "11",
    title: "Sleepy Moon Pumpkin",
    paras: [
      "A sleepy expression turns an otherwise ordinary pumpkin into one of the cuter options on this whole list.",
      "Two closed eyes with small curved lashes, paired with a tiny smiling mouth, form the base &mdash; a few stars carved around the face build a dreamy nighttime theme.",
      "A small crescent moon beside the face pushes the sweetness further, and the whole design feels playful rather than spooky, without announcing Halloween from three houses down.",
    ],
    photo: pinPhoto("sleepy-moon.jpg", "Sleepy face with closed eyes carved into a pumpkin with stars", 736, 981, "https://www.pinterest.com/pin/691443349080490560/", "Sleepy Moon Pumpkin"),
  },
  {
    n: "12",
    title: "Cute Mushroom Pumpkin",
    paras: [
      "A mushroom design brings a genuinely charming woodland feel, and a pumpkin's rounded surface gives plenty of room to play with the shape.",
      "A few rounded mushroom caps carved across the front, simple stems underneath, and tiny dots across the caps build the look.",
      "The design can stay fully abstract or get a tiny smiling face added to one mushroom &mdash; it also pairs beautifully with natural fall decor like acorns, pinecones, moss and dried leaves.",
    ],
    photo: pinPhoto("mushroom-pumpkin.jpg", "Mushroom shapes carved into a pumpkin surrounded by fall decor", 768, 1024, "https://www.pinterest.com/pin/7881368094930915/", "Cute Mushroom Pumpkin"),
  },
  {
    n: "13",
    title: "Smiling Bat Pumpkin",
    paras: [
      "Bats usually get a spooky reputation, but they turn adorable fast with the right approach.",
      "Two pointed ears and large circular eyes form the base, with tiny fangs and a small smile replacing the usual intimidating expression.",
      "The oversized eyes make the biggest difference here &mdash; they instantly give the whole pumpkin a cartoon-like personality that suits a cute Halloween display perfectly.",
    ],
  },
  {
    n: "14",
    title: "Cute Witch Pumpkin",
    paras: [
      "A witch design gives plenty of room for creativity without actually making the carving complicated.",
      "A simple face with large eyes, a small nose and a smiling mouth forms the base, with a few lines suggesting a witch hat carved around the top.",
      "Skipping the carved hat entirely and placing a miniature witch hat over the pumpkin instead is often the easier choice &mdash; it's also swappable later, which a fully carved hat never is.",
    ],
    photo: pinPhoto("witch-pumpkin.jpg", "Cute witch face carved into a pumpkin with a miniature hat on top", 717, 1024, "https://www.pinterest.com/pin/758715868523421533/", "Cute Witch Pumpkin"),
  },
  {
    n: "15",
    title: "Pumpkin With Flower Carving",
    paras: [
      "Halloween pumpkins don't actually need faces. For something softer, flowers carved across the surface deliver a genuinely different look.",
      "Simple petals and circular centers, rather than highly detailed floral patterns, keep the carving approachable.",
      "One large flower in the center, or several smaller blooms scattered around, both work &mdash; paired with mums, dried flowers and warm-toned foliage, the whole arrangement feels intentional rather than purely seasonal.",
    ],
  },
  {
    n: "16",
    title: "Adorable Strawberry Pumpkin",
    paras: [
      "This one feels genuinely unexpected, which is exactly what makes it fun.",
      "A smaller pumpkin works best, carved with a strawberry-inspired pattern of simple seeds and leaf shapes near the stem, with a tiny smiling face optional in the center.",
      "Grouped with a plain pumpkin and a tiny flower-carved one, it builds a genuinely playful little arrangement &mdash; not the move for a traditional spooky porch, but a strong one for something more whimsical.",
    ],
  },
  {
    n: "17",
    title: "Cute Ghost Cat Pumpkin",
    paras: [
      "Why choose between a cat and a ghost when both can combine into one design?",
      "A cat face with pointed ears forms the base, with a few flowing lines carved around the lower part of the pumpkin to suggest the cat floating like a ghost.",
      "Keeping the eyes large and expressive, with a tiny triangular nose and small mouth, finishes the look &mdash; a Halloween theme without relying on anything scary, and a strong fit for a family-friendly display.",
    ],
  },
  {
    n: "18",
    title: "Tiny Smile Pumpkin Family",
    paras: [
      "For a final idea, a whole family of mini pumpkins beats putting all the effort into one large one.",
      "Several small pumpkins, each given a different expression &mdash; one smiling, one winking, one with heart-shaped eyes &mdash; create far more variety than a single oversized design.",
      "Tiny hats, bows, scarves or glasses added to each pumpkin build out individual personalities, and a row of mini pumpkins staring at the front door with completely different expressions might be the most wholesome version of this whole list.",
    ],
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
<p>Pumpkin carving doesn't have to mean scary jack-o'-lanterns and dramatic grins. A cute design &mdash; a sleepy face, a tiny fox, a whole family of mini pumpkins &mdash; brings just as much charm to a front porch without leaning into anything genuinely spooky.</p>
<p>None of these require advanced carving skill. Most come down to a handful of simple shapes, spaced thoughtfully, with oversized eyes doing most of the emotional heavy lifting.</p>
${photo("hero.jpg", "Collection of cute carved pumpkins styled for a charming fall display", 1400, 934)}

<h2>Choosing the Right Pumpkin</h2>
<p>A pumpkin with a flat, stable base and a surface free of major soft spots carves far more easily than one that's already starting to bruise or wrinkle. Size matters for the design, too &mdash; a wider pumpkin gives more room to space out detailed features, while a smaller one suits a simpler face just fine.</p>
${pinPhoto("intro-choose.jpg", "Choosing the right pumpkin for a cute carving design", 683, 1024, "https://www.pinterest.com/pin/977140450428632723/", "Choosing a Pumpkin for Carving")}

<h2>18 Cute Pumpkin Carving Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these eighteen ideas require a scary expression or advanced carving skill to actually look good. Simple shapes, spaced with intention, carry most of the charm on their own.</p>
<p>Pick whichever face or pattern genuinely matches the vibe wanted on the porch this year &mdash; cozy, playful, or a little whimsical all work, as long as the result actually makes whoever carved it smile too.</p>
`;

module.exports = { body };
