import React from 'react'
import styled from 'styled-components'

function UserAccount() {
    return (
        <Container>
            <div className='title'>
                <div className='acccount'>
                    <div className='image'>
                        <img src="/images/user.png" />
                    </div>
                    <p>Account</p>
                </div>
            </div>
            <AccountDetail>

            </AccountDetail>
        </Container>
    )
}

export default UserAccount

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
            width: 6.7rem;
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
                    margin-left: -10px;
                    width: 50%;
                }
            }

            p {
          
               color: white;
            }
        }
    }
    
`

const AccountDetail = styled.div`
    flex:1;
`