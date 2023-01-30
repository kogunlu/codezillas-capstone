import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddNewCard from '../AddNewCard';
import { store } from '../../../../../app/store';

test('Navbar component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <AddNewCard />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
