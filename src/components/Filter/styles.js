import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 755px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    @media ( max-width: 375px){
        max-width: 375px;
        grid-template-columns: none;
        grid-template-rows: 252px 282px;
        justify-content: center;
    }
`
export const TicketWrapper = styled.div`
    width: 502px;
    @media ( max-width: 375px){
        max-width: 282px;
    }
`

export const FilterContainer = styled.div`
    max-width: 232px;
    height: 252px;
    font-family: 'Open Sans', sans-serif;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    @media ( max-width: 375px){
        max-width: 282px;
    }
`
export const FilterTitle = styled.h1`
    margin: 0;
    padding: 20px 20px 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #4A4A4A;
`

export const FilterCheckBox = styled.input.attrs( { type: 'checkbox'} )`
    width: 20px;
    height: 20px;
`

export const FilterLabel = styled.label`
    display: flex;
    align-items: center; 
    font-size: 13px;
    height: 40px; 
    padding: 0 0 0 16px;
    &:hover {
        cursor: pointer;
        background: #F1FCFF;
    }
`