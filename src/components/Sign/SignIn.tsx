import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authSignIn } from "../../features/applicationSlice";

const SignIn = () => {
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
      <p>войдите в аккаунт</p>
      <div>
        {error ? <div>{error}</div> : null}
        <form action="" onSubmit={handlePush}>
          <input type="text" onChange={handleLogin} value={login} />
          <input type="text" onChange={handlePassword} value={password} />
          <button type="submit">войти</button>
        </form>
      </div>
      <div>
        <Link to="/signUp">хочу зарегистрироваться</Link>
        <Link to="/loginAdmin">войти как администратор</Link>
      </div>
    </div>
  );
};

export default SignIn;
