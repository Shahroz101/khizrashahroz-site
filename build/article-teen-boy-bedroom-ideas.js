// Body content for "15 Teen Boy Bedroom Ideas That Actually Get Used".
// Photos carried over from the source article (AI-generated style, no
// Pinterest links, product-listing headings between sections ignored).
// "Don't Forget the Tech Dock" has no photo in the source. The gaming
// setup idea is written briefly and generically since the site already
// has a dedicated gaming-room-setup-ideas article.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "teen-boy-bedroom-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Go Bold With an Accent Wall",
    paras: [
      "A strong accent wall can turn a basic bedroom into a space with actual personality almost overnight.",
      "Deep navy, charcoal, forest green, or even a bold geometric pattern reads as edgy and current rather than babyish.",
      "It says \"this has style\" without looking like it tried too hard, which is exactly the tone most teen boys are actually going for.",
    ],
    photo: photo("accent-wall.png", "Teen boy bedroom with a bold dark accent wall behind the bed", 574, 1024),
  },
  {
    n: "02",
    title: "Keep Furniture Minimal and Sturdy",
    paras: [
      "Frilly bedding and antique side tables were never going to land here, so it's worth leaning fully into something more functional.",
      "Clean-lined furniture in durable materials holds up far better than anything delicate &mdash; teen boys are not known for being gentle with their rooms.",
      "Simple doesn't mean boring. A few well-chosen, sturdy pieces read as more intentional than a room full of mismatched furniture anyway.",
    ],
    photo: photo("minimalist-furniture.png", "Minimalist, sturdy furniture in a teen boy bedroom", 574, 1024),
  },
  {
    n: "03",
    title: "Add a Lounge Zone Beyond the Bed",
    paras: [
      "Carving out a dedicated chill spot that isn't just the bed makes the whole room feel considerably more livable.",
      "A beanbag chair, a small loveseat, or even a floor cushion setup gives him somewhere to actually hang out with friends.",
      "It also means guests have somewhere to sit that isn't the bed, which tends to keep the rest of the house a little tidier too.",
    ],
    photo: photo("lounge-zone.png", "Lounge zone with a beanbag chair in a teen boy bedroom", 574, 1024),
  },
  {
    n: "04",
    title: "Let His Interests Actually Show",
    paras: [
      "The real trick to a room that gets used and respected is making it about him specifically, not a generic Pinterest version of a \"boy room.\"",
      "A mounted skateboard, framed vinyl records, a jersey display, or a shelf of trophies all give the space real character instead of a borrowed aesthetic.",
      "Those personal touches tend to do double duty, too &mdash; a room that reflects someone's actual interests is a room they're more likely to want to keep looking decent.",
    ],
    photo: photo("show-interests.png", "Teen boy bedroom wall displaying personal interests like a mounted skateboard", 574, 1024),
  },
  {
    n: "05",
    title: "Layer Lighting Like It Matters",
    paras: [
      "Lighting does more for a room's mood than almost anything else on this list, and it's not just about LED strips, though those earn their place too.",
      "Layering a few sources &mdash; an overhead fixture, a desk lamp, and some ambient strip lighting &mdash; gives the room real depth instead of one flat wash of light.",
      "It's an affordable, genuinely customizable upgrade, which is part of why LED lighting shows up in nearly every teen bedroom done well.",
    ],
    photo: photo("cool-lighting.png", "Layered lighting setup with LED strips in a teen boy bedroom", 574, 1024),
  },
  {
    n: "06",
    title: "Make Storage Look Like a Design Choice",
    paras: [
      "Teen boys aren't naturally tidy, but stylish storage genuinely gets used more than the plain, forgettable kind ever does.",
      "Open cube shelving, a sleek hamper, or a closet system that's actually easy to use all make organizing feel less like a chore.",
      "The goal is function that doesn't read as boring &mdash; storage that looks intentional gets used; storage that looks like an afterthought gets ignored.",
    ],
    photo: photo("stylish-storage.png", "Stylish open storage shelving in a teen boy bedroom", 574, 1024),
  },
  {
    n: "07",
    title: "Pick a Grown-Up Color Palette",
    paras: [
      "Neon green and lava-lamp blue can stay in the past. A more grown-up palette ages with him instead of needing a redo every couple of years.",
      "Navy and camel, charcoal and rust, or a muted sage with warm wood all read as considerably more mature without losing any personality.",
      "These combinations also work as a flexible backdrop &mdash; whatever his interests shift to next, the palette underneath doesn't need to change.",
    ],
    photo: photo("grownup-palette.png", "Teen boy bedroom styled in a grown-up navy and camel color palette", 574, 1024),
  },
  {
    n: "08",
    title: "Upgrade the Bedding",
    paras: [
      "At some point the dinosaur sheets have to go, and upgrading the bedding is one of the fastest ways to make the whole room feel more current.",
      "A solid duvet in a grown-up color, a textured throw, and a couple of simple pillows add real polish without sacrificing comfort.",
      "It's not about making the bed fussy &mdash; it's a small, low-effort change that shifts the whole room's feel almost instantly.",
    ],
    photo: photo("bedding-upgrade.png", "Upgraded grown-up bedding in a teen boy bedroom", 574, 1024),
  },
  {
    n: "09",
    title: "Build In a Gaming Setup, Without Taking Over",
    paras: [
      "Gaming is a genuine lifestyle for a lot of teens now, and it doesn't have to turn the whole room into a blinking command center.",
      "A compact desk, a comfortable chair, and clean cable management keep the setup contained to one corner rather than dominating the space.",
      "Done with a little restraint, it functions well without swallowing the rest of the room's personality.",
    ],
    photo: photo("gaming-setup.png", "Compact gaming setup contained to one corner of a teen boy bedroom", 574, 1024),
  },
  {
    n: "10",
    title: "Add a Rug for Instant Warmth",
    paras: [
      "Cold laminate floors and zero textiles are a dead giveaway of an unfinished teen room. A rug fixes that almost immediately.",
      "Something durable and easy to clean in a bold pattern or deep solid color adds warmth without demanding careful maintenance.",
      "As a bonus, it muffles sound &mdash; genuinely useful the moment gaming or music gets loud enough to notice from down the hall.",
    ],
    photo: photo("warm-rug.png", "Bold patterned rug adding warmth to a teen boy bedroom", 574, 1024),
  },
  {
    n: "11",
    title: "Set Up a Personal Command Center",
    paras: [
      "Teenagers run on low-key chaos, and a dedicated command zone helps corral at least some of it into one spot.",
      "A corkboard, a small calendar, a charging station and a spot for keys and wallet give scattered daily items one consistent home.",
      "It gives the illusion of real organization even if it only gets fully used a couple of times a week &mdash; which, realistically, is still a win.",
    ],
    photo: photo("command-center.png", "Personal command center with a corkboard and charging station in a teen boy bedroom", 574, 1024),
  },
  {
    n: "12",
    title: "Carve Out a Workout Corner",
    paras: [
      "For anyone into fitness, a small home gym setup tucked into one corner of the room goes a long way.",
      "A yoga mat, a set of adjustable dumbbells, and a resistance band or two cover most of what's actually needed in a tight footprint.",
      "Beyond the function, it quietly signals real support for whatever goals he's chasing that particular month.",
    ],
    photo: photo("workout-corner.png", "Small workout corner with dumbbells and a yoga mat in a teen boy bedroom", 574, 1024),
  },
  {
    n: "13",
    title: "Lean Into Travel and Adventure Vibes",
    paras: [
      "A wanderlust-leaning teen doesn't need an actual passport stamp to justify an adventure-themed corner of the room.",
      "A world map on the wall, a few travel-inspired prints, or a shelf of collected souvenirs and mementos build that aspirational feel.",
      "It's less about where he's actually been and more about creating a space that points toward where he wants to go.",
    ],
    photo: photo("adventure-vibes.png", "Travel and adventure-themed decor including a world map in a teen boy bedroom", 574, 1024),
  },
  {
    n: "14",
    title: "Don't Forget the Tech Dock",
    paras: [
      "Five devices charging at once off a tangle of cords is a safety hazard and an eyesore in equal measure.",
      "A dedicated charging station or a multi-device dock keeps all of that in one tidy spot instead of scattered across every outlet in the room.",
      "It's a small addition, but it makes a noticeable difference in how organized and modern the whole room actually feels day to day.",
    ],
  },
  {
    n: "15",
    title: "Let Him Have a Say, Within Limits",
    paras: [
      "Real ownership over the space matters more than most parents expect, and giving him some say goes a long way toward keeping the room actually used.",
      "Letting him choose the accent color, pick out his own art, or weigh in on the bedding keeps the final result from feeling imposed.",
      "The end result doesn't just look good when it's collaborative &mdash; it genuinely feels like his, which is really the whole point.",
    ],
    photo: photo("personal-say.png", "Teen boy bedroom reflecting personal choices in color and decor", 574, 1024),
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
<p>A teen boy's bedroom doesn't have to look like it was decorated for a much younger kid or furnished entirely from a dorm-room clearance sale. Getting it right is part compromise, part creativity, and admittedly a bit of a guessing game &mdash; but a handful of smart moves gets it there without much drama.</p>
<p>The trick is keeping it personalized, reasonably streamlined, and just a little more grown-up than whatever came before. Give him room to actually express himself, without the room tipping into total chaos.</p>
${photo("hero.jpg", "Stylish teen boy bedroom with a bold accent wall and modern furniture", 1312, 736)}

<h2>15 Teen Boy Bedroom Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Whether the room belongs to a moody skater, a dedicated gamer, or a budding minimalist philosopher, these ideas work as a reliable starting point for a space he'll actually want to spend time in.</p>
<p>Keep it personal, keep it functional, and let him have a real say in a few of the decisions. A room that reflects who he actually is gets treated better than one that was simply handed to him finished.</p>
`;

module.exports = { body };
