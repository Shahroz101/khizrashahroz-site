// Body content for "10 Farmhouse Kitchen Ideas You'll Actually Want to
// Copy". Photos carried over from the source article, with two reassigned
// to match what's actually in frame: the source's "Butcher Block" photo
// shows a white marble island with no wood counter visible, so it moved to
// the Neutral Palette idea instead, and the genuine butcher-block counter
// from the source's "Neutral Palette" photo now illustrates Butcher Block.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "farmhouse-kitchen-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function creditedPhoto(src, alt, w, h, name, url) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "farmhouse-kitchen-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo by ${name} via <a href="${url}" target="_blank" rel="nofollow noopener">Unsplash</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "Open Shelving Instead of Upper Cabinets",
    paras: [
      "Open shelving sounds risky &mdash; suddenly your mismatched mugs are on display for everyone to see &mdash; but it's one of the fastest ways to make a farmhouse kitchen feel lighter and less boxed-in.",
      "Closed cabinets stack up visual weight fast. A pair of open shelves does the opposite: it gives your everyday plates, bowls, and glassware somewhere to live while keeping the wall feeling open.",
      "If committing to a full wall of open shelving feels like too much, start small. Swap one upper cabinet for two shelves and see how it feels before going further.",
    ],
    photo: creditedPhoto("open-shelving.jpg", "Wood open shelves holding bowls, glasses and dishes above a butcher block counter with hanging utensils and a coffee maker", 1024, 683, "Clay Banks", "https://unsplash.com/photos/haJdK-oucKg"),
  },
  {
    n: "02",
    title: "A Real Apron-Front Sink",
    paras: [
      "If one single feature says \"farmhouse kitchen\" louder than anything else, it's the apron-front sink. It's not just a pretty shape &mdash; that deep, wide basin genuinely handles a stack of dishes better than a standard sink ever will.",
      "It's durable, it's timeless, and it instantly becomes the visual anchor of the whole room.",
      "Pair it with a bridge-style or gooseneck faucet in brass or matte black, and the sink alone starts doing a lot of the room's styling work.",
    ],
    photo: creditedPhoto("farmhouse-sink.jpg", "White apron-front farmhouse sink below a window with pots and pans hanging above and a floral curtain valance", 683, 1024, "Anna Syla", "https://unsplash.com/photos/BtnvyLCtWf8"),
  },
  {
    n: "03",
    title: "Reclaimed and Weathered Wood",
    paras: [
      "Reclaimed wood brings a level of authenticity that nothing new can really fake &mdash; every knot, hinge mark, and worn edge is doing real work.",
      "A vintage hutch or cabinet with original wrought-iron hinges, like the one here, carries decades of use in a way that instantly grounds a kitchen. Even swapping in one weathered piece against newer surfaces creates that layered, collected feeling.",
      "You don't need a full room of it. One genuinely old piece next to everything else does more than a dozen new items trying to look old.",
    ],
    photo: creditedPhoto("reclaimed-wood.jpg", "Vintage wood kitchen cabinets with wrought iron hinges and floral wallpaper beside a window with a red countertop", 1024, 683, "Clay Banks", "https://unsplash.com/photos/ItgAORdu9M8"),
  },
  {
    n: "04",
    title: "Shiplap or Vertical Paneling on One Wall",
    paras: [
      "Shiplap has earned its reputation as a farmhouse staple because it genuinely works with almost anything &mdash; paint it crisp white for a classic look, or leave a colored version like this blue paneling for something a little more unexpected.",
      "It adds texture and a sense of craftsmanship to a wall that would otherwise be flat drywall, without competing for attention the way a bold wallpaper might.",
      "One accent wall, often right behind the sink or range, is usually enough. You don't need to cover the whole room to get the effect.",
    ],
    photo: photo("shiplap.jpg", "Blue vertical shiplap paneling wall beside a farmhouse sink with a bridge faucet and stainless steel countertop", 1024, 682),
  },
  {
    n: "05",
    title: "A Statement Light Fixture",
    paras: [
      "Lighting is the most underrated farmhouse kitchen upgrade there is. Swap a builder-grade flush mount for something with real presence, and the whole room's personality shifts.",
      "A wagon-wheel style fixture with exposed Edison bulbs, like the one shown here, brings genuine rustic character. A vintage-inspired chandelier or an oversized iron pendant over an island does similar work in a more everyday kitchen setting.",
      "Think of the fixture as functional jewelry for the room &mdash; it should be noticeable, not apologetic about it.",
    ],
    photo: photo("lighting.jpg", "Rustic wagon-wheel chandelier with exposed Edison bulbs hanging from a wood beam ceiling", 1024, 683),
  },
  {
    n: "06",
    title: "Butcher Block Where Stone Usually Goes",
    paras: [
      "Granite and quartz get most of the attention, but butcher block brings a warmth that stone simply can't replicate &mdash; and it looks especially good against cream or white cabinetry.",
      "It costs less than high-end stone to start, and it actually improves with age: a little patina and a few marks just add character over the years.",
      "It does need some upkeep &mdash; an occasional oiling, quick wipe-ups &mdash; but most people who have it will tell you the trade-off is worth it for how much warmth it adds to the room.",
    ],
    photo: creditedPhoto("texture.jpg", "Cream beadboard kitchen cabinets with a wood butcher block counter, red gingham curtain and stainless steel range", 1024, 683, "Clay Banks", "https://unsplash.com/photos/GWq0sBIoLTo"),
  },
  {
    n: "07",
    title: "A Small Breakfast Nook",
    paras: [
      "A breakfast nook is one of the most underrated additions you can make to a farmhouse kitchen &mdash; a dedicated little corner for coffee, a quick breakfast, or a spot for the kids before school.",
      "A built-in bench with cushions is the classic version, but a simple wood table with a handful of chairs by a window does the same job in less space.",
      "Even a small kitchen can pull this off. A two-seat bistro setup by a window captures the same cozy effect as a full built-in nook.",
    ],
    photo: photo("breakfast-nook.jpg", "Round wood dining table with four chairs positioned by floor-to-ceiling windows overlooking rolling hills", 1024, 733),
  },
  {
    n: "08",
    title: "Vintage-Inspired Hardware and Fixtures",
    paras: [
      "Sometimes the smallest details carry the most weight. Swapping plain modern pulls for something with a worn, vintage character changes the whole feel of a kitchen without touching a single cabinet box.",
      "A genuinely aged piece, like the chippy-paint hutch here with its original latch hardware, shows exactly what that patina looks like in real life &mdash; and it's worth chasing even in small doses elsewhere in the kitchen.",
      "Cup pulls in oil-rubbed bronze, ceramic knobs with a distressed finish, or warm brass pulls all do the same quiet work of making a kitchen feel considered rather than builder-grade.",
    ],
    photo: creditedPhoto("hardware.jpg", "Antique chippy white-painted wood hutch cabinet with vintage latch hardware and glassware, beside a worn wood table", 1024, 683, "Clay Banks", "https://unsplash.com/photos/JbLev8Y0xUQ"),
  },
  {
    n: "09",
    title: "An Island That Actually Anchors the Room",
    paras: [
      "A sturdy island does more than add counter space &mdash; it becomes the spot where everything actually happens. Homework, weekend coffee, late-night snacks, impromptu gatherings while dinner's cooking.",
      "Worn or reclaimed wood tops bring in texture, open shelving or baskets underneath add storage without more cabinetry, and a generously sized top invites people to actually linger there.",
      "It doesn't need to match the rest of your cabinetry, either. A contrasting island often makes the whole kitchen feel more layered and considered, not less cohesive.",
    ],
    photo: creditedPhoto("island.jpg", "Worn wood kitchen island with hanging pots above, a vintage white hutch and a farmhouse sink in the background", 1024, 683, "Clay Banks", "https://unsplash.com/photos/9SndaxCJZcs"),
  },
  {
    n: "10",
    title: "A Neutral Base With Layered Texture",
    paras: [
      "The thread that ties every farmhouse kitchen together is the palette: keep the base in whites, creams, and soft grays, then build depth through texture rather than color.",
      "Woven baskets, linen, warm wood tones, and a little greenery all do this work quietly &mdash; the kind of kitchen shown here leans fully neutral but still feels warm rather than clinical because of exactly this layering.",
      "A neutral base is also what keeps a farmhouse kitchen feeling timeless instead of trend-driven. The textures can shift over the years without the bones of the room ever feeling dated.",
    ],
    photo: creditedPhoto("butcher-block.jpg", "Cream and white kitchen with a large island, brass pendant lighting, wood bar stools and layered greenery", 1024, 768, "Collov Home Design", "https://unsplash.com/photos/zsIx8uc-EcA"),
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
<p>Farmhouse kitchens have stayed popular for a reason that has nothing to do with trends: they manage to look polished and still feel like somewhere you can actually cook without worrying about ruining the aesthetic. That balance is harder to pull off than it looks.</p>
<p>The ones that work best aren't the most expensive or the most styled for photos &mdash; they're the ones built around real use. Open shelves that hold dishes you actually reach for. A sink deep enough for actual dishes. A table people linger at.</p>
<p>Here are ten ways to bring that warmth into a kitchen, whether you're planning a full renovation or just swapping a few details at a time.</p>
${creditedPhoto("hero.jpg", "Farmhouse kitchen with dark green cabinets, butcher block countertops, open wood shelving and a small wood island", 2560, 1706, "Clay Banks", "https://unsplash.com/photos/dcTDSnEh31A")}

<h2>10 Farmhouse Kitchen Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Ten ideas, and you genuinely don't need all of them to get the look. From open shelving and shiplap to vintage hardware and a proper breakfast nook, each one adds its own bit of warmth without requiring a full renovation.</p>
<p>The appeal of farmhouse style has always been that balance &mdash; stylish without being precious, rustic without feeling unfinished. Swapping hardware, adding a butcher block counter, or styling one open shelf can shift the whole feel of a kitchen on its own.</p>
<p>Start with whichever idea you keep coming back to. The rest of the kitchen tends to follow.</p>
`;

module.exports = { body };
