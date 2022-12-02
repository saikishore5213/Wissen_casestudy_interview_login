import React, { useState } from "react";
import styles from "./LoginForm.module.css";
const LoginForm = ({ loginCredentials, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    //console.log(email, password);
    event.preventDefault();
    const userCredentials = {
      email: email,
      password: password,
    };
    loginCredentials(userCredentials);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <img
          src={
            "https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
          }
        />
        <label className={styles.label}>Email</label>
        <input
          type="email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className={styles.label}>Password</label>
        <input
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
