import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Racer from './racer'
import Teams from './raceTeams'
import { findClosestNthTimes } from './teamMakerlogic'
import { addRacer, getTeams, selectRacers, selectTeams, selectTeamSize, teamSizeChange } from './teamMakerSlice'
import './teamMaker.css'


function TeamMaker() {
    const dispatch = useDispatch()
    const teamSize = useSelector(selectTeamSize)
    const racers = useSelector(selectRacers)
    const teams = useSelector(selectTeams)

    function handleGetTeams () {
        let teams
        try { 
            teams = findClosestNthTimes(racers, teamSize)
        } catch(err) {
            window.alert('Error in Creating Teams')
            console.log(err)
            return
        }
        dispatch(getTeams(teams))
    }
    
    return (
        <div className = 'teamMaker'>
            <div className = 'header'>
                <label>
                    Team Size:
                    <input id="teamSize"onChange ={e => dispatch(teamSizeChange(e.target.value))} type='number' value = {teamSize}></input>
                </label>
                <button onClick={() => dispatch(addRacer())}>Add Racer</button>
                <button onClick={() => handleGetTeams()}>Get Teams</button>
            </div>

            <div>
                <h2>Racers: {racers.length}</h2>
                    <Racer />
            </div>

            <div>
                <h2>Teams: {teams.length}</h2>
                    <Teams />
            </div>
        </div>
    )
}

export default TeamMaker