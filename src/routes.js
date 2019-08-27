import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import About from './pages/About'

function Routes(){
    return(
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
     </Switch>
    );

}

export default Routes;