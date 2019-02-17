import React, { Component } from 'react';
 import Coins from './components/coins/coins';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AllCoins from './components/coinsall';
import Navbar from './components/Navbar/Navbar';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  state = {
    data : []
  }
  render() {
    return (
      <ApolloProvider client = {client} >
      <div className="App">
      <Navbar/>
     <Coins/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
