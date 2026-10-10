// Body content for "14 Japandi Bedroom Ideas for a Peaceful, Minimal
// Look". Numbered idea-list format, matching the source's 14 ideas,
// reordered (foundation/furniture, materials/texture, then finishing
// details). New room topic for the site — japandi-kitchen-decor-ideas
// and japandi-bathroom-principles cover different rooms, so no
// overlap. Source photos have no Pinterest links, so none carry
// credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "japandi-bedroom-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Japandi takes the calm of Japanese minimalism and the warmth of Scandinavian design, and applies both to a bedroom specifically built for rest.</p>
<p>Done right, it reads as genuinely peaceful rather than just sparse.</p>
<p>These 14 ideas cover how to get there.</p>
${photo("hero.png", "Minimalist Japandi bedroom with a calm, peaceful atmosphere", 1248, 832)}

<h2>1. Start With a Low-Profile Bed Frame</h2>
<p>A bed sitting close to the ground is one of the most recognizable Japandi signatures, echoing traditional Japanese floor-level sleeping without going all the way to a floor mattress.</p>
<p>This also visually opens up the room, since a lower bed takes up less vertical space than a standard frame.</p>
${photo("low-bed.png", "Low-profile bed frame grounding a Japandi bedroom", 683, 1024)}

<h2>2. Add a Statement Wooden Headboard</h2>
<p>A simple, solid wood headboard brings warmth and a natural focal point without any unnecessary ornamentation.</p>
<p>This is often the one piece of furniture allowed to stand out in an otherwise restrained room.</p>
${photo("wooden-headboard.png", "Statement wooden headboard anchoring a Japandi bedroom", 683, 1024)}

<h2>3. Use Functional Furniture Only</h2>
<p>Every piece in a Japandi bedroom should earn its place through genuine use, not just decoration &mdash; a side table that only holds a lamp and a book, nothing more.</p>
<p>This restraint is part of what gives the style its calm, uncluttered feeling.</p>
${photo("functional-furniture.png", "Purely functional furniture keeping the room uncluttered", 683, 1024)}

<h2>4. Opt for Sliding Doors Where Possible</h2>
<p>A sliding closet or room door, inspired by traditional Japanese shoji screens, saves floor space that a swinging door would otherwise require.</p>
<p>This is a bigger commitment than most ideas on this list, but a genuinely authentic nod to the style's Japanese half.</p>
${photo("sliding-doors.png", "Sliding doors saving space with authentic Japandi character", 683, 1024)}

<h2>5. Use Hidden Storage</h2>
<p>Built-in or under-bed storage keeps daily clutter out of sight entirely, which matters more in Japandi than almost any other style given how central uncluttered surfaces are to the whole look.</p>
<p>This is worth planning for early, since retrofitting hidden storage is harder than designing it in from the start.</p>
${photo("hidden-storage.png", "Hidden storage keeping the Japandi bedroom free of visible clutter", 683, 1024)}

<h2>6. Embrace Neutral Bedding</h2>
<p>Soft whites, warm beiges and muted earth tones on the bed itself reinforce the room's calm palette more directly than any other single element.</p>
<p>Natural fiber bedding &mdash; linen, cotton &mdash; also fits the style's emphasis on genuine, unprocessed materials.</p>
${photo("neutral-bedding.png", "Neutral bedding reinforcing a calm Japandi color palette", 683, 1024)}

<h2>7. Bring in Natural Textures</h2>
<p>Woven baskets, a jute rug, raw wood grain &mdash; texture does the visual work that pattern and color would do in a less restrained style.</p>
<p>This is what keeps an all-neutral room from feeling flat or sterile.</p>
${photo("natural-textures.png", "Natural textures adding depth to a neutral Japandi palette", 683, 1024)}

<h2>8. Keep Walls Clean and Neutral</h2>
<p>A soft white, warm gray or muted earth tone on the walls supports the room's overall calm rather than competing with it.</p>
<p>This is the foundation everything else in the room gets layered onto, which makes it worth settling early.</p>
${photo("clean-walls.png", "Clean, neutral walls supporting a calm Japandi atmosphere", 683, 1024)}

<h2>9. Add a Single Piece of Art</h2>
<p>One considered piece, rather than a gallery wall or several smaller prints, fits Japandi's less-is-more philosophy directly.</p>
<p>Scale and placement matter more here than in a busier room, since there's nothing else competing for visual attention.</p>
${photo("single-art.png", "A single considered art piece fitting the room's minimal philosophy", 683, 1024)}

<h2>10. Use Soft, Diffused Lighting</h2>
<p>Paper or fabric-shaded fixtures soften light the way traditional Japanese lanterns do, avoiding anything harsh or overly bright.</p>
<p>This lighting quality does as much for the room's calm feeling as the color palette itself.</p>
${photo("diffused-lighting.png", "Soft diffused lighting creating a calming Japandi glow", 683, 1024)}

<h2>11. Incorporate Greenery</h2>
<p>A single well-chosen plant brings life into the room without disrupting its restrained palette or cluttered feeling.</p>
<p>One plant, placed deliberately, works better here than several scattered around the room.</p>
${photo("greenery.png", "A single plant bringing life to a minimal Japandi bedroom", 683, 1024)}

<h2>12. Create a Cozy Nook</h2>
<p>A small reading corner with a simple chair and soft lighting adds a secondary function to the room without crowding the main sleeping area.</p>
<p>This also gives the room a second mood &mdash; quiet daytime use, not just nighttime rest.</p>
${photo("cozy-nook.png", "Cozy reading nook adding a secondary calm space to the bedroom", 683, 1024)}

<h2>13. Incorporate Wabi-Sabi Imperfection</h2>
<p>A handmade ceramic, a visibly textured ceramic vase, or an intentionally imperfect ceramic piece brings the Japanese wabi-sabi philosophy into a room that could otherwise feel too polished.</p>
<p>This embraced imperfection is what keeps Japandi from reading as cold minimalism.</p>
${photo("wabi-sabi.png", "Wabi-sabi imperfection adding soul to a minimal Japandi room", 683, 1024)}

<h2>14. Add a Touch of Black</h2>
<p>A black frame, a dark metal fixture, or one small black accent grounds the room's otherwise light, neutral palette.</p>
<p>This single contrast point keeps the whole room from feeling washed out, without disrupting its overall calm.</p>
${photo("touch-black.png", "A touch of black grounding the room's light, neutral palette", 683, 1024)}

<h2>Wrapping It Up</h2>
<p>None of these 14 ideas require redoing the whole bedroom at once.</p>
<p>Start with the bed frame and the wall color, since both set the room's foundation, then layer in texture, lighting and the smaller details from there.</p>
<p>Japandi rewards restraint &mdash; fewer, better choices consistently outperform more of everything.</p>
`;

module.exports = { body };
