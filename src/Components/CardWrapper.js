import React from "react";
import styled from 'styled-components'
import Card from './Card'

const CardWrapper = () =>{
    return(
        <Wrapper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 1100px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    background: cornflowerblue;
    grid-gap: 10px 0;
`

export default CardWrapper