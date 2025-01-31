import React, { Component } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MovieForm = ({useParams}) => {
    const navigate=useNavigate()

    const handleSave=()=>{
        navigate('/movies')
    }
    console.log(useParams)
    return (
        <React.Fragment>
            <h1>Movie FORM </h1>
            <button className='btn btn-primary' onClick={handleSave}>Save</button>

        </React.Fragment>
    );
}
 
export default MovieForm;