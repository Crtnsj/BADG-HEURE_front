type Props = {
  nom: string;
  prenom: string;
  email: string;
  droits: string;
};
const AccountCard = ({ nom, prenom, email, droits }: Props) => {
  return (
    <div className="flex justify-center">
      <p>{nom}</p>
      <p>{prenom}</p>
      <p>{email}</p>
      <p>{droits}</p>
    </div>
  );
};
export default AccountCard;
