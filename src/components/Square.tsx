import React from 'react';
import classes from "./square.module.css"

interface BoardProps {
    value: String,
    color: String
}
function Square(props: BoardProps){
    return (      
    <div style={{width: '80px', height: '80px', backgroundColor: props.color === 'white' ? 'white' : 'lightgrey', border: '1px black solid'}}  >
       <p>{props.value}</p>
    </div>
    )
}

export default Square