import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Body1 from '../Body1';

test('Navbar component renders correctly', () => {
  const tree = renderer.create(<BrowserRouter><Body1/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});