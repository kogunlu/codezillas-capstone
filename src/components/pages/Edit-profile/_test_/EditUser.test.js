import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import EditUser from '../EditUser';

it('Renders correctly for EditUser Component', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <EditUser />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
