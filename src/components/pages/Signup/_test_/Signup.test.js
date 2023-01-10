import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Signup from '../Signup';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it('renders correctly', async () => {
  const errorComponent = renderer
    .create(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    )
    .toJSON();
  expect(errorComponent).toMatchSnapshot();
});
