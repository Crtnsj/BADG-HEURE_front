import axios from 'axios';
import { useEffect, useState } from 'react';
import Retrospection from './Retrospection';
import Title from '../Other/Title';

type User = {
  _id: string;
  name: string;
  firstName: string;
};

const DisplayRetrospectionAdmin = () => {
  const [badgeages, setBadgeages] = useState([]);
  const [users, setUsers] = useState([]);

  //hook qui sert à faire resortir tous les utilisateurs de la base de données
  //et les stocke dans le state "users"
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3002/account/viewAll', {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        });
        setUsers(response.data.result);
        console.log(users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  // fonction servant a récupérer les badgeages d'un user grâce à son
  // ID et stocke la réponse dans le state "badgeages"
  const fetchData = async (ID: string) => {
    try {
      const response = await axios.get(`http://localhost:3002/badg/getBadgByID/${ID}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
      });
      setBadgeages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Handler qui ecoute s'il y a un changement dans la liste d'utilisateur
  //et mets a jour les badgeages à visualiser
  const handleChangeUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    fetchData(event.target.value);
  };

  return (
    <div className="layoutPages">
      {/* Composant qui sert aux titres */}
      <Title type="retrospection" />
      <div className="flex">
        <p>Calendrier de :</p>
        {/* Liste déroulante des utilisateurs */}
        <select onChange={handleChangeUser} className="bg-color4 ml-2 rounded">
          <option value="">Sélectionnez un utilisateur</option>
          {users.map((user: User) => (
            // Création à la volée de chaque option avec
            //les noms, prénoms des utilisateurs
            <option key={user._id} value={user._id}>
              {user.name} {user.firstName}
            </option>
          ))}
        </select>
      </div>
      {/* Si le nombre de badgeage est supérieur à 0 alors afficher le composant
      retrospection avec les dates de badgeages correspondantes sinon écrire 
      "Aucune donnée de badgeage à afficher" */}
      {badgeages.length > 0 ? (
        <Retrospection dates={badgeages} />
      ) : (
        <div>Aucune donnée de badgeage à afficher</div>
      )}
    </div>
  );
};

export default DisplayRetrospectionAdmin;
