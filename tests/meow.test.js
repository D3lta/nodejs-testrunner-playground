import { describe, it } from 'node:test';
import assert from 'node:assert';
import { meow } from '../meow.js';

describe('meow function', () => {
    it("should return 'meow'", () => {
        assert.strictEqual(meow(1), 'meow');
    });

    it("should return 'meow meow meow'", () => {
        assert.strictEqual(meow(3), 'meow meow meow');
    });

    it("should throw error", () => {
        assert.throws(() => { meow("nya"); }, /^Error: nyans is not a number$/);
    });
});