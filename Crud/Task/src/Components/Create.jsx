import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [data , setData] = useState({
        name:"",
        email:""
    });
const navigate= useNavigate();
    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/users',data)
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err)
        );
    }
   return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h2>Create User</h2>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" onChange={e => setData({...data,name:e.target.value})} className="form-control" id="exampleInputPassword1"/>
  </div>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={e => setData({...data,email:e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/'><button  className="btn btn-primary ms-3">Back</button></Link>
</form>
        </div>
    </div>
  )
}

export default Create