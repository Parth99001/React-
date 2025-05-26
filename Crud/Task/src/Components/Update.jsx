import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
    const {id} = useParams();
    
        const [values , setValues] = useState({
            name:"",
            email:""
        });
    useEffect(()=>{
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setValues(res.data)
    ).catch(err => console.log(err)
)
    },[])
    const navigate = useNavigate();
    const handleUpdate= (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`,values)
        .then(res => {
            console.log(res);
            navigate('/')
        }).catch(err => console.log(err)
        )
    }
  return (
 <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h2>Update User</h2>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <form onSubmit={handleUpdate}>
  <div className="mb-3">
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input value={values.name} type="text" onChange={e => setValues({...values,name:e.target.value})} className="form-control" id="exampleInputPassword1"/>
  </div>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={values.email} className="form-control" onChange={e => setValues({...values,email:e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button type="submit" className="btn btn-primary">update</button>
  <Link to='/'><button  className="btn btn-primary ms-3">Back</button></Link>
</form>
        </div>
    </div>
  )
}

export default Update