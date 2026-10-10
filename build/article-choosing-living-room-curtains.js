// Body content for "How to Choose the Right Curtains for a Living
// Room". Guide format, matching the source's 8-step process plus
// intro. New topic — a general selection-process guide (fabric,
// color, measuring, hardware, budget, maintenance, layering), distinct
// from the existing kitchen-window-treatment-ideas (different room)
// and the farmhouse-specific curtain-styles source still in the
// backlog. Steps 1, 4, 5 and 7 (vibe, measuring, hardware,
// maintenance) had no source photo, kept text-only. Source photos
// have no Pinterest links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "choosing-living-room-curtains", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Curtains get treated as an afterthought more than almost any other living room decision.</p>
<p>They shouldn't be &mdash; the right ones genuinely elevate a room, hiding imperfect window trim and finishing the space in a way few other single purchases can.</p>
<p>This walks through the actual decision process, step by step.</p>
${photo("hero.jpg", "Elegant living room curtains enhancing natural light and style", 1024, 871)}

<h2>Why Curtains Matter More Than Expected</h2>
<p>A living room's windows are often its largest visual feature, which means whatever frames them has an outsized effect on the room's overall feel.</p>
<p>Curtains also do real functional work &mdash; privacy, light control, insulation &mdash; that goes beyond pure decoration.</p>
${photo("why-matters.jpg", "Living room windows framed beautifully by the right curtains", 1024, 1010)}

<h2>Step 1: Figure Out the Room's Vibe</h2>
<p>A formal, structured living room calls for a different curtain style than a relaxed, casual one &mdash; crisp pleats versus loose, flowing panels, for instance.</p>
<p>Deciding on the room's overall feel before shopping narrows the options considerably and avoids a mismatched impulse purchase.</p>

<h2>Step 2: Choose the Fabric Deliberately</h2>
<p>A heavier fabric like velvet or linen blend blocks more light and adds real warmth; a sheer or light cotton lets more light through and feels airier.</p>
<p>Fabric weight also affects how the curtains hang and move, which matters more to the room's overall feel than color alone.</p>
${photo("fabric.jpg", "Rich curtain fabric adding texture and warmth to a living room", 1024, 1024)}

<h2>Step 3: Play With Color and Pattern</h2>
<p>A curtain color that matches the wall creates a seamless, larger-feeling room; a contrasting color makes more of a statement.</p>
<p>A pattern works best when nothing else in the room is competing with it &mdash; a patterned curtain against an already busy room reads as cluttered rather than intentional.</p>
${photo("color-pattern.jpg", "Curtains in a thoughtfully chosen color and pattern", 1024, 784)}

<h2>Step 4: Measure Properly</h2>
<p>Curtains hung too short or too narrow are one of the most common and most noticeable styling mistakes in a living room.</p>
<p>Mounting the rod higher and wider than the window frame itself, rather than exactly at its edges, makes both the window and the room read as larger.</p>

<h2>Step 5: Don't Overlook the Hardware</h2>
<p>The curtain rod and finials are a visible design element in their own right, not just a functional afterthought.</p>
<p>A rod finish that matches the room's other metal tones &mdash; light fixtures, hardware elsewhere &mdash; ties the whole look together more than people expect.</p>

<h2>Step 6: Set a Budget Without Cutting Corners</h2>
<p>Spending more on fabric quality and construction matters more than spending more on brand name or designer labels.</p>
<p>A few well-made panels in the right fabric outperform a larger quantity of cheaper ones that hang stiffly or fade quickly.</p>
${photo("budget.jpg", "Quality curtains offering good value without compromising style", 1024, 854)}

<h2>Step 7: Think About Maintenance</h2>
<p>A machine-washable fabric saves real effort over one requiring dry cleaning or careful ironing.</p>
<p>This is worth factoring in before falling in love with a fabric that turns out to be high-maintenance in daily life.</p>

<h2>Step 8: Layer for Style and Function</h2>
<p>Pairing a sheer panel underneath a heavier curtain gives control over both privacy and light without sacrificing either one.</p>
<p>This layered approach also adds visual depth that a single curtain panel alone can't provide.</p>
${photo("layering.jpg", "Layered curtains combining sheer and heavier panels for versatility", 768, 1024)}

<h2>Final Thoughts</h2>
<p>None of these 8 steps require getting everything perfect on the first try.</p>
<p>Start with the room's vibe and the fabric weight, since both shape every decision that follows, then work through color, measuring and hardware from there.</p>
<p>The right curtains are one of the highest-impact, most overlooked upgrades a living room can get.</p>
`;

module.exports = { body };
