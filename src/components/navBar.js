import { Link } from "react-router-dom";
import hattiLogo from '../images/hattiLogo.png';
import '../styles/navBar.css';

const NavBar = () => {
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <ul className="nav">
          <li class="nav-item">
            <Link to ="/" class="nav-link " aria-current="page" >Home</Link>
          </li>
        </ul>
        <Link to ="/" className="navbar-brand display-1">
          <img src={hattiLogo} className="navbar-logo me-3" width="70px" alt="logo"/>
          Shop management
        </Link>
        <button class="btn btn-outline-light">
          <Link to ="/" class="nav-link " aria-current="page" >Log out</Link>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
