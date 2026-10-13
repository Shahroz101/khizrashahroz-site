// Body content for "How to Design a Garden That Actually Peaks in
// Fall". Guide format, condensed from a 16-section source (the
// closing checklist folded into final thoughts). New seasonal topic,
// no existing site overlap. Several sections (decor, mulch/compost,
// watering, wildlife) had no source photo, kept text-only. Source
// photos have no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0D5HKDBDN", title: "Yellow Artificial Mums for Outdoors, Fall Autumn Decoration, 6 Bundles", w: 1320, h: 1500 },
    { asin: "B0GXW7S7NX", title: "Novabright Fall Woven Wicker Basket Planters, 12 Inch, 2 Pcs, Natural", w: 1500, h: 1500 },
  ],
  why: [
    { asin: "B07FR929TW", title: "Ranunculus Pastel Mix Persian Buttercup Bulbs, 10 XL Bulbs", w: 1500, h: 1499 },
    { asin: "B0CLLB15H1", title: "VANTREE UV Resistant Artificial Tall Grass Stems, 8 Pcs", w: 1500, h: 1223 },
  ],
  plan: [
    { asin: "B0H3KDZ3GK", title: "Garden Planner and Log Book with Monthly and Weekly Checklists", w: 1010, h: 1252 },
    { asin: "B01HQXF0PS", title: "Rapitest Soil Test Kit for Gardens, Vegetables, Flowers and Lawns", w: 844, h: 1500 },
  ],
  plants: [
    { asin: "B0DDJGHPJG", title: "Major Wheeler Fragrant Honeysuckle Vine, Perennial Lonicera, 2.5 Inch Pot", w: 1500, h: 1000 },
    { asin: "B0FMXN37XD", title: "RedCrocus Autumn Joy Sedum, Autumn Stonecrop, Easy-Care Perennial", w: 1200, h: 630 },
  ],
  trees: [
    { asin: "B0HLVJVT2P", title: "Japanese Maple Live Tree, 3 to 4 ft", w: 320, h: 320 },
    { asin: "B01377WT1K", title: "Miniature Pokomoke Pink Flowering Crape Myrtle Trees, 4 Pack", w: 500, h: 333 },
  ],
  veggies: [
    { asin: "B0FS81WM2S", title: "Organic Kale Seeds, Vates Blue Scotch Curled, 500 Seeds, Non-GMO", w: 1500, h: 885 },
    { asin: "B09L578MWB", title: "Organo Republic Winter Vegetable and Greens Seeds with Carrot Seeds, Variety Pack", w: 1129, h: 1500 },
  ],
  decor: [
    { asin: "B0H1C3GB5X", title: "Wellsign 24 Inch Fall Wreath for Front Door with Metal Hanger", w: 1500, h: 1500 },
    { asin: "B0C2VGLGSL", title: "YEAHOME Metal Boy Scarecrow Garden Stakes with Pumpkin and Sunflower", w: 570, h: 1500 },
  ],
  mulch: [
    { asin: "B009O7P61S", title: "Heavy Duty Brown Paper Lawn and Refuse Bags, 30 Gallon, 10 Count", w: 776, h: 1500 },
    { asin: "B09LMR4M3P", title: "Dual Chamber Compost Tumbler Bin, 43 Gallon, with Gardening Gloves", w: 1119, h: 1103 },
  ],
  blooming: [
    { asin: "B07K37G6P6", title: "Perennial Farm Marketplace Hellebore Frostkiss Anna's Red, Lenten Rose", w: 1000, h: 1333 },
    { asin: "B0HK4WP5L6", title: "Red and White Triumph Tulip Bulbs Holiday Mixture, 20 Bulbs", w: 1500, h: 1500 },
  ],
  hardscaping: [
    { asin: "B09Z16M3R2", title: "EasyFlex No-Dig Stone-Look Landscape Edging with Anchoring Spikes", w: 1500, h: 982 },
    { asin: "B0FGF8H5RK", title: "TierraVerde Rubber Stepping Stones, Natural Rock Look, 18 x 22 Inch, 4 Pack", w: 1500, h: 1500 },
  ],
  water: [
    { asin: "B014MJ8J2U", title: "XLUX Plant Soil Moisture Meter for Indoor and Outdoor Use, Battery-Free", w: 1043, h: 1500 },
    { asin: "B073Q6PBD3", title: "INNAV8 Heavy Duty Garden Hose Nozzle Sprayer", w: 975, h: 1500 },
  ],
  wildlife: [
    { asin: "B0CZ63PY86", title: "Daoeny 35 Inch Metal Bird Bath with Birdfeeder, Vintage Freestanding", w: 1429, h: 1500 },
    { asin: "B0DK153SH2", title: "Youvip Metal Roof Bird Feeder, Chew Proof, Bronze, Hanging", w: 1334, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "fall-garden-design-guide-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "fall-garden-design-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Most gardens are planned around spring and summer, then left to fade quietly through fall.</p>
<p>A garden can just as easily peak in autumn &mdash; it just requires planning for it specifically, rather than treating fall as an afterthought.</p>
<p>This covers what that actually takes.</p>
${photo("hero.png", "Beautiful suburban garden showcasing stunning fall colors", 1312, 736, "hero")}

<h2>Why Bother With a Fall Garden at All</h2>
<p>A garden that only looks good for a few months of the year is working at half its potential, especially in a climate where fall stretches on for weeks.</p>
<p>Fall color &mdash; deep reds, oranges, golds &mdash; also tends to be more dramatic and saturated than typical spring pastels, given the right plant choices.</p>
${photo("intro.png", "Vibrant fall garden design with rich seasonal colors", 574, 1024)}
${photo("why-bother.png", "Stunning fall garden proving autumn deserves real design attention", 574, 1024, "why")}

<h2>Plan Before Planting Anything</h2>
<p>Mapping out which beds get morning versus afternoon sun, and noting what's already blooming when, prevents a fall garden plan from working against the existing layout.</p>
<p>This step is easy to skip in the excitement of plant shopping, but it's what keeps the eventual garden from looking scattered.</p>
${photo("plan-first.png", "Careful garden planning laying the groundwork for fall success", 574, 1024, "plan")}

<h2>Choose Plants for Real Fall Drama</h2>
<p>Mums, asters, ornamental grasses and sedum all deliver genuine color and texture specifically in fall, rather than just hanging on from summer.</p>
<p>Layering bloom times across different plant varieties keeps color going longer than relying on just one or two fall-specific species.</p>
${photo("drama-plants-1.png", "Dramatic fall blooms adding vibrant color to the garden", 574, 1024)}
${photo("drama-plants-2.png", "Colorful fall plants creating a striking seasonal display", 574, 1024, "plants")}

<h2>Add Trees and Shrubs for Big Color</h2>
<p>A single well-placed tree with strong fall foliage &mdash; maple, dogwood, certain oaks &mdash; can single-handedly define a garden's whole fall character.</p>
<p>Shrubs with colorful fall leaves or berries extend that same drama down to eye level, filling the gap between tree canopy and ground-level plants.</p>
${photo("trees-shrubs.png", "Trees and shrubs bringing bold fall color to the landscape", 574, 1024, "trees")}

<h2>Don't Overlook Fall Vegetables and Herbs</h2>
<p>Kale, Swiss chard and many herbs actually thrive in cooler fall temperatures, adding both visual texture and genuine function to the garden.</p>
<p>This is a practical way to keep a vegetable garden productive well past when summer crops would have finished.</p>
${photo("veggies-herbs.png", "Fall vegetables and herbs thriving in cooler autumn temperatures", 574, 1024, "veggies")}

<h2>Layer In Decor Without Overdoing It</h2>
<p>A few pumpkins, a simple wreath on a garden gate, or a tasteful scarecrow add seasonal character without tipping into a seasonal gift shop.</p>
<p>Restraint matters here more than in almost any other part of the fall garden &mdash; the plants should still be doing most of the visual work.</p>
${productGrid("decor")}

<h2>Mulch and Compost Properly</h2>
<p>A fresh layer of mulch protects root systems heading into colder weather while also giving garden beds a tidier, more finished look.</p>
<p>Fall is also the ideal time to add compost, since it has the whole winter to break down before spring planting begins.</p>
${productGrid("mulch")}

<h2>Keep Things Blooming Late</h2>
<p>Choosing plant varieties specifically known for late-season blooms extends the garden's color further into fall than most default plant choices would.</p>
<p>This takes a bit more research at the plant-buying stage, but it's what separates a garden that fades in September from one still blooming in November.</p>
${photo("keep-blooming.png", "Late-blooming flowers extending color deep into the fall season", 574, 1024, "blooming")}

<h2>Add Structure With Hardscaping</h2>
<p>A defined path, a low stone border, or a simple structural element gives the garden a backbone that holds up even as plants die back for winter.</p>
<p>This matters more in fall and winter than any other season, since hardscaping is often what keeps the garden from looking bare once the plants recede.</p>
${photo("hardscaping.png", "Hardscaping adding structure and paths to the fall garden", 574, 1024, "hardscaping")}

<h2>Water Smart, Not on Autopilot</h2>
<p>Fall rainfall varies more than people assume, and newly planted fall perennials still need consistent watering to establish properly before winter.</p>
<p>Checking soil moisture directly, rather than assuming fall weather handles it, protects the season's plantings through their most vulnerable early weeks.</p>
${productGrid("water")}

<h2>Attract Fall Wildlife</h2>
<p>Berries, seed heads left standing, and a simple water source all bring birds and pollinators into the garden well into the season.</p>
<p>This adds a layer of life and movement to the garden that plants alone, however colorful, can't provide on their own.</p>
${productGrid("wildlife")}

<h2>Fall Gardens Deserve the Spotlight</h2>
<p>None of these steps require redoing an existing garden from scratch.</p>
<p>Start with plant choice and a bit of planning, since both have the biggest effect on whether fall actually becomes the garden's best season.</p>
<p>A garden built for fall rewards the effort with color that lasts long after most gardens have already gone quiet.</p>
`;

module.exports = { body };
