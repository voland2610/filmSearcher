import './FilmCard.css';

function FilmCard({filmData}) {

  return (
    <>
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
