import React from 'react'
import Styles from "../../assets/styles/Atom.module.css"
import { Link, useNavigate } from 'react-router-dom'

const ButtonKecil = () => {
  const navigate = useNavigate();

  const signup = () => {
    navigate('/signup');
  };
  const login = () => {
    navigate('/login');
  };

  return (
    <div>
      <button className={Styles.putihkecil} onClick={login}>Log in</button>
      <button className={Styles.orangekecil} onClick={signup}>Sign up</button>
    </div>
  )
}

export default ButtonKecil
