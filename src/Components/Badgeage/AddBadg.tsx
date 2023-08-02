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
      <div className="layoutPages">
        <Title type="badgPage" />
      </div>
      <div className="layoutPages">
        <div className="addBadg">
          <div className="addBadg__pic"></div>
          <p className="addBadg__text">Badger ma présence</p>
          <button onClick={handleClick} className="btnAddBadg">
            Valider mon entrée / sortie
          </button>
        </div>
      </div>
    </>
  );
};

export default AddBadg;
