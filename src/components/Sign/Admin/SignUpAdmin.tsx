import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../../features/applicationSlice";
import { Link } from "react-router-dom";
import styles from "../Sign.module.css";

const SignUpAdmin = () => {
  const error = useSelector((state) => state.application.error);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [admin, setAdmin] = useState(false);

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
    e.preventDefault();
    if (admin === false) {
      return setAdmin(true);
    }
    return setAdmin(false);
  };
  return (
    <>
      <div className={styles.main}>
        {error ? <div>{error}</div> : null}
        <form action="" onSubmit={handleSignUp}>
          <input type="text" value={login} onChange={handleLogin} />
          <input type="text" value={password} onChange={handlePassword} />
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
