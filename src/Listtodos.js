import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Listtodos({items, onDelete, setItems}) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredItems = items.filter(item => {
    const CategoryMatch = filterCategory === 'All' || item.category === filterCategory;
    const StatusMatch = 
      filterStatus === 'All' || 
      (filterStatus === 'Completed' && item.completed) ||
    (filterStatus === 'Incompleted' && !item.completed)
    return CategoryMatch && StatusMatch;

    return (
      filterCategory === 'All' ||
      filterCategory === item.category )
  });


  const handleCheckboxChange = (id) => {
    setItems(prevItems => prevItems.map(item=>item.id === id ? {...item, completed : !item.completed} : item ))
  }



  return (
    <>
    <div className="input-container">
    <div>
      <select className='form-select category-filter' onChange={(e)=>setFilterCategory(e.target.value)}>
        <option value = {'All'}>All</option>
        <option value = {'Morning'}>Morning</option>
        <option value = {'Noon'}>Noon</option>
        <option value = {'Night'}>Night</option>
      </select>
    </div>

    <div>
      <select className='form-select status-filter' onChange={(e)=>setFilterStatus(e.target.value)}>
        <option value = {'All'}>All</option>
        <option value = {'Completed'}>Completed</option>
        <option value = {'Incompleted'}>Incompleted</option>
      </select>
    </div>
    </div>

    <div className='table-responsive mt-3'>
      <table className='table table-main'>
        <thead className='table-light'>
          <tr>
            <th>Completed</th>
            <th>To Do</th>
            <th>Category</th>
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