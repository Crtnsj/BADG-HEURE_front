import Card from './Card';
import { products } from './Products';

const Elements = () => {
  console.log(products);
  return (
    <>
      {products.map((product) => {
        return (
          <Card
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </>
  );
};

export default Elements;
