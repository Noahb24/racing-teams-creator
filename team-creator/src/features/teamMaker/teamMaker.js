import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Racer from './racer'
import Teams from './raceTeams'
import { findClosestNthTimes } from './teamMakerlogic'
import { addRacer, getTeams, selectRacers, selectTeamSize, teamSizeChange } from './teamMakerSlice'


function TeamMaker() {
    const dispatch = useDispatch()
    const teamSize = useSelector(selectTeamSize)
    const racers = useSelector(selectRacers)

    function handleGetTeams () {
        const teams = findClosestNthTimes(racers, teamSize)
        dispatch(getTeams(teams))
    }
    
    return (
        <div>
            <div className = 'header'>
                <label>
                    Team Size:
                    <input onChange ={e => dispatch(teamSizeChange(e.target.value))} type='number' value = {teamSize}></input>
                </label>
            </div>
            <div className = 'racers'>
                Racers:
                    <Racer />
            </div>
            <button onClick={() => dispatch(addRacer())}>Add Racer</button>
            <button onClick={() => handleGetTeams()}>Get Teams</button>
            <div className = 'teams'>
            </div>
            <div className = 'teams'>
                Teams:
                <Teams />
            </div>
        </div>
    )
}

export default TeamMaker