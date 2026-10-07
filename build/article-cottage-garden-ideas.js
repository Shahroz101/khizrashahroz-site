// Body content for "12 Cottage Garden Ideas for a Yard That Feels Like a
// Storybook". Photos carried over from the source article. Most source
// photos were genuinely Unsplash-credited; those credits are reused here
// via creditedPhoto(). Two images (hero, garden-accessories/birdhouse were
// the only uncredited ones in source) use the plain photo() helper. The
// "picket fence" photo is actually blue hydrangeas spilling over a white
// picket fence rather than climbing roses — captioned to match what's
// actually shown. Condensed 4 padded intro H2 sections down to 2. Idea 12
// (Seasonal Color Swaps) runs without a photo, same as in the source.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "cottage-garden-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function creditedPhoto(src, alt, w, h, name, url) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "cottage-garden-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo by ${name} via <a href="${url}" target="_blank" rel="nofollow noopener">Unsplash</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Let Roses Take Over",
    paras: [
      "You cannot talk about a cottage garden without talking about roses. They're the anchor plant the whole style is built around, and nothing else quite delivers the same mix of fragrance and old-world romance.",
      "Old-fashioned varieties are the move here &mdash; they tend to be hardier and less fussy than modern hybrid teas, and they bloom in that slightly looser, fuller shape that reads as cottage rather than formal.",
      "Train a climber over an arbor or along a fence and you get an entrance that feels like stepping through a doorway into somewhere else entirely. A single well-placed rose near a gate will get more compliments than almost anything else you plant.",
    ],
    photo: creditedPhoto("roses.jpg", "Dense rose bushes in bloom with orange, yellow and pale pink flowers against a backdrop of evergreen trees", 684, 1024, "Danica Stradecke", "https://unsplash.com/photos/OlTjLyIqW58"),
  },
  {
    n: "02",
    title: "Build in Layered Heights",
    paras: [
      "The single most common mistake in a first attempt at a cottage garden is planting everything at the same height. Flat reads as boring no matter how many flowers you pack in &mdash; the magic comes from layering.",
      "Tall spires at the back, mid-height bloomers filling the middle, and trailing or low plants softening the front edge. That structure is what makes a bed look intentional instead of scattered.",
      "A mix of pots and plantings at different heights, like the layered greenery shown here, does the same job even in a tight courtyard or side yard &mdash; you don't need a sprawling border to get the effect.",
    ],
    photo: creditedPhoto("layered-heights.jpg", "Courtyard garden filled with potted plants at varying heights, from tall palms and shrubs down to low ferns and ground plants", 683, 1024, "Roger Ce", "https://unsplash.com/@roger_ce77"),
  },
  {
    n: "03",
    title: "Let the Borders Overflow",
    paras: [
      "If one single thing says cottage garden instantly, it's a border that looks like it's about to spill over onto the lawn. Stiff, evenly spaced edges are the opposite of what you want here.",
      "Mix tall bloomers toward the back, roses and classic mid-height flowers through the center, and low groundcovers softening the front. The layering is what creates that lush, just-slightly-wild look.",
      "Plant closer together than feels natural at first. Properly spaced plants leave gaps that kill the romantic effect &mdash; crowding them in is actually what makes a border feel alive instead of sparse.",
    ],
    photo: creditedPhoto("overflowing-borders.jpg", "Narrow stone garden path lined with dense overflowing greenery, flowering shrubs and trees leading to a wooden gate", 768, 1024, "Christina Boon", "https://unsplash.com/@christinaboon"),
  },
  {
    n: "04",
    title: "Tuck In a Cozy Seating Nook",
    paras: [
      "A beautiful cottage garden with nowhere to actually sit in it is a missed opportunity. A tucked-away bench or small bistro setup turns the whole space from something you look at into something you use.",
      "The best spots are corners surrounded by flowers rather than open lawn &mdash; a vintage iron bench half-enclosed by greenery, like the one shown here, feels like a genuine secret escape rather than patio furniture.",
      "Add a cushion and maybe a candle or two, but keep it a little imperfect. A seating nook that looks too styled stops feeling like a retreat and starts feeling like a showroom.",
    ],
    photo: creditedPhoto("cozy-seating-nook.jpg", "Ornate white wrought iron garden bench tucked into dense greenery beside a small draped table with brass candlesticks", 1024, 684, "Aleks M", "https://unsplash.com/photos/r2wDLWueSW4"),
  },
  {
    n: "05",
    title: "Plant a Mini Wildflower Patch",
    paras: [
      "You don't need rolling countryside to pull this off &mdash; a wildflower patch works in a backyard corner just as well as it would on acreage, and it's one of the lowest-effort ideas on this entire list.",
      "A mix of poppies, daisies, cornflowers, and cosmos swaying together captures exactly the kind of organized chaos a cottage garden is built on.",
      "Scatter the seeds, water occasionally, and let nature do the actual designing. Within a few weeks you'll have something that looks carefully planned and is genuinely buzzing with bees and butterflies the whole season.",
    ],
    photo: creditedPhoto("wildflower-meadow.jpg", "Close-up of a wildflower meadow with tall purple loosestrife spikes and small pink and white blooms scattered through tall grass", 1024, 683, "Annie Spratt", "https://unsplash.com/@anniespratt"),
  },
  {
    n: "06",
    title: "Let Flowers Spill Over a Picket Fence",
    paras: [
      "A white picket fence does more than mark a boundary &mdash; it frames the whole garden the way a mat frames a photo, giving structure to everything growing wild behind it.",
      "Climbing roses are the classic choice, but anything that spills generously over the top works &mdash; the hydrangeas tumbling over the fence shown here make the same case for a slightly different plant.",
      "If keeping a fence painted white sounds like more upkeep than you want, a weathered wood version does the job just as well once vines and flowering shrubs start softening its edges.",
    ],
    photo: creditedPhoto("picket-fence.jpg", "Dense blue hydrangea blooms cascading over a white picket fence", 768, 1024, "Kier in Sight Archives", "https://unsplash.com/@kierinsightarchives"),
  },
  {
    n: "07",
    title: "Add an Arbor or Archway",
    paras: [
      "Nothing delivers instant fairytale atmosphere quite like an arbor dripping in climbing plants. It genuinely doesn't matter if it leads anywhere specific &mdash; the sense of mystery is the entire point.",
      "A wooden structure, like the vine-draped pergola shown here, tends to feel softer and more cottage-appropriate than a sleek metal one, though either works once clematis, honeysuckle, or wisteria takes over.",
      "Walking under one in full bloom, with flowers hanging overhead like chandeliers, is the kind of moment that makes a garden feel genuinely magical rather than just nicely planted.",
    ],
    photo: creditedPhoto("arbor.jpg", "White wooden garden arbor pergola covered in climbing green vines with a white bench underneath", 683, 1024, "Adam Przeniewski", "https://unsplash.com/@greemsky"),
  },
  {
    n: "08",
    title: "Add a Winding Path",
    paras: [
      "Every storybook garden needs a path, and it should never be a perfectly straight one. A winding gravel or stone pathway makes you feel like you're actually being led somewhere.",
      "Pea gravel gives you that satisfying crunch underfoot, while stepping stones surrounded by thyme or moss lean dreamier. Either way, a path lets you actually walk through your flowers without trampling them.",
      "Curve it, even slightly. A straight line reads as a modern backyard; a curve reads as an escape &mdash; it's a small design choice that changes the entire feeling of the space.",
    ],
    photo: creditedPhoto("gravel-pathway.jpg", "Light gravel garden pathway flanked by lush greenery and ferns leading toward a glass entryway", 731, 1024, "Aditya Citratama", "https://unsplash.com/@additif"),
  },
  {
    n: "09",
    title: "Add One Genuinely Whimsical Touch",
    paras: [
      "No cottage garden is complete without a sprinkle of actual whimsy &mdash; a hidden fairy door tucked at the base of a tree, mismatched stepping stones that lead nowhere in particular, or a lantern that glows at dusk.",
      "This is honestly what separates a nice garden from a magical one. A single small, unexpected detail does more than any amount of careful planting.",
      "Keep it to one or two touches, like the tiny painted door tucked into tree bark shown here. Whimsy works because it's a surprise &mdash; overdo it and it stops feeling like a discovery.",
    ],
    photo: creditedPhoto("touch-of-whimsy.jpg", "Tiny whimsical painted fairy door and wood-slice details tucked into the base of a tree trunk surrounded by ivy and fallen leaves", 1024, 683, "Phil Hearing", "https://unsplash.com/photos/Y239IG-ppOo"),
  },
  {
    n: "10",
    title: "Tuck In Herbs and Edible Touches",
    paras: [
      "Cottage gardens were never just about pretty flowers &mdash; historically, people grew herbs, vegetables, and fruit right alongside their blooms, and that practical streak is part of the authentic look.",
      "A patch of lavender or rosemary, or even a small raised bed of salad greens, feels both true to the style and genuinely useful. Herbs also smell incredible and pull in pollinators without any extra effort.",
      "Edging a path with herbs is a particularly good trick &mdash; it looks intentional and means your garden smells amazing every time you brush past it.",
    ],
    photo: creditedPhoto("herb-patch.jpg", "Brick cottage surrounded by dense green shrubs, climbing vines and a stone pathway leading toward the entrance", 1024, 768, "Tony Fitzpatrick", "https://unsplash.com/@peoplemattertv"),
  },
  {
    n: "11",
    title: "Decorate With Charming Garden Accessories",
    paras: [
      "This is where your actual personality gets to show up. Cottage gardens thrive on quirky, collected-over-time details rather than anything that looks purchased as a matching set.",
      "A vintage watering can tucked into a border, a painted birdhouse hanging from a tree, weathered terracotta pots stacked by the fence, an old wheelbarrow repurposed as a planter &mdash; any of it works.",
      "The playful little camper-shaped birdhouse shown here is exactly the kind of detail that keeps a garden from feeling too designed. Find something you genuinely love at a flea market and just work it in &mdash; that's what makes the space feel like yours.",
    ],
    photo: photo("garden-accessories.jpg", "Whimsical hand-painted blue camper-van-shaped birdhouse hanging from a tree branch surrounded by purple flowers", 1024, 683),
  },
  {
    n: "12",
    title: "Rotate Color Through the Seasons",
    paras: [
      "A real cottage garden keeps surprising you across the whole year rather than peaking once and going quiet. Planting with the seasons in mind is what keeps it feeling alive instead of static.",
      "Tulips, daffodils, and forget-me-nots carry spring; roses, foxgloves, and lavender take over for summer; asters, chrysanthemums, and ornamental grasses bring fall its own character. Evergreens and structural plants keep winter from feeling empty.",
      "Think of it less like a one-time planting plan and more like planning outfits for every season &mdash; different each time, same underlying charm running through all of it.",
    ],
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
<p>There's a particular kind of happiness that comes from walking past a cottage garden in full bloom &mdash; roses spilling over a fence, lavender swaying in the breeze, wildflowers acting like they own the place. A cottage garden doesn't just decorate a yard. It tells a story, and most of us secretly want our own outdoor space to feel like it belongs in one.</p>
<p>People assume the look is effortless, but it actually takes a bit of planning. You can't just scatter plants and hope for the best &mdash; that path usually ends in something closer to a weed patch than a storybook scene. Here are twelve ideas that deliver the real thing.</p>
${photo("hero.jpg", "Storybook Victorian cottage with a turret roof and wraparound porch surrounded by overflowing pink, purple and white garden flowers", 2560, 1920)}

<h2>What Actually Makes a Garden Read as Cottage Style</h2>
<p>Cottage gardens trace back to English countryside homes, where flowers, herbs, and vegetables all grew together in a mix that was functional as much as it was charming. The goal was never perfection &mdash; it was abundance. The beauty comes from an unstructured, layered look: plants grow close together, colors mingle freely, and textures overlap in a way that feels natural rather than planned.</p>
<p>That's exactly why a small yard or an imperfect eye for design isn't actually a barrier here. Cottage gardens thrive on a little chaos. They feel alive in a way manicured, symmetrical gardens rarely do &mdash; closer to a conversation with nature than a design statement.</p>
${creditedPhoto("intro-definition.jpg", "English stone cottage with wisteria climbing the facade, surrounded by a layered informal garden with a stone path leading to the front door", 1024, 683, "Darren Richardson", "https://unsplash.com/@campfire_guy")}
${creditedPhoto("intro-alive.jpg", "Victorian cottage with a turret and wraparound porch framed by dense pink and purple flower borders in full summer bloom", 1024, 768, "Ian Kirkland", "https://unsplash.com/@jean_luc")}

<h2>Cottage Style vs. Every Other Garden Style</h2>
<p>A cottage garden is overflowing, layered, informal, and a little unpredictable by design. Compare that to a formal garden &mdash; symmetrical, neat, geometric, usually with trimmed hedges &mdash; or a modern garden, which leans minimalist with clean lines and lots of hardscape. Cottage style wins if what you actually want is warmth over structure.</p>
<p>The essentials worth keeping in mind as you plan: abundance over minimalism, a genuine mix of plant heights and types, natural winding pathways instead of straight lines, and at least a few vintage or rustic touches. None of it needs to be perfect. If you love something quirky &mdash; an old statue, a weathered bench &mdash; work it in. That's what makes the space unmistakably yours.</p>
${creditedPhoto("intro-essentials.jpg", "Large weathered terracotta garden urn surrounded by orange marigolds and red zinnias along a gravel path", 1024, 683, "David Clode", "https://unsplash.com/@davidclode")}

<h2>12 Cottage Garden Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Twelve ideas, one underlying truth: the beauty of a cottage garden lives in its imperfections. Nothing here needs to match, and there's no strict rulebook to follow &mdash; the most enchanting gardens are simply the ones where the gardener's own personality comes through.</p>
<p>Start small with a patch of wildflowers, or go all in with a rose-covered arbor. Either way, give it a season to grow into itself. A cottage garden rewards patience more than any other style, and it only gets more storybook with time.</p>
`;

module.exports = { body };
