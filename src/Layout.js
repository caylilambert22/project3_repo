import React from 'react';
import { Link } from 'react-router-dom';

function Layout({children})
{
  return (
    <div className='container mt-4'>
      <h3 className='text-center mb-4'>My To Do List</h3>
      <nav>
        <Link className='btn btn-primary me-2' to="/">To Do</Link>
        <Link className='btn btn-primary me-2' to="/add">Add a task</Link>
        <Link className='btn btn-primary me-2' to="/contacts">Contacts</Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout;