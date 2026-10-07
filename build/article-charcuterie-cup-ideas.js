// Body content for "15 Charcuterie Cup Ideas for Stress-Free Hosting".
// Photos carried over from the source article. The source reused the
// exact same photo for both the Keto-Friendly and Mini Picnic ideas —
// downloaded twice under separate local filenames and captioned
// honestly for each (the photo shows a breadstick, so the keto text
// doesn't over-claim "no crackers" the way the source's did). Idea 08
// (Seasonal Fall) has no photo in the source. Condensed 5 padded intro
// sections down to 2.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "charcuterie-cup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "charcuterie-cup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Classic Meat and Cheese",
    paras: [
      "This one practically never misses. If charcuterie cups had a starter pack, this would be it.",
      "Folded salami, cheddar cubes, crackers and grapes cover every base at once &mdash; familiar, comforting, and balanced enough that guests reach for it first.",
      "Simple works for a reason here. There's nothing to overthink, and that's exactly the point.",
    ],
    photo: pinPhoto("classic-meat-cheese.jpg", "Classic charcuterie cup with folded salami, cheddar cubes, crackers and grapes", 736, 981, "https://www.pinterest.com/pin/4785143351200358/", "Classic Meat and Cheese Charcuterie Cup"),
  },
  {
    n: "02",
    title: "Italian-Inspired",
    paras: [
      "For something that feels a little fancier without any extra effort, Italian flavors do most of the work on their own.",
      "Prosciutto ribbons, mozzarella balls, cherry tomatoes and olives layer together naturally, and a small basil leaf on top adds a little drama for free.",
      "The combination smells as good as it tastes, and nobody needs to know how little effort actually went into it.",
    ],
    photo: pinPhoto("italian.jpg", "Italian-inspired charcuterie cup with prosciutto, mozzarella balls, cherry tomatoes and olives", 640, 800, "https://www.pinterest.com/pin/563018698737383/", "Italian-Inspired Charcuterie Cup"),
  },
  {
    n: "03",
    title: "Sweet and Savory",
    paras: [
      "Sweet-and-salty fans tend to hunt this one down first, and for good reason &mdash; the contrast hits more than one craving at once.",
      "Sharp cheese paired with fresh fruit and a touch of chocolate keeps every bite a little unexpected.",
      "This cup tends to disappear fastest at any gathering, so it's worth making a couple of extras from the start.",
    ],
    photo: pinPhoto("sweet-savory.jpg", "Sweet and savory charcuterie cup with sharp cheese, fresh fruit and chocolate", 736, 981, "https://www.pinterest.com/pin/61643088645654515/", "Sweet and Savory Charcuterie Cup"),
  },
  {
    n: "04",
    title: "Kid-Friendly",
    paras: [
      "Kids don't care about fancy folds or imported cheese. They want color, fun shapes, and snacks they already recognize.",
      "Keeping this one playful and approachable does double duty &mdash; when the kids feel included, the parents relax too.",
      "Skipping toothpicks here cuts down on the drama considerably. Fewer small emergencies, more actual snacking.",
    ],
    photo: pinPhoto("kid-friendly.jpg", "Kid-friendly charcuterie cup with colorful, playful snacks", 360, 640, "https://www.pinterest.com/pin/2322237302887055/", "Kid-Friendly Charcuterie Cup"),
  },
  {
    n: "05",
    title: "Vegetarian",
    paras: [
      "Vegetarian guests deserve more than an afterthought, and this cup is built to prove that from the start.",
      "Bold flavors and real texture variety keep it just as satisfying as anything meat-based on this list &mdash; no sad, single vegetable allowed.",
      "Done right, it holds its own next to every other cup on the table instead of reading as a compromise.",
    ],
    photo: pinPhoto("vegetarian.jpg", "Vegetarian charcuterie cup with bold flavors and varied textures", 736, 981, "https://www.pinterest.com/pin/189221621841800947/", "Vegetarian Charcuterie Cup"),
  },
  {
    n: "06",
    title: "Breakfast",
    paras: [
      "Breakfast charcuterie cups sound unlikely until the first bite, and then they make complete sense.",
      "These work especially well at a brunch or an early event &mdash; cozy and filling without tipping into heavy.",
      "A small drizzle cup of honey or syrup on the side turns a good breakfast cup into a genuinely memorable one.",
    ],
    photo: pinPhoto("breakfast.jpg", "Breakfast charcuterie cup styled for a brunch spread", 683, 1024, "https://www.pinterest.com/pin/3025924745215164/", "Breakfast Charcuterie Cup"),
  },
  {
    n: "07",
    title: "Dessert",
    paras: [
      "Dessert charcuterie cups make people unreasonably happy, and there's no real need to question why.",
      "Treat it like a mini dessert sampler &mdash; sweet, a little crunchy, and indulgent without going overboard.",
      "It turns an ordinary snack moment into something that feels closer to a small celebration.",
    ],
    photo: pinPhoto("dessert.jpg", "Dessert charcuterie cup styled as a mini sweet sampler", 683, 1024, "https://www.pinterest.com/pin/121175046221082472/", "Dessert Charcuterie Cup"),
  },
  {
    n: "08",
    title: "Seasonal Fall",
    paras: [
      "Seasonal cups always feel a little more special, and the fall version leans warm and comforting without trying too hard to get there.",
      "Cozy flavors and earthy colors &mdash; think warm spices, dried fruit, nuts and a rustic cheese &mdash; make it look right at home on an autumn table.",
      "Served alongside a mug of cider, the whole thing just works without needing anything else.",
    ],
  },
  {
    n: "09",
    title: "Mediterranean",
    paras: [
      "This cup tastes fresh, bright and just slightly addictive &mdash; the move when something lighter still needs to feel satisfying.",
      "Salty cheeses, crisp vegetables and bold, briny flavors keep every bite refreshing instead of heavy.",
      "It pairs especially well with sparkling water or a glass of white wine, which makes it an easy fit for daytime gatherings.",
    ],
    photo: pinPhoto("mediterranean.jpg", "Mediterranean charcuterie cup with salty cheeses, crisp vegetables and olives", 736, 981, "https://www.pinterest.com/pin/2322237300596857/", "Mediterranean Charcuterie Cup"),
  },
  {
    n: "10",
    title: "Keto-Friendly",
    paras: [
      "Low-carb guests deserve more than a sad pile of lettuce. Built around real protein and fat, this cup actually satisfies instead of just filling space.",
      "Leaning into savory elements &mdash; a good brie, cured meats, olives and a few pickled vegetables &mdash; keeps it hearty without relying on crackers to carry the cup.",
      "Guests who eat this way tend to notice the effort immediately, even if the rest of the table doesn't clock the difference.",
    ],
    photo: pinPhoto("keto.jpg", "Keto-friendly charcuterie cup with brie, cured meats, olives and pickled vegetables", 736, 981, "https://www.pinterest.com/pin/424956914860205868/", "Keto-Friendly Charcuterie Cup"),
  },
  {
    n: "11",
    title: "Vegan",
    paras: [
      "Vegan charcuterie cups surprise people in the best way when they're actually built with intention instead of being an afterthought.",
      "Leaning on texture and seasoning &mdash; marinated vegetables, nuts, dried fruit, a sharp vegan cheese &mdash; keeps things interesting bite after bite.",
      "Done well, this one tends to get requested again before the gathering is even over.",
    ],
    photo: pinPhoto("vegan.jpg", "Vegan charcuterie cup with marinated vegetables, nuts and dried fruit", 736, 981, "https://www.pinterest.com/pin/563018697018273/", "Vegan Charcuterie Cup"),
  },
  {
    n: "12",
    title: "Holiday-Themed",
    paras: [
      "Holiday charcuterie cups set the mood almost instantly just by matching ingredients to the season's color palette.",
      "Cranberries and rosemary work beautifully for winter, while berries and lighter cheeses carry the same idea into summer gatherings.",
      "The result looks genuinely styled without any extra effort beyond picking ingredients that happen to match the occasion.",
    ],
    photo: pinPhoto("holiday.jpg", "Holiday-themed charcuterie cup with cranberries and rosemary", 735, 751, "https://www.pinterest.com/pin/148618856446490650/", "Holiday-Themed Charcuterie Cup"),
  },
  {
    n: "13",
    title: "Game Day",
    paras: [
      "Game day snacks need to hold up through a lot of excitement, which rules out anything too delicate.",
      "Bold, salty flavors &mdash; think pepperoni, sharp cheese, pretzels &mdash; survive distracted snacking far better than anything subtle.",
      "These cups tend to disappear fast once the game gets going, so doubling the batch upfront saves a mid-game scramble.",
    ],
    photo: pinPhoto("game-day.jpg", "Game day charcuterie cup with bold, salty snacks", 576, 1024, "https://www.pinterest.com/pin/259801472269264198/", "Game Day Charcuterie Cup"),
  },
  {
    n: "14",
    title: "Mini Picnic",
    paras: [
      "This cup is built entirely around portability &mdash; outdoor events, road trips, and casual hangouts where a board just isn't practical.",
      "Everything inside stays sturdy and mess-free, which matters a lot more outdoors than it ever does at a dinner table.",
      "Hand them out and move on. No setup, no table required, no drama.",
    ],
    photo: photo("mini-picnic.jpg", "Portable mini picnic charcuterie cup with cheese, meat and a breadstick, set outdoors on grass", 736, 981),
  },
  {
    n: "15",
    title: "Luxe",
    paras: [
      "This is the treat-yourself option, pulled out specifically to make guests feel a little spoiled.",
      "Quality takes priority over quantity here &mdash; a good truffle cheese, a few perfectly cured meats, something genuinely special rather than a lot of ordinary ingredients.",
      "The result feels indulgent without tipping into overwhelming, which is exactly the balance a luxe cup should hit.",
    ],
    photo: pinPhoto("luxe.jpg", "Luxe charcuterie cup with premium cured meats and cheese", 736, 981, "https://www.pinterest.com/pin/4433299629684220/", "Luxe Charcuterie Cup"),
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
<p>Charcuterie boards look great right up until the hovering starts &mdash; guests reaching over each other, kids touching everything, someone quietly rearranging the cheese like it's a personal project. Charcuterie cups solve all of that at once: everyone gets their own portioned setup, nobody fights over the brie, and cleanup takes about five minutes.</p>
<p>They work for parties, weddings, picnics, baby showers, and honestly just an average weeknight, because the format itself does most of the work. No crowding, no awkward reaching, just grab and go.</p>
${photo("hero.jpg", "Row of individual charcuterie cups layered with meats, cheeses and fruit", 1312, 736)}

<h2>What Actually Makes a Good Charcuterie Cup</h2>
<p>A 9 to 12 oz clear cup is the sweet spot &mdash; big enough to hold a real portion, small enough that it doesn't get messy, and clear enough to show off the layers so everything looks intentional. Start with sturdier items at the base so nothing gets crushed, then layer by contrast: sweet next to savory, soft next to crunchy. Angling a taller item like a breadstick toward the back adds height without making the cup feel crowded.</p>
<p>Most of these can be assembled four to six hours ahead and refrigerated loosely covered, with anything crisp like crackers added right before serving so it doesn't go soft. That one step keeps the whole spread feeling fresh instead of rushed.</p>
${pinPhoto("intro-personal.jpg", "Individually portioned charcuterie cup showing a personalized, thoughtful presentation", 736, 907, "https://www.pinterest.com/pin/351912466344568/", "Personalized Charcuterie Cup")}

<h2>15 Charcuterie Cup Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>A Couple of Mistakes Worth Avoiding</h2>
<p>Overfilling is the most common one &mdash; more food doesn't read as more generous, it just tips, spills, and stresses everyone out. Leaving a little breathing room at the top looks cleaner and far more intentional. Texture balance matters just as much: too many soft ingredients turn mushy fast, and too many crunchy ones dry out the whole bite. Mixing soft, crunchy, sweet and savory in every cup keeps it interesting start to finish.</p>

<h2>Final Thoughts</h2>
<p>There's no need to try all fifteen at once. Pick whichever few actually fit the event, and build from there &mdash; guests remember how the food made them feel, not how complicated it looked assembling it.</p>
<p>Grab some cups, raid the fridge, and let the format do the rest. It scales for a crowd, travels well, and adapts to just about any occasion without much extra effort.</p>
`;

module.exports = { body };
