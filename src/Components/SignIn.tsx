import axios from 'axios';
import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = { email, password };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/logIn/signIn/`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChangeEmail = (e: any) => setEmail(e.target.value);

  const handleChangePassword = (e: any) => setPassword(e.target.value);

  return (
    <div className="bg-white">
      <h1>Identiez-vous</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="email" onChange={handleChangeEmail} value={email} />
          <br />
          <label>Email</label>
        </div>
        <div>
          <input type="password" name="pswd" onChange={handleChangePassword} value={password} />
          <br />
          <label>Mot de passe</label>
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default SignIn;
