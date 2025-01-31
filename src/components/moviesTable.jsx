import React, { Component } from 'react';
import Table from './common/table';
import { Link } from 'react-router-dom';

class Moviesable extends Component {

    columns=[
        {path:'title',label:'Title',content: movie =>(<Link to={`/movies/${movie._id}`}>{movie.title}</Link>)},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'Stock'},
        {path:'dailyRentalRate',label:'Rate'},
        {key:'like',content :movie => (<td>{this.props.like(movie)}</td>)},
        {key:'delete',content :movie=>(<td><button onClick={() => this.props.handeldeletebutton(movie)} className="btn btn-danger btn-sm">Delete</button></td>)}
    ]

    render() { 
        return (  
            <Table 
            columns={this.columns} 
            data={this.props.minimovies} 
            sortcolumn={this.props.sortcolumn} 
            onsort={this.props.onsort}
            />
        );
    }
}



 
export default Moviesable;