import { errors } from 'joi-browser';
import React, { Component } from 'react';
import Joi  from 'joi-browser';

class Form1 extends Component {
    state = { 
        data:{},
        errors:{}
    };
    validate=()=>{
        const result = Joi.validate(this.state.data,this.schema, {abortEarly:false})
        if (!result.error) return null ;
        const uperrors={};
        for (let item of result.error.details){
            uperrors[item.path[0]] =item.message;
        };
        return uperrors;
    };

    validarproperty=(input)=>{
        const obj ={[input.name] :input.value}
        const schema1={[input.name]:this.schema[input.name]};
        const {error} = Joi.validate(obj,schema1);
        return error ? error.details[0].message : null;
    };

    handlesubmit=e=>{
        e.preventDefault();
        const uperrors =this.validate();
        this.setState({errors:uperrors || {}});        
        if (uperrors) return;
    };


    handlechange=e=>{
        const upderrors ={...this.state.errors};
        const errormessage=this.validarproperty(e.currentTarget);
        if (errormessage) {
            upderrors[e.currentTarget.name]=errormessage;
        }
        const updata={...this.state.data};
        updata[e.currentTarget.name] = e.currentTarget.value;
        this.setState({data:updata,errors:upderrors});
    };

}
 
export default Form1;