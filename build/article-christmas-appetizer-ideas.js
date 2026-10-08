// Body content for "24 Christmas Appetiser Ideas for Your Holiday
// Table". Photos carried over from the source article, Pinterest pin
// links preserved. Two photos (for "Cranberry Goat Cheese Bites" and
// "Mozzarella and Prosciutto Bites") actually depict a charcuterie tree
// and a round charcuterie board rather than the individual bites
// described — but the source's own text explicitly frames them as
// "borrows the same palette" / "the same pairing on a bigger board"
// references, so they were kept as intentional mood photos with honest
// captioning, not treated as a photo/heading mismatch. A generic FDA
// food-safety temperature guideline was kept as unattributed general
// advice rather than a specific citation.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "christmas-appetizer-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "christmas-appetizer-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Cranberry Brie Crostini",
    paras: [
      "Cranberry and brie practically announce Christmas on their own. Toasting thin baguette slices, adding a small piece of creamy brie, then spooning cranberry sauce over the top builds the whole bite in three steps.",
      "A scatter of chopped pecans and a tiny rosemary sprig finishes it off &mdash; the creamy cheese, tart cranberry, crunchy nuts and crisp bread hit a genuinely good texture combination.",
      "Serving these slightly warm lets the brie soften beautifully; swapping the pecans for walnuts and tucking in a thin pear slice is an easy variation worth trying.",
    ],
    photo: pinPhoto("cranberry-brie-crostini.jpg", "Cranberry brie crostini topped with pecans and rosemary", 736, 1104, "https://www.pinterest.com/pin/165999936261346717/", "Cranberry Brie Crostini"),
  },
  {
    n: "02",
    title: "Christmas Tree Cheese Ball",
    paras: [
      "Shaping a classic cheese ball into a Christmas tree turns a familiar party staple into a genuine centerpiece.",
      "Mixing cream cheese with shredded cheddar, herbs, garlic and seasonings, then covering the shaped mixture with chopped parsley, pistachios, cranberries or pomegranate seeds, builds the look. Crackers arranged around the base finish the display.",
      "For a version without any shaping required, the same cream cheese and cranberry filling baked into individual puff pastry cups delivers identical flavor with none of the molding.",
    ],
    photo: pinPhoto("cheese-ball.jpg", "Christmas tree shaped cheese ball with crackers", 736, 1104, "https://www.pinterest.com/pin/314900198970857971/", "Christmas Tree Cheese Ball"),
  },
  {
    n: "03",
    title: "Garlic Parmesan Stuffed Mushrooms",
    paras: [
      "Stuffed mushrooms make an excellent Christmas appetizer, since they read as elegant while using genuinely inexpensive ingredients.",
      "Filling mushroom caps with breadcrumbs, Parmesan, garlic, parsley and a little olive oil, then baking until the tops turn golden, is the entire process.",
      "They're especially useful for a dinner party since the filling can be prepared well ahead of time, with the mushrooms assembled and baked just before guests arrive.",
    ],
    photo: pinPhoto("stuffed-mushrooms.jpg", "Garlic Parmesan stuffed mushrooms fresh from the oven", 736, 1104, "https://www.pinterest.com/pin/11188699075797776/", "Garlic Parmesan Stuffed Mushrooms"),
  },
  {
    n: "04",
    title: "Bacon-Wrapped Dates",
    paras: [
      "Sweet dates and salty bacon make an almost unfairly good pairing.",
      "Stuffing Medjool dates with goat cheese or cream cheese, wrapping each in bacon, and baking until the bacon crisps up is the whole process. A small almond tucked inside the date before wrapping adds a noticeable bit of crunch.",
      "Securing each one with a toothpick and a small rosemary sprig makes them look like they came from a caterer rather than a home oven.",
    ],
    photo: pinPhoto("bacon-dates.jpg", "Bacon-wrapped dates garnished with rosemary", 736, 1104, "https://www.pinterest.com/pin/126382333289752789/", "Bacon-Wrapped Dates"),
  },
  {
    n: "05",
    title: "Caprese Christmas Skewers",
    paras: [
      "Turning simple Caprese ingredients into finger food makes them considerably easier to serve at a party.",
      "Threading cherry tomatoes, mozzarella balls and fresh basil onto small skewers, then drizzling lightly with balsamic glaze, is the entire recipe.",
      "The red, white and green color combination reads as Christmas instantly, without requiring any extra decoration &mdash; sometimes the simplest presentation wins.",
    ],
    photo: pinPhoto("caprese-skewers.jpg", "Caprese Christmas skewers with balsamic drizzle", 736, 1104, "https://www.pinterest.com/pin/344314334031186556/", "Caprese Christmas Skewers"),
  },
  {
    n: "06",
    title: "Baked Spinach Artichoke Dip",
    paras: [
      "For a single dish that disappears quickly, spinach artichoke dip is hard to beat.",
      "Combining spinach, artichokes, cream cheese, sour cream, Parmesan, mozzarella and garlic, then baking until hot and bubbling, builds a dip that works with toasted bread, crackers or vegetables.",
      "Placing it near the center of the table practically guarantees guests keep returning for \"just one more\" scoop &mdash; serving it straight from the skillet, ringed with colorful tortilla chips, makes it the table's centerpiece on its own.",
    ],
    photo: pinPhoto("spinach-artichoke-dip.jpg", "Baked spinach artichoke dip served with tortilla chips", 736, 1104, "https://www.pinterest.com/pin/1083467622886880407/", "Baked Spinach Artichoke Dip"),
  },
  {
    n: "07",
    title: "Cranberry Goat Cheese Bites",
    paras: [
      "Spreading goat cheese onto crackers or small toasted bread rounds, adding cranberry sauce, and finishing with chopped walnuts builds a bite where tangy and sweet balance each other perfectly.",
      "A few pomegranate seeds scattered around the platter push the presentation further without requiring much actual effort.",
      "A charcuterie-style cheese and fruit tree pulls from the exact same flavor palette &mdash; cubes of cheese, dried cranberries and walnuts clustered together &mdash; just scaled up into a full board instead of an individual bite.",
    ],
    photo: pinPhoto("goat-cheese-bites.jpg", "Christmas charcuterie trees made with cheese, salami and fruit sharing the cranberry and walnut palette", 736, 1104, "https://www.pinterest.com/pin/1098596902886280236/", "Charcuterie Christmas Trees"),
  },
  {
    n: "08",
    title: "Mini Sausage Rolls",
    paras: [
      "Mini sausage rolls work especially well for a casual Christmas gathering.",
      "Wrapping seasoned sausage meat in puff pastry, cutting it into bite-sized pieces, and baking until golden produces a roll that pairs well with mustard, cranberry dipping sauce or sweet chili sauce.",
      "Keeping them small lets guests grab one without committing to a full pastry before dinner &mdash; a poppy-seed glaze and a small pot of cranberry sauce alongside is all the extra presentation they need.",
    ],
    photo: photo("sausage-rolls.jpg", "Mini sausage rolls with a poppy-seed glaze and cranberry sauce", 736, 1103),
  },
  {
    n: "09",
    title: "Shrimp Cocktail",
    paras: [
      "Shrimp cocktail gives a Christmas appetizer table a lighter, seafood-forward option among the heavier dishes.",
      "Chilled shrimp served with cocktail sauce and lemon wedges, arranged over crushed ice or on a chilled platter, covers the basics; keeping cold foods at 40°F or colder is worth paying attention to when guests linger around the table for hours.",
      "Arranging the shrimp in a ring around the sauce, with a few cranberries and sprigs of dill tucked in, reads as a wreath before anyone even registers it's dinner.",
    ],
    photo: photo("shrimp-cocktail.jpg", "Shrimp cocktail arranged in a wreath shape with cranberries and dill", 736, 1104),
  },
  {
    n: "10",
    title: "Prosciutto-Wrapped Melon",
    paras: [
      "For something fresh among the richer dishes, sweet melon paired with salty prosciutto offers a genuine break.",
      "Cutting melon into small cubes or wedges, wrapping each with prosciutto, and securing with a cocktail pick is the whole process; a bit of basil or a light balsamic drizzle rounds it out.",
      "A scatter of chopped basil and a drizzle of glaze over the cantaloupe and prosciutto turns a simple two-ingredient bite into something that looks genuinely composed.",
    ],
    photo: pinPhoto("prosciutto-melon.jpg", "Prosciutto-wrapped melon bites with basil and balsamic glaze", 736, 1104, "https://www.pinterest.com/pin/211880357467267048/", "Prosciutto-Wrapped Melon"),
  },
  {
    n: "11",
    title: "Baked Camembert With Cranberries",
    paras: [
      "A wheel of Camembert placed in a small baking dish, topped with cranberries, rosemary, honey and chopped nuts before baking, delivers real drama the moment it's cut open.",
      "Serving it with toasted baguette slices gives guests something to actually scoop the warm, creamy center with.",
      "People tend to gather around a baked cheese dish immediately &mdash; a rosemary sprig on top and a ring of olive-oil-brushed baguette around the dish, served beside a glass of red wine, completes the moment.",
    ],
    photo: pinPhoto("baked-camembert.jpg", "Baked Camembert with cranberries and rosemary", 736, 1104, "https://www.pinterest.com/pin/2533343539432843/", "Baked Camembert With Cranberries"),
  },
  {
    n: "12",
    title: "Christmas Charcuterie Board",
    paras: [
      "A Christmas charcuterie board delivers maximum visual impact for relatively little actual cooking.",
      "Arranging cured meats, cheeses, crackers, nuts, dried fruit and fresh berries onto a large wooden board in small clusters, rather than spreading everything evenly, is the real trick &mdash; a little visual mess actually makes the board feel more abundant.",
      "A Christmas-tree-shaped board does that clustering automatically, building cheese, salami, walnuts and sugared cranberries up toward a star on top.",
    ],
    photo: pinPhoto("charcuterie-board.jpg", "Christmas tree shaped charcuterie board with cheese and salami", 736, 1104, "https://www.pinterest.com/pin/57491332741604860/", "Christmas Charcuterie Board"),
  },
  {
    n: "13",
    title: "Pomegranate and Whipped Feta Crostini",
    paras: [
      "Whipping feta with cream cheese or Greek yogurt until smooth, then spreading it over toasted baguette slices and topping with pomegranate seeds, builds a genuinely striking bite.",
      "The creamy white base against the jewel-toned red seeds creates a gorgeous presentation with very little actual effort &mdash; a bit of mint or parsley finishes it.",
      "A scatter of toasted walnuts underneath the pomegranate adds the crunch that keeps every bite interesting.",
    ],
    photo: photo("pomegranate-crostini.jpg", "Pomegranate and whipped feta crostini with toasted walnuts", 736, 1104),
  },
  {
    n: "14",
    title: "Mini Christmas Meatballs",
    paras: [
      "Shaping a favorite meatball mixture into small, bite-sized portions makes them easy party food.",
      "Serving them with toothpicks and a cranberry barbecue sauce works particularly well for Christmas, combining sweet, tart and savory in one glaze; keeping them warm in a slow cooker lets guests grab one throughout the evening.",
      "A sticky, sesame-flecked glaze finished with sesame seeds and fresh parsley works just as well for anyone who'd rather skip the cranberry sauce for something more savory.",
    ],
    photo: photo("mini-meatballs.jpg", "Mini Christmas meatballs with a sesame-flecked glaze", 564, 845),
  },
  {
    n: "15",
    title: "Smoked Salmon Cucumber Bites",
    paras: [
      "Thick cucumber rounds topped with cream cheese, smoked salmon, dill and lemon zest build a bite that feels elegant without becoming fussy.",
      "Most of the components can be prepared well ahead of time, with the final bites assembled just before guests arrive.",
      "A herbed cream cheese swirl, a ribbon of smoked salmon and a small dill sprig on each round is the entire assembly, and it looks considerably more composed than the effort it actually took.",
    ],
    photo: photo("smoked-salmon-bites.jpg", "Smoked salmon cucumber bites with dill garnish", 736, 1104),
  },
  {
    n: "16",
    title: "Parmesan Puff Pastry Twists",
    paras: [
      "Rolling puff pastry with Parmesan, black pepper, garlic powder and herbs, then cutting it into strips and twisting before baking, produces an easy pick-up appetizer.",
      "Served upright in a glass or arranged in a basket, they make excellent party food since guests can grab one without needing a plate or fork.",
      "Laid flat on a board next to a wheel of herbed cheese and a bowl of cranberries, the twists double as their own dipper.",
    ],
    photo: photo("parmesan-pastry-twists.jpg", "Parmesan puff pastry twists arranged with herbed cheese", 736, 1104),
  },
  {
    n: "17",
    title: "Cranberry Jalapeño Cream Cheese Dip",
    paras: [
      "This one brings a bit of personality to an otherwise classic appetizer spread.",
      "Spreading softened cream cheese onto a serving dish, then topping it with cranberry sauce, chopped jalapeños, green onions and fresh herbs, builds a dip with a real sweet-and-spicy contrast.",
      "Spreading it in one even layer, with the jalapeño slices arranged visibly on top, lets guests see exactly how much heat they're signing up for before diving in.",
    ],
    photo: photo("cranberry-jalapeno-dip.jpg", "Cranberry jalapeño cream cheese dip with crackers", 736, 1104),
  },
  {
    n: "18",
    title: "Deviled Eggs With Christmas Garnishes",
    paras: [
      "Deviled eggs rarely need much convincing to work at a party, but a few small touches give them a holiday upgrade.",
      "The classic creamy filling &mdash; egg yolks, mayonnaise, mustard, seasonings &mdash; piped into the whites, then garnished with paprika, chives, dill or tiny pomegranate seeds, keeps the recipe familiar while adding seasonal color.",
      "A few flecks of diced red pepper and a small rosemary sprig tucked under each half reads as festive without requiring any special equipment.",
    ],
    photo: photo("deviled-eggs.jpg", "Deviled eggs with Christmas garnishes of paprika and herbs", 736, 1104),
  },
  {
    n: "19",
    title: "Brie and Apple Crostini",
    paras: [
      "Thin apple slices placed over toasted baguette with brie, baked briefly until the cheese softens, then finished with honey and chopped walnuts, balances rich cheese against crisp fruit.",
      "A tart apple variety tends to give the best contrast against the sweetness of the honey and richness of the brie.",
      "A thin drizzle of honey pulled straight off the dipper, right over the warm brie and apple, is a small table-side finishing touch worth doing.",
    ],
    photo: photo("brie-apple-crostini.jpg", "Brie and apple crostini with honey drizzle", 736, 1104),
  },
  {
    n: "20",
    title: "Holiday Hummus Platter",
    paras: [
      "Hummus doesn't have to feel like an afterthought at a Christmas party.",
      "Spreading hummus onto a large platter, then building a festive arrangement with cucumber, cherry tomatoes, olives, carrots, peppers, pita triangles and fresh herbs, turns a simple dip into a real centerpiece &mdash; the vegetables can even be shaped into a tree or wreath.",
      "Ringing the hummus with cherry tomatoes, olives, cucumber and feta turns a plain bowl into a wreath shape without any extra effort.",
    ],
    photo: pinPhoto("hummus-platter.jpg", "Holiday hummus platter arranged in a wreath shape", 736, 1104, "https://www.pinterest.com/pin/105482816270675293/", "Holiday Hummus Platter"),
  },
  {
    n: "21",
    title: "Mini Crab Cakes",
    paras: [
      "Crab cakes make an appetizer table feel instantly more special.",
      "Crab meat, breadcrumbs, herbs, seasonings and a little mayonnaise, shaped into small patties and pan-fried or baked, pair well with lemon aioli or another creamy dipping sauce.",
      "Keeping the cakes small lets guests enjoy one or two without filling up before dinner &mdash; a small bowl of herbed aioli on the side is really all the dipping sauce these need.",
    ],
    photo: pinPhoto("mini-crab-cakes.jpg", "Mini crab cakes with herbed aioli dipping sauce", 736, 1104, "https://www.pinterest.com/pin/770960029995705514/", "Mini Crab Cakes"),
  },
  {
    n: "22",
    title: "Sweet Potato Crostini",
    paras: [
      "Roasting thin sweet potato slices until tender, then topping them with goat cheese, pecans and a drizzle of honey, builds a crostini alternative with genuine seasonal color.",
      "Toasted baguette works just as well in place of sweet potato for a more traditional base.",
      "The warm orange color, creamy cheese and toasted nuts feel naturally seasonal, and a simple dollop of herbed cheese with a few flecks of rosemary keeps the whole thing easy to assemble.",
    ],
    photo: photo("sweet-potato-crostini.jpg", "Sweet potato crostini topped with goat cheese and pecans", 736, 1104),
  },
  {
    n: "23",
    title: "Mozzarella and Prosciutto Bites",
    paras: [
      "Wrapping small mozzarella balls with thin strips of prosciutto and securing them with cocktail picks builds a bite that looks far more elaborate than it actually took to make.",
      "Basil leaves, cherry tomatoes or roasted peppers add color, and arranging the bites in rows with a light balsamic drizzle finishes the presentation.",
      "The same pairing scales up well on a full board, too &mdash; ribbons of prosciutto curled next to cubes of cheese is the exact combination this bite is built on, just in a larger format.",
    ],
    photo: pinPhoto("mozzarella-prosciutto-bites.jpg", "Round charcuterie board featuring prosciutto and cheese, the same pairing used in mozzarella-prosciutto bites", 736, 1104, "https://www.pinterest.com/pin/4593390266645772160/", "Prosciutto and Cheese Charcuterie Board"),
  },
  {
    n: "24",
    title: "Christmas Tree Puff Pastry Bites",
    paras: [
      "For a final idea that makes the presentation itself the star, pesto, cheese or another savory filling spread between layers of puff pastry, cut into a tree shape and twisted into branches before baking, builds a genuine centerpiece.",
      "Serving it with marinara, cheese dip or another favorite sauce rounds out the dish.",
      "Guests can pull apart individual pieces while admiring the shape &mdash; a few pomegranate seeds scattered on as ornaments and a star-shaped cracker on top finishes the look.",
    ],
    photo: photo("tree-puff-pastry.jpg", "Christmas tree shaped puff pastry bites with pomegranate seeds", 736, 1104),
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
<p>A good Christmas appetizer spread does more to set the mood of a party than almost anything else on the table. It gives guests something to do with their hands the moment they walk in, and it buys time before the main meal without anyone standing around hungry.</p>
<p>None of the ideas below require professional catering skills. Most come down to a handful of good ingredients, arranged with a bit of intention, rather than anything technically difficult.</p>
${photo("hero.jpg", "Full Christmas appetizer spread with charcuterie, skewers and dips on a holiday table", 683, 1024)}

<h2>What Makes a Good Christmas Appetizer</h2>
<p>The strongest holiday appetizers tend to balance rich and light options side by side &mdash; a baked cheese dish next to something fresh like shrimp or a vegetable platter keeps the whole spread from feeling heavy after the first hour. A few seasonal colors or shapes, without going overboard, signal "Christmas" more effectively than an entirely red-and-green menu.</p>
${pinPhoto("intro-buffet.jpg", "Christmas appetizer buffet with a variety of festive dishes", 736, 1104, "https://www.pinterest.com/pin/1099722802792499315/", "Christmas Appetizer Buffet Favorites")}

<h2>How Many to Plan For</h2>
<p>As a general guide, planning for four to six different appetizers covers a typical holiday gathering well, assuming a mix of make-ahead and last-minute dishes. A spread that's too varied becomes stressful to prepare, while too few options leaves guests circling the same plate all night.</p>
${pinPhoto("intro-tablescape.jpg", "Christmas appetizer tablescape styled for a holiday party", 736, 1104, "https://www.pinterest.com/pin/1110207745672728856/", "Christmas Appetizer Tablescape")}

<h2>24 Christmas Appetizer Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these twenty-four ideas require a catering budget or a day spent in the kitchen. A few well-chosen dishes, balanced between rich and light, will carry a holiday table further than a dozen complicated ones ever could.</p>
<p>The appetizers people remember are rarely the most elaborate ones &mdash; they're the ones that actually got eaten, refilled, and talked about while everyone waited for dinner.</p>
`;

module.exports = { body };
