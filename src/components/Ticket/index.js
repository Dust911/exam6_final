import React from 'react'
import { TicketContainer, TicketContent, TicketInfo, TicketName, TicketTitle, TicketText } from './styles'
import {splitBigNumber} from '../../utils/stringFormatter'

function Ticket( {price, name, wayMinutes, transfers} ) {
    const minutes = wayMinutes % 60; 
    const hours = new Date(wayMinutes)
    
    return (
        <TicketContainer>
            <TicketTitle>{splitBigNumber(price)} Р </TicketTitle>
            <TicketInfo>
                <TicketContent>
                    <TicketName>Авиакомпания</TicketName>
                    <TicketText>{name}</TicketText>
                </TicketContent>
                <TicketContent>
                    <TicketName>В пути</TicketName>
                    <TicketText>{hours.getHours()}ч {minutes}м</TicketText>
                </TicketContent>
                <TicketContent>
                    <TicketName>{transfers.length === 1  ? '1 пересадка' : transfers.length === 0 ? 'Пересадок нету' : `${transfers.length} пересадки`}</TicketName>
                    <TicketText>{transfers.length === 0 ? '' : transfers.join(', ')}</TicketText>
                </TicketContent>
            </TicketInfo>
        </TicketContainer>
    )
}

export default Ticket
