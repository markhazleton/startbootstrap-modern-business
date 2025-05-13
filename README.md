# Modern Business - Bootstrap 5 Demo

A world-class demonstration site for small businesses, built and maintained by [Mark Hazleton](https://markhazleton.com), showcasing the best of Bootstrap 5, Pug, and Node.js build automation.

## About Mark Hazleton

Mark Hazleton is a passionate web developer and technology leader, dedicated to building accessible, high-performance, and beautiful web experiences. This project is a testament to his commitment to modern web standards, open source, and the small business community.

## Features

- Responsive, mobile-first design with Bootstrap 5
- Light/Dark mode toggle (Bootstrap 5 best practices)
- Interactive Theme Customizer (live color, font, border radius, exportable CSS)
- Animated hero section with SVG wave
- Animated counters/stats for business impact
- Dynamic testimonials carousel (Bootstrap Carousel)
- Accessibility widget (font size, contrast, dyslexia font)
- SEO and social meta tags (Open Graph, Twitter)
- Minified CSS/JS for performance
- PWA support (manifest & service worker, installable)
- Modern pages: Home, About, Contact, Features, Testimonials, FAQ, Pricing, 404, Privacy, Terms, Accessibility, Developer
- Reusable Pug mixins for features, testimonials, CTAs
- All social and legal links always up-to-date
- All social icons point to [markhazleton.com](https://markhazleton.com)
- Contact page links directly to the [GitHub repository](https://github.com/markhazleton/startbootstrap-modern-business)
- `/developer` page with copy-to-clipboard npm scripts
- `/build-status.md` with demo badges for build and Lighthouse scores

## Build Scripts & Automation

- **npm run build**: Cleans, lints, builds Pug, SCSS, JS, assets, and minifies CSS/JS for production
- **npm run lint/format/fix**: Enforces code quality and style
- **npm test**: Runs build and automated tests (Mocha)
- **Prebuild hooks**: Linting runs before every build
- **Minification**: CSS (cssnano, postcss-cli) and JS (terser) for fast load times
- **PWA**: Manifest and service worker generated and registered automatically
- **SEO**: robots.txt and sitemap.xml generated for search engines
- **CI/CD ready**: Scripts are designed for easy integration with GitHub Actions or other CI tools

## Getting Started

```sh
npm install
npm run build
npm start
```

## Light/Dark Mode

- Toggle in the navbar
- Remembers user preference
- Uses Bootstrap 5's `data-bs-theme` for best compatibility

## Testing

```sh
npm test
```

## Deployment

- Output is in the `docs/` folder (ready for static hosting)
- Includes PWA manifest and service worker
- SEO files: `robots.txt`, `sitemap.xml`

## Contributing

- PRs welcome! Please lint and test before submitting.
- Built with ❤️ by Mark Hazleton

## License

MIT
