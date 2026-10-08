// Body content for "What to Actually Put on a Woven Tray, by Category".
// Guide-format piece, not a numbered idea list. The source used the
// identical by-room/surface framing as the already-published
// round-tray-decor-ideas article (coffee table, entryway, dining
// table, kitchen counter, nightstand, bathroom, mantel, ottoman...),
// which would make this a near self-duplicate within the same site.
// This rewrite is organized around tray contents instead — what
// actually goes on top, grouped by function — which sidesteps the
// room-by-room overlap entirely. The source also had only one photo
// in the whole article (a generic stock hero, no per-idea images), so
// this stays a single-photo guide rather than a numbered list format.
// Rewritten from scratch in the site's calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "woven-tray-styling-contents", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A woven tray works almost everywhere in a home, but it's rarely the tray itself that makes the spot look good.</p>
<p>It's what's on it.</p>
<p>The same tray reads completely differently depending on whether it holds candles, books or a drink setup.</p>
<p>Here's how to actually fill one, organized by what the tray needs to do rather than which room it sits in.</p>
${photo("hero.jpg", "Woven tray styled with candles, greenery and small decorative objects", 1400, 934)}

<h2>For Corralling Everyday Clutter</h2>
<p>A tray's most practical job is containing the small stuff that otherwise spreads across a surface.</p>
<p>Keys, mail, loose change and a wallet all belong in one spot by the door, not scattered across an entryway console.</p>
<p>Remote controls and coasters work the same way on a coffee table.</p>
<p>The tray's edge does the actual organizing &mdash; everything inside it reads as intentional, everything outside it reads as clutter.</p>

<h2>For a Drink or Bar Setup</h2>
<p>A tray groups bottles, glasses and a small ice bucket into one movable unit.</p>
<p>This works on a bar cart, a sideboard, or even a kitchen counter that doubles as a casual bar.</p>
<p>Being able to lift the whole setup and move it &mdash; to a party, to a different room &mdash; is the real advantage over leaving bottles loose.</p>
<p>A cloth napkin folded underneath adds a bit of polish without any real effort.</p>

<h2>For Candles and Ambient Objects</h2>
<p>Grouping two or three candles of different heights on a tray keeps wax drips contained and makes the whole cluster look deliberate.</p>
<p>This works on a coffee table, a mantel, the edge of a bathtub, or a nightstand.</p>
<p>A single matchbox or a small lighter tucked in alongside the candles keeps everything needed in one spot.</p>
<p>Varying the candle heights, rather than lining up three identical ones, adds more visual interest.</p>

<h2>For Plants and Greenery</h2>
<p>A tray catches water and soil mess from a small potted plant, protecting the surface underneath.</p>
<p>Grouping two or three small plants together on one tray reads as a mini garden rather than scattered pots.</p>
<p>This works equally well on a kitchen windowsill, a console table or an outdoor patio surface.</p>
<p>A tray with a slight lip or raised edge handles water better than a completely flat one.</p>

<h2>For Books and Reading Material</h2>
<p>A tray on an ottoman or ottoman-adjacent surface turns loose books and magazines into an intentional stack.</p>
<p>Topping the stack with a small object &mdash; a candle, a small dish &mdash; finishes the look without much effort.</p>
<p>This also works well in a window seat or reading nook, where books tend to pile up unstyled otherwise.</p>
<p>Two to four books is usually the right amount; much more starts to look like a tipping stack rather than a styled one.</p>

<h2>For Bathroom and Vanity Essentials</h2>
<p>Lotion, perfume and a few daily skincare items stay far more organized grouped on a tray than scattered across a counter.</p>
<p>It also makes wiping down the counter underneath faster &mdash; lift the tray, clean, set it back down.</p>
<p>A smaller, water-resistant tray suits a bathroom counter better than a large open-weave one, which can trap moisture.</p>
<p>This same logic applies to a dresser top or vanity table in a bedroom.</p>

<h2>For a Coffee Station or Bar Cart Setup</h2>
<p>A tray keeps syrups, a sugar bowl and spoons contained in one grab-and-go unit near the coffee maker.</p>
<p>It also makes cleanup faster when something inevitably spills during a rushed morning.</p>
<p>This same approach works for a tea station or a small home bar setup.</p>
<p>Keeping the tray's contents to daily essentials only prevents it from turning into general counter storage.</p>

<h2>For a Seasonal Rotation</h2>
<p>A tray makes seasonal styling easy to swap without redoing an entire surface.</p>
<p>Fall gourds and pinecones give way to winter greenery, which gives way to spring bulbs or fresh flowers.</p>
<p>Keeping the tray itself constant and rotating only what's inside it is the fastest way to refresh a space through the year.</p>
<p>This works on nearly any surface already covered above &mdash; coffee table, mantel, console, dining table.</p>

<h2>Common Mistakes Worth Avoiding</h2>
<p>Overfilling the tray is the most common one &mdash; once items start overlapping or crowding the edges, the tray stops reading as organized.</p>
<p>Mismatched, random objects without a shared color or material thread tend to look unplanned rather than curated.</p>
<p>A tray that's too small for its surface gets lost; one too large overwhelms a narrow table.</p>
<p>And a tray that never gets used, sitting purely for show, usually ends up collecting dust rather than earning its spot.</p>

<h2>Final Thoughts</h2>
<p>The tray itself is almost never the interesting part.</p>
<p>What's grouped inside it &mdash; and how well that grouping matches what the surface actually needs &mdash; is what makes it work.</p>
<p>Start with the tray's job: clutter control, a drink setup, candles, books, or vanity essentials.</p>
<p>The right contents will usually make the choice of room and tray style obvious from there.</p>
`;

module.exports = { body };
