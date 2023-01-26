import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import EditTherapist from '../EditTherapist';

it('Renders correctly for EditUser Component', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <EditTherapist />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
