// Body content for "10 Pink Bedroom Ideas That Feel Grown-Up, Not Girly".
// Photos carried over from the source article. "Bold Contrasts" ran
// without a dedicated photo in the source too. The "Artwork" photo is a
// kids' room with floral wallpaper and two small framed prints rather than
// a single statement art piece — the paragraph was written to describe
// that honestly instead of claiming a large gallery moment that isn't there.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "pink-bedroom-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function creditedPhoto(src, alt, w, h, name, url) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "pink-bedroom-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo by ${name} via <a href="${url}" target="_blank" rel="nofollow noopener">Unsplash</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Soft Blush Walls",
    paras: [
      "The easiest way to bring pink into a bedroom without it taking over is a blush wall. Blush has an almost neutral quality to it &mdash; calm and soft, but with more personality than beige ever manages.",
      "It pairs beautifully with crisp white bedding for something clean and minimal, warm wood furniture for balance, or a touch of gold and brass hardware for a little glamour.",
      "A well-chosen blush tone tends to read as cozy and inviting rather than overtly pink. Most people clock the mood of the room before they clock the color.",
    ],
    photo: photo("blush-walls.png", "Peachy blush pink bedroom wall with white bedding, a tan throw and a mid-century wood nightstand with a brass lamp", 1024, 574),
  },
  {
    n: "02",
    title: "A Moody Accent Wall",
    paras: [
      "If painting the whole room pink feels like too much, a single statement wall is the middle ground. Deeper tones like dusty rose or muted mauve bring real depth without taking over the space.",
      "A richly colored wall behind the bed instantly becomes the room's anchor. Pair it with white bedding and dark side tables, and the effect reads considerably more polished than the color choice alone would suggest.",
      "Wallpaper works beautifully here too &mdash; a patterned mauve or blush print adds personality without ever tipping into busy, especially when it's confined to just the one wall behind the headboard.",
    ],
    photo: photo("accent-wall.png", "Moody burgundy headboard wall flanked by mauve pink geometric patterned wallpaper, with a gray upholstered headboard and white bedding", 1024, 574),
  },
  {
    n: "03",
    title: "Pink Through Textiles",
    paras: [
      "If you're not ready to commit to paint, textiles are the lowest-risk way to test pink in a bedroom. Bedding, curtains, a throw, or a rug all do the job without a single brushstroke.",
      "This approach also lets you mix several shades of pink in one room &mdash; blush linen sheets for something calm, a velvet rose throw pillow for a little luxury, a dusty pink rug to ground the whole space.",
      "It's also the easiest idea on this list to undo. Swap one piece out and the whole mood shifts, no long-term commitment required.",
    ],
    photo: creditedPhoto("textiles.jpg", "Shaggy blush pink throw blanket on a bed with neutral textured pillows and a pink curtain visible by the window", 1024, 683, "Marta Filipczyk", "https://unsplash.com/photos/0JgvkiOpIYk"),
  },
  {
    n: "04",
    title: "Pink Furniture as the Star",
    paras: [
      "This is where you can make a real statement without drowning the whole room in color. A blush velvet chair or headboard reads as bold and luxurious, like the kind of piece that makes people assume you hired a designer.",
      "You don't have to stop at one piece, either &mdash; a pink nightstand or a muted coral chair brings in personality too. The trick is restraint elsewhere: let the pink furniture be the obvious focal point while everything around it stays quiet.",
      "A single statement chair or bench is often all it takes to shift the entire mood of a room, even when nothing else in the space has changed.",
    ],
    photo: creditedPhoto("furniture.jpg", "Pink velvet chair with gold frame legs positioned at a white vanity desk with a large mirror", 819, 1024, "Joshua Lawrence", "https://unsplash.com/photos/wXklWt5O4pQ"),
  },
  {
    n: "05",
    title: "Pink Paired With Neutrals",
    paras: [
      "Pink shows up best when it has a calm partner. Pairing it with white, beige, or gray is one of the most reliable ways to land on something that feels both modern and timeless.",
      "The neutral lets the pink take center stage without the room ever tipping into overwhelming. A blush comforter against crisp white sheets, or pale pink curtains next to a gray wall, both do this well.",
      "If you're worried pink reads too girly on its own, a neutral palette tones it down almost instantly &mdash; the earthy balance of beige or gray keeps everything feeling grounded.",
    ],
    photo: photo("neutrals.png", "Blush pink velvet duvet folded over crisp white bedding against a beige wall with sheer white curtains", 1024, 574),
  },
  {
    n: "06",
    title: "A Little Pink Through Pattern and Print",
    paras: [
      "Artwork and print are the lowest-effort, highest-impact way to bring pink into a room without making any permanent decisions. A blush floral wallpaper moment, a few framed prints, or a soft watercolor piece all shift a room's mood fast.",
      "This works especially well in a space that's otherwise fairly simple &mdash; the pattern or print naturally pulls focus and adds personality on its own.",
      "In a kids' room like this one, a floral wallpaper accent behind the bed does the heavy lifting, while a couple of small framed prints on the opposite wall keep things feeling intentional rather than overdone.",
    ],
    photo: creditedPhoto("artwork.jpg", "Kids bedroom with pink floral wallpaper on the headboard wall and two small framed animal prints above a built-in desk nook", 1024, 576, "Mahza D'brata", "https://unsplash.com/photos/Nwedoq8v9G8"),
  },
  {
    n: "07",
    title: "Pink Layered With Metallics",
    paras: [
      "Pink and metallics were made for each other. Rose gold, brass, or matte gold accents paired with pink take a bedroom from cute to genuinely luxurious almost instantly.",
      "Think blush walls with a gold-framed mirror, or a dusty pink duvet next to brass bedside lamps. Even one mercury glass lamp on a mirrored nightstand can push the whole room toward boutique-hotel territory.",
      "The key is restraint &mdash; metallics should accent the space, not dominate it. A little shimmer goes a long way before it starts reading as a jewelry store instead of a bedroom.",
    ],
    photo: creditedPhoto("metallics.jpg", "Rose gold mercury glass table lamp and a framed print on a mirrored nightstand against a blush pink wall", 683, 1024, "Arnel Hasanovic", "https://unsplash.com/photos/PKmH4_lj-DU"),
  },
  {
    n: "08",
    title: "Pink Against Bold, Dark Contrasts",
    paras: [
      "If neutrals aren't your thing, go the opposite direction entirely. Pink paired with navy, emerald, or matte black creates a rich, dramatic look that reads as genuinely modern rather than soft.",
      "The most striking combinations usually pair one softer pink tone against a single darker, moodier color &mdash; a dusty pink velvet headboard against a deep navy wall, for instance. Dramatic, yes. Overwhelming, surprisingly not.",
      "Pale pink bedding against a charcoal wall with black metal furniture sounds risky on paper, but the end result tends to land as moody and elegant rather than anything close to \"too sweet.\" Pink doesn't need to play it safe to still feel classy.",
    ],
  },
  {
    n: "09",
    title: "Bring in Natural Texture",
    paras: [
      "Wood, rattan, linen, and greenery all keep a pink bedroom from feeling too polished or artificial. Pink genuinely benefits from earthy company.",
      "A blush throw draped over a rattan chair, pink linen bedding next to a jute rug, open wood shelves against a dusty pink wall &mdash; all of it softens the color and keeps the room feeling lived-in rather than staged.",
      "Don't skip the plants, either. Greenery against pink creates real contrast and life &mdash; even one trailing plant can be the detail that pulls a whole room together.",
    ],
    photo: creditedPhoto("textures.jpg", "Wood floating shelves with books, dried flowers and a trailing spider plant mounted on a dusty pink wall above a gray sofa", 682, 1024, "Julia", "https://unsplash.com/photos/UYCoey0IImc"),
  },
  {
    n: "10",
    title: "Let Pink Show Up in Pattern",
    paras: [
      "Stripes, florals, geometrics &mdash; pink doesn't have to stay solid. Pattern adds real dimension, and pink within a pattern keeps the whole look feeling playful rather than precious.",
      "A pink-and-white striped duvet paired with solid blush curtains feels lighthearted but still put-together. Bolder geometric wallpaper with pink woven through it pushes the room toward something more artsy and considered.",
      "If clashing patterns makes you nervous, stick to one dominant print in pink and keep everything else in the room simple. One well-placed pattern makes more impact than three competing ones ever will.",
    ],
    photo: photo("patterns.png", "Pink and white striped duvet with a bold pink and white geometric diamond wallpaper accent wall and matching curtains", 1024, 574),
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
<p>Pink bedrooms get an unfair reputation. Say the words and most people picture cotton-candy walls or a bubblegum explosion left over from someone's childhood room. The truth is pink can be chic, modern, and genuinely sophisticated when it's styled with any intention at all.</p>
<p>It's one of the most underrated color choices for a bedroom &mdash; warm, a little playful, and far more versatile than it gets credit for. From a quiet blush accent wall to a full statement in fuchsia, the results consistently surprise people who assumed pink wasn't for them.</p>
<p>Here are ten ways to bring it in, whether you're after something barely-there or something that commits all the way.</p>
${photo("hero.jpg", "Blush pink bedroom with a round rose gold mirror above the bed, copper wall sconces and layered pink and white pillows", 1312, 736)}

<h2>10 Pink Bedroom Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Pink bedrooms aren't childish or over-the-top unless you make them that way. From soft blush walls to bold furniture, from metallic accents to earthy textures, pink is flexible enough to pull off nearly any mood &mdash; calm, romantic, dramatic, or thoroughly modern.</p>
<p>The best pink bedrooms balance color with texture and personality rather than leaning on the color alone. Test a throw pillow before committing to a wall. Try one statement piece if you're craving drama. Mix and match until it actually feels like yours.</p>
<p>Because at the end of the day, a bedroom was never about following a rulebook. It's about a room that makes you feel comfortable walking in, every single time.</p>
`;

module.exports = { body };
