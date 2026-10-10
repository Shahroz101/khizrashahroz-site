// Body content for "8 Kitchen Cabinet Makeover Techniques Worth
// Trying". Numbered idea-list format, reordered from the source's 8
// techniques. New topic for the site — no existing cabinet-makeover
// or cabinet-renovation-technique article (above-cabinet-decor-ideas
// is a styling piece about the space above cabinets, not a makeover
// technique guide). Source photos have no Pinterest links, so none
// carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "kitchen-cabinet-makeover-techniques", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Full cabinet replacement is the most expensive kitchen renovation line item there is, and most of the time, it isn't actually necessary.</p>
<p>These eight techniques cover what genuinely transforms tired cabinets without tearing them out.</p>
${photo("hero.png", "A newly transformed kitchen after a cabinet makeover", 1248, 832)}

<h2>1. Paint: The Reliable First Move</h2>
<p>A fresh coat of paint remains the single highest-impact, lowest-cost way to transform cabinets, and it works on nearly any existing cabinet material.</p>
<p>Proper sanding and a quality primer matter more here than the paint color itself &mdash; skipping either step is the most common reason a cabinet paint job fails early.</p>
${photo("paint.png", "Freshly painted kitchen cabinets transforming the whole room", 574, 1024)}

<h2>2. Refacing: A Convincing Shortcut</h2>
<p>Refacing replaces just the doors and drawer fronts while keeping the existing cabinet boxes, delivering most of a full replacement's visual impact at a fraction of the cost.</p>
<p>This makes the most sense when the cabinet boxes themselves are still structurally sound, with only the faces looking dated.</p>
${photo("refacing.png", "Refaced cabinet doors delivering a full-replacement look for less", 574, 1024)}

<h2>3. Open Shelving: The Bolder Move</h2>
<p>Removing a few upper cabinet doors entirely creates open shelving, which can make a kitchen feel more spacious and airy than closed cabinetry ever does.</p>
<p>The tradeoff is real, though &mdash; everything on an open shelf stays visible, which demands more consistent organization than a closed cabinet ever required.</p>
${photo("open-shelving.png", "Open shelving replacing closed cabinet doors for an airier look", 574, 1024)}

<h2>4. Hardware Swap: Small Change, Big Impact</h2>
<p>New knobs and pulls change a cabinet's entire character in an afternoon, for less money and effort than almost anything else on this list.</p>
<p>Checking the existing screw hole spacing before buying new hardware avoids an unnecessary extra drilling step during installation.</p>
${photo("hardware-swap.png", "New cabinet hardware changing the kitchen's character in an afternoon", 574, 1024)}

<h2>5. Add Trim or Molding</h2>
<p>Trim and molding added to plain cabinet fronts bring a custom, built-in look that flat doors alone can't replicate.</p>
<p>This technique works especially well on simpler, shaker-style doors, giving them a more elevated profile without replacing them.</p>
${photo("trim-molding.png", "Trim and molding adding a custom, built-in look to plain cabinets", 574, 1024)}

<h2>6. Organize What's Inside</h2>
<p>Pull-out drawers, dividers and other internal organizers improve a kitchen's actual daily function in a way the exterior makeover alone doesn't touch.</p>
<p>This is worth doing alongside any of the other techniques here, since it solves a different problem than how the cabinets look from the outside.</p>
${photo("organize-inside.png", "Organized interior cabinet storage improving daily kitchen function", 574, 1024)}

<h2>7. Add Cabinet Lighting</h2>
<p>Under-cabinet or interior cabinet lighting adds both genuine function and a noticeably more finished, higher-end look.</p>
<p>This is one of the more involved techniques here, but it transforms both how the kitchen looks and how usable the counter space actually is after dark.</p>
${photo("cabinet-lighting.png", "Under-cabinet lighting adding function and a finished look", 574, 1024)}

<h2>8. Go Two-Tone for Instant Style</h2>
<p>Painting the upper and lower cabinets two different colors, or making the island a standout contrast, brings real visual interest without an entirely bold scheme.</p>
<p>This technique works especially well paired with the paint method above, since it's really just a more deliberate way of applying the same basic update.</p>
${photo("two-tone.png", "Two-tone cabinet painting bringing instant style to the kitchen", 574, 1024)}

<h2>Keep It You</h2>
<p>None of these eight techniques needs to happen alone &mdash; paint plus a hardware swap, or refacing plus new lighting, often does more together than any single technique on its own.</p>
<p>Whichever combination gets chosen, cabinets rarely need full replacement to feel genuinely new again.</p>
`;

module.exports = { body };
