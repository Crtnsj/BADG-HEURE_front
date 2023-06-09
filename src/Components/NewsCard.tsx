type Props = {
  type: string;
  content: string;
  important: boolean;
};
const NewsCard = ({ type, content, important }: Props) => {
  if (!important) {
    return (
      <div className="border-2 border-blue-500 p-2 w-1/5">
        <h1>{type}</h1>
        <p>{content}</p>
      </div>
    );
  } else {
    return (
      <div className="border-2 border-red-500 p-2 w-1/5">
        <h1>{type}</h1>
        <p>{content}</p>
      </div>
    );
  }
};

export default NewsCard;
