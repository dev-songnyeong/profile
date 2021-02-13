import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../router/home'
import Contact from '../router/contacts'
import About from '../router/About'

const index = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Home} />
                <Route path='/contact' component={Contact} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default index;