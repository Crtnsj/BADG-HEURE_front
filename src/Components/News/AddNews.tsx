import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNews = () => {
  const [type, setType] = useState('');
  const [important, setImportant] = useState(false);
  const [content, setContent] = useState('');

  const data = { type, important, content };

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3002/news/addNews`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
      })
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeType = (e: any) => setType(e.target.value);
  const handleChangeContent = (e: any) => setContent(e.target.value);
  const handleChangeImportant = (e: any) => setImportant(e.target.checked);

  return (
    <div className="flex flex-col justify-center items-center m-4 gap-4">
      <div className={`p-2 rounded w-1/2 text-center font-Montserrat font-extrabold bg-color1`}>
        Ajouter une news
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="font-Montserrat">
            Type <br />
            <input type="text" name="type" onChange={handleChangeType} value={type} />
          </label>
        </div>
        <div>
          <label className="font-Montserrat">
            Contenu du message <br />
            <textarea name="content" rows={5} onChange={handleChangeContent} value={content} />
          </label>
        </div>
        <div className="flex gap-3">
          <label className="font-Montserrat">Important</label>
          <input
            type="checkbox"
            name="important"
            onChange={handleChangeImportant}
            checked={important}
          />
        </div>
        <div className="flex justify-center m-2 ">
          <button className="bg-color2 text-white p-1 rounded-md font-Montserrat">Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default AddNews;
