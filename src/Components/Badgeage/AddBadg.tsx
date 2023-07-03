import axios from 'axios';

const AddBadg = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
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
    <div className="flex justify-center items-center m-4 gap-4">
      <div className="flex">
        <div className={`bg-cover bg-center bg-logo_hour w-2/4 aspect-square`}></div>
        <p>Badger ma présence</p>
        <button onClick={handleClick}>Valider mon entrée / sortie</button>
      </div>
    </div>
  );
};

export default AddBadg;
