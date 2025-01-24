import React, { useState } from 'react'
import Styles from "../../assets/styles/Atom.module.css"
import Logout from '../../pages/Logout';
import { Link, useNavigate } from 'react-router-dom'

const ButtonKecil = () => {
  const navigate = useNavigate();

  const signup = () => {
    navigate('/signup');
  };
  const login = () => {
    navigate('/login');
  };

  const [popup, setPopup] = useState(false);

  return (
    <div>
      <button className={Styles.putihkecil} onClick={login}>Log in</button>
      <button className={Styles.orangekecil} onClick={signup}>Sign up</button>
      <button onClick={() => {setPopup(true)}}>Popup</button>
      <Logout trigger={popup} setTrigger={setPopup} />
    </div>
    
  )
}

export default ButtonKecil
