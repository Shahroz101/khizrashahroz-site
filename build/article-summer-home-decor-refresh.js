// Body content for "12 Easy Ways to Refresh a Home for Summer".
// Numbered idea-list format, condensed from a 23-section source
// (why-it-matters/what-makes-summer/colors intro sections folded into
// a shorter intro; bonus-tips/mistakes/room-by-room closing sections
// folded into final thoughts). New seasonal topic — distinct from the
// existing poolside-decor-summer-vibes article, which is pool-specific
// outdoor entertaining, not a whole-home seasonal refresh. Idea 1
// (light fabrics) had no source photo, kept text-only. Nearly every
// other photo in the source had a real Pinterest pin, credited via
// pinPhoto(); the one without (texture idea's first photo) is
// uncredited.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "summer-home-decor-refresh", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "summer-home-decor-refresh", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>`;
}

const body = `
<p>A summer refresh doesn't require new furniture or a repaint.</p>
<p>Twelve smaller swaps &mdash; fabric, texture, scent, a bit of color &mdash; cover most of what actually makes a home feel like the season shifted.</p>
${photo("hero.jpg", "Bright, breezy summer home decor refreshing the space", 1400, 891)}

<h2>Choosing a Style That Fits</h2>
<p>Light, airy and a little relaxed is the common thread across most summer decor approaches, whether that leans coastal, Mediterranean, or simply brighter than the rest of the year.</p>
<p>Picking a general direction before starting keeps the smaller individual swaps feeling cohesive rather than random.</p>
${pinPhoto("choose-style.jpg", "A cohesive summer decor style guiding the whole home's refresh", 585, 1024, "https://www.pinterest.com/pin/697143217365222868/", "summer home decor style")}

<h2>1. Swap In Light Fabrics</h2>
<p>Linen, cotton and other breathable fabrics replace heavier winter textiles across pillows, throws and slipcovers for an instantly lighter feel.</p>
<p>This is one of the fastest, lowest-cost swaps on this entire list, since it touches items already in most homes.</p>

<h2>2. Refresh the Bedding</h2>
<p>A lighter duvet or a simple top-sheet-only setup, in a brighter color, changes the bedroom's whole feel for the season.</p>
<p>This also solves a genuine comfort problem, since heavier bedding becomes uncomfortable once temperatures rise.</p>
${pinPhoto("bedding.jpg", "Light, breathable bedding refreshed for the summer season", 735, 962, "https://www.pinterest.com/pin/2955556002180143/", "summer bedding refresh")}

<h2>3. Add Natural Texture</h2>
<p>Rattan, jute and woven materials bring a tactile, warm-weather quality that heavier textiles can't replicate.</p>
<p>This texture layer does a lot of the seasonal work, even without changing a single color in the room.</p>
${photo("texture-1.jpg", "Natural woven texture bringing a warm-weather feel to the home", 768, 1024)}
${pinPhoto("texture-2.jpg", "Rattan and jute textures adding tactile summer warmth", 559, 1024, "https://www.pinterest.com/pin/1032028070875939142/", "natural texture summer decor")}

<h2>4. Bring In Fresh Greenery</h2>
<p>New plants, or simply moving existing ones to more visible spots, reinforces the season's outdoor connection indoors.</p>
<p>This is one of the easiest ways to add life to a room without any real redecorating.</p>
${pinPhoto("greenery-1.jpg", "Fresh greenery bringing the outdoors into a summer-ready home", 574, 1024, "https://www.pinterest.com/pin/1144969905282942208/", "summer greenery decor")}
${pinPhoto("greenery-2.jpg", "Vibrant plants adding life to a bright summer space", 683, 1024, "https://www.pinterest.com/pin/1099441327839365796/", "fresh plants for summer")}

<h2>5. Hang Sheer Curtains</h2>
<p>Lightweight, breezy curtains let in more natural light and air than heavier drapery, reinforcing the season's airier feel.</p>
<p>This swap is seasonal and reversible, easy to switch back once cooler weather returns.</p>
${pinPhoto("curtains-1.jpg", "Sheer curtains letting in light for a breezy summer feel", 572, 1024, "https://www.pinterest.com/pin/1151091986050468394/", "sheer summer curtains")}
${pinPhoto("curtains-2.jpg", "Airy curtains reinforcing a bright, breezy summer atmosphere", 683, 1024, "https://www.pinterest.com/pin/56224695344258807/", "breezy curtain styling")}

<h2>6. Style the Coffee Table for the Season</h2>
<p>A simple swap &mdash; a lighter tray, a seasonal bowl, a small plant &mdash; refreshes one of the most visible surfaces in the living room for minimal effort.</p>
${pinPhoto("coffee-table.jpg", "A coffee table styled with simple, seasonal summer touches", 681, 1024, "https://www.pinterest.com/pin/934708097679263310/", "summer coffee table styling")}

<h2>7. Update the Wall Decor</h2>
<p>Swapping in a lighter-toned print or a piece with a summery subject refreshes a wall without needing to rehang everything in the room.</p>
${pinPhoto("wall-decor.jpg", "Wall decor updated with lighter, summer-appropriate art", 687, 1024, "https://www.pinterest.com/pin/1091982240919727118/", "summer wall decor")}

<h2>8. Refresh the Dining Table</h2>
<p>A lighter runner, seasonal centerpiece, or simply fresh flowers resets the dining table for the season in a few minutes.</p>
${pinPhoto("dining-table.jpg", "A dining table refreshed with light, seasonal summer styling", 736, 981, "https://www.pinterest.com/pin/12807180188842307/", "summer dining table decor")}

<h2>9. Add Summer Scents</h2>
<p>A candle or diffuser in a fresh, citrus or coconut-adjacent scent does as much for the seasonal feeling as any visible decor change.</p>
<p>This is one of the fastest swaps on this list, and one of the easiest to change back later.</p>
${pinPhoto("scents.jpg", "A fresh summer scent completing the seasonal home refresh", 683, 1024, "https://www.pinterest.com/pin/974255331907206444/", "summer scented candles")}

<h2>10. Style the Entryway</h2>
<p>A seasonal wreath, a lighter runner, or simply fresh flowers on the entry table signal the season's shift the moment someone walks in.</p>
${pinPhoto("entryway.jpg", "A seasonally styled entryway welcoming guests with summer touches", 574, 1024, "https://www.pinterest.com/pin/492649954064487/", "summer entryway styling")}

<h2>11. Treat the Outdoor Space Like a Real Room</h2>
<p>Cushions, a rug, and a bit of styled decor turn a patio or porch into genuine living space for the months it actually gets used.</p>
<p>This is worth real attention given how much more time gets spent outdoors specifically during summer.</p>
${pinPhoto("outdoor-space.jpg", "An outdoor space styled and furnished like a genuine extra room", 683, 1024, "https://www.pinterest.com/pin/130534089201455090/", "summer outdoor space decor")}

<h2>12. Add Small Pops of Color</h2>
<p>A few bright accents &mdash; a pillow, a vase, a small object &mdash; finish the refresh without requiring a full color overhaul anywhere in the home.</p>
${pinPhoto("color-accents.jpg", "Small, bright color accents finishing a summer home refresh", 612, 1024, "https://www.pinterest.com/pin/148478118961178494/", "summer color accents")}

<h2>Keeping It Budget-Friendly</h2>
<p>Most of these swaps work with items already on hand &mdash; rearranging, moving existing plants, or simply decluttering winter-heavy textiles costs nothing beyond time.</p>
<p>Spreading the swaps across a few weekends, rather than all at once, also keeps the refresh from feeling like a single expensive project.</p>

<h2>Mistakes Worth Avoiding</h2>
<p>Overdoing a single theme &mdash; too much nautical, too much tropical &mdash; tips a light seasonal refresh into something closer to a costume.</p>
<p>Skipping the outdoor space is the other common miss, given how much summer life actually happens there.</p>

<h2>Final Thoughts</h2>
<p>None of these 12 swaps need to happen in one day.</p>
<p>Start with bedding and scent, since both have the most immediate daily impact, then layer in the rest as time allows.</p>
<p>A summer refresh is about small, reversible changes, not a seasonal renovation.</p>
`;

module.exports = { body };
