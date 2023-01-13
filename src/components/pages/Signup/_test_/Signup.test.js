import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../../../../app/store';
import Signup from '../Signup';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it('renders correctly', async () => {
  const errorComponent = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(errorComponent).toMatchSnapshot();
});
