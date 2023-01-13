import React from "react";
import renderer from "react-test-renderer";
import PurchaseTickets from "../PurchaseTickets";


it('Renders correctly for About Component', () => {
    const tree = renderer
    .create(<PurchaseTickets />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
