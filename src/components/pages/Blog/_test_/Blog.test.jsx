  import React from "react";
  import renderer from "react-test-renderer";
  import { BrowserRouter } from "react-router-dom"
  import Blog from "../Blog";
  
  it('Renders correctly for Blog Component', () => {
      const tree = renderer
      .create(
      <BrowserRouter>
      <Blog />
      </BrowserRouter> 
      )
      .toJSON();
      expect(tree).toMatchSnapshot();
    }); 