import { useState } from "react";

import Logo1 from "../../assets/logo/Logo1.png";

import Logo2 from "../../assets/logo/Logo2.png";

import "./SignInCredentials.css";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

import LockIcon from "@mui/icons-material/Lock";

import { Link , useNavigate } from "react-router-dom";

export default function SignInCredentials() {

  const navigate = useNavigate();

  /* Verify if the user is authenticated */
  const [loginFailed, setLoginFailed] = useState(false)  

  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setSignInDetails({ ...signInDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      signInDetails.email == "sharyar.anwer0009@gmail.com" &&
      signInDetails.password == "qwerty"
    ) {
      alert("Sign In Successful");
      navigate("/messages");
    } else {
      setLoginFailed(true)
    }
  };

  return (
    <div className="sign-in-credentials-parent">
      <div className="sign-in-credentials-logo-one">
        <img src={Logo1} />
      </div>

      <div className="sign-in-credentials-input-parent">
        <div className="sign-in-credentials-input-background">
          <div className="sign-in-credentials-logo-two">
            <img src={Logo2} />
          </div>

          <div className="sign-in-credentials-start-new-journey">
            <h1>Welcome Back</h1>
          </div>

          <div className="sign-in-credentials-already-have-an-account">
            <h1>Don't Have An Account?</h1>

            <Link to="/">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="sign-in-credentials-input">
          <h1>Sign in to chat</h1>

          <div className="sign-in-credentials-email">
            <MailOutlineIcon />
            <input
              className="sign-in-credentials-email-input"
              placeholder="Email"
              name="email"
              onChange={handleInput}
              required={true}
            />
          </div>

          <div className="sign-in-credentials-password">
            <LockIcon />
            <input
              className="sign-in-credentials-password-input"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              required={true}
            />
          </div>

          {loginFailed && <p className="incorrect-email-password">Incorrect email or password</p>}

          <div className="sign-in-credentials-sign-in">
            <Link to="/">
              <h6>Don't have an account? Sign Up</h6>
            </Link>
          </div>

          <div className="sign-in-credentials-button">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
