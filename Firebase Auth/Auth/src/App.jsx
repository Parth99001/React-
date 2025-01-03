import React, { useState } from "react";
import { auth, provider } from "./cnfig/Firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import Home from "./components/Home";

const App = () => {
  const [data, setData] = useState({});
  function GoogleAuth() {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        setData(res.user);
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        alert("Authentication failed. Please try again.");
      });
  }

  function handleOut() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        setData('')
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
    {!data?<button onClick={GoogleAuth} >Hello</button>:<Home handleOut={handleOut} user={data}/>}
  </div>
  );
};

export default App;
