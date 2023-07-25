type Props = {
  type: string;
  content: string;
  important: boolean;
};
//Composant NewsCard qui prend en props les informations et les disposes de la bonne façon.
//Il ajoute aussi un contour rouge aux inforamtions importantes afin de les mettre en évidence
const NewsCard = ({ type, content, important }: Props) => {
  if (!important) {
    return (
      <div className=" p-5 sm:w-1/5 min-w-10rem bg-color3 rounded flex flex-col items-center">
        <h1 className="text-black font-Montserrat font-bold text-center block border-b-2 border-color3  ">
          {type}
        </h1>
        <p className="font-Montserrat text-center">{content}</p>
      </div>
    );
  } else {
    return (
      <div className="shadow-Important p-5 sm:w-1/5 min-w-10rem bg-color3 flex flex-col items-center">
        <h1 className="text-black font-Montserrat font-bold text-center block border-b-2 border-color3">
          {type}
        </h1>
        <p className="font-Montserrat text-center">{content}</p>
      </div>
    );
  }
};

export default NewsCard;
