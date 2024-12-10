import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Home = () => {
  const [useData, setUseData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/product')
      .then((response) => {
        console.log(response); 
        setUseData(response.data); 
      })
      .catch((error) => {
        console.error("error fetching the product data:", error);
      });
  }, []); 

  return (
    <>
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

      <div className="container mt-4">
        <h2>Product List</h2>
        <div className="row">
          {useData.length > 0 ? (
            useData.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={product.imageUrl} alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
