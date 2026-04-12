import Checkbox from "daisyui/components/checkbox";
import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center ">
          Register Your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Email</label>
            <input type="text" className="input" placeholder="Name" />

            {/* PhotoURL */}
            <label className="label">Email</label>
            <input type="text" className="input" placeholder="PhotoURL" />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            {/* terms and conditon */}
            <div className="flex gap-2 pt-4">
              <input type="checkbox" />
              <label className="label">Accept Terms and Condition</label>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5">
              Already have an account?
              <span className="text-secondary font-bold">
                <Link to="/auth/login"> Login</Link>
              </span>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
