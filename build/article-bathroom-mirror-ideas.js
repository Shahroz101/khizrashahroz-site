// Body content for "Gorgeous Bathroom Mirror Ideas to Upgrade Your
// Vanity Area". Source was a topical guide, not a numbered idea list,
// so this follows the site's existing guide-format precedent. Photos
// are AI-generated style with no Pinterest links, so none carry credit
// captions. Distinct from the existing mirror-wall-panelling-ideas
// article, which covers literal mirrored wall panels for any room,
// not bathroom vanity mirror styles. "Hollywood Vanity Vibes" was an
// h3 subsection under "Lighted Mirrors" in the source; split into its
// own section here since it has its own photo and is a visually
// distinct look. Rewritten out of the source's very casual, first-
// person, meme-heavy voice ("I'm obsessed," "no drama, just good
// vibes") into the site's calmer, neutral tone.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0892J76SM", title: "Keonjinn 24\" x 36\" LED Mirror for Bathroom, Backlit Mirror 6000K Daylight", w: 1500, h: 1500 },
    { asin: "B093L71BT4", title: "VENETIO Backlit LED Bathroom Mirror with Light and Anti Fog Design", w: 1500, h: 1500 },
  ],
  round: [
    { asin: "B0DQGZWK96", title: "Rattan Mirror, Round Boho Bathroom Mirror for Wall", w: 1500, h: 1500 },
    { asin: "B0DHVJN243", title: "24\" Boho Wall Mirror with Handwoven Rattan Frame, Farmhouse Round Mirror for Bedroom", w: 1500, h: 1493 },
  ],
  rectangular: [
    { asin: "B07S437P9H", title: "Amanti Art Brown Bathroom Mirror for Over Sink, 27x21 Yale Walnut Rectangle Vanity", w: 1172, h: 1500 },
    { asin: "B0DHS835F8", title: "WEER Bathroom Vanity Mirror Walnut 24X36 Inch", w: 1500, h: 1500 },
  ],
  lighted: [
    { asin: "B0FBRHMJ8L", title: "24\"x32\" LED Bathroom Mirror with Lights, Anti-Fog, Backlit + Front Lit, 3 Colors", w: 1500, h: 1500 },
    { asin: "B0FVFRK7SR", title: "Keonjinn 24\" x 36\" LED Bathroom Mirror with Lights, Frontlit &amp; Backlit", w: 1500, h: 1500 },
  ],
  hollywood: [
    { asin: "B073FBN2M9", title: "SUPER DEAL Hollywood Vanity Mirror with Lights, 20\" x 25\" Makeup Cosmetic Mirror w/14", w: 1500, h: 1500 },
    { asin: "B0D25L2JMW", title: "ouboyo 28\" x 20\" Large Hollywood Vanity Mirror with Lights Bulbs", w: 1500, h: 1500 },
  ],
  vintage: [
    { asin: "B0DQVK182N", title: "deerlove Traditional Arched Mirror with Shelf, 20.9x31.5 Inch, Antique Gold", w: 934, h: 1371 },
    { asin: "B0F2YP9QBC", title: "WallBeyond Gold Vintage Mirror for Vanity 28x36 Inch", w: 1176, h: 1500 },
  ],
  statement: [
    { asin: "B0HC27XQK1", title: "Silver Wall Mirrors Decorative, 51\"x23\" Large Modern Wall Mirror for Home Decor", w: 1254, h: 1254 },
    { asin: "B0C7Z5D3XQ", title: "POZINO Irregular Mirror, 32\"x24\"Asymmetrical Mirror, Morden Odd Shape Mirrors", w: 1500, h: 1500 },
  ],
  double: [
    { asin: "B0FF28Q53Y", title: "2-Pack 24x36 Inch Matte Black Rectangular Bathroom Vanity Mirrors", w: 1500, h: 1500 },
    { asin: "B0GXTFRTX3", title: "2-Pack 24x36 Inch Brushed Gold Rounded Rectangle Vanity Mirrors", w: 1202, h: 1500 },
  ],
  diy: [
    { asin: "B0DS6NP36V", title: "Frame My Mirror Add A Frame, Paintable Custom Size Mirror Frame Border Kit", w: 1500, h: 1313 },
    { asin: "B0DP3KHWRS", title: "Amanti Art Mirror Makeover 28x20 Bathroom Mirror Frame Border Kit", w: 1500, h: 1500 },
  ],
  smart: [
    { asin: "B0BC942Q5J", title: "32\"x24\" Smart Waterproof Anti-Fog Vanity Mirror with 21.5\" Touch Screen TV", w: 1292, h: 1292 },
    { asin: "B0817PC7L7", title: "BYECOLD Smart LED Bathroom Mirror with WiFi Weather Display &amp; Anti-Fog", w: 1500, h: 1500 },
  ],
  smallSpace: [
    { asin: "B0DZVFTPYM", title: "Bathroom Magnifying Mirror Wall Mounted, 360 Swivel Extendable Arm", w: 1256, h: 1465 },
    { asin: "B0DJVJ21LM", title: "Welllink 7 Inch Extendable Mirror 3X and 1X Chrome", w: 1398, h: 1363 },
  ],
  budget: [
    { asin: "B0C23L7M9B", title: "BEAUTYPEAK 20 Inch Round Mirror, Metal Frame Circle Mirror, Black", w: 1024, h: 1024 },
    { asin: "B087G1HSZ9", title: "HBCY Creations Round Mirror, Black 24 inch Wall Mirror for Entryway, Bathroom", w: 1498, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "bathroom-mirror-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "bathroom-mirror-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>A bathroom mirror does more than let someone check their reflection &mdash; it anchors the entire vanity area, and the right shape, frame or lighting can change the whole feel of the room. A plain builder-grade mirror is one of the easiest upgrades in the house to replace.</p>
<p>From soft round frames to full smart-mirror setups, there's a style here for nearly any bathroom size, budget and existing design direction.</p>
${photo("hero.jpg", "Backlit rectangular bathroom mirror above a wood vanity", 1280, 720, "hero")}

<h2>Round Mirrors</h2>
<p>Round mirrors soften the sharp edges a typical bathroom tends to have, which makes them an easy way to add a bit of visual relief. A frameless round mirror keeps the look simple and sleek, suiting anyone drawn to a minimalist vanity.</p>
<p>A rattan or wood-framed round mirror leans more boho, bringing in warmth and texture that a frameless version can't offer on its own.</p>
${photo("round-mirrors.png", "Round mirror styled above a luxurious bathroom vanity", 683, 1024, "round")}

<h2>Rectangular Mirrors</h2>
<p>For anyone who'd rather skip the curves, a rectangular mirror brings a classic, dependable energy to a vanity that rarely goes out of style.</p>
<p>Hanging a tall rectangular mirror vertically creates a dramatic, almost boutique-hotel feel, while a thick wooden frame in white or walnut adds warmth without overdoing it.</p>
${photo("rectangular-mirrors.png", "Rectangular mirror in a timeless elegant bathroom design", 683, 1024, "rectangular")}

<h2>Lighted Mirrors</h2>
<p>A lighted mirror brings genuinely useful, flattering light directly to where it matters most &mdash; makeup application and grooming both benefit enormously from light that doesn't cast awkward shadows.</p>
<p>Built-in LED strips around the frame, or a backlit edge that glows softly against the wall, both deliver that same even, shadow-free light.</p>
${photo("lighted-mirrors.png", "Stylish contemporary bathroom with an LED lighted mirror", 683, 1024, "lighted")}

<h2>Hollywood Vanity Mirrors</h2>
<p>A mirror ringed with individual bulbs brings genuine Hollywood-dressing-room energy to a bathroom vanity.</p>
<p>Beyond the dramatic look, this style is particularly practical for makeup application, since the surrounding bulbs eliminate the uneven lighting that leads to blending mistakes under normal bathroom lighting.</p>
${photo("hollywood-vanity.png", "Hollywood-inspired vanity mirror with bulb lighting", 683, 1024, "hollywood")}

<h2>Vintage Mirrors</h2>
<p>A vintage-style mirror brings genuine character to a vanity that a brand-new piece rarely matches.</p>
<p>Thrift shops and flea markets are consistently the best source for a one-of-a-kind vintage find, and an ornate antique frame often costs less secondhand than a comparable new piece would.</p>
${photo("vintage-mirrors.png", "Antique-style vintage mirror in a bathroom with retro charm", 683, 1024, "vintage")}

<h2>Statement Mirrors</h2>
<p>For anyone who wants the mirror itself to be the room's focal point, going big, bold and a little dramatic pays off.</p>
<p>An oversized, uniquely shaped or heavily sculptural mirror isn't for a space that wants to stay understated, but it reliably becomes the thing guests comment on first.</p>
${photo("statement-mirrors.png", "Dramatic statement mirror as the focal point of a bathroom", 683, 1024, "statement")}

<h2>Double Mirrors</h2>
<p>A shared bathroom runs considerably smoother with two mirrors instead of one, eliminating the daily competition for mirror space during busy mornings.</p>
<p>Matching double mirrors, hung at equal heights above a double vanity, also read as more intentional than a single oversized mirror stretched across two sinks.</p>
${photo("double-mirrors.png", "Double mirrors above a shared bathroom vanity", 683, 1024, "double")}

<h2>DIY Mirror Projects</h2>
<p>For anyone feeling a bit crafty, a DIY mirror project doesn't require any real design background to turn out well.</p>
<p>Reframing a plain mirror with trim, tile or reclaimed wood, or adding a hand-painted detail around the edge, both transform a basic builder-grade mirror into something that reads as custom.</p>
${photo("diy-mirror-hacks.png", "DIY bathroom mirror project with a custom frame", 683, 1024, "diy")}

<h2>Smart Mirrors</h2>
<p>A smart mirror brings genuine functionality beyond reflection &mdash; built-in displays, anti-fog technology and adjustable lighting settings all add real convenience to a morning routine.</p>
<p>It's a bigger investment than most of the other ideas here, but for anyone who leans toward tech-forward design, the upgrade tends to feel worth it.</p>
${photo("smart-mirrors.png", "Futuristic high-tech smart bathroom mirror", 683, 1024, "smart")}

<h2>Small Space Mirror Tricks</h2>
<p>A tight bathroom doesn't rule out a great mirror setup &mdash; it just requires a bit more intention about the shape and mounting.</p>
<p>A corner mirror tucks into an otherwise wasted space, an extendable swing-arm mirror pulls out only when needed, and a mirrored medicine cabinet combines storage with reflection in the same footprint.</p>
${photo("small-space-tricks.png", "Small bathroom with space-saving mirror tricks", 683, 1024, "smallSpace")}

<h2>Budget-Friendly Options</h2>
<p>A tight budget doesn't mean settling for a forgettable mirror. Big-box retailers and online marketplaces both regularly carry well-designed, affordable mirrors that read as considerably more expensive than their price tag suggests.</p>
<p>A simple frame swap on an existing builder-grade mirror is often the single cheapest upgrade available in the entire bathroom.</p>
${productGrid("budget")}

<h2>Final Thoughts</h2>
<p>None of these mirror styles require a full bathroom renovation to try. A single mirror swap is one of the fastest, most visible upgrades a vanity area can get.</p>
<p>The strongest choice is usually the one that actually matches how the bathroom gets used day to day &mdash; a lighted or Hollywood-style mirror for anyone who does makeup there daily, a statement piece for anyone who wants the room to make an impression.</p>
`;

module.exports = { body };
