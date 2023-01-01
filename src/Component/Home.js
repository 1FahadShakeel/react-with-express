import { useEffect, useState,Link } from "react";
import jwt_decode from "jwt-decode";
 

 const Home=()=>{

  const [usersList,setUsersList] = useState([]);
  const [name,setName] = useState([]);

useEffect(() => {

  let token  = localStorage.getItem("token");

  let decoded = jwt_decode(token);

  console.log(decoded);

  setName(decoded.name);
  

  fetch('http://localhost:5000/user',{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token" : token
    },
  }).then(resp => resp.json()).then(info => setUsersList(info) );
},[]);

const logoutHandler = () =>{

  fetch("http://localhost:5000/user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((info) => console.log(info));
  
}


  return(
  <div className="card p-3">
    <h1>Welcome Back <span className="text-danger"> {name} </span></h1>
    <button className="btn btn-danger col-6" onClick={logoutHandler}> Logout</button>


    <br/>

    <table className="table table-bordered">
      <thead>
        <tr className="text-center text-danger">
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Role</th>
          <th>CNIC</th>
          <th>Designation</th>
          <th>Phone</th>
        </tr>

      </thead>
      <tbody>
      {  usersList.map( user => (
          <tr key={user._id} className="lead">
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.role}</td>
            <td>{user.CNIC}</td>
            <td>{user.designation}</td>
            <td>{user.phone}</td>
          </tr>
        ))
 }
      </tbody>
    </table>
  </div>  
  
  )

 } ; export default Home;