import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teamSize: 0,
    racers: [
        {
        name: '',
        time: '00:00.00',
        id: 0}
    ],
    teams: []
}

export const teamMakerSlice = createSlice ({
    name: 'teamMaker',
    initialState,
    reducers: {
        teamSizeChange: (state, action) => {
            state.teamSize = action.payload
        },
        addRacer: (state, action) => {
            state.racers.push({
                name: "",
                time: '00:00.00',
                id: state.racers.length
            })
        },
        deleteRacer: (state, action) => {
            state.teams = []
            state.racers = [
                ...state.racers.slice(0, action.payload),
                ...state.racers.slice(action.payload + 1)]
        },
        racerChange: (state, action) => {
            const type = action.payload.type
            const value = action.payload.value
            const num = action.payload.num
            state.racers[num][type] = value
        },
        getTeams: (state, action) => {
            state.teams = action.payload
        }
    }
})

export const selectRacers = state => state.teamMaker.racers
export const selectTeamSize = state => state.teamMaker.teamSize
export const selectTeams = state => state.teamMaker.teams

export const { addRacer, racerChange, deleteRacer, getTeams, teamSizeChange } = teamMakerSlice.actions

export default teamMakerSlice.reducer