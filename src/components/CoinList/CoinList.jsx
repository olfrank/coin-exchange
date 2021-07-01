import React from 'react'
import Coin from '../COIN/Coin';
import styled from 'styled-components'


const Table = styled.table`
    font-size: 1.2rem;
`;
    
    
    
export default function CoinList(props) {
        return (
            <Table className = 'table-hover'>
                <thead>
                    <tr>
                     <th>Name</th>
                     <th>Ticker</th>
                     <th>Price</th>
                     <th>Balance</th>
                     <th>Actions</th>

                    </tr>
                </thead>
          <tbody> 
            {
            props.coinData.map( ({key, name, ticker, balance, price})=>
              <Coin 
              key = {key} 
              handleRefresh = {props.handleRefresh}
              handleTransaction = {props.handleTransaction}
              name =  {name} 
              ticker = {ticker} 
              showBalance = {props.showBalance}
              balance = {balance}
              price = {price}
              tickerId = {key}
              />
            )
            }
          </tbody>
          </Table>
        )
    }

