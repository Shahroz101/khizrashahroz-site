// Body content for "11 Bedroom Lighting Ideas for Setting the Right
// Mood". Numbered idea-list format with a brief recap section. New
// topic for the site, no existing overlap (bathroom lighting articles
// cover a different room entirely). Source photos are all
// AI-generated style with no Pinterest links, 1:1 with the 11 ideas,
// so none carry credit captions. Rewritten out of the source's
// heavily slang-driven, meme-referencing voice into the site's calmer
// tone, short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0GSVSRPP1", title: "Bedside Lamps Set of 2 for Bedroom, 15\" Modern Minimalist Small Table Lamps", w: 1500, h: 1308 },
    { asin: "B0C4D6BYNL", title: "LuxSight Collection 28.5\" Table Lamps Set of 2 with Nightlight for Bedroom", w: 1500, h: 1500 },
  ],
  layer: [
    { asin: "B0CBV5DC7Y", title: "Nintiue Upgraded Modern Arc Dimmable Tall Standing Floor Lamp with Linen Shade", w: 1500, h: 1500 },
    { asin: "B0B48G18TF", title: "Dimmable 3 Light Arc Floor Lamp, Mid Century Tree Floor Lamp, Beige Shades", w: 1500, h: 1500 },
  ],
  warmBulbs: [
    { asin: "B07JMX65V9", title: "Amazon Basics A19 LED Light Bulbs, 60 Watt Equivalent, Energy Efficient 9W", w: 1240, h: 1135 },
    { asin: "B09FR2J8SH", title: "Cree Lighting Basic Series A19 Bulb, 2700K Dimmable LED Bulb, 60W + 800 Lumens", w: 791, h: 1500 },
  ],
  fairy: [
    { asin: "B094CTD2G9", title: "ZSJWL 300 LED Curtain Fairy Lights with Remote, 9.8 × 9.8 Ft, USB Plug in", w: 1500, h: 1500 },
    { asin: "B085Y1J85P", title: "HXWEIYE 300LED Fairy Curtain Lights, 9.8x9.8Ft USB, Remote, 8 Modes &amp; Timer", w: 1024, h: 1024 },
  ],
  sconces: [
    { asin: "B09N9SCK81", title: "Galtlap Plug-in Wall Sconces, Set of 2, Bedside Reading Lights with USB Ports, Brushed Nickel", w: 1412, h: 1377 },
    { asin: "B0C9GG16Y6", title: "YBING Bedside Wall Lamp Set of 2, Modern Wall Sconces with Plug in Cord Nightstand Wall", w: 1500, h: 1500 },
  ],
  smart: [
    { asin: "B08TB8Z5HF", title: "Kasa Multicolor Dimmable Wi-Fi Smart Bulb, A19, KL125P4", w: 1469, h: 1261 },
    { asin: "B09B7NQT2K", title: "Govee Smart Light Bulbs, A19 Color Changing Light Bulb, 800 LM, E26 Base", w: 1488, h: 1321 },
  ],
  dimmer: [
    { asin: "B07DX5QRB8", title: "Lutron Caseta Smart Dimmer Switch, Smart Hub Required, No Neutral Required", w: 1500, h: 1500 },
    { asin: "B0GYQ1MM8X", title: "Lutron Caseta Diva Smart Dimmer Switch, Smart Hub Required, No Neutral Req", w: 1500, h: 1500 },
  ],
  lamps: [
    { asin: "B0BYPKPWRP", title: "White Ceramic Table Lamp, Geometric Textured Small Bedside Lamp with Linen Shade", w: 1500, h: 1500 },
    { asin: "B0GV43WCHY", title: "CACHREOON Black Ceramic Table Lamp with Beige Linen Shade, Modern Minimalist Bedside Lamp", w: 1500, h: 1500 },
  ],
  backlight: [
    { asin: "B07CVS6NLF", title: "MINGER Dimmable LED Strip Lights, 3000K Warm White, 16.4ft Flexible Light Strip", w: 945, h: 893 },
    { asin: "B0CFN8ZBWX", title: "Feit Electric 16 ft COB LED Tape Light, 3000K, Remote Dimming, Plug-in", w: 1500, h: 1465 },
  ],
  mirror: [
    { asin: "B07PT6RZ4S", title: "BEAUTME Hollywood LED Vanity Mirror Lights Kit with Dimmable Light Bulbs", w: 1000, h: 913 },
    { asin: "B07Q578BLV", title: "Hollywood Style LED Vanity Mirror Lights Kit with Dimmable Light, 10 Bulbs, USB", w: 500, h: 410 },
  ],
  candles: [
    { asin: "B08RC882JP", title: "CANDWAX 3x4 inch Pillar Candles Set of 3, Unscented Dripless Rustic Ivory", w: 1204, h: 1429 },
    { asin: "B0872YFHXN", title: "Eywamage White Flameless Faux Pillar Candles with Remote Set of 3", w: 1500, h: 1500 },
  ],
  statement: [
    { asin: "B07KF5BFC2", title: "MEELIGHTING Gold Plated Modern Crystal Chandelier, Contemporary Raindrop Pendant Light", w: 1000, h: 1000 },
    { asin: "B0CNBH6KJL", title: "Modern Gold Chandelier, 12-Light LED Linear Pendant Light Fixture", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bedroom-lighting-mood-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bedroom-lighting-mood", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A single overhead bedroom light does one job and does it badly &mdash; it's either on, flooding the whole room, or off.</p>
<p>A bedroom actually needs different kinds of light for different moments: reading, winding down, getting dressed in the morning.</p>
<p>These 11 ideas layer together to cover all of that, not just one bright default setting.</p>
<p>Most of them cost very little and don't require any real electrical work.</p>
${photo("hero.png", "Cozy bedroom featuring warm, layered lighting for a relaxing atmosphere", 1024, 1024, "hero")}

<h2>1. Layer the Light Sources</h2>
<p>A single ceiling fixture can't cover every mood a bedroom needs.</p>
<p>Combining overhead, task and ambient lighting &mdash; even just two of the three &mdash; gives the room actual flexibility throughout the day.</p>
<p>This is the organizing idea behind most of what follows on this list.</p>
<p>Start here before adding any individual fixture type.</p>
${photo("layering.png", "Bedroom featuring multiple layered light sources for flexibility", 683, 1024, "layer")}

<h2>2. Skip the Cold Bulbs</h2>
<p>A cool white bulb reads as clinical in a bedroom, working directly against the relaxed mood the room is supposed to have.</p>
<p>Warm-toned bulbs, generally in the 2700-3000K range, create a softer, more flattering light throughout the space.</p>
<p>This is one of the cheapest, fastest fixes on this entire list &mdash; often just a bulb swap, nothing more.</p>
<p>Worth doing before any other change on this list.</p>
${photo("warm-bulbs.png", "Warm-toned bedroom lighting creating a cozy, inviting atmosphere", 683, 1024, "warmBulbs")}

<h2>3. Don't Dismiss Fairy Lights</h2>
<p>A string of warm fairy lights adds a soft, ambient glow that a single lamp can't replicate.</p>
<p>Draped along a headboard, a shelf, or around a window frame, they work as a low-commitment accent rather than a primary light source.</p>
<p>This isn't just a dorm-room trick &mdash; done with restraint, it reads as genuinely styled in any bedroom.</p>
<p>A cheap, flexible addition that's easy to remove or reposition later.</p>
${photo("fairy-lights.png", "String fairy lights adding soft ambient glow to a bedroom", 683, 1024, "fairy")}

<h2>4. Use Wall Sconces to Save Nightstand Space</h2>
<p>A sconce mounted above or beside the bed frees up nightstand surface that a table lamp would otherwise take.</p>
<p>This matters more in a smaller bedroom, where every inch of nightstand space counts.</p>
<p>Sconces also add a more intentional, designed look than a lamp alone typically does.</p>
<p>Worth considering for anyone who's run out of room on a small nightstand.</p>
${photo("wall-sconces.png", "Wall sconces providing elegant, space-saving bedroom lighting", 683, 1024, "sconces")}

<h2>5. Add Smart Lighting for Zero-Effort Mood Changes</h2>
<p>A smart bulb or smart switch lets the whole room shift from bright to dim without getting out of bed.</p>
<p>This is less about a specific look and more about convenience &mdash; the exact lighting level for the exact moment, on demand.</p>
<p>Scheduling automatic dimming in the evening adds a small but genuinely useful routine.</p>
<p>Worth the investment for anyone who adjusts lighting throughout the night regularly.</p>
${photo("smart-lighting.png", "Smart lighting system offering convenient bedroom mood control", 683, 1024, "smart")}

<h2>6. Install a Dimmer</h2>
<p>A dimmer switch does more for a room's flexibility than almost any single fixture change.</p>
<p>One fixture becomes several different brightness levels, covering everything from bright morning light to a soft evening glow.</p>
<p>This is a relatively simple electrical upgrade, though it may require an electrician depending on the existing wiring.</p>
<p>One of the best returns on investment on this entire list.</p>
${photo("dimmer-switches.png", "Dimmer switch allowing flexible bedroom lighting control", 683, 1024, "dimmer")}

<h2>7. Add Lamps With Real Intention</h2>
<p>A good table or floor lamp does more than provide light &mdash; it's a genuine styling object in its own right.</p>
<p>Choosing a lamp with real presence, rather than a purely functional afterthought, elevates the whole nightstand or corner it sits in.</p>
<p>A warm-toned bulb matters here just as much as everywhere else on this list.</p>
<p>Worth treating the lamp choice as a decor decision, not just a lighting one.</p>
${photo("statement-lamps.png", "Stylish table lamp adding both light and decor to a bedroom", 683, 1024, "lamps")}

<h2>8. Try Backlighting</h2>
<p>A light source placed behind a headboard, a piece of furniture, or along a shelf edge creates a soft glow without a visible fixture.</p>
<p>This is a genuine designer trick that's become much more accessible with affordable LED strip lighting.</p>
<p>The indirect, diffused effect reads as more sophisticated than a direct light source in the same spot.</p>
<p>A bit more setup than most ideas on this list, but a real visual payoff.</p>
${photo("backlighting.png", "Backlighting technique creating a soft, designer-style glow", 683, 1024, "backlight")}

<h2>9. Light the Mirror Properly</h2>
<p>A mirror with its own dedicated lighting &mdash; sconces on either side, or a backlit frame &mdash; makes a real difference for anyone getting ready in the room.</p>
<p>This solves the same shadow problem bathroom vanity lighting does, just in a bedroom context.</p>
<p>Warm, even light at the mirror beats relying on whatever ambient light happens to reach that corner.</p>
<p>A practical upgrade for anyone who does their daily routine in the bedroom rather than the bathroom.</p>
${photo("mirror-lighting.png", "Properly lit mirror providing functional bedroom lighting", 683, 1024, "mirror")}

<h2>10. Don't Skip Candles</h2>
<p>Real candlelight brings a warmth and flicker no bulb fully replicates, even a dimmed one.</p>
<p>A cluster of candles on a dresser or nightstand adds genuine ambiance for very little cost.</p>
<p>This works best as a layer on top of practical lighting, not a replacement for it.</p>
<p>One of the cheapest mood upgrades on this entire list.</p>
${photo("candles.png", "Candlelight adding warm ambiance to a bedroom setting", 683, 1024, "candles")}

<h2>11. Consider a Statement Fixture</h2>
<p>A chandelier, an oversized pendant, or a sculptural fixture turns the bedroom's main light source into a genuine design feature.</p>
<p>This works especially well in a room with higher ceilings, where the fixture has room to actually make an impact.</p>
<p>Pairing a statement fixture with a dimmer keeps it from being too harsh as a daily-use light.</p>
<p>The biggest single investment on this list, but also the most dramatic visual change.</p>
${photo("statement-fixtures.png", "Statement light fixture serving as a bedroom's design centerpiece", 683, 1024, "statement")}

<h2>Quick Recap</h2>
<p>Layer at least two types of lighting rather than relying on one.</p>
<p>Choose warm-toned bulbs throughout.</p>
<p>Add a dimmer wherever the budget allows.</p>
<p>Treat lamps, sconces and any statement fixture as genuine decor choices, not afterthoughts.</p>

<h2>Final Thoughts</h2>
<p>None of these 11 ideas require a full bedroom renovation to try.</p>
<p>A bulb swap and a dimmer alone cover most of the mood-setting work most people are actually after.</p>
<p>Layer in the rest gradually &mdash; fairy lights, candles, a statement fixture &mdash; as budget and interest allow.</p>
<p>The right lighting does more for a bedroom's feel than almost any other single change.</p>
`;

module.exports = { body };
