import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3000/user')
      .then(response => {
        setUsers(response.data);  
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/user/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error('There was an error ', error);
      });
  };

  return (
    
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Product-Page</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">
                  <Link style={{ textDecoration: 'none', color: 'black' }} to={"/"}><button style={{backgroundColor:'blue', borderRadius:'10px', color: 'white'}}>Log-Out</button></Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1>User List</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
