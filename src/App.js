import React, {useState, useEffect} from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'
import axios from 'axios';
import Footer from './components/Footer/Footer'
import 'bootswatch/dist/solar/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all'

const COIN_COUNT = 10;
const formatPrice= price => parseFloat(Number(price).toFixed(3));

const Div = styled.div`
    text-align: center;
    background: linear-gradient(to right, rgb(60, 53, 63), rgb(98, 67, 109) );
    color: lightsalmon;
    `;

function App(){
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);

  
 const componentDidMount = async () => {
   const response = await axios.get(`https://api.coinpaprika.com/v1/coins`)
   const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
   const tickerURL = "https://api.coinpaprika.com/v1/tickers/";
   const promises = coinIds.map(id => axios.get(tickerURL + id));
   const coinData = await Promise.all(promises)
   const coinPriceData = coinData.map(function(response){
   const coin = response.data 
    return {
      key: coin.id,
      name: coin.name,
      ticker: coin.symbol,
      balance: 0,
      price: formatPrice(coin.quotes.USD.price)
     };
   })
       setCoinData(coinPriceData);
   };
  
  useEffect(() => {
    if(coinData.length === 0){
      componentDidMount()
    }
  });

  const handleBrrrr = () => {
    setBalance (oldBalance => oldBalance + 1200)
  }

  const handleBalanceVisibility = () => {
    setShowBalance(oldValue => !oldValue);
  }

  const handleTransaction = (isBuy, valueChangeId) => {
    var balanceChange = isBuy ? 1 : -1;
    const newcoinData = coinData.map( function(values){
      let newValues = { ...values };
      if(valueChangeId === values.key){
        newValues.balance += balanceChange;
        setBalance( oldBalance => oldBalance - balanceChange * newValues.price) 
      }
      return newValues;
    })
    setCoinData(newcoinData);
  }

  const handleRefresh = async (valueChangeId) => {
      const ticketUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
      const response = await axios.get(ticketUrl);
      const newPrice = formatPrice(response.data.quotes.USD.price);
      const newCoinData = coinData.map(function(values) {
        let newValues = {...values};
        if(valueChangeId === values.key){
          newValues.price = newPrice; 
        }
        return newValues;
      });
       setCoinData(newCoinData)
  }
  
  
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance 
          amount={balance} 
          showBalance={showBalance} 
          handleBrrrr = {handleBrrrr}
          handleBalanceVisibility = {handleBalanceVisibility}/>

        <CoinList 
          coinData = {coinData} 
          showBalance = {showBalance}
          handleRefresh = {handleRefresh}
          handleTransaction = {handleTransaction}
          />
          <Footer/>
      </Div>
    );
  
}

export default App;
