//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';
const testingthisArray=[
    {
        item1:"item1 is the priority it is very important",
        item2:"item2",
        item3:"31,266",
        item4:"item4"
    },
    {
        item1:"item1",
        item2:"item2",
        item3:"item3",
        item4:"item4"
    },
    {
        item1:"item1",
        item2:"item2",
        item3:"item3",
        item4:"item4"
    },
    {
        item1:"item1",
        item2:"item2",
        item3:"item3",
        item4:"item4"
    }
]
const testingArray2 = ['React Native', 'React']
const numOfItemsTest = testingthisArray.length;
const stringTest = testingthisArray[0].item1;

describe("Number Test", ()=>{
    // Should pass
    test('Number of items = 4', ()=>{
        expect(numOfItemsTest).toBe(4);
    });

    // Should pass
    test('Number of items to be greater than or equal to 4', ()=>{
        expect(numOfItemsTest).toBeGreaterThanOrEqual(4);
    });
})

describe("String Test",()=>{
    // Should pass
    test('There is a "important"', ()=>{
        expect(stringTest).toMatch(/important/);
    // Can also use .toContain('string')
    });
})

describe("Array Testing", ()=>{
    // Should pass
    test('The list of courses contains React Native and React', ()=>{
        expect(['React Native', 'React', 'MeteorJs']).toEqual(expect.arrayContaining(testingArray2));
    });
})

describe("Objects Testing", ()=>{
    // Should pass
    test('The first item in the list has the property item1', ()=>{
        expect(testingthisArray[0]).toHaveProperty('item1');
    });

    // Should pass
    test('The third item in the list has the property item3 and value of 31,266', ()=>{
        expect(testingthisArray[0]).toHaveProperty('item3', '31,266');
    });
})
