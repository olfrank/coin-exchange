import React from 'react';

import './App.css';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'

const Div =styled.div`
    text-align: center;
    background-color: blueviolet;
    color:coral
    `;

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 50000
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 1800
        },
        {
          name: "Reef Finance",
          ticker: "REEF",
          price: 0.03
        },
        {
          name: "Cardano",
          ticker: "ADA",
          price: 1.12
        }
        
      ]
    }
    this.handleRefresh=this.props.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker){
      const newCoinData = this.state.coinData.map(({ticker, name, price}) => {
        let newPrice = price;
        if(valueChangeTicker === ticker){
          const randomPercentage = 0.995 + Math.random() * 0.01;
          newPrice= newPrice*randomPercentage
        }
        return {
          ticker,
          name,
          price: newPrice
        }
      });
      this.setState( { coinData: newCoinData } )
  }

  render (){
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
        
      </Div>
    );
  }
  
}

export default App;
