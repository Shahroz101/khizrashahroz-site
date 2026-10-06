// Body content for "10 Blue Farmhouse Bedroom Ideas for a Cozy, Collected
// Look". The source article only carried a single stock hero photo and no
// per-idea images, so this one does too — bookended at open and close per
// the usual spacing rule, since there's no second image to spread through
// the list. The hero is a glam navy-and-gold tufted bedroom rather than a
// literal farmhouse scene, so the caption describes what's actually in the
// frame instead of claiming shiplap or weathered wood that isn't there.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "blue-farmhouse-bedroom-decor", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Choose a Blue That Reads Warm, Not Cold",
    paras: [
      "Not every blue belongs in a farmhouse bedroom. The ones that work lean soft and a little dusty &mdash; nothing that reads clinical or crisp.",
      "Slate blue brings quiet sophistication without tipping moody. Dusty cornflower has that faded, vintage quality, almost like well-worn denim. Navy with gray undertones goes deep and cozy without losing the farmhouse warmth.",
      "Test your shortlist on the actual wall before committing to the whole room. A blue that looks perfect on a paint chip can turn shockingly saturated once it's covering four walls in daylight.",
    ],
  },
  {
    n: "02",
    title: "Balance It With Whitewashed or Weathered Wood",
    paras: [
      "This is where the farmhouse half of the equation shows up. Blue needs something warm and textured to lean against, or it starts to feel flat.",
      "Whitewashed shiplap is the obvious classic, and it still earns its reputation. A reclaimed wood headboard brings in grain and history. Distressed oak or pine nightstands round it out without trying too hard.",
      "The more worn-in it looks, the better it works here. A piece that looks like it's survived a few decades of actual use does more for the room than anything brand new ever could.",
    ],
  },
  {
    n: "03",
    title: "Keep the Bed Itself Light",
    paras: [
      "A moody palette on the walls is lovely, but the bed should still feel like the softest part of the room, not an extension of the drama.",
      "Stick to crisp white, soft cream, or the palest blue for your main sheets and duvet. Then build character back in with a chunky navy knit throw folded at the foot, a few vintage floral pillows in muted blues, and linen shams with slightly frayed edges.",
      "That contrast &mdash; moody walls, light bed &mdash; is what keeps the whole room from feeling heavy.",
    ],
  },
  {
    n: "04",
    title: "Bring In Something Properly Old",
    paras: [
      "The pieces that make a blue farmhouse bedroom feel collected instead of decorated usually aren't new at all.",
      "A wrought iron bed frame with a little visible wear earns its place. A dresser painted blue with mismatched vintage knobs adds instant character. A distressed vanity or side table in white or gray rounds out the mix.",
      "Thrift stores and flea markets are the obvious hunting grounds, but plenty of newer furniture fakes the look convincingly if digging through secondhand shops isn't your idea of a weekend.",
    ],
  },
  {
    n: "05",
    title: "Let Blue Show Up in the Small Stuff Too",
    paras: [
      "You don't need to commit to blue everywhere at once &mdash; sprinkling it through smaller pieces ties the room together just as well.",
      "A blue ceramic lamp on the nightstand, a navy velvet ottoman at the foot of the bed, or a piece of art with ocean or sky tones all do the job without overwhelming the space.",
      "The trick is restraint. Pick two or three tones of blue and repeat those specifically, rather than letting every accent be a slightly different shade.",
    ],
  },
  {
    n: "06",
    title: "Layer In Natural Texture",
    paras: [
      "Natural materials are what keep a blue farmhouse bedroom from tipping into something that feels more coastal-glam than farmhouse-cozy.",
      "Rattan baskets double as storage and styling in one move. A woven jute rug grounds the floor with texture instead of pattern. Linen curtains filter light beautifully and soften every hard edge in the room.",
      "These textures do a lot of quiet work &mdash; they're what makes a moody blue room feel lived-in rather than staged.",
    ],
  },
  {
    n: "07",
    title: "Commit to One Moody Wall",
    paras: [
      "If you want real drama, give it a single wall instead of spreading it thin across the whole room.",
      "A navy accent wall behind the headboard is the obvious move. Patterned blue wallpaper with a farmhouse motif &mdash; florals, toile, a ticking stripe &mdash; works beautifully too, as does blue beadboard or wainscoting for texture without a full saturated color.",
      "Keep everything else in the room quiet so the statement wall can actually read as one. A room with three competing focal points doesn't have a focal point at all.",
    ],
  },
  {
    n: "08",
    title: "Add One Unexpected Industrial Note",
    paras: [
      "Farmhouse doesn't have to mean soft everywhere. A little industrial edge keeps a blue bedroom from drifting into overly precious territory.",
      "Black metal hardware on dressers, a wire pendant light or iron wall sconces, even a vintage fan or factory-style bench all bring that contrast in without clashing with the rest of the room.",
      "Think of it as the equivalent of pairing boots with a soft dress &mdash; the hard edge makes the soft parts read as more intentional, not less.",
    ],
  },
  {
    n: "09",
    title: "Keep Pattern Small-Scale and Coordinated",
    paras: [
      "Pattern is where a lot of blue farmhouse bedrooms go wrong &mdash; it's easy to tip from charming into busy fast.",
      "Gingham or plaid throws in muted blue stay firmly on the charming side. Ticking stripe pillow covers are close to a farmhouse requirement at this point. A floral area rug in soft navy and cream adds pattern underfoot without competing with everything above it.",
      "Nothing needs to match exactly. Coordinating tones does more work than matching patterns ever will.",
    ],
  },
  {
    n: "10",
    title: "Finish With Lighting That Actually Sets a Mood",
    paras: [
      "Overhead lighting is the fastest way to flatten an otherwise beautiful room, and a blue farmhouse bedroom is no exception.",
      "Warm Edison bulbs in a vintage-style lamp do more atmospheric work than almost anything else on this list. Matte black or bronze wall sconces add a soft glow at eye level, and a strand of fairy lights tucked into a mason jar is a cliché for a reason &mdash; it works.",
      "A dimmer switch is worth the small investment. Harsh overhead light undoes every bit of rustic, cozy mood the rest of the room just spent so much effort building.",
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
<p>Blue and farmhouse don't sound like they should go together at first &mdash; one feels cool and coastal, the other warm and rustic. But the combination is one of my favorite bedroom directions precisely because of that tension. Done right, it reads calm, collected, and a little bit storied, without tipping into either a nursery or a beach house.</p>
<p>Whether you're starting from scratch or just want to shift an existing room in this direction, these ideas work in pieces. You don't need to overhaul everything at once to feel the difference.</p>
<p>Here are ten ways to bring blue into a farmhouse bedroom without losing the warmth that makes farmhouse style work in the first place.</p>
${photo("hero.jpg", "Glam bedroom with a tufted navy velvet channel-back headboard, a royal blue velvet bench with gold trim, mirrored nightstands and cobalt ceramic lamps", 1400, 1318)}

<h2>10 Blue Farmhouse Bedroom Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A blue farmhouse bedroom isn't about picking one perfect shade and calling it done. It's the layering &mdash; a moody wall against pale bedding, a worn dresser next to something newly upholstered, natural texture softening every hard edge &mdash; that actually makes the look work.</p>
<p>You don't have to tackle the whole room this weekend. Swap the bedding, add one accent, try a moodier wall if you're feeling brave. Small changes shift the whole feel faster than people expect.</p>
<p>Start with whichever idea you keep coming back to, and let the rest of the room catch up around it.</p>
${photo("hero.jpg", "Glam bedroom with a tufted navy velvet channel-back headboard, a royal blue velvet bench with gold trim, mirrored nightstands and cobalt ceramic lamps", 1400, 1318)}
`;

module.exports = { body };
