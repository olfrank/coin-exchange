import React from 'react';
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
export default function Coin(props) {
  
    const handleClick = (event) => {
     event.preventDefault();
     props.handleRefresh(props.tickerId);
   }
        return(
            <tr>
              <Td>{props.name}</Td>
              <Td>{props.ticker}</Td>
              <Td>${props.price}</Td>
              {props.showBalance ? <Td>{props.balance}</Td> : null}
              <Td>
                <form action="#" method ="POST">
                <Button onClick= {handleClick}>REFRESH</Button>
                </form>
              </Td>
            </tr>
          );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}