import SignInForm from '../components/signInForm';
import hattiLogo from '../images/hattiLogo.png';
import '../styles/loginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <img src={hattiLogo} className="login-page-logo" alt="logo" />
      <SignInForm/>
    </div>
  );
}

export default LoginPage;
