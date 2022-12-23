import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    answers: {
        answer1 : "",
        answer2: "",
        answer3: false,
        answer4: [],
        answer5: [],
        answer6: "",
    }
}

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setAnswer1: (state, action) => {
            state.answers.answer1 = action.payload
            console.log("answer 1 updated => ", state.answers.answer1)
        },
        setAnswer2: (state, action) => {
            state.answers.answer2 = action.payload
            console.log("answer 2 updated =>", state.answers.answer2)
        },
        setAnswer3: (state, action) => {
            state.answers.answer3 = action.payload
            console.log("answer 3 updated =>", state.answers.answer3)
        },
        setAnswer4: (state, action) => {
            state.answers.answer4 = action.payload
            console.log("answer 4 update =>", state.answers.answer4)
        },
        setAnswer5: (state, action) => {
            state.answers.answer5 = action.payload
            console.log("answer 5 update => ", state.answers.answer5)
        },
        setAnswer6: (state, action) => {
            state.answers.answer6 = action.payload
            console.log("answer 6 update => ", state.answers.answer6)
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

export const answerObj = (state) => state.booking.answers

export default bookingSlice.reducer