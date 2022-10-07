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
        <Link to ="/" className="navbar-brand">
          <img src={hattiLogo} className="navbar-logo" width="70px" alt="logo"/>
        </Link>
        <h3 className="navbar-header">Sales Dashboard </h3>
        <button className="btn-log-out-container" onClick={logout}>
          <div className="btn-log-out">
            <FaLock/>
          </div>
          <p className="btn-log-out-text">Logout</p>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
