import { Link } from "react-router-dom";
import hattiLogo from '../images/hattiLogo.png';
import '../styles/navBar.css';
import { FaLock } from 'react-icons/fa';
import { signOut } from "firebase/auth";
import { auth } from "../initFirebase";

const NavBar = () => {

  const logout = async () => {
      await signOut(auth);
  }

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to ="/" className="navbar-brand display-1">
          <img src={hattiLogo} className="navbar-logo me-3" width="70px" alt="logo"/>
        </Link>
        <button className="btn-log-out" onClick={logout}>
          <FaLock/> Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
