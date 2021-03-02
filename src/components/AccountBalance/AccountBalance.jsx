
import React, { Component } from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid black;
    color: black;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
`;
const Section = styled.section`
    font-size: 2rem;
    padding: 1.5rem 0 2rem 0;
`;
export default class AccountBalance extends Component {
    render() {
        const buttonText= this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        let content = null;
        if( this.props.showBalance ) {
           content = <> Account Balance: ${this.props.amount} </>;
        }
        return (
            
            <Section> 
                {content}
                <Button onClick={this.props.handleBalanceVisibility}>
                    {buttonText}
                </Button>
            </Section>
        );
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }