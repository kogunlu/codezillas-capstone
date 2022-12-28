import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import Book from "../Book"
import store from "../../../../app/store"


it('renders correctly', async() => {
    // const bookComponent = renderer
    .create(
        <Provider store={store}>
            <BrowserRouter>
                <Book />
            </BrowserRouter>
        </Provider>
    )
    .toJSON()
        expect(bookComponent).toMatchSnapshot()
    
})