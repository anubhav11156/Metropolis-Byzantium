import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
          This is footer section
        </Container>
    )
}

export default Footer

const Container=styled.div`
  width: 100%;
  height: 600px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`
