import React from "react";

import CountryFlag from "react-country-flag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { getCountryCode } from "../data/getCountryCode"

export default function MovieCard({ movie }) {
    const stelle = Math.ceil(movie.vote_average / 2);

    return (
        <div className="col-3 mb-2">
            <div className="card h-100 card-hover border-0">
                <img
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img"
                />
                <div className="card-details">
                    <strong>Titolo:</strong><p>{movie.title}</p>
                    <strong>Titolo Originale:</strong><p>{movie.original_title}</p>
                    <p>
                        Lingua: {movie.original_language}
                        <CountryFlag countryCode={getCountryCode(movie.original_language)} svg />
                    </p>
                    <span> Voto:
                        {Array.from({ length: 5 }).map((_, i) =>
                            i < stelle
                                ? <FontAwesomeIcon icon={solidStar} key={i} style={{ color: '#FFD700' }} />
                                : <FontAwesomeIcon icon={regularStar} key={i} style={{ color: '#FFD700' }} />
                        )}
                    </span>
                    <p className="trama-small">
                        <strong>Trama:</strong>
                        {movie.overview}
                    </p>
                </div>
            </div>
        </div>
    );
}

