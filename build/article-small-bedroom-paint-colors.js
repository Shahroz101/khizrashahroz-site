// Body content for "12 Paint Colors That Actually Make a Small Bedroom
// Feel Bigger". Photos carried over from the source article. All 15
// downloaded photos were visually verified against their intended color
// before writing captions — no mismatches found this time. Condensed the
// source's 5 padded intro H2 sections down to 2. Non-hero photos are
// credited back to their original Pinterest pin, matching site style.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-bedroom-paint-colors", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-bedroom-paint-colors", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Powder Blue",
    paras: [
      "Powder blue is one of the most reliable choices for a small bedroom, and it earns that reputation honestly. The cool, airy tone pushes walls back visually, so a cramped room suddenly reads as calmer and more open than its square footage suggests.",
      "It also happens to be one of the easiest colors to live with. Powder blue pairs naturally with warm wood tones, woven textures, and soft linen bedding without ever competing for attention.",
      "A friend of mine repainted her tiny guest room this shade last spring and swore the room felt a full size bigger by the time the furniture went back in &mdash; which tracks, since cool tones genuinely do recede in a way warm ones don't.",
    ],
    photo: pinPhoto("powder-blue.jpg", "Small bedroom with soft powder blue walls, a woven pendant light, layered blue and white bedding and a round mirror above the headboard", 683, 1024, "https://www.pinterest.com/pin/15129348745482410/", "Powder Blue Small Bedroom"),
  },
  {
    n: "02",
    title: "Soft Sage Green",
    paras: [
      "Sage green has quietly become the go-to for anyone who wants their bedroom to feel like a retreat rather than just a place to sleep. It's muted enough to stay soothing but has just enough depth to keep a small room from looking washed out.",
      "What makes sage genuinely useful for tight spaces is how well it photographs in both daylight and lamp light &mdash; it doesn't shift into something murky once the sun goes down, which is a real risk with some deeper greens.",
      "\"Sage is the one color I never get complaints about,\" a designer once told me, \"it's grounding without being heavy.\" Pair it with warm wood and a few trailing plants and the room starts to feel like it was always meant to be this color.",
    ],
    photo: pinPhoto("soft-sage-green.jpg", "Small bedroom with soft sage green walls, a floating wood shelf with framed botanical art, green throw pillows and a woven area rug", 683, 1024, "https://www.pinterest.com/pin/281543726823171/", "Soft Sage Green Small Bedroom"),
  },
  {
    n: "03",
    title: "Light Taupe",
    paras: [
      "Taupe sits in that sweet spot between warm and neutral, which makes it one of the least risky colors you can put in a small bedroom. It reads as sophisticated without tipping into cold, and it rarely clashes with whatever furniture you already own.",
      "The tone also does something clever with light &mdash; it softens harsh daylight in a south-facing room and still looks intentional under warm evening bulbs, so the color stays consistent no matter the hour.",
      "If you've ever repainted a room and immediately regretted the shade once the sun moved across it, taupe is the safer bet. It's forgiving in a way bolder colors simply aren't.",
    ],
    photo: pinPhoto("light-taupe.jpg", "Small bedroom corner with light taupe walls, framed black and white art, a dark wood nightstand with eucalyptus stems and a sconce lamp", 683, 1024, "https://www.pinterest.com/pin/988821661944903661/", "Light Taupe Small Bedroom"),
  },
  {
    n: "04",
    title: "Warm Ivory",
    paras: [
      "Ivory is often dismissed as boring, but in a small bedroom it does something genuinely useful: it bounces every bit of available light around the room instead of absorbing it, which makes the whole space feel brighter without needing extra lamps.",
      "It's also the easiest color to decorate around. Warm ivory walls let textured bedding, woven baskets, and a few candles do the visual work, so the room feels layered and cozy rather than flat.",
      "I'd call it the color equivalent of a good white t-shirt &mdash; unremarkable on its own, but it makes everything else in the room look better by comparison.",
    ],
    photo: pinPhoto("warm-ivory.jpg", "Small cozy bedroom with warm ivory walls, a floating shelf with candles and dried pampas grass, a round mirror and soft lamp lighting", 683, 1024, "https://www.pinterest.com/pin/3940718421089835/", "Warm Ivory Small Bedroom"),
  },
  {
    n: "05",
    title: "Pale Greige",
    paras: [
      "Greige &mdash; that in-between of gray and beige &mdash; has stuck around for a reason. In a small bedroom, it reads as more polished than plain beige but warmer than straight gray, which keeps the room from feeling sterile.",
      "It's also one of the few colors that genuinely works with mismatched metals and woods, so if your nightstands and light fixtures don't quite match, greige smooths the whole thing over instead of highlighting the mismatch.",
      "This is the shade I'd recommend to anyone who wants their room to look professionally designed without actually hiring a designer. It does a lot of the heavy lifting on its own.",
    ],
    photo: pinPhoto("pale-greige.jpg", "Small bedroom with pale greige walls, three framed botanical prints above a tufted headboard, layered beige bedding and a knit throw", 683, 1024, "https://www.pinterest.com/pin/719942690475661152/", "Pale Greige Small Bedroom"),
  },
  {
    n: "06",
    title: "Blush Beige",
    paras: [
      "A soft blush leaning into beige gives a small bedroom warmth without going full pink. It's a quieter way to bring in color if you want something softer than neutral but aren't ready to commit to a statement wall.",
      "Blush beige also flatters natural light beautifully, picking up a warm glow in the late afternoon that makes the room feel genuinely inviting rather than just decorated.",
      "Keep the rest of the palette simple &mdash; white linens, a little dried pampas grass, maybe one framed print &mdash; and let the wall color carry the mood. Overdecorating against this shade tends to compete rather than complement.",
    ],
    photo: pinPhoto("blush-beige.jpg", "Small bedroom with blush beige walls, framed botanical art, pampas grass in a vase, pink linen pillows and a pink knit throw", 683, 1024, "https://www.pinterest.com/pin/13159023905757329/", "Blush Beige Small Bedroom"),
  },
  {
    n: "07",
    title: "Misty Gray",
    paras: [
      "Gray gets a bad reputation for feeling cold, but a misty, soft gray is a different story entirely in a small bedroom. It's calm without being flat, and it gives you a genuinely neutral backdrop for layering in texture.",
      "The real advantage of misty gray is how well it handles clutter. Books, throws, and mismatched frames all look intentional against it in a way they might not against a brighter color.",
      "If your small bedroom doubles as a reading nook or a catch-all for everyday life, this is the shade that keeps the chaos looking curated instead of messy.",
    ],
    photo: pinPhoto("misty-gray.jpg", "Small bedroom with misty gray walls, a white bookshelf, black and white framed photography, a gray patterned rug and white nightstand", 683, 1024, "https://www.pinterest.com/pin/5488830793066368/", "Misty Gray Small Bedroom"),
  },
  {
    n: "08",
    title: "Dusty Lavender",
    paras: [
      "Dusty lavender is proof that a small bedroom can handle real color without feeling overwhelming, as long as the saturation stays soft. It brings in personality and a touch of romance while still functioning as a restful backdrop for sleep.",
      "What keeps this shade from feeling precious is pairing it with neutral furniture &mdash; a beige headboard, cream bedding &mdash; so the lavender reads as sophisticated rather than overly sweet.",
      "It's a genuinely good option for anyone who wants their bedroom to feel a little more expressive without sacrificing the calm a small space actually needs to feel restful.",
    ],
    photo: pinPhoto("dusty-lavender.jpg", "Small bedroom with dusty lavender walls, framed floral art, a tufted beige headboard and purple throw pillows with fresh flowers", 683, 1024, "https://www.pinterest.com/pin/1066579124264431674/", "Dusty Lavender Small Bedroom"),
  },
  {
    n: "09",
    title: "Soft Charcoal Accent",
    paras: [
      "This one breaks the usual rule of keeping small rooms light, and it works anyway. A soft charcoal wall brings genuine depth and coziness, especially when paired with warm lamp light instead of overhead fixtures.",
      "The trick is restraint elsewhere &mdash; keep the bedding lighter, add warm wood nightstands, and let the dark wall anchor the room rather than swallow it whole.",
      "Done this way, a small bedroom in charcoal doesn't feel smaller at all. It feels intentional, like a boutique hotel room rather than a cramped afterthought.",
    ],
    photo: pinPhoto("soft-charcoal.jpg", "Small bedroom with soft charcoal walls, black and white framed photography, warm bedside lamps and a rust-colored accent pillow", 683, 1024, "https://www.pinterest.com/pin/281543726371919/", "Soft Charcoal Accent Small Bedroom"),
  },
  {
    n: "10",
    title: "Muted Olive",
    paras: [
      "Muted olive takes the earthiness of sage a step further into something richer and more grounded. It's a bold move for a small bedroom, but the matte, dusty quality of the tone keeps it from feeling like it's closing in on you.",
      "This shade genuinely comes alive with a floating shelf, a little greenery, and warm pendant lighting &mdash; the kind of setup that turns a plain small room into something that actually photographs well.",
      "If your taste runs more earthy and collected than soft and pastel, olive is the paint color on this list most likely to feel like you.",
    ],
    photo: pinPhoto("muted-olive.jpg", "Small bedroom with muted olive green walls, a floating wood shelf, green throw pillows and warm hanging pendant lights on either side of the bed", 683, 1024, "https://www.pinterest.com/pin/2111131073669460/", "Muted Olive Small Bedroom"),
  },
  {
    n: "11",
    title: "Soft Sand",
    paras: [
      "Soft sand is warm neutral at its most relaxed &mdash; the kind of color that makes a small bedroom feel like a quiet retreat rather than a room you're just passing through on your way to sleep.",
      "It leans warmer than greige and softer than beige, which makes it especially good in rooms that don't get much natural light, since it never reads as cold or clinical under lamp light alone.",
      "Add a few candles, a knit throw, and some dried botanicals and the room practically styles itself. This is the color for anyone who wants cozy over polished.",
    ],
    photo: pinPhoto("soft-sand.jpg", "Small cozy bedroom with soft sand-colored walls, an arched alcove with shelving, candles, warm lamp lighting and a knit blanket on the bed", 683, 1024, "https://www.pinterest.com/pin/59039445112088789/", "Soft Sand Small Bedroom"),
  },
  {
    n: "12",
    title: "Soft Warm White",
    paras: [
      "A soft warm white is the safest, most flexible choice on this list, and sometimes that's exactly what a small bedroom needs. It maximizes light, makes the ceiling feel higher, and gives you total freedom to change up decor whenever you want without repainting.",
      "The key is choosing a white with a warm undertone rather than a stark, cool one &mdash; the difference between a room that feels inviting and one that feels like a blank box is almost entirely in that undertone.",
      "Layer in plants, woven textures, and a gallery of small framed prints, and warm white stops feeling plain. It becomes the quiet backdrop that lets everything else in the room do the talking.",
    ],
    photo: pinPhoto("soft-warm-white.jpg", "Small bedroom with warm white walls, hanging plants, a gallery of small framed prints, woven baskets and layered neutral bedding with a knit throw", 683, 1024, "https://www.pinterest.com/pin/5911043262687183/", "Soft Warm White Small Bedroom"),
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
<p>Paint color does more work in a small bedroom than almost anywhere else in the house. The right shade can make a cramped room feel genuinely open, while the wrong one &mdash; even a color you love in theory &mdash; can make the walls feel like they're closing in by nine at night.</p>
<p>It's not just about going light to "open things up," either. Lighting, undertone, and how a color handles both morning sun and evening lamp light all matter more in a tight space than they would in a sprawling one.</p>
${photo("hero.jpg", "Small bedroom with warm neutral walls, a round mirror above a tufted headboard and layered bedding", 683, 1024)}

<h2>Why Color Hits Differently in a Small Room</h2>
<p>A color that reads as elegant in a big, bright room can feel completely different boxed into a smaller footprint. Small rooms amplify everything &mdash; undertones get more intense, shadows pool in corners faster, and a shade that looked neutral on a paint chip can suddenly skew warmer or cooler once it's on all four walls.</p>
<p>Lighting changes the equation just as much as square footage does. A north-facing room pulls cooler and benefits from warm undertones to balance it out, while a sunnier room can handle cooler blues and grays without ever feeling cold. The psychology matters too &mdash; muted, dusty tones tend to feel calming and help a small space feel more like a retreat than a leftover corner of the house.</p>
${pinPhoto("intro-why.jpg", "Small bedroom with taupe walls, a floating shelf with framed art and dried pampas grass, warm lamp lighting and a woven basket", 1024, 683, "https://www.pinterest.com/pin/1129418412825445783/", "Why Color Matters in a Small Bedroom")}

<h2>Choosing Without the Regret</h2>
<p>The biggest mistake people make with small-bedroom paint is picking a color straight off a swatch or a screen and skipping the test patch entirely. What looks perfect in a photo can shift completely once it's on your actual wall, under your actual light, next to your actual furniture.</p>
<p>Paint a sample patch and genuinely live with it for a few days &mdash; check it in the morning, at midday, and again once the lamps are on at night. And resist the instinct to default to stark white just because the room is small. A warm, considered neutral almost always does more for the space than the brightest option available.</p>
${pinPhoto("intro-choose.jpg", "Small bedroom with soft neutral cream walls, a framed botanical print above the headboard, sheer curtains and layered beige and terracotta bedding", 683, 1024, "https://www.pinterest.com/pin/1089800809853606457/", "Choosing Small Bedroom Paint Colors")}

<h2>12 Paint Colors Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>There's no single paint color that works for every small bedroom &mdash; it comes down to your light, your furniture, and honestly how calm or expressive you want the room to feel. What all twelve of these shades have in common is that none of them fight the room's size. They work with it.</p>
<p>Grab a few sample pots before committing to anything. The right color for a small bedroom isn't just the prettiest one on the wall &mdash; it's the one that still feels right at eleven at night with the lamp on and the door closed.</p>
`;

module.exports = { body };
