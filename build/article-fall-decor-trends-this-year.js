// Body content for "10 Fall Decor Trends Actually Worth Trying This
// Year". Numbered idea-list format, reordered from the source's 10
// trends. Distinct from the site's existing room-specific fall
// articles (bedroom textile checklist, mantel styling, kitchen
// categories, porch, spa bathroom, garden design, gift baskets,
// affordable luxe-look) — this covers whole-home AESTHETIC trends
// (dark academia, moody florals, candle culture, minimalist
// Halloween) not addressed by any of those room- or budget-specific
// pieces. Source was heavily interspersed with Amazon product
// placements (throw pillows, table runners, candles, lamps, vases,
// wreaths) between trend sections — skipped entirely per established
// precedent. Source photos have no Pinterest links, so none carry
// credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-decor-trends-this-year", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Fall decor repeats a few safe moves every year &mdash; pumpkins, plaid, warm candles.</p>
<p>These 10 are what's actually moving the aesthetic forward this year, beyond the usual seasonal defaults.</p>
${photo("hero.png", "A cozy living room embracing this year's fall decor trends", 1312, 736)}

<h2>1. Earthy Tones Are Taking Over</h2>
<p>Rust, clay and deep olive are replacing the brighter orange-and-gold fall palette that's dominated for years.</p>
<p>These tones also transition more easily into winter, which gives them real staying power beyond a single season.</p>
${photo("earthy-tones.png", "Earthy rust and clay tones taking over this year's fall palette", 1024, 574)}

<h2>2. Moody Florals</h2>
<p>Deep burgundy, plum and near-black floral prints are replacing the usual crisp autumn leaf motif on textiles and art.</p>
<p>This works especially well on a table runner or a few throw pillows, rather than committing to it as wallpaper or anything harder to change later.</p>
${photo("moody-florals.png", "Deep, moody floral prints replacing crisp autumn leaf motifs", 574, 1024)}

<h2>3. Layered Textures for Real Coziness</h2>
<p>Chunky knits, woven baskets and nubby wool together create a tactile depth that a single cozy throw blanket alone can't.</p>
<p>The combination matters more than any individual piece &mdash; it's the layering itself that reads as genuinely cozy rather than simply seasonal.</p>
${photo("layered-textures.png", "Layered chunky knit and woven textures creating real fall coziness", 574, 1024)}

<h2>4. Dark Academia Meets Cozy Cabin</h2>
<p>Rich wood tones, vintage-style lamps and a slightly scholarly, book-filled feel are blending with classic cabin warmth into one aesthetic.</p>
<p>This trend rewards a room that already has some vintage or well-worn pieces, rather than requiring a full new look.</p>
${photo("dark-academia.png", "Dark academia aesthetic blending with cozy cabin warmth", 574, 1024)}

<h2>5. The Return of Candle Culture</h2>
<p>Taper candles and candlesticks, not just scented jar candles, are having a genuine resurgence this year.</p>
<p>Grouping several candlesticks of varying heights together creates far more visual impact than a single candle placed alone.</p>
${photo("candle-culture.png", "Grouped taper candles bringing back candle culture this fall", 574, 1024)}

<h2>6. Organic Shapes and Raw Materials</h2>
<p>Hand-thrown ceramics, raw wood edges and other deliberately imperfect, organic shapes are replacing sleek, uniform decor.</p>
<p>This pairs naturally with the earthy color trend, since both lean on the same appreciation for natural, unrefined material.</p>
${photo("organic-shapes.png", "Organic shapes and raw materials bringing natural texture to fall decor", 574, 1024)}

<h2>7. Minimalist Halloween</h2>
<p>A few well-chosen pieces &mdash; one striking pumpkin arrangement, a single piece of vintage-style spooky art &mdash; are replacing wall-to-wall Halloween decorating.</p>
<p>This approach lets Halloween decor coexist with the rest of a considered fall scheme, rather than overtaking it for one month.</p>
${photo("minimalist-halloween.png", "Minimalist Halloween decor replacing wall-to-wall seasonal displays", 574, 1024)}

<h2>8. Cozy Corners Over Big Displays</h2>
<p>One deliberately styled reading nook or window seat is replacing the instinct to decorate every surface in the house for fall.</p>
<p>This also tends to look more intentional in photos and in person, since all the effort concentrates into one genuinely considered spot.</p>
${photo("cozy-corners.png", "A single cozy styled corner replacing decor spread across every surface", 574, 1024)}

<h2>9. Faux Foliage That Actually Looks Good</h2>
<p>Higher-quality artificial leaves and branches have improved enough that they're genuinely hard to distinguish from real foliage at a glance.</p>
<p>This matters most for anyone who wants fall greenery without the upkeep real branches and leaves demand over several weeks.</p>
${photo("faux-foliage.png", "High-quality faux foliage bringing realistic fall greenery indoors", 574, 1024)}

<h2>10. Statement Wreaths, Not Just Door Wreaths</h2>
<p>Wreaths are showing up above mantels, on interior walls and leaning against mirrors, well beyond their usual front-door role.</p>
<p>This trend treats the wreath as a genuine piece of seasonal wall art, not just an entryway signal that fall has arrived.</p>
${photo("statement-wreaths.png", "A statement wreath used as interior wall art beyond the front door", 574, 1024)}

<h2>Fall Decor, But Make It You</h2>
<p>None of these 10 trends need to be adopted all at once, or even all in the same year.</p>
<p>Picking two or three that genuinely fit an existing room does more than chasing every trend on this list at once.</p>
`;

module.exports = { body };
