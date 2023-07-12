import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const [viewNavBar, setViewNavBar] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  const menuBurgerRef = useRef<HTMLButtonElement>(null);

  const handleClickBurger = () => {
    setViewNavBar(!viewNavBar);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navBarRef.current &&
      !navBarRef.current.contains(event.target as Node) &&
      menuBurgerRef.current &&
      !menuBurgerRef.current.contains(event.target as Node)
    ) {
      setViewNavBar(false);
    }
  };

  useEffect(() => {
    if (viewNavBar) {
      document.body.addEventListener('click', handleClickOutside);
    } else {
      document.body.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [viewNavBar]);

  const handleClickHome = (e: any) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleClickAbout = (e: any) => {
    e.preventDefault();
    navigate('/home/about');
  };
  const handleClickMyAccount = (e: any) => {
    e.preventDefault();
    navigate('/home/myAccount');
  };
  const handleClickDeconnection = (e: any) => {
    e.preventDefault();
    localStorage.removeItem('JWT');
    navigate('/');
  };
  return (
    <>
      <nav ref={navBarRef} className={`navBar ${viewNavBar ? 'showLinks' : 'hideLinks'}`}>
        <ul className="flex w-full flex-col ml-5 gap-3">
          <li className="flex w-full">
            <button
              onClick={handleClickHome}
              className="flex w-full gap-3 font-Montserrat flex-wrap shrink-0"
            >
              <div className="bg-home bg-cover bg-center w-7 aspect-square"></div>Accueil
            </button>
          </li>
          <li className="flex w-full">
            <button
              onClick={handleClickAbout}
              className="flex w-full gap-3 font-Montserrat flex-wrap shrink-0"
            >
              <div className="bg-info bg-cover bg-center w-7 aspect-square"></div>A propos
            </button>
          </li>
          <li className="flex w-full">
            <button onClick={handleClickMyAccount} className="flex w-full gap-3 font-Montserrat">
              <div className="bg-compte bg-cover bg-center w-7 h-7 aspect-square"></div>Mon compte
            </button>
          </li>
          <li className="flex w-full">
            <button onClick={handleClickDeconnection} className="flex w-full gap-3 font-Montserrat">
              <div className="bg-logout bg-cover bg-center w-7 aspect-square"></div>Déconnexion
            </button>
          </li>
        </ul>
      </nav>
      <button ref={menuBurgerRef} className="menuBurger" onClick={handleClickBurger}>
        <span className="burger-bar"></span>
      </button>
    </>
  );
};

export default NavBar;
