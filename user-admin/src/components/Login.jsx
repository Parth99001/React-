// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   function insert(event) {
//     event.preventDefault();

//     if (!email || !password) {
//       alert("Please fill in both email and password.");
//       return;
//     }

//     let obj = { email, password };
//     console.log(obj);

//     axios.get(`http://localhost:3000/user?email=${email}`)
//       .then((response) => {
//         if (response.data.length > 0) {
//           const user = response.data[0]; 
//           if (user.password === password) {
//             console.log("Login successful", user);
//             setEmail("");
//             setPassword("");
//             navigate("/Home"); 
//           } else {
//             alert("Incorrect password. Please try again.");
//           }
//         } else {
//           const register = window.confirm("User not found. Do you want to register?");
//           if (register) {
//             registerUser(obj);
//           } else {
//             alert("Please sign up to continue.");
//           }
//         }
//       })
//       .catch((error) => {
//         console.error('Error during login check:', error);
//         alert('Login failed. Please try again later.');
//       });
//   }

//   function registerUser(userData) {
//     axios.post('http://localhost:3000/user', userData)
//       .then((response) => {
//         console.log('User registered successfully', response);
//         alert("Registration successful. You can now log in.");
        
//         navigate("/Home"); 
//       })
//       .catch((error) => {
//         console.error('Error during registration:', error);
//         alert('Registration failed. Please try again later.');
//       });
//   }

//   return (
//     <>
//       <div className="container mx-auto">
//         <section className="vh-100">
//           <div className="container-fluid h-custom">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-md-9 col-lg-6 col-xl-5">
//                 <img
//                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//                   className="img-fluid"
//                   alt="Sample image"
//                 />
//               </div>
//               <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//                 <form onSubmit={insert}>
//                   <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//                     <p className="lead fw-normal mb-0 me-3">Sign in with us</p> <br /><br />
//                   </div>
//                   {/* Email input */}
//                   <div data-mdb-input-init="" className="form-outline mb-4">
//                     <input
//                       type="email"
//                       id="form3Example3"
//                       className="form-control form-control-lg"
//                       required
//                       placeholder="Enter a valid email address"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <label className="form-label" htmlFor="form3Example3">
//                       Email address
//                     </label>
//                   </div>
//                   {/* Password input */}
//                   <div data-mdb-input-init="" className="form-outline mb-3">
//                     <input
//                       type="password"
//                       id="form3Example4"
//                       className="form-control form-control-lg"
//                       placeholder="Enter password" required
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <label className="form-label" htmlFor="form3Example4">
//                       Password
//                     </label>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <a href="#!" className="text-body">
//                       Forgot password?
//                     </a>
//                   </div>
//                   <div className="text-center text-lg-start mt-4 pt-2">
//                     <button
//                       type="submit"
//                       data-mdb-button-init=""
//                       data-mdb-ripple-init=""
//                       className="btn btn-primary btn-lg"
//                       style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
//                     >
//                       Login
//                     </button>
//                     <p className="small fw-bold mt-2 pt-1 mb-0">
//                       Don't have an account?{" "}
//                       <a href="#!" className="link-danger">
//                         Register
//                       </a>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Login;


import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function insert(event) {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    let obj = { email, password };
    console.log(obj);

    axios.get(`http://localhost:3000/user?email=${email}`)
      .then((response) => {
        if (response.data.length > 0) {
          const user = response.data[0]; 
          if (user.password === password) {
            console.log("Login successful", user);

            
            if (email === "admin@gmail.com" && password === "123456") {
              navigate("/Admin"); 
            } else {
              navigate("/Home"); 
            }

            setEmail("");
            setPassword("");
          } else {
            alert("Incorrect password. Please try again.");
          }
        } else {
          const register = window.confirm("User not found. Do you want to register?");
          if (register) {
            registerUser(obj);
          } else {
            alert("Please sign up to continue.");
          }
        }
      })
      .catch((error) => {
        console.error('Error during login check:', error);
        alert('Login failed. Please try again later.');
      });
  }

  function registerUser(userData) {
    axios.post('http://localhost:3000/user', userData)
      .then((response) => {
        console.log('User registered successfully', response);
        alert("Registration successful. You can now log in.");
        navigate("/Home"); 
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again later.');
      });
  }

  return (
    <>
      <div className="container mx-auto">
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={insert}>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with us</p> <br /><br />
                  </div>
                  {/* Email input */}
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      required
                      placeholder="Enter a valid email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>
                  {/* Password input */}
                  <div data-mdb-input-init="" className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password" required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
