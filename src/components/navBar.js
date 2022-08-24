import { Link } from "react-router-dom";
import hattiLogo from '../images/hattiLogo.png';
import '../styles/navBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <Link to ="/" className="nav-link " aria-current="page" >Home</Link>
          </li>
        </ul>
        <Link to ="/" className="navbar-brand display-1">
          <img src={hattiLogo} className="navbar-logo me-3" width="70px" alt="logo"/>
          Shop management
        </Link>
        <button className="btn btn-outline-light">
          <Link to ="/" className="nav-link " aria-current="page" >Log out</Link>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
