import axios from 'axios';
import { useEffect, useState } from 'react';
import Retrospection from './Retrospection';

const DisplayRetrospection = () => {
  const [badgeages, setBadgeages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/badg/viewBadg', {
          headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
        });
        setBadgeages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-4 gap-4">
      <div className="p-2 rounded w-1/2 text-center font-Montserrat font-extrabold bg-color1">
        Page de Retrospection
      </div>
      <Retrospection dates={badgeages} />
    </div>
  );
};

export default DisplayRetrospection;
