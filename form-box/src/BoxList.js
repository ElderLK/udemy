import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [ boxes, setBoxes ] = useState([]);

    const create = (newBox) => {
        setBoxes([...boxes, newBox])
    }

    const remove = (id) => {
        setBoxes(boxes.filter(b => b.id !== id));
    }

    return (
        <div>
            <h1>Color Box Maker Thingy!</h1>
            <NewBoxForm createBox={create} removeBox={remove}/>
            {
                boxes.map(b => (
                  <Box key={b.id} id={b.id} width={b.width} height={b.height} color={b.color} removeBox={remove}/>
                ))
            }
        </div>
    )
}

export default BoxList;
