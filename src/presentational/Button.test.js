import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('renders correctly without any props', () => {
  const tree = renderer.create(
    <Button>ClickMe</Button>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with props', () => {
  const tree = renderer.create(
    <Button onClick={() => console.log('yay')}>ClickMe</Button>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});