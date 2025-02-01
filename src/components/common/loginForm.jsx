import React, { Component } from 'react';
import Input from './input';

class LoginForm extends Component {
    username = React.createRef();
    state={
        account:{ 
            username:'',
            password:''
        },
        errors:{}
    };
    handlesubmit=e=>{
        e.preventDefault();
        const uperrors =this.validate();
        this.setState({errors:uperrors});
        if (errors) return;
        console.log(this.state.errors)
    };
    handlechange=e=>{
        const upaccount={...this.state.account};
        upaccount[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account:upaccount});
    };
    render() {
        return (
            <div>
            <form onSubmit={this.handlesubmit}>
                <Input name='username' value={this.state.account.username} label='"Username' onChange={this.handlechange} />
                <Input name='password' value={this.state.account.password} label='"Password' onChange={this.handlechange} />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        );
    }
}
 
export default LoginForm;