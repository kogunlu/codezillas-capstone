import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom"
import BackToHome from "../BackToHome"

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}))


it(`renders correctly`, () => {
    const backToHomeComponent = renderer.create(
        <BrowserRouter>
            <BackToHome />
        </BrowserRouter>
    )
    .toJSON()
        expect(backToHomeComponent).toMatchSnapshot()
    
})