// Body content for "10 Dorm Wall Decor Ideas Every Student Will Want to
// Copy". Photos carried over from the source article. Two captions were
// reassigned to the idea they actually depict: the photo captioned for
// "Peel-and-Stick Decals" in the source is a wall full of framed/printed
// band posters, not decals, so it now illustrates the Statement Posters
// idea instead, and that idea's original photo (a framed print over a bed)
// became the closing image. Decals and Photo Collage Walls run without a
// dedicated photo, same gap the source had.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "dorm-wall-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function creditedPhoto(src, alt, w, h, name, url) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "dorm-wall-decor-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo by ${name} via <a href="${url}" target="_blank" rel="nofollow noopener">Unsplash</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "A Gallery Wall That's Actually About You",
    paras: [
      "A gallery wall is still the fastest way to make a dorm wall look designed, even with zero design background.",
      "Treat it like a visual diary rather than a strict grid. Mix art prints, postcards, a motivational quote, whatever actually means something to you. Varying the frame sizes and finishes keeps it feeling curated instead of accidental, whether you arrange everything symmetrically or let it sprawl a little.",
      "Stick to three or four colors so it reads as one collection, include at least one genuinely personal object, and use removable strips for every single piece. Future you, packing up at the end of the semester, will be grateful.",
    ],
    photo: creditedPhoto("gallery-wall.jpg", "Framed black-and-white art prints and photos arranged in a gallery wall on an exposed brick wall above a white iron bed frame", 768, 1024, "Daria Doroshenko", "https://unsplash.com/photos/8FzQn08ukM8"),
  },
  {
    n: "02",
    title: "A Tapestry That Covers the Boring Stuff Fast",
    paras: [
      "Nothing covers dull cinderblock faster than a tapestry, which is exactly why they've become dorm-room royalty.",
      "A boho pattern brings instant warmth; an abstract one leans more modern. Either way, a tapestry is light enough to hang with a couple of removable hooks &mdash; no drilling, no drama, no losing your deposit.",
      "Drape a string of fairy lights around the edges once it's up, like the one shown here, and it stops looking like a dorm wall and starts looking like somewhere you'd actually want to study.",
    ],
    photo: photo("tapestry.png", "Patterned tapestry hung above a bed framed with warm fairy lights, layered with gray linen bedding and a woven side table", 574, 1024, "png"),
  },
  {
    n: "03",
    title: "Fairy Lights, Used With a Little Intention",
    paras: [
      "Harsh overhead dorm lighting has never done anyone's mood any favors. Fairy lights fix that in about ten minutes.",
      "Warm-toned strands make a room feel instantly cozier, while color-changing LEDs bring a more playful, late-night-study-session energy. My honest recommendation is to use both &mdash; fairy lights for ambient glow, an LED strip tucked behind the bed or desk for accent color.",
      "Hang a strand behind a sheer curtain for a soft, diffused glow, or run one along the ceiling line. A remote-controlled color setting is a small splurge that earns its keep fast.",
    ],
    photo: creditedPhoto("fairy-lights.jpg", "Fairy lights draped around a person's arms in a dorm room with a dense photo and postcard collage covering the wall behind them", 1024, 683, "Sarah Brown", "https://unsplash.com/photos/q4wBEb5HVLg"),
  },
  {
    n: "04",
    title: "Peel-and-Stick Decals for Zero-Commitment Style",
    paras: [
      "If you want a design moment without a single hole in the wall, decals are the most underrated option on this list.",
      "They've come a long way from cartoon flowers, too &mdash; think geometric shapes, botanical silhouettes, or a quote in a genuinely nice font. Done well, a cluster of oversized leaf decals behind a bed can read like a mural, minus the multi-day project.",
      "Go matte for a painted-on look, keep them to a single wall so the effect doesn't get diluted, and pair them with a small shelf nearby for a bit of dimension.",
    ],
  },
  {
    n: "05",
    title: "Floating Shelves That Do Double Duty",
    paras: [
      "Mini wall shelves are the rare dorm item that's both decorative and genuinely useful, which is why I reach for them constantly.",
      "Use them to display a few framed prints, a small plant, or a candle &mdash; or treat them as overflow storage if your desk is already maxed out.",
      "Keep two or three shelves in a matching finish, vary the height of what's on them, and resist the urge to fill every inch. A shelf that's half-empty often looks more intentional than one that's packed.",
    ],
    photo: creditedPhoto("wall-shelves.jpg", "Two black floating shelves mounted above a desk holding books, small plants and mugs, with a guitar hung on the wall beside them", 1600, 900, "Bradley Lembach", "https://unsplash.com/photos/76RsgeCiekY"),
  },
  {
    n: "06",
    title: "A Photo Collage That Grows With the Semester",
    paras: [
      "Photo collage walls cycle back into style every single year for a reason &mdash; they're personal, cheap, and never really finished, which is part of the appeal.",
      "Pick a loose color scheme (warm neutrals, cool tones, a consistent film filter) so the wall reads as one piece rather than a scattered pile of prints. Double-sided removable tape makes rearranging painless whenever you add new photos.",
      "Mix in a few quote prints or magazine clippings for variety, and don't worry about it ever being \"done.\" A collage that keeps growing is kind of the whole point.",
    ],
  },
  {
    n: "07",
    title: "A Mirror That Pulls Double Duty as Art",
    paras: [
      "Decorative mirrors are quietly one of the smartest moves for a small dorm room &mdash; they bounce light around and make the whole space read bigger.",
      "Pick an interesting shape &mdash; an arch, an irregular curve, a sunburst &mdash; and it stops being purely functional and starts counting as wall art too.",
      "A small round mirror above a desk creates an easy focal point. A larger one, like the arched version here, looks great simply propped against the wall. Either way, ringing it with lights turns it into the room's actual centerpiece.",
    ],
    photo: photo("mirrors.png", "Large arched mirror ringed with warm bulb lights leaning against a bedroom wall beside framed photos, a hanging plant and a woven basket of blankets", 574, 1024, "png"),
  },
  {
    n: "08",
    title: "A Neon Sign for Instant Personality",
    paras: [
      "Few things say \"this is a dorm room\" as fast as a neon sign, and that's exactly the appeal &mdash; it's bold, a little cheeky, and entirely a mood.",
      "A single word in a minimalist script does plenty of work on its own. A full custom phrase in your favorite font goes a step further if you want something more specific to you.",
      "The one rule: balance it against everything else in the room. If your gallery wall is already busy, let the neon sign be the one quiet exception. If your walls are otherwise simple, let it be the whole statement.",
    ],
    photo: photo("neon-sign.png", "Red neon sign reading DREAM glowing above a bed with white and mustard-toned pillows in a dimly lit bedroom", 574, 1024, "png"),
  },
  {
    n: "09",
    title: "One Statement Poster, Properly Sized",
    paras: [
      "A single oversized print is the low-effort cousin of the gallery wall &mdash; one strong piece can anchor an entire room without you hanging a dozen smaller ones.",
      "Band posters, movie prints, a framed album cover &mdash; whatever genuinely reflects your taste works better here than something generic. The wall shown here leans into exactly that: a cluster of posters that clearly belongs to one specific person's taste, not a showroom.",
      "Keep the surrounding wall fairly neutral so the piece actually pops, use removable poster strips, and don't be afraid to swap it out whenever your taste shifts.",
    ],
    photo: creditedPhoto("decals.jpg", "Bedroom doorway opening onto a wall covered in framed and printed band posters, paper lanterns and a small shelf of collectibles", 768, 1024, "Stella St. Clair", "https://unsplash.com/photos/7frDyOl1Rfg"),
  },
  {
    n: "10",
    title: "A Pegboard That Looks Good and Actually Works",
    paras: [
      "This is the one that gets filed under decor and organization at the same time. A pegboard holds everything from photos to keys to a tiny plant, and somehow looks styled while doing it.",
      "Think of it as a command center for your wall: clip notes, hang a small basket for odds and ends, display a postcard or two. It's function and personality sharing one spot, which is exactly what a dorm wall needs to be doing.",
      "Go with black, white, or a warmer metal tone depending on your room's palette, and don't skip the fairy lights along the bottom edge &mdash; it's a small touch that makes the whole setup look finished.",
    ],
    photo: photo("pegboard.png", "White pegboard mounted above a desk holding a notepad, small hanging baskets with plants, keys and a clipboard, strung with fairy lights", 574, 1024, "png"),
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
<p>A dorm room starts out as a blank box with fluorescent lighting and a whole lot of beige, and it is genuinely wild how fast that can change with the right wall decor. You don't need a design degree or a big budget &mdash; just a handful of ideas that actually hold up to a full semester of use.</p>
<p>I've helped style more dorm rooms than I can count at this point, and the ones that work aren't necessarily the most expensive. They're the ones that feel specific to the person living there.</p>
<p>Here are ten approaches worth trying, from the five-minute fixes to the ones worth a little more planning.</p>
${creditedPhoto("hero.jpg", "Two black floating shelves styled with books, plants and small decor above a desk, with a pale blue electric guitar mounted on the wall nearby", 1600, 900, "Bradley Lembach", "https://unsplash.com/photos/76RsgeCiekY")}

<h2>Why Your Walls Deserve the Effort</h2>
<p>You spend a huge amount of time staring at these four walls &mdash; studying, scrolling, having late-night conversations about your major. There's no good reason they shouldn't look like you.</p>
<p>Good wall decor does three specific things: it sets the tone of the room (cozy, artsy, minimal, whatever you're going for), it affects your actual mood through color and texture, and it shows off your personality even when your half of the room is five feet wide.</p>
<p>The dorm itself is temporary. How the room makes you feel while you're in it isn't.</p>
${creditedPhoto("intro.jpg", "Student sitting at a desk with a laptop and mug, backed by a large personal mood board wall with photos, a straw hat, a dreamcatcher and handwritten notes", 819, 1024, "Jovan Vasiljević", "https://unsplash.com/photos/PcoCm-F0K_o")}

<h2>Finding Your Direction Before You Buy Anything</h2>
<p>Before the shopping cart fills up with fairy lights and posters, it helps to actually name your style first. Cozy and boho leans into woven hangings and soft palettes. Clean and minimal wants abstract line art and monochrome frames. Bold and maximalist &mdash; closer to the sticker-covered wall below &mdash; wants mixed prints, color, and zero hesitation about covering every inch.</p>
<p>None of these are wrong. Knowing which one you're going for before you buy anything is what prevents the dreaded "my wall looks like a mood board that lost an argument with itself" situation.</p>
<p>Two practical rules no matter which direction you pick: use removable everything (command strips, lightweight hooks), and let a little of the decor be functional &mdash; a pegboard or cork strip above a desk looks just as good as it works.</p>
${creditedPhoto("how-to-choose.jpg", "Wall densely covered edge to edge with band stickers, patches and punk show flyers in a dorm room", 808, 1024, "Oleg Zarevennyi", "https://unsplash.com/photos/w21fxZv2sDo")}

<h2>Layer It, Don't Pile It On</h2>
<p>The difference between "aesthetic" and "chaotic" usually comes down to one thing: layering with intention instead of just adding more.</p>
<p>Start with one anchor piece &mdash; a tapestry, a large print, a neon sign &mdash; and build outward from there. A workable formula is three layers: one large focal item as your base, medium pieces like framed art or a small shelf in the middle, and small accents like fairy lights or mini prints on top.</p>
<p>And don't skip lighting. Warm string lights or a soft LED strip do roughly half the work of making a plain dorm wall feel considered rather than just filled in.</p>
${creditedPhoto("layer-not-clutter.jpg", "Minimalist bedroom corner with two small framed prints, a hanging air plant and a straw hat styled above a narrow shelf beside a bed", 768, 1024, "Sincerely Media", "https://unsplash.com/photos/ET1MWsGIAYI")}

<h2>10 Dorm Wall Decor Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>A Simple Formula If You Want One</h2>
<p>After styling enough of these rooms to have opinions about it, here's the three-step version that works almost every time. Pick a focal point first &mdash; one wall or one standout piece that anchors the room, and leave it uncluttered. Add texture and warm lighting next, since that's what gives a flat dorm wall actual depth. Then personalize the smaller gaps with photos, notes, or souvenirs &mdash; that's the layer that turns a room into your room.</p>
<p>Leave some breathing space throughout. You don't need to fill every inch for the styled parts to stand out &mdash; empty space is usually what makes them read as intentional in the first place.</p>

<h2>A Few Things Worth Avoiding</h2>
<ul>
  <li><strong>Covering every inch.</strong> A wall that's completely full stops reading as styled and starts reading as cluttered.</li>
  <li><strong>Skipping lighting entirely.</strong> Harsh overhead light undoes a surprising amount of otherwise good styling.</li>
  <li><strong>Mixing aesthetics that don't talk to each other.</strong> A boho tapestry and a neon sign can coexist, but it takes a plan, not an accident.</li>
  <li><strong>Leaving out anything personal.</strong> Trendy and soulless is still soulless. Add the one object that's actually yours.</li>
</ul>
<p>Plan your layout with painter's tape before you commit to anything permanent, mix horizontal and vertical elements for flow, and don't be afraid to rearrange mid-semester. A wall that evolves a little stays more interesting than one you finished in September and never touched again.</p>

<h2>Final Thoughts</h2>
<p>Dorm wall decor was never really just about how the room looks in photos. It's about building a space that feels like yours when you're living hundreds of miles from the place that used to hold that title.</p>
<p>Whatever direction you lean &mdash; cozy neutrals, bold neon, a wall that's somehow all three &mdash; the goal is the same: a room that makes you smile a little every time you walk in.</p>
<p>Pick one idea from this list and start there tonight. The rest of the room will catch up.</p>
`;

module.exports = { body };
