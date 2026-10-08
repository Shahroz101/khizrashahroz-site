// Local build script — generates the secondary static pages into ../dist/
// Run with: node build.js
// Output is plain static HTML; no build step is required on the server.
const fs = require("fs");
const path = require("path");
const expensiveLivingRoomArticle = require("./article-living-room.js");
const masonJarArticle = require("./article-mason-jar.js");
const aboveFridgeArticle = require("./article-above-fridge.js");
const livingRoomColorsArticle = require("./article-living-room-colors.js");
const toiletTankArticle = require("./article-toilet-tank.js");
const coffeeTableArticle = require("./article-coffee-table.js");
const smallDiningRoomArticle = require("./article-small-dining-room.js");
const sofaWallArticle = require("./article-sofa-wall.js");
const nurseryArticle = require("./article-nursery.js");
const sofaIdeasArticle = require("./article-sofa-ideas.js");
const kitchenShelfArticle = require("./article-kitchen-shelf.js");
const entrywayArticle = require("./article-entryway.js");
const laundryRoomArticle = require("./article-laundry-room.js");
const sageGreenBedroomArticle = require("./article-sage-green-bedroom.js");
const whiteFarmhouseDecorArticle = require("./article-white-farmhouse-decor.js");
const moodyDarkBedroomArticle = require("./article-moody-dark-bedroom.js");
const cozyApartmentArticle = require("./article-cozy-apartment-decor.js");
const powderRoomArticle = require("./article-powder-room-decor.js");
const aboveToiletArticle = require("./article-above-toilet-decor.js");
const tieredTrayArticle = require("./article-tiered-tray-styling.js");
const pantryArticle = require("./article-pantry-organization.js");
const doughBowlArticle = require("./article-winter-dough-bowl-decor.js");
const mantelDecorArticle = require("./article-mantel-decor-ideas.js");
const japandiKitchenArticle = require("./article-japandi-kitchen-decor.js");
const elfOnTheShelfArticle = require("./article-elf-on-the-shelf-ideas.js");
const christmasPorchArticle = require("./article-christmas-porch-decor.js");
const elfOnTheShelfFunAndEasyArticle = require("./article-elf-on-the-shelf-ideas-fun-and-easy.js");
const bathroomStorageArticle = require("./article-bathroom-storage-ideas.js");
const kidsRoomArticle = require("./article-kids-room-design-ideas.js");
const blueFarmhouseBedroomArticle = require("./article-blue-farmhouse-bedroom-decor.js");
const dormWallDecorArticle = require("./article-dorm-wall-decor-ideas.js");
const bohoPaintingArticle = require("./article-boho-painting-ideas.js");
const homeOfficeSetupArticle = require("./article-home-office-setup-tips.js");
const fallBedroomArticle = require("./article-fall-bedroom-ideas.js");
const coffeeBarDecorArticle = require("./article-coffee-bar-decor-ideas.js");
const farmhouseKitchenArticle = require("./article-farmhouse-kitchen-ideas.js");
const gardenPlantsArticle = require("./article-must-have-garden-plants.js");
const readingNookArticle = require("./article-reading-nook-ideas.js");
const modernEntrywayArticle = require("./article-modern-entryway-ideas.js");
const pinkBedroomArticle = require("./article-pink-bedroom-ideas.js");
const timelessKitchenLayoutsArticle = require("./article-timeless-kitchen-layouts.js");
const toddlerRoomArticle = require("./article-toddler-room-ideas.js");
const bedroomCeilingArticle = require("./article-bedroom-ceiling-design-ideas.js");
const smallBedroomPaintColorsArticle = require("./article-small-bedroom-paint-colors.js");
const frontPorchArticle = require("./article-front-porch-ideas.js");
const cottageGardenArticle = require("./article-cottage-garden-ideas.js");
const cozyLivingRoomArticle = require("./article-cozy-living-room-ideas.js");
const dormKitchenArticle = require("./article-dorm-kitchen-ideas.js");
const gamingRoomArticle = require("./article-gaming-room-setup-ideas.js");
const bathroomAccentWallArticle = require("./article-bathroom-accent-wall-ideas.js");
const greenLivingRoomArticle = require("./article-green-living-room-ideas.js");
const cottagecoreStyleArticle = require("./article-cottagecore-style-ideas.js");
const pergolaArticle = require("./article-pergola-ideas.js");
const dessertBoardArticle = require("./article-dessert-board-ideas.js");
const aboveCabinetArticle = require("./article-above-cabinet-decor-ideas.js");
const bathroomShelfArticle = require("./article-bathroom-shelf-decor-ideas.js");
const bathroomDesignTrendsArticle = require("./article-bathroom-design-trends.js");
const coastalLivingRoomArticle = require("./article-coastal-living-room-ideas.js");
const mothersDayGrazingBoardArticle = require("./article-mothers-day-grazing-board-ideas.js");
const kitchenIslandCenterpieceArticle = require("./article-kitchen-island-centerpiece-ideas.js");
const homeGymArticle = require("./article-home-gym-ideas.js");
const texturedWallArticle = require("./article-textured-wall-ideas.js");
const kidsBedroomColorArticle = require("./article-kids-bedroom-color-combinations.js");
const charcuterieCupArticle = require("./article-charcuterie-cup-ideas.js");
const easterBasketStufferArticle = require("./article-easter-basket-stuffer-ideas.js");
const springCraftArticle = require("./article-spring-craft-ideas.js");
const livingRoomLayoutArticle = require("./article-living-room-layout-ideas.js");
const mirrorWallPanellingArticle = require("./article-mirror-wall-panelling-ideas.js");
const openKitchenDesignArticle = require("./article-open-kitchen-design-ideas.js");
const patioTransformationArticle = require("./article-patio-transformation-ideas.js");
const pinkHomeDecorArticle = require("./article-pink-home-decor-ideas.js");
const smallBedroomOrganizationArticle = require("./article-small-bedroom-organization-ideas.js");
const easterTableSettingArticle = require("./article-easter-table-setting-ideas.js");
const teenBoyBedroomArticle = require("./article-teen-boy-bedroom-ideas.js");
const graduationCenterpieceArticle = require("./article-graduation-party-centerpiece-ideas.js");
const diningRoomTrendsArticle = require("./article-dining-room-trends.js");
const makeupVanityArticle = require("./article-makeup-vanity-ideas.js");
const greenBathroomDecorArticle = require("./article-green-bathroom-decor-ideas.js");
const homeOfficeAestheticArticle = require("./article-home-office-aesthetic-ideas.js");
const laundryRoomEffortlessArticle = require("./article-laundry-room-ideas-effortless.js");
const easterWreathArticle = require("./article-easter-wreath-ideas.js");
const winterDiningTableDecorArticle = require("./article-winter-dining-table-decor-ideas.js");
const handcraftedWallDecorArticle = require("./article-handcrafted-wall-decor-ideas.js");
const dessertsInACupArticle = require("./article-desserts-in-a-cup-ideas.js");
const partyTableSetupArticle = require("./article-party-table-setup-ideas.js");
const stackedLaundryRoomArticle = require("./article-stacked-laundry-room-ideas.js");
const bathroomDesignStylesArticle = require("./article-bathroom-design-styles.js");
const kitchenWindowTreatmentArticle = require("./article-kitchen-window-treatment-ideas.js");
const tvStandDecorArticle = require("./article-tv-stand-decor-ideas.js");
const pumpkinCarvingArticle = require("./article-pumpkin-carving-ideas.js");
const fallMantelDecorArticle = require("./article-fall-mantel-decor-ideas.js");
const roundTrayDecorArticle = require("./article-round-tray-decor-ideas.js");
const blackGoldGalleryWallArticle = require("./article-black-gold-gallery-wall-ideas.js");
const springCenterpieceArticle = require("./article-spring-centerpiece-ideas.js");
const mudroomIdeasArticle = require("./article-mudroom-ideas.js");
const sideTableDecorArticle = require("./article-side-table-decor-ideas.js");
const winterWonderlandArticle = require("./article-winter-wonderland-home-decor-ideas.js");
const mothersDayCraftsArticle = require("./article-mothers-day-crafts-for-kids.js");
const bedroomWallDecorArticle = require("./article-bedroom-wall-decor-ideas.js");
const bohoBedroomDecorArticle = require("./article-boho-bedroom-decor-ideas.js");
const smallBackyardPoolArticle = require("./article-small-backyard-pool-ideas.js");
const neutralBedroomArticle = require("./article-neutral-bedroom-ideas.js");
const outdoorKitchenArticle = require("./article-outdoor-kitchen-ideas.js");
const timelessKitchenPaintArticle = require("./article-timeless-kitchen-paint-colors.js");
const tvWallDecorArticle = require("./article-tv-wall-decor-ideas.js");
const textureInHomeDecorArticle = require("./article-texture-in-home-decor.js");
const winterCraftArticle = require("./article-winter-craft-ideas.js");
const christmasBedroomDecorArticle = require("./article-christmas-bedroom-decor-ideas.js");
const bathroomMirrorArticle = require("./article-bathroom-mirror-ideas.js");
const christmasGiftBasketArticle = require("./article-christmas-gift-basket-ideas.js");
const christmasAppetizerArticle = require("./article-christmas-appetizer-ideas.js");
const blackFarmhouseLivingRoomArticle = require("./article-black-farmhouse-living-room-ideas.js");
const diyChristmasGiftArticle = require("./article-diy-christmas-gift-ideas.js");
const farmhouseLivingRoomArticle = require("./article-farmhouse-living-room-ideas.js");
const diyFarmhouseBathroomArticle = require("./article-diy-farmhouse-bathroom-decor.js");
const halfBathroomArticle = require("./article-half-bathroom-ideas.js");
const winterDecorCozyHomeArticle = require("./article-winter-decor-cozy-home.js");
const bathroomSinkDecorArticle = require("./article-bathroom-sink-decor-ideas.js");
const diningTableCenterpieceArticle = require("./article-dining-table-centerpiece-ideas.js");
const farmhouseDecorArticle = require("./article-farmhouse-decor-ideas.js");
const homeOfficeWorkspaceArticle = require("./article-home-office-productive-workspace.js");
const smallPantryHacksArticle = require("./article-small-pantry-organization-hacks.js");
const laundryRoomRoutineArticle = require("./article-laundry-room-routine-workflow.js");
const topOfFridgeStylingArticle = require("./article-top-of-fridge-styling-guide.js");
const elegantPowderRoomArticle = require("./article-elegant-powder-room-design-direction.js");
const deskSetupConfigurationsArticle = require("./article-desk-setup-configurations.js");
const aboveFireplaceScaleArticle = require("./article-above-fireplace-scale-proportion.js");
const bathroomOrgZoneArticle = require("./article-bathroom-organization-zone-system.js");
const blackPowderRoomArticle = require("./article-black-powder-room-material-choices.js");
const consoleTableStylingArticle = require("./article-console-table-styling-rules.js");
const bedroomSelfExpressionArticle = require("./article-bedroom-self-expression-ideas.js");
const nurseryDesignDirectionArticle = require("./article-nursery-design-direction-guide.js");
const coffeeStationPlacementArticle = require("./article-coffee-station-placement-workflow.js");
const wovenTrayStylingArticle = require("./article-woven-tray-styling-contents.js");
const bathroomRefreshPriorityArticle = require("./article-bathroom-refresh-priority-guide.js");
const spaBathroomRealityArticle = require("./article-spa-bathroom-reality-check.js");
const smallBedroomVisualTricksArticle = require("./article-small-bedroom-visual-space-tricks.js");
const postChristmasWinterArticle = require("./article-post-christmas-winter-transition.js");
const bohoBedroomDiyBuyArticle = require("./article-boho-bedroom-diy-vs-buy.js");
const homeDecorTrendsArticle = require("./article-home-decor-trends-worth-adopting.js");
const bedroomOfficeBoundaryArticle = require("./article-bedroom-office-boundary-setting.js");
const { picture } = require("./picture-helper.js");
const { generateFormats } = require("./generate-image-formats.js");

const DIST = path.join(__dirname, "..");

// CSS background-image can't use <picture>'s format negotiation, so we
// use image-set() instead: browsers pick the first supported format.
// Every image path passed in must already have .avif/.webp siblings
// generated by generate-image-formats.js.
function bgImageSet(jpgPath) {
  const base = jpgPath.replace(/\.jpe?g$/i, "");
  return `image-set(url('${base}.avif') type('image/avif'), url('${base}.webp') type('image/webp'), url('${base}.jpg') type('image/jpeg'))`;
}

function nav(current) {
  const items = [
    { label: "Home", href: "/" },
    { label: "Decor", href: "/#latest" },
    { label: "Color Ideas", href: "/#favorites" },
    { label: "About", href: "/about/" },
  ];
  return items
    .map(
      (i) =>
        `<li><a href="${i.href}"${i.href === current ? ' class="is-active"' : ""}>${i.label}</a></li>`
    )
    .join("\n      ");
}

const pinterestIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.6 2 1.7 2 2 0 3.5-2.6 3.5-5 0-2.2-1.6-3.8-4-3.8-2.7 0-4.4 2-4.4 4.2 0 .8.3 1.7.7 2.2.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.2 2.4-6.2 6.8-6.2 3.6 0 6.3 2.6 6.3 6 0 3.6-2.2 6.4-5.4 6.4-1.1 0-2.1-.6-2.4-1.3l-.7 2.5c-.2.9-.9 2.1-1.4 2.8A10 10 0 1 0 12 2z"></path></svg>`;
const instagramIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"></circle></svg>`;
const facebookIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.4 1.5-1.4h1.4V5.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V11H8v3h2.5v7h3z"></path></svg>`;
const searchIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="16.2" y1="16.2" x2="21" y2="21"></line></svg>`;

function header(current) {
  return `<header class="site-header">
  <nav class="nav-row" aria-label="Primary">
    <a href="/" class="wordmark"><picture><source srcset="/images/brand/logo.avif?v=4" type="image/avif"><source srcset="/images/brand/logo.webp?v=4" type="image/webp"><img src="/images/brand/logo.png?v=4" alt="Khizra Shahroz" width="699" height="100"></picture></a>
    <ul class="nav-links">
      ${nav(current)}
    </ul>
    <div class="nav-actions">
      <button type="button" class="icon-btn" data-search aria-label="Search the site">${searchIcon}</button>
      <a href="https://pinterest.com" class="icon-btn" aria-label="Khizra Shahroz on Pinterest">${pinterestIcon}</a>
      <button type="button" class="icon-btn hamburger" data-hamburger aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </nav>
</header>

<div class="mobile-drawer" id="mobile-drawer" data-drawer data-open="false">
  <div class="mobile-drawer-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <div class="mobile-drawer-top">
      <span class="wordmark"><picture><source srcset="/images/brand/logo.avif?v=4" type="image/avif"><source srcset="/images/brand/logo.webp?v=4" type="image/webp"><img src="/images/brand/logo.png?v=4" alt="Khizra Shahroz" width="699" height="100"></picture></span>
      <button type="button" class="icon-btn" data-drawer-close aria-label="Close menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><line x1="5" y1="5" x2="19" y2="19"></line><line x1="19" y1="5" x2="5" y2="19"></line></svg>
      </button>
    </div>
    <ul class="mobile-drawer-links">
      ${nav(current)}
    </ul>
    <div class="mobile-drawer-social">
      <button type="button" class="icon-btn" aria-label="Search the site">${searchIcon}</button>
      <a href="https://pinterest.com" class="icon-btn" aria-label="Khizra Shahroz on Pinterest">${pinterestIcon}</a>
    </div>
  </div>
</div>`;
}

function footer() {
  return `<footer class="site-footer">
  <section class="newsletter" aria-labelledby="newsletter-title">
    <div class="wrap-1100 newsletter-grid">
      <div>
        <h2 id="newsletter-title">A little home inspiration, delivered.</h2>
        <p class="supporting">Get beautiful decorating ideas, seasonal inspiration, and my latest favorites straight to your inbox.</p>
      </div>
      <form class="newsletter-form" data-newsletter-form novalidate>
        <label for="ks-email" class="visually-hidden">Your email address</label>
        <input id="ks-email" type="email" name="email" required placeholder="Your email address">
        <button type="submit">Sign me up <span aria-hidden="true">→</span></button>
        <p class="newsletter-message" data-newsletter-message aria-live="polite"></p>
      </form>
    </div>
  </section>

  <div class="footer-inner">
    <div class="wrap-1240">
      <p class="footer-statement">Make your home feel like <em>you.</em></p>
      <p class="footer-support">Beautiful spaces, thoughtful decorating ideas, and a little inspiration for your next home project.</p>

      <div class="footer-columns">
        <div>
          <p class="footer-col-head">Khizra Shahroz</p>
          <p class="footer-desc">Home decor inspiration for creating a home you genuinely love.</p>
        </div>
        <nav aria-label="Explore">
          <p class="footer-col-head">Explore</p>
          <ul>
            <li><a href="/blog/">Home Decor</a></li>
            <li><a href="/blog/">Living Room</a></li>
            <li><a href="/blog/">Bedroom</a></li>
            <li><a href="/blog/">Kitchen</a></li>
            <li><a href="/blog/">Bathroom</a></li>
            <li><a href="/#favorites">Color Ideas</a></li>
          </ul>
        </nav>
        <nav aria-label="About">
          <p class="footer-col-head">About</p>
          <ul>
            <li><a href="/about/">About Khizra</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="/contact/">Work With Me</a></li>
          </ul>
        </nav>
        <div>
          <p class="footer-col-head">Follow along</p>
          <div class="footer-social">
            <a href="https://pinterest.com" aria-label="Pinterest">${pinterestIcon}</a>
            <a href="https://instagram.com" aria-label="Instagram">${instagramIcon}</a>
            <a href="https://facebook.com" aria-label="Facebook">${facebookIcon}</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Khizra Shahroz</p>
        <div class="legal-links">
          <a href="/privacy/">Privacy Policy</a>
          <a href="/terms/">Terms</a>
          <a href="/contact/">Contact</a>
        </div>
      </div>
    </div>
  </div>
</footer>`;
}

function page({ title, description, canonical, current, body, extraHead = "" }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.classList.add('js')</script>
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="/images/brand/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/images/brand/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/brand/favicon-180.png">
<link rel="preload" as="font" type="font/woff2" href="/fonts/playfair-normal-variable.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/dmsans-normal-variable.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/playfair-italic-400.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/dmsans-italic-400.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/caveat-500.woff2" crossorigin>
<link rel="stylesheet" href="/css/styles.css?v=10">
<script defer src="/js/main.js?v=2"></script>
${extraHead}</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(current)}
<main id="main">
${body}
</main>
${footer()}
</body>
</html>
`;
}

/* ---------------- Post data ---------------- */
// These 3 posts already exist as full articles on the live server (created
// outside this local build). Their post pages are NOT regenerated here —
// only their metadata is used to list them on the blog index. Do not add
// these slugs to a write*Post() call, or their live pages get clobbered.
const externalPosts = [
  {
    slug: "cozy-bedroom-ideas",
    title: "18 Cozy Bedroom Ideas That Make You Want to Stay in Bed All Day",
    category: "Bedroom",
    readingTime: "10 min read",
    excerpt: "Some bedrooms look pretty. Others make you want to cancel every plan you have and stay under the covers until further notice — here's how to build that atmosphere.",
    image: "/images/cozy-bedroom/upholstered-headboard.jpg",
  },
  {
    slug: "kitchen-counter-decor",
    title: "18 Kitchen Counter Decor Ideas That Look Stylish and Practical",
    category: "Kitchen",
    readingTime: "11 min read",
    excerpt: "A kitchen can have beautiful cabinets, gorgeous lighting, and the perfect backsplash, yet somehow the counter still looks like it lost a fight with a grocery bag — here's how to fix that.",
    image: "/images/kitchen-counter/coffee-station-marble-tray.jpg",
  },
  {
    slug: "small-bathroom-ideas",
    title: "15 Small Bathroom Ideas That Make the Space Feel Bigger",
    category: "Bathroom",
    readingTime: "11 min read",
    excerpt: "A tiny bathroom can feel surprisingly spacious once you stop trying to squeeze more things into it and start thinking about light, sightlines, storage, and visual clutter instead.",
    image: "/images/small-bathroom/floating-fluted-vanity.jpg",
  },
];

const longFormPosts = [
  {
    slug: "expensive-living-room-decor-ideas",
    title: "17 Living Room Decor Ideas That Make Your Space Feel Instantly More Expensive",
    category: "Living Room",
    readingTime: "12 min read",
    date: "September 15, 2026",
    excerpt: "You don't need a designer budget — the right proportions, lighting, textures, and a little restraint can make an ordinary living room feel completely polished.",
    alt: "Living room styled with layered lighting, a large area rug and natural textures",
    image: "/images/living-room/stock-elegant-room.jpg",
    bodyHtml: expensiveLivingRoomArticle.body,
  },
  {
    slug: "mason-jar-decor-ideas",
    title: "15 Mason Jar Decor Ideas That Make Your Home Feel More Charming",
    category: "Decorating",
    readingTime: "10 min read",
    date: "September 17, 2026",
    excerpt: "Vases, candle holders, planters, organizers and gifts — 15 simple ways to turn ordinary Mason jars into charming, purposeful home decor.",
    alt: "Mason jars styled as wall-mounted sconces with fairy lights and flowers",
    image: "/images/mason-jar/hero.jpg",
    bodyHtml: masonJarArticle.body,
  },
  {
    slug: "above-fridge-decor-ideas",
    title: "12 Ways to Style Above the Fridge",
    category: "Kitchen",
    readingTime: "9 min read",
    date: "September 17, 2026",
    excerpt: "Baskets, trays, cookbooks and a little restraint — 12 simple ways to turn the awkward space above your fridge into a styled part of the kitchen.",
    alt: "Stainless steel refrigerator styled with a ceramic vase, framed art and a woven basket on top",
    image: "/images/above-fridge/hero.jpg",
    bodyHtml: aboveFridgeArticle.body,
  },
  {
    slug: "living-room-color-ideas",
    title: "15 Living Room Color Ideas That Create a Calm and Sophisticated Space",
    category: "Color Ideas",
    readingTime: "11 min read",
    date: "September 17, 2026",
    excerpt: "Warm whites, greige, sage, dusty blue and more — 15 living room paint colors, plus how to combine, light and layer them so the room feels calm and pulled-together.",
    alt: "Warm neutral living room with a sage sofa, round wood coffee table and natural light",
    image: "/images/living-room-colors/hero.jpg",
    bodyHtml: livingRoomColorsArticle.body,
  },
  {
    slug: "toilet-tank-decorating-ideas",
    title: "16 Toilet Tank Decorating Ideas That Make Your Bathroom Feel More Finished",
    category: "Bathroom",
    readingTime: "9 min read",
    date: "September 18, 2026",
    excerpt: "Plants, trays, candles and a little restraint — 16 simple, moisture-friendly ways to style the awkward empty space on top of your toilet tank.",
    alt: "Woven tray on a toilet tank styled with a eucalyptus vase, candle and rolled towels",
    image: "/images/toilet-tank/hero.jpg",
    bodyHtml: toiletTankArticle.body,
  },
  {
    slug: "coffee-table-organizing-ideas",
    title: "17 Coffee Table Organizing Ideas",
    category: "Living Room",
    readingTime: "9 min read",
    date: "September 20, 2026",
    excerpt: "Trays, bowls, book stacks and a little restraint — 17 simple ways to organize a coffee table so it stays useful, not just photogenic.",
    alt: "Coffee table styled with a mirrored tray, candle, book stack and a vase of dried florals",
    image: "/images/coffee-table/hero.jpg",
    bodyHtml: coffeeTableArticle.body,
  },
  {
    slug: "small-dining-room-ideas",
    title: "18 Small Dining Room Ideas That Make Every Inch Count",
    category: "Dining Room",
    readingTime: "11 min read",
    date: "September 20, 2026",
    excerpt: "Round tables, banquettes, mirrors and layered lighting — 18 practical ways to make a small dining room feel comfortable, stylish and easy to move around in.",
    alt: "Small dining nook with a round wood table, woven chairs and open shelving styled with plants",
    image: "/images/small-dining-room/hero.jpg",
    bodyHtml: smallDiningRoomArticle.body,
  },
  {
    slug: "sofa-wall-decor-ideas",
    title: "19 Sofa Wall Decor Ideas That Make Your Living Room Feel Finished",
    category: "Living Room",
    readingTime: "13 min read",
    date: "September 20, 2026",
    excerpt: "Oversized artwork, gallery walls, mirrors, shelves and textiles — 19 ways to turn the empty wall behind your sofa into the room's best feature.",
    alt: "Living room sofa wall combining a photo gallery, round mirror, macrame hanging and a styled floating shelf",
    image: "/images/sofa-wall-decor/hero.jpg",
    bodyHtml: sofaWallArticle.body,
  },
  {
    slug: "nursery-decor-ideas",
    title: "23 Nursery Decor Ideas That Feel Cozy, Practical, and Beautiful",
    category: "Decorating",
    readingTime: "14 min read",
    date: "September 20, 2026",
    excerpt: "Warm neutrals, natural wood, soft lighting and smart storage — 23 nursery decor ideas that balance beauty, comfort, safety and everyday practicality.",
    alt: "Cozy sage green nursery with a white crib, woven baskets and a soft rug",
    image: "/images/nursery-decor/hero.jpg",
    bodyHtml: nurseryArticle.body,
  },
  {
    slug: "sofa-ideas-living-room",
    title: "19 Sofa Ideas That Can Completely Change Your Living Room",
    category: "Living Room",
    readingTime: "13 min read",
    date: "September 21, 2026",
    excerpt: "Warm neutrals, deep seating, curved silhouettes and bold color — 19 sofa ideas to help you choose the right shape, fabric and layout for the way you actually live.",
    alt: "Modern gray corduroy sectional sofa with reversible chaise in a living room",
    image: "/images/sofa-ideas/hero.jpg",
    bodyHtml: sofaIdeasArticle.body,
  },
  {
    slug: "kitchen-shelf-decor-ideas",
    title: "21 Kitchen Shelf Decor Ideas That Look Stylish Without Feeling Cluttered",
    category: "Kitchen",
    readingTime: "14 min read",
    date: "September 21, 2026",
    excerpt: "Cookbooks, cutting boards, glass jars and a little restraint — 21 kitchen shelf decor ideas that stay practical, plus real products you can shop for each one.",
    alt: "Wood shelf styled with a framed print, mug hooks, plants and a Smeg coffee maker below",
    image: "/images/kitchen-shelf-decor/hero.jpg",
    bodyHtml: kitchenShelfArticle.body,
  },
  {
    slug: "entryway-table-decor-ideas",
    title: "17 Ways to Decorate Entryway Table",
    category: "Decorating",
    readingTime: "13 min read",
    date: "September 21, 2026",
    excerpt: "Mirrors, statement vases, layered books and a little restraint — practical ways to style an entryway table, plus real products you can shop for each one.",
    alt: "Oval wood mirror above a wood console table styled with an olive branch vase and basket, open front door beyond",
    image: "/images/entryway-table-decor/hero.jpg",
    bodyHtml: entrywayArticle.body,
  },
  {
    slug: "laundry-room-ideas",
    title: "18 Laundry Room Ideas That Make Wash Day Easier and More Stylish",
    category: "Decorating",
    readingTime: "13 min read",
    date: "September 23, 2026",
    excerpt: "Countertops, floating shelves, hanging rods and a little restraint — 18 laundry room ideas that make the space more organized and more enjoyable to use, plus real products you can shop for each one.",
    alt: "Laundry room styled with brass pendant lights, floating wood shelves and a marble backsplash above a hidden washer",
    image: "/images/laundry-room/hero.jpg",
    bodyHtml: laundryRoomArticle.body,
  },
  {
    slug: "sage-green-bedroom-ideas",
    title: "25 Sage Green Bedroom Ideas That Feel Calm, Cozy, and Beautiful",
    category: "Decorating",
    readingTime: "15 min read",
    date: "September 23, 2026",
    excerpt: "From full wall color to a single upholstered headboard — 25 sage green bedroom ideas covering paint, bedding, wood tones and accents, plus real products you can shop for each one.",
    alt: "Sage green bedroom with a wood bed frame, rattan pendant light, layered botanical art and a jute rug",
    image: "/images/sage-green-bedroom/hero.jpg",
    bodyHtml: sageGreenBedroomArticle.body,
  },
  {
    slug: "white-farmhouse-decor-ideas",
    title: "20 White Farmhouse Decor Ideas That Feel Fresh, Cozy, and Timeless",
    category: "Decorating",
    readingTime: "14 min read",
    date: "September 24, 2026",
    excerpt: "Warm whites, natural wood, vintage frames and a little restraint — 20 white farmhouse decor ideas that feel collected instead of themed, plus real products you can shop for each one.",
    alt: "White farmhouse living room with a slipcovered sofa, wool rug, gallery of framed sheet music and a wood mantel",
    image: "/images/white-farmhouse-decor/hero.jpg",
    bodyHtml: whiteFarmhouseDecorArticle.body,
  },
  {
    slug: "moody-dark-bedroom-ideas",
    title: "24 Moody and Dark Bedroom Ideas That Feel Cozy, Not Gloomy",
    category: "Decorating",
    readingTime: "16 min read",
    date: "September 27, 2026",
    excerpt: "Deep navy, forest green, charcoal and chocolate brown — 24 moody and dark bedroom ideas that stay warm and inviting, plus real products you can shop for each one.",
    alt: "Dark bedroom with black paneled walls and ceiling, a gold sputnik chandelier, cognac leather tufted headboard and rust linen bedding",
    image: "/images/moody-dark-bedroom/hero.jpg",
    bodyHtml: moodyDarkBedroomArticle.body,
  },
  {
    slug: "cozy-apartment-decor-ideas",
    title: "22 Cozy Apartment Decor Ideas That Make a Small Space Feel Like Home",
    category: "Decorating",
    readingTime: "15 min read",
    date: "September 27, 2026",
    excerpt: "Warm lighting, layered texture, smart storage and a little restraint \u2014 22 cozy apartment decor ideas for small spaces and rentals, plus real products you can shop for each one.",
    alt: "Small apartment living room with a cream sofa, storage ottoman, nesting wood tables, a vintage rug and warm lamp light",
    image: "/images/cozy-apartment-decor/hero.jpg",
    bodyHtml: cozyApartmentArticle.body,
  },
  {
    slug: "powder-room-decor-ideas",
    title: "15 Elegant Powder Room Decor Ideas That Make a Small Space Feel Expensive",
    category: "Decorating",
    readingTime: "12 min read",
    date: "September 28, 2026",
    excerpt: "Dramatic wallpaper, warm brass and one sculptural mirror — 15 elegant powder room decor ideas that make a tiny space feel like the jewelry of the house.",
    alt: "Dark botanical wallpaper powder room with a brass oval mirror, gold pendant lights and a black fluted floating vanity on hexagon tile",
    image: "/images/powder-room-decor/hero.jpg",
    bodyHtml: powderRoomArticle.body,
  },
  {
    slug: "above-toilet-decor-ideas",
    title: "20 Ways to Style Above Toilet",
    category: "Bathroom",
    readingTime: "13 min read",
    date: "September 28, 2026",
    excerpt: "Floating shelves, a sculptural mirror or one large print — 20 ways to style the wall above the toilet so it feels finished instead of forgotten.",
    alt: "White arched wall cabinet with glass doors and brass hardware above a toilet, styled with a trailing plant on top",
    image: "/images/above-toilet-decor/hero.jpg",
    bodyHtml: aboveToiletArticle.body,
  },
  {
    slug: "how-to-style-a-tiered-tray",
    title: "How to Style a Tiered Tray: Easy Ideas for a Cozy, Collected Look",
    category: "Decorating",
    readingTime: "14 min read",
    date: "September 28, 2026",
    excerpt: "Height, texture, and a little restraint — how to style a tiered tray for the kitchen, coffee station, or any season without it looking cluttered.",
    alt: "Three-tier wood tray styled with pumpkins, a Welcome Fall sign, candles, wood beads and a grateful thankful blessed frame",
    image: "/images/tiered-tray-styling/hero.jpg",
    bodyHtml: tieredTrayArticle.body,
  },
  {
    slug: "how-to-organise-your-pantry",
    title: "How to Organise Your Pantry Without Making It a Full-Time Job",
    category: "Kitchen",
    readingTime: "12 min read",
    date: "September 29, 2026",
    excerpt: "Zones, FIFO, and a little restraint with containers — how to organise your pantry around the way you actually cook so it stays tidy without constant upkeep.",
    alt: "Neatly organized pantry shelves lined with glass jars and bottles of dry goods",
    image: "/images/pantry-organization/hero-pantry-jars.jpg",
    bodyHtml: pantryArticle.body,
  },
  {
    slug: "winter-dough-bowl-decor-ideas",
    title: "24 Winter Dough Bowl Decor Ideas That Make Your Home Feel Instantly Cozier",
    category: "Decorating",
    readingTime: "15 min read",
    date: "September 29, 2026",
    excerpt: "Greenery, candles, pinecones and tiny trees — 24 winter dough bowl decor ideas that turn a rustic wooden bowl into a warm, collected centerpiece.",
    alt: "Glass ornaments, pinecones and cinnamon sticks in a raw-edge dough bowl on a coffee table with a cozy sofa and Christmas tree lights behind it",
    image: "/images/winter-dough-bowl-decor/hero.jpg",
    bodyHtml: doughBowlArticle.body,
  },
  {
    slug: "mantel-decor-ideas",
    title: "19 Mantel Decor Ideas for a Stylish and Cozy Fireplace",
    category: "Decorating",
    readingTime: "14 min read",
    date: "September 30, 2026",
    excerpt: "Scale, layering, texture and restraint — 19 mantel decor ideas that make a fireplace feel intentional and collected without looking overdone.",
    alt: "Rustic wood mantel with a framed pressed botanical print, three graduated brass candlesticks, a stoneware vase of flowers and a firewood basket beside a lit fireplace",
    image: "/images/mantel-decor-ideas/hero.jpg",
    bodyHtml: mantelDecorArticle.body,
  },
  {
    slug: "japandi-kitchen-decor-ideas",
    title: "20 Japandi Kitchen Decor Ideas for a Calm, Warm, and Timeless Space",
    category: "Kitchen",
    readingTime: "15 min read",
    date: "September 30, 2026",
    excerpt: "Warm wood, natural stone and handmade ceramics — 20 Japandi kitchen decor ideas that feel calm and collected instead of cold and empty.",
    alt: "Japandi kitchen island with fluted wood panels, wood bar stools, pleated linen pendant lights and a ceramic vase of dried branches",
    image: "/images/japandi-kitchen-decor/hero.jpg",
    bodyHtml: japandiKitchenArticle.body,
  },
  {
    slug: "elf-on-the-shelf-ideas",
    title: "24 Elf on the Shelf Ideas That Kids Will Actually Love",
    category: "Holidays",
    readingTime: "13 min read",
    date: "September 30, 2026",
    excerpt: "Cereal messages, marshmallow snowball fights and a candy cane swing — 24 Elf on the Shelf ideas that look magical but take very little effort.",
    alt: "Elf on the Shelf sitting on a bathroom sink beside a toothpaste smiley face doodle",
    image: "/images/elf-on-the-shelf-ideas/hero.jpg",
    bodyHtml: elfOnTheShelfArticle.body,
  },
  {
    slug: "christmas-porch-decor-ideas",
    title: "28 Christmas Porch Decor Ideas That Make Your Home Feel Instantly Festive",
    category: "Holidays",
    readingTime: "16 min read",
    date: "October 1, 2026",
    excerpt: "Greenery, lanterns, bows and warm lighting — 28 Christmas porch decor ideas that create a clear, festive focal point from the sidewalk to the door.",
    alt: "Cozy porch bench with red and green plaid pillows and throw, a wreath on the window, string lights and mini lit trees",
    image: "/images/christmas-porch-decor/hero.jpg",
    bodyHtml: christmasPorchArticle.body,
  },
  {
    slug: "elf-on-the-shelf-ideas-fun-and-easy",
    title: "25 Elf on the Shelf Ideas That Are Actually Fun and Easy",
    category: "Holidays",
    readingTime: "14 min read",
    date: "October 1, 2026",
    excerpt: "Cereal angels, marshmallow bubble baths and a candy cane cage — 25 easy Elf on the Shelf ideas using things you probably already have at home.",
    alt: "Two Elf on the Shelf dolls sitting in powdered snow next to a powdered-sugar snowman, sharing a mug of hot cocoa",
    image: "/images/elf-on-the-shelf-ideas-fun-and-easy/hero.jpg",
    bodyHtml: elfOnTheShelfFunAndEasyArticle.body,
  },
  {
    slug: "bathroom-storage-ideas",
    title: "10 Bathroom Storage Ideas That Actually Keep Clutter Under Control",
    category: "Bathroom",
    readingTime: "12 min read",
    date: "October 2, 2026",
    excerpt: "Floating shelves, a mirrored cabinet, a hanging caddy and more — 10 bathroom storage ideas that clear the counter without losing any style.",
    alt: "Black ladder towel rack and backlit mirrored medicine cabinet above a dark wood vanity in a small tiled bathroom",
    image: "/images/bathroom-storage-ideas/hero.jpg",
    bodyHtml: bathroomStorageArticle.body,
  },
  {
    slug: "kids-room-design-ideas",
    title: "10 Playful Kids Room Ideas That Still Make Sense for Real Life",
    category: "Kids Room",
    readingTime: "11 min read",
    date: "October 3, 2026",
    excerpt: "Interactive walls, zoned layouts and furniture that pulls double duty — 10 kids room ideas that balance imagination with everyday practicality.",
    alt: "Cozy neutral kids playroom corner with a cloud-shaped bean bag, star cushions, a fabric teepee tent, a knit pouf and a shaggy white rug",
    image: "/images/kids-room-design-ideas/hero.jpg",
    bodyHtml: kidsRoomArticle.body,
  },
  {
    slug: "blue-farmhouse-bedroom-decor",
    title: "10 Blue Farmhouse Bedroom Ideas for a Cozy, Collected Look",
    category: "Bedroom",
    readingTime: "7 min read",
    date: "October 4, 2026",
    excerpt: "Weathered wood, warm metals and a tight blue palette — 10 ways to bring farmhouse warmth into a blue bedroom without it reading cold or coastal.",
    alt: "Glam bedroom with a tufted navy velvet channel-back headboard, a royal blue velvet bench with gold trim, mirrored nightstands and cobalt ceramic lamps",
    image: "/images/blue-farmhouse-bedroom-decor/hero.jpg",
    bodyHtml: blueFarmhouseBedroomArticle.body,
  },
  {
    slug: "dorm-wall-decor-ideas",
    title: "10 Dorm Wall Decor Ideas Every Student Will Want to Copy",
    category: "Dorm Decor",
    readingTime: "14 min read",
    date: "October 5, 2026",
    excerpt: "Gallery walls, tapestries, pegboards and fairy lights — 10 dorm wall decor ideas that turn a cinderblock box into somewhere you actually want to live.",
    alt: "Two black floating shelves styled with books, plants and small decor above a desk, with a pale blue electric guitar mounted on the wall nearby",
    image: "/images/dorm-wall-decor-ideas/hero.jpg",
    bodyHtml: dormWallDecorArticle.body,
  },
  {
    slug: "boho-painting-ideas",
    title: "10 Easy Boho Painting Ideas Anyone Can Try at Home",
    category: "Wall Decor",
    readingTime: "8 min read",
    date: "October 6, 2026",
    excerpt: "Arches, mandalas, celestial motifs and more — 10 forgiving boho painting ideas that turn a blank wall into something personal, no art degree required.",
    alt: "Black line-art mural of faces and botanical leaves painted across a bedroom wall behind a neatly made bed",
    image: "/images/boho-painting-ideas/hero.jpg",
    bodyHtml: bohoPaintingArticle.body,
  },
  {
    slug: "home-office-setup-tips",
    title: "10 Tips for a Home Office Setup That Actually Works",
    category: "Home Office",
    readingTime: "9 min read",
    date: "October 7, 2026",
    excerpt: "From chair to lighting to a routine that sticks — 10 practical home office setup tips that go beyond the Pinterest version to a space that actually works.",
    alt: "Woman with a morning rituals mug reading a planner at a wood desk while a golden retriever rests on the chair beside her",
    image: "/images/home-office-setup-tips/routine.jpg",
    bodyHtml: homeOfficeSetupArticle.body,
  },
  {
    slug: "fall-bedroom-ideas",
    title: "10 Ways to Make Your Bedroom Feel Like Fall",
    category: "Bedroom",
    readingTime: "8 min read",
    date: "October 8, 2026",
    excerpt: "Moody colors, plush bedding and warm lighting — 10 ways to bring real autumn coziness into your bedroom without tipping into a haunted hayride.",
    alt: "Warm fall bedroom with a mustard yellow diamond-pattern rug, rust headboard, white bedding and a tripod floor lamp beside a shuttered window",
    image: "/images/fall-bedroom-ideas/hero.jpg",
    bodyHtml: fallBedroomArticle.body,
  },
  {
    slug: "coffee-bar-decor-ideas",
    title: "19 Coffee Bar Decor Ideas That Make Your Coffee Corner Feel Like a Café",
    category: "Kitchen",
    readingTime: "14 min read",
    date: "October 6, 2026",
    excerpt: "Wood shelves, glass canisters and a tray that keeps it all tidy — 19 coffee bar decor ideas that turn even a forgotten corner into a cozy, café-worthy spot.",
    alt: "Arched alcove coffee bar with floral wallpaper, sage green cabinets, an espresso machine and light wood shelving",
    image: "/images/coffee-bar-decor-ideas/hero.jpg",
    bodyHtml: coffeeBarDecorArticle.body,
  },
  {
    slug: "farmhouse-kitchen-ideas",
    title: "10 Farmhouse Kitchen Ideas You'll Actually Want to Copy",
    category: "Kitchen",
    readingTime: "10 min read",
    date: "October 9, 2026",
    excerpt: "An apron sink, open shelving and a butcher block island — 10 farmhouse kitchen ideas that feel collected and warm instead of staged.",
    alt: "Farmhouse kitchen with dark green cabinets, butcher block countertops, open wood shelving and a small wood island",
    image: "/images/farmhouse-kitchen-ideas/hero.jpg",
    bodyHtml: farmhouseKitchenArticle.body,
  },
  {
    slug: "must-have-garden-plants",
    title: "10 Plants Worth Making Room for in Your Garden",
    category: "Garden",
    readingTime: "9 min read",
    date: "October 10, 2026",
    excerpt: "Lavender, coneflowers and a few things to skip entirely — 10 reliable plants that earn their spot in a garden, plus what to avoid planting.",
    alt: "Lush garden path lined with lavender, hydrangeas, hostas and zinnias leading to a wood bench, with butterflies in the air",
    image: "/images/must-have-garden-plants/hero.jpg",
    bodyHtml: gardenPlantsArticle.body,
  },
  {
    slug: "reading-nook-ideas",
    title: "10 Reading Nook Ideas That Work Even in a Tiny Space",
    category: "Decorating",
    readingTime: "11 min read",
    date: "October 11, 2026",
    excerpt: "From a converted closet to the space under the stairs — 10 reading nook ideas that turn a dead corner into the coziest spot in the house.",
    alt: "Two mid-century wood chairs with a small round table beside a window, positioned next to a tall bookshelf in a warmly lit room",
    image: "/images/reading-nook-ideas/hero.jpg",
    bodyHtml: readingNookArticle.body,
  },
  {
    slug: "modern-entryway-ideas",
    title: "10 Entryway Upgrades That Actually Make a First Impression",
    category: "Entryway",
    readingTime: "8 min read",
    date: "October 12, 2026",
    excerpt: "Statement lighting, a bold accent wall and a console table that earns its keep — 10 entryway ideas that make the first few feet of your home count.",
    alt: "Opulent entryway with a large tiered crystal chandelier, two curved sofas, a round coffee table and a mirrored front door",
    image: "/images/modern-entryway-ideas/hero.jpg",
    bodyHtml: modernEntrywayArticle.body,
  },
  {
    slug: "pink-bedroom-ideas",
    title: "10 Pink Bedroom Ideas That Feel Grown-Up, Not Girly",
    category: "Bedroom",
    readingTime: "10 min read",
    date: "October 13, 2026",
    excerpt: "Blush walls, moody accents and metallic touches — 10 pink bedroom ideas that prove the color can be chic and sophisticated, not just sweet.",
    alt: "Blush pink bedroom with a round rose gold mirror above the bed, copper wall sconces and layered pink and white pillows",
    image: "/images/pink-bedroom-ideas/hero.jpg",
    bodyHtml: pinkBedroomArticle.body,
  },
  {
    slug: "timeless-kitchen-layouts",
    title: "10 Kitchen Layouts That Actually Stand the Test of Time",
    category: "Kitchen",
    readingTime: "12 min read",
    date: "October 14, 2026",
    excerpt: "From the efficient galley to the flexible zone-style design — 10 kitchen layouts that work for real life, not just the listing photos.",
    alt: "Large modern kitchen with a gray waterfall-edge island, three black pendant lights, glossy gray cabinets and a dining area beyond",
    image: "/images/timeless-kitchen-layouts/hero.jpg",
    bodyHtml: timelessKitchenLayoutsArticle.body,
  },
  {
    slug: "toddler-room-ideas",
    title: "12 Toddler Room Ideas That Actually Work for Real Life",
    category: "Kids Room",
    readingTime: "13 min read",
    date: "October 15, 2026",
    excerpt: "Montessori floor beds, smart storage and themes that won't need repainting in a year — 12 toddler room ideas built for real life, not just photos.",
    alt: "Warm Montessori-style toddler bedroom with a low wood floor bed, open shelf of wooden toys and a round jute rug by a sunny window",
    image: "/images/toddler-room-ideas/hero.jpg",
    bodyHtml: toddlerRoomArticle.body,
  },
  {
    slug: "bedroom-ceiling-design-ideas",
    title: "12 Bedroom Ceiling Ideas That Make Your Room Feel Finished",
    category: "Bedroom",
    readingTime: "9 min read",
    date: "October 16, 2026",
    excerpt: "Coffered panels, exposed beams and a starry-night glow — 12 bedroom ceiling ideas for the one surface most people forget to design.",
    alt: "Modern honeycomb-patterned ceiling installation reflected in a mirrored wardrobe above a white platform bed with framed art",
    image: "/images/bedroom-ceiling-design-ideas/hero.jpg",
    bodyHtml: bedroomCeilingArticle.body,
  },
  {
    slug: "small-bedroom-paint-colors",
    title: "12 Paint Colors That Actually Make a Small Bedroom Feel Bigger",
    category: "Bedroom",
    readingTime: "9 min read",
    date: "October 17, 2026",
    excerpt: "From powder blue to muted olive — 12 paint colors that make a small bedroom feel calmer, brighter and bigger than it actually is.",
    alt: "Small bedroom with warm neutral walls, a round mirror above a tufted headboard and layered bedding",
    image: "/images/small-bedroom-paint-colors/hero.jpg",
    bodyHtml: smallBedroomPaintColorsArticle.body,
  },
  {
    slug: "front-porch-ideas",
    title: "12 Small Porch Ideas That Make a Tiny Entryway Feel Custom-Built",
    category: "Outdoor",
    readingTime: "10 min read",
    date: "October 18, 2026",
    excerpt: "From a bold front door to a tiered plant ladder — 12 small porch ideas that make a tight entryway feel intentional instead of cramped.",
    alt: "Small covered front porch with a black door, warm lantern sconce, potted topiary trees and a wood bench with cream pillows",
    image: "/images/front-porch-ideas/hero.jpg",
    bodyHtml: frontPorchArticle.body,
  },
  {
    slug: "cottage-garden-ideas",
    title: "12 Cottage Garden Ideas for a Yard That Feels Like a Storybook",
    category: "Garden",
    readingTime: "11 min read",
    date: "October 19, 2026",
    excerpt: "From overflowing borders to a rose-covered arbor — 12 cottage garden ideas that bring storybook charm to any size yard.",
    alt: "Storybook Victorian cottage with a turret roof and wraparound porch surrounded by overflowing pink, purple and white garden flowers",
    image: "/images/cottage-garden-ideas/hero.jpg",
    bodyHtml: cottageGardenArticle.body,
  },
  {
    slug: "cozy-living-room-ideas",
    title: "12 Ways to Make Your Living Room Feel Genuinely Cozy",
    category: "Living Room",
    readingTime: "9 min read",
    date: "October 20, 2026",
    excerpt: "From a thicker rug to layered lighting — 12 simple ways to turn any living room into the coziest room in the house.",
    alt: "Warm neutral living room with a beige sectional sofa, layered textured pillows, a chunky knit throw and wood coffee table lit by soft window light",
    image: "/images/cozy-living-room-ideas/hero.jpg",
    bodyHtml: cozyLivingRoomArticle.body,
  },
  {
    slug: "dorm-kitchen-ideas",
    title: "12 Dorm Kitchen Ideas That Make a Tiny Kitchenette Actually Work",
    category: "Dorm Decor",
    readingTime: "9 min read",
    date: "October 21, 2026",
    excerpt: "From a rolling cart to a vertical shelf stack — 12 dorm kitchen ideas that make the tiniest kitchenette genuinely functional.",
    alt: "Small shared dorm kitchenette with a mini-fridge, microwave, over-the-sink dish rack and towels hanging from the cabinet",
    image: "/images/dorm-kitchen-ideas/hero.jpg",
    bodyHtml: dormKitchenArticle.body,
  },
  {
    slug: "gaming-room-setup-ideas",
    title: "12 Gaming Room Setup Ideas for Teens",
    category: "Kids Room",
    readingTime: "9 min read",
    date: "October 22, 2026",
    excerpt: "From RGB builds to a cozy warm-lit corner — 12 gaming room setup ideas that balance comfort, personality and performance.",
    alt: "Dual monitor RGB gaming desk setup glowing orange and red with a mechanical keyboard and speakers in a dark room",
    image: "/images/gaming-room-setup-ideas/hero.jpg",
    bodyHtml: gamingRoomArticle.body,
  },
  {
    slug: "bathroom-accent-wall-ideas",
    title: "12 Bathroom Accent Wall Ideas Worth Stealing",
    category: "Bathroom",
    readingTime: "9 min read",
    date: "October 23, 2026",
    excerpt: "From a marble feature wall to a living plant wall — 12 bathroom accent wall ideas that turn one surface into the whole room's statement.",
    alt: "Modern minimalist bathroom with a textured concrete-look accent wall, glass shower enclosure and pendant lights over a floating vanity",
    image: "/images/bathroom-accent-wall-ideas/hero.jpg",
    bodyHtml: bathroomAccentWallArticle.body,
  },
  {
    slug: "green-living-room-ideas",
    title: "13 Green Living Room Ideas That Actually Work",
    category: "Living Room",
    readingTime: "11 min read",
    date: "October 24, 2026",
    excerpt: "From emerald walls to a sage-and-olive mix — 13 green living room ideas for every level of commitment, bold to subtle.",
    alt: "Bright living room with a cream sofa, two framed botanical leaf prints, hanging pendant lights and potted plants on either side",
    image: "/images/green-living-room-ideas/hero.jpg",
    bodyHtml: greenLivingRoomArticle.body,
  },
  {
    slug: "cottagecore-style-ideas",
    title: "13 Ways to Bring Cottagecore Style Into Your Home",
    category: "Decorating",
    readingTime: "10 min read",
    date: "October 25, 2026",
    excerpt: "From aged brass hardware to a proper reading nook — 13 ways to bring real cottagecore style into any home without it looking like a costume.",
    alt: "Cottage living room with linen sofas, a wicker armchair, lace curtains, dried florals and a rustic wood coffee table",
    image: "/images/cottagecore-style-ideas/hero.jpg",
    bodyHtml: cottagecoreStyleArticle.body,
  },
  {
    slug: "pergola-ideas",
    title: "14 Pergola Ideas to Build a Genuine Outdoor Retreat",
    category: "Outdoor",
    readingTime: "10 min read",
    date: "October 26, 2026",
    excerpt: "From a fire pit pergola to a hanging swing bed — 14 pergola ideas that turn a plain backyard into a real outdoor retreat.",
    alt: "Wood pergola walkway covered in climbing vines leading to a stone fountain surrounded by greenery",
    image: "/images/pergola-ideas/hero.jpg",
    bodyHtml: pergolaArticle.body,
  },
  {
    slug: "dessert-board-ideas",
    title: "14 Themed Dessert Board Ideas That Actually Disappear at Parties",
    category: "Decorating",
    readingTime: "10 min read",
    date: "October 27, 2026",
    excerpt: "From a chocolate lover's board to breakfast-for-dessert — 14 themed dessert board ideas for every occasion, no baking marathon required.",
    alt: "Round dessert board with cookies, brownies, strawberries, macarons, pretzel sticks and caramel dip arranged by color",
    image: "/images/dessert-board-ideas/hero.jpg",
    bodyHtml: dessertBoardArticle.body,
  },
  {
    slug: "above-cabinet-decor-ideas",
    title: "15 Above-the-Cabinet Decor Ideas That Don't Look Dated",
    category: "Kitchen",
    readingTime: "9 min read",
    date: "October 28, 2026",
    excerpt: "From tall ceramic vases to leaving it empty on purpose — 15 above-the-cabinet decor ideas that make a kitchen look taller and more finished.",
    alt: "Above-cabinet decor styling with a woven basket, lantern and framed signs above white kitchen cabinets near a window",
    image: "/images/above-cabinet-decor-ideas/hero.jpg",
    bodyHtml: aboveCabinetArticle.body,
  },
  {
    slug: "bathroom-shelf-decor-ideas",
    title: "15 Bathroom Shelf Decor Ideas That Actually Work",
    category: "Bathroom",
    readingTime: "10 min read",
    date: "October 29, 2026",
    excerpt: "From layered towels to a sculptural focal point — 15 bathroom shelf decor ideas that balance style, function and real-life habits.",
    alt: "Rustic wood bathroom shelf styled with flowers, folded towels, soap bottles and a home sweet home sign above a toilet",
    image: "/images/bathroom-shelf-decor-ideas/hero.jpg",
    bodyHtml: bathroomShelfArticle.body,
  },
  {
    slug: "bathroom-design-trends",
    title: "14 Bathroom Trends Actually Worth Following This Year",
    category: "Bathroom",
    readingTime: "11 min read",
    date: "October 30, 2026",
    excerpt: "From walk-in showers to matte black fixtures — 14 bathroom design trends that are sticking around because they actually make the room better.",
    alt: "Matte black freestanding tub against white subway tile with a dark built-in niche and black pendant light",
    image: "/images/bathroom-design-trends/hero.jpg",
    bodyHtml: bathroomDesignTrendsArticle.body,
  },
  {
    slug: "coastal-living-room-ideas",
    title: "11 Coastal Living Room Ideas That Don't Feel Like a Theme Park",
    category: "Living Room",
    readingTime: "9 min read",
    date: "October 31, 2026",
    excerpt: "From an ocean-sky-sand palette to natural light tricks — 11 coastal living room ideas that capture the feeling without tipping into gift-shop territory.",
    alt: "Bright coastal living room with white furniture and large windows overlooking the ocean",
    image: "/images/coastal-living-room-ideas/hero.jpg",
    bodyHtml: coastalLivingRoomArticle.body,
  },
  {
    slug: "mothers-day-grazing-board-ideas",
    title: "14 Mother's Day Grazing Board Ideas Worth the Effort",
    category: "Entertaining",
    readingTime: "11 min read",
    date: "November 1, 2026",
    excerpt: "From a rosé-inspired spread to a breakfast-in-bed tray — 14 Mother's Day grazing board ideas that feel thoughtful without needing a culinary degree.",
    alt: "Elegant Mother's Day grazing board with cheese, fruit, flowers and small bowls arranged with intention",
    image: "/images/mothers-day-grazing-board-ideas/hero.jpg",
    bodyHtml: mothersDayGrazingBoardArticle.body,
  },
  {
    slug: "kitchen-island-centerpiece-ideas",
    title: "14 Kitchen Island Centerpiece Ideas That Actually Get Used",
    category: "Kitchen",
    readingTime: "10 min read",
    date: "November 2, 2026",
    excerpt: "From a wooden dough bowl to mixed-material styling — 14 kitchen island centerpiece ideas that add personality without blocking prep space.",
    alt: "Wooden dough bowl centerpiece styled on a kitchen island",
    image: "/images/kitchen-island-centerpiece-ideas/hero.jpg",
    bodyHtml: kitchenIslandCenterpieceArticle.body,
  },
  {
    slug: "home-gym-ideas",
    title: "14 Practical Home Gym Ideas That Actually Get Used",
    category: "Home Office",
    readingTime: "12 min read",
    date: "November 3, 2026",
    excerpt: "From a minimal no-decision setup to a family-friendly layout — 14 practical home gym ideas built around what actually keeps people training.",
    alt: "Home gym corner with weight equipment set up against a wall",
    image: "/images/home-gym-ideas/hero.jpg",
    bodyHtml: homeGymArticle.body,
  },
  {
    slug: "textured-wall-ideas",
    title: "14 Textured Wall Ideas Worth Trying in Any Room",
    category: "Wall Decor",
    readingTime: "11 min read",
    date: "November 4, 2026",
    excerpt: "From Venetian plaster to slat wood — 14 textured wall ideas that add real depth and character to any room, no designer price tag required.",
    alt: "Extravagant textured accent wall in a richly styled interior",
    image: "/images/textured-wall-ideas/hero.jpg",
    bodyHtml: texturedWallArticle.body,
  },
  {
    slug: "kids-bedroom-color-combinations",
    title: "15 Kids Bedroom Color Combinations That Actually Work",
    category: "Kids Room",
    readingTime: "12 min read",
    date: "November 5, 2026",
    excerpt: "From soft blue and white to charcoal gray and orange — 15 kids bedroom color combinations that balance personality with a room you can actually sleep in.",
    alt: "Colorful kids bedroom showing a thoughtfully chosen color palette",
    image: "/images/kids-bedroom-color-combinations/hero.jpg",
    bodyHtml: kidsBedroomColorArticle.body,
  },
  {
    slug: "charcuterie-cup-ideas",
    title: "15 Charcuterie Cup Ideas for Stress-Free Hosting",
    category: "Entertaining",
    readingTime: "11 min read",
    date: "November 6, 2026",
    excerpt: "From a classic meat-and-cheese cup to a luxe treat-yourself version — 15 charcuterie cup ideas that skip the board chaos entirely.",
    alt: "Row of individual charcuterie cups layered with meats, cheeses and fruit",
    image: "/images/charcuterie-cup-ideas/hero.jpg",
    bodyHtml: charcuterieCupArticle.body,
  },
  {
    slug: "easter-basket-stuffer-ideas",
    title: "15 Easter Basket Stuffers Worth Skipping the Candy Aisle For",
    category: "Holidays",
    readingTime: "11 min read",
    date: "November 7, 2026",
    excerpt: "From mini art kits to a gift card with a creative twist — 15 Easter basket stuffers that beat another chocolate bunny, for every age in the house.",
    alt: "Colorful Easter basket filled with a variety of thoughtfully chosen stuffers",
    image: "/images/easter-basket-stuffer-ideas/hero.jpg",
    bodyHtml: easterBasketStufferArticle.body,
  },
  {
    slug: "spring-craft-ideas",
    title: "15 Spring Craft Ideas Worth an Afternoon",
    category: "Decorating",
    readingTime: "11 min read",
    date: "November 8, 2026",
    excerpt: "From a faux-greenery wreath to a nature shadow box — 15 easy spring craft ideas that don't need an art degree or a garage full of supplies.",
    alt: "Collection of handmade spring crafts styled together, including painted jars and floral decor",
    image: "/images/spring-craft-ideas/hero.jpg",
    bodyHtml: springCraftArticle.body,
  },
  {
    slug: "living-room-layout-ideas",
    title: "15 Living Room Layouts for Every Kind of Space",
    category: "Living Room",
    readingTime: "11 min read",
    date: "November 9, 2026",
    excerpt: "From floating the furniture to zoning an open floor plan — 15 living room layouts that fix the one thing decor alone can't.",
    alt: "Sleek modern living room with furniture arranged to anchor the space",
    image: "/images/living-room-layout-ideas/hero.jpg",
    bodyHtml: livingRoomLayoutArticle.body,
  },
  {
    slug: "mirror-wall-panelling-ideas",
    title: "15 Mirror Wall Panelling Ideas to Instantly Elevate Any Room",
    category: "Wall Decor",
    readingTime: "11 min read",
    date: "November 10, 2026",
    excerpt: "From antique smoky finishes to gold-trimmed panels — 15 mirror wall panelling ideas that make a room look bigger, brighter and considerably more expensive.",
    alt: "Elegant mirror styled as a dramatic wall feature in a well-lit interior",
    image: "/images/mirror-wall-panelling-ideas/hero.jpg",
    bodyHtml: mirrorWallPanellingArticle.body,
  },
  {
    slug: "open-kitchen-design-ideas",
    title: "9 Open Kitchen Design Ideas for a Genuinely Spacious Feel",
    category: "Kitchen",
    readingTime: "9 min read",
    date: "November 11, 2026",
    excerpt: "From smart hidden storage to a cohesive light palette — 9 open kitchen design ideas that make a space feel bigger without a full renovation.",
    alt: "Spacious open kitchen with a wide island connecting to the surrounding living space",
    image: "/images/open-kitchen-design-ideas/hero.jpg",
    bodyHtml: openKitchenDesignArticle.body,
  },
  {
    slug: "patio-transformation-ideas",
    title: "15 Patio Ideas That Make You Want to Live Outside",
    category: "Outdoor",
    readingTime: "11 min read",
    date: "November 12, 2026",
    excerpt: "From mixed furniture to a rolling bar cart — 15 patio ideas that turn a plain concrete slab into the spot everyone wants to hang out all summer.",
    alt: "Well-maintained outdoor patio styled with furniture, greenery and ambient lighting",
    image: "/images/patio-transformation-ideas/hero.jpg",
    bodyHtml: patioTransformationArticle.body,
  },
  {
    slug: "pink-home-decor-ideas",
    title: "15 Pink Home Decor Ideas for a Genuinely Charming Home",
    category: "Color Ideas",
    readingTime: "11 min read",
    date: "November 13, 2026",
    excerpt: "From a pink velvet sofa to a bold deep-pink statement wall — 15 pink home decor ideas that read as sophisticated, not sugary sweet.",
    alt: "Charming pink bedroom styled with soft textiles and warm accents",
    image: "/images/pink-home-decor-ideas/hero.jpg",
    bodyHtml: pinkHomeDecorArticle.body,
  },
  {
    slug: "small-bedroom-organization-ideas",
    title: "15 Small Bedroom Organization Ideas That Actually Stick",
    category: "Bedroom",
    readingTime: "12 min read",
    date: "November 14, 2026",
    excerpt: "From under-bed storage to seasonal rotation — 15 small bedroom organization ideas built around how the room actually gets used, not just how it looks tidy for a day.",
    alt: "Small bedroom organized with smart storage solutions and clear surfaces",
    image: "/images/small-bedroom-organization-ideas/hero.jpg",
    bodyHtml: smallBedroomOrganizationArticle.body,
  },
  {
    slug: "easter-table-setting-ideas",
    title: "15 Easter Table Settings Worth Copying",
    category: "Entertaining",
    readingTime: "11 min read",
    date: "November 15, 2026",
    excerpt: "From classic pastel to glam crystal and candlelight — 15 Easter table settings built on real color harmony, texture and a clear focal point.",
    alt: "Beautifully styled Easter table setting with cohesive color and layered texture",
    image: "/images/easter-table-setting-ideas/hero.jpg",
    bodyHtml: easterTableSettingArticle.body,
  },
  {
    slug: "teen-boy-bedroom-ideas",
    title: "15 Teen Boy Bedroom Ideas That Actually Get Used",
    category: "Bedroom",
    readingTime: "12 min read",
    date: "November 16, 2026",
    excerpt: "From a bold accent wall to a tech charging dock — 15 teen boy bedroom ideas that feel stylish, functional, and genuinely his.",
    alt: "Stylish teen boy bedroom with a bold accent wall and modern furniture",
    image: "/images/teen-boy-bedroom-ideas/hero.jpg",
    bodyHtml: teenBoyBedroomArticle.body,
  },
  {
    slug: "graduation-party-centerpiece-ideas",
    title: "16 Graduation Party Centerpieces Worth Copying",
    category: "Entertaining",
    readingTime: "11 min read",
    date: "November 17, 2026",
    excerpt: "From diploma scrolls to personalized keepsakes — 16 graduation party centerpiece ideas that make the tables feel as planned as the party itself.",
    alt: "Graduation party table styled with centerpieces celebrating the occasion",
    image: "/images/graduation-party-centerpiece-ideas/hero.jpg",
    bodyHtml: graduationCenterpieceArticle.body,
  },
  {
    slug: "dining-room-trends",
    title: "16 Dining Room Trends Worth Trying This Season",
    category: "Dining Room",
    readingTime: "12 min read",
    date: "November 18, 2026",
    excerpt: "From statement ceilings to sculptural chairs — 16 dining room trends that mix comfort with style without feeling intimidating.",
    alt: "Stylish dining room showcasing current design trends with layered textures and lighting",
    image: "/images/dining-room-trends/hero.jpg",
    bodyHtml: diningRoomTrendsArticle.body,
  },
  {
    slug: "makeup-vanity-ideas",
    title: "16 Makeup Vanity Ideas Worth Moving Off the Bathroom Counter",
    category: "Bedroom",
    readingTime: "12 min read",
    date: "November 19, 2026",
    excerpt: "From Hollywood glam to a dual-purpose desk setup — 16 makeup vanity ideas built around real lighting, real storage, and real style.",
    alt: "Beautifully styled makeup vanity with flattering lighting and organized storage",
    image: "/images/makeup-vanity-ideas/hero.jpg",
    bodyHtml: makeupVanityArticle.body,
  },
  {
    slug: "green-bathroom-decor-ideas",
    title: "16 Green Bathroom Decor Ideas Worth Trying",
    category: "Bathroom",
    readingTime: "12 min read",
    date: "November 20, 2026",
    excerpt: "From sage green walls to a bold green and black pairing — 16 green bathroom decor ideas for every shade, style and budget.",
    alt: "Beautifully styled green bathroom with natural textures and warm lighting",
    image: "/images/green-bathroom-decor-ideas/hero.jpg",
    bodyHtml: greenBathroomDecorArticle.body,
  },
  {
    slug: "home-office-aesthetic-ideas",
    title: "16 Home Office Aesthetic Ideas for a Workspace Worth Showing Up To",
    category: "Home Office",
    readingTime: "12 min read",
    date: "November 21, 2026",
    excerpt: "From Scandinavian simplicity to a luxurious library feel — 16 home office aesthetic ideas for every style, from minimalist to maximalist.",
    alt: "Serene and sophisticated home office styled with intention",
    image: "/images/home-office-aesthetic-ideas/hero.jpg",
    bodyHtml: homeOfficeAestheticArticle.body,
  },
  {
    slug: "laundry-room-ideas-effortless",
    title: "16 Laundry Room Ideas That Feel Effortless",
    category: "Decorating",
    readingTime: "12 min read",
    date: "November 22, 2026",
    excerpt: "From a built-in folding station to budget-friendly upgrades — 16 laundry room ideas that make the chore feel genuinely manageable.",
    alt: "Effortless laundry room with smart storage and a calm, functional layout",
    image: "/images/laundry-room-ideas-effortless/hero.jpg",
    bodyHtml: laundryRoomEffortlessArticle.body,
  },
  {
    slug: "easter-wreath-ideas",
    title: "16 Easter Wreaths Worth Hanging on the Door",
    category: "Holidays",
    readingTime: "12 min read",
    date: "November 23, 2026",
    excerpt: "From a classic pastel floral to a luxe gold and white design — 16 Easter wreaths that turn a forgettable front door into something people notice.",
    alt: "Pinterest-worthy Easter wreath hanging on a front door",
    image: "/images/easter-wreath-ideas/hero.jpg",
    bodyHtml: easterWreathArticle.body,
  },
  {
    slug: "winter-dining-table-decor-ideas",
    title: "16 Winter Dining Table Decor Ideas Worth Setting Out",
    category: "Dining Room",
    readingTime: "12 min read",
    date: "November 24, 2026",
    excerpt: "From layered table runners to a single winter-themed center bowl — 16 winter dining table decor ideas that feel cozy, not cluttered.",
    alt: "Elegant winter dining table decor with layered textures and candlelight",
    image: "/images/winter-dining-table-decor-ideas/hero.jpg",
    bodyHtml: winterDiningTableDecorArticle.body,
  },
  {
    slug: "handcrafted-wall-decor-ideas",
    title: "17 Handcrafted Wall Decor Ideas Worth Making Yourself",
    category: "Wall Decor",
    readingTime: "11 min read",
    date: "November 25, 2026",
    excerpt: "From macramé hangings to painted rock art — 17 handcrafted wall decor ideas that bring genuine texture and personality no store-bought piece can match.",
    alt: "Dramatic handcrafted sculptural wall art installation behind a desk",
    image: "/images/handcrafted-wall-decor-ideas/hero.jpg",
    bodyHtml: handcraftedWallDecorArticle.body,
  },
  {
    slug: "desserts-in-a-cup-ideas",
    title: "17 Desserts in a Cup for Every Kind of Party",
    category: "Entertaining",
    readingTime: "11 min read",
    date: "November 26, 2026",
    excerpt: "From classic Oreo to s'mores — 17 desserts in a cup that solve portioning, presentation and the last-slice fight all at once.",
    alt: "Assortment of individually portioned dessert cups styled for a party",
    image: "/images/desserts-in-a-cup-ideas/hero.jpg",
    bodyHtml: dessertsInACupArticle.body,
  },
  {
    slug: "party-table-setup-ideas",
    title: "16 Party Table Setup Ideas for Every Occasion",
    category: "Entertaining",
    readingTime: "12 min read",
    date: "November 27, 2026",
    excerpt: "From a classic layered table to a last-minute panic-mode setup — 16 party table ideas that fit the actual occasion instead of chasing a trend.",
    alt: "Beautifully styled party table setup with layered serving pieces and decor",
    image: "/images/party-table-setup-ideas/hero.jpg",
    bodyHtml: partyTableSetupArticle.body,
  },
  {
    slug: "stacked-laundry-room-ideas",
    title: "17 Stacked Laundry Room Ideas Worth Copying",
    category: "Decorating",
    readingTime: "12 min read",
    date: "November 28, 2026",
    excerpt: "From a closet-style setup with sliding doors to an ultra-compact tiny-home build — 17 stacked laundry room ideas for every footprint.",
    alt: "Stylish stacked washer and dryer laundry setup with smart storage",
    image: "/images/stacked-laundry-room-ideas/hero.jpg",
    bodyHtml: stackedLaundryRoomArticle.body,
  },
  {
    slug: "bathroom-design-styles",
    title: "17 Bathroom Design Styles Worth Trying",
    category: "Bathroom",
    readingTime: "13 min read",
    date: "November 29, 2026",
    excerpt: "From farmhouse charm to a high-tech haven — 17 bathroom design styles that prove this room can be just as expressive as the rest of the house.",
    alt: "Stunning modern industrial bathroom showcasing a distinct design style",
    image: "/images/bathroom-design-styles/hero.jpg",
    bodyHtml: bathroomDesignStylesArticle.body,
  },
  {
    slug: "kitchen-window-treatment-ideas",
    title: "18 Kitchen Window Treatments Worth Trying",
    category: "Kitchen",
    readingTime: "13 min read",
    date: "November 30, 2026",
    excerpt: "From breezy sheer curtains to bold geometric panels — 18 kitchen window treatments that pull the whole room together.",
    alt: "Stunning Scandinavian-inspired kitchen with a beautifully styled window treatment",
    image: "/images/kitchen-window-treatment-ideas/hero.jpg",
    bodyHtml: kitchenWindowTreatmentArticle.body,
  },
  {
    slug: "tv-stand-decor-ideas",
    title: "18 TV Stand Decor Ideas That Actually Work",
    category: "Living Room",
    readingTime: "13 min read",
    date: "December 1, 2026",
    excerpt: "From symmetrical styling to balanced asymmetry — 18 TV stand decor ideas that turn a neglected surface into something intentional.",
    alt: "Beautifully styled TV stand with thoughtfully arranged decor",
    image: "/images/tv-stand-decor-ideas/hero.jpg",
    bodyHtml: tvStandDecorArticle.body,
  },
  {
    slug: "pumpkin-carving-ideas",
    title: "18 Cute Pumpkin Carving Ideas Worth Trying",
    category: "Holidays",
    readingTime: "12 min read",
    date: "December 2, 2026",
    excerpt: "From a sleepy crescent moon to a tiny pumpkin family — 18 cute pumpkin carving ideas that skip the scary jack-o'-lantern entirely.",
    alt: "Collection of cute carved pumpkins styled for a charming fall display",
    image: "/images/pumpkin-carving-ideas/hero.jpg",
    bodyHtml: pumpkinCarvingArticle.body,
  },
  {
    slug: "fall-mantel-decor-ideas",
    title: "18 Fall Mantel Decor Ideas to Try This Season",
    category: "Decorating",
    readingTime: "13 min read",
    date: "December 3, 2026",
    excerpt: "From a leafy garland with mini pumpkins to a moody brown palette — 18 fall mantel decor ideas that feel cozy without looking like a seasonal gift shop.",
    alt: "Living room with a fireplace mantel ready for fall styling",
    image: "/images/fall-mantel-decor-ideas/hero.jpg",
    bodyHtml: fallMantelDecorArticle.body,
  },
  {
    slug: "round-tray-decor-ideas",
    title: "18 Round Tray Decor Ideas for Every Room",
    category: "Decorating",
    readingTime: "13 min read",
    date: "December 4, 2026",
    excerpt: "From a coffee table centerpiece to a bar cart moment — 18 round tray decor ideas that organize clutter without losing the style.",
    alt: "Round wood tray styled with a vase, candlesticks and a candle on a coffee table",
    image: "/images/round-tray-decor-ideas/hero.jpg",
    bodyHtml: roundTrayDecorArticle.body,
  },
  {
    slug: "black-gold-gallery-wall-ideas",
    title: "Black and Gold Gallery Wall Ideas for a Bold, Sophisticated Look",
    category: "Wall Decor",
    readingTime: "11 min read",
    date: "December 5, 2026",
    excerpt: "Frames, art, layout and lighting — a complete guide to building a black and gold gallery wall that reads as sophisticated, not themed.",
    alt: "Luxurious black and gold gallery wall styled behind a sofa with a statement clock",
    image: "/images/black-gold-gallery-wall-ideas/hero.jpg",
    bodyHtml: blackGoldGalleryWallArticle.body,
  },
  {
    slug: "spring-centerpiece-ideas",
    title: "18 Spring Centerpiece Ideas for a Fresh Home",
    category: "Decorating",
    readingTime: "13 min read",
    date: "December 6, 2026",
    excerpt: "From a lemon bowl to a single statement branch — 18 spring centerpiece ideas that take under 15 minutes and skip the expensive flower order.",
    alt: "Pink tulip arrangement with a striped bow styled on a wood console table",
    image: "/images/spring-centerpiece-ideas/hero.jpg",
    bodyHtml: springCenterpieceArticle.body,
  },
  {
    slug: "mudroom-ideas",
    title: "19 Mudroom Ideas for Every Home",
    category: "Entryway",
    readingTime: "13 min read",
    date: "December 7, 2026",
    excerpt: "From a built-in bench to a seasonal storage rotation — 19 mudroom ideas that actually hold up to real daily use.",
    alt: "Built-in mudroom bench with open storage cubbies, hooks and a window seat",
    image: "/images/mudroom-ideas/hero.jpg",
    bodyHtml: mudroomIdeasArticle.body,
  },
  {
    slug: "side-table-decor-ideas",
    title: "19 Side Table Decor Ideas for a Charming Look",
    category: "Decorating",
    readingTime: "14 min read",
    date: "December 8, 2026",
    excerpt: "From layered books to intentional negative space — 19 side table decor ideas built around height, texture and a little restraint.",
    alt: "Round side table styled with books, an orchid and a black table lamp",
    image: "/images/side-table-decor-ideas/hero.jpg",
    bodyHtml: sideTableDecorArticle.body,
  },
  {
    slug: "winter-wonderland-home-decor-ideas",
    title: "Winter Wonderland Home Decor Ideas for a Cozy Space",
    category: "Decorating",
    readingTime: "12 min read",
    date: "December 9, 2026",
    excerpt: "Layered textiles, warm lighting and a bit of greenery — a complete guide to making a home feel like a winter retreat.",
    alt: "Cozy winter living room with string lights, a flocked wreath and a candlelit coffee table",
    image: "/images/winter-wonderland-home-decor-ideas/hero.jpg",
    bodyHtml: winterWonderlandArticle.body,
  },
  {
    slug: "mothers-day-crafts-for-kids",
    title: "20 Adorable Mother's Day Crafts for Kids of Every Age",
    category: "Holidays",
    readingTime: "14 min read",
    date: "December 10, 2026",
    excerpt: "From a handprint bouquet to a handwritten video message — 20 Mother's Day crafts that scale from toddlers to teens.",
    alt: "Framed Mother's Day craft with buttons spelling MUMS and a handwritten message",
    image: "/images/mothers-day-crafts-for-kids/hero.jpg",
    bodyHtml: mothersDayCraftsArticle.body,
  },
  {
    slug: "bedroom-wall-decor-ideas",
    title: "Creative Wall Decor Ideas for Your Bedroom",
    category: "Bedroom",
    readingTime: "11 min read",
    date: "December 11, 2026",
    excerpt: "From a gallery wall to a cluster of vintage mirrors — ten ways to turn a plain bedroom wall into the room's focal point.",
    alt: "Bedroom with a dramatic oversized abstract art mural behind the bed",
    image: "/images/bedroom-wall-decor-ideas/hero.jpg",
    bodyHtml: bedroomWallDecorArticle.body,
  },
  {
    slug: "boho-bedroom-decor-ideas",
    title: "20 Dreamy Boho Bedroom Decor Ideas",
    category: "Bedroom",
    readingTime: "14 min read",
    date: "December 12, 2026",
    excerpt: "From layered textiles to a sunburst mirror — 20 boho bedroom decor ideas built on texture, global pieces and a little imperfection.",
    alt: "Boho bedroom with draped curtains, layered textiles and a woven rug",
    image: "/images/boho-bedroom-decor-ideas/hero.jpg",
    bodyHtml: bohoBedroomDecorArticle.body,
  },
  {
    slug: "small-backyard-pool-ideas",
    title: "20 Genius Small Backyard Swimming Pool Ideas",
    category: "Outdoor",
    readingTime: "15 min read",
    date: "December 13, 2026",
    excerpt: "From plunge pools to glass-edged designs — 20 small backyard pool ideas that turn limited space into the whole design advantage.",
    alt: "Small narrow backyard pool with a stone wall and wood deck",
    image: "/images/small-backyard-pool-ideas/hero.jpg",
    bodyHtml: smallBackyardPoolArticle.body,
  },
  {
    slug: "neutral-bedroom-ideas",
    title: "Neutral Bedroom Ideas for a Timeless, Elegant Look",
    category: "Bedroom",
    readingTime: "12 min read",
    date: "December 14, 2026",
    excerpt: "Palette, texture, lighting and seasonal swaps — a complete guide to building a neutral bedroom that feels calm, not boring.",
    alt: "Warm neutral bedroom with layered bedding, open shelving and ambient lighting",
    image: "/images/neutral-bedroom-ideas/hero.jpg",
    bodyHtml: neutralBedroomArticle.body,
  },
  {
    slug: "outdoor-kitchen-ideas",
    title: "20 Outdoor Kitchen Ideas to Transform Your Backyard",
    category: "Outdoor",
    readingTime: "15 min read",
    date: "December 15, 2026",
    excerpt: "From a built-in grill station to budget-friendly phased upgrades — 20 outdoor kitchen ideas that extend a home's living space.",
    alt: "Built-in outdoor kitchen with a pergola, grill and stone countertop in a desert backyard",
    image: "/images/outdoor-kitchen-ideas/hero.jpg",
    bodyHtml: outdoorKitchenArticle.body,
  },
  {
    slug: "timeless-kitchen-paint-colors",
    title: "20 Timeless Kitchen Paint Colors to Transform Your Space",
    category: "Kitchen",
    readingTime: "14 min read",
    date: "December 16, 2026",
    excerpt: "From soft white to deep forest green — 20 timeless kitchen paint colors picked for how well they hold up long after the trend cycle moves on.",
    alt: "Elegant kitchen painted in a timeless blush tone with a large floral centerpiece",
    image: "/images/timeless-kitchen-paint-colors/hero.jpg",
    bodyHtml: timelessKitchenPaintArticle.body,
  },
  {
    slug: "tv-wall-decor-ideas",
    title: "20 TV Wall Decor Ideas to Elevate Your Entertainment Space",
    category: "Living Room",
    readingTime: "14 min read",
    date: "December 17, 2026",
    excerpt: "From a bold accent wall to a built-in niche — 20 TV wall decor ideas that turn the screen into just one part of a considered wall.",
    alt: "Sophisticated living room with a TV mounted on a dark textured accent wall",
    image: "/images/tv-wall-decor-ideas/hero.jpg",
    bodyHtml: tvWallDecorArticle.body,
  },
  {
    slug: "texture-in-home-decor",
    title: "18 Unique Ways to Use Texture in Home Decor",
    category: "Decorating",
    readingTime: "13 min read",
    date: "December 18, 2026",
    excerpt: "From layered rugs to woven wall art — 18 ways to bring real texture into a room without a full redesign.",
    alt: "Cozy textured living room with layered rugs, faux fur and velvet pillows",
    image: "/images/texture-in-home-decor/hero.jpg",
    bodyHtml: textureInHomeDecorArticle.body,
  },
  {
    slug: "winter-craft-ideas",
    title: "20 Winter Craft Ideas That Actually Feel Worth Making",
    category: "Holidays",
    readingTime: "14 min read",
    date: "December 19, 2026",
    excerpt: "From a chunky yarn wreath to a cozy blanket ladder — 20 winter craft ideas that double as decor worth keeping up all season.",
    alt: "Winter shadow box craft with a felted snowman and birch branches",
    image: "/images/winter-craft-ideas/hero.jpg",
    bodyHtml: winterCraftArticle.body,
  },
  {
    slug: "christmas-bedroom-decor-ideas",
    title: "22 Christmas Bedroom Decor Ideas for a Cozy Holiday Retreat",
    category: "Bedroom",
    readingTime: "16 min read",
    date: "December 20, 2026",
    excerpt: "From a greenery headboard to a layered neutral palette — 22 Christmas bedroom decor ideas that turn a plain bedroom into a genuine holiday retreat.",
    alt: "Christmas bedroom with a greenery and string light headboard",
    image: "/images/christmas-bedroom-decor-ideas/hero.jpg",
    bodyHtml: christmasBedroomDecorArticle.body,
  },
  {
    slug: "bathroom-mirror-ideas",
    title: "Gorgeous Bathroom Mirror Ideas to Upgrade Your Vanity Area",
    category: "Bathroom",
    readingTime: "11 min read",
    date: "December 21, 2026",
    excerpt: "From a backlit round mirror to a full smart-mirror setup — a complete guide to choosing the right mirror for any bathroom vanity.",
    alt: "Backlit rectangular bathroom mirror above a wood vanity",
    image: "/images/bathroom-mirror-ideas/hero.jpg",
    bodyHtml: bathroomMirrorArticle.body,
  },
  {
    slug: "christmas-gift-basket-ideas",
    title: "23 Christmas Gift Basket Ideas That Feel Thoughtful and Personal",
    category: "Holidays",
    readingTime: "17 min read",
    date: "December 22, 2026",
    excerpt: "From a cozy homebody basket to a personalized name-embroidered one — 23 Christmas gift basket ideas built around one strong centerpiece instead of a pile of extras.",
    alt: "Cozy Christmas gift basket filled with plaid pillows and a tartan throw",
    image: "/images/christmas-gift-basket-ideas/hero.jpg",
    bodyHtml: christmasGiftBasketArticle.body,
  },
  {
    slug: "christmas-appetizer-ideas",
    title: "24 Christmas Appetizer Ideas for Your Holiday Table",
    category: "Entertaining",
    readingTime: "17 min read",
    date: "December 23, 2026",
    excerpt: "From cranberry brie crostini to a tree-shaped charcuterie board — 24 Christmas appetizer ideas that balance rich and light for a holiday spread.",
    alt: "Full Christmas appetizer spread with charcuterie, skewers and dips on a holiday table",
    image: "/images/christmas-appetizer-ideas/hero.jpg",
    bodyHtml: christmasAppetizerArticle.body,
  },
  {
    slug: "black-farmhouse-living-room-ideas",
    title: "Black Farmhouse Living Room Ideas for a Bold and Elegant Look",
    category: "Living Room",
    readingTime: "11 min read",
    date: "December 24, 2026",
    excerpt: "From a black leather sofa to brass-and-black light fixtures — 10 ways to add bold contrast to a farmhouse living room without losing its warmth.",
    alt: "Black farmhouse living room with a vaulted ceiling and fireplace",
    image: "/images/black-farmhouse-living-room-ideas/hero.jpg",
    bodyHtml: blackFarmhouseLivingRoomArticle.body,
  },
  {
    slug: "diy-christmas-gift-ideas",
    title: "25 DIY Christmas Gift Ideas That Feel Personal and Actually Useful",
    category: "Holidays",
    readingTime: "18 min read",
    date: "December 25, 2026",
    excerpt: "From personalized candles to a handmade memory jar — 25 DIY Christmas gift ideas built around a little time and a specific person in mind.",
    alt: "Hand-painted wooden Christmas ornaments being crafted on a table",
    image: "/images/diy-christmas-gift-ideas/hero.jpg",
    bodyHtml: diyChristmasGiftArticle.body,
  },
  {
    slug: "farmhouse-living-room-ideas",
    title: "10 Farmhouse Living Room Ideas for a Rustic and Cozy Feel",
    category: "Living Room",
    readingTime: "11 min read",
    date: "December 26, 2026",
    excerpt: "From a reclaimed wood coffee table to layered rugs — 10 farmhouse living room ideas built on natural materials and a bit of history.",
    alt: "Neutral farmhouse living room with shiplap walls and a reclaimed wood coffee table",
    image: "/images/farmhouse-living-room-ideas/hero.jpg",
    bodyHtml: farmhouseLivingRoomArticle.body,
  },
  {
    slug: "diy-farmhouse-bathroom-decor",
    title: "18 Easy DIY Farmhouse-Style Bathroom Decor Projects",
    category: "Bathroom",
    readingTime: "13 min read",
    date: "December 27, 2026",
    excerpt: "From a repurposed ladder towel rack to a hand-built wooden vanity — 18 farmhouse bathroom DIY projects that don't require a contractor.",
    alt: "Rustic reclaimed wood bathroom vanity with a vessel sink and brass fixtures",
    image: "/images/diy-farmhouse-bathroom-decor/hero.jpg",
    bodyHtml: diyFarmhouseBathroomArticle.body,
  },
  {
    slug: "half-bathroom-ideas",
    title: "14 Half Bathroom Ideas for an Inviting Space",
    category: "Bathroom",
    readingTime: "11 min read",
    date: "December 28, 2026",
    excerpt: "From a statement mirror to a sliding pocket door — 14 half bathroom ideas that make the most of a room with very little square footage.",
    alt: "Modern half bathroom with a floating vanity and statement lighting",
    image: "/images/half-bathroom-ideas/hero.jpg",
    bodyHtml: halfBathroomArticle.body,
  },
  {
    slug: "winter-decor-cozy-home",
    title: "14 Winter Decor Ideas for a Cozy Home",
    category: "Decorating",
    readingTime: "12 min read",
    date: "December 29, 2026",
    excerpt: "From chunky throws to a cohesive winter color palette — 14 ways to make a home feel genuinely cozy through the colder months.",
    alt: "Cozy living room with chunky knit throws and faux fur pillows styled for winter",
    image: "/images/winter-decor-cozy-home/hero.jpg",
    bodyHtml: winterDecorCozyHomeArticle.body,
  },
  {
    slug: "bathroom-sink-decor-ideas",
    title: "15 Bathroom Sink Decor Ideas That Actually Make a Bathroom Look Great",
    category: "Bathroom",
    readingTime: "12 min read",
    date: "December 30, 2026",
    excerpt: "From a decorative tray to a subtle metallic accent — 15 bathroom sink decor ideas that make the most-used surface in the house look intentional.",
    alt: "Styled bathroom sink with a soap dispenser, greenery and rolled towels",
    image: "/images/bathroom-sink-decor-ideas/hero.jpg",
    bodyHtml: bathroomSinkDecorArticle.body,
  },
  {
    slug: "dining-table-centerpiece-ideas",
    title: "15 Beautiful Dining Table Centerpiece Ideas You Can Copy",
    category: "Dining Room",
    readingTime: "12 min read",
    date: "December 31, 2026",
    excerpt: "From a low floral arrangement to a rustic dough bowl — 15 dining table centerpiece ideas built around one strong focal point.",
    alt: "Candle cluster centerpiece with greenery and mini pumpkins on a dining table",
    image: "/images/dining-table-centerpiece-ideas/hero.jpg",
    bodyHtml: diningTableCenterpieceArticle.body,
  },
  {
    slug: "farmhouse-decor-ideas",
    title: "15 Farmhouse Decor Ideas for a Cozy Home",
    category: "Decorating",
    readingTime: "13 min read",
    date: "January 1, 2027",
    excerpt: "From reclaimed wood furniture to layered neutral textiles — 15 farmhouse decor ideas built on comfort, texture and a bit of lived-in imperfection.",
    alt: "Farmhouse kitchen with exposed beams, a butcher block island and vintage pendant lights",
    image: "/images/farmhouse-decor-ideas/hero.jpg",
    bodyHtml: farmhouseDecorArticle.body,
  },
  {
    slug: "home-office-productive-workspace",
    title: "10 Ways to Turn a Spare Corner Into a Home Office You Actually Want to Work In",
    category: "Home Office",
    readingTime: "9 min read",
    date: "January 2, 2027",
    excerpt: "From a chair worth sitting in to real natural light — 10 practical changes that turn any spare corner into a home office that actually gets used.",
    alt: "Modern, sleek home office setup with an ergonomic chair and adjustable desk",
    image: "/images/home-office-productive-workspace/hero.png",
    bodyHtml: homeOfficeWorkspaceArticle.body,
  },
  {
    slug: "small-pantry-organization-hacks",
    title: "15 Small Pantry Organization Hacks for a Clutter-Free Kitchen",
    category: "Kitchen",
    readingTime: "10 min read",
    date: "January 3, 2027",
    excerpt: "From vertical storage to a slim rolling cart — 15 small pantry organization hacks that work even in a single cabinet or narrow closet.",
    alt: "Modern pantry with pull-out shelving neatly organized with canned goods and jars",
    image: "/images/small-pantry-organization-hacks/hero.jpeg",
    bodyHtml: smallPantryHacksArticle.body,
  },
  {
    slug: "laundry-room-routine-workflow",
    title: "16 Laundry Room Ideas Built Around Your Actual Routine",
    category: "Laundry Room",
    readingTime: "9 min read",
    date: "January 4, 2027",
    excerpt: "From task lighting to a pegboard that can change with you — 16 laundry room ideas organized around how the space actually gets used.",
    alt: "Bright laundry room with a front-load washer, woven baskets and open shelving",
    image: "/images/laundry-room-routine-workflow/hero.jpg",
    bodyHtml: laundryRoomRoutineArticle.body,
  },
  {
    slug: "top-of-fridge-styling-guide",
    title: "16 Top-of-Fridge Styling Ideas (and When to Just Leave It Empty)",
    category: "Kitchen",
    readingTime: "11 min read",
    date: "January 5, 2027",
    excerpt: "From oversized woven baskets to knowing when to leave it bare — 16 top-of-fridge styling ideas built around an actual decision framework, not just a shopping list.",
    alt: "Styled top of fridge with a Magnolia Home tray, cookbook and greenery",
    image: "/images/top-of-fridge-styling-guide/intro-eye-level.jpg",
    bodyHtml: topOfFridgeStylingArticle.body,
  },
  {
    slug: "elegant-powder-room-design-direction",
    title: "17 Elegant Powder Room Ideas That Actually Feel Intentional",
    category: "Bathroom",
    readingTime: "13 min read",
    date: "January 6, 2027",
    excerpt: "From picking one hero element to knowing which finishes to repeat — 17 elegant powder room ideas built around a real decision framework, not just a shopping list.",
    alt: "Elegant small powder room with a floating vanity, backlit mirror and warm wood tones",
    image: "/images/elegant-powder-room-design-direction/hero.jpg",
    bodyHtml: elegantPowderRoomArticle.body,
  },
  {
    slug: "desk-setup-configurations",
    title: "17 Desk Setup Configurations for How You Actually Work",
    category: "Home Office",
    readingTime: "11 min read",
    date: "January 7, 2027",
    excerpt: "From a dual-monitor station to a setup built for a side hobby — 17 desk configurations organized around how the work actually happens, not just how it looks.",
    alt: "Ergonomic home office chair paired with an adjustable standing desk",
    image: "/images/desk-setup-configurations/ergonomic.png",
    bodyHtml: deskSetupConfigurationsArticle.body,
  },
  {
    slug: "above-fireplace-scale-proportion",
    title: "15 Above-Fireplace Ideas Built Around Scale and Proportion",
    category: "Living Room",
    readingTime: "11 min read",
    date: "January 8, 2027",
    excerpt: "From oversized artwork to knowing when to leave it empty — 15 above-fireplace ideas built around getting the scale right first, not just picking a style.",
    alt: "Fireplace mantel styled with a round mirror, dried branches and ceramic vases",
    image: "/images/above-fireplace-scale-proportion/hero.jpg",
    bodyHtml: aboveFireplaceScaleArticle.body,
  },
  {
    slug: "bathroom-organization-zone-system",
    title: "15 Bathroom Organization Hacks Built Around a Real Zone System",
    category: "Bathroom",
    readingTime: "10 min read",
    date: "January 9, 2027",
    excerpt: "From drawer dividers to a labeled zone system — 15 bathroom organization hacks built around actual daily habits, not just a shopping list of bins.",
    alt: "Modern bathroom with tiered shelving used for vertical organization",
    image: "/images/bathroom-organization-zone-system/tiered-shelving.png",
    bodyHtml: bathroomOrgZoneArticle.body,
  },
  {
    slug: "black-powder-room-material-choices",
    title: "12 Black Powder Room Ideas, Executed Through Material Choice",
    category: "Bathroom",
    readingTime: "10 min read",
    date: "January 10, 2027",
    excerpt: "From matte walls with brass accents to black paired with warm wood — 12 black powder room ideas built around how the color actually gets executed, surface by surface.",
    alt: "Elegant black powder room with striking contrast and bold finishes",
    image: "/images/black-powder-room-material-choices/hero.png",
    bodyHtml: blackPowderRoomArticle.body,
  },
  {
    slug: "console-table-styling-rules",
    title: "12 Console Table Styling Rules That Actually Work",
    category: "Entryway",
    readingTime: "11 min read",
    date: "January 11, 2027",
    excerpt: "From the one golden rule to twelve ways to put it into practice — console table styling built around restraint and scale, not just a shopping list of objects.",
    alt: "Vintage-style console table styled with a mirror, lamp and small bowl",
    image: "/images/console-table-styling-rules/hero.jpg",
    bodyHtml: consoleTableStylingArticle.body,
  },
  {
    slug: "bedroom-self-expression-ideas",
    title: "12 Ways to Make a Bedroom Feel Like Genuinely Yours",
    category: "Bedroom",
    readingTime: "10 min read",
    date: "January 12, 2027",
    excerpt: "From a DIY wall display to a mood board that actually gets used — 12 bedroom ideas built around self-expression and personality, not just comfort.",
    alt: "Tranquil bedroom in soft pastel tones with layered textures",
    image: "/images/bedroom-self-expression-ideas/hero.png",
    bodyHtml: bedroomSelfExpressionArticle.body,
  },
  {
    slug: "nursery-design-direction-guide",
    title: "14 Nursery Design Directions to Pick Before You Buy Anything",
    category: "Nursery",
    readingTime: "13 min read",
    date: "January 13, 2027",
    excerpt: "From neutral and timeless to small-space-first — 14 complete nursery design directions to choose from before buying a single piece of furniture.",
    alt: "Soft, calming baby nursery room with warm natural light",
    image: "/images/nursery-design-direction-guide/hero.jpg",
    bodyHtml: nurseryDesignDirectionArticle.body,
  },
  {
    slug: "coffee-station-placement-workflow",
    title: "15 Coffee Station Ideas, Built Around Placement and Daily Workflow",
    category: "Kitchen",
    readingTime: "13 min read",
    date: "January 14, 2027",
    excerpt: "From choosing the right spot to picking a style that fits — 15 coffee station ideas organized around what actually gets used every morning, not just what photographs well.",
    alt: "Stylish home coffee bar setup transformed into a cozy cafe-style nook",
    image: "/images/coffee-station-placement-workflow/hero.jpg",
    bodyHtml: coffeeStationPlacementArticle.body,
  },
  {
    slug: "woven-tray-styling-contents",
    title: "What to Actually Put on a Woven Tray, by Category",
    category: "Decorating",
    readingTime: "8 min read",
    date: "January 15, 2027",
    excerpt: "From a bar setup to a candle grouping — a guide to styling a woven tray based on what it needs to hold, not just which room it sits in.",
    alt: "Woven tray styled with candles, greenery and small decorative objects",
    image: "/images/woven-tray-styling-contents/hero.jpg",
    bodyHtml: wovenTrayStylingArticle.body,
  },
  {
    slug: "bathroom-refresh-priority-guide",
    title: "Bathroom Refresh Priorities: What to Do First, Save For, and Plan Around",
    category: "Bathroom",
    readingTime: "14 min read",
    date: "January 16, 2027",
    excerpt: "From quick weekend wins to changes worth a real splurge — 20 bathroom refresh ideas sorted by priority and budget instead of just listed alphabetically.",
    alt: "Luxurious bathroom with plush oversized towels and elegant styling",
    image: "/images/bathroom-refresh-priority-guide/hero.png",
    bodyHtml: bathroomRefreshPriorityArticle.body,
  },
  {
    slug: "spa-bathroom-reality-check",
    title: "20 Spa Bathroom Features, Ranked by How Realistic They Actually Are",
    category: "Bathroom",
    readingTime: "14 min read",
    date: "January 17, 2027",
    excerpt: "From a weekend towel swap to a full steam shower install — 20 spa bathroom features sorted by what they actually take to pull off, not just how they photograph.",
    alt: "Serene and opulent spa-like bathroom with soft lighting",
    image: "/images/spa-bathroom-reality-check/hero.png",
    bodyHtml: spaBathroomRealityArticle.body,
  },
  {
    slug: "small-bedroom-visual-space-tricks",
    title: "20 Ways to Make a Small Bedroom Look Bigger, Not Just More Organized",
    category: "Bedroom",
    readingTime: "14 min read",
    date: "January 18, 2027",
    excerpt: "From floor-to-ceiling curtains to a well-placed mirror — 20 visual tricks that make a small bedroom feel larger, separate from any storage system.",
    alt: "Beautifully designed small bedroom with a light, airy feel",
    image: "/images/small-bedroom-visual-space-tricks/hero.jpeg",
    bodyHtml: smallBedroomVisualTricksArticle.body,
  },
  {
    slug: "post-christmas-winter-transition",
    title: "How to Transition From Christmas to Winter Decor, Step by Step",
    category: "Decorating",
    readingTime: "14 min read",
    date: "January 19, 2027",
    excerpt: "From what to take down first to what quietly stays — 20 ideas for moving a home from holiday decor into a cozy winter look without starting over.",
    alt: "Cozy winter living room with warm textures after Christmas decor comes down",
    image: "/images/post-christmas-winter-transition/hero.jpg",
    bodyHtml: postChristmasWinterArticle.body,
  },
  {
    slug: "boho-bedroom-diy-vs-buy",
    title: "23 Boho Bedroom Pieces: What to Thrift, What to DIY, What to Buy New",
    category: "Bedroom",
    readingTime: "15 min read",
    date: "January 20, 2027",
    excerpt: "From a thrifted carved mirror to a statement rug worth buying new — 23 boho bedroom pieces sorted by how they actually get acquired, not just what they look like.",
    alt: "Serene bohemian bedroom exuding comfort and warmth",
    image: "/images/boho-bedroom-diy-vs-buy/hero.png",
    bodyHtml: bohoBedroomDiyBuyArticle.body,
  },
  {
    slug: "home-decor-trends-worth-adopting",
    title: "24 Home Decor Trends: Which Ones Are Actually Worth Adopting",
    category: "Decorating",
    readingTime: "16 min read",
    date: "January 21, 2027",
    excerpt: "From safe bets like mixed textures and vintage finds to riskier swings like curved furniture — an honest read on 24 current home decor trends.",
    alt: "Futuristic home interior seamlessly blending modern design elements",
    image: "/images/home-decor-trends-worth-adopting/hero.png",
    bodyHtml: homeDecorTrendsArticle.body,
  },
  {
    slug: "bedroom-office-boundary-setting",
    title: "20 Bedroom Office Setups That Actually Separate Work From Sleep",
    category: "Home Office",
    readingTime: "14 min read",
    date: "January 22, 2027",
    excerpt: "From a curtain-covered hideaway to a desk that folds flat against the wall — 20 ways to keep a shared bedroom office from blurring into the rest of the room.",
    alt: "Warm and inviting bedroom workspace balancing comfort and function",
    image: "/images/bedroom-office-boundary-setting/hero.png",
    bodyHtml: bedroomOfficeBoundaryArticle.body,
  },
];

const allPosts = externalPosts.concat(longFormPosts);

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

// Converts "September 27, 2026" -> "2026-09-27" for sitemap <lastmod>.
function toIsoDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

const STATIC_PAGE_SLUGS = ["", "blog", "about", "contact", "start-here", "privacy", "terms"];

function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);

  const postUrls = allPosts.map((post) => {
    const lastmod = post.date ? toIsoDate(post.date) : null;
    return { loc: `https://khizrashahroz.com/${post.slug}/`, lastmod };
  });

  const staticUrls = STATIC_PAGE_SLUGS.map((slug) => ({
    loc: `https://khizrashahroz.com/${slug ? slug + "/" : ""}`,
    lastmod: today,
  }));

  const urls = staticUrls.concat(postUrls);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>
`;

  fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml);
}

function writeRobotsTxt() {
  const txt = `User-agent: *
Allow: /

Sitemap: https://khizrashahroz.com/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST, "robots.txt"), txt);
}

function writeLongPost(post) {
  const body = `
<section class="page-hero">
  <div class="wrap-1240">
    <p class="breadcrumb"><a href="/blog/">Blog</a> / ${post.category}</p>
    <h1>${post.title}</h1>
    <p class="lede">${post.excerpt}</p>
  </div>
</section>
<article class="section prose">
  <div class="wrap-1240">
    ${post.bodyHtml}
    <p style="margin-top:2.5em"><a href="/blog/" class="btn-underline">Back to all posts <span aria-hidden="true">→</span></a></p>
  </div>
</article>`;
  const html = page({
    title: `${post.title} — Khizra Shahroz`,
    description: post.excerpt,
    canonical: `https://khizrashahroz.com/${post.slug}/`,
    current: "",
    body,
  });
  const dir = path.join(DIST, post.slug);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

function writeBlog() {
  const cards = allPosts
    .map(
      (p) => `<article class="compact-card">
        <a href="/${p.slug}/" class="photo-link" aria-label="${p.title}">
          <div class="photo-slot" role="img" aria-label="${p.alt || p.title}" style="background-image:${bgImageSet(p.image)};background-size:cover;background-position:center;"></div>
        </a>
        <div>
          <div class="post-meta-row"><span>${p.category}</span><span class="divider" aria-hidden="true">/</span><span class="time">${p.readingTime}</span></div>
          <h3><a href="/${p.slug}/">${p.title}</a></h3>
          <p class="excerpt">${p.excerpt}</p>
        </div>
      </article>`
    )
    .join("\n      ");

  const body = `
<section class="page-hero">
  <div class="wrap-1240">
    <p class="eyebrow" style="justify-content:center;display:flex">From the blog</p>
    <h1>All decorating ideas</h1>
    <p class="lede">Every article, newest first — decor, color, and seasonal inspiration for making your home feel like you.</p>
  </div>
</section>
<section class="section latest">
  <div class="wrap-1360">
    <div class="blog-grid">
      ${cards}
    </div>
  </div>
</section>`;
  const dir = path.join(DIST, "blog");
  ensureDir(dir);
  fs.writeFileSync(
    path.join(dir, "index.html"),
    page({
      title: "Blog — Khizra Shahroz",
      description: "Every home decor article from Khizra Shahroz — decorating ideas, color palettes, and seasonal inspiration.",
      canonical: "https://khizrashahroz.com/blog/",
      current: "/blog/",
      body,
    })
  );
}

function writeAbout() {
  const body = `
<section class="section about" style="border-bottom:1px solid var(--hairline)">
  <div class="wrap-1240 about-grid">
    <div class="about-portrait">
      <div class="photo-slot" role="img" aria-label="Khizra Shahroz styling a bookshelf in her cream-toned living room">
        <span>portrait of khizra<br>5:6 — editorial crop, at home</span>
      </div>
      <span class="handwritten-accent" aria-hidden="true">make it yours ♡</span>
    </div>
    <div>
      <p class="eyebrow">Meet Khizra</p>
      <h1 style="font-family:'Playfair Display',serif;font-weight:400;font-size:clamp(30px, 3.9vw, 50px);line-height:1.12;letter-spacing:-.01em;">Decorating should feel exciting—not overwhelming.</h1>
      <div class="about-copy">
        <p>Hi, I'm Khizra. I believe a beautiful home doesn't have to be complicated, expensive, or perfectly styled all the time.</p>
        <p>I'm here to share the decorating ideas, color combinations, cozy corners, and little details that can make your space feel more like you.</p>
        <p>Whether you're refreshing one room or dreaming up an entirely new home: pretty rooms, practical ideas, and plenty of reasons to redecorate.</p>
      </div>
    </div>
  </div>
</section>
<section class="section prose">
  <div class="wrap-1240">
    <h2>How Khizra Shahroz started</h2>
    <p>What began as a place to keep track of my own decorating decisions has grown into a home for anyone who wants their space to feel warmer, more personal, and a little more finished — without a full renovation budget.</p>
    <h2>Work with me</h2>
    <p>I partner with home brands on styled photography, product features, and honest reviews. If that sounds like a fit, <a href="/contact/">get in touch</a>.</p>
  </div>
</section>`;
  const dir = path.join(DIST, "about");
  ensureDir(dir);
  fs.writeFileSync(
    path.join(dir, "index.html"),
    page({
      title: "About Khizra — Khizra Shahroz",
      description: "Meet Khizra Shahroz, home decor writer and interior stylist behind pretty homes, practical ideas, and a strong point of view.",
      canonical: "https://khizrashahroz.com/about/",
      current: "/about/",
      body,
    })
  );
}

function writeSimplePage({ slug, title, heading, lede, sections }) {
  const body = `
<section class="page-hero">
  <div class="wrap-1240">
    <h1>${heading}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ""}
  </div>
</section>
<section class="section prose">
  <div class="wrap-1240">
    ${sections}
  </div>
</section>`;
  const dir = path.join(DIST, slug);
  ensureDir(dir);
  fs.writeFileSync(
    path.join(dir, "index.html"),
    page({
      title,
      description: lede || heading,
      canonical: `https://khizrashahroz.com/${slug}/`,
      current: `/${slug}/`,
      body,
    })
  );
}

ensureDir(DIST);

longFormPosts.forEach(writeLongPost);
writeBlog();
writeAbout();

writeSimplePage({
  slug: "contact",
  title: "Contact — Khizra Shahroz",
  heading: "Get in touch",
  lede: "Questions, collaboration ideas, or just want to say hi? I'd love to hear from you.",
  sections: `<form class="contact-form" action="mailto:hello@khizrashahroz.com" method="post" enctype="text/plain">
      <div><label for="name">Name</label><input id="name" name="name" type="text" required></div>
      <div><label for="email">Email</label><input id="email" name="email" type="email" required></div>
      <div><label for="message">Message</label><textarea id="message" name="message" rows="6" required></textarea></div>
      <button type="submit" class="btn-primary">Send message <span aria-hidden="true">→</span></button>
    </form>`,
});

writeSimplePage({
  slug: "start-here",
  title: "Start Here — Khizra Shahroz",
  heading: "New here? Start with these.",
  lede: "A short path through the ideas that matter most if you're just getting started.",
  sections: `<h2>1. Learn the palette</h2>
    <p>Start with <a href="/living-room-color-ideas/">15 Living Room Color Ideas That Create a Calm and Sophisticated Space</a> to understand the color thinking behind most of what's on this site.</p>
    <h2>2. Fix one room</h2>
    <p><a href="/cozy-bedroom-ideas/">18 Cozy Bedroom Ideas That Make You Want to Stay in Bed All Day</a> is the most practical single article to act on this weekend.</p>
    <h2>3. Keep going</h2>
    <p>From there, browse the <a href="/blog/">full blog</a> or jump to <a href="/#favorites">reader favorites</a>.</p>`,
});

writeSimplePage({
  slug: "privacy",
  title: "Privacy Policy — Khizra Shahroz",
  heading: "Privacy Policy",
  lede: "Last updated September 2026.",
  sections: `<p>This site collects the minimum information necessary to operate: email addresses submitted through the newsletter signup form, and standard, anonymized analytics about how pages are used.</p>
    <h2>What we collect</h2>
    <p>Email address (newsletter signup, optional), and basic browser/device analytics (no personally identifying data).</p>
    <h2>How it's used</h2>
    <p>Newsletter emails are used solely to send decorating content you've opted into, and are never sold or shared with third parties.</p>
    <h2>Your choices</h2>
    <p>You can unsubscribe from the newsletter at any time using the link in any email, or by contacting us directly via the <a href="/contact/">contact page</a>.</p>`,
});

writeSimplePage({
  slug: "terms",
  title: "Terms of Use — Khizra Shahroz",
  heading: "Terms of Use",
  lede: "Last updated September 2026.",
  sections: `<p>By using khizrashahroz.com, you agree to use the content here for personal, non-commercial reference. Republishing full articles or images without permission is not allowed.</p>
    <h2>Content</h2>
    <p>All decorating advice is offered for informational purposes; results will vary by space, budget, and materials used.</p>
    <h2>Affiliate disclosure</h2>
    <p>Some links on this site may be affiliate links, meaning a small commission may be earned at no extra cost to you.</p>`,
});

writeSitemap();
writeRobotsTxt();

generateFormats()
  .then(() => console.log("Build complete."))
  .catch((err) => {
    console.error("Image format generation failed:", err);
    process.exit(1);
  });
