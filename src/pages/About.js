import React, { Component } from 'react';
import './About.css';

// import { Container } from './styles';

export default class About extends Component {
  render() {
    return (
     <div>
      <h2>About</h2>
      <p>Treinando meu react fazendo um pokedex
        <br />A ideia aqui é utilizar a API da nintendo
        e mostrar pokemons e suas caracteristicas
       <br /> Por enquanto ainda está em construção!
      </p>
     </div>

    );
  }
}
