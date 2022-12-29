import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom"
import Thanks from "../Thanks"

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}))


it(`renders correctly`, () => {
    const thanksComponent = renderer.create(
        <BrowserRouter>
            <Thanks />
        </BrowserRouter>
    )
    .toJSON()
        expect(thanksComponent).toMatchSnapshot()
    
})