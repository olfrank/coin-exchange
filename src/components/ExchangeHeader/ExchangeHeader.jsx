
import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.svg';


const H1 = styled.h1`
    font-size: 4rem;
    color: rgb(194, 194, 194);
`;
const Img = styled.img`
    height: 8rem;
    pointer-events: none;
    color: rgb(184, 63, 15) ;
`;


const Header = styled.header`
    background: linear-gradient(to right, rgb(60, 53, 63), rgb(98, 67, 109) );;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
 `;

export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header>
            <Img src={logo} alt="logo" />
            <H1>
              COIN TRACKER
            </H1>
          </Header>
        )
    }
}
