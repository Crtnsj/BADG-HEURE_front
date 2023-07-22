import axios from 'axios';
import { useState, useEffect } from 'react';
import UserManager from './UserManager';

const DisplayUserManager = () => {
  const [users, setUsers] = useState([]);
  type AccountData = {
    name: string;
    firstName: string;
    email: string;
    isAdmin: boolean;
    _id: string;
  };
  const [accountData, setAccountData] = useState<AccountData>({
    name: '',
    firstName: '',
    email: '',
    isAdmin: false,
    _id: '',
  });

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

  const fetchData = async (ID: string) => {
    const response = await axios.get(`http://localhost:3002/account/view/${ID}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
    });
    setAccountData(response.data);
  };
  const handleChangeUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    fetchData(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center m-4 gap-4">
        <div className="p-2 rounded w-1/2 text-center font-Montserrat font-extrabold bg-color1">
          Gestion des Utilisateurs
        </div>
        <div className="flex">
          <p className="font-Montserrat">Données personnelles de :</p>
          <select
            onChange={handleChangeUser}
            className="font-Montserrat bg-color4 ml-2 rounded transition-all"
          >
            <option value="">Sélectionnez un utilisateur</option>
            {users.map((user: any) =>
              user._id === '6492e134a5703050889d0d20' ? (
                <></>
              ) : (
                <option key={user._id} value={user._id}>
                  {user.name} {user.firstName}
                </option>
              ),
            )}
          </select>
        </div>

        {Object.keys(accountData).length ===
          Object.keys({
            name: '',
            firstName: '',
            email: '',
            isAdmin: false,
            _id: '',
          }).length && (
          <div>Aucune données à afficher, veuillez selectionner un utilisateur...</div>
        )}
        {Object.keys(accountData).length !=
          Object.keys({
            name: '',
            firstName: '',
            email: '',
            isAdmin: false,
            _id: '',
          }).length && (
          <UserManager
            nom={accountData.name}
            prenom={accountData.firstName}
            email={accountData.email}
            droits={accountData.isAdmin ? 'Admin' : 'User'}
            ID={accountData._id}
          />
        )}
      </div>
    </>
  );
};

export default DisplayUserManager;
