// Body content for "How to Plan a Bathroom Remodel, Step by Step".
// Numbered guide format, matching the source's 11 steps. Genuinely
// distinct from the site's many existing bathroom articles, which
// cover styling, storage, color and design direction — none cover the
// actual remodel project workflow (budget, permits, contractors,
// ordering materials, demo, installation). New logistics-focused
// topic. Source photos have no Pinterest links, so none carry credit
// captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B09M9QH3JV", title: "Shower System Brushed Nickel Bathroom Rainfall Shower Faucet Set Complete Wall Mounted 8", w: 791, h: 975 },
    { asin: "B08T78VNYW", title: "wonline 36\" Wall Mounted Bathroom Vanity Set Two Drawers Storage Cabinet with Ceramic", w: 1500, h: 1500 },
  ],
  step1: [
    { asin: "B08MSLXL4Q", title: "Home Renovation Planner Notebook: Home Renovation Log book, Sketchpad, Checklist", w: 1000, h: 1250 },
    { asin: "B0FLHZPFGC", title: "Home Project Planner Notebook: Organize Renovations, Repairs &amp; DIY Tasks with Ease", w: 1000, h: 1499 },
  ],
  step2: [
    { asin: "B0GV4FZJZ9", title: "Home Renovation Budget &amp; Project Organizer: Simple Planning Workbook to Track Costs", w: 1000, h: 1293 },
    { asin: "B0FCN19JCS", title: "House Renovation Journal: A Guided Notebook to Plan Projects", w: 1000, h: 1499 },
  ],
  step3: [
    { asin: "1984823914", title: "Made for Living: Collected Interiors for All Sorts of Styles", w: 1277, h: 1500 },
    { asin: "084783039X", title: "Artful Home", w: 1074, h: 1500 },
  ],
  step4: [
    { asin: "B0931YY9LZ", title: "Bosch GLM165-25G Blaze Green-Beam 165 Ft. Laser Measure Tool", w: 297, h: 845 },
    { asin: "B076C3TB8P", title: "Bosch GLM165-40 Blaze Pro 165 Ft. Laser Measure, Laser Measuring Tool", w: 440, h: 981 },
  ],
  step5: [
    { asin: "B08JD64WSJ", title: "Marmo White Marble Look 6 in. x 6 in. Polished Porcelain Floor and Wall Tile Sample", w: 1467, h: 1474 },
    { asin: "B08JD5RNRB", title: "Marmo Black Marble Look 6 in. x 6 in. Matte Porcelain Floor and Wall Tile Sample", w: 1500, h: 1500 },
  ],
  step6: [
    { asin: "B0DK1PTQD2", title: "Home Remodeling Contract Forms Book: House Renovation Service Agreement Form, 50 Forms", w: 1000, h: 1293 },
    { asin: "B0GYFQ4RKN", title: "Construction Contract Form Book: 25 Professional Fill-in Legal Agreement Templates for", w: 1000, h: 1293 },
  ],
  step7: [
    { asin: "1631869450", title: "Code Check Complete 3rd Edition: An Illustrated Guide to the Building, Plumbing", w: 1400, h: 988 },
    { asin: "1641552158", title: "Code Check 10th Edition: An Illustrated Guide to Building a Safe House", w: 1082, h: 1400 },
  ],
  step8: [
    { asin: "B00CJW3IYC", title: "KOHLER K-3989-96 Wellworth Highline Two-Piece Dual-Flush Elongated Toilet with Class Five", w: 635, h: 1000 },
    { asin: "B07WBV3FXB", title: "Drake Two-Piece Elongated Dual Flush 1.28 and 0.8 GPF DYNAMAX TORNADO FLUSH Toilet", w: 623, h: 947 },
  ],
  step9: [
    { asin: "B002RL8ODK", title: "ZIPWALL ZP4 ZipPole 10 Ft Dust Barrier Poles for Remodeling, 4-Pack, Black", w: 1427, h: 828 },
    { asin: "B00DH4IT7C", title: "Ultrasac Contractor Bags 42 Gallon, 20 PACK/w FLAP TIES", w: 522, h: 864 },
  ],
  step10: [
    { asin: "B00Y19C6X0", title: "RedGard Ready to Use Pink Waterproofing and Crack Prevention 1 gal", w: 1420, h: 1500 },
    { asin: "B07XL65MLP", title: "YEFU Tile Leveling System 1/8'' Kit Include 300 PCS Tile Spacers Clips and 120 PCS Reusable", w: 1197, h: 1168 },
  ],
  step11: [
    { asin: "B09TVJWVBG", title: "Cilee 10 Piece Chrome Bathroom Hardware Set, 24 and 16 inch Towel Bar Set", w: 1492, h: 1500 },
    { asin: "B082F7C7T1", title: "TASTOS 3-Piece Bathroom Hardware Set Brushed Nickel Wall Mounted Bathroom Accessory Set", w: 917, h: 743 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bathroom-remodel-planning-steps-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bathroom-remodel-planning-steps", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A bathroom remodel has a reputation for going over budget and over schedule, and it's usually because of planning gaps, not bad luck.</p>
<p>The projects that go smoothly tend to follow roughly the same sequence, in roughly the same order.</p>
<p>This walks through that sequence.</p>
${photo("hero.png", "Beautifully remodeled modern bathroom showcasing planning success", 1248, 832, "hero")}

<h2>Step 1: Figure Out What's Actually Wanted</h2>
<p>A clear list of what's actually broken, outdated or missing &mdash; rather than a vague sense of wanting an upgrade &mdash; gives the whole project a real target.</p>
<p>This list also becomes the reference point for every later decision, keeping the scope from quietly expanding as the project goes on.</p>
${photo("figure-out-wants.png", "Clear vision guiding the start of a bathroom remodel plan", 574, 1024, "step1")}

<h2>Step 2: Set a Realistic Budget</h2>
<p>A budget that includes a genuine contingency &mdash; typically 10 to 20 percent above the estimated cost &mdash; absorbs the surprises that come up in nearly every remodel.</p>
<p>Pricing out the big-ticket items first (tile, fixtures, labor) gives a much more realistic number than guessing at a total upfront.</p>
${photo("set-budget.png", "Realistic budget planning preventing remodel cost overruns", 574, 1024, "step2")}

<h2>Step 3: Gather Inspiration Without Getting Lost in It</h2>
<p>A focused folder of a dozen or so reference images communicates a clear direction to contractors far better than an unlimited, ever-growing collection.</p>
<p>Narrowing inspiration down early also prevents a common trap: endlessly browsing new ideas instead of actually moving the project forward.</p>
${photo("get-inspired.png", "Curated design inspiration guiding the bathroom remodel direction", 574, 1024, "step3")}

<h2>Step 4: Plan the Layout Carefully</h2>
<p>Moving plumbing fixtures is one of the most expensive changes in any bathroom remodel, so it's worth confirming the layout is genuinely necessary before committing to it.</p>
<p>A layout that keeps existing plumbing lines, even with some compromise, often delivers most of the improvement for a fraction of the cost of a full reconfiguration.</p>
${photo("plan-layout.png", "Thoughtfully planned bathroom layout optimizing space and function", 574, 1024, "step4")}

<h2>Step 5: Choose Materials That Won't Cause Regret</h2>
<p>Durability and water resistance matter more here than in almost any other room &mdash; a beautiful material that can't handle bathroom humidity becomes an expensive mistake.</p>
<p>Ordering physical samples and viewing them in the actual bathroom's lighting avoids the common disappointment of a material looking different at home than it did in the showroom.</p>
${photo("choose-materials.png", "Durable, water-resistant materials chosen for long-term success", 574, 1024, "step5")}

<h2>Step 6: Find the Right Professionals</h2>
<p>Getting multiple quotes and checking real references matters more for a bathroom remodel than almost any other home project, given how much can go wrong with plumbing and electrical work done poorly.</p>
<p>A contractor who asks detailed questions about the plan is generally a better sign than one who agrees to everything immediately.</p>
${photo("find-pros.png", "Finding the right professionals to execute a successful remodel", 574, 1024, "step6")}

<h2>Step 7: Handle Permits and Approvals</h2>
<p>Most structural, electrical and plumbing changes require a permit, and skipping this step risks real problems at resale time, not just during the project itself.</p>
<p>A contractor experienced in local code typically handles this process, but it's worth confirming it's actually being done rather than assuming.</p>
${photo("permits.png", "Proper permits and approvals securing a remodel's legal foundation", 574, 1024, "step7")}

<h2>Step 8: Order Everything Before Demo Starts</h2>
<p>Having materials and fixtures on hand before demolition begins avoids the project stalling mid-way while waiting on a backordered item.</p>
<p>This is one of the most commonly skipped steps, and one of the most disruptive to skip, since a bathroom without a toilet or shower is a daily problem, not a minor inconvenience.</p>
${photo("order-everything.png", "Materials ordered in advance keeping the remodel timeline on track", 574, 1024, "step8")}

<h2>Step 9: Get Through Demo</h2>
<p>Protecting the surrounding areas of the home from dust and debris before demo starts saves considerable cleanup time afterward.</p>
<p>This phase often reveals hidden issues &mdash; water damage, outdated wiring &mdash; which is part of why the budget contingency from step 2 matters so much.</p>
${photo("demo-time.png", "Demolition phase clearing the way for a complete bathroom transformation", 574, 1024, "step9")}

<h2>Step 10: Let Installation Happen</h2>
<p>Plumbing and electrical rough-in happens first, followed by flooring, tile, and fixtures roughly in that order.</p>
<p>This is the phase where the earlier planning pays off &mdash; a well-planned project moves through installation with far fewer surprises than one figured out on the fly.</p>
${photo("installation.png", "Installation phase bringing the bathroom remodel plan to life", 574, 1024, "step10")}

<h2>Step 11: Add the Finishing Touches</h2>
<p>Hardware, mirrors, lighting fixtures and final decor are what actually make the remodeled bathroom feel complete, even after all the major work is done.</p>
<p>This is also the most enjoyable phase of the whole process, arriving after the most disruptive parts are already finished.</p>
${photo("finishing-touches.png", "Finishing touches completing a successful bathroom remodel", 574, 1024, "step11")}

<h2>Final Thoughts</h2>
<p>None of these 11 steps need to happen quickly to go well.</p>
<p>The projects that go smoothly are the ones where steps 1 through 3 got real time and attention before any demo ever started.</p>
<p>A well-planned bathroom remodel is mostly won or lost before the first wall comes down.</p>
`;

module.exports = { body };
