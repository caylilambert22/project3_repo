import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Layout from './Layout.js';
import Listtodos from './Listtodos.js';
import Addtodos from './Addtodo.js';
import Edittodo from './Edittodo.js';
import Contact from './Contact.js';

import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  items: [
      {id: 1, title: "Python Class", description: "Have to take a python class tomorrow", status: false},
      {id: 2, title: "Python Class thursday", description: "Have to take a python class tomorrow", status: false}
  ]
};

// 🔥 Reducer - Only manages state, doesn't handle methods directly
const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'SET_ITEMS':
          return { ...state, items: action.payload };
      default:
          return state;
  }
};
// 🔥 Create Redux Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  const [items , setItems] = useState(store.getState().items);


  function handleAdd(newItem) {
    const updatedItems = [...items, { ...newItem, id: Date.now() }];
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  }
  

  function handleDelete(id) {
    setItems(items.filter(item=>item.id !== id));

    const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
      store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  };

  function updateItem(updated) {
    setItems(items.map((item) => item.id === updated.id ? updated : item)) 
    const updatedItems = items.map((item) => item.id === updated.id ? updated : item);
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  };

  function handleContactSubmit(formData) {
    console.log("Form Submitted", formData);
  }

  return (
    
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={ <Listtodos items={items} onDelete={handleDelete} setItems={setItems} /> } />
          <Route path="/add" element={ <Addtodos items={items} onAdd={handleAdd} /> } />
          <Route path="/edit/:id" element={ <Edittodo items={items} onUpdate={updateItem}/>} />
          <Route path="/contacts" element={ <Contact initialData={{ first: '', last: '', email: '', comments: ''}} onSubmit={handleContactSubmit} />} />
        </Routes>
      </Layout>
     </Router>
   
   
  );
}

export default App;
