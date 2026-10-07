// Body content for "15 Patio Ideas That Make You Want to Live Outside".
// Photos carried over from the source article (AI-generated style, no
// Pinterest links, all uncredited to match). All 15 ideas have a photo;
// none dropped. 3 ideas (Fire Pit, Pergola, Water Feature) also appear
// in the already-published pergola-ideas article — kept per the source
// list but written as general patio accessories rather than
// pergola-specific features, to stay distinct from that article's
// pergola-centric angle.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "patio-transformation-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Mix and Match Furniture Instead of Buying a Set",
    paras: [
      "Matchy-matchy patio sets are on their way out. A space that feels curated rather than showroom-ordered comes from mixing materials and styles on purpose.",
      "A wooden table paired with black metal chairs, wicker seating with bold cushions, or concrete stools next to a boho pouf all read as considered rather than random.",
      "A mismatched look tends to feel more intentional than a matched one &mdash; like each piece has its own story instead of all arriving in the same box.",
    ],
    photo: photo("mixed-furniture.png", "Patio furniture mixing wood, metal and wicker materials for a curated look", 574, 1024),
  },
  {
    n: "02",
    title: "Layer in an Outdoor Rug",
    paras: [
      "An outdoor rug is one of the easiest ways to define a patio and make it feel like an actual room instead of a slab with furniture on it.",
      "It adds color and texture, softens hard flooring underfoot, and ties scattered furniture pieces together into one cohesive layout.",
      "A bold pattern does double duty here &mdash; it hides dirt and the occasional muddy paw print far better than a plain, light-colored weave ever could.",
    ],
    photo: photo("outdoor-rugs.png", "Outdoor rug with a bold pattern layered under patio furniture", 574, 1024),
  },
  {
    n: "03",
    title: "Zone the Space for Lounging and Dining",
    paras: [
      "A patio that feels like a random pile of furniture dumped in one corner usually just needs to be split into clear zones.",
      "An outdoor rug to define each area, a separate lounge setup and dining table, and a bar cart or plant stand marking the boundary between them all help.",
      "It gives the whole space actual purpose &mdash; nobody stands around wondering where to sit once the zones are obvious.",
    ],
    photo: photo("zoned-areas.png", "Patio divided into a lounging zone and a separate dining zone", 574, 1024),
  },
  {
    n: "04",
    title: "Add a Fire Feature for Evening Ambiance",
    paras: [
      "A fire pit or similar fire feature is one of the most reliable ways to extend how late a patio actually gets used.",
      "It adds literal and figurative warmth, turning a chilly evening into a reason to stay outside rather than head back in.",
      "It becomes the natural centerpiece for late-night conversation almost by default &mdash; something simple to gather around works better than something elaborate.",
    ],
    photo: photo("fire-pit.png", "Fire pit glowing on a patio in the evening as a gathering spot", 574, 1024),
  },
  {
    n: "05",
    title: "Install Mood Lighting Beyond the Porch Bulb",
    paras: [
      "A single bulb dangling overhead rarely does a patio any favors after dark. Real outdoor lighting changes the whole feel of the space.",
      "String lights draped overhead, lanterns with flameless candles, or solar stake lights lining a path all add warmth without any real installation effort.",
      "Overhead string lighting in particular gives a patio that soft, celebratory glow usually reserved for an outdoor event.",
    ],
    photo: photo("mood-lighting.png", "Patio strung with overhead string lights creating a warm evening glow", 574, 1024),
  },
  {
    n: "06",
    title: "Go Vertical With a Garden Wall",
    paras: [
      "Limited floor space doesn't rule out greenery. A vertical garden solves the problem by moving the plants onto the wall instead.",
      "Wall-mounted planters or a simple built frame filled with herbs, succulents or trailing vines turn a blank wall into a genuine feature.",
      "It adds real texture and life to the space without taking up a single inch of usable patio floor.",
    ],
    photo: photo("vertical-garden.png", "Vertical garden wall with mounted planters filled with herbs and succulents", 574, 1024),
  },
  {
    n: "07",
    title: "Add Overhead Shade and Structure",
    paras: [
      "A shaded structure over part of the patio does more for the space than almost any other single addition &mdash; it adds real definition and makes the space usable even in direct sun.",
      "It also gives string lights or hanging plants somewhere to attach, and creates genuine relief from a blazing afternoon.",
      "A simple fabric canopy works just as well as a full structure for anyone not ready to build something permanent.",
    ],
    photo: photo("pergola.png", "Shaded overhead structure on a patio providing relief from direct sun", 574, 1024),
  },
  {
    n: "08",
    title: "Paint the Patio Floor",
    paras: [
      "A tired, plain concrete slab gets a surprisingly dramatic upgrade from a coat of paint.",
      "Geometric stencils, faux tile patterns, or a solid bold color all work, depending on how much pattern the space can handle.",
      "Exterior-grade paint is non-negotiable here &mdash; anything else tends to start peeling within a week of actual foot traffic and weather.",
    ],
    photo: photo("painted-floor.png", "Patio floor painted with a geometric stencil pattern using exterior-grade paint", 574, 1024),
  },
  {
    n: "09",
    title: "Build in Seating Where Possible",
    paras: [
      "Built-in benches or concrete seating solve more problems than they look like they would at first glance.",
      "They read as custom and polished, they mean never running short on seating for a crowd, and a few cushions make them just as comfortable as any standalone chair.",
      "They're an especially strong fit for a smaller patio, since built-ins free up floor space that standalone furniture would otherwise eat into.",
    ],
    photo: photo("built-in-seating.png", "Built-in concrete patio seating with cushions along the edge of the space", 574, 1024),
  },
  {
    n: "10",
    title: "Bring Indoor Textiles Outside",
    paras: [
      "Blankets, cushions and throws do as much for a patio's comfort level as they do for a living room, just with weather-resistant fabric instead.",
      "Weather-resistant materials, cushions with removable covers for easy washing, and a few bold patterns keep the look from feeling sterile.",
      "Even a basic folding chair reads as genuinely comfortable once the right throw pillow lands on it.",
    ],
    photo: photo("cozy-textiles.png", "Patio seating layered with weather-resistant cushions and throw blankets", 574, 1024),
  },
  {
    n: "11",
    title: "Add a Small Water Feature",
    paras: [
      "A small fountain or bubbler turns a patio into something closer to a spa retreat than an ordinary backyard.",
      "The sound masks street noise, sets an instantly calmer tone, and tends to be the detail that actually gets a patio used for unwinding rather than just passing through.",
      "It doesn't require a major budget, either &mdash; plenty of tabletop versions plug in directly and work just as well as something built-in.",
    ],
    photo: photo("water-feature.png", "Small water feature on a patio creating a calming ambient sound", 574, 1024),
  },
  {
    n: "12",
    title: "Go Big With Potted Plants",
    paras: [
      "A full garden isn't required to bring real greenery into a patio. A few large, dramatic pots do most of the work on their own.",
      "Tropical palms lean vacation, lavender or rosemary add scent, and a snake plant covers anyone who tends to forget watering duty.",
      "Grouping the pots in odd numbers and varying their heights gives the whole arrangement a considered, designer-level look.",
    ],
    photo: photo("potted-plants.png", "Large potted plants grouped at varying heights on a patio", 574, 1024),
  },
  {
    n: "13",
    title: "Hang a Chair or Swing",
    paras: [
      "A hanging egg chair or porch swing adds a permanent staycation feeling to a patio almost on its own.",
      "It brings a little movement into an otherwise static space, and it's consistently the piece guests comment on first.",
      "Checking the weight capacity before anyone decides to treat it like a jungle gym is worth doing in advance.",
    ],
    photo: photo("hanging-chair.png", "Hanging egg chair suspended on a patio adding movement to the space", 574, 1024),
  },
  {
    n: "14",
    title: "Set Up a Rolling Bar Cart",
    paras: [
      "A rolling bar cart doesn't need to be fancy to set the mood &mdash; glassware, a pitcher of something cold, and a few napkins is the whole formula.",
      "It keeps drinks and supplies within reach without anyone making repeated trips back inside for a refill.",
      "Being able to wheel it wherever the gathering actually ends up happening is most of the appeal.",
    ],
    photo: photo("bar-cart.png", "Rolling outdoor bar cart stocked with glassware and a pitcher", 574, 1024),
  },
  {
    n: "15",
    title: "Add Personality With DIY Decor",
    paras: [
      "This is where a patio actually starts to feel like it belongs to someone specific rather than a catalog page.",
      "Boho lanterns, painted pots, macrame hangers, or a hand-made welcome sign all bring in personality for very little cost.",
      "A little handmade detail goes a long way &mdash; the goal is a patio that feels like an actual reflection of taste, not a showroom display.",
    ],
    photo: photo("diy-decor.png", "DIY decor including painted pots and macrame hangers adding personality to a patio", 574, 1024),
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
<p>A plain concrete slab with mismatched plastic chairs doesn't have to stay that way, and getting it there doesn't require a massive budget or a full renovation crew. Whether the space in question is a tiny balcony or a sprawling backyard, a handful of the right moves genuinely transform how it feels to spend time out there.</p>
<p>None of these require starting from scratch. A single rug, a string of lights, or one well-placed plant can shift a patio from forgettable to the spot everyone wants to hang out in all summer.</p>
${photo("hero.jpg", "Well-maintained outdoor patio styled with furniture, greenery and ambient lighting", 1152, 768)}

<h2>15 Patio Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Going all out with a shaded structure and a fire feature works, but so does simply tossing down a rug and stringing up some lights &mdash; the actual goal is just making the space feel like it belongs to whoever uses it.</p>
<p>Start with whatever feels most obviously missing, then add the next thing. One idea tends to lead naturally into the next, and before long the patio turns into the spot people actually want to be.</p>
`;

module.exports = { body };
