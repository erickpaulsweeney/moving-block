import React, { useState } from 'react'
import styled from 'styled-components';

const Box = styled.div`
    background-color: white;
    height: 5em;
    width: 5em;
    border-radius: 10px;
    position: absolute;
    top: ${props => props.yVal}em;
    left: ${props => props.xVal}em;
    transform: rotate(${props => props.rVal}deg);
    border: 1px solid black;
`

export default function Main() {
    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);
    const [rVal, setRVal] = useState(0);
    
    return (
        <div className='container-main'>
            <div className="container-box">
                <Box xVal={xVal} yVal={yVal} rVal={rVal} />
            </div>
            <div className="container-controls">
                <div className="container-x">
                    <p>X ({xVal * 16}px)</p>
                    <input type="range" min={0} max={16} value={xVal} onChange={(ev) => setXVal(ev.target.value)} />
                </div>
                <div className="container-y">
                    <p>Y ({yVal * 16}px)</p>
                    <input type="range" min={0} max={16} value={yVal} onChange={(ev) => setYVal(ev.target.value)} />
                </div>
                <div className="container-rotate">
                    <p>Rotate ({rVal}deg)</p>
                    <input type="range" min={0} max={360} value={rVal} onChange={(ev) => setRVal(ev.target.value)} />
                </div>
            </div>
        </div>
    )
}