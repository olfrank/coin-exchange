
import React, { Component } from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    padding: 1.5rem 0 2rem 0;
`;
export default class AccountBalance extends Component {
    render() {
        return (
            
            <Section> 
                Account Balance: ${this.props.amount}
            </Section>
        );
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }