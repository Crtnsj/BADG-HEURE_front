import { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorPage from '../Pages/ErrorPage';

// Composant ProtectAdminRoutes qui vérifie si l'utilisateur est un administrateur avant de rendre le contenu de l'enfant (children) passé en tant que prop.
const ProtectAdminRoutes = ({ children }: any) => {
  const [isAdmin, setIsAdmin] = useState(false);

  // Verifie si l'utilisateur est admin ou non est met à jour le useState isAdmin avec la valeur de la reponse de l'API
  useEffect(() => {
    const fetchIsAdmin = async () => {
      const response = await axios.get('http://localhost:3002/adminValidator', {
        headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
      });
      setIsAdmin(response.data);
    };
    fetchIsAdmin();
  }, []);

  // Si l'utilisateur est admin -> rendre children, sinon rendre le composant ErrorPage
  return isAdmin ? children : <ErrorPage />;
};

export default ProtectAdminRoutes;
