import React from 'react'
import Ticket from '../Ticket'
import { FilterContainer, FilterCheckBox, FilterLabel, Wrapper, FilterTitle, TicketWrapper} from './styles'
import { data } from '../../data'

function Filter() {
    const [tickets, setTickets] = React.useState(data)
    const [isChecked, setIsChecked] = React.useState( { all: true, zero: true, one: true, two: true, three: true} )

    console.log(isChecked)
    const allHandler = (value) => {

        switch (value) {
            case "ALL":
                if(!isChecked.all){
                    setIsChecked({ all: true, zero: true, one: true, two: true, three: true})
                } 
                else {
                    setIsChecked({ all: false, zero: false, one: false, two: false, three: false})
                }
                break;

            case "ZERO":
                if(isChecked.all){
                    if(isChecked.zero){
                        setIsChecked( {...isChecked, zero: !isChecked.zero, all: !isChecked.zero || !isChecked.one || !isChecked.two || !isChecked.three ? true : false} )
                    }
                } 
                else if(!isChecked.all){
                    console.log('AMAN')
                    if(!isChecked.zero || isChecked.zero){
                        setIsChecked( {...isChecked, zero: !isChecked.zero, all: isChecked.one && isChecked.two && isChecked.three ? true : false} )
                    }
                }
                else{
                    setIsChecked( {...isChecked, zero: !isChecked.zero, all: isChecked.one && isChecked.two && isChecked.three ? true : false} )
                } 
                break;
            
            case "ONE":
                if(isChecked.all){
                    if(isChecked.one){
                        setIsChecked( {...isChecked, one: !isChecked.one, all: !isChecked.zero || !isChecked.one || !isChecked.two || !isChecked.three ? true : false} )
                    }
                } 
                else if(!isChecked.all){
                    if(!isChecked.one || isChecked.one){
                        setIsChecked( {...isChecked, one: !isChecked.one, all: isChecked.zero && isChecked.two && isChecked.three ? true : false} )
                    }
                }
                else{
                    setIsChecked( {...isChecked, one: !isChecked.one, all: isChecked.zero && isChecked.two && isChecked.three ? true : false} )
                } 
                break;

            case "TWO":
                if(isChecked.all){
                    if(isChecked.two){
                        setIsChecked( {...isChecked, two: !isChecked.one, all: !isChecked.zero || !isChecked.one || !isChecked.two || !isChecked.three ? true : false} )
                    }
                } 
                else if(!isChecked.all){
                    if(!isChecked.two || isChecked.two){
                        setIsChecked( {...isChecked, two: !isChecked.two, all: isChecked.zero && isChecked.one && isChecked.three ? true : false} )
                    }
                }
                else{
                    setIsChecked( {...isChecked, two: !isChecked.two, all: isChecked.zero && isChecked.one && isChecked.three ? true : false} )
                } 
                break;

            case "THREE":
                if(isChecked.all){
                    if(isChecked.three){
                        setIsChecked( {...isChecked, three: !isChecked.three, all: !isChecked.zero || !isChecked.one || !isChecked.two || !isChecked.three ? true : false} )
                    }
                } 
                else if(!isChecked.all){
                    if(!isChecked.three || isChecked.three){
                        setIsChecked( {...isChecked, three: !isChecked.three, all: isChecked.zero && isChecked.one && isChecked.two ? true : false} )
                    }
                }
                else{
                    setIsChecked( {...isChecked, three: !isChecked.three, all: isChecked.zero && isChecked.one && isChecked.two ? true : false} )
                } 
                break;     
                
            default:
                break;
        }
    }
    
    const filteredTickets = (ticket) => {
        const lol = ticket.filter( element => {
            if( isChecked.all) return true;
            if( isChecked.zero && element.transfers.length === 0) return true;
            if( isChecked.two && element.transfers.length === 2) return true;
            if( isChecked.one && element.transfers.length === 1) return true;
            if( isChecked.three && element.transfers.length === 3) return true;
        })

        return lol;
    }

    return (
        <Wrapper>
            <FilterContainer>
                <FilterTitle>
                    Количество пересадок
                </FilterTitle>
                <FilterLabel>
                    <FilterCheckBox 
                        onChange = { () => allHandler("ALL") } 
                        checked = {isChecked.all }
                    />
                    <span style={{ marginLeft: 10 }}>Все</span>
                </FilterLabel>
                <FilterLabel>
                    <FilterCheckBox
                        onChange = { () => allHandler("ZERO") }
                        checked = { isChecked.zero }
                    />
                    <span style={{ marginLeft: 10 }}>Без пересадок</span>
                </FilterLabel>
                <FilterLabel>
                    <FilterCheckBox
                        onChange = { () => allHandler("ONE") }
                        checked = { isChecked.one }
                    />
                    <span style={{ marginLeft: 10 }}>1 пересадка</span>
                </FilterLabel>
                <FilterLabel>
                    <FilterCheckBox
                        onChange = { () => allHandler("TWO") }
                        checked = { isChecked.two }
                    />
                    <span style={{ marginLeft: 10 }}>2 пересадки</span>
                </FilterLabel>
                <FilterLabel>
                    <FilterCheckBox
                        onChange = { () => allHandler("THREE") }
                        checked = { isChecked.three }
                    />
                    <span style={{ marginLeft: 10 }}>3 пересадки</span>
                </FilterLabel>
            </FilterContainer>
            <TicketWrapper>
                {
                    filteredTickets(tickets).length === 0 ? 
                    <p style = {{ textAlign: 'center', color: '#4a4a4a'}}>Билеты не найдены</p> 
                    : filteredTickets(tickets).map( (element) => {
                        return(
                            <Ticket 
                                key = {element.id}
                                price = {element.price}
                                name = {element.name}
                                wayMinutes = {element.wayMinutes}
                                transfers = {element.transfers}
                            />
                        )
                    })

                }
            </TicketWrapper>
        </Wrapper>
    )
}

export default Filter
