import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    answer1 : "",
    answer2: "",
    answer3: false,
    answer4: [],
    answer5: [],
    answer6: "",
}

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setAnswer1: (state, action) => {
            state.answer1 = action.payload
            console.log("answer 1 updated => ", state.answer1)
        },
        setAnswer2: (state, action) => {
            state.answer2 = action.payload
            console.log("answer 2 updated =>", state.answer2)
        },
        setAnswer3: (state, action) => {
            state.answer3 = action.payload
            console.log("answer 3 updated =>", state.answer3)
        },
        setAnswer4: (state, action) => {
            state.answer4 = action.payload
            console.log("answer 4 update =>", state.answer4)
        },
        setAnswer5: (state, action) => {
            state.answer5 = action.payload
            console.log("answer 5 update => ", state.answer5)
        },
        setAnswer6: (state, action) => {
            state.answer6 = action.payload
            console.log("answer 6 update => ", state.answer6)
        }
    }
})

export const {
    setAnswer1, 
    setAnswer2, 
    setAnswer3, 
    setAnswer4, 
    setAnswer5, 
    setAnswer6
} = bookingSlice.actions

export const selectAnswer1 = (state) => state.booking.answer1;
export const selectAnswer2 = (state) => state.booking.answer2;
export const selectAnswer3 = (state) => state.booking.answer3;







export default bookingSlice.reducer