import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Details from './pages/Details'
import Curtain from './pages/Curtain'

function Routes(){
    return(
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/search" component={Search} />
       <Route path="/details/:details" component={Details} />
       <Route path="/curtain" component={Curtain} />
     </Switch>
    );

}

export default Routes;