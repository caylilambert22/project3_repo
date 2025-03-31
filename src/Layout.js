import React from 'react';
import { Link } from 'react-router-dom';

function Layout({children})
{
  return (
    <div className='center-here'>
    <div className='container mt-2 nav-container'>
      <h3 className='text-center mb-4'>My To Do List</h3>
      <nav>
        <Link className='action-button' to="/">To Do</Link>
        <Link className='action-button' to="/add">Add a task</Link>
        <Link className='action-button' to="/contacts">Contacts</Link>
      </nav>
      <div className="line-here"></div>
      {children}
      <div className="line-here"></div>
    </div>
    
    </div>
  )
}

export default Layout;