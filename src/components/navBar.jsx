import React, { Component } from 'react';
import { Route ,NavLink} from 'react-router-dom';

class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">Vidly</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li  className="nav-item">
                    <NavLink className="nav-NavLink active" aria-current="page" to="/movies">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/cutomrs">Costumers</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/rentals">Rentals</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/register">Register</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
    }
}
 
export default NavBar;