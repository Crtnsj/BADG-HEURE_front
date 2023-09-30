import { useNavigate } from 'react-router-dom';

const BadgOk = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <div className="layoutPages">
      <div className="addBadg">
        <div className="flex justify-between gap-2 items-center">
          <div className="addBadg__OkPic"></div>
          <p className="addBadg__text">Badgeage pris en compte</p>
        </div>
        <button onClick={handleClick} className="btnAddBadg">
          Retourner à l'accueil
        </button>
      </div>
    </div>
  );
};

export default BadgOk;
