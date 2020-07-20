import React from 'react';

const Box = ({ id, height, width, color, removeBox }) => (
    <div>
        <div 
            style={{
                height:`${height}em`,
                width:`${width}em`,
                backgroundColor: color
            }}

        />
        <button onClick={() => removeBox(id)}>X</button>
    </div>
);

export default Box;
