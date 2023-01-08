import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import SubsInput from "../SubsInput"


const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}))

it('renders correctly', async() => {
    const subsinputComponent = renderer
    .create(
        <BrowserRouter>
            <SubsInput />
        </BrowserRouter>
    )
    .toJSON()
        expect(subsinputComponent).toMatchSnapshot()
    
})