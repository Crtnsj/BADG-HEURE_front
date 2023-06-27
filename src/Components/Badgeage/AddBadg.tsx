const AddBadg = () => {
  const handleClick = () => {};
  return (
    <div className="flex justify-center items-center m-4 gap-4">
      <div className="flex">
        <div className={`bg-cover bg-center bg-logo_hour w-2/4 aspect-square`}></div>
        <p>Badger ma présence</p>
        <button onClick={handleClick}>Valider mon entrée / sortie</button>
      </div>
    </div>
  );
};

export default AddBadg;
