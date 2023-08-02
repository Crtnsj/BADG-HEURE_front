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
    <button onClick={handleClick} className="actionCard">
      {props.actionType === 'badgeage' && (
        <>
          <div className=" actionCard__pic actionCard__pic--clock"></div>
          <p>Badger ma présence</p>
        </>
      )}
      {props.actionType === 'retrospectionAdmin' && (
        <>
          <div className=" actionCard__pic actionCard__pic--eye"></div>
          <p>
            Rétrospection <strong>ADMIN</strong>
          </p>
        </>
      )}
      {props.actionType === 'retrospection' && (
        <>
          <div className=" actionCard__pic actionCard__pic--eye"></div>
          <p>Rétrospection</p>
        </>
      )}
      {props.actionType === 'declaration' && (
        <>
          <div className=" actionCard__pic actionCard__pic--retard"></div>
          <p>Déclaration de présence</p>
        </>
      )}
      {props.actionType === 'notification' && (
        <>
          <div className=" actionCard__pic actionCard__pic--enveloppe"></div>
          <p>Notifications</p>
        </>
      )}
    </button>
  );
};

export default ActionCard;
