import React, { useEffect, useState } from 'react';

function Card() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d07453c8d36f47218d95588f726cabfa'
        );
        const data = await response.json();
        setNoticias(data.articles);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {noticias.map((noticia, index) => (
        <div className="Card flex flex-col items-center justify-center bg-white mb-12 border rounded-xl" key={index}>
          <div className="img-container max-w-800">
            <img src={noticia.urlToImage} alt="imagen" className="w-full h-auto cursor-pointer rounded-t-lg" style={{ maxWidth: '50rem' }} />
          </div>
          <div className="lower-container flex justify-center flex-col items-center">
            <h2 className="  text-red-500 text-xl mt-2">{noticia.title}</h2>
            <p>{noticia.description}</p>
            <a href={noticia.url} target='blank'><button className="bg-red-500 px-4 py-2 mt-3 rounded-t-xl font-medium hover:text-white">Ver Completo</button></a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
