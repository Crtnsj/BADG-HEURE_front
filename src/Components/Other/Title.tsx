type Props = {
  type: string;
};
const Title = (props: Props) => {
  return (
    <div className="title">
      {props.type === 'action' ? 'Vos actions' : <></>}
      {props.type === 'infos' ? 'Quelques infos RH en brefs' : <></>}
      {props.type === 'badgPage' ? 'Page de Badgeage' : <></>}
      {props.type === 'retrospection' ? 'Page de Retrospection' : <></>}
      {props.type === 'userManager' ? 'Gestion des Utilisateurs' : <></>}
      {props.type === 'userPage' ? 'Voici vos informations personnelles' : <></>}
      {props.type === 'addNews' ? 'Ajouter une news' : <></>}
    </div>
  );
};

export default Title;
