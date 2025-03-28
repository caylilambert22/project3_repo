import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToDos_form from './ToDos_form';

function Addtodos({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(newItem) {
    onAdd(newItem);
    navigate("/");
  }

  return <ToDos_form initialData={{ list:"", category: "", status: false}} onSubmit={handleAdd} />;
}

export default Addtodos;