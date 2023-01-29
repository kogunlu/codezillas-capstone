import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Body3 from '../Body3';
import { store } from '../../../../../app/store';

it(`renders correctly`, () => {
  const Body3comp = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Body3 />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(Body3comp).toMatchSnapshot();
});
