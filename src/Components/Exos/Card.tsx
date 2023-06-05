type Props = {
  id: number;
  name: string;
  description: string;
  price: number;
};
const Card = ({ id, name, description, price }: Props) => {
  console.log('test', name, ' test ', description);
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>id : {id}</p>
    </div>
  );
};

export default Card;
