import News from '../DisplayNews';

const Home = () => {
  return (
    <>
      <header className="flex justify-between bg-color1">
        <div className="bg-cover bg-center bg-logo h-8 w-14"></div>
        <div className="bg-cover bg-center bg-logo h-8 w-14"></div>
      </header>
      <body>
        <News />
      </body>
    </>
  );
};
export default Home;
