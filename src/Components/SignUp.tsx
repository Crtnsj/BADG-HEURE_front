import axios from 'axios';
const SignUp = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);

    axios
      .post('http://localhost:3001/signup/', formJson)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="bg-red-500">Inscrivez-vous</h1>
      <form method="post" onSubmit={handleSubmit}>
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
        <div>
          <label>
            Rester connecté
            <input type="checkbox" name="stayConnect" />
          </label>
        </div>
        <button>Valider</button>
      </form>
    </>
  );
};

export default SignUp;
