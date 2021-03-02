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
  state={
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: "Bitcoin",
        ticker: "BTC",
        balance: 2,
        price: 50000
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        balance: 13,
        price: 1800
      },
      {
        name: "Reef Finance",
        ticker: "REEF",
        balance: 30000,
        price: 0.03
      },
      {
        name: "Cardano",
        ticker: "ADA",
        balance: 10000,
        price: 1.12
      }
      
    ]
  }

  handleBalanceVisibility = () => {
    this.setState(function(oldState) {
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }
  handleRefresh = (valueChangeTicker) => {
      const newCoinData = this.state.coinData.map(({ticker, name, price, balance }) => {
        let newPrice = price;
        if(valueChangeTicker === ticker){
          const randomPercentage = 0.995 + Math.random() * 0.01;
          newPrice= newPrice*randomPercentage
        }
        return {
          ticker,
          name,
          balance,
          price: newPrice
        }
      });
      this.setState( { coinData: newCoinData } );
  }
  
  

  render (){
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance} 
          handleBalanceVisibility = {this.handleBalanceVisibility}/>

        <CoinList 
          coinData = {this.state.coinData} 
          showBalance = {this.state.showBalance}
          handleRefresh = {this.handleRefresh}/>
        
      </Div>
    );
  }
  
}

export default App;
