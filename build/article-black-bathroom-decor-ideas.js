// Body content for "13 Black Bathroom Decor Ideas for a Full Bathroom".
// Numbered idea-list format, reordered from the source's 12 sections
// (walls, finish, contrast, fixtures, tiles, lighting, vanities,
// accessories, metallics, texture, shower frames, plants). Distinct
// from the existing black-powder-room-material-choices article, which
// is scoped to a powder room (no shower/tub, half-bath) and framed
// through material execution. This source explicitly covers shower
// frames and wet-area tile, so it's scoped to a full bathroom with
// wet zones — a genuinely different context, not just a reframing of
// the same room type. Source had 0 Pinterest pins across all 14
// images, so all photos are uncredited via photo().

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "black-bathroom-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A powder room can go full black wall-to-wall without much consequence.</p>
<p>A full bathroom, with a shower, tile and real humidity, is a different challenge entirely &mdash; the color choice has to survive wet zones and still feel considered rather than cave-like.</p>
<p>These 13 ideas are built for that version of the room.</p>
${photo("hero.jpg", "Striking black bathroom decor transforming a full bathroom", 1400, 1111)}

<h2>Why Black Is Having a Real Moment Here</h2>
<p>Black reads as dramatic and sophisticated in a way few other bathroom colors manage, and it photographs exceptionally well against white fixtures and natural light.</p>
<p>It also hides water spots and small imperfections better than most pale finishes, which matters more in a room that deals with constant moisture.</p>
${photo("intro.png", "Dramatic black bathroom styling that photographs beautifully", 574, 1024)}

<h2>1. Decide How Much Wall, Not Just Whether</h2>
<p>Full black walls look striking in photos but can feel genuinely heavy in a smaller or darker bathroom without enough natural light.</p>
<p>One accent wall, or black only below a chair rail, delivers most of the drama with less risk of the room feeling closed-in.</p>
${photo("walls.png", "Black accent wall bringing drama without overwhelming the bathroom", 574, 1024)}

<h2>2. Pick Matte or Glossy With the Room's Light in Mind</h2>
<p>Matte black absorbs light and leans moodier and more velvety, while glossy black bounces light around and reads sleeker, more modern.</p>
<p>A bathroom with limited natural light generally does better with some glossy surfaces in the mix, purely for how much more light they reflect.</p>
${photo("finish.png", "Matte and glossy black finishes creating different bathroom moods", 574, 1024)}

<h2>3. Break Up the Black With Real Contrast</h2>
<p>White tile, light wood, or a pale stone counter keeps an all-black scheme from tipping into something closer to a cave than a bathroom.</p>
<p>Even a single white towel or light-colored rug does real work here, giving the eye somewhere to land.</p>
${photo("contrast.png", "White and black contrast balancing a bold bathroom color scheme", 574, 1024)}

<h2>4. Choose Fixtures That Commit to the Look</h2>
<p>A black faucet, black shower fixtures, or a black-framed mirror extend the theme into the room's actual hardware, not just its surfaces.</p>
<p>This is one of the easier ways to commit to the look without touching a single wall or tile.</p>
${photo("fixtures.png", "Black bathroom fixtures extending the theme into hardware details", 574, 1024)}

<h2>5. Use Tile to Add Texture, Not Just Color</h2>
<p>Textured, patterned or matte black tile brings visual depth that a flat painted wall can't, which matters more here than in a powder room with no wet-area tile at all.</p>
<p>This is where a full bathroom's black scheme genuinely diverges from a powder room's &mdash; tile has to perform in the shower, not just look good on a dry wall.</p>
${photo("tiles.png", "Textured black tile adding depth to a full bathroom's wet areas", 574, 1024)}

<h2>6. Layer In More Light Than Usual</h2>
<p>A black bathroom absorbs more ambient light than a pale one, which makes layered lighting &mdash; overhead, vanity, maybe even a small accent fixture &mdash; more necessary than optional.</p>
<p>Skipping this step is one of the most common reasons an otherwise well-designed black bathroom ends up feeling dim rather than dramatic.</p>
${photo("lighting.png", "Layered lighting keeping a black bathroom bright rather than dim", 574, 1024)}

<h2>7. Let the Vanity Be the Showstopper</h2>
<p>A black vanity, especially paired with a contrasting countertop, tends to become the room's natural focal point without any extra styling effort.</p>
<p>This is worth prioritizing over smaller details if only one black element is going into the room's budget.</p>
${photo("vanities.png", "A black vanity serving as a full bathroom's natural focal point", 574, 1024)}

<h2>8. Add Black Through Accessories First</h2>
<p>Black towels, a soap dispenser, or a small tray are the lowest-commitment way to test the look before painting a single wall.</p>
<p>This is also the easiest option to reverse later if the look doesn't end up working the way it did in planning.</p>
${photo("accessories.png", "Black bathroom accessories offering a low-commitment way to test the look", 574, 1024)}

<h2>9. Mix In Warm Metal</h2>
<p>Brass or gold hardware against black surfaces creates genuine warmth that pure black-and-white can feel like it's missing.</p>
<p>Chrome works too, for a cooler, more modern pairing instead of a warmer one.</p>
${photo("metallics.png", "Warm brass and gold metal accents pairing with black bathroom surfaces", 574, 1024)}

<h2>10. Add Texture Beyond the Tile</h2>
<p>A woven rug, a textured towel, or a nubby bath mat keeps an all-black room from reading as flat or one-dimensional.</p>
<p>This matters more here than in most other rooms, since black has a tendency to flatten visual depth more than lighter colors do.</p>
${photo("texture.png", "Woven texture adding dimension to an all-black bathroom scheme", 574, 1024)}

<h2>11. Frame the Shower in Black</h2>
<p>A black-framed shower door or black shower surround brings a sleek, modern edge that a powder room never gets the chance to use, since it has no shower at all.</p>
<p>This single element often does more to define the room's whole look than any wall color choice.</p>
${photo("shower-frames.png", "A sleek black shower frame defining a full bathroom's modern look", 574, 1024)}

<h2>12. Bring In a Plant to Soften It All</h2>
<p>A single plant against black surfaces creates a contrast that makes both the green and the black read as more vivid than either would alone.</p>
<p>Anything genuinely low-light-tolerant works well here, since most bathrooms don't offer ideal plant conditions to begin with.</p>
${photo("plants.png", "A plant softening and brightening an all-black bathroom scheme", 574, 1024)}

<h2>Ready to Commit to Black?</h2>
<p>None of these 13 ideas require redoing the entire bathroom at once.</p>
<p>Start with accessories or a vanity swap to test the look, then move toward tile, fixtures or a shower frame once the direction feels right.</p>
<p>A full bathroom gives black more room to perform than a powder room ever could &mdash; wet-area tile, a shower frame, layered lighting &mdash; and that's exactly where this look does its best work.</p>
`;

module.exports = { body };
