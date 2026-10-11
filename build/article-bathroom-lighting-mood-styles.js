// Body content for "17 Bathroom Lighting Ideas for Setting the Mood".
// Numbered idea-list format (source used plain h2 titles, not
// numbers). Distinct from the existing bathroom-light-fixtures-guide
// article, which covers 5 fixture TYPES as a practical buying guide —
// this one covers STYLE and mood-driven lighting choices instead
// (statement chandelier, candlelight, colored LEDs), which the
// buying guide doesn't touch. Idea 2 (vanity lights) had no source
// photo, kept text-only. Source photos are all AI-generated style
// with no Pinterest links, so none carry credit captions. Rewritten
// out of the source's heavily slang-driven voice into the site's
// calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0HCB3WRMQ", title: "Daunton Brushed Gold Bathroom Light Fixture, 3-Light Vanity Light, Milk White Glass", w: 1254, h: 1254 },
    { asin: "B0GF7RCNVJ", title: "VbiTmn Gold Vanity Light, 3 Light, Vintage Antique Brass Finish", w: 1500, h: 1500 },
  ],
  chandelier: [
    { asin: "B075RYMBQ6", title: "lifeholder Mini Chandelier, Crystal Chandelier Lighting, 2 Lights, Flush Mount", w: 1000, h: 1000 },
    { asin: "B0BZVN6XR7", title: "3-Lights Spiral Crystal Chandelier, Modern Raindrop Light Fixture", w: 1500, h: 1500 },
  ],
  vanityLights: [
    { asin: "B0FQNR9LGP", title: "Modern Bathroom Light Fixtures, Black Vanity Lights, 360° Rotatable, 24 In", w: 1500, h: 1500 },
    { asin: "B0F8W7NF7B", title: "zouzai 16 Inch Black Modern LED Bathroom Vanity Light Bar, 12W, Dimmable", w: 1500, h: 1500 },
  ],
  recessed: [
    { asin: "B0DNLP47RJ", title: "Feit Electric 5/6in LED Recessed Downlight Retrofit Kit, 75W Equivalent", w: 1500, h: 957 },
    { asin: "B0DY1NYM59", title: "HALO 6 Inch LED Recessed Light Slim Trim Retrofit, 5CCT, 6 Pack", w: 1475, h: 1500 },
  ],
  underCabinet: [
    { asin: "B0H1NGT6TH", title: "CCT COB LED Strip Light Kit, 32.8ft, Dimmable & Cuttable, Smart App/Remote Control", w: 996, h: 983 },
    { asin: "B0BCVS5TKF", title: "PAUTIX COB LED Strip Light, 16.4ft, Warm White 2700K, Dimmable, RF Remote", w: 1456, h: 1500 },
  ],
  pendant: [
    { asin: "B0D485BLWL", title: "Ciata Lighting One-Light Indoor Mini Pendant, Adjustable, Chrome Finish, 2 Pack", w: 808, h: 1000 },
    { asin: "B09GFRPZHN", title: "AKEZON Pendant Lights, 2 Pack, Brushed Nickel, Adjustable Height", w: 631, h: 1344 },
  ],
  sconces: [
    { asin: "B0CL63Z9KK", title: "Kalium Wall Sconces, Set of Two, Modern Matte Black Vanity Wall Lights", w: 1500, h: 1498 },
    { asin: "B0D5GGV1NM", title: "Kalium Wall Sconces, Set of Two, Modern Brushed Nickel Vanity Wall Lights", w: 1438, h: 1500 },
  ],
  ledMirrors: [
    { asin: "B0FBRHMJ8L", title: "24\"x32\" LED Bathroom Mirror with Lights, Anti-Fog, Backlit + Front Lit, 3 Colors", w: 1500, h: 1500 },
    { asin: "B0FVFRK7SR", title: "Keonjinn 24\" x 36\" LED Bathroom Mirror with Lights, Frontlit & Backlit", w: 1500, h: 1500 },
  ],
  skylights: [
    { asin: "B0GXV7NG8Y", title: "10 Inch Sun Tunnel Extension Tube, Rigid Aluminum Skylight Extension", w: 1461, h: 1500 },
    { asin: "B0FM5Y9285", title: "Solatube 160 DS 10-Inch Tubular Skylight Extension Kit, Natural Daylight", w: 1120, h: 1500 },
  ],
  dimmers: [
    { asin: "B0D62QM98H", title: "DEWENWILS 2 Pack Dimmer Switch, Single-Pole or 3-Way Dimmer Light Switch", w: 1200, h: 1500 },
    { asin: "B0771BC2YH", title: "Cloudy Bay in Wall Dimmer Switch for LED Light, 3-Way Single Pole Dimmable", w: 1500, h: 1446 },
  ],
  accentLighting: [
    { asin: "B0DPHQ9ZHZ", title: "EZVALO Indoor Spotlights, Picture Lights for Wall, Plant Up Lights", w: 1193, h: 1500 },
    { asin: "B0DPHQMQSY", title: "EZVALO Spot Lights Indoor, Rechargeable Picture Lights with Remote, 2-Pack", w: 1195, h: 1500 },
  ],
  flushMounts: [
    { asin: "B0CP23CKK4", title: "SKEJAO Flush Mount Ceiling Light Fixture, 3-Light, Black", w: 1500, h: 810 },
    { asin: "B000OCNK1U", title: "Designers Fountain 9-Inch 2-Light Flush Mount Ceiling Light, White", w: 1500, h: 1260 },
  ],
  vintageBulbs: [
    { asin: "B01IBTS9DG", title: "Incandescent Light Bulbs, 60 Watt, 210 Lumens, 4 Pack, ST64 Edison Bulbs", w: 1500, h: 1500 },
    { asin: "B0DN2YZZYL", title: "Feit Electric Vintage Exposed Filament Amber Glass LED ST19, Dimmable, 8 Pack", w: 1325, h: 1500 },
  ],
  motionSensor: [
    { asin: "B0FXW6ZLZ9", title: "Rechargeable Motion Sensor Ceiling Light with Remote, 2 Pack", w: 1500, h: 1500 },
    { asin: "B0F26XWK15", title: "ZISUYU Plug-in LED Night Light with Motion Sensor, Dimmable, 6 Pack", w: 1500, h: 1428 },
  ],
  coloredLeds: [
    { asin: "B0H4ZHMSW9", title: "12 Inch Smart RGB Flush Mount Ceiling Light, 24W, Dimmable", w: 1269, h: 1163 },
    { asin: "B0H35L7K7X", title: "Smart LED Ceiling Light, Works with Alexa and Google Home, RGBCW Color Changing", w: 1483, h: 1500 },
  ],
  overMirrorBars: [
    { asin: "B0DBTGP6GJ", title: "Modern Bathroom Light Fixtures Over Mirror, 32 Inch, Matte Black, 5CCT LED", w: 1500, h: 1500 },
    { asin: "B0H5J3DGVB", title: "OOWOLF LED Bathroom Vanity Light, 14W, 5000K Daylight, Dimmable", w: 1500, h: 1500 },
  ],
  candlelight: [
    { asin: "B0D3KP7R84", title: "Hosley Set of 3 Whitewashed Wooden Pillar Candle Holders, Spa and Aromatherapy", w: 1500, h: 1295 },
    { asin: "B0F52RPV5Z", title: "Metal Candle Holder with Handmade Glass Dome, Brass, Hurricane Candle Holders, Set of 2", w: 1500, h: 1500 },
  ],
  mixAndMatch: [
    { asin: "B08NTQQ165", title: "Globe Electric Pratt 4-Light Track Lighting, Matte Brass, Gold", w: 1500, h: 387 },
    { asin: "B0CM2WD5FK", title: "LED Track Lighting Fixtures Ceiling, 17\" Track Light, Black, Clear Glass Shade", w: 928, h: 591 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bathroom-lighting-mood-styles-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bathroom-lighting-mood-styles", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Bathroom lighting isn't just about seeing clearly &mdash; it sets the entire mood of the room.</p>
<p>The same bathroom can feel clinical under one light source and genuinely luxurious under another.</p>
<p>These 17 ideas lean into style and atmosphere, not just the practical fixture types a bathroom technically needs.</p>
<p>Most work well layered together rather than picked one at a time.</p>
${photo("hero.png", "Stylish modern bathroom with a mix of layered lighting", 1312, 736, "hero")}

<h2>1. A Statement Chandelier</h2>
<p>A chandelier in a bathroom reads as unexpected in the best way, turning a purely functional room into something genuinely dramatic.</p>
<p>This works especially well over a freestanding tub, where it becomes the room's clear focal point.</p>
<p>Scale it to the room &mdash; a smaller chandelier for a powder room, something bolder for a larger primary bath.</p>
<p>One of the highest-drama choices on this entire list.</p>
${photo("chandelier.png", "Luxurious bathroom featuring a statement chandelier fixture", 683, 1024, "chandelier")}

<h2>2. Vanity Lights That Actually Flatter</h2>
<p>Side-mounted vanity lights, rather than a single light directly overhead, eliminate the harsh shadows that make grooming tasks harder.</p>
<p>Warm-toned bulbs matter more here than anywhere else in the house, since this is where lighting directly affects how a face looks in the mirror.</p>
<p>This isn't just practical &mdash; good vanity lighting is also one of the most noticeable style upgrades a bathroom can get.</p>
${productGrid("vanityLights")}

<h2>3. Recessed Lighting for a Clean Look</h2>
<p>Flush, unobtrusive recessed fixtures disappear into the ceiling, keeping the room's visual focus on everything else.</p>
<p>This suits a minimalist or modern bathroom where a visible fixture would compete with the room's clean lines.</p>
<p>Spreading several recessed lights evenly avoids the single harsh shadow one fixture alone would create.</p>
${photo("recessed.png", "Sleek minimalist bathroom with clean recessed lighting", 683, 1024, "recessed")}

<h2>4. Under-Cabinet Lighting for Late-Night Trips</h2>
<p>A soft strip of light under the vanity cabinet provides just enough visibility for a nighttime bathroom trip without the jolt of full overhead light.</p>
<p>This is a small, practical addition that also adds a subtle glow effect worth the install on its own.</p>
<p>Dimmable or motion-activated versions add even more convenience for middle-of-the-night use.</p>
${photo("under-cabinet.png", "Modern bathroom featuring soft under-cabinet lighting", 683, 1024, "underCabinet")}

<h2>5. Pendant Lights as a Design Statement</h2>
<p>A pair of pendants flanking the mirror does the job of vanity lighting while adding real visual interest.</p>
<p>This suits a bathroom that wants a more curated, designed feel than a standard built-in fixture provides.</p>
<p>Pendant height matters here &mdash; too low interferes with the mirror, too high loses the lighting benefit.</p>
${photo("pendant.png", "Contemporary bathroom design with stylish pendant lighting", 683, 1024, "pendant")}

<h2>6. Wall Sconces With Real Presence</h2>
<p>A bold sconce design adds drama in a way a flush, built-in fixture never could.</p>
<p>This works well paired with a statement mirror, where the two elements play off each other.</p>
<p>Sconces also double as general ambient lighting when placed away from the vanity, not just task lighting at the mirror.</p>
${photo("sconces.png", "Modern bathroom beautifully designed with dramatic wall sconces", 683, 1024, "sconces")}

<h2>7. An LED Mirror</h2>
<p>A mirror with integrated LED lighting around its edge solves the shadow problem directly at the source.</p>
<p>Many versions include adjustable brightness and color temperature, adding flexibility a fixed fixture can't match.</p>
<p>This is one of the more modern, tech-forward choices on this list, and increasingly a popular default in new builds.</p>
${photo("led-mirrors.png", "Sleek modern bathroom featuring an illuminated LED mirror", 683, 1024, "ledMirrors")}

<h2>8. A Skylight</h2>
<p>Natural light does more for a bathroom's mood than any artificial fixture, when the layout allows for it.</p>
<p>A skylight brings daylight into a room that often has limited window space due to privacy concerns.</p>
<p>This is a bigger structural investment than anything else on this list, but it delivers a genuinely different quality of light.</p>
${photo("skylights.png", "Serene spacious bathroom illuminated by a beautiful skylight", 683, 1024, "skylights")}

<h2>9. Dimmer Switches</h2>
<p>A dimmer turns one fixture into several different moods &mdash; bright for grooming, soft for an evening soak.</p>
<p>This is one of the cheapest upgrades on this entire list relative to the flexibility it adds.</p>
<p>Worth adding to nearly any fixture in the room, not just one specific type.</p>
${photo("dimmers.png", "Luxurious bathroom design with mood-setting dimmer switches", 683, 1024, "dimmers")}

<h2>10. Accent Lighting on Favorite Features</h2>
<p>A small directional light trained on an interesting tile pattern, a piece of art, or an architectural detail gives that feature real presence after dark.</p>
<p>This works best as a layer on top of general lighting, not as the room's only light source.</p>
<p>A subtle way to highlight whatever detail in the room deserves the most attention.</p>
${photo("accent-lighting.png", "Modern bathroom design featuring accent lighting on key features", 683, 1024, "accentLighting")}

<h2>11. Flush Mounts for Low Ceilings</h2>
<p>A flush-mounted fixture provides real light without hanging down into a room with limited ceiling height.</p>
<p>This suits an older home or a smaller bathroom where a pendant or chandelier simply wouldn't fit.</p>
<p>Modern flush mount designs have moved well past the plain, dated versions this category used to mean.</p>
${photo("flush-mounts.png", "Chic bathroom design with a stylish flush mount light fixture", 683, 1024, "flushMounts")}

<h2>12. Vintage Exposed Bulbs</h2>
<p>A fixture with visible Edison-style bulbs brings warmth and a bit of retro character to the room.</p>
<p>This suits a farmhouse, industrial or vintage-leaning bathroom more than a sleek modern one.</p>
<p>The warm, slightly amber light these bulbs cast adds to the cozy effect on its own.</p>
${photo("vintage-bulbs.png", "Cozy inviting bathroom with vintage exposed bulb lighting", 683, 1024, "vintageBulbs")}

<h2>13. Motion Sensor Lights</h2>
<p>A light that turns on automatically solves the groggy-morning, fumbling-for-a-switch problem directly.</p>
<p>This works especially well paired with the under-cabinet lighting idea above, for a soft nighttime glow that needs no switch at all.</p>
<p>A practical convenience upgrade that doesn't require sacrificing any style.</p>
${photo("motion-sensor.png", "Sleek contemporary bathroom with convenient motion sensor lighting", 683, 1024, "motionSensor")}

<h2>14. Colored LEDs</h2>
<p>Adjustable color LEDs let the room shift mood entirely &mdash; a cool blue for an energizing morning, a warm amber for an evening wind-down.</p>
<p>This suits anyone who wants real flexibility rather than committing to one fixed light temperature.</p>
<p>A playful option that works especially well combined with a smart home lighting system.</p>
${photo("colored-leds.png", "Futuristic bathroom design with customizable colored LED lighting", 683, 1024, "coloredLeds")}

<h2>15. Over-Mirror Light Bars</h2>
<p>A horizontal light bar mounted above the mirror delivers even, shadow-free illumination across the whole reflection.</p>
<p>This is a more modern take on the classic vanity light strip, with a cleaner, more minimal look.</p>
<p>Particularly useful for anyone who applies makeup or shaves daily and needs reliably even light.</p>
${photo("over-mirror-bars.png", "Modern stylish bathroom with an over-mirror light bar", 683, 1024, "overMirrorBars")}

<h2>16. Candlelight for Real Ambiance</h2>
<p>Nothing replicates the specific warmth of real candlelight, even with the best LED dimmer available.</p>
<p>A cluster of candles near the tub turns an ordinary bath into something closer to a spa experience.</p>
<p>This works as a layer on top of practical lighting, not a replacement for it &mdash; candles alone won't handle daily grooming tasks.</p>
${photo("candlelight.png", "Serene spa-style bathroom with warm candlelight ambiance", 683, 1024, "candlelight")}

<h2>17. Mixing Fixture Types With Intention</h2>
<p>The most well-lit bathrooms rarely rely on just one fixture type &mdash; they layer two or three from this list together.</p>
<p>A combination of ambient, task and accent lighting covers every actual need the room has, from grooming to relaxing.</p>
<p>This is less a single idea and more the organizing principle behind everything else on this list.</p>
${photo("mix-and-match.png", "Stunning bathroom design showcasing multiple lighting types mixed together", 683, 1024, "mixAndMatch")}

<h2>Final Thoughts</h2>
<p>Bathroom lighting deserves more attention than it usually gets.</p>
<p>A single overhead fixture handles the bare minimum, but it leaves most of the room's potential mood untouched.</p>
<p>Start with whichever idea solves an actual daily problem &mdash; bad vanity shadows, a groggy 2 a.m. trip &mdash; then layer in the more atmospheric choices after.</p>
<p>The right combination turns a purely functional room into one that's genuinely worth spending time in.</p>
`;

module.exports = { body };
