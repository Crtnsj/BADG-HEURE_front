import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectRoutes = ({ children }: any) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('JWT');

    if (!token) {
      navigate('/auth');
    } else {
      const tokenValidator = async () => {
        const response = await axios.get('http://localhost:3002/tokenValidator', {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        });
        if (response.data.valid === true) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('JWT');
          navigate('/auth');
        }
      };
      tokenValidator();
    }
  }, []);

  return isAuthenticated ? children : null;
};

export default ProtectRoutes;
