
import React from 'react';
import ReactDOM from "react-dom";
import { useFormik,Field } from 'formik';

const SignupForm1 = () => {


 
 
  const formik = useFormik({
    initialValues: {
        fullName:'', email: '',password:'',dateOfBirth:'',gender:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

    <>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="fullName">Enter your name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
     <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
       <label htmlFor="password">Enter Your password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
       <label htmlFor="dateOfBirth">Enter Date of Birth</label>
      <input
        id="dateOfBirth"
        name="dateOfBirth"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.dateOfBirth}
      />
      <label htmlFor="gender">Gender</label>
      <Field name="gender" component="select">
         <option value="male">male</option>
       <option value="female">female</option>
      
     </Field>
      
      <button type="submit">Submit</button>
    </form>
   </>
 

};
export default SignupForm1;



{/* <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>       */}