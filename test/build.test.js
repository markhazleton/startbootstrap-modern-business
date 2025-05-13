const fs = require('fs');
const path = require('path');
const assert = require('assert');

describe('SCSS Build', () => {
    it('should output a styles.css file', () => {
        const cssPath = path.join(__dirname, '../docs/css/styles.css');
        assert.ok(fs.existsSync(cssPath), 'styles.css should exist after build');
    });

    it('should contain expected CSS for .feature class', () => {
        const cssPath = path.join(__dirname, '../docs/css/styles.css');
        const css = fs.readFileSync(cssPath, 'utf8');
        assert.match(css, /\.feature\s*\{/);
        assert.match(css, /display:\s*inline-flex/);
    });
});
