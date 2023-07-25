import axios from 'axios';
import Title from '../Other/Title';

const AddBadg = () => {
  const handleClick = () => {
    const data = { date: Date.now() };
    const now = new Date();
    const count = parseInt(localStorage.getItem('count') || '0');

    if (!localStorage.getItem('timestamp')) {
      localStorage.setItem('timestamp', `${data.date}`);
      localStorage.setItem('count', `${1}`);
    } else {
      const actualDayDate = () => {
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
        return formattedDate;
      };
      const timestampDate = () => {
        const timestamp = new Date(parseInt(localStorage.getItem('timestamp') || '0'));
        const formattedDate = `${timestamp.getDate().toString().padStart(2, '0')}/${(
          timestamp.getMonth() + 1
        )
          .toString()
          .padStart(2, '0')}/${timestamp.getFullYear().toString().slice(-2)}`;
        return formattedDate;
      };
      if (actualDayDate() === timestampDate()) {
        if (count < 4) {
          localStorage.setItem('count', `${count + 1}`);
        } else {
          console.log('nombre de badgeage maximum atteint');
          return;
        }
      } else {
        localStorage.setItem('timestamp', `${data.date}`);
        localStorage.setItem('count', `${1}`);
      }
    }

    axios
      .post(`http://localhost:3002/badg/badgIn`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
      })
      .then(() => {
        console.log('OK!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center mt-4">
        <Title type="badgPage" />
      </div>
      <div className="flex justify-center items-center mt-8 gap-4 ">
        <div className="flex bg-color3 p-4 rounded w-1/3 justify-around">
          <div className="bg-cover bg-center bg-logo_hour w-2/12 aspect-square"></div>
          <p className="flex items-center justify-center text-center">Badger ma présence</p>
          <button onClick={handleClick} className="bg-color4 rounded p-4">
            Valider mon entrée / sortie
          </button>
        </div>
      </div>
    </>
  );
};

export default AddBadg;
