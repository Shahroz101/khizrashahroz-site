// Body content for "How to Plan a Garden Party People Actually
// Remember". Guide format, condensed from a 13-section source
// (closing checklist folded into final thoughts). New event-planning
// topic for the site — distinct from party-table-setup-ideas (table
// styling specifically) and graduation-party-centerpiece-ideas
// (centerpieces specifically), neither of which is garden/outdoor or
// whole-event-planning focused. Source photos have no Pinterest
// links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DNW693G8", title: "Rngmsi Wildflower Party Decorations, 48 Pcs Floral Hanging Swirls", w: 1492, h: 1468 },
    { asin: "B0DFPHJG36", title: "Sage Green and Dusty Pink Party Decorations, Tissue Pom Poms and Paper Lanterns", w: 1500, h: 1484 },
  ],
  theme: [
    { asin: "B08LCS9HZT", title: "PartyWoo Pastel Crepe Paper Streamers, 6 Rolls, 492 Ft", w: 1500, h: 1500 },
    { asin: "B08XBD794R", title: "TELDRASSIL Artificial Rose Vine Garland, 4 Pcs, 26 Ft Total, Silk Hanging Vines", w: 1455, h: 1500 },
  ],
  scene: [
    { asin: "B0BTY14F3P", title: "KOOPER 4 Pack Solar Lanterns Outdoor, Flickering Flame Hanging Lights", w: 1500, h: 1428 },
    { asin: "B0BL7CVK6X", title: "NEEDOMO Decorative Lanterns for Porch, Set of 2, Indoor and Outdoor", w: 1000, h: 1000 },
  ],
  food: [
    { asin: "B0FQV77384", title: "Lifewit 1 Gallon Drink Dispenser for Party, 2 Pack, Leak-Proof Spigot", w: 1500, h: 1497 },
    { asin: "B0C88R51G4", title: "Famiware Serving Platters, Set of 3 Sizes, Rectangular, Vanilla White", w: 1500, h: 1500 },
  ],
  decor: [
    { asin: "B09336FJW6", title: "100 Ft LED Outdoor String Lights, 2 Pack, G40 Shatterproof Globe Bulbs, Dimmable", w: 1500, h: 1496 },
    { asin: "B0H4V4Z7JB", title: "Encasa XO Boho Cotton Table Runner, Woven Jacquard, 13 x 118 Inch, Beige", w: 1500, h: 1500 },
  ],
  dress: [
    { asin: "B0HCTXPX5C", title: "Women's Wide Brim Straw Sun Hat with Striped Band, Panama Fedora Style", w: 1163, h: 669 },
    { asin: "B0C4GYSCP1", title: "Pink Rose Floral Flower Wall Backdrop, 7 x 5 Ft, for Parties and Photos", w: 1000, h: 1000 },
  ],
  entertainment: [
    { asin: "B0BN1PCJC8", title: "Portable Cornhole Set with 2 Boards and 8 Bean Bags, Outdoor Lawn Game", w: 1500, h: 1390 },
    { asin: "B0BRKPVZB4", title: "Portable Bluetooth Speaker, 20W, Waterproof IPX5, 24 Hour Playtime", w: 1139, h: 1500 },
  ],
  timing: [
    { asin: "B07S8NQF5X", title: "Solar Lanterns Outdoor, 14 Inch Tempered Glass, Waterproof, 2 Pack", w: 998, h: 966 },
    { asin: "B0DZ4JGT43", title: "Coleman Citronella Candle, 18 Oz Outdoor Bucket, 30+ Hour Burn Time", w: 1289, h: 1272 },
  ],
  extras: [
    { asin: "B0CVD1MGCJ", title: "Ferry Morse Wildflower Seeds Shaker Bag, Pollinator Mix", w: 875, h: 1500 },
    { asin: "B0DT5JRJY8", title: "Kunitsa Co. Guest Book, Blank Sign In Book, Oat Linen Cover", w: 1500, h: 1350 },
  ],
  checklist: [
    { asin: "B0CHB6NFMR", title: "Damei Century Folding Camping Chairs, 4 Pack, Portable for Beach, Lawn and Yard", w: 1485, h: 1481 },
    { asin: "B0GS4ZGF94", title: "SANWAY 10 x 10 Ft Pop Up Canopy Tent, One-Push Setup, Silver White", w: 1401, h: 1165 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "garden-party-theme-planning-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "garden-party-theme-planning", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A garden party's success rarely comes down to a single impressive element.</p>
<p>It comes down to a handful of decisions working together &mdash; theme, timing, food that's actually manageable &mdash; rather than one showstopping centerpiece carrying the whole event.</p>
<p>This covers that full picture.</p>
${photo("hero.png", "Whimsical garden party setting the perfect celebratory mood", 1248, 832, "hero")}

<h2>Choose a Theme That Actually Fits</h2>
<p>A theme pulled from something genuine &mdash; a favorite color, a specific season, a personal interest &mdash; reads as more authentic than one chosen purely because it's trending.</p>
<p>This decision shapes every other choice on this list, which makes it worth settling first, before decor or food planning begins.</p>
${photo("choose-theme.png", "Garden party theme reflecting genuine personal style", 574, 1024, "theme")}

<h2>Let the Backyard Be the Main Character</h2>
<p>Working with the yard's existing features &mdash; a mature tree, an established garden bed, natural shade &mdash; creates a more cohesive setting than decor fighting against the space.</p>
<p>Minimal additions in the right spots often outperform heavy styling spread across the whole yard.</p>
${photo("set-scene.png", "Backyard setting taking center stage at a garden party", 574, 1024, "scene")}

<h2>Keep Food and Drinks Simple</h2>
<p>A smaller menu of dishes that travel well outdoors and don't need last-minute plating beats an ambitious spread that pulls the host away from actually hosting.</p>
<p>A self-serve drink station solves a real logistics problem, letting guests refill without needing the host to manage it constantly.</p>
${photo("food-drinks.png", "Simple, manageable food and drinks suited for outdoor entertaining", 574, 1024, "food")}

<h2>Decorate Without Draining the Budget</h2>
<p>A few higher-impact items &mdash; string lights, a runner down a table, fresh flowers in simple vessels &mdash; outperform a larger quantity of cheaper decor spread thin.</p>
<p>Borrowed or repurposed items, mixed in with a few new pieces, keep the budget reasonable without the setup looking underdone.</p>
${photo("decor.png", "Thoughtful decor choices maximizing impact within a reasonable budget", 574, 1024, "decor")}

<h2>Set a Dress Code That Sets the Mood</h2>
<p>A simple suggested dress code &mdash; garden casual, pastel tones, a specific era &mdash; helps guests show up in a way that reinforces the whole event's feel.</p>
<p>This doesn't need to be strict to work; even a loose suggestion shifts how the party photographs and feels as a whole.</p>
${photo("dress-code.png", "Suggested dress code enhancing the garden party's overall mood", 574, 1024, "dress")}

<h2>Plan Entertainment That's Relaxed, Not Boring</h2>
<p>Background music, a simple lawn game, or a designated photo spot all give guests something to do without requiring an organized activity schedule.</p>
<p>The goal is enough structure to prevent dead air, not a full itinerary that turns a relaxed gathering into a managed event.</p>
${photo("entertainment.png", "Relaxed entertainment keeping guests engaged without feeling forced", 574, 1024, "entertainment")}

<h2>Get the Timing Right</h2>
<p>Late afternoon into early evening tends to work best for a garden party, avoiding both peak midday heat and full darkness.</p>
<p>Checking seasonal sunset times and planning lighting accordingly prevents the party from losing its ambiance the moment the sun goes down.</p>
${photo("timing.png", "Perfectly timed garden party avoiding midday heat and early darkness", 574, 1024, "timing")}

<h2>Add the Small Extras That Matter</h2>
<p>A few favors, a guest book, or a small detail tied to the theme round out the experience without requiring significant extra effort.</p>
<p>These are the details guests tend to remember and mention afterward, even though they're rarely the most expensive part of the party.</p>
${photo("little-extras.png", "Small thoughtful extras making the garden party memorable", 574, 1024, "extras")}

<h2>The Essentials Checklist</h2>
<p>Seating for every guest, shade or a weather backup plan, enough food and drink, lighting for after dark, and a playlist cover the true non-negotiables.</p>
<p>Everything else on this list is enhancement &mdash; these five are what actually need to be locked down before the date arrives.</p>
${photo("checklist.png", "Essential garden party checklist ensuring nothing gets overlooked", 574, 1024, "checklist")}

<h2>Go With the Flow</h2>
<p>None of these elements need to be perfect to add up to a genuinely good party.</p>
<p>Start with the theme and the essentials checklist, since both anchor everything else, then layer in decor and small extras as time and budget allow.</p>
<p>The best garden parties feel relaxed because the host actually is &mdash; which only happens when the planning got handled well in advance.</p>
`;

module.exports = { body };
