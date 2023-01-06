import React from 'react'
import styled from 'styled-components'

function NFTCard(props) {

  return (
    <Container>
      <Card>
        <div className='image'>
          <img src={props.image} />
        </div>
        <div className='tokenId'>
          <p># {props.id}</p>
        </div>
      </Card>

    </Container>
  )
}

export default NFTCard

const Container = styled.div`
  width: 3rem;
  height: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-left: 7px;
`

const Card = styled.div`
  width: 2.3rem;
  height: 2.7rem;
  border: 1px solid rgba(130, 71, 230, 0.4);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  overflow: hidden;

  .image {
    flex:1;
    display: flex;
    justify-content:center;
    align-items: center;
    
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .tokenId {
    height: 10px;
   
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: rgb(130, 71, 229);

     p {
      margin: 0;
      font-size: 7px;
      padding-right: 5px;
      color: white
     }
  }
`