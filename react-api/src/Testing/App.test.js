/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import Enzyme from "enzyme";
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import renderer from 'react-test-renderer';
import App from '../App';
import AccountBalance from '../components/AccountBalance';
import Footer from '../Footer';
import SignUp from '../components/signUp';
import AccountInfo from '../components/AccountInfo';
import Dashboard from '../components/Dashboard';
import TransactionGrid from '../components/TransactionsGridContainer';

Enzyme.configure({adapter: new Adapter() });
//Use it.skip to skip a test when using Jest

describe("Basic App Tests", ()=>{
  it("App Renders without crashing", ()=>{
    const wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot();
  })
  
  it.skip("Renders Sign Up Label", () => {
    const wrapper = shallow(<App/>);
    const signupLabel = <a href="/signUp"> Sign Up Here!</a>;
    expect(wrapper.contains(signupLabel)).toEqual(true);
  });
})

describe("Main Component Snapshot Tests",() =>{
  test('App Snapshot test', () => {
    const component = renderer.create(<App/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Account Balance Snapshot test', () => {
    const component = renderer.create(<AccountBalance />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Footer Snapshot test', () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Signup Snapshot test', () => {
    const component = renderer.create(<SignUp />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Account Info Snapshot test', () => {
    const component = renderer.create(<AccountInfo />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  /*test('Dashboard Snapshot test', () => {
    const component = renderer.create(<Dashboard />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('TransactionGrid Snapshot test', () => {
    const component = renderer.create(<TransactionGrid />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });*/
})




