import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const [data ,setData]= useState([]);
    const {id} =useParams()
    useEffect(()=>{
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setData(res.data)
        ).catch(err => console.log(err)
        )
    },[])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100' >
        <h2>User Details</h2>
      <div className='w-50 rounded bg-white border shadow p-4'>
              <div className='mb-2'>
        <strong>Name: {data.name}</strong>
      </div>
            <div className='mb-2'>
        <strong>Email: {data.email}</strong>
      </div>
        <Link to='/'><button  className="btn btn-primary ms-3">Back</button></Link>
        <Link to={`/update/${id}`}><button  className="btn btn-secondary ms-3">Update</button></Link>
      </div>
    </div>
  )
}

export default Read