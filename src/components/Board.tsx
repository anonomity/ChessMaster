import React from 'react';
import Square from "./Square";
function Board() {
    let line: Array<Object> = []
    let letters: Array<String> = ['A', 'B', 'C' , 'D', 'E', 'F', 'G', 'H']
    let board = []
    let color = 'white'
    for (let l = 0; l < 8; l++) {
        for (let i = 1; i < 9; i++) {
            if(l%2 !== 0){ i%2 === 0  ? color = 'lightgrey' : color = 'white' }
            if(l%2 == 0) { i%2 !== 0 ? color = 'lightgrey' : color = 'white' }
            
            line.push(<Square value={letters[l] + i.toString() } color={color} />)
        }
        board.push(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {line}
        </div>
        )
        line = []
    }
    return (
        <div style={{marginTop:' 100px'}}>
            {board}
        </div>
    )
}

export default Board