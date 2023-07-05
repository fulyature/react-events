import React, { useState } from "react";

function Example() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name is ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Name: {name}</p>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}

export default Example;
