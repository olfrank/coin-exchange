import React, { Component } from 'react'
import Coin from '../COIN/Coin';
import styled from 'styled-components'


const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;
    
    
    
export default class CoinList extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                     <th>Name</th>
                     <th>Ticker</th>
                     <th>Price</th>
                     {this.props.showBalance ? <th>Balance</th> : null}
                     <th>Actions</th>

                    </tr>
                </thead>
          <tbody> 
            {
            this.props.coinData.map( ({name, ticker, balance, price})=>
              <Coin 
              key={ticker} 
              handleRefresh={this.props.handleRefresh}
              name={name} 
              ticker={ticker} 
              showBalance= {this.props.showBalance}
              balance={balance}
              price={price}/>
            )
            }
          </tbody>
          </Table>
        )
    }
}
