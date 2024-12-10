import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let valid = true;
    let newErrors = {
      name: '',
      email: ''
    };

    if (formData.name === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (formData.email === '') {
      newErrors.email = 'Email is required';
      valid = false;
    } 
    if(formData.name !==''&& formData.email !==''){
        newErrors.email = 'Submited';
        valid = true
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
    }
  };

  return (
        <form onSubmit={handleSubmit} style={{border:'1px solid black', width: '13%', padding:'10px', margin:'auto', }}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div> <br />

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        {errors.email && <p style={{ color: 'black' }}>{errors.email}</p>}
      </div><br />

      <button style={{backgroundColor: 'blue', color:'white', borderRadius:'10px'}} type="submit">Submit</button>
    </form>
  );
};

export default Form;
