const SignInForm = () => {
  return (
    <form className="login-form">
      <div className="mb-3">
        <input
          placeholder="Email adress"
          class="form-control"
          type="email"
          name="email"
          required
          id="email">
        </input>
      </div>
      <div className="mb-4">
        <input
          placeholder="Password"
          class="form-control"
          type="password"
          name="password"
          required
          id="password">
        </input>
      </div>
      {/* <p>Validation</p> */}
      <button type="submit" class="btn btn-light">Connexion</button>
    </form>
  );
}

export default SignInForm;
