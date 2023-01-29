import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer";
import ContactThanks from "../ContactThanks/ContactThanks"


it('Renders correctly for ContactThanks Component', () => {
    const tree = renderer
    .create(
    <BrowserRouter>
    <ContactThanks />
    </BrowserRouter>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  }); 
