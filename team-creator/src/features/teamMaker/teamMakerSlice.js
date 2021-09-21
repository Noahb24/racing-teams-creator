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
        deleteRacer: (state, action) => {
            console.log(action.payload)
            state.racers = [
                ...state.racers.slice(0, action.payload),
                ...state.racers.slice(action.payload + 1)]
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

export const { addRacer, racerChange, deleteRacer } = teamMakerSlice.actions

export default teamMakerSlice.reducer