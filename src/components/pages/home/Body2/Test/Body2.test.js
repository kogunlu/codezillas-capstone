import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import Body2 from "../Body2"
import {store} from "../../../../../app/store"



it(`renders correctly`, () => {
    const Body2comp = renderer.create(
        <Provider store={store} >
            <BrowserRouter>
                <Body2 />
            </BrowserRouter>
        </Provider>
        
    )
    .toJSON()
        expect(Body2comp).toMatchSnapshot()
    
})