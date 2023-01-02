import React from 'react'
import styled from 'styled-components'

function TakeLoan() {
  return (
    <Container>
      <div className='title'>
        <div className='acccount'>
          <div className='image'>
            <img src="/images/take-loan.png" />
          </div>
          <p>Loan</p>
        </div>
      </div>
      <MainSection>

      </MainSection>
    </Container>
  )
}

export default TakeLoan

const Container = styled.div`
     width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .title {
        height: 2.3rem;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
        padding-left: 26px;
        .acccount {
            width: 4.7rem;
            padding-right: 10px;
            height: 25px;
            background-color: rgb(130, 71, 229);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            overflow: hidden;

            .image {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
               
                img {
                    margin-left: -2px;
                    width: 60%;
                }
            }

            p {
          
               color: white;
            }
        }
    }
`

const MainSection = styled.div`
  flex:1;
`