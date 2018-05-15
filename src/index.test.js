import {expect} from 'chai';
import jsdom from 'node-jsdom';
import fs from 'fs';

describe('Our first Test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});


describe('index.html', () => {
    it('it should have h1', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello world");
            done();
            window.close();
        });
    })
})