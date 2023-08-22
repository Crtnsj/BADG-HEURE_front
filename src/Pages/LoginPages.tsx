import SignIn from '../Components/Log/SignIn';

//Composant qui rends les formulaires de SignIn et SignUp en fonction de l'état de otpionLogin.
//Son état change lorsque l'on click sur un lien
const LoginPages = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__pic" />
      <div className="loginPage__gradient"></div>
      <div className="loginPage__box">
        <SignIn />
      </div>
    </div>
  );
};

export default LoginPages;
