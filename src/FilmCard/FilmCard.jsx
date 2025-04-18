import { useState } from 'react';
import './FilmCard.css';

function FilmCard() {
  const [filmData, setFilmData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFilm = () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(inputValue)}&apikey=3783628`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setFilmData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Ошибка при получении данных о фильме:", error);
        setLoading(false);
      });
  };

  return (
    <>
      <label htmlFor="name">Введите название фильма:</label>
      <input
        type="text"
        name="name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={fetchFilm}>Поиск</button>

      {loading && <p>Загрузка...</p>}

      {filmData && filmData.Response !== "False" ? (
        <div className="film-card">
          <img className="film-card__img" src={filmData.Poster} alt={filmData.Title} />
          <p className="film-card__title">{filmData.Title}</p>
        </div>
      ) : (
        filmData && <p>Фильм не найден.</p>
      )}
    </>
  );
}

export default FilmCard;
