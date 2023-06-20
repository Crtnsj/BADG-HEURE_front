import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
