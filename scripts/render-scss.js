'use strict';
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');
const postcss = require('postcss');
const sass = require('sass');

const stylesPath = '../src/scss/styles.scss';
const destPath = upath.resolve(upath.dirname(__filename), '../docs/css/styles.css');

module.exports = function renderSCSS() {

    const results = sass.compileString(entryPoint, {
        loadPaths: [
            upath.resolve(upath.dirname(__filename), '../node_modules')
        ],
        quietDeps: true,
    });

    fs.mkdirSync(upath.dirname(destPath), { recursive: true });

    postcss([ autoprefixer ]).process(results.css, {from: 'styles.css', to: 'styles.css'}).then(result => {
        result.warnings().forEach(warn => {
            console.warn(warn.toString());
        });
        fs.writeFileSync(destPath, result.css);
    });

};

const entryPoint = `/*!
* Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
*/
@use "${stylesPath}";
`;
