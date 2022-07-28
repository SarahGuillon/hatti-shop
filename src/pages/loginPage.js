import hattiLogo from '../images/hattiLogo.png';

const LoginPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hattiLogo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Log in
        </a>
      </header>
    </div>
  );
}

export default LoginPage;
