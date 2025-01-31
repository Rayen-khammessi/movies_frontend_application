import React,{Component} from "react";
import {getmovies} from '../services/fakemoviesservice';
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Listgroup from "./common/listgroup";
import {getgenres } from "../services/fakegenreservices";
import Moviesable from "./moviesTable";
import _ from 'lodash';

class Movies extends Component{
    state={
        movies:getmovies(),
        currentpage:1,
        pagesize:4,
        genres:getgenres(),
        genre:'All Genres',
        sortcolumn:{path:'title',order:'asc'}
    };

    handeldeletebutton=(movie)=>{
        const movies=this.state.movies.filter(m=> m._id !== movie._id);
        this.setState({movies});
    };

    like=(movie)=>{
        let classes="fa fa-heart";
        if (movie.liked===false) {
            classes+= '-o';
        }
        return <i onClick={()=>this.pushlike(movie)} style={{cursor:'pointer'}} className={classes} aria-hidden="true"></i>
    };
    pushlike = (movie) => {
        const movies = this.state.movies.map((m) => {
            if (m._id === movie._id) {
                return { ...m, liked: !m.liked };
            }
            return m;
        });
        this.setState({ movies });
    };
    handlepagechange= page =>{
        this.setState({currentpage:page})
    }
    handlegenrebutton=(upgenre)=>{
        this.setState({genre:upgenre,currentpage:1});
    }
    handlesort=upsortcolumn=>{
        this.setState({sortcolumn:upsortcolumn});
    }


    render(){
        const {lenth:count} = this.state.movies;
        const {pagesize,currentpage,movies,genres,genre,sortcolumn}=this.state
        if (movies.length === 0){
            return <p>there is no movies</p>
        }
        const upmovies =
            genre === "All Genres"
                ? movies
                : movies.filter((m) => m.genre.name === genre);
        const sorted=_.orderBy(upmovies,[sortcolumn.path],[sortcolumn.order])
        const minimovies=paginate(sorted,currentpage,pagesize)
        return (
            <React.Fragment>    
            <p>Showing {minimovies.length} movies in the database</p>
            <div className="d-flex flex-row mb-2">
                <div className="p-2">
                    <Listgroup 
                    selectedgenre={genre}
                    genres={genres}
                    ongenre={this.handlegenrebutton}
                    />                              
                </div>
                <div className="p-2">
                    <Moviesable
                        onsort={this.handlesort}
                        sortcolumn={this.state.sortcolumn}
                        minimovies={minimovies}
                        like={this.like}
                        handeldeletebutton={this.handeldeletebutton}
                    />
                    <Pagination 
                        itemscount={upmovies.length} 
                        pagesize={this.state.pagesize} 
                        currentpage={this.state.currentpage}
                        onpagechange={this.handlepagechange}
                    />
                </div>
            </div>
            </React.Fragment>
        )
    };
};



 
export default Movies;