import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { racerChange, selectRacers } from './teamMakerSlice'

function Racer() {
    const racers = useSelector(selectRacers)
    const dispatch = useDispatch()

    function handleRacerChange (num, type, value) {
        const payload = {
            type,
            num,
            value: value.target.value
        }
        dispatch(racerChange(payload))
    }

    return (
        <div>
            {   
            racers.map( (element, i) => {
                return(
                    <div key={i}>
                        <label>
                            Name: <input type="text" onChange ={e => handleRacerChange(i, 'name', e)} defaultValue={element.name}></input>
                        </label>
                        <label>
                            Time (mm:ss.ms): <input type="text" onChange ={e => handleRacerChange(i, 'time', e)} defaultValue={`${element.time}`}></input>
                        </label>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Racer