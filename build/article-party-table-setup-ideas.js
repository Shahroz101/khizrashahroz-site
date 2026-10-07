// Body content for "16 Party Table Setup Ideas for Every Occasion".
// Source title said "17" but idea 12 was genuinely missing from the
// source's own numbering (jumps from 11 to 13) — 16 real ideas exist.
// Photos carried over from the source article. Ideas "Kid Friendly,"
// "Outdoor," "Budget Friendly" and "Last Minute" have no photo in the
// source; the other 12 do. Condensed a padded 4-part intro (FAQ-style)
// down to 1.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "party-table-setup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "party-table-setup-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "The Classic Layered Setup",
    paras: [
      "This setup rarely fails, and it's the move for a polished look without overthinking the whole table.",
      "A neutral tablecloth, a runner layered on top for contrast, and trays or platters stacked over that build real depth with very little effort.",
      "It adjusts easily for formal or casual events just by shifting colors and textures, which makes it a strong default for a birthday, an engagement party, or a holiday dinner.",
    ],
    photo: pinPhoto("classic-layered.jpg", "Classic layered party table setup with a tablecloth, runner and stacked trays", 662, 1024, "https://www.pinterest.com/pin/685180530839791566/", "Classic Layered Party Table"),
  },
  {
    n: "02",
    title: "Minimal Setup for Small Gatherings",
    paras: [
      "Not every party needs drama. For a smaller gathering, less genuinely does more.",
      "One tight color palette, clean serving dishes, and real negative space are the whole formula &mdash; avoiding the urge to fill every inch is what makes the food itself stand out.",
      "Guests tend to relax more around a minimal table, and cleanup stays noticeably easier afterward, which is its own kind of reward.",
    ],
    photo: pinPhoto("minimal-setup.jpg", "Minimal party table setup with a tight color palette and clean serving dishes", 736, 981, "https://www.pinterest.com/pin/862931978644412418/", "Minimal Party Table Setup"),
  },
  {
    n: "03",
    title: "Buffet Style That Actually Flows",
    paras: [
      "A buffet table causes real chaos when guests have to guess where to start. Designing the flow on purpose solves that before it happens.",
      "Plates and napkins first, then main dishes, sides, sauces and toppings, with cutlery saved for the very end, keeps the line moving instead of creating awkward reaching.",
      "Leaving genuine space at the end of the table matters too &mdash; guests need somewhere to land before carrying a full plate away.",
    ],
    photo: pinPhoto("buffet-style.jpg", "Buffet style party table setup organized for smooth guest flow", 736, 920, "https://www.pinterest.com/pin/704743041728943410/", "Buffet Style Party Table"),
  },
  {
    n: "04",
    title: "A Dessert Table That Steals the Spotlight",
    paras: [
      "Dessert tables earn their own moment &mdash; they often get photographed more than the actual guest of honor.",
      "A statement backdrop, the cake as the visual anchor, and smaller desserts grouped in odd numbers &mdash; three or five per cluster &mdash; build real visual interest.",
      "Mixing materials like glass, wood and ceramic across the table makes the whole spread look genuinely styled instead of just stacked together.",
    ],
    photo: pinPhoto("dessert-table.jpg", "Dessert table setup with a statement backdrop and grouped desserts", 482, 640, "https://www.pinterest.com/pin/463026405412823716/", "Dessert Table Setup"),
  },
  {
    n: "05",
    title: "Casual Setup for Laid-Back Events",
    paras: [
      "Not every gathering needs real structure. A casual table reads as warm and welcoming precisely because it isn't overly composed.",
      "Shared platters, paper or linen napkins, and low centerpieces that don't block reach keep everything genuinely accessible.",
      "Guests grab food without needing to ask first, which matters more for the overall mood than people tend to give it credit for &mdash; a strong fit for game nights and backyard parties.",
    ],
    photo: photo("casual-setup.jpg", "Casual party table setup with shared platters and low centerpieces", 576, 1024),
  },
  {
    n: "06",
    title: "Themed, Without Going Overboard",
    paras: [
      "Themes scare a lot of hosts, and for good reason &mdash; nobody wants a table that looks like a costume aisle exploded.",
      "One main theme color, one supporting texture, and a few subtle themed accents keep the concept readable without overwhelming the table.",
      "Letting the food's natural colors do some of the thematic work beats piling on plastic decor every time &mdash; balance is what keeps a themed table from feeling loud.",
    ],
    photo: photo("themed-setup.jpg", "Subtly themed party table setup with one main color and supporting texture", 736, 981),
  },
  {
    n: "07",
    title: "Elegant Setup for Formal Occasions",
    paras: [
      "A formal table needs real confidence &mdash; treated like an outfit, one genuine statement piece beats ten small accessories scattered around.",
      "Crisp linens, neutral serving ware, and a single bold centerpiece form the foundation, with candles doing a lot of the remaining mood-setting work.",
      "This setup is built for anniversaries, milestone birthdays and dinner parties &mdash; the kind of occasion where guests should feel noticeably special the moment they sit down.",
    ],
    photo: pinPhoto("elegant-formal.jpg", "Elegant formal party table setup with crisp linens and a bold centerpiece", 576, 1024, "https://www.pinterest.com/pin/1618549864235168/", "Elegant Formal Party Table"),
  },
  {
    n: "08",
    title: "Kid-Friendly, Parent-Approved",
    paras: [
      "A kids' table needs to balance fun and function, designed around actual survival rather than just appearances.",
      "Cute disposable table covers, individually portioned snacks, and an activity placemat keep kids occupied while parents get a real break.",
      "One hard-earned lesson: never place drinks anywhere near the crafts. That mistake only needs to happen once.",
    ],
  },
  {
    n: "09",
    title: "Outdoor Setup That Survives Real Life",
    paras: [
      "Outdoor parties sound dreamy until wind, bugs and uneven ground show up uninvited. Designing with that reality in mind from the start avoids most of the stress.",
      "Weighted tablecloths or clips, low centerpieces that won't tip over, and covered food trays handle the practical side before it becomes a problem.",
      "Nature already provides plenty of ambiance on its own &mdash; the setup just needs to stay functional enough not to fight against it.",
    ],
  },
  {
    n: "10",
    title: "Seasonal, Without Tipping Into Tacky",
    paras: [
      "A seasonal table feels genuinely special when it stays subtle, rather than turning into a full holiday store display.",
      "Seasonal colors, natural textures, and one real seasonal focal point &mdash; pumpkins in fall, greenery in winter, florals in spring, citrus in summer &mdash; carry the theme quietly.",
      "A table that hints at the season instead of shouting it tends to earn more appreciation than one piled with every available decoration.",
    ],
    photo: pinPhoto("seasonal-setup.jpg", "Seasonal party table setup with natural textures and a subtle focal point", 736, 981, "https://www.pinterest.com/pin/148267012728537871/", "Seasonal Party Table Setup"),
  },
  {
    n: "11",
    title: "Budget-Friendly, Looks Expensive",
    paras: [
      "Some of the most effective party table setups cost almost nothing to put together.",
      "Reusing serving trays, neutral linens already on hand, and glass jars as simple decor stretches a tight budget considerably further.",
      "Spending real money on one standout item, rather than spreading it across ten small purchases, is what actually reads as intentional &mdash; no guest ever asks what the table cost, they just notice the effort.",
    ],
  },
  {
    n: "12",
    title: "Sweet and Savory Combo",
    paras: [
      "Mixing sweet and savory on a single table works especially well when space is genuinely tight.",
      "Visually dividing the table &mdash; sweet on one side, savory on the other, neutral items bridging the middle &mdash; keeps the combination feeling intentional rather than chaotic.",
      "Guests appreciate having real options, and they tend to linger and snack longer as a result, which is really the whole point of a party table.",
    ],
    photo: pinPhoto("sweet-savory-combo.jpg", "Sweet and savory combo party table setup divided visually down the middle", 585, 1024, "https://www.pinterest.com/pin/1093178509565393956/", "Sweet and Savory Party Table"),
  },
  {
    n: "13",
    title: "Brunch, Effortless by Design",
    paras: [
      "A brunch table should feel light and genuinely inviting &mdash; a heavy, overly structured setup works against the whole mood of the meal.",
      "Light linens, a fresh fruit display, and a few simple florals are enough to carry the table without competing with the actual food.",
      "Letting the food's own colors shine matters here too &mdash; pancakes and fresh fruit deserve just as much visual attention as any centerpiece.",
    ],
    photo: photo("brunch-setup.jpg", "Effortless brunch party table setup with light linens and fresh fruit", 360, 640),
  },
  {
    n: "14",
    title: "Small Space, Maximum Impact",
    paras: [
      "A small space genuinely challenges creativity, but it doesn't have to limit the final result.",
      "Vertical displays, a wall backdrop, and a narrower table all stretch a tight footprint considerably further than expected.",
      "Avoiding wide platters that eat up precious space matters more here than almost anywhere else &mdash; smart layout consistently beats square footage.",
    ],
    photo: photo("small-space-setup.jpg", "Small space party table setup using vertical displays and narrow tables", 576, 1024),
  },
  {
    n: "15",
    title: "Photo-Ready for Social Media Moments",
    paras: [
      "People photograph food before eating it now, whether a host plans for that or not &mdash; it's worth designing with that in mind.",
      "Natural lighting, a clean background, and real color contrast make the biggest difference in how a table actually photographs.",
      "Clearing clutter before guests arrive matters most here. If the table looks good from one clean angle, guests will reliably find it themselves.",
    ],
    photo: pinPhoto("photo-ready.jpg", "Photo-ready party table setup with natural lighting and a clean background", 736, 981, "https://www.pinterest.com/pin/757519599853830692/", "Photo-Ready Party Table"),
  },
  {
    n: "16",
    title: "Last-Minute, Still Looks Planned",
    paras: [
      "Life happens, and sometimes a table gets decorated in genuine panic mode with very little lead time.",
      "One clean tablecloth, serving dishes grouped sensibly together, and a single centerpiece &mdash; that's the entire strategy, and it's meant to stop there.",
      "Overcorrecting is what actually ruins a last-minute table. Keeping it simple is what saves it every time.",
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
<p>A party table does more work than the decorations scattered around it. It sets the mood the second guests walk in, guides how people actually move through the food, and quietly signals how much thought went into the whole event.</p>
<p>Getting it right doesn't require a massive table or an unlimited budget. It requires the right setup for the actual occasion &mdash; a casual backyard hang doesn't need the same table as a milestone dinner party, and forcing one approach onto every event is usually where things go wrong.</p>
${photo("hero.jpg", "Beautifully styled party table setup with layered serving pieces and decor", 1600, 1068)}

<h2>What a Party Table Actually Needs to Get Right</h2>
<p>Size matters more than it seems &mdash; too small and the food feels cramped, too large and the table reads as empty no matter how much gets placed on it. Negative space deserves real respect too; a table filled to every edge reads as cluttered rather than abundant, while a little breathing room lets the actual food stand out.</p>
${pinPhoto("intro-eye-catching.jpg", "Eye-catching party table setup styled with intention", 683, 1024, "https://www.pinterest.com/pin/134896951334314414/", "Eye-Catching Party Table Setup")}

<h2>16 Party Table Setup Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>A party table isn't just a surface to put food on &mdash; it's doing real work, setting the tone for the whole event before a single guest sits down to eat.</p>
<p>Pick the setup that actually matches the occasion, rather than reaching for whatever looks best online. The table that fits the moment will always read as more intentional than the one chasing a trend.</p>
`;

module.exports = { body };
