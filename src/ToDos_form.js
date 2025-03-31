import React, { useState } from 'react';
import './App.css';

function ToDos_form({ initialData, onSubmit })
{
  const [formData, setFormData] = useState(initialData)

function handleChange(event)
{
  setFormData({...formData, [event.target.name] : event.target.value})
};

function handleSubmit(event) {
  event.preventDefault();
  onSubmit(formData);
};

function handleStatusChange() {
  setFormData({...formData, status: !formData.status})
};


return (
  <div className="form-group">
  <form onSubmit = {handleSubmit}>
    <div className="mb-3">
      <label className="form-label">List To Do</label>
      <input type="text" name="list" className="form-control" value={formData.list} onChange={handleChange} required />
    </div>

    <div className = "mb-3">
      <label className="form-category">Pick a category</label>
      <select className='form-select' name='category' value={formData.category} onChange={handleChange} required>
        <option value = {'All'}>All</option>
        <option value = {'Morning'}>Morning</option>
        <option value = {'Noon'}>Noon</option>
        <option value = {'Night'}>Night</option>
      </select>
    </div>

    <button type="submit" className="save-button" onChange={handleSubmit}>Save</button>
  </form>
  </div>
)

}


export default ToDos_form;
