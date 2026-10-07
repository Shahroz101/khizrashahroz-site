// Body content for "12 Bathroom Accent Wall Ideas Worth Stealing". Photos
// carried over from the source article (several ideas had two near-
// identical AI-generated photos in the source; one representative photo
// per idea was kept here). No padded intro sections in the source — just
// a short two-paragraph lead before the numbered list.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-accent-wall-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Natural Stone",
    paras: [
      "If you want your bathroom to feel like a genuine spa, natural stone is the fastest way there. Slate, marble, and travertine all bring a level of texture and elegance that's hard to fake with anything else.",
      "A single stone feature wall does more visual work than an entire room full of smaller finishing touches &mdash; it reads as deliberate, expensive, and calm all at once.",
      "Behind a freestanding tub, like the dramatic veined marble shown here, stone turns an ordinary bath into the kind of moment you'd expect from a boutique hotel rather than a regular bathroom.",
    ],
    photo: photo("natural-stone.png", "Luxurious bathroom with a dramatic veined marble accent wall behind a freestanding soaking tub and chrome floor-mount faucet", 576, 1024),
  },
  {
    n: "02",
    title: "Herringbone Tile",
    paras: [
      "Herringbone is one of those patterns that manages to look both timeless and current no matter how long it's been trending. It takes a basic tile and gives it real presence just through the way it's laid.",
      "The classic version uses white subway tile set at the herringbone angle, with a contrasting grout line that makes the zigzag pattern pop instead of blending into the wall.",
      "Carried from the wall onto the floor, like the matching herringbone treatment shown here, the whole room feels intentionally designed rather than just tiled.",
    ],
    photo: photo("herringbone.png", "White herringbone subway tile accent wall in a bathroom with a matching herringbone tile floor, wood vanity and brass fixtures", 576, 1024),
  },
  {
    n: "03",
    title: "Statement Paint",
    paras: [
      "Sometimes the right move is simply picking up a paintbrush. A deep, saturated color &mdash; navy, emerald, even a bold yellow &mdash; can carry an entire bathroom on its own.",
      "It's genuinely one of the easiest DIY upgrades on this list. A weekend, a roller, and one bold can of paint is all it takes to completely change how the room feels.",
      "A textured, almost hand-brushed emerald finish like the one shown here against brass fixtures proves that paint alone, applied with a little intention, can look every bit as rich as a more expensive material.",
    ],
    photo: photo("statement-paint.png", "Small bathroom with a textured brushed emerald green painted accent wall behind a white pedestal sink with brass fixtures", 576, 1024),
  },
  {
    n: "04",
    title: "Vertical Garden Wall",
    paras: [
      "Plants genuinely belong in a bathroom, and going vertical is how you fit them in without losing any floor space. Humidity-loving varieties like ferns and pothos practically thrive in there.",
      "A living wall does more than add color &mdash; it brings the whole room to life in a way tile or paint never quite manages, and it turns an ordinary bath into something closer to a private jungle.",
      "Framed in rustic stone, like the ferns and trailing greenery shown here behind a wood-clad tub, a vertical garden wall becomes the single most memorable thing about the room.",
    ],
    photo: photo("vertical-garden.png", "Lush vertical garden wall of ferns and greenery above a wood-clad bathtub, framed by rough stone walls", 576, 1024),
  },
  {
    n: "05",
    title: "Bold Tile Patterns",
    paras: [
      "For instant drama, nothing beats a bold, patterned tile. Geometric prints, Moroccan-inspired motifs, loud color combinations &mdash; this is where a bathroom gets to be genuinely fun.",
      "The impact comes from contrast. A busy, graphic tile wall paired with simple white fixtures and neutral accessories lets the pattern do all the talking.",
      "A navy-and-white zigzag running floor to ceiling, like the one shown here, is the kind of detail that makes a bathroom feel expensive the second you walk in.",
    ],
    photo: photo("bold-tile.png", "Bold navy and white zigzag patterned tile covering the walls and floor of a small bathroom with a white toilet and vanity", 576, 1024),
  },
  {
    n: "06",
    title: "Wood Panels",
    paras: [
      "Wood brings a natural, homey warmth that tile and paint simply can't replicate. Moisture-resistant planks or panels make it a genuinely practical choice for a bathroom, not just a good-looking one.",
      "The texture and grain do a lot of the visual work on their own &mdash; you don't need much else happening in the room once a wood wall is the focal point.",
      "Backlit wood paneling behind a tub, like the warm plank wall shown here glowing from hidden under-shelf lighting, turns a simple material into a genuinely elevated feature.",
    ],
    photo: photo("wood-panels.png", "Warm wood plank accent wall in a bathroom with hidden under-shelf lighting, a built-in tub and potted plants on the vanity", 576, 1024),
  },
  {
    n: "07",
    title: "Mirrored Wall",
    paras: [
      "A mirrored wall does double duty &mdash; it's practical for actually getting ready, and it makes a bathroom look considerably larger than it actually is just by bouncing light around the room.",
      "This is one of the single best tricks for a small bathroom specifically. A full mirrored panel wall visually doubles the space without a single inch of actual renovation.",
      "Floor-to-ceiling mirror behind a floating vanity, like the setup shown here reflecting the whole room back at itself, is proof that this trick looks as polished as it is functional.",
    ],
    photo: photo("mirrored-wall.png", "Floor-to-ceiling mirrored accent wall behind a black floating double vanity in a contemporary bathroom with marble tile", 576, 1024),
  },
  {
    n: "08",
    title: "Mosaic Art Wall",
    paras: [
      "For anyone who wants their bathroom to feel genuinely artistic, a mosaic wall is the move. It's fully customizable &mdash; florals, abstracts, landscapes, whatever you're drawn to.",
      "The scale is what makes it work. A mosaic covering an entire wall reads as a real art installation rather than a decorative accent, and it holds up beautifully in a wet, reflective space.",
      "An intricate blue-and-gold mosaic like the one shown here, caught in the mirror behind the sink, turns a simple vanity wall into the most striking thing in the entire house.",
    ],
    photo: photo("mosaic-art.png", "Intricate blue and gold mosaic tile art wall behind a white floating sink in a modern bathroom", 576, 1024),
  },
  {
    n: "09",
    title: "Shiplap",
    paras: [
      "Shiplap isn't just for farmhouse kitchens anymore &mdash; it works just as well in a bathroom, and it genuinely softens a room that can otherwise feel cold and hard-surfaced.",
      "Soft colors do the most work here. White, gray, or a muted pastel blue on shiplap planks create a warm, welcoming feel that tile alone rarely achieves.",
      "Paired with a round antique mirror and a few plants, like the sage-green shiplap wall shown here, the effect is cozy enough to make you forget you're standing in a bathroom at all.",
    ],
    photo: photo("shiplap.png", "Sage green shiplap accent wall in a bathroom with a round antique mirror, brass sconce and potted plants beside a pedestal sink", 576, 1024),
  },
  {
    n: "10",
    title: "Concrete Finish",
    paras: [
      "If a modern, industrial look is what you're after, concrete is about as confident as a bathroom wall gets. It's raw, it's a little edgy, and it doesn't try particularly hard to be anything else.",
      "The texture pairs beautifully with matte black or brushed metal fixtures and genuinely minimalist decor &mdash; concrete does best when the rest of the room stays quiet around it.",
      "A full concrete treatment from floor to wall, like the one shown here framing an open glass shower, makes a small bathroom feel like a design statement instead of an afterthought.",
    ],
    photo: photo("concrete.png", "Raw concrete accent wall in a minimalist bathroom with a glass-enclosed shower, brushed brass vanity and floor tile", 576, 1024),
  },
  {
    n: "11",
    title: "Textured Wallpaper",
    paras: [
      "Wallpaper in a bathroom sounds risky until you realize modern moisture-resistant versions are genuinely built for humidity. It's a fast way to add depth and character without losing any floor space.",
      "Metallics, florals, faux brick &mdash; the options go far beyond what paint or tile can offer, and a patterned wallpaper wall reads as considerably more custom than it actually costs to install.",
      "A dark botanical print like the one shown here, glowing under a backlit mirror in a walk-in shower, proves wallpaper can hold up beautifully even in a genuinely wet space.",
    ],
    photo: photo("textured-wallpaper.png", "Dark green and gold botanical patterned wallpaper accent wall in a walk-in shower with a backlit mirror and floating vanity", 576, 1024),
  },
  {
    n: "12",
    title: "Gallery Wall",
    paras: [
      "Gallery walls aren't just for the living room. A bathroom benefits from personality just as much, and a mix of frames and artwork is one of the easiest ways to add it.",
      "The trick is embracing variety &mdash; mix frame sizes, finishes, and a few mirrors into the arrangement rather than hanging a single uniform grid. It should feel collected, not ordered.",
      "Black and gold frames against a neutral brick wall, like the eclectic mix shown here layered with small decorative mirrors, look genuinely chic without needing a single matching piece.",
    ],
    photo: photo("gallery-wall.png", "Eclectic black and gold framed gallery wall mixing artwork and small mirrors on a painted brick wall above a bathtub", 576, 1024),
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
<p>A bathroom doesn't have to stay boring and purely functional. It can be your personal spa, your design playground, or just a quiet retreat from everything else going on in the house &mdash; and the fastest way to get there is one genuinely good accent wall.</p>
<p>A single wall, done right, can completely change the mood of the whole room. These twelve ideas cover everything from a five-minute paint refresh to a full stone or mosaic statement, so there's an entry point here no matter your budget or how adventurous you're feeling.</p>
${photo("hero.jpg", "Modern minimalist bathroom with a textured concrete-look accent wall, glass shower enclosure and pendant lights over a floating vanity", 1280, 720)}

<h2>12 Bathroom Accent Wall Ideas Worth Stealing</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Your bathroom doesn't have to stay basic. Whether you're drawn to bold color, natural texture, or a wall full of real greenery, an accent wall is the single highest-impact upgrade on this entire list.</p>
<p>Pick the version that actually matches how you want the room to feel, start with one wall, and let the rest of the bathroom stay simple around it. A good accent wall doesn't need backup &mdash; it just needs room to be the star.</p>
`;

module.exports = { body };
