import React from 'react';
const inputStyle = {
    border: '2px solid red'
};



const userInput = (props) =>{
    return (
        <input type='text' value={props.value} onChange={props.changed} style={inputStyle}/>
    );
}

export default userInput;