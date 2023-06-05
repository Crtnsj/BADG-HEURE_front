const SignIn = () => {
  return (
    <div className="bg-white">
      <h1>Identiez-vous</h1>
      <form>
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
