// Body content for "9 Open Kitchen Design Ideas for a Genuinely
// Spacious Feel". Source had no numbered ideas or Pinterest pin links
// — 9 themed sections with bullet lists, converted here into the
// site's usual numbered/flowing-paragraph format. All photos stay
// uncredited since the source itself never linked any of them. "Go
// Minimal, But Make It You" has no photo in the source; the other 8
// sections each have one. Distinct from timeless-kitchen-layouts, which
// covers "open-plan" as just one of ten layout types in brief rather
// than a full styling deep-dive.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "open-kitchen-design-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Lose the Barriers, Visually or Literally",
    paras: [
      "An open kitchen doesn't require a full sledgehammer renovation. Losing the barriers can be as simple as rethinking what separates one zone from the next.",
      "Open shelving instead of bulky upper cabinets, a pass-through cutout to the next room, an archway that connects spaces without fully merging them, or a half wall doubling as a breakfast bar all create that open feeling without a full demo.",
      "Sightlines matter more than square footage here &mdash; keeping them open is what actually makes a kitchen read as bigger, no construction required.",
    ],
    photo: photo("remove-barriers.png", "Open kitchen with glass shelving and an archway connecting it to the next room", 574, 1024),
  },
  {
    n: "02",
    title: "Maximize Natural Light",
    paras: [
      "Light is the real secret ingredient behind any open kitchen that actually feels spacious rather than just big on paper.",
      "Swapping heavy curtains for sheer panels, adding a skylight, installing glass doors to a patio, or even trying a greenhouse-style ceiling all flood the space with the kind of light a kitchen needs to feel genuinely open.",
      "Paint color plays its part too &mdash; soft whites, pale grays and gentle blues bounce light around a room far better than anything darker ever could.",
    ],
    photo: photo("natural-light.png", "Bright kitchen with large windows and sheer curtains filling the space with natural light", 574, 1024),
  },
  {
    n: "03",
    title: "Build the Island Around Openness, Not Just Chopping",
    paras: [
      "A kitchen island with the right footprint can transform the whole room, but only if it's chosen with the open concept in mind rather than as an afterthought.",
      "A sleek, minimal island with waterfall edges, open shelving underneath for cookbooks, and stools that tuck fully away keeps the flow uncluttered instead of adding another obstacle.",
      "Cooking while friends sit around the island chatting changes the whole feel of the room &mdash; nobody ends up isolated at the stove while everyone else is somewhere else entirely.",
    ],
    photo: photo("open-island.png", "Sleek kitchen island with a waterfall edge and open shelving underneath", 574, 1024),
  },
  {
    n: "04",
    title: "Keep the Palette Light and Cohesive",
    paras: [
      "Color does more work toward that open, spacious feeling than almost any other single decision in the room.",
      "White paired with warm wood reads as fresh and timeless, soft gray with brass hardware feels classy without being stuffy, and beige with matte black stays grounded while still modern.",
      "Matching the walls, cabinets and backsplash to similar tones blurs the boundaries between them, and that blurred boundary is exactly what reads as spacious.",
    ],
    photo: photo("light-palette.png", "Kitchen in a light, cohesive palette of white and warm wood tones", 574, 1024),
  },
  {
    n: "05",
    title: "Let Smart Storage Keep the Counters Clear",
    paras: [
      "No kitchen, regardless of actual square footage, feels open with cluttered countertops. Clean surfaces do more for the sense of space than the room's real dimensions do.",
      "Pull-out pantry drawers in narrow gaps, toe-kick drawers for baking trays, ceiling-height cabinetry for rarely used items, and a hidden appliance garage for the toaster and blender all keep the chaos out of sight.",
      "If it doesn't need to live on the counter, it shouldn't &mdash; that one rule does more for an open feeling than any single design choice.",
    ],
    photo: photo("smart-storage.png", "Kitchen with smart hidden storage keeping the countertops clear and open", 574, 1024),
  },
  {
    n: "06",
    title: "Blend the Kitchen Into the Living Space",
    paras: [
      "One of the best parts of an open kitchen is how connected it feels &mdash; cooking stops being a solitary task and becomes part of whatever's happening in the room next door.",
      "Matching flooring throughout, a color theme that carries from the kitchen into the living area, and shared materials like wood or metal across both zones make the two spaces feel like one continuous room.",
      "A two-sided fireplace between the two zones takes it even further, for anyone leaning into a cozier, more luxe version of the open concept.",
    ],
    photo: photo("merge-living-space.png", "Kitchen blended seamlessly into an adjoining living space with matching flooring and materials", 574, 1024),
  },
  {
    n: "07",
    title: "Add Texture Instead of Clutter",
    paras: [
      "An open kitchen can go cold fast without the right texture layered in. The goal is airy, not sterile, and texture is what bridges that gap.",
      "Wood grain cabinets or ceiling beams add warmth, a herringbone or glossy subway tile backsplash adds interest, and woven stools or pendant lights soften all the sharp, open lines.",
      "Mixing a few materials without overloading the room keeps it calm rather than boring &mdash; texture should add interest, not compete for attention.",
    ],
    photo: photo("add-texture.png", "Open kitchen with wood ceiling beams, herringbone tile backsplash and woven pendant lights", 574, 1024),
  },
  {
    n: "08",
    title: "Go Minimal, But Make It Personal",
    paras: [
      "A minimalist kitchen doesn't have to feel impersonal, and open kitchens in particular thrive on minimalism since it keeps the eye moving and the space flowing.",
      "One large statement art piece instead of a dozen small frames, favorite cookware displayed on open shelves, or quirky bar stools that reflect actual taste all keep a pared-back kitchen from reading as cold.",
      "Minimal doesn't mean boring here. It means intentional &mdash; and a well-chosen sculptural light fixture tends to get noticed even in the simplest room.",
    ],
  },
  {
    n: "09",
    title: "Prioritize the Flow, Not Just the Photos",
    paras: [
      "A kitchen that photographs beautifully but trips people up in real life isn't actually a well-designed kitchen, however good it looks online.",
      "At least three feet of clearance around major zones &mdash; between the island and the cabinets, around the dining area, and across the classic fridge-to-stove-to-sink triangle &mdash; keeps the space functional as well as attractive.",
      "Function has to come first, with style layered on afterward. A beautiful kitchen that's genuinely difficult to move through isn't really beautiful at all.",
    ],
    photo: photo("flow-clearance.png", "Open kitchen layout with clear walkway spacing between the island, cabinets and dining area", 574, 1024),
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
<p>Everyone wants a kitchen that feels bigger than its actual square footage, whether that's a tiny city apartment or a sprawling suburban layout. Getting that light, airy feeling doesn't require knocking down five walls &mdash; it's almost always about the right handful of design moves rather than the size of the renovation.</p>
<p>Open kitchens genuinely feel better to cook and live in. They keep the person cooking part of the conversation instead of isolated behind a wall, and they make an entire home feel more expansive without a full gut renovation.</p>
${photo("hero.jpg", "Spacious open kitchen with a wide island connecting to the surrounding living space", 1152, 768)}

<h2>9 Open Kitchen Design Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Open kitchens aren't just a passing trend &mdash; they're genuinely practical. They bring people together, make cooking feel less isolating, and give an entire home a more expansive feeling without necessarily requiring a full renovation.</p>
<p>A kitchen that currently feels more like a closet than a gathering space is usually just a few design tweaks away from opening up. No sledgehammer required, just a clear sense of which of these moves actually fits the space.</p>
`;

module.exports = { body };
