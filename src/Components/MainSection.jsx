import React from 'react'
import styled from 'styled-components'

function MainSection() {
    return (
        <Container>
          this is main section
        </Container>
    )
}

export default MainSection

const Container=styled.div`

  position: absolute;
  top: calc(102vh - 6.5rem);
  left: 0;
  right: 0;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
