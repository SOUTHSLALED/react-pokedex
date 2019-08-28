import React, { Component } from 'react';
import './Search.css';

// import { Container } from './styles';

export default class Search extends Component {
  render() {
    return (
     <div>
      <h2>Search</h2>
       <form id="search">
         <input
             type="text"
             name="pesquisar"
             placeholder="Digite o nome do pokemon"
          />
          <button type="submit">Pesquisar</button>
       </form>

     </div>

    );
  }
}
