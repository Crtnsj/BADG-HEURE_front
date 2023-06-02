const SignIn = () => {
  return (
    <>
      <h1>Identiez-vous</h1>
      <form>
        <div>
          <input type="text" name="email" />
          <label>Email</label>
        </div>
        <div>
          <input type="password" name="pswd" />
          <label>Mot de passe</label>
        </div>
        <button type="submit">Valider</button>
      </form>
    </>
  );
};

export default SignIn;
