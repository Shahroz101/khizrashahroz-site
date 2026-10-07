// Body content for "13 Green Living Room Ideas That Actually Work".
// Photos carried over from the source article (AI-generated stock images,
// uncredited). No padded intro sections — just a short lead before the
// numbered list.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "green-living-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Go All-In With Green Walls",
    paras: [
      "Painting your walls green is one of the most dramatic, lowest-effort ways to transform a living room. Nothing changes a space faster than color.",
      "Deep emerald or forest green reads instantly luxurious, soft sage or mint keeps things calm and airy, and olive brings warmth without overwhelming the room. The shade you pick really does set the whole mood.",
      "If painting all four walls feels like too much commitment, a single accent wall gets you most of the drama with a fraction of the risk &mdash; it's the easiest way to test the color before fully committing.",
    ],
    photo: photo("green-walls.png", "Living room with deep forest green paneled walls, a cream curved armchair and green throw blanket beside a wood coffee table", 1024, 574),
  },
  {
    n: "02",
    title: "Add Green Through the Sofa",
    paras: [
      "If painting isn't your thing, a green sofa makes just as strong a statement. Think of it as the centerpiece of the room &mdash; the queen of the furniture lineup.",
      "A velvet emerald sofa brings instant glam, especially paired with brass accents. A deep olive sectional leans warm and slightly boho. A sage linen couch feels light and airy, perfect for a modern farmhouse look.",
      "The trick is keeping everything else neutral &mdash; beige rugs, white walls, natural wood accents &mdash; so the sofa gets all the attention it's earned. As a bonus, green upholstery hides minor stains far better than cream ever will.",
    ],
    photo: photo("green-sofa.png", "Emerald green velvet sofa with white and gray patterned pillows between two cream accent chairs in a bright living room", 1024, 574),
  },
  {
    n: "03",
    title: "Layer in Green Textiles",
    paras: [
      "Not ready to commit to furniture or paint? Green textiles &mdash; throw pillows, blankets, rugs &mdash; are the easiest entry point into this whole trend.",
      "Mix different shades of green pillows on a neutral sofa for depth without flatness. A green patterned rug ties the room together. A chunky knitted green throw adds texture and genuine coziness.",
      "This is honestly the best way to test whether you actually like green in your space. Get bored of it, or decide it's not for you? Swap the pillows and throws back out without spending much at all.",
    ],
    photo: photo("green-textiles.png", "Neutral gray sofa layered with olive and sage green velvet pillows and a chunky knit sage throw blanket, beside a round wood coffee table", 1024, 574),
  },
  {
    n: "04",
    title: "Use Plants as Natural Green Decor",
    paras: [
      "This one's almost too obvious to skip: plants are the ultimate green accessory. They bring color and, quite literally, bring the room to life.",
      "A fiddle leaf fig is bold and sculptural in a corner. A snake plant is low-maintenance with a modern edge. Pothos drapes beautifully from a shelf. A monstera adds a tropical, playful touch with its oversized leaves.",
      "Even without a green thumb, high-quality faux versions mixed in with real plants go completely unnoticed. Sometimes you just want the look without the watering guilt, and that's a completely fair trade.",
    ],
    photo: photo("plants.png", "Sunlit living room corner with a fiddle leaf fig, snake plant and hanging pothos beside a beige sofa with patterned pillows", 1024, 574),
  },
  {
    n: "05",
    title: "Accent With Green Artwork",
    paras: [
      "A green living room doesn't have to involve furniture or paint at all. Artwork is an underrated, genuinely powerful way to bring color in.",
      "Botanical prints in sleek black or wood frames, abstract pieces with bold green brushstrokes, or photography featuring lush landscapes all work beautifully and can be swapped out any time your style shifts.",
      "There's something almost automatic about feeling calmer in a room with green artwork &mdash; it subconsciously connects back to nature. A pair of oversized botanical prints above a neutral sofa does more than most people expect.",
    ],
    photo: photo("green-artwork.png", "Pair of framed botanical leaf prints above a cream sofa with a live-edge wood coffee table and potted plants on either side", 1024, 574),
  },
  {
    n: "06",
    title: "Balance With Natural Materials",
    paras: [
      "One of the best green living room moves is pairing the color with natural materials like wood, rattan, or stone. It feels balanced and grounded, almost like bringing the outdoors inside.",
      "Olive walls with an oak coffee table feel earthy and cozy. Sage pillows with rattan chairs feel fresh and airy. An emerald velvet sofa with marble side tables feels luxe with a natural twist.",
      "Green already connects to nature on its own, so pairing it with raw, organic textures just makes intuitive sense &mdash; a green throw pillow genuinely reads richer sitting on a woven chair than a plain one.",
    ],
    photo: photo("natural-materials.png", "Olive green living room with two rattan accent chairs, a live-edge wood coffee table and a jute rug beside a green built-in shelf", 1024, 574),
  },
  {
    n: "07",
    title: "Play With Green Accent Chairs",
    paras: [
      "You don't need a giant sofa to make a statement &mdash; green accent chairs do the trick just as well, with all the charm and none of the commitment of a full piece of furniture.",
      "A pair of emerald velvet chairs adds instant symmetry and elegance. A sage armchair tucked into a corner feels cozy immediately. A green leather chair leans more masculine and sophisticated.",
      "Accent chairs are the perfect balance of functional and stylish, and they're considerably easier to swap out than a sofa whenever you're ready for a change.",
    ],
    photo: photo("accent-chairs.png", "Two dark green velvet accent chairs flanking a cream sofa and wood coffee table in a neutral living room with framed art", 1024, 574),
  },
  {
    n: "08",
    title: "Experiment With Green Curtains",
    paras: [
      "Curtains get treated like a boring necessity, but they genuinely change how a room feels &mdash; and green curtains are one of the most effective ways to add color through them.",
      "Light sage or mint curtains soften a room and filter natural light beautifully. Deep emerald velvet drapes read as genuinely luxurious, boutique-hotel territory. Patterned curtains with green accents tie in the rest of the room's palette.",
      "Curtains work best when they complement rather than compete with your walls and furniture. Against neutral walls, bold green curtains can be the star; against already-green walls, something lighter keeps the look layered instead of heavy.",
    ],
    photo: photo("green-curtains.png", "Floor-to-ceiling emerald green curtains framing large windows in a bright living room with a cream sectional sofa and dark green throw pillows", 1024, 574),
  },
  {
    n: "09",
    title: "Add a Pop of Green With Rugs",
    paras: [
      "Want a real upgrade without a paintbrush or new furniture? A green rug is your best friend here. Rugs anchor a space and set its whole tone.",
      "A dark green Persian-inspired rug leans classic and timeless. A light green geometric rug feels modern and minimalist. A distressed sage rug feels casual and cozy, great for a farmhouse or rustic room.",
      "If committing feels risky, start with a patterned rug that mixes green with cream, beige, or navy &mdash; it blends in naturally while still adding that fresh pop of color.",
    ],
    photo: photo("green-rugs.png", "Gray sofa with olive and striped pillows on a green and cream diamond-patterned rug, beside a live-edge wood coffee table and woven pouf", 1024, 574),
  },
  {
    n: "10",
    title: "Create Depth With Green Trim and Accent Walls",
    paras: [
      "Instead of painting every wall one solid green, try using it for trim, an accent wall, or built-ins. This is a move that genuinely doesn't get enough attention.",
      "Green trim around windows and doors adds subtle interest without taking over. A deep green fireplace mantel becomes a striking focal point on its own. Green built-in shelves layered with books instantly add personality.",
      "Small details like trim do a disproportionate amount of work &mdash; guests may not clock it immediately, but they'll leave thinking the room felt unusually put-together. That's the quiet power of a subtle green accent.",
    ],
    photo: photo("accent-walls-trim.png", "Living room with dark green crown molding, door and fireplace mantel trim against white walls, with a round mirror above the mantel", 1024, 574),
  },
  {
    n: "11",
    title: "Style With Green Decorative Accessories",
    paras: [
      "Here's the fun, low-commitment part: decorative accessories. Sometimes a few green touches sprinkled through the room are all it takes to tie everything together.",
      "Green ceramic vases on a coffee table, emerald glass candle holders for a subtle glow, a green throw folded neatly in a basket, even books with green spines stacked for color &mdash; it all adds up.",
      "Balance is the key here. Mix green accessories with metallics, neutrals, and natural textures so the room reads as curated rather than overdone, and swap them out freely whenever your mood shifts.",
    ],
    photo: photo("decorative-accessories.png", "Living room with built-in shelves styled with green vases, books and ceramics, a neutral sofa with green pillows and a green throw in a woven basket", 1024, 574),
  },
  {
    n: "12",
    title: "Make a Statement With a Green Ceiling",
    paras: [
      "This one's a little bold, but hear it out: paint the ceiling, or bring green into the floor through a rug or tile. It's dramatic, and the payoff is genuinely worth it.",
      "A sage or olive ceiling feels cozy and enveloping in a way a white ceiling never does. Green tile paired with neutral walls gives an artsy, unexpected twist. A painted green wood floor adds instant charm to a cottage or farmhouse space.",
      "Everyone expects green walls. Almost nobody expects a green ceiling or floor &mdash; which is exactly why flipping the script here makes the room memorable instead of merely nice.",
    ],
    photo: photo("ceiling-floors.png", "Cottage living room with a sage green beam ceiling and matching trim, pale yellow walls and a green diamond-patterned rug", 1024, 574),
  },
  {
    n: "13",
    title: "Mix Shades of Green for Depth",
    paras: [
      "Last one: don't feel locked into a single shade of green. Mixing multiple tones creates real richness and makes a room feel layered and intentional rather than flat.",
      "Pair deep forest green furniture with sage walls for contrast. Add olive pillows on a mint-toned couch for subtle depth. Mix dark green artwork with lighter green curtains for balance.",
      "This technique is honestly what separates a flat, one-note room from one that feels genuinely designed &mdash; the same reason layering different textures of the same color in an outfit looks better than wearing one shade head to toe.",
    ],
    photo: photo("mixed-shades.png", "Living room with deep olive green walls and built-in shelving, a sage green sectional sofa with mixed green pillows and a patterned rug", 1024, 574),
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
<p>Most of us have stared at our own living room at some point and thought, this feels kind of flat. The fastest way to fix that is almost always a touch of green &mdash; the one color that reads as fresh, calm, and stylish all at once, with enough range to fit nearly any room.</p>
<p>Whether you want a bold, statement-making moment or just a whisper of natural calm, there's a shade of green that works. From rich emerald walls to soft sage accessories, it manages to feel both timeless and current without requiring a full renovation.</p>
${photo("hero.jpg", "Bright living room with a cream sofa, two framed botanical leaf prints, hanging pendant lights and potted plants on either side", 1312, 736)}

<h2>13 Green Living Room Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>From bold emerald walls to the quietest sage accessories, there's a green out there for every mood and every style. What makes the color so powerful is its range &mdash; it can feel calming, energizing, luxurious, or earthy depending entirely on the shade and how you use it.</p>
<p>Start small if you're unsure &mdash; pillows, a plant, one framed print &mdash; and build from there. And if it turns out green isn't your thing after all, swapping back to neutral costs you nothing more than a few accessories.</p>
`;

module.exports = { body };
