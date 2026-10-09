// Body content for "11 Bedroom Lighting Ideas for Setting the Right
// Mood". Numbered idea-list format with a brief recap section. New
// topic for the site, no existing overlap (bathroom lighting articles
// cover a different room entirely). Source photos are all
// AI-generated style with no Pinterest links, 1:1 with the 11 ideas,
// so none carry credit captions. Rewritten out of the source's
// heavily slang-driven, meme-referencing voice into the site's calmer
// tone, short-line prose.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "bedroom-lighting-mood", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>A single overhead bedroom light does one job and does it badly &mdash; it's either on, flooding the whole room, or off.</p>
<p>A bedroom actually needs different kinds of light for different moments: reading, winding down, getting dressed in the morning.</p>
<p>These 11 ideas layer together to cover all of that, not just one bright default setting.</p>
<p>Most of them cost very little and don't require any real electrical work.</p>
${photo("hero.png", "Cozy bedroom featuring warm, layered lighting for a relaxing atmosphere", 1024, 1024)}

<h2>1. Layer the Light Sources</h2>
<p>A single ceiling fixture can't cover every mood a bedroom needs.</p>
<p>Combining overhead, task and ambient lighting &mdash; even just two of the three &mdash; gives the room actual flexibility throughout the day.</p>
<p>This is the organizing idea behind most of what follows on this list.</p>
<p>Start here before adding any individual fixture type.</p>
${photo("layering.png", "Bedroom featuring multiple layered light sources for flexibility", 683, 1024)}

<h2>2. Skip the Cold Bulbs</h2>
<p>A cool white bulb reads as clinical in a bedroom, working directly against the relaxed mood the room is supposed to have.</p>
<p>Warm-toned bulbs, generally in the 2700-3000K range, create a softer, more flattering light throughout the space.</p>
<p>This is one of the cheapest, fastest fixes on this entire list &mdash; often just a bulb swap, nothing more.</p>
<p>Worth doing before any other change on this list.</p>
${photo("warm-bulbs.png", "Warm-toned bedroom lighting creating a cozy, inviting atmosphere", 683, 1024)}

<h2>3. Don't Dismiss Fairy Lights</h2>
<p>A string of warm fairy lights adds a soft, ambient glow that a single lamp can't replicate.</p>
<p>Draped along a headboard, a shelf, or around a window frame, they work as a low-commitment accent rather than a primary light source.</p>
<p>This isn't just a dorm-room trick &mdash; done with restraint, it reads as genuinely styled in any bedroom.</p>
<p>A cheap, flexible addition that's easy to remove or reposition later.</p>
${photo("fairy-lights.png", "String fairy lights adding soft ambient glow to a bedroom", 683, 1024)}

<h2>4. Use Wall Sconces to Save Nightstand Space</h2>
<p>A sconce mounted above or beside the bed frees up nightstand surface that a table lamp would otherwise take.</p>
<p>This matters more in a smaller bedroom, where every inch of nightstand space counts.</p>
<p>Sconces also add a more intentional, designed look than a lamp alone typically does.</p>
<p>Worth considering for anyone who's run out of room on a small nightstand.</p>
${photo("wall-sconces.png", "Wall sconces providing elegant, space-saving bedroom lighting", 683, 1024)}

<h2>5. Add Smart Lighting for Zero-Effort Mood Changes</h2>
<p>A smart bulb or smart switch lets the whole room shift from bright to dim without getting out of bed.</p>
<p>This is less about a specific look and more about convenience &mdash; the exact lighting level for the exact moment, on demand.</p>
<p>Scheduling automatic dimming in the evening adds a small but genuinely useful routine.</p>
<p>Worth the investment for anyone who adjusts lighting throughout the night regularly.</p>
${photo("smart-lighting.png", "Smart lighting system offering convenient bedroom mood control", 683, 1024)}

<h2>6. Install a Dimmer</h2>
<p>A dimmer switch does more for a room's flexibility than almost any single fixture change.</p>
<p>One fixture becomes several different brightness levels, covering everything from bright morning light to a soft evening glow.</p>
<p>This is a relatively simple electrical upgrade, though it may require an electrician depending on the existing wiring.</p>
<p>One of the best returns on investment on this entire list.</p>
${photo("dimmer-switches.png", "Dimmer switch allowing flexible bedroom lighting control", 683, 1024)}

<h2>7. Add Lamps With Real Intention</h2>
<p>A good table or floor lamp does more than provide light &mdash; it's a genuine styling object in its own right.</p>
<p>Choosing a lamp with real presence, rather than a purely functional afterthought, elevates the whole nightstand or corner it sits in.</p>
<p>A warm-toned bulb matters here just as much as everywhere else on this list.</p>
<p>Worth treating the lamp choice as a decor decision, not just a lighting one.</p>
${photo("statement-lamps.png", "Stylish table lamp adding both light and decor to a bedroom", 683, 1024)}

<h2>8. Try Backlighting</h2>
<p>A light source placed behind a headboard, a piece of furniture, or along a shelf edge creates a soft glow without a visible fixture.</p>
<p>This is a genuine designer trick that's become much more accessible with affordable LED strip lighting.</p>
<p>The indirect, diffused effect reads as more sophisticated than a direct light source in the same spot.</p>
<p>A bit more setup than most ideas on this list, but a real visual payoff.</p>
${photo("backlighting.png", "Backlighting technique creating a soft, designer-style glow", 683, 1024)}

<h2>9. Light the Mirror Properly</h2>
<p>A mirror with its own dedicated lighting &mdash; sconces on either side, or a backlit frame &mdash; makes a real difference for anyone getting ready in the room.</p>
<p>This solves the same shadow problem bathroom vanity lighting does, just in a bedroom context.</p>
<p>Warm, even light at the mirror beats relying on whatever ambient light happens to reach that corner.</p>
<p>A practical upgrade for anyone who does their daily routine in the bedroom rather than the bathroom.</p>
${photo("mirror-lighting.png", "Properly lit mirror providing functional bedroom lighting", 683, 1024)}

<h2>10. Don't Skip Candles</h2>
<p>Real candlelight brings a warmth and flicker no bulb fully replicates, even a dimmed one.</p>
<p>A cluster of candles on a dresser or nightstand adds genuine ambiance for very little cost.</p>
<p>This works best as a layer on top of practical lighting, not a replacement for it.</p>
<p>One of the cheapest mood upgrades on this entire list.</p>
${photo("candles.png", "Candlelight adding warm ambiance to a bedroom setting", 683, 1024)}

<h2>11. Consider a Statement Fixture</h2>
<p>A chandelier, an oversized pendant, or a sculptural fixture turns the bedroom's main light source into a genuine design feature.</p>
<p>This works especially well in a room with higher ceilings, where the fixture has room to actually make an impact.</p>
<p>Pairing a statement fixture with a dimmer keeps it from being too harsh as a daily-use light.</p>
<p>The biggest single investment on this list, but also the most dramatic visual change.</p>
${photo("statement-fixtures.png", "Statement light fixture serving as a bedroom's design centerpiece", 683, 1024)}

<h2>Quick Recap</h2>
<p>Layer at least two types of lighting rather than relying on one.</p>
<p>Choose warm-toned bulbs throughout.</p>
<p>Add a dimmer wherever the budget allows.</p>
<p>Treat lamps, sconces and any statement fixture as genuine decor choices, not afterthoughts.</p>

<h2>Final Thoughts</h2>
<p>None of these 11 ideas require a full bedroom renovation to try.</p>
<p>A bulb swap and a dimmer alone cover most of the mood-setting work most people are actually after.</p>
<p>Layer in the rest gradually &mdash; fairy lights, candles, a statement fixture &mdash; as budget and interest allow.</p>
<p>The right lighting does more for a bedroom's feel than almost any other single change.</p>
`;

module.exports = { body };
