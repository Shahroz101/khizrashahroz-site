// Body content for "Mid-Century Style on a Real Budget: Thrift, DIY
// and Where to Actually Spend". Guide format, condensed from a
// 17-section, 30-subsection source. Fourth of five mid-century
// sources — distinct from the trends, value and makeover-process
// articles already published. This one stays strictly in budget/
// thrift/DIY territory: where to splurge versus save, specific DIY
// projects, and sourcing strategy, rather than general style
// principles those other articles already cover. Source reused one
// photo twice; kept on first appearance only. No Pinterest pins in
// source, so no photo credits.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "mid-century-budget-thrift", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Mid-century is one of the more forgiving styles to pull off on a real budget, mostly because thrifted and secondhand pieces are so central to the look in the first place.</p>
<p>This covers specifically where to spend, where to save, and the DIY projects that close the gap between the two.</p>
${photo("hero.jpg", "Stylish mid-century living room achieved on a real budget", 1600, 1066)}

<h2>Why This Style Suits a Budget Approach</h2>
<p>Mid-century's emphasis on genuine, found pieces over a fully matched furniture set means a thrifted, gradually assembled room actually looks more authentic than one bought all at once.</p>
<p>This is one of the few styles where budget constraints push toward the more correct version of the look, not a compromised one.</p>
${photo("what-makes-timeless.jpg", "Timeless mid-century elements that work well on any budget", 1024, 600)}

<h2>Know Your Space Before Spending</h2>
<p>Measuring the room and identifying its actual constraints before any shopping happens prevents the single most expensive budget mistake &mdash; buying something that doesn't fit.</p>
<p>This step costs nothing and saves real money later.</p>

<h2>Less Is More, Especially Here</h2>
<p>A sparser room with a few genuinely good pieces beats a fully furnished one stretched thin across cheaper items, both visually and financially.</p>
<p>This restraint also happens to be authentically mid-century, which makes the budget constraint and the style's own philosophy point the same direction.</p>
${photo("less-is-more.jpg", "A sparse, considered room proving that less is genuinely more", 1024, 683)}

<h2>Mix Vintage With Affordable Modern</h2>
<p>One or two genuine vintage finds, paired with budget-friendly modern pieces that echo the same lines, capture most of the look's credibility for a fraction of an all-vintage room's cost.</p>
<p>This mixing strategy is the single most important budget principle on this entire list.</p>
${photo("vintage-modern-mix.jpg", "Vintage finds mixed with affordable modern pieces for a budget-friendly look", 1024, 576)}

<h2>Where to Spend and Where to Save</h2>
<p>Tapered legs and clean lines matter more than material cost, which means a budget piece with the right silhouette often reads better than an expensive one with the wrong shape.</p>
<p>Versatile core pieces &mdash; a sofa, a coffee table &mdash; are worth spending more on, since they anchor the whole room and get used daily, while smaller accent pieces are the safest place to save.</p>
${photo("furniture-tapered-legs.jpg", "Budget furniture with the right tapered-leg silhouette", 683, 1024)}

<h2>Pick a Palette That Doesn't Need a Repaint</h2>
<p>Starting with neutrals, then adding earthy and retro accent tones through cheaper textiles and accessories, achieves the full palette without a single wall needing to be repainted.</p>
<p>Keeping the balance between neutral and accent colors in check avoids an overwhelming room that would need correcting (and spending) later.</p>
${photo("color-palette.jpg", "A balanced mid-century palette achieved without expensive repainting", 683, 1024)}

<h2>Lighting: The Budget Secret Weapon</h2>
<p>Layered lighting and warm bulbs cost very little but do more for the room's overall feel than almost any furniture purchase.</p>
<p>Shopping smart for fixtures specifically &mdash; secondhand, off-season sales, simple DIY updates &mdash; keeps this high-impact category genuinely affordable.</p>
${photo("lighting.jpg", "Budget-friendly layered lighting transforming the room's feel", 683, 1024)}

<h2>Get the Layout Right for Free</h2>
<p>Starting with a clear focal point, keeping traffic flow open, and pulling furniture away from the walls are all genuinely free changes that significantly affect how the room feels.</p>
<p>This is one of the highest-value, zero-cost steps on this entire list.</p>
${photo("layout-focal-point.jpg", "A clear focal point organizing the room's layout at no cost", 1024, 819)}

<h2>DIY Projects Worth the Effort</h2>
<p>DIY wall art, refinishing old furniture, and building a gallery wall from existing or thrifted frames all add real designer-level flair without a significant budget line.</p>
<p>Updating light fixtures and adding a single statement wall round out the highest-payoff DIY projects for this specific style.</p>
${photo("diy-wall-art.jpg", "DIY wall art adding designer flair without a big budget", 1024, 683)}
${photo("gallery-wall.jpg", "A thrifted gallery wall bringing real character to the space", 1024, 683)}

<h2>Accessorize Without Overspending</h2>
<p>Pattern used sparingly, organic elements, a few metallic touches, and books styled as decor round out the room's final layer at minimal cost.</p>
<p>These small additions matter more for the finished feel than their low price tags would suggest.</p>

<h2>Avoiding Trendy Burnout</h2>
<p>Sticking to the style's genuine fundamentals, rather than chasing every passing micro-trend within mid-century, keeps the room from needing a refresh every year.</p>
<p>This is ultimately the best budget strategy of all &mdash; a room that doesn't need redoing saves more than any individual discount ever could.</p>

<h2>Final Thoughts</h2>
<p>None of this requires a big budget to actually work.</p>
<p>Start with layout and lighting, since both are free or nearly free, then build toward the anchor furniture pieces as budget allows.</p>
<p>Mid-century rewards patience and genuine sourcing over a single big spend &mdash; which happens to be exactly what a real budget requires anyway.</p>
`;

module.exports = { body };
