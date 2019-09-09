import React, { Component } from 'react';
import api from '../services/api';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default class Details extends Component {
   static propTypes = {
     match: PropTypes.shape({
       params: PropTypes.shape({
         pokemon: PropTypes.string,
       })
     }).isRequired,
   }
  
  
  
  state = {
     pokemon: {},
   };
  
  
  
  
  async componentDidMount(){
     const { match } = this.props;

     const pokeName = decodeURIComponent(match.params.pokemon);
   
    // const response = await api.get(`/pokemon/${pokeName}`);
     //const sprite = await api.get(`/pokemon/${pokeName}/sprites`);

     const [pokemon] = await Promise.all([
      api.get(`/pokemon/${pokeName}`),
     ]);


     this.setState({
       pokemon: pokemon.data,
       sprites: pokemon.data.sprites.front_default,
       baseexp: pokemon.data.base_experience,
       tamanho: pokemon.data.height,
       peso: pokemon.data.weight,
     })

     console.log(pokemon.data)

    }



  render() {
    const { pokemon, sprites, baseexp, tamanho, peso } = this.state

    return(
      <div>
        <h1>Detalhes</h1>
        <h2>{pokemon.name}</h2>
        <img src={sprites} />
       <ul>
        <li key={baseexp}>Experiência Base:
        <span>{baseexp}</span>
        </li>
        <li key={tamanho}>Altura:
        <span>{tamanho}</span>
        </li>
        <li key={peso}>Peso:
        <span>{peso}</span>
        </li>
        </ul>

      </div>
    );
  }
}
