
import React, { Component } from 'react'
import styled from 'styled-components'

import {GiOctopus} from 'react-icons/gi';


const H1 = styled.h1`
    font-size: 4rem;
    color: rgb(194, 194, 194);
`;
// const HeaderIcon = styled.div`
//     font-size: 100px;
//     margin-top: 20px;
//     height: 8rem;
//     pointer-events: none;
//     color: #fff ;
//     transform: rotateZ(0deg);

//     &:hover{
//         transform: ease-in-out rotateZ(360deg);
//     }
// `;
 const Octopus = styled(GiOctopus)`
    font-size: 100px;
    margin-top: 20px;
    height: 8rem;
    pointer-events: none;
    color: #fff;
    transform: rotateZ(0deg);
    cursor: pointer;

    &:hover{
        transform: rotateZ(360deg);
    }
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
            
                <Octopus />
            
            <H1>
              COIN TRACKER
            </H1>
          </Header>
        )
    }
}
