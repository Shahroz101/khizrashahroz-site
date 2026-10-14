// Body content for "16 Laundry Room Ideas Built Around Your Actual
// Routine". Numbered idea-list format. Source only had a hero photo —
// no per-idea photos at all — so this follows that exactly; nothing
// dropped, nothing invented. Topic overlaps with the existing
// laundry-room article (zones, vertical storage, cabinets, baskets),
// so this is framed around the routine/workflow angle instead — task
// lighting, paint color, utility sink, hidden supplies, labels,
// pegboard, flooring and personalizing get the emphasis, matching how
// the source itself leaned into "design for your routine, not someone
// else's." Rewritten out of the source's chatty, rhetorical-question
// voice into the site's calmer tone, with short, punchy lines.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CHJQ1XK7", title: "Artfeel Woven Cotton Rope Laundry Basket, 60L, with Tassel Handles", w: 1500, h: 1500 },
    { asin: "B0GWD8G945", title: "ThreeHio Expandable Over-Washer and Dryer Laundry Room Shelves with Hanging Rod, 2 Pack", w: 1287, h: 1500 },
  ],
  idea1: [
    { asin: "B07X4F6R3T", title: "STORAGE MANIAC 3 Section Laundry Sorter with Wheels, Gray", w: 1500, h: 1334 },
    { asin: "B0B7JGC67R", title: "Lifewit 80L Large Laundry Baskets, 2 Pack, Grey Striped, with Handles", w: 1500, h: 1434 },
  ],
  idea2: [
    { asin: "B0D12P57GC", title: "OKZEST Slim Laundry Room Organization Cart with Metal Hub Casters", w: 1190, h: 1500 },
    { asin: "B08PVYFDCK", title: "Honey-Can-Do 6-Tier Collapsible Steel Clothes Drying Rack, 24 Ft, White", w: 987, h: 1500 },
  ],
  idea3: [
    { asin: "B0FBRPPT5L", title: "Wireless Under Cabinet Lighting, 10 Inch, Motion Sensor, 3 Pack", w: 1139, h: 1500 },
    { asin: "B0D9YCRC52", title: "Nekhung Battery Operated Peel and Stick Wall Sconces, Set of 2", w: 1500, h: 1500 },
  ],
  idea4: [
    { asin: "B0B5LZXLWM", title: "Glidden Total Interior Wall Paint and Primer, Light Sage Green, Semi-Gloss", w: 1500, h: 1473 },
    { asin: "B07BDTT3FB", title: "Glidden Interior Paint and Primer, Gray Thin Ice, One Coat, Eggshell, 1 Quart", w: 1500, h: 1472 },
  ],
  idea5: [
    { asin: "B0HFZH7FXT", title: "5-Tier Corner Shelf, Wall Mounted, White, for Display and Storage", w: 337, h: 1254 },
    { asin: "B0D3GFK5FB", title: "SoBuy Large 3-Door Wall Cabinet, 23.6 x 11.8 x 35.4 Inch, White", w: 1135, h: 779 },
  ],
  idea6: [
    { asin: "B09L7TZ2N1", title: "CONSDAN Butcher Block Countertop, Walnut Solid Hardwood Slab", w: 1500, h: 1500 },
    { asin: "B09WZVZH7Y", title: "WESTICK Wood Grain Peel and Stick Countertop Contact Paper, Waterproof, Brown", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B07S2ZG4XL", title: "Spirich Wall Cabinet with Beadboard Doors, White, Medicine Cabinet Style", w: 1332, h: 1500 },
    { asin: "B0GF9VJF4J", title: "Laundry Room Wall Cabinet with Adjustable Shelf and 2 Doors", w: 1500, h: 1491 },
  ],
  idea8: [
    { asin: "B00V9FN8LI", title: "STORAGE MANIAC Hanging Closet Rod, Adjustable Width and Height, Space-Saving Organizer", w: 1500, h: 1446 },
    { asin: "B0FG2MFDQZ", title: "Spring Tension Curtain Rod, 32 to 76 Inch, White", w: 1500, h: 1292 },
  ],
  idea9: [
    { asin: "B0B24YCPQJ", title: "Wire Storage Baskets for Organizing, 8 Pack, with Removable Tags", w: 1399, h: 1500 },
    { asin: "B0B5DG84S6", title: "Full Circle Fold and Go Collapsible Laundry Bag", w: 979, h: 1302 },
  ],
  idea10: [
    { asin: "B0D3LL3VFX", title: "Seinloes Expandable Pull-Out Cabinet Organizer, 2 Pack, 21 Inch Deep", w: 1500, h: 1500 },
    { asin: "B09F6JH7PG", title: "SPACELEAD Slim Rolling Storage Cart, 4 Tier, Slide-Out Utility Organizer", w: 1500, h: 1499 },
  ],
  idea11: [
    { asin: "B0CRP6G629", title: "VINGLI 20-Gallon Freestanding Utility Sink Laundry Tub", w: 1145, h: 1487 },
    { asin: "B000HE8PTM", title: "Mustee 16K Wall Mount Laundry Sink", w: 1500, h: 1179 },
  ],
  idea12: [
    { asin: "B0GZVDK9MH", title: "NORTHSKY 55 Inch Wooden Broom Closet and Vacuum Cleaner Storage Cabinet", w: 1500, h: 1500 },
    { asin: "B09V4R1G3Q", title: "Letaya Tall Metal Storage Cabinet with Lock Doors, Adjustable Shelves, Steel", w: 1150, h: 1500 },
  ],
  idea13: [
    { asin: "B09QXZ7ZRD", title: "Brother P-Touch PTD210 Easy-to-Use Label Maker Bundle with 4 Label Tapes", w: 1196, h: 1347 },
    { asin: "B0CF4TYXGC", title: "Chalkboard Labels for Containers, 200 Pcs, Removable, with Chalk Marker", w: 1499, h: 1500 },
  ],
  idea14: [
    { asin: "B0DNZFH9CP", title: "Spampur Metal Pegboard Panels, 8 Pack, with 50 Hooks, Black", w: 1365, h: 1500 },
    { asin: "B07NSR15ZL", title: "Colorstorm Pegboard J Hook Assortment, 100 Pack, Black", w: 1475, h: 1465 },
  ],
  idea15: [
    { asin: "B0DJVHQC91", title: "NAACOO 4-in-1 Laminate Flooring Installation Kit, Universal Tools", w: 1500, h: 1500 },
    { asin: "B07RP4GRDH", title: "Nexus Self-Adhesive Vinyl Floor Tiles, 12 x 12 Inch, 20 Tiles", w: 1500, h: 1500 },
  ],
  idea16: [
    { asin: "B0G6YV5GSN", title: "Framed Colorful Floral Wall Art Set of 3, Abstract Scandinavian Flower Canvas", w: 1500, h: 880 },
    { asin: "B0DWZ81W7H", title: "D'vine Dev 4.7 Inch Ceramic Planter Pot with Saucer, Olive", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "laundry-room-routine-workflow-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "laundry-room-routine-workflow", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Nobody dreams about their laundry room.</p>
<p>But a laundry room that works quietly fixes a surprising amount of weekly stress.</p>
<p>A bad layout turns a five-minute task into a twenty-minute mess.</p>
<p>A good one disappears into the background, the way it should.</p>
${photo("hero.jpg", "Bright laundry room with a front-load washer, woven baskets and open shelving", 1600, 1067, "hero")}

<h2>1. Build Around Your Actual Routine First</h2>
<p>This is the idea that should come before all the others.</p>
<p>Do clothes get folded right away, or later?</p>
<p>Do kids help with laundry, or is it a solo job?</p>
<p>Is air-drying a regular habit, or rare?</p>
<p>The answers should drive every choice that follows &mdash; not a trend, not what looks good in a photo.</p>
${productGrid("idea1")}

<h2>2. Create Zones That Match How the Room Gets Used</h2>
<p>Zoning sounds basic. It changes everything anyway.</p>
<p>A washing zone near the machines.</p>
<p>A drying zone above or beside the dryer.</p>
<p>A folding zone with a flat surface.</p>
<p>A storage zone for supplies.</p>
<p>Keep each one visually distinct and the whole routine starts running on autopilot.</p>
${productGrid("idea2")}

<h2>3. Add Task Lighting Where the Work Actually Happens</h2>
<p>Poor lighting undercuts even a well-organized room.</p>
<p>LED strips under cabinets light up the counter exactly where it's needed.</p>
<p>A wall sconce near the folding area does the same for that task.</p>
<p>Warm light works better than harsh overhead light &mdash; clear enough to see, not clinical.</p>
${productGrid("idea3")}

<h2>4. Pick a Paint Color That Sets the Mood</h2>
<p>White isn't the only option here.</p>
<p>A soft greige brings warmth without going bold.</p>
<p>A pale blue leans calm.</p>
<p>A sage green feels fresh and a little more alive.</p>
<p>Color does more for the emotional tone of this room than any shelf or basket ever could.</p>
${productGrid("idea4")}

<h2>5. Use Vertical Storage Instead of Wasting Wall Space</h2>
<p>Most laundry rooms leave the upper walls empty.</p>
<p>Shelves that run to the ceiling store bulk detergent and seasonal items out of daily reach.</p>
<p>Mixing open shelves with closed cabinets keeps daily items visible and everything else hidden.</p>
<p>That balance keeps the room functional without feeling cluttered.</p>
${productGrid("idea5")}

<h2>6. Add a Countertop Built for Folding</h2>
<p>A countertop changes the entire folding habit.</p>
<p>Clothes stop piling on top of the machines.</p>
<p>Wrinkles get avoided instead of ironed out later.</p>
<p>Laminate keeps it budget-friendly. Wood adds warmth. Quartz wipes clean in seconds.</p>
<p>Function first, style second &mdash; the right material follows from how the counter actually gets used.</p>
${productGrid("idea6")}

<h2>7. Choose Cabinets That Match Real Habits</h2>
<p>Cabinet depth matters more than most people assume.</p>
<p>Deep cabinets store bulk jugs and backup supplies out of sight.</p>
<p>Shallow cabinets hold the daily essentials &mdash; stain remover, lint rollers, clothespins &mdash; grabbed without thinking.</p>
<p>Storage that mirrors actual habits beats storage that just looks tidy.</p>
${productGrid("idea7")}

<h2>8. Install a Hanging Rod for Air-Dry Items</h2>
<p>A small addition with an outsized payoff.</p>
<p>Delicate fabrics get protected without an extra step.</p>
<p>Wrinkles get avoided before they start.</p>
<p>A rod above the counter or between cabinets works well. Even a tension rod in a rental does the job.</p>
${productGrid("idea8")}

<h2>9. Choose Baskets That Actually Serve a Purpose</h2>
<p>A basket that looks pretty but doesn't match the routine isn't pulling its weight.</p>
<p>Labeled baskets for lights, darks and towels turn sorting into a non-event.</p>
<p>Wire baskets hold up longest.</p>
<p>Canvas folds away when not needed.</p>
<p>Plastic tends to crack over time &mdash; worth skipping for anything long-term.</p>
${productGrid("idea9")}

<h2>10. Install Pull-Out Storage for Tight Spots</h2>
<p>Pull-outs sound like a luxury upgrade. They solve a real space problem.</p>
<p>Between the washer and the wall is prime pull-out territory.</p>
<p>Under the countertop works just as well.</p>
<p>Inside a tall cabinet turns dead vertical space into something usable.</p>
<p>Supplies stay accessible without adding visual clutter.</p>
${productGrid("idea10")}

<h2>11. Add a Utility Sink If the Space Allows</h2>
<p>A utility sink feels old-fashioned until the first time it's genuinely needed.</p>
<p>Hand-washing delicates gets easier.</p>
<p>Paint brushes stop ending up in the kitchen sink.</p>
<p>A wall-mounted version delivers the same function without crowding a smaller room.</p>
${productGrid("idea11")}

<h2>12. Hide Cleaning Supplies Behind Closed Doors</h2>
<p>Visual noise adds stress to a room that already feels busy.</p>
<p>Cleaning sprays, extra paper towels and random tools all work better out of sight.</p>
<p>Clear surfaces have a real, if subtle, calming effect.</p>
<p>That shift alone makes the room feel less chaotic day to day.</p>
${productGrid("idea12")}

<h2>13. Label to Eliminate the Guesswork</h2>
<p>Labeling sounds like overkill until it starts saving real time.</p>
<p>Detergent containers, storage bins and baskets all benefit.</p>
<p>No more opening every cabinet to find one thing.</p>
<p>Small efficiencies like this stack up faster than expected.</p>
${productGrid("idea13")}

<h2>14. Add a Pegboard for Storage That Can Change</h2>
<p>Pegboards aren't just a trend &mdash; they solve a real flexibility problem.</p>
<p>Tools rearrange easily as needs shift, no new holes required.</p>
<p>Brushes, measuring cups and small baskets all hang well on one.</p>
<p>A system that can grow and shift with actual use beats one that's fixed from day one.</p>
${productGrid("idea14")}

<h2>15. Choose Flooring That Can Handle Real Life</h2>
<p>Water, heat and the occasional spill are a given in this room.</p>
<p>Vinyl plank holds up well and stays budget-friendly.</p>
<p>Tile resists moisture better than almost anything else.</p>
<p>Sealed concrete suits a more modern look.</p>
<p>Carpet is the one material worth ruling out entirely here.</p>
${productGrid("idea15")}

<h2>16. Add Personality Without Creating Clutter</h2>
<p>A laundry room doesn't need to feel sterile to stay functional.</p>
<p>A framed print adds character without taking up counter space.</p>
<p>A small plant does the same.</p>
<p>A patterned backsplash brings in personality through the wall instead of the surfaces.</p>
<p>Minimal but intentional beats anything that tips into visual clutter.</p>
${productGrid("idea16")}

<h2>Final Thoughts</h2>
<p>A good laundry room doesn't need to feel fancy. It needs to feel easy.</p>
<p>When shelves sit where they're actually needed and surfaces stay clear, the whole task stops draining energy.</p>
<p>Pick one idea from this list and apply it this week.</p>
<p>The difference shows up faster than expected.</p>
`;

module.exports = { body };
