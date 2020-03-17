import React from 'react'
import styled from 'styled-components/macro'

const FooterContainer = styled.div`
    background:#f6f2df;
    justify-content:center;
    align-items:center;
    height:10%;
`

const Text = styled.p`
    // font-family: 'Amatic SC';
    color:#3f4b41;
    font-size: 15px;
    margin: 10px 0;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <Text>@ Angelica Brodin 2020 Technigo Bootcamp</Text>
        </FooterContainer>
    )
}