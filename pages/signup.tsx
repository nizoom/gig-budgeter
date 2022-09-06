import type { NextPage } from "next";
import Image from "next/image";
import BackBtn from "../media/backbtn.png";
const SignUp: NextPage = () => {
  return (
    <div className="login-page-wrapper">
      <section className="login-box">
        <header>
          <h1>Sign up</h1>
        </header>

        <form>
          <div className="label-input-group">
            <label htmlFor="username">Username</label>
            {/* add value attribute later */}
            <input type="text" id="username-field" className="login-input" />
          </div>
          <div className="label-input-group">
            <label htmlFor="email">Email</label>
            {/* add value attribute later */}
            <input type="email" id="email-field" className="login-input" />
          </div>
          <div className="label-input-group">
            <label htmlFor="password">Password</label>
            {/* add value attribute later */}
            <input type="password" id="password" className="login-input" />
          </div>
          <div className="label-input-group">
            <label htmlFor="cnfm-password">Confirm password</label>
            {/* add value attribute later */}
            <input type="password" id="cnfm-password" className="login-input" />
          </div>
          <div>
            <div className="signup-btns-wrapper">
              {" "}
              <button type="submit" className="login-btns">
                Create
              </button>
              <div className="back-btn">
                <Image src={BackBtn} />
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
