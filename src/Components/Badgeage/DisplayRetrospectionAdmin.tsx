import axios from 'axios';
import { useEffect, useState } from 'react';
import Retrospection from './Retrospection';

type User = {
  _id: string;
  name: string;
  firstName: string;
};

const DisplayRetrospectionAdmin = () => {
  const [badgeages, setBadgeages] = useState([]);
  const [users, setUsers] = useState([]);

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

  const handleChangeUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    fetchData(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 gap-4">
      <div className="p-2 rounded w-1/2 text-center font-Montserrat font-extrabold bg-color1">
        Page de Retrospection
      </div>
      <div className="flex">
        <p className="font-Montserrat">Calendrier de :</p>
        <select
          onChange={handleChangeUser}
          className="font-Montserrat bg-color4 ml-2 rounded transition-all"
        >
          <option value="">Sélectionnez un utilisateur</option>
          {users.map((user: User) => (
            <option key={user._id} value={user._id}>
              {user.name} {user.firstName}
            </option>
          ))}
        </select>
      </div>
      {badgeages.length > 0 ? (
        <Retrospection dates={badgeages} />
      ) : (
        <div>Aucune donnée de badgeage à afficher</div>
      )}
    </div>
  );
};

export default DisplayRetrospectionAdmin;
