import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ThanksTherapist from '../ThanksTherapist';

it('Renders correctly for EditUser Component', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ThanksTherapist />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
