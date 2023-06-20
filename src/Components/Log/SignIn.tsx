import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const data = { email, password };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3002/logIn/signIn/`, data)
      .then(async (response) => {
        localStorage.setItem('JWT', response.data.token);
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeEmail = (e: any) => setEmail(e.target.value);
  const handleChangePassword = (e: any) => setPassword(e.target.value);

  return (
    <div className="bg-white p-4 rounded-lg gap-1">
      <h1 className="font-Montserrat font-bold">Identiez-vous</h1>
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
        <div className="flex justify-center m-2">
          <button className="bg-color2 text-white p-1 rounded-md">Valider</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
