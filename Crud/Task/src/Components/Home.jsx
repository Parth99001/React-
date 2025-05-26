import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
const navigate = useNavigate();
const handleDelete = (id)=>
  {

        axios.delete('http://localhost:3000/users/'+id)
        .then(res => {
            location.reload();
            navigate('/')
        }).catch(err => console.log(err)
        )
    
  }
useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h2>List Of Users</h2>

      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className="mb-3 text-end">
          <Link to="/create" className='btn btn-dark'>Add ++</Link>
        </div>

        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <Link to={`/update/${d.id}`} className='btn btn-primary btn-sm me-2'>Edit</Link>
                  <button onClick={e => handleDelete(d.id)}  className='btn btn-danger btn-sm me-2'>Delete</button>
                  <Link to={`/read/${d.id}`} className='btn btn-secondary btn-sm'>Read</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default Home;
