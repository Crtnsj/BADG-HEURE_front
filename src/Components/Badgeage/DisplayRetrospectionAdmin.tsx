import axios from 'axios';
import { useEffect, useState } from 'react';
import Retrospection from './Retrospection';

const RetrospectionAdmin = () => {
  const [badgeages, setBadgeages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3002/account/viewAll', {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        });
        setUsers(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/badg/viewBadg', {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        });
        setBadgeages(response.data.dates);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-4 gap-4">
      <div className="p-2 rounded w-1/2 text-center font-Montserrat font-extrabold bg-color1">
        Page de Retrospection
      </div>
      <select>
        <option value="">Sélectionnez un utilisateur</option>
        {users.map((user: any) => (
          <option key={user.id} value={user.id}>
            {user.name} {user.firstName}
          </option>
        ))}
      </select>
      <Retrospection dates={badgeages} />
    </div>
  );
};

export default RetrospectionAdmin;
