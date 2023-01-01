import React from "react";
import { Link, useNavigate   } from "react-router-dom";

import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [cnic, setCNIC] = useState("");
  const [role, setRole] = useState("");


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
   
    if (id === "password") {
      setPassword(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "designation") {
      setDesignation(value);
    }
    if (id === "role") {
      setRole(value);
    }
    if (id === "cnic") {
      setCNIC(value);
    }
  };
  // navigation to other page.
  const navigate = useNavigate();
  const handleClick = () => navigate('/Home');


  const handleSubmit = () => {
    // console.log(name, password, email, DOB, gender);

    if(!name || !email || !password || !cnic || !role || !designation || !phone) { alert('Fill the empty input fields');  return false}; 
 
    const user = {
        name : name,
        email : email,
        password : password,
        designation : designation,
        phone: phone,
        role: role,
        CNIC: cnic,

    }

    fetch('http://localhost:5000/user',{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(info => console.log(info));
  };

  return (
    <div className="form mt-3">
      <h2 className="text-center">Signup Form</h2>

      <div className="form-body">
        <div className="username">
          <label className="form__label">Name </label>

          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
            placeholder="First Name"
          />
        </div>
       
        <div className="designation">
          <label className="form__label">Designation </label>

          <input
            className="form-control"
            type="text"
            id="designation"
            name="designation"
            value={designation}
            onChange={(e) => handleInputChange(e)}
            placeholder="Mali"
          />
        </div>

        <div className="phone">
          <label className="form__label">Phone </label>

          <input
            className="form-control"
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => handleInputChange(e)}
            placeholder="03006544123"
          />
        </div>
        <div className="cnic">
          <label className="form__label">CNIC </label>

          <input
            className="form-control"
            type="text"
            id="cnic"
            name="cnic"
            value={cnic}
            onChange={(e) => handleInputChange(e)}
            placeholder="3520251618997"
          />
        </div>
        <div className="role">
          <label className="form__label">Role </label>

          <input
            className="form-control"
            type="text"
            id="role"
            name="role"
            value={role}
            onChange={(e) => handleInputChange(e)}
            placeholder="Owner"
          />
        </div>

        <div className="email">
          <label className="form__label">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label">Password </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
     
        
      </div>
      <div class="footer">
        <button
          onClick={() => handleSubmit()}
          type="submit"
          class="btn  btn-success"
        >
          Register
        </button>

        <p>
          {" "}
          <Link to="/Login">Login here</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
