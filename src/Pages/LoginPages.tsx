import { useState } from 'react';
import SignIn from '../Components/Log/SignIn';
import SignUp from '../Components/Log/SignUp';

//Composant qui rends les formulaires de SignIn et SignUp en fonction de l'état de otpionLogin.
//Son état change lorsque l'on click sur un lien
const LoginPages = () => {
  let [optionLogin, setoptionLogin] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (optionLogin === true) {
      setoptionLogin(false);
    } else {
      setoptionLogin(true);
    }
  };

  return (
    <div className="grid grid-cols-login-template">
      <div className="bg-cover bg-start min-h-screen bg-login_img" />
      <div className="bg-gradient-to-r from-white to-color1 max-w-login-gradient"></div>
      <div className="flex-shrink-0 gap-1 justify-center flex-col flex items-center bg-color1">
        {optionLogin ? <SignUp /> : <SignIn />}
        <a href="" onClick={handleClick}>
          {optionLogin ? 'Se connecter' : "S'inscrire"}
        </a>
      </div>
    </div>
  );
};

export default LoginPages;
