import React, { Component } from 'react';

const Input = ({name,label,value,onChange,error}) => {
    return ( 
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
        value={value} 
        onChange={onChange} 
        name={name} 
        type='text' 
        className="form-control" 
        id={name} 
        placeholder="Enter "> 
        </input>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    );
} 

export default Input;