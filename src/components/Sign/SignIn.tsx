import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSignIn } from '../../features/applicationSlice';

const SignIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [sign , setSign] = useState(false)

    const dispatch = useDispatch()
    const handleLogin = (e)=>{
        setLogin(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handlePush = async ()=>{
        await dispatch(authSignIn({login, password}))
        setSign(true)
    }

    return (
        <div>
        <p>войдите в аккаунт</p>
        <div>
          <input type="text" onChange={handleLogin} value={login} />
          <input type="text" onChange={handlePassword} value={password} />
          <button onClick={handlePush}>войти</button>
  
        </div>
        {sign ? <p>неверный логин или пароль</p> : null}
        <div>
          <Link to="/signUp">хочу зарегистрироваться</Link>
        </div>
      </div>
    );
};

export default SignIn;