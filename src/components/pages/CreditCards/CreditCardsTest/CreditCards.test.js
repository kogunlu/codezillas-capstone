import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Card from '../Card';
import CardSlider from '../CardSlider';
import SavedCards from '../SavedCards';


test('Career component renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
    <Card />
    <SavedCards />
    <CardSlider />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});