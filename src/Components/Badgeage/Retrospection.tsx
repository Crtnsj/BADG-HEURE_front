import { useEffect, useState } from 'react';

interface DateObject {
  dayOfWeek: string;
  date: string;
  hour: string;
}

type Props = {
  dates: number[];
};

const Retrospection = (props: Props) => {
  // State pour : La semaine actuelle, L'offset de la semaine à visualiser, Le numéro de la semaine affichée
  const [actualWeek, setActualWeek] = useState<string[]>([]);
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [weekNumber, setWeekNumber] = useState<number>(0);

  // Tableau des jours de la semaine
  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  useEffect(() => {
    // Date actuelle
    let now = new Date();
    // Calcul de la date en fonction de l'offset de la semaine
    // En cas de changement de l'offset de la semaine now change +/- d'une semaine
    now.setDate(now.getDate() + weekOffset * 7);

    const calcNumWeek = () => {
      // Premier jour de l'année
      const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
      // Nombre de jours passés depuis le premier jour de l'année
      const pastDaysOfYear = (now.getTime() - firstDayOfYear.getTime()) / 86400000;
      // Calcul du numéro de la semaine grâce aux deux constantes précédentes
      const currentWeekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
      setWeekNumber(currentWeekNumber);
    };
    calcNumWeek();

    const otherDays: string[] = [];

    const calcOtherDaysOfWeek = () => {
      const today = () => {
        // Jour de la semaine (0 pour Dimanche, 1 pour Lundi, etc...)
        const dayOfWeek = now.getDay();
        // Jour du mois
        const day = now.getDate();
        return { dayOfWeek, day };
      };
      const todayInfo = today();
      for (let i = 0; i < daysOfWeek.length; i++) {
        const day = todayInfo.day - todayInfo.dayOfWeek + i + 1;
        const date = new Date(now.getFullYear(), now.getMonth(), day);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
        otherDays.push(formattedDate);
      }
    };
    calcOtherDaysOfWeek();

    // Mise à jour de la semaine actuelle
    setActualWeek(otherDays);
  }, [weekOffset]);

  // Fonction qui traduit un timestamp et rend un objet avec le jour,
  //la date au format : dd/mm/yy, et l'heure sous la forme hh:mm
  const formatDate = (date: Date): DateObject => {
    const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Diman'];
    // Jour de la semaine au format court (Lun, Mar, etc.)
    const dayOfWeek = daysOfWeek[date.getDay() + 1];
    const day = date.getDate().toString().padStart(2, '0');
    // Mois (ajout de 1 car les mois commencent à partir de 0)
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    // Année (obtention des deux derniers chiffres)
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return {
      dayOfWeek: dayOfWeek,
      date: `${day}/${month}/${year}`,
      hour: `${hours}:${minutes}`,
    };
  };

  // Traduction des timestamps passés en props en dates lisibles
  const traduction = props.dates.map((date) => formatDate(new Date(date)));

  const handlePrevWeek = () => {
    // Décrémente l'offset de la semaine pour revenir en arrière d'une semaine
    setWeekOffset(weekOffset - 1);
  };

  const handleNextWeek = () => {
    // Incrémente l'offset de la semaine pour avancer d'une semaine
    setWeekOffset(weekOffset + 1);
  };

  return (
    <div className="bg-color4 p-4 rounded">
      {/* Gestion des semaines  */}
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
      {/* tableau de retrospection */}
      <table className="border-collapse border border-gray-400">
        {/* Définition des colonnes */}
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
          {actualWeek.map((jour, index) => {
            const cells = [];
            // filtre les dates traduites (traduction) pour ne conserver que celles
            // qui correspondent à la date (jour) actuellement traitée
            const matchingDates = traduction.filter((date: DateObject) => date.date === jour);

            for (let i = 0; i < 4; i++) {
              // Si une date correspondante est trouvée à l'index i, une cellule contenant
              // l'heure est ajoutée à cells. Sinon, une cellule vide est ajoutée.
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
              // Créer une cellule contenant le jour de la semaine et la date,
              // suivie des cellules générées dans l'étape précédente
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
