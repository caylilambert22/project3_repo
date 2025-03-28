import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Layout from './Layout.js';
import Listtodos from './Listtodos.js';
import Addtodos from './Addtodo.js';
import Edittodo from './Edittodo.js';




function App() {

  const [items, setItems] = useState([
    {id: 1, title: "Oranges", description: "test data"}
  ])

  function deleteItem(id) {
    setItems(items.filter((item) => item.id != id))
  };
  function addItem(item) {
    const newItem = {...item, id: Date.now()}
  };
  function updateItem(updated) {
    setItems(items.map((item) => item.id === updated.id ? updated : item)) 
  };

  return (
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={ <Listtodos items={items} onDelete={deleteItem} /> } />
          <Route path="/add" element={ <Addtodos items={items} onAdd={addItem} /> } />
          <Route path="/edit" element={ <Edittodo items={items} onUpdate={updateItem}/>} />
        </Routes>
      </Layout>
     </Router>
   
  );
}

export default App;
