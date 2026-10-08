// Body content for "6 Poolside Decor Ideas for a Resort Feel at Home".
// Numbered idea-list format with a condensed intro covering the
// source's style/palette sections, since both had photos. Source
// title claimed 16 ideas but only had 6 real numbered ideas, with the
// rest being intro/bonus sections. New topic for the site — distinct
// from the existing small-backyard-pool-ideas article, which covers
// pool structure and architecture (lap pools, plunge pools, pool
// shapes), not the decor around the pool. Idea 1 (lounge zone) had 4
// source photos, kept all; ideas 3 and 4 each had 2. Every photo had
// a real Pinterest pin except the hero, so all are credited except
// that one. Rewritten from scratch in the site's calmer tone,
// short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "poolside-decor-summer-vibes", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "poolside-decor-summer-vibes", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>`;
}

const body = `
<p>A pool itself only does half the work of a resort-style backyard.</p>
<p>The area around it &mdash; the seating, the lighting, the small daily details &mdash; is what actually makes it feel like somewhere worth lingering.</p>
<p>These six ideas focus entirely on that surrounding space, not the pool structure itself.</p>
<p>Most of them scale down easily for a smaller pool deck or patio.</p>
${photo("hero.png", "Stylish poolside setup with loungers and summer decor", 1600, 1067)}

<h2>Picking a Direction Before Buying Anything</h2>
<p>A clear style &mdash; resort, coastal, minimalist, tropical &mdash; keeps individual purchases from fighting each other once they're all out by the pool.</p>
<p>A tight, warm-leaning color palette (sandy neutrals, ocean blues, a single accent color) does more for cohesion than any single piece of furniture.</p>
<p>Overdecorating a poolside area is the most common mistake &mdash; too many small objects near water usually just means more things to put away before a storm.</p>
<p>Deciding on direction and palette first saves money on pieces that won't actually fit together.</p>
${pinPhoto("intro-style-1.jpg", "Poolside area styled with a clear resort-inspired direction", 1024, 683, "https://www.pinterest.com/pin/267612402853921293/", "resort-style poolside direction")}
${pinPhoto("intro-style-2.jpg", "Cohesive poolside styling with consistent design choices", 683, 1024, "https://www.pinterest.com/pin/4603312261975980672/", "cohesive poolside styling")}
${pinPhoto("intro-style-3.jpg", "Poolside decor reflecting a clear aesthetic direction", 575, 1024, "https://www.pinterest.com/pin/259027416065335211/", "poolside aesthetic direction")}
${pinPhoto("intro-style-4.jpg", "Well-planned poolside area avoiding common decor mistakes", 683, 1024, "https://www.pinterest.com/pin/1337074890172792/", "well-planned poolside decor")}
${pinPhoto("intro-palette.jpg", "Warm, cohesive color palette used throughout a poolside space", 683, 1024, "https://www.pinterest.com/pin/362891682497257410/", "poolside color palette")}

<h2>1. A Resort-Style Lounge Zone</h2>
<p>A dedicated cluster of loungers, a side table and a shade structure turns one corner of the deck into an actual destination, not just a walkway.</p>
<p>Matching or coordinated loungers read as more intentional than a mismatched set collected over time.</p>
<p>Shade matters as much as the seating itself &mdash; an umbrella or a simple canopy extends how long the space actually gets used during peak sun.</p>
<p>This is the single highest-impact change on this list, since it defines the whole area's purpose at a glance.</p>
${pinPhoto("lounge-zone-1.jpg", "Resort-style lounge zone with comfortable poolside seating", 688, 1024, "https://www.pinterest.com/pin/188729040629772037/", "resort-style lounge seating")}
${pinPhoto("lounge-zone-2.jpg", "Stylish poolside lounge area with coordinated furniture", 572, 1024, "https://www.pinterest.com/pin/538039486758052357/", "coordinated poolside furniture")}
${pinPhoto("lounge-zone-3.jpg", "Shaded poolside lounge zone for all-day comfort", 683, 1024, "https://www.pinterest.com/pin/1086141635165547569/", "shaded poolside lounge")}
${pinPhoto("lounge-zone-4.jpg", "Poolside lounge zone creating a dedicated relaxation destination", 683, 1024, "https://www.pinterest.com/pin/12314598978419750/", "poolside relaxation zone")}

<h2>2. Outdoor Rugs to Define the Seating</h2>
<p>A rug underfoot visually separates the lounge area from the rest of the deck without adding any furniture.</p>
<p>Outdoor-rated materials matter here &mdash; a standard indoor rug won't hold up to pool splash and sun exposure.</p>
<p>This is one of the cheapest ways to make a seating area feel like its own defined room.</p>
<p>A smaller budget can still achieve a lot with just this one addition.</p>
${pinPhoto("outdoor-rugs.jpg", "Outdoor rug defining a poolside seating area", 683, 1024, "https://www.pinterest.com/pin/2885187258329420/", "outdoor rug poolside seating")}

<h2>3. Potted Plants for a Lush Look</h2>
<p>Large potted plants soften the hard lines of concrete decking and pool edges more than almost any other addition.</p>
<p>Heat- and sun-tolerant varieties handle poolside conditions without constant maintenance.</p>
<p>Grouping a few different heights together reads as more intentional than a single row of matching pots.</p>
<p>This is a flexible, scalable idea &mdash; a few pots for a small deck, many more for a larger yard.</p>
${pinPhoto("potted-plants-1.jpg", "Lush potted plants creating a tropical poolside atmosphere", 575, 1024, "https://www.pinterest.com/pin/17381148558265200/", "lush poolside potted plants")}
${pinPhoto("potted-plants-2.jpg", "Various potted plants arranged for a resort-like pool area", 736, 1024, "https://www.pinterest.com/pin/633387444245532/", "resort-style potted plants")}

<h2>4. Layered Lighting for Warm Nights</h2>
<p>String lights, lanterns and low-level path lighting each serve a different need once the sun goes down.</p>
<p>This is what turns a pool area from a daytime-only space into something usable well into the evening.</p>
<p>Warm-toned bulbs matter more here than anywhere else in the yard &mdash; cool white light works against the relaxed mood.</p>
<p>A layered approach, rather than one single overhead light, is what actually creates the atmosphere.</p>
${pinPhoto("layered-lighting-1.jpg", "Warm layered lighting creating ambiance around a pool at night", 575, 1024, "https://www.pinterest.com/pin/492649954994568/", "warm poolside evening lighting")}
${pinPhoto("layered-lighting-2.jpg", "String lights and lanterns illuminating a poolside area", 683, 1024, "https://www.pinterest.com/pin/124341639709178237/", "layered poolside string lighting")}

<h2>5. A Towel and Drink Station</h2>
<p>A small dedicated spot for rolled towels and cold drinks keeps both from cluttering the actual seating area.</p>
<p>A simple cart, a shelf, or even a labeled basket all work depending on the space available.</p>
<p>This solves a genuine daily annoyance &mdash; the constant trip back inside for a towel or a refill.</p>
<p>A practical addition that also happens to photograph well.</p>
${pinPhoto("towel-drink-station.jpg", "Stylish poolside towel and drink station for convenience", 576, 1024, "https://www.pinterest.com/pin/821695894559055471/", "poolside towel and drink station")}

<h2>6. Outdoor Dining Touches</h2>
<p>A small table and a couple of chairs near the pool extends the space beyond just lounging.</p>
<p>This suits anyone who wants to eat meals outside during the warmer months without setting up a separate patio dining area.</p>
<p>Weather-resistant materials matter here, same as with the seating and rugs elsewhere on this list.</p>
<p>Even a compact bistro set does the job in a smaller space.</p>
${pinPhoto("outdoor-dining.jpg", "Outdoor dining setup near a pool for al fresco meals", 736, 1024, "https://www.pinterest.com/pin/289356344852471636/", "poolside outdoor dining setup")}

<h2>The Small Details That Add Up</h2>
<p>A stack of folded towels in a matching color, a tray of citrus-infused water, a scattering of floating candles &mdash; none of these need their own section, but together they do real work.</p>
<p>These small touches are what separate a styled pool area from one that's merely functional.</p>
<p>Worth adding in gradually rather than all at once, since a few well-placed details outperform a cluttered attempt at all of them.</p>
${pinPhoto("small-details.jpg", "Small decorative details enhancing a stylish poolside space", 717, 1024, "https://www.pinterest.com/pin/4714774605624937/", "small poolside styling details")}

<h2>Making a Small Pool Area Feel Stylish</h2>
<p>Every idea on this list scales down for a smaller deck or patio.</p>
<p>Prioritize the lounge zone and lighting first &mdash; those two changes carry the most visual weight relative to the space they take up.</p>
<p>A tighter footprint actually makes the color-palette and style-direction advice from earlier even more important, since there's less room for anything that doesn't fit the plan.</p>
${pinPhoto("small-pool-stylish.jpg", "Small pool area styled to feel spacious and luxurious", 717, 1024, "https://www.pinterest.com/pin/2392606048176620/", "stylish small pool area")}

<h2>What's Actually Worth the Investment</h2>
<p>Quality outdoor furniture and good lighting hold up and stay relevant longer than trend-driven decorative objects.</p>
<p>A well-built lounge chair outlasts several seasons of smaller accent purchases.</p>
<p>Worth spending more on the pieces that get used daily, and less on anything purely decorative.</p>
${pinPhoto("long-term-trends.jpg", "Timeless poolside decor investments that last beyond a single season", 575, 1024, "https://www.pinterest.com/pin/1048283250779476895/", "long-lasting poolside decor")}

<h2>Keeping It Budget-Friendly</h2>
<p>A single rug, a few potted plants and a string of warm lights deliver most of the visual transformation on this list without the cost of new furniture.</p>
<p>Secondhand or off-season sales are a reliable source for outdoor furniture at a fraction of full price.</p>
<p>Starting with the cheapest, highest-impact items &mdash; lighting and a rug &mdash; makes sense before committing to bigger furniture purchases.</p>
${pinPhoto("budget-friendly.jpg", "Budget-friendly poolside decor ideas that still look stylish", 683, 1024, "https://www.pinterest.com/pin/2040762328505389/", "budget-friendly poolside decor")}

<h2>Final Thoughts</h2>
<p>A resort-style pool area rarely comes down to one expensive purchase.</p>
<p>It's the combination of a defined lounge zone, layered lighting, a bit of greenery and a few small daily conveniences that actually creates the feel.</p>
<p>Start with whichever idea solves the most immediate problem in the space, and build from there.</p>
<p>A pool area that gets used often is worth more than one that only looks good in photos.</p>
`;

module.exports = { body };
