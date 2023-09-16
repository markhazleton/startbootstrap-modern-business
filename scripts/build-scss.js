'use strict';

const renderSCSS = require('./render-scss');
const ncp = require('ncp').ncp;
const path = require('path');
const fs = require('fs');


function copyFonts() {
  const sourceFontsDir = path.join(__dirname, '../node_modules/bootstrap-icons/font/fonts/');
  const destinationFontsDir = path.join(__dirname, '../docs/css/fonts/');

  console.log('Copying fonts from:', sourceFontsDir);
  console.log('Copying fonts to:', destinationFontsDir);

  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(destinationFontsDir))   {
    fs.mkdirSync(destinationFontsDir, { recursive: true });
  }
  // Copy fonts from source to destination
  ncp(sourceFontsDir, destinationFontsDir, function (err) {
    if (err) {
      console.error('Error copying fonts:', err);
    } else {
      console.log('Fonts copied successfully!');
    }
  });
}

renderSCSS();
copyFonts();
