import React, { Component } from 'react';
import Input from './input';
import  Joi  from 'joi-browser';
import Form1 from './form';
class LoginForm extends Form1 {
    state={
        data:{ 
            username:'',
            password:''
        },
        errors:{}
    };
    schema={
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };
    dosubmit=()=>{
        console.log("submitted");
    };

    render() {
        return (
            <div>
            <form onSubmit={this.handlesubmit}>
                <Input name='username' value={this.state.data.username} label='Username' onChange={this.handlechange} error={this.state.errors.username} />
                <Input name='password' value={this.state.data.password} label='Password' onChange={this.handlechange} error={this.state.errors.password} />
                <button disabled={this.validate()} className="btn btn-primary">Login</button>
            </form>
            </div>
        );
    }
}
 
export default LoginForm;