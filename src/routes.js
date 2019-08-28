import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'

function Routes(){
    return(
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/search" component={Search} />
     </Switch>
    );

}

export default Routes;