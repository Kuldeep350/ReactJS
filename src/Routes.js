import React from 'react';
import {
    BrowserRouter as Router,
    Route
   
} from 'react-router-dom';
import App from './App';
import About from './About';
import Reactjs from './Reactjs';


const CustomeRoute = () => (

    <Router>
        <div>
            <Route path='/' component={App}/>
            <Route path='/about' component={About}/>
            <Route path='/react' component={Reactjs}/>
        </div>
    </Router>
)

export default CustomeRoute;