import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectAdminRoutes = ({ children }: any) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchIsAdmin = async () => {
      const response = await axios.get('http://localhost:3002/adminValidator', {
        headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
      });
      setIsAdmin(response.data);
    };
    fetchIsAdmin();
  }, []);

  return isAdmin ? children : null;
};

export default ProtectAdminRoutes;
