import React from "react";
import renderer from "react-test-renderer";
import PurchaseCard from "../PurchaseCard";


it('Renders correctly for About Component', () => {
    const tree = renderer
    .create(<PurchaseCard />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
