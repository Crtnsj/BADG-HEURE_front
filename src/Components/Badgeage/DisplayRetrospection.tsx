import axios from 'axios';
import { useEffect, useState } from 'react';
import Retrospection from './Retrospection';
import Title from '../Other/Title';

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
    <div className="layoutPages">
      <Title type="retrospection" />
      <Retrospection dates={badgeages} />
    </div>
  );
};

export default DisplayRetrospection;
