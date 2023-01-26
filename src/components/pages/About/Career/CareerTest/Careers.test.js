import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Career from '../Career';
import CareerList from '../CareerList';
import OpenPositions from '../OpenPositions';
import CareerPage from '../CareerPage';



test('Navbar component renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
    <Career />
    <CareerList />
    <OpenPositions />
    <CareerPage />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});