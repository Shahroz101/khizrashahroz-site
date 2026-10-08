// Body content for "23 Christmas Gift Basket Ideas That Feel
// Thoughtful and Personal". Photos carried over from the source
// article, Pinterest pin links preserved. 3 source images were reused
// by the source itself across two spots (hero/idea 1, an intro photo/
// idea 14, and an intro photo/idea 22) — all occurrences kept. Two
// source image URLs (for ideas 16 and 17) were internally mislabeled
// relative to their actual content, confirmed by viewing both images;
// document order (which photo physically followed which heading) was
// used as the authoritative mapping, and it matched the actual photo
// content correctly in both cases. Source had a fabricated quote
// ("You don't have to try so hard.") attributed to the "Association
// for Psychological Science," plus an unverifiable paraphrased research
// claim attributed to the same — both dropped. A USDA food-safety
// citation was simplified into general, unattributed advice.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "christmas-gift-basket-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "christmas-gift-basket-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Cozy Christmas Gift Basket",
    paras: [
      "For anyone who considers staying home a perfectly reasonable weekend plan, this is the easiest basket to build.",
      "A soft throw blanket, fuzzy socks, a scented candle, hot chocolate, marshmallows and a Christmas mug cover the basics, with a small paperback or journal as an optional addition. Neutral packaging in cream, red, green or warm brown keeps the look classic.",
      "A woven basket spilling over with plaid and knit pillows, a red tartan throw draped over the side, and a small pine wreath tied to the handle captures the cozy, lived-in look this basket is going for.",
    ],
    photo: photo("cozy.jpg", "Cozy Christmas gift basket with plaid pillows and a tartan throw", 683, 1024),
  },
  {
    n: "02",
    title: "Coffee Lover Christmas Gift Basket",
    paras: [
      "For anyone who becomes noticeably more pleasant after their first cup of coffee, this basket answers itself.",
      "A good bag of coffee, a mug, flavored syrup and biscotti form the core, and a French press or reusable tumbler makes a strong centerpiece for a more premium version. Choosing a coffee they already enjoy matters more than reaching for the strongest roast available.",
      "A kraft box with a scarf wrapped around the mug, a bag of biscotti and a jar of cinnamon sugar tucked beside a pine sprig reads as considered without much actual effort.",
    ],
    photo: photo("coffee-lover.jpg", "Coffee lover Christmas gift basket with mug and biscotti", 736, 1104),
  },
  {
    n: "03",
    title: "Hot Chocolate Christmas Gift Basket",
    paras: [
      "This one feels festive without requiring much of a budget.",
      "Hot chocolate mix, mini marshmallows, peppermint sticks, chocolate squares and a cute mug build the base. Colorful toppings and a holiday movie card work well for kids, while gourmet chocolate and a more refined mug suit an adult recipient.",
      "Two mugs, a bag of cocoa mix, a twine-tied jar of marshmallows and a few candy canes poking out, finished with a big red bow, hits the mark almost every time.",
    ],
    photo: pinPhoto("hot-chocolate.jpg", "Hot chocolate Christmas gift basket with mugs and marshmallows", 736, 1051, "https://www.pinterest.com/pin/219480181838057912/", "Hot Chocolate Christmas Gift Basket"),
  },
  {
    n: "04",
    title: "Christmas Baking Gift Basket",
    paras: [
      "This idea works especially well for anyone who treats December like an unofficial baking competition.",
      "Building the basket around baking supplies and a few homemade treats gives it a genuinely useful feel. One homemade cookie included alongside the supplies makes the whole gift feel more personal than a straight shopping haul.",
      "A wire basket filled with oven mitts, colorful spatulas, a whisk, cookie cutters and small jars of sprinkles looks genuinely useful the moment it's opened.",
    ],
    photo: photo("baking.jpg", "Christmas baking gift basket with supplies and treats", 736, 1308),
  },
  {
    n: "05",
    title: "Self-Care Christmas Gift Basket",
    paras: [
      "December gets talked about as relaxing far more often than it actually feels that way once it arrives.",
      "Bath salts, body lotion, a candle, face masks, fuzzy socks, lip balm and herbal tea build a small escape. Sticking to one calming scent family &mdash; lavender, vanilla, eucalyptus, rose &mdash; keeps the whole basket feeling coordinated.",
      "A handwritten note tucked in alongside everything else often adds more warmth than one more product would.",
    ],
    photo: photo("self-care.jpg", "Self-care Christmas gift basket with candles and bath products", 735, 1105),
  },
  {
    n: "06",
    title: "Christmas Movie Night Basket",
    paras: [
      "This one practically builds itself.",
      "Popcorn, chocolate, candy, cozy socks, hot chocolate and a soft blanket cover the essentials, with a small card listing a few recommended Christmas movies as the finishing touch.",
      "A basket loaded with popcorn, a few classic candy bars, canned soda and a pair of headphones, wrapped in a soft throw, communicates \"cancel your plans\" better than any card could.",
    ],
    photo: photo("movie-night.jpg", "Christmas movie night basket with popcorn and cozy blanket", 600, 800),
  },
  {
    n: "07",
    title: "Christmas Breakfast Gift Basket",
    paras: [
      "Gift baskets don't have to be limited to afternoon treats.",
      "Pancake mix, maple syrup, jam, coffee, tea, biscuits, honey and a kitchen towel build a solid breakfast basket, and a handwritten recipe card for a favorite Christmas breakfast adds a more personal touch.",
      "This version works especially well as a family gift, since everyone in the house can enjoy it together the same morning.",
    ],
    photo: photo("breakfast.jpg", "Christmas breakfast gift basket with pancake mix and jam", 736, 736),
  },
  {
    n: "08",
    title: "Hot Tea Christmas Gift Basket",
    paras: [
      "For the tea drinker, a warm, simple collection goes a long way.",
      "Several tea flavors, honey, lemon candies, biscuits and a pretty mug form the base, and loose-leaf tea with a glass or ceramic infuser pushes the whole basket toward something more luxurious.",
      "A soft, natural palette &mdash; cream, sage, brown, muted red &mdash; keeps the basket looking genuinely beautiful rather than like a holiday-aisle grab bag.",
    ],
    photo: pinPhoto("hot-tea.jpg", "Hot tea Christmas gift basket with honey and a ceramic mug", 448, 800, "https://www.pinterest.com/pin/1266706142289614/", "Hot Tea Christmas Gift Basket"),
  },
  {
    n: "09",
    title: "Christmas Cookie Gift Basket",
    paras: [
      "Sometimes cookies really are the whole solution.",
      "A basket filled with homemade or specialty Christmas cookies, plus chocolate, caramel, peppermint treats and a festive mug, covers the essentials. Packaging different cookies in small clear bags tied with ribbon makes the basket feel like a collection of individual little gifts.",
      "This idea suits neighbors, teachers, coworkers and extended family particularly well, since it doesn't require knowing someone's specific preferences.",
    ],
    photo: pinPhoto("cookie.jpg", "Christmas cookie gift basket with assorted holiday treats", 736, 1349, "https://www.pinterest.com/pin/133771051427774979/", "Christmas Cookie Gift Basket"),
  },
  {
    n: "10",
    title: "Gourmet Snack Christmas Gift Basket",
    paras: [
      "This option works well for someone not known especially well, while still feeling thoughtful rather than generic.",
      "Choosing several elevated snacks and focusing on quality over quantity matters most here &mdash; six genuinely excellent items tend to look and feel better than fifteen random ones. Any refrigerated or perishable items should be delivered and stored carefully, kept cold and handled promptly.",
      "A red tin stamped with a festive phrase and filled with English muffins, preserves, coffee and banana bread reads like something from an actual bakery gift shop rather than a quick grocery run.",
    ],
    photo: photo("gourmet-snack.jpg", "Gourmet snack Christmas gift basket with coffee and preserves", 690, 755),
  },
  {
    n: "11",
    title: "Christmas Breakfast in Bed Basket",
    paras: [
      "For a basket with a more romantic feel, a breakfast-in-bed theme works especially well.",
      "Coffee, tea, pastries, jam, honey, chocolate, a small tray and a handwritten note build the core gift, and a small vase of flowers or greenery adds a finishing touch. The tray itself is the clever part, since it gets genuine reuse long after the holiday ends.",
      "Tartan napkins, a jar of golden syrup, cranberry preserves, a stack of pancakes and a cinnamon stick or two, arranged in a woven basket with a sprig of pine, sums up the whole idea in one image.",
    ],
    photo: pinPhoto("breakfast-in-bed.jpg", "Christmas breakfast in bed basket with pastries and a tray", 736, 1104, "https://www.pinterest.com/pin/133771051427693712/", "Christmas Breakfast in Bed Basket"),
  },
  {
    n: "12",
    title: "Book Lover Christmas Gift Basket",
    paras: [
      "Starting with one book the recipient will genuinely enjoy is the real foundation of this basket.",
      "A reading light, bookmark, cozy socks, tea, hot chocolate and chocolate round it out. Choosing the book around their actual interests &mdash; a thriller for a mystery reader, a love story for a romance fan, a cookbook for someone who loves cooking &mdash; matters more than picking a personal favorite.",
      "A basket of wrapped books nestled in pine branches and pinecones by the tree does the job without a single visible title needed.",
    ],
    photo: photo("book-lover.jpg", "Book lover Christmas gift basket with wrapped books and pine branches", 736, 1104),
  },
  {
    n: "13",
    title: "Christmas Spa Basket",
    paras: [
      "A simple basket can turn into a genuine mini spa experience with the right items.",
      "Bath salts, shower steamers, hand cream, body scrub, face masks, a candle and a soft headband all work well together, kept inside simple, coordinated packaging. A restrained color palette keeps the basket from looking like a random assortment of beauty products.",
      "Amber glass bottles of oil and lotion, small gold-lid jars, and a few dried berries tucked into a woven basket, with one small personal touch added, reads as genuinely boutique.",
    ],
    photo: photo("spa.jpg", "Christmas spa basket with amber glass bottles and dried berries", 736, 1104),
  },
  {
    n: "14",
    title: "Christmas Candle and Cozy Basket",
    paras: [
      "This idea suits anyone who loves home decor particularly well.",
      "One beautiful candle works as the centerpiece, with matches, fuzzy socks, tea, chocolate and a small decorative object filling in around it. Sticking to a single scent profile matters here &mdash; combining several competing scents can turn the basket into the olfactory equivalent of a crowded department store.",
      "A lit candle, a festive mug, a tin of shortbread, foil-wrapped chocolates, fuzzy socks and hand cream, tied with a deep red bow, brings the whole idea together.",
    ],
    photo: pinPhoto("candle-cozy.jpg", "Christmas candle and cozy basket with shortbread and fuzzy socks", 736, 1104, "https://www.pinterest.com/pin/1086282372653027754/", "Christmas Candle and Cozy Basket"),
  },
  {
    n: "15",
    title: "Christmas Baking and Cooking Basket",
    paras: [
      "For someone who genuinely enjoys time in the kitchen, a useful basket outperforms a pile of novelty gadgets.",
      "Real baking and cooking tools, rather than one-off gimmicks, make up the core of this basket. A small cutting board can even replace the traditional basket itself, giving the recipient something they'll keep using long after the food is gone.",
      "Even scaled back to just a few wrapped items tucked into pine branches with a pinecone underneath, it still reads as a finished, considered gift.",
    ],
    photo: pinPhoto("baking-cooking.jpg", "Christmas baking and cooking basket with kitchen tools", 736, 1104, "https://www.pinterest.com/pin/618189486388892847/", "Christmas Baking and Cooking Basket"),
  },
  {
    n: "16",
    title: "Christmas Morning Family Basket",
    paras: [
      "One basket the whole family can share solves gift-giving for an entire household in a single gesture.",
      "A curated spread of gourmet treats &mdash; preserves, mulled wine spices, artisan cookies, dried fruit &mdash; wrapped with greenery and ribbon reads as something to gather around on Christmas morning rather than individually wrapped presents.",
      "This approach works particularly well when giving one gift to a household feels more appropriate than buying something separate for every family member.",
    ],
    photo: photo("family-morning.jpg", "Christmas morning family gift basket with gourmet preserves and cookies", 736, 1308),
  },
  {
    n: "17",
    title: "Personalized Christmas Gift Basket",
    paras: [
      "Personalization doesn't require monogramming every single item in the basket.",
      "Starting with the recipient's actual favorite things works better &mdash; seeds, gloves and a small planter for a gardener, a kitchen-themed basket for a cook, a reading-focused basket for someone who loves books.",
      "A basket embroidered with someone's actual name, holding a small plush toy, a candy cane, boxed chocolates and a scented candle, is about as personal as a gift basket gets.",
    ],
    photo: photo("personalized.jpg", "Personalized Christmas gift baskets embroidered with names", 736, 736),
  },
  {
    n: "18",
    title: "Christmas Movie and Snack Basket",
    paras: [
      "Taking movie night a step further turns the basket into a complete experience rather than just snacks.",
      "Popcorn, candy, chocolate, hot chocolate, cozy socks and a blanket form the base, with three handwritten movie recommendations added on top. Labeling the recommendations by mood &mdash; funny, classic, romantic &mdash; lets the recipient choose based on how they're feeling that night.",
      "A ribbon-tied basket filled with a gingerbread cookie, peppermint-dusted candies and a few snowflake picks works well for anyone who'd rather lean sweet than salty.",
    ],
    photo: photo("movie-snack.jpg", "Christmas movie and snack basket with gingerbread cookies", 736, 981),
  },
  {
    n: "19",
    title: "Christmas Garden Lover Basket",
    paras: [
      "For someone who loves plants, this idea feels especially personal.",
      "Gardening gloves, seeds, plant markers, a small pot, hand cream, gardening scissors and a gardening journal build a genuinely useful basket. Choosing seeds and plants suited to the recipient's actual climate and experience level matters more than picking something purely because it looks charming.",
      "A poinsettia, a few succulents wrapped in burlap, heirloom seed packets, pruning shears and gardening gloves, with string lights wound around the base, makes for a genuinely thoughtful gift for anyone who gardens.",
    ],
    photo: pinPhoto("garden-lover.jpg", "Christmas garden lover basket with succulents and gardening tools", 736, 1166, "https://www.pinterest.com/pin/922323198814606307/", "Christmas Garden Lover Basket"),
  },
  {
    n: "20",
    title: "Christmas Homebody Basket",
    paras: [
      "This basket feels like a hug in container form.",
      "A soft blanket, candle, slippers, tea, cookies, a mug and a small book or journal cover the essentials. A neutral basket in cream, beige, soft green and warm brown instantly makes the whole gift feel more coordinated and luxurious.",
      "Even a small wicker basket with one wrapped gift, a snowflake pick and a sprig of greenery by a sunny window captures the quiet, unhurried feeling this basket is going for.",
    ],
    photo: photo("homebody.jpg", "Christmas homebody basket with neutral blanket and candle", 736, 1104),
  },
  {
    n: "21",
    title: "Christmas Breakfast and Brunch Basket",
    paras: [
      "For anyone who loves a slow weekend morning, a brunch basket fits the mood perfectly.",
      "Pancake or waffle mix, maple syrup, coffee, tea, jam, honey, biscuits, chocolate and a small serving board cover the essentials, with a handwritten brunch recipe as an optional personal touch. This version also works well as a shared family gift.",
      "Pancake mix, maple syrup, breakfast sausage links, a loaf of bread and a few Santa-shaped chocolates, tied with a striped ribbon, make a brunch basket that genuinely gets used the next morning.",
    ],
    photo: photo("brunch.jpg", "Christmas breakfast and brunch basket with pancake mix and syrup", 680, 680),
  },
  {
    n: "22",
    title: "Christmas Treats for a Friend Basket",
    paras: [
      "Sometimes a complicated theme isn't necessary at all.",
      "A simple friendship basket built around their favorite snacks, chocolate, coffee or tea, cozy socks, a candle and a handwritten card covers it. The personal note matters most here &mdash; a specific, genuine sentence about the friendship can make an otherwise modest basket feel considerably more meaningful.",
      "A wooden crate stamped with a festive phrase and stacked with cookies, mugs, a marshmallow jar and a gingerbread man by the fire is exactly the kind of basket a friend actually wants to dig into.",
    ],
    photo: photo("friend-treats.jpg", "Christmas treats basket for a friend with cookies and mugs", 736, 1308),
  },
  {
    n: "23",
    title: "Luxury Christmas Gift Basket",
    paras: [
      "For something that genuinely feels special, fewer and better items outperform a basket stuffed with everything available.",
      "Choosing one premium centerpiece &mdash; a cashmere throw, a high-end candle, a quality bottle of something &mdash; and building the rest of the basket around it keeps the presentation clean and intentional.",
      "Sometimes luxury simply means one good centerpiece &mdash; a plush keepsake, a tin of treats, a cozy candle, tied together simply &mdash; rather than a basket packed with ten different premium items competing for attention.",
    ],
    photo: pinPhoto("luxury.jpg", "Luxury Christmas gift basket with a premium centerpiece", 736, 1104, "https://www.pinterest.com/pin/621004236161881709/", "Luxury Christmas Gift Basket"),
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
<p>A Christmas gift basket works because it says more than a single gift card ever could, without demanding the planning a fully custom gift requires. The best ones feel curated rather than assembled &mdash; a handful of genuinely good items, chosen with a specific person in mind, rather than a pile of random extras.</p>
<p>Keeping the color palette coordinated, picking one clear theme, and resisting the urge to add "just one more thing" are what separate a basket that reads as thoughtful from one that reads as cluttered.</p>
${photo("hero.jpg", "Cozy Christmas gift basket filled with plaid pillows and a tartan throw", 683, 1024)}

<h2>What Makes a Gift Basket Feel Special</h2>
<p>A basket feels genuinely personal the moment it reflects something specific about the recipient, rather than a generic holiday assortment. A coordinated color story, a single scent family, and a small handwritten note usually do more for that feeling than adding extra items ever could.</p>
${photo("intro-special.jpg", "Christmas gift basket with a personal, thoughtful presentation", 736, 1308)}

<h2>How to Build One</h2>
<p>Starting with one strong centerpiece &mdash; a candle, a mug, a book, a cozy blanket &mdash; and layering a handful of smaller matching items around it creates a far more polished result than filling a basket to the brim. Simple, coordinated packaging usually reads as more expensive than it actually was.</p>
${pinPhoto("intro-build.jpg", "Christmas gift basket built around one strong centerpiece item", 736, 1104, "https://www.pinterest.com/pin/1086282372653027754/", "Building a Christmas Gift Basket")}

<h2>23 Christmas Gift Basket Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these twenty-three baskets require an elaborate shopping trip or a large budget to feel thoughtful. A clear theme, a coordinated palette, and one or two genuinely good items usually outperform a basket crammed with everything available.</p>
<p>The baskets that end up meaning the most are rarely the most expensive ones &mdash; they're the ones that show the giver actually thought about who they were shopping for.</p>
`;

module.exports = { body };
