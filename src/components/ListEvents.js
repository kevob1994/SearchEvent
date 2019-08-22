import React from 'react';
import  { EventsConsumer } from './../context/EventsContext';
import Event from './Event'

const ListEvents = () => {
    return ( 
        
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventsConsumer>
                {(value) => {
                    console.log(value)
                    return value.events.map( (event,index) => (
                        <Event
                            key={index}
                            event={event}
                        />
                        ))
                }} 
            </EventsConsumer>
        </div>
            
         
     );
}
 
export default ListEvents;