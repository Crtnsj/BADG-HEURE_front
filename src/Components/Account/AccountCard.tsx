type Props = {
  nom: string;
  prenom: string;
  email: string;
  droits: string;
};

const AccountCard = ({ nom, prenom, email, droits }: Props) => {
  return (
    <div className="flex justify-center font-Montserrat">
      <div className="flex bg-color4 p-4 rounded justify-center gap-3">
        <div className="text-5xl font-black text-color2 mr-2 bg-color1 rounded-full p-3 flex justify-center items-center h-24 w-24">
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
