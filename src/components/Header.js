import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

import pokedex from '../assets/pokedex.png'

import './Header.css';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
      <img src={pokedex} alt="pokedex"></img>
      <ul>
       <Link to ='/'> 
        <li>Home</li>
       </Link>
        <li>Search</li>
       <Link to ='/about'> 
        <li>About</li>
       </Link>
      </ul>
      </div>
    </header>
  );
}
