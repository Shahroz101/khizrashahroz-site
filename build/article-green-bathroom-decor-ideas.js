// Body content for "16 Green Bathroom Decor Ideas Worth Trying". Photos
// carried over from the source article. "Green Bathroom Lighting" and
// "Green Art and Decor" have no photo in the source; all other 14
// ideas do. Condensed a padded 3-part intro down to one short section
// with a single photo.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "green-bathroom-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "green-bathroom-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Sage Green Walls",
    paras: [
      "Sage dominates green bathroom decor for a reason &mdash; it reads as calm and timeless, and it's remarkably forgiving to live with day to day.",
      "It pairs beautifully with white tile, a wood vanity, or brass fixtures, and it works equally well for renters and homeowners since it's rarely a hard sell to the next buyer.",
      "The shade hides small imperfections and never feels loud, which makes it one of the easiest wins on this entire list.",
    ],
    photo: pinPhoto("sage-walls.jpg", "Sage green bathroom walls paired with white tile and a wood vanity", 683, 1024, "https://www.pinterest.com/pin/23151385580210656/", "Sage Green Bathroom Walls"),
  },
  {
    n: "02",
    title: "A Deep Green Accent Wall",
    paras: [
      "A single deep green wall adds real character without overwhelming the whole room. Placed behind the vanity or the tub, it changes the entire feel of the space.",
      "Forest green, emerald, and hunter green all work, as long as the rest of the room stays lighter to balance the depth of color.",
      "White sinks and mirrors keep the space grounded against the boldness &mdash; a bathroom is allowed to feel a little dramatic.",
    ],
    photo: pinPhoto("deep-accent-wall.jpg", "Deep green accent wall behind a bathroom vanity balanced with white fixtures", 683, 1024, "https://www.pinterest.com/pin/954129871062592055/", "Deep Green Accent Wall Bathroom"),
  },
  {
    n: "03",
    title: "Green Tile",
    paras: [
      "Green tile reads as rich and intentional the moment it goes in, and it elevates a bathroom almost instantly compared to a standard white tile job.",
      "Glossy subway tile, zellige tile, and matte ceramic all bring something slightly different to the look &mdash; glossy catches light, matte adds depth.",
      "Used in the shower, as a backsplash, or across a full wall, green tile adds visual richness without actually adding clutter.",
    ],
    photo: pinPhoto("green-tile.jpg", "Green subway tile used in a bathroom shower for a bold, intentional look", 683, 1024, "https://www.pinterest.com/pin/77476056087285106/", "Green Tile Bathroom"),
  },
  {
    n: "04",
    title: "A Green Vanity",
    paras: [
      "A green vanity grounds the whole bathroom and acts as a focal point without overwhelming everything around it &mdash; a strong option for anyone who wants color without repainting a single wall.",
      "White countertops, gold or black hardware, and neutral flooring all pair naturally with it.",
      "It reads as bold but balanced, and it genuinely hides wear better than a plain white vanity does over time.",
    ],
    photo: photo("green-vanity.jpg", "Green bathroom vanity paired with white countertops and gold hardware", 683, 1024),
  },
  {
    n: "05",
    title: "Plants That Actually Thrive There",
    paras: [
      "Plants and bathrooms genuinely belong together &mdash; the humidity most bathrooms naturally have helps a lot of common houseplants thrive without extra effort.",
      "Pothos, snake plants and ferns all tolerate bathroom conditions especially well, and a little humidity goes a long way toward keeping them healthy.",
      "Placed on a shelf, the counter, or in a hanging planter, green-on-green consistently works &mdash; it's hard to find a bathroom that looks worse with plants added.",
    ],
    photo: photo("thriving-plants.jpg", "Bathroom shelf styled with thriving green houseplants like pothos and ferns", 600, 889),
  },
  {
    n: "06",
    title: "A Green Shower Curtain",
    paras: [
      "For anyone not ready to commit to paint or tile, a green shower curtain shifts the whole room's vibe with zero permanent change.",
      "A muted sage pattern, a botanical print, or a solid emerald tone all deliver real impact for very little effort or cost.",
      "Pairing it with neutral towels keeps the look from feeling overloaded &mdash; a simple swap that genuinely changes the mood of the room.",
    ],
    photo: pinPhoto("shower-curtain.jpg", "Green patterned shower curtain adding color to a bathroom without permanent changes", 600, 797, "https://www.pinterest.com/pin/20266267069099828/", "Green Shower Curtain"),
  },
  {
    n: "07",
    title: "Green Accessories That Tie the Room Together",
    paras: [
      "Small details do more work than people give them credit for. Green accessories reinforce the theme quietly, without ever shouting for attention.",
      "A soap dispenser, a toothbrush holder, and a storage tray in a consistent green shade build cohesion across the whole counter.",
      "Sticking to one shade of green across these smaller pieces matters &mdash; too many different greens together starts to feel messy rather than intentional.",
    ],
    photo: pinPhoto("accessories.jpg", "Green glass bathroom accessories including a soap dispenser and storage tray", 736, 736, "https://www.pinterest.com/pin/402087073002659679/", "Green Bathroom Accessories"),
  },
  {
    n: "08",
    title: "Green and Gold for Real Luxury",
    paras: [
      "Green and gold together simply reads as expensive. Gold hardware against a green vanity turns an ordinary morning routine into something that feels noticeably more elevated.",
      "This combination works best with dark green walls, soft lighting, and minimal surrounding clutter to let the pairing actually shine.",
      "Gold warms up green in a way that adds real elegance &mdash; it's the closest thing to bringing hotel-bathroom energy home.",
    ],
    photo: pinPhoto("green-gold.jpg", "Green and gold bathroom decor with marble tile for a luxury look", 736, 1104, "https://www.pinterest.com/pin/954129871063805393/", "Green and Gold Bathroom"),
  },
  {
    n: "09",
    title: "Green and White for a Fresh Look",
    paras: [
      "Green and white together create a clean, classic combination that almost never misses, especially in a smaller bathroom that needs some brightness.",
      "White handles the tile, the fixtures, and the ceiling, while green takes the walls or a handful of accents.",
      "The contrast keeps the whole space feeling crisp and balanced &mdash; proof that the simplest color pairing is often the strongest one.",
    ],
    photo: photo("green-white.jpg", "Green and white bathroom decor combination for a fresh, classic look", 564, 843),
  },
  {
    n: "10",
    title: "Green Paired With Wood",
    paras: [
      "Green and wood feel genuinely natural together, adding warmth to a green bathroom without making it feel heavy.",
      "A wood floating shelf, a wood-framed mirror, or a wood vanity cabinet all soften the green around them.",
      "This combination works especially well in a modern or Scandinavian-style bathroom, where nature-inspired pairings tend to land best.",
    ],
    photo: photo("wood-accents.jpg", "Green bathroom with wood floating shelves and a wood-framed mirror", 736, 980),
  },
  {
    n: "11",
    title: "Bold Green Wallpaper",
    paras: [
      "Wallpaper intimidates a lot of people, but green wallpaper transforms a bathroom almost instantly once it's actually up.",
      "A floral print, a palm leaf pattern, or an abstract green texture all read as intentional rather than overwhelming.",
      "Keeping the rest of the decor simple lets the walls do the talking &mdash; sometimes the bold choice is the one that pays off most.",
    ],
    photo: pinPhoto("wallpaper.jpg", "Bold green botanical wallpaper transforming a powder room", 736, 920, "https://www.pinterest.com/pin/1407443630508763/", "Green Wallpaper Bathroom"),
  },
  {
    n: "12",
    title: "Lighting That Enhances Green",
    paras: [
      "Lighting changes how green actually reads in a room more than almost any other factor, and bad lighting can undo otherwise good decor fast.",
      "Warm bulbs soften a dark green, enhance any olive undertones, and avoid the harsh shadows that cooler bulbs tend to create.",
      "Layering in sconces or a pendant alongside the main fixture lets green genuinely thrive instead of looking flat or muddy under a single overhead light.",
    ],
  },
  {
    n: "13",
    title: "Green Towels and Textiles",
    paras: [
      "Textiles are one of the lowest-risk ways to bring green into a bathroom &mdash; towels, a bath mat, or a robe add both comfort and color.",
      "A matching towel set, soft textures, and a muted green tone keep the look cohesive without committing to anything permanent.",
      "This approach works especially well in an already-neutral bathroom, adding warmth without touching the walls or fixtures at all.",
    ],
    photo: photo("textiles.jpg", "Green towels and soft textiles adding color to a neutral bathroom", 612, 1024),
  },
  {
    n: "14",
    title: "Green for Small Spaces",
    paras: [
      "Small bathrooms genuinely benefit from green more than people expect &mdash; a light green shade opens up the space visually in a way white alone often can't match.",
      "A mirror amplifies the effect further, bouncing both light and color around the tight footprint.",
      "Light green walls, vertical storage, and minimal added decor keep a small bathroom feeling interesting without making it feel any more cramped.",
    ],
    photo: pinPhoto("small-spaces.jpg", "Light green paint color used to open up a small bathroom visually", 562, 700, "https://www.pinterest.com/pin/3940718420864667/", "Green Small Bathroom"),
  },
  {
    n: "15",
    title: "Green With Black Accents",
    paras: [
      "Green and black together create real contrast and edge, landing as modern and confident in a way softer pairings don't.",
      "Black works well on fixtures, mirror frames, and hardware, letting the green carry the rest of the room's color.",
      "Balancing the black with a lighter green keeps the combination from feeling too heavy &mdash; bold, but still controlled.",
    ],
    photo: pinPhoto("black-accents.jpg", "Green bathroom with black fixtures and hardware for a modern contrast", 559, 1024, "https://www.pinterest.com/pin/563018699337113/", "Green and Black Bathroom"),
  },
  {
    n: "16",
    title: "Green Art and Personal Decor",
    paras: [
      "Art personalizes a bathroom faster than almost anything else, and green-themed pieces tie the rest of the decor together without much extra effort.",
      "Botanical illustrations, abstract green art, or straightforward nature photography all fit the theme naturally.",
      "Keeping the frames simple lets the art complement the space rather than compete with it &mdash; the personality comes through either way.",
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
<p>Green keeps showing up in bathrooms for good reason &mdash; it feels calm without tipping into boring, brings a sense of nature indoors instantly, and works across almost any design style from rustic to sleek and modern.</p>
<p>Choosing the right shade matters more than most people expect. Light green opens up a smaller space, while a deeper tone adds real drama in a larger one. A warmer green leans cozy and inviting, while a cooler green feels crisper and more contemporary &mdash; both work, just for different moods.</p>
${photo("hero.jpg", "Beautifully styled green bathroom with natural textures and warm lighting", 1312, 736)}

<h2>Why Green Works So Well in a Bathroom</h2>
<p>Green sits in a rare spot among colors &mdash; calming enough for a space meant for unwinding, but with enough depth and variation to never feel flat or boring. It also connects naturally to plants and natural materials, which makes a green bathroom feel more grounded and intentional than most other color choices manage.</p>
${pinPhoto("intro-eco.jpg", "Green bathroom embracing an eco-friendly, nature-inspired style", 683, 1024, "https://www.pinterest.com/pin/9570217953205630/", "Eco-Friendly Green Bathroom Style")}

<h2>16 Green Bathroom Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Green bathroom decor delivers because it's genuinely flexible &mdash; calm and forgiving in a light sage, dramatic and bold in a deep forest tone, and everything in between depending on how it's used.</p>
<p>None of these sixteen ideas require doing everything at once. Picking one or two that fit the space already there is enough to notice a real difference the next time that door closes behind someone.</p>
`;

module.exports = { body };
