import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components'

    const Td = styled.td`
      border: 1px solid #cccccc;
      width: 30vh;
    `;
    const Button = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid black;
      color: black;
      margin: 0.5em 1em;
      padding: 0.25em 1em;
    `;
export default class Coin extends Component {
    
    
   handleClick = (event) => {
     event.preventDefault();
     this.props.handleRefresh(this.props.ticker);
 
   }

    render() {
        return(
            <tr>
              <Td>{this.props.name}</Td>
              <Td>{this.props.ticker}</Td>
              <Td>${this.props.price}</Td>
              {this.props.showBalance ? <Td>{this.props.balance}</Td> : null}
              <Td>
                <form action="#" method ="POST">
                <Button onClick= {this.handleClick}>REFRESH</Button>
                </form>
              </Td>
            </tr>
          );
    }
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}