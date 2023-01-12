import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Button from '../Button';

test('Navbar component renders correctly', () => {
  const tree = renderer.create(<BrowserRouter><Button/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
