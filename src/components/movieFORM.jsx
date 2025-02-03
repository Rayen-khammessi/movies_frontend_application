import React, { Component } from 'react';
import Input from './common/input';
import  Joi  from 'joi-browser';
import Form1 from './common/form';

class MovieFrom extends Form1 {
    state={
        data:{ 
            title:'',
            genre:'',
            numberinstock:'',
            rate:''
        },
        errors:{}
    };
    schema={
        title: Joi.string().required().label('Title'),
        genre: Joi.string().required().label('Genre'),
        numberinstock: Joi.number().greater(0).required().label('Number in stock'),
        rate: Joi.number().greater(0).less(10).required().label('Rate')
    };


    dosubmit=()=>{
        console.log("submitted");
    };



    render() {
        return (
            <div>
            <form onSubmit={this.handlesubmit}>
                <Input name='title' value={this.state.data.title} label='Titel' onChange={this.handlechange} error={this.state.errors.title} />
                <Input name='genre' value={this.state.data.genre} label='Genre' onChange={this.handlechange} error={this.state.errors.genre} />
                <select class="form-control">
                    <option>Action</option>
                    <option>Comedie</option>
                    <option>Thriller</option>
                </select>
                <Input name='numberinstock' value={this.state.data.numberinstock} label='Number in stock' onChange={this.handlechange} error={this.state.errors.numberinstock} />
                <Input name='rate' value={this.state.data.rate} label='Rate' onChange={this.handlechange} error={this.state.errors.rate} />
                <button disabled={this.validate()} className="btn btn-primary">Save</button>
            </form>
            </div>
        );
    }
}
 
export default MovieFrom;