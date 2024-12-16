import React from "react";
import { Link } from "react-router"; 

const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Cart Page</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Back to Products</Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="row">
            {cart.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={product.imageUrl} alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                    <p className="card-text"><strong>Quantity:</strong> {product.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4">
          <h4>Total Price: ${calculateTotal()}</h4>
        </div>

        <Link to="/" className="btn btn-secondary mt-4">Back to Products</Link>
      </div>
    </>
  );
};

export default Cart;
