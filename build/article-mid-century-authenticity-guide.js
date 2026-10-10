// Body content for "How to Spot Genuine Mid-Century Design (and Avoid
// Getting Duped)". Guide format, heavily condensed from the longest
// and most redundant of five mid-century sources this session (21 h2
// + 65 h3). Fifth and last — distinct from the trends, value,
// makeover-process and budget articles already published. This one
// is built entirely around the source's "How to Identify True Mid
// Century Furniture" and "Authenticity Over Perfection" sections,
// deliberately skipping color palette, lighting, layout, fabric and
// generic decor-element content that the other four articles already
// cover in depth. No Pinterest pins in source, so no photo credits.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "mid-century-authenticity-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Mid-century is one of the most imitated styles in home design, which also makes it one of the easiest to get wrong without realizing it.</p>
<p>A lot of what's sold as "mid-century" today misses the actual design logic behind the style entirely.</p>
<p>This is about telling the real thing from the imitation, and why that distinction actually matters.</p>
${photo("hero.jpg", "Authentic mid-century living room with genuine design character", 1600, 1067)}

<h2>Why the Style Keeps Getting Imitated</h2>
<p>Mid-century's combination of warmth and clean geometry is genuinely difficult to fake convincingly, which is exactly why so many imitations end up feeling slightly off without buyers knowing why.</p>
<p>Understanding what makes it work is the first step to recognizing when a piece or a room misses that mark.</p>
${photo("why-obsessed.jpg", "The genuine appeal that makes mid-century design so widely copied", 1024, 576)}

<h2>What Actually Defines the Style</h2>
<p>Function-first design, organic curves paired with clean lines, and an honest use of materials are the real principles &mdash; not just a general "retro" look.</p>
<p>A piece can look vaguely vintage and still completely miss these underlying principles, which is the core of why so much "mid-century" furniture isn't really.</p>
${photo("what-defines.jpg", "True mid-century principles of function and honest materials", 1024, 683)}
${photo("key-principles.jpg", "The key design principles underlying authentic mid-century style", 1024, 600)}

<h2>Why It Still Fits Modern Homes</h2>
<p>The style's inherent minimalism complements modern architecture without feeling sparse, and its emphasis on genuine materials gives it a "lived-in" quality mass-produced furniture rarely achieves.</p>
<p>This is also why it mixes so easily with other styles &mdash; its fundamentals are strong enough to anchor a room without needing to dominate it.</p>
${photo("fits-modern-homes.jpg", "Mid-century design complementing contemporary architecture", 683, 1024)}

<h2>How to Identify the Real Thing</h2>
<p>Checking the legs is the fastest tell &mdash; genuine mid-century furniture uses tapered, often angled legs with real structural purpose, not just a vaguely similar shape applied to a generic frame.</p>
<p>Real materials matter just as much: solid wood, genuine leather or wool, and honest joinery distinguish authentic pieces from veneer-over-particleboard imitations.</p>
<p>Simplicity itself is a tell &mdash; genuinely mid-century pieces rarely over-ornament, so an elaborately detailed "mid-century" piece is usually a sign it isn't.</p>
${photo("identify-true-furniture.jpg", "Genuine mid-century furniture identified by legs, materials and simplicity", 768, 1024)}

<h2>Designer Names Worth Knowing</h2>
<p>Familiarity with a handful of the era's actual designers helps separate genuine vintage and licensed reproductions from pieces borrowing the aesthetic without any real connection to the design lineage.</p>
<p>This knowledge matters more when buying secondhand or vintage specifically, where the gap between genuine and imitation has real financial stakes, not just aesthetic ones.</p>

<h2>The "Updated Retro" Approach</h2>
<p>Choosing a genuine statement mid-century piece and layering modern comfort and materials around it keeps a room feeling authentic rather than like a period recreation.</p>
<p>This blend &mdash; old materials with new comfort standards, vintage shapes with contemporary technology kept subtle &mdash; is itself a form of authenticity, not a compromise of it.</p>
${photo("updated-retro.jpg", "An updated retro approach blending authentic pieces with modern comfort", 1024, 729)}

<h2>Insider Secrets About Getting It Right</h2>
<p>Balance matters more than matching &mdash; a room where everything matches too precisely often reads as less authentic than one with genuine variation.</p>
<p>Vintage doesn't mean old-fashioned, and conflating the two is a common reason people avoid a style that would actually suit their home.</p>
<p>Authenticity over perfection is the single most repeated principle among people who've actually lived with this style for years, not just styled it for a photo.</p>

<h2>Personalizing Without Losing the Core</h2>
<p>A modern twist, personal art or meaningful objects, and a deliberate mix of vintage finds with new favorites keep the room feeling like it belongs to someone specific.</p>
<p>This personalization is what separates a genuinely lived-in mid-century room from one that reads as a showroom recreation of the era.</p>
${photo("personalizing.jpg", "Personal touches keeping an authentic mid-century room feeling genuine", 1024, 683)}

<h2>Mistakes That Break the Authenticity</h2>
<p>Overdoing the "retro" vibe with too many literal era references is the most common way a room tips from authentic into costume-like.</p>
<p>Too many competing wood tones, furniture scaled wrong for the room, and ignoring comfort for the sake of silhouette all undercut the style's real, lived-in character.</p>

<h2>Finishing Touches That Respect the Style</h2>
<p>A touch of warm brass or gold, texture introduced on the walls, and symmetry applied with a deliberate twist all finish a room without tipping it into over-styled territory.</p>
<p>These small choices are where genuine attention to the style's real character shows up most clearly.</p>
${photo("finishing-touches.jpg", "Finishing touches that respect mid-century's authentic character", 683, 1024)}

<h2>Your Mid-Century Living Room, Your Way</h2>
<p>None of this is about gatekeeping the style or requiring an all-vintage room.</p>
<p>Understanding what actually makes a piece or a room genuinely mid-century &mdash; not just vaguely retro &mdash; is what lets personal taste and real authenticity coexist.</p>
<p>The style rewards getting the fundamentals right more than it rewards any single statement purchase.</p>
`;

module.exports = { body };
