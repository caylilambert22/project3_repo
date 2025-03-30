import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Listtodos({items, onDelete, setItems}) {
  const [filterStatus, setfilterStatus] = useState('All');

  const filteredItems = items.filter(item => {
    return ((filterStatus == 'All') || (filterStatus == 'Complete' && item.status) || (filterStatus == 'Incomplete' && !item.status))
  });


  const handleCheckboxChange = (id) => {
    setItems(prevItems => prevItems.map(item=>item.id === id ? {...item, completed : !item.completed} : item ))
  }



  return (
    <>
    <div>
      <select className='form-select' onChange={(e)=>setfilterStatus(e.target.value)}>
        <option value = {'All'}>All</option>
        <option value = {'Complete'}>Complete</option>
        <option value = {'Incomplete'}>Incomplete</option>
      </select>
    </div>

    <div className='table-responsive mt-4'>
      <table className='table table-bordered'>
        <thead className='table-dark'>
          <tr>
            <th>Completed</th>
            <th>To Do</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>
                {item.completed} <input type="checkbox" checked={item.completed} onChange={()=> handleCheckboxChange(item.id)}></input></td>
              <td style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.list}</td>
              <td style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.category}</td>
              <td style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.status === true ? 'Completed' : 'Incomplete'}</td>
              <td>
                <Link className='btn btn-warning btn-sm me-2' to={`/edit/${item.id}`}>Edit</Link>
                <button className='btn btn-danger btn-sm' onClick={()=>onDelete(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Listtodos;