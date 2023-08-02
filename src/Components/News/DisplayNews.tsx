import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import Title from '../Other/Title';
import AddNews from './AddNews';

type data = {
  type: string;
  content: string;
  important: boolean;
};

// composant pour afficher les news
const News = () => {
  const [news, setNews] = useState<data[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [inAdd, setInAdd] = useState(false);

  //cherche les news et si l'utilisateur est admin ou non
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3002/news/viewNews', {
        headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
      });
      setNews(response.data.news);
      setIsAdmin(response.data.isAdmin);
    };
    fetchData();
  }, []);

  //au click du boutton addNews -> naviguer vers ("home/addNews")
  const handleClickAddNews = () => {
    setInAdd(!inAdd);
  };

  //Si le state news est vide -> affiche loading...
  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  //Affiche les news en allant chercher le composant NewsCard et en lui passant en props les informations.
  //Ajoute le bouton pour ajouter des news si l'utilisateur est admin
  return (
    <div className="layoutPages ">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <Title type="infos" />
        {isAdmin ? (
          <button onClick={handleClickAddNews} className="btnAddElem">
            <div className="btnAddElem__left"></div>
            <div className="btnAddElem__plus"></div>
            <div className="btnAddElem__anim">
              <span className="btnAddElem__anim--text">Ajouter une news</span>
            </div>
            <div className="btnAddElem__right"></div>
          </button>
        ) : (
          <></>
        )}
      </div>
      {inAdd ? (
        <AddNews />
      ) : (
        <div className="layoutCard layoutCard--News">
          {news.map((info, index) => (
            <NewsCard
              key={index}
              type={info.type}
              content={info.content}
              important={info.important}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
