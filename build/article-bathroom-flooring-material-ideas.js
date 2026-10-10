// Body content for "13 Bathroom Flooring Materials and What Each One
// Actually Gets You". Numbered idea-list format, matching the
// source's 13 genuine flooring ideas. Source was heavily mixed with
// unrelated Amazon product placements (towel holders, plants,
// organizers, rugs) embedded between flooring sections — per
// established precedent, those were skipped entirely since they
// aren't flooring ideas at all, not just branded products to
// genericize. New topic for the site, no existing bathroom flooring
// article. Source photos have no Pinterest links, so none carry
// credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bathroom-flooring-material-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Bathroom flooring gets decided faster than almost any other material choice in the room, usually by whatever's cheapest or already available.</p>
<p>That's worth slowing down for &mdash; the floor affects the room's whole feel more than people expect, and in a small bathroom specifically, color and material both genuinely change how big the space reads.</p>
<p>Light colors and glossy finishes reflect more light and make a tight bathroom feel more open, which is worth keeping in mind across every material on this list.</p>
${photo("hero.png", "Luxurious bathroom flooring transforming the entire space", 1280, 720)}

<h2>1. Classic Marble</h2>
<p>Polished marble brings a genuine sense of luxury that's hard to replicate with any other material, veining included.</p>
<p>This is a higher-maintenance, higher-cost choice, best suited to someone prioritizing the look over long-term upkeep ease.</p>
${photo("marble.png", "Classic marble flooring bringing timeless luxury to the bathroom", 576, 1024)}

<h2>2. Bold Patterned Tile</h2>
<p>A Moroccan-inspired or similarly bold pattern turns the floor into the room's actual focal point, rather than a background surface.</p>
<p>This works best paired with simpler walls and fixtures, letting the floor do the visual heavy lifting.</p>
${photo("patterned.png", "Bold patterned tile making the floor the room's focal point", 576, 1024)}

<h2>3. Wood-Look Porcelain</h2>
<p>Porcelain tile made to resemble real wood brings warmth without the water-damage risk actual hardwood carries in a bathroom.</p>
<p>This is one of the more practical choices on this list, suited to anyone who wants wood's look without wood's bathroom-specific drawbacks.</p>
${photo("wood-look.png", "Wood-look porcelain tile combining rustic warmth with practicality", 576, 1024)}

<h2>4. Polished Concrete</h2>
<p>Concrete flooring brings a genuinely industrial-chic edge that suits a more modern, minimalist bathroom especially well.</p>
<p>This material also tends to be more budget-friendly than many of the other options on this list, relative to the impact it makes.</p>
${photo("concrete.png", "Polished concrete flooring creating an industrial-chic bathroom look", 576, 1024)}

<h2>5. Black-and-White Checkered</h2>
<p>A checkered floor brings genuine retro charm that instantly sets the whole room's character.</p>
<p>This is a bolder, more committed choice than most others on this list &mdash; worth it for someone confident in the specific aesthetic.</p>
${photo("checkered.png", "Black-and-white checkered tile bringing retro charm to the bathroom", 576, 1024)}

<h2>6. Natural Stone</h2>
<p>Slate or similar natural stone brings an organic, spa-like quality that manufactured materials can't fully replicate.</p>
<p>This pairs especially well with a broader spa-bathroom styling approach, reinforcing the same calming, natural material story.</p>
${photo("natural-stone.png", "Natural stone flooring creating a spa-inspired bathroom atmosphere", 576, 1024)}

<h2>7. Hexagon Tile</h2>
<p>Small hexagon tiles bring a geometric, modern precision that reads as considered without needing a bold color or pattern to do it.</p>
<p>This shape also handles curves and smaller bathroom footprints better than large-format tile often can.</p>
${photo("hexagon.png", "Hexagon tile bringing modern geometric precision to the floor", 576, 1024)}

<h2>8. Penny Tile</h2>
<p>Tiny round penny tiles bring genuine personality and a slightly playful quality that larger tile formats don't offer.</p>
<p>This is one of the more distinctive, memorable choices on this list, suited to a bathroom meant to have real character.</p>
${photo("penny.png", "Penny tile adding playful personality to the bathroom floor", 576, 1024)}

<h2>9. Vinyl Tile</h2>
<p>Vinyl flooring delivers a genuinely stylish look at one of the most budget-friendly price points on this entire list.</p>
<p>This is a practical choice for a rental or a lower-budget renovation that still wants a considered, finished look.</p>
${photo("vinyl.png", "Budget-friendly vinyl tile offering a stylish, practical flooring option", 576, 1024)}

<h2>10. Herringbone Pattern</h2>
<p>A herringbone layout brings genuine sophistication to even a relatively simple tile material, through pattern alone rather than an expensive material upgrade.</p>
<p>This is a good option for anyone wanting an elevated look without necessarily paying for the most expensive tile itself.</p>
${photo("herringbone.png", "Herringbone pattern elevating the bathroom with sophisticated layout", 576, 1024)}

<h2>11. Glass Mosaic</h2>
<p>Shimmering glass mosaic tile brings genuine shine and light-catching quality that matte materials simply can't match.</p>
<p>This works especially well in a glam or more maximalist bathroom styling direction.</p>
${photo("glass-mosaic.png", "Shimmering glass mosaic tile adding shine and glamour to the floor", 576, 1024)}

<h2>12. Cork Flooring</h2>
<p>Cork brings a genuinely unexpected warmth and softness underfoot, along with real eco-friendly credentials.</p>
<p>This is one of the more distinctive choices on this list, worth considering for anyone prioritizing comfort and sustainability over a more conventional look.</p>
${photo("cork.png", "Eco-friendly cork flooring offering comfort and sustainability", 576, 1024)}

<h2>13. Terracotta Tile</h2>
<p>Terracotta brings genuine Mediterranean warmth and a rustic, cozy quality that pairs naturally with an earthy, sun-washed bathroom palette.</p>
<p>This material tends to age beautifully, developing more character over time rather than looking dated.</p>
${photo("terracotta.png", "Warm terracotta tile bringing rustic Mediterranean charm to the bathroom", 576, 1024)}

<h2>Pick a Tile, Change the Whole Vibe</h2>
<p>None of these 13 materials is universally correct &mdash; the right one depends on the bathroom's size, the overall style direction, and how much maintenance feels realistic long-term.</p>
<p>For a small bathroom specifically, leaning lighter and glossier within whichever material gets chosen helps the space read as larger than it is.</p>
<p>Whichever material wins out, the floor sets the tone for everything built on top of it.</p>
`;

module.exports = { body };
