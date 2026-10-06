// Body content for "10 Ways to Make Your Bedroom Feel Like Fall". Photos
// carried over from the source article. The photo captioned for "Mix In
// Natural Elements" in the source is actually a nightstand vignette (lamp,
// mini pumpkin, candle, mug, book) with no eucalyptus/branches/pinecones in
// frame at all — moved it to the Nightstand Styling idea instead, which the
// source had left without a photo. Natural Elements and Candles now run
// without a dedicated photo, spaced so neither lands next to the other.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-bedroom-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Let the Walls Go Moody",
    paras: [
      "If your bedroom still reads like a beach house in late October, it's time for a color shift.",
      "Fall colors are cozy colors by nature &mdash; burnt orange, rust, mustard, olive, and a deep moody navy if you want real drama. You don't have to repaint anything to get there, either.",
      "Swap your pillow covers, bring in a statement rug, hang a seasonal print, or just add a few warm-toned vases and lamps. Small changes, bold shift.",
    ],
    photo: photo("color-palette.png", "Bedroom with a dark navy accent wall, rust and mustard velvet pillows, an olive quilt and an abstract art print in warm tones", 640, 1024),
  },
  {
    n: "02",
    title: "Lean Into Candles",
    paras: [
      "Candles might be the cheapest, easiest way to make a bedroom feel like autumn arrived overnight.",
      "Go for the obvious scents &mdash; cinnamon, apple cider, vanilla chai, a little wood smoke if you're feeling bold. Taper candles bring drama, candle lanterns work beautifully in a quiet corner, and a tray with a few different heights instantly looks styled rather than scattered.",
      "They don't even need to be lit to do their job. But if you do light them, the whole room shifts into something closer to spa energy.",
    ],
  },
  {
    n: "03",
    title: "Swap In Plush Bedding",
    paras: [
      "This is where the real transformation happens &mdash; your bed, obviously.",
      "Summer wants light and airy. Fall wants thick, plush, and genuinely snuggle-worthy. Flannel sheets, a chunky knit throw, a duvet in a deep jewel tone or warm neutral, and more pillows than is strictly necessary &mdash; that's the formula.",
      "There's a reason everyone's Pinterest board for this season is just bedding. A good velvet throw during a rainy October evening is genuinely one of life's better small pleasures.",
    ],
    photo: photo("plush-bedding.png", "Bed with burgundy and mustard velvet pillows, a deep red duvet and a chunky cream knit throw folded across the foot", 640, 1024),
  },
  {
    n: "04",
    title: "Bring in a Few Natural Elements",
    paras: [
      "Fall is already nature's best aesthetic, so borrow from it directly instead of reaching for anything plastic.",
      "Dried eucalyptus or pampas grass in a ceramic vase does most of the work on its own. A bowl of pinecones brings quiet cabin energy, and a few bare branches in a minimalist container add height without any real effort.",
      "None of this needs to be elaborate. One good vase of dried stems on a dresser changes the whole feel of a room.",
    ],
  },
  {
    n: "05",
    title: "Add Texture Everywhere You Can",
    paras: [
      "Texture is the most underrated part of fall decorating. You can nail every color on this list and still end up with a room that feels flat without it.",
      "Woven baskets hold extra blankets while adding warmth. Linen curtains stay soft and airy but still feel seasonal. A faux fur throw is worth trying even if it sounds like a lot &mdash; it isn't. And yes, rugs layered on rugs is very much a real, very good idea.",
      "Texture is the detail that makes a space feel finished instead of just decorated.",
    ],
    photo: photo("texture.png", "Bedroom corner with a macrame wall hanging, a faux fur striped throw on the bed, linen curtains and a woven jute storage basket", 640, 1024),
  },
  {
    n: "06",
    title: "Style the Nightstand for the Season",
    paras: [
      "Your nightstand is prime decor real estate that most people completely ignore.",
      "A small stack of books in warm cover tones, a mini pumpkin (real or faux, no judgment either way), a ceramic mug for bedtime tea, and a candle in an amber or gold holder cover the whole seasonal mood in one small surface.",
      "Keep it intentional rather than crowded, though. One styled vignette beats five random objects competing for attention.",
    ],
    photo: photo("natural-elements.png", "Nightstand styled with a ceramic lamp, a small white pumpkin, a lit amber candle, an open book and a mug of tea beside a bed with mustard pillows", 640, 1024),
  },
  {
    n: "07",
    title: "Refresh the Wall Art",
    paras: [
      "If your walls are still showing off a 2021 beach trip, it might be time for an update.",
      "Fall art doesn't have to mean literal pumpkins or cursive signage. Look for pressed autumn leaves, moody florals, abstract shapes in warm tones, or a vintage-style landscape print instead &mdash; something with more range than seasonal cliché.",
      "Even swapping one or two pieces in an existing gallery wall for something warmer-toned shifts the whole room's mood more than you'd expect.",
    ],
    photo: photo("wall-art.png", "Framed botanical leaf print, a floral still life and a landscape painting hung above a bed with cream and rust-colored bedding", 640, 1024),
  },
  {
    n: "08",
    title: "Make the Room Smell Like the Season",
    paras: [
      "Walk into a room and feel instantly calm? That's almost always the scent doing the work before you've even clocked it consciously.",
      "A diffuser with clove, cinnamon, or orange oil covers the basics. Wax warmers are a lower-risk alternative to an open flame, linen spray in apple or vanilla works directly on the bedding itself, and scented sachets tucked into a drawer handle the spaces you don't think about.",
      "Combine a good scent with warm lighting and genuinely plush bedding, and the whole room starts to feel like it belongs in a different season entirely.",
    ],
    photo: photo("fall-scent.png", "Bed with rust and plaid pillows lit warmly by a floor lamp, with a lit candle and stacked books on the nightstand and a vintage lantern on the floor", 640, 1024),
  },
  {
    n: "09",
    title: "Fix the Lighting Before Anything Else",
    paras: [
      "Overhead lighting is genuinely the enemy of cozy. Flip that ceiling light on and no amount of styling elsewhere is going to save the mood.",
      "Fairy lights draped along a headboard or window do a lot of quiet work. Table and floor lamps with warm-toned bulbs (skip anything labeled daylight) keep the glow soft rather than clinical, and a salt lamp adds a gentle amber tone that somehow always ends up looking cuter than expected.",
      "Good lighting is the difference between a room that glows and one that feels like it's under interrogation. It's worth getting right before anything else on this list.",
    ],
    photo: photo("warm-lighting.png", "Dark bedroom lit warmly by string fairy lights along the headboard and a glowing salt lamp on a nightstand, with plaid and velvet pillows", 640, 1024),
  },
  {
    n: "10",
    title: "Layer the Rugs",
    paras: [
      "This one sounds unnecessary until you try it, and then it becomes very hard to go back.",
      "Start with a large neutral base rug &mdash; jute, sisal, or wool all work. Layer a smaller statement rug on top, something with pattern like plaid, a vintage Persian style, or faux cowhide. Push it slightly off-center under the bed or in a reading corner for a relaxed, unstyled-looking finish.",
      "It's a small move that adds real depth underfoot, and it solves the cold-floor problem that comes standard with fall. Both wins matter.",
    ],
    photo: photo("layered-rugs.png", "Round woven jute rug layered with a smaller patterned vintage-style rug beside a rust accent chair with a knit throw and a round side table", 640, 1024),
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
<p>Fall has a way of sneaking back in every year, and with it comes the realization that your bedroom still looks ready for July. Swap the sweaty sheets for something plush, trade the breezy palette for something warmer, and suddenly the whole room catches up to the season.</p>
<p>Fall decorating was never really about pumpkins on every surface. It's about layers, mood, and texture &mdash; the kind of room you genuinely don't want to climb out of on a cold morning.</p>
<p>Here are ten ways to get there without turning your bedroom into a haunted hayride.</p>
${photo("intro.png", "Warm fall bedroom with tan linen bedding, dried pampas grass and branches in ceramic vases, and a bowl of pinecones on a side table", 640, 1024)}

<h2>10 Ways to Make Your Bedroom Feel Like Fall</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>A Few Final Touches</h2>
<p>Once the basics are covered, a handful of small additions push the whole room further. A fall-leaning playlist &mdash; acoustic, chill, a little indie folk &mdash; sets a mood before you've even changed a single thing visually. Wicker or leather storage baskets keep clutter out of sight without looking clinical. A reading chair or floor pouf layered with a throw gives the room a second cozy zone beyond the bed itself.</p>
<p>Keep it intentional rather than piled on. Cozy was never supposed to mean cluttered &mdash; it's a handful of well-chosen, warm details, not every seasonal item you own stacked in one corner.</p>

<h2>Final Thoughts</h2>
<p>Ten ideas, and you really don't need all of them to feel the shift. A few scented candles and a genuinely plush throw can do more than a full room overhaul if you pick the right ones.</p>
<p>Your bed is about to become real estate you spend a lot more time in over the next few months. It's worth the extra attention.</p>
<p>Light the candle, fluff the pillows, and let the bedroom catch up to the season already happening outside your window.</p>
${photo("hero.jpg", "Warm fall bedroom with a mustard yellow diamond-pattern rug, rust headboard, white bedding and a tripod floor lamp beside a shuttered window", 1280, 800)}
`;

module.exports = { body };
