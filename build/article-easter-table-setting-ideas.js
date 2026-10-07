// Body content for "15 Easter Table Settings Worth Copying". Photos
// carried over from the source article. The source scattered
// fabricated/misattributed quotes throughout (Bunny Williams, Joanna
// Gaines, William Morris, Kelly Wearstler, Iris Apfel, etc.) — cut
// entirely, not part of this site's voice. All 15 settings have a
// photo; none dropped. Condensed 3 padded intro/FAQ sections down to 1.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "easter-table-setting-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "easter-table-setting-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Classic Pastel",
    paras: [
      "This is the setting everyone pictures first when Easter comes up &mdash; soft pink, baby blue, gentle lavender, and it never actually goes out of style.",
      "Keeping the palette soft but intentional is what separates it from looking saccharine. Blush pink paired with muted sage reads as grown-up rather than sugary.",
      "Pastels naturally reflect spring energy, and layered correctly, they create a mood that's calm without losing any sense of celebration.",
    ],
    photo: pinPhoto("classic-pastel.jpg", "Classic pastel Easter table setting in soft pink, blue and lavender", 574, 1024, "https://www.pinterest.com/pin/1057783031334801481/", "Classic Pastel Easter Table"),
  },
  {
    n: "02",
    title: "Modern Black and Blush",
    paras: [
      "Easter doesn't have to stay pastel and sweet. Pairing soft blush pink with matte black accents creates a contrast that reads as chic and genuinely unexpected.",
      "Keeping the floral arrangements light and airy stops the black from overpowering the overall mood of the table.",
      "Contrast creates drama, and a few small details &mdash; black candle holders, trim on the napkins &mdash; are enough to elevate the entire setting.",
    ],
    photo: pinPhoto("black-blush.jpg", "Modern Easter table setting pairing soft blush pink with matte black accents", 768, 1024, "https://www.pinterest.com/pin/108860515992584686/", "Black and Blush Easter Table"),
  },
  {
    n: "03",
    title: "Rustic Farmhouse",
    paras: [
      "For anyone drawn to warmth and charm over polish, this is the setting that delivers it most reliably.",
      "Natural wood, neutral linens and soft greenery give the table a relaxed, welcoming feel that invites people to actually linger.",
      "Rustic settings have a way of encouraging conversation to stretch on longer than planned, which is really the whole point of a holiday table.",
    ],
    photo: pinPhoto("rustic-farmhouse.jpg", "Rustic farmhouse Easter table setting with natural wood and soft greenery", 683, 1024, "https://www.pinterest.com/pin/1130966525248941912/", "Rustic Farmhouse Easter Table"),
  },
  {
    n: "04",
    title: "Elegant Gold and White",
    paras: [
      "For something more elevated, going monochrome with metallic accents delivers a formal feel without tipping into stiff.",
      "Gold works best kept minimal here &mdash; a few curated touches read as intentional and luxe, while too much metallic starts to feel flashy.",
      "This pairing works especially well for an evening Easter dinner, where it pairs naturally with candlelight.",
    ],
    photo: pinPhoto("gold-white.jpg", "Elegant gold and white Easter table setting with minimal metallic accents", 683, 1024, "https://www.pinterest.com/pin/499407046201145174/", "Gold and White Easter Table"),
  },
  {
    n: "05",
    title: "All-White, Fully Textured",
    paras: [
      "Going fully white is dramatic and serene at once, but only if texture does the heavy lifting underneath it.",
      "Mixing materials &mdash; ceramic, linen, glass, wood &mdash; is what keeps an all-white table from reading as flat. Without that mix, white falls strangely short.",
      "This look suits an evening dinner especially well. Candlelight transforms it completely once the sun goes down.",
    ],
    photo: photo("all-white-textured.jpg", "All-white Easter table setting layered with ceramic, linen and wood textures", 683, 1024),
  },
  {
    n: "06",
    title: "Floral Garden-Inspired",
    paras: [
      "It's hard to talk about a stunning Easter table without florals finding their way in somewhere.",
      "Letting a few different flower varieties and patterns play together within one tight color family keeps the look from sliding into chaos.",
      "Fresh flowers do double duty here &mdash; genuinely beautiful on their own, and enough to set the entire table's mood without any other effort.",
    ],
    photo: pinPhoto("floral-garden.jpg", "Floral garden-inspired Easter table setting with fresh flowers in one color family", 683, 1024, "https://www.pinterest.com/pin/4574037117213472/", "Floral Garden Easter Table"),
  },
  {
    n: "07",
    title: "Minimalist Neutral",
    paras: [
      "Sometimes less genuinely wins. For anyone drawn to calm, neutral interiors, this setting feels effortless rather than empty.",
      "It reads as modern without needing to shout \"Easter\" at every turn, which makes it a strong option for anyone who finds bright holiday colors overwhelming.",
      "Minimal design highlights quality over quantity &mdash; the fewer the elements, the more each one actually gets noticed.",
    ],
    photo: pinPhoto("minimalist-neutral.jpg", "Minimalist neutral Easter table setting with restrained, quality pieces", 683, 1024, "https://www.pinterest.com/pin/910290143446158243/", "Minimalist Neutral Easter Table"),
  },
  {
    n: "08",
    title: "Vintage-Inspired",
    paras: [
      "This is the setting for anyone chasing nostalgia over polish. Vintage pieces tell stories in a way new matching sets never quite manage.",
      "Borrowed or inherited china, old teacups, and mismatched antique plates all add a sentimental, layered quality that guests consistently notice first.",
      "Mixing old pieces with modern glassware keeps the whole table feeling curated rather than simply dated.",
    ],
    photo: pinPhoto("vintage-inspired.jpg", "Vintage-inspired Easter table setting with antique china and modern glassware", 683, 1024, "https://www.pinterest.com/pin/278519558200942314/", "Vintage Easter Table"),
  },
  {
    n: "09",
    title: "Bunny-Themed, But Grown-Up",
    paras: [
      "Bunny decor can go one of two ways &mdash; adorable or aggressively childish, with very little middle ground. The trick is choosing subtle accents instead of a full cartoon overload.",
      "A single sculptural bunny figure, a subtle print, or one well-chosen accent does the job far better than a table covered in them.",
      "Keeping everything else around it simple is what lets the bunny detail whisper instead of shout &mdash; restraint is what makes themed decor read as elegant rather than kitschy.",
    ],
    photo: pinPhoto("bunny-themed.jpg", "Bunny-themed Easter table setting with subtle, grown-up accents", 582, 873, "https://www.pinterest.com/pin/482307441364750884/", "Grown-Up Bunny-Themed Easter Table"),
  },
  {
    n: "10",
    title: "Outdoor Garden",
    paras: [
      "When the weather cooperates, taking Easter dinner outside instantly adds a magical quality no indoor table quite replicates.",
      "Natural sunlight does a surprising amount of the decorating work on its own, and the movement of the outdoors adds softness no styled interior can fake.",
      "Weighted napkins or simple clips handle any uninvited wind &mdash; practicality still matters even when the setting looks effortless.",
    ],
    photo: pinPhoto("outdoor-garden.jpg", "Outdoor garden Easter table setting styled in natural sunlight", 683, 1024, "https://www.pinterest.com/pin/60939401204897225/", "Outdoor Garden Easter Table"),
  },
  {
    n: "11",
    title: "Kid-Friendly, Still Stylish",
    paras: [
      "Kids love Easter, and they love chocolate even more, so a table designed with them specifically in mind pays off for everyone.",
      "A tiny surprise at each kid's place setting keeps them engaged a little longer, which buys the adults a few extra minutes of actual coffee.",
      "Sticking to one or two bright colors keeps it playful without letting too many bold shades tip into visual chaos.",
    ],
    photo: pinPhoto("kids-friendly.jpg", "Kid-friendly Easter table setting with playful but stylish details", 683, 1024, "https://www.pinterest.com/pin/373869206590991792/", "Kid-Friendly Easter Table"),
  },
  {
    n: "12",
    title: "Blue and White Spring",
    paras: [
      "This combination feels timeless in a way few other palettes manage &mdash; closer to classic porcelain and coastal elegance than a typical Easter table.",
      "It leans spring without relying on any of the obvious Easter symbols, which makes it a strong option for anyone who wants the season without the theme.",
      "Blue and white reads as crisp and classic in almost any setting, holiday or otherwise.",
    ],
    photo: pinPhoto("blue-white.jpg", "Blue and white spring Easter table setting with a coastal, classic feel", 683, 1024, "https://www.pinterest.com/pin/1064608799431732429/", "Blue and White Easter Table"),
  },
  {
    n: "13",
    title: "Bold Color Pop",
    paras: [
      "Not everyone wants soft tones, and a table built around one confident, saturated color proves bold can work just as well as muted.",
      "A vibrant coral, deep berry or saturated yellow anchored by neutral surroundings keeps the boldness from tipping into overwhelming.",
      "A bold table works because it shows real confidence &mdash; the goal is personality added carefully, not color thrown on without a plan.",
    ],
    photo: pinPhoto("bold-color-pop.jpg", "Bold color pop Easter table setting anchored by one saturated statement color", 683, 1024, "https://www.pinterest.com/pin/898397825668593978/", "Bold Color Easter Table"),
  },
  {
    n: "14",
    title: "Boho-Inspired",
    paras: [
      "For anyone who loves layered textures and a relaxed vibe, this setting feels effortless without reading as unplanned.",
      "Earthy tones like terracotta, beige and muted pink keep the look soft and cohesive &mdash; too many competing colors would undercut exactly what makes it work.",
      "It's an especially strong fit for a daytime brunch gathering, where it reads as warm and welcoming rather than overly formal.",
    ],
    photo: pinPhoto("boho-inspired.jpg", "Boho-inspired Easter table setting with earthy terracotta and beige tones", 683, 1024, "https://www.pinterest.com/pin/776308054555808890/", "Boho Easter Table"),
  },
  {
    n: "15",
    title: "Glam Crystal and Candlelight",
    paras: [
      "For full elegance, leaning into sparkle and crystal is the way to close out the list.",
      "Lighting matters more here than in any other setting &mdash; dimming the overhead lights and letting candles do the work transforms even simple tableware into something that photographs beautifully.",
      "It's the setting built for a formal Easter dinner, the kind where guests reach for their phones the second they sit down.",
    ],
    photo: pinPhoto("glam-candlelight.jpg", "Glam Easter table setting with crystal glassware and candlelight", 576, 1024, "https://www.pinterest.com/pin/1051379475511786778/", "Glam Candlelight Easter Table"),
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
<p>Whatever guests notice first when they walk into the dining room, the table setting sets the mood before anyone even sits down. It doesn't take expensive china to pull off &mdash; it takes cohesion and a little confidence in the choices actually made.</p>
<p>A stunning Easter table comes down to three things: real color harmony instead of just defaulting to pastel, texture layered in to keep the table from looking flat, and a clear focal point that anchors the whole design. Skip any one of those and the table starts to feel unfinished, no matter how much decor gets piled on.</p>
${photo("hero.jpg", "Stunning Easter table setting with pastel tones and a styled centerpiece", 582, 428)}

<h2>What Actually Makes a Setting Feel Stunning</h2>
<p>Every great Easter table shares the same three traits: cohesive color instead of a scattered pastel mess, layered texture to keep the eye moving, and one clear focal point that anchors everything else around it.</p>
${pinPhoto("intro-setting.jpg", "Beautifully styled Easter table setting with cohesive color and layered texture", 683, 1024, "https://www.pinterest.com/pin/375980268915097182/", "Stunning Easter Table Setting")}

<h2>A Few Mistakes Worth Avoiding</h2>
<p>Overcrowding is the most common one &mdash; forty-seven decorative eggs don't make a table more festive, they just make it harder for guests to see each other across the table. Lighting matters just as much as anything on the table itself: candles and soft lighting upgrade a setting instantly, while harsh overhead light flattens even the best styling. And practicality can't get lost in the pursuit of pretty &mdash; serving space needs to stay clear, and glasses need room to actually sit without tipping.</p>

<h2>15 Easter Table Settings</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these settings work because of trends, expensive decor, or copying someone else's exact table down to the napkin fold. They work because they combine real color harmony, genuine texture, and a focal point that actually anchors the design.</p>
<p>Pick whichever one fits the occasion, adapt it to the space actually available, and commit to it fully. The table doesn't need a massive budget &mdash; it needs a plan.</p>
`;

module.exports = { body };
