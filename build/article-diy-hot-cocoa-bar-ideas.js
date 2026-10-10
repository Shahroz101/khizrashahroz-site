// Body content for "15 DIY Hot Cocoa Bar Ideas for a Delicious Winter
// Treat". Numbered idea-list format, condensed from a 25-section
// source (why-it-matters, what-makes-a-great-one, and
// essential-supplies intro sections folded into a shorter intro;
// mistakes-to-avoid and organization sections folded into the closing
// wrap-up). Idea 7 (coffee add-ins) had no source photo, kept
// text-only. Idea 12 (small space) had a source image that was
// literally an Amazon "Shop by Interest" screenshot rather than a
// real lifestyle photo, so it was skipped and that idea runs
// text-only too. New seasonal topic — distinct from the existing
// coffee-bar-decor-ideas and coffee-station-placement-workflow
// articles, which are both coffee-specific, not hot cocoa. Every
// other photo in the source had a real Pinterest pin link, so all are
// credited via pinPhoto().

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "diy-hot-cocoa-bar-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "diy-hot-cocoa-bar-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>`;
}

const body = `
<p>A hot cocoa bar is one of the easiest winter setups to pull off well.</p>
<p>A few mugs, a handful of toppings and one good base recipe cover most of it &mdash; the rest is just arrangement.</p>
<p>These 15 ideas cover a range of styles and space constraints, from a single countertop tray to a full cart setup.</p>
${photo("hero.jpg", "Delicious DIY hot cocoa bar styled for a cozy winter treat", 1400, 934)}
${pinPhoto("intro.jpg", "Cozy hot cocoa bar styled with warm winter touches", 550, 825, "https://www.pinterest.com/pin/985231165022471/", "DIY hot cocoa bar")}

<h2>Why a Hot Cocoa Bar Is Worth Setting Up</h2>
<p>It turns a simple drink into a small event, which makes it one of the highest-payoff winter setups relative to the effort involved.</p>
<p>It also works for almost any occasion &mdash; a casual weeknight, a holiday gathering, or a kids' movie night &mdash; without needing a different setup for each one.</p>
${pinPhoto("why-matters-1.jpg", "Cozy hot cocoa station set up for winter enjoyment", 736, 981, "https://www.pinterest.com/pin/211174975255744/", "hot chocolate station")}
${pinPhoto("why-matters-2.jpg", "Step-by-step hot chocolate bar setup for guests", 736, 981, "https://www.pinterest.com/pin/2603712282265551/", "how to set up a hot chocolate bar")}

<h2>What Actually Makes One Feel Finished</h2>
<p>A good base recipe, a small variety of toppings, and mugs that actually match the occasion matter more than an elaborate display.</p>
<p>Labeling each topping clearly also matters more than it sounds like it should, especially for a bar used by guests who aren't familiar with what's on offer.</p>
${pinPhoto("what-makes-great.jpg", "Well-organized hot cocoa bar with labeled toppings", 736, 981, "https://www.pinterest.com/pin/351912464676443/", "DIY hot cocoa bar essentials")}

<h2>Supplies Worth Having Before Decorating</h2>
<p>Mugs, a cocoa or hot chocolate base, marshmallows, and two or three topping options are the real essentials &mdash; everything past that is decorative.</p>
<p>Having the functional side sorted first makes the styling step much faster and less stressful.</p>
${pinPhoto("essential-supplies.jpg", "Essential supplies laid out for a hot cocoa bar setup", 736, 981, "https://www.pinterest.com/pin/3870349674291195/", "hot chocolate station supplies")}

<h2>1. A Classic Cozy Countertop Bar</h2>
<p>A simple tray on the counter with mugs, a thermos of cocoa, and a few toppings covers the basics without needing any dedicated furniture.</p>
<p>This is the easiest version to set up and break down, which makes it a good starting point for a first attempt.</p>
${pinPhoto("classic-countertop.jpg", "Classic countertop hot cocoa bar styled for cozy winter days", 720, 960, "https://www.pinterest.com/pin/563018699206441/", "cozy countertop cocoa bar")}

<h2>2. A Rustic Farmhouse Version</h2>
<p>Wood trays, mismatched vintage mugs, and a burlap or plaid runner bring a warm, farmhouse feel to the setup.</p>
<p>This pairs naturally with existing farmhouse decor elsewhere in the kitchen, rather than looking like a separate styled moment.</p>
${pinPhoto("rustic-farmhouse.jpg", "Rustic farmhouse hot cocoa bar with warm, cozy styling", 735, 890, "https://www.pinterest.com/pin/631418810295380784/", "rustic farmhouse hot cocoa bar")}

<h2>3. A Kid-Friendly Setup</h2>
<p>Colorful mugs, fun toppings like sprinkles and candy, and everything placed at a height kids can actually reach make this version work for younger guests.</p>
<p>Keeping hot liquids out of easy reach while still letting kids choose their own toppings balances safety with the fun of it.</p>
${pinPhoto("kid-friendly.jpg", "Kid-friendly hot cocoa bar with colorful, fun toppings", 640, 1024, "https://www.pinterest.com/pin/5348093303046221/", "kid-friendly cocoa bar ideas")}

<h2>4. A Minimalist Modern Station</h2>
<p>A neutral palette, simple ceramic mugs, and just one or two toppings keep this version feeling clean rather than cluttered.</p>
<p>This suits a modern kitchen better than a more rustic or heavily decorated version would.</p>
${pinPhoto("minimalist-modern.jpg", "Minimalist modern cocoa station with a clean, neutral look", 735, 889, "https://www.pinterest.com/pin/29625310045559372/", "minimalist cocoa station")}

<h2>5. A Christmas-Themed Bar</h2>
<p>Red and green accents, holiday-printed mugs, and candy cane toppings turn this into a dedicated Christmas moment rather than a general winter one.</p>
<p>This works well set up for just the holiday week, rather than staying out for the whole season.</p>
${pinPhoto("christmas-themed.jpg", "Christmas-themed hot cocoa bar with festive red and green accents", 735, 886, "https://www.pinterest.com/pin/110408628356795980/", "Christmas hot cocoa bar")}

<h2>6. An Outdoor Winter Version</h2>
<p>A thermos-based setup on a porch or patio table works for anyone gathering outside for a bonfire, sledding, or just cold-weather hangout time.</p>
<p>Insulated mugs matter more here than for an indoor version, since the drink needs to stay warm longer in the cold.</p>
${pinPhoto("outdoor-winter.jpg", "Outdoor winter hot cocoa bar set up for cold-weather gatherings", 720, 900, "https://www.pinterest.com/pin/774124930178227/", "outdoor hot cocoa bar")}

<h2>7. A Version With Coffee Add-Ins</h2>
<p>A splash of espresso or a coffee liqueur option turns the same basic setup into something that works for adults who want a bit more than straight cocoa.</p>
<p>Keeping the coffee add-ins clearly separate from the kid-friendly toppings keeps the bar easy for everyone to use correctly.</p>

<h2>8. A Full Cart Setup</h2>
<p>A rolling bar cart gives the whole station mobility, which is useful for moving it between the kitchen and a living room gathering spot.</p>
<p>This also naturally adds tiered storage for mugs, toppings and the cocoa base all in one spot.</p>
${pinPhoto("cart-setup.jpg", "Hot cocoa bar cart setup offering mobile, tiered styling", 736, 1007, "https://www.pinterest.com/pin/281543720326954/", "hot cocoa bar cart setup")}

<h2>9. A Peppermint Lover's Version</h2>
<p>Crushed peppermint, candy canes, and a peppermint-infused cocoa base build the whole station around one specific flavor.</p>
<p>This works especially well as a dedicated holiday-party station rather than an everyday setup.</p>
${pinPhoto("peppermint.jpg", "Peppermint-themed hot cocoa bar with festive candy cane accents", 736, 981, "https://www.pinterest.com/pin/120541727522488918/", "peppermint cocoa bar")}

<h2>10. A Chocolate Lover's Dream Version</h2>
<p>Chocolate shavings, multiple types of chocolate syrup, and a rich dark cocoa base turn this into a genuinely decadent version rather than a quick treat.</p>
<p>This suits a smaller, more intentional gathering better than a large casual one.</p>
${pinPhoto("chocolate-lovers.jpg", "Chocolate lover's dream cocoa bar with rich, decadent toppings", 736, 981, "https://www.pinterest.com/pin/3377768465514020/", "chocolate lover's cocoa bar")}

<h2>11. A Budget-Friendly Version</h2>
<p>A basic cocoa mix, marshmallows already on hand, and mismatched mugs from the cabinet cover the whole concept without any new purchases.</p>
<p>This proves the idea works regardless of budget &mdash; the setup and arrangement matter more than how much was spent on it.</p>
${pinPhoto("budget-friendly.jpg", "Budget-friendly hot cocoa bar using everyday kitchen items", 736, 920, "https://www.pinterest.com/pin/70437490429461/", "budget hot cocoa bar")}

<h2>12. A Small-Space Tray Version</h2>
<p>A single tray with everything condensed onto it works in an apartment or any kitchen without much counter space to spare.</p>
<p>This version proves the whole idea scales down just as easily as it scales up for a bigger party.</p>

<h2>13. A Version With Extra Seasonal Decor</h2>
<p>Pinecones, mini ornaments, and a bit of greenery around the station tie it into the rest of the home's winter decor.</p>
<p>This works well as an extension of existing holiday styling rather than a separate standalone setup.</p>
${pinPhoto("seasonal-decor.jpg", "Hot cocoa bar accented with seasonal decor like pinecones and greenery", 600, 800, "https://www.pinterest.com/pin/155796468350853079/", "seasonal hot cocoa bar decor")}

<h2>14. An Elegant Neutral Version</h2>
<p>Cream and white tones, simple glass or ceramic mugs, and understated toppings bring a more sophisticated feel to the whole setup.</p>
<p>This works especially well for an adult gathering or holiday party where a more polished look fits the occasion.</p>
${pinPhoto("elegant-neutral.jpg", "Elegant neutral cocoa bar with a sophisticated color palette", 640, 640, "https://www.pinterest.com/pin/563018695837979/", "elegant neutral cocoa bar")}

<h2>15. A Movie Night Version</h2>
<p>Paired with blankets, pillows and the actual movie setup, this version turns cocoa into part of a bigger cozy evening rather than a standalone drink station.</p>
<p>This works well set up right in the living room, close enough to the couch that nobody has to get up mid-movie.</p>
${pinPhoto("movie-night.jpg", "Movie night hot cocoa bar paired with cozy blankets and pillows", 375, 666, "https://www.pinterest.com/pin/57420963996740841/", "movie night cocoa bar")}

<h2>Mistakes Worth Avoiding</h2>
<p>Too many toppings without labels is the most common mistake &mdash; guests end up guessing instead of enjoying the station.</p>
<p>Skipping insulated mugs or a thermos for an outdoor setup means the drink goes cold before anyone finishes it.</p>
<p>Overcrowding a small tray or counter space creates more mess than charm.</p>

<h2>Keeping It Organized</h2>
<p>Grouping toppings into small labeled containers, rather than leaving bags and boxes out, keeps the whole station looking intentional.</p>
<p>A quick wipe-down and restock between uses keeps a hot cocoa bar that's out for the whole season from looking tired by the second week.</p>

<h2>Final Thoughts</h2>
<p>None of these 15 versions require starting from scratch every time.</p>
<p>Pick whichever style fits the occasion &mdash; budget, elegant, kid-friendly, or full cart &mdash; and adjust the toppings from there.</p>
<p>A hot cocoa bar is one of the simplest ways to make an ordinary winter evening feel like something a little more special.</p>
`;

module.exports = { body };
