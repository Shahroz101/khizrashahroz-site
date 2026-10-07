// Body content for "16 Easter Wreaths Worth Hanging on the Door". Photos
// carried over from the source article. The source scattered
// fabricated/misattributed quotes throughout (Leonardo da Vinci,
// Wassily Kandinsky, Coco Chanel, Maya Angelou, etc.) — cut entirely,
// not part of this site's voice. All 16 wreaths have a photo; none
// dropped. Condensed 3 padded intro/FAQ sections down to 1.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "easter-wreath-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "easter-wreath-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Classic Pastel Floral",
    paras: [
      "If Easter had one signature wreath, this would be it &mdash; a grapevine base layered with soft pink peonies, white hydrangeas, and a hint of lavender.",
      "A little greenery tucked in and a small bow in blush or cream round it out without ever feeling overdone.",
      "It works because it's genuinely timeless, and it suits a traditional home especially well &mdash; welcoming without trying too hard to get there.",
    ],
    photo: pinPhoto("classic-pastel.jpg", "Classic pastel floral Easter wreath with pink peonies and white hydrangeas", 683, 1024, "https://www.pinterest.com/pin/1196337405220194/", "Classic Pastel Easter Wreath"),
  },
  {
    n: "02",
    title: "Farmhouse Bunny",
    paras: [
      "This one leans fully into cozy charm. A grapevine or faux moss base, a wooden bunny silhouette in the center, and burlap ribbon wrapped loosely around one side deliver instant rustic warmth.",
      "It's a strong fit for anyone whose home already leans toward shiplap and neutral throw pillows &mdash; the aesthetic carries straight through to the front door.",
      "Nothing about it tries too hard. The charm comes from how unfussy the whole thing is.",
    ],
    photo: pinPhoto("farmhouse-bunny.jpg", "Farmhouse-style Easter wreath with a wooden bunny silhouette and burlap ribbon", 574, 1024, "https://www.pinterest.com/pin/6614730699249032/", "Farmhouse Bunny Easter Wreath"),
  },
  {
    n: "03",
    title: "Minimalist Greenery",
    paras: [
      "Not everyone wants a bunny explosion on their front door. This wreath keeps it deliberately simple &mdash; eucalyptus, olive branches, or boxwood, with a tiny cluster of white eggs for a subtle Easter nod.",
      "That's genuinely the whole formula. No extra embellishment required.",
      "It suits a black front door especially well &mdash; the contrast between the dark background and the muted greenery looks stunning without any color at all.",
    ],
    photo: pinPhoto("minimalist-greenery.jpg", "Minimalist greenery Easter wreath with eucalyptus and white eggs", 582, 873, "https://www.pinterest.com/pin/192458584071546987/", "Minimalist Greenery Easter Wreath"),
  },
  {
    n: "04",
    title: "Whimsical Egg Explosion",
    paras: [
      "For anyone ready to go fully bold, this wreath covers the entire base in colorful speckled eggs &mdash; pink, blue, yellow, mint &mdash; with florals peeking through for depth.",
      "The effect reads as playful and genuinely joyful, the kind of wreath that makes people smile walking up to the door.",
      "The one rule worth keeping in mind: controlled chaos looks fun, but overcrowding the base tips it into looking messy instead of festive.",
    ],
    photo: pinPhoto("egg-explosion.jpg", "Whimsical Easter wreath covered in colorful speckled eggs", 576, 1024, "https://www.pinterest.com/pin/552887291772082425/", "Whimsical Egg Explosion Wreath"),
  },
  {
    n: "05",
    title: "Rustic Moss and Twig",
    paras: [
      "This one feels like it was found in a countryside cottage rather than built from a craft store run &mdash; natural twigs, faux moss, a few tiny white flowers, maybe a small bird's nest tucked in.",
      "The overall effect reads as genuinely organic and earthy, nothing about it feels manufactured.",
      "It blends especially well against a stone exterior, where the natural textures echo the materials already on the house.",
    ],
    photo: pinPhoto("rustic-moss-twig.jpg", "Rustic Easter wreath made from natural twigs, moss and a small bird's nest", 768, 1024, "https://www.pinterest.com/pin/152066924914238006/", "Rustic Moss and Twig Wreath"),
  },
  {
    n: "06",
    title: "Monogram",
    paras: [
      "For something more personal, a monogram wreath adds an initial right at the center of the design.",
      "Florals wrap the outer edge, and a wooden or metal monogram letter anchors the middle &mdash; simple, custom, and immediately eye-catching.",
      "This style consistently earns compliments. People respond to the personal touch, and it reads as genuinely intentional rather than generic.",
    ],
    photo: pinPhoto("monogram.jpg", "Monogram Easter wreath with a wooden initial surrounded by florals", 736, 736, "https://www.pinterest.com/pin/523895369173852247/", "Monogram Easter Wreath"),
  },
  {
    n: "07",
    title: "Carrot Patch",
    paras: [
      "Yes, carrots &mdash; and somehow it works. Faux greenery layered with small decorative carrots tucked throughout, finished with a gingham bow for charm.",
      "It sounds a little silly on paper. In practice, it reads as genuinely adorable.",
      "This one's a strong pick for a household with kids &mdash; it tends to get noticed and smiled at more than almost any other style on this list.",
    ],
    photo: pinPhoto("carrot-patch.jpg", "Carrot patch Easter wreath with decorative carrots and a gingham bow", 931, 1024, "https://www.pinterest.com/pin/250442429274888830/", "Carrot Patch Easter Wreath"),
  },
  {
    n: "08",
    title: "Elegant Neutral",
    paras: [
      "For anyone who prefers understated decor, this wreath wins without much competition. Ivory florals, soft beige ribbon, muted greenery, and tiny speckled eggs in cream tones.",
      "The whole effect reads as refined rather than seasonal-specific, which means it can stay up a little longer without feeling out of place.",
      "It pairs especially well with gold door hardware, where the warm metal tones tie the whole look together.",
    ],
    photo: pinPhoto("elegant-neutral.jpg", "Elegant neutral Easter wreath with ivory florals and cream speckled eggs", 450, 450, "https://www.pinterest.com/pin/616008055318843449/", "Elegant Neutral Easter Wreath"),
  },
  {
    n: "09",
    title: "Tulip-Filled Spring Garden",
    paras: [
      "Nothing announces spring quite as loudly as tulips. Vibrant faux tulips in soft pink, coral, yellow and white, layered thickly around a grapevine base, let the florals take over entirely.",
      "Everything else around them stays minimal on purpose &mdash; the tulips are the whole point.",
      "Investing in genuinely good faux tulips pays off here. Cheap versions tend to droop and look sad within a season, while quality ones reuse for years.",
    ],
    photo: pinPhoto("tulip-garden.jpg", "Tulip-filled spring Easter wreath with vibrant pink, coral and yellow tulips", 575, 1024, "https://www.pinterest.com/pin/1074741898592903779/", "Tulip-Filled Spring Easter Wreath"),
  },
  {
    n: "10",
    title: "Vintage Lace and Floral",
    paras: [
      "For anyone drawn to soft, romantic decor, this wreath feels pulled straight out of a cottage novel &mdash; delicate lace ribbon wrapped around the base, tucked with muted roses and baby's breath.",
      "A tiny fabric bow finishes the softness without adding any extra weight to the design.",
      "It suits a white or light gray door especially well, reading as dreamy without ever looking fragile.",
    ],
    photo: pinPhoto("vintage-lace.jpg", "Vintage lace and floral Easter wreath with muted roses and baby's breath", 574, 1024, "https://www.pinterest.com/pin/309059593199554929/", "Vintage Lace Easter Wreath"),
  },
  {
    n: "11",
    title: "Bold Modern Geometric",
    paras: [
      "Not everyone wants rustic twigs and bunny silhouettes. For clean lines instead, a thin metal geometric frame makes for a genuinely modern base.",
      "Decorating only one side with florals and a few minimalist eggs keeps the geometry itself as the real focal point.",
      "It suits a matte black door especially well, reading as intentional and designer-level rather than seasonal clutter.",
    ],
    photo: pinPhoto("bold-modern-geometric.jpg", "Bold modern Easter wreath with a geometric metal frame and minimal florals", 574, 1024, "https://www.pinterest.com/pin/318348267431333401/", "Bold Modern Geometric Wreath"),
  },
  {
    n: "12",
    title: "Lavender Field",
    paras: [
      "Lavender brings a calm elegance that almost nothing else on this list matches. Faux lavender stems layered with soft greenery and tiny white blossoms, kept mostly to purple and green.",
      "The overall feeling is genuinely serene &mdash; a strong fit for an entryway console just as much as a front door.",
      "Purple tones have a way of elevating decor almost instantly, even in small doses like this.",
    ],
    photo: pinPhoto("lavender-field.jpg", "Lavender field Easter wreath with faux lavender stems and white blossoms", 768, 1024, "https://www.pinterest.com/pin/164311086401741962/", "Lavender Field Easter Wreath"),
  },
  {
    n: "13",
    title: "Speckled Egg and Hydrangea",
    paras: [
      "Hydrangeas always read as a little luxurious on their own. Paired with speckled eggs, the combination becomes pure spring.",
      "Large hydrangea blooms in white or pale blue, with speckled eggs scattered evenly around the base, add real texture.",
      "The hydrangeas fill space beautifully on their own, which means the wreath makes a real impact without ever feeling overcrowded.",
    ],
    photo: pinPhoto("speckled-egg-hydrangea.jpg", "Speckled egg and hydrangea Easter wreath with large white blooms", 683, 1024, "https://www.pinterest.com/pin/39265828000973348/", "Speckled Egg and Hydrangea Wreath"),
  },
  {
    n: "14",
    title: "Gingham Ribbon",
    paras: [
      "Sometimes the ribbon really does make the whole wreath. A simple greenery base, topped with an oversized gingham bow in pastel pink, blue or yellow, left to cascade slightly down one side.",
      "The greenery base can stay the same year to year while the ribbon changes &mdash; a small, smart way to refresh the look without starting over.",
      "It's an easy way to save money on future seasonal swaps while still getting a genuinely new look each time.",
    ],
    photo: pinPhoto("gingham-ribbon.jpg", "Gingham ribbon Easter wreath with an oversized pastel bow", 683, 1024, "https://www.pinterest.com/pin/795518721724003188/", "Gingham Ribbon Easter Wreath"),
  },
  {
    n: "15",
    title: "Bunny Silhouette Statement",
    paras: [
      "This one makes its statement through restraint rather than volume. A large wooden bunny cutout anchors the center, surrounded lightly with florals and greenery instead of filling the whole base.",
      "The bunny becomes the art itself, rather than one decoration lost among many others.",
      "It's a strong pick for anyone who wants something clearly Easter-themed without any risk of visual clutter.",
    ],
    photo: pinPhoto("bunny-silhouette.jpg", "Bunny silhouette statement Easter wreath with a large wooden cutout", 768, 1024, "https://www.pinterest.com/pin/14918242506165748/", "Bunny Silhouette Statement Wreath"),
  },
  {
    n: "16",
    title: "Luxe Gold and White",
    paras: [
      "For something more elevated to close the list, this wreath combines white florals and soft greenery with subtle gold accents &mdash; a metallic egg detail here, a thin gold frame base there.",
      "Gold catches light beautifully, elevating the entire design without ever screaming for attention.",
      "Keeping the gold refined rather than flashy is what separates this from looking overdone &mdash; restraint is what makes it read as genuinely expensive.",
    ],
    photo: pinPhoto("luxe-gold-white.jpg", "Luxe gold and white Easter wreath with metallic accents", 482, 589, "https://www.pinterest.com/pin/7881368095484743/", "Luxe Gold and White Easter Wreath"),
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
<p>The front door sets the mood before anyone even rings the bell, and an Easter wreath does more of that work than most people give it credit for. It shows attention to detail, adds real warmth, and makes a home feel noticeably more welcomed into the season.</p>
<p>What separates a genuinely polished wreath from a cluttered one comes down to a few things: real color harmony instead of just grabbing every pastel in sight, some actual texture to add depth, and a clear focal point that keeps the whole design from feeling scattered.</p>
${photo("hero.jpg", "Pinterest-worthy Easter wreath hanging on a front door", 575, 422)}

<h2>What Makes a Wreath Actually Pinterest-Worthy</h2>
<p>Color harmony, real texture, and one clear focal point are the three things that separate a styled wreath from a cluttered one. Skip any of those and the design starts to feel unfinished no matter how much is actually on it.</p>
${pinPhoto("intro-matters.jpg", "Beautifully styled Easter wreath hanging on a front door", 786, 900, "https://www.pinterest.com/pin/28710516370888555/", "Pinterest-Worthy Easter Wreath")}

<h2>16 Easter Wreaths Worth Hanging</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>A Couple of Styling Basics</h2>
<p>Hanging height matters more than people expect &mdash; centering the wreath slightly above the door's midpoint, roughly at eye level, reads as intentional. Too low looks awkward; too high looks disconnected from the rest of the door. Layering in a few other seasonal touches nearby, rather than letting the wreath float completely alone, helps it anchor the whole entryway instead of just sitting there as a single accent.</p>
<p>Protecting it from direct sunlight keeps the colors from fading fast, especially on a porch that gets real afternoon sun &mdash; UV-protected florals are worth the extra cost if that's the case. And storing it properly after the season, labeled clearly, saves real frustration the next time it comes back out of a box.</p>

<h2>Final Thoughts</h2>
<p>Sixteen wreaths, every style from rustic twigs to gold-accented luxe, and all of them capable of turning a forgettable front door into something people actually notice walking up.</p>
<p>Whatever direction feels right &mdash; bold with tulips and eggs, or elegant with gold and ivory &mdash; choosing it with intention is what makes the difference. A door that looks this considered tends to make the whole house feel a little more welcoming.</p>
`;

module.exports = { body };
