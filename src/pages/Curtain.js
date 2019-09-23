import React, { Component } from 'react';
import './Curtain.css';
import pokeball from './pokeball.png'

// import { Container } from './styles';

export default class Curtain extends Component {
  render() {
    return (
     <div className="curtain">
       <img class="image" src={pokeball} alt="" width="120" height="120"></img>
       <div className="curtain-left">
       <p>left</p>
       </div>
       <div className="curtain-right">
       <p>right</p>
       </div>
     </div>

    );
  }
}
