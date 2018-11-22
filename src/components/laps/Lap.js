import React from 'react';

const Lap = (props) => {
    return(
        <ul className="list-group list-group-flash my-5">
            {props.laps.map( (lap, index) => {
                return(
                    <li key={index} className="list-group-item d-flex">
                        <span className="px-3 m-auto"><h5>Minute: {lap.min}</h5></span>
                        <span className="px-3 m-auto"><h5>Secomd: {lap.sec}</h5></span>
                        <span className="px-3 m-auto"><h5>Mili Sec: {lap.milis}</h5></span>
                     </li>
                )
            })}
        </ul>
    )
}
export default Lap;