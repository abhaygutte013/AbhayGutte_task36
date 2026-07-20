import { useState } from "react";
import API from "/src/api.js";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users", {
        name,
        email,
      });
      alert("User Added Successfully");
      setName("");
      setEmail("");
    } catch (error) {
      console.log(error);
      alert("Error Adding User");
    }
  };

  return (
    <div className="card">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
export default UserForm;