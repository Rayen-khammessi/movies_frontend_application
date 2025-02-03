import React ,{Component} from "react";
import { getmovies } from "./fakemoviesservice.js";
import movies from "./movies.jsx";

class Tryy extends Component {
    state={
        movies : getmovies()
    }
    handlebutton=(movie)=>{
        const upmovies=this.state.movies.filter(m=> m._id!==movie._id);
        this.setState({movies:upmovies});

    }
    render(){
        if (this.state.movies.length===0) {
            return <p>there is no movies</p>
        }
        else
        return (
        <React.Fragment>
        <p>there is {this.state.movies.length} movies in the</p>
        <table className="table">
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>GENRE</th>
                    <th>STOCK</th>
                    <th>RATE</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie =>(
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={()=>this.handlebutton(movie)}  className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
                ))}
            </tbody>
        </table>
        </React.Fragment>
        )
    }
}
 
export default Tryy;