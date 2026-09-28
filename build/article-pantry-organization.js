// Body content for "How to Organise Your Pantry Without Making It a Full-Time
// Job". Photos mix Pinterest pins the user provided (credited back to their
// pin) with licensed stock photography fetched to fill remaining sections
// (credited to their original photographer/source). No Amazon products on
// this one — photos only, per the user's request.

const { picture } = require("./picture-helper.js");

const PIN = {
  zonesByCategory: { src: "zones-by-category", w: 576, h: 1024, alt: "Pantry closet with a door-mounted wire rack of oils and sauces, wicker baskets and a wood utensil crock", url: "https://www.pinterest.com/pin/1688918607594985/", label: "Organized Pantry by Category" },
  breakfastZone: { src: "breakfast-zone", w: 1271, h: 1906, alt: "Wire shelving pantry with white bins labeled Breakfast, Pasta and Snacks, cereal boxes and canned beans", url: "https://www.pinterest.com/pin/350084571049199354/", label: "Labeled Breakfast Zone in a Pantry" },
  bakingZone: { src: "baking-zone", w: 1024, h: 1536, alt: "Pantry shelves with clear labeled containers for rice, pasta, spaghetti, oats, beans, flour, sugar, brown sugar, cocoa and flaxseed", url: "https://www.pinterest.com/pin/1099370959078065082/", label: "Labeled Baking Zone in a Pantry" },
  pastaGrainZone: { src: "pasta-grain-zone", w: 768, h: 1376, alt: "Walk-in pantry closet with labeled clear containers for oats, pasta, rice, sugar and flour on wood shelves", url: "https://www.pinterest.com/pin/1091348922226293839/", label: "Pasta and Grain Zone in a Pantry" },
  snackZone: { src: "snack-zone", w: 736, h: 1104, alt: "White grid pantry shelving with black wire baskets labeled Breakfast and Snacks alongside clear labeled containers", url: "https://www.pinterest.com/pin/703756185421758/", label: "Snack Zone in a Pantry" },
  smallPantry: { src: "small-pantry", w: 736, h: 1104, alt: "Small door-mounted pantry organizer with labeled spice jars, canned goods and wicker baskets in a compact closet", url: "https://www.pinterest.com/pin/995225217697857239/", label: "Small Pantry Organization" },
  containersFunction: { src: "containers-function", w: 900, h: 1200, alt: "Deep pantry shelving with small appliances, wicker baskets, clear containers and canned goods on a wire riser", url: "https://www.pinterest.com/pin/316659417555593568/", label: "Functional Pantry Containers" },
  labelEverything: { src: "label-everything", w: 1783, h: 2560, alt: "Corner pantry shelves with glass jars hand-labeled Granola, Cranberries, Cashews, Brown Sugar and Flaxseed Meal", url: "https://www.pinterest.com/pin/87046205287454482/", label: "Clearly Labeled Pantry Jars" },
  lowerShelvesHeavy: { src: "lower-shelves-heavy", w: 717, h: 1200, alt: "Pantry corner shelves with canned goods, glass spice jars and snack containers stocked from floor to ceiling", url: "https://www.pinterest.com/pin/68747859637/", label: "Heavy Items on Lower Pantry Shelves" },
};

const STOCK = {
  hero: { src: "hero-pantry-jars", w: 6048, h: 4032, alt: "Neatly organized pantry shelves lined with glass jars and bottles of dry goods", url: "https://commons.wikimedia.org/w/index.php?curid=186505313", label: "Shixart1985", site: "Wikimedia Commons" },
  whyMatters: { src: "reaching-for-jar", w: 6048, h: 4024, alt: "A hand reaching for a labeled glass jar on a wooden pantry shelf", url: "https://commons.wikimedia.org/w/index.php?curid=186505463", label: "Shixart1985", site: "Wikimedia Commons" },
  whatToKeep: { src: "pantry-shelving-storage", w: 1024, h: 681, alt: "Built-in pantry shelving with a mix of jars, boxes and canned goods", url: "https://www.rawpixel.com/image/6082589/pantry-storage", label: "rawpixel", site: "rawpixel" },
  checkDates: { src: "checking-spice-jar-dates", w: 6048, h: 4024, alt: "Person examining the label on a spice jar while checking pantry shelves", url: "https://commons.wikimedia.org/w/index.php?curid=186505404", label: "Shixart1985", site: "Wikimedia Commons" },
  cleanShelves: { src: "clean-labeled-pantry-shelves", w: 3072, h: 2304, alt: "Clean, organized kitchen shelves with labeled jars and containers", url: "https://commons.wikimedia.org/w/index.php?curid=92080420", label: "Melissa Doroquez", site: "Wikimedia Commons" },
  eyeLevel: { src: "eye-level-shelf-herbs", w: 6048, h: 4024, alt: "Person reaching for a jar of herbs on a shelf at eye level in a pantry", url: "https://commons.wikimedia.org/w/index.php?curid=186505450", label: "Shixart1985", site: "Wikimedia Commons" },
  fifo: { src: "rotating-pantry-stock", w: 1024, h: 727, alt: "Modern pantry shelving with utensils and stacked dry goods ready for rotation", url: "https://www.rawpixel.com/image/5965024/modern-pantry-with-utensil-kitchen", label: "rawpixel", site: "rawpixel" },
  mealPrep: { src: "meal-prep-staples", w: 1024, h: 687, alt: "Salt and pepper shakers and pantry staples set out on a wooden table", url: "https://www.rawpixel.com/image/3290153/free-photo-image-bowl-cc0-creative-commons", label: "rawpixel", site: "rawpixel" },
  monthlyReset: { src: "monthly-pantry-reset", w: 4024, h: 6048, alt: "Woman in a red shirt holding a notebook while checking labeled jars on pantry shelves", url: "https://commons.wikimedia.org/w/index.php?curid=191946877", label: "Shixart1985", site: "Wikimedia Commons" },
  finalThoughts: { src: "labeled-spice-rack", w: 960, h: 640, alt: "Close-up of a rotating spice rack with labeled shakers including cinnamon and oregano", url: "https://stocksnap.io/photo/spice-rack-7BFHFRHPUP", label: "Matt Bango", site: "StockSnap" },
};

function photo(key) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "pantry-organization", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>`;
}

function stockPhoto(key) {
  const p = STOCK[key];
  return `<figure>
      ${picture({ dir: "pantry-organization", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo by ${p.label} via <a href="${p.url}" target="_blank" rel="nofollow noopener">${p.site}</a></figcaption>
    </figure>`;
}

const body = `
<p>A messy pantry has a special talent for hiding the one thing you actually need. If you want to learn how to organise your pantry, start with one simple idea: make everything easy to see, easy to reach, and easy to put back. I learned this the hard way after buying the same pasta twice because apparently the pantry had developed its own little Bermuda Triangle.</p>
<p>A good pantry does not need matching containers, expensive shelving, or a picture-perfect makeover. It needs a system that fits the way you actually cook and shop. Once you organise your pantry around those habits, keeping it tidy feels much easier.</p>
${stockPhoto("hero")}

<h2>Why Does Pantry Organisation Matter So Much?</h2>
<p>A well-organised pantry saves more than space. It saves time, reduces duplicate purchases, and helps you notice food before it gets forgotten at the back of a shelf.</p>
<p>I especially notice the difference when I group ingredients by how I use them rather than simply by appearance. Pasta, rice, sauces, and canned tomatoes make more sense together when I often use them for quick dinners.</p>
<p>Good pantry organisation should answer three questions quickly:</p>
<ul>
  <li>What do I have?</li>
  <li>Where does each item belong?</li>
  <li>What should I use first?</li>
</ul>
<p>That sounds simple, but those three questions change the entire way you use the space.</p>
<p>The USDA recommends storing dry foods in a cool, clean, dry place and checking packaging for holes or moisture that could affect quality. The agency also recommends airtight plastic or glass containers for extra protection.</p>
<blockquote><p>&ldquo;Store canned goods in a cool, clean dry place.&rdquo;</p><cite>&mdash; USDA Food Safety and Inspection Service</cite></blockquote>
<p>That advice matters even if your pantry looks nothing like those perfectly styled kitchen photos online. Pretty shelves mean very little if flour picks up moisture or cereal goes stale.</p>
${stockPhoto("whyMatters")}

<h2>What Should You Keep in a Pantry?</h2>
<p>Before you start organising, decide what actually belongs there. I prefer to think of a pantry as a working food zone rather than a storage room for every random kitchen item.</p>
<p>According to the USDA, shelf-stable foods commonly include rice, pasta, flour, sugar, spices, oils, canned foods, and other foods that do not require refrigeration until opening.</p>
<p>You can divide your pantry into broad categories such as:</p>
<ul>
  <li>Breakfast foods</li>
  <li>Pasta, rice, and grains</li>
  <li>Baking ingredients</li>
  <li>Canned foods</li>
  <li>Snacks</li>
  <li>Sauces and condiments</li>
  <li>Spices and seasonings</li>
  <li>Oils and vinegars</li>
  <li>Tea, coffee, and drinks</li>
  <li>Backstock and unopened extras</li>
</ul>
<p>You do not need every category if your pantry does not contain those foods. Why create a &ldquo;baking zone&rdquo; if you bake approximately twice a year?</p>
<p>The best system reflects your actual grocery habits, not somebody else&rsquo;s dream pantry.</p>
${stockPhoto("whatToKeep")}

<h2>How to Organise Your Pantry Before Buying Containers</h2>
<p>This part feels less glamorous, but it makes the biggest difference. Do not start by buying twenty acrylic bins because a beautifully organised pantry convinced you that you suddenly need them.</p>
<h3>Empty the Pantry Completely</h3>
<p>Take everything out and place it on a counter, table, or clean floor area. Empty shelves give you a much better idea of how much space you actually have.</p>
<p>As you remove items, group similar foods together. Put every pasta package in one area, every canned food in another, and every baking ingredient together.</p>
<p>You might discover that you own four bags of rice and absolutely no idea how that happened.</p>
<h3>Check Dates and Condition</h3>
<p>Look through packages for expired, damaged, damp, or pest-affected food. USDA guidance recommends checking dry-food packaging for holes and protecting dry foods from moisture.</p>
<p>Do not automatically treat every printed date as a safety deadline. FoodSafety.gov explains that many date labels relate to quality rather than food safety, although you should still follow product-specific storage guidance and use good judgment.</p>
<p>For storage guidance on specific foods, the USDA&rsquo;s FoodKeeper tool provides recommended storage information for many foods and beverages.</p>
<blockquote><p>&ldquo;The FoodKeeper helps you understand food and beverages storage.&rdquo;</p><cite>&mdash; FoodSafety.gov</cite></blockquote>
${stockPhoto("checkDates")}
<h3>Clean the Shelves</h3>
<p>Vacuum crumbs from corners and wipe the shelves before you put anything back. Let the shelves dry completely before adding food.</p>
<p>This step also gives you a chance to spot leaks, moisture, insects, or damaged packaging. Trust me, discovering a mysterious sticky patch before you reorganise beats discovering it six months later.</p>
${stockPhoto("cleanShelves")}

<h2>How to Organise Your Pantry by Zones</h2>
<p>Once you know what you have, create zones based on food categories and everyday use.</p>
<p>I find zones much easier to maintain than organising everything by package size. When I cook, I think &ldquo;Where are my pasta ingredients?&rdquo; rather than &ldquo;Where did I put the tall beige box?&rdquo;</p>
${photo("zonesByCategory")}
<h3>Create a Breakfast Zone</h3>
<p>Keep cereals, oats, pancake mixes, spreads, coffee, and tea together if you use them regularly.</p>
<p>Place frequently used breakfast items around eye level. Put less frequently used products higher or farther back.</p>
<p>If several people use the pantry, keep everyday breakfast foods somewhere everyone can reach easily.</p>
${photo("breakfastZone")}
<h3>Create a Baking Zone</h3>
<p>Keep flour, sugar, baking powder, baking soda, cocoa, chocolate chips, sprinkles, and other baking ingredients together.</p>
<p>A small bin can keep packets and smaller ingredients from spreading across the shelf. You can also use labels to make the category obvious.</p>
<p>I especially like this setup because baking ingredients often come in awkward little packets that somehow manage to make one shelf look chaotic within seconds.</p>
${photo("bakingZone")}
<h3>Create a Pasta and Grain Zone</h3>
<p>Group pasta, rice, quinoa, couscous, noodles, and similar foods together.</p>
<p>If you use clear containers, label them clearly. Do not rely on your memory to identify every white powder and grain six months from now.</p>
<p>Clear containers work particularly well for foods you buy repeatedly, because you can see when supplies run low.</p>
${photo("pastaGrainZone")}
<h3>Create a Snack Zone</h3>
<p>Give snacks their own area instead of scattering them throughout the pantry.</p>
<p>You can use baskets for granola bars, crackers, chips, nuts, and individually packaged snacks. Baskets also make it easier to pull several items forward at once.</p>
<p>If children use the pantry, place their everyday snacks somewhere they can safely reach.</p>
${photo("snackZone")}

<h2>How to Organise Your Pantry Shelves</h2>
<p>The shelves themselves should follow a simple rule: store the things you use most often where you can see and reach them easily.</p>
<h3>Keep Everyday Foods at Eye Level</h3>
<p>Put breakfast foods, coffee, snacks, pasta, and other regular staples in the easiest-to-reach areas.</p>
<p>You should not need a step stool to grab the cereal you eat every morning. Save higher shelves for occasional-use ingredients and backup supplies.</p>
${stockPhoto("eyeLevel")}
<h3>Use Lower Shelves for Heavy Items</h3>
<p>Cans, large jars, bottles, and bulk ingredients can make shelves unnecessarily difficult to manage.</p>
<p>Keep heavier items lower whenever possible. This makes them easier to handle and keeps your eye-level shelves available for lighter everyday foods.</p>
${photo("lowerShelvesHeavy")}
<h3>Use Upper Shelves for Backstock</h3>
<p>Do you really need three unopened bags of flour sitting at the front?</p>
<p>Keep extra and rarely used products toward the back or on higher shelves. Just make sure you remember that they exist.</p>
<p>A simple label such as BACKSTOCK can help prevent the classic &ldquo;I forgot I bought that&rdquo; situation.</p>

<h2>How to Organise a Small Pantry</h2>
<p>You do not need a walk-in pantry to create a functional system. In fact, small pantries often benefit even more from clear categories.</p>
<p>Use vertical space whenever possible. Shelf risers, stackable bins, and tiered shelves can help you see items hiding behind other products.</p>
<p>I also like shallow bins for small packets. Instead of digging through an entire shelf for taco seasoning or gravy mix, you can pull out one container and see everything at once.</p>
<p>For a narrow pantry, try grouping foods by frequency:</p>
<ul>
  <li>Daily-use foods at the front</li>
  <li>Weekly-use foods in the middle</li>
  <li>Occasional-use foods toward the back</li>
  <li>Backup supplies on higher shelves</li>
</ul>
<p>The goal does not involve squeezing every possible item into every available inch. Leave enough breathing room to actually remove things without starting a pantry avalanche.</p>
${photo("smallPantry")}

<h2>How to Organise Your Pantry With Containers</h2>
<p>Containers can make a pantry look dramatically cleaner, but you do not need to transfer everything.</p>
<p>I prefer containers for foods that benefit from better visibility and protection, such as flour, rice, pasta, cereal, oats, sugar, and dry beans.</p>
<h3>Choose Containers for Function</h3>
<p>Look for containers that:</p>
<ul>
  <li>Seal tightly</li>
  <li>Stack easily</li>
  <li>Fit your shelves</li>
  <li>Make the contents visible</li>
  <li>Open easily</li>
  <li>Clean without hassle</li>
</ul>
<p>Avoid buying containers before measuring your shelves. That sounds obvious, yet people regularly buy beautiful storage products that fit absolutely nowhere.</p>
<p>Measure shelf height, depth, and width first.</p>
<p>Then choose containers that make the most of that space.</p>
${photo("containersFunction")}
<h3>Label Everything Clearly</h3>
<p>A clear container does not always need a label, but labels help when ingredients look similar.</p>
<p>Labels also create a consistent system when multiple people use the pantry.</p>
<p>You can label by ingredient, category, or both. For example, &ldquo;Rice,&rdquo; &ldquo;Pasta,&rdquo; and &ldquo;Baking&rdquo; keep things simple.</p>
<p>Do not turn your pantry into a filing cabinet. If you need a spreadsheet to find the cinnamon, something has gone slightly too far.</p>
${photo("labelEverything")}

<h2>How to Organise Your Pantry Using FIFO</h2>
<p>One of my favourite pantry habits involves first in, first out, often shortened to FIFO.</p>
<p>When you buy a new package of something you already have, move the older package toward the front and place the newer one behind it.</p>
<p>This simple habit helps you use older products before newer ones.</p>
<p>Restaurants and professional kitchens rely heavily on organised stock rotation because it makes inventory easier to manage. You can borrow the same basic idea at home without turning your kitchen into a commercial operation.</p>
<blockquote><p>&ldquo;Eat or freeze items before you need to throw them away.&rdquo;</p><cite>&mdash; FoodSafety.gov guidance on reducing food waste</cite></blockquote>
<p>For frequently purchased foods, I find this system almost effortless once it becomes a habit.</p>
${stockPhoto("fifo")}

<h2>How to Organise Your Pantry for Easy Meal Prep</h2>
<p>Your pantry should support the way you cook.</p>
<p>If you regularly make pasta, keep pasta, canned tomatoes, sauces, herbs, and seasonings close together. If you bake frequently, keep your baking staples grouped and easy to reach.</p>
<p>Think about your most common meals, then organise ingredients around those meals.</p>
<p>This approach feels much more practical than organising purely by food type.</p>
<p>You can even create a small &ldquo;quick dinner&rdquo; zone with ingredients such as:</p>
<ul>
  <li>Pasta</li>
  <li>Rice</li>
  <li>Canned beans</li>
  <li>Tomato sauce</li>
  <li>Stock</li>
  <li>Noodles</li>
  <li>Common seasonings</li>
</ul>
<p>When dinner feels rushed, that little section can save you from opening every cupboard in the kitchen.</p>
${stockPhoto("mealPrep")}

<h2>How to Keep Your Pantry Organised</h2>
<p>Organising your pantry once feels satisfying. Keeping it organised requires a tiny bit of maintenance.</p>
<p>I recommend doing a quick reset every time you bring home groceries. Put newer items behind older ones and return everything to its category.</p>
<p>You do not need another giant weekend project.</p>
<h3>Do a Monthly Pantry Reset</h3>
<p>Once a month, spend around 10 to 15 minutes checking the pantry.</p>
<p>Look for:</p>
<ul>
  <li>Nearly empty containers</li>
  <li>Duplicate products</li>
  <li>Damaged packaging</li>
  <li>Expired or poor-quality food</li>
  <li>Ingredients you forgot about</li>
  <li>Items that need restocking</li>
</ul>
<p>A short monthly reset prevents the pantry from slowly returning to chaos.</p>
${stockPhoto("monthlyReset")}
<h3>Keep a Simple Shopping List</h3>
<p>When you notice an item running low, add it to your shopping list immediately.</p>
<p>I find this much more useful than trying to remember everything while standing in the grocery store wondering whether there are three jars of peanut butter hiding somewhere at home.</p>

<h2>Common Pantry Organisation Mistakes</h2>
<p>Even a beautiful pantry can become annoying if the system creates extra work.</p>
<h3>Buying Too Many Matching Containers</h3>
<p>Matching containers look great, but you do not need to decant every single food.</p>
<p>Use them where they improve visibility, freshness, stacking, or access. Keep packaged products in their original packaging when transferring them offers little benefit.</p>
<h3>Creating Categories That Feel Too Specific</h3>
<p>You do not need separate bins for every tiny food group.</p>
<p>If you rarely use something, broader categories make more sense. The best system feels obvious without requiring instructions.</p>
<h3>Hiding Everything Behind Decorative Bins</h3>
<p>Pretty storage can create a visibility problem.</p>
<p>If you cannot see what you own, you may forget about it. Use clear containers or open bins for products that you frequently need to monitor.</p>
<h3>Ignoring Food Safety</h3>
<p>A pantry should stay cool, dry, clean, and protected from moisture and pests. USDA guidance specifically recommends appropriate dry storage conditions and checking packaging for damage.</p>
<p>Also remember that not every food belongs in the pantry. Follow the product label and storage instructions, especially after opening.</p>

<h2>How to Organise Your Pantry So It Stays That Way</h2>
<p>The real trick involves creating a system that requires almost no thought.</p>
<p>Every item needs a home. Every category needs enough space. Every new grocery item needs to follow the same rules when it enters the pantry.</p>
<p>I like keeping the simplest rule possible:</p>
<p>Take something out, use it, then put the replacement in the same place.</p>
<p>That sounds almost ridiculously basic, but simple systems usually survive longer than complicated ones.</p>
<p>You can also keep a small amount of empty shelf space. That gives you room to move items around when your shopping changes.</p>
<blockquote><p>&ldquo;Dry stores should be kept neat and clean.&rdquo;</p><cite>&mdash; USDA sanitation guidance (AMS)</cite></blockquote>
<p>Your pantry does not need to stay perfectly styled every day. It simply needs to stay functional.</p>

<h2>Final Thoughts on How to Organise Your Pantry</h2>
<p>Learning how to organise your pantry does not require a huge budget or a massive kitchen makeover. Start by emptying the shelves, checking your food, cleaning the space, and grouping ingredients into practical zones.</p>
<p>Then place everyday foods within easy reach, keep heavy items lower, use containers where they genuinely help, and rotate older food toward the front.</p>
<p>Most importantly, organise the pantry around your real life. If you cook pasta three times a week, make pasta easy to grab. If you bake once every six months, do not give baking supplies half the pantry.</p>
<p>A good pantry should make cooking easier, grocery shopping smarter, and forgotten food less common.</p>
<p>And if your pantry stays perfectly organised for more than a week, congratulations. You have officially achieved what the rest of us consider kitchen-level sorcery.</p>
${stockPhoto("finalThoughts")}
`;

module.exports = { body };
