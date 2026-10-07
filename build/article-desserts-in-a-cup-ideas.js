// Body content for "17 Desserts in a Cup for Every Kind of Party".
// Source had only 2 usable photos total (hero + Cookie Dough Cups) for
// 17 ideas — a genuine source limitation, not a curation choice, so
// the other 16 ideas run text-only. Distinct serving format (individual
// sweet cups) from dessert-board-ideas (shared board) and
// charcuterie-cup-ideas (savory cups).

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "desserts-in-a-cup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "desserts-in-a-cup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Classic Oreo",
    paras: [
      "This one practically never fails, at a birthday party, an office gathering, or any last-minute event that needs something foolproof.",
      "Crushed Oreo crumbs bring the crunch, a creamy filling balances out the sweetness, and the layers look genuinely impressive without any real effort.",
      "These don't need to feel fancy to work &mdash; they just consistently disappear first, which says most of what needs to be said.",
    ],
  },
  {
    n: "02",
    title: "Strawberry Cheesecake",
    paras: [
      "For something that reads as elegant without much actual effort, strawberry cheesecake cups deliver reliably and disappear fast.",
      "The tangy cheesecake layer cuts the sweetness perfectly, and fresh strawberries add color along with genuine freshness.",
      "It manages to feel light and indulgent at the same time, which instantly elevates whatever dessert table it's sitting on.",
    ],
  },
  {
    n: "03",
    title: "Chocolate Mousse",
    paras: [
      "Chocolate mousse cups feel genuinely luxurious even when the recipe itself stays simple.",
      "Texture matters more than anything here &mdash; light, airy mousse melts quickly and leaves people wanting another instead of feeling weighed down.",
      "A little shaved chocolate or a few fresh berries on top turns a simple cup into something that reads as considerably more sophisticated.",
    ],
  },
  {
    n: "04",
    title: "Lemon Cream",
    paras: [
      "Lemon desserts have a way of waking people up, especially after a heavier meal where something lighter is genuinely welcome.",
      "The citrus cuts through richness and resets the palate in a way few other flavors manage as cleanly.",
      "These cups tend to disappear faster than expected &mdash; the freshness makes them an easy follow-up even after a big dinner.",
    ],
  },
  {
    n: "05",
    title: "Tiramisu",
    paras: [
      "Tiramisu in a cup skips all the stress of cutting perfect slices while keeping every bit of the actual flavor intact.",
      "The layers stay genuinely intact in cup form, and the coffee flavor only deepens the longer it sits &mdash; tiramisu that's made a day ahead often tastes even better.",
      "Serve it once and it tends to get requested again at the next gathering, assuming it's not served too late for guests who'd rather sleep that night.",
    ],
  },
  {
    n: "06",
    title: "Chocolate Peanut Butter",
    paras: [
      "Chocolate and peanut butter rarely disagree with each other, and that holds true in cup form just as much as anywhere else.",
      "The salty peanut butter balances out the rich chocolate almost perfectly, which tends to get an instant reaction on the first bite.",
      "It's hard to find someone who actively dislikes this combination &mdash; which makes it a safe, crowd-pleasing choice for almost any gathering.",
    ],
  },
  {
    n: "07",
    title: "Banana Pudding",
    paras: [
      "Banana pudding cups feel like a warm hug in dessert form, and they tend to remind people of home almost immediately.",
      "Layers of vanilla pudding, banana slices and cookies build a soft, genuinely creamy texture that's hard not to love.",
      "People don't just eat these &mdash; they remember them, which says something about how nostalgic the flavor actually is.",
    ],
  },
  {
    n: "08",
    title: "Funfetti Cake",
    paras: [
      "If happiness had a flavor, this would probably be it. Funfetti cups read as celebration before anyone even takes a bite.",
      "Colorful sprinkles shift the whole mood of a dessert table instantly, trading polish for genuine playfulness.",
      "It's nearly impossible not to smile a little at the sight of sprinkles, which makes this an easy pick for a birthday or kids' event.",
    ],
  },
  {
    n: "09",
    title: "Chocolate Chip Cookie Dough",
    paras: [
      "Edible cookie dough deserves its own spotlight here &mdash; no baking required, and genuinely no regrets afterward.",
      "Safe-to-eat cookie dough layered with cream creates instant indulgence, the kind that makes guests skip dinner just to save room for it.",
      "These cups rarely survive long on a dessert table once people realize what's actually in them.",
    ],
    photo: pinPhoto("cookie-dough-cups.jpg", "Chocolate chip cookie dough dessert cups layered with cream", 576, 1024, "https://www.pinterest.com/pin/604115737559039246/", "Chocolate Chip Cookie Dough Cups"),
  },
  {
    n: "10",
    title: "Caramel Apple Cheesecake",
    paras: [
      "This one feels like fall in dessert form, and it gets requested well outside of autumn too.",
      "Sweet apples, creamy cheesecake and rich caramel balance each other out, landing as cozy without ever feeling heavy.",
      "It reads as thoughtful and intentional rather than thrown together, even though the actual assembly is genuinely simple.",
    ],
  },
  {
    n: "11",
    title: "Chocolate Covered Strawberry",
    paras: [
      "This dessert looks considerably fancier than it actually is to put together.",
      "Fresh strawberries paired with chocolate mousse or ganache feel refined without requiring any complicated technique.",
      "People consistently assume more effort went into these than actually did, which is really the whole appeal.",
    ],
  },
  {
    n: "12",
    title: "Key Lime Pie",
    paras: [
      "Key lime cups bring genuine brightness to a dessert table that otherwise leans sweet across the board.",
      "The tart lime filling cuts through richness and refreshes the palate, especially useful after a heavier meal.",
      "For anyone craving dessert that doesn't feel weighed down afterward, this is consistently the answer.",
    ],
  },
  {
    n: "13",
    title: "Red Velvet",
    paras: [
      "Red velvet cups bring real drama to a dessert table, in the best possible way.",
      "That deep red color draws people in immediately, and paired with cream cheese frosting, it tastes every bit as good as it looks.",
      "It's not unusual to see someone choose this one purely based on appearance before ever tasting it.",
    ],
  },
  {
    n: "14",
    title: "Chocolate Mint",
    paras: [
      "This flavor combination tends to divide opinions right up until people actually taste it.",
      "Mint adds a freshness that cuts through chocolate's richness, landing as bold but genuinely refreshing rather than overwhelming.",
      "It leaves a clean finish instead of the heavy, sluggish feeling some richer desserts leave behind.",
    ],
  },
  {
    n: "15",
    title: "Mango Cream",
    paras: [
      "Mango brings an instant tropical feeling to a dessert table, regardless of the actual season or occasion.",
      "The natural sweetness and bright color lift the whole spread, reading as light and genuinely refreshing.",
      "It has a way of feeling sunny even at an indoor gathering, which is part of why it stands out among richer options.",
    ],
  },
  {
    n: "16",
    title: "Coffee Mocha",
    paras: [
      "Coffee lovers tend to find these first at any dessert table, without needing much direction.",
      "The slight bitterness of coffee balances out the sweetness beautifully, which makes it a strong choice to serve after dinner specifically.",
      "It reads as indulgent without tipping into excess, and it tends to keep guests lingering a little longer at the table.",
    ],
  },
  {
    n: "17",
    title: "S'mores",
    paras: [
      "The fun one gets saved for last. Chocolate, marshmallow and graham cracker crumbs deliver instant nostalgia in cup form.",
      "It's built for smiles rather than quiet appreciation &mdash; a genuinely playful way to close out a dessert spread.",
      "Nothing about it feels messy despite the classic campfire association, which makes it an easy crowd-pleaser indoors too.",
    ],
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
<p>Desserts in a cup solve more party problems than people realize. No awkward slicing, no fighting over the last corner piece, and every guest gets a perfectly portioned helping without anyone hovering around a knife.</p>
<p>The format also looks genuinely impressive with very little styling effort &mdash; clear cups show off the layers, and the layers themselves do most of the visual work on their own.</p>
${photo("hero.jpg", "Assortment of individually portioned dessert cups styled for a party", 1312, 736)}

<h2>Choosing the Right Dessert Cup</h2>
<p>Matching the dessert to the actual vibe of the event matters more than picking whatever looks best on its own &mdash; a bright mango cream fits a summer gathering better than a rich red velvet does, and vice versa for something cozier. Portion size isn't something to guess at either; a cup that's too small reads as stingy, while one that's too large tends to go half-eaten and wasted.</p>
<p>A creamy base that holds its shape once layered, paired with something crunchy for contrast, is the formula behind nearly every cup on this list. Balancing sweet against a touch of salt, tart, or bitter is what keeps any of these from tasting one-note by the third bite.</p>

<h2>17 Desserts in a Cup</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these require a trip to a specialty bakery or a complicated recipe. The format itself does most of the heavy lifting &mdash; layer a few good components into a clear cup, and it reads as considered no matter how simple the actual assembly was.</p>
<p>Pick two or three that fit the occasion rather than trying to serve all seventeen at once. A tight, well-chosen selection beats an overwhelming spread every time.</p>
`;

module.exports = { body };
