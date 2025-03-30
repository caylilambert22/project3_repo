import React, { useState } from 'react';

function Contact({ initialData, onSubmit })
{
  const [contactFormData, setFormData] = useState(initialData)

function handleContactSubmit(event) {
  event.preventDefault();
  onSubmit(contactFormData);
};

function handleContactChange(event) {
  setFormData({...contactFormData, [event.target.name]: event.target.value});
}


return (
  <form onSubmit = {handleContactSubmit}>
    <div className="mb-3">
      <label className="form-label">First Name</label>
      <input type="text" name="first" className="form-control" value={contactFormData.first} onChange={handleContactChange} required />
    </div>

    <div className="mb-3">
      <label className="form-label">Last Name</label>
      <input type="text" name="last" className="form-control" value={contactFormData.last} onChange={handleContactChange} required />
    </div>

    <div className="mb-3">
      <label className="form-label">Email</label>
      <input type="text" name="email" className="form-control" value={contactFormData.email} onChange={handleContactChange} required />
    </div>

    <div className="mb-3">
      <label className="form-label">Comments</label>
      <input type="text" name="comments" className="form-control" value={contactFormData.comments} onChange={handleContactChange} required />
    </div>

    
    <button type="submit" className="btn btn-primary">Submit Contact</button>
  </form>
)

}

export default Contact;