import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components'

    const Td = styled.td`
      border: 1px solid #cccccc;
      width: 16vw;
    `;
    const TdControl = styled(Td)`
      width: 36vw;
    `;

    const TdName = styled(Td)`
      width: 20vw
    `;

    const Button = styled.button`
      border-radius: 3px;
      margin: 0.5em 1em;
    `;

export default function Coin(props) {

    const handleRefresh = (event) => {
     event.preventDefault();
     props.handleRefresh(props.tickerId);
   }

   const handleBuy = (event) => {
    event.preventDefault();
    if(props.balance >= props.price){
      props.handleTransaction( true, props.tickerId );
    }
    
  }

  const handleSell = (event) => {
    event.preventDefault();
    if(props.balance > 0){
      props.handleTransaction( false, props.tickerId );
    }

  }
        return(
            <tr>
              <TdName>{props.name}</TdName>
              <Td>{props.ticker}</Td>
              <Td>${props.price}</Td>
              <Td>{props.showBalance ?  props.balance : "-"} </Td>
              <TdControl>
                <form action="#" method ="POST">
                <Button className = "btn btn-info" onClick= { handleRefresh } >REFRESH</Button>
                <Button className = "btn btn-success" onClick= { handleBuy } >BUY</Button>
                <Button className =  "btn btn-warning" onClick= { handleSell } >SELL</Button>
                </form>
              </TdControl>
            </tr>
          );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}