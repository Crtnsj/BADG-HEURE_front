import { useState, useEffect } from 'react';

const DisplayRetrospection = (props: any) => {
  const [actualSem, setActualSem] = useState([]);
  const [weekOffset, setWeekOffset] = useState(0);

  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  useEffect(() => {
    const now = new Date();
    now.setDate(now.getDate() + weekOffset * 7);

    const today = () => {
      const dayOfWeek = now.getDay();
      const day = now.getDate();
      return { dayOfWeek, day };
    };

    const todayInfo = today();
    const otherDays: any = [];

    for (let i = 0; i < daysOfWeek.length; i++) {
      const day = todayInfo.day - todayInfo.dayOfWeek + i + 1;
      const date = new Date(now.getFullYear(), now.getMonth(), day);
      const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
      otherDays.push(formattedDate);
    }

    setActualSem(otherDays);
  }, [weekOffset]);

  const formatDate = (date: any) => {
    const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Diman'];
    const dayOfWeek = daysOfWeek[date.getDay() + 1];
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return {
      dayOfWeek: dayOfWeek,
      date: day + '/' + month + '/' + year,
      hour: `${hours}:${minutes}`,
    };
  };

  const traduction = props.dates.map((date: any) => formatDate(new Date(parseInt(date))));

  const handlePrevWeek = () => {
    setWeekOffset(weekOffset - 1);
  };

  const handleNextWeek = () => {
    setWeekOffset(weekOffset + 1);
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevWeek}>Semaine précédente</button>
        <button onClick={handleNextWeek}>Semaine suivante</button>
      </div>
      <table className="border-solid border-2">
        <thead className="border-solid border-2">
          <tr className="border-solid border-2">
            <th className="border-solid border-2">Jour</th>
            {[1, 2, 3, 4].map((numero) => (
              <th key={numero} className="border-solid border-2">
                {numero}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {actualSem.map((jour, index) => {
            const cells = [];

            const matchingDates = traduction.filter((date: any) => date.date === jour);

            for (let i = 0; i < 4; i++) {
              if (matchingDates[i]) {
                cells.push(<td className="border-solid border-2">{matchingDates[i].hour}</td>);
              } else {
                cells.push(<td className="border-solid border-2"></td>);
              }
            }

            return (
              <tr key={index} className="border-solid border-2">
                <td className="border-solid border-2">
                  {daysOfWeek[index]} - {jour}
                </td>
                {cells}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayRetrospection;
