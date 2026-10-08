// Body content for "14 Half Bathroom Ideas for an Inviting Space".
// Source had only ONE real content image in the entire article (hero)
// — confirmed by checking every <img> tag, not just <figure>-wrapped
// ones; a genuine source-wide gap, consistent with mudroom-ideas and
// outdoor-kitchen-ideas earlier this session. Source paragraphs were
// short, first-person anecdotal; rewrote into fuller paragraphs
// matching the site's typical idea depth.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "half-bathroom-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Upgrade the Hardware",
    paras: [
      "Small details tend to carry a disproportionate amount of weight in a half bathroom, simply because there's less room competing for attention.",
      "Swapping out an old faucet, cabinet handles or a towel ring is one of the cheapest, fastest upgrades available &mdash; a sleek matte black faucet in place of a decade-old chrome one can shift the whole room toward something that reads as designer-level.",
      "None of these swaps require a plumber or an electrician in most cases, which makes hardware one of the lowest-effort, highest-impact places to start.",
    ],
  },
  {
    n: "02",
    title: "Pick a Light, Airy Color Palette",
    paras: [
      "Color does a lot of work in a small space, more than it would in a larger room.",
      "Dark walls can feel genuinely dramatic in the right context, but in a half bathroom they often tip into feeling cramped rather than cozy.",
      "A bright, soft palette keeps the room feeling cheerful and open, which matters more in a half bath than almost anywhere else in the house, since there's no second chance to make the space feel bigger than it is.",
    ],
  },
  {
    n: "03",
    title: "Invest in a Statement Mirror",
    paras: [
      "A mirror isn't just for checking an outfit before heading out &mdash; it's one of the most effective tools for making a small space feel considerably larger.",
      "Swapping a small, plain mirror for a larger round or arched one bounces more light around the room and visually doubles the sense of space.",
      "It's a simple, single-item change, but it tends to have an outsized effect on how the whole bathroom feels to stand in.",
    ],
    photo: photo("hero.jpg", "Modern half bathroom with a floating vanity and statement lighting", 1400, 935),
  },
  {
    n: "04",
    title: "Choose Smart Flooring",
    paras: [
      "Flooring in a half bath does more than set the visual tone &mdash; the right pattern can make the space feel both bigger and cleaner.",
      "A herringbone layout in particular adds genuine visual interest, giving a tiny room a more considered, designer feel without changing its actual footprint.",
      "Since a half bath covers so little square footage, it's also one of the more affordable rooms in the house to upgrade the flooring in.",
    ],
  },
  {
    n: "05",
    title: "Floating Vanities for Extra Space",
    paras: [
      "A traditional vanity eats up floor space that a half bathroom genuinely can't spare.",
      "A floating vanity creates the illusion of more room simply by leaving the floor beneath it visible, which reads as more open even when the actual square footage hasn't changed.",
      "It also makes cleaning considerably easier, since there's no awkward gap underneath to navigate around.",
    ],
  },
  {
    n: "06",
    title: "Incorporate a Bold Wallpaper or Accent Wall",
    paras: [
      "For anyone not afraid of making a statement, wallpaper can turn a half bath into a genuine showstopper.",
      "A bold geometric or patterned paper behind the sink or on a single wall packs real visual punch, especially in a room small enough that the pattern doesn't overwhelm.",
      "Because the space is so compact, a dramatic wallpaper choice here carries far less risk than it would in a larger, more frequently used room.",
    ],
  },
  {
    n: "07",
    title: "Layer in Stylish Lighting",
    paras: [
      "Lighting can genuinely make or break a bathroom's whole mood &mdash; harsh overhead light rarely does any room favors, and dim, inadequate bulbs are just as much of a problem.",
      "A pair of brass or matte black sconces flanking the mirror adds warmth and a bit of visual interest beyond pure function.",
      "Good lighting in a half bath often ends up being the detail that gets the most comments, since it's the one thing guests actually interact with every time they use the room.",
    ],
  },
  {
    n: "08",
    title: "Use Vertical Space Wisely",
    paras: [
      "In a tiny bathroom, the walls matter more than the floor.",
      "A couple of shelves installed above the toilet create a genuine spot for candles, a small plant, or extra hand towels, all without eating into the room's limited floor space.",
      "Thinking vertically rather than horizontally is usually the difference between a half bath that feels cramped and one that feels intentionally styled.",
    ],
  },
  {
    n: "09",
    title: "Add Texture and Layers",
    paras: [
      "Texture is what keeps a half bathroom from feeling sterile or cold.",
      "A fully smooth, flat surface palette tends to read as unfinished, while a mix of materials &mdash; a woven bath mat, a textured towel, a ribbed soap dispenser &mdash; adds real warmth.",
      "Layering texture is one of the simplest ways to make a small room feel genuinely inviting rather than purely functional.",
    ],
  },
  {
    n: "10",
    title: "Play With Color in Fixtures",
    paras: [
      "White doesn't have to be the default for every fixture in the room.",
      "A deep navy or forest green sink against neutral walls reads as modern and a little unexpected, giving the room real personality without requiring a full color overhaul.",
      "Mixing in one colored fixture is often enough to make the whole bathroom feel considered rather than default.",
    ],
  },
  {
    n: "11",
    title: "Consider a Pocket or Sliding Door",
    paras: [
      "A standard swinging door takes up precious floor space in a room already working with very little of it.",
      "Swapping it for a sliding barn door or a pocket door frees up that space entirely, and a well-chosen sliding door can become a genuine design feature on its own.",
      "It's a bigger project than most ideas on this list, but one that solves a real spatial problem rather than just adding decoration.",
    ],
  },
  {
    n: "12",
    title: "Don't Forget Functional Accessories",
    paras: [
      "Even the prettiest half bath still needs a few genuinely practical touches to feel finished.",
      "A small, low-maintenance plant like a snake plant adds life to the room without requiring much care, and a well-chosen soap dispenser or tray keeps everyday items from looking scattered.",
      "The goal is a room that still functions well day to day, not just one that photographs nicely.",
    ],
  },
  {
    n: "13",
    title: "Add a Personal Touch With Art",
    paras: [
      "Small bathrooms often get skipped entirely when it comes to decorating, which is exactly what makes a bit of art stand out here.",
      "A single framed piece hung above the toilet or beside the mirror can turn a purely functional room into one that actually feels considered.",
      "It doesn't take much &mdash; even one small frame tends to be enough to make the space feel genuinely finished.",
    ],
  },
  {
    n: "14",
    title: "Keep It Clutter-Free",
    paras: [
      "This might sound obvious, but it's worth saying directly: clutter undoes style fast.",
      "A genuinely beautiful bathroom can still feel messy if every surface is crowded with bottles, products and loose items.",
      "Clean lines and a bit of organized storage make even a very small half bath feel considerably more luxurious than its square footage would suggest.",
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
<p>A half bathroom gets overlooked more often than any other room in the house, mostly because it's small and purely functional by design. That's exactly what makes it such a rewarding room to actually style &mdash; a handful of small, deliberate choices go a long way in a space this compact.</p>
<p>None of the ideas below require a full renovation. Most work as individual upgrades, layered in one at a time as time and budget allow.</p>

<h2>14 Half Bathroom Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these fourteen ideas require gutting the room to make a real difference. A hardware swap, a statement mirror, or a bolder wallpaper choice can transform a half bath considerably faster than almost any other room in the house.</p>
<p>Because the space is so small, it's also one of the lowest-risk rooms to experiment in &mdash; a bold color or pattern that might feel like too much in a larger bathroom often works perfectly here.</p>
`;

module.exports = { body };
