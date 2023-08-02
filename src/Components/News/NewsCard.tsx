type Props = {
  type: string;
  content: string;
  important: boolean;
};
//Composant NewsCard qui prend en props les informations et les disposes de la bonne façon.
//Il ajoute aussi un contour rouge aux inforamtions importantes afin de les mettre en évidence
const NewsCard = ({ type, content, important }: Props) => {
  return (
    <div className={`${important ? 'shadow-Important' : null} newsCard`}>
      <h1 className="newsCard__title">{type}</h1>
      <p className="text-center">{content}</p>
    </div>
  );
};

export default NewsCard;
