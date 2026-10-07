// Body content for "14 Bathroom Trends Actually Worth Following This Year".
// Photos carried over from the source article. The hero photo (a matte
// black freestanding tub against white subway tile) is the exact same
// file the source also used for its "Matte Black and Brushed Brass"
// idea — downloaded a second time and credited there. Idea 13
// (Sustainable Choices) has no photo in the source. Condensed 3 padded
// intro sections down to 2.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-design-trends", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-design-trends", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Walk-In Showers Taking Over for Traditional Tubs",
    paras: [
      "Walk-in showers have quietly become the default choice in most bathroom remodels, and it's not just a style preference &mdash; stepping over a tub wall gets old fast, especially for anyone thinking long-term about accessibility.",
      "The best versions skip the glass-everywhere look in favor of one clean panel, a wide rain showerhead, and a bench or niche built right into the wall instead of added on later.",
      "A curbless entry, like the one shown here, makes the whole bathroom read as larger, since there's no visual break between the shower floor and the rest of the room.",
    ],
    photo: pinPhoto("walk-in-showers.jpg", "Walk-in glass shower with a wide rain showerhead and tiled bench built into the wall", 464, 745, "https://www.pinterest.com/pin/442267625929370895/", "Walk-In Shower Trend"),
  },
  {
    n: "02",
    title: "Warm Neutrals Pushing Cool Gray Out",
    paras: [
      "Cool gray dominated bathrooms for years, but it's losing ground fast to warmer neutrals &mdash; think soft taupe, warm beige, and off-white with a hint of cream rather than blue undertones.",
      "The shift comes down to how the room actually feels to stand in. Warm tones read as calmer and more inviting, where gray can start to feel clinical the moment the lighting isn't perfect.",
      "A small bathroom in warm beige, like the one shown here, proves the palette doesn't sacrifice any of that crisp, clean feeling gray used to own.",
    ],
    photo: pinPhoto("warm-neutrals.jpg", "Small bathroom in warm beige tile with matching beige walls and brass fixtures", 559, 1024, "https://www.pinterest.com/pin/117164027801555130/", "Warm Neutral Bathroom"),
  },
  {
    n: "03",
    title: "Matte Black and Brushed Brass Fixtures",
    paras: [
      "Chrome spent a long time as the safe, default fixture finish. Matte black and brushed brass have taken over that role instead, and both read as noticeably more intentional.",
      "Matte black works especially well as an anchor &mdash; a black tub, black fixtures, or a black-framed mirror grounds a mostly white or neutral bathroom instantly.",
      "A matte black freestanding tub against white subway tile, like the one shown here, with a built-in dark niche and a single black pendant overhead, shows exactly how far one finish choice can carry a whole room.",
    ],
    photo: pinPhoto("matte-black-brass.jpg", "Matte black freestanding tub against white subway tile with a dark built-in niche shelf and black pendant light", 735, 689, "https://www.pinterest.com/pin/8444318044916843/", "Matte Black Bathroom Fixtures"),
  },
  {
    n: "04",
    title: "Natural Materials Bringing in Real Warmth",
    paras: [
      "Wood, stone, and other natural materials have become the fastest way to keep a bathroom from feeling sterile, especially once tile and fixtures lean toward cooler, more minimal palettes.",
      "A wood vanity, a stone-look countertop, or even a single woven basket softens a room that would otherwise read as entirely hard surfaces.",
      "The goal isn't to recreate a spa brochure. It's picking one or two natural materials and letting them do real work instead of scattering small touches everywhere.",
    ],
    photo: pinPhoto("natural-materials.jpg", "Bathroom vanity in natural wood tones paired with stone-look tile and warm lighting", 736, 904, "https://www.pinterest.com/pin/2111131072398562/", "Natural Materials in Bathroom Design"),
  },
  {
    n: "05",
    title: "Open Shelving Styled With Actual Purpose",
    paras: [
      "Open shelving in a bathroom only works when it's genuinely styled, not just a place where loose bottles end up. Done right, it adds real warmth and personality to a room that's otherwise mostly hard surfaces.",
      "Stick to a tight color palette &mdash; folded towels, a plant, one or two ceramic pieces &mdash; and resist the urge to fill every inch of the shelf.",
      "A simple open shelf like the one shown here, with rolled towels and a small plant kept to a clean, consistent palette, proves restraint reads as far more expensive than a fully loaded shelf ever does.",
    ],
    photo: pinPhoto("open-shelving.jpg", "Open bathroom shelf styled with rolled towels and a small plant in a neutral palette", 720, 960, "https://www.pinterest.com/pin/28077197665448151/", "Styled Open Bathroom Shelving"),
  },
  {
    n: "06",
    title: "Spa-Inspired Bathrooms That Still Feel Warm",
    paras: [
      "Spa-style bathrooms are everywhere this year, but the versions that actually work avoid the cold, sterile look spa design used to default to.",
      "The real formula is warm lighting, soft rounded edges, natural materials, and a genuinely restrained color palette &mdash; not an all-white room with nothing in it.",
      "A few plants, a stack of folded towels, and one or two considered objects, like the setup shown here, make the difference between a bathroom that feels like a retreat and one that just feels empty.",
    ],
    photo: pinPhoto("spa-inspired.jpg", "Spa-style bathroom with warm lighting, rounded tub edges and a few styled accessories on the tub ledge", 736, 919, "https://www.pinterest.com/pin/703756188754675/", "Spa-Inspired Bathroom Styling"),
  },
  {
    n: "07",
    title: "Statement Tile That Adds Real Personality",
    paras: [
      "Statement tile has become one of the easiest ways to make a bathroom feel custom without touching the layout at all. A bold pattern, an unexpected color, or a mix of shapes does most of the work on its own.",
      "The trick is containing it &mdash; one statement wall, a shower surround, or a floor pattern reads as intentional, while covering every surface starts to compete with itself.",
      "Pick one statement moment and let everything else in the room stay quiet. That contrast is what makes the tile actually stand out.",
    ],
    photo: pinPhoto("statement-tile.jpg", "Bathroom wall with bold patterned statement tile against otherwise simple white fixtures", 576, 1024, "https://www.pinterest.com/pin/1548181186210626/", "Statement Bathroom Tile"),
  },
  {
    n: "08",
    title: "Freestanding Tubs as the New Centerpiece",
    paras: [
      "Built-in tubs are increasingly getting replaced by freestanding ones, and it's less about soaking and more about what the tub does for the room visually &mdash; it becomes the obvious focal point the second you walk in.",
      "A freestanding tub also frees up the floor plan. Without a surround to build around, the whole layout gets more flexible.",
      "An all-white freestanding tub like the one shown here, kept simple against equally simple walls, shows how much presence the shape alone can add without needing a single other design move.",
    ],
    photo: pinPhoto("freestanding-tub.jpg", "White freestanding acrylic bathtub positioned as the centerpiece of a simple, uncluttered bathroom", 736, 736, "https://www.pinterest.com/pin/981151468829265643/", "Freestanding Bathtub Trend"),
  },
  {
    n: "09",
    title: "Textured Walls Creating Quiet Depth",
    paras: [
      "Flat painted walls are giving way to texture &mdash; venetian plaster, ribbed tile, fluted panels &mdash; anything that catches light differently depending on the angle you're looking from.",
      "Texture adds depth without adding color or pattern, which makes it one of the lowest-risk ways to make a neutral bathroom feel considerably more expensive.",
      "It works especially well paired with a tight, neutral palette, letting the texture itself become the main visual interest instead of competing with busy color choices.",
    ],
    photo: pinPhoto("textured-walls.jpg", "Bathroom wall with ribbed textured tile catching light at an angle", 736, 981, "https://www.pinterest.com/pin/14918242508328191/", "Textured Bathroom Wall Trend"),
  },
  {
    n: "10",
    title: "Smart Technology People Actually Use",
    paras: [
      "Smart bathroom tech used to feel gimmicky, but the features sticking around now are the genuinely useful ones &mdash; touchless faucets, heated floors, and fog-free mirrors rather than anything that needs an app to operate.",
      "The best smart upgrades disappear into the design instead of announcing themselves. A touchless faucet looks like any other faucet until you actually use it.",
      "It's worth being selective here. A bathroom overloaded with gadgets ages faster than one with just one or two features that genuinely make the daily routine easier.",
    ],
    photo: pinPhoto("smart-tech.jpg", "Touchless brass bathroom faucet with a built-in LED temperature display", 736, 736, "https://www.pinterest.com/pin/4600638232316242688/", "Smart Touchless Bathroom Faucet"),
  },
  {
    n: "11",
    title: "Moody, Dark Color Palettes",
    paras: [
      "Dark bathrooms have moved from bold statement to genuinely mainstream choice, and the appeal is obvious once you see one done well &mdash; they read as luxurious in a way all-white rooms rarely manage.",
      "Charcoal walls, deep green cabinetry, or even a fully black shower surround all work, especially paired with warm lighting that keeps the space from feeling like a cave.",
      "A moody bathroom with a wood vanity and a walk-in shower, like the one shown here, proves dark doesn't have to mean small-feeling &mdash; good lighting and a few lighter materials keep it balanced.",
    ],
    photo: pinPhoto("moody-palette.jpg", "Moody dark bathroom with a wood vanity, walk-in shower and warm lighting", 683, 1024, "https://www.pinterest.com/pin/955889089674602389/", "Moody Dark Bathroom Palette"),
  },
  {
    n: "12",
    title: "Floating Vanities That Open Up the Floor",
    paras: [
      "Floating vanities have become the go-to move for making a bathroom feel larger without actually changing its square footage. The visible floor space underneath does more visual work than people expect.",
      "Beyond the size trick, they're genuinely easier to clean around and give small bathrooms a cleaner, more modern feel almost instantly.",
      "A simple floating vanity like the one shown here, left open underneath with just a woven basket for storage, shows how much lighter the whole room can feel with one swap.",
    ],
    photo: pinPhoto("floating-vanity.jpg", "Floating bathroom vanity with open space underneath and a woven storage basket", 683, 1024, "https://www.pinterest.com/pin/740912576240586377/", "Floating Vanity Bathroom Trend"),
  },
  {
    n: "13",
    title: "Personalized Bathrooms Over Copy-Paste Design",
    paras: [
      "The showroom-perfect, every-bathroom-looks-identical era is fading. What's replacing it is more personal &mdash; a vintage mirror, an unexpected color, art on the walls, details that wouldn't show up in a catalog.",
      "It's a reaction to how easy it's become to copy a Pinterest board exactly. A bathroom with a few genuinely personal choices stands out specifically because it doesn't look mass-produced.",
      "A bathroom styled with personal touches like the one shown here, mixing in real art and objects instead of matching sets, is the clearest sign of where bathroom design is actually headed.",
    ],
    photo: pinPhoto("personalized.jpg", "Bathroom styled with personal touches including framed art and mixed decor objects instead of a matching set", 720, 960, "https://www.pinterest.com/pin/103019910221474995/", "Personalized Bathroom Styling"),
  },
  {
    n: "14",
    title: "Sustainable Choices Built In From the Start",
    paras: [
      "Sustainability has moved from a niche add-on to something clients ask for upfront &mdash; low-flow fixtures, water-saving toilets, and durable materials chosen to last rather than get replaced in five years.",
      "It's not just about water bills, either. Materials that hold up well over time mean fewer renovations down the line, which ends up being the more sustainable choice either way.",
      "Even small swaps add up &mdash; an efficient showerhead or a better-sealed window does real work without changing how the bathroom looks or feels day to day.",
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
<p>Bathrooms have quietly become one of the most redesigned rooms in the house, and it's not just about chasing a trend for its own sake. People are spending real time in there &mdash; morning routines, long showers after a hard day &mdash; and the design is finally starting to reflect that.</p>
<p>What's changing isn't just the finishes. It's the whole approach: comfort and real function now matter as much as how a bathroom photographs, and the best examples this year come from actual homes, not just showroom displays.</p>
${photo("hero.jpg", "Matte black freestanding tub against white subway tile with a dark built-in niche and black pendant light", 735, 689)}

<h2>What's Actually Driving Bathroom Design This Year</h2>
<p>Every trend below shares one thing in common: it makes the bathroom feel more like a retreat and less like a utility room. Warm materials, intentional lighting, and genuinely useful technology are replacing the cold, catalog-perfect look that dominated for years.</p>
<p>None of these require a full gut renovation, either. A finish swap, a styled shelf, or one statement material can shift the whole feel of the room without touching the layout.</p>
${pinPhoto("intro-retreats.jpg", "Bathroom styled as a personal retreat with warm lighting and natural textures", 683, 1024, "https://www.pinterest.com/pin/377880225007021914/", "Bathroom as a Personal Retreat")}

<h2>14 Bathroom Trends Worth Following This Year</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these trends ask for a full remodel to feel their impact. A finish change, a styled shelf, or one material swap can shift an entire bathroom's mood without touching a single wall.</p>
<p>Pick the two or three that actually match how the bathroom gets used day to day, rather than trying to force all fourteen into one room. The ones that last are the ones that solve a real problem, not just the ones that photograph well.</p>
`;

module.exports = { body };
