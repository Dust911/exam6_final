import styled from 'styled-components'

export const TicketContainer = styled.div`
    box-sizing: border-box;
    width: 502px;
    height: 147px;
    padding: 26px 0 32px 23px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    margin: 0 0 21px 0;

    @media ( max-width: 375px){
        max-width: 282px;
        height: auto;
    }
`

export const TicketTitle = styled.h2`
    margin: 0 0 26px 0;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #2196F3;
`

export const TicketInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media ( max-width: 375px){
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 14px;
    }
`

export const TicketContent = styled.div`
    width: 141px;
`
export const TicketName = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;    
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #A0B0B9;
`

export const TicketText = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #4A4A4A;

`

