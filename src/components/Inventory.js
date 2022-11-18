import React from 'react'
import styled from 'styled-components'
import InventoryCard from './InventoryCard'
import {testing} from './Testing'


function Inventory() {
  const cards = testing.map( card => {
    return (
      <InventoryCard
        id={card.id}
        bg={card.bg}
      />
    )
  })
    return (
        <Container>
          <Heading>
            <p>NFTs Owned by you</p>
          </Heading>
          <MainSection>
            {cards}
          </MainSection>
        </Container>
    )
}

export default Inventory

const Container=styled.div`
  margin-left: 30px;
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
`

const Heading=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: rgba( 255, 255, 255, 0.5 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  box-shadow: 0px 5px 15px rgba(184, 184, 184, 0.1);
  border: 2px solid white;

  p {
    margin: 0;
    padding: 6px;
    margin-left: 10px;
    font-size: 2.2rem;
    font-weight: 500;
    color: #0D004D;
    opacity: 0.8;
  }
`
const MainSection=styled.div`
  padding-bottom: 50px;
  flex:1;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-column-gap: 66px;
  grid-row-gap: 48px;

`
