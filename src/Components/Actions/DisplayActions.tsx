import ActionCard from './ActionsCard';

const DisplayActions = () => {
  const actionType = ['badgeage', 'retrospection', 'declaration', 'notification'];

  return (
    <div className="flex flex-col justify-center items-center m-4 gap-4">
      <div className="p-2 rounded w-1/2 text-center font-Montserrat font-extrabold bg-color1">
        Vos actions
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-row gap-1 flex-wrap justify-around w-5/6">
          {actionType.map((info, index) => (
            <ActionCard key={index} actionType={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayActions;
