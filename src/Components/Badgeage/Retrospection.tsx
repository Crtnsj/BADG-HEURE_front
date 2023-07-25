import { useState, useEffect } from 'react';

const Retrospection = (props: any) => {
  const [actualSem, setActualSem] = useState<string[]>([]);
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [weekNumber, setWeekNumber] = useState<number>(0);

  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  useEffect(() => {
    const now = new Date();
    now.setDate(now.getDate() + weekOffset * 7);

    const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
    const pastDaysOfYear = (now.getTime() - firstDayOfYear.getTime()) / 86400000;
    const currentWeekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    setWeekNumber(currentWeekNumber);

    const today = () => {
      const dayOfWeek = now.getDay();
      const day = now.getDate();
      return { dayOfWeek, day };
    };

    const todayInfo = today();
    const otherDays = [];

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
    <div className="bg-color4 p-4 rounded">
      <div className="flex justify-between mb-4">
        <button
          className="bg-prev bg-cover bg-center py-2 px-4 rounded"
          onClick={handlePrevWeek}
        ></button>
        <p>Semaine : {weekNumber}</p>
        <button
          className="bg-next bg-cover bg-center py-2 px-4 rounded"
          onClick={handleNextWeek}
        ></button>
      </div>
      <table className="border-collapse border border-gray-400">
        <thead className="bg-color1">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Jour</th>
            {[1, 2, 3, 4].map((numero) => (
              <th key={numero} className="border border-gray-400 px-4 py-2 w-20">
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
                cells.push(
                  <td key={i} className="border border-gray-400 px-4 py-2">
                    {matchingDates[i].hour}
                  </td>,
                );
              } else {
                cells.push(<td key={i} className="border border-gray-400 px-4 py-2"></td>);
              }
            }

            return (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">
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

export default Retrospection;
