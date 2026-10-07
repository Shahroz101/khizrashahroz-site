// Body content for "18 Kitchen Window Treatments Worth Trying". Photos
// carried over from the source article (AI-generated style, no
// Pinterest links, no visible credits). All 18 ideas have a photo;
// none dropped.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "kitchen-window-treatment-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Roman Shades",
    paras: [
      "Roman shades carry a reliable, effortlessly chic quality without ever looking like they're trying too hard.",
      "They fold neatly when raised and lie flat when down, which keeps the whole window looking tidy either way.",
      "Neutral tones like white or beige keep the look clean and versatile, while a bold pattern turns the same shade into a genuine statement piece.",
    ],
    photo: photo("roman-shades.png", "Roman shades in a beautifully lit kitchen window", 683, 1024),
  },
  {
    n: "02",
    title: "Sheer Curtains",
    paras: [
      "For a kitchen that should feel open, breezy and full of light, sheer curtains do more of that work than almost any other option.",
      "They soften a window without actually blocking the light coming through it, keeping the whole room feeling airy.",
      "Paired with natural wood or white cabinetry, sheers add a genuinely light, charming quality to the space.",
    ],
    photo: photo("sheer-curtains.png", "Sheer curtains in a serene minimalist kitchen", 683, 1024),
  },
  {
    n: "03",
    title: "Bold Valances",
    paras: [
      "Valances are genuinely underrated &mdash; small, stylish, and still noticeable even though they only cover the top portion of a window.",
      "They add a finished look to a window without the commitment of a full curtain or drape setup.",
      "Matching a valance to the backsplash or countertop accents ties the whole kitchen together in a way that's easy to overlook until it's actually done.",
    ],
    photo: photo("bold-valances.png", "Bold valance styled in a charming farmhouse kitchen", 683, 1024),
  },
  {
    n: "04",
    title: "Plantation Shutters",
    paras: [
      "Plantation shutters bring a genuinely put-together, timeless energy to a kitchen window.",
      "They're neat, satisfying to adjust, and manage to look intentional in almost any style of home.",
      "Paired with natural textures like a jute rug or wooden stools nearby, they lean into a relaxed, almost coastal feeling.",
    ],
    photo: photo("plantation-shutters.png", "Plantation shutters in a warm, traditional kitchen", 683, 1024),
  },
  {
    n: "05",
    title: "Bamboo Shades",
    paras: [
      "For organic texture without going fully tropical, bamboo shades hit a genuinely good middle ground.",
      "They filter light softly while adding a natural, earthy material that most kitchens are otherwise missing.",
      "They suit a rustic or farmhouse kitchen especially well, particularly alongside a wooden dining table and a bit of greenery.",
    ],
    photo: photo("bamboo-shades.png", "Bamboo shades in a cozy rustic kitchen", 683, 1024),
  },
  {
    n: "06",
    title: "Layered Drapes",
    paras: [
      "Layering window treatments is one of the more underrated ways to add real coziness to a kitchen.",
      "Combining a sheer base layer with a heavier drape on top gives the window both softness and real structure.",
      "Keeping the palette cohesive &mdash; soft grays, warm taupes, or earthy greens &mdash; avoids visual chaos while still adding genuine depth.",
    ],
    photo: photo("layered-drapes.png", "Layered drapes in a stunning luxurious kitchen", 683, 1024),
  },
  {
    n: "07",
    title: "Minimalist Roller Shades",
    paras: [
      "Roller shades are clean, minimal, and quietly do the job without ever demanding attention.",
      "They raise and lower easily, which makes them genuinely practical for a kitchen window that gets used daily.",
      "A soft, neutral greige keeps the look modern while still reading as warm rather than sterile.",
    ],
    photo: photo("roller-shades.png", "Minimalist roller shades in a sleek, simple kitchen", 683, 1024),
  },
  {
    n: "08",
    title: "Stained Glass Panels",
    paras: [
      "For a window that functions as genuine art, stained glass is hard to beat.",
      "It transforms ordinary daylight into something colorful and considerably more interesting the moment it hits the glass.",
      "Paired with warm wood tones and a classic tile backsplash, it strikes an old-meets-new balance that reads as intentional rather than dated.",
    ],
    photo: photo("stained-glass.png", "Stained glass window panel in a charming vintage-inspired kitchen", 683, 1024),
  },
  {
    n: "09",
    title: "Cafe Curtains",
    paras: [
      "Cafe curtains remain a classic for good reason &mdash; covering just the bottom half of a window keeps privacy intact while still letting light pour in up top.",
      "They work especially well over a sink or a prep area where full privacy isn't actually needed.",
      "Paired with a small breakfast nook, they bring a genuinely charming, cafe-like feeling to an everyday morning routine.",
    ],
    photo: photo("cafe-curtains.png", "Cafe curtains in a delightful vintage-inspired kitchen", 683, 1024),
  },
  {
    n: "10",
    title: "Linen Drapes",
    paras: [
      "Soft linen drapes create that light, floaty, relaxed feeling that heavier fabrics simply can't replicate.",
      "They move gently with any passing breeze, which adds a subtle sense of life to the whole kitchen.",
      "Sticking to earthy tones like sand, sage, or cream keeps the look feeling genuinely elegant rather than casual.",
    ],
    photo: photo("linen-drapes.png", "Soft linen drapes in a serene Scandinavian-inspired kitchen", 683, 1024),
  },
  {
    n: "11",
    title: "Custom Cornices",
    paras: [
      "Cornices are an underrated finishing touch, adding real structure and style to a window in one single move.",
      "They sit at the top of the window frame, giving the whole treatment a tailored, considered look.",
      "A bold print makes a genuine statement, while a solid, matching color keeps the whole thing subtle and cohesive.",
    ],
    photo: photo("custom-cornices.png", "Custom cornice adding structure to a modern, sophisticated kitchen window", 683, 1024),
  },
  {
    n: "12",
    title: "Venetian Blinds",
    paras: [
      "Venetian blinds remain a practical standby &mdash; easy to adjust, genuinely versatile, and still stylish after decades of use.",
      "They control light with real precision, tilting to let in exactly as much as needed at any time of day.",
      "Wood blinds lean cozy, while aluminum ones suit a modern, industrial kitchen especially well.",
    ],
    photo: photo("venetian-blinds.png", "Venetian blinds in a modern, sleek kitchen", 683, 1024),
  },
  {
    n: "13",
    title: "Patterned Roller Blinds",
    paras: [
      "For anyone bored of plain neutrals, a patterned roller blind delivers genuine personality without much extra effort.",
      "The pattern becomes the window's whole focal point, which simplifies the rest of the room's styling decisions.",
      "Coordinating the pattern with the backsplash or countertop accents pulls the whole kitchen together.",
    ],
    photo: photo("patterned-roller.png", "Patterned roller blinds in a vibrant kitchen", 683, 1024),
  },
  {
    n: "14",
    title: "Floor-to-Ceiling Drapes",
    paras: [
      "For a kitchen with genuinely large windows or sliding doors, floor-to-ceiling drapes elevate the whole space considerably.",
      "The sheer scale of them adds real drama and makes the ceiling feel taller than it actually is.",
      "Jewel tones like emerald or sapphire read as rich and luxe, while a neutral keeps the same scale feeling timeless instead.",
    ],
    photo: photo("floor-ceiling-drapes.png", "Floor-to-ceiling drapes in an exquisite, luxurious kitchen", 683, 1024),
  },
  {
    n: "15",
    title: "Frosted Glass Film",
    paras: [
      "For anyone who'd rather skip curtains and blinds entirely, frosted glass film solves privacy with zero daily maintenance.",
      "It diffuses light beautifully while blocking a direct view in or out, all without adding any visible hardware.",
      "It works especially well on an awkward or high-use window where a curtain would just get in the way.",
    ],
    photo: photo("frosted-glass.png", "Frosted glass film on a window in a contemporary minimalist kitchen", 683, 1024),
  },
  {
    n: "16",
    title: "Woven Wood Shades",
    paras: [
      "Woven wood shades bring the same natural texture as bamboo, just with a bit more visual variety in the weave.",
      "The material adds real warmth to a kitchen window without feeling heavy or overly rustic.",
      "Paired with a light, airy curtain layered behind them, they create that dreamy, textured look a lot of kitchens are missing.",
    ],
    photo: photo("woven-wood.png", "Woven wood shades in a cozy bohemian-styled kitchen", 683, 1024),
  },
  {
    n: "17",
    title: "Scalloped Valances",
    paras: [
      "For a little playful charm, scalloped valances bring genuine personality to an otherwise plain window.",
      "The curved edge reads as quirky and sweet without feeling overly fussy or dated.",
      "Paired with cafe curtains underneath, they build toward maximum quaintness for a kitchen that leans cozy and vintage.",
    ],
    photo: photo("scalloped-valances.png", "Scalloped valance in a charming, nostalgic kitchen", 683, 1024),
  },
  {
    n: "18",
    title: "Geometric Curtain Panels",
    paras: [
      "For anyone ready to go a little bolder and more modern, geometric curtain panels bring real energy to a kitchen window.",
      "The pattern itself becomes the room's main visual interest, which means everything else can stay simple around it.",
      "Balancing the bold print with solid, neutral walls and simple accessories keeps the whole room feeling fresh rather than overwhelming.",
    ],
    photo: photo("geometric-panels.png", "Geometric curtain panels in a striking modern kitchen", 683, 1024),
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
<p>A kitchen deserves more design attention than just a great backsplash and shiny appliances. The right window treatment pulls the whole room together, adds genuine comfort, and can shift the entire mood of the space.</p>
<p>Whether the goal is layered texture, a pop of color, or something sleek and simple, there's a treatment here built for almost any kitchen window.</p>
${photo("hero.jpg", "Stunning Scandinavian-inspired kitchen with a beautifully styled window treatment", 1152, 768)}

<h2>18 Kitchen Window Treatment Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>None of these treatments require replacing cabinets or counters to make a real difference. A single well-chosen window treatment can shift the whole feel of a kitchen on its own.</p>
<p>Roman shades, bamboo texture, or a flirty scalloped valance &mdash; there's no reason to settle for just one direction if more than one genuinely fits the space.</p>
`;

module.exports = { body };
