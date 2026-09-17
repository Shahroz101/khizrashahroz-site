// Body content for the "15 Mason Jar Decor Ideas" post.
// Images sourced from Pinterest pins the user selected and provided
// directly; each is credited back to its pin per their request.

const { picture } = require("./picture-helper.js");

const PIN = {
  hero: { src: "hero", w: 1040, h: 2030, alt: "Wall-mounted Mason jar sconces glowing with fairy lights and holding white rose stems", url: "https://www.pinterest.com/pin/17592254793796164/", label: "Mason Jar Wall Sconce Lighting" },
  flowerVases: { src: "flower-vases", w: 896, h: 1280, alt: "Three jute-wrapped Mason jars holding cotton stems and budding branches on a shelf", url: "https://www.pinterest.com/pin/14496030046872989/", label: "Jute-Wrapped Mason Jar Vases" },
  painted: { src: "painted-jars", w: 736, h: 1312, alt: "Painted Mason jars in rustic finishes styled together on a shelf", url: "https://www.pinterest.com/pin/4609293609518057536/", label: "Rustic Painted Mason Jars" },
  candles: { src: "candle-holders", w: 1024, h: 1536, alt: "Mason jar filled with a lit candle for soft, ambient lighting", url: "https://www.pinterest.com/pin/162270392820613192/", label: "Cozy Mason Jar Candle Lantern" },
  herbs: { src: "herb-planters", w: 829, h: 1216, alt: "Fresh basil, rosemary and thyme growing in Mason jars tied with twine on a sunlit table", url: "https://www.pinterest.com/pin/70437491504914/", label: "Mason Jar Herb Planters" },
  bathroom: { src: "bathroom-organizers", w: 500, h: 500, alt: "Clear Mason jar used to organize toothbrushes on a bathroom counter", url: "https://www.pinterest.com/pin/1027594839989398990/", label: "Mason Jar Bathroom Storage" },
  kitchen: { src: "kitchen-storage", w: 564, h: 1002, alt: "Rustic kitchen shelf lined with Mason jars storing dried goods and utensils", url: "https://www.pinterest.com/pin/60024607526114920/", label: "Rustic Mason Jar Kitchen Storage" },
  hanging: { src: "hanging-planters", w: 832, h: 1248, alt: "Mason jar planted with a trailing plant and hung near a window", url: "https://www.pinterest.com/pin/435090014024397268/", label: "Hanging Mason Jar Planter" },
  centerpiece: { src: "centerpiece", w: 794, h: 1059, alt: "Farmhouse-style Mason jar centerpiece wrapped with a bow on a dining table", url: "https://www.pinterest.com/pin/1088252697441232665/", label: "Farmhouse Mason Jar Centerpiece" },
  wallDecor: { src: "wall-decor", w: 1080, h: 1080, alt: "Mason jar sconces mounted on a wall as farmhouse-style wall decor", url: "https://www.pinterest.com/pin/9640586698343705/", label: "Farmhouse Mason Jar Wall Sconces" },
  fairyLight: { src: "fairy-lights", w: 1125, h: 2000, alt: "Mason jar centerpiece filled with fairy lights and baby's breath", url: "https://www.pinterest.com/pin/1095148834421884007/", label: "Mason Jar Fairy Light Centerpiece" },
  seasonal: { src: "seasonal-decor", w: 896, h: 1200, alt: "Painted Mason jar luminary styled for fall and Halloween decorating", url: "https://www.pinterest.com/pin/876583514995754157/", label: "Seasonal Mason Jar Luminary" },
  office: { src: "office-organizers", w: 700, h: 1050, alt: "Mason jars holding pens, pencils and paintbrushes on a desk", url: "https://www.pinterest.com/pin/488007309628549050/", label: "Mason Jar Desk Organizer" },
  terrarium: { src: "terrariums", w: 736, h: 934, alt: "Small succulents planted inside a glass Mason jar terrarium", url: "https://www.pinterest.com/pin/36873290698951650/", label: "Succulent Mason Jar Terrarium" },
  rustic: { src: "rustic-decor", w: 768, h: 960, alt: "Farmhouse wall sconces made from Mason jars against a rustic wood wall", url: "https://www.pinterest.com/pin/125115695895624301/", label: "Rustic Farmhouse Mason Jar Sconces" },
  gift: { src: "gift-jars", w: 683, h: 1024, alt: "Five labeled Mason jars filled with hot cocoa, cookie mix and bath salts as gifts", url: "https://www.pinterest.com/pin/1049127675717335937/", label: "Mason Jar Gift Jars" },
  styleGrouping: { src: "style-grouping", w: 1200, h: 1827, alt: "Lace-wrapped Mason jars grouped together with dried baby's breath on a dresser", url: "https://www.pinterest.com/pin/636414991137681412/", label: "Lace-Wrapped Mason Jar Grouping" },
  styleRepetition: { src: "style-repetition", w: 564, h: 1006, alt: "Painted Mason jars in muted tones filled with dried flowers, styled together", url: "https://www.pinterest.com/pin/482729653829827833/", label: "Painted Mason Jars With Dried Flowers" },
  jarTypes: { src: "jar-types", w: 924, h: 1386, alt: "Clear Mason jar with a metal lid and twine bow, labeled as a hot cocoa gift jar", url: "https://www.pinterest.com/pin/354377064452400185/", label: "Classic Mason Jar With Metal Lid" },
  mistakes: { src: "mistakes", w: 736, h: 1312, alt: "Painted Mason jar styled as a candle holder", url: "https://www.pinterest.com/pin/4609293567373690944/", label: "Painted Mason Jar Candle Holder" },
};

// No cropping: every image renders at its real, original pixel ratio.
// Served as AVIF first, WebP second, original JPEG as the final fallback —
// see picture() in build.js for the shared <picture> markup.
function photo(key) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "mason-jar", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Mason Jar Flower Vases",
    photoKey: "flowerVases",
    paras: [
      "Let's start with the obvious one because honestly, it works.",
      "Turn Mason jars into simple flower vases by filling them with fresh flowers, dried stems, eucalyptus, baby's breath, or whatever greenery you can find.",
      "I especially like using three jars at different heights rather than placing one large vase in the middle of a table. The variation creates more movement and makes the arrangement feel casual.",
      "For a farmhouse look, wrap a small piece of jute around the neck. For a cleaner style, skip the ribbon completely.",
    ],
    quote: { text: "Mason jar vases feel earthy and a touch homespun.", cite: "Martha Stewart, Dining Table Décor Ideas (Martha Stewart)" },
    after: [
      "For everyday decorating, I'd choose seasonal greenery over expensive flowers. Your wallet will thank you.",
    ],
  },
  {
    n: "02",
    title: "Painted Mason Jar Decor",
    photoKey: "painted",
    paras: [
      "Want something a little more colorful?",
      "Paint your Mason jars.",
      "You can use chalk paint for a farmhouse appearance, soft beige for a neutral room, muted green for a cottage feel, or black for a more modern look.",
      "I prefer painting only the outside and leaving some of the original glass visible. That small detail keeps the jar from looking too heavy.",
      "Try grouping three painted jars together and placing them on a wooden tray.",
    ],
    h3: "A simple color combination",
    paraBeforeList: "Try:",
    list: ["Cream", "Warm beige", "Muted sage green"],
    after: [
      "These colors work beautifully with natural wood and woven textures.",
      "Just remember that you don't need to paint every inch of the jar. Sometimes a little glass showing through makes the whole project look more polished.",
    ],
  },
  {
    n: "03",
    title: "Mason Jar Candle Holders",
    photoKey: "candles",
    paras: [
      "This might be one of my favorite Mason jar decor ideas for evenings.",
      "Place a candle inside a Mason jar and let the glass soften the light. Add a little sand, small stones, or decorative filler around the base if you want extra texture.",
      "For outdoor dinners, use several jars along the center of the table.",
      "Martha Stewart also recommends using empty glass jars as glowing votives and grouping jars with different heights to create visual interest. (Martha Stewart)",
      "For safety, choose candles that fit securely inside the jar and never leave an open flame unattended.",
      "Want an even easier version? Use battery-powered LED tea lights.",
      "No wax. No smoke. No frantic search for a fire extinguisher.",
    ],
  },
  {
    n: "04",
    title: "Mason Jar Herb Planters",
    photoKey: "herbs",
    paras: [
      "Your kitchen counter can get a little greenery without turning into a greenhouse.",
      "Use small Mason jars to grow or display herbs such as basil, mint, parsley, or thyme.",
      "I like this idea because the plants become both decor and something useful.",
      "Place three small jars together near a sunny window. Add simple handwritten labels for each herb.",
      "If you want a more finished look, put the jars inside a shallow wooden tray.",
      "Just remember that Mason jars don't automatically provide drainage. Use an appropriate planting setup rather than letting excess water sit around the roots.",
    ],
  },
  {
    n: "05",
    title: "Mason Jar Bathroom Organizers",
    photoKey: "bathroom",
    paras: [
      "Mason jars can make surprisingly good bathroom storage.",
      "Use them to organize cotton balls, cotton swabs, bath salts, makeup brushes, toothbrushes, or small toiletries.",
      "Clear glass works particularly well because you can see everything quickly.",
      "I'd pair the jars with a wooden or ceramic tray. That single step makes the setup look more intentional.",
      "Ball itself highlights Mason jars for bathroom organization as one of its creative uses. (Ball)",
      "If your bathroom already has plenty of visual clutter, choose jars with simple labels and keep the contents neatly arranged.",
    ],
  },
  {
    n: "06",
    title: "Mason Jar Kitchen Storage",
    photoKey: "kitchen",
    paras: [
      "This one makes perfect sense because Mason jars already have a long history in the kitchen.",
    ],
    paraBeforeList: "Use them for dry ingredients such as:",
    list: ["Pasta", "Rice", "Oats", "Flour", "Coffee", "Dried beans", "Baking ingredients"],
    after: [
      "Ball offers storage jars specifically for pantry organization and decorative display, including jars designed to showcase ingredients while keeping the space organized. (Ball)",
      "I love this idea for open shelving because the ingredients become part of the visual display.",
      "A row of matching jars looks much better than ten mismatched plastic packages fighting for attention.",
    ],
  },
  {
    n: "07",
    title: "Mason Jar Hanging Planters",
    photoKey: "hanging",
    paras: [
      "Take your Mason jar plants off the counter and hang them instead.",
      "You can create a small vertical display using sturdy hanging hardware and suitable planters.",
      "This works particularly well near kitchen windows, covered patios, balconies, or sunny breakfast areas.",
      "I'd keep the plants small and use the same jar style throughout the display.",
      "Why? Because repetition makes a DIY project look intentional.",
      "You can also mix herbs with trailing plants for a softer effect.",
    ],
  },
  {
    n: "08",
    title: "Mason Jar Centerpiece Ideas",
    photoKey: "centerpiece",
    paras: [
      "A Mason jar centerpiece doesn't need to look like something from a country wedding.",
      "That's the beauty of keeping the styling simple.",
    ],
    paraBeforeList: "Place several jars on a long wooden tray and fill them with:",
    list: ["Fresh greenery", "Dried flowers", "Small branches", "Seasonal stems", "Candles"],
    after: [
      "For a dining table, I prefer three to five smaller jars rather than one oversized arrangement.",
      "Martha Stewart recommends using centerpieces and layered table details to create an inviting dining experience, while its table decorating guidance shows how Mason jar vases can add an earthy element. (Martha Stewart)",
      "Keep the jars low enough that people can still see across the table.",
      "Nobody wants to conduct an entire dinner conversation through a forest of flowers.",
    ],
  },
  {
    n: "09",
    title: "Mason Jar Wall Decor",
    photoKey: "wallDecor",
    paras: [
      "Who says Mason jars have to sit on a table?",
      "Attach jars securely to a suitable wall-mounted holder and turn them into small hanging displays.",
      "You can use them for flowers, greenery, craft supplies, or small decorative objects.",
    ],
    paraBeforeList: "This idea works especially well in:",
    list: ["Entryways", "Kitchens", "Craft rooms", "Laundry rooms", "Home offices"],
    after: [
      "I would keep the arrangement symmetrical if you want a clean look. Use an uneven arrangement if you prefer something more relaxed and eclectic.",
    ],
  },
  {
    n: "10",
    title: "Mason Jar Fairy Light Decor",
    photoKey: "fairyLight",
    paras: [
      "Fairy lights and glass jars make an easy combination.",
      "Place a battery-powered string of tiny lights inside a clean jar and let the lights create a soft glow.",
      "Put one on a bookshelf, nightstand, console table, or fireplace mantel.",
      "The transparent glass catches the light beautifully, especially in the evening.",
      "I like using warm-white lights rather than colorful ones because they create a calmer appearance.",
      "For a more finished display, place two or three jars together and vary their heights.",
    ],
  },
  {
    n: "11",
    title: "Mason Jar Seasonal Decor",
    photoKey: "seasonal",
    paras: [
      "You don't have to keep your Mason jar decor the same all year.",
      "Change the contents with the seasons.",
    ],
    seasons: [
      { name: "Spring", intro: "Use:", list: ["Tulips", "Green branches", "Soft florals", "Pastel ribbons"] },
      { name: "Summer", intro: "Try:", list: ["Wildflowers", "Lemon slices", "Fresh herbs", "Greenery"] },
      { name: "Fall", intro: "Add:", list: ["Dried leaves", "Wheat stems", "Small branches", "Pinecones"] },
      { name: "Winter", intro: "Try:", list: ["Evergreen branches", "Pinecones", "Battery lights", "Small ornaments"] },
    ],
    after: [
      "This approach keeps your decor feeling fresh without requiring a complete seasonal makeover.",
      "And yes, your storage closet will appreciate the smaller commitment.",
    ],
  },
  {
    n: "12",
    title: "Mason Jar Office Organizers",
    photoKey: "office",
    paras: [
      "Your home office deserves better than a drawer full of tangled pens.",
      "Use Mason jars to organize pens, pencils, paintbrushes, scissors, rulers, and other small supplies.",
      "I prefer using several jars with different functions rather than dumping everything into one giant container.",
      "Label each jar if you want a more organized appearance.",
      "For a neutral office, use clear glass with simple black lettering. For a creative workspace, add color and playful labels.",
      "Ball specifically describes its smooth-sided Mason jars as useful for crafting, storage, labeling, and decor. (Ball)",
    ],
  },
  {
    n: "13",
    title: "Mason Jar Terrariums",
    photoKey: "terrarium",
    paras: [
      "If you want something that feels a little more special, create a tiny terrarium.",
      "A Mason jar can hold a small plant display that brings natural texture to shelves and desks.",
      "Choose plants that suit the environment and avoid overwatering. The closed glass environment can trap moisture quickly.",
      "Ball also features Mason jar terrariums among its craft ideas, including succulent terrariums for celebrations and favors. (Ball)",
      "I particularly like terrariums on bathroom shelves or home office desks because they add greenery without taking up much space.",
    ],
  },
  {
    n: "14",
    title: "Mason Jar Rustic Decor",
    photoKey: "rustic",
    paras: [
      "This is where Mason jars really show off their farmhouse personality.",
    ],
    paraBeforeList: "Combine clear jars with:",
    list: ["Weathered wood", "Burlap", "Jute", "Dried flowers", "Woven baskets", "Vintage-style labels"],
    after: [
      "Place the arrangement on a reclaimed wooden tray or shelf.",
      "But here's my advice: don't overdo the rustic theme.",
      "One or two rustic details can look charming. Twenty pieces can make your room feel like it accidentally wandered into a farmhouse-themed restaurant.",
      "Let the glass remain the star.",
    ],
  },
  {
    n: "15",
    title: "Mason Jar Gift and Display Jars",
    photoKey: "gift",
    paras: [
      "Finally, turn your Mason jars into decorative gift containers.",
      "Fill them with homemade treats, bath products, small notes, dried flowers, or other thoughtful items.",
      "Ball even offers a Date Jar concept where people collect date-night ideas inside a decorated jar. (Ball)",
    ],
    paraBeforeList: "You can adapt the same idea for:",
    list: ["Birthday gifts", "Housewarming gifts", "Wedding favors", "Teacher gifts", "Holiday presents", "Self-care baskets"],
    after: [
      "The jar becomes part of the gift instead of something the recipient immediately throws away.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const h3 = idea.h3 ? `<h3>${idea.h3}</h3>` : "";
  const paraBeforeList = idea.paraBeforeList ? `<p>${idea.paraBeforeList}</p>` : "";
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const seasons = idea.seasons
    ? idea.seasons
        .map((s) => `<h3>${s.name}</h3>\n    <p>${s.intro}</p>\n    <ul>${s.list.map((li) => `<li>${li}</li>`).join("")}</ul>`)
        .join("\n    ")
    : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  const quote = idea.quote
    ? `<blockquote><p>&ldquo;${idea.quote.text}&rdquo;</p><cite>&mdash; ${idea.quote.cite}</cite></blockquote>`
    : "";
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${h3}
    ${paraBeforeList}
    ${list}
    ${seasons}
    ${after}
    ${quote}
    ${photo(idea.photoKey)}`;
}

const body = `
<p>Mason jars have no business being this versatile. You buy one for storing something in the kitchen, and suddenly you're looking at it thinking, "Could this become a vase?" That little thought can lead to some surprisingly pretty <strong>Mason jar decor ideas</strong>.</p>
<p>I've always liked decorating with pieces that serve a purpose instead of simply sitting around looking pretty. Mason jars fit that perfectly. They work as vases, organizers, candle holders, planters, centerpieces, and even small decorative displays.</p>
<p>And the best part? You don't need a huge DIY budget or a garage full of crafting supplies.</p>
<blockquote><p>&ldquo;There are so many ways to craft and create with Ball&reg; Jars.&rdquo;</p><cite>&mdash; Ball Mason Jars, DIY Mason Jar Crafts (Ball)</cite></blockquote>
<p>So, if you have a few jars hiding in a cabinet, don't toss them into the recycling bin just yet. Let's turn them into something your home can actually use.</p>
${photo("hero")}

<h2>Why Mason Jars Work So Well as Home Decor</h2>
<p>Mason jars bring a relaxed, slightly nostalgic look that works with surprisingly many decorating styles. They can look rustic with twine and dried flowers, modern with a simple white finish, or soft and romantic with candles and delicate greenery.</p>
<p>I especially like them because the glass lets the contents become part of the decoration. Instead of hiding everything inside a container, you can turn whatever sits inside the jar into a visual detail.</p>
<p>That makes Mason jars particularly useful in kitchens, bathrooms, bedrooms, entryways, home offices, and dining rooms.</p>

<h2>Are Mason Jars Actually Good for Decorating?</h2>
<p>Absolutely, but the trick involves choosing the right jar for the job.</p>
<p>Ball currently offers jars specifically designed for crafting, storage, decorating, and labeling. Its smooth-sided jars, for example, work particularly well when you want to add labels or decorative details. (Ball)</p>
<p>For decor, I usually look for:</p>
<ul>
  <li>Clear glass for a clean and classic look</li>
  <li>Vintage-style jars for farmhouse and cottage spaces</li>
  <li>Wide-mouth jars for flowers, plants, and larger decorative objects</li>
  <li>Small jars for shelves, trays, and tiny displays</li>
  <li>Smooth-sided jars when I want to paint, label, or customize them</li>
</ul>
<p>Ever notice how the simplest decorating projects often look the most intentional? Mason jars make that surprisingly easy.</p>

<h2>How to Make Mason Jar Decor Look Stylish Instead of Cluttered</h2>
<p>Here's the biggest mistake I see with Mason jar decorating: using too many ideas at once.</p>
<p>You don't need six painted jars, three ribbons, artificial flowers, wooden signs, and a handful of beads sitting on one shelf. Your Mason jars should complement the room rather than announce that you discovered a craft store.</p>
<p>I prefer a simple color palette and repeated materials.</p>
<p>For example, combine clear glass with:</p>
<ul>
  <li>Natural wood</li>
  <li>Linen</li>
  <li>Jute or cotton twine</li>
  <li>Dried greenery</li>
  <li>Soft neutral paint</li>
  <li>Brass or black metal accents</li>
</ul>
<p>Martha Stewart's decorating guidance also supports the idea of grouping jars together and adding natural elements such as flowers, grasses, or herbs. (Martha Stewart)</p>
<p>That approach creates a more collected look instead of a random collection of craft projects.</p>
${photo("styleGrouping")}
<p>Now let's get into the fun part.</p>

<h2>15 Mason Jar Decor Ideas for Every Room</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>How to Style Mason Jar Decor Without Making It Look Cheap</h2>
<p>Mason jars cost very little, but your finished display doesn't have to look inexpensive.</p>
<p>The secret comes down to editing.</p>
<p>Choose one visual direction and stick with it.</p>
<p>If you want farmhouse style, combine glass, wood, linen, and greenery.</p>
<p>If you want a modern look, use clear jars with minimal labels and simple greenery.</p>
<p>For cottage style, add soft flowers and vintage-inspired details.</p>
<p>For a rustic look, introduce natural textures such as jute and weathered wood.</p>
<p>You can also create a more sophisticated display by using jars in different sizes but keeping the colors consistent.</p>
<h3>Use repetition</h3>
<p>Repeated shapes create visual rhythm.</p>
<p>Three similar jars often look more intentional than seven completely different containers.</p>
<h3>Leave some empty space</h3>
<p>This might sound boring, but empty space helps decorative objects stand out.</p>
<p>You don't need to fill every shelf.</p>
<h3>Mix texture</h3>
<p>Glass looks especially good beside materials such as:</p>
<ul>
  <li>Wood</li>
  <li>Linen</li>
  <li>Ceramic</li>
  <li>Metal</li>
  <li>Woven baskets</li>
</ul>
<p>That contrast gives Mason jar decor more depth.</p>
${photo("styleRepetition")}

<h2>What Mason Jars Should You Use for Decor?</h2>
<p>You don't need one specific type of Mason jar for every project.</p>
<p>Ball currently sells several styles designed for different purposes, including smooth-sided jars, vintage jars, decorative jars, mini jars, and storage jars. (Ball)</p>
<p>For decorating, I'd choose based on the project.</p>
<p>For flowers: wide-mouth jars work well.</p>
<p>For labels: smooth-sided jars make decorating easier.</p>
<p>For small displays: mini jars create a delicate look.</p>
<p>For pantry decor: larger storage jars create a clean, organized appearance.</p>
<p>For rustic displays: vintage-style jars add character without much effort.</p>
<p>The right jar can make a simple idea look much more polished.</p>
${photo("jarTypes")}

<h2>A Few Mason Jar Decorating Mistakes to Avoid</h2>
<p>Mason jar decor looks simple, but a few small mistakes can ruin the effect.</p>
<p>First, avoid mixing too many colors. Pick two or three main shades and let them repeat throughout the arrangement.</p>
<p>Second, don't fill every jar with something. An empty glass jar can actually create visual balance.</p>
<p>Third, watch the scale. Tiny jars can disappear on a large console, while huge jars can overwhelm a small shelf.</p>
<p>Finally, remember that decorative jars still need to function properly. Ball distinguishes between jars designed for canning and jars intended for storage and decor, so always check the intended use before using a particular jar for food preservation. (Ball)</p>
${photo("mistakes")}

<h2>Final Thoughts on Mason Jar Decor Ideas</h2>
<p>The best <strong>Mason jar decor ideas</strong> don't require complicated DIY skills.</p>
<p>A simple jar with fresh greenery can brighten a kitchen. A few jars with candles can warm up a dining table. Painted jars can add color to a shelf, while clear jars can organize your bathroom or office.</p>
<p>What I like most about Mason jars comes down to their flexibility. You can make them rustic, modern, cottage-inspired, seasonal, functional, or completely personal.</p>
<p>And you don't need to spend a fortune to make them work.</p>
<p>Start with one jar. Try flowers, greenery, storage, or candles. See how it looks in your space.</p>
<p>Then, if you find yourself staring at every empty jar in the kitchen thinking, "I could decorate that," congratulations. You've officially caught the Mason jar bug.</p>
`;

module.exports = { body };
