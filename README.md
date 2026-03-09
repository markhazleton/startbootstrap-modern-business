# Modern Business - Bootstrap 5 Demo

A world-class demonstration site for small businesses, built and maintained by [Mark Hazleton](https://markhazleton.com), showcasing Bootstrap 5, Pug templates, and Node.js build automation.

## Features

- Responsive, mobile-first design with Bootstrap 5.3
- Light/Dark mode toggle using Bootstrap 5's `data-bs-theme`
- Interactive Theme Customizer (live color, font, border radius, exportable CSS)
- Animated hero section with SVG wave
- Animated counters/stats for business impact
- Dynamic testimonials carousel (Bootstrap Carousel)
- Accessibility widget (font size, contrast, dyslexia font)
- SEO and social meta tags (Open Graph, Twitter)
- Minified CSS/JS for production performance
- PWA support (manifest & service worker, installable)
- Pages: Home, About, Contact, Features, Testimonials, FAQ, Pricing, 404, Privacy, Terms, Accessibility, Developer
- Reusable Pug mixins for features, testimonials, and CTAs
- `/developer` page with copy-to-clipboard npm scripts

## Getting Started

```sh
npm install
npm run build
npm start
```

## npm Scripts

| Script | Description |
|---|---|
| `npm run build` | Full production build (lint → clean → pug → scss → scripts → assets → minify) |
| `npm start` | Build then launch dev server with browser-sync |
| `npm run start:debug` | Build then launch dev server with Node.js inspector |
| `npm run lint` | ESLint on `src/**/*.js` and `scripts/**/*.js` |
| `npm run format` | Prettier format all files |
| `npm run fix` | Auto-fix lint errors and format |
| `npm test` | Build then run Mocha tests |
| `npm run clean` | Remove all generated files from `docs/` |

## Architecture

### Build Pipeline

```
src/pug/       → build:pug    → docs/*.html       (Pug → HTML via prettier)
src/scss/      → build:scss   → docs/css/          (Sass → CSS via postcss/autoprefixer)
src/js/        → build:scripts → docs/js/          (copy + copyright header)
src/assets/    → build:assets → docs/assets/       (copy)
docs/css/      → minify:css   → docs/css/*.min.css (cssnano)
docs/js/       → minify:js    → docs/js/*.min.js   (terser)
```

### Tech Stack

| Layer | Technology |
|---|---|
| Templates | [Pug](https://pugjs.org/) 3.0 |
| CSS | [Sass](https://sass-lang.com/) 1.97 (modern `@use` API) + [PostCSS](https://postcss.org/) + Autoprefixer |
| CSS Framework | [Bootstrap](https://getbootstrap.com/) 5.3.8 + [Bootstrap Icons](https://icons.getbootstrap.com/) |
| JS Minification | [Terser](https://terser.org/) |
| CSS Minification | [cssnano](https://cssnano.github.io/cssnano/) |
| Linting | [ESLint](https://eslint.org/) 10 (flat config) |
| Formatting | [Prettier](https://prettier.io/) |
| Testing | [Mocha](https://mochajs.org/) |
| Dev Server | [browser-sync](https://browsersync.io/) |
| File Watching | [chokidar](https://github.com/paulmillr/chokidar) 5 |

### Project Structure

```
src/
  pug/          Pug templates (layouts, includes, mixins, pages)
  scss/         SCSS source (styles.scss imports Bootstrap via @use)
  js/           Browser JavaScript
  assets/       Static assets (images, fonts)
scripts/
  build-pug.js         Build all Pug pages
  build-scss.js        Compile SCSS + copy Bootstrap Icons fonts
  build-scripts.js     Copy JS with copyright header
  build-assets.js      Copy static assets
  render-pug.js        Render a single Pug file
  render-scss.js       Sass compile + PostCSS pipeline
  render-scripts.js    JS copy helper
  render-assets.js     Assets copy helper
  clean.js             Remove docs/ contents
  sb-watch.js          Chokidar file watcher for dev mode
  start.js             Launch browser-sync + watcher concurrently
  start-debug.js       Same with Node.js --inspect flag
docs/           Generated output (GitHub Pages root)
```

### ESLint Configuration

ESLint 10 flat config (`eslint.config.mjs`) with separate rule sets:
- `src/**/*.js` — ESM, browser globals
- `scripts/**/*.js` — CommonJS, Node.js globals

### SCSS / Sass

Uses the modern Sass module system (`@use`) instead of the deprecated `@import`:

```scss
@use "bootstrap/scss/bootstrap" as *;
@use "bootstrap-icons/font/bootstrap-icons";
```

The build script uses `sass.compileString()` (modern JS API) with `quietDeps: true` to suppress deprecation warnings from third-party dependencies.

## Deployment

Output is in the `docs/` folder, ready for GitHub Pages or any static host. All assets, CSS, and JS are minified for production.

## Contributing

PRs welcome. Run `npm run lint` and `npm test` before submitting.

## License

MIT
