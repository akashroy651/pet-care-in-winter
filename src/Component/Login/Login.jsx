import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showResend, setShowResend] = useState(false);
  const emailRef = useRef();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSuccess("");
    setShowResend(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          setError("Please verify your email before login");
          setShowResend(true); // show resend button
          return; // stop login
        }

        setSuccess("Login successful!");
        setError("");
        setShowResend(false);
        console.log("Login success", result.user);
        navigate('/')

      })
      .catch((err) => {
        setError(err.message);
        setSuccess("");
        setShowResend(false);
      });
  };

  // Forget password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please enter your email first");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((err) => setError(err.message));
  };

  // Resend verification email
  const handleResendVerification = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please enter your email to resend verification");
      return;
    }

    signInWithEmailAndPassword(
      auth,
      email,
      prompt("Enter your password to resend verification")
    ) // temporarily ask password
      .then((userCredential) => {
        sendEmailVerification(userCredential.user)
          .then(() => {
            alert("Verification email resent! Please check your inbox.");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <div className="card bg-base-100 m-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                ref={emailRef}
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div onClick={handleForgetPassword}>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>

          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}

          {showResend && (
            <button
              className="btn btn-sm btn-warning mt-2"
              onClick={handleResendVerification}
            >
              Resend Verification Email
            </button>
          )}

          <p className="mt-2">
            Don't have an account? Please{" "}
            <Link to="/register" className="text-blue-400 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
