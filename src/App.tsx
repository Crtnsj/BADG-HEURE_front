import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Composant App qui verifie si un JWT existe et renvoie vers /auth lorsqu'il n'y en a pas, sinon il renvoie vers /home
function App() {
  const storageToken = localStorage.getItem('JWT');
  const navigate = useNavigate();

  useEffect(() => {
    if (!storageToken) {
      navigate('/auth');
    } else {
      navigate('/home');
    }
  }, [storageToken, navigate]);

  return <></>;
}

export default App;
