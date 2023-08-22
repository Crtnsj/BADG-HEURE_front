import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Other/NavBar';

const Home = () => {
  return (
    <>
      <header className="header">
        <NavBar />
        <div className="header__logo">
          <div className="bg-no-repeat bg-center bg-logo bg-cover h-full w-full mr-2"></div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
