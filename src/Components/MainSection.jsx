import React from 'react'
import styled from 'styled-components'

function MainSection() {

  // window.onscroll = function (e) {
  //   // setPixelScrolled(window.scrollY);
  //   console.log(window.scrollY);
  // }

    return (
        <Container>
          <Metropolis>
          </Metropolis>
          <Loan>
          </Loan>
        </Container>
    )
}

export default MainSection

const Container=styled.div`
  margin-top: 3.1rem;
  position: absolute;
  top: calc(102vh - 6.5rem);
  left: 0;
  right: 0;
  height: 2000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const Metropolis=styled.div`
  margin-top: -1.4rem;
  width: 70%;
  height: 400px;
  border-radius: 20px;
  border: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0px 2px 10px rgba(111, 108, 108, 0.15);
`

const Loan=styled.div`
  margin-top: 0.6rem;
  width: 70%;
  flex:1;
  border-radius: 20px;
  border: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0px 2px 10px rgba(111, 108, 108, 0.15);

`
