// Body content for "How to Design a Garden That Actually Peaks in
// Fall". Guide format, condensed from a 16-section source (the
// closing checklist folded into final thoughts). New seasonal topic,
// no existing site overlap. Several sections (decor, mulch/compost,
// watering, wildlife) had no source photo, kept text-only. Source
// photos have no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-garden-design-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Most gardens are planned around spring and summer, then left to fade quietly through fall.</p>
<p>A garden can just as easily peak in autumn &mdash; it just requires planning for it specifically, rather than treating fall as an afterthought.</p>
<p>This covers what that actually takes.</p>
${photo("hero.png", "Beautiful suburban garden showcasing stunning fall colors", 1312, 736)}

<h2>Why Bother With a Fall Garden at All</h2>
<p>A garden that only looks good for a few months of the year is working at half its potential, especially in a climate where fall stretches on for weeks.</p>
<p>Fall color &mdash; deep reds, oranges, golds &mdash; also tends to be more dramatic and saturated than typical spring pastels, given the right plant choices.</p>
${photo("intro.png", "Vibrant fall garden design with rich seasonal colors", 574, 1024)}
${photo("why-bother.png", "Stunning fall garden proving autumn deserves real design attention", 574, 1024)}

<h2>Plan Before Planting Anything</h2>
<p>Mapping out which beds get morning versus afternoon sun, and noting what's already blooming when, prevents a fall garden plan from working against the existing layout.</p>
<p>This step is easy to skip in the excitement of plant shopping, but it's what keeps the eventual garden from looking scattered.</p>
${photo("plan-first.png", "Careful garden planning laying the groundwork for fall success", 574, 1024)}

<h2>Choose Plants for Real Fall Drama</h2>
<p>Mums, asters, ornamental grasses and sedum all deliver genuine color and texture specifically in fall, rather than just hanging on from summer.</p>
<p>Layering bloom times across different plant varieties keeps color going longer than relying on just one or two fall-specific species.</p>
${photo("drama-plants-1.png", "Dramatic fall blooms adding vibrant color to the garden", 574, 1024)}
${photo("drama-plants-2.png", "Colorful fall plants creating a striking seasonal display", 574, 1024)}

<h2>Add Trees and Shrubs for Big Color</h2>
<p>A single well-placed tree with strong fall foliage &mdash; maple, dogwood, certain oaks &mdash; can single-handedly define a garden's whole fall character.</p>
<p>Shrubs with colorful fall leaves or berries extend that same drama down to eye level, filling the gap between tree canopy and ground-level plants.</p>
${photo("trees-shrubs.png", "Trees and shrubs bringing bold fall color to the landscape", 574, 1024)}

<h2>Don't Overlook Fall Vegetables and Herbs</h2>
<p>Kale, Swiss chard and many herbs actually thrive in cooler fall temperatures, adding both visual texture and genuine function to the garden.</p>
<p>This is a practical way to keep a vegetable garden productive well past when summer crops would have finished.</p>
${photo("veggies-herbs.png", "Fall vegetables and herbs thriving in cooler autumn temperatures", 574, 1024)}

<h2>Layer In Decor Without Overdoing It</h2>
<p>A few pumpkins, a simple wreath on a garden gate, or a tasteful scarecrow add seasonal character without tipping into a seasonal gift shop.</p>
<p>Restraint matters here more than in almost any other part of the fall garden &mdash; the plants should still be doing most of the visual work.</p>

<h2>Mulch and Compost Properly</h2>
<p>A fresh layer of mulch protects root systems heading into colder weather while also giving garden beds a tidier, more finished look.</p>
<p>Fall is also the ideal time to add compost, since it has the whole winter to break down before spring planting begins.</p>

<h2>Keep Things Blooming Late</h2>
<p>Choosing plant varieties specifically known for late-season blooms extends the garden's color further into fall than most default plant choices would.</p>
<p>This takes a bit more research at the plant-buying stage, but it's what separates a garden that fades in September from one still blooming in November.</p>
${photo("keep-blooming.png", "Late-blooming flowers extending color deep into the fall season", 574, 1024)}

<h2>Add Structure With Hardscaping</h2>
<p>A defined path, a low stone border, or a simple structural element gives the garden a backbone that holds up even as plants die back for winter.</p>
<p>This matters more in fall and winter than any other season, since hardscaping is often what keeps the garden from looking bare once the plants recede.</p>
${photo("hardscaping.png", "Hardscaping adding structure and paths to the fall garden", 574, 1024)}

<h2>Water Smart, Not on Autopilot</h2>
<p>Fall rainfall varies more than people assume, and newly planted fall perennials still need consistent watering to establish properly before winter.</p>
<p>Checking soil moisture directly, rather than assuming fall weather handles it, protects the season's plantings through their most vulnerable early weeks.</p>

<h2>Attract Fall Wildlife</h2>
<p>Berries, seed heads left standing, and a simple water source all bring birds and pollinators into the garden well into the season.</p>
<p>This adds a layer of life and movement to the garden that plants alone, however colorful, can't provide on their own.</p>

<h2>Fall Gardens Deserve the Spotlight</h2>
<p>None of these steps require redoing an existing garden from scratch.</p>
<p>Start with plant choice and a bit of planning, since both have the biggest effect on whether fall actually becomes the garden's best season.</p>
<p>A garden built for fall rewards the effort with color that lasts long after most gardens have already gone quiet.</p>
`;

module.exports = { body };
