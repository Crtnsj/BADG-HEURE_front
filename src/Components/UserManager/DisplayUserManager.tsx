import axios from 'axios';
import { useState, useEffect } from 'react';
import UserManager from './UserManager';
import SignUp from '../Log/SignUp';
import Title from '../Other/Title';

const DisplayUserManager = () => {
  const [users, setUsers] = useState([]);
  const [inAdd, setInAdd] = useState(false);

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
    const response = await axios.get<AccountData>(`http://localhost:3002/account/view/${ID}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
    });
    setAccountData(response.data);
  };

  const handleClickAdd = () => {
    setInAdd(!inAdd);
  };

  const handleChangeUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    fetchData(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center m-4 gap-4">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <Title type="userManager" />
          <button className={`btnAddElem ${inAdd ? 'turn' : ''} `} onClick={handleClickAdd}>
            <div className="btnAddElem__left"></div>
            <div className={`btnAddElem__plus ${inAdd ? 'turn' : ''} `}></div>
            {inAdd ? (
              <></>
            ) : (
              <div className="btnAddElem__anim">
                <span className="btnAddElem__anim--text">Ajouter un Utilisateur</span>
              </div>
            )}
            <div className="btnAddElem__right"></div>
          </button>
        </div>

        {inAdd ? (
          <SignUp />
        ) : (
          <div className="flex">
            <p>Données personnelles de :</p>
            <select onChange={handleChangeUser} className="bg-color4 ml-2 rounded ">
              <option value="">Sélectionnez un utilisateur</option>
              {users.map((user: AccountData) =>
                user._id === '6492e134a5703050889d0d20' ? null : (
                  <option key={user._id} value={user._id}>
                    {user.name} {user.firstName}
                  </option>
                ),
              )}
            </select>
          </div>
        )}

        {!inAdd &&
          Object.keys(accountData).length ===
            Object.keys({
              name: '',
              firstName: '',
              email: '',
              isAdmin: false,
              _id: '',
            }).length && (
            <div>Aucune données à afficher, veuillez sélectionner un utilisateur...</div>
          )}
        {!inAdd &&
          Object.keys(accountData).length !==
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
