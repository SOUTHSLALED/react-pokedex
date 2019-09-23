import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

import pokedex from '../assets/pokedex.png'
import pokeball from '../pages/pokeball.png'

import './Header.css';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
      <img src={pokedex} alt="pokedex"></img>
      <ul>
       <Link to ='/' style={{textDecoration: 'none'}}> 
        <li className="active">Home</li>
       </Link>
       <Link to ='/search' style={{textDecoration: 'none'}}>
        <li className="active">Search</li>
       </Link>
       <Link to ='/about' style={{textDecoration: 'none'}} > 
        <li className="active">About</li>
       </Link>
       <Link to ='/curtain' style={{textDecoration: 'none'}} > 
        <li className="active">Curtain</li>
       </Link>
      </ul>
      <img class="image" src={pokeball} alt="pokeball"></img>
      </div>
    </header>
  );
}
