import axios from 'axios';
import { useState } from 'react';

const SignUp = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = { nom, prenom, email, password };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/logIn/signUp/`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChangeNom = (e: any) => setNom(e.target.value);
  const handleChangePrenom = (e: any) => setPrenom(e.target.value);
  const handleChangeEmail = (e: any) => setEmail(e.target.value);
  const handleChangePassword = (e: any) => setPassword(e.target.value);

  return (
    <div className="bg-white p-4 rounded-lg gap-1">
      <h1 className="font-bold mb-4 text-center">Inscrivez-vous</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom <br />
            <input type="text" name="nom" onChange={handleChangeNom} value={nom} />
          </label>
        </div>
        <div>
          <label>
            Prenom <br />
            <input type="text" name="prenom" onChange={handleChangePrenom} value={prenom} />
          </label>
        </div>
        <div>
          <label>
            Email <br />
            <input type="text" name="email" onChange={handleChangeEmail} value={email} />
          </label>
        </div>
        <div>
          <label>
            Mot de passe <br />
            <input type="password" name="pswd" onChange={handleChangePassword} value={password} />
          </label>
        </div>
        <div className="gap-3 flex">
          <label>Restez connecté</label>
          <input type="checkbox" name="stayConnect" />
        </div>
        <div className="flex justify-center m-2">
          <button className="bg-color2 text-white p-1 rounded-md">Valider</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
