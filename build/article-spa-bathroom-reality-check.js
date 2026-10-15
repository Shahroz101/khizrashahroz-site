// Body content for "20 Spa Bathroom Features, Ranked by How Realistic
// They Actually Are". Numbered idea-list format. This source expands a
// single bullet point ("Spa-Like Serenity") from the already-published
// bathroom-design-styles article into a full 20-idea piece built
// around one concept, so this rewrite leans into practicality instead
// of pure aspiration — sorting each feature by how achievable it
// actually is for a typical home, not just presenting a hotel-spa
// photo gallery. Source photos are all AI-generated style with no
// Pinterest links, 1:1 with the 20 ideas, so none carry credit
// captions. Rewritten out of the source's casual, exclamation-heavy
// voice into the site's calmer tone, short-line prose.

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0CQ7LWKBD", title: "SKL Home CloudSoft 6 Piece Luxury Cotton Bath Towel Set, Oatmeal", w: 1500, h: 1362 },
    { asin: "B01C4IS4Q2", title: "ROYAL CRAFT WOOD Foldable Expandable Bamboo Bathtub Tray Caddy", w: 1500, h: 1488 },
  ],
  idea1: [
    { asin: "B08LBKXYWF", title: "Tens Towels 8 Piece Towel Set with 2 XL Bath Towels, Dark Grey", w: 1176, h: 1500 },
    { asin: "B00HWFG1SQ", title: "Marriott Terry Velour Bathrobe, Luxury 100% Cotton Hotel Spa Robe", w: 1111, h: 1454 },
  ],
  idea2: [
    { asin: "B0H41B9YRZ", title: "Waterless Essential Oil Diffuser, 3500 Sq Ft Coverage, App-Controlled, Quiet", w: 1184, h: 1084 },
    { asin: "B0F18RY1FR", title: "Essential Oils Set, Top 15 Scents for Diffuser and Aromatherapy", w: 1500, h: 1500 },
  ],
  idea3: [
    { asin: "B0DF82FQYD", title: "Freyalife 2 Pack Faux Hanging Plants, Eucalyptus and Greenery", w: 1262, h: 1500 },
    { asin: "B0FKBCWHKS", title: "Faux Eucalyptus Stems in Ceramic Vase for Bathroom Counter Decor", w: 843, h: 1316 },
  ],
  idea4: [
    { asin: "B0FRQKF3B1", title: "IZORRO 4-Light Dimmable Modern LED Bathroom Vanity Light, Matte Black", w: 1500, h: 1500 },
    { asin: "B0D9W1J9VG", title: "fclayvts 24 Pack Flameless LED Flickering Candles with Remote and Timer", w: 1477, h: 1395 },
  ],
  idea5: [
    { asin: "B08VHTFXP9", title: "LOAAO 22 x 30 Inch Black Metal Framed Bathroom Mirror", w: 1500, h: 1500 },
    { asin: "B09GJVS2K7", title: "HARRITPURE 20 x 30 Inch Black Arched Bathroom Wall Mirror", w: 1500, h: 1500 },
  ],
  idea6: [
    { asin: "B09SG9TZNS", title: "White Noise Sound Machine with 20 Soothing Sounds and Night Light", w: 1404, h: 1237 },
    { asin: "B0H8SC3S1T", title: "HP BTS07 Plus Waterproof Bluetooth Speaker, IPX7, Glacier Blue", w: 1500, h: 1365 },
  ],
  idea7: [
    { asin: "B0GFVL7NW9", title: "CERBIOR 6 Piece Bathroom Accessories Set, Beige", w: 1500, h: 1369 },
    { asin: "B0DNYM8C9G", title: "PADOOR Super Absorbent Rubber-Backed Chenille Bath Mat", w: 1500, h: 1500 },
  ],
  idea8: [
    { asin: "B0CD3NXLX9", title: "Natural Bamboo Slat Bench, 36 Inch, Small Wooden Bench", w: 1500, h: 1500 },
    { asin: "B0DXL3KRW6", title: "17 Inch Waterproof Teak Shower Stool and Foot Rest", w: 903, h: 1500 },
  ],
  idea9: [
    { asin: "B0F1FJLQ9Z", title: "GRUSIGN Modern Floor Bathroom Storage Cabinet with Door and 3 Drawers", w: 1110, h: 1403 },
    { asin: "B0CYZW6NZJ", title: "Kalrin 4-Tier Over-the-Toilet Bathroom Storage Rack", w: 1500, h: 1500 },
  ],
  idea10: [
    { asin: "B0DLB4T35M", title: "2-Tier Wooden Bathroom Counter Organizer with Drawer and Basket", w: 1456, h: 1500 },
    { asin: "B0FT2DJ4MC", title: "10 oz Ceramic Hand Soap Dispenser, Stone-Look, for Bathroom Countertops", w: 1362, h: 1500 },
  ],
  idea11: [
    { asin: "B0F7G5JRKM", title: "9 Piece Marble White Bathroom Accessories Set with Slim Trash Can", w: 1492, h: 1500 },
    { asin: "B0FSZZPD3L", title: "YKAJO Carrara White Gray Oval Marble Tray, 11.8 x 5.9 Inch", w: 1246, h: 1250 },
  ],
  idea12: [
    { asin: "B0GYLRX9ML", title: "Freestanding Wooden Soaking Bathtub for Adults, 51.1 Inch, Spa", w: 1238, h: 917 },
    { asin: "B0H5WRSD8B", title: "CHETTO C 66 Inch Natural Marble Freestanding Soaking Bathtub", w: 1500, h: 1500 },
  ],
  idea13: [
    { asin: "B0FD3GL388", title: "Black Rain Shower Head with Handheld Shower, 5 Spray Modes", w: 1500, h: 1282 },
    { asin: "B0CRX23RDW", title: "Delta Modern 14 Series Square Rainfall Shower System, Matte Black", w: 767, h: 1000 },
  ],
  idea14: [
    { asin: "B0FVSVB26L", title: "Utoplike Large Teak Wood Shower Bath Mat, 31.7 x 17.9 Inch", w: 1500, h: 531 },
    { asin: "B0C5CBKT4F", title: "Natural Marble Soap Dish and Sponge Holder with Draining Hole", w: 1461, h: 970 },
  ],
  idea15: [
    { asin: "B0DHH3Q3Z6", title: "Infrared Radiant Electric Heated Floor Mat with 60 Heat Settings", w: 1500, h: 1500 },
    { asin: "B0C9TC3GDX", title: "VEVOR Electric Radiant In-Floor Heating Mat, 20 Sq Ft, with Digital Thermostat", w: 1494, h: 872 },
  ],
  idea16: [
    { asin: "B0H9LSW3YB", title: "17 Inch Wall-Mounted Bathroom Vanity with Sink, Small Space Aluminum Cabinet", w: 1500, h: 1500 },
    { asin: "B0HBBDTK2V", title: "31.5 Inch Floating Fluted Vanity Desk with Drawers and Power Outlet", w: 1500, h: 1500 },
  ],
  idea17: [
    { asin: "B0FP5CB2CT", title: "Brushed Nickel Waterfall 3-Hole Widespread Bathroom Sink Faucet", w: 1500, h: 1021 },
    { asin: "B09DX9SD8B", title: "Ryuwanku Brushed Nickel Single-Handle Waterfall Bathroom Faucet", w: 1429, h: 1500 },
  ],
  idea18: [
    { asin: "B0F1TMW66F", title: "22 Inch Premium Teak Shower Bench with Shelf and Handles, Natural", w: 1179, h: 1138 },
    { asin: "B0D8PNDVBX", title: "IBosins 14 Inch Corner Shower Stool with Storage Shelf, Natural Finish", w: 1500, h: 1500 },
  ],
  idea19: [
    { asin: "B0FLYLPZ24", title: "Japanese Round Cedar Soaking Tub for Adults, 23.6 x 27.6 Inch", w: 1073, h: 1077 },
    { asin: "B0HFZYSY52", title: "35.4 Inch Japanese Hinoki Wood Soaking Tub, Compact Home Spa", w: 1193, h: 1118 },
  ],
  idea20: [
    { asin: "B0CFX85KJV", title: "VEVOR 12 kW Steam Shower Generator with Temperature Control and 24 Hour Timer", w: 1500, h: 1480 },
    { asin: "B0CLHHV27D", title: "Delta Faucet SimpleSteam 10kW Steam System Kit, Matte Black", w: 1029, h: 816 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "spa-bathroom-reality-check-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "spa-bathroom-reality-check", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>Most spa bathroom galleries show the finished hotel version and leave out what it actually takes to get there.</p>
<p>Some of these 20 features cost twenty dollars and an afternoon. Others mean opening up a wall.</p>
<p>Knowing which is which before falling in love with a photo saves real disappointment later.</p>
<p>Here they are, sorted by how achievable they actually are for a typical home.</p>
${photo("hero.png", "Serene and opulent spa-like bathroom with soft lighting", 683, 1024, "hero")}

<h2>Easy to Add This Weekend</h2>
<p>These cost little and need no renovation at all.</p>

<h2>1. Luxurious Towels and Robes</h2>
<p>Swapping thin towels for thick, matching ones is the fastest, cheapest way to make a bathroom feel like a hotel.</p>
<p>A robe on a hook adds the same effect for very little extra cost.</p>
<p>This requires zero installation and can be done the day it arrives.</p>
<p>It's consistently the highest-impact, lowest-effort change on this entire list.</p>
${photo("towels-robes.png", "Five-star hotel spa bathroom with luxurious thick towels", 683, 1024, "idea1")}

<h2>2. Aromatherapy and Essential Oils</h2>
<p>A diffuser or a few scented candles change how a bathroom feels within minutes.</p>
<p>Lavender and eucalyptus both read as classic spa scents without being overpowering.</p>
<p>This is one of the cheapest items on the whole list and needs no installation whatsoever.</p>
<p>Scent does more for atmosphere than most people give it credit for.</p>
${photo("aromatherapy.png", "Serene and calming bathroom scene with aromatherapy diffuser", 683, 1024, "idea2")}

<h2>3. Indoor Plants</h2>
<p>A few humidity-tolerant plants bring life into a bathroom for very little money.</p>
<p>This requires no tools and takes minutes to set up.</p>
<p>It's one of the easiest ways to soften a bathroom that otherwise feels clinical.</p>
<p>Low-maintenance varieties handle a bathroom's humidity swings without much fuss.</p>
${photo("indoor-plants.png", "Serene and luxurious spa-inspired bathroom with indoor plants", 683, 1024, "idea3")}

<h2>4. Soft, Ambient Lighting</h2>
<p>Swapping a harsh overhead bulb for a warmer one, or adding a plug-in lamp, changes the whole mood instantly.</p>
<p>A dimmer switch is a bit more involved but still a relatively quick electrical job.</p>
<p>This is one of the cheapest upgrades with the most noticeable payoff.</p>
<p>Warm light flatters both the room and whoever's using it.</p>
${photo("ambient-lighting.png", "Luxurious spa bathroom bathed in warm ambient lighting", 683, 1024, "idea4")}

<h2>5. Decorative Mirrors</h2>
<p>A mirror with real presence &mdash; an interesting frame, an oversized scale &mdash; bounces light and adds style at once.</p>
<p>Most standard mirror sizes swap in without any real installation hassle.</p>
<p>This is a straightforward upgrade that pairs well with almost any other change on this list.</p>
<p>A good mirror does double duty as both function and decor.</p>
${photo("decorative-mirrors.png", "Luxurious and elegant bathroom featuring a decorative statement mirror", 683, 1024, "idea5")}

<h2>6. Soundscapes</h2>
<p>A small waterproof speaker playing rain sounds or quiet music adds an entirely new sensory layer.</p>
<p>This costs very little and needs no permanent installation.</p>
<p>It's an easy way to make a daily routine feel more like an actual ritual.</p>
<p>One of the more overlooked additions on this list, given how little it costs.</p>
${photo("soundscapes.png", "Serene luxurious spa-inspired bathroom with calming soundscapes", 683, 1024, "idea6")}

<h2>7. A Soft, Neutral Palette</h2>
<p>Swapping out colorful towels, bath mats and small accessories for a calm neutral palette changes the room's whole mood.</p>
<p>This can be done gradually, item by item, without a big upfront cost.</p>
<p>It's less about any single purchase and more about consistency across everything visible.</p>
<p>A calm palette is the backdrop most of the other ideas on this list actually need to work.</p>
${photo("neutral-palette.png", "Harmonious and calming bathroom design with a soft neutral palette", 683, 1024, "idea7")}

<h2>Worth Doing With a Bit of Planning</h2>
<p>These take more than a weekend, and usually a small budget, but they don't require ripping out walls.</p>

<h2>8. A Relaxing Seating Area</h2>
<p>A small bench or chair in a larger bathroom adds a spot to actually slow down.</p>
<p>This needs the floor space to spare, which isn't realistic in every layout.</p>
<p>It's more of a furniture purchase than a renovation, so cost stays relatively contained.</p>
<p>This suits a primary bathroom more than a shared or powder room setup.</p>
${photo("seating-area.png", "Warm and inviting cozy bathroom with a relaxing seating area", 683, 1024, "idea8")}

<h2>9. Stylish, Functional Storage</h2>
<p>Swapping cluttered open storage for a closed cabinet or styled baskets takes real planning but not necessarily construction.</p>
<p>This is more about editing and reorganizing than buying something entirely new.</p>
<p>A clutter-free surface does as much for the "spa" feeling as any single purchase.</p>
<p>Worth tackling before adding any of the more decorative items on this list.</p>
${photo("functional-storage.png", "Stylish and minimalist bathroom design with functional storage", 683, 1024, "idea9")}

<h2>10. A Minimalist, Clutter-Free Reset</h2>
<p>This is often more about removing than adding.</p>
<p>Editing down to what's actually used daily, and finding closed storage for the rest, costs very little.</p>
<p>It's one of the few changes on this list that can genuinely be free.</p>
<p>A calm, uncluttered room is the foundation everything else on this list builds on.</p>
${photo("minimalist-design.png", "Captivating modern minimalist bathroom design with clutter-free spaces", 683, 1024, "idea10")}

<h2>11. Elegant Marble Accents</h2>
<p>A marble tray, a small marble shelf, or marble-topped accessories add a sense of luxury without full marble tiling.</p>
<p>This is a far smaller investment than marble countertops or flooring.</p>
<p>It's a reasonable middle ground for anyone who wants the material without the renovation.</p>
<p>A little marble goes a surprisingly long way visually.</p>
${photo("marble-accents.png", "Exquisite luxurious bathroom featuring elegant marble accents", 683, 1024, "idea11")}

<h2>Worth Saving Up For</h2>
<p>These need a contractor, real plumbing or electrical work, and a genuine budget &mdash; but they're also the features that change how the bathroom functions, not just how it looks.</p>

<h2>12. A Freestanding Soaking Tub</h2>
<p>A freestanding tub is one of the clearest visual signals of a spa-style bathroom.</p>
<p>It needs real plumbing planning and floor space most smaller bathrooms don't have.</p>
<p>This is a genuine investment, both financially and in the renovation itself.</p>
<p>Worth it for anyone who actually soaks regularly, less so for anyone who mainly showers.</p>
${photo("freestanding-tub.png", "Serene and opulent bathroom setting with a freestanding soaking tub", 683, 1024, "idea12")}

<h2>13. A Rainfall Showerhead</h2>
<p>A rainfall showerhead changes the entire daily shower experience, not just the room's look.</p>
<p>Installation ranges from a simple swap to a bigger plumbing job depending on the existing setup.</p>
<p>This is one of the more affordable splurges on this list relative to its daily impact.</p>
<p>A genuinely functional upgrade, not just a styling one.</p>
${photo("rainfall-showerhead.png", "Luxurious contemporary bathroom with a rainfall showerhead", 683, 1024, "idea13")}

<h2>14. Natural Stone and Wood Elements</h2>
<p>Incorporating real stone and wood throughout &mdash; not just accents &mdash; is a bigger material and labor investment than a quick swap.</p>
<p>These materials need occasional sealing and maintenance to hold up over time.</p>
<p>This suits anyone planning to stay in the home long enough to get the value back.</p>
<p>It transforms more of the room than any single accessory could.</p>
${photo("stone-wood.png", "Serene stylish bathroom design with natural stone and wood elements", 683, 1024, "idea14")}

<h2>15. Heated Floors</h2>
<p>Heated floors require installation underneath existing flooring, which usually means a renovation rather than an add-on.</p>
<p>This is a genuine comfort upgrade, especially in a colder climate.</p>
<p>It's best planned alongside a flooring replacement already in progress, rather than as a standalone project.</p>
<p>One of the purely functional splurges on this list &mdash; it doesn't change the look at all.</p>
${photo("heated-floors.png", "Stunning luxurious bathroom interior with heated floors", 683, 1024, "idea15")}

<h2>16. An Elegant Floating Vanity</h2>
<p>A floating vanity needs wall-mounted plumbing, which is more involved than a standard vanity swap.</p>
<p>It opens up the floor and makes a smaller bathroom feel noticeably larger.</p>
<p>This is a mid-to-high cost project depending on the plumbing work required.</p>
<p>Worth prioritizing in a smaller bathroom where floor space matters most.</p>
${photo("floating-vanity.png", "Stunningly modern bathroom design featuring an elegant floating vanity", 683, 1024, "idea16")}

<h2>17. A Waterfall Faucet</h2>
<p>A waterfall faucet adds a distinctive visual and sound element to a vanity or tub filler.</p>
<p>Installation complexity depends on the existing plumbing configuration.</p>
<p>This is a smaller splurge than a full tub or shower renovation, but still more than a simple fixture swap.</p>
<p>A nice detail for anyone already updating the vanity or tub area.</p>
${photo("waterfall-faucet.png", "Stunning close-up of a modern waterfall faucet in a luxury bathroom", 683, 1024, "idea17")}

<h2>18. Built-In Shower Benches</h2>
<p>A built-in bench requires opening up the shower structure, so it's best planned alongside a full shower renovation.</p>
<p>This adds genuine function &mdash; a spot to sit, shave, or just slow down under the water.</p>
<p>Not a standalone weekend project by any measure.</p>
<p>Worth prioritizing for anyone already gutting the shower for other reasons.</p>
${photo("shower-bench.png", "Luxurious walk-in shower designed with a built-in bench", 683, 1024, "idea18")}

<h2>19. A Japanese-Inspired Soaking Tub</h2>
<p>A deep, compact soaking tub takes up less floor space than a standard freestanding tub while still allowing full-body immersion.</p>
<p>This still requires real plumbing and structural planning, similar to any built-in tub.</p>
<p>It suits a smaller bathroom that wants a soaking tub without a bigger footprint.</p>
<p>A genuine splurge, but one that solves the space problem a standard tub can't.</p>
${photo("japanese-soaking-tub.png", "Serene luxurious wooden Japanese-inspired soaking tub", 683, 1024, "idea19")}

<h2>20. A Steam Shower</h2>
<p>A steam shower needs a sealed enclosure and a dedicated steam generator, making it one of the biggest investments on this entire list.</p>
<p>This is a genuine renovation project, not an upgrade to an existing shower.</p>
<p>It delivers a spa experience that's hard to replicate with anything else on this list.</p>
<p>Worth it only for someone planning a full bathroom renovation and genuinely wants this specific feature.</p>
${photo("steam-shower.png", "Luxurious inviting steam shower enclosure for ultimate relaxation", 683, 1024, "idea20")}

<h2>Final Thoughts</h2>
<p>A spa bathroom doesn't have to mean the full hotel-renovation version shown in most photo galleries.</p>
<p>Start with the easy, cheap changes &mdash; towels, scent, lighting, plants &mdash; before committing to anything requiring a contractor.</p>
<p>The cheap changes often deliver more noticeable day-to-day impact than the expensive ones anyway.</p>
<p>Save the real splurges for whenever a full renovation is already on the table.</p>
`;

module.exports = { body };
