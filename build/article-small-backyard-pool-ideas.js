// Body content for "20 Genius Small Backyard Swimming Pool Ideas".
// Photos carried over from the source article, Pinterest pin links
// preserved. Source had a heavily padded 6-section intro (Why It Makes
// Sense / Myths / Key Considerations / Permits & Budget / Why Smart
// Design Beats Square Footage, 8 photos before idea 01 even started);
// condensed to 2 sections per established practice. All 20 ideas had a
// photo in the source and all 20 kept. Rewritten out of the source's
// very personal, anecdotal "I've seen..." voice into the site's
// neutral tone.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-backyard-pool-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-backyard-pool-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Courtyard Pools That Turn Privacy Into a Feature",
    paras: [
      "A courtyard-style pool feels intimate and cozy almost by design, especially when the yard is already boxed in by walls or fences on more than one side.",
      "Rather than fighting that enclosed feeling, leaning into it turns a limitation into the whole appeal &mdash; these pools feel like a secret retreat, particularly when paired with greenery and soft evening lighting.",
      "The setup ends up reading less like a backyard and more like a private resort, which is a strong outcome for a space that might otherwise feel cramped.",
    ],
    photo: pinPhoto("courtyard-pool.jpg", "Private courtyard pool surrounded by lush tropical greenery", 736, 981, "https://www.pinterest.com/pin/2955556003216607/", "Courtyard Pool Ideas"),
  },
  {
    n: "02",
    title: "Plunge Pools That Feel Luxurious, Not Limiting",
    paras: [
      "Plunge pools focus on cooling off and relaxing rather than swimming laps, which happens to match what most homeowners actually want out of a backyard pool anyway.",
      "They fit into awkward side yards and narrow lots that a traditional pool never could, turning overlooked space into a genuine retreat.",
      "Adding built-in seating around the edge lets the plunge pool double as an outdoor living space, not just a place to cool off.",
    ],
    photo: pinPhoto("plunge-pool.jpg", "Sleek small plunge pool built for a compact backyard", 683, 1024, "https://www.pinterest.com/pin/3025924746479000/", "Plunge Pool Ideas for Small Yards"),
  },
  {
    n: "03",
    title: "Narrow Lap Pools That Stretch the Space Visually",
    paras: [
      "A lap pool doesn't need to be wide to earn its keep &mdash; a narrow version works especially well in a long, tight backyard that already feels a little boxed in.",
      "The length draws the eye forward, which makes the whole yard read as larger than its actual footprint.",
      "This layout suits a modern home particularly well, feeling intentional and sleek without demanding any extra square footage to pull off.",
    ],
    photo: pinPhoto("lap-pool.jpg", "Narrow lap pool stretching the length of a small backyard", 736, 960, "https://www.pinterest.com/pin/1548181186044196/", "Narrow Lap Pool Ideas"),
  },
  {
    n: "04",
    title: "Corner Pools That Use Dead Space Brilliantly",
    paras: [
      "Corners tend to sit unused and a little awkward in most backyards, which is exactly what makes them such a strong fit for a pool.",
      "Placing the pool in a corner frees up the center of the yard for seating, dining or landscaping, while still creating a natural focal point that doesn't overwhelm the space.",
      "A bit of greenery or a privacy wall alongside the pool makes the whole corner feel intentional rather than like leftover space.",
    ],
    photo: pinPhoto("corner-pool.jpg", "Corner pool making smart use of an awkward backyard space", 683, 1024, "https://www.pinterest.com/pin/427490189650080788/", "Corner Pool Ideas for Small Yards"),
  },
  {
    n: "05",
    title: "Spool Pools That Combine Spa and Pool Functions",
    paras: [
      "For anyone torn between wanting a spa and wanting a pool, a spool solves the dilemma by combining both into one compact footprint.",
      "It delivers the comfort of a spa alongside the fun of a pool &mdash; soaking, cooling off, and entertaining, all without needing a large yard.",
      "Spools also work well year-round, since they can be heated in winter and cooled in summer, making them one of the more efficient small-pool options available.",
    ],
    photo: pinPhoto("spool-pool.jpg", "Compact spool pool combining spa and pool functions", 361, 640, "https://www.pinterest.com/pin/140806232984405/", "Spool Pool Ideas"),
  },
  {
    n: "06",
    title: "Raised Pools That Add Depth Without Taking Space",
    paras: [
      "Raising a pool off the ground instantly adds a sense of dimension, which helps a small yard feel layered instead of flat.",
      "A raised edge creates a visual break between the lounging area and the swimming zone, without needing walls or fencing to do it.",
      "It's an approach that can make even a modest yard feel architectural and considered, especially when paired with a water feature along the raised edge.",
    ],
    photo: pinPhoto("raised-pool.jpg", "Raised semi-inground pool adding dimension to a small backyard", 683, 1024, "https://www.pinterest.com/pin/84583299249039055/", "Raised Pool Ideas for Small Backyards"),
  },
  {
    n: "07",
    title: "Small Backyard Pools With Built-In Seating",
    paras: [
      "Built-in seating changes a pool from a purely swimming feature into a genuine hangout spot.",
      "Benches, ledges and submerged seats cut down on the need for extra poolside furniture, which saves real space in a smaller yard.",
      "People also tend to stay around a pool longer when there's somewhere comfortable to sit directly in the water, which makes the whole space feel more versatile.",
    ],
    photo: pinPhoto("built-in-seating.jpg", "Small pool with built-in seating ledges for a social backyard", 674, 1024, "https://www.pinterest.com/pin/422281211970592/", "Pools With Built-In Seating"),
  },
  {
    n: "08",
    title: "Minimalist Pools That Keep Everything Clean and Open",
    paras: [
      "Minimalism tends to work especially well in a tight space, and a pool is no exception.",
      "Clean lines, a neutral color palette, and an uncluttered surround all make a small pool feel calmer and more open than a heavily decorated one.",
      "This kind of restrained design also tends to age better than a heavily trend-driven look, staying just as appealing years down the line.",
    ],
    photo: photo("minimalist-pool.jpg", "Minimalist pool design with clean lines and neutral surroundings", 574, 1024),
  },
  {
    n: "09",
    title: "Indoor-Outdoor Pools That Blur Boundaries",
    paras: [
      "For a home that already opens directly onto the backyard, blurring the line between indoors and outdoors makes a real difference.",
      "Sliding doors, folding walls, and flush flooring create a seamless transition, turning the pool into part of the home itself rather than a separate feature tacked on outside.",
      "The effect can genuinely change how large a space feels, simply by removing the visual break between the two areas.",
    ],
    photo: photo("indoor-outdoor-pool.jpg", "Indoor-outdoor pool with a seamless transition through sliding doors", 683, 1024),
  },
  {
    n: "10",
    title: "Small Backyard Pools With Water Features",
    paras: [
      "When space feels tight, letting sound do some of the work helps distract from the limited square footage.",
      "A waterfall, spillway, or small fountain adds both movement and sound, making the pool area feel more dynamic without taking up any extra room.",
      "A subtle water feature tends to feel calming rather than overwhelming, which keeps the small-space illusion intact rather than fighting it.",
    ],
    photo: pinPhoto("water-features.jpg", "Small pool with a water feature adding drama and sound", 683, 1024, "https://www.pinterest.com/pin/39969515437985405/", "Pools With Water Features"),
  },
  {
    n: "11",
    title: "Glass-Edged Pools That Visually Disappear",
    paras: [
      "Glass panels do real work in a tight backyard by removing the usual visual barrier a solid fence or wall creates.",
      "With nothing blocking the sightline, the eye travels further, which tricks the brain into reading the space as larger than it actually is.",
      "It's a particularly strong choice for a pool edge that faces a view worth keeping visible, rather than boxing it in.",
    ],
    photo: pinPhoto("glass-edged-pool.jpg", "Glass fence installation around a small pool for an open sightline", 563, 352, "https://www.pinterest.com/pin/922112092438517579/", "Glass-Edged Pool Ideas"),
  },
  {
    n: "12",
    title: "Sun Shelf Pools That Replace Extra Furniture",
    paras: [
      "A sun shelf tends to get overlooked, but it quietly solves a real space problem.",
      "It lets people lounge directly in shallow water without needing separate pool chairs or daybeds nearby, which frees up deck space that would otherwise go to furniture.",
      "For a small backyard, that trade-off is usually worth it &mdash; less furniture, more usable room.",
    ],
    photo: pinPhoto("sun-shelf-pool.jpg", "Pool with a built-in sun shelf replacing poolside furniture", 736, 899, "https://www.pinterest.com/pin/10062799163786575/", "Sun Shelf Pool Ideas"),
  },
  {
    n: "13",
    title: "Vertical Garden Pools That Add Green Without Crowding",
    paras: [
      "When the ground itself is already at capacity, going vertical is the natural next move.",
      "A vertical garden softens the hard surfaces around a pool without stealing any floor space, and it also boosts privacy considerably faster than a tall fence would.",
      "Using greenery to frame a pool rather than fencing it in tends to read as softer and more intentional overall.",
    ],
    photo: photo("vertical-garden-pool.jpg", "Vertical garden framing a small backyard pool", 669, 499),
  },
  {
    n: "14",
    title: "Pools With Built-In Planters",
    paras: [
      "Rather than scattering potted plants around the deck, integrating planters directly into the pool structure looks considerably more intentional.",
      "It keeps the whole layout feeling clean and planned rather than assembled after the fact.",
      "A few well-placed built-in planters can turn an otherwise basic pool into a genuine design feature on their own.",
    ],
    photo: pinPhoto("built-in-planters.jpg", "Pool with built-in planters integrated into the structure", 683, 1024, "https://www.pinterest.com/pin/282952789083067234/", "Pools With Built-In Planters"),
  },
  {
    n: "15",
    title: "Lighting That Transforms Small Pools at Night",
    paras: [
      "Lighting does more than help with visibility after dark &mdash; it genuinely sets the mood for the whole space.",
      "Soft lighting extends how the pool reads visually after sunset, adding depth and a bit of drama without introducing any new physical elements.",
      "Layering a few different light sources, rather than relying on one, tends to produce a softer glow instead of a single harsh glare.",
    ],
    photo: pinPhoto("pool-lighting.jpg", "Small pool transformed by layered lighting at night", 640, 477, "https://www.pinterest.com/pin/14707136281913679/", "Pool Lighting Ideas"),
  },
  {
    n: "16",
    title: "Dark-Finish Pools That Add Depth",
    paras: [
      "A light-colored pool reads as clean, but a dark-finished one reads as deep &mdash; a useful illusion in a compact space.",
      "Darker finishes reflect less light, which creates the impression of greater depth and makes a smaller pool feel more substantial than it actually is.",
      "The look reads as bold rather than heavy, and it's become a far more common choice than it once was for exactly this reason.",
    ],
    photo: photo("dark-finish-pool.jpg", "Dark-finish pool creating an illusion of depth in a small space", 735, 735),
  },
  {
    n: "17",
    title: "Narrow Decking That Frames the Pool Perfectly",
    paras: [
      "Decking eats up space fast when it's sized too generously for a small pool.",
      "A wide deck tends to overwhelm a compact pool, while a narrow one frames it instead, leaving more of the actual yard usable for other things.",
      "Trimming deck width down to what's actually needed is one of the simpler ways to reclaim usable space in a small backyard.",
    ],
    photo: pinPhoto("narrow-decking.jpg", "Narrow decking framing a small pool without overwhelming it", 512, 512, "https://www.pinterest.com/pin/132996995241864290/", "Narrow Pool Decking Ideas"),
  },
  {
    n: "18",
    title: "Multi-Level Pool Zones That Add Interest",
    paras: [
      "Levels create visual separation between areas without needing an actual wall to do it.",
      "Steps, platforms and raised sections naturally define different zones &mdash; a swimming area, a lounging spot, an entry point &mdash; adding structure without clutter.",
      "This approach suits a social backyard particularly well, since it quietly organizes the space without making it feel busy.",
    ],
    photo: pinPhoto("multi-level-pool.jpg", "Multi-level pool zones adding structure to a small backyard", 683, 1024, "https://www.pinterest.com/pin/281543719639407/", "Multi-Level Pool Design Ideas"),
  },
  {
    n: "19",
    title: "Pools Paired With Outdoor Showers",
    paras: [
      "An outdoor shower adds genuine function without actually stealing much space from the yard.",
      "A slim shower setup keeps indoor mess to a minimum after a swim, and it doubles as a visual anchor near the pool.",
      "It's a small addition that pushes the whole space a little closer to resort territory, even in a genuinely tight footprint.",
    ],
    photo: pinPhoto("outdoor-shower.jpg", "Pool paired with a slim outdoor shower for a resort feel", 619, 1024, "https://www.pinterest.com/pin/5418462045963188/", "Pools With Outdoor Showers"),
  },
  {
    n: "20",
    title: "Small Backyard Swimming Pools With Fire Features",
    paras: [
      "Fire and water together are a dependable combination that rarely falls flat.",
      "A fire bowl or a linear flame feature adds real drama without taking up much physical space, and it draws the eye upward, which helps the whole area feel taller than it is.",
      "Positioned well, a fire feature can become the pool area's natural evening focal point, especially once the sun goes down.",
    ],
    photo: pinPhoto("fire-feature-pool.jpg", "Small pool with a fire feature adding drama at night", 735, 727, "https://www.pinterest.com/pin/5277724559668252/", "Pools With Fire Features"),
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
<p>A small backyard doesn't rule out a genuinely great pool &mdash; it just changes which decisions matter most. Shape, placement and a few smart design tricks tend to do far more for how a pool feels than overall square footage ever will.</p>
<p>None of the ideas below require a sprawling lot to pull off. Most work specifically because the yard is small, turning limited space into a design advantage rather than a compromise.</p>
${photo("hero.jpg", "Small narrow backyard pool with a stone wall and wood deck", 564, 564)}

<h2>Why Small Backyard Pools Make So Much Sense</h2>
<p>A smaller pool tends to feel more livable day to day &mdash; easier to maintain, cheaper to heat, and often more social, since everyone ends up closer together rather than spread across a sprawling deck. It also rarely means settling for something that looks cheap; smart design consistently beats raw size.</p>
${pinPhoto("intro-why.jpg", "Small backyard pool with a terrace showing how compact pools can still feel luxurious", 736, 981, "https://www.pinterest.com/pin/281543726308696/", "Small Backyard Pool Inspiration")}

<h2>Planning Before Choosing a Shape</h2>
<p>Before settling on a pool style, it's worth being honest about how the pool will actually get used &mdash; lounging, swimming laps, entertaining &mdash; since that answer shapes everything else. Shape tends to matter more than raw size, and it's worth checking local regulations and budgeting beyond just the pool shell itself before committing to a direction.</p>
${pinPhoto("intro-planning.jpg", "Planning considerations for a small backyard pool layout", 564, 752, "https://www.pinterest.com/pin/1125968725229094/", "Planning a Small Backyard Pool")}

<h2>20 Genius Small Backyard Swimming Pool Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these twenty ideas require a large yard to actually work &mdash; most of them work specifically because the yard is small, turning the limitation into the whole design approach.</p>
<p>A clear focal point, a few intentional layout choices, and a willingness to let shape do more work than size will consistently outperform a bigger pool squeezed into a space that was never built for it.</p>
`;

module.exports = { body };
