import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProtectRoutes = ({ children }: any) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/auth');
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated ? children : null;
};

export default ProtectRoutes;
