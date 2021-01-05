// import { expect } from '@jest/globals'

const { expect } = require('@jest/globals')
const Sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
})

// use toBeCloseTo() instead of toEqual() for floating\

test('something ', () => {
    expect(10 / 3).toBeCloseTo(3.333)
})

// up to a certain perscion


// Use regex to match string with toMatch()

test('there is no i in Team', () => {
    expect('team').not.toMatch(/I/)
})

test('But there is a "stop" in Christoph ', () => {
    expect('Christoph').toMatch(/stop/)
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];


test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});


// use toThrow to test whether a function throws an error

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});


test('the data is peanut butter', () => {
    return fetchData().then((data) => {
        expect(data).toBe('peanut butter')
    })
})
// Be sure to return the promise otherwise the test will complete before promise is returned

test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
})

// use resolves for Jest   to wait for the promise to resolve if promise is rejected the test will fail

