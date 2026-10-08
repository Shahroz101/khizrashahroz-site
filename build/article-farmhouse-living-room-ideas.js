// Body content for "10 Farmhouse Living Room Ideas for a Rustic and
// Cozy Feel". Photos carried over from the source article (AI-
// generated style, no Pinterest links, no visible credits). All 10
// ideas had a photo in the source (several had 2); all kept. Distinct
// from the existing white-farmhouse-decor-ideas (whole-home, white-
// specific) and black-farmhouse-living-room-ideas (living-room,
// black-specific) — this covers general farmhouse living room elements
// with no particular color focus. One idea ("Woven Baskets for
// Storage") brushes a similarly-named idea in white-farmhouse-decor-
// ideas; written distinctly for a living-room-specific context here.
// Rewritten out of the source's slightly stilted, repetitive "Imagine
// ..." phrasing into the site's natural, calmer voice.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "farmhouse-living-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Neutral Color Palette",
    paras: [
      "A neutral color scheme sits at the center of most comfortable farmhouse living rooms, creating a gentle, timeless backdrop that rarely feels dated.",
      "Shades of white, beige, taupe and soft gray build a laid-back, harmonious environment while still giving rustic wood tones, vintage decor and comfortable textiles a place to stand out.",
      "Layering a few varying neutral tones and materials across the room keeps the space feeling open and spacious rather than flat.",
    ],
    photo: photo("neutral-palette.jpg", "Serene farmhouse living room with a neutral color palette", 683, 1024),
  },
  {
    n: "02",
    title: "Reclaimed Wood Coffee Table",
    paras: [
      "A reclaimed wood coffee table adds warmth, character and a genuine sense of history to a farmhouse living room.",
      "Built from salvaged wood, these tables highlight rustic appeal through natural imperfections that a factory-made table simply can't replicate, while also giving old material a meaningful second life.",
      "Set on a woven jute rug or paired with cozy linen upholstery, a reclaimed wood table reinforces the farmhouse look without needing anything else in the room to match it.",
    ],
    photo: photo("coffee-table-a.jpg", "Reclaimed wood coffee table in a warm farmhouse living room", 683, 1024) + photo("coffee-table-b.jpg", "Reclaimed wood coffee table styled with a woven rug and linen seating", 683, 1024),
  },
  {
    n: "03",
    title: "Oversized Cozy Sofas",
    paras: [
      "A large, genuinely comfortable sofa works as the central piece of most farmhouse living rooms, balancing comfort and design in equal measure.",
      "Soft textiles, deep seats and fluffy cushions invite actual use rather than just display, and neutral-toned linen or cotton slipcovers reinforce the farmhouse feel.",
      "Large throw pillows and a knit blanket layered on top add warmth and texture, making the sofa the room's natural gathering point.",
    ],
    photo: photo("oversized-sofas.jpg", "Oversized cozy sofa in a farmhouse-style living room", 683, 1024),
  },
  {
    n: "04",
    title: "Shiplap Accent Wall",
    paras: [
      "A shiplap accent wall brings rustic texture and depth to a living room in a way flat drywall simply can't.",
      "The simple lines and soft grooves create a lived-in effect that works equally well alongside modern or vintage furniture.",
      "Painted a clean white for a fresh, airy feel, or left in its natural wood tone for something more rustic, shiplap also makes an ideal backdrop for displaying art or a fireplace.",
    ],
    photo: photo("shiplap-wall-a.jpg", "Shiplap accent wall in a cozy farmhouse living room", 683, 1024) + photo("shiplap-wall-b.jpg", "Shiplap accent wall as a backdrop for a fireplace", 683, 1024),
  },
  {
    n: "05",
    title: "Vintage-Inspired Lighting",
    paras: [
      "Vintage-inspired lighting does genuine work adding character and warmth to a farmhouse living room.",
      "Industrial-style sconces, lantern-style pendant lights and rustic chandeliers all bring a bit of history and craftsmanship into the room, while mason jar lights or wrought iron fixtures push the character even further.",
      "Paired with shiplap walls and exposed wood beams, warm, soft lighting pulls the whole room together into something that feels both considered and genuinely welcoming.",
    ],
    photo: photo("vintage-lighting-a.jpg", "Vintage-inspired lighting fixture in a farmhouse living room", 683, 1024) + photo("vintage-lighting-b.jpg", "Vintage-inspired chandelier glowing warmly in a farmhouse living room", 683, 1024),
  },
  {
    n: "06",
    title: "Distressed Wood Mantel",
    paras: [
      "A distressed wood mantel makes a genuinely striking focal point in a farmhouse living room.",
      "The worn, imperfect surface gives the space a sense of history and character that a smooth, new mantel can't replicate, and it pairs well with brick, stone or shiplap as a backdrop.",
      "Arranged with seasonal decor, a few candles, or simple styled objects, a distressed mantel reinforces the farmhouse look without requiring much else in the room to work around it.",
    ],
    photo: photo("distressed-mantel-a.jpg", "Distressed wood mantel in a cozy farmhouse living room", 683, 1024) + photo("distressed-mantel-b.jpg", "Distressed wood mantel styled with seasonal decor above a fireplace", 683, 1024),
  },
  {
    n: "07",
    title: "Rustic Wooden Beams",
    paras: [
      "Rustic wooden beams bring real timeless appeal to a farmhouse living room, and they make a space feel cozy and grounded almost instantly.",
      "The natural texture and imperfections in these beams, whether original to the house or added later, add genuine character overhead.",
      "Paired with shiplap walls, a neutral palette and vintage-inspired decor, exposed beams give a ceiling depth it would otherwise be missing entirely.",
    ],
    photo: photo("wooden-beams.jpg", "Rustic wooden beams adding character to a farmhouse living room", 683, 1024),
  },
  {
    n: "08",
    title: "Layered Textures With Rugs",
    paras: [
      "Layered rugs bring warmth, depth and a genuinely homey farmhouse feel to a living room floor.",
      "Starting with a large natural-fiber rug like sisal or jute as a base, then layering a softer, patterned rug on top &mdash; a Persian or a plush wool piece &mdash; builds real visual richness underfoot.",
      "The combination feels both comfortable and considered, turning a plain floor into one of the room's quieter design features.",
    ],
    photo: photo("layered-rugs.jpg", "Layered rugs with varied textures in a farmhouse living room", 683, 1024),
  },
  {
    n: "09",
    title: "Barn Doors for a Rustic Touch",
    paras: [
      "Barn doors bring classic farmhouse appeal and genuine utility together in one piece.",
      "A sliding design, exposed hardware and worn wood make them a stylish substitute for a conventional door, whether used decoratively or to actually separate the living room from an adjacent space.",
      "Reclaimed wood leans toward an authentic, well-worn look, while a smoother painted finish suits a more modern farmhouse direction.",
    ],
    photo: photo("barn-doors.jpg", "Rustic barn door in a cozy farmhouse living room entrance", 683, 1024),
  },
  {
    n: "10",
    title: "Woven Baskets for Storage",
    paras: [
      "Woven baskets are close to essential in a farmhouse living room, offering genuine storage alongside a bit of rustic texture.",
      "Made from wicker, seagrass or rattan, they add warmth without looking purely utilitarian &mdash; large baskets hold throw blankets and cushions, while smaller ones work well for books, magazines or everyday items.",
      "Placed beside the sofa, tucked under a console table, or set on open shelves, they give the room simple, good-looking storage that doesn't need to be hidden away.",
    ],
    photo: photo("woven-baskets-a.jpg", "Woven storage baskets in a cozy farmhouse living room", 683, 1024) + photo("woven-baskets-b.jpg", "Woven baskets styled beside a sofa in a farmhouse living room", 683, 1024),
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
<p>A farmhouse living room works because it balances two things that don't always go together easily: genuine comfort and real character. The best versions feel lived-in rather than staged, built from natural materials and a bit of history rather than anything too polished.</p>
<p>None of the ideas below require a full renovation to bring into a room. Most work as individual additions &mdash; a rug, a set of baskets, a lighting swap &mdash; layered in one piece at a time.</p>
${photo("hero.jpg", "Neutral farmhouse living room with shiplap walls and a reclaimed wood coffee table", 1152, 768)}

<h2>10 Farmhouse Living Room Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Bringing farmhouse character into a living room comes down to building a space that feels cozy, inviting and effortlessly put together, rather than chasing every rustic trend at once.</p>
<p>Starting with one or two elements that genuinely appeal &mdash; a reclaimed wood table, a layered rug, a vintage light fixture &mdash; and building outward from there tends to produce a room that feels collected over time rather than assembled in a single weekend.</p>
`;

module.exports = { body };
