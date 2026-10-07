// Body content for "16 Makeup Vanity Ideas Worth Moving Off the
// Bathroom Counter". Photos carried over from the source article.
// "Custom Makeup Vanity" and "Personalized Vanity" have no photo in the
// source; all other 14 ideas do. Condensed a heavily padded intro (7
// extra non-idea photos across "why it matters," "lighting," "storage"
// and "styles" sub-sections) down to one short intro with one photo.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "makeup-vanity-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "makeup-vanity-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Hollywood Glam, Statement Lighting",
    paras: [
      "For a vanity that feels like an actual movie set, this is the style that delivers. Bold mirrors, bright lighting and luxe finishes carry the whole look.",
      "A large mirror ringed with LED bulbs creates genuinely even lighting, and glossy or mirrored surfaces bounce that light back into the room.",
      "Neutral tones keep it from feeling dated, and a plush stool adds the last bit of drama. Makeup consistently looks better once the lighting actually cooperates.",
    ],
    photo: pinPhoto("hollywood-glam.jpg", "Hollywood glam makeup vanity with a large LED-lit mirror and plush stool", 577, 1024, "https://www.pinterest.com/pin/1141169993093440252/", "Hollywood Glam Makeup Vanity"),
  },
  {
    n: "02",
    title: "Minimalist and Calm",
    paras: [
      "A minimalist vanity suits anyone who finds clutter more stressful than a bad eyeliner day. Everything on it earns its spot, with nothing extra competing for attention.",
      "A slim desk or floating vanity, neutral colors like white, beige or soft wood, and hidden storage keep visual noise to a minimum.",
      "A simple mirror without a heavy frame finishes the look. If calm had a physical form in a bedroom, this would be it.",
    ],
    photo: pinPhoto("minimalist.jpg", "Minimalist makeup vanity with a rounded LED mirror and clean lines", 683, 1024, "https://www.pinterest.com/pin/1069393874031292075/", "Minimalist Makeup Vanity"),
  },
  {
    n: "03",
    title: "Small Space, Still Luxurious",
    paras: [
      "Limited square footage doesn't mean limited style. A vanity squeezed into a bedroom corner can still feel genuinely elevated.",
      "A wall-mounted mirror saves surface space, a narrow desk fits into a tight corner, and vertical storage keeps everything accessible without eating floor space.",
      "Light colors visually expand the area further &mdash; walls can carry a lot of the load that floor space otherwise would.",
    ],
    photo: pinPhoto("small-space.jpg", "Small space makeup vanity with wall-mounted mirror and vertical storage", 736, 981, "https://www.pinterest.com/pin/35043703345148395/", "Small Space Makeup Vanity"),
  },
  {
    n: "04",
    title: "Vintage-Inspired, Full of Character",
    paras: [
      "A vintage vanity brings real soul into a room in a way a brand-new piece rarely manages. An old wooden desk repurposed as a vanity can feel instantly special.",
      "An ornate mirror frame, a distressed wood finish, classic drawer pulls, and soft warm lighting all build that lived-in charm.",
      "Modern vanities look sleek, but a vintage one tells an actual story &mdash; which one feels more fitting depends entirely on the room it's going in.",
    ],
    photo: pinPhoto("vintage-inspired.jpg", "Vintage-inspired makeup vanity with an ornate mirror frame and distressed wood finish", 736, 912, "https://www.pinterest.com/pin/68891069300430843/", "Vintage Makeup Vanity"),
  },
  {
    n: "05",
    title: "Modern With Built-In Storage",
    paras: [
      "For anyone who finds organization genuinely satisfying, this style hides the mess while still looking polished.",
      "Deep drawers hold palettes, compartmentalized sections keep smaller items sorted, and soft-close drawers mean no slamming during an early morning routine.",
      "Built-in cable management for hot tools matters more than it sounds like it would &mdash; tangled cords and overflowing drawers kill the whole vibe fast.",
    ],
    photo: pinPhoto("modern-storage.jpg", "Modern makeup vanity with built-in deep storage drawers", 667, 1000, "https://www.pinterest.com/pin/38280665579364630/", "Modern Makeup Vanity With Storage"),
  },
  {
    n: "06",
    title: "Boho, Warm and Relaxed",
    paras: [
      "A boho vanity reads as effortless, even though the look actually takes real intention &mdash; it just hides the planning well.",
      "Natural wood or rattan furniture, a round or irregularly shaped mirror, and soft neutral tones build the foundation.",
      "A plant or two adds freshness and keeps the whole setup feeling more like self-care than a task to get through.",
    ],
    photo: pinPhoto("boho.jpg", "Boho makeup vanity with rattan furniture and a round mirror", 736, 920, "https://www.pinterest.com/pin/103371753947652642/", "Boho Makeup Vanity"),
  },
  {
    n: "07",
    title: "Bedroom Corner, Seamlessly Blended",
    paras: [
      "Not every vanity needs to announce itself. Sometimes the goal is a setup that blends quietly into the rest of the bedroom.",
      "Matching the vanity's finishes to the surrounding furniture, using a compact mirror, and sticking to the room's existing color palette keep it from standing out.",
      "Subtle lighting finishes the integration &mdash; if guests don't immediately clock it as a dedicated vanity, it's working exactly as intended.",
    ],
    photo: pinPhoto("bedroom-corner.jpg", "Bedroom corner makeup vanity blended seamlessly into the room's existing decor", 490, 735, "https://www.pinterest.com/pin/261982903311730356/", "Bedroom Corner Makeup Vanity"),
  },
  {
    n: "08",
    title: "Glam Meets Practical",
    paras: [
      "This style balances looks and function in equal measure, which makes it a strong fit for anyone who wants visual appeal without a daily mess to deal with.",
      "Open shelves display the favorites &mdash; perfumes, a nice candle &mdash; while drawers tuck away anything bulkier out of sight.",
      "The mirror still acts as the focal point, and the lighting stays soft but genuinely effective. No need to choose between pretty and practical when a setup like this covers both.",
    ],
    photo: pinPhoto("glam-practical.jpg", "Makeup vanity balancing open display shelves with closed storage drawers", 683, 1024, "https://www.pinterest.com/pin/1266706141661053/", "Glam and Practical Makeup Vanity"),
  },
  {
    n: "09",
    title: "A True Statement Piece",
    paras: [
      "Some vanities don't blend in at all &mdash; they show up and demand real attention. This works best when the rest of the room stays calm and neutral around it.",
      "A uniquely shaped mirror creates real visual impact, and a bold color or marble finish adds the drama.",
      "Keeping the surrounding decor minimal stops the room from feeling overloaded, and sleek seating balances out the boldness of the vanity itself.",
    ],
    photo: pinPhoto("statement-vanity.jpg", "Statement makeup vanity with a bold marble finish and unique mirror shape", 566, 1024, "https://www.pinterest.com/pin/1196337404171610/", "Statement Makeup Vanity"),
  },
  {
    n: "10",
    title: "Budget-Friendly, Looks Expensive",
    paras: [
      "A genuinely gorgeous vanity doesn't require a big budget. Smart choices matter far more than the price tag attached to any individual piece.",
      "A simple desk as the base, with the mirror upgraded instead of the furniture, does most of the heavy lifting.",
      "Affordable LED lighting and a few trays or organizers for styling finish the look. If it looks good and functions well, nobody's checking the receipt.",
    ],
    photo: pinPhoto("budget-friendly.jpg", "Budget-friendly makeup vanity styled to look expensive with LED lighting", 717, 1024, "https://www.pinterest.com/pin/16888567448348870/", "Budget-Friendly Makeup Vanity"),
  },
  {
    n: "11",
    title: "Luxury, Inspired by High-End Hotels",
    paras: [
      "Hotel vanities always feel intentional &mdash; everything sits exactly where it should, with nothing extraneous cluttering the surface.",
      "Clean elegance and premium finishes drive the whole look. A large frameless mirror, a soft neutral palette and high-quality seating are the core pieces.",
      "Subtle warm lighting finishes it off. Real luxury doesn't shout here &mdash; it whispers, and it still feels genuinely elevated.",
    ],
    photo: pinPhoto("luxury-hotel.jpg", "Luxury makeup vanity inspired by high-end hotel design with a frameless mirror", 683, 1024, "https://www.pinterest.com/pin/1337074888516714/", "Luxury Hotel-Inspired Makeup Vanity"),
  },
  {
    n: "12",
    title: "Floating, Modern and Airy",
    paras: [
      "A floating vanity creates instant visual space, which makes it a strong pick for anyone chasing a modern look without heavy furniture underneath.",
      "It keeps the floor visually open, feels considerably lighter than a traditional vanity, and simplifies cleaning since there's no base to work around.",
      "It also allows for more flexible seating, since nothing bulky is anchoring the floor space beneath it. Once a floating vanity is in place, a heavy traditional one starts to feel unnecessary.",
    ],
    photo: photo("floating.jpg", "Floating makeup vanity with open floor space underneath for a modern, airy feel", 692, 960),
  },
  {
    n: "13",
    title: "Dual-Purpose Desk and Vanity",
    paras: [
      "When space is genuinely tight, one surface doing double duty as both a desk and a vanity solves more problems than adding separate furniture ever would.",
      "Drawer organizers keep makeup and work items from blending together, and a foldable mirror tucks away when the desk needs to be a desk again.",
      "Neutral decor works for both functions, and a genuinely comfortable chair supports the longer stretches either task might require.",
    ],
    photo: photo("dual-purpose.jpg", "Dual-purpose desk and makeup vanity setup with a foldable mirror", 736, 920),
  },
  {
    n: "14",
    title: "Custom-Designed for the Routine",
    paras: [
      "A custom vanity feels special because it's built around actual habits rather than a generic routine someone else designed.",
      "Drawer height tailored for palettes, mirror size and placement chosen deliberately, and lighting brightness dialed in specifically all make a real difference.",
      "This option works best for anyone who already knows exactly what their routine needs. When a vanity fits that routine precisely, getting ready stops feeling like a chore.",
    ],
  },
  {
    n: "15",
    title: "Built Around Natural Light",
    paras: [
      "Natural light changes everything about how makeup actually looks once it leaves the house, which makes planning a vanity near a window worth real consideration.",
      "Placing the vanity perpendicular to a window, rather than facing directly into or away from it, gives the most even, accurate light for application.",
      "Sheer curtains soften harsh daylight, a mirror helps bounce available light further into the space, and soft LEDs pick up the slack for evening use.",
    ],
    photo: photo("natural-light.jpg", "Makeup vanity positioned to take advantage of natural window light", 576, 1024),
  },
  {
    n: "16",
    title: "Personalized to Actually Feel Like You",
    paras: [
      "This is the idea that matters most in the long run. Trends come and go, but personal style is what actually sticks.",
      "A vanity should feel like it belongs to the person using it, not like a copy of someone else's setup pulled straight from a feed.",
      "Displaying favorite perfumes, adding a framed photo or small piece of art, and choosing colors that are genuinely loved rather than trending all build toward that. A vanity that makes its owner happy has already succeeded.",
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
<p>A makeup routine deserves better than a bathroom counter crowded with toothpaste and someone else's toiletries. A dedicated vanity changes the whole experience &mdash; better lighting, actual storage, and a spot that feels like it was built for the routine instead of just tolerating it.</p>
<p>What makes a vanity genuinely gorgeous comes down to three things: lighting that actually works, storage that looks as good as it functions, and a style that fits the room instead of fighting it. Get those right and the rest is just personal taste.</p>
${photo("hero.jpg", "Beautifully styled makeup vanity with flattering lighting and organized storage", 736, 1104)}

<h2>What Actually Makes a Vanity Work</h2>
<p>Lighting is the single element most likely to make or break the whole setup &mdash; even, flattering light beats a beautiful mirror with bad bulbs every time. Storage needs to pull its weight too, hiding the daily clutter without making anything harder to actually find. And the style should match the room it's going into, not an unrelated aesthetic borrowed from somewhere else entirely.</p>
${pinPhoto("intro-matters.jpg", "Well-lit makeup vanity demonstrating the essentials of a functional setup", 576, 1024, "https://www.pinterest.com/pin/328622104081132100/", "Makeup Vanity Essentials")}

<h2>16 Makeup Vanity Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these sixteen styles is the objectively correct one &mdash; the best vanity is whichever setup actually matches the space, the budget, and the routine it needs to support.</p>
<p>Choose what feels right, not what's trending this week. A vanity that genuinely reflects its owner's taste will always outlast whatever's popular at the moment.</p>
`;

module.exports = { body };
