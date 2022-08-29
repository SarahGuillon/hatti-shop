import { useState } from "react";
import { auth } from "../initFirebase"
import { signInWithEmailAndPassword } from "firebase/auth";


const SignInForm = () => {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');



  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, mail, password);
      console.log(user.user.email);
      console.log(auth.currentUser.email);
    } catch(error) { console.log(error) }
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
      {/* <p>Validation</p> */}
      <div>
        <button onClick={login}> Login </button>
      </div>
    </div>
  );
}

export default SignInForm;
