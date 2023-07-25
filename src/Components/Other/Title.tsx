type Props = {
  type: string;
};
const Title = (props: Props) => {
  return (
    <div className="p-2 rounded w-1/2 min-w-64 text-center font-Montserrat font-extrabold bg-color1">
      {props.type === 'action' ? 'Vos actions' : <></>}
      {props.type === 'infos' ? 'Quelques infos RH en brefs' : <></>}
      {props.type === 'badgPage' ? 'Page de Badgeage' : <></>}
      {props.type === 'retrospection' ? 'Page de Retrospection' : <></>}
      {props.type === 'userManager' ? 'Gestion des Utilisateurs' : <></>}
      {props.type === 'userPage' ? 'Voici vos informations personnelles' : <></>}
    </div>
  );
};

export default Title;
