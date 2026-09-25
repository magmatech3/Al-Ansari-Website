const fs = require('fs');
const path = require('path');

const consolidatedCSS = `
/* Page Hero - Clean Consolidated: full-bleed backgrounds, crisp, no blur */
.page-hero {
  position: relative;
  min-height: clamp(460px, 48vw, 620px);
  padding: 0 !important;
  display: grid;
  align-items: stretch;
  overflow: hidden;
  background: #0b0b0b;
  color: #fff;
  border-bottom: 1px solid var(--line);
  isolation: isolate;
}
.page-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: #0a0a0a;
}
.page-hero-bg-video,
.page-hero-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  background: #0a0a0a;
  border: 0;
  transform: none;
  filter: none;
}
.page-hero-bg-video { z-index: 0; }
.page-hero-bg-image { z-index: 1; opacity: 1; transition: opacity .35s ease; }
.page-hero.video-playing .page-hero-bg-image,
.page-hero-bg.is-playing .page-hero-bg-image {
  opacity: 0;
  visibility: hidden;
}
.page-hero-bg-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.58) 42%, rgba(0,0,0,.30) 72%, rgba(0,0,0,.46) 100%),
    linear-gradient(180deg, rgba(0,0,0,.06), rgba(0,0,0,.72));
  pointer-events: none;
}
.page-hero:hover .page-hero-bg-image { filter: brightness(1.035) saturate(1.04); }
.page-hero-content {
  position: relative;
  z-index: 3;
  width: min(1180px, calc(100% - 32px));
  margin: auto;
  min-height: clamp(460px, 48vw, 620px);
  display: flex;
  align-items: center;
}
.page-hero-content > div { max-width: 760px; padding: 82px 0 76px; }
.page-hero h1 { color: #fff; text-shadow: 0 8px 28px rgba(0,0,0,.38); }
.page-hero p { color: #f0ece4 !important; text-shadow: 0 4px 18px rgba(0,0,0,.32); }
.page-hero .kicker { color: var(--yellow); }
.page-hero .page-back { background: var(--yellow); color: #111; box-shadow: 0 12px 28px rgba(0,0,0,.20); }
.page-hero-motion-note {
  position: absolute;
  right: 16px;
  bottom: 14px;
  z-index: 4;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(0,0,0,.45);
  border: 1px solid rgba(255,255,255,.16);
  color: #f1ece3;
  font-size: .62rem;
  backdrop-filter: blur(4px);
}

/* Home Hero - Cross-fade between two landmark images, video plays when available */
.hero {
  position: relative;
  min-height: 720px;
  overflow: hidden;
  isolation: isolate;
  background: #0a0a0a;
}
.home-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: #090909;
}
.home-hero-bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
}
.home-hero-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background: #090909;
  z-index: 1;
  opacity: 0;
  animation: homeHeroFade 16s ease-in-out infinite;
}
.home-hero-bg-image:nth-of-type(1) { animation-delay: 0s; }
.home-hero-bg-image:nth-of-type(2) { animation-delay: 8s; }
.home-hero-bg.is-playing .home-hero-bg-image {
  opacity: 0 !important;
  visibility: hidden !important;
}
.home-hero-bg-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.55) 48%, rgba(0,0,0,.32) 100%),
    linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.65));
  pointer-events: none;
}
.hero-content-single {
  position: relative;
  z-index: 3;
  min-height: 720px;
  display: flex !important;
  align-items: center;
  padding: 72px 0;
}
.hero-content-single .hero-copy { max-width: 760px; }
.hero-content-single h1 { color: #fff; text-shadow: 0 8px 32px rgba(0,0,0,.36); }
.hero-content-single .hero-copy p { color: #f2ede3; }
.hero-content-single .eyebrow { background: rgba(0,0,0,.42); border-color: rgba(255,255,255,.22); color: #fff; }
.hero-content-single .trust-item strong,
.hero-content-single .trust-item span { color: #fff; text-shadow: 0 3px 15px rgba(0,0,0,.35); }
@keyframes homeHeroFade {
  0%, 43% { opacity: 1; }
  50%, 93% { opacity: 0; }
  100% { opacity: 1; }
}
@media (max-width: 900px) {
  .hero { min-height: 600px; }
  .hero-content-single { min-height: 600px; padding: 58px 0 64px; }
  .home-hero-bg-overlay { background: linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.72)); }
}
@media (max-width: 620px) {
  .hero { min-height: 540px; }
  .hero-content-single { min-height: 540px; padding: 42px 0 50px; }
}

/* Content Media - Full-bleed within cards, no letterboxing */
.landmark-card,
.landmark-card.tall,
.landmark-card.wide {
  grid-column: auto;
  grid-row: auto;
  min-height: 0;
  height: auto;
  aspect-ratio: 4/3;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
}
.landmark-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  background: #0b0b0b;
  transform: none;
  transition: transform 1s ease, filter .5s ease;
}
.landmark-card:hover { transform: translateY(-7px); box-shadow: 0 24px 55px rgba(0,0,0,.34), 0 0 0 1px rgba(255,210,31,.18); }
.landmark-card:hover img { transform: scale(1.08); filter: saturate(1.08); }

.saudi-gallery-card,
.package .package-media,
.post-img,
.experience-image {
  overflow: hidden;
  background: #0b0b0b;
}
.saudi-gallery-card img,
.package .package-media img,
.post-img img,
.experience-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  background: #0b0b0b;
  transform: none;
  transition: transform .8s ease, filter .5s ease;
}
.saudi-gallery-card:hover img,
.package:hover .package-media img,
.post:hover .post-img img,
.experience-image:hover img {
  transform: scale(1.07);
  filter: saturate(1.06) brightness(1.04);
}

/* team-feature is a 2-column grid (image + text), not a full-bleed bg */
.team-feature img {
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  background: #090909;
  transform: none;
  transition: filter .5s ease;
}
.team-feature:hover img { filter: saturate(1.06) brightness(1.04); }
@media (max-width: 768px) {
  .team-feature img { height: auto; min-height: 0; aspect-ratio: 4/3; }
}

/* Lightbox */
.site-lightbox-visual { display: grid; place-items: center; background: #050505; }
.site-lightbox-visual img { width: 100%; height: 100%; object-fit: contain; object-position: center; display: block; }

/* Responsive */
@media (max-width: 1050px) {
  .landmark-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 900px) {
  .page-hero { min-height: 460px; }
  .page-hero-content { min-height: 460px; }
  .page-hero-content > div { padding: 66px 0 60px; }
  .page-hero-bg-overlay { background: linear-gradient(180deg, rgba(0,0,0,.34), rgba(0,0,0,.74)); }
  .landmark-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px; }
}
@media (max-width: 620px) {
  .page-hero { min-height: 390px; }
  .page-hero-content { min-height: 390px; width: calc(100% - 22px); }
  .page-hero-content > div { padding: 48px 0 44px; }
  .landmark-grid { grid-template-columns: 1fr; gap: 11px; }
  .landmark-card,
  .landmark-card.tall,
  .landmark-card.wide { aspect-ratio: 4/3; border-radius: 18px; }
}
@media (prefers-reduced-motion: reduce) {
  .page-hero-bg-video,
  .home-hero-bg-video { display: none; }
  .page-hero.video-playing .page-hero-bg-image,
  .home-hero-bg.is-playing .home-hero-bg-image { opacity: 1 !important; visibility: visible !important; }
  .landmark-card img,
  .saudi-gallery-card img,
  .package .package-media img,
  .post-img img,
  .experience-image img,
  .team-feature img { transition-duration: .01ms !important; }
}
`;

// Files to fix
const htmlFiles = [
  'index.html', 'about.html', 'blog.html', 'contact.html',
  'destinations.html', 'experience.html', 'industries.html',
  'packages.html', 'reviews.html', 'services.html', 'social.html', 'team.html'
];

function fixFile(filepath) {
  let html = fs.readFileSync(filepath, 'utf-8');
  
  // Find the style block end and replace everything from the first V4 comment to </style>
  const startMarker = '/* V4 visual layout: full-image page heroes, no-crop media, and non-cropping hover states. */';
  const endMarker = '</style>';
  
  const startIdx = html.indexOf(startMarker);
  if (startIdx === -1) {
    console.log(`⚠ ${filepath}: start marker not found, skipping`);
    return false;
  }
  
  const endIdx = html.indexOf(endMarker, startIdx);
  if (endIdx === -1) {
    console.log(`⚠ ${filepath}: end marker not found, skipping`);
    return false;
  }
  
  // Replace from startMarker to endMarker with consolidated CSS
  const before = html.slice(0, startIdx);
  const after = html.slice(endIdx);
  const newHtml = before + '\n' + consolidatedCSS.trim() + '\n' + after;
  
  fs.writeFileSync(filepath, newHtml);
  console.log(`✓ Fixed ${filepath}`);
  return true;
}

htmlFiles.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) fixFile(p);
  else console.log(`⚠ ${f}: not found`);
});

console.log('Done!');