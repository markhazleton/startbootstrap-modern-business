'use strict';
const fs = require('fs');
const upath = require('upath');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../docs/assets');

    fs.cpSync(sourcePath, destPath, { recursive: true });
};
