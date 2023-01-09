import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer";
import SubsThanks from "./SubsThanks";


it('Renders correctly for SubsThanks Component', () => {
    const tree = renderer
    .create(
    <BrowserRouter>
    <SubsThanks />
    </BrowserRouter>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  }); 
