// Body content for "14 Themed Dessert Board Ideas That Actually Disappear
// at Parties". Photos carried over from the source article (Pinterest-
// credited with a bare "Source" label, no photographer name, so plain
// photo() is used throughout). Two of the source's photos were genuinely
// off-topic — the one captioned for "Minimalist White Dessert Board" was
// actually a savory brie-and-olive cheese board, and the one for
// "Fall-Inspired Dessert Board" was a savory charcuterie board with
// salami and olives — both excluded entirely rather than reused (see the
// memory rule on dropping off-topic photos), leaving those two ideas
// without photos, spaced apart so no two gaps run back to back. A third
// photo captioned "Strawberry Shortcake" was actually a Valentine's
// Day/heart-themed board, so that idea was renamed to match what the
// photo actually shows instead of forcing a strawberry-shortcake claim
// onto it. Condensed 4 padded intro H2 sections down to 2, and dropped
// the source's extensive post-list "How to Style Like a Pro" / "How Much
// Dessert Is Enough" / "Why Themes Make Hosting Easier" bonus sections.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "dessert-board-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "dessert-board-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Classic Chocolate Lover's Board",
    paras: [
      "If chocolate had a fan club, this board would run it. It's the one theme that's never once drawn a complaint &mdash; and if a group exists that would complain about too much chocolate, they're simply not getting an invite.",
      "Build it in layers of chocolate intensity: dark, milk, and white chocolate bars, brownies and chocolate cake squares, chocolate-dipped pretzels, mini chocolate chip cookies, and a few cocoa-dusted truffles.",
      "Add strawberries or raspberries somewhere to cut the richness &mdash; people genuinely appreciate the break, and it keeps the whole board from feeling like a single long sugar crash.",
    ],
    photo: pinPhoto("chocolate-lovers.jpg", "Round chocolate dessert board with chocolate bars, strawberries, Oreos, chocolate chip cookies and chocolate wafer rolls", 735, 739, "https://www.pinterest.com/pin/1829656095332152/", "Classic Chocolate Lover's Board"),
  },
  {
    n: "02",
    title: "Fall-Inspired Dessert Board",
    paras: [
      "Fall desserts feel cozy, nostalgic, and almost impossible to resist. This theme reliably gets more compliments than most others on this list.",
      "Stick to warm, familiar flavors: apple slices or apple turnovers, pumpkin bars or mini pies, cinnamon cookies, caramel dip, and candied pecans or walnuts.",
      "Scatter a few small pumpkins or dried leaves around the board itself. The visual cues reinforce the theme without needing a single word of explanation.",
    ],
  },
  {
    n: "03",
    title: "Pink Party Dessert Board",
    paras: [
      "This one feels playful, joyful, and completely unapologetic about it. It's a natural fit for birthdays, bachelorette parties, or any just-because gathering that wants to feel a little celebratory.",
      "Frosted pink sugar cookies, pink wafer bars, fresh strawberries and raspberries, and candy in assorted pink shades all build toward the same cheerful look.",
      "Keep the flavors genuinely balanced even as the color goes all-in &mdash; pink looks cute, but flavor still has to carry its weight, as the strawberry-and-raspberry mix shown here proves.",
    ],
    photo: pinPhoto("pink-party.jpg", "Pink dessert board with frosted pink sugar cookies, pink wafer bars, fresh strawberries, raspberries and pink heart marshmallows", 736, 981, "https://www.pinterest.com/pin/1759287348627967/", "Pink Party Dessert Board"),
  },
  {
    n: "04",
    title: "Minimalist White Dessert Board",
    paras: [
      "This one surprises people. It looks effortless, but a true white-on-white board actually takes more intention than a colorful one, since there's nowhere for sloppy choices to hide.",
      "Stay within soft neutrals and whites: vanilla cupcakes, white chocolate bark, powdered sugar donuts, coconut macaroons, and a pile of marshmallows.",
      "White ceramic dishes and clear glass keep the whole thing feeling airy rather than flat. Texture ends up doing more visual work here than color ever could.",
    ],
  },
  {
    n: "05",
    title: "Kids Birthday Candy Explosion",
    paras: [
      "Yes, it's chaotic. Yes, it's completely worth it. This board exists purely to generate joy, so lean all the way into the madness rather than fighting it.",
      "Colorful candies and gummies, cupcakes with bold frosting, cake pops, marshmallows, and chocolate coins or fun-sized bars all belong here in generous quantity.",
      "Organize loosely by color zone to keep it from reading as a candy store explosion &mdash; organized chaos is still chaos, just considerably prettier, like the sprinkle cake and sour gummies shown here.",
    ],
    photo: pinPhoto("kids-birthday-candy.jpg", "Colorful kids birthday dessert board with a sprinkle-covered mini cake, frosted sugar cookies, chocolate bark, gummy worms and candy", 736, 981, "https://www.pinterest.com/pin/422281210889054/", "Kids Birthday Candy Dessert Board"),
  },
  {
    n: "06",
    title: "Holiday-Themed Board",
    paras: [
      "Holiday dessert boards feel genuinely magical without much effort, mostly because the theme already exists on its own. The job is simply to lean into the season rather than fight it.",
      "Start with seasonal colors and flavors and the board tends to build itself from there &mdash; winter holidays lean chocolate, peppermint, and spice, while the red-and-green mix shown here goes all in on candy canes, chocolate kisses, and reindeer cookies.",
      "People expect certain flavors at certain times of year. Meeting that expectation, then adding one small unexpected detail on top, is really the entire strategy.",
    ],
    photo: pinPhoto("holiday-themed.jpg", "Christmas dessert board with reindeer and snowman cookies, candy canes, red and green M&Ms, Oreos and foil-wrapped chocolate kisses", 576, 1024, "https://www.pinterest.com/pin/422281211192293/", "Holiday Christmas Dessert Board"),
  },
  {
    n: "07",
    title: "Elegant Black and Gold Board",
    paras: [
      "This one reads as grown-up celebration instantly. It works beautifully for anniversaries, engagement parties, New Year's Eve, or any milestone that calls for something a little more polished.",
      "Focus on rich flavors and clean presentation: chocolate truffles, Ferrero Rocher, chocolate-covered pretzels, wafer bars, and a few decorative touches in gold foil.",
      "A dark slate board or black tray makes gold accents genuinely pop, like the celebration board shown here. Negative space matters more here than anywhere else on this list &mdash; crowding it kills the luxury effect fast.",
    ],
    photo: pinPhoto("black-gold.jpg", "Elegant black and gold New Year's dessert board with Ferrero Rocher, chocolate-covered pretzels, wafer bars and chocolate truffles on a dark wood board", 736, 736, "https://www.pinterest.com/pin/277675133271462859/", "Black and Gold Dessert Board"),
  },
  {
    n: "08",
    title: "Pastel Party Board",
    paras: [
      "This is the go-to for baby showers and spring gatherings. Soft colors make everything feel instantly cheerful without requiring much else from the rest of the room.",
      "Macarons in soft pinks and golds, sugar cookies, mini frosted treats, and marshmallows all work together once the palette stays consistent.",
      "Stick to two or three soft shades at most, like the pink-and-gold board shown here. Go beyond that and the effect tips from curated into chaotic fast.",
    ],
    photo: pinPhoto("pastel-party.jpg", "Pastel pink and gold dessert board with frosted donuts, macarons, meringues and candy on a woven tray", 736, 736, "https://www.pinterest.com/pin/2111131073190448/", "Pastel Party Dessert Board"),
  },
  {
    n: "09",
    title: "Summer Fruit Board",
    paras: [
      "When it's hot outside, heavy desserts stop sounding appealing fast. This board solves that by leaning almost entirely into fresh, cold fruit instead.",
      "Fresh berries, sliced stone fruit, a yogurt or honey dip, and a few light cookies keep the whole thing feeling bright rather than indulgent &mdash; pairing the fruit with a little cheese and crackers, like the spread shown here, stretches it even further.",
      "Keep everything chilled until the very last minute. A melted, warm fruit board loses its entire appeal in about ten minutes flat.",
    ],
    photo: pinPhoto("summer-fruit.jpg", "Summer fruit board with fresh cherries, sliced peaches, strawberries, cheese slices, crackers and walnuts on a round wood board", 683, 1024, "https://www.pinterest.com/pin/6192518232467701/", "Summer Fruit Dessert Board"),
  },
  {
    n: "10",
    title: "A Valentine's Sweetheart Board",
    paras: [
      "Nothing says the occasion quite like heart shapes everywhere you look. This is the board to build for Valentine's Day, an engagement, or any celebration that wants a little romance built in.",
      "Heart-shaped jam cookies, chocolate-dipped strawberries, pink and red macarons, conversation hearts, and fresh raspberries and cherries all lean into the theme without needing much explanation.",
      "Serving pieces matter here &mdash; small heart-shaped bowls scattered across the board, like the ones shown here, repeat the motif without saying a word.",
    ],
    photo: pinPhoto("strawberry-shortcake.jpg", "Pink and red Valentine's dessert board with heart-shaped jam cookies, chocolate-covered strawberries, macarons and cherries in heart-shaped bowls", 683, 1024, "https://www.pinterest.com/pin/1688918606929510/", "Valentine's Sweetheart Dessert Board"),
  },
  {
    n: "11",
    title: "Movie Night Board",
    paras: [
      "This one feels cozy, nostalgic, and reliably popular. People genuinely hover around it the way moths hover around a porch light.",
      "Mix sweet treats with movie-night classics: chocolate-covered popcorn, candy bars broken into chunks, brownie bites, mini donuts, and gummy candies.",
      "Small paper cups or popcorn boxes, like the ones shown here, add an interactive element people love &mdash; and as a bonus, fewer sticky fingers end up on the shared desserts.",
    ],
    photo: pinPhoto("movie-night.jpg", "Movie night dessert board with popcorn in paper boxes, gummy bears, chocolate pretzels, cookies, M&Ms and licorice", 736, 981, "https://www.pinterest.com/pin/774124930445908/", "Movie Night Dessert Board"),
  },
  {
    n: "12",
    title: "Chocolate and Caramel Board",
    paras: [
      "This one feels indulgent and comforting at the same time &mdash; genuinely rich, but balanced enough that it doesn't tip into overwhelming.",
      "Build the flavor layers with caramel brownies, chocolate cookies, pretzels for dipping, chocolate squares, and sea salt caramels.",
      "Add sea salt somewhere on the board, no exceptions. It makes everything taste sharper and more complete, the way the caramel dip and chocolate-dipped strawberries shown here prove on their own.",
    ],
    photo: pinPhoto("chocolate-caramel.jpg", "Dark dessert board with chocolate-dipped strawberries, caramel dip, brownies, macarons and coconut-dusted chocolate truffles", 683, 1024, "https://www.pinterest.com/pin/837458493249405707/", "Chocolate and Caramel Dessert Board"),
  },
  {
    n: "13",
    title: "Breakfast-for-Dessert Board",
    paras: [
      "This one feels a little rebellious in the best way. Who actually decided dessert has to wait until after dinner, anyway?",
      "Mix breakfast classics with a sweeter twist: mini pancakes or waffles, small jars of maple syrup, fresh berries, chocolate spread, and cinnamon rolls or pastries.",
      "Arrange everything so guests can build their own plate, the way the waffle-and-berry spread shown here is laid out. Interactive boards always end up feeling more fun than a pre-plated one.",
    ],
    photo: pinPhoto("breakfast-dessert.jpg", "Breakfast dessert board with powdered sugar waffles, fresh strawberries, blueberries, maple syrup and chocolate dipping sauce", 736, 981, "https://www.pinterest.com/pin/5559199537801245/", "Breakfast-for-Dessert Board"),
  },
  {
    n: "14",
    title: "International Dessert Board",
    paras: [
      "This theme feels adventurous without being intimidating &mdash; a genuinely good choice whenever the goal is something that doesn't look like every other board on Instagram.",
      "Choose desserts from different regions but keep every portion small: French macarons, Italian biscotti, Turkish delight, churro bites, and mini baklava pieces all work in miniature.",
      "Label items with small cards if you can manage it. People genuinely enjoy learning while they eat, and it makes a varied board like this one feel curated rather than random.",
    ],
    photo: pinPhoto("international.jpg", "Elegant dessert board with macarons, chocolate truffles, meringues, caramel dip, fresh berries and assorted chocolates on a wood board", 683, 1024, "https://www.pinterest.com/pin/251638697929468063/", "International Dessert Board"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || ""}`;
}

const body = `
<p>Something that looks impressive, tastes genuinely good, and doesn't require six hours of baking is exactly why themed dessert boards have quietly become the move for parties, family nights, and every "I should probably bring something" moment in between.</p>
<p>The first dessert board doesn't have to be perfect. Cookies, brownies, and chocolate thrown on a wooden board with a little confidence go a surprisingly long way &mdash; dessert boards were never really about precision. They're about theme, balance, and committing to the bit.</p>
${photo("hero.jpg", "Round dessert board with cookies, brownies, strawberries, macarons, pretzel sticks and caramel dip arranged by color", 736, 920)}

<h2>Why a Theme Changes Everything</h2>
<p>Food genuinely tastes better when it looks put together, and that's not imagination &mdash; a theme gives a dessert board real structure, and structure is what makes the whole thing feel elevated instead of thrown together. A real theme shows up everywhere on the board, not just in one fancy centerpiece dessert. The consistency matters more than the quantity: aim for a tight, intentional mix built around one flavor profile, a repeating color palette, and enough texture variety that nothing feels flat. Balance matters just as much &mdash; something crunchy, something soft, something creamy, something fresh. Skip one of those categories and people notice, even if they can't quite say why.</p>
${pinPhoto("intro-why-themed.jpg", "Round dessert board with chocolate pretzels, strawberries, Nutella dip, marshmallows and cinnamon sticks on a wicker tray", 735, 866, "https://www.pinterest.com/pin/248823948158215047/", "Why Themed Dessert Boards Work")}

<h2>Planning One Without the Stress</h2>
<p>Pick the occasion first. A kids' birthday board looks nothing like a bridal shower board, and fighting that instinct never works out. Figure out who's eating it, whether the mood is casual or fancy, and whether it should feel playful or polished &mdash; half the remaining decisions disappear once those three things are settled. From there, choose one hero dessert &mdash; a frosted cake, decorated cupcakes, chocolate-dipped strawberries, a showstopper pie &mdash; and build everything else around it.</p>
<p>The two mistakes worth avoiding from the start: overcrowding the board, which just makes people hesitant to grab anything (leave breathing room; empty space actually makes desserts look more tempting), and forgetting dietary options, since a gorgeous board half your guests can't eat isn't actually a win. A gluten-free option, a nut-free dessert, and plenty of fruit-based sweets cover most of it.</p>
${pinPhoto("intro-consistency.jpg", "Dark tray dessert board with chocolate-dipped wafer rolls, shortbread cookies, strawberries, chocolate Nutella dip and chocolate cupcakes", 736, 981, "https://www.pinterest.com/pin/2814818512749746/", "Consistent Dessert Board Styling")}

<h2>14 Themed Dessert Boards Worth Building</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of this requires perfection, just intention. Guests rave over boards built from grocery-store desserts and a little creativity all the time &mdash; the magic comes from how everything works together, not from how fancy any single item looks on its own. Start from the center with your biggest item, use height to keep things from looking flat, and repeat a color or ingredient somewhere else on the board for cohesion.</p>
<p>Pick a theme that actually excites you, build around it, leave some breathing room, and don't overthink the rest. Dessert should feel joyful &mdash; and if someone goes back for seconds, the board did its job.</p>
`;

module.exports = { body };
