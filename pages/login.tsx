import type { NextPage } from "next";
const LoginPage: NextPage = () => {
  return (
    <div className="login-page-wrapper">
      <section className="login-box">
        <header>
          <h1>Login</h1>
        </header>

        <form>
          <div className="label-input-group">
            <label htmlFor="username">Username</label>
            {/* add value attribute later */}
            <input type="text" id="username-field" className="login-input" />
          </div>
          <div className="label-input-group">
            <label htmlFor="password">Password</label>
            {/* add value attribute later */}
            <input type="password" id="password" className="login-input" />
          </div>

          <button type="submit" className="login-btns">
            Login
          </button>

          {/* <section className="firebase-section">
            <p>Or login with:</p>
          </section> */}
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
