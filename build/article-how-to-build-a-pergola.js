// Body content for "How to Build a Pergola: A Step-by-Step Guide".
// Guide format, matching the source's 9 content sections plus
// mistakes/kit sections folded into the close. Genuinely distinct
// from the existing pergola-ideas article (a styling/idea listicle —
// what to do with a pergola once it exists) since this is a literal
// construction how-to. Source photos have no Pinterest links, so none
// carry credit captions.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "how-to-build-a-pergola", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

const body = `
<p>Building a pergola sounds like a bigger project than it actually is.</p>
<p>The structure comes down to six real steps, most of them just posts, beams and rafters assembled in the right order.</p>
<p>This walks through the actual build, not just the finished look.</p>
${photo("hero.png", "Beautifully built pergola enhancing a backyard space", 1312, 736)}

<h2>Why Build One in the First Place</h2>
<p>A pergola defines an outdoor space the way a room's walls and ceiling define an indoor one, without fully enclosing it.</p>
<p>It also adds real property value and usable square footage to a yard that might otherwise be just open lawn.</p>
${photo("why-build.png", "Pergola adding structure and value to an outdoor living space", 574, 1024)}

<h2>Step 1: Pick the Right Spot</h2>
<p>A level area with good drainage, positioned to catch the right amount of sun and shade for how it'll actually get used, matters more than exact placement within the yard.</p>
<p>Checking local building codes and any property line setback requirements before digging a single post hole saves real headaches later.</p>
${photo("pick-spot.png", "Ideal pergola location chosen for sun, shade and drainage", 574, 1024)}

<h2>Step 2: Gather Tools and Materials</h2>
<p>Pressure-treated lumber or cedar, post anchors, concrete for the footings, and standard carpentry tools cover most of what a basic pergola build requires.</p>
<p>Having everything on hand before starting avoids the most common build delay &mdash; a mid-project hardware store run.</p>
${photo("tools-materials.png", "Essential tools and materials gathered for a pergola build", 574, 1024)}

<h2>Step 3: Install the Posts</h2>
<p>Posts set in concrete footings, dug below the local frost line, give the whole structure its foundation and long-term stability.</p>
<p>Getting every post perfectly level and square at this stage matters more than at any later step, since errors here compound through the rest of the build.</p>
${photo("install-posts.png", "Sturdy posts installed as the foundation of a new pergola", 574, 1024)}

<h2>Step 4: Attach the Support Beams</h2>
<p>Beams connecting the tops of the posts create the structural frame the rafters will eventually rest on.</p>
<p>Proper bracing and secure fasteners here matter more than they might seem to, since these beams carry the weight of everything built on top.</p>
${photo("support-beams.png", "Support beams forming the structural frame of a pergola", 574, 1024)}

<h2>Step 5: Install the Rafters</h2>
<p>Evenly spaced rafters across the beams create the pergola's signature overhead pattern and begin to define the amount of shade the finished structure will provide.</p>
<p>Spacing them closer together increases shade; spacing them further apart lets in more light &mdash; both are valid depending on the intended use.</p>
${photo("rafters.png", "Evenly spaced rafters completing a pergola's signature overhead look", 574, 1024)}

<h2>Step 6: Secure and Finish</h2>
<p>A final check of every connection, followed by a protective stain or sealant, finishes the structural build and protects the wood from the elements going forward.</p>
<p>This step is easy to rush after the more visually satisfying earlier steps, but it's what determines how well the structure holds up over years of weather exposure.</p>
${photo("secure-finish.png", "Finished pergola sealed and secured for long-term durability", 574, 1024)}

<h2>Add-Ons Worth Considering</h2>
<p>String lights, a retractable canopy, or climbing plants trained up the posts all extend the pergola's function well past the basic structure.</p>
<p>These are worth planning for during the build, even if they get added later, since some require hardware mounted before the structure is finished.</p>
${photo("add-ons.png", "Pergola enhanced with string lights and climbing plants", 574, 1024)}

<h2>Mistakes Worth Avoiding</h2>
<p>Skipping the local building code check is the most consequential mistake, since it can mean redoing part or all of the structure later.</p>
<p>Under-sizing the posts or footings for the pergola's actual size and local wind conditions is the second most common, and the hardest to fix after the concrete sets.</p>
<p>Rushing the leveling and squaring on the first two posts compounds into a visibly crooked structure by the time the rafters go on.</p>

<h2>What About a Kit?</h2>
<p>A pre-cut pergola kit skips the material sourcing and cutting, leaving mostly assembly &mdash; a reasonable option for a first-time builder wanting a more guided process.</p>
<p>A fully custom build offers more control over size, spacing and material, at the cost of more planning and a steeper first-timer learning curve.</p>

<h2>You've Got This</h2>
<p>None of these six steps individually require advanced carpentry skill &mdash; the project is approachable in large part because each step is straightforward on its own.</p>
<p>Take the spot selection and post installation seriously, since those two steps are what everything else depends on.</p>
<p>A well-built pergola, done carefully, lasts for decades and genuinely transforms how a backyard gets used.</p>
`;

module.exports = { body };
