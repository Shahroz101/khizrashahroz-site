// Body content for "17 Bathroom Design Styles Worth Trying". Photos
// carried over from the source article (AI-generated style, no
// Pinterest links, no visible credits). All 17 styles have a photo;
// none dropped. Distinct from bathroom-design-trends (specific trending
// elements like fixtures/tile/lighting) — this covers broader style
// archetypes (Farmhouse, Coastal, Art Deco, Victorian, etc.) instead.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-design-styles", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Farmhouse Charm",
    paras: [
      "Farmhouse style brings a warmth that somehow makes a whole space feel curated without ever trying too hard.",
      "Shiplap walls, weathered wood accents, and vintage-inspired hardware build the look, with a clawfoot tub earning genuine bonus points.",
      "A sliding barn door is one of the single biggest style upgrades available here &mdash; it shifts a bathroom from ordinary to genuinely photo-worthy almost instantly.",
    ],
    photo: photo("farmhouse.png", "Farmhouse bathroom with shiplap walls, a sliding barn door and a clawfoot tub", 1024, 576),
  },
  {
    n: "02",
    title: "Coastal Retreat",
    paras: [
      "When an actual beach trip isn't in the cards, a coastal bathroom brings the feeling home instead.",
      "Soft blues and sandy beige tones, sea glass tile, driftwood accents, and natural textures like jute and rattan all build that relaxed, breezy mood.",
      "It has a way of making an ordinary morning routine feel like a small vacation, which is the entire appeal of the style in the first place.",
    ],
    photo: photo("coastal.png", "Coastal bathroom with soft blue tones, sea glass tile and natural rattan textures", 1024, 576),
  },
  {
    n: "03",
    title: "Modern Industrial",
    paras: [
      "For anyone drawn to exposed pipes and matte black finishes, modern industrial is the clear direction to lean into.",
      "Raw concrete, steel accents, and real brick walls build the edgy foundation this style is known for.",
      "The key is balance &mdash; warm wood tones and a plush rug or two keep the space from reading as a cold warehouse instead of a bathroom.",
    ],
    photo: photo("industrial.png", "Modern industrial bathroom with exposed concrete, steel accents and brick walls", 1024, 576),
  },
  {
    n: "04",
    title: "Minimalist Elegance",
    paras: [
      "For anyone who treats \"less is more\" as a genuine design philosophy, a minimalist bathroom delivers real calm.",
      "Clean lines, soft neutrals, and zero visible clutter define the look, with wall-mounted fixtures and hidden storage doing most of the heavy lifting.",
      "Even a genuinely tiny bathroom can feel open and breezy once the clutter disappears &mdash; the restraint is what makes the space feel bigger than it actually is.",
    ],
    photo: photo("minimalist.png", "Minimalist bathroom with clean lines, soft neutrals and hidden storage", 1024, 576),
  },
  {
    n: "05",
    title: "Spa-Like Serenity",
    paras: [
      "Turning an everyday bathroom into something closer to a spa is a genuinely achievable goal, not just an aspirational one.",
      "Soft, calming lighting, natural stone finishes, and a rainfall showerhead do most of the transformation on their own.",
      "A few plants and a lit candle on top of that, and the whole space starts functioning as a real daily reset rather than just a bathroom.",
    ],
    photo: photo("spa-serenity.png", "Spa-like serene bathroom with natural stone finishes and a rainfall showerhead", 576, 1024),
  },
  {
    n: "06",
    title: "Classic White Marble",
    paras: [
      "For a bathroom that never actually goes out of style, white marble remains close to unbeatable.",
      "It works beautifully across floors, countertops, and even wall panels, and it pairs especially well with chrome fixtures.",
      "Even a house that otherwise leans toward builder-grade basics instantly reads as more elevated once marble enters the bathroom.",
    ],
    photo: photo("white-marble.png", "Elegant bathroom featuring polished white marble floors and countertops", 576, 1024),
  },
  {
    n: "07",
    title: "Bohemian Bliss",
    paras: [
      "For anyone whose personal style is organized chaos, a boho bathroom is where that energy genuinely belongs.",
      "Macramé, textured rugs, and layered patterns all welcome bold color without a second thought, and houseplants are practically a requirement.",
      "The combination of plants, pattern and personality tends to make this one of the rooms people actually want to linger in.",
    ],
    photo: photo("bohemian.png", "Vibrant bohemian bathroom with macramé, layered patterns and houseplants", 576, 1024),
  },
  {
    n: "08",
    title: "Retro Revival",
    paras: [
      "Pastel tile and vintage fixtures have a genuine, undeniable charm that modern design keeps circling back to.",
      "A mid-century vanity, globe lighting, and a pop of mint green or blush pink build the whole look.",
      "Adding in a little brass hardware completes the effect, turning the bathroom into something close to a stylish time machine.",
    ],
    photo: photo("retro.png", "Retro-inspired bathroom with pastel tile and mid-century globe lighting", 576, 1024),
  },
  {
    n: "09",
    title: "Contemporary Chic",
    paras: [
      "For anyone who wants clean, modern lines without losing all personality in the process, contemporary chic hits that exact sweet spot.",
      "Floating vanities, a frameless glass shower, and just the right touch of minimalism define the look.",
      "It reads as sleek without ever tipping into sterile, which is a harder balance to strike than it sounds.",
    ],
    photo: photo("contemporary.png", "Sleek contemporary bathroom with a floating vanity and frameless glass shower", 576, 1024),
  },
  {
    n: "10",
    title: "Japandi Fusion",
    paras: [
      "Japandi blends Japanese minimalism with Scandinavian coziness, and the combination is genuinely hard to beat for a calm bathroom.",
      "Soft neutral tones, light wood finishes, and an ultra-functional, clutter-free layout define the approach.",
      "It consistently reads as peaceful in a way that's close to a boutique hotel's bathroom, which is exactly the energy most people are chasing with this style.",
    ],
    photo: photo("japandi.png", "Serene Japandi-style bathroom with muted tones and light wood finishes", 576, 1024),
  },
  {
    n: "11",
    title: "Mediterranean Magic",
    paras: [
      "A Mediterranean-inspired bathroom turns an ordinary morning into a small daily escape.",
      "Earthy tiles, colorful mosaics, terracotta accents, and genuine stone textures build that warm, sun-soaked feeling.",
      "A single mosaic backsplash can be enough to make even a rushed weekday morning feel like it's happening somewhere considerably sunnier.",
    ],
    photo: photo("mediterranean.png", "Warm Mediterranean-style bathroom with earthy tiles and a mosaic backsplash", 576, 1024),
  },
  {
    n: "12",
    title: "Art Deco Glam",
    paras: [
      "Art Deco bathrooms are unapologetically glamorous &mdash; think Gatsby, reimagined entirely in tile.",
      "Deep jewel tones like navy, emerald and burgundy, paired with geometric patterns and gold accents, build the drama.",
      "Dramatic lighting finishes the look, and the overall effect tends to make even a quick visit feel like a small occasion.",
    ],
    photo: photo("art-deco.png", "Opulent Art Deco bathroom with jewel tones and geometric gold accents", 576, 1024),
  },
  {
    n: "13",
    title: "Vintage Victorian",
    paras: [
      "For anyone who genuinely loves a little drama, Victorian style delivers it in the best possible way.",
      "A freestanding tub, ornate mirrors, antique hardware, and a floral wallpaper pattern all build toward something genuinely romantic.",
      "The floral wallpaper especially tends to steal the whole room's attention the moment anyone walks in.",
    ],
    photo: photo("victorian.png", "Luxurious vintage Victorian bathroom with a freestanding tub and floral wallpaper", 576, 1024),
  },
  {
    n: "14",
    title: "Eco-Friendly Design",
    paras: [
      "An eco-friendly bathroom proves that doing right by the planet and having a genuinely stylish space aren't in conflict.",
      "Reclaimed materials, water-saving fixtures, and sustainable material choices form the foundation of the look.",
      "A little greenery and genuine natural light layered on top, and the whole thing reads as considered rather than just conscientious.",
    ],
    photo: photo("eco-friendly.png", "Eco-friendly bathroom with reclaimed materials and natural light", 576, 1024),
  },
  {
    n: "15",
    title: "Monochrome Magic",
    paras: [
      "There's something genuinely satisfying about a black-and-white bathroom &mdash; crisp, bold, and always feeling fully pulled together.",
      "Playing with texture is what keeps it interesting &mdash; matte tile, a glossy floor, or a patterned backsplash all add depth within the same two-color palette.",
      "It's one of the few looks here that genuinely never seems to go out of style, regardless of what's trending elsewhere.",
    ],
    photo: photo("monochrome.png", "Striking black and white monochrome bathroom with contrasting textures", 576, 1024),
  },
  {
    n: "16",
    title: "Rustic Retreat",
    paras: [
      "For anyone drawn to a cozy cabin feeling, a rustic bathroom delivers that warmth reliably.",
      "Natural materials carry the whole look &mdash; stone, weathered wood, and warm, low lighting throughout.",
      "The result feels calm and genuinely inviting, whether the house is actually in the woods or just borrowing the feeling.",
    ],
    photo: photo("rustic.png", "Cozy rustic bathroom with raw stone walls and weathered wood", 576, 1024),
  },
  {
    n: "17",
    title: "High-Tech Haven",
    paras: [
      "For a bathroom that genuinely functions like it belongs in the future, high-tech features change the whole daily routine.",
      "Voice-activated lighting, smart mirrors, and heated floors all let the space adapt to whoever's actually using it.",
      "Paired with sleek, modern finishes, the result is a genuinely futuristic sanctuary that still earns its keep every single day.",
    ],
    photo: photo("high-tech.png", "Futuristic high-tech bathroom with smart mirrors and sleek modern finishes", 576, 1024),
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
<p>A bathroom gets a fraction of the design attention the rest of a home usually receives, but it's just as capable of being genuinely stylish and expressive as any other room. The right style turns a purely functional space into one that actually feels considered.</p>
<p>None of these require a full gut renovation to pull off. A few key material or color choices, applied with real intention, carry most of the transformation on their own.</p>
${photo("hero.jpg", "Stunning modern industrial bathroom showcasing a distinct design style", 1280, 720)}

<h2>17 Bathroom Design Styles</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Seventeen distinct bathroom styles, from a spa-like sanctuary to something with real retro flair, prove there's no single right way to approach this room.</p>
<p>Think about the overall vibe of the rest of the home, and the preferences that already feel most natural, before picking a direction. The bathroom that actually gets used and enjoyed daily is the one that genuinely fits, not the one that just photographed best somewhere else.</p>
`;

module.exports = { body };
