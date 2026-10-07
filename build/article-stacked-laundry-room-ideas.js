// Body content for "17 Stacked Laundry Room Ideas Worth Copying".
// Photos carried over from the source article. "Industrial-Style" and
// "Luxe Stacked Laundry Room With Wallpaper" have no photo in the
// source; the other 15 ideas do. Distinct sub-topic (vertical stacked
// configuration specifically) from the already-published laundry-room
// and laundry-room-ideas-effortless, which cover general laundry
// styling rather than the stacked-unit footprint specifically.
// Condensed a padded 3-part intro down to 1.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "stacked-laundry-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "stacked-laundry-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Closet-Style With Sliding Doors",
    paras: [
      "This setup works wonders in an apartment or a bedroom closet, hiding the machines entirely when guests come over.",
      "Sliding doors save the swing space a hinged door would eat up, and they keep noise genuinely contained while a load runs.",
      "Wood or frosted glass doors look intentional rather than like a last-minute fix, and a motion-sensor light inside the closet is a small addition worth adding from the start.",
    ],
    photo: pinPhoto("closet-style.jpg", "Closet-style stacked washer and dryer with sliding doors", 683, 1024, "https://www.pinterest.com/pin/1829656094967498/", "Closet-Style Stacked Laundry Room"),
  },
  {
    n: "02",
    title: "Built-In Cabinet Surround",
    paras: [
      "Custom cabinetry instantly elevates a stacked setup, framing the washer and dryer so they read as furniture instead of appliances.",
      "Upper cabinets hide detergent and supplies, while lower drawers hold laundry baskets within easy reach.",
      "The whole unit stops looking like equipment and starts looking like it was designed into the room from the beginning.",
    ],
    photo: pinPhoto("cabinet-surround.jpg", "Built-in cabinet surround framing a stacked washer and dryer", 736, 916, "https://www.pinterest.com/pin/70437490005603/", "Built-In Cabinet Surround"),
  },
  {
    n: "03",
    title: "Open Shelving Above the Units",
    paras: [
      "For anyone who prefers things visible and easy to grab, open shelving above a stacked unit keeps detergent and supplies within arm's reach.",
      "It's affordable, flexible, and especially useful in a genuinely small space where cabinetry isn't an option.",
      "Wood shelves add warmth, while metal brackets lean more industrial &mdash; either way, keeping the load light avoids any unwanted gravity lessons.",
    ],
    photo: pinPhoto("open-shelving.jpg", "Open shelving mounted above a stacked washer and dryer", 736, 869, "https://www.pinterest.com/pin/4433299630183050/", "Open Shelving Above Stacked Laundry"),
  },
  {
    n: "04",
    title: "Narrow Hallway Setup",
    paras: [
      "A hallway can genuinely work as a laundry spot, which opens up real options for a home without a dedicated room.",
      "Compact stacked machines, shallow shelves, and wall-mounted lighting all fit a narrow footprint without crowding the walkway.",
      "A hallway can transform into a fully functional laundry zone with the right planning, even in a surprisingly tight space.",
    ],
    photo: pinPhoto("narrow-hallway.jpg", "Stacked laundry machines fitted into a narrow hallway setup", 569, 1024, "https://www.pinterest.com/pin/1618549859649947/", "Narrow Hallway Stacked Laundry"),
  },
  {
    n: "05",
    title: "Bathroom Combo",
    paras: [
      "This pairing sounds controversial at first, but it genuinely works well given the shared plumbing already in place.",
      "Easy water access and efficient use of square footage make the bathroom a surprisingly logical spot for a stacked unit.",
      "Keeping everything properly sealed and ventilated matters most here &mdash; nobody wants steamy towels and damp socks sharing the same air.",
    ],
    photo: pinPhoto("bathroom-combo.jpg", "Stacked washer and dryer combined into a bathroom layout", 736, 981, "https://www.pinterest.com/pin/1266706139030588/", "Bathroom Stacked Laundry Combo"),
  },
  {
    n: "06",
    title: "Minimalist White",
    paras: [
      "Sometimes simple genuinely wins. White cabinets, white machines, and clean lines keep a stacked laundry spot feeling fresh and timeless.",
      "The look avoids ever feeling dated, which matters in a utility space that doesn't get redesigned often.",
      "It also makes a small room feel noticeably bigger, which is rarely a downside in a tight laundry footprint.",
    ],
    photo: pinPhoto("minimalist-white.jpg", "Minimalist white stacked laundry room with clean lines", 736, 1019, "https://www.pinterest.com/pin/77546424826407697/", "Minimalist White Stacked Laundry"),
  },
  {
    n: "07",
    title: "Moody and Dark, for Drama",
    paras: [
      "Laundry doesn't have to feel boring or purely utilitarian. Dark cabinetry pushes the space in a completely different direction.",
      "Matte black hardware and warm lighting finish the look, turning a chore zone into something with genuine atmosphere.",
      "Folding clothes in a moody, well-lit space ends up feeling oddly luxurious &mdash; an unexpected upgrade for a room nobody usually designs around.",
    ],
    photo: pinPhoto("moody-dark.jpg", "Moody dark stacked laundry room with matte black hardware", 701, 1024, "https://www.pinterest.com/pin/4292562140956460/", "Moody Dark Stacked Laundry Room"),
  },
  {
    n: "08",
    title: "With a Folding Station",
    paras: [
      "This single addition changes the whole experience of doing laundry in a stacked setup.",
      "A countertop placed above front-loading machines reduces wrinkles, speeds up the whole process, and saves real strain on the back.",
      "Once a proper folding surface is in place, going back to folding on a bed or couch stops feeling like an option.",
    ],
    photo: photo("folding-station.jpg", "Stacked laundry room with a built-in folding station countertop", 736, 736),
  },
  {
    n: "09",
    title: "Scandinavian-Inspired",
    paras: [
      "Clean, calm and genuinely functional, a Scandinavian approach suits a stacked laundry spot especially well.",
      "Light wood tones, neutral colors, and minimal clutter keep the whole space feeling peaceful rather than purely utilitarian.",
      "It sounds almost absurd until it's actually experienced, but a calm laundry space genuinely changes how the chore feels day to day.",
    ],
    photo: pinPhoto("scandinavian.jpg", "Scandinavian-inspired stacked laundry room with light wood tones", 572, 1024, "https://www.pinterest.com/pin/25684660370975237/", "Scandinavian Stacked Laundry Room"),
  },
  {
    n: "10",
    title: "With Hidden Storage Nooks",
    paras: [
      "In a stacked setup, every single inch genuinely counts, and hidden storage nooks make the most of what's otherwise wasted space.",
      "Pull-out shelves, slim side cabinets, and a vertical storage tower all tuck into gaps that would otherwise sit empty.",
      "These small details turn an already tight footprint into a genuine storage powerhouse.",
    ],
    photo: photo("hidden-storage.jpg", "Stacked laundry room with hidden pull-out storage nooks", 736, 981),
  },
  {
    n: "11",
    title: "Industrial-Style",
    paras: [
      "This look leans fully into raw, unfinished materials rather than hiding them.",
      "Exposed pipes, metal shelving, and a concrete or tile floor all build that industrial character.",
      "It suits a basement or a loft-style home especially well, where the rest of the space already leans toward exposed, utilitarian materials.",
    ],
  },
  {
    n: "12",
    title: "Family-Friendly Setup",
    paras: [
      "For a household with kids, planning the laundry space around them specifically saves real daily friction.",
      "Labeled baskets, easy-access shelves at a reachable height, and genuinely durable finishes all hold up to real family use.",
      "A well-designed system here saves both time and arguments, which matters more in a busy household than almost anything else.",
    ],
    photo: pinPhoto("family-friendly.jpg", "Family-friendly stacked laundry room with labeled storage baskets", 683, 1024, "https://www.pinterest.com/pin/7740630605944099/", "Family-Friendly Stacked Laundry Room"),
  },
  {
    n: "13",
    title: "Combined With a Mudroom",
    paras: [
      "Pairing a stacked unit with a mudroom is close to a genius move for handling daily mess.",
      "It catches dirty clothes immediately, keeps mess contained to one zone, and adds real efficiency to the daily routine coming in and out of the house.",
      "Hooks, a bench, and extra storage all add to the impact here &mdash; the mudroom-laundry combo earns its keep fast.",
    ],
    photo: pinPhoto("mudroom.jpg", "Stacked laundry room combined with a mudroom featuring hooks and benches", 683, 1024, "https://www.pinterest.com/pin/1618549864559508/", "Stacked Laundry Mudroom Combo"),
  },
  {
    n: "14",
    title: "Budget-Friendly Makeover",
    paras: [
      "Custom cabinetry isn't actually required to pull off a genuinely good-looking stacked laundry spot.",
      "A peel-and-stick backsplash, some open shelving, and new lighting deliver real visual impact for very little cost.",
      "Small, well-planned changes add up to results that read as considerably more expensive than they actually were.",
    ],
    photo: pinPhoto("budget-makeover.jpg", "Budget-friendly stacked laundry room makeover with affordable upgrades", 736, 981, "https://www.pinterest.com/pin/68748734209/", "Budget-Friendly Stacked Laundry Makeover"),
  },
  {
    n: "15",
    title: "Luxe, With Wallpaper",
    paras: [
      "Wallpaper genuinely belongs in a laundry room, despite how that might sound at first.",
      "It adds real personality, elevates a small space instantly, and creates visual interest that paint alone rarely manages.",
      "Choosing a washable wallpaper is worth the small extra cost &mdash; living dangerously isn't really the goal in a room that handles this much moisture.",
    ],
  },
  {
    n: "16",
    title: "With Pull-Out Hampers",
    paras: [
      "This setup keeps clutter genuinely under control by giving dirty clothes a designated, hidden spot.",
      "It streamlines the whole workflow and keeps the space looking clean even mid-laundry-pile.",
      "Built-in hampers make the entire process feel organized before a single load even starts.",
    ],
    photo: pinPhoto("pull-out-hampers.jpg", "Stacked laundry room with built-in pull-out hampers", 500, 740, "https://www.pinterest.com/pin/18507048522161342/", "Stacked Laundry Pull-Out Hampers"),
  },
  {
    n: "17",
    title: "Ultra-Compact for Tiny Homes",
    paras: [
      "Small doesn't have to mean useless, even in a genuinely tiny footprint.",
      "Slim machines, vertical storage, and wall-mounted accessories make the most of a space smaller than most closets.",
      "A setup smaller than a standard closet can genuinely outperform a full-size laundry room when the design is actually thought through.",
    ],
    photo: pinPhoto("ultra-compact.jpg", "Ultra-compact stacked laundry setup designed for a tiny home", 680, 1024, "https://www.pinterest.com/pin/633387443037772/", "Ultra-Compact Stacked Laundry Room"),
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
<p>Stacked washer and dryer setups keep showing up everywhere for a simple reason &mdash; they free up real floor space in a home that doesn't have a spare room to dedicate to laundry alone.</p>
<p>They work in real homes too, not just staged showrooms. A closet, a hallway, even a corner of a bathroom can become a fully functional laundry spot once the unit goes vertical instead of side by side.</p>
${photo("hero.jpg", "Stylish stacked washer and dryer laundry setup with smart storage", 1600, 1067)}

<h2>What to Think About First</h2>
<p>Ventilation and access matter more in a stacked setup than people expect &mdash; the dryer still needs proper airflow, and both machines need to stay genuinely reachable for loading and unloading. Noise control isn't optional either, especially when the unit sits inside a closet near a bedroom or living space.</p>
${pinPhoto("intro-space.jpg", "Stacked laundry setup designed to save real floor space", 720, 960, "https://www.pinterest.com/pin/68748386738/", "Space-Saving Stacked Laundry Setup")}

<h2>17 Stacked Laundry Room Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A stacked laundry setup doesn't have to feel like a compromise. With the right planning, it can genuinely outperform a full-size laundry room while using a fraction of the floor space.</p>
<p>Start with whatever configuration actually fits the space available, then layer in storage and style from there. Function first, always &mdash; the style follows naturally once the layout actually works.</p>
`;

module.exports = { body };
