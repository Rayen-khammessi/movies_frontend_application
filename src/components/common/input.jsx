import React, { Component } from 'react';

const Input = ({name,label,value,onChange}) => {
    return ( 
        <div className="form-group">
        <label for={name}>{label}</label>
        <input 
        value={value} 
        onChange={onChange} 
        name={name} 
        type='text' 
        className="form-control" 
        id={name}
        placeholder="Enter username">
        </input>
    </div>
     );
} 
 
export default Input;