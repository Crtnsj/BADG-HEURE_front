import axios from 'axios';
import { useState, useEffect } from 'react';
import ActionCard from './ActionsCard';
import Title from '../Other/Title';

const DisplayActions = () => {
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

  // Définir la constante actionType en dehors de l'opérateur ternaire
  const actionType = isAdmin
    ? ['badgeage', 'retrospectionAdmin', 'declaration', 'notification']
    : ['badgeage', 'retrospection', 'declaration', 'notification'];

  // Utiliser la constante actionType dans l'opérateur ternaire
  return (
    <div className="flex flex-col justify-center items-center m-4 gap-4">
      <Title type="action" />

      <div className="flex flex-row gap-3 flex-wrap justify-around w-5/6 max-w-4xl">
        {actionType.map((info, index) => (
          <ActionCard key={index} actionType={info} />
        ))}
      </div>
    </div>
  );
};

export default DisplayActions;
