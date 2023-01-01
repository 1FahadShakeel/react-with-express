import { NavLink } from "react-router-dom";
import SignupForm from "./Signup-new";
import LoginForm from "./Login";
const NAV = () => {
  return (
    <div>
      {/* <nav> */}
        <NavLink
          to="/SignupForm"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          Signup
        </NavLink>
        <nav>
        <NavLink
          to="/LoginForm"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          LoginForm
        </NavLink>
      </nav>
      </div>
  );
};
export default NAV;
