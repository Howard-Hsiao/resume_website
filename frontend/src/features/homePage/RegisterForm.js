import React, { useState } from "react"; //rfce: react function component export
import "../../styles/RegisterForm.css";
import { register } from "./api";

function RegisterForm() {
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    userName: "",
    account: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    register(details.userName, details.account, details.password)
      .then((res) => {
        console.log(res);
        if (res === "Successfully registered. ") {
          window.location = "/";
        } else setError(res);
      })
      .catch((err) => {
        setError("Something went wrong!");
      });
  };
  return (
    <form className="register" onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Register</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, userName: e.target.value })}
            value={details.userName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="account">Account:</label>
          <input
            type="email"
            name="account"
            id="account"
            onChange={(e) => setDetails({ ...details, account: e.target.value })}
            value={details.account}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
            value={details.password}
          />
        </div>
        <input type="submit" value="REGISTER" />
      </div>
    </form>
  );
}

export default RegisterForm;