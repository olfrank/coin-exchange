
import React from 'react'
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
export default function AccountBalance(props) {
        const buttonText= props.showBalance ? 'Hide Balance' : 'Show Balance';
        let content = null;
        if( props.showBalance ) {
           content = <> Account Balance: ${props.amount} </>;
        }
        return (
            
            <Section> 
                {content}
                <Button onClick={props.handleBalanceVisibility}>
                    {buttonText}
                </Button>
            </Section>
        );
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }