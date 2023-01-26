import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer";
import ContactAddress from "../ContactAddress"


it('Renders correctly for ContactAddress Component', () => {
    const tree = renderer
    .create(
    <BrowserRouter>
    <ContactAddress />
    </BrowserRouter>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  }); 
