import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SelectCard from '../SelectCard';
import SelectCardSlider from '../SelectCardSlider';


<<<<<<< HEAD:src/components/pages/CreditCards/CreditCardsTest/CreditCards.test.js
test('Career component renders correctly', () => {
=======
test('SelectCardSlider component renders correctly', () => {
>>>>>>> origin/main-before-last-push:src/components/pages/selectCardImpovements/_test_/SelectCardSlider.test.jsx
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