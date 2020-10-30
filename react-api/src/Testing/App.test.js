/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import AccountBalance from '../components/AccountBalance';
import Footer from '../Footer';
import SignUp from '../components/signUp';
import AccountInfo from '../components/AccountInfo';
import Dashboard from '../components/Dashboard';
import TransactionGrid from '../components/TransactionsGridContainer';

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

test('Dashboard Snapshot test', () => {
  const component = renderer.create(<Dashboard />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('TransactionGrid Snapshot test', () => {
  const component = renderer.create(<TransactionGrid />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
