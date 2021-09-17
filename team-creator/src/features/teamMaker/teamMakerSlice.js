import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    racers: [
        {
        name: '',
        time: 0}
    ]
}
const defaultRacer = {name: '', time: 0}

export const teamMakerSlice = createSlice ({
    name: 'teamMaker',
    initialState,
    reducers: {
        addRacer: (state, action) => {
            state.racers.push(defaultRacer)
        },
        racerChange: (state, action) => {
            const type = action.payload.type
            const value = action.payload.value
            const num = action.payload.num
            state.racers[num][type] = value
        }
    }
})

export const selectRacers = state => state.teamMaker.racers

export const { addRacer, racerChange } = teamMakerSlice.actions

export default teamMakerSlice.reducer