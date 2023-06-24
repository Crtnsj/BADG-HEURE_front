import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import { useNavigate } from 'react-router-dom';

type data = {
  type: string;
  content: string;
  important: boolean;
};

// composant pour afficher les news
const News = () => {
  const [news, setNews] = useState<data[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

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

  const navigate = useNavigate();

  //au click du boutton addNews -> naviguer vers ("home/addNews")
  const handleClickAddNews = () => {
    navigate('/home/addNews');
  };

  //Si le state news est vide -> affiche loading...
  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  //Affichage les news en allant chercher le composant NewsCard et en lui passant en props les informations.
  //Ajoute le bouton pour ajouter des news si l'utilisateur est admin
  return (
    <div className="flex flex-col justify-center items-center m-4 gap-4">
      <div className={`p-2 rounded w-1/2 text-center font-Montserrat font-extrabold bg-color1`}>
        Quelques infos RH en brefs
      </div>
      <div className="flex flex-row gap-1 flex-wrap justify-around w-5/6">
        {news.map((info, index) => (
          <NewsCard
            key={index}
            type={info.type}
            content={info.content}
            important={info.important}
          />
        ))}
        {isAdmin ? <button onClick={handleClickAddNews}>Ajouter une news</button> : <></>}
      </div>
    </div>
  );
};

export default News;
