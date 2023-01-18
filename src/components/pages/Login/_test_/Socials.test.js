import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Socials from '../Socials';
import { store } from '../../../../app/store';

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
          <Socials />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(errorComponent).toMatchSnapshot();
});
