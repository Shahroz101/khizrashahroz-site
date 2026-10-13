// Body content for "15 Easter Basket Stuffers Worth Skipping the Candy
// Aisle For". Photos carried over from the source article. The source
// scattered fabricated/misattributed quotes throughout (Gretchen Rubin,
// Marie Kondo, Neil Gaiman, Seth Godin, etc.) — cut entirely, not part
// of this site's voice. 14 of 15 ideas have a photo; "Small Games That
// Spark Connection" has none in the source. Condensed the padded intro
// (3 sections, 3 photos) down to 1, and the post-list "customize by
// age" section (4 more photos) down to a short text-only summary since
// none of those photos tie to a specific one of the 15 numbered ideas.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0H9YH4BPD", title: "10.2 Inch Empty Round Wicker Easter Basket with Fabric Liner", w: 1205, h: 1149 },
    { asin: "B09NVBQFLR", title: "Hikkcos Easter Green Grass Raffia Shred Paper, 1/2 lb, Large Pack", w: 1500, h: 1484 },
  ],
  good: [
    { asin: "B07G25ZS3L", title: "KINGYAO Mochi Squishy Toys, 24 Pcs, Mini Kawaii Party Favors", w: 1500, h: 1472 },
    { asin: "B08G1XHF76", title: "The Dreidel Company Fillable Plastic Easter Eggs with Hinge, 50 Pack", w: 1500, h: 1199 },
  ],
  idea1: [
    { asin: "B0GKDZZZH7", title: "Pagather Travel Watercolor Paint Set, 24 Colors, Mini Pocket Kit", w: 1500, h: 1490 },
    { asin: "B0D47CV2TN", title: "Small Spiral Sketch Books, 5.5 x 8.5 Inch, 30 Sheets, 4 Pack", w: 1256, h: 1500 },
  ],
  idea2: [
    { asin: "B0049ORRNQ", title: "The Jelly Bean Factory Gourmet Jelly Beans Carrying Jar, 1.4 kg", w: 1200, h: 1500 },
    { asin: "B0GVW4111N", title: "Colombina Easter Choco Eggs, Milk Chocolate Bunny Pack", w: 1500, h: 968 },
  ],
  idea3: [
    { asin: "B0D1CK3NTX", title: "Women's Ruffle Striped Frilly Socks", w: 1500, h: 1213 },
    { asin: "B0B79Z4S8C", title: "BONANGEL Boys Fun Novelty Socks, 5 Pairs, Crazy Funny Cute Socks", w: 1500, h: 911 },
  ],
  idea4: [
    { asin: "B0BLMTFV16", title: "VolksRose 12 Pcs Wooden Brain Teaser Puzzles, IQ Challenge Games", w: 1430, h: 1500 },
    { asin: "B0F1V8WY8Q", title: "Pocket Size Travel Variety Puzzle Book, Sudoku, Word Search and More", w: 1000, h: 1500 },
  ],
  idea5: [
    { asin: "B0CVZL1K11", title: "Tub Works Kids Bath Bomb Potion Bath Toy, Variety 6 Pack", w: 1500, h: 1500 },
    { asin: "B0G27C2F1B", title: "Hempz Mini Hydration Travel Set, 4 Pack, 2.25 fl oz Body Lotions", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B0CKT55KVK", title: "Gold Initial Letter Keychain, Stainless Steel, for Women and Girls", w: 1194, h: 1500 },
    { asin: "B0G6JP2M11", title: "Cute Bag Charms for Handbags, 4 Pcs, Cherry Keychain Purse Accessories", w: 1113, h: 1415 },
  ],
  idea7: [
    { asin: "B0BRX9MTK6", title: "Flower Claw Hair Clips for Thick Hair, 8 Pcs", w: 1500, h: 1500 },
    { asin: "B0F2SK9N46", title: "Women's Solid Chiffon Scarf, Soft Sheer Lightweight Neck Scarf", w: 1157, h: 1434 },
  ],
  idea8: [
    { asin: "B0H3TXYQ84", title: "BESARME 24 Pcs Mini Pocket Notebooks, Travel Journal Memo Notepads", w: 1500, h: 1485 },
    { asin: "B01DN8TCEU", title: "Amazon Basics Classic Lined Hardcover Notebook with Elastic Closure", w: 798, h: 1500 },
  ],
  idea9: [
    { asin: "B0791V329G", title: "Sunny Days Maxx Bubbles Bubble Wands, 4 oz, 6 Pack", w: 767, h: 1500 },
    { asin: "B0GXZY9X8G", title: "Sidewalk Chalk for Kids, 24 Pcs, 13 Colors, Chalk Bucket, Washable", w: 1500, h: 1434 },
  ],
  idea10: [
    { asin: "B0FFGLTHPP", title: "Nicella Air Dry Clay Kit, 12 Animals, Modeling Clay for Kids", w: 1500, h: 1384 },
    { asin: "B0DCMFYZJ6", title: "Fippy 11 Pcs Hobby Model Building Tool Kit", w: 1500, h: 1487 },
  ],
  idea11: [
    { asin: "B07P29XQR4", title: "PopSockets Adhesive Phone Grip and Holder, Black", w: 800, h: 814 },
    { asin: "B0CL4HS7W7", title: "6 Inch Short USB C to C Charging Cable, Braided, 2 Pack", w: 1500, h: 1500 },
  ],
  idea12: [
    { asin: "B0GFY8TZ46", title: "Caramel Popcorn, 2 lb Bag, Sweet Crunchy Gourmet Snack", w: 1254, h: 1254 },
    { asin: "B095THSDCP", title: "Nature's Eat Sun Dried Turkish Apricots, Organic Dried Fruit Snack, 10 oz", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B08HD89CX6", title: "Glow in the Dark Rock Painting Kit for Kids Ages 6 to 12", w: 1500, h: 1499 },
    { asin: "B0FR4NVKQ1", title: "Cream Blank Cards and Envelopes, 4 x 6 Inch, 50 Pack", w: 1500, h: 1488 },
  ],
  idea14: [
    { asin: "B0DWGVM7RY", title: "USAOPOLY Flip 7 Card Game, Press Your Luck Strategy", w: 930, h: 1500 },
    { asin: "B0FHY6Z369", title: "Hasbro Grab and Go Games Bundle, 4 Pack", w: 1500, h: 951 },
  ],
  idea15: [
    { asin: "B073XM2HWQ", title: "Easyoulife Genuine Leather Zipper Credit Card Holder Wallet, 26 Card Slots", w: 1500, h: 950 },
    { asin: "B0DP5FDD9C", title: "stargo 50 Pack Large Plastic Easter Eggs, 3.2 Inch, Empty and Fillable", w: 1500, h: 1494 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "easter-basket-stuffer-ideas-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "easter-basket-stuffer-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

function pinPhoto(src, alt, w, h, pinUrl, label, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "easter-basket-stuffer-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Mini Art Supplies for Screen-Free Creativity",
    paras: [
      "Compact creativity is hard to get wrong, and mini art kits work across almost any age in the house.",
      "Kids genuinely love them, teens quietly use them for journaling, and more than a few adults enjoy them more than they'd ever admit.",
      "Small sketchbooks, mini watercolor sets, and a fresh pack of colored pencils all fit easily into a basket and encourage the kind of screen-free, imaginative fun that's harder to find than it should be.",
    ],
    photo: pinPhoto("mini-art.jpg", "Mini art supplies including sketchbooks and colored pencils styled as Easter basket stuffers", 683, 1024, "https://www.pinterest.com/pin/1119496419873664971/", "Mini Art Supplies Easter Basket Stuffer", "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Gourmet Candy With a Twist",
    paras: [
      "Skipping candy completely isn't the goal here &mdash; it's choosing something a little more considered than the usual bag of jelly beans.",
      "Artisan chocolate, flavored marshmallows, or specialty jelly beans all read as more intentional than the generic version sitting in the checkout aisle.",
      "Quality beats quantity almost every time. Swap in one genuinely good treat and the whole basket feels more thought-through.",
    ],
    photo: pinPhoto("gourmet-candy.jpg", "Gourmet candy and specialty treats styled as an elevated Easter basket stuffer", 714, 1024, "https://www.pinterest.com/pin/5770305768697930/", "Gourmet Candy Easter Basket Stuffer", "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Fun Socks With Personality",
    paras: [
      "Socks are a genuinely underrated basket stuffer. A bold pattern turns something purely practical into something people actually get excited about.",
      "They get a laugh the moment they're pulled out of the basket, and then they get worn for the rest of the year.",
      "They work for every single age group on this list, which makes them one of the easiest items to fall back on.",
    ],
    photo: pinPhoto("fun-socks.jpg", "Colorful patterned socks styled as a fun Easter basket stuffer", 853, 1024, "https://www.pinterest.com/pin/1266706141744977/", "Fun Socks Easter Basket Stuffer", "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Puzzle Games and Brain Teasers",
    paras: [
      "For a stuffer that actually challenges the brain instead of just filling space, a small puzzle or brain teaser does real work.",
      "Mini wooden puzzles, pocket-sized brain teasers, and compact trivia decks all hold attention across a wide range of ages.",
      "The right one can keep someone genuinely absorbed for hours, no screen required &mdash; which is a rare thing for a basket stuffer to pull off.",
    ],
    photo: pinPhoto("puzzle-games.jpg", "Small puzzle games and brain teasers styled as Easter basket stuffers", 574, 1024, "https://www.pinterest.com/pin/335236766096554387/", "Puzzle Games Easter Basket Stuffer", "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Bath Bombs and Self-Care Minis",
    paras: [
      "Self-care doesn't have to be reserved for adult gift sets &mdash; kids enjoy a good bath bomb just as much.",
      "A scented bath bomb, a small lotion, or a bit of fizzy bath fun all fit easily into a basket without taking up much room.",
      "It's a small gesture, but it signals a kind of thoughtfulness that a handful of candy rarely manages on its own.",
    ],
    photo: pinPhoto("bath-bombs.jpg", "Bath bombs and self-care minis styled as Easter basket stuffers", 683, 1024, "https://www.pinterest.com/pin/863917141058086358/", "Bath Bombs Easter Basket Stuffer", "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Personalized Keychains or Charms",
    paras: [
      "A personal touch tends to stand out more than almost anything else in a basket, and a custom keychain is one of the easiest ways to add one.",
      "An initial, a small charm, or something tied to an inside joke all feel special without costing much at all.",
      "These are the kind of small items that end up staying in daily use long after the rest of the basket is forgotten.",
    ],
    photo: pinPhoto("keychains.jpg", "Personalized keychains and charms styled as Easter basket stuffers", 768, 1024, "https://www.pinterest.com/pin/921900986241731341/", "Personalized Keychain Easter Basket Stuffer", "idea6"),
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Spring-Themed Accessories",
    paras: [
      "Leaning into the season is an easy way to make a basket feel timely rather than generic.",
      "A floral hair clip, a pastel scarf, or a small spring-themed accessory all signal the shift into warmer days without much effort.",
      "These little seasonal touches make a basket feel intentional in a way that's hard to fake with anything else.",
    ],
    photo: pinPhoto("spring-accessories.jpg", "Spring-themed accessories styled as seasonal Easter basket stuffers", 575, 1024, "https://www.pinterest.com/pin/44191640088751303/", "Spring-Themed Easter Basket Stuffer", "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Mini Books or Inspirational Reads",
    paras: [
      "Books are close to a sure thing, and they don't need to be anything large to make an impression.",
      "A pocket-sized novel, a small journal, or a quote book all tuck easily into a basket without crowding it.",
      "Slipping a small book into a basket gives someone a tiny escape &mdash; a quieter gift than most of the other items on this list, but often the one that gets remembered.",
    ],
    photo: pinPhoto("mini-books.jpg", "Small books and journals styled as Easter basket stuffers", 683, 1024, "https://www.pinterest.com/pin/234820568066358169/", "Mini Books Easter Basket Stuffer", "idea8"),
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Outdoor Fun for Spring Energy",
    paras: [
      "Easter marks the start of warmer weather, so it makes sense to lean into that instead of staying indoors.",
      "Bubbles, sidewalk chalk, or a small kite all encourage movement over screen time, and work surprisingly well across every age group &mdash; yes, including the adults.",
      "A bottle of bubbles tossed into an adult's basket as a joke has a tendency to end with everyone outside, laughing like kids again.",
    ],
    photo: pinPhoto("outdoor-fun.jpg", "Bubbles, sidewalk chalk and outdoor toys styled as spring Easter basket stuffers", 683, 1024, "https://www.pinterest.com/pin/428897564540316290/", "Outdoor Fun Easter Basket Stuffer", "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Hobby-Based Stuffers That Feel Personal",
    paras: [
      "This is where a basket moves from generic to genuinely thoughtful &mdash; built around something the person already loves.",
      "A small tool for a hobby they already have, a themed accessory, or a related mini kit all show that real attention went into the choice.",
      "When a stuffer is tailored to someone's actual interests instead of a generic age bracket, it reads immediately as more considered.",
    ],
    photo: pinPhoto("hobby-based.jpg", "Hobby-based Easter basket stuffers tailored to specific interests", 683, 1024, "https://www.pinterest.com/pin/8796161770373209/", "Hobby-Based Easter Basket Stuffer", "idea10"),
  },
  {
    n: "11",
    productsKey: "idea11",
    title: "Tech Accessories That Actually Get Used",
    paras: [
      "Small tech accessories punch above their weight here &mdash; no expensive gadgets required to make a genuine impression.",
      "A compact charging cable, a pair of earbud covers, or a phone grip all solve a small daily annoyance most people already have.",
      "Teens appreciate them, adults appreciate them even more, and nobody has ever complained about receiving an extra charging cable.",
    ],
    photo: pinPhoto("tech-accessories.jpg", "Small tech accessories styled as practical Easter basket stuffers", 573, 1024, "https://www.pinterest.com/pin/4605141801493053184/", "Tech Accessories Easter Basket Stuffer", "idea11"),
  },
  {
    n: "12",
    productsKey: "idea12",
    title: "Sweet Treat Alternatives",
    paras: [
      "For anyone trying to dodge a full sugar crash, there are plenty of treats that still feel indulgent without being pure candy.",
      "Gourmet popcorn, flavored nut mixes, or dried fruit all deliver the same snackable satisfaction minus the sugar spike.",
      "Swap in a few of these and they tend to disappear just as fast as the candy would have &mdash; sometimes faster.",
    ],
    photo: pinPhoto("sweet-alternatives.jpg", "Gourmet popcorn and nut mixes styled as non-candy Easter basket stuffers", 683, 1024, "https://www.pinterest.com/pin/88383211433689124/", "Sweet Treat Alternative Easter Basket Stuffer", "idea12"),
  },
  {
    n: "13",
    productsKey: "idea13",
    title: "DIY Stuffers With Heart",
    paras: [
      "For a basket that feels genuinely meaningful rather than just well-shopped, something handmade goes a long way.",
      "A small handmade craft, a photo, or a personal memento all cost little but tend to mean the most.",
      "Even a simple handwritten note tucked into the basket, explaining why someone matters, costs nothing and often becomes the one item that actually gets kept.",
    ],
    photo: pinPhoto("diy-heart.jpg", "Handmade DIY items and a handwritten note styled as a meaningful Easter basket stuffer", 574, 1024, "https://www.pinterest.com/pin/303781937387215087/", "DIY Easter Basket Stuffer", "idea13"),
  },
  {
    n: "14",
    productsKey: "idea14",
    title: "Small Games That Spark Connection",
    paras: [
      "A good game elevates a basket from basic to genuinely memorable, and it does something candy never manages: it pulls people together.",
      "A compact card game, a small trivia set, or a two-player puzzle all create a shared moment once the egg hunt itself is over.",
      "A simple card game tucked into one adult's basket has a way of turning into a two-hour family competition nobody saw coming.",
    ],
  },
  {
    n: "15",
    productsKey: "idea15",
    title: "Gift Cards With a Creative Twist",
    paras: [
      "Gift cards can feel like the obvious, low-effort choice, but presentation changes that completely.",
      "Rolling it inside a small treat, attaching it to a handwritten note, or hiding it inside a plastic egg all turn a flat card into something that feels considered.",
      "Wrapped with a little intention, a gift card stops feeling generic and starts feeling like it was actually chosen for that person.",
    ],
    photo: pinPhoto("gift-cards.jpg", "Gift card presented creatively inside a decorated Easter basket", 968, 968, "https://www.pinterest.com/pin/4607815874233480320/", "Gift Card Easter Basket Stuffer", "idea15"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || (idea.productsKey ? productGrid(idea.productsKey) : "")}`;
}

const body = `
<p>It's easy to treat the Easter basket as an afterthought next to the bigger gift, but the small surprises are usually what spark the biggest reaction. Kids dump the basket out and inspect every single item; adults laugh at the ones that genuinely surprise them. That layered excitement is what makes the morning feel memorable, not just the size of what's inside.</p>
<p>None of that requires a trip through the candy aisle on autopilot. A few well-chosen, age-appropriate items beat a pile of generic filler every time &mdash; and most of the best ones aren't candy at all.</p>
${photo("hero.jpg", "Colorful Easter basket filled with a variety of thoughtfully chosen stuffers", 1200, 945, "hero")}

<h2>What Actually Makes a Good Stuffer</h2>
<p>Three questions settle most of it: does it spark curiosity or joy, will it actually get used, and is it something the person wouldn't expect? A basket built entirely around "safe" choices ends up forgettable, while one with a single genuine surprise is usually the one people remember by name the next year.</p>
${pinPhoto("intro-memories.jpg", "Easter basket styled with a thoughtful mix of stuffers that create lasting memories", 683, 1024, "https://www.pinterest.com/pin/1119496419873547943/", "Thoughtfully Styled Easter Basket", "good")}

<h2>15 Easter Basket Stuffer Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Adjusting for Age</h2>
<p>Toddlers do best with safety and sensory fun &mdash; bright colors, soft textures, nothing with small, swallowable parts. Kids want variety and layers of discovery, so mixing a few categories from this list works better than repeating one. Teens respond to being treated like teens, not handed something that reads as a kindergarten craft project, so tech accessories, hobby-based picks and gift cards tend to land best. Adults rarely admit they care, and then quietly enjoy every thoughtful detail anyway.</p>

<h2>Final Thoughts</h2>
<p>A basket people actually love doesn't require perfection, just a little thought. Pick something that sparks joy, add one practical item, include a genuine surprise, and personalize wherever it's easy to.</p>
<p>Focus on connection over quantity and the basket stops being a pile of stuff and starts being something people actually remember unpacking.</p>
`;

module.exports = { body };
