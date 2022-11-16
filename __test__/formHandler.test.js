import { handleSubmit } from "../src/client";

describe('this gonna return a function', () => {
    test('check', () => {
        expect(handleSubmit).toBeDefined();
    })
})

describe('function try to check', () => {
    test('return a function', () => {
        expect (typeof handleSubmit).toBe('function');
    });
});