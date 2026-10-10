// Body content for "10 Fall Gift Basket Ideas for Every Occasion".
// Guide format, matching the source's theme/essentials/occasions/
// styling/budget structure. Different season from the existing
// christmas-gift-basket-ideas and easter-basket-stuffer-ideas
// articles, which is a genuine distinguishing factor for gift-basket
// content (occasion-driven, not just a styling reframe). Source
// photos are real Unsplash stock photography; one image
// (SHER-SHER-9769-00.jpg) was hosted on a Supabase "product-images"
// bucket, a clear product-placement image rather than an editorial
// photo, and was skipped per the established branded/product-image
// precedent. All other photos kept and used; none have Pinterest
// links, so all are uncredited via photo().

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "fall-gift-basket-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A fall gift basket works for almost any occasion the season brings &mdash; Thanksgiving, a fall birthday, a thank-you, or simply because.</p>
<p>The theme, the base items and the way it's styled all matter more than the price tag ever does.</p>
${photo("hero.jpg", "A beautifully arranged fall gift basket full of seasonal items", 1600, 2400)}

<h2>Why a Fall Gift Basket Works So Well</h2>
<p>It's flexible enough to suit nearly any relationship or occasion, from a close friend's birthday to a coworker's thank-you, without feeling generic.</p>
<p>It also lets the giver personalize heavily within a loose structure, which is harder to pull off with a single boxed gift.</p>
${photo("why-baskets.jpg", "A cozy fall-themed gift basket ready for any occasion", 684, 1024)}

<h2>Choosing the Right Theme</h2>
<p>A cozy theme &mdash; blankets, candles, warm drinks &mdash; works for almost anyone, while a baking or harvest theme leans into the season's flavors specifically.</p>
<p>Picking one clear theme rather than mixing several keeps the finished basket feeling considered instead of like a random grab-bag.</p>
${photo("choosing-theme.jpg", "A themed fall gift basket built around one cohesive idea", 1024, 683)}

<h2>What Every Fall Basket Should Have</h2>
<p>A few genuinely useful items &mdash; not just decorative filler &mdash; make the basket feel valuable rather than purely aesthetic.</p>
<p>Something to eat or drink, something cozy, and at least one small surprise covers most of what makes a basket feel complete.</p>
${photo("essentials-1.jpg", "Essential cozy items filling out a thoughtful fall gift basket", 768, 1024)}
${photo("essentials-2.jpg", "A well-rounded mix of treats and comforts in a fall basket", 1024, 683)}

<h2>Fall Gift Baskets for Every Occasion</h2>
<p>A Thanksgiving basket leans into warm, communal flavors &mdash; think spiced treats and something meant to be shared at a table.</p>
${photo("thanksgiving.jpg", "A Thanksgiving-themed gift basket full of warm, seasonal flavors", 1024, 691)}
<p>A fall birthday basket can lean more personal and playful, built around the recipient's specific tastes rather than the season alone.</p>
${photo("birthday.jpg", "A playful fall birthday gift basket built around personal taste", 689, 1024)}
<p>A fall wedding basket works best leaning elegant and polished &mdash; think refined packaging over anything too casual or rustic.</p>
${photo("wedding.jpg", "An elegant fall wedding gift basket with polished, refined styling", 683, 1024)}
<p>A corporate or thank-you basket should stay professional and broadly appealing, since it's less personal by nature than a gift for a close friend.</p>
<p>A just-because basket has the most creative freedom of all, since there's no occasion-specific expectation shaping what goes inside.</p>

<h2>Styling and Presenting It Like a Pro</h2>
<p>The base &mdash; a real basket, a crate, or even a simple box &mdash; sets the whole tone before a single item goes inside.</p>
${photo("base.jpg", "A well-chosen base setting the tone for a styled fall gift basket", 1024, 683)}
<p>Layering items by height, rather than placing everything flat, gives the finished basket real visual depth.</p>
<p>A consistent color palette across the items and wrapping ties the whole thing together more than any single expensive item could.</p>
${photo("color.jpg", "A coordinated color palette tying a fall gift basket together", 683, 1024)}
<p>A handwritten note or one genuinely personal item is what separates a thoughtful basket from a purely decorative one.</p>
${photo("personal-touch.jpg", "A personal, handwritten touch completing a fall gift basket", 1024, 768)}
<p>Wrapping it in clear cellophane or a sheer wrap, finished with a simple ribbon, keeps the presentation clean without hiding the contents.</p>

<h2>Creative Extras Worth Adding</h2>
<p>A small seasonal object &mdash; a mini pumpkin, a bundle of cinnamon sticks, a tiny succulent &mdash; adds a detail that elevates the whole basket past its individual items.</p>

<h2>Keeping It Budget-Friendly</h2>
<p>Buying a few items in bulk and splitting them across multiple baskets cuts the per-basket cost significantly for anyone gifting several at once.</p>
<p>A thrifted or repurposed base works just as well as a new one, especially once it's filled and styled.</p>

<h2>Advanced Touches Worth Trying</h2>
<p>Building the basket around a scent story &mdash; a candle and a few items that share its notes &mdash; creates a more cohesive sensory experience than visuals alone.</p>
<p>Including something homemade, even one small item, adds a layer of effort that store-bought contents alone can't replicate.</p>

<h2>Why Fall Gift Baskets Never Fail</h2>
<p>The format is flexible enough to fit nearly any occasion the season brings, from a holiday table to a simple thank-you.</p>
<p>Get the theme and the base items right, and the styling details end up doing the rest of the work.</p>
`;

module.exports = { body };
