'use strict';
const path = require('path');
const fs = require('fs');
const upath = require('upath');
const renderPug = require('./render-pug');

const srcPath = upath.resolve(upath.dirname(__filename), '../src');

fs.readdirSync(srcPath, { recursive: true, withFileTypes: true })
    .filter(d => d.isFile())
    .map(d => upath.normalize(path.join(d.parentPath, d.name)))
    .forEach(_processFile);

function _processFile(filePath) {
    if (
        filePath.match(/\.pug$/)
        && !filePath.match(/include/)
        && !filePath.match(/mixin/)
        && !filePath.match(/\/pug\/layouts\//)
    ) {
        renderPug(filePath);
    }
}