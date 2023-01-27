import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import PurchaseTickets from "../PurchaseTickets";
import PurchaseCard from "../PurchaseCard";


test('PurchaseTickets component renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
    <PurchaseCard />
    <PurchaseTickets />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
