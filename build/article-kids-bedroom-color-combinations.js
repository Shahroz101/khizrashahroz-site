// Body content for "15 Kids Bedroom Color Combinations That Actually
// Work". Photos carried over from the source article. The source
// scattered fabricated/misattributed quotes throughout (Kandinsky,
// David Hicks, William Morris, etc.) — cut entirely, not part of this
// site's voice. 14 of 15 combinations have a photo; "Lavender and
// White" has no dedicated photo in the source (the nearby photo belongs
// to a furniture section, not that specific combination). Condensed 4
// padded intro/how-to sections down to 2.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "kids-bedroom-color-combinations", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "kids-bedroom-color-combinations", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Soft Blue and Warm White",
    paras: [
      "This combination almost never fails. Soft blue creates a calm atmosphere while warm white keeps the room bright and airy, together landing somewhere peaceful without ever feeling boring.",
      "The pairing works especially well in smaller bedrooms, where it makes the space read as noticeably larger than it actually is.",
      "Natural wood furniture and beige or mustard accents round it out nicely, and a few textured blankets or woven baskets keep the room from drifting into cold, clinical territory.",
    ],
    photo: pinPhoto("soft-blue-white.jpg", "Kids bedroom in soft blue and warm white with natural wood furniture", 683, 1024, "https://www.pinterest.com/pin/27303141487599638/", "Soft Blue and White Kids Bedroom"),
  },
  {
    n: "02",
    title: "Navy Blue and Mustard Yellow",
    paras: [
      "This pairing brings real personality. Navy creates depth while mustard yellow adds warmth and energy, and together they feel bold without tipping into chaotic.",
      "Navy functions almost like a neutral here, anchoring the room and making every other color pop more than it would on its own.",
      "Keeping navy limited to one accent wall, bedding or curtains &mdash; and balancing it with white ceilings and warm lighting &mdash; keeps the room feeling cozy instead of cave-like.",
    ],
    photo: pinPhoto("navy-mustard.jpg", "Kids bedroom in navy blue and mustard yellow with a bold accent wall", 768, 1024, "https://www.pinterest.com/pin/32088216098862838/", "Navy and Mustard Kids Bedroom"),
  },
  {
    n: "03",
    title: "Sage Green and Cream",
    paras: [
      "Sage green has quietly become one of the most reliable interior colors in recent years, and it earns that reputation in kids' rooms especially well.",
      "It pairs naturally with cream furniture, light oak wood and rattan decor, and it hides fingerprints and smudges noticeably better than a stark white wall does.",
      "The palette also grows with a child remarkably well &mdash; animal prints, playful pillows and storybook shelves keep it youthful now without demanding a full redesign later.",
    ],
    photo: pinPhoto("sage-cream.jpg", "Kids bedroom in sage green and cream with rattan decor and storybook shelves", 640, 1138, "https://www.pinterest.com/pin/9992430418106172/", "Sage Green and Cream Kids Bedroom"),
  },
  {
    n: "04",
    title: "Terracotta and Cream",
    paras: [
      "Terracotta brings real warmth and personality into a kids' room, and cream softens that richness just enough to keep the space feeling bright rather than heavy.",
      "It suits neutral furniture, boho-inspired decor and woven textures especially well, landing as grounded and welcoming rather than themed.",
      "Terracotta pairs best with olive green, beige, rust and warm wood tones &mdash; cooler colors tend to clash with its warmth, so it's worth keeping the rest of the palette warm too.",
    ],
    photo: pinPhoto("terracotta-cream.jpg", "Kids bedroom in terracotta and cream with warm wood tones and boho decor", 1024, 1024, "https://www.pinterest.com/pin/108508672268957293/", "Terracotta and Cream Kids Bedroom"),
  },
  {
    n: "05",
    title: "Dusty Pink and Light Gray",
    paras: [
      "This combination feels soft and genuinely sophisticated, without drifting into the overly sweet territory that brighter pinks tend to land in.",
      "Dusty pink reads as muted and calming on its own, while light gray balances the warmth and keeps the room from feeling overly feminine.",
      "Velvet cushions, gold accents and natural wood toys add the layering that makes the room feel considered, and a single dusty pink accent wall works just as well as painting the whole room.",
    ],
    photo: pinPhoto("dusty-pink-gray.jpg", "Kids bedroom in dusty pink and light gray with velvet cushions and gold accents", 683, 1024, "https://www.pinterest.com/pin/3870349675574526/", "Dusty Pink and Gray Kids Bedroom"),
  },
  {
    n: "06",
    title: "Mint Green and Coral",
    paras: [
      "Mint green and coral create a genuinely cheerful room without overwhelming the space &mdash; energetic in a happy way rather than a chaotic one.",
      "Mint green cools the room down while coral brings the warmth and excitement, and the balance between the two feels natural rather than fought-for.",
      "Using mint as the dominant wall color and bringing coral in through pillows, artwork and bedding keeps the combination from tipping past its sweet spot.",
    ],
    photo: pinPhoto("mint-coral.jpg", "Kids bedroom in mint green and coral with white furniture and open shelving", 701, 1024, "https://www.pinterest.com/pin/742390319865865965/", "Mint and Coral Kids Bedroom"),
  },
  {
    n: "07",
    title: "Gray and Yellow",
    paras: [
      "Gray and yellow remain one of the most dependable combinations out there, balancing calm and energy in a way that works across a surprisingly wide age range.",
      "Gray grows with a child extremely well, while yellow keeps the space feeling youthful without requiring a repaint every couple of years.",
      "Yellow works best as an accent &mdash; pillows, lamps, storage baskets &mdash; while keeping the larger surfaces gray or white so the room stays genuinely relaxing rather than loud.",
    ],
    photo: pinPhoto("gray-yellow.jpg", "Kids bedroom in gray and yellow with yellow accent pillows and storage baskets", 683, 1024, "https://www.pinterest.com/pin/33636328462195433/", "Gray and Yellow Kids Bedroom"),
  },
  {
    n: "08",
    title: "Sky Blue and Soft Beige",
    paras: [
      "This one feels calm, airy and genuinely timeless. Sky blue brings freshness while soft beige adds warmth, and together they land as one of the safest long-term choices on this list.",
      "It's a strong pick for anyone who wants something stylish without needing to chase a new trend every six months.",
      "Wooden furniture, beige rugs and soft cream curtains round it out, and a little cloud or nature-inspired decor adds charm without disrupting the calm.",
    ],
    photo: pinPhoto("sky-blue-beige.jpg", "Kids bedroom in sky blue and soft beige with wooden furniture and cream curtains", 585, 1024, "https://www.pinterest.com/pin/310185493111132979/", "Sky Blue and Beige Kids Bedroom"),
  },
  {
    n: "09",
    title: "Blush Pink and Sage Green",
    paras: [
      "This pairing feels soft, elegant, and considerably more modern than either color reads on its own. Blush pink adds warmth while sage green brings balance and freshness.",
      "The muted tones keep the whole palette feeling calm rather than sugary, which is exactly why so many modern nursery and kids' room designs have moved toward this combination.",
      "White furniture, gold accents, woven textures and botanical decor round it out, and playful elements like animal-shaped cushions keep it from skewing too grown-up.",
    ],
    photo: pinPhoto("blush-sage.jpg", "Kids bedroom in blush pink and sage green with botanical decor and white furniture", 868, 850, "https://www.pinterest.com/pin/4362930884760734/", "Blush Pink and Sage Green Kids Bedroom"),
  },
  {
    n: "10",
    title: "Teal and White",
    paras: [
      "Teal brings energy and a touch of sophistication at the same time, and white keeps everything feeling clean and fresh around it.",
      "Because teal sits between blue and green, it reads as calming yet vibrant in a way few single colors manage &mdash; a strong fit for coastal-inspired rooms or tween spaces.",
      "Using teal carefully on an accent wall, bedding or shelving, then balancing it with white walls and natural wood, keeps the color from darkening the room more than intended.",
    ],
    photo: pinPhoto("teal-white.jpg", "Kids bedroom in teal and white with a teal accent wall and natural wood furniture", 576, 1024, "https://www.pinterest.com/pin/3307399722306748/", "Teal and White Kids Bedroom"),
  },
  {
    n: "11",
    title: "Peach and Beige",
    paras: [
      "Peach and beige create one of the warmest, happiest combinations available for a kids' space, feeling sunny without ever tipping into too bright.",
      "Peach adds gentle warmth and energy, while beige grounds everything, which makes the pairing especially effective in a room with limited natural light.",
      "Beige walls, peach bedding, cream curtains and wooden furniture keep it cohesive, and a little textured fabric or subtle rainbow decor adds charm without disrupting the calm.",
    ],
    photo: pinPhoto("peach-beige.jpg", "Kids bedroom in peach and beige with wooden furniture and cream curtains", 575, 1024, "https://www.pinterest.com/pin/293859944460494518/", "Peach and Beige Kids Bedroom"),
  },
  {
    n: "12",
    title: "Lavender and White",
    paras: [
      "Lavender creates a genuinely magical atmosphere without ever feeling overly dramatic, and white keeps the whole palette fresh and airy around it.",
      "It reads as colorful without being loud, which is part of why lavender has quietly taken over the spot bright purple used to hold.",
      "Silver accents, soft gray decor and pale pink textiles all pair well here &mdash; the key is keeping bright purple to a minimum so the room doesn't start to feel like a candy aisle.",
    ],
  },
  {
    n: "13",
    title: "Olive Green and Warm White",
    paras: [
      "Olive green adds real depth while warm white keeps the room soft and balanced, landing as earthy, calming and more versatile than it might sound at first.",
      "It connects naturally with nature-inspired decor, and it hides everyday wear and tear noticeably better than lighter wall colors do.",
      "Wooden toys, linen bedding and warm lighting all work well against it, and nature-themed artwork or a few woven baskets soften the richness of the green nicely.",
    ],
    photo: pinPhoto("olive-white.jpg", "Kids bedroom in olive green and warm white with wooden toys and woven baskets", 577, 1024, "https://www.pinterest.com/pin/1113233601667772097/", "Olive Green and White Kids Bedroom"),
  },
  {
    n: "14",
    title: "Aqua Blue and Sand Beige",
    paras: [
      "Aqua blue instantly brightens a room, while sand beige keeps everything warm and relaxed around it, creating a beachy, carefree feeling kids tend to gravitate toward.",
      "The combination works especially well in small bedrooms, coastal-inspired spaces, or shared sibling rooms that get plenty of natural sunlight.",
      "Beige walls with aqua accents, white furniture and a few natural textures keep it feeling fresh and open &mdash; no oversized nautical decor required to make the theme land.",
    ],
    photo: pinPhoto("aqua-beige.jpg", "Kids bedroom in aqua blue and sand beige with a coastal-inspired feel", 683, 1024, "https://www.pinterest.com/pin/73042825199842064/", "Aqua Blue and Beige Kids Bedroom"),
  },
  {
    n: "15",
    title: "Charcoal Gray and Soft Orange",
    paras: [
      "This pairing feels modern, energetic and just slightly unexpected. Charcoal gray brings sophistication while soft orange adds warmth and personality on top of it.",
      "The contrast works especially well for older kids and tween bedrooms, reading as cool without trying too hard to get there.",
      "Keeping orange to bedding, accent chairs or artwork, while leaving the larger surfaces gray, white or beige, maintains the balance before it tips into overwhelming.",
    ],
    photo: pinPhoto("charcoal-orange.jpg", "Kids bedroom in charcoal gray and soft orange with orange accent bedding", 576, 1024, "https://www.pinterest.com/pin/8796161768449421/", "Charcoal Gray and Orange Kids Bedroom"),
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
<p>Picking the right color combination for a kids' bedroom feels more stressful than it should. One week it's a dreamy Pinterest-worthy palette, the next it's a sudden declaration that they "only like neon green now." Kids react strongly to color even when they can't explain why &mdash; bright tones energize them, soft ones calm them down, and the right balance keeps a room from feeling overwhelming.</p>
<p>The color combination matters more than the furniture, every time. A budget room with the right palette feels intentional; an expensive one with clashing shades feels like a toy store exploded. None of the combinations below need a design degree to pull off &mdash; just a dominant color, a secondary tone, and a little restraint on the accents.</p>
${photo("hero.jpg", "Colorful kids bedroom showing a thoughtfully chosen color palette", 1400, 934)}

<h2>How to Actually Choose a Combination</h2>
<p>Start with the child's personality rather than this week's favorite cartoon. A quiet reader tends to do well with something like sage green and cream, while a high-energy kid often gravitates toward navy with mustard accents. The classic 60-30-10 split keeps any combination from feeling chaotic: 60% dominant color on the walls, 30% secondary color on bedding or furniture, 10% accent color in the smaller details.</p>
<p>Natural light changes everything, too. A darker room needs lighter tones to open it up, while a bright, sunny room can handle something deeper like forest green or navy without feeling heavy. And if longevity matters, keep anything trendy &mdash; lavender and peach, neon combinations &mdash; confined to pillows, rugs and wall art, and let the walls themselves stay timeless.</p>
${pinPhoto("intro-mood.jpg", "Kids bedroom demonstrating a balanced color combination with a dominant, secondary and accent color", 640, 1024, "https://www.pinterest.com/pin/2744449770077730/", "Balanced Kids Bedroom Color Palette")}

<h2>15 Kids Bedroom Color Combinations</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>The best kids bedroom color combinations balance personality, comfort and practicality all at once &mdash; fun enough for a child to love, calm enough to actually sleep in. Soft blue and white create calm, sage green and cream feel timeless, navy and mustard bring bold personality. Every pairing sets a completely different mood.</p>
<p>At the end of the day, the right palette is whichever one makes the room feel happy, safe and comfortable for the kid actually living in it &mdash; that matters far more than matching whatever's trending this month.</p>
`;

module.exports = { body };
