// Body content for "18 Easy DIY Farmhouse-Style Bathroom Decor
// Projects". Photos carried over from the source article (AI-generated
// style, no Pinterest links, no visible credits). 17 of 18 ideas had a
// photo in the source; idea 12 (Chalkboard Labels) had none — a
// genuine gap. Rewritten out of the source's very casual, meme-heavy
// voice ("cheap AF," "chef's kiss effect") into the site's calmer,
// neutral tone.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "diy-farmhouse-bathroom-decor", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Build Your Own Wooden Vanity",
    paras: [
      "This one takes more effort than most on this list, but an old desk or dresser is a genuine head start.",
      "Cutting a hole for the sink, sealing the wood well, and finishing the surface turns a secondhand piece of furniture into a custom farmhouse vanity.",
      "A bowl-style vessel sink set into the reclaimed wood top pushes the whole look further, turning a functional fixture into the bathroom's actual centerpiece.",
    ],
    photo: photo("wooden-vanity.png", "Rustic reclaimed wood vanity built as a DIY farmhouse bathroom project", 683, 1024),
  },
  {
    n: "02",
    title: "Repurpose an Old Ladder Into a Towel Rack",
    paras: [
      "An old wooden ladder, the kind that's been sitting in a garage for years, makes a genuinely good rustic towel rack.",
      "Leaned against the wall, it creates instant vertical storage without any real building required.",
      "A coat of chalk paint, lightly distressed, pushes the look fully into farmhouse territory.",
    ],
    photo: photo("ladder-towel-rack.png", "Old wooden ladder repurposed as a rustic bathroom towel rack", 683, 1024),
  },
  {
    n: "03",
    title: "Add a Mirror Framed With Barn Door Hardware",
    paras: [
      "This idea announces \"farmhouse\" louder than almost anything else on this list.",
      "Mounting a basic mirror with sliding barn door hardware, or framing it in reclaimed wood, turns a plain mirror into something closer to a design feature.",
      "It's an easy way to make a mirror read as intentional wall art rather than just a functional fixture.",
    ],
    photo: photo("barn-door-mirror.png", "Mirror framed with barn door hardware in a farmhouse-inspired bathroom", 683, 1024),
  },
  {
    n: "04",
    title: "DIY Shiplap Walls",
    paras: [
      "For a genuine transformation without knocking down an actual wall, shiplap paneling on just one wall does a lot of visual work.",
      "Installed behind the sink or tub, it reads especially well, and painting it white or light gray keeps the whole bathroom feeling bright and airy.",
      "A single accent wall is plenty &mdash; committing to shiplap throughout the entire room risks tipping the look into something overdone.",
    ],
    photo: photo("shiplap-walls.png", "Shiplap accent wall in a serene farmhouse bathroom", 683, 1024),
  },
  {
    n: "05",
    title: "Mason Jar Wall Organizers",
    paras: [
      "Mason jars have more uses than jam and tablescapes.",
      "A few hose clamps screwed onto a wooden board, with mason jars attached and the whole thing mounted to the wall, builds an easy organizer for cotton balls, Q-tips or makeup brushes.",
      "Staining the board a rich walnut and using slightly vintage-looking jars pushes the rustic feel even further.",
    ],
    photo: photo("mason-jar-organizers.png", "Mason jar wall organizer for a farmhouse bathroom", 683, 1024),
  },
  {
    n: "06",
    title: "Reclaimed Wood Shelves",
    paras: [
      "A bathroom can rarely have too many shelves, especially rustic ones.",
      "Old wood planks, stained a warm brown and mounted with black metal brackets, create simple open shelving for rolled towels, candles or small plants.",
      "It's an easy way to fill otherwise empty wall space while adding real storage at the same time.",
    ],
    photo: photo("reclaimed-shelves.png", "Reclaimed wood shelves mounted with black metal brackets in a bathroom", 683, 1024),
  },
  {
    n: "07",
    title: "Galvanized Metal Storage Bins",
    paras: [
      "Galvanized buckets, bins or trays bring genuine country character to a bathroom.",
      "Used under the sink, on open shelves, or beside the toilet for extra rolls, they do real storage work while staying visually on-theme.",
      "A slightly dulled, worn finish reads as more authentically rustic than anything too polished or shiny.",
    ],
    photo: photo("galvanized-bins.png", "Galvanized metal storage bins in a rustic farmhouse bathroom", 683, 1024),
  },
  {
    n: "08",
    title: "Farmhouse-Style Wall Signs",
    paras: [
      "A small wooden sign with a cheeky, hand-lettered phrase remains a reliable farmhouse bathroom staple.",
      "Salvaged wood and stencils, or a pre-made wooden sign, both deliver the same cozy, barn-inspired look.",
      "Hung above the toilet or towel rack, a well-chosen sign tends to get a genuine smile out of guests.",
    ],
    photo: photo("wall-signs.png", "Farmhouse-style wooden wall sign in a cozy bathroom", 683, 1024),
  },
  {
    n: "09",
    title: "Repurposed Window Frame Wall Decor",
    paras: [
      "An old window frame, with the panes intact but the glass removed, makes a genuinely striking rustic decor piece.",
      "A mirror, dried flowers, or photos placed behind the panes turns a salvaged window into real wall art.",
      "A bit of chipped, worn paint actually helps here &mdash; the imperfections read as character rather than wear.",
    ],
    photo: photo("window-frame-decor.png", "Repurposed window frame used as rustic wall decor in a bathroom", 683, 1024),
  },
  {
    n: "10",
    title: "Woven Baskets for Storage",
    paras: [
      "Swapping plastic bins for wicker or woven baskets changes a bathroom's whole feel.",
      "Toilet paper, extra soaps or hand towels all store well inside a basket tucked under the vanity or slid onto a shelf.",
      "The natural texture adds a soft, farmhouse quality that plastic storage simply can't replicate, while still staying genuinely practical.",
    ],
    photo: photo("woven-baskets.png", "Woven storage baskets in a cozy farmhouse bathroom", 683, 1024),
  },
  {
    n: "11",
    title: "Rope-Wrapped Towel Hooks",
    paras: [
      "Basic wall hooks, wrapped in jute or thick twine, turn into something considerably more interesting than hardware-store standard.",
      "Mounted in a row, they bring a coastal-farmhouse feel to a bathroom without much actual effort or cost.",
      "It's one of the more budget-friendly projects on this entire list, which makes it an easy one to try first.",
    ],
    photo: photo("rope-towel-hooks.png", "Rope-wrapped towel hooks in a farmhouse-style bathroom", 683, 1024),
  },
  {
    n: "12",
    title: "Chalkboard Labels on Everything",
    paras: [
      "Cotton balls, bath salts and Q-tips all look more intentional once they're transferred into clear jars and labeled.",
      "Chalkboard paint or chalkboard-style stickers applied to each jar keeps the labeling consistent and genuinely farmhouse in feel.",
      "It's a small project, but it turns a cluttered counter into something that reads as organized rather than accidental.",
    ],
  },
  {
    n: "13",
    title: "Swap Lighting for Farmhouse Fixtures",
    paras: [
      "Standard builder-grade light fixtures rarely do a farmhouse bathroom any favors.",
      "Black matte metal, wood accents, or cage-style pendants all bring a cozier glow than a plain flush-mount fixture.",
      "Vintage-style Edison bulbs push the look even further &mdash; lighting genuinely changes how a whole room feels, more than most people expect.",
    ],
    photo: photo("farmhouse-fixtures.png", "Farmhouse-style light fixtures in a vintage-inspired bathroom", 683, 1024),
  },
  {
    n: "14",
    title: "DIY Wire Basket Towel Holders",
    paras: [
      "A couple of wire baskets, lined with burlap or linen and attached to the wall, build an instant towel storage solution that looks genuinely intentional.",
      "It's a simple project that transforms a pile of towels from looking tossed aside into something that reads as deliberately styled.",
      "Rustic, tidy, and easy to put together in an afternoon.",
    ],
    photo: photo("wire-basket-holders.png", "DIY wire basket towel holders mounted on a bathroom wall", 683, 1024),
  },
  {
    n: "15",
    title: "Rustic Wooden Frames",
    paras: [
      "Plain photo frames rarely do much for a bathroom's overall look.",
      "Framing a mirror or a piece of art in distressed wood instead brings genuine warmth &mdash; a whitewashed finish, rough edges, or muted gray tones all work well.",
      "It's a subtle upgrade, but one that gives the whole room a cozier, more considered feel.",
    ],
    photo: photo("rustic-frames.png", "Rustic distressed wood frame around a bathroom mirror", 683, 1024),
  },
  {
    n: "16",
    title: "Hand-Painted Bath Mat",
    paras: [
      "A plain cotton bath mat becomes a genuinely custom piece with a hand-painted pattern.",
      "Gingham, florals, or a buffalo check design, applied with fabric-safe paint and properly sealed for durability, turns an ordinary mat into something distinctive.",
      "It's an easy, low-cost way to add a bit of personality to a surface that usually goes unnoticed.",
    ],
    photo: photo("painted-bath-mat.png", "Hand-painted bath mat with a buffalo check pattern", 683, 1024),
  },
  {
    n: "17",
    title: "Ladder Shelf for Decor",
    paras: [
      "A short, squat ladder makes a genuinely useful standing shelf once propped beside a tub or sink.",
      "Towels, plants, or a few vintage finds all display well across its rungs, filling an otherwise unused corner.",
      "It brings a shabby-chic feel while still doing real functional work, which is more than most purely decorative pieces manage.",
    ],
    photo: photo("ladder-shelf.png", "Ladder shelf styled with towels and decor in a farmhouse bathroom", 683, 1024),
  },
  {
    n: "18",
    title: "Country-Style Curtains",
    paras: [
      "Florals, checks, or simple ticking stripes in a light cotton or linen fabric bring an easy farmhouse touch to a bathroom window.",
      "The same fabric works just as well hung to hide storage under the sink, giving the room a cohesive look in two different spots.",
      "It's a simple sewing project, or no sewing at all with the right pre-made curtain, that still makes a noticeable difference.",
    ],
    photo: photo("country-curtains.png", "Country-style curtains in a cozy rustic bathroom", 683, 1024),
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
<p>A farmhouse bathroom doesn't require a full renovation to pull off &mdash; most of the character comes from small, genuinely doable projects rather than anything structural. A reclaimed shelf, a repurposed ladder, a coat of chalk paint, and the room starts to feel considerably more collected.</p>
<p>None of the ideas below demand advanced woodworking skills. Most use materials that are either already sitting around the house or cheap enough to pick up for a single weekend project.</p>
${photo("hero.jpg", "Rustic reclaimed wood bathroom vanity with a vessel sink and brass fixtures", 1152, 768)}

<h2>18 DIY Farmhouse Bathroom Decor Projects</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these eighteen projects require a contractor or a big budget to pull off. A repurposed ladder, a few mason jars, or a simple coat of chalk paint can shift a plain bathroom toward genuine farmhouse character in an afternoon.</p>
<p>Starting with one or two small projects, rather than attempting the whole list at once, tends to produce a bathroom that feels collected over time rather than assembled all in a single weekend.</p>
`;

module.exports = { body };
