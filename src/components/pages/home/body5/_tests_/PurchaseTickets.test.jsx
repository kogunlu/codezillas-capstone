import React from "react";
import renderer from "react-test-renderer";
import PurchaseTickets from "../PurchaseTickets";


it('Renders correctly for PurchaseTickets Component', () => {
    const tree = renderer
    .create(<PurchaseTickets />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
