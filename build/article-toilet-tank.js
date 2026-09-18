// Body content for the "16 Toilet Tank Decorating Ideas" post.
// Images sourced from Pinterest pins the user selected and provided
// directly; each is credited back to its pin per their request.

const { picture } = require("./picture-helper.js");

const PIN = {
  hero: { src: "hero", w: 1024, h: 1536, alt: "Woven tray on a toilet tank styled with a eucalyptus vase, candle and rolled towels", url: "https://www.pinterest.com/pin/7388786885644458/", label: "Toilet Tank Tray Styling" },
  plant: { src: "plant", w: 1200, h: 1724, alt: "Snake plant and a woven lidded jar styled on a woven tray on a toilet tank", url: "https://www.pinterest.com/pin/20969954511919774/", label: "Toilet Tank Plant Styling" },
  tray: { src: "tray", w: 529, h: 941, alt: "White ceramic vase with flowers and a reed diffuser on a stone tray on a toilet tank", url: "https://www.pinterest.com/pin/1147925392567121353/", label: "Toilet Tank Tray Decor" },
  candle: { src: "candle", w: 667, h: 1000, alt: "Wooden tray with a lit candle, glass jar and small fern on a toilet tank", url: "https://www.pinterest.com/pin/5277724560492049/", label: "Toilet Tank Candle Styling" },
  vase: { src: "vase", w: 1024, h: 1536, alt: "Stone ceramic vase with white flowers and a candle on a woven tray on a toilet tank", url: "https://www.pinterest.com/pin/591097519891420566/", label: "Toilet Tank Vase Styling" },
  bookStack: { src: "book-stack", w: 869, h: 1738, alt: "Stacked decorative books topped with a woven jar on a shelf above a toilet", url: "https://www.pinterest.com/pin/1106407833488975696/", label: "Toilet Tank Book Stack Styling" },
  framedPrint: { src: "framed-print", w: 1080, h: 1920, alt: "Framed artwork hung above a toilet tank styled with a woven basket and small vase", url: "https://www.pinterest.com/pin/1688918606948202/", label: "Above Toilet Framed Art" },
  neutralArrangement: { src: "neutral-arrangement", w: 683, h: 1024, alt: "Gold tray with a candle and glass vase of greenery on a toilet tank against herringbone tile", url: "https://www.pinterest.com/pin/6685099442386590/", label: "Neutral Toilet Tank Arrangement" },
  basket: { src: "basket", w: 768, h: 1152, alt: "Woven basket holding a plant, toilet paper and a reed diffuser on a toilet tank", url: "https://www.pinterest.com/pin/306315212178817722/", label: "Toilet Tank Basket Styling" },
  eucalyptus: { src: "eucalyptus", w: 941, h: 1672, alt: "Marble vase with white flowering stems, a candle and folded towels on a gold-trimmed tray", url: "https://www.pinterest.com/pin/1035546508132365578/", label: "Toilet Tank Vase and Candle Styling" },
  bowl: { src: "bowl", w: 928, h: 1664, alt: "Woven basket with a potted plant, toilet paper rolls and dried flowers on a toilet tank", url: "https://www.pinterest.com/pin/40673202880452022/", label: "Toilet Tank Basket and Plant Styling" },
  blackWhite: { src: "black-white", w: 1199, h: 1717, alt: "Black floating shelves styled with white towels and a black and white patterned bowl above a toilet", url: "https://www.pinterest.com/pin/7881368093618159/", label: "Modern Black and White Toilet Decor" },
  rustic: { src: "rustic", w: 1200, h: 1600, alt: "Wire basket with vintage-style canisters, a white vase and a wooden sign on a toilet tank", url: "https://www.pinterest.com/pin/488288784597489233/", label: "Rustic Farmhouse Toilet Tank Decor" },
  stoneMarble: { src: "stone-marble", w: 529, h: 941, alt: "White marble tray with a glass vase of pink flowers on a toilet tank in a pink bathroom", url: "https://www.pinterest.com/pin/258675572343664338/", label: "Marble Toilet Tank Tray" },
  spa: { src: "spa", w: 704, h: 1024, alt: "Wooden tray with river stones, layered candles and a small succulent on a toilet tank", url: "https://www.pinterest.com/pin/44262008833255505/", label: "Spa-Inspired Toilet Tank Display" },
  matchColors: { src: "match-colors", w: 529, h: 941, alt: "Patterned tray with a small potted plant and a watering can on a toilet tank in a pink bathroom", url: "https://www.pinterest.com/pin/258675572343664363/", label: "Color-Matched Toilet Tank Decor" },
  minimal: { src: "minimal", w: 941, h: 1672, alt: "Marble vase with white flowering stems and a candle styled simply on a toilet tank tray", url: "https://www.pinterest.com/pin/1035546508132365578/", label: "Minimal Toilet Tank Styling" },
  intro: { src: "intro", w: 1024, h: 1536, alt: "Floating shelf above a toilet styled with a framed Hello print and a potted plant", url: "https://www.pinterest.com/pin/48273027253708967/", label: "Above Toilet Shelf Styling" },
  declutter: { src: "declutter", w: 1024, h: 1536, alt: "Gold wire tray with a candle, toilet paper roll and soap dispenser on a toilet tank", url: "https://www.pinterest.com/pin/486670303507292572/", label: "Simple Toilet Tank Tray Styling" },
  smallBathroom: { src: "small-bathroom", w: 538, h: 957, alt: "Stone tray with a faux plant and essential oils on a toilet tank in a green bathroom", url: "https://www.pinterest.com/pin/258675572343664364/", label: "Small Bathroom Toilet Tank Styling" },
};

function photo(key) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "toilet-tank", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Add a Small Green Plant",
    photoKey: "plant",
    paras: [
      "A small plant can instantly make a toilet tank feel warmer.",
      "I particularly like compact plants with simple leaves because they add color without overwhelming the space. A small pothos, snake plant, or another bathroom-friendly plant can work depending on the available light.",
      "If your bathroom receives very little natural light, use a realistic faux plant instead. There's no prize for slowly killing a beautiful plant in a windowless bathroom.",
      "Keep the pot small and choose a container that complements your bathroom finishes.",
    ],
  },
  {
    n: "02",
    title: "Use a Decorative Toilet Tank Tray",
    photoKey: "tray",
    paras: [
      "A tray gives your toilet tank a deliberate, organized appearance.",
      "I like using a small rectangular or oval tray because it visually groups several objects together. Instead of having a candle, plant, and little container floating around separately, the tray makes them look like one arrangement.",
    ],
    paraBeforeList: "Try materials such as:",
    list: ["Light wood", "Marble-look ceramic", "Bamboo", "Stone", "Metal"],
    after: [
      "For a warm neutral bathroom, I'd personally choose natural wood. It adds enough texture without competing with the rest of the room.",
    ],
  },
  {
    n: "03",
    title: "Style It With a Candle",
    photoKey: "candle",
    paras: [
      "A candle can add a surprisingly cozy touch to a bathroom.",
      "Choose a small decorative candle in a glass or ceramic container. Neutral scents such as vanilla, linen, sandalwood, or eucalyptus can complement a relaxing bathroom atmosphere.",
      "I prefer short candles rather than tall ones because the lower profile looks more balanced on a toilet tank.",
      "If you rarely use the candle, you can also treat it purely as decorative bathroom styling.",
    ],
  },
  {
    n: "04",
    title: "Add a Small Ceramic Vase",
    photoKey: "vase",
    paras: [
      "A little ceramic vase gives the tank some personality without requiring much space.",
      "You can leave it empty for a minimalist look or add a few faux stems. I particularly like cream, beige, white, or muted green ceramics because they work beautifully with neutral bathrooms.",
      "The key here involves scale.",
      "A huge vase on a toilet tank looks less like intentional styling and more like the vase lost its way.",
    ],
  },
  {
    n: "05",
    title: "Try a Minimalist Bathroom Book Stack",
    photoKey: "bookStack",
    paras: [
      "A small stack of decorative books can create a relaxed, collected look.",
      "Choose books with attractive neutral covers and keep the stack low. You could place a small decorative object on top, such as a ceramic bowl or tiny plant.",
      "I'd avoid using valuable books here, though. Bathrooms produce moisture, and humidity doesn't exactly make paper happier.",
      "Keep the arrangement small, stable, and easy to remove when cleaning.",
    ],
  },
  {
    n: "06",
    title: "Use a Small Framed Print",
    photoKey: "framedPrint",
    paras: [
      "If you want something more decorative, try a small framed artwork or print.",
      "A tiny botanical illustration, abstract print, vintage-inspired artwork, or simple typography can add character without requiring another wall.",
      "I like this approach when the bathroom already has plenty of functional accessories. Instead of adding another object, you introduce visual interest through artwork.",
      "Choose a lightweight frame and keep it securely positioned.",
    ],
  },
  {
    n: "07",
    title: "Create a Neutral Toilet Tank Arrangement",
    photoKey: "neutralArrangement",
    paras: [
      "Neutral bathrooms can look incredibly sophisticated when you combine different textures.",
    ],
    paraBeforeList: "Try pairing:",
    list: ["A beige ceramic vase", "A small cream candle", "A wooden tray", "A tiny faux branch"],
    after: [
      "The colors can stay within shades of white, beige, taupe, cream, and warm brown.",
      "This approach works particularly well if you want that relaxed, designer-inspired bathroom look without buying an entire new vanity.",
    ],
  },
  {
    n: "08",
    title: "Add a Small Woven Basket",
    photoKey: "basket",
    paras: [
      "A tiny woven basket can bring natural texture to an otherwise hard-looking bathroom.",
      "Use one that fits comfortably on the tank and doesn't interfere with the flush mechanism.",
      "I'd choose a basket with a relatively tight weave because it collects less dust than extremely loose decorative baskets.",
      "You can leave it empty or use it for a small rolled hand towel if the size and placement make sense.",
    ],
  },
  {
    n: "09",
    title: "Style the Toilet Tank With Eucalyptus",
    photoKey: "eucalyptus",
    paras: [
      "Eucalyptus brings a spa-like feeling to bathroom decor.",
      "You can place a few faux eucalyptus stems inside a small ceramic vase. If you use fresh eucalyptus, remember that bathroom humidity can affect how quickly plant material changes.",
      "I prefer faux stems for this particular spot because they require almost no maintenance.",
      "Pair green eucalyptus with a white ceramic vase for an especially clean and calming combination.",
    ],
  },
  {
    n: "10",
    title: "Add a Small Decorative Bowl",
    photoKey: "bowl",
    paras: [
      "A shallow decorative bowl can work surprisingly well on a toilet tank.",
      "Look for ceramic, stone, or wood designs with a simple shape. You could leave the bowl empty or place a few decorative items inside it.",
      "Personally, I like an empty bowl more than one filled with random objects. Bathroom decor can go from \"intentional\" to \"junk drawer\" incredibly quickly.",
      "Choose one beautiful bowl and let it do the work.",
    ],
  },
  {
    n: "11",
    title: "Create a Modern Black and White Display",
    photoKey: "blackWhite",
    paras: [
      "For a modern bathroom, keep the toilet tank arrangement extremely simple.",
      "Try a black ceramic vase, white candle, and small green plant.",
      "The contrast creates a crisp look without adding unnecessary color.",
      "This combination works especially well when the bathroom already features black hardware, such as a black mirror frame, faucet, shower fixtures, or cabinet handles.",
      "The repetition helps connect the toilet area with the rest of the room.",
    ],
  },
  {
    n: "12",
    title: "Add a Touch of Rustic Farmhouse Decor",
    photoKey: "rustic",
    paras: [
      "If your bathroom has farmhouse styling, bring that personality onto the toilet tank.",
      "Try a small wooden tray with a ceramic vase and a simple faux plant. You can also use aged-looking finishes, woven textures, or subtle vintage-inspired accessories.",
      "I'd keep the arrangement restrained, though.",
      "Farmhouse style doesn't require putting a miniature barn on every available surface. A few carefully chosen pieces create a much cleaner result.",
    ],
  },
  {
    n: "13",
    title: "Use a Stone or Marble Accent",
    photoKey: "stoneMarble",
    paras: [
      "A stone accent can make a bathroom feel more polished.",
      "Try a small marble-look tray, stone container, or decorative object.",
      "This idea works especially well with white, gray, beige, and cream bathrooms because the natural-looking texture adds depth without introducing a completely different color.",
      "If you already have marble countertops or tile, repeat that finish on a smaller scale for a cohesive appearance.",
    ],
  },
  {
    n: "14",
    title: "Create a Small Spa-Inspired Display",
    photoKey: "spa",
    paras: [
      "Want your bathroom to feel more like a little retreat?",
      "Keep the toilet tank arrangement calm and simple. A small ceramic vase, eucalyptus stems, candle, and neutral tray can create that spa-inspired feeling.",
      "I would stick with two or three colors maximum.",
      "White, beige, green, and natural wood make an easy combination. Add soft towels nearby and suddenly the entire bathroom feels more intentional.",
      "And yes, even the toilet area gets to participate in the spa fantasy.",
    ],
  },
  {
    n: "15",
    title: "Match the Toilet Tank Decor to Your Bathroom Colors",
    photoKey: "matchColors",
    paras: [
      "One of the easiest toilet tank decorating ideas involves simply repeating colors that already exist in the room.",
      "Look around your bathroom and pick one or two existing colors.",
    ],
    paraBeforeList: "For example:",
    list: [
      "Beige bathroom: cream vase + wood tray + dried stems",
      "Gray bathroom: white ceramic + black accent + greenery",
      "Blue bathroom: white vase + blue candle + natural wood",
      "Green bathroom: cream ceramic + botanical stems + brass accent",
    ],
    after: [
      "This technique creates cohesion without requiring expensive accessories.",
    ],
  },
  {
    n: "16",
    title: "Keep It Completely Minimal",
    photoKey: "minimal",
    paras: [
      "Sometimes the best toilet tank decorating idea involves barely decorating it at all.",
      "Place one small plant or one attractive ceramic piece in the center and stop there.",
      "I know, shocking. Not every surface needs five accessories fighting for attention.",
      "A minimalist arrangement works particularly well in small bathrooms because it keeps the room visually open and makes cleaning much easier.",
    ],
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  const paraBeforeList = idea.paraBeforeList ? `<p>${idea.paraBeforeList}</p>` : "";
  const list = idea.list ? `<ul>${idea.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : "";
  const after = idea.after ? idea.after.map((p) => `<p>${p}</p>`).join("\n      ") : "";
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${paraBeforeList}
    ${list}
    ${after}
    ${photo(idea.photoKey)}`;
}

const body = `
<p>A toilet tank usually gets ignored, but toilet tank decorating ideas can completely change the look of a small bathroom. I started paying more attention to this little spot when I realized how often a bathroom looked almost finished except for one awkward, completely empty toilet tank.</p>
<p>The trick, though, isn't to pile random stuff on top and call it decor. You want a few pieces that add personality without making cleaning annoying or interfering with the toilet itself. After trying different bathroom styling approaches, I've found that simple, lightweight, moisture-friendly decor works best.</p>
<p>And honestly, who says the toilet area has to look boring?</p>
${photo("hero")}

<h2>What Can You Put on Top of a Toilet Tank?</h2>
<p>Before getting into specific toilet tank decorating ideas, let's talk about what actually works. The toilet tank gives you a small horizontal surface, so you need to think more like you're styling a tiny shelf than decorating a full bathroom cabinet.</p>
<p>I usually look for three things: scale, moisture resistance, and practicality. A small plant, decorative tray, candle, framed print, or a couple of attractive containers can work beautifully.</p>
<blockquote><p>&ldquo;The key to mold control is moisture control.&rdquo;</p><cite>&mdash; U.S. Environmental Protection Agency</cite></blockquote>
<p>That advice matters here because bathrooms naturally collect humidity. If you regularly take hot showers, keep the bathroom ventilated and choose decor that can handle occasional moisture.</p>
<p>I also avoid anything tall or unstable. Nobody wants to reach for toilet paper and accidentally knock a ceramic vase onto the floor. That turns "bathroom refresh" into "why did I do this?"</p>
${photo("intro")}

<h2>How Do You Decorate a Toilet Tank Without Making It Look Cluttered?</h2>
<p>The easiest approach involves choosing one focal piece and one or two smaller accessories. You don't need to use every inch of the tank.</p>
<p>For example, you could pair a small plant with a candle. Or you could use a narrow tray with a soap dispenser-style container and a tiny decorative object.</p>
<p>Think about the rest of your bathroom, too. If you already have patterned shower curtains, colorful towels, and busy wall art, keep the toilet tank simple.</p>
<p>If your bathroom has a neutral palette, however, the tank gives you a nice opportunity to introduce texture through wood, ceramic, glass, woven materials, or greenery.</p>
<blockquote><p>&ldquo;A bathroom is often the dampest area&rdquo; of a home, according to the EPA, which recommends ventilation and drying damp surfaces.</p><cite>&mdash; U.S. Environmental Protection Agency</cite></blockquote>
<p>That's one reason I prefer easy-to-clean decorative pieces over anything porous or overly complicated.</p>
${photo("declutter")}

<h2>16 Toilet Tank Decorating Ideas to Try</h2>
<p>Now for the fun part. These toilet tank decorating ideas range from extremely simple to slightly more styled, so you can choose something that matches your bathroom rather than forcing your space into a particular aesthetic.</p>
${ideas.map(ideaBlock).join("\n")}

<h2>What Should You Avoid When Decorating a Toilet Tank?</h2>
<p>Decorating the toilet tank sounds simple, but a few practical details matter.</p>
<p>First, don't block the flush button, handle, or tank lid. You should always have easy access to the toilet components.</p>
<p>Second, avoid extremely heavy objects. You don't need to turn the tank into a display shelf for your entire ceramic collection.</p>
<p>Third, think about moisture.</p>
<blockquote><p>&ldquo;Use a bathroom fan that vents to the outdoors or open a window&rdquo; during and after showers when conditions allow, the EPA recommends.</p><cite>&mdash; U.S. Environmental Protection Agency</cite></blockquote>
<p>That advice also helps your decor last longer. Better ventilation reduces the moisture that can contribute to mold and mildew.</p>
<p>I'd also avoid highly absorbent decorative materials if your bathroom stays humid for long periods. Easy-to-clean materials generally make more sense around a toilet.</p>

<h2>How I Would Style a Toilet Tank in a Small Bathroom</h2>
<p>If I had a small bathroom and wanted a quick update, I wouldn't buy ten new accessories.</p>
<p>I'd start with a small wooden or stone tray, add one compact ceramic vase, and finish it with a small faux plant.</p>
<p>That's it.</p>
<p>The tray creates structure, the vase adds height, and the greenery adds life. The arrangement stays small enough that I can remove everything quickly when I clean.</p>
<p>For a modern bathroom, I'd switch the wood tray for a marble-look tray and use a black ceramic vase.</p>
<p>For a cozy bathroom, I'd use warm beige ceramics, natural wood, and soft greenery.</p>
<p>For a minimalist bathroom, I'd skip the tray entirely and use one beautiful ceramic piece.</p>
${photo("smallBathroom")}

<h2>How to Keep Toilet Tank Decor Clean</h2>
<p>Bathroom decor needs more maintenance than decor in a dry living room.</p>
<p>Dust, humidity, water droplets, and cleaning products can quickly build up around accessories. I recommend removing the pieces regularly and wiping both the objects and the tank underneath them.</p>
<p>The EPA emphasizes moisture control as a key part of preventing indoor mold growth.</p>
<p>A simple cleaning routine can help:</p>
<ul>
  <li>Remove all decorative pieces.</li>
  <li>Wipe the tank with an appropriate bathroom cleaner.</li>
  <li>Clean the decorative items according to their materials.</li>
  <li>Dry everything thoroughly.</li>
  <li>Return only the pieces you actually want.</li>
</ul>
<p>If you notice persistent moisture, condensation, or leaks, deal with the source rather than simply wiping the surface.</p>
<blockquote><p>&ldquo;Fix water leaks and other water problems as soon as possible.&rdquo;</p><cite>&mdash; U.S. Environmental Protection Agency</cite></blockquote>
<p>That's practical advice for your bathroom as a whole, not just your toilet tank.</p>

<h2>Final Thoughts on Toilet Tank Decorating Ideas</h2>
<p>The best toilet tank decorating ideas don't require a huge budget or a bathroom renovation. A small plant, ceramic vase, decorative tray, candle, artwork, or carefully chosen accent can make the area feel finished.</p>
<p>My biggest tip involves restraint. Choose a few pieces that complement your bathroom instead of filling every available inch.</p>
<p>Think about the colors already in the room. Think about moisture. Think about how easily you can remove everything for cleaning. Most importantly, make sure your decor doesn't interfere with the toilet's function.</p>
<p>After all, the goal isn't to make your toilet tank the star of the bathroom.</p>
<p>It's to make it look like it belongs there.</p>
<p>And honestly, that tiny difference can make the whole room feel much more polished.</p>
`;

module.exports = { body };
