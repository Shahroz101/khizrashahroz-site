// Body content for "10 Bathroom Storage Ideas That Actually Keep Clutter Under
// Control". Photos carried over from the source article (same bathroom, same
// subjects) and re-captioned/credited to match what's actually in each frame —
// two headings were renamed because their original photo showed a different
// fixture than the heading claimed (a wire shower caddy, not a built-in niche;
// a recessed wall niche, not a drawer). One source idea (Rolling Carts) and
// one source photo slot (Ladder Shelves, which duplicated the Mirrored
// Cabinets photo) run without a dedicated photo, same as the source.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-storage-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function creditedPhoto(src, alt, w, h, name, url) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-storage-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo by ${name} via <a href="${url}" target="_blank" rel="nofollow noopener">Unsplash</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "A Mirrored Cabinet That Hides the Clutter",
    paras: [
      "If I had to pick one upgrade that changes a bathroom the most, it's this one. Swap a flat mirror for a mirrored cabinet and you get the same reflection plus a spot to stash everything that was cluttering your counter.",
      "I'm a big fan of the kind with built-in lighting around the edge &mdash; it does double duty as a vanity light, so you're not relying on one overhead bulb to get ready in the morning.",
      "Keep the inside loosely zoned: medicine on one shelf, skincare on another, and the stuff you grab daily at eye level so you're not digging every time.",
    ],
    photo: photo("mirrored-cabinet.jpg", "Backlit mirrored medicine cabinet above a dark wood vanity next to a black ladder towel rack holding a white towel and a striped towel", 1024, 683),
  },
  {
    n: "02",
    title: "A Rolling Cart for the Stuff You Reach for Daily",
    paras: [
      "Rolling carts get all the kitchen attention, but a slim three-tier one slots perfectly between a tub and a toilet, or right beside the vanity.",
      "I like using mine for spare towels on the bottom, bath products in the middle, and a candle or small plant up top so it still looks styled instead of purely functional.",
      "Look for one with locking wheels. There's nothing graceful about chasing your toiletries across the tile because the cart drifted.",
    ],
  },
  {
    n: "03",
    title: "Floating Shelves That Don't Compete With the Room",
    paras: [
      "Floating shelves are the easiest way to add storage without adding visual weight &mdash; there's no bulky cabinet, just a clean line on the wall.",
      "Mount a pair above the tub or beside the sink and use them for rolled towels and anything with a nice bottle, since open shelving puts everything on display.",
      "A little color is welcome here. A row of products in different hues actually reads as styling rather than clutter once it's up on a shelf instead of crowding the counter.",
    ],
    photo: creditedPhoto("floating-shelves.jpg", "White floating shelves holding folded towels and colorful bottles mounted above a round white soaking tub", 1024, 683, "Laura Lauch", "https://unsplash.com/photos/zU72nHryswY"),
  },
  {
    n: "04",
    title: "A Ladder Shelf You Can Move on a Whim",
    paras: [
      "A leaning ladder shelf gives you storage without a single screw in the wall, which makes it the easiest idea on this list to try and undo if it's not working.",
      "I like wood ones for the warmth they bring against plain tile. Use the rungs for hand towels and the shelves for baskets or folded washcloths.",
      "Because nothing's mounted, you can shift it two feet to the left the next time you rearrange, or move it to a totally different room when the mood strikes.",
    ],
  },
  {
    n: "05",
    title: "Baskets That Make the Clutter Look Intentional",
    paras: [
      "Baskets are the fastest fix on this list. Group loose bottles and tubes into one woven basket and the whole counter suddenly reads as styled instead of scattered.",
      "I like a basket with a lid or flap for anything you'd rather not have on display, and an open one for the pretty bottles you don't mind showing off.",
      "A small stem of flowers or greenery tucked beside the basket keeps the whole grouping from feeling purely functional &mdash; it starts to look like a vignette instead of a to-do list.",
    ],
    photo: creditedPhoto("baskets-bins.jpg", "Woven seagrass basket filled with travel-size toiletries on a bathroom counter beside a bouquet of white tulips", 721, 1024, "Olimpia Campean", "https://unsplash.com/photos/bdJDHlC3FGs"),
  },
  {
    n: "06",
    title: "A Caddy That Keeps the Shower Edited",
    paras: [
      "Shower clutter is its own category of chaos &mdash; five half-empty bottles balanced on a ledge, none of them staying put. A proper hanging caddy solves it in one step.",
      "I prefer a slim wire one that hooks over the shower arm or mounts beside the grab bar, since it keeps everything off the shower floor and easy to wipe around.",
      "Edit down to what you actually use. A caddy with eight bottles crammed in isn't storage, it's just clutter that got relocated.",
    ],
    photo: creditedPhoto("built-in-niches.jpg", "Stainless wire shower caddy mounted on a white tiled shower wall beside a chrome grab bar and handheld shower head", 683, 1024, "Alex Tyson", "https://unsplash.com/photos/l3FAD07sxLo"),
  },
  {
    n: "07",
    title: "Shelving That Turns a Blank Wall Into Storage",
    paras: [
      "Every bathroom has one wall that's just &hellip; there. Above the toilet, beside the tub, next to the shower door &mdash; it's prime storage real estate most people never use.",
      "A pair of black floating shelves instantly puts that wall to work. I like keeping the bottom shelf purely functional (rolled towels, extra tissue) and letting the top shelf carry a plant or a small framed print so it doesn't feel purely utilitarian.",
      "Two shelves is usually the sweet spot. Stack a third in and the whole thing starts to feel heavy on a wall that's supposed to stay secondary.",
    ],
    photo: photo("over-toilet.jpg", "Black floating shelves above a tub holding rolled white towels, a small potted plant and a framed art print", 768, 1024),
  },
  {
    n: "08",
    title: "A Built-In Wall Niche for the Everyday Essentials",
    paras: [
      "If you're ever mid-renovation, this is the idea worth requesting. A recessed niche built into the wall gives you real shelf depth without a single inch of floor space lost.",
      "I like leaving one shelf for towels and the lowest one for whatever you reach for first thing in the morning &mdash; it keeps the niche from turning into a junk drawer with a door.",
      "Because it sits flush with the wall, there's no cabinet door swinging into your elbow and no corner catching dust. It just quietly does its job.",
    ],
    photo: photo("drawer-organizers.jpg", "Open white recessed wall niche with three shelves holding a folded gray towel and two pink soap bottles in a gray-tiled bathroom", 683, 1024),
  },
  {
    n: "09",
    title: "A Wall Hook (or Three) Where You'd Least Expect It",
    paras: [
      "Hooks are the most underrated storage idea in this whole list, mostly because they feel too simple to count. They absolutely count.",
      "A single hook by the shower catches the towel you actually use that day, instead of it ending up balled up on the floor. Add a second for a robe and you've solved the morning scramble entirely.",
      "No drilling required if you go the adhesive route, which makes this the easiest idea here to try in a rental before committing to anything more permanent.",
    ],
    photo: photo("door-hooks.jpg", "Wall-mounted hook holding a dark towel beside a freestanding chrome towel warmer and a glass-walled shower stall", 1024, 683),
  },
  {
    n: "10",
    title: "A Vanity Cabinet That Actually Stays Organized",
    paras: [
      "The cabinet under your sink has the most potential and, let's be honest, the worst track record. Things go in and you never see them again.",
      "The fix is structure, not more stuff. Stackable bins or a tiered rack split the space into zones &mdash; cleaning supplies on one level, backstock on another &mdash; so you're not kneeling and digging every time you need something.",
      "Once it's sorted, a closed cabinet door is actually a feature. Everything stays exactly where you put it, and the vanity top stays clear because there's finally somewhere for the overflow to go.",
    ],
    photo: photo("under-sink.jpg", "White bathroom vanity with closed cabinet doors and a mirror beside a toilet and a blue seashell-print shower curtain", 1024, 683),
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
<p>The bathroom is never quite big enough, is it? Doesn't matter if you've got a primary suite or a half bath the size of a closet &mdash; somehow the towels, the half-used bottles, and every skincare step you've ever tried all end up fighting for the same six inches of counter.</p>
<p>I've spent years rearranging bathrooms for clients and for myself, and the thing I keep coming back to is this: a tidy bathroom isn't really about owning less. It's about giving everything you own an actual place to live. Once that clicks, even a tiny bathroom starts to feel calm instead of chaotic.</p>
<p>So here are ten ways to get there &mdash; some take an afternoon, a couple take a renovation, and all of them are worth trying before you assume you simply need more square footage.</p>
${photo("hero.jpg", "Black ladder towel rack and backlit mirrored medicine cabinet above a dark wood vanity in a small tiled bathroom", 1600, 1067)}

<h2>Why Bathroom Storage Is About More Than Finding Space</h2>
<p>Here's the thing nobody tells you: two bathrooms can be the exact same size and feel completely different, purely based on how the storage is used. It's never really about square footage.</p>
<p>Good storage does three things at once. It clears your counters, it gets you dressed faster because you're not hunting for anything, and it makes the whole room feel more like a place you'd actually want to spend time in.</p>
<p>The goal was never to own fewer products. It's to store the ones you have on purpose instead of by accident &mdash; and that distinction changes everything about how a small bathroom reads.</p>
${photo("why-it-matters.jpg", "Antique gold-framed mirror above a pedestal sink with a linen hand towel, a trailing plant and a canvas shower curtain in a white tiled bathroom", 683, 1024)}

<h2>A Few Habits Worth Breaking First</h2>
<p>Before the fun list, a quick gut check, because I've made every one of these mistakes myself.</p>
<ul>
  <li><strong>Letting the counter become the default storage spot.</strong> If it's not actively in use, it shouldn't be camped out on the counter.</li>
  <li><strong>Ignoring the walls.</strong> Vertical space is free real estate and most bathrooms use almost none of it.</li>
  <li><strong>Storing everything at eye level.</strong> Bulky items you rarely touch belong up high or tucked away, not front and center.</li>
  <li><strong>Mismatched containers everywhere.</strong> Function matters, but so does the room not looking like a dollar-store aisle.</li>
</ul>
<p>Fix these four and your existing setup will already look more intentional &mdash; before you've bought a single new thing.</p>

<h2>How to Plan It Like You're Starting From Scratch</h2>
<p>Whenever I walk into a new bathroom project, I don't reach for baskets first. I map the space.</p>
<ol>
  <li><strong>Sort by frequency.</strong> What do you use every single day versus once a month?</li>
  <li><strong>Find the dead zones.</strong> Corners, the space above the toilet, the back of the door &mdash; most bathrooms waste at least one of these.</li>
  <li><strong>Choose pieces that pull double duty.</strong> A mirror that's also a cabinet beats two separate purchases every time.</li>
  <li><strong>Don't sacrifice style for function.</strong> The two aren't actually in competition &mdash; you just have to shop like it.</li>
</ol>
<p>Do this part first and you'll stop buying "cute" bins that turn out to be the wrong size for your actual space.</p>
${photo("plan-like-designer.jpg", "Walk-in shower behind a frosted glass panel next to a round wood-framed mirror shelf in a small white-tiled bathroom with patterned teal floor tile", 1024, 683)}

<h2>10 Bathroom Storage Ideas Worth Trying</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Storage Can Double as Decor</h2>
<p>Here's a mindset shift that changed how I shop for bathroom storage entirely: the containers themselves are decor, not just a way to hide mess.</p>
<p>Matching bottles, labeled jars, and a consistent color story make a bathroom look finished even when nothing about the layout has changed. A few open shelves, styled well, can carry the whole room.</p>
<p>Stick to a tight palette &mdash; white, wood tones, and one neutral accent color goes a long way toward that calm, spa-like feeling everyone's after.</p>
${creditedPhoto("baskets-bins.jpg", "Woven seagrass basket filled with travel-size toiletries on a bathroom counter beside a bouquet of white tulips", 721, 1024, "Olimpia Campean", "https://unsplash.com/photos/bdJDHlC3FGs")}

<h2>Keeping It Organized Once the Hard Part's Done</h2>
<p>Setting up the system is the easy half. Staying organized is the part that actually takes effort, because clutter always finds its way back in.</p>
<ul>
  <li><strong>A five-minute reset each week.</strong> Put stray items back where they belong before they pile up.</li>
  <li><strong>A real declutter once a month.</strong> Toss anything expired or anything you haven't touched since the last round.</li>
  <li><strong>Stay loyal to your system.</strong> Every random bin you add "just this once" is a crack the clutter will find.</li>
</ul>
<p>Organization isn't a weekend project you finish. It's closer to a habit you keep up &mdash; and once it sticks, that calm feeling carries into the rest of your morning.</p>

<h2>Final Thoughts</h2>
<p>The best bathroom storage ideas aren't the most expensive ones. They're the ones that actually match how you use the room, whether that's three products total or a shelf's worth of skincare you're not ready to part with.</p>
<p>Start with one idea from this list &mdash; a basket here, a floating shelf there &mdash; and build from there instead of trying to overhaul the whole room in a weekend.</p>
<p>Give it a few weeks, and don't be surprised if the bathroom quietly becomes your favorite room to get ready in.</p>
${photo("why-it-matters.jpg", "Antique gold-framed mirror above a pedestal sink with a linen hand towel, a trailing plant and a canvas shower curtain in a white tiled bathroom", 683, 1024)}
`;

module.exports = { body };
