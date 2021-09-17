import React from 'react'
import {useDispatch} from 'react-redux'
import Racer from './racer'
import { addRacer } from './teamMakerSlice'


function TeamMaker() {
    const dispatch = useDispatch()
    
    return (
        <div>
            <div className = 'header'>
                <label>
                    Number of Teams:
                    <input type='number'></input>
                </label>
            </div>
            <div className = 'racers'>
                Racers:
                    <Racer />
            </div>
            <button onClick={() => dispatch(addRacer())}>Add Racer</button>
            <div className = 'teams'>

            </div>
        </div>
    )
}

export default TeamMaker