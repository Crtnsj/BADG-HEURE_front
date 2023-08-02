type Props = {
  nom: string;
  prenom: string;
  email: string;
  droits: string;
};

const AccountCard = ({ nom, prenom, email, droits }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="accountCard">
        <div className="accountCard__initials">
          {prenom.charAt(0)}
          {nom.charAt(0)}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <strong>{nom}</strong>
            <p>{prenom}</p>
          </div>
          <p>{email}</p>
          <p>{droits}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
