import React, { Component } from 'react';
import Enzyme from "enzyme";
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import renderer from 'react-test-renderer';
import Dashboard from '../components/Dashboard';
Enzyme.configure({adapter: new Adapter() });

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

describe("Data Mocking Tests", ()=>{
    const user={
        name: "Tyler Rubin",
        email: "arcowirexzs@yahoo.com",
        username: "Jabba67"
    }

    it("Accepts user account props",() =>{
        const wrapper = mount(<Dashboard user={user}/>);
        expect(wrapper.props().user).toEqual(user);
    })

    it.skip("Contains users account email", ()=>{
        const wrapper = mount(<Dashboard user={user}/>);
        const value = wrapper.find("p").first().text();
        expect(value).toEqual("arcowirexzs@yahoo.com");
    })

    it("Dashboard Renders correctly with no error message", ()=>{
        const wrapper = mount(<Dashboard accountnumber/>);
        expect(wrapper.state("error")).toEqual(undefined)
    })
})
