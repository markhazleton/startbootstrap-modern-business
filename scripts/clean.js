'use strict';
const fs = require('fs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../docs');

if (fs.existsSync(destPath)) {
    for (const entry of fs.readdirSync(destPath, { withFileTypes: true })) {
        fs.rmSync(upath.join(destPath, entry.name), { recursive: true, force: true });
    }
}

