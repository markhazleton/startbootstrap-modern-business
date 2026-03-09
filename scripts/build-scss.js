'use strict';

const renderSCSS = require('./render-scss');
const path = require('path');
const fs = require('fs');

function copyFonts() {
    const sourceFontsDir = path.join(__dirname, '../node_modules/bootstrap-icons/font/fonts/');
    const destinationFontsDir = path.join(__dirname, '../docs/css/fonts/');

    console.log('Copying fonts from:', sourceFontsDir);
    console.log('Copying fonts to:', destinationFontsDir);

    fs.mkdirSync(destinationFontsDir, { recursive: true });
    fs.cpSync(sourceFontsDir, destinationFontsDir, { recursive: true });
    console.log('Fonts copied successfully!');
}

renderSCSS();
copyFonts();
