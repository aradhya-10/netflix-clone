import { useRef, useState } from "react";
import "./login.scss";

const Login = () => {
	// const [email, setEmail] = useState("")
	// const [pswd, setPswd] = useState("")
	// const mailRef = useRef()
	// const passRef = useRef()

	// const handleStart = () =>{
	// 	setEmail(mailRef.current.value);
	// }
	
	// const handleFinish = () =>{
	// 	setPswd(passRef.current.value);
	// }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
		<form>
			<h1>Sign In</h1>
			<div className="wrapper">
			<input type="email" placeholder="email address"/>
			<input type="password" placeholder="password"/>
			<button className="loginButton">Sign In</button>
			</div>
			<span>New to Netflix? <b>Sign Up Now.</b></span>
			<small>
				This page is protected by Google reCAPTCHA to ensure you're not a
				bot. <b>Learn more</b>.
			</small>
		</form>
      </div>
    </div>
  );
};

export default Login;
