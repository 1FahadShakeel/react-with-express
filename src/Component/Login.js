import React from "react";
// import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// login
const LoginForm = () => {



  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginResponse, setLoginResponse] = useState("");
  const navigate = useNavigate();
   
  const handleClick = () => navigate('/Home');

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "password") {
      setPassword(value);
    }
    if (id === "email") {
      setEmail(value);
    }
  };
 

  const checkLoginResponse = (res) =>{



    if(res.message == 'success'){

      localStorage.setItem('token',res.token);
      handleClick();
    }
    else{
      return false;
    }

  }



  const handleSubmit = () => {

    if (!email || !password) {
      alert("Fill the empty input fields");
      return false;
    }

    const user = {
      email: email,
      password: password,
    };

    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((info) => checkLoginResponse(info));
       // resp.json()
  };

  return (
    // <section id="login">
    <div className="row">
    <div className="form mt-3">
      <h2 className="text-center">Login</h2>

      <div className="form-body">
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <button
          type="submit"
          class="btn btn-success"
          onClick={() => handleSubmit()}
        >
          Login
        </button>
        <p>
          {/* {" "} */}
          <Link to="/SignupForm">Signup Here</Link>
        </p>
      </div>
    </div>
    </div>
    // </section>
  );
};
export default LoginForm;
