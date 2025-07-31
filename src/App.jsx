import React, { useState } from "react";
import MovieCard from "./components/MovieCard";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [film, setFilm] = useState([]);
 



  //chiave 
  const api_key = import.meta.env.VITE_KEY;

  //API 
  const api_endpoint_movie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
  const api_endpoint_film = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query} `




  //modifica dell'array film
  const normalizedFilm = film.map(item => ({
    ...item,
    title: item.name,
    original_title: item.original_name,
  }));

  const AllResults = [...movies, ...normalizedFilm]

  /* json di movie e film  */
  function handleSearch(e) {
    e.preventDefault()
    fetch(api_endpoint_movie)
      .then((res) => res.json())
      .then(data => setMovies(data.results));

    fetch(api_endpoint_film)
      .then((res) => res.json())
      .then(data => setFilm(data.results));


  }



  return (
    <>
      {/* navbar */}
      <section>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="https://fontmeme.com/permalink/250729/4f14a53fa1de29f8d5b889f745e0311e.png" alt="netflix-font" border="0" />
          </a>
          <form className="d-flex ms-auto" onSubmit={handleSearch}
            style={{ width: "220px" }}>
            <input type="text" className="form-control me-2" placeholder="Cerca un film..." value={query}
              onChange={e => setQuery(e.target.value)} />
            {/* button al click con i risultati */}
            <button className="btn btn-danger" type="submit">Cerca</button>
          </form>
        </nav>
      </section>

      <section className="pt-4">
        <div className="container">
          <div className="row">
            {/* map per le generare le card */}
            {AllResults.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </section >
    </>
  );
}