// Body content for the "How to Style a Tiered Tray: Easy Ideas for a
// Cozy, Collected Look" post. Images sourced from Pinterest pins the user
// selected and provided directly; each is credited back to its pin per
// their request. Photos only — no Amazon product grids on this one.

const { picture } = require("./picture-helper.js");

const PIN = {
  hero: { src: "hero", w: 1023, h: 1537, alt: "Three-tier wood tray styled with pumpkins, a Welcome Fall sign, candles, wood beads and a grateful thankful blessed frame", url: "https://www.pinterest.com/pin/72268769023903306/", label: "Fully Styled Three-Tier Tray" },
  whatIsTieredTray: { src: "what-is-tiered-tray", w: 1000, h: 1504, alt: "Round three-tier tray used as a coffee bar with stacked mugs, sunflowers, coffee beans and a coffee maker on the counter beside it", url: "https://www.pinterest.com/pin/60376451250159421/", label: "Tiered Tray Coffee Bar Setup" },
  withoutClutter: { src: "without-clutter", w: 600, h: 1019, alt: "White two-tier tray styled simply with green glass bottles, a ceramic bird, patterned bowls, a rolled floral towel and a think happy thoughts sign", url: "https://www.pinterest.com/pin/111745634500797553/", label: "Simply Styled Two-Tier Tray" },
  colorPalette: { src: "color-palette", w: 1242, h: 1698, alt: "Two-tier wood tray styled with a fall gnome, sage and white pumpkins, eucalyptus, wood beads and a farm fresh pumpkins book stack", url: "https://www.pinterest.com/pin/211174970814082/", label: "Fall Color Palette on a Tiered Tray" },
  surroundings: { src: "surroundings", w: 1402, h: 2048, alt: "Two-tier black and white buffalo check tray with HOME letter blocks, wood houses and a family name sign against a black and white subway tile backsplash", url: "https://www.pinterest.com/pin/46584177390546590/", label: "Tiered Tray Matching Its Surroundings" },
  differentHeights: { src: "different-heights", w: 564, h: 705, alt: "Two-tier wood tray styled with tall greenery, a Be You mug at medium height and low daisies for a varied silhouette", url: "https://www.pinterest.com/pin/423268065003367864/", label: "Different Heights on a Tiered Tray" },
  varyShapes: { src: "vary-shapes", w: 2244, h: 2992, alt: "Two-tier wood tray mixing a fabric gift bag, wood letter blocks, house number tags and round wood beads for varied shapes", url: "https://www.pinterest.com/pin/155303887981286712/", label: "Mixed Shapes on a Tiered Tray" },
  texture: { src: "texture", w: 900, h: 1125, alt: "Gold two-tier tray mixing roses, a blue mason jar cup, a white lantern, wood beads and a burlap flower for layered texture", url: "https://www.pinterest.com/pin/389842911517417647/", label: "Layered Textures on a Tiered Tray" },
  kitchenCoffee: { src: "kitchen-coffee", w: 1350, h: 1800, alt: "White two-tier tray styled as a coffee station with a coffee sign, a fresh brewed coffee book stack, wood beads and a burlap rose", url: "https://www.pinterest.com/pin/833165999843377735/", label: "Cozy Coffee Tray Styling" },
  kitchenBaking: { src: "kitchen-baking", w: 705, h: 940, alt: "Three-tier wood tray styled with a whisk, sugar packets, spice jars, twine and tea bags for a baking and pantry theme", url: "https://www.pinterest.com/pin/25684660372699532/", label: "Baking Themed Tiered Tray" },
  springTray: { src: "spring-tray", w: 736, h: 1104, alt: "Three-tier wood tray styled with a Hello Spring sign, white tulips, pastel speckled eggs and a small house for spring", url: "https://www.pinterest.com/pin/7036943163542963/", label: "Spring Tiered Tray Styling" },
  summerTray: { src: "summer-tray", w: 700, h: 933, alt: "Two-tier white tray styled with lemons, a Squeeze bowl, a lemon slice dish and yellow wildflowers for summer", url: "https://www.pinterest.com/pin/205758276722917643/", label: "Lemon Themed Summer Tray" },
  fallTray: { src: "fall-tray", w: 720, h: 1080, alt: "Three-tier black tray styled with knitted pumpkins, Hot Cocoa mugs, plaid scarves and a sweater weather is better together sign", url: "https://www.pinterest.com/pin/135459901288174457/", label: "Cozy Fall Tiered Tray" },
  christmasTray: { src: "christmas-tray", w: 768, h: 1273, alt: "Three-tier wood tray styled with a Cozy and Bright sign, a Merry Christmas mug, pinecones, candy canes and string lights", url: "https://www.pinterest.com/pin/4599934531235555200/", label: "Christmas Tiered Tray Styling" },
  greenery: { src: "greenery", w: 500, h: 625, alt: "Two-tier gray tray styled with a pink faux sunflower, trailing succulents, a home sign and a wreath in the background", url: "https://www.pinterest.com/pin/960885270513915666/", label: "Greenery on a Tiered Tray" },
  signsQuotes: { src: "signs-quotes", w: 1024, h: 1536, alt: "Whitewashed three-tier tray stacked with multiple farmhouse signs including Y'all Come Eat and Happiness Is Homemade", url: "https://www.pinterest.com/pin/4608449130675021440/", label: "Farmhouse Signs on a Tiered Tray" },
  formula321: { src: "formula-3-2-1", w: 720, h: 731, alt: "Three-tier wood tray with a Hello Fall sign on top, a sweater weather pillow in the middle and Farm Fresh Pumpkins books on the bottom level", url: "https://www.pinterest.com/pin/695383998746754742/", label: "Three Distinct Tiered Tray Levels" },
  smallSpace: { src: "small-space", w: 3024, h: 4032, alt: "Two-tier wood and metal tray styled as an entryway display with a Welcome sign, Home Sweet Home sign, a bird nest and a birdhouse", url: "https://www.pinterest.com/pin/355432595609938157/", label: "Tiered Tray in an Entryway" },
  commonMistakes: { src: "common-mistakes", w: 564, h: 932, alt: "Two-tier tray crowded with dozens of small bee and sunflower figurines, gnomes and signs illustrating a busy, over-decorated display", url: "https://www.pinterest.com/pin/15481192463555134/", label: "An Overly Busy Tiered Tray" },
  likeADesigner: { src: "like-a-designer", w: 564, h: 752, alt: "Two-tier gray tray styled with a Home house sign, a Blessed sign, a ceramic bird, lavender and a small watering can", url: "https://www.pinterest.com/pin/703756188634178/", label: "Balanced Designer-Style Tiered Tray" },
  easyFormula: { src: "easy-formula", w: 1024, h: 1536, alt: "Two-tier wood tray with a candle, ceramic house and pinecones on top and a mug, jar and pinecone on the bottom level", url: "https://www.pinterest.com/pin/4605493664480150912/", label: "Simple Two-Level Tray Formula" },
  finalThoughts: { src: "final-thoughts", w: 500, h: 709, alt: "Black three-tier metal tray styled with a green teapot, a heart sign, a wood birdhouse and trailing greenery on a kitchen counter", url: "https://www.pinterest.com/pin/16395986140446961/", label: "Finished Tiered Tray Display" },
};

// No cropping: every image renders at its real, original pixel ratio.
// Served as AVIF first, WebP second, original JPEG as the final fallback —
// see picture() in build.js for the shared <picture> markup.
function photo(key) {
  const p = PIN[key];
  return `<figure>
      ${picture({ dir: "tiered-tray-styling", src: p.src, alt: p.alt, w: p.w, h: p.h, className: "article-photo" })}
      <figcaption>Photo via <a href="${p.url}" target="_blank" rel="nofollow noopener">Pinterest — ${p.label}</a></figcaption>
    </figure>`;
}

const body = `
<p>A tiered tray can make a kitchen counter, coffee station, dining table, or bathroom feel finished in minutes. But how to style a tiered tray without making it look like you emptied a junk drawer onto three levels? That takes a little strategy.</p>
<p>I have styled plenty of small decorative displays, and I have learned that the trick comes down to height, balance, texture, and restraint. You do not need twenty tiny decorations. You need a few pieces that work together.</p>
<blockquote><p>&ldquo;Good design is as little design as possible.&rdquo;</p><cite>&mdash; Frank Chimero, The Shape of Design</cite></blockquote>
<p>That idea fits tiered tray decorating surprisingly well. The tray already gives you layers, so your job involves adding interest without creating visual chaos.</p>
${photo("hero")}

<h2>What Is a Tiered Tray and Why Does It Work So Well?</h2>
<p>A tiered tray uses two or more levels to display small decorative or practical items vertically. You can find round, square, wood, metal, farmhouse, rustic, modern, and even vintage-inspired versions.</p>
<p>The vertical structure gives you something a normal tray cannot provide: height without taking up much counter space.</p>
<p>That makes a tiered tray especially useful when you decorate a small kitchen or apartment. Instead of spreading everything across your counter, you stack the display upward.</p>
<p>Why do people love tiered tray decor?</p>
<p>Because it solves a very common decorating problem. Small objects often look disconnected when you place them around a room individually.</p>
<p>A tiered tray pulls those little pieces into one intentional arrangement.</p>
<p>You can use one for:</p>
<ul>
  <li>Kitchen counter decor</li>
  <li>Coffee station decor</li>
  <li>Dining table centerpieces</li>
  <li>Bathroom counter decor</li>
  <li>Entryway styling</li>
  <li>Seasonal decorations</li>
  <li>Everyday farmhouse decor</li>
  <li>Cottage style displays</li>
  <li>Rustic kitchen decor</li>
  <li>Holiday decorating</li>
</ul>
<p>I particularly like tiered trays for small seasonal updates. You can keep the tray itself year round and simply swap pumpkins for pinecones, or flowers for ornaments, when the season changes.</p>
${photo("whatIsTieredTray")}

<h2>How Do You Style a Tiered Tray Without Making It Look Cluttered?</h2>
<p>The easiest answer involves thinking about the tray as one composition rather than several separate shelves.</p>
<p>Each level should connect visually with the others. You want the eye to move from the bottom to the middle and then toward the top.</p>
<p>I usually start with three questions:</p>
<p>What does this tray need to do?</p>
<p>What colors already exist nearby?</p>
<p>Which pieces can create different heights?</p>
<p>Once you answer those questions, styling becomes much easier.</p>
<blockquote><p>&ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;</p><cite>&mdash; Steve Jobs, The New York Times, 2003</cite></blockquote>
<p>A tiered tray needs to work visually and practically. If you place a giant decorative object on the bottom level and block everything behind it, you have technically decorated the tray. You have also created a tiny obstacle course.</p>
<p>Keep the display functional, especially in a kitchen.</p>
${photo("withoutClutter")}

<h2>How to Style a Tiered Tray With the Right Base</h2>
<p>Before you add decorations, look at the tray itself.</p>
<p>The material and shape should influence the rest of your styling choices. A dark metal tray can handle warm wood, cream ceramics, and greenery. A pale wooden tray can create a softer foundation for neutral ceramics and natural textures.</p>
<h3>Choose a color palette first</h3>
<p>I recommend choosing three to four main colors.</p>
<p>For a cozy neutral tray, you could combine:</p>
<ul>
  <li>Cream</li>
  <li>Beige</li>
  <li>Warm wood</li>
  <li>Soft green</li>
</ul>
<p>For a farmhouse kitchen, try:</p>
<ul>
  <li>White</li>
  <li>Black</li>
  <li>Natural wood</li>
  <li>Greenery</li>
</ul>
<p>For a fall tray, you could use:</p>
<ul>
  <li>Terracotta</li>
  <li>Cream</li>
  <li>Brown</li>
  <li>Muted green</li>
</ul>
<p>You do not need every color in every object. Repeat the colors across different levels instead.</p>
<p>That repetition creates cohesion.</p>
${photo("colorPalette")}
<h3>Let the surroundings guide you</h3>
<p>Your tray should relate to the room around it.</p>
<p>If your kitchen already features warm wood cabinets and brass hardware, a tray filled with icy blue accessories might feel disconnected. You can still use blue, but I would introduce it through one or two smaller accents rather than making it the entire theme.</p>
${photo("surroundings")}

<h2>How to Style a Tiered Tray With Different Heights</h2>
<p>Height makes or breaks a tiered tray.</p>
<p>The tray itself already creates vertical levels, but your decorations still need different heights to keep the composition interesting.</p>
<p>I normally combine tall, medium, and low pieces.</p>
<p>For example, place a small vase or bottle on one level, a little sign or jar on another, and a short bowl or candle on the remaining space.</p>
<h3>Use the triangle method</h3>
<p>One of my favorite tricks involves creating a loose visual triangle.</p>
<p>Imagine three objects forming a triangle across the tray:</p>
<ul>
  <li>A taller item at the back</li>
  <li>A medium item toward the opposite side</li>
  <li>A shorter item toward the front</li>
</ul>
<p>This arrangement keeps the eye moving.</p>
<p>You do not need mathematical precision. Nobody needs a protractor for kitchen decor. Just avoid placing every tall item in one straight line.</p>
${photo("differentHeights")}
<h3>Vary the shapes too</h3>
<p>Height alone cannot save a display filled with identical objects.</p>
<p>Mix:</p>
<ul>
  <li>Round jars</li>
  <li>Rectangular signs</li>
  <li>Small bowls</li>
  <li>Narrow bottles</li>
  <li>Mini vases</li>
  <li>Wooden objects</li>
  <li>Greenery</li>
</ul>
<p>The contrast between shapes creates visual interest without requiring more color.</p>
${photo("varyShapes")}

<h2>How to Style a Tiered Tray With Texture</h2>
<p>Texture gives a small display personality.</p>
<p>This matters especially when you use a neutral color palette. Beige, cream, and white can look beautiful, but they can also look flat if every object has the same smooth finish.</p>
<p>I like combining wood, ceramic, glass, metal, and greenery.</p>
<p>A wooden bead strand can soften a metal tray. A ceramic mug can add weight beside delicate greenery. A glass jar can introduce a little transparency.</p>
<blockquote><p>&ldquo;Texture is one of the most important elements in creating visual interest.&rdquo;</p><cite>&mdash; Kelly Hoppen, Kelly Hoppen Design</cite></blockquote>
<p>You can create a layered look without adding more objects simply by changing the materials.</p>
${photo("texture")}

<h2>How to Style a Tiered Tray for a Kitchen</h2>
<p>The kitchen gives you one of the easiest places to style a tiered tray because you can combine decoration with useful items.</p>
<p>A coffee station makes an especially good spot.</p>
<h3>Create a cozy coffee tray</h3>
<p>Try placing a small coffee mug, a miniature coffee sign, a jar of sugar, and a little plant or faux greenery on the different levels.</p>
<p>Keep frequently used items toward the front so you can grab them easily.</p>
<p>I also like adding one wooden element because wood instantly makes a coffee display feel warmer.</p>
${photo("kitchenCoffee")}
<h3>Try a baking themed tray</h3>
<p>For a baking corner, use:</p>
<ul>
  <li>Small measuring cups</li>
  <li>Wooden spoons</li>
  <li>Mini rolling pins</li>
  <li>Ceramic jars</li>
  <li>Small recipe signs</li>
  <li>Faux greenery</li>
</ul>
<p>You can create the look without filling every inch.</p>
<p>Leave some empty space. Empty space gives your decorations room to breathe and makes the whole tray look more intentional.</p>
${photo("kitchenBaking")}

<h2>How to Style a Tiered Tray for Different Seasons</h2>
<p>One of the biggest advantages of a tiered tray involves how easily you can change it throughout the year.</p>
<p>You do not need to buy a completely new display every season.</p>
<h3>Spring tiered tray ideas</h3>
<p>Use soft colors and natural details.</p>
<p>Think:</p>
<ul>
  <li>Small faux flowers</li>
  <li>Ceramic birds</li>
  <li>Mini eggs</li>
  <li>Pastel mugs</li>
  <li>Small greenery</li>
  <li>Light wood accents</li>
</ul>
<p>Keep the palette soft and fresh.</p>
${photo("springTray")}
<h3>Summer tiered tray ideas</h3>
<p>Summer gives you more room for brighter accents.</p>
<p>Try lemons, citrus colors, small floral arrangements, blue and white ceramics, or lightweight greenery.</p>
<p>A simple lemon themed tray can look surprisingly cheerful in a kitchen.</p>
${photo("summerTray")}
<h3>Fall tiered tray ideas</h3>
<p>Fall styling works beautifully with warm neutrals.</p>
<p>Use:</p>
<ul>
  <li>Mini pumpkins</li>
  <li>Amber jars</li>
  <li>Dried foliage</li>
  <li>Wooden signs</li>
  <li>Cinnamon inspired colors</li>
  <li>Warm ceramic pieces</li>
</ul>
<p>I usually prefer muted orange and terracotta over extremely bright orange because they blend more naturally with neutral interiors.</p>
${photo("fallTray")}
<h3>Christmas tiered tray ideas</h3>
<p>For Christmas, combine greenery with a few seasonal accents.</p>
<p>You could use:</p>
<ul>
  <li>Mini ornaments</li>
  <li>Bottle brush trees</li>
  <li>Small houses</li>
  <li>Pinecones</li>
  <li>Red berries</li>
  <li>Christmas mugs</li>
  <li>Faux evergreen branches</li>
</ul>
<p>The key involves keeping the Christmas pieces small. Your tiered tray should feel festive rather than like Santa's storage unit.</p>
${photo("christmasTray")}

<h2>How to Style a Tiered Tray With Greenery</h2>
<p>Greenery remains one of my favorite additions because it fills awkward gaps without making the display feel heavy.</p>
<p>You can use real plants if the location provides enough light, but faux greenery gives you much more flexibility.</p>
<p>Small eucalyptus stems, faux boxwood, olive branches, and trailing greenery can all work beautifully.</p>
<p>Where should greenery go?</p>
<p>Place greenery where you need movement.</p>
<p>A small stem can soften the edge of a tray. A trailing piece can hang slightly over the side. A compact plant can fill an empty corner.</p>
<p>Avoid putting greenery everywhere.</p>
<p>If every level contains a plant, you lose the contrast that makes greenery interesting in the first place.</p>
${photo("greenery")}

<h2>How to Style a Tiered Tray With Signs and Quotes</h2>
<p>Small signs can add personality, especially in farmhouse or cottage style spaces.</p>
<p>However, signs can quickly take over.</p>
<p>I recommend using one main sign rather than filling every level with words.</p>
<p>Choose a short phrase that supports the theme.</p>
<p>For a coffee station, something like &ldquo;But First Coffee&rdquo; makes sense. For a kitchen, a simple food or family phrase can work. For seasonal styling, use one small seasonal message.</p>
<p>The smaller your tray, the smaller your signs should become.</p>
<p>That sounds obvious, but oversized signs cause one of the most common tiered tray styling mistakes.</p>
${photo("signsQuotes")}

<h2>How to Style a Tiered Tray With the 3 2 1 Formula</h2>
<p>If you ever stare at an empty tray and think, &ldquo;Where do I even start?&rdquo; try a simple 3 2 1 approach.</p>
<p>Use:</p>
<p>Three small decorative elements</p>
<p>Two medium pieces</p>
<p>One larger focal point</p>
<p>You can adjust the numbers depending on the tray size.</p>
<p>The idea matters more than the exact count. Create one visual anchor, then support it with smaller pieces.</p>
<h3>Build each level differently</h3>
<p>Do not make every level look identical.</p>
<p>For example, the bottom could hold a small bowl and greenery. The middle could feature a mug and a sign. The top could hold a vase with a short branch.</p>
<p>Different arrangements create a more collected look.</p>
${photo("formula321")}

<h2>How to Style a Tiered Tray in a Small Space</h2>
<p>Small spaces benefit from tiered trays because they use vertical space efficiently.</p>
<p>If you live in an apartment or have limited kitchen counter space, you can use a small two-tier tray rather than a large three-tier version.</p>
<p>Place it beside:</p>
<ul>
  <li>A coffee machine</li>
  <li>A kitchen sink</li>
  <li>A fruit bowl</li>
  <li>A cooktop</li>
  <li>A breakfast nook</li>
  <li>A bar cart</li>
</ul>
<p>Just remember one important rule: do not sacrifice working space for decoration.</p>
<p>If you constantly move the tray every time you cook, you probably need to reduce the number of objects or relocate the tray.</p>
<p>Good decor should make your space feel better, not make breakfast harder.</p>
${photo("smallSpace")}

<h2>Common Tiered Tray Styling Mistakes</h2>
<p>Even experienced decorators can overdo a tiered tray.</p>
<p>I know I have done it. You find a cute little ceramic piece, then another, then another, and suddenly the tray looks like a miniature gift shop.</p>
<h3>Using too many small objects</h3>
<p>Small decorations tempt you because they seem harmless.</p>
<p>But twelve tiny objects can create more visual clutter than three larger pieces.</p>
<p>Choose fewer pieces and give them space.</p>
<h3>Ignoring the background</h3>
<p>Your tray does not exist in isolation.</p>
<p>Look at the backsplash, countertop, cabinets, wall art, and nearby appliances.</p>
<p>If your kitchen already contains several patterns, keep the tray quieter.</p>
<h3>Making every object the same height</h3>
<p>Uniform height creates a flat composition.</p>
<p>Mix heights instead.</p>
<h3>Using too many colors</h3>
<p>A chaotic color palette can make even beautiful objects look unrelated.</p>
<p>Stick with a controlled palette and repeat those colors across the levels.</p>
<h3>Decorating without considering function</h3>
<p>This mistake happens often in kitchens.</p>
<p>If you use the tray for coffee supplies, keep those supplies accessible. If you use it purely for decoration, place it somewhere that does not interfere with daily tasks.</p>
${photo("commonMistakes")}

<h2>How to Style a Tiered Tray Like a Designer</h2>
<p>You do not need expensive accessories to create a polished display.</p>
<p>You need visual balance.</p>
<p>Start with your largest piece. Then add medium pieces around it. Finish with smaller accents that fill gaps.</p>
<p>Step back after every few additions.</p>
<p>Why? Because you notice clutter more easily from a distance than when you stand two inches away from the tray.</p>
<p>I also recommend taking a quick photo with your phone. Your camera often exposes awkward gaps, crowded corners, and competing colors that your eyes ignore.</p>
<blockquote><p>&ldquo;The details are not the details. They make the design.&rdquo;</p><cite>&mdash; Charles Eames</cite></blockquote>
<p>That principle works perfectly here. The little details matter, but only when they support the larger composition.</p>
${photo("likeADesigner")}

<h2>Easy Tiered Tray Styling Formula to Try Today</h2>
<p>If you want a simple starting point, try this combination:</p>
<h3>Bottom level</h3>
<p>Place your largest decorative piece here.</p>
<p>A small bowl, jar, pitcher, or chunky ceramic object works well.</p>
<h3>Middle level</h3>
<p>Add something functional or visually interesting.</p>
<p>A mug, candle, small sign, or medium plant can work nicely.</p>
<h3>Top level</h3>
<p>Keep the top lighter.</p>
<p>Use a small vase, greenery, bottle, or seasonal accent.</p>
<p>Then add one or two tiny details.</p>
<p>Finally, remove one object.</p>
<p>Seriously.</p>
<p>I often find that the tray looks better after I take one thing away. That final edit creates the breathing room that makes the arrangement feel intentional.</p>
${photo("easyFormula")}

<h2>Final Thoughts on How to Style a Tiered Tray</h2>
<p>Learning how to style a tiered tray does not require a huge collection of decorations or a perfect eye for design. Start with a simple color palette, create different heights, mix textures, and give each level a purpose.</p>
<p>Use the tray as one composition instead of treating each shelf as a separate decorating project. Add greenery for movement, wood for warmth, ceramics for structure, and one focal piece to anchor everything.</p>
<p>Most importantly, do not feel pressured to fill every empty spot.</p>
<p>A beautifully styled tiered tray should feel collected, useful, and relaxed. If you can still see some of the tray, reach the things you actually use, and enjoy looking at it every time you walk past, you probably got it right.</p>
<p>And if you add one too many little pumpkins or mugs?</p>
<p>Well, there is always tomorrow's decorating edit.</p>
${photo("finalThoughts")}
`;

module.exports = { body };
