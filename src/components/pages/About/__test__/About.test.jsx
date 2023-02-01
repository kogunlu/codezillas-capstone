import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import About from '../About';

it('Renders correctly for About Component', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
