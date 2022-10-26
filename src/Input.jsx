import React, { useState } from 'react';

function Input() {
    var totes = "buro";

    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
        console.log(event.target.value)
    }

    function handleSubmit(){
        totes += "o"
        console.log(value + " " + totes);
    }

    return (
        <>
            <span>
                <input type='text' onChange={handleChange}/>
                <button onClick={handleSubmit}>{totes}</button>
            </span>
        </>
    );
}

export default Input;