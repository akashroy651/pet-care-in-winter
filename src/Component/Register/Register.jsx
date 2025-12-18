import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../../firebase/firebase.init";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    console.log("register clicked", email, password, terms, name, photo);

    const strongPasswordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!strongPasswordPattern.test(password)) {
      setError(
        "Password must be at least 6 character long, and include at least uppercase, number and one special character"
      );
      return;
    }

    // reset previous status
    setError("");
    setSuccess(false);
    // ❗ FIX NOTE = reset must be before createUser

    if (!terms) {
      setError("Please Accept our terms and Conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("after creation of a new user", result.user);
        setSuccess(true);
        event.target.reset();

        // update user profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };

        updateProfile(result.user, profile)
          .then(() => {})
          .catch((err) => console.log(err));

        // send verification email
        sendEmailVerification(result.user).then(() => {
          // alert('Please verify your email before login');
          toast.success(
            "Register successful!  Please verify your email before login "
          );
        });
      })
      .catch((error) => {
        console.log("error happened", error.message);
        setError(error.message);
      });
  };

  const handleToggleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  {/* user name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="name"
                  />
                  {/* user photo URL */}
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="input"
                    name="photo"
                    placeholder="Photo URL"
                  />
                  {/* user email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                    <button
                      onClick={handleToggleShowPassword}
                      className="btn btn-xs absolute right-1.5 top-1.5"
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </button>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="checkbox"
                        name="terms"
                        className="checkbox"
                      />
                      Accept Out Terms abd Condition
                    </label>
                  </div>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                {success && (
                  <p className="text-green-500 ">
                    Account created successfully
                  </p>
                )}

                {error && <p className="text-red-600">{error}</p>}
              </form>

              <p>
                Already have an account? Please{" "}
                <Link to="/login" className="text-blue-400 underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
