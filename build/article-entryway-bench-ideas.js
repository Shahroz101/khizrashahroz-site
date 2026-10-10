// Body content for "9 Entryway Bench Styles for a Functional and
// Beautiful Space". Numbered idea-list format, matching the source's
// 9 bench styles plus intro and styling-tips sections. Source's
// closing "Best Places to Shop" section named specific retailers
// (IKEA, Target, Wayfair, Etsy) — dropped entirely per the
// established branded-shopping precedent, since it's a sourcing list
// rather than a design idea with a photo. New furniture-piece-specific
// topic, no existing site overlap. Source photos have no Pinterest
// links, so none carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "entryway-bench-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>An entryway without a bench is missing its single most functional piece of furniture.</p>
<p>Somewhere to sit while putting on shoes, somewhere for a bag to land, somewhere that makes the whole space feel finished rather than just passed through.</p>
<p>These 9 styles cover the range worth considering, from rustic to fully upholstered.</p>
${photo("hero.png", "Cozy entryway featuring a stylish wooden bench", 1248, 832)}

<h2>Why an Entryway Deserves a Bench</h2>
<p>A bench solves a real daily problem &mdash; putting on and taking off shoes &mdash; that most entryways otherwise handle badly, usually by someone balancing on one foot.</p>
<p>It also anchors the whole space visually, giving an otherwise transitional area a genuine piece of furniture to build around.</p>
${photo("why-bench.png", "Entryway bench providing both function and style", 574, 1024)}

<h2>1. Rustic Wood</h2>
<p>A solid wood bench with visible grain and a slightly weathered finish brings real warmth and character to the entrance.</p>
<p>This style tends to age well, picking up more charm over years of actual use rather than looking worn out.</p>
${photo("rustic-wood.png", "Rustic wood bench adding charm to an entryway", 574, 1024)}

<h2>2. Modern Minimalist</h2>
<p>Clean lines, a simple silhouette, and a neutral finish suit a more contemporary entryway better than an ornate style would.</p>
<p>This works especially well in a smaller space, where a slim, low-profile bench avoids visually crowding the entrance.</p>
${photo("modern-minimalist.png", "Sleek modern minimalist bench for a contemporary entryway", 574, 1024)}

<h2>3. Built-In Storage</h2>
<p>A bench with a lift-top seat or drawers underneath solves two problems in one piece of furniture &mdash; seating and somewhere to stash shoes, scarves or seasonal gear.</p>
<p>This is one of the most practical styles on this list for a household that actually accumulates entryway clutter.</p>
${photo("built-in-storage.png", "Bench with built-in storage combining function and style", 574, 1024)}

<h2>4. Upholstered</h2>
<p>A padded, fabric-covered bench brings genuine comfort that a hard wood or metal seat doesn't offer.</p>
<p>A durable, stain-resistant fabric matters more here than in almost any other room, given how much daily wear an entryway bench takes.</p>
${photo("upholstered.png", "Plush upholstered bench adding comfort to the entryway", 574, 1024)}

<h2>5. Multifunctional for Small Spaces</h2>
<p>A narrow bench that also works as a plant stand, a bookshelf end, or a slim console does more per square foot in a tight entryway.</p>
<p>This style is worth prioritizing for anyone working with limited entry space, where a single-purpose bench is harder to justify.</p>
${photo("multifunctional.png", "Multifunctional bench maximizing a small entryway space", 574, 1024)}

<h2>6. Vintage or Repurposed</h2>
<p>An old church pew, a repurposed trunk, or a genuinely vintage find brings character that new furniture can't replicate.</p>
<p>This is one of the more unique options on this list, since no two vintage pieces are ever quite the same.</p>
${photo("vintage-repurposed.png", "Vintage repurposed bench offering unique entryway character", 574, 1024)}

<h2>7. A Bench That Doubles as Art</h2>
<p>A sculptural or unusually shaped bench works as a visual statement first and a functional seat second.</p>
<p>This suits an entryway that's more about making an impression than handling heavy daily shoe-removal traffic.</p>
${photo("art-piece.png", "Sculptural bench doubling as an art piece in the entryway", 574, 1024)}

<h2>8. Cushioned With Baskets Underneath</h2>
<p>A simple cushioned bench with open storage baskets tucked beneath combines comfort with easy-access, visible organization.</p>
<p>This works well for a household that wants storage without a fully enclosed, harder-to-access cabinet underneath.</p>
${photo("cushioned-baskets.png", "Cushioned bench with convenient underneath storage baskets", 574, 1024)}

<h2>Finishing Touches That Matter</h2>
<p>A cushion, a throw pillow, or a small tray on top turns a purely functional bench into a styled piece of furniture.</p>
<p>A hook or two mounted just above it completes the function, giving coats and bags a spot that doesn't end up on the bench itself.</p>
${photo("styling-tips.png", "Finishing touches completing a well-styled entryway bench", 574, 1024)}

<h2>Make Your Entryway Work for You</h2>
<p>None of these 9 styles is the universally correct choice.</p>
<p>A rustic or vintage bench suits a character-filled entryway; a modern or multifunctional one suits a smaller, more streamlined space.</p>
<p>Whichever style gets chosen, the right bench turns an entryway from a space people pass through into one they actually use.</p>
`;

module.exports = { body };
