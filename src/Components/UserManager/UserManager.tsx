import axios from 'axios';
import { useState } from 'react';

type Props = {
  nom: string;
  prenom: string;
  email: string;
  droits: string;
  ID: string;
};

const UserManager = ({ nom, prenom, email, droits, ID }: Props) => {
  const [inModification, setInModification] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>(nom);
  const [editedFirstName, setEditedFirstName] = useState<string>(prenom);
  const [editedEmail, setEditedEmail] = useState<string>(email);
  const [editedRights, setEditedRights] = useState<boolean>(droits === 'Admin' ? true : false);

  const fieldsValue = {
    name: editedName,
    firstName: editedFirstName,
    email: editedEmail,
    isAdmin: editedRights,
  };

  const handleClickButton = (action: string, ID: string) => {
    if (action === 'save') {
      axios
        .patch(`http://localhost:3002/account/change/${ID}`, fieldsValue, {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        })
        .catch((error) => {
          console.log(error);
        });
      setInModification(!inModification);
    } else if (action === 'cancel') {
      setInModification(!inModification);
      setEditedName(nom);
      setEditedFirstName(prenom);
      setEditedEmail(email);
      setEditedRights(droits === 'Admin' ? true : false);
    } else {
      setInModification(!inModification);
    }
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };
  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedFirstName(event.target.value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEmail(event.target.value);
  };
  const handleChangeRights = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'Admin') {
      setEditedRights(true);
    } else {
      setEditedRights(false);
    }
  };

  return (
    <>
      {inModification ? (
        <div className="flex justify-center font-Montserrat">
          <div className="flex bg-color4 p-4 rounded justify-center gap-3">
            <div className="text-5xl font-black text-color2 mr-2 bg-color1 rounded-full p-3 flex justify-center items-center h-24 w-24">
              {prenom.charAt(0)}
              {nom.charAt(0)}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <input type="text" value={editedName} onChange={handleChangeName} />
                <input type="text" value={editedFirstName} onChange={handleChangeFirstName} />
              </div>
              <input type="text" value={editedEmail} onChange={handleChangeEmail} />
              <select
                onChange={handleChangeRights}
                className="font-Montserrat bg-color4 ml-2 rounded transition-all"
              >
                {droits === 'User' ? (
                  <>
                    <option value={droits}>{droits}</option>
                    <option value="Admin">Admin</option>
                  </>
                ) : (
                  <>
                    <option value={droits}>{droits}</option>
                    <option value="User">User</option>
                  </>
                )}
              </select>
              <button
                onClick={() => {
                  handleClickButton('save', ID);
                }}
              >
                Sauvegarder
              </button>
              <button
                onClick={() => {
                  handleClickButton('cancel', ID);
                }}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center font-Montserrat">
          <div className="flex bg-color4 p-4 rounded justify-center gap-3">
            <div className="text-5xl font-black text-color2 mr-2 bg-color1 rounded-full p-3 flex justify-center items-center h-24 w-24">
              {prenom.charAt(0)}
              {nom.charAt(0)}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <strong>{nom}</strong>
                <p>{prenom}</p>
              </div>
              <p>{email}</p>
              <p>{droits}</p>
              <button
                onClick={() => {
                  handleClickButton('change', ID);
                }}
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserManager;
