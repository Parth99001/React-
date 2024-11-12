import React, { useState } from "react";

function Counters() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container p-5 text-center">
        <h1>Counter</h1>
        <button className="btn btn-danger me-3" onClick={() => setCount(count - 1)}>
          Minus
        </button>
        <button className="btn btn-primary my-4">Count : {count}</button>
        <button className="btn btn-success ms-3" onClick={() => setCount(count + 1)}>
          Add
        </button>
      </div>
    </>
  );
}

export default Counters;