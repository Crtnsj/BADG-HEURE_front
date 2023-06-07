import axios from 'axios';

const SignIn = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);

    axios
      .post('http://localhost:3001/logIn/signIn/', formJson)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="bg-white">
      <h1>Identiez-vous</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="email" />
          <br />
          <label>Email</label>
        </div>
        <div>
          <input type="password" name="pswd" />
          <br />
          <label>Mot de passe</label>
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default SignIn;
