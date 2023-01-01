import logo from "./logo.svg";
import "./App.css";
import SignupForm from "./Component/Signup-new";
import LoginForm from "./Component/Login";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Upload from "./Component/Fileupload";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="SignupForm" element={<SignupForm />} />

        <Route path="Login" element={<LoginForm />} />
        <Route path="upload" element={<Upload />} />
        <Route path="Home" element={<Home />} />
        <Route path="*" element={<LoginForm />} />
      </Routes>

      {/* <SignupForm />
     <LoginForm/> */}
    </div>
  );
}

export default App;
