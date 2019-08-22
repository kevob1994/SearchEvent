import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListEvents from './components/ListEvents';

import CategoryProvider from './context/CategoryContext';
import EventsProvider from './context/EventsContext';

function App() {
  return (
    <EventsProvider >
      <CategoryProvider>
        <Header />
        <div className="uk-container">
          <Form />
          
        <ListEvents />
        </div>
      </CategoryProvider>
    </EventsProvider>
    
  );
}

export default App;
