// Body content for "9 Tips for Pulling Off a Garden Wedding Without
// a Hitch". Numbered idea-list format, reordered from the source's
// 9 tips. Distinct from the existing garden-party-theme-planning
// (a general entertaining piece, not wedding-specific) and from the
// why-choose-a-backyard-for-your-wedding-celebration source still in
// the backlog — this is execution tips for a garden VENUE wedding
// (any garden, public or private), while the backyard piece is a
// decision/advocacy case specifically for hosting at one's own home.
// Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "garden-wedding-planning-tips", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A garden wedding looks effortless in photos, and takes considerably more planning than an indoor venue ever does.</p>
<p>Weather, bugs, sound and uneven ground all become real variables the moment the ceremony moves outside.</p>
<p>These nine tips cover what actually keeps a garden wedding running smoothly.</p>
${photo("hero.png", "A beautiful garden wedding ceremony surrounded by natural beauty", 1312, 736)}

<h2>1. Choose the Right Venue</h2>
<p>Not every garden is actually wedding-ready &mdash; checking for flat ground, shade coverage and a genuine backup indoor space matters more than how the garden photographs on its own.</p>
<p>Walking the venue at the same time of day as the planned ceremony reveals lighting and shade conditions that a daytime-only tour visit can easily miss.</p>
${photo("venue.png", "A well-chosen garden venue with flat ground and natural shade", 574, 1024)}

<h2>2. Weatherproof the Whole Day</h2>
<p>A tent, umbrellas and a few fans or heaters, depending on the season, turn an unpredictable forecast from a crisis into a minor inconvenience.</p>
<p>Booking these rentals well in advance matters more for a garden wedding than almost any other logistic, since availability disappears fastest during peak wedding season.</p>
${photo("weatherproof.png", "A weatherproofed garden wedding setup ready for any forecast", 574, 1024)}

<h2>3. Dress for the Grass</h2>
<p>Heels sink into soft lawn in a way that ruins both the shoes and the walking experience, which makes footwear a genuine planning consideration, not an afterthought.</p>
<p>Guests benefit from a heads-up about the terrain too, so everyone can choose footwear that won't fight the ground all afternoon.</p>
${photo("attire.png", "Wedding attire chosen with grass and garden terrain in mind", 574, 1024)}

<h2>4. Keep the Bugs Away Tastefully</h2>
<p>Citronella elements woven into the actual decor, rather than a visible can of spray, handle pest control without looking like an afterthought.</p>
<p>Timing the ceremony to avoid peak bug hours, usually right at dusk, solves a good portion of the problem before it starts.</p>
${photo("bugs.png", "Citronella candles woven into decor keeping bugs away tastefully", 574, 1024)}

<h2>5. Plan Sound and Lighting for the Outdoors</h2>
<p>Outdoor acoustics swallow sound in a way an indoor room never does, making a proper sound system a genuine necessity rather than a nice-to-have.</p>
<p>String lights, lanterns and other layered lighting also matter more here, since a garden has none of an indoor venue's built-in fixtures to fall back on.</p>
${photo("sound-lighting.png", "String lights and outdoor sound setup for an evening garden wedding", 574, 1024)}

<h2>6. Plan Food and Drinks Around Nature</h2>
<p>Covered food stations and bussed drinks service hold up far better against wind, insects and heat than an open buffet left exposed the whole event.</p>
<p>This is worth discussing directly with the caterer well before the day, since outdoor service requires real adjustments to a standard indoor plan.</p>
${photo("food-drinks.png", "Covered food and drink stations suited to an outdoor garden reception", 574, 1024)}

<h2>7. Let Decor Work With Nature, Not Against It</h2>
<p>Simple, natural decor that complements the garden's existing greenery tends to look more intentional than an elaborate setup fighting against the setting.</p>
<p>The garden itself is already doing a lot of the visual work, which means less decor is often genuinely more here.</p>
${photo("decor.png", "Simple, natural decor complementing a garden wedding's existing greenery", 574, 1024)}

<h2>8. Make It Comfortable for Guests</h2>
<p>Shade, seating that doesn't sink into the lawn, and easy access to restrooms matter more at an outdoor wedding than guests usually mention out loud.</p>
<p>A comfortable guest is a guest who stays relaxed and present, rather than quietly counting down until the reception moves somewhere easier.</p>
${photo("guest-comfort.png", "Comfortable guest seating and shade at an outdoor garden wedding", 574, 1024)}

<h2>9. Always Have a Plan B</h2>
<p>A non-negotiable backup plan, not just a hopeful one, is what actually protects a garden wedding from a single bad-weather day.</p>
<p>Confirming that backup space and timeline with the venue well in advance avoids a last-minute scramble if the day doesn't go as planned.</p>
${photo("plan-b.png", "A solid backup plan protecting a garden wedding from bad weather", 574, 1024)}

<h2>Dreamy, But Only With a Real Plan</h2>
<p>None of these nine tips are about dampening the appeal of a garden wedding &mdash; they're about protecting it.</p>
<p>Get the venue, weatherproofing and backup plan right, and everything else becomes the fun part.</p>
`;

module.exports = { body };
