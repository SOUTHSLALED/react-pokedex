import React, { Component } from 'react';
import api from '../services/api';

// import { Container } from './styles';

export default class Details extends Component {
   async componentDidMount(){
     const { match } = this.props;

     const pokeName = decodeURIComponent(match.params.details);
   
    // const response = await api.get(`/pokemon/${pokeName}`);
     //const sprite = await api.get(`/pokemon/${pokeName}/sprites`);

     const [pokemon, sprites] = await Promise.all([
      api.get(`/pokemon/${pokeName}`),
     ]);

     console.log(pokemon);

    }



  render() {
    return <h1>details</h1>;
  }
}
