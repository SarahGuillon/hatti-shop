import { useState } from "react";
import { auth } from "../initFirebase"
import { signInWithEmailAndPassword } from "firebase/auth";


const SignInForm = () => {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const login = () => {
    setErrorMessage(false);
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        console.log(user);
      // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrorMessage(true);
      });
  }



  return (
    <div className="login-form">
      <div className="mb-3">
        <input
          placeholder="E-mail Address"
          className="form-control"
          type="email"
          name="email"
          required
          id="email"
          value={mail}
          onChange={(event)=>setMail(event.target.value)} >
        </input>
      </div>
      <div className="mb-4">
        <input
          placeholder="Password"
          className="form-control"
          type="password"
          name="password"
          required
          id="password"
          value={password}
          onChange={(event)=>setPassword(event.target.value)}>
        </input>
      </div>
      <div>
        <button onClick={login}> Login </button>
      </div>
      { errorMessage &&
      <div className="error-message">
        <p>The email or password is incorrect</p>
      </div> }
    </div>
  );
}

export default SignInForm;
