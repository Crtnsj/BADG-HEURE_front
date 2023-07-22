import { useEffect, useState } from 'react';
import AccountCard from './AccountCard';
import axios from 'axios';

const DisplayMyAccount = () => {
  type AccountData = {
    name: string;
    firstName: string;
    email: string;
    isAdmin: boolean;
  };
  const [accountData, setAccountData] = useState<AccountData>({
    name: '',
    firstName: '',
    email: '',
    isAdmin: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3002/account/view', {
        headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
      });
      setAccountData(response.data);
      console.log(accountData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center m-4">
        <div className="p-2 rounded w-1/2 text-center font-Montserrat font-extrabold bg-color1">
          Voici vos informations personnelles
        </div>
      </div>
      <AccountCard
        nom={accountData.name}
        prenom={accountData.firstName}
        email={accountData.email}
        droits={accountData.isAdmin ? 'Admin' : 'User'}
      />
    </>
  );
};

export default DisplayMyAccount;
