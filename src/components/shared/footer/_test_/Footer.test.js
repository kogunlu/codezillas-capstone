import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom"
import Footer from "../Footer";

it('Renders correctly for Footer Component', () => {
    const tree = renderer
    .create(
    <BrowserRouter>
    <Footer />
    </BrowserRouter> 
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  }); 