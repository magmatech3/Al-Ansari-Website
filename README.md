# Al Ansari (PVT) LTD — Hajj & Umrah Multi-page Website

Updated build includes:
- Separate HTML pages for the major website sections.
- Improved package-card hover states with image panels and motion.
- A real pilgrimage team photo added to the Our Team page with an interactive hover treatment.
- Expanded Saudi mosque/landmark imagery across pages, with page-specific hero images.
- Clickable Saudi landmark galleries with an interactive lightbox and keyboard navigation.
- Responsive behavior for desktop, tablet and mobile.
- `original-single-page.html` kept as the original backup.

The website uses the supplied team photo locally at `assets/team/hajj-team.jpeg`. Saudi landmark photography is referenced from free-to-use Unsplash image URLs verified from their photo pages. Replace with your own licensed brand photography before production where appropriate.


### V4 visual update
- The former right-side page hero image is now the full-width visual background of the top section.
- Home uses the two former hero images as a rotating full-frame background.
- Unsplash delivery now uses `fit=max` and reduced delivery sizes, avoiding server-side cropping and unnecessary bandwidth.
- Content media uses `object-fit: contain` and non-zooming hover effects so complete source frames remain visible.

## V5 visual repair
Destination cards now use a clean responsive grid with no spans/overlap. Section hero images use full-width, non-stretched cover framing with a blurred backdrop and unique Saudi imagery per page. Content media preserves its full source frame.


## V6 Background Videos

The Home and non-gallery content pages use muted, looping Hajj/Umrah background video in the top hero. Services and Destinations intentionally remain image-led. Video sources are Pexels free-download pages; each browser request uses the Pexels download endpoint and retains the existing poster image as a fallback.

Sources: Pexels video pages for IDs 35110833, 18414894, 35098672, 35424177, 35783413, 35110839, 36592375, 35098691, 36592372 and 35098688.


V7 hero media repair: Hajj/Umrah background videos use crisp, non-blurred, non-stretched containment with image fallbacks. Hero panels use aspect-ratio-based sizing to prevent forced stretching.
