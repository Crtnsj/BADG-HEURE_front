import { useState } from 'react';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
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
    <>
      {optionLogin ? <SignUp /> : <SignIn />}
      <a href="" onClick={handleClick}>
        {optionLogin ? 'Se connecter' : "S'inscrire"}
      </a>
    </>
  );
}

export default App;
