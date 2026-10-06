// Body content for "10 Reading Nook Ideas That Work Even in a Tiny Space".
// Photos carried over from the source article. The source's "Window Seat"
// and "Corner Chair" photos were swapped relative to their headings — the
// photo captioned for the window seat idea showed a corner chair with no
// window in frame, and vice versa — so they're swapped back here to match
// what's actually pictured. The source also padded its intro across eight
// separate H2 sections before the numbered list; condensed to three here
// to cut the bloat without losing the substance.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "reading-nook-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "A Real Window Seat",
    paras: [
      "The classic for a reason. Natural light, a view, and a genuinely comfortable seat is a combination that works every single time.",
      "You don't need a built-in bench to pull this off. A chair pulled up close to a window with sheer curtains and a small side table does the same job.",
      "Keep the setup simple: a comfortable seat, soft layering, and a small surface for your coffee or current book. That's the whole formula.",
    ],
    photo: photo("corner-chair.jpg", "Cream boucle armchair positioned beside a window with sheer curtains, a fiddle leaf fig plant and a small round side table with a lamp", 734, 1024),
  },
  {
    n: "02",
    title: "A Forgotten Corner, Claimed",
    paras: [
      "Every home has one of these &mdash; a corner too small for real furniture, too visible to just ignore. That corner is your reading nook waiting to happen.",
      "A compact accent chair, a floor lamp with warm light, a small round side table, and one plant for softness is genuinely all it takes.",
      "Resist the urge to overfill it. This corner doesn't need to display your whole personality &mdash; a few well-chosen pieces read as more intentional than a crowded one.",
    ],
    photo: photo("window-seat.jpg", "Blush pink velvet armchair in a room corner with a gallery wall of framed prints, a brass floor lamp and a white bookshelf", 576, 1024),
  },
  {
    n: "03",
    title: "Floor Seating",
    paras: [
      "No chair, no problem. Floor seating feels relaxed and a little luxurious in its own low-key way, and it saves a genuine amount of space compared to a chair or sofa.",
      "A thick floor cushion or pouf, a layered rug underneath for softness, something to lean back against, and low ambient lighting cover everything you need.",
      "This setup works especially well in small apartments or minimalist spaces where bulky furniture just isn't the move.",
    ],
    photo: photo("floor-seating.jpg", "Round tufted mustard yellow floor cushion in a room corner with patterned throw pillows, a gallery wall and floating bookshelves", 683, 1024),
  },
  {
    n: "04",
    title: "Built Into a Bookshelf",
    paras: [
      "If you already own a bookshelf, you're most of the way to this one. Add a comfortable seat right beside it and you've got a nook that's both functional and genuinely good-looking.",
      "Let the bookshelf be the backdrop, keep the seating simple, and make sure a reading lamp is within reach. The books themselves do most of the decorating.",
      "Everything stays within arm's reach this way &mdash; no getting up mid-chapter to go find your next read.",
    ],
    photo: photo("bookshelf-nook.jpg", "Round papasan-style chair with cushions positioned beside a built-in bookshelf lit with warm under-shelf lighting and string lights", 683, 1024),
  },
  {
    n: "05",
    title: "A Dedicated Spot in the Bedroom",
    paras: [
      "Reading on the bed usually ends one of two ways: you fall asleep, or you end up scrolling your phone instead. A separate little zone, even a small one, fixes both.",
      "A chair or floor cushion near a window or open wall, a soft throw, a bedside-style lamp, and a small stack of books is all the setup this needs.",
      "Pulling reading out of the bed itself genuinely changes the nighttime routine for a lot of people &mdash; worth trying even if it sounds like a small shift.",
    ],
    photo: photo("bedroom-nook.jpg", "Rattan papasan chair with pink and white pillows beside a bed near a sunlit window with sheer curtains and hanging plants", 664, 1184),
  },
  {
    n: "06",
    title: "A Closet, Reimagined",
    paras: [
      "This sounds like a stretch until you actually see it done. A spare or underused closet converts into a surprisingly good reading nook.",
      "Remove the doors or just leave them open, add a bench or cushions inside, install soft lighting, and use the existing shelving for books.",
      "The result is a fully enclosed, genuinely distraction-free little hideout &mdash; which is honestly more than most dedicated reading rooms manage.",
    ],
    photo: photo("closet-nook.jpg", "Closet converted into a reading nook with a built-in cushioned bench, string lights, floating bookshelves and framed prints", 683, 1024),
  },
  {
    n: "07",
    title: "The Space Under the Stairs",
    paras: [
      "That awkward triangle under a staircase is almost always used for storage. It can do so much more.",
      "A custom or compact bench, built-in shelving if you can manage it, warm lighting, and a neutral palette keep the space feeling open rather than cramped.",
      "It takes a bit more effort than most ideas on this list, but the payoff genuinely looks like something out of a design feature.",
    ],
    photo: photo("under-stair.jpg", "Reading nook built into the space under a staircase with a cushioned bench, wall sconce, floating shelves and dried pampas grass", 683, 1024),
  },
  {
    n: "08",
    title: "A Hanging Chair",
    paras: [
      "For something with a little more personality, a hanging chair adds gentle movement and a completely different feel from a standard seat.",
      "You'll need a sturdy ceiling hook, a compact hanging chair, a soft cushion or throw, and a nearby light source.",
      "One real caution here: confirm your ceiling can actually support it before committing. Cozy is the goal, not a trip to urgent care.",
    ],
    photo: photo("hanging-chair.jpg", "Macrame hanging chair with cream cushions suspended near a window, surrounded by potted plants and a bookshelf strung with warm fairy lights", 575, 1024),
  },
  {
    n: "09",
    title: "Minimalist, On Purpose",
    paras: [
      "For the less-but-better crowd: one chair, one light source, one small table or shelf. That's genuinely the whole list.",
      "No clutter, no overload, just essentials. A clear space like this helps your brain actually slow down faster than a busier one ever could.",
      "It also happens to look effortlessly put-together, which is a nice bonus for something that requires so little upkeep.",
    ],
    photo: photo("minimalist.jpg", "Sage green swivel chair with cushions and a knit throw beside a wood ladder shelf and paper lantern pendant light strung with fairy lights", 702, 1024),
  },
  {
    n: "10",
    title: "A Nook That Pulls Double Duty",
    paras: [
      "In a small space, every inch should be doing more than one job if it can. A reading nook is a great candidate for combining with something else entirely.",
      "A window seat with drawers or shelving built into the base, a storage bench that doubles as seating, or a reading corner that shares space with a small desk all work beautifully.",
      "This is the approach that gets the most out of limited square footage without ever feeling like a compromise.",
    ],
    photo: photo("multi-functional.jpg", "Built-in window bench seat with cushions and patterned throw pillows above open bookshelf storage filled with books", 474, 711),
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
<p>You don't need a huge house or a Pinterest-perfect library to build a genuinely cozy reading spot. You need a workable corner and a little creativity &mdash; tight spaces, awkward layouts, and rooms that barely fit a bed have all turned into some of the coziest reading nooks I've seen.</p>
<p>If you've been thinking you don't have the space for one, that's probably not true. You likely have a spot already. You just haven't labeled it as one yet.</p>
<p>Here's what actually makes a nook work, and then ten real, doable versions you can adapt to your own space.</p>
${photo("hero.jpg", "Two mid-century wood chairs with a small round table beside a window, positioned next to a tall bookshelf in a warmly lit room", 1400, 934)}

<h2>Why a Reading Nook Is Worth the Effort</h2>
<p>A reading nook isn't just a decorating flourish &mdash; it genuinely changes how a space gets used. Sitting in the same dedicated spot repeatedly trains your brain to associate it with relaxing, the same way your bed signals sleep and your desk signals work.</p>
<p>It also solves a quieter problem: small homes waste space in sneaky ways &mdash; corners, window edges, the gap between furniture that never quite works for anything. A nook turns those dead zones into something you actually use, and it layers in personality (seating, lighting, texture) without adding clutter.</p>
<p>Texture does a lot of the emotional work here too. Throws, cushions, and rugs read as safety to your brain almost instantly, and a slightly enclosed spot &mdash; a corner, an alcove, even just a curtain &mdash; helps you actually disconnect once you sit down.</p>
${photo("intro-why.jpg", "Boho window reading nook with a cushioned bench seat, chunky knit throw, round woven pouf, macrame wall hanging and hanging plants", 683, 1024)}

<h2>Planning Yours Without Overspending</h2>
<p>Before jumping into ideas, a quick plan saves a lot of second-guessing: pick the spot without overthinking it, choose seating first since everything else builds around it, add lighting (natural first, then a warm artificial source), layer in comfort, keep a few essentials nearby, and stop before clutter creeps in. That last step is where most nooks go wrong.</p>
<p>None of this requires a big budget, either. Floor cushions, a secondhand chair, a DIY shelf, or a repurposed stool can look just as good as anything bought new. If you're going to spend real money anywhere, put it toward the seat and the lighting &mdash; everything else, including decor and storage, can stay flexible.</p>
<p>A reading nook also just makes a small home feel more intentional rather than cramped, and that distinction matters more than people expect once the space is actually finished.</p>
${photo("intro-plan.jpg", "Cream bean bag chair with knit pillows and an open book beside a lit bookshelf with string lights and a potted plant", 683, 1024)}

<h2>10 Reading Nook Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Here's the honest takeaway: you don't need more space. You need a better use of the space you already have.</p>
<p>A reading nook was never really about square footage. It's about intention &mdash; claiming one small spot and making it genuinely yours, rather than letting it stay another dead corner.</p>
<p>Start with whichever idea matches the layout you're actually working with, and build from there.</p>
`;

module.exports = { body };
