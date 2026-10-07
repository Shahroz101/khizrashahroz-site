// Body content for "12 Small Front Porch Ideas That Make a Tiny Entryway
// Feel Custom-Built". Photos carried over from the source article. Note:
// the source's two lighting photos were captioned backwards relative to
// what they actually show — the file meant for "builder-grade fixture
// upgrade" was actually a string-light / accent-lighting shot, and the
// file meant for "soft accent lighting" was actually a wall lantern
// fixture shot. Corrected here to match what each photo depicts. Condensed
// 3 padded intro H2 sections down to 2.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "front-porch-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "front-porch-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Frame the Entry With Greenery",
    paras: [
      "This is the single highest-impact move on this list, and it costs almost nothing beyond two matching planters. Flanking your doorway with identical greenery creates a visual frame that makes the whole entrance feel larger and more considered.",
      "Go vertical here &mdash; boxwoods, slim topiaries, snake plants, or tall ornamental grasses all work, and tall shapes draw the eye upward instead of letting it stop at ground level.",
      "The one rule: keep everything trimmed. An overgrown planter does the opposite of what you want on a small porch &mdash; it shrinks the space instead of framing it.",
    ],
    photo: pinPhoto("frame-greenery.jpg", "Front door flanked by two matching woven wicker planters filled with lavender, a grapevine wreath and a wall lantern beside the door", 576, 1024, "https://www.pinterest.com/pin/68749293594/", "Greenery Framing a Small Front Porch"),
  },
  {
    n: "02",
    title: "Paint the Front Door",
    paras: [
      "If your porch feels flat, there's a good chance your door is blending into the siding instead of standing out. A bold door color is the fastest, cheapest way to give a small entry a genuine focal point.",
      "Deep navy, forest green, charcoal, warm terracotta &mdash; any of these reads as intentional rather than loud, especially against a neutral exterior.",
      "Here's the honest math: a can of paint versus five separate decor purchases trying to achieve the same effect. The door wins every time, and the soft teal-blue shown here next to warm wood crates and a few plants proves the point on its own.",
    ],
    photo: pinPhoto("front-door-color.jpg", "Soft teal front door with a greenery wreath, flanked by wood crates holding potted flowers and blue mason jars on a checkerboard-tile porch floor", 1024, 1024, "https://www.pinterest.com/pin/344595809009388239/", "Front Door Color for a Small Porch"),
  },
  {
    n: "03",
    title: "Create a Cozy Seating Moment",
    paras: [
      "A small porch doesn't rule out seating &mdash; it just rules out oversized seating. A slim bistro set, a pair of armless chairs, or a narrow bench against the wall keeps the center of the porch clear while still giving you somewhere to actually sit.",
      "The test is simple: can someone knock on the door and step back comfortably without bumping a chair? If yes, your scale is right.",
      "Dress it up with a couple of weathered pillows and a throw draped over the arm, like the warm wood bench shown here, and the whole setup reads as a real sitting spot instead of an afterthought.",
    ],
    photo: pinPhoto("cozy-seating.jpg", "String lights strung under a covered porch ceiling above two wood slat chairs with cream pillows around a small round table and patterned rug", 512, 1024, "https://www.pinterest.com/pin/4362930884151330/", "Cozy Seating on a Small Front Porch"),
  },
  {
    n: "04",
    title: "Go Vertical With Plants",
    paras: [
      "Plants are non-negotiable for a welcoming porch, but on a tight footprint they eat up floor space fast if you only think horizontally. The fix is to layer upward instead &mdash; wall-mounted planters, hanging baskets, and a tiered plant ladder all add greenery without claiming square footage.",
      "A tiered ladder shelf, like the one shown here tucked beside the door, lets you stack several pots in the same footprint one planter would normally take.",
      "Hanging baskets add a second, higher layer again &mdash; ferns and trailing blooms suspended from the porch roof fill the space overhead that most small porches leave completely empty.",
    ],
    photo: `${pinPhoto("vertical-planters.jpg", "Wooden tiered plant ladder shelf beside a front door holding ferns and potted plants on a covered porch", 683, 1024, "https://www.pinterest.com/pin/21181060743833678/", "Vertical Planters on a Small Front Porch")}
    ${pinPhoto("hanging-baskets.jpg", "Hanging fern and flower baskets suspended from a porch roof above a bench and potted plants near a blue front door", 576, 1024, "https://www.pinterest.com/pin/936889528734681985/", "Hanging Baskets on a Small Front Porch")}`,
  },
  {
    n: "05",
    title: "Define the Space With a Rug",
    paras: [
      "An outdoor rug is one of the easiest upgrades on this entire list, and it works almost instantly. It visually separates the porch from the rest of the exterior and gives the whole setup a sense of being an actual room.",
      "Size matters more than people expect &mdash; a rug should sit fully under your seating with a visible border of floor around it. Too small looks like an accident; too large looks cramped.",
      "Pattern earns its keep here too. A striped or geometric rug, layered over a plain jute one like the pairing shown here, hides dirt, adds personality, and can make a narrow porch read as noticeably wider.",
    ],
    photo: `${pinPhoto("rug-plain.jpg", "Neutral woven seagrass outdoor rug under two wicker-cushioned chairs with white boxwood planters on a covered porch", 768, 1024, "https://www.pinterest.com/pin/1196337405214229/", "Small Front Porch Rug Ideas")}
    ${pinPhoto("rug-pattern.jpg", "Black and white striped outdoor rug layered over a jute doormat on a porch with potted greenery and a wood bench", 576, 1024, "https://www.pinterest.com/pin/335096028548318101/", "Patterned Rug on a Small Front Porch")}`,
  },
  {
    n: "06",
    title: "Upgrade the Lighting",
    paras: [
      "Lighting changes the entire mood of a small porch more than almost any other single change. A dim builder-grade fixture makes even a well-decorated porch feel like an afterthought, while warm, layered light makes it feel genuinely inviting after dark.",
      "Start by swapping out the original fixture for something with real character &mdash; matte black lanterns, brushed brass, or a simple industrial sconce flanking the door instantly upgrades the whole entrance, as shown here.",
      "Then layer in soft accent lighting on top &mdash; string lights along the porch ceiling, like the warm glow shown here, do more to make a small space feel cozy at night than almost any decor item could.",
    ],
    photo: `${pinPhoto("lighting-lantern.jpg", "Black metal wall lantern sconces flanking a wood front door at dusk, with small lanterns lighting the front steps", 681, 1024, "https://www.pinterest.com/pin/2251868558865873/", "Small Front Porch Lantern Fixtures")}
    ${pinPhoto("lighting-sconce.jpg", "Warm string lights strung across a covered porch ceiling above wood chairs, a small table and potted plants in the evening", 683, 1024, "https://www.pinterest.com/pin/633387444242272/", "Small Front Porch Accent Lighting")}`,
  },
  {
    n: "07",
    title: "Hang a Statement Pendant",
    paras: [
      "Once the basics are handled, a hanging pendant is where a small porch gets genuinely dramatic. Vertical elements pull the eye upward, which is exactly the trick that makes a tight space feel taller than it is.",
      "A modern lantern pendant, a rustic farmhouse fixture, or a sleek black metal shade all do the job &mdash; the one shown here glows warm against a dark exterior and instantly reads as custom rather than builder-basic.",
      "Scale is the only thing to watch. Measure your porch width before you shop; a pendant that's too small looks timid, and one that's too large overwhelms the space it's meant to anchor.",
    ],
    photo: pinPhoto("statement-fixture.jpg", "Black metal caged pendant light hanging from a dark porch ceiling beside a wood front door and white-trimmed window", 681, 1024, "https://www.pinterest.com/pin/737957088979385738/", "Statement Pendant on a Front Porch"),
  },
  {
    n: "08",
    title: "Lean Into Symmetry",
    paras: [
      "Symmetry does something small porches genuinely need: it creates order, and order reads as calm, and calm makes a tight space feel bigger than its actual square footage.",
      "The easiest version is what I'd call the two-and-two rule &mdash; two matching planters, two matching chairs, two matching sconces, positioned evenly on either side of the door.",
      "Keep the center walkway completely clear, like the mirrored chairs and potted topiaries shown here. The moment clutter creeps into that middle space, the symmetry stops working and the porch goes back to feeling accidental.",
    ],
    photo: pinPhoto("symmetry.jpg", "Covered porch entry with two matching folding chairs, striped pillows and black planters with yellow flowers mirrored on either side of a white front door", 576, 1024, "https://www.pinterest.com/pin/116601077857075530/", "Symmetrical Small Front Porch"),
  },
  {
    n: "09",
    title: "Bring in Natural Materials",
    paras: [
      "A porch built entirely out of metal and hard surfaces can feel cold no matter how well it's arranged. Natural materials soften that instantly &mdash; think wood accents, woven baskets, rattan furniture, and linen cushions.",
      "The swap doesn't need to be dramatic. Trading metal chairs for simple wooden ones, or adding a weathered wood bench like the one shown here, changes the entire feel of the space without changing the layout at all.",
      "Texture genuinely does emotional work in a space most people underestimate &mdash; it's the difference between a porch that looks staged and one that feels lived-in.",
    ],
    photo: pinPhoto("natural-materials.jpg", "Weathered wood bench with patterned pillows on a porch surrounded by assorted ceramic planters, a wreath on a dark door and rustic wood shutters", 683, 1024, "https://www.pinterest.com/pin/181340322492115019/", "Natural Materials on a Small Front Porch"),
  },
  {
    n: "10",
    title: "Add Storage That Still Looks Styled",
    paras: [
      "Shoes, packages, umbrellas &mdash; they all pile up by the front door whether you plan for them or not. The goal on a small porch is storage that looks intentional rather than like a catch-all.",
      "A slim bench with hidden storage, a row of woven baskets under a wall shelf, or a few hooks for bags and towels all handle the clutter without adding visual noise.",
      "Keep it edited, like the single wall-mounted shelf and basket row shown here. The second storage starts looking like more storage than decor, it's defeated its own purpose.",
    ],
    photo: pinPhoto("smart-storage.jpg", "Wall-mounted shelf with hooks holding a bag and towel above three matching woven storage baskets and a patterned doormat on a porch", 704, 1024, "https://www.pinterest.com/pin/245024035973300711/", "Smart Storage on a Small Front Porch"),
  },
  {
    n: "11",
    title: "Upgrade House Numbers and Hardware",
    paras: [
      "The details most people skip &mdash; house numbers, door hardware, mailbox finish &mdash; actually move the needle on curb appeal more than people expect.",
      "Bold, modern numbers in matte black or brushed brass read as polished immediately, especially mounted on a wood backing like the one shown here instead of straight against siding.",
      "Keep every metal finish consistent across the porch &mdash; hardware, light fixtures, house numbers, mailbox. That one small consistency is what makes a porch feel designed instead of assembled piece by piece.",
    ],
    photo: pinPhoto("house-numbers.jpg", "Modern black house numbers reading 42 mounted on a wood plaque beside a dark front door, with a small plant below", 701, 1024, "https://www.pinterest.com/pin/20829217022234457/", "House Numbers on a Small Front Porch"),
  },
  {
    n: "12",
    title: "Layer in Seasonal Decor, Sparingly",
    paras: [
      "Seasonal decor is where small porches most often go wrong &mdash; not because people decorate for the season, but because items multiply every year until the porch is buried under a collection instead of a layout.",
      "Pick one seasonal anchor piece and let it lead: a statement wreath, a single oversized pumpkin, or one tall holiday lantern, like the wreath and seasonal blooms shown here.",
      "And actually remove last season's pieces before adding new ones. Rotating beats stacking every time &mdash; a welcoming porch isn't the same thing as an overwhelming one.",
    ],
    photo: pinPhoto("seasonal-decor.jpg", "Grapevine wreath hanging on a black front door above a galvanized metal planter filled with yellow tulips beside a wood bench with plaid pillows", 736, 981, "https://www.pinterest.com/pin/3588874698055725/", "Seasonal Decor on a Small Front Porch"),
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
<p>A front porch sets the tone before anyone even reaches your door, and when the square footage is tight, every design choice carries more weight. The good news is that size was never really the obstacle. A tiny porch styled with intention beats a sprawling one styled without it, every time.</p>
<p>You don't need a wraparound farmhouse porch to pull this off. You need scale, one real focal point, and a few deliberate moves that make the space feel welcoming instead of cramped.</p>
${photo("hero.jpg", "Small covered front porch with a black door, warm lantern sconce, potted topiary trees and a wood bench with cream pillows", 1312, 736)}

<h2>Why Small Porches Need More Intention, Not Less</h2>
<p>A small porch doesn't leave room to hide behind oversized furniture or scattered decor &mdash; every single piece shows, which sounds risky but actually works in your favor. The most common failure mode is overcrowding: two chairs, a bench, three plants, and a basket crammed into a space built for half of that, until nobody can open the door all the way.</p>
<p>The second most common failure is the opposite problem &mdash; a porch with no focal point at all, nothing for the eye to land on. And the third is ignoring vertical space entirely. Walls, ceilings, and door frames are real design opportunities that flat, floor-only decorating leaves on the table.</p>
${pinPhoto("intro-first-impression.jpg", "Covered porch corner with a sage green door, wreath, wall lantern and wood bench with pillows surrounded by potted florals and stone steps", 705, 1024, "https://www.pinterest.com/pin/114982596733789325/", "Small Front Porch First Impression")}

<h2>Three Rules That Actually Make Small Porches Work</h2>
<p>Scale everything down on purpose. A full-size patio sofa overwhelms a small entry instantly &mdash; slim-profile chairs, narrow benches, and wall-mounted lighting leave the movement space a porch actually needs.</p>
<p>Add exactly one statement element &mdash; a bold door color, an oversized planter, a patterned rug &mdash; and let it anchor the whole space rather than competing with five smaller ones. Then layer texture instead of adding bulk: woven baskets, natural fiber rugs, and wood accents build richness without taking up a single extra inch of floor.</p>
${pinPhoto("intro-texture.jpg", "Small front porch with a seasonal wreath, layered pillows on a wood bench, a patterned rug and a lit lantern on a tree stump side table", 575, 1024, "https://www.pinterest.com/pin/114982596733789325/", "Layering Texture on a Small Porch")}

<h2>12 Small Porch Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of this requires more square footage &mdash; it requires better decisions about the footage you already have. A bold door color, one real focal point, lighting that actually sets a mood, and a little restraint on the seasonal decor will do more for a tiny porch than doubling its size ever would.</p>
<p>Start with whichever idea feels most overdue on your own porch, and edit ruthlessly as you go. If you add something new, let something old go. A small porch rewards restraint in a way almost no other part of a house does.</p>
`;

module.exports = { body };
