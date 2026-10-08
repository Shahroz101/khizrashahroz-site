// Body content for "18 Grazing Boards Built Around the Occasion, Not
// Just the Aesthetic". Numbered idea-list format with a condensed
// intro covering the source's build/style sections, since both had
// photos. Source title claimed 19 ideas but idea 16 was genuinely
// missing from the source (a numbering gap with no orphaned photo,
// unlike the nursery source earlier this session), so this covers 18
// real ideas. Organized by occasion and dietary need (vegan, kids'
// party, movie night, budget-friendly) rather than aesthetic/style,
// which differentiates it from the existing mothers-day-grazing-
// board-ideas article's style-based 14-idea list (floral, soft
// neutrals, luxe, personalized). Idea 18 (build-your-own) had no
// source photo, kept text-only. Every other photo had a real
// Pinterest pin link, so all are credited. Rewritten from scratch in
// the site's calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "grazing-board-by-occasion", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}">Pinterest &mdash; ${label}</a></figcaption>
    </figure>`;
}

const body = `
<p>A grazing board isn't one single thing &mdash; it changes shape entirely depending on who's actually eating from it.</p>
<p>A kids' birthday board and a game night board solve completely different problems, even though both start with a platter and a knife.</p>
<p>These 18 ideas are organized around that occasion, not around a color scheme or aesthetic.</p>
<p>Pick the one that matches the actual event first, then style from there.</p>
${pinPhoto("hero.jpg", "Holiday charcuterie wreath board with cheese, meats and berries", 736, 683, "https://www.pinterest.com/pin/422281212253329/", "holiday charcuterie wreath")}

<h2>Building a Board That Actually Works</h2>
<p>Balance matters more than variety for its own sake &mdash; a mix of salty, sweet, creamy and crunchy keeps a board interesting bite after bite.</p>
<p>Portioning doesn't need to be exact. A rough guide of two to three ounces of meat and cheese per person covers most gatherings without over-planning.</p>
<p>Starting with the largest items first, then filling gaps with smaller ones, makes the visual layout come together faster than planning it item by item.</p>
<p>A board that's easy to eat from without a lot of mess tends to get finished, not just admired.</p>
${pinPhoto("intro-build-1.jpg", "Grazing board with balanced salty, sweet and creamy elements", 736, 981, "https://www.pinterest.com/pin/1688918605210134/", "balanced grazing board")}
${pinPhoto("intro-build-2.jpg", "Well-proportioned charcuterie board with varied textures", 736, 920, "https://www.pinterest.com/pin/13933080092635654/", "well-proportioned board layout")}

<h2>Styling Without the Stress</h2>
<p>Starting with a few anchor items &mdash; a small bowl, a wedge of cheese, a cluster of grapes &mdash; and filling in around them beats trying to plan every placement in advance.</p>
<p>Leaving small gaps isn't a mistake. A little visible board surface actually reads as more intentional than wall-to-wall food.</p>
<p>A board doesn't need to be perfect to look finished. A few greens or herbs tucked into the gaps cover most styling sins.</p>
${pinPhoto("intro-style.jpg", "Styled breakfast grazing bar with fresh ingredients", 1024, 576, "https://www.pinterest.com/pin/4292562140061926/", "styled breakfast board")}

<h2>1. The Classic Charcuterie Board</h2>
<p>Cured meats, a few cheeses, crackers and a jam all built around the traditional format.</p>
<p>This is the safest choice for a mixed crowd with no specific dietary needs to plan around.</p>
<p>It also scales easily &mdash; small for a casual get-together, large for an open house.</p>
<p>The reliable default when nothing else on this list fits the occasion better.</p>
${pinPhoto("classic-charcuterie.jpg", "Classic charcuterie board for a holiday party gathering", 736, 981, "https://www.pinterest.com/pin/381398662214846245/", "classic charcuterie spread")}

<h2>2. The Cheese Lover's Board</h2>
<p>Built around cheese variety first &mdash; soft, hard, aged, fresh &mdash; with everything else playing a supporting role.</p>
<p>This suits a smaller, more focused gathering where the cheese itself is the conversation piece.</p>
<p>A few contrasting textures and ages keep the board from feeling one-note despite the narrow focus.</p>
<p>Crackers and a bit of honey round it out without competing for attention.</p>
${pinPhoto("cheese-lovers.jpg", "Elegant cheese lover's grazing platter with varied selections", 701, 1024, "https://www.pinterest.com/pin/914862420529250/", "cheese-focused grazing platter")}

<h2>3. The Meat Lover's Board</h2>
<p>Salami, prosciutto, soppressata and other cured meats take center stage, with cheese and crackers filling in around the edges.</p>
<p>This suits a gathering where heartier, protein-forward food is the expectation.</p>
<p>Folding or rolling the meats adds visual height and makes the board easier to pick from.</p>
<p>A good fit for a more casual, high-energy event like a game watch.</p>
${pinPhoto("meat-lovers.jpg", "Meat-focused charcuterie board with variety of cured meats", 736, 981, "https://www.pinterest.com/pin/307792955805336027/", "meat lover's charcuterie board")}

<h2>4. The Fruit and Cheese Board</h2>
<p>A lighter option built around fresh and dried fruit paired with a few complementary cheeses.</p>
<p>This suits a daytime event or a gathering where a heavier meat-forward board wouldn't fit the mood.</p>
<p>Seasonal fruit keeps this one changing throughout the year without much extra planning.</p>
<p>A good option for anyone wanting a board that still looks indulgent without being heavy.</p>
${pinPhoto("fruit-cheese.jpg", "Fresh fruit and cheese grazing board arrangement", 1024, 768, "https://www.pinterest.com/pin/105834659989416197/", "fruit and cheese board")}

<h2>5. The Vegetarian Board</h2>
<p>Cheese, nuts, fruit, roasted vegetables and good bread replace the meat entirely without losing the board's visual richness.</p>
<p>This covers a dietary need directly, rather than treating it as an afterthought tucked into a corner of a meat-forward board.</p>
<p>Marinated or roasted vegetables add the savory depth that meat usually provides.</p>
<p>Worth building as its own dedicated board rather than a smaller side option.</p>
${pinPhoto("vegetarian.jpg", "Colorful vegetarian grazing board with roasted vegetables and cheese", 1024, 683, "https://www.pinterest.com/pin/14073817581200662/", "vegetarian grazing board")}

<h2>6. The Vegan Board</h2>
<p>Plant-based cheeses, hummus, olives, nuts and fresh produce build a board that's fully dairy- and meat-free.</p>
<p>This requires a bit more planning than a standard board, since substitutions need checking for taste and texture, not just the label.</p>
<p>A good vegan board doesn't read as a compromise &mdash; the variety carries it just as well as a traditional one.</p>
<p>Worth having a version of this ready whenever a guest list includes dietary restrictions.</p>
${pinPhoto("vegan.jpg", "Beautiful plant-based vegan charcuterie board presentation", 683, 1024, "https://www.pinterest.com/pin/158611218123726337/", "vegan charcuterie board")}

<h2>7. The Breakfast Board</h2>
<p>Pastries, fresh fruit, yogurt, granola and a soft cheese or two turn a grazing board into a brunch centerpiece.</p>
<p>This suits a morning gathering where a traditional charcuterie spread wouldn't fit the time of day.</p>
<p>Mini muffins or croissants add height and visual interest the same way meats do on an evening board.</p>
<p>A genuinely different board category, not just a lighter version of the classic one.</p>
${pinPhoto("breakfast.jpg", "Brunch charcuterie board with pastries and fresh fruit", 683, 1024, "https://www.pinterest.com/pin/70437487741688/", "brunch grazing board")}

<h2>8. The Dessert Board</h2>
<p>Chocolate, cookies, fresh berries and a few small treats replace the savory items entirely.</p>
<p>This works well as a final course after a meal, or as the main event at a casual gathering.</p>
<p>Varying size and height across the treats keeps it visually interesting the same way a savory board does.</p>
<p>A natural pairing with the breakfast board above for an all-day spread.</p>
${pinPhoto("dessert.jpg", "Decadent dessert charcuterie board with sweet treats", 574, 1024, "https://www.pinterest.com/pin/36451078229740763/", "dessert grazing board")}

<h2>9. The Chocolate Lover's Board</h2>
<p>A narrower, more focused version of the dessert board, built entirely around chocolate in different forms.</p>
<p>Dark, milk and white chocolate pieces, chocolate-covered fruit, and a few chocolate-adjacent treats keep the theme tight.</p>
<p>This suits a smaller, more intimate gathering or a specific celebration built around chocolate as the theme.</p>
<p>Simple to execute, since the ingredient list stays narrow by design.</p>
${pinPhoto("chocolate.jpg", "Indulgent chocolate-themed grazing board selection", 1024, 683, "https://www.pinterest.com/pin/280700989271117422/", "chocolate lover's board")}

<h2>10. The Mediterranean Board</h2>
<p>Hummus, olives, feta, pita and marinated vegetables build a board around a specific regional flavor profile.</p>
<p>This suits a gathering where guests want something a little lighter and herb-forward than a traditional charcuterie spread.</p>
<p>It also happens to cover vegetarian needs naturally, without feeling like a substitution board.</p>
<p>A good option when the usual cured-meat format feels overdone.</p>
${pinPhoto("mediterranean.jpg", "Mediterranean-style charcuterie board with hummus and olives", 1024, 683, "https://www.pinterest.com/pin/3448137209842268/", "mediterranean grazing board")}

<h2>11. The Picnic Board</h2>
<p>Built for transport first &mdash; sturdier items that hold up outside a fridge for a few hours.</p>
<p>Hard cheeses, cured meats, dried fruit and crackers all travel better than soft cheese or anything that needs to stay cold.</p>
<p>A flat, portable surface (a cutting board, a tray with a lid) matters as much as what's on it.</p>
<p>Worth planning around the actual outdoor conditions, not just the food itself.</p>
${pinPhoto("picnic.jpg", "Portable picnic grazing board ready for outdoor dining", 576, 1024, "https://www.pinterest.com/pin/315252042687334299/", "picnic charcuterie board")}

<h2>12. The Holiday Board</h2>
<p>Seasonal shapes, festive colors and holiday-specific garnishes turn a standard board into something built for the occasion.</p>
<p>This works for any major holiday, not just winter ones &mdash; the format adapts to whatever seasonal touches fit.</p>
<p>A themed shape (a wreath, a tree, a heart) using the arrangement itself adds personality without extra ingredients.</p>
<p>One of the more photogenic boards on this list, worth the extra arranging time.</p>
${pinPhoto("holiday.jpg", "Festive holiday cheese board with seasonal garnishes", 683, 1024, "https://www.pinterest.com/pin/36380709484667788/", "festive holiday cheese board")}

<h2>13. The Kids' Party Board</h2>
<p>Familiar, mild flavors &mdash; mild cheese, crackers, fruit, a few mini treats &mdash; replace anything too adult-leaning.</p>
<p>Cutting items into fun shapes helps, but isn't strictly necessary if the ingredient choices are right.</p>
<p>This solves the real problem with a kids' gathering: appealing to picky eaters without a separate kids' table.</p>
<p>Keeping portions small and bite-sized matters more here than on any adult-focused board.</p>
${pinPhoto("kids-party.jpg", "Fun and colorful kids party grazing board with mild flavors", 736, 981, "https://www.pinterest.com/pin/104638391338578640/", "kids party grazing board")}

<h2>14. The Movie Night Board</h2>
<p>Popcorn, candy, chips and easy-to-eat snacks replace the traditional charcuterie format entirely.</p>
<p>This is built for eating in low light without utensils, which changes what actually belongs on it.</p>
<p>A mix of sweet and salty covers most movie-night cravings in one spread.</p>
<p>A genuinely different occasion-board category from everything else on this list.</p>
${pinPhoto("movie-night.jpg", "Fun movie night snack board with popcorn and treats", 683, 1024, "https://www.pinterest.com/pin/30117891251067457/", "movie night snack board")}

<h2>15. The Game Night Board</h2>
<p>Easy, one-handed finger foods that don't interfere with holding cards or a controller.</p>
<p>Cubed cheese, pretzels, nuts and small meat rolls all work without needing a plate.</p>
<p>This suits a longer gathering where guests graze steadily rather than eating all at once.</p>
<p>Durability matters here too &mdash; items that hold up sitting out for a few hours work best.</p>
${pinPhoto("game-night.jpg", "Easy-to-eat game night grazing board with finger foods", 693, 1024, "https://www.pinterest.com/pin/2744449769527242/", "game night grazing board")}

<h2>16. The Budget-Friendly Board</h2>
<p>A full, generous-looking board doesn't require premium ingredients throughout.</p>
<p>A mix of one or two higher-end items with affordable staples &mdash; crackers, seasonal fruit, a basic cheese &mdash; still reads as abundant.</p>
<p>Arrangement does more visual work than cost here &mdash; a well-filled board looks generous regardless of the price per item.</p>
<p>Worth keeping in rotation for any gathering where the guest list is large and the budget isn't.</p>
${pinPhoto("budget-friendly.jpg", "Budget-friendly party food spread with affordable ingredients", 717, 1024, "https://www.pinterest.com/pin/2111131073332147/", "budget-friendly party spread")}

<h2>17. The Minimalist Board</h2>
<p>A handful of carefully chosen items, with real negative space between them, instead of a packed, edge-to-edge spread.</p>
<p>This suits a smaller, more intimate gathering where quality matters more than sheer volume.</p>
<p>Fewer, better ingredients hold up to this kind of sparse arrangement better than a crowded one would.</p>
<p>A genuinely different visual approach from every other board on this list.</p>
${pinPhoto("minimalist.jpg", "Minimalist grazing board with carefully selected items", 683, 1024, "https://www.pinterest.com/pin/703756188880007/", "minimalist grazing board")}

<h2>18. The Build-Your-Own Board</h2>
<p>Instead of a pre-arranged spread, lay out separate components and let guests build their own small plate.</p>
<p>This solves a real problem at a larger gathering &mdash; dietary preferences and portion sizes vary more than one fixed board can account for.</p>
<p>It also turns the board into an activity, not just food sitting on a table.</p>
<p>Worth considering for any event large or mixed enough that one fixed arrangement can't please everyone.</p>

<h2>Mistakes Worth Avoiding</h2>
<p>Overcrowding the board kills the visual appeal just as fast as leaving it too sparse &mdash; balance matters more than maximizing quantity.</p>
<p>Skipping labels on anything unusual leads to guests avoiding items they'd otherwise try.</p>
<p>Prepping everything at the last minute adds unnecessary stress; most components can be arranged well ahead of time.</p>
<p>Ignoring dietary needs entirely, rather than building one board that actually accounts for them, is the easiest way to leave guests out.</p>

<h2>Final Thoughts</h2>
<p>The right grazing board starts with the occasion, not the aesthetic.</p>
<p>A kids' party and a game night call for completely different ingredients, even if the format looks similar on the surface.</p>
<p>Pick the board that matches what's actually happening, then style it from there.</p>
<p>That order makes the whole process faster and the result more useful to the people actually eating from it.</p>
`;

module.exports = { body };
