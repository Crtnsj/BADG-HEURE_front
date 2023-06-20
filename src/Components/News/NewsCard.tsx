type Props = {
  type: string;
  content: string;
  important: boolean;
};
const NewsCard = ({ type, content, important }: Props) => {
  if (!important) {
    return (
      <div className=" p-2 w-1/5 bg-color3 rounded">
        <h1 className="text-black font-Montserrat font-bold text-center block border-b-2 border-gray-500">
          {type}
        </h1>
        <p className="font-Montserrat text-center">{content}</p>
      </div>
    );
  } else {
    return (
      <div className="shadow-Important p-2 w-1/5 bg-color3 rounded ">
        <h1 className="text-black font-Montserrat font-bold text-center block border-b-2 border-gray-500">
          {type}
        </h1>
        <p className="font-Montserrat">{content}</p>
      </div>
    );
  }
};

export default NewsCard;
