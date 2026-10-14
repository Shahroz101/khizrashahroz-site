// Body content for "10 Living Room Partition Ideas for an Open Floor
// Plan". Numbered idea-list format, reordered from the source's 10
// partition types (wooden slats, glass/metal frames, open shelving,
// sliding panels, plant walls, curtains, folding screens, built-in
// cabinets, half walls, laser-cut panels). New topic for the site, no
// existing partition/divider article. Source had a sidebar "Shop the
// Palette" paint-color ad widget, unrelated to the actual 10 ideas —
// skipped as a non-editorial monetization element, not a content
// idea. All 10 idea photos are genuine design-type illustrations, no
// brand names involved; 0 Pinterest pins, so all uncredited photo().

const { picture } = require("./picture-helper.js");

const AMAZON_TAG = "dwellingdre0c-20";
function amazonLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

const PRODUCTS = {
  hero: [
    { asin: "B0FMDTGYK2", title: "SUNALLY Room Divider Privacy Screen, 4 Panels with Wheels, Black", w: 1361, h: 1215 },
    { asin: "B0HDRZBDNQ", title: "No-Drill Wooden Room Divider Slats, 5 Pack, Adjustable 2.3 to 9.8 Ft", w: 1500, h: 1057 },
  ],
  idea1: [
    { asin: "B0FTGLY3YK", title: "VIVO Freestanding Wood Slat Privacy Panel, 76 x 66 Inch", w: 1500, h: 1500 },
    { asin: "B0FDLFM6Q8", title: "YU LI Peel and Stick PVC Slat Wall Panel, 236 x 15.75 Inch, Faux Walnut", w: 1500, h: 1500 },
  ],
  idea2: [
    { asin: "B0FQG8YBVL", title: "Glass Room Divider and Sliding Glass Closet Doors, Smoked Frosted Partition", w: 1500, h: 1500 },
    { asin: "B0GWSSWLRZ", title: "Modern Freestanding Translucent Reeded Glass Room Divider, Single Panel", w: 971, h: 971 },
  ],
  idea3: [
    { asin: "B0H5C4X5GR", title: "TEAKMAMA Folding Room Divider with Shelves, 6 Panel Screen, Natural", w: 1500, h: 1150 },
    { asin: "B0851G6TQQ", title: "VASAGLE Bookshelf with 13 Storage Shelves, 9.8 x 33.9 x 55.1 Inch", w: 1006, h: 1500 },
  ],
  idea4: [
    { asin: "B0FRXJ8FGJ", title: "AJAZZ No-Drill Room Divider Curtain with Tension Rod, Black, 100 x 84 Inch", w: 1500, h: 1500 },
    { asin: "B07GZND2RS", title: "CCJH 6 Ft Heavy Duty Sliding Barn Door Hardware Kit, Smooth and Quiet", w: 1500, h: 1500 },
  ],
  idea5: [
    { asin: "B0DJXMHHVC", title: "Artificial Boxwood Hedge Wall Panel, 18 x 36 Inch, Plant Privacy Screen", w: 609, h: 1219 },
    { asin: "B0CVVP4KLY", title: "Bamworld 4-Tier Tall Corner Plant Stand, Indoor and Outdoor", w: 477, h: 1500 },
  ],
  idea6: [
    { asin: "B0D6NJJQW1", title: "Room Divider Blackout Curtain with Ceiling Track, Cream, for Living Rooms", w: 1500, h: 1500 },
    { asin: "B0DW7M84YV", title: "MaKefeile Room Divider Curtains with Flexible Bendable Ceiling Track Set", w: 1500, h: 1500 },
  ],
  idea7: [
    { asin: "B0D91DQ5SX", title: "4 Panel Folding Room Divider Privacy Screen with Wide Feet", w: 1500, h: 1500 },
    { asin: "B0794R4LQD", title: "HOMCOM 3-Panel Room Divider, 6 Ft Tall Folding Privacy Screen, Natural Woven", w: 853, h: 1500 },
  ],
  idea8: [
    { asin: "B0CCYWKBG1", title: "Henn and Hart 28 Inch Fluted Accent Cabinet, Sideboard Buffet, Rich Brown", w: 1246, h: 1500 },
    { asin: "B0BWMY1BMF", title: "Furinno LUDER 5-Tier Modern Bookcase with Door Storage Cabinet", w: 413, h: 1500 },
  ],
  idea9: [
    { asin: "B0CQLZ5Z6F", title: "SOFE Short 3-Panel Folding Room Divider, 2.6 Ft, White Shutter Style", w: 1500, h: 1500 },
    { asin: "B0BH98V6XL", title: "Red Lantern 3 Ft Short Diamond Weave Folding Screen, 4 Panel, Dark Mocha", w: 1500, h: 852 },
  ],
  idea10: [
    { asin: "B098WSZL1M", title: "White 3D Flower Hanging Room Divider Panels, 14 x 12 Inch, Laser-Cut Style", w: 1200, h: 1163 },
    { asin: "B0BFWWJBCR", title: "ANMINY Hanging Room Divider Panels, 12 Pcs, White Carved Pattern", w: 1500, h: 1500 },
  ],
};

function productGrid(productsKey) {
  const products = PRODUCTS[productsKey] || [];
  if (!products.length) return "";
  const cards = products
    .map(
      (item) => `<div class="product-card">
        ${picture({ dir: "living-room-partition-designs-products", src: item.asin, alt: item.title, w: item.w, h: item.h, className: "product-photo" })}
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
      ${picture({ dir: "living-room-partition-designs", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>
    ${productGrid(productsKey)}`;
}

const body = `
<p>An open floor plan is great until every zone starts bleeding into the next one.</p>
<p>A partition solves that without putting up a real wall &mdash; these 10 designs cover the range, from barely-there to architectural.</p>
${photo("hero.png", "Stylish living room partition design separating an open floor plan", 1312, 736, "hero")}

<h2>1. Sleek Wooden Slats</h2>
<p>Vertical wood slats break up a space while still letting light and sightlines pass through, which is exactly why they've become such a popular choice.</p>
<p>They also bring real warmth to a room in a way a solid wall or a purely metal divider never quite manages.</p>
${photo("wooden-slats.png", "Sleek wooden slat partition bringing warmth to an open living room", 574, 1024, "idea1")}

<h2>2. Glass and Metal Frames</h2>
<p>A black metal frame paired with glass panels brings a genuinely industrial-chic edge while keeping the space feeling visually open.</p>
<p>This is one of the few partition styles that divides a room without sacrificing any natural light at all.</p>
${photo("glass-metal-frames.png", "Industrial glass and metal partition dividing a space while staying open", 574, 1024, "idea2")}

<h2>3. Open Shelving Units</h2>
<p>A shelving unit used as a partition solves two problems at once &mdash; it divides the room and adds genuinely useful storage and display space.</p>
<p>This is one of the most practical options on this list, especially for a smaller home where every piece of furniture needs to earn its space.</p>
${photo("open-shelving.png", "Open shelving unit dividing a room while adding practical storage", 574, 1024, "idea3")}

<h2>4. Sliding Panels</h2>
<p>Sliding panels offer real flexibility &mdash; close them off for privacy, or push them aside to open the whole space back up in seconds.</p>
<p>This adaptability makes them especially well-suited to a room that needs to serve more than one function throughout the day.</p>
${photo("sliding-panels.png", "Flexible sliding panel partition opening and closing a living space", 574, 1024, "idea4")}

<h2>5. Plant Walls</h2>
<p>A living wall of plants brings genuine texture and life to a divider in a way no hard material can replicate.</p>
<p>This option also quietly improves the room's air quality, which is a real bonus none of the other nine ideas on this list can claim.</p>
${photo("plant-walls.png", "Living plant wall adding texture and life as a room partition", 574, 1024, "idea5")}

<h2>6. Curtains and Drapes</h2>
<p>A curtain is the lowest-commitment partition on this entire list, both in cost and in how easily it can be changed or removed later.</p>
<p>It still delivers real visual and acoustic separation, just without any of the permanence of a hard divider.</p>
${photo("curtains-drapes.png", "Soft curtain partition offering a low-commitment way to divide a room", 574, 1024, "idea6")}

<h2>7. Folding Screens</h2>
<p>A folding screen brings genuine personality and pattern to a space, while staying completely portable and easy to reposition.</p>
<p>This is a classic divider style that's aged well precisely because it never demanded any real commitment to begin with.</p>
${photo("folding-screens.png", "Patterned folding screen adding personality to a flexible room divider", 574, 1024, "idea7")}

<h2>8. Built-In Cabinets</h2>
<p>A built-in cabinet used as a divider turns the partition itself into genuine architecture, not just a line between two zones.</p>
<p>This is the most permanent and most involved option on this list, best suited to a true renovation rather than a weekend project.</p>
${photo("built-in-cabinets.png", "Built-in cabinet partition turning a divider into real architecture", 574, 1024, "idea8")}

<h2>9. Half Walls</h2>
<p>A half wall divides a room while still keeping sightlines and light moving between both sides, genuinely the best of both a full wall and no wall at all.</p>
<p>It also creates a natural surface for a shared console table or a run of seating that serves both zones at once.</p>
${photo("half-walls.png", "Half wall partition balancing separation with an open floor plan", 574, 1024, "idea9")}

<h2>10. Laser-Cut Panels</h2>
<p>A laser-cut panel brings genuine artistry to a partition, turning what could be a purely functional element into the room's actual focal point.</p>
<p>The cutout pattern also lets light filter through in a way a solid panel simply can't.</p>
${photo("laser-cut-panels.png", "Artistic laser-cut panel serving as both partition and focal point", 574, 1024, "idea10")}

<h2>Choosing the Right Partition for the Space</h2>
<p>How permanent the change should be, how much light needs to keep moving through, and the room's existing style all weigh into the right choice here.</p>
<p>A rental or a frequently rearranged space calls for something reversible, like curtains or a folding screen, while a true renovation can support something as permanent as built-in cabinets.</p>

<h2>Partitions Are the Secret Weapon of Good Design</h2>
<p>None of these 10 options require giving up the openness that made an open floor plan appealing in the first place.</p>
<p>Pick the one that matches how much commitment the space actually calls for, and the room gets definition without losing its flow.</p>
`;

module.exports = { body };
