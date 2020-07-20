import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ createBox }) => {
    const [ form, setForm ] = useState({ height:"", width:"", color:"" }); 

    const handleSubmit = (evt) => {
        evt.preventDefault();
        createBox({...form, id:uuid()});
        setForm({ height:"", width:"", color:"" });
    }

    const handleChange = (evt) => {
        setForm({...form, [evt.target.name]: evt.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="height">height</label>
                <input 
                    type="text"
                    name="height"
                    value={form.height}
                    onChange={handleChange}
                    id="height"
                />
                <label htmlFor="width">width</label>
                <input 
                    type="text"
                    name="width"
                    value={form.width}
                    onChange={handleChange}
                    id="width"
                />
                <label htmlFor="color">color</label>
                <input 
                    type="text"
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                    id="color"
                />
            </div>
            <button>Add New Box</button>
        </form>
    )
}

export default NewBoxForm;
