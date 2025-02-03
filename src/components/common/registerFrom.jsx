import React, { Component } from 'react';
import Input from './input';
import  Joi  from 'joi-browser';
import Form1 from './form';
class RegisterForm extends Form1 {
    state={
        data:{ 
            Email:'',
            password:'',
            username:''
        },
        errors:{}
    };
    schema={
        Email: Joi.string().required().label('Email').email(),
        password: Joi.string().required().label('Password').min(5),
        username: Joi.string().required().label('Username')
    };
    dosubmit=()=>{
        console.log("submitted");
    };

    render() {
        return (
            <div>
            <p>{this.state.errors.password}</p>
            <div>
            <form onSubmit={this.handlesubmit}>
                <Input name='Email' value={this.state.data.Email} label='Email' onChange={this.handlechange} error={this.state.errors.Email} />
                <Input name='password' value={this.state.data.password} label='Password' onChange={this.handlechange} error={this.state.errors.password} />
                <Input name='username' value={this.state.data.username} label='Username' onChange={this.handlechange} error={this.state.errors.username} />
                <button disabled={this.validate()} className="btn btn-primary">Register</button>
            </form>
            </div>
            </div>
        );
    }
}
 
export default RegisterForm;