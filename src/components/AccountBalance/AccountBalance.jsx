
import React from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components'

const Button = styled.button`
    border-radius: 3px;
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
        const buttonClass = 'btn ' + (props.showBalance ? 'btn-primary' : 'btn-info')
        if( props.showBalance ) {
           content = <> Account Balance: ${props.amount} </>;
        }
        return (
            
            <Section> 
                {content}
                <Button 
                onClick={props.handleBalanceVisibility}
                className = {buttonClass}>
                    {buttonText}
                </Button>
                <button className="btn btn-success"
                        onClick = {props.handleBrrrr}>
                    <i className="fas fa-parachute-box"></i>
                    
                </button>
            </Section>
        );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }