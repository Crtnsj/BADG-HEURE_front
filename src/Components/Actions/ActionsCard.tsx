import { useNavigate } from 'react-router-dom';

type Props = {
  actionType: string;
};

const ActionCard = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home/${props.actionType}`);
  };

  return (
    <button
      onClick={handleClick}
      className="p-5 w-1/5 bg-color3 rounded text-center flex flex-col justify-center items-center"
    >
      {props.actionType === 'badgeage' && (
        <>
          <div className={`bg-cover bg-center bg-logo_hour w-2/4 aspect-square`}></div>
          <p>Badger ma présence</p>
        </>
      )}
      {props.actionType === 'retrospection' && (
        <>
          <div className={`bg-cover bg-center bg-eye w-2/4 aspect-square`}></div>
          <p>Rétrospection</p>
        </>
      )}
      {props.actionType === 'declaration' && (
        <>
          <div className={`bg-cover bg-center bg-retard w-2/4 aspect-square`}></div>
          <p>Déclaration de présence</p>
        </>
      )}
      {props.actionType === 'notification' && (
        <>
          <div className={`bg-cover bg-center bg-enveloppe w-2/4 aspect-square`}></div>
          <p>Notifications</p>
        </>
      )}
    </button>
  );
};

export default ActionCard;
