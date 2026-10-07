// Body content for "13 Ways to Bring Cottagecore Style Into Your Home".
// Photos carried over from the source article (Pinterest-credited with
// just "Pinterest", no photographer name, so plain photo() is used
// throughout). Note: the source's "warm white walls" photo actually shows
// a green-painted cottage bedroom with lace and botanicals, not white
// walls — the paragraph was written to describe what the photo actually
// shows instead of claiming white walls that aren't there. Condensed 4
// intro H2 sections (plus an H3 subsection) down to 2, and dropped the
// source's post-list "Mistakes" / "Avoiding the Costume Look" bonus
// sections entirely.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "cottagecore-style-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "cottagecore-style-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Choose a Green-Toned Cottage Palette, Not Just White",
    paras: [
      "Pure brilliant white is actually the enemy of this look, even though it's the first thing most people reach for. A white with a hint of cream, clay, or green reads as soft rather than clinical.",
      "For rooms you want to feel like a nest rather than just bigger, lean into a deeper tone entirely &mdash; sage, olive, or a dusty green on walls, furniture, or trim does more for the cottage feeling than any shade of white ever will.",
      "A bedroom like the one shown here &mdash; green-painted furniture, lace curtains, a wall of botanical prints &mdash; proves the point better than a swatch chip could. Warm and green beats cold and white every time in this style.",
    ],
    photo: pinPhoto("warm-white-walls.jpg", "Cottage bedroom with green-painted furniture, sheer lace curtains, trailing ivy and a gallery of botanical prints above a floral bed", 736, 1104, "https://www.pinterest.com/pin/1101482021413468097/", "Cottagecore Bedroom Walls"),
  },
  {
    n: "02",
    title: "Bring In Small-Scale Florals, Not Giant Ones",
    paras: [
      "Big, splashy florals read modern or tropical. Small, repeating prints read cottage &mdash; think ditsy sprigs, tiny roses, faded chintz rather than anything bold enough to dominate a room.",
      "Start low-commitment: a cushion cover, a table runner, one armchair. Wallpapering an entire room in florals as your very first move is a genuinely common and genuinely regrettable mistake.",
      "A sheer floral curtain layered over small-print bedding and ruffled pillows, like the setup shown here, shows exactly how far a restrained floral choice can carry a room on its own.",
    ],
    photo: pinPhoto("small-florals.jpg", "Attic bedroom with a sheer floral curtain, small-print ruffled floral bedding and pillows, with dried flowers on the windowsill", 736, 1091, "https://www.pinterest.com/pin/1126181450577247796/", "Small Scale Floral Prints"),
  },
  {
    n: "03",
    title: "Let Real Plants Do the Decorating",
    paras: [
      "Nothing signals cottagecore faster than actual living green in a room. A trailing pothos on a shelf, geraniums on a windowsill, herbs kept by the sink &mdash; all of it works.",
      "The honest rule worth following: buy plants that survive you, not plants that photograph well. Anything killed twice gets permanently crossed off the list &mdash; a policy that saves real money in dead ferns over time.",
      "A windowsill crowded with potted bulbs and hanging blooms framed by floral curtains, like the one shown here, is the kind of detail that makes a whole room feel alive rather than just decorated.",
    ],
    photo: pinPhoto("real-plants.jpg", "Cottage window with terracotta pots of hyacinths and daffodils on the sill, hanging flower baskets and floral curtains tied back", 736, 1308, "https://www.pinterest.com/pin/1151443829798770193/", "Plants on a Cottagecore Windowsill"),
  },
  {
    n: "04",
    title: "Swap Your Hardware for Aged Brass or Black Iron",
    paras: [
      "This is the cheapest upgrade with the single biggest payoff on this entire list. Shiny chrome knobs fight the whole cottagecore look no matter what else is happening in the room.",
      "Unlacquered brass, aged bronze, or simple black iron fixes it in an afternoon, and nobody consciously notices good hardware &mdash; but everybody notices bad hardware.",
      "A kitchen fitted with warm brass cup pulls, a brass faucet, and a brass rail beneath open shelves, like the one shown here, shows how much one consistent metal finish can quietly pull a whole room together.",
    ],
    photo: pinPhoto("aged-brass.jpg", "Cream cottage kitchen with aged brass cabinet pulls, a brass faucet and a brass rail mounted beneath open wood shelves", 736, 921, "https://www.pinterest.com/pin/1108448527063950204/", "Aged Brass Cottage Kitchen Hardware"),
  },
  {
    n: "05",
    title: "Layer Vintage Textiles Everywhere",
    paras: [
      "Quilts, linen throws, crocheted blankets, old cotton tea towels &mdash; cottagecore style genuinely lives and dies by fabric more than almost any other single element.",
      "The trick is layering different weights together: a heavy quilt folded at the foot of the bed, a lightweight linen sheet underneath, two or three cushions in mismatched but related prints.",
      "Buy vintage where it's available. Old cotton and linen soften with age in a way new polyester simply never will, and a secondhand quilt like the floral one layered here often costs less than a new cushion cover.",
    ],
    photo: pinPhoto("vintage-textiles.jpg", "Elegant bed layered with white linen bedding, a vintage pink and green floral quilt and a gathered bed skirt beside a marble fireplace", 736, 1104, "https://www.pinterest.com/pin/7107311908710852/", "Vintage Floral Quilt and Linen Bedding"),
  },
  {
    n: "06",
    title: "Open Up a Shelf With Stoneware You Actually Use",
    paras: [
      "Take one upper cabinet door off in the kitchen and see how it feels. Stack plain stoneware plates, mismatched mugs, and a couple of glass jars of dried beans &mdash; nothing precious, just what you actually reach for.",
      "The key is keeping it functional. The moment open shelves turn purely decorative, dusting becomes a new hobby, and not a good one.",
      "Shelves like the ones shown here, lined with everyday mugs, jars, and a potted herb or two, prove that practical and pretty aren't actually in conflict in this style.",
    ],
    photo: pinPhoto("open-shelves.jpg", "Open wood kitchen shelves holding stoneware plates, mismatched mugs on hooks, glass storage jars and a potted herb", 736, 1349, "https://www.pinterest.com/pin/371406300543295778/", "Open Cottage Kitchen Shelves"),
  },
  {
    n: "07",
    title: "Hang Dried Flowers and Herb Bundles",
    paras: [
      "Dried hydrangea, lavender, eucalyptus, wheat &mdash; hang them from a hook, tuck them into a jug, tie a bundle to a cabinet knob. It's one of the fastest, cheapest cottagecore moves available.",
      "The honest caveat: dried flowers look wonderful for about six months and genuinely depressing after that. Refresh them seasonally, or they turn into grey dust sculptures nobody wants hanging around.",
      "A shelf dense with hanging herb and flower bundles above fresh ones in a vase, like the arrangement shown here, is the kind of layered abundance that reads as effortless even though it isn't.",
    ],
    photo: pinPhoto("dried-flowers.jpg", "Sage green kitchen shelf with dried herb and flower bundles hanging underneath, fresh flowers in vases and baskets of dried goods on top", 736, 1313, "https://www.pinterest.com/pin/518054763407522468/", "Dried Flower and Herb Bundles"),
  },
  {
    n: "08",
    title: "Choose Wood Furniture With Visible Grain",
    paras: [
      "Cottagecore has no patience for uniform factory finishes. Look for pine, oak, and elm where you can actually see the knots and marks in the wood.",
      "Mismatched is correct here, not a mistake to fix. A dark dresser, a honey pine table, and a painted chair can absolutely share one room &mdash; match the tones loosely, not exactly, and let them sit in gentle contrast.",
      "A dining set mixing a rich wood tabletop with painted sage green chairs and cabinet, like the one shown here, is exactly the kind of considered mismatch that reads as collected rather than careless.",
    ],
    photo: pinPhoto("wood-furniture.jpg", "Cottage dining room with a rich wood tabletop, painted sage green dining chairs and a matching green glass-front cabinet", 736, 1104, "https://www.pinterest.com/pin/561120434847214977/", "Cottagecore Wood Furniture"),
  },
  {
    n: "09",
    title: "Layer Your Lighting and Skip the Ceiling Light",
    paras: [
      "Overhead lighting flattens everything it touches. Table lamps, floor lamps, and candles are what create the pools of warm light that actually make a cottage room feel alive.",
      "Aim for roughly three light sources per room at different heights, and add a dimmer where you can. A living room with enough lamps genuinely never needs its overhead light switched on again.",
      "An ornate lamp glowing beside a cluster of candles and dried lavender, like the nightstand shown here, is the kind of warm, layered light this whole style is quietly built around.",
    ],
    photo: pinPhoto("layered-lighting.jpg", "Vintage beaded lamp glowing warm light beside lit pillar candles and a teacup of dried lavender on a wood nightstand", 736, 1308, "https://www.pinterest.com/pin/1140466305667873090/", "Layered Cottagecore Lighting"),
  },
  {
    n: "10",
    title: "Build a Reading Nook, Even a Small One",
    paras: [
      "You don't need a bay window for this. A chair in a corner, a small side table, a lamp, and a folded blanket is genuinely enough to make it work.",
      "This is the point where cottagecore stops being a look and starts being a way to actually use your home &mdash; the corner you sit in every day becomes the prettiest corner almost by accident, simply because objects gather where you live.",
      "A window-side armchair layered with a floral pillow, a knit throw, a book, and a warm cup of tea, like the nook shown here, is the clearest version of that idea in practice.",
    ],
    photo: pinPhoto("reading-nook.jpg", "Cozy cottage reading nook with a cream armchair, floral pillow, knit throw, open book, a cup of tea and fairy lights on shelves nearby", 736, 1307, "https://www.pinterest.com/pin/151081762495795817/", "Cottagecore Reading Nook"),
  },
  {
    n: "11",
    title: "Fill the Walls With Botanicals, Books, and Old Frames",
    paras: [
      "Frame pressed flowers, vintage seed packets, botanical prints, or your own garden photos. Mix frame styles rather than buying a matching set &mdash; uniformity works against this look on walls just as much as it does with furniture.",
      "Books count as decor here too. Stack them horizontally, leave them out on side tables, let them genuinely pile up. A cottagecore room with no books anywhere looks like a stage set rather than a home.",
      "A dense gallery of pressed-flower frames and botanical prints above a simple bench, like the wall shown here, brings the garden indoors in exactly the way this style is built around.",
    ],
    photo: photo("gallery-wall.jpg", "Gallery wall of pressed flower frames and botanical prints above a wood bench with terracotta vases of dried flowers", 736, 1318),
  },
  {
    n: "12",
    title: "Add Gathered and Ruffled Fabric",
    paras: [
      "A skirted side table, a gathered curtain, a ruffled cushion edge, a bed skirt &mdash; soft gathered fabric is the specific detail that separates cottagecore from plain rustic.",
      "It also happens to be useful. A skirted table conceals exactly the kind of clutter &mdash; a router, chargers, a stack of paperwork &mdash; that would otherwise sit in full view.",
      "A gingham-skirted vanity table like the one shown here, paired with an antique tri-fold mirror, is a genuinely good example of a detail doing double duty: decorative and quietly functional at once.",
    ],
    photo: photo("skirted-vanity.jpg", "Pink gingham skirted vanity table with a ruffled hem, antique tri-fold mirror, botanical prints and perfume bottles", 736, 1318),
  },
  {
    n: "13",
    title: "Make One Corner a Small Daily Ritual",
    paras: [
      "A tea station with a kettle and loose-leaf tins. A bread board that stays out on the counter. A pot of herbs by the kitchen window you actually snip from on a regular basis.",
      "This is the idea most people skip, and it's the one that matters most. Cottagecore is a lifestyle aesthetic at its core, so a room with no evidence of slow living on display just looks like a props cupboard.",
      "A tea corner with hanging floral mugs, loose-leaf jars, honey, and fresh flowers, like the one shown here, is proof that the ritual itself is the decor &mdash; not something added on top of it.",
    ],
    photo: pinPhoto("tea-station.jpg", "Kitchen counter tea station with hanging floral mugs, glass tins of loose leaf tea, honey, a vintage teapot and fresh flowers", 576, 1024, "https://www.pinterest.com/pin/2251868559592622/", "Cottagecore Tea Station"),
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
<p>A first attempt at cottagecore style can easily end in three dried lavender bundles, a thrifted milk jug, and a room that looks like a craft fair exploded in it. Pretty, maybe. Livable? Not even close. The good news is that cottagecore is actually one of the cheapest looks to pull off, because it rewards old things, worn things, and stuff you probably already own.</p>
<p>Ever notice how the prettiest cottage photos are full of things that cost almost nothing? That's not an accident &mdash; it's the entire point of the style.</p>
${photo("hero.jpg", "Cottage living room with linen sofas, a wicker armchair, lace curtains, dried florals and a rustic wood coffee table", 736, 1104)}

<h2>What Cottagecore Style Actually Means</h2>
<p>Cottagecore started online as an aesthetic about slow, rural, homemade living &mdash; baking bread, growing herbs, mending clothes, sitting by a window with tea going cold. The decorating side simply borrows that feeling and puts it into a room. It's not a shopping list; it's a mood built on natural materials, soft aged color, visible handwork, and a little controlled mess.</p>
<p>People confuse it constantly with modern farmhouse (crisp, graphic, white walls and black frames) and shabby chic (pale and distressed, chalk paint, white on white). Cottagecore leans warm and green instead &mdash; deeper color, small florals, real plants, and objects that show actual use rather than fake wear. The quickest test: if everything matches, it's farmhouse. If everything is the same chalky white, it's shabby chic. If it looks like someone gardens and cooks there, it's cottagecore.</p>
${pinPhoto("intro-what-is.jpg", "Sage green cottage kitchen with an open window above the sink, potted herbs on the sill and a flowering garden visible outside", 736, 1305, "https://www.pinterest.com/pin/1042724119989108671/", "What Cottagecore Style Means")}

<h2>Why It Works in Ordinary Homes</h2>
<p>None of this requires an actual stone cottage. It works in rented apartments and boxy bedrooms just as well, because the style is genuinely forgiving &mdash; mismatched furniture is a feature, a chipped jug is a feature, a stack of books doubling as a side table is a feature. Minimalism punishes stray objects; this look thanks you for them. Layering soft textiles and warm color also makes a cramped room feel cozy rather than cramped, which matters more in a small home than a large one.</p>
<p>A cottagecore palette generally runs warm whites and creams with a yellow base rather than blue, soft sage-to-olive greens borrowed from the garden, muted earth tones like clay and oatmeal, and one gentle accent color kept to small doses &mdash; dusty rose, butter yellow, faded denim. A whole room of bold pink stops being charming fast; keep the drama in the details instead.</p>
${pinPhoto("intro-cozy-corner.jpg", "Cozy cottage corner with a floral armchair, dried flowers on nearby shelves and a wood-burning stove set into a brick fireplace", 736, 1104, "https://www.pinterest.com/pin/432627107978949071/", "Cottagecore Cozy Corner")}
${pinPhoto("intro-color-palette.jpg", "Bedroom with warm dusty rose walls, exposed wood ceiling beams, soft linen bedding and a woven basket at the foot of the bed", 736, 1318, "https://www.pinterest.com/pin/60657926228076803/", "Cottagecore Color Palette")}

<h2>13 Ways to Bring Cottagecore Style Into Your Home</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of this needs a literal cottage, a garden, or a sourdough starter with a name. It needs warm color, natural materials, layered soft lighting, real plants, and objects that show honest wear. Pick three ideas from this list and try them this week &mdash; swap the bulbs, add a lamp, put something green on the windowsill &mdash; then live with it before buying anything else.</p>
<p>And if it does end up as three lavender bundles and a milk jug, at least it'll be obvious which two to put away.</p>
`;

module.exports = { body };
