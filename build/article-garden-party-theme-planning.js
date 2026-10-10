// Body content for "How to Plan a Garden Party People Actually
// Remember". Guide format, condensed from a 13-section source
// (closing checklist folded into final thoughts). New event-planning
// topic for the site — distinct from party-table-setup-ideas (table
// styling specifically) and graduation-party-centerpiece-ideas
// (centerpieces specifically), neither of which is garden/outdoor or
// whole-event-planning focused. Source photos have no Pinterest
// links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "garden-party-theme-planning", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A garden party's success rarely comes down to a single impressive element.</p>
<p>It comes down to a handful of decisions working together &mdash; theme, timing, food that's actually manageable &mdash; rather than one showstopping centerpiece carrying the whole event.</p>
<p>This covers that full picture.</p>
${photo("hero.png", "Whimsical garden party setting the perfect celebratory mood", 1248, 832)}

<h2>Choose a Theme That Actually Fits</h2>
<p>A theme pulled from something genuine &mdash; a favorite color, a specific season, a personal interest &mdash; reads as more authentic than one chosen purely because it's trending.</p>
<p>This decision shapes every other choice on this list, which makes it worth settling first, before decor or food planning begins.</p>
${photo("choose-theme.png", "Garden party theme reflecting genuine personal style", 574, 1024)}

<h2>Let the Backyard Be the Main Character</h2>
<p>Working with the yard's existing features &mdash; a mature tree, an established garden bed, natural shade &mdash; creates a more cohesive setting than decor fighting against the space.</p>
<p>Minimal additions in the right spots often outperform heavy styling spread across the whole yard.</p>
${photo("set-scene.png", "Backyard setting taking center stage at a garden party", 574, 1024)}

<h2>Keep Food and Drinks Simple</h2>
<p>A smaller menu of dishes that travel well outdoors and don't need last-minute plating beats an ambitious spread that pulls the host away from actually hosting.</p>
<p>A self-serve drink station solves a real logistics problem, letting guests refill without needing the host to manage it constantly.</p>
${photo("food-drinks.png", "Simple, manageable food and drinks suited for outdoor entertaining", 574, 1024)}

<h2>Decorate Without Draining the Budget</h2>
<p>A few higher-impact items &mdash; string lights, a runner down a table, fresh flowers in simple vessels &mdash; outperform a larger quantity of cheaper decor spread thin.</p>
<p>Borrowed or repurposed items, mixed in with a few new pieces, keep the budget reasonable without the setup looking underdone.</p>
${photo("decor.png", "Thoughtful decor choices maximizing impact within a reasonable budget", 574, 1024)}

<h2>Set a Dress Code That Sets the Mood</h2>
<p>A simple suggested dress code &mdash; garden casual, pastel tones, a specific era &mdash; helps guests show up in a way that reinforces the whole event's feel.</p>
<p>This doesn't need to be strict to work; even a loose suggestion shifts how the party photographs and feels as a whole.</p>
${photo("dress-code.png", "Suggested dress code enhancing the garden party's overall mood", 574, 1024)}

<h2>Plan Entertainment That's Relaxed, Not Boring</h2>
<p>Background music, a simple lawn game, or a designated photo spot all give guests something to do without requiring an organized activity schedule.</p>
<p>The goal is enough structure to prevent dead air, not a full itinerary that turns a relaxed gathering into a managed event.</p>
${photo("entertainment.png", "Relaxed entertainment keeping guests engaged without feeling forced", 574, 1024)}

<h2>Get the Timing Right</h2>
<p>Late afternoon into early evening tends to work best for a garden party, avoiding both peak midday heat and full darkness.</p>
<p>Checking seasonal sunset times and planning lighting accordingly prevents the party from losing its ambiance the moment the sun goes down.</p>
${photo("timing.png", "Perfectly timed garden party avoiding midday heat and early darkness", 574, 1024)}

<h2>Add the Small Extras That Matter</h2>
<p>A few favors, a guest book, or a small detail tied to the theme round out the experience without requiring significant extra effort.</p>
<p>These are the details guests tend to remember and mention afterward, even though they're rarely the most expensive part of the party.</p>
${photo("little-extras.png", "Small thoughtful extras making the garden party memorable", 574, 1024)}

<h2>The Essentials Checklist</h2>
<p>Seating for every guest, shade or a weather backup plan, enough food and drink, lighting for after dark, and a playlist cover the true non-negotiables.</p>
<p>Everything else on this list is enhancement &mdash; these five are what actually need to be locked down before the date arrives.</p>
${photo("checklist.png", "Essential garden party checklist ensuring nothing gets overlooked", 574, 1024)}

<h2>Go With the Flow</h2>
<p>None of these elements need to be perfect to add up to a genuinely good party.</p>
<p>Start with the theme and the essentials checklist, since both anchor everything else, then layer in decor and small extras as time and budget allow.</p>
<p>The best garden parties feel relaxed because the host actually is &mdash; which only happens when the planning got handled well in advance.</p>
`;

module.exports = { body };
