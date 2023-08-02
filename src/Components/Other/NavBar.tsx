import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const [viewNavBar, setViewNavBar] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  const menuBurgerRef = useRef<HTMLButtonElement>(null);

  const handleClickBurger = () => {
    setViewNavBar(!viewNavBar);
  };

  const handleClickLink = (path: string) => (e: React.MouseEvent) => {
    if (path === '/') {
      localStorage.removeItem('JWT');
    }
    e.preventDefault();
    navigate(path);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navBarRef.current &&
        !navBarRef.current.contains(event.target as Node) &&
        menuBurgerRef.current &&
        !menuBurgerRef.current.contains(event.target as Node)
      ) {
        setViewNavBar(false);
      }
    };

    if (viewNavBar) {
      document.body.addEventListener('click', handleOutsideClick);
    } else {
      document.body.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [viewNavBar]);

  useEffect(() => {
    const fetchIsAdmin = async () => {
      try {
        const response = await axios.get('http://localhost:3002/adminValidator', {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        });
        setIsAdmin(response.data);
      } catch (error) {
        setIsAdmin(false);
      }
    };
    fetchIsAdmin();
  }, []);

  return (
    <>
      <nav ref={navBarRef} className={`navBar ${viewNavBar ? 'showLinks' : 'hideLinks'} bg-color2`}>
        <ul className="flex w-full flex-col ml-5 gap-3">
          <li className="flex w-full">
            <button onClick={handleClickLink('/home')} className="navBar__link">
              <div className="navBar__pic navBar__pic--home  "></div>Accueil
            </button>
          </li>
          <li className="flex w-full">
            <button onClick={handleClickLink('/home/about')} className="navBar__link">
              <div className="navBar__pic navBar__pic--info"></div>A propos
            </button>
          </li>
          <li className="flex w-full">
            <button onClick={handleClickLink('/home/myAccount')} className="navBar__link">
              <div className="navBar__pic navBar__pic--account"></div>Mon compte
            </button>
          </li>
          {isAdmin && (
            <li className="flex w-full">
              <button onClick={handleClickLink('/home/userManager')} className="navBar__link">
                <div className="navBar__pic navBar__pic--annuaire"></div>Utilisateurs
              </button>
            </li>
          )}
          <li className="flex w-full">
            <button onClick={handleClickLink('/')} className="navBar__link">
              <div className="navBar__pic navBar__pic--logout"></div>Déconnexion
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
