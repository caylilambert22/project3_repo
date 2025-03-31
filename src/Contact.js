import React, { useState } from 'react';

function Contact({ initialData, onSubmit })
{
  const [contactFormData, setFormData] = useState(initialData);
  const [popUp, setPopUp] = useState(false);

function handleContactSubmit(event) {
  event.preventDefault();
  onSubmit(contactFormData);

  setPopUp(true);
  setFormData({first: '', last: '', email:'', comments:''});

  setTimeout(() => setPopUp(false), 3000);
};

function handleContactChange(event) {
  setFormData({...contactFormData, [event.target.name]: event.target.value});
}


return (
  <div>
  {popUp && (
    <div className="custom-popup">
      <p>Thanks for submitting!</p>
    </div>
  )}

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

    
    <button type="submit" className="save-button">Submit</button>
  </form>
  </div>
)

}

export default Contact;