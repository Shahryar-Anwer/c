import { useState } from "react";

import Logo1 from "../../assets/logo/Logo1.png";

import Logo2 from "../../assets/logo/Logo2.png";

import "./SignUpCredentials.css";

import PersonIcon from "@mui/icons-material/Person";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

import LockIcon from "@mui/icons-material/Lock";

import { Link } from "react-router-dom";

export default function SignUpCredentials() {

  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signUpDetails);
  };

  return (
    <div className="sign-up-credentials-parent">
      <div className="sign-up-credentials-logo-one">
        <img src={Logo1} />
      </div>

      <div className="sign-up-credentials-input-parent">

        <div className="sign-up-credentials-input-background">
          <div className="sign-up-credentials-logo-two">
            <img src={Logo2} />
          </div>

          <div className="sign-up-credentials-start-new-journey">
            <h1>Start New Journey!</h1>
          </div>

          <div className="sign-up-credentials-already-have-an-account">
            <h1>Already Have An Account?</h1>

            <Link to="/sign-in">
              <button>Sign In</button>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="sign-up-credentials-input">
          <h1>Create Account</h1>
          <div className="sign-up-credentials-name">
            <PersonIcon />
            <input
              className="sign-up-credentials-name-input"
              placeholder="Name"
              name="name"
              onChange={handleInput}
              required={true}
            />
          </div>

          <div className="sign-up-credentials-email">
            <MailOutlineIcon />
            <input
              className="sign-up-credentials-email-input"
              placeholder="Email"
              name="email"
              onChange={handleInput}
              required={true}
            />
          </div>

          <div className="sign-up-credentials-password">
            <LockIcon />
            <input
              className="sign-up-credentials-password-input"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              required={true}
            />
          </div>

          <div className="sign-up-credentials-sign-in">
            <Link to="/sign-in">
              <h6>Already have an account? Sign In</h6>
            </Link>
          </div>

          <div className="sign-up-credentials-button">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        
      </div>
    </div>
  );
}
