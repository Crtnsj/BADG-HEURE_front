import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Other/NavBar';

const Home = () => {
  return (
    <>
      <header className="flex justify-between bg-color1 h-11">
        <NavBar />
        <div className="h-full w-2/12 min-w-64">
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
