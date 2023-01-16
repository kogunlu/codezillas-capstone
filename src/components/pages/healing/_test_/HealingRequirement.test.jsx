import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import {store} from "../../../../app/store"
import HealingRequirement from "../HealingRequirement";

it(`renders correctly for HealingRequirement`, () => {
    const Healingcomponent = renderer.create(
        <Provider store={store} >
            <BrowserRouter>
                <HealingRequirement />
            </BrowserRouter>
        </Provider>       
    )
    .toJSON()
        expect(Healingcomponent).toMatchSnapshot()   
})
