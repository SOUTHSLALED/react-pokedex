import React, { Component } from 'react';
import './Search.css';
import api from '../services/api';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default class Search extends Component {
  state = {
    pokemon: '',
    pokemons: [],
  };

  componentDidMount(){
    const pokemons = localStorage.getItem('pokemons');

    if (pokemons){
      this.setState({pokemons: JSON.parse(pokemons)});
    }

  }

  componentDidUpdate(_, prevState){
   const {pokemons} = this.state;

    if (prevState.pokemons !== this.state.pokemons){
      localStorage.setItem('pokemons', JSON.stringify(pokemons))
    }

  }
  
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

   console.log(data);

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
          <Link to={`/details/${encodeURIComponent(pokemon.name)}`}>Detalhes</Link>
         </li>
         ))}
       </ul>
     </div>

    );
  }
}
