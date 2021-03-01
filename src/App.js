import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/COIN/Coin';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          OL FRANK'S COIN EXCHANGE
        </h1>
      </header>
      <table className="coin-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <Coin name= "Bitcoin" ticker= "BTC" price = {50000} />
            <Coin name= "Ethereum" ticker= "ETH" price = {1800}/>
            <Coin name= "Reef Finance" ticker= "REEF" price = {0.03} />
            <Coin name= "Cardano" ticker= "ADA" price = {1.12} />
        </tbody>
        </table>
    </div>
  );
}

export default App;
