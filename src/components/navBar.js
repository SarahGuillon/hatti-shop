import { Link } from "react-router-dom";
import hattiLogo from '../images/hattiLogo.png';
import '../styles/navBar.css';
import { FaLock } from 'react-icons/fa';
// import "firebase/compat/auth";
import firebase from 'firebase/compat/app';

const NavBar = () => {

  const logout = () => {
    firebase.auth().signOut();
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
