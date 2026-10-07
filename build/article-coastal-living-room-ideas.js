// Body content for "11 Coastal Living Room Ideas That Don't Feel Like a
// Theme Park". Source had no numbered ideas or Pinterest pin links at
// all — 11 themed sections with bullet lists, rewritten here into the
// site's usual numbered/flowing-paragraph format. All photos stay
// uncredited since the source itself never linked any of them to a pin.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "coastal-living-room-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Start With an Ocean, Sky and Sand Palette",
    paras: [
      "Color carries most of the coastal look before a single piece of furniture gets involved. The goal is light, airy and fresh &mdash; not a themed gift shop.",
      "Lean on whites and creams for the base, a touch of seafoam or turquoise for a hint of color, and warm sandy beige to ground the room. A little navy works for contrast, but it shouldn't take over.",
      "Painting the walls a soft white or pale gray does more for the room's sense of space than almost anything else on this list, making it feel instantly larger and more open.",
    ],
    photo: photo("color-palette.png", "White sofa with seafoam green and cream pillows in a coastal living room with an ocean view through large windows", 574, 1024),
  },
  {
    n: "02",
    title: "Lean on Natural, Texture-Rich Materials",
    paras: [
      "The more natural materials that make it into the room, the more it reads as a genuine slice of coastal calm rather than a themed rental.",
      "Rattan, wicker and jute do most of the work for furniture and rugs, while driftwood or reclaimed wood suits a coffee table or open shelving. Linen and cotton keep the fabrics breezy instead of heavy.",
      "Seagrass baskets earn a spot too &mdash; they add the same natural texture as everything else while quietly hiding the clutter that would otherwise break the look.",
    ],
    photo: photo("natural-textures.png", "Coastal living room with a jute rug, woven baskets and driftwood coffee table bringing in natural texture", 574, 1024),
  },
  {
    n: "03",
    title: "Maximize Every Bit of Natural Light",
    paras: [
      "A coastal room can't live in a dark cave. Light is close to non-negotiable for the look to actually work.",
      "Swap heavy drapes for sheer white curtains, or skip curtains altogether if privacy isn't a concern. A large round mirror, ideally framed in driftwood, bounces what light there is around the room, and keeping furniture low-profile stops anything from blocking it.",
      "When the windows are small or the sun just isn't cooperating, warm lighting through rattan or rope lampshades fakes that golden-hour glow convincingly enough to matter.",
    ],
    photo: photo("natural-light.png", "Living room with sheer white curtains and a large driftwood-framed mirror bouncing natural light around the room", 574, 1024),
  },
  {
    n: "04",
    title: "Choose Coastal Furniture Without Going Full Nautical",
    paras: [
      "Nobody needs their living room to look like a beach-themed gift shop, so the anchors and ship wheels can stay out of it. Furniture with relaxed lines does the job far better.",
      "A slipcovered sofa in white or beige linen is comfortable and washable, a weathered wood coffee table should look sun-bleached rather than sad, and a rattan armchair adds texture and genuine vacation energy.",
      "The style isn't about perfect symmetry or shiny finishes &mdash; it's about ease. A ding or two in the coffee table reads as character, not a flaw.",
    ],
    photo: photo("coastal-furniture.png", "Slipcovered white linen sofa, weathered wood coffee table and a rattan armchair in a coastal living room", 574, 1024),
  },
  {
    n: "05",
    title: "Accessorize Like a Beachcomber, With Restraint",
    paras: [
      "This is where it's easiest to overdo it. The goal is a curated room, not one that looks raided from a souvenir shop.",
      "Faux sea glass or coral pieces, a glass vase filled with sand or collected shells, and coastal artwork like watercolor seascapes or vintage travel posters all earn their place. Nautical throw pillows work too, but one or two is the limit.",
      "Less really is more here &mdash; a single driftwood sculpture reads as chic, while a shelf full of them starts to look like clutter fast.",
    ],
    photo: photo("beachcomber-accents.png", "Living room shelf styled with faux coral, a glass vase of shells and a single driftwood sculpture", 574, 1024),
  },
  {
    n: "06",
    title: "Go Big on Plants",
    paras: [
      "Greenery does more for a coastal room than people expect &mdash; it keeps the space feeling alive and fresh in a way that fakes that just-off-the-coast quality even indoors.",
      "A palm tree or fiddle leaf fig brings drama, a snake plant or pothos covers low-maintenance elegance, and an olive tree leans the whole look toward Mediterranean coastal instead of tropical.",
      "Put them in textured pots &mdash; terracotta, woven baskets, or concrete all work &mdash; for a subtle upgrade that ties the greenery back into the rest of the room's materials.",
    ],
    photo: photo("plants.png", "Large potted palm and fiddle leaf fig plants in textured woven pots styled in a coastal living room", 574, 1024),
  },
  {
    n: "07",
    title: "Layer in Soft, Breezy Textiles",
    paras: [
      "Beach houses are masters of the curl-up-with-a-book feeling, and that comes almost entirely from how the fabrics layer together.",
      "A chunky knit throw works even in summer, cotton or linen pillow covers in washed-out blues and neutrals keep the palette consistent, and a lightweight jute, sisal or flatweave wool rug adds texture underfoot without adding visual weight.",
      "Bold patterns belong to a different style entirely. Here, soft texture and quiet pattern are what make the room feel like it just exhaled.",
    ],
    photo: photo("soft-textiles.png", "Coastal living room sofa layered with a chunky knit throw and striped linen pillow covers in washed-out blue tones", 574, 1024),
  },
  {
    n: "08",
    title: "Mix Old and New for a Lived-In Feel",
    paras: [
      "The effortless, relaxed quality in real coastal homes usually comes from blending modern pieces with something worn-in, not from buying everything new at once.",
      "Pair a modern slipcovered sofa with a weathered wood side table, set a vintage-style lantern next to a sleek glass vase, or combine an old framed map with a newer beachy print on the same gallery wall.",
      "A little imperfection adds soul. The room shouldn't look staged &mdash; it should feel like it's been slowly put together over time.",
    ],
    photo: photo("old-and-new.png", "Living room mixing a modern slipcovered sofa with a weathered wood side table and vintage-style lantern", 574, 1024),
  },
  {
    n: "09",
    title: "Add Coastal Scents to Round Out the Feel",
    paras: [
      "This one isn't visual, but scent does real work in how a space actually feels once someone sits down in it.",
      "A candle with notes of sea salt, driftwood or coconut, an essential oil diffuser running lavender, eucalyptus or citrus, or a reed diffuser for a subtle all-day fragrance all layer the ocean-inspired feel in without touching a single surface.",
      "Light one, sink into the sofa, and the room starts doing the rest of the work on its own.",
    ],
    photo: photo("coastal-scents.png", "Candle and reed diffuser styled on a side table in a coastal living room", 574, 1024),
  },
  {
    n: "10",
    title: "Add a Touch of Coastal Glam",
    paras: [
      "Beachy doesn't have to mean basic. A little glam layered carefully on top elevates the whole room without fighting the relaxed base underneath it.",
      "Brushed gold or brass accents on drawer pulls, lamps or side tables, a pearlescent finish on a vase or mirror, and a velvet pillow in a soft ocean hue all work when they're balanced against the room's natural materials.",
      "Keep the shine to a minimum. The target is a beach house owned by someone with taste, not something trying too hard to sparkle.",
    ],
    photo: photo("coastal-glam.png", "Coastal living room with brushed gold accents and a velvet pillow in soft ocean blue adding a touch of glam", 574, 1024),
  },
  {
    n: "11",
    title: "Don't Forget the Floors",
    paras: [
      "The best coastal decor in the world can't save a floor that still reads like rental carpet from the nineties. The floor needs its own upgrade, or at least a smart disguise.",
      "Whitewashed wood or faux-wood vinyl planks, light oak or bamboo for that sun-bleached look, and layered rugs over whatever can't be changed all solve the problem at different budgets.",
      "When none of that is an option, a single jute rug thrown down over the existing floor does more than people expect, and it works almost every time.",
    ],
    photo: photo("floors.png", "Whitewashed wood flooring layered with a jute rug in a coastal-style living room", 574, 1024),
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
<p>There's a specific feeling that hits the second you walk into a beach house &mdash; relaxed, breezy, unmistakably coastal, even before anyone points out the ocean view. Recreating that at home doesn't require an actual beachfront property or an unlimited budget, just a handful of the right style choices used with some restraint.</p>
<p>Coastal design isn't about copying a beach house down to the last seashell. It's about capturing a feeling &mdash; light, natural materials, soft texture &mdash; and knowing when to stop before it tips into theme-park territory.</p>
${photo("hero.jpg", "Bright coastal living room with white furniture and large windows overlooking the ocean", 1152, 768)}

<h2>Why Coastal Style Is Easy to Get Wrong</h2>
<p>The line between a genuinely coastal room and a souvenir-shop living room is thinner than it looks. Both use blue, both use shells, both reach for rope and rattan &mdash; the difference comes down almost entirely to restraint. Every idea on this list works better with less of it, not more.</p>
<p>None of these require a full renovation, either. A color shift, a textile swap, or one well-chosen plant can move a room noticeably closer to the look without touching a single wall.</p>

<h2>11 Coastal Living Room Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of this requires copying every idea at once. A sea-glass vase and a set of white curtains can start the shift just as well as a full slipcover-and-jute-rug overhaul &mdash; the goal is the feeling, not a checklist.</p>
<p>Pick one or two changes that fit how the room already gets used, let the rest follow over time, and the coastal feeling builds on its own without ever looking forced.</p>
`;

module.exports = { body };
