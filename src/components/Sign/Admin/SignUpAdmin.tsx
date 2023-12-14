import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../../features/applicationSlice";
import { Link } from "react-router-dom";
import styles from "../Sign.module.css";
import { adminOn } from "../../../features/justReducer";

const SignUpAdmin = () => {
  const error = useSelector((state) => state.application.error);
  const admin = useSelector((state) => state.justReducer.admin)
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignUp({ login, password, image, admin }));
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleAdmin = (e) => {
    dispatch(adminOn())
  };
  return (
    <>
      <div className={styles.main}>
        {error ? <div>{error}</div> : null}
        <form action="" onSubmit={handleSignUp}>
          <input type="text" value={login} onChange={handleLogin} />
          <input type="password" value={password} onChange={handlePassword} />
          <input type="file" onChange={handleImage} />
          <input
            type="checkbox"
            onChange={(e) => handleAdmin(e)}
            checked={admin}
          />
          <button>зарегистрироваться</button>
        </form>
      </div>
      <div>
        <Link to="/loginAdmin">войти как администратор</Link>
      </div>
    </>
  );
};

export default SignUpAdmin;
