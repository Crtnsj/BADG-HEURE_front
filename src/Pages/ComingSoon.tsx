import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="bg-comingSoon bg-cover bg-center h-1/2 w-1/2"></div>
      <h2 className="font-Montserrat text-3xl font-extrabold">Cette page est en construction...</h2>
      <p className="font-Montserrat text-sm font-light">
        Le chef de chantier annonce une inauguration dans peu de temps{' '}
        <span className="text-lg">😉</span>
      </p>
      <button
        onClick={handleClick}
        className="font-Montserrat m-7 p-2 rounded bg-color3 hover:bg-color1 transition-all"
      >
        Retourner à l'accueil
      </button>
    </div>
  );
};

export default ComingSoon;
