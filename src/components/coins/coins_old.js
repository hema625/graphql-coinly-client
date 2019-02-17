import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getCoinsQuery = gql`
  {
    coins
     {
        name
        tickerSymbol
        tickerImage
        icoUSDPrice
        icoETHPrice
        icoBTCPrice
        icoTotalUSDRaised
        icoDate
      }
   }
`
class coins extends Component {
    displayCoins = ()=>{
        var data = this.props.data;
        if(data.loading) {
            return(<div>Loading...</div>)
        }
        else {
           return data.coins.map(coin=>{
               return (
                   <div key = {coin.id}>
           {coin.name }|| {coin.icoETHPrice}|| {coin.icoBTCPrice}|| {coin.icoTotalUSDRaised}||{coin.icoDate}
                   </div>
               )
           })
        }
    }
    render() {
        console.log(this.props);
        return(<div>
            All Coins
            {this.displayCoins()}
        </div>)
    }
}

export default graphql(getCoinsQuery)(coins);

