import React, { Component } from 'react';
import  { CategoryConsumer } from './../context/CategoryContext';

import  { EventsConsumer } from './../context/EventsContext';

class Form extends Component{

    state = { 
        name: '',
        category: ''
    }

    getDataEvents = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }
    
    render() { 
        return ( 
            <EventsConsumer>
                {(value) => {
                    
                    return (
                        <form 
                            action=""
                            onSubmit={(e) =>{
                                e.preventDefault();
                                value.getEvents(this.state)
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por Nombre o Categoria
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input 
                                        name="name"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de Evento o Ciudad"
                                        onChange={this.getDataEvents}
                                    />
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select 
                                        className="uk-select"
                                        name="category"
                                        onChange={this.getDataEvents}
                                    >
                                        <option value="">--Selecciona Categoria--</option>
                                        <CategoryConsumer>
                                            { (value) => { 
                                                return (
                                                    value.categories.map( (category, index) => (
                                                        <option key={index} value={category.id}
                                                        data-uk-form-select                                        >
                                                            {category.name_localized}
                                                        </option>
                                                    ))
                                                )
                                            }}
                                        </CategoryConsumer>
                                    </select>
                                </div>

                                <div>
                                    <input 
                                        type="submit"
                                        className="uk-button uk-button-danger"
                                        value="Buscar Eventos"
                                    />
                                </div>
                            </div>
                        </form>
                    )
                }}
            
            </EventsConsumer>
         );
    }
}
 
export default Form;