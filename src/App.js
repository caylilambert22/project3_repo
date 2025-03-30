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




function App() {

  const [items, setItems] = useState([
    {id: 1, title: "Oranges", description: "test data"}
  ])

  function handleAdd(newItem) {
    setItems([...items, {...newItem, id: Date.now()}]);
  };
  function handleDelete(id) {
    setItems(items.filter(item=>item.id !== id));
  };

  function updateItem(updated) {
    setItems(items.map((item) => item.id === updated.id ? updated : item)) 
  };

  return (
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={ <Listtodos items={items} onDelete={handleDelete} setItems={setItems} /> } />
          <Route path="/add" element={ <Addtodos items={items} onAdd={handleAdd} /> } />
          <Route path="/edit/:id" element={ <Edittodo items={items} onUpdate={updateItem}/>} />
          <Route path="/contact" element={ <Contact initialData={{ first: '', last: '', email: '', comments: ''}} onSubmit={console.log} />} />
        </Routes>
      </Layout>
     </Router>
   
  );
}

export default App;
