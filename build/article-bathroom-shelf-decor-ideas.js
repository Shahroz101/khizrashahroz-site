// Body content for "15 Bathroom Shelf Decor Ideas That Actually Work".
// Photos carried over from the source article (Pinterest/"Source"
// labeled, no named photographer, credited via pinPhoto() to match site
// style). The source reused two photos twice each (the hero photo was
// reused for idea "Natural Wood Accents", and the "Layered Towels" photo
// was reused for "Matching Containers") — kept both reuses as the source
// had them rather than dropping either idea's photo. Condensed 5 padded
// intro H2/H3 sections down to 2.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-shelf-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-shelf-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Layered Towels for Effortless Style",
    paras: [
      "Neatly folded towels look genuinely good and solve a real storage problem at the same time, which makes this one of the easiest wins on this entire list.",
      "Neutral towels with a little texture work best &mdash; whites, beiges, and soft grays almost never miss. Roll or fold them tightly, stack in odd numbers, and keep the larger towels on the lower shelves.",
      "The effect, like the stacked towels shown here, reads as functional and beautiful at the same time. That combination is rarer than it should be.",
    ],
    photo: pinPhoto("layered-towels.jpg", "Rustic wood bathroom shelf with neatly rolled towels, apothecary jars and a diffuser above a toilet", 736, 736, "https://www.pinterest.com/pin/4610560189644878592/", "Layered Towels on a Bathroom Shelf"),
  },
  {
    n: "02",
    title: "Small Plants for a Fresh Feel",
    paras: [
      "Plants bring a bathroom shelf to life, literally and visually. Low-maintenance greenery that won't judge you for forgetting to water it is the move.",
      "Humidity-loving plants genuinely thrive in a bathroom environment &mdash; pothos, snake plants, and ferns are all solid picks, and a quality faux plant works too if real ones feel like one more thing to manage.",
      "A mix of trailing and potted greenery, like the boho shelf styling shown here, softens hard surfaces and instantly elevates whatever else is sharing the shelf.",
    ],
    photo: pinPhoto("small-plants.jpg", "Boho bathroom shelf with trailing pothos, potted succulents, woven baskets and a framed quote above a wood crate", 736, 920, "https://www.pinterest.com/pin/68748866448/", "Small Plants on a Bathroom Shelf"),
  },
  {
    n: "03",
    title: "Decorative Storage Jars",
    paras: [
      "Cotton balls and Q-tips were never going to look good on their own, and decorative jars fix that problem instantly.",
      "Matching containers create visual harmony; random mismatched ones create visual noise. Glass jars read clean, ceramic containers add warmth, and wooden lids bring in texture.",
      "A fully coordinated set, like the labeled apothecary jars shown here, proves that style and organization aren't actually in conflict &mdash; they just need to match.",
    ],
    photo: pinPhoto("storage-jars.jpg", "Bathroom shelves styled with matching apothecary jars of cotton balls, bath salts and a diffuser bottle", 736, 981, "https://www.pinterest.com/pin/24840235436279113/", "Decorative Storage Jars on a Bathroom Shelf"),
  },
  {
    n: "04",
    title: "Candles for Instant Spa Vibes",
    paras: [
      "Nothing transforms a bathroom shelf faster than candles, and that holds true even for the ones that never actually get lit.",
      "Group candles in varying heights for instant depth. Stick to one scent family, avoid anything overpowering, and keep the containers simple.",
      "A tiered tray with pillar candles and a few natural touches, like the one shown here, should feel calming rather than like a perfume store exploded across the shelf.",
    ],
    photo: pinPhoto("candles.jpg", "Two-tier wood tray on a bathroom shelf with pillar candles, seashells, a small plant and a wash your worries away sign", 736, 981, "https://www.pinterest.com/pin/825073594270872061/", "Candles on a Bathroom Shelf"),
  },
  {
    n: "05",
    title: "Artwork Leaned Against the Wall",
    paras: [
      "This one surprises people every time, but leaning framed art against the wall on an open shelf genuinely works, and it works beautifully.",
      "Moisture-resistant frames matter here more than almost anywhere else in the house &mdash; trust that one the hard way if needed.",
      "Black-and-white prints, botanical sketches, and minimal line art, like the framed piece shown here, all add personality without committing to a single wall hole.",
    ],
    photo: pinPhoto("artwork.jpg", "Framed botanical bathtub artwork leaned against the wall on a bathroom shelf with a diffuser and dried flowers", 736, 981, "https://www.pinterest.com/pin/503206958384513612/", "Artwork Leaned on a Bathroom Shelf"),
  },
  {
    n: "06",
    title: "Woven Baskets for Texture",
    paras: [
      "Bathrooms need softness somewhere, and woven baskets bring real warmth while hiding clutter like absolute pros.",
      "Lower shelves are the natural home for baskets &mdash; they balance the heavier visual weight and keep the eye grounded.",
      "Use them for extra toilet paper, cleaning supplies, or hair tools, the way the basket shown here handles overflow storage. They look intentional even while quietly hiding actual chaos.",
    ],
    photo: pinPhoto("woven-baskets.jpg", "Dark wood bathroom shelves styled with a woven basket, lavender stems, a mirror and glass apothecary jars", 736, 981, "https://www.pinterest.com/pin/256423772530212540/", "Woven Baskets on a Bathroom Shelf"),
  },
  {
    n: "07",
    title: "Minimalist Soap and Lotion Bottles",
    paras: [
      "Plastic bottles with loud branding quietly ruin an otherwise nice shelf every time. Swapping them out is one of the simplest upgrades available.",
      "Uniform bottles calm the eye; mismatched labels do the opposite. Glass dispensers, neutral labels, and refillable designs are the standard worth aiming for.",
      "A row of matching amber glass pumps, like the ones shown here, makes a shelf look considerably more high-end for very little actual cost.",
    ],
    photo: pinPhoto("soap-bottles.jpg", "Black floating bathroom shelf with matching amber glass soap and lotion pump bottles", 683, 1024, "https://www.pinterest.com/pin/2603712281790838/", "Minimalist Soap Bottles on a Bathroom Shelf"),
  },
  {
    n: "08",
    title: "Natural Wood Accents",
    paras: [
      "Wood adds genuine warmth to bathrooms that can otherwise feel sterile and overly hard-surfaced. A few small wooden elements go a long way.",
      "Not every wood survives bathroom humidity, so choose carefully &mdash; teak trays, bamboo accessories, and sealed wooden boxes all hold up reliably over time.",
      "A rustic wood shelf setup like the one shown here, with its warm tone and simple styling, shows exactly how far natural materials can carry a bathroom without ever overpowering it.",
    ],
    photo: pinPhoto("natural-wood.jpg", "Rustic brown wood floating shelves in a bathroom with flowers, folded towels and a home sweet home sign", 736, 981, "https://www.pinterest.com/pin/540643130286615038/", "Natural Wood Shelf Accents"),
  },
  {
    n: "09",
    title: "Stacked Books for Character",
    paras: [
      "Books in a bathroom sound unusual until it's actually done &mdash; then it just works. Stick to visually pleasing covers rather than whatever's closest on the shelf.",
      "Design books, photography collections, and small hardcovers all read well here. The goal isn't a reading list, it's texture and height.",
      "Stacked horizontally next to a few other collected objects, a short pile of books adds genuine personality to a shelf that would otherwise be all bottles and jars.",
    ],
    photo: photo("personal-touches.jpg", "Bathroom shelves styled with a small ceramic house, a vintage clock, stacked books and a Hello Sweet Cheeks sign", 512, 1024),
  },
  {
    n: "10",
    title: "Apothecary Bottles for Vintage Charm",
    paras: [
      "Mixing a modern bathroom with a few vintage details is an easy way to add character, and apothecary-style bottles nail that look better than almost anything else.",
      "Keep them empty or fill them with bath salts &mdash; either way, they photograph well and read as considered rather than cluttered.",
      "The trick is restraint: group them in threes, pair them with more modern pieces, and use them sparingly. Too many and the shelf starts to feel like a museum display instead of a bathroom.",
    ],
    photo: pinPhoto("apothecary-bottles.jpg", "Bathroom shelf styled with glass apothecary jars, dried flowers, a diffuser bottle and succulents against a black background", 450, 450, "https://www.pinterest.com/pin/715650197080007136/", "Apothecary Bottles on a Bathroom Shelf"),
  },
  {
    n: "11",
    title: "Sculptural Decor Pieces",
    paras: [
      "Every shelf benefits from a genuine focal point, and sculptural objects do that job better than almost anything else on this list.",
      "Organic shapes and matte finishes work best &mdash; think stone objects, ceramic forms, and abstract shapes that catch the eye without shouting for attention.",
      "A single sculptural piece, like the wood knot object shown here anchoring a row of jars, adds real interest without adding clutter.",
    ],
    photo: pinPhoto("sculptural-decor.jpg", "Black bathroom shelves with a sculptural wood knot object, apothecary jars, a woven vase and a potted plant", 576, 1024, "https://www.pinterest.com/pin/703756188314980/", "Sculptural Decor on a Bathroom Shelf"),
  },
  {
    n: "12",
    title: "Trays to Create Order",
    paras: [
      "Trays do real organizational work by grouping loose items into a single visual unit. It's a small trick that reads as genuine design intention.",
      "Perfume bottles, skincare products, and candles all benefit from being corralled onto one tray rather than scattered across the shelf.",
      "The payoff is instant structure for almost no effort &mdash; one of the lowest-cost, highest-impact moves on this whole list.",
    ],
    photo: photo("intro-matters1.jpg", "Bathroom shelf styled with a wash brush floss flush sign, trailing plants, a wood knot object and apothecary jars", 576, 1024),
  },
  {
    n: "13",
    title: "Seasonal Accents for Easy Updates",
    paras: [
      "Switching shelf decor with the seasons keeps things feeling fresh without requiring a full makeover every few months.",
      "Small changes work best here &mdash; dried florals in fall, lighter tones in summer, cozy textures in winter. Nothing drastic, just enough to notice.",
      "A seasonal wreath and a pumpkin or two, like the fall styling shown here, prove that a shelf should genuinely evolve along with the rest of the house.",
    ],
    photo: pinPhoto("seasonal-accents.jpg", "Bathroom shelves styled with a fall wreath, a small pumpkin, dried branches and a framed landscape print", 600, 600, "https://www.pinterest.com/pin/31103053670446007/", "Seasonal Accents on a Bathroom Shelf"),
  },
  {
    n: "14",
    title: "Matching Containers for Visual Calm",
    paras: [
      "Consistency creates calm, and that's really the whole philosophy behind this one. Aim for visual harmony across every container on the shelf.",
      "Pick one material or one color palette and commit to it &mdash; all-white ceramics, all-glass containers, or a neutral mix of textures all work.",
      "A fully coordinated shelf setup like the one shown here, where towels, jars and accessories all share the same warm tones, reads as intentional rather than randomly assembled.",
    ],
    photo: photo("matching-containers.jpg", "Rustic wood bathroom shelf with neatly rolled towels, apothecary jars and a diffuser, matching the warm tones throughout", 736, 736),
  },
  {
    n: "15",
    title: "Personal Touches That Feel You",
    paras: [
      "This is the part that actually makes a shelf feel real rather than staged. Personal items belong here more than anywhere else in the bathroom.",
      "A framed quote, a travel souvenir, a favorite scent &mdash; subtle personal decor does more for a space than another matching jar ever could.",
      "A collection of small, meaningful objects, like the quirky knickknacks and vintage clock shown here, makes clear this bathroom belongs to someone, not a showroom.",
    ],
    photo: pinPhoto("intro-choose.jpg", "Light wood floating bathroom shelves styled with a framed flower print, dried botanicals, plants and a woven basket of towels", 683, 1024, "https://www.pinterest.com/pin/4592334741757134080/", "Personal Touches on a Bathroom Shelf"),
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
<p>Bathroom shelves get installed with big dreams &mdash; a spa-like vibe, Pinterest-level perfection, shelves that somehow whisper "effortlessly stylish." And then reality sets in. Random bottles. A half-used candle. One plant that keeps getting forgotten at watering time.</p>
<p>Bathroom shelf decor only really works when it balances style, function, and actual daily habits. Some ideas look amazing in photos and fail completely in real life. Others become long-term favorites nobody expected. This is what genuinely works.</p>
${photo("hero.jpg", "Rustic wood bathroom shelf styled with flowers, folded towels, soap bottles and a home sweet home sign above a toilet", 736, 981)}

<h2>Why Shelf Decor Matters More Than It Seems</h2>
<p>Bathroom shelves don't just hold stuff &mdash; they set the tone for the entire room. Walk into any bathroom and the eye goes straight to open shelving. Cluttered shelves feel stressful because they visually shout instead of calmly existing; think of them as a small stage where whatever gets placed there becomes part of the room's personality.</p>
<p>Pretty but impractical decor never lasts, either. If a towel can't be grabbed easily, the setup gets resented within a week. The best bathroom shelf decor always looks intentional, serves a real purpose, and stays easy to maintain &mdash; hit all three and the shelf genuinely works. Worth noting too: bathrooms stay humid, and some materials simply can't handle that. Skip anything that rusts easily, absorbs moisture, or demands constant cleaning.</p>
${photo("intro-mistakes.jpg", "Bathroom shelf with styled decor showing dried flowers, a glass jar and a diffuser against a soft gray wall", 683, 1024)}

<h2>Choosing a Direction Before Decorating</h2>
<p>Before picking a single item, settle on the vibe first &mdash; cozy, modern, spa-like, bold. That one decision guides everything that follows. Shelves generally look best when they echo the bathroom's overall style; mixing styles can work, but only with real intention behind it. Common directions include minimal and modern, cozy and rustic, clean spa-inspired, and bold and eclectic.</p>
<p>Once a direction is picked, decorating gets noticeably easier &mdash; every item either fits the vibe or it doesn't, and that filter does most of the decision-making automatically.</p>
${photo("intro-matters2.jpg", "Light wood tiered bathroom shelves styled with a wash brush floss flush sign, trailing succulents, a wood knot object and a small potted plant", 736, 981)}

<h2>15 Bathroom Shelf Decor Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Bathroom shelves carry real design potential. The best bathroom shelf decor balances beauty, function, and personality &mdash; it never required expensive items or perfect symmetry. It required intention. A rule of three keeps groupings balanced, mixing heights and textures keeps things from feeling flat, and stepping back to remove one item almost always improves the result.</p>
<p>Start small. Edit what's already there. Add only the pieces that actually get used. If the shelves make someone smile walking past, that's the whole assignment done right.</p>
`;

module.exports = { body };
