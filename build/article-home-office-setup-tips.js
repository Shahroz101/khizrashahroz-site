// Body content for "10 Tips for a Home Office Setup That Actually Works".
// Photos carried over from the source article. The source's hero image had
// its own article title baked into the screen on the desk ("Essential Tips
// for a Perfect Home Office Setup"), which doesn't match this rewrite's
// title, so a different (text-free) photo from the set is used as the
// hero/closing bookend instead. That freed-up photo's original idea
// ("Create a Routine") runs without a dedicated photo instead.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0C5MCZ7DY", title: "Ideus 16 Oz Insulated Coffee Mug with Lid and Handle, Dark Green", w: 1454, h: 1209 },
    { asin: "B0DG357BFP", title: "Hydro Flask 12 Oz Insulated Stainless Steel Coffee Mug, Non-Spill", w: 1100, h: 839 },
  ],
  idea1: [
    { asin: "B0DSPGMJKN", title: "Pamray 32 Inch Small Computer Desk with 2 Drawers, Black", w: 1459, h: 1500 },
    { asin: "B0F43WDGQV", title: "Huuger Folding Desk with Storage Shelf, 31.5 Inch Foldable Computer Table", w: 1500, h: 1491 },
  ],
  idea2: [
    { asin: "B07Z44KBR7", title: "Staples Dexley Ergonomic Mesh Task Chair with Lumbar Support, Black", w: 1233, h: 1500 },
    { asin: "B074C9F45S", title: "Lumbar Support Pillow for Office Chair, Memory Foam Back Support", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0C7BKZ883", title: "Adjustable Metal Laptop Stand for Desk, Laptop Riser", w: 1307, h: 1500 },
    { asin: "B0B9NNWXVP", title: "MNN 15.6 Inch FHD Portable Monitor, USB-C and HDMI, IPS HDR", w: 1500, h: 1148 },
  ],
  idea4: [
    { asin: "B0868HY623", title: "White Crown LED Desk Lamp, Dimmable, with USB Charging Port, 5 Lighting Modes", w: 1215, h: 1500 },
    { asin: "B08SK4DMHR", title: "BOHON LED Desk Lamp with USB Charging Port, 3 Color Modes, Dimmable, Black", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0FCMCNS7D", title: "Wood Desk Organizer with File Holder and Catalog Racks", w: 1500, h: 1425 },
    { asin: "B0C7TNXZQS", title: "XHF Clear Adhesive Cable Wire Clips, 60 Pcs, 5/8 Inch, Cord Holder", w: 1500, h: 1366 },
  ],
  idea6: [
    { asin: "B0DKVDZXSN", title: "Deco X7 Dual-Band BE5000 WiFi 7 Mesh System, 4-Stream, 5 Gbps", w: 1313, h: 1050 },
    { asin: "B0C3HCD34R", title: "Soundcore by Anker Q20i Hybrid Active Noise Cancelling Headphones, Black", w: 1081, h: 1500 },
  ],
  idea7: [
    { asin: "B0DFH63QDM", title: "SUNALLY Room Divider Curtain Rod, No-Drill, Adjustable 4 to 10 Ft", w: 1500, h: 1500 },
    { asin: "B0DP4RW2LZ", title: "8 x 10 Washable Area Rug for Living Room and Bedroom, Blue Grey", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0D7JG4VLD", title: "Rotating Productivity Timer, 5/25/10/50 Minutes, Desk Flip Timer", w: 1497, h: 1500 },
    { asin: "B0CK2PPLTJ", title: "Taja Undated Weekly Planner, To Do List Notebook with Habit Tracker, A5", w: 1303, h: 1500 },
  ],
  idea9: [
    { asin: "B0CWH8VZMD", title: "Motivational Wall Decor, 3 Piece Success Canvas Prints for Office", w: 1500, h: 949 },
    { asin: "B0DJTH6ZXC", title: "L'AGRATY Chunky Knit Throw Blanket for Couch, 60 x 80 Inch, Ivory", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B08B2L36HF", title: "VIVO 32 Inch Standing Desk Riser, Height Adjustable Workstation", w: 1500, h: 1288 },
    { asin: "B0BZYCJK89", title: "Owala FreeSip Stainless Steel Water Bottle, 24 Oz, Denim", w: 444, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "home-office-setup-tips-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
        <p class="product-title">${item.title}</p>
        <a class="shop-cta shop-cta-sm" href="${amazonLink(item.asin)}" target="_blank" rel="nofollow sponsored noopener">Shop on Amazon</a>
      </div>`
    )
    .join("\n      ");
  return `<div class="product-grid">
      ${cards}
    </div>`;
}

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h, productsKey) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "home-office-setup-tips", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const ideas = [
  {
    n: "01",
    productsKey: "idea1",
    title: "Claim a Spot, Even If It's Just a Corner",
    paras: [
      "You don't need a dedicated room with a door that closes. You need one consistent spot your brain learns to associate with work.",
      "That association is doing more than you'd think &mdash; sit in the same place every day and your brain starts switching into work mode almost automatically, before you've even opened your laptop.",
      "If you can swing it, pick a spot near natural light. It helps with focus and energy, and it's a nice bonus that you'll stop looking washed out on every video call.",
    ],
    photo: photo("choose-space.png", "Small wood desk positioned by a bright window with a cozy knit sweater draped on the chair, a fiddle leaf fig and a framed Focus and Flourish print", 574, 1024, "idea1"),
  },
  {
    n: "02",
    productsKey: "idea2",
    title: "Don't Cheap Out on the Chair",
    paras: [
      "That dining chair you've been using five days a week is not your friend, no matter how it's held up so far.",
      "Look for adjustable height, real lumbar support, breathable material, and a design that actually supports how your body sits rather than fighting it.",
      "I put off buying a proper ergonomic chair for way too long. The difference the first week was honestly a little dramatic &mdash; turns out my spine had opinions it just never got to voice before.",
    ],
    photo: photo("comfortable-chair.png", "Black ergonomic mesh office chair in front of a white desk with a laptop and bookshelf in a warmly lit home office", 574, 1024, "idea2"),
  },
  {
    n: "03",
    productsKey: "idea3",
    title: "Get Your Screen to Eye Level",
    paras: [
      "Hours of looking down at a laptop screen adds up fast, and your neck will absolutely let you know about it.",
      "A laptop stand fixes this instantly, and a stack of sturdy books works in a pinch if that's what you've got on hand &mdash; no shame in it, most of us have been there.",
      "An external monitor solves it even better, with the added bonus of just giving you more screen to work with. Either way, eye-level screen means no more hunching, which means fewer aches by the end of the day.",
    ],
    photo: photo("screen-eye-level.png", "Laptop raised on a wood stand on a desk beside a coffee mug, notebook and external keyboard near a window", 574, 1024, "idea3"),
  },
  {
    n: "04",
    productsKey: "idea4",
    title: "Get the Lighting Right",
    paras: [
      "Lighting affects a lot more than how you look on a call &mdash; it genuinely shapes your focus and energy through the day.",
      "Natural light from the side works best; avoid anything directly behind your screen, since that just turns you into a silhouette. A soft desk lamp covers the darker hours, and skip anything overhead that feels more like an interrogation room than a workspace.",
      "Warm white light is the move if you're choosing bulbs. It stays cozy without making you feel like you're about to fall asleep at your desk.",
    ],
    photo: photo("lighting.png", "Woman working on a laptop lit by a warm desk lamp at dusk in front of a tall bookshelf with a plant", 574, 1024, "idea4"),
  },
  {
    n: "05",
    productsKey: "idea5",
    title: "Keep the Desk Actually Clear",
    paras: [
      "Desk clutter has a way of multiplying overnight, and a messy desk genuinely does translate into a messier, more scattered headspace.",
      "Drawer organizers or a simple desk tray handle the small stuff. A narrow shelf nearby takes the overflow off the surface entirely, and cable clips are a five-minute fix for the tangle living behind your monitor.",
      "You can absolutely still keep a plant on the desk. Just maybe don't let it become a second job.",
    ],
    photo: photo("clutter-free-desk.png", "Minimalist desk with a laptop on a stand, tidied cables, a small succulent and an open notebook near a sunny window", 574, 1024, "idea5"),
  },
  {
    n: "06",
    productsKey: "idea6",
    title: "Invest in Tech That Actually Works",
    paras: [
      "Nothing kills momentum faster than glitchy tech. If your Wi-Fi drops every time someone else in the house opens a second tab, that's worth fixing before anything else on this list.",
      "A reliable router or mesh system solves the connection issues. Noise-canceling headphones are worth it the moment you have kids, roommates, or a street that's louder than you'd like. An external keyboard and mouse round it out &mdash; a laggy trackpad during a long work session is its own special kind of frustrating.",
      "None of this needs to be top-of-the-line. It just needs to actually work when you need it to.",
    ],
    photo: photo("quality-tech.png", "Desk with noise-canceling headphones, a small speaker and a monitor beside a wireless keyboard near a window", 574, 1024, "idea6"),
  },
  {
    n: "07",
    productsKey: "idea7",
    title: "Give Work Its Own Zone",
    paras: [
      "When the line between work and home gets blurry, you end up answering emails at 9 p.m. because your desk is three feet from your bed. Not a great pattern to fall into.",
      "A room divider, a shelf, even just a rug can mark where work starts and stops &mdash; something as small as a visual boundary does more psychologically than you'd expect.",
      "And when the day's done, actually close the laptop and step away. Your brain needs that clear signal that work mode is over, the same way it needed one to switch into it.",
    ],
    photo: photo("work-life-zones.png", "Tall wood bookshelf used as a room divider separating a living room sofa from a desk and office chair by a window", 574, 1024, "idea7"),
  },
  {
    n: "08",
    productsKey: "idea8",
    title: "Build a Routine That Actually Sticks",
    paras: [
      "A home office doesn't run on willpower alone. It runs on routine &mdash; the kind that removes the daily decision-making about when to start.",
      "Starting at roughly the same time each day, even on the days you'd rather not, does more for consistency than any productivity app. Real breaks matter too: get up, stretch, say hello to the dog, whatever actually pulls you away from the screen for a minute.",
      "An end-of-day ritual closes the loop. Shutting the laptop, tidying the desk, even just turning off the lamp &mdash; small cues like that tell your brain the workday is genuinely finished.",
    ],
  },
  {
    n: "09",
    productsKey: "idea9",
    title: "Let the Space Look Like You",
    paras: [
      "You don't need a full Pinterest-board transformation. But a space that reflects some actual personality is just more motivating to sit down in every morning.",
      "A few framed prints or photos go a long way. A cozy throw or a cushion you actually like softens the whole setup. A small vision board works too, if that's your thing.",
      "A desk that feels like yours is simply easier to spend hours at than one that feels borrowed from a stock photo.",
    ],
    photo: photo("personality.png", "Wood desk with a framed Chase Your Dreams quote print, a small succulent and shelves styled with photo frames and plants behind", 574, 1024, "idea9"),
  },
  {
    n: "10",
    productsKey: "idea10",
    title: "Don't Forget You Have a Body",
    paras: [
      "Working from home can quietly turn you into someone who hasn't moved in six hours and forgot lunch entirely. We've all had that day.",
      "A standing desk or a simple riser breaks up the sitting. Short walks between tasks reset your focus more than another cup of coffee ever will. Water matters more than it gets credit for, and a scheduled stretch break or two keeps your body from staging a protest by 3 p.m.",
      "Setting a timer to remind yourself to move isn't excessive, it's just practical. Your focus holds up a lot better when your body isn't fighting you.",
    ],
    photo: photo("health.png", "Woman stretching beside a standing desk with a countdown timer on the laptop screen, a rolled yoga mat and water bottle on the floor", 574, 1024, "idea10"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || (idea.productsKey ? productGrid(idea.productsKey) : "")}`;
}

const body = `
<p>Working from the kitchen table with a dog underfoot and a laptop balanced on a stack of cookbooks doesn't exactly scream productive. If you've ever muttered "I really need a better setup" somewhere between back-to-back calls, this one's for you.</p>
<p>I went through the whole evolution myself &mdash; propping a laptop on books for months before admitting my neck had opinions about it, slowly fixing one thing at a time until the space actually worked instead of just existing.</p>
<p>Here are ten genuinely useful changes, not the aspirational Pinterest version. Just the stuff that actually makes a home office function.</p>
${photo("routine.jpg", "Woman with a morning rituals mug reading a planner at a wood desk while a golden retriever rests on the chair beside her", 1312, 736, "hero")}

<h2>10 Tips for a Home Office Setup That Works</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>Final Thoughts</h2>
<p>Your home office doesn't need to look like it belongs in a design magazine to actually work for you. It needs a consistent spot, a chair that doesn't punish your back, decent lighting, and a few boundaries between "work" and "everything else."</p>
<p>Start with whichever one of these feels most overdue &mdash; the chair, the lighting, finally moving the desk away from the bed &mdash; and build from there. You don't need to fix all ten in one weekend.</p>
<p>Your home office, your rules. Just maybe not from the kitchen table anymore.</p>
`;

module.exports = { body };
