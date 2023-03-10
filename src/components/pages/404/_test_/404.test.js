import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import ErrorPage from "../ErrorPage"


const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}))

it('renders correctly', async() => {
    const errorComponent = renderer
    .create(
        <BrowserRouter>
            <ErrorPage />
        </BrowserRouter>
    )
    .toJSON()
        expect(errorComponent).toMatchSnapshot()
    
})