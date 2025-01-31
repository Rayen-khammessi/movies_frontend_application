import React,{Component} from 'react';
import Movies from './components/movies';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Rentals from './components/rentals';
import Notfound from './components/nofound';
import customers from './components/customrs';
import { Navigate } from 'react-router-dom';
import NavBar from './components/navBar';
import MovieForm from './components/movieFORM';
import LoginForm from './components/common/loginForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <main className='container'>
        <Routes>
          <Route path='/movies/:id' Component={MovieForm}></Route>
          <Route path='/movies' Component={Movies}/>
          <Route path='/cutomrs' Component={customers}/>
          <Route path='/login' Component={LoginForm}/>
          <Route path='/rentals' Component={Rentals}/>
          <Route path='/not-found' Component={Notfound}/>
          <Route path="*" element={<Navigate to="/not-found" replace />}/>
        </Routes>
      </main>

      </React.Fragment>
    )
  }
}

export default App;