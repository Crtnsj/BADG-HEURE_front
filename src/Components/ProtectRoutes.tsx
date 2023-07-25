import { useNavigate } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  children: ReactNode;
};

//composant servant à rendres les composant enfants uniquement si le JWT est valide
const ProtectRoutes = ({ children }: Props) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifie si le JWT est valide et le supprime s'il ne l'est pas. Si JWT n'est pas valide -> renvoie à la page de connexion
  useEffect(() => {
    const token = localStorage.getItem('JWT');

    if (!token) {
      navigate('/auth');
    } else {
      const tokenValidator = async () => {
        try {
          const response = await axios.get('http://localhost:3002/tokenValidator', {
            headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
          });
          if (response.data.valid === true) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('JWT');
            setIsAuthenticated(false);
            navigate('/auth');
          }
        } catch (error) {
          localStorage.removeItem('JWT');
          setIsAuthenticated(false);
          navigate('/auth');
        }
      };
      tokenValidator();
    }
  }, [navigate]);

  // si isAuthentificated -> renvoyer le composant enfant
  return isAuthenticated ? children : null;
};

export default ProtectRoutes;
