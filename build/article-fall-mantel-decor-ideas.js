// Body content for "18 Fall Mantel Decor Ideas to Try This Season". Photos
// carried over from the source article, Pinterest pin links preserved.
// One source photo (fall-mantel-decor-3.jpg) was dropped: it actually
// showed a coffee-table candle tray, not a mantel, so it didn't belong
// under this article's subject. 6 ideas have no photo in the source — a
// genuine gap, confirmed via document-order heading-to-figure mapping.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-mantel-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-mantel-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Hang a Fall Wreath Above the Fireplace",
    paras: [
      "A wreath gives the whole fireplace an instant focal point, with almost none of the usual mantel-styling effort.",
      "Something built from eucalyptus, dried leaves, berries or wheat, in muted autumn tones, reads as fall without tipping into costume territory.",
      "Keeping the mantel underneath simple &mdash; a couple of candlesticks, a pumpkin or two, maybe a small vase &mdash; lets the wreath stay the clear star, and the approach works especially well on a mantel with limited shelf space to begin with.",
    ],
    photo: pinPhoto("fall-wreath.jpg", "Fall wreath hung above a fireplace mantel with simple autumn styling underneath", 683, 1024, "https://www.pinterest.com/pin/299770918970807311/", "Fall Wreath Above the Fireplace"),
  },
  {
    n: "02",
    title: "Style a Moody Brown Fall Mantel",
    paras: [
      "Brown has quietly become one of the stronger fall decorating colors, and a mantel is a genuinely good place to lean into it.",
      "Chocolate brown, caramel, cream and aged brass combine into a rich autumn palette &mdash; brown ceramic pumpkins, amber glass and a few dried branches round it out.",
      "It brings real warmth without leaning on the expected bright orange, and the deeper tones photograph beautifully once the lanterns and candles are lit.",
    ],
    photo: pinPhoto("moody-brown.jpg", "Moody brown fall mantel styled with dried leaves, lanterns, pumpkins and candles", 640, 853, "https://www.pinterest.com/pin/2322237302797524/", "Moody Brown Fall Mantel"),
  },
  {
    n: "03",
    title: "Layer a Fall Garland With Mini Pumpkins",
    paras: [
      "A leafy garland draped loosely across the mantel, rather than pulled into a straight line, is one of the most reliable fall mantel moves out there.",
      "Small pumpkins tucked throughout the greenery, mixed in cream, muted orange and brown so the colors feel naturally connected, add the rest of the seasonal feeling.",
      "A few pinecones or dried berries between the pumpkins build in extra texture, and keeping the pumpkin sizes varied &mdash; three or five, never a uniform row &mdash; makes the whole arrangement look considerably more natural.",
    ],
    photo: pinPhoto("garland-pumpkins.jpg", "Fall garland with mini pumpkins and fairy lights draped across a wood mantel", 687, 1024, "https://www.pinterest.com/pin/173107179426145686/", "Fall Garland With Mini Pumpkins"),
  },
  {
    n: "04",
    title: "Try Black and Cream Fall Decor",
    paras: [
      "Fall mantel decor doesn't actually require orange to read as autumnal.",
      "Black candlesticks, ivory pumpkins, cream pottery and a touch of subtle brown foliage build a genuinely sophisticated combination instead.",
      "One small rust or terracotta accent keeps a bit of traditional fall color in the mix if the display starts to feel too stark &mdash; the whole look suits a modern home especially well, since it introduces seasonal warmth without pushing the room toward full rustic.",
    ],
  },
  {
    n: "05",
    title: "Try Rustic Farmhouse Fall Mantel Decor",
    paras: [
      "For a farmhouse-leaning fall mantel, wood, metal, pumpkins, greenery and a few vintage-inspired pieces do most of the work together.",
      "Starting with a large wooden frame or rustic artwork, adding a leafy garland underneath, then finishing with pumpkins and candleholders builds the whole look in roughly that order.",
      "Not every piece needs to match perfectly, either &mdash; a slightly mismatched collection actually feels more authentic, since real homes rarely look like a perfectly coordinated showroom display.",
    ],
    photo: pinPhoto("rustic-farmhouse.jpg", "Rustic farmhouse fall mantel decorated with wood, pumpkins and a garland", 683, 1024, "https://www.pinterest.com/pin/4592193978551892096/", "Rustic Farmhouse Fall Mantel"),
  },
  {
    n: "06",
    title: "Create an Elegant Burgundy Mantel",
    paras: [
      "For something richer than the usual neutral fall palette, burgundy brings real depth to a mantel display.",
      "Burgundy foliage, dark berries, velvet pumpkins or candles layered against cream, brown and brass build an elegant autumn combination.",
      "Keeping the background relatively simple lets the deeper color actually stand out, and the whole look pairs especially well with warm wood furniture and cream upholstery nearby.",
    ],
    photo: pinPhoto("burgundy.jpg", "Elegant burgundy fall mantel display with cream and brass accents", 576, 1024, "https://www.pinterest.com/pin/4855512095915996/", "Elegant Burgundy Mantel"),
  },
  {
    n: "07",
    title: "Create a Neutral Fall Mantel With Cream Pumpkins",
    paras: [
      "If the usual bright orange doesn't suit the room, it's fine to skip it entirely.",
      "Cream pumpkins, beige pottery, dried wheat, ivory candles and warm wood combine into a distinctly autumnal feeling without introducing much color at all.",
      "This look works especially well in white or light-gray rooms, where the warm, neutral accessories add real depth without competing with anything else already in the space.",
    ],
    photo: pinPhoto("cream-pumpkins.jpg", "Neutral fall mantel styled with cream pumpkins and warm wood accessories", 683, 1024, "https://www.pinterest.com/pin/167407311145195575/", "Neutral Fall Mantel With Cream Pumpkins"),
  },
  {
    n: "08",
    title: "Add Lanterns and Warm Lighting",
    paras: [
      "Lanterns bring near-instant coziness to a fireplace, with very little styling effort required.",
      "One or two lanterns on the mantel, filled with flameless candles and surrounded by greenery, pinecones or small pumpkins, is the whole idea.",
      "Lanterns can also sit on the hearth underneath the mantel if there's enough floor space &mdash; and it's worth decorating for evening too, since warm lighting makes a fireplace look like an entirely different display once the sun goes down.",
    ],
    photo: pinPhoto("lanterns.jpg", "Lanterns with flameless candles styled on a fall mantel for warm evening lighting", 572, 1024, "https://www.pinterest.com/pin/1548181186789517/", "Lanterns and Warm Mantel Lighting"),
  },
  {
    n: "09",
    title: "Create a Cozy Cottage Fall Mantel",
    paras: [
      "For a cottage-style fall mantel, everything should stay soft, layered and just slightly imperfect.",
      "An old-looking mirror or landscape painting as the base, then ceramic pumpkins, taper candles, dried flowers and small pieces of greenery layered around it, builds the whole look.",
      "Perfect symmetry isn't the goal here &mdash; letting a few objects overlap and vary in height gives the mantel the collected, lived-in character that makes cottage interiors feel so appealing in the first place.",
    ],
    photo: pinPhoto("cozy-cottage.jpg", "Cozy cottage-style fall mantel with layered pumpkins, candles and dried flowers", 1024, 992, "https://www.pinterest.com/pin/120189883800228924/", "Cozy Cottage Fall Mantel"),
  },
  {
    n: "10",
    title: "Add Vintage Artwork",
    paras: [
      "For fall mantel decor that doesn't announce the season quite so loudly, vintage-inspired artwork is a strong alternative to pumpkins and seasonal signage.",
      "A landscape painting, botanical print or antique-style frame introduces warm fall colors on its own, no pumpkins required.",
      "Artwork in shades of brown, faded green, golden yellow or muted rust, paired with a few brass candlesticks and dried branches nearby, finishes the look &mdash; and it's one of the few ideas here that can stay up well past the end of fall.",
    ],
    photo: pinPhoto("vintage-artwork.jpg", "Vintage-inspired artwork styled on a fall mantel with brass candlesticks", 683, 1024, "https://www.pinterest.com/pin/98516310598378876/", "Vintage Artwork on a Fall Mantel"),
  },
  {
    n: "11",
    title: "Mix Rustic Wood With Fall Greenery",
    paras: [
      "If the fireplace already has beautiful stone, brick, wood or tile, it's worth letting that architecture contribute to the overall design rather than covering it up.",
      "Wood brings natural warmth and texture on its own, which makes it an easy addition to any autumn display &mdash; a wooden frame, a reclaimed wood sign, a wooden bowl or a set of chunky candleholders all work.",
      "Softening those harder materials with greenery and a few fabric pumpkins keeps the combination from feeling too heavy, and combining wood, greenery and ceramic together adds just enough texture contrast to keep the mantel from looking flat.",
    ],
  },
  {
    n: "12",
    title: "Decorate With Dried Flowers",
    paras: [
      "Dried flowers make an excellent fall mantel accessory, since they add texture without overwhelming the space the way fresh arrangements sometimes can.",
      "Dried hydrangeas, wheat, pampas grass, bunny tails or preserved foliage all work well here.",
      "They also last well beyond a single season, so the same arrangement can move to another room once the mantel gets restyled for winter &mdash; paired with a few cream pumpkins and a brass candleholder, they build an easy seasonal display with very little upkeep.",
    ],
    photo: pinPhoto("dried-flowers.jpg", "Dried flowers and pampas grass styled on a fall mantel with layered pumpkins", 687, 1024, "https://www.pinterest.com/pin/1043357438693805206/", "Dried Flowers on a Fall Mantel"),
  },
  {
    n: "13",
    title: "Create a Traditional Pumpkin Display",
    paras: [
      "Sometimes the simplest idea is also the best one: a mantel full of pumpkins, arranged with a little intention.",
      "Mixing pumpkins in several shapes, sizes and colors, with larger ones toward the corners and smaller ones closer to the center, builds a classic fall look fast.",
      "Combining real pumpkins with ceramic, velvet or wooden versions adds texture variety, and avoiding identical pumpkins throughout keeps the whole arrangement feeling collected rather than mass-produced.",
    ],
  },
  {
    n: "14",
    title: "Use Oversized Fall Branches",
    paras: [
      "Sometimes one dramatic element does more for a mantel than ten small decorations ever could.",
      "Tall autumn branches in a large ceramic vase, positioned slightly off-center, create that single statement moment &mdash; balancing the other side with smaller pumpkins, candles or pottery keeps the whole arrangement from feeling lopsided.",
      "This approach works especially well on a large fireplace or in a room with tall ceilings, where the branches add real vertical height while the smaller accessories keep everything grounded.",
    ],
    photo: pinPhoto("oversized-branches.jpg", "Oversized autumn branches in a ceramic vase styled on a fall mantel", 768, 1024, "https://www.pinterest.com/pin/4591771793244164992/", "Oversized Fall Branches on a Mantel"),
  },
  {
    n: "15",
    title: "Layer Everyday Decor With Fall Accents",
    paras: [
      "This last idea might be the most practical one on the whole list.",
      "There's no real need to remove the usual mantel decorations every September &mdash; the everyday mirror, artwork, vases, books and candlesticks can simply stay put.",
      "Adding two or three seasonal pieces on top &mdash; a few pumpkins, a branch of autumn foliage, one warm-toned accessory &mdash; is often enough to completely change how the mantel reads, and it saves both money and effort compared to redecorating from scratch.",
    ],
    photo: pinPhoto("everyday-accents.jpg", "Everyday mantel decor layered with a few fall accents like pumpkins and foliage", 576, 1024, "https://www.pinterest.com/pin/398990848260006775/", "Everyday Decor Layered With Fall Accents"),
  },
  {
    n: "16",
    title: "Add a Large Mirror",
    paras: [
      "A large mirror gives a mantel a dependable focal point, and it genuinely works with almost any interior style.",
      "Leaning the mirror against the wall and layering seasonal decorations around its base &mdash; a leafy branch, a couple of pumpkins, a few candlesticks &mdash; builds the rest of the display around that anchor.",
      "The mirror also bounces light back into the room, which makes it especially useful in a darker living room that could use the extra brightness.",
    ],
  },
  {
    n: "17",
    title: "Mix Candles With Fall Foliage",
    paras: [
      "Candles instantly make a fireplace feel warmer once the sun starts going down.",
      "Placing candleholders at different heights and surrounding them with loose autumn branches builds real texture into the display; flameless candles work well here too, for anyone who wants the glow without the open flame.",
      "Cream candles paired with brass, wood or amber glass finish the look &mdash; just keep any candles and flammable foliage safely away from an active fireplace.",
    ],
  },
  {
    n: "18",
    title: "Keep Your Fall Mantel Minimal",
    paras: [
      "Not every fireplace needs a heavily decorated mantel to feel seasonal.",
      "One strong focal piece plus three or four supporting accessories is genuinely enough &mdash; a large piece of artwork in the center, then two ceramic pumpkins and a vase of dried branches, covers the whole look.",
      "That restraint is often the harder decorating decision to make, but it tends to read as more intentional than a mantel crowded with every seasonal piece in the storage box at once.",
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
<p>A fall mantel doesn't need to look like a seasonal gift shop to feel like autumn arrived. The best versions use a thoughtful mix of color, texture, height and a handful of natural elements &mdash; pumpkins, foliage, dried flowers, warm candlelight &mdash; rather than filling every inch of the shelf.</p>
<p>Starting with one strong focal point and building outward from there, working in a few different heights so nothing sits flat, and leaving the display room to breathe are the three habits that separate a styled mantel from a cluttered one.</p>
${photo("hero.jpg", "Living room with a fireplace mantel ready for fall styling", 1400, 934)}

<h2>Where to Start</h2>
<p>A large mirror, a piece of artwork or an oversized vase of branches makes a dependable focal point to build the rest of the mantel around. From there, smaller seasonal pieces &mdash; pumpkins, candles, foliage, books, ceramic accessories &mdash; can layer in around the edges without competing for attention.</p>
${pinPhoto("intro-how.jpg", "Antique mirror with autumn branches and pumpkins styled on a fall mantel", 736, 1021, "https://www.pinterest.com/pin/276619602108647931/", "Styling a Fall Mantel")}
<p>A garland is one of the fastest ways to bring that layered look together, especially for a traditional or farmhouse-leaning mantel. Muted rust, olive, brown, gold or burgundy foliage, draped loosely rather than pulled into a straight line, with a few branches allowed to extend past the edge, reads as far more natural than a perfectly even strand.</p>
${pinPhoto("intro-garland.jpg", "Fall garland with pumpkins, lanterns and candles draped across a stone fireplace mantel", 1024, 1024, "https://www.pinterest.com/pin/4605564009864949632/", "Fall Garland on a Mantel")}

<h2>18 Fall Mantel Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these eighteen ideas require buying an entirely new set of decorations every September. A garland, a few well-chosen pumpkins, or simply a handful of fall accents layered onto an already-loved mantel can shift the whole room into the season.</p>
<p>Scale and restraint do more work than quantity ever will &mdash; a few thoughtfully placed pieces, given room to breathe, will always look more intentional than a mantel packed edge to edge.</p>
`;

module.exports = { body };
