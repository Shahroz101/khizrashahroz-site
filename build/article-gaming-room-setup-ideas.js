// Body content for "12 Gaming Room Setup Ideas for Teens". Photos carried
// over from the source article. Several of the source's photo/idea
// pairings were mismatched relative to what the photos actually show —
// its "Cozy" photo was a dark monochrome room, and its "Minimalist" photo
// was a busy Call-of-Duty-themed bedroom. Reassigned photos based on what
// they actually depict: the dark monochrome shot now illustrates "Black
// and White," a warm figure-shelf photo (originally paired with "Smart")
// now illustrates "Cozy," and idea 05 was renamed from "Minimalist" to
// match a clean navy/gray setup with one neon accent rather than force a
// busy photo into a minimalist claim. Idea 12 (Smart) runs without a
// photo as a result — a single gap at the very end of the list, not
// adjacent to any other gap. Condensed 5 heavily padded intro H2/H3
// sections down to 2, and dropped the source's large post-list "Common
// Mistakes" / "How to Upgrade Over Time" bonus sections entirely.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "gaming-room-setup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "gaming-room-setup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "RGB Setup",
    paras: [
      "RGB setups stay popular for one simple reason: they look incredible. Yes, some people call RGB lighting excessive, but those same people are usually sitting under a flat ceiling light that belongs in a waiting room.",
      "The trick to making RGB actually look good instead of chaotic is balance &mdash; stick to two main colors, matching peripherals, and indirect lighting rather than every light source going its own direction.",
      "A glowing PC case paired with a clean desk mat, like the orange-lit tower and dual monitors shown here, proves that RGB can look genuinely premium instead of overwhelming when it's done with restraint.",
    ],
    photo: pinPhoto("rgb-setup.jpg", "Dual monitor gaming desk setup with an orange and red RGB-lit PC tower, mechanical keyboard and desk speakers in a dark room", 1400, 934, "https://www.pinterest.com/pin/14355292557496283/", "RGB Gaming Room Setup"),
  },
  {
    n: "02",
    title: "Black and White Setup",
    paras: [
      "This style never fails. A black and white gaming room feels sleek, modern, and mature without trying too hard, and it photographs beautifully whenever it ends up on camera.",
      "The formula is simple: black furniture adds depth, white or gray walls keep the room from feeling heavy, and a single accent light carries whatever personality the room needs.",
      "An illuminated display shelf against dark monochrome walls, like the one shown here with wall-mounted controllers as art, is proof this look can hold up for years without ever feeling dated.",
    ],
    photo: pinPhoto("monochrome-setup.jpg", "Dark gray monochrome gaming bedroom with wall-mounted game controllers as decor, an illuminated display shelf and a gray bed", 794, 1058, "https://www.pinterest.com/pin/3025924743787806/", "Black and White Gaming Room"),
  },
  {
    n: "03",
    title: "Cozy Setup",
    paras: [
      "Not everyone wants their room to feel like a spaceship cockpit. Some teens just want a setup that feels relaxing to come home to after school, and that's exactly where a cozy build shines.",
      "Texture is what makes a room feel warm instead of cold &mdash; soft lighting, collected figures or keepsakes on a shelf, and warm wood tones all layer together instead of competing.",
      "Warm shelf lighting glowing behind action figures and games, like the setup shown here next to an easy chair and a lamp-lit bed, feels considerably easier on the eyes during long sessions than cold blue LEDs ever do.",
    ],
    photo: pinPhoto("cozy-warm-setup.jpg", "Cozy warm-toned gaming room with a curved monitor, string lights glowing behind a shelf of collectible figures and games, and a gaming chair beside a bed", 576, 1024, "https://www.pinterest.com/pin/16536723628406091/", "Cozy Warm-Toned Gaming Room"),
  },
  {
    n: "04",
    title: "Anime-Inspired Setup",
    paras: [
      "Anime gaming rooms exploded in popularity for good reason &mdash; they combine personality, color, and creativity in a way a generic setup just can't match.",
      "The move is to commit to one theme rather than mixing a dozen different aesthetics together. Pick one favorite series, one color palette, and matching posters, and the whole thing reads as intentional instead of cluttered.",
      "A wall of character posters and art, like the one shown here surrounding a dual-tone RGB desk and a row of plushies, shows exactly how far one consistent theme can carry a room.",
    ],
    photo: pinPhoto("anime-setup.jpg", "Anime-themed gaming desk setup with a curved RGB monitor, keyboard, plush toys and anime character posters on the wall", 576, 1024, "https://www.pinterest.com/pin/864691197277518202/", "Anime-Inspired Gaming Setup"),
  },
  {
    n: "05",
    title: "Clean Setup With One Statement Light",
    paras: [
      "Not every teen wants aggressive RGB or a dozen competing accessories. A clean, cool-toned setup proves that restraint can look just as striking as a full light show.",
      "The approach is simple: keep the palette tight &mdash; navy, gray, and black work well together &mdash; and let one single statement piece carry the whole room instead of ten smaller ones competing for attention.",
      "A glowing neon circle sign anchoring an otherwise simple navy-and-gray corner desk, like the one shown here, is exactly that kind of restraint. One bold element, everything else quiet.",
    ],
    photo: pinPhoto("modern-accent-setup.jpg", "Clean navy and gray gaming bedroom with a glowing neon circle sign on a padded accent wall above a corner desk and gaming chair", 683, 1024, "https://www.pinterest.com/pin/211174979077420/", "Modern Gaming Room With Neon Accent"),
  },
  {
    n: "06",
    title: "Neon Setup",
    paras: [
      "Neon setups feel bold, energetic, and ready for a close-up in the best possible way. The key is using neon accents strategically instead of turning the whole room into a glowing traffic sign.",
      "Electric blue, pink, purple, and cyan tend to work best, and custom neon signs &mdash; a gamer tag, a lightning bolt, a favorite quote &mdash; instantly make a setup feel one-of-a-kind.",
      "A wall of custom neon logos layered over gaming posters, like the ones shown here glowing red and blue against a dark room, is neon at its most confident &mdash; loud, but still clearly intentional.",
    ],
    photo: pinPhoto("neon-setup.jpg", "Dark gaming bedroom with multiple custom neon signs glowing red and blue above gaming posters and a wall-mounted TV", 500, 625, "https://www.pinterest.com/pin/565272190750289548/", "Neon Gaming Room Setup"),
  },
  {
    n: "07",
    title: "Small Bedroom Setup",
    paras: [
      "A small room calls for strategy, not sacrifice. Some of the best gaming setups online exist inside tiny bedrooms precisely because the owner was forced to design intelligently.",
      "Compact furniture is non-negotiable here &mdash; slim desks, wall shelves instead of floor storage, and a wall-mounted TV instead of a bulky standing one all free up real floor space.",
      "A themed single-bed setup with a corner desk and wall-mounted screen, like the one shown here, proves a small footprint doesn't mean a scaled-down gaming experience.",
    ],
    photo: pinPhoto("compact-bedroom-setup.jpg", "Small bedroom gaming setup with a wall-mounted TV above a corner desk, themed wall decor and a single bed with a colorful patchwork quilt", 683, 1024, "https://www.pinterest.com/pin/355714070590604971/", "Small Bedroom Gaming Setup"),
  },
  {
    n: "08",
    title: "Dual Monitor Setup",
    paras: [
      "A dual setup sounds fancy, but it solves a genuinely practical problem for anyone who games, streams, studies, or edits video &mdash; one screen handles gameplay, the other handles everything else.",
      "Once you're used to two screens, going back to one feels almost painful. You can watch a walkthrough while playing, keep a voice chat visible, or multitask without constantly tabbing in and out.",
      "The trick to keeping it from looking chaotic is balance &mdash; matched monitor sizes and aligned heights, like the side-by-side pair shown here, read as a cohesive setup instead of two screens that just happen to share a desk.",
    ],
    photo: pinPhoto("dual-monitor-setup.jpg", "Corner gaming desk with two matched monitors side by side, a gaming chair, RGB-lit PC tower and shelves of manga and posters", 574, 1024, "https://www.pinterest.com/pin/505106914477754746/", "Dual Monitor Gaming Desk"),
  },
  {
    n: "09",
    title: "LED Shelf Lighting Setup",
    paras: [
      "Strip lighting tucked behind shelves does more for a room's atmosphere than almost any single purchase. Plain shelves feel unfinished the moment you've seen what proper backlighting can do.",
      "Running LED strips behind display shelves adds both lighting and visual depth at once &mdash; it works especially well behind collectibles, games, or figures, where the glow highlights what's actually on display.",
      "A shelf of collectible figures lit from behind in contrasting orange and blue, like the one shown here above a dual-monitor desk, turns a basic storage shelf into one of the room's best features.",
    ],
    photo: pinPhoto("led-wall-setup.jpg", "Shelves of collectible figures backlit with orange and blue LED strip lighting above a dual monitor gaming desk with a black gaming chair", 574, 1024, "https://www.pinterest.com/pin/573434965076027657/", "LED Shelf Gaming Setup"),
  },
  {
    n: "10",
    title: "Gaming-Meets-Study Setup",
    paras: [
      "Most teen bedrooms serve more than one purpose now &mdash; gaming zone, homework station, and streaming corner all at once. A good setup should support real life, not just look good in photos.",
      "Visual separation helps more than people expect &mdash; different lighting zones, a dedicated organizer, and distinct decor for each area let the brain actually switch between relaxing and focusing.",
      "A setup with motivational signage and an actual to-do list next to the gaming desk, like the one shown here, keeps both halves of the room doing their job instead of one quietly taking over the other.",
    ],
    photo: photo("study-setup.png", "Gaming desk setup with motivational wall signs, a to-do whiteboard and a separate study desk area beside a gaming chair and RGB PC tower", 683, 1024),
  },
  {
    n: "11",
    title: "Console Setup",
    paras: [
      "Not everyone wants a massive gaming PC. A console-focused room can look just as impressive while costing less and skipping the endless upgrade cycle PC building somehow normalized.",
      "Wall-mounting the TV is the single best upgrade for a console setup &mdash; it frees up desk space, improves the viewing angle, and instantly makes cable management easier.",
      "Comfortable floor seating matters more here than almost anywhere else, since console gaming usually means leaning back rather than sitting upright. A wall-mounted screen paired with deep bean bag seating, like the setup shown here, nails that completely.",
    ],
    photo: pinPhoto("console-setup.jpg", "Console gaming room with a large wall-mounted TV, an arcade machine, purple neon ceiling lighting and plush purple bean bag seating", 683, 1024, "https://www.pinterest.com/pin/413557178310748862/", "Console Gaming Room Setup"),
  },
  {
    n: "12",
    title: "Smart Setup",
    paras: [
      "Smart gaming rooms feel genuinely futuristic without needing an unreasonable budget. A few small tech upgrades go a long way toward both convenience and atmosphere.",
      "Voice-controlled lighting sounds unnecessary until you actually try it &mdash; saying \"turn gaming mode on\" and watching the whole room shift color on command feels disproportionately satisfying for how simple it is.",
      "Smart plugs, wireless chargers, and app-controlled lighting are all worth adding. Not every upgrade needs to scream \"gamer\" &mdash; the quieter tech additions often end up feeling the most genuinely useful day to day.",
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
<p>A proper gaming room setup hits differently than just a desk with a monitor on it. One good LED glow, a clean desk, and a comfortable chair can turn a boring bedroom corner into a genuine gaming zone that's actually exciting to sit in.</p>
<p>It's not only about looking good for a photo, either. A smart setup improves comfort, focus, and mood just as much as it improves aesthetics &mdash; the right room can genuinely help a teen stay organized instead of living in a snack-wrapper apocalypse.</p>
${photo("hero.jpg", "Dual monitor RGB gaming desk setup glowing orange and red with a mechanical keyboard and speakers in a dark room", 1400, 934)}

<h2>What Actually Makes a Gaming Room Setup Work</h2>
<p>A good gaming room setup comes down to five things working together: comfort, lighting, organization, personality, and performance. Skip one, and the room starts to feel incomplete no matter how much money went into it. Comfort especially gets overlooked &mdash; an adjustable chair, proper monitor height, and decent cable management matter more than almost anything else, since most teens spend hours a day in that one spot.</p>
<p>Budget matters less than people think. Some of the best gaming rooms cost surprisingly little because the owner built around one real statement piece &mdash; a bold desk, a cool chair, a neon sign &mdash; instead of buying a pile of random accessories. Lighting is the cheapest way to transform a plain room into something cinematic, and a corner desk setup can make even a tiny bedroom feel like a dedicated zone the moment you sit down.</p>
${pinPhoto("intro-corner.jpg", "Corner gaming desk setup with a teal neon light strip, pegboard organizer and dual monitor on a white desk", 576, 1024, "https://www.pinterest.com/pin/4503668374131354/", "Corner Gaming Desk Setup")}

<h2>12 Gaming Room Setup Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>The best gaming room setups balance comfort, personality, and function. A setup should feel exciting to use every single day, not just impressive in a photo &mdash; whether that means a minimal black-and-white build or a glowing RGB cave ready for a tournament, both work when the room feels genuinely intentional.</p>
<p>Start small if the budget calls for it, and add upgrades gradually. Lighting, organization, and comfort create the biggest impact fastest &mdash; everything else is just the fun part that happens over time.</p>
`;

module.exports = { body };
