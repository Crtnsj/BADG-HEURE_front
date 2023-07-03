import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayRetrospection from './Retrospection';

const Retrospection = () => {
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
    <>
      <p>Page de rétrospection</p>
      <DisplayRetrospection dates={badgeages} />
    </>
  );
};

export default Retrospection;
