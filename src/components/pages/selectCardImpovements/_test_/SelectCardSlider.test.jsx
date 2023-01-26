import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SelectCard from '../SelectCard';
import SelectCardSlider from '../SelectCardSlider';


test('SelectCardSlider component renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
    <SelectCard />
    <SelectCardSlider />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});