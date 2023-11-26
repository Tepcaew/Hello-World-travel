import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authSignIn } from "../../../features/applicationSlice";

const SignInAdmin = () => {
  const error = useSelector((state) => state.application.error);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePush = (e) => {
    e.preventDefault();
    dispatch(authSignIn({ login, password }));
  };

  return (
    <div>
      <p>Войти как администратор</p>
      <div>
        {error ? <div>{error}</div> : null}
        <form action="" onSubmit={handlePush}>
          <input type="text" onChange={handleLogin} value={login} />
          <input type="password" onChange={handlePassword} value={password} />
          <button type="submit">войти</button>
        </form>
      </div>
      <div>
        <Link to="/signUpAdmin">хочу зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default SignInAdmin;
