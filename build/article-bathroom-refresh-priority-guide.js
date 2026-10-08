// Body content for "Bathroom Refresh Priorities: What to Do First,
// Save For, and Skip". Numbered idea-list format reorganized around
// budget/effort triage rather than a flat feature list. This source
// overlaps with FIVE existing site articles combined (accent walls,
// shelving, storage niches, greenery, and bathroom design styles/
// trends), making it the broadest duplicate found in the backlog —
// so this rewrite leans entirely into prioritization: what's a quick
// weekend win, what's worth a real splurge, and what's a bigger
// renovation call, rather than re-listing the same object vocabulary.
// Idea 1 (stone tiles) had two source photos, kept both. Two ideas
// (Smart Features, Open Shelving) had no source photo, kept text-only.
// Source photos are all AI-generated style with no Pinterest links, so
// none carry credit captions. Rewritten from scratch in the site's
// calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-refresh-priority-guide", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A bathroom refresh doesn't need to happen all at once.</p>
<p>It also doesn't need to happen in the order Pinterest suggests.</p>
<p>Some of these 20 changes cost an afternoon and almost nothing. Others are worth saving up for over months.</p>
<p>Sorting them by priority, not alphabetically, makes the whole project less overwhelming to start.</p>
${photo("hero.png", "Luxurious bathroom with plush oversized towels and elegant styling", 576, 1024)}

<h2>Quick Weekend Wins</h2>
<p>These changes take a day or two and cost relatively little, but they shift how the whole room feels immediately.</p>

<h2>1. Bring In Real Greenery</h2>
<p>A plant or two does more for a bathroom's atmosphere than almost any other single addition this cheap.</p>
<p>Humidity-tolerant varieties handle a bathroom's conditions without constant fuss.</p>
<p>This is one of the fastest ways to make a space feel more alive without touching a single fixture.</p>
<p>It's also one of the few changes on this list that costs under twenty dollars.</p>
${photo("greenery.png", "Bright bathroom filled with lush greenery and natural plants", 576, 1024)}

<h2>2. Add Luxurious Textiles</h2>
<p>Swapping thin, mismatched towels for a matching set of plush ones changes how the whole room reads at a glance.</p>
<p>A new bath mat and a few folded hand towels round out the upgrade for very little cost.</p>
<p>This is the single fastest way to make a bathroom photograph like a hotel.</p>
<p>It requires zero installation and can be done in the time it takes to order online.</p>
${photo("textiles.png", "Bathroom showcasing plush oversized towels for a luxurious feel", 576, 1024)}

<h2>3. Make It Personal</h2>
<p>A framed print, a scented candle, or one meaningful small object keeps a bathroom from feeling like a hotel showroom.</p>
<p>This costs almost nothing and takes minutes to set up.</p>
<p>It's the detail that makes the other, bigger changes on this list actually feel finished.</p>
<p>Keep it to one or two items &mdash; more starts competing with the room's other surfaces.</p>
${photo("personal-touches.png", "Cozy bathroom with framed art and scented candle personal touches", 576, 1024)}

<h2>4. Add Colorful Grout</h2>
<p>Regrouting an existing tile pattern in a bold color turns a plain surface into a deliberate design choice.</p>
<p>This is a weekend DIY project for anyone comfortable with basic tile work, or a quick job for a tile pro.</p>
<p>It's a far smaller investment than replacing the tile itself.</p>
<p>A small detail like this can carry more visual weight than people expect.</p>
${photo("colorful-grout.png", "Playful bathroom featuring white subway tile with colorful grout", 576, 1024)}

<h2>Worth a Real Splurge</h2>
<p>These cost more and take more planning, but they're the changes that actually transform how the bathroom functions day to day.</p>

<h2>5. A Freestanding Tub</h2>
<p>A freestanding tub becomes the room's clear visual anchor the moment it's installed.</p>
<p>It requires more plumbing planning than most changes on this list, since placement affects the whole layout.</p>
<p>This is a genuine investment, both in cost and in the renovation itself.</p>
<p>For anyone who actually soaks regularly, it's also one of the few purely functional upgrades here too.</p>
${photo("freestanding-tub.png", "Luxurious bathroom setting with a stunning freestanding tub", 576, 1024)}

<h2>6. Statement Lighting</h2>
<p>A chandelier or sculptural fixture in a bathroom reads as unexpected in the best way.</p>
<p>This needs an electrician for anything beyond a simple swap, which bumps up both cost and timeline.</p>
<p>Paired with a dimmer, it also solves the harsh-overhead-light problem most bathrooms have.</p>
<p>It's a splurge that gets noticed by literally every guest who uses the room.</p>
${photo("lighting.png", "Glamorous bathroom with a crystal chandelier lighting fixture", 576, 1024)}

<h2>7. Double Vanities</h2>
<p>For a shared bathroom, double vanities solve the daily competition for sink space.</p>
<p>This requires real plumbing work and more square footage than a single vanity needs.</p>
<p>It's less about style and more about function &mdash; mornings run smoother with two sinks instead of one.</p>
<p>Worth prioritizing for anyone sharing the bathroom daily with another adult.</p>
${photo("double-vanities.png", "Stunning luxurious bathroom with double vanity setup", 576, 1024)}

<h2>8. Floor-to-Ceiling Tile</h2>
<p>Running tile the full height of the wall gives a bathroom a genuinely high-end, cohesive look.</p>
<p>This is a bigger material and labor cost than tiling just a shower surround.</p>
<p>It pays off in durability too &mdash; less exposed drywall means less long-term moisture damage.</p>
<p>Best saved for a full renovation rather than a quick refresh.</p>
${photo("floor-ceiling-tiles.png", "Dramatic bathroom with glossy floor-to-ceiling tile for a luxe look", 576, 1024)}

<h2>Mid-Range Projects Worth Planning For</h2>
<p>These sit between a weekend project and a full renovation &mdash; real improvements that take a bit more planning but don't require gutting the room.</p>

<h2>9. Natural Stone Tile</h2>
<p>Stone brings texture and a sense of permanence that ceramic tile can't quite match.</p>
<p>It costs more than standard tile and needs periodic sealing to hold up over time.</p>
<p>This suits anyone planning to stay in the home long enough to get the value back.</p>
<p>It pairs especially well with the natural materials idea elsewhere on this list.</p>
${photo("stone-tiles-1.png", "Luxurious shower with natural stone tile and glass enclosure", 576, 1024)}
${photo("stone-tiles-2.png", "Natural stone tile shower with elegant glass enclosure detail", 576, 1024)}

<h2>10. Bold Patterned Tile</h2>
<p>A Moroccan-style or graphic patterned tile adds personality a plain tile can't.</p>
<p>This works well as an accent &mdash; a shower floor, a backsplash &mdash; without needing to cover the whole room.</p>
<p>Keeping the rest of the room simpler lets the pattern actually stand out.</p>
<p>It's a mid-range cost that delivers a high-impact look.</p>
${photo("bold-tiles.png", "Bathroom featuring bold Moroccan-style patterned tile", 576, 1024)}

<h2>11. A Floating Vanity</h2>
<p>A floating vanity opens up the floor and makes a bathroom feel noticeably larger.</p>
<p>It requires wall-mounted plumbing, which is more involved than a standard vanity swap.</p>
<p>This suits a smaller bathroom especially well, where visual floor space matters more.</p>
<p>It reads as modern without needing anything else in the room to change.</p>
${photo("floating-vanity.png", "Sleek and contemporary bathroom design with floating vanity", 576, 1024)}

<h2>12. Bring the Outdoors In</h2>
<p>Natural wood, stone accents and larger plantings go beyond a quick greenery add &mdash; this is a more deliberate material choice throughout the room.</p>
<p>It usually means swapping a vanity material or adding wood shelving, not just a potted plant.</p>
<p>This suits anyone wanting a spa-like feel rather than a purely decorative one.</p>
<p>It's a mid-range project that touches more of the room than a single accent would.</p>
${photo("nature-inside.png", "Serene bathroom with a wooden vanity bringing nature inside", 576, 1024)}

<h2>13. An Accent Wall</h2>
<p>A bold color or wallpaper on just one wall adds drama without repainting the whole room.</p>
<p>This is a weekend project for paint, or a bit more involved for wallpaper installation.</p>
<p>Keeping the other walls neutral lets the accent wall actually read as a statement.</p>
<p>It's one of the better cost-to-impact ratios on this entire list.</p>
${photo("accent-wall.png", "Bathroom with a bold navy blue accent wall", 576, 1024)}

<h2>14. A Frameless Mirror</h2>
<p>Swapping a framed mirror for a frameless one gives a bathroom an instantly more modern, streamlined look.</p>
<p>This is a straightforward swap for most standard mirror sizes.</p>
<p>It pairs especially well with a floating vanity, continuing that same clean-line look.</p>
<p>A relatively small cost for a noticeable visual upgrade.</p>
${photo("frameless-mirror.png", "Stunning contemporary bathroom design with a frameless mirror", 576, 1024)}

<h2>15. A Minimalist Reset</h2>
<p>Paring back to clean lines and a restrained palette isn't always about buying new things &mdash; sometimes it's about removing what's already there.</p>
<p>This can be the cheapest project on the whole list if it's mostly editing rather than purchasing.</p>
<p>It suits anyone who wants the room to feel calm rather than styled.</p>
<p>Pairs well as a baseline before adding any of the splurge items above.</p>
${photo("minimalist.png", "Minimalist bathroom with clean white walls and simple styling", 576, 1024)}

<h2>16. Built-In Niches</h2>
<p>A niche built into the shower wall solves the shampoo-bottle clutter problem permanently.</p>
<p>This requires opening up the wall, so it's best planned alongside a shower renovation rather than as a standalone project.</p>
<p>It's a functional upgrade first, aesthetic second.</p>
<p>Worth prioritizing for anyone already planning shower work for other reasons.</p>
${photo("built-in-niches.png", "Shower with built-in niches for organized storage", 576, 1024)}

<h2>17. Black Accents</h2>
<p>Matte black fixtures &mdash; faucet, hardware, light fixtures &mdash; add contrast against lighter walls and tile.</p>
<p>This can be done piece by piece rather than all at once, spreading the cost out.</p>
<p>Consistency across fixtures matters more than doing it all in a single weekend.</p>
<p>A flexible mid-range project that works with almost any existing color scheme.</p>
${photo("black-accents.png", "Modern bathroom with matte black fixtures and bold accents", 576, 1024)}

<h2>18. Smart Features</h2>
<p>A heated towel rack, a smart mirror with built-in lighting, or a smart shower system all add real daily convenience.</p>
<p>These range widely in cost and complexity, so it's worth picking one feature rather than all of them at once.</p>
<p>This suits anyone prioritizing function and daily comfort over pure aesthetics.</p>
<p>Often the best return on investment comes from whichever feature solves an actual daily annoyance.</p>

<h2>19. Open Shelving</h2>
<p>Open shelves add storage and a spot to display a few styled objects, without the cost of built-in cabinetry.</p>
<p>This is a relatively quick install for most standard wall types.</p>
<p>Keeping what's displayed intentional matters more here than on a closed shelf, since everything stays visible.</p>
<p>A flexible, mid-cost option between a full vanity overhaul and doing nothing at all.</p>

<h2>20. Vintage Finds</h2>
<p>A secondhand mirror, light fixture, or small cabinet brings character a new purchase can't replicate.</p>
<p>This is often the cheapest way to add a one-of-a-kind piece to the room.</p>
<p>It takes more hunting than a straightforward purchase, but the payoff is a piece nobody else has.</p>
<p>Works well layered in among any of the other, newer changes on this list.</p>
${photo("vintage-finds.png", "Stunning bathroom blending vintage and modern design elements", 576, 1024)}

<h2>Final Thoughts</h2>
<p>None of these 20 changes need to happen in the same month, let alone the same weekend.</p>
<p>Start with the quick wins, save toward the splurges, and let the mid-range projects fill in as time and budget allow.</p>
<p>A bathroom built up this way over several months usually ends up more cohesive than one rushed all at once.</p>
<p>Pick one from each tier and start there.</p>
`;

module.exports = { body };
