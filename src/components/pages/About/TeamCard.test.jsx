import React from "react";
import renderer from "react-test-renderer";
import TeamCard from "./TeamCard";

it('Renders correctly for TeamCard Component', () => {
    const tree = renderer
    .create(<TeamCard />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });