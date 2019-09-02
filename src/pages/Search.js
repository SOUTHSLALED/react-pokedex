import React, { Component } from 'react';
import './Search.css';
import api from '../services/api';

// import { Container } from './styles';

export default class Search extends Component {
  state = {
    pokemon: '',
    pokemons: [],
  };
  
  handleInputChange = e => {
   this.setState({ pokemon: e.target.value });
  };
  
 handleSubmit = async e => {
   e.preventDefault();

   const { pokemon, pokemons } = this.state;

   const response = await api.get(`/pokemon/${pokemon}`)
 
   const data = {
     name: response.data.name,
   };

   this.setState({
    pokemons: [...pokemons, data],
    pokemon: '',
  });
  }

  
  render() {
    const { pokemon, pokemons } = this.state

    return (
     <div>
      <h2>Search</h2>
       <form id="search" onSubmit={this.handleSubmit}>
         <input
             type="text"
             name="pesquisar"
             placeholder="Digite o nome do pokemon"
             value = {pokemon}
             onChange={this.handleInputChange}
          />
          <button type="submit">Pesquisar</button>
       </form>

       <ul>
         {pokemons.map(pokemon =>(
         <li key={pokemon.name}>
          <span>{pokemon.name}</span>
          <a href="#">Detalhes</a>
         </li>
         ))}
       </ul>
     </div>

    );
  }
}
