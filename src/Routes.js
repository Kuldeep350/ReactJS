import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import App from './App';


const CustomeRoute = () => (

    <Router>
        <div>
            <Route path='/' component={App}/>
            <Route path='/about' component={App}/>
        </div>
    </Router>
)

export default CustomeRoute;