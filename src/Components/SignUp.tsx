import axios from 'axios';
const SignUp = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);

    axios
      .post('http://localhost:3001/logIn/signUp/', formJson)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="bg-white p-4 rounded-lg gap-1">
      <h1 className="font-bold mb-4 text-center">Inscrivez-vous</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom <br />
            <input type="text" name="nom" />
          </label>
        </div>
        <div>
          <label>
            Prenom <br />
            <input type="text" name="prenom" />
          </label>
        </div>
        <div>
          <label>
            Email <br />
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Mot de passe <br />
            <input type="password" name="pswd" />
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
