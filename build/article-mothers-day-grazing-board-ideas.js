// Body content for "14 Mother's Day Grazing Board Ideas Worth the
// Effort". Photos carried over from the source article; all 14 ideas
// have a photo in the source, so none were dropped. The source's
// fabricated celebrity-chef "quotes" scattered through the text were
// cut entirely — not part of this site's voice. Condensed 3 padded
// intro sections and a 4-step styling walkthrough down to one short
// styling section with no photo, since the source's remaining photos
// weren't tied to a specific idea.

const { picture } = require("./picture-helper.js");

function splitExt(filename) {
  const i = filename.lastIndexOf(".");
  return { base: filename.slice(0, i), ext: filename.slice(i + 1) };
}

function photo(src, alt, w, h) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "mothers-day-grazing-board-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
    </figure>`;
}

function pinPhoto(src, alt, w, h, pinUrl, label) {
  const { base, ext } = splitExt(src);
  return `<figure>
      ${picture({ dir: "mothers-day-grazing-board-ideas", src: base, ext, alt, w, h, className: "article-photo" })}
      <figcaption>Photo via <a href="${pinUrl}" target="_blank" rel="nofollow noopener">Pinterest — ${label}</a></figcaption>
    </figure>`;
}

const ideas = [
  {
    n: "01",
    title: "The Brunch-Inspired Board",
    paras: [
      "If Mom loves brunch, give her the whole spread in grazing form instead of a single plate. Mini pastries, fruit, soft cheese and a few savory bites cover every craving at once without anyone having to choose.",
      "The trick to keeping it from feeling heavy is abundance without density &mdash; lots of small things spread out, rather than a few large dishes crowding the board.",
      "Small ramekins do more for the presentation than people expect. A little jam, honey or whipped butter in its own tiny bowl instantly reads as more put-together than the same thing squeezed onto the board directly.",
    ],
    photo: pinPhoto("brunch-inspired.jpg", "Brunch-inspired grazing board with mini pastries, fruit, soft cheese and small ramekins of jam and honey", 574, 1024, "https://www.pinterest.com/pin/71705819062127114/", "Brunch-Inspired Mother's Day Grazing Board"),
  },
  {
    n: "02",
    title: "The Rosé-Inspired Board",
    paras: [
      "This one leans effortlessly chic &mdash; soft blush tones, light and feminine flavors, built around the same color story a glass of rosé already lives in.",
      "Keeping the palette tight to soft pinks, ivory and light reds is what makes it feel curated instead of just pink for the sake of pink. Strawberries, pink-tinged cheeses and pale crackers all fit naturally.",
      "Pour a chilled glass alongside it and the whole spread does double duty as both food and centerpiece, especially for an afternoon gathering with nowhere to rush off to.",
    ],
    photo: pinPhoto("rose-inspired.jpg", "Rosé-inspired grazing board in soft blush, pink and ivory tones with strawberries and pale crackers", 574, 1024, "https://www.pinterest.com/pin/3870349675507592/", "Rosé-Inspired Mother's Day Grazing Board"),
  },
  {
    n: "03",
    title: "The Mediterranean Board",
    paras: [
      "This is the board that reliably impresses without much extra effort &mdash; hummus, olives, feta, roasted vegetables and warm pita cover a lot of ground in one spread.",
      "Layering the dips into small bowls scattered across the board gives it real structure, rather than letting everything blur together in one flat layer.",
      "The flavors land as vibrant and healthy but still genuinely indulgent, which is a balance that works especially well for a Mother's Day table.",
    ],
    photo: pinPhoto("mediterranean.jpg", "Mediterranean grazing board with hummus, olives, feta, roasted vegetables and warm pita bread", 736, 736, "https://www.pinterest.com/pin/26036504092471726/", "Mediterranean Mother's Day Grazing Board"),
  },
  {
    n: "04",
    title: "The Classic Floral Board",
    paras: [
      "This is the board that screams spring the second it hits the table &mdash; soft pinks and whites, delicate cheeses, berries, and edible flowers tucked in throughout.",
      "Arranging a few real or edible flowers around the edges frames the whole board and does more to elevate it than almost anything placed in the center.",
      "The soft, romantic palette pairs naturally with sweet and creamy flavors, which makes this one equally at home at a brunch table or an afternoon tea setup.",
    ],
    photo: pinPhoto("classic-floral.jpg", "Floral-themed grazing board with soft pink and white cheeses, berries and edible flowers arranged around the edges", 683, 1024, "https://www.pinterest.com/pin/8373949303008556/", "Classic Floral Mother's Day Grazing Board"),
  },
  {
    n: "05",
    title: "The Luxe Cheese Lover's Board",
    paras: [
      "For a mom who genuinely loves cheese, this one skips the extras and goes deep instead &mdash; four or five well-chosen cheeses, balanced out with honey, nuts and a few dried fruits.",
      "Pre-slicing at least one wheel removes the hesitation that stops people from being the first to cut into an untouched cheese &mdash; once one is already open, the whole board gets used.",
      "This board is built around depth of flavor rather than sheer volume, which makes it feel considered instead of just generously stocked.",
    ],
    photo: pinPhoto("cheese-lovers.jpg", "Luxe cheese board with four or five cheese varieties, honey, nuts and dried fruit", 683, 1024, "https://www.pinterest.com/pin/8514686791782145/", "Luxe Cheese Lover's Mother's Day Grazing Board"),
  },
  {
    n: "06",
    title: "The Garden Party Board",
    paras: [
      "Picture hosting outside with soft music playing in the background &mdash; that's the exact feeling this board is built around.",
      "Fresh herbs, bright produce, light cheeses and edible flowers keep everything feeling crisp and seasonal rather than heavy.",
      "It's an especially strong fit for an outdoor Mother's Day celebration, where the food should feel as relaxed and unhurried as the setting itself.",
    ],
    photo: pinPhoto("garden-party.jpg", "Garden party grazing board with fresh herbs, bright produce, light cheeses and edible flowers", 819, 1024, "https://www.pinterest.com/pin/10273905395508175/", "Garden Party Mother's Day Grazing Board"),
  },
  {
    n: "07",
    title: "The Breakfast-in-Bed Board",
    paras: [
      "For maximum emotional impact, this one gets served on a tray, straight to bed, scaled down to fit without losing any of its abundance.",
      "Mini pastries, fruit, a small pot of coffee or tea, and a couple of soft cheeses keep it compact but still generous enough to feel like an occasion.",
      "The surprise of it arriving unannounced is most of the appeal &mdash; the tray itself is almost as meaningful as what's actually on it.",
    ],
    photo: pinPhoto("breakfast-in-bed.jpg", "Breakfast-in-bed grazing board on a tray with mini pastries, fruit, cheese and a small pot of tea", 404, 539, "https://www.pinterest.com/pin/196962183695026623/", "Breakfast-in-Bed Mother's Day Grazing Board"),
  },
  {
    n: "08",
    title: "The High Tea Dessert Board",
    paras: [
      "For a mom who loves refined sweets over anything savory, this board wins every time &mdash; mini tarts, macarons, scones and delicate cookies arranged with real intention.",
      "Layering the desserts at varying heights, using a cake stand if one's available, adds a sense of drama that a flat spread can't match.",
      "It fits a mid-afternoon celebration especially well, paired with tea or a light sparkling drink instead of a full meal.",
    ],
    photo: pinPhoto("high-tea-dessert.jpg", "High tea dessert grazing board with mini tarts, macarons and scones layered at varying heights on a cake stand", 574, 1024, "https://www.pinterest.com/pin/1829656095361978/", "High Tea Dessert Mother's Day Grazing Board"),
  },
  {
    n: "09",
    title: "The Soft Neutrals Board",
    paras: [
      "For a mom who gravitates toward neutral decor, matching the food palette to that same aesthetic makes the whole board feel like an extension of her taste.",
      "Sticking to creams, tans and soft greens &mdash; pale cheeses, almonds, light crackers, a few sprigs of herb &mdash; keeps the result calm and genuinely curated.",
      "Simplicity ends up reading as more expensive than abundance here, which is a quieter effect than most of the other boards on this list but no less intentional.",
    ],
    photo: pinPhoto("soft-neutrals.jpg", "Grazing board styled in soft neutral tones of cream, tan and sage with pale cheeses and almonds", 1024, 999, "https://www.pinterest.com/pin/1970393582773990/", "Soft Neutrals Mother's Day Grazing Board"),
  },
  {
    n: "10",
    title: "The Chocolate and Fruit Dessert Board",
    paras: [
      "Not every Mother's Day board needs meat and cheese on it at all &mdash; sometimes dessert is exactly the point.",
      "Rich chocolate pieces, truffles and a drizzle sit alongside fresh berries and sliced fruit, which keeps the whole thing from tipping into overly indulgent territory.",
      "The fruit does more work than it gets credit for &mdash; it lightens the richness of the chocolate just enough to keep every bite interesting instead of heavy.",
    ],
    photo: pinPhoto("chocolate-fruit.jpg", "Chocolate and fruit dessert grazing board with truffles, chocolate pieces, berries and sliced fruit", 1024, 1024, "https://www.pinterest.com/pin/168814686030223717/", "Chocolate and Fruit Dessert Grazing Board"),
  },
  {
    n: "11",
    title: "The Elegant Savory Board",
    paras: [
      "For a mom who'd rather skip sweets entirely, this board leans fully into savory richness &mdash; cured meats, bold cheeses, olives and pickled vegetables.",
      "The result feels bold and confident rather than delicate, and it pairs especially well with a sparkling drink instead of anything sweet.",
      "Savory spreads tend to slow a gathering down in a good way &mdash; people nibble more deliberately, which naturally stretches out the conversation around the table.",
    ],
    photo: pinPhoto("savory-board.jpg", "Elegant savory grazing board with cured meats, bold cheeses, olives and pickled vegetables", 575, 1024, "https://www.pinterest.com/pin/848224911110402270/", "Elegant Savory Mother's Day Grazing Board"),
  },
  {
    n: "12",
    title: "The Tea Time Board",
    paras: [
      "This one leans soft and a little vintage &mdash; delicate cookies, finger sandwiches, fresh berries and a few light pastries arranged without crowding.",
      "Pulling out delicate serving dishes, even mismatched china, adds to the feeling instead of taking away from it. The imperfection reads as collected, not sloppy.",
      "It pairs naturally with tea or a light sparkling drink, and works especially well for a smaller, quieter celebration rather than a big crowd.",
    ],
    photo: pinPhoto("tea-time.jpg", "Tea time grazing board with delicate cookies, finger sandwiches and fresh berries on mismatched china", 683, 1024, "https://www.pinterest.com/pin/33847434696121784/", "Tea Time Mother's Day Grazing Board"),
  },
  {
    n: "13",
    title: "The Healthy and Fresh Board",
    paras: [
      "Some moms genuinely prefer lighter options, and this board delivers that without sacrificing any of the visual appeal the rest of the list has.",
      "Fresh fruit, raw vegetables, nuts and lighter cheeses, grouped by color rather than scattered randomly, keep the whole thing looking as vibrant as it tastes.",
      "Healthy doesn't have to mean boring here &mdash; it just means a little more intentional about what goes on the board in the first place.",
    ],
    photo: pinPhoto("healthy-fresh.jpg", "Healthy and fresh grazing board with raw vegetables, fruit and nuts grouped by color", 572, 1024, "https://www.pinterest.com/pin/348747564918528900/", "Healthy and Fresh Mother's Day Grazing Board"),
  },
  {
    n: "14",
    title: "The Personalized Board",
    paras: [
      "This is the one worth building last, and arguably the one that matters most &mdash; instead of following any trend, build the board entirely around what Mom actually likes.",
      "Loves dark chocolate? Add more of it. Avoids dairy? Lean into fruit and nuts instead. Has a nostalgic childhood favorite? That earns a spot on the board too, trends aside.",
      "Personalization is what turns a pretty board into a meaningful one &mdash; the ingredients matter less than the fact that someone paid attention to what she'd actually want.",
    ],
    photo: pinPhoto("personalized.jpg", "Personalized grazing board built around a mom's specific favorite foods and nostalgic treats", 683, 1024, "https://www.pinterest.com/pin/1052012794318577253/", "Personalized Mother's Day Grazing Board"),
  },
];

function ideaBlock(idea) {
  const paras = idea.paras.map((p) => `<p>${p}</p>`).join("\n      ");
  return `
    <div class="idea-heading"><span class="numeral" aria-hidden="true">${idea.n}</span><h2>${idea.title}</h2></div>
    ${paras}
    ${idea.photo || ""}`;
}

const body = `
<p>A good grazing board feels different from a regular meal. Instead of individual plates, everyone gathers around one spread, which slows people down and turns the meal into something closer to a conversation than a routine.</p>
<p>That's exactly the effect worth chasing for Mother's Day &mdash; something that looks thoughtful and feels intentional, built from ingredients that don't need to be fancy to come together beautifully.</p>
${photo("hero.jpg", "Elegant Mother's Day grazing board with cheese, fruit, flowers and small bowls arranged with intention", 1312, 736)}

<h2>What Actually Makes a Board Feel Elegant</h2>
<p>Scattering cheese and fruit across a board doesn't automatically make it elegant &mdash; it needs real structure. A tight color story keeps the whole thing looking styled instead of thrown together: soft pinks and whites read romantic, neutrals with greenery read classic, pastels read spring-ready.</p>
<p>Height matters just as much. A flat board reads as boring no matter how good the ingredients are, while stacked crackers, small risers, or a cake stand add the dimension that makes a spread look considered. And every elegant board needs balance &mdash; something creamy, something crunchy, something sweet, something savory. Skip one of those and the board starts to feel incomplete, no matter how much food is actually on it.</p>
${pinPhoto("intro-special.jpg", "Mother's Day grazing board styled with a tight color story, varied heights and balanced sweet and savory elements", 683, 1024, "https://www.pinterest.com/pin/1052012794318582702/", "Elegant Mother's Day Grazing Board Styling")}

<h2>14 Mother's Day Grazing Board Ideas</h2>
${ideas.map(ideaBlock).join("\n")}

<h2>A Few Styling Basics That Make Any Board Look Better</h2>
<p>Whichever board gets built, the assembly order matters more than people expect. Small bowls go down first &mdash; for dips, olives, nuts &mdash; since they create structure everything else gets built around. Larger cheese wedges go in next, spread into different corners rather than crowded into the center.</p>
<p>Meat should never lie flat. Folding, rolling, or arranging it into small rosettes adds texture that a flat slice just can't. From there, small fillers like berries, nuts or crackers go into every visible gap, since empty space is what makes a board read as unfinished. None of it requires imported ingredients, either &mdash; presentation does far more work than price ever does.</p>

<h2>Final Thoughts</h2>
<p>An elegant Mother's Day board doesn't require perfection, just intention &mdash; a tight color story, a little height, balanced flavors, and ingredients that actually suit the person it's for.</p>
<p>Mom won't remember whether the brie was triple cream or the regular kind. She'll remember that someone put thought into making something beautiful just for her, and that's really the whole point.</p>
`;

module.exports = { body };
