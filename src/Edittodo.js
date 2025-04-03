import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ToDos_form from './ToDos_form';

function Edittodo({items, onUpdate}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const item = items.find((i) => i.id === parseInt(id))

  if(!item) return <p>To Do Not Found</p>

  function handleUpdate(updatedItem) {
    onUpdate(updatedItem)
    navigate("/");
  }

  return <ToDos_form initialData={item} onSubmit={handleUpdate} required/>

}

export default Edittodo;