import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

type data = {
  type: string;
  content: string;
  important: boolean;
};
const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3002/news/viewNews', {
        headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
      });
      setData(response.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  const news: data[] = data;
  return (
    <div className="flex flex-col justify-center items-center m-4 gap-4">
      <div className="bg-color1 p-2 rounded w-1/2 text-center font-Montserrat font-extrabold">
        Quelques infos RH en brefs
      </div>
      <div className="flex flex-row gap-1 flex-wrap justify-around w-5/6">
        {news.map((info, index) => {
          return (
            <NewsCard
              key={index}
              type={info.type}
              content={info.content}
              important={info.important}
            />
          );
        })}
      </div>
    </div>
  );
};

export default News;
