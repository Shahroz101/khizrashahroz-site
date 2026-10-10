// Body content for "7 Real Reasons to Get Married in Your Own
// Backyard". Numbered idea-list format, reordered from the source's
// 9 reasons (condensed slightly; "Planning Challenges? Worth It" and
// "Your Guests Will Remember It" folded into the closing section).
// Distinct from garden-wedding-planning-tips (execution tips for a
// garden VENUE, any garden) and from garden-party-theme-planning
// (general entertaining, not wedding-specific) — this is a decision/
// advocacy case specifically for hosting at one's OWN home: budget,
// personal meaning, creative freedom and timeline control, a
// genuinely different angle already distinct in the source material
// itself. Source had a "Shop the Palette" sponsored product widget
// (Supabase product-images bucket), unrelated to the 9 reasons —
// skipped as non-editorial, not a content idea. 0 Pinterest pins —
// all uncredited photo().

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "backyard-wedding-celebration-case", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A backyard wedding isn't a compromise venue &mdash; for a real number of couples, it's genuinely the better choice.</p>
<p>These seven reasons cover why, beyond the obvious cost savings.</p>
${photo("hero.png", "A beautiful backyard wedding celebration in a personal setting", 1312, 736)}

<p>A celebration that's personal, laid-back and genuinely beautiful, without annihilating a wedding budget, is exactly what a backyard quietly offers.</p>
${photo("intro.png", "A backyard transformed into a personal, laid-back wedding venue", 574, 1024)}

<h2>1. The Real Budget Advantage</h2>
<p>Skipping a venue rental fee alone often covers a meaningful chunk of the rest of the wedding budget, without sacrificing the actual quality of the day.</p>
<p>That saved money can go toward better food, a better photographer, or simply a smaller, less stressful overall budget.</p>
${photo("budget.png", "A backyard wedding saving significant budget without sacrificing style", 574, 1024)}

<h2>2. It's Genuinely Personal</h2>
<p>Getting married in a space that actually means something &mdash; where years of real life already happened &mdash; adds a layer of meaning no rented venue can replicate.</p>
${photo("personal.png", "A backyard wedding held in a space that genuinely means something", 574, 1024)}

<h2>3. Total Creative Freedom</h2>
<p>No venue rules about vendors, decor, timing or layout means the day can actually look and run exactly as planned, not as a venue's policy allows.</p>
${photo("creative-freedom.png", "Total creative freedom shaping a backyard wedding exactly as planned", 574, 1024)}

<h2>4. The Coziest Vibe Available</h2>
<p>A backyard setting creates a relaxed, intimate atmosphere that a formal rented venue rarely matches, no matter how much is spent trying to recreate it.</p>
${photo("cozy-vibe.png", "A relaxed, intimate atmosphere unique to a backyard wedding", 574, 1024)}

<h2>5. Built For Smaller Weddings</h2>
<p>A backyard suits an intimate guest list especially well, though a larger wedding can still work with the right layout and enough careful planning.</p>
${photo("small-weddings.png", "A backyard well-suited to an intimate wedding guest list", 574, 1024)}

<h2>6. Nature Provides Free Decor</h2>
<p>Mature trees, existing landscaping and natural light do a surprising amount of the visual work before a single decoration goes up.</p>
<p>This cuts the decor budget significantly, since the backdrop itself is already doing what a rented venue would otherwise charge for.</p>

<h2>7. No Curfew, No Rented-Venue Rules</h2>
<p>Without a venue's cutoff time, the celebration can run exactly as long as it naturally wants to, rather than ending abruptly because a contract says so.</p>
${photo("no-curfew.png", "A backyard wedding celebration running late without a venue curfew", 574, 1024)}

<h2>Quick Tips to Pull It Off</h2>
<p>Renting the essentials &mdash; tables, chairs, a tent &mdash; rather than assuming the backyard already has everything, avoids most last-minute scrambling.</p>
<p>A real rain plan, a clear answer for power and sound, and sorted parking logistics are the four details that most often get overlooked until it's too late.</p>
<p>Not trying to DIY absolutely everything is worth remembering too &mdash; hiring help for at least the hardest parts keeps the day from becoming more work than celebration.</p>

<h2>Is It Right for You?</h2>
<p>A backyard wedding rewards a couple who values personal meaning, flexibility and budget over a traditional, fully-managed venue experience.</p>
${photo("real-talk.png", "Weighing whether a backyard wedding genuinely fits a couple's priorities", 574, 1024)}
<p>The planning does require more hands-on effort than booking a full-service venue, but for the right couple, that tradeoff is exactly what makes the day feel genuinely theirs.</p>

<h2>Your Backyard, Your Rules</h2>
<p>None of these seven reasons make a backyard the right choice for every couple.</p>
<p>For the ones it does suit, it tends to deliver something a rented venue, at any price, usually can't &mdash; a day that actually feels like home.</p>
`;

module.exports = { body };
