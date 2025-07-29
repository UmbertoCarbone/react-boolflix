import React, { useState, useEffect } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const api_key = import.meta.env.VITE_KEY;

  const api_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;

  useEffect(() => {
    fetch(api_endpoint)
      .then((res) => res.json())
      .then(data);
      console.log(data)

  }, []);

  return (
    <>
      <section>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="https://fontmeme.com/permalink/250729/4f14a53fa1de29f8d5b889f745e0311e.png" alt="netflix-font" border="0" />
          </a>
          <form className="d-flex ms-auto" onSubmit={e => e.preventDefault()}
            style={{ width: "220px" }}>

            <input type="text" className="form-control me-2" placeholder="Cerca un film..." value={query}
              onChange={e => setQuery(e.target.value)} />

            <button className="btn btn-danger" type="button">
              Cerca
            </button>
          </form>
        </nav>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                {movies.map(movie => (
                  <div className="col-12 mb-2" key={movie.id}>
                    <div className="card p-2">
                      <strong>Titolo:</strong> {movie.title} <br />
                      <strong>Titolo Originale:</strong> {movie.original_title} <br />
                      <strong>Lingua:</strong> {movie.original_language} <br />
                      <strong>Voto:</strong> {movie.vote_average}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}