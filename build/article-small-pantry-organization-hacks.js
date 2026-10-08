// Body content for "15 Small Pantry Organization Hacks for a
// Clutter-Free Kitchen". Numbered idea-list format. Source only had
// photos for ideas 2, 3, 4 and 7 (vertical storage, door racks, lazy
// susans, zone baskets) plus the hero — every other idea was text-only
// in the source, so those stay photo-less here too, per the rule to
// never drop a source photo but also never invent ones that weren't
// there. No Pinterest pin links in the source, so no credit captions.
// Reordered from the source sequence and rewritten out of its very
// casual, first-person, emoji-heavy voice into the site's calmer tone,
// with short, punchy lines instead of dense paragraphs.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "small-pantry-organization-hacks", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function ideaBlock(idea) {
  const photoHtml = idea.photo ? idea.photo : "";
  return `<h2>${idea.n}. ${idea.title}</h2>
${idea.paras.map((p) => `<p>${p}</p>`).join("\n")}
${photoHtml}`;
}

const ideas = [
  {
    n: 1,
    title: "Ditch What You Don't Use First",
    paras: [
      "Decluttering isn't glamorous. It's still the single most effective pantry fix there is.",
      "Six types of vinegar? Probably not all needed.",
      "That jar of fig jam from who knows when? Be honest.",
      "Toss the expired stuff. Donate what's untouched but still good.",
      "Clear the space before adding a single new system to it.",
    ],
    photo: null,
  },
  {
    n: 2,
    title: "Go Vertical",
    paras: [
      "Floor space runs out fast in a small pantry. Height usually doesn't.",
      "Stackable shelves or tiered organizers make use of every inch up top.",
      "Wire risers keep canned goods visible instead of hidden in the back row.",
      "A tension rod or two works for hanging lighter items, like chip bags or cleaning cloths.",
      "Less-used items go on the highest shelf. A step stool handles the rest.",
    ],
    photo: photo("vertical-storage.png", "Tiered pantry shelving maximizing vertical storage space", 1024, 574),
  },
  {
    n: 3,
    title: "Put the Door to Work",
    paras: [
      "A pantry door is wasted space more often than not.",
      "An over-the-door rack turns it into real storage.",
      "Spices, small jars and sauces all fit well there.",
      "Snack bars and baking odds and ends too &mdash; food coloring, cupcake liners, that kind of thing.",
      "An adjustable rack fits taller bottles without any shelf-Jenga required.",
    ],
    photo: photo("door-racks.png", "Over-the-door pantry rack organizing spices and small jars", 1024, 574),
  },
  {
    n: 4,
    title: "Bring In a Lazy Susan",
    paras: [
      "A Lazy Susan isn't just for the dinner table.",
      "Corners are where pantry items tend to disappear. A turntable fixes that.",
      "Oils, vinegars and other bottles work well on one.",
      "Same for nut butters, spreads, and small snack containers.",
      "A full spin means nothing gets knocked over just to reach the back.",
    ],
    photo: photo("lazy-susans.png", "Lazy Susan turntable organizing bottles in a pantry corner", 1024, 574),
  },
  {
    n: 5,
    title: "Label Everything",
    paras: [
      "Labeling every shelf and bin sounds excessive, until it's tried.",
      "People actually put things back where they belong once a label tells them where that is.",
      "It also makes it obvious when something's running low.",
      "A label maker is the easiest way to do it. Masking tape and a marker work just as well.",
    ],
    photo: null,
  },
  {
    n: 6,
    title: "Switch to Uniform Containers",
    paras: [
      "Mismatched pasta bags, cereal boxes and flour sacks pile up into visual chaos fast.",
      "Uniform, clear airtight containers fix that instantly.",
      "They stack, which frees up real space.",
      "They keep dry goods fresher than their original bags ever did.",
      "Flour, sugar, rice, pasta, cereal and snacks all work well in them.",
    ],
    photo: null,
  },
  {
    n: 7,
    title: "Zone It With Baskets",
    paras: [
      "Grouping items into zones changes how a pantry functions.",
      "Think \"breakfast,\" \"baking,\" and \"snacks\" as separate areas.",
      "Baskets keep each zone contained and easy to scan.",
      "They also hide less attractive packaging &mdash; ramen included.",
      "Woven, wire or plastic all work. The zoning matters more than the material.",
    ],
    photo: photo("zone-baskets.png", "Woven baskets zoning a pantry into breakfast, baking and snack sections", 1024, 574),
  },
  {
    n: 8,
    title: "Adjust the Shelves",
    paras: [
      "Factory shelf spacing rarely matches what actually needs to fit.",
      "Twenty minutes of adjusting pays off fast.",
      "Taller items stop needing to lie sideways.",
      "Clear zones open up for big items versus small ones.",
      "It's the easiest way to add real space without any construction.",
    ],
    photo: null,
  },
  {
    n: 9,
    title: "Add Hooks Under the Shelves",
    paras: [
      "Shelf space is precious. The space underneath it usually isn't being used at all.",
      "Adhesive or mounted cup hooks fill that gap.",
      "Measuring cups and oven mitts hang well there.",
      "Reusable grocery bags too, along with small produce baskets.",
      "It's a small change that frees up real shelf room.",
    ],
    photo: null,
  },
  {
    n: 10,
    title: "Get a Slim Rolling Cart",
    paras: [
      "A tiny or nonexistent pantry doesn't rule out real storage.",
      "A slim rolling cart slides next to a fridge or into a narrow gap between cabinets.",
      "Spices, oils, coffee supplies and baking tools all fit well on one.",
      "It rolls out of sight easily too, for anyone who wants the option.",
    ],
    photo: null,
  },
  {
    n: 11,
    title: "Repurpose Magazine Holders",
    paras: [
      "Magazine file holders aren't just for magazines.",
      "Standing them upright on a shelf keeps foil, parchment and zip bags from sliding into a mess.",
      "Food wrap boxes fit the same way.",
      "No more half-squashed rolls disappearing into the back of a shelf.",
    ],
    photo: null,
  },
  {
    n: 12,
    title: "Corral the Loose Packets",
    paras: [
      "Gravy mixes, taco seasoning, oatmeal packets &mdash; they scatter like confetti.",
      "A small bin or drawer insert groups them in one spot.",
      "A repurposed pouch works just as well.",
      "A clear hanging file folder is another easy option.",
      "Keeping them together means that one chili seasoning packet actually gets found again.",
    ],
    photo: null,
  },
  {
    n: 13,
    title: "Use Tension Rods as Dividers",
    paras: [
      "Baking sheets and cutting boards tend to slide flat and stack messily.",
      "A few tension rods placed vertically create instant upright dividers.",
      "Muffin pans and cookie sheets both stay put this way.",
      "Trays and cutting boards too &mdash; standing upright instead of stacked.",
    ],
    photo: null,
  },
  {
    n: 14,
    title: "Keep a Running Inventory",
    paras: [
      "A simple pantry checklist saves real time at grocery-planning moments.",
      "A mini whiteboard inside the door works well.",
      "A notepad and magnet does the same job with less setup.",
      "A shared digital list works too, for households splitting the shopping.",
      "Fewer duplicate bottles of soy sauce end up buried in the back.",
    ],
    photo: null,
  },
  {
    n: 15,
    title: "Build in Breathing Room",
    paras: [
      "A pantry packed edge to edge looks organized for about a week.",
      "Leaving a little open space on each shelf makes it realistic to maintain.",
      "New groceries have somewhere to land without a full reshuffle.",
      "A system that bends a little lasts longer than one that demands perfection.",
    ],
    photo: null,
  },
];

const body = `
<p>A small pantry has a way of turning into chaos fast.</p>
<p>Things vanish behind the spice jars. Random items pile up. There's always one expired can lurking in the back.</p>
<p>None of that takes a full renovation to fix.</p>
<p>A single cabinet or a narrow closet can still work hard with the right systems in place.</p>
${photo("hero.jpeg", "Modern pantry with pull-out shelving neatly organized with canned goods and jars", 1152, 768)}

${ideas.map(ideaBlock).join("\n\n")}

<h2>Final Thoughts</h2>
<p>A small pantry doesn't need a walk-in footprint to function well.</p>
<p>It just needs a few systems that actually match how the space gets used.</p>
<p>Start with decluttering, add one or two storage upgrades, and build from there.</p>
<p>The goal isn't a Pinterest-perfect shelf. It's a pantry that makes sense on a random Tuesday night.</p>
`;

module.exports = { body };
