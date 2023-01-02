import React from 'react'
import styled from 'styled-components'

function UserAccount() {
    return (
        <Container>
            this is user account section
        </Container>
    )
}

export default UserAccount

const Container = styled.div`
    margin-left: 26px;
    padding-top: 5px;
    width: 100%;
    height: 100%;
    background-color: lightcoral;
    display: flex;
    justify-content: center;
    align-items: center;
`