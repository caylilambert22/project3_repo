import React, { useState } from 'react';

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
  <form onSubmit = {handleSubmit}>
    <div className="mb-3">
      <label className="form-label">List To Do</label>
      <input type="text" name="list" className="form-control" value={formData.list} onChange={handleChange} required />
    </div>

    <div className="mb-3">
      <label className="form-label">Category</label>
      <input type="text" name="category" className="form-control" value={formData.category} onChange={handleChange} required />
    </div>

    <div className="mb-3 form-check">
      <label className="form-label">Completed</label>
      <input type="checkbox" className="form-check-input" checked={formData.status} onChange={handleStatusChange} />
    </div>
    <button type="submit" className="btn btn-primary" onChange={handleSubmit}>Save</button>
  </form>
)

}


export default ToDos_form;
