import React from 'react'
import styled from 'styled-components'

function History() {
  return (
    <Container>
      <div className='title'>
        <div className='acccount'>
          <div className='image'>
            <img src="/images/loan-history.png" />
          </div>
          <p>Loan History</p>
        </div>
      </div>
      <HistorySection>

      </HistorySection>
    </Container>
  )
}

export default History

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

            width: 8.2rem;
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
                    margin-left: -3px;
                    width: 55%;
                }
            }

            p {
          
               color: white;
            }
        }
    }  
`

const HistorySection = styled.div`
  flex:1;
`