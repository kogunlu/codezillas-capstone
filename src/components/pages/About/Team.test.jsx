import React from "react";
import renderer from "react-test-renderer";
import Team from "./Team";

it('Renders correctly for Team Component', () => {
    const tree = renderer
    .create(<Team />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });