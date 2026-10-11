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

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0DCHHBJM6", title: "Outdoor String Lights for Patio, 100ft LED Waterproof Light", w: 1484, h: 1500 },
    { asin: "B0H3V4ZCKB", title: "LACHON Outdoor String Lights Waterproof, 300 FT with 150 G40 IP65 Bulbs", w: 1500, h: 1489 },
  ],
  intro: [
    { asin: "B0FLXQKBR4", title: "Metal Arch Backdrop Stand, 7.2FT+6FT Wedding Arch Frame, Gold, Set of 2", w: 1500, h: 1481 },
    { asin: "B0F7Q1RPGJ", title: "Set of 3 Arch Backdrop Covers, Premium Stretchy Spandex, Cream Nude Champagne", w: 1500, h: 1500 },
  ],
  budget: [
    { asin: "B0F2M9B27Q", title: "COSTWAY Solid Wood Folding Dining Chairs, Set of 2, Padded Seat, Brown", w: 1500, h: 1409 },
    { asin: "B0GH5S51XP", title: "Wooden Folding Chair with Cushioned Seat, Portable, Stackable Solid Wood", w: 1500, h: 1500 },
  ],
  personal: [
    { asin: "B0GKPCKY6W", title: "RattanView Wooden Welcome Wedding Sign with Flower Box, 24 x 18 Inches", w: 1500, h: 1500 },
    { asin: "B0C9PGTKXZ", title: "Custom Wedding Decor, Personalized Family Name Sign, Wooden Backdrop Sign", w: 1354, h: 1084 },
  ],
  creativeFreedom: [
    { asin: "B0HC3RMFD5", title: "Panelee 90\"x132\" Sage Green Sweetheart Table Decor Wedding Tablecloth Set", w: 1500, h: 1500 },
    { asin: "B0G23R2V7W", title: "12 Pcs Olive Green Cheesecloth Table Runner, 10Ft, Gauze Table Runners", w: 1414, h: 1500 },
  ],
  cozyVibe: [
    { asin: "B0GX5YTGTJ", title: "12FT Kerosene Lantern String Lights, 20 LED Warm White, Black Wire", w: 1143, h: 1500 },
    { asin: "B0C7BRCRRN", title: "Lantern String Lights Outdoor, 27.5FT White with 10 Nylon Lanterns", w: 1500, h: 1500 },
  ],
  smallWeddings: [
    { asin: "B0F66561VR", title: "Champagne Flower Table Centerpieces, Set of 6", w: 1500, h: 1488 },
    { asin: "B0DWMV5Z71", title: "DARJEN Gold Ribbed Tealight Votive Candle Holders, Set of 10", w: 1500, h: 1500 },
  ],
  noCurfew: [
    { asin: "B08LMYTWS6", title: "Outdoor String Lights, 2-Pack 100ft, G40 LED Globe Waterproof Patio Lights", w: 1500, h: 1491 },
    { asin: "B0H1J3RXSH", title: "Tenmiro 200FT LED Outdoor String Lights with Remote, 72+2 Shatterproof Bulbs", w: 1500, h: 1500 },
  ],
  realTalk: [
    { asin: "B0FZ7TL2PB", title: "Wedding Arch Decorations, 2 Pack, Arch Flowers Swag, Dusty Rose", w: 1500, h: 1478 },
    { asin: "B0DQ4BYX7K", title: "Wedding Arch Flowers, Set of 2, Artificial Flower Arrangements, White", w: 1226, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "backyard-wedding-celebration-case-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "backyard-wedding-celebration-case", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A backyard wedding isn't a compromise venue &mdash; for a real number of couples, it's genuinely the better choice.</p>
<p>These seven reasons cover why, beyond the obvious cost savings.</p>
${photo("hero.png", "A beautiful backyard wedding celebration in a personal setting", 1312, 736, "hero")}

<p>A celebration that's personal, laid-back and genuinely beautiful, without annihilating a wedding budget, is exactly what a backyard quietly offers.</p>
${photo("intro.png", "A backyard transformed into a personal, laid-back wedding venue", 574, 1024, "intro")}

<h2>1. The Real Budget Advantage</h2>
<p>Skipping a venue rental fee alone often covers a meaningful chunk of the rest of the wedding budget, without sacrificing the actual quality of the day.</p>
<p>That saved money can go toward better food, a better photographer, or simply a smaller, less stressful overall budget.</p>
${photo("budget.png", "A backyard wedding saving significant budget without sacrificing style", 574, 1024, "budget")}

<h2>2. It's Genuinely Personal</h2>
<p>Getting married in a space that actually means something &mdash; where years of real life already happened &mdash; adds a layer of meaning no rented venue can replicate.</p>
${photo("personal.png", "A backyard wedding held in a space that genuinely means something", 574, 1024, "personal")}

<h2>3. Total Creative Freedom</h2>
<p>No venue rules about vendors, decor, timing or layout means the day can actually look and run exactly as planned, not as a venue's policy allows.</p>
${photo("creative-freedom.png", "Total creative freedom shaping a backyard wedding exactly as planned", 574, 1024, "creativeFreedom")}

<h2>4. The Coziest Vibe Available</h2>
<p>A backyard setting creates a relaxed, intimate atmosphere that a formal rented venue rarely matches, no matter how much is spent trying to recreate it.</p>
${photo("cozy-vibe.png", "A relaxed, intimate atmosphere unique to a backyard wedding", 574, 1024, "cozyVibe")}

<h2>5. Built For Smaller Weddings</h2>
<p>A backyard suits an intimate guest list especially well, though a larger wedding can still work with the right layout and enough careful planning.</p>
${photo("small-weddings.png", "A backyard well-suited to an intimate wedding guest list", 574, 1024, "smallWeddings")}

<h2>6. Nature Provides Free Decor</h2>
<p>Mature trees, existing landscaping and natural light do a surprising amount of the visual work before a single decoration goes up.</p>
<p>This cuts the decor budget significantly, since the backdrop itself is already doing what a rented venue would otherwise charge for.</p>

<h2>7. No Curfew, No Rented-Venue Rules</h2>
<p>Without a venue's cutoff time, the celebration can run exactly as long as it naturally wants to, rather than ending abruptly because a contract says so.</p>
${photo("no-curfew.png", "A backyard wedding celebration running late without a venue curfew", 574, 1024, "noCurfew")}

<h2>Quick Tips to Pull It Off</h2>
<p>Renting the essentials &mdash; tables, chairs, a tent &mdash; rather than assuming the backyard already has everything, avoids most last-minute scrambling.</p>
<p>A real rain plan, a clear answer for power and sound, and sorted parking logistics are the four details that most often get overlooked until it's too late.</p>
<p>Not trying to DIY absolutely everything is worth remembering too &mdash; hiring help for at least the hardest parts keeps the day from becoming more work than celebration.</p>

<h2>Is It Right for You?</h2>
<p>A backyard wedding rewards a couple who values personal meaning, flexibility and budget over a traditional, fully-managed venue experience.</p>
${photo("real-talk.png", "Weighing whether a backyard wedding genuinely fits a couple's priorities", 574, 1024, "realTalk")}
<p>The planning does require more hands-on effort than booking a full-service venue, but for the right couple, that tradeoff is exactly what makes the day feel genuinely theirs.</p>

<h2>Your Backyard, Your Rules</h2>
<p>None of these seven reasons make a backyard the right choice for every couple.</p>
<p>For the ones it does suit, it tends to deliver something a rented venue, at any price, usually can't &mdash; a day that actually feels like home.</p>
`;

module.exports = { body };
